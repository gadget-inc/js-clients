import * as Ee from "react";
import Ae, { useMemo as rr, useContext as Ba, useRef as qa, forwardRef as zo, useState as kn, Children as Wo, useEffect as Le, memo as Qo, createContext as Jo } from "react";
import Yo from "react-dom";
var sd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ho(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zr = { exports: {} }, wn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zi;
function Ko() {
  if (zi)
    return wn;
  zi = 1;
  var e = Ae, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, u, d) {
    var c, p = {}, m = null, y = null;
    d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (y = u.ref);
    for (c in u)
      r.call(u, c) && !a.hasOwnProperty(c) && (p[c] = u[c]);
    if (l && l.defaultProps)
      for (c in u = l.defaultProps, u)
        p[c] === void 0 && (p[c] = u[c]);
    return { $$typeof: t, type: l, key: m, ref: y, props: p, _owner: i.current };
  }
  return wn.Fragment = n, wn.jsx = s, wn.jsxs = s, wn;
}
var Nn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wi;
function Xo() {
  return Wi || (Wi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ae, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.iterator, E = "@@iterator";
    function x(o) {
      if (o === null || typeof o != "object")
        return null;
      var f = g && o[g] || o[E];
      return typeof f == "function" ? f : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var f = arguments.length, h = new Array(f > 1 ? f - 1 : 0), v = 1; v < f; v++)
          h[v - 1] = arguments[v];
        D("error", o, h);
      }
    }
    function D(o, f, h) {
      {
        var v = P.ReactDebugCurrentFrame, O = v.getStackAddendum();
        O !== "" && (f += "%s", h = h.concat([O]));
        var k = h.map(function(N) {
          return String(N);
        });
        k.unshift("Warning: " + f), Function.prototype.apply.call(console[o], console, k);
      }
    }
    var b = !1, T = !1, S = !1, V = !1, Ce = !1, Fe;
    Fe = Symbol.for("react.module.reference");
    function Ue(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === a || Ce || o === i || o === d || o === c || V || o === y || b || T || S || typeof o == "object" && o !== null && (o.$$typeof === m || o.$$typeof === p || o.$$typeof === s || o.$$typeof === l || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Fe || o.getModuleId !== void 0));
    }
    function ut(o, f, h) {
      var v = o.displayName;
      if (v)
        return v;
      var O = f.displayName || f.name || "";
      return O !== "" ? h + "(" + O + ")" : h;
    }
    function ee(o) {
      return o.displayName || "Context";
    }
    function z(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            var f = o;
            return ee(f) + ".Consumer";
          case s:
            var h = o;
            return ee(h._context) + ".Provider";
          case u:
            return ut(o, o.render, "ForwardRef");
          case p:
            var v = o.displayName || null;
            return v !== null ? v : z(o.type) || "Memo";
          case m: {
            var O = o, k = O._payload, N = O._init;
            try {
              return z(N(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, U = 0, B, j, Q, ke, q, je, Be;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function et() {
      {
        if (U === 0) {
          B = console.log, j = console.info, Q = console.warn, ke = console.error, q = console.group, je = console.groupCollapsed, Be = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        U++;
      }
    }
    function te() {
      {
        if (U--, U === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, o, {
              value: B
            }),
            info: _({}, o, {
              value: j
            }),
            warn: _({}, o, {
              value: Q
            }),
            error: _({}, o, {
              value: ke
            }),
            group: _({}, o, {
              value: q
            }),
            groupCollapsed: _({}, o, {
              value: je
            }),
            groupEnd: _({}, o, {
              value: Be
            })
          });
        }
        U < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = P.ReactCurrentDispatcher, gt;
    function qe(o, f, h) {
      {
        if (gt === void 0)
          try {
            throw Error();
          } catch (O) {
            var v = O.stack.trim().match(/\n( *(at )?)/);
            gt = v && v[1] || "";
          }
        return `
` + gt + o;
      }
    }
    var Tt = !1, ct;
    {
      var Ir = typeof WeakMap == "function" ? WeakMap : Map;
      ct = new Ir();
    }
    function ln(o, f) {
      if (!o || Tt)
        return "";
      {
        var h = ct.get(o);
        if (h !== void 0)
          return h;
      }
      var v;
      Tt = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = Y.current, Y.current = null, et();
      try {
        if (f) {
          var N = function() {
            throw Error();
          };
          if (Object.defineProperty(N.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(N, []);
            } catch (se) {
              v = se;
            }
            Reflect.construct(o, [], N);
          } else {
            try {
              N.call();
            } catch (se) {
              v = se;
            }
            o.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (se) {
            v = se;
          }
          o();
        }
      } catch (se) {
        if (se && v && typeof se.stack == "string") {
          for (var I = se.stack.split(`
`), G = v.stack.split(`
`), R = I.length - 1, C = G.length - 1; R >= 1 && C >= 0 && I[R] !== G[C]; )
            C--;
          for (; R >= 1 && C >= 0; R--, C--)
            if (I[R] !== G[C]) {
              if (R !== 1 || C !== 1)
                do
                  if (R--, C--, C < 0 || I[R] !== G[C]) {
                    var H = `
` + I[R].replace(" at new ", " at ");
                    return o.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", o.displayName)), typeof o == "function" && ct.set(o, H), H;
                  }
                while (R >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        Tt = !1, Y.current = k, te(), Error.prepareStackTrace = O;
      }
      var Pe = o ? o.displayName || o.name : "", In = Pe ? qe(Pe) : "";
      return typeof o == "function" && ct.set(o, In), In;
    }
    function wr(o, f, h) {
      return ln(o, !1);
    }
    function Nr(o) {
      var f = o.prototype;
      return !!(f && f.isReactComponent);
    }
    function dt(o, f, h) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return ln(o, Nr(o));
      if (typeof o == "string")
        return qe(o);
      switch (o) {
        case d:
          return qe("Suspense");
        case c:
          return qe("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            return wr(o.render);
          case p:
            return dt(o.type, f, h);
          case m: {
            var v = o, O = v._payload, k = v._init;
            try {
              return dt(k(O), f, h);
            } catch {
            }
          }
        }
      return "";
    }
    var ft = Object.prototype.hasOwnProperty, un = {}, cn = P.ReactDebugCurrentFrame;
    function pt(o) {
      if (o) {
        var f = o._owner, h = dt(o.type, o._source, f ? f.type : null);
        cn.setExtraStackFrame(h);
      } else
        cn.setExtraStackFrame(null);
    }
    function Er(o, f, h, v, O) {
      {
        var k = Function.call.bind(ft);
        for (var N in o)
          if (k(o, N)) {
            var I = void 0;
            try {
              if (typeof o[N] != "function") {
                var G = Error((v || "React class") + ": " + h + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              I = o[N](f, N, v, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              I = R;
            }
            I && !(I instanceof Error) && (pt(O), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", h, N, typeof I), pt(null)), I instanceof Error && !(I.message in un) && (un[I.message] = !0, pt(O), w("Failed %s type: %s", h, I.message), pt(null));
          }
      }
    }
    var Or = Array.isArray;
    function kt(o) {
      return Or(o);
    }
    function Ar(o) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, h = f && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return h;
      }
    }
    function Tr(o) {
      try {
        return dn(o), !1;
      } catch {
        return !0;
      }
    }
    function dn(o) {
      return "" + o;
    }
    function fn(o) {
      if (Tr(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(o)), dn(o);
    }
    var Ge = P.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pn, hn, _t;
    _t = {};
    function _r(o) {
      if (ft.call(o, "ref")) {
        var f = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Pr(o) {
      if (ft.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function xr(o, f) {
      if (typeof o.ref == "string" && Ge.current && f && Ge.current.stateNode !== f) {
        var h = z(Ge.current.type);
        _t[h] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Ge.current.type), o.ref), _t[h] = !0);
      }
    }
    function Rr(o, f) {
      {
        var h = function() {
          pn || (pn = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function Dr(o, f) {
      {
        var h = function() {
          hn || (hn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var Cr = function(o, f, h, v, O, k, N) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: f,
        ref: h,
        props: N,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function Fr(o, f, h, v, O) {
      {
        var k, N = {}, I = null, G = null;
        h !== void 0 && (fn(h), I = "" + h), Pr(f) && (fn(f.key), I = "" + f.key), _r(f) && (G = f.ref, xr(f, O));
        for (k in f)
          ft.call(f, k) && !kr.hasOwnProperty(k) && (N[k] = f[k]);
        if (o && o.defaultProps) {
          var R = o.defaultProps;
          for (k in R)
            N[k] === void 0 && (N[k] = R[k]);
        }
        if (I || G) {
          var C = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          I && Rr(N, C), G && Dr(N, C);
        }
        return Cr(o, I, G, O, v, Ge.current, N);
      }
    }
    var Pt = P.ReactCurrentOwner, mn = P.ReactDebugCurrentFrame;
    function _e(o) {
      if (o) {
        var f = o._owner, h = dt(o.type, o._source, f ? f.type : null);
        mn.setExtraStackFrame(h);
      } else
        mn.setExtraStackFrame(null);
    }
    var xt;
    xt = !1;
    function Rt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function yn() {
      {
        if (Pt.current) {
          var o = z(Pt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function jr(o) {
      {
        if (o !== void 0) {
          var f = o.fileName.replace(/^.*[\\\/]/, ""), h = o.lineNumber;
          return `

Check your code at ` + f + ":" + h + ".";
        }
        return "";
      }
    }
    var gn = {};
    function $r(o) {
      {
        var f = yn();
        if (!f) {
          var h = typeof o == "string" ? o : o.displayName || o.name;
          h && (f = `

Check the top-level render call using <` + h + ">.");
        }
        return f;
      }
    }
    function bn(o, f) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var h = $r(f);
        if (gn[h])
          return;
        gn[h] = !0;
        var v = "";
        o && o._owner && o._owner !== Pt.current && (v = " It was passed a child from " + z(o._owner.type) + "."), _e(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, v), _e(null);
      }
    }
    function vn(o, f) {
      {
        if (typeof o != "object")
          return;
        if (kt(o))
          for (var h = 0; h < o.length; h++) {
            var v = o[h];
            Rt(v) && bn(v, f);
          }
        else if (Rt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var O = x(o);
          if (typeof O == "function" && O !== o.entries)
            for (var k = O.call(o), N; !(N = k.next()).done; )
              Rt(N.value) && bn(N.value, f);
        }
      }
    }
    function Mr(o) {
      {
        var f = o.type;
        if (f == null || typeof f == "string")
          return;
        var h;
        if (typeof f == "function")
          h = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          h = f.propTypes;
        else
          return;
        if (h) {
          var v = z(f);
          Er(h, o.props, "prop", v, o);
        } else if (f.PropTypes !== void 0 && !xt) {
          xt = !0;
          var O = z(f);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(o) {
      {
        for (var f = Object.keys(o.props), h = 0; h < f.length; h++) {
          var v = f[h];
          if (v !== "children" && v !== "key") {
            _e(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), _e(null);
            break;
          }
        }
        o.ref !== null && (_e(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    function Sn(o, f, h, v, O, k) {
      {
        var N = Ue(o);
        if (!N) {
          var I = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = jr(O);
          G ? I += G : I += yn();
          var R;
          o === null ? R = "null" : kt(o) ? R = "array" : o !== void 0 && o.$$typeof === t ? (R = "<" + (z(o.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : R = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, I);
        }
        var C = Fr(o, f, h, O, k);
        if (C == null)
          return C;
        if (N) {
          var H = f.children;
          if (H !== void 0)
            if (v)
              if (kt(H)) {
                for (var Pe = 0; Pe < H.length; Pe++)
                  vn(H[Pe], o);
                Object.freeze && Object.freeze(H);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vn(H, o);
        }
        return o === r ? Lr(C) : Mr(C), C;
      }
    }
    function Vr(o, f, h) {
      return Sn(o, f, h, !0);
    }
    function Ur(o, f, h) {
      return Sn(o, f, h, !1);
    }
    var Br = Ur, qr = Vr;
    Nn.Fragment = r, Nn.jsx = Br, Nn.jsxs = qr;
  }()), Nn;
}
process.env.NODE_ENV === "production" ? Zr.exports = Ko() : Zr.exports = Xo();
var ir = Zr.exports;
const Zo = (e) => e && "connection" in e && e.connection && "endpoint" in e.connection;
var Ni = () => {
}, Te = Ni;
function He(e) {
  return {
    tag: 0,
    0: e
  };
}
function Ln(e) {
  return {
    tag: 1,
    0: e
  };
}
var es = (e) => e;
function ae(e) {
  return (t) => (n) => {
    var r = Te;
    t((i) => {
      i === 0 ? n(0) : i.tag === 0 ? (r = i[0], n(i)) : e(i[0]) ? n(i) : r(0);
    });
  };
}
function Ht(e) {
  return (t) => (n) => t((r) => {
    r === 0 || r.tag === 0 ? n(r) : n(Ln(e(r[0])));
  });
}
function Fn(e) {
  return (t) => (n) => {
    var r = [], i = Te, a = !1, s = !1;
    t((l) => {
      s || (l === 0 ? (s = !0, r.length || n(0)) : l.tag === 0 ? i = l[0] : (a = !1, function(d) {
        var c = Te;
        d((p) => {
          if (p === 0) {
            if (r.length) {
              var m = r.indexOf(c);
              m > -1 && (r = r.slice()).splice(m, 1), r.length || (s ? n(0) : a || (a = !0, i(0)));
            }
          } else
            p.tag === 0 ? (r.push(c = p[0]), c(0)) : r.length && (n(p), c(0));
        });
      }(e(l[0])), a || (a = !0, i(0))));
    }), n(He((l) => {
      if (l === 1) {
        s || (s = !0, i(1));
        for (var u = 0, d = r, c = r.length; u < c; u++)
          d[u](1);
        r.length = 0;
      } else {
        !s && !a ? (a = !0, i(0)) : a = !1;
        for (var p = 0, m = r, y = r.length; p < y; p++)
          m[p](0);
      }
    }));
  };
}
function ts(e) {
  return Fn(es)(e);
}
function Zt(e) {
  return ts(is(e));
}
function Ei(e) {
  return (t) => (n) => {
    var r = !1;
    t((i) => {
      if (!r)
        if (i === 0)
          r = !0, n(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          n(He((s) => {
            s === 1 ? (r = !0, a(1), e()) : a(s);
          }));
        } else
          n(i);
    });
  };
}
function Bt(e) {
  return (t) => (n) => {
    var r = !1;
    t((i) => {
      if (!r)
        if (i === 0)
          r = !0, n(0);
        else if (i.tag === 0) {
          var a = i[0];
          n(He((s) => {
            s === 1 && (r = !0), a(s);
          }));
        } else
          e(i[0]), n(i);
    });
  };
}
function Qi(e) {
  return (t) => (n) => t((r) => {
    r === 0 ? n(0) : r.tag === 0 ? (n(r), e()) : n(r);
  });
}
function jn(e) {
  var t = [], n = Te, r = !1;
  return (i) => {
    t.push(i), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var s = 0, l = t, u = t.length; s < u; s++)
          l[s](0);
        t.length = 0;
      } else if (a.tag === 0)
        n = a[0];
      else {
        r = !1;
        for (var d = 0, c = t, p = t.length; d < p; d++)
          c[d](a);
      }
    }), i(He((a) => {
      if (a === 1) {
        var s = t.indexOf(i);
        s > -1 && (t = t.slice()).splice(s, 1), t.length || n(1);
      } else
        r || (r = !0, n(0));
    }));
  };
}
function Ji(e) {
  return (t) => (n) => {
    var r = Te, i = Te, a = !1, s = !1, l = !1, u = !1;
    t((d) => {
      u || (d === 0 ? (u = !0, l || n(0)) : d.tag === 0 ? r = d[0] : (l && (i(1), i = Te), a ? a = !1 : (a = !0, r(0)), function(p) {
        l = !0, p((m) => {
          l && (m === 0 ? (l = !1, u ? n(0) : a || (a = !0, r(0))) : m.tag === 0 ? (s = !1, (i = m[0])(0)) : (n(m), s ? s = !1 : i(0)));
        });
      }(e(d[0]))));
    }), n(He((d) => {
      d === 1 ? (u || (u = !0, r(1)), l && (l = !1, i(1))) : (!u && !a && (a = !0, r(0)), l && !s && (s = !0, i(0)));
    }));
  };
}
function Vn(e) {
  return (t) => (n) => {
    var r = Te, i = !1, a = 0;
    t((s) => {
      i || (s === 0 ? (i = !0, n(0)) : s.tag === 0 ? e <= 0 ? (i = !0, n(0), s[0](1)) : r = s[0] : a++ < e ? (n(s), !i && a >= e && (i = !0, n(0), r(1))) : n(s));
    }), n(He((s) => {
      s === 1 && !i ? (i = !0, r(1)) : s === 0 && !i && a < e && r(0);
    }));
  };
}
function Oi(e) {
  return (t) => (n) => {
    var r = Te, i = Te, a = !1;
    t((s) => {
      a || (s === 0 ? (a = !0, i(1), n(0)) : s.tag === 0 ? (r = s[0], e((l) => {
        l === 0 || (l.tag === 0 ? (i = l[0])(0) : (a = !0, i(1), r(1), n(0)));
      })) : n(s));
    }), n(He((s) => {
      s === 1 && !a ? (a = !0, r(1), i(1)) : a || r(0);
    }));
  };
}
function Ga(e, t) {
  return (n) => (r) => {
    var i = Te, a = !1;
    n((s) => {
      a || (s === 0 ? (a = !0, r(0)) : s.tag === 0 ? (i = s[0], r(s)) : e(s[0]) ? r(s) : (a = !0, t && r(s), r(0), i(1)));
    });
  };
}
function ns(e) {
  return (t) => e()(t);
}
function za(e) {
  return (t) => {
    var n = e[Symbol.asyncIterator](), r = !1, i = !1, a = !1, s;
    t(He(async (l) => {
      if (l === 1)
        r = !0, n.return && n.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !r; )
          if ((s = await n.next()).done)
            r = !0, n.return && await n.return(), t(0);
          else
            try {
              a = !1, t(Ln(s.value));
            } catch (u) {
              if (n.throw)
                (r = !!(await n.throw(u)).done) && t(0);
              else
                throw u;
            }
        i = !1;
      }
    }));
  };
}
function rs(e) {
  return e[Symbol.asyncIterator] ? za(e) : (t) => {
    var n = e[Symbol.iterator](), r = !1, i = !1, a = !1, s;
    t(He((l) => {
      if (l === 1)
        r = !0, n.return && n.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !r; )
          if ((s = n.next()).done)
            r = !0, n.return && n.return(), t(0);
          else
            try {
              a = !1, t(Ln(s.value));
            } catch (u) {
              if (n.throw)
                (r = !!n.throw(u).done) && t(0);
              else
                throw u;
            }
        i = !1;
      }
    }));
  };
}
var is = rs;
function _n(e) {
  return (t) => {
    var n = !1;
    t(He((r) => {
      r === 1 ? n = !0 : n || (n = !0, t(Ln(e)), t(0));
    }));
  };
}
function Ai(e) {
  return (t) => {
    var n = !1, r = e({
      next(i) {
        n || t(Ln(i));
      },
      complete() {
        n || (n = !0, t(0));
      }
    });
    t(He((i) => {
      i === 1 && !n && (n = !0, r());
    }));
  };
}
function Yi() {
  var e, t;
  return {
    source: jn(Ai((n) => (e = n.next, t = n.complete, Ni))),
    next(n) {
      e && e(n);
    },
    complete() {
      t && t();
    }
  };
}
function Hi(e) {
  return Ai((t) => (e.then((n) => {
    Promise.resolve(n).then(() => {
      t.next(n), t.complete();
    });
  }), Ni));
}
function qt(e) {
  return (t) => {
    var n = Te, r = !1;
    return t((i) => {
      i === 0 ? r = !0 : i.tag === 0 ? (n = i[0])(0) : r || (e(i[0]), n(0));
    }), {
      unsubscribe() {
        r || (r = !0, n(1));
      }
    };
  };
}
function as(e) {
  qt((t) => {
  })(e);
}
var Gr = {
  done: !0
}, os = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], n = !1, r = Te, i;
    return e((a) => {
      n || (a === 0 ? (i && (i = i(Gr)), n = !0) : a.tag === 0 ? (r = a[0])(0) : i ? i = i({
        value: a[0],
        done: !1
      }) : t.push(a[0]));
    }), {
      async next() {
        return n && !t.length ? Gr : (!n && t.length <= 1 && r(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((a) => i = a));
      },
      async return() {
        return n || (i = r(1)), n = !0, Gr;
      }
    };
  }
});
function pr(e) {
  return new Promise((t) => {
    var n = Te, r;
    e((i) => {
      i === 0 ? Promise.resolve(r).then(t) : i.tag === 0 ? (n = i[0])(0) : (r = i[0], n(0));
    });
  });
}
var Ti = (...e) => {
  for (var t = e[0], n = 1, r = e.length; n < r; n++)
    t = e[n](t);
  return t;
}, Yt = {
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
let ei = class extends Error {
  constructor(t, n, r, i, a, s, l) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), n && (this.nodes = Array.isArray(n) ? n : [n]), r && (this.source = r), i && (this.positions = i), s && (this.originalError = s);
    var u = l;
    if (!u && s) {
      var d = s.extensions;
      d && typeof d == "object" && (u = d);
    }
    this.extensions = u || {};
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
};
var K, F;
function oe(e) {
  return new ei(`Syntax Error: Unexpected token at ${F} in ${e}`);
}
function De(e) {
  if (e.lastIndex = F, e.test(K))
    return K.slice(F, F = e.lastIndex);
}
var zn = / +(?=[^\s])/y;
function ss(e) {
  for (var t = e.split(`
`), n = "", r = 0, i = 0, a = t.length - 1, s = 0; s < t.length; s++)
    zn.lastIndex = 0, zn.test(t[s]) && (s && (!r || zn.lastIndex < r) && (r = zn.lastIndex), i = i || s, a = s);
  for (var l = i; l <= a; l++)
    l !== i && (n += `
`), n += t[l].slice(r).replace(/\\"""/g, '"""');
  return n;
}
function $() {
  for (var e = 0 | K.charCodeAt(F++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | K.charCodeAt(F++))
    if (e === 35)
      for (; (e = K.charCodeAt(F++)) !== 10 && e !== 13; )
        ;
  F--;
}
var Wa = /[_A-Za-z]\w*/y;
function lt() {
  var e;
  if (e = De(Wa))
    return {
      kind: "Name",
      value: e
    };
}
var ls = /(?:null|true|false)/y, Qa = /\$[_A-Za-z]\w*/y, us = /-?\d+/y, cs = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, ds = /\\/g, fs = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, ps = /"(?:"|[^\r\n]*?[^\\]")/y;
function ar(e) {
  var t, n;
  if (n = De(ls))
    t = n === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: n === "true"
    };
  else if (!e && (n = De(Qa)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: n.slice(1)
      }
    };
  else if (n = De(us)) {
    var r = n;
    (n = De(cs)) ? t = {
      kind: "FloatValue",
      value: r + n
    } : t = {
      kind: "IntValue",
      value: r
    };
  } else if (n = De(Wa))
    t = {
      kind: "EnumValue",
      value: n
    };
  else if (n = De(fs))
    t = {
      kind: "StringValue",
      value: ss(n.slice(3, -3)),
      block: !0
    };
  else if (n = De(ps))
    t = {
      kind: "StringValue",
      value: ds.test(n) ? JSON.parse(n) : n.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var s;
    if (K.charCodeAt(F) === 91) {
      F++, $();
      for (var l = []; s = ar(a); )
        l.push(s);
      if (K.charCodeAt(F++) !== 93)
        throw oe("ListValue");
      return $(), {
        kind: "ListValue",
        values: l
      };
    }
  }(e) || function(a) {
    if (K.charCodeAt(F) === 123) {
      F++, $();
      for (var s = [], l; l = lt(); ) {
        if ($(), K.charCodeAt(F++) !== 58)
          throw oe("ObjectField");
        $();
        var u = ar(a);
        if (!u)
          throw oe("ObjectField");
        s.push({
          kind: "ObjectField",
          name: l,
          value: u
        });
      }
      if (K.charCodeAt(F++) !== 125)
        throw oe("ObjectValue");
      return $(), {
        kind: "ObjectValue",
        fields: s
      };
    }
  }(e))
    return t;
  return $(), t;
}
function Ja(e) {
  var t = [];
  if ($(), K.charCodeAt(F) === 40) {
    F++, $();
    for (var n; n = lt(); ) {
      if ($(), K.charCodeAt(F++) !== 58)
        throw oe("Argument");
      $();
      var r = ar(e);
      if (!r)
        throw oe("Argument");
      t.push({
        kind: "Argument",
        name: n,
        value: r
      });
    }
    if (!t.length || K.charCodeAt(F++) !== 41)
      throw oe("Argument");
    $();
  }
  return t;
}
function en(e) {
  var t = [];
  for ($(); K.charCodeAt(F) === 64; ) {
    F++;
    var n = lt();
    if (!n)
      throw oe("Directive");
    $(), t.push({
      kind: "Directive",
      name: n,
      arguments: Ja(e)
    });
  }
  return t;
}
function hs() {
  var e = lt();
  if (e) {
    $();
    var t;
    if (K.charCodeAt(F) === 58) {
      if (F++, $(), t = e, !(e = lt()))
        throw oe("Field");
      $();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: Ja(!1),
      directives: en(!1),
      selectionSet: hr()
    };
  }
}
function Ya() {
  var e;
  if ($(), K.charCodeAt(F) === 91) {
    F++, $();
    var t = Ya();
    if (!t || K.charCodeAt(F++) !== 93)
      throw oe("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = lt())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw oe("NamedType");
  return $(), K.charCodeAt(F) === 33 ? (F++, $(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var ms = /on/y;
function Ha() {
  if (De(ms)) {
    $();
    var e = lt();
    if (!e)
      throw oe("NamedType");
    return $(), {
      kind: "NamedType",
      name: e
    };
  }
}
var ys = /\.\.\./y;
function gs() {
  if (De(ys)) {
    $();
    var e = F, t;
    if ((t = lt()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: en(!1)
      };
    F = e;
    var n = Ha(), r = en(!1), i = hr();
    if (!i)
      throw oe("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: n,
      directives: r,
      selectionSet: i
    };
  }
}
function hr() {
  var e;
  if ($(), K.charCodeAt(F) === 123) {
    F++, $();
    for (var t = []; e = gs() || hs(); )
      t.push(e);
    if (!t.length || K.charCodeAt(F++) !== 125)
      throw oe("SelectionSet");
    return $(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var bs = /fragment/y;
function vs() {
  if (De(bs)) {
    $();
    var e = lt();
    if (!e)
      throw oe("FragmentDefinition");
    $();
    var t = Ha();
    if (!t)
      throw oe("FragmentDefinition");
    var n = en(!1), r = hr();
    if (!r)
      throw oe("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: n,
      selectionSet: r
    };
  }
}
var Ss = /(?:query|mutation|subscription)/y;
function Is() {
  var e, t, n = [], r = [];
  (e = De(Ss)) && ($(), t = lt(), n = function() {
    var s, l = [];
    if ($(), K.charCodeAt(F) === 40) {
      for (F++, $(); s = De(Qa); ) {
        if ($(), K.charCodeAt(F++) !== 58)
          throw oe("VariableDefinition");
        var u = Ya(), d = void 0;
        if (K.charCodeAt(F) === 61 && (F++, $(), !(d = ar(!0))))
          throw oe("VariableDefinition");
        $(), l.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: s.slice(1)
            }
          },
          type: u,
          defaultValue: d,
          directives: en(!0)
        });
      }
      if (K.charCodeAt(F++) !== 41)
        throw oe("VariableDefinition");
      $();
    }
    return l;
  }(), r = en(!1));
  var i = hr();
  if (i)
    return {
      kind: "OperationDefinition",
      operation: e || "query",
      name: t,
      variableDefinitions: n,
      directives: r,
      selectionSet: i
    };
}
function ws(e, t) {
  return K = typeof e.body == "string" ? e.body : e, F = 0, function() {
    var r;
    $();
    for (var i = []; r = vs() || Is(); )
      i.push(r);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function Ns(e) {
  return JSON.stringify(e);
}
function Es(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var $e = (e) => !(!e || !e.length), ge = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !$e(e.variableDefinitions) && !$e(e.directives))
      return ge.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), $e(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(ge.VariableDefinition).join(", ") + ")"), $e(e.directives) && (t += " " + e.directives.map(ge.Directive).join(" ")), t + " " + ge.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = ge.Variable(e.variable) + ": " + Me(e.type);
    return e.defaultValue && (t += " = " + Me(e.defaultValue)), $e(e.directives) && (t += " " + e.directives.map(ge.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if ($e(e.arguments)) {
      var n = e.arguments.map(ge.Argument), r = t + "(" + n.join(", ") + ")";
      t = r.length > 80 ? t + `(
  ` + n.join(`
`).replace(/\n/g, `
  `) + `
)` : r;
    }
    return $e(e.directives) && (t += " " + e.directives.map(ge.Directive).join(" ")), e.selectionSet ? t + " " + ge.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Es(e.value) : Ns(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(Me).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(ge.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + Me(e.value),
  Document: (e) => $e(e.definitions) ? e.definitions.map(Me).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(Me).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + Me(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return $e(e.directives) && (t += " " + e.directives.map(ge.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), $e(e.directives) && (t += " " + e.directives.map(ge.Directive).join(" ")), t + " " + Me(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, $e(e.directives) && (t += " " + e.directives.map(ge.Directive).join(" ")), t + " " + Me(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return $e(e.arguments) && (t += "(" + e.arguments.map(ge.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + Me(e.type) + "]",
  NonNullType: (e) => Me(e.type) + "!"
};
function Me(e) {
  return ge[e.kind] ? ge[e.kind](e) : "";
}
var Os = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new ei(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new ei(e);
class Un extends Error {
  constructor(t) {
    var n = (t.graphQLErrors || []).map(Os), r = ((i, a) => {
      var s = "";
      if (i)
        return `[Network] ${i.message}`;
      if (a)
        for (var l of a)
          s && (s += `
`), s += `[GraphQL] ${l.message}`;
      return s;
    })(t.networkError, n);
    super(r), this.name = "CombinedError", this.message = r, this.graphQLErrors = n, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var ti = (e, t) => {
  for (var n = 0 | (t || 5381), r = 0, i = 0 | e.length; r < i; r++)
    n = (n << 5) + n + e.charCodeAt(r);
  return n;
}, Ut = /* @__PURE__ */ new Set(), Ki = /* @__PURE__ */ new WeakMap(), Qt = (e) => {
  if (e === null || Ut.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Qt(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var n of e)
      t.length > 1 && (t += ","), t += Qt(n) || "null";
    return t += "]";
  } else if (sr !== tn && e instanceof sr || lr !== tn && e instanceof lr)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var i = Ki.get(e) || Math.random().toString(36).slice(2);
    return Ki.set(e, i), Qt({
      __key: i
    });
  }
  Ut.add(e);
  var a = "{";
  for (var s of r) {
    var l = Qt(e[s]);
    l && (a.length > 1 && (a += ","), a += Qt(s) + ":" + l);
  }
  return Ut.delete(e), a += "}";
}, ni = (e, t, n) => {
  if (!(n == null || typeof n != "object" || n.toJSON || Ut.has(n)))
    if (Array.isArray(n))
      for (var r = 0, i = n.length; r < i; r++)
        ni(e, `${t}.${r}`, n[r]);
    else if (n instanceof sr || n instanceof lr)
      e.set(t, n);
    else {
      Ut.add(n);
      for (var a of Object.keys(n))
        ni(e, `${t}.${a}`, n[a]);
    }
}, or = (e) => (Ut.clear(), Qt(e));
class tn {
}
var sr = typeof File < "u" ? File : tn, lr = typeof Blob < "u" ? Blob : tn, As = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Ts = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, ks = (e, t) => t % 2 == 0 ? e.replace(Ts, `
`) : e, Xi = (e) => e.split(As).map(ks).join("").trim(), Zi = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map(), ki = (e) => {
  var t;
  return typeof e == "string" ? t = Xi(e) : e.loc && Zn.get(e.__key) === e ? t = e.loc.source.body : (t = Zi.get(e) || Xi(Me(e)), Zi.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, ea = (e) => {
  var t = ti(ki(e));
  if (e.definitions) {
    var n = Xa(e);
    n && (t = ti(`
# ${n}`, t));
  }
  return t;
}, Ka = (e) => {
  var t, n;
  return typeof e == "string" ? (t = ea(e), n = Zn.get(t) || ws(e)) : (t = e.__key || ea(e), n = Zn.get(t) || e), n.loc || ki(n), n.__key = t, Zn.set(t, n), n;
}, Pn = (e, t, n) => {
  var r = t || {}, i = Ka(e), a = or(r), s = i.__key;
  return a !== "{}" && (s = ti(a, s)), {
    key: s,
    query: i,
    variables: r,
    extensions: n
  };
}, Xa = (e) => {
  for (var t of e.definitions)
    if (t.kind === Yt.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, _s = (e) => {
  for (var t of e.definitions)
    if (t.kind === Yt.OPERATION_DEFINITION)
      return t.operation;
}, ri = (e, t, n) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var r = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new Un({
      graphQLErrors: t.errors,
      response: n
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? r : t.hasNext,
    stale: !1
  };
}, ii = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var n of Object.keys(t))
      e[n] = ii(e[n], t[n]);
    return e;
  }
  return t;
}, ai = (e, t, n) => {
  var r = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, s = t.incremental;
  "path" in t && (s = [t]);
  var l = {
    data: e.data
  };
  if (s)
    for (var u of s) {
      Array.isArray(u.errors) && r.push(...u.errors), u.extensions && (Object.assign(a, u.extensions), i = !0);
      for (var d = "data", c = l, p = 0, m = u.path.length; p < m; d = u.path[p++])
        c = c[d] = Array.isArray(c[d]) ? [...c[d]] : {
          ...c[d]
        };
      if (u.items)
        for (var y = +d >= 0 ? d : 0, g = 0, E = u.items.length; g < E; g++)
          c[y + g] = ii(c[y + g], u.items[g]);
      else
        u.data !== void 0 && (c[d] = ii(c[d], u.data));
    }
  else
    l.data = t.data || e.data, r = t.errors || r;
  return {
    operation: e.operation,
    data: l.data,
    error: r.length ? new Un({
      graphQLErrors: r,
      response: n
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, Za = (e, t, n) => ({
  operation: e,
  data: void 0,
  error: new Un({
    networkError: t,
    response: n
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function eo(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : ki(e.query),
    operationName: Xa(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var Ps = (e, t) => {
  var n = e.kind === "query" && e.context.preferGetMethod;
  if (!n || !t)
    return e.context.url;
  var r = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && r.searchParams.set(i, typeof a == "object" ? or(a) : a);
  }
  var s = r.toString();
  return s.length > 2047 && n !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s;
}, xs = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var n = or(t), r = ((l) => {
      var u = /* @__PURE__ */ new Map();
      return (sr !== tn || lr !== tn) && (Ut.clear(), ni(u, "variables", l)), u;
    })(t.variables);
    if (r.size) {
      var i = new FormData();
      i.append("operations", n), i.append("map", or({
        ...[...r.keys()].map((l) => [l])
      }));
      var a = 0;
      for (var s of r.values())
        i.append("" + a++, s);
      return i;
    }
    return n;
  }
}, Rs = (e, t) => {
  var n = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, r = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (r.headers)
    for (var i in r.headers)
      n[i.toLowerCase()] = r.headers[i];
  var a = xs(e, t);
  return typeof a == "string" && !n["content-type"] && (n["content-type"] = "application/json"), {
    ...r,
    method: a ? "POST" : "GET",
    body: a,
    headers: n
  };
}, Ds = typeof TextDecoder < "u" ? new TextDecoder() : null, Cs = /boundary="?([^=";]+)"?/i, Fs = /data: ?([^\n]+)/, ta = (e) => e.constructor.name === "Buffer" ? e.toString() : Ds.decode(e);
async function* na(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield ta(t);
  else {
    var n = e.body.getReader(), r;
    try {
      for (; !(r = await n.read()).done; )
        yield ta(r.value);
    } finally {
      n.cancel();
    }
  }
}
async function* ra(e, t) {
  var n = "", r;
  for await (var i of e)
    for (n += i; (r = n.indexOf(t)) > -1; )
      yield n.slice(0, r), n = n.slice(r + t.length);
}
async function* js(e, t, n) {
  var r = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var s = (a = await (e.context.fetch || fetch)(t, n)).headers.get("Content-Type") || "", l;
    if (/multipart\/mixed/i.test(s))
      l = async function* (c, p) {
        var m = c.match(Cs), y = "--" + (m ? m[1] : "-"), g = !0, E;
        for await (var x of ra(na(p), `\r
` + y)) {
          if (g) {
            g = !1;
            var P = x.indexOf(y);
            if (P > -1)
              x = x.slice(P + y.length);
            else
              continue;
          }
          try {
            yield E = JSON.parse(x.slice(x.indexOf(`\r
\r
`) + 4));
          } catch (w) {
            if (!E)
              throw w;
          }
          if (E && E.hasNext === !1)
            break;
        }
        E && E.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(s, a);
    else if (/text\/event-stream/i.test(s))
      l = async function* (c) {
        var p;
        for await (var m of ra(na(c), `

`)) {
          var y = m.match(Fs);
          if (y) {
            var g = y[1];
            try {
              yield p = JSON.parse(g);
            } catch (E) {
              if (!p)
                throw E;
            }
            if (p && p.hasNext === !1)
              break;
          }
        }
        p && p.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(a);
    else if (!/text\//i.test(s))
      l = async function* (c) {
        yield JSON.parse(await c.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var u of l)
      i = i ? ai(i, u, a) : ri(e, u, a), r = !1, yield i, r = !0;
    i || (yield i = ri(e, {}, a));
  } catch (d) {
    if (!r)
      throw d;
    yield Za(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : d, a);
  }
}
function $s(e, t, n) {
  var r;
  return typeof AbortController < "u" && (n.signal = (r = new AbortController()).signal), Ei(() => {
    r && r.abort();
  })(ae((i) => !!i)(za(js(e, t, n))));
}
var oi = (e, t) => {
  if (Array.isArray(e))
    for (var n of e)
      oi(n, t);
  else if (typeof e == "object" && e !== null)
    for (var r in e)
      r === "__typename" && typeof e[r] == "string" ? t.add(e[r]) : oi(e[r], t);
  return t;
}, si = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var n = [];
    for (var r of e.definitions) {
      var i = si(r);
      t = t || i !== r, n.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: n
      };
  } else if ("selectionSet" in e) {
    var a = [], s = e.kind === Yt.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var l of e.selectionSet.selections || []) {
        s = s || l.kind === Yt.FIELD && l.name.value === "__typename" && !l.alias;
        var u = si(l);
        t = t || u !== l, a.push(u);
      }
      if (s || (t = !0, a.push({
        kind: Yt.FIELD,
        name: {
          kind: Yt.NAME,
          value: "__typename"
        }
      })), t)
        return {
          ...e,
          selectionSet: {
            ...e.selectionSet,
            selections: a
          }
        };
    }
  }
  return e;
}, ia = /* @__PURE__ */ new Map(), Ms = (e) => {
  var t = Ka(e), n = ia.get(t.__key);
  return n || (ia.set(t.__key, n = si(t)), Object.defineProperty(n, "__key", {
    value: t.__key,
    enumerable: !1
  })), n;
}, li = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => li(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var n = {};
    for (var r in e)
      r === "__typename" ? Object.defineProperty(n, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : n[r] = li(e[r]);
    return n;
  } else
    return e;
};
function aa(e) {
  var t = (n) => e(n);
  return t.toPromise = () => pr(Vn(1)(ae((n) => !n.stale && !n.hasNext)(t))), t.then = (n, r) => t.toPromise().then(n, r), t.subscribe = (n) => qt(n)(t), t;
}
function nn(e, t, n) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...n
    } : n || t.context
  };
}
var oa = (e, t) => nn(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), Ls = () => {
}, zr = ({ kind: e }) => e !== "mutation" && e !== "query", Vs = ({ forward: e, client: t, dispatchDebug: n }) => {
  var r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (l) => {
    var u = nn(l.kind, l);
    return u.query = Ms(l.query), u;
  }, s = (l) => l.kind === "query" && l.context.requestPolicy !== "network-only" && (l.context.requestPolicy === "cache-only" || r.has(l.key));
  return (l) => {
    var u = Ht((c) => {
      var p = r.get(c.key);
      process.env.NODE_ENV !== "production" && n({
        operation: c,
        ...p ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var m = p;
      return process.env.NODE_ENV !== "production" && (m = {
        ...m,
        operation: process.env.NODE_ENV !== "production" ? oa(c, {
          cacheOutcome: p ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (m.stale = !0, sa(t, c)), m;
    })(ae((c) => !zr(c) && s(c))(l)), d = Bt((c) => {
      var { operation: p } = c;
      if (p) {
        var m = p.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (m = ((S) => [...oi(S, /* @__PURE__ */ new Set())])(c.data).concat(m)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var y = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && n({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${m}`,
            operation: p,
            data: {
              typenames: m,
              response: c
            },
            source: "cacheExchange"
          });
          for (var g = 0; g < m.length; g++) {
            var E = m[g], x = i.get(E);
            x || i.set(E, x = /* @__PURE__ */ new Set());
            for (var P of x.values())
              y.add(P);
            x.clear();
          }
          for (var w of y.values())
            r.has(w) && (p = r.get(w).operation, r.delete(w), sa(t, p));
        } else if (p.kind === "query" && c.data) {
          r.set(p.key, c);
          for (var D = 0; D < m.length; D++) {
            var b = m[D], T = i.get(b);
            T || i.set(b, T = /* @__PURE__ */ new Set()), T.add(p.key);
          }
        }
      }
    })(e(ae((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(Ht((c) => process.env.NODE_ENV !== "production" ? oa(c, {
      cacheOutcome: "miss"
    }) : c)(Zt([Ht(a)(ae((c) => !zr(c) && !s(c))(l)), ae((c) => zr(c))(l)])))));
    return Zt([u, d]);
  };
}, sa = (e, t) => e.reexecuteOperation(nn(t.kind, t, {
  requestPolicy: "network-only"
})), Wr = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: n }) => ({ client: r, forward: i }) => {
  var a = n || ((s) => s.kind === "subscription" || !!t && (s.kind === "query" || s.kind === "mutation"));
  return (s) => {
    var l = Fn((d) => {
      var { key: c } = d, p = ae((m) => m.kind === "teardown" && m.key === c)(s);
      return Oi(p)(((m) => {
        var y = e(eo(m), m);
        return Ai(({ next: g, complete: E }) => {
          var x = !1, P, w;
          return Promise.resolve().then(() => {
            x || (P = y.subscribe({
              next(D) {
                g(w = w ? ai(w, D) : ri(m, D));
              },
              error(D) {
                g(Za(m, D));
              },
              complete() {
                x || (x = !0, m.kind === "subscription" && r.reexecuteOperation(nn("teardown", m, m.context)), w && w.hasNext && g(ai(w, {
                  hasNext: !1
                })), E());
              }
            }));
          }), () => {
            x = !0, P && P.unsubscribe();
          };
        });
      })(d));
    })(ae((d) => d.kind !== "teardown" && a(d))(s)), u = i(ae((d) => d.kind === "teardown" || !a(d))(s));
    return Zt([l, u]);
  };
}, Us = ({ forward: e, dispatchDebug: t }) => (n) => {
  var r = Fn((a) => {
    var s = eo(a), l = Ps(a, s), u = Rs(a, s);
    process.env.NODE_ENV !== "production" && t({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: a,
      data: {
        url: l,
        fetchOptions: u
      },
      source: "fetchExchange"
    });
    var d = Oi(ae((c) => c.kind === "teardown" && c.key === a.key)(n))($s(a, l, u));
    return process.env.NODE_ENV !== "production" ? Bt((c) => {
      var p = c.data ? void 0 : c.error;
      process.env.NODE_ENV !== "production" && t({
        type: p ? "fetchError" : "fetchSuccess",
        message: `A ${p ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: l,
          fetchOptions: u,
          value: p || c
        },
        source: "fetchExchange"
      });
    })(d) : d;
  })(ae((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(n)), i = e(ae((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(n));
  return Zt([r, i]);
}, Bs = (e) => ({ client: t, forward: n, dispatchDebug: r }) => e.reduceRight((i, a) => {
  var s = !1;
  return a({
    client: t,
    forward(l) {
      if (process.env.NODE_ENV !== "production") {
        if (s)
          throw new Error("forward() must only be called once in each Exchange.");
        s = !0;
      }
      return jn(i(jn(l)));
    },
    dispatchDebug(l) {
      process.env.NODE_ENV !== "production" && r({
        timestamp: Date.now(),
        source: a.name,
        ...l
      });
    }
  });
}, n), to = ({ onOperation: e, onResult: t, onError: n }) => ({ forward: r }) => (i) => Fn((a) => {
  n && a.error && n(a.error, a.operation);
  var s = t && t(a) || a;
  return "then" in s ? Hi(s) : _n(s);
})(r(Fn((a) => {
  var s = e && e(a) || a;
  return "then" in s ? Hi(s) : _n(s);
})(i))), qs = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = Bt((n) => {
  if (n.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var r = `No exchange has handled operations of kind "${n.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: r,
      operation: n,
      source: "fallbackExchange"
    }), console.warn(r);
  }
})(t)), ae((n) => !1)(t)), la = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var n = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), s = [], l = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, u = Yi();
  function d(b) {
    (b.kind === "mutation" || b.kind === "teardown" || !a.has(b.key)) && (b.kind === "teardown" ? a.delete(b.key) : b.kind !== "mutation" && a.add(b.key), u.next(b));
  }
  var c = !1;
  function p(b) {
    if (b && d(b), !c) {
      for (c = !0; c && (b = s.shift()); )
        d(b);
      c = !1;
    }
  }
  var m = (b) => {
    var T = Oi(ae((S) => S.kind === "teardown" && S.key === b.key)(u.source))(ae((S) => S.operation.kind === b.kind && S.operation.key === b.key && (!S.operation.context._instance || S.operation.context._instance === b.context._instance))(D));
    return b.kind !== "query" ? T = Ga((S) => !!S.hasNext, !0)(T) : T = Ji((S) => {
      var V = _n(S);
      return S.stale || S.hasNext ? V : Zt([V, Ht(() => (S.stale = !0, S))(Vn(1)(ae((Ce) => Ce.key === b.key)(u.source)))]);
    })(T), b.kind !== "mutation" ? T = Ei(() => {
      a.delete(b.key), r.delete(b.key), i.delete(b.key), c = !1;
      for (var S = s.length - 1; S >= 0; S--)
        s[S].key === b.key && s.splice(S, 1);
      d(nn("teardown", b, b.context));
    })(Bt((S) => {
      if (S.stale) {
        for (var V of s)
          if (V.key === S.operation.key) {
            a.delete(V.key);
            break;
          }
      } else
        S.hasNext || a.delete(b.key);
      r.set(b.key, S);
    })(T)) : T = Qi(() => {
      d(b);
    })(T), t.maskTypename && (T = Ht((S) => ({
      ...S,
      data: li(S.data, !0)
    }))(T)), jn(T);
  }, y = this instanceof e ? this : Object.create(e.prototype), g = Object.assign(y, {
    suspense: !!t.suspense,
    operations$: u.source,
    reexecuteOperation(b) {
      b.kind === "teardown" ? p(b) : (b.kind === "mutation" || i.has(b.key)) && (s.push(b), Promise.resolve().then(p));
    },
    createRequestOperation(b, T, S) {
      S || (S = {});
      var V;
      if (process.env.NODE_ENV !== "production" && b !== "teardown" && (V = _s(T.query)) !== b)
        throw new Error(`Expected operation of type "${b}" but found "${V}"`);
      return nn(b, T, {
        _instance: b === "mutation" ? n = n + 1 | 0 : void 0,
        ...l,
        ...S,
        requestPolicy: S.requestPolicy || l.requestPolicy,
        suspense: S.suspense || S.suspense !== !1 && g.suspense
      });
    },
    executeRequestOperation(b) {
      return b.kind === "mutation" ? aa(m(b)) : aa(ns(() => {
        var T = i.get(b.key);
        T || i.set(b.key, T = m(b)), T = Qi(() => {
          p(b);
        })(T);
        var S = r.get(b.key);
        return b.kind === "query" && S && (S.stale || S.hasNext) ? Ji(_n)(Zt([T, ae((V) => V === r.get(b.key))(_n(S))])) : T;
      }));
    },
    executeQuery(b, T) {
      var S = g.createRequestOperation("query", b, T);
      return g.executeRequestOperation(S);
    },
    executeSubscription(b, T) {
      var S = g.createRequestOperation("subscription", b, T);
      return g.executeRequestOperation(S);
    },
    executeMutation(b, T) {
      var S = g.createRequestOperation("mutation", b, T);
      return g.executeRequestOperation(S);
    },
    readQuery(b, T, S) {
      var V = null;
      return qt((Ce) => {
        V = Ce;
      })(g.query(b, T, S)).unsubscribe(), V;
    },
    query: (b, T, S) => g.executeQuery(Pn(b, T), S),
    subscription: (b, T, S) => g.executeSubscription(Pn(b, T), S),
    mutation: (b, T, S) => g.executeMutation(Pn(b, T), S)
  }), E = Ls;
  if (process.env.NODE_ENV !== "production") {
    var { next: x, source: P } = Yi();
    g.subscribeToDebugTarget = (b) => qt(b)(P), E = x;
  }
  var w = Bs(t.exchanges), D = jn(w({
    client: g,
    dispatchDebug: E,
    forward: qs({
      dispatchDebug: E
    })
  })(u.source));
  return as(D), g;
};
const Gs = {
  DateTime(e) {
    return new Date(e);
  }
};
class zs {
  constructor(t) {
    Object.defineProperty(this, "plan", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    });
  }
  apply(t) {
    return Array.isArray(t) ? t.map((n) => this.hydrateObject(n)) : this.hydrateObject(t);
  }
  hydrateObject(t) {
    const n = { ...t };
    for (const [r, i] of Object.entries(this.plan)) {
      const a = n[r];
      a != null && (n[r] = Gs[i](a));
    }
    return n;
  }
}
function Ne(e) {
  if (typeof e != "object")
    return e;
  var t, n, r = Object.prototype.toString.call(e);
  if (r === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      n = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = Ne(e[t]));
    } else {
      n = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(n, t, {
          value: Ne(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : n[t] = Ne(e[t]);
    }
    return n;
  }
  if (r === "[object Array]") {
    for (t = e.length, n = Array(t); t--; )
      n[t] = Ne(e[t]);
    return n;
  }
  return r === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    n.add(Ne(i));
  }), n) : r === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    n.set(Ne(a), Ne(i));
  }), n) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : r === "[object DataView]" ? new e.constructor(Ne(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var be;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(be || (be = {}));
class Ws {
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
    }), this.__gadget.instantiatedFields = Ne(t), this.__gadget.persistedFields = Ne(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((r) => this.__gadget.fieldKeysTracker[r] = !0));
    const n = {
      get: (r, i) => {
        if (i in this)
          return this[i];
        if (i in r)
          return r[i];
      },
      set: (r, i, a) => (this.trackKey(i), r[i.toString()] = a, !0)
    };
    return new Proxy(this.__gadget.fields, n);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const n = t.toString();
    this.__gadget.fieldKeysTracker[n] || (this.__gadget.fieldKeysTracker[n] = !0, this.__gadget.fieldKeys.push(n));
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = be.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const n = t == be.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((r) => !Wn(n[r], this.__gadget.fields[r]));
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
  setField(t, n) {
    return this.trackKey(t), this.__gadget.fields[t] = n;
  }
  changes(t, n = be.SinceLoaded) {
    const i = (typeof t == "string" ? n : t || n) == be.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = i[t], s = this.__gadget.fields[t], l = !Wn(s, a);
      return l ? { changed: l, current: s, previous: a } : { changed: l };
    } else {
      const a = {};
      for (let s = 0; s < this.__gadget.fieldKeys.length; s++) {
        const l = this.__gadget.fieldKeys[s];
        Wn(i[l], this.__gadget.fields[l]) || (a[l] = { current: this.__gadget.fields[l], previous: i[l] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = be.SinceLoaded) {
    const n = t == be.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, r = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      Wn(n[a], this.__gadget.fields[a]) || (r[a] = this.__gadget.fields[a]);
    }
    return r;
  }
  changed(t, n = be.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, n).changed : this.hasChanges(t === void 0 ? n : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = be.SinceLoaded) {
    t == be.SinceLoaded ? this.__gadget.instantiatedFields = Ne(this.__gadget.fields) : t == be.SinceLastPersisted && (this.__gadget.persistedFields = Ne(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = be.SinceLoaded) {
    let n;
    t == be.SinceLoaded ? n = Object.keys(this.__gadget.instantiatedFields) : n = Object.keys(this.__gadget.persistedFields);
    for (const r of this.__gadget.fieldKeys)
      n.includes(r) || delete this.__gadget.fields[r];
    t == be.SinceLoaded ? Object.assign(this.__gadget.fields, Ne(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, Ne(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return fi({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const no = Ws;
class ro extends Error {
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
class ui extends Error {
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
class mr extends Error {
  constructor(t, n) {
    super(t.startsWith("GGT_") ? t : `${n}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
}
class ua extends Error {
  constructor(t) {
    let n;
    di(t) ? n = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : n = "GraphQL websocket closed unexpectedly by the server", super(n), Object.defineProperty(this, "code", {
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
class Qs extends Error {
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
class Js extends Error {
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
class Ys extends Error {
  constructor(t, n, r, i) {
    const a = n.slice(0, 3), s = n.length > 3 ? `, and ${n.length - 3} more error${n.length > 4 ? "s" : ""} need${n.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${r ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: l, message: u }) => `${l} ${u}`).join(", ")}${s}.`), Object.defineProperty(this, "code", {
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
    }), this.validationErrors = n, this.modelApiIdentifier = r, this.record = i;
  }
}
class io extends Error {
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
class _i extends Error {
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
class Hs extends Error {
  constructor(t, n) {
    super(t.length > 1 ? "Multiple errors occurred" : t[0].message), Object.defineProperty(this, "errors", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "results", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ErrorGroup"
    });
  }
  get code() {
    return `GGT_ERROR_GROUP(${this.errors.slice(0, 10).map((t) => {
      var n;
      return (n = t.code) !== null && n !== void 0 ? n : "GGT_UNKNOWN";
    }).join(",")})`;
  }
  /** @private */
  get statusCode() {
    return Math.max(...this.errors.map((t) => {
      var n;
      return (n = t.statusCode) !== null && n !== void 0 ? n : 500;
    }));
  }
}
function ci(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const rn = (e, t) => {
  const n = t.length;
  let r = 0;
  for (; e != null && r < n; )
    e = e[t[r++]];
  return r && r == n ? e : void 0;
}, di = (e) => (e == null ? void 0 : e.type) == "close", Ye = (e, t) => typeof e != "string" ? "" : Gt(e, t), ca = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Gt = (e, t = !0) => {
  let n = "" + e;
  return t ? n = n.replace(/^[a-z\d]*/, (r) => ca(r)) : n = n.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (r) => r.toLowerCase()), n = n.replace(/(?:_|(\/))([a-z\d]*)/gi, (r, i, a, s, l) => (i || (i = ""), "" + i + ca(a))), n;
}, Ks = (e) => `${Gt(e)}Sort`, Xs = (e) => `${Gt(e)}Filter`, Zs = (e, t, n) => new io(`More than one record found for ${e}.${t} = ${n}. Please confirm your unique validation is not reporting an error.`), el = (e, t) => {
  if (e.fetching)
    return;
  const n = rn(e.data, t);
  if (n === void 0)
    return new ro(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (n === null)
    return new _i(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, st = (e, t, n = !1) => {
  var r;
  if (e.error)
    throw e.error instanceof Un && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((l) => "[Network] " + l.message).join(`
`)), e.error;
  const i = rn(e.data, t), a = rn(i, ["edges"]), s = a ?? i;
  if (i === void 0)
    throw new ro(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || n && Array.isArray(s) && s.length === 0)
    throw new _i(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, xn = (e, t) => {
  var n;
  if (e.error)
    throw e.error instanceof Un && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const r = rn(e.data, t);
  return r ?? null;
}, Pi = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Ys(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new io(e.message) : new mr(e.message, e.code);
}, It = (e, t) => {
  const n = st(e, t);
  return ao(n);
}, ao = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? Pi(t) : new mr("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, oo = (e) => {
  var t, n, r, i;
  if (!((n = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || n === void 0) && n.hydrations)
    return new zs((i = (r = e.data) === null || r === void 0 ? void 0 : r.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, Rn = (e, t) => {
  const n = oo(e);
  return n && (t = n.apply(t)), new no(t);
}, xi = (e, t) => {
  const n = oo(e);
  return n && (t = n.apply(t)), t == null ? void 0 : t.map((r) => new no(r));
}, $n = (e, t) => {
  const n = t.edges.map((r) => r.node);
  return xi(e, n);
}, fi = (e) => {
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
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          t[n] = r === void 0 ? null : fi(r);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const n of Object.keys(e)) {
          const r = fi(e[n]);
          r !== void 0 && (t[n] = r);
        }
        return t;
      }
    }
  }
}, Qr = "gstk", da = (e) => {
  try {
    const t = window[e];
    return t.setItem(Qr, Qr), t.removeItem(Qr), !0;
  } catch {
    return !1;
  }
}, fa = Object.prototype.toString, pa = Object.getPrototypeOf, ha = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, An = (e, t, n) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (n.indexOf(e) > -1 && n.indexOf(t) > -1)
    return !0;
  const r = fa.call(e), i = fa.call(t);
  let a, s, l;
  if (n.push(e, t), r != i || (a = ha(e), s = ha(t), a.length != s.length || a.some(function(u) {
    return !An(e[u], t[u], n);
  })))
    return !1;
  switch (r.slice(8, -1)) {
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
      a = e.entries(), s = t.entries();
      do
        if (l = a.next(), !An(l.value, s.next().value, n))
          return !1;
      while (!l.done);
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
      for (l = 0; l < e.length; l++)
        if (!(!(l in e) && !(l in t)) && (l in e != l in t || !An(e[l], t[l], n)))
          return !1;
      return !0;
    case "Object":
      return An(pa(e), pa(t), n);
    default:
      return !1;
  }
}, Wn = (e, t) => An(e, t, []), so = (e, t) => {
  var n, r;
  if (t ?? (t = {}), !("hasAmbiguousIdentifier" in e) && !("acceptsModelInput" in e))
    return t;
  if (e.hasAmbiguousIdentifier && Object.keys(t).some((a) => {
    var s;
    return a !== "id" && !(!((s = e.paramOnlyVariables) === null || s === void 0) && s.includes(a)) && a !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let i;
  if ((n = e.acceptsModelInput) !== null && n !== void 0 ? n : e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in t && typeof t[e.modelApiIdentifier] == "object" && t[e.modelApiIdentifier] != null)
      i = t;
    else {
      i = {
        [e.modelApiIdentifier]: {}
      };
      for (const [a, s] of Object.entries(t))
        !((r = e.paramOnlyVariables) === null || r === void 0) && r.includes(a) ? i[a] = s : a == "id" ? i.id = s : i[e.modelApiIdentifier][a] = s;
    }
  else
    i = t;
  return i;
}, tl = (e, t = {}) => {
  var n;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((n = Array.isArray(t) ? t : t.inputs) !== null && n !== void 0 ? n : []).map((i) => so(e, i))
  };
}, nl = (e, t) => {
  const n = {};
  for (const [r, i] of Object.entries(e))
    n[r] = { ...i, value: t[r] };
  return n;
};
class an extends Array {
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
  static boot(t, n, r) {
    const i = new an();
    return i.push(...n), i.modelManager = t, i.pagination = r, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new mr("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new ui("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const { first: n, last: r, before: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      after: this.pagination.pageInfo.endCursor,
      first: n || r
    });
  }
  async previousPage() {
    var t;
    if (!this.hasPreviousPage)
      throw new ui("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: n, last: r, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: r || n
    });
  }
}
const pi = (e) => Object.entries(e).flatMap(([t, n]) => {
  if (typeof n == "boolean")
    return n ? t : !1;
  if (n instanceof Di) {
    let r = "";
    const i = Object.entries(n.args).filter(([a, s]) => s != null).map(([a, s]) => {
      var l;
      return `${a}: ${s instanceof Ci ? `$${(l = s.name) !== null && l !== void 0 ? l : a}` : JSON.stringify(s)}`;
    });
    return i.length > 0 && (r = `(${i.join(", ")})`), n.subselection ? [`${t}${r} {`, ...pi(n.subselection), "}"] : `${t}${r}`;
  } else
    return [`${t} {`, ...pi(n), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Ri = (e) => {
  const t = {}, n = (r) => {
    let i = 1;
    if (t[r]) {
      for (; t[`${r}${i}`]; )
        i++;
      return `${r}${i}`;
    }
    return r;
  };
  return Object.entries(e).forEach(([r, i]) => {
    i instanceof Di ? Object.entries(i.args).forEach(([a, s]) => {
      var l;
      s instanceof Ci && (t[(l = s.name) !== null && l !== void 0 ? l : n(a)] = s);
    }) : typeof i == "object" && i !== null && Object.assign(t, Ri(i));
  }), t;
}, rl = (e) => {
  const t = Ri(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([r, i]) => `$${r}: ${i.type}`).join(", ")})`;
};
class Di {
  constructor(t, n) {
    Object.defineProperty(this, "args", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "subselection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
}
class Ci {
  constructor(t, n, r) {
    Object.defineProperty(this, "type", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }), Object.defineProperty(this, "value", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
  present() {
    return this.value != null;
  }
}
const Et = (e, t) => new Di(e, t), ie = (e) => new Ci(e.type + (e.required ? "!" : ""), e.name, e.value), il = (e) => {
  var t;
  const n = rl(e), r = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${n}${r} {
${pi(e.fields).join(`
`)}
}`;
}, Ot = (e) => {
  const t = Ri(e.fields);
  return {
    query: il(e),
    variables: Object.entries(t ?? {}).reduce((n, [r, i]) => (typeof i.value < "u" && (n[r] = i.value), n), {})
  };
}, Fi = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), ji = (e, t = !1) => {
  const n = { ...e };
  return t && (n.__typename = !0), n;
}, yr = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, al = (e, t, n, r, i) => {
  const a = {};
  return typeof t < "u" && (a.id = ie({ type: "GadgetID!", value: t })), Ot({
    type: "query",
    name: e,
    fields: {
      [e]: Et(a, ji((i == null ? void 0 : i.select) || n, !0)),
      ...Fi(r)
    },
    directives: yr(i)
  });
}, ol = (e, t, n, r, i, a) => $i(e, r, i, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: n
    }
  }
}), $i = (e, t, n, r) => Ot({
  type: "query",
  name: e,
  fields: {
    [e]: Et({
      after: ie({ value: r == null ? void 0 : r.after, type: "String" }),
      first: ie({ value: r == null ? void 0 : r.first, type: "Int" }),
      before: ie({ value: r == null ? void 0 : r.before, type: "String" }),
      last: ie({ value: r == null ? void 0 : r.last, type: "Int" }),
      sort: r != null && r.sort ? ie({ value: r.sort, type: `[${Ks(n)}!]` }) : void 0,
      filter: r != null && r.filter ? ie({ value: r.filter, type: `[${Xs(n)}!]` }) : void 0,
      search: r != null && r.search ? ie({ value: r.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: ji((r == null ? void 0 : r.select) || t, !0)
      }
    }),
    ...Fi(n)
  },
  directives: yr(r)
}), lo = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Mi = (e) => Object.fromEntries(Object.entries(e).map(([t, n]) => [t, ie(n)])), uo = (e, t, n) => ({
  success: !0,
  errors: lo,
  [e]: t && !n ? ji(t, !0) : !1,
  result: !!n
}), sl = (e, t, n, r, i, a, s, l, u) => {
  const d = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: Et(Mi(i), uo(r, d, u))
  };
  s && (c = {
    [s]: c
  });
  const p = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...Fi(n)
    },
    directives: yr(a)
  };
  return Ot(p);
}, ll = (e, t, n) => {
  let r = {}, i = t.operationName;
  switch (t.type) {
    case "action": {
      const s = (n == null ? void 0 : n.select) || t.defaultSelection;
      t.isBulk && (i = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), r = {
        [`... on ${`${Gt(i)}Result`}`]: uo(t.modelApiIdentifier, s, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      r = {
        [`... on ${Gt(i)}Result`]: co()
      };
  }
  const a = {
    type: "subscription",
    name: Ye(i) + "BackgroundResult",
    fields: {
      backgroundAction: Et({ id: ie({ value: e, type: "String!" }) }, {
        id: !0,
        outcome: !0,
        result: {
          ...r
        }
      })
    }
  };
  return Ot(a);
}, co = () => ({
  success: !0,
  errors: lo,
  result: !0
}), ul = (e, t, n, r) => {
  let i = {
    [e]: Et(Mi(t), co())
  };
  return n && (i = {
    [n]: i
  }), Ot({
    type: "mutation",
    name: e,
    fields: i,
    directives: yr(r)
  });
}, cl = (e) => {
  if (!e)
    return null;
  const t = { ...e };
  typeof t.retries == "number" && (t.retries = {
    retryCount: t.retries
  }), typeof t.queue == "string" && (t.queue = {
    name: t.queue
  }), t.startAt instanceof Date && (t.startAt = t.startAt.toISOString());
  for (const n of Object.keys(t))
    ["id", "retries", "queue", "priority", "startAt"].includes(n) || delete t[n];
  return t;
}, dl = (e, t, n, r, i) => {
  let a = {
    background: {
      [e]: Et({
        ...Mi(t),
        backgroundOptions: ie({
          type: "EnqueueBackgroundActionOptions",
          value: cl(r)
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
  return n && (a = {
    [n]: a
  }), Ot({
    type: "mutation",
    name: "enqueue" + Gt(e),
    fields: a
  });
}, fl = (e, t) => ({
  [Symbol.asyncIterator]() {
    const n = e[Symbol.asyncIterator]();
    return {
      async next() {
        const { done: r, value: i } = await n.next();
        return {
          done: r,
          value: typeof i < "u" ? t(i) : void 0
        };
      },
      async return(r) {
        var i;
        return await ((i = n.return) === null || i === void 0 ? void 0 : i.call(n, r));
      }
    };
  }
});
function Li(e, t, n) {
  return n != null && n.live ? fl(os(e), t) : Ti(e, ae((i) => !i.stale && !i.hasNext), Vn(1), pr).then((i) => t(i));
}
const ma = (e, t, n, r, i, a, s = !0) => {
  const l = al(t, n, r, i, a), u = e.connection.currentClient.query(l.query, l.variables);
  return Li(u, (d) => {
    const p = (s ? st : xn)(d, [t]);
    return Rn(d, p);
  }, a);
}, pl = (e, t, n, r, i, a, s, l = !0) => {
  const u = ol(t, n, r, i, a, s), d = e.connection.currentClient.query(u.query, u.variables);
  return Li(d, (c) => {
    const p = st(c, [t]), m = $n(c, p);
    if (m.length > 1)
      throw Zs(a, n, r);
    const y = m[0];
    if (!y && l)
      throw new _i(`${a} record with ${n}=${r} not found`);
    return y ?? null;
  }, s);
}, ya = (e, t, n, r, i, a) => {
  const s = $i(t, n, r, i), l = e.connection.currentClient.query(s.query, s.variables);
  return Li(l, (u) => {
    let d;
    a === !1 ? d = xn(u, [t]) : d = st(u, [t], a);
    const c = $n(u, d);
    return an.boot(e, c, { options: i, pageInfo: d.pageInfo });
  }, i);
}, ga = async (e, t, n, r, i, a, s, l, u, d) => {
  const c = sl(t, n, r, i, s, l, u, a, d), p = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), m = u ? [u, t] : [t];
  if (a) {
    const y = rn(p.data, m), g = y[i] && n ? xi(p, y[i]) : void 0;
    if (y.errors) {
      const E = y.errors.map((x) => Pi(x));
      throw new Hs(E, g);
    }
    return g;
  } else {
    const y = It(p, m);
    return fo(n, p, y, i, d);
  }
}, fo = (e, t, n, r, i) => {
  if (e != null)
    return i ? n.result : Rn(t, n[r]);
}, ba = async (e, t, n, r) => {
  const i = ul(t, n, r), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return It(a, r ? [r, t] : [t]).result;
};
async function hl(e, t, n, r = {}) {
  const i = t.isBulk ? tl(t, n) : so(t, n), a = nl(t.variables, i), s = dl(t.operationName, a, t.namespace, r, t.isBulk), l = await e.currentClient.mutation(s.query, s.variables, r).toPromise(), u = ["background", t.operationName];
  t.namespace && u.unshift(t.namespace);
  try {
    const d = It(l, u);
    return t.isBulk ? d.backgroundActions.map((c) => new er(e, t, c.id)) : new er(e, t, d.backgroundAction.id);
  } catch (d) {
    if ("code" in d && d.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (r != null && r.id) && r.onDuplicateID == "ignore")
      return new er(e, t, r.id);
    throw d;
  }
}
const ml = async (e, t, n, r) => {
  const i = ll(t, n, r), a = e.currentClient.subscription(i.query, i.variables), s = await Ti(a, ae((u) => {
    var d, c;
    return u.error || ((c = (d = u.data) === null || d === void 0 ? void 0 : d.backgroundAction) === null || c === void 0 ? void 0 : c.outcome);
  }), Vn(1), pr), l = st(s, ["backgroundAction"]);
  switch (ao(l.result), n.type) {
    case "action": {
      l.result = fo(n.defaultSelection, s.data, l.result, n.isBulk ? n.modelApiIdentifier : n.modelSelectionField, n.hasReturnType);
      break;
    }
    case "globalAction": {
      l.result = l.result.result;
      break;
    }
  }
  return l;
};
class er {
  constructor(t, n, r) {
    Object.defineProperty(this, "connection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "action", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }), Object.defineProperty(this, "id", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
  /** Wait for this background action to complete and return the result. */
  async result(t) {
    return (await ml(this.connection, this.id, this.action, t)).result;
  }
}
var Dn;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(Dn || (Dn = {}));
function Z(e, t) {
  if (!!!e)
    throw new Error(t);
}
function Mn(e) {
  return typeof e == "object" && e !== null;
}
function po(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const yl = /\r\n|[\n\r]/g;
function hi(e, t) {
  let n = 0, r = 1;
  for (const i of e.body.matchAll(yl)) {
    if (typeof i.index == "number" || po(!1), i.index >= t)
      break;
    n = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: t + 1 - n
  };
}
function gl(e) {
  return ho(
    e.source,
    hi(e.source, e.start)
  );
}
function ho(e, t) {
  const n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, l = t.line === 1 ? n : 0, u = t.column + l, d = `${e.name}:${s}:${u}
`, c = r.split(/\r\n|[\n\r]/g), p = c[i];
  if (p.length > 120) {
    const m = Math.floor(u / 80), y = u % 80, g = [];
    for (let E = 0; E < p.length; E += 80)
      g.push(p.slice(E, E + 80));
    return d + va([
      [`${s} |`, g[0]],
      ...g.slice(1, m + 1).map((E) => ["|", E]),
      ["|", "^".padStart(y)],
      ["|", g[m + 1]]
    ]);
  }
  return d + va([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, c[i - 1]],
    [`${s} |`, p],
    ["|", "^".padStart(u)],
    [`${s + 1} |`, c[i + 1]]
  ]);
}
function va(e) {
  const t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function bl(e) {
  const t = e[0];
  return t == null || "kind" in t || "length" in t ? {
    nodes: t,
    source: e[1],
    positions: e[2],
    path: e[3],
    originalError: e[4],
    extensions: e[5]
  } : t;
}
class L extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(t, ...n) {
    var r, i, a;
    const { nodes: s, source: l, positions: u, path: d, originalError: c, extensions: p } = bl(n);
    super(t), this.name = "GraphQLError", this.path = d ?? void 0, this.originalError = c ?? void 0, this.nodes = Sa(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const m = Sa(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((g) => g.loc).filter((g) => g != null)
    );
    this.source = l ?? (m == null || (i = m[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? (m == null ? void 0 : m.map((g) => g.start)), this.locations = u && l ? u.map((g) => hi(l, g)) : m == null ? void 0 : m.map((g) => hi(g.source, g.start));
    const y = Mn(
      c == null ? void 0 : c.extensions
    ) ? c == null ? void 0 : c.extensions : void 0;
    this.extensions = (a = p ?? y) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), c != null && c.stack ? Object.defineProperty(this, "stack", {
      value: c.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, L) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let t = this.message;
    if (this.nodes)
      for (const n of this.nodes)
        n.loc && (t += `

` + gl(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + ho(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function Sa(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const mo = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, vl = new Set(Object.keys(mo));
function Ia(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && vl.has(t);
}
var wa;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(wa || (wa = {}));
var Oe;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(Oe || (Oe = {}));
var W;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(W || (W = {}));
function Na(e) {
  return e === 9 || e === 32;
}
function Sl(e) {
  return e >= 48 && e <= 57;
}
function yo(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function Il(e) {
  return yo(e) || e === 95;
}
function wl(e) {
  return yo(e) || Sl(e) || e === 95;
}
function Nl(e, t) {
  const n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((y) => y.length === 0 || Na(y.charCodeAt(0))), s = n.endsWith('\\"""'), l = e.endsWith('"') && !s, u = e.endsWith("\\"), d = l || u, c = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || d || a || s);
  let p = "";
  const m = i && Na(e.charCodeAt(0));
  return (c && !m || a) && (p += `
`), p += n, (c || d) && (p += `
`), '"""' + p + '"""';
}
const El = 10, go = 2;
function J(e) {
  return gr(e, []);
}
function gr(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Ol(e, t);
    default:
      return String(e);
  }
}
function Ol(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (Al(e)) {
    const r = e.toJSON();
    if (r !== e)
      return typeof r == "string" ? r : gr(r, n);
  } else if (Array.isArray(e))
    return kl(e, n);
  return Tl(e, n);
}
function Al(e) {
  return typeof e.toJSON == "function";
}
function Tl(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > go ? "[" + _l(e) + "]" : "{ " + n.map(
    ([i, a]) => i + ": " + gr(a, t)
  ).join(", ") + " }";
}
function kl(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > go)
    return "[Array]";
  const n = Math.min(El, e.length), r = e.length - n, i = [];
  for (let a = 0; a < n; ++a)
    i.push(gr(e[a], t));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function _l(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const At = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  globalThis.process && globalThis.process.env.NODE_ENV === "production" ? function(t, n) {
    return t instanceof n;
  } : function(t, n) {
    if (t instanceof n)
      return !0;
    if (typeof t == "object" && t !== null) {
      var r;
      const i = n.prototype[Symbol.toStringTag], a = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in t ? t[Symbol.toStringTag] : (r = t.constructor) === null || r === void 0 ? void 0 : r.name
      );
      if (i === a) {
        const s = J(t);
        throw new Error(`Cannot use ${i} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return !1;
  }
), Pl = 5;
function xl(e, t) {
  const [n, r] = t ? [e, t] : [void 0, e];
  let i = " Did you mean ";
  n && (i += n + " ");
  const a = r.map((u) => `"${u}"`);
  switch (a.length) {
    case 0:
      return "";
    case 1:
      return i + a[0] + "?";
    case 2:
      return i + a[0] + " or " + a[1] + "?";
  }
  const s = a.slice(0, Pl), l = s.pop();
  return i + s.join(", ") + ", or " + l + "?";
}
function Ea(e) {
  return e;
}
function Vi(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    n[t(r)] = r;
  return n;
}
function Ui(e, t, n) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of e)
    r[t(i)] = n(i);
  return r;
}
function br(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of Object.keys(e))
    n[r] = t(e[r], r);
  return n;
}
function Rl(e, t) {
  let n = 0, r = 0;
  for (; n < e.length && r < t.length; ) {
    let i = e.charCodeAt(n), a = t.charCodeAt(r);
    if (Qn(i) && Qn(a)) {
      let s = 0;
      do
        ++n, s = s * 10 + i - mi, i = e.charCodeAt(n);
      while (Qn(i) && s > 0);
      let l = 0;
      do
        ++r, l = l * 10 + a - mi, a = t.charCodeAt(r);
      while (Qn(a) && l > 0);
      if (s < l)
        return -1;
      if (s > l)
        return 1;
    } else {
      if (i < a)
        return -1;
      if (i > a)
        return 1;
      ++n, ++r;
    }
  }
  return e.length - t.length;
}
const mi = 48, Dl = 57;
function Qn(e) {
  return !isNaN(e) && mi <= e && e <= Dl;
}
function Cl(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = new Fl(e), i = Math.floor(e.length * 0.4) + 1;
  for (const a of t) {
    const s = r.measure(a, i);
    s !== void 0 && (n[a] = s);
  }
  return Object.keys(n).sort((a, s) => {
    const l = n[a] - n[s];
    return l !== 0 ? l : Rl(a, s);
  });
}
class Fl {
  constructor(t) {
    this._input = t, this._inputLowerCase = t.toLowerCase(), this._inputArray = Oa(this._inputLowerCase), this._rows = [
      new Array(t.length + 1).fill(0),
      new Array(t.length + 1).fill(0),
      new Array(t.length + 1).fill(0)
    ];
  }
  measure(t, n) {
    if (this._input === t)
      return 0;
    const r = t.toLowerCase();
    if (this._inputLowerCase === r)
      return 1;
    let i = Oa(r), a = this._inputArray;
    if (i.length < a.length) {
      const c = i;
      i = a, a = c;
    }
    const s = i.length, l = a.length;
    if (s - l > n)
      return;
    const u = this._rows;
    for (let c = 0; c <= l; c++)
      u[0][c] = c;
    for (let c = 1; c <= s; c++) {
      const p = u[(c - 1) % 3], m = u[c % 3];
      let y = m[0] = c;
      for (let g = 1; g <= l; g++) {
        const E = i[c - 1] === a[g - 1] ? 0 : 1;
        let x = Math.min(
          p[g] + 1,
          // delete
          m[g - 1] + 1,
          // insert
          p[g - 1] + E
          // substitute
        );
        if (c > 1 && g > 1 && i[c - 1] === a[g - 2] && i[c - 2] === a[g - 1]) {
          const P = u[(c - 2) % 3][g - 2];
          x = Math.min(x, P + 1);
        }
        x < y && (y = x), m[g] = x;
      }
      if (y > n)
        return;
    }
    const d = u[s % 3][l];
    return d <= n ? d : void 0;
  }
}
function Oa(e) {
  const t = e.length, n = new Array(t);
  for (let r = 0; r < t; ++r)
    n[r] = e.charCodeAt(r);
  return n;
}
function Ke(e) {
  if (e == null)
    return /* @__PURE__ */ Object.create(null);
  if (Object.getPrototypeOf(e) === null)
    return e;
  const t = /* @__PURE__ */ Object.create(null);
  for (const [n, r] of Object.entries(e))
    t[n] = r;
  return t;
}
function jl(e) {
  return `"${e.replace($l, Ml)}"`;
}
const $l = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Ml(e) {
  return Ll[e.charCodeAt(0)];
}
const Ll = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
], Vl = Object.freeze({});
function Ul(e, t, n = mo) {
  const r = /* @__PURE__ */ new Map();
  for (const P of Object.values(W))
    r.set(P, Bl(t, P));
  let i, a = Array.isArray(e), s = [e], l = -1, u = [], d = e, c, p;
  const m = [], y = [];
  do {
    l++;
    const P = l === s.length, w = P && u.length !== 0;
    if (P) {
      if (c = y.length === 0 ? void 0 : m[m.length - 1], d = p, p = y.pop(), w)
        if (a) {
          d = d.slice();
          let b = 0;
          for (const [T, S] of u) {
            const V = T - b;
            S === null ? (d.splice(V, 1), b++) : d[V] = S;
          }
        } else {
          d = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(d)
          );
          for (const [b, T] of u)
            d[b] = T;
        }
      l = i.index, s = i.keys, u = i.edits, a = i.inArray, i = i.prev;
    } else if (p) {
      if (c = a ? l : s[l], d = p[c], d == null)
        continue;
      m.push(c);
    }
    let D;
    if (!Array.isArray(d)) {
      var g, E;
      Ia(d) || Z(!1, `Invalid AST Node: ${J(d)}.`);
      const b = P ? (g = r.get(d.kind)) === null || g === void 0 ? void 0 : g.leave : (E = r.get(d.kind)) === null || E === void 0 ? void 0 : E.enter;
      if (D = b == null ? void 0 : b.call(t, d, c, p, m, y), D === Vl)
        break;
      if (D === !1) {
        if (!P) {
          m.pop();
          continue;
        }
      } else if (D !== void 0 && (u.push([c, D]), !P))
        if (Ia(D))
          d = D;
        else {
          m.pop();
          continue;
        }
    }
    if (D === void 0 && w && u.push([c, d]), P)
      m.pop();
    else {
      var x;
      i = {
        inArray: a,
        index: l,
        keys: s,
        edits: u,
        prev: i
      }, a = Array.isArray(d), s = a ? d : (x = n[d.kind]) !== null && x !== void 0 ? x : [], l = -1, u = [], p && y.push(p), p = d;
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function Bl(e, t) {
  const n = e[t];
  return typeof n == "object" ? n : typeof n == "function" ? {
    enter: n,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function Nt(e) {
  return Ul(e, Gl);
}
const ql = 80, Gl = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => A(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = M("(", A(e.variableDefinitions, ", "), ")"), n = A(
        [
          e.operation,
          A([e.name, t]),
          A(e.directives, " ")
        ],
        " "
      );
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + M(" = ", n) + M(" ", A(r, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => ze(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
      const a = M("", e, ": ") + t;
      let s = a + M("(", A(n, ", "), ")");
      return s.length > ql && (s = a + M(`(
`, tr(A(n, `
`)), `
)`)), A([s, A(r, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + M(" ", A(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) => A(
      [
        "...",
        M("on ", e),
        A(t, " "),
        n
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${M("(", A(n, ", "), ")")} on ${t} ${M("", A(r, " "), " ")}` + i
    )
  },
  // Value
  IntValue: {
    leave: ({ value: e }) => e
  },
  FloatValue: {
    leave: ({ value: e }) => e
  },
  StringValue: {
    leave: ({ value: e, block: t }) => t ? Nl(e) : jl(e)
  },
  BooleanValue: {
    leave: ({ value: e }) => e ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: e }) => e
  },
  ListValue: {
    leave: ({ values: e }) => "[" + A(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + A(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + M("(", A(t, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: e }) => e
  },
  ListType: {
    leave: ({ type: e }) => "[" + e + "]"
  },
  NonNullType: {
    leave: ({ type: e }) => e + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: e, directives: t, operationTypes: n }) => M("", e, `
`) + A(["schema", A(t, " "), ze(n)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) => M("", e, `
`) + A(["scalar", t, A(n, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => M("", e, `
`) + A(
      [
        "type",
        t,
        M("implements ", A(n, " & ")),
        A(r, " "),
        ze(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => M("", e, `
`) + t + (Aa(n) ? M(`(
`, tr(A(n, `
`)), `
)`) : M("(", A(n, ", "), ")")) + ": " + r + M(" ", A(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => M("", e, `
`) + A(
      [t + ": " + n, M("= ", r), A(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => M("", e, `
`) + A(
      [
        "interface",
        t,
        M("implements ", A(n, " & ")),
        A(r, " "),
        ze(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: r }) => M("", e, `
`) + A(
      ["union", t, A(n, " "), M("= ", A(r, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: r }) => M("", e, `
`) + A(["enum", t, A(n, " "), ze(r)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) => M("", e, `
`) + A([t, A(n, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: r }) => M("", e, `
`) + A(["input", t, A(n, " "), ze(r)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) => M("", e, `
`) + "directive @" + t + (Aa(n) ? M(`(
`, tr(A(n, `
`)), `
)`) : M("(", A(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + A(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => A(
      ["extend schema", A(e, " "), ze(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => A(["extend scalar", e, A(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => A(
      [
        "extend type",
        e,
        M("implements ", A(t, " & ")),
        A(n, " "),
        ze(r)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => A(
      [
        "extend interface",
        e,
        M("implements ", A(t, " & ")),
        A(n, " "),
        ze(r)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: n }) => A(
      [
        "extend union",
        e,
        A(t, " "),
        M("= ", A(n, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) => A(["extend enum", e, A(t, " "), ze(n)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) => A(["extend input", e, A(t, " "), ze(n)], " ")
  }
};
function A(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
}
function ze(e) {
  return M(`{
`, tr(A(e, `
`)), `
}`);
}
function M(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function tr(e) {
  return M("  ", e.replace(/\n/g, `
  `));
}
function Aa(e) {
  var t;
  return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function yi(e, t) {
  switch (e.kind) {
    case W.NULL:
      return null;
    case W.INT:
      return parseInt(e.value, 10);
    case W.FLOAT:
      return parseFloat(e.value);
    case W.STRING:
    case W.ENUM:
    case W.BOOLEAN:
      return e.value;
    case W.LIST:
      return e.values.map(
        (n) => yi(n, t)
      );
    case W.OBJECT:
      return Ui(
        e.fields,
        (n) => n.name.value,
        (n) => yi(n.value, t)
      );
    case W.VARIABLE:
      return t == null ? void 0 : t[e.name.value];
  }
}
function Xe(e) {
  if (e != null || Z(!1, "Must provide name."), typeof e == "string" || Z(!1, "Expected name to be a string."), e.length === 0)
    throw new L("Expected name to be a non-empty string.");
  for (let t = 1; t < e.length; ++t)
    if (!wl(e.charCodeAt(t)))
      throw new L(
        `Names must only contain [_a-zA-Z0-9] but "${e}" does not.`
      );
  if (!Il(e.charCodeAt(0)))
    throw new L(
      `Names must start with [_a-zA-Z] but "${e}" does not.`
    );
  return e;
}
function zl(e) {
  if (e === "true" || e === "false" || e === "null")
    throw new L(`Enum values cannot be named: ${e}`);
  return Xe(e);
}
function bo(e) {
  return vo(e) || Wl(e) || Ql(e) || Jl(e) || So(e) || Io(e) || wo(e) || yt(e);
}
function vo(e) {
  return At(e, on);
}
function Wl(e) {
  return At(e, Xl);
}
function Ql(e) {
  return At(e, Zl);
}
function Jl(e) {
  return At(e, eu);
}
function So(e) {
  return At(e, nu);
}
function Io(e) {
  return At(e, iu);
}
function wo(e) {
  return At(e, Hl);
}
function yt(e) {
  return At(e, vr);
}
function Yl(e) {
  return vo(e) || So(e);
}
class Hl {
  constructor(t) {
    bo(t) || Z(!1, `Expected ${J(t)} to be a GraphQL type.`), this.ofType = t;
  }
  get [Symbol.toStringTag]() {
    return "GraphQLList";
  }
  toString() {
    return "[" + String(this.ofType) + "]";
  }
  toJSON() {
    return this.toString();
  }
}
class vr {
  constructor(t) {
    Kl(t) || Z(
      !1,
      `Expected ${J(t)} to be a GraphQL nullable type.`
    ), this.ofType = t;
  }
  get [Symbol.toStringTag]() {
    return "GraphQLNonNull";
  }
  toString() {
    return String(this.ofType) + "!";
  }
  toJSON() {
    return this.toString();
  }
}
function Kl(e) {
  return bo(e) && !yt(e);
}
function No(e) {
  return typeof e == "function" ? e() : e;
}
function Eo(e) {
  return typeof e == "function" ? e() : e;
}
class on {
  constructor(t) {
    var n, r, i, a;
    const s = (n = t.parseValue) !== null && n !== void 0 ? n : Ea;
    this.name = Xe(t.name), this.description = t.description, this.specifiedByURL = t.specifiedByURL, this.serialize = (r = t.serialize) !== null && r !== void 0 ? r : Ea, this.parseValue = s, this.parseLiteral = (i = t.parseLiteral) !== null && i !== void 0 ? i : (l, u) => s(yi(l, u)), this.extensions = Ke(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (a = t.extensionASTNodes) !== null && a !== void 0 ? a : [], t.specifiedByURL == null || typeof t.specifiedByURL == "string" || Z(
      !1,
      `${this.name} must provide "specifiedByURL" as a string, but got: ${J(t.specifiedByURL)}.`
    ), t.serialize == null || typeof t.serialize == "function" || Z(
      !1,
      `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
    ), t.parseLiteral && (typeof t.parseValue == "function" && typeof t.parseLiteral == "function" || Z(
      !1,
      `${this.name} must provide both "parseValue" and "parseLiteral" functions.`
    ));
  }
  get [Symbol.toStringTag]() {
    return "GraphQLScalarType";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      specifiedByURL: this.specifiedByURL,
      serialize: this.serialize,
      parseValue: this.parseValue,
      parseLiteral: this.parseLiteral,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
class Xl {
  constructor(t) {
    var n;
    this.name = Xe(t.name), this.description = t.description, this.isTypeOf = t.isTypeOf, this.extensions = Ke(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = () => Ao(t), this._interfaces = () => Oo(t), t.isTypeOf == null || typeof t.isTypeOf == "function" || Z(
      !1,
      `${this.name} must provide "isTypeOf" as a function, but got: ${J(t.isTypeOf)}.`
    );
  }
  get [Symbol.toStringTag]() {
    return "GraphQLObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  getInterfaces() {
    return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: ko(this.getFields()),
      isTypeOf: this.isTypeOf,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
function Oo(e) {
  var t;
  const n = No(
    (t = e.interfaces) !== null && t !== void 0 ? t : []
  );
  return Array.isArray(n) || Z(
    !1,
    `${e.name} interfaces must be an Array or a function which returns an Array.`
  ), n;
}
function Ao(e) {
  const t = Eo(e.fields);
  return Kt(t) || Z(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), br(t, (n, r) => {
    var i;
    Kt(n) || Z(
      !1,
      `${e.name}.${r} field config must be an object.`
    ), n.resolve == null || typeof n.resolve == "function" || Z(
      !1,
      `${e.name}.${r} field resolver must be a function if provided, but got: ${J(n.resolve)}.`
    );
    const a = (i = n.args) !== null && i !== void 0 ? i : {};
    return Kt(a) || Z(
      !1,
      `${e.name}.${r} args must be an object with argument names as keys.`
    ), {
      name: Xe(r),
      description: n.description,
      type: n.type,
      args: To(a),
      resolve: n.resolve,
      subscribe: n.subscribe,
      deprecationReason: n.deprecationReason,
      extensions: Ke(n.extensions),
      astNode: n.astNode
    };
  });
}
function To(e) {
  return Object.entries(e).map(([t, n]) => ({
    name: Xe(t),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: Ke(n.extensions),
    astNode: n.astNode
  }));
}
function Kt(e) {
  return Mn(e) && !Array.isArray(e);
}
function ko(e) {
  return br(e, (t) => ({
    description: t.description,
    type: t.type,
    args: _o(t.args),
    resolve: t.resolve,
    subscribe: t.subscribe,
    deprecationReason: t.deprecationReason,
    extensions: t.extensions,
    astNode: t.astNode
  }));
}
function _o(e) {
  return Ui(
    e,
    (t) => t.name,
    (t) => ({
      description: t.description,
      type: t.type,
      defaultValue: t.defaultValue,
      deprecationReason: t.deprecationReason,
      extensions: t.extensions,
      astNode: t.astNode
    })
  );
}
class Zl {
  constructor(t) {
    var n;
    this.name = Xe(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = Ke(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = Ao.bind(void 0, t), this._interfaces = Oo.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || Z(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${J(t.resolveType)}.`
    );
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInterfaceType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  getInterfaces() {
    return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: ko(this.getFields()),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
class eu {
  constructor(t) {
    var n;
    this.name = Xe(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = Ke(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._types = tu.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || Z(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${J(t.resolveType)}.`
    );
  }
  get [Symbol.toStringTag]() {
    return "GraphQLUnionType";
  }
  getTypes() {
    return typeof this._types == "function" && (this._types = this._types()), this._types;
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      types: this.getTypes(),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
function tu(e) {
  const t = No(e.types);
  return Array.isArray(t) || Z(
    !1,
    `Must provide Array of types or a function which returns such an array for Union ${e.name}.`
  ), t;
}
class nu {
  /* <T> */
  constructor(t) {
    var n;
    this.name = Xe(t.name), this.description = t.description, this.extensions = Ke(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._values = ru(this.name, t.values), this._valueLookup = new Map(
      this._values.map((r) => [r.value, r])
    ), this._nameLookup = Vi(this._values, (r) => r.name);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLEnumType";
  }
  getValues() {
    return this._values;
  }
  getValue(t) {
    return this._nameLookup[t];
  }
  serialize(t) {
    const n = this._valueLookup.get(t);
    if (n === void 0)
      throw new L(
        `Enum "${this.name}" cannot represent value: ${J(t)}`
      );
    return n.name;
  }
  parseValue(t) {
    if (typeof t != "string") {
      const r = J(t);
      throw new L(
        `Enum "${this.name}" cannot represent non-string value: ${r}.` + Jn(this, r)
      );
    }
    const n = this.getValue(t);
    if (n == null)
      throw new L(
        `Value "${t}" does not exist in "${this.name}" enum.` + Jn(this, t)
      );
    return n.value;
  }
  parseLiteral(t, n) {
    if (t.kind !== W.ENUM) {
      const i = Nt(t);
      throw new L(
        `Enum "${this.name}" cannot represent non-enum value: ${i}.` + Jn(this, i),
        {
          nodes: t
        }
      );
    }
    const r = this.getValue(t.value);
    if (r == null) {
      const i = Nt(t);
      throw new L(
        `Value "${i}" does not exist in "${this.name}" enum.` + Jn(this, i),
        {
          nodes: t
        }
      );
    }
    return r.value;
  }
  toConfig() {
    const t = Ui(
      this.getValues(),
      (n) => n.name,
      (n) => ({
        description: n.description,
        value: n.value,
        deprecationReason: n.deprecationReason,
        extensions: n.extensions,
        astNode: n.astNode
      })
    );
    return {
      name: this.name,
      description: this.description,
      values: t,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
function Jn(e, t) {
  const n = e.getValues().map((i) => i.name), r = Cl(t, n);
  return xl("the enum value", r);
}
function ru(e, t) {
  return Kt(t) || Z(
    !1,
    `${e} values must be an object with value names as keys.`
  ), Object.entries(t).map(([n, r]) => (Kt(r) || Z(
    !1,
    `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${J(r)}.`
  ), {
    name: zl(n),
    description: r.description,
    value: r.value !== void 0 ? r.value : n,
    deprecationReason: r.deprecationReason,
    extensions: Ke(r.extensions),
    astNode: r.astNode
  }));
}
class iu {
  constructor(t) {
    var n;
    this.name = Xe(t.name), this.description = t.description, this.extensions = Ke(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = au.bind(void 0, t);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const t = br(this.getFields(), (n) => ({
      description: n.description,
      type: n.type,
      defaultValue: n.defaultValue,
      deprecationReason: n.deprecationReason,
      extensions: n.extensions,
      astNode: n.astNode
    }));
    return {
      name: this.name,
      description: this.description,
      fields: t,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
function au(e) {
  const t = Eo(e.fields);
  return Kt(t) || Z(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), br(t, (n, r) => (!("resolve" in n) || Z(
    !1,
    `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`
  ), {
    name: Xe(r),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: Ke(n.extensions),
    astNode: n.astNode
  }));
}
const Jr = 2147483647, Yr = -2147483648, ou = new on({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(e) {
    const t = Bn(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n))
      throw new L(
        `Int cannot represent non-integer value: ${J(t)}`
      );
    if (n > Jr || n < Yr)
      throw new L(
        "Int cannot represent non 32-bit signed integer value: " + J(t)
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isInteger(e))
      throw new L(
        `Int cannot represent non-integer value: ${J(e)}`
      );
    if (e > Jr || e < Yr)
      throw new L(
        `Int cannot represent non 32-bit signed integer value: ${e}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== W.INT)
      throw new L(
        `Int cannot represent non-integer value: ${Nt(e)}`,
        {
          nodes: e
        }
      );
    const t = parseInt(e.value, 10);
    if (t > Jr || t < Yr)
      throw new L(
        `Int cannot represent non 32-bit signed integer value: ${e.value}`,
        {
          nodes: e
        }
      );
    return t;
  }
});
new on({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(e) {
    const t = Bn(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n))
      throw new L(
        `Float cannot represent non numeric value: ${J(t)}`
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isFinite(e))
      throw new L(
        `Float cannot represent non numeric value: ${J(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== W.FLOAT && e.kind !== W.INT)
      throw new L(
        `Float cannot represent non numeric value: ${Nt(e)}`,
        e
      );
    return parseFloat(e.value);
  }
});
const Po = new on({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(e) {
    const t = Bn(e);
    if (typeof t == "string")
      return t;
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "number" && Number.isFinite(t))
      return t.toString();
    throw new L(
      `String cannot represent value: ${J(e)}`
    );
  },
  parseValue(e) {
    if (typeof e != "string")
      throw new L(
        `String cannot represent a non string value: ${J(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== W.STRING)
      throw new L(
        `String cannot represent a non string value: ${Nt(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
}), Bi = new on({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(e) {
    const t = Bn(e);
    if (typeof t == "boolean")
      return t;
    if (Number.isFinite(t))
      return t !== 0;
    throw new L(
      `Boolean cannot represent a non boolean value: ${J(t)}`
    );
  },
  parseValue(e) {
    if (typeof e != "boolean")
      throw new L(
        `Boolean cannot represent a non boolean value: ${J(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== W.BOOLEAN)
      throw new L(
        `Boolean cannot represent a non boolean value: ${Nt(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
});
new on({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(e) {
    const t = Bn(e);
    if (typeof t == "string")
      return t;
    if (Number.isInteger(t))
      return String(t);
    throw new L(
      `ID cannot represent value: ${J(e)}`
    );
  },
  parseValue(e) {
    if (typeof e == "string")
      return e;
    if (typeof e == "number" && Number.isInteger(e))
      return e.toString();
    throw new L(`ID cannot represent value: ${J(e)}`);
  },
  parseLiteral(e) {
    if (e.kind !== W.STRING && e.kind !== W.INT)
      throw new L(
        "ID cannot represent a non-string and non-integer value: " + Nt(e),
        {
          nodes: e
        }
      );
    return e.value;
  }
});
function Bn(e) {
  if (Mn(e)) {
    if (typeof e.valueOf == "function") {
      const t = e.valueOf();
      if (!Mn(t))
        return t;
    }
    if (typeof e.toJSON == "function")
      return e.toJSON();
  }
  return e;
}
class qn {
  constructor(t) {
    var n, r;
    this.name = Xe(t.name), this.description = t.description, this.locations = t.locations, this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1, this.extensions = Ke(t.extensions), this.astNode = t.astNode, Array.isArray(t.locations) || Z(!1, `@${t.name} locations must be an Array.`);
    const i = (r = t.args) !== null && r !== void 0 ? r : {};
    Mn(i) && !Array.isArray(i) || Z(
      !1,
      `@${t.name} args must be an object with argument names as keys.`
    ), this.args = To(i);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: _o(this.args),
      isRepeatable: this.isRepeatable,
      extensions: this.extensions,
      astNode: this.astNode
    };
  }
  toString() {
    return "@" + this.name;
  }
  toJSON() {
    return this.toString();
  }
}
new qn({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    Oe.FIELD,
    Oe.FRAGMENT_SPREAD,
    Oe.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new vr(Bi),
      description: "Included when true."
    }
  }
});
new qn({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    Oe.FIELD,
    Oe.FRAGMENT_SPREAD,
    Oe.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new vr(Bi),
      description: "Skipped when true."
    }
  }
});
const su = "No longer supported";
new qn({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    Oe.FIELD_DEFINITION,
    Oe.ARGUMENT_DEFINITION,
    Oe.INPUT_FIELD_DEFINITION,
    Oe.ENUM_VALUE
  ],
  args: {
    reason: {
      type: Po,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: su
    }
  }
});
new qn({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [Oe.SCALAR],
  args: {
    url: {
      type: new vr(Po),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
});
function Tn(e, t, n) {
  if (e) {
    if (e.kind === W.VARIABLE) {
      const r = e.name.value;
      if (n == null || n[r] === void 0)
        return;
      const i = n[r];
      return i === null && yt(t) ? void 0 : i;
    }
    if (yt(t))
      return e.kind === W.NULL ? void 0 : Tn(e, t.ofType, n);
    if (e.kind === W.NULL)
      return null;
    if (wo(t)) {
      const r = t.ofType;
      if (e.kind === W.LIST) {
        const a = [];
        for (const s of e.values)
          if (Ta(s, n)) {
            if (yt(r))
              return;
            a.push(null);
          } else {
            const l = Tn(s, r, n);
            if (l === void 0)
              return;
            a.push(l);
          }
        return a;
      }
      const i = Tn(e, r, n);
      return i === void 0 ? void 0 : [i];
    }
    if (Io(t)) {
      if (e.kind !== W.OBJECT)
        return;
      const r = /* @__PURE__ */ Object.create(null), i = Vi(e.fields, (a) => a.name.value);
      for (const a of Object.values(t.getFields())) {
        const s = i[a.name];
        if (!s || Ta(s.value, n)) {
          if (a.defaultValue !== void 0)
            r[a.name] = a.defaultValue;
          else if (yt(a.type))
            return;
          continue;
        }
        const l = Tn(s.value, a.type, n);
        if (l === void 0)
          return;
        r[a.name] = l;
      }
      return r;
    }
    if (Yl(t)) {
      let r;
      try {
        r = t.parseLiteral(e, n);
      } catch {
        return;
      }
      return r === void 0 ? void 0 : r;
    }
    po(!1, "Unexpected input type: " + J(t));
  }
}
function Ta(e, t) {
  return e.kind === W.VARIABLE && (t == null || t[e.name.value] === void 0);
}
function lu(e, t, n) {
  var r;
  const i = {}, a = (r = t.arguments) !== null && r !== void 0 ? r : [], s = Vi(a, (l) => l.name.value);
  for (const l of e.args) {
    const u = l.name, d = l.type, c = s[u];
    if (!c) {
      if (l.defaultValue !== void 0)
        i[u] = l.defaultValue;
      else if (yt(d))
        throw new L(
          `Argument "${u}" of required type "${J(d)}" was not provided.`,
          {
            nodes: t
          }
        );
      continue;
    }
    const p = c.value;
    let m = p.kind === W.NULL;
    if (p.kind === W.VARIABLE) {
      const g = p.name.value;
      if (n == null || !cu(n, g)) {
        if (l.defaultValue !== void 0)
          i[u] = l.defaultValue;
        else if (yt(d))
          throw new L(
            `Argument "${u}" of required type "${J(d)}" was provided the variable "$${g}" which was not provided a runtime value.`,
            {
              nodes: p
            }
          );
        continue;
      }
      m = n[g] == null;
    }
    if (m && yt(d))
      throw new L(
        `Argument "${u}" of non-null type "${J(d)}" must not be null.`,
        {
          nodes: p
        }
      );
    const y = Tn(p, d, n);
    if (y === void 0)
      throw new L(
        `Argument "${u}" has invalid value ${Nt(p)}.`,
        {
          nodes: p
        }
      );
    i[u] = y;
  }
  return i;
}
function uu(e, t, n) {
  var r;
  const i = (r = t.directives) === null || r === void 0 ? void 0 : r.find(
    (a) => a.name.value === e.name
  );
  if (i)
    return lu(e, i, n);
}
function cu(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
const du = new qn({
  name: "live",
  description: "Instruction for establishing a live connection that is updated once the underlying data changes.",
  locations: [Oe.QUERY],
  args: {
    if: {
      type: Bi,
      defaultValue: !0,
      description: "Whether the query should be live or not."
    },
    throttle: {
      type: ou,
      description: 'Propose a desired throttle interval ot the server in order to receive updates to at most once per "throttle" milliseconds. The server must not accept this value.'
    }
  }
}), xo = (e) => e == null, fu = (e) => {
  var t;
  if (e.kind !== "OperationDefinition" || e.operation !== "query")
    return null;
  const n = (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
  return xo(n) ? null : n;
}, pu = (e, t) => {
  var n;
  const r = uu(du, { directives: [e] }, t);
  return {
    isLive: (r == null ? void 0 : r.if) === !0,
    throttleValue: (n = r == null ? void 0 : r.throttle) !== null && n !== void 0 ? n : null
  };
}, hu = (e, t) => {
  const n = fu(e);
  return xo(n) ? !1 : pu(n, t).isLive;
};
function mu(e, t, n) {
  const r = async function* () {
    yield* e;
  }(), i = r.return.bind(r);
  if (t && (r.return = (...a) => (t(), i(...a))), n) {
    const a = r.throw.bind(r);
    r.throw = (s) => (n(s), a(s));
  }
  return r;
}
function ka() {
  const e = {};
  return e.promise = new Promise((t, n) => {
    e.resolve = t, e.reject = n;
  }), e;
}
function yu() {
  let e = {
    type: "running"
    /* running */
  }, t = ka();
  const n = [];
  function r(s) {
    e.type === "running" && (n.push(s), t.resolve(), t = ka());
  }
  const i = async function* () {
    for (; ; )
      if (n.length > 0)
        yield n.shift();
      else {
        if (e.type === "error")
          throw e.error;
        if (e.type === "finished")
          return;
        await t.promise;
      }
  }(), a = mu(i, () => {
    e.type === "running" && (e = {
      type: "finished"
      /* finished */
    }, t.resolve());
  }, (s) => {
    e.type === "running" && (e = {
      type: "error",
      error: s
    }, t.resolve());
  });
  return {
    pushValue: r,
    asyncIterableIterator: a
  };
}
const gu = (e) => {
  const { pushValue: t, asyncIterableIterator: n } = yu(), r = e({
    next: (s) => {
      t(s);
    },
    complete: () => {
      n.return();
    },
    error: (s) => {
      n.throw(s);
    }
  }), i = n.return;
  let a;
  return n.return = () => (a === void 0 && (r(), a = i()), a), n;
};
function bu(e, t) {
  return (async () => {
    try {
      for await (const r of e)
        t.next(r);
      t.complete();
    } catch (r) {
      t.error(r);
    }
  })(), () => {
    var r;
    (r = e.return) === null || r === void 0 || r.call(e);
  };
}
function we(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Mt(e) {
  return we(e) === "object";
}
function vu(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function _a(e, t) {
  return e.length < 124 ? e : t;
}
const Su = "graphql-transport-ws";
var ve;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(ve || (ve = {}));
var re;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(re || (re = {}));
function Ro(e) {
  if (!Mt(e))
    throw new Error(`Message is expected to be an object, but got ${we(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${we(e.type)}`);
  switch (e.type) {
    case re.ConnectionInit:
    case re.ConnectionAck:
    case re.Ping:
    case re.Pong: {
      if (e.payload != null && !Mt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case re.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${we(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Mt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${we(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${we(e.payload.query)}`);
      if (e.payload.variables != null && !Mt(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${we(e.payload.variables)}`);
      if (e.payload.operationName != null && we(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${we(e.payload.operationName)}`);
      if (e.payload.extensions != null && !Mt(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${we(e.payload.extensions)}`);
      break;
    }
    case re.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${we(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Mt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${we(e.payload)}`);
      break;
    }
    case re.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${we(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!vu(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case re.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${we(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Iu(e, t) {
  return Ro(typeof e == "string" ? JSON.parse(e, t) : e);
}
function En(e, t) {
  return Ro(e), JSON.stringify(e, t);
}
function wu(e) {
  const {
    url: t,
    connectionParams: n,
    lazy: r = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: s = 0,
    disablePong: l,
    connectionAckWaitTimeout: u = 0,
    retryAttempts: d = 5,
    retryWait: c = async function(U) {
      let B = 1e3;
      for (let j = 0; j < U; j++)
        B *= 2;
      await new Promise((j) => setTimeout(j, B + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: p = Yn,
    isFatalConnectionProblem: m,
    on: y,
    webSocketImpl: g,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: E = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (U) => {
        const B = Math.random() * 16 | 0;
        return (U == "x" ? B : B & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: x,
    jsonMessageReviver: P
  } = e;
  let w;
  if (g) {
    if (!Eu(g))
      throw new Error("Invalid WebSocket implementation provided");
    w = g;
  } else
    typeof WebSocket < "u" ? w = WebSocket : typeof global < "u" ? w = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (w = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!w)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const D = w, b = (() => {
    const _ = (() => {
      const B = {};
      return {
        on(j, Q) {
          return B[j] = Q, () => {
            delete B[j];
          };
        },
        emit(j) {
          var Q;
          "id" in j && ((Q = B[j.id]) === null || Q === void 0 || Q.call(B, j));
        }
      };
    })(), U = {
      connecting: y != null && y.connecting ? [y.connecting] : [],
      opened: y != null && y.opened ? [y.opened] : [],
      connected: y != null && y.connected ? [y.connected] : [],
      ping: y != null && y.ping ? [y.ping] : [],
      pong: y != null && y.pong ? [y.pong] : [],
      message: y != null && y.message ? [_.emit, y.message] : [_.emit],
      closed: y != null && y.closed ? [y.closed] : [],
      error: y != null && y.error ? [y.error] : []
    };
    return {
      onMessage: _.on,
      on(B, j) {
        const Q = U[B];
        return Q.push(j), () => {
          Q.splice(Q.indexOf(j), 1);
        };
      },
      emit(B, ...j) {
        for (const Q of [...U[B]])
          Q(...j);
      }
    };
  })();
  function T(_) {
    const U = [
      // errors are fatal and more critical than close events, throw them first
      b.on("error", (B) => {
        U.forEach((j) => j()), _(B);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      b.on("closed", (B) => {
        U.forEach((j) => j()), _(B);
      })
    ];
  }
  let S, V = 0, Ce, Fe = !1, Ue = 0, ut = !1;
  async function ee() {
    clearTimeout(Ce);
    const [_, U] = await (S ?? (S = new Promise((Q, ke) => (async () => {
      if (Fe) {
        if (await c(Ue), !V)
          return S = void 0, ke({ code: 1e3, reason: "All Subscriptions Gone" });
        Ue++;
      }
      b.emit("connecting");
      const q = new D(typeof t == "function" ? await t() : t, Su);
      let je, Be;
      function Ze() {
        isFinite(s) && s > 0 && (clearTimeout(Be), Be = setTimeout(() => {
          q.readyState === D.OPEN && (q.send(En({ type: re.Ping })), b.emit("ping", !1, void 0));
        }, s));
      }
      T((te) => {
        S = void 0, clearTimeout(je), clearTimeout(Be), ke(te), Yn(te) && te.code === 4499 && (q.close(4499, "Terminated"), q.onerror = null, q.onclose = null);
      }), q.onerror = (te) => b.emit("error", te), q.onclose = (te) => b.emit("closed", te), q.onopen = async () => {
        try {
          b.emit("opened", q);
          const te = typeof n == "function" ? await n() : n;
          if (q.readyState !== D.OPEN)
            return;
          q.send(En(te ? {
            type: re.ConnectionInit,
            payload: te
          } : {
            type: re.ConnectionInit
            // payload is completely absent if not provided
          }, x)), isFinite(u) && u > 0 && (je = setTimeout(() => {
            q.close(ve.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, u)), Ze();
        } catch (te) {
          b.emit("error", te), q.close(ve.InternalClientError, _a(te instanceof Error ? te.message : new Error(te).message, "Internal client error"));
        }
      };
      let et = !1;
      q.onmessage = ({ data: te }) => {
        try {
          const Y = Iu(te, P);
          if (b.emit("message", Y), Y.type === "ping" || Y.type === "pong") {
            b.emit(Y.type, !0, Y.payload), Y.type === "pong" ? Ze() : l || (q.send(En(Y.payload ? {
              type: re.Pong,
              payload: Y.payload
            } : {
              type: re.Pong
              // payload is completely absent if not provided
            })), b.emit("pong", !1, Y.payload));
            return;
          }
          if (et)
            return;
          if (Y.type !== re.ConnectionAck)
            throw new Error(`First message cannot be of type ${Y.type}`);
          clearTimeout(je), et = !0, b.emit("connected", q, Y.payload), Fe = !1, Ue = 0, Q([
            q,
            new Promise((gt, qe) => T(qe))
          ]);
        } catch (Y) {
          q.onmessage = null, b.emit("error", Y), q.close(ve.BadResponse, _a(Y instanceof Error ? Y.message : new Error(Y).message, "Bad response"));
        }
      };
    })())));
    _.readyState === D.CLOSING && await U;
    let B = () => {
    };
    const j = new Promise((Q) => B = Q);
    return [
      _,
      B,
      Promise.race([
        // wait for
        j.then(() => {
          if (!V) {
            const Q = () => _.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? Ce = setTimeout(() => {
              _.readyState === D.OPEN && Q();
            }, a) : Q();
          }
        }),
        // or
        U
      ])
    ];
  }
  function z(_) {
    if (Yn(_) && (Nu(_.code) || [
      ve.InternalServerError,
      ve.InternalClientError,
      ve.BadRequest,
      ve.BadResponse,
      ve.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      ve.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      ve.SubscriberAlreadyExists,
      ve.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(_.code)))
      throw _;
    if (ut)
      return !1;
    if (Yn(_) && _.code === 1e3)
      return V > 0;
    if (!d || Ue >= d || !p(_) || m != null && m(_))
      throw _;
    return Fe = !0;
  }
  return r || (async () => {
    for (V++; ; )
      try {
        const [, , _] = await ee();
        await _;
      } catch (_) {
        try {
          if (!z(_))
            return;
        } catch (U) {
          return i == null ? void 0 : i(U);
        }
      }
  })(), {
    on: b.on,
    subscribe(_, U) {
      const B = E(_);
      let j = !1, Q = !1, ke = () => {
        V--, j = !0;
      };
      return (async () => {
        for (V++; ; )
          try {
            const [q, je, Be] = await ee();
            if (j)
              return je();
            const Ze = b.onMessage(B, (et) => {
              switch (et.type) {
                case re.Next: {
                  U.next(et.payload);
                  return;
                }
                case re.Error: {
                  Q = !0, j = !0, U.error(et.payload), ke();
                  return;
                }
                case re.Complete: {
                  j = !0, ke();
                  return;
                }
              }
            });
            q.send(En({
              id: B,
              type: re.Subscribe,
              payload: _
            }, x)), ke = () => {
              !j && q.readyState === D.OPEN && q.send(En({
                id: B,
                type: re.Complete
              }, x)), V--, j = !0, je();
            }, await Be.finally(Ze);
            return;
          } catch (q) {
            if (!z(q))
              return;
          }
      })().then(() => {
        Q || U.complete();
      }).catch((q) => {
        U.error(q);
      }), () => {
        j || ke();
      };
    },
    async dispose() {
      if (ut = !0, S) {
        const [_] = await S;
        _.close(1e3, "Normal Closure");
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
function Yn(e) {
  return Mt(e) && "code" in e && "reason" in e;
}
function Nu(e) {
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
function Eu(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var Jt = null;
typeof WebSocket < "u" ? Jt = WebSocket : typeof MozWebSocket < "u" ? Jt = MozWebSocket : typeof global < "u" ? Jt = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Jt = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Jt = self.WebSocket || self.MozWebSocket);
const Ou = Jt;
class Do extends Error {
}
class Au {
  constructor(t, n) {
    Object.defineProperty(this, "client", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "subscriptionClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
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
    throw st(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Do("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    st(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    st(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Tu {
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
  setItem(t, n) {
    this.values[t] = n;
  }
}
const ku = (e) => {
  const t = [...e.definitions].reverse().find((n) => n.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((r) => r.kind == "Field").name.value;
}, Pa = to({
  onOperation: (e) => {
    var t, n;
    (t = (n = e.context).operationName) !== null && t !== void 0 || (n.operationName = ku(e.query) || "unknown");
  }
}), _u = to({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, n] = e.context.url.split("?"), r = new URLSearchParams(n);
        r.set("operation", e.context.operationName), e.context.url = `${t}?${r.toString()}`;
      } catch {
      }
  }
});
function Pu(e) {
  const t = {
    left: e.left,
    delta: e.delta,
    children: void 0,
    name: void 0,
    nested: !1,
    stopped: !1
  };
  function n(r) {
    var i;
    const a = [
      xu,
      Ru,
      Du,
      Cu,
      Fu
    ];
    for (const s of a)
      if (s(r), r.stopped) {
        r.stopped = !1;
        break;
      }
    if (r.children)
      for (const s of r.children)
        n(s), r.result = (i = r.result) !== null && i !== void 0 ? i : r.left, "result" in s ? r.result[s.name] = s.result : delete r.result[s.name];
  }
  return n(t), t.result;
}
function xu(e) {
  if (!(!e || !e.children) && !e.delta._t) {
    for (let t of e.children)
      Object.prototype.hasOwnProperty.call(e.left, t.name) && t.result === void 0 ? delete e.left[t.name] : e.left[t.name] !== t.result && (e.left[t.name] = t.result);
    e.result = e.left, e.stopped = !0;
  }
}
function Ru(e) {
  if (!e || !e.children || e.delta._t !== "a")
    return;
  let t = e.children.length, n;
  for (let r = 0; r < t; r++)
    n = e.children[r], e.left[n.name] = n.result;
  e.result = e.left, e.stopped = !0;
}
function Du(e) {
  if (typeof e.delta > "u") {
    e.result = e.left;
    return;
  }
  if (e.nested = !Array.isArray(e.delta), !e.nested) {
    if (e.delta.length === 1) {
      e.result = e.delta[0], e.stopped = !0;
      return;
    }
    if (e.delta.length === 2) {
      e.result = e.delta[1], e.stopped = !0;
      return;
    }
    e.delta.length === 3 && e.delta[2] === 0 && (e.stopped = !0);
  }
}
function Cu(e) {
  if (e.nested && !e.delta._t) {
    for (let t in e.delta)
      e.children === void 0 && (e.children = []), e.children.push({
        left: e.left[t],
        delta: e.delta[t],
        name: t,
        stopped: !1
      });
    e.stopped = !0;
  }
}
const xa = 3;
let Ra = {
  numerically(e, t) {
    return e - t;
  },
  numericallyBy(e) {
    return (t, n) => t[e] - n[e];
  }
};
function Fu(e) {
  if (!e.nested || e.delta._t !== "a")
    return;
  let t, n, r = e.delta, i = e.left, a = [], s = [], l = [];
  for (t in r)
    if (t !== "_t")
      if (t[0] === "_")
        if (r[t][2] === 0 || r[t][2] === xa)
          a.push(parseInt(t.slice(1), 10));
        else
          throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${r[t][2]}`);
      else
        r[t].length === 1 ? s.push({
          index: parseInt(t, 10),
          value: r[t][0]
        }) : l.push({
          index: parseInt(t, 10),
          delta: r[t]
        });
  for (a = a.sort(Ra.numerically), t = a.length - 1; t >= 0; t--) {
    n = a[t];
    let c = r[`_${n}`], p = i.splice(n, 1)[0];
    c[2] === xa && s.push({
      index: c[1],
      value: p
    });
  }
  s = s.sort(Ra.numericallyBy("index"));
  let u = s.length;
  for (t = 0; t < u; t++) {
    let c = s[t];
    i.splice(c.index, 0, c.value);
  }
  let d = l.length;
  if (d > 0)
    for (t = 0; t < d; t++) {
      let c = l[t];
      e.children === void 0 && (e.children = []), e.children.push({
        left: e.left[c.index],
        delta: c.delta,
        name: c.index,
        stopped: !1
      });
    }
  if (!e.children) {
    e.result = e.left, e.stopped = !0;
    return;
  }
}
class Co extends Error {
  constructor(t) {
    super(t), Object.defineProperty(this, "name", {
      value: "RepeaterOverflowError",
      enumerable: !1
    }), typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf(this, this.constructor.prototype) : this.__proto__ = this.constructor.prototype, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, this.constructor);
  }
}
function gi(e) {
  e != null && typeof e.then == "function" && e.then(dr, dr);
}
const Hr = 0, Da = 1, zt = 2, ur = 3, bi = 4, cr = 1024, dr = () => {
};
function Xt(e) {
  const t = e.err, n = Promise.resolve(e.execution).then((r) => {
    if (t != null)
      throw t;
    return r;
  });
  return e.err = void 0, e.execution = n.then(() => {
  }, () => {
  }), e.pending === void 0 ? n : e.pending.then(() => n);
}
function Lt(e, t) {
  const n = e.state >= ur;
  return Promise.resolve(t).then((r) => !n && e.state >= bi ? Xt(e).then((i) => ({
    value: i,
    done: !0
  })) : { value: r, done: n });
}
function qi(e, t) {
  if (!(e.state >= zt))
    if (e.state = zt, e.onnext(), e.onstop(), e.err == null && (e.err = t), e.pushes.length === 0 && (typeof e.buffer > "u" || e.buffer.empty))
      Cn(e);
    else
      for (const n of e.pushes)
        n.resolve();
}
function Cn(e) {
  if (!(e.state >= ur)) {
    e.state < zt && qi(e), e.state = ur, e.buffer = void 0;
    for (const t of e.nexts) {
      const n = e.pending === void 0 ? Xt(e) : e.pending.then(() => Xt(e));
      t.resolve(Lt(e, n));
    }
    e.pushes = [], e.nexts = [];
  }
}
function Ca(e) {
  e.state >= bi || (e.state < ur && Cn(e), e.state = bi);
}
function ju(e, t) {
  if (gi(t), e.pushes.length >= cr)
    throw new Co(`No more than ${cr} pending calls to push are allowed on a single repeater.`);
  if (e.state >= zt)
    return Promise.resolve(void 0);
  let n = e.pending === void 0 ? Promise.resolve(t) : e.pending.then(() => t);
  n = n.catch((l) => {
    e.state < zt && (e.err = l), Ca(e);
  });
  let r;
  e.nexts.length ? (e.nexts.shift().resolve(Lt(e, n)), e.nexts.length ? r = Promise.resolve(e.nexts[0].value) : r = new Promise((u) => e.onnext = u)) : typeof e.buffer < "u" && !e.buffer.full ? (e.buffer.add(n), r = Promise.resolve(void 0)) : r = new Promise((l) => e.pushes.push({ resolve: l, value: n }));
  let i = !0;
  const a = {}, s = r.catch((l) => {
    if (i)
      throw l;
  });
  return a.then = (l, u) => (i = !1, Promise.prototype.then.call(r, l, u)), a.catch = (l) => (i = !1, Promise.prototype.catch.call(r, l)), a.finally = r.finally.bind(r), e.pending = n.then(() => s).catch((l) => {
    e.err = l, Ca(e);
  }), a;
}
function $u(e) {
  const t = qi.bind(null, e), n = new Promise((r) => e.onstop = r);
  return t.then = n.then.bind(n), t.catch = n.catch.bind(n), t.finally = n.finally.bind(n), t;
}
function Mu(e) {
  if (e.state >= Da)
    return;
  e.state = Da;
  const t = ju.bind(null, e), n = $u(e);
  e.execution = new Promise((r) => r(e.executor(t, n))), e.execution.catch(() => qi(e));
}
const Hn = /* @__PURE__ */ new WeakMap();
class Lu {
  constructor(t, n) {
    Hn.set(this, {
      executor: t,
      buffer: n,
      err: void 0,
      state: Hr,
      pushes: [],
      nexts: [],
      pending: void 0,
      execution: void 0,
      onnext: dr,
      onstop: dr
    });
  }
  next(t) {
    gi(t);
    const n = Hn.get(this);
    if (n === void 0)
      throw new Error("WeakMap error");
    if (n.nexts.length >= cr)
      throw new Co(`No more than ${cr} pending calls to next are allowed on a single repeater.`);
    if (n.state <= Hr && Mu(n), n.onnext(t), typeof n.buffer < "u" && !n.buffer.empty) {
      const r = Lt(n, n.buffer.remove());
      if (n.pushes.length) {
        const i = n.pushes.shift();
        n.buffer.add(i.value), n.onnext = i.resolve;
      }
      return r;
    } else if (n.pushes.length) {
      const r = n.pushes.shift();
      return n.onnext = r.resolve, Lt(n, r.value);
    } else if (n.state >= zt)
      return Cn(n), Lt(n, Xt(n));
    return new Promise((r) => n.nexts.push({ resolve: r, value: t }));
  }
  return(t) {
    gi(t);
    const n = Hn.get(this);
    if (n === void 0)
      throw new Error("WeakMap error");
    return Cn(n), n.execution = Promise.resolve(n.execution).then(() => t), Lt(n, Xt(n));
  }
  throw(t) {
    const n = Hn.get(this);
    if (n === void 0)
      throw new Error("WeakMap error");
    return n.state <= Hr || n.state >= zt || typeof n.buffer < "u" && !n.buffer.empty ? (Cn(n), n.err == null && (n.err = t), Lt(n, Xt(n))) : this.next(Promise.reject(t));
  }
  [Symbol.asyncIterator]() {
    return this;
  }
}
const Vu = (e) => (t) => new Lu(async (n, r) => {
  const i = t[Symbol.asyncIterator]();
  r.then(() => {
    var u;
    return (u = i.return) === null || u === void 0 ? void 0 : u.call(i);
  }).catch(console.log);
  let a = null, s = 0, l;
  for (; (l = await i.next()).done === !1; ) {
    if ("revision" in l.value && l.value.revision) {
      const u = {};
      if (l.value.revision === 1) {
        if (!l.value.data)
          throw new Error("Missing data.");
        u.data = l.value.data, a = l.value.data, s = 1;
      } else {
        if (!a)
          throw new Error("No previousData available.");
        if (!l.value.patch)
          throw new Error("Missing patch.");
        if (s + 1 !== l.value.revision)
          throw new Error("Wrong revision received.");
        a = e(a, l.value.patch), u.data = { ...a }, s++;
      }
      l.value.extensions && (u.extensions = l.value.extensions), l.value.errors && (u.errors = l.value.errors), await n(u);
      continue;
    }
    await n(l.value);
  }
  r();
}), Uu = (e, t) => Pu({
  left: e,
  delta: t
}), Bu = Vu(Uu);
var vi;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(vi || (vi = {}));
const qu = 2, Gu = 4800, zu = 1e4, Wu = [ve.ConnectionAcknowledgementTimeout, ve.ConnectionInitialisationTimeout], Fa = Symbol.for("gadget/connection"), Qu = "token", Ju = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var le;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(le || (le = {}));
const Kn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class Fo {
  constructor(t) {
    var n, r, i, a, s;
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
      value: le.Anonymous
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
      value: async (l, u) => {
        let d, c;
        if (u ? (d = u, c = l) : (d = l, c = {}), this.currentTransaction)
          return await d(this.currentTransaction);
        let p = null, m;
        try {
          p = await this.waitForOpenedConnection({
            isFatalConnectionProblem(E) {
              return console.warn("Transport error encountered during transaction processing", E), !0;
            },
            connectionAckWaitTimeout: Gu,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const y = new la({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              Pa,
              ...this.exchanges.beforeAsync,
              Wr({
                forwardSubscription(E) {
                  const x = { ...E, query: E.query || "" };
                  return {
                    subscribe: (P) => ({
                      unsubscribe: p.subscribe(x, P)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          y[Fa] = this, m = new Au(y, p), this.currentTransaction = m, await m.start();
          const g = await d(m);
          return await m.commit(), g;
        } catch (y) {
          try {
            m != null && m.open && await m.rollback();
          } catch (g) {
            g instanceof Do || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", g);
          }
          throw di(y) ? new ua(y) : y;
        } finally {
          await (p == null ? void 0 : p.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (l, u = {}) => {
        var d;
        l = Yu(l, (d = this.options.baseRouteURL) !== null && d !== void 0 ? d : this.options.endpoint), this.isGadgetRequest(l) && (u.headers = { ...this.requestHeaders(), ...u.headers }, this.authenticationMode == le.Custom && await this.options.authenticationMode.custom.processFetch(l, u));
        const c = await this._fetchImplementation(l, u);
        if (this.authenticationMode == le.BrowserSession) {
          const p = c.headers.get("x-set-authorization"), m = p != null && p.startsWith("Session ") ? p.replace("Session ", "") : null;
          m && this.sessionTokenStore.setItem(this.sessionStorageKey, m);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof Kn < "u" && Kn.fetch ? this._fetchImplementation = Kn.fetch.bind(Kn) : this._fetchImplementation = async (...l) => {
      let u = await import("./browser-ponyfill-86d32050.js").then((d) => d.b);
      return u.default && (u = u.default), await u(...l);
    }, this.websocketImplementation = (r = (n = t.websocketImplementation) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.WebSocket) !== null && r !== void 0 ? r : Ou, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Qu}-${this.endpoint}`;
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
    var n;
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = le.InternalAuthToken : t.apiKey ? this.authenticationMode = le.APIKey : t.custom && (this.authenticationMode = le.Custom), this.options.authenticationMode = t), (n = this.authenticationMode) !== null && n !== void 0 || (this.authenticationMode = le.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = le.BrowserSession;
    const n = !t || typeof t == "boolean" ? Dn.Durable : t.storageType;
    let r;
    n == Dn.Durable && da("localStorage") ? r = window.localStorage : n == Dn.Session && da("sessionStorage") ? r = window.sessionStorage : r = new Tu(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && r.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = r, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let n;
    if (typeof t == "string" ? n = t : typeof t == "object" && "url" in t ? n = t.url : n = String(t), Si(this.options.endpoint))
      return !!Si(n);
    const r = new URL(this.options.endpoint).host;
    return n.includes(r);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Pa, _u];
    typeof window < "u" && t.push(Vs), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      Wr({
        forwardSubscription: (r) => ({
          subscribe: (i) => {
            const a = { ...r, query: r.query || "" };
            return {
              unsubscribe: this.getBaseSubscriptionClient().subscribe(a, i)
            };
          }
        })
      }),
      // another subscription exchange for live queries
      // live queries pass through the same WS client, but use jsondiffs for patching in results
      Wr({
        isSubscriptionOperation: (r) => r.query.definitions.some((i) => hu(i, r.variables)),
        forwardSubscription: (r) => ({
          subscribe: (i) => {
            const a = { ...r, query: r.query || "" };
            return {
              unsubscribe: bu(Bu(gu((s) => this.getBaseSubscriptionClient().subscribe(a, s))), i)
            };
          }
        })
      }),
      Us,
      ...this.exchanges.afterAll
    );
    const n = new la({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return n[Fa] = this, n;
  }
  newSubscriptionClient(t) {
    if (!this.websocketImplementation)
      throw new Error("Can't use this GadgetClient for this subscription-based operation as there's no global WebSocket implementation available. Please pass one as the `websocketImplementation` option to the GadgetClient constructor.");
    let n = this.websocketsEndpoint;
    if (t != null && t.urlParams) {
      const r = new URLSearchParams();
      for (const [i, a] of Object.entries(t.urlParams))
        a && r.set(i, a);
      n += "?" + r.toString();
    }
    return wu({
      url: n,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var r, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == le.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == le.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == le.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == le.Custom && await ((i = (r = this.options.authenticationMode) === null || r === void 0 ? void 0 : r.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (r, i) => {
          var a, s, l, u, d, c;
          if (this.authenticationMode == le.BrowserSession && (i != null && i.sessionToken)) {
            const p = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (p !== null && typeof p == "object" ? p.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (u = (l = (s = this.subscriptionClientOptions) === null || s === void 0 ? void 0 : s.on) === null || l === void 0 ? void 0 : l.connected) === null || u === void 0 || u.call(l, r, i), (c = (d = t == null ? void 0 : t.on) === null || d === void 0 ? void 0 : d.connected) === null || c === void 0 || c.call(d, r, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const n = {};
    if (this.authenticationMode == le.InternalAuthToken)
      n.authorization = "Basic " + Ju("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == le.APIKey)
      n.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == le.BrowserSession) {
      const r = this.sessionTokenStore.getItem(this.sessionStorageKey);
      r && (n.authorization = `Session ${r}`);
    }
    return n["x-gadget-environment"] = this.environment, n;
  }
  async waitForOpenedConnection(t) {
    let n = this.newSubscriptionClient(t), r = [], i = t.connectionAttempts || qu;
    const a = t.connectionGlobalTimeoutMs || zu, s = () => {
      r.forEach((l) => l()), r = [];
    };
    return await new Promise((l, u) => {
      const d = setTimeout(() => {
        this.disposeClient(n), p(new Qs("Timeout opening websocket connection to Gadget API"));
      }, a), c = (g) => {
        if (di(g)) {
          if (g.code == vi.TooManyRequests)
            return s(), p(new Js(g.reason));
          if (Wu.includes(g.code) && i > 0) {
            i -= 1, this.disposeClient(n), n = this.newSubscriptionClient(t), y();
            return;
          }
        }
        clearTimeout(d), u(new ua(g));
      }, p = (g) => {
        clearTimeout(d), u(g);
      }, m = () => {
        clearTimeout(d), l(n);
      }, y = () => {
        s(), r.push(n.on("connected", m)), r.push(n.on("closed", c)), r.push(n.on("error", p));
      };
      y();
    }).finally(s);
  }
  disposeClient(t) {
    const n = t.dispose();
    n && n.catch((r) => console.error(`Error closing SubscriptionClient: ${r.message}`));
  }
  getBaseSubscriptionClient() {
    return this.baseSubscriptionClient || (this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 })), this.baseSubscriptionClient;
  }
}
Object.defineProperty(Fo, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.20"
});
function Yu(e, t) {
  if (typeof e != "string")
    return e;
  if (Si(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Si(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const Gn = `
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
`, sn = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, Hu = (e) => `
    query InternalFind${Ye(e)}($id: GadgetID!, $select: [String!]) {
      ${sn(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, jo = (e, t) => ({
  search: t != null && t.search ? ie({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? ie({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? ie({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? ie({ value: $o(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), Ku = (e, t) => {
  const n = Ye(e), r = jo(n, t);
  return Ot({
    type: "query",
    name: `InternalFindFirst${n}`,
    fields: {
      internal: {
        [`list${n}`]: Et({
          ...r,
          first: ie({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, Xu = (e, t) => {
  const n = Ye(e), r = jo(n, t);
  return Ot({
    type: "query",
    name: `InternalFindMany${n}`,
    fields: {
      internal: {
        [`list${n}`]: Et({
          ...r,
          after: ie({ value: t == null ? void 0 : t.after, type: "String" }),
          before: ie({ value: t == null ? void 0 : t.before, type: "String" }),
          first: ie({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: ie({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, Zu = (e) => {
  const t = Ye(e);
  return `
    ${Gn}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${sn(e)}
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
}, ec = (e, t) => {
  const n = Ye(e), r = Ye(t);
  return `
    ${Gn}

    mutation InternalBulkCreate${r}($records: [Internal${n}Input]!) {
      ${sn(e)}
      internal {
        bulkCreate${r}(${t}: $records) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${t}
        }
      }
    }
  `;
}, tc = (e) => {
  const t = Ye(e);
  return `
    ${Gn}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${sn(e)}
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
}, nc = (e) => {
  const t = Ye(e);
  return `
    ${Gn}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${sn(e)}
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
}, rc = (e) => {
  const t = Ye(e);
  return `
    ${Gn}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${sn(e)}
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
class We {
  constructor(t, n, r) {
    Object.defineProperty(this, "apiIdentifier", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "connection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }), Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }), Object.defineProperty(this, "capitalizedApiIdentifier", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.capitalizedApiIdentifier = Gt(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((r) => r === this.apiIdentifier);
  }
  getRecordFromData(t, n) {
    let r = t;
    if (!this.validateRecord(t))
      throw new mr(`Invalid arguments found in variables. Did you mean to use ${n}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
    return this.apiIdentifier in t && (r = r[this.apiIdentifier]), r;
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
  async findOne(t, n, r = !0) {
    const i = await this.connection.currentClient.query(Hu(this.apiIdentifier), { id: t, select: $o(n == null ? void 0 : n.select) }).toPromise(), s = (r ? st : xn)(i, ["internal", this.apiIdentifier]);
    return Rn(i, s);
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
  async maybeFindOne(t, n) {
    const r = await this.findOne(t, n, !1);
    return r.isEmpty() ? null : r;
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
    const n = Xu(this.apiIdentifier, t), r = await this.connection.currentClient.query(n.query, n.variables).toPromise(), i = xn(r, ["internal", `list${this.capitalizedApiIdentifier}`]), a = $n(r, i);
    return an.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
  async findFirst(t, n = !0) {
    const r = Ku(this.apiIdentifier, t), i = await this.connection.currentClient.query(r.query, r.variables).toPromise();
    let a;
    n === !1 ? a = xn(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = st(i, ["internal", `list${this.capitalizedApiIdentifier}`], n);
    const s = $n(i, a);
    return an.boot(this, s, { options: t, pageInfo: a.pageInfo })[0];
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
    const n = await this.connection.currentClient.mutation(Zu(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), r = It(n, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return Rn(n, r[this.apiIdentifier]);
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
    var n;
    if (!(!((n = this.options) === null || n === void 0) && n.pluralApiIdentifier))
      throw new ui("Cannot perform bulkCreate without a pluralApiIdentifier");
    const r = Ye(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(ec(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = It(i, ["internal", `bulkCreate${r}`]);
    return xi(i, a[this.options.pluralApiIdentifier]);
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
  async update(t, n) {
    ci(t, "Can't update a record without an ID passed");
    const r = await this.connection.currentClient.mutation(tc(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(n, "update")
    }).toPromise(), i = It(r, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return Rn(r, i[this.apiIdentifier]);
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
    ci(t, "Can't delete a record without an ID");
    const n = await this.connection.currentClient.mutation(nc(this.apiIdentifier), { id: t }).toPromise();
    It(n, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const n = await this.connection.currentClient.mutation(rc(this.apiIdentifier), t).toPromise();
    It(n, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function $o(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [n, r] of Object.entries(e))
    r && t.push(n);
  return t;
}
const Ve = (e, t, n, r) => {
  const i = class {
    constructor(a) {
      this.connection = a;
    }
  };
  for (const a of r)
    switch (a.type) {
      case "maybeFindOne":
      case "findOne": {
        "functionName" in a ? i.prototype[a.functionName] = Object.assign(
          async function(s, l) {
            return await pl(
              this,
              a.operationName,
              a.findByField,
              s,
              n,
              e,
              l
            );
          },
          a
        ) : i.prototype[a.type] = Object.assign(
          async function(s, l) {
            const u = await ma(
              this,
              e,
              s,
              n,
              e,
              l,
              a.type != "maybeFindOne"
            );
            return u.isEmpty() ? null : u;
          },
          a
        );
        break;
      }
      case "findMany": {
        i.prototype.findMany = Object.assign(async function(s) {
          return await ya(this, t, n, e, s);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        i.prototype[a.type] = Object.assign(async function(s) {
          const l = await ya(
            this,
            t,
            n,
            e,
            {
              ...s,
              first: 1,
              last: void 0,
              before: void 0,
              after: void 0
            },
            a.type != "maybeFindFirst"
          );
          return (l == null ? void 0 : l[0]) ?? null;
        }, a);
        break;
      }
      case "get": {
        i.prototype.get = Object.assign(async function(s) {
          return await ma(this, a.operationName, void 0, n, e, s);
        }, a);
        break;
      }
      case "action": {
        if (a.isBulk) {
          const s = !!a.variables.ids;
          i.prototype[a.functionName] = Object.assign(
            async function(l, u) {
              let d;
              return s ? d = {
                ids: {
                  ...a.variables.ids,
                  value: l
                }
              } : d = {
                inputs: {
                  ...a.variables.inputs,
                  value: l.map(
                    (c) => Mo(this[a.singleActionFunctionName], void 0, c)
                  )
                }
              }, await ga(
                this,
                a.operationName,
                a.isDeleter ? null : n,
                e,
                a.modelSelectionField,
                !0,
                d,
                u,
                a.namespace,
                a.hasReturnType
              );
            },
            a
          );
        } else {
          const s = !!a.variables.id, l = Object.keys(a.variables).filter((u) => u != "id").length > 0;
          i.prototype[a.functionName] = Object.assign(
            async function(...u) {
              const [d, c] = ic(a, s, l, u);
              return await ga(
                this,
                a.operationName,
                a.isDeleter ? null : n,
                e,
                a.modelSelectionField,
                !1,
                d,
                c,
                a.namespace,
                a.hasReturnType
              );
            },
            a
          );
        }
        break;
      }
    }
  return i;
};
function Mo(e, t, n = {}) {
  var a;
  if (e.hasAmbiguousIdentifier && Object.keys(n).some((s) => {
    var l;
    return !((l = e.paramOnlyVariables) != null && l.includes(s)) && s !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let r;
  const i = Object.entries(e.variables).find(([s, l]) => s === "id" && l.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in n && typeof n[e.modelApiIdentifier] == "object" && n[e.modelApiIdentifier] !== null || !e.variables[e.modelApiIdentifier])
      r = n;
    else {
      r = {
        [e.modelApiIdentifier]: {}
      };
      for (const [s, l] of Object.entries(n))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? r[s] = l : i && s === i[0] ? r.id = l : r[e.modelApiIdentifier][s] = l;
    }
  else
    r = n;
  return r.id ?? (r.id = t), r;
}
function ic(e, t, n, r) {
  let i, a;
  t && (i = r.shift()), n && (a = r.shift());
  const s = r.shift();
  let l = a;
  (i || a) && (l = Mo(e, i, a));
  const u = {};
  for (const [d, c] of Object.entries(e.variables))
    u[d] = {
      value: d == "id" ? i : l == null ? void 0 : l[d],
      ...c
    };
  return [u, s];
}
const xe = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  email: !0,
  roles: { key: !0, name: !0 },
  updatedAt: !0
}, ne = "user", ht = "users", ac = Ve(
  ne,
  ht,
  xe,
  [
    {
      type: "findOne",
      operationName: ne,
      modelApiIdentifier: ne,
      findByVariableName: "id",
      defaultSelection: xe
    },
    {
      type: "maybeFindOne",
      operationName: ne,
      modelApiIdentifier: ne,
      findByVariableName: "id",
      defaultSelection: xe
    },
    {
      type: "findMany",
      operationName: ht,
      modelApiIdentifier: ne,
      defaultSelection: xe
    },
    {
      type: "findFirst",
      operationName: ht,
      modelApiIdentifier: ne,
      defaultSelection: xe
    },
    {
      type: "maybeFindFirst",
      operationName: ht,
      modelApiIdentifier: ne,
      defaultSelection: xe
    },
    {
      type: "findOne",
      operationName: ht,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: ne,
      defaultSelection: xe
    },
    {
      type: "action",
      operationName: "signUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "SignUpUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: xe
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
      modelApiIdentifier: ne,
      modelSelectionField: ht,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: xe
    },
    {
      type: "action",
      operationName: "updateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
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
      defaultSelection: xe
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
      modelApiIdentifier: ne,
      modelSelectionField: ht,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: xe
    },
    {
      type: "action",
      operationName: "deleteUser",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
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
      modelApiIdentifier: ne,
      modelSelectionField: ht,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "createUser",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "CreateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: xe
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
      modelApiIdentifier: ne,
      modelSelectionField: ht,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: xe
    }
  ]
), tt = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, Se = "session", Wt = "sessions", oc = Ve(
  Se,
  Wt,
  tt,
  [
    {
      type: "findOne",
      operationName: Se,
      modelApiIdentifier: Se,
      findByVariableName: "id",
      defaultSelection: tt
    },
    {
      type: "maybeFindOne",
      operationName: Se,
      modelApiIdentifier: Se,
      findByVariableName: "id",
      defaultSelection: tt
    },
    {
      type: "findMany",
      operationName: Wt,
      modelApiIdentifier: Se,
      defaultSelection: tt
    },
    {
      type: "findFirst",
      operationName: Wt,
      modelApiIdentifier: Se,
      defaultSelection: tt
    },
    {
      type: "maybeFindFirst",
      operationName: Wt,
      modelApiIdentifier: Se,
      defaultSelection: tt
    },
    {
      type: "action",
      operationName: "logInViaEmail",
      functionName: "logInViaEmail",
      namespace: "currentSession",
      modelApiIdentifier: Se,
      modelSelectionField: Se,
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
      defaultSelection: tt
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
      modelApiIdentifier: Se,
      modelSelectionField: Wt,
      namespace: "currentSession",
      variables: {
        inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" }
      },
      defaultSelection: tt
    },
    {
      type: "action",
      operationName: "logOut",
      functionName: "logOut",
      namespace: "currentSession",
      modelApiIdentifier: Se,
      modelSelectionField: Se,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: tt
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
      modelApiIdentifier: Se,
      modelSelectionField: Wt,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: tt
    }
  ]
), nt = {
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
}, fe = "shopifyProduct", Dt = "shopifyProducts", sc = Ve(
  fe,
  Dt,
  nt,
  [
    {
      type: "findOne",
      operationName: fe,
      modelApiIdentifier: fe,
      findByVariableName: "id",
      defaultSelection: nt
    },
    {
      type: "maybeFindOne",
      operationName: fe,
      modelApiIdentifier: fe,
      findByVariableName: "id",
      defaultSelection: nt
    },
    {
      type: "findMany",
      operationName: Dt,
      modelApiIdentifier: fe,
      defaultSelection: nt
    },
    {
      type: "findFirst",
      operationName: Dt,
      modelApiIdentifier: fe,
      defaultSelection: nt
    },
    {
      type: "maybeFindFirst",
      operationName: Dt,
      modelApiIdentifier: fe,
      defaultSelection: nt
    },
    {
      type: "action",
      operationName: "createShopifyProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: fe,
      modelSelectionField: fe,
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
      defaultSelection: nt
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
      modelApiIdentifier: fe,
      modelSelectionField: Dt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" }
      },
      defaultSelection: nt
    },
    {
      type: "action",
      operationName: "updateShopifyProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: fe,
      modelSelectionField: fe,
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
      defaultSelection: nt
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
      modelApiIdentifier: fe,
      modelSelectionField: Dt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyProductsInput!]" }
      },
      defaultSelection: nt
    },
    {
      type: "action",
      operationName: "deleteShopifyProduct",
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
      operationName: "bulkDeleteShopifyProducts",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: fe,
      modelSelectionField: Dt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), rt = {
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
}, pe = "shopifyProductImage", Ct = "shopifyProductImages", lc = Ve(
  pe,
  Ct,
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
      operationName: Ct,
      modelApiIdentifier: pe,
      defaultSelection: rt
    },
    {
      type: "findFirst",
      operationName: Ct,
      modelApiIdentifier: pe,
      defaultSelection: rt
    },
    {
      type: "maybeFindFirst",
      operationName: Ct,
      modelApiIdentifier: pe,
      defaultSelection: rt
    },
    {
      type: "action",
      operationName: "createShopifyProductImage",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: pe,
      modelSelectionField: pe,
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
      defaultSelection: rt
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
      modelApiIdentifier: pe,
      modelSelectionField: Ct,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: rt
    },
    {
      type: "action",
      operationName: "updateShopifyProductImage",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: pe,
      modelSelectionField: pe,
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
      defaultSelection: rt
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
      modelApiIdentifier: pe,
      modelSelectionField: Ct,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: rt
    },
    {
      type: "action",
      operationName: "deleteShopifyProductImage",
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
      operationName: "bulkDeleteShopifyProductImages",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: pe,
      modelSelectionField: Ct,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), it = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  name: !0,
  position: !0,
  updatedAt: !0,
  values: !0
}, he = "shopifyProductOption", Ft = "shopifyProductOptions", uc = Ve(
  he,
  Ft,
  it,
  [
    {
      type: "findOne",
      operationName: he,
      modelApiIdentifier: he,
      findByVariableName: "id",
      defaultSelection: it
    },
    {
      type: "maybeFindOne",
      operationName: he,
      modelApiIdentifier: he,
      findByVariableName: "id",
      defaultSelection: it
    },
    {
      type: "findMany",
      operationName: Ft,
      modelApiIdentifier: he,
      defaultSelection: it
    },
    {
      type: "findFirst",
      operationName: Ft,
      modelApiIdentifier: he,
      defaultSelection: it
    },
    {
      type: "maybeFindFirst",
      operationName: Ft,
      modelApiIdentifier: he,
      defaultSelection: it
    },
    {
      type: "action",
      operationName: "createShopifyProductOption",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: he,
      modelSelectionField: he,
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
      defaultSelection: it
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
      modelApiIdentifier: he,
      modelSelectionField: Ft,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: it
    },
    {
      type: "action",
      operationName: "updateShopifyProductOption",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: he,
      modelSelectionField: he,
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
      defaultSelection: it
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
      modelApiIdentifier: he,
      modelSelectionField: Ft,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: it
    },
    {
      type: "action",
      operationName: "deleteShopifyProductOption",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: he,
      modelSelectionField: he,
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
      modelApiIdentifier: he,
      modelSelectionField: Ft,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), at = {
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
}, me = "shopifyProductVariant", jt = "shopifyProductVariants", cc = Ve(
  me,
  jt,
  at,
  [
    {
      type: "findOne",
      operationName: me,
      modelApiIdentifier: me,
      findByVariableName: "id",
      defaultSelection: at
    },
    {
      type: "maybeFindOne",
      operationName: me,
      modelApiIdentifier: me,
      findByVariableName: "id",
      defaultSelection: at
    },
    {
      type: "findMany",
      operationName: jt,
      modelApiIdentifier: me,
      defaultSelection: at
    },
    {
      type: "findFirst",
      operationName: jt,
      modelApiIdentifier: me,
      defaultSelection: at
    },
    {
      type: "maybeFindFirst",
      operationName: jt,
      modelApiIdentifier: me,
      defaultSelection: at
    },
    {
      type: "action",
      operationName: "createShopifyProductVariant",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: me,
      modelSelectionField: me,
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
      defaultSelection: at
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
      modelApiIdentifier: me,
      modelSelectionField: jt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: at
    },
    {
      type: "action",
      operationName: "updateShopifyProductVariant",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: me,
      modelSelectionField: me,
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
      defaultSelection: at
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
      modelApiIdentifier: me,
      modelSelectionField: jt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: at
    },
    {
      type: "action",
      operationName: "deleteShopifyProductVariant",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: me,
      modelSelectionField: me,
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
      modelApiIdentifier: me,
      modelSelectionField: jt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Ie = {
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
}, X = "shopifyShop", mt = "shopifyShops", dc = Ve(
  X,
  mt,
  Ie,
  [
    {
      type: "findOne",
      operationName: X,
      modelApiIdentifier: X,
      findByVariableName: "id",
      defaultSelection: Ie
    },
    {
      type: "maybeFindOne",
      operationName: X,
      modelApiIdentifier: X,
      findByVariableName: "id",
      defaultSelection: Ie
    },
    {
      type: "findMany",
      operationName: mt,
      modelApiIdentifier: X,
      defaultSelection: Ie
    },
    {
      type: "findFirst",
      operationName: mt,
      modelApiIdentifier: X,
      defaultSelection: Ie
    },
    {
      type: "maybeFindFirst",
      operationName: mt,
      modelApiIdentifier: X,
      defaultSelection: Ie
    },
    {
      type: "action",
      operationName: "createShopifyShop",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
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
      defaultSelection: Ie
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
      modelApiIdentifier: X,
      modelSelectionField: mt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyShopsInput!]" }
      },
      defaultSelection: Ie
    },
    {
      type: "action",
      operationName: "updateShopifyShop",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
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
      defaultSelection: Ie
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
      modelApiIdentifier: X,
      modelSelectionField: mt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyShopsInput!]" }
      },
      defaultSelection: Ie
    },
    {
      type: "action",
      operationName: "deleteShopifyShop",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
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
      modelApiIdentifier: X,
      modelSelectionField: mt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "reinstallShopifyShop",
      functionName: "reinstall",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
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
      defaultSelection: Ie
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
      modelApiIdentifier: X,
      modelSelectionField: mt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkReinstallShopifyShopsInput!]" }
      },
      defaultSelection: Ie
    },
    {
      type: "action",
      operationName: "uninstallShopifyShop",
      functionName: "uninstall",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
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
      defaultSelection: Ie
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
      modelApiIdentifier: X,
      modelSelectionField: mt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUninstallShopifyShopsInput!]" }
      },
      defaultSelection: Ie
    }
  ]
), ot = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
}, ye = "productPairing", $t = "productPairings", fc = Ve(
  ye,
  $t,
  ot,
  [
    {
      type: "findOne",
      operationName: ye,
      modelApiIdentifier: ye,
      findByVariableName: "id",
      defaultSelection: ot
    },
    {
      type: "maybeFindOne",
      operationName: ye,
      modelApiIdentifier: ye,
      findByVariableName: "id",
      defaultSelection: ot
    },
    {
      type: "findMany",
      operationName: $t,
      modelApiIdentifier: ye,
      defaultSelection: ot
    },
    {
      type: "findFirst",
      operationName: $t,
      modelApiIdentifier: ye,
      defaultSelection: ot
    },
    {
      type: "maybeFindFirst",
      operationName: $t,
      modelApiIdentifier: ye,
      defaultSelection: ot
    },
    {
      type: "action",
      operationName: "createProductPairing",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ye,
      modelSelectionField: ye,
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
      defaultSelection: ot
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
      modelApiIdentifier: ye,
      modelSelectionField: $t,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateProductPairingsInput!]" }
      },
      defaultSelection: ot
    },
    {
      type: "action",
      operationName: "updateProductPairing",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ye,
      modelSelectionField: ye,
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
      defaultSelection: ot
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
      modelApiIdentifier: ye,
      modelSelectionField: $t,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateProductPairingsInput!]" }
      },
      defaultSelection: ot
    },
    {
      type: "action",
      operationName: "deleteProductPairing",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: ye,
      modelSelectionField: ye,
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
      modelApiIdentifier: ye,
      modelSelectionField: $t,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Re = {
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
}, ue = "shopifySync", bt = "shopifySyncs", pc = Ve(
  ue,
  bt,
  Re,
  [
    {
      type: "findOne",
      operationName: ue,
      modelApiIdentifier: ue,
      findByVariableName: "id",
      defaultSelection: Re
    },
    {
      type: "maybeFindOne",
      operationName: ue,
      modelApiIdentifier: ue,
      findByVariableName: "id",
      defaultSelection: Re
    },
    {
      type: "findMany",
      operationName: bt,
      modelApiIdentifier: ue,
      defaultSelection: Re
    },
    {
      type: "findFirst",
      operationName: bt,
      modelApiIdentifier: ue,
      defaultSelection: Re
    },
    {
      type: "maybeFindFirst",
      operationName: bt,
      modelApiIdentifier: ue,
      defaultSelection: Re
    },
    {
      type: "findOne",
      operationName: bt,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ue,
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: ue,
      modelSelectionField: ue,
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
      defaultSelection: Re
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
      modelApiIdentifier: ue,
      modelSelectionField: bt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCompleteShopifySyncsInput!]" }
      },
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "errorShopifySync",
      functionName: "error",
      namespace: null,
      modelApiIdentifier: ue,
      modelSelectionField: ue,
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
      defaultSelection: Re
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
      modelApiIdentifier: ue,
      modelSelectionField: bt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkErrorShopifySyncsInput!]" }
      },
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "runShopifySync",
      functionName: "run",
      namespace: null,
      modelApiIdentifier: ue,
      modelSelectionField: ue,
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
      defaultSelection: Re
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
      modelApiIdentifier: ue,
      modelSelectionField: bt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: Re
    }
  ]
), Qe = {
  __typename: !0,
  id: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  updatedAt: !0
}, ce = "ambiguous", vt = "ambiguouss", hc = Ve(
  ce,
  vt,
  Qe,
  [
    {
      type: "findOne",
      operationName: ce,
      modelApiIdentifier: ce,
      findByVariableName: "id",
      defaultSelection: Qe
    },
    {
      type: "maybeFindOne",
      operationName: ce,
      modelApiIdentifier: ce,
      findByVariableName: "id",
      defaultSelection: Qe
    },
    {
      type: "findMany",
      operationName: vt,
      modelApiIdentifier: ce,
      defaultSelection: Qe
    },
    {
      type: "findFirst",
      operationName: vt,
      modelApiIdentifier: ce,
      defaultSelection: Qe
    },
    {
      type: "maybeFindFirst",
      operationName: vt,
      modelApiIdentifier: ce,
      defaultSelection: Qe
    },
    {
      type: "findOne",
      operationName: vt,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ce,
      defaultSelection: Qe
    },
    {
      type: "action",
      operationName: "createAmbiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ce,
      modelSelectionField: ce,
      isBulk: !1,
      isDeleter: !1,
      variables: { ambiguous: { required: !1, type: "CreateAmbiguousInput" } },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Qe
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
      modelApiIdentifier: ce,
      modelSelectionField: vt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAmbiguousInput!]" } },
      defaultSelection: Qe
    },
    {
      type: "action",
      operationName: "updateAmbiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ce,
      modelSelectionField: ce,
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
      defaultSelection: Qe
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
      modelApiIdentifier: ce,
      modelSelectionField: vt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAmbiguousInput!]" } },
      defaultSelection: Qe
    },
    {
      type: "action",
      operationName: "deleteAmbiguous",
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
      operationName: "bulkDeleteAmbiguous",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ce,
      modelSelectionField: vt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Je = {
  __typename: !0,
  id: !0,
  createdAt: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, de = "unambiguous", St = "unambiguouss", mc = Ve(
  de,
  St,
  Je,
  [
    {
      type: "findOne",
      operationName: de,
      modelApiIdentifier: de,
      findByVariableName: "id",
      defaultSelection: Je
    },
    {
      type: "maybeFindOne",
      operationName: de,
      modelApiIdentifier: de,
      findByVariableName: "id",
      defaultSelection: Je
    },
    {
      type: "findMany",
      operationName: St,
      modelApiIdentifier: de,
      defaultSelection: Je
    },
    {
      type: "findFirst",
      operationName: St,
      modelApiIdentifier: de,
      defaultSelection: Je
    },
    {
      type: "maybeFindFirst",
      operationName: St,
      modelApiIdentifier: de,
      defaultSelection: Je
    },
    {
      type: "findOne",
      operationName: St,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: de,
      defaultSelection: Je
    },
    {
      type: "action",
      operationName: "createUnambiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: de,
      modelSelectionField: de,
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
      defaultSelection: Je
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
      modelApiIdentifier: de,
      modelSelectionField: St,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateUnambiguousInput!]" }
      },
      defaultSelection: Je
    },
    {
      type: "action",
      operationName: "updateUnambiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: de,
      modelSelectionField: de,
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
      defaultSelection: Je
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
      modelApiIdentifier: de,
      modelSelectionField: St,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateUnambiguousInput!]" }
      },
      defaultSelection: Je
    },
    {
      type: "action",
      operationName: "deleteUnambiguous",
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
      operationName: "bulkDeleteUnambiguous",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: de,
      modelSelectionField: St,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), ja = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, $a = "session", yc = "sessions", gc = Ve(
  $a,
  yc,
  ja,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: ja,
      modelApiIdentifier: $a
    }
  ]
);
var Lo;
const Ma = "production", bc = "development", vc = Symbol.for("gadget/modelRelationships"), Sc = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class Ic {
  constructor(t) {
    var i;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[Lo] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (a) => await ba(
        this.connection,
        "globalShopifySync",
        {
          apiKeys: {
            value: a.apiKeys,
            required: !1,
            type: "[String!]"
          },
          syncSince: {
            value: a.syncSince,
            required: !1,
            type: "DateTime"
          },
          models: {
            value: a.models,
            required: !1,
            type: "[String!]"
          },
          force: {
            value: a.force,
            required: !1,
            type: "Boolean"
          },
          startReason: {
            value: a.startReason,
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
      async () => await ba(
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
    ), this.transaction = async (a) => await this.connection.transaction(a), this.getDirectUploadToken = async () => (await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
      requestPolicy: "network-only"
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? Sc() ?? bc).toLocaleLowerCase();
    let n;
    this.apiRoots[this.environment] ? n = this.apiRoots[this.environment] : n = `https://related-products-example${this.environment == Ma ? "" : `--${this.environment}`}.gadget.app`;
    const r = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== Ma) {
      const a = ({ forward: s }) => (l) => {
        const u = s(l);
        return Ti(
          u,
          Ht((d) => {
            try {
              if (typeof window < "u" && typeof CustomEvent == "function") {
                const c = new CustomEvent("gadget:devharness:graphqlresult", { detail: d });
                window.dispatchEvent(c);
              }
            } catch (c) {
              console.warn("[gadget] error dispatching gadget dev harness event", c);
            }
            return d;
          })
        );
      };
      r.beforeAll = [
        a,
        ...r.beforeAll ?? []
      ];
    }
    if (this.connection = new Fo({
      endpoint: new URL("api/graphql", n).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: r,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == le.APIKey && !((i = t == null ? void 0 : t.authenticationMode) != null && i.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new ac(this.connection), this.session = new oc(this.connection), this.shopifyProduct = new sc(this.connection), this.shopifyProductImage = new lc(this.connection), this.shopifyProductOption = new uc(this.connection), this.shopifyProductVariant = new cc(this.connection), this.shopifyShop = new dc(this.connection), this.productPairing = new fc(this.connection), this.shopifySync = new pc(this.connection), this.ambiguous = new hc(this.connection), this.unambiguous = new mc(this.connection), this.currentSession = new gc(this.connection), this.internal = {
      user: new We("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new We("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new We("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new We("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new We("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new We("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new We("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new We("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new We("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new We("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new We("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(t, n, r) {
    const { data: i, error: a } = await this.connection.currentClient.query(t, n, r).toPromise();
    if (a)
      throw a;
    return i;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(t, n, r) {
    const { data: i, error: a } = await this.connection.currentClient.mutation(t, n, r).toPromise();
    if (a)
      throw a;
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
  async fetch(t, n = {}) {
    return await this.connection.fetch(t, n);
  }
  async enqueue(t, n, r) {
    ci(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let i, a;
    return typeof r < "u" ? (i = n, a = r) : !t.variables || Object.keys(t.variables).length == 0 ? (i = {}, a = n) : (typeof n == "string" ? i = { id: n } : i = n, a = {}), await hl(this.connection, t, i, a);
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
  handle(t, n) {
    return new er(this.connection, t, n);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
Lo = vc;
var Vo = {}, Sr = Ee.createContext(Vo), wc = Sr.Provider;
Sr.Consumer;
Sr.displayName = "UrqlContext";
var Uo = () => {
  var e = Ee.useContext(Sr);
  if (e === Vo && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, Ii = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, Nc = (e, t) => e === t || !(!e || !t || e.key !== t.key), Kr = (e, t) => {
  var n = {
    ...e,
    ...t,
    data: t.data !== void 0 || t.error ? t.data : e.data,
    fetching: !!t.fetching,
    stale: !!t.stale
  };
  return ((r, i) => {
    for (var a in r)
      if (!(a in i))
        return !0;
    for (var s in i)
      if (s === "operation" ? !Nc(r[s], i[s]) : r[s] !== i[s])
        return !0;
    return !1;
  })(e, n) ? n : e;
}, Ec = (e, t) => {
  for (var n = 0, r = t.length; n < r; n++)
    if (e[n] !== t[n])
      return !0;
  return !1;
}, Xr = Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function fr(e, t) {
  process.env.NODE_ENV !== "production" && Xr && Xr.ReactCurrentOwner && Xr.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function Oc(e) {
  var t = Ee.useRef(!0), n = Uo(), [r, i] = Ee.useState(Ii), a = Ee.useCallback((s, l) => (fr(i, {
    ...Ii,
    fetching: !0
  }), pr(Vn(1)(ae((u) => !u.hasNext)(Bt((u) => {
    t.current && fr(i, {
      fetching: !1,
      stale: u.stale,
      data: u.data,
      error: u.error,
      extensions: u.extensions,
      operation: u.operation
    });
  })(n.executeMutation(Pn(e, s), l || {})))))), [n, e, i]);
  return Ee.useEffect(() => (t.current = !0, () => {
    t.current = !1;
  }), []), [r, a];
}
function Ac(e, t) {
  var n = Ee.useRef(void 0);
  return Ee.useMemo(() => {
    var r = Pn(e, t);
    return n.current !== void 0 && n.current.key === r.key ? n.current : (n.current = r, r);
  }, [e, t]);
}
var Tc = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
    e.operations$ && qt((r) => {
      r.kind === "teardown" && t.has(r.key) && (t.delete(r.key), n.delete(r.key));
    })(e.operations$), e._react = {
      get: (r) => n.get(r),
      set(r, i) {
        t.delete(r), n.set(r, i);
      },
      dispose(r) {
        t.add(r);
      }
    };
  }
  return e._react;
}, kc = (e, t) => e.suspense && (!t || t.suspense !== !1);
function _c(e) {
  var t = Uo(), n = Tc(t), r = kc(t, e.context), i = Ac(e.query, e.variables), a = Ee.useMemo(() => {
    if (e.pause)
      return null;
    var m = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return r ? Bt((y) => {
      n.set(i.key, y);
    })(m) : m;
  }, [n, t, i, r, e.pause, e.requestPolicy, e.context]), s = Ee.useCallback((m, y) => {
    if (!m)
      return {
        fetching: !1
      };
    var g = n.get(i.key);
    if (g) {
      if (y && g != null && "then" in g)
        throw g;
    } else {
      var E, x = qt((w) => {
        g = w, E && E(g);
      })(Ga(() => y && !E || !g)(m));
      if (g == null && y) {
        var P = new Promise((w) => {
          E = w;
        });
        throw n.set(i.key, P), P;
      } else
        x.unsubscribe();
    }
    return g || {
      fetching: !0
    };
  }, [n, i]), l = [t, i, e.requestPolicy, e.context, e.pause], [u, d] = Ee.useState(() => [a, Kr(Ii, s(a, r)), l]), c = u[1];
  a !== u[0] && Ec(u[2], l) && d([a, c = Kr(u[1], s(a, r)), l]), Ee.useEffect(() => {
    var m = u[0], y = u[2][1], g = !1, E = (P) => {
      g = !0, fr(d, (w) => {
        var D = Kr(w[1], P);
        return w[1] !== D ? [w[0], D, w[2]] : w;
      });
    };
    if (m) {
      var x = qt(E)(Ei(() => {
        E({
          fetching: !1
        });
      })(m));
      return g || E({
        fetching: !0
      }), () => {
        n.dispose(y.key), x.unsubscribe();
      };
    } else
      E({
        fetching: !1
      });
  }, [n, u[0], u[2][1]]);
  var p = Ee.useCallback((m) => {
    var y = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...m
    };
    fr(d, (g) => [r ? Bt((E) => {
      n.set(i.key, E);
    })(t.executeQuery(i, y)) : t.executeQuery(i, y), g[1], l]);
  }, [t, n, i, r, s, e.requestPolicy, e.context]);
  return [c, p];
}
const Gi = Ae.createContext(void 0), Pc = Ae.createContext(void 0), xc = "/", Rc = "signOut", Dc = "/";
function Cc(e) {
  let t, n;
  if ("api" in e) {
    if (!Zo(e.api))
      throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    t = e.api, n = e.api.connection.currentClient;
  } else if (e.value)
    n = e.value;
  else
    throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
  n.suspense = !0;
  let r = xc, i = Rc, a = Dc;
  if ("auth" in e) {
    const { auth: s } = e;
    s != null && s.signInPath && (r = s.signInPath), s != null && s.signOutActionApiIdentifier && (i = s.signOutActionApiIdentifier), s != null && s.redirectOnSuccessfulSignInPath && (a = s.redirectOnSuccessfulSignInPath);
  }
  return Ae.createElement(
    Gi.Provider,
    { value: n },
    Ae.createElement(
      Pc.Provider,
      { value: {
        api: t,
        navigate: e.navigate,
        auth: {
          signInPath: r,
          signOutActionApiIdentifier: i,
          redirectOnSuccessfulSignInPath: a
        }
      } },
      Ae.createElement(wc, { value: n }, e.children)
    )
  );
}
const Bo = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Fc = (e, t) => {
  let n = "";
  return e !== void 0 ? n = `[Network] ${e.message}` : t !== void 0 ? t.forEach((r) => {
    n += `[GraphQL] ${r.message}
`;
  }) : n = "Unknown error", n.trim();
}, jc = (e) => typeof e == "string" ? new L(e) : e != null && e.message && !e.code ? new L(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class Vt extends Error {
  /** @private */
  static forClientSideError(t, n) {
    return new Vt({
      executionErrors: [t],
      response: n
    });
  }
  /** @private */
  static forErrorsResponse(t, n) {
    return new Vt({
      executionErrors: t.map(Pi),
      response: n
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new Vt({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, n, r = !1) {
    const i = el(t, n);
    let a = Vt.forMaybeCombinedError(t.error);
    return !a && i && !r && (a = Vt.forClientSideError(i)), a;
  }
  constructor({ networkError: t, executionErrors: n, response: r }) {
    const i = (n || []).map(jc), a = Fc(t, i);
    super(a), Object.defineProperty(this, "message", {
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
    }), this.message = a, this.executionErrors = i, this.graphQLErrors = i, this.networkError = t, this.response = r;
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
    const t = this.executionErrors.find((n) => n.code == "GGT_INVALID_RECORD");
    return (t == null ? void 0 : t.validationErrors) ?? null;
  }
}
const $c = (e) => {
  const { context: t, suspense: n, ...r } = e ?? {}, i = rr(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...r,
    context: i
  };
}, Mc = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), Lc = (e) => {
  if (!Ba(Gi))
    throw new Error(Bo);
  const t = $c(e);
  return _c(t);
};
var Vc = typeof Element < "u", Uc = typeof Map == "function", Bc = typeof Set == "function", qc = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function nr(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!nr(e[r], t[r]))
          return !1;
      return !0;
    }
    var a;
    if (Uc && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!nr(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (Bc && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (qc && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r]))
        return !1;
    if (Vc && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !nr(e[i[r]], t[i[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Gc = function(t, n) {
  try {
    return nr(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const zc = /* @__PURE__ */ Ho(Gc), Wc = (e) => {
  const t = qa();
  return e ? (t.current === void 0 || !zc(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, Qc = (e) => {
  if (!Ba(Gi))
    throw new Error(Bo);
  return Oc(e);
}, Jc = (e, t) => {
  const n = Wc(t), r = rr(() => $i(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, n), [e, n]), [i, a] = Lc(Mc(r, t));
  return [rr(() => {
    const l = [e.findMany.operationName];
    let u = i.data;
    if (u) {
      const c = rn(i.data, l);
      if (c) {
        const p = $n(i, c);
        u = an.boot(e, p, c);
      }
    }
    const d = Vt.errorIfDataAbsent(i, l, t == null ? void 0 : t.pause);
    return { ...i, data: u, error: d };
  }, [e, t == null ? void 0 : t.pause, i]), a];
};
var wi = { exports: {} }, On = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La;
function Yc() {
  if (La)
    return On;
  La = 1;
  var e = Ae, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, u, d) {
    var c, p = {}, m = null, y = null;
    d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (y = u.ref);
    for (c in u)
      r.call(u, c) && !a.hasOwnProperty(c) && (p[c] = u[c]);
    if (l && l.defaultProps)
      for (c in u = l.defaultProps, u)
        p[c] === void 0 && (p[c] = u[c]);
    return { $$typeof: t, type: l, key: m, ref: y, props: p, _owner: i.current };
  }
  return On.Fragment = n, On.jsx = s, On.jsxs = s, On;
}
var Xn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Va;
function Hc() {
  return Va || (Va = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ae, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.iterator, E = "@@iterator";
    function x(o) {
      if (o === null || typeof o != "object")
        return null;
      var f = g && o[g] || o[E];
      return typeof f == "function" ? f : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var f = arguments.length, h = new Array(f > 1 ? f - 1 : 0), v = 1; v < f; v++)
          h[v - 1] = arguments[v];
        D("error", o, h);
      }
    }
    function D(o, f, h) {
      {
        var v = P.ReactDebugCurrentFrame, O = v.getStackAddendum();
        O !== "" && (f += "%s", h = h.concat([O]));
        var k = h.map(function(N) {
          return String(N);
        });
        k.unshift("Warning: " + f), Function.prototype.apply.call(console[o], console, k);
      }
    }
    var b = !1, T = !1, S = !1, V = !1, Ce = !1, Fe;
    Fe = Symbol.for("react.module.reference");
    function Ue(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === a || Ce || o === i || o === d || o === c || V || o === y || b || T || S || typeof o == "object" && o !== null && (o.$$typeof === m || o.$$typeof === p || o.$$typeof === s || o.$$typeof === l || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Fe || o.getModuleId !== void 0));
    }
    function ut(o, f, h) {
      var v = o.displayName;
      if (v)
        return v;
      var O = f.displayName || f.name || "";
      return O !== "" ? h + "(" + O + ")" : h;
    }
    function ee(o) {
      return o.displayName || "Context";
    }
    function z(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            var f = o;
            return ee(f) + ".Consumer";
          case s:
            var h = o;
            return ee(h._context) + ".Provider";
          case u:
            return ut(o, o.render, "ForwardRef");
          case p:
            var v = o.displayName || null;
            return v !== null ? v : z(o.type) || "Memo";
          case m: {
            var O = o, k = O._payload, N = O._init;
            try {
              return z(N(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, U = 0, B, j, Q, ke, q, je, Be;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function et() {
      {
        if (U === 0) {
          B = console.log, j = console.info, Q = console.warn, ke = console.error, q = console.group, je = console.groupCollapsed, Be = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        U++;
      }
    }
    function te() {
      {
        if (U--, U === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, o, {
              value: B
            }),
            info: _({}, o, {
              value: j
            }),
            warn: _({}, o, {
              value: Q
            }),
            error: _({}, o, {
              value: ke
            }),
            group: _({}, o, {
              value: q
            }),
            groupCollapsed: _({}, o, {
              value: je
            }),
            groupEnd: _({}, o, {
              value: Be
            })
          });
        }
        U < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = P.ReactCurrentDispatcher, gt;
    function qe(o, f, h) {
      {
        if (gt === void 0)
          try {
            throw Error();
          } catch (O) {
            var v = O.stack.trim().match(/\n( *(at )?)/);
            gt = v && v[1] || "";
          }
        return `
` + gt + o;
      }
    }
    var Tt = !1, ct;
    {
      var Ir = typeof WeakMap == "function" ? WeakMap : Map;
      ct = new Ir();
    }
    function ln(o, f) {
      if (!o || Tt)
        return "";
      {
        var h = ct.get(o);
        if (h !== void 0)
          return h;
      }
      var v;
      Tt = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = Y.current, Y.current = null, et();
      try {
        if (f) {
          var N = function() {
            throw Error();
          };
          if (Object.defineProperty(N.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(N, []);
            } catch (se) {
              v = se;
            }
            Reflect.construct(o, [], N);
          } else {
            try {
              N.call();
            } catch (se) {
              v = se;
            }
            o.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (se) {
            v = se;
          }
          o();
        }
      } catch (se) {
        if (se && v && typeof se.stack == "string") {
          for (var I = se.stack.split(`
`), G = v.stack.split(`
`), R = I.length - 1, C = G.length - 1; R >= 1 && C >= 0 && I[R] !== G[C]; )
            C--;
          for (; R >= 1 && C >= 0; R--, C--)
            if (I[R] !== G[C]) {
              if (R !== 1 || C !== 1)
                do
                  if (R--, C--, C < 0 || I[R] !== G[C]) {
                    var H = `
` + I[R].replace(" at new ", " at ");
                    return o.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", o.displayName)), typeof o == "function" && ct.set(o, H), H;
                  }
                while (R >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        Tt = !1, Y.current = k, te(), Error.prepareStackTrace = O;
      }
      var Pe = o ? o.displayName || o.name : "", In = Pe ? qe(Pe) : "";
      return typeof o == "function" && ct.set(o, In), In;
    }
    function wr(o, f, h) {
      return ln(o, !1);
    }
    function Nr(o) {
      var f = o.prototype;
      return !!(f && f.isReactComponent);
    }
    function dt(o, f, h) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return ln(o, Nr(o));
      if (typeof o == "string")
        return qe(o);
      switch (o) {
        case d:
          return qe("Suspense");
        case c:
          return qe("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            return wr(o.render);
          case p:
            return dt(o.type, f, h);
          case m: {
            var v = o, O = v._payload, k = v._init;
            try {
              return dt(k(O), f, h);
            } catch {
            }
          }
        }
      return "";
    }
    var ft = Object.prototype.hasOwnProperty, un = {}, cn = P.ReactDebugCurrentFrame;
    function pt(o) {
      if (o) {
        var f = o._owner, h = dt(o.type, o._source, f ? f.type : null);
        cn.setExtraStackFrame(h);
      } else
        cn.setExtraStackFrame(null);
    }
    function Er(o, f, h, v, O) {
      {
        var k = Function.call.bind(ft);
        for (var N in o)
          if (k(o, N)) {
            var I = void 0;
            try {
              if (typeof o[N] != "function") {
                var G = Error((v || "React class") + ": " + h + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              I = o[N](f, N, v, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              I = R;
            }
            I && !(I instanceof Error) && (pt(O), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", h, N, typeof I), pt(null)), I instanceof Error && !(I.message in un) && (un[I.message] = !0, pt(O), w("Failed %s type: %s", h, I.message), pt(null));
          }
      }
    }
    var Or = Array.isArray;
    function kt(o) {
      return Or(o);
    }
    function Ar(o) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, h = f && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return h;
      }
    }
    function Tr(o) {
      try {
        return dn(o), !1;
      } catch {
        return !0;
      }
    }
    function dn(o) {
      return "" + o;
    }
    function fn(o) {
      if (Tr(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(o)), dn(o);
    }
    var Ge = P.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pn, hn, _t;
    _t = {};
    function _r(o) {
      if (ft.call(o, "ref")) {
        var f = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Pr(o) {
      if (ft.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function xr(o, f) {
      if (typeof o.ref == "string" && Ge.current && f && Ge.current.stateNode !== f) {
        var h = z(Ge.current.type);
        _t[h] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Ge.current.type), o.ref), _t[h] = !0);
      }
    }
    function Rr(o, f) {
      {
        var h = function() {
          pn || (pn = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function Dr(o, f) {
      {
        var h = function() {
          hn || (hn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var Cr = function(o, f, h, v, O, k, N) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: f,
        ref: h,
        props: N,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function Fr(o, f, h, v, O) {
      {
        var k, N = {}, I = null, G = null;
        h !== void 0 && (fn(h), I = "" + h), Pr(f) && (fn(f.key), I = "" + f.key), _r(f) && (G = f.ref, xr(f, O));
        for (k in f)
          ft.call(f, k) && !kr.hasOwnProperty(k) && (N[k] = f[k]);
        if (o && o.defaultProps) {
          var R = o.defaultProps;
          for (k in R)
            N[k] === void 0 && (N[k] = R[k]);
        }
        if (I || G) {
          var C = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          I && Rr(N, C), G && Dr(N, C);
        }
        return Cr(o, I, G, O, v, Ge.current, N);
      }
    }
    var Pt = P.ReactCurrentOwner, mn = P.ReactDebugCurrentFrame;
    function _e(o) {
      if (o) {
        var f = o._owner, h = dt(o.type, o._source, f ? f.type : null);
        mn.setExtraStackFrame(h);
      } else
        mn.setExtraStackFrame(null);
    }
    var xt;
    xt = !1;
    function Rt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function yn() {
      {
        if (Pt.current) {
          var o = z(Pt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function jr(o) {
      {
        if (o !== void 0) {
          var f = o.fileName.replace(/^.*[\\\/]/, ""), h = o.lineNumber;
          return `

Check your code at ` + f + ":" + h + ".";
        }
        return "";
      }
    }
    var gn = {};
    function $r(o) {
      {
        var f = yn();
        if (!f) {
          var h = typeof o == "string" ? o : o.displayName || o.name;
          h && (f = `

Check the top-level render call using <` + h + ">.");
        }
        return f;
      }
    }
    function bn(o, f) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var h = $r(f);
        if (gn[h])
          return;
        gn[h] = !0;
        var v = "";
        o && o._owner && o._owner !== Pt.current && (v = " It was passed a child from " + z(o._owner.type) + "."), _e(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, v), _e(null);
      }
    }
    function vn(o, f) {
      {
        if (typeof o != "object")
          return;
        if (kt(o))
          for (var h = 0; h < o.length; h++) {
            var v = o[h];
            Rt(v) && bn(v, f);
          }
        else if (Rt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var O = x(o);
          if (typeof O == "function" && O !== o.entries)
            for (var k = O.call(o), N; !(N = k.next()).done; )
              Rt(N.value) && bn(N.value, f);
        }
      }
    }
    function Mr(o) {
      {
        var f = o.type;
        if (f == null || typeof f == "string")
          return;
        var h;
        if (typeof f == "function")
          h = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          h = f.propTypes;
        else
          return;
        if (h) {
          var v = z(f);
          Er(h, o.props, "prop", v, o);
        } else if (f.PropTypes !== void 0 && !xt) {
          xt = !0;
          var O = z(f);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(o) {
      {
        for (var f = Object.keys(o.props), h = 0; h < f.length; h++) {
          var v = f[h];
          if (v !== "children" && v !== "key") {
            _e(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), _e(null);
            break;
          }
        }
        o.ref !== null && (_e(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    function Sn(o, f, h, v, O, k) {
      {
        var N = Ue(o);
        if (!N) {
          var I = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = jr(O);
          G ? I += G : I += yn();
          var R;
          o === null ? R = "null" : kt(o) ? R = "array" : o !== void 0 && o.$$typeof === t ? (R = "<" + (z(o.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : R = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, I);
        }
        var C = Fr(o, f, h, O, k);
        if (C == null)
          return C;
        if (N) {
          var H = f.children;
          if (H !== void 0)
            if (v)
              if (kt(H)) {
                for (var Pe = 0; Pe < H.length; Pe++)
                  vn(H[Pe], o);
                Object.freeze && Object.freeze(H);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vn(H, o);
        }
        return o === r ? Lr(C) : Mr(C), C;
      }
    }
    function Vr(o, f, h) {
      return Sn(o, f, h, !0);
    }
    function Ur(o, f, h) {
      return Sn(o, f, h, !1);
    }
    var Br = Ur, qr = Vr;
    Xn.Fragment = r, Xn.jsx = Br, Xn.jsxs = qr;
  }()), Xn;
}
process.env.NODE_ENV === "production" ? wi.exports = Yc() : wi.exports = Hc();
var Ua = wi.exports;
const Kc = zo(function({ open: e, onShow: t, onHide: n, children: r, ...i }, a) {
  const [s, l] = kn(), { titleBar: u, modalContent: d } = Wo.toArray(r).reduce(
    (p, m) => {
      const y = typeof m == "object" && "type" in m ? m.type : void 0;
      return y === "ui-title-bar" || typeof y == "object" && y.displayName === "ui-title-bar" ? {
        ...p,
        titleBar: m
      } : (p.modalContent.push(m), p);
    },
    { modalContent: [] }
  ), c = s ? Yo.createPortal(d, s.content) : null;
  return Le(() => {
    s && (e ? s.show() : s.hide());
  }, [s, e]), Le(() => {
    if (!(!s || !t))
      return s.addEventListener("show", t), () => {
        s.removeEventListener("show", t);
      };
  }, [s, t]), Le(() => {
    if (!(!s || !n))
      return s.addEventListener("hide", n), () => {
        s.removeEventListener("hide", n);
      };
  }, [s, n]), Le(() => {
    if (s)
      return () => {
        s.hide();
      };
  }, [s]), /* @__PURE__ */ Ua.jsxs(
    "ui-modal",
    {
      ...i,
      ref: (p) => {
        l(p), a && (typeof a == "function" ? a(p) : a.current = p);
      },
      children: [
        u,
        /* @__PURE__ */ Ua.jsx("div", { children: c })
      ]
    }
  );
});
Kc.displayName = "ui-modal";
const Xc = new Proxy(
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
function Zc() {
  if (typeof window > "u")
    return Xc;
  if (!window.shopify)
    throw Error(
      "The shopify global is not defined. This likely means the App Bridge script tag was not added correctly to this page"
    );
  return window.shopify;
}
var wt;
(function(e) {
  e[e.Standalone = 0] = "Standalone", e[e.Embedded = 1] = "Embedded";
})(wt || (wt = {}));
const ed = `
  mutation ShopifyFetchOrInstallShop($shopifySessionToken: String!) {
    shopifyConnection {
      fetchOrInstallShop(shopifySessionToken: $shopifySessionToken) {
        isAuthenticated
        redirectToOauth
        missingScopes
      }
    }
  }
`, td = Qo(({ children: e, gadgetAppUrl: t, originalQueryParams: n, api: r, type: i, host: a, isReady: s, isRootFrameRequest: l }) => {
  const u = Zc(), d = (n == null ? void 0 : n.has("hmac")) && (n == null ? void 0 : n.has("shop")), c = u.environment.embedded || u.environment.mobile, p = c && i === wt.Embedded, m = s && typeof a < "u" && !p, [y, g] = kn({
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !0,
    appBridge: u,
    isRootFrameRequest: !1
  }), [E, x] = kn(null), [P, w] = kn();
  Le(() => {
    u && u.idToken().then(x).catch(w);
  }, [u]), Le(() => {
    if (!E) {
      console.debug("[gadget-rsab] no app bridge, skipping client auth setup");
      return;
    }
    r.connection.setAuthenticationMode({
      custom: {
        async processFetch(ee, z) {
          const _ = new Headers(z.headers);
          _.append("Authorization", `ShopifySessionToken ${E}`), z.headers ?? (z.headers = {}), _.forEach(function(U, B) {
            z.headers[B] = U;
          });
        },
        async processTransactionConnectionParams(ee) {
          ee.auth.shopifySessionToken = E;
        }
      }
    }), console.debug("[gadget-rsab] set up client auth for session tokens");
  }, [r.connection, E]);
  let D = !1, b = !1, T = [];
  const S = qa(!1), [{ data: V, fetching: Ce, error: Fe }, Ue] = Qc(ed);
  V && (console.debug({ fetchOrInstallShopData: V }, "[gadget-rsab] fetched or installed shop data"), D = V.shopifyConnection.fetchOrInstallShop.redirectToOauth, b = V.shopifyConnection.fetchOrInstallShop.isAuthenticated, T = V.shopifyConnection.fetchOrInstallShop.missingScopes ?? []), Le(() => {
    S.current || E && (S.current = !0, Ue({ shopifySessionToken: E }).catch((ee) => {
      console.error({ err: ee }, "[gadget-rsab] error fetching or installing shop");
    }));
  }, [E, Ue]), Le(() => {
    if (!D || l)
      return;
    const ee = new URL("/api/connections/auth/shopify", t);
    ee.search = (n == null ? void 0 : n.toString()) ?? "";
    const z = ee.toString();
    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process", {
      appType: i,
      isInstallRequest: d,
      isEmbedded: c,
      redirectURL: z,
      gadgetAppUrl: t
    }), open(z, "_top");
  }, [t, l, n, D]);
  const ut = (m || D || Ce) && !l;
  return Le(() => {
    const ee = {
      isAuthenticated: b,
      isEmbedded: c,
      canAuth: !!u,
      loading: ut,
      appBridge: u,
      error: Fe || P,
      isRootFrameRequest: l
    };
    return console.debug("[gadget-rsab] context changed", ee), g(ee);
  }, [ut, c, u, b, Fe, P, l]), Le(() => {
    if (T.length > 0 && !D) {
      const ee = new CustomEvent("gadget:devharness:rsab.shopifyManagedInstallation.missingScopes", {
        detail: {
          missingScopes: T
        }
      });
      globalThis.dispatchEvent(ee);
    }
  }, [D, T]), Ae.createElement(qo.Provider, { value: y }, e);
}), nd = ({ isRootFrameRequest: e, children: t, query: n, gadgetAppUrl: r, type: i }) => {
  const a = (n == null ? void 0 : n.has("hmac")) && (n == null ? void 0 : n.has("shop")), s = a;
  return Le(() => {
    if (!s || e)
      return;
    const l = new URL("/api/connections/auth/shopify", r);
    l.search = (n == null ? void 0 : n.toString()) ?? "";
    const u = l.toString();
    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process in standalone mode or missing app bridge global", {
      appType: i,
      isInstallRequest: a,
      redirectURL: u,
      gadgetAppUrl: r
    }), window.location.assign(u);
  }, [r, e, n, s]), Ae.createElement(qo.Provider, { value: {
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !1,
    appBridge: null,
    isRootFrameRequest: e
  } }, t);
}, rd = ({ type: e, children: t, api: n }) => {
  const r = !!(globalThis && globalThis.shopify), [i, a] = kn(null), s = !!i, { query: l } = i ?? {}, u = (l == null ? void 0 : l.get("host")) ?? void 0, d = e ?? wt.Embedded, c = rr(() => l, [s]), p = !(l != null && l.has("hmac")) && !(l != null && l.has("shop")) && e == wt.Embedded, m = new URL(n.connection.options.endpoint).origin;
  if (Le(() => {
    a({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search)
    });
  }, []), console.debug("[gadget-rsab] provider rendering", {
    host: u,
    coalescedType: d,
    isReady: s
  }), d == wt.Embedded && !r && globalThis.top && globalThis.top !== globalThis.self) {
    let y;
    try {
      const g = document.referrer;
      y = new URL(g);
    } catch {
      const E = new CustomEvent("gadget:devharness:rsab.invalidReferrer", {
        detail: {
          url: document.referrer
        }
      });
      globalThis.dispatchEvent(E);
    }
    if (y && y.hostname === "admin.shopify.com")
      throw new Error("Expected app bridge to be defined in embedded context, but it was not. This is likely due to a missing script tag, see https://shopify.dev/docs/api/app-bridge-library");
  }
  if (d === wt.Embedded && globalThis.top === globalThis.self) {
    const y = new CustomEvent("gadget:devharness:rsab.embeddedInRootContext");
    globalThis.dispatchEvent(y);
  }
  return Ae.createElement(Cc, { api: n }, d === wt.Embedded && r ? Ae.createElement(td, { gadgetAppUrl: m, api: n, originalQueryParams: c, type: d, host: u, isReady: s, isRootFrameRequest: p }, t) : Ae.createElement(nd, { isRootFrameRequest: p, query: l, type: d, gadgetAppUrl: m }, t));
}, qo = Jo({
  loading: !0,
  isEmbedded: !1,
  isAuthenticated: !1,
  canAuth: !1,
  appBridge: null,
  isRootFrameRequest: !1
}), Go = new Ic(), id = () => {
  const [{ data: e }] = Jc(Go.shopifyProduct);
  return /* @__PURE__ */ ir.jsx(ir.Fragment, { children: JSON.stringify(e) });
}, ud = () => /* @__PURE__ */ ir.jsx(rd, { api: Go, shopifyApiKey: "deadbeef", children: /* @__PURE__ */ ir.jsx(id, {}) });
export {
  ud as A,
  id as R,
  sd as c,
  Ho as g
};
