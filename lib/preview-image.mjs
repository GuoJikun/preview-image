import { openBlock as i, createElementBlock as c, createElementVNode as n, defineComponent as Q, ref as r, reactive as ee, computed as E, onMounted as te, watchEffect as A, resolveComponent as C, createBlock as oe, Teleport as le, createVNode as f, Transition as ne, withCtx as se, normalizeStyle as k, withKeys as ae, withModifiers as ie, Fragment as O, renderList as ue, createCommentVNode as I, toDisplayString as V } from "vue";
function b(e) {
  return Object.prototype.toString.call(e).replace(new RegExp("(^[[a-z]+ )([A-Za-z]+)(])", "g"), "$2").toLowerCase();
}
const x = /* @__PURE__ */ Object.create(null);
function re(e) {
  return b(e) === "object";
}
function ce(e) {
  return b(e) === "function";
}
function de(e) {
  return b(e) === "array";
}
function ve(e) {
  return b(e) === "symbol";
}
function me(e) {
  return [0, void 0, null].includes(e);
}
x.isObject = re;
x.isFunction = ce;
x.isArray = de;
x.isSymbol = ve;
x.isFalse = me;
b.prototype = x;
const $ = (e, t) => {
  const w = e.__vccOpts || e;
  for (const [h, y] of t)
    w[h] = y;
  return w;
}, _e = {}, pe = {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  "aria-role": "button",
  "aria-label": "\u653E\u5927",
  class: "svg"
}, we = /* @__PURE__ */ n("path", { d: "M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z" }, null, -1), he = /* @__PURE__ */ n("path", { d: "M625.792 448H336a32 32 0 0 0 0 64h289.792a32 32 0 1 0 0-64z" }, null, -1), fe = [
  we,
  he
];
function ye(e, t) {
  return i(), c("svg", pe, fe);
}
const ge = /* @__PURE__ */ $(_e, [["render", ye]]);
const $e = {}, Ce = {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  "aria-role": "button",
  "aria-label": "\u653E\u5927",
  class: "svg"
}, be = /* @__PURE__ */ n("path", { d: "M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z" }, null, -1), xe = /* @__PURE__ */ n("path", { d: "M625.792 448H512v-112a32 32 0 0 0-64 0V448h-112a32 32 0 0 0 0 64H448v112a32 32 0 1 0 64 0V512h113.792a32 32 0 1 0 0-64z" }, null, -1), Me = [
  be,
  xe
];
function ke(e, t) {
  return i(), c("svg", Ce, Me);
}
const ze = /* @__PURE__ */ $($e, [["render", ke]]);
const Fe = {}, Ie = {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  "aria-role": "button",
  "aria-label": "\u653E\u5927",
  class: "svg"
}, Re = /* @__PURE__ */ n("path", { d: "M559.78666667 512L853.33333333 218.45333333c13.65333333-13.65333333 13.65333333-34.13333333 0-47.78666666-13.65333333-13.65333333-34.13333333-13.65333333-47.78666666 0L512 464.21333333l-293.54666667-295.82222186c-13.65333333-13.65333333-34.13333333-13.65333333-47.78666666 0-13.65333333 13.65333333-13.65333333 34.13333333 0 47.78666666l293.54666666 295.82222187-295.82222186 293.54666667c-13.65333333 13.65333333-13.65333333 34.13333333 0 47.78666666 6.82666667 6.82666667 15.92888853 9.10222187 25.0311104 9.10222187s18.2044448-2.2755552 25.03111146-9.10222187L512 559.78666667 805.54666667 853.33333333c6.82666667 6.82666667 15.92888853 9.10222187 25.03111146 9.10222187s18.2044448-2.2755552 25.0311104-9.10222187c13.65333333-13.65333333 13.65333333-34.13333333 0-47.78666666L559.78666667 512z" }, null, -1), Se = [
  Re
];
function Le(e, t) {
  return i(), c("svg", Ie, Se);
}
const Be = /* @__PURE__ */ $(Fe, [["render", Le]]);
const Ee = {}, Ae = {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  "aria-role": "button",
  "aria-label": "\u653E\u5927",
  class: "svg"
}, Oe = /* @__PURE__ */ n("path", { d: "M881.6703206 269.97378253a437.96818845 437.96818845 0 0 0-719.14189984-11.18481067V200.37940505a24.44088298 24.44088298 0 0 0-48.93354667 0v144.15978193c0 4.40143053 1.44988327 8.28504534 3.46936176 11.85796975a24.3373191 24.3373191 0 0 0 12.16866016 12.53113128c12.47934934 5.38527881 26.77105186 0 32.31167525-12.37578668a389.70780089 389.70780089 0 0 1 356.25693276-231.2045345 389.70780089 389.70780089 0 0 1 389.75958282 389.75958282c0 214.94513422-174.86622932 389.81136475-389.75958282 389.81136353a389.08642251 389.08642251 0 0 1-383.7011437-320.99370902 24.44088298 24.44088298 0 1 0-48.1568237 8.59573332 437.96818845 437.96818845 0 0 0 431.8579674 361.33152236c241.92331261 0 438.69312948-196.82159882 438.69312948-438.74491019 0-87.82147675-25.89076502-172.58784237-74.8243129-245.13376712" }, null, -1), Ve = [
  Oe
];
function De(e, t) {
  return i(), c("svg", Ae, Ve);
}
const Ze = /* @__PURE__ */ $(Ee, [["render", De]]);
const je = {}, He = {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  "aria-role": "button",
  "aria-label": "\u653E\u5927",
  class: "svg"
}, Ne = /* @__PURE__ */ n("path", { d: "M924.39230934 564.14465897a24.3373191 24.3373191 0 0 0-28.37627972 19.78054519A389.08642251 389.08642251 0 0 1 512.2631052 904.91891318c-214.94513422 0-389.81136475-174.86622932-389.81136476-389.81136353a389.70780089 389.70780089 0 0 1 713.03168-217.94846342c12.63469394 18.69313305 23.76772267 38.68080355 32.98483557 59.3934151 5.48884268 12.32400475 19.88410785 17.91641008 32.25989333 12.32400475a24.02662992 24.02662992 0 0 0 12.22044088-12.42756741 24.07841185 24.07841185 0 0 0 3.5211449-11.90975169V200.37940505a24.49266369 24.49266369 0 0 0-48.93354666 0v58.46134754a437.86462459 437.86462459 0 0 0-719.14190105 11.13302994A436.51830518 436.51830518 0 0 0 73.56997572 515.10754965c0 241.92331261 196.82159882 438.69312948 438.69312948 438.69312947a437.96818845 437.96818845 0 0 0 431.90974813-361.27974164 24.49266369 24.49266369 0 0 0-19.78054399-28.37627851" }, null, -1), We = [
  Ne
];
function Te(e, t) {
  return i(), c("svg", He, We);
}
const qe = /* @__PURE__ */ $(je, [["render", Te]]);
const Pe = {}, Xe = {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  "aria-role": "button",
  "aria-label": "\u653E\u5927",
  class: "svg"
}, Ye = /* @__PURE__ */ n("path", { d: "M325.3196818 850.33221435c-9.66522217-9.66522217-10.23376465-24.62036133-1.58203125-33.81591797l290.82183838-290.84655761c12.48321533-11.84051513 12.43377685-14.93041992 1e-8-27.36419678L323.73765055 207.50842285C315.06119792 198.31286621 315.65445964 183.35772705 325.3196818 173.69250489c9.83825684-9.83825684 25.18890381-10.38208008 34.33502198-1.26068116l323.03100586 323.03100586c3.97979737 3.97979737 5.75958252 9.14611817 6.08093262 14.51019288l-1e-8 4.05395507c-0.34606934 5.36407471-2.1258545 10.53039551-6.08093261 14.51019287L359.65470378 851.59289551C350.50858561 860.6895752 335.1332194 860.14575195 325.3196818 850.33221435z" }, null, -1), Ke = [
  Ye
];
function Ue(e, t) {
  return i(), c("svg", Xe, Ke);
}
const Ge = /* @__PURE__ */ $(Pe, [["render", Ue]]);
const Je = Q({
  name: "FoxPreviewImage",
  components: { ZoomOut: ge, ZoomIn: ze, RotateLeft: Ze, RotateRight: qe, Close: Be, ArrowRight: Ge },
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
    const w = r(null);
    let h = r(!1), y = r(0), u = e.src && e.src.length ? r(e.initialIndex) : r(0), d = r(0), a = r(1), v = r(0), m = r(0), _ = r(0), p = r(0), l = r([]), s = ee({
      x: 0,
      y: 0
    });
    const g = () => {
      h.value = e.modelValue;
    }, D = () => {
      h.value = !1, t("update:modelValue", h.value);
    }, Z = (o) => {
      if (y.value === 1) {
        const { x: M, y: R } = o, z = M - s.x, F = R - s.y;
        _.value = z + _.value - v.value, p.value = F + p.value - m.value, requestAnimationFrame(() => {
          v.value = z, m.value = F;
        });
      }
    }, L = () => {
      a.value > 0.5 && (a.value -= 0.1);
    }, B = () => {
      a.value < 2 && (a.value += 0.1);
    }, j = (o) => {
      requestAnimationFrame(() => {
        (o.wheelDelta || o.detail * -40) > 0 ? B() : L();
      });
    }, H = Z, N = j, W = () => {
      y.value = 0, v.value = 0, m.value = 0;
    }, T = (o) => {
      y.value = 1, s = { x: o.x, y: o.y };
    }, q = () => {
      d.value += 90;
    }, P = () => {
      d.value -= 90;
    }, X = () => {
      const o = document.createElement("div"), M = document.createElement("div");
      o.appendChild(M), o.style.width = "100px", o.style.height = "50px", o.style.overflow = "scroll", o.style.marginLeft = "-100000px", document.body.appendChild(o);
      const R = M.offsetWidth, z = o.offsetWidth, F = setTimeout(() => {
        document.body.removeChild(o), clearTimeout(F);
      }, 10);
      return z - R;
    }, Y = () => {
      const o = l.value.length || 0;
      u.value > 0 ? u.value-- : u.value = o - 1, d.value = 0, a.value = 1, _.value = 0, p.value = 0, s.x = 0, s.y = 0, v.value = 0, m.value = 0;
    }, K = () => {
      const o = l.value.length || 0;
      u.value < o - 1 ? u.value++ : u.value = 0, d.value = 0, a.value = 1, _.value = 0, p.value = 0, s.x = 0, s.y = 0, v.value = 0, m.value = 0;
    }, U = E(() => parseFloat(a.value.toFixed(1))), G = E(() => `${u.value + 1}/${l.value.length}`);
    te(() => {
      g();
    });
    const J = (o) => o.scrollHeight > window.innerHeight;
    return A(() => {
      h.value = e.modelValue, e.modelValue ? (w.value !== null && w.value.focus(), J(document.body) && (document.body.style.paddingRight = X() + "px", document.body.classList.add("fox-lock-window"))) : (document.body.classList.remove("fox-lock-window"), document.body.style.paddingRight = "0px");
    }), A(() => {
      const o = b(e.src);
      o === "string" ? (u.value = 0, d.value = 0, a.value = 1, _.value = 0, p.value = 0, s.x = 0, s.y = 0, v.value = 0, m.value = 0, l.value = [e.src]) : o === "array" && (e.initialIndex >= 0 && e.initialIndex < e.src.length ? u.value = e.initialIndex : u.value = 0, l.value = e.src, d.value = 0, a.value = 1, _.value = 0, p.value = 0, s.x = 0, s.y = 0, v.value = 0, m.value = 0, l.value = e.src);
    }), {
      refEl: w,
      flag: h,
      status: y,
      active: u,
      uri: l,
      scale: a,
      angle: d,
      x: _,
      y: p,
      handleMouseMove: H,
      handleMousewheel: N,
      close: D,
      prev: Y,
      next: K,
      mouseup: W,
      mousedown: T,
      zoomOut: L,
      enlarge: B,
      anticlockwiseRotation: P,
      clockwiseRotation: q,
      getCurrScale: U,
      getCurrIndex: G
    };
  }
}), Qe = ["src"], e3 = ["textContent"], t3 = ["textContent"];
function o3(e, t, w, h, y, u) {
  const d = C("Close"), a = C("ArrowRight"), v = C("ZoomOut"), m = C("ZoomIn"), _ = C("RotateLeft"), p = C("RotateRight");
  return i(), oe(le, { to: "body" }, [
    f(ne, null, {
      default: se(() => [
        e.flag ? (i(), c("div", {
          key: 0,
          ref: "refEl",
          class: "owl-preview",
          style: k({
            "z-index": e.zIndex
          }),
          tabindex: "1",
          onKeyup: t[8] || (t[8] = ae(ie((...l) => e.close && e.close(...l), ["exact"]), ["esc"]))
        }, [
          n("div", {
            class: "owl-preview-canvas",
            onMousewheel: t[3] || (t[3] = (...l) => e.handleMousewheel && e.handleMousewheel(...l)),
            onDOMMouseScroll: t[4] || (t[4] = (...l) => e.handleMousewheel && e.handleMousewheel(...l))
          }, [
            (i(!0), c(O, null, ue(e.uri, (l, s) => (i(), c(O, { key: s }, [
              e.active === s ? (i(), c("div", {
                key: 0,
                onMousemove: t[0] || (t[0] = (...g) => e.handleMouseMove && e.handleMouseMove(...g)),
                onMouseup: t[1] || (t[1] = (...g) => e.mouseup && e.mouseup(...g)),
                onMousedown: t[2] || (t[2] = (...g) => e.mousedown && e.mousedown(...g)),
                style: k([{
                  transform: `rotate(${e.angle}deg) scale(${e.scale}) translate(${e.x}px,${e.y}px)`
                }, { display: "inline-block" }])
              }, [
                n("img", {
                  class: "owl-preview-image",
                  src: l,
                  alt: "\u88AB\u62D6\u62FD\u7684\u56FE\u7247",
                  draggable: "false"
                }, null, 8, Qe)
              ], 36)) : I("", !0)
            ], 64))), 128))
          ], 32),
          n("div", {
            class: "owl-preview-close",
            style: k({ "z-index": e.zIndex + 1 }),
            onClick: t[5] || (t[5] = (...l) => e.close && e.close(...l))
          }, [
            f(d)
          ], 4),
          e.uri && e.uri.length > 1 ? (i(), c("div", {
            key: 0,
            class: "owl-preview-operate",
            style: k({ "z-index": e.zIndex + 1 })
          }, [
            n("div", {
              class: "owl-preview-operate-item owl-preview-operate-item-left",
              onClick: t[6] || (t[6] = (...l) => e.prev && e.prev(...l))
            }, [
              f(a, { class: "owl-preview-operate-icon owl-preview-operate-icon-left" })
            ]),
            n("div", {
              class: "owl-preview-operate-item",
              onClick: t[7] || (t[7] = (...l) => e.next && e.next(...l))
            }, [
              f(a, { class: "owl-preview-operate-icon owl-preview-operate-icon" })
            ])
          ], 4)) : I("", !0),
          n("div", {
            class: "owl-preview-utils",
            style: k({ "z-index": e.zIndex + 1 })
          }, [
            f(v, {
              title: "\u7F29\u5C0F",
              class: "owl-preview-utils-item",
              onClick: e.zoomOut
            }, null, 8, ["onClick"]),
            f(m, {
              title: "\u653E\u5927",
              class: "owl-preview-utils-item",
              onClick: e.enlarge
            }, null, 8, ["onClick"]),
            n("div", {
              title: "\u7F29\u653E\u500D\u6570",
              tabindex: "-1",
              class: "owl-preview-utils-item owl-preview-utils-scale",
              textContent: V(e.getCurrScale)
            }, null, 8, e3),
            e.uri && e.uri.length > 1 ? (i(), c("div", {
              key: 0,
              title: "\u56FE\u7247\u4F4D\u7F6E",
              class: "owl-preview-utils-item owl-preview-utils-position",
              textContent: V(e.getCurrIndex)
            }, null, 8, t3)) : I("", !0),
            f(_, {
              title: "\u5DE6\u65CB\u8F6C",
              class: "owl-preview-utils-item",
              onClick: e.clockwiseRotation
            }, null, 8, ["onClick"]),
            f(p, {
              title: "\u53F3\u65CB\u8F6C",
              class: "owl-preview-utils-item",
              onClick: e.anticlockwiseRotation
            }, null, 8, ["onClick"])
          ], 4)
        ], 36)) : I("", !0)
      ]),
      _: 1
    })
  ]);
}
const S = /* @__PURE__ */ $(Je, [["render", o3]]), n3 = (e) => {
  e.component(S.name, S);
}, s3 = S;
export {
  s3 as FoxPreviewImage,
  n3 as default
};
