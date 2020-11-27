<template>
    <div
        class="owl-preview"
        :style="{
            'z-index': zIndex,
            display: flag ? 'block' : 'none',
            marginLeft: '-50vw',
            marginTop: '-50vh',
        }"
    >
        <div class="owl-preview-canvas" @mousewheel="handleMousewheel" @DOMMouseScroll="handleMousewheel">
            <template v-for="(item, i) in uri">
                <div
                    :key="i"
                    v-if="active === i"
                    @mousemove="handleMouseMove"
                    @mouseup="mouseup"
                    @mousedown="mousedown"
                    :style="{ transform: `rotate(${angle}deg) scale(${scale}) translate(${x}px,${y}px)` }"
                    style="display: inline-block;"
                >
                    <img class="owl-preview-image" :src="item" alt="被拖拽的图片" draggable="false" />
                </div>
            </template>
        </div>
        <!-- 关闭按钮 -->
        <div class="owl-preview-close" :style="{ 'z-index': zIndex + 1 }" @click="close">
            <svg viewBox="0 0 1024 1024" aria-hidden="true" class="font-svg">
                <use href="#preview-image-close"></use>
            </svg>
        </div>
        <!-- 左右切换按钮 -->
        <div class="owl-preview-operate" :style="{ 'z-index': zIndex + 1 }" v-if="uri && uri.length > 1">
            <div class="owl-preview-operate-item owl-preview-operate-item-left" @click="prev">
                <svg viewBox="0 0 1024 1024" aria-hidden="true" class="font-svg owl-preview-operate-icon owl-preview-operate-icon-left">
                    <use href="#preview-image-arrow-right"></use>
                </svg>
            </div>
            <div class="owl-preview-operate-item" @click="next">
                <svg viewBox="0 0 1024 1024" aria-hidden="true" class="font-svg owl-preview-operate-icon">
                    <use href="#preview-image-arrow-right"></use>
                </svg>
            </div>
        </div>

        <div class="owl-preview-utils" :style="{ 'z-index': zIndex + 1 }">
            <svg viewBox="0 0 1024 1024" aria-hidden="true" class="font-svg owl-preview-utils-item" @click="zoomOut">
                <use href="#preview-image-zoom-out"></use>
            </svg>
            <svg viewBox="0 0 1024 1024" aria-hidden="true" class="font-svg owl-preview-utils-item" @click="enlarge">
                <use href="#preview-image-zoom-in"></use>
            </svg>
            <div class="owl-preview-utils-item owl-preview-utils-scale" v-html="getCurrScale"></div>
            <svg viewBox="0 0 1024 1024" aria-hidden="true" class="font-svg owl-preview-utils-item" @click="clockwiseRotation">
                <use href="#preview-image-refresh-left"></use>
            </svg>
            <svg viewBox="0 0 1024 1024" aria-hidden="true" class="font-svg owl-preview-utils-item" @click="anticlockwiseRotation">
                <use href="#preview-image-refresh-right"></use>
            </svg>
        </div>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <symbol id="preview-image-close" viewBox="0 0 1024 1024">
                <path
                    d="M559.78666667 512L853.33333333 218.45333333c13.65333333-13.65333333 13.65333333-34.13333333 0-47.78666666-13.65333333-13.65333333-34.13333333-13.65333333-47.78666666 0L512 464.21333333l-293.54666667-295.82222186c-13.65333333-13.65333333-34.13333333-13.65333333-47.78666666 0-13.65333333 13.65333333-13.65333333 34.13333333 0 47.78666666l293.54666666 295.82222187-295.82222186 293.54666667c-13.65333333 13.65333333-13.65333333 34.13333333 0 47.78666666 6.82666667 6.82666667 15.92888853 9.10222187 25.0311104 9.10222187s18.2044448-2.2755552 25.03111146-9.10222187L512 559.78666667 805.54666667 853.33333333c6.82666667 6.82666667 15.92888853 9.10222187 25.03111146 9.10222187s18.2044448-2.2755552 25.0311104-9.10222187c13.65333333-13.65333333 13.65333333-34.13333333 0-47.78666666L559.78666667 512z"
                ></path>
            </symbol>
            <symbol id="preview-image-zoom-out" viewBox="0 0 1024 1024">
                <path
                    d="M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z"
                ></path>
                <path d="M625.792 448H336a32 32 0 0 0 0 64h289.792a32 32 0 1 0 0-64z"></path>
            </symbol>
            <symbol id="preview-image-zoom-in" viewBox="0 0 1024 1024">
                <path
                    d="M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z"
                ></path>
                <path
                    d="M625.792 448H512v-112a32 32 0 0 0-64 0V448h-112a32 32 0 0 0 0 64H448v112a32 32 0 1 0 64 0V512h113.792a32 32 0 1 0 0-64z"
                ></path>
            </symbol>
            <symbol id="preview-image-refresh-left" viewBox="0 0 1024 1024">
                <path
                    d="M881.6703206 269.97378253a437.96818845 437.96818845 0 0 0-719.14189984-11.18481067V200.37940505a24.44088298 24.44088298 0 0 0-48.93354667 0v144.15978193c0 4.40143053 1.44988327 8.28504534 3.46936176 11.85796975a24.3373191 24.3373191 0 0 0 12.16866016 12.53113128c12.47934934 5.38527881 26.77105186 0 32.31167525-12.37578668a389.70780089 389.70780089 0 0 1 356.25693276-231.2045345 389.70780089 389.70780089 0 0 1 389.75958282 389.75958282c0 214.94513422-174.86622932 389.81136475-389.75958282 389.81136353a389.08642251 389.08642251 0 0 1-383.7011437-320.99370902 24.44088298 24.44088298 0 1 0-48.1568237 8.59573332 437.96818845 437.96818845 0 0 0 431.8579674 361.33152236c241.92331261 0 438.69312948-196.82159882 438.69312948-438.74491019 0-87.82147675-25.89076502-172.58784237-74.8243129-245.13376712"
                ></path>
            </symbol>
            <symbol id="preview-image-refresh-right" viewBox="0 0 1024 1024">
                <path
                    d="M924.39230934 564.14465897a24.3373191 24.3373191 0 0 0-28.37627972 19.78054519A389.08642251 389.08642251 0 0 1 512.2631052 904.91891318c-214.94513422 0-389.81136475-174.86622932-389.81136476-389.81136353a389.70780089 389.70780089 0 0 1 713.03168-217.94846342c12.63469394 18.69313305 23.76772267 38.68080355 32.98483557 59.3934151 5.48884268 12.32400475 19.88410785 17.91641008 32.25989333 12.32400475a24.02662992 24.02662992 0 0 0 12.22044088-12.42756741 24.07841185 24.07841185 0 0 0 3.5211449-11.90975169V200.37940505a24.49266369 24.49266369 0 0 0-48.93354666 0v58.46134754a437.86462459 437.86462459 0 0 0-719.14190105 11.13302994A436.51830518 436.51830518 0 0 0 73.56997572 515.10754965c0 241.92331261 196.82159882 438.69312948 438.69312948 438.69312947a437.96818845 437.96818845 0 0 0 431.90974813-361.27974164 24.49266369 24.49266369 0 0 0-19.78054399-28.37627851"
                ></path>
            </symbol>
            <symbol id="preview-image-arrow-right" viewBox="0 0 1024 1024">
                <path
                    d="M325.3196818 850.33221435c-9.66522217-9.66522217-10.23376465-24.62036133-1.58203125-33.81591797l290.82183838-290.84655761c12.48321533-11.84051513 12.43377685-14.93041992 1e-8-27.36419678L323.73765055 207.50842285C315.06119792 198.31286621 315.65445964 183.35772705 325.3196818 173.69250489c9.83825684-9.83825684 25.18890381-10.38208008 34.33502198-1.26068116l323.03100586 323.03100586c3.97979737 3.97979737 5.75958252 9.14611817 6.08093262 14.51019288l-1e-8 4.05395507c-0.34606934 5.36407471-2.1258545 10.53039551-6.08093261 14.51019287L359.65470378 851.59289551C350.50858561 860.6895752 335.1332194 860.14575195 325.3196818 850.33221435z"
                ></path>
            </symbol>
        </svg>
    </div>
