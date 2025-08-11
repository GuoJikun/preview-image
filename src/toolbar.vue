<script setup lang="ts">
import { computed } from 'vue'
import { Download, RotateLeft, RotateRight, ZoomIn, ZoomOut } from './icons'
import type { ToolType } from './utils'

export interface Props {
  scale: number
  index: string
  layout: string
}

const props = withDefaults(defineProps<Props>(), {
  scale: 1,
  index: '1/1',
  layout: 'zoomOut, zoomIn, scale, position, rotateLeft, rotateRight, download',
})

const emit = defineEmits<{ click: [type: ToolType] }>()

const handleClick = (type: ToolType) => {
  emit('click', type)
}

const layouts = computed(() =>
  props.layout.split(',').map((item) => item.trim()),
)
</script>

<template>
  <div class="fox-preview-toolbar">
    <ZoomOut
      v-if="layouts.includes('zoomOut')"
      role="button"
      title="缩小"
      class="fox-preview-toolbar-item"
      :style="{ order: layouts.indexOf('zoomOut') }"
      @click="handleClick('zoom-out')"
    />
    <ZoomIn
      v-if="layouts.includes('zoomIn')"
      role="button"
      title="放大"
      class="fox-preview-toolbar-item"
      :style="{ order: layouts.indexOf('zoomIn') }"
      @click="handleClick('zoom-in')"
    />

    <div
      v-if="layouts.includes('scale')"
      role="button"
      title="缩放倍数"
      tabindex="-1"
      class="fox-preview-toolbar-item fox-preview-toolbar-scale"
      :style="{ order: layouts.indexOf('scale') }"
    >
      {{ props.scale }}
    </div>

    <div
      v-if="layouts.includes('position')"
      role="button"
      title="图片位置"
      class="fox-preview-toolbar-item fox-preview-toolbar-position"
      :style="{ order: layouts.indexOf('position') }"
    >
      {{ props.index }}
    </div>

    <RotateLeft
      v-if="layouts.includes('rotateLeft')"
      role="button"
      title="左旋转"
      class="fox-preview-toolbar-item"
      :style="{ order: layouts.indexOf('rotateLeft') }"
      @click="handleClick('contraRotate')"
    />
    <RotateRight
      v-if="layouts.includes('rotateRight')"
      role="button"
      title="右旋转"
      class="fox-preview-toolbar-item"
      :style="{ order: layouts.indexOf('rotateRight') }"
      @click="handleClick('clockwiseRotation')"
    />
    <Download
      v-if="layouts.includes('download')"
      role="button"
      title="下载/保存"
      class="fox-preview-toolbar-item"
      :style="{ order: layouts.indexOf('download') }"
      @click="handleClick('download')"
    />
  </div>
</template>
