<script setup lang="ts">
import { computed, type Component } from "vue";
import { Download, RotateLeft, RotateRight, ZoomIn, ZoomOut } from "./icons";
import type { ToolType } from "./utils";

export interface Props {
    scale: number;
    index: string;
    layout: string;
}

const props = withDefaults(defineProps<Props>(), {
    scale: 1,
    index: "1/1",
    layout: "zoomOut, zoomIn, scale, position, rotateLeft, rotateRight, download",
});

const emit = defineEmits<{ click: [type: ToolType] }>();

const handleClick = (type: ToolType) => {
    emit("click", type);
};

interface ToolItem {
    token: string;
    title: string;
    icon?: Component;
    action?: ToolType;
}

const toolDefs: Record<string, ToolItem> = {
    zoomOut: {
        token: "zoomOut",
        icon: ZoomOut,
        action: "zoom-out",
        title: "缩小",
    },
    zoomIn: { token: "zoomIn", icon: ZoomIn, action: "zoom-in", title: "放大" },
    scale: { token: "scale", title: "缩放倍数" },
    position: { token: "position", title: "图片位置" },
    rotateLeft: {
        token: "rotateLeft",
        icon: RotateLeft,
        action: "contraRotate",
        title: "左旋转",
    },
    rotateRight: {
        token: "rotateRight",
        icon: RotateRight,
        action: "clockwiseRotation",
        title: "右旋转",
    },
    download: {
        token: "download",
        icon: Download,
        action: "download",
        title: "下载/保存",
    },
};

const tools = computed<ToolItem[]>(() =>
    props.layout
        .split(",")
        .map((item) => item.trim())
        .filter((token) => Boolean(toolDefs[token]))
        .map((token) => toolDefs[token]),
);
</script>

<template>
    <div class="fox-preview-toolbar">
        <template v-for="tool in tools" :key="tool.token">
            <div
                v-if="tool.action"
                role="button"
                :title="tool.title"
                :aria-label="tool.title"
                tabindex="0"
                class="fox-preview-toolbar-item"
                @click="handleClick(tool.action)"
                @keydown.enter.prevent="handleClick(tool.action)"
                @keydown.space.prevent="handleClick(tool.action)">
                <component
                    :is="tool.icon"
                    aria-hidden="true"
                    focusable="false" />
            </div>
            <div
                v-else
                :title="tool.title"
                :aria-label="tool.title"
                class="fox-preview-toolbar-item"
                :class="
                    tool.token === 'scale'
                        ? 'fox-preview-toolbar-scale'
                        : 'fox-preview-toolbar-position'
                ">
                {{ tool.token === "scale" ? props.scale : props.index }}
            </div>
        </template>
    </div>
</template>
