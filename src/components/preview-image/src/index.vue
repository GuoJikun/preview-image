<template>
    <div
        class="owl-preview"
        :style="{
            'z-index': zIndex,
            display: flag ? 'block' : 'none',
            width: width,
            height: height,
            marginLeft: parseMg(width),
            marginTop: parseMg(height),
        }"
    >
        <img
            class="owl-preview-image"
            :style="{ transform: `rotate(${angle}deg) scale(${scale})`, left: `${x}px`, top: `${y}px` }"
            :src="uri"
            alt=""
            draggable="false"
            ref="ref"
            @mousemove="move"
            @mouseup="mouseup"
            @mousedown="mousedown"
        />
        <div class="owl-preview-close" :style="{ 'z-index': zIndex + 1 }" @click="close">
            <svg viewBox="0 0 1024 1024" aria-hidden="true" class="font-svg">
                <use href="#preview-image-close"></use>
            </svg>
        </div>

        <div class="owl-preview-utils" :style="{ 'z-index': zIndex + 1 }">
            <svg viewBox="0 0 1024 1024" aria-hidden="true" class="font-svg owl-preview-utils-item" @click="zoomOut">
                <use href="#preview-image-zoom-out"></use>
            </svg>
            <svg viewBox="0 0 1024 1024" aria-hidden="true" class="font-svg owl-preview-utils-item" @click="enlarge">
                <use href="#preview-image-zoom-in"></use>
            </svg>
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
        </svg>
    </div>
</template>

<script>
export default {
    name: "PreviewImage",
    model: {
        event: "change",
        prop: "visiable",
    },
    props: {
        visiable: {
            type: Boolean,
            default: false,
        },
        src: String,
        zIndex: {
            type: [Number, String],
            default: 9000,
        },
        width: {
            type: String,
            default: "100vw",
        },
        height: {
            type: String,
            default: "100vh",
        },
    },
    data() {
        return {
            flag: false,
            uri: "",
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
                const mvX = x - this.statusLocation.x;
                const mvY = y - this.statusLocation.y;
                this.x = this.x + mvX - this.cacheX;
                this.y = this.y + mvY - this.cacheY;
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
        parseMg(val) {
            const reg = /^\d+/g;
            const target = val.match(reg);
            let s = "";
            if (target.length > 0) {
                s = target[0];
            }
            s = s / 2 + val.replace(/\d+/, "");
            return `-${s}`;
        },
    },
    watch: {
        visiable: {
            handler(val) {
                this.flag = val;
            },
            immediate: true,
        },
        src: {
            handler(val) {
                this.uri = val;
            },
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
    background-color: rgba($color: #000000, $alpha: 0.5);
    overflow: hidden;
    border-radius: 4px;
    &-image {
        position: relative;
        user-select: none;
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
        background-color: rgba($color: #000000, $alpha: 0.6);
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
    & &-utils {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-98px);
        border-radius: 30px;
        z-index: 20;
        background-color: rgba($color: #000000, $alpha: 0.8);
        display: flex;
        padding: 8px 10px;
        &-item {
            cursor: pointer;
            margin: 0 10px;
            color: white;
            font-size: 24px;
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
