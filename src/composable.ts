import { computed, ref } from "vue";

export const MIN_SCALE = 0.5;
export const MAX_SCALE = 2;
export const SCALE_STEP = 0.1;
export const WHEEL_THRESHOLD = 100;

export const clampScale = (value: number) => {
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
};

export const usePreviewImageState = (initialIndex = 0) => {
    const active = ref(initialIndex);
    const angle = ref(0);
    const scale = ref(1);
    const x = ref(0);
    const y = ref(0);
    const imageUrls = ref<string[]>([]);
    const isDragging = ref(false);

    let dragStartX = 0;
    let dragStartY = 0;
    let wheelDeltaAccumulator = 0;

    const resetTransformState = () => {
        angle.value = 0;
        scale.value = 1;
        x.value = 0;
        y.value = 0;
        dragStartX = 0;
        dragStartY = 0;
        isDragging.value = false;
        wheelDeltaAccumulator = 0;
    };

    const updatePosition = (clientX: number, clientY: number) => {
        x.value += clientX - dragStartX;
        y.value += clientY - dragStartY;
        dragStartX = clientX;
        dragStartY = clientY;
    };

    const mousemove = (e: MouseEvent) => {
        if (!isDragging.value) return;
        updatePosition(e.clientX, e.clientY);
    };

    const touchmove = (e: TouchEvent) => {
        const touch = e.touches[0];
        if (!isDragging.value || !touch) return;
        updatePosition(touch.clientX, touch.clientY);
    };

    const mouseup = () => {
        isDragging.value = false;
    };

    const touchend = () => {
        isDragging.value = false;
    };

    const mousedown = (e: MouseEvent) => {
        isDragging.value = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
    };

    const touchstart = (e: TouchEvent) => {
        const touch = e.touches[0];
        if (!touch) return;
        isDragging.value = true;
        dragStartX = touch.clientX;
        dragStartY = touch.clientY;
    };

    const zoomOut = () => {
        const nextScale = clampScale(
            Number((scale.value - SCALE_STEP).toFixed(2)),
        );
        scale.value = nextScale;
    };

    const enlarge = () => {
        const nextScale = clampScale(
            Number((scale.value + SCALE_STEP).toFixed(2)),
        );
        scale.value = nextScale;
    };

    const mousewheel = (ev: WheelEvent) => {
        ev.preventDefault();
        const delta =
            ev.deltaMode === ev.DOM_DELTA_LINE ? ev.deltaY * 33 : ev.deltaY;
        wheelDeltaAccumulator += delta;
        if (Math.abs(wheelDeltaAccumulator) < WHEEL_THRESHOLD) return;

        if (wheelDeltaAccumulator > 0) {
            zoomOut();
        } else {
            enlarge();
        }
        wheelDeltaAccumulator = 0;
    };

    const clockwiseRotation = () => {
        angle.value += 90;
    };

    const anticlockwiseRotation = () => {
        angle.value -= 90;
    };

    const currentScale = computed(() => {
        return Number.parseFloat(scale.value.toFixed(1));
    });

    const currentIndexText = computed(() => {
        return `${active.value + 1}/${imageUrls.value.length}`;
    });

    const currentImageSrc = computed(() => imageUrls.value[active.value]);

    const imageTransformStyle = computed(() => {
        return `translate(${x.value}px, ${y.value}px) rotate(${angle.value}deg) scale(${scale.value})`;
    });

    const initConf = () => {
        resetTransformState();
    };

    const prev = () => {
        if (imageUrls.value.length < 2) return;
        if (active.value > 0) {
            active.value--;
        } else {
            active.value = imageUrls.value.length - 1;
        }
        initConf();
    };

    const next = () => {
        if (imageUrls.value.length < 2) return;
        if (active.value < imageUrls.value.length - 1) {
            active.value++;
        } else {
            active.value = 0;
        }
        initConf();
    };

    return {
        active,
        angle,
        scale,
        x,
        y,
        imageUrls,
        isDragging,
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
    };
};
