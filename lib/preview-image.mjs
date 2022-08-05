import { openBlock as a, createElementBlock as u, createElementVNode as n, defineComponent as K, ref as r, reactive as Q, computed as A, onMounted as ee, watchEffect as E, resolveComponent as $, createBlock as te, Teleport as oe, createVNode as w, Transition as le, withCtx as ne, normalizeStyle as M, Fragment as O, renderList as se, createCommentVNode as I, toDisplayString as V } from "vue";
function C(e) {
  return Object.prototype.toString.call(e).replace(new RegExp("(^[[a-z]+ )([A-Za-z]+)(])", "g"), "$2").toLowerCase();
}
const b = /* @__PURE__ */ Object.create(null);
function ae(e) {
  return C(e) === "object";
}
function ie(e) {
  return C(e) === "function";
}
function ue(e) {
  return C(e) === "array";
}
function re(e) {
  return C(e) === "symbol";
}
function ce(e) {
  return [0, void 0, null].includes(e);
}
b.isObject = ae;
b.isFunction = ie;
b.isArray = ue;
b.isSymbol = re;
b.isFalse = ce;
C.prototype = b;
const g = (e, t) => {
  const c = e.__vccOpts || e;
  for (const [f, s] of t)
    c[f] = s;
  return c;
}, de = {}, ve = {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  "aria-role": "button",
  "aria-label": "\u653E\u5927",
  class: "svg"
}, _e = /* @__PURE__ */ n("path", { d: "M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z" }, null, -1), me = /* @__PURE__ */ n("path", { d: "M625.792 448H336a32 32 0 0 0 0 64h289.792a32 32 0 1 0 0-64z" }, null, -1), pe = [
  _e,
  me
];
function he(e, t) {
  return a(), u("svg", ve, pe);
}
const we = /* @__PURE__ */ g(de, [["render", he]]);
const fe = {}, ye = {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  "aria-role": "button",
  "aria-label": "\u653E\u5927",
  class: "svg"
}, ge = /* @__PURE__ */ n("path", { d: "M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z" }, null, -1), $e = /* @__PURE__ */ n("path", { d: "M625.792 448H512v-112a32 32 0 0 0-64 0V448h-112a32 32 0 0 0 0 64H448v112a32 32 0 1 0 64 0V512h113.792a32 32 0 1 0 0-64z" }, null, -1), Ce = [
  ge,
  $e
];
function be(e, t) {
  return a(), u("svg", ye, Ce);
}
const xe = /* @__PURE__ */ g(fe, [["render", be]]);
const Me = {}, ke = {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  "aria-role": "button",
  "aria-label": "\u653E\u5927",
  class: "svg"
}, ze = /* @__PURE__ */ n("path", { d: "M559.78666667 512L853.33333333 218.45333333c13.65333333-13.65333333 13.65333333-34.13333333 0-47.78666666-13.65333333-13.65333333-34.13333333-13.65333333-47.78666666 0L512 464.21333333l-293.54666667-295.82222186c-13.65333333-13.65333333-34.13333333-13.65333333-47.78666666 0-13.65333333 13.65333333-13.65333333 34.13333333 0 47.78666666l293.54666666 295.82222187-295.82222186 293.54666667c-13.65333333 13.65333333-13.65333333 34.13333333 0 47.78666666 6.82666667 6.82666667 15.92888853 9.10222187 25.0311104 9.10222187s18.2044448-2.2755552 25.03111146-9.10222187L512 559.78666667 805.54666667 853.33333333c6.82666667 6.82666667 15.92888853 9.10222187 25.03111146 9.10222187s18.2044448-2.2755552 25.0311104-9.10222187c13.65333333-13.65333333 13.65333333-34.13333333 0-47.78666666L559.78666667 512z" }, null, -1), Fe = [
  ze
];
function Ie(e, t) {
  return a(), u("svg", ke, Fe);
}
const Re = /* @__PURE__ */ g(Me, [["render", Ie]]);
const Se = {}, Be = {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  "aria-role": "button",
  "aria-label": "\u653E\u5927",
  class: "svg"
}, Le = /* @__PURE__ */ n("path", { d: "M881.6703206 269.97378253a437.96818845 437.96818845 0 0 0-719.14189984-11.18481067V200.37940505a24.44088298 24.44088298 0 0 0-48.93354667 0v144.15978193c0 4.40143053 1.44988327 8.28504534 3.46936176 11.85796975a24.3373191 24.3373191 0 0 0 12.16866016 12.53113128c12.47934934 5.38527881 26.77105186 0 32.31167525-12.37578668a389.70780089 389.70780089 0 0 1 356.25693276-231.2045345 389.70780089 389.70780089 0 0 1 389.75958282 389.75958282c0 214.94513422-174.86622932 389.81136475-389.75958282 389.81136353a389.08642251 389.08642251 0 0 1-383.7011437-320.99370902 24.44088298 24.44088298 0 1 0-48.1568237 8.59573332 437.96818845 437.96818845 0 0 0 431.8579674 361.33152236c241.92331261 0 438.69312948-196.82159882 438.69312948-438.74491019 0-87.82147675-25.89076502-172.58784237-74.8243129-245.13376712" }, null, -1), Ae = [
  Le
];
function Ee(e, t) {
  return a(), u("svg", Be, Ae);
}
const Oe = /* @__PURE__ */ g(Se, [["render", Ee]]);
const Ve = {}, De = {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  "aria-role": "button",
  "aria-label": "\u653E\u5927",
  class: "svg"
}, Ze = /* @__PURE__ */ n("path", { d: "M924.39230934 564.14465897a24.3373191 24.3373191 0 0 0-28.37627972 19.78054519A389.08642251 389.08642251 0 0 1 512.2631052 904.91891318c-214.94513422 0-389.81136475-174.86622932-389.81136476-389.81136353a389.70780089 389.70780089 0 0 1 713.03168-217.94846342c12.63469394 18.69313305 23.76772267 38.68080355 32.98483557 59.3934151 5.48884268 12.32400475 19.88410785 17.91641008 32.25989333 12.32400475a24.02662992 24.02662992 0 0 0 12.22044088-12.42756741 24.07841185 24.07841185 0 0 0 3.5211449-11.90975169V200.37940505a24.49266369 24.49266369 0 0 0-48.93354666 0v58.46134754a437.86462459 437.86462459 0 0 0-719.14190105 11.13302994A436.51830518 436.51830518 0 0 0 73.56997572 515.10754965c0 241.92331261 196.82159882 438.69312948 438.69312948 438.69312947a437.96818845 437.96818845 0 0 0 431.90974813-361.27974164 24.49266369 24.49266369 0 0 0-19.78054399-28.37627851" }, null, -1), je = [
  Ze
];
function He(e, t) {
  return a(), u("svg", De, je);
}
const Ne = /* @__PURE__ */ g(Ve, [["render", He]]);
const We = {}, Te = {
  viewBox: "0 0 1024 1024",
  "aria-hidden": "true",
  "aria-role": "button",
  "aria-label": "\u653E\u5927",
  class: "svg"
}, qe = /* @__PURE__ */ n("path", { d: "M325.3196818 850.33221435c-9.66522217-9.66522217-10.23376465-24.62036133-1.58203125-33.81591797l290.82183838-290.84655761c12.48321533-11.84051513 12.43377685-14.93041992 1e-8-27.36419678L323.73765055 207.50842285C315.06119792 198.31286621 315.65445964 183.35772705 325.3196818 173.69250489c9.83825684-9.83825684 25.18890381-10.38208008 34.33502198-1.26068116l323.03100586 323.03100586c3.97979737 3.97979737 5.75958252 9.14611817 6.08093262 14.51019288l-1e-8 4.05395507c-0.34606934 5.36407471-2.1258545 10.53039551-6.08093261 14.51019287L359.65470378 851.59289551C350.50858561 860.6895752 335.1332194 860.14575195 325.3196818 850.33221435z" }, null, -1), Pe = [
  qe
];
function Xe(e, t) {
  return a(), u("svg", Te, Pe);
}
const Ye = /* @__PURE__ */ g(We, [["render", Xe]]);
const Ue = K({
  name: "FoxPreviewImage",
  components: { ZoomOut: we, ZoomIn: xe, RotateLeft: Oe, RotateRight: Ne, Close: Re, ArrowRight: Ye },
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
    let c = r(!1), f = r(0), s = e.src && e.src.length ? r(e.initialIndex) : r(0), h = r(0), i = r(1), d = r(0), v = r(0), _ = r(0), m = r(0), p = r([]), l = Q({
      x: 0,
      y: 0
    });
    const k = () => {
      c.value = e.modelValue;
    }, y = () => {
      c.value = !1, t("update:modelValue", c.value);
    }, D = (o) => {
      if (f.value === 1) {
        const { x, y: R } = o, z = x - l.x, F = R - l.y;
        _.value = z + _.value - d.value, m.value = F + m.value - v.value, requestAnimationFrame(() => {
          d.value = z, v.value = F;
        });
      }
    }, B = () => {
      i.value > 0.5 && (i.value -= 0.1);
    }, L = () => {
      i.value < 2 && (i.value += 0.1);
    }, Z = (o) => {
      requestAnimationFrame(() => {
        (o.wheelDelta || o.detail * -40) > 0 ? L() : B();
      });
    }, j = D, H = Z, N = () => {
      f.value = 0, d.value = 0, v.value = 0;
    }, W = (o) => {
      f.value = 1, l = { x: o.x, y: o.y };
    }, T = () => {
      h.value += 90;
    }, q = () => {
      h.value -= 90;
    }, P = () => {
      const o = document.createElement("div"), x = document.createElement("div");
      o.appendChild(x), o.style.width = "100px", o.style.height = "50px", o.style.overflow = "scroll", o.style.marginLeft = "-100000px", document.body.appendChild(o);
      const R = x.offsetWidth, z = o.offsetWidth, F = setTimeout(() => {
        document.body.removeChild(o), clearTimeout(F);
      }, 10);
      return z - R;
    }, X = () => {
      const o = p.value.length || 0;
      s.value > 0 ? s.value-- : s.value = o - 1, h.value = 0, i.value = 1, _.value = 0, m.value = 0, l.x = 0, l.y = 0, d.value = 0, v.value = 0;
    }, Y = () => {
      const o = p.value.length || 0;
      s.value < o - 1 ? s.value++ : s.value = 0, h.value = 0, i.value = 1, _.value = 0, m.value = 0, l.x = 0, l.y = 0, d.value = 0, v.value = 0;
    }, U = A(() => parseFloat(i.value.toFixed(1))), G = A(() => `${s.value + 1}/${p.value.length}`);
    ee(() => {
      k();
    });
    const J = (o) => o.scrollHeight > o.clientHeight;
    return E(() => {
      c.value = e.modelValue, e.modelValue ? (J(document.body) && (document.body.style.paddingRight = P() + "px"), document.body.style.overflow = "hidden") : document.body.setAttribute("style", "");
    }), E(() => {
      const o = C(e.src);
      o === "string" ? (s.value = 0, h.value = 0, i.value = 1, _.value = 0, m.value = 0, l.x = 0, l.y = 0, d.value = 0, v.value = 0, p.value = [e.src]) : o === "array" && (e.initialIndex >= 0 && e.initialIndex < e.src.length ? s.value = e.initialIndex : s.value = 0, p.value = e.src, h.value = 0, i.value = 1, _.value = 0, m.value = 0, l.x = 0, l.y = 0, d.value = 0, v.value = 0, p.value = e.src);
    }), {
      flag: c,
      status: f,
      active: s,
      uri: p,
      scale: i,
      angle: h,
      x: _,
      y: m,
      handleMouseMove: j,
      handleMousewheel: H,
      close: y,
      prev: X,
      next: Y,
      mouseup: N,
      mousedown: W,
      zoomOut: B,
      enlarge: L,
      anticlockwiseRotation: q,
      clockwiseRotation: T,
      getCurrScale: U,
      getCurrIndex: G
    };
  }
}), Ge = ["src"], Je = ["textContent"], Ke = ["textContent"];
function Qe(e, t, c, f, s, h) {
  const i = $("Close"), d = $("ArrowRight"), v = $("ZoomOut"), _ = $("ZoomIn"), m = $("RotateLeft"), p = $("RotateRight");
  return a(), te(oe, { to: "body" }, [
    w(le, null, {
      default: ne(() => [
        e.flag ? (a(), u("div", {
          key: 0,
          class: "owl-preview",
          style: M({
            "z-index": e.zIndex
          })
        }, [
          n("div", {
            class: "owl-preview-canvas",
            onMousewheel: t[3] || (t[3] = (...l) => e.handleMousewheel && e.handleMousewheel(...l)),
            onDOMMouseScroll: t[4] || (t[4] = (...l) => e.handleMousewheel && e.handleMousewheel(...l))
          }, [
            (a(!0), u(O, null, se(e.uri, (l, k) => (a(), u(O, { key: k }, [
              e.active === k ? (a(), u("div", {
                key: 0,
                onMousemove: t[0] || (t[0] = (...y) => e.handleMouseMove && e.handleMouseMove(...y)),
                onMouseup: t[1] || (t[1] = (...y) => e.mouseup && e.mouseup(...y)),
                onMousedown: t[2] || (t[2] = (...y) => e.mousedown && e.mousedown(...y)),
                style: M([{
                  transform: `rotate(${e.angle}deg) scale(${e.scale}) translate(${e.x}px,${e.y}px)`
                }, { display: "inline-block" }])
              }, [
                n("img", {
                  class: "owl-preview-image",
                  src: l,
                  alt: "\u88AB\u62D6\u62FD\u7684\u56FE\u7247",
                  draggable: "false"
                }, null, 8, Ge)
              ], 36)) : I("", !0)
            ], 64))), 128))
          ], 32),
          n("div", {
            class: "owl-preview-close",
            style: M({ "z-index": e.zIndex + 1 }),
            onClick: t[5] || (t[5] = (...l) => e.close && e.close(...l))
          }, [
            w(i)
          ], 4),
          e.uri && e.uri.length > 1 ? (a(), u("div", {
            key: 0,
            class: "owl-preview-operate",
            style: M({ "z-index": e.zIndex + 1 })
          }, [
            n("div", {
              class: "owl-preview-operate-item owl-preview-operate-item-left",
              onClick: t[6] || (t[6] = (...l) => e.prev && e.prev(...l))
            }, [
              w(d, { class: "owl-preview-operate-icon owl-preview-operate-icon-left" })
            ]),
            n("div", {
              class: "owl-preview-operate-item",
              onClick: t[7] || (t[7] = (...l) => e.next && e.next(...l))
            }, [
              w(d, { class: "owl-preview-operate-icon owl-preview-operate-icon" })
            ])
          ], 4)) : I("", !0),
          n("div", {
            class: "owl-preview-utils",
            style: M({ "z-index": e.zIndex + 1 })
          }, [
            w(v, {
              title: "\u7F29\u5C0F",
              class: "owl-preview-utils-item",
              onClick: e.zoomOut
            }, null, 8, ["onClick"]),
            w(_, {
              title: "\u653E\u5927",
              class: "owl-preview-utils-item",
              onClick: e.enlarge
            }, null, 8, ["onClick"]),
            n("div", {
              title: "\u7F29\u653E\u500D\u6570",
              tabindex: "-1",
              class: "owl-preview-utils-item owl-preview-utils-scale",
              textContent: V(e.getCurrScale)
            }, null, 8, Je),
            e.uri && e.uri.length > 1 ? (a(), u("div", {
              key: 0,
              title: "\u56FE\u7247\u4F4D\u7F6E",
              class: "owl-preview-utils-item owl-preview-utils-position",
              textContent: V(e.getCurrIndex)
            }, null, 8, Ke)) : I("", !0),
            w(m, {
              title: "\u5DE6\u65CB\u8F6C",
              class: "owl-preview-utils-item",
              onClick: e.clockwiseRotation
            }, null, 8, ["onClick"]),
            w(p, {
              title: "\u53F3\u65CB\u8F6C",
              class: "owl-preview-utils-item",
              onClick: e.anticlockwiseRotation
            }, null, 8, ["onClick"])
          ], 4)
        ], 4)) : I("", !0)
      ]),
      _: 1
    })
  ]);
}
const S = /* @__PURE__ */ g(Ue, [["render", Qe]]), t3 = (e) => {
  e.component(S.name, S);
}, o3 = S;
export {
  o3 as FoxPreviewImage,
  t3 as default
};
