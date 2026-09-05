<script lang="ts" setup>
import { computed, nextTick, onUnmounted, ref, watch } from "vue";
import { Close } from "./icons";
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
    enableTeleport?: boolean;
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

const refEl = ref<HTMLElement | null>(null);
const flag = ref<boolean>(false);
const active = ref<number>(props.initialIndex);
const angle = ref<number>(0);
const scale = ref<number>(1);
const x = ref<number>(0);
const y = ref<number>(0);
const uri = ref<Array<string>>([]);

const close = () => {
    cleanupDragListeners();
    flag.value = false;
    emit("update:modelValue", flag.value);
};

/**
 * 拖拽：增量位移 + 拖拽期间在 window 上监听，鼠标移出图片区域也不会丢失拖拽状态
 */
const dragging = ref<boolean>(false);
let startX = 0;
let startY = 0;

const MIN_SCALE = 0.5;
const MAX_SCALE = 2;
const SCALE_STEP = 0.1;

const clampScale = (value: number) => {
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
};

const resetTransformState = () => {
    angle.value = 0;
    scale.value = 1;
    x.value = 0;
    y.value = 0;
    startX = 0;
    startY = 0;
    dragging.value = false;
    wheelDeltaAcc = 0;
};

const updatePosition = (clientX: number, clientY: number) => {
    x.value += clientX - startX;
    y.value += clientY - startY;
    startX = clientX;
    startY = clientY;
};

const mousemove = (e: MouseEvent) => {
    if (!dragging.value) return;
    updatePosition(e.clientX, e.clientY);
};

const touchmove = (e: TouchEvent) => {
    const touch = e.touches[0];
    if (!dragging.value || !touch) return;
    updatePosition(touch.clientX, touch.clientY);
};

const cleanupDragListeners = () => {
    if (!isDragListening) return;
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
    window.removeEventListener("touchmove", touchmove);
    window.removeEventListener("touchend", touchend);
    dragging.value = false;
    isDragListening = false;
};

const mouseup = () => {
    cleanupDragListeners();
};

const bindDragListeners = () => {
    if (isDragListening) return;
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
    window.addEventListener("touchmove", touchmove, DRAG_TOUCH_OPTIONS);
    window.addEventListener("touchend", touchend);
    isDragListening = true;
};

const mousedown = (e: MouseEvent) => {
    dragging.value = true;
    startX = e.clientX;
    startY = e.clientY;
    bindDragListeners();
};

const touchend = () => {
    cleanupDragListeners();
};

const touchstart = (e: TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    dragging.value = true;
    startX = touch.clientX;
    startY = touch.clientY;
    bindDragListeners();
};

/**
 * 缩小
 */
const zoomOut = () => {
    const nextScale = clampScale(Number((scale.value - SCALE_STEP).toFixed(2)));
    scale.value = nextScale;
};
/**
 * 放大
 */
const enlarge = () => {
    const nextScale = clampScale(Number((scale.value + SCALE_STEP).toFixed(2)));
    scale.value = nextScale;
};

// 累积滚轮增量，兼容鼠标滚轮与触控板惯性滚动
let wheelDeltaAcc = 0;
const WHEEL_THRESHOLD = 100;

const mousewheel = (ev: WheelEvent) => {
    ev.preventDefault();
    const delta =
        ev.deltaMode === ev.DOM_DELTA_LINE ? ev.deltaY * 33 : ev.deltaY;
    wheelDeltaAcc += delta;
    if (Math.abs(wheelDeltaAcc) < WHEEL_THRESHOLD) return;

    if (wheelDeltaAcc > 0) {
        zoomOut();
    } else {
        enlarge();
    }
    wheelDeltaAcc = 0;
};

/**
 * 顺时针旋转
 */
const clockwiseRotation = () => {
    angle.value += 90;
};
/**
 * 逆时针旋转
 */
const anticlockwiseRotation = () => {
    angle.value -= 90;
};

/**下载图片 */

const downloadImage = () => {
    const url = uri.value[active.value];
    if (!url) return;
    const name = url.split("/").pop()?.split(/[?#]/)[0] || "image";

    downloadFile(url, name);
};

const initConf = () => {
    resetTransformState();
};

// 上一张图片
const prev = () => {
    if (uri.value.length < 2) return;
    if (active.value > 0) {
        active.value--;
    } else {
        active.value = uri.value.length - 1;
    }
    initConf();
};
// 下一张图片
const next = () => {
    if (uri.value.length < 2) return;
    if (active.value < uri.value.length - 1) {
        active.value++;
    } else {
        active.value = 0;
    }
    initConf();
};

/**
 * 键盘操作：监听在 window 上，不依赖弹窗持有焦点
 * （点击图片/工具栏后焦点会落到 body，元素级监听会失效）
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

const getCurrScale = computed(() => {
    return Number.parseFloat(scale.value.toFixed(1));
});

const getCurrIndex = computed(() => {
    return `${active.value + 1}/${uri.value.length}`;
});

const currentSrc = computed(() => uri.value[active.value]);

// translate 必须放在最外层（CSS transform 从右往左应用），
// 否则拖拽位移会被旋转/缩放矩阵变换，导致旋转后拖动方向与鼠标不一致
const transformStyle = computed(() => {
    return `translate(${x.value}px, ${y.value}px) rotate(${angle.value}deg) scale(${scale.value})`;
});

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
        flag.value = val;
        if (val) {
            // 打开前快照 body 样式，避免覆盖挂载后其他组件对 body 的修改
            bodyStyleCache = document.body.style.cssText;
            cleanPreviewState();
            // v-if 的 DOM 此刻尚未渲染，必须等 nextTick 后再聚焦
            nextTick(() => refEl.value?.focus());
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

            uri.value = [val as string];
        } else if (type === "array") {
            if (props.initialIndex >= 0 && props.initialIndex < val.length) {
                active.value = props.initialIndex;
            } else {
                active.value = 0;
            }

            initConf();
            uri.value = val as string[];
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
    <teleport :to="props.appendTo" :disabled="!props.enableTeleport">
        <transition>
            <div
                v-if="flag"
                ref="refEl"
                role="dialog"
                class="fox-preview"
                :style="{
                    'z-index': props.zIndex,
                }"
                tabindex="0">
                <div class="fox-preview-canvas" @wheel="mousewheel">
                    <div
                        v-if="currentSrc"
                        :style="{
                            transform: transformStyle,
                            display: 'inline-block',
                        }"
                        @mousedown="mousedown"
                        @touchstart.passive="touchstart">
                        <img
                            :key="active"
                            class="fox-preview-image"
                            :src="currentSrc"
                            alt="被拖拽的图片"
                            draggable="false" />
                    </div>
                </div>
                <!-- 关闭按钮 -->
                <div class="fox-preview-close" @click="close">
                    <Close />
                </div>
                <!-- 左右切换按钮 -->
                <Switch
                    v-if="uri && uri.length > 1"
                    @prev="prev"
                    @next="next" />
                <!-- 工具栏 -->
                <Toolbar
                    v-if="showToolbar"
                    :scale="getCurrScale"
                    :index="getCurrIndex"
                    :layout="props.layout"
                    @click="handleToolsClick" />
            </div>
        </transition>
    </teleport>
</template>
