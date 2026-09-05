<script lang="ts" setup>
import { nextTick, onUnmounted, ref, watch } from "vue";
import { Close } from "./icons";
import { usePreviewImageState } from "./composable";
import Switch from "./switch.vue";
import Toolbar from "./toolbar.vue";
import types, { downloadFile, getScrollWidth, type ToolType } from "./utils";

defineOptions({
    name: "FoxPreviewImage",
});

export interface Props {
    modelValue: boolean;
    src: string | string[];
    zIndex?: number;
    initialIndex?: number;
    appendTo?: string | HTMLElement;
    showToolbar?: boolean;
    teleport?: boolean;
    layout?: string;
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    src: "",
    zIndex: 9000,
    initialIndex: 0,
    appendTo: "body",
    showToolbar: true,
    enableTeleport: false,
    layout: "zoomOut, zoomIn, scale, position, rotateLeft, rotateRight, download",
});

const emit = defineEmits(["update:modelValue"]);

let bodyStyleCache = "";
let isKeyupListening = false;
let isDragListening = false;
const DRAG_TOUCH_OPTIONS = { passive: true } as AddEventListenerOptions;

const dialogRef = ref<HTMLElement | null>(null);
const isVisible = ref<boolean>(false);
const previewState = usePreviewImageState(props.initialIndex);
const {
    active,
    imageUrls,
    currentScale,
    currentIndexText,
    currentImageSrc,
    imageTransformStyle,
    resetTransformState,
    mousemove,
    touchmove,
    mouseup,
    touchend,
    mousedown,
    touchstart,
    zoomOut,
    enlarge,
    mousewheel,
    clockwiseRotation,
    anticlockwiseRotation,
    prev,
    next,
    initConf,
} = previewState;

const close = () => {
    cleanupDragListeners();
    isVisible.value = false;
    emit("update:modelValue", isVisible.value);
};

const cleanupDragListeners = () => {
    if (!isDragListening) return;
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
    window.removeEventListener("touchmove", touchmove);
    window.removeEventListener("touchend", touchend);
    isDragListening = false;
};

const bindDragListeners = () => {
    if (isDragListening) return;
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
    window.addEventListener("touchmove", touchmove, DRAG_TOUCH_OPTIONS);
    window.addEventListener("touchend", touchend);
    isDragListening = true;
};

const handleMouseDown = (e: MouseEvent) => {
    mousedown(e);
    bindDragListeners();
};

const handleTouchStart = (e: TouchEvent) => {
    touchstart(e);
    bindDragListeners();
};

