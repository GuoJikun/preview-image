<script setup lang="ts">
import ArrowRight from '@/components/arrow-right.vue'

const emit = defineEmits<{
  prev: []
  next: []
}>()

const handlePrevClick = () => {
  emit('prev')
}
const handleNextClick = () => {
  emit('next')
}
</script>

<template>
  <div class="fox-preview-switch">
    <div class="fox-preview-switch-item fox-preview-switch-item-left" @click="handlePrevClick">
      <ArrowRight class="preview-operate-icon preview-switch-icon-left" />
    </div>
    <div class="fox-preview-switch-item" @click="handleNextClick">
      <ArrowRight class="fox-preview-switch-icon fox-preview-switch-icon" />
    </div>
  </div>
</template>

<style lang="scss">
.fox-preview-switch {
  z-index: 10;

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
</style>
