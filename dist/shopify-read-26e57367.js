import * as Se from "react";
import we, { useMemo as hr, useContext as Gi, useRef as wn, forwardRef as ka, useState as Rr, Children as Aa, useEffect as je, memo as Oa, createContext as Na } from "react";
import Ea from "react-dom";
var Au = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var In = { exports: {} }, ar = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oi;
function _a() {
  if (oi)
    return ar;
  oi = 1;
  var e = we, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, f) {
    var d, y = {}, h = null, m = null;
    f !== void 0 && (h = "" + f), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (d in l)
      n.call(l, d) && !o.hasOwnProperty(d) && (y[d] = l[d]);
    if (u && u.defaultProps)
      for (d in l = u.defaultProps, l)
        y[d] === void 0 && (y[d] = l[d]);
    return { $$typeof: t, type: u, key: h, ref: m, props: y, _owner: i.current };
  }
  return ar.Fragment = r, ar.jsx = s, ar.jsxs = s, ar;
}
var or = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si;
function Ta() {
  return si || (si = 1, process.env.NODE_ENV !== "production" && function() {
    var e = we, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, N = "@@iterator";
    function F(a) {
      if (a === null || typeof a != "object")
        return null;
      var c = v && a[v] || a[N];
      return typeof c == "function" ? c : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(a) {
      {
        for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
          p[g - 1] = arguments[g];
        B("error", a, p);
      }
    }
    function B(a, c, p) {
      {
        var g = C.ReactDebugCurrentFrame, A = g.getStackAddendum();
        A !== "" && (c += "%s", p = p.concat([A]));
        var O = p.map(function(k) {
          return String(k);
        });
        O.unshift("Warning: " + c), Function.prototype.apply.call(console[a], console, O);
      }
    }
    var b = !1, P = !1, S = !1, U = !1, Ae = !1, Re;
    Re = Symbol.for("react.module.reference");
    function $e(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === o || Ae || a === i || a === f || a === d || U || a === m || b || P || S || typeof a == "object" && a !== null && (a.$$typeof === h || a.$$typeof === y || a.$$typeof === s || a.$$typeof === u || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === Re || a.getModuleId !== void 0));
    }
    function te(a, c, p) {
      var g = a.displayName;
      if (g)
        return g;
      var A = c.displayName || c.name || "";
      return A !== "" ? p + "(" + A + ")" : p;
    }
    function X(a) {
      return a.displayName || "Context";
    }
    function L(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
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
            return X(c) + ".Consumer";
          case s:
            var p = a;
            return X(p._context) + ".Provider";
          case l:
            return te(a, a.render, "ForwardRef");
          case y:
            var g = a.displayName || null;
            return g !== null ? g : L(a.type) || "Memo";
          case h: {
            var A = a, O = A._payload, k = A._init;
            try {
              return L(k(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, j = 0, M, x, G, Oe, $, xe, qe;
    function Ke() {
    }
    Ke.__reactDisabledLog = !0;
    function Ye() {
      {
        if (j === 0) {
          M = console.log, x = console.info, G = console.warn, Oe = console.error, $ = console.group, xe = console.groupCollapsed, qe = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Ke,
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
            log: E({}, a, {
              value: M
            }),
            info: E({}, a, {
              value: x
            }),
            warn: E({}, a, {
              value: G
            }),
            error: E({}, a, {
              value: Oe
            }),
            group: E({}, a, {
              value: $
            }),
            groupCollapsed: E({}, a, {
              value: xe
            }),
            groupEnd: E({}, a, {
              value: qe
            })
          });
        }
        j < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = C.ReactCurrentDispatcher, ct;
    function Be(a, c, p) {
      {
        if (ct === void 0)
          try {
            throw Error();
          } catch (A) {
            var g = A.stack.trim().match(/\n( *(at )?)/);
            ct = g && g[1] || "";
          }
        return `
` + ct + a;
      }
    }
    var bt = !1, nt;
    {
      var Wr = typeof WeakMap == "function" ? WeakMap : Map;
      nt = new Wr();
    }
    function Wt(a, c) {
      if (!a || bt)
        return "";
      {
        var p = nt.get(a);
        if (p !== void 0)
          return p;
      }
      var g;
      bt = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = W.current, W.current = null, Ye();
      try {
        if (c) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (re) {
              g = re;
            }
            Reflect.construct(a, [], k);
          } else {
            try {
              k.call();
            } catch (re) {
              g = re;
            }
            a.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            g = re;
          }
          a();
        }
      } catch (re) {
        if (re && g && typeof re.stack == "string") {
          for (var w = re.stack.split(`
`), q = g.stack.split(`
`), _ = w.length - 1, T = q.length - 1; _ >= 1 && T >= 0 && w[_] !== q[T]; )
            T--;
          for (; _ >= 1 && T >= 0; _--, T--)
            if (w[_] !== q[T]) {
              if (_ !== 1 || T !== 1)
                do
                  if (_--, T--, T < 0 || w[_] !== q[T]) {
                    var z = `
` + w[_].replace(" at new ", " at ");
                    return a.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", a.displayName)), typeof a == "function" && nt.set(a, z), z;
                  }
                while (_ >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        bt = !1, W.current = O, J(), Error.prepareStackTrace = A;
      }
      var Ee = a ? a.displayName || a.name : "", ir = Ee ? Be(Ee) : "";
      return typeof a == "function" && nt.set(a, ir), ir;
    }
    function zr(a, c, p) {
      return Wt(a, !1);
    }
    function Kr(a) {
      var c = a.prototype;
      return !!(c && c.isReactComponent);
    }
    function it(a, c, p) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Wt(a, Kr(a));
      if (typeof a == "string")
        return Be(a);
      switch (a) {
        case f:
          return Be("Suspense");
        case d:
          return Be("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return zr(a.render);
          case y:
            return it(a.type, c, p);
          case h: {
            var g = a, A = g._payload, O = g._init;
            try {
              return it(O(A), c, p);
            } catch {
            }
          }
        }
      return "";
    }
    var at = Object.prototype.hasOwnProperty, zt = {}, Kt = C.ReactDebugCurrentFrame;
    function ot(a) {
      if (a) {
        var c = a._owner, p = it(a.type, a._source, c ? c.type : null);
        Kt.setExtraStackFrame(p);
      } else
        Kt.setExtraStackFrame(null);
    }
    function Yr(a, c, p, g, A) {
      {
        var O = Function.call.bind(at);
        for (var k in a)
          if (O(a, k)) {
            var w = void 0;
            try {
              if (typeof a[k] != "function") {
                var q = Error((g || "React class") + ": " + p + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw q.name = "Invariant Violation", q;
              }
              w = a[k](c, k, g, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              w = _;
            }
            w && !(w instanceof Error) && (ot(A), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", p, k, typeof w), ot(null)), w instanceof Error && !(w.message in zt) && (zt[w.message] = !0, ot(A), I("Failed %s type: %s", p, w.message), ot(null));
          }
      }
    }
    var Jr = Array.isArray;
    function gt(a) {
      return Jr(a);
    }
    function Qr(a) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, p = c && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return p;
      }
    }
    function Hr(a) {
      try {
        return Yt(a), !1;
      } catch {
        return !0;
      }
    }
    function Yt(a) {
      return "" + a;
    }
    function Jt(a) {
      if (Hr(a))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qr(a)), Yt(a);
    }
    var Ue = C.ReactCurrentOwner, Xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qt, Ht, vt;
    vt = {};
    function Zr(a) {
      if (at.call(a, "ref")) {
        var c = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function en(a) {
      if (at.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function tn(a, c) {
      if (typeof a.ref == "string" && Ue.current && c && Ue.current.stateNode !== c) {
        var p = L(Ue.current.type);
        vt[p] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(Ue.current.type), a.ref), vt[p] = !0);
      }
    }
    function rn(a, c) {
      {
        var p = function() {
          Qt || (Qt = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function nn(a, c) {
      {
        var p = function() {
          Ht || (Ht = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var an = function(a, c, p, g, A, O, k) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: c,
        ref: p,
        props: k,
        // Record the component responsible for creating this element.
        _owner: O
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
        value: A
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function on(a, c, p, g, A) {
      {
        var O, k = {}, w = null, q = null;
        p !== void 0 && (Jt(p), w = "" + p), en(c) && (Jt(c.key), w = "" + c.key), Zr(c) && (q = c.ref, tn(c, A));
        for (O in c)
          at.call(c, O) && !Xr.hasOwnProperty(O) && (k[O] = c[O]);
        if (a && a.defaultProps) {
          var _ = a.defaultProps;
          for (O in _)
            k[O] === void 0 && (k[O] = _[O]);
        }
        if (w || q) {
          var T = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          w && rn(k, T), q && nn(k, T);
        }
        return an(a, w, q, A, g, Ue.current, k);
      }
    }
    var St = C.ReactCurrentOwner, Xt = C.ReactDebugCurrentFrame;
    function Ne(a) {
      if (a) {
        var c = a._owner, p = it(a.type, a._source, c ? c.type : null);
        Xt.setExtraStackFrame(p);
      } else
        Xt.setExtraStackFrame(null);
    }
    var wt;
    wt = !1;
    function It(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Zt() {
      {
        if (St.current) {
          var a = L(St.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function sn(a) {
      {
        if (a !== void 0) {
          var c = a.fileName.replace(/^.*[\\\/]/, ""), p = a.lineNumber;
          return `

Check your code at ` + c + ":" + p + ".";
        }
        return "";
      }
    }
    var er = {};
    function un(a) {
      {
        var c = Zt();
        if (!c) {
          var p = typeof a == "string" ? a : a.displayName || a.name;
          p && (c = `

Check the top-level render call using <` + p + ">.");
        }
        return c;
      }
    }
    function tr(a, c) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var p = un(c);
        if (er[p])
          return;
        er[p] = !0;
        var g = "";
        a && a._owner && a._owner !== St.current && (g = " It was passed a child from " + L(a._owner.type) + "."), Ne(a), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, g), Ne(null);
      }
    }
    function rr(a, c) {
      {
        if (typeof a != "object")
          return;
        if (gt(a))
          for (var p = 0; p < a.length; p++) {
            var g = a[p];
            It(g) && tr(g, c);
          }
        else if (It(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var A = F(a);
          if (typeof A == "function" && A !== a.entries)
            for (var O = A.call(a), k; !(k = O.next()).done; )
              It(k.value) && tr(k.value, c);
        }
      }
    }
    function ln(a) {
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
          var g = L(c);
          Yr(p, a.props, "prop", g, a);
        } else if (c.PropTypes !== void 0 && !wt) {
          wt = !0;
          var A = L(c);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cn(a) {
      {
        for (var c = Object.keys(a.props), p = 0; p < c.length; p++) {
          var g = c[p];
          if (g !== "children" && g !== "key") {
            Ne(a), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Ne(null);
            break;
          }
        }
        a.ref !== null && (Ne(a), I("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    function nr(a, c, p, g, A, O) {
      {
        var k = $e(a);
        if (!k) {
          var w = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var q = sn(A);
          q ? w += q : w += Zt();
          var _;
          a === null ? _ = "null" : gt(a) ? _ = "array" : a !== void 0 && a.$$typeof === t ? (_ = "<" + (L(a.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof a, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, w);
        }
        var T = on(a, c, p, A, O);
        if (T == null)
          return T;
        if (k) {
          var z = c.children;
          if (z !== void 0)
            if (g)
              if (gt(z)) {
                for (var Ee = 0; Ee < z.length; Ee++)
                  rr(z[Ee], a);
                Object.freeze && Object.freeze(z);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              rr(z, a);
        }
        return a === n ? cn(T) : ln(T), T;
      }
    }
    function dn(a, c, p) {
      return nr(a, c, p, !0);
    }
    function fn(a, c, p) {
      return nr(a, c, p, !1);
    }
    var pn = fn, yn = dn;
    or.Fragment = n, or.jsx = pn, or.jsxs = yn;
  }()), or;
}
process.env.NODE_ENV === "production" ? In.exports = _a() : In.exports = Ta();
var xr = In.exports;
const Ca = (e) => e && "connection" in e && e.connection && "endpoint" in e.connection;
var Bn = () => {
}, Ie = Bn;
function ze(e) {
  return {
    tag: 0,
    0: e
  };
}
function Sr(e) {
  return {
    tag: 1,
    0: e
  };
}
var Ra = (e) => e;
function Z(e) {
  return (t) => (r) => {
    var n = Ie;
    t((i) => {
      i === 0 ? r(0) : i.tag === 0 ? (n = i[0], r(i)) : e(i[0]) ? r(i) : n(0);
    });
  };
}
function $t(e) {
  return (t) => (r) => t((n) => {
    n === 0 || n.tag === 0 ? r(n) : r(Sr(e(n[0])));
  });
}
function mr(e) {
  return (t) => (r) => {
    var n = [], i = Ie, o = !1, s = !1;
    t((u) => {
      s || (u === 0 ? (s = !0, n.length || r(0)) : u.tag === 0 ? i = u[0] : (o = !1, function(f) {
        var d = Ie;
        f((y) => {
          if (y === 0) {
            if (n.length) {
              var h = n.indexOf(d);
              h > -1 && (n = n.slice()).splice(h, 1), n.length || (s ? r(0) : o || (o = !0, i(0)));
            }
          } else
            y.tag === 0 ? (n.push(d = y[0]), d(0)) : n.length && (r(y), d(0));
        });
      }(e(u[0])), o || (o = !0, i(0))));
    }), r(ze((u) => {
      if (u === 1) {
        s || (s = !0, i(1));
        for (var l = 0, f = n, d = n.length; l < d; l++)
          f[l](1);
        n.length = 0;
      } else {
        !s && !o ? (o = !0, i(0)) : o = !1;
        for (var y = 0, h = n, m = n.length; y < m; y++)
          h[y](0);
      }
    }));
  };
}
function xa(e) {
  return mr(Ra)(e);
}
function qt(e) {
  return xa(ja(e));
}
function Un(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0), e();
        else if (i.tag === 0) {
          var o = i[0];
          r(ze((s) => {
            s === 1 ? (n = !0, o(1), e()) : o(s);
          }));
        } else
          r(i);
    });
  };
}
function Ct(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0);
        else if (i.tag === 0) {
          var o = i[0];
          r(ze((s) => {
            s === 1 && (n = !0), o(s);
          }));
        } else
          e(i[0]), r(i);
    });
  };
}
function ui(e) {
  return (t) => (r) => t((n) => {
    n === 0 ? r(0) : n.tag === 0 ? (r(n), e()) : r(n);
  });
}
function br(e) {
  var t = [], r = Ie, n = !1;
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
    }), i(ze((o) => {
      if (o === 1) {
        var s = t.indexOf(i);
        s > -1 && (t = t.slice()).splice(s, 1), t.length || r(1);
      } else
        n || (n = !0, r(0));
    }));
  };
}
function li(e) {
  return (t) => (r) => {
    var n = Ie, i = Ie, o = !1, s = !1, u = !1, l = !1;
    t((f) => {
      l || (f === 0 ? (l = !0, u || r(0)) : f.tag === 0 ? n = f[0] : (u && (i(1), i = Ie), o ? o = !1 : (o = !0, n(0)), function(y) {
        u = !0, y((h) => {
          u && (h === 0 ? (u = !1, l ? r(0) : o || (o = !0, n(0))) : h.tag === 0 ? (s = !1, (i = h[0])(0)) : (r(h), s ? s = !1 : i(0)));
        });
      }(e(f[0]))));
    }), r(ze((f) => {
      f === 1 ? (l || (l = !0, n(1)), u && (u = !1, i(1))) : (!l && !o && (o = !0, n(0)), u && !s && (s = !0, i(0)));
    }));
  };
}
function wr(e) {
  return (t) => (r) => {
    var n = Ie, i = !1, o = 0;
    t((s) => {
      i || (s === 0 ? (i = !0, r(0)) : s.tag === 0 ? e <= 0 ? (i = !0, r(0), s[0](1)) : n = s[0] : o++ < e ? (r(s), !i && o >= e && (i = !0, r(0), n(1))) : r(s));
    }), r(ze((s) => {
      s === 1 && !i ? (i = !0, n(1)) : s === 0 && !i && o < e && n(0);
    }));
  };
}
function Vn(e) {
  return (t) => (r) => {
    var n = Ie, i = Ie, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, i(1), r(0)) : s.tag === 0 ? (n = s[0], e((u) => {
        u === 0 || (u.tag === 0 ? (i = u[0])(0) : (o = !0, i(1), n(1), r(0)));
      })) : r(s));
    }), r(ze((s) => {
      s === 1 && !o ? (o = !0, n(1), i(1)) : o || n(0);
    }));
  };
}
function Li(e, t) {
  return (r) => (n) => {
    var i = Ie, o = !1;
    r((s) => {
      o || (s === 0 ? (o = !0, n(0)) : s.tag === 0 ? (i = s[0], n(s)) : e(s[0]) ? n(s) : (o = !0, t && n(s), n(0), i(1)));
    });
  };
}
function Da(e) {
  return (t) => e()(t);
}
function Wi(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), n = !1, i = !1, o = !1, s;
    t(ze(async (u) => {
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
              o = !1, t(Sr(s.value));
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
function Fa(e) {
  return e[Symbol.asyncIterator] ? Wi(e) : (t) => {
    var r = e[Symbol.iterator](), n = !1, i = !1, o = !1, s;
    t(ze((u) => {
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
              o = !1, t(Sr(s.value));
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
var ja = Fa;
function cr(e) {
  return (t) => {
    var r = !1;
    t(ze((n) => {
      n === 1 ? r = !0 : r || (r = !0, t(Sr(e)), t(0));
    }));
  };
}
function Gn(e) {
  return (t) => {
    var r = !1, n = e({
      next(i) {
        r || t(Sr(i));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(ze((i) => {
      i === 1 && !r && (r = !0, n());
    }));
  };
}
function ci() {
  var e, t;
  return {
    source: br(Gn((r) => (e = r.next, t = r.complete, Bn))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function di(e) {
  return Gn((t) => (e.then((r) => {
    Promise.resolve(r).then(() => {
      t.next(r), t.complete();
    });
  }), Bn));
}
function Rt(e) {
  return (t) => {
    var r = Ie, n = !1;
    return t((i) => {
      i === 0 ? n = !0 : i.tag === 0 ? (r = i[0])(0) : n || (e(i[0]), r(0));
    }), {
      unsubscribe() {
        n || (n = !0, r(1));
      }
    };
  };
}
function Ma(e) {
  Rt((t) => {
  })(e);
}
var hn = {
  done: !0
}, $a = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], r = !1, n = Ie, i;
    return e((o) => {
      r || (o === 0 ? (i && (i = i(hn)), r = !0) : o.tag === 0 ? (n = o[0])(0) : i ? i = i({
        value: o[0],
        done: !1
      }) : t.push(o[0]));
    }), {
      async next() {
        return r && !t.length ? hn : (!r && t.length <= 1 && n(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((o) => i = o));
      },
      async return() {
        return r || (i = n(1)), r = !0, hn;
      }
    };
  }
});
function Br(e) {
  return new Promise((t) => {
    var r = Ie, n;
    e((i) => {
      i === 0 ? Promise.resolve(n).then(t) : i.tag === 0 ? (r = i[0])(0) : (n = i[0], r(0));
    });
  });
}
var Ln = (...e) => {
  for (var t = e[0], r = 1, n = e.length; r < n; r++)
    t = e[r](t);
  return t;
}, Mt = {
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
class gr extends Error {
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
var K, R;
function ee(e) {
  return new gr(`Syntax Error: Unexpected token at ${R} in ${e}`);
}
function Te(e) {
  if (e.lastIndex = R, e.test(K))
    return K.slice(R, R = e.lastIndex);
}
var Ar = / +(?=[^\s])/y;
function qa(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, o = t.length - 1, s = 0; s < t.length; s++)
    Ar.lastIndex = 0, Ar.test(t[s]) && (s && (!n || Ar.lastIndex < n) && (n = Ar.lastIndex), i = i || s, o = s);
  for (var u = i; u <= o; u++)
    u !== i && (r += `
`), r += t[u].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function D() {
  for (var e = 0 | K.charCodeAt(R++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | K.charCodeAt(R++))
    if (e === 35)
      for (; (e = K.charCodeAt(R++)) !== 10 && e !== 13; )
        ;
  R--;
}
var zi = /[_A-Za-z]\w*/y;
function rt() {
  var e;
  if (e = Te(zi))
    return {
      kind: "Name",
      value: e
    };
}
var Ba = /(?:null|true|false)/y, Ki = /\$[_A-Za-z]\w*/y, Ua = /-?\d+/y, Va = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Ga = /\\/g, La = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Wa = /"(?:"|[^\r\n]*?[^\\]")/y;
function Dr(e) {
  var t, r;
  if (r = Te(Ba))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = Te(Ki)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = Te(Ua)) {
    var n = r;
    (r = Te(Va)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = Te(zi))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = Te(La))
    t = {
      kind: "StringValue",
      value: qa(r.slice(3, -3)),
      block: !0
    };
  else if (r = Te(Wa))
    t = {
      kind: "StringValue",
      value: Ga.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(o) {
    var s;
    if (K.charCodeAt(R) === 91) {
      R++, D();
      for (var u = []; s = Dr(o); )
        u.push(s);
      if (K.charCodeAt(R++) !== 93)
        throw ee("ListValue");
      return D(), {
        kind: "ListValue",
        values: u
      };
    }
  }(e) || function(o) {
    if (K.charCodeAt(R) === 123) {
      R++, D();
      for (var s = [], u; u = rt(); ) {
        if (D(), K.charCodeAt(R++) !== 58)
          throw ee("ObjectField");
        D();
        var l = Dr(o);
        if (!l)
          throw ee("ObjectField");
        s.push({
          kind: "ObjectField",
          name: u,
          value: l
        });
      }
      if (K.charCodeAt(R++) !== 125)
        throw ee("ObjectValue");
      return D(), {
        kind: "ObjectValue",
        fields: s
      };
    }
  }(e))
    return t;
  return D(), t;
}
function Yi(e) {
  var t = [];
  if (D(), K.charCodeAt(R) === 40) {
    R++, D();
    for (var r; r = rt(); ) {
      if (D(), K.charCodeAt(R++) !== 58)
        throw ee("Argument");
      D();
      var n = Dr(e);
      if (!n)
        throw ee("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || K.charCodeAt(R++) !== 41)
      throw ee("Argument");
    D();
  }
  return t;
}
function Bt(e) {
  var t = [];
  for (D(); K.charCodeAt(R) === 64; ) {
    R++;
    var r = rt();
    if (!r)
      throw ee("Directive");
    D(), t.push({
      kind: "Directive",
      name: r,
      arguments: Yi(e)
    });
  }
  return t;
}
function za() {
  var e = rt();
  if (e) {
    D();
    var t;
    if (K.charCodeAt(R) === 58) {
      if (R++, D(), t = e, !(e = rt()))
        throw ee("Field");
      D();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: Yi(!1),
      directives: Bt(!1),
      selectionSet: Ur()
    };
  }
}
function Ji() {
  var e;
  if (D(), K.charCodeAt(R) === 91) {
    R++, D();
    var t = Ji();
    if (!t || K.charCodeAt(R++) !== 93)
      throw ee("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = rt())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw ee("NamedType");
  return D(), K.charCodeAt(R) === 33 ? (R++, D(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Ka = /on/y;
function Qi() {
  if (Te(Ka)) {
    D();
    var e = rt();
    if (!e)
      throw ee("NamedType");
    return D(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Ya = /\.\.\./y;
function Ja() {
  if (Te(Ya)) {
    D();
    var e = R, t;
    if ((t = rt()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Bt(!1)
      };
    R = e;
    var r = Qi(), n = Bt(!1), i = Ur();
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
function Ur() {
  var e;
  if (D(), K.charCodeAt(R) === 123) {
    R++, D();
    for (var t = []; e = Ja() || za(); )
      t.push(e);
    if (!t.length || K.charCodeAt(R++) !== 125)
      throw ee("SelectionSet");
    return D(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Qa = /fragment/y;
function Ha() {
  if (Te(Qa)) {
    D();
    var e = rt();
    if (!e)
      throw ee("FragmentDefinition");
    D();
    var t = Qi();
    if (!t)
      throw ee("FragmentDefinition");
    var r = Bt(!1), n = Ur();
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
var Xa = /(?:query|mutation|subscription)/y;
function Za() {
  var e, t, r = [], n = [];
  (e = Te(Xa)) && (D(), t = rt(), r = function() {
    var s, u = [];
    if (D(), K.charCodeAt(R) === 40) {
      for (R++, D(); s = Te(Ki); ) {
        if (D(), K.charCodeAt(R++) !== 58)
          throw ee("VariableDefinition");
        var l = Ji(), f = void 0;
        if (K.charCodeAt(R) === 61 && (R++, D(), !(f = Dr(!0))))
          throw ee("VariableDefinition");
        D(), u.push({
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
          directives: Bt(!0)
        });
      }
      if (K.charCodeAt(R++) !== 41)
        throw ee("VariableDefinition");
      D();
    }
    return u;
  }(), n = Bt(!1));
  var i = Ur();
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
function eo(e, t) {
  return K = typeof e.body == "string" ? e.body : e, R = 0, function() {
    var n;
    D();
    for (var i = []; n = Ha() || Za(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function to(e) {
  return JSON.stringify(e);
}
function ro(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var De = (e) => !(!e || !e.length), fe = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !De(e.variableDefinitions) && !De(e.directives))
      return fe.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), De(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(fe.VariableDefinition).join(", ") + ")"), De(e.directives) && (t += " " + e.directives.map(fe.Directive).join(" ")), t + " " + fe.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = fe.Variable(e.variable) + ": " + Fe(e.type);
    return e.defaultValue && (t += " = " + Fe(e.defaultValue)), De(e.directives) && (t += " " + e.directives.map(fe.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (De(e.arguments)) {
      var r = e.arguments.map(fe.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return De(e.directives) && (t += " " + e.directives.map(fe.Directive).join(" ")), e.selectionSet ? t + " " + fe.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? ro(e.value) : to(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(Fe).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(fe.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + Fe(e.value),
  Document: (e) => De(e.definitions) ? e.definitions.map(Fe).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(Fe).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + Fe(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return De(e.directives) && (t += " " + e.directives.map(fe.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), De(e.directives) && (t += " " + e.directives.map(fe.Directive).join(" ")), t + " " + Fe(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, De(e.directives) && (t += " " + e.directives.map(fe.Directive).join(" ")), t + " " + Fe(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return De(e.arguments) && (t += "(" + e.arguments.map(fe.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + Fe(e.type) + "]",
  NonNullType: (e) => Fe(e.type) + "!"
};
function Fe(e) {
  return fe[e.kind] ? fe[e.kind](e) : "";
}
var no = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new gr(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new gr(e);
class Ir extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(no), n = ((i, o) => {
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
var kn = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, Tt = /* @__PURE__ */ new Set(), fi = /* @__PURE__ */ new WeakMap(), Ft = (e) => {
  if (e === null || Tt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Ft(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += Ft(r) || "null";
    return t += "]";
  } else if (jr !== Ut && e instanceof jr || Mr !== Ut && e instanceof Mr)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = fi.get(e) || Math.random().toString(36).slice(2);
    return fi.set(e, i), Ft({
      __key: i
    });
  }
  Tt.add(e);
  var o = "{";
  for (var s of n) {
    var u = Ft(e[s]);
    u && (o.length > 1 && (o += ","), o += Ft(s) + ":" + u);
  }
  return Tt.delete(e), o += "}";
}, An = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || Tt.has(r)))
    if (Array.isArray(r))
      for (var n = 0, i = r.length; n < i; n++)
        An(e, `${t}.${n}`, r[n]);
    else if (r instanceof jr || r instanceof Mr)
      e.set(t, r);
    else {
      Tt.add(r);
      for (var o of Object.keys(r))
        An(e, `${t}.${o}`, r[o]);
    }
}, Fr = (e) => (Tt.clear(), Ft(e));
class Ut {
}
var jr = typeof File < "u" ? File : Ut, Mr = typeof Blob < "u" ? Blob : Ut, io = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, ao = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, oo = (e, t) => t % 2 == 0 ? e.replace(ao, `
`) : e, pi = (e) => e.split(io).map(oo).join("").trim(), yi = /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ new Map(), Wn = (e) => {
  var t;
  return typeof e == "string" ? t = pi(e) : e.loc && _r.get(e.__key) === e ? t = e.loc.source.body : (t = yi.get(e) || pi(Fe(e)), yi.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, hi = (e) => {
  var t = kn(Wn(e));
  if (e.definitions) {
    var r = Xi(e);
    r && (t = kn(`
# ${r}`, t));
  }
  return t;
}, Hi = (e) => {
  var t, r;
  return typeof e == "string" ? (t = hi(e), r = _r.get(t) || eo(e)) : (t = e.__key || hi(e), r = _r.get(t) || e), r.loc || Wn(r), r.__key = t, _r.set(t, r), r;
}, dr = (e, t, r) => {
  var n = t || {}, i = Hi(e), o = Fr(n), s = i.__key;
  return o !== "{}" && (s = kn(o, s)), {
    key: s,
    query: i,
    variables: n,
    extensions: r
  };
}, Xi = (e) => {
  for (var t of e.definitions)
    if (t.kind === Mt.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, so = (e) => {
  for (var t of e.definitions)
    if (t.kind === Mt.OPERATION_DEFINITION)
      return t.operation;
}, On = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var n = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new Ir({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? n : t.hasNext,
    stale: !1
  };
}, Nn = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = Nn(e[r], t[r]);
    return e;
  }
  return t;
}, En = (e, t, r) => {
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
      for (var f = "data", d = u, y = 0, h = l.path.length; y < h; f = l.path[y++])
        d = d[f] = Array.isArray(d[f]) ? [...d[f]] : {
          ...d[f]
        };
      if (l.items)
        for (var m = +f >= 0 ? f : 0, v = 0, N = l.items.length; v < N; v++)
          d[m + v] = Nn(d[m + v], l.items[v]);
      else
        l.data !== void 0 && (d[f] = Nn(d[f], l.data));
    }
  else
    u.data = t.data || e.data, n = t.errors || n;
  return {
    operation: e.operation,
    data: u.data,
    error: n.length ? new Ir({
      graphQLErrors: n,
      response: r
    }) : void 0,
    extensions: i ? o : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, Zi = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new Ir({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function ea(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Wn(e.query),
    operationName: Xi(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var uo = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var n = new URL(e.context.url);
  for (var i in t) {
    var o = t[i];
    o && n.searchParams.set(i, typeof o == "object" ? Fr(o) : o);
  }
  var s = n.toString();
  return s.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s;
}, lo = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = Fr(t), n = ((u) => {
      var l = /* @__PURE__ */ new Map();
      return (jr !== Ut || Mr !== Ut) && (Tt.clear(), An(l, "variables", u)), l;
    })(t.variables);
    if (n.size) {
      var i = new FormData();
      i.append("operations", r), i.append("map", Fr({
        ...[...n.keys()].map((u) => [u])
      }));
      var o = 0;
      for (var s of n.values())
        i.append("" + o++, s);
      return i;
    }
    return r;
  }
}, co = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (n.headers)
    for (var i in n.headers)
      r[i.toLowerCase()] = n.headers[i];
  var o = lo(e, t);
  return typeof o == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...n,
    method: o ? "POST" : "GET",
    body: o,
    headers: r
  };
}, fo = typeof TextDecoder < "u" ? new TextDecoder() : null, po = /boundary="?([^=";]+)"?/i, yo = /data: ?([^\n]+)/, mi = (e) => e.constructor.name === "Buffer" ? e.toString() : fo.decode(e);
async function* bi(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield mi(t);
  else {
    var r = e.body.getReader(), n;
    try {
      for (; !(n = await r.read()).done; )
        yield mi(n.value);
    } finally {
      r.cancel();
    }
  }
}
async function* gi(e, t) {
  var r = "", n;
  for await (var i of e)
    for (r += i; (n = r.indexOf(t)) > -1; )
      yield r.slice(0, n), r = r.slice(n + t.length);
}
async function* ho(e, t, r) {
  var n = !0, i = null, o;
  try {
    yield await Promise.resolve();
    var s = (o = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", u;
    if (/multipart\/mixed/i.test(s))
      u = async function* (d, y) {
        var h = d.match(po), m = "--" + (h ? h[1] : "-"), v = !0, N;
        for await (var F of gi(bi(y), `\r
` + m)) {
          if (v) {
            v = !1;
            var C = F.indexOf(m);
            if (C > -1)
              F = F.slice(C + m.length);
            else
              continue;
          }
          try {
            yield N = JSON.parse(F.slice(F.indexOf(`\r
\r
`) + 4));
          } catch (I) {
            if (!N)
              throw I;
          }
          if (N && N.hasNext === !1)
            break;
        }
        N && N.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(s, o);
    else if (/text\/event-stream/i.test(s))
      u = async function* (d) {
        var y;
        for await (var h of gi(bi(d), `

`)) {
          var m = h.match(yo);
          if (m) {
            var v = m[1];
            try {
              yield y = JSON.parse(v);
            } catch (N) {
              if (!y)
                throw N;
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
      i = i ? En(i, l, o) : On(e, l, o), n = !1, yield i, n = !0;
    i || (yield i = On(e, {}, o));
  } catch (f) {
    if (!n)
      throw f;
    yield Zi(e, o && (o.status < 200 || o.status >= 300) && o.statusText ? new Error(o.statusText) : f, o);
  }
}
function mo(e, t, r) {
  var n;
  return typeof AbortController < "u" && (r.signal = (n = new AbortController()).signal), Un(() => {
    n && n.abort();
  })(Z((i) => !!i)(Wi(ho(e, t, r))));
}
var Pn = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      Pn(r, t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : Pn(e[n], t);
  return t;
}, _n = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var n of e.definitions) {
      var i = _n(n);
      t = t || i !== n, r.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var o = [], s = e.kind === Mt.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var u of e.selectionSet.selections || []) {
        s = s || u.kind === Mt.FIELD && u.name.value === "__typename" && !u.alias;
        var l = _n(u);
        t = t || l !== u, o.push(l);
      }
      if (s || (t = !0, o.push({
        kind: Mt.FIELD,
        name: {
          kind: Mt.NAME,
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
}, vi = /* @__PURE__ */ new Map(), bo = (e) => {
  var t = Hi(e), r = vi.get(t.__key);
  return r || (vi.set(t.__key, r = _n(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, Tn = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => Tn(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var n in e)
      n === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[n] = Tn(e[n]);
    return r;
  } else
    return e;
};
function Si(e) {
  var t = (r) => e(r);
  return t.toPromise = () => Br(wr(1)(Z((r) => !r.stale && !r.hasNext)(t))), t.then = (r, n) => t.toPromise().then(r, n), t.subscribe = (r) => Rt(r)(t), t;
}
function Vt(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var wi = (e, t) => Vt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), go = () => {
}, mn = ({ kind: e }) => e !== "mutation" && e !== "query", vo = ({ forward: e, client: t, dispatchDebug: r }) => {
  var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = (u) => {
    var l = Vt(u.kind, u);
    return l.query = bo(u.query), l;
  }, s = (u) => u.kind === "query" && u.context.requestPolicy !== "network-only" && (u.context.requestPolicy === "cache-only" || n.has(u.key));
  return (u) => {
    var l = $t((d) => {
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
      var h = y;
      return process.env.NODE_ENV !== "production" && (h = {
        ...h,
        operation: process.env.NODE_ENV !== "production" ? wi(d, {
          cacheOutcome: y ? "hit" : "miss"
        }) : d
      }), d.context.requestPolicy === "cache-and-network" && (h.stale = !0, Ii(t, d)), h;
    })(Z((d) => !mn(d) && s(d))(u)), f = Ct((d) => {
      var { operation: y } = d;
      if (y) {
        var h = y.context.additionalTypenames || [];
        if (d.operation.kind !== "subscription" && (h = ((S) => [...Pn(S, /* @__PURE__ */ new Set())])(d.data).concat(h)), d.operation.kind === "mutation" || d.operation.kind === "subscription") {
          var m = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && r({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${h}`,
            operation: y,
            data: {
              typenames: h,
              response: d
            },
            source: "cacheExchange"
          });
          for (var v = 0; v < h.length; v++) {
            var N = h[v], F = i.get(N);
            F || i.set(N, F = /* @__PURE__ */ new Set());
            for (var C of F.values())
              m.add(C);
            F.clear();
          }
          for (var I of m.values())
            n.has(I) && (y = n.get(I).operation, n.delete(I), Ii(t, y));
        } else if (y.kind === "query" && d.data) {
          n.set(y.key, d);
          for (var B = 0; B < h.length; B++) {
            var b = h[B], P = i.get(b);
            P || i.set(b, P = /* @__PURE__ */ new Set()), P.add(y.key);
          }
        }
      }
    })(e(Z((d) => d.kind !== "query" || d.context.requestPolicy !== "cache-only")($t((d) => process.env.NODE_ENV !== "production" ? wi(d, {
      cacheOutcome: "miss"
    }) : d)(qt([$t(o)(Z((d) => !mn(d) && !s(d))(u)), Z((d) => mn(d))(u)])))));
    return qt([l, f]);
  };
}, Ii = (e, t) => e.reexecuteOperation(Vt(t.kind, t, {
  requestPolicy: "network-only"
})), bn = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: n, forward: i }) => {
  var o = r || ((s) => s.kind === "subscription" || !!t && (s.kind === "query" || s.kind === "mutation"));
  return (s) => {
    var u = mr((f) => {
      var { key: d } = f, y = Z((h) => h.kind === "teardown" && h.key === d)(s);
      return Vn(y)(((h) => {
        var m = e(ea(h), h);
        return Gn(({ next: v, complete: N }) => {
          var F = !1, C, I;
          return Promise.resolve().then(() => {
            F || (C = m.subscribe({
              next(B) {
                v(I = I ? En(I, B) : On(h, B));
              },
              error(B) {
                v(Zi(h, B));
              },
              complete() {
                F || (F = !0, h.kind === "subscription" && n.reexecuteOperation(Vt("teardown", h, h.context)), I && I.hasNext && v(En(I, {
                  hasNext: !1
                })), N());
              }
            }));
          }), () => {
            F = !0, C && C.unsubscribe();
          };
        });
      })(f));
    })(Z((f) => f.kind !== "teardown" && o(f))(s)), l = i(Z((f) => f.kind === "teardown" || !o(f))(s));
    return qt([u, l]);
  };
}, So = ({ forward: e, dispatchDebug: t }) => (r) => {
  var n = mr((o) => {
    var s = ea(o), u = uo(o, s), l = co(o, s);
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
    var f = Vn(Z((d) => d.kind === "teardown" && d.key === o.key)(r))(mo(o, u, l));
    return process.env.NODE_ENV !== "production" ? Ct((d) => {
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
  return qt([n, i]);
}, wo = (e) => ({ client: t, forward: r, dispatchDebug: n }) => e.reduceRight((i, o) => {
  var s = !1;
  return o({
    client: t,
    forward(u) {
      if (process.env.NODE_ENV !== "production") {
        if (s)
          throw new Error("forward() must only be called once in each Exchange.");
        s = !0;
      }
      return br(i(br(u)));
    },
    dispatchDebug(u) {
      process.env.NODE_ENV !== "production" && n({
        timestamp: Date.now(),
        source: o.name,
        ...u
      });
    }
  });
}, r), ta = ({ onOperation: e, onResult: t, onError: r }) => ({ forward: n }) => (i) => mr((o) => {
  r && o.error && r(o.error, o.operation);
  var s = t && t(o) || o;
  return "then" in s ? di(s) : cr(s);
})(n(mr((o) => {
  var s = e && e(o) || o;
  return "then" in s ? di(s) : cr(s);
})(i))), Io = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = Ct((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var n = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: n,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(n);
  }
})(t)), Z((r) => !1)(t)), ki = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), s = [], u = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = ci();
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
  var h = (b) => {
    var P = Vn(Z((S) => S.kind === "teardown" && S.key === b.key)(l.source))(Z((S) => S.operation.kind === b.kind && S.operation.key === b.key && (!S.operation.context._instance || S.operation.context._instance === b.context._instance))(B));
    return b.kind !== "query" ? P = Li((S) => !!S.hasNext, !0)(P) : P = li((S) => {
      var U = cr(S);
      return S.stale || S.hasNext ? U : qt([U, $t(() => (S.stale = !0, S))(wr(1)(Z((Ae) => Ae.key === b.key)(l.source)))]);
    })(P), b.kind !== "mutation" ? P = Un(() => {
      o.delete(b.key), n.delete(b.key), i.delete(b.key), d = !1;
      for (var S = s.length - 1; S >= 0; S--)
        s[S].key === b.key && s.splice(S, 1);
      f(Vt("teardown", b, b.context));
    })(Ct((S) => {
      if (S.stale) {
        for (var U of s)
          if (U.key === S.operation.key) {
            o.delete(U.key);
            break;
          }
      } else
        S.hasNext || o.delete(b.key);
      n.set(b.key, S);
    })(P)) : P = ui(() => {
      f(b);
    })(P), t.maskTypename && (P = $t((S) => ({
      ...S,
      data: Tn(S.data, !0)
    }))(P)), br(P);
  }, m = this instanceof e ? this : Object.create(e.prototype), v = Object.assign(m, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(b) {
      b.kind === "teardown" ? y(b) : (b.kind === "mutation" || i.has(b.key)) && (s.push(b), Promise.resolve().then(y));
    },
    createRequestOperation(b, P, S) {
      S || (S = {});
      var U;
      if (process.env.NODE_ENV !== "production" && b !== "teardown" && (U = so(P.query)) !== b)
        throw new Error(`Expected operation of type "${b}" but found "${U}"`);
      return Vt(b, P, {
        _instance: b === "mutation" ? r = r + 1 | 0 : void 0,
        ...u,
        ...S,
        requestPolicy: S.requestPolicy || u.requestPolicy,
        suspense: S.suspense || S.suspense !== !1 && v.suspense
      });
    },
    executeRequestOperation(b) {
      return b.kind === "mutation" ? Si(h(b)) : Si(Da(() => {
        var P = i.get(b.key);
        P || i.set(b.key, P = h(b)), P = ui(() => {
          y(b);
        })(P);
        var S = n.get(b.key);
        return b.kind === "query" && S && (S.stale || S.hasNext) ? li(cr)(qt([P, Z((U) => U === n.get(b.key))(cr(S))])) : P;
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
      var U = null;
      return Rt((Ae) => {
        U = Ae;
      })(v.query(b, P, S)).unsubscribe(), U;
    },
    query: (b, P, S) => v.executeQuery(dr(b, P), S),
    subscription: (b, P, S) => v.executeSubscription(dr(b, P), S),
    mutation: (b, P, S) => v.executeMutation(dr(b, P), S)
  }), N = go;
  if (process.env.NODE_ENV !== "production") {
    var { next: F, source: C } = ci();
    v.subscribeToDebugTarget = (b) => Rt(b)(C), N = F;
  }
  var I = wo(t.exchanges), B = br(I({
    client: v,
    dispatchDebug: N,
    forward: Io({
      dispatchDebug: N
    })
  })(l.source));
  return Ma(B), v;
};
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
}).filter((t) => !!t).map((t) => "  " + t), $r = (e) => {
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
    i instanceof zn ? (Object.entries(i.args).forEach(([o, s]) => {
      var u;
      s instanceof Kn && (t[(u = s.name) !== null && u !== void 0 ? u : r(o)] = s);
    }), i.subselection && Object.assign(t, $r(i.subselection))) : typeof i == "object" && i !== null && Object.assign(t, $r(i));
  }), t;
}, ko = (e) => {
  const t = $r(e.fields);
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
const he = (e, t) => new zn(e, t), V = (e) => new Kn(e.type + (e.required ? "!" : ""), e.name, e.value), Ao = (e) => {
  var t;
  const r = ko(e), n = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${r}${n} {
${Cn(e.fields).join(`
`)}
}`;
}, ke = (e) => {
  const t = $r(e.fields);
  return {
    query: Ao(e),
    variables: Object.entries(t ?? {}).reduce((r, [n, i]) => (typeof i.value < "u" && (r[n] = i.value), r), {})
  };
}, Oo = {
  DateTime(e) {
    return new Date(e);
  }
};
class No {
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
      o != null && (r[n] = Oo[i](o));
    }
    return r;
  }
}
function ve(e) {
  if (typeof e != "object")
    return e;
  var t, r, n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = ve(e[t]));
    } else {
      r = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(r, t, {
          value: ve(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[t] = ve(e[t]);
    }
    return r;
  }
  if (n === "[object Array]") {
    for (t = e.length, r = Array(t); t--; )
      r[t] = ve(e[t]);
    return r;
  }
  return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    r.add(ve(i));
  }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, o) {
    r.set(ve(o), ve(i));
  }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(ve(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var pe;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(pe || (pe = {}));
class Eo {
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
    }), this.__gadget.instantiatedFields = ve(t), this.__gadget.persistedFields = ve(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((n) => this.__gadget.fieldKeysTracker[n] = !0));
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
  hasChanges(t = pe.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const r = t == pe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((n) => !Or(r[n], this.__gadget.fields[n]));
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
  changes(t, r = pe.SinceLoaded) {
    const i = (typeof t == "string" ? r : t || r) == pe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const o = i[t], s = this.__gadget.fields[t], u = !Or(s, o);
      return u ? { changed: u, current: s, previous: o } : { changed: u };
    } else {
      const o = {};
      for (let s = 0; s < this.__gadget.fieldKeys.length; s++) {
        const u = this.__gadget.fieldKeys[s];
        Or(i[u], this.__gadget.fields[u]) || (o[u] = { current: this.__gadget.fields[u], previous: i[u] });
      }
      return o;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = pe.SinceLoaded) {
    const r = t == pe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, n = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const o = this.__gadget.fieldKeys[i];
      Or(r[o], this.__gadget.fields[o]) || (n[o] = this.__gadget.fields[o]);
    }
    return n;
  }
  changed(t, r = pe.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = pe.SinceLoaded) {
    t == pe.SinceLoaded ? this.__gadget.instantiatedFields = ve(this.__gadget.fields) : t == pe.SinceLastPersisted && (this.__gadget.persistedFields = ve(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = pe.SinceLoaded) {
    let r;
    t == pe.SinceLoaded ? r = Object.keys(this.__gadget.instantiatedFields) : r = Object.keys(this.__gadget.persistedFields);
    for (const n of this.__gadget.fieldKeys)
      r.includes(n) || delete this.__gadget.fields[n];
    t == pe.SinceLoaded ? Object.assign(this.__gadget.fields, ve(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, ve(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Fn({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const ra = Eo;
class na extends Error {
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
class Rn extends Error {
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
class Vr extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class Ai extends Error {
  constructor(t) {
    let r;
    Dn(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class Po extends Error {
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
class _o extends Error {
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
class To extends Error {
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
class ia extends Error {
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
class Yn extends Error {
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
class Co extends Error {
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
function xn(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const Gt = (e, t) => {
  const r = t.length;
  let n = 0;
  for (; e != null && n < r; )
    e = e[t[n++]];
  return n && n == r ? e : void 0;
}, Dn = (e) => (e == null ? void 0 : e.type) == "close", We = (e, t) => typeof e != "string" ? "" : kr(e, t), Oi = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, kr = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (n) => Oi(n)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, i, o, s, u) => (i || (i = ""), "" + i + Oi(o))), r;
}, Jn = (e, t) => [...Array.isArray(t) ? t : t ? [t] : [], e].map((i) => kr(i)).join(""), aa = (e, t) => `${Jn(e, t)}Sort`, Qn = (e, t) => `${Jn(e, t)}Filter`, Ro = (e, t, r) => new ia(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), xo = (e, t) => {
  if (e.fetching)
    return;
  const r = Gt(e.data, t);
  if (r === void 0)
    return new na(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null)
    return new Yn(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, tt = (e, t, r = !1) => {
  var n;
  if (e.error)
    throw e.error instanceof Ir && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((u) => "[Network] " + u.message).join(`
`)), e.error;
  const i = Gt(e.data, t), o = Gt(i, ["edges"]), s = o ?? i;
  if (i === void 0)
    throw new na(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || r && Array.isArray(s) && s.length === 0)
    throw new Yn(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, fr = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof Ir && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const n = Gt(e.data, t);
  return n ?? null;
}, Hn = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new To(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new ia(e.message) : new Vr(e.message, e.code);
}, yt = (e, t) => {
  const r = tt(e, t);
  return oa(r);
}, oa = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? Hn(t) : new Vr("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, sa = (e) => {
  var t, r, n, i;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new No((i = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, pr = (e, t) => {
  const r = sa(e);
  return r && (t = r.apply(t)), new ra(t);
}, Xn = (e, t) => {
  const r = sa(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((n) => new ra(n));
}, vr = (e, t) => {
  const r = t.edges.map((n) => n.node);
  return Xn(e, r);
}, Fn = (e) => {
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
          t[r] = n === void 0 ? null : Fn(n);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const r of Object.keys(e)) {
          const n = Fn(e[r]);
          n !== void 0 && (t[r] = n);
        }
        return t;
      }
    }
  }
}, gn = "gstk", Ni = (e) => {
  try {
    const t = window[e];
    return t.setItem(gn, gn), t.removeItem(gn), !0;
  } catch {
    return !1;
  }
}, Ei = Object.prototype.toString, Pi = Object.getPrototypeOf, _i = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, lr = (e, t, r) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (r.indexOf(e) > -1 && r.indexOf(t) > -1)
    return !0;
  const n = Ei.call(e), i = Ei.call(t);
  let o, s, u;
  if (r.push(e, t), n != i || (o = _i(e), s = _i(t), o.length != s.length || o.some(function(l) {
    return !lr(e[l], t[l], r);
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
        if (u = o.next(), !lr(u.value, s.next().value, r))
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
        if (!(!(u in e) && !(u in t)) && (u in e != u in t || !lr(e[u], t[u], r)))
          return !1;
      return !0;
    case "Object":
      return lr(Pi(e), Pi(t), r);
    default:
      return !1;
  }
}, Or = (e, t) => lr(e, t, []), ua = (e, t) => {
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
}, Do = (e, t = {}) => {
  var r;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((r = Array.isArray(t) ? t : t.inputs) !== null && r !== void 0 ? r : []).map((i) => ua(e, i))
  };
}, Fo = (e, t) => {
  const r = {};
  for (const [n, i] of Object.entries(e))
    r[n] = { ...i, value: t[n] };
  return r;
}, mt = (e, t) => (t && e.unshift(...Array.isArray(t) ? t : [t]), e), lt = (e, t) => {
  const r = t ? [...Array.isArray(t) ? t : [t], e].join(".") : e;
  return {
    gadgetMeta: {
      hydrations: he({ modelName: r })
    }
  };
};
function Ce(e, t) {
  if (!e)
    return t;
  if (Array.isArray(e) || (e = [e]), e)
    for (let r = e.length - 1; r >= 0; r--)
      t = {
        [e[r]]: t
      };
  return t;
}
const xt = {
  errors: {
    message: !0,
    code: !0,
    "... on InvalidRecordError": {
      validationErrors: {
        message: !0,
        apiIdentifier: !0
      }
    }
  }
};
class Lt extends Array {
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
    const i = new Lt();
    return i.push(...r), i.modelManager = t, i.pagination = n, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Vr("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new Rn("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new Rn("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: n, after: i, ...o } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...o,
      before: this.pagination.pageInfo.startCursor,
      last: n || r
    });
  }
}
const Zn = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, Gr = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, jo = (e, t, r, n, i, o) => {
  const s = {};
  typeof t < "u" && (s.id = V({ type: "GadgetID!", value: t }));
  let u = {
    [e]: he(s, Zn((i == null ? void 0 : i.select) || r, !0))
  };
  return u = Ce(o, u), ke({
    type: "query",
    name: e,
    fields: {
      ...u,
      ...lt(n, o)
    },
    directives: Gr(i)
  });
}, Mo = (e, t, r, n, i, o, s) => ei(e, n, i, {
  ...o,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}, s), ei = (e, t, r, n, i) => {
  let o = {
    [e]: he({
      after: V({ value: n == null ? void 0 : n.after, type: "String" }),
      first: V({ value: n == null ? void 0 : n.first, type: "Int" }),
      before: V({ value: n == null ? void 0 : n.before, type: "String" }),
      last: V({ value: n == null ? void 0 : n.last, type: "Int" }),
      sort: n != null && n.sort ? V({ value: n.sort, type: `[${aa(r, i)}!]` }) : void 0,
      filter: n != null && n.filter ? V({ value: n.filter, type: `[${Qn(r, i)}!]` }) : void 0,
      search: n != null && n.search ? V({ value: n.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Zn((n == null ? void 0 : n.select) || t, !0)
      }
    })
  };
  return i && (o = Ce(i, o)), ke({
    type: "query",
    name: e,
    fields: {
      ...o,
      ...lt(r, i)
    },
    directives: Gr(n)
  });
}, ti = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, V(r)])), la = (e, t, r) => ({
  success: !0,
  ...xt,
  [e]: t && !r ? Zn(t, !0) : !1,
  result: !!r
}), $o = (e, t, r, n, i, o, s, u, l) => {
  const f = (o == null ? void 0 : o.select) || t;
  let d = {
    [e]: he(ti(i), la(n, f, l))
  };
  d = Ce(s, d);
  const y = {
    type: "mutation",
    name: e,
    fields: {
      ...d,
      ...lt(r, s)
    },
    directives: Gr(o)
  };
  return ke(y);
}, qo = (e, t, r) => {
  let n = {}, i = t.operationName, o;
  switch (t.isBulk && (i = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), t.operationReturnType ? o = `${t.operationReturnType}Result` : o = `${kr(i)}Result`, t.type) {
    case "action": {
      const u = (r == null ? void 0 : r.select) || t.defaultSelection;
      n = {
        [`... on ${o}`]: la(t.modelApiIdentifier, u, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      n = {
        [`... on ${o}`]: ca()
      };
  }
  const s = {
    type: "subscription",
    name: We(i) + "BackgroundResult",
    fields: {
      backgroundAction: he({ id: V({ value: e, type: "String!" }) }, {
        id: !0,
        outcome: !0,
        result: {
          ...n
        }
      })
    }
  };
  return ke(s);
}, ca = () => ({
  success: !0,
  ...xt,
  result: !0
}), Bo = (e, t, r, n) => {
  let i = {
    [e]: he(ti(t), ca())
  };
  return i = Ce(r, i), ke({
    type: "mutation",
    name: e,
    fields: i,
    directives: Gr(n)
  });
}, Uo = (e) => {
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
}, Vo = (e, t, r, n, i) => {
  let o = {
    [e]: he({
      ...ti(t),
      backgroundOptions: V({
        type: "EnqueueBackgroundActionOptions",
        value: Uo(n)
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
  };
  return o = Ce(r, o), ke({
    type: "mutation",
    name: "enqueue" + kr(e),
    fields: {
      background: o
    }
  });
}, Go = (e, t) => ({
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
function ri(e, t, r) {
  return r != null && r.live ? Go($a(e), t) : Ln(e, Z((i) => !i.stale && !i.hasNext), wr(1), Br).then((i) => t(i));
}
const Ti = (e, t, r, n, i, o, s = !0, u) => {
  const l = jo(t, r, n, i, o, u), f = e.connection.currentClient.query(l.query, l.variables);
  return ri(f, (d) => {
    const y = s ? tt : fr, h = mt([t], u), m = y(d, h);
    return pr(d, m);
  }, o);
}, Lo = (e, t, r, n, i, o, s, u = !0, l) => {
  const f = Mo(t, r, n, i, o, s), d = mt([t], l), y = e.connection.currentClient.query(f.query, f.variables);
  return ri(y, (h) => {
    const m = tt(h, d), v = vr(h, m);
    if (v.length > 1)
      throw Ro(o, r, n);
    const N = v[0];
    if (!N && u)
      throw new Yn(`${o} record with ${r}=${n} not found`);
    return N ?? null;
  }, s);
}, Ci = (e, t, r, n, i, o, s) => {
  const u = ei(t, r, n, i, s), l = e.connection.currentClient.query(u.query, u.variables), f = mt([t], s);
  return ri(l, (d) => {
    let y;
    o === !1 ? y = fr(d, f) : y = tt(d, f, o);
    const h = vr(d, y);
    return Lt.boot(e, h, { options: i, pageInfo: y.pageInfo });
  }, i);
}, Ri = async (e, t, r, n, i, o, s, u, l, f) => {
  const d = $o(t, r, n, i, s, u, l, o, f), y = await e.connection.currentClient.mutation(d.query, d.variables).toPromise(), h = mt([t], l);
  if (o) {
    const m = Gt(y.data, h), v = m[i] && r ? Xn(y, m[i]) : void 0;
    if (m.errors) {
      const N = m.errors.map((F) => Hn(F));
      throw new Co(N, v);
    }
    return v;
  } else {
    const m = yt(y, h);
    return da(r, y, m, i, f);
  }
}, da = (e, t, r, n, i) => {
  if (e != null)
    return i ? r.result : pr(t, r[n]);
}, xi = async (e, t, r, n) => {
  const i = Bo(t, r, n), o = await e.currentClient.mutation(i.query, i.variables).toPromise(), s = mt([t], n);
  return yt(o, s).result;
};
async function Wo(e, t, r, n = {}) {
  const i = t.isBulk ? Do(t, r) : ua(t, r), o = Fo(t.variables, i), s = Vo(t.operationName, o, t.namespace, n, t.isBulk), u = await e.currentClient.mutation(s.query, s.variables, n).toPromise(), l = ["background", ...mt([t.operationName], t.namespace)];
  try {
    const f = yt(u, l);
    return t.isBulk ? f.backgroundActions.map((d) => new Tr(e, t, d.id)) : new Tr(e, t, f.backgroundAction.id);
  } catch (f) {
    if ("code" in f && f.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (n != null && n.id) && n.onDuplicateID == "ignore")
      return new Tr(e, t, n.id);
    throw f;
  }
}
const zo = async (e, t, r, n) => {
  const i = qo(t, r, n), o = e.currentClient.subscription(i.query, i.variables), s = await Ln(o, Z((l) => {
    var f, d;
    return l.error || ((d = (f = l.data) === null || f === void 0 ? void 0 : f.backgroundAction) === null || d === void 0 ? void 0 : d.outcome);
  }), wr(1), Br), u = tt(s, ["backgroundAction"]);
  switch (oa(u.result), r.type) {
    case "action": {
      u.result = da(r.defaultSelection, s.data, u.result, r.isBulk ? r.modelApiIdentifier : r.modelSelectionField, r.hasReturnType);
      break;
    }
    case "globalAction": {
      u.result = u.result.result;
      break;
    }
  }
  return u;
};
class Tr {
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
    return (await zo(this.connection, this.id, this.action, t)).result;
  }
}
var yr;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(yr || (yr = {}));
function ge(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Pt(e) {
  return ge(e) === "object";
}
function Ko(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function Di(e, t) {
  return e.length < 124 ? e : t;
}
const Yo = "graphql-transport-ws";
var ye;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(ye || (ye = {}));
var H;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(H || (H = {}));
function fa(e) {
  if (!Pt(e))
    throw new Error(`Message is expected to be an object, but got ${ge(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${ge(e.type)}`);
  switch (e.type) {
    case H.ConnectionInit:
    case H.ConnectionAck:
    case H.Ping:
    case H.Pong: {
      if (e.payload != null && !Pt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case H.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ge(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Pt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ge(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${ge(e.payload.query)}`);
      if (e.payload.variables != null && !Pt(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${ge(e.payload.variables)}`);
      if (e.payload.operationName != null && ge(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${ge(e.payload.operationName)}`);
      if (e.payload.extensions != null && !Pt(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${ge(e.payload.extensions)}`);
      break;
    }
    case H.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ge(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Pt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ge(e.payload)}`);
      break;
    }
    case H.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ge(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Ko(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case H.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ge(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Jo(e, t) {
  return fa(typeof e == "string" ? JSON.parse(e, t) : e);
}
function sr(e, t) {
  return fa(e), JSON.stringify(e, t);
}
function Qo(e) {
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
      for (let x = 0; x < j; x++)
        M *= 2;
      await new Promise((x) => setTimeout(x, M + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: y = Nr,
    isFatalConnectionProblem: h,
    on: m,
    webSocketImpl: v,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: N = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (j) => {
        const M = Math.random() * 16 | 0;
        return (j == "x" ? M : M & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: F,
    jsonMessageReviver: C
  } = e;
  let I;
  if (v) {
    if (!Xo(v))
      throw new Error("Invalid WebSocket implementation provided");
    I = v;
  } else
    typeof WebSocket < "u" ? I = WebSocket : typeof global < "u" ? I = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (I = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!I)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const B = I, b = (() => {
    const E = (() => {
      const M = {};
      return {
        on(x, G) {
          return M[x] = G, () => {
            delete M[x];
          };
        },
        emit(x) {
          var G;
          "id" in x && ((G = M[x.id]) === null || G === void 0 || G.call(M, x));
        }
      };
    })(), j = {
      connecting: m != null && m.connecting ? [m.connecting] : [],
      opened: m != null && m.opened ? [m.opened] : [],
      connected: m != null && m.connected ? [m.connected] : [],
      ping: m != null && m.ping ? [m.ping] : [],
      pong: m != null && m.pong ? [m.pong] : [],
      message: m != null && m.message ? [E.emit, m.message] : [E.emit],
      closed: m != null && m.closed ? [m.closed] : [],
      error: m != null && m.error ? [m.error] : []
    };
    return {
      onMessage: E.on,
      on(M, x) {
        const G = j[M];
        return G.push(x), () => {
          G.splice(G.indexOf(x), 1);
        };
      },
      emit(M, ...x) {
        for (const G of [...j[M]])
          G(...x);
      }
    };
  })();
  function P(E) {
    const j = [
      // errors are fatal and more critical than close events, throw them first
      b.on("error", (M) => {
        j.forEach((x) => x()), E(M);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      b.on("closed", (M) => {
        j.forEach((x) => x()), E(M);
      })
    ];
  }
  let S, U = 0, Ae, Re = !1, $e = 0, te = !1;
  async function X() {
    clearTimeout(Ae);
    const [E, j] = await (S ?? (S = new Promise((G, Oe) => (async () => {
      if (Re) {
        if (await d($e), !U)
          return S = void 0, Oe({ code: 1e3, reason: "All Subscriptions Gone" });
        $e++;
      }
      b.emit("connecting");
      const $ = new B(typeof t == "function" ? await t() : t, Yo);
      let xe, qe;
      function Ke() {
        isFinite(s) && s > 0 && (clearTimeout(qe), qe = setTimeout(() => {
          $.readyState === B.OPEN && ($.send(sr({ type: H.Ping })), b.emit("ping", !1, void 0));
        }, s));
      }
      P((J) => {
        S = void 0, clearTimeout(xe), clearTimeout(qe), Oe(J), Nr(J) && J.code === 4499 && ($.close(4499, "Terminated"), $.onerror = null, $.onclose = null);
      }), $.onerror = (J) => b.emit("error", J), $.onclose = (J) => b.emit("closed", J), $.onopen = async () => {
        try {
          b.emit("opened", $);
          const J = typeof r == "function" ? await r() : r;
          if ($.readyState !== B.OPEN)
            return;
          $.send(sr(J ? {
            type: H.ConnectionInit,
            payload: J
          } : {
            type: H.ConnectionInit
            // payload is completely absent if not provided
          }, F)), isFinite(l) && l > 0 && (xe = setTimeout(() => {
            $.close(ye.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), Ke();
        } catch (J) {
          b.emit("error", J), $.close(ye.InternalClientError, Di(J instanceof Error ? J.message : new Error(J).message, "Internal client error"));
        }
      };
      let Ye = !1;
      $.onmessage = ({ data: J }) => {
        try {
          const W = Jo(J, C);
          if (b.emit("message", W), W.type === "ping" || W.type === "pong") {
            b.emit(W.type, !0, W.payload), W.type === "pong" ? Ke() : u || ($.send(sr(W.payload ? {
              type: H.Pong,
              payload: W.payload
            } : {
              type: H.Pong
              // payload is completely absent if not provided
            })), b.emit("pong", !1, W.payload));
            return;
          }
          if (Ye)
            return;
          if (W.type !== H.ConnectionAck)
            throw new Error(`First message cannot be of type ${W.type}`);
          clearTimeout(xe), Ye = !0, b.emit("connected", $, W.payload), Re = !1, $e = 0, G([
            $,
            new Promise((ct, Be) => P(Be))
          ]);
        } catch (W) {
          $.onmessage = null, b.emit("error", W), $.close(ye.BadResponse, Di(W instanceof Error ? W.message : new Error(W).message, "Bad response"));
        }
      };
    })())));
    E.readyState === B.CLOSING && await j;
    let M = () => {
    };
    const x = new Promise((G) => M = G);
    return [
      E,
      M,
      Promise.race([
        // wait for
        x.then(() => {
          if (!U) {
            const G = () => E.close(1e3, "Normal Closure");
            isFinite(o) && o > 0 ? Ae = setTimeout(() => {
              E.readyState === B.OPEN && G();
            }, o) : G();
          }
        }),
        // or
        j
      ])
    ];
  }
  function L(E) {
    if (Nr(E) && (Ho(E.code) || [
      ye.InternalServerError,
      ye.InternalClientError,
      ye.BadRequest,
      ye.BadResponse,
      ye.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      ye.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      ye.SubscriberAlreadyExists,
      ye.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(E.code)))
      throw E;
    if (te)
      return !1;
    if (Nr(E) && E.code === 1e3)
      return U > 0;
    if (!f || $e >= f || !y(E) || h != null && h(E))
      throw E;
    return Re = !0;
  }
  return n || (async () => {
    for (U++; ; )
      try {
        const [, , E] = await X();
        await E;
      } catch (E) {
        try {
          if (!L(E))
            return;
        } catch (j) {
          return i == null ? void 0 : i(j);
        }
      }
  })(), {
    on: b.on,
    subscribe(E, j) {
      const M = N(E);
      let x = !1, G = !1, Oe = () => {
        U--, x = !0;
      };
      return (async () => {
        for (U++; ; )
          try {
            const [$, xe, qe] = await X();
            if (x)
              return xe();
            const Ke = b.onMessage(M, (Ye) => {
              switch (Ye.type) {
                case H.Next: {
                  j.next(Ye.payload);
                  return;
                }
                case H.Error: {
                  G = !0, x = !0, j.error(Ye.payload), Oe();
                  return;
                }
                case H.Complete: {
                  x = !0, Oe();
                  return;
                }
              }
            });
            $.send(sr({
              id: M,
              type: H.Subscribe,
              payload: E
            }, F)), Oe = () => {
              !x && $.readyState === B.OPEN && $.send(sr({
                id: M,
                type: H.Complete
              }, F)), U--, x = !0, xe();
            }, await qe.finally(Ke);
            return;
          } catch ($) {
            if (!L($))
              return;
          }
      })().then(() => {
        G || j.complete();
      }).catch(($) => {
        j.error($);
      }), () => {
        x || Oe();
      };
    },
    async dispose() {
      if (te = !0, S) {
        const [E] = await S;
        E.close(1e3, "Normal Closure");
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
function Nr(e) {
  return Pt(e) && "code" in e && "reason" in e;
}
function Ho(e) {
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
function Xo(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var jt = null;
typeof WebSocket < "u" ? jt = WebSocket : typeof MozWebSocket < "u" ? jt = MozWebSocket : typeof global < "u" ? jt = global.WebSocket || global.MozWebSocket : typeof window < "u" ? jt = window.WebSocket || window.MozWebSocket : typeof self < "u" && (jt = self.WebSocket || self.MozWebSocket);
const Zo = jt;
class pa extends Error {
}
class es {
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
    throw tt(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new pa("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    tt(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    tt(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class ts {
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
const rs = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
}, Fi = ta({
  onOperation: (e) => {
    var t, r;
    (t = (r = e.context).operationName) !== null && t !== void 0 || (r.operationName = rs(e.query) || "unknown");
  }
}), ns = ta({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, r] = e.context.url.split("?"), n = new URLSearchParams(r);
        n.set("operation", e.context.operationName), e.context.url = `${t}?${n.toString()}`;
      } catch {
      }
  }
});
var jn;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(jn || (jn = {}));
const is = 2, as = 4800, os = 1e4, ss = [ye.ConnectionAcknowledgementTimeout, ye.ConnectionInitialisationTimeout], ji = Symbol.for("gadget/connection"), us = "token", ls = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var ne;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(ne || (ne = {}));
const Er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class ya {
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
      value: ne.Anonymous
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
        let y = null, h;
        try {
          y = await this.waitForOpenedConnection({
            isFatalConnectionProblem(N) {
              return console.warn("Transport error encountered during transaction processing", N), !0;
            },
            connectionAckWaitTimeout: as,
            ...d,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const m = new ki({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              Fi,
              ...this.exchanges.beforeAsync,
              bn({
                forwardSubscription(N) {
                  const F = { ...N, query: N.query || "" };
                  return {
                    subscribe: (C) => ({
                      unsubscribe: y.subscribe(F, C)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          m[ji] = this, h = new es(m, y), this.currentTransaction = h, await h.start();
          const v = await f(h);
          return await h.commit(), v;
        } catch (m) {
          try {
            h != null && h.open && await h.rollback();
          } catch (v) {
            v instanceof pa || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", v);
          }
          throw Dn(m) ? new Ai(m) : m;
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
        u = cs(u, (f = this.options.baseRouteURL) !== null && f !== void 0 ? f : this.options.endpoint), this.isGadgetRequest(u) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == ne.Custom && await this.options.authenticationMode.custom.processFetch(u, l));
        const d = await this._fetchImplementation(u, l);
        if (this.authenticationMode == ne.BrowserSession) {
          const y = d.headers.get("x-set-authorization"), h = y != null && y.startsWith("Session ") ? y.replace("Session ", "") : null;
          h && this.sessionTokenStore.setItem(this.sessionStorageKey, h);
        }
        return d;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof Er < "u" && Er.fetch ? this._fetchImplementation = Er.fetch.bind(Er) : this._fetchImplementation = async (...u) => {
      let l = await import("./browser-ponyfill-d9a23c40.js").then((f) => f.b);
      return l.default && (l = l.default), await l(...u);
    }, this.websocketImplementation = (n = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && n !== void 0 ? n : Zo, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (o = t.environment) !== null && o !== void 0 ? o : "Development", this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${us}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = ne.InternalAuthToken : t.apiKey ? this.authenticationMode = ne.APIKey : t.custom && (this.authenticationMode = ne.Custom), this.options.authenticationMode = t), (r = this.authenticationMode) !== null && r !== void 0 || (this.authenticationMode = ne.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = ne.BrowserSession;
    const r = !t || typeof t == "boolean" ? yr.Durable : t.storageType;
    let n;
    r == yr.Durable && Ni("localStorage") ? n = window.localStorage : r == yr.Session && Ni("sessionStorage") ? n = window.sessionStorage : n = new ts(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = n, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), Mn(this.options.endpoint))
      return !!Mn(r);
    const n = new URL(this.options.endpoint).host;
    return r.includes(n);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Fi, ns];
    typeof window < "u" && t.push(vo), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      bn({
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
      bn({
        isSubscriptionOperation: (n) => n.query.definitions.some((i) => fs(i)),
        forwardSubscription: (n) => ({
          subscribe: (i) => {
            let o;
            const s = import("./index-d5d487d7.js").then(({ applyAsyncIterableIteratorToSink: u, applyLiveQueryJSONDiffPatch: l, makeAsyncIterableIteratorFromSink: f }) => {
              const d = { ...n, query: n.query || "" };
              return o = u(l(f((y) => this.getBaseSubscriptionClient().subscribe(d, y))), i), o;
            }).catch((u) => i.error(u));
            return {
              unsubscribe: () => {
                o ? o() : s.then((u) => {
                  u && u();
                });
              }
            };
          }
        })
      }),
      So,
      ...this.exchanges.afterAll
    );
    const r = new ki({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[ji] = this, r;
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
    return Qo({
      url: r,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var n, i;
        const o = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == ne.APIKey ? o.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == ne.InternalAuthToken ? o.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == ne.BrowserSession ? o.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == ne.Custom && await ((i = (n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(o)), o;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (n, i) => {
          var o, s, u, l, f, d;
          if (this.authenticationMode == ne.BrowserSession && (i != null && i.sessionToken)) {
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
    if (this.authenticationMode == ne.InternalAuthToken)
      r.authorization = "Basic " + ls("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == ne.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == ne.BrowserSession) {
      const n = this.sessionTokenStore.getItem(this.sessionStorageKey);
      n && (r.authorization = `Session ${n}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), n = [], i = t.connectionAttempts || is;
    const o = t.connectionGlobalTimeoutMs || os, s = () => {
      n.forEach((u) => u()), n = [];
    };
    return await new Promise((u, l) => {
      const f = setTimeout(() => {
        this.disposeClient(r), y(new Po("Timeout opening websocket connection to Gadget API"));
      }, o), d = (v) => {
        if (Dn(v)) {
          if (v.code == jn.TooManyRequests)
            return s(), y(new _o(v.reason));
          if (ss.includes(v.code) && i > 0) {
            i -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), m();
            return;
          }
        }
        clearTimeout(f), l(new Ai(v));
      }, y = (v) => {
        clearTimeout(f), l(v);
      }, h = () => {
        clearTimeout(f), u(r);
      }, m = () => {
        s(), n.push(r.on("connected", h)), n.push(r.on("closed", d)), n.push(r.on("error", y));
      };
      m();
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
Object.defineProperty(ya, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.24"
});
function cs(e, t) {
  if (typeof e != "string")
    return e;
  if (Mn(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Mn(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const ds = (e) => {
  var t;
  return e.kind !== "OperationDefinition" || e.operation !== "query" ? null : (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
}, fs = (e) => !!ds(e), ps = (e, t, r, n) => {
  const i = We(e);
  return ke({
    type: "query",
    name: `InternalFind${i}`,
    fields: {
      internal: Ce(r, {
        [e]: he({
          id: V({ value: t, type: "GadgetID!" }),
          select: V({ value: ii(n), type: "[String!]" })
        })
      }),
      ...lt(e, r)
    }
  });
}, ha = (e, t, r) => ({
  search: r != null && r.search ? V({ value: r == null ? void 0 : r.search, type: "String" }) : void 0,
  sort: r != null && r.sort ? V({ value: r == null ? void 0 : r.sort, type: `[${aa(e, t)}!]` }) : void 0,
  filter: r != null && r.filter ? V({ value: r == null ? void 0 : r.filter, type: `[${Qn(e, t)}!]` }) : void 0,
  select: r != null && r.select ? V({ value: ii(r == null ? void 0 : r.select), type: "[String!]" }) : void 0
}), ys = (e, t, r) => {
  const n = We(e), i = ha(n, t, r);
  return ke({
    type: "query",
    name: `InternalFindFirst${n}`,
    fields: {
      internal: Ce(t, {
        [`list${n}`]: he({
          ...i,
          first: V({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }),
      ...lt(e, t)
    }
  });
}, hs = (e, t, r) => {
  const n = We(e), i = ha(n, t, r);
  return ke({
    type: "query",
    name: `InternalFindMany${n}`,
    fields: {
      internal: Ce(t, {
        [`list${n}`]: he({
          ...i,
          after: V({ value: r == null ? void 0 : r.after, type: "String" }),
          before: V({ value: r == null ? void 0 : r.before, type: "String" }),
          first: V({ value: r == null ? void 0 : r.first, type: "Int" }),
          last: V({ value: r == null ? void 0 : r.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }),
      ...lt(e, t)
    }
  });
}, ni = (e, t) => `Internal${Jn(e, t)}Input`, ms = (e, t, r) => {
  const n = We(e);
  return ke({
    type: "mutation",
    name: `InternalCreate${n}`,
    fields: {
      internal: Ce(t, {
        [`create${n}`]: he({
          [e]: V({ value: r, type: ni(e, t) })
        }, {
          success: !0,
          ...xt,
          [e]: !0
        })
      }),
      ...lt(e, t)
    }
  });
}, bs = (e, t, r, n) => {
  We(e);
  const i = We(t);
  return ke({
    type: "mutation",
    name: `InternalBulkCreate${i}`,
    fields: {
      internal: Ce(r, {
        [`bulkCreate${i}`]: he({
          [t]: V({ value: n, type: `[${ni(e, r)}]!` })
        }, {
          success: !0,
          ...xt,
          [t]: !0
        })
      }),
      ...lt(e, r)
    }
  });
}, gs = (e, t, r, n) => {
  const i = We(e);
  return ke({
    type: "mutation",
    name: `InternalUpdate${i}`,
    fields: {
      internal: Ce(t, {
        [`update${i}`]: he({
          id: V({ value: r, type: "GadgetID!" }),
          [e]: V({ value: n, type: ni(e, t) })
        }, {
          success: !0,
          ...xt,
          [e]: !0
        })
      }),
      ...lt(e, t)
    }
  });
}, vs = (e, t, r) => {
  const n = We(e);
  return ke({
    type: "mutation",
    name: `InternalDelete${n}`,
    fields: {
      internal: Ce(t, {
        [`delete${n}`]: he({
          id: V({ value: r, type: "GadgetID!" })
        }, {
          success: !0,
          ...xt
        })
      })
    }
  });
}, Ss = (e, t, r) => {
  const n = We(e);
  return ke({
    type: "mutation",
    name: `InternalDeleteMany${n}`,
    fields: {
      internal: Ce(t, {
        [`deleteMany${n}`]: he({
          search: V({ value: r == null ? void 0 : r.search, type: "String" }),
          filter: V({ value: r == null ? void 0 : r.filter, type: `[${Qn(e, t)}!]` })
        }, {
          success: !0,
          ...xt
        })
      })
    }
  });
};
class Ve {
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
    }), Object.defineProperty(this, "namespace", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.capitalizedApiIdentifier = kr(t), this.namespace = (n == null ? void 0 : n.namespace) || [];
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let n = t;
    if (!this.validateRecord(t))
      throw new Vr(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = ps(this.apiIdentifier, t, this.namespace, ii(r == null ? void 0 : r.select)), o = await this.connection.currentClient.query(i.query, i.variables).toPromise(), u = (n ? tt : fr)(o, this.dataPath(this.apiIdentifier));
    return pr(o, u);
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
    const r = hs(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise(), i = fr(n, this.dataPath(`list${this.capitalizedApiIdentifier}`)), o = vr(n, i);
    return Lt.boot(this, o, { options: t, pageInfo: i.pageInfo });
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
    const n = ys(this.apiIdentifier, this.namespace, t), i = await this.connection.currentClient.query(n.query, n.variables).toPromise(), o = this.dataPath(`list${this.capitalizedApiIdentifier}`);
    let s;
    r === !1 ? s = fr(i, o) : s = tt(i, o, r);
    const u = vr(i, s);
    return Lt.boot(this, u, { options: t, pageInfo: s.pageInfo })[0];
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
    const r = ms(this.apiIdentifier, this.namespace, this.getRecordFromData(t, "create")), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise(), i = yt(n, this.dataPath(`create${this.capitalizedApiIdentifier}`));
    return pr(n, i[this.apiIdentifier]);
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
      throw new Rn("Cannot perform bulkCreate without a pluralApiIdentifier");
    const n = We(this.options.pluralApiIdentifier), i = bs(this.apiIdentifier, this.options.pluralApiIdentifier, this.namespace, t), o = await this.connection.currentClient.mutation(i.query, i.variables).toPromise(), s = yt(o, this.dataPath(`bulkCreate${n}`));
    return Xn(o, s[this.options.pluralApiIdentifier]);
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
    xn(t, "Can't update a record without an ID passed");
    const n = gs(this.apiIdentifier, this.namespace, t, this.getRecordFromData(r, "update")), i = await this.connection.currentClient.mutation(n.query, n.variables).toPromise(), o = yt(i, this.dataPath(`update${this.capitalizedApiIdentifier}`));
    return pr(i, o[this.apiIdentifier]);
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
    xn(t, "Can't delete a record without an ID");
    const r = vs(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise();
    yt(n, this.dataPath(`delete${this.capitalizedApiIdentifier}`));
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
    const r = Ss(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise();
    yt(n, this.dataPath(`deleteMany${this.capitalizedApiIdentifier}`));
  }
  dataPath(t) {
    return ["internal", ...mt([t], this.namespace)];
  }
}
function ii(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, n] of Object.entries(e))
    n && t.push(r);
  return t;
}
const Me = (e, t, r, n) => {
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
            return await Lo(
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
            const l = await Ti(
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
          return await Ci(this, t, r, e, s);
        }, o);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        i.prototype[o.type] = Object.assign(async function(s) {
          const u = await Ci(
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
          return await Ti(this, o.operationName, void 0, r, e, s);
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
                    (d) => ma(this[o.singleActionFunctionName], void 0, d)
                  )
                }
              }, await Ri(
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
              const [f, d] = ws(o, s, u, l);
              return await Ri(
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
function ma(e, t, r = {}) {
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
function ws(e, t, r, n) {
  let i, o;
  t && (i = n.shift()), r && (o = n.shift());
  const s = n.shift();
  let u = o;
  (i || o) && (u = ma(e, i, o));
  const l = {};
  for (const [f, d] of Object.entries(e.variables))
    l[f] = {
      value: f == "id" ? i : u == null ? void 0 : u[f],
      ...d
    };
  return [l, s];
}
const Pe = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  email: !0,
  roles: { key: !0, name: !0 },
  updatedAt: !0
}, Q = "user", st = "users", Is = Me(
  Q,
  st,
  Pe,
  [
    {
      type: "findOne",
      operationName: Q,
      modelApiIdentifier: Q,
      findByVariableName: "id",
      defaultSelection: Pe
    },
    {
      type: "maybeFindOne",
      operationName: Q,
      modelApiIdentifier: Q,
      findByVariableName: "id",
      defaultSelection: Pe
    },
    {
      type: "findMany",
      operationName: st,
      modelApiIdentifier: Q,
      defaultSelection: Pe
    },
    {
      type: "findFirst",
      operationName: st,
      modelApiIdentifier: Q,
      defaultSelection: Pe
    },
    {
      type: "maybeFindFirst",
      operationName: st,
      modelApiIdentifier: Q,
      defaultSelection: Pe
    },
    {
      type: "findOne",
      operationName: st,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: Q,
      defaultSelection: Pe
    },
    {
      type: "action",
      operationName: "signUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: Q,
      modelSelectionField: Q,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "SignUpUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Pe
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
      modelApiIdentifier: Q,
      modelSelectionField: st,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: Pe
    },
    {
      type: "action",
      operationName: "updateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Q,
      modelSelectionField: Q,
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
      defaultSelection: Pe
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
      modelApiIdentifier: Q,
      modelSelectionField: st,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: Pe
    },
    {
      type: "action",
      operationName: "deleteUser",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Q,
      modelSelectionField: Q,
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
      modelApiIdentifier: Q,
      modelSelectionField: st,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "createUser",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Q,
      modelSelectionField: Q,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "CreateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Pe
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
      modelApiIdentifier: Q,
      modelSelectionField: st,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: Pe
    }
  ]
), Je = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, me = "session", Dt = "sessions", ks = Me(
  me,
  Dt,
  Je,
  [
    {
      type: "findOne",
      operationName: me,
      modelApiIdentifier: me,
      findByVariableName: "id",
      defaultSelection: Je
    },
    {
      type: "maybeFindOne",
      operationName: me,
      modelApiIdentifier: me,
      findByVariableName: "id",
      defaultSelection: Je
    },
    {
      type: "findMany",
      operationName: Dt,
      modelApiIdentifier: me,
      defaultSelection: Je
    },
    {
      type: "findFirst",
      operationName: Dt,
      modelApiIdentifier: me,
      defaultSelection: Je
    },
    {
      type: "maybeFindFirst",
      operationName: Dt,
      modelApiIdentifier: me,
      defaultSelection: Je
    },
    {
      type: "action",
      operationName: "logInViaEmail",
      functionName: "logInViaEmail",
      namespace: "currentSession",
      modelApiIdentifier: me,
      modelSelectionField: me,
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
      defaultSelection: Je
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
      modelApiIdentifier: me,
      modelSelectionField: Dt,
      namespace: "currentSession",
      variables: {
        inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" }
      },
      defaultSelection: Je
    },
    {
      type: "action",
      operationName: "logOut",
      functionName: "logOut",
      namespace: "currentSession",
      modelApiIdentifier: me,
      modelSelectionField: me,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: Je
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
      modelApiIdentifier: me,
      modelSelectionField: Dt,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: Je
    }
  ]
), Qe = {
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
}, se = "shopifyProduct", kt = "shopifyProducts", As = Me(
  se,
  kt,
  Qe,
  [
    {
      type: "findOne",
      operationName: se,
      modelApiIdentifier: se,
      findByVariableName: "id",
      defaultSelection: Qe
    },
    {
      type: "maybeFindOne",
      operationName: se,
      modelApiIdentifier: se,
      findByVariableName: "id",
      defaultSelection: Qe
    },
    {
      type: "findMany",
      operationName: kt,
      modelApiIdentifier: se,
      defaultSelection: Qe
    },
    {
      type: "findFirst",
      operationName: kt,
      modelApiIdentifier: se,
      defaultSelection: Qe
    },
    {
      type: "maybeFindFirst",
      operationName: kt,
      modelApiIdentifier: se,
      defaultSelection: Qe
    },
    {
      type: "action",
      operationName: "createShopifyProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: se,
      modelSelectionField: se,
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
      defaultSelection: Qe
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
      modelApiIdentifier: se,
      modelSelectionField: kt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" }
      },
      defaultSelection: Qe
    },
    {
      type: "action",
      operationName: "updateShopifyProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: se,
      modelSelectionField: se,
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
      defaultSelection: Qe
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
      modelApiIdentifier: se,
      modelSelectionField: kt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyProductsInput!]" }
      },
      defaultSelection: Qe
    },
    {
      type: "action",
      operationName: "deleteShopifyProduct",
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
      operationName: "bulkDeleteShopifyProducts",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: se,
      modelSelectionField: kt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), He = {
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
}, ue = "shopifyProductImage", At = "shopifyProductImages", Os = Me(
  ue,
  At,
  He,
  [
    {
      type: "findOne",
      operationName: ue,
      modelApiIdentifier: ue,
      findByVariableName: "id",
      defaultSelection: He
    },
    {
      type: "maybeFindOne",
      operationName: ue,
      modelApiIdentifier: ue,
      findByVariableName: "id",
      defaultSelection: He
    },
    {
      type: "findMany",
      operationName: At,
      modelApiIdentifier: ue,
      defaultSelection: He
    },
    {
      type: "findFirst",
      operationName: At,
      modelApiIdentifier: ue,
      defaultSelection: He
    },
    {
      type: "maybeFindFirst",
      operationName: At,
      modelApiIdentifier: ue,
      defaultSelection: He
    },
    {
      type: "action",
      operationName: "createShopifyProductImage",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ue,
      modelSelectionField: ue,
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
      defaultSelection: He
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
      modelApiIdentifier: ue,
      modelSelectionField: At,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: He
    },
    {
      type: "action",
      operationName: "updateShopifyProductImage",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ue,
      modelSelectionField: ue,
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
      defaultSelection: He
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
      modelApiIdentifier: ue,
      modelSelectionField: At,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: He
    },
    {
      type: "action",
      operationName: "deleteShopifyProductImage",
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
      operationName: "bulkDeleteShopifyProductImages",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ue,
      modelSelectionField: At,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Xe = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  name: !0,
  position: !0,
  updatedAt: !0,
  values: !0
}, le = "shopifyProductOption", Ot = "shopifyProductOptions", Ns = Me(
  le,
  Ot,
  Xe,
  [
    {
      type: "findOne",
      operationName: le,
      modelApiIdentifier: le,
      findByVariableName: "id",
      defaultSelection: Xe
    },
    {
      type: "maybeFindOne",
      operationName: le,
      modelApiIdentifier: le,
      findByVariableName: "id",
      defaultSelection: Xe
    },
    {
      type: "findMany",
      operationName: Ot,
      modelApiIdentifier: le,
      defaultSelection: Xe
    },
    {
      type: "findFirst",
      operationName: Ot,
      modelApiIdentifier: le,
      defaultSelection: Xe
    },
    {
      type: "maybeFindFirst",
      operationName: Ot,
      modelApiIdentifier: le,
      defaultSelection: Xe
    },
    {
      type: "action",
      operationName: "createShopifyProductOption",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: le,
      modelSelectionField: le,
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
      defaultSelection: Xe
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
      modelApiIdentifier: le,
      modelSelectionField: Ot,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: Xe
    },
    {
      type: "action",
      operationName: "updateShopifyProductOption",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: le,
      modelSelectionField: le,
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
      defaultSelection: Xe
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
      modelApiIdentifier: le,
      modelSelectionField: Ot,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: Xe
    },
    {
      type: "action",
      operationName: "deleteShopifyProductOption",
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
      operationName: "bulkDeleteShopifyProductOptions",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: le,
      modelSelectionField: Ot,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Ze = {
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
}, ce = "shopifyProductVariant", Nt = "shopifyProductVariants", Es = Me(
  ce,
  Nt,
  Ze,
  [
    {
      type: "findOne",
      operationName: ce,
      modelApiIdentifier: ce,
      findByVariableName: "id",
      defaultSelection: Ze
    },
    {
      type: "maybeFindOne",
      operationName: ce,
      modelApiIdentifier: ce,
      findByVariableName: "id",
      defaultSelection: Ze
    },
    {
      type: "findMany",
      operationName: Nt,
      modelApiIdentifier: ce,
      defaultSelection: Ze
    },
    {
      type: "findFirst",
      operationName: Nt,
      modelApiIdentifier: ce,
      defaultSelection: Ze
    },
    {
      type: "maybeFindFirst",
      operationName: Nt,
      modelApiIdentifier: ce,
      defaultSelection: Ze
    },
    {
      type: "action",
      operationName: "createShopifyProductVariant",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ce,
      modelSelectionField: ce,
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
      defaultSelection: Ze
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
      modelApiIdentifier: ce,
      modelSelectionField: Nt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: Ze
    },
    {
      type: "action",
      operationName: "updateShopifyProductVariant",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ce,
      modelSelectionField: ce,
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
      defaultSelection: Ze
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
      modelApiIdentifier: ce,
      modelSelectionField: Nt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: Ze
    },
    {
      type: "action",
      operationName: "deleteShopifyProductVariant",
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
      operationName: "bulkDeleteShopifyProductVariants",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ce,
      modelSelectionField: Nt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), be = {
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
}, Y = "shopifyShop", ut = "shopifyShops", Ps = Me(
  Y,
  ut,
  be,
  [
    {
      type: "findOne",
      operationName: Y,
      modelApiIdentifier: Y,
      findByVariableName: "id",
      defaultSelection: be
    },
    {
      type: "maybeFindOne",
      operationName: Y,
      modelApiIdentifier: Y,
      findByVariableName: "id",
      defaultSelection: be
    },
    {
      type: "findMany",
      operationName: ut,
      modelApiIdentifier: Y,
      defaultSelection: be
    },
    {
      type: "findFirst",
      operationName: ut,
      modelApiIdentifier: Y,
      defaultSelection: be
    },
    {
      type: "maybeFindFirst",
      operationName: ut,
      modelApiIdentifier: Y,
      defaultSelection: be
    },
    {
      type: "action",
      operationName: "createShopifyShop",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Y,
      modelSelectionField: Y,
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
      defaultSelection: be
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
      modelApiIdentifier: Y,
      modelSelectionField: ut,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyShopsInput!]" }
      },
      defaultSelection: be
    },
    {
      type: "action",
      operationName: "updateShopifyShop",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Y,
      modelSelectionField: Y,
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
      defaultSelection: be
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
      modelApiIdentifier: Y,
      modelSelectionField: ut,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyShopsInput!]" }
      },
      defaultSelection: be
    },
    {
      type: "action",
      operationName: "deleteShopifyShop",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Y,
      modelSelectionField: Y,
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
      modelApiIdentifier: Y,
      modelSelectionField: ut,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "reinstallShopifyShop",
      functionName: "reinstall",
      namespace: null,
      modelApiIdentifier: Y,
      modelSelectionField: Y,
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
      defaultSelection: be
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
      modelApiIdentifier: Y,
      modelSelectionField: ut,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkReinstallShopifyShopsInput!]" }
      },
      defaultSelection: be
    },
    {
      type: "action",
      operationName: "uninstallShopifyShop",
      functionName: "uninstall",
      namespace: null,
      modelApiIdentifier: Y,
      modelSelectionField: Y,
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
      defaultSelection: be
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
      modelApiIdentifier: Y,
      modelSelectionField: ut,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUninstallShopifyShopsInput!]" }
      },
      defaultSelection: be
    }
  ]
), et = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
}, de = "productPairing", Et = "productPairings", _s = Me(
  de,
  Et,
  et,
  [
    {
      type: "findOne",
      operationName: de,
      modelApiIdentifier: de,
      findByVariableName: "id",
      defaultSelection: et
    },
    {
      type: "maybeFindOne",
      operationName: de,
      modelApiIdentifier: de,
      findByVariableName: "id",
      defaultSelection: et
    },
    {
      type: "findMany",
      operationName: Et,
      modelApiIdentifier: de,
      defaultSelection: et
    },
    {
      type: "findFirst",
      operationName: Et,
      modelApiIdentifier: de,
      defaultSelection: et
    },
    {
      type: "maybeFindFirst",
      operationName: Et,
      modelApiIdentifier: de,
      defaultSelection: et
    },
    {
      type: "action",
      operationName: "createProductPairing",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: de,
      modelSelectionField: de,
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
      defaultSelection: et
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
      modelApiIdentifier: de,
      modelSelectionField: Et,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateProductPairingsInput!]" }
      },
      defaultSelection: et
    },
    {
      type: "action",
      operationName: "updateProductPairing",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: de,
      modelSelectionField: de,
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
      defaultSelection: et
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
      modelApiIdentifier: de,
      modelSelectionField: Et,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateProductPairingsInput!]" }
      },
      defaultSelection: et
    },
    {
      type: "action",
      operationName: "deleteProductPairing",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: de,
      modelSelectionField: de,
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
      modelApiIdentifier: de,
      modelSelectionField: Et,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), _e = {
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
}, ie = "shopifySync", dt = "shopifySyncs", Ts = Me(
  ie,
  dt,
  _e,
  [
    {
      type: "findOne",
      operationName: ie,
      modelApiIdentifier: ie,
      findByVariableName: "id",
      defaultSelection: _e
    },
    {
      type: "maybeFindOne",
      operationName: ie,
      modelApiIdentifier: ie,
      findByVariableName: "id",
      defaultSelection: _e
    },
    {
      type: "findMany",
      operationName: dt,
      modelApiIdentifier: ie,
      defaultSelection: _e
    },
    {
      type: "findFirst",
      operationName: dt,
      modelApiIdentifier: ie,
      defaultSelection: _e
    },
    {
      type: "maybeFindFirst",
      operationName: dt,
      modelApiIdentifier: ie,
      defaultSelection: _e
    },
    {
      type: "findOne",
      operationName: dt,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ie,
      defaultSelection: _e
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
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
      defaultSelection: _e
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
      modelApiIdentifier: ie,
      modelSelectionField: dt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCompleteShopifySyncsInput!]" }
      },
      defaultSelection: _e
    },
    {
      type: "action",
      operationName: "errorShopifySync",
      functionName: "error",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
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
      defaultSelection: _e
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
      modelApiIdentifier: ie,
      modelSelectionField: dt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkErrorShopifySyncsInput!]" }
      },
      defaultSelection: _e
    },
    {
      type: "action",
      operationName: "runShopifySync",
      functionName: "run",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
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
      defaultSelection: _e
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
      modelApiIdentifier: ie,
      modelSelectionField: dt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: _e
    }
  ]
), Ge = {
  __typename: !0,
  id: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  updatedAt: !0
}, ae = "ambiguous", ft = "ambiguouss", Cs = Me(
  ae,
  ft,
  Ge,
  [
    {
      type: "findOne",
      operationName: ae,
      modelApiIdentifier: ae,
      findByVariableName: "id",
      defaultSelection: Ge
    },
    {
      type: "maybeFindOne",
      operationName: ae,
      modelApiIdentifier: ae,
      findByVariableName: "id",
      defaultSelection: Ge
    },
    {
      type: "findMany",
      operationName: ft,
      modelApiIdentifier: ae,
      defaultSelection: Ge
    },
    {
      type: "findFirst",
      operationName: ft,
      modelApiIdentifier: ae,
      defaultSelection: Ge
    },
    {
      type: "maybeFindFirst",
      operationName: ft,
      modelApiIdentifier: ae,
      defaultSelection: Ge
    },
    {
      type: "findOne",
      operationName: ft,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ae,
      defaultSelection: Ge
    },
    {
      type: "action",
      operationName: "createAmbiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
      isBulk: !1,
      isDeleter: !1,
      variables: { ambiguous: { required: !1, type: "CreateAmbiguousInput" } },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ge
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
      modelApiIdentifier: ae,
      modelSelectionField: ft,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAmbiguousInput!]" } },
      defaultSelection: Ge
    },
    {
      type: "action",
      operationName: "updateAmbiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
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
      defaultSelection: Ge
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
      modelApiIdentifier: ae,
      modelSelectionField: ft,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAmbiguousInput!]" } },
      defaultSelection: Ge
    },
    {
      type: "action",
      operationName: "deleteAmbiguous",
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
      operationName: "bulkDeleteAmbiguous",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ae,
      modelSelectionField: ft,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Le = {
  __typename: !0,
  id: !0,
  createdAt: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, oe = "unambiguous", pt = "unambiguouss", Rs = Me(
  oe,
  pt,
  Le,
  [
    {
      type: "findOne",
      operationName: oe,
      modelApiIdentifier: oe,
      findByVariableName: "id",
      defaultSelection: Le
    },
    {
      type: "maybeFindOne",
      operationName: oe,
      modelApiIdentifier: oe,
      findByVariableName: "id",
      defaultSelection: Le
    },
    {
      type: "findMany",
      operationName: pt,
      modelApiIdentifier: oe,
      defaultSelection: Le
    },
    {
      type: "findFirst",
      operationName: pt,
      modelApiIdentifier: oe,
      defaultSelection: Le
    },
    {
      type: "maybeFindFirst",
      operationName: pt,
      modelApiIdentifier: oe,
      defaultSelection: Le
    },
    {
      type: "findOne",
      operationName: pt,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: oe,
      defaultSelection: Le
    },
    {
      type: "action",
      operationName: "createUnambiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: oe,
      modelSelectionField: oe,
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
      defaultSelection: Le
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
      modelApiIdentifier: oe,
      modelSelectionField: pt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateUnambiguousInput!]" }
      },
      defaultSelection: Le
    },
    {
      type: "action",
      operationName: "updateUnambiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: oe,
      modelSelectionField: oe,
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
      defaultSelection: Le
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
      modelApiIdentifier: oe,
      modelSelectionField: pt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateUnambiguousInput!]" }
      },
      defaultSelection: Le
    },
    {
      type: "action",
      operationName: "deleteUnambiguous",
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
      operationName: "bulkDeleteUnambiguous",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: oe,
      modelSelectionField: pt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Mi = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, $i = "session", xs = "sessions", Ds = Me(
  $i,
  xs,
  Mi,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: Mi,
      modelApiIdentifier: $i
    }
  ]
);
var ba;
const qi = "production", Fs = "development", js = Symbol.for("gadget/modelRelationships"), Ms = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class $s {
  constructor(t) {
    var i;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[ba] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (o) => await xi(
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
      async () => await xi(
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
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? Ms() ?? Fs).toLocaleLowerCase();
    let r;
    this.apiRoots[this.environment] ? r = this.apiRoots[this.environment] : r = `https://related-products-example${this.environment == qi ? "" : `--${this.environment}`}.gadget.app`;
    const n = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== qi) {
      const o = ({ forward: s }) => (u) => {
        const l = s(u);
        return Ln(
          l,
          $t((f) => {
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
    if (this.connection = new ya({
      endpoint: new URL("api/graphql", r).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: n,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == ne.APIKey && !((i = t == null ? void 0 : t.authenticationMode) != null && i.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new Is(this.connection), this.session = new ks(this.connection), this.shopifyProduct = new As(this.connection), this.shopifyProductImage = new Os(this.connection), this.shopifyProductOption = new Ns(this.connection), this.shopifyProductVariant = new Es(this.connection), this.shopifyShop = new Ps(this.connection), this.productPairing = new _s(this.connection), this.shopifySync = new Ts(this.connection), this.ambiguous = new Cs(this.connection), this.unambiguous = new Rs(this.connection), this.currentSession = new Ds(this.connection), this.internal = {
      user: new Ve("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new Ve("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new Ve("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new Ve("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new Ve("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new Ve("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new Ve("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new Ve("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new Ve("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new Ve("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new Ve("unambiguous", this.connection, {
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
    xn(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let i, o;
    return typeof n < "u" ? (i = r, o = n) : !t.variables || Object.keys(t.variables).length == 0 ? (i = {}, o = r) : (typeof r == "string" ? i = { id: r } : i = r, o = {}), await Wo(this.connection, t, i, o);
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
    return new Tr(this.connection, t, r);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
ba = js;
var ga = {}, Lr = Se.createContext(ga), qs = Lr.Provider;
Lr.Consumer;
Lr.displayName = "UrqlContext";
var va = () => {
  var e = Se.useContext(Lr);
  if (e === ga && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, $n = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, Bs = (e, t) => e === t || !(!e || !t || e.key !== t.key), vn = (e, t) => {
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
      if (s === "operation" ? !Bs(n[s], i[s]) : n[s] !== i[s])
        return !0;
    return !1;
  })(e, r) ? r : e;
}, Us = (e, t) => {
  for (var r = 0, n = t.length; r < n; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}, Sn = Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function qr(e, t) {
  process.env.NODE_ENV !== "production" && Sn && Sn.ReactCurrentOwner && Sn.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function Vs(e) {
  var t = Se.useRef(!0), r = va(), [n, i] = Se.useState($n), o = Se.useCallback((s, u) => (qr(i, {
    ...$n,
    fetching: !0
  }), Br(wr(1)(Z((l) => !l.hasNext)(Ct((l) => {
    t.current && qr(i, {
      fetching: !1,
      stale: l.stale,
      data: l.data,
      error: l.error,
      extensions: l.extensions,
      operation: l.operation
    });
  })(r.executeMutation(dr(e, s), u || {})))))), [r, e, i]);
  return Se.useEffect(() => (t.current = !0, () => {
    t.current = !1;
  }), []), [n, o];
}
function Gs(e, t) {
  var r = Se.useRef(void 0);
  return Se.useMemo(() => {
    var n = dr(e, t);
    return r.current !== void 0 && r.current.key === n.key ? r.current : (r.current = n, n);
  }, [e, t]);
}
var Ls = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    e.operations$ && Rt((n) => {
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
}, Ws = (e, t) => e.suspense && (!t || t.suspense !== !1);
function zs(e) {
  var t = va(), r = Ls(t), n = Ws(t, e.context), i = Gs(e.query, e.variables), o = Se.useMemo(() => {
    if (e.pause)
      return null;
    var h = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return n ? Ct((m) => {
      r.set(i.key, m);
    })(h) : h;
  }, [r, t, i, n, e.pause, e.requestPolicy, e.context]), s = Se.useCallback((h, m) => {
    if (!h)
      return {
        fetching: !1
      };
    var v = r.get(i.key);
    if (v) {
      if (m && v != null && "then" in v)
        throw v;
    } else {
      var N, F = Rt((I) => {
        v = I, N && N(v);
      })(Li(() => m && !N || !v)(h));
      if (v == null && m) {
        var C = new Promise((I) => {
          N = I;
        });
        throw r.set(i.key, C), C;
      } else
        F.unsubscribe();
    }
    return v || {
      fetching: !0
    };
  }, [r, i]), u = [t, i, e.requestPolicy, e.context, e.pause], [l, f] = Se.useState(() => [o, vn($n, s(o, n)), u]), d = l[1];
  o !== l[0] && Us(l[2], u) && f([o, d = vn(l[1], s(o, n)), u]), Se.useEffect(() => {
    var h = l[0], m = l[2][1], v = !1, N = (C) => {
      v = !0, qr(f, (I) => {
        var B = vn(I[1], C);
        return I[1] !== B ? [I[0], B, I[2]] : I;
      });
    };
    if (h) {
      var F = Rt(N)(Un(() => {
        N({
          fetching: !1
        });
      })(h));
      return v || N({
        fetching: !0
      }), () => {
        r.dispose(m.key), F.unsubscribe();
      };
    } else
      N({
        fetching: !1
      });
  }, [r, l[0], l[2][1]]);
  var y = Se.useCallback((h) => {
    var m = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...h
    };
    qr(f, (v) => [n ? Ct((N) => {
      r.set(i.key, N);
    })(t.executeQuery(i, m)) : t.executeQuery(i, m), v[1], u]);
  }, [t, r, i, n, s, e.requestPolicy, e.context]);
  return [d, y];
}
const ai = we.createContext(void 0), Ks = we.createContext(void 0), Ys = "/", Js = "signOut", Qs = "/";
function Hs(e) {
  let t, r;
  if ("api" in e) {
    if (!Ca(e.api))
      throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    t = e.api, r = e.api.connection.currentClient;
  } else if (e.value)
    r = e.value;
  else
    throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
  r.suspense = !0;
  let n = Ys, i = Js, o = Qs;
  if ("auth" in e) {
    const { auth: s } = e;
    s != null && s.signInPath && (n = s.signInPath), s != null && s.signOutActionApiIdentifier && (i = s.signOutActionApiIdentifier), s != null && s.redirectOnSuccessfulSignInPath && (o = s.redirectOnSuccessfulSignInPath);
  }
  return we.createElement(
    ai.Provider,
    { value: r },
    we.createElement(
      Ks.Provider,
      { value: {
        api: t,
        navigate: e.navigate,
        auth: {
          signInPath: n,
          signOutActionApiIdentifier: i,
          redirectOnSuccessfulSignInPath: o
        }
      } },
      we.createElement(qs, { value: r }, e.children)
    )
  );
}
const Sa = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Xs = (e, t) => {
  let r = "";
  return e !== void 0 ? r = `[Network] ${e.message}` : t !== void 0 ? t.forEach((n) => {
    r += `[GraphQL] ${n.message}
`;
  }) : r = "Unknown error", r.trim();
}, Zs = (e) => typeof e == "string" ? new gr(e) : e != null && e.message && !e.code ? new gr(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class _t extends Error {
  /** @private */
  static forClientSideError(t, r) {
    return new _t({
      executionErrors: [t],
      response: r
    });
  }
  /** @private */
  static forErrorsResponse(t, r) {
    return new _t({
      executionErrors: t.map(Hn),
      response: r
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new _t({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, r, n = !1) {
    const i = xo(t, r);
    let o = _t.forMaybeCombinedError(t.error);
    return !o && i && !n && (o = _t.forClientSideError(i)), o;
  }
  constructor({ networkError: t, executionErrors: r, response: n }) {
    const i = (r || []).map(Zs), o = Xs(t, i);
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
const eu = (e) => {
  const { context: t, suspense: r, ...n } = e ?? {}, i = hr(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...n,
    context: i
  };
}, tu = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), ru = (e) => {
  if (!Gi(ai))
    throw new Error(Sa);
  const t = eu(e);
  return zs(t);
};
var nu = typeof Element < "u", iu = typeof Map == "function", au = typeof Set == "function", ou = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Cr(e, t) {
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
        if (!Cr(e[n], t[n]))
          return !1;
      return !0;
    }
    var o;
    if (iu && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!Cr(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (au && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (ou && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (nu && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !Cr(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var su = function(t, r) {
  try {
    return Cr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const uu = /* @__PURE__ */ Pa(su), lu = (e) => {
  const t = wn();
  return e ? (t.current === void 0 || !uu(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, cu = (e) => {
  if (!Gi(ai))
    throw new Error(Sa);
  return Vs(e);
}, du = (e, t) => {
  const r = lu(t), n = hr(() => ei(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, r, e.findMany.namespace), [e, r]), [i, o] = ru(tu(n, t));
  return [hr(() => {
    const u = mt([e.findMany.operationName], e.findMany.namespace);
    let l = i.data;
    if (l) {
      const d = Gt(i.data, u);
      if (d) {
        const y = vr(i, d);
        l = Lt.boot(e, y, d);
      }
    }
    const f = _t.errorIfDataAbsent(i, u, t == null ? void 0 : t.pause);
    return { ...i, data: l, error: f };
  }, [e, t == null ? void 0 : t.pause, i]), o];
};
var qn = { exports: {} }, ur = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bi;
function fu() {
  if (Bi)
    return ur;
  Bi = 1;
  var e = we, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, f) {
    var d, y = {}, h = null, m = null;
    f !== void 0 && (h = "" + f), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (d in l)
      n.call(l, d) && !o.hasOwnProperty(d) && (y[d] = l[d]);
    if (u && u.defaultProps)
      for (d in l = u.defaultProps, l)
        y[d] === void 0 && (y[d] = l[d]);
    return { $$typeof: t, type: u, key: h, ref: m, props: y, _owner: i.current };
  }
  return ur.Fragment = r, ur.jsx = s, ur.jsxs = s, ur;
}
var Pr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ui;
function pu() {
  return Ui || (Ui = 1, process.env.NODE_ENV !== "production" && function() {
    var e = we, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, N = "@@iterator";
    function F(a) {
      if (a === null || typeof a != "object")
        return null;
      var c = v && a[v] || a[N];
      return typeof c == "function" ? c : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(a) {
      {
        for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
          p[g - 1] = arguments[g];
        B("error", a, p);
      }
    }
    function B(a, c, p) {
      {
        var g = C.ReactDebugCurrentFrame, A = g.getStackAddendum();
        A !== "" && (c += "%s", p = p.concat([A]));
        var O = p.map(function(k) {
          return String(k);
        });
        O.unshift("Warning: " + c), Function.prototype.apply.call(console[a], console, O);
      }
    }
    var b = !1, P = !1, S = !1, U = !1, Ae = !1, Re;
    Re = Symbol.for("react.module.reference");
    function $e(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === o || Ae || a === i || a === f || a === d || U || a === m || b || P || S || typeof a == "object" && a !== null && (a.$$typeof === h || a.$$typeof === y || a.$$typeof === s || a.$$typeof === u || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === Re || a.getModuleId !== void 0));
    }
    function te(a, c, p) {
      var g = a.displayName;
      if (g)
        return g;
      var A = c.displayName || c.name || "";
      return A !== "" ? p + "(" + A + ")" : p;
    }
    function X(a) {
      return a.displayName || "Context";
    }
    function L(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
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
            return X(c) + ".Consumer";
          case s:
            var p = a;
            return X(p._context) + ".Provider";
          case l:
            return te(a, a.render, "ForwardRef");
          case y:
            var g = a.displayName || null;
            return g !== null ? g : L(a.type) || "Memo";
          case h: {
            var A = a, O = A._payload, k = A._init;
            try {
              return L(k(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, j = 0, M, x, G, Oe, $, xe, qe;
    function Ke() {
    }
    Ke.__reactDisabledLog = !0;
    function Ye() {
      {
        if (j === 0) {
          M = console.log, x = console.info, G = console.warn, Oe = console.error, $ = console.group, xe = console.groupCollapsed, qe = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Ke,
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
            log: E({}, a, {
              value: M
            }),
            info: E({}, a, {
              value: x
            }),
            warn: E({}, a, {
              value: G
            }),
            error: E({}, a, {
              value: Oe
            }),
            group: E({}, a, {
              value: $
            }),
            groupCollapsed: E({}, a, {
              value: xe
            }),
            groupEnd: E({}, a, {
              value: qe
            })
          });
        }
        j < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = C.ReactCurrentDispatcher, ct;
    function Be(a, c, p) {
      {
        if (ct === void 0)
          try {
            throw Error();
          } catch (A) {
            var g = A.stack.trim().match(/\n( *(at )?)/);
            ct = g && g[1] || "";
          }
        return `
` + ct + a;
      }
    }
    var bt = !1, nt;
    {
      var Wr = typeof WeakMap == "function" ? WeakMap : Map;
      nt = new Wr();
    }
    function Wt(a, c) {
      if (!a || bt)
        return "";
      {
        var p = nt.get(a);
        if (p !== void 0)
          return p;
      }
      var g;
      bt = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = W.current, W.current = null, Ye();
      try {
        if (c) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (re) {
              g = re;
            }
            Reflect.construct(a, [], k);
          } else {
            try {
              k.call();
            } catch (re) {
              g = re;
            }
            a.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            g = re;
          }
          a();
        }
      } catch (re) {
        if (re && g && typeof re.stack == "string") {
          for (var w = re.stack.split(`
`), q = g.stack.split(`
`), _ = w.length - 1, T = q.length - 1; _ >= 1 && T >= 0 && w[_] !== q[T]; )
            T--;
          for (; _ >= 1 && T >= 0; _--, T--)
            if (w[_] !== q[T]) {
              if (_ !== 1 || T !== 1)
                do
                  if (_--, T--, T < 0 || w[_] !== q[T]) {
                    var z = `
` + w[_].replace(" at new ", " at ");
                    return a.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", a.displayName)), typeof a == "function" && nt.set(a, z), z;
                  }
                while (_ >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        bt = !1, W.current = O, J(), Error.prepareStackTrace = A;
      }
      var Ee = a ? a.displayName || a.name : "", ir = Ee ? Be(Ee) : "";
      return typeof a == "function" && nt.set(a, ir), ir;
    }
    function zr(a, c, p) {
      return Wt(a, !1);
    }
    function Kr(a) {
      var c = a.prototype;
      return !!(c && c.isReactComponent);
    }
    function it(a, c, p) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Wt(a, Kr(a));
      if (typeof a == "string")
        return Be(a);
      switch (a) {
        case f:
          return Be("Suspense");
        case d:
          return Be("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return zr(a.render);
          case y:
            return it(a.type, c, p);
          case h: {
            var g = a, A = g._payload, O = g._init;
            try {
              return it(O(A), c, p);
            } catch {
            }
          }
        }
      return "";
    }
    var at = Object.prototype.hasOwnProperty, zt = {}, Kt = C.ReactDebugCurrentFrame;
    function ot(a) {
      if (a) {
        var c = a._owner, p = it(a.type, a._source, c ? c.type : null);
        Kt.setExtraStackFrame(p);
      } else
        Kt.setExtraStackFrame(null);
    }
    function Yr(a, c, p, g, A) {
      {
        var O = Function.call.bind(at);
        for (var k in a)
          if (O(a, k)) {
            var w = void 0;
            try {
              if (typeof a[k] != "function") {
                var q = Error((g || "React class") + ": " + p + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw q.name = "Invariant Violation", q;
              }
              w = a[k](c, k, g, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              w = _;
            }
            w && !(w instanceof Error) && (ot(A), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", p, k, typeof w), ot(null)), w instanceof Error && !(w.message in zt) && (zt[w.message] = !0, ot(A), I("Failed %s type: %s", p, w.message), ot(null));
          }
      }
    }
    var Jr = Array.isArray;
    function gt(a) {
      return Jr(a);
    }
    function Qr(a) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, p = c && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return p;
      }
    }
    function Hr(a) {
      try {
        return Yt(a), !1;
      } catch {
        return !0;
      }
    }
    function Yt(a) {
      return "" + a;
    }
    function Jt(a) {
      if (Hr(a))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qr(a)), Yt(a);
    }
    var Ue = C.ReactCurrentOwner, Xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qt, Ht, vt;
    vt = {};
    function Zr(a) {
      if (at.call(a, "ref")) {
        var c = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function en(a) {
      if (at.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function tn(a, c) {
      if (typeof a.ref == "string" && Ue.current && c && Ue.current.stateNode !== c) {
        var p = L(Ue.current.type);
        vt[p] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(Ue.current.type), a.ref), vt[p] = !0);
      }
    }
    function rn(a, c) {
      {
        var p = function() {
          Qt || (Qt = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function nn(a, c) {
      {
        var p = function() {
          Ht || (Ht = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var an = function(a, c, p, g, A, O, k) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: c,
        ref: p,
        props: k,
        // Record the component responsible for creating this element.
        _owner: O
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
        value: A
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function on(a, c, p, g, A) {
      {
        var O, k = {}, w = null, q = null;
        p !== void 0 && (Jt(p), w = "" + p), en(c) && (Jt(c.key), w = "" + c.key), Zr(c) && (q = c.ref, tn(c, A));
        for (O in c)
          at.call(c, O) && !Xr.hasOwnProperty(O) && (k[O] = c[O]);
        if (a && a.defaultProps) {
          var _ = a.defaultProps;
          for (O in _)
            k[O] === void 0 && (k[O] = _[O]);
        }
        if (w || q) {
          var T = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          w && rn(k, T), q && nn(k, T);
        }
        return an(a, w, q, A, g, Ue.current, k);
      }
    }
    var St = C.ReactCurrentOwner, Xt = C.ReactDebugCurrentFrame;
    function Ne(a) {
      if (a) {
        var c = a._owner, p = it(a.type, a._source, c ? c.type : null);
        Xt.setExtraStackFrame(p);
      } else
        Xt.setExtraStackFrame(null);
    }
    var wt;
    wt = !1;
    function It(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Zt() {
      {
        if (St.current) {
          var a = L(St.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function sn(a) {
      {
        if (a !== void 0) {
          var c = a.fileName.replace(/^.*[\\\/]/, ""), p = a.lineNumber;
          return `

Check your code at ` + c + ":" + p + ".";
        }
        return "";
      }
    }
    var er = {};
    function un(a) {
      {
        var c = Zt();
        if (!c) {
          var p = typeof a == "string" ? a : a.displayName || a.name;
          p && (c = `

Check the top-level render call using <` + p + ">.");
        }
        return c;
      }
    }
    function tr(a, c) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var p = un(c);
        if (er[p])
          return;
        er[p] = !0;
        var g = "";
        a && a._owner && a._owner !== St.current && (g = " It was passed a child from " + L(a._owner.type) + "."), Ne(a), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, g), Ne(null);
      }
    }
    function rr(a, c) {
      {
        if (typeof a != "object")
          return;
        if (gt(a))
          for (var p = 0; p < a.length; p++) {
            var g = a[p];
            It(g) && tr(g, c);
          }
        else if (It(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var A = F(a);
          if (typeof A == "function" && A !== a.entries)
            for (var O = A.call(a), k; !(k = O.next()).done; )
              It(k.value) && tr(k.value, c);
        }
      }
    }
    function ln(a) {
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
          var g = L(c);
          Yr(p, a.props, "prop", g, a);
        } else if (c.PropTypes !== void 0 && !wt) {
          wt = !0;
          var A = L(c);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cn(a) {
      {
        for (var c = Object.keys(a.props), p = 0; p < c.length; p++) {
          var g = c[p];
          if (g !== "children" && g !== "key") {
            Ne(a), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Ne(null);
            break;
          }
        }
        a.ref !== null && (Ne(a), I("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    function nr(a, c, p, g, A, O) {
      {
        var k = $e(a);
        if (!k) {
          var w = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var q = sn(A);
          q ? w += q : w += Zt();
          var _;
          a === null ? _ = "null" : gt(a) ? _ = "array" : a !== void 0 && a.$$typeof === t ? (_ = "<" + (L(a.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof a, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, w);
        }
        var T = on(a, c, p, A, O);
        if (T == null)
          return T;
        if (k) {
          var z = c.children;
          if (z !== void 0)
            if (g)
              if (gt(z)) {
                for (var Ee = 0; Ee < z.length; Ee++)
                  rr(z[Ee], a);
                Object.freeze && Object.freeze(z);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              rr(z, a);
        }
        return a === n ? cn(T) : ln(T), T;
      }
    }
    function dn(a, c, p) {
      return nr(a, c, p, !0);
    }
    function fn(a, c, p) {
      return nr(a, c, p, !1);
    }
    var pn = fn, yn = dn;
    Pr.Fragment = n, Pr.jsx = pn, Pr.jsxs = yn;
  }()), Pr;
}
process.env.NODE_ENV === "production" ? qn.exports = fu() : qn.exports = pu();
var Vi = qn.exports;
const yu = ka(function({ open: e, onShow: t, onHide: r, children: n, ...i }, o) {
  const [s, u] = Rr(), { titleBar: l, modalContent: f } = Aa.toArray(n).reduce(
    (y, h) => {
      const m = typeof h == "object" && "type" in h ? h.type : void 0;
      return m === "ui-title-bar" || typeof m == "object" && m.displayName === "ui-title-bar" ? {
        ...y,
        titleBar: h
      } : (y.modalContent.push(h), y);
    },
    { modalContent: [] }
  ), d = s ? Ea.createPortal(f, s.content) : null;
  return je(() => {
    s && (e ? s.show() : s.hide());
  }, [s, e]), je(() => {
    if (!(!s || !t))
      return s.addEventListener("show", t), () => {
        s.removeEventListener("show", t);
      };
  }, [s, t]), je(() => {
    if (!(!s || !r))
      return s.addEventListener("hide", r), () => {
        s.removeEventListener("hide", r);
      };
  }, [s, r]), je(() => {
    if (s)
      return () => {
        s.hide();
      };
  }, [s]), /* @__PURE__ */ Vi.jsxs(
    "ui-modal",
    {
      ...i,
      ref: (y) => {
        u(y), o && (typeof o == "function" ? o(y) : o.current = y);
      },
      children: [
        l,
        /* @__PURE__ */ Vi.jsx("div", { children: d })
      ]
    }
  );
});
yu.displayName = "ui-modal";
const hu = new Proxy(
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
function mu() {
  if (typeof window > "u")
    return hu;
  if (!window.shopify)
    throw Error(
      "The shopify global is not defined. This likely means the App Bridge script tag was not added correctly to this page"
    );
  return window.shopify;
}
var ht;
(function(e) {
  e[e.Standalone = 0] = "Standalone", e[e.Embedded = 1] = "Embedded";
})(ht || (ht = {}));
const bu = `
  mutation ShopifyFetchOrInstallShop($shopifySessionToken: String!) {
    shopifyConnection {
      fetchOrInstallShop(shopifySessionToken: $shopifySessionToken) {
        isAuthenticated
        redirectToOauth
        missingScopes
      }
    }
  }
`, gu = Oa(({ children: e, gadgetAppUrl: t, originalQueryParams: r, api: n, type: i, host: o, isReady: s, isRootFrameRequest: u }) => {
  const l = mu(), f = (r == null ? void 0 : r.has("hmac")) && (r == null ? void 0 : r.has("shop")), d = l.environment.embedded || l.environment.mobile, y = d && i === ht.Embedded, h = s && typeof o < "u" && !y, [m, v] = Rr({
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !0,
    appBridge: l,
    isRootFrameRequest: !1
  }), [N, F] = Rr();
  je(() => {
    if (!l) {
      console.debug("[gadget-rsab] no app bridge, skipping client auth setup");
      return;
    }
    n.connection.setAuthenticationMode({
      custom: {
        async processFetch(te, X) {
          const L = new Headers(X.headers), E = await l.idToken();
          L.append("Authorization", `ShopifySessionToken ${E}`), X.headers ?? (X.headers = {}), L.forEach(function(j, M) {
            X.headers[M] = j;
          });
        },
        async processTransactionConnectionParams(te) {
          const X = await l.idToken();
          te.auth.shopifySessionToken = X;
        }
      }
    }), console.debug("[gadget-rsab] set up client auth for session tokens");
  }, [n.connection, l]);
  let C = !1, I = !1, B = hr(() => [], []);
  const b = wn(!1), P = wn(!1), [{ data: S, fetching: U, error: Ae }, Re] = cu(bu);
  S && (console.debug({ fetchOrInstallShopData: S }, "[gadget-rsab] fetched or installed shop data"), C = S.shopifyConnection.fetchOrInstallShop.redirectToOauth, I = S.shopifyConnection.fetchOrInstallShop.isAuthenticated, B = S.shopifyConnection.fetchOrInstallShop.missingScopes ?? []), je(() => {
    U && (P.current = !0);
  }, [U]), je(() => {
    b.current || l && (b.current = !0, console.debug("[gadget-rsab] getting sessionToken to fetch or install shop"), l.idToken().then((te) => {
      console.debug("[gadget-rsab] fetching or installing shop"), Re({ shopifySessionToken: te }).catch((X) => {
        console.error({ err: X }, "[gadget-rsab] error fetching or installing shop");
      });
    }).catch(F));
  }, [l, Re]), je(() => {
    if (!C || u)
      return;
    const te = new URL("/api/connections/auth/shopify", t);
    te.search = (r == null ? void 0 : r.toString()) ?? "";
    const X = te.toString();
    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process", {
      appType: i,
      isInstallRequest: f,
      isEmbedded: d,
      redirectURL: X,
      gadgetAppUrl: t
    }), open(X, "_top");
  }, [t, u, r, C]);
  const $e = h || C || U || !P.current;
  return je(() => {
    const te = {
      isAuthenticated: I,
      isEmbedded: d,
      canAuth: !!l,
      loading: $e,
      appBridge: l,
      error: Ae || N,
      isRootFrameRequest: u
    };
    return console.debug("[gadget-rsab] context changed", te), v(te);
  }, [$e, d, l, I, Ae, N, u]), je(() => {
    if (B.length > 0 && !C) {
      const te = new CustomEvent("gadget:devharness:rsab.shopifyManagedInstallation.missingScopes", {
        detail: {
          missingScopes: B
        }
      });
      globalThis.dispatchEvent(te);
    }
  }, [C, B]), we.createElement(wa.Provider, { value: m }, e);
}), vu = ({ isRootFrameRequest: e, children: t, query: r, gadgetAppUrl: n, type: i }) => {
  const o = (r == null ? void 0 : r.has("hmac")) && (r == null ? void 0 : r.has("shop")), s = o;
  return je(() => {
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
  }, [n, e, r, s]), we.createElement(wa.Provider, { value: {
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !1,
    appBridge: null,
    isRootFrameRequest: e
  } }, t);
}, Su = ({ type: e, children: t, api: r }) => {
  const n = !!(globalThis && globalThis.shopify), [i, o] = Rr(null), s = !!i, { query: u } = i ?? {}, l = (u == null ? void 0 : u.get("host")) ?? void 0, f = e ?? ht.Embedded, d = hr(() => u, [s]), y = !(u != null && u.has("hmac")) && !(u != null && u.has("shop")) && e == ht.Embedded, h = new URL(r.connection.options.endpoint).origin;
  if (je(() => {
    o({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search)
    });
  }, []), console.debug("[gadget-rsab] provider rendering", {
    host: l,
    location: i,
    coalescedType: f,
    isReady: s
  }), f == ht.Embedded && !n && globalThis.top && globalThis.top !== globalThis.self) {
    let m;
    try {
      const v = document.referrer;
      m = new URL(v);
    } catch {
      const N = new CustomEvent("gadget:devharness:rsab.invalidReferrer", {
        detail: {
          url: document.referrer
        }
      });
      globalThis.dispatchEvent(N);
    }
    if (m && m.hostname === "admin.shopify.com")
      throw new Error("Expected app bridge to be defined in embedded context, but it was not. This is likely due to a missing script tag, see https://shopify.dev/docs/api/app-bridge-library");
  }
  if (f === ht.Embedded && globalThis.top === globalThis.self) {
    const m = new CustomEvent("gadget:devharness:rsab.embeddedInRootContext");
    globalThis.dispatchEvent(m);
  }
  return we.createElement(Hs, { api: r }, f === ht.Embedded && n ? we.createElement(gu, { gadgetAppUrl: h, api: r, originalQueryParams: d, type: f, host: l, isReady: s, isRootFrameRequest: y }, t) : we.createElement(vu, { isRootFrameRequest: y, query: u, type: f, gadgetAppUrl: h }, t));
}, wa = Na({
  loading: !0,
  isEmbedded: !1,
  isAuthenticated: !1,
  canAuth: !1,
  appBridge: null,
  isRootFrameRequest: !1
}), Ia = new $s(), wu = () => {
  const [{ data: e }] = du(Ia.shopifyProduct);
  return /* @__PURE__ */ xr.jsx(xr.Fragment, { children: JSON.stringify(e) });
}, Ou = () => /* @__PURE__ */ xr.jsx(Su, { api: Ia, shopifyApiKey: "deadbeef", children: /* @__PURE__ */ xr.jsx(wu, {}) });
export {
  Ou as A,
  wu as R,
  Au as c,
  Pa as g
};
