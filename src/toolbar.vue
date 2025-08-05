<script setup lang="ts">
import type { ToolType } from './utils'
import { computed } from 'vue'
import { ZoomOut, ZoomIn, RotateLeft, RotateRight, Download } from './icons.tsx'

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

const layouts = computed(() => props.layout.split(',').map((item) => item.trim()))
</script>

<template>
  <div class="fox-preview-toolbar">
    <ZoomOut
      role="button"
      title="缩小"
      class="fox-preview-toolbar-item"
      v-if="layouts.includes('zoomOut')"
      :style="{ order: layouts.indexOf('zoomOut') }"
      @click="handleClick('zoom-out')"
    />
    <ZoomIn
      role="button"
      title="放大"
      class="fox-preview-toolbar-item"
      v-if="layouts.includes('zoomIn')"
      :style="{ order: layouts.indexOf('zoomIn') }"
      @click="handleClick('zoom-in')"
    />

    <div
      role="button"
      title="缩放倍数"
      tabindex="-1"
      class="fox-preview-toolbar-item fox-preview-toolbar-scale"
      v-if="layouts.includes('scale')"
      :style="{ order: layouts.indexOf('scale') }"
    >
      {{ props.scale }}
    </div>

    <div
      role="button"
      title="图片位置"
      class="fox-preview-toolbar-item fox-preview-toolbar-position"
      v-if="layouts.includes('position')"
      :style="{ order: layouts.indexOf('position') }"
    >
      {{ props.index }}
    </div>

    <RotateLeft
      role="button"
      title="左旋转"
      class="fox-preview-toolbar-item"
      v-if="layouts.includes('rotateLeft')"
      :style="{ order: layouts.indexOf('rotateLeft') }"
      @click="handleClick('contraRotate')"
    />
    <RotateRight
      role="button"
      title="右旋转"
      class="fox-preview-toolbar-item"
      v-if="layouts.includes('rotateRight')"
      :style="{ order: layouts.indexOf('rotateRight') }"
      @click="handleClick('clockwiseRotation')"
    />
    <Download
      role="button"
      title="下载/保存"
      class="fox-preview-toolbar-item"
      v-if="layouts.includes('download')"
      :style="{ order: layouts.indexOf('download') }"
      @click="handleClick('download')"
    />
  </div>
</template>
