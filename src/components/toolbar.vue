<script setup lang="ts">
import ZoomOut from '@/components/zoom-out.vue'
import ZoomIn from '@/components/zoom-in.vue'
import RotateLeft from '@/components/rotate-left.vue'
import RotateRight from '@/components/rotate-right.vue'
import Download from '@/components/download.vue'
import type { ToolType } from './utils'
import { computed } from 'vue'

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
console.log(layouts)
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

<style lang="scss">
.fox-preview-toolbar {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 30px;
  z-index: 10;
  background-color: #606266;
  display: flex;
  padding: 8px 24px;
  gap: 24px;
  &-item {
    cursor: pointer;
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
</style>