/** 下载图片 */
const downloadImage = () => {
    const url = imageUrls.value[active.value];
    if (!url) return;
    const name = url.split("/").pop()?.split(/[?#]/)[0] || "image";

    downloadFile(url, name);
};

// 上一张图片
// 下一张图片
/**
 * 键盘操作：监听在 window 上，不依赖弹窗持有焦点
 * （点击图片或工具栏后焦点会落到 body，元素级监听会失效）
 */
const onKeyup = (e: KeyboardEvent) => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    switch (e.key) {
        case "Escape":
            e.preventDefault();
            close();
            break;
        case "ArrowLeft":
            e.preventDefault();
            prev();
            break;
        case "ArrowRight":
            e.preventDefault();
            next();
            break;
    }
};

const bindKeyupListener = () => {
    if (isKeyupListening) return;
    window.addEventListener("keyup", onKeyup);
    isKeyupListening = true;
};

const cleanupKeyupListener = () => {
    if (!isKeyupListening) return;
    window.removeEventListener("keyup", onKeyup);
    isKeyupListening = false;
};

// translate 必须放在最外层（CSS transform 从右往左应用），
// 否则拖拽位移会被旋转/缩放矩阵变换，导致旋转后拖动方向与鼠标不一致
const handleToolsClick = (type: ToolType) => {
    switch (type) {
        case "zoom-out":
            zoomOut();
            break;
        case "zoom-in":
            enlarge();
            break;
        case "contraRotate":
            anticlockwiseRotation();
            break;
        case "clockwiseRotation":
            clockwiseRotation();
            break;
        case "download":
            downloadImage();
            break;
    }
};

// 根滚动条绘制在所有元素之上，必须检测真实滚动容器（scrollingElement）并加锁，
// 否则残留的页面滚动条会盖住贴边的关闭按钮
const hasScrollbar = () => {
    const scroller = document.scrollingElement ?? document.documentElement;
    return scroller.scrollHeight > scroller.clientHeight;
};

watch(
    () => props.modelValue,
    (val) => {
        isVisible.value = val;
        if (val) {
            // 打开前快照 body 样式，避免覆盖挂载后其他组件对 body 的修改
            bodyStyleCache = document.body.style.cssText;
            cleanPreviewState();
            // v-if 的 DOM 此刻尚未渲染，必须等 nextTick 后再聚焦
            nextTick(() => dialogRef.value?.focus());
            bindKeyupListener();
            if (hasScrollbar()) {
                document.body.style.paddingRight = `${getScrollWidth()}px`;
                document.documentElement.classList.add("fox-lock-window");
                document.body.classList.add("fox-lock-window");
            }
        } else {
            cleanupKeyupListener();
            cleanupDragListeners();
            document.documentElement.classList.remove("fox-lock-window");
            document.body.classList.remove("fox-lock-window");
            if (bodyStyleCache) {
                document.body.style.cssText = bodyStyleCache;
            } else {
                document.body.removeAttribute("style");
            }
            resetTransformState();
        }
    },
    { immediate: true },
);

watch(
    () => props.src,
    (val) => {
        const type = types(val);
        if (type === "string") {
            active.value = 0;

            initConf();

            imageUrls.value = [val as string];
        } else if (type === "array") {
            if (props.initialIndex >= 0 && props.initialIndex < val.length) {
                active.value = props.initialIndex;
            } else {
                active.value = 0;
            }

            initConf();
            imageUrls.value = val as string[];
        }
    },
    {
        immediate: true,
    },
);

const cleanPreviewState = () => {
    cleanupDragListeners();
    resetTransformState();
};

onUnmounted(() => {
    cleanupKeyupListener();
    cleanupDragListeners();
});
</script>

<template>
    <teleport :to="props.appendTo" :disabled="!props.teleport">
        <transition>
            <div
                v-if="isVisible"
                ref="dialogRef"
                role="dialog"
                aria-modal="true"
                aria-label="图片预览"
                class="fox-preview"
                :style="{
                    'z-index': props.zIndex,
                }"
                tabindex="0">
                <div class="fox-preview-canvas" @wheel="mousewheel">
                    <div
                        v-if="currentImageSrc"
                        :style="{
                            transform: imageTransformStyle,
                            display: 'inline-block',
                        }"
                        @mousedown="handleMouseDown"
                        @touchstart.passive="handleTouchStart">
                        <img
                            :key="active"
                            class="fox-preview-image"
                            :src="currentImageSrc"
                            alt="被拖拽的图片"
                            draggable="false" />
                    </div>
                </div>
                <!-- 关闭按钮 -->
                <div
                    class="fox-preview-close"
                    role="button"
                    tabindex="0"
                    aria-label="关闭图片预览"
                    @click="close"
                    @keydown.enter.prevent="close"
                    @keydown.space.prevent="close">
                    <Close />
                </div>
                <!-- 左右切换按钮 -->
                <Switch
                    v-if="imageUrls && imageUrls.length > 1"
                    @prev="prev"
                    @next="next" />
                <!-- 工具栏 -->
                <Toolbar
                    v-if="showToolbar"
                    :scale="currentScale"
                    :index="currentIndexText"
                    :layout="props.layout"
                    @click="handleToolsClick" />
            </div>
        </transition>
    </teleport>
</template>
