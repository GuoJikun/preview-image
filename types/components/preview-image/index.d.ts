import { App } from "vue";
declare const install: (app: App) => void;
export default install;
export declare const FoxPreviewImage: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    src: {
        type: (StringConstructor | ArrayConstructor)[];
        required: true;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    initialIndex: {
        type: NumberConstructor;
        default: number;
    };
}, {
    refEl: import("vue").Ref<null>;
    flag: import("vue").Ref<boolean>;
    status: import("vue").Ref<number>;
    active: import("vue").Ref<number>;
    uri: import("vue").Ref<string[]>;
    scale: import("vue").Ref<number>;
    angle: import("vue").Ref<number>;
    x: import("vue").Ref<number>;
    y: import("vue").Ref<number>;
    handleMouseMove: (e: MouseEvent) => void;
    handleMousewheel: (ev: any) => void;
    close: () => void;
    prev: () => void;
    next: () => void;
    mouseup: () => void;
    mousedown: (e: MouseEvent) => void;
    zoomOut: () => void;
    enlarge: () => void;
    anticlockwiseRotation: () => void;
    clockwiseRotation: () => void;
    getCurrScale: import("vue").ComputedRef<number>;
    getCurrIndex: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    src: {
        type: (StringConstructor | ArrayConstructor)[];
        required: true;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    initialIndex: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    zIndex: number;
    modelValue: boolean;
    initialIndex: number;
}>;
