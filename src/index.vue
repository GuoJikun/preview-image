<script lang="ts" setup>
import { useThrottleFn } from '@vueuse/core'
import { computed, onBeforeMount, onMounted, reactive, ref, watch } from 'vue'
import { Close } from './icons.tsx'
import Switch from './switch.vue'
import Toolbar from './toolbar.vue'
import types, { downloadFile, getScrollWidth, type ToolType } from './utils'

defineOptions({
  name: 'FoxPreviewImage',
})

export interface Props {
  modelValue: boolean
  src: string | string[]
  zIndex?: number
  initialIndex?: number
  appendTo?: string | HTMLElement
  showToolbar?: boolean
  enableTeleport?: boolean
  layout?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  src: '',
  zIndex: 9000,
  initialIndex: 0,
  appendTo: 'body',
  showToolbar: true,
  enableTeleport: false,
  layout: 'zoomOut, zoomIn, scale, position, rotateLeft, rotateRight, download',
})

const emit = defineEmits(['update:modelValue'])

let bodyStyleCache = ''

onBeforeMount(() => {
  bodyStyleCache = document.body.style.cssText
})

const refEl = ref(null)
const flag = ref<boolean>(false)
const status = ref<number>(0)
const active =
  props.src && props.src.length
    ? ref<number>(props.initialIndex)
    : ref<number>(0)
const angle = ref<number>(0)
const scale = ref<number>(1)
const cacheX = ref<number>(0)
const cacheY = ref<number>(0)
const x = ref<number>(0)
const y = ref<number>(0)
const uri = ref<Array<string>>([])
let startLocation = reactive({
  x: 0,
  y: 0,
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
  const downloadName = tmp.at(-1) as string

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
  return Number.parseFloat(scale.value.toFixed(1))
})

const getCurrIndex = computed(() => {
  return `${active.value + 1}/${uri.value.length}`
})

const handleToolsClick = (type: ToolType) => {
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
        document.body.style.paddingRight = `${getScrollWidth()}px`
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
  },
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
    immediate: true,
  },
)
</script>

<template>
  <teleport :to="props.appendTo" :disabled="props.enableTeleport === false">
    <transition>
      <div
        v-if="flag"
        ref="refEl"
        role="dialog"
        class="fox-preview"
        :style="{
          'z-index': props.zIndex,
        }"
        tabindex="1"
        @keyup.esc.exact="close"
      >
        <div
          class="fox-preview-canvas"
          @mousewheel="handleMousewheel"
          @DOMMouseScroll="handleMousewheel"
        >
          <template v-for="(item, i) in uri" :key="i">
            <div
              v-if="active === i"
              :style="{
                transform: `rotate(${angle}deg) scale(${scale}) translate(${x}px,${y}px)`,
              }"
              style="display: inline-block"
              @mousemove="handleMouseMove"
              @mouseup="mouseup"
              @mousedown="mousedown"
            >
              <img
                class="fox-preview-image"
                :src="item"
                alt="被拖拽的图片"
                draggable="false"
              />
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
          :scale="getCurrScale"
          :index="getCurrIndex"
          :layout="props.layout"
          @click="handleToolsClick"
        />
      </div>
    </transition>
  </teleport>
</template>
