import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';

declare const _default: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<Props> & Readonly<{
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
modelValue: boolean;
src: string | string[];
zIndex: number;
initialIndex: number;
appendTo: string | HTMLElement;
showToolbar: boolean;
enableTeleport: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
refEl: HTMLDivElement;
}, any>;
export default _default;

declare interface Props {
    modelValue: boolean;
    src: string | string[];
    zIndex?: number;
    initialIndex?: number;
    appendTo?: string | HTMLElement;
    showToolbar?: boolean;
    enableTeleport?: boolean;
}

export { }
