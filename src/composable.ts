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
    const uri = ref<string[]>([]);
    const dragging = ref(false);

    let startX = 0;
    let startY = 0;
    let wheelDeltaAcc = 0;

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

    const mouseup = () => {
        dragging.value = false;
    };

    const touchend = () => {
        dragging.value = false;
    };

    const mousedown = (e: MouseEvent) => {
        dragging.value = true;
        startX = e.clientX;
        startY = e.clientY;
    };

    const touchstart = (e: TouchEvent) => {
        const touch = e.touches[0];
        if (!touch) return;
        dragging.value = true;
        startX = touch.clientX;
        startY = touch.clientY;
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
        wheelDeltaAcc += delta;
        if (Math.abs(wheelDeltaAcc) < WHEEL_THRESHOLD) return;

        if (wheelDeltaAcc > 0) {
            zoomOut();
        } else {
            enlarge();
        }
        wheelDeltaAcc = 0;
    };

    const clockwiseRotation = () => {
        angle.value += 90;
    };

    const anticlockwiseRotation = () => {
        angle.value -= 90;
    };

    const getCurrScale = computed(() => {
        return Number.parseFloat(scale.value.toFixed(1));
    });

    const getCurrIndex = computed(() => {
        return `${active.value + 1}/${uri.value.length}`;
    });

    const currentSrc = computed(() => uri.value[active.value]);

    const transformStyle = computed(() => {
        return `translate(${x.value}px, ${y.value}px) rotate(${angle.value}deg) scale(${scale.value})`;
    });

    const initConf = () => {
        resetTransformState();
    };

    const prev = () => {
        if (uri.value.length < 2) return;
        if (active.value > 0) {
            active.value--;
        } else {
            active.value = uri.value.length - 1;
        }
        initConf();
    };

    const next = () => {
        if (uri.value.length < 2) return;
        if (active.value < uri.value.length - 1) {
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
        uri,
        dragging,
        getCurrScale,
        getCurrIndex,
        currentSrc,
        transformStyle,
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
