import * as $e from "react";
import hr, { useMemo as Dr, useContext as Sa, useRef as wa } from "react";
var nu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ia(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fr = { exports: {} }, Ft = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function Aa() {
  if (Rn)
    return Ft;
  Rn = 1;
  var e = hr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, l, d) {
    var c, f = {}, y = null, h = null;
    d !== void 0 && (y = "" + d), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (c in l)
      n.call(l, c) && !a.hasOwnProperty(c) && (f[c] = l[c]);
    if (s && s.defaultProps)
      for (c in l = s.defaultProps, l)
        f[c] === void 0 && (f[c] = l[c]);
    return { $$typeof: t, type: s, key: y, ref: h, props: f, _owner: i.current };
  }
  return Ft.Fragment = r, Ft.jsx = o, Ft.jsxs = o, Ft;
}
var jt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function ka() {
  return Dn || (Dn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = hr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, w = "@@iterator";
    function _(u) {
      if (u === null || typeof u != "object")
        return null;
      var p = b && u[b] || u[w];
      return typeof p == "function" ? p : null;
    }
    var M = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(u) {
      {
        for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), I = 1; I < p; I++)
          v[I - 1] = arguments[I];
        V("error", u, v);
      }
    }
    function V(u, p, v) {
      {
        var I = M.ReactDebugCurrentFrame, x = I.getStackAddendum();
        x !== "" && (p += "%s", v = v.concat([x]));
        var j = v.map(function(C) {
          return String(C);
        });
        j.unshift("Warning: " + p), Function.prototype.apply.call(console[u], console, j);
      }
    }
    var m = !1, A = !1, g = !1, U = !1, Ke = !1, ht;
    ht = Symbol.for("react.module.reference");
    function bt(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === a || Ke || u === i || u === d || u === c || U || u === h || m || A || g || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === f || u.$$typeof === o || u.$$typeof === s || u.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === ht || u.getModuleId !== void 0));
    }
    function Ht(u, p, v) {
      var I = u.displayName;
      if (I)
        return I;
      var x = p.displayName || p.name || "";
      return x !== "" ? v + "(" + x + ")" : v;
    }
    function Rt(u) {
      return u.displayName || "Context";
    }
    function Ae(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case r:
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
      if (typeof u == "object")
        switch (u.$$typeof) {
          case s:
            var p = u;
            return Rt(p) + ".Consumer";
          case o:
            var v = u;
            return Rt(v._context) + ".Provider";
          case l:
            return Ht(u, u.render, "ForwardRef");
          case f:
            var I = u.displayName || null;
            return I !== null ? I : Ae(u.type) || "Memo";
          case y: {
            var x = u, j = x._payload, C = x._init;
            try {
              return Ae(C(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, q = 0, F, T, $, Re, R, Ge, Je;
    function at() {
    }
    at.__reactDisabledLog = !0;
    function Ye() {
      {
        if (q === 0) {
          F = console.log, T = console.info, $ = console.warn, Re = console.error, R = console.group, Ge = console.groupCollapsed, Je = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: at,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        q++;
      }
    }
    function Y() {
      {
        if (q--, q === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, u, {
              value: F
            }),
            info: k({}, u, {
              value: T
            }),
            warn: k({}, u, {
              value: $
            }),
            error: k({}, u, {
              value: Re
            }),
            group: k({}, u, {
              value: R
            }),
            groupCollapsed: k({}, u, {
              value: Ge
            }),
            groupEnd: k({}, u, {
              value: Je
            })
          });
        }
        q < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = M.ReactCurrentDispatcher, Zt;
    function vt(u, p, v) {
      {
        if (Zt === void 0)
          try {
            throw Error();
          } catch (x) {
            var I = x.stack.trim().match(/\n( *(at )?)/);
            Zt = I && I[1] || "";
          }
        return `
` + Zt + u;
      }
    }
    var Ir = !1, Xt;
    {
      var Hi = typeof WeakMap == "function" ? WeakMap : Map;
      Xt = new Hi();
    }
    function gn(u, p) {
      if (!u || Ir)
        return "";
      {
        var v = Xt.get(u);
        if (v !== void 0)
          return v;
      }
      var I;
      Ir = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = L.current, L.current = null, Ye();
      try {
        if (p) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (Le) {
              I = Le;
            }
            Reflect.construct(u, [], C);
          } else {
            try {
              C.call();
            } catch (Le) {
              I = Le;
            }
            u.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Le) {
            I = Le;
          }
          u();
        }
      } catch (Le) {
        if (Le && I && typeof Le.stack == "string") {
          for (var P = Le.stack.split(`
`), le = I.stack.split(`
`), W = P.length - 1, K = le.length - 1; W >= 1 && K >= 0 && P[W] !== le[K]; )
            K--;
          for (; W >= 1 && K >= 0; W--, K--)
            if (P[W] !== le[K]) {
              if (W !== 1 || K !== 1)
                do
                  if (W--, K--, K < 0 || P[W] !== le[K]) {
                    var ke = `
` + P[W].replace(" at new ", " at ");
                    return u.displayName && ke.includes("<anonymous>") && (ke = ke.replace("<anonymous>", u.displayName)), typeof u == "function" && Xt.set(u, ke), ke;
                  }
                while (W >= 1 && K >= 0);
              break;
            }
        }
      } finally {
        Ir = !1, L.current = j, Y(), Error.prepareStackTrace = x;
      }
      var St = u ? u.displayName || u.name : "", xn = St ? vt(St) : "";
      return typeof u == "function" && Xt.set(u, xn), xn;
    }
    function Zi(u, p, v) {
      return gn(u, !1);
    }
    function Xi(u) {
      var p = u.prototype;
      return !!(p && p.isReactComponent);
    }
    function er(u, p, v) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return gn(u, Xi(u));
      if (typeof u == "string")
        return vt(u);
      switch (u) {
        case d:
          return vt("Suspense");
        case c:
          return vt("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            return Zi(u.render);
          case f:
            return er(u.type, p, v);
          case y: {
            var I = u, x = I._payload, j = I._init;
            try {
              return er(j(x), p, v);
            } catch {
            }
          }
        }
      return "";
    }
    var tr = Object.prototype.hasOwnProperty, Sn = {}, wn = M.ReactDebugCurrentFrame;
    function rr(u) {
      if (u) {
        var p = u._owner, v = er(u.type, u._source, p ? p.type : null);
        wn.setExtraStackFrame(v);
      } else
        wn.setExtraStackFrame(null);
    }
    function ea(u, p, v, I, x) {
      {
        var j = Function.call.bind(tr);
        for (var C in u)
          if (j(u, C)) {
            var P = void 0;
            try {
              if (typeof u[C] != "function") {
                var le = Error((I || "React class") + ": " + v + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              P = u[C](p, C, I, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              P = W;
            }
            P && !(P instanceof Error) && (rr(x), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", v, C, typeof P), rr(null)), P instanceof Error && !(P.message in Sn) && (Sn[P.message] = !0, rr(x), S("Failed %s type: %s", v, P.message), rr(null));
          }
      }
    }
    var ta = Array.isArray;
    function Ar(u) {
      return ta(u);
    }
    function ra(u) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, v = p && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return v;
      }
    }
    function na(u) {
      try {
        return In(u), !1;
      } catch {
        return !0;
      }
    }
    function In(u) {
      return "" + u;
    }
    function An(u) {
      if (na(u))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ra(u)), In(u);
    }
    var Dt = M.ReactCurrentOwner, ia = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, kn, On, kr;
    kr = {};
    function aa(u) {
      if (tr.call(u, "ref")) {
        var p = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function oa(u) {
      if (tr.call(u, "key")) {
        var p = Object.getOwnPropertyDescriptor(u, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function sa(u, p) {
      if (typeof u.ref == "string" && Dt.current && p && Dt.current.stateNode !== p) {
        var v = Ae(Dt.current.type);
        kr[v] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ae(Dt.current.type), u.ref), kr[v] = !0);
      }
    }
    function ua(u, p) {
      {
        var v = function() {
          kn || (kn = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function la(u, p) {
      {
        var v = function() {
          On || (On = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var ca = function(u, p, v, I, x, j, C) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: p,
        ref: v,
        props: C,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function da(u, p, v, I, x) {
      {
        var j, C = {}, P = null, le = null;
        v !== void 0 && (An(v), P = "" + v), oa(p) && (An(p.key), P = "" + p.key), aa(p) && (le = p.ref, sa(p, x));
        for (j in p)
          tr.call(p, j) && !ia.hasOwnProperty(j) && (C[j] = p[j]);
        if (u && u.defaultProps) {
          var W = u.defaultProps;
          for (j in W)
            C[j] === void 0 && (C[j] = W[j]);
        }
        if (P || le) {
          var K = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          P && ua(C, K), le && la(C, K);
        }
        return ca(u, P, le, x, I, Dt.current, C);
      }
    }
    var Or = M.ReactCurrentOwner, Nn = M.ReactDebugCurrentFrame;
    function gt(u) {
      if (u) {
        var p = u._owner, v = er(u.type, u._source, p ? p.type : null);
        Nn.setExtraStackFrame(v);
      } else
        Nn.setExtraStackFrame(null);
    }
    var Nr;
    Nr = !1;
    function Er(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function En() {
      {
        if (Or.current) {
          var u = Ae(Or.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function fa(u) {
      {
        if (u !== void 0) {
          var p = u.fileName.replace(/^.*[\\\/]/, ""), v = u.lineNumber;
          return `

Check your code at ` + p + ":" + v + ".";
        }
        return "";
      }
    }
    var Pn = {};
    function pa(u) {
      {
        var p = En();
        if (!p) {
          var v = typeof u == "string" ? u : u.displayName || u.name;
          v && (p = `

Check the top-level render call using <` + v + ">.");
        }
        return p;
      }
    }
    function Tn(u, p) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var v = pa(p);
        if (Pn[v])
          return;
        Pn[v] = !0;
        var I = "";
        u && u._owner && u._owner !== Or.current && (I = " It was passed a child from " + Ae(u._owner.type) + "."), gt(u), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, I), gt(null);
      }
    }
    function Cn(u, p) {
      {
        if (typeof u != "object")
          return;
        if (Ar(u))
          for (var v = 0; v < u.length; v++) {
            var I = u[v];
            Er(I) && Tn(I, p);
          }
        else if (Er(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var x = _(u);
          if (typeof x == "function" && x !== u.entries)
            for (var j = x.call(u), C; !(C = j.next()).done; )
              Er(C.value) && Tn(C.value, p);
        }
      }
    }
    function ya(u) {
      {
        var p = u.type;
        if (p == null || typeof p == "string")
          return;
        var v;
        if (typeof p == "function")
          v = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === f))
          v = p.propTypes;
        else
          return;
        if (v) {
          var I = Ae(p);
          ea(v, u.props, "prop", I, u);
        } else if (p.PropTypes !== void 0 && !Nr) {
          Nr = !0;
          var x = Ae(p);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ma(u) {
      {
        for (var p = Object.keys(u.props), v = 0; v < p.length; v++) {
          var I = p[v];
          if (I !== "children" && I !== "key") {
            gt(u), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), gt(null);
            break;
          }
        }
        u.ref !== null && (gt(u), S("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
      }
    }
    function _n(u, p, v, I, x, j) {
      {
        var C = bt(u);
        if (!C) {
          var P = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = fa(x);
          le ? P += le : P += En();
          var W;
          u === null ? W = "null" : Ar(u) ? W = "array" : u !== void 0 && u.$$typeof === t ? (W = "<" + (Ae(u.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : W = typeof u, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, P);
        }
        var K = da(u, p, v, x, j);
        if (K == null)
          return K;
        if (C) {
          var ke = p.children;
          if (ke !== void 0)
            if (I)
              if (Ar(ke)) {
                for (var St = 0; St < ke.length; St++)
                  Cn(ke[St], u);
                Object.freeze && Object.freeze(ke);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Cn(ke, u);
        }
        return u === n ? ma(K) : ya(K), K;
      }
    }
    function ha(u, p, v) {
      return _n(u, p, v, !0);
    }
    function ba(u, p, v) {
      return _n(u, p, v, !1);
    }
    var va = ba, ga = ha;
    jt.Fragment = n, jt.jsx = va, jt.jsxs = ga;
  }()), jt;
}
process.env.NODE_ENV === "production" ? Fr.exports = Aa() : Fr.exports = ka();
var Fn = Fr.exports, Zr = () => {
}, be = Zr;
function xe(e) {
  return {
    tag: 0,
    0: e
  };
}
function Kt(e) {
  return {
    tag: 1,
    0: e
  };
}
var Oa = (e) => e;
function Z(e) {
  return (t) => (r) => {
    var n = be;
    t((i) => {
      i === 0 ? r(0) : i.tag === 0 ? (n = i[0], r(i)) : e(i[0]) ? r(i) : n(0);
    });
  };
}
function Ot(e) {
  return (t) => (r) => t((n) => {
    n === 0 || n.tag === 0 ? r(n) : r(Kt(e(n[0])));
  });
}
function Lt(e) {
  return (t) => (r) => {
    var n = [], i = be, a = !1, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, n.length || r(0)) : s.tag === 0 ? i = s[0] : (a = !1, function(d) {
        var c = be;
        d((f) => {
          if (f === 0) {
            if (n.length) {
              var y = n.indexOf(c);
              y > -1 && (n = n.slice()).splice(y, 1), n.length || (o ? r(0) : a || (a = !0, i(0)));
            }
          } else
            f.tag === 0 ? (n.push(c = f[0]), c(0)) : n.length && (r(f), c(0));
        });
      }(e(s[0])), a || (a = !0, i(0))));
    }), r(xe((s) => {
      if (s === 1) {
        o || (o = !0, i(1));
        for (var l = 0, d = n, c = n.length; l < c; l++)
          d[l](1);
        n.length = 0;
      } else {
        !o && !a ? (a = !0, i(0)) : a = !1;
        for (var f = 0, y = n, h = n.length; f < h; f++)
          y[f](0);
      }
    }));
  };
}
function Na(e) {
  return Lt(Oa)(e);
}
function Nt(e) {
  return Na(Ta(e));
}
function Xr(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          r(xe((o) => {
            o === 1 ? (n = !0, a(1), e()) : a(o);
          }));
        } else
          r(i);
    });
  };
}
function Et(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0);
        else if (i.tag === 0) {
          var a = i[0];
          r(xe((o) => {
            o === 1 && (n = !0), a(o);
          }));
        } else
          e(i[0]), r(i);
    });
  };
}
function jn(e) {
  return (t) => (r) => t((n) => {
    n === 0 ? r(0) : n.tag === 0 ? (r(n), e()) : r(n);
  });
}
function Wt(e) {
  var t = [], r = be, n = !1;
  return (i) => {
    t.push(i), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var o = 0, s = t, l = t.length; o < l; o++)
          s[o](0);
        t.length = 0;
      } else if (a.tag === 0)
        r = a[0];
      else {
        n = !1;
        for (var d = 0, c = t, f = t.length; d < f; d++)
          c[d](a);
      }
    }), i(xe((a) => {
      if (a === 1) {
        var o = t.indexOf(i);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || r(1);
      } else
        n || (n = !0, r(0));
    }));
  };
}
function Mn(e) {
  return (t) => (r) => {
    var n = be, i = be, a = !1, o = !1, s = !1, l = !1;
    t((d) => {
      l || (d === 0 ? (l = !0, s || r(0)) : d.tag === 0 ? n = d[0] : (s && (i(1), i = be), a ? a = !1 : (a = !0, n(0)), function(f) {
        s = !0, f((y) => {
          s && (y === 0 ? (s = !1, l ? r(0) : a || (a = !0, n(0))) : y.tag === 0 ? (o = !1, (i = y[0])(0)) : (r(y), o ? o = !1 : i(0)));
        });
      }(e(d[0]))));
    }), r(xe((d) => {
      d === 1 ? (l || (l = !0, n(1)), s && (s = !1, i(1))) : (!l && !a && (a = !0, n(0)), s && !o && (o = !0, i(0)));
    }));
  };
}
function br(e) {
  return (t) => (r) => {
    var n = be, i = !1, a = 0;
    t((o) => {
      i || (o === 0 ? (i = !0, r(0)) : o.tag === 0 ? e <= 0 ? (i = !0, r(0), o[0](1)) : n = o[0] : a++ < e ? (r(o), !i && a >= e && (i = !0, r(0), n(1))) : r(o));
    }), r(xe((o) => {
      o === 1 && !i ? (i = !0, n(1)) : o === 0 && !i && a < e && n(0);
    }));
  };
}
function en(e) {
  return (t) => (r) => {
    var n = be, i = be, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, i(1), r(0)) : o.tag === 0 ? (n = o[0], e((s) => {
        s === 0 || (s.tag === 0 ? (i = s[0])(0) : (a = !0, i(1), n(1), r(0)));
      })) : r(o));
    }), r(xe((o) => {
      o === 1 && !a ? (a = !0, n(1), i(1)) : a || n(0);
    }));
  };
}
function hi(e, t) {
  return (r) => (n) => {
    var i = be, a = !1;
    r((o) => {
      a || (o === 0 ? (a = !0, n(0)) : o.tag === 0 ? (i = o[0], n(o)) : e(o[0]) ? n(o) : (a = !0, t && n(o), n(0), i(1)));
    });
  };
}
function Ea(e) {
  return (t) => e()(t);
}
function bi(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), n = !1, i = !1, a = !1, o;
    t(xe(async (s) => {
      if (s === 1)
        n = !0, r.return && r.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !n; )
          if ((o = await r.next()).done)
            n = !0, r.return && await r.return(), t(0);
          else
            try {
              a = !1, t(Kt(o.value));
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
function Pa(e) {
  return e[Symbol.asyncIterator] ? bi(e) : (t) => {
    var r = e[Symbol.iterator](), n = !1, i = !1, a = !1, o;
    t(xe((s) => {
      if (s === 1)
        n = !0, r.return && r.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !n; )
          if ((o = r.next()).done)
            n = !0, r.return && r.return(), t(0);
          else
            try {
              a = !1, t(Kt(o.value));
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
var Ta = Pa;
function $t(e) {
  return (t) => {
    var r = !1;
    t(xe((n) => {
      n === 1 ? r = !0 : r || (r = !0, t(Kt(e)), t(0));
    }));
  };
}
function tn(e) {
  return (t) => {
    var r = !1, n = e({
      next(i) {
        r || t(Kt(i));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(xe((i) => {
      i === 1 && !r && (r = !0, n());
    }));
  };
}
function qn() {
  var e, t;
  return {
    source: Wt(tn((r) => (e = r.next, t = r.complete, Zr))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function Bn(e) {
  return tn((t) => (e.then((r) => {
    Promise.resolve(r).then(() => {
      t.next(r), t.complete();
    });
  }), Zr));
}
function yt(e) {
  return (t) => {
    var r = be, n = !1;
    return t((i) => {
      i === 0 ? n = !0 : i.tag === 0 ? (r = i[0])(0) : n || (e(i[0]), r(0));
    }), {
      unsubscribe() {
        n || (n = !0, r(1));
      }
    };
  };
}
function Ca(e) {
  yt((t) => {
  })(e);
}
var Pr = {
  done: !0
}, _a = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], r = !1, n = be, i;
    return e((a) => {
      r || (a === 0 ? (i && (i = i(Pr)), r = !0) : a.tag === 0 ? (n = a[0])(0) : i ? i = i({
        value: a[0],
        done: !1
      }) : t.push(a[0]));
    }), {
      async next() {
        return r && !t.length ? Pr : (!r && t.length <= 1 && n(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((a) => i = a));
      },
      async return() {
        return r || (i = n(1)), r = !0, Pr;
      }
    };
  }
});
function rn(e) {
  return new Promise((t) => {
    var r = be, n;
    e((i) => {
      i === 0 ? Promise.resolve(n).then(t) : i.tag === 0 ? (r = i[0])(0) : (n = i[0], r(0));
    });
  });
}
var nn = (...e) => {
  for (var t = e[0], r = 1, n = e.length; r < n; r++)
    t = e[r](t);
  return t;
}, kt = {
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
class zt extends Error {
  constructor(t, r, n, i, a, o, s) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), r && (this.nodes = Array.isArray(r) ? r : [r]), n && (this.source = n), i && (this.positions = i), o && (this.originalError = o);
    var l = s;
    if (!l && o) {
      var d = o.extensions;
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
}
var B, O;
function J(e) {
  return new zt(`Syntax Error: Unexpected token at ${O} in ${e}`);
}
function we(e) {
  if (e.lastIndex = O, e.test(B))
    return B.slice(O, O = e.lastIndex);
}
var nr = / +(?=[^\s])/y;
function xa(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, a = t.length - 1, o = 0; o < t.length; o++)
    nr.lastIndex = 0, nr.test(t[o]) && (o && (!n || nr.lastIndex < n) && (n = nr.lastIndex), i = i || o, a = o);
  for (var s = i; s <= a; s++)
    s !== i && (r += `
`), r += t[s].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function E() {
  for (var e = 0 | B.charCodeAt(O++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | B.charCodeAt(O++))
    if (e === 35)
      for (; (e = B.charCodeAt(O++)) !== 10 && e !== 13; )
        ;
  O--;
}
var vi = /[_A-Za-z]\w*/y;
function Ue() {
  var e;
  if (e = we(vi))
    return {
      kind: "Name",
      value: e
    };
}
var Ra = /(?:null|true|false)/y, gi = /\$[_A-Za-z]\w*/y, Da = /-?\d+/y, Fa = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, ja = /\\/g, Ma = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, qa = /"(?:"|[^\r\n]*?[^\\]")/y;
function dr(e) {
  var t, r;
  if (r = we(Ra))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = we(gi)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = we(Da)) {
    var n = r;
    (r = we(Fa)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = we(vi))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = we(Ma))
    t = {
      kind: "StringValue",
      value: xa(r.slice(3, -3)),
      block: !0
    };
  else if (r = we(qa))
    t = {
      kind: "StringValue",
      value: ja.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (B.charCodeAt(O) === 91) {
      O++, E();
      for (var s = []; o = dr(a); )
        s.push(o);
      if (B.charCodeAt(O++) !== 93)
        throw J("ListValue");
      return E(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (B.charCodeAt(O) === 123) {
      O++, E();
      for (var o = [], s; s = Ue(); ) {
        if (E(), B.charCodeAt(O++) !== 58)
          throw J("ObjectField");
        E();
        var l = dr(a);
        if (!l)
          throw J("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: l
        });
      }
      if (B.charCodeAt(O++) !== 125)
        throw J("ObjectValue");
      return E(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return E(), t;
}
function Si(e) {
  var t = [];
  if (E(), B.charCodeAt(O) === 40) {
    O++, E();
    for (var r; r = Ue(); ) {
      if (E(), B.charCodeAt(O++) !== 58)
        throw J("Argument");
      E();
      var n = dr(e);
      if (!n)
        throw J("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || B.charCodeAt(O++) !== 41)
      throw J("Argument");
    E();
  }
  return t;
}
function Pt(e) {
  var t = [];
  for (E(); B.charCodeAt(O) === 64; ) {
    O++;
    var r = Ue();
    if (!r)
      throw J("Directive");
    E(), t.push({
      kind: "Directive",
      name: r,
      arguments: Si(e)
    });
  }
  return t;
}
function Ba() {
  var e = Ue();
  if (e) {
    E();
    var t;
    if (B.charCodeAt(O) === 58) {
      if (O++, E(), t = e, !(e = Ue()))
        throw J("Field");
      E();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: Si(!1),
      directives: Pt(!1),
      selectionSet: vr()
    };
  }
}
function wi() {
  var e;
  if (E(), B.charCodeAt(O) === 91) {
    O++, E();
    var t = wi();
    if (!t || B.charCodeAt(O++) !== 93)
      throw J("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = Ue())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw J("NamedType");
  return E(), B.charCodeAt(O) === 33 ? (O++, E(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var $a = /on/y;
function Ii() {
  if (we($a)) {
    E();
    var e = Ue();
    if (!e)
      throw J("NamedType");
    return E(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Va = /\.\.\./y;
function Ua() {
  if (we(Va)) {
    E();
    var e = O, t;
    if ((t = Ue()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Pt(!1)
      };
    O = e;
    var r = Ii(), n = Pt(!1), i = vr();
    if (!i)
      throw J("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: i
    };
  }
}
function vr() {
  var e;
  if (E(), B.charCodeAt(O) === 123) {
    O++, E();
    for (var t = []; e = Ua() || Ba(); )
      t.push(e);
    if (!t.length || B.charCodeAt(O++) !== 125)
      throw J("SelectionSet");
    return E(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Ga = /fragment/y;
function La() {
  if (we(Ga)) {
    E();
    var e = Ue();
    if (!e)
      throw J("FragmentDefinition");
    E();
    var t = Ii();
    if (!t)
      throw J("FragmentDefinition");
    var r = Pt(!1), n = vr();
    if (!n)
      throw J("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var Wa = /(?:query|mutation|subscription)/y;
function za() {
  var e, t, r = [], n = [];
  (e = we(Wa)) && (E(), t = Ue(), r = function() {
    var o, s = [];
    if (E(), B.charCodeAt(O) === 40) {
      for (O++, E(); o = we(gi); ) {
        if (E(), B.charCodeAt(O++) !== 58)
          throw J("VariableDefinition");
        var l = wi(), d = void 0;
        if (B.charCodeAt(O) === 61 && (O++, E(), !(d = dr(!0))))
          throw J("VariableDefinition");
        E(), s.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: o.slice(1)
            }
          },
          type: l,
          defaultValue: d,
          directives: Pt(!0)
        });
      }
      if (B.charCodeAt(O++) !== 41)
        throw J("VariableDefinition");
      E();
    }
    return s;
  }(), n = Pt(!1));
  var i = vr();
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
function Qa(e, t) {
  return B = typeof e.body == "string" ? e.body : e, O = 0, function() {
    var n;
    E();
    for (var i = []; n = La() || za(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function Ka(e) {
  return JSON.stringify(e);
}
function Ja(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var Oe = (e) => !(!e || !e.length), ue = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !Oe(e.variableDefinitions) && !Oe(e.directives))
      return ue.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), Oe(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(ue.VariableDefinition).join(", ") + ")"), Oe(e.directives) && (t += " " + e.directives.map(ue.Directive).join(" ")), t + " " + ue.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = ue.Variable(e.variable) + ": " + Ne(e.type);
    return e.defaultValue && (t += " = " + Ne(e.defaultValue)), Oe(e.directives) && (t += " " + e.directives.map(ue.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (Oe(e.arguments)) {
      var r = e.arguments.map(ue.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return Oe(e.directives) && (t += " " + e.directives.map(ue.Directive).join(" ")), e.selectionSet ? t + " " + ue.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Ja(e.value) : Ka(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(Ne).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(ue.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + Ne(e.value),
  Document: (e) => Oe(e.definitions) ? e.definitions.map(Ne).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(Ne).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + Ne(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return Oe(e.directives) && (t += " " + e.directives.map(ue.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), Oe(e.directives) && (t += " " + e.directives.map(ue.Directive).join(" ")), t + " " + Ne(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, Oe(e.directives) && (t += " " + e.directives.map(ue.Directive).join(" ")), t + " " + Ne(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return Oe(e.arguments) && (t += "(" + e.arguments.map(ue.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + Ne(e.type) + "]",
  NonNullType: (e) => Ne(e.type) + "!"
};
function Ne(e) {
  return ue[e.kind] ? ue[e.kind](e) : "";
}
var Ya = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new zt(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new zt(e);
class Jt extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(Ya), n = ((i, a) => {
      var o = "";
      if (i)
        return `[Network] ${i.message}`;
      if (a)
        for (var s of a)
          o && (o += `
`), o += `[GraphQL] ${s.message}`;
      return o;
    })(t.networkError, r);
    super(n), this.name = "CombinedError", this.message = n, this.graphQLErrors = r, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var jr = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, pt = /* @__PURE__ */ new Set(), $n = /* @__PURE__ */ new WeakMap(), It = (e) => {
  if (e === null || pt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return It(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += It(r) || "null";
    return t += "]";
  } else if (pr !== Tt && e instanceof pr || yr !== Tt && e instanceof yr)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = $n.get(e) || Math.random().toString(36).slice(2);
    return $n.set(e, i), It({
      __key: i
    });
  }
  pt.add(e);
  var a = "{";
  for (var o of n) {
    var s = It(e[o]);
    s && (a.length > 1 && (a += ","), a += It(o) + ":" + s);
  }
  return pt.delete(e), a += "}";
}, Mr = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || pt.has(r)))
    if (Array.isArray(r))
      for (var n = 0, i = r.length; n < i; n++)
        Mr(e, `${t}.${n}`, r[n]);
    else if (r instanceof pr || r instanceof yr)
      e.set(t, r);
    else {
      pt.add(r);
      for (var a of Object.keys(r))
        Mr(e, `${t}.${a}`, r[a]);
    }
}, fr = (e) => (pt.clear(), It(e));
class Tt {
}
var pr = typeof File < "u" ? File : Tt, yr = typeof Blob < "u" ? Blob : Tt, Ha = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Za = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, Xa = (e, t) => t % 2 == 0 ? e.replace(Za, `
`) : e, Vn = (e) => e.split(Ha).map(Xa).join("").trim(), Un = /* @__PURE__ */ new Map(), sr = /* @__PURE__ */ new Map(), an = (e) => {
  var t;
  return typeof e == "string" ? t = Vn(e) : e.loc && sr.get(e.__key) === e ? t = e.loc.source.body : (t = Un.get(e) || Vn(Ne(e)), Un.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Gn = (e) => {
  var t = jr(an(e));
  if (e.definitions) {
    var r = ki(e);
    r && (t = jr(`
# ${r}`, t));
  }
  return t;
}, Ai = (e) => {
  var t, r;
  return typeof e == "string" ? (t = Gn(e), r = sr.get(t) || Qa(e)) : (t = e.__key || Gn(e), r = sr.get(t) || e), r.loc || an(r), r.__key = t, sr.set(t, r), r;
}, ur = (e, t, r) => {
  var n = t || {}, i = Ai(e), a = fr(n), o = i.__key;
  return a !== "{}" && (o = jr(a, o)), {
    key: o,
    query: i,
    variables: n,
    extensions: r
  };
}, ki = (e) => {
  for (var t of e.definitions)
    if (t.kind === kt.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, eo = (e) => {
  for (var t of e.definitions)
    if (t.kind === kt.OPERATION_DEFINITION)
      return t.operation;
}, qr = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var n = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new Jt({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? n : t.hasNext,
    stale: !1
  };
}, Br = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = Br(e[r], t[r]);
    return e;
  }
  return t;
}, $r = (e, t, r) => {
  var n = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, o = t.incremental;
  "path" in t && (o = [t]);
  var s = {
    data: e.data
  };
  if (o)
    for (var l of o) {
      Array.isArray(l.errors) && n.push(...l.errors), l.extensions && (Object.assign(a, l.extensions), i = !0);
      for (var d = "data", c = s, f = 0, y = l.path.length; f < y; d = l.path[f++])
        c = c[d] = Array.isArray(c[d]) ? [...c[d]] : {
          ...c[d]
        };
      if (l.items)
        for (var h = +d >= 0 ? d : 0, b = 0, w = l.items.length; b < w; b++)
          c[h + b] = Br(c[h + b], l.items[b]);
      else
        l.data !== void 0 && (c[d] = Br(c[d], l.data));
    }
  else
    s.data = t.data || e.data, n = t.errors || n;
  return {
    operation: e.operation,
    data: s.data,
    error: n.length ? new Jt({
      graphQLErrors: n,
      response: r
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, Oi = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new Jt({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function Ni(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : an(e.query),
    operationName: ki(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var to = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var n = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && n.searchParams.set(i, typeof a == "object" ? fr(a) : a);
  }
  var o = n.toString();
  return o.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, ro = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = fr(t), n = ((s) => {
      var l = /* @__PURE__ */ new Map();
      return (pr !== Tt || yr !== Tt) && (pt.clear(), Mr(l, "variables", s)), l;
    })(t.variables);
    if (n.size) {
      var i = new FormData();
      i.append("operations", r), i.append("map", fr({
        ...[...n.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of n.values())
        i.append("" + a++, o);
      return i;
    }
    return r;
  }
}, no = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (n.headers)
    for (var i in n.headers)
      r[i.toLowerCase()] = n.headers[i];
  var a = ro(e, t);
  return typeof a == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...n,
    method: a ? "POST" : "GET",
    body: a,
    headers: r
  };
}, io = typeof TextDecoder < "u" ? new TextDecoder() : null, ao = /boundary="?([^=";]+)"?/i, oo = /data: ?([^\n]+)/, Ln = (e) => e.constructor.name === "Buffer" ? e.toString() : io.decode(e);
async function* Wn(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield Ln(t);
  else {
    var r = e.body.getReader(), n;
    try {
      for (; !(n = await r.read()).done; )
        yield Ln(n.value);
    } finally {
      r.cancel();
    }
  }
}
async function* zn(e, t) {
  var r = "", n;
  for await (var i of e)
    for (r += i; (n = r.indexOf(t)) > -1; )
      yield r.slice(0, n), r = r.slice(n + t.length);
}
async function* so(e, t, r) {
  var n = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (c, f) {
        var y = c.match(ao), h = "--" + (y ? y[1] : "-"), b = !0, w;
        for await (var _ of zn(Wn(f), `\r
` + h)) {
          if (b) {
            b = !1;
            var M = _.indexOf(h);
            if (M > -1)
              _ = _.slice(M + h.length);
            else
              continue;
          }
          try {
            yield w = JSON.parse(_.slice(_.indexOf(`\r
\r
`) + 4));
          } catch (S) {
            if (!w)
              throw S;
          }
          if (w && w.hasNext === !1)
            break;
        }
        w && w.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o, a);
    else if (/text\/event-stream/i.test(o))
      s = async function* (c) {
        var f;
        for await (var y of zn(Wn(c), `

`)) {
          var h = y.match(oo);
          if (h) {
            var b = h[1];
            try {
              yield f = JSON.parse(b);
            } catch (w) {
              if (!f)
                throw w;
            }
            if (f && f.hasNext === !1)
              break;
          }
        }
        f && f.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(a);
    else if (!/text\//i.test(o))
      s = async function* (c) {
        yield JSON.parse(await c.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var l of s)
      i = i ? $r(i, l, a) : qr(e, l, a), n = !1, yield i, n = !0;
    i || (yield i = qr(e, {}, a));
  } catch (d) {
    if (!n)
      throw d;
    yield Oi(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : d, a);
  }
}
function uo(e, t, r) {
  var n;
  return typeof AbortController < "u" && (r.signal = (n = new AbortController()).signal), Xr(() => {
    n && n.abort();
  })(Z((i) => !!i)(bi(so(e, t, r))));
}
var Vr = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      Vr(r, t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : Vr(e[n], t);
  return t;
}, Ur = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var n of e.definitions) {
      var i = Ur(n);
      t = t || i !== n, r.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === kt.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === kt.FIELD && s.name.value === "__typename" && !s.alias;
        var l = Ur(s);
        t = t || l !== s, a.push(l);
      }
      if (o || (t = !0, a.push({
        kind: kt.FIELD,
        name: {
          kind: kt.NAME,
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
}, Qn = /* @__PURE__ */ new Map(), lo = (e) => {
  var t = Ai(e), r = Qn.get(t.__key);
  return r || (Qn.set(t.__key, r = Ur(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, Gr = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => Gr(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var n in e)
      n === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[n] = Gr(e[n]);
    return r;
  } else
    return e;
};
function Kn(e) {
  var t = (r) => e(r);
  return t.toPromise = () => rn(br(1)(Z((r) => !r.stale && !r.hasNext)(t))), t.then = (r, n) => t.toPromise().then(r, n), t.subscribe = (r) => yt(r)(t), t;
}
function Ct(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var Jn = (e, t) => Ct(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), co = () => {
}, Tr = ({ kind: e }) => e !== "mutation" && e !== "query", fo = ({ forward: e, client: t, dispatchDebug: r }) => {
  var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (s) => {
    var l = Ct(s.kind, s);
    return l.query = lo(s.query), l;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || n.has(s.key));
  return (s) => {
    var l = Ot((c) => {
      var f = n.get(c.key);
      process.env.NODE_ENV !== "production" && r({
        operation: c,
        ...f ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var y = f;
      return process.env.NODE_ENV !== "production" && (y = {
        ...y,
        operation: process.env.NODE_ENV !== "production" ? Jn(c, {
          cacheOutcome: f ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (y.stale = !0, Yn(t, c)), y;
    })(Z((c) => !Tr(c) && o(c))(s)), d = Et((c) => {
      var { operation: f } = c;
      if (f) {
        var y = f.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (y = ((g) => [...Vr(g, /* @__PURE__ */ new Set())])(c.data).concat(y)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var h = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && r({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${y}`,
            operation: f,
            data: {
              typenames: y,
              response: c
            },
            source: "cacheExchange"
          });
          for (var b = 0; b < y.length; b++) {
            var w = y[b], _ = i.get(w);
            _ || i.set(w, _ = /* @__PURE__ */ new Set());
            for (var M of _.values())
              h.add(M);
            _.clear();
          }
          for (var S of h.values())
            n.has(S) && (f = n.get(S).operation, n.delete(S), Yn(t, f));
        } else if (f.kind === "query" && c.data) {
          n.set(f.key, c);
          for (var V = 0; V < y.length; V++) {
            var m = y[V], A = i.get(m);
            A || i.set(m, A = /* @__PURE__ */ new Set()), A.add(f.key);
          }
        }
      }
    })(e(Z((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(Ot((c) => process.env.NODE_ENV !== "production" ? Jn(c, {
      cacheOutcome: "miss"
    }) : c)(Nt([Ot(a)(Z((c) => !Tr(c) && !o(c))(s)), Z((c) => Tr(c))(s)])))));
    return Nt([l, d]);
  };
}, Yn = (e, t) => e.reexecuteOperation(Ct(t.kind, t, {
  requestPolicy: "network-only"
})), Cr = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: n, forward: i }) => {
  var a = r || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = Lt((d) => {
      var { key: c } = d, f = Z((y) => y.kind === "teardown" && y.key === c)(o);
      return en(f)(((y) => {
        var h = e(Ni(y), y);
        return tn(({ next: b, complete: w }) => {
          var _ = !1, M, S;
          return Promise.resolve().then(() => {
            _ || (M = h.subscribe({
              next(V) {
                b(S = S ? $r(S, V) : qr(y, V));
              },
              error(V) {
                b(Oi(y, V));
              },
              complete() {
                _ || (_ = !0, y.kind === "subscription" && n.reexecuteOperation(Ct("teardown", y, y.context)), S && S.hasNext && b($r(S, {
                  hasNext: !1
                })), w());
              }
            }));
          }), () => {
            _ = !0, M && M.unsubscribe();
          };
        });
      })(d));
    })(Z((d) => d.kind !== "teardown" && a(d))(o)), l = i(Z((d) => d.kind === "teardown" || !a(d))(o));
    return Nt([s, l]);
  };
}, po = ({ forward: e, dispatchDebug: t }) => (r) => {
  var n = Lt((a) => {
    var o = Ni(a), s = to(a, o), l = no(a, o);
    process.env.NODE_ENV !== "production" && t({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: a,
      data: {
        url: s,
        fetchOptions: l
      },
      source: "fetchExchange"
    });
    var d = en(Z((c) => c.kind === "teardown" && c.key === a.key)(r))(uo(a, s, l));
    return process.env.NODE_ENV !== "production" ? Et((c) => {
      var f = c.data ? void 0 : c.error;
      process.env.NODE_ENV !== "production" && t({
        type: f ? "fetchError" : "fetchSuccess",
        message: `A ${f ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: s,
          fetchOptions: l,
          value: f || c
        },
        source: "fetchExchange"
      });
    })(d) : d;
  })(Z((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(r)), i = e(Z((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(r));
  return Nt([n, i]);
}, yo = (e) => ({ client: t, forward: r, dispatchDebug: n }) => e.reduceRight((i, a) => {
  var o = !1;
  return a({
    client: t,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return Wt(i(Wt(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && n({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, r), Ei = ({ onOperation: e, onResult: t, onError: r }) => ({ forward: n }) => (i) => Lt((a) => {
  r && a.error && r(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? Bn(o) : $t(o);
})(n(Lt((a) => {
  var o = e && e(a) || a;
  return "then" in o ? Bn(o) : $t(o);
})(i))), mo = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = Et((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var n = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: n,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(n);
  }
})(t)), Z((r) => !1)(t)), Hn = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = qn();
  function d(m) {
    (m.kind === "mutation" || m.kind === "teardown" || !a.has(m.key)) && (m.kind === "teardown" ? a.delete(m.key) : m.kind !== "mutation" && a.add(m.key), l.next(m));
  }
  var c = !1;
  function f(m) {
    if (m && d(m), !c) {
      for (c = !0; c && (m = o.shift()); )
        d(m);
      c = !1;
    }
  }
  var y = (m) => {
    var A = en(Z((g) => g.kind === "teardown" && g.key === m.key)(l.source))(Z((g) => g.operation.kind === m.kind && g.operation.key === m.key && (!g.operation.context._instance || g.operation.context._instance === m.context._instance))(V));
    return m.kind !== "query" ? A = hi((g) => !!g.hasNext, !0)(A) : A = Mn((g) => {
      var U = $t(g);
      return g.stale || g.hasNext ? U : Nt([U, Ot(() => (g.stale = !0, g))(br(1)(Z((Ke) => Ke.key === m.key)(l.source)))]);
    })(A), m.kind !== "mutation" ? A = Xr(() => {
      a.delete(m.key), n.delete(m.key), i.delete(m.key), c = !1;
      for (var g = o.length - 1; g >= 0; g--)
        o[g].key === m.key && o.splice(g, 1);
      d(Ct("teardown", m, m.context));
    })(Et((g) => {
      if (g.stale) {
        for (var U of o)
          if (U.key === g.operation.key) {
            a.delete(U.key);
            break;
          }
      } else
        g.hasNext || a.delete(m.key);
      n.set(m.key, g);
    })(A)) : A = jn(() => {
      d(m);
    })(A), t.maskTypename && (A = Ot((g) => ({
      ...g,
      data: Gr(g.data, !0)
    }))(A)), Wt(A);
  }, h = this instanceof e ? this : Object.create(e.prototype), b = Object.assign(h, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(m) {
      m.kind === "teardown" ? f(m) : (m.kind === "mutation" || i.has(m.key)) && (o.push(m), Promise.resolve().then(f));
    },
    createRequestOperation(m, A, g) {
      g || (g = {});
      var U;
      if (process.env.NODE_ENV !== "production" && m !== "teardown" && (U = eo(A.query)) !== m)
        throw new Error(`Expected operation of type "${m}" but found "${U}"`);
      return Ct(m, A, {
        _instance: m === "mutation" ? r = r + 1 | 0 : void 0,
        ...s,
        ...g,
        requestPolicy: g.requestPolicy || s.requestPolicy,
        suspense: g.suspense || g.suspense !== !1 && b.suspense
      });
    },
    executeRequestOperation(m) {
      return m.kind === "mutation" ? Kn(y(m)) : Kn(Ea(() => {
        var A = i.get(m.key);
        A || i.set(m.key, A = y(m)), A = jn(() => {
          f(m);
        })(A);
        var g = n.get(m.key);
        return m.kind === "query" && g && (g.stale || g.hasNext) ? Mn($t)(Nt([A, Z((U) => U === n.get(m.key))($t(g))])) : A;
      }));
    },
    executeQuery(m, A) {
      var g = b.createRequestOperation("query", m, A);
      return b.executeRequestOperation(g);
    },
    executeSubscription(m, A) {
      var g = b.createRequestOperation("subscription", m, A);
      return b.executeRequestOperation(g);
    },
    executeMutation(m, A) {
      var g = b.createRequestOperation("mutation", m, A);
      return b.executeRequestOperation(g);
    },
    readQuery(m, A, g) {
      var U = null;
      return yt((Ke) => {
        U = Ke;
      })(b.query(m, A, g)).unsubscribe(), U;
    },
    query: (m, A, g) => b.executeQuery(ur(m, A), g),
    subscription: (m, A, g) => b.executeSubscription(ur(m, A), g),
    mutation: (m, A, g) => b.executeMutation(ur(m, A), g)
  }), w = co;
  if (process.env.NODE_ENV !== "production") {
    var { next: _, source: M } = qn();
    b.subscribeToDebugTarget = (m) => yt(m)(M), w = _;
  }
  var S = yo(t.exchanges), V = Wt(S({
    client: b,
    dispatchDebug: w,
    forward: mo({
      dispatchDebug: w
    })
  })(l.source));
  return Ca(V), b;
};
const Lr = (e) => Object.entries(e).flatMap(([t, r]) => {
  if (typeof r == "boolean")
    return r ? t : !1;
  if (r instanceof on) {
    let n = "";
    const i = Object.entries(r.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof sn ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return i.length > 0 && (n = `(${i.join(", ")})`), r.subselection ? [`${t}${n} {`, ...Lr(r.subselection), "}"] : `${t}${n}`;
  } else
    return [`${t} {`, ...Lr(r), "}"];
}).filter((t) => !!t).map((t) => "  " + t), mr = (e) => {
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
    i instanceof on ? (Object.entries(i.args).forEach(([a, o]) => {
      var s;
      o instanceof sn && (t[(s = o.name) !== null && s !== void 0 ? s : r(a)] = o);
    }), i.subselection && Object.assign(t, mr(i.subselection))) : typeof i == "object" && i !== null && Object.assign(t, mr(i));
  }), t;
}, ho = (e) => {
  const t = mr(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([n, i]) => `$${n}: ${i.type}`).join(", ")})`;
};
class on {
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
class sn {
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
const fe = (e, t) => new on(e, t), D = (e) => new sn(e.type + (e.required ? "!" : ""), e.name, e.value), bo = (e) => {
  var t;
  const r = ho(e), n = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${r}${n} {
${Lr(e.fields).join(`
`)}
}`;
}, ve = (e) => {
  const t = mr(e.fields);
  return {
    query: bo(e),
    variables: Object.entries(t ?? {}).reduce((r, [n, i]) => (typeof i.value < "u" && (r[n] = i.value), r), {})
  };
}, vo = {
  DateTime(e) {
    return new Date(e);
  }
};
class go {
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
      const a = r[n];
      a != null && (r[n] = vo[i](a));
    }
    return r;
  }
}
function he(e) {
  if (typeof e != "object")
    return e;
  var t, r, n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = he(e[t]));
    } else {
      r = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(r, t, {
          value: he(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[t] = he(e[t]);
    }
    return r;
  }
  if (n === "[object Array]") {
    for (t = e.length, r = Array(t); t--; )
      r[t] = he(e[t]);
    return r;
  }
  return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    r.add(he(i));
  }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    r.set(he(a), he(i));
  }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(he(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var Pi, Ti, Ci, _i, xi, Ri, ce;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(ce || (ce = {}));
const re = Symbol.for("g/fields"), et = Symbol.for("g/instantiatedFields"), tt = Symbol.for("g/persistedFields"), rt = Symbol.for("g/fieldKeys"), qt = Symbol.for("g/touched"), N = Symbol.for("g/self");
class So {
  constructor(t) {
    var r, n;
    Object.defineProperty(this, Pi, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, Ti, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, Ci, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, _i, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, xi, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, Ri, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "empty", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), this[et] = (r = he(t)) !== null && r !== void 0 ? r : {}, this[tt] = (n = he(t)) !== null && n !== void 0 ? n : {}, Object.assign(this[re], t), !t || Object.keys(t).length === 0 ? (this.empty = !0, this[rt] = /* @__PURE__ */ new Set()) : this[rt] = new Set(Object.keys(this[re]));
    const i = this;
    this[N] = i;
    const a = {
      get: (o, s) => {
        if (s in i || typeof s == "symbol")
          return i[s];
        if (s in o)
          return o[s];
      },
      set: (o, s, l) => (i.trackKey(s), o[s.toString()] = l, !0)
    };
    return new Proxy(this[re], a);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const r = t.toString();
    this[N][rt].add(r);
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = ce.SinceLoaded) {
    if (this[N][qt])
      return !0;
    const r = t == ce.SinceLoaded ? this[N][et] : this[N][tt];
    return [...this[N][rt]].some((n) => !ir(r[n], this[N][re][n]));
  }
  /** Checks if the original constructor data was empty or not */
  isEmpty() {
    return this.empty;
  }
  /** Returns the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  getField(t) {
    return this[N][re][t];
  }
  /** Sets the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  setField(t, r) {
    return this.trackKey(t), this[N][re][t] = r;
  }
  changes(t, r = ce.SinceLoaded) {
    const i = (typeof t == "string" ? r : t || r) == ce.SinceLoaded ? this[N][et] : this[N][tt];
    if (t && typeof t == "string") {
      const a = i[t], o = this[N][re][t], s = !ir(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (const o of this[N][rt])
        ir(i[o], this[N][re][o]) || (a[o] = { current: this[N][re][o], previous: i[o] });
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = ce.SinceLoaded) {
    const r = t == ce.SinceLoaded ? this[N][et] : this[N][tt], n = {};
    for (const i of this[N][rt])
      ir(r[i], this[N][re][i]) || (n[i] = this[N][re][i]);
    return n;
  }
  changed(t, r = ce.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = ce.SinceLoaded) {
    t == ce.SinceLoaded ? this[N][et] = he(this[N][re]) : t == ce.SinceLastPersisted && (this[N][tt] = he(this[N][re])), this[N][qt] = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = ce.SinceLoaded) {
    let r;
    t == ce.SinceLoaded ? r = Object.keys(this[N][et]) : r = Object.keys(this[N][tt]);
    for (const n of this[N][rt])
      r.includes(n) || delete this[N][re][n];
    t == ce.SinceLoaded ? Object.assign(this[N][re], he(this[N][et])) : Object.assign(this[N][re], he(this[N][tt])), this[N][qt] = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Jr({ ...this[N][re] });
  }
  /** Marks this record as changed so that the next save will save it and adjust any `updatedAt` timestamps */
  touch() {
    this[N][qt] = !0;
  }
}
Pi = re, Ti = et, Ci = tt, _i = rt, xi = qt, Ri = N;
const Di = So;
class Fi extends Error {
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
class Wr extends Error {
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
class gr extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class Zn extends Error {
  constructor(t) {
    let r;
    Qr(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class wo extends Error {
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
class Io extends Error {
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
class Ao extends Error {
  constructor(t, r, n, i) {
    const a = r.slice(0, 3), o = r.length > 3 ? `, and ${r.length - 3} more error${r.length > 4 ? "s" : ""} need${r.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${n ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: s, message: l }) => `${s} ${l}`).join(", ")}${o}.`), Object.defineProperty(this, "code", {
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
class ji extends Error {
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
class un extends Error {
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
class ko extends Error {
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
function zr(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const _t = (e, t) => {
  const r = t.length;
  let n = 0;
  for (; e != null && n < r; )
    e = e[t[n++]];
  return n && n == r ? e : void 0;
}, Qr = (e) => (e == null ? void 0 : e.type) == "close", _e = (e, t) => typeof e != "string" ? "" : Yt(e, t), Xn = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Yt = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (n) => Xn(n)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, i, a, o, s) => (i || (i = ""), "" + i + Xn(a))), r;
}, ln = (e, t) => [...Array.isArray(t) ? t : t ? [t] : [], e].map((i) => Yt(i)).join(""), Mi = (e, t) => `${ln(e, t)}Sort`, cn = (e, t) => `${ln(e, t)}Filter`, Oo = (e, t, r) => new ji(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), No = (e, t) => {
  if (e.fetching)
    return;
  const r = _t(e.data, t);
  if (r === void 0)
    return new Fi(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null)
    return new un(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, Ve = (e, t, r = !1) => {
  var n;
  if (e.error)
    throw e.error instanceof Jt && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const i = _t(e.data, t), a = _t(i, ["edges"]), o = a ?? i;
  if (i === void 0)
    throw new Fi(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || r && Array.isArray(o) && o.length === 0)
    throw new un(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, Vt = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof Jt && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const n = _t(e.data, t);
  return n ?? null;
}, dn = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Ao(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new ji(e.message) : new gr(e.message, e.code);
}, nt = (e, t) => {
  const r = Ve(e, t);
  return qi(r);
}, qi = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? dn(t) : new gr("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, Bi = (e) => {
  var t, r, n, i;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new go((i = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, Ut = (e, t) => {
  const r = Bi(e);
  return r && (t = r.apply(t)), new Di(t);
}, fn = (e, t) => {
  const r = Bi(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((n) => new Di(n));
}, Qt = (e, t) => {
  const r = t.edges.map((n) => n.node);
  return fn(e, r);
}, Kr = "[object Object]", ei = "[object String]", Jr = (e) => {
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
          t[r] = n === void 0 ? null : Jr(n);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === Kr) {
        const t = {};
        for (const r of Object.keys(e)) {
          const n = Jr(e[r]);
          n !== void 0 && (t[r] = n);
        }
        return t;
      }
    }
  }
}, _r = "gstk", ti = (e) => {
  try {
    const t = window[e];
    return t.setItem(_r, _r), t.removeItem(_r), !0;
  } catch {
    return !1;
  }
}, ri = Object.prototype.toString, ni = Object.getPrototypeOf, ii = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, Bt = (e, t, r) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (r.indexOf(e) > -1 && r.indexOf(t) > -1)
    return !0;
  const n = ri.call(e), i = ri.call(t);
  let a, o, s;
  if (r.push(e, t), n == Kr && i == ei && "_link" in e && Object.keys(e).length == 1)
    return e._link === t;
  if (i == Kr && n == ei && "_link" in t && Object.keys(t).length == 1)
    return t._link === e;
  if (n != i || (a = ii(e), o = ii(t), a.length != o.length || a.some(function(l) {
    return !Bt(e[l], t[l], r);
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
      a = e.entries(), o = t.entries();
      do
        if (s = a.next(), !Bt(s.value, o.next().value, r))
          return !1;
      while (!s.done);
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
      for (s = 0; s < e.length; s++)
        if (!(!(s in e) && !(s in t)) && (s in e != s in t || !Bt(e[s], t[s], r)))
          return !1;
      return !0;
    case "Object":
      return Bt(ni(e), ni(t), r);
    default:
      return !1;
  }
}, ir = (e, t) => Bt(e, t, []), $i = (e, t) => {
  var r, n;
  if (t ?? (t = {}), !("hasAmbiguousIdentifier" in e) && !("acceptsModelInput" in e))
    return t;
  if (e.hasAmbiguousIdentifier && Object.keys(t).some((a) => {
    var o;
    return a !== "id" && !(!((o = e.paramOnlyVariables) === null || o === void 0) && o.includes(a)) && a !== e.modelApiIdentifier;
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
      for (const [a, o] of Object.entries(t))
        !((n = e.paramOnlyVariables) === null || n === void 0) && n.includes(a) ? i[a] = o : a == "id" ? i.id = o : i[e.modelApiIdentifier][a] = o;
    }
  else
    i = t;
  return i;
}, Eo = (e, t = {}) => {
  var r;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((r = Array.isArray(t) ? t : t.inputs) !== null && r !== void 0 ? r : []).map((i) => $i(e, i))
  };
}, Po = (e, t) => {
  const r = {};
  for (const [n, i] of Object.entries(e))
    r[n] = { ...i, value: t[n] };
  return r;
}, it = (e, t) => (t && e.unshift(...Array.isArray(t) ? t : [t]), e), Qe = (e, t) => {
  const r = t ? [...Array.isArray(t) ? t : [t], e].join(".") : e;
  return {
    gadgetMeta: {
      hydrations: fe({ modelName: r })
    }
  };
};
function Ie(e, t) {
  if (!e)
    return t;
  if (Array.isArray(e) || (e = [e]), e)
    for (let r = e.length - 1; r >= 0; r--)
      t = {
        [e[r]]: t
      };
  return t;
}
const mt = {
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
class xt extends Array {
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
    const i = new xt();
    return i.push(...r), i.modelManager = t, i.pagination = n, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new gr("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new Wr("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const { first: r, last: n, before: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      after: this.pagination.pageInfo.endCursor,
      first: r || n
    });
  }
  async previousPage() {
    var t;
    if (!this.hasPreviousPage)
      throw new Wr("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: n, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: n || r
    });
  }
}
const pn = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, Sr = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, To = (e, t, r, n, i, a) => {
  const o = {};
  typeof t < "u" && (o.id = D({ type: "GadgetID!", value: t }));
  let s = {
    [e]: fe(o, pn((i == null ? void 0 : i.select) || r, !0))
  };
  return s = Ie(a, s), ve({
    type: "query",
    name: e,
    fields: {
      ...s,
      ...Qe(n, a)
    },
    directives: Sr(i)
  });
}, Co = (e, t, r, n, i, a, o) => yn(e, n, i, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}, o), yn = (e, t, r, n, i) => {
  let a = {
    [e]: fe({
      after: D({ value: n == null ? void 0 : n.after, type: "String" }),
      first: D({ value: n == null ? void 0 : n.first, type: "Int" }),
      before: D({ value: n == null ? void 0 : n.before, type: "String" }),
      last: D({ value: n == null ? void 0 : n.last, type: "Int" }),
      sort: n != null && n.sort ? D({ value: n.sort, type: `[${Mi(r, i)}!]` }) : void 0,
      filter: n != null && n.filter ? D({ value: n.filter, type: `[${cn(r, i)}!]` }) : void 0,
      search: n != null && n.search ? D({ value: n.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: pn((n == null ? void 0 : n.select) || t, !0)
      }
    })
  };
  return i && (a = Ie(i, a)), ve({
    type: "query",
    name: e,
    fields: {
      ...a,
      ...Qe(r, i)
    },
    directives: Sr(n)
  });
}, mn = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, D(r)])), Vi = (e, t, r) => ({
  success: !0,
  ...mt,
  [e]: t && !r ? pn(t, !0) : !1,
  result: !!r
}), _o = (e, t, r, n, i, a, o, s, l) => {
  const d = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: fe(mn(i), Vi(n, d, l))
  };
  c = Ie(o, c);
  const f = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...Qe(r, o)
    },
    directives: Sr(a)
  };
  return ve(f);
}, xo = (e, t, r) => {
  let n = {}, i = t.operationName, a;
  switch (t.isBulk && (i = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), t.operationReturnType ? a = `${t.operationReturnType}Result` : a = `${Yt(i)}Result`, t.type) {
    case "action": {
      const s = (r == null ? void 0 : r.select) || t.defaultSelection;
      n = {
        [`... on ${a}`]: Vi(t.modelApiIdentifier, s, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      n = {
        [`... on ${a}`]: Ui()
      };
  }
  const o = {
    type: "subscription",
    name: _e(i) + "BackgroundResult",
    fields: {
      backgroundAction: fe({ id: D({ value: e, type: "String!" }) }, {
        id: !0,
        outcome: !0,
        result: {
          ...n
        }
      })
    }
  };
  return ve(o);
}, Ui = () => ({
  success: !0,
  ...mt,
  result: !0
}), Ro = (e, t, r, n) => {
  let i = {
    [e]: fe(mn(t), Ui())
  };
  return i = Ie(r, i), ve({
    type: "mutation",
    name: e,
    fields: i,
    directives: Sr(n)
  });
}, Do = (e) => {
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
}, Fo = (e, t, r, n, i) => {
  let a = {
    [e]: fe({
      ...mn(t),
      backgroundOptions: D({
        type: "EnqueueBackgroundActionOptions",
        value: Do(n)
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
  return a = Ie(r, a), ve({
    type: "mutation",
    name: "enqueue" + Yt(e),
    fields: {
      background: a
    }
  });
}, jo = (e, t) => ({
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
function hn(e, t, r) {
  return r != null && r.live ? jo(_a(e), t) : nn(e, Z((i) => !i.stale && !i.hasNext), br(1), rn).then((i) => t(i));
}
const ai = (e, t, r, n, i, a, o = !0, s) => {
  const l = To(t, r, n, i, a, s), d = e.connection.currentClient.query(l.query, l.variables);
  return hn(d, (c) => {
    const f = o ? Ve : Vt, y = it([t], s), h = f(c, y);
    return Ut(c, h);
  }, a);
}, Mo = (e, t, r, n, i, a, o, s = !0, l) => {
  const d = Co(t, r, n, i, a, o), c = it([t], l), f = e.connection.currentClient.query(d.query, d.variables);
  return hn(f, (y) => {
    const h = Ve(y, c), b = Qt(y, h);
    if (b.length > 1)
      throw Oo(a, r, n);
    const w = b[0];
    if (!w && s)
      throw new un(`${a} record with ${r}=${n} not found`);
    return w ?? null;
  }, o);
}, oi = (e, t, r, n, i, a, o) => {
  const s = yn(t, r, n, i, o), l = e.connection.currentClient.query(s.query, s.variables), d = it([t], o);
  return hn(l, (c) => {
    let f;
    a === !1 ? f = Vt(c, d) : f = Ve(c, d, a);
    const y = Qt(c, f);
    return xt.boot(e, y, { options: i, pageInfo: f.pageInfo });
  }, i);
}, si = async (e, t, r, n, i, a, o, s, l, d) => {
  const c = _o(t, r, n, i, o, s, l, a, d), f = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), y = it([t], l);
  if (a) {
    const h = _t(f.data, y), b = h[i] && r ? fn(f, h[i]) : void 0;
    if (h.errors) {
      const w = h.errors.map((_) => dn(_));
      throw new ko(w, b);
    }
    return b;
  } else {
    const h = nt(f, y);
    return Gi(r, f, h, i, d);
  }
}, Gi = (e, t, r, n, i) => {
  if (e != null)
    return i ? r.result : Ut(t, r[n]);
}, ui = async (e, t, r, n) => {
  const i = Ro(t, r, n), a = await e.currentClient.mutation(i.query, i.variables).toPromise(), o = it([t], n);
  return nt(a, o).result;
};
async function qo(e, t, r, n = {}) {
  const i = t.isBulk ? Eo(t, r) : $i(t, r), a = Po(t.variables, i), o = Fo(t.operationName, a, t.namespace, n, t.isBulk), s = await e.currentClient.mutation(o.query, o.variables, n).toPromise(), l = ["background", ...it([t.operationName], t.namespace)];
  try {
    const d = nt(s, l);
    return t.isBulk ? d.backgroundActions.map((c) => new lr(e, t, c.id)) : new lr(e, t, d.backgroundAction.id);
  } catch (d) {
    if ("code" in d && d.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (n != null && n.id) && n.onDuplicateID == "ignore")
      return new lr(e, t, n.id);
    throw d;
  }
}
const Bo = async (e, t, r, n) => {
  const i = xo(t, r, n), a = e.currentClient.subscription(i.query, i.variables), o = await nn(a, Z((l) => {
    var d, c;
    return l.error || ((c = (d = l.data) === null || d === void 0 ? void 0 : d.backgroundAction) === null || c === void 0 ? void 0 : c.outcome);
  }), br(1), rn), s = Ve(o, ["backgroundAction"]);
  switch (qi(s.result), r.type) {
    case "action": {
      s.result = Gi(r.defaultSelection, o.data, s.result, r.isBulk ? r.modelApiIdentifier : r.modelSelectionField, r.hasReturnType);
      break;
    }
    case "globalAction": {
      s.result = s.result.result;
      break;
    }
  }
  return s;
};
class lr {
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
    return (await Bo(this.connection, this.id, this.action, t)).result;
  }
}
var Gt;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(Gt || (Gt = {}));
function me(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function dt(e) {
  return me(e) === "object";
}
function $o(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function li(e, t) {
  return e.length < 124 ? e : t;
}
const Vo = "graphql-transport-ws";
var de;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(de || (de = {}));
var Q;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(Q || (Q = {}));
function Li(e) {
  if (!dt(e))
    throw new Error(`Message is expected to be an object, but got ${me(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${me(e.type)}`);
  switch (e.type) {
    case Q.ConnectionInit:
    case Q.ConnectionAck:
    case Q.Ping:
    case Q.Pong: {
      if (e.payload != null && !dt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case Q.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${me(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!dt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${me(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${me(e.payload.query)}`);
      if (e.payload.variables != null && !dt(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${me(e.payload.variables)}`);
      if (e.payload.operationName != null && me(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${me(e.payload.operationName)}`);
      if (e.payload.extensions != null && !dt(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${me(e.payload.extensions)}`);
      break;
    }
    case Q.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${me(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!dt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${me(e.payload)}`);
      break;
    }
    case Q.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${me(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!$o(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case Q.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${me(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Uo(e, t) {
  return Li(typeof e == "string" ? JSON.parse(e, t) : e);
}
function Mt(e, t) {
  return Li(e), JSON.stringify(e, t);
}
function Go(e) {
  const {
    url: t,
    connectionParams: r,
    lazy: n = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: s,
    connectionAckWaitTimeout: l = 0,
    retryAttempts: d = 5,
    retryWait: c = async function(q) {
      let F = 1e3;
      for (let T = 0; T < q; T++)
        F *= 2;
      await new Promise((T) => setTimeout(T, F + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: f = ar,
    isFatalConnectionProblem: y,
    on: h,
    webSocketImpl: b,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: w = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (q) => {
        const F = Math.random() * 16 | 0;
        return (q == "x" ? F : F & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: _,
    jsonMessageReviver: M
  } = e;
  let S;
  if (b) {
    if (!Wo(b))
      throw new Error("Invalid WebSocket implementation provided");
    S = b;
  } else
    typeof WebSocket < "u" ? S = WebSocket : typeof global < "u" ? S = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (S = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!S)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const V = S, m = (() => {
    const k = (() => {
      const F = {};
      return {
        on(T, $) {
          return F[T] = $, () => {
            delete F[T];
          };
        },
        emit(T) {
          var $;
          "id" in T && (($ = F[T.id]) === null || $ === void 0 || $.call(F, T));
        }
      };
    })(), q = {
      connecting: h != null && h.connecting ? [h.connecting] : [],
      opened: h != null && h.opened ? [h.opened] : [],
      connected: h != null && h.connected ? [h.connected] : [],
      ping: h != null && h.ping ? [h.ping] : [],
      pong: h != null && h.pong ? [h.pong] : [],
      message: h != null && h.message ? [k.emit, h.message] : [k.emit],
      closed: h != null && h.closed ? [h.closed] : [],
      error: h != null && h.error ? [h.error] : []
    };
    return {
      onMessage: k.on,
      on(F, T) {
        const $ = q[F];
        return $.push(T), () => {
          $.splice($.indexOf(T), 1);
        };
      },
      emit(F, ...T) {
        for (const $ of [...q[F]])
          $(...T);
      }
    };
  })();
  function A(k) {
    const q = [
      // errors are fatal and more critical than close events, throw them first
      m.on("error", (F) => {
        q.forEach((T) => T()), k(F);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      m.on("closed", (F) => {
        q.forEach((T) => T()), k(F);
      })
    ];
  }
  let g, U = 0, Ke, ht = !1, bt = 0, Ht = !1;
  async function Rt() {
    clearTimeout(Ke);
    const [k, q] = await (g ?? (g = new Promise(($, Re) => (async () => {
      if (ht) {
        if (await c(bt), !U)
          return g = void 0, Re({ code: 1e3, reason: "All Subscriptions Gone" });
        bt++;
      }
      m.emit("connecting");
      const R = new V(typeof t == "function" ? await t() : t, Vo);
      let Ge, Je;
      function at() {
        isFinite(o) && o > 0 && (clearTimeout(Je), Je = setTimeout(() => {
          R.readyState === V.OPEN && (R.send(Mt({ type: Q.Ping })), m.emit("ping", !1, void 0));
        }, o));
      }
      A((Y) => {
        g = void 0, clearTimeout(Ge), clearTimeout(Je), Re(Y), ar(Y) && Y.code === 4499 && (R.close(4499, "Terminated"), R.onerror = null, R.onclose = null);
      }), R.onerror = (Y) => m.emit("error", Y), R.onclose = (Y) => m.emit("closed", Y), R.onopen = async () => {
        try {
          m.emit("opened", R);
          const Y = typeof r == "function" ? await r() : r;
          if (R.readyState !== V.OPEN)
            return;
          R.send(Mt(Y ? {
            type: Q.ConnectionInit,
            payload: Y
          } : {
            type: Q.ConnectionInit
            // payload is completely absent if not provided
          }, _)), isFinite(l) && l > 0 && (Ge = setTimeout(() => {
            R.close(de.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), at();
        } catch (Y) {
          m.emit("error", Y), R.close(de.InternalClientError, li(Y instanceof Error ? Y.message : new Error(Y).message, "Internal client error"));
        }
      };
      let Ye = !1;
      R.onmessage = ({ data: Y }) => {
        try {
          const L = Uo(Y, M);
          if (m.emit("message", L), L.type === "ping" || L.type === "pong") {
            m.emit(L.type, !0, L.payload), L.type === "pong" ? at() : s || (R.send(Mt(L.payload ? {
              type: Q.Pong,
              payload: L.payload
            } : {
              type: Q.Pong
              // payload is completely absent if not provided
            })), m.emit("pong", !1, L.payload));
            return;
          }
          if (Ye)
            return;
          if (L.type !== Q.ConnectionAck)
            throw new Error(`First message cannot be of type ${L.type}`);
          clearTimeout(Ge), Ye = !0, m.emit("connected", R, L.payload), ht = !1, bt = 0, $([
            R,
            new Promise((Zt, vt) => A(vt))
          ]);
        } catch (L) {
          R.onmessage = null, m.emit("error", L), R.close(de.BadResponse, li(L instanceof Error ? L.message : new Error(L).message, "Bad response"));
        }
      };
    })())));
    k.readyState === V.CLOSING && await q;
    let F = () => {
    };
    const T = new Promise(($) => F = $);
    return [
      k,
      F,
      Promise.race([
        // wait for
        T.then(() => {
          if (!U) {
            const $ = () => k.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? Ke = setTimeout(() => {
              k.readyState === V.OPEN && $();
            }, a) : $();
          }
        }),
        // or
        q
      ])
    ];
  }
  function Ae(k) {
    if (ar(k) && (Lo(k.code) || [
      de.InternalServerError,
      de.InternalClientError,
      de.BadRequest,
      de.BadResponse,
      de.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      de.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      de.SubscriberAlreadyExists,
      de.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(k.code)))
      throw k;
    if (Ht)
      return !1;
    if (ar(k) && k.code === 1e3)
      return U > 0;
    if (!d || bt >= d || !f(k) || y != null && y(k))
      throw k;
    return ht = !0;
  }
  return n || (async () => {
    for (U++; ; )
      try {
        const [, , k] = await Rt();
        await k;
      } catch (k) {
        try {
          if (!Ae(k))
            return;
        } catch (q) {
          return i == null ? void 0 : i(q);
        }
      }
  })(), {
    on: m.on,
    subscribe(k, q) {
      const F = w(k);
      let T = !1, $ = !1, Re = () => {
        U--, T = !0;
      };
      return (async () => {
        for (U++; ; )
          try {
            const [R, Ge, Je] = await Rt();
            if (T)
              return Ge();
            const at = m.onMessage(F, (Ye) => {
              switch (Ye.type) {
                case Q.Next: {
                  q.next(Ye.payload);
                  return;
                }
                case Q.Error: {
                  $ = !0, T = !0, q.error(Ye.payload), Re();
                  return;
                }
                case Q.Complete: {
                  T = !0, Re();
                  return;
                }
              }
            });
            R.send(Mt({
              id: F,
              type: Q.Subscribe,
              payload: k
            }, _)), Re = () => {
              !T && R.readyState === V.OPEN && R.send(Mt({
                id: F,
                type: Q.Complete
              }, _)), U--, T = !0, Ge();
            }, await Je.finally(at);
            return;
          } catch (R) {
            if (!Ae(R))
              return;
          }
      })().then(() => {
        $ || q.complete();
      }).catch((R) => {
        q.error(R);
      }), () => {
        T || Re();
      };
    },
    async dispose() {
      if (Ht = !0, g) {
        const [k] = await g;
        k.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      g && m.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function ar(e) {
  return dt(e) && "code" in e && "reason" in e;
}
function Lo(e) {
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
function Wo(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var At = null;
typeof WebSocket < "u" ? At = WebSocket : typeof MozWebSocket < "u" ? At = MozWebSocket : typeof global < "u" ? At = global.WebSocket || global.MozWebSocket : typeof window < "u" ? At = window.WebSocket || window.MozWebSocket : typeof self < "u" && (At = self.WebSocket || self.MozWebSocket);
const zo = At;
class Wi extends Error {
}
class Qo {
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
    throw Ve(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Wi("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Ve(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Ve(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Ko {
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
const Jo = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
}, ci = Ei({
  onOperation: (e) => {
    var t, r;
    (t = (r = e.context).operationName) !== null && t !== void 0 || (r.operationName = Jo(e.query) || "unknown");
  }
}), Yo = Ei({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, r] = e.context.url.split("?"), n = new URLSearchParams(r);
        n.set("operation", e.context.operationName), e.context.url = `${t}?${n.toString()}`;
      } catch {
      }
  }
});
var Yr;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(Yr || (Yr = {}));
const Ho = 2, Zo = 4800, Xo = 1e4, es = [de.ConnectionAcknowledgementTimeout, de.ConnectionInitialisationTimeout], di = Symbol.for("gadget/connection"), ts = "token", rs = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var H;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(H || (H = {}));
const or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class zi {
  constructor(t) {
    var r, n, i, a, o;
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
      value: H.Anonymous
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
      value: async (s, l) => {
        let d, c;
        if (l ? (d = l, c = s) : (d = s, c = {}), this.currentTransaction)
          return await d(this.currentTransaction);
        let f = null, y;
        try {
          f = await this.waitForOpenedConnection({
            isFatalConnectionProblem(w) {
              return console.warn("Transport error encountered during transaction processing", w), !0;
            },
            connectionAckWaitTimeout: Zo,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const h = new Hn({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              ci,
              ...this.exchanges.beforeAsync,
              Cr({
                forwardSubscription(w) {
                  const _ = { ...w, query: w.query || "" };
                  return {
                    subscribe: (M) => ({
                      unsubscribe: f.subscribe(_, M)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          h[di] = this, y = new Qo(h, f), this.currentTransaction = y, await y.start();
          const b = await d(y);
          return await y.commit(), b;
        } catch (h) {
          try {
            y != null && y.open && await y.rollback();
          } catch (b) {
            b instanceof Wi || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", b);
          }
          throw Qr(h) ? new Zn(h) : h;
        } finally {
          await (f == null ? void 0 : f.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (s, l = {}) => {
        var d;
        s = ns(s, (d = this.options.baseRouteURL) !== null && d !== void 0 ? d : this.options.endpoint), this.isGadgetRequest(s) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == H.Custom && await this.options.authenticationMode.custom.processFetch(s, l));
        const c = await this._fetchImplementation(s, l);
        if (this.authenticationMode == H.BrowserSession) {
          const f = c.headers.get("x-set-authorization"), y = f != null && f.startsWith("Session ") ? f.replace("Session ", "") : null;
          y && this.sessionTokenStore.setItem(this.sessionStorageKey, y);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof or < "u" && or.fetch ? this._fetchImplementation = or.fetch.bind(or) : this._fetchImplementation = async (...s) => {
      let l = await import("./browser-ponyfill-f85b7a4a.js").then((d) => d.b);
      return l.default && (l = l.default), await l(...s);
    }, this.websocketImplementation = (n = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && n !== void 0 ? n : zo, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${ts}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = H.InternalAuthToken : t.apiKey ? this.authenticationMode = H.APIKey : t.custom && (this.authenticationMode = H.Custom), this.options.authenticationMode = t), (r = this.authenticationMode) !== null && r !== void 0 || (this.authenticationMode = H.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = H.BrowserSession;
    const r = !t || typeof t == "boolean" ? Gt.Durable : t.storageType;
    let n;
    r == Gt.Durable && ti("localStorage") ? n = window.localStorage : r == Gt.Session && ti("sessionStorage") ? n = window.sessionStorage : n = new Ko(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = n, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), Hr(this.options.endpoint))
      return !!Hr(r);
    const n = new URL(this.options.endpoint).host;
    return r.includes(n);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, ci, Yo];
    typeof window < "u" && t.push(fo), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      Cr({
        forwardSubscription: (n) => ({
          subscribe: (i) => {
            const a = { ...n, query: n.query || "" };
            return {
              unsubscribe: this.getBaseSubscriptionClient().subscribe(a, i)
            };
          }
        })
      }),
      // another subscription exchange for live queries
      // live queries pass through the same WS client, but use jsondiffs for patching in results
      Cr({
        isSubscriptionOperation: (n) => n.query.definitions.some((i) => as(i)),
        forwardSubscription: (n) => ({
          subscribe: (i) => {
            let a;
            const o = import("./index-d5d487d7.js").then(({ applyAsyncIterableIteratorToSink: s, applyLiveQueryJSONDiffPatch: l, makeAsyncIterableIteratorFromSink: d }) => {
              const c = { ...n, query: n.query || "" };
              return a = s(l(d((f) => this.getBaseSubscriptionClient().subscribe(c, f))), i), a;
            }).catch((s) => i.error(s));
            return {
              unsubscribe: () => {
                a ? a() : o.then((s) => {
                  s && s();
                });
              }
            };
          }
        })
      }),
      po,
      ...this.exchanges.afterAll
    );
    const r = new Hn({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[di] = this, r;
  }
  newSubscriptionClient(t) {
    if (!this.websocketImplementation)
      throw new Error("Can't use this GadgetClient for this subscription-based operation as there's no global WebSocket implementation available. Please pass one as the `websocketImplementation` option to the GadgetClient constructor.");
    let r = this.websocketsEndpoint;
    if (t != null && t.urlParams) {
      const n = new URLSearchParams();
      for (const [i, a] of Object.entries(t.urlParams))
        a && n.set(i, a);
      r += "?" + n.toString();
    }
    return Go({
      url: r,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var n, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == H.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == H.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == H.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == H.Custom && await ((i = (n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (n, i) => {
          var a, o, s, l, d, c;
          if (this.authenticationMode == H.BrowserSession && (i != null && i.sessionToken)) {
            const f = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (f !== null && typeof f == "object" ? f.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (l = (s = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || s === void 0 ? void 0 : s.connected) === null || l === void 0 || l.call(s, n, i), (c = (d = t == null ? void 0 : t.on) === null || d === void 0 ? void 0 : d.connected) === null || c === void 0 || c.call(d, n, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const r = {};
    if (this.authenticationMode == H.InternalAuthToken)
      r.authorization = "Basic " + rs("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == H.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == H.BrowserSession) {
      const n = this.sessionTokenStore.getItem(this.sessionStorageKey);
      n && (r.authorization = `Session ${n}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), n = [], i = t.connectionAttempts || Ho;
    const a = t.connectionGlobalTimeoutMs || Xo, o = () => {
      n.forEach((s) => s()), n = [];
    };
    return await new Promise((s, l) => {
      const d = setTimeout(() => {
        this.disposeClient(r), f(new wo("Timeout opening websocket connection to Gadget API"));
      }, a), c = (b) => {
        if (Qr(b)) {
          if (b.code == Yr.TooManyRequests)
            return o(), f(new Io(b.reason));
          if (es.includes(b.code) && i > 0) {
            i -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), h();
            return;
          }
        }
        clearTimeout(d), l(new Zn(b));
      }, f = (b) => {
        clearTimeout(d), l(b);
      }, y = () => {
        clearTimeout(d), s(r);
      }, h = () => {
        o(), n.push(r.on("connected", y)), n.push(r.on("closed", c)), n.push(r.on("error", f));
      };
      h();
    }).finally(o);
  }
  disposeClient(t) {
    const r = t.dispose();
    r && r.catch((n) => console.error(`Error closing SubscriptionClient: ${n.message}`));
  }
  getBaseSubscriptionClient() {
    return this.baseSubscriptionClient || (this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 })), this.baseSubscriptionClient;
  }
}
Object.defineProperty(zi, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.24"
});
function ns(e, t) {
  if (typeof e != "string")
    return e;
  if (Hr(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Hr(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const is = (e) => {
  var t;
  return e.kind !== "OperationDefinition" || e.operation !== "query" ? null : (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
}, as = (e) => !!is(e), os = (e, t, r, n) => {
  const i = _e(e);
  return ve({
    type: "query",
    name: `InternalFind${i}`,
    fields: {
      internal: Ie(r, {
        [e]: fe({
          id: D({ value: t, type: "GadgetID!" }),
          select: D({ value: vn(n), type: "[String!]" })
        })
      }),
      ...Qe(e, r)
    }
  });
}, Qi = (e, t, r) => ({
  search: r != null && r.search ? D({ value: r == null ? void 0 : r.search, type: "String" }) : void 0,
  sort: r != null && r.sort ? D({ value: r == null ? void 0 : r.sort, type: `[${Mi(e, t)}!]` }) : void 0,
  filter: r != null && r.filter ? D({ value: r == null ? void 0 : r.filter, type: `[${cn(e, t)}!]` }) : void 0,
  select: r != null && r.select ? D({ value: vn(r == null ? void 0 : r.select), type: "[String!]" }) : void 0
}), ss = (e, t, r) => {
  const n = _e(e), i = Qi(n, t, r);
  return ve({
    type: "query",
    name: `InternalFindFirst${n}`,
    fields: {
      internal: Ie(t, {
        [`list${n}`]: fe({
          ...i,
          first: D({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }),
      ...Qe(e, t)
    }
  });
}, us = (e, t, r) => {
  const n = _e(e), i = Qi(n, t, r);
  return ve({
    type: "query",
    name: `InternalFindMany${n}`,
    fields: {
      internal: Ie(t, {
        [`list${n}`]: fe({
          ...i,
          after: D({ value: r == null ? void 0 : r.after, type: "String" }),
          before: D({ value: r == null ? void 0 : r.before, type: "String" }),
          first: D({ value: r == null ? void 0 : r.first, type: "Int" }),
          last: D({ value: r == null ? void 0 : r.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }),
      ...Qe(e, t)
    }
  });
}, bn = (e, t) => `Internal${ln(e, t)}Input`, ls = (e, t, r) => {
  const n = _e(e);
  return ve({
    type: "mutation",
    name: `InternalCreate${n}`,
    fields: {
      internal: Ie(t, {
        [`create${n}`]: fe({
          [e]: D({ value: r, type: bn(e, t) })
        }, {
          success: !0,
          ...mt,
          [e]: !0
        })
      }),
      ...Qe(e, t)
    }
  });
}, cs = (e, t, r, n) => {
  _e(e);
  const i = _e(t);
  return ve({
    type: "mutation",
    name: `InternalBulkCreate${i}`,
    fields: {
      internal: Ie(r, {
        [`bulkCreate${i}`]: fe({
          [t]: D({ value: n, type: `[${bn(e, r)}]!` })
        }, {
          success: !0,
          ...mt,
          [t]: !0
        })
      }),
      ...Qe(e, r)
    }
  });
}, ds = (e, t, r, n) => {
  const i = _e(e);
  return ve({
    type: "mutation",
    name: `InternalUpdate${i}`,
    fields: {
      internal: Ie(t, {
        [`update${i}`]: fe({
          id: D({ value: r, type: "GadgetID!" }),
          [e]: D({ value: n, type: bn(e, t) })
        }, {
          success: !0,
          ...mt,
          [e]: !0
        })
      }),
      ...Qe(e, t)
    }
  });
}, fs = (e, t, r) => {
  const n = _e(e);
  return ve({
    type: "mutation",
    name: `InternalDelete${n}`,
    fields: {
      internal: Ie(t, {
        [`delete${n}`]: fe({
          id: D({ value: r, type: "GadgetID!" })
        }, {
          success: !0,
          ...mt
        })
      })
    }
  });
}, ps = (e, t, r) => {
  const n = _e(e);
  return ve({
    type: "mutation",
    name: `InternalDeleteMany${n}`,
    fields: {
      internal: Ie(t, {
        [`deleteMany${n}`]: fe({
          search: D({ value: r == null ? void 0 : r.search, type: "String" }),
          filter: D({ value: r == null ? void 0 : r.filter, type: `[${cn(e, t)}!]` })
        }, {
          success: !0,
          ...mt
        })
      })
    }
  });
};
class Pe {
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
    }), this.capitalizedApiIdentifier = Yt(t), this.namespace = (n == null ? void 0 : n.namespace) || [];
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let n = t;
    if (!this.validateRecord(t))
      throw new gr(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = os(this.apiIdentifier, t, this.namespace, vn(r == null ? void 0 : r.select)), a = await this.connection.currentClient.query(i.query, i.variables).toPromise(), s = (n ? Ve : Vt)(a, this.dataPath(this.apiIdentifier));
    return Ut(a, s);
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
    const r = us(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise(), i = Vt(n, this.dataPath(`list${this.capitalizedApiIdentifier}`)), a = Qt(n, i);
    return xt.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const n = ss(this.apiIdentifier, this.namespace, t), i = await this.connection.currentClient.query(n.query, n.variables).toPromise(), a = this.dataPath(`list${this.capitalizedApiIdentifier}`);
    let o;
    r === !1 ? o = Vt(i, a) : o = Ve(i, a, r);
    const s = Qt(i, o);
    return xt.boot(this, s, { options: t, pageInfo: o.pageInfo })[0];
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
    const r = ls(this.apiIdentifier, this.namespace, this.getRecordFromData(t, "create")), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise(), i = nt(n, this.dataPath(`create${this.capitalizedApiIdentifier}`));
    return Ut(n, i[this.apiIdentifier]);
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
      throw new Wr("Cannot perform bulkCreate without a pluralApiIdentifier");
    const n = _e(this.options.pluralApiIdentifier), i = cs(this.apiIdentifier, this.options.pluralApiIdentifier, this.namespace, t), a = await this.connection.currentClient.mutation(i.query, i.variables).toPromise(), o = nt(a, this.dataPath(`bulkCreate${n}`));
    return fn(a, o[this.options.pluralApiIdentifier]);
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
    zr(t, "Can't update a record without an ID passed");
    const n = ds(this.apiIdentifier, this.namespace, t, this.getRecordFromData(r, "update")), i = await this.connection.currentClient.mutation(n.query, n.variables).toPromise(), a = nt(i, this.dataPath(`update${this.capitalizedApiIdentifier}`));
    return Ut(i, a[this.apiIdentifier]);
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
    zr(t, "Can't delete a record without an ID");
    const r = fs(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise();
    nt(n, this.dataPath(`delete${this.capitalizedApiIdentifier}`));
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
    const r = ps(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise();
    nt(n, this.dataPath(`deleteMany${this.capitalizedApiIdentifier}`));
  }
  dataPath(t) {
    return ["internal", ...it([t], this.namespace)];
  }
}
function vn(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, n] of Object.entries(e))
    n && t.push(r);
  return t;
}
const Ee = (e, t, r, n) => {
  const i = class {
    constructor(a) {
      this.connection = a;
    }
  };
  for (const a of n)
    switch (a.type) {
      case "maybeFindOne":
      case "findOne": {
        "functionName" in a ? i.prototype[a.functionName] = Object.assign(
          async function(o, s) {
            return await Mo(
              this,
              a.operationName,
              a.findByField,
              o,
              r,
              e,
              s
            );
          },
          a
        ) : i.prototype[a.type] = Object.assign(
          async function(o, s) {
            const l = await ai(
              this,
              e,
              o,
              r,
              e,
              s,
              a.type != "maybeFindOne"
            );
            return l.isEmpty() ? null : l;
          },
          a
        );
        break;
      }
      case "findMany": {
        i.prototype.findMany = Object.assign(async function(o) {
          return await oi(this, t, r, e, o);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        i.prototype[a.type] = Object.assign(async function(o) {
          const s = await oi(
            this,
            t,
            r,
            e,
            {
              ...o,
              first: 1,
              last: void 0,
              before: void 0,
              after: void 0
            },
            a.type != "maybeFindFirst"
          );
          return (s == null ? void 0 : s[0]) ?? null;
        }, a);
        break;
      }
      case "get": {
        i.prototype.get = Object.assign(async function(o) {
          return await ai(this, a.operationName, void 0, r, e, o);
        }, a);
        break;
      }
      case "action": {
        if (a.isBulk) {
          const o = !!a.variables.ids;
          i.prototype[a.functionName] = Object.assign(
            async function(s, l) {
              let d;
              return o ? d = {
                ids: {
                  ...a.variables.ids,
                  value: s
                }
              } : d = {
                inputs: {
                  ...a.variables.inputs,
                  value: s.map(
                    (c) => Ki(this[a.singleActionFunctionName], void 0, c)
                  )
                }
              }, await si(
                this,
                a.operationName,
                a.isDeleter ? null : r,
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
          const o = !!a.variables.id, s = Object.keys(a.variables).filter((l) => l != "id").length > 0;
          i.prototype[a.functionName] = Object.assign(
            async function(...l) {
              const [d, c] = ys(a, o, s, l);
              return await si(
                this,
                a.operationName,
                a.isDeleter ? null : r,
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
function Ki(e, t, r = {}) {
  var a;
  if (e.hasAmbiguousIdentifier && Object.keys(r).some((o) => {
    var s;
    return !((s = e.paramOnlyVariables) != null && s.includes(o)) && o !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const i = Object.entries(e.variables).find(([o, s]) => o === "id" && s.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in r && typeof r[e.modelApiIdentifier] == "object" && r[e.modelApiIdentifier] !== null || !e.variables[e.modelApiIdentifier])
      n = r;
    else {
      n = {
        [e.modelApiIdentifier]: {}
      };
      for (const [o, s] of Object.entries(r))
        (a = e.paramOnlyVariables) != null && a.includes(o) ? n[o] = s : i && o === i[0] ? n.id = s : n[e.modelApiIdentifier][o] = s;
    }
  else
    n = r;
  return n.id ?? (n.id = t), n;
}
function ys(e, t, r, n) {
  let i, a;
  t && (i = n.shift()), r && (a = n.shift());
  const o = n.shift();
  let s = a;
  (i || a) && (s = Ki(e, i, a));
  const l = {};
  for (const [d, c] of Object.entries(e.variables))
    l[d] = {
      value: d == "id" ? i : s == null ? void 0 : s[d],
      ...c
    };
  return [l, o];
}
const ge = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  email: !0,
  roles: { key: !0, name: !0 },
  updatedAt: !0
}, z = "user", We = "users", ms = Ee(
  z,
  We,
  ge,
  [
    {
      type: "findOne",
      operationName: z,
      modelApiIdentifier: z,
      findByVariableName: "id",
      defaultSelection: ge
    },
    {
      type: "maybeFindOne",
      operationName: z,
      modelApiIdentifier: z,
      findByVariableName: "id",
      defaultSelection: ge
    },
    {
      type: "findMany",
      operationName: We,
      modelApiIdentifier: z,
      defaultSelection: ge
    },
    {
      type: "findFirst",
      operationName: We,
      modelApiIdentifier: z,
      defaultSelection: ge
    },
    {
      type: "maybeFindFirst",
      operationName: We,
      modelApiIdentifier: z,
      defaultSelection: ge
    },
    {
      type: "findOne",
      operationName: We,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: z,
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "signUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: z,
      modelSelectionField: z,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "SignUpUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ge
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
      modelApiIdentifier: z,
      modelSelectionField: We,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "updateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: z,
      modelSelectionField: z,
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
      defaultSelection: ge
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
      modelApiIdentifier: z,
      modelSelectionField: We,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "deleteUser",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: z,
      modelSelectionField: z,
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
      modelApiIdentifier: z,
      modelSelectionField: We,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "createUser",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: z,
      modelSelectionField: z,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "CreateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ge
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
      modelApiIdentifier: z,
      modelSelectionField: We,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: ge
    }
  ]
), De = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, pe = "session", wt = "sessions", hs = Ee(
  pe,
  wt,
  De,
  [
    {
      type: "findOne",
      operationName: pe,
      modelApiIdentifier: pe,
      findByVariableName: "id",
      defaultSelection: De
    },
    {
      type: "maybeFindOne",
      operationName: pe,
      modelApiIdentifier: pe,
      findByVariableName: "id",
      defaultSelection: De
    },
    {
      type: "findMany",
      operationName: wt,
      modelApiIdentifier: pe,
      defaultSelection: De
    },
    {
      type: "findFirst",
      operationName: wt,
      modelApiIdentifier: pe,
      defaultSelection: De
    },
    {
      type: "maybeFindFirst",
      operationName: wt,
      modelApiIdentifier: pe,
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "logInViaEmail",
      functionName: "logInViaEmail",
      namespace: "currentSession",
      modelApiIdentifier: pe,
      modelSelectionField: pe,
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
      defaultSelection: De
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
      modelApiIdentifier: pe,
      modelSelectionField: wt,
      namespace: "currentSession",
      variables: {
        inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" }
      },
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "logOut",
      functionName: "logOut",
      namespace: "currentSession",
      modelApiIdentifier: pe,
      modelSelectionField: pe,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: De
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
      modelApiIdentifier: pe,
      modelSelectionField: wt,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: De
    }
  ]
), Fe = {
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
}, ne = "shopifyProduct", ot = "shopifyProducts", bs = Ee(
  ne,
  ot,
  Fe,
  [
    {
      type: "findOne",
      operationName: ne,
      modelApiIdentifier: ne,
      findByVariableName: "id",
      defaultSelection: Fe
    },
    {
      type: "maybeFindOne",
      operationName: ne,
      modelApiIdentifier: ne,
      findByVariableName: "id",
      defaultSelection: Fe
    },
    {
      type: "findMany",
      operationName: ot,
      modelApiIdentifier: ne,
      defaultSelection: Fe
    },
    {
      type: "findFirst",
      operationName: ot,
      modelApiIdentifier: ne,
      defaultSelection: Fe
    },
    {
      type: "maybeFindFirst",
      operationName: ot,
      modelApiIdentifier: ne,
      defaultSelection: Fe
    },
    {
      type: "action",
      operationName: "createShopifyProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
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
      defaultSelection: Fe
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
      modelApiIdentifier: ne,
      modelSelectionField: ot,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" }
      },
      defaultSelection: Fe
    },
    {
      type: "action",
      operationName: "updateShopifyProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
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
      defaultSelection: Fe
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
      modelApiIdentifier: ne,
      modelSelectionField: ot,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyProductsInput!]" }
      },
      defaultSelection: Fe
    },
    {
      type: "action",
      operationName: "deleteShopifyProduct",
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
      operationName: "bulkDeleteShopifyProducts",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ne,
      modelSelectionField: ot,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), je = {
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
}, ie = "shopifyProductImage", st = "shopifyProductImages", vs = Ee(
  ie,
  st,
  je,
  [
    {
      type: "findOne",
      operationName: ie,
      modelApiIdentifier: ie,
      findByVariableName: "id",
      defaultSelection: je
    },
    {
      type: "maybeFindOne",
      operationName: ie,
      modelApiIdentifier: ie,
      findByVariableName: "id",
      defaultSelection: je
    },
    {
      type: "findMany",
      operationName: st,
      modelApiIdentifier: ie,
      defaultSelection: je
    },
    {
      type: "findFirst",
      operationName: st,
      modelApiIdentifier: ie,
      defaultSelection: je
    },
    {
      type: "maybeFindFirst",
      operationName: st,
      modelApiIdentifier: ie,
      defaultSelection: je
    },
    {
      type: "action",
      operationName: "createShopifyProductImage",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
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
      defaultSelection: je
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
      modelApiIdentifier: ie,
      modelSelectionField: st,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: je
    },
    {
      type: "action",
      operationName: "updateShopifyProductImage",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
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
      defaultSelection: je
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
      modelApiIdentifier: ie,
      modelSelectionField: st,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: je
    },
    {
      type: "action",
      operationName: "deleteShopifyProductImage",
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
      operationName: "bulkDeleteShopifyProductImages",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ie,
      modelSelectionField: st,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Me = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  name: !0,
  position: !0,
  updatedAt: !0,
  values: !0
}, ae = "shopifyProductOption", ut = "shopifyProductOptions", gs = Ee(
  ae,
  ut,
  Me,
  [
    {
      type: "findOne",
      operationName: ae,
      modelApiIdentifier: ae,
      findByVariableName: "id",
      defaultSelection: Me
    },
    {
      type: "maybeFindOne",
      operationName: ae,
      modelApiIdentifier: ae,
      findByVariableName: "id",
      defaultSelection: Me
    },
    {
      type: "findMany",
      operationName: ut,
      modelApiIdentifier: ae,
      defaultSelection: Me
    },
    {
      type: "findFirst",
      operationName: ut,
      modelApiIdentifier: ae,
      defaultSelection: Me
    },
    {
      type: "maybeFindFirst",
      operationName: ut,
      modelApiIdentifier: ae,
      defaultSelection: Me
    },
    {
      type: "action",
      operationName: "createShopifyProductOption",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
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
      defaultSelection: Me
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
      modelApiIdentifier: ae,
      modelSelectionField: ut,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: Me
    },
    {
      type: "action",
      operationName: "updateShopifyProductOption",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
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
      defaultSelection: Me
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
      modelApiIdentifier: ae,
      modelSelectionField: ut,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: Me
    },
    {
      type: "action",
      operationName: "deleteShopifyProductOption",
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
      operationName: "bulkDeleteShopifyProductOptions",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ae,
      modelSelectionField: ut,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), qe = {
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
}, oe = "shopifyProductVariant", lt = "shopifyProductVariants", Ss = Ee(
  oe,
  lt,
  qe,
  [
    {
      type: "findOne",
      operationName: oe,
      modelApiIdentifier: oe,
      findByVariableName: "id",
      defaultSelection: qe
    },
    {
      type: "maybeFindOne",
      operationName: oe,
      modelApiIdentifier: oe,
      findByVariableName: "id",
      defaultSelection: qe
    },
    {
      type: "findMany",
      operationName: lt,
      modelApiIdentifier: oe,
      defaultSelection: qe
    },
    {
      type: "findFirst",
      operationName: lt,
      modelApiIdentifier: oe,
      defaultSelection: qe
    },
    {
      type: "maybeFindFirst",
      operationName: lt,
      modelApiIdentifier: oe,
      defaultSelection: qe
    },
    {
      type: "action",
      operationName: "createShopifyProductVariant",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: oe,
      modelSelectionField: oe,
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
      defaultSelection: qe
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
      modelApiIdentifier: oe,
      modelSelectionField: lt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: qe
    },
    {
      type: "action",
      operationName: "updateShopifyProductVariant",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: oe,
      modelSelectionField: oe,
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
      defaultSelection: qe
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
      modelApiIdentifier: oe,
      modelSelectionField: lt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: qe
    },
    {
      type: "action",
      operationName: "deleteShopifyProductVariant",
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
      operationName: "bulkDeleteShopifyProductVariants",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: oe,
      modelSelectionField: lt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), ye = {
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
}, G = "shopifyShop", ze = "shopifyShops", ws = Ee(
  G,
  ze,
  ye,
  [
    {
      type: "findOne",
      operationName: G,
      modelApiIdentifier: G,
      findByVariableName: "id",
      defaultSelection: ye
    },
    {
      type: "maybeFindOne",
      operationName: G,
      modelApiIdentifier: G,
      findByVariableName: "id",
      defaultSelection: ye
    },
    {
      type: "findMany",
      operationName: ze,
      modelApiIdentifier: G,
      defaultSelection: ye
    },
    {
      type: "findFirst",
      operationName: ze,
      modelApiIdentifier: G,
      defaultSelection: ye
    },
    {
      type: "maybeFindFirst",
      operationName: ze,
      modelApiIdentifier: G,
      defaultSelection: ye
    },
    {
      type: "action",
      operationName: "createShopifyShop",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: G,
      modelSelectionField: G,
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
      defaultSelection: ye
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
      modelApiIdentifier: G,
      modelSelectionField: ze,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyShopsInput!]" }
      },
      defaultSelection: ye
    },
    {
      type: "action",
      operationName: "updateShopifyShop",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: G,
      modelSelectionField: G,
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
      defaultSelection: ye
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
      modelApiIdentifier: G,
      modelSelectionField: ze,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyShopsInput!]" }
      },
      defaultSelection: ye
    },
    {
      type: "action",
      operationName: "deleteShopifyShop",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: G,
      modelSelectionField: G,
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
      modelApiIdentifier: G,
      modelSelectionField: ze,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "reinstallShopifyShop",
      functionName: "reinstall",
      namespace: null,
      modelApiIdentifier: G,
      modelSelectionField: G,
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
      defaultSelection: ye
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
      modelApiIdentifier: G,
      modelSelectionField: ze,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkReinstallShopifyShopsInput!]" }
      },
      defaultSelection: ye
    },
    {
      type: "action",
      operationName: "uninstallShopifyShop",
      functionName: "uninstall",
      namespace: null,
      modelApiIdentifier: G,
      modelSelectionField: G,
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
      defaultSelection: ye
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
      modelApiIdentifier: G,
      modelSelectionField: ze,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUninstallShopifyShopsInput!]" }
      },
      defaultSelection: ye
    }
  ]
), Be = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
}, se = "productPairing", ct = "productPairings", Is = Ee(
  se,
  ct,
  Be,
  [
    {
      type: "findOne",
      operationName: se,
      modelApiIdentifier: se,
      findByVariableName: "id",
      defaultSelection: Be
    },
    {
      type: "maybeFindOne",
      operationName: se,
      modelApiIdentifier: se,
      findByVariableName: "id",
      defaultSelection: Be
    },
    {
      type: "findMany",
      operationName: ct,
      modelApiIdentifier: se,
      defaultSelection: Be
    },
    {
      type: "findFirst",
      operationName: ct,
      modelApiIdentifier: se,
      defaultSelection: Be
    },
    {
      type: "maybeFindFirst",
      operationName: ct,
      modelApiIdentifier: se,
      defaultSelection: Be
    },
    {
      type: "action",
      operationName: "createProductPairing",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: se,
      modelSelectionField: se,
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
      defaultSelection: Be
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
      modelApiIdentifier: se,
      modelSelectionField: ct,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateProductPairingsInput!]" }
      },
      defaultSelection: Be
    },
    {
      type: "action",
      operationName: "updateProductPairing",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: se,
      modelSelectionField: se,
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
      defaultSelection: Be
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
      modelApiIdentifier: se,
      modelSelectionField: ct,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateProductPairingsInput!]" }
      },
      defaultSelection: Be
    },
    {
      type: "action",
      operationName: "deleteProductPairing",
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
      operationName: "bulkDeleteProductPairings",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: se,
      modelSelectionField: ct,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Se = {
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
}, X = "shopifySync", He = "shopifySyncs", As = Ee(
  X,
  He,
  Se,
  [
    {
      type: "findOne",
      operationName: X,
      modelApiIdentifier: X,
      findByVariableName: "id",
      defaultSelection: Se
    },
    {
      type: "maybeFindOne",
      operationName: X,
      modelApiIdentifier: X,
      findByVariableName: "id",
      defaultSelection: Se
    },
    {
      type: "findMany",
      operationName: He,
      modelApiIdentifier: X,
      defaultSelection: Se
    },
    {
      type: "findFirst",
      operationName: He,
      modelApiIdentifier: X,
      defaultSelection: Se
    },
    {
      type: "maybeFindFirst",
      operationName: He,
      modelApiIdentifier: X,
      defaultSelection: Se
    },
    {
      type: "findOne",
      operationName: He,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: X,
      defaultSelection: Se
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
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
      defaultSelection: Se
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
      modelApiIdentifier: X,
      modelSelectionField: He,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCompleteShopifySyncsInput!]" }
      },
      defaultSelection: Se
    },
    {
      type: "action",
      operationName: "errorShopifySync",
      functionName: "error",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
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
      defaultSelection: Se
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
      modelApiIdentifier: X,
      modelSelectionField: He,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkErrorShopifySyncsInput!]" }
      },
      defaultSelection: Se
    },
    {
      type: "action",
      operationName: "runShopifySync",
      functionName: "run",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
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
      defaultSelection: Se
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
      modelApiIdentifier: X,
      modelSelectionField: He,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: Se
    }
  ]
), Te = {
  __typename: !0,
  id: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  updatedAt: !0
}, ee = "ambiguous", Ze = "ambiguouss", ks = Ee(
  ee,
  Ze,
  Te,
  [
    {
      type: "findOne",
      operationName: ee,
      modelApiIdentifier: ee,
      findByVariableName: "id",
      defaultSelection: Te
    },
    {
      type: "maybeFindOne",
      operationName: ee,
      modelApiIdentifier: ee,
      findByVariableName: "id",
      defaultSelection: Te
    },
    {
      type: "findMany",
      operationName: Ze,
      modelApiIdentifier: ee,
      defaultSelection: Te
    },
    {
      type: "findFirst",
      operationName: Ze,
      modelApiIdentifier: ee,
      defaultSelection: Te
    },
    {
      type: "maybeFindFirst",
      operationName: Ze,
      modelApiIdentifier: ee,
      defaultSelection: Te
    },
    {
      type: "findOne",
      operationName: Ze,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ee,
      defaultSelection: Te
    },
    {
      type: "action",
      operationName: "createAmbiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ee,
      modelSelectionField: ee,
      isBulk: !1,
      isDeleter: !1,
      variables: { ambiguous: { required: !1, type: "CreateAmbiguousInput" } },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Te
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
      modelApiIdentifier: ee,
      modelSelectionField: Ze,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAmbiguousInput!]" } },
      defaultSelection: Te
    },
    {
      type: "action",
      operationName: "updateAmbiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ee,
      modelSelectionField: ee,
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
      defaultSelection: Te
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
      modelApiIdentifier: ee,
      modelSelectionField: Ze,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAmbiguousInput!]" } },
      defaultSelection: Te
    },
    {
      type: "action",
      operationName: "deleteAmbiguous",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: ee,
      modelSelectionField: ee,
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
      modelApiIdentifier: ee,
      modelSelectionField: Ze,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Ce = {
  __typename: !0,
  id: !0,
  createdAt: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, te = "unambiguous", Xe = "unambiguouss", Os = Ee(
  te,
  Xe,
  Ce,
  [
    {
      type: "findOne",
      operationName: te,
      modelApiIdentifier: te,
      findByVariableName: "id",
      defaultSelection: Ce
    },
    {
      type: "maybeFindOne",
      operationName: te,
      modelApiIdentifier: te,
      findByVariableName: "id",
      defaultSelection: Ce
    },
    {
      type: "findMany",
      operationName: Xe,
      modelApiIdentifier: te,
      defaultSelection: Ce
    },
    {
      type: "findFirst",
      operationName: Xe,
      modelApiIdentifier: te,
      defaultSelection: Ce
    },
    {
      type: "maybeFindFirst",
      operationName: Xe,
      modelApiIdentifier: te,
      defaultSelection: Ce
    },
    {
      type: "findOne",
      operationName: Xe,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: te,
      defaultSelection: Ce
    },
    {
      type: "action",
      operationName: "createUnambiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: te,
      modelSelectionField: te,
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
      defaultSelection: Ce
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
      modelApiIdentifier: te,
      modelSelectionField: Xe,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateUnambiguousInput!]" }
      },
      defaultSelection: Ce
    },
    {
      type: "action",
      operationName: "updateUnambiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: te,
      modelSelectionField: te,
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
      defaultSelection: Ce
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
      modelApiIdentifier: te,
      modelSelectionField: Xe,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateUnambiguousInput!]" }
      },
      defaultSelection: Ce
    },
    {
      type: "action",
      operationName: "deleteUnambiguous",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: te,
      modelSelectionField: te,
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
      modelApiIdentifier: te,
      modelSelectionField: Xe,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), fi = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, pi = "session", Ns = "sessions", Es = Ee(
  pi,
  Ns,
  fi,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: fi,
      modelApiIdentifier: pi
    }
  ]
);
var Ji;
const yi = "production", Ps = "development", Ts = Symbol.for("gadget/modelRelationships"), Cs = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class _s {
  constructor(t) {
    var i;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[Ji] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (a) => await ui(
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
      async () => await ui(
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
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? Cs() ?? Ps).toLocaleLowerCase();
    let r;
    this.apiRoots[this.environment] ? r = this.apiRoots[this.environment] : r = `https://related-products-example${this.environment == yi ? "" : `--${this.environment}`}.gadget.app`;
    const n = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== yi) {
      const a = ({ forward: o }) => (s) => {
        const l = o(s);
        return nn(
          l,
          Ot((d) => {
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
      n.beforeAll = [
        a,
        ...n.beforeAll ?? []
      ];
    }
    if (this.connection = new zi({
      endpoint: new URL("api/graphql", r).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: n,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == H.APIKey && !((i = t == null ? void 0 : t.authenticationMode) != null && i.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new ms(this.connection), this.session = new hs(this.connection), this.shopifyProduct = new bs(this.connection), this.shopifyProductImage = new vs(this.connection), this.shopifyProductOption = new gs(this.connection), this.shopifyProductVariant = new Ss(this.connection), this.shopifyShop = new ws(this.connection), this.productPairing = new Is(this.connection), this.shopifySync = new As(this.connection), this.ambiguous = new ks(this.connection), this.unambiguous = new Os(this.connection), this.currentSession = new Es(this.connection), this.internal = {
      user: new Pe("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new Pe("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new Pe("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new Pe("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new Pe("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new Pe("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new Pe("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new Pe("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new Pe("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new Pe("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new Pe("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(t, r, n) {
    const { data: i, error: a } = await this.connection.currentClient.query(t, r, n).toPromise();
    if (a)
      throw a;
    return i;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(t, r, n) {
    const { data: i, error: a } = await this.connection.currentClient.mutation(t, r, n).toPromise();
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
  async fetch(t, r = {}) {
    return await this.connection.fetch(t, r);
  }
  async enqueue(t, r, n) {
    zr(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let i, a;
    return typeof n < "u" ? (i = r, a = n) : !t.variables || Object.keys(t.variables).length == 0 ? (i = {}, a = r) : (typeof r == "string" ? i = { id: r } : i = r, a = {}), await qo(this.connection, t, i, a);
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
    return new lr(this.connection, t, r);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
Ji = Ts;
var Yi = {}, wr = $e.createContext(Yi);
wr.Provider;
wr.Consumer;
wr.displayName = "UrqlContext";
var xs = () => {
  var e = $e.useContext(wr);
  if (e === Yi && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, Rs = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, Ds = (e, t) => e === t || !(!e || !t || e.key !== t.key), xr = (e, t) => {
  var r = {
    ...e,
    ...t,
    data: t.data !== void 0 || t.error ? t.data : e.data,
    fetching: !!t.fetching,
    stale: !!t.stale
  };
  return ((n, i) => {
    for (var a in n)
      if (!(a in i))
        return !0;
    for (var o in i)
      if (o === "operation" ? !Ds(n[o], i[o]) : n[o] !== i[o])
        return !0;
    return !1;
  })(e, r) ? r : e;
}, Fs = (e, t) => {
  for (var r = 0, n = t.length; r < n; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}, Rr = $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function mi(e, t) {
  process.env.NODE_ENV !== "production" && Rr && Rr.ReactCurrentOwner && Rr.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function js(e, t) {
  var r = $e.useRef(void 0);
  return $e.useMemo(() => {
    var n = ur(e, t);
    return r.current !== void 0 && r.current.key === n.key ? r.current : (r.current = n, n);
  }, [e, t]);
}
var Ms = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    e.operations$ && yt((n) => {
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
}, qs = (e, t) => e.suspense && (!t || t.suspense !== !1);
function Bs(e) {
  var t = xs(), r = Ms(t), n = qs(t, e.context), i = js(e.query, e.variables), a = $e.useMemo(() => {
    if (e.pause)
      return null;
    var y = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return n ? Et((h) => {
      r.set(i.key, h);
    })(y) : y;
  }, [r, t, i, n, e.pause, e.requestPolicy, e.context]), o = $e.useCallback((y, h) => {
    if (!y)
      return {
        fetching: !1
      };
    var b = r.get(i.key);
    if (b) {
      if (h && b != null && "then" in b)
        throw b;
    } else {
      var w, _ = yt((S) => {
        b = S, w && w(b);
      })(hi(() => h && !w || !b)(y));
      if (b == null && h) {
        var M = new Promise((S) => {
          w = S;
        });
        throw r.set(i.key, M), M;
      } else
        _.unsubscribe();
    }
    return b || {
      fetching: !0
    };
  }, [r, i]), s = [t, i, e.requestPolicy, e.context, e.pause], [l, d] = $e.useState(() => [a, xr(Rs, o(a, n)), s]), c = l[1];
  a !== l[0] && Fs(l[2], s) && d([a, c = xr(l[1], o(a, n)), s]), $e.useEffect(() => {
    var y = l[0], h = l[2][1], b = !1, w = (M) => {
      b = !0, mi(d, (S) => {
        var V = xr(S[1], M);
        return S[1] !== V ? [S[0], V, S[2]] : S;
      });
    };
    if (y) {
      var _ = yt(w)(Xr(() => {
        w({
          fetching: !1
        });
      })(y));
      return b || w({
        fetching: !0
      }), () => {
        r.dispose(h.key), _.unsubscribe();
      };
    } else
      w({
        fetching: !1
      });
  }, [r, l[0], l[2][1]]);
  var f = $e.useCallback((y) => {
    var h = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...y
    };
    mi(d, (b) => [n ? Et((w) => {
      r.set(i.key, w);
    })(t.executeQuery(i, h)) : t.executeQuery(i, h), b[1], s]);
  }, [t, r, i, n, o, e.requestPolicy, e.context]);
  return [c, f];
}
const $s = hr.createContext(void 0);
hr.createContext(void 0);
const Vs = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Us = (e, t) => {
  let r = "";
  return e !== void 0 ? r = `[Network] ${e.message}` : t !== void 0 ? t.forEach((n) => {
    r += `[GraphQL] ${n.message}
`;
  }) : r = "Unknown error", r.trim();
}, Gs = (e) => typeof e == "string" ? new zt(e) : e != null && e.message && !e.code ? new zt(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class ft extends Error {
  /** @private */
  static forClientSideError(t, r) {
    return new ft({
      executionErrors: [t],
      response: r
    });
  }
  /** @private */
  static forErrorsResponse(t, r) {
    return new ft({
      executionErrors: t.map(dn),
      response: r
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new ft({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, r, n = !1) {
    const i = No(t, r);
    let a = ft.forMaybeCombinedError(t.error);
    return !a && i && !n && (a = ft.forClientSideError(i)), a;
  }
  constructor({ networkError: t, executionErrors: r, response: n }) {
    const i = (r || []).map(Gs), a = Us(t, i);
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
    }), this.message = a, this.executionErrors = i, this.graphQLErrors = i, this.networkError = t, this.response = n;
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
const Ls = (e) => {
  const { context: t, suspense: r, ...n } = e ?? {}, i = Dr(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...n,
    context: i
  };
}, Ws = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), zs = (e) => {
  if (!Sa($s))
    throw new Error(Vs);
  const t = Ls(e);
  return Bs(t);
};
var Qs = typeof Element < "u", Ks = typeof Map == "function", Js = typeof Set == "function", Ys = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function cr(e, t) {
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
        if (!cr(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (Ks && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!cr(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Js && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Ys && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Qs && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !cr(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Hs = function(t, r) {
  try {
    return cr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Zs = /* @__PURE__ */ Ia(Hs), Xs = (e) => {
  const t = wa();
  return e ? (t.current === void 0 || !Zs(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, eu = (e, t) => {
  const r = Xs(t), n = Dr(() => yn(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, r, e.findMany.namespace), [e, r]), [i, a] = zs(Ws(n, t));
  return [Dr(() => {
    const s = it([e.findMany.operationName], e.findMany.namespace);
    let l = i.data;
    if (l) {
      const c = _t(i.data, s);
      if (c) {
        const f = Qt(i, c);
        l = xt.boot(e, f, c);
      }
    }
    const d = ft.errorIfDataAbsent(i, s, t == null ? void 0 : t.pause);
    return { ...i, data: l, error: d };
  }, [e, t == null ? void 0 : t.pause, i]), a];
}, tu = new _s(), iu = () => {
  const [{ data: e }] = eu(tu.shopifyProduct);
  return /* @__PURE__ */ Fn.jsx(Fn.Fragment, { children: JSON.stringify(e) });
};
export {
  iu as R,
  nu as c,
  Ia as g
};
