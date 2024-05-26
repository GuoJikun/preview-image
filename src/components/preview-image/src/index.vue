<template>
  <teleport :to="props.appendTo">
    <transition>
      <div
        role="dialog"
        ref="refEl"
        class="fox-preview"
        :style="{
          'z-index': props.zIndex
        }"
        tabindex="1"
        @keyup.esc.exact="close"
        v-if="flag"
      >
        <div
          class="fox-preview-canvas"
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
              <img class="fox-preview-image" :src="item" alt="被拖拽的图片" draggable="false" />
            </div>
          </template>
        </div>
        <!-- 关闭按钮 -->
        <div class="fox-preview-close" @click="close">
          <Close />
        </div>
        <!-- 左右切换按钮 -->
        <Switch v-if="uri && uri.length > 1" @prev="prev" @next="next" />
        <!-- 工具栏 -->
        <Toolbar
          v-if="showToolbar"
          @click="handleToolsClick"
          :scale="getCurrScale"
          :index="getCurrIndex"
        />
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import types from '@/utils/types'
import Close from '@/components/close.vue'
import Switch from './switch.vue'
import Toolbar from './toolbar.vue'
import { watch, onMounted, computed, ref, reactive, onBeforeMount } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import { downloadFile, getScrollWidth } from './utils'

defineOptions({
  name: 'FoxPreviewImage'
})

export interface Props {
  modelValue: boolean
  src: string | string[]
  zIndex?: number
  initialIndex?: number
  appendTo?: string | HTMLElement
  showToolbar?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  src: '',
  zIndex: 9000,
  initialIndex: 0,
  appendTo: 'body',
  showToolbar: true
})

const emit = defineEmits(['update:modelValue'])

let bodyStyleCache = ''

onBeforeMount(() => {
  bodyStyleCache = document.body.style.cssText
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
  if (status.value !== 1) {
    return
  }

  const { x: mouseX, y: mouseY } = e

  // 鼠标的移动距离
  const mvX = mouseX - startLocation.x
  const mvY = mouseY - startLocation.y
  x.value = mvX + x.value - cacheX.value
  y.value = mvY + y.value - cacheY.value

  cacheX.value = mvX
  cacheY.value = mvY
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

const handleMouseMove = useThrottleFn(move, 10)
const handleMousewheel = useThrottleFn(mousewheel, 10)

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

const downloadImage = () => {
  const cur = uri.value[active.value]
  const tmp = cur.split('/')
  const downloadName = tmp[tmp.length - 1] as string

  downloadFile(cur, downloadName)
}

const initConf = () => {
  angle.value = 0
  scale.value = 1
  x.value = 0
  y.value = 0
  startLocation.x = 0
  startLocation.y = 0
  cacheX.value = 0
  cacheY.value = 0
}

// 上一张图片
const prev = () => {
  const len = uri.value.length || 0
  if (active.value > 0) {
    active.value--
  } else {
    active.value = len - 1
  }
  initConf()
}
// 下一张图片
const next = () => {
  const len = uri.value.length || 0
  if (active.value < len - 1) {
    active.value++
  } else {
    active.value = 0
  }

  initConf()
}

const getCurrScale = computed(() => {
  return parseFloat(scale.value.toFixed(1))
})

const getCurrIndex = computed(() => {
  return `${active.value + 1}/${uri.value.length}`
})

const handleToolsClick = (type: any) => {
  switch (type) {
    case 'zoom-out':
      zoomOut()
      break
    case 'zoom-in':
      enlarge()
      break
    case 'contraRotate':
      anticlockwiseRotation()
      break
    case 'clockwiseRotation':
      clockwiseRotation()
      break
    case 'download':
      downloadImage()
      break
  }
}

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

      initConf()

      uri.value = [val as string]
    } else if (type === 'array') {
      if (props.initialIndex >= 0 && props.initialIndex < val.length) {
        active.value = props.initialIndex
      } else {
        active.value = 0
      }

      initConf()
      uri.value = val as string[]
    }
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss">
.fox-preview {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.4);
  overflow: hidden;
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
    z-index: 10;
    & > svg {
      position: absolute;
      left: 15px;
      bottom: 15px;
    }
    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.5);
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
