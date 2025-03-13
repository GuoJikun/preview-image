import { createElementBlock as f, openBlock as c, createElementVNode as u, defineComponent as O, createVNode as b, toDisplayString as H, isRef as ce, toValue as ue, onBeforeMount as de, ref as p, reactive as ve, computed as N, onMounted as fe, watch as P, createBlock as V, Teleport as me, Transition as pe, withCtx as we, createCommentVNode as F, withKeys as xe, normalizeStyle as K, withModifiers as he, unref as k, Fragment as X, renderList as be } from "vue";
function z(e) {
  return Object.prototype.toString.call(e).replace(new RegExp("(^[[a-z]+ )([A-Za-z]+)(])", "g"), "$2").toLowerCase();
}
const M = /* @__PURE__ */ Object.create(null);
function ge(e) {
  return z(e) === "object";
}
function ye(e) {
  return z(e) === "function";
}
function _e(e) {
  return z(e) === "array";
}
function ke(e) {
  return z(e) === "symbol";
}
function $e(e) {
  return [0, void 0, null].includes(e);
}
M.isObject = ge;
M.isFunction = ye;
M.isArray = _e;
M.isSymbol = ke;
M.isFalse = $e;
z.prototype = M;
const $ = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, l] of t)
    o[s] = l;
  return o;
}, Ce = {}, ze = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
};
function Me(e, t) {
  return c(), f("svg", ze, t[0] || (t[0] = [
    u("path", {
      fill: "currentColor",
      d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
    }, null, -1)
  ]));
}
const Te = /* @__PURE__ */ $(Ce, [["render", Me]]), Le = {}, Be = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
};
function Re(e, t) {
  return c(), f("svg", Be, t[0] || (t[0] = [
    u("path", {
      fill: "currentColor",
      d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
    }, null, -1)
  ]));
}
const Y = /* @__PURE__ */ $(Le, [["render", Re]]), Se = { class: "fox-preview-switch" }, Fe = /* @__PURE__ */ O({
  __name: "switch",
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t, s = () => {
      o("prev");
    }, l = () => {
      o("next");
    };
    return (d, a) => (c(), f("div", Se, [
      u("div", {
        class: "fox-preview-switch-item fox-preview-switch-item-left",
        onClick: s
      }, [
        b(Y, { class: "preview-operate-icon preview-switch-icon-left" })
      ]),
      u("div", {
        class: "fox-preview-switch-item",
        onClick: l
      }, [
        b(Y, { class: "fox-preview-switch-icon fox-preview-switch-icon" })
      ])
    ]));
  }
}), Ie = {}, Ve = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
};
function Ee(e, t) {
  return c(), f("svg", Ve, t[0] || (t[0] = [
    u("path", {
      fill: "currentColor",
      d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
    }, null, -1)
  ]));
}
const Oe = /* @__PURE__ */ $(Ie, [["render", Ee]]), je = {}, Ae = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
};
function De(e, t) {
  return c(), f("svg", Ae, t[0] || (t[0] = [
    u("path", {
      fill: "currentColor",
      d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
    }, null, -1)
  ]));
}
const We = /* @__PURE__ */ $(je, [["render", De]]), He = {}, Ne = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
};
function Pe(e, t) {
  return c(), f("svg", Ne, t[0] || (t[0] = [
    u("path", {
      fill: "currentColor",
      d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
    }, null, -1)
  ]));
}
const Ke = /* @__PURE__ */ $(He, [["render", Pe]]), Xe = {}, Ye = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
};
function Ze(e, t) {
  return c(), f("svg", Ye, t[0] || (t[0] = [
    u("path", {
      fill: "currentColor",
      d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
    }, null, -1)
  ]));
}
const Ge = /* @__PURE__ */ $(Xe, [["render", Ze]]), Ue = {}, qe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "svg",
  "aria-role": "button"
};
function Je(e, t) {
  return c(), f("svg", qe, t[0] || (t[0] = [
    u("path", {
      fill: "currentColor",
      d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
    }, null, -1)
  ]));
}
const Qe = /* @__PURE__ */ $(Ue, [["render", Je]]), et = { class: "fox-preview-toolbar" }, tt = {
  role: "button",
  title: "缩放倍数",
  tabindex: "-1",
  class: "fox-preview-toolbar-item fox-preview-toolbar-scale"
}, ot = {
  role: "button",
  title: "图片位置",
  class: "fox-preview-toolbar-item fox-preview-toolbar-position"
}, nt = /* @__PURE__ */ O({
  __name: "toolbar",
  props: {
    scale: { default: 1 },
    index: { default: "1/1" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, s = t, l = (d) => {
      s("click", d);
    };
    return (d, a) => (c(), f("div", et, [
      b(Oe, {
        role: "button",
        title: "缩小",
        class: "fox-preview-toolbar-item",
        onClick: a[0] || (a[0] = (m) => l("zoom-out"))
      }),
      b(We, {
        role: "button",
        title: "放大",
        class: "fox-preview-toolbar-item",
        onClick: a[1] || (a[1] = (m) => l("zoom-in"))
      }),
      u("div", tt, H(o.scale), 1),
      u("div", ot, H(o.index), 1),
      b(Ke, {
        role: "button",
        title: "左旋转",
        class: "fox-preview-toolbar-item",
        onClick: a[2] || (a[2] = (m) => l("contraRotate"))
      }),
      b(Ge, {
        role: "button",
        title: "右旋转",
        class: "fox-preview-toolbar-item",
        onClick: a[3] || (a[3] = (m) => l("clockwiseRotation"))
      }),
      b(Qe, {
        role: "button",
        title: "下载/保存",
        class: "fox-preview-toolbar-item",
        onClick: a[4] || (a[4] = (m) => l("download"))
      })
    ]));
  }
});
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Z = () => {
};
function lt(e, t) {
  function o(...s) {
    return new Promise((l, d) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(l).catch(d);
    });
  }
  return o;
}
function st(...e) {
  let t = 0, o, s = !0, l = Z, d, a, m, r, g;
  !ce(e[0]) && typeof e[0] == "object" ? { delay: a, trailing: m = !0, leading: r = !0, rejectOnCancel: g = !1 } = e[0] : [a, m = !0, r = !0, g = !1] = e;
  const w = () => {
    o && (clearTimeout(o), o = void 0, l(), l = Z);
  };
  return (C) => {
    const x = ue(a), _ = Date.now() - t, v = () => d = C();
    return w(), x <= 0 ? (t = Date.now(), v()) : (_ > x && (r || !s) ? (t = Date.now(), v()) : m && (d = new Promise((y, I) => {
      l = g ? I : y, o = setTimeout(() => {
        t = Date.now(), s = !0, y(v()), w();
      }, Math.max(0, x - _));
    })), !r && !o && (o = setTimeout(() => s = !0, x)), s = !1, d);
  };
}
function G(e, t = 200, o = !1, s = !0, l = !1) {
  return lt(
    st(t, o, s, l),
    e
  );
}
const at = (e, t) => {
  const o = document.createElement("a");
  o.download = t, o.href = e, o.style.display = "none", document.body.appendChild(o), o.click();
  const s = setTimeout(() => {
    document.body.removeChild(o), clearTimeout(s);
  }, 10);
}, rt = () => {
  const e = document.createElement("div"), t = document.createElement("div");
  e.appendChild(t), e.style.width = "100px", e.style.height = "50px", e.style.overflow = "scroll", e.style.marginLeft = "-100000px", document.body.appendChild(e);
  const o = t.offsetWidth, s = e.offsetWidth, l = setTimeout(() => {
    document.body.removeChild(e), clearTimeout(l);
  }, 10);
  return s - o;
}, it = ["onKeyup"], ct = ["src"], E = /* @__PURE__ */ O({
  name: "FoxPreviewImage",
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: !1 },
    src: { default: "" },
    zIndex: { default: 9e3 },
    initialIndex: { default: 0 },
    appendTo: { default: "body" },
    showToolbar: { type: Boolean, default: !0 },
    enableTeleport: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, s = t;
    let l = "";
    de(() => {
      l = document.body.style.cssText;
    });
    const d = p(null), a = p(!1), m = p(0), r = o.src && o.src.length ? p(o.initialIndex) : p(0), g = p(0), w = p(1), T = p(0), C = p(0), x = p(0), _ = p(0), v = p([]);
    let y = ve({
      x: 0,
      y: 0
    });
    const I = () => {
      a.value = o.modelValue;
    }, j = () => {
      a.value = !1, s("update:modelValue", a.value);
    }, U = (n) => {
      if (m.value !== 1)
        return;
      const { x: i, y: h } = n, L = i - y.x, S = h - y.y;
      x.value = L + x.value - T.value, _.value = S + _.value - C.value, T.value = L, C.value = S;
    }, A = () => {
      w.value > 0.5 && (w.value -= 0.1);
    }, D = () => {
      w.value < 2 && (w.value += 0.1);
    }, q = (n) => {
      requestAnimationFrame(() => {
        (n.wheelDelta || n.detail * -40) > 0 ? D() : A();
      });
    }, W = G(U, 10), B = G(q, 10), J = () => {
      m.value = 0, T.value = 0, C.value = 0;
    }, Q = (n) => {
      m.value = 1, y = { x: n.x, y: n.y };
    }, ee = () => {
      g.value += 90;
    }, te = () => {
      g.value -= 90;
    }, oe = () => {
      const n = v.value[r.value], i = n.split("/"), h = i[i.length - 1];
      at(n, h);
    }, R = () => {
      g.value = 0, w.value = 1, x.value = 0, _.value = 0, y.x = 0, y.y = 0, T.value = 0, C.value = 0;
    }, ne = () => {
      const n = v.value.length || 0;
      r.value > 0 ? r.value-- : r.value = n - 1, R();
    }, le = () => {
      const n = v.value.length || 0;
      r.value < n - 1 ? r.value++ : r.value = 0, R();
    }, se = N(() => parseFloat(w.value.toFixed(1))), ae = N(() => `${r.value + 1}/${v.value.length}`), re = (n) => {
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
    fe(() => {
      I();
    });
    const ie = (n) => n.scrollHeight > window.innerHeight;
    return P(
      () => o.modelValue,
      (n) => {
        a.value = n, n ? (d.value !== null && d.value.focus(), ie(document.body) && (document.body.style.paddingRight = rt() + "px", document.body.classList.add("fox-lock-window"))) : (document.body.classList.remove("fox-lock-window"), l ? document.body.style.cssText = l : document.body.removeAttribute("style"));
      }
    ), P(
      () => o.src,
      (n) => {
        const i = z(n);
        i === "string" ? (r.value = 0, R(), v.value = [n]) : i === "array" && (o.initialIndex >= 0 && o.initialIndex < n.length ? r.value = o.initialIndex : r.value = 0, R(), v.value = n);
      },
      {
        immediate: !0
      }
    ), (n, i) => (c(), V(me, {
      to: o.appendTo,
      disabled: o.enableTeleport === !1
    }, [
      b(pe, null, {
        default: we(() => [
          a.value ? (c(), f("div", {
            key: 0,
            role: "dialog",
            ref_key: "refEl",
            ref: d,
            class: "fox-preview",
            style: K({
              "z-index": o.zIndex
            }),
            tabindex: "1",
            onKeyup: xe(he(j, ["exact"]), ["esc"])
          }, [
            u("div", {
              class: "fox-preview-canvas",
              onMousewheel: i[1] || (i[1] = //@ts-ignore
              (...h) => k(B) && k(B)(...h)),
              "on:DOMMouseScroll": i[2] || (i[2] = //@ts-ignore
              (...h) => k(B) && k(B)(...h))
            }, [
              (c(!0), f(X, null, be(v.value, (h, L) => (c(), f(X, { key: L }, [
                k(r) === L ? (c(), f("div", {
                  key: 0,
                  onMousemove: i[0] || (i[0] = //@ts-ignore
                  (...S) => k(W) && k(W)(...S)),
                  onMouseup: J,
                  onMousedown: Q,
                  style: K([{
                    transform: `rotate(${g.value}deg) scale(${w.value}) translate(${x.value}px,${_.value}px)`
                  }, { display: "inline-block" }])
                }, [
                  u("img", {
                    class: "fox-preview-image",
                    src: h,
                    alt: "被拖拽的图片",
                    draggable: "false"
                  }, null, 8, ct)
                ], 36)) : F("", !0)
              ], 64))), 128))
            ], 32),
            u("div", {
              class: "fox-preview-close",
              onClick: j
            }, [
              b(Te)
            ]),
            v.value && v.value.length > 1 ? (c(), V(Fe, {
              key: 0,
              onPrev: ne,
              onNext: le
            })) : F("", !0),
            n.showToolbar ? (c(), V(nt, {
              key: 1,
              onClick: re,
              scale: se.value,
              index: ae.value
            }, null, 8, ["scale", "index"])) : F("", !0)
          ], 44, it)) : F("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
E.install = (e) => {
  e.component(E.name, E);
};
export {
  E as default
};
