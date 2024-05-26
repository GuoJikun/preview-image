import { openBlock as u, createElementBlock as m, createElementVNode as d, defineComponent as O, createVNode as g, toDisplayString as H, isRef as ce, unref as c, onBeforeMount as ue, ref as h, reactive as de, computed as N, onMounted as ve, watch as P, createBlock as V, Teleport as fe, Transition as me, withCtx as pe, normalizeStyle as K, withKeys as he, withModifiers as we, Fragment as X, renderList as _e, createCommentVNode as F } from "vue";
function z(e) {
  return Object.prototype.toString.call(e).replace(new RegExp("(^[[a-z]+ )([A-Za-z]+)(])", "g"), "$2").toLowerCase();
}
const M = /* @__PURE__ */ Object.create(null);
function xe(e) {
  return z(e) === "object";
}
function ge(e) {
  return z(e) === "function";
}
function ye(e) {
  return z(e) === "array";
}
function be(e) {
  return z(e) === "symbol";
}
function $e(e) {
  return [0, void 0, null].includes(e);
}
M.isObject = xe;
M.isFunction = ge;
M.isArray = ye;
M.isSymbol = be;
M.isFalse = $e;
z.prototype = M;
const k = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, l] of o)
    t[s] = l;
  return t;
}, ke = {}, Ce = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, ze = /* @__PURE__ */ d("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), Me = [
  ze
];
function Le(e, o) {
  return u(), m("svg", Ce, Me);
}
const Te = /* @__PURE__ */ k(ke, [["render", Le]]), Be = {}, Re = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, Se = /* @__PURE__ */ d("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Fe = [
  Se
];
function Ie(e, o) {
  return u(), m("svg", Re, Fe);
}
const Y = /* @__PURE__ */ k(Be, [["render", Ie]]), Ve = { class: "fox-preview-switch" }, Ee = /* @__PURE__ */ O({
  __name: "switch",
  emits: ["prev", "next"],
  setup(e, { emit: o }) {
    const t = o, s = () => {
      t("prev");
    }, l = () => {
      t("next");
    };
    return (v, i) => (u(), m("div", Ve, [
      d("div", {
        class: "fox-preview-switch-item fox-preview-switch-item-left",
        onClick: s
      }, [
        g(Y, { class: "preview-operate-icon preview-switch-icon-left" })
      ]),
      d("div", {
        class: "fox-preview-switch-item",
        onClick: l
      }, [
        g(Y, { class: "fox-preview-switch-icon fox-preview-switch-icon" })
      ])
    ]));
  }
}), Oe = {}, je = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, Ae = /* @__PURE__ */ d("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), De = [
  Ae
];
function We(e, o) {
  return u(), m("svg", je, De);
}
const He = /* @__PURE__ */ k(Oe, [["render", We]]), Ne = {}, Pe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, Ke = /* @__PURE__ */ d("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
}, null, -1), Xe = [
  Ke
];
function Ye(e, o) {
  return u(), m("svg", Pe, Xe);
}
const Ze = /* @__PURE__ */ k(Ne, [["render", Ye]]), Ge = {}, Ue = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, qe = /* @__PURE__ */ d("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1), Je = [
  qe
];
function Qe(e, o) {
  return u(), m("svg", Ue, Je);
}
const et = /* @__PURE__ */ k(Ge, [["render", Qe]]), tt = {}, ot = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, nt = /* @__PURE__ */ d("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1), lt = [
  nt
];
function st(e, o) {
  return u(), m("svg", ot, lt);
}
const it = /* @__PURE__ */ k(tt, [["render", st]]), at = {}, rt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
}, ct = /* @__PURE__ */ d("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
}, null, -1), ut = [
  ct
];
function dt(e, o) {
  return u(), m("svg", rt, ut);
}
const vt = /* @__PURE__ */ k(at, [["render", dt]]), ft = { class: "fox-preview-toolbar" }, mt = {
  role: "button",
  title: "缩放倍数",
  tabindex: "-1",
  class: "fox-preview-toolbar-item fox-preview-toolbar-scale"
}, pt = {
  role: "button",
  title: "图片位置",
  class: "fox-preview-toolbar-item fox-preview-toolbar-position"
}, ht = /* @__PURE__ */ O({
  __name: "toolbar",
  props: {
    scale: { default: 1 },
    index: { default: "1/1" }
  },
  emits: ["click"],
  setup(e, { emit: o }) {
    const t = e, s = o, l = (v) => {
      s("click", v);
    };
    return (v, i) => (u(), m("div", ft, [
      g(He, {
        role: "button",
        title: "缩小",
        class: "fox-preview-toolbar-item",
        onClick: i[0] || (i[0] = (p) => l("zoom-out"))
      }),
      g(Ze, {
        role: "button",
        title: "放大",
        class: "fox-preview-toolbar-item",
        onClick: i[1] || (i[1] = (p) => l("zoom-in"))
      }),
      d("div", mt, H(t.scale), 1),
      d("div", pt, H(t.index), 1),
      g(et, {
        role: "button",
        title: "左旋转",
        class: "fox-preview-toolbar-item",
        onClick: i[2] || (i[2] = (p) => l("contraRotate"))
      }),
      g(it, {
        role: "button",
        title: "右旋转",
        class: "fox-preview-toolbar-item",
        onClick: i[3] || (i[3] = (p) => l("clockwiseRotation"))
      }),
      g(vt, {
        role: "button",
        title: "下载/保存",
        class: "fox-preview-toolbar-item",
        onClick: i[4] || (i[4] = (p) => l("download"))
      })
    ]));
  }
});
function wt(e) {
  return typeof e == "function" ? e() : c(e);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Z = () => {
};
function _t(e, o) {
  function t(...s) {
    return new Promise((l, v) => {
      Promise.resolve(e(() => o.apply(this, s), { fn: o, thisArg: this, args: s })).then(l).catch(v);
    });
  }
  return t;
}
function xt(...e) {
  let o = 0, t, s = !0, l = Z, v, i, p, a, y;
  !ce(e[0]) && typeof e[0] == "object" ? { delay: i, trailing: p = !0, leading: a = !0, rejectOnCancel: y = !1 } = e[0] : [i, p = !0, a = !0, y = !1] = e;
  const w = () => {
    t && (clearTimeout(t), t = void 0, l(), l = Z);
  };
  return (C) => {
    const _ = wt(i), $ = Date.now() - o, f = () => v = C();
    return w(), _ <= 0 ? (o = Date.now(), f()) : ($ > _ && (a || !s) ? (o = Date.now(), f()) : p && (v = new Promise((b, I) => {
      l = y ? I : b, t = setTimeout(() => {
        o = Date.now(), s = !0, b(f()), w();
      }, Math.max(0, _ - $));
    })), !a && !t && (t = setTimeout(() => s = !0, _)), s = !1, v);
  };
}
function G(e, o = 200, t = !1, s = !0, l = !1) {
  return _t(
    xt(o, t, s, l),
    e
  );
}
const gt = (e, o) => {
  const t = document.createElement("a");
  t.download = o, t.href = e, t.style.display = "none", document.body.appendChild(t), t.click();
  const s = setTimeout(() => {
    document.body.removeChild(t), clearTimeout(s);
  }, 10);
}, yt = () => {
  const e = document.createElement("div"), o = document.createElement("div");
  e.appendChild(o), e.style.width = "100px", e.style.height = "50px", e.style.overflow = "scroll", e.style.marginLeft = "-100000px", document.body.appendChild(e);
  const t = o.offsetWidth, s = e.offsetWidth, l = setTimeout(() => {
    document.body.removeChild(e), clearTimeout(l);
  }, 10);
  return s - t;
}, bt = ["onKeyup"], $t = ["src"], E = /* @__PURE__ */ O({
  name: "FoxPreviewImage",
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: !1 },
    src: { default: "" },
    zIndex: { default: 9e3 },
    initialIndex: { default: 0 },
    appendTo: { default: "body" },
    showToolbar: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, s = o;
    let l = "";
    ue(() => {
      l = document.body.style.cssText;
    });
    const v = h(null);
    let i = h(!1), p = h(0), a = t.src && t.src.length ? h(t.initialIndex) : h(0), y = h(0), w = h(1), L = h(0), C = h(0), _ = h(0), $ = h(0), f = h([]), b = de({
      x: 0,
      y: 0
    });
    const I = () => {
      i.value = t.modelValue;
    }, j = () => {
      i.value = !1, s("update:modelValue", i.value);
    }, U = (n) => {
      if (p.value !== 1)
        return;
      const { x: r, y: x } = n, T = r - b.x, S = x - b.y;
      _.value = T + _.value - L.value, $.value = S + $.value - C.value, L.value = T, C.value = S;
    }, A = () => {
      w.value > 0.5 && (w.value -= 0.1);
    }, D = () => {
      w.value < 2 && (w.value += 0.1);
    }, q = (n) => {
      requestAnimationFrame(() => {
        (n.wheelDelta || n.detail * -40) > 0 ? D() : A();
      });
    }, W = G(U, 10), B = G(q, 10), J = () => {
      p.value = 0, L.value = 0, C.value = 0;
    }, Q = (n) => {
      p.value = 1, b = { x: n.x, y: n.y };
    }, ee = () => {
      y.value += 90;
    }, te = () => {
      y.value -= 90;
    }, oe = () => {
      const n = f.value[a.value], r = n.split("/"), x = r[r.length - 1];
      gt(n, x);
    }, R = () => {
      y.value = 0, w.value = 1, _.value = 0, $.value = 0, b.x = 0, b.y = 0, L.value = 0, C.value = 0;
    }, ne = () => {
      const n = f.value.length || 0;
      a.value > 0 ? a.value-- : a.value = n - 1, R();
    }, le = () => {
      const n = f.value.length || 0;
      a.value < n - 1 ? a.value++ : a.value = 0, R();
    }, se = N(() => parseFloat(w.value.toFixed(1))), ie = N(() => `${a.value + 1}/${f.value.length}`), ae = (n) => {
      switch (n) {
        case "zoom-out":
          A();
          break;
        case "zoom-in":
          D();
          break;
        case "contraRotate":
          te();
          break;
        case "clockwiseRotation":
          ee();
          break;
        case "download":
          oe();
          break;
      }
    };
    ve(() => {
      I();
    });
    const re = (n) => n.scrollHeight > window.innerHeight;
    return P(
      () => t.modelValue,
      (n) => {
        i.value = n, n ? (v.value !== null && v.value.focus(), re(document.body) && (document.body.style.paddingRight = yt() + "px", document.body.classList.add("fox-lock-window"))) : (document.body.classList.remove("fox-lock-window"), l ? document.body.style.cssText = l : document.body.removeAttribute("style"));
      }
    ), P(
      () => t.src,
      (n) => {
        const r = z(n);
        r === "string" ? (a.value = 0, R(), f.value = [n]) : r === "array" && (t.initialIndex >= 0 && t.initialIndex < n.length ? a.value = t.initialIndex : a.value = 0, R(), f.value = n);
      },
      {
        immediate: !0
      }
    ), (n, r) => (u(), V(fe, {
      to: t.appendTo
    }, [
      g(me, null, {
        default: pe(() => [
          c(i) ? (u(), m("div", {
            key: 0,
            role: "dialog",
            ref_key: "refEl",
            ref: v,
            class: "fox-preview",
            style: K({
              "z-index": t.zIndex
            }),
            tabindex: "1",
            onKeyup: he(we(j, ["exact"]), ["esc"])
          }, [
            d("div", {
              class: "fox-preview-canvas",
              onMousewheel: r[1] || (r[1] = //@ts-ignore
              (...x) => c(B) && c(B)(...x)),
              "on:DOMMouseScroll": r[2] || (r[2] = //@ts-ignore
              (...x) => c(B) && c(B)(...x))
            }, [
              (u(!0), m(X, null, _e(c(f), (x, T) => (u(), m(X, { key: T }, [
                c(a) === T ? (u(), m("div", {
                  key: 0,
                  onMousemove: r[0] || (r[0] = //@ts-ignore
                  (...S) => c(W) && c(W)(...S)),
                  onMouseup: J,
                  onMousedown: Q,
                  style: K([{
                    transform: `rotate(${c(y)}deg) scale(${c(w)}) translate(${c(_)}px,${c($)}px)`
                  }, { display: "inline-block" }])
                }, [
                  d("img", {
                    class: "fox-preview-image",
                    src: x,
                    alt: "被拖拽的图片",
                    draggable: "false"
                  }, null, 8, $t)
                ], 36)) : F("", !0)
              ], 64))), 128))
            ], 32),
            d("div", {
              class: "fox-preview-close",
              onClick: j
            }, [
              g(Te)
            ]),
            c(f) && c(f).length > 1 ? (u(), V(Ee, {
              key: 0,
              onPrev: ne,
              onNext: le
            })) : F("", !0),
            n.showToolbar ? (u(), V(ht, {
              key: 1,
              onClick: ae,
              scale: se.value,
              index: ie.value
            }, null, 8, ["scale", "index"])) : F("", !0)
          ], 44, bt)) : F("", !0)
        ]),
        _: 1
      })
    ], 8, ["to"]));
  }
});
E.install = (e) => {
  e.component(E.name, E);
};
export {
  E as default
};
