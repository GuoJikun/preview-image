<template>
  <teleport to="body">
    <transition>
      <div
        ref="refEl"
        class="owl-preview"
        :style="{
          'z-index': zIndex
        }"
        tabindex="1"
        @keyup.esc.exact="close"
        v-if="flag"
      >
        <div
          class="owl-preview-canvas"
          @mousewheel="handleMousewheel"
          @DOMMouseScroll="handleMousewheel"
        >
          <template v-for="(item, i) in uri" :key="i">
            <div
              v-if="active === i"
              @mousemove="handleMouseMove"
              @mouseup="mouseup"
              @mousedown="mousedown"
              :style="{
                transform: `rotate(${angle}deg) scale(${scale}) translate(${x}px,${y}px)`
              }"
              style="display: inline-block"
            >
              <img class="owl-preview-image" :src="item" alt="被拖拽的图片" draggable="false" />
            </div>
          </template>
        </div>
        <!-- 关闭按钮 -->
        <div class="owl-preview-close" :style="{ 'z-index': zIndex + 1 }" @click="close">
          <Close />
        </div>
        <!-- 左右切换按钮 -->
        <div
          class="owl-preview-operate"
          :style="{ 'z-index': zIndex + 1 }"
          v-if="uri && uri.length > 1"
        >
          <div class="owl-preview-operate-item owl-preview-operate-item-left" @click="prev">
            <ArrowRight class="owl-preview-operate-icon owl-preview-operate-icon-left" />
          </div>
          <div class="owl-preview-operate-item" @click="next">
            <ArrowRight class="owl-preview-operate-icon owl-preview-operate-icon" />
          </div>
        </div>

        <div class="owl-preview-utils" :style="{ 'z-index': zIndex + 1 }">
          <ZoomOut title="缩小" class="owl-preview-utils-item" @click="zoomOut" />
          <ZoomIn title="放大" class="owl-preview-utils-item" @click="enlarge" />

          <div
            title="缩放倍数"
            tabindex="-1"
            class="owl-preview-utils-item owl-preview-utils-scale"
            v-text="getCurrScale"
          ></div>

          <div
            v-if="uri && uri.length > 1"
            title="图片位置"
            class="owl-preview-utils-item owl-preview-utils-position"
            v-text="getCurrIndex"
          ></div>

          <RotateLeft title="左旋转" class="owl-preview-utils-item" @click="clockwiseRotation" />
          <RotateRight
            title="右旋转"
            class="owl-preview-utils-item"
            @click="anticlockwiseRotation"
          />
          <Download title="下载/保存" class="owl-preview-utils-item" @click="downloadFile" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import types from '@/utils/types'
import ZoomOut from '@/components/zoom-out.vue'
import ZoomIn from '@/components/zoom-in.vue'
import Close from '@/components/close.vue'
import RotateLeft from '@/components/rotate-left.vue'
import RotateRight from '@/components/rotate-right.vue'
import ArrowRight from '@/components/arrow-right.vue'
import Download from '@/components/download.vue'
import { watch, onMounted, computed, ref, reactive, onBeforeMount } from 'vue'

defineOptions({
  name: 'FoxPreviewImage'
})

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  src: {
    type: [String, Array],
    required: true
  },
  zIndex: {
    type: Number,
    default: 9000
  },
  initialIndex: {
    type: Number,
    default: 0
  }
})
const emit = defineEmits(['update:modelValue'])

let bodyStyleCache = ''

onBeforeMount(() => {
  bodyStyleCache = document.body.style.cssText
  console.log(bodyStyleCache)
})

const refEl = ref(null)
let flag = ref<boolean>(false)
let status = ref<number>(0)
let active = props.src && props.src.length ? ref<number>(props.initialIndex) : ref<number>(0)
let angle = ref<number>(0)
let scale = ref<number>(1)
let cacheX = ref<number>(0)
let cacheY = ref<number>(0)
let x = ref<number>(0)
let y = ref<number>(0)
let uri = ref<Array<string>>([])
let startLocation = reactive({
  x: 0,
  y: 0
})

