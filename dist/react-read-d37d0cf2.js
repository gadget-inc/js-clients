import * as Be from "react";
import mr, { useMemo as Rr, useContext as va, useRef as ga } from "react";
var tu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dr = { exports: {} }, Dt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xn;
function wa() {
  if (xn)
    return Dt;
  xn = 1;
  var e = mr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return Dt.Fragment = r, Dt.jsx = o, Dt.jsxs = o, Dt;
}
var Ft = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function Ia() {
  return Rn || (Rn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = mr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, w = "@@iterator";
    function C(u) {
      if (u === null || typeof u != "object")
        return null;
      var p = b && u[b] || u[w];
      return typeof p == "function" ? p : null;
    }
    var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(u) {
      {
        for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), I = 1; I < p; I++)
          v[I - 1] = arguments[I];
        $("error", u, v);
      }
    }
    function $(u, p, v) {
      {
        var I = j.ReactDebugCurrentFrame, _ = I.getStackAddendum();
        _ !== "" && (p += "%s", v = v.concat([_]));
        var F = v.map(function(T) {
          return String(T);
        });
        F.unshift("Warning: " + p), Function.prototype.apply.call(console[u], console, F);
      }
    }
    var m = !1, A = !1, g = !1, V = !1, Qe = !1, mt;
    mt = Symbol.for("react.module.reference");
    function ht(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === a || Qe || u === i || u === d || u === c || V || u === h || m || A || g || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === f || u.$$typeof === o || u.$$typeof === s || u.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === mt || u.getModuleId !== void 0));
    }
    function Yt(u, p, v) {
      var I = u.displayName;
      if (I)
        return I;
      var _ = p.displayName || p.name || "";
      return _ !== "" ? v + "(" + _ + ")" : v;
    }
    function xt(u) {
      return u.displayName || "Context";
    }
    function Ie(u) {
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
            return xt(p) + ".Consumer";
          case o:
            var v = u;
            return xt(v._context) + ".Provider";
          case l:
            return Yt(u, u.render, "ForwardRef");
          case f:
            var I = u.displayName || null;
            return I !== null ? I : Ie(u.type) || "Memo";
          case y: {
            var _ = u, F = _._payload, T = _._init;
            try {
              return Ie(T(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, M = 0, D, P, B, xe, x, Ue, Ke;
    function it() {
    }
    it.__reactDisabledLog = !0;
    function Je() {
      {
        if (M === 0) {
          D = console.log, P = console.info, B = console.warn, xe = console.error, x = console.group, Ue = console.groupCollapsed, Ke = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: it,
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
        M++;
      }
    }
    function J() {
      {
        if (M--, M === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, u, {
              value: D
            }),
            info: k({}, u, {
              value: P
            }),
            warn: k({}, u, {
              value: B
            }),
            error: k({}, u, {
              value: xe
            }),
            group: k({}, u, {
              value: x
            }),
            groupCollapsed: k({}, u, {
              value: Ue
            }),
            groupEnd: k({}, u, {
              value: Ke
            })
          });
        }
        M < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = j.ReactCurrentDispatcher, Ht;
    function bt(u, p, v) {
      {
        if (Ht === void 0)
          try {
            throw Error();
          } catch (_) {
            var I = _.stack.trim().match(/\n( *(at )?)/);
            Ht = I && I[1] || "";
          }
        return `
` + Ht + u;
      }
    }
    var wr = !1, Zt;
    {
      var Ji = typeof WeakMap == "function" ? WeakMap : Map;
      Zt = new Ji();
    }
    function vn(u, p) {
      if (!u || wr)
        return "";
      {
        var v = Zt.get(u);
        if (v !== void 0)
          return v;
      }
      var I;
      wr = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = G.current, G.current = null, Je();
      try {
        if (p) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (Ge) {
              I = Ge;
            }
            Reflect.construct(u, [], T);
          } else {
            try {
              T.call();
            } catch (Ge) {
              I = Ge;
            }
            u.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ge) {
            I = Ge;
          }
          u();
        }
      } catch (Ge) {
        if (Ge && I && typeof Ge.stack == "string") {
          for (var E = Ge.stack.split(`
`), ue = I.stack.split(`
`), L = E.length - 1, Q = ue.length - 1; L >= 1 && Q >= 0 && E[L] !== ue[Q]; )
            Q--;
          for (; L >= 1 && Q >= 0; L--, Q--)
            if (E[L] !== ue[Q]) {
              if (L !== 1 || Q !== 1)
                do
                  if (L--, Q--, Q < 0 || E[L] !== ue[Q]) {
                    var Ae = `
` + E[L].replace(" at new ", " at ");
                    return u.displayName && Ae.includes("<anonymous>") && (Ae = Ae.replace("<anonymous>", u.displayName)), typeof u == "function" && Zt.set(u, Ae), Ae;
                  }
                while (L >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        wr = !1, G.current = F, J(), Error.prepareStackTrace = _;
      }
      var gt = u ? u.displayName || u.name : "", _n = gt ? bt(gt) : "";
      return typeof u == "function" && Zt.set(u, _n), _n;
    }
    function Yi(u, p, v) {
      return vn(u, !1);
    }
    function Hi(u) {
      var p = u.prototype;
      return !!(p && p.isReactComponent);
    }
    function Xt(u, p, v) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return vn(u, Hi(u));
      if (typeof u == "string")
        return bt(u);
      switch (u) {
        case d:
          return bt("Suspense");
        case c:
          return bt("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            return Yi(u.render);
          case f:
            return Xt(u.type, p, v);
          case y: {
            var I = u, _ = I._payload, F = I._init;
            try {
              return Xt(F(_), p, v);
            } catch {
            }
          }
        }
      return "";
    }
    var er = Object.prototype.hasOwnProperty, gn = {}, Sn = j.ReactDebugCurrentFrame;
    function tr(u) {
      if (u) {
        var p = u._owner, v = Xt(u.type, u._source, p ? p.type : null);
        Sn.setExtraStackFrame(v);
      } else
        Sn.setExtraStackFrame(null);
    }
    function Zi(u, p, v, I, _) {
      {
        var F = Function.call.bind(er);
        for (var T in u)
          if (F(u, T)) {
            var E = void 0;
            try {
              if (typeof u[T] != "function") {
                var ue = Error((I || "React class") + ": " + v + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              E = u[T](p, T, I, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              E = L;
            }
            E && !(E instanceof Error) && (tr(_), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", v, T, typeof E), tr(null)), E instanceof Error && !(E.message in gn) && (gn[E.message] = !0, tr(_), S("Failed %s type: %s", v, E.message), tr(null));
          }
      }
    }
    var Xi = Array.isArray;
    function Ir(u) {
      return Xi(u);
    }
    function ea(u) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, v = p && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return v;
      }
    }
    function ta(u) {
      try {
        return wn(u), !1;
      } catch {
        return !0;
      }
    }
    function wn(u) {
      return "" + u;
    }
    function In(u) {
      if (ta(u))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ea(u)), wn(u);
    }
    var Rt = j.ReactCurrentOwner, ra = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, An, kn, Ar;
    Ar = {};
    function na(u) {
      if (er.call(u, "ref")) {
        var p = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function ia(u) {
      if (er.call(u, "key")) {
        var p = Object.getOwnPropertyDescriptor(u, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function aa(u, p) {
      if (typeof u.ref == "string" && Rt.current && p && Rt.current.stateNode !== p) {
        var v = Ie(Rt.current.type);
        Ar[v] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ie(Rt.current.type), u.ref), Ar[v] = !0);
      }
    }
    function oa(u, p) {
      {
        var v = function() {
          An || (An = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function sa(u, p) {
      {
        var v = function() {
          kn || (kn = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var ua = function(u, p, v, I, _, F, T) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: p,
        ref: v,
        props: T,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function la(u, p, v, I, _) {
      {
        var F, T = {}, E = null, ue = null;
        v !== void 0 && (In(v), E = "" + v), ia(p) && (In(p.key), E = "" + p.key), na(p) && (ue = p.ref, aa(p, _));
        for (F in p)
          er.call(p, F) && !ra.hasOwnProperty(F) && (T[F] = p[F]);
        if (u && u.defaultProps) {
          var L = u.defaultProps;
          for (F in L)
            T[F] === void 0 && (T[F] = L[F]);
        }
        if (E || ue) {
          var Q = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          E && oa(T, Q), ue && sa(T, Q);
        }
        return ua(u, E, ue, _, I, Rt.current, T);
      }
    }
    var kr = j.ReactCurrentOwner, On = j.ReactDebugCurrentFrame;
    function vt(u) {
      if (u) {
        var p = u._owner, v = Xt(u.type, u._source, p ? p.type : null);
        On.setExtraStackFrame(v);
      } else
        On.setExtraStackFrame(null);
    }
    var Or;
    Or = !1;
    function Nr(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function Nn() {
      {
        if (kr.current) {
          var u = Ie(kr.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function ca(u) {
      {
        if (u !== void 0) {
          var p = u.fileName.replace(/^.*[\\\/]/, ""), v = u.lineNumber;
          return `

Check your code at ` + p + ":" + v + ".";
        }
        return "";
      }
    }
    var En = {};
    function da(u) {
      {
        var p = Nn();
        if (!p) {
          var v = typeof u == "string" ? u : u.displayName || u.name;
          v && (p = `

Check the top-level render call using <` + v + ">.");
        }
        return p;
      }
    }
    function Pn(u, p) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var v = da(p);
        if (En[v])
          return;
        En[v] = !0;
        var I = "";
        u && u._owner && u._owner !== kr.current && (I = " It was passed a child from " + Ie(u._owner.type) + "."), vt(u), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, I), vt(null);
      }
    }
    function Tn(u, p) {
      {
        if (typeof u != "object")
          return;
        if (Ir(u))
          for (var v = 0; v < u.length; v++) {
            var I = u[v];
            Nr(I) && Pn(I, p);
          }
        else if (Nr(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var _ = C(u);
          if (typeof _ == "function" && _ !== u.entries)
            for (var F = _.call(u), T; !(T = F.next()).done; )
              Nr(T.value) && Pn(T.value, p);
        }
      }
    }
    function fa(u) {
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
          var I = Ie(p);
          Zi(v, u.props, "prop", I, u);
        } else if (p.PropTypes !== void 0 && !Or) {
          Or = !0;
          var _ = Ie(p);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pa(u) {
      {
        for (var p = Object.keys(u.props), v = 0; v < p.length; v++) {
          var I = p[v];
          if (I !== "children" && I !== "key") {
            vt(u), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), vt(null);
            break;
          }
        }
        u.ref !== null && (vt(u), S("Invalid attribute `ref` supplied to `React.Fragment`."), vt(null));
      }
    }
    function Cn(u, p, v, I, _, F) {
      {
        var T = ht(u);
        if (!T) {
          var E = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = ca(_);
          ue ? E += ue : E += Nn();
          var L;
          u === null ? L = "null" : Ir(u) ? L = "array" : u !== void 0 && u.$$typeof === t ? (L = "<" + (Ie(u.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : L = typeof u, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, E);
        }
        var Q = la(u, p, v, _, F);
        if (Q == null)
          return Q;
        if (T) {
          var Ae = p.children;
          if (Ae !== void 0)
            if (I)
              if (Ir(Ae)) {
                for (var gt = 0; gt < Ae.length; gt++)
                  Tn(Ae[gt], u);
                Object.freeze && Object.freeze(Ae);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tn(Ae, u);
        }
        return u === n ? pa(Q) : fa(Q), Q;
      }
    }
    function ya(u, p, v) {
      return Cn(u, p, v, !0);
    }
    function ma(u, p, v) {
      return Cn(u, p, v, !1);
    }
    var ha = ma, ba = ya;
    Ft.Fragment = n, Ft.jsx = ha, Ft.jsxs = ba;
  }()), Ft;
}
process.env.NODE_ENV === "production" ? Dr.exports = wa() : Dr.exports = Ia();
var Dn = Dr.exports, Hr = () => {
}, he = Hr;
function _e(e) {
  return {
    tag: 0,
    0: e
  };
}
function Qt(e) {
  return {
    tag: 1,
    0: e
  };
}
var Aa = (e) => e;
function H(e) {
  return (t) => (r) => {
    var n = he;
    t((i) => {
      i === 0 ? r(0) : i.tag === 0 ? (n = i[0], r(i)) : e(i[0]) ? r(i) : n(0);
    });
  };
}
function kt(e) {
  return (t) => (r) => t((n) => {
    n === 0 || n.tag === 0 ? r(n) : r(Qt(e(n[0])));
  });
}
function Gt(e) {
  return (t) => (r) => {
    var n = [], i = he, a = !1, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, n.length || r(0)) : s.tag === 0 ? i = s[0] : (a = !1, function(d) {
        var c = he;
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
    }), r(_e((s) => {
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
function ka(e) {
  return Gt(Aa)(e);
}
function Ot(e) {
  return ka(Ea(e));
}
function Zr(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          r(_e((o) => {
            o === 1 ? (n = !0, a(1), e()) : a(o);
          }));
        } else
          r(i);
    });
  };
}
function Nt(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0);
        else if (i.tag === 0) {
          var a = i[0];
          r(_e((o) => {
            o === 1 && (n = !0), a(o);
          }));
        } else
          e(i[0]), r(i);
    });
  };
}
function Fn(e) {
  return (t) => (r) => t((n) => {
    n === 0 ? r(0) : n.tag === 0 ? (r(n), e()) : r(n);
  });
}
function Lt(e) {
  var t = [], r = he, n = !1;
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
    }), i(_e((a) => {
      if (a === 1) {
        var o = t.indexOf(i);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || r(1);
      } else
        n || (n = !0, r(0));
    }));
  };
}
function jn(e) {
  return (t) => (r) => {
    var n = he, i = he, a = !1, o = !1, s = !1, l = !1;
    t((d) => {
      l || (d === 0 ? (l = !0, s || r(0)) : d.tag === 0 ? n = d[0] : (s && (i(1), i = he), a ? a = !1 : (a = !0, n(0)), function(f) {
        s = !0, f((y) => {
          s && (y === 0 ? (s = !1, l ? r(0) : a || (a = !0, n(0))) : y.tag === 0 ? (o = !1, (i = y[0])(0)) : (r(y), o ? o = !1 : i(0)));
        });
      }(e(d[0]))));
    }), r(_e((d) => {
      d === 1 ? (l || (l = !0, n(1)), s && (s = !1, i(1))) : (!l && !a && (a = !0, n(0)), s && !o && (o = !0, i(0)));
    }));
  };
}
function hr(e) {
  return (t) => (r) => {
    var n = he, i = !1, a = 0;
    t((o) => {
      i || (o === 0 ? (i = !0, r(0)) : o.tag === 0 ? e <= 0 ? (i = !0, r(0), o[0](1)) : n = o[0] : a++ < e ? (r(o), !i && a >= e && (i = !0, r(0), n(1))) : r(o));
    }), r(_e((o) => {
      o === 1 && !i ? (i = !0, n(1)) : o === 0 && !i && a < e && n(0);
    }));
  };
}
function Xr(e) {
  return (t) => (r) => {
    var n = he, i = he, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, i(1), r(0)) : o.tag === 0 ? (n = o[0], e((s) => {
        s === 0 || (s.tag === 0 ? (i = s[0])(0) : (a = !0, i(1), n(1), r(0)));
      })) : r(o));
    }), r(_e((o) => {
      o === 1 && !a ? (a = !0, n(1), i(1)) : a || n(0);
    }));
  };
}
function mi(e, t) {
  return (r) => (n) => {
    var i = he, a = !1;
    r((o) => {
      a || (o === 0 ? (a = !0, n(0)) : o.tag === 0 ? (i = o[0], n(o)) : e(o[0]) ? n(o) : (a = !0, t && n(o), n(0), i(1)));
    });
  };
}
function Oa(e) {
  return (t) => e()(t);
}
function hi(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), n = !1, i = !1, a = !1, o;
    t(_e(async (s) => {
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
              a = !1, t(Qt(o.value));
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
function Na(e) {
  return e[Symbol.asyncIterator] ? hi(e) : (t) => {
    var r = e[Symbol.iterator](), n = !1, i = !1, a = !1, o;
    t(_e((s) => {
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
              a = !1, t(Qt(o.value));
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
var Ea = Na;
function Bt(e) {
  return (t) => {
    var r = !1;
    t(_e((n) => {
      n === 1 ? r = !0 : r || (r = !0, t(Qt(e)), t(0));
    }));
  };
}
function en(e) {
  return (t) => {
    var r = !1, n = e({
      next(i) {
        r || t(Qt(i));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(_e((i) => {
      i === 1 && !r && (r = !0, n());
    }));
  };
}
function Mn() {
  var e, t;
  return {
    source: Lt(en((r) => (e = r.next, t = r.complete, Hr))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function qn(e) {
  return en((t) => (e.then((r) => {
    Promise.resolve(r).then(() => {
      t.next(r), t.complete();
    });
  }), Hr));
}
function pt(e) {
  return (t) => {
    var r = he, n = !1;
    return t((i) => {
      i === 0 ? n = !0 : i.tag === 0 ? (r = i[0])(0) : n || (e(i[0]), r(0));
    }), {
      unsubscribe() {
        n || (n = !0, r(1));
      }
    };
  };
}
function Pa(e) {
  pt((t) => {
  })(e);
}
var Er = {
  done: !0
}, Ta = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], r = !1, n = he, i;
    return e((a) => {
      r || (a === 0 ? (i && (i = i(Er)), r = !0) : a.tag === 0 ? (n = a[0])(0) : i ? i = i({
        value: a[0],
        done: !1
      }) : t.push(a[0]));
    }), {
      async next() {
        return r && !t.length ? Er : (!r && t.length <= 1 && n(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((a) => i = a));
      },
      async return() {
        return r || (i = n(1)), r = !0, Er;
      }
    };
  }
});
function tn(e) {
  return new Promise((t) => {
    var r = he, n;
    e((i) => {
      i === 0 ? Promise.resolve(n).then(t) : i.tag === 0 ? (r = i[0])(0) : (n = i[0], r(0));
    });
  });
}
var rn = (...e) => {
  for (var t = e[0], r = 1, n = e.length; r < n; r++)
    t = e[r](t);
  return t;
}, At = {
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
class Wt extends Error {
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
var q, O;
function K(e) {
  return new Wt(`Syntax Error: Unexpected token at ${O} in ${e}`);
}
function Se(e) {
  if (e.lastIndex = O, e.test(q))
    return q.slice(O, O = e.lastIndex);
}
var rr = / +(?=[^\s])/y;
function Ca(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, a = t.length - 1, o = 0; o < t.length; o++)
    rr.lastIndex = 0, rr.test(t[o]) && (o && (!n || rr.lastIndex < n) && (n = rr.lastIndex), i = i || o, a = o);
  for (var s = i; s <= a; s++)
    s !== i && (r += `
`), r += t[s].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function N() {
  for (var e = 0 | q.charCodeAt(O++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | q.charCodeAt(O++))
    if (e === 35)
      for (; (e = q.charCodeAt(O++)) !== 10 && e !== 13; )
        ;
  O--;
}
var bi = /[_A-Za-z]\w*/y;
function Ve() {
  var e;
  if (e = Se(bi))
    return {
      kind: "Name",
      value: e
    };
}
var _a = /(?:null|true|false)/y, vi = /\$[_A-Za-z]\w*/y, xa = /-?\d+/y, Ra = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Da = /\\/g, Fa = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, ja = /"(?:"|[^\r\n]*?[^\\]")/y;
function cr(e) {
  var t, r;
  if (r = Se(_a))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = Se(vi)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = Se(xa)) {
    var n = r;
    (r = Se(Ra)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = Se(bi))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = Se(Fa))
    t = {
      kind: "StringValue",
      value: Ca(r.slice(3, -3)),
      block: !0
    };
  else if (r = Se(ja))
    t = {
      kind: "StringValue",
      value: Da.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (q.charCodeAt(O) === 91) {
      O++, N();
      for (var s = []; o = cr(a); )
        s.push(o);
      if (q.charCodeAt(O++) !== 93)
        throw K("ListValue");
      return N(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (q.charCodeAt(O) === 123) {
      O++, N();
      for (var o = [], s; s = Ve(); ) {
        if (N(), q.charCodeAt(O++) !== 58)
          throw K("ObjectField");
        N();
        var l = cr(a);
        if (!l)
          throw K("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: l
        });
      }
      if (q.charCodeAt(O++) !== 125)
        throw K("ObjectValue");
      return N(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return N(), t;
}
function gi(e) {
  var t = [];
  if (N(), q.charCodeAt(O) === 40) {
    O++, N();
    for (var r; r = Ve(); ) {
      if (N(), q.charCodeAt(O++) !== 58)
        throw K("Argument");
      N();
      var n = cr(e);
      if (!n)
        throw K("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || q.charCodeAt(O++) !== 41)
      throw K("Argument");
    N();
  }
  return t;
}
function Et(e) {
  var t = [];
  for (N(); q.charCodeAt(O) === 64; ) {
    O++;
    var r = Ve();
    if (!r)
      throw K("Directive");
    N(), t.push({
      kind: "Directive",
      name: r,
      arguments: gi(e)
    });
  }
  return t;
}
function Ma() {
  var e = Ve();
  if (e) {
    N();
    var t;
    if (q.charCodeAt(O) === 58) {
      if (O++, N(), t = e, !(e = Ve()))
        throw K("Field");
      N();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: gi(!1),
      directives: Et(!1),
      selectionSet: br()
    };
  }
}
function Si() {
  var e;
  if (N(), q.charCodeAt(O) === 91) {
    O++, N();
    var t = Si();
    if (!t || q.charCodeAt(O++) !== 93)
      throw K("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = Ve())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw K("NamedType");
  return N(), q.charCodeAt(O) === 33 ? (O++, N(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var qa = /on/y;
function wi() {
  if (Se(qa)) {
    N();
    var e = Ve();
    if (!e)
      throw K("NamedType");
    return N(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Ba = /\.\.\./y;
function $a() {
  if (Se(Ba)) {
    N();
    var e = O, t;
    if ((t = Ve()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Et(!1)
      };
    O = e;
    var r = wi(), n = Et(!1), i = br();
    if (!i)
      throw K("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: i
    };
  }
}
function br() {
  var e;
  if (N(), q.charCodeAt(O) === 123) {
    O++, N();
    for (var t = []; e = $a() || Ma(); )
      t.push(e);
    if (!t.length || q.charCodeAt(O++) !== 125)
      throw K("SelectionSet");
    return N(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Va = /fragment/y;
function Ua() {
  if (Se(Va)) {
    N();
    var e = Ve();
    if (!e)
      throw K("FragmentDefinition");
    N();
    var t = wi();
    if (!t)
      throw K("FragmentDefinition");
    var r = Et(!1), n = br();
    if (!n)
      throw K("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var Ga = /(?:query|mutation|subscription)/y;
function La() {
  var e, t, r = [], n = [];
  (e = Se(Ga)) && (N(), t = Ve(), r = function() {
    var o, s = [];
    if (N(), q.charCodeAt(O) === 40) {
      for (O++, N(); o = Se(vi); ) {
        if (N(), q.charCodeAt(O++) !== 58)
          throw K("VariableDefinition");
        var l = Si(), d = void 0;
        if (q.charCodeAt(O) === 61 && (O++, N(), !(d = cr(!0))))
          throw K("VariableDefinition");
        N(), s.push({
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
          directives: Et(!0)
        });
      }
      if (q.charCodeAt(O++) !== 41)
        throw K("VariableDefinition");
      N();
    }
    return s;
  }(), n = Et(!1));
  var i = br();
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
function Wa(e, t) {
  return q = typeof e.body == "string" ? e.body : e, O = 0, function() {
    var n;
    N();
    for (var i = []; n = Ua() || La(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function za(e) {
  return JSON.stringify(e);
}
function Qa(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var ke = (e) => !(!e || !e.length), se = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !ke(e.variableDefinitions) && !ke(e.directives))
      return se.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), ke(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(se.VariableDefinition).join(", ") + ")"), ke(e.directives) && (t += " " + e.directives.map(se.Directive).join(" ")), t + " " + se.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = se.Variable(e.variable) + ": " + Oe(e.type);
    return e.defaultValue && (t += " = " + Oe(e.defaultValue)), ke(e.directives) && (t += " " + e.directives.map(se.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (ke(e.arguments)) {
      var r = e.arguments.map(se.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return ke(e.directives) && (t += " " + e.directives.map(se.Directive).join(" ")), e.selectionSet ? t + " " + se.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Qa(e.value) : za(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(Oe).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(se.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + Oe(e.value),
  Document: (e) => ke(e.definitions) ? e.definitions.map(Oe).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(Oe).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + Oe(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return ke(e.directives) && (t += " " + e.directives.map(se.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), ke(e.directives) && (t += " " + e.directives.map(se.Directive).join(" ")), t + " " + Oe(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, ke(e.directives) && (t += " " + e.directives.map(se.Directive).join(" ")), t + " " + Oe(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return ke(e.arguments) && (t += "(" + e.arguments.map(se.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + Oe(e.type) + "]",
  NonNullType: (e) => Oe(e.type) + "!"
};
function Oe(e) {
  return se[e.kind] ? se[e.kind](e) : "";
}
var Ka = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new Wt(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new Wt(e);
class Kt extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(Ka), n = ((i, a) => {
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
var Fr = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, ft = /* @__PURE__ */ new Set(), Bn = /* @__PURE__ */ new WeakMap(), wt = (e) => {
  if (e === null || ft.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return wt(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += wt(r) || "null";
    return t += "]";
  } else if (fr !== Pt && e instanceof fr || pr !== Pt && e instanceof pr)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = Bn.get(e) || Math.random().toString(36).slice(2);
    return Bn.set(e, i), wt({
      __key: i
    });
  }
  ft.add(e);
  var a = "{";
  for (var o of n) {
    var s = wt(e[o]);
    s && (a.length > 1 && (a += ","), a += wt(o) + ":" + s);
  }
  return ft.delete(e), a += "}";
}, jr = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || ft.has(r)))
    if (Array.isArray(r))
      for (var n = 0, i = r.length; n < i; n++)
        jr(e, `${t}.${n}`, r[n]);
    else if (r instanceof fr || r instanceof pr)
      e.set(t, r);
    else {
      ft.add(r);
      for (var a of Object.keys(r))
        jr(e, `${t}.${a}`, r[a]);
    }
}, dr = (e) => (ft.clear(), wt(e));
class Pt {
}
var fr = typeof File < "u" ? File : Pt, pr = typeof Blob < "u" ? Blob : Pt, Ja = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Ya = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, Ha = (e, t) => t % 2 == 0 ? e.replace(Ya, `
`) : e, $n = (e) => e.split(Ja).map(Ha).join("").trim(), Vn = /* @__PURE__ */ new Map(), or = /* @__PURE__ */ new Map(), nn = (e) => {
  var t;
  return typeof e == "string" ? t = $n(e) : e.loc && or.get(e.__key) === e ? t = e.loc.source.body : (t = Vn.get(e) || $n(Oe(e)), Vn.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Un = (e) => {
  var t = Fr(nn(e));
  if (e.definitions) {
    var r = Ai(e);
    r && (t = Fr(`
# ${r}`, t));
  }
  return t;
}, Ii = (e) => {
  var t, r;
  return typeof e == "string" ? (t = Un(e), r = or.get(t) || Wa(e)) : (t = e.__key || Un(e), r = or.get(t) || e), r.loc || nn(r), r.__key = t, or.set(t, r), r;
}, sr = (e, t, r) => {
  var n = t || {}, i = Ii(e), a = dr(n), o = i.__key;
  return a !== "{}" && (o = Fr(a, o)), {
    key: o,
    query: i,
    variables: n,
    extensions: r
  };
}, Ai = (e) => {
  for (var t of e.definitions)
    if (t.kind === At.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, Za = (e) => {
  for (var t of e.definitions)
    if (t.kind === At.OPERATION_DEFINITION)
      return t.operation;
}, Mr = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var n = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new Kt({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? n : t.hasNext,
    stale: !1
  };
}, qr = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = qr(e[r], t[r]);
    return e;
  }
  return t;
}, Br = (e, t, r) => {
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
          c[h + b] = qr(c[h + b], l.items[b]);
      else
        l.data !== void 0 && (c[d] = qr(c[d], l.data));
    }
  else
    s.data = t.data || e.data, n = t.errors || n;
  return {
    operation: e.operation,
    data: s.data,
    error: n.length ? new Kt({
      graphQLErrors: n,
      response: r
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, ki = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new Kt({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function Oi(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : nn(e.query),
    operationName: Ai(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var Xa = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var n = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && n.searchParams.set(i, typeof a == "object" ? dr(a) : a);
  }
  var o = n.toString();
  return o.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, eo = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = dr(t), n = ((s) => {
      var l = /* @__PURE__ */ new Map();
      return (fr !== Pt || pr !== Pt) && (ft.clear(), jr(l, "variables", s)), l;
    })(t.variables);
    if (n.size) {
      var i = new FormData();
      i.append("operations", r), i.append("map", dr({
        ...[...n.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of n.values())
        i.append("" + a++, o);
      return i;
    }
    return r;
  }
}, to = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (n.headers)
    for (var i in n.headers)
      r[i.toLowerCase()] = n.headers[i];
  var a = eo(e, t);
  return typeof a == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...n,
    method: a ? "POST" : "GET",
    body: a,
    headers: r
  };
}, ro = typeof TextDecoder < "u" ? new TextDecoder() : null, no = /boundary="?([^=";]+)"?/i, io = /data: ?([^\n]+)/, Gn = (e) => e.constructor.name === "Buffer" ? e.toString() : ro.decode(e);
async function* Ln(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield Gn(t);
  else {
    var r = e.body.getReader(), n;
    try {
      for (; !(n = await r.read()).done; )
        yield Gn(n.value);
    } finally {
      r.cancel();
    }
  }
}
async function* Wn(e, t) {
  var r = "", n;
  for await (var i of e)
    for (r += i; (n = r.indexOf(t)) > -1; )
      yield r.slice(0, n), r = r.slice(n + t.length);
}
async function* ao(e, t, r) {
  var n = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (c, f) {
        var y = c.match(no), h = "--" + (y ? y[1] : "-"), b = !0, w;
        for await (var C of Wn(Ln(f), `\r
` + h)) {
          if (b) {
            b = !1;
            var j = C.indexOf(h);
            if (j > -1)
              C = C.slice(j + h.length);
            else
              continue;
          }
          try {
            yield w = JSON.parse(C.slice(C.indexOf(`\r
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
        for await (var y of Wn(Ln(c), `

`)) {
          var h = y.match(io);
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
      i = i ? Br(i, l, a) : Mr(e, l, a), n = !1, yield i, n = !0;
    i || (yield i = Mr(e, {}, a));
  } catch (d) {
    if (!n)
      throw d;
    yield ki(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : d, a);
  }
}
function oo(e, t, r) {
  var n;
  return typeof AbortController < "u" && (r.signal = (n = new AbortController()).signal), Zr(() => {
    n && n.abort();
  })(H((i) => !!i)(hi(ao(e, t, r))));
}
var $r = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      $r(r, t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : $r(e[n], t);
  return t;
}, Vr = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var n of e.definitions) {
      var i = Vr(n);
      t = t || i !== n, r.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === At.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === At.FIELD && s.name.value === "__typename" && !s.alias;
        var l = Vr(s);
        t = t || l !== s, a.push(l);
      }
      if (o || (t = !0, a.push({
        kind: At.FIELD,
        name: {
          kind: At.NAME,
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
}, zn = /* @__PURE__ */ new Map(), so = (e) => {
  var t = Ii(e), r = zn.get(t.__key);
  return r || (zn.set(t.__key, r = Vr(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, Ur = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => Ur(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var n in e)
      n === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[n] = Ur(e[n]);
    return r;
  } else
    return e;
};
function Qn(e) {
  var t = (r) => e(r);
  return t.toPromise = () => tn(hr(1)(H((r) => !r.stale && !r.hasNext)(t))), t.then = (r, n) => t.toPromise().then(r, n), t.subscribe = (r) => pt(r)(t), t;
}
function Tt(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var Kn = (e, t) => Tt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), uo = () => {
}, Pr = ({ kind: e }) => e !== "mutation" && e !== "query", lo = ({ forward: e, client: t, dispatchDebug: r }) => {
  var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (s) => {
    var l = Tt(s.kind, s);
    return l.query = so(s.query), l;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || n.has(s.key));
  return (s) => {
    var l = kt((c) => {
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
        operation: process.env.NODE_ENV !== "production" ? Kn(c, {
          cacheOutcome: f ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (y.stale = !0, Jn(t, c)), y;
    })(H((c) => !Pr(c) && o(c))(s)), d = Nt((c) => {
      var { operation: f } = c;
      if (f) {
        var y = f.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (y = ((g) => [...$r(g, /* @__PURE__ */ new Set())])(c.data).concat(y)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
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
            var w = y[b], C = i.get(w);
            C || i.set(w, C = /* @__PURE__ */ new Set());
            for (var j of C.values())
              h.add(j);
            C.clear();
          }
          for (var S of h.values())
            n.has(S) && (f = n.get(S).operation, n.delete(S), Jn(t, f));
        } else if (f.kind === "query" && c.data) {
          n.set(f.key, c);
          for (var $ = 0; $ < y.length; $++) {
            var m = y[$], A = i.get(m);
            A || i.set(m, A = /* @__PURE__ */ new Set()), A.add(f.key);
          }
        }
      }
    })(e(H((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(kt((c) => process.env.NODE_ENV !== "production" ? Kn(c, {
      cacheOutcome: "miss"
    }) : c)(Ot([kt(a)(H((c) => !Pr(c) && !o(c))(s)), H((c) => Pr(c))(s)])))));
    return Ot([l, d]);
  };
}, Jn = (e, t) => e.reexecuteOperation(Tt(t.kind, t, {
  requestPolicy: "network-only"
})), Tr = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: n, forward: i }) => {
  var a = r || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = Gt((d) => {
      var { key: c } = d, f = H((y) => y.kind === "teardown" && y.key === c)(o);
      return Xr(f)(((y) => {
        var h = e(Oi(y), y);
        return en(({ next: b, complete: w }) => {
          var C = !1, j, S;
          return Promise.resolve().then(() => {
            C || (j = h.subscribe({
              next($) {
                b(S = S ? Br(S, $) : Mr(y, $));
              },
              error($) {
                b(ki(y, $));
              },
              complete() {
                C || (C = !0, y.kind === "subscription" && n.reexecuteOperation(Tt("teardown", y, y.context)), S && S.hasNext && b(Br(S, {
                  hasNext: !1
                })), w());
              }
            }));
          }), () => {
            C = !0, j && j.unsubscribe();
          };
        });
      })(d));
    })(H((d) => d.kind !== "teardown" && a(d))(o)), l = i(H((d) => d.kind === "teardown" || !a(d))(o));
    return Ot([s, l]);
  };
}, co = ({ forward: e, dispatchDebug: t }) => (r) => {
  var n = Gt((a) => {
    var o = Oi(a), s = Xa(a, o), l = to(a, o);
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
    var d = Xr(H((c) => c.kind === "teardown" && c.key === a.key)(r))(oo(a, s, l));
    return process.env.NODE_ENV !== "production" ? Nt((c) => {
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
  })(H((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(r)), i = e(H((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(r));
  return Ot([n, i]);
}, fo = (e) => ({ client: t, forward: r, dispatchDebug: n }) => e.reduceRight((i, a) => {
  var o = !1;
  return a({
    client: t,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return Lt(i(Lt(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && n({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, r), Ni = ({ onOperation: e, onResult: t, onError: r }) => ({ forward: n }) => (i) => Gt((a) => {
  r && a.error && r(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? qn(o) : Bt(o);
})(n(Gt((a) => {
  var o = e && e(a) || a;
  return "then" in o ? qn(o) : Bt(o);
})(i))), po = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = Nt((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var n = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: n,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(n);
  }
})(t)), H((r) => !1)(t)), Yn = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = Mn();
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
    var A = Xr(H((g) => g.kind === "teardown" && g.key === m.key)(l.source))(H((g) => g.operation.kind === m.kind && g.operation.key === m.key && (!g.operation.context._instance || g.operation.context._instance === m.context._instance))($));
    return m.kind !== "query" ? A = mi((g) => !!g.hasNext, !0)(A) : A = jn((g) => {
      var V = Bt(g);
      return g.stale || g.hasNext ? V : Ot([V, kt(() => (g.stale = !0, g))(hr(1)(H((Qe) => Qe.key === m.key)(l.source)))]);
    })(A), m.kind !== "mutation" ? A = Zr(() => {
      a.delete(m.key), n.delete(m.key), i.delete(m.key), c = !1;
      for (var g = o.length - 1; g >= 0; g--)
        o[g].key === m.key && o.splice(g, 1);
      d(Tt("teardown", m, m.context));
    })(Nt((g) => {
      if (g.stale) {
        for (var V of o)
          if (V.key === g.operation.key) {
            a.delete(V.key);
            break;
          }
      } else
        g.hasNext || a.delete(m.key);
      n.set(m.key, g);
    })(A)) : A = Fn(() => {
      d(m);
    })(A), t.maskTypename && (A = kt((g) => ({
      ...g,
      data: Ur(g.data, !0)
    }))(A)), Lt(A);
  }, h = this instanceof e ? this : Object.create(e.prototype), b = Object.assign(h, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(m) {
      m.kind === "teardown" ? f(m) : (m.kind === "mutation" || i.has(m.key)) && (o.push(m), Promise.resolve().then(f));
    },
    createRequestOperation(m, A, g) {
      g || (g = {});
      var V;
      if (process.env.NODE_ENV !== "production" && m !== "teardown" && (V = Za(A.query)) !== m)
        throw new Error(`Expected operation of type "${m}" but found "${V}"`);
      return Tt(m, A, {
        _instance: m === "mutation" ? r = r + 1 | 0 : void 0,
        ...s,
        ...g,
        requestPolicy: g.requestPolicy || s.requestPolicy,
        suspense: g.suspense || g.suspense !== !1 && b.suspense
      });
    },
    executeRequestOperation(m) {
      return m.kind === "mutation" ? Qn(y(m)) : Qn(Oa(() => {
        var A = i.get(m.key);
        A || i.set(m.key, A = y(m)), A = Fn(() => {
          f(m);
        })(A);
        var g = n.get(m.key);
        return m.kind === "query" && g && (g.stale || g.hasNext) ? jn(Bt)(Ot([A, H((V) => V === n.get(m.key))(Bt(g))])) : A;
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
      var V = null;
      return pt((Qe) => {
        V = Qe;
      })(b.query(m, A, g)).unsubscribe(), V;
    },
    query: (m, A, g) => b.executeQuery(sr(m, A), g),
    subscription: (m, A, g) => b.executeSubscription(sr(m, A), g),
    mutation: (m, A, g) => b.executeMutation(sr(m, A), g)
  }), w = uo;
  if (process.env.NODE_ENV !== "production") {
    var { next: C, source: j } = Mn();
    b.subscribeToDebugTarget = (m) => pt(m)(j), w = C;
  }
  var S = fo(t.exchanges), $ = Lt(S({
    client: b,
    dispatchDebug: w,
    forward: po({
      dispatchDebug: w
    })
  })(l.source));
  return Pa($), b;
};
const Gr = (e) => Object.entries(e).flatMap(([t, r]) => {
  if (typeof r == "boolean")
    return r ? t : !1;
  if (r instanceof an) {
    let n = "";
    const i = Object.entries(r.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof on ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return i.length > 0 && (n = `(${i.join(", ")})`), r.subselection ? [`${t}${n} {`, ...Gr(r.subselection), "}"] : `${t}${n}`;
  } else
    return [`${t} {`, ...Gr(r), "}"];
}).filter((t) => !!t).map((t) => "  " + t), yr = (e) => {
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
    i instanceof an ? (Object.entries(i.args).forEach(([a, o]) => {
      var s;
      o instanceof on && (t[(s = o.name) !== null && s !== void 0 ? s : r(a)] = o);
    }), i.subselection && Object.assign(t, yr(i.subselection))) : typeof i == "object" && i !== null && Object.assign(t, yr(i));
  }), t;
}, yo = (e) => {
  const t = yr(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([n, i]) => `$${n}: ${i.type}`).join(", ")})`;
};
class an {
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
class on {
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
const de = (e, t) => new an(e, t), R = (e) => new on(e.type + (e.required ? "!" : ""), e.name, e.value), mo = (e) => {
  var t;
  const r = yo(e), n = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${r}${n} {
${Gr(e.fields).join(`
`)}
}`;
}, be = (e) => {
  const t = yr(e.fields);
  return {
    query: mo(e),
    variables: Object.entries(t ?? {}).reduce((r, [n, i]) => (typeof i.value < "u" && (r[n] = i.value), r), {})
  };
}, ho = {
  DateTime(e) {
    return new Date(e);
  }
};
class bo {
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
      a != null && (r[n] = ho[i](a));
    }
    return r;
  }
}
function me(e) {
  if (typeof e != "object")
    return e;
  var t, r, n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = me(e[t]));
    } else {
      r = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(r, t, {
          value: me(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[t] = me(e[t]);
    }
    return r;
  }
  if (n === "[object Array]") {
    for (t = e.length, r = Array(t); t--; )
      r[t] = me(e[t]);
    return r;
  }
  return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    r.add(me(i));
  }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    r.set(me(a), me(i));
  }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(me(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var Ei, Pi, Ti, Ci, _i, le;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(le || (le = {}));
const te = Symbol.for("g/f"), Xe = Symbol.for("g/if"), et = Symbol.for("g/pf"), tt = Symbol.for("g/fk"), Mt = Symbol.for("g/t");
class vo {
  constructor(t) {
    var r, n;
    Object.defineProperty(this, Ei, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, Pi, {
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
      value: void 0
    }), Object.defineProperty(this, _i, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "empty", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), this[Xe] = (r = me(t)) !== null && r !== void 0 ? r : {}, this[et] = (n = me(t)) !== null && n !== void 0 ? n : {}, Object.assign(this[te], t), !t || Object.keys(t).length === 0 ? (this.empty = !0, this[tt] = /* @__PURE__ */ new Set()) : this[tt] = new Set(Object.keys(this[te]));
    const i = this, a = {
      get: (o, s) => {
        if (s in i)
          return i[s];
        if (s in o)
          return o[s];
      },
      set: (o, s, l) => (i.trackKey(s), o[s.toString()] = l, !0)
    };
    return new Proxy(this[te], a);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const r = t.toString();
    this[tt].add(r);
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = le.SinceLoaded) {
    if (this[Mt])
      return !0;
    const r = t == le.SinceLoaded ? this[Xe] : this[et];
    return [...this[tt]].some((n) => !nr(r[n], this[te][n]));
  }
  /** Checks if the original constructor data was empty or not */
  isEmpty() {
    return this.empty;
  }
  /** Returns the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  getField(t) {
    return this[te][t];
  }
  /** Sets the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  setField(t, r) {
    return this.trackKey(t), this[te][t] = r;
  }
  changes(t, r = le.SinceLoaded) {
    const i = (typeof t == "string" ? r : t || r) == le.SinceLoaded ? this[Xe] : this[et];
    if (t && typeof t == "string") {
      const a = i[t], o = this[te][t], s = !nr(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (const o of this[tt])
        nr(i[o], this[te][o]) || (a[o] = { current: this[te][o], previous: i[o] });
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = le.SinceLoaded) {
    const r = t == le.SinceLoaded ? this[Xe] : this[et], n = {};
    for (const i of this[tt])
      nr(r[i], this[te][i]) || (n[i] = this[te][i]);
    return n;
  }
  changed(t, r = le.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = le.SinceLoaded) {
    t == le.SinceLoaded ? this[Xe] = me(this[te]) : t == le.SinceLastPersisted && (this[et] = me(this[te])), this[Mt] = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = le.SinceLoaded) {
    let r;
    t == le.SinceLoaded ? r = Object.keys(this[Xe]) : r = Object.keys(this[et]);
    for (const n of this[tt])
      r.includes(n) || delete this[te][n];
    t == le.SinceLoaded ? Object.assign(this[te], me(this[Xe])) : Object.assign(this[te], me(this[et])), this[Mt] = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Kr({ ...this[te] });
  }
  /** Marks this record as changed so that the next save will save it and adjust any `updatedAt` timestamps */
  touch() {
    this[Mt] = !0;
  }
}
Ei = te, Pi = Xe, Ti = et, Ci = tt, _i = Mt;
const xi = vo;
class Ri extends Error {
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
class Lr extends Error {
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
class vr extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class Hn extends Error {
  constructor(t) {
    let r;
    zr(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class go extends Error {
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
class So extends Error {
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
class wo extends Error {
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
class Di extends Error {
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
class sn extends Error {
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
class Io extends Error {
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
function Wr(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const Ct = (e, t) => {
  const r = t.length;
  let n = 0;
  for (; e != null && n < r; )
    e = e[t[n++]];
  return n && n == r ? e : void 0;
}, zr = (e) => (e == null ? void 0 : e.type) == "close", Ce = (e, t) => typeof e != "string" ? "" : Jt(e, t), Zn = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Jt = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (n) => Zn(n)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, i, a, o, s) => (i || (i = ""), "" + i + Zn(a))), r;
}, un = (e, t) => [...Array.isArray(t) ? t : t ? [t] : [], e].map((i) => Jt(i)).join(""), Fi = (e, t) => `${un(e, t)}Sort`, ln = (e, t) => `${un(e, t)}Filter`, Ao = (e, t, r) => new Di(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), ko = (e, t) => {
  if (e.fetching)
    return;
  const r = Ct(e.data, t);
  if (r === void 0)
    return new Ri(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null)
    return new sn(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, $e = (e, t, r = !1) => {
  var n;
  if (e.error)
    throw e.error instanceof Kt && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const i = Ct(e.data, t), a = Ct(i, ["edges"]), o = a ?? i;
  if (i === void 0)
    throw new Ri(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || r && Array.isArray(o) && o.length === 0)
    throw new sn(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, $t = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof Kt && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const n = Ct(e.data, t);
  return n ?? null;
}, cn = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new wo(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Di(e.message) : new vr(e.message, e.code);
}, rt = (e, t) => {
  const r = $e(e, t);
  return ji(r);
}, ji = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? cn(t) : new vr("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, Mi = (e) => {
  var t, r, n, i;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new bo((i = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, Vt = (e, t) => {
  const r = Mi(e);
  return r && (t = r.apply(t)), new xi(t);
}, dn = (e, t) => {
  const r = Mi(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((n) => new xi(n));
}, zt = (e, t) => {
  const r = t.edges.map((n) => n.node);
  return dn(e, r);
}, Qr = "[object Object]", Xn = "[object String]", Kr = (e) => {
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
          t[r] = n === void 0 ? null : Kr(n);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === Qr) {
        const t = {};
        for (const r of Object.keys(e)) {
          const n = Kr(e[r]);
          n !== void 0 && (t[r] = n);
        }
        return t;
      }
    }
  }
}, Cr = "gstk", ei = (e) => {
  try {
    const t = window[e];
    return t.setItem(Cr, Cr), t.removeItem(Cr), !0;
  } catch {
    return !1;
  }
}, ti = Object.prototype.toString, ri = Object.getPrototypeOf, ni = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, qt = (e, t, r) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (r.indexOf(e) > -1 && r.indexOf(t) > -1)
    return !0;
  const n = ti.call(e), i = ti.call(t);
  let a, o, s;
  if (r.push(e, t), n == Qr && i == Xn && "_link" in e && Object.keys(e).length == 1)
    return e._link === t;
  if (i == Qr && n == Xn && "_link" in t && Object.keys(t).length == 1)
    return t._link === e;
  if (n != i || (a = ni(e), o = ni(t), a.length != o.length || a.some(function(l) {
    return !qt(e[l], t[l], r);
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
        if (s = a.next(), !qt(s.value, o.next().value, r))
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
        if (!(!(s in e) && !(s in t)) && (s in e != s in t || !qt(e[s], t[s], r)))
          return !1;
      return !0;
    case "Object":
      return qt(ri(e), ri(t), r);
    default:
      return !1;
  }
}, nr = (e, t) => qt(e, t, []), qi = (e, t) => {
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
}, Oo = (e, t = {}) => {
  var r;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((r = Array.isArray(t) ? t : t.inputs) !== null && r !== void 0 ? r : []).map((i) => qi(e, i))
  };
}, No = (e, t) => {
  const r = {};
  for (const [n, i] of Object.entries(e))
    r[n] = { ...i, value: t[n] };
  return r;
}, nt = (e, t) => (t && e.unshift(...Array.isArray(t) ? t : [t]), e), ze = (e, t) => {
  const r = t ? [...Array.isArray(t) ? t : [t], e].join(".") : e;
  return {
    gadgetMeta: {
      hydrations: de({ modelName: r })
    }
  };
};
function we(e, t) {
  if (!e)
    return t;
  if (Array.isArray(e) || (e = [e]), e)
    for (let r = e.length - 1; r >= 0; r--)
      t = {
        [e[r]]: t
      };
  return t;
}
const yt = {
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
class _t extends Array {
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
    const i = new _t();
    return i.push(...r), i.modelManager = t, i.pagination = n, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new vr("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new Lr("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new Lr("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: n, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: n || r
    });
  }
}
const fn = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, gr = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, Eo = (e, t, r, n, i, a) => {
  const o = {};
  typeof t < "u" && (o.id = R({ type: "GadgetID!", value: t }));
  let s = {
    [e]: de(o, fn((i == null ? void 0 : i.select) || r, !0))
  };
  return s = we(a, s), be({
    type: "query",
    name: e,
    fields: {
      ...s,
      ...ze(n, a)
    },
    directives: gr(i)
  });
}, Po = (e, t, r, n, i, a, o) => pn(e, n, i, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}, o), pn = (e, t, r, n, i) => {
  let a = {
    [e]: de({
      after: R({ value: n == null ? void 0 : n.after, type: "String" }),
      first: R({ value: n == null ? void 0 : n.first, type: "Int" }),
      before: R({ value: n == null ? void 0 : n.before, type: "String" }),
      last: R({ value: n == null ? void 0 : n.last, type: "Int" }),
      sort: n != null && n.sort ? R({ value: n.sort, type: `[${Fi(r, i)}!]` }) : void 0,
      filter: n != null && n.filter ? R({ value: n.filter, type: `[${ln(r, i)}!]` }) : void 0,
      search: n != null && n.search ? R({ value: n.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: fn((n == null ? void 0 : n.select) || t, !0)
      }
    })
  };
  return i && (a = we(i, a)), be({
    type: "query",
    name: e,
    fields: {
      ...a,
      ...ze(r, i)
    },
    directives: gr(n)
  });
}, yn = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, R(r)])), Bi = (e, t, r) => ({
  success: !0,
  ...yt,
  [e]: t && !r ? fn(t, !0) : !1,
  result: !!r
}), To = (e, t, r, n, i, a, o, s, l) => {
  const d = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: de(yn(i), Bi(n, d, l))
  };
  c = we(o, c);
  const f = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...ze(r, o)
    },
    directives: gr(a)
  };
  return be(f);
}, Co = (e, t, r) => {
  let n = {}, i = t.operationName, a;
  switch (t.isBulk && (i = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), t.operationReturnType ? a = `${t.operationReturnType}Result` : a = `${Jt(i)}Result`, t.type) {
    case "action": {
      const s = (r == null ? void 0 : r.select) || t.defaultSelection;
      n = {
        [`... on ${a}`]: Bi(t.modelApiIdentifier, s, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      n = {
        [`... on ${a}`]: $i()
      };
  }
  const o = {
    type: "subscription",
    name: Ce(i) + "BackgroundResult",
    fields: {
      backgroundAction: de({ id: R({ value: e, type: "String!" }) }, {
        id: !0,
        outcome: !0,
        result: {
          ...n
        }
      })
    }
  };
  return be(o);
}, $i = () => ({
  success: !0,
  ...yt,
  result: !0
}), _o = (e, t, r, n) => {
  let i = {
    [e]: de(yn(t), $i())
  };
  return i = we(r, i), be({
    type: "mutation",
    name: e,
    fields: i,
    directives: gr(n)
  });
}, xo = (e) => {
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
}, Ro = (e, t, r, n, i) => {
  let a = {
    [e]: de({
      ...yn(t),
      backgroundOptions: R({
        type: "EnqueueBackgroundActionOptions",
        value: xo(n)
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
  return a = we(r, a), be({
    type: "mutation",
    name: "enqueue" + Jt(e),
    fields: {
      background: a
    }
  });
}, Do = (e, t) => ({
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
function mn(e, t, r) {
  return r != null && r.live ? Do(Ta(e), t) : rn(e, H((i) => !i.stale && !i.hasNext), hr(1), tn).then((i) => t(i));
}
const ii = (e, t, r, n, i, a, o = !0, s) => {
  const l = Eo(t, r, n, i, a, s), d = e.connection.currentClient.query(l.query, l.variables);
  return mn(d, (c) => {
    const f = o ? $e : $t, y = nt([t], s), h = f(c, y);
    return Vt(c, h);
  }, a);
}, Fo = (e, t, r, n, i, a, o, s = !0, l) => {
  const d = Po(t, r, n, i, a, o), c = nt([t], l), f = e.connection.currentClient.query(d.query, d.variables);
  return mn(f, (y) => {
    const h = $e(y, c), b = zt(y, h);
    if (b.length > 1)
      throw Ao(a, r, n);
    const w = b[0];
    if (!w && s)
      throw new sn(`${a} record with ${r}=${n} not found`);
    return w ?? null;
  }, o);
}, ai = (e, t, r, n, i, a, o) => {
  const s = pn(t, r, n, i, o), l = e.connection.currentClient.query(s.query, s.variables), d = nt([t], o);
  return mn(l, (c) => {
    let f;
    a === !1 ? f = $t(c, d) : f = $e(c, d, a);
    const y = zt(c, f);
    return _t.boot(e, y, { options: i, pageInfo: f.pageInfo });
  }, i);
}, oi = async (e, t, r, n, i, a, o, s, l, d) => {
  const c = To(t, r, n, i, o, s, l, a, d), f = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), y = nt([t], l);
  if (a) {
    const h = Ct(f.data, y), b = h[i] && r ? dn(f, h[i]) : void 0;
    if (h.errors) {
      const w = h.errors.map((C) => cn(C));
      throw new Io(w, b);
    }
    return b;
  } else {
    const h = rt(f, y);
    return Vi(r, f, h, i, d);
  }
}, Vi = (e, t, r, n, i) => {
  if (e != null)
    return i ? r.result : Vt(t, r[n]);
}, si = async (e, t, r, n) => {
  const i = _o(t, r, n), a = await e.currentClient.mutation(i.query, i.variables).toPromise(), o = nt([t], n);
  return rt(a, o).result;
};
async function jo(e, t, r, n = {}) {
  const i = t.isBulk ? Oo(t, r) : qi(t, r), a = No(t.variables, i), o = Ro(t.operationName, a, t.namespace, n, t.isBulk), s = await e.currentClient.mutation(o.query, o.variables, n).toPromise(), l = ["background", ...nt([t.operationName], t.namespace)];
  try {
    const d = rt(s, l);
    return t.isBulk ? d.backgroundActions.map((c) => new ur(e, t, c.id)) : new ur(e, t, d.backgroundAction.id);
  } catch (d) {
    if ("code" in d && d.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (n != null && n.id) && n.onDuplicateID == "ignore")
      return new ur(e, t, n.id);
    throw d;
  }
}
const Mo = async (e, t, r, n) => {
  const i = Co(t, r, n), a = e.currentClient.subscription(i.query, i.variables), o = await rn(a, H((l) => {
    var d, c;
    return l.error || ((c = (d = l.data) === null || d === void 0 ? void 0 : d.backgroundAction) === null || c === void 0 ? void 0 : c.outcome);
  }), hr(1), tn), s = $e(o, ["backgroundAction"]);
  switch (ji(s.result), r.type) {
    case "action": {
      s.result = Vi(r.defaultSelection, o.data, s.result, r.isBulk ? r.modelApiIdentifier : r.modelSelectionField, r.hasReturnType);
      break;
    }
    case "globalAction": {
      s.result = s.result.result;
      break;
    }
  }
  return s;
};
class ur {
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
    return (await Mo(this.connection, this.id, this.action, t)).result;
  }
}
var Ut;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(Ut || (Ut = {}));
function ye(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function ct(e) {
  return ye(e) === "object";
}
function qo(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function ui(e, t) {
  return e.length < 124 ? e : t;
}
const Bo = "graphql-transport-ws";
var ce;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(ce || (ce = {}));
var z;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(z || (z = {}));
function Ui(e) {
  if (!ct(e))
    throw new Error(`Message is expected to be an object, but got ${ye(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${ye(e.type)}`);
  switch (e.type) {
    case z.ConnectionInit:
    case z.ConnectionAck:
    case z.Ping:
    case z.Pong: {
      if (e.payload != null && !ct(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case z.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ye(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ct(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ye(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${ye(e.payload.query)}`);
      if (e.payload.variables != null && !ct(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${ye(e.payload.variables)}`);
      if (e.payload.operationName != null && ye(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${ye(e.payload.operationName)}`);
      if (e.payload.extensions != null && !ct(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${ye(e.payload.extensions)}`);
      break;
    }
    case z.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ye(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ct(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ye(e.payload)}`);
      break;
    }
    case z.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ye(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!qo(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case z.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ye(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function $o(e, t) {
  return Ui(typeof e == "string" ? JSON.parse(e, t) : e);
}
function jt(e, t) {
  return Ui(e), JSON.stringify(e, t);
}
function Vo(e) {
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
    retryWait: c = async function(M) {
      let D = 1e3;
      for (let P = 0; P < M; P++)
        D *= 2;
      await new Promise((P) => setTimeout(P, D + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: f = ir,
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
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (M) => {
        const D = Math.random() * 16 | 0;
        return (M == "x" ? D : D & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: C,
    jsonMessageReviver: j
  } = e;
  let S;
  if (b) {
    if (!Go(b))
      throw new Error("Invalid WebSocket implementation provided");
    S = b;
  } else
    typeof WebSocket < "u" ? S = WebSocket : typeof global < "u" ? S = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (S = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!S)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const $ = S, m = (() => {
    const k = (() => {
      const D = {};
      return {
        on(P, B) {
          return D[P] = B, () => {
            delete D[P];
          };
        },
        emit(P) {
          var B;
          "id" in P && ((B = D[P.id]) === null || B === void 0 || B.call(D, P));
        }
      };
    })(), M = {
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
      on(D, P) {
        const B = M[D];
        return B.push(P), () => {
          B.splice(B.indexOf(P), 1);
        };
      },
      emit(D, ...P) {
        for (const B of [...M[D]])
          B(...P);
      }
    };
  })();
  function A(k) {
    const M = [
      // errors are fatal and more critical than close events, throw them first
      m.on("error", (D) => {
        M.forEach((P) => P()), k(D);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      m.on("closed", (D) => {
        M.forEach((P) => P()), k(D);
      })
    ];
  }
  let g, V = 0, Qe, mt = !1, ht = 0, Yt = !1;
  async function xt() {
    clearTimeout(Qe);
    const [k, M] = await (g ?? (g = new Promise((B, xe) => (async () => {
      if (mt) {
        if (await c(ht), !V)
          return g = void 0, xe({ code: 1e3, reason: "All Subscriptions Gone" });
        ht++;
      }
      m.emit("connecting");
      const x = new $(typeof t == "function" ? await t() : t, Bo);
      let Ue, Ke;
      function it() {
        isFinite(o) && o > 0 && (clearTimeout(Ke), Ke = setTimeout(() => {
          x.readyState === $.OPEN && (x.send(jt({ type: z.Ping })), m.emit("ping", !1, void 0));
        }, o));
      }
      A((J) => {
        g = void 0, clearTimeout(Ue), clearTimeout(Ke), xe(J), ir(J) && J.code === 4499 && (x.close(4499, "Terminated"), x.onerror = null, x.onclose = null);
      }), x.onerror = (J) => m.emit("error", J), x.onclose = (J) => m.emit("closed", J), x.onopen = async () => {
        try {
          m.emit("opened", x);
          const J = typeof r == "function" ? await r() : r;
          if (x.readyState !== $.OPEN)
            return;
          x.send(jt(J ? {
            type: z.ConnectionInit,
            payload: J
          } : {
            type: z.ConnectionInit
            // payload is completely absent if not provided
          }, C)), isFinite(l) && l > 0 && (Ue = setTimeout(() => {
            x.close(ce.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), it();
        } catch (J) {
          m.emit("error", J), x.close(ce.InternalClientError, ui(J instanceof Error ? J.message : new Error(J).message, "Internal client error"));
        }
      };
      let Je = !1;
      x.onmessage = ({ data: J }) => {
        try {
          const G = $o(J, j);
          if (m.emit("message", G), G.type === "ping" || G.type === "pong") {
            m.emit(G.type, !0, G.payload), G.type === "pong" ? it() : s || (x.send(jt(G.payload ? {
              type: z.Pong,
              payload: G.payload
            } : {
              type: z.Pong
              // payload is completely absent if not provided
            })), m.emit("pong", !1, G.payload));
            return;
          }
          if (Je)
            return;
          if (G.type !== z.ConnectionAck)
            throw new Error(`First message cannot be of type ${G.type}`);
          clearTimeout(Ue), Je = !0, m.emit("connected", x, G.payload), mt = !1, ht = 0, B([
            x,
            new Promise((Ht, bt) => A(bt))
          ]);
        } catch (G) {
          x.onmessage = null, m.emit("error", G), x.close(ce.BadResponse, ui(G instanceof Error ? G.message : new Error(G).message, "Bad response"));
        }
      };
    })())));
    k.readyState === $.CLOSING && await M;
    let D = () => {
    };
    const P = new Promise((B) => D = B);
    return [
      k,
      D,
      Promise.race([
        // wait for
        P.then(() => {
          if (!V) {
            const B = () => k.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? Qe = setTimeout(() => {
              k.readyState === $.OPEN && B();
            }, a) : B();
          }
        }),
        // or
        M
      ])
    ];
  }
  function Ie(k) {
    if (ir(k) && (Uo(k.code) || [
      ce.InternalServerError,
      ce.InternalClientError,
      ce.BadRequest,
      ce.BadResponse,
      ce.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      ce.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      ce.SubscriberAlreadyExists,
      ce.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(k.code)))
      throw k;
    if (Yt)
      return !1;
    if (ir(k) && k.code === 1e3)
      return V > 0;
    if (!d || ht >= d || !f(k) || y != null && y(k))
      throw k;
    return mt = !0;
  }
  return n || (async () => {
    for (V++; ; )
      try {
        const [, , k] = await xt();
        await k;
      } catch (k) {
        try {
          if (!Ie(k))
            return;
        } catch (M) {
          return i == null ? void 0 : i(M);
        }
      }
  })(), {
    on: m.on,
    subscribe(k, M) {
      const D = w(k);
      let P = !1, B = !1, xe = () => {
        V--, P = !0;
      };
      return (async () => {
        for (V++; ; )
          try {
            const [x, Ue, Ke] = await xt();
            if (P)
              return Ue();
            const it = m.onMessage(D, (Je) => {
              switch (Je.type) {
                case z.Next: {
                  M.next(Je.payload);
                  return;
                }
                case z.Error: {
                  B = !0, P = !0, M.error(Je.payload), xe();
                  return;
                }
                case z.Complete: {
                  P = !0, xe();
                  return;
                }
              }
            });
            x.send(jt({
              id: D,
              type: z.Subscribe,
              payload: k
            }, C)), xe = () => {
              !P && x.readyState === $.OPEN && x.send(jt({
                id: D,
                type: z.Complete
              }, C)), V--, P = !0, Ue();
            }, await Ke.finally(it);
            return;
          } catch (x) {
            if (!Ie(x))
              return;
          }
      })().then(() => {
        B || M.complete();
      }).catch((x) => {
        M.error(x);
      }), () => {
        P || xe();
      };
    },
    async dispose() {
      if (Yt = !0, g) {
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
function ir(e) {
  return ct(e) && "code" in e && "reason" in e;
}
function Uo(e) {
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
function Go(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var It = null;
typeof WebSocket < "u" ? It = WebSocket : typeof MozWebSocket < "u" ? It = MozWebSocket : typeof global < "u" ? It = global.WebSocket || global.MozWebSocket : typeof window < "u" ? It = window.WebSocket || window.MozWebSocket : typeof self < "u" && (It = self.WebSocket || self.MozWebSocket);
const Lo = It;
class Gi extends Error {
}
class Wo {
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
    throw $e(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Gi("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    $e(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    $e(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class zo {
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
const Qo = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
}, li = Ni({
  onOperation: (e) => {
    var t, r;
    (t = (r = e.context).operationName) !== null && t !== void 0 || (r.operationName = Qo(e.query) || "unknown");
  }
}), Ko = Ni({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, r] = e.context.url.split("?"), n = new URLSearchParams(r);
        n.set("operation", e.context.operationName), e.context.url = `${t}?${n.toString()}`;
      } catch {
      }
  }
});
var Jr;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(Jr || (Jr = {}));
const Jo = 2, Yo = 4800, Ho = 1e4, Zo = [ce.ConnectionAcknowledgementTimeout, ce.ConnectionInitialisationTimeout], ci = Symbol.for("gadget/connection"), Xo = "token", es = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var Y;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(Y || (Y = {}));
const ar = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class Li {
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
      value: Y.Anonymous
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
            connectionAckWaitTimeout: Yo,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const h = new Yn({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              li,
              ...this.exchanges.beforeAsync,
              Tr({
                forwardSubscription(w) {
                  const C = { ...w, query: w.query || "" };
                  return {
                    subscribe: (j) => ({
                      unsubscribe: f.subscribe(C, j)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          h[ci] = this, y = new Wo(h, f), this.currentTransaction = y, await y.start();
          const b = await d(y);
          return await y.commit(), b;
        } catch (h) {
          try {
            y != null && y.open && await y.rollback();
          } catch (b) {
            b instanceof Gi || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", b);
          }
          throw zr(h) ? new Hn(h) : h;
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
        s = ts(s, (d = this.options.baseRouteURL) !== null && d !== void 0 ? d : this.options.endpoint), this.isGadgetRequest(s) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == Y.Custom && await this.options.authenticationMode.custom.processFetch(s, l));
        const c = await this._fetchImplementation(s, l);
        if (this.authenticationMode == Y.BrowserSession) {
          const f = c.headers.get("x-set-authorization"), y = f != null && f.startsWith("Session ") ? f.replace("Session ", "") : null;
          y && this.sessionTokenStore.setItem(this.sessionStorageKey, y);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof ar < "u" && ar.fetch ? this._fetchImplementation = ar.fetch.bind(ar) : this._fetchImplementation = async (...s) => {
      let l = await import("./browser-ponyfill-a7103644.js").then((d) => d.b);
      return l.default && (l = l.default), await l(...s);
    }, this.websocketImplementation = (n = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && n !== void 0 ? n : Lo, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Xo}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = Y.InternalAuthToken : t.apiKey ? this.authenticationMode = Y.APIKey : t.custom && (this.authenticationMode = Y.Custom), this.options.authenticationMode = t), (r = this.authenticationMode) !== null && r !== void 0 || (this.authenticationMode = Y.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = Y.BrowserSession;
    const r = !t || typeof t == "boolean" ? Ut.Durable : t.storageType;
    let n;
    r == Ut.Durable && ei("localStorage") ? n = window.localStorage : r == Ut.Session && ei("sessionStorage") ? n = window.sessionStorage : n = new zo(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = n, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), Yr(this.options.endpoint))
      return !!Yr(r);
    const n = new URL(this.options.endpoint).host;
    return r.includes(n);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, li, Ko];
    typeof window < "u" && t.push(lo), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      Tr({
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
      Tr({
        isSubscriptionOperation: (n) => n.query.definitions.some((i) => ns(i)),
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
      co,
      ...this.exchanges.afterAll
    );
    const r = new Yn({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[ci] = this, r;
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
    return Vo({
      url: r,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var n, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == Y.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == Y.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == Y.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == Y.Custom && await ((i = (n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (n, i) => {
          var a, o, s, l, d, c;
          if (this.authenticationMode == Y.BrowserSession && (i != null && i.sessionToken)) {
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
    if (this.authenticationMode == Y.InternalAuthToken)
      r.authorization = "Basic " + es("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == Y.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == Y.BrowserSession) {
      const n = this.sessionTokenStore.getItem(this.sessionStorageKey);
      n && (r.authorization = `Session ${n}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), n = [], i = t.connectionAttempts || Jo;
    const a = t.connectionGlobalTimeoutMs || Ho, o = () => {
      n.forEach((s) => s()), n = [];
    };
    return await new Promise((s, l) => {
      const d = setTimeout(() => {
        this.disposeClient(r), f(new go("Timeout opening websocket connection to Gadget API"));
      }, a), c = (b) => {
        if (zr(b)) {
          if (b.code == Jr.TooManyRequests)
            return o(), f(new So(b.reason));
          if (Zo.includes(b.code) && i > 0) {
            i -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), h();
            return;
          }
        }
        clearTimeout(d), l(new Hn(b));
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
Object.defineProperty(Li, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.24"
});
function ts(e, t) {
  if (typeof e != "string")
    return e;
  if (Yr(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Yr(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const rs = (e) => {
  var t;
  return e.kind !== "OperationDefinition" || e.operation !== "query" ? null : (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
}, ns = (e) => !!rs(e), is = (e, t, r, n) => {
  const i = Ce(e);
  return be({
    type: "query",
    name: `InternalFind${i}`,
    fields: {
      internal: we(r, {
        [e]: de({
          id: R({ value: t, type: "GadgetID!" }),
          select: R({ value: bn(n), type: "[String!]" })
        })
      }),
      ...ze(e, r)
    }
  });
}, Wi = (e, t, r) => ({
  search: r != null && r.search ? R({ value: r == null ? void 0 : r.search, type: "String" }) : void 0,
  sort: r != null && r.sort ? R({ value: r == null ? void 0 : r.sort, type: `[${Fi(e, t)}!]` }) : void 0,
  filter: r != null && r.filter ? R({ value: r == null ? void 0 : r.filter, type: `[${ln(e, t)}!]` }) : void 0,
  select: r != null && r.select ? R({ value: bn(r == null ? void 0 : r.select), type: "[String!]" }) : void 0
}), as = (e, t, r) => {
  const n = Ce(e), i = Wi(n, t, r);
  return be({
    type: "query",
    name: `InternalFindFirst${n}`,
    fields: {
      internal: we(t, {
        [`list${n}`]: de({
          ...i,
          first: R({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }),
      ...ze(e, t)
    }
  });
}, os = (e, t, r) => {
  const n = Ce(e), i = Wi(n, t, r);
  return be({
    type: "query",
    name: `InternalFindMany${n}`,
    fields: {
      internal: we(t, {
        [`list${n}`]: de({
          ...i,
          after: R({ value: r == null ? void 0 : r.after, type: "String" }),
          before: R({ value: r == null ? void 0 : r.before, type: "String" }),
          first: R({ value: r == null ? void 0 : r.first, type: "Int" }),
          last: R({ value: r == null ? void 0 : r.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }),
      ...ze(e, t)
    }
  });
}, hn = (e, t) => `Internal${un(e, t)}Input`, ss = (e, t, r) => {
  const n = Ce(e);
  return be({
    type: "mutation",
    name: `InternalCreate${n}`,
    fields: {
      internal: we(t, {
        [`create${n}`]: de({
          [e]: R({ value: r, type: hn(e, t) })
        }, {
          success: !0,
          ...yt,
          [e]: !0
        })
      }),
      ...ze(e, t)
    }
  });
}, us = (e, t, r, n) => {
  Ce(e);
  const i = Ce(t);
  return be({
    type: "mutation",
    name: `InternalBulkCreate${i}`,
    fields: {
      internal: we(r, {
        [`bulkCreate${i}`]: de({
          [t]: R({ value: n, type: `[${hn(e, r)}]!` })
        }, {
          success: !0,
          ...yt,
          [t]: !0
        })
      }),
      ...ze(e, r)
    }
  });
}, ls = (e, t, r, n) => {
  const i = Ce(e);
  return be({
    type: "mutation",
    name: `InternalUpdate${i}`,
    fields: {
      internal: we(t, {
        [`update${i}`]: de({
          id: R({ value: r, type: "GadgetID!" }),
          [e]: R({ value: n, type: hn(e, t) })
        }, {
          success: !0,
          ...yt,
          [e]: !0
        })
      }),
      ...ze(e, t)
    }
  });
}, cs = (e, t, r) => {
  const n = Ce(e);
  return be({
    type: "mutation",
    name: `InternalDelete${n}`,
    fields: {
      internal: we(t, {
        [`delete${n}`]: de({
          id: R({ value: r, type: "GadgetID!" })
        }, {
          success: !0,
          ...yt
        })
      })
    }
  });
}, ds = (e, t, r) => {
  const n = Ce(e);
  return be({
    type: "mutation",
    name: `InternalDeleteMany${n}`,
    fields: {
      internal: we(t, {
        [`deleteMany${n}`]: de({
          search: R({ value: r == null ? void 0 : r.search, type: "String" }),
          filter: R({ value: r == null ? void 0 : r.filter, type: `[${ln(e, t)}!]` })
        }, {
          success: !0,
          ...yt
        })
      })
    }
  });
};
class Ee {
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
    }), this.capitalizedApiIdentifier = Jt(t), this.namespace = (n == null ? void 0 : n.namespace) || [];
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let n = t;
    if (!this.validateRecord(t))
      throw new vr(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = is(this.apiIdentifier, t, this.namespace, bn(r == null ? void 0 : r.select)), a = await this.connection.currentClient.query(i.query, i.variables).toPromise(), s = (n ? $e : $t)(a, this.dataPath(this.apiIdentifier));
    return Vt(a, s);
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
    const r = os(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise(), i = $t(n, this.dataPath(`list${this.capitalizedApiIdentifier}`)), a = zt(n, i);
    return _t.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const n = as(this.apiIdentifier, this.namespace, t), i = await this.connection.currentClient.query(n.query, n.variables).toPromise(), a = this.dataPath(`list${this.capitalizedApiIdentifier}`);
    let o;
    r === !1 ? o = $t(i, a) : o = $e(i, a, r);
    const s = zt(i, o);
    return _t.boot(this, s, { options: t, pageInfo: o.pageInfo })[0];
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
    const r = ss(this.apiIdentifier, this.namespace, this.getRecordFromData(t, "create")), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise(), i = rt(n, this.dataPath(`create${this.capitalizedApiIdentifier}`));
    return Vt(n, i[this.apiIdentifier]);
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
      throw new Lr("Cannot perform bulkCreate without a pluralApiIdentifier");
    const n = Ce(this.options.pluralApiIdentifier), i = us(this.apiIdentifier, this.options.pluralApiIdentifier, this.namespace, t), a = await this.connection.currentClient.mutation(i.query, i.variables).toPromise(), o = rt(a, this.dataPath(`bulkCreate${n}`));
    return dn(a, o[this.options.pluralApiIdentifier]);
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
    Wr(t, "Can't update a record without an ID passed");
    const n = ls(this.apiIdentifier, this.namespace, t, this.getRecordFromData(r, "update")), i = await this.connection.currentClient.mutation(n.query, n.variables).toPromise(), a = rt(i, this.dataPath(`update${this.capitalizedApiIdentifier}`));
    return Vt(i, a[this.apiIdentifier]);
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
    Wr(t, "Can't delete a record without an ID");
    const r = cs(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise();
    rt(n, this.dataPath(`delete${this.capitalizedApiIdentifier}`));
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
    const r = ds(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise();
    rt(n, this.dataPath(`deleteMany${this.capitalizedApiIdentifier}`));
  }
  dataPath(t) {
    return ["internal", ...nt([t], this.namespace)];
  }
}
function bn(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, n] of Object.entries(e))
    n && t.push(r);
  return t;
}
const Ne = (e, t, r, n) => {
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
            return await Fo(
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
            const l = await ii(
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
          return await ai(this, t, r, e, o);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        i.prototype[a.type] = Object.assign(async function(o) {
          const s = await ai(
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
          return await ii(this, a.operationName, void 0, r, e, o);
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
                    (c) => zi(this[a.singleActionFunctionName], void 0, c)
                  )
                }
              }, await oi(
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
              const [d, c] = fs(a, o, s, l);
              return await oi(
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
function zi(e, t, r = {}) {
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
function fs(e, t, r, n) {
  let i, a;
  t && (i = n.shift()), r && (a = n.shift());
  const o = n.shift();
  let s = a;
  (i || a) && (s = zi(e, i, a));
  const l = {};
  for (const [d, c] of Object.entries(e.variables))
    l[d] = {
      value: d == "id" ? i : s == null ? void 0 : s[d],
      ...c
    };
  return [l, o];
}
const ve = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  email: !0,
  roles: { key: !0, name: !0 },
  updatedAt: !0
}, W = "user", Le = "users", ps = Ne(
  W,
  Le,
  ve,
  [
    {
      type: "findOne",
      operationName: W,
      modelApiIdentifier: W,
      findByVariableName: "id",
      defaultSelection: ve
    },
    {
      type: "maybeFindOne",
      operationName: W,
      modelApiIdentifier: W,
      findByVariableName: "id",
      defaultSelection: ve
    },
    {
      type: "findMany",
      operationName: Le,
      modelApiIdentifier: W,
      defaultSelection: ve
    },
    {
      type: "findFirst",
      operationName: Le,
      modelApiIdentifier: W,
      defaultSelection: ve
    },
    {
      type: "maybeFindFirst",
      operationName: Le,
      modelApiIdentifier: W,
      defaultSelection: ve
    },
    {
      type: "findOne",
      operationName: Le,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: W,
      defaultSelection: ve
    },
    {
      type: "action",
      operationName: "signUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "SignUpUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ve
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
      modelApiIdentifier: W,
      modelSelectionField: Le,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: ve
    },
    {
      type: "action",
      operationName: "updateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
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
      defaultSelection: ve
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
      modelApiIdentifier: W,
      modelSelectionField: Le,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: ve
    },
    {
      type: "action",
      operationName: "deleteUser",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
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
      modelApiIdentifier: W,
      modelSelectionField: Le,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "createUser",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "CreateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ve
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
      modelApiIdentifier: W,
      modelSelectionField: Le,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: ve
    }
  ]
), Re = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, fe = "session", St = "sessions", ys = Ne(
  fe,
  St,
  Re,
  [
    {
      type: "findOne",
      operationName: fe,
      modelApiIdentifier: fe,
      findByVariableName: "id",
      defaultSelection: Re
    },
    {
      type: "maybeFindOne",
      operationName: fe,
      modelApiIdentifier: fe,
      findByVariableName: "id",
      defaultSelection: Re
    },
    {
      type: "findMany",
      operationName: St,
      modelApiIdentifier: fe,
      defaultSelection: Re
    },
    {
      type: "findFirst",
      operationName: St,
      modelApiIdentifier: fe,
      defaultSelection: Re
    },
    {
      type: "maybeFindFirst",
      operationName: St,
      modelApiIdentifier: fe,
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "logInViaEmail",
      functionName: "logInViaEmail",
      namespace: "currentSession",
      modelApiIdentifier: fe,
      modelSelectionField: fe,
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
      defaultSelection: Re
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
      modelApiIdentifier: fe,
      modelSelectionField: St,
      namespace: "currentSession",
      variables: {
        inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" }
      },
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "logOut",
      functionName: "logOut",
      namespace: "currentSession",
      modelApiIdentifier: fe,
      modelSelectionField: fe,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: Re
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
      modelApiIdentifier: fe,
      modelSelectionField: St,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: Re
    }
  ]
), De = {
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
}, re = "shopifyProduct", at = "shopifyProducts", ms = Ne(
  re,
  at,
  De,
  [
    {
      type: "findOne",
      operationName: re,
      modelApiIdentifier: re,
      findByVariableName: "id",
      defaultSelection: De
    },
    {
      type: "maybeFindOne",
      operationName: re,
      modelApiIdentifier: re,
      findByVariableName: "id",
      defaultSelection: De
    },
    {
      type: "findMany",
      operationName: at,
      modelApiIdentifier: re,
      defaultSelection: De
    },
    {
      type: "findFirst",
      operationName: at,
      modelApiIdentifier: re,
      defaultSelection: De
    },
    {
      type: "maybeFindFirst",
      operationName: at,
      modelApiIdentifier: re,
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "createShopifyProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: re,
      modelSelectionField: re,
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
      defaultSelection: De
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
      modelApiIdentifier: re,
      modelSelectionField: at,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" }
      },
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "updateShopifyProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: re,
      modelSelectionField: re,
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
      defaultSelection: De
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
      modelApiIdentifier: re,
      modelSelectionField: at,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyProductsInput!]" }
      },
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "deleteShopifyProduct",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: re,
      modelSelectionField: re,
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
      modelApiIdentifier: re,
      modelSelectionField: at,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Fe = {
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
}, ne = "shopifyProductImage", ot = "shopifyProductImages", hs = Ne(
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
      operationName: "createShopifyProductImage",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
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
      defaultSelection: Fe
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
      modelApiIdentifier: ne,
      modelSelectionField: ot,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: Fe
    },
    {
      type: "action",
      operationName: "updateShopifyProductImage",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
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
      defaultSelection: Fe
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
      modelApiIdentifier: ne,
      modelSelectionField: ot,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: Fe
    },
    {
      type: "action",
      operationName: "deleteShopifyProductImage",
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
      operationName: "bulkDeleteShopifyProductImages",
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
  createdAt: !0,
  name: !0,
  position: !0,
  updatedAt: !0,
  values: !0
}, ie = "shopifyProductOption", st = "shopifyProductOptions", bs = Ne(
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
      operationName: "createShopifyProductOption",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
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
      defaultSelection: je
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
      modelApiIdentifier: ie,
      modelSelectionField: st,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: je
    },
    {
      type: "action",
      operationName: "updateShopifyProductOption",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
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
      defaultSelection: je
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
      modelApiIdentifier: ie,
      modelSelectionField: st,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: je
    },
    {
      type: "action",
      operationName: "deleteShopifyProductOption",
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
      operationName: "bulkDeleteShopifyProductOptions",
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
}, ae = "shopifyProductVariant", ut = "shopifyProductVariants", vs = Ne(
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
      operationName: "createShopifyProductVariant",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
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
      defaultSelection: Me
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
      modelApiIdentifier: ae,
      modelSelectionField: ut,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: Me
    },
    {
      type: "action",
      operationName: "updateShopifyProductVariant",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
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
      defaultSelection: Me
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
      modelApiIdentifier: ae,
      modelSelectionField: ut,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: Me
    },
    {
      type: "action",
      operationName: "deleteShopifyProductVariant",
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
      operationName: "bulkDeleteShopifyProductVariants",
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
), pe = {
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
}, U = "shopifyShop", We = "shopifyShops", gs = Ne(
  U,
  We,
  pe,
  [
    {
      type: "findOne",
      operationName: U,
      modelApiIdentifier: U,
      findByVariableName: "id",
      defaultSelection: pe
    },
    {
      type: "maybeFindOne",
      operationName: U,
      modelApiIdentifier: U,
      findByVariableName: "id",
      defaultSelection: pe
    },
    {
      type: "findMany",
      operationName: We,
      modelApiIdentifier: U,
      defaultSelection: pe
    },
    {
      type: "findFirst",
      operationName: We,
      modelApiIdentifier: U,
      defaultSelection: pe
    },
    {
      type: "maybeFindFirst",
      operationName: We,
      modelApiIdentifier: U,
      defaultSelection: pe
    },
    {
      type: "action",
      operationName: "createShopifyShop",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: U,
      modelSelectionField: U,
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
      defaultSelection: pe
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
      modelApiIdentifier: U,
      modelSelectionField: We,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyShopsInput!]" }
      },
      defaultSelection: pe
    },
    {
      type: "action",
      operationName: "updateShopifyShop",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: U,
      modelSelectionField: U,
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
      defaultSelection: pe
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
      modelApiIdentifier: U,
      modelSelectionField: We,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyShopsInput!]" }
      },
      defaultSelection: pe
    },
    {
      type: "action",
      operationName: "deleteShopifyShop",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: U,
      modelSelectionField: U,
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
      modelApiIdentifier: U,
      modelSelectionField: We,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "reinstallShopifyShop",
      functionName: "reinstall",
      namespace: null,
      modelApiIdentifier: U,
      modelSelectionField: U,
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
      defaultSelection: pe
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
      modelApiIdentifier: U,
      modelSelectionField: We,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkReinstallShopifyShopsInput!]" }
      },
      defaultSelection: pe
    },
    {
      type: "action",
      operationName: "uninstallShopifyShop",
      functionName: "uninstall",
      namespace: null,
      modelApiIdentifier: U,
      modelSelectionField: U,
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
      defaultSelection: pe
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
      modelApiIdentifier: U,
      modelSelectionField: We,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUninstallShopifyShopsInput!]" }
      },
      defaultSelection: pe
    }
  ]
), qe = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
}, oe = "productPairing", lt = "productPairings", Ss = Ne(
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
      operationName: "createProductPairing",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: oe,
      modelSelectionField: oe,
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
      defaultSelection: qe
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
      modelApiIdentifier: oe,
      modelSelectionField: lt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateProductPairingsInput!]" }
      },
      defaultSelection: qe
    },
    {
      type: "action",
      operationName: "updateProductPairing",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: oe,
      modelSelectionField: oe,
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
      defaultSelection: qe
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
      modelApiIdentifier: oe,
      modelSelectionField: lt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateProductPairingsInput!]" }
      },
      defaultSelection: qe
    },
    {
      type: "action",
      operationName: "deleteProductPairing",
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
      operationName: "bulkDeleteProductPairings",
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
), ge = {
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
}, Z = "shopifySync", Ye = "shopifySyncs", ws = Ne(
  Z,
  Ye,
  ge,
  [
    {
      type: "findOne",
      operationName: Z,
      modelApiIdentifier: Z,
      findByVariableName: "id",
      defaultSelection: ge
    },
    {
      type: "maybeFindOne",
      operationName: Z,
      modelApiIdentifier: Z,
      findByVariableName: "id",
      defaultSelection: ge
    },
    {
      type: "findMany",
      operationName: Ye,
      modelApiIdentifier: Z,
      defaultSelection: ge
    },
    {
      type: "findFirst",
      operationName: Ye,
      modelApiIdentifier: Z,
      defaultSelection: ge
    },
    {
      type: "maybeFindFirst",
      operationName: Ye,
      modelApiIdentifier: Z,
      defaultSelection: ge
    },
    {
      type: "findOne",
      operationName: Ye,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Z,
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: Z,
      modelSelectionField: Z,
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
      defaultSelection: ge
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
      modelApiIdentifier: Z,
      modelSelectionField: Ye,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCompleteShopifySyncsInput!]" }
      },
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "errorShopifySync",
      functionName: "error",
      namespace: null,
      modelApiIdentifier: Z,
      modelSelectionField: Z,
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
      defaultSelection: ge
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
      modelApiIdentifier: Z,
      modelSelectionField: Ye,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkErrorShopifySyncsInput!]" }
      },
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "runShopifySync",
      functionName: "run",
      namespace: null,
      modelApiIdentifier: Z,
      modelSelectionField: Z,
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
      defaultSelection: ge
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
      modelApiIdentifier: Z,
      modelSelectionField: Ye,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: ge
    }
  ]
), Pe = {
  __typename: !0,
  id: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  updatedAt: !0
}, X = "ambiguous", He = "ambiguouss", Is = Ne(
  X,
  He,
  Pe,
  [
    {
      type: "findOne",
      operationName: X,
      modelApiIdentifier: X,
      findByVariableName: "id",
      defaultSelection: Pe
    },
    {
      type: "maybeFindOne",
      operationName: X,
      modelApiIdentifier: X,
      findByVariableName: "id",
      defaultSelection: Pe
    },
    {
      type: "findMany",
      operationName: He,
      modelApiIdentifier: X,
      defaultSelection: Pe
    },
    {
      type: "findFirst",
      operationName: He,
      modelApiIdentifier: X,
      defaultSelection: Pe
    },
    {
      type: "maybeFindFirst",
      operationName: He,
      modelApiIdentifier: X,
      defaultSelection: Pe
    },
    {
      type: "findOne",
      operationName: He,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: X,
      defaultSelection: Pe
    },
    {
      type: "action",
      operationName: "createAmbiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !1,
      variables: { ambiguous: { required: !1, type: "CreateAmbiguousInput" } },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Pe
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
      modelApiIdentifier: X,
      modelSelectionField: He,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAmbiguousInput!]" } },
      defaultSelection: Pe
    },
    {
      type: "action",
      operationName: "updateAmbiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
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
      defaultSelection: Pe
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
      modelApiIdentifier: X,
      modelSelectionField: He,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAmbiguousInput!]" } },
      defaultSelection: Pe
    },
    {
      type: "action",
      operationName: "deleteAmbiguous",
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
      operationName: "bulkDeleteAmbiguous",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: X,
      modelSelectionField: He,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Te = {
  __typename: !0,
  id: !0,
  createdAt: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, ee = "unambiguous", Ze = "unambiguouss", As = Ne(
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
      operationName: "createUnambiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ee,
      modelSelectionField: ee,
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
      defaultSelection: Te
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
      modelApiIdentifier: ee,
      modelSelectionField: Ze,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateUnambiguousInput!]" }
      },
      defaultSelection: Te
    },
    {
      type: "action",
      operationName: "updateUnambiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ee,
      modelSelectionField: ee,
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
      defaultSelection: Te
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
      modelApiIdentifier: ee,
      modelSelectionField: Ze,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateUnambiguousInput!]" }
      },
      defaultSelection: Te
    },
    {
      type: "action",
      operationName: "deleteUnambiguous",
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
      operationName: "bulkDeleteUnambiguous",
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
), di = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, fi = "session", ks = "sessions", Os = Ne(
  fi,
  ks,
  di,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: di,
      modelApiIdentifier: fi
    }
  ]
);
var Qi;
const pi = "production", Ns = "development", Es = Symbol.for("gadget/modelRelationships"), Ps = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class Ts {
  constructor(t) {
    var i;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[Qi] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (a) => await si(
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
      async () => await si(
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
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? Ps() ?? Ns).toLocaleLowerCase();
    let r;
    this.apiRoots[this.environment] ? r = this.apiRoots[this.environment] : r = `https://related-products-example${this.environment == pi ? "" : `--${this.environment}`}.gadget.app`;
    const n = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== pi) {
      const a = ({ forward: o }) => (s) => {
        const l = o(s);
        return rn(
          l,
          kt((d) => {
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
    if (this.connection = new Li({
      endpoint: new URL("api/graphql", r).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: n,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == Y.APIKey && !((i = t == null ? void 0 : t.authenticationMode) != null && i.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new ps(this.connection), this.session = new ys(this.connection), this.shopifyProduct = new ms(this.connection), this.shopifyProductImage = new hs(this.connection), this.shopifyProductOption = new bs(this.connection), this.shopifyProductVariant = new vs(this.connection), this.shopifyShop = new gs(this.connection), this.productPairing = new Ss(this.connection), this.shopifySync = new ws(this.connection), this.ambiguous = new Is(this.connection), this.unambiguous = new As(this.connection), this.currentSession = new Os(this.connection), this.internal = {
      user: new Ee("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new Ee("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new Ee("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new Ee("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new Ee("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new Ee("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new Ee("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new Ee("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new Ee("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new Ee("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new Ee("unambiguous", this.connection, {
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
    Wr(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let i, a;
    return typeof n < "u" ? (i = r, a = n) : !t.variables || Object.keys(t.variables).length == 0 ? (i = {}, a = r) : (typeof r == "string" ? i = { id: r } : i = r, a = {}), await jo(this.connection, t, i, a);
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
    return new ur(this.connection, t, r);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
Qi = Es;
var Ki = {}, Sr = Be.createContext(Ki);
Sr.Provider;
Sr.Consumer;
Sr.displayName = "UrqlContext";
var Cs = () => {
  var e = Be.useContext(Sr);
  if (e === Ki && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, _s = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, xs = (e, t) => e === t || !(!e || !t || e.key !== t.key), _r = (e, t) => {
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
      if (o === "operation" ? !xs(n[o], i[o]) : n[o] !== i[o])
        return !0;
    return !1;
  })(e, r) ? r : e;
}, Rs = (e, t) => {
  for (var r = 0, n = t.length; r < n; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}, xr = Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function yi(e, t) {
  process.env.NODE_ENV !== "production" && xr && xr.ReactCurrentOwner && xr.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function Ds(e, t) {
  var r = Be.useRef(void 0);
  return Be.useMemo(() => {
    var n = sr(e, t);
    return r.current !== void 0 && r.current.key === n.key ? r.current : (r.current = n, n);
  }, [e, t]);
}
var Fs = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    e.operations$ && pt((n) => {
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
}, js = (e, t) => e.suspense && (!t || t.suspense !== !1);
function Ms(e) {
  var t = Cs(), r = Fs(t), n = js(t, e.context), i = Ds(e.query, e.variables), a = Be.useMemo(() => {
    if (e.pause)
      return null;
    var y = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return n ? Nt((h) => {
      r.set(i.key, h);
    })(y) : y;
  }, [r, t, i, n, e.pause, e.requestPolicy, e.context]), o = Be.useCallback((y, h) => {
    if (!y)
      return {
        fetching: !1
      };
    var b = r.get(i.key);
    if (b) {
      if (h && b != null && "then" in b)
        throw b;
    } else {
      var w, C = pt((S) => {
        b = S, w && w(b);
      })(mi(() => h && !w || !b)(y));
      if (b == null && h) {
        var j = new Promise((S) => {
          w = S;
        });
        throw r.set(i.key, j), j;
      } else
        C.unsubscribe();
    }
    return b || {
      fetching: !0
    };
  }, [r, i]), s = [t, i, e.requestPolicy, e.context, e.pause], [l, d] = Be.useState(() => [a, _r(_s, o(a, n)), s]), c = l[1];
  a !== l[0] && Rs(l[2], s) && d([a, c = _r(l[1], o(a, n)), s]), Be.useEffect(() => {
    var y = l[0], h = l[2][1], b = !1, w = (j) => {
      b = !0, yi(d, (S) => {
        var $ = _r(S[1], j);
        return S[1] !== $ ? [S[0], $, S[2]] : S;
      });
    };
    if (y) {
      var C = pt(w)(Zr(() => {
        w({
          fetching: !1
        });
      })(y));
      return b || w({
        fetching: !0
      }), () => {
        r.dispose(h.key), C.unsubscribe();
      };
    } else
      w({
        fetching: !1
      });
  }, [r, l[0], l[2][1]]);
  var f = Be.useCallback((y) => {
    var h = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...y
    };
    yi(d, (b) => [n ? Nt((w) => {
      r.set(i.key, w);
    })(t.executeQuery(i, h)) : t.executeQuery(i, h), b[1], s]);
  }, [t, r, i, n, o, e.requestPolicy, e.context]);
  return [c, f];
}
const qs = mr.createContext(void 0);
mr.createContext(void 0);
const Bs = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", $s = (e, t) => {
  let r = "";
  return e !== void 0 ? r = `[Network] ${e.message}` : t !== void 0 ? t.forEach((n) => {
    r += `[GraphQL] ${n.message}
`;
  }) : r = "Unknown error", r.trim();
}, Vs = (e) => typeof e == "string" ? new Wt(e) : e != null && e.message && !e.code ? new Wt(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class dt extends Error {
  /** @private */
  static forClientSideError(t, r) {
    return new dt({
      executionErrors: [t],
      response: r
    });
  }
  /** @private */
  static forErrorsResponse(t, r) {
    return new dt({
      executionErrors: t.map(cn),
      response: r
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new dt({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, r, n = !1) {
    const i = ko(t, r);
    let a = dt.forMaybeCombinedError(t.error);
    return !a && i && !n && (a = dt.forClientSideError(i)), a;
  }
  constructor({ networkError: t, executionErrors: r, response: n }) {
    const i = (r || []).map(Vs), a = $s(t, i);
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
const Us = (e) => {
  const { context: t, suspense: r, ...n } = e ?? {}, i = Rr(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...n,
    context: i
  };
}, Gs = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), Ls = (e) => {
  if (!va(qs))
    throw new Error(Bs);
  const t = Us(e);
  return Ms(t);
};
var Ws = typeof Element < "u", zs = typeof Map == "function", Qs = typeof Set == "function", Ks = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function lr(e, t) {
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
        if (!lr(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (zs && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!lr(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Qs && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Ks && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Ws && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !lr(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Js = function(t, r) {
  try {
    return lr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Ys = /* @__PURE__ */ Sa(Js), Hs = (e) => {
  const t = ga();
  return e ? (t.current === void 0 || !Ys(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, Zs = (e, t) => {
  const r = Hs(t), n = Rr(() => pn(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, r, e.findMany.namespace), [e, r]), [i, a] = Ls(Gs(n, t));
  return [Rr(() => {
    const s = nt([e.findMany.operationName], e.findMany.namespace);
    let l = i.data;
    if (l) {
      const c = Ct(i.data, s);
      if (c) {
        const f = zt(i, c);
        l = _t.boot(e, f, c);
      }
    }
    const d = dt.errorIfDataAbsent(i, s, t == null ? void 0 : t.pause);
    return { ...i, data: l, error: d };
  }, [e, t == null ? void 0 : t.pause, i]), a];
}, Xs = new Ts(), ru = () => {
  const [{ data: e }] = Zs(Xs.shopifyProduct);
  return /* @__PURE__ */ Dn.jsx(Dn.Fragment, { children: JSON.stringify(e) });
};
export {
  ru as R,
  tu as c,
  Sa as g
};
