import * as qe from "react";
import cr, { useMemo as Pr, useContext as oa, useRef as sa } from "react";
var Gs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ua(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _r = { exports: {} }, Tt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nn;
function la() {
  if (Nn)
    return Tt;
  Nn = 1;
  var e = cr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return Tt.Fragment = r, Tt.jsx = o, Tt.jsxs = o, Tt;
}
var Ct = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function ca() {
  return En || (En = 1, process.env.NODE_ENV !== "production" && function() {
    var e = cr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, w = "@@iterator";
    function T(u) {
      if (u === null || typeof u != "object")
        return null;
      var p = b && u[b] || u[w];
      return typeof p == "function" ? p : null;
    }
    var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(u) {
      {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), I = 1; I < p; I++)
          g[I - 1] = arguments[I];
        $("error", u, g);
      }
    }
    function $(u, p, g) {
      {
        var I = j.ReactDebugCurrentFrame, C = I.getStackAddendum();
        C !== "" && (p += "%s", g = g.concat([C]));
        var F = g.map(function(_) {
          return String(_);
        });
        F.unshift("Warning: " + p), Function.prototype.apply.call(console[u], console, F);
      }
    }
    var m = !1, A = !1, v = !1, V = !1, ze = !1, dt;
    dt = Symbol.for("react.module.reference");
    function ft(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === a || ze || u === i || u === d || u === c || V || u === h || m || A || v || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === f || u.$$typeof === o || u.$$typeof === s || u.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === dt || u.getModuleId !== void 0));
    }
    function Wt(u, p, g) {
      var I = u.displayName;
      if (I)
        return I;
      var C = p.displayName || p.name || "";
      return C !== "" ? g + "(" + C + ")" : g;
    }
    function Pt(u) {
      return u.displayName || "Context";
    }
    function we(u) {
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
            return Pt(p) + ".Consumer";
          case o:
            var g = u;
            return Pt(g._context) + ".Provider";
          case l:
            return Wt(u, u.render, "ForwardRef");
          case f:
            var I = u.displayName || null;
            return I !== null ? I : we(u.type) || "Memo";
          case y: {
            var C = u, F = C._payload, _ = C._init;
            try {
              return we(_(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, M = 0, D, P, B, Ce, x, Ve, Ke;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function Qe() {
      {
        if (M === 0) {
          D = console.log, P = console.info, B = console.warn, Ce = console.error, x = console.group, Ve = console.groupCollapsed, Ke = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: et,
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
              value: Ce
            }),
            group: k({}, u, {
              value: x
            }),
            groupCollapsed: k({}, u, {
              value: Ve
            }),
            groupEnd: k({}, u, {
              value: Ke
            })
          });
        }
        M < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = j.ReactCurrentDispatcher, zt;
    function pt(u, p, g) {
      {
        if (zt === void 0)
          try {
            throw Error();
          } catch (C) {
            var I = C.stack.trim().match(/\n( *(at )?)/);
            zt = I && I[1] || "";
          }
        return `
` + zt + u;
      }
    }
    var hr = !1, Kt;
    {
      var Mi = typeof WeakMap == "function" ? WeakMap : Map;
      Kt = new Mi();
    }
    function fn(u, p) {
      if (!u || hr)
        return "";
      {
        var g = Kt.get(u);
        if (g !== void 0)
          return g;
      }
      var I;
      hr = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = G.current, G.current = null, Qe();
      try {
        if (p) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (Ue) {
              I = Ue;
            }
            Reflect.construct(u, [], _);
          } else {
            try {
              _.call();
            } catch (Ue) {
              I = Ue;
            }
            u.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ue) {
            I = Ue;
          }
          u();
        }
      } catch (Ue) {
        if (Ue && I && typeof Ue.stack == "string") {
          for (var E = Ue.stack.split(`
`), se = I.stack.split(`
`), L = E.length - 1, K = se.length - 1; L >= 1 && K >= 0 && E[L] !== se[K]; )
            K--;
          for (; L >= 1 && K >= 0; L--, K--)
            if (E[L] !== se[K]) {
              if (L !== 1 || K !== 1)
                do
                  if (L--, K--, K < 0 || E[L] !== se[K]) {
                    var Ie = `
` + E[L].replace(" at new ", " at ");
                    return u.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", u.displayName)), typeof u == "function" && Kt.set(u, Ie), Ie;
                  }
                while (L >= 1 && K >= 0);
              break;
            }
        }
      } finally {
        hr = !1, G.current = F, J(), Error.prepareStackTrace = C;
      }
      var mt = u ? u.displayName || u.name : "", On = mt ? pt(mt) : "";
      return typeof u == "function" && Kt.set(u, On), On;
    }
    function qi(u, p, g) {
      return fn(u, !1);
    }
    function Bi(u) {
      var p = u.prototype;
      return !!(p && p.isReactComponent);
    }
    function Qt(u, p, g) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return fn(u, Bi(u));
      if (typeof u == "string")
        return pt(u);
      switch (u) {
        case d:
          return pt("Suspense");
        case c:
          return pt("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            return qi(u.render);
          case f:
            return Qt(u.type, p, g);
          case y: {
            var I = u, C = I._payload, F = I._init;
            try {
              return Qt(F(C), p, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Jt = Object.prototype.hasOwnProperty, pn = {}, yn = j.ReactDebugCurrentFrame;
    function Yt(u) {
      if (u) {
        var p = u._owner, g = Qt(u.type, u._source, p ? p.type : null);
        yn.setExtraStackFrame(g);
      } else
        yn.setExtraStackFrame(null);
    }
    function $i(u, p, g, I, C) {
      {
        var F = Function.call.bind(Jt);
        for (var _ in u)
          if (F(u, _)) {
            var E = void 0;
            try {
              if (typeof u[_] != "function") {
                var se = Error((I || "React class") + ": " + g + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              E = u[_](p, _, I, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              E = L;
            }
            E && !(E instanceof Error) && (Yt(C), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", g, _, typeof E), Yt(null)), E instanceof Error && !(E.message in pn) && (pn[E.message] = !0, Yt(C), S("Failed %s type: %s", g, E.message), Yt(null));
          }
      }
    }
    var Vi = Array.isArray;
    function br(u) {
      return Vi(u);
    }
    function Ui(u) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, g = p && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return g;
      }
    }
    function Gi(u) {
      try {
        return mn(u), !1;
      } catch {
        return !0;
      }
    }
    function mn(u) {
      return "" + u;
    }
    function hn(u) {
      if (Gi(u))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ui(u)), mn(u);
    }
    var _t = j.ReactCurrentOwner, Li = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, bn, gn, gr;
    gr = {};
    function Wi(u) {
      if (Jt.call(u, "ref")) {
        var p = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function zi(u) {
      if (Jt.call(u, "key")) {
        var p = Object.getOwnPropertyDescriptor(u, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Ki(u, p) {
      if (typeof u.ref == "string" && _t.current && p && _t.current.stateNode !== p) {
        var g = we(_t.current.type);
        gr[g] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', we(_t.current.type), u.ref), gr[g] = !0);
      }
    }
    function Qi(u, p) {
      {
        var g = function() {
          bn || (bn = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        g.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function Ji(u, p) {
      {
        var g = function() {
          gn || (gn = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        g.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Yi = function(u, p, g, I, C, F, _) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: p,
        ref: g,
        props: _,
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
        value: C
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function Hi(u, p, g, I, C) {
      {
        var F, _ = {}, E = null, se = null;
        g !== void 0 && (hn(g), E = "" + g), zi(p) && (hn(p.key), E = "" + p.key), Wi(p) && (se = p.ref, Ki(p, C));
        for (F in p)
          Jt.call(p, F) && !Li.hasOwnProperty(F) && (_[F] = p[F]);
        if (u && u.defaultProps) {
          var L = u.defaultProps;
          for (F in L)
            _[F] === void 0 && (_[F] = L[F]);
        }
        if (E || se) {
          var K = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          E && Qi(_, K), se && Ji(_, K);
        }
        return Yi(u, E, se, C, I, _t.current, _);
      }
    }
    var vr = j.ReactCurrentOwner, vn = j.ReactDebugCurrentFrame;
    function yt(u) {
      if (u) {
        var p = u._owner, g = Qt(u.type, u._source, p ? p.type : null);
        vn.setExtraStackFrame(g);
      } else
        vn.setExtraStackFrame(null);
    }
    var Sr;
    Sr = !1;
    function wr(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function Sn() {
      {
        if (vr.current) {
          var u = we(vr.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Zi(u) {
      {
        if (u !== void 0) {
          var p = u.fileName.replace(/^.*[\\\/]/, ""), g = u.lineNumber;
          return `

Check your code at ` + p + ":" + g + ".";
        }
        return "";
      }
    }
    var wn = {};
    function Xi(u) {
      {
        var p = Sn();
        if (!p) {
          var g = typeof u == "string" ? u : u.displayName || u.name;
          g && (p = `

Check the top-level render call using <` + g + ">.");
        }
        return p;
      }
    }
    function In(u, p) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var g = Xi(p);
        if (wn[g])
          return;
        wn[g] = !0;
        var I = "";
        u && u._owner && u._owner !== vr.current && (I = " It was passed a child from " + we(u._owner.type) + "."), yt(u), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, I), yt(null);
      }
    }
    function An(u, p) {
      {
        if (typeof u != "object")
          return;
        if (br(u))
          for (var g = 0; g < u.length; g++) {
            var I = u[g];
            wr(I) && In(I, p);
          }
        else if (wr(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var C = T(u);
          if (typeof C == "function" && C !== u.entries)
            for (var F = C.call(u), _; !(_ = F.next()).done; )
              wr(_.value) && In(_.value, p);
        }
      }
    }
    function ea(u) {
      {
        var p = u.type;
        if (p == null || typeof p == "string")
          return;
        var g;
        if (typeof p == "function")
          g = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === f))
          g = p.propTypes;
        else
          return;
        if (g) {
          var I = we(p);
          $i(g, u.props, "prop", I, u);
        } else if (p.PropTypes !== void 0 && !Sr) {
          Sr = !0;
          var C = we(p);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ta(u) {
      {
        for (var p = Object.keys(u.props), g = 0; g < p.length; g++) {
          var I = p[g];
          if (I !== "children" && I !== "key") {
            yt(u), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), yt(null);
            break;
          }
        }
        u.ref !== null && (yt(u), S("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    function kn(u, p, g, I, C, F) {
      {
        var _ = ft(u);
        if (!_) {
          var E = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = Zi(C);
          se ? E += se : E += Sn();
          var L;
          u === null ? L = "null" : br(u) ? L = "array" : u !== void 0 && u.$$typeof === t ? (L = "<" + (we(u.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : L = typeof u, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, E);
        }
        var K = Hi(u, p, g, C, F);
        if (K == null)
          return K;
        if (_) {
          var Ie = p.children;
          if (Ie !== void 0)
            if (I)
              if (br(Ie)) {
                for (var mt = 0; mt < Ie.length; mt++)
                  An(Ie[mt], u);
                Object.freeze && Object.freeze(Ie);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              An(Ie, u);
        }
        return u === n ? ta(K) : ea(K), K;
      }
    }
    function ra(u, p, g) {
      return kn(u, p, g, !0);
    }
    function na(u, p, g) {
      return kn(u, p, g, !1);
    }
    var ia = na, aa = ra;
    Ct.Fragment = n, Ct.jsx = ia, Ct.jsxs = aa;
  }()), Ct;
}
process.env.NODE_ENV === "production" ? _r.exports = la() : _r.exports = ca();
var Pn = _r.exports, Wr = () => {
}, me = Wr;
function Te(e) {
  return {
    tag: 0,
    0: e
  };
}
function Ut(e) {
  return {
    tag: 1,
    0: e
  };
}
var da = (e) => e;
function H(e) {
  return (t) => (r) => {
    var n = me;
    t((i) => {
      i === 0 ? r(0) : i.tag === 0 ? (n = i[0], r(i)) : e(i[0]) ? r(i) : n(0);
    });
  };
}
function St(e) {
  return (t) => (r) => t((n) => {
    n === 0 || n.tag === 0 ? r(n) : r(Ut(e(n[0])));
  });
}
function qt(e) {
  return (t) => (r) => {
    var n = [], i = me, a = !1, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, n.length || r(0)) : s.tag === 0 ? i = s[0] : (a = !1, function(d) {
        var c = me;
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
    }), r(Te((s) => {
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
function fa(e) {
  return qt(da)(e);
}
function wt(e) {
  return fa(ma(e));
}
function zr(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          r(Te((o) => {
            o === 1 ? (n = !0, a(1), e()) : a(o);
          }));
        } else
          r(i);
    });
  };
}
function It(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0);
        else if (i.tag === 0) {
          var a = i[0];
          r(Te((o) => {
            o === 1 && (n = !0), a(o);
          }));
        } else
          e(i[0]), r(i);
    });
  };
}
function _n(e) {
  return (t) => (r) => t((n) => {
    n === 0 ? r(0) : n.tag === 0 ? (r(n), e()) : r(n);
  });
}
function Bt(e) {
  var t = [], r = me, n = !1;
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
    }), i(Te((a) => {
      if (a === 1) {
        var o = t.indexOf(i);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || r(1);
      } else
        n || (n = !0, r(0));
    }));
  };
}
function Tn(e) {
  return (t) => (r) => {
    var n = me, i = me, a = !1, o = !1, s = !1, l = !1;
    t((d) => {
      l || (d === 0 ? (l = !0, s || r(0)) : d.tag === 0 ? n = d[0] : (s && (i(1), i = me), a ? a = !1 : (a = !0, n(0)), function(f) {
        s = !0, f((y) => {
          s && (y === 0 ? (s = !1, l ? r(0) : a || (a = !0, n(0))) : y.tag === 0 ? (o = !1, (i = y[0])(0)) : (r(y), o ? o = !1 : i(0)));
        });
      }(e(d[0]))));
    }), r(Te((d) => {
      d === 1 ? (l || (l = !0, n(1)), s && (s = !1, i(1))) : (!l && !a && (a = !0, n(0)), s && !o && (o = !0, i(0)));
    }));
  };
}
function dr(e) {
  return (t) => (r) => {
    var n = me, i = !1, a = 0;
    t((o) => {
      i || (o === 0 ? (i = !0, r(0)) : o.tag === 0 ? e <= 0 ? (i = !0, r(0), o[0](1)) : n = o[0] : a++ < e ? (r(o), !i && a >= e && (i = !0, r(0), n(1))) : r(o));
    }), r(Te((o) => {
      o === 1 && !i ? (i = !0, n(1)) : o === 0 && !i && a < e && n(0);
    }));
  };
}
function Kr(e) {
  return (t) => (r) => {
    var n = me, i = me, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, i(1), r(0)) : o.tag === 0 ? (n = o[0], e((s) => {
        s === 0 || (s.tag === 0 ? (i = s[0])(0) : (a = !0, i(1), n(1), r(0)));
      })) : r(o));
    }), r(Te((o) => {
      o === 1 && !a ? (a = !0, n(1), i(1)) : a || n(0);
    }));
  };
}
function ui(e, t) {
  return (r) => (n) => {
    var i = me, a = !1;
    r((o) => {
      a || (o === 0 ? (a = !0, n(0)) : o.tag === 0 ? (i = o[0], n(o)) : e(o[0]) ? n(o) : (a = !0, t && n(o), n(0), i(1)));
    });
  };
}
function pa(e) {
  return (t) => e()(t);
}
function li(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), n = !1, i = !1, a = !1, o;
    t(Te(async (s) => {
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
              a = !1, t(Ut(o.value));
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
function ya(e) {
  return e[Symbol.asyncIterator] ? li(e) : (t) => {
    var r = e[Symbol.iterator](), n = !1, i = !1, a = !1, o;
    t(Te((s) => {
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
              a = !1, t(Ut(o.value));
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
var ma = ya;
function Dt(e) {
  return (t) => {
    var r = !1;
    t(Te((n) => {
      n === 1 ? r = !0 : r || (r = !0, t(Ut(e)), t(0));
    }));
  };
}
function Qr(e) {
  return (t) => {
    var r = !1, n = e({
      next(i) {
        r || t(Ut(i));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(Te((i) => {
      i === 1 && !r && (r = !0, n());
    }));
  };
}
function Cn() {
  var e, t;
  return {
    source: Bt(Qr((r) => (e = r.next, t = r.complete, Wr))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function xn(e) {
  return Qr((t) => (e.then((r) => {
    Promise.resolve(r).then(() => {
      t.next(r), t.complete();
    });
  }), Wr));
}
function lt(e) {
  return (t) => {
    var r = me, n = !1;
    return t((i) => {
      i === 0 ? n = !0 : i.tag === 0 ? (r = i[0])(0) : n || (e(i[0]), r(0));
    }), {
      unsubscribe() {
        n || (n = !0, r(1));
      }
    };
  };
}
function ha(e) {
  lt((t) => {
  })(e);
}
var Ir = {
  done: !0
}, ba = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], r = !1, n = me, i;
    return e((a) => {
      r || (a === 0 ? (i && (i = i(Ir)), r = !0) : a.tag === 0 ? (n = a[0])(0) : i ? i = i({
        value: a[0],
        done: !1
      }) : t.push(a[0]));
    }), {
      async next() {
        return r && !t.length ? Ir : (!r && t.length <= 1 && n(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((a) => i = a));
      },
      async return() {
        return r || (i = n(1)), r = !0, Ir;
      }
    };
  }
});
function Jr(e) {
  return new Promise((t) => {
    var r = me, n;
    e((i) => {
      i === 0 ? Promise.resolve(n).then(t) : i.tag === 0 ? (r = i[0])(0) : (n = i[0], r(0));
    });
  });
}
var Yr = (...e) => {
  for (var t = e[0], r = 1, n = e.length; r < n; r++)
    t = e[r](t);
  return t;
}, vt = {
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
class $t extends Error {
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
function Q(e) {
  return new $t(`Syntax Error: Unexpected token at ${O} in ${e}`);
}
function ve(e) {
  if (e.lastIndex = O, e.test(q))
    return q.slice(O, O = e.lastIndex);
}
var Ht = / +(?=[^\s])/y;
function ga(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, a = t.length - 1, o = 0; o < t.length; o++)
    Ht.lastIndex = 0, Ht.test(t[o]) && (o && (!n || Ht.lastIndex < n) && (n = Ht.lastIndex), i = i || o, a = o);
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
var ci = /[_A-Za-z]\w*/y;
function $e() {
  var e;
  if (e = ve(ci))
    return {
      kind: "Name",
      value: e
    };
}
var va = /(?:null|true|false)/y, di = /\$[_A-Za-z]\w*/y, Sa = /-?\d+/y, wa = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Ia = /\\/g, Aa = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, ka = /"(?:"|[^\r\n]*?[^\\]")/y;
function ar(e) {
  var t, r;
  if (r = ve(va))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = ve(di)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = ve(Sa)) {
    var n = r;
    (r = ve(wa)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = ve(ci))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = ve(Aa))
    t = {
      kind: "StringValue",
      value: ga(r.slice(3, -3)),
      block: !0
    };
  else if (r = ve(ka))
    t = {
      kind: "StringValue",
      value: Ia.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (q.charCodeAt(O) === 91) {
      O++, N();
      for (var s = []; o = ar(a); )
        s.push(o);
      if (q.charCodeAt(O++) !== 93)
        throw Q("ListValue");
      return N(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (q.charCodeAt(O) === 123) {
      O++, N();
      for (var o = [], s; s = $e(); ) {
        if (N(), q.charCodeAt(O++) !== 58)
          throw Q("ObjectField");
        N();
        var l = ar(a);
        if (!l)
          throw Q("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: l
        });
      }
      if (q.charCodeAt(O++) !== 125)
        throw Q("ObjectValue");
      return N(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return N(), t;
}
function fi(e) {
  var t = [];
  if (N(), q.charCodeAt(O) === 40) {
    O++, N();
    for (var r; r = $e(); ) {
      if (N(), q.charCodeAt(O++) !== 58)
        throw Q("Argument");
      N();
      var n = ar(e);
      if (!n)
        throw Q("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || q.charCodeAt(O++) !== 41)
      throw Q("Argument");
    N();
  }
  return t;
}
function At(e) {
  var t = [];
  for (N(); q.charCodeAt(O) === 64; ) {
    O++;
    var r = $e();
    if (!r)
      throw Q("Directive");
    N(), t.push({
      kind: "Directive",
      name: r,
      arguments: fi(e)
    });
  }
  return t;
}
function Oa() {
  var e = $e();
  if (e) {
    N();
    var t;
    if (q.charCodeAt(O) === 58) {
      if (O++, N(), t = e, !(e = $e()))
        throw Q("Field");
      N();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: fi(!1),
      directives: At(!1),
      selectionSet: fr()
    };
  }
}
function pi() {
  var e;
  if (N(), q.charCodeAt(O) === 91) {
    O++, N();
    var t = pi();
    if (!t || q.charCodeAt(O++) !== 93)
      throw Q("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = $e())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw Q("NamedType");
  return N(), q.charCodeAt(O) === 33 ? (O++, N(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Na = /on/y;
function yi() {
  if (ve(Na)) {
    N();
    var e = $e();
    if (!e)
      throw Q("NamedType");
    return N(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Ea = /\.\.\./y;
function Pa() {
  if (ve(Ea)) {
    N();
    var e = O, t;
    if ((t = $e()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: At(!1)
      };
    O = e;
    var r = yi(), n = At(!1), i = fr();
    if (!i)
      throw Q("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: i
    };
  }
}
function fr() {
  var e;
  if (N(), q.charCodeAt(O) === 123) {
    O++, N();
    for (var t = []; e = Pa() || Oa(); )
      t.push(e);
    if (!t.length || q.charCodeAt(O++) !== 125)
      throw Q("SelectionSet");
    return N(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var _a = /fragment/y;
function Ta() {
  if (ve(_a)) {
    N();
    var e = $e();
    if (!e)
      throw Q("FragmentDefinition");
    N();
    var t = yi();
    if (!t)
      throw Q("FragmentDefinition");
    var r = At(!1), n = fr();
    if (!n)
      throw Q("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var Ca = /(?:query|mutation|subscription)/y;
function xa() {
  var e, t, r = [], n = [];
  (e = ve(Ca)) && (N(), t = $e(), r = function() {
    var o, s = [];
    if (N(), q.charCodeAt(O) === 40) {
      for (O++, N(); o = ve(di); ) {
        if (N(), q.charCodeAt(O++) !== 58)
          throw Q("VariableDefinition");
        var l = pi(), d = void 0;
        if (q.charCodeAt(O) === 61 && (O++, N(), !(d = ar(!0))))
          throw Q("VariableDefinition");
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
          directives: At(!0)
        });
      }
      if (q.charCodeAt(O++) !== 41)
        throw Q("VariableDefinition");
      N();
    }
    return s;
  }(), n = At(!1));
  var i = fr();
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
function Ra(e, t) {
  return q = typeof e.body == "string" ? e.body : e, O = 0, function() {
    var n;
    N();
    for (var i = []; n = Ta() || xa(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function Da(e) {
  return JSON.stringify(e);
}
function Fa(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var Ae = (e) => !(!e || !e.length), oe = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !Ae(e.variableDefinitions) && !Ae(e.directives))
      return oe.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), Ae(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(oe.VariableDefinition).join(", ") + ")"), Ae(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), t + " " + oe.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = oe.Variable(e.variable) + ": " + ke(e.type);
    return e.defaultValue && (t += " = " + ke(e.defaultValue)), Ae(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (Ae(e.arguments)) {
      var r = e.arguments.map(oe.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return Ae(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), e.selectionSet ? t + " " + oe.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Fa(e.value) : Da(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(ke).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(oe.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + ke(e.value),
  Document: (e) => Ae(e.definitions) ? e.definitions.map(ke).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(ke).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + ke(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return Ae(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), Ae(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), t + " " + ke(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, Ae(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), t + " " + ke(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return Ae(e.arguments) && (t += "(" + e.arguments.map(oe.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + ke(e.type) + "]",
  NonNullType: (e) => ke(e.type) + "!"
};
function ke(e) {
  return oe[e.kind] ? oe[e.kind](e) : "";
}
var ja = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new $t(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new $t(e);
class Gt extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(ja), n = ((i, a) => {
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
var Tr = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, ut = /* @__PURE__ */ new Set(), Rn = /* @__PURE__ */ new WeakMap(), bt = (e) => {
  if (e === null || ut.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return bt(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += bt(r) || "null";
    return t += "]";
  } else if (sr !== kt && e instanceof sr || ur !== kt && e instanceof ur)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = Rn.get(e) || Math.random().toString(36).slice(2);
    return Rn.set(e, i), bt({
      __key: i
    });
  }
  ut.add(e);
  var a = "{";
  for (var o of n) {
    var s = bt(e[o]);
    s && (a.length > 1 && (a += ","), a += bt(o) + ":" + s);
  }
  return ut.delete(e), a += "}";
}, Cr = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || ut.has(r)))
    if (Array.isArray(r))
      for (var n = 0, i = r.length; n < i; n++)
        Cr(e, `${t}.${n}`, r[n]);
    else if (r instanceof sr || r instanceof ur)
      e.set(t, r);
    else {
      ut.add(r);
      for (var a of Object.keys(r))
        Cr(e, `${t}.${a}`, r[a]);
    }
}, or = (e) => (ut.clear(), bt(e));
class kt {
}
var sr = typeof File < "u" ? File : kt, ur = typeof Blob < "u" ? Blob : kt, Ma = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, qa = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, Ba = (e, t) => t % 2 == 0 ? e.replace(qa, `
`) : e, Dn = (e) => e.split(Ma).map(Ba).join("").trim(), Fn = /* @__PURE__ */ new Map(), tr = /* @__PURE__ */ new Map(), Hr = (e) => {
  var t;
  return typeof e == "string" ? t = Dn(e) : e.loc && tr.get(e.__key) === e ? t = e.loc.source.body : (t = Fn.get(e) || Dn(ke(e)), Fn.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, jn = (e) => {
  var t = Tr(Hr(e));
  if (e.definitions) {
    var r = hi(e);
    r && (t = Tr(`
# ${r}`, t));
  }
  return t;
}, mi = (e) => {
  var t, r;
  return typeof e == "string" ? (t = jn(e), r = tr.get(t) || Ra(e)) : (t = e.__key || jn(e), r = tr.get(t) || e), r.loc || Hr(r), r.__key = t, tr.set(t, r), r;
}, rr = (e, t, r) => {
  var n = t || {}, i = mi(e), a = or(n), o = i.__key;
  return a !== "{}" && (o = Tr(a, o)), {
    key: o,
    query: i,
    variables: n,
    extensions: r
  };
}, hi = (e) => {
  for (var t of e.definitions)
    if (t.kind === vt.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, $a = (e) => {
  for (var t of e.definitions)
    if (t.kind === vt.OPERATION_DEFINITION)
      return t.operation;
}, xr = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var n = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new Gt({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? n : t.hasNext,
    stale: !1
  };
}, Rr = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = Rr(e[r], t[r]);
    return e;
  }
  return t;
}, Dr = (e, t, r) => {
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
          c[h + b] = Rr(c[h + b], l.items[b]);
      else
        l.data !== void 0 && (c[d] = Rr(c[d], l.data));
    }
  else
    s.data = t.data || e.data, n = t.errors || n;
  return {
    operation: e.operation,
    data: s.data,
    error: n.length ? new Gt({
      graphQLErrors: n,
      response: r
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, bi = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new Gt({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function gi(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Hr(e.query),
    operationName: hi(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var Va = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var n = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && n.searchParams.set(i, typeof a == "object" ? or(a) : a);
  }
  var o = n.toString();
  return o.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, Ua = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = or(t), n = ((s) => {
      var l = /* @__PURE__ */ new Map();
      return (sr !== kt || ur !== kt) && (ut.clear(), Cr(l, "variables", s)), l;
    })(t.variables);
    if (n.size) {
      var i = new FormData();
      i.append("operations", r), i.append("map", or({
        ...[...n.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of n.values())
        i.append("" + a++, o);
      return i;
    }
    return r;
  }
}, Ga = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (n.headers)
    for (var i in n.headers)
      r[i.toLowerCase()] = n.headers[i];
  var a = Ua(e, t);
  return typeof a == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...n,
    method: a ? "POST" : "GET",
    body: a,
    headers: r
  };
}, La = typeof TextDecoder < "u" ? new TextDecoder() : null, Wa = /boundary="?([^=";]+)"?/i, za = /data: ?([^\n]+)/, Mn = (e) => e.constructor.name === "Buffer" ? e.toString() : La.decode(e);
async function* qn(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield Mn(t);
  else {
    var r = e.body.getReader(), n;
    try {
      for (; !(n = await r.read()).done; )
        yield Mn(n.value);
    } finally {
      r.cancel();
    }
  }
}
async function* Bn(e, t) {
  var r = "", n;
  for await (var i of e)
    for (r += i; (n = r.indexOf(t)) > -1; )
      yield r.slice(0, n), r = r.slice(n + t.length);
}
async function* Ka(e, t, r) {
  var n = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (c, f) {
        var y = c.match(Wa), h = "--" + (y ? y[1] : "-"), b = !0, w;
        for await (var T of Bn(qn(f), `\r
` + h)) {
          if (b) {
            b = !1;
            var j = T.indexOf(h);
            if (j > -1)
              T = T.slice(j + h.length);
            else
              continue;
          }
          try {
            yield w = JSON.parse(T.slice(T.indexOf(`\r
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
        for await (var y of Bn(qn(c), `

`)) {
          var h = y.match(za);
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
      i = i ? Dr(i, l, a) : xr(e, l, a), n = !1, yield i, n = !0;
    i || (yield i = xr(e, {}, a));
  } catch (d) {
    if (!n)
      throw d;
    yield bi(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : d, a);
  }
}
function Qa(e, t, r) {
  var n;
  return typeof AbortController < "u" && (r.signal = (n = new AbortController()).signal), zr(() => {
    n && n.abort();
  })(H((i) => !!i)(li(Ka(e, t, r))));
}
var Fr = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      Fr(r, t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : Fr(e[n], t);
  return t;
}, jr = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var n of e.definitions) {
      var i = jr(n);
      t = t || i !== n, r.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === vt.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === vt.FIELD && s.name.value === "__typename" && !s.alias;
        var l = jr(s);
        t = t || l !== s, a.push(l);
      }
      if (o || (t = !0, a.push({
        kind: vt.FIELD,
        name: {
          kind: vt.NAME,
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
}, $n = /* @__PURE__ */ new Map(), Ja = (e) => {
  var t = mi(e), r = $n.get(t.__key);
  return r || ($n.set(t.__key, r = jr(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, Mr = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => Mr(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var n in e)
      n === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[n] = Mr(e[n]);
    return r;
  } else
    return e;
};
function Vn(e) {
  var t = (r) => e(r);
  return t.toPromise = () => Jr(dr(1)(H((r) => !r.stale && !r.hasNext)(t))), t.then = (r, n) => t.toPromise().then(r, n), t.subscribe = (r) => lt(r)(t), t;
}
function Ot(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var Un = (e, t) => Ot(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), Ya = () => {
}, Ar = ({ kind: e }) => e !== "mutation" && e !== "query", Ha = ({ forward: e, client: t, dispatchDebug: r }) => {
  var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (s) => {
    var l = Ot(s.kind, s);
    return l.query = Ja(s.query), l;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || n.has(s.key));
  return (s) => {
    var l = St((c) => {
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
        operation: process.env.NODE_ENV !== "production" ? Un(c, {
          cacheOutcome: f ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (y.stale = !0, Gn(t, c)), y;
    })(H((c) => !Ar(c) && o(c))(s)), d = It((c) => {
      var { operation: f } = c;
      if (f) {
        var y = f.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (y = ((v) => [...Fr(v, /* @__PURE__ */ new Set())])(c.data).concat(y)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
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
            var w = y[b], T = i.get(w);
            T || i.set(w, T = /* @__PURE__ */ new Set());
            for (var j of T.values())
              h.add(j);
            T.clear();
          }
          for (var S of h.values())
            n.has(S) && (f = n.get(S).operation, n.delete(S), Gn(t, f));
        } else if (f.kind === "query" && c.data) {
          n.set(f.key, c);
          for (var $ = 0; $ < y.length; $++) {
            var m = y[$], A = i.get(m);
            A || i.set(m, A = /* @__PURE__ */ new Set()), A.add(f.key);
          }
        }
      }
    })(e(H((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(St((c) => process.env.NODE_ENV !== "production" ? Un(c, {
      cacheOutcome: "miss"
    }) : c)(wt([St(a)(H((c) => !Ar(c) && !o(c))(s)), H((c) => Ar(c))(s)])))));
    return wt([l, d]);
  };
}, Gn = (e, t) => e.reexecuteOperation(Ot(t.kind, t, {
  requestPolicy: "network-only"
})), kr = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: n, forward: i }) => {
  var a = r || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = qt((d) => {
      var { key: c } = d, f = H((y) => y.kind === "teardown" && y.key === c)(o);
      return Kr(f)(((y) => {
        var h = e(gi(y), y);
        return Qr(({ next: b, complete: w }) => {
          var T = !1, j, S;
          return Promise.resolve().then(() => {
            T || (j = h.subscribe({
              next($) {
                b(S = S ? Dr(S, $) : xr(y, $));
              },
              error($) {
                b(bi(y, $));
              },
              complete() {
                T || (T = !0, y.kind === "subscription" && n.reexecuteOperation(Ot("teardown", y, y.context)), S && S.hasNext && b(Dr(S, {
                  hasNext: !1
                })), w());
              }
            }));
          }), () => {
            T = !0, j && j.unsubscribe();
          };
        });
      })(d));
    })(H((d) => d.kind !== "teardown" && a(d))(o)), l = i(H((d) => d.kind === "teardown" || !a(d))(o));
    return wt([s, l]);
  };
}, Za = ({ forward: e, dispatchDebug: t }) => (r) => {
  var n = qt((a) => {
    var o = gi(a), s = Va(a, o), l = Ga(a, o);
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
    var d = Kr(H((c) => c.kind === "teardown" && c.key === a.key)(r))(Qa(a, s, l));
    return process.env.NODE_ENV !== "production" ? It((c) => {
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
  return wt([n, i]);
}, Xa = (e) => ({ client: t, forward: r, dispatchDebug: n }) => e.reduceRight((i, a) => {
  var o = !1;
  return a({
    client: t,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return Bt(i(Bt(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && n({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, r), vi = ({ onOperation: e, onResult: t, onError: r }) => ({ forward: n }) => (i) => qt((a) => {
  r && a.error && r(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? xn(o) : Dt(o);
})(n(qt((a) => {
  var o = e && e(a) || a;
  return "then" in o ? xn(o) : Dt(o);
})(i))), eo = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = It((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var n = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: n,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(n);
  }
})(t)), H((r) => !1)(t)), Ln = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = Cn();
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
    var A = Kr(H((v) => v.kind === "teardown" && v.key === m.key)(l.source))(H((v) => v.operation.kind === m.kind && v.operation.key === m.key && (!v.operation.context._instance || v.operation.context._instance === m.context._instance))($));
    return m.kind !== "query" ? A = ui((v) => !!v.hasNext, !0)(A) : A = Tn((v) => {
      var V = Dt(v);
      return v.stale || v.hasNext ? V : wt([V, St(() => (v.stale = !0, v))(dr(1)(H((ze) => ze.key === m.key)(l.source)))]);
    })(A), m.kind !== "mutation" ? A = zr(() => {
      a.delete(m.key), n.delete(m.key), i.delete(m.key), c = !1;
      for (var v = o.length - 1; v >= 0; v--)
        o[v].key === m.key && o.splice(v, 1);
      d(Ot("teardown", m, m.context));
    })(It((v) => {
      if (v.stale) {
        for (var V of o)
          if (V.key === v.operation.key) {
            a.delete(V.key);
            break;
          }
      } else
        v.hasNext || a.delete(m.key);
      n.set(m.key, v);
    })(A)) : A = _n(() => {
      d(m);
    })(A), t.maskTypename && (A = St((v) => ({
      ...v,
      data: Mr(v.data, !0)
    }))(A)), Bt(A);
  }, h = this instanceof e ? this : Object.create(e.prototype), b = Object.assign(h, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(m) {
      m.kind === "teardown" ? f(m) : (m.kind === "mutation" || i.has(m.key)) && (o.push(m), Promise.resolve().then(f));
    },
    createRequestOperation(m, A, v) {
      v || (v = {});
      var V;
      if (process.env.NODE_ENV !== "production" && m !== "teardown" && (V = $a(A.query)) !== m)
        throw new Error(`Expected operation of type "${m}" but found "${V}"`);
      return Ot(m, A, {
        _instance: m === "mutation" ? r = r + 1 | 0 : void 0,
        ...s,
        ...v,
        requestPolicy: v.requestPolicy || s.requestPolicy,
        suspense: v.suspense || v.suspense !== !1 && b.suspense
      });
    },
    executeRequestOperation(m) {
      return m.kind === "mutation" ? Vn(y(m)) : Vn(pa(() => {
        var A = i.get(m.key);
        A || i.set(m.key, A = y(m)), A = _n(() => {
          f(m);
        })(A);
        var v = n.get(m.key);
        return m.kind === "query" && v && (v.stale || v.hasNext) ? Tn(Dt)(wt([A, H((V) => V === n.get(m.key))(Dt(v))])) : A;
      }));
    },
    executeQuery(m, A) {
      var v = b.createRequestOperation("query", m, A);
      return b.executeRequestOperation(v);
    },
    executeSubscription(m, A) {
      var v = b.createRequestOperation("subscription", m, A);
      return b.executeRequestOperation(v);
    },
    executeMutation(m, A) {
      var v = b.createRequestOperation("mutation", m, A);
      return b.executeRequestOperation(v);
    },
    readQuery(m, A, v) {
      var V = null;
      return lt((ze) => {
        V = ze;
      })(b.query(m, A, v)).unsubscribe(), V;
    },
    query: (m, A, v) => b.executeQuery(rr(m, A), v),
    subscription: (m, A, v) => b.executeSubscription(rr(m, A), v),
    mutation: (m, A, v) => b.executeMutation(rr(m, A), v)
  }), w = Ya;
  if (process.env.NODE_ENV !== "production") {
    var { next: T, source: j } = Cn();
    b.subscribeToDebugTarget = (m) => lt(m)(j), w = T;
  }
  var S = Xa(t.exchanges), $ = Bt(S({
    client: b,
    dispatchDebug: w,
    forward: eo({
      dispatchDebug: w
    })
  })(l.source));
  return ha($), b;
};
const qr = (e) => Object.entries(e).flatMap(([t, r]) => {
  if (typeof r == "boolean")
    return r ? t : !1;
  if (r instanceof Zr) {
    let n = "";
    const i = Object.entries(r.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof Xr ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return i.length > 0 && (n = `(${i.join(", ")})`), r.subselection ? [`${t}${n} {`, ...qr(r.subselection), "}"] : `${t}${n}`;
  } else
    return [`${t} {`, ...qr(r), "}"];
}).filter((t) => !!t).map((t) => "  " + t), lr = (e) => {
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
    i instanceof Zr ? (Object.entries(i.args).forEach(([a, o]) => {
      var s;
      o instanceof Xr && (t[(s = o.name) !== null && s !== void 0 ? s : r(a)] = o);
    }), i.subselection && Object.assign(t, lr(i.subselection))) : typeof i == "object" && i !== null && Object.assign(t, lr(i));
  }), t;
}, to = (e) => {
  const t = lr(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([n, i]) => `$${n}: ${i.type}`).join(", ")})`;
};
class Zr {
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
class Xr {
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
const ce = (e, t) => new Zr(e, t), R = (e) => new Xr(e.type + (e.required ? "!" : ""), e.name, e.value), ro = (e) => {
  var t;
  const r = to(e), n = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${r}${n} {
${qr(e.fields).join(`
`)}
}`;
}, he = (e) => {
  const t = lr(e.fields);
  return {
    query: ro(e),
    variables: Object.entries(t ?? {}).reduce((r, [n, i]) => (typeof i.value < "u" && (r[n] = i.value), r), {})
  };
}, no = {
  DateTime(e) {
    return new Date(e);
  }
};
class io {
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
      a != null && (r[n] = no[i](a));
    }
    return r;
  }
}
function ye(e) {
  if (typeof e != "object")
    return e;
  var t, r, n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = ye(e[t]));
    } else {
      r = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(r, t, {
          value: ye(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[t] = ye(e[t]);
    }
    return r;
  }
  if (n === "[object Array]") {
    for (t = e.length, r = Array(t); t--; )
      r[t] = ye(e[t]);
    return r;
  }
  return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    r.add(ye(i));
  }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    r.set(ye(a), ye(i));
  }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(ye(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var ue;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(ue || (ue = {}));
class ao {
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
    }), this.__gadget.instantiatedFields = ye(t), this.__gadget.persistedFields = ye(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((n) => this.__gadget.fieldKeysTracker[n] = !0));
    const r = {
      get: (n, i) => {
        if (i in this)
          return this[i];
        if (i in n)
          return n[i];
      },
      set: (n, i, a) => (this.trackKey(i), n[i.toString()] = a, !0)
    };
    return new Proxy(this.__gadget.fields, r);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const r = t.toString();
    this.__gadget.fieldKeysTracker[r] || (this.__gadget.fieldKeysTracker[r] = !0, this.__gadget.fieldKeys.push(r));
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = ue.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const r = t == ue.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((n) => !Zt(r[n], this.__gadget.fields[n]));
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
  changes(t, r = ue.SinceLoaded) {
    const i = (typeof t == "string" ? r : t || r) == ue.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = i[t], o = this.__gadget.fields[t], s = !Zt(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const s = this.__gadget.fieldKeys[o];
        Zt(i[s], this.__gadget.fields[s]) || (a[s] = { current: this.__gadget.fields[s], previous: i[s] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = ue.SinceLoaded) {
    const r = t == ue.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, n = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      Zt(r[a], this.__gadget.fields[a]) || (n[a] = this.__gadget.fields[a]);
    }
    return n;
  }
  changed(t, r = ue.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = ue.SinceLoaded) {
    t == ue.SinceLoaded ? this.__gadget.instantiatedFields = ye(this.__gadget.fields) : t == ue.SinceLastPersisted && (this.__gadget.persistedFields = ye(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = ue.SinceLoaded) {
    let r;
    t == ue.SinceLoaded ? r = Object.keys(this.__gadget.instantiatedFields) : r = Object.keys(this.__gadget.persistedFields);
    for (const n of this.__gadget.fieldKeys)
      r.includes(n) || delete this.__gadget.fields[n];
    t == ue.SinceLoaded ? Object.assign(this.__gadget.fields, ye(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, ye(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Ur({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const Si = ao;
class wi extends Error {
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
class Br extends Error {
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
class pr extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class Wn extends Error {
  constructor(t) {
    let r;
    Vr(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class oo extends Error {
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
class so extends Error {
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
class uo extends Error {
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
class Ii extends Error {
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
class en extends Error {
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
class lo extends Error {
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
function $r(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const Nt = (e, t) => {
  const r = t.length;
  let n = 0;
  for (; e != null && n < r; )
    e = e[t[n++]];
  return n && n == r ? e : void 0;
}, Vr = (e) => (e == null ? void 0 : e.type) == "close", _e = (e, t) => typeof e != "string" ? "" : Lt(e, t), zn = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Lt = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (n) => zn(n)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, i, a, o, s) => (i || (i = ""), "" + i + zn(a))), r;
}, tn = (e, t) => [...Array.isArray(t) ? t : t ? [t] : [], e].map((i) => Lt(i)).join(""), Ai = (e, t) => `${tn(e, t)}Sort`, rn = (e, t) => `${tn(e, t)}Filter`, co = (e, t, r) => new Ii(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), fo = (e, t) => {
  if (e.fetching)
    return;
  const r = Nt(e.data, t);
  if (r === void 0)
    return new wi(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null)
    return new en(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, Be = (e, t, r = !1) => {
  var n;
  if (e.error)
    throw e.error instanceof Gt && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const i = Nt(e.data, t), a = Nt(i, ["edges"]), o = a ?? i;
  if (i === void 0)
    throw new wi(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || r && Array.isArray(o) && o.length === 0)
    throw new en(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, Ft = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof Gt && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const n = Nt(e.data, t);
  return n ?? null;
}, nn = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new uo(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Ii(e.message) : new pr(e.message, e.code);
}, Ze = (e, t) => {
  const r = Be(e, t);
  return ki(r);
}, ki = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? nn(t) : new pr("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, Oi = (e) => {
  var t, r, n, i;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new io((i = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, jt = (e, t) => {
  const r = Oi(e);
  return r && (t = r.apply(t)), new Si(t);
}, an = (e, t) => {
  const r = Oi(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((n) => new Si(n));
}, Vt = (e, t) => {
  const r = t.edges.map((n) => n.node);
  return an(e, r);
}, Ur = (e) => {
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
          t[r] = n === void 0 ? null : Ur(n);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const r of Object.keys(e)) {
          const n = Ur(e[r]);
          n !== void 0 && (t[r] = n);
        }
        return t;
      }
    }
  }
}, Or = "gstk", Kn = (e) => {
  try {
    const t = window[e];
    return t.setItem(Or, Or), t.removeItem(Or), !0;
  } catch {
    return !1;
  }
}, Qn = Object.prototype.toString, Jn = Object.getPrototypeOf, Yn = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, Rt = (e, t, r) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (r.indexOf(e) > -1 && r.indexOf(t) > -1)
    return !0;
  const n = Qn.call(e), i = Qn.call(t);
  let a, o, s;
  if (r.push(e, t), n != i || (a = Yn(e), o = Yn(t), a.length != o.length || a.some(function(l) {
    return !Rt(e[l], t[l], r);
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
        if (s = a.next(), !Rt(s.value, o.next().value, r))
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
        if (!(!(s in e) && !(s in t)) && (s in e != s in t || !Rt(e[s], t[s], r)))
          return !1;
      return !0;
    case "Object":
      return Rt(Jn(e), Jn(t), r);
    default:
      return !1;
  }
}, Zt = (e, t) => Rt(e, t, []), Ni = (e, t) => {
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
}, po = (e, t = {}) => {
  var r;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((r = Array.isArray(t) ? t : t.inputs) !== null && r !== void 0 ? r : []).map((i) => Ni(e, i))
  };
}, yo = (e, t) => {
  const r = {};
  for (const [n, i] of Object.entries(e))
    r[n] = { ...i, value: t[n] };
  return r;
}, Xe = (e, t) => (t && e.unshift(...Array.isArray(t) ? t : [t]), e), We = (e, t) => {
  const r = t ? [...Array.isArray(t) ? t : [t], e].join(".") : e;
  return {
    gadgetMeta: {
      hydrations: ce({ modelName: r })
    }
  };
};
function Se(e, t) {
  if (!e)
    return t;
  if (Array.isArray(e) || (e = [e]), e)
    for (let r = e.length - 1; r >= 0; r--)
      t = {
        [e[r]]: t
      };
  return t;
}
const ct = {
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
class Et extends Array {
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
    const i = new Et();
    return i.push(...r), i.modelManager = t, i.pagination = n, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new pr("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new Br("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new Br("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: n, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: n || r
    });
  }
}
const on = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, yr = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, mo = (e, t, r, n, i, a) => {
  const o = {};
  typeof t < "u" && (o.id = R({ type: "GadgetID!", value: t }));
  let s = {
    [e]: ce(o, on((i == null ? void 0 : i.select) || r, !0))
  };
  return s = Se(a, s), he({
    type: "query",
    name: e,
    fields: {
      ...s,
      ...We(n, a)
    },
    directives: yr(i)
  });
}, ho = (e, t, r, n, i, a, o) => sn(e, n, i, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}, o), sn = (e, t, r, n, i) => {
  let a = {
    [e]: ce({
      after: R({ value: n == null ? void 0 : n.after, type: "String" }),
      first: R({ value: n == null ? void 0 : n.first, type: "Int" }),
      before: R({ value: n == null ? void 0 : n.before, type: "String" }),
      last: R({ value: n == null ? void 0 : n.last, type: "Int" }),
      sort: n != null && n.sort ? R({ value: n.sort, type: `[${Ai(r, i)}!]` }) : void 0,
      filter: n != null && n.filter ? R({ value: n.filter, type: `[${rn(r, i)}!]` }) : void 0,
      search: n != null && n.search ? R({ value: n.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: on((n == null ? void 0 : n.select) || t, !0)
      }
    })
  };
  return i && (a = Se(i, a)), he({
    type: "query",
    name: e,
    fields: {
      ...a,
      ...We(r, i)
    },
    directives: yr(n)
  });
}, un = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, R(r)])), Ei = (e, t, r) => ({
  success: !0,
  ...ct,
  [e]: t && !r ? on(t, !0) : !1,
  result: !!r
}), bo = (e, t, r, n, i, a, o, s, l) => {
  const d = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: ce(un(i), Ei(n, d, l))
  };
  c = Se(o, c);
  const f = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...We(r, o)
    },
    directives: yr(a)
  };
  return he(f);
}, go = (e, t, r) => {
  let n = {}, i = t.operationName, a;
  switch (t.isBulk && (i = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), t.operationReturnType ? a = `${t.operationReturnType}Result` : a = `${Lt(i)}Result`, t.type) {
    case "action": {
      const s = (r == null ? void 0 : r.select) || t.defaultSelection;
      n = {
        [`... on ${a}`]: Ei(t.modelApiIdentifier, s, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      n = {
        [`... on ${a}`]: Pi()
      };
  }
  const o = {
    type: "subscription",
    name: _e(i) + "BackgroundResult",
    fields: {
      backgroundAction: ce({ id: R({ value: e, type: "String!" }) }, {
        id: !0,
        outcome: !0,
        result: {
          ...n
        }
      })
    }
  };
  return he(o);
}, Pi = () => ({
  success: !0,
  ...ct,
  result: !0
}), vo = (e, t, r, n) => {
  let i = {
    [e]: ce(un(t), Pi())
  };
  return i = Se(r, i), he({
    type: "mutation",
    name: e,
    fields: i,
    directives: yr(n)
  });
}, So = (e) => {
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
}, wo = (e, t, r, n, i) => {
  let a = {
    [e]: ce({
      ...un(t),
      backgroundOptions: R({
        type: "EnqueueBackgroundActionOptions",
        value: So(n)
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
  return a = Se(r, a), he({
    type: "mutation",
    name: "enqueue" + Lt(e),
    fields: {
      background: a
    }
  });
}, Io = (e, t) => ({
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
function ln(e, t, r) {
  return r != null && r.live ? Io(ba(e), t) : Yr(e, H((i) => !i.stale && !i.hasNext), dr(1), Jr).then((i) => t(i));
}
const Hn = (e, t, r, n, i, a, o = !0, s) => {
  const l = mo(t, r, n, i, a, s), d = e.connection.currentClient.query(l.query, l.variables);
  return ln(d, (c) => {
    const f = o ? Be : Ft, y = Xe([t], s), h = f(c, y);
    return jt(c, h);
  }, a);
}, Ao = (e, t, r, n, i, a, o, s = !0, l) => {
  const d = ho(t, r, n, i, a, o), c = Xe([t], l), f = e.connection.currentClient.query(d.query, d.variables);
  return ln(f, (y) => {
    const h = Be(y, c), b = Vt(y, h);
    if (b.length > 1)
      throw co(a, r, n);
    const w = b[0];
    if (!w && s)
      throw new en(`${a} record with ${r}=${n} not found`);
    return w ?? null;
  }, o);
}, Zn = (e, t, r, n, i, a, o) => {
  const s = sn(t, r, n, i, o), l = e.connection.currentClient.query(s.query, s.variables), d = Xe([t], o);
  return ln(l, (c) => {
    let f;
    a === !1 ? f = Ft(c, d) : f = Be(c, d, a);
    const y = Vt(c, f);
    return Et.boot(e, y, { options: i, pageInfo: f.pageInfo });
  }, i);
}, Xn = async (e, t, r, n, i, a, o, s, l, d) => {
  const c = bo(t, r, n, i, o, s, l, a, d), f = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), y = Xe([t], l);
  if (a) {
    const h = Nt(f.data, y), b = h[i] && r ? an(f, h[i]) : void 0;
    if (h.errors) {
      const w = h.errors.map((T) => nn(T));
      throw new lo(w, b);
    }
    return b;
  } else {
    const h = Ze(f, y);
    return _i(r, f, h, i, d);
  }
}, _i = (e, t, r, n, i) => {
  if (e != null)
    return i ? r.result : jt(t, r[n]);
}, ei = async (e, t, r, n) => {
  const i = vo(t, r, n), a = await e.currentClient.mutation(i.query, i.variables).toPromise(), o = Xe([t], n);
  return Ze(a, o).result;
};
async function ko(e, t, r, n = {}) {
  const i = t.isBulk ? po(t, r) : Ni(t, r), a = yo(t.variables, i), o = wo(t.operationName, a, t.namespace, n, t.isBulk), s = await e.currentClient.mutation(o.query, o.variables, n).toPromise(), l = ["background", ...Xe([t.operationName], t.namespace)];
  try {
    const d = Ze(s, l);
    return t.isBulk ? d.backgroundActions.map((c) => new nr(e, t, c.id)) : new nr(e, t, d.backgroundAction.id);
  } catch (d) {
    if ("code" in d && d.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (n != null && n.id) && n.onDuplicateID == "ignore")
      return new nr(e, t, n.id);
    throw d;
  }
}
const Oo = async (e, t, r, n) => {
  const i = go(t, r, n), a = e.currentClient.subscription(i.query, i.variables), o = await Yr(a, H((l) => {
    var d, c;
    return l.error || ((c = (d = l.data) === null || d === void 0 ? void 0 : d.backgroundAction) === null || c === void 0 ? void 0 : c.outcome);
  }), dr(1), Jr), s = Be(o, ["backgroundAction"]);
  switch (ki(s.result), r.type) {
    case "action": {
      s.result = _i(r.defaultSelection, o.data, s.result, r.isBulk ? r.modelApiIdentifier : r.modelSelectionField, r.hasReturnType);
      break;
    }
    case "globalAction": {
      s.result = s.result.result;
      break;
    }
  }
  return s;
};
class nr {
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
    return (await Oo(this.connection, this.id, this.action, t)).result;
  }
}
var Mt;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(Mt || (Mt = {}));
function pe(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function ot(e) {
  return pe(e) === "object";
}
function No(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function ti(e, t) {
  return e.length < 124 ? e : t;
}
const Eo = "graphql-transport-ws";
var le;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(le || (le = {}));
var z;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(z || (z = {}));
function Ti(e) {
  if (!ot(e))
    throw new Error(`Message is expected to be an object, but got ${pe(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${pe(e.type)}`);
  switch (e.type) {
    case z.ConnectionInit:
    case z.ConnectionAck:
    case z.Ping:
    case z.Pong: {
      if (e.payload != null && !ot(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case z.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${pe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ot(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${pe(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${pe(e.payload.query)}`);
      if (e.payload.variables != null && !ot(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${pe(e.payload.variables)}`);
      if (e.payload.operationName != null && pe(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${pe(e.payload.operationName)}`);
      if (e.payload.extensions != null && !ot(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${pe(e.payload.extensions)}`);
      break;
    }
    case z.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${pe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ot(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${pe(e.payload)}`);
      break;
    }
    case z.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${pe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!No(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case z.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${pe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Po(e, t) {
  return Ti(typeof e == "string" ? JSON.parse(e, t) : e);
}
function xt(e, t) {
  return Ti(e), JSON.stringify(e, t);
}
function _o(e) {
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
    shouldRetry: f = Xt,
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
    jsonMessageReplacer: T,
    jsonMessageReviver: j
  } = e;
  let S;
  if (b) {
    if (!Co(b))
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
  let v, V = 0, ze, dt = !1, ft = 0, Wt = !1;
  async function Pt() {
    clearTimeout(ze);
    const [k, M] = await (v ?? (v = new Promise((B, Ce) => (async () => {
      if (dt) {
        if (await c(ft), !V)
          return v = void 0, Ce({ code: 1e3, reason: "All Subscriptions Gone" });
        ft++;
      }
      m.emit("connecting");
      const x = new $(typeof t == "function" ? await t() : t, Eo);
      let Ve, Ke;
      function et() {
        isFinite(o) && o > 0 && (clearTimeout(Ke), Ke = setTimeout(() => {
          x.readyState === $.OPEN && (x.send(xt({ type: z.Ping })), m.emit("ping", !1, void 0));
        }, o));
      }
      A((J) => {
        v = void 0, clearTimeout(Ve), clearTimeout(Ke), Ce(J), Xt(J) && J.code === 4499 && (x.close(4499, "Terminated"), x.onerror = null, x.onclose = null);
      }), x.onerror = (J) => m.emit("error", J), x.onclose = (J) => m.emit("closed", J), x.onopen = async () => {
        try {
          m.emit("opened", x);
          const J = typeof r == "function" ? await r() : r;
          if (x.readyState !== $.OPEN)
            return;
          x.send(xt(J ? {
            type: z.ConnectionInit,
            payload: J
          } : {
            type: z.ConnectionInit
            // payload is completely absent if not provided
          }, T)), isFinite(l) && l > 0 && (Ve = setTimeout(() => {
            x.close(le.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), et();
        } catch (J) {
          m.emit("error", J), x.close(le.InternalClientError, ti(J instanceof Error ? J.message : new Error(J).message, "Internal client error"));
        }
      };
      let Qe = !1;
      x.onmessage = ({ data: J }) => {
        try {
          const G = Po(J, j);
          if (m.emit("message", G), G.type === "ping" || G.type === "pong") {
            m.emit(G.type, !0, G.payload), G.type === "pong" ? et() : s || (x.send(xt(G.payload ? {
              type: z.Pong,
              payload: G.payload
            } : {
              type: z.Pong
              // payload is completely absent if not provided
            })), m.emit("pong", !1, G.payload));
            return;
          }
          if (Qe)
            return;
          if (G.type !== z.ConnectionAck)
            throw new Error(`First message cannot be of type ${G.type}`);
          clearTimeout(Ve), Qe = !0, m.emit("connected", x, G.payload), dt = !1, ft = 0, B([
            x,
            new Promise((zt, pt) => A(pt))
          ]);
        } catch (G) {
          x.onmessage = null, m.emit("error", G), x.close(le.BadResponse, ti(G instanceof Error ? G.message : new Error(G).message, "Bad response"));
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
            isFinite(a) && a > 0 ? ze = setTimeout(() => {
              k.readyState === $.OPEN && B();
            }, a) : B();
          }
        }),
        // or
        M
      ])
    ];
  }
  function we(k) {
    if (Xt(k) && (To(k.code) || [
      le.InternalServerError,
      le.InternalClientError,
      le.BadRequest,
      le.BadResponse,
      le.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      le.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      le.SubscriberAlreadyExists,
      le.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(k.code)))
      throw k;
    if (Wt)
      return !1;
    if (Xt(k) && k.code === 1e3)
      return V > 0;
    if (!d || ft >= d || !f(k) || y != null && y(k))
      throw k;
    return dt = !0;
  }
  return n || (async () => {
    for (V++; ; )
      try {
        const [, , k] = await Pt();
        await k;
      } catch (k) {
        try {
          if (!we(k))
            return;
        } catch (M) {
          return i == null ? void 0 : i(M);
        }
      }
  })(), {
    on: m.on,
    subscribe(k, M) {
      const D = w(k);
      let P = !1, B = !1, Ce = () => {
        V--, P = !0;
      };
      return (async () => {
        for (V++; ; )
          try {
            const [x, Ve, Ke] = await Pt();
            if (P)
              return Ve();
            const et = m.onMessage(D, (Qe) => {
              switch (Qe.type) {
                case z.Next: {
                  M.next(Qe.payload);
                  return;
                }
                case z.Error: {
                  B = !0, P = !0, M.error(Qe.payload), Ce();
                  return;
                }
                case z.Complete: {
                  P = !0, Ce();
                  return;
                }
              }
            });
            x.send(xt({
              id: D,
              type: z.Subscribe,
              payload: k
            }, T)), Ce = () => {
              !P && x.readyState === $.OPEN && x.send(xt({
                id: D,
                type: z.Complete
              }, T)), V--, P = !0, Ve();
            }, await Ke.finally(et);
            return;
          } catch (x) {
            if (!we(x))
              return;
          }
      })().then(() => {
        B || M.complete();
      }).catch((x) => {
        M.error(x);
      }), () => {
        P || Ce();
      };
    },
    async dispose() {
      if (Wt = !0, v) {
        const [k] = await v;
        k.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      v && m.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function Xt(e) {
  return ot(e) && "code" in e && "reason" in e;
}
function To(e) {
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
function Co(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var gt = null;
typeof WebSocket < "u" ? gt = WebSocket : typeof MozWebSocket < "u" ? gt = MozWebSocket : typeof global < "u" ? gt = global.WebSocket || global.MozWebSocket : typeof window < "u" ? gt = window.WebSocket || window.MozWebSocket : typeof self < "u" && (gt = self.WebSocket || self.MozWebSocket);
const xo = gt;
class Ci extends Error {
}
class Ro {
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
    throw Be(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Ci("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Be(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Be(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Do {
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
const Fo = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
}, ri = vi({
  onOperation: (e) => {
    var t, r;
    (t = (r = e.context).operationName) !== null && t !== void 0 || (r.operationName = Fo(e.query) || "unknown");
  }
}), jo = vi({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, r] = e.context.url.split("?"), n = new URLSearchParams(r);
        n.set("operation", e.context.operationName), e.context.url = `${t}?${n.toString()}`;
      } catch {
      }
  }
});
var Gr;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(Gr || (Gr = {}));
const Mo = 2, qo = 4800, Bo = 1e4, $o = [le.ConnectionAcknowledgementTimeout, le.ConnectionInitialisationTimeout], ni = Symbol.for("gadget/connection"), Vo = "token", Uo = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var Y;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(Y || (Y = {}));
const er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class xi {
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
            connectionAckWaitTimeout: qo,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const h = new Ln({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              ri,
              ...this.exchanges.beforeAsync,
              kr({
                forwardSubscription(w) {
                  const T = { ...w, query: w.query || "" };
                  return {
                    subscribe: (j) => ({
                      unsubscribe: f.subscribe(T, j)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          h[ni] = this, y = new Ro(h, f), this.currentTransaction = y, await y.start();
          const b = await d(y);
          return await y.commit(), b;
        } catch (h) {
          try {
            y != null && y.open && await y.rollback();
          } catch (b) {
            b instanceof Ci || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", b);
          }
          throw Vr(h) ? new Wn(h) : h;
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
        s = Go(s, (d = this.options.baseRouteURL) !== null && d !== void 0 ? d : this.options.endpoint), this.isGadgetRequest(s) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == Y.Custom && await this.options.authenticationMode.custom.processFetch(s, l));
        const c = await this._fetchImplementation(s, l);
        if (this.authenticationMode == Y.BrowserSession) {
          const f = c.headers.get("x-set-authorization"), y = f != null && f.startsWith("Session ") ? f.replace("Session ", "") : null;
          y && this.sessionTokenStore.setItem(this.sessionStorageKey, y);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof er < "u" && er.fetch ? this._fetchImplementation = er.fetch.bind(er) : this._fetchImplementation = async (...s) => {
      let l = await import("./browser-ponyfill-4bc7c063.js").then((d) => d.b);
      return l.default && (l = l.default), await l(...s);
    }, this.websocketImplementation = (n = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && n !== void 0 ? n : xo, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Vo}-${this.endpoint}`;
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
    const r = !t || typeof t == "boolean" ? Mt.Durable : t.storageType;
    let n;
    r == Mt.Durable && Kn("localStorage") ? n = window.localStorage : r == Mt.Session && Kn("sessionStorage") ? n = window.sessionStorage : n = new Do(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = n, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), Lr(this.options.endpoint))
      return !!Lr(r);
    const n = new URL(this.options.endpoint).host;
    return r.includes(n);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, ri, jo];
    typeof window < "u" && t.push(Ha), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      kr({
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
      kr({
        isSubscriptionOperation: (n) => n.query.definitions.some((i) => Wo(i)),
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
      Za,
      ...this.exchanges.afterAll
    );
    const r = new Ln({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[ni] = this, r;
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
    return _o({
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
      r.authorization = "Basic " + Uo("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == Y.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == Y.BrowserSession) {
      const n = this.sessionTokenStore.getItem(this.sessionStorageKey);
      n && (r.authorization = `Session ${n}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), n = [], i = t.connectionAttempts || Mo;
    const a = t.connectionGlobalTimeoutMs || Bo, o = () => {
      n.forEach((s) => s()), n = [];
    };
    return await new Promise((s, l) => {
      const d = setTimeout(() => {
        this.disposeClient(r), f(new oo("Timeout opening websocket connection to Gadget API"));
      }, a), c = (b) => {
        if (Vr(b)) {
          if (b.code == Gr.TooManyRequests)
            return o(), f(new so(b.reason));
          if ($o.includes(b.code) && i > 0) {
            i -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), h();
            return;
          }
        }
        clearTimeout(d), l(new Wn(b));
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
Object.defineProperty(xi, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.24"
});
function Go(e, t) {
  if (typeof e != "string")
    return e;
  if (Lr(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Lr(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const Lo = (e) => {
  var t;
  return e.kind !== "OperationDefinition" || e.operation !== "query" ? null : (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
}, Wo = (e) => !!Lo(e), zo = (e, t, r, n) => {
  const i = _e(e);
  return he({
    type: "query",
    name: `InternalFind${i}`,
    fields: {
      internal: Se(r, {
        [e]: ce({
          id: R({ value: t, type: "GadgetID!" }),
          select: R({ value: dn(n), type: "[String!]" })
        })
      }),
      ...We(e, r)
    }
  });
}, Ri = (e, t, r) => ({
  search: r != null && r.search ? R({ value: r == null ? void 0 : r.search, type: "String" }) : void 0,
  sort: r != null && r.sort ? R({ value: r == null ? void 0 : r.sort, type: `[${Ai(e, t)}!]` }) : void 0,
  filter: r != null && r.filter ? R({ value: r == null ? void 0 : r.filter, type: `[${rn(e, t)}!]` }) : void 0,
  select: r != null && r.select ? R({ value: dn(r == null ? void 0 : r.select), type: "[String!]" }) : void 0
}), Ko = (e, t, r) => {
  const n = _e(e), i = Ri(n, t, r);
  return he({
    type: "query",
    name: `InternalFindFirst${n}`,
    fields: {
      internal: Se(t, {
        [`list${n}`]: ce({
          ...i,
          first: R({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }),
      ...We(e, t)
    }
  });
}, Qo = (e, t, r) => {
  const n = _e(e), i = Ri(n, t, r);
  return he({
    type: "query",
    name: `InternalFindMany${n}`,
    fields: {
      internal: Se(t, {
        [`list${n}`]: ce({
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
      ...We(e, t)
    }
  });
}, cn = (e, t) => `Internal${tn(e, t)}Input`, Jo = (e, t, r) => {
  const n = _e(e);
  return he({
    type: "mutation",
    name: `InternalCreate${n}`,
    fields: {
      internal: Se(t, {
        [`create${n}`]: ce({
          [e]: R({ value: r, type: cn(e, t) })
        }, {
          success: !0,
          ...ct,
          [e]: !0
        })
      }),
      ...We(e, t)
    }
  });
}, Yo = (e, t, r, n) => {
  _e(e);
  const i = _e(t);
  return he({
    type: "mutation",
    name: `InternalBulkCreate${i}`,
    fields: {
      internal: Se(r, {
        [`bulkCreate${i}`]: ce({
          [t]: R({ value: n, type: `[${cn(e, r)}]!` })
        }, {
          success: !0,
          ...ct,
          [t]: !0
        })
      }),
      ...We(e, r)
    }
  });
}, Ho = (e, t, r, n) => {
  const i = _e(e);
  return he({
    type: "mutation",
    name: `InternalUpdate${i}`,
    fields: {
      internal: Se(t, {
        [`update${i}`]: ce({
          id: R({ value: r, type: "GadgetID!" }),
          [e]: R({ value: n, type: cn(e, t) })
        }, {
          success: !0,
          ...ct,
          [e]: !0
        })
      }),
      ...We(e, t)
    }
  });
}, Zo = (e, t, r) => {
  const n = _e(e);
  return he({
    type: "mutation",
    name: `InternalDelete${n}`,
    fields: {
      internal: Se(t, {
        [`delete${n}`]: ce({
          id: R({ value: r, type: "GadgetID!" })
        }, {
          success: !0,
          ...ct
        })
      })
    }
  });
}, Xo = (e, t, r) => {
  const n = _e(e);
  return he({
    type: "mutation",
    name: `InternalDeleteMany${n}`,
    fields: {
      internal: Se(t, {
        [`deleteMany${n}`]: ce({
          search: R({ value: r == null ? void 0 : r.search, type: "String" }),
          filter: R({ value: r == null ? void 0 : r.filter, type: `[${rn(e, t)}!]` })
        }, {
          success: !0,
          ...ct
        })
      })
    }
  });
};
class Ne {
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
    }), this.capitalizedApiIdentifier = Lt(t), this.namespace = (n == null ? void 0 : n.namespace) || [];
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let n = t;
    if (!this.validateRecord(t))
      throw new pr(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = zo(this.apiIdentifier, t, this.namespace, dn(r == null ? void 0 : r.select)), a = await this.connection.currentClient.query(i.query, i.variables).toPromise(), s = (n ? Be : Ft)(a, this.dataPath(this.apiIdentifier));
    return jt(a, s);
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
    const r = Qo(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise(), i = Ft(n, this.dataPath(`list${this.capitalizedApiIdentifier}`)), a = Vt(n, i);
    return Et.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const n = Ko(this.apiIdentifier, this.namespace, t), i = await this.connection.currentClient.query(n.query, n.variables).toPromise(), a = this.dataPath(`list${this.capitalizedApiIdentifier}`);
    let o;
    r === !1 ? o = Ft(i, a) : o = Be(i, a, r);
    const s = Vt(i, o);
    return Et.boot(this, s, { options: t, pageInfo: o.pageInfo })[0];
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
    const r = Jo(this.apiIdentifier, this.namespace, this.getRecordFromData(t, "create")), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise(), i = Ze(n, this.dataPath(`create${this.capitalizedApiIdentifier}`));
    return jt(n, i[this.apiIdentifier]);
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
      throw new Br("Cannot perform bulkCreate without a pluralApiIdentifier");
    const n = _e(this.options.pluralApiIdentifier), i = Yo(this.apiIdentifier, this.options.pluralApiIdentifier, this.namespace, t), a = await this.connection.currentClient.mutation(i.query, i.variables).toPromise(), o = Ze(a, this.dataPath(`bulkCreate${n}`));
    return an(a, o[this.options.pluralApiIdentifier]);
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
    $r(t, "Can't update a record without an ID passed");
    const n = Ho(this.apiIdentifier, this.namespace, t, this.getRecordFromData(r, "update")), i = await this.connection.currentClient.mutation(n.query, n.variables).toPromise(), a = Ze(i, this.dataPath(`update${this.capitalizedApiIdentifier}`));
    return jt(i, a[this.apiIdentifier]);
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
    $r(t, "Can't delete a record without an ID");
    const r = Zo(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise();
    Ze(n, this.dataPath(`delete${this.capitalizedApiIdentifier}`));
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
    const r = Xo(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.mutation(r.query, r.variables).toPromise();
    Ze(n, this.dataPath(`deleteMany${this.capitalizedApiIdentifier}`));
  }
  dataPath(t) {
    return ["internal", ...Xe([t], this.namespace)];
  }
}
function dn(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, n] of Object.entries(e))
    n && t.push(r);
  return t;
}
const Oe = (e, t, r, n) => {
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
            return await Ao(
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
            const l = await Hn(
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
          return await Zn(this, t, r, e, o);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        i.prototype[a.type] = Object.assign(async function(o) {
          const s = await Zn(
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
          return await Hn(this, a.operationName, void 0, r, e, o);
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
                    (c) => Di(this[a.singleActionFunctionName], void 0, c)
                  )
                }
              }, await Xn(
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
              const [d, c] = es(a, o, s, l);
              return await Xn(
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
function Di(e, t, r = {}) {
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
function es(e, t, r, n) {
  let i, a;
  t && (i = n.shift()), r && (a = n.shift());
  const o = n.shift();
  let s = a;
  (i || a) && (s = Di(e, i, a));
  const l = {};
  for (const [d, c] of Object.entries(e.variables))
    l[d] = {
      value: d == "id" ? i : s == null ? void 0 : s[d],
      ...c
    };
  return [l, o];
}
const be = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  email: !0,
  roles: { key: !0, name: !0 },
  updatedAt: !0
}, W = "user", Ge = "users", ts = Oe(
  W,
  Ge,
  be,
  [
    {
      type: "findOne",
      operationName: W,
      modelApiIdentifier: W,
      findByVariableName: "id",
      defaultSelection: be
    },
    {
      type: "maybeFindOne",
      operationName: W,
      modelApiIdentifier: W,
      findByVariableName: "id",
      defaultSelection: be
    },
    {
      type: "findMany",
      operationName: Ge,
      modelApiIdentifier: W,
      defaultSelection: be
    },
    {
      type: "findFirst",
      operationName: Ge,
      modelApiIdentifier: W,
      defaultSelection: be
    },
    {
      type: "maybeFindFirst",
      operationName: Ge,
      modelApiIdentifier: W,
      defaultSelection: be
    },
    {
      type: "findOne",
      operationName: Ge,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: W,
      defaultSelection: be
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
      defaultSelection: be
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
      modelSelectionField: Ge,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: be
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
      defaultSelection: be
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
      modelSelectionField: Ge,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: be
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
      modelSelectionField: Ge,
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
      defaultSelection: be
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
      modelSelectionField: Ge,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: be
    }
  ]
), xe = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, de = "session", ht = "sessions", rs = Oe(
  de,
  ht,
  xe,
  [
    {
      type: "findOne",
      operationName: de,
      modelApiIdentifier: de,
      findByVariableName: "id",
      defaultSelection: xe
    },
    {
      type: "maybeFindOne",
      operationName: de,
      modelApiIdentifier: de,
      findByVariableName: "id",
      defaultSelection: xe
    },
    {
      type: "findMany",
      operationName: ht,
      modelApiIdentifier: de,
      defaultSelection: xe
    },
    {
      type: "findFirst",
      operationName: ht,
      modelApiIdentifier: de,
      defaultSelection: xe
    },
    {
      type: "maybeFindFirst",
      operationName: ht,
      modelApiIdentifier: de,
      defaultSelection: xe
    },
    {
      type: "action",
      operationName: "logInViaEmail",
      functionName: "logInViaEmail",
      namespace: "currentSession",
      modelApiIdentifier: de,
      modelSelectionField: de,
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
      defaultSelection: xe
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
      modelApiIdentifier: de,
      modelSelectionField: ht,
      namespace: "currentSession",
      variables: {
        inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" }
      },
      defaultSelection: xe
    },
    {
      type: "action",
      operationName: "logOut",
      functionName: "logOut",
      namespace: "currentSession",
      modelApiIdentifier: de,
      modelSelectionField: de,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: xe
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
      modelApiIdentifier: de,
      modelSelectionField: ht,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: xe
    }
  ]
), Re = {
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
}, te = "shopifyProduct", tt = "shopifyProducts", ns = Oe(
  te,
  tt,
  Re,
  [
    {
      type: "findOne",
      operationName: te,
      modelApiIdentifier: te,
      findByVariableName: "id",
      defaultSelection: Re
    },
    {
      type: "maybeFindOne",
      operationName: te,
      modelApiIdentifier: te,
      findByVariableName: "id",
      defaultSelection: Re
    },
    {
      type: "findMany",
      operationName: tt,
      modelApiIdentifier: te,
      defaultSelection: Re
    },
    {
      type: "findFirst",
      operationName: tt,
      modelApiIdentifier: te,
      defaultSelection: Re
    },
    {
      type: "maybeFindFirst",
      operationName: tt,
      modelApiIdentifier: te,
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "createShopifyProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: te,
      modelSelectionField: te,
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
      defaultSelection: Re
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
      modelApiIdentifier: te,
      modelSelectionField: tt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" }
      },
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "updateShopifyProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: te,
      modelSelectionField: te,
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
      defaultSelection: Re
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
      modelApiIdentifier: te,
      modelSelectionField: tt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyProductsInput!]" }
      },
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "deleteShopifyProduct",
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
      operationName: "bulkDeleteShopifyProducts",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: te,
      modelSelectionField: tt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), De = {
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
}, re = "shopifyProductImage", rt = "shopifyProductImages", is = Oe(
  re,
  rt,
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
      operationName: rt,
      modelApiIdentifier: re,
      defaultSelection: De
    },
    {
      type: "findFirst",
      operationName: rt,
      modelApiIdentifier: re,
      defaultSelection: De
    },
    {
      type: "maybeFindFirst",
      operationName: rt,
      modelApiIdentifier: re,
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "createShopifyProductImage",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: re,
      modelSelectionField: re,
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
      defaultSelection: De
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
      modelApiIdentifier: re,
      modelSelectionField: rt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "updateShopifyProductImage",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: re,
      modelSelectionField: re,
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
      defaultSelection: De
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
      modelApiIdentifier: re,
      modelSelectionField: rt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "deleteShopifyProductImage",
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
      operationName: "bulkDeleteShopifyProductImages",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: re,
      modelSelectionField: rt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Fe = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  name: !0,
  position: !0,
  updatedAt: !0,
  values: !0
}, ne = "shopifyProductOption", nt = "shopifyProductOptions", as = Oe(
  ne,
  nt,
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
      operationName: nt,
      modelApiIdentifier: ne,
      defaultSelection: Fe
    },
    {
      type: "findFirst",
      operationName: nt,
      modelApiIdentifier: ne,
      defaultSelection: Fe
    },
    {
      type: "maybeFindFirst",
      operationName: nt,
      modelApiIdentifier: ne,
      defaultSelection: Fe
    },
    {
      type: "action",
      operationName: "createShopifyProductOption",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
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
      defaultSelection: Fe
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
      modelApiIdentifier: ne,
      modelSelectionField: nt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: Fe
    },
    {
      type: "action",
      operationName: "updateShopifyProductOption",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
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
      defaultSelection: Fe
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
      modelApiIdentifier: ne,
      modelSelectionField: nt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: Fe
    },
    {
      type: "action",
      operationName: "deleteShopifyProductOption",
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
      operationName: "bulkDeleteShopifyProductOptions",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ne,
      modelSelectionField: nt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), je = {
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
}, ie = "shopifyProductVariant", it = "shopifyProductVariants", os = Oe(
  ie,
  it,
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
      operationName: it,
      modelApiIdentifier: ie,
      defaultSelection: je
    },
    {
      type: "findFirst",
      operationName: it,
      modelApiIdentifier: ie,
      defaultSelection: je
    },
    {
      type: "maybeFindFirst",
      operationName: it,
      modelApiIdentifier: ie,
      defaultSelection: je
    },
    {
      type: "action",
      operationName: "createShopifyProductVariant",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
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
      defaultSelection: je
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
      modelApiIdentifier: ie,
      modelSelectionField: it,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: je
    },
    {
      type: "action",
      operationName: "updateShopifyProductVariant",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
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
      defaultSelection: je
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
      modelApiIdentifier: ie,
      modelSelectionField: it,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: je
    },
    {
      type: "action",
      operationName: "deleteShopifyProductVariant",
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
      operationName: "bulkDeleteShopifyProductVariants",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ie,
      modelSelectionField: it,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), fe = {
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
}, U = "shopifyShop", Le = "shopifyShops", ss = Oe(
  U,
  Le,
  fe,
  [
    {
      type: "findOne",
      operationName: U,
      modelApiIdentifier: U,
      findByVariableName: "id",
      defaultSelection: fe
    },
    {
      type: "maybeFindOne",
      operationName: U,
      modelApiIdentifier: U,
      findByVariableName: "id",
      defaultSelection: fe
    },
    {
      type: "findMany",
      operationName: Le,
      modelApiIdentifier: U,
      defaultSelection: fe
    },
    {
      type: "findFirst",
      operationName: Le,
      modelApiIdentifier: U,
      defaultSelection: fe
    },
    {
      type: "maybeFindFirst",
      operationName: Le,
      modelApiIdentifier: U,
      defaultSelection: fe
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
      defaultSelection: fe
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
      modelSelectionField: Le,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyShopsInput!]" }
      },
      defaultSelection: fe
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
      defaultSelection: fe
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
      modelSelectionField: Le,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyShopsInput!]" }
      },
      defaultSelection: fe
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
      modelSelectionField: Le,
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
      defaultSelection: fe
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
      modelSelectionField: Le,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkReinstallShopifyShopsInput!]" }
      },
      defaultSelection: fe
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
      defaultSelection: fe
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
      modelSelectionField: Le,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUninstallShopifyShopsInput!]" }
      },
      defaultSelection: fe
    }
  ]
), Me = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
}, ae = "productPairing", at = "productPairings", us = Oe(
  ae,
  at,
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
      operationName: at,
      modelApiIdentifier: ae,
      defaultSelection: Me
    },
    {
      type: "findFirst",
      operationName: at,
      modelApiIdentifier: ae,
      defaultSelection: Me
    },
    {
      type: "maybeFindFirst",
      operationName: at,
      modelApiIdentifier: ae,
      defaultSelection: Me
    },
    {
      type: "action",
      operationName: "createProductPairing",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
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
      defaultSelection: Me
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
      modelApiIdentifier: ae,
      modelSelectionField: at,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateProductPairingsInput!]" }
      },
      defaultSelection: Me
    },
    {
      type: "action",
      operationName: "updateProductPairing",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
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
      defaultSelection: Me
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
      modelApiIdentifier: ae,
      modelSelectionField: at,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateProductPairingsInput!]" }
      },
      defaultSelection: Me
    },
    {
      type: "action",
      operationName: "deleteProductPairing",
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
      operationName: "bulkDeleteProductPairings",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ae,
      modelSelectionField: at,
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
}, Z = "shopifySync", Je = "shopifySyncs", ls = Oe(
  Z,
  Je,
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
      operationName: Je,
      modelApiIdentifier: Z,
      defaultSelection: ge
    },
    {
      type: "findFirst",
      operationName: Je,
      modelApiIdentifier: Z,
      defaultSelection: ge
    },
    {
      type: "maybeFindFirst",
      operationName: Je,
      modelApiIdentifier: Z,
      defaultSelection: ge
    },
    {
      type: "findOne",
      operationName: Je,
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
      modelSelectionField: Je,
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
      modelSelectionField: Je,
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
      modelSelectionField: Je,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: ge
    }
  ]
), Ee = {
  __typename: !0,
  id: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  updatedAt: !0
}, X = "ambiguous", Ye = "ambiguouss", cs = Oe(
  X,
  Ye,
  Ee,
  [
    {
      type: "findOne",
      operationName: X,
      modelApiIdentifier: X,
      findByVariableName: "id",
      defaultSelection: Ee
    },
    {
      type: "maybeFindOne",
      operationName: X,
      modelApiIdentifier: X,
      findByVariableName: "id",
      defaultSelection: Ee
    },
    {
      type: "findMany",
      operationName: Ye,
      modelApiIdentifier: X,
      defaultSelection: Ee
    },
    {
      type: "findFirst",
      operationName: Ye,
      modelApiIdentifier: X,
      defaultSelection: Ee
    },
    {
      type: "maybeFindFirst",
      operationName: Ye,
      modelApiIdentifier: X,
      defaultSelection: Ee
    },
    {
      type: "findOne",
      operationName: Ye,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: X,
      defaultSelection: Ee
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
      defaultSelection: Ee
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
      modelSelectionField: Ye,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAmbiguousInput!]" } },
      defaultSelection: Ee
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
      defaultSelection: Ee
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
      modelSelectionField: Ye,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAmbiguousInput!]" } },
      defaultSelection: Ee
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
      modelSelectionField: Ye,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Pe = {
  __typename: !0,
  id: !0,
  createdAt: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, ee = "unambiguous", He = "unambiguouss", ds = Oe(
  ee,
  He,
  Pe,
  [
    {
      type: "findOne",
      operationName: ee,
      modelApiIdentifier: ee,
      findByVariableName: "id",
      defaultSelection: Pe
    },
    {
      type: "maybeFindOne",
      operationName: ee,
      modelApiIdentifier: ee,
      findByVariableName: "id",
      defaultSelection: Pe
    },
    {
      type: "findMany",
      operationName: He,
      modelApiIdentifier: ee,
      defaultSelection: Pe
    },
    {
      type: "findFirst",
      operationName: He,
      modelApiIdentifier: ee,
      defaultSelection: Pe
    },
    {
      type: "maybeFindFirst",
      operationName: He,
      modelApiIdentifier: ee,
      defaultSelection: Pe
    },
    {
      type: "findOne",
      operationName: He,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ee,
      defaultSelection: Pe
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
      defaultSelection: Pe
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
      modelSelectionField: He,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateUnambiguousInput!]" }
      },
      defaultSelection: Pe
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
      defaultSelection: Pe
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
      modelSelectionField: He,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateUnambiguousInput!]" }
      },
      defaultSelection: Pe
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
      modelSelectionField: He,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), ii = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, ai = "session", fs = "sessions", ps = Oe(
  ai,
  fs,
  ii,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: ii,
      modelApiIdentifier: ai
    }
  ]
);
var Fi;
const oi = "production", ys = "development", ms = Symbol.for("gadget/modelRelationships"), hs = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class bs {
  constructor(t) {
    var i;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[Fi] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (a) => await ei(
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
      async () => await ei(
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
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? hs() ?? ys).toLocaleLowerCase();
    let r;
    this.apiRoots[this.environment] ? r = this.apiRoots[this.environment] : r = `https://related-products-example${this.environment == oi ? "" : `--${this.environment}`}.gadget.app`;
    const n = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== oi) {
      const a = ({ forward: o }) => (s) => {
        const l = o(s);
        return Yr(
          l,
          St((d) => {
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
    if (this.connection = new xi({
      endpoint: new URL("api/graphql", r).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: n,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == Y.APIKey && !((i = t == null ? void 0 : t.authenticationMode) != null && i.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new ts(this.connection), this.session = new rs(this.connection), this.shopifyProduct = new ns(this.connection), this.shopifyProductImage = new is(this.connection), this.shopifyProductOption = new as(this.connection), this.shopifyProductVariant = new os(this.connection), this.shopifyShop = new ss(this.connection), this.productPairing = new us(this.connection), this.shopifySync = new ls(this.connection), this.ambiguous = new cs(this.connection), this.unambiguous = new ds(this.connection), this.currentSession = new ps(this.connection), this.internal = {
      user: new Ne("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new Ne("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new Ne("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new Ne("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new Ne("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new Ne("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new Ne("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new Ne("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new Ne("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new Ne("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new Ne("unambiguous", this.connection, {
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
    $r(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let i, a;
    return typeof n < "u" ? (i = r, a = n) : !t.variables || Object.keys(t.variables).length == 0 ? (i = {}, a = r) : (typeof r == "string" ? i = { id: r } : i = r, a = {}), await ko(this.connection, t, i, a);
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
    return new nr(this.connection, t, r);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
Fi = ms;
var ji = {}, mr = qe.createContext(ji);
mr.Provider;
mr.Consumer;
mr.displayName = "UrqlContext";
var gs = () => {
  var e = qe.useContext(mr);
  if (e === ji && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, vs = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, Ss = (e, t) => e === t || !(!e || !t || e.key !== t.key), Nr = (e, t) => {
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
      if (o === "operation" ? !Ss(n[o], i[o]) : n[o] !== i[o])
        return !0;
    return !1;
  })(e, r) ? r : e;
}, ws = (e, t) => {
  for (var r = 0, n = t.length; r < n; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}, Er = qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function si(e, t) {
  process.env.NODE_ENV !== "production" && Er && Er.ReactCurrentOwner && Er.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function Is(e, t) {
  var r = qe.useRef(void 0);
  return qe.useMemo(() => {
    var n = rr(e, t);
    return r.current !== void 0 && r.current.key === n.key ? r.current : (r.current = n, n);
  }, [e, t]);
}
var As = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    e.operations$ && lt((n) => {
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
}, ks = (e, t) => e.suspense && (!t || t.suspense !== !1);
function Os(e) {
  var t = gs(), r = As(t), n = ks(t, e.context), i = Is(e.query, e.variables), a = qe.useMemo(() => {
    if (e.pause)
      return null;
    var y = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return n ? It((h) => {
      r.set(i.key, h);
    })(y) : y;
  }, [r, t, i, n, e.pause, e.requestPolicy, e.context]), o = qe.useCallback((y, h) => {
    if (!y)
      return {
        fetching: !1
      };
    var b = r.get(i.key);
    if (b) {
      if (h && b != null && "then" in b)
        throw b;
    } else {
      var w, T = lt((S) => {
        b = S, w && w(b);
      })(ui(() => h && !w || !b)(y));
      if (b == null && h) {
        var j = new Promise((S) => {
          w = S;
        });
        throw r.set(i.key, j), j;
      } else
        T.unsubscribe();
    }
    return b || {
      fetching: !0
    };
  }, [r, i]), s = [t, i, e.requestPolicy, e.context, e.pause], [l, d] = qe.useState(() => [a, Nr(vs, o(a, n)), s]), c = l[1];
  a !== l[0] && ws(l[2], s) && d([a, c = Nr(l[1], o(a, n)), s]), qe.useEffect(() => {
    var y = l[0], h = l[2][1], b = !1, w = (j) => {
      b = !0, si(d, (S) => {
        var $ = Nr(S[1], j);
        return S[1] !== $ ? [S[0], $, S[2]] : S;
      });
    };
    if (y) {
      var T = lt(w)(zr(() => {
        w({
          fetching: !1
        });
      })(y));
      return b || w({
        fetching: !0
      }), () => {
        r.dispose(h.key), T.unsubscribe();
      };
    } else
      w({
        fetching: !1
      });
  }, [r, l[0], l[2][1]]);
  var f = qe.useCallback((y) => {
    var h = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...y
    };
    si(d, (b) => [n ? It((w) => {
      r.set(i.key, w);
    })(t.executeQuery(i, h)) : t.executeQuery(i, h), b[1], s]);
  }, [t, r, i, n, o, e.requestPolicy, e.context]);
  return [c, f];
}
const Ns = cr.createContext(void 0);
cr.createContext(void 0);
const Es = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Ps = (e, t) => {
  let r = "";
  return e !== void 0 ? r = `[Network] ${e.message}` : t !== void 0 ? t.forEach((n) => {
    r += `[GraphQL] ${n.message}
`;
  }) : r = "Unknown error", r.trim();
}, _s = (e) => typeof e == "string" ? new $t(e) : e != null && e.message && !e.code ? new $t(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class st extends Error {
  /** @private */
  static forClientSideError(t, r) {
    return new st({
      executionErrors: [t],
      response: r
    });
  }
  /** @private */
  static forErrorsResponse(t, r) {
    return new st({
      executionErrors: t.map(nn),
      response: r
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new st({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, r, n = !1) {
    const i = fo(t, r);
    let a = st.forMaybeCombinedError(t.error);
    return !a && i && !n && (a = st.forClientSideError(i)), a;
  }
  constructor({ networkError: t, executionErrors: r, response: n }) {
    const i = (r || []).map(_s), a = Ps(t, i);
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
const Ts = (e) => {
  const { context: t, suspense: r, ...n } = e ?? {}, i = Pr(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...n,
    context: i
  };
}, Cs = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), xs = (e) => {
  if (!oa(Ns))
    throw new Error(Es);
  const t = Ts(e);
  return Os(t);
};
var Rs = typeof Element < "u", Ds = typeof Map == "function", Fs = typeof Set == "function", js = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function ir(e, t) {
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
        if (!ir(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (Ds && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!ir(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Fs && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (js && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Rs && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !ir(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Ms = function(t, r) {
  try {
    return ir(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const qs = /* @__PURE__ */ ua(Ms), Bs = (e) => {
  const t = sa();
  return e ? (t.current === void 0 || !qs(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, $s = (e, t) => {
  const r = Bs(t), n = Pr(() => sn(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, r, e.findMany.namespace), [e, r]), [i, a] = xs(Cs(n, t));
  return [Pr(() => {
    const s = Xe([e.findMany.operationName], e.findMany.namespace);
    let l = i.data;
    if (l) {
      const c = Nt(i.data, s);
      if (c) {
        const f = Vt(i, c);
        l = Et.boot(e, f, c);
      }
    }
    const d = st.errorIfDataAbsent(i, s, t == null ? void 0 : t.pause);
    return { ...i, data: l, error: d };
  }, [e, t == null ? void 0 : t.pause, i]), a];
}, Vs = new bs(), Ls = () => {
  const [{ data: e }] = $s(Vs.shopifyProduct);
  return /* @__PURE__ */ Pn.jsx(Pn.Fragment, { children: JSON.stringify(e) });
};
export {
  Ls as R,
  Gs as c,
  ua as g
};
