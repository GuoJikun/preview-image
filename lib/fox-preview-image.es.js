import { defineComponent, ref, reactive, computed, onMounted, watchEffect, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, createElementBlock, normalizeStyle, createElementVNode, Fragment, renderList, createCommentVNode } from "vue";
function type(value) {
  const target = Object.prototype.toString.call(value);
  const type2 = target.replace(new RegExp("(^[[a-z]+ )([A-Za-z]+)(])", "g"), "$2").toLowerCase();
  return type2;
}
const prototype = /* @__PURE__ */ Object.create(null);
function isObject(val) {
  return type(val) === "object";
}
function isFunction(val) {
  return type(val) === "function";
}
function isArray(val) {
  return type(val) === "array";
}
function isSymbol(val) {
  return type(val) === "symbol";
}
function isFalse(val) {
  return [0, void 0, null].includes(val);
}
prototype["isObject"] = isObject;
prototype["isFunction"] = isFunction;
prototype["isArray"] = isArray;
prototype["isSymbol"] = isSymbol;
prototype["isFalse"] = isFalse;
type.prototype = prototype;
var index_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "FoxPreviewImage",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    src: [String, Array],
    zIndex: {
      type: Number,
      default: 9e3
    }
  },
  setup(props, { emit }) {
    let flag = ref(false);
    let status = ref(0);
    let active = ref(0);
    let angle = ref(0);
    let scale = ref(1);
    let cacheX = ref(0);
    let cacheY = ref(0);
    let x = ref(0);
    let y = ref(0);
    let uri = ref([]);
    let startLocation = reactive({
      x: 0,
      y: 0
    });
    const init = () => {
      flag.value = props.modelValue;
    };
    const close = () => {
      flag.value = false;
      emit("update:modelValue", flag.value);
    };
    const move = (e) => {
      if (status.value === 1) {
        const { x: mouseX, y: mouseY } = e;
        const mvX = mouseX - startLocation.x;
        const mvY = mouseY - startLocation.y;
        x.value = mvX + x.value - cacheX.value;
        y.value = mvY + y.value - cacheY.value;
        requestAnimationFrame(() => {
          cacheX.value = mvX;
          cacheY.value = mvY;
        });
      }
    };
    const zoomOut = () => {
      if (scale.value > 0.5) {
        scale.value -= 0.1;
      }
    };
    const enlarge = () => {
      if (scale.value < 2) {
        scale.value += 0.1;
      }
    };
    const mousewheel = (ev) => {
      requestAnimationFrame(() => {
        const isUp = (ev.wheelDelta || ev.detail * -40) > 0;
        if (isUp) {
          enlarge();
        } else {
          zoomOut();
        }
      });
    };
    const handleMouseMove = move;
    const handleMousewheel = mousewheel;
    const mouseup = () => {
      status.value = 0;
      cacheX.value = 0;
      cacheY.value = 0;
    };
    const mousedown = (e) => {
      status.value = 1;
      startLocation = { x: e.x, y: e.y };
    };
    const clockwiseRotation = () => {
      angle.value += 90;
    };
    const anticlockwiseRotation = () => {
      angle.value -= 90;
    };
    const getScrollWidth = () => {
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
    };
    const prev = () => {
      const len = uri.value.length || 0;
      if (active.value > 0) {
        active.value--;
      } else {
        active.value = len - 1;
      }
      angle.value = 0;
      scale.value = 1;
      x.value = 0;
      y.value = 0;
      startLocation.x = 0;
      startLocation.y = 0;
      cacheX.value = 0;
      cacheY.value = 0;
    };
    const next = () => {
      const len = uri.value.length || 0;
      if (active.value < len - 1) {
        active.value++;
      } else {
        active.value = 0;
      }
      angle.value = 0;
      scale.value = 1;
      x.value = 0;
      y.value = 0;
      startLocation.x = 0;
      startLocation.y = 0;
      cacheX.value = 0;
      cacheY.value = 0;
    };
    const getCurrScale = computed(() => {
      return parseFloat(scale.value.toFixed(1));
    });
    onMounted(() => {
      init();
    });
    watchEffect(() => {
      flag.value = props.modelValue;
      console.log(flag.value);
      if (props.modelValue) {
        document.body.style.paddingRight = getScrollWidth() + "px";
        document.body.style.overflow = "hidden";
      } else {
        document.body.setAttribute("style", "");
      }
    });
    watchEffect(() => {
      const type$1 = type(props.src);
      active.value = 0;
      if (type$1 === "string") {
        angle.value = 0;
        scale.value = 1;
        x.value = 0;
        y.value = 0;
        startLocation.x = 0;
        startLocation.y = 0;
        cacheX.value = 0;
        cacheY.value = 0;
        uri.value = [props.src];
      } else if (type$1 === "array") {
        uri.value = props.src;
        angle.value = 0;
        scale.value = 1;
        x.value = 0;
        y.value = 0;
        startLocation.x = 0;
        startLocation.y = 0;
        cacheX.value = 0;
        cacheY.value = 0;
        uri.value = props.src;
      }
    });
    return {
      flag,
      status,
      active,
      uri,
      scale,
      angle,
      x,
      y,
      handleMouseMove,
      handleMousewheel,
      close,
      prev,
      next,
      mouseup,
      mousedown,
      zoomOut,
      enlarge,
      anticlockwiseRotation,
      clockwiseRotation,
      getCurrScale
    };
  }
});
const _hoisted_1 = ["src"];
const _hoisted_2 = /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  class: "font-svg"
}, [
  /* @__PURE__ */ createElementVNode("use", { href: "#preview-image-close" })
], -1);
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  class: "font-svg owl-preview-operate-icon owl-preview-operate-icon-left"
}, [
  /* @__PURE__ */ createElementVNode("use", { href: "#preview-image-arrow-right" })
], -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  class: "font-svg owl-preview-operate-icon"
}, [
  /* @__PURE__ */ createElementVNode("use", { href: "#preview-image-arrow-right" })
], -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createElementVNode("use", { href: "#preview-image-zoom-out" }, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ createElementVNode("use", { href: "#preview-image-zoom-in" }, null, -1);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = /* @__PURE__ */ createElementVNode("use", { href: "#preview-image-refresh-left" }, null, -1);
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = /* @__PURE__ */ createElementVNode("use", { href: "#preview-image-refresh-right" }, null, -1);
const _hoisted_16 = [
  _hoisted_15
];
const _hoisted_17 = /* @__PURE__ */ createElementVNode("svg", {
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [
  /* @__PURE__ */ createElementVNode("symbol", {
    id: "preview-image-close",
    viewBox: "0 0 1024 1024"
  }, [
    /* @__PURE__ */ createElementVNode("path", { d: "M559.78666667 512L853.33333333 218.45333333c13.65333333-13.65333333 13.65333333-34.13333333 0-47.78666666-13.65333333-13.65333333-34.13333333-13.65333333-47.78666666 0L512 464.21333333l-293.54666667-295.82222186c-13.65333333-13.65333333-34.13333333-13.65333333-47.78666666 0-13.65333333 13.65333333-13.65333333 34.13333333 0 47.78666666l293.54666666 295.82222187-295.82222186 293.54666667c-13.65333333 13.65333333-13.65333333 34.13333333 0 47.78666666 6.82666667 6.82666667 15.92888853 9.10222187 25.0311104 9.10222187s18.2044448-2.2755552 25.03111146-9.10222187L512 559.78666667 805.54666667 853.33333333c6.82666667 6.82666667 15.92888853 9.10222187 25.03111146 9.10222187s18.2044448-2.2755552 25.0311104-9.10222187c13.65333333-13.65333333 13.65333333-34.13333333 0-47.78666666L559.78666667 512z" })
  ]),
  /* @__PURE__ */ createElementVNode("symbol", {
    id: "preview-image-zoom-out",
    viewBox: "0 0 1024 1024"
  }, [
    /* @__PURE__ */ createElementVNode("path", { d: "M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z" }),
    /* @__PURE__ */ createElementVNode("path", { d: "M625.792 448H336a32 32 0 0 0 0 64h289.792a32 32 0 1 0 0-64z" })
  ]),
  /* @__PURE__ */ createElementVNode("symbol", {
    id: "preview-image-zoom-in",
    viewBox: "0 0 1024 1024"
  }, [
    /* @__PURE__ */ createElementVNode("path", { d: "M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z" }),
    /* @__PURE__ */ createElementVNode("path", { d: "M625.792 448H512v-112a32 32 0 0 0-64 0V448h-112a32 32 0 0 0 0 64H448v112a32 32 0 1 0 64 0V512h113.792a32 32 0 1 0 0-64z" })
  ]),
  /* @__PURE__ */ createElementVNode("symbol", {
    id: "preview-image-refresh-left",
    viewBox: "0 0 1024 1024"
  }, [
    /* @__PURE__ */ createElementVNode("path", { d: "M881.6703206 269.97378253a437.96818845 437.96818845 0 0 0-719.14189984-11.18481067V200.37940505a24.44088298 24.44088298 0 0 0-48.93354667 0v144.15978193c0 4.40143053 1.44988327 8.28504534 3.46936176 11.85796975a24.3373191 24.3373191 0 0 0 12.16866016 12.53113128c12.47934934 5.38527881 26.77105186 0 32.31167525-12.37578668a389.70780089 389.70780089 0 0 1 356.25693276-231.2045345 389.70780089 389.70780089 0 0 1 389.75958282 389.75958282c0 214.94513422-174.86622932 389.81136475-389.75958282 389.81136353a389.08642251 389.08642251 0 0 1-383.7011437-320.99370902 24.44088298 24.44088298 0 1 0-48.1568237 8.59573332 437.96818845 437.96818845 0 0 0 431.8579674 361.33152236c241.92331261 0 438.69312948-196.82159882 438.69312948-438.74491019 0-87.82147675-25.89076502-172.58784237-74.8243129-245.13376712" })
  ]),
  /* @__PURE__ */ createElementVNode("symbol", {
    id: "preview-image-refresh-right",
    viewBox: "0 0 1024 1024"
  }, [
    /* @__PURE__ */ createElementVNode("path", { d: "M924.39230934 564.14465897a24.3373191 24.3373191 0 0 0-28.37627972 19.78054519A389.08642251 389.08642251 0 0 1 512.2631052 904.91891318c-214.94513422 0-389.81136475-174.86622932-389.81136476-389.81136353a389.70780089 389.70780089 0 0 1 713.03168-217.94846342c12.63469394 18.69313305 23.76772267 38.68080355 32.98483557 59.3934151 5.48884268 12.32400475 19.88410785 17.91641008 32.25989333 12.32400475a24.02662992 24.02662992 0 0 0 12.22044088-12.42756741 24.07841185 24.07841185 0 0 0 3.5211449-11.90975169V200.37940505a24.49266369 24.49266369 0 0 0-48.93354666 0v58.46134754a437.86462459 437.86462459 0 0 0-719.14190105 11.13302994A436.51830518 436.51830518 0 0 0 73.56997572 515.10754965c0 241.92331261 196.82159882 438.69312948 438.69312948 438.69312947a437.96818845 437.96818845 0 0 0 431.90974813-361.27974164 24.49266369 24.49266369 0 0 0-19.78054399-28.37627851" })
  ]),
  /* @__PURE__ */ createElementVNode("symbol", {
    id: "preview-image-arrow-right",
    viewBox: "0 0 1024 1024"
  }, [
    /* @__PURE__ */ createElementVNode("path", { d: "M325.3196818 850.33221435c-9.66522217-9.66522217-10.23376465-24.62036133-1.58203125-33.81591797l290.82183838-290.84655761c12.48321533-11.84051513 12.43377685-14.93041992 1e-8-27.36419678L323.73765055 207.50842285C315.06119792 198.31286621 315.65445964 183.35772705 325.3196818 173.69250489c9.83825684-9.83825684 25.18890381-10.38208008 34.33502198-1.26068116l323.03100586 323.03100586c3.97979737 3.97979737 5.75958252 9.14611817 6.08093262 14.51019288l-1e-8 4.05395507c-0.34606934 5.36407471-2.1258545 10.53039551-6.08093261 14.51019287L359.65470378 851.59289551C350.50858561 860.6895752 335.1332194 860.14575195 325.3196818 850.33221435z" })
  ])
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    createVNode(Transition, null, {
      default: withCtx(() => [
        _ctx.flag ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "owl-preview",
          style: normalizeStyle({
            "z-index": _ctx.zIndex
          })
        }, [
          createElementVNode("div", {
            class: "owl-preview-canvas",
            onMousewheel: _cache[3] || (_cache[3] = (...args) => _ctx.handleMousewheel && _ctx.handleMousewheel(...args)),
            onDOMMouseScroll: _cache[4] || (_cache[4] = (...args) => _ctx.handleMousewheel && _ctx.handleMousewheel(...args))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.uri, (item, i) => {
              return openBlock(), createElementBlock(Fragment, { key: i }, [
                _ctx.active === i ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  onMousemove: _cache[0] || (_cache[0] = (...args) => _ctx.handleMouseMove && _ctx.handleMouseMove(...args)),
                  onMouseup: _cache[1] || (_cache[1] = (...args) => _ctx.mouseup && _ctx.mouseup(...args)),
                  onMousedown: _cache[2] || (_cache[2] = (...args) => _ctx.mousedown && _ctx.mousedown(...args)),
                  style: normalizeStyle([{
                    transform: `rotate(${_ctx.angle}deg) scale(${_ctx.scale}) translate(${_ctx.x}px,${_ctx.y}px)`
                  }, { "display": "inline-block" }])
                }, [
                  createElementVNode("img", {
                    class: "owl-preview-image",
                    src: item,
                    alt: "\u88AB\u62D6\u62FD\u7684\u56FE\u7247",
                    draggable: "false"
                  }, null, 8, _hoisted_1)
                ], 36)) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ], 32),
          createElementVNode("div", {
            class: "owl-preview-close",
            style: normalizeStyle({ "z-index": _ctx.zIndex + 1 }),
            onClick: _cache[5] || (_cache[5] = (...args) => _ctx.close && _ctx.close(...args))
          }, _hoisted_3, 4),
          _ctx.uri && _ctx.uri.length > 1 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "owl-preview-operate",
            style: normalizeStyle({ "z-index": _ctx.zIndex + 1 })
          }, [
            createElementVNode("div", {
              class: "owl-preview-operate-item owl-preview-operate-item-left",
              onClick: _cache[6] || (_cache[6] = (...args) => _ctx.prev && _ctx.prev(...args))
            }, _hoisted_5),
            createElementVNode("div", {
              class: "owl-preview-operate-item",
              onClick: _cache[7] || (_cache[7] = (...args) => _ctx.next && _ctx.next(...args))
            }, _hoisted_7)
          ], 4)) : createCommentVNode("", true),
          createElementVNode("div", {
            class: "owl-preview-utils",
            style: normalizeStyle({ "z-index": _ctx.zIndex + 1 })
          }, [
            (openBlock(), createElementBlock("svg", {
              viewBox: "0 0 1024 1024",
              "aria-hidden": "true",
              class: "font-svg owl-preview-utils-item",
              onClick: _cache[8] || (_cache[8] = (...args) => _ctx.zoomOut && _ctx.zoomOut(...args))
            }, _hoisted_9)),
            (openBlock(), createElementBlock("svg", {
              viewBox: "0 0 1024 1024",
              "aria-hidden": "true",
              class: "font-svg owl-preview-utils-item",
              onClick: _cache[9] || (_cache[9] = (...args) => _ctx.enlarge && _ctx.enlarge(...args))
            }, _hoisted_11)),
            createElementVNode("div", {
              class: "owl-preview-utils-item owl-preview-utils-scale",
              innerHTML: _ctx.getCurrScale
            }, null, 8, _hoisted_12),
            (openBlock(), createElementBlock("svg", {
              viewBox: "0 0 1024 1024",
              "aria-hidden": "true",
              class: "font-svg owl-preview-utils-item",
              onClick: _cache[10] || (_cache[10] = (...args) => _ctx.clockwiseRotation && _ctx.clockwiseRotation(...args))
            }, _hoisted_14)),
            (openBlock(), createElementBlock("svg", {
              viewBox: "0 0 1024 1024",
              "aria-hidden": "true",
              class: "font-svg owl-preview-utils-item",
              onClick: _cache[11] || (_cache[11] = (...args) => _ctx.anticlockwiseRotation && _ctx.anticlockwiseRotation(...args))
            }, _hoisted_16))
          ], 4),
          _hoisted_17
        ], 4)) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ]);
}
var PreviewImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const install = (app) => {
  app.component(PreviewImage.name, PreviewImage);
};
const FoxPreviewImage = PreviewImage;
export { FoxPreviewImage, install as default };