</template>

<script>
import types from "@/utils/types";
import { debounce } from "@/utils/utils";
export default {
    name: "FoxPreviewImage",
    model: {
        event: "change",
        prop: "visiable",
    },
    props: {
        visiable: {
            type: Boolean,
            default: false,
        },
        src: [String, Array],
        zIndex: {
            type: [Number, String],
            default: 9000,
        },
    },
    data() {
        return {
            flag: false,
            uri: [],
            status: "0",
            angle: 0,
            scale: 1,
            x: 0,
            y: 0,
            startLocation: {
                x: 0,
                y: 0,
            },
            cacheX: 0,
            cacheY: 0,
            active: 0,
            handleMouseMove: debounce(this.move, 2),

            handleMousewheel: debounce(this.mousewheel, 30),
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            const body = document.querySelector("body");
            body.appendChild(this.$el);
            this.flag = this.visiable;
        },
        close() {
            this.flag = false;
            this.$emit("change", this.flag);
        },

        move(e) {
            if (this.status === 1) {
                const { x, y } = e;
                // 鼠标的移动距离
                const mvX = x - this.statusLocation.x;
                const mvY = y - this.statusLocation.y;
                // this.x = this.x + mvX - this.cacheX;
                // this.y = this.y + mvY - this.cacheY;
                this.x = mvX + this.x - this.cacheX;
                this.y = mvY + this.y - this.cacheY;
                this.cacheX = mvX;
                this.cacheY = mvY;
            }
        },
        mouseup() {
            this.status = 0;
            this.cacheX = 0;
            this.cacheY = 0;
        },
        mousedown(e) {
            this.status = 1;
            this.statusLocation = { x: e.x, y: e.y };
        },
        /**
         * 缩小
         */
        zoomOut() {
            if (this.scale > 0.5) {
                this.scale -= 0.1;
            }
        },
        /**
         * 放大
         */
        enlarge() {
            if (this.scale < 2) {
                this.scale += 0.1;
            }
        },
        mousewheel(ev) {
            const isUp = (ev.wheelDelta || ev.detail * -40) > 0;
            if (isUp) {
                this.enlarge();
            } else {
                this.zoomOut();
            }
        },
        /**
         * 顺时针旋转
         */
        clockwiseRotation() {
            this.angle += 90;
        },
        /**
         * 逆时针旋转
         */
        anticlockwiseRotation() {
            this.angle -= 90;
        },

        /**
         * 获取滚动条的宽度
         */
        getScrollWidth() {
            const scroll = document.createElement("div");
            const scrollIn = document.createElement("div");
            scroll.appendChild(scrollIn);
            scroll.style.width = "100px";
            scroll.style.height = "50px";
            scroll.style.overflow = "scroll";
            scroll.style.marginLeft = "-100000px";
            document.body.appendChild(scroll);
            const scrollInWidth = scrollIn.offsetWidth;
            const scrollWidth = scroll.offsetWidth;
            const tmp = setTimeout(() => {
                document.body.removeChild(scroll);
                clearTimeout(tmp);
            }, 10);
            return scrollWidth - scrollInWidth;
        },
        prev() {
            const len = this.uri.length || 0;
            if (this.active > 0) {
                this.active--;
            } else {
                this.active = len - 1;
            }
            this.angle = 0;
            this.scale = 1;
            this.x = 0;
            this.y = 0;
            this.startLocation = {
                x: 0,
                y: 0,
            };
            this.cacheX = 0;
            this.cacheY = 0;
            console.log(this.active, "prev");
        },
        next() {
            const len = this.uri.length || 0;
            if (this.active < len - 1) {
                this.active++;
            } else {
                this.active = 0;
            }
            this.angle = 0;
            this.scale = 1;
            this.x = 0;
            this.y = 0;
            this.startLocation = {
                x: 0,
                y: 0,
            };
            this.cacheX = 0;
            this.cacheY = 0;
            console.log(this.active, "next");
        },
    },
    beforeDestroy() {
        document.body.removeChild(this.$el);
    },
    computed: {
        getCurrScale() {
            return parseFloat(this.scale.toFixed(1));
        },
    },
    watch: {
        visiable: {
            handler(val) {
                this.flag = val;
                if (val) {
                    document.body.style.paddingRight = this.getScrollWidth() + "px";
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.setAttribute("style", "");
                }
            },
            immediate: true,
        },
        src: {
            handler(val) {
                const type = types(val);
                this.active = 0;
                if (type === "string") {
                    this.angle = 0;
                    this.scale = 1;
                    this.x = 0;
                    this.y = 0;
                    this.startLocation = {
                        x: 0,
                        y: 0,
                    };
                    this.cacheX = 0;
                    this.cacheY = 0;

                    this.uri = [val];
                } else if (type === "array") {
                    this.uri = val;
                    this.angle = 0;
                    this.scale = 1;
                    this.x = 0;
                    this.y = 0;
                    this.startLocation = {
                        x: 0,
                        y: 0,
                    };
                    this.cacheX = 0;
                    this.cacheY = 0;
                    this.uri = val;
                }
            },
            deep: true,
            immediate: true,
        },
    },
};
</script>

