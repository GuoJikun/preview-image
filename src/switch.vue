<script setup lang="ts">
import { ArrowRight, ArrowLeft } from './icons.tsx'

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
      <ArrowLeft class="fox-preview-switch-icon" />
    </div>
    <div class="fox-preview-switch-item" @click="handleNextClick">
      <ArrowRight class="fox-preview-switch-icon" />
    </div>
  </div>
</template>
