import * as Ie from "react";
import ke, { useMemo as wr, useContext as Hi, useRef as En, forwardRef as Ma, useState as $r, Children as $a, useEffect as $e, memo as qa, createContext as Ba } from "react";
import Ua from "react-dom";
var $u = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Va(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pn = { exports: {} }, cr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pi;
function Ga() {
  if (pi)
    return cr;
  pi = 1;
  var e = ke, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return cr.Fragment = r, cr.jsx = s, cr.jsxs = s, cr;
}
var dr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi;
function La() {
  return yi || (yi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ke, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.iterator, N = "@@iterator";
    function F(a) {
      if (a === null || typeof a != "object")
        return null;
      var c = g && a[g] || a[N];
      return typeof c == "function" ? c : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(a) {
      {
        for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), v = 1; v < c; v++)
          p[v - 1] = arguments[v];
        U("error", a, p);
      }
    }
    function U(a, c, p) {
      {
        var v = _.ReactDebugCurrentFrame, O = v.getStackAddendum();
        O !== "" && (c += "%s", p = p.concat([O]));
        var A = p.map(function(k) {
          return String(k);
        });
        A.unshift("Warning: " + c), Function.prototype.apply.call(console[a], console, A);
      }
    }
    var b = !1, P = !1, S = !1, V = !1, Ne = !1, De;
    De = Symbol.for("react.module.reference");
    function Be(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === o || Ne || a === i || a === f || a === d || V || a === m || b || P || S || typeof a == "object" && a !== null && (a.$$typeof === h || a.$$typeof === y || a.$$typeof === s || a.$$typeof === u || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === De || a.getModuleId !== void 0));
    }
    function re(a, c, p) {
      var v = a.displayName;
      if (v)
        return v;
      var O = c.displayName || c.name || "";
      return O !== "" ? p + "(" + O + ")" : p;
    }
    function Z(a) {
      return a.displayName || "Context";
    }
    function W(a) {
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
            return Z(c) + ".Consumer";
          case s:
            var p = a;
            return Z(p._context) + ".Provider";
          case l:
            return re(a, a.render, "ForwardRef");
          case y:
            var v = a.displayName || null;
            return v !== null ? v : W(a.type) || "Memo";
          case h: {
            var O = a, A = O._payload, k = O._init;
            try {
              return W(k(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, M = 0, $, x, L, Ee, q, je, Ue;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function Qe() {
      {
        if (M === 0) {
          $ = console.log, x = console.info, L = console.warn, Ee = console.error, q = console.group, je = console.groupCollapsed, Ue = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Je,
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
        M++;
      }
    }
    function Q() {
      {
        if (M--, M === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, a, {
              value: $
            }),
            info: E({}, a, {
              value: x
            }),
            warn: E({}, a, {
              value: L
            }),
            error: E({}, a, {
              value: Ee
            }),
            group: E({}, a, {
              value: q
            }),
            groupCollapsed: E({}, a, {
              value: je
            }),
            groupEnd: E({}, a, {
              value: Ue
            })
          });
        }
        M < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = _.ReactCurrentDispatcher, ft;
    function Ve(a, c, p) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (O) {
            var v = O.stack.trim().match(/\n( *(at )?)/);
            ft = v && v[1] || "";
          }
        return `
` + ft + a;
      }
    }
    var It = !1, at;
    {
      var Hr = typeof WeakMap == "function" ? WeakMap : Map;
      at = new Hr();
    }
    function Qt(a, c) {
      if (!a || It)
        return "";
      {
        var p = at.get(a);
        if (p !== void 0)
          return p;
      }
      var v;
      It = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = z.current, z.current = null, Qe();
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
            } catch (ne) {
              v = ne;
            }
            Reflect.construct(a, [], k);
          } else {
            try {
              k.call();
            } catch (ne) {
              v = ne;
            }
            a.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            v = ne;
          }
          a();
        }
      } catch (ne) {
        if (ne && v && typeof ne.stack == "string") {
          for (var w = ne.stack.split(`
`), B = v.stack.split(`
`), T = w.length - 1, C = B.length - 1; T >= 1 && C >= 0 && w[T] !== B[C]; )
            C--;
          for (; T >= 1 && C >= 0; T--, C--)
            if (w[T] !== B[C]) {
              if (T !== 1 || C !== 1)
                do
                  if (T--, C--, C < 0 || w[T] !== B[C]) {
                    var K = `
` + w[T].replace(" at new ", " at ");
                    return a.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", a.displayName)), typeof a == "function" && at.set(a, K), K;
                  }
                while (T >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        It = !1, z.current = A, Q(), Error.prepareStackTrace = O;
      }
      var Te = a ? a.displayName || a.name : "", lr = Te ? Ve(Te) : "";
      return typeof a == "function" && at.set(a, lr), lr;
    }
    function Xr(a, c, p) {
      return Qt(a, !1);
    }
    function Zr(a) {
      var c = a.prototype;
      return !!(c && c.isReactComponent);
    }
    function ot(a, c, p) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Qt(a, Zr(a));
      if (typeof a == "string")
        return Ve(a);
      switch (a) {
        case f:
          return Ve("Suspense");
        case d:
          return Ve("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return Xr(a.render);
          case y:
            return ot(a.type, c, p);
          case h: {
            var v = a, O = v._payload, A = v._init;
            try {
              return ot(A(O), c, p);
            } catch {
            }
          }
        }
      return "";
    }
    var st = Object.prototype.hasOwnProperty, Ht = {}, Xt = _.ReactDebugCurrentFrame;
    function ut(a) {
      if (a) {
        var c = a._owner, p = ot(a.type, a._source, c ? c.type : null);
        Xt.setExtraStackFrame(p);
      } else
        Xt.setExtraStackFrame(null);
    }
    function en(a, c, p, v, O) {
      {
        var A = Function.call.bind(st);
        for (var k in a)
          if (A(a, k)) {
            var w = void 0;
            try {
              if (typeof a[k] != "function") {
                var B = Error((v || "React class") + ": " + p + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              w = a[k](c, k, v, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              w = T;
            }
            w && !(w instanceof Error) && (ut(O), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", p, k, typeof w), ut(null)), w instanceof Error && !(w.message in Ht) && (Ht[w.message] = !0, ut(O), I("Failed %s type: %s", p, w.message), ut(null));
          }
      }
    }
    var tn = Array.isArray;
    function kt(a) {
      return tn(a);
    }
    function rn(a) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, p = c && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return p;
      }
    }
    function nn(a) {
      try {
        return Zt(a), !1;
      } catch {
        return !0;
      }
    }
    function Zt(a) {
      return "" + a;
    }
    function er(a) {
      if (nn(a))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rn(a)), Zt(a);
    }
    var Ge = _.ReactCurrentOwner, an = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tr, rr, Ot;
    Ot = {};
    function on(a) {
      if (st.call(a, "ref")) {
        var c = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function sn(a) {
      if (st.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function un(a, c) {
      if (typeof a.ref == "string" && Ge.current && c && Ge.current.stateNode !== c) {
        var p = W(Ge.current.type);
        Ot[p] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(Ge.current.type), a.ref), Ot[p] = !0);
      }
    }
    function ln(a, c) {
      {
        var p = function() {
          tr || (tr = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function cn(a, c) {
      {
        var p = function() {
          rr || (rr = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var dn = function(a, c, p, v, O, A, k) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: c,
        ref: p,
        props: k,
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
        value: v
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function fn(a, c, p, v, O) {
      {
        var A, k = {}, w = null, B = null;
        p !== void 0 && (er(p), w = "" + p), sn(c) && (er(c.key), w = "" + c.key), on(c) && (B = c.ref, un(c, O));
        for (A in c)
          st.call(c, A) && !an.hasOwnProperty(A) && (k[A] = c[A]);
        if (a && a.defaultProps) {
          var T = a.defaultProps;
          for (A in T)
            k[A] === void 0 && (k[A] = T[A]);
        }
        if (w || B) {
          var C = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          w && ln(k, C), B && cn(k, C);
        }
        return dn(a, w, B, O, v, Ge.current, k);
      }
    }
    var At = _.ReactCurrentOwner, nr = _.ReactDebugCurrentFrame;
    function Pe(a) {
      if (a) {
        var c = a._owner, p = ot(a.type, a._source, c ? c.type : null);
        nr.setExtraStackFrame(p);
      } else
        nr.setExtraStackFrame(null);
    }
    var Nt;
    Nt = !1;
    function Et(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function ir() {
      {
        if (At.current) {
          var a = W(At.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function pn(a) {
      {
        if (a !== void 0) {
          var c = a.fileName.replace(/^.*[\\\/]/, ""), p = a.lineNumber;
          return `

Check your code at ` + c + ":" + p + ".";
        }
        return "";
      }
    }
    var ar = {};
    function yn(a) {
      {
        var c = ir();
        if (!c) {
          var p = typeof a == "string" ? a : a.displayName || a.name;
          p && (c = `

Check the top-level render call using <` + p + ">.");
        }
        return c;
      }
    }
    function or(a, c) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var p = yn(c);
        if (ar[p])
          return;
        ar[p] = !0;
        var v = "";
        a && a._owner && a._owner !== At.current && (v = " It was passed a child from " + W(a._owner.type) + "."), Pe(a), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, v), Pe(null);
      }
    }
    function sr(a, c) {
      {
        if (typeof a != "object")
          return;
        if (kt(a))
          for (var p = 0; p < a.length; p++) {
            var v = a[p];
            Et(v) && or(v, c);
          }
        else if (Et(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var O = F(a);
          if (typeof O == "function" && O !== a.entries)
            for (var A = O.call(a), k; !(k = A.next()).done; )
              Et(k.value) && or(k.value, c);
        }
      }
    }
    function hn(a) {
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
          var v = W(c);
          en(p, a.props, "prop", v, a);
        } else if (c.PropTypes !== void 0 && !Nt) {
          Nt = !0;
          var O = W(c);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mn(a) {
      {
        for (var c = Object.keys(a.props), p = 0; p < c.length; p++) {
          var v = c[p];
          if (v !== "children" && v !== "key") {
            Pe(a), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), Pe(null);
            break;
          }
        }
        a.ref !== null && (Pe(a), I("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    function ur(a, c, p, v, O, A) {
      {
        var k = Be(a);
        if (!k) {
          var w = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = pn(O);
          B ? w += B : w += ir();
          var T;
          a === null ? T = "null" : kt(a) ? T = "array" : a !== void 0 && a.$$typeof === t ? (T = "<" + (W(a.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : T = typeof a, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, w);
        }
        var C = fn(a, c, p, O, A);
        if (C == null)
          return C;
        if (k) {
          var K = c.children;
          if (K !== void 0)
            if (v)
              if (kt(K)) {
                for (var Te = 0; Te < K.length; Te++)
                  sr(K[Te], a);
                Object.freeze && Object.freeze(K);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sr(K, a);
        }
        return a === n ? mn(C) : hn(C), C;
      }
    }
    function bn(a, c, p) {
      return ur(a, c, p, !0);
    }
    function vn(a, c, p) {
      return ur(a, c, p, !1);
    }
    var gn = vn, Sn = bn;
    dr.Fragment = n, dr.jsx = gn, dr.jsxs = Sn;
  }()), dr;
}
process.env.NODE_ENV === "production" ? Pn.exports = Ga() : Pn.exports = La();
var qr = Pn.exports;
const Wa = (e) => e && "connection" in e && e.connection && "endpoint" in e.connection;
var Kn = () => {
}, Oe = Kn;
function Ye(e) {
  return {
    tag: 0,
    0: e
  };
}
function Nr(e) {
  return {
    tag: 1,
    0: e
  };
}
var za = (e) => e;
function ee(e) {
  return (t) => (r) => {
    var n = Oe;
    t((i) => {
      i === 0 ? r(0) : i.tag === 0 ? (n = i[0], r(i)) : e(i[0]) ? r(i) : n(0);
    });
  };
}
function Gt(e) {
  return (t) => (r) => t((n) => {
    n === 0 || n.tag === 0 ? r(n) : r(Nr(e(n[0])));
  });
}
function Ir(e) {
  return (t) => (r) => {
    var n = [], i = Oe, o = !1, s = !1;
    t((u) => {
      s || (u === 0 ? (s = !0, n.length || r(0)) : u.tag === 0 ? i = u[0] : (o = !1, function(f) {
        var d = Oe;
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
    }), r(Ye((u) => {
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
function Ka(e) {
  return Ir(za)(e);
}
function Lt(e) {
  return Ka(Qa(e));
}
function Yn(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0), e();
        else if (i.tag === 0) {
          var o = i[0];
          r(Ye((s) => {
            s === 1 ? (n = !0, o(1), e()) : o(s);
          }));
        } else
          r(i);
    });
  };
}
function Ft(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0);
        else if (i.tag === 0) {
          var o = i[0];
          r(Ye((s) => {
            s === 1 && (n = !0), o(s);
          }));
        } else
          e(i[0]), r(i);
    });
  };
}
function hi(e) {
  return (t) => (r) => t((n) => {
    n === 0 ? r(0) : n.tag === 0 ? (r(n), e()) : r(n);
  });
}
function kr(e) {
  var t = [], r = Oe, n = !1;
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
    }), i(Ye((o) => {
      if (o === 1) {
        var s = t.indexOf(i);
        s > -1 && (t = t.slice()).splice(s, 1), t.length || r(1);
      } else
        n || (n = !0, r(0));
    }));
  };
}
function mi(e) {
  return (t) => (r) => {
    var n = Oe, i = Oe, o = !1, s = !1, u = !1, l = !1;
    t((f) => {
      l || (f === 0 ? (l = !0, u || r(0)) : f.tag === 0 ? n = f[0] : (u && (i(1), i = Oe), o ? o = !1 : (o = !0, n(0)), function(y) {
        u = !0, y((h) => {
          u && (h === 0 ? (u = !1, l ? r(0) : o || (o = !0, n(0))) : h.tag === 0 ? (s = !1, (i = h[0])(0)) : (r(h), s ? s = !1 : i(0)));
        });
      }(e(f[0]))));
    }), r(Ye((f) => {
      f === 1 ? (l || (l = !0, n(1)), u && (u = !1, i(1))) : (!l && !o && (o = !0, n(0)), u && !s && (s = !0, i(0)));
    }));
  };
}
function Er(e) {
  return (t) => (r) => {
    var n = Oe, i = !1, o = 0;
    t((s) => {
      i || (s === 0 ? (i = !0, r(0)) : s.tag === 0 ? e <= 0 ? (i = !0, r(0), s[0](1)) : n = s[0] : o++ < e ? (r(s), !i && o >= e && (i = !0, r(0), n(1))) : r(s));
    }), r(Ye((s) => {
      s === 1 && !i ? (i = !0, n(1)) : s === 0 && !i && o < e && n(0);
    }));
  };
}
function Jn(e) {
  return (t) => (r) => {
    var n = Oe, i = Oe, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, i(1), r(0)) : s.tag === 0 ? (n = s[0], e((u) => {
        u === 0 || (u.tag === 0 ? (i = u[0])(0) : (o = !0, i(1), n(1), r(0)));
      })) : r(s));
    }), r(Ye((s) => {
      s === 1 && !o ? (o = !0, n(1), i(1)) : o || n(0);
    }));
  };
}
function Xi(e, t) {
  return (r) => (n) => {
    var i = Oe, o = !1;
    r((s) => {
      o || (s === 0 ? (o = !0, n(0)) : s.tag === 0 ? (i = s[0], n(s)) : e(s[0]) ? n(s) : (o = !0, t && n(s), n(0), i(1)));
    });
  };
}
function Ya(e) {
  return (t) => e()(t);
}
function Zi(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), n = !1, i = !1, o = !1, s;
    t(Ye(async (u) => {
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
              o = !1, t(Nr(s.value));
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
function Ja(e) {
  return e[Symbol.asyncIterator] ? Zi(e) : (t) => {
    var r = e[Symbol.iterator](), n = !1, i = !1, o = !1, s;
    t(Ye((u) => {
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
              o = !1, t(Nr(s.value));
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
var Qa = Ja;
function mr(e) {
  return (t) => {
    var r = !1;
    t(Ye((n) => {
      n === 1 ? r = !0 : r || (r = !0, t(Nr(e)), t(0));
    }));
  };
}
function Qn(e) {
  return (t) => {
    var r = !1, n = e({
      next(i) {
        r || t(Nr(i));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(Ye((i) => {
      i === 1 && !r && (r = !0, n());
    }));
  };
}
function bi() {
  var e, t;
  return {
    source: kr(Qn((r) => (e = r.next, t = r.complete, Kn))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function vi(e) {
  return Qn((t) => (e.then((r) => {
    Promise.resolve(r).then(() => {
      t.next(r), t.complete();
    });
  }), Kn));
}
function Mt(e) {
  return (t) => {
    var r = Oe, n = !1;
    return t((i) => {
      i === 0 ? n = !0 : i.tag === 0 ? (r = i[0])(0) : n || (e(i[0]), r(0));
    }), {
      unsubscribe() {
        n || (n = !0, r(1));
      }
    };
  };
}
function Ha(e) {
  Mt((t) => {
  })(e);
}
var wn = {
  done: !0
}, Xa = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], r = !1, n = Oe, i;
    return e((o) => {
      r || (o === 0 ? (i && (i = i(wn)), r = !0) : o.tag === 0 ? (n = o[0])(0) : i ? i = i({
        value: o[0],
        done: !1
      }) : t.push(o[0]));
    }), {
      async next() {
        return r && !t.length ? wn : (!r && t.length <= 1 && n(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((o) => i = o));
      },
      async return() {
        return r || (i = n(1)), r = !0, wn;
      }
    };
  }
});
function zr(e) {
  return new Promise((t) => {
    var r = Oe, n;
    e((i) => {
      i === 0 ? Promise.resolve(n).then(t) : i.tag === 0 ? (r = i[0])(0) : (n = i[0], r(0));
    });
  });
}
var Hn = (...e) => {
  for (var t = e[0], r = 1, n = e.length; r < n; r++)
    t = e[r](t);
  return t;
}, Vt = {
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
class Or extends Error {
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
var Y, R;
function te(e) {
  return new Or(`Syntax Error: Unexpected token at ${R} in ${e}`);
}
function Re(e) {
  if (e.lastIndex = R, e.test(Y))
    return Y.slice(R, R = e.lastIndex);
}
var Cr = / +(?=[^\s])/y;
function Za(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, o = t.length - 1, s = 0; s < t.length; s++)
    Cr.lastIndex = 0, Cr.test(t[s]) && (s && (!n || Cr.lastIndex < n) && (n = Cr.lastIndex), i = i || s, o = s);
  for (var u = i; u <= o; u++)
    u !== i && (r += `
`), r += t[u].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function j() {
  for (var e = 0 | Y.charCodeAt(R++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | Y.charCodeAt(R++))
    if (e === 35)
      for (; (e = Y.charCodeAt(R++)) !== 10 && e !== 13; )
        ;
  R--;
}
var ea = /[_A-Za-z]\w*/y;
function it() {
  var e;
  if (e = Re(ea))
    return {
      kind: "Name",
      value: e
    };
}
var eo = /(?:null|true|false)/y, ta = /\$[_A-Za-z]\w*/y, to = /-?\d+/y, ro = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, no = /\\/g, io = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, ao = /"(?:"|[^\r\n]*?[^\\]")/y;
function Br(e) {
  var t, r;
  if (r = Re(eo))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = Re(ta)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = Re(to)) {
    var n = r;
    (r = Re(ro)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = Re(ea))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = Re(io))
    t = {
      kind: "StringValue",
      value: Za(r.slice(3, -3)),
      block: !0
    };
  else if (r = Re(ao))
    t = {
      kind: "StringValue",
      value: no.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(o) {
    var s;
    if (Y.charCodeAt(R) === 91) {
      R++, j();
      for (var u = []; s = Br(o); )
        u.push(s);
      if (Y.charCodeAt(R++) !== 93)
        throw te("ListValue");
      return j(), {
        kind: "ListValue",
        values: u
      };
    }
  }(e) || function(o) {
    if (Y.charCodeAt(R) === 123) {
      R++, j();
      for (var s = [], u; u = it(); ) {
        if (j(), Y.charCodeAt(R++) !== 58)
          throw te("ObjectField");
        j();
        var l = Br(o);
        if (!l)
          throw te("ObjectField");
        s.push({
          kind: "ObjectField",
          name: u,
          value: l
        });
      }
      if (Y.charCodeAt(R++) !== 125)
        throw te("ObjectValue");
      return j(), {
        kind: "ObjectValue",
        fields: s
      };
    }
  }(e))
    return t;
  return j(), t;
}
function ra(e) {
  var t = [];
  if (j(), Y.charCodeAt(R) === 40) {
    R++, j();
    for (var r; r = it(); ) {
      if (j(), Y.charCodeAt(R++) !== 58)
        throw te("Argument");
      j();
      var n = Br(e);
      if (!n)
        throw te("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || Y.charCodeAt(R++) !== 41)
      throw te("Argument");
    j();
  }
  return t;
}
function Wt(e) {
  var t = [];
  for (j(); Y.charCodeAt(R) === 64; ) {
    R++;
    var r = it();
    if (!r)
      throw te("Directive");
    j(), t.push({
      kind: "Directive",
      name: r,
      arguments: ra(e)
    });
  }
  return t;
}
function oo() {
  var e = it();
  if (e) {
    j();
    var t;
    if (Y.charCodeAt(R) === 58) {
      if (R++, j(), t = e, !(e = it()))
        throw te("Field");
      j();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: ra(!1),
      directives: Wt(!1),
      selectionSet: Kr()
    };
  }
}
function na() {
  var e;
  if (j(), Y.charCodeAt(R) === 91) {
    R++, j();
    var t = na();
    if (!t || Y.charCodeAt(R++) !== 93)
      throw te("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = it())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw te("NamedType");
  return j(), Y.charCodeAt(R) === 33 ? (R++, j(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var so = /on/y;
function ia() {
  if (Re(so)) {
    j();
    var e = it();
    if (!e)
      throw te("NamedType");
    return j(), {
      kind: "NamedType",
      name: e
    };
  }
}
var uo = /\.\.\./y;
function lo() {
  if (Re(uo)) {
    j();
    var e = R, t;
    if ((t = it()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Wt(!1)
      };
    R = e;
    var r = ia(), n = Wt(!1), i = Kr();
    if (!i)
      throw te("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: i
    };
  }
}
function Kr() {
  var e;
  if (j(), Y.charCodeAt(R) === 123) {
    R++, j();
    for (var t = []; e = lo() || oo(); )
      t.push(e);
    if (!t.length || Y.charCodeAt(R++) !== 125)
      throw te("SelectionSet");
    return j(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var co = /fragment/y;
function fo() {
  if (Re(co)) {
    j();
    var e = it();
    if (!e)
      throw te("FragmentDefinition");
    j();
    var t = ia();
    if (!t)
      throw te("FragmentDefinition");
    var r = Wt(!1), n = Kr();
    if (!n)
      throw te("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var po = /(?:query|mutation|subscription)/y;
function yo() {
  var e, t, r = [], n = [];
  (e = Re(po)) && (j(), t = it(), r = function() {
    var s, u = [];
    if (j(), Y.charCodeAt(R) === 40) {
      for (R++, j(); s = Re(ta); ) {
        if (j(), Y.charCodeAt(R++) !== 58)
          throw te("VariableDefinition");
        var l = na(), f = void 0;
        if (Y.charCodeAt(R) === 61 && (R++, j(), !(f = Br(!0))))
          throw te("VariableDefinition");
        j(), u.push({
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
          directives: Wt(!0)
        });
      }
      if (Y.charCodeAt(R++) !== 41)
        throw te("VariableDefinition");
      j();
    }
    return u;
  }(), n = Wt(!1));
  var i = Kr();
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
function ho(e, t) {
  return Y = typeof e.body == "string" ? e.body : e, R = 0, function() {
    var n;
    j();
    for (var i = []; n = fo() || yo(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function mo(e) {
  return JSON.stringify(e);
}
function bo(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var Fe = (e) => !(!e || !e.length), ye = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !Fe(e.variableDefinitions) && !Fe(e.directives))
      return ye.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), Fe(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(ye.VariableDefinition).join(", ") + ")"), Fe(e.directives) && (t += " " + e.directives.map(ye.Directive).join(" ")), t + " " + ye.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = ye.Variable(e.variable) + ": " + Me(e.type);
    return e.defaultValue && (t += " = " + Me(e.defaultValue)), Fe(e.directives) && (t += " " + e.directives.map(ye.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (Fe(e.arguments)) {
      var r = e.arguments.map(ye.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return Fe(e.directives) && (t += " " + e.directives.map(ye.Directive).join(" ")), e.selectionSet ? t + " " + ye.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? bo(e.value) : mo(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(Me).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(ye.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + Me(e.value),
  Document: (e) => Fe(e.definitions) ? e.definitions.map(Me).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(Me).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + Me(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return Fe(e.directives) && (t += " " + e.directives.map(ye.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), Fe(e.directives) && (t += " " + e.directives.map(ye.Directive).join(" ")), t + " " + Me(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, Fe(e.directives) && (t += " " + e.directives.map(ye.Directive).join(" ")), t + " " + Me(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return Fe(e.arguments) && (t += "(" + e.arguments.map(ye.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + Me(e.type) + "]",
  NonNullType: (e) => Me(e.type) + "!"
};
function Me(e) {
  return ye[e.kind] ? ye[e.kind](e) : "";
}
var vo = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new Or(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new Or(e);
class Pr extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(vo), n = ((i, o) => {
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
var Tn = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, jt = /* @__PURE__ */ new Set(), gi = /* @__PURE__ */ new WeakMap(), Bt = (e) => {
  if (e === null || jt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Bt(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += Bt(r) || "null";
    return t += "]";
  } else if (Vr !== zt && e instanceof Vr || Gr !== zt && e instanceof Gr)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = gi.get(e) || Math.random().toString(36).slice(2);
    return gi.set(e, i), Bt({
      __key: i
    });
  }
  jt.add(e);
  var o = "{";
  for (var s of n) {
    var u = Bt(e[s]);
    u && (o.length > 1 && (o += ","), o += Bt(s) + ":" + u);
  }
  return jt.delete(e), o += "}";
}, Cn = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || jt.has(r)))
    if (Array.isArray(r))
      for (var n = 0, i = r.length; n < i; n++)
        Cn(e, `${t}.${n}`, r[n]);
    else if (r instanceof Vr || r instanceof Gr)
      e.set(t, r);
    else {
      jt.add(r);
      for (var o of Object.keys(r))
        Cn(e, `${t}.${o}`, r[o]);
    }
}, Ur = (e) => (jt.clear(), Bt(e));
class zt {
}
var Vr = typeof File < "u" ? File : zt, Gr = typeof Blob < "u" ? Blob : zt, go = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, So = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, wo = (e, t) => t % 2 == 0 ? e.replace(So, `
`) : e, Si = (e) => e.split(go).map(wo).join("").trim(), wi = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Map(), Xn = (e) => {
  var t;
  return typeof e == "string" ? t = Si(e) : e.loc && jr.get(e.__key) === e ? t = e.loc.source.body : (t = wi.get(e) || Si(Me(e)), wi.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Ii = (e) => {
  var t = Tn(Xn(e));
  if (e.definitions) {
    var r = oa(e);
    r && (t = Tn(`
# ${r}`, t));
  }
  return t;
}, aa = (e) => {
  var t, r;
  return typeof e == "string" ? (t = Ii(e), r = jr.get(t) || ho(e)) : (t = e.__key || Ii(e), r = jr.get(t) || e), r.loc || Xn(r), r.__key = t, jr.set(t, r), r;
}, br = (e, t, r) => {
  var n = t || {}, i = aa(e), o = Ur(n), s = i.__key;
  return o !== "{}" && (s = Tn(o, s)), {
    key: s,
    query: i,
    variables: n,
    extensions: r
  };
}, oa = (e) => {
  for (var t of e.definitions)
    if (t.kind === Vt.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, Io = (e) => {
  for (var t of e.definitions)
    if (t.kind === Vt.OPERATION_DEFINITION)
      return t.operation;
}, _n = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var n = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new Pr({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? n : t.hasNext,
    stale: !1
  };
}, Rn = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = Rn(e[r], t[r]);
    return e;
  }
  return t;
}, xn = (e, t, r) => {
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
        for (var m = +f >= 0 ? f : 0, g = 0, N = l.items.length; g < N; g++)
          d[m + g] = Rn(d[m + g], l.items[g]);
      else
        l.data !== void 0 && (d[f] = Rn(d[f], l.data));
    }
  else
    u.data = t.data || e.data, n = t.errors || n;
  return {
    operation: e.operation,
    data: u.data,
    error: n.length ? new Pr({
      graphQLErrors: n,
      response: r
    }) : void 0,
    extensions: i ? o : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, sa = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new Pr({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function ua(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Xn(e.query),
    operationName: oa(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var ko = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var n = new URL(e.context.url);
  for (var i in t) {
    var o = t[i];
    o && n.searchParams.set(i, typeof o == "object" ? Ur(o) : o);
  }
  var s = n.toString();
  return s.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s;
}, Oo = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = Ur(t), n = ((u) => {
      var l = /* @__PURE__ */ new Map();
      return (Vr !== zt || Gr !== zt) && (jt.clear(), Cn(l, "variables", u)), l;
    })(t.variables);
    if (n.size) {
      var i = new FormData();
      i.append("operations", r), i.append("map", Ur({
        ...[...n.keys()].map((u) => [u])
      }));
      var o = 0;
      for (var s of n.values())
        i.append("" + o++, s);
      return i;
    }
    return r;
  }
}, Ao = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (n.headers)
    for (var i in n.headers)
      r[i.toLowerCase()] = n.headers[i];
  var o = Oo(e, t);
  return typeof o == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...n,
    method: o ? "POST" : "GET",
    body: o,
    headers: r
  };
}, No = typeof TextDecoder < "u" ? new TextDecoder() : null, Eo = /boundary="?([^=";]+)"?/i, Po = /data: ?([^\n]+)/, ki = (e) => e.constructor.name === "Buffer" ? e.toString() : No.decode(e);
async function* Oi(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield ki(t);
  else {
    var r = e.body.getReader(), n;
    try {
      for (; !(n = await r.read()).done; )
        yield ki(n.value);
    } finally {
      r.cancel();
    }
  }
}
async function* Ai(e, t) {
  var r = "", n;
  for await (var i of e)
    for (r += i; (n = r.indexOf(t)) > -1; )
      yield r.slice(0, n), r = r.slice(n + t.length);
}
async function* To(e, t, r) {
  var n = !0, i = null, o;
  try {
    yield await Promise.resolve();
    var s = (o = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", u;
    if (/multipart\/mixed/i.test(s))
      u = async function* (d, y) {
        var h = d.match(Eo), m = "--" + (h ? h[1] : "-"), g = !0, N;
        for await (var F of Ai(Oi(y), `\r
` + m)) {
          if (g) {
            g = !1;
            var _ = F.indexOf(m);
            if (_ > -1)
              F = F.slice(_ + m.length);
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
        for await (var h of Ai(Oi(d), `

`)) {
          var m = h.match(Po);
          if (m) {
            var g = m[1];
            try {
              yield y = JSON.parse(g);
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
      i = i ? xn(i, l, o) : _n(e, l, o), n = !1, yield i, n = !0;
    i || (yield i = _n(e, {}, o));
  } catch (f) {
    if (!n)
      throw f;
    yield sa(e, o && (o.status < 200 || o.status >= 300) && o.statusText ? new Error(o.statusText) : f, o);
  }
}
function Co(e, t, r) {
  var n;
  return typeof AbortController < "u" && (r.signal = (n = new AbortController()).signal), Yn(() => {
    n && n.abort();
  })(ee((i) => !!i)(Zi(To(e, t, r))));
}
var Dn = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      Dn(r, t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : Dn(e[n], t);
  return t;
}, jn = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var n of e.definitions) {
      var i = jn(n);
      t = t || i !== n, r.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var o = [], s = e.kind === Vt.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var u of e.selectionSet.selections || []) {
        s = s || u.kind === Vt.FIELD && u.name.value === "__typename" && !u.alias;
        var l = jn(u);
        t = t || l !== u, o.push(l);
      }
      if (s || (t = !0, o.push({
        kind: Vt.FIELD,
        name: {
          kind: Vt.NAME,
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
}, Ni = /* @__PURE__ */ new Map(), _o = (e) => {
  var t = aa(e), r = Ni.get(t.__key);
  return r || (Ni.set(t.__key, r = jn(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, Fn = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => Fn(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var n in e)
      n === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[n] = Fn(e[n]);
    return r;
  } else
    return e;
};
function Ei(e) {
  var t = (r) => e(r);
  return t.toPromise = () => zr(Er(1)(ee((r) => !r.stale && !r.hasNext)(t))), t.then = (r, n) => t.toPromise().then(r, n), t.subscribe = (r) => Mt(r)(t), t;
}
function Kt(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var Pi = (e, t) => Kt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), Ro = () => {
}, In = ({ kind: e }) => e !== "mutation" && e !== "query", xo = ({ forward: e, client: t, dispatchDebug: r }) => {
  var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = (u) => {
    var l = Kt(u.kind, u);
    return l.query = _o(u.query), l;
  }, s = (u) => u.kind === "query" && u.context.requestPolicy !== "network-only" && (u.context.requestPolicy === "cache-only" || n.has(u.key));
  return (u) => {
    var l = Gt((d) => {
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
        operation: process.env.NODE_ENV !== "production" ? Pi(d, {
          cacheOutcome: y ? "hit" : "miss"
        }) : d
      }), d.context.requestPolicy === "cache-and-network" && (h.stale = !0, Ti(t, d)), h;
    })(ee((d) => !In(d) && s(d))(u)), f = Ft((d) => {
      var { operation: y } = d;
      if (y) {
        var h = y.context.additionalTypenames || [];
        if (d.operation.kind !== "subscription" && (h = ((S) => [...Dn(S, /* @__PURE__ */ new Set())])(d.data).concat(h)), d.operation.kind === "mutation" || d.operation.kind === "subscription") {
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
          for (var g = 0; g < h.length; g++) {
            var N = h[g], F = i.get(N);
            F || i.set(N, F = /* @__PURE__ */ new Set());
            for (var _ of F.values())
              m.add(_);
            F.clear();
          }
          for (var I of m.values())
            n.has(I) && (y = n.get(I).operation, n.delete(I), Ti(t, y));
        } else if (y.kind === "query" && d.data) {
          n.set(y.key, d);
          for (var U = 0; U < h.length; U++) {
            var b = h[U], P = i.get(b);
            P || i.set(b, P = /* @__PURE__ */ new Set()), P.add(y.key);
          }
        }
      }
    })(e(ee((d) => d.kind !== "query" || d.context.requestPolicy !== "cache-only")(Gt((d) => process.env.NODE_ENV !== "production" ? Pi(d, {
      cacheOutcome: "miss"
    }) : d)(Lt([Gt(o)(ee((d) => !In(d) && !s(d))(u)), ee((d) => In(d))(u)])))));
    return Lt([l, f]);
  };
}, Ti = (e, t) => e.reexecuteOperation(Kt(t.kind, t, {
  requestPolicy: "network-only"
})), kn = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: n, forward: i }) => {
  var o = r || ((s) => s.kind === "subscription" || !!t && (s.kind === "query" || s.kind === "mutation"));
  return (s) => {
    var u = Ir((f) => {
      var { key: d } = f, y = ee((h) => h.kind === "teardown" && h.key === d)(s);
      return Jn(y)(((h) => {
        var m = e(ua(h), h);
        return Qn(({ next: g, complete: N }) => {
          var F = !1, _, I;
          return Promise.resolve().then(() => {
            F || (_ = m.subscribe({
              next(U) {
                g(I = I ? xn(I, U) : _n(h, U));
              },
              error(U) {
                g(sa(h, U));
              },
              complete() {
                F || (F = !0, h.kind === "subscription" && n.reexecuteOperation(Kt("teardown", h, h.context)), I && I.hasNext && g(xn(I, {
                  hasNext: !1
                })), N());
              }
            }));
          }), () => {
            F = !0, _ && _.unsubscribe();
          };
        });
      })(f));
    })(ee((f) => f.kind !== "teardown" && o(f))(s)), l = i(ee((f) => f.kind === "teardown" || !o(f))(s));
    return Lt([u, l]);
  };
}, Do = ({ forward: e, dispatchDebug: t }) => (r) => {
  var n = Ir((o) => {
    var s = ua(o), u = ko(o, s), l = Ao(o, s);
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
    var f = Jn(ee((d) => d.kind === "teardown" && d.key === o.key)(r))(Co(o, u, l));
    return process.env.NODE_ENV !== "production" ? Ft((d) => {
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
  })(ee((o) => o.kind !== "teardown" && (o.kind !== "subscription" || !!o.context.fetchSubscriptions))(r)), i = e(ee((o) => o.kind === "teardown" || o.kind === "subscription" && !o.context.fetchSubscriptions)(r));
  return Lt([n, i]);
}, jo = (e) => ({ client: t, forward: r, dispatchDebug: n }) => e.reduceRight((i, o) => {
  var s = !1;
  return o({
    client: t,
    forward(u) {
      if (process.env.NODE_ENV !== "production") {
        if (s)
          throw new Error("forward() must only be called once in each Exchange.");
        s = !0;
      }
      return kr(i(kr(u)));
    },
    dispatchDebug(u) {
      process.env.NODE_ENV !== "production" && n({
        timestamp: Date.now(),
        source: o.name,
        ...u
      });
    }
  });
}, r), la = ({ onOperation: e, onResult: t, onError: r }) => ({ forward: n }) => (i) => Ir((o) => {
  r && o.error && r(o.error, o.operation);
  var s = t && t(o) || o;
  return "then" in s ? vi(s) : mr(s);
})(n(Ir((o) => {
  var s = e && e(o) || o;
  return "then" in s ? vi(s) : mr(s);
})(i))), Fo = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = Ft((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var n = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: n,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(n);
  }
})(t)), ee((r) => !1)(t)), Ci = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), s = [], u = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = bi();
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
    var P = Jn(ee((S) => S.kind === "teardown" && S.key === b.key)(l.source))(ee((S) => S.operation.kind === b.kind && S.operation.key === b.key && (!S.operation.context._instance || S.operation.context._instance === b.context._instance))(U));
    return b.kind !== "query" ? P = Xi((S) => !!S.hasNext, !0)(P) : P = mi((S) => {
      var V = mr(S);
      return S.stale || S.hasNext ? V : Lt([V, Gt(() => (S.stale = !0, S))(Er(1)(ee((Ne) => Ne.key === b.key)(l.source)))]);
    })(P), b.kind !== "mutation" ? P = Yn(() => {
      o.delete(b.key), n.delete(b.key), i.delete(b.key), d = !1;
      for (var S = s.length - 1; S >= 0; S--)
        s[S].key === b.key && s.splice(S, 1);
      f(Kt("teardown", b, b.context));
    })(Ft((S) => {
      if (S.stale) {
        for (var V of s)
          if (V.key === S.operation.key) {
            o.delete(V.key);
            break;
          }
      } else
        S.hasNext || o.delete(b.key);
      n.set(b.key, S);
    })(P)) : P = hi(() => {
      f(b);
    })(P), t.maskTypename && (P = Gt((S) => ({
      ...S,
      data: Fn(S.data, !0)
    }))(P)), kr(P);
  }, m = this instanceof e ? this : Object.create(e.prototype), g = Object.assign(m, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(b) {
      b.kind === "teardown" ? y(b) : (b.kind === "mutation" || i.has(b.key)) && (s.push(b), Promise.resolve().then(y));
    },
    createRequestOperation(b, P, S) {
      S || (S = {});
      var V;
      if (process.env.NODE_ENV !== "production" && b !== "teardown" && (V = Io(P.query)) !== b)
        throw new Error(`Expected operation of type "${b}" but found "${V}"`);
      return Kt(b, P, {
        _instance: b === "mutation" ? r = r + 1 | 0 : void 0,
        ...u,
        ...S,
        requestPolicy: S.requestPolicy || u.requestPolicy,
        suspense: S.suspense || S.suspense !== !1 && g.suspense
      });
    },
    executeRequestOperation(b) {
      return b.kind === "mutation" ? Ei(h(b)) : Ei(Ya(() => {
        var P = i.get(b.key);
        P || i.set(b.key, P = h(b)), P = hi(() => {
          y(b);
        })(P);
        var S = n.get(b.key);
        return b.kind === "query" && S && (S.stale || S.hasNext) ? mi(mr)(Lt([P, ee((V) => V === n.get(b.key))(mr(S))])) : P;
      }));
    },
    executeQuery(b, P) {
      var S = g.createRequestOperation("query", b, P);
      return g.executeRequestOperation(S);
    },
    executeSubscription(b, P) {
      var S = g.createRequestOperation("subscription", b, P);
      return g.executeRequestOperation(S);
    },
    executeMutation(b, P) {
      var S = g.createRequestOperation("mutation", b, P);
      return g.executeRequestOperation(S);
    },
    readQuery(b, P, S) {
      var V = null;
      return Mt((Ne) => {
        V = Ne;
      })(g.query(b, P, S)).unsubscribe(), V;
    },
    query: (b, P, S) => g.executeQuery(br(b, P), S),
    subscription: (b, P, S) => g.executeSubscription(br(b, P), S),
    mutation: (b, P, S) => g.executeMutation(br(b, P), S)
  }), N = Ro;
  if (process.env.NODE_ENV !== "production") {
    var { next: F, source: _ } = bi();
    g.subscribeToDebugTarget = (b) => Mt(b)(_), N = F;
  }
  var I = jo(t.exchanges), U = kr(I({
    client: g,
    dispatchDebug: N,
    forward: Fo({
      dispatchDebug: N
    })
  })(l.source));
  return Ha(U), g;
};
const Mn = (e) => Object.entries(e).flatMap(([t, r]) => {
  if (typeof r == "boolean")
    return r ? t : !1;
  if (r instanceof Zn) {
    let n = "";
    const i = Object.entries(r.args).filter(([o, s]) => s != null).map(([o, s]) => {
      var u;
      return `${o}: ${s instanceof ei ? `$${(u = s.name) !== null && u !== void 0 ? u : o}` : JSON.stringify(s)}`;
    });
    return i.length > 0 && (n = `(${i.join(", ")})`), r.subselection ? [`${t}${n} {`, ...Mn(r.subselection), "}"] : `${t}${n}`;
  } else
    return [`${t} {`, ...Mn(r), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Lr = (e) => {
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
    i instanceof Zn ? (Object.entries(i.args).forEach(([o, s]) => {
      var u;
      s instanceof ei && (t[(u = s.name) !== null && u !== void 0 ? u : r(o)] = s);
    }), i.subselection && Object.assign(t, Lr(i.subselection))) : typeof i == "object" && i !== null && Object.assign(t, Lr(i));
  }), t;
}, Mo = (e) => {
  const t = Lr(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([n, i]) => `$${n}: ${i.type}`).join(", ")})`;
};
class Zn {
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
class ei {
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
const be = (e, t) => new Zn(e, t), G = (e) => new ei(e.type + (e.required ? "!" : ""), e.name, e.value), $o = (e) => {
  var t;
  const r = Mo(e), n = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${r}${n} {
${Mn(e.fields).join(`
`)}
}`;
}, Ae = (e) => {
  const t = Lr(e.fields);
  return {
    query: $o(e),
    variables: Object.entries(t ?? {}).reduce((r, [n, i]) => (typeof i.value < "u" && (r[n] = i.value), r), {})
  };
}, qo = {
  DateTime(e) {
    return new Date(e);
  }
};
class Bo {
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
      o != null && (r[n] = qo[i](o));
    }
    return r;
  }
}
function we(e) {
  if (typeof e != "object")
    return e;
  var t, r, n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = we(e[t]));
    } else {
      r = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(r, t, {
          value: we(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[t] = we(e[t]);
    }
    return r;
  }
  if (n === "[object Array]") {
    for (t = e.length, r = Array(t); t--; )
      r[t] = we(e[t]);
    return r;
  }
  return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    r.add(we(i));
  }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, o) {
    r.set(we(o), we(i));
  }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(we(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var ca, da, fa, pa, ya, ha, he;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(he || (he = {}));
const ue = Symbol.for("g/f"), mt = Symbol.for("g/if"), bt = Symbol.for("g/pf"), vt = Symbol.for("g/fk"), yr = Symbol.for("g/t"), D = Symbol.for("g/s");
class Uo {
  constructor(t) {
    var r, n;
    Object.defineProperty(this, ca, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, da, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, fa, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, pa, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, ya, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, ha, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "empty", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), this[mt] = (r = we(t)) !== null && r !== void 0 ? r : {}, this[bt] = (n = we(t)) !== null && n !== void 0 ? n : {}, Object.assign(this[ue], t), !t || Object.keys(t).length === 0 ? (this.empty = !0, this[vt] = /* @__PURE__ */ new Set()) : this[vt] = new Set(Object.keys(this[ue]));
    const i = this;
    this[D] = i;
    const o = {
      get: (s, u) => {
        if (u in i || typeof u == "symbol")
          return i[u];
        if (u in s)
          return s[u];
      },
      set: (s, u, l) => (i.trackKey(u), s[u.toString()] = l, !0)
    };
    return new Proxy(this[ue], o);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const r = t.toString();
    this[D][vt].add(r);
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = he.SinceLoaded) {
    if (this[D][yr])
      return !0;
    const r = t == he.SinceLoaded ? this[D][mt] : this[D][bt];
    return [...this[D][vt]].some((n) => !_r(r[n], this[D][ue][n]));
  }
  /** Checks if the original constructor data was empty or not */
  isEmpty() {
    return this.empty;
  }
  /** Returns the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  getField(t) {
    return this[D][ue][t];
  }
  /** Sets the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  setField(t, r) {
    return this.trackKey(t), this[D][ue][t] = r;
  }
  changes(t, r = he.SinceLoaded) {
    const i = (typeof t == "string" ? r : t || r) == he.SinceLoaded ? this[D][mt] : this[D][bt];
    if (t && typeof t == "string") {
      const o = i[t], s = this[D][ue][t], u = !_r(s, o);
      return u ? { changed: u, current: s, previous: o } : { changed: u };
    } else {
      const o = {};
      for (const s of this[D][vt])
        _r(i[s], this[D][ue][s]) || (o[s] = { current: this[D][ue][s], previous: i[s] });
      return o;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = he.SinceLoaded) {
    const r = t == he.SinceLoaded ? this[D][mt] : this[D][bt], n = {};
    for (const i of this[D][vt])
      _r(r[i], this[D][ue][i]) || (n[i] = this[D][ue][i]);
    return n;
  }
  changed(t, r = he.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = he.SinceLoaded) {
    t == he.SinceLoaded ? this[D][mt] = we(this[D][ue]) : t == he.SinceLastPersisted && (this[D][bt] = we(this[D][ue])), this[D][yr] = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = he.SinceLoaded) {
    let r;
    t == he.SinceLoaded ? r = Object.keys(this[D][mt]) : r = Object.keys(this[D][bt]);
    for (const n of this[D][vt])
      r.includes(n) || delete this[D][ue][n];
    t == he.SinceLoaded ? Object.assign(this[D][ue], we(this[D][mt])) : Object.assign(this[D][ue], we(this[D][bt])), this[D][yr] = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Vn({ ...this[D][ue] });
  }
  /** Marks this record as changed so that the next save will save it and adjust any `updatedAt` timestamps */
  touch() {
    this[D][yr] = !0;
  }
}
ca = ue, da = mt, fa = bt, pa = vt, ya = yr, ha = D;
const ma = Uo;
class ba extends Error {
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
class $n extends Error {
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
class Yr extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class _i extends Error {
  constructor(t) {
    let r;
    Bn(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class Vo extends Error {
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
class Go extends Error {
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
class Lo extends Error {
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
class va extends Error {
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
class ti extends Error {
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
class Wo extends Error {
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
function qn(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const Yt = (e, t) => {
  const r = t.length;
  let n = 0;
  for (; e != null && n < r; )
    e = e[t[n++]];
  return n && n == r ? e : void 0;
}, Bn = (e) => (e == null ? void 0 : e.type) == "close", Ke = (e, t) => typeof e != "string" ? "" : Tr(e, t), Ri = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Tr = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (n) => Ri(n)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, i, o, s, u) => (i || (i = ""), "" + i + Ri(o))), r;
}, ri = (e, t) => [...Array.isArray(t) ? t : t ? [t] : [], e].map((i) => Tr(i)).join(""), ga = (e, t) => `${ri(e, t)}Sort`, ni = (e, t) => `${ri(e, t)}Filter`, zo = (e, t, r) => new va(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), Ko = (e, t) => {
  if (e.fetching)
    return;
  const r = Yt(e.data, t);
  if (r === void 0)
    return new ba(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null)
    return new ti(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, nt = (e, t, r = !1) => {
  var n;
  if (e.error)
    throw e.error instanceof Pr && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((u) => "[Network] " + u.message).join(`
`)), e.error;
  const i = Yt(e.data, t), o = Yt(i, ["edges"]), s = o ?? i;
  if (i === void 0)
    throw new ba(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || r && Array.isArray(s) && s.length === 0)
    throw new ti(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, vr = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof Pr && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const n = Yt(e.data, t);
  return n ?? null;
}, ii = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Lo(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new va(e.message) : new Yr(e.message, e.code);
}, gt = (e, t) => {
  const r = nt(e, t);
  return Sa(r);
}, Sa = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? ii(t) : new Yr("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, wa = (e) => {
  var t, r, n, i;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new Bo((i = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, gr = (e, t) => {
  const r = wa(e);
  return r && (t = r.apply(t)), new ma(t);
}, ai = (e, t) => {
  const r = wa(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((n) => new ma(n));
}, Ar = (e, t) => {
  const r = t.edges.map((n) => n.node);
  return ai(e, r);
}, Un = "[object Object]", xi = "[object String]", Vn = (e) => {
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
          t[r] = n === void 0 ? null : Vn(n);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === Un) {
        const t = {};
        for (const r of Object.keys(e)) {
          const n = Vn(e[r]);
          n !== void 0 && (t[r] = n);
        }
        return t;
      }
    }
  }
}, On = "gstk", Di = (e) => {
  try {
    const t = window[e];
    return t.setItem(On, On), t.removeItem(On), !0;
  } catch {
    return !1;
  }
}, ji = Object.prototype.toString, Fi = Object.getPrototypeOf, Mi = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, hr = (e, t, r) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (r.indexOf(e) > -1 && r.indexOf(t) > -1)
    return !0;
  const n = ji.call(e), i = ji.call(t);
  let o, s, u;
  if (r.push(e, t), n == Un && i == xi && "_link" in e && Object.keys(e).length == 1)
    return e._link === t;
  if (i == Un && n == xi && "_link" in t && Object.keys(t).length == 1)
    return t._link === e;
  if (n != i || (o = Mi(e), s = Mi(t), o.length != s.length || o.some(function(l) {
    return !hr(e[l], t[l], r);
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
        if (u = o.next(), !hr(u.value, s.next().value, r))
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
        if (!(!(u in e) && !(u in t)) && (u in e != u in t || !hr(e[u], t[u], r)))
          return !1;
      return !0;
    case "Object":
      return hr(Fi(e), Fi(t), r);
    default:
      return !1;
  }
}, _r = (e, t) => hr(e, t, []), Ia = (e, t) => {
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
}, Yo = (e, t = {}) => {
  var r;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((r = Array.isArray(t) ? t : t.inputs) !== null && r !== void 0 ? r : []).map((i) => Ia(e, i))
  };
}, Jo = (e, t) => {
  const r = {};
  for (const [n, i] of Object.entries(e))
    r[n] = { ...i, value: t[n] };
  return r;
}, wt = (e, t) => (t && e.unshift(...Array.isArray(t) ? t : [t]), e), dt = (e, t) => {
  const r = t ? [...Array.isArray(t) ? t : [t], e].join(".") : e;
  return {
    gadgetMeta: {
      hydrations: be({ modelName: r })
    }
  };
};
function xe(e, t) {
  if (!e)
    return t;
  if (Array.isArray(e) || (e = [e]), e)
    for (let r = e.length - 1; r >= 0; r--)
      t = {
        [e[r]]: t
      };
  return t;
}
const $t = {
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
class Jt extends Array {
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
    const i = new Jt();
    return i.push(...r), i.modelManager = t, i.pagination = n, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Yr("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new $n("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new $n("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: n, after: i, ...o } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...o,
      before: this.pagination.pageInfo.startCursor,
      last: n || r
    });
  }
}
const oi = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, Jr = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, Qo = (e, t, r, n, i, o) => {
  const s = {};
  typeof t < "u" && (s.id = G({ type: "GadgetID!", value: t }));
  let u = {
    [e]: be(s, oi((i == null ? void 0 : i.select) || r, !0))
  };
  return u = xe(o, u), Ae({
    type: "query",
    name: e,
    fields: {
      ...u,
      ...dt(n, o)
    },
    directives: Jr(i)
  });
}, Ho = (e, t, r, n, i, o, s) => si(e, n, i, {
  ...o,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}, s), si = (e, t, r, n, i) => {
  let o = {
    [e]: be({
      after: G({ value: n == null ? void 0 : n.after, type: "String" }),
      first: G({ value: n == null ? void 0 : n.first, type: "Int" }),
      before: G({ value: n == null ? void 0 : n.before, type: "String" }),
      last: G({ value: n == null ? void 0 : n.last, type: "Int" }),
      sort: n != null && n.sort ? G({ value: n.sort, type: `[${ga(r, i)}!]` }) : void 0,
      filter: n != null && n.filter ? G({ value: n.filter, type: `[${ni(r, i)}!]` }) : void 0,
      search: n != null && n.search ? G({ value: n.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: oi((n == null ? void 0 : n.select) || t, !0)
      }
    })
  };
  return i && (o = xe(i, o)), Ae({
    type: "query",
    name: e,
    fields: {
      ...o,
      ...dt(r, i)
    },
    directives: Jr(n)
  });
}, ui = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, G(r)])), ka = (e, t, r) => ({
  success: !0,
  ...$t,
  [e]: t && !r ? oi(t, !0) : !1,
  result: !!r
}), Xo = (e, t, r, n, i, o, s, u, l) => {
  const f = (o == null ? void 0 : o.select) || t;
  let d = {
    [e]: be(ui(i), ka(n, f, l))
  };
  d = xe(s, d);
  const y = {
    type: "mutation",
    name: e,
    fields: {
      ...d,
      ...dt(r, s)
    },
    directives: Jr(o)
  };
  return Ae(y);
}, Zo = (e, t, r) => {
  let n = {}, i = t.operationName, o;
  switch (t.isBulk && (i = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), t.operationReturnType ? o = `${t.operationReturnType}Result` : o = `${Tr(i)}Result`, t.type) {
    case "action": {
      const u = (r == null ? void 0 : r.select) || t.defaultSelection;
      n = {
        [`... on ${o}`]: ka(t.modelApiIdentifier, u, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      n = {
        [`... on ${o}`]: Oa()
      };
  }
  const s = {
    type: "subscription",
    name: Ke(i) + "BackgroundResult",
    fields: {
      backgroundAction: be({ id: G({ value: e, type: "String!" }) }, {
        id: !0,
        outcome: !0,
        result: {
          ...n
        }
      })
    }
  };
  return Ae(s);
}, Oa = () => ({
  success: !0,
  ...$t,
  result: !0
}), es = (e, t, r, n) => {
  let i = {
    [e]: be(ui(t), Oa())
  };
  return i = xe(r, i), Ae({
    type: "mutation",
    name: e,
    fields: i,
    directives: Jr(n)
  });
}, ts = (e) => {
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
}, rs = (e, t, r, n, i) => {
  let o = {
    [e]: be({
      ...ui(t),
      backgroundOptions: G({
        type: "EnqueueBackgroundActionOptions",
        value: ts(n)
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
  return o = xe(r, o), Ae({
    type: "mutation",
    name: "enqueue" + Tr(e),
    fields: {
      background: o
    }
  });
}, ns = (e, t) => ({
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
function li(e, t, r) {
  return r != null && r.live ? ns(Xa(e), t) : Hn(e, ee((i) => !i.stale && !i.hasNext), Er(1), zr).then((i) => t(i));
}
const $i = (e, t, r, n, i, o, s = !0, u) => {
  const l = Qo(t, r, n, i, o, u), f = e.connection.currentClient.query(l.query, l.variables);
  return li(f, (d) => {
    const y = s ? nt : vr, h = wt([t], u), m = y(d, h);
    return gr(d, m);
  }, o);
}, is = (e, t, r, n, i, o, s, u = !0, l) => {
  const f = Ho(t, r, n, i, o, s), d = wt([t], l), y = e.connection.currentClient.query(f.query, f.variables);
  return li(y, (h) => {
    const m = nt(h, d), g = Ar(h, m);
    if (g.length > 1)
      throw zo(o, r, n);
    const N = g[0];
    if (!N && u)
      throw new ti(`${o} record with ${r}=${n} not found`);
    return N ?? null;
  }, s);
}, qi = (e, t, r, n, i, o, s) => {
  const u = si(t, r, n, i, s), l = e.connection.currentClient.query(u.query, u.variables), f = wt([t], s);
  return li(l, (d) => {
    let y;
    o === !1 ? y = vr(d, f) : y = nt(d, f, o);
    const h = Ar(d, y);
    return Jt.boot(e, h, { options: i, pageInfo: y.pageInfo });
  }, i);
}, Bi = async (e, t, r, n, i, o, s, u, l, f) => {
  const d = Xo(t, r, n, i, s, u, l, o, f), y = await e.connection.currentClient.mutation(d.query, d.variables).toPromise(), h = wt([t], l);
  if (o) {
    const m = Yt(y.data, h), g = m[i] && r ? ai(y, m[i]) : void 0;
    if (m.errors) {
      const N = m.errors.map((F) => ii(F));
      throw new Wo(N, g);
    }
    return g;
  } else {
    const m = gt(y, h);
    return Aa(r, y, m, i, f);
  }
}, Aa = (e, t, r, n, i) => {
  if (e != null)
    return i ? r.result : gr(t, r[n]);
}, Ui = async (e, t, r, n) => {
  const i = es(t, r, n), o = await e.currentClient.mutation(i.query, i.variables).toPromise(), s = wt([t], n);
  return gt(o, s).result;
};
async function as(e, t, r, n = {}) {
  const i = t.isBulk ? Yo(t, r) : Ia(t, r), o = Jo(t.variables, i), s = rs(t.operationName, o, t.namespace, n, t.isBulk), u = await e.currentClient.mutation(s.query, s.variables, n).toPromise(), l = ["background", ...wt([t.operationName], t.namespace)];
  try {
    const f = gt(u, l);
    return t.isBulk ? f.backgroundActions.map((d) => new Fr(e, t, d.id)) : new Fr(e, t, f.backgroundAction.id);
  } catch (f) {
    if ("code" in f && f.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (n != null && n.id) && n.onDuplicateID == "ignore")
      return new Fr(e, t, n.id);
    throw f;
  }
}
const os = async (e, t, r, n) => {
  const i = Zo(t, r, n), o = e.currentClient.subscription(i.query, i.variables), s = await Hn(o, ee((l) => {
    var f, d;
    return l.error || ((d = (f = l.data) === null || f === void 0 ? void 0 : f.backgroundAction) === null || d === void 0 ? void 0 : d.outcome);
  }), Er(1), zr), u = nt(s, ["backgroundAction"]);
  switch (Sa(u.result), r.type) {
    case "action": {
      u.result = Aa(r.defaultSelection, s.data, u.result, r.isBulk ? r.modelApiIdentifier : r.modelSelectionField, r.hasReturnType);
      break;
    }
    case "globalAction": {
      u.result = u.result.result;
      break;
    }
  }
  return u;
};
class Fr {
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
    return (await os(this.connection, this.id, this.action, t)).result;
  }
}
var Sr;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(Sr || (Sr = {}));
function Se(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function xt(e) {
  return Se(e) === "object";
}
function ss(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function Vi(e, t) {
  return e.length < 124 ? e : t;
}
const us = "graphql-transport-ws";
var me;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(me || (me = {}));
var X;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(X || (X = {}));
function Na(e) {
  if (!xt(e))
    throw new Error(`Message is expected to be an object, but got ${Se(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${Se(e.type)}`);
  switch (e.type) {
    case X.ConnectionInit:
    case X.ConnectionAck:
    case X.Ping:
    case X.Pong: {
      if (e.payload != null && !xt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case X.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Se(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!xt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Se(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Se(e.payload.query)}`);
      if (e.payload.variables != null && !xt(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Se(e.payload.variables)}`);
      if (e.payload.operationName != null && Se(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Se(e.payload.operationName)}`);
      if (e.payload.extensions != null && !xt(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Se(e.payload.extensions)}`);
      break;
    }
    case X.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Se(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!xt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Se(e.payload)}`);
      break;
    }
    case X.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Se(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ss(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case X.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Se(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function ls(e, t) {
  return Na(typeof e == "string" ? JSON.parse(e, t) : e);
}
function fr(e, t) {
  return Na(e), JSON.stringify(e, t);
}
function cs(e) {
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
    retryWait: d = async function(M) {
      let $ = 1e3;
      for (let x = 0; x < M; x++)
        $ *= 2;
      await new Promise((x) => setTimeout(x, $ + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: y = Rr,
    isFatalConnectionProblem: h,
    on: m,
    webSocketImpl: g,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: N = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (M) => {
        const $ = Math.random() * 16 | 0;
        return (M == "x" ? $ : $ & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: F,
    jsonMessageReviver: _
  } = e;
  let I;
  if (g) {
    if (!fs(g))
      throw new Error("Invalid WebSocket implementation provided");
    I = g;
  } else
    typeof WebSocket < "u" ? I = WebSocket : typeof global < "u" ? I = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (I = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!I)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const U = I, b = (() => {
    const E = (() => {
      const $ = {};
      return {
        on(x, L) {
          return $[x] = L, () => {
            delete $[x];
          };
        },
        emit(x) {
          var L;
          "id" in x && ((L = $[x.id]) === null || L === void 0 || L.call($, x));
        }
      };
    })(), M = {
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
      on($, x) {
        const L = M[$];
        return L.push(x), () => {
          L.splice(L.indexOf(x), 1);
        };
      },
      emit($, ...x) {
        for (const L of [...M[$]])
          L(...x);
      }
    };
  })();
  function P(E) {
    const M = [
      // errors are fatal and more critical than close events, throw them first
      b.on("error", ($) => {
        M.forEach((x) => x()), E($);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      b.on("closed", ($) => {
        M.forEach((x) => x()), E($);
      })
    ];
  }
  let S, V = 0, Ne, De = !1, Be = 0, re = !1;
  async function Z() {
    clearTimeout(Ne);
    const [E, M] = await (S ?? (S = new Promise((L, Ee) => (async () => {
      if (De) {
        if (await d(Be), !V)
          return S = void 0, Ee({ code: 1e3, reason: "All Subscriptions Gone" });
        Be++;
      }
      b.emit("connecting");
      const q = new U(typeof t == "function" ? await t() : t, us);
      let je, Ue;
      function Je() {
        isFinite(s) && s > 0 && (clearTimeout(Ue), Ue = setTimeout(() => {
          q.readyState === U.OPEN && (q.send(fr({ type: X.Ping })), b.emit("ping", !1, void 0));
        }, s));
      }
      P((Q) => {
        S = void 0, clearTimeout(je), clearTimeout(Ue), Ee(Q), Rr(Q) && Q.code === 4499 && (q.close(4499, "Terminated"), q.onerror = null, q.onclose = null);
      }), q.onerror = (Q) => b.emit("error", Q), q.onclose = (Q) => b.emit("closed", Q), q.onopen = async () => {
        try {
          b.emit("opened", q);
          const Q = typeof r == "function" ? await r() : r;
          if (q.readyState !== U.OPEN)
            return;
          q.send(fr(Q ? {
            type: X.ConnectionInit,
            payload: Q
          } : {
            type: X.ConnectionInit
            // payload is completely absent if not provided
          }, F)), isFinite(l) && l > 0 && (je = setTimeout(() => {
            q.close(me.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), Je();
        } catch (Q) {
          b.emit("error", Q), q.close(me.InternalClientError, Vi(Q instanceof Error ? Q.message : new Error(Q).message, "Internal client error"));
        }
      };
      let Qe = !1;
      q.onmessage = ({ data: Q }) => {
        try {
          const z = ls(Q, _);
          if (b.emit("message", z), z.type === "ping" || z.type === "pong") {
            b.emit(z.type, !0, z.payload), z.type === "pong" ? Je() : u || (q.send(fr(z.payload ? {
              type: X.Pong,
              payload: z.payload
            } : {
              type: X.Pong
              // payload is completely absent if not provided
            })), b.emit("pong", !1, z.payload));
            return;
          }
          if (Qe)
            return;
          if (z.type !== X.ConnectionAck)
            throw new Error(`First message cannot be of type ${z.type}`);
          clearTimeout(je), Qe = !0, b.emit("connected", q, z.payload), De = !1, Be = 0, L([
            q,
            new Promise((ft, Ve) => P(Ve))
          ]);
        } catch (z) {
          q.onmessage = null, b.emit("error", z), q.close(me.BadResponse, Vi(z instanceof Error ? z.message : new Error(z).message, "Bad response"));
        }
      };
    })())));
    E.readyState === U.CLOSING && await M;
    let $ = () => {
    };
    const x = new Promise((L) => $ = L);
    return [
      E,
      $,
      Promise.race([
        // wait for
        x.then(() => {
          if (!V) {
            const L = () => E.close(1e3, "Normal Closure");
            isFinite(o) && o > 0 ? Ne = setTimeout(() => {
              E.readyState === U.OPEN && L();
            }, o) : L();
          }
        }),
        // or
        M
      ])
    ];
  }
  function W(E) {
    if (Rr(E) && (ds(E.code) || [
      me.InternalServerError,
      me.InternalClientError,
      me.BadRequest,
      me.BadResponse,
      me.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      me.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      me.SubscriberAlreadyExists,
      me.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(E.code)))
      throw E;
    if (re)
      return !1;
    if (Rr(E) && E.code === 1e3)
      return V > 0;
    if (!f || Be >= f || !y(E) || h != null && h(E))
      throw E;
    return De = !0;
  }
  return n || (async () => {
    for (V++; ; )
      try {
        const [, , E] = await Z();
        await E;
      } catch (E) {
        try {
          if (!W(E))
            return;
        } catch (M) {
          return i == null ? void 0 : i(M);
        }
      }
  })(), {
    on: b.on,
    subscribe(E, M) {
      const $ = N(E);
      let x = !1, L = !1, Ee = () => {
        V--, x = !0;
      };
      return (async () => {
        for (V++; ; )
          try {
            const [q, je, Ue] = await Z();
            if (x)
              return je();
            const Je = b.onMessage($, (Qe) => {
              switch (Qe.type) {
                case X.Next: {
                  M.next(Qe.payload);
                  return;
                }
                case X.Error: {
                  L = !0, x = !0, M.error(Qe.payload), Ee();
                  return;
                }
                case X.Complete: {
                  x = !0, Ee();
                  return;
                }
              }
            });
            q.send(fr({
              id: $,
              type: X.Subscribe,
              payload: E
            }, F)), Ee = () => {
              !x && q.readyState === U.OPEN && q.send(fr({
                id: $,
                type: X.Complete
              }, F)), V--, x = !0, je();
            }, await Ue.finally(Je);
            return;
          } catch (q) {
            if (!W(q))
              return;
          }
      })().then(() => {
        L || M.complete();
      }).catch((q) => {
        M.error(q);
      }), () => {
        x || Ee();
      };
    },
    async dispose() {
      if (re = !0, S) {
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
function Rr(e) {
  return xt(e) && "code" in e && "reason" in e;
}
function ds(e) {
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
function fs(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var Ut = null;
typeof WebSocket < "u" ? Ut = WebSocket : typeof MozWebSocket < "u" ? Ut = MozWebSocket : typeof global < "u" ? Ut = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Ut = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ut = self.WebSocket || self.MozWebSocket);
const ps = Ut;
class Ea extends Error {
}
class ys {
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
    throw nt(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Ea("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    nt(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    nt(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class hs {
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
const ms = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
}, Gi = la({
  onOperation: (e) => {
    var t, r;
    (t = (r = e.context).operationName) !== null && t !== void 0 || (r.operationName = ms(e.query) || "unknown");
  }
}), bs = la({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, r] = e.context.url.split("?"), n = new URLSearchParams(r);
        n.set("operation", e.context.operationName), e.context.url = `${t}?${n.toString()}`;
      } catch {
      }
  }
});
var Gn;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(Gn || (Gn = {}));
const vs = 2, gs = 4800, Ss = 1e4, ws = [me.ConnectionAcknowledgementTimeout, me.ConnectionInitialisationTimeout], Li = Symbol.for("gadget/connection"), Is = "token", ks = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var ie;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(ie || (ie = {}));
const xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class Pa {
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
      value: ie.Anonymous
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
            connectionAckWaitTimeout: gs,
            ...d,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const m = new Ci({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              Gi,
              ...this.exchanges.beforeAsync,
              kn({
                forwardSubscription(N) {
                  const F = { ...N, query: N.query || "" };
                  return {
                    subscribe: (_) => ({
                      unsubscribe: y.subscribe(F, _)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          m[Li] = this, h = new ys(m, y), this.currentTransaction = h, await h.start();
          const g = await f(h);
          return await h.commit(), g;
        } catch (m) {
          try {
            h != null && h.open && await h.rollback();
          } catch (g) {
            g instanceof Ea || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", g);
          }
          throw Bn(m) ? new _i(m) : m;
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
        u = Os(u, (f = this.options.baseRouteURL) !== null && f !== void 0 ? f : this.options.endpoint), this.isGadgetRequest(u) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == ie.Custom && await this.options.authenticationMode.custom.processFetch(u, l));
        const d = await this._fetchImplementation(u, l);
        if (this.authenticationMode == ie.BrowserSession) {
          const y = d.headers.get("x-set-authorization"), h = y != null && y.startsWith("Session ") ? y.replace("Session ", "") : null;
          h && this.sessionTokenStore.setItem(this.sessionStorageKey, h);
        }
        return d;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof xr < "u" && xr.fetch ? this._fetchImplementation = xr.fetch.bind(xr) : this._fetchImplementation = async (...u) => {
      let l = await import("./browser-ponyfill-9d7f4bd9.js").then((f) => f.b);
      return l.default && (l = l.default), await l(...u);
    }, this.websocketImplementation = (n = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && n !== void 0 ? n : ps, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (o = t.environment) !== null && o !== void 0 ? o : "Development", this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Is}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = ie.InternalAuthToken : t.apiKey ? this.authenticationMode = ie.APIKey : t.custom && (this.authenticationMode = ie.Custom), this.options.authenticationMode = t), (r = this.authenticationMode) !== null && r !== void 0 || (this.authenticationMode = ie.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = ie.BrowserSession;
    const r = !t || typeof t == "boolean" ? Sr.Durable : t.storageType;
    let n;
    r == Sr.Durable && Di("localStorage") ? n = window.localStorage : r == Sr.Session && Di("sessionStorage") ? n = window.sessionStorage : n = new hs(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = n, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), Ln(this.options.endpoint))
      return !!Ln(r);
    const n = new URL(this.options.endpoint).host;
    return r.includes(n);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Gi, bs];
    typeof window < "u" && t.push(xo), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      kn({
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
      kn({
        isSubscriptionOperation: (n) => n.query.definitions.some((i) => Ns(i)),
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
      Do,
      ...this.exchanges.afterAll
    );
    const r = new Ci({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[Li] = this, r;
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
    return cs({
      url: r,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var n, i;
        const o = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == ie.APIKey ? o.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == ie.InternalAuthToken ? o.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == ie.BrowserSession ? o.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == ie.Custom && await ((i = (n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(o)), o;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (n, i) => {
          var o, s, u, l, f, d;
          if (this.authenticationMode == ie.BrowserSession && (i != null && i.sessionToken)) {
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
    if (this.authenticationMode == ie.InternalAuthToken)
      r.authorization = "Basic " + ks("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == ie.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == ie.BrowserSession) {
      const n = this.sessionTokenStore.getItem(this.sessionStorageKey);
      n && (r.authorization = `Session ${n}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), n = [], i = t.connectionAttempts || vs;
    const o = t.connectionGlobalTimeoutMs || Ss, s = () => {
      n.forEach((u) => u()), n = [];
    };
    return await new Promise((u, l) => {
      const f = setTimeout(() => {
        this.disposeClient(r), y(new Vo("Timeout opening websocket connection to Gadget API"));
      }, o), d = (g) => {
        if (Bn(g)) {
          if (g.code == Gn.TooManyRequests)
            return s(), y(new Go(g.reason));
          if (ws.includes(g.code) && i > 0) {
            i -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), m();
            return;
          }
        }
        clearTimeout(f), l(new _i(g));
      }, y = (g) => {
        clearTimeout(f), l(g);
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
Object.defineProperty(Pa, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.24"
});
function Os(e, t) {
  if (typeof e != "string")
    return e;
  if (Ln(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Ln(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const As = (e) => {
  var t;
  return e.kind !== "OperationDefinition" || e.operation !== "query" ? null : (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
}, Ns = (e) => !!As(e), Es = (e, t, r, n) => {
  const i = Ke(e);
  return Ae({
    type: "query",
    name: `InternalFind${i}`,
    fields: {
      internal: xe(r, {
        [e]: be({
          id: G({ value: t, type: "GadgetID!" }),
          select: G({ value: di(n), type: "[String!]" })
        })
      }),
      ...dt(e, r)
    }
  });
}, Ta = (e, t, r) => ({
  search: r != null && r.search ? G({ value: r == null ? void 0 : r.search, type: "String" }) : void 0,
  sort: r != null && r.sort ? G({ value: r == null ? void 0 : r.sort, type: `[${ga(e, t)}!]` }) : void 0,
  filter: r != null && r.filter ? G({ value: r == null ? void 0 : r.filter, type: `[${ni(e, t)}!]` }) : void 0,
  select: r != null && r.select ? G({ value: di(r == null ? void 0 : r.select), type: "[String!]" }) : void 0
}), Ps = (e, t, r) => {
  const n = Ke(e), i = Ta(n, t, r);
  return Ae({
    type: "query",
    name: `InternalFindFirst${n}`,
    fields: {
      internal: xe(t, {
        [`list${n}`]: be({
          ...i,
          first: G({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }),
      ...dt(e, t)
    }
  });
}, Ts = (e, t, r) => {
  const n = Ke(e), i = Ta(n, t, r);
  return Ae({
    type: "query",
    name: `InternalFindMany${n}`,
    fields: {
      internal: xe(t, {
        [`list${n}`]: be({
          ...i,
          after: G({ value: r == null ? void 0 : r.after, type: "String" }),
          before: G({ value: r == null ? void 0 : r.before, type: "String" }),
          first: G({ value: r == null ? void 0 : r.first, type: "Int" }),
          last: G({ value: r == null ? void 0 : r.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }),
      ...dt(e, t)
    }
  });
}, ci = (e, t) => `Internal${ri(e, t)}Input`, Cs = (e, t, r) => {
  const n = Ke(e);
  return Ae({
    type: "mutation",
    name: `InternalCreate${n}`,
    fields: {
      internal: xe(t, {
        [`create${n}`]: be({
          [e]: G({ value: r, type: ci(e, t) })
        }, {
          success: !0,
          ...$t,
          [e]: !0
        })
      }),
      ...dt(e, t)
    }
  });
}, _s = (e, t, r, n) => {
  Ke(e);
  const i = Ke(t);
  return Ae({
    type: "mutation",
    name: `InternalBulkCreate${i}`,
    fields: {
      internal: xe(r, {
        [`bulkCreate${i}`]: be({
          [t]: G({ value: n, type: `[${ci(e, r)}]!` })
        }, {
          success: !0,
          ...$t,
          [t]: !0
        })
      }),
      ...dt(e, r)
    }
  });
}, Rs = (e, t, r, n) => {
  const i = Ke(e);
  return Ae({
    type: "mutation",
    name: `InternalUpdate${i}`,
    fields: {
      internal: xe(t, {
        [`update${i}`]: be({
          id: G({ value: r, type: "GadgetID!" }),
          [e]: G({ value: n, type: ci(e, t) })
        }, {
          success: !0,
          ...$t,
          [e]: !0
        })
      }),
      ...dt(e, t)
    }
  });
}, xs = (e, t, r) => {
  const n = Ke(e);
  return Ae({
    type: "mutation",
    name: `InternalDelete${n}`,
    fields: {
      internal: xe(t, {
        [`delete${n}`]: be({
          id: G({ value: r, type: "GadgetID!" })
        }, {
          success: !0,
          ...$t
        })
      })
    }
  });
}, Ds = (e, t, r) => {
  const n = Ke(e);
  return Ae({
    type: "mutation",
    name: `InternalDeleteMany${n}`,
    fields: {
      internal: xe(t, {
        [`deleteMany${n}`]: be({
          search: G({ value: r == null ? void 0 : r.search, type: "String" }),
          filter: G({ value: r == null ? void 0 : r.filter, type: `[${ni(e, t)}!]` })
        }, {
          success: !0,
          ...$t
        })
      })
    }
  });
};
class Le {
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
    }), this.capitalizedApiIdentifier = Tr(t), this.namespace = (n == null ? void 0 : n.namespace) || [];
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let n = t;
    if (!this.validateRecord(t))
      throw new Yr(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = Es(this.apiIdentifier, t, this.namespace, di(r == null ? void 0 : r.select)), o = await this.connection.currentClient.query(i.query, i.variables).toPromise(), u = (n ? nt : vr)(o, this.dataPath(this.apiIdentifier));
    return gr(o, u);
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
    const r = Ts(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise(), i = vr(n, this.dataPath(`list${this.capitalizedApiIdentifier}`)), o = Ar(n, i);
    return Jt.boot(this, o, { options: t, pageInfo: i.pageInfo });
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
    const n = Ps(this.apiIdentifier, this.namespace, t), i = await this.connection.currentClient.query(n.query, n.variables).toPromise(), o = this.dataPath(`list${this.capitalizedApiIdentifier}`);
    let s;
    r === !1 ? s = vr(i, o) : s = nt(i, o, r);
    const u = Ar(i, s);
    return Jt.boot(this, u, { options: t, pageInfo: s.pageInfo })[0];
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
    const r = Cs(this.apiIdentifier, this.namespace, this.getRecordFromData(t, "create")), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise(), i = gt(n, this.dataPath(`create${this.capitalizedApiIdentifier}`));
    return gr(n, i[this.apiIdentifier]);
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
      throw new $n("Cannot perform bulkCreate without a pluralApiIdentifier");
    const n = Ke(this.options.pluralApiIdentifier), i = _s(this.apiIdentifier, this.options.pluralApiIdentifier, this.namespace, t), o = await this.connection.currentClient.mutation(i.query, i.variables).toPromise(), s = gt(o, this.dataPath(`bulkCreate${n}`));
    return ai(o, s[this.options.pluralApiIdentifier]);
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
    qn(t, "Can't update a record without an ID passed");
    const n = Rs(this.apiIdentifier, this.namespace, t, this.getRecordFromData(r, "update")), i = await this.connection.currentClient.mutation(n.query, n.variables).toPromise(), o = gt(i, this.dataPath(`update${this.capitalizedApiIdentifier}`));
    return gr(i, o[this.apiIdentifier]);
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
    qn(t, "Can't delete a record without an ID");
    const r = xs(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise();
    gt(n, this.dataPath(`delete${this.capitalizedApiIdentifier}`));
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
    const r = Ds(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise();
    gt(n, this.dataPath(`deleteMany${this.capitalizedApiIdentifier}`));
  }
  dataPath(t) {
    return ["internal", ...wt([t], this.namespace)];
  }
}
function di(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, n] of Object.entries(e))
    n && t.push(r);
  return t;
}
const qe = (e, t, r, n) => {
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
            return await is(
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
            const l = await $i(
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
          return await qi(this, t, r, e, s);
        }, o);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        i.prototype[o.type] = Object.assign(async function(s) {
          const u = await qi(
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
          return await $i(this, o.operationName, void 0, r, e, s);
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
                    (d) => Ca(this[o.singleActionFunctionName], void 0, d)
                  )
                }
              }, await Bi(
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
              const [f, d] = js(o, s, u, l);
              return await Bi(
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
function Ca(e, t, r = {}) {
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
function js(e, t, r, n) {
  let i, o;
  t && (i = n.shift()), r && (o = n.shift());
  const s = n.shift();
  let u = o;
  (i || o) && (u = Ca(e, i, o));
  const l = {};
  for (const [f, d] of Object.entries(e.variables))
    l[f] = {
      value: f == "id" ? i : u == null ? void 0 : u[f],
      ...d
    };
  return [l, s];
}
const Ce = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  email: !0,
  roles: { key: !0, name: !0 },
  updatedAt: !0
}, H = "user", lt = "users", Fs = qe(
  H,
  lt,
  Ce,
  [
    {
      type: "findOne",
      operationName: H,
      modelApiIdentifier: H,
      findByVariableName: "id",
      defaultSelection: Ce
    },
    {
      type: "maybeFindOne",
      operationName: H,
      modelApiIdentifier: H,
      findByVariableName: "id",
      defaultSelection: Ce
    },
    {
      type: "findMany",
      operationName: lt,
      modelApiIdentifier: H,
      defaultSelection: Ce
    },
    {
      type: "findFirst",
      operationName: lt,
      modelApiIdentifier: H,
      defaultSelection: Ce
    },
    {
      type: "maybeFindFirst",
      operationName: lt,
      modelApiIdentifier: H,
      defaultSelection: Ce
    },
    {
      type: "findOne",
      operationName: lt,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: H,
      defaultSelection: Ce
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
      defaultSelection: Ce
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
      modelSelectionField: lt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: Ce
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
      defaultSelection: Ce
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
      modelSelectionField: lt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: Ce
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
      modelSelectionField: lt,
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
      defaultSelection: Ce
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
      modelSelectionField: lt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: Ce
    }
  ]
), He = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, ve = "session", qt = "sessions", Ms = qe(
  ve,
  qt,
  He,
  [
    {
      type: "findOne",
      operationName: ve,
      modelApiIdentifier: ve,
      findByVariableName: "id",
      defaultSelection: He
    },
    {
      type: "maybeFindOne",
      operationName: ve,
      modelApiIdentifier: ve,
      findByVariableName: "id",
      defaultSelection: He
    },
    {
      type: "findMany",
      operationName: qt,
      modelApiIdentifier: ve,
      defaultSelection: He
    },
    {
      type: "findFirst",
      operationName: qt,
      modelApiIdentifier: ve,
      defaultSelection: He
    },
    {
      type: "maybeFindFirst",
      operationName: qt,
      modelApiIdentifier: ve,
      defaultSelection: He
    },
    {
      type: "action",
      operationName: "logInViaEmail",
      functionName: "logInViaEmail",
      namespace: "currentSession",
      modelApiIdentifier: ve,
      modelSelectionField: ve,
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
      defaultSelection: He
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
      modelApiIdentifier: ve,
      modelSelectionField: qt,
      namespace: "currentSession",
      variables: {
        inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" }
      },
      defaultSelection: He
    },
    {
      type: "action",
      operationName: "logOut",
      functionName: "logOut",
      namespace: "currentSession",
      modelApiIdentifier: ve,
      modelSelectionField: ve,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: He
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
      modelApiIdentifier: ve,
      modelSelectionField: qt,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: He
    }
  ]
), Xe = {
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
}, le = "shopifyProduct", Pt = "shopifyProducts", $s = qe(
  le,
  Pt,
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
      operationName: Pt,
      modelApiIdentifier: le,
      defaultSelection: Xe
    },
    {
      type: "findFirst",
      operationName: Pt,
      modelApiIdentifier: le,
      defaultSelection: Xe
    },
    {
      type: "maybeFindFirst",
      operationName: Pt,
      modelApiIdentifier: le,
      defaultSelection: Xe
    },
    {
      type: "action",
      operationName: "createShopifyProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: le,
      modelSelectionField: le,
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
      defaultSelection: Xe
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
      modelApiIdentifier: le,
      modelSelectionField: Pt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" }
      },
      defaultSelection: Xe
    },
    {
      type: "action",
      operationName: "updateShopifyProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: le,
      modelSelectionField: le,
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
      defaultSelection: Xe
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
      modelApiIdentifier: le,
      modelSelectionField: Pt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyProductsInput!]" }
      },
      defaultSelection: Xe
    },
    {
      type: "action",
      operationName: "deleteShopifyProduct",
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
      operationName: "bulkDeleteShopifyProducts",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: le,
      modelSelectionField: Pt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Ze = {
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
}, ce = "shopifyProductImage", Tt = "shopifyProductImages", qs = qe(
  ce,
  Tt,
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
      operationName: Tt,
      modelApiIdentifier: ce,
      defaultSelection: Ze
    },
    {
      type: "findFirst",
      operationName: Tt,
      modelApiIdentifier: ce,
      defaultSelection: Ze
    },
    {
      type: "maybeFindFirst",
      operationName: Tt,
      modelApiIdentifier: ce,
      defaultSelection: Ze
    },
    {
      type: "action",
      operationName: "createShopifyProductImage",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ce,
      modelSelectionField: ce,
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
      defaultSelection: Ze
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
      modelApiIdentifier: ce,
      modelSelectionField: Tt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: Ze
    },
    {
      type: "action",
      operationName: "updateShopifyProductImage",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ce,
      modelSelectionField: ce,
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
      defaultSelection: Ze
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
      modelApiIdentifier: ce,
      modelSelectionField: Tt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: Ze
    },
    {
      type: "action",
      operationName: "deleteShopifyProductImage",
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
      operationName: "bulkDeleteShopifyProductImages",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ce,
      modelSelectionField: Tt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), et = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  name: !0,
  position: !0,
  updatedAt: !0,
  values: !0
}, de = "shopifyProductOption", Ct = "shopifyProductOptions", Bs = qe(
  de,
  Ct,
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
      operationName: Ct,
      modelApiIdentifier: de,
      defaultSelection: et
    },
    {
      type: "findFirst",
      operationName: Ct,
      modelApiIdentifier: de,
      defaultSelection: et
    },
    {
      type: "maybeFindFirst",
      operationName: Ct,
      modelApiIdentifier: de,
      defaultSelection: et
    },
    {
      type: "action",
      operationName: "createShopifyProductOption",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: de,
      modelSelectionField: de,
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
      defaultSelection: et
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
      modelApiIdentifier: de,
      modelSelectionField: Ct,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: et
    },
    {
      type: "action",
      operationName: "updateShopifyProductOption",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: de,
      modelSelectionField: de,
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
      defaultSelection: et
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
      modelApiIdentifier: de,
      modelSelectionField: Ct,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: et
    },
    {
      type: "action",
      operationName: "deleteShopifyProductOption",
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
      operationName: "bulkDeleteShopifyProductOptions",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: de,
      modelSelectionField: Ct,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), tt = {
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
}, fe = "shopifyProductVariant", _t = "shopifyProductVariants", Us = qe(
  fe,
  _t,
  tt,
  [
    {
      type: "findOne",
      operationName: fe,
      modelApiIdentifier: fe,
      findByVariableName: "id",
      defaultSelection: tt
    },
    {
      type: "maybeFindOne",
      operationName: fe,
      modelApiIdentifier: fe,
      findByVariableName: "id",
      defaultSelection: tt
    },
    {
      type: "findMany",
      operationName: _t,
      modelApiIdentifier: fe,
      defaultSelection: tt
    },
    {
      type: "findFirst",
      operationName: _t,
      modelApiIdentifier: fe,
      defaultSelection: tt
    },
    {
      type: "maybeFindFirst",
      operationName: _t,
      modelApiIdentifier: fe,
      defaultSelection: tt
    },
    {
      type: "action",
      operationName: "createShopifyProductVariant",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: fe,
      modelSelectionField: fe,
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
      defaultSelection: tt
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
      modelApiIdentifier: fe,
      modelSelectionField: _t,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: tt
    },
    {
      type: "action",
      operationName: "updateShopifyProductVariant",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: fe,
      modelSelectionField: fe,
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
      defaultSelection: tt
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
      modelApiIdentifier: fe,
      modelSelectionField: _t,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: tt
    },
    {
      type: "action",
      operationName: "deleteShopifyProductVariant",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: fe,
      modelSelectionField: fe,
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
      modelApiIdentifier: fe,
      modelSelectionField: _t,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), ge = {
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
}, J = "shopifyShop", ct = "shopifyShops", Vs = qe(
  J,
  ct,
  ge,
  [
    {
      type: "findOne",
      operationName: J,
      modelApiIdentifier: J,
      findByVariableName: "id",
      defaultSelection: ge
    },
    {
      type: "maybeFindOne",
      operationName: J,
      modelApiIdentifier: J,
      findByVariableName: "id",
      defaultSelection: ge
    },
    {
      type: "findMany",
      operationName: ct,
      modelApiIdentifier: J,
      defaultSelection: ge
    },
    {
      type: "findFirst",
      operationName: ct,
      modelApiIdentifier: J,
      defaultSelection: ge
    },
    {
      type: "maybeFindFirst",
      operationName: ct,
      modelApiIdentifier: J,
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "createShopifyShop",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: J,
      modelSelectionField: J,
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
      defaultSelection: ge
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
      modelApiIdentifier: J,
      modelSelectionField: ct,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyShopsInput!]" }
      },
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "updateShopifyShop",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: J,
      modelSelectionField: J,
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
      defaultSelection: ge
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
      modelApiIdentifier: J,
      modelSelectionField: ct,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyShopsInput!]" }
      },
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "deleteShopifyShop",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: J,
      modelSelectionField: J,
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
      modelApiIdentifier: J,
      modelSelectionField: ct,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "reinstallShopifyShop",
      functionName: "reinstall",
      namespace: null,
      modelApiIdentifier: J,
      modelSelectionField: J,
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
      defaultSelection: ge
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
      modelApiIdentifier: J,
      modelSelectionField: ct,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkReinstallShopifyShopsInput!]" }
      },
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "uninstallShopifyShop",
      functionName: "uninstall",
      namespace: null,
      modelApiIdentifier: J,
      modelSelectionField: J,
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
      defaultSelection: ge
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
      modelApiIdentifier: J,
      modelSelectionField: ct,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUninstallShopifyShopsInput!]" }
      },
      defaultSelection: ge
    }
  ]
), rt = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
}, pe = "productPairing", Rt = "productPairings", Gs = qe(
  pe,
  Rt,
  rt,
  [
    {
      type: "findOne",
      operationName: pe,
      modelApiIdentifier: pe,
      findByVariableName: "id",
      defaultSelection: rt
    },
    {
      type: "maybeFindOne",
      operationName: pe,
      modelApiIdentifier: pe,
      findByVariableName: "id",
      defaultSelection: rt
    },
    {
      type: "findMany",
      operationName: Rt,
      modelApiIdentifier: pe,
      defaultSelection: rt
    },
    {
      type: "findFirst",
      operationName: Rt,
      modelApiIdentifier: pe,
      defaultSelection: rt
    },
    {
      type: "maybeFindFirst",
      operationName: Rt,
      modelApiIdentifier: pe,
      defaultSelection: rt
    },
    {
      type: "action",
      operationName: "createProductPairing",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: pe,
      modelSelectionField: pe,
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
      defaultSelection: rt
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
      modelApiIdentifier: pe,
      modelSelectionField: Rt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateProductPairingsInput!]" }
      },
      defaultSelection: rt
    },
    {
      type: "action",
      operationName: "updateProductPairing",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: pe,
      modelSelectionField: pe,
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
      defaultSelection: rt
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
      modelApiIdentifier: pe,
      modelSelectionField: Rt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateProductPairingsInput!]" }
      },
      defaultSelection: rt
    },
    {
      type: "action",
      operationName: "deleteProductPairing",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: pe,
      modelSelectionField: pe,
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
      modelApiIdentifier: pe,
      modelSelectionField: Rt,
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
}, ae = "shopifySync", pt = "shopifySyncs", Ls = qe(
  ae,
  pt,
  _e,
  [
    {
      type: "findOne",
      operationName: ae,
      modelApiIdentifier: ae,
      findByVariableName: "id",
      defaultSelection: _e
    },
    {
      type: "maybeFindOne",
      operationName: ae,
      modelApiIdentifier: ae,
      findByVariableName: "id",
      defaultSelection: _e
    },
    {
      type: "findMany",
      operationName: pt,
      modelApiIdentifier: ae,
      defaultSelection: _e
    },
    {
      type: "findFirst",
      operationName: pt,
      modelApiIdentifier: ae,
      defaultSelection: _e
    },
    {
      type: "maybeFindFirst",
      operationName: pt,
      modelApiIdentifier: ae,
      defaultSelection: _e
    },
    {
      type: "findOne",
      operationName: pt,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ae,
      defaultSelection: _e
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
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
      modelApiIdentifier: ae,
      modelSelectionField: pt,
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
      modelApiIdentifier: ae,
      modelSelectionField: ae,
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
      modelApiIdentifier: ae,
      modelSelectionField: pt,
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
      modelApiIdentifier: ae,
      modelSelectionField: ae,
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
      modelApiIdentifier: ae,
      modelSelectionField: pt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: _e
    }
  ]
), We = {
  __typename: !0,
  id: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  updatedAt: !0
}, oe = "ambiguous", yt = "ambiguouss", Ws = qe(
  oe,
  yt,
  We,
  [
    {
      type: "findOne",
      operationName: oe,
      modelApiIdentifier: oe,
      findByVariableName: "id",
      defaultSelection: We
    },
    {
      type: "maybeFindOne",
      operationName: oe,
      modelApiIdentifier: oe,
      findByVariableName: "id",
      defaultSelection: We
    },
    {
      type: "findMany",
      operationName: yt,
      modelApiIdentifier: oe,
      defaultSelection: We
    },
    {
      type: "findFirst",
      operationName: yt,
      modelApiIdentifier: oe,
      defaultSelection: We
    },
    {
      type: "maybeFindFirst",
      operationName: yt,
      modelApiIdentifier: oe,
      defaultSelection: We
    },
    {
      type: "findOne",
      operationName: yt,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: oe,
      defaultSelection: We
    },
    {
      type: "action",
      operationName: "createAmbiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: oe,
      modelSelectionField: oe,
      isBulk: !1,
      isDeleter: !1,
      variables: { ambiguous: { required: !1, type: "CreateAmbiguousInput" } },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: We
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
      modelApiIdentifier: oe,
      modelSelectionField: yt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAmbiguousInput!]" } },
      defaultSelection: We
    },
    {
      type: "action",
      operationName: "updateAmbiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: oe,
      modelSelectionField: oe,
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
      defaultSelection: We
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
      modelApiIdentifier: oe,
      modelSelectionField: yt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAmbiguousInput!]" } },
      defaultSelection: We
    },
    {
      type: "action",
      operationName: "deleteAmbiguous",
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
      operationName: "bulkDeleteAmbiguous",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: oe,
      modelSelectionField: yt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), ze = {
  __typename: !0,
  id: !0,
  createdAt: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, se = "unambiguous", ht = "unambiguouss", zs = qe(
  se,
  ht,
  ze,
  [
    {
      type: "findOne",
      operationName: se,
      modelApiIdentifier: se,
      findByVariableName: "id",
      defaultSelection: ze
    },
    {
      type: "maybeFindOne",
      operationName: se,
      modelApiIdentifier: se,
      findByVariableName: "id",
      defaultSelection: ze
    },
    {
      type: "findMany",
      operationName: ht,
      modelApiIdentifier: se,
      defaultSelection: ze
    },
    {
      type: "findFirst",
      operationName: ht,
      modelApiIdentifier: se,
      defaultSelection: ze
    },
    {
      type: "maybeFindFirst",
      operationName: ht,
      modelApiIdentifier: se,
      defaultSelection: ze
    },
    {
      type: "findOne",
      operationName: ht,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: se,
      defaultSelection: ze
    },
    {
      type: "action",
      operationName: "createUnambiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: se,
      modelSelectionField: se,
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
      defaultSelection: ze
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
      modelApiIdentifier: se,
      modelSelectionField: ht,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateUnambiguousInput!]" }
      },
      defaultSelection: ze
    },
    {
      type: "action",
      operationName: "updateUnambiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: se,
      modelSelectionField: se,
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
      defaultSelection: ze
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
      modelApiIdentifier: se,
      modelSelectionField: ht,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateUnambiguousInput!]" }
      },
      defaultSelection: ze
    },
    {
      type: "action",
      operationName: "deleteUnambiguous",
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
      operationName: "bulkDeleteUnambiguous",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: se,
      modelSelectionField: ht,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Wi = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, zi = "session", Ks = "sessions", Ys = qe(
  zi,
  Ks,
  Wi,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: Wi,
      modelApiIdentifier: zi
    }
  ]
);
var _a;
const Ki = "production", Js = "development", Qs = Symbol.for("gadget/modelRelationships"), Hs = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class Xs {
  constructor(t) {
    var i;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[_a] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (o) => await Ui(
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
      async () => await Ui(
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
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? Hs() ?? Js).toLocaleLowerCase();
    let r;
    this.apiRoots[this.environment] ? r = this.apiRoots[this.environment] : r = `https://related-products-example${this.environment == Ki ? "" : `--${this.environment}`}.gadget.app`;
    const n = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== Ki) {
      const o = ({ forward: s }) => (u) => {
        const l = s(u);
        return Hn(
          l,
          Gt((f) => {
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
    if (this.connection = new Pa({
      endpoint: new URL("api/graphql", r).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: n,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == ie.APIKey && !((i = t == null ? void 0 : t.authenticationMode) != null && i.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new Fs(this.connection), this.session = new Ms(this.connection), this.shopifyProduct = new $s(this.connection), this.shopifyProductImage = new qs(this.connection), this.shopifyProductOption = new Bs(this.connection), this.shopifyProductVariant = new Us(this.connection), this.shopifyShop = new Vs(this.connection), this.productPairing = new Gs(this.connection), this.shopifySync = new Ls(this.connection), this.ambiguous = new Ws(this.connection), this.unambiguous = new zs(this.connection), this.currentSession = new Ys(this.connection), this.internal = {
      user: new Le("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new Le("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new Le("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new Le("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new Le("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new Le("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new Le("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new Le("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new Le("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new Le("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new Le("unambiguous", this.connection, {
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
    qn(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let i, o;
    return typeof n < "u" ? (i = r, o = n) : !t.variables || Object.keys(t.variables).length == 0 ? (i = {}, o = r) : (typeof r == "string" ? i = { id: r } : i = r, o = {}), await as(this.connection, t, i, o);
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
    return new Fr(this.connection, t, r);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
_a = Qs;
var Ra = {}, Qr = Ie.createContext(Ra), Zs = Qr.Provider;
Qr.Consumer;
Qr.displayName = "UrqlContext";
var xa = () => {
  var e = Ie.useContext(Qr);
  if (e === Ra && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, Wn = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, eu = (e, t) => e === t || !(!e || !t || e.key !== t.key), An = (e, t) => {
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
      if (s === "operation" ? !eu(n[s], i[s]) : n[s] !== i[s])
        return !0;
    return !1;
  })(e, r) ? r : e;
}, tu = (e, t) => {
  for (var r = 0, n = t.length; r < n; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}, Nn = Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Wr(e, t) {
  process.env.NODE_ENV !== "production" && Nn && Nn.ReactCurrentOwner && Nn.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function ru(e) {
  var t = Ie.useRef(!0), r = xa(), [n, i] = Ie.useState(Wn), o = Ie.useCallback((s, u) => (Wr(i, {
    ...Wn,
    fetching: !0
  }), zr(Er(1)(ee((l) => !l.hasNext)(Ft((l) => {
    t.current && Wr(i, {
      fetching: !1,
      stale: l.stale,
      data: l.data,
      error: l.error,
      extensions: l.extensions,
      operation: l.operation
    });
  })(r.executeMutation(br(e, s), u || {})))))), [r, e, i]);
  return Ie.useEffect(() => (t.current = !0, () => {
    t.current = !1;
  }), []), [n, o];
}
function nu(e, t) {
  var r = Ie.useRef(void 0);
  return Ie.useMemo(() => {
    var n = br(e, t);
    return r.current !== void 0 && r.current.key === n.key ? r.current : (r.current = n, n);
  }, [e, t]);
}
var iu = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    e.operations$ && Mt((n) => {
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
}, au = (e, t) => e.suspense && (!t || t.suspense !== !1);
function ou(e) {
  var t = xa(), r = iu(t), n = au(t, e.context), i = nu(e.query, e.variables), o = Ie.useMemo(() => {
    if (e.pause)
      return null;
    var h = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return n ? Ft((m) => {
      r.set(i.key, m);
    })(h) : h;
  }, [r, t, i, n, e.pause, e.requestPolicy, e.context]), s = Ie.useCallback((h, m) => {
    if (!h)
      return {
        fetching: !1
      };
    var g = r.get(i.key);
    if (g) {
      if (m && g != null && "then" in g)
        throw g;
    } else {
      var N, F = Mt((I) => {
        g = I, N && N(g);
      })(Xi(() => m && !N || !g)(h));
      if (g == null && m) {
        var _ = new Promise((I) => {
          N = I;
        });
        throw r.set(i.key, _), _;
      } else
        F.unsubscribe();
    }
    return g || {
      fetching: !0
    };
  }, [r, i]), u = [t, i, e.requestPolicy, e.context, e.pause], [l, f] = Ie.useState(() => [o, An(Wn, s(o, n)), u]), d = l[1];
  o !== l[0] && tu(l[2], u) && f([o, d = An(l[1], s(o, n)), u]), Ie.useEffect(() => {
    var h = l[0], m = l[2][1], g = !1, N = (_) => {
      g = !0, Wr(f, (I) => {
        var U = An(I[1], _);
        return I[1] !== U ? [I[0], U, I[2]] : I;
      });
    };
    if (h) {
      var F = Mt(N)(Yn(() => {
        N({
          fetching: !1
        });
      })(h));
      return g || N({
        fetching: !0
      }), () => {
        r.dispose(m.key), F.unsubscribe();
      };
    } else
      N({
        fetching: !1
      });
  }, [r, l[0], l[2][1]]);
  var y = Ie.useCallback((h) => {
    var m = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...h
    };
    Wr(f, (g) => [n ? Ft((N) => {
      r.set(i.key, N);
    })(t.executeQuery(i, m)) : t.executeQuery(i, m), g[1], u]);
  }, [t, r, i, n, s, e.requestPolicy, e.context]);
  return [d, y];
}
const fi = ke.createContext(void 0), su = ke.createContext(void 0), uu = "/", lu = "signOut", cu = "/";
function du(e) {
  let t, r;
  if ("api" in e) {
    if (!Wa(e.api))
      throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    t = e.api, r = e.api.connection.currentClient;
  } else if (e.value)
    r = e.value;
  else
    throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
  r.suspense = !0;
  let n = uu, i = lu, o = cu;
  if ("auth" in e) {
    const { auth: s } = e;
    s != null && s.signInPath && (n = s.signInPath), s != null && s.signOutActionApiIdentifier && (i = s.signOutActionApiIdentifier), s != null && s.redirectOnSuccessfulSignInPath && (o = s.redirectOnSuccessfulSignInPath);
  }
  return ke.createElement(
    fi.Provider,
    { value: r },
    ke.createElement(
      su.Provider,
      { value: {
        api: t,
        navigate: e.navigate,
        auth: {
          signInPath: n,
          signOutActionApiIdentifier: i,
          redirectOnSuccessfulSignInPath: o
        }
      } },
      ke.createElement(Zs, { value: r }, e.children)
    )
  );
}
const Da = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", fu = (e, t) => {
  let r = "";
  return e !== void 0 ? r = `[Network] ${e.message}` : t !== void 0 ? t.forEach((n) => {
    r += `[GraphQL] ${n.message}
`;
  }) : r = "Unknown error", r.trim();
}, pu = (e) => typeof e == "string" ? new Or(e) : e != null && e.message && !e.code ? new Or(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class Dt extends Error {
  /** @private */
  static forClientSideError(t, r) {
    return new Dt({
      executionErrors: [t],
      response: r
    });
  }
  /** @private */
  static forErrorsResponse(t, r) {
    return new Dt({
      executionErrors: t.map(ii),
      response: r
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new Dt({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, r, n = !1) {
    const i = Ko(t, r);
    let o = Dt.forMaybeCombinedError(t.error);
    return !o && i && !n && (o = Dt.forClientSideError(i)), o;
  }
  constructor({ networkError: t, executionErrors: r, response: n }) {
    const i = (r || []).map(pu), o = fu(t, i);
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
const yu = (e) => {
  const { context: t, suspense: r, ...n } = e ?? {}, i = wr(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...n,
    context: i
  };
}, hu = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), mu = (e) => {
  if (!Hi(fi))
    throw new Error(Da);
  const t = yu(e);
  return ou(t);
};
var bu = typeof Element < "u", vu = typeof Map == "function", gu = typeof Set == "function", Su = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Mr(e, t) {
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
        if (!Mr(e[n], t[n]))
          return !1;
      return !0;
    }
    var o;
    if (vu && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!Mr(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (gu && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Su && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (bu && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !Mr(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var wu = function(t, r) {
  try {
    return Mr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Iu = /* @__PURE__ */ Va(wu), ku = (e) => {
  const t = En();
  return e ? (t.current === void 0 || !Iu(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, Ou = (e) => {
  if (!Hi(fi))
    throw new Error(Da);
  return ru(e);
}, Au = (e, t) => {
  const r = ku(t), n = wr(() => si(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, r, e.findMany.namespace), [e, r]), [i, o] = mu(hu(n, t));
  return [wr(() => {
    const u = wt([e.findMany.operationName], e.findMany.namespace);
    let l = i.data;
    if (l) {
      const d = Yt(i.data, u);
      if (d) {
        const y = Ar(i, d);
        l = Jt.boot(e, y, d);
      }
    }
    const f = Dt.errorIfDataAbsent(i, u, t == null ? void 0 : t.pause);
    return { ...i, data: l, error: f };
  }, [e, t == null ? void 0 : t.pause, i]), o];
};
var zn = { exports: {} }, pr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yi;
function Nu() {
  if (Yi)
    return pr;
  Yi = 1;
  var e = ke, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return pr.Fragment = r, pr.jsx = s, pr.jsxs = s, pr;
}
var Dr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ji;
function Eu() {
  return Ji || (Ji = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ke, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.iterator, N = "@@iterator";
    function F(a) {
      if (a === null || typeof a != "object")
        return null;
      var c = g && a[g] || a[N];
      return typeof c == "function" ? c : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(a) {
      {
        for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), v = 1; v < c; v++)
          p[v - 1] = arguments[v];
        U("error", a, p);
      }
    }
    function U(a, c, p) {
      {
        var v = _.ReactDebugCurrentFrame, O = v.getStackAddendum();
        O !== "" && (c += "%s", p = p.concat([O]));
        var A = p.map(function(k) {
          return String(k);
        });
        A.unshift("Warning: " + c), Function.prototype.apply.call(console[a], console, A);
      }
    }
    var b = !1, P = !1, S = !1, V = !1, Ne = !1, De;
    De = Symbol.for("react.module.reference");
    function Be(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === o || Ne || a === i || a === f || a === d || V || a === m || b || P || S || typeof a == "object" && a !== null && (a.$$typeof === h || a.$$typeof === y || a.$$typeof === s || a.$$typeof === u || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === De || a.getModuleId !== void 0));
    }
    function re(a, c, p) {
      var v = a.displayName;
      if (v)
        return v;
      var O = c.displayName || c.name || "";
      return O !== "" ? p + "(" + O + ")" : p;
    }
    function Z(a) {
      return a.displayName || "Context";
    }
    function W(a) {
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
            return Z(c) + ".Consumer";
          case s:
            var p = a;
            return Z(p._context) + ".Provider";
          case l:
            return re(a, a.render, "ForwardRef");
          case y:
            var v = a.displayName || null;
            return v !== null ? v : W(a.type) || "Memo";
          case h: {
            var O = a, A = O._payload, k = O._init;
            try {
              return W(k(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, M = 0, $, x, L, Ee, q, je, Ue;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function Qe() {
      {
        if (M === 0) {
          $ = console.log, x = console.info, L = console.warn, Ee = console.error, q = console.group, je = console.groupCollapsed, Ue = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Je,
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
        M++;
      }
    }
    function Q() {
      {
        if (M--, M === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, a, {
              value: $
            }),
            info: E({}, a, {
              value: x
            }),
            warn: E({}, a, {
              value: L
            }),
            error: E({}, a, {
              value: Ee
            }),
            group: E({}, a, {
              value: q
            }),
            groupCollapsed: E({}, a, {
              value: je
            }),
            groupEnd: E({}, a, {
              value: Ue
            })
          });
        }
        M < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = _.ReactCurrentDispatcher, ft;
    function Ve(a, c, p) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (O) {
            var v = O.stack.trim().match(/\n( *(at )?)/);
            ft = v && v[1] || "";
          }
        return `
` + ft + a;
      }
    }
    var It = !1, at;
    {
      var Hr = typeof WeakMap == "function" ? WeakMap : Map;
      at = new Hr();
    }
    function Qt(a, c) {
      if (!a || It)
        return "";
      {
        var p = at.get(a);
        if (p !== void 0)
          return p;
      }
      var v;
      It = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = z.current, z.current = null, Qe();
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
            } catch (ne) {
              v = ne;
            }
            Reflect.construct(a, [], k);
          } else {
            try {
              k.call();
            } catch (ne) {
              v = ne;
            }
            a.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            v = ne;
          }
          a();
        }
      } catch (ne) {
        if (ne && v && typeof ne.stack == "string") {
          for (var w = ne.stack.split(`
`), B = v.stack.split(`
`), T = w.length - 1, C = B.length - 1; T >= 1 && C >= 0 && w[T] !== B[C]; )
            C--;
          for (; T >= 1 && C >= 0; T--, C--)
            if (w[T] !== B[C]) {
              if (T !== 1 || C !== 1)
                do
                  if (T--, C--, C < 0 || w[T] !== B[C]) {
                    var K = `
` + w[T].replace(" at new ", " at ");
                    return a.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", a.displayName)), typeof a == "function" && at.set(a, K), K;
                  }
                while (T >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        It = !1, z.current = A, Q(), Error.prepareStackTrace = O;
      }
      var Te = a ? a.displayName || a.name : "", lr = Te ? Ve(Te) : "";
      return typeof a == "function" && at.set(a, lr), lr;
    }
    function Xr(a, c, p) {
      return Qt(a, !1);
    }
    function Zr(a) {
      var c = a.prototype;
      return !!(c && c.isReactComponent);
    }
    function ot(a, c, p) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Qt(a, Zr(a));
      if (typeof a == "string")
        return Ve(a);
      switch (a) {
        case f:
          return Ve("Suspense");
        case d:
          return Ve("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return Xr(a.render);
          case y:
            return ot(a.type, c, p);
          case h: {
            var v = a, O = v._payload, A = v._init;
            try {
              return ot(A(O), c, p);
            } catch {
            }
          }
        }
      return "";
    }
    var st = Object.prototype.hasOwnProperty, Ht = {}, Xt = _.ReactDebugCurrentFrame;
    function ut(a) {
      if (a) {
        var c = a._owner, p = ot(a.type, a._source, c ? c.type : null);
        Xt.setExtraStackFrame(p);
      } else
        Xt.setExtraStackFrame(null);
    }
    function en(a, c, p, v, O) {
      {
        var A = Function.call.bind(st);
        for (var k in a)
          if (A(a, k)) {
            var w = void 0;
            try {
              if (typeof a[k] != "function") {
                var B = Error((v || "React class") + ": " + p + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              w = a[k](c, k, v, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              w = T;
            }
            w && !(w instanceof Error) && (ut(O), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", p, k, typeof w), ut(null)), w instanceof Error && !(w.message in Ht) && (Ht[w.message] = !0, ut(O), I("Failed %s type: %s", p, w.message), ut(null));
          }
      }
    }
    var tn = Array.isArray;
    function kt(a) {
      return tn(a);
    }
    function rn(a) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, p = c && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return p;
      }
    }
    function nn(a) {
      try {
        return Zt(a), !1;
      } catch {
        return !0;
      }
    }
    function Zt(a) {
      return "" + a;
    }
    function er(a) {
      if (nn(a))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rn(a)), Zt(a);
    }
    var Ge = _.ReactCurrentOwner, an = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tr, rr, Ot;
    Ot = {};
    function on(a) {
      if (st.call(a, "ref")) {
        var c = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function sn(a) {
      if (st.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function un(a, c) {
      if (typeof a.ref == "string" && Ge.current && c && Ge.current.stateNode !== c) {
        var p = W(Ge.current.type);
        Ot[p] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(Ge.current.type), a.ref), Ot[p] = !0);
      }
    }
    function ln(a, c) {
      {
        var p = function() {
          tr || (tr = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function cn(a, c) {
      {
        var p = function() {
          rr || (rr = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var dn = function(a, c, p, v, O, A, k) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: c,
        ref: p,
        props: k,
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
        value: v
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function fn(a, c, p, v, O) {
      {
        var A, k = {}, w = null, B = null;
        p !== void 0 && (er(p), w = "" + p), sn(c) && (er(c.key), w = "" + c.key), on(c) && (B = c.ref, un(c, O));
        for (A in c)
          st.call(c, A) && !an.hasOwnProperty(A) && (k[A] = c[A]);
        if (a && a.defaultProps) {
          var T = a.defaultProps;
          for (A in T)
            k[A] === void 0 && (k[A] = T[A]);
        }
        if (w || B) {
          var C = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          w && ln(k, C), B && cn(k, C);
        }
        return dn(a, w, B, O, v, Ge.current, k);
      }
    }
    var At = _.ReactCurrentOwner, nr = _.ReactDebugCurrentFrame;
    function Pe(a) {
      if (a) {
        var c = a._owner, p = ot(a.type, a._source, c ? c.type : null);
        nr.setExtraStackFrame(p);
      } else
        nr.setExtraStackFrame(null);
    }
    var Nt;
    Nt = !1;
    function Et(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function ir() {
      {
        if (At.current) {
          var a = W(At.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function pn(a) {
      {
        if (a !== void 0) {
          var c = a.fileName.replace(/^.*[\\\/]/, ""), p = a.lineNumber;
          return `

Check your code at ` + c + ":" + p + ".";
        }
        return "";
      }
    }
    var ar = {};
    function yn(a) {
      {
        var c = ir();
        if (!c) {
          var p = typeof a == "string" ? a : a.displayName || a.name;
          p && (c = `

Check the top-level render call using <` + p + ">.");
        }
        return c;
      }
    }
    function or(a, c) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var p = yn(c);
        if (ar[p])
          return;
        ar[p] = !0;
        var v = "";
        a && a._owner && a._owner !== At.current && (v = " It was passed a child from " + W(a._owner.type) + "."), Pe(a), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, v), Pe(null);
      }
    }
    function sr(a, c) {
      {
        if (typeof a != "object")
          return;
        if (kt(a))
          for (var p = 0; p < a.length; p++) {
            var v = a[p];
            Et(v) && or(v, c);
          }
        else if (Et(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var O = F(a);
          if (typeof O == "function" && O !== a.entries)
            for (var A = O.call(a), k; !(k = A.next()).done; )
              Et(k.value) && or(k.value, c);
        }
      }
    }
    function hn(a) {
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
          var v = W(c);
          en(p, a.props, "prop", v, a);
        } else if (c.PropTypes !== void 0 && !Nt) {
          Nt = !0;
          var O = W(c);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mn(a) {
      {
        for (var c = Object.keys(a.props), p = 0; p < c.length; p++) {
          var v = c[p];
          if (v !== "children" && v !== "key") {
            Pe(a), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), Pe(null);
            break;
          }
        }
        a.ref !== null && (Pe(a), I("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    function ur(a, c, p, v, O, A) {
      {
        var k = Be(a);
        if (!k) {
          var w = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = pn(O);
          B ? w += B : w += ir();
          var T;
          a === null ? T = "null" : kt(a) ? T = "array" : a !== void 0 && a.$$typeof === t ? (T = "<" + (W(a.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : T = typeof a, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, w);
        }
        var C = fn(a, c, p, O, A);
        if (C == null)
          return C;
        if (k) {
          var K = c.children;
          if (K !== void 0)
            if (v)
              if (kt(K)) {
                for (var Te = 0; Te < K.length; Te++)
                  sr(K[Te], a);
                Object.freeze && Object.freeze(K);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sr(K, a);
        }
        return a === n ? mn(C) : hn(C), C;
      }
    }
    function bn(a, c, p) {
      return ur(a, c, p, !0);
    }
    function vn(a, c, p) {
      return ur(a, c, p, !1);
    }
    var gn = vn, Sn = bn;
    Dr.Fragment = n, Dr.jsx = gn, Dr.jsxs = Sn;
  }()), Dr;
}
process.env.NODE_ENV === "production" ? zn.exports = Nu() : zn.exports = Eu();
var Qi = zn.exports;
const Pu = Ma(function({ open: e, onShow: t, onHide: r, children: n, ...i }, o) {
  const [s, u] = $r(), { titleBar: l, modalContent: f } = $a.toArray(n).reduce(
    (y, h) => {
      const m = typeof h == "object" && "type" in h ? h.type : void 0;
      return m === "ui-title-bar" || typeof m == "object" && m.displayName === "ui-title-bar" ? {
        ...y,
        titleBar: h
      } : (y.modalContent.push(h), y);
    },
    { modalContent: [] }
  ), d = s ? Ua.createPortal(f, s.content) : null;
  return $e(() => {
    s && (e ? s.show() : s.hide());
  }, [s, e]), $e(() => {
    if (!(!s || !t))
      return s.addEventListener("show", t), () => {
        s.removeEventListener("show", t);
      };
  }, [s, t]), $e(() => {
    if (!(!s || !r))
      return s.addEventListener("hide", r), () => {
        s.removeEventListener("hide", r);
      };
  }, [s, r]), $e(() => {
    if (s)
      return () => {
        s.hide();
      };
  }, [s]), /* @__PURE__ */ Qi.jsxs(
    "ui-modal",
    {
      ...i,
      ref: (y) => {
        u(y), o && (typeof o == "function" ? o(y) : o.current = y);
      },
      children: [
        l,
        /* @__PURE__ */ Qi.jsx("div", { children: d })
      ]
    }
  );
});
Pu.displayName = "ui-modal";
const Tu = new Proxy(
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
function Cu() {
  if (typeof window > "u")
    return Tu;
  if (!window.shopify)
    throw Error(
      "The shopify global is not defined. This likely means the App Bridge script tag was not added correctly to this page"
    );
  return window.shopify;
}
var St;
(function(e) {
  e[e.Standalone = 0] = "Standalone", e[e.Embedded = 1] = "Embedded";
})(St || (St = {}));
const _u = `
  mutation ShopifyFetchOrInstallShop($shopifySessionToken: String!) {
    shopifyConnection {
      fetchOrInstallShop(shopifySessionToken: $shopifySessionToken) {
        isAuthenticated
        redirectToOauth
        missingScopes
      }
    }
  }
`, Ru = qa(({ children: e, gadgetAppUrl: t, originalQueryParams: r, api: n, type: i, host: o, isReady: s, isRootFrameRequest: u }) => {
  const l = Cu(), f = (r == null ? void 0 : r.has("hmac")) && (r == null ? void 0 : r.has("shop")), d = l.environment.embedded || l.environment.mobile, y = d && i === St.Embedded, h = s && typeof o < "u" && !y, [m, g] = $r({
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !0,
    appBridge: l,
    isRootFrameRequest: !1
  }), [N, F] = $r();
  $e(() => {
    if (!l) {
      console.debug("[gadget-rsab] no app bridge, skipping client auth setup");
      return;
    }
    n.connection.setAuthenticationMode({
      custom: {
        async processFetch(re, Z) {
          const W = new Headers(Z.headers), E = await l.idToken();
          W.append("Authorization", `ShopifySessionToken ${E}`), Z.headers ?? (Z.headers = {}), W.forEach(function(M, $) {
            Z.headers[$] = M;
          });
        },
        async processTransactionConnectionParams(re) {
          const Z = await l.idToken();
          re.auth.shopifySessionToken = Z;
        }
      }
    }), console.debug("[gadget-rsab] set up client auth for session tokens");
  }, [n.connection, l]);
  let _ = !1, I = !1, U = wr(() => [], []);
  const b = En(!1), P = En(!1), [{ data: S, fetching: V, error: Ne }, De] = Ou(_u);
  S && (console.debug({ fetchOrInstallShopData: S }, "[gadget-rsab] fetched or installed shop data"), _ = S.shopifyConnection.fetchOrInstallShop.redirectToOauth, I = S.shopifyConnection.fetchOrInstallShop.isAuthenticated, U = S.shopifyConnection.fetchOrInstallShop.missingScopes ?? []), $e(() => {
    V && (P.current = !0);
  }, [V]), $e(() => {
    b.current || l && (b.current = !0, console.debug("[gadget-rsab] getting sessionToken to fetch or install shop"), l.idToken().then((re) => {
      console.debug("[gadget-rsab] fetching or installing shop"), De({ shopifySessionToken: re }).catch((Z) => {
        console.error({ err: Z }, "[gadget-rsab] error fetching or installing shop");
      });
    }).catch(F));
  }, [l, De]), $e(() => {
    if (!_ || u)
      return;
    const re = new URL("/api/connections/auth/shopify", t);
    re.search = (r == null ? void 0 : r.toString()) ?? "";
    const Z = re.toString();
    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process", {
      appType: i,
      isInstallRequest: f,
      isEmbedded: d,
      redirectURL: Z,
      gadgetAppUrl: t
    }), open(Z, "_top");
  }, [t, u, r, _]);
  const Be = h || _ || V || !P.current;
  return $e(() => {
    const re = {
      isAuthenticated: I,
      isEmbedded: d,
      canAuth: !!l,
      loading: Be,
      appBridge: l,
      error: Ne || N,
      isRootFrameRequest: u
    };
    return console.debug("[gadget-rsab] context changed", re), g(re);
  }, [Be, d, l, I, Ne, N, u]), $e(() => {
    if (U.length > 0 && !_) {
      const re = new CustomEvent("gadget:devharness:rsab.shopifyManagedInstallation.missingScopes", {
        detail: {
          missingScopes: U
        }
      });
      globalThis.dispatchEvent(re);
    }
  }, [_, U]), ke.createElement(ja.Provider, { value: m }, e);
}), xu = ({ isRootFrameRequest: e, children: t, query: r, gadgetAppUrl: n, type: i }) => {
  const o = (r == null ? void 0 : r.has("hmac")) && (r == null ? void 0 : r.has("shop")), s = o;
  return $e(() => {
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
  }, [n, e, r, s]), ke.createElement(ja.Provider, { value: {
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !1,
    appBridge: null,
    isRootFrameRequest: e
  } }, t);
}, Du = ({ type: e, children: t, api: r }) => {
  const n = !!(globalThis && globalThis.shopify), [i, o] = $r(null), s = !!i, { query: u } = i ?? {}, l = (u == null ? void 0 : u.get("host")) ?? void 0, f = e ?? St.Embedded, d = wr(() => u, [s]), y = !(u != null && u.has("hmac")) && !(u != null && u.has("shop")) && e == St.Embedded, h = new URL(r.connection.options.endpoint).origin;
  if ($e(() => {
    o({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search)
    });
  }, []), console.debug("[gadget-rsab] provider rendering", {
    host: l,
    location: i,
    coalescedType: f,
    isReady: s
  }), f == St.Embedded && !n && globalThis.top && globalThis.top !== globalThis.self) {
    let m;
    try {
      const g = document.referrer;
      m = new URL(g);
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
  if (f === St.Embedded && globalThis.top === globalThis.self) {
    const m = new CustomEvent("gadget:devharness:rsab.embeddedInRootContext");
    globalThis.dispatchEvent(m);
  }
  return ke.createElement(du, { api: r }, f === St.Embedded && n ? ke.createElement(Ru, { gadgetAppUrl: h, api: r, originalQueryParams: d, type: f, host: l, isReady: s, isRootFrameRequest: y }, t) : ke.createElement(xu, { isRootFrameRequest: y, query: u, type: f, gadgetAppUrl: h }, t));
}, ja = Ba({
  loading: !0,
  isEmbedded: !1,
  isAuthenticated: !1,
  canAuth: !1,
  appBridge: null,
  isRootFrameRequest: !1
}), Fa = new Xs(), ju = () => {
  const [{ data: e }] = Au(Fa.shopifyProduct);
  return /* @__PURE__ */ qr.jsx(qr.Fragment, { children: JSON.stringify(e) });
}, qu = () => /* @__PURE__ */ qr.jsx(Du, { api: Fa, shopifyApiKey: "deadbeef", children: /* @__PURE__ */ qr.jsx(ju, {}) });
export {
  qu as A,
  ju as R,
  $u as c,
  Va as g
};
