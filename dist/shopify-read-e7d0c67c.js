import * as ge from "react";
import ve, { useMemo as Tr, useContext as Mi, useRef as $i, forwardRef as va, useState as ur, Children as Sa, useEffect as Re, memo as wa, createContext as Ia } from "react";
import ka from "react-dom";
var Iu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gn = { exports: {} }, nr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei;
function Aa() {
  if (ei)
    return nr;
  ei = 1;
  var e = ve, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, f) {
    var d, y = {}, m = null, h = null;
    f !== void 0 && (m = "" + f), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (d in l)
      n.call(l, d) && !o.hasOwnProperty(d) && (y[d] = l[d]);
    if (u && u.defaultProps)
      for (d in l = u.defaultProps, l)
        y[d] === void 0 && (y[d] = l[d]);
    return { $$typeof: t, type: u, key: m, ref: h, props: y, _owner: i.current };
  }
  return nr.Fragment = r, nr.jsx = s, nr.jsxs = s, nr;
}
var ir = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ti;
function Ea() {
  return ti || (ti = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ve, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = Symbol.iterator, E = "@@iterator";
    function F(a) {
      if (a === null || typeof a != "object")
        return null;
      var c = v && a[v] || a[E];
      return typeof c == "function" ? c : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(a) {
      {
        for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
          p[g - 1] = arguments[g];
        q("error", a, p);
      }
    }
    function q(a, c, p) {
      {
        var g = D.ReactDebugCurrentFrame, O = g.getStackAddendum();
        O !== "" && (c += "%s", p = p.concat([O]));
        var A = p.map(function(I) {
          return String(I);
        });
        A.unshift("Warning: " + c), Function.prototype.apply.call(console[a], console, A);
      }
    }
    var b = !1, P = !1, S = !1, B = !1, Ne = !1, Pe;
    Pe = Symbol.for("react.module.reference");
    function De(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === o || Ne || a === i || a === f || a === d || B || a === h || b || P || S || typeof a == "object" && a !== null && (a.$$typeof === m || a.$$typeof === y || a.$$typeof === s || a.$$typeof === u || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === Pe || a.getModuleId !== void 0));
    }
    function Ze(a, c, p) {
      var g = a.displayName;
      if (g)
        return g;
      var O = c.displayName || c.name || "";
      return O !== "" ? p + "(" + O + ")" : p;
    }
    function Y(a) {
      return a.displayName || "Context";
    }
    function V(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            var c = a;
            return Y(c) + ".Consumer";
          case s:
            var p = a;
            return Y(p._context) + ".Provider";
          case l:
            return Ze(a, a.render, "ForwardRef");
          case y:
            var g = a.displayName || null;
            return g !== null ? g : V(a.type) || "Memo";
          case m: {
            var O = a, A = O._payload, I = O._init;
            try {
              return V(I(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, j = 0, M, R, G, we, $, _e, Fe;
    function Ge() {
    }
    Ge.__reactDisabledLog = !0;
    function Le() {
      {
        if (j === 0) {
          M = console.log, R = console.info, G = console.warn, we = console.error, $ = console.group, _e = console.groupCollapsed, Fe = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        j++;
      }
    }
    function J() {
      {
        if (j--, j === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, a, {
              value: M
            }),
            info: N({}, a, {
              value: R
            }),
            warn: N({}, a, {
              value: G
            }),
            error: N({}, a, {
              value: we
            }),
            group: N({}, a, {
              value: $
            }),
            groupCollapsed: N({}, a, {
              value: _e
            }),
            groupEnd: N({}, a, {
              value: Fe
            })
          });
        }
        j < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = D.ReactCurrentDispatcher, ot;
    function je(a, c, p) {
      {
        if (ot === void 0)
          try {
            throw Error();
          } catch (O) {
            var g = O.stack.trim().match(/\n( *(at )?)/);
            ot = g && g[1] || "";
          }
        return `
` + ot + a;
      }
    }
    var yt = !1, et;
    {
      var Vr = typeof WeakMap == "function" ? WeakMap : Map;
      et = new Vr();
    }
    function Gt(a, c) {
      if (!a || yt)
        return "";
      {
        var p = et.get(a);
        if (p !== void 0)
          return p;
      }
      var g;
      yt = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = L.current, L.current = null, Le();
      try {
        if (c) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (te) {
              g = te;
            }
            Reflect.construct(a, [], I);
          } else {
            try {
              I.call();
            } catch (te) {
              g = te;
            }
            a.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            g = te;
          }
          a();
        }
      } catch (te) {
        if (te && g && typeof te.stack == "string") {
          for (var w = te.stack.split(`
`), U = g.stack.split(`
`), _ = w.length - 1, T = U.length - 1; _ >= 1 && T >= 0 && w[_] !== U[T]; )
            T--;
          for (; _ >= 1 && T >= 0; _--, T--)
            if (w[_] !== U[T]) {
              if (_ !== 1 || T !== 1)
                do
                  if (_--, T--, T < 0 || w[_] !== U[T]) {
                    var W = `
` + w[_].replace(" at new ", " at ");
                    return a.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", a.displayName)), typeof a == "function" && et.set(a, W), W;
                  }
                while (_ >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        yt = !1, L.current = A, J(), Error.prepareStackTrace = O;
      }
      var ke = a ? a.displayName || a.name : "", rr = ke ? je(ke) : "";
      return typeof a == "function" && et.set(a, rr), rr;
    }
    function Gr(a, c, p) {
      return Gt(a, !1);
    }
    function Lr(a) {
      var c = a.prototype;
      return !!(c && c.isReactComponent);
    }
    function tt(a, c, p) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Gt(a, Lr(a));
      if (typeof a == "string")
        return je(a);
      switch (a) {
        case f:
          return je("Suspense");
        case d:
          return je("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return Gr(a.render);
          case y:
            return tt(a.type, c, p);
          case m: {
            var g = a, O = g._payload, A = g._init;
            try {
              return tt(A(O), c, p);
            } catch {
            }
          }
        }
      return "";
    }
    var rt = Object.prototype.hasOwnProperty, Lt = {}, Wt = D.ReactDebugCurrentFrame;
    function nt(a) {
      if (a) {
        var c = a._owner, p = tt(a.type, a._source, c ? c.type : null);
        Wt.setExtraStackFrame(p);
      } else
        Wt.setExtraStackFrame(null);
    }
    function Wr(a, c, p, g, O) {
      {
        var A = Function.call.bind(rt);
        for (var I in a)
          if (A(a, I)) {
            var w = void 0;
            try {
              if (typeof a[I] != "function") {
                var U = Error((g || "React class") + ": " + p + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              w = a[I](c, I, g, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              w = _;
            }
            w && !(w instanceof Error) && (nt(O), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", p, I, typeof w), nt(null)), w instanceof Error && !(w.message in Lt) && (Lt[w.message] = !0, nt(O), k("Failed %s type: %s", p, w.message), nt(null));
          }
      }
    }
    var zr = Array.isArray;
    function mt(a) {
      return zr(a);
    }
    function Kr(a) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, p = c && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return p;
      }
    }
    function Yr(a) {
      try {
        return zt(a), !1;
      } catch {
        return !0;
      }
    }
    function zt(a) {
      return "" + a;
    }
    function Kt(a) {
      if (Yr(a))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kr(a)), zt(a);
    }
    var Me = D.ReactCurrentOwner, Jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Yt, Jt, ht;
    ht = {};
    function Hr(a) {
      if (rt.call(a, "ref")) {
        var c = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Qr(a) {
      if (rt.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Xr(a, c) {
      if (typeof a.ref == "string" && Me.current && c && Me.current.stateNode !== c) {
        var p = V(Me.current.type);
        ht[p] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Me.current.type), a.ref), ht[p] = !0);
      }
    }
    function Zr(a, c) {
      {
        var p = function() {
          Yt || (Yt = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function en(a, c) {
      {
        var p = function() {
          Jt || (Jt = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var tn = function(a, c, p, g, O, A, I) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: c,
        ref: p,
        props: I,
        // Record the component responsible for creating this element.
        _owner: A
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function rn(a, c, p, g, O) {
      {
        var A, I = {}, w = null, U = null;
        p !== void 0 && (Kt(p), w = "" + p), Qr(c) && (Kt(c.key), w = "" + c.key), Hr(c) && (U = c.ref, Xr(c, O));
        for (A in c)
          rt.call(c, A) && !Jr.hasOwnProperty(A) && (I[A] = c[A]);
        if (a && a.defaultProps) {
          var _ = a.defaultProps;
          for (A in _)
            I[A] === void 0 && (I[A] = _[A]);
        }
        if (w || U) {
          var T = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          w && Zr(I, T), U && en(I, T);
        }
        return tn(a, w, U, O, g, Me.current, I);
      }
    }
    var bt = D.ReactCurrentOwner, Ht = D.ReactDebugCurrentFrame;
    function Ie(a) {
      if (a) {
        var c = a._owner, p = tt(a.type, a._source, c ? c.type : null);
        Ht.setExtraStackFrame(p);
      } else
        Ht.setExtraStackFrame(null);
    }
    var gt;
    gt = !1;
    function vt(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Qt() {
      {
        if (bt.current) {
          var a = V(bt.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function nn(a) {
      {
        if (a !== void 0) {
          var c = a.fileName.replace(/^.*[\\\/]/, ""), p = a.lineNumber;
          return `

Check your code at ` + c + ":" + p + ".";
        }
        return "";
      }
    }
    var Xt = {};
    function an(a) {
      {
        var c = Qt();
        if (!c) {
          var p = typeof a == "string" ? a : a.displayName || a.name;
          p && (c = `

Check the top-level render call using <` + p + ">.");
        }
        return c;
      }
    }
    function Zt(a, c) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var p = an(c);
        if (Xt[p])
          return;
        Xt[p] = !0;
        var g = "";
        a && a._owner && a._owner !== bt.current && (g = " It was passed a child from " + V(a._owner.type) + "."), Ie(a), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, g), Ie(null);
      }
    }
    function er(a, c) {
      {
        if (typeof a != "object")
          return;
        if (mt(a))
          for (var p = 0; p < a.length; p++) {
            var g = a[p];
            vt(g) && Zt(g, c);
          }
        else if (vt(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var O = F(a);
          if (typeof O == "function" && O !== a.entries)
            for (var A = O.call(a), I; !(I = A.next()).done; )
              vt(I.value) && Zt(I.value, c);
        }
      }
    }
    function on(a) {
      {
        var c = a.type;
        if (c == null || typeof c == "string")
          return;
        var p;
        if (typeof c == "function")
          p = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === y))
          p = c.propTypes;
        else
          return;
        if (p) {
          var g = V(c);
          Wr(p, a.props, "prop", g, a);
        } else if (c.PropTypes !== void 0 && !gt) {
          gt = !0;
          var O = V(c);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sn(a) {
      {
        for (var c = Object.keys(a.props), p = 0; p < c.length; p++) {
          var g = c[p];
          if (g !== "children" && g !== "key") {
            Ie(a), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Ie(null);
            break;
          }
        }
        a.ref !== null && (Ie(a), k("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    function tr(a, c, p, g, O, A) {
      {
        var I = De(a);
        if (!I) {
          var w = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = nn(O);
          U ? w += U : w += Qt();
          var _;
          a === null ? _ = "null" : mt(a) ? _ = "array" : a !== void 0 && a.$$typeof === t ? (_ = "<" + (V(a.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof a, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, w);
        }
        var T = rn(a, c, p, O, A);
        if (T == null)
          return T;
        if (I) {
          var W = c.children;
          if (W !== void 0)
            if (g)
              if (mt(W)) {
                for (var ke = 0; ke < W.length; ke++)
                  er(W[ke], a);
                Object.freeze && Object.freeze(W);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              er(W, a);
        }
        return a === n ? sn(T) : on(T), T;
      }
    }
    function un(a, c, p) {
      return tr(a, c, p, !0);
    }
    function ln(a, c, p) {
      return tr(a, c, p, !1);
    }
    var cn = ln, dn = un;
    ir.Fragment = n, ir.jsx = cn, ir.jsxs = dn;
  }()), ir;
}
process.env.NODE_ENV === "production" ? gn.exports = Aa() : gn.exports = Ea();
var Cr = gn.exports;
const Na = (e) => e && "connection" in e && e.connection && "endpoint" in e.connection;
var jn = () => {
}, Se = jn;
function Ve(e) {
  return {
    tag: 0,
    0: e
  };
}
function gr(e) {
  return {
    tag: 1,
    0: e
  };
}
var Pa = (e) => e;
function Z(e) {
  return (t) => (r) => {
    var n = Se;
    t((i) => {
      i === 0 ? r(0) : i.tag === 0 ? (n = i[0], r(i)) : e(i[0]) ? r(i) : n(0);
    });
  };
}
function Ft(e) {
  return (t) => (r) => t((n) => {
    n === 0 || n.tag === 0 ? r(n) : r(gr(e(n[0])));
  });
}
function yr(e) {
  return (t) => (r) => {
    var n = [], i = Se, o = !1, s = !1;
    t((u) => {
      s || (u === 0 ? (s = !0, n.length || r(0)) : u.tag === 0 ? i = u[0] : (o = !1, function(f) {
        var d = Se;
        f((y) => {
          if (y === 0) {
            if (n.length) {
              var m = n.indexOf(d);
              m > -1 && (n = n.slice()).splice(m, 1), n.length || (s ? r(0) : o || (o = !0, i(0)));
            }
          } else
            y.tag === 0 ? (n.push(d = y[0]), d(0)) : n.length && (r(y), d(0));
        });
      }(e(u[0])), o || (o = !0, i(0))));
    }), r(Ve((u) => {
      if (u === 1) {
        s || (s = !0, i(1));
        for (var l = 0, f = n, d = n.length; l < d; l++)
          f[l](1);
        n.length = 0;
      } else {
        !s && !o ? (o = !0, i(0)) : o = !1;
        for (var y = 0, m = n, h = n.length; y < h; y++)
          m[y](0);
      }
    }));
  };
}
function _a(e) {
  return yr(Pa)(e);
}
function jt(e) {
  return _a(Ra(e));
}
function Mn(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0), e();
        else if (i.tag === 0) {
          var o = i[0];
          r(Ve((s) => {
            s === 1 ? (n = !0, o(1), e()) : o(s);
          }));
        } else
          r(i);
    });
  };
}
function Pt(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0);
        else if (i.tag === 0) {
          var o = i[0];
          r(Ve((s) => {
            s === 1 && (n = !0), o(s);
          }));
        } else
          e(i[0]), r(i);
    });
  };
}
function ri(e) {
  return (t) => (r) => t((n) => {
    n === 0 ? r(0) : n.tag === 0 ? (r(n), e()) : r(n);
  });
}
function mr(e) {
  var t = [], r = Se, n = !1;
  return (i) => {
    t.push(i), t.length === 1 && e((o) => {
      if (o === 0) {
        for (var s = 0, u = t, l = t.length; s < l; s++)
          u[s](0);
        t.length = 0;
      } else if (o.tag === 0)
        r = o[0];
      else {
        n = !1;
        for (var f = 0, d = t, y = t.length; f < y; f++)
          d[f](o);
      }
    }), i(Ve((o) => {
      if (o === 1) {
        var s = t.indexOf(i);
        s > -1 && (t = t.slice()).splice(s, 1), t.length || r(1);
      } else
        n || (n = !0, r(0));
    }));
  };
}
function ni(e) {
  return (t) => (r) => {
    var n = Se, i = Se, o = !1, s = !1, u = !1, l = !1;
    t((f) => {
      l || (f === 0 ? (l = !0, u || r(0)) : f.tag === 0 ? n = f[0] : (u && (i(1), i = Se), o ? o = !1 : (o = !0, n(0)), function(y) {
        u = !0, y((m) => {
          u && (m === 0 ? (u = !1, l ? r(0) : o || (o = !0, n(0))) : m.tag === 0 ? (s = !1, (i = m[0])(0)) : (r(m), s ? s = !1 : i(0)));
        });
      }(e(f[0]))));
    }), r(Ve((f) => {
      f === 1 ? (l || (l = !0, n(1)), u && (u = !1, i(1))) : (!l && !o && (o = !0, n(0)), u && !s && (s = !0, i(0)));
    }));
  };
}
function vr(e) {
  return (t) => (r) => {
    var n = Se, i = !1, o = 0;
    t((s) => {
      i || (s === 0 ? (i = !0, r(0)) : s.tag === 0 ? e <= 0 ? (i = !0, r(0), s[0](1)) : n = s[0] : o++ < e ? (r(s), !i && o >= e && (i = !0, r(0), n(1))) : r(s));
    }), r(Ve((s) => {
      s === 1 && !i ? (i = !0, n(1)) : s === 0 && !i && o < e && n(0);
    }));
  };
}
function $n(e) {
  return (t) => (r) => {
    var n = Se, i = Se, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, i(1), r(0)) : s.tag === 0 ? (n = s[0], e((u) => {
        u === 0 || (u.tag === 0 ? (i = u[0])(0) : (o = !0, i(1), n(1), r(0)));
      })) : r(s));
    }), r(Ve((s) => {
      s === 1 && !o ? (o = !0, n(1), i(1)) : o || n(0);
    }));
  };
}
function qi(e, t) {
  return (r) => (n) => {
    var i = Se, o = !1;
    r((s) => {
      o || (s === 0 ? (o = !0, n(0)) : s.tag === 0 ? (i = s[0], n(s)) : e(s[0]) ? n(s) : (o = !0, t && n(s), n(0), i(1)));
    });
  };
}
function Ta(e) {
  return (t) => e()(t);
}
function Bi(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), n = !1, i = !1, o = !1, s;
    t(Ve(async (u) => {
      if (u === 1)
        n = !0, r.return && r.return();
      else if (i)
        o = !0;
      else {
        for (o = i = !0; o && !n; )
          if ((s = await r.next()).done)
            n = !0, r.return && await r.return(), t(0);
          else
            try {
              o = !1, t(gr(s.value));
            } catch (l) {
              if (r.throw)
                (n = !!(await r.throw(l)).done) && t(0);
              else
                throw l;
            }
        i = !1;
      }
    }));
  };
}
function Ca(e) {
  return e[Symbol.asyncIterator] ? Bi(e) : (t) => {
    var r = e[Symbol.iterator](), n = !1, i = !1, o = !1, s;
    t(Ve((u) => {
      if (u === 1)
        n = !0, r.return && r.return();
      else if (i)
        o = !0;
      else {
        for (o = i = !0; o && !n; )
          if ((s = r.next()).done)
            n = !0, r.return && r.return(), t(0);
          else
            try {
              o = !1, t(gr(s.value));
            } catch (l) {
              if (r.throw)
                (n = !!r.throw(l).done) && t(0);
              else
                throw l;
            }
        i = !1;
      }
    }));
  };
}
var Ra = Ca;
function lr(e) {
  return (t) => {
    var r = !1;
    t(Ve((n) => {
      n === 1 ? r = !0 : r || (r = !0, t(gr(e)), t(0));
    }));
  };
}
function qn(e) {
  return (t) => {
    var r = !1, n = e({
      next(i) {
        r || t(gr(i));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(Ve((i) => {
      i === 1 && !r && (r = !0, n());
    }));
  };
}
function ii() {
  var e, t;
  return {
    source: mr(qn((r) => (e = r.next, t = r.complete, jn))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function ai(e) {
  return qn((t) => (e.then((r) => {
    Promise.resolve(r).then(() => {
      t.next(r), t.complete();
    });
  }), jn));
}
function _t(e) {
  return (t) => {
    var r = Se, n = !1;
    return t((i) => {
      i === 0 ? n = !0 : i.tag === 0 ? (r = i[0])(0) : n || (e(i[0]), r(0));
    }), {
      unsubscribe() {
        n || (n = !0, r(1));
      }
    };
  };
}
function xa(e) {
  _t((t) => {
  })(e);
}
var fn = {
  done: !0
}, Da = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], r = !1, n = Se, i;
    return e((o) => {
      r || (o === 0 ? (i && (i = i(fn)), r = !0) : o.tag === 0 ? (n = o[0])(0) : i ? i = i({
        value: o[0],
        done: !1
      }) : t.push(o[0]));
    }), {
      async next() {
        return r && !t.length ? fn : (!r && t.length <= 1 && n(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((o) => i = o));
      },
      async return() {
        return r || (i = n(1)), r = !0, fn;
      }
    };
  }
});
function Mr(e) {
  return new Promise((t) => {
    var r = Se, n;
    e((i) => {
      i === 0 ? Promise.resolve(n).then(t) : i.tag === 0 ? (r = i[0])(0) : (n = i[0], r(0));
    });
  });
}
var Bn = (...e) => {
  for (var t = e[0], r = 1, n = e.length; r < n; r++)
    t = e[r](t);
  return t;
}, Dt = {
  NAME: "Name",
  DOCUMENT: "Document",
  OPERATION_DEFINITION: "OperationDefinition",
  VARIABLE_DEFINITION: "VariableDefinition",
  SELECTION_SET: "SelectionSet",
  FIELD: "Field",
  ARGUMENT: "Argument",
  FRAGMENT_SPREAD: "FragmentSpread",
  INLINE_FRAGMENT: "InlineFragment",
  FRAGMENT_DEFINITION: "FragmentDefinition",
  VARIABLE: "Variable",
  INT: "IntValue",
  FLOAT: "FloatValue",
  STRING: "StringValue",
  BOOLEAN: "BooleanValue",
  NULL: "NullValue",
  ENUM: "EnumValue",
  LIST: "ListValue",
  OBJECT: "ObjectValue",
  OBJECT_FIELD: "ObjectField",
  DIRECTIVE: "Directive",
  NAMED_TYPE: "NamedType",
  LIST_TYPE: "ListType",
  NON_NULL_TYPE: "NonNullType"
};
class hr extends Error {
  constructor(t, r, n, i, o, s, u) {
    super(t), this.name = "GraphQLError", this.message = t, o && (this.path = o), r && (this.nodes = Array.isArray(r) ? r : [r]), n && (this.source = n), i && (this.positions = i), s && (this.originalError = s);
    var l = u;
    if (!l && s) {
      var f = s.extensions;
      f && typeof f == "object" && (l = f);
    }
    this.extensions = l || {};
  }
  toJSON() {
    return {
      ...this,
      message: this.message
    };
  }
  toString() {
    return this.message;
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
}
var z, C;
function ee(e) {
  return new hr(`Syntax Error: Unexpected token at ${C} in ${e}`);
}
function Ee(e) {
  if (e.lastIndex = C, e.test(z))
    return z.slice(C, C = e.lastIndex);
}
var Ir = / +(?=[^\s])/y;
function Fa(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, o = t.length - 1, s = 0; s < t.length; s++)
    Ir.lastIndex = 0, Ir.test(t[s]) && (s && (!n || Ir.lastIndex < n) && (n = Ir.lastIndex), i = i || s, o = s);
  for (var u = i; u <= o; u++)
    u !== i && (r += `
`), r += t[u].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function x() {
  for (var e = 0 | z.charCodeAt(C++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | z.charCodeAt(C++))
    if (e === 35)
      for (; (e = z.charCodeAt(C++)) !== 10 && e !== 13; )
        ;
  C--;
}
var Ui = /[_A-Za-z]\w*/y;
function Xe() {
  var e;
  if (e = Ee(Ui))
    return {
      kind: "Name",
      value: e
    };
}
var ja = /(?:null|true|false)/y, Vi = /\$[_A-Za-z]\w*/y, Ma = /-?\d+/y, $a = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, qa = /\\/g, Ba = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Ua = /"(?:"|[^\r\n]*?[^\\]")/y;
function Rr(e) {
  var t, r;
  if (r = Ee(ja))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = Ee(Vi)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = Ee(Ma)) {
    var n = r;
    (r = Ee($a)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = Ee(Ui))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = Ee(Ba))
    t = {
      kind: "StringValue",
      value: Fa(r.slice(3, -3)),
      block: !0
    };
  else if (r = Ee(Ua))
    t = {
      kind: "StringValue",
      value: qa.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(o) {
    var s;
    if (z.charCodeAt(C) === 91) {
      C++, x();
      for (var u = []; s = Rr(o); )
        u.push(s);
      if (z.charCodeAt(C++) !== 93)
        throw ee("ListValue");
      return x(), {
        kind: "ListValue",
        values: u
      };
    }
  }(e) || function(o) {
    if (z.charCodeAt(C) === 123) {
      C++, x();
      for (var s = [], u; u = Xe(); ) {
        if (x(), z.charCodeAt(C++) !== 58)
          throw ee("ObjectField");
        x();
        var l = Rr(o);
        if (!l)
          throw ee("ObjectField");
        s.push({
          kind: "ObjectField",
          name: u,
          value: l
        });
      }
      if (z.charCodeAt(C++) !== 125)
        throw ee("ObjectValue");
      return x(), {
        kind: "ObjectValue",
        fields: s
      };
    }
  }(e))
    return t;
  return x(), t;
}
function Gi(e) {
  var t = [];
  if (x(), z.charCodeAt(C) === 40) {
    C++, x();
    for (var r; r = Xe(); ) {
      if (x(), z.charCodeAt(C++) !== 58)
        throw ee("Argument");
      x();
      var n = Rr(e);
      if (!n)
        throw ee("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || z.charCodeAt(C++) !== 41)
      throw ee("Argument");
    x();
  }
  return t;
}
function Mt(e) {
  var t = [];
  for (x(); z.charCodeAt(C) === 64; ) {
    C++;
    var r = Xe();
    if (!r)
      throw ee("Directive");
    x(), t.push({
      kind: "Directive",
      name: r,
      arguments: Gi(e)
    });
  }
  return t;
}
function Va() {
  var e = Xe();
  if (e) {
    x();
    var t;
    if (z.charCodeAt(C) === 58) {
      if (C++, x(), t = e, !(e = Xe()))
        throw ee("Field");
      x();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: Gi(!1),
      directives: Mt(!1),
      selectionSet: $r()
    };
  }
}
function Li() {
  var e;
  if (x(), z.charCodeAt(C) === 91) {
    C++, x();
    var t = Li();
    if (!t || z.charCodeAt(C++) !== 93)
      throw ee("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = Xe())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw ee("NamedType");
  return x(), z.charCodeAt(C) === 33 ? (C++, x(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Ga = /on/y;
function Wi() {
  if (Ee(Ga)) {
    x();
    var e = Xe();
    if (!e)
      throw ee("NamedType");
    return x(), {
      kind: "NamedType",
      name: e
    };
  }
}
var La = /\.\.\./y;
function Wa() {
  if (Ee(La)) {
    x();
    var e = C, t;
    if ((t = Xe()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Mt(!1)
      };
    C = e;
    var r = Wi(), n = Mt(!1), i = $r();
    if (!i)
      throw ee("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: i
    };
  }
}
function $r() {
  var e;
  if (x(), z.charCodeAt(C) === 123) {
    C++, x();
    for (var t = []; e = Wa() || Va(); )
      t.push(e);
    if (!t.length || z.charCodeAt(C++) !== 125)
      throw ee("SelectionSet");
    return x(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var za = /fragment/y;
function Ka() {
  if (Ee(za)) {
    x();
    var e = Xe();
    if (!e)
      throw ee("FragmentDefinition");
    x();
    var t = Wi();
    if (!t)
      throw ee("FragmentDefinition");
    var r = Mt(!1), n = $r();
    if (!n)
      throw ee("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var Ya = /(?:query|mutation|subscription)/y;
function Ja() {
  var e, t, r = [], n = [];
  (e = Ee(Ya)) && (x(), t = Xe(), r = function() {
    var s, u = [];
    if (x(), z.charCodeAt(C) === 40) {
      for (C++, x(); s = Ee(Vi); ) {
        if (x(), z.charCodeAt(C++) !== 58)
          throw ee("VariableDefinition");
        var l = Li(), f = void 0;
        if (z.charCodeAt(C) === 61 && (C++, x(), !(f = Rr(!0))))
          throw ee("VariableDefinition");
        x(), u.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: s.slice(1)
            }
          },
          type: l,
          defaultValue: f,
          directives: Mt(!0)
        });
      }
      if (z.charCodeAt(C++) !== 41)
        throw ee("VariableDefinition");
      x();
    }
    return u;
  }(), n = Mt(!1));
  var i = $r();
  if (i)
    return {
      kind: "OperationDefinition",
      operation: e || "query",
      name: t,
      variableDefinitions: r,
      directives: n,
      selectionSet: i
    };
}
function Ha(e, t) {
  return z = typeof e.body == "string" ? e.body : e, C = 0, function() {
    var n;
    x();
    for (var i = []; n = Ka() || Ja(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function Qa(e) {
  return JSON.stringify(e);
}
function Xa(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var Te = (e) => !(!e || !e.length), de = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !Te(e.variableDefinitions) && !Te(e.directives))
      return de.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), Te(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(de.VariableDefinition).join(", ") + ")"), Te(e.directives) && (t += " " + e.directives.map(de.Directive).join(" ")), t + " " + de.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = de.Variable(e.variable) + ": " + Ce(e.type);
    return e.defaultValue && (t += " = " + Ce(e.defaultValue)), Te(e.directives) && (t += " " + e.directives.map(de.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (Te(e.arguments)) {
      var r = e.arguments.map(de.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return Te(e.directives) && (t += " " + e.directives.map(de.Directive).join(" ")), e.selectionSet ? t + " " + de.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Xa(e.value) : Qa(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(Ce).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(de.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + Ce(e.value),
  Document: (e) => Te(e.definitions) ? e.definitions.map(Ce).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(Ce).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + Ce(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return Te(e.directives) && (t += " " + e.directives.map(de.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), Te(e.directives) && (t += " " + e.directives.map(de.Directive).join(" ")), t + " " + Ce(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, Te(e.directives) && (t += " " + e.directives.map(de.Directive).join(" ")), t + " " + Ce(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return Te(e.arguments) && (t += "(" + e.arguments.map(de.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + Ce(e.type) + "]",
  NonNullType: (e) => Ce(e.type) + "!"
};
function Ce(e) {
  return de[e.kind] ? de[e.kind](e) : "";
}
var Za = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new hr(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new hr(e);
class Sr extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(Za), n = ((i, o) => {
      var s = "";
      if (i)
        return `[Network] ${i.message}`;
      if (o)
        for (var u of o)
          s && (s += `
`), s += `[GraphQL] ${u.message}`;
      return s;
    })(t.networkError, r);
    super(n), this.name = "CombinedError", this.message = n, this.graphQLErrors = r, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var vn = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, Nt = /* @__PURE__ */ new Set(), oi = /* @__PURE__ */ new WeakMap(), Rt = (e) => {
  if (e === null || Nt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Rt(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += Rt(r) || "null";
    return t += "]";
  } else if (Dr !== $t && e instanceof Dr || Fr !== $t && e instanceof Fr)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = oi.get(e) || Math.random().toString(36).slice(2);
    return oi.set(e, i), Rt({
      __key: i
    });
  }
  Nt.add(e);
  var o = "{";
  for (var s of n) {
    var u = Rt(e[s]);
    u && (o.length > 1 && (o += ","), o += Rt(s) + ":" + u);
  }
  return Nt.delete(e), o += "}";
}, Sn = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || Nt.has(r)))
    if (Array.isArray(r))
      for (var n = 0, i = r.length; n < i; n++)
        Sn(e, `${t}.${n}`, r[n]);
    else if (r instanceof Dr || r instanceof Fr)
      e.set(t, r);
    else {
      Nt.add(r);
      for (var o of Object.keys(r))
        Sn(e, `${t}.${o}`, r[o]);
    }
}, xr = (e) => (Nt.clear(), Rt(e));
class $t {
}
var Dr = typeof File < "u" ? File : $t, Fr = typeof Blob < "u" ? Blob : $t, eo = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, to = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, ro = (e, t) => t % 2 == 0 ? e.replace(to, `
`) : e, si = (e) => e.split(eo).map(ro).join("").trim(), ui = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), Un = (e) => {
  var t;
  return typeof e == "string" ? t = si(e) : e.loc && Nr.get(e.__key) === e ? t = e.loc.source.body : (t = ui.get(e) || si(Ce(e)), ui.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
    start: 0,
    end: t.length,
    source: {
      body: t,
      name: "gql",
      locationOffset: {
        line: 1,
        column: 1
      }
    }
  }), t;
}, li = (e) => {
  var t = vn(Un(e));
  if (e.definitions) {
    var r = Ki(e);
    r && (t = vn(`
# ${r}`, t));
  }
  return t;
}, zi = (e) => {
  var t, r;
  return typeof e == "string" ? (t = li(e), r = Nr.get(t) || Ha(e)) : (t = e.__key || li(e), r = Nr.get(t) || e), r.loc || Un(r), r.__key = t, Nr.set(t, r), r;
}, cr = (e, t, r) => {
  var n = t || {}, i = zi(e), o = xr(n), s = i.__key;
  return o !== "{}" && (s = vn(o, s)), {
    key: s,
    query: i,
    variables: n,
    extensions: r
  };
}, Ki = (e) => {
  for (var t of e.definitions)
    if (t.kind === Dt.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, no = (e) => {
  for (var t of e.definitions)
    if (t.kind === Dt.OPERATION_DEFINITION)
      return t.operation;
}, wn = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var n = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new Sr({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? n : t.hasNext,
    stale: !1
  };
}, In = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = In(e[r], t[r]);
    return e;
  }
  return t;
}, kn = (e, t, r) => {
  var n = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!t.extensions, o = {
    ...e.extensions,
    ...t.extensions
  }, s = t.incremental;
  "path" in t && (s = [t]);
  var u = {
    data: e.data
  };
  if (s)
    for (var l of s) {
      Array.isArray(l.errors) && n.push(...l.errors), l.extensions && (Object.assign(o, l.extensions), i = !0);
      for (var f = "data", d = u, y = 0, m = l.path.length; y < m; f = l.path[y++])
        d = d[f] = Array.isArray(d[f]) ? [...d[f]] : {
          ...d[f]
        };
      if (l.items)
        for (var h = +f >= 0 ? f : 0, v = 0, E = l.items.length; v < E; v++)
          d[h + v] = In(d[h + v], l.items[v]);
      else
        l.data !== void 0 && (d[f] = In(d[f], l.data));
    }
  else
    u.data = t.data || e.data, n = t.errors || n;
  return {
    operation: e.operation,
    data: u.data,
    error: n.length ? new Sr({
      graphQLErrors: n,
      response: r
    }) : void 0,
    extensions: i ? o : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, Yi = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new Sr({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function Ji(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Un(e.query),
    operationName: Ki(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var io = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var n = new URL(e.context.url);
  for (var i in t) {
    var o = t[i];
    o && n.searchParams.set(i, typeof o == "object" ? xr(o) : o);
  }
  var s = n.toString();
  return s.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s;
}, ao = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = xr(t), n = ((u) => {
      var l = /* @__PURE__ */ new Map();
      return (Dr !== $t || Fr !== $t) && (Nt.clear(), Sn(l, "variables", u)), l;
    })(t.variables);
    if (n.size) {
      var i = new FormData();
      i.append("operations", r), i.append("map", xr({
        ...[...n.keys()].map((u) => [u])
      }));
      var o = 0;
      for (var s of n.values())
        i.append("" + o++, s);
      return i;
    }
    return r;
  }
}, oo = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (n.headers)
    for (var i in n.headers)
      r[i.toLowerCase()] = n.headers[i];
  var o = ao(e, t);
  return typeof o == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...n,
    method: o ? "POST" : "GET",
    body: o,
    headers: r
  };
}, so = typeof TextDecoder < "u" ? new TextDecoder() : null, uo = /boundary="?([^=";]+)"?/i, lo = /data: ?([^\n]+)/, ci = (e) => e.constructor.name === "Buffer" ? e.toString() : so.decode(e);
async function* di(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield ci(t);
  else {
    var r = e.body.getReader(), n;
    try {
      for (; !(n = await r.read()).done; )
        yield ci(n.value);
    } finally {
      r.cancel();
    }
  }
}
async function* fi(e, t) {
  var r = "", n;
  for await (var i of e)
    for (r += i; (n = r.indexOf(t)) > -1; )
      yield r.slice(0, n), r = r.slice(n + t.length);
}
async function* co(e, t, r) {
  var n = !0, i = null, o;
  try {
    yield await Promise.resolve();
    var s = (o = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", u;
    if (/multipart\/mixed/i.test(s))
      u = async function* (d, y) {
        var m = d.match(uo), h = "--" + (m ? m[1] : "-"), v = !0, E;
        for await (var F of fi(di(y), `\r
` + h)) {
          if (v) {
            v = !1;
            var D = F.indexOf(h);
            if (D > -1)
              F = F.slice(D + h.length);
            else
              continue;
          }
          try {
            yield E = JSON.parse(F.slice(F.indexOf(`\r
\r
`) + 4));
          } catch (k) {
            if (!E)
              throw k;
          }
          if (E && E.hasNext === !1)
            break;
        }
        E && E.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(s, o);
    else if (/text\/event-stream/i.test(s))
      u = async function* (d) {
        var y;
        for await (var m of fi(di(d), `

`)) {
          var h = m.match(lo);
          if (h) {
            var v = h[1];
            try {
              yield y = JSON.parse(v);
            } catch (E) {
              if (!y)
                throw E;
            }
            if (y && y.hasNext === !1)
              break;
          }
        }
        y && y.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o);
    else if (!/text\//i.test(s))
      u = async function* (d) {
        yield JSON.parse(await d.text());
      }(o);
    else
      throw new Error(await o.text());
    for await (var l of u)
      i = i ? kn(i, l, o) : wn(e, l, o), n = !1, yield i, n = !0;
    i || (yield i = wn(e, {}, o));
  } catch (f) {
    if (!n)
      throw f;
    yield Yi(e, o && (o.status < 200 || o.status >= 300) && o.statusText ? new Error(o.statusText) : f, o);
  }
}
function fo(e, t, r) {
  var n;
  return typeof AbortController < "u" && (r.signal = (n = new AbortController()).signal), Mn(() => {
    n && n.abort();
  })(Z((i) => !!i)(Bi(co(e, t, r))));
}
var On = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      On(r, t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : On(e[n], t);
  return t;
}, An = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var n of e.definitions) {
      var i = An(n);
      t = t || i !== n, r.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var o = [], s = e.kind === Dt.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var u of e.selectionSet.selections || []) {
        s = s || u.kind === Dt.FIELD && u.name.value === "__typename" && !u.alias;
        var l = An(u);
        t = t || l !== u, o.push(l);
      }
      if (s || (t = !0, o.push({
        kind: Dt.FIELD,
        name: {
          kind: Dt.NAME,
          value: "__typename"
        }
      })), t)
        return {
          ...e,
          selectionSet: {
            ...e.selectionSet,
            selections: o
          }
        };
    }
  }
  return e;
}, pi = /* @__PURE__ */ new Map(), po = (e) => {
  var t = zi(e), r = pi.get(t.__key);
  return r || (pi.set(t.__key, r = An(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, En = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => En(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var n in e)
      n === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[n] = En(e[n]);
    return r;
  } else
    return e;
};
function yi(e) {
  var t = (r) => e(r);
  return t.toPromise = () => Mr(vr(1)(Z((r) => !r.stale && !r.hasNext)(t))), t.then = (r, n) => t.toPromise().then(r, n), t.subscribe = (r) => _t(r)(t), t;
}
function qt(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var mi = (e, t) => qt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), yo = () => {
}, pn = ({ kind: e }) => e !== "mutation" && e !== "query", mo = ({ forward: e, client: t, dispatchDebug: r }) => {
  var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = (u) => {
    var l = qt(u.kind, u);
    return l.query = po(u.query), l;
  }, s = (u) => u.kind === "query" && u.context.requestPolicy !== "network-only" && (u.context.requestPolicy === "cache-only" || n.has(u.key));
  return (u) => {
    var l = Ft((d) => {
      var y = n.get(d.key);
      process.env.NODE_ENV !== "production" && r({
        operation: d,
        ...y ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var m = y;
      return process.env.NODE_ENV !== "production" && (m = {
        ...m,
        operation: process.env.NODE_ENV !== "production" ? mi(d, {
          cacheOutcome: y ? "hit" : "miss"
        }) : d
      }), d.context.requestPolicy === "cache-and-network" && (m.stale = !0, hi(t, d)), m;
    })(Z((d) => !pn(d) && s(d))(u)), f = Pt((d) => {
      var { operation: y } = d;
      if (y) {
        var m = y.context.additionalTypenames || [];
        if (d.operation.kind !== "subscription" && (m = ((S) => [...On(S, /* @__PURE__ */ new Set())])(d.data).concat(m)), d.operation.kind === "mutation" || d.operation.kind === "subscription") {
          var h = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && r({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${m}`,
            operation: y,
            data: {
              typenames: m,
              response: d
            },
            source: "cacheExchange"
          });
          for (var v = 0; v < m.length; v++) {
            var E = m[v], F = i.get(E);
            F || i.set(E, F = /* @__PURE__ */ new Set());
            for (var D of F.values())
              h.add(D);
            F.clear();
          }
          for (var k of h.values())
            n.has(k) && (y = n.get(k).operation, n.delete(k), hi(t, y));
        } else if (y.kind === "query" && d.data) {
          n.set(y.key, d);
          for (var q = 0; q < m.length; q++) {
            var b = m[q], P = i.get(b);
            P || i.set(b, P = /* @__PURE__ */ new Set()), P.add(y.key);
          }
        }
      }
    })(e(Z((d) => d.kind !== "query" || d.context.requestPolicy !== "cache-only")(Ft((d) => process.env.NODE_ENV !== "production" ? mi(d, {
      cacheOutcome: "miss"
    }) : d)(jt([Ft(o)(Z((d) => !pn(d) && !s(d))(u)), Z((d) => pn(d))(u)])))));
    return jt([l, f]);
  };
}, hi = (e, t) => e.reexecuteOperation(qt(t.kind, t, {
  requestPolicy: "network-only"
})), yn = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: n, forward: i }) => {
  var o = r || ((s) => s.kind === "subscription" || !!t && (s.kind === "query" || s.kind === "mutation"));
  return (s) => {
    var u = yr((f) => {
      var { key: d } = f, y = Z((m) => m.kind === "teardown" && m.key === d)(s);
      return $n(y)(((m) => {
        var h = e(Ji(m), m);
        return qn(({ next: v, complete: E }) => {
          var F = !1, D, k;
          return Promise.resolve().then(() => {
            F || (D = h.subscribe({
              next(q) {
                v(k = k ? kn(k, q) : wn(m, q));
              },
              error(q) {
                v(Yi(m, q));
              },
              complete() {
                F || (F = !0, m.kind === "subscription" && n.reexecuteOperation(qt("teardown", m, m.context)), k && k.hasNext && v(kn(k, {
                  hasNext: !1
                })), E());
              }
            }));
          }), () => {
            F = !0, D && D.unsubscribe();
          };
        });
      })(f));
    })(Z((f) => f.kind !== "teardown" && o(f))(s)), l = i(Z((f) => f.kind === "teardown" || !o(f))(s));
    return jt([u, l]);
  };
}, ho = ({ forward: e, dispatchDebug: t }) => (r) => {
  var n = yr((o) => {
    var s = Ji(o), u = io(o, s), l = oo(o, s);
    process.env.NODE_ENV !== "production" && t({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: o,
      data: {
        url: u,
        fetchOptions: l
      },
      source: "fetchExchange"
    });
    var f = $n(Z((d) => d.kind === "teardown" && d.key === o.key)(r))(fo(o, u, l));
    return process.env.NODE_ENV !== "production" ? Pt((d) => {
      var y = d.data ? void 0 : d.error;
      process.env.NODE_ENV !== "production" && t({
        type: y ? "fetchError" : "fetchSuccess",
        message: `A ${y ? "failed" : "successful"} fetch response has been returned.`,
        operation: o,
        data: {
          url: u,
          fetchOptions: l,
          value: y || d
        },
        source: "fetchExchange"
      });
    })(f) : f;
  })(Z((o) => o.kind !== "teardown" && (o.kind !== "subscription" || !!o.context.fetchSubscriptions))(r)), i = e(Z((o) => o.kind === "teardown" || o.kind === "subscription" && !o.context.fetchSubscriptions)(r));
  return jt([n, i]);
}, bo = (e) => ({ client: t, forward: r, dispatchDebug: n }) => e.reduceRight((i, o) => {
  var s = !1;
  return o({
    client: t,
    forward(u) {
      if (process.env.NODE_ENV !== "production") {
        if (s)
          throw new Error("forward() must only be called once in each Exchange.");
        s = !0;
      }
      return mr(i(mr(u)));
    },
    dispatchDebug(u) {
      process.env.NODE_ENV !== "production" && n({
        timestamp: Date.now(),
        source: o.name,
        ...u
      });
    }
  });
}, r), Hi = ({ onOperation: e, onResult: t, onError: r }) => ({ forward: n }) => (i) => yr((o) => {
  r && o.error && r(o.error, o.operation);
  var s = t && t(o) || o;
  return "then" in s ? ai(s) : lr(s);
})(n(yr((o) => {
  var s = e && e(o) || o;
  return "then" in s ? ai(s) : lr(s);
})(i))), go = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = Pt((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var n = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: n,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(n);
  }
})(t)), Z((r) => !1)(t)), bi = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), s = [], u = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = ii();
  function f(b) {
    (b.kind === "mutation" || b.kind === "teardown" || !o.has(b.key)) && (b.kind === "teardown" ? o.delete(b.key) : b.kind !== "mutation" && o.add(b.key), l.next(b));
  }
  var d = !1;
  function y(b) {
    if (b && f(b), !d) {
      for (d = !0; d && (b = s.shift()); )
        f(b);
      d = !1;
    }
  }
  var m = (b) => {
    var P = $n(Z((S) => S.kind === "teardown" && S.key === b.key)(l.source))(Z((S) => S.operation.kind === b.kind && S.operation.key === b.key && (!S.operation.context._instance || S.operation.context._instance === b.context._instance))(q));
    return b.kind !== "query" ? P = qi((S) => !!S.hasNext, !0)(P) : P = ni((S) => {
      var B = lr(S);
      return S.stale || S.hasNext ? B : jt([B, Ft(() => (S.stale = !0, S))(vr(1)(Z((Ne) => Ne.key === b.key)(l.source)))]);
    })(P), b.kind !== "mutation" ? P = Mn(() => {
      o.delete(b.key), n.delete(b.key), i.delete(b.key), d = !1;
      for (var S = s.length - 1; S >= 0; S--)
        s[S].key === b.key && s.splice(S, 1);
      f(qt("teardown", b, b.context));
    })(Pt((S) => {
      if (S.stale) {
        for (var B of s)
          if (B.key === S.operation.key) {
            o.delete(B.key);
            break;
          }
      } else
        S.hasNext || o.delete(b.key);
      n.set(b.key, S);
    })(P)) : P = ri(() => {
      f(b);
    })(P), t.maskTypename && (P = Ft((S) => ({
      ...S,
      data: En(S.data, !0)
    }))(P)), mr(P);
  }, h = this instanceof e ? this : Object.create(e.prototype), v = Object.assign(h, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(b) {
      b.kind === "teardown" ? y(b) : (b.kind === "mutation" || i.has(b.key)) && (s.push(b), Promise.resolve().then(y));
    },
    createRequestOperation(b, P, S) {
      S || (S = {});
      var B;
      if (process.env.NODE_ENV !== "production" && b !== "teardown" && (B = no(P.query)) !== b)
        throw new Error(`Expected operation of type "${b}" but found "${B}"`);
      return qt(b, P, {
        _instance: b === "mutation" ? r = r + 1 | 0 : void 0,
        ...u,
        ...S,
        requestPolicy: S.requestPolicy || u.requestPolicy,
        suspense: S.suspense || S.suspense !== !1 && v.suspense
      });
    },
    executeRequestOperation(b) {
      return b.kind === "mutation" ? yi(m(b)) : yi(Ta(() => {
        var P = i.get(b.key);
        P || i.set(b.key, P = m(b)), P = ri(() => {
          y(b);
        })(P);
        var S = n.get(b.key);
        return b.kind === "query" && S && (S.stale || S.hasNext) ? ni(lr)(jt([P, Z((B) => B === n.get(b.key))(lr(S))])) : P;
      }));
    },
    executeQuery(b, P) {
      var S = v.createRequestOperation("query", b, P);
      return v.executeRequestOperation(S);
    },
    executeSubscription(b, P) {
      var S = v.createRequestOperation("subscription", b, P);
      return v.executeRequestOperation(S);
    },
    executeMutation(b, P) {
      var S = v.createRequestOperation("mutation", b, P);
      return v.executeRequestOperation(S);
    },
    readQuery(b, P, S) {
      var B = null;
      return _t((Ne) => {
        B = Ne;
      })(v.query(b, P, S)).unsubscribe(), B;
    },
    query: (b, P, S) => v.executeQuery(cr(b, P), S),
    subscription: (b, P, S) => v.executeSubscription(cr(b, P), S),
    mutation: (b, P, S) => v.executeMutation(cr(b, P), S)
  }), E = yo;
  if (process.env.NODE_ENV !== "production") {
    var { next: F, source: D } = ii();
    v.subscribeToDebugTarget = (b) => _t(b)(D), E = F;
  }
  var k = bo(t.exchanges), q = mr(k({
    client: v,
    dispatchDebug: E,
    forward: go({
      dispatchDebug: E
    })
  })(l.source));
  return xa(q), v;
};
const vo = {
  DateTime(e) {
    return new Date(e);
  }
};
class So {
  constructor(t) {
    Object.defineProperty(this, "plan", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    });
  }
  apply(t) {
    return Array.isArray(t) ? t.map((r) => this.hydrateObject(r)) : this.hydrateObject(t);
  }
  hydrateObject(t) {
    const r = { ...t };
    for (const [n, i] of Object.entries(this.plan)) {
      const o = r[n];
      o != null && (r[n] = vo[i](o));
    }
    return r;
  }
}
function be(e) {
  if (typeof e != "object")
    return e;
  var t, r, n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = be(e[t]));
    } else {
      r = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(r, t, {
          value: be(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[t] = be(e[t]);
    }
    return r;
  }
  if (n === "[object Array]") {
    for (t = e.length, r = Array(t); t--; )
      r[t] = be(e[t]);
    return r;
  }
  return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    r.add(be(i));
  }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, o) {
    r.set(be(o), be(i));
  }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(be(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var fe;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(fe || (fe = {}));
class wo {
  constructor(t) {
    Object.defineProperty(this, "__gadget", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        fields: {},
        instantiatedFields: {},
        persistedFields: {},
        fieldKeys: [],
        fieldKeysTracker: {},
        touched: !1
      }
    }), Object.defineProperty(this, "empty", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), this.__gadget.instantiatedFields = be(t), this.__gadget.persistedFields = be(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((n) => this.__gadget.fieldKeysTracker[n] = !0));
    const r = {
      get: (n, i) => {
        if (i in this)
          return this[i];
        if (i in n)
          return n[i];
      },
      set: (n, i, o) => (this.trackKey(i), n[i.toString()] = o, !0)
    };
    return new Proxy(this.__gadget.fields, r);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const r = t.toString();
    this.__gadget.fieldKeysTracker[r] || (this.__gadget.fieldKeysTracker[r] = !0, this.__gadget.fieldKeys.push(r));
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = fe.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const r = t == fe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((n) => !kr(r[n], this.__gadget.fields[n]));
  }
  /** Checks if the original constructor data was empty or not */
  isEmpty() {
    return this.empty;
  }
  /** Returns the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  getField(t) {
    return this.__gadget.fields[t];
  }
  /** Sets the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  setField(t, r) {
    return this.trackKey(t), this.__gadget.fields[t] = r;
  }
  changes(t, r = fe.SinceLoaded) {
    const i = (typeof t == "string" ? r : t || r) == fe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const o = i[t], s = this.__gadget.fields[t], u = !kr(s, o);
      return u ? { changed: u, current: s, previous: o } : { changed: u };
    } else {
      const o = {};
      for (let s = 0; s < this.__gadget.fieldKeys.length; s++) {
        const u = this.__gadget.fieldKeys[s];
        kr(i[u], this.__gadget.fields[u]) || (o[u] = { current: this.__gadget.fields[u], previous: i[u] });
      }
      return o;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = fe.SinceLoaded) {
    const r = t == fe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, n = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const o = this.__gadget.fieldKeys[i];
      kr(r[o], this.__gadget.fields[o]) || (n[o] = this.__gadget.fields[o]);
    }
    return n;
  }
  changed(t, r = fe.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = fe.SinceLoaded) {
    t == fe.SinceLoaded ? this.__gadget.instantiatedFields = be(this.__gadget.fields) : t == fe.SinceLastPersisted && (this.__gadget.persistedFields = be(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = fe.SinceLoaded) {
    let r;
    t == fe.SinceLoaded ? r = Object.keys(this.__gadget.instantiatedFields) : r = Object.keys(this.__gadget.persistedFields);
    for (const n of this.__gadget.fieldKeys)
      r.includes(n) || delete this.__gadget.fields[n];
    t == fe.SinceLoaded ? Object.assign(this.__gadget.fields, be(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, be(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Tn({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const Qi = wo;
class Xi extends Error {
  constructor() {
    super(...arguments), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "GGT_INTERNAL_ERROR"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InternalError"
    }), Object.defineProperty(this, "statusCode", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 500
    }), Object.defineProperty(this, "causedByClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    });
  }
}
class Nn extends Error {
  constructor() {
    super(...arguments), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "GGT_CLIENT_ERROR"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ClientError"
    }), Object.defineProperty(this, "statusCode", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 500
    }), Object.defineProperty(this, "causedByClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !0
    });
  }
}
class qr extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class gi extends Error {
  constructor(t) {
    let r;
    _n(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "GGT_UNKNOWN"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnexpectedCloseError"
    }), Object.defineProperty(this, "statusCode", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 500
    }), Object.defineProperty(this, "causedByClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "event", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.event = t;
  }
}
class Io extends Error {
  constructor() {
    super(...arguments), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "GGT_WEBSOCKET_CONNECTION_TIMEOUT"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "WebsocketConnectionTimeoutError"
    }), Object.defineProperty(this, "statusCode", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 500
    }), Object.defineProperty(this, "causedByClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    });
  }
}
class ko extends Error {
  constructor() {
    super(...arguments), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "GGT_TOO_MANY_REQUESTS"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TooManyRequestsError"
    }), Object.defineProperty(this, "statusCode", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 429
    }), Object.defineProperty(this, "causedByClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    });
  }
}
class Oo extends Error {
  constructor(t, r, n, i) {
    const o = r.slice(0, 3), s = r.length > 3 ? `, and ${r.length - 3} more error${r.length > 4 ? "s" : ""} need${r.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${n ?? "Record"} is invalid and can't be saved. ${o.map(({ apiIdentifier: u, message: l }) => `${u} ${l}`).join(", ")}${s}.`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "GGT_INVALID_RECORD"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidRecordError"
    }), Object.defineProperty(this, "statusCode", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 422
    }), Object.defineProperty(this, "causedByClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !0
    }), Object.defineProperty(this, "validationErrors", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "modelApiIdentifier", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "record", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.validationErrors = r, this.modelApiIdentifier = n, this.record = i;
  }
}
class Zi extends Error {
  constructor() {
    super(...arguments), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "GGT_NON_UNIQUE_DATA"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NonUniqueDataError"
    }), Object.defineProperty(this, "statusCode", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 417
    }), Object.defineProperty(this, "causedByClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    });
  }
}
class Vn extends Error {
  constructor() {
    super(...arguments), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "GGT_RECORD_NOT_FOUND"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "RecordNotFoundError"
    }), Object.defineProperty(this, "statusCode", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 404
    }), Object.defineProperty(this, "causedByClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    });
  }
}
class Ao extends Error {
  constructor(t, r) {
    super(t.length > 1 ? "Multiple errors occurred" : t[0].message), Object.defineProperty(this, "errors", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "results", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ErrorGroup"
    });
  }
  get code() {
    return `GGT_ERROR_GROUP(${this.errors.slice(0, 10).map((t) => {
      var r;
      return (r = t.code) !== null && r !== void 0 ? r : "GGT_UNKNOWN";
    }).join(",")})`;
  }
  /** @private */
  get statusCode() {
    return Math.max(...this.errors.map((t) => {
      var r;
      return (r = t.statusCode) !== null && r !== void 0 ? r : 500;
    }));
  }
}
function Pn(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const Bt = (e, t) => {
  const r = t.length;
  let n = 0;
  for (; e != null && n < r; )
    e = e[t[n++]];
  return n && n == r ? e : void 0;
}, _n = (e) => (e == null ? void 0 : e.type) == "close", Ue = (e, t) => typeof e != "string" ? "" : Tt(e, t), vi = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Tt = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (n) => vi(n)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, i, o, s, u) => (i || (i = ""), "" + i + vi(o))), r;
}, Eo = (e) => `${Tt(e)}Sort`, No = (e) => `${Tt(e)}Filter`, Po = (e, t, r) => new Zi(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), _o = (e, t) => {
  if (e.fetching)
    return;
  const r = Bt(e.data, t);
  if (r === void 0)
    return new Xi(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null)
    return new Vn(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, Qe = (e, t, r = !1) => {
  var n;
  if (e.error)
    throw e.error instanceof Sr && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((u) => "[Network] " + u.message).join(`
`)), e.error;
  const i = Bt(e.data, t), o = Bt(i, ["edges"]), s = o ?? i;
  if (i === void 0)
    throw new Xi(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || r && Array.isArray(s) && s.length === 0)
    throw new Vn(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, dr = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof Sr && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const n = Bt(e.data, t);
  return n ?? null;
}, Gn = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Oo(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Zi(e.message) : new qr(e.message, e.code);
}, ct = (e, t) => {
  const r = Qe(e, t);
  return ea(r);
}, ea = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? Gn(t) : new qr("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, ta = (e) => {
  var t, r, n, i;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new So((i = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, fr = (e, t) => {
  const r = ta(e);
  return r && (t = r.apply(t)), new Qi(t);
}, Ln = (e, t) => {
  const r = ta(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((n) => new Qi(n));
}, br = (e, t) => {
  const r = t.edges.map((n) => n.node);
  return Ln(e, r);
}, Tn = (e) => {
  if (e != null && typeof e.toJSON == "function" && (e = e.toJSON()), e !== void 0) {
    if (e === null)
      return null;
    if (typeof e == "boolean" || typeof e == "string")
      return e;
    if (typeof e == "number")
      return Number.isFinite(e) ? e : null;
    if (typeof e == "object") {
      if (Array.isArray(e)) {
        const t = [];
        for (let r = 0; r < e.length; r++) {
          const n = e[r];
          t[r] = n === void 0 ? null : Tn(n);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const r of Object.keys(e)) {
          const n = Tn(e[r]);
          n !== void 0 && (t[r] = n);
        }
        return t;
      }
    }
  }
}, mn = "gstk", Si = (e) => {
  try {
    const t = window[e];
    return t.setItem(mn, mn), t.removeItem(mn), !0;
  } catch {
    return !1;
  }
}, wi = Object.prototype.toString, Ii = Object.getPrototypeOf, ki = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, sr = (e, t, r) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (r.indexOf(e) > -1 && r.indexOf(t) > -1)
    return !0;
  const n = wi.call(e), i = wi.call(t);
  let o, s, u;
  if (r.push(e, t), n != i || (o = ki(e), s = ki(t), o.length != s.length || o.some(function(l) {
    return !sr(e[l], t[l], r);
  })))
    return !1;
  switch (n.slice(8, -1)) {
    case "Symbol":
      return e.valueOf() == t.valueOf();
    case "Date":
    case "Number":
      return +e == +t || +e != +e && +t != +t;
    case "RegExp":
    case "Function":
    case "String":
    case "Boolean":
      return "" + e == "" + t;
    case "Set":
    case "Map": {
      o = e.entries(), s = t.entries();
      do
        if (u = o.next(), !sr(u.value, s.next().value, r))
          return !1;
      while (!u.done);
      return !0;
    }
    case "ArrayBuffer":
      e = new Uint8Array(e), t = new Uint8Array(t);
    case "DataView":
      e = new Uint8Array(e.buffer), t = new Uint8Array(t.buffer);
    case "Float32Array":
    case "Float64Array":
    case "Int8Array":
    case "Int16Array":
    case "Int32Array":
    case "Uint8Array":
    case "Uint16Array":
    case "Uint32Array":
    case "Uint8ClampedArray":
    case "Arguments":
    case "Array":
      if (e.length != t.length)
        return !1;
      for (u = 0; u < e.length; u++)
        if (!(!(u in e) && !(u in t)) && (u in e != u in t || !sr(e[u], t[u], r)))
          return !1;
      return !0;
    case "Object":
      return sr(Ii(e), Ii(t), r);
    default:
      return !1;
  }
}, kr = (e, t) => sr(e, t, []), ra = (e, t) => {
  var r, n;
  if (t ?? (t = {}), !("hasAmbiguousIdentifier" in e) && !("acceptsModelInput" in e))
    return t;
  if (e.hasAmbiguousIdentifier && Object.keys(t).some((o) => {
    var s;
    return o !== "id" && !(!((s = e.paramOnlyVariables) === null || s === void 0) && s.includes(o)) && o !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let i;
  if ((r = e.acceptsModelInput) !== null && r !== void 0 ? r : e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in t && typeof t[e.modelApiIdentifier] == "object" && t[e.modelApiIdentifier] != null)
      i = t;
    else {
      i = {
        [e.modelApiIdentifier]: {}
      };
      for (const [o, s] of Object.entries(t))
        !((n = e.paramOnlyVariables) === null || n === void 0) && n.includes(o) ? i[o] = s : o == "id" ? i.id = s : i[e.modelApiIdentifier][o] = s;
    }
  else
    i = t;
  return i;
}, To = (e, t = {}) => {
  var r;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((r = Array.isArray(t) ? t : t.inputs) !== null && r !== void 0 ? r : []).map((i) => ra(e, i))
  };
}, Co = (e, t) => {
  const r = {};
  for (const [n, i] of Object.entries(e))
    r[n] = { ...i, value: t[n] };
  return r;
};
class Ut extends Array {
  constructor() {
    super(...arguments), Object.defineProperty(this, "modelManager", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "pagination", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    });
  }
  /** Internal method used to create a list. Should not be used by applications. */
  static boot(t, r, n) {
    const i = new Ut();
    return i.push(...r), i.modelManager = t, i.pagination = n, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new qr("No records found.", "GGT_RECORD_NOT_FOUND");
    return this[0];
  }
  toJSON() {
    return this.map((t) => t.toJSON());
  }
  get hasNextPage() {
    return this.pagination.pageInfo.hasNextPage;
  }
  get hasPreviousPage() {
    return this.pagination.pageInfo.hasPreviousPage;
  }
  get startCursor() {
    return this.pagination.pageInfo.startCursor;
  }
  get endCursor() {
    return this.pagination.pageInfo.endCursor;
  }
  async nextPage() {
    var t;
    if (!this.hasNextPage)
      throw new Nn("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const { first: r, last: n, before: i, ...o } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...o,
      after: this.pagination.pageInfo.endCursor,
      first: r || n
    });
  }
  async previousPage() {
    var t;
    if (!this.hasPreviousPage)
      throw new Nn("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: n, after: i, ...o } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...o,
      before: this.pagination.pageInfo.startCursor,
      last: n || r
    });
  }
}
const Cn = (e) => Object.entries(e).flatMap(([t, r]) => {
  if (typeof r == "boolean")
    return r ? t : !1;
  if (r instanceof zn) {
    let n = "";
    const i = Object.entries(r.args).filter(([o, s]) => s != null).map(([o, s]) => {
      var u;
      return `${o}: ${s instanceof Kn ? `$${(u = s.name) !== null && u !== void 0 ? u : o}` : JSON.stringify(s)}`;
    });
    return i.length > 0 && (n = `(${i.join(", ")})`), r.subselection ? [`${t}${n} {`, ...Cn(r.subselection), "}"] : `${t}${n}`;
  } else
    return [`${t} {`, ...Cn(r), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Wn = (e) => {
  const t = {}, r = (n) => {
    let i = 1;
    if (t[n]) {
      for (; t[`${n}${i}`]; )
        i++;
      return `${n}${i}`;
    }
    return n;
  };
  return Object.entries(e).forEach(([n, i]) => {
    i instanceof zn ? Object.entries(i.args).forEach(([o, s]) => {
      var u;
      s instanceof Kn && (t[(u = s.name) !== null && u !== void 0 ? u : r(o)] = s);
    }) : typeof i == "object" && i !== null && Object.assign(t, Wn(i));
  }), t;
}, Ro = (e) => {
  const t = Wn(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([n, i]) => `$${n}: ${i.type}`).join(", ")})`;
};
class zn {
  constructor(t, r) {
    Object.defineProperty(this, "args", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "subselection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class Kn {
  constructor(t, r, n) {
    Object.defineProperty(this, "type", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }), Object.defineProperty(this, "value", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
  present() {
    return this.value != null;
  }
}
const ft = (e, t) => new zn(e, t), X = (e) => new Kn(e.type + (e.required ? "!" : ""), e.name, e.value), xo = (e) => {
  var t;
  const r = Ro(e), n = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${r}${n} {
${Cn(e.fields).join(`
`)}
}`;
}, pt = (e) => {
  const t = Wn(e.fields);
  return {
    query: xo(e),
    variables: Object.entries(t ?? {}).reduce((r, [n, i]) => (typeof i.value < "u" && (r[n] = i.value), r), {})
  };
}, Yn = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Jn = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, Br = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, Do = (e, t, r, n, i) => {
  const o = {};
  return typeof t < "u" && (o.id = X({ type: "GadgetID!", value: t })), pt({
    type: "query",
    name: e,
    fields: {
      [e]: ft(o, Jn((i == null ? void 0 : i.select) || r, !0)),
      ...Yn(n)
    },
    directives: Br(i)
  });
}, Fo = (e, t, r, n, i, o) => Hn(e, n, i, {
  ...o,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}), Hn = (e, t, r, n) => pt({
  type: "query",
  name: e,
  fields: {
    [e]: ft({
      after: X({ value: n == null ? void 0 : n.after, type: "String" }),
      first: X({ value: n == null ? void 0 : n.first, type: "Int" }),
      before: X({ value: n == null ? void 0 : n.before, type: "String" }),
      last: X({ value: n == null ? void 0 : n.last, type: "Int" }),
      sort: n != null && n.sort ? X({ value: n.sort, type: `[${Eo(r)}!]` }) : void 0,
      filter: n != null && n.filter ? X({ value: n.filter, type: `[${No(r)}!]` }) : void 0,
      search: n != null && n.search ? X({ value: n.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Jn((n == null ? void 0 : n.select) || t, !0)
      }
    }),
    ...Yn(r)
  },
  directives: Br(n)
}), na = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Qn = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, X(r)])), ia = (e, t, r) => ({
  success: !0,
  errors: na,
  [e]: t && !r ? Jn(t, !0) : !1,
  result: !!r
}), jo = (e, t, r, n, i, o, s, u, l) => {
  const f = (o == null ? void 0 : o.select) || t;
  let d = {
    [e]: ft(Qn(i), ia(n, f, l))
  };
  s && (d = {
    [s]: d
  });
  const y = {
    type: "mutation",
    name: e,
    fields: {
      ...d,
      ...Yn(r)
    },
    directives: Br(o)
  };
  return pt(y);
}, Mo = (e, t, r) => {
  let n = {}, i = t.operationName;
  switch (t.type) {
    case "action": {
      const s = (r == null ? void 0 : r.select) || t.defaultSelection;
      t.isBulk && (i = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), n = {
        [`... on ${`${Tt(i)}Result`}`]: ia(t.modelApiIdentifier, s, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      n = {
        [`... on ${Tt(i)}Result`]: aa()
      };
  }
  const o = {
    type: "subscription",
    name: Ue(i) + "BackgroundResult",
    fields: {
      backgroundAction: ft({ id: X({ value: e, type: "String!" }) }, {
        id: !0,
        outcome: !0,
        result: {
          ...n
        }
      })
    }
  };
  return pt(o);
}, aa = () => ({
  success: !0,
  errors: na,
  result: !0
}), $o = (e, t, r, n) => {
  let i = {
    [e]: ft(Qn(t), aa())
  };
  return r && (i = {
    [r]: i
  }), pt({
    type: "mutation",
    name: e,
    fields: i,
    directives: Br(n)
  });
}, qo = (e) => {
  if (!e)
    return null;
  const t = { ...e };
  typeof t.retries == "number" && (t.retries = {
    retryCount: t.retries
  }), typeof t.queue == "string" && (t.queue = {
    name: t.queue
  }), t.startAt instanceof Date && (t.startAt = t.startAt.toISOString());
  for (const r of Object.keys(t))
    ["id", "retries", "queue", "priority", "startAt"].includes(r) || delete t[r];
  return t;
}, Bo = (e, t, r, n, i) => {
  let o = {
    background: {
      [e]: ft({
        ...Qn(t),
        backgroundOptions: X({
          type: "EnqueueBackgroundActionOptions",
          value: qo(n)
        })
      }, {
        success: !0,
        errors: {
          message: !0,
          code: !0
        },
        [i ? "backgroundActions" : "backgroundAction"]: {
          id: !0
        }
      })
    }
  };
  return r && (o = {
    [r]: o
  }), pt({
    type: "mutation",
    name: "enqueue" + Tt(e),
    fields: o
  });
}, Uo = (e, t) => ({
  [Symbol.asyncIterator]() {
    const r = e[Symbol.asyncIterator]();
    return {
      async next() {
        const { done: n, value: i } = await r.next();
        return {
          done: n,
          value: typeof i < "u" ? t(i) : void 0
        };
      },
      async return(n) {
        var i;
        return await ((i = r.return) === null || i === void 0 ? void 0 : i.call(r, n));
      }
    };
  }
});
function Xn(e, t, r) {
  return r != null && r.live ? Uo(Da(e), t) : Bn(e, Z((i) => !i.stale && !i.hasNext), vr(1), Mr).then((i) => t(i));
}
const Oi = (e, t, r, n, i, o, s = !0) => {
  const u = Do(t, r, n, i, o), l = e.connection.currentClient.query(u.query, u.variables);
  return Xn(l, (f) => {
    const y = (s ? Qe : dr)(f, [t]);
    return fr(f, y);
  }, o);
}, Vo = (e, t, r, n, i, o, s, u = !0) => {
  const l = Fo(t, r, n, i, o, s), f = e.connection.currentClient.query(l.query, l.variables);
  return Xn(f, (d) => {
    const y = Qe(d, [t]), m = br(d, y);
    if (m.length > 1)
      throw Po(o, r, n);
    const h = m[0];
    if (!h && u)
      throw new Vn(`${o} record with ${r}=${n} not found`);
    return h ?? null;
  }, s);
}, Ai = (e, t, r, n, i, o) => {
  const s = Hn(t, r, n, i), u = e.connection.currentClient.query(s.query, s.variables);
  return Xn(u, (l) => {
    let f;
    o === !1 ? f = dr(l, [t]) : f = Qe(l, [t], o);
    const d = br(l, f);
    return Ut.boot(e, d, { options: i, pageInfo: f.pageInfo });
  }, i);
}, Ei = async (e, t, r, n, i, o, s, u, l, f) => {
  const d = jo(t, r, n, i, s, u, l, o, f), y = await e.connection.currentClient.mutation(d.query, d.variables).toPromise(), m = l ? [l, t] : [t];
  if (o) {
    const h = Bt(y.data, m), v = h[i] && r ? Ln(y, h[i]) : void 0;
    if (h.errors) {
      const E = h.errors.map((F) => Gn(F));
      throw new Ao(E, v);
    }
    return v;
  } else {
    const h = ct(y, m);
    return oa(r, y, h, i, f);
  }
}, oa = (e, t, r, n, i) => {
  if (e != null)
    return i ? r.result : fr(t, r[n]);
}, Ni = async (e, t, r, n) => {
  const i = $o(t, r, n), o = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return ct(o, n ? [n, t] : [t]).result;
};
async function Go(e, t, r, n = {}) {
  const i = t.isBulk ? To(t, r) : ra(t, r), o = Co(t.variables, i), s = Bo(t.operationName, o, t.namespace, n, t.isBulk), u = await e.currentClient.mutation(s.query, s.variables, n).toPromise(), l = ["background", t.operationName];
  t.namespace && l.unshift(t.namespace);
  try {
    const f = ct(u, l);
    return t.isBulk ? f.backgroundActions.map((d) => new Pr(e, t, d.id)) : new Pr(e, t, f.backgroundAction.id);
  } catch (f) {
    if ("code" in f && f.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (n != null && n.id) && n.onDuplicateID == "ignore")
      return new Pr(e, t, n.id);
    throw f;
  }
}
const Lo = async (e, t, r, n) => {
  const i = Mo(t, r, n), o = e.currentClient.subscription(i.query, i.variables), s = await Bn(o, Z((l) => {
    var f, d;
    return l.error || ((d = (f = l.data) === null || f === void 0 ? void 0 : f.backgroundAction) === null || d === void 0 ? void 0 : d.outcome);
  }), vr(1), Mr), u = Qe(s, ["backgroundAction"]);
  switch (ea(u.result), r.type) {
    case "action": {
      u.result = oa(r.defaultSelection, s.data, u.result, r.isBulk ? r.modelApiIdentifier : r.modelSelectionField, r.hasReturnType);
      break;
    }
    case "globalAction": {
      u.result = u.result.result;
      break;
    }
  }
  return u;
};
class Pr {
  constructor(t, r, n) {
    Object.defineProperty(this, "connection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "action", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }), Object.defineProperty(this, "id", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
  /** Wait for this background action to complete and return the result. */
  async result(t) {
    return (await Lo(this.connection, this.id, this.action, t)).result;
  }
}
var pr;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(pr || (pr = {}));
function he(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function At(e) {
  return he(e) === "object";
}
function Wo(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function Pi(e, t) {
  return e.length < 124 ? e : t;
}
const zo = "graphql-transport-ws";
var pe;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(pe || (pe = {}));
var Q;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(Q || (Q = {}));
function sa(e) {
  if (!At(e))
    throw new Error(`Message is expected to be an object, but got ${he(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${he(e.type)}`);
  switch (e.type) {
    case Q.ConnectionInit:
    case Q.ConnectionAck:
    case Q.Ping:
    case Q.Pong: {
      if (e.payload != null && !At(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case Q.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${he(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!At(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${he(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${he(e.payload.query)}`);
      if (e.payload.variables != null && !At(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${he(e.payload.variables)}`);
      if (e.payload.operationName != null && he(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${he(e.payload.operationName)}`);
      if (e.payload.extensions != null && !At(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${he(e.payload.extensions)}`);
      break;
    }
    case Q.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${he(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!At(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${he(e.payload)}`);
      break;
    }
    case Q.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${he(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Wo(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case Q.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${he(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Ko(e, t) {
  return sa(typeof e == "string" ? JSON.parse(e, t) : e);
}
function ar(e, t) {
  return sa(e), JSON.stringify(e, t);
}
function Yo(e) {
  const {
    url: t,
    connectionParams: r,
    lazy: n = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: o = 0,
    keepAlive: s = 0,
    disablePong: u,
    connectionAckWaitTimeout: l = 0,
    retryAttempts: f = 5,
    retryWait: d = async function(j) {
      let M = 1e3;
      for (let R = 0; R < j; R++)
        M *= 2;
      await new Promise((R) => setTimeout(R, M + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: y = Or,
    isFatalConnectionProblem: m,
    on: h,
    webSocketImpl: v,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: E = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (j) => {
        const M = Math.random() * 16 | 0;
        return (j == "x" ? M : M & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: F,
    jsonMessageReviver: D
  } = e;
  let k;
  if (v) {
    if (!Ho(v))
      throw new Error("Invalid WebSocket implementation provided");
    k = v;
  } else
    typeof WebSocket < "u" ? k = WebSocket : typeof global < "u" ? k = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (k = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!k)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const q = k, b = (() => {
    const N = (() => {
      const M = {};
      return {
        on(R, G) {
          return M[R] = G, () => {
            delete M[R];
          };
        },
        emit(R) {
          var G;
          "id" in R && ((G = M[R.id]) === null || G === void 0 || G.call(M, R));
        }
      };
    })(), j = {
      connecting: h != null && h.connecting ? [h.connecting] : [],
      opened: h != null && h.opened ? [h.opened] : [],
      connected: h != null && h.connected ? [h.connected] : [],
      ping: h != null && h.ping ? [h.ping] : [],
      pong: h != null && h.pong ? [h.pong] : [],
      message: h != null && h.message ? [N.emit, h.message] : [N.emit],
      closed: h != null && h.closed ? [h.closed] : [],
      error: h != null && h.error ? [h.error] : []
    };
    return {
      onMessage: N.on,
      on(M, R) {
        const G = j[M];
        return G.push(R), () => {
          G.splice(G.indexOf(R), 1);
        };
      },
      emit(M, ...R) {
        for (const G of [...j[M]])
          G(...R);
      }
    };
  })();
  function P(N) {
    const j = [
      // errors are fatal and more critical than close events, throw them first
      b.on("error", (M) => {
        j.forEach((R) => R()), N(M);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      b.on("closed", (M) => {
        j.forEach((R) => R()), N(M);
      })
    ];
  }
  let S, B = 0, Ne, Pe = !1, De = 0, Ze = !1;
  async function Y() {
    clearTimeout(Ne);
    const [N, j] = await (S ?? (S = new Promise((G, we) => (async () => {
      if (Pe) {
        if (await d(De), !B)
          return S = void 0, we({ code: 1e3, reason: "All Subscriptions Gone" });
        De++;
      }
      b.emit("connecting");
      const $ = new q(typeof t == "function" ? await t() : t, zo);
      let _e, Fe;
      function Ge() {
        isFinite(s) && s > 0 && (clearTimeout(Fe), Fe = setTimeout(() => {
          $.readyState === q.OPEN && ($.send(ar({ type: Q.Ping })), b.emit("ping", !1, void 0));
        }, s));
      }
      P((J) => {
        S = void 0, clearTimeout(_e), clearTimeout(Fe), we(J), Or(J) && J.code === 4499 && ($.close(4499, "Terminated"), $.onerror = null, $.onclose = null);
      }), $.onerror = (J) => b.emit("error", J), $.onclose = (J) => b.emit("closed", J), $.onopen = async () => {
        try {
          b.emit("opened", $);
          const J = typeof r == "function" ? await r() : r;
          if ($.readyState !== q.OPEN)
            return;
          $.send(ar(J ? {
            type: Q.ConnectionInit,
            payload: J
          } : {
            type: Q.ConnectionInit
            // payload is completely absent if not provided
          }, F)), isFinite(l) && l > 0 && (_e = setTimeout(() => {
            $.close(pe.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), Ge();
        } catch (J) {
          b.emit("error", J), $.close(pe.InternalClientError, Pi(J instanceof Error ? J.message : new Error(J).message, "Internal client error"));
        }
      };
      let Le = !1;
      $.onmessage = ({ data: J }) => {
        try {
          const L = Ko(J, D);
          if (b.emit("message", L), L.type === "ping" || L.type === "pong") {
            b.emit(L.type, !0, L.payload), L.type === "pong" ? Ge() : u || ($.send(ar(L.payload ? {
              type: Q.Pong,
              payload: L.payload
            } : {
              type: Q.Pong
              // payload is completely absent if not provided
            })), b.emit("pong", !1, L.payload));
            return;
          }
          if (Le)
            return;
          if (L.type !== Q.ConnectionAck)
            throw new Error(`First message cannot be of type ${L.type}`);
          clearTimeout(_e), Le = !0, b.emit("connected", $, L.payload), Pe = !1, De = 0, G([
            $,
            new Promise((ot, je) => P(je))
          ]);
        } catch (L) {
          $.onmessage = null, b.emit("error", L), $.close(pe.BadResponse, Pi(L instanceof Error ? L.message : new Error(L).message, "Bad response"));
        }
      };
    })())));
    N.readyState === q.CLOSING && await j;
    let M = () => {
    };
    const R = new Promise((G) => M = G);
    return [
      N,
      M,
      Promise.race([
        // wait for
        R.then(() => {
          if (!B) {
            const G = () => N.close(1e3, "Normal Closure");
            isFinite(o) && o > 0 ? Ne = setTimeout(() => {
              N.readyState === q.OPEN && G();
            }, o) : G();
          }
        }),
        // or
        j
      ])
    ];
  }
  function V(N) {
    if (Or(N) && (Jo(N.code) || [
      pe.InternalServerError,
      pe.InternalClientError,
      pe.BadRequest,
      pe.BadResponse,
      pe.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      pe.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      pe.SubscriberAlreadyExists,
      pe.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(N.code)))
      throw N;
    if (Ze)
      return !1;
    if (Or(N) && N.code === 1e3)
      return B > 0;
    if (!f || De >= f || !y(N) || m != null && m(N))
      throw N;
    return Pe = !0;
  }
  return n || (async () => {
    for (B++; ; )
      try {
        const [, , N] = await Y();
        await N;
      } catch (N) {
        try {
          if (!V(N))
            return;
        } catch (j) {
          return i == null ? void 0 : i(j);
        }
      }
  })(), {
    on: b.on,
    subscribe(N, j) {
      const M = E(N);
      let R = !1, G = !1, we = () => {
        B--, R = !0;
      };
      return (async () => {
        for (B++; ; )
          try {
            const [$, _e, Fe] = await Y();
            if (R)
              return _e();
            const Ge = b.onMessage(M, (Le) => {
              switch (Le.type) {
                case Q.Next: {
                  j.next(Le.payload);
                  return;
                }
                case Q.Error: {
                  G = !0, R = !0, j.error(Le.payload), we();
                  return;
                }
                case Q.Complete: {
                  R = !0, we();
                  return;
                }
              }
            });
            $.send(ar({
              id: M,
              type: Q.Subscribe,
              payload: N
            }, F)), we = () => {
              !R && $.readyState === q.OPEN && $.send(ar({
                id: M,
                type: Q.Complete
              }, F)), B--, R = !0, _e();
            }, await Fe.finally(Ge);
            return;
          } catch ($) {
            if (!V($))
              return;
          }
      })().then(() => {
        G || j.complete();
      }).catch(($) => {
        j.error($);
      }), () => {
        R || we();
      };
    },
    async dispose() {
      if (Ze = !0, S) {
        const [N] = await S;
        N.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      S && b.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function Or(e) {
  return At(e) && "code" in e && "reason" in e;
}
function Jo(e) {
  return [
    1e3,
    1001,
    1006,
    1005,
    1012,
    1013,
    1013
    // Bad Gateway
  ].includes(e) ? !1 : e >= 1e3 && e <= 1999;
}
function Ho(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var xt = null;
typeof WebSocket < "u" ? xt = WebSocket : typeof MozWebSocket < "u" ? xt = MozWebSocket : typeof global < "u" ? xt = global.WebSocket || global.MozWebSocket : typeof window < "u" ? xt = window.WebSocket || window.MozWebSocket : typeof self < "u" && (xt = self.WebSocket || self.MozWebSocket);
const Qo = xt;
class ua extends Error {
}
class Xo {
  constructor(t, r) {
    Object.defineProperty(this, "client", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "subscriptionClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }), Object.defineProperty(this, "open", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    });
  }
  /** Shut down this transaction by closing the connection to the backend. */
  close() {
    this.open && this.rollback().catch(() => null), this.subscriptionClient.dispose();
  }
  /** Explicitly roll back this transaction, preventing any of the changes made during it from being committed. */
  async rollback() {
    throw Qe(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new ua("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Qe(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Qe(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Zo {
  constructor() {
    Object.defineProperty(this, "values", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    });
  }
  getItem(t) {
    return this.values[t] || null;
  }
  setItem(t, r) {
    this.values[t] = r;
  }
}
const es = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
}, _i = Hi({
  onOperation: (e) => {
    var t, r;
    (t = (r = e.context).operationName) !== null && t !== void 0 || (r.operationName = es(e.query) || "unknown");
  }
}), ts = Hi({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, r] = e.context.url.split("?"), n = new URLSearchParams(r);
        n.set("operation", e.context.operationName), e.context.url = `${t}?${n.toString()}`;
      } catch {
      }
  }
});
var Rn;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(Rn || (Rn = {}));
const rs = 2, ns = 4800, is = 1e4, as = [pe.ConnectionAcknowledgementTimeout, pe.ConnectionInitialisationTimeout], Ti = Symbol.for("gadget/connection"), os = "token", ss = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var re;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(re || (re = {}));
const Ar = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class la {
  constructor(t) {
    var r, n, i, o, s;
    if (Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "endpoint", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "subscriptionClientOptions", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "websocketsEndpoint", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "websocketImplementation", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "_fetchImplementation", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "environment", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "exchanges", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "baseClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "baseSubscriptionClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "currentTransaction", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "authenticationMode", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: re.Anonymous
    }), Object.defineProperty(this, "sessionTokenStore", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "requestPolicy", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "transaction", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (u, l) => {
        let f, d;
        if (l ? (f = l, d = u) : (f = u, d = {}), this.currentTransaction)
          return await f(this.currentTransaction);
        let y = null, m;
        try {
          y = await this.waitForOpenedConnection({
            isFatalConnectionProblem(E) {
              return console.warn("Transport error encountered during transaction processing", E), !0;
            },
            connectionAckWaitTimeout: ns,
            ...d,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const h = new bi({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              _i,
              ...this.exchanges.beforeAsync,
              yn({
                forwardSubscription(E) {
                  const F = { ...E, query: E.query || "" };
                  return {
                    subscribe: (D) => ({
                      unsubscribe: y.subscribe(F, D)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          h[Ti] = this, m = new Xo(h, y), this.currentTransaction = m, await m.start();
          const v = await f(m);
          return await m.commit(), v;
        } catch (h) {
          try {
            m != null && m.open && await m.rollback();
          } catch (v) {
            v instanceof ua || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", v);
          }
          throw _n(h) ? new gi(h) : h;
        } finally {
          await (y == null ? void 0 : y.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (u, l = {}) => {
        var f;
        u = us(u, (f = this.options.baseRouteURL) !== null && f !== void 0 ? f : this.options.endpoint), this.isGadgetRequest(u) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == re.Custom && await this.options.authenticationMode.custom.processFetch(u, l));
        const d = await this._fetchImplementation(u, l);
        if (this.authenticationMode == re.BrowserSession) {
          const y = d.headers.get("x-set-authorization"), m = y != null && y.startsWith("Session ") ? y.replace("Session ", "") : null;
          m && this.sessionTokenStore.setItem(this.sessionStorageKey, m);
        }
        return d;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof Ar < "u" && Ar.fetch ? this._fetchImplementation = Ar.fetch.bind(Ar) : this._fetchImplementation = async (...u) => {
      let l = await import("./browser-ponyfill-bc364a76.js").then((f) => f.b);
      return l.default && (l = l.default), await l(...u);
    }, this.websocketImplementation = (n = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && n !== void 0 ? n : Qo, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (o = t.environment) !== null && o !== void 0 ? o : "Development", this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${os}-${this.endpoint}`;
  }
  get currentClient() {
    var t;
    return ((t = this.currentTransaction) === null || t === void 0 ? void 0 : t.client) || this.baseClient;
  }
  set fetchImplementation(t) {
    this._fetchImplementation = t, this.resetClients();
  }
  /**
   * Change the authentication mode settings for this connection imperatively.
   * @private This function is generally not required for use by external developers, but is useful for those building integrations against the Gadget API to configure passed in `api` objects.
   */
  setAuthenticationMode(t) {
    var r;
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = re.InternalAuthToken : t.apiKey ? this.authenticationMode = re.APIKey : t.custom && (this.authenticationMode = re.Custom), this.options.authenticationMode = t), (r = this.authenticationMode) !== null && r !== void 0 || (this.authenticationMode = re.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = re.BrowserSession;
    const r = !t || typeof t == "boolean" ? pr.Durable : t.storageType;
    let n;
    r == pr.Durable && Si("localStorage") ? n = window.localStorage : r == pr.Session && Si("sessionStorage") ? n = window.sessionStorage : n = new Zo(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = n, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), xn(this.options.endpoint))
      return !!xn(r);
    const n = new URL(this.options.endpoint).host;
    return r.includes(n);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, _i, ts];
    typeof window < "u" && t.push(mo), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      yn({
        forwardSubscription: (n) => ({
          subscribe: (i) => {
            const o = { ...n, query: n.query || "" };
            return {
              unsubscribe: this.getBaseSubscriptionClient().subscribe(o, i)
            };
          }
        })
      }),
      // another subscription exchange for live queries
      // live queries pass through the same WS client, but use jsondiffs for patching in results
      yn({
        isSubscriptionOperation: (n) => n.query.definitions.some((i) => cs(i)),
        forwardSubscription: (n) => ({
          subscribe: (i) => {
            let o;
            const s = import("./index-d5d487d7.js").then(({ applyAsyncIterableIteratorToSink: u, applyLiveQueryJSONDiffPatch: l, makeAsyncIterableIteratorFromSink: f }) => {
              const d = { ...n, query: n.query || "" };
              return o = u(l(f((y) => this.getBaseSubscriptionClient().subscribe(d, y))), i), o;
            });
            return {
              unsubscribe: () => {
                o ? o() : s.then((u) => u());
              }
            };
          }
        })
      }),
      ho,
      ...this.exchanges.afterAll
    );
    const r = new bi({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[Ti] = this, r;
  }
  newSubscriptionClient(t) {
    if (!this.websocketImplementation)
      throw new Error("Can't use this GadgetClient for this subscription-based operation as there's no global WebSocket implementation available. Please pass one as the `websocketImplementation` option to the GadgetClient constructor.");
    let r = this.websocketsEndpoint;
    if (t != null && t.urlParams) {
      const n = new URLSearchParams();
      for (const [i, o] of Object.entries(t.urlParams))
        o && n.set(i, o);
      r += "?" + n.toString();
    }
    return Yo({
      url: r,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var n, i;
        const o = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == re.APIKey ? o.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == re.InternalAuthToken ? o.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == re.BrowserSession ? o.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == re.Custom && await ((i = (n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(o)), o;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (n, i) => {
          var o, s, u, l, f, d;
          if (this.authenticationMode == re.BrowserSession && (i != null && i.sessionToken)) {
            const y = (o = this.options.authenticationMode) === null || o === void 0 ? void 0 : o.browserSession;
            (y !== null && typeof y == "object" ? y.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (l = (u = (s = this.subscriptionClientOptions) === null || s === void 0 ? void 0 : s.on) === null || u === void 0 ? void 0 : u.connected) === null || l === void 0 || l.call(u, n, i), (d = (f = t == null ? void 0 : t.on) === null || f === void 0 ? void 0 : f.connected) === null || d === void 0 || d.call(f, n, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const r = {};
    if (this.authenticationMode == re.InternalAuthToken)
      r.authorization = "Basic " + ss("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == re.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == re.BrowserSession) {
      const n = this.sessionTokenStore.getItem(this.sessionStorageKey);
      n && (r.authorization = `Session ${n}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), n = [], i = t.connectionAttempts || rs;
    const o = t.connectionGlobalTimeoutMs || is, s = () => {
      n.forEach((u) => u()), n = [];
    };
    return await new Promise((u, l) => {
      const f = setTimeout(() => {
        this.disposeClient(r), y(new Io("Timeout opening websocket connection to Gadget API"));
      }, o), d = (v) => {
        if (_n(v)) {
          if (v.code == Rn.TooManyRequests)
            return s(), y(new ko(v.reason));
          if (as.includes(v.code) && i > 0) {
            i -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), h();
            return;
          }
        }
        clearTimeout(f), l(new gi(v));
      }, y = (v) => {
        clearTimeout(f), l(v);
      }, m = () => {
        clearTimeout(f), u(r);
      }, h = () => {
        s(), n.push(r.on("connected", m)), n.push(r.on("closed", d)), n.push(r.on("error", y));
      };
      h();
    }).finally(s);
  }
  disposeClient(t) {
    const r = t.dispose();
    r && r.catch((n) => console.error(`Error closing SubscriptionClient: ${n.message}`));
  }
  getBaseSubscriptionClient() {
    return this.baseSubscriptionClient || (this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 })), this.baseSubscriptionClient;
  }
}
Object.defineProperty(la, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.20"
});
function us(e, t) {
  if (typeof e != "string")
    return e;
  if (xn(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function xn(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const ls = (e) => {
  var t;
  return e.kind !== "OperationDefinition" || e.operation !== "query" ? null : (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
}, cs = (e) => !!ls(e), wr = `
fragment InternalErrorsDetails on ExecutionError {
  code
  message
  ...on InvalidRecordError {
    validationErrors {
      apiIdentifier
      message
    }
    model {
      apiIdentifier
    }
    record
  }
}
`, Vt = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, ds = (e) => `
    query InternalFind${Ue(e)}($id: GadgetID!, $select: [String!]) {
      ${Vt(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, ca = (e, t) => ({
  search: t != null && t.search ? X({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? X({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? X({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? X({ value: da(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), fs = (e, t) => {
  const r = Ue(e), n = ca(r, t);
  return pt({
    type: "query",
    name: `InternalFindFirst${r}`,
    fields: {
      internal: {
        [`list${r}`]: ft({
          ...n,
          first: X({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, ps = (e, t) => {
  const r = Ue(e), n = ca(r, t);
  return pt({
    type: "query",
    name: `InternalFindMany${r}`,
    fields: {
      internal: {
        [`list${r}`]: ft({
          ...n,
          after: X({ value: t == null ? void 0 : t.after, type: "String" }),
          before: X({ value: t == null ? void 0 : t.before, type: "String" }),
          first: X({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: X({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, ys = (e) => {
  const t = Ue(e);
  return `
    ${wr}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${Vt(e)}
      internal {
        create${t}(${e}: $record) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${e}
        }
      }
    }
  `;
}, ms = (e, t) => {
  const r = Ue(e), n = Ue(t);
  return `
    ${wr}

    mutation InternalBulkCreate${n}($records: [Internal${r}Input]!) {
      ${Vt(e)}
      internal {
        bulkCreate${n}(${t}: $records) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${t}
        }
      }
    }
  `;
}, hs = (e) => {
  const t = Ue(e);
  return `
    ${wr}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${Vt(e)}
      internal {
        update${t}(id: $id, ${e}: $record) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${e}
        }
      }
    }
  `;
}, bs = (e) => {
  const t = Ue(e);
  return `
    ${wr}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${Vt(e)}
      internal {
        delete${t}(id: $id) {
          success
          errors {
            ... InternalErrorsDetails
          }
        }
      }
    }
  `;
}, gs = (e) => {
  const t = Ue(e);
  return `
    ${wr}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${Vt(e)}
      internal {
        deleteMany${t}(search: $search, filter: $filter) {
          success
          errors {
            ... InternalErrorsDetails
          }
        }
      }
    }
  `;
};
class $e {
  constructor(t, r, n) {
    Object.defineProperty(this, "apiIdentifier", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "connection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }), Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }), Object.defineProperty(this, "capitalizedApiIdentifier", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.capitalizedApiIdentifier = Tt(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let n = t;
    if (!this.validateRecord(t))
      throw new qr(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
    return this.apiIdentifier in t && (n = n[this.apiIdentifier]), n;
  }
  /**
   * Find a single record by ID. Throws an error by default if the record with the given ID is not found.
   *
   * @example
   * // returns post with id 10
   * const post = await api.internal.post.findOne(10);
   *
   * @param id The ID of the record to find
   * @param options Options for the find operation
   * @param throwOnEmptyData Whether or not to throw an error if the record is not found
   * @returns The record, if found
   */
  async findOne(t, r, n = !0) {
    const i = await this.connection.currentClient.query(ds(this.apiIdentifier), { id: t, select: da(r == null ? void 0 : r.select) }).toPromise(), s = (n ? Qe : dr)(i, ["internal", this.apiIdentifier]);
    return fr(i, s);
  }
  /**
   * Find a single record by ID. Returns null if the record doesn't exist.
   *
   * @example
   * // returns post with id 10 if it exists, null otherwise
   * const post = await api.internal.post.maybeFindOne(10);
   *
   * @param id The ID of the record to find
   * @param options Options for the find operation
   * @returns The record, if found, null otherwise
   */
  async maybeFindOne(t, r) {
    const n = await this.findOne(t, r, !1);
    return n.isEmpty() ? null : n;
  }
  /**
   * Find a list of records matching the given options
   *
   * @example
   * // returns the first page of published posts
   * const posts = await api.internal.post.findMany({ filter: { published: { equals: true }}});
   *
   * @param options Options for the find operation, like sorts, filters, and pagination
   * @returns The record, if found, null otherwise
   */
  async findMany(t) {
    const r = ps(this.apiIdentifier, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise(), i = dr(n, ["internal", `list${this.capitalizedApiIdentifier}`]), o = br(n, i);
    return Ut.boot(this, o, { options: t, pageInfo: i.pageInfo });
  }
  /**
   * Find the first record matching the given options. Throws an error by default if no records matching the options are found.
   *
   * @example
   * // returns the first published post or throws if none found
   * const post = await api.internal.post.findFirst({ filter: { published: { equals: true }}});
   *
   * @param options Options for the find operation, like sorts, filters, and pagination
   * @returns The first record matching the options
   */
  async findFirst(t, r = !0) {
    const n = fs(this.apiIdentifier, t), i = await this.connection.currentClient.query(n.query, n.variables).toPromise();
    let o;
    r === !1 ? o = dr(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : o = Qe(i, ["internal", `list${this.capitalizedApiIdentifier}`], r);
    const s = br(i, o);
    return Ut.boot(this, s, { options: t, pageInfo: o.pageInfo })[0];
  }
  /**
   * Find the first record matching the given options. Returns null if no records matching the options are found.
   *
   * @example
   * // returns the first published post or null if none are published
   * const post = await api.internal.post.maybeFindFirst({ filter: { published: { equals: true }}});
   *
   * @param options Options for the find operation, like sorts, filters, and pagination
   * @returns The first record matching the options, null otherwise
   */
  async maybeFindFirst(t) {
    return await this.findFirst(t, !1);
  }
  /**
   * Creates a new record in the backend datastore for this model using the Internal API
   *
   * Does *not* run actions -- use the Public API for that.
   *
   * @example
   * // creates a new post record in the database
   * const post = await api.internal.post.create({ title: "A new post" });
   *
   * @param record The data for the record to create
   * @returns The created record
   */
  async create(t) {
    const r = await this.connection.currentClient.mutation(ys(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), n = ct(r, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return fr(r, n[this.apiIdentifier]);
  }
  /**
   * Creates a set of new records in the backend datastore for this model using the Internal API. Creates in bulk within the same database transaction for performance.
   *
   * Does *not* run actions -- use the Public API for that.
   *
   * @example
   * // creates 2 new post records in the database
   * const posts = await api.internal.post.bulkCreate([
   *   { title: "A new post" },
   *   { title: "Another new post" }
   * ]);
   *
   * @param record An array of data for the records to create
   * @returns The created records
   */
  async bulkCreate(t) {
    var r;
    if (!(!((r = this.options) === null || r === void 0) && r.pluralApiIdentifier))
      throw new Nn("Cannot perform bulkCreate without a pluralApiIdentifier");
    const n = Ue(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(ms(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), o = ct(i, ["internal", `bulkCreate${n}`]);
    return Ln(i, o[this.options.pluralApiIdentifier]);
  }
  /**
   * Updates an existing record in the backend datastore for this model using the Internal API
   *
   * Does *not* run actions -- use the Public API for that.
   *
   * @example
   * // updates post with id 10 in the database
   * const post = await api.internal.post.update(10, { title: "A new post title" });
   *
   * @param record The data for the record to update
   * @returns The updated record
   */
  async update(t, r) {
    Pn(t, "Can't update a record without an ID passed");
    const n = await this.connection.currentClient.mutation(hs(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(r, "update")
    }).toPromise(), i = ct(n, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return fr(n, i[this.apiIdentifier]);
  }
  /**
   * Deletes an existing record in the backend datastore for this model using the Internal API
   *
   * Does *not* run actions -- use the Public API for that.
   *
   * @example
   * // removes the post with id 10 in the database
   * await api.internal.post.delete(10);
   *
   * @param id The id of the record to delete
   */
  async delete(t) {
    Pn(t, "Can't delete a record without an ID");
    const r = await this.connection.currentClient.mutation(bs(this.apiIdentifier), { id: t }).toPromise();
    ct(r, ["internal", `delete${this.capitalizedApiIdentifier}`]);
  }
  /**
   * Deletes the records in the backend datastore that match the given filter criteria. Uses the Internal API.
   *
   * Does *not* run actions -- use the Public API for that.
   *
   * @example
   * // removes all unpublished posts from the database
   * await api.internal.post.deleteMany({filter: { published: { equals: false } } });
   *
   * @param options Search and filter options for the records to delete
   */
  async deleteMany(t) {
    const r = await this.connection.currentClient.mutation(gs(this.apiIdentifier), t).toPromise();
    ct(r, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function da(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, n] of Object.entries(e))
    n && t.push(r);
  return t;
}
const xe = (e, t, r, n) => {
  const i = class {
    constructor(o) {
      this.connection = o;
    }
  };
  for (const o of n)
    switch (o.type) {
      case "maybeFindOne":
      case "findOne": {
        "functionName" in o ? i.prototype[o.functionName] = Object.assign(
          async function(s, u) {
            return await Vo(
              this,
              o.operationName,
              o.findByField,
              s,
              r,
              e,
              u
            );
          },
          o
        ) : i.prototype[o.type] = Object.assign(
          async function(s, u) {
            const l = await Oi(
              this,
              e,
              s,
              r,
              e,
              u,
              o.type != "maybeFindOne"
            );
            return l.isEmpty() ? null : l;
          },
          o
        );
        break;
      }
      case "findMany": {
        i.prototype.findMany = Object.assign(async function(s) {
          return await Ai(this, t, r, e, s);
        }, o);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        i.prototype[o.type] = Object.assign(async function(s) {
          const u = await Ai(
            this,
            t,
            r,
            e,
            {
              ...s,
              first: 1,
              last: void 0,
              before: void 0,
              after: void 0
            },
            o.type != "maybeFindFirst"
          );
          return (u == null ? void 0 : u[0]) ?? null;
        }, o);
        break;
      }
      case "get": {
        i.prototype.get = Object.assign(async function(s) {
          return await Oi(this, o.operationName, void 0, r, e, s);
        }, o);
        break;
      }
      case "action": {
        if (o.isBulk) {
          const s = !!o.variables.ids;
          i.prototype[o.functionName] = Object.assign(
            async function(u, l) {
              let f;
              return s ? f = {
                ids: {
                  ...o.variables.ids,
                  value: u
                }
              } : f = {
                inputs: {
                  ...o.variables.inputs,
                  value: u.map(
                    (d) => fa(this[o.singleActionFunctionName], void 0, d)
                  )
                }
              }, await Ei(
                this,
                o.operationName,
                o.isDeleter ? null : r,
                e,
                o.modelSelectionField,
                !0,
                f,
                l,
                o.namespace,
                o.hasReturnType
              );
            },
            o
          );
        } else {
          const s = !!o.variables.id, u = Object.keys(o.variables).filter((l) => l != "id").length > 0;
          i.prototype[o.functionName] = Object.assign(
            async function(...l) {
              const [f, d] = vs(o, s, u, l);
              return await Ei(
                this,
                o.operationName,
                o.isDeleter ? null : r,
                e,
                o.modelSelectionField,
                !1,
                f,
                d,
                o.namespace,
                o.hasReturnType
              );
            },
            o
          );
        }
        break;
      }
    }
  return i;
};
function fa(e, t, r = {}) {
  var o;
  if (e.hasAmbiguousIdentifier && Object.keys(r).some((s) => {
    var u;
    return !((u = e.paramOnlyVariables) != null && u.includes(s)) && s !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const i = Object.entries(e.variables).find(([s, u]) => s === "id" && u.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in r && typeof r[e.modelApiIdentifier] == "object" && r[e.modelApiIdentifier] !== null || !e.variables[e.modelApiIdentifier])
      n = r;
    else {
      n = {
        [e.modelApiIdentifier]: {}
      };
      for (const [s, u] of Object.entries(r))
        (o = e.paramOnlyVariables) != null && o.includes(s) ? n[s] = u : i && s === i[0] ? n.id = u : n[e.modelApiIdentifier][s] = u;
    }
  else
    n = r;
  return n.id ?? (n.id = t), n;
}
function vs(e, t, r, n) {
  let i, o;
  t && (i = n.shift()), r && (o = n.shift());
  const s = n.shift();
  let u = o;
  (i || o) && (u = fa(e, i, o));
  const l = {};
  for (const [f, d] of Object.entries(e.variables))
    l[f] = {
      value: f == "id" ? i : u == null ? void 0 : u[f],
      ...d
    };
  return [l, s];
}
const Oe = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  email: !0,
  roles: { key: !0, name: !0 },
  updatedAt: !0
}, H = "user", it = "users", Ss = xe(
  H,
  it,
  Oe,
  [
    {
      type: "findOne",
      operationName: H,
      modelApiIdentifier: H,
      findByVariableName: "id",
      defaultSelection: Oe
    },
    {
      type: "maybeFindOne",
      operationName: H,
      modelApiIdentifier: H,
      findByVariableName: "id",
      defaultSelection: Oe
    },
    {
      type: "findMany",
      operationName: it,
      modelApiIdentifier: H,
      defaultSelection: Oe
    },
    {
      type: "findFirst",
      operationName: it,
      modelApiIdentifier: H,
      defaultSelection: Oe
    },
    {
      type: "maybeFindFirst",
      operationName: it,
      modelApiIdentifier: H,
      defaultSelection: Oe
    },
    {
      type: "findOne",
      operationName: it,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: H,
      defaultSelection: Oe
    },
    {
      type: "action",
      operationName: "signUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: H,
      modelSelectionField: H,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "SignUpUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Oe
    },
    {
      type: "action",
      operationName: "bulkSignUpUsers",
      functionName: "bulkSignUp",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "signUp",
      modelApiIdentifier: H,
      modelSelectionField: it,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: Oe
    },
    {
      type: "action",
      operationName: "updateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: H,
      modelSelectionField: H,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        user: { required: !1, type: "UpdateUserInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Oe
    },
    {
      type: "action",
      operationName: "bulkUpdateUsers",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: H,
      modelSelectionField: it,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: Oe
    },
    {
      type: "action",
      operationName: "deleteUser",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: H,
      modelSelectionField: H,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteUsers",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: H,
      modelSelectionField: it,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "createUser",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: H,
      modelSelectionField: H,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "CreateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Oe
    },
    {
      type: "action",
      operationName: "bulkCreateUsers",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: H,
      modelSelectionField: it,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: Oe
    }
  ]
), We = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, ye = "session", Ct = "sessions", ws = xe(
  ye,
  Ct,
  We,
  [
    {
      type: "findOne",
      operationName: ye,
      modelApiIdentifier: ye,
      findByVariableName: "id",
      defaultSelection: We
    },
    {
      type: "maybeFindOne",
      operationName: ye,
      modelApiIdentifier: ye,
      findByVariableName: "id",
      defaultSelection: We
    },
    {
      type: "findMany",
      operationName: Ct,
      modelApiIdentifier: ye,
      defaultSelection: We
    },
    {
      type: "findFirst",
      operationName: Ct,
      modelApiIdentifier: ye,
      defaultSelection: We
    },
    {
      type: "maybeFindFirst",
      operationName: Ct,
      modelApiIdentifier: ye,
      defaultSelection: We
    },
    {
      type: "action",
      operationName: "logInViaEmail",
      functionName: "logInViaEmail",
      namespace: "currentSession",
      modelApiIdentifier: ye,
      modelSelectionField: ye,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        email: { required: !1, type: "String" },
        password: { required: !1, type: "String" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: We
    },
    {
      type: "action",
      operationName: "bulkLogInViaEmailSessions",
      functionName: "bulkLogInViaEmail",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "logInViaEmail",
      modelApiIdentifier: ye,
      modelSelectionField: Ct,
      namespace: "currentSession",
      variables: {
        inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" }
      },
      defaultSelection: We
    },
    {
      type: "action",
      operationName: "logOut",
      functionName: "logOut",
      namespace: "currentSession",
      modelApiIdentifier: ye,
      modelSelectionField: ye,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: We
    },
    {
      type: "action",
      operationName: "bulkLogOutSessions",
      functionName: "bulkLogOut",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "logOut",
      modelApiIdentifier: ye,
      modelSelectionField: Ct,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: We
    }
  ]
), ze = {
  __typename: !0,
  id: !0,
  state: !0,
  body: !0,
  createdAt: !0,
  handle: !0,
  productCategory: !0,
  productType: !0,
  publishedAt: !0,
  publishedScope: !0,
  shopifyCreatedAt: !0,
  shopifyUpdatedAt: !0,
  status: !0,
  tags: !0,
  templateSuffix: !0,
  title: !0,
  updatedAt: !0,
  vendor: !0
}, oe = "shopifyProduct", St = "shopifyProducts", Is = xe(
  oe,
  St,
  ze,
  [
    {
      type: "findOne",
      operationName: oe,
      modelApiIdentifier: oe,
      findByVariableName: "id",
      defaultSelection: ze
    },
    {
      type: "maybeFindOne",
      operationName: oe,
      modelApiIdentifier: oe,
      findByVariableName: "id",
      defaultSelection: ze
    },
    {
      type: "findMany",
      operationName: St,
      modelApiIdentifier: oe,
      defaultSelection: ze
    },
    {
      type: "findFirst",
      operationName: St,
      modelApiIdentifier: oe,
      defaultSelection: ze
    },
    {
      type: "maybeFindFirst",
      operationName: St,
      modelApiIdentifier: oe,
      defaultSelection: ze
    },
    {
      type: "action",
      operationName: "createShopifyProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: oe,
      modelSelectionField: oe,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        shopifyProduct: { required: !1, type: "CreateShopifyProductInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ze
    },
    {
      type: "action",
      operationName: "bulkCreateShopifyProducts",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: oe,
      modelSelectionField: St,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" }
      },
      defaultSelection: ze
    },
    {
      type: "action",
      operationName: "updateShopifyProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: oe,
      modelSelectionField: oe,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyProduct: { required: !1, type: "UpdateShopifyProductInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ze
    },
    {
      type: "action",
      operationName: "bulkUpdateShopifyProducts",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: oe,
      modelSelectionField: St,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyProductsInput!]" }
      },
      defaultSelection: ze
    },
    {
      type: "action",
      operationName: "deleteShopifyProduct",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: oe,
      modelSelectionField: oe,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteShopifyProducts",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: oe,
      modelSelectionField: St,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Ke = {
  __typename: !0,
  id: !0,
  state: !0,
  alt: !0,
  createdAt: !0,
  height: !0,
  position: !0,
  shopifyCreatedAt: !0,
  shopifyUpdatedAt: !0,
  source: !0,
  updatedAt: !0,
  width: !0
}, se = "shopifyProductImage", wt = "shopifyProductImages", ks = xe(
  se,
  wt,
  Ke,
  [
    {
      type: "findOne",
      operationName: se,
      modelApiIdentifier: se,
      findByVariableName: "id",
      defaultSelection: Ke
    },
    {
      type: "maybeFindOne",
      operationName: se,
      modelApiIdentifier: se,
      findByVariableName: "id",
      defaultSelection: Ke
    },
    {
      type: "findMany",
      operationName: wt,
      modelApiIdentifier: se,
      defaultSelection: Ke
    },
    {
      type: "findFirst",
      operationName: wt,
      modelApiIdentifier: se,
      defaultSelection: Ke
    },
    {
      type: "maybeFindFirst",
      operationName: wt,
      modelApiIdentifier: se,
      defaultSelection: Ke
    },
    {
      type: "action",
      operationName: "createShopifyProductImage",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: se,
      modelSelectionField: se,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        shopifyProductImage: { required: !1, type: "CreateShopifyProductImageInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ke
    },
    {
      type: "action",
      operationName: "bulkCreateShopifyProductImages",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: se,
      modelSelectionField: wt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: Ke
    },
    {
      type: "action",
      operationName: "updateShopifyProductImage",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: se,
      modelSelectionField: se,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyProductImage: { required: !1, type: "UpdateShopifyProductImageInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ke
    },
    {
      type: "action",
      operationName: "bulkUpdateShopifyProductImages",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: se,
      modelSelectionField: wt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: Ke
    },
    {
      type: "action",
      operationName: "deleteShopifyProductImage",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: se,
      modelSelectionField: se,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteShopifyProductImages",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: se,
      modelSelectionField: wt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Ye = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  name: !0,
  position: !0,
  updatedAt: !0,
  values: !0
}, ue = "shopifyProductOption", It = "shopifyProductOptions", Os = xe(
  ue,
  It,
  Ye,
  [
    {
      type: "findOne",
      operationName: ue,
      modelApiIdentifier: ue,
      findByVariableName: "id",
      defaultSelection: Ye
    },
    {
      type: "maybeFindOne",
      operationName: ue,
      modelApiIdentifier: ue,
      findByVariableName: "id",
      defaultSelection: Ye
    },
    {
      type: "findMany",
      operationName: It,
      modelApiIdentifier: ue,
      defaultSelection: Ye
    },
    {
      type: "findFirst",
      operationName: It,
      modelApiIdentifier: ue,
      defaultSelection: Ye
    },
    {
      type: "maybeFindFirst",
      operationName: It,
      modelApiIdentifier: ue,
      defaultSelection: Ye
    },
    {
      type: "action",
      operationName: "createShopifyProductOption",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ue,
      modelSelectionField: ue,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        shopifyProductOption: { required: !1, type: "CreateShopifyProductOptionInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ye
    },
    {
      type: "action",
      operationName: "bulkCreateShopifyProductOptions",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: ue,
      modelSelectionField: It,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: Ye
    },
    {
      type: "action",
      operationName: "updateShopifyProductOption",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ue,
      modelSelectionField: ue,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyProductOption: { required: !1, type: "UpdateShopifyProductOptionInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ye
    },
    {
      type: "action",
      operationName: "bulkUpdateShopifyProductOptions",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: ue,
      modelSelectionField: It,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: Ye
    },
    {
      type: "action",
      operationName: "deleteShopifyProductOption",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: ue,
      modelSelectionField: ue,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteShopifyProductOptions",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ue,
      modelSelectionField: It,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Je = {
  __typename: !0,
  id: !0,
  state: !0,
  barcode: !0,
  compareAtPrice: !0,
  createdAt: !0,
  fulfillmentService: !0,
  grams: !0,
  inventoryManagement: !0,
  inventoryPolicy: !0,
  inventoryQuantity: !0,
  inventoryQuantityAdjustment: !0,
  oldInventoryQuantity: !0,
  option1: !0,
  option2: !0,
  option3: !0,
  position: !0,
  presentmentPrices: !0,
  price: !0,
  requiresShipping: !0,
  shopifyCreatedAt: !0,
  shopifyUpdatedAt: !0,
  sku: !0,
  taxCode: !0,
  taxable: !0,
  title: !0,
  updatedAt: !0,
  weight: !0,
  weightUnit: !0
}, le = "shopifyProductVariant", kt = "shopifyProductVariants", As = xe(
  le,
  kt,
  Je,
  [
    {
      type: "findOne",
      operationName: le,
      modelApiIdentifier: le,
      findByVariableName: "id",
      defaultSelection: Je
    },
    {
      type: "maybeFindOne",
      operationName: le,
      modelApiIdentifier: le,
      findByVariableName: "id",
      defaultSelection: Je
    },
    {
      type: "findMany",
      operationName: kt,
      modelApiIdentifier: le,
      defaultSelection: Je
    },
    {
      type: "findFirst",
      operationName: kt,
      modelApiIdentifier: le,
      defaultSelection: Je
    },
    {
      type: "maybeFindFirst",
      operationName: kt,
      modelApiIdentifier: le,
      defaultSelection: Je
    },
    {
      type: "action",
      operationName: "createShopifyProductVariant",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: le,
      modelSelectionField: le,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        shopifyProductVariant: { required: !1, type: "CreateShopifyProductVariantInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Je
    },
    {
      type: "action",
      operationName: "bulkCreateShopifyProductVariants",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: le,
      modelSelectionField: kt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: Je
    },
    {
      type: "action",
      operationName: "updateShopifyProductVariant",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: le,
      modelSelectionField: le,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyProductVariant: { required: !1, type: "UpdateShopifyProductVariantInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Je
    },
    {
      type: "action",
      operationName: "bulkUpdateShopifyProductVariants",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: le,
      modelSelectionField: kt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: Je
    },
    {
      type: "action",
      operationName: "deleteShopifyProductVariant",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: le,
      modelSelectionField: le,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteShopifyProductVariants",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: le,
      modelSelectionField: kt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), me = {
  __typename: !0,
  id: !0,
  state: !0,
  address1: !0,
  address2: !0,
  checkoutApiSupported: !0,
  city: !0,
  cookieConsentLevel: !0,
  country: !0,
  countryCode: !0,
  countryName: !0,
  countyTaxes: !0,
  createdAt: !0,
  currency: !0,
  customerEmail: !0,
  disabledWebhooks: !0,
  domain: !0,
  eligibleForCardReaderGiveaway: !0,
  eligibleForPayments: !0,
  email: !0,
  enabledPresentmentCurrencies: !0,
  finances: !0,
  forceSsl: !0,
  googleAppsDomain: !0,
  googleAppsLoginEnabled: !0,
  grantedScopes: !0,
  hasDiscounts: !0,
  hasGiftCards: !0,
  hasStorefront: !0,
  ianaTimezone: !0,
  installedViaApiKey: !0,
  latitude: !0,
  longitude: !0,
  marketingSmsContentEnabledAtCheckout: !0,
  moneyFormat: !0,
  moneyInEmailsFormat: !0,
  moneyWithCurrencyFormat: !0,
  moneyWithCurrencyInEmailsFormat: !0,
  multiLocationEnabled: !0,
  myshopifyDomain: !0,
  name: !0,
  passwordEnabled: !0,
  phone: !0,
  planDisplayName: !0,
  planName: !0,
  preLaunchEnabled: !0,
  primaryLocale: !0,
  province: !0,
  provinceCode: !0,
  registeredWebhooks: !0,
  requiresExtraPaymentsAgreement: !0,
  setupRequired: !0,
  shopOwner: !0,
  shopifyCreatedAt: !0,
  shopifyUpdatedAt: !0,
  source: !0,
  taxShipping: !0,
  taxesIncluded: !0,
  timezone: !0,
  transactionalSmsDisabled: !0,
  updatedAt: !0,
  weightUnit: !0,
  zipCode: !0
}, K = "shopifyShop", at = "shopifyShops", Es = xe(
  K,
  at,
  me,
  [
    {
      type: "findOne",
      operationName: K,
      modelApiIdentifier: K,
      findByVariableName: "id",
      defaultSelection: me
    },
    {
      type: "maybeFindOne",
      operationName: K,
      modelApiIdentifier: K,
      findByVariableName: "id",
      defaultSelection: me
    },
    {
      type: "findMany",
      operationName: at,
      modelApiIdentifier: K,
      defaultSelection: me
    },
    {
      type: "findFirst",
      operationName: at,
      modelApiIdentifier: K,
      defaultSelection: me
    },
    {
      type: "maybeFindFirst",
      operationName: at,
      modelApiIdentifier: K,
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "createShopifyShop",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: K,
      modelSelectionField: K,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        shopifyShop: { required: !1, type: "CreateShopifyShopInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "bulkCreateShopifyShops",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: K,
      modelSelectionField: at,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyShopsInput!]" }
      },
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "updateShopifyShop",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: K,
      modelSelectionField: K,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyShop: { required: !1, type: "UpdateShopifyShopInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "bulkUpdateShopifyShops",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: K,
      modelSelectionField: at,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyShopsInput!]" }
      },
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "deleteShopifyShop",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: K,
      modelSelectionField: K,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteShopifyShops",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: K,
      modelSelectionField: at,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "reinstallShopifyShop",
      functionName: "reinstall",
      namespace: null,
      modelApiIdentifier: K,
      modelSelectionField: K,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyShop: { required: !1, type: "ReinstallShopifyShopInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "bulkReinstallShopifyShops",
      functionName: "bulkReinstall",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "reinstall",
      modelApiIdentifier: K,
      modelSelectionField: at,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkReinstallShopifyShopsInput!]" }
      },
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "uninstallShopifyShop",
      functionName: "uninstall",
      namespace: null,
      modelApiIdentifier: K,
      modelSelectionField: K,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyShop: { required: !1, type: "UninstallShopifyShopInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "bulkUninstallShopifyShops",
      functionName: "bulkUninstall",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "uninstall",
      modelApiIdentifier: K,
      modelSelectionField: at,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUninstallShopifyShopsInput!]" }
      },
      defaultSelection: me
    }
  ]
), He = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
}, ce = "productPairing", Ot = "productPairings", Ns = xe(
  ce,
  Ot,
  He,
  [
    {
      type: "findOne",
      operationName: ce,
      modelApiIdentifier: ce,
      findByVariableName: "id",
      defaultSelection: He
    },
    {
      type: "maybeFindOne",
      operationName: ce,
      modelApiIdentifier: ce,
      findByVariableName: "id",
      defaultSelection: He
    },
    {
      type: "findMany",
      operationName: Ot,
      modelApiIdentifier: ce,
      defaultSelection: He
    },
    {
      type: "findFirst",
      operationName: Ot,
      modelApiIdentifier: ce,
      defaultSelection: He
    },
    {
      type: "maybeFindFirst",
      operationName: Ot,
      modelApiIdentifier: ce,
      defaultSelection: He
    },
    {
      type: "action",
      operationName: "createProductPairing",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ce,
      modelSelectionField: ce,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        productPairing: { required: !1, type: "CreateProductPairingInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: He
    },
    {
      type: "action",
      operationName: "bulkCreateProductPairings",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: ce,
      modelSelectionField: Ot,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateProductPairingsInput!]" }
      },
      defaultSelection: He
    },
    {
      type: "action",
      operationName: "updateProductPairing",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ce,
      modelSelectionField: ce,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        productPairing: { required: !1, type: "UpdateProductPairingInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: He
    },
    {
      type: "action",
      operationName: "bulkUpdateProductPairings",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: ce,
      modelSelectionField: Ot,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateProductPairingsInput!]" }
      },
      defaultSelection: He
    },
    {
      type: "action",
      operationName: "deleteProductPairing",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: ce,
      modelSelectionField: ce,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteProductPairings",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ce,
      modelSelectionField: Ot,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Ae = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  domain: !0,
  errorDetails: !0,
  errorMessage: !0,
  force: !0,
  models: !0,
  syncKey: !0,
  syncSince: !0,
  updatedAt: !0
}, ne = "shopifySync", st = "shopifySyncs", Ps = xe(
  ne,
  st,
  Ae,
  [
    {
      type: "findOne",
      operationName: ne,
      modelApiIdentifier: ne,
      findByVariableName: "id",
      defaultSelection: Ae
    },
    {
      type: "maybeFindOne",
      operationName: ne,
      modelApiIdentifier: ne,
      findByVariableName: "id",
      defaultSelection: Ae
    },
    {
      type: "findMany",
      operationName: st,
      modelApiIdentifier: ne,
      defaultSelection: Ae
    },
    {
      type: "findFirst",
      operationName: st,
      modelApiIdentifier: ne,
      defaultSelection: Ae
    },
    {
      type: "maybeFindFirst",
      operationName: st,
      modelApiIdentifier: ne,
      defaultSelection: Ae
    },
    {
      type: "findOne",
      operationName: st,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ne,
      defaultSelection: Ae
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifySync: { required: !1, type: "CompleteShopifySyncInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ae
    },
    {
      type: "action",
      operationName: "bulkCompleteShopifySyncs",
      functionName: "bulkComplete",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "complete",
      modelApiIdentifier: ne,
      modelSelectionField: st,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCompleteShopifySyncsInput!]" }
      },
      defaultSelection: Ae
    },
    {
      type: "action",
      operationName: "errorShopifySync",
      functionName: "error",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifySync: { required: !1, type: "ErrorShopifySyncInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ae
    },
    {
      type: "action",
      operationName: "bulkErrorShopifySyncs",
      functionName: "bulkError",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "error",
      modelApiIdentifier: ne,
      modelSelectionField: st,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkErrorShopifySyncsInput!]" }
      },
      defaultSelection: Ae
    },
    {
      type: "action",
      operationName: "runShopifySync",
      functionName: "run",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        shopifySync: { required: !1, type: "RunShopifySyncInput" },
        startReason: { required: !1, type: "String" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ae
    },
    {
      type: "action",
      operationName: "bulkRunShopifySyncs",
      functionName: "bulkRun",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "run",
      modelApiIdentifier: ne,
      modelSelectionField: st,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: Ae
    }
  ]
), qe = {
  __typename: !0,
  id: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  updatedAt: !0
}, ie = "ambiguous", ut = "ambiguouss", _s = xe(
  ie,
  ut,
  qe,
  [
    {
      type: "findOne",
      operationName: ie,
      modelApiIdentifier: ie,
      findByVariableName: "id",
      defaultSelection: qe
    },
    {
      type: "maybeFindOne",
      operationName: ie,
      modelApiIdentifier: ie,
      findByVariableName: "id",
      defaultSelection: qe
    },
    {
      type: "findMany",
      operationName: ut,
      modelApiIdentifier: ie,
      defaultSelection: qe
    },
    {
      type: "findFirst",
      operationName: ut,
      modelApiIdentifier: ie,
      defaultSelection: qe
    },
    {
      type: "maybeFindFirst",
      operationName: ut,
      modelApiIdentifier: ie,
      defaultSelection: qe
    },
    {
      type: "findOne",
      operationName: ut,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ie,
      defaultSelection: qe
    },
    {
      type: "action",
      operationName: "createAmbiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
      isBulk: !1,
      isDeleter: !1,
      variables: { ambiguous: { required: !1, type: "CreateAmbiguousInput" } },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: qe
    },
    {
      type: "action",
      operationName: "bulkCreateAmbiguous",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: ie,
      modelSelectionField: ut,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAmbiguousInput!]" } },
      defaultSelection: qe
    },
    {
      type: "action",
      operationName: "updateAmbiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        ambiguous: { required: !1, type: "UpdateAmbiguousInput" }
      },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: qe
    },
    {
      type: "action",
      operationName: "bulkUpdateAmbiguous",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: ie,
      modelSelectionField: ut,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAmbiguousInput!]" } },
      defaultSelection: qe
    },
    {
      type: "action",
      operationName: "deleteAmbiguous",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteAmbiguous",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ie,
      modelSelectionField: ut,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Be = {
  __typename: !0,
  id: !0,
  createdAt: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, ae = "unambiguous", lt = "unambiguouss", Ts = xe(
  ae,
  lt,
  Be,
  [
    {
      type: "findOne",
      operationName: ae,
      modelApiIdentifier: ae,
      findByVariableName: "id",
      defaultSelection: Be
    },
    {
      type: "maybeFindOne",
      operationName: ae,
      modelApiIdentifier: ae,
      findByVariableName: "id",
      defaultSelection: Be
    },
    {
      type: "findMany",
      operationName: lt,
      modelApiIdentifier: ae,
      defaultSelection: Be
    },
    {
      type: "findFirst",
      operationName: lt,
      modelApiIdentifier: ae,
      defaultSelection: Be
    },
    {
      type: "maybeFindFirst",
      operationName: lt,
      modelApiIdentifier: ae,
      defaultSelection: Be
    },
    {
      type: "findOne",
      operationName: lt,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ae,
      defaultSelection: Be
    },
    {
      type: "action",
      operationName: "createUnambiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        unambiguous: { required: !1, type: "CreateUnambiguousInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Be
    },
    {
      type: "action",
      operationName: "bulkCreateUnambiguous",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: ae,
      modelSelectionField: lt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateUnambiguousInput!]" }
      },
      defaultSelection: Be
    },
    {
      type: "action",
      operationName: "updateUnambiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        unambiguous: { required: !1, type: "UpdateUnambiguousInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Be
    },
    {
      type: "action",
      operationName: "bulkUpdateUnambiguous",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: ae,
      modelSelectionField: lt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateUnambiguousInput!]" }
      },
      defaultSelection: Be
    },
    {
      type: "action",
      operationName: "deleteUnambiguous",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteUnambiguous",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ae,
      modelSelectionField: lt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Ci = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, Ri = "session", Cs = "sessions", Rs = xe(
  Ri,
  Cs,
  Ci,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: Ci,
      modelApiIdentifier: Ri
    }
  ]
);
var pa;
const xi = "production", xs = "development", Ds = Symbol.for("gadget/modelRelationships"), Fs = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class js {
  constructor(t) {
    var i;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[pa] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (o) => await Ni(
        this.connection,
        "globalShopifySync",
        {
          apiKeys: {
            value: o.apiKeys,
            required: !1,
            type: "[String!]"
          },
          syncSince: {
            value: o.syncSince,
            required: !1,
            type: "DateTime"
          },
          models: {
            value: o.models,
            required: !1,
            type: "[String!]"
          },
          force: {
            value: o.force,
            required: !1,
            type: "Boolean"
          },
          startReason: {
            value: o.startReason,
            required: !1,
            type: "String"
          }
        },
        null
      ),
      {
        type: "globalAction",
        operationName: "globalShopifySync",
        namespace: null,
        variables: {
          apiKeys: {
            required: !1,
            type: "[String!]"
          },
          syncSince: {
            required: !1,
            type: "DateTime"
          },
          models: {
            required: !1,
            type: "[String!]"
          },
          force: {
            required: !1,
            type: "Boolean"
          },
          startReason: {
            required: !1,
            type: "String"
          }
        }
      }
    ), this.test = Object.assign(
      async () => await Ni(
        this.connection,
        "test",
        {},
        null
      ),
      {
        type: "globalAction",
        operationName: "test",
        namespace: null,
        variables: {}
      }
    ), this.transaction = async (o) => await this.connection.transaction(o), this.getDirectUploadToken = async () => (await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
      requestPolicy: "network-only"
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? Fs() ?? xs).toLocaleLowerCase();
    let r;
    this.apiRoots[this.environment] ? r = this.apiRoots[this.environment] : r = `https://related-products-example${this.environment == xi ? "" : `--${this.environment}`}.gadget.app`;
    const n = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== xi) {
      const o = ({ forward: s }) => (u) => {
        const l = s(u);
        return Bn(
          l,
          Ft((f) => {
            try {
              if (typeof window < "u" && typeof CustomEvent == "function") {
                const d = new CustomEvent("gadget:devharness:graphqlresult", { detail: f });
                window.dispatchEvent(d);
              }
            } catch (d) {
              console.warn("[gadget] error dispatching gadget dev harness event", d);
            }
            return f;
          })
        );
      };
      n.beforeAll = [
        o,
        ...n.beforeAll ?? []
      ];
    }
    if (this.connection = new la({
      endpoint: new URL("api/graphql", r).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: n,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == re.APIKey && !((i = t == null ? void 0 : t.authenticationMode) != null && i.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new Ss(this.connection), this.session = new ws(this.connection), this.shopifyProduct = new Is(this.connection), this.shopifyProductImage = new ks(this.connection), this.shopifyProductOption = new Os(this.connection), this.shopifyProductVariant = new As(this.connection), this.shopifyShop = new Es(this.connection), this.productPairing = new Ns(this.connection), this.shopifySync = new Ps(this.connection), this.ambiguous = new _s(this.connection), this.unambiguous = new Ts(this.connection), this.currentSession = new Rs(this.connection), this.internal = {
      user: new $e("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new $e("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new $e("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new $e("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new $e("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new $e("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new $e("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new $e("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new $e("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new $e("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new $e("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(t, r, n) {
    const { data: i, error: o } = await this.connection.currentClient.query(t, r, n).toPromise();
    if (o)
      throw o;
    return i;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(t, r, n) {
    const { data: i, error: o } = await this.connection.currentClient.mutation(t, r, n).toPromise();
    if (o)
      throw o;
    return i;
  }
  /**
   * `fetch` function that works the same as the built-in `fetch` function, but automatically passes authentication information for this API client.
   *
   * @example
   * await api.fetch("https://myapp--development.gadget.app/foo/bar");
   *
   * @example
   * // fetch a relative URL from the endpoint this API client is configured to fetch from
   * await api.fetch("/foo/bar");
   **/
  async fetch(t, r = {}) {
    return await this.connection.fetch(t, r);
  }
  async enqueue(t, r, n) {
    Pn(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let i, o;
    return typeof n < "u" ? (i = r, o = n) : !t.variables || Object.keys(t.variables).length == 0 ? (i = {}, o = r) : (typeof r == "string" ? i = { id: r } : i = r, o = {}), await Go(this.connection, t, i, o);
  }
  /**
   * Returns a handle for a given background action id
   *
   * @param action The action that was enqueued
   * @param id The id of the background action
   *
   * @example
   * const handle = api.handle(api.widget.update, "app-job-12346");
   *
   * @example
   * const handle = api.handle(api.someGlobalAction, "app-job-56789");
   **/
  handle(t, r) {
    return new Pr(this.connection, t, r);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
pa = Ds;
var ya = {}, Ur = ge.createContext(ya), Ms = Ur.Provider;
Ur.Consumer;
Ur.displayName = "UrqlContext";
var ma = () => {
  var e = ge.useContext(Ur);
  if (e === ya && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, Dn = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, $s = (e, t) => e === t || !(!e || !t || e.key !== t.key), hn = (e, t) => {
  var r = {
    ...e,
    ...t,
    data: t.data !== void 0 || t.error ? t.data : e.data,
    fetching: !!t.fetching,
    stale: !!t.stale
  };
  return ((n, i) => {
    for (var o in n)
      if (!(o in i))
        return !0;
    for (var s in i)
      if (s === "operation" ? !$s(n[s], i[s]) : n[s] !== i[s])
        return !0;
    return !1;
  })(e, r) ? r : e;
}, qs = (e, t) => {
  for (var r = 0, n = t.length; r < n; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}, bn = ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function jr(e, t) {
  process.env.NODE_ENV !== "production" && bn && bn.ReactCurrentOwner && bn.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function Bs(e) {
  var t = ge.useRef(!0), r = ma(), [n, i] = ge.useState(Dn), o = ge.useCallback((s, u) => (jr(i, {
    ...Dn,
    fetching: !0
  }), Mr(vr(1)(Z((l) => !l.hasNext)(Pt((l) => {
    t.current && jr(i, {
      fetching: !1,
      stale: l.stale,
      data: l.data,
      error: l.error,
      extensions: l.extensions,
      operation: l.operation
    });
  })(r.executeMutation(cr(e, s), u || {})))))), [r, e, i]);
  return ge.useEffect(() => (t.current = !0, () => {
    t.current = !1;
  }), []), [n, o];
}
function Us(e, t) {
  var r = ge.useRef(void 0);
  return ge.useMemo(() => {
    var n = cr(e, t);
    return r.current !== void 0 && r.current.key === n.key ? r.current : (r.current = n, n);
  }, [e, t]);
}
var Vs = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    e.operations$ && _t((n) => {
      n.kind === "teardown" && t.has(n.key) && (t.delete(n.key), r.delete(n.key));
    })(e.operations$), e._react = {
      get: (n) => r.get(n),
      set(n, i) {
        t.delete(n), r.set(n, i);
      },
      dispose(n) {
        t.add(n);
      }
    };
  }
  return e._react;
}, Gs = (e, t) => e.suspense && (!t || t.suspense !== !1);
function Ls(e) {
  var t = ma(), r = Vs(t), n = Gs(t, e.context), i = Us(e.query, e.variables), o = ge.useMemo(() => {
    if (e.pause)
      return null;
    var m = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return n ? Pt((h) => {
      r.set(i.key, h);
    })(m) : m;
  }, [r, t, i, n, e.pause, e.requestPolicy, e.context]), s = ge.useCallback((m, h) => {
    if (!m)
      return {
        fetching: !1
      };
    var v = r.get(i.key);
    if (v) {
      if (h && v != null && "then" in v)
        throw v;
    } else {
      var E, F = _t((k) => {
        v = k, E && E(v);
      })(qi(() => h && !E || !v)(m));
      if (v == null && h) {
        var D = new Promise((k) => {
          E = k;
        });
        throw r.set(i.key, D), D;
      } else
        F.unsubscribe();
    }
    return v || {
      fetching: !0
    };
  }, [r, i]), u = [t, i, e.requestPolicy, e.context, e.pause], [l, f] = ge.useState(() => [o, hn(Dn, s(o, n)), u]), d = l[1];
  o !== l[0] && qs(l[2], u) && f([o, d = hn(l[1], s(o, n)), u]), ge.useEffect(() => {
    var m = l[0], h = l[2][1], v = !1, E = (D) => {
      v = !0, jr(f, (k) => {
        var q = hn(k[1], D);
        return k[1] !== q ? [k[0], q, k[2]] : k;
      });
    };
    if (m) {
      var F = _t(E)(Mn(() => {
        E({
          fetching: !1
        });
      })(m));
      return v || E({
        fetching: !0
      }), () => {
        r.dispose(h.key), F.unsubscribe();
      };
    } else
      E({
        fetching: !1
      });
  }, [r, l[0], l[2][1]]);
  var y = ge.useCallback((m) => {
    var h = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...m
    };
    jr(f, (v) => [n ? Pt((E) => {
      r.set(i.key, E);
    })(t.executeQuery(i, h)) : t.executeQuery(i, h), v[1], u]);
  }, [t, r, i, n, s, e.requestPolicy, e.context]);
  return [d, y];
}
const Zn = ve.createContext(void 0), Ws = ve.createContext(void 0), zs = "/", Ks = "signOut", Ys = "/";
function Js(e) {
  let t, r;
  if ("api" in e) {
    if (!Na(e.api))
      throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    t = e.api, r = e.api.connection.currentClient;
  } else if (e.value)
    r = e.value;
  else
    throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
  r.suspense = !0;
  let n = zs, i = Ks, o = Ys;
  if ("auth" in e) {
    const { auth: s } = e;
    s != null && s.signInPath && (n = s.signInPath), s != null && s.signOutActionApiIdentifier && (i = s.signOutActionApiIdentifier), s != null && s.redirectOnSuccessfulSignInPath && (o = s.redirectOnSuccessfulSignInPath);
  }
  return ve.createElement(
    Zn.Provider,
    { value: r },
    ve.createElement(
      Ws.Provider,
      { value: {
        api: t,
        navigate: e.navigate,
        auth: {
          signInPath: n,
          signOutActionApiIdentifier: i,
          redirectOnSuccessfulSignInPath: o
        }
      } },
      ve.createElement(Ms, { value: r }, e.children)
    )
  );
}
const ha = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Hs = (e, t) => {
  let r = "";
  return e !== void 0 ? r = `[Network] ${e.message}` : t !== void 0 ? t.forEach((n) => {
    r += `[GraphQL] ${n.message}
`;
  }) : r = "Unknown error", r.trim();
}, Qs = (e) => typeof e == "string" ? new hr(e) : e != null && e.message && !e.code ? new hr(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class Et extends Error {
  /** @private */
  static forClientSideError(t, r) {
    return new Et({
      executionErrors: [t],
      response: r
    });
  }
  /** @private */
  static forErrorsResponse(t, r) {
    return new Et({
      executionErrors: t.map(Gn),
      response: r
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new Et({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, r, n = !1) {
    const i = _o(t, r);
    let o = Et.forMaybeCombinedError(t.error);
    return !o && i && !n && (o = Et.forClientSideError(i)), o;
  }
  constructor({ networkError: t, executionErrors: r, response: n }) {
    const i = (r || []).map(Qs), o = Hs(t, i);
    super(o), Object.defineProperty(this, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "executionErrors", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "networkError", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "graphQLErrors", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "response", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.message = o, this.executionErrors = i, this.graphQLErrors = i, this.networkError = t, this.response = n;
  }
  /** Class name of this error -- always `ErrorWrapper` */
  get name() {
    return "ErrorWrapper";
  }
  toString() {
    return this.message;
  }
  /**
   * A list of errors the backend reported for specific fields being invalid for the records touched by an action. Is a shortcut for accessing the validation errors of a `GadgetInvalidRecordError` if that's what is in the `executionErrors`.
   **/
  get validationErrors() {
    const t = this.executionErrors.find((r) => r.code == "GGT_INVALID_RECORD");
    return (t == null ? void 0 : t.validationErrors) ?? null;
  }
}
const Xs = (e) => {
  const { context: t, suspense: r, ...n } = e ?? {}, i = Tr(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...n,
    context: i
  };
}, Zs = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), eu = (e) => {
  if (!Mi(Zn))
    throw new Error(ha);
  const t = Xs(e);
  return Ls(t);
};
var tu = typeof Element < "u", ru = typeof Map == "function", nu = typeof Set == "function", iu = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function _r(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, i;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!_r(e[n], t[n]))
          return !1;
      return !0;
    }
    var o;
    if (ru && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!_r(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (nu && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (iu && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (i = Object.keys(e), r = i.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[n]))
        return !1;
    if (tu && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !_r(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var au = function(t, r) {
  try {
    return _r(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const ou = /* @__PURE__ */ Oa(au), su = (e) => {
  const t = $i();
  return e ? (t.current === void 0 || !ou(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, uu = (e) => {
  if (!Mi(Zn))
    throw new Error(ha);
  return Bs(e);
}, lu = (e, t) => {
  const r = su(t), n = Tr(() => Hn(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, r), [e, r]), [i, o] = eu(Zs(n, t));
  return [Tr(() => {
    const u = [e.findMany.operationName];
    let l = i.data;
    if (l) {
      const d = Bt(i.data, u);
      if (d) {
        const y = br(i, d);
        l = Ut.boot(e, y, d);
      }
    }
    const f = Et.errorIfDataAbsent(i, u, t == null ? void 0 : t.pause);
    return { ...i, data: l, error: f };
  }, [e, t == null ? void 0 : t.pause, i]), o];
};
var Fn = { exports: {} }, or = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Di;
function cu() {
  if (Di)
    return or;
  Di = 1;
  var e = ve, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, f) {
    var d, y = {}, m = null, h = null;
    f !== void 0 && (m = "" + f), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (d in l)
      n.call(l, d) && !o.hasOwnProperty(d) && (y[d] = l[d]);
    if (u && u.defaultProps)
      for (d in l = u.defaultProps, l)
        y[d] === void 0 && (y[d] = l[d]);
    return { $$typeof: t, type: u, key: m, ref: h, props: y, _owner: i.current };
  }
  return or.Fragment = r, or.jsx = s, or.jsxs = s, or;
}
var Er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi;
function du() {
  return Fi || (Fi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ve, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = Symbol.iterator, E = "@@iterator";
    function F(a) {
      if (a === null || typeof a != "object")
        return null;
      var c = v && a[v] || a[E];
      return typeof c == "function" ? c : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(a) {
      {
        for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
          p[g - 1] = arguments[g];
        q("error", a, p);
      }
    }
    function q(a, c, p) {
      {
        var g = D.ReactDebugCurrentFrame, O = g.getStackAddendum();
        O !== "" && (c += "%s", p = p.concat([O]));
        var A = p.map(function(I) {
          return String(I);
        });
        A.unshift("Warning: " + c), Function.prototype.apply.call(console[a], console, A);
      }
    }
    var b = !1, P = !1, S = !1, B = !1, Ne = !1, Pe;
    Pe = Symbol.for("react.module.reference");
    function De(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === o || Ne || a === i || a === f || a === d || B || a === h || b || P || S || typeof a == "object" && a !== null && (a.$$typeof === m || a.$$typeof === y || a.$$typeof === s || a.$$typeof === u || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === Pe || a.getModuleId !== void 0));
    }
    function Ze(a, c, p) {
      var g = a.displayName;
      if (g)
        return g;
      var O = c.displayName || c.name || "";
      return O !== "" ? p + "(" + O + ")" : p;
    }
    function Y(a) {
      return a.displayName || "Context";
    }
    function V(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            var c = a;
            return Y(c) + ".Consumer";
          case s:
            var p = a;
            return Y(p._context) + ".Provider";
          case l:
            return Ze(a, a.render, "ForwardRef");
          case y:
            var g = a.displayName || null;
            return g !== null ? g : V(a.type) || "Memo";
          case m: {
            var O = a, A = O._payload, I = O._init;
            try {
              return V(I(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, j = 0, M, R, G, we, $, _e, Fe;
    function Ge() {
    }
    Ge.__reactDisabledLog = !0;
    function Le() {
      {
        if (j === 0) {
          M = console.log, R = console.info, G = console.warn, we = console.error, $ = console.group, _e = console.groupCollapsed, Fe = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        j++;
      }
    }
    function J() {
      {
        if (j--, j === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, a, {
              value: M
            }),
            info: N({}, a, {
              value: R
            }),
            warn: N({}, a, {
              value: G
            }),
            error: N({}, a, {
              value: we
            }),
            group: N({}, a, {
              value: $
            }),
            groupCollapsed: N({}, a, {
              value: _e
            }),
            groupEnd: N({}, a, {
              value: Fe
            })
          });
        }
        j < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = D.ReactCurrentDispatcher, ot;
    function je(a, c, p) {
      {
        if (ot === void 0)
          try {
            throw Error();
          } catch (O) {
            var g = O.stack.trim().match(/\n( *(at )?)/);
            ot = g && g[1] || "";
          }
        return `
` + ot + a;
      }
    }
    var yt = !1, et;
    {
      var Vr = typeof WeakMap == "function" ? WeakMap : Map;
      et = new Vr();
    }
    function Gt(a, c) {
      if (!a || yt)
        return "";
      {
        var p = et.get(a);
        if (p !== void 0)
          return p;
      }
      var g;
      yt = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = L.current, L.current = null, Le();
      try {
        if (c) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (te) {
              g = te;
            }
            Reflect.construct(a, [], I);
          } else {
            try {
              I.call();
            } catch (te) {
              g = te;
            }
            a.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            g = te;
          }
          a();
        }
      } catch (te) {
        if (te && g && typeof te.stack == "string") {
          for (var w = te.stack.split(`
`), U = g.stack.split(`
`), _ = w.length - 1, T = U.length - 1; _ >= 1 && T >= 0 && w[_] !== U[T]; )
            T--;
          for (; _ >= 1 && T >= 0; _--, T--)
            if (w[_] !== U[T]) {
              if (_ !== 1 || T !== 1)
                do
                  if (_--, T--, T < 0 || w[_] !== U[T]) {
                    var W = `
` + w[_].replace(" at new ", " at ");
                    return a.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", a.displayName)), typeof a == "function" && et.set(a, W), W;
                  }
                while (_ >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        yt = !1, L.current = A, J(), Error.prepareStackTrace = O;
      }
      var ke = a ? a.displayName || a.name : "", rr = ke ? je(ke) : "";
      return typeof a == "function" && et.set(a, rr), rr;
    }
    function Gr(a, c, p) {
      return Gt(a, !1);
    }
    function Lr(a) {
      var c = a.prototype;
      return !!(c && c.isReactComponent);
    }
    function tt(a, c, p) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Gt(a, Lr(a));
      if (typeof a == "string")
        return je(a);
      switch (a) {
        case f:
          return je("Suspense");
        case d:
          return je("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return Gr(a.render);
          case y:
            return tt(a.type, c, p);
          case m: {
            var g = a, O = g._payload, A = g._init;
            try {
              return tt(A(O), c, p);
            } catch {
            }
          }
        }
      return "";
    }
    var rt = Object.prototype.hasOwnProperty, Lt = {}, Wt = D.ReactDebugCurrentFrame;
    function nt(a) {
      if (a) {
        var c = a._owner, p = tt(a.type, a._source, c ? c.type : null);
        Wt.setExtraStackFrame(p);
      } else
        Wt.setExtraStackFrame(null);
    }
    function Wr(a, c, p, g, O) {
      {
        var A = Function.call.bind(rt);
        for (var I in a)
          if (A(a, I)) {
            var w = void 0;
            try {
              if (typeof a[I] != "function") {
                var U = Error((g || "React class") + ": " + p + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              w = a[I](c, I, g, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              w = _;
            }
            w && !(w instanceof Error) && (nt(O), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", p, I, typeof w), nt(null)), w instanceof Error && !(w.message in Lt) && (Lt[w.message] = !0, nt(O), k("Failed %s type: %s", p, w.message), nt(null));
          }
      }
    }
    var zr = Array.isArray;
    function mt(a) {
      return zr(a);
    }
    function Kr(a) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, p = c && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return p;
      }
    }
    function Yr(a) {
      try {
        return zt(a), !1;
      } catch {
        return !0;
      }
    }
    function zt(a) {
      return "" + a;
    }
    function Kt(a) {
      if (Yr(a))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kr(a)), zt(a);
    }
    var Me = D.ReactCurrentOwner, Jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Yt, Jt, ht;
    ht = {};
    function Hr(a) {
      if (rt.call(a, "ref")) {
        var c = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Qr(a) {
      if (rt.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Xr(a, c) {
      if (typeof a.ref == "string" && Me.current && c && Me.current.stateNode !== c) {
        var p = V(Me.current.type);
        ht[p] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Me.current.type), a.ref), ht[p] = !0);
      }
    }
    function Zr(a, c) {
      {
        var p = function() {
          Yt || (Yt = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function en(a, c) {
      {
        var p = function() {
          Jt || (Jt = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var tn = function(a, c, p, g, O, A, I) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: c,
        ref: p,
        props: I,
        // Record the component responsible for creating this element.
        _owner: A
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function rn(a, c, p, g, O) {
      {
        var A, I = {}, w = null, U = null;
        p !== void 0 && (Kt(p), w = "" + p), Qr(c) && (Kt(c.key), w = "" + c.key), Hr(c) && (U = c.ref, Xr(c, O));
        for (A in c)
          rt.call(c, A) && !Jr.hasOwnProperty(A) && (I[A] = c[A]);
        if (a && a.defaultProps) {
          var _ = a.defaultProps;
          for (A in _)
            I[A] === void 0 && (I[A] = _[A]);
        }
        if (w || U) {
          var T = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          w && Zr(I, T), U && en(I, T);
        }
        return tn(a, w, U, O, g, Me.current, I);
      }
    }
    var bt = D.ReactCurrentOwner, Ht = D.ReactDebugCurrentFrame;
    function Ie(a) {
      if (a) {
        var c = a._owner, p = tt(a.type, a._source, c ? c.type : null);
        Ht.setExtraStackFrame(p);
      } else
        Ht.setExtraStackFrame(null);
    }
    var gt;
    gt = !1;
    function vt(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Qt() {
      {
        if (bt.current) {
          var a = V(bt.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function nn(a) {
      {
        if (a !== void 0) {
          var c = a.fileName.replace(/^.*[\\\/]/, ""), p = a.lineNumber;
          return `

Check your code at ` + c + ":" + p + ".";
        }
        return "";
      }
    }
    var Xt = {};
    function an(a) {
      {
        var c = Qt();
        if (!c) {
          var p = typeof a == "string" ? a : a.displayName || a.name;
          p && (c = `

Check the top-level render call using <` + p + ">.");
        }
        return c;
      }
    }
    function Zt(a, c) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var p = an(c);
        if (Xt[p])
          return;
        Xt[p] = !0;
        var g = "";
        a && a._owner && a._owner !== bt.current && (g = " It was passed a child from " + V(a._owner.type) + "."), Ie(a), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, g), Ie(null);
      }
    }
    function er(a, c) {
      {
        if (typeof a != "object")
          return;
        if (mt(a))
          for (var p = 0; p < a.length; p++) {
            var g = a[p];
            vt(g) && Zt(g, c);
          }
        else if (vt(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var O = F(a);
          if (typeof O == "function" && O !== a.entries)
            for (var A = O.call(a), I; !(I = A.next()).done; )
              vt(I.value) && Zt(I.value, c);
        }
      }
    }
    function on(a) {
      {
        var c = a.type;
        if (c == null || typeof c == "string")
          return;
        var p;
        if (typeof c == "function")
          p = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === y))
          p = c.propTypes;
        else
          return;
        if (p) {
          var g = V(c);
          Wr(p, a.props, "prop", g, a);
        } else if (c.PropTypes !== void 0 && !gt) {
          gt = !0;
          var O = V(c);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sn(a) {
      {
        for (var c = Object.keys(a.props), p = 0; p < c.length; p++) {
          var g = c[p];
          if (g !== "children" && g !== "key") {
            Ie(a), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Ie(null);
            break;
          }
        }
        a.ref !== null && (Ie(a), k("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    function tr(a, c, p, g, O, A) {
      {
        var I = De(a);
        if (!I) {
          var w = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = nn(O);
          U ? w += U : w += Qt();
          var _;
          a === null ? _ = "null" : mt(a) ? _ = "array" : a !== void 0 && a.$$typeof === t ? (_ = "<" + (V(a.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof a, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, w);
        }
        var T = rn(a, c, p, O, A);
        if (T == null)
          return T;
        if (I) {
          var W = c.children;
          if (W !== void 0)
            if (g)
              if (mt(W)) {
                for (var ke = 0; ke < W.length; ke++)
                  er(W[ke], a);
                Object.freeze && Object.freeze(W);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              er(W, a);
        }
        return a === n ? sn(T) : on(T), T;
      }
    }
    function un(a, c, p) {
      return tr(a, c, p, !0);
    }
    function ln(a, c, p) {
      return tr(a, c, p, !1);
    }
    var cn = ln, dn = un;
    Er.Fragment = n, Er.jsx = cn, Er.jsxs = dn;
  }()), Er;
}
process.env.NODE_ENV === "production" ? Fn.exports = cu() : Fn.exports = du();
var ji = Fn.exports;
const fu = va(function({ open: e, onShow: t, onHide: r, children: n, ...i }, o) {
  const [s, u] = ur(), { titleBar: l, modalContent: f } = Sa.toArray(n).reduce(
    (y, m) => {
      const h = typeof m == "object" && "type" in m ? m.type : void 0;
      return h === "ui-title-bar" || typeof h == "object" && h.displayName === "ui-title-bar" ? {
        ...y,
        titleBar: m
      } : (y.modalContent.push(m), y);
    },
    { modalContent: [] }
  ), d = s ? ka.createPortal(f, s.content) : null;
  return Re(() => {
    s && (e ? s.show() : s.hide());
  }, [s, e]), Re(() => {
    if (!(!s || !t))
      return s.addEventListener("show", t), () => {
        s.removeEventListener("show", t);
      };
  }, [s, t]), Re(() => {
    if (!(!s || !r))
      return s.addEventListener("hide", r), () => {
        s.removeEventListener("hide", r);
      };
  }, [s, r]), Re(() => {
    if (s)
      return () => {
        s.hide();
      };
  }, [s]), /* @__PURE__ */ ji.jsxs(
    "ui-modal",
    {
      ...i,
      ref: (y) => {
        u(y), o && (typeof o == "function" ? o(y) : o.current = y);
      },
      children: [
        l,
        /* @__PURE__ */ ji.jsx("div", { children: d })
      ]
    }
  );
});
fu.displayName = "ui-modal";
const pu = new Proxy(
  {},
  {
    get(e, t) {
      throw Error(
        `shopify.${String(
          t
        )} can't be used in a server environment. You likely need to move this code into an Effect.`
      );
    }
  }
);
function yu() {
  if (typeof window > "u")
    return pu;
  if (!window.shopify)
    throw Error(
      "The shopify global is not defined. This likely means the App Bridge script tag was not added correctly to this page"
    );
  return window.shopify;
}
var dt;
(function(e) {
  e[e.Standalone = 0] = "Standalone", e[e.Embedded = 1] = "Embedded";
})(dt || (dt = {}));
const mu = `
  mutation ShopifyFetchOrInstallShop($shopifySessionToken: String!) {
    shopifyConnection {
      fetchOrInstallShop(shopifySessionToken: $shopifySessionToken) {
        isAuthenticated
        redirectToOauth
        missingScopes
      }
    }
  }
`, hu = wa(({ children: e, gadgetAppUrl: t, originalQueryParams: r, api: n, type: i, host: o, isReady: s, isRootFrameRequest: u }) => {
  const l = yu(), f = (r == null ? void 0 : r.has("hmac")) && (r == null ? void 0 : r.has("shop")), d = l.environment.embedded || l.environment.mobile, y = d && i === dt.Embedded, m = s && typeof o < "u" && !y, [h, v] = ur({
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !0,
    appBridge: l,
    isRootFrameRequest: !1
  }), [E, F] = ur(null), [D, k] = ur();
  Re(() => {
    l && l.idToken().then(F).catch(k);
  }, [l]), Re(() => {
    if (!E) {
      console.debug("[gadget-rsab] no app bridge, skipping client auth setup");
      return;
    }
    n.connection.setAuthenticationMode({
      custom: {
        async processFetch(Y, V) {
          const N = new Headers(V.headers);
          N.append("Authorization", `ShopifySessionToken ${E}`), V.headers ?? (V.headers = {}), N.forEach(function(j, M) {
            V.headers[M] = j;
          });
        },
        async processTransactionConnectionParams(Y) {
          Y.auth.shopifySessionToken = E;
        }
      }
    }), console.debug("[gadget-rsab] set up client auth for session tokens");
  }, [n.connection, E]);
  let q = !1, b = !1, P = [];
  const S = $i(!1), [{ data: B, fetching: Ne, error: Pe }, De] = uu(mu);
  B && (console.debug({ fetchOrInstallShopData: B }, "[gadget-rsab] fetched or installed shop data"), q = B.shopifyConnection.fetchOrInstallShop.redirectToOauth, b = B.shopifyConnection.fetchOrInstallShop.isAuthenticated, P = B.shopifyConnection.fetchOrInstallShop.missingScopes ?? []), Re(() => {
    S.current || E && (S.current = !0, De({ shopifySessionToken: E }).catch((Y) => {
      console.error({ err: Y }, "[gadget-rsab] error fetching or installing shop");
    }));
  }, [E, De]), Re(() => {
    if (!q || u)
      return;
    const Y = new URL("/api/connections/auth/shopify", t);
    Y.search = (r == null ? void 0 : r.toString()) ?? "";
    const V = Y.toString();
    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process", {
      appType: i,
      isInstallRequest: f,
      isEmbedded: d,
      redirectURL: V,
      gadgetAppUrl: t
    }), open(V, "_top");
  }, [t, u, r, q]);
  const Ze = (m || q || Ne) && !u;
  return Re(() => {
    const Y = {
      isAuthenticated: b,
      isEmbedded: d,
      canAuth: !!l,
      loading: Ze,
      appBridge: l,
      error: Pe || D,
      isRootFrameRequest: u
    };
    return console.debug("[gadget-rsab] context changed", Y), v(Y);
  }, [Ze, d, l, b, Pe, D, u]), Re(() => {
    if (P.length > 0 && !q) {
      const Y = new CustomEvent("gadget:devharness:rsab.shopifyManagedInstallation.missingScopes", {
        detail: {
          missingScopes: P
        }
      });
      globalThis.dispatchEvent(Y);
    }
  }, [q, P]), ve.createElement(ba.Provider, { value: h }, e);
}), bu = ({ isRootFrameRequest: e, children: t, query: r, gadgetAppUrl: n, type: i }) => {
  const o = (r == null ? void 0 : r.has("hmac")) && (r == null ? void 0 : r.has("shop")), s = o;
  return Re(() => {
    if (!s || e)
      return;
    const u = new URL("/api/connections/auth/shopify", n);
    u.search = (r == null ? void 0 : r.toString()) ?? "";
    const l = u.toString();
    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process in standalone mode or missing app bridge global", {
      appType: i,
      isInstallRequest: o,
      redirectURL: l,
      gadgetAppUrl: n
    }), window.location.assign(l);
  }, [n, e, r, s]), ve.createElement(ba.Provider, { value: {
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !1,
    appBridge: null,
    isRootFrameRequest: e
  } }, t);
}, gu = ({ type: e, children: t, api: r }) => {
  const n = !!(globalThis && globalThis.shopify), [i, o] = ur(null), s = !!i, { query: u } = i ?? {}, l = (u == null ? void 0 : u.get("host")) ?? void 0, f = e ?? dt.Embedded, d = Tr(() => u, [s]), y = !(u != null && u.has("hmac")) && !(u != null && u.has("shop")) && e == dt.Embedded, m = new URL(r.connection.options.endpoint).origin;
  if (Re(() => {
    o({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search)
    });
  }, []), console.debug("[gadget-rsab] provider rendering", {
    host: l,
    coalescedType: f,
    isReady: s
  }), f == dt.Embedded && !n && globalThis.top && globalThis.top !== globalThis.self) {
    let h;
    try {
      const v = document.referrer;
      h = new URL(v);
    } catch {
      const E = new CustomEvent("gadget:devharness:rsab.invalidReferrer", {
        detail: {
          url: document.referrer
        }
      });
      globalThis.dispatchEvent(E);
    }
    if (h && h.hostname === "admin.shopify.com")
      throw new Error("Expected app bridge to be defined in embedded context, but it was not. This is likely due to a missing script tag, see https://shopify.dev/docs/api/app-bridge-library");
  }
  if (f === dt.Embedded && globalThis.top === globalThis.self) {
    const h = new CustomEvent("gadget:devharness:rsab.embeddedInRootContext");
    globalThis.dispatchEvent(h);
  }
  return ve.createElement(Js, { api: r }, f === dt.Embedded && n ? ve.createElement(hu, { gadgetAppUrl: m, api: r, originalQueryParams: d, type: f, host: l, isReady: s, isRootFrameRequest: y }, t) : ve.createElement(bu, { isRootFrameRequest: y, query: u, type: f, gadgetAppUrl: m }, t));
}, ba = Ia({
  loading: !0,
  isEmbedded: !1,
  isAuthenticated: !1,
  canAuth: !1,
  appBridge: null,
  isRootFrameRequest: !1
}), ga = new js(), vu = () => {
  const [{ data: e }] = lu(ga.shopifyProduct);
  return /* @__PURE__ */ Cr.jsx(Cr.Fragment, { children: JSON.stringify(e) });
}, ku = () => /* @__PURE__ */ Cr.jsx(gu, { api: ga, shopifyApiKey: "deadbeef", children: /* @__PURE__ */ Cr.jsx(vu, {}) });
export {
  ku as A,
  vu as R,
  Iu as c,
  Oa as g
};
