import { r as jt, M as Kn } from "./index-363833c6.js";
import { r as a, $ as Xn } from "./index-7c191284.js";
import { j as A } from "./jsx-runtime-69eee039.js";
function vt(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Bt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = vt(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : vt(e[o], null);
        }
      };
  };
}
function J(...e) {
  return a.useCallback(Bt(...e), e);
}
var Ge = a.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = a.Children.toArray(n),
    i = o.find(Gn);
  if (i) {
    const s = i.props.children,
      c = o.map((u) => (u === i ? (a.Children.count(s) > 1 ? a.Children.only(null) : a.isValidElement(s) ? s.props.children : null) : u));
    return A.jsx(ze, { ...r, ref: t, children: a.isValidElement(s) ? a.cloneElement(s, void 0, c) : null });
  }
  return A.jsx(ze, { ...r, ref: t, children: n });
});
Ge.displayName = "Slot";
var ze = a.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (a.isValidElement(n)) {
    const o = Qn(n);
    return a.cloneElement(n, { ...qn(r, n.props), ref: t ? Bt(t, o) : o });
  }
  return a.Children.count(n) > 1 ? a.Children.only(null) : null;
});
ze.displayName = "SlotClone";
var Zn = ({ children: e }) => A.jsx(A.Fragment, { children: e });
function Gn(e) {
  return a.isValidElement(e) && e.type === Zn;
}
function qn(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...c) => {
            i(...c), o(...c);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Qn(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function G(e) {
  const t = a.useRef(e);
  return (
    a.useEffect(() => {
      t.current = e;
    }),
    a.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function Jn({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = er({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    c = G(n),
    u = a.useCallback(
      (l) => {
        if (i) {
          const d = typeof l == "function" ? l(e) : l;
          d !== e && c(d);
        } else o(l);
      },
      [i, e, o, c]
    );
  return [s, u];
}
function er({ defaultProp: e, onChange: t }) {
  const n = a.useState(e),
    [r] = n,
    o = a.useRef(r),
    i = G(t);
  return (
    a.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
function Fi(e) {
  const t = a.useRef({ value: e, previous: e });
  return a.useMemo(
    () => (t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous),
    [e]
  );
}
var te = globalThis != null && globalThis.document ? a.useLayoutEffect : () => {};
function tr(e) {
  const [t, n] = a.useState(void 0);
  return (
    te(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, c;
          if ("borderBoxSize" in i) {
            const u = i.borderBoxSize,
              l = Array.isArray(u) ? u[0] : u;
            (s = l.inlineSize), (c = l.blockSize);
          } else (s = e.offsetWidth), (c = e.offsetHeight);
          n({ width: s, height: c });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
function nr(e, t) {
  return a.useReducer((n, r) => t[n][r] ?? n, e);
}
var qe = (e) => {
  const { present: t, children: n } = e,
    r = rr(t),
    o = typeof n == "function" ? n({ present: r.isPresent }) : a.Children.only(n),
    i = J(r.ref, or(o));
  return typeof n == "function" || r.isPresent ? a.cloneElement(o, { ref: i }) : null;
};
qe.displayName = "Presence";
function rr(e) {
  const [t, n] = a.useState(),
    r = a.useRef({}),
    o = a.useRef(e),
    i = a.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [c, u] = nr(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    a.useEffect(() => {
      const l = be(r.current);
      i.current = c === "mounted" ? l : "none";
    }, [c]),
    te(() => {
      const l = r.current,
        p = o.current;
      if (p !== e) {
        const h = i.current,
          m = be(l);
        e
          ? u("MOUNT")
          : m === "none" || (l == null ? void 0 : l.display) === "none"
          ? u("UNMOUNT")
          : u(p && h !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, u]),
    te(() => {
      if (t) {
        let l;
        const p = t.ownerDocument.defaultView ?? window,
          d = (m) => {
            const f = be(r.current).includes(m.animationName);
            if (m.target === t && f && (u("ANIMATION_END"), !o.current)) {
              const v = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (l = p.setTimeout(() => {
                  t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
                }));
            }
          },
          h = (m) => {
            m.target === t && (i.current = be(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            p.clearTimeout(l),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else u("ANIMATION_END");
    }, [t, u]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(c),
      ref: a.useCallback((l) => {
        l && (r.current = getComputedStyle(l)), n(l);
      }, []),
    }
  );
}
function be(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function or(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var ir = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
  X = ir.reduce((e, t) => {
    const n = a.forwardRef((r, o) => {
      const { asChild: i, ...s } = r,
        c = i ? Ge : t;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), A.jsx(c, { ...s, ref: o });
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function sr(e, t) {
  e && jt.flushSync(() => e.dispatchEvent(t));
}
var cr = Xn["useId".toString()] || (() => {}),
  ar = 0;
function lr(e) {
  const [t, n] = a.useState(cr());
  return (
    te(() => {
      e || n((r) => r ?? String(ar++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function _e(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
  };
}
function ur(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = G(e);
  a.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var fr = "DismissableLayer",
  Ye = "dismissableLayer.update",
  dr = "dismissableLayer.pointerDownOutside",
  pr = "dismissableLayer.focusOutside",
  gt,
  $t = a.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
  Ht = a.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: c,
        ...u
      } = e,
      l = a.useContext($t),
      [p, d] = a.useState(null),
      h = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
      [, m] = a.useState({}),
      y = J(t, (C) => d(C)),
      f = Array.from(l.layers),
      [v] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = f.indexOf(v),
      b = p ? f.indexOf(p) : -1,
      x = l.layersWithOutsidePointerEventsDisabled.size > 0,
      w = b >= g,
      E = vr((C) => {
        const R = C.target,
          T = [...l.branches].some((M) => M.contains(R));
        !w || T || (o == null || o(C), s == null || s(C), C.defaultPrevented || c == null || c());
      }, h),
      P = gr((C) => {
        const R = C.target;
        [...l.branches].some((M) => M.contains(R)) || (i == null || i(C), s == null || s(C), C.defaultPrevented || c == null || c());
      }, h);
    return (
      ur((C) => {
        b === l.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && c && (C.preventDefault(), c()));
      }, h),
      a.useEffect(() => {
        if (p)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((gt = h.body.style.pointerEvents), (h.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(p)),
            l.layers.add(p),
            yt(),
            () => {
              n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = gt);
            }
          );
      }, [p, h, n, l]),
      a.useEffect(
        () => () => {
          p && (l.layers.delete(p), l.layersWithOutsidePointerEventsDisabled.delete(p), yt());
        },
        [p, l]
      ),
      a.useEffect(() => {
        const C = () => m({});
        return document.addEventListener(Ye, C), () => document.removeEventListener(Ye, C);
      }, []),
      A.jsx(X.div, {
        ...u,
        ref: y,
        style: { pointerEvents: x ? (w ? "auto" : "none") : void 0, ...e.style },
        onFocusCapture: _e(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: _e(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: _e(e.onPointerDownCapture, E.onPointerDownCapture),
      })
    );
  });
Ht.displayName = fr;
var hr = "DismissableLayerBranch",
  mr = a.forwardRef((e, t) => {
    const n = a.useContext($t),
      r = a.useRef(null),
      o = J(t, r);
    return (
      a.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      A.jsx(X.div, { ...e, ref: o })
    );
  });
mr.displayName = hr;
function vr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = G(e),
    r = a.useRef(!1),
    o = a.useRef(() => {});
  return (
    a.useEffect(() => {
      const i = (c) => {
          if (c.target && !r.current) {
            let u = function () {
              Ut(dr, n, l, { discrete: !0 });
            };
            const l = { originalEvent: c };
            c.pointerType === "touch"
              ? (t.removeEventListener("click", o.current), (o.current = u), t.addEventListener("click", o.current, { once: !0 }))
              : u();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function gr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = G(e),
    r = a.useRef(!1);
  return (
    a.useEffect(() => {
      const o = (i) => {
        i.target && !r.current && Ut(pr, n, { originalEvent: i }, { discrete: !1 });
      };
      return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
    }, [t, n]),
    { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
  );
}
function yt() {
  const e = new CustomEvent(Ye);
  document.dispatchEvent(e);
}
function Ut(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? sr(o, i) : o.dispatchEvent(i);
}
var Ie = "focusScope.autoFocusOnMount",
  We = "focusScope.autoFocusOnUnmount",
  wt = { bubbles: !1, cancelable: !0 },
  yr = "FocusScope",
  Vt = a.forwardRef((e, t) => {
    const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...s } = e,
      [c, u] = a.useState(null),
      l = G(o),
      p = G(i),
      d = a.useRef(null),
      h = J(t, (f) => u(f)),
      m = a.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    a.useEffect(() => {
      if (r) {
        let f = function (x) {
            if (m.paused || !c) return;
            const w = x.target;
            c.contains(w) ? (d.current = w) : Z(d.current, { select: !0 });
          },
          v = function (x) {
            if (m.paused || !c) return;
            const w = x.relatedTarget;
            w !== null && (c.contains(w) || Z(d.current, { select: !0 }));
          },
          g = function (x) {
            if (document.activeElement === document.body) for (const E of x) E.removedNodes.length > 0 && Z(c);
          };
        document.addEventListener("focusin", f), document.addEventListener("focusout", v);
        const b = new MutationObserver(g);
        return (
          c && b.observe(c, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), b.disconnect();
          }
        );
      }
    }, [r, c, m.paused]),
      a.useEffect(() => {
        if (c) {
          bt.add(m);
          const f = document.activeElement;
          if (!c.contains(f)) {
            const g = new CustomEvent(Ie, wt);
            c.addEventListener(Ie, l),
              c.dispatchEvent(g),
              g.defaultPrevented || (wr(Pr(zt(c)), { select: !0 }), document.activeElement === f && Z(c));
          }
          return () => {
            c.removeEventListener(Ie, l),
              setTimeout(() => {
                const g = new CustomEvent(We, wt);
                c.addEventListener(We, p),
                  c.dispatchEvent(g),
                  g.defaultPrevented || Z(f ?? document.body, { select: !0 }),
                  c.removeEventListener(We, p),
                  bt.remove(m);
              }, 0);
          };
        }
      }, [c, l, p, m]);
    const y = a.useCallback(
      (f) => {
        if ((!n && !r) || m.paused) return;
        const v = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey,
          g = document.activeElement;
        if (v && g) {
          const b = f.currentTarget,
            [x, w] = xr(b);
          x && w
            ? !f.shiftKey && g === w
              ? (f.preventDefault(), n && Z(x, { select: !0 }))
              : f.shiftKey && g === x && (f.preventDefault(), n && Z(w, { select: !0 }))
            : g === b && f.preventDefault();
        }
      },
      [n, r, m.paused]
    );
    return A.jsx(X.div, { tabIndex: -1, ...s, ref: h, onKeyDown: y });
  });
Vt.displayName = yr;
function wr(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e) if ((Z(r, { select: t }), document.activeElement !== n)) return;
}
function xr(e) {
  const t = zt(e),
    n = xt(t, e),
    r = xt(t.reverse(), e);
  return [n, r];
}
function zt(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function xt(e, t) {
  for (const n of e) if (!br(n, { upTo: t })) return n;
}
function br(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Er(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Z(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Er(e) && t && e.select();
  }
}
var bt = Cr();
function Cr() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Et(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Et(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function Et(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Pr(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ar = "Portal",
  Yt = a.forwardRef((e, t) => {
    var c;
    const { container: n, ...r } = e,
      [o, i] = a.useState(!1);
    te(() => i(!0), []);
    const s = n || (o && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body));
    return s ? Kn.createPortal(A.jsx(X.div, { ...r, ref: t }), s) : null;
  });
Yt.displayName = Ar;
var je = 0;
function Sr() {
  a.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Ct()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Ct()),
      je++,
      () => {
        je === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), je--;
      }
    );
  }, []);
}
function Ct() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var B = function () {
  return (
    (B =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    B.apply(this, arguments)
  );
};
function Xt(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Rr(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Re = "right-scroll-bar-position",
  Oe = "width-before-scroll-bar",
  Or = "with-scroll-bars-hidden",
  Nr = "--removed-body-scroll-bar-size";
function Be(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Tr(e, t) {
  var n = a.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Mr = typeof window < "u" ? a.useLayoutEffect : a.useEffect,
  Pt = new WeakMap();
function Lr(e, t) {
  var n = Tr(t || null, function (r) {
    return e.forEach(function (o) {
      return Be(o, r);
    });
  });
  return (
    Mr(
      function () {
        var r = Pt.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (c) {
            i.has(c) || Be(c, null);
          }),
            i.forEach(function (c) {
              o.has(c) || Be(c, s);
            });
        }
        Pt.set(n, e);
      },
      [e]
    ),
    n
  );
}
function Dr(e) {
  return e;
}
function kr(e, t) {
  t === void 0 && (t = Dr);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (c) {
              return c !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (c) {
            return i(c);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var c = n;
          (n = []), c.forEach(i), (s = n);
        }
        var u = function () {
            var p = s;
            (s = []), p.forEach(i);
          },
          l = function () {
            return Promise.resolve().then(u);
          };
        l(),
          (n = {
            push: function (p) {
              s.push(p), l();
            },
            filter: function (p) {
              return (s = s.filter(p)), n;
            },
          });
      },
    };
  return o;
}
function Fr(e) {
  e === void 0 && (e = {});
  var t = kr(null);
  return (t.options = B({ async: !0, ssr: !1 }, e)), t;
}
var Kt = function (e) {
  var t = e.sideCar,
    n = Xt(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return a.createElement(r, B({}, n));
};
Kt.isSideCarExport = !0;
function _r(e, t) {
  return e.useMedium(t), Kt;
}
var Zt = Fr(),
  $e = function () {},
  ke = a.forwardRef(function (e, t) {
    var n = a.useRef(null),
      r = a.useState({ onScrollCapture: $e, onWheelCapture: $e, onTouchMoveCapture: $e }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      c = e.children,
      u = e.className,
      l = e.removeScrollBar,
      p = e.enabled,
      d = e.shards,
      h = e.sideCar,
      m = e.noIsolation,
      y = e.inert,
      f = e.allowPinchZoom,
      v = e.as,
      g = v === void 0 ? "div" : v,
      b = e.gapMode,
      x = Xt(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      w = h,
      E = Lr([n, t]),
      P = B(B({}, x), o);
    return a.createElement(
      a.Fragment,
      null,
      p &&
        a.createElement(w, {
          sideCar: Zt,
          removeScrollBar: l,
          shards: d,
          noIsolation: m,
          inert: y,
          setCallbacks: i,
          allowPinchZoom: !!f,
          lockRef: n,
          gapMode: b,
        }),
      s ? a.cloneElement(a.Children.only(c), B(B({}, P), { ref: E })) : a.createElement(g, B({}, P, { className: u, ref: E }), c)
    );
  });
ke.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ke.classNames = { fullWidth: Oe, zeroRight: Re };
var At,
  Ir = function () {
    if (At) return At;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
function Wr() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ir();
  return t && e.setAttribute("nonce", t), e;
}
function jr(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function Br(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $r = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Wr()) && (jr(t, n), Br(t)), e++;
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Hr = function () {
    var e = $r();
    return function (t, n) {
      a.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Gt = function () {
    var e = Hr(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  Ur = { left: 0, top: 0, right: 0, gap: 0 },
  He = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  Vr = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [He(n), He(r), He(o)];
  },
  zr = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Ur;
    var t = Vr(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
  },
  Yr = Gt(),
  se = "data-scroll-locked",
  Xr = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      c = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Or,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(c, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          se,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(c, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Re,
          ` {
    right: `
        )
        .concat(c, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Oe,
          ` {
    margin-right: `
        )
        .concat(c, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Re, " .")
        .concat(
          Re,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Oe, " .")
        .concat(
          Oe,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          se,
          `] {
    `
        )
        .concat(Nr, ": ")
        .concat(
          c,
          `px;
  }
`
        )
    );
  },
  St = function () {
    var e = parseInt(document.body.getAttribute(se) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  Kr = function () {
    a.useEffect(function () {
      return (
        document.body.setAttribute(se, (St() + 1).toString()),
        function () {
          var e = St() - 1;
          e <= 0 ? document.body.removeAttribute(se) : document.body.setAttribute(se, e.toString());
        }
      );
    }, []);
  },
  Zr = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    Kr();
    var i = a.useMemo(
      function () {
        return zr(o);
      },
      [o]
    );
    return a.createElement(Yr, { styles: Xr(i, !t, o, n ? "" : "!important") });
  },
  Xe = !1;
if (typeof window < "u")
  try {
    var Ee = Object.defineProperty({}, "passive", {
      get: function () {
        return (Xe = !0), !0;
      },
    });
    window.addEventListener("test", Ee, Ee), window.removeEventListener("test", Ee, Ee);
  } catch {
    Xe = !1;
  }
var re = Xe ? { passive: !1 } : !1,
  Gr = function (e) {
    return e.tagName === "TEXTAREA";
  },
  qt = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Gr(e) && n[t] === "visible");
  },
  qr = function (e) {
    return qt(e, "overflowY");
  },
  Qr = function (e) {
    return qt(e, "overflowX");
  },
  Rt = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Qt(e, r);
      if (o) {
        var i = Jt(e, r),
          s = i[1],
          c = i[2];
        if (s > c) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Jr = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  eo = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Qt = function (e, t) {
    return e === "v" ? qr(t) : Qr(t);
  },
  Jt = function (e, t) {
    return e === "v" ? Jr(t) : eo(t);
  },
  to = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  no = function (e, t, n, r, o) {
    var i = to(e, window.getComputedStyle(t).direction),
      s = i * r,
      c = n.target,
      u = t.contains(c),
      l = !1,
      p = s > 0,
      d = 0,
      h = 0;
    do {
      var m = Jt(e, c),
        y = m[0],
        f = m[1],
        v = m[2],
        g = f - v - i * y;
      (y || g) && Qt(e, c) && ((d += g), (h += y)), c instanceof ShadowRoot ? (c = c.host) : (c = c.parentNode);
    } while ((!u && c !== document.body) || (u && (t.contains(c) || t === c)));
    return ((p && ((o && Math.abs(d) < 1) || (!o && s > d))) || (!p && ((o && Math.abs(h) < 1) || (!o && -s > h)))) && (l = !0), l;
  },
  Ce = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  Ot = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Nt = function (e) {
    return e && "current" in e ? e.current : e;
  },
  ro = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  oo = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  io = 0,
  oe = [];
function so(e) {
  var t = a.useRef([]),
    n = a.useRef([0, 0]),
    r = a.useRef(),
    o = a.useState(io++)[0],
    i = a.useState(Gt)[0],
    s = a.useRef(e);
  a.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    a.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var f = Rr([e.lockRef.current], (e.shards || []).map(Nt), !0).filter(Boolean);
          return (
            f.forEach(function (v) {
              return v.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                f.forEach(function (v) {
                  return v.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var c = a.useCallback(function (f, v) {
      if (("touches" in f && f.touches.length === 2) || (f.type === "wheel" && f.ctrlKey)) return !s.current.allowPinchZoom;
      var g = Ce(f),
        b = n.current,
        x = "deltaX" in f ? f.deltaX : b[0] - g[0],
        w = "deltaY" in f ? f.deltaY : b[1] - g[1],
        E,
        P = f.target,
        C = Math.abs(x) > Math.abs(w) ? "h" : "v";
      if ("touches" in f && C === "h" && P.type === "range") return !1;
      var R = Rt(C, P);
      if (!R) return !0;
      if ((R ? (E = C) : ((E = C === "v" ? "h" : "v"), (R = Rt(C, P))), !R)) return !1;
      if ((!r.current && "changedTouches" in f && (x || w) && (r.current = E), !E)) return !0;
      var T = r.current || E;
      return no(T, v, f, T === "h" ? x : w, !0);
    }, []),
    u = a.useCallback(function (f) {
      var v = f;
      if (!(!oe.length || oe[oe.length - 1] !== i)) {
        var g = "deltaY" in v ? Ot(v) : Ce(v),
          b = t.current.filter(function (E) {
            return E.name === v.type && (E.target === v.target || v.target === E.shadowParent) && ro(E.delta, g);
          })[0];
        if (b && b.should) {
          v.cancelable && v.preventDefault();
          return;
        }
        if (!b) {
          var x = (s.current.shards || [])
              .map(Nt)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(v.target);
              }),
            w = x.length > 0 ? c(v, x[0]) : !s.current.noIsolation;
          w && v.cancelable && v.preventDefault();
        }
      }
    }, []),
    l = a.useCallback(function (f, v, g, b) {
      var x = { name: f, delta: v, target: g, should: b, shadowParent: co(g) };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (w) {
            return w !== x;
          });
        }, 1);
    }, []),
    p = a.useCallback(function (f) {
      (n.current = Ce(f)), (r.current = void 0);
    }, []),
    d = a.useCallback(function (f) {
      l(f.type, Ot(f), f.target, c(f, e.lockRef.current));
    }, []),
    h = a.useCallback(function (f) {
      l(f.type, Ce(f), f.target, c(f, e.lockRef.current));
    }, []);
  a.useEffect(function () {
    return (
      oe.push(i),
      e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: h }),
      document.addEventListener("wheel", u, re),
      document.addEventListener("touchmove", u, re),
      document.addEventListener("touchstart", p, re),
      function () {
        (oe = oe.filter(function (f) {
          return f !== i;
        })),
          document.removeEventListener("wheel", u, re),
          document.removeEventListener("touchmove", u, re),
          document.removeEventListener("touchstart", p, re);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    y = e.inert;
  return a.createElement(
    a.Fragment,
    null,
    y ? a.createElement(i, { styles: oo(o) }) : null,
    m ? a.createElement(Zr, { gapMode: e.gapMode }) : null
  );
}
function co(e) {
  for (var t = null; e !== null; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const ao = _r(Zt, so);
var en = a.forwardRef(function (e, t) {
  return a.createElement(ke, B({}, e, { ref: t, sideCar: ao }));
});
en.classNames = ke.classNames;
const lo = en;
var uo = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  ie = new WeakMap(),
  Pe = new WeakMap(),
  Ae = {},
  Ue = 0,
  tn = function (e) {
    return e && (e.host || tn(e.parentNode));
  },
  fo = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = tn(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  po = function (e, t, n, r) {
    var o = fo(t, Array.isArray(e) ? e : [e]);
    Ae[n] || (Ae[n] = new WeakMap());
    var i = Ae[n],
      s = [],
      c = new Set(),
      u = new Set(o),
      l = function (d) {
        !d || c.has(d) || (c.add(d), l(d.parentNode));
      };
    o.forEach(l);
    var p = function (d) {
      !d ||
        u.has(d) ||
        Array.prototype.forEach.call(d.children, function (h) {
          if (c.has(h)) p(h);
          else
            try {
              var m = h.getAttribute(r),
                y = m !== null && m !== "false",
                f = (ie.get(h) || 0) + 1,
                v = (i.get(h) || 0) + 1;
              ie.set(h, f),
                i.set(h, v),
                s.push(h),
                f === 1 && y && Pe.set(h, !0),
                v === 1 && h.setAttribute(n, "true"),
                y || h.setAttribute(r, "true");
            } catch (g) {
              console.error("aria-hidden: cannot operate on ", h, g);
            }
        });
    };
    return (
      p(t),
      c.clear(),
      Ue++,
      function () {
        s.forEach(function (d) {
          var h = ie.get(d) - 1,
            m = i.get(d) - 1;
          ie.set(d, h), i.set(d, m), h || (Pe.has(d) || d.removeAttribute(r), Pe.delete(d)), m || d.removeAttribute(n);
        }),
          Ue--,
          Ue || ((ie = new WeakMap()), (ie = new WeakMap()), (Pe = new WeakMap()), (Ae = {}));
      }
    );
  },
  ho = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || uo(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), po(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  };
function he(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
  };
}
function nn(e, t = []) {
  let n = [];
  function r(i, s) {
    const c = a.createContext(s),
      u = n.length;
    n = [...n, s];
    const l = (d) => {
      var g;
      const { scope: h, children: m, ...y } = d,
        f = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[u]) || c,
        v = a.useMemo(() => y, Object.values(y));
      return A.jsx(f.Provider, { value: v, children: m });
    };
    l.displayName = i + "Provider";
    function p(d, h) {
      var f;
      const m = ((f = h == null ? void 0 : h[e]) == null ? void 0 : f[u]) || c,
        y = a.useContext(m);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [l, p];
  }
  const o = () => {
    const i = n.map((s) => a.createContext(s));
    return function (c) {
      const u = (c == null ? void 0 : c[e]) || i;
      return a.useMemo(() => ({ [`__scope${e}`]: { ...c, [e]: u } }), [c, u]);
    };
  };
  return (o.scopeName = e), [r, mo(o, ...t)];
}
function mo(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((c, { useScope: u, scopeName: l }) => {
        const d = u(i)[`__scope${l}`];
        return { ...c, ...d };
      }, {});
      return a.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
const vo = ["top", "right", "bottom", "left"],
  $ = Math.min,
  I = Math.max,
  Te = Math.round,
  Se = Math.floor,
  q = (e) => ({ x: e, y: e }),
  go = { left: "right", right: "left", bottom: "top", top: "bottom" },
  yo = { start: "end", end: "start" };
function Ke(e, t, n) {
  return I(e, $(t, n));
}
function z(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Y(e) {
  return e.split("-")[0];
}
function ue(e) {
  return e.split("-")[1];
}
function Qe(e) {
  return e === "x" ? "y" : "x";
}
function Je(e) {
  return e === "y" ? "height" : "width";
}
function fe(e) {
  return ["top", "bottom"].includes(Y(e)) ? "y" : "x";
}
function et(e) {
  return Qe(fe(e));
}
function wo(e, t, n) {
  n === void 0 && (n = !1);
  const r = ue(e),
    o = et(e),
    i = Je(o);
  let s = o === "x" ? (r === (n ? "end" : "start") ? "right" : "left") : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Me(s)), [s, Me(s)];
}
function xo(e) {
  const t = Me(e);
  return [Ze(e), t, Ze(t)];
}
function Ze(e) {
  return e.replace(/start|end/g, (t) => yo[t]);
}
function bo(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Eo(e, t, n, r) {
  const o = ue(e);
  let i = bo(Y(e), n === "start", r);
  return o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Ze)))), i;
}
function Me(e) {
  return e.replace(/left|right|bottom|top/g, (t) => go[t]);
}
function Co(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function rn(e) {
  return typeof e != "number" ? Co(e) : { top: e, right: e, bottom: e, left: e };
}
function Le(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function Tt(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = fe(t),
    s = et(t),
    c = Je(s),
    u = Y(t),
    l = i === "y",
    p = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    h = r[c] / 2 - o[c] / 2;
  let m;
  switch (u) {
    case "top":
      m = { x: p, y: r.y - o.height };
      break;
    case "bottom":
      m = { x: p, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: d };
      break;
    case "left":
      m = { x: r.x - o.width, y: d };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (ue(t)) {
    case "start":
      m[s] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += h * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const Po = async (e, t, n) => {
  const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: s } = n,
    c = i.filter(Boolean),
    u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: p, y: d } = Tt(l, r, u),
    h = r,
    m = {},
    y = 0;
  for (let f = 0; f < c.length; f++) {
    const { name: v, fn: g } = c[f],
      {
        x: b,
        y: x,
        data: w,
        reset: E,
      } = await g({
        x: p,
        y: d,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: m,
        rects: l,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (p = b ?? p),
      (d = x ?? d),
      (m = { ...m, [v]: { ...m[v], ...w } }),
      E &&
        y <= 50 &&
        (y++,
        typeof E == "object" &&
          (E.placement && (h = E.placement),
          E.rects && (l = E.rects === !0 ? await s.getElementRects({ reference: e, floating: t, strategy: o }) : E.rects),
          ({ x: p, y: d } = Tt(l, h, u))),
        (f = -1));
  }
  return { x: p, y: d, placement: h, strategy: o, middlewareData: m };
};
async function me(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: c, strategy: u } = e,
    {
      boundary: l = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: d = "floating",
      altBoundary: h = !1,
      padding: m = 0,
    } = z(t, e),
    y = rn(m),
    v = c[h ? (d === "floating" ? "reference" : "floating") : d],
    g = Le(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n
            ? v
            : v.contextElement || (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating))),
        boundary: l,
        rootBoundary: p,
        strategy: u,
      })
    ),
    b = d === "floating" ? { x: r, y: o, width: s.floating.width, height: s.floating.height } : s.reference,
    x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)),
    w = (await (i.isElement == null ? void 0 : i.isElement(x)))
      ? (await (i.getScale == null ? void 0 : i.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = Le(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: c, rect: b, offsetParent: x, strategy: u })
        : b
    );
  return {
    top: (g.top - E.top + y.top) / w.y,
    bottom: (E.bottom - g.bottom + y.bottom) / w.y,
    left: (g.left - E.left + y.left) / w.x,
    right: (E.right - g.right + y.right) / w.x,
  };
}
const Ao = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const { x: n, y: r, placement: o, rects: i, platform: s, elements: c, middlewareData: u } = t,
        { element: l, padding: p = 0 } = z(e, t) || {};
      if (l == null) return {};
      const d = rn(p),
        h = { x: n, y: r },
        m = et(o),
        y = Je(m),
        f = await s.getDimensions(l),
        v = m === "y",
        g = v ? "top" : "left",
        b = v ? "bottom" : "right",
        x = v ? "clientHeight" : "clientWidth",
        w = i.reference[y] + i.reference[m] - h[m] - i.floating[y],
        E = h[m] - i.reference[m],
        P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
      let C = P ? P[x] : 0;
      (!C || !(await (s.isElement == null ? void 0 : s.isElement(P)))) && (C = c.floating[x] || i.floating[y]);
      const R = w / 2 - E / 2,
        T = C / 2 - f[y] / 2 - 1,
        M = $(d[g], T),
        D = $(d[b], T),
        N = M,
        F = C - f[y] - D,
        L = C / 2 - f[y] / 2 + R,
        O = Ke(N, L, F),
        k = !u.arrow && ue(o) != null && L !== O && i.reference[y] / 2 - (L < N ? M : D) - f[y] / 2 < 0,
        S = k ? (L < N ? L - N : L - F) : 0;
      return { [m]: h[m] + S, data: { [m]: O, centerOffset: L - O - S, ...(k && { alignmentOffset: S }) }, reset: k };
    },
  }),
  So = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, middlewareData: i, rects: s, initialPlacement: c, platform: u, elements: l } = t,
            {
              mainAxis: p = !0,
              crossAxis: d = !0,
              fallbackPlacements: h,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: y = "none",
              flipAlignment: f = !0,
              ...v
            } = z(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const g = Y(o),
            b = Y(c) === c,
            x = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)),
            w = h || (b || !f ? [Me(c)] : xo(c));
          !h && y !== "none" && w.push(...Eo(c, f, y, x));
          const E = [c, ...w],
            P = await me(t, v),
            C = [];
          let R = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((p && C.push(P[g]), d)) {
            const N = wo(o, s, x);
            C.push(P[N[0]], P[N[1]]);
          }
          if (((R = [...R, { placement: o, overflows: C }]), !C.every((N) => N <= 0))) {
            var T, M;
            const N = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1,
              F = E[N];
            if (F) return { data: { index: N, overflows: R }, reset: { placement: F } };
            let L =
              (M = R.filter((O) => O.overflows[0] <= 0).sort((O, k) => O.overflows[1] - k.overflows[1])[0]) == null ? void 0 : M.placement;
            if (!L)
              switch (m) {
                case "bestFit": {
                  var D;
                  const O =
                    (D = R.map((k) => [k.placement, k.overflows.filter((S) => S > 0).reduce((S, _) => S + _, 0)]).sort(
                      (k, S) => k[1] - S[1]
                    )[0]) == null
                      ? void 0
                      : D[0];
                  O && (L = O);
                  break;
                }
                case "initialPlacement":
                  L = c;
                  break;
              }
            if (o !== L) return { reset: { placement: L } };
          }
          return {};
        },
      }
    );
  };
function Mt(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Lt(e) {
  return vo.some((t) => e[t] >= 0);
}
const Ro = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = z(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await me(t, { ...o, elementContext: "reference" }),
              s = Mt(i, n.reference);
            return { data: { referenceHiddenOffsets: s, referenceHidden: Lt(s) } };
          }
          case "escaped": {
            const i = await me(t, { ...o, altBoundary: !0 }),
              s = Mt(i, n.floating);
            return { data: { escapedOffsets: s, escaped: Lt(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Oo(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Y(n),
    c = ue(n),
    u = fe(n) === "y",
    l = ["left", "top"].includes(s) ? -1 : 1,
    p = i && u ? -1 : 1,
    d = z(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: y,
  } = typeof d == "number" ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return c && typeof y == "number" && (m = c === "end" ? y * -1 : y), u ? { x: m * p, y: h * l } : { x: h * l, y: m * p };
}
const No = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: c } = t,
            u = await Oo(t, e);
          return s === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset
            ? {}
            : { x: o + u.x, y: i + u.y, data: { ...u, placement: s } };
        },
      }
    );
  },
  To = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (v) => {
                  let { x: g, y: b } = v;
                  return { x: g, y: b };
                },
              },
              ...u
            } = z(e, t),
            l = { x: n, y: r },
            p = await me(t, u),
            d = fe(Y(o)),
            h = Qe(d);
          let m = l[h],
            y = l[d];
          if (i) {
            const v = h === "y" ? "top" : "left",
              g = h === "y" ? "bottom" : "right",
              b = m + p[v],
              x = m - p[g];
            m = Ke(b, m, x);
          }
          if (s) {
            const v = d === "y" ? "top" : "left",
              g = d === "y" ? "bottom" : "right",
              b = y + p[v],
              x = y - p[g];
            y = Ke(b, y, x);
          }
          const f = c.fn({ ...t, [h]: m, [d]: y });
          return { ...f, data: { x: f.x - n, y: f.y - r } };
        },
      }
    );
  },
  Mo = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: c = 0, mainAxis: u = !0, crossAxis: l = !0 } = z(e, t),
            p = { x: n, y: r },
            d = fe(o),
            h = Qe(d);
          let m = p[h],
            y = p[d];
          const f = z(c, t),
            v = typeof f == "number" ? { mainAxis: f, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...f };
          if (u) {
            const x = h === "y" ? "height" : "width",
              w = i.reference[h] - i.floating[x] + v.mainAxis,
              E = i.reference[h] + i.reference[x] - v.mainAxis;
            m < w ? (m = w) : m > E && (m = E);
          }
          if (l) {
            var g, b;
            const x = h === "y" ? "width" : "height",
              w = ["top", "left"].includes(Y(o)),
              E = i.reference[d] - i.floating[x] + ((w && ((g = s.offset) == null ? void 0 : g[d])) || 0) + (w ? 0 : v.crossAxis),
              P = i.reference[d] + i.reference[x] + (w ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (w ? v.crossAxis : 0);
            y < E ? (y = E) : y > P && (y = P);
          }
          return { [h]: m, [d]: y };
        },
      }
    );
  },
  Lo = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: i } = t,
            { apply: s = () => {}, ...c } = z(e, t),
            u = await me(t, c),
            l = Y(n),
            p = ue(n),
            d = fe(n) === "y",
            { width: h, height: m } = r.floating;
          let y, f;
          l === "top" || l === "bottom"
            ? ((y = l), (f = p === ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating))) ? "start" : "end") ? "left" : "right"))
            : ((f = l), (y = p === "end" ? "top" : "bottom"));
          const v = m - u.top - u.bottom,
            g = h - u.left - u.right,
            b = $(m - u[y], v),
            x = $(h - u[f], g),
            w = !t.middlewareData.shift;
          let E = b,
            P = x;
          if ((d ? (P = p || w ? $(x, g) : g) : (E = p || w ? $(b, v) : v), w && !p)) {
            const R = I(u.left, 0),
              T = I(u.right, 0),
              M = I(u.top, 0),
              D = I(u.bottom, 0);
            d
              ? (P = h - 2 * (R !== 0 || T !== 0 ? R + T : I(u.left, u.right)))
              : (E = m - 2 * (M !== 0 || D !== 0 ? M + D : I(u.top, u.bottom)));
          }
          await s({ ...t, availableWidth: P, availableHeight: E });
          const C = await o.getDimensions(i.floating);
          return h !== C.width || m !== C.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function de(e) {
  return on(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function W(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function K(e) {
  var t;
  return (t = (on(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function on(e) {
  return e instanceof Node || e instanceof W(e).Node;
}
function H(e) {
  return e instanceof Element || e instanceof W(e).Element;
}
function U(e) {
  return e instanceof HTMLElement || e instanceof W(e).HTMLElement;
}
function Dt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof W(e).ShadowRoot;
}
function ge(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = j(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Do(e) {
  return ["table", "td", "th"].includes(de(e));
}
function tt(e) {
  const t = nt(),
    n = j(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) ||
    ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r))
  );
}
function ko(e) {
  let t = Q(e);
  for (; U(t) && !ae(t); ) {
    if (tt(t)) return t;
    t = Q(t);
  }
  return null;
}
function nt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ae(e) {
  return ["html", "body", "#document"].includes(de(e));
}
function j(e) {
  return W(e).getComputedStyle(e);
}
function Fe(e) {
  return H(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Q(e) {
  if (de(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Dt(e) && e.host) || K(e);
  return Dt(t) ? t.host : t;
}
function sn(e) {
  const t = Q(e);
  return ae(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : U(t) && ge(t) ? t : sn(t);
}
function ve(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = sn(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = W(o);
  return i ? t.concat(s, s.visualViewport || [], ge(o) ? o : [], s.frameElement && n ? ve(s.frameElement) : []) : t.concat(o, ve(o, [], n));
}
function cn(e) {
  const t = j(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = U(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    c = Te(n) !== i || Te(r) !== s;
  return c && ((n = i), (r = s)), { width: n, height: r, $: c };
}
function rt(e) {
  return H(e) ? e : e.contextElement;
}
function ce(e) {
  const t = rt(e);
  if (!U(t)) return q(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = cn(t);
  let s = (i ? Te(n.width) : n.width) / r,
    c = (i ? Te(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), { x: s, y: c };
}
const Fo = q(0);
function an(e) {
  const t = W(e);
  return !nt() || !t.visualViewport ? Fo : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function _o(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== W(e)) ? !1 : t;
}
function ne(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = rt(e);
  let s = q(1);
  t && (r ? H(r) && (s = ce(r)) : (s = ce(e)));
  const c = _o(i, n, r) ? an(i) : q(0);
  let u = (o.left + c.x) / s.x,
    l = (o.top + c.y) / s.y,
    p = o.width / s.x,
    d = o.height / s.y;
  if (i) {
    const h = W(i),
      m = r && H(r) ? W(r) : r;
    let y = h,
      f = y.frameElement;
    for (; f && r && m !== y; ) {
      const v = ce(f),
        g = f.getBoundingClientRect(),
        b = j(f),
        x = g.left + (f.clientLeft + parseFloat(b.paddingLeft)) * v.x,
        w = g.top + (f.clientTop + parseFloat(b.paddingTop)) * v.y;
      (u *= v.x), (l *= v.y), (p *= v.x), (d *= v.y), (u += x), (l += w), (y = W(f)), (f = y.frameElement);
    }
  }
  return Le({ width: p, height: d, x: u, y: l });
}
const Io = [":popover-open", ":modal"];
function ot(e) {
  return Io.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Wo(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = K(r),
    c = t ? ot(t.floating) : !1;
  if (r === s || (c && i)) return n;
  let u = { scrollLeft: 0, scrollTop: 0 },
    l = q(1);
  const p = q(0),
    d = U(r);
  if ((d || (!d && !i)) && ((de(r) !== "body" || ge(s)) && (u = Fe(r)), U(r))) {
    const h = ne(r);
    (l = ce(r)), (p.x = h.x + r.clientLeft), (p.y = h.y + r.clientTop);
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - u.scrollLeft * l.x + p.x, y: n.y * l.y - u.scrollTop * l.y + p.y };
}
function jo(e) {
  return Array.from(e.getClientRects());
}
function ln(e) {
  return ne(K(e)).left + Fe(e).scrollLeft;
}
function Bo(e) {
  const t = K(e),
    n = Fe(e),
    r = e.ownerDocument.body,
    o = I(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = I(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ln(e);
  const c = -n.scrollTop;
  return j(r).direction === "rtl" && (s += I(t.clientWidth, r.clientWidth) - o), { width: o, height: i, x: s, y: c };
}
function $o(e, t) {
  const n = W(e),
    r = K(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    c = 0,
    u = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const l = nt();
    (!l || (l && t === "fixed")) && ((c = o.offsetLeft), (u = o.offsetTop));
  }
  return { width: i, height: s, x: c, y: u };
}
function Ho(e, t) {
  const n = ne(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = U(e) ? ce(e) : q(1),
    s = e.clientWidth * i.x,
    c = e.clientHeight * i.y,
    u = o * i.x,
    l = r * i.y;
  return { width: s, height: c, x: u, y: l };
}
function kt(e, t, n) {
  let r;
  if (t === "viewport") r = $o(e, n);
  else if (t === "document") r = Bo(K(e));
  else if (H(t)) r = Ho(t, n);
  else {
    const o = an(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Le(r);
}
function un(e, t) {
  const n = Q(e);
  return n === t || !H(n) || ae(n) ? !1 : j(n).position === "fixed" || un(n, t);
}
function Uo(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ve(e, [], !1).filter((c) => H(c) && de(c) !== "body"),
    o = null;
  const i = j(e).position === "fixed";
  let s = i ? Q(e) : e;
  for (; H(s) && !ae(s); ) {
    const c = j(s),
      u = tt(s);
    !u && c.position === "fixed" && (o = null),
      (i ? !u && !o : (!u && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) || (ge(s) && !u && un(e, s)))
        ? (r = r.filter((p) => p !== s))
        : (o = c),
      (s = Q(s));
  }
  return t.set(e, r), r;
}
function Vo(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [...(n === "clippingAncestors" ? (ot(t) ? [] : Uo(t, this._c)) : [].concat(n)), r],
    c = s[0],
    u = s.reduce((l, p) => {
      const d = kt(t, p, o);
      return (
        (l.top = I(d.top, l.top)), (l.right = $(d.right, l.right)), (l.bottom = $(d.bottom, l.bottom)), (l.left = I(d.left, l.left)), l
      );
    }, kt(t, c, o));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}
function zo(e) {
  const { width: t, height: n } = cn(e);
  return { width: t, height: n };
}
function Yo(e, t, n) {
  const r = U(t),
    o = K(t),
    i = n === "fixed",
    s = ne(e, !0, i, t);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const u = q(0);
  if (r || (!r && !i))
    if (((de(t) !== "body" || ge(o)) && (c = Fe(t)), r)) {
      const d = ne(t, !0, i, t);
      (u.x = d.x + t.clientLeft), (u.y = d.y + t.clientTop);
    } else o && (u.x = ln(o));
  const l = s.left + c.scrollLeft - u.x,
    p = s.top + c.scrollTop - u.y;
  return { x: l, y: p, width: s.width, height: s.height };
}
function Ve(e) {
  return j(e).position === "static";
}
function Ft(e, t) {
  return !U(e) || j(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function fn(e, t) {
  const n = W(e);
  if (ot(e)) return n;
  if (!U(e)) {
    let o = Q(e);
    for (; o && !ae(o); ) {
      if (H(o) && !Ve(o)) return o;
      o = Q(o);
    }
    return n;
  }
  let r = Ft(e, t);
  for (; r && Do(r) && Ve(r); ) r = Ft(r, t);
  return r && ae(r) && Ve(r) && !tt(r) ? n : r || ko(e) || n;
}
const Xo = async function (e) {
  const t = this.getOffsetParent || fn,
    n = this.getDimensions,
    r = await n(e.floating);
  return { reference: Yo(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } };
};
function Ko(e) {
  return j(e).direction === "rtl";
}
const Zo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wo,
  getDocumentElement: K,
  getClippingRect: Vo,
  getOffsetParent: fn,
  getElementRects: Xo,
  getClientRects: jo,
  getDimensions: zo,
  getScale: ce,
  isElement: H,
  isRTL: Ko,
};
function Go(e, t) {
  let n = null,
    r;
  const o = K(e);
  function i() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), (n = null);
  }
  function s(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), i();
    const { left: l, top: p, width: d, height: h } = e.getBoundingClientRect();
    if ((c || t(), !d || !h)) return;
    const m = Se(p),
      y = Se(o.clientWidth - (l + d)),
      f = Se(o.clientHeight - (p + h)),
      v = Se(l),
      b = { rootMargin: -m + "px " + -y + "px " + -f + "px " + -v + "px", threshold: I(0, $(1, u)) || 1 };
    let x = !0;
    function w(E) {
      const P = E[0].intersectionRatio;
      if (P !== u) {
        if (!x) return s();
        P
          ? s(!1, P)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(w, { ...b, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(w, b);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function qo(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: c = typeof IntersectionObserver == "function",
      animationFrame: u = !1,
    } = r,
    l = rt(e),
    p = o || i ? [...(l ? ve(l) : []), ...ve(t)] : [];
  p.forEach((g) => {
    o && g.addEventListener("scroll", n, { passive: !0 }), i && g.addEventListener("resize", n);
  });
  const d = l && c ? Go(l, n) : null;
  let h = -1,
    m = null;
  s &&
    ((m = new ResizeObserver((g) => {
      let [b] = g;
      b &&
        b.target === l &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var x;
          (x = m) == null || x.observe(t);
        }))),
        n();
    })),
    l && !u && m.observe(l),
    m.observe(t));
  let y,
    f = u ? ne(e) : null;
  u && v();
  function v() {
    const g = ne(e);
    f && (g.x !== f.x || g.y !== f.y || g.width !== f.width || g.height !== f.height) && n(), (f = g), (y = requestAnimationFrame(v));
  }
  return (
    n(),
    () => {
      var g;
      p.forEach((b) => {
        o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
      }),
        d == null || d(),
        (g = m) == null || g.disconnect(),
        (m = null),
        u && cancelAnimationFrame(y);
    }
  );
}
const Qo = No,
  Jo = To,
  ei = So,
  ti = Lo,
  ni = Ro,
  _t = Ao,
  ri = Mo,
  oi = (e, t, n) => {
    const r = new Map(),
      o = { platform: Zo, ...n },
      i = { ...o.platform, _c: r };
    return Po(e, t, { ...o, platform: i });
  };
var Ne = typeof document < "u" ? a.useLayoutEffect : a.useEffect;
function De(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!De(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !De(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function dn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function It(e, t) {
  const n = dn(e);
  return Math.round(t * n) / n;
}
function Wt(e) {
  const t = a.useRef(e);
  return (
    Ne(() => {
      t.current = e;
    }),
    t
  );
}
function ii(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: c = !0,
      whileElementsMounted: u,
      open: l,
    } = e,
    [p, d] = a.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
    [h, m] = a.useState(r);
  De(h, r) || m(r);
  const [y, f] = a.useState(null),
    [v, g] = a.useState(null),
    b = a.useCallback((S) => {
      S !== P.current && ((P.current = S), f(S));
    }, []),
    x = a.useCallback((S) => {
      S !== C.current && ((C.current = S), g(S));
    }, []),
    w = i || y,
    E = s || v,
    P = a.useRef(null),
    C = a.useRef(null),
    R = a.useRef(p),
    T = u != null,
    M = Wt(u),
    D = Wt(o),
    N = a.useCallback(() => {
      if (!P.current || !C.current) return;
      const S = { placement: t, strategy: n, middleware: h };
      D.current && (S.platform = D.current),
        oi(P.current, C.current, S).then((_) => {
          const V = { ..._, isPositioned: !0 };
          F.current &&
            !De(R.current, V) &&
            ((R.current = V),
            jt.flushSync(() => {
              d(V);
            }));
        });
    }, [h, t, n, D]);
  Ne(() => {
    l === !1 && R.current.isPositioned && ((R.current.isPositioned = !1), d((S) => ({ ...S, isPositioned: !1 })));
  }, [l]);
  const F = a.useRef(!1);
  Ne(
    () => (
      (F.current = !0),
      () => {
        F.current = !1;
      }
    ),
    []
  ),
    Ne(() => {
      if ((w && (P.current = w), E && (C.current = E), w && E)) {
        if (M.current) return M.current(w, E, N);
        N();
      }
    }, [w, E, N, M, T]);
  const L = a.useMemo(() => ({ reference: P, floating: C, setReference: b, setFloating: x }), [b, x]),
    O = a.useMemo(() => ({ reference: w, floating: E }), [w, E]),
    k = a.useMemo(() => {
      const S = { position: n, left: 0, top: 0 };
      if (!O.floating) return S;
      const _ = It(O.floating, p.x),
        V = It(O.floating, p.y);
      return c
        ? { ...S, transform: "translate(" + _ + "px, " + V + "px)", ...(dn(O.floating) >= 1.5 && { willChange: "transform" }) }
        : { position: n, left: _, top: V };
    }, [n, c, O.floating, p.x, p.y]);
  return a.useMemo(() => ({ ...p, update: N, refs: L, elements: O, floatingStyles: k }), [p, N, L, O, k]);
}
const si = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? _t({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? _t({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  ci = (e, t) => ({ ...Qo(e), options: [e, t] }),
  ai = (e, t) => ({ ...Jo(e), options: [e, t] }),
  li = (e, t) => ({ ...ri(e), options: [e, t] }),
  ui = (e, t) => ({ ...ei(e), options: [e, t] }),
  fi = (e, t) => ({ ...ti(e), options: [e, t] }),
  di = (e, t) => ({ ...ni(e), options: [e, t] }),
  pi = (e, t) => ({ ...si(e), options: [e, t] });
var hi = "Arrow",
  pn = a.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return A.jsx(X.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : A.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
pn.displayName = hi;
var mi = pn,
  it = "Popper",
  [hn, mn] = nn(it),
  [vi, vn] = hn(it),
  gn = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = a.useState(null);
    return A.jsx(vi, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
gn.displayName = it;
var yn = "PopperAnchor",
  wn = a.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = vn(yn, n),
      s = a.useRef(null),
      c = J(t, s);
    return (
      a.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : A.jsx(X.div, { ...o, ref: c })
    );
  });
wn.displayName = yn;
var st = "PopperContent",
  [gi, yi] = hn(st),
  xn = a.forwardRef((e, t) => {
    var lt, ut, ft, dt, pt, ht;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: c = 0,
        avoidCollisions: u = !0,
        collisionBoundary: l = [],
        collisionPadding: p = 0,
        sticky: d = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: m = "optimized",
        onPlaced: y,
        ...f
      } = e,
      v = vn(st, n),
      [g, b] = a.useState(null),
      x = J(t, (pe) => b(pe)),
      [w, E] = a.useState(null),
      P = tr(w),
      C = (P == null ? void 0 : P.width) ?? 0,
      R = (P == null ? void 0 : P.height) ?? 0,
      T = r + (i !== "center" ? "-" + i : ""),
      M = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p },
      D = Array.isArray(l) ? l : [l],
      N = D.length > 0,
      F = { padding: M, boundary: D.filter(xi), altBoundary: N },
      {
        refs: L,
        floatingStyles: O,
        placement: k,
        isPositioned: S,
        middlewareData: _,
      } = ii({
        strategy: "fixed",
        placement: T,
        whileElementsMounted: (...pe) => qo(...pe, { animationFrame: m === "always" }),
        elements: { reference: v.anchor },
        middleware: [
          ci({ mainAxis: o + R, alignmentAxis: s }),
          u && ai({ mainAxis: !0, crossAxis: !1, limiter: d === "partial" ? li() : void 0, ...F }),
          u && ui({ ...F }),
          fi({
            ...F,
            apply: ({ elements: pe, rects: mt, availableWidth: Un, availableHeight: Vn }) => {
              const { width: zn, height: Yn } = mt.reference,
                xe = pe.floating.style;
              xe.setProperty("--radix-popper-available-width", `${Un}px`),
                xe.setProperty("--radix-popper-available-height", `${Vn}px`),
                xe.setProperty("--radix-popper-anchor-width", `${zn}px`),
                xe.setProperty("--radix-popper-anchor-height", `${Yn}px`);
            },
          }),
          w && pi({ element: w, padding: c }),
          bi({ arrowWidth: C, arrowHeight: R }),
          h && di({ strategy: "referenceHidden", ...F }),
        ],
      }),
      [V, In] = Cn(k),
      we = G(y);
    te(() => {
      S && (we == null || we());
    }, [S, we]);
    const Wn = (lt = _.arrow) == null ? void 0 : lt.x,
      jn = (ut = _.arrow) == null ? void 0 : ut.y,
      Bn = ((ft = _.arrow) == null ? void 0 : ft.centerOffset) !== 0,
      [$n, Hn] = a.useState();
    return (
      te(() => {
        g && Hn(window.getComputedStyle(g).zIndex);
      }, [g]),
      A.jsx("div", {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...O,
          transform: S ? O.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: $n,
          "--radix-popper-transform-origin": [
            (dt = _.transformOrigin) == null ? void 0 : dt.x,
            (pt = _.transformOrigin) == null ? void 0 : pt.y,
          ].join(" "),
          ...(((ht = _.hide) == null ? void 0 : ht.referenceHidden) && { visibility: "hidden", pointerEvents: "none" }),
        },
        dir: e.dir,
        children: A.jsx(gi, {
          scope: n,
          placedSide: V,
          onArrowChange: E,
          arrowX: Wn,
          arrowY: jn,
          shouldHideArrow: Bn,
          children: A.jsx(X.div, { "data-side": V, "data-align": In, ...f, ref: x, style: { ...f.style, animation: S ? void 0 : "none" } }),
        }),
      })
    );
  });
xn.displayName = st;
var bn = "PopperArrow",
  wi = { top: "bottom", right: "left", bottom: "top", left: "right" },
  En = a.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = yi(bn, r),
      s = wi[i.placedSide];
    return A.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: A.jsx(mi, { ...o, ref: n, style: { ...o.style, display: "block" } }),
    });
  });
En.displayName = bn;
function xi(e) {
  return e !== null;
}
var bi = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, g, b;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0,
      c = s ? 0 : e.arrowWidth,
      u = s ? 0 : e.arrowHeight,
      [l, p] = Cn(n),
      d = { start: "0%", center: "50%", end: "100%" }[p],
      h = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + c / 2,
      m = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + u / 2;
    let y = "",
      f = "";
    return (
      l === "bottom"
        ? ((y = s ? d : `${h}px`), (f = `${-u}px`))
        : l === "top"
        ? ((y = s ? d : `${h}px`), (f = `${r.floating.height + u}px`))
        : l === "right"
        ? ((y = `${-u}px`), (f = s ? d : `${m}px`))
        : l === "left" && ((y = `${r.floating.width + u}px`), (f = s ? d : `${m}px`)),
      { data: { x: y, y: f } }
    );
  },
});
function Cn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ei = gn,
  Pn = wn,
  Ci = xn,
  Pi = En,
  ct = "Popover",
  [An, _i] = nn(ct, [mn]),
  ye = mn(),
  [Ai, ee] = An(ct),
  Sn = (e) => {
    const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: s = !1 } = e,
      c = ye(t),
      u = a.useRef(null),
      [l, p] = a.useState(!1),
      [d = !1, h] = Jn({ prop: r, defaultProp: o, onChange: i });
    return A.jsx(Ei, {
      ...c,
      children: A.jsx(Ai, {
        scope: t,
        contentId: lr(),
        triggerRef: u,
        open: d,
        onOpenChange: h,
        onOpenToggle: a.useCallback(() => h((m) => !m), [h]),
        hasCustomAnchor: l,
        onCustomAnchorAdd: a.useCallback(() => p(!0), []),
        onCustomAnchorRemove: a.useCallback(() => p(!1), []),
        modal: s,
        children: n,
      }),
    });
  };
Sn.displayName = ct;
var Rn = "PopoverAnchor",
  On = a.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = ee(Rn, n),
      i = ye(n),
      { onCustomAnchorAdd: s, onCustomAnchorRemove: c } = o;
    return a.useEffect(() => (s(), () => c()), [s, c]), A.jsx(Pn, { ...i, ...r, ref: t });
  });
On.displayName = Rn;
var Nn = "PopoverTrigger",
  Tn = a.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = ee(Nn, n),
      i = ye(n),
      s = J(t, o.triggerRef),
      c = A.jsx(X.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": _n(o.open),
        ...r,
        ref: s,
        onClick: he(e.onClick, o.onOpenToggle),
      });
    return o.hasCustomAnchor ? c : A.jsx(Pn, { asChild: !0, ...i, children: c });
  });
Tn.displayName = Nn;
var at = "PopoverPortal",
  [Si, Ri] = An(at, { forceMount: void 0 }),
  Mn = (e) => {
    const { __scopePopover: t, forceMount: n, children: r, container: o } = e,
      i = ee(at, t);
    return A.jsx(Si, {
      scope: t,
      forceMount: n,
      children: A.jsx(qe, { present: n || i.open, children: A.jsx(Yt, { asChild: !0, container: o, children: r }) }),
    });
  };
Mn.displayName = at;
var le = "PopoverContent",
  Ln = a.forwardRef((e, t) => {
    const n = Ri(le, e.__scopePopover),
      { forceMount: r = n.forceMount, ...o } = e,
      i = ee(le, e.__scopePopover);
    return A.jsx(qe, { present: r || i.open, children: i.modal ? A.jsx(Oi, { ...o, ref: t }) : A.jsx(Ni, { ...o, ref: t }) });
  });
Ln.displayName = le;
var Oi = a.forwardRef((e, t) => {
    const n = ee(le, e.__scopePopover),
      r = a.useRef(null),
      o = J(t, r),
      i = a.useRef(!1);
    return (
      a.useEffect(() => {
        const s = r.current;
        if (s) return ho(s);
      }, []),
      A.jsx(lo, {
        as: Ge,
        allowPinchZoom: !0,
        children: A.jsx(Dn, {
          ...e,
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: he(e.onCloseAutoFocus, (s) => {
            var c;
            s.preventDefault(), i.current || (c = n.triggerRef.current) == null || c.focus();
          }),
          onPointerDownOutside: he(
            e.onPointerDownOutside,
            (s) => {
              const c = s.detail.originalEvent,
                u = c.button === 0 && c.ctrlKey === !0,
                l = c.button === 2 || u;
              i.current = l;
            },
            { checkForDefaultPrevented: !1 }
          ),
          onFocusOutside: he(e.onFocusOutside, (s) => s.preventDefault(), { checkForDefaultPrevented: !1 }),
        }),
      })
    );
  }),
  Ni = a.forwardRef((e, t) => {
    const n = ee(le, e.__scopePopover),
      r = a.useRef(!1),
      o = a.useRef(!1);
    return A.jsx(Dn, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var s, c;
        (s = e.onCloseAutoFocus) == null || s.call(e, i),
          i.defaultPrevented || (r.current || (c = n.triggerRef.current) == null || c.focus(), i.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (i) => {
        var u, l;
        (u = e.onInteractOutside) == null || u.call(e, i),
          i.defaultPrevented || ((r.current = !0), i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const s = i.target;
        ((l = n.triggerRef.current) == null ? void 0 : l.contains(s)) && i.preventDefault(),
          i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
      },
    });
  }),
  Dn = a.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: s,
        onEscapeKeyDown: c,
        onPointerDownOutside: u,
        onFocusOutside: l,
        onInteractOutside: p,
        ...d
      } = e,
      h = ee(le, n),
      m = ye(n);
    return (
      Sr(),
      A.jsx(Vt, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: A.jsx(Ht, {
          asChild: !0,
          disableOutsidePointerEvents: s,
          onInteractOutside: p,
          onEscapeKeyDown: c,
          onPointerDownOutside: u,
          onFocusOutside: l,
          onDismiss: () => h.onOpenChange(!1),
          children: A.jsx(Ci, {
            "data-state": _n(h.open),
            role: "dialog",
            id: h.contentId,
            ...m,
            ...d,
            ref: t,
            style: {
              ...d.style,
              "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)",
            },
          }),
        }),
      })
    );
  }),
  kn = "PopoverClose",
  Ti = a.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = ee(kn, n);
    return A.jsx(X.button, { type: "button", ...r, ref: t, onClick: he(e.onClick, () => o.onOpenChange(!1)) });
  });
Ti.displayName = kn;
var Mi = "PopoverArrow",
  Fn = a.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = ye(n);
    return A.jsx(Pi, { ...o, ...r, ref: t });
  });
Fn.displayName = Mi;
function _n(e) {
  return e ? "open" : "closed";
}
var Ii = Sn,
  Wi = On,
  ji = Tn,
  Bi = Mn,
  $i = Ln,
  Hi = Fn;
export {
  B as _,
  Wi as A,
  Jn as a,
  fi as B,
  qe as b,
  $i as C,
  Fi as c,
  Ht as D,
  tr as d,
  pi as E,
  Sr as e,
  Vt as F,
  lr as f,
  di as G,
  Yt as g,
  te as H,
  ho as h,
  Ii as i,
  Bi as j,
  G as k,
  Tn as l,
  Ln as m,
  Hi as n,
  Xt as o,
  X as P,
  Ir as p,
  Rr as q,
  lo as R,
  ur as r,
  Ge as S,
  Gt as s,
  ji as T,
  ii as t,
  J as u,
  qo as v,
  ci as w,
  ai as x,
  li as y,
  ui as z,
};
