import * as Ee from "react";
import Ae, { useMemo as Xn, useContext as Oa, useRef as Aa, forwardRef as To, useState as On, Children as ko, useEffect as Le, memo as _o, createContext as xo } from "react";
import Po from "react-dom";
var Ac = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ro(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gr = { exports: {} }, vn = {};
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
function Do() {
  if (Di)
    return vn;
  Di = 1;
  var e = Ae, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, d) {
    var c, p = {}, m = null, y = null;
    d !== void 0 && (m = "" + d), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (c in l)
      r.call(l, c) && !a.hasOwnProperty(c) && (p[c] = l[c]);
    if (u && u.defaultProps)
      for (c in l = u.defaultProps, l)
        p[c] === void 0 && (p[c] = l[c]);
    return { $$typeof: t, type: u, key: m, ref: y, props: p, _owner: i.current };
  }
  return vn.Fragment = n, vn.jsx = s, vn.jsxs = s, vn;
}
var Sn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ci;
function Co() {
  return Ci || (Ci = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ae, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.iterator, E = "@@iterator";
    function P(o) {
      if (o === null || typeof o != "object")
        return null;
      var f = g && o[g] || o[E];
      return typeof f == "function" ? f : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var f = arguments.length, h = new Array(f > 1 ? f - 1 : 0), v = 1; v < f; v++)
          h[v - 1] = arguments[v];
        D("error", o, h);
      }
    }
    function D(o, f, h) {
      {
        var v = x.ReactDebugCurrentFrame, O = v.getStackAddendum();
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
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === a || Ce || o === i || o === d || o === c || V || o === y || b || T || S || typeof o == "object" && o !== null && (o.$$typeof === m || o.$$typeof === p || o.$$typeof === s || o.$$typeof === u || o.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Fe || o.getModuleId !== void 0));
    }
    function lt(o, f, h) {
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
          case u:
            var f = o;
            return ee(f) + ".Consumer";
          case s:
            var h = o;
            return ee(h._context) + ".Provider";
          case l:
            return lt(o, o.render, "ForwardRef");
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
    var Y = x.ReactCurrentDispatcher, gt;
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
      var pr = typeof WeakMap == "function" ? WeakMap : Map;
      ct = new pr();
    }
    function an(o, f) {
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
      var xe = o ? o.displayName || o.name : "", bn = xe ? qe(xe) : "";
      return typeof o == "function" && ct.set(o, bn), bn;
    }
    function hr(o, f, h) {
      return an(o, !1);
    }
    function mr(o) {
      var f = o.prototype;
      return !!(f && f.isReactComponent);
    }
    function dt(o, f, h) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return an(o, mr(o));
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
          case l:
            return hr(o.render);
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
    var ft = Object.prototype.hasOwnProperty, on = {}, sn = x.ReactDebugCurrentFrame;
    function pt(o) {
      if (o) {
        var f = o._owner, h = dt(o.type, o._source, f ? f.type : null);
        sn.setExtraStackFrame(h);
      } else
        sn.setExtraStackFrame(null);
    }
    function yr(o, f, h, v, O) {
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
            I && !(I instanceof Error) && (pt(O), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", h, N, typeof I), pt(null)), I instanceof Error && !(I.message in on) && (on[I.message] = !0, pt(O), w("Failed %s type: %s", h, I.message), pt(null));
          }
      }
    }
    var gr = Array.isArray;
    function kt(o) {
      return gr(o);
    }
    function br(o) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, h = f && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return h;
      }
    }
    function vr(o) {
      try {
        return un(o), !1;
      } catch {
        return !0;
      }
    }
    function un(o) {
      return "" + o;
    }
    function ln(o) {
      if (vr(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(o)), un(o);
    }
    var Ge = x.ReactCurrentOwner, Sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, cn, dn, _t;
    _t = {};
    function Ir(o) {
      if (ft.call(o, "ref")) {
        var f = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function wr(o) {
      if (ft.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Nr(o, f) {
      if (typeof o.ref == "string" && Ge.current && f && Ge.current.stateNode !== f) {
        var h = z(Ge.current.type);
        _t[h] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Ge.current.type), o.ref), _t[h] = !0);
      }
    }
    function Er(o, f) {
      {
        var h = function() {
          cn || (cn = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function Or(o, f) {
      {
        var h = function() {
          dn || (dn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var Ar = function(o, f, h, v, O, k, N) {
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
    function Tr(o, f, h, v, O) {
      {
        var k, N = {}, I = null, G = null;
        h !== void 0 && (ln(h), I = "" + h), wr(f) && (ln(f.key), I = "" + f.key), Ir(f) && (G = f.ref, Nr(f, O));
        for (k in f)
          ft.call(f, k) && !Sr.hasOwnProperty(k) && (N[k] = f[k]);
        if (o && o.defaultProps) {
          var R = o.defaultProps;
          for (k in R)
            N[k] === void 0 && (N[k] = R[k]);
        }
        if (I || G) {
          var C = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          I && Er(N, C), G && Or(N, C);
        }
        return Ar(o, I, G, O, v, Ge.current, N);
      }
    }
    var xt = x.ReactCurrentOwner, fn = x.ReactDebugCurrentFrame;
    function _e(o) {
      if (o) {
        var f = o._owner, h = dt(o.type, o._source, f ? f.type : null);
        fn.setExtraStackFrame(h);
      } else
        fn.setExtraStackFrame(null);
    }
    var Pt;
    Pt = !1;
    function Rt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function pn() {
      {
        if (xt.current) {
          var o = z(xt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function kr(o) {
      {
        if (o !== void 0) {
          var f = o.fileName.replace(/^.*[\\\/]/, ""), h = o.lineNumber;
          return `

Check your code at ` + f + ":" + h + ".";
        }
        return "";
      }
    }
    var hn = {};
    function _r(o) {
      {
        var f = pn();
        if (!f) {
          var h = typeof o == "string" ? o : o.displayName || o.name;
          h && (f = `

Check the top-level render call using <` + h + ">.");
        }
        return f;
      }
    }
    function mn(o, f) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var h = _r(f);
        if (hn[h])
          return;
        hn[h] = !0;
        var v = "";
        o && o._owner && o._owner !== xt.current && (v = " It was passed a child from " + z(o._owner.type) + "."), _e(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, v), _e(null);
      }
    }
    function yn(o, f) {
      {
        if (typeof o != "object")
          return;
        if (kt(o))
          for (var h = 0; h < o.length; h++) {
            var v = o[h];
            Rt(v) && mn(v, f);
          }
        else if (Rt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var O = P(o);
          if (typeof O == "function" && O !== o.entries)
            for (var k = O.call(o), N; !(N = k.next()).done; )
              Rt(N.value) && mn(N.value, f);
        }
      }
    }
    function xr(o) {
      {
        var f = o.type;
        if (f == null || typeof f == "string")
          return;
        var h;
        if (typeof f == "function")
          h = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          h = f.propTypes;
        else
          return;
        if (h) {
          var v = z(f);
          yr(h, o.props, "prop", v, o);
        } else if (f.PropTypes !== void 0 && !Pt) {
          Pt = !0;
          var O = z(f);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pr(o) {
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
    function gn(o, f, h, v, O, k) {
      {
        var N = Ue(o);
        if (!N) {
          var I = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = kr(O);
          G ? I += G : I += pn();
          var R;
          o === null ? R = "null" : kt(o) ? R = "array" : o !== void 0 && o.$$typeof === t ? (R = "<" + (z(o.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : R = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, I);
        }
        var C = Tr(o, f, h, O, k);
        if (C == null)
          return C;
        if (N) {
          var H = f.children;
          if (H !== void 0)
            if (v)
              if (kt(H)) {
                for (var xe = 0; xe < H.length; xe++)
                  yn(H[xe], o);
                Object.freeze && Object.freeze(H);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yn(H, o);
        }
        return o === r ? Pr(C) : xr(C), C;
      }
    }
    function Rr(o, f, h) {
      return gn(o, f, h, !0);
    }
    function Dr(o, f, h) {
      return gn(o, f, h, !1);
    }
    var Cr = Dr, Fr = Rr;
    Sn.Fragment = r, Sn.jsx = Cr, Sn.jsxs = Fr;
  }()), Sn;
}
process.env.NODE_ENV === "production" ? Gr.exports = Do() : Gr.exports = Co();
var Zn = Gr.exports;
const Fo = (e) => e && "connection" in e && e.connection && "endpoint" in e.connection;
var fi = () => {
}, Te = fi;
function He(e) {
  return {
    tag: 0,
    0: e
  };
}
function Fn(e) {
  return {
    tag: 1,
    0: e
  };
}
var jo = (e) => e;
function ae(e) {
  return (t) => (n) => {
    var r = Te;
    t((i) => {
      i === 0 ? n(0) : i.tag === 0 ? (r = i[0], n(i)) : e(i[0]) ? n(i) : r(0);
    });
  };
}
function Jt(e) {
  return (t) => (n) => t((r) => {
    r === 0 || r.tag === 0 ? n(r) : n(Fn(e(r[0])));
  });
}
function Pn(e) {
  return (t) => (n) => {
    var r = [], i = Te, a = !1, s = !1;
    t((u) => {
      s || (u === 0 ? (s = !0, r.length || n(0)) : u.tag === 0 ? i = u[0] : (a = !1, function(d) {
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
      }(e(u[0])), a || (a = !0, i(0))));
    }), n(He((u) => {
      if (u === 1) {
        s || (s = !0, i(1));
        for (var l = 0, d = r, c = r.length; l < c; l++)
          d[l](1);
        r.length = 0;
      } else {
        !s && !a ? (a = !0, i(0)) : a = !1;
        for (var p = 0, m = r, y = r.length; p < y; p++)
          m[p](0);
      }
    }));
  };
}
function $o(e) {
  return Pn(jo)(e);
}
function Ht(e) {
  return $o(Vo(e));
}
function pi(e) {
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
function Ut(e) {
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
function Fi(e) {
  return (t) => (n) => t((r) => {
    r === 0 ? n(0) : r.tag === 0 ? (n(r), e()) : n(r);
  });
}
function Rn(e) {
  var t = [], n = Te, r = !1;
  return (i) => {
    t.push(i), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var s = 0, u = t, l = t.length; s < l; s++)
          u[s](0);
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
function ji(e) {
  return (t) => (n) => {
    var r = Te, i = Te, a = !1, s = !1, u = !1, l = !1;
    t((d) => {
      l || (d === 0 ? (l = !0, u || n(0)) : d.tag === 0 ? r = d[0] : (u && (i(1), i = Te), a ? a = !1 : (a = !0, r(0)), function(p) {
        u = !0, p((m) => {
          u && (m === 0 ? (u = !1, l ? n(0) : a || (a = !0, r(0))) : m.tag === 0 ? (s = !1, (i = m[0])(0)) : (n(m), s ? s = !1 : i(0)));
        });
      }(e(d[0]))));
    }), n(He((d) => {
      d === 1 ? (l || (l = !0, r(1)), u && (u = !1, i(1))) : (!l && !a && (a = !0, r(0)), u && !s && (s = !0, i(0)));
    }));
  };
}
function jn(e) {
  return (t) => (n) => {
    var r = Te, i = !1, a = 0;
    t((s) => {
      i || (s === 0 ? (i = !0, n(0)) : s.tag === 0 ? e <= 0 ? (i = !0, n(0), s[0](1)) : r = s[0] : a++ < e ? (n(s), !i && a >= e && (i = !0, n(0), r(1))) : n(s));
    }), n(He((s) => {
      s === 1 && !i ? (i = !0, r(1)) : s === 0 && !i && a < e && r(0);
    }));
  };
}
function hi(e) {
  return (t) => (n) => {
    var r = Te, i = Te, a = !1;
    t((s) => {
      a || (s === 0 ? (a = !0, i(1), n(0)) : s.tag === 0 ? (r = s[0], e((u) => {
        u === 0 || (u.tag === 0 ? (i = u[0])(0) : (a = !0, i(1), r(1), n(0)));
      })) : n(s));
    }), n(He((s) => {
      s === 1 && !a ? (a = !0, r(1), i(1)) : a || r(0);
    }));
  };
}
function Ta(e, t) {
  return (n) => (r) => {
    var i = Te, a = !1;
    n((s) => {
      a || (s === 0 ? (a = !0, r(0)) : s.tag === 0 ? (i = s[0], r(s)) : e(s[0]) ? r(s) : (a = !0, t && r(s), r(0), i(1)));
    });
  };
}
function Mo(e) {
  return (t) => e()(t);
}
function ka(e) {
  return (t) => {
    var n = e[Symbol.asyncIterator](), r = !1, i = !1, a = !1, s;
    t(He(async (u) => {
      if (u === 1)
        r = !0, n.return && n.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !r; )
          if ((s = await n.next()).done)
            r = !0, n.return && await n.return(), t(0);
          else
            try {
              a = !1, t(Fn(s.value));
            } catch (l) {
              if (n.throw)
                (r = !!(await n.throw(l)).done) && t(0);
              else
                throw l;
            }
        i = !1;
      }
    }));
  };
}
function Lo(e) {
  return e[Symbol.asyncIterator] ? ka(e) : (t) => {
    var n = e[Symbol.iterator](), r = !1, i = !1, a = !1, s;
    t(He((u) => {
      if (u === 1)
        r = !0, n.return && n.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !r; )
          if ((s = n.next()).done)
            r = !0, n.return && n.return(), t(0);
          else
            try {
              a = !1, t(Fn(s.value));
            } catch (l) {
              if (n.throw)
                (r = !!n.throw(l).done) && t(0);
              else
                throw l;
            }
        i = !1;
      }
    }));
  };
}
var Vo = Lo;
function An(e) {
  return (t) => {
    var n = !1;
    t(He((r) => {
      r === 1 ? n = !0 : n || (n = !0, t(Fn(e)), t(0));
    }));
  };
}
function mi(e) {
  return (t) => {
    var n = !1, r = e({
      next(i) {
        n || t(Fn(i));
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
function $i() {
  var e, t;
  return {
    source: Rn(mi((n) => (e = n.next, t = n.complete, fi))),
    next(n) {
      e && e(n);
    },
    complete() {
      t && t();
    }
  };
}
function Mi(e) {
  return mi((t) => (e.then((n) => {
    Promise.resolve(n).then(() => {
      t.next(n), t.complete();
    });
  }), fi));
}
function Bt(e) {
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
function Uo(e) {
  Bt((t) => {
  })(e);
}
var jr = {
  done: !0
}, Bo = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], n = !1, r = Te, i;
    return e((a) => {
      n || (a === 0 ? (i && (i = i(jr)), n = !0) : a.tag === 0 ? (r = a[0])(0) : i ? i = i({
        value: a[0],
        done: !1
      }) : t.push(a[0]));
    }), {
      async next() {
        return n && !t.length ? jr : (!n && t.length <= 1 && r(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((a) => i = a));
      },
      async return() {
        return n || (i = r(1)), n = !0, jr;
      }
    };
  }
});
function ar(e) {
  return new Promise((t) => {
    var n = Te, r;
    e((i) => {
      i === 0 ? Promise.resolve(r).then(t) : i.tag === 0 ? (n = i[0])(0) : (r = i[0], n(0));
    });
  });
}
var yi = (...e) => {
  for (var t = e[0], n = 1, r = e.length; n < r; n++)
    t = e[n](t);
  return t;
}, Qt = {
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
let zr = class extends Error {
  constructor(t, n, r, i, a, s, u) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), n && (this.nodes = Array.isArray(n) ? n : [n]), r && (this.source = r), i && (this.positions = i), s && (this.originalError = s);
    var l = u;
    if (!l && s) {
      var d = s.extensions;
      d && typeof d == "object" && (l = d);
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
};
var K, F;
function oe(e) {
  return new zr(`Syntax Error: Unexpected token at ${F} in ${e}`);
}
function De(e) {
  if (e.lastIndex = F, e.test(K))
    return K.slice(F, F = e.lastIndex);
}
var Un = / +(?=[^\s])/y;
function qo(e) {
  for (var t = e.split(`
`), n = "", r = 0, i = 0, a = t.length - 1, s = 0; s < t.length; s++)
    Un.lastIndex = 0, Un.test(t[s]) && (s && (!r || Un.lastIndex < r) && (r = Un.lastIndex), i = i || s, a = s);
  for (var u = i; u <= a; u++)
    u !== i && (n += `
`), n += t[u].slice(r).replace(/\\"""/g, '"""');
  return n;
}
function $() {
  for (var e = 0 | K.charCodeAt(F++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | K.charCodeAt(F++))
    if (e === 35)
      for (; (e = K.charCodeAt(F++)) !== 10 && e !== 13; )
        ;
  F--;
}
var _a = /[_A-Za-z]\w*/y;
function ut() {
  var e;
  if (e = De(_a))
    return {
      kind: "Name",
      value: e
    };
}
var Go = /(?:null|true|false)/y, xa = /\$[_A-Za-z]\w*/y, zo = /-?\d+/y, Wo = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Qo = /\\/g, Jo = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Yo = /"(?:"|[^\r\n]*?[^\\]")/y;
function er(e) {
  var t, n;
  if (n = De(Go))
    t = n === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: n === "true"
    };
  else if (!e && (n = De(xa)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: n.slice(1)
      }
    };
  else if (n = De(zo)) {
    var r = n;
    (n = De(Wo)) ? t = {
      kind: "FloatValue",
      value: r + n
    } : t = {
      kind: "IntValue",
      value: r
    };
  } else if (n = De(_a))
    t = {
      kind: "EnumValue",
      value: n
    };
  else if (n = De(Jo))
    t = {
      kind: "StringValue",
      value: qo(n.slice(3, -3)),
      block: !0
    };
  else if (n = De(Yo))
    t = {
      kind: "StringValue",
      value: Qo.test(n) ? JSON.parse(n) : n.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var s;
    if (K.charCodeAt(F) === 91) {
      F++, $();
      for (var u = []; s = er(a); )
        u.push(s);
      if (K.charCodeAt(F++) !== 93)
        throw oe("ListValue");
      return $(), {
        kind: "ListValue",
        values: u
      };
    }
  }(e) || function(a) {
    if (K.charCodeAt(F) === 123) {
      F++, $();
      for (var s = [], u; u = ut(); ) {
        if ($(), K.charCodeAt(F++) !== 58)
          throw oe("ObjectField");
        $();
        var l = er(a);
        if (!l)
          throw oe("ObjectField");
        s.push({
          kind: "ObjectField",
          name: u,
          value: l
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
function Pa(e) {
  var t = [];
  if ($(), K.charCodeAt(F) === 40) {
    F++, $();
    for (var n; n = ut(); ) {
      if ($(), K.charCodeAt(F++) !== 58)
        throw oe("Argument");
      $();
      var r = er(e);
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
function Kt(e) {
  var t = [];
  for ($(); K.charCodeAt(F) === 64; ) {
    F++;
    var n = ut();
    if (!n)
      throw oe("Directive");
    $(), t.push({
      kind: "Directive",
      name: n,
      arguments: Pa(e)
    });
  }
  return t;
}
function Ho() {
  var e = ut();
  if (e) {
    $();
    var t;
    if (K.charCodeAt(F) === 58) {
      if (F++, $(), t = e, !(e = ut()))
        throw oe("Field");
      $();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: Pa(!1),
      directives: Kt(!1),
      selectionSet: or()
    };
  }
}
function Ra() {
  var e;
  if ($(), K.charCodeAt(F) === 91) {
    F++, $();
    var t = Ra();
    if (!t || K.charCodeAt(F++) !== 93)
      throw oe("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = ut())
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
var Ko = /on/y;
function Da() {
  if (De(Ko)) {
    $();
    var e = ut();
    if (!e)
      throw oe("NamedType");
    return $(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Xo = /\.\.\./y;
function Zo() {
  if (De(Xo)) {
    $();
    var e = F, t;
    if ((t = ut()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Kt(!1)
      };
    F = e;
    var n = Da(), r = Kt(!1), i = or();
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
function or() {
  var e;
  if ($(), K.charCodeAt(F) === 123) {
    F++, $();
    for (var t = []; e = Zo() || Ho(); )
      t.push(e);
    if (!t.length || K.charCodeAt(F++) !== 125)
      throw oe("SelectionSet");
    return $(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var es = /fragment/y;
function ts() {
  if (De(es)) {
    $();
    var e = ut();
    if (!e)
      throw oe("FragmentDefinition");
    $();
    var t = Da();
    if (!t)
      throw oe("FragmentDefinition");
    var n = Kt(!1), r = or();
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
var ns = /(?:query|mutation|subscription)/y;
function rs() {
  var e, t, n = [], r = [];
  (e = De(ns)) && ($(), t = ut(), n = function() {
    var s, u = [];
    if ($(), K.charCodeAt(F) === 40) {
      for (F++, $(); s = De(xa); ) {
        if ($(), K.charCodeAt(F++) !== 58)
          throw oe("VariableDefinition");
        var l = Ra(), d = void 0;
        if (K.charCodeAt(F) === 61 && (F++, $(), !(d = er(!0))))
          throw oe("VariableDefinition");
        $(), u.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: s.slice(1)
            }
          },
          type: l,
          defaultValue: d,
          directives: Kt(!0)
        });
      }
      if (K.charCodeAt(F++) !== 41)
        throw oe("VariableDefinition");
      $();
    }
    return u;
  }(), r = Kt(!1));
  var i = or();
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
function is(e, t) {
  return K = typeof e.body == "string" ? e.body : e, F = 0, function() {
    var r;
    $();
    for (var i = []; r = ts() || rs(); )
      i.push(r);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function as(e) {
  return JSON.stringify(e);
}
function os(e) {
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
  StringValue: (e) => e.block ? os(e.value) : as(e.value),
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
var ss = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new zr(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new zr(e);
class $n extends Error {
  constructor(t) {
    var n = (t.graphQLErrors || []).map(ss), r = ((i, a) => {
      var s = "";
      if (i)
        return `[Network] ${i.message}`;
      if (a)
        for (var u of a)
          s && (s += `
`), s += `[GraphQL] ${u.message}`;
      return s;
    })(t.networkError, n);
    super(r), this.name = "CombinedError", this.message = r, this.graphQLErrors = n, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var Wr = (e, t) => {
  for (var n = 0 | (t || 5381), r = 0, i = 0 | e.length; r < i; r++)
    n = (n << 5) + n + e.charCodeAt(r);
  return n;
}, Vt = /* @__PURE__ */ new Set(), Li = /* @__PURE__ */ new WeakMap(), zt = (e) => {
  if (e === null || Vt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return zt(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var n of e)
      t.length > 1 && (t += ","), t += zt(n) || "null";
    return t += "]";
  } else if (nr !== Xt && e instanceof nr || rr !== Xt && e instanceof rr)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var i = Li.get(e) || Math.random().toString(36).slice(2);
    return Li.set(e, i), zt({
      __key: i
    });
  }
  Vt.add(e);
  var a = "{";
  for (var s of r) {
    var u = zt(e[s]);
    u && (a.length > 1 && (a += ","), a += zt(s) + ":" + u);
  }
  return Vt.delete(e), a += "}";
}, Qr = (e, t, n) => {
  if (!(n == null || typeof n != "object" || n.toJSON || Vt.has(n)))
    if (Array.isArray(n))
      for (var r = 0, i = n.length; r < i; r++)
        Qr(e, `${t}.${r}`, n[r]);
    else if (n instanceof nr || n instanceof rr)
      e.set(t, n);
    else {
      Vt.add(n);
      for (var a of Object.keys(n))
        Qr(e, `${t}.${a}`, n[a]);
    }
}, tr = (e) => (Vt.clear(), zt(e));
class Xt {
}
var nr = typeof File < "u" ? File : Xt, rr = typeof Blob < "u" ? Blob : Xt, us = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, ls = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, cs = (e, t) => t % 2 == 0 ? e.replace(ls, `
`) : e, Vi = (e) => e.split(us).map(cs).join("").trim(), Ui = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map(), gi = (e) => {
  var t;
  return typeof e == "string" ? t = Vi(e) : e.loc && Jn.get(e.__key) === e ? t = e.loc.source.body : (t = Ui.get(e) || Vi(Me(e)), Ui.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Bi = (e) => {
  var t = Wr(gi(e));
  if (e.definitions) {
    var n = Fa(e);
    n && (t = Wr(`
# ${n}`, t));
  }
  return t;
}, Ca = (e) => {
  var t, n;
  return typeof e == "string" ? (t = Bi(e), n = Jn.get(t) || is(e)) : (t = e.__key || Bi(e), n = Jn.get(t) || e), n.loc || gi(n), n.__key = t, Jn.set(t, n), n;
}, Tn = (e, t, n) => {
  var r = t || {}, i = Ca(e), a = tr(r), s = i.__key;
  return a !== "{}" && (s = Wr(a, s)), {
    key: s,
    query: i,
    variables: r,
    extensions: n
  };
}, Fa = (e) => {
  for (var t of e.definitions)
    if (t.kind === Qt.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, ds = (e) => {
  for (var t of e.definitions)
    if (t.kind === Qt.OPERATION_DEFINITION)
      return t.operation;
}, Jr = (e, t, n) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var r = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new $n({
      graphQLErrors: t.errors,
      response: n
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? r : t.hasNext,
    stale: !1
  };
}, Yr = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var n of Object.keys(t))
      e[n] = Yr(e[n], t[n]);
    return e;
  }
  return t;
}, Hr = (e, t, n) => {
  var r = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, s = t.incremental;
  "path" in t && (s = [t]);
  var u = {
    data: e.data
  };
  if (s)
    for (var l of s) {
      Array.isArray(l.errors) && r.push(...l.errors), l.extensions && (Object.assign(a, l.extensions), i = !0);
      for (var d = "data", c = u, p = 0, m = l.path.length; p < m; d = l.path[p++])
        c = c[d] = Array.isArray(c[d]) ? [...c[d]] : {
          ...c[d]
        };
      if (l.items)
        for (var y = +d >= 0 ? d : 0, g = 0, E = l.items.length; g < E; g++)
          c[y + g] = Yr(c[y + g], l.items[g]);
      else
        l.data !== void 0 && (c[d] = Yr(c[d], l.data));
    }
  else
    u.data = t.data || e.data, r = t.errors || r;
  return {
    operation: e.operation,
    data: u.data,
    error: r.length ? new $n({
      graphQLErrors: r,
      response: n
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, ja = (e, t, n) => ({
  operation: e,
  data: void 0,
  error: new $n({
    networkError: t,
    response: n
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function $a(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : gi(e.query),
    operationName: Fa(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var fs = (e, t) => {
  var n = e.kind === "query" && e.context.preferGetMethod;
  if (!n || !t)
    return e.context.url;
  var r = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && r.searchParams.set(i, typeof a == "object" ? tr(a) : a);
  }
  var s = r.toString();
  return s.length > 2047 && n !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s;
}, ps = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var n = tr(t), r = ((u) => {
      var l = /* @__PURE__ */ new Map();
      return (nr !== Xt || rr !== Xt) && (Vt.clear(), Qr(l, "variables", u)), l;
    })(t.variables);
    if (r.size) {
      var i = new FormData();
      i.append("operations", n), i.append("map", tr({
        ...[...r.keys()].map((u) => [u])
      }));
      var a = 0;
      for (var s of r.values())
        i.append("" + a++, s);
      return i;
    }
    return n;
  }
}, hs = (e, t) => {
  var n = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, r = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (r.headers)
    for (var i in r.headers)
      n[i.toLowerCase()] = r.headers[i];
  var a = ps(e, t);
  return typeof a == "string" && !n["content-type"] && (n["content-type"] = "application/json"), {
    ...r,
    method: a ? "POST" : "GET",
    body: a,
    headers: n
  };
}, ms = typeof TextDecoder < "u" ? new TextDecoder() : null, ys = /boundary="?([^=";]+)"?/i, gs = /data: ?([^\n]+)/, qi = (e) => e.constructor.name === "Buffer" ? e.toString() : ms.decode(e);
async function* Gi(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield qi(t);
  else {
    var n = e.body.getReader(), r;
    try {
      for (; !(r = await n.read()).done; )
        yield qi(r.value);
    } finally {
      n.cancel();
    }
  }
}
async function* zi(e, t) {
  var n = "", r;
  for await (var i of e)
    for (n += i; (r = n.indexOf(t)) > -1; )
      yield n.slice(0, r), n = n.slice(r + t.length);
}
async function* bs(e, t, n) {
  var r = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var s = (a = await (e.context.fetch || fetch)(t, n)).headers.get("Content-Type") || "", u;
    if (/multipart\/mixed/i.test(s))
      u = async function* (c, p) {
        var m = c.match(ys), y = "--" + (m ? m[1] : "-"), g = !0, E;
        for await (var P of zi(Gi(p), `\r
` + y)) {
          if (g) {
            g = !1;
            var x = P.indexOf(y);
            if (x > -1)
              P = P.slice(x + y.length);
            else
              continue;
          }
          try {
            yield E = JSON.parse(P.slice(P.indexOf(`\r
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
      u = async function* (c) {
        var p;
        for await (var m of zi(Gi(c), `

`)) {
          var y = m.match(gs);
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
      u = async function* (c) {
        yield JSON.parse(await c.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var l of u)
      i = i ? Hr(i, l, a) : Jr(e, l, a), r = !1, yield i, r = !0;
    i || (yield i = Jr(e, {}, a));
  } catch (d) {
    if (!r)
      throw d;
    yield ja(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : d, a);
  }
}
function vs(e, t, n) {
  var r;
  return typeof AbortController < "u" && (n.signal = (r = new AbortController()).signal), pi(() => {
    r && r.abort();
  })(ae((i) => !!i)(ka(bs(e, t, n))));
}
var Kr = (e, t) => {
  if (Array.isArray(e))
    for (var n of e)
      Kr(n, t);
  else if (typeof e == "object" && e !== null)
    for (var r in e)
      r === "__typename" && typeof e[r] == "string" ? t.add(e[r]) : Kr(e[r], t);
  return t;
}, Xr = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var n = [];
    for (var r of e.definitions) {
      var i = Xr(r);
      t = t || i !== r, n.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: n
      };
  } else if ("selectionSet" in e) {
    var a = [], s = e.kind === Qt.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var u of e.selectionSet.selections || []) {
        s = s || u.kind === Qt.FIELD && u.name.value === "__typename" && !u.alias;
        var l = Xr(u);
        t = t || l !== u, a.push(l);
      }
      if (s || (t = !0, a.push({
        kind: Qt.FIELD,
        name: {
          kind: Qt.NAME,
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
}, Wi = /* @__PURE__ */ new Map(), Ss = (e) => {
  var t = Ca(e), n = Wi.get(t.__key);
  return n || (Wi.set(t.__key, n = Xr(t)), Object.defineProperty(n, "__key", {
    value: t.__key,
    enumerable: !1
  })), n;
}, Zr = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => Zr(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var n = {};
    for (var r in e)
      r === "__typename" ? Object.defineProperty(n, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : n[r] = Zr(e[r]);
    return n;
  } else
    return e;
};
function Qi(e) {
  var t = (n) => e(n);
  return t.toPromise = () => ar(jn(1)(ae((n) => !n.stale && !n.hasNext)(t))), t.then = (n, r) => t.toPromise().then(n, r), t.subscribe = (n) => Bt(n)(t), t;
}
function Zt(e, t, n) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...n
    } : n || t.context
  };
}
var Ji = (e, t) => Zt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), Is = () => {
}, $r = ({ kind: e }) => e !== "mutation" && e !== "query", ws = ({ forward: e, client: t, dispatchDebug: n }) => {
  var r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (u) => {
    var l = Zt(u.kind, u);
    return l.query = Ss(u.query), l;
  }, s = (u) => u.kind === "query" && u.context.requestPolicy !== "network-only" && (u.context.requestPolicy === "cache-only" || r.has(u.key));
  return (u) => {
    var l = Jt((c) => {
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
        operation: process.env.NODE_ENV !== "production" ? Ji(c, {
          cacheOutcome: p ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (m.stale = !0, Yi(t, c)), m;
    })(ae((c) => !$r(c) && s(c))(u)), d = Ut((c) => {
      var { operation: p } = c;
      if (p) {
        var m = p.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (m = ((S) => [...Kr(S, /* @__PURE__ */ new Set())])(c.data).concat(m)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
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
            var E = m[g], P = i.get(E);
            P || i.set(E, P = /* @__PURE__ */ new Set());
            for (var x of P.values())
              y.add(x);
            P.clear();
          }
          for (var w of y.values())
            r.has(w) && (p = r.get(w).operation, r.delete(w), Yi(t, p));
        } else if (p.kind === "query" && c.data) {
          r.set(p.key, c);
          for (var D = 0; D < m.length; D++) {
            var b = m[D], T = i.get(b);
            T || i.set(b, T = /* @__PURE__ */ new Set()), T.add(p.key);
          }
        }
      }
    })(e(ae((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(Jt((c) => process.env.NODE_ENV !== "production" ? Ji(c, {
      cacheOutcome: "miss"
    }) : c)(Ht([Jt(a)(ae((c) => !$r(c) && !s(c))(u)), ae((c) => $r(c))(u)])))));
    return Ht([l, d]);
  };
}, Yi = (e, t) => e.reexecuteOperation(Zt(t.kind, t, {
  requestPolicy: "network-only"
})), Mr = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: n }) => ({ client: r, forward: i }) => {
  var a = n || ((s) => s.kind === "subscription" || !!t && (s.kind === "query" || s.kind === "mutation"));
  return (s) => {
    var u = Pn((d) => {
      var { key: c } = d, p = ae((m) => m.kind === "teardown" && m.key === c)(s);
      return hi(p)(((m) => {
        var y = e($a(m), m);
        return mi(({ next: g, complete: E }) => {
          var P = !1, x, w;
          return Promise.resolve().then(() => {
            P || (x = y.subscribe({
              next(D) {
                g(w = w ? Hr(w, D) : Jr(m, D));
              },
              error(D) {
                g(ja(m, D));
              },
              complete() {
                P || (P = !0, m.kind === "subscription" && r.reexecuteOperation(Zt("teardown", m, m.context)), w && w.hasNext && g(Hr(w, {
                  hasNext: !1
                })), E());
              }
            }));
          }), () => {
            P = !0, x && x.unsubscribe();
          };
        });
      })(d));
    })(ae((d) => d.kind !== "teardown" && a(d))(s)), l = i(ae((d) => d.kind === "teardown" || !a(d))(s));
    return Ht([u, l]);
  };
}, Ns = ({ forward: e, dispatchDebug: t }) => (n) => {
  var r = Pn((a) => {
    var s = $a(a), u = fs(a, s), l = hs(a, s);
    process.env.NODE_ENV !== "production" && t({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: a,
      data: {
        url: u,
        fetchOptions: l
      },
      source: "fetchExchange"
    });
    var d = hi(ae((c) => c.kind === "teardown" && c.key === a.key)(n))(vs(a, u, l));
    return process.env.NODE_ENV !== "production" ? Ut((c) => {
      var p = c.data ? void 0 : c.error;
      process.env.NODE_ENV !== "production" && t({
        type: p ? "fetchError" : "fetchSuccess",
        message: `A ${p ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: u,
          fetchOptions: l,
          value: p || c
        },
        source: "fetchExchange"
      });
    })(d) : d;
  })(ae((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(n)), i = e(ae((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(n));
  return Ht([r, i]);
}, Es = (e) => ({ client: t, forward: n, dispatchDebug: r }) => e.reduceRight((i, a) => {
  var s = !1;
  return a({
    client: t,
    forward(u) {
      if (process.env.NODE_ENV !== "production") {
        if (s)
          throw new Error("forward() must only be called once in each Exchange.");
        s = !0;
      }
      return Rn(i(Rn(u)));
    },
    dispatchDebug(u) {
      process.env.NODE_ENV !== "production" && r({
        timestamp: Date.now(),
        source: a.name,
        ...u
      });
    }
  });
}, n), Ma = ({ onOperation: e, onResult: t, onError: n }) => ({ forward: r }) => (i) => Pn((a) => {
  n && a.error && n(a.error, a.operation);
  var s = t && t(a) || a;
  return "then" in s ? Mi(s) : An(s);
})(r(Pn((a) => {
  var s = e && e(a) || a;
  return "then" in s ? Mi(s) : An(s);
})(i))), Os = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = Ut((n) => {
  if (n.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var r = `No exchange has handled operations of kind "${n.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: r,
      operation: n,
      source: "fallbackExchange"
    }), console.warn(r);
  }
})(t)), ae((n) => !1)(t)), Hi = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var n = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), s = [], u = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = $i();
  function d(b) {
    (b.kind === "mutation" || b.kind === "teardown" || !a.has(b.key)) && (b.kind === "teardown" ? a.delete(b.key) : b.kind !== "mutation" && a.add(b.key), l.next(b));
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
    var T = hi(ae((S) => S.kind === "teardown" && S.key === b.key)(l.source))(ae((S) => S.operation.kind === b.kind && S.operation.key === b.key && (!S.operation.context._instance || S.operation.context._instance === b.context._instance))(D));
    return b.kind !== "query" ? T = Ta((S) => !!S.hasNext, !0)(T) : T = ji((S) => {
      var V = An(S);
      return S.stale || S.hasNext ? V : Ht([V, Jt(() => (S.stale = !0, S))(jn(1)(ae((Ce) => Ce.key === b.key)(l.source)))]);
    })(T), b.kind !== "mutation" ? T = pi(() => {
      a.delete(b.key), r.delete(b.key), i.delete(b.key), c = !1;
      for (var S = s.length - 1; S >= 0; S--)
        s[S].key === b.key && s.splice(S, 1);
      d(Zt("teardown", b, b.context));
    })(Ut((S) => {
      if (S.stale) {
        for (var V of s)
          if (V.key === S.operation.key) {
            a.delete(V.key);
            break;
          }
      } else
        S.hasNext || a.delete(b.key);
      r.set(b.key, S);
    })(T)) : T = Fi(() => {
      d(b);
    })(T), t.maskTypename && (T = Jt((S) => ({
      ...S,
      data: Zr(S.data, !0)
    }))(T)), Rn(T);
  }, y = this instanceof e ? this : Object.create(e.prototype), g = Object.assign(y, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(b) {
      b.kind === "teardown" ? p(b) : (b.kind === "mutation" || i.has(b.key)) && (s.push(b), Promise.resolve().then(p));
    },
    createRequestOperation(b, T, S) {
      S || (S = {});
      var V;
      if (process.env.NODE_ENV !== "production" && b !== "teardown" && (V = ds(T.query)) !== b)
        throw new Error(`Expected operation of type "${b}" but found "${V}"`);
      return Zt(b, T, {
        _instance: b === "mutation" ? n = n + 1 | 0 : void 0,
        ...u,
        ...S,
        requestPolicy: S.requestPolicy || u.requestPolicy,
        suspense: S.suspense || S.suspense !== !1 && g.suspense
      });
    },
    executeRequestOperation(b) {
      return b.kind === "mutation" ? Qi(m(b)) : Qi(Mo(() => {
        var T = i.get(b.key);
        T || i.set(b.key, T = m(b)), T = Fi(() => {
          p(b);
        })(T);
        var S = r.get(b.key);
        return b.kind === "query" && S && (S.stale || S.hasNext) ? ji(An)(Ht([T, ae((V) => V === r.get(b.key))(An(S))])) : T;
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
      return Bt((Ce) => {
        V = Ce;
      })(g.query(b, T, S)).unsubscribe(), V;
    },
    query: (b, T, S) => g.executeQuery(Tn(b, T), S),
    subscription: (b, T, S) => g.executeSubscription(Tn(b, T), S),
    mutation: (b, T, S) => g.executeMutation(Tn(b, T), S)
  }), E = Is;
  if (process.env.NODE_ENV !== "production") {
    var { next: P, source: x } = $i();
    g.subscribeToDebugTarget = (b) => Bt(b)(x), E = P;
  }
  var w = Es(t.exchanges), D = Rn(w({
    client: g,
    dispatchDebug: E,
    forward: Os({
      dispatchDebug: E
    })
  })(l.source));
  return Uo(D), g;
};
const As = {
  DateTime(e) {
    return new Date(e);
  }
};
class Ts {
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
      a != null && (n[r] = As[i](a));
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
class ks {
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
    return this.__gadget.fieldKeys.some((r) => !Bn(n[r], this.__gadget.fields[r]));
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
      const a = i[t], s = this.__gadget.fields[t], u = !Bn(s, a);
      return u ? { changed: u, current: s, previous: a } : { changed: u };
    } else {
      const a = {};
      for (let s = 0; s < this.__gadget.fieldKeys.length; s++) {
        const u = this.__gadget.fieldKeys[s];
        Bn(i[u], this.__gadget.fields[u]) || (a[u] = { current: this.__gadget.fields[u], previous: i[u] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = be.SinceLoaded) {
    const n = t == be.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, r = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      Bn(n[a], this.__gadget.fields[a]) || (r[a] = this.__gadget.fields[a]);
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
    return ri({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const La = ks;
class Va extends Error {
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
class ei extends Error {
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
class sr extends Error {
  constructor(t, n) {
    super(t.startsWith("GGT_") ? t : `${n}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
}
class Ki extends Error {
  constructor(t) {
    let n;
    ni(t) ? n = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : n = "GraphQL websocket closed unexpectedly by the server", super(n), Object.defineProperty(this, "code", {
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
class _s extends Error {
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
class xs extends Error {
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
class Ps extends Error {
  constructor(t, n, r, i) {
    const a = n.slice(0, 3), s = n.length > 3 ? `, and ${n.length - 3} more error${n.length > 4 ? "s" : ""} need${n.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${r ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: u, message: l }) => `${u} ${l}`).join(", ")}${s}.`), Object.defineProperty(this, "code", {
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
class Ua extends Error {
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
class bi extends Error {
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
class Rs extends Error {
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
function ti(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const en = (e, t) => {
  const n = t.length;
  let r = 0;
  for (; e != null && r < n; )
    e = e[t[r++]];
  return r && r == n ? e : void 0;
}, ni = (e) => (e == null ? void 0 : e.type) == "close", Ye = (e, t) => typeof e != "string" ? "" : qt(e, t), Xi = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, qt = (e, t = !0) => {
  let n = "" + e;
  return t ? n = n.replace(/^[a-z\d]*/, (r) => Xi(r)) : n = n.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (r) => r.toLowerCase()), n = n.replace(/(?:_|(\/))([a-z\d]*)/gi, (r, i, a, s, u) => (i || (i = ""), "" + i + Xi(a))), n;
}, Ds = (e) => `${qt(e)}Sort`, Cs = (e) => `${qt(e)}Filter`, Fs = (e, t, n) => new Ua(`More than one record found for ${e}.${t} = ${n}. Please confirm your unique validation is not reporting an error.`), js = (e, t) => {
  if (e.fetching)
    return;
  const n = en(e.data, t);
  if (n === void 0)
    return new Va(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (n === null)
    return new bi(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, st = (e, t, n = !1) => {
  var r;
  if (e.error)
    throw e.error instanceof $n && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((u) => "[Network] " + u.message).join(`
`)), e.error;
  const i = en(e.data, t), a = en(i, ["edges"]), s = a ?? i;
  if (i === void 0)
    throw new Va(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || n && Array.isArray(s) && s.length === 0)
    throw new bi(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, kn = (e, t) => {
  var n;
  if (e.error)
    throw e.error instanceof $n && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const r = en(e.data, t);
  return r ?? null;
}, vi = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Ps(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Ua(e.message) : new sr(e.message, e.code);
}, It = (e, t) => {
  const n = st(e, t);
  return Ba(n);
}, Ba = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? vi(t) : new sr("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, qa = (e) => {
  var t, n, r, i;
  if (!((n = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || n === void 0) && n.hydrations)
    return new Ts((i = (r = e.data) === null || r === void 0 ? void 0 : r.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, _n = (e, t) => {
  const n = qa(e);
  return n && (t = n.apply(t)), new La(t);
}, Si = (e, t) => {
  const n = qa(e);
  return n && (t = n.apply(t)), t == null ? void 0 : t.map((r) => new La(r));
}, Dn = (e, t) => {
  const n = t.edges.map((r) => r.node);
  return Si(e, n);
}, ri = (e) => {
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
          t[n] = r === void 0 ? null : ri(r);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const n of Object.keys(e)) {
          const r = ri(e[n]);
          r !== void 0 && (t[n] = r);
        }
        return t;
      }
    }
  }
}, Lr = "gstk", Zi = (e) => {
  try {
    const t = window[e];
    return t.setItem(Lr, Lr), t.removeItem(Lr), !0;
  } catch {
    return !1;
  }
}, ea = Object.prototype.toString, ta = Object.getPrototypeOf, na = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, Nn = (e, t, n) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (n.indexOf(e) > -1 && n.indexOf(t) > -1)
    return !0;
  const r = ea.call(e), i = ea.call(t);
  let a, s, u;
  if (n.push(e, t), r != i || (a = na(e), s = na(t), a.length != s.length || a.some(function(l) {
    return !Nn(e[l], t[l], n);
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
        if (u = a.next(), !Nn(u.value, s.next().value, n))
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
        if (!(!(u in e) && !(u in t)) && (u in e != u in t || !Nn(e[u], t[u], n)))
          return !1;
      return !0;
    case "Object":
      return Nn(ta(e), ta(t), n);
    default:
      return !1;
  }
}, Bn = (e, t) => Nn(e, t, []), Ga = (e, t) => {
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
}, $s = (e, t = {}) => {
  var n;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((n = Array.isArray(t) ? t : t.inputs) !== null && n !== void 0 ? n : []).map((i) => Ga(e, i))
  };
}, Ms = (e, t) => {
  const n = {};
  for (const [r, i] of Object.entries(e))
    n[r] = { ...i, value: t[r] };
  return n;
};
class tn extends Array {
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
    const i = new tn();
    return i.push(...n), i.modelManager = t, i.pagination = r, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new sr("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new ei("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new ei("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: n, last: r, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: r || n
    });
  }
}
const ii = (e) => Object.entries(e).flatMap(([t, n]) => {
  if (typeof n == "boolean")
    return n ? t : !1;
  if (n instanceof wi) {
    let r = "";
    const i = Object.entries(n.args).filter(([a, s]) => s != null).map(([a, s]) => {
      var u;
      return `${a}: ${s instanceof Ni ? `$${(u = s.name) !== null && u !== void 0 ? u : a}` : JSON.stringify(s)}`;
    });
    return i.length > 0 && (r = `(${i.join(", ")})`), n.subselection ? [`${t}${r} {`, ...ii(n.subselection), "}"] : `${t}${r}`;
  } else
    return [`${t} {`, ...ii(n), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Ii = (e) => {
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
    i instanceof wi ? Object.entries(i.args).forEach(([a, s]) => {
      var u;
      s instanceof Ni && (t[(u = s.name) !== null && u !== void 0 ? u : n(a)] = s);
    }) : typeof i == "object" && i !== null && Object.assign(t, Ii(i));
  }), t;
}, Ls = (e) => {
  const t = Ii(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([r, i]) => `$${r}: ${i.type}`).join(", ")})`;
};
class wi {
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
class Ni {
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
const Et = (e, t) => new wi(e, t), ie = (e) => new Ni(e.type + (e.required ? "!" : ""), e.name, e.value), Vs = (e) => {
  var t;
  const n = Ls(e), r = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${n}${r} {
${ii(e.fields).join(`
`)}
}`;
}, Ot = (e) => {
  const t = Ii(e.fields);
  return {
    query: Vs(e),
    variables: Object.entries(t ?? {}).reduce((n, [r, i]) => (typeof i.value < "u" && (n[r] = i.value), n), {})
  };
}, Ei = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Oi = (e, t = !1) => {
  const n = { ...e };
  return t && (n.__typename = !0), n;
}, ur = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, Us = (e, t, n, r, i) => {
  const a = {};
  return typeof t < "u" && (a.id = ie({ type: "GadgetID!", value: t })), Ot({
    type: "query",
    name: e,
    fields: {
      [e]: Et(a, Oi((i == null ? void 0 : i.select) || n, !0)),
      ...Ei(r)
    },
    directives: ur(i)
  });
}, Bs = (e, t, n, r, i, a) => Ai(e, r, i, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: n
    }
  }
}), Ai = (e, t, n, r) => Ot({
  type: "query",
  name: e,
  fields: {
    [e]: Et({
      after: ie({ value: r == null ? void 0 : r.after, type: "String" }),
      first: ie({ value: r == null ? void 0 : r.first, type: "Int" }),
      before: ie({ value: r == null ? void 0 : r.before, type: "String" }),
      last: ie({ value: r == null ? void 0 : r.last, type: "Int" }),
      sort: r != null && r.sort ? ie({ value: r.sort, type: `[${Ds(n)}!]` }) : void 0,
      filter: r != null && r.filter ? ie({ value: r.filter, type: `[${Cs(n)}!]` }) : void 0,
      search: r != null && r.search ? ie({ value: r.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Oi((r == null ? void 0 : r.select) || t, !0)
      }
    }),
    ...Ei(n)
  },
  directives: ur(r)
}), za = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Ti = (e) => Object.fromEntries(Object.entries(e).map(([t, n]) => [t, ie(n)])), Wa = (e, t, n) => ({
  success: !0,
  errors: za,
  [e]: t && !n ? Oi(t, !0) : !1,
  result: !!n
}), qs = (e, t, n, r, i, a, s, u, l) => {
  const d = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: Et(Ti(i), Wa(r, d, l))
  };
  s && (c = {
    [s]: c
  });
  const p = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...Ei(n)
    },
    directives: ur(a)
  };
  return Ot(p);
}, Gs = (e, t, n) => {
  let r = {}, i = t.operationName;
  switch (t.type) {
    case "action": {
      const s = (n == null ? void 0 : n.select) || t.defaultSelection;
      t.isBulk && (i = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), r = {
        [`... on ${`${qt(i)}Result`}`]: Wa(t.modelApiIdentifier, s, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      r = {
        [`... on ${qt(i)}Result`]: Qa()
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
}, Qa = () => ({
  success: !0,
  errors: za,
  result: !0
}), zs = (e, t, n, r) => {
  let i = {
    [e]: Et(Ti(t), Qa())
  };
  return n && (i = {
    [n]: i
  }), Ot({
    type: "mutation",
    name: e,
    fields: i,
    directives: ur(r)
  });
}, Ws = (e) => {
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
}, Qs = (e, t, n, r, i) => {
  let a = {
    background: {
      [e]: Et({
        ...Ti(t),
        backgroundOptions: ie({
          type: "EnqueueBackgroundActionOptions",
          value: Ws(r)
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
    name: "enqueue" + qt(e),
    fields: a
  });
}, Js = (e, t) => ({
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
function ki(e, t, n) {
  return n != null && n.live ? Js(Bo(e), t) : yi(e, ae((i) => !i.stale && !i.hasNext), jn(1), ar).then((i) => t(i));
}
const ra = (e, t, n, r, i, a, s = !0) => {
  const u = Us(t, n, r, i, a), l = e.connection.currentClient.query(u.query, u.variables);
  return ki(l, (d) => {
    const p = (s ? st : kn)(d, [t]);
    return _n(d, p);
  }, a);
}, Ys = (e, t, n, r, i, a, s, u = !0) => {
  const l = Bs(t, n, r, i, a, s), d = e.connection.currentClient.query(l.query, l.variables);
  return ki(d, (c) => {
    const p = st(c, [t]), m = Dn(c, p);
    if (m.length > 1)
      throw Fs(a, n, r);
    const y = m[0];
    if (!y && u)
      throw new bi(`${a} record with ${n}=${r} not found`);
    return y ?? null;
  }, s);
}, ia = (e, t, n, r, i, a) => {
  const s = Ai(t, n, r, i), u = e.connection.currentClient.query(s.query, s.variables);
  return ki(u, (l) => {
    let d;
    a === !1 ? d = kn(l, [t]) : d = st(l, [t], a);
    const c = Dn(l, d);
    return tn.boot(e, c, { options: i, pageInfo: d.pageInfo });
  }, i);
}, aa = async (e, t, n, r, i, a, s, u, l, d) => {
  const c = qs(t, n, r, i, s, u, l, a, d), p = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), m = l ? [l, t] : [t];
  if (a) {
    const y = en(p.data, m), g = y[i] && n ? Si(p, y[i]) : void 0;
    if (y.errors) {
      const E = y.errors.map((P) => vi(P));
      throw new Rs(E, g);
    }
    return g;
  } else {
    const y = It(p, m);
    return Ja(n, p, y, i, d);
  }
}, Ja = (e, t, n, r, i) => {
  if (e != null)
    return i ? n.result : _n(t, n[r]);
}, oa = async (e, t, n, r) => {
  const i = zs(t, n, r), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return It(a, r ? [r, t] : [t]).result;
};
async function Hs(e, t, n, r = {}) {
  const i = t.isBulk ? $s(t, n) : Ga(t, n), a = Ms(t.variables, i), s = Qs(t.operationName, a, t.namespace, r, t.isBulk), u = await e.currentClient.mutation(s.query, s.variables, r).toPromise(), l = ["background", t.operationName];
  t.namespace && l.unshift(t.namespace);
  try {
    const d = It(u, l);
    return t.isBulk ? d.backgroundActions.map((c) => new Yn(e, t, c.id)) : new Yn(e, t, d.backgroundAction.id);
  } catch (d) {
    if ("code" in d && d.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (r != null && r.id) && r.onDuplicateID == "ignore")
      return new Yn(e, t, r.id);
    throw d;
  }
}
const Ks = async (e, t, n, r) => {
  const i = Gs(t, n, r), a = e.currentClient.subscription(i.query, i.variables), s = await yi(a, ae((l) => {
    var d, c;
    return l.error || ((c = (d = l.data) === null || d === void 0 ? void 0 : d.backgroundAction) === null || c === void 0 ? void 0 : c.outcome);
  }), jn(1), ar), u = st(s, ["backgroundAction"]);
  switch (Ba(u.result), n.type) {
    case "action": {
      u.result = Ja(n.defaultSelection, s.data, u.result, n.isBulk ? n.modelApiIdentifier : n.modelSelectionField, n.hasReturnType);
      break;
    }
    case "globalAction": {
      u.result = u.result.result;
      break;
    }
  }
  return u;
};
class Yn {
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
    return (await Ks(this.connection, this.id, this.action, t)).result;
  }
}
var xn;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(xn || (xn = {}));
function Z(e, t) {
  if (!!!e)
    throw new Error(t);
}
function Cn(e) {
  return typeof e == "object" && e !== null;
}
function Ya(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const Xs = /\r\n|[\n\r]/g;
function ai(e, t) {
  let n = 0, r = 1;
  for (const i of e.body.matchAll(Xs)) {
    if (typeof i.index == "number" || Ya(!1), i.index >= t)
      break;
    n = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: t + 1 - n
  };
}
function Zs(e) {
  return Ha(
    e.source,
    ai(e.source, e.start)
  );
}
function Ha(e, t) {
  const n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, u = t.line === 1 ? n : 0, l = t.column + u, d = `${e.name}:${s}:${l}
`, c = r.split(/\r\n|[\n\r]/g), p = c[i];
  if (p.length > 120) {
    const m = Math.floor(l / 80), y = l % 80, g = [];
    for (let E = 0; E < p.length; E += 80)
      g.push(p.slice(E, E + 80));
    return d + sa([
      [`${s} |`, g[0]],
      ...g.slice(1, m + 1).map((E) => ["|", E]),
      ["|", "^".padStart(y)],
      ["|", g[m + 1]]
    ]);
  }
  return d + sa([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, c[i - 1]],
    [`${s} |`, p],
    ["|", "^".padStart(l)],
    [`${s + 1} |`, c[i + 1]]
  ]);
}
function sa(e) {
  const t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function eu(e) {
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
    const { nodes: s, source: u, positions: l, path: d, originalError: c, extensions: p } = eu(n);
    super(t), this.name = "GraphQLError", this.path = d ?? void 0, this.originalError = c ?? void 0, this.nodes = ua(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const m = ua(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((g) => g.loc).filter((g) => g != null)
    );
    this.source = u ?? (m == null || (i = m[0]) === null || i === void 0 ? void 0 : i.source), this.positions = l ?? (m == null ? void 0 : m.map((g) => g.start)), this.locations = l && u ? l.map((g) => ai(u, g)) : m == null ? void 0 : m.map((g) => ai(g.source, g.start));
    const y = Cn(
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

` + Zs(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + Ha(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function ua(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const Ka = {
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
}, tu = new Set(Object.keys(Ka));
function la(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && tu.has(t);
}
var ca;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(ca || (ca = {}));
var Oe;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(Oe || (Oe = {}));
var W;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(W || (W = {}));
function da(e) {
  return e === 9 || e === 32;
}
function nu(e) {
  return e >= 48 && e <= 57;
}
function Xa(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function ru(e) {
  return Xa(e) || e === 95;
}
function iu(e) {
  return Xa(e) || nu(e) || e === 95;
}
function au(e, t) {
  const n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((y) => y.length === 0 || da(y.charCodeAt(0))), s = n.endsWith('\\"""'), u = e.endsWith('"') && !s, l = e.endsWith("\\"), d = u || l, c = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || d || a || s);
  let p = "";
  const m = i && da(e.charCodeAt(0));
  return (c && !m || a) && (p += `
`), p += n, (c || d) && (p += `
`), '"""' + p + '"""';
}
const ou = 10, Za = 2;
function J(e) {
  return lr(e, []);
}
function lr(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return su(e, t);
    default:
      return String(e);
  }
}
function su(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (uu(e)) {
    const r = e.toJSON();
    if (r !== e)
      return typeof r == "string" ? r : lr(r, n);
  } else if (Array.isArray(e))
    return cu(e, n);
  return lu(e, n);
}
function uu(e) {
  return typeof e.toJSON == "function";
}
function lu(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > Za ? "[" + du(e) + "]" : "{ " + n.map(
    ([i, a]) => i + ": " + lr(a, t)
  ).join(", ") + " }";
}
function cu(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Za)
    return "[Array]";
  const n = Math.min(ou, e.length), r = e.length - n, i = [];
  for (let a = 0; a < n; ++a)
    i.push(lr(e[a], t));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function du(e) {
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
), fu = 5;
function pu(e, t) {
  const [n, r] = t ? [e, t] : [void 0, e];
  let i = " Did you mean ";
  n && (i += n + " ");
  const a = r.map((l) => `"${l}"`);
  switch (a.length) {
    case 0:
      return "";
    case 1:
      return i + a[0] + "?";
    case 2:
      return i + a[0] + " or " + a[1] + "?";
  }
  const s = a.slice(0, fu), u = s.pop();
  return i + s.join(", ") + ", or " + u + "?";
}
function fa(e) {
  return e;
}
function _i(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    n[t(r)] = r;
  return n;
}
function xi(e, t, n) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of e)
    r[t(i)] = n(i);
  return r;
}
function cr(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of Object.keys(e))
    n[r] = t(e[r], r);
  return n;
}
function hu(e, t) {
  let n = 0, r = 0;
  for (; n < e.length && r < t.length; ) {
    let i = e.charCodeAt(n), a = t.charCodeAt(r);
    if (qn(i) && qn(a)) {
      let s = 0;
      do
        ++n, s = s * 10 + i - oi, i = e.charCodeAt(n);
      while (qn(i) && s > 0);
      let u = 0;
      do
        ++r, u = u * 10 + a - oi, a = t.charCodeAt(r);
      while (qn(a) && u > 0);
      if (s < u)
        return -1;
      if (s > u)
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
const oi = 48, mu = 57;
function qn(e) {
  return !isNaN(e) && oi <= e && e <= mu;
}
function yu(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = new gu(e), i = Math.floor(e.length * 0.4) + 1;
  for (const a of t) {
    const s = r.measure(a, i);
    s !== void 0 && (n[a] = s);
  }
  return Object.keys(n).sort((a, s) => {
    const u = n[a] - n[s];
    return u !== 0 ? u : hu(a, s);
  });
}
class gu {
  constructor(t) {
    this._input = t, this._inputLowerCase = t.toLowerCase(), this._inputArray = pa(this._inputLowerCase), this._rows = [
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
    let i = pa(r), a = this._inputArray;
    if (i.length < a.length) {
      const c = i;
      i = a, a = c;
    }
    const s = i.length, u = a.length;
    if (s - u > n)
      return;
    const l = this._rows;
    for (let c = 0; c <= u; c++)
      l[0][c] = c;
    for (let c = 1; c <= s; c++) {
      const p = l[(c - 1) % 3], m = l[c % 3];
      let y = m[0] = c;
      for (let g = 1; g <= u; g++) {
        const E = i[c - 1] === a[g - 1] ? 0 : 1;
        let P = Math.min(
          p[g] + 1,
          // delete
          m[g - 1] + 1,
          // insert
          p[g - 1] + E
          // substitute
        );
        if (c > 1 && g > 1 && i[c - 1] === a[g - 2] && i[c - 2] === a[g - 1]) {
          const x = l[(c - 2) % 3][g - 2];
          P = Math.min(P, x + 1);
        }
        P < y && (y = P), m[g] = P;
      }
      if (y > n)
        return;
    }
    const d = l[s % 3][u];
    return d <= n ? d : void 0;
  }
}
function pa(e) {
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
function bu(e) {
  return `"${e.replace(vu, Su)}"`;
}
const vu = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Su(e) {
  return Iu[e.charCodeAt(0)];
}
const Iu = [
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
], wu = Object.freeze({});
function Nu(e, t, n = Ka) {
  const r = /* @__PURE__ */ new Map();
  for (const x of Object.values(W))
    r.set(x, Eu(t, x));
  let i, a = Array.isArray(e), s = [e], u = -1, l = [], d = e, c, p;
  const m = [], y = [];
  do {
    u++;
    const x = u === s.length, w = x && l.length !== 0;
    if (x) {
      if (c = y.length === 0 ? void 0 : m[m.length - 1], d = p, p = y.pop(), w)
        if (a) {
          d = d.slice();
          let b = 0;
          for (const [T, S] of l) {
            const V = T - b;
            S === null ? (d.splice(V, 1), b++) : d[V] = S;
          }
        } else {
          d = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(d)
          );
          for (const [b, T] of l)
            d[b] = T;
        }
      u = i.index, s = i.keys, l = i.edits, a = i.inArray, i = i.prev;
    } else if (p) {
      if (c = a ? u : s[u], d = p[c], d == null)
        continue;
      m.push(c);
    }
    let D;
    if (!Array.isArray(d)) {
      var g, E;
      la(d) || Z(!1, `Invalid AST Node: ${J(d)}.`);
      const b = x ? (g = r.get(d.kind)) === null || g === void 0 ? void 0 : g.leave : (E = r.get(d.kind)) === null || E === void 0 ? void 0 : E.enter;
      if (D = b == null ? void 0 : b.call(t, d, c, p, m, y), D === wu)
        break;
      if (D === !1) {
        if (!x) {
          m.pop();
          continue;
        }
      } else if (D !== void 0 && (l.push([c, D]), !x))
        if (la(D))
          d = D;
        else {
          m.pop();
          continue;
        }
    }
    if (D === void 0 && w && l.push([c, d]), x)
      m.pop();
    else {
      var P;
      i = {
        inArray: a,
        index: u,
        keys: s,
        edits: l,
        prev: i
      }, a = Array.isArray(d), s = a ? d : (P = n[d.kind]) !== null && P !== void 0 ? P : [], u = -1, l = [], p && y.push(p), p = d;
    }
  } while (i !== void 0);
  return l.length !== 0 ? l[l.length - 1][1] : e;
}
function Eu(e, t) {
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
  return Nu(e, Au);
}
const Ou = 80, Au = {
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
      return s.length > Ou && (s = a + M(`(
`, Hn(A(n, `
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
    leave: ({ value: e, block: t }) => t ? au(e) : bu(e)
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
`) + t + (ha(n) ? M(`(
`, Hn(A(n, `
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
`) + "directive @" + t + (ha(n) ? M(`(
`, Hn(A(n, `
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
`, Hn(A(e, `
`)), `
}`);
}
function M(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function Hn(e) {
  return M("  ", e.replace(/\n/g, `
  `));
}
function ha(e) {
  var t;
  return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function si(e, t) {
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
        (n) => si(n, t)
      );
    case W.OBJECT:
      return xi(
        e.fields,
        (n) => n.name.value,
        (n) => si(n.value, t)
      );
    case W.VARIABLE:
      return t == null ? void 0 : t[e.name.value];
  }
}
function Xe(e) {
  if (e != null || Z(!1, "Must provide name."), typeof e == "string" || Z(!1, "Expected name to be a string."), e.length === 0)
    throw new L("Expected name to be a non-empty string.");
  for (let t = 1; t < e.length; ++t)
    if (!iu(e.charCodeAt(t)))
      throw new L(
        `Names must only contain [_a-zA-Z0-9] but "${e}" does not.`
      );
  if (!ru(e.charCodeAt(0)))
    throw new L(
      `Names must start with [_a-zA-Z] but "${e}" does not.`
    );
  return e;
}
function Tu(e) {
  if (e === "true" || e === "false" || e === "null")
    throw new L(`Enum values cannot be named: ${e}`);
  return Xe(e);
}
function eo(e) {
  return to(e) || ku(e) || _u(e) || xu(e) || no(e) || ro(e) || io(e) || yt(e);
}
function to(e) {
  return At(e, nn);
}
function ku(e) {
  return At(e, Cu);
}
function _u(e) {
  return At(e, Fu);
}
function xu(e) {
  return At(e, ju);
}
function no(e) {
  return At(e, Mu);
}
function ro(e) {
  return At(e, Vu);
}
function io(e) {
  return At(e, Ru);
}
function yt(e) {
  return At(e, dr);
}
function Pu(e) {
  return to(e) || no(e);
}
class Ru {
  constructor(t) {
    eo(t) || Z(!1, `Expected ${J(t)} to be a GraphQL type.`), this.ofType = t;
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
class dr {
  constructor(t) {
    Du(t) || Z(
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
function Du(e) {
  return eo(e) && !yt(e);
}
function ao(e) {
  return typeof e == "function" ? e() : e;
}
function oo(e) {
  return typeof e == "function" ? e() : e;
}
class nn {
  constructor(t) {
    var n, r, i, a;
    const s = (n = t.parseValue) !== null && n !== void 0 ? n : fa;
    this.name = Xe(t.name), this.description = t.description, this.specifiedByURL = t.specifiedByURL, this.serialize = (r = t.serialize) !== null && r !== void 0 ? r : fa, this.parseValue = s, this.parseLiteral = (i = t.parseLiteral) !== null && i !== void 0 ? i : (u, l) => s(si(u, l)), this.extensions = Ke(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (a = t.extensionASTNodes) !== null && a !== void 0 ? a : [], t.specifiedByURL == null || typeof t.specifiedByURL == "string" || Z(
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
class Cu {
  constructor(t) {
    var n;
    this.name = Xe(t.name), this.description = t.description, this.isTypeOf = t.isTypeOf, this.extensions = Ke(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = () => uo(t), this._interfaces = () => so(t), t.isTypeOf == null || typeof t.isTypeOf == "function" || Z(
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
      fields: co(this.getFields()),
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
function so(e) {
  var t;
  const n = ao(
    (t = e.interfaces) !== null && t !== void 0 ? t : []
  );
  return Array.isArray(n) || Z(
    !1,
    `${e.name} interfaces must be an Array or a function which returns an Array.`
  ), n;
}
function uo(e) {
  const t = oo(e.fields);
  return Yt(t) || Z(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), cr(t, (n, r) => {
    var i;
    Yt(n) || Z(
      !1,
      `${e.name}.${r} field config must be an object.`
    ), n.resolve == null || typeof n.resolve == "function" || Z(
      !1,
      `${e.name}.${r} field resolver must be a function if provided, but got: ${J(n.resolve)}.`
    );
    const a = (i = n.args) !== null && i !== void 0 ? i : {};
    return Yt(a) || Z(
      !1,
      `${e.name}.${r} args must be an object with argument names as keys.`
    ), {
      name: Xe(r),
      description: n.description,
      type: n.type,
      args: lo(a),
      resolve: n.resolve,
      subscribe: n.subscribe,
      deprecationReason: n.deprecationReason,
      extensions: Ke(n.extensions),
      astNode: n.astNode
    };
  });
}
function lo(e) {
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
function Yt(e) {
  return Cn(e) && !Array.isArray(e);
}
function co(e) {
  return cr(e, (t) => ({
    description: t.description,
    type: t.type,
    args: fo(t.args),
    resolve: t.resolve,
    subscribe: t.subscribe,
    deprecationReason: t.deprecationReason,
    extensions: t.extensions,
    astNode: t.astNode
  }));
}
function fo(e) {
  return xi(
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
class Fu {
  constructor(t) {
    var n;
    this.name = Xe(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = Ke(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = uo.bind(void 0, t), this._interfaces = so.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || Z(
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
      fields: co(this.getFields()),
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
class ju {
  constructor(t) {
    var n;
    this.name = Xe(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = Ke(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._types = $u.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || Z(
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
function $u(e) {
  const t = ao(e.types);
  return Array.isArray(t) || Z(
    !1,
    `Must provide Array of types or a function which returns such an array for Union ${e.name}.`
  ), t;
}
class Mu {
  /* <T> */
  constructor(t) {
    var n;
    this.name = Xe(t.name), this.description = t.description, this.extensions = Ke(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._values = Lu(this.name, t.values), this._valueLookup = new Map(
      this._values.map((r) => [r.value, r])
    ), this._nameLookup = _i(this._values, (r) => r.name);
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
        `Enum "${this.name}" cannot represent non-string value: ${r}.` + Gn(this, r)
      );
    }
    const n = this.getValue(t);
    if (n == null)
      throw new L(
        `Value "${t}" does not exist in "${this.name}" enum.` + Gn(this, t)
      );
    return n.value;
  }
  parseLiteral(t, n) {
    if (t.kind !== W.ENUM) {
      const i = Nt(t);
      throw new L(
        `Enum "${this.name}" cannot represent non-enum value: ${i}.` + Gn(this, i),
        {
          nodes: t
        }
      );
    }
    const r = this.getValue(t.value);
    if (r == null) {
      const i = Nt(t);
      throw new L(
        `Value "${i}" does not exist in "${this.name}" enum.` + Gn(this, i),
        {
          nodes: t
        }
      );
    }
    return r.value;
  }
  toConfig() {
    const t = xi(
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
function Gn(e, t) {
  const n = e.getValues().map((i) => i.name), r = yu(t, n);
  return pu("the enum value", r);
}
function Lu(e, t) {
  return Yt(t) || Z(
    !1,
    `${e} values must be an object with value names as keys.`
  ), Object.entries(t).map(([n, r]) => (Yt(r) || Z(
    !1,
    `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${J(r)}.`
  ), {
    name: Tu(n),
    description: r.description,
    value: r.value !== void 0 ? r.value : n,
    deprecationReason: r.deprecationReason,
    extensions: Ke(r.extensions),
    astNode: r.astNode
  }));
}
class Vu {
  constructor(t) {
    var n;
    this.name = Xe(t.name), this.description = t.description, this.extensions = Ke(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = Uu.bind(void 0, t);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const t = cr(this.getFields(), (n) => ({
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
function Uu(e) {
  const t = oo(e.fields);
  return Yt(t) || Z(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), cr(t, (n, r) => (!("resolve" in n) || Z(
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
const Vr = 2147483647, Ur = -2147483648, Bu = new nn({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(e) {
    const t = Mn(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n))
      throw new L(
        `Int cannot represent non-integer value: ${J(t)}`
      );
    if (n > Vr || n < Ur)
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
    if (e > Vr || e < Ur)
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
    if (t > Vr || t < Ur)
      throw new L(
        `Int cannot represent non 32-bit signed integer value: ${e.value}`,
        {
          nodes: e
        }
      );
    return t;
  }
});
new nn({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(e) {
    const t = Mn(e);
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
const po = new nn({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(e) {
    const t = Mn(e);
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
}), Pi = new nn({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(e) {
    const t = Mn(e);
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
new nn({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(e) {
    const t = Mn(e);
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
function Mn(e) {
  if (Cn(e)) {
    if (typeof e.valueOf == "function") {
      const t = e.valueOf();
      if (!Cn(t))
        return t;
    }
    if (typeof e.toJSON == "function")
      return e.toJSON();
  }
  return e;
}
class Ln {
  constructor(t) {
    var n, r;
    this.name = Xe(t.name), this.description = t.description, this.locations = t.locations, this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1, this.extensions = Ke(t.extensions), this.astNode = t.astNode, Array.isArray(t.locations) || Z(!1, `@${t.name} locations must be an Array.`);
    const i = (r = t.args) !== null && r !== void 0 ? r : {};
    Cn(i) && !Array.isArray(i) || Z(
      !1,
      `@${t.name} args must be an object with argument names as keys.`
    ), this.args = lo(i);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: fo(this.args),
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
new Ln({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    Oe.FIELD,
    Oe.FRAGMENT_SPREAD,
    Oe.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new dr(Pi),
      description: "Included when true."
    }
  }
});
new Ln({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    Oe.FIELD,
    Oe.FRAGMENT_SPREAD,
    Oe.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new dr(Pi),
      description: "Skipped when true."
    }
  }
});
const qu = "No longer supported";
new Ln({
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
      type: po,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: qu
    }
  }
});
new Ln({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [Oe.SCALAR],
  args: {
    url: {
      type: new dr(po),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
});
function En(e, t, n) {
  if (e) {
    if (e.kind === W.VARIABLE) {
      const r = e.name.value;
      if (n == null || n[r] === void 0)
        return;
      const i = n[r];
      return i === null && yt(t) ? void 0 : i;
    }
    if (yt(t))
      return e.kind === W.NULL ? void 0 : En(e, t.ofType, n);
    if (e.kind === W.NULL)
      return null;
    if (io(t)) {
      const r = t.ofType;
      if (e.kind === W.LIST) {
        const a = [];
        for (const s of e.values)
          if (ma(s, n)) {
            if (yt(r))
              return;
            a.push(null);
          } else {
            const u = En(s, r, n);
            if (u === void 0)
              return;
            a.push(u);
          }
        return a;
      }
      const i = En(e, r, n);
      return i === void 0 ? void 0 : [i];
    }
    if (ro(t)) {
      if (e.kind !== W.OBJECT)
        return;
      const r = /* @__PURE__ */ Object.create(null), i = _i(e.fields, (a) => a.name.value);
      for (const a of Object.values(t.getFields())) {
        const s = i[a.name];
        if (!s || ma(s.value, n)) {
          if (a.defaultValue !== void 0)
            r[a.name] = a.defaultValue;
          else if (yt(a.type))
            return;
          continue;
        }
        const u = En(s.value, a.type, n);
        if (u === void 0)
          return;
        r[a.name] = u;
      }
      return r;
    }
    if (Pu(t)) {
      let r;
      try {
        r = t.parseLiteral(e, n);
      } catch {
        return;
      }
      return r === void 0 ? void 0 : r;
    }
    Ya(!1, "Unexpected input type: " + J(t));
  }
}
function ma(e, t) {
  return e.kind === W.VARIABLE && (t == null || t[e.name.value] === void 0);
}
function Gu(e, t, n) {
  var r;
  const i = {}, a = (r = t.arguments) !== null && r !== void 0 ? r : [], s = _i(a, (u) => u.name.value);
  for (const u of e.args) {
    const l = u.name, d = u.type, c = s[l];
    if (!c) {
      if (u.defaultValue !== void 0)
        i[l] = u.defaultValue;
      else if (yt(d))
        throw new L(
          `Argument "${l}" of required type "${J(d)}" was not provided.`,
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
      if (n == null || !Wu(n, g)) {
        if (u.defaultValue !== void 0)
          i[l] = u.defaultValue;
        else if (yt(d))
          throw new L(
            `Argument "${l}" of required type "${J(d)}" was provided the variable "$${g}" which was not provided a runtime value.`,
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
        `Argument "${l}" of non-null type "${J(d)}" must not be null.`,
        {
          nodes: p
        }
      );
    const y = En(p, d, n);
    if (y === void 0)
      throw new L(
        `Argument "${l}" has invalid value ${Nt(p)}.`,
        {
          nodes: p
        }
      );
    i[l] = y;
  }
  return i;
}
function zu(e, t, n) {
  var r;
  const i = (r = t.directives) === null || r === void 0 ? void 0 : r.find(
    (a) => a.name.value === e.name
  );
  if (i)
    return Gu(e, i, n);
}
function Wu(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
const Qu = new Ln({
  name: "live",
  description: "Instruction for establishing a live connection that is updated once the underlying data changes.",
  locations: [Oe.QUERY],
  args: {
    if: {
      type: Pi,
      defaultValue: !0,
      description: "Whether the query should be live or not."
    },
    throttle: {
      type: Bu,
      description: 'Propose a desired throttle interval ot the server in order to receive updates to at most once per "throttle" milliseconds. The server must not accept this value.'
    }
  }
}), ho = (e) => e == null, Ju = (e) => {
  var t;
  if (e.kind !== "OperationDefinition" || e.operation !== "query")
    return null;
  const n = (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
  return ho(n) ? null : n;
}, Yu = (e, t) => {
  var n;
  const r = zu(Qu, { directives: [e] }, t);
  return {
    isLive: (r == null ? void 0 : r.if) === !0,
    throttleValue: (n = r == null ? void 0 : r.throttle) !== null && n !== void 0 ? n : null
  };
}, Hu = (e, t) => {
  const n = Ju(e);
  return ho(n) ? !1 : Yu(n, t).isLive;
};
function we(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Mt(e) {
  return we(e) === "object";
}
function Ku(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function ya(e, t) {
  return e.length < 124 ? e : t;
}
const Xu = "graphql-transport-ws";
var ve;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(ve || (ve = {}));
var re;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(re || (re = {}));
function mo(e) {
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
      if (!Ku(e.payload))
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
function Zu(e, t) {
  return mo(typeof e == "string" ? JSON.parse(e, t) : e);
}
function In(e, t) {
  return mo(e), JSON.stringify(e, t);
}
function el(e) {
  const {
    url: t,
    connectionParams: n,
    lazy: r = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: s = 0,
    disablePong: u,
    connectionAckWaitTimeout: l = 0,
    retryAttempts: d = 5,
    retryWait: c = async function(U) {
      let B = 1e3;
      for (let j = 0; j < U; j++)
        B *= 2;
      await new Promise((j) => setTimeout(j, B + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: p = zn,
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
    jsonMessageReplacer: P,
    jsonMessageReviver: x
  } = e;
  let w;
  if (g) {
    if (!nl(g))
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
  let S, V = 0, Ce, Fe = !1, Ue = 0, lt = !1;
  async function ee() {
    clearTimeout(Ce);
    const [_, U] = await (S ?? (S = new Promise((Q, ke) => (async () => {
      if (Fe) {
        if (await c(Ue), !V)
          return S = void 0, ke({ code: 1e3, reason: "All Subscriptions Gone" });
        Ue++;
      }
      b.emit("connecting");
      const q = new D(typeof t == "function" ? await t() : t, Xu);
      let je, Be;
      function Ze() {
        isFinite(s) && s > 0 && (clearTimeout(Be), Be = setTimeout(() => {
          q.readyState === D.OPEN && (q.send(In({ type: re.Ping })), b.emit("ping", !1, void 0));
        }, s));
      }
      T((te) => {
        S = void 0, clearTimeout(je), clearTimeout(Be), ke(te), zn(te) && te.code === 4499 && (q.close(4499, "Terminated"), q.onerror = null, q.onclose = null);
      }), q.onerror = (te) => b.emit("error", te), q.onclose = (te) => b.emit("closed", te), q.onopen = async () => {
        try {
          b.emit("opened", q);
          const te = typeof n == "function" ? await n() : n;
          if (q.readyState !== D.OPEN)
            return;
          q.send(In(te ? {
            type: re.ConnectionInit,
            payload: te
          } : {
            type: re.ConnectionInit
            // payload is completely absent if not provided
          }, P)), isFinite(l) && l > 0 && (je = setTimeout(() => {
            q.close(ve.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), Ze();
        } catch (te) {
          b.emit("error", te), q.close(ve.InternalClientError, ya(te instanceof Error ? te.message : new Error(te).message, "Internal client error"));
        }
      };
      let et = !1;
      q.onmessage = ({ data: te }) => {
        try {
          const Y = Zu(te, x);
          if (b.emit("message", Y), Y.type === "ping" || Y.type === "pong") {
            b.emit(Y.type, !0, Y.payload), Y.type === "pong" ? Ze() : u || (q.send(In(Y.payload ? {
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
          q.onmessage = null, b.emit("error", Y), q.close(ve.BadResponse, ya(Y instanceof Error ? Y.message : new Error(Y).message, "Bad response"));
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
    if (zn(_) && (tl(_.code) || [
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
    if (lt)
      return !1;
    if (zn(_) && _.code === 1e3)
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
            q.send(In({
              id: B,
              type: re.Subscribe,
              payload: _
            }, P)), ke = () => {
              !j && q.readyState === D.OPEN && q.send(In({
                id: B,
                type: re.Complete
              }, P)), V--, j = !0, je();
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
      if (lt = !0, S) {
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
function zn(e) {
  return Mt(e) && "code" in e && "reason" in e;
}
function tl(e) {
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
function nl(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var Wt = null;
typeof WebSocket < "u" ? Wt = WebSocket : typeof MozWebSocket < "u" ? Wt = MozWebSocket : typeof global < "u" ? Wt = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Wt = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Wt = self.WebSocket || self.MozWebSocket);
const rl = Wt;
class yo extends Error {
}
class il {
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
    ]), this.open = !1, new yo("Transaction rolled back.");
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
class al {
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
const ol = (e) => {
  const t = [...e.definitions].reverse().find((n) => n.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((r) => r.kind == "Field").name.value;
}, ga = Ma({
  onOperation: (e) => {
    var t, n;
    (t = (n = e.context).operationName) !== null && t !== void 0 || (n.operationName = ol(e.query) || "unknown");
  }
}), sl = Ma({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, n] = e.context.url.split("?"), r = new URLSearchParams(n);
        r.set("operation", e.context.operationName), e.context.url = `${t}?${r.toString()}`;
      } catch {
      }
  }
});
var ui;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(ui || (ui = {}));
const ul = 2, ll = 4800, cl = 1e4, dl = [ve.ConnectionAcknowledgementTimeout, ve.ConnectionInitialisationTimeout], ba = Symbol.for("gadget/connection"), fl = "token", pl = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var ue;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(ue || (ue = {}));
const Wn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class go {
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
      value: ue.Anonymous
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
        let d, c;
        if (l ? (d = l, c = u) : (d = u, c = {}), this.currentTransaction)
          return await d(this.currentTransaction);
        let p = null, m;
        try {
          p = await this.waitForOpenedConnection({
            isFatalConnectionProblem(E) {
              return console.warn("Transport error encountered during transaction processing", E), !0;
            },
            connectionAckWaitTimeout: ll,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const y = new Hi({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              ga,
              ...this.exchanges.beforeAsync,
              Mr({
                forwardSubscription(E) {
                  const P = { ...E, query: E.query || "" };
                  return {
                    subscribe: (x) => ({
                      unsubscribe: p.subscribe(P, x)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          y[ba] = this, m = new il(y, p), this.currentTransaction = m, await m.start();
          const g = await d(m);
          return await m.commit(), g;
        } catch (y) {
          try {
            m != null && m.open && await m.rollback();
          } catch (g) {
            g instanceof yo || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", g);
          }
          throw ni(y) ? new Ki(y) : y;
        } finally {
          await (p == null ? void 0 : p.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (u, l = {}) => {
        var d;
        u = hl(u, (d = this.options.baseRouteURL) !== null && d !== void 0 ? d : this.options.endpoint), this.isGadgetRequest(u) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == ue.Custom && await this.options.authenticationMode.custom.processFetch(u, l));
        const c = await this._fetchImplementation(u, l);
        if (this.authenticationMode == ue.BrowserSession) {
          const p = c.headers.get("x-set-authorization"), m = p != null && p.startsWith("Session ") ? p.replace("Session ", "") : null;
          m && this.sessionTokenStore.setItem(this.sessionStorageKey, m);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof Wn < "u" && Wn.fetch ? this._fetchImplementation = Wn.fetch.bind(Wn) : this._fetchImplementation = async (...u) => {
      let l = await import("./browser-ponyfill-abb8e631.js").then((d) => d.b);
      return l.default && (l = l.default), await l(...u);
    }, this.websocketImplementation = (r = (n = t.websocketImplementation) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.WebSocket) !== null && r !== void 0 ? r : rl, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${fl}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = ue.InternalAuthToken : t.apiKey ? this.authenticationMode = ue.APIKey : t.custom && (this.authenticationMode = ue.Custom), this.options.authenticationMode = t), (n = this.authenticationMode) !== null && n !== void 0 || (this.authenticationMode = ue.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = ue.BrowserSession;
    const n = !t || typeof t == "boolean" ? xn.Durable : t.storageType;
    let r;
    n == xn.Durable && Zi("localStorage") ? r = window.localStorage : n == xn.Session && Zi("sessionStorage") ? r = window.sessionStorage : r = new al(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && r.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = r, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let n;
    if (typeof t == "string" ? n = t : typeof t == "object" && "url" in t ? n = t.url : n = String(t), li(this.options.endpoint))
      return !!li(n);
    const r = new URL(this.options.endpoint).host;
    return n.includes(r);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, ga, sl];
    typeof window < "u" && t.push(ws), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      Mr({
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
      Mr({
        isSubscriptionOperation: (r) => r.query.definitions.some((i) => Hu(i, r.variables)),
        forwardSubscription: (r) => ({
          subscribe: (i) => {
            let a;
            const s = import("./index-d5d487d7.js").then(({ applyAsyncIterableIteratorToSink: u, applyLiveQueryJSONDiffPatch: l, makeAsyncIterableIteratorFromSink: d }) => {
              const c = { ...r, query: r.query || "" };
              return a = u(l(d((p) => this.getBaseSubscriptionClient().subscribe(c, p))), i), a;
            });
            return {
              unsubscribe: () => {
                a ? a() : s.then((u) => u());
              }
            };
          }
        })
      }),
      Ns,
      ...this.exchanges.afterAll
    );
    const n = new Hi({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return n[ba] = this, n;
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
    return el({
      url: n,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var r, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == ue.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == ue.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == ue.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == ue.Custom && await ((i = (r = this.options.authenticationMode) === null || r === void 0 ? void 0 : r.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (r, i) => {
          var a, s, u, l, d, c;
          if (this.authenticationMode == ue.BrowserSession && (i != null && i.sessionToken)) {
            const p = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (p !== null && typeof p == "object" ? p.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (l = (u = (s = this.subscriptionClientOptions) === null || s === void 0 ? void 0 : s.on) === null || u === void 0 ? void 0 : u.connected) === null || l === void 0 || l.call(u, r, i), (c = (d = t == null ? void 0 : t.on) === null || d === void 0 ? void 0 : d.connected) === null || c === void 0 || c.call(d, r, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const n = {};
    if (this.authenticationMode == ue.InternalAuthToken)
      n.authorization = "Basic " + pl("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == ue.APIKey)
      n.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == ue.BrowserSession) {
      const r = this.sessionTokenStore.getItem(this.sessionStorageKey);
      r && (n.authorization = `Session ${r}`);
    }
    return n["x-gadget-environment"] = this.environment, n;
  }
  async waitForOpenedConnection(t) {
    let n = this.newSubscriptionClient(t), r = [], i = t.connectionAttempts || ul;
    const a = t.connectionGlobalTimeoutMs || cl, s = () => {
      r.forEach((u) => u()), r = [];
    };
    return await new Promise((u, l) => {
      const d = setTimeout(() => {
        this.disposeClient(n), p(new _s("Timeout opening websocket connection to Gadget API"));
      }, a), c = (g) => {
        if (ni(g)) {
          if (g.code == ui.TooManyRequests)
            return s(), p(new xs(g.reason));
          if (dl.includes(g.code) && i > 0) {
            i -= 1, this.disposeClient(n), n = this.newSubscriptionClient(t), y();
            return;
          }
        }
        clearTimeout(d), l(new Ki(g));
      }, p = (g) => {
        clearTimeout(d), l(g);
      }, m = () => {
        clearTimeout(d), u(n);
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
Object.defineProperty(go, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.20"
});
function hl(e, t) {
  if (typeof e != "string")
    return e;
  if (li(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function li(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const Vn = `
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
`, rn = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, ml = (e) => `
    query InternalFind${Ye(e)}($id: GadgetID!, $select: [String!]) {
      ${rn(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, bo = (e, t) => ({
  search: t != null && t.search ? ie({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? ie({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? ie({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? ie({ value: vo(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), yl = (e, t) => {
  const n = Ye(e), r = bo(n, t);
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
}, gl = (e, t) => {
  const n = Ye(e), r = bo(n, t);
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
}, bl = (e) => {
  const t = Ye(e);
  return `
    ${Vn}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${rn(e)}
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
}, vl = (e, t) => {
  const n = Ye(e), r = Ye(t);
  return `
    ${Vn}

    mutation InternalBulkCreate${r}($records: [Internal${n}Input]!) {
      ${rn(e)}
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
}, Sl = (e) => {
  const t = Ye(e);
  return `
    ${Vn}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${rn(e)}
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
}, Il = (e) => {
  const t = Ye(e);
  return `
    ${Vn}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${rn(e)}
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
}, wl = (e) => {
  const t = Ye(e);
  return `
    ${Vn}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${rn(e)}
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
    }), this.capitalizedApiIdentifier = qt(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((r) => r === this.apiIdentifier);
  }
  getRecordFromData(t, n) {
    let r = t;
    if (!this.validateRecord(t))
      throw new sr(`Invalid arguments found in variables. Did you mean to use ${n}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = await this.connection.currentClient.query(ml(this.apiIdentifier), { id: t, select: vo(n == null ? void 0 : n.select) }).toPromise(), s = (r ? st : kn)(i, ["internal", this.apiIdentifier]);
    return _n(i, s);
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
    const n = gl(this.apiIdentifier, t), r = await this.connection.currentClient.query(n.query, n.variables).toPromise(), i = kn(r, ["internal", `list${this.capitalizedApiIdentifier}`]), a = Dn(r, i);
    return tn.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const r = yl(this.apiIdentifier, t), i = await this.connection.currentClient.query(r.query, r.variables).toPromise();
    let a;
    n === !1 ? a = kn(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = st(i, ["internal", `list${this.capitalizedApiIdentifier}`], n);
    const s = Dn(i, a);
    return tn.boot(this, s, { options: t, pageInfo: a.pageInfo })[0];
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
    const n = await this.connection.currentClient.mutation(bl(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), r = It(n, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return _n(n, r[this.apiIdentifier]);
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
      throw new ei("Cannot perform bulkCreate without a pluralApiIdentifier");
    const r = Ye(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(vl(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = It(i, ["internal", `bulkCreate${r}`]);
    return Si(i, a[this.options.pluralApiIdentifier]);
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
    ti(t, "Can't update a record without an ID passed");
    const r = await this.connection.currentClient.mutation(Sl(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(n, "update")
    }).toPromise(), i = It(r, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return _n(r, i[this.apiIdentifier]);
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
    ti(t, "Can't delete a record without an ID");
    const n = await this.connection.currentClient.mutation(Il(this.apiIdentifier), { id: t }).toPromise();
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
    const n = await this.connection.currentClient.mutation(wl(this.apiIdentifier), t).toPromise();
    It(n, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function vo(e) {
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
          async function(s, u) {
            return await Ys(
              this,
              a.operationName,
              a.findByField,
              s,
              n,
              e,
              u
            );
          },
          a
        ) : i.prototype[a.type] = Object.assign(
          async function(s, u) {
            const l = await ra(
              this,
              e,
              s,
              n,
              e,
              u,
              a.type != "maybeFindOne"
            );
            return l.isEmpty() ? null : l;
          },
          a
        );
        break;
      }
      case "findMany": {
        i.prototype.findMany = Object.assign(async function(s) {
          return await ia(this, t, n, e, s);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        i.prototype[a.type] = Object.assign(async function(s) {
          const u = await ia(
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
          return (u == null ? void 0 : u[0]) ?? null;
        }, a);
        break;
      }
      case "get": {
        i.prototype.get = Object.assign(async function(s) {
          return await ra(this, a.operationName, void 0, n, e, s);
        }, a);
        break;
      }
      case "action": {
        if (a.isBulk) {
          const s = !!a.variables.ids;
          i.prototype[a.functionName] = Object.assign(
            async function(u, l) {
              let d;
              return s ? d = {
                ids: {
                  ...a.variables.ids,
                  value: u
                }
              } : d = {
                inputs: {
                  ...a.variables.inputs,
                  value: u.map(
                    (c) => So(this[a.singleActionFunctionName], void 0, c)
                  )
                }
              }, await aa(
                this,
                a.operationName,
                a.isDeleter ? null : n,
                e,
                a.modelSelectionField,
                !0,
                d,
                l,
                a.namespace,
                a.hasReturnType
              );
            },
            a
          );
        } else {
          const s = !!a.variables.id, u = Object.keys(a.variables).filter((l) => l != "id").length > 0;
          i.prototype[a.functionName] = Object.assign(
            async function(...l) {
              const [d, c] = Nl(a, s, u, l);
              return await aa(
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
function So(e, t, n = {}) {
  var a;
  if (e.hasAmbiguousIdentifier && Object.keys(n).some((s) => {
    var u;
    return !((u = e.paramOnlyVariables) != null && u.includes(s)) && s !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let r;
  const i = Object.entries(e.variables).find(([s, u]) => s === "id" && u.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in n && typeof n[e.modelApiIdentifier] == "object" && n[e.modelApiIdentifier] !== null || !e.variables[e.modelApiIdentifier])
      r = n;
    else {
      r = {
        [e.modelApiIdentifier]: {}
      };
      for (const [s, u] of Object.entries(n))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? r[s] = u : i && s === i[0] ? r.id = u : r[e.modelApiIdentifier][s] = u;
    }
  else
    r = n;
  return r.id ?? (r.id = t), r;
}
function Nl(e, t, n, r) {
  let i, a;
  t && (i = r.shift()), n && (a = r.shift());
  const s = r.shift();
  let u = a;
  (i || a) && (u = So(e, i, a));
  const l = {};
  for (const [d, c] of Object.entries(e.variables))
    l[d] = {
      value: d == "id" ? i : u == null ? void 0 : u[d],
      ...c
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
}, ne = "user", ht = "users", El = Ve(
  ne,
  ht,
  Pe,
  [
    {
      type: "findOne",
      operationName: ne,
      modelApiIdentifier: ne,
      findByVariableName: "id",
      defaultSelection: Pe
    },
    {
      type: "maybeFindOne",
      operationName: ne,
      modelApiIdentifier: ne,
      findByVariableName: "id",
      defaultSelection: Pe
    },
    {
      type: "findMany",
      operationName: ht,
      modelApiIdentifier: ne,
      defaultSelection: Pe
    },
    {
      type: "findFirst",
      operationName: ht,
      modelApiIdentifier: ne,
      defaultSelection: Pe
    },
    {
      type: "maybeFindFirst",
      operationName: ht,
      modelApiIdentifier: ne,
      defaultSelection: Pe
    },
    {
      type: "findOne",
      operationName: ht,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: ne,
      defaultSelection: Pe
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
      modelApiIdentifier: ne,
      modelSelectionField: ht,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: Pe
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
      modelApiIdentifier: ne,
      modelSelectionField: ht,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: Pe
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
      modelApiIdentifier: ne,
      modelSelectionField: ht,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: Pe
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
}, Se = "session", Gt = "sessions", Ol = Ve(
  Se,
  Gt,
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
      operationName: Gt,
      modelApiIdentifier: Se,
      defaultSelection: tt
    },
    {
      type: "findFirst",
      operationName: Gt,
      modelApiIdentifier: Se,
      defaultSelection: tt
    },
    {
      type: "maybeFindFirst",
      operationName: Gt,
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
      modelSelectionField: Gt,
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
      modelSelectionField: Gt,
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
}, fe = "shopifyProduct", Dt = "shopifyProducts", Al = Ve(
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
}, pe = "shopifyProductImage", Ct = "shopifyProductImages", Tl = Ve(
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
}, he = "shopifyProductOption", Ft = "shopifyProductOptions", kl = Ve(
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
}, me = "shopifyProductVariant", jt = "shopifyProductVariants", _l = Ve(
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
}, X = "shopifyShop", mt = "shopifyShops", xl = Ve(
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
}, ye = "productPairing", $t = "productPairings", Pl = Ve(
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
}, le = "shopifySync", bt = "shopifySyncs", Rl = Ve(
  le,
  bt,
  Re,
  [
    {
      type: "findOne",
      operationName: le,
      modelApiIdentifier: le,
      findByVariableName: "id",
      defaultSelection: Re
    },
    {
      type: "maybeFindOne",
      operationName: le,
      modelApiIdentifier: le,
      findByVariableName: "id",
      defaultSelection: Re
    },
    {
      type: "findMany",
      operationName: bt,
      modelApiIdentifier: le,
      defaultSelection: Re
    },
    {
      type: "findFirst",
      operationName: bt,
      modelApiIdentifier: le,
      defaultSelection: Re
    },
    {
      type: "maybeFindFirst",
      operationName: bt,
      modelApiIdentifier: le,
      defaultSelection: Re
    },
    {
      type: "findOne",
      operationName: bt,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: le,
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: le,
      modelSelectionField: le,
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
      modelApiIdentifier: le,
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
      modelApiIdentifier: le,
      modelSelectionField: le,
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
      modelApiIdentifier: le,
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
      modelApiIdentifier: le,
      modelSelectionField: le,
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
      modelApiIdentifier: le,
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
}, ce = "ambiguous", vt = "ambiguouss", Dl = Ve(
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
}, de = "unambiguous", St = "unambiguouss", Cl = Ve(
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
), va = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, Sa = "session", Fl = "sessions", jl = Ve(
  Sa,
  Fl,
  va,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: va,
      modelApiIdentifier: Sa
    }
  ]
);
var Io;
const Ia = "production", $l = "development", Ml = Symbol.for("gadget/modelRelationships"), Ll = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class Vl {
  constructor(t) {
    var i;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[Io] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (a) => await oa(
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
      async () => await oa(
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
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? Ll() ?? $l).toLocaleLowerCase();
    let n;
    this.apiRoots[this.environment] ? n = this.apiRoots[this.environment] : n = `https://related-products-example${this.environment == Ia ? "" : `--${this.environment}`}.gadget.app`;
    const r = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== Ia) {
      const a = ({ forward: s }) => (u) => {
        const l = s(u);
        return yi(
          l,
          Jt((d) => {
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
    if (this.connection = new go({
      endpoint: new URL("api/graphql", n).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: r,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == ue.APIKey && !((i = t == null ? void 0 : t.authenticationMode) != null && i.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new El(this.connection), this.session = new Ol(this.connection), this.shopifyProduct = new Al(this.connection), this.shopifyProductImage = new Tl(this.connection), this.shopifyProductOption = new kl(this.connection), this.shopifyProductVariant = new _l(this.connection), this.shopifyShop = new xl(this.connection), this.productPairing = new Pl(this.connection), this.shopifySync = new Rl(this.connection), this.ambiguous = new Dl(this.connection), this.unambiguous = new Cl(this.connection), this.currentSession = new jl(this.connection), this.internal = {
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
    ti(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let i, a;
    return typeof r < "u" ? (i = n, a = r) : !t.variables || Object.keys(t.variables).length == 0 ? (i = {}, a = n) : (typeof n == "string" ? i = { id: n } : i = n, a = {}), await Hs(this.connection, t, i, a);
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
    return new Yn(this.connection, t, n);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
Io = Ml;
var wo = {}, fr = Ee.createContext(wo), Ul = fr.Provider;
fr.Consumer;
fr.displayName = "UrqlContext";
var No = () => {
  var e = Ee.useContext(fr);
  if (e === wo && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, ci = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, Bl = (e, t) => e === t || !(!e || !t || e.key !== t.key), Br = (e, t) => {
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
      if (s === "operation" ? !Bl(r[s], i[s]) : r[s] !== i[s])
        return !0;
    return !1;
  })(e, n) ? n : e;
}, ql = (e, t) => {
  for (var n = 0, r = t.length; n < r; n++)
    if (e[n] !== t[n])
      return !0;
  return !1;
}, qr = Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function ir(e, t) {
  process.env.NODE_ENV !== "production" && qr && qr.ReactCurrentOwner && qr.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function Gl(e) {
  var t = Ee.useRef(!0), n = No(), [r, i] = Ee.useState(ci), a = Ee.useCallback((s, u) => (ir(i, {
    ...ci,
    fetching: !0
  }), ar(jn(1)(ae((l) => !l.hasNext)(Ut((l) => {
    t.current && ir(i, {
      fetching: !1,
      stale: l.stale,
      data: l.data,
      error: l.error,
      extensions: l.extensions,
      operation: l.operation
    });
  })(n.executeMutation(Tn(e, s), u || {})))))), [n, e, i]);
  return Ee.useEffect(() => (t.current = !0, () => {
    t.current = !1;
  }), []), [r, a];
}
function zl(e, t) {
  var n = Ee.useRef(void 0);
  return Ee.useMemo(() => {
    var r = Tn(e, t);
    return n.current !== void 0 && n.current.key === r.key ? n.current : (n.current = r, r);
  }, [e, t]);
}
var Wl = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
    e.operations$ && Bt((r) => {
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
}, Ql = (e, t) => e.suspense && (!t || t.suspense !== !1);
function Jl(e) {
  var t = No(), n = Wl(t), r = Ql(t, e.context), i = zl(e.query, e.variables), a = Ee.useMemo(() => {
    if (e.pause)
      return null;
    var m = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return r ? Ut((y) => {
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
      var E, P = Bt((w) => {
        g = w, E && E(g);
      })(Ta(() => y && !E || !g)(m));
      if (g == null && y) {
        var x = new Promise((w) => {
          E = w;
        });
        throw n.set(i.key, x), x;
      } else
        P.unsubscribe();
    }
    return g || {
      fetching: !0
    };
  }, [n, i]), u = [t, i, e.requestPolicy, e.context, e.pause], [l, d] = Ee.useState(() => [a, Br(ci, s(a, r)), u]), c = l[1];
  a !== l[0] && ql(l[2], u) && d([a, c = Br(l[1], s(a, r)), u]), Ee.useEffect(() => {
    var m = l[0], y = l[2][1], g = !1, E = (x) => {
      g = !0, ir(d, (w) => {
        var D = Br(w[1], x);
        return w[1] !== D ? [w[0], D, w[2]] : w;
      });
    };
    if (m) {
      var P = Bt(E)(pi(() => {
        E({
          fetching: !1
        });
      })(m));
      return g || E({
        fetching: !0
      }), () => {
        n.dispose(y.key), P.unsubscribe();
      };
    } else
      E({
        fetching: !1
      });
  }, [n, l[0], l[2][1]]);
  var p = Ee.useCallback((m) => {
    var y = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...m
    };
    ir(d, (g) => [r ? Ut((E) => {
      n.set(i.key, E);
    })(t.executeQuery(i, y)) : t.executeQuery(i, y), g[1], u]);
  }, [t, n, i, r, s, e.requestPolicy, e.context]);
  return [c, p];
}
const Ri = Ae.createContext(void 0), Yl = Ae.createContext(void 0), Hl = "/", Kl = "signOut", Xl = "/";
function Zl(e) {
  let t, n;
  if ("api" in e) {
    if (!Fo(e.api))
      throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    t = e.api, n = e.api.connection.currentClient;
  } else if (e.value)
    n = e.value;
  else
    throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
  n.suspense = !0;
  let r = Hl, i = Kl, a = Xl;
  if ("auth" in e) {
    const { auth: s } = e;
    s != null && s.signInPath && (r = s.signInPath), s != null && s.signOutActionApiIdentifier && (i = s.signOutActionApiIdentifier), s != null && s.redirectOnSuccessfulSignInPath && (a = s.redirectOnSuccessfulSignInPath);
  }
  return Ae.createElement(
    Ri.Provider,
    { value: n },
    Ae.createElement(
      Yl.Provider,
      { value: {
        api: t,
        navigate: e.navigate,
        auth: {
          signInPath: r,
          signOutActionApiIdentifier: i,
          redirectOnSuccessfulSignInPath: a
        }
      } },
      Ae.createElement(Ul, { value: n }, e.children)
    )
  );
}
const Eo = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", ec = (e, t) => {
  let n = "";
  return e !== void 0 ? n = `[Network] ${e.message}` : t !== void 0 ? t.forEach((r) => {
    n += `[GraphQL] ${r.message}
`;
  }) : n = "Unknown error", n.trim();
}, tc = (e) => typeof e == "string" ? new L(e) : e != null && e.message && !e.code ? new L(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class Lt extends Error {
  /** @private */
  static forClientSideError(t, n) {
    return new Lt({
      executionErrors: [t],
      response: n
    });
  }
  /** @private */
  static forErrorsResponse(t, n) {
    return new Lt({
      executionErrors: t.map(vi),
      response: n
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new Lt({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, n, r = !1) {
    const i = js(t, n);
    let a = Lt.forMaybeCombinedError(t.error);
    return !a && i && !r && (a = Lt.forClientSideError(i)), a;
  }
  constructor({ networkError: t, executionErrors: n, response: r }) {
    const i = (n || []).map(tc), a = ec(t, i);
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
const nc = (e) => {
  const { context: t, suspense: n, ...r } = e ?? {}, i = Xn(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...r,
    context: i
  };
}, rc = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), ic = (e) => {
  if (!Oa(Ri))
    throw new Error(Eo);
  const t = nc(e);
  return Jl(t);
};
var ac = typeof Element < "u", oc = typeof Map == "function", sc = typeof Set == "function", uc = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Kn(e, t) {
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
        if (!Kn(e[r], t[r]))
          return !1;
      return !0;
    }
    var a;
    if (oc && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!Kn(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (sc && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (uc && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (ac && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !Kn(e[i[r]], t[i[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var lc = function(t, n) {
  try {
    return Kn(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const cc = /* @__PURE__ */ Ro(lc), dc = (e) => {
  const t = Aa();
  return e ? (t.current === void 0 || !cc(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, fc = (e) => {
  if (!Oa(Ri))
    throw new Error(Eo);
  return Gl(e);
}, pc = (e, t) => {
  const n = dc(t), r = Xn(() => Ai(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, n), [e, n]), [i, a] = ic(rc(r, t));
  return [Xn(() => {
    const u = [e.findMany.operationName];
    let l = i.data;
    if (l) {
      const c = en(i.data, u);
      if (c) {
        const p = Dn(i, c);
        l = tn.boot(e, p, c);
      }
    }
    const d = Lt.errorIfDataAbsent(i, u, t == null ? void 0 : t.pause);
    return { ...i, data: l, error: d };
  }, [e, t == null ? void 0 : t.pause, i]), a];
};
var di = { exports: {} }, wn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wa;
function hc() {
  if (wa)
    return wn;
  wa = 1;
  var e = Ae, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, d) {
    var c, p = {}, m = null, y = null;
    d !== void 0 && (m = "" + d), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (c in l)
      r.call(l, c) && !a.hasOwnProperty(c) && (p[c] = l[c]);
    if (u && u.defaultProps)
      for (c in l = u.defaultProps, l)
        p[c] === void 0 && (p[c] = l[c]);
    return { $$typeof: t, type: u, key: m, ref: y, props: p, _owner: i.current };
  }
  return wn.Fragment = n, wn.jsx = s, wn.jsxs = s, wn;
}
var Qn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Na;
function mc() {
  return Na || (Na = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ae, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.iterator, E = "@@iterator";
    function P(o) {
      if (o === null || typeof o != "object")
        return null;
      var f = g && o[g] || o[E];
      return typeof f == "function" ? f : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var f = arguments.length, h = new Array(f > 1 ? f - 1 : 0), v = 1; v < f; v++)
          h[v - 1] = arguments[v];
        D("error", o, h);
      }
    }
    function D(o, f, h) {
      {
        var v = x.ReactDebugCurrentFrame, O = v.getStackAddendum();
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
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === a || Ce || o === i || o === d || o === c || V || o === y || b || T || S || typeof o == "object" && o !== null && (o.$$typeof === m || o.$$typeof === p || o.$$typeof === s || o.$$typeof === u || o.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Fe || o.getModuleId !== void 0));
    }
    function lt(o, f, h) {
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
          case u:
            var f = o;
            return ee(f) + ".Consumer";
          case s:
            var h = o;
            return ee(h._context) + ".Provider";
          case l:
            return lt(o, o.render, "ForwardRef");
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
    var Y = x.ReactCurrentDispatcher, gt;
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
      var pr = typeof WeakMap == "function" ? WeakMap : Map;
      ct = new pr();
    }
    function an(o, f) {
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
      var xe = o ? o.displayName || o.name : "", bn = xe ? qe(xe) : "";
      return typeof o == "function" && ct.set(o, bn), bn;
    }
    function hr(o, f, h) {
      return an(o, !1);
    }
    function mr(o) {
      var f = o.prototype;
      return !!(f && f.isReactComponent);
    }
    function dt(o, f, h) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return an(o, mr(o));
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
          case l:
            return hr(o.render);
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
    var ft = Object.prototype.hasOwnProperty, on = {}, sn = x.ReactDebugCurrentFrame;
    function pt(o) {
      if (o) {
        var f = o._owner, h = dt(o.type, o._source, f ? f.type : null);
        sn.setExtraStackFrame(h);
      } else
        sn.setExtraStackFrame(null);
    }
    function yr(o, f, h, v, O) {
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
            I && !(I instanceof Error) && (pt(O), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", h, N, typeof I), pt(null)), I instanceof Error && !(I.message in on) && (on[I.message] = !0, pt(O), w("Failed %s type: %s", h, I.message), pt(null));
          }
      }
    }
    var gr = Array.isArray;
    function kt(o) {
      return gr(o);
    }
    function br(o) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, h = f && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return h;
      }
    }
    function vr(o) {
      try {
        return un(o), !1;
      } catch {
        return !0;
      }
    }
    function un(o) {
      return "" + o;
    }
    function ln(o) {
      if (vr(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(o)), un(o);
    }
    var Ge = x.ReactCurrentOwner, Sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, cn, dn, _t;
    _t = {};
    function Ir(o) {
      if (ft.call(o, "ref")) {
        var f = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function wr(o) {
      if (ft.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Nr(o, f) {
      if (typeof o.ref == "string" && Ge.current && f && Ge.current.stateNode !== f) {
        var h = z(Ge.current.type);
        _t[h] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Ge.current.type), o.ref), _t[h] = !0);
      }
    }
    function Er(o, f) {
      {
        var h = function() {
          cn || (cn = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function Or(o, f) {
      {
        var h = function() {
          dn || (dn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var Ar = function(o, f, h, v, O, k, N) {
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
    function Tr(o, f, h, v, O) {
      {
        var k, N = {}, I = null, G = null;
        h !== void 0 && (ln(h), I = "" + h), wr(f) && (ln(f.key), I = "" + f.key), Ir(f) && (G = f.ref, Nr(f, O));
        for (k in f)
          ft.call(f, k) && !Sr.hasOwnProperty(k) && (N[k] = f[k]);
        if (o && o.defaultProps) {
          var R = o.defaultProps;
          for (k in R)
            N[k] === void 0 && (N[k] = R[k]);
        }
        if (I || G) {
          var C = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          I && Er(N, C), G && Or(N, C);
        }
        return Ar(o, I, G, O, v, Ge.current, N);
      }
    }
    var xt = x.ReactCurrentOwner, fn = x.ReactDebugCurrentFrame;
    function _e(o) {
      if (o) {
        var f = o._owner, h = dt(o.type, o._source, f ? f.type : null);
        fn.setExtraStackFrame(h);
      } else
        fn.setExtraStackFrame(null);
    }
    var Pt;
    Pt = !1;
    function Rt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function pn() {
      {
        if (xt.current) {
          var o = z(xt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function kr(o) {
      {
        if (o !== void 0) {
          var f = o.fileName.replace(/^.*[\\\/]/, ""), h = o.lineNumber;
          return `

Check your code at ` + f + ":" + h + ".";
        }
        return "";
      }
    }
    var hn = {};
    function _r(o) {
      {
        var f = pn();
        if (!f) {
          var h = typeof o == "string" ? o : o.displayName || o.name;
          h && (f = `

Check the top-level render call using <` + h + ">.");
        }
        return f;
      }
    }
    function mn(o, f) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var h = _r(f);
        if (hn[h])
          return;
        hn[h] = !0;
        var v = "";
        o && o._owner && o._owner !== xt.current && (v = " It was passed a child from " + z(o._owner.type) + "."), _e(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, v), _e(null);
      }
    }
    function yn(o, f) {
      {
        if (typeof o != "object")
          return;
        if (kt(o))
          for (var h = 0; h < o.length; h++) {
            var v = o[h];
            Rt(v) && mn(v, f);
          }
        else if (Rt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var O = P(o);
          if (typeof O == "function" && O !== o.entries)
            for (var k = O.call(o), N; !(N = k.next()).done; )
              Rt(N.value) && mn(N.value, f);
        }
      }
    }
    function xr(o) {
      {
        var f = o.type;
        if (f == null || typeof f == "string")
          return;
        var h;
        if (typeof f == "function")
          h = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          h = f.propTypes;
        else
          return;
        if (h) {
          var v = z(f);
          yr(h, o.props, "prop", v, o);
        } else if (f.PropTypes !== void 0 && !Pt) {
          Pt = !0;
          var O = z(f);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pr(o) {
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
    function gn(o, f, h, v, O, k) {
      {
        var N = Ue(o);
        if (!N) {
          var I = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = kr(O);
          G ? I += G : I += pn();
          var R;
          o === null ? R = "null" : kt(o) ? R = "array" : o !== void 0 && o.$$typeof === t ? (R = "<" + (z(o.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : R = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, I);
        }
        var C = Tr(o, f, h, O, k);
        if (C == null)
          return C;
        if (N) {
          var H = f.children;
          if (H !== void 0)
            if (v)
              if (kt(H)) {
                for (var xe = 0; xe < H.length; xe++)
                  yn(H[xe], o);
                Object.freeze && Object.freeze(H);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yn(H, o);
        }
        return o === r ? Pr(C) : xr(C), C;
      }
    }
    function Rr(o, f, h) {
      return gn(o, f, h, !0);
    }
    function Dr(o, f, h) {
      return gn(o, f, h, !1);
    }
    var Cr = Dr, Fr = Rr;
    Qn.Fragment = r, Qn.jsx = Cr, Qn.jsxs = Fr;
  }()), Qn;
}
process.env.NODE_ENV === "production" ? di.exports = hc() : di.exports = mc();
var Ea = di.exports;
const yc = To(function({ open: e, onShow: t, onHide: n, children: r, ...i }, a) {
  const [s, u] = On(), { titleBar: l, modalContent: d } = ko.toArray(r).reduce(
    (p, m) => {
      const y = typeof m == "object" && "type" in m ? m.type : void 0;
      return y === "ui-title-bar" || typeof y == "object" && y.displayName === "ui-title-bar" ? {
        ...p,
        titleBar: m
      } : (p.modalContent.push(m), p);
    },
    { modalContent: [] }
  ), c = s ? Po.createPortal(d, s.content) : null;
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
  }, [s]), /* @__PURE__ */ Ea.jsxs(
    "ui-modal",
    {
      ...i,
      ref: (p) => {
        u(p), a && (typeof a == "function" ? a(p) : a.current = p);
      },
      children: [
        l,
        /* @__PURE__ */ Ea.jsx("div", { children: c })
      ]
    }
  );
});
yc.displayName = "ui-modal";
const gc = new Proxy(
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
function bc() {
  if (typeof window > "u")
    return gc;
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
const vc = `
  mutation ShopifyFetchOrInstallShop($shopifySessionToken: String!) {
    shopifyConnection {
      fetchOrInstallShop(shopifySessionToken: $shopifySessionToken) {
        isAuthenticated
        redirectToOauth
        missingScopes
      }
    }
  }
`, Sc = _o(({ children: e, gadgetAppUrl: t, originalQueryParams: n, api: r, type: i, host: a, isReady: s, isRootFrameRequest: u }) => {
  const l = bc(), d = (n == null ? void 0 : n.has("hmac")) && (n == null ? void 0 : n.has("shop")), c = l.environment.embedded || l.environment.mobile, p = c && i === wt.Embedded, m = s && typeof a < "u" && !p, [y, g] = On({
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !0,
    appBridge: l,
    isRootFrameRequest: !1
  }), [E, P] = On(null), [x, w] = On();
  Le(() => {
    l && l.idToken().then(P).catch(w);
  }, [l]), Le(() => {
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
  const S = Aa(!1), [{ data: V, fetching: Ce, error: Fe }, Ue] = fc(vc);
  V && (console.debug({ fetchOrInstallShopData: V }, "[gadget-rsab] fetched or installed shop data"), D = V.shopifyConnection.fetchOrInstallShop.redirectToOauth, b = V.shopifyConnection.fetchOrInstallShop.isAuthenticated, T = V.shopifyConnection.fetchOrInstallShop.missingScopes ?? []), Le(() => {
    S.current || E && (S.current = !0, Ue({ shopifySessionToken: E }).catch((ee) => {
      console.error({ err: ee }, "[gadget-rsab] error fetching or installing shop");
    }));
  }, [E, Ue]), Le(() => {
    if (!D || u)
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
  }, [t, u, n, D]);
  const lt = (m || D || Ce) && !u;
  return Le(() => {
    const ee = {
      isAuthenticated: b,
      isEmbedded: c,
      canAuth: !!l,
      loading: lt,
      appBridge: l,
      error: Fe || x,
      isRootFrameRequest: u
    };
    return console.debug("[gadget-rsab] context changed", ee), g(ee);
  }, [lt, c, l, b, Fe, x, u]), Le(() => {
    if (T.length > 0 && !D) {
      const ee = new CustomEvent("gadget:devharness:rsab.shopifyManagedInstallation.missingScopes", {
        detail: {
          missingScopes: T
        }
      });
      globalThis.dispatchEvent(ee);
    }
  }, [D, T]), Ae.createElement(Oo.Provider, { value: y }, e);
}), Ic = ({ isRootFrameRequest: e, children: t, query: n, gadgetAppUrl: r, type: i }) => {
  const a = (n == null ? void 0 : n.has("hmac")) && (n == null ? void 0 : n.has("shop")), s = a;
  return Le(() => {
    if (!s || e)
      return;
    const u = new URL("/api/connections/auth/shopify", r);
    u.search = (n == null ? void 0 : n.toString()) ?? "";
    const l = u.toString();
    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process in standalone mode or missing app bridge global", {
      appType: i,
      isInstallRequest: a,
      redirectURL: l,
      gadgetAppUrl: r
    }), window.location.assign(l);
  }, [r, e, n, s]), Ae.createElement(Oo.Provider, { value: {
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !1,
    appBridge: null,
    isRootFrameRequest: e
  } }, t);
}, wc = ({ type: e, children: t, api: n }) => {
  const r = !!(globalThis && globalThis.shopify), [i, a] = On(null), s = !!i, { query: u } = i ?? {}, l = (u == null ? void 0 : u.get("host")) ?? void 0, d = e ?? wt.Embedded, c = Xn(() => u, [s]), p = !(u != null && u.has("hmac")) && !(u != null && u.has("shop")) && e == wt.Embedded, m = new URL(n.connection.options.endpoint).origin;
  if (Le(() => {
    a({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search)
    });
  }, []), console.debug("[gadget-rsab] provider rendering", {
    host: l,
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
  return Ae.createElement(Zl, { api: n }, d === wt.Embedded && r ? Ae.createElement(Sc, { gadgetAppUrl: m, api: n, originalQueryParams: c, type: d, host: l, isReady: s, isRootFrameRequest: p }, t) : Ae.createElement(Ic, { isRootFrameRequest: p, query: u, type: d, gadgetAppUrl: m }, t));
}, Oo = xo({
  loading: !0,
  isEmbedded: !1,
  isAuthenticated: !1,
  canAuth: !1,
  appBridge: null,
  isRootFrameRequest: !1
}), Ao = new Vl(), Nc = () => {
  const [{ data: e }] = pc(Ao.shopifyProduct);
  return /* @__PURE__ */ Zn.jsx(Zn.Fragment, { children: JSON.stringify(e) });
}, kc = () => /* @__PURE__ */ Zn.jsx(wc, { api: Ao, shopifyApiKey: "deadbeef", children: /* @__PURE__ */ Zn.jsx(Nc, {}) });
export {
  kc as A,
  Nc as R,
  Ac as c,
  Ro as g
};
