import { openBlock as n, createElementBlock as u, createElementVNode as s, defineComponent as ee, ref as r, reactive as te, computed as S, onMounted as oe, watchEffect as O, resolveComponent as C, createBlock as le, Teleport as ne, createVNode as h, Transition as se, withCtx as ae, normalizeStyle as z, withKeys as ie, withModifiers as ue, Fragment as A, renderList as re, createCommentVNode as R, toDisplayString as V } from "vue";
function b(e) {
  return Object.prototype.toString.call(e).replace(new RegExp("(^[[a-z]+ )([A-Za-z]+)(])", "g"), "$2").toLowerCase();
}
const k = /* @__PURE__ */ Object.create(null);
function ce(e) {
  return b(e) === "object";
}
function ve(e) {
  return b(e) === "function";
}
function de(e) {
  return b(e) === "array";
}
function we(e) {
  return b(e) === "symbol";
}
function me(e) {
  return [0, void 0, null].includes(e);
}
k.isObject = ce;
k.isFunction = ve;
k.isArray = de;
k.isSymbol = we;
k.isFalse = me;
b.prototype = k;
const y = (e, t) => {
  const f = e.__vccOpts || e;
  for (const [g, $] of t)
    f[g] = $;
  return f;
}, _e = {}, pe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, he = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), fe = [
  he
];
function ge(e, t) {
  return n(), u("svg", pe, fe);
}
const ye = /* @__PURE__ */ y(_e, [["render", ge]]);
const $e = {}, xe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, Ce = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
}, null, -1), be = [
  Ce
];
function ke(e, t) {
  return n(), u("svg", xe, be);
}
const ze = /* @__PURE__ */ y($e, [["render", ke]]);
const Me = {}, Fe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, Ie = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), Re = [
  Ie
];
function Le(e, t) {
  return n(), u("svg", Fe, Re);
}
const Be = /* @__PURE__ */ y(Me, [["render", Le]]);
const Ee = {}, De = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, Se = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1), Oe = [
  Se
];
function Ae(e, t) {
  return n(), u("svg", De, Oe);
}
const Ve = /* @__PURE__ */ y(Ee, [["render", Ae]]);
const Ze = {}, He = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, je = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1), Ne = [
  je
];
function We(e, t) {
  return n(), u("svg", He, Ne);
}
const Te = /* @__PURE__ */ y(Ze, [["render", We]]);
const qe = {}, Pe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, Xe = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Ye = [
  Xe
];
function Ke(e, t) {
  return n(), u("svg", Pe, Ye);
}
const Ue = /* @__PURE__ */ y(qe, [["render", Ke]]);
const Ge = {}, Je = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, Qe = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
}, null, -1), et = [
  Qe
];
function tt(e, t) {
  return n(), u("svg", Je, et);
}
const ot = /* @__PURE__ */ y(Ge, [["render", tt]]);
const lt = ee({
  name: "FoxPreviewImage",
  components: {
    ZoomOut: ye,
    ZoomIn: ze,
    RotateLeft: Ve,
    RotateRight: Te,
    Close: Be,
    ArrowRight: Ue,
    Download: ot
  },
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    src: {
      type: [String, Array],
      required: !0
    },
    zIndex: {
      type: Number,
      default: 9e3
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  setup(e, { emit: t }) {
    const f = r(null);
    let g = r(!1), $ = r(0), a = e.src && e.src.length ? r(e.initialIndex) : r(0), d = r(0), i = r(1), w = r(0), m = r(0), _ = r(0), p = r(0), c = r([]), l = te({
      x: 0,
      y: 0
    });
    const M = () => {
      g.value = e.modelValue;
    }, x = () => {
      g.value = !1, t("update:modelValue", g.value);
    }, Z = (o) => {
      if ($.value === 1) {
        const { x: v, y: L } = o, F = v - l.x, I = L - l.y;
        _.value = F + _.value - w.value, p.value = I + p.value - m.value, requestAnimationFrame(() => {
          w.value = F, m.value = I;
        });
      }
    }, E = () => {
      i.value > 0.5 && (i.value -= 0.1);
    }, D = () => {
      i.value < 2 && (i.value += 0.1);
    }, H = (o) => {
      requestAnimationFrame(() => {
        (o.wheelDelta || o.detail * -40) > 0 ? D() : E();
      });
    }, j = Z, N = H, W = () => {
      $.value = 0, w.value = 0, m.value = 0;
    }, T = (o) => {
      $.value = 1, l = { x: o.x, y: o.y };
    }, q = () => {
      d.value += 90;
    }, P = () => {
      d.value -= 90;
    }, X = () => {
      const o = c.value[a.value], v = document.createElement("a");
      v.download = o.split("/").at(-1), v.href = o, v.click(), v.remove();
    }, Y = () => {
      const o = document.createElement("div"), v = document.createElement("div");
      o.appendChild(v), o.style.width = "100px", o.style.height = "50px", o.style.overflow = "scroll", o.style.marginLeft = "-100000px", document.body.appendChild(o);
      const L = v.offsetWidth, F = o.offsetWidth, I = setTimeout(() => {
        document.body.removeChild(o), clearTimeout(I);
      }, 10);
      return F - L;
    }, K = () => {
      const o = c.value.length || 0;
      a.value > 0 ? a.value-- : a.value = o - 1, d.value = 0, i.value = 1, _.value = 0, p.value = 0, l.x = 0, l.y = 0, w.value = 0, m.value = 0;
    }, U = () => {
      const o = c.value.length || 0;
      a.value < o - 1 ? a.value++ : a.value = 0, d.value = 0, i.value = 1, _.value = 0, p.value = 0, l.x = 0, l.y = 0, w.value = 0, m.value = 0;
    }, G = S(() => parseFloat(i.value.toFixed(1))), J = S(() => `${a.value + 1}/${c.value.length}`);
    oe(() => {
      M();
    });
    const Q = (o) => o.scrollHeight > window.innerHeight;
    return O(() => {
      g.value = e.modelValue, e.modelValue ? (f.value !== null && f.value.focus(), Q(document.body) && (document.body.style.paddingRight = Y() + "px", document.body.classList.add("fox-lock-window"))) : (document.body.classList.remove("fox-lock-window"), document.body.style.paddingRight = "0px");
    }), O(() => {
      const o = b(e.src);
      o === "string" ? (a.value = 0, d.value = 0, i.value = 1, _.value = 0, p.value = 0, l.x = 0, l.y = 0, w.value = 0, m.value = 0, c.value = [e.src]) : o === "array" && (e.initialIndex >= 0 && e.initialIndex < e.src.length ? a.value = e.initialIndex : a.value = 0, c.value = e.src, d.value = 0, i.value = 1, _.value = 0, p.value = 0, l.x = 0, l.y = 0, w.value = 0, m.value = 0, c.value = e.src);
    }), {
      refEl: f,
      flag: g,
      status: $,
      active: a,
      uri: c,
      scale: i,
      angle: d,
      x: _,
      y: p,
      handleMouseMove: j,
      handleMousewheel: N,
      close: x,
      prev: K,
      next: U,
      mouseup: W,
      mousedown: T,
      zoomOut: E,
      enlarge: D,
      anticlockwiseRotation: P,
      clockwiseRotation: q,
      getCurrScale: G,
      getCurrIndex: J,
      downloadFile: X
    };
  }
}), nt = ["src"], st = ["textContent"], at = ["textContent"];
function it(e, t, f, g, $, a) {
  const d = C("Close"), i = C("ArrowRight"), w = C("ZoomOut"), m = C("ZoomIn"), _ = C("RotateLeft"), p = C("RotateRight"), c = C("Download");
  return n(), le(ne, { to: "body" }, [
    h(se, null, {
      default: ae(() => [
        e.flag ? (n(), u("div", {
          key: 0,
          ref: "refEl",
          class: "owl-preview",
          style: z({
            "z-index": e.zIndex
          }),
          tabindex: "1",
          onKeyup: t[8] || (t[8] = ie(ue((...l) => e.close && e.close(...l), ["exact"]), ["esc"]))
        }, [
          s("div", {
            class: "owl-preview-canvas",
            onMousewheel: t[3] || (t[3] = (...l) => e.handleMousewheel && e.handleMousewheel(...l)),
            onDOMMouseScroll: t[4] || (t[4] = (...l) => e.handleMousewheel && e.handleMousewheel(...l))
          }, [
            (n(!0), u(A, null, re(e.uri, (l, M) => (n(), u(A, { key: M }, [
              e.active === M ? (n(), u("div", {
                key: 0,
                onMousemove: t[0] || (t[0] = (...x) => e.handleMouseMove && e.handleMouseMove(...x)),
                onMouseup: t[1] || (t[1] = (...x) => e.mouseup && e.mouseup(...x)),
                onMousedown: t[2] || (t[2] = (...x) => e.mousedown && e.mousedown(...x)),
                style: z([{
                  transform: `rotate(${e.angle}deg) scale(${e.scale}) translate(${e.x}px,${e.y}px)`
                }, { display: "inline-block" }])
              }, [
                s("img", {
                  class: "owl-preview-image",
                  src: l,
                  alt: "\u88AB\u62D6\u62FD\u7684\u56FE\u7247",
                  draggable: "false"
                }, null, 8, nt)
              ], 36)) : R("", !0)
            ], 64))), 128))
          ], 32),
          s("div", {
            class: "owl-preview-close",
            style: z({ "z-index": e.zIndex + 1 }),
            onClick: t[5] || (t[5] = (...l) => e.close && e.close(...l))
          }, [
            h(d)
          ], 4),
          e.uri && e.uri.length > 1 ? (n(), u("div", {
            key: 0,
            class: "owl-preview-operate",
            style: z({ "z-index": e.zIndex + 1 })
          }, [
            s("div", {
              class: "owl-preview-operate-item owl-preview-operate-item-left",
              onClick: t[6] || (t[6] = (...l) => e.prev && e.prev(...l))
            }, [
              h(i, { class: "owl-preview-operate-icon owl-preview-operate-icon-left" })
            ]),
            s("div", {
              class: "owl-preview-operate-item",
              onClick: t[7] || (t[7] = (...l) => e.next && e.next(...l))
            }, [
              h(i, { class: "owl-preview-operate-icon owl-preview-operate-icon" })
            ])
          ], 4)) : R("", !0),
          s("div", {
            class: "owl-preview-utils",
            style: z({ "z-index": e.zIndex + 1 })
          }, [
            h(w, {
              title: "\u7F29\u5C0F",
              class: "owl-preview-utils-item",
              onClick: e.zoomOut
            }, null, 8, ["onClick"]),
            h(m, {
              title: "\u653E\u5927",
              class: "owl-preview-utils-item",
              onClick: e.enlarge
            }, null, 8, ["onClick"]),
            s("div", {
              title: "\u7F29\u653E\u500D\u6570",
              tabindex: "-1",
              class: "owl-preview-utils-item owl-preview-utils-scale",
              textContent: V(e.getCurrScale)
            }, null, 8, st),
            e.uri && e.uri.length > 1 ? (n(), u("div", {
              key: 0,
              title: "\u56FE\u7247\u4F4D\u7F6E",
              class: "owl-preview-utils-item owl-preview-utils-position",
              textContent: V(e.getCurrIndex)
            }, null, 8, at)) : R("", !0),
            h(_, {
              title: "\u5DE6\u65CB\u8F6C",
              class: "owl-preview-utils-item",
              onClick: e.clockwiseRotation
            }, null, 8, ["onClick"]),
            h(p, {
              title: "\u53F3\u65CB\u8F6C",
              class: "owl-preview-utils-item",
              onClick: e.anticlockwiseRotation
            }, null, 8, ["onClick"]),
            h(c, {
              title: "\u4E0B\u8F7D/\u4FDD\u5B58",
              class: "owl-preview-utils-item",
              onClick: e.downloadFile
            }, null, 8, ["onClick"])
          ], 4)
        ], 36)) : R("", !0)
      ]),
      _: 1
    })
  ]);
}
const B = /* @__PURE__ */ y(lt, [["render", it]]), rt = (e) => {
  e.component(B.name, B);
}, ct = B;
export {
  ct as FoxPreviewImage,
  rt as default
};
