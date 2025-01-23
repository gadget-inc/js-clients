import { _ as w } from "./extends-98964cd2.js";
import { r as c, a as tt } from "./index-c6dae603.js";
import { r as Oe, R as nt } from "./index-eb008d06.js";
var xe = { exports: {} },
  z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rt = c,
  ot = Symbol.for("react.element"),
  ct = Symbol.for("react.fragment"),
  at = Object.prototype.hasOwnProperty,
  it = rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  st = { key: !0, ref: !0, __self: !0, __source: !0 };
function De(e, t, n) {
  var r,
    o = {},
    a = null,
    s = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) at.call(t, r) && !st.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: ot, type: e, key: a, ref: s, props: o, _owner: it.current };
}
z.Fragment = ct;
z.jsx = De;
z.jsxs = De;
xe.exports = z;
var Gn = xe.exports,
  ut = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  A = new WeakMap(),
  U = new WeakMap(),
  B = {},
  q = 0,
  Re = function (e) {
    return e && (e.host || Re(e.parentNode));
  },
  lt = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Re(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  dt = function (e, t, n, r) {
    var o = lt(t, Array.isArray(e) ? e : [e]);
    B[n] || (B[n] = new WeakMap());
    var a = B[n],
      s = [],
      i = new Set(),
      d = new Set(o),
      f = function (l) {
        !l || i.has(l) || (i.add(l), f(l.parentNode));
      };
    o.forEach(f);
    var v = function (l) {
      !l ||
        d.has(l) ||
        Array.prototype.forEach.call(l.children, function (m) {
          if (i.has(m)) v(m);
          else
            try {
              var p = m.getAttribute(r),
                y = p !== null && p !== "false",
                u = (A.get(m) || 0) + 1,
                h = (a.get(m) || 0) + 1;
              A.set(m, u),
                a.set(m, h),
                s.push(m),
                u === 1 && y && U.set(m, !0),
                h === 1 && m.setAttribute(n, "true"),
                y || m.setAttribute(r, "true");
            } catch (b) {
              console.error("aria-hidden: cannot operate on ", m, b);
            }
        });
    };
    return (
      v(t),
      i.clear(),
      q++,
      function () {
        s.forEach(function (l) {
          var m = A.get(l) - 1,
            p = a.get(l) - 1;
          A.set(l, m), a.set(l, p), m || (U.has(l) || l.removeAttribute(r), U.delete(l)), p || l.removeAttribute(n);
        }),
          q--,
          q || ((A = new WeakMap()), (A = new WeakMap()), (U = new WeakMap()), (B = {}));
      }
    );
  },
  ft = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || ut(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), dt(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  O = function () {
    return (
      (O =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
          }
          return t;
        }),
      O.apply(this, arguments)
    );
  };