<style lang="scss">
.owl-preview {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: rgba($color: #000000, $alpha: 0.4);
    overflow: hidden;
    border-radius: 4px;
    &-canvas {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0;
    }
    &-image {
        user-select: none;
        display: block;
        pointer-events: none;
        &:active {
            cursor: pointer;
        }
    }
    &-close {
        position: absolute;
        top: 20px;
        right: 20px;
        user-select: none;
        cursor: pointer;
        background-color: #606266;
        border-radius: 50%;
        font-size: 26px;
        display: flex;
        height: 30px;
        width: 30px;
        align-content: center;
        align-items: center;
        justify-content: center;
        color: white;
    }
    &-operate {
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
    & &-utils {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-98px);
        border-radius: 30px;
        z-index: 20;
        background-color: #606266;
        display: flex;
        padding: 8px 10px;
        &-item {
            cursor: pointer;
            margin: 0 10px;
            color: white;
            font-size: 24px;
        }
        &-scale {
            font-size: 14px;
            position: relative;
            background-color: #606266;
            border: 1px solid #ffffff;
            box-sizing: border-box;
            width: 34px;
            border-radius: 1px;
            line-height: 22px;
            text-align: center;
            cursor: unset;
            &::before,
            &::after {
                position: absolute;
                width: 100%;
                height: 100%;
                content: "";
                z-index: 1;
                border: 1px solid #606266;
                box-sizing: border-box;
            }
            &::before {
                height: 12px;
                top: 50%;
                margin-top: -6px;
                width: 34px;
                left: -1px;
                border-width: 0 1px;
            }
            &::after {
                height: 24px;
                width: 20px;
                top: -1px;
                left: 50%;
                margin-left: -10px;
                border-width: 1px 0;
            }
        }
    }
}
.font-svg {
    user-select: none;
    font-size: 18px;
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
}
</style>