const init = () => {
  flag.value = props.modelValue
}
const close = () => {
  flag.value = false
  emit('update:modelValue', flag.value)
}

const move = (e: MouseEvent) => {
  if (status.value === 1) {
    const { x: mouseX, y: mouseY } = e
    // 鼠标的移动距离
    const mvX = mouseX - startLocation.x
    const mvY = mouseY - startLocation.y
    x.value = mvX + x.value - cacheX.value
    y.value = mvY + y.value - cacheY.value
    requestAnimationFrame(() => {
      cacheX.value = mvX
      cacheY.value = mvY
    })
  }
}

/**
 * 缩小
 */
const zoomOut = () => {
  if (scale.value > 0.5) {
    scale.value -= 0.1
  }
}
/**
 * 放大
 */
const enlarge = () => {
  if (scale.value < 2) {
    scale.value += 0.1
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mousewheel = (ev: any) => {
  requestAnimationFrame(() => {
    const isUp = (ev.wheelDelta || ev.detail * -40) > 0
    if (isUp) {
      enlarge()
    } else {
      zoomOut()
    }
  })
}

const handleMouseMove = move
const handleMousewheel = mousewheel

const mouseup = () => {
  status.value = 0
  cacheX.value = 0
  cacheY.value = 0
}
const mousedown = (e: MouseEvent) => {
  status.value = 1
  startLocation = { x: e.x, y: e.y }
}

/**
 * 顺时针旋转
 */
const clockwiseRotation = () => {
  angle.value += 90
}
/**
 * 逆时针旋转
 */
const anticlockwiseRotation = () => {
  angle.value -= 90
}

/**下载图片 */

const downloadFile = () => {
  const cur = uri.value[active.value]
  const a = document.createElement('a')
  const tmp = cur.split('/')
  a.download = tmp[tmp.length - 1] as string
  a.href = cur
  a.click()
  a.remove()
}

/**
 * 获取滚动条的宽度
 */
const getScrollWidth = () => {
  const scroll = document.createElement('div')
  const scrollIn = document.createElement('div')
  scroll.appendChild(scrollIn)
  scroll.style.width = '100px'
  scroll.style.height = '50px'
  scroll.style.overflow = 'scroll'
  scroll.style.marginLeft = '-100000px'
  document.body.appendChild(scroll)
  const scrollInWidth = scrollIn.offsetWidth
  const scrollWidth = scroll.offsetWidth
  const tmp = setTimeout(() => {
    document.body.removeChild(scroll)
    clearTimeout(tmp)
  }, 10)
  return scrollWidth - scrollInWidth
}
// 上一张图片
const prev = () => {
  const len = uri.value.length || 0
  if (active.value > 0) {
    active.value--
  } else {
    active.value = len - 1
  }
  angle.value = 0
  scale.value = 1
  x.value = 0
  y.value = 0
  startLocation.x = 0
  startLocation.y = 0
  cacheX.value = 0
  cacheY.value = 0
}
// 下一张图片
const next = () => {
  const len = uri.value.length || 0
  if (active.value < len - 1) {
    active.value++
  } else {
    active.value = 0
  }
  angle.value = 0
  scale.value = 1
  x.value = 0
  y.value = 0

  startLocation.x = 0
  startLocation.y = 0
  cacheX.value = 0
  cacheY.value = 0
}

const getCurrScale = computed(() => {
  return parseFloat(scale.value.toFixed(1))
})

const getCurrIndex = computed(() => {
  return `${active.value + 1}/${uri.value.length}`
})

onMounted(() => {
  init()
})

const hasScrollbar = (el: HTMLElement) => {
  if (el.scrollHeight > window.innerHeight) {
    return true
  }
  return false
}

watch(
  () => props.modelValue,
  (val) => {
    flag.value = val
    if (val) {
      if (refEl.value !== null) {
        ;(refEl.value as HTMLElement).focus()
      }
      const isScrollBar = hasScrollbar(document.body)
      if (isScrollBar) {
        document.body.style.paddingRight = getScrollWidth() + 'px'
        document.body.classList.add('fox-lock-window')
      }
    } else {
      document.body.classList.remove('fox-lock-window')
      if (bodyStyleCache) {
        document.body.style.cssText = bodyStyleCache
      } else {
        document.body.removeAttribute('style')
      }
    }
  }
)

watch(
  () => props.src,
  (val) => {
    const type = types(val)
    if (type === 'string') {
      active.value = 0
      angle.value = 0
      scale.value = 1
      x.value = 0
      y.value = 0
      startLocation.x = 0
      startLocation.y = 0
      cacheX.value = 0
      cacheY.value = 0

      uri.value = [val as string]
    } else if (type === 'array') {
      if (props.initialIndex >= 0 && props.initialIndex < val.length) {
        active.value = props.initialIndex
      } else {
        active.value = 0
      }
      uri.value = val as string[]
      angle.value = 0
      scale.value = 1
      x.value = 0
      y.value = 0
      startLocation.x = 0
      startLocation.y = 0
      cacheX.value = 0
      cacheY.value = 0
      uri.value = val as string[]
    }
  }
)
</script>

<style lang="scss">
.owl-preview {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -50vw;
  margin-top: -50vh;
  background-color: rgba($color: #000000, $alpha: 0.4);
  overflow: hidden;
  border-radius: 4px;
  backdrop-filter: saturate(50%) blur(4px);
  &-canvas {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0;
  }
  &-image {
    user-select: none;
    display: block;
    pointer-events: none;
    &:active {
      cursor: pointer;
    }
  }
  &-close {
    position: absolute;
    top: -40px;
    right: -40px;
    user-select: none;
    cursor: pointer;
    background-color: rgba($color: #000000, $alpha: 0.3);
    border-radius: 50%;
    font-size: 26px;
    height: 80px;
    width: 80px;
    color: white;
    overflow: hidden;
    transition: background-color 0.15s;
    & > svg {
      position: absolute;
      left: 15px;
      bottom: 15px;
    }
    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.5);
    }
  }
  &-operate {
    &-item {
      background-color: #606266;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      cursor: pointer;
      position: absolute;
      top: 50%;
      margin-top: -20px;
      right: 5vw;
      &-left {
        left: 5vw;
      }
    }
    & &-icon {
      font-size: 24px;
      color: #ffffff;
      &-left {
        transform: rotate(180deg);
      }
    }
  }
  & &-utils {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-98px);
    border-radius: 30px;
    z-index: 20;
    background-color: #606266;
    display: flex;
    padding: 8px 10px;
    &-item {
      cursor: pointer;
      margin: 0 10px;
      color: white;
      font-size: 24px;
    }
    &-scale {
      font-size: 14px;
      position: relative;
      background-color: #606266;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      width: 34px;
      border-radius: 1px;
      line-height: 22px;
      text-align: center;
      cursor: unset;
      &::before,
      &::after {
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        z-index: 1;
        border: 1px solid #606266;
        box-sizing: border-box;
      }
      &::before {
        height: 12px;
        top: 50%;
        margin-top: -6px;
        width: 34px;
        left: -1px;
        border-width: 0 1px;
      }
      &::after {
        height: 24px;
        width: 20px;
        top: -1px;
        left: 50%;
        margin-left: -10px;
        border-width: 1px 0;
      }
    }
    &-position {
      font-size: 14px;
      box-sizing: border-box;
      width: 24px;
      line-height: 24px;
      text-align: center;
      cursor: default;
    }
  }
}
.font-svg {
  user-select: none;
  font-size: 18px;
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  font-weight: 500;
}
.fox-lock-window {
  overflow: hidden;
}
</style>