function _e(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function vt(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++) (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var H = "right-scroll-bar-position",
  Y = "width-before-scroll-bar",
  pt = "with-scroll-bars-hidden",
  mt = "--removed-body-scroll-bar-size";
function Q(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ht(e, t) {
  var n = c.useState(function () {
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
var bt = typeof window < "u" ? c.useLayoutEffect : c.useEffect,
  ve = new WeakMap();
function $t(e, t) {
  var n = ht(t || null, function (r) {
    return e.forEach(function (o) {
      return Q(o, r);
    });
  });
  return (
    bt(
      function () {
        var r = ve.get(n);
        if (r) {
          var o = new Set(r),
            a = new Set(e),
            s = n.current;
          o.forEach(function (i) {
            a.has(i) || Q(i, null);
          }),
            a.forEach(function (i) {
              o.has(i) || Q(i, s);
            });
        }
        ve.set(n, e);
      },
      [e]
    ),
    n
  );
}
function gt(e) {
  return e;
}
function Et(e, t) {
  t === void 0 && (t = gt);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (a) {
        var s = t(a, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (i) {
              return i !== s;
            });
          }
        );
      },
      assignSyncMedium: function (a) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(a);
        }
        n = {
          push: function (i) {
            return a(i);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (a) {
        r = !0;
        var s = [];
        if (n.length) {
          var i = n;
          (n = []), i.forEach(a), (s = n);
        }
        var d = function () {
            var v = s;
            (s = []), v.forEach(a);
          },
          f = function () {
            return Promise.resolve().then(d);
          };
        f(),
          (n = {
            push: function (v) {
              s.push(v), f();
            },
            filter: function (v) {
              return (s = s.filter(v)), n;
            },
          });
      },
    };
  return o;
}
function yt(e) {
  e === void 0 && (e = {});
  var t = Et(null);
  return (t.options = O({ async: !0, ssr: !1 }, e)), t;
}
var Te = function (e) {
  var t = e.sideCar,
    n = _e(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return c.createElement(r, O({}, n));
};
Te.isSideCarExport = !0;
function Ct(e, t) {
  return e.useMedium(t), Te;
}
var pe,
  St = function () {
    if (pe) return pe;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
function wt() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = St();
  return t && e.setAttribute("nonce", t), e;
}
function Pt(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function Ot(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var xt = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = wt()) && (Pt(t, n), Ot(t)), e++;
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Dt = function () {
    var e = xt();
    return function (t, n) {
      c.useEffect(
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
  Ne = function () {
    var e = Dt(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  Rt = { left: 0, top: 0, right: 0, gap: 0 },
  J = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  _t = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [J(n), J(r), J(o)];
  },
  Tt = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Rt;
    var t = _t(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
  },
  Nt = Ne(),
  L = "data-scroll-locked",
  At = function (e, t, n, r) {
    var o = e.left,
      a = e.top,
      s = e.right,
      i = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          pt,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          L,
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
                  a,
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
                .concat(i, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          H,
          ` {
    right: `
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Y,
          ` {
    margin-right: `
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(H, " .")
        .concat(
          H,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Y, " .")
        .concat(
          Y,
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
          L,
          `] {
    `
        )
        .concat(mt, ": ")
        .concat(
          i,
          `px;
  }
`
        )
    );
  },
  me = function () {
    var e = parseInt(document.body.getAttribute(L) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  It = function () {
    c.useEffect(function () {
      return (
        document.body.setAttribute(L, (me() + 1).toString()),
        function () {
          var e = me() - 1;
          e <= 0 ? document.body.removeAttribute(L) : document.body.setAttribute(L, e.toString());
        }
      );
    }, []);
  },
  kt = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    It();
    var a = c.useMemo(
      function () {
        return Tt(o);
      },
      [o]
    );
    return c.createElement(Nt, { styles: At(a, !t, o, n ? "" : "!important") });
  };
function R(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
  };
}
function Lt(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ae(...e) {
  return (t) => e.forEach((n) => Lt(n, t));
}
function F(...e) {
  return c.useCallback(Ae(...e), e);
}
function Mt(e, t) {
  const n = c.createContext(t);
  function r(a) {
    const { children: s, ...i } = a,
      d = c.useMemo(() => i, Object.values(i));
    return c.createElement(n.Provider, { value: d }, s);
  }
  function o(a) {
    const s = c.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return (r.displayName = e + "Provider"), [r, o];
}
function Ft(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = c.createContext(s),
      d = n.length;
    n = [...n, s];
    function f(l) {
      const { scope: m, children: p, ...y } = l,
        u = (m == null ? void 0 : m[e][d]) || i,
        h = c.useMemo(() => y, Object.values(y));
      return c.createElement(u.Provider, { value: h }, p);
    }
    function v(l, m) {
      const p = (m == null ? void 0 : m[e][d]) || i,
        y = c.useContext(p);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${l}\` must be used within \`${a}\``);
    }
    return (f.displayName = a + "Provider"), [f, v];
  }
  const o = () => {
    const a = n.map((s) => c.createContext(s));
    return function (i) {
      const d = (i == null ? void 0 : i[e]) || a;
      return c.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: d } }), [i, d]);
    };
  };
  return (o.scopeName = e), [r, Wt(o, ...t)];
}
function Wt(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (a) {
      const s = r.reduce((i, { useScope: d, scopeName: f }) => {
        const l = d(a)[`__scope${f}`];
        return { ...i, ...l };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
const ce = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {},
  Ut = tt["useId".toString()] || (() => {});
let Bt = 0;
function ee(e) {
  const [t, n] = c.useState(Ut());
  return (
    ce(() => {
      e || n((r) => r ?? String(Bt++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function N(e) {
  const t = c.useRef(e);
  return (
    c.useEffect(() => {
      t.current = e;
    }),
    c.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function jt({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Kt({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    s = a ? e : r,
    i = N(n),
    d = c.useCallback(
      (f) => {
        if (a) {
          const l = typeof f == "function" ? f(e) : f;
          l !== e && i(l);
        } else o(f);
      },
      [a, e, o, i]
    );
  return [s, d];
}
function Kt({ defaultProp: e, onChange: t }) {
  const n = c.useState(e),
    [r] = n,
    o = c.useRef(r),
    a = N(t);
  return (
    c.useEffect(() => {
      o.current !== r && (a(r), (o.current = r));
    }, [r, o, a]),
    n
  );
}
const le = c.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = c.Children.toArray(n),
    a = o.find(Ht);
  if (a) {
    const s = a.props.children,
      i = o.map((d) => (d === a ? (c.Children.count(s) > 1 ? c.Children.only(null) : c.isValidElement(s) ? s.props.children : null) : d));
    return c.createElement(ae, w({}, r, { ref: t }), c.isValidElement(s) ? c.cloneElement(s, void 0, i) : null);
  }
  return c.createElement(ae, w({}, r, { ref: t }), n);
});
le.displayName = "Slot";
const ae = c.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return c.isValidElement(n)
    ? c.cloneElement(n, { ...Yt(r, n.props), ref: t ? Ae(t, n.ref) : n.ref })
    : c.Children.count(n) > 1
    ? c.Children.only(null)
    : null;
});
ae.displayName = "SlotClone";
const Vt = ({ children: e }) => c.createElement(c.Fragment, null, e);
function Ht(e) {
  return c.isValidElement(e) && e.type === Vt;
}
function Yt(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? o && a
        ? (n[r] = (...i) => {
            a(...i), o(...i);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...a })
      : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
const zt = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
  _ = zt.reduce((e, t) => {
    const n = c.forwardRef((r, o) => {
      const { asChild: a, ...s } = r,
        i = a ? le : t;
      return (
        c.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        c.createElement(i, w({}, s, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Xt(e, t) {
  e && Oe.flushSync(() => e.dispatchEvent(t));
}
function Gt(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = N(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [n, t]);
}
const ie = "dismissableLayer.update",
  Zt = "dismissableLayer.pointerDownOutside",
  qt = "dismissableLayer.focusOutside";
let he;
const Qt = c.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
  Jt = c.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: a,
        onFocusOutside: s,
        onInteractOutside: i,
        onDismiss: d,
        ...f
      } = e,
      v = c.useContext(Qt),
      [l, m] = c.useState(null),
      p = (n = l == null ? void 0 : l.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document,
      [, y] = c.useState({}),
      u = F(t, (E) => m(E)),
      h = Array.from(v.layers),
      [b] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1),
      S = h.indexOf(b),
      $ = l ? h.indexOf(l) : -1,
      g = v.layersWithOutsidePointerEventsDisabled.size > 0,
      C = $ >= S,
      W = en((E) => {
        const T = E.target,
          fe = [...v.branches].some((Z) => Z.contains(T));
        !C || fe || (a == null || a(E), i == null || i(E), E.defaultPrevented || d == null || d());
      }, p),
      x = tn((E) => {
        const T = E.target;
        [...v.branches].some((Z) => Z.contains(T)) || (s == null || s(E), i == null || i(E), E.defaultPrevented || d == null || d());
      }, p);
    return (
      Gt((E) => {
        $ === v.layers.size - 1 && (o == null || o(E), !E.defaultPrevented && d && (E.preventDefault(), d()));
      }, p),
      c.useEffect(() => {
        if (l)
          return (
            r &&
              (v.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((he = p.body.style.pointerEvents), (p.body.style.pointerEvents = "none")),
              v.layersWithOutsidePointerEventsDisabled.add(l)),
            v.layers.add(l),
            be(),
            () => {
              r && v.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = he);
            }
          );
      }, [l, p, r, v]),
      c.useEffect(
        () => () => {
          l && (v.layers.delete(l), v.layersWithOutsidePointerEventsDisabled.delete(l), be());
        },
        [l, v]
      ),
      c.useEffect(() => {
        const E = () => y({});
        return document.addEventListener(ie, E), () => document.removeEventListener(ie, E);
      }, []),
      c.createElement(
        _.div,
        w({}, f, {
          ref: u,
          style: { pointerEvents: g ? (C ? "auto" : "none") : void 0, ...e.style },
          onFocusCapture: R(e.onFocusCapture, x.onFocusCapture),
          onBlurCapture: R(e.onBlurCapture, x.onBlurCapture),
          onPointerDownCapture: R(e.onPointerDownCapture, W.onPointerDownCapture),
        })
      )
    );
  });
function en(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = N(e),
    r = c.useRef(!1),
    o = c.useRef(() => {});
  return (
    c.useEffect(() => {
      const a = (i) => {
          if (i.target && !r.current) {
            let f = function () {
              Ie(Zt, n, d, { discrete: !0 });
            };
            const d = { originalEvent: i };
            i.pointerType === "touch"
              ? (t.removeEventListener("click", o.current), (o.current = f), t.addEventListener("click", o.current, { once: !0 }))
              : f();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", a);
        }, 0);
      return () => {
        window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function tn(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = N(e),
    r = c.useRef(!1);
  return (
    c.useEffect(() => {
      const o = (a) => {
        a.target && !r.current && Ie(qt, n, { originalEvent: a }, { discrete: !1 });
      };
      return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
    }, [t, n]),
    { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
  );
}
function be() {
  const e = new CustomEvent(ie);
  document.dispatchEvent(e);
}
function Ie(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Xt(o, a) : o.dispatchEvent(a);
}
const te = "focusScope.autoFocusOnMount",
  ne = "focusScope.autoFocusOnUnmount",
  $e = { bubbles: !1, cancelable: !0 },
  nn = c.forwardRef((e, t) => {
    const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e,
      [i, d] = c.useState(null),
      f = N(o),
      v = N(a),
      l = c.useRef(null),
      m = F(t, (u) => d(u)),
      p = c.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    c.useEffect(() => {
      if (r) {
        let u = function ($) {
            if (p.paused || !i) return;
            const g = $.target;
            i.contains(g) ? (l.current = g) : D(l.current, { select: !0 });
          },
          h = function ($) {
            if (p.paused || !i) return;
            const g = $.relatedTarget;
            g !== null && (i.contains(g) || D(l.current, { select: !0 }));
          },
          b = function ($) {
            if (document.activeElement === document.body) for (const C of $) C.removedNodes.length > 0 && D(i);
          };
        document.addEventListener("focusin", u), document.addEventListener("focusout", h);
        const S = new MutationObserver(b);
        return (
          i && S.observe(i, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", u), document.removeEventListener("focusout", h), S.disconnect();
          }
        );
      }
    }, [r, i, p.paused]),
      c.useEffect(() => {
        if (i) {
          Ee.add(p);
          const u = document.activeElement;
          if (!i.contains(u)) {
            const b = new CustomEvent(te, $e);
            i.addEventListener(te, f),
              i.dispatchEvent(b),
              b.defaultPrevented || (rn(un(ke(i)), { select: !0 }), document.activeElement === u && D(i));
          }
          return () => {
            i.removeEventListener(te, f),
              setTimeout(() => {
                const b = new CustomEvent(ne, $e);
                i.addEventListener(ne, v),
                  i.dispatchEvent(b),
                  b.defaultPrevented || D(u ?? document.body, { select: !0 }),
                  i.removeEventListener(ne, v),
                  Ee.remove(p);
              }, 0);
          };
        }
      }, [i, f, v, p]);
    const y = c.useCallback(
      (u) => {
        if ((!n && !r) || p.paused) return;
        const h = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey,
          b = document.activeElement;
        if (h && b) {
          const S = u.currentTarget,
            [$, g] = on(S);
          $ && g
            ? !u.shiftKey && b === g
              ? (u.preventDefault(), n && D($, { select: !0 }))
              : u.shiftKey && b === $ && (u.preventDefault(), n && D(g, { select: !0 }))
            : b === S && u.preventDefault();
        }
      },
      [n, r, p.paused]
    );
    return c.createElement(_.div, w({ tabIndex: -1 }, s, { ref: m, onKeyDown: y }));
  });
function rn(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e) if ((D(r, { select: t }), document.activeElement !== n)) return;
}
function on(e) {
  const t = ke(e),
    n = ge(t, e),
    r = ge(t.reverse(), e);
  return [n, r];
}
function ke(e) {
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
function ge(e, t) {
  for (const n of e) if (!cn(n, { upTo: t })) return n;
}
function cn(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function an(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function D(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && an(e) && t && e.select();
  }
}
const Ee = sn();
function sn() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = ye(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = ye(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function ye(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function un(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ln = c.forwardRef((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? nt.createPortal(c.createElement(_.div, w({}, o, { ref: t })), r) : null;
});
function dn(e, t) {
  return c.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const X = (e) => {
  const { present: t, children: n } = e,
    r = fn(t),
    o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n),
    a = F(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: a }) : null;
};
X.displayName = "Presence";
function fn(e) {
  const [t, n] = c.useState(),
    r = c.useRef({}),
    o = c.useRef(e),
    a = c.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [i, d] = dn(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    c.useEffect(() => {
      const f = j(r.current);
      a.current = i === "mounted" ? f : "none";
    }, [i]),
    ce(() => {
      const f = r.current,
        v = o.current;
      if (v !== e) {
        const m = a.current,
          p = j(f);
        e
          ? d("MOUNT")
          : p === "none" || (f == null ? void 0 : f.display) === "none"
          ? d("UNMOUNT")
          : d(v && m !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, d]),
    ce(() => {
      if (t) {
        const f = (l) => {
            const p = j(r.current).includes(l.animationName);
            l.target === t && p && Oe.flushSync(() => d("ANIMATION_END"));
          },
          v = (l) => {
            l.target === t && (a.current = j(r.current));
          };
        return (
          t.addEventListener("animationstart", v),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            t.removeEventListener("animationstart", v),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else d("ANIMATION_END");
    }, [t, d]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: c.useCallback((f) => {
        f && (r.current = getComputedStyle(f)), n(f);
      }, []),
    }
  );
}
function j(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let re = 0;
function vn() {
  c.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Ce()),
      document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Ce()),
      re++,
      () => {
        re === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), re--;
      }
    );
  }, []);
}
function Ce() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var Le = yt(),
  oe = function () {},
  G = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      r = c.useState({ onScrollCapture: oe, onWheelCapture: oe, onTouchMoveCapture: oe }),
      o = r[0],
      a = r[1],
      s = e.forwardProps,
      i = e.children,
      d = e.className,
      f = e.removeScrollBar,
      v = e.enabled,
      l = e.shards,
      m = e.sideCar,
      p = e.noIsolation,
      y = e.inert,
      u = e.allowPinchZoom,
      h = e.as,
      b = h === void 0 ? "div" : h,
      S = _e(e, [
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
      ]),
      $ = m,
      g = $t([n, t]),
      C = O(O({}, S), o);
    return c.createElement(
      c.Fragment,
      null,
      v &&
        c.createElement($, {
          sideCar: Le,
          removeScrollBar: f,
          shards: l,
          noIsolation: p,
          inert: y,
          setCallbacks: a,
          allowPinchZoom: !!u,
          lockRef: n,
        }),
      s ? c.cloneElement(c.Children.only(i), O(O({}, C), { ref: g })) : c.createElement(b, O({}, C, { className: d, ref: g }), i)
    );
  });
G.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
G.classNames = { fullWidth: Y, zeroRight: H };
var se = !1;
if (typeof window < "u")
  try {
    var K = Object.defineProperty({}, "passive", {
      get: function () {
        return (se = !0), !0;
      },
    });
    window.addEventListener("test", K, K), window.removeEventListener("test", K, K);
  } catch {
    se = !1;
  }
var I = se ? { passive: !1 } : !1,
  pn = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Me = function (e, t) {
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !pn(e) && n[t] === "visible");
  },
  mn = function (e) {
    return Me(e, "overflowY");
  },
  hn = function (e) {
    return Me(e, "overflowX");
  },
  Se = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = Fe(e, n);
      if (r) {
        var o = We(e, n),
          a = o[1],
          s = o[2];
        if (a > s) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  bn = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  $n = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Fe = function (e, t) {
    return e === "v" ? mn(t) : hn(t);
  },
  We = function (e, t) {
    return e === "v" ? bn(t) : $n(t);
  },
  gn = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  En = function (e, t, n, r, o) {
    var a = gn(e, window.getComputedStyle(t).direction),
      s = a * r,
      i = n.target,
      d = t.contains(i),
      f = !1,
      v = s > 0,
      l = 0,
      m = 0;
    do {
      var p = We(e, i),
        y = p[0],
        u = p[1],
        h = p[2],
        b = u - h - a * y;
      (y || b) && Fe(e, i) && ((l += b), (m += y)), (i = i.parentNode);
    } while ((!d && i !== document.body) || (d && (t.contains(i) || t === i)));
    return ((v && ((o && l === 0) || (!o && s > l))) || (!v && ((o && m === 0) || (!o && -s > m)))) && (f = !0), f;
  },
  V = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  we = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Pe = function (e) {
    return e && "current" in e ? e.current : e;
  },
  yn = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Cn = function (e) {
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
  Sn = 0,
  k = [];
function wn(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    r = c.useRef(),
    o = c.useState(Sn++)[0],
    a = c.useState(function () {
      return Ne();
    })[0],
    s = c.useRef(e);
  c.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    c.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var u = vt([e.lockRef.current], (e.shards || []).map(Pe), !0).filter(Boolean);
          return (
            u.forEach(function (h) {
              return h.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                u.forEach(function (h) {
                  return h.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var i = c.useCallback(function (u, h) {
      if ("touches" in u && u.touches.length === 2) return !s.current.allowPinchZoom;
      var b = V(u),
        S = n.current,
        $ = "deltaX" in u ? u.deltaX : S[0] - b[0],
        g = "deltaY" in u ? u.deltaY : S[1] - b[1],
        C,
        W = u.target,
        x = Math.abs($) > Math.abs(g) ? "h" : "v";
      if ("touches" in u && x === "h" && W.type === "range") return !1;
      var E = Se(x, W);
      if (!E) return !0;
      if ((E ? (C = x) : ((C = x === "v" ? "h" : "v"), (E = Se(x, W))), !E)) return !1;
      if ((!r.current && "changedTouches" in u && ($ || g) && (r.current = C), !C)) return !0;
      var T = r.current || C;
      return En(T, h, u, T === "h" ? $ : g, !0);
    }, []),
    d = c.useCallback(function (u) {
      var h = u;
      if (!(!k.length || k[k.length - 1] !== a)) {
        var b = "deltaY" in h ? we(h) : V(h),
          S = t.current.filter(function (C) {
            return C.name === h.type && C.target === h.target && yn(C.delta, b);
          })[0];
        if (S && S.should) {
          h.cancelable && h.preventDefault();
          return;
        }
        if (!S) {
          var $ = (s.current.shards || [])
              .map(Pe)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(h.target);
              }),
            g = $.length > 0 ? i(h, $[0]) : !s.current.noIsolation;
          g && h.cancelable && h.preventDefault();
        }
      }
    }, []),
    f = c.useCallback(function (u, h, b, S) {
      var $ = { name: u, delta: h, target: b, should: S };
      t.current.push($),
        setTimeout(function () {
          t.current = t.current.filter(function (g) {
            return g !== $;
          });
        }, 1);
    }, []),
    v = c.useCallback(function (u) {
      (n.current = V(u)), (r.current = void 0);
    }, []),
    l = c.useCallback(function (u) {
      f(u.type, we(u), u.target, i(u, e.lockRef.current));
    }, []),
    m = c.useCallback(function (u) {
      f(u.type, V(u), u.target, i(u, e.lockRef.current));
    }, []);
  c.useEffect(function () {
    return (
      k.push(a),
      e.setCallbacks({ onScrollCapture: l, onWheelCapture: l, onTouchMoveCapture: m }),
      document.addEventListener("wheel", d, I),
      document.addEventListener("touchmove", d, I),
      document.addEventListener("touchstart", v, I),
      function () {
        (k = k.filter(function (u) {
          return u !== a;
        })),
          document.removeEventListener("wheel", d, I),
          document.removeEventListener("touchmove", d, I),
          document.removeEventListener("touchstart", v, I);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    y = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    y ? c.createElement(a, { styles: Cn(o) }) : null,
    p ? c.createElement(kt, { gapMode: "margin" }) : null
  );
}
const Pn = Ct(Le, wn);
var Ue = c.forwardRef(function (e, t) {
  return c.createElement(G, O({}, e, { ref: t, sideCar: Pn }));
});
Ue.classNames = G.classNames;
const On = Ue,
  Be = "Dialog",
  [je, xn] = Ft(Be),
  [Dn, P] = je(Be),
  Ke = (e) => {
    const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e,
      i = c.useRef(null),
      d = c.useRef(null),
      [f = !1, v] = jt({ prop: r, defaultProp: o, onChange: a });
    return c.createElement(
      Dn,
      {
        scope: t,
        triggerRef: i,
        contentRef: d,
        contentId: ee(),
        titleId: ee(),
        descriptionId: ee(),
        open: f,
        onOpenChange: v,
        onOpenToggle: c.useCallback(() => v((l) => !l), [v]),
        modal: s,
      },
      n
    );
  },
  Rn = "DialogTrigger",
  Ve = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = P(Rn, n),
      a = F(t, o.triggerRef);
    return c.createElement(
      _.button,
      w({ type: "button", "aria-haspopup": "dialog", "aria-expanded": o.open, "aria-controls": o.contentId, "data-state": de(o.open) }, r, {
        ref: a,
        onClick: R(e.onClick, o.onOpenToggle),
      })
    );
  }),
  He = "DialogPortal",
  [_n, Ye] = je(He, { forceMount: void 0 }),
  ze = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      a = P(He, t);
    return c.createElement(
      _n,
      { scope: t, forceMount: n },
      c.Children.map(r, (s) => c.createElement(X, { present: n || a.open }, c.createElement(ln, { asChild: !0, container: o }, s)))
    );
  },
  ue = "DialogOverlay",
  Xe = c.forwardRef((e, t) => {
    const n = Ye(ue, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      a = P(ue, e.__scopeDialog);
    return a.modal ? c.createElement(X, { present: r || a.open }, c.createElement(Tn, w({}, o, { ref: t }))) : null;
  }),
  Tn = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = P(ue, n);
    return c.createElement(
      On,
      { as: le, allowPinchZoom: !0, shards: [o.contentRef] },
      c.createElement(_.div, w({ "data-state": de(o.open) }, r, { ref: t, style: { pointerEvents: "auto", ...r.style } }))
    );
  }),
  M = "DialogContent",
  Ge = c.forwardRef((e, t) => {
    const n = Ye(M, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      a = P(M, e.__scopeDialog);
    return c.createElement(
      X,
      { present: r || a.open },
      a.modal ? c.createElement(Nn, w({}, o, { ref: t })) : c.createElement(An, w({}, o, { ref: t }))
    );
  }),
  Nn = c.forwardRef((e, t) => {
    const n = P(M, e.__scopeDialog),
      r = c.useRef(null),
      o = F(t, n.contentRef, r);
    return (
      c.useEffect(() => {
        const a = r.current;
        if (a) return ft(a);
      }, []),
      c.createElement(
        Ze,
        w({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: R(e.onCloseAutoFocus, (a) => {
            var s;
            a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
          }),
          onPointerDownOutside: R(e.onPointerDownOutside, (a) => {
            const s = a.detail.originalEvent,
              i = s.button === 0 && s.ctrlKey === !0;
            (s.button === 2 || i) && a.preventDefault();
          }),
          onFocusOutside: R(e.onFocusOutside, (a) => a.preventDefault()),
        })
      )
    );
  }),
  An = c.forwardRef((e, t) => {
    const n = P(M, e.__scopeDialog),
      r = c.useRef(!1),
      o = c.useRef(!1);
    return c.createElement(
      Ze,
      w({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s;
          if (((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented)) {
            var i;
            r.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus(), a.preventDefault();
          }
          (r.current = !1), (o.current = !1);
        },
        onInteractOutside: (a) => {
          var s, i;
          (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a),
            a.defaultPrevented || ((r.current = !0), a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const d = a.target;
          ((i = n.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(d)) && a.preventDefault(),
            a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        },
      })
    );
  }),
  Ze = c.forwardRef((e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e,
      i = P(M, n),
      d = c.useRef(null),
      f = F(t, d);
    return (
      vn(),
      c.createElement(
        c.Fragment,
        null,
        c.createElement(
          nn,
          { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: a },
          c.createElement(
            Jt,
            w(
              {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": de(i.open),
              },
              s,
              { ref: f, onDismiss: () => i.onOpenChange(!1) }
            )
          )
        ),
        !1
      )
    );
  }),
  qe = "DialogTitle",
  Qe = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = P(qe, n);
    return c.createElement(_.h2, w({ id: o.titleId }, r, { ref: t }));
  }),
  In = "DialogDescription",
  Je = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = P(In, n);
    return c.createElement(_.p, w({ id: o.descriptionId }, r, { ref: t }));
  }),
  kn = "DialogClose",
  et = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = P(kn, n);
    return c.createElement(_.button, w({ type: "button" }, r, { ref: t, onClick: R(e.onClick, () => o.onOpenChange(!1)) }));
  });
function de(e) {
  return e ? "open" : "closed";
}
const Ln = "DialogTitleWarning",
  [Mn, Zn] = Mt(Ln, { contentName: M, titleName: qe, docsSlug: "dialog" }),
  Fn = Ke,
  Wn = Ve,
  Un = ze,
  Bn = Xe,
  jn = Ge,
  Kn = Qe,
  Vn = Je,
  Hn = et,
  qn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Close: Hn,
        Content: jn,
        Description: Vn,
        Dialog: Ke,
        DialogClose: et,
        DialogContent: Ge,
        DialogDescription: Je,
        DialogOverlay: Xe,
        DialogPortal: ze,
        DialogTitle: Qe,
        DialogTrigger: Ve,
        Overlay: Bn,
        Portal: Un,
        Root: Fn,
        Title: Kn,
        Trigger: Wn,
        WarningProvider: Mn,
        createDialogScope: xn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  Kn as $,
  qn as D,
  kt as R,
  _e as _,
  Vn as a,
  Hn as b,
  Fn as c,
  Un as d,
  Bn as e,
  jn as f,
  yt as g,
  O as h,
  Y as i,
  Gn as j,
  vt as k,
  Ct as l,
  ft as m,
  Wn as n,
  Ne as s,
  $t as u,
  H as z,
};
