<script setup lang="ts">
import { ArrowLeft, ArrowRight } from "./icons";

const emit = defineEmits<{
    prev: [];
    next: [];
}>();

const handlePrevClick = () => {
    emit("prev");
};
const handleNextClick = () => {
    emit("next");
};
</script>

<template>
    <div class="fox-preview-switch">
        <div
            class="fox-preview-switch-item fox-preview-switch-item-left"
            role="button"
            tabindex="0"
            aria-label="上一张图片"
            @click="handlePrevClick"
            @keydown.enter.prevent="handlePrevClick"
            @keydown.space.prevent="handlePrevClick">
            <ArrowLeft class="fox-preview-switch-icon" />
        </div>
        <div
            class="fox-preview-switch-item"
            role="button"
            tabindex="0"
            aria-label="下一张图片"
            @click="handleNextClick"
            @keydown.enter.prevent="handleNextClick"
            @keydown.space.prevent="handleNextClick">
            <ArrowRight class="fox-preview-switch-icon" />
        </div>
    </div>
</template>
