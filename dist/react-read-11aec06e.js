import * as ze from "react";
import Mn, { useMemo as sr, useContext as ko, useRef as _o } from "react";
var Ec = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Po(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ur = { exports: {} }, Qt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fi;
function xo() {
  if (fi)
    return Qt;
  fi = 1;
  var e = Mn, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, l, d) {
    var c, f = {}, p = null, h = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (c in l)
      r.call(l, c) && !a.hasOwnProperty(c) && (f[c] = l[c]);
    if (s && s.defaultProps)
      for (c in l = s.defaultProps, l)
        f[c] === void 0 && (f[c] = l[c]);
    return { $$typeof: t, type: s, key: p, ref: h, props: f, _owner: i.current };
  }
  return Qt.Fragment = n, Qt.jsx = o, Qt.jsxs = o, Qt;
}
var Wt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pi;
function Do() {
  return pi || (pi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Mn, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, I = "@@iterator";
    function E(u) {
      if (u === null || typeof u != "object")
        return null;
      var b = m && u[m] || u[I];
      return typeof b == "function" ? b : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(u) {
      {
        for (var b = arguments.length, g = new Array(b > 1 ? b - 1 : 0), A = 1; A < b; A++)
          g[A - 1] = arguments[A];
        C("error", u, g);
      }
    }
    function C(u, b, g) {
      {
        var A = k.ReactDebugCurrentFrame, j = A.getStackAddendum();
        j !== "" && (b += "%s", g = g.concat([j]));
        var L = g.map(function(R) {
          return String(R);
        });
        L.unshift("Warning: " + b), Function.prototype.apply.call(console[u], console, L);
      }
    }
    var y = !1, N = !1, v = !1, U = !1, Ze = !1, Nt;
    Nt = Symbol.for("react.module.reference");
    function At(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === r || u === a || Ze || u === i || u === d || u === c || U || u === h || y || N || v || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === f || u.$$typeof === o || u.$$typeof === s || u.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === Nt || u.getModuleId !== void 0));
    }
    function fn(u, b, g) {
      var A = u.displayName;
      if (A)
        return A;
      var j = b.displayName || b.name || "";
      return j !== "" ? g + "(" + j + ")" : g;
    }
    function Gt(u) {
      return u.displayName || "Context";
    }
    function Oe(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
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
      if (typeof u == "object")
        switch (u.$$typeof) {
          case s:
            var b = u;
            return Gt(b) + ".Consumer";
          case o:
            var g = u;
            return Gt(g._context) + ".Provider";
          case l:
            return fn(u, u.render, "ForwardRef");
          case f:
            var A = u.displayName || null;
            return A !== null ? A : Oe(u.type) || "Memo";
          case p: {
            var j = u, L = j._payload, R = j._init;
            try {
              return Oe(R(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, q = 0, $, F, z, $e, M, Je, et;
    function ct() {
    }
    ct.__reactDisabledLog = !0;
    function tt() {
      {
        if (q === 0) {
          $ = console.log, F = console.info, z = console.warn, $e = console.error, M = console.group, Je = console.groupCollapsed, et = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: ct,
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
    function te() {
      {
        if (q--, q === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, u, {
              value: $
            }),
            info: O({}, u, {
              value: F
            }),
            warn: O({}, u, {
              value: z
            }),
            error: O({}, u, {
              value: $e
            }),
            group: O({}, u, {
              value: M
            }),
            groupCollapsed: O({}, u, {
              value: Je
            }),
            groupEnd: O({}, u, {
              value: et
            })
          });
        }
        q < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = k.ReactCurrentDispatcher, pn;
    function Ot(u, b, g) {
      {
        if (pn === void 0)
          try {
            throw Error();
          } catch (j) {
            var A = j.stack.trim().match(/\n( *(at )?)/);
            pn = A && A[1] || "";
          }
        return `
` + pn + u;
      }
    }
    var Qn = !1, hn;
    {
      var io = typeof WeakMap == "function" ? WeakMap : Map;
      hn = new io();
    }
    function Xr(u, b) {
      if (!u || Qn)
        return "";
      {
        var g = hn.get(u);
        if (g !== void 0)
          return g;
      }
      var A;
      Qn = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = J.current, J.current = null, tt();
      try {
        if (b) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (Ye) {
              A = Ye;
            }
            Reflect.construct(u, [], R);
          } else {
            try {
              R.call();
            } catch (Ye) {
              A = Ye;
            }
            u.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ye) {
            A = Ye;
          }
          u();
        }
      } catch (Ye) {
        if (Ye && A && typeof Ye.stack == "string") {
          for (var P = Ye.stack.split(`
`), pe = A.stack.split(`
`), Y = P.length - 1, X = pe.length - 1; Y >= 1 && X >= 0 && P[Y] !== pe[X]; )
            X--;
          for (; Y >= 1 && X >= 0; Y--, X--)
            if (P[Y] !== pe[X]) {
              if (Y !== 1 || X !== 1)
                do
                  if (Y--, X--, X < 0 || P[Y] !== pe[X]) {
                    var Ee = `
` + P[Y].replace(" at new ", " at ");
                    return u.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", u.displayName)), typeof u == "function" && hn.set(u, Ee), Ee;
                  }
                while (Y >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        Qn = !1, J.current = L, te(), Error.prepareStackTrace = j;
      }
      var Tt = u ? u.displayName || u.name : "", di = Tt ? Ot(Tt) : "";
      return typeof u == "function" && hn.set(u, di), di;
    }
    function ao(u, b, g) {
      return Xr(u, !1);
    }
    function oo(u) {
      var b = u.prototype;
      return !!(b && b.isReactComponent);
    }
    function mn(u, b, g) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return Xr(u, oo(u));
      if (typeof u == "string")
        return Ot(u);
      switch (u) {
        case d:
          return Ot("Suspense");
        case c:
          return Ot("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            return ao(u.render);
          case f:
            return mn(u.type, b, g);
          case p: {
            var A = u, j = A._payload, L = A._init;
            try {
              return mn(L(j), b, g);
            } catch {
            }
          }
        }
      return "";
    }
    var yn = Object.prototype.hasOwnProperty, Zr = {}, ei = k.ReactDebugCurrentFrame;
    function bn(u) {
      if (u) {
        var b = u._owner, g = mn(u.type, u._source, b ? b.type : null);
        ei.setExtraStackFrame(g);
      } else
        ei.setExtraStackFrame(null);
    }
    function so(u, b, g, A, j) {
      {
        var L = Function.call.bind(yn);
        for (var R in u)
          if (L(u, R)) {
            var P = void 0;
            try {
              if (typeof u[R] != "function") {
                var pe = Error((A || "React class") + ": " + g + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pe.name = "Invariant Violation", pe;
              }
              P = u[R](b, R, A, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              P = Y;
            }
            P && !(P instanceof Error) && (bn(j), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", g, R, typeof P), bn(null)), P instanceof Error && !(P.message in Zr) && (Zr[P.message] = !0, bn(j), w("Failed %s type: %s", g, P.message), bn(null));
          }
      }
    }
    var uo = Array.isArray;
    function Wn(u) {
      return uo(u);
    }
    function lo(u) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, g = b && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return g;
      }
    }
    function co(u) {
      try {
        return ti(u), !1;
      } catch {
        return !0;
      }
    }
    function ti(u) {
      return "" + u;
    }
    function ni(u) {
      if (co(u))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lo(u)), ti(u);
    }
    var zt = k.ReactCurrentOwner, fo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ri, ii, Jn;
    Jn = {};
    function po(u) {
      if (yn.call(u, "ref")) {
        var b = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function ho(u) {
      if (yn.call(u, "key")) {
        var b = Object.getOwnPropertyDescriptor(u, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function mo(u, b) {
      if (typeof u.ref == "string" && zt.current && b && zt.current.stateNode !== b) {
        var g = Oe(zt.current.type);
        Jn[g] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Oe(zt.current.type), u.ref), Jn[g] = !0);
      }
    }
    function yo(u, b) {
      {
        var g = function() {
          ri || (ri = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        g.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function bo(u, b) {
      {
        var g = function() {
          ii || (ii = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        g.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var go = function(u, b, g, A, j, L, R) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: b,
        ref: g,
        props: R,
        // Record the component responsible for creating this element.
        _owner: L
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
        value: A
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function vo(u, b, g, A, j) {
      {
        var L, R = {}, P = null, pe = null;
        g !== void 0 && (ni(g), P = "" + g), ho(b) && (ni(b.key), P = "" + b.key), po(b) && (pe = b.ref, mo(b, j));
        for (L in b)
          yn.call(b, L) && !fo.hasOwnProperty(L) && (R[L] = b[L]);
        if (u && u.defaultProps) {
          var Y = u.defaultProps;
          for (L in Y)
            R[L] === void 0 && (R[L] = Y[L]);
        }
        if (P || pe) {
          var X = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          P && yo(R, X), pe && bo(R, X);
        }
        return go(u, P, pe, j, A, zt.current, R);
      }
    }
    var Yn = k.ReactCurrentOwner, ai = k.ReactDebugCurrentFrame;
    function Et(u) {
      if (u) {
        var b = u._owner, g = mn(u.type, u._source, b ? b.type : null);
        ai.setExtraStackFrame(g);
      } else
        ai.setExtraStackFrame(null);
    }
    var Hn;
    Hn = !1;
    function Kn(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function oi() {
      {
        if (Yn.current) {
          var u = Oe(Yn.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function So(u) {
      {
        if (u !== void 0) {
          var b = u.fileName.replace(/^.*[\\\/]/, ""), g = u.lineNumber;
          return `

Check your code at ` + b + ":" + g + ".";
        }
        return "";
      }
    }
    var si = {};
    function Io(u) {
      {
        var b = oi();
        if (!b) {
          var g = typeof u == "string" ? u : u.displayName || u.name;
          g && (b = `

Check the top-level render call using <` + g + ">.");
        }
        return b;
      }
    }
    function ui(u, b) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var g = Io(b);
        if (si[g])
          return;
        si[g] = !0;
        var A = "";
        u && u._owner && u._owner !== Yn.current && (A = " It was passed a child from " + Oe(u._owner.type) + "."), Et(u), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, A), Et(null);
      }
    }
    function li(u, b) {
      {
        if (typeof u != "object")
          return;
        if (Wn(u))
          for (var g = 0; g < u.length; g++) {
            var A = u[g];
            Kn(A) && ui(A, b);
          }
        else if (Kn(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var j = E(u);
          if (typeof j == "function" && j !== u.entries)
            for (var L = j.call(u), R; !(R = L.next()).done; )
              Kn(R.value) && ui(R.value, b);
        }
      }
    }
    function wo(u) {
      {
        var b = u.type;
        if (b == null || typeof b == "string")
          return;
        var g;
        if (typeof b == "function")
          g = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === f))
          g = b.propTypes;
        else
          return;
        if (g) {
          var A = Oe(b);
          so(g, u.props, "prop", A, u);
        } else if (b.PropTypes !== void 0 && !Hn) {
          Hn = !0;
          var j = Oe(b);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function No(u) {
      {
        for (var b = Object.keys(u.props), g = 0; g < b.length; g++) {
          var A = b[g];
          if (A !== "children" && A !== "key") {
            Et(u), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), Et(null);
            break;
          }
        }
        u.ref !== null && (Et(u), w("Invalid attribute `ref` supplied to `React.Fragment`."), Et(null));
      }
    }
    function ci(u, b, g, A, j, L) {
      {
        var R = At(u);
        if (!R) {
          var P = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = So(j);
          pe ? P += pe : P += oi();
          var Y;
          u === null ? Y = "null" : Wn(u) ? Y = "array" : u !== void 0 && u.$$typeof === t ? (Y = "<" + (Oe(u.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof u, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, P);
        }
        var X = vo(u, b, g, j, L);
        if (X == null)
          return X;
        if (R) {
          var Ee = b.children;
          if (Ee !== void 0)
            if (A)
              if (Wn(Ee)) {
                for (var Tt = 0; Tt < Ee.length; Tt++)
                  li(Ee[Tt], u);
                Object.freeze && Object.freeze(Ee);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              li(Ee, u);
        }
        return u === r ? No(X) : wo(X), X;
      }
    }
    function Ao(u, b, g) {
      return ci(u, b, g, !0);
    }
    function Oo(u, b, g) {
      return ci(u, b, g, !1);
    }
    var Eo = Oo, To = Ao;
    Wt.Fragment = r, Wt.jsx = Eo, Wt.jsxs = To;
  }()), Wt;
}
process.env.NODE_ENV === "production" ? ur.exports = xo() : ur.exports = Do();
var hi = ur.exports, Pr = () => {
}, Ie = Pr;
function Ce(e) {
  return {
    tag: 0,
    0: e
  };
}
function sn(e) {
  return {
    tag: 1,
    0: e
  };
}
var Fo = (e) => e;
function re(e) {
  return (t) => (n) => {
    var r = Ie;
    t((i) => {
      i === 0 ? n(0) : i.tag === 0 ? (r = i[0], n(i)) : e(i[0]) ? n(i) : r(0);
    });
  };
}
function Dt(e) {
  return (t) => (n) => t((r) => {
    r === 0 || r.tag === 0 ? n(r) : n(sn(e(r[0])));
  });
}
function nn(e) {
  return (t) => (n) => {
    var r = [], i = Ie, a = !1, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, r.length || n(0)) : s.tag === 0 ? i = s[0] : (a = !1, function(d) {
        var c = Ie;
        d((f) => {
          if (f === 0) {
            if (r.length) {
              var p = r.indexOf(c);
              p > -1 && (r = r.slice()).splice(p, 1), r.length || (o ? n(0) : a || (a = !0, i(0)));
            }
          } else
            f.tag === 0 ? (r.push(c = f[0]), c(0)) : r.length && (n(f), c(0));
        });
      }(e(s[0])), a || (a = !0, i(0))));
    }), n(Ce((s) => {
      if (s === 1) {
        o || (o = !0, i(1));
        for (var l = 0, d = r, c = r.length; l < c; l++)
          d[l](1);
        r.length = 0;
      } else {
        !o && !a ? (a = !0, i(0)) : a = !1;
        for (var f = 0, p = r, h = r.length; f < h; f++)
          p[f](0);
      }
    }));
  };
}
function Ro(e) {
  return nn(Fo)(e);
}
function Ct(e) {
  return Ro(Mo(e));
}
function xr(e) {
  return (t) => (n) => {
    var r = !1;
    t((i) => {
      if (!r)
        if (i === 0)
          r = !0, n(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          n(Ce((o) => {
            o === 1 ? (r = !0, a(1), e()) : a(o);
          }));
        } else
          n(i);
    });
  };
}
function jt(e) {
  return (t) => (n) => {
    var r = !1;
    t((i) => {
      if (!r)
        if (i === 0)
          r = !0, n(0);
        else if (i.tag === 0) {
          var a = i[0];
          n(Ce((o) => {
            o === 1 && (r = !0), a(o);
          }));
        } else
          e(i[0]), n(i);
    });
  };
}
function mi(e) {
  return (t) => (n) => t((r) => {
    r === 0 ? n(0) : r.tag === 0 ? (n(r), e()) : n(r);
  });
}
function rn(e) {
  var t = [], n = Ie, r = !1;
  return (i) => {
    t.push(i), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var o = 0, s = t, l = t.length; o < l; o++)
          s[o](0);
        t.length = 0;
      } else if (a.tag === 0)
        n = a[0];
      else {
        r = !1;
        for (var d = 0, c = t, f = t.length; d < f; d++)
          c[d](a);
      }
    }), i(Ce((a) => {
      if (a === 1) {
        var o = t.indexOf(i);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || n(1);
      } else
        r || (r = !0, n(0));
    }));
  };
}
function yi(e) {
  return (t) => (n) => {
    var r = Ie, i = Ie, a = !1, o = !1, s = !1, l = !1;
    t((d) => {
      l || (d === 0 ? (l = !0, s || n(0)) : d.tag === 0 ? r = d[0] : (s && (i(1), i = Ie), a ? a = !1 : (a = !0, r(0)), function(f) {
        s = !0, f((p) => {
          s && (p === 0 ? (s = !1, l ? n(0) : a || (a = !0, r(0))) : p.tag === 0 ? (o = !1, (i = p[0])(0)) : (n(p), o ? o = !1 : i(0)));
        });
      }(e(d[0]))));
    }), n(Ce((d) => {
      d === 1 ? (l || (l = !0, r(1)), s && (s = !1, i(1))) : (!l && !a && (a = !0, r(0)), s && !o && (o = !0, i(0)));
    }));
  };
}
function $n(e) {
  return (t) => (n) => {
    var r = Ie, i = !1, a = 0;
    t((o) => {
      i || (o === 0 ? (i = !0, n(0)) : o.tag === 0 ? e <= 0 ? (i = !0, n(0), o[0](1)) : r = o[0] : a++ < e ? (n(o), !i && a >= e && (i = !0, n(0), r(1))) : n(o));
    }), n(Ce((o) => {
      o === 1 && !i ? (i = !0, r(1)) : o === 0 && !i && a < e && r(0);
    }));
  };
}
function Dr(e) {
  return (t) => (n) => {
    var r = Ie, i = Ie, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, i(1), n(0)) : o.tag === 0 ? (r = o[0], e((s) => {
        s === 0 || (s.tag === 0 ? (i = s[0])(0) : (a = !0, i(1), r(1), n(0)));
      })) : n(o));
    }), n(Ce((o) => {
      o === 1 && !a ? (a = !0, r(1), i(1)) : a || r(0);
    }));
  };
}
function ua(e, t) {
  return (n) => (r) => {
    var i = Ie, a = !1;
    n((o) => {
      a || (o === 0 ? (a = !0, r(0)) : o.tag === 0 ? (i = o[0], r(o)) : e(o[0]) ? r(o) : (a = !0, t && r(o), r(0), i(1)));
    });
  };
}
function Co(e) {
  return (t) => e()(t);
}
function la(e) {
  return (t) => {
    var n = e[Symbol.asyncIterator](), r = !1, i = !1, a = !1, o;
    t(Ce(async (s) => {
      if (s === 1)
        r = !0, n.return && n.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !r; )
          if ((o = await n.next()).done)
            r = !0, n.return && await n.return(), t(0);
          else
            try {
              a = !1, t(sn(o.value));
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
function jo(e) {
  return e[Symbol.asyncIterator] ? la(e) : (t) => {
    var n = e[Symbol.iterator](), r = !1, i = !1, a = !1, o;
    t(Ce((s) => {
      if (s === 1)
        r = !0, n.return && n.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !r; )
          if ((o = n.next()).done)
            r = !0, n.return && n.return(), t(0);
          else
            try {
              a = !1, t(sn(o.value));
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
var Mo = jo;
function Kt(e) {
  return (t) => {
    var n = !1;
    t(Ce((r) => {
      r === 1 ? n = !0 : n || (n = !0, t(sn(e)), t(0));
    }));
  };
}
function Fr(e) {
  return (t) => {
    var n = !1, r = e({
      next(i) {
        n || t(sn(i));
      },
      complete() {
        n || (n = !0, t(0));
      }
    });
    t(Ce((i) => {
      i === 1 && !n && (n = !0, r());
    }));
  };
}
function bi() {
  var e, t;
  return {
    source: rn(Fr((n) => (e = n.next, t = n.complete, Pr))),
    next(n) {
      e && e(n);
    },
    complete() {
      t && t();
    }
  };
}
function gi(e) {
  return Fr((t) => (e.then((n) => {
    Promise.resolve(n).then(() => {
      t.next(n), t.complete();
    });
  }), Pr));
}
function St(e) {
  return (t) => {
    var n = Ie, r = !1;
    return t((i) => {
      i === 0 ? r = !0 : i.tag === 0 ? (n = i[0])(0) : r || (e(i[0]), n(0));
    }), {
      unsubscribe() {
        r || (r = !0, n(1));
      }
    };
  };
}
function $o(e) {
  St((t) => {
  })(e);
}
var Xn = {
  done: !0
}, Vo = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], n = !1, r = Ie, i;
    return e((a) => {
      n || (a === 0 ? (i && (i = i(Xn)), n = !0) : a.tag === 0 ? (r = a[0])(0) : i ? i = i({
        value: a[0],
        done: !1
      }) : t.push(a[0]));
    }), {
      async next() {
        return n && !t.length ? Xn : (!n && t.length <= 1 && r(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((a) => i = a));
      },
      async return() {
        return n || (i = r(1)), n = !0, Xn;
      }
    };
  }
});
function Rr(e) {
  return new Promise((t) => {
    var n = Ie, r;
    e((i) => {
      i === 0 ? Promise.resolve(r).then(t) : i.tag === 0 ? (n = i[0])(0) : (r = i[0], n(0));
    });
  });
}
var Cr = (...e) => {
  for (var t = e[0], n = 1, r = e.length; n < r; n++)
    t = e[n](t);
  return t;
}, xt = {
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
let lr = class extends Error {
  constructor(t, n, r, i, a, o, s) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), n && (this.nodes = Array.isArray(n) ? n : [n]), r && (this.source = r), i && (this.positions = i), o && (this.originalError = o);
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
};
var G, T;
function ee(e) {
  return new lr(`Syntax Error: Unexpected token at ${T} in ${e}`);
}
function Ae(e) {
  if (e.lastIndex = T, e.test(G))
    return G.slice(T, T = e.lastIndex);
}
var gn = / +(?=[^\s])/y;
function Lo(e) {
  for (var t = e.split(`
`), n = "", r = 0, i = 0, a = t.length - 1, o = 0; o < t.length; o++)
    gn.lastIndex = 0, gn.test(t[o]) && (o && (!r || gn.lastIndex < r) && (r = gn.lastIndex), i = i || o, a = o);
  for (var s = i; s <= a; s++)
    s !== i && (n += `
`), n += t[s].slice(r).replace(/\\"""/g, '"""');
  return n;
}
function _() {
  for (var e = 0 | G.charCodeAt(T++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | G.charCodeAt(T++))
    if (e === 35)
      for (; (e = G.charCodeAt(T++)) !== 10 && e !== 13; )
        ;
  T--;
}
var ca = /[_A-Za-z]\w*/y;
function We() {
  var e;
  if (e = Ae(ca))
    return {
      kind: "Name",
      value: e
    };
}
var Bo = /(?:null|true|false)/y, da = /\$[_A-Za-z]\w*/y, Uo = /-?\d+/y, qo = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Go = /\\/g, zo = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Qo = /"(?:"|[^\r\n]*?[^\\]")/y;
function Pn(e) {
  var t, n;
  if (n = Ae(Bo))
    t = n === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: n === "true"
    };
  else if (!e && (n = Ae(da)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: n.slice(1)
      }
    };
  else if (n = Ae(Uo)) {
    var r = n;
    (n = Ae(qo)) ? t = {
      kind: "FloatValue",
      value: r + n
    } : t = {
      kind: "IntValue",
      value: r
    };
  } else if (n = Ae(ca))
    t = {
      kind: "EnumValue",
      value: n
    };
  else if (n = Ae(zo))
    t = {
      kind: "StringValue",
      value: Lo(n.slice(3, -3)),
      block: !0
    };
  else if (n = Ae(Qo))
    t = {
      kind: "StringValue",
      value: Go.test(n) ? JSON.parse(n) : n.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (G.charCodeAt(T) === 91) {
      T++, _();
      for (var s = []; o = Pn(a); )
        s.push(o);
      if (G.charCodeAt(T++) !== 93)
        throw ee("ListValue");
      return _(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (G.charCodeAt(T) === 123) {
      T++, _();
      for (var o = [], s; s = We(); ) {
        if (_(), G.charCodeAt(T++) !== 58)
          throw ee("ObjectField");
        _();
        var l = Pn(a);
        if (!l)
          throw ee("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: l
        });
      }
      if (G.charCodeAt(T++) !== 125)
        throw ee("ObjectValue");
      return _(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return _(), t;
}
function fa(e) {
  var t = [];
  if (_(), G.charCodeAt(T) === 40) {
    T++, _();
    for (var n; n = We(); ) {
      if (_(), G.charCodeAt(T++) !== 58)
        throw ee("Argument");
      _();
      var r = Pn(e);
      if (!r)
        throw ee("Argument");
      t.push({
        kind: "Argument",
        name: n,
        value: r
      });
    }
    if (!t.length || G.charCodeAt(T++) !== 41)
      throw ee("Argument");
    _();
  }
  return t;
}
function Mt(e) {
  var t = [];
  for (_(); G.charCodeAt(T) === 64; ) {
    T++;
    var n = We();
    if (!n)
      throw ee("Directive");
    _(), t.push({
      kind: "Directive",
      name: n,
      arguments: fa(e)
    });
  }
  return t;
}
function Wo() {
  var e = We();
  if (e) {
    _();
    var t;
    if (G.charCodeAt(T) === 58) {
      if (T++, _(), t = e, !(e = We()))
        throw ee("Field");
      _();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: fa(!1),
      directives: Mt(!1),
      selectionSet: Vn()
    };
  }
}
function pa() {
  var e;
  if (_(), G.charCodeAt(T) === 91) {
    T++, _();
    var t = pa();
    if (!t || G.charCodeAt(T++) !== 93)
      throw ee("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = We())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw ee("NamedType");
  return _(), G.charCodeAt(T) === 33 ? (T++, _(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Jo = /on/y;
function ha() {
  if (Ae(Jo)) {
    _();
    var e = We();
    if (!e)
      throw ee("NamedType");
    return _(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Yo = /\.\.\./y;
function Ho() {
  if (Ae(Yo)) {
    _();
    var e = T, t;
    if ((t = We()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Mt(!1)
      };
    T = e;
    var n = ha(), r = Mt(!1), i = Vn();
    if (!i)
      throw ee("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: n,
      directives: r,
      selectionSet: i
    };
  }
}
function Vn() {
  var e;
  if (_(), G.charCodeAt(T) === 123) {
    T++, _();
    for (var t = []; e = Ho() || Wo(); )
      t.push(e);
    if (!t.length || G.charCodeAt(T++) !== 125)
      throw ee("SelectionSet");
    return _(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Ko = /fragment/y;
function Xo() {
  if (Ae(Ko)) {
    _();
    var e = We();
    if (!e)
      throw ee("FragmentDefinition");
    _();
    var t = ha();
    if (!t)
      throw ee("FragmentDefinition");
    var n = Mt(!1), r = Vn();
    if (!r)
      throw ee("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: n,
      selectionSet: r
    };
  }
}
var Zo = /(?:query|mutation|subscription)/y;
function es() {
  var e, t, n = [], r = [];
  (e = Ae(Zo)) && (_(), t = We(), n = function() {
    var o, s = [];
    if (_(), G.charCodeAt(T) === 40) {
      for (T++, _(); o = Ae(da); ) {
        if (_(), G.charCodeAt(T++) !== 58)
          throw ee("VariableDefinition");
        var l = pa(), d = void 0;
        if (G.charCodeAt(T) === 61 && (T++, _(), !(d = Pn(!0))))
          throw ee("VariableDefinition");
        _(), s.push({
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
          directives: Mt(!0)
        });
      }
      if (G.charCodeAt(T++) !== 41)
        throw ee("VariableDefinition");
      _();
    }
    return s;
  }(), r = Mt(!1));
  var i = Vn();
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
function ts(e, t) {
  return G = typeof e.body == "string" ? e.body : e, T = 0, function() {
    var r;
    _();
    for (var i = []; r = Xo() || es(); )
      i.push(r);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function ns(e) {
  return JSON.stringify(e);
}
function rs(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var Te = (e) => !(!e || !e.length), fe = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !Te(e.variableDefinitions) && !Te(e.directives))
      return fe.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), Te(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(fe.VariableDefinition).join(", ") + ")"), Te(e.directives) && (t += " " + e.directives.map(fe.Directive).join(" ")), t + " " + fe.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = fe.Variable(e.variable) + ": " + ke(e.type);
    return e.defaultValue && (t += " = " + ke(e.defaultValue)), Te(e.directives) && (t += " " + e.directives.map(fe.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (Te(e.arguments)) {
      var n = e.arguments.map(fe.Argument), r = t + "(" + n.join(", ") + ")";
      t = r.length > 80 ? t + `(
  ` + n.join(`
`).replace(/\n/g, `
  `) + `
)` : r;
    }
    return Te(e.directives) && (t += " " + e.directives.map(fe.Directive).join(" ")), e.selectionSet ? t + " " + fe.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? rs(e.value) : ns(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(ke).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(fe.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + ke(e.value),
  Document: (e) => Te(e.definitions) ? e.definitions.map(ke).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(ke).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + ke(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return Te(e.directives) && (t += " " + e.directives.map(fe.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), Te(e.directives) && (t += " " + e.directives.map(fe.Directive).join(" ")), t + " " + ke(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, Te(e.directives) && (t += " " + e.directives.map(fe.Directive).join(" ")), t + " " + ke(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return Te(e.arguments) && (t += "(" + e.arguments.map(fe.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + ke(e.type) + "]",
  NonNullType: (e) => ke(e.type) + "!"
};
function ke(e) {
  return fe[e.kind] ? fe[e.kind](e) : "";
}
var is = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new lr(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new lr(e);
class un extends Error {
  constructor(t) {
    var n = (t.graphQLErrors || []).map(is), r = ((i, a) => {
      var o = "";
      if (i)
        return `[Network] ${i.message}`;
      if (a)
        for (var s of a)
          o && (o += `
`), o += `[GraphQL] ${s.message}`;
      return o;
    })(t.networkError, n);
    super(r), this.name = "CombinedError", this.message = r, this.graphQLErrors = n, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var cr = (e, t) => {
  for (var n = 0 | (t || 5381), r = 0, i = 0 | e.length; r < i; r++)
    n = (n << 5) + n + e.charCodeAt(r);
  return n;
}, vt = /* @__PURE__ */ new Set(), vi = /* @__PURE__ */ new WeakMap(), _t = (e) => {
  if (e === null || vt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return _t(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var n of e)
      t.length > 1 && (t += ","), t += _t(n) || "null";
    return t += "]";
  } else if (Dn !== $t && e instanceof Dn || Fn !== $t && e instanceof Fn)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var i = vi.get(e) || Math.random().toString(36).slice(2);
    return vi.set(e, i), _t({
      __key: i
    });
  }
  vt.add(e);
  var a = "{";
  for (var o of r) {
    var s = _t(e[o]);
    s && (a.length > 1 && (a += ","), a += _t(o) + ":" + s);
  }
  return vt.delete(e), a += "}";
}, dr = (e, t, n) => {
  if (!(n == null || typeof n != "object" || n.toJSON || vt.has(n)))
    if (Array.isArray(n))
      for (var r = 0, i = n.length; r < i; r++)
        dr(e, `${t}.${r}`, n[r]);
    else if (n instanceof Dn || n instanceof Fn)
      e.set(t, n);
    else {
      vt.add(n);
      for (var a of Object.keys(n))
        dr(e, `${t}.${a}`, n[a]);
    }
}, xn = (e) => (vt.clear(), _t(e));
class $t {
}
var Dn = typeof File < "u" ? File : $t, Fn = typeof Blob < "u" ? Blob : $t, as = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, os = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, ss = (e, t) => t % 2 == 0 ? e.replace(os, `
`) : e, Si = (e) => e.split(as).map(ss).join("").trim(), Ii = /* @__PURE__ */ new Map(), On = /* @__PURE__ */ new Map(), jr = (e) => {
  var t;
  return typeof e == "string" ? t = Si(e) : e.loc && On.get(e.__key) === e ? t = e.loc.source.body : (t = Ii.get(e) || Si(ke(e)), Ii.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, wi = (e) => {
  var t = cr(jr(e));
  if (e.definitions) {
    var n = ya(e);
    n && (t = cr(`
# ${n}`, t));
  }
  return t;
}, ma = (e) => {
  var t, n;
  return typeof e == "string" ? (t = wi(e), n = On.get(t) || ts(e)) : (t = e.__key || wi(e), n = On.get(t) || e), n.loc || jr(n), n.__key = t, On.set(t, n), n;
}, En = (e, t, n) => {
  var r = t || {}, i = ma(e), a = xn(r), o = i.__key;
  return a !== "{}" && (o = cr(a, o)), {
    key: o,
    query: i,
    variables: r,
    extensions: n
  };
}, ya = (e) => {
  for (var t of e.definitions)
    if (t.kind === xt.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, us = (e) => {
  for (var t of e.definitions)
    if (t.kind === xt.OPERATION_DEFINITION)
      return t.operation;
}, fr = (e, t, n) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var r = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new un({
      graphQLErrors: t.errors,
      response: n
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? r : t.hasNext,
    stale: !1
  };
}, pr = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var n of Object.keys(t))
      e[n] = pr(e[n], t[n]);
    return e;
  }
  return t;
}, hr = (e, t, n) => {
  var r = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, o = t.incremental;
  "path" in t && (o = [t]);
  var s = {
    data: e.data
  };
  if (o)
    for (var l of o) {
      Array.isArray(l.errors) && r.push(...l.errors), l.extensions && (Object.assign(a, l.extensions), i = !0);
      for (var d = "data", c = s, f = 0, p = l.path.length; f < p; d = l.path[f++])
        c = c[d] = Array.isArray(c[d]) ? [...c[d]] : {
          ...c[d]
        };
      if (l.items)
        for (var h = +d >= 0 ? d : 0, m = 0, I = l.items.length; m < I; m++)
          c[h + m] = pr(c[h + m], l.items[m]);
      else
        l.data !== void 0 && (c[d] = pr(c[d], l.data));
    }
  else
    s.data = t.data || e.data, r = t.errors || r;
  return {
    operation: e.operation,
    data: s.data,
    error: r.length ? new un({
      graphQLErrors: r,
      response: n
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, ba = (e, t, n) => ({
  operation: e,
  data: void 0,
  error: new un({
    networkError: t,
    response: n
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function ga(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : jr(e.query),
    operationName: ya(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var ls = (e, t) => {
  var n = e.kind === "query" && e.context.preferGetMethod;
  if (!n || !t)
    return e.context.url;
  var r = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && r.searchParams.set(i, typeof a == "object" ? xn(a) : a);
  }
  var o = r.toString();
  return o.length > 2047 && n !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, cs = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var n = xn(t), r = ((s) => {
      var l = /* @__PURE__ */ new Map();
      return (Dn !== $t || Fn !== $t) && (vt.clear(), dr(l, "variables", s)), l;
    })(t.variables);
    if (r.size) {
      var i = new FormData();
      i.append("operations", n), i.append("map", xn({
        ...[...r.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of r.values())
        i.append("" + a++, o);
      return i;
    }
    return n;
  }
}, ds = (e, t) => {
  var n = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, r = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (r.headers)
    for (var i in r.headers)
      n[i.toLowerCase()] = r.headers[i];
  var a = cs(e, t);
  return typeof a == "string" && !n["content-type"] && (n["content-type"] = "application/json"), {
    ...r,
    method: a ? "POST" : "GET",
    body: a,
    headers: n
  };
}, fs = typeof TextDecoder < "u" ? new TextDecoder() : null, ps = /boundary="?([^=";]+)"?/i, hs = /data: ?([^\n]+)/, Ni = (e) => e.constructor.name === "Buffer" ? e.toString() : fs.decode(e);
async function* Ai(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield Ni(t);
  else {
    var n = e.body.getReader(), r;
    try {
      for (; !(r = await n.read()).done; )
        yield Ni(r.value);
    } finally {
      n.cancel();
    }
  }
}
async function* Oi(e, t) {
  var n = "", r;
  for await (var i of e)
    for (n += i; (r = n.indexOf(t)) > -1; )
      yield n.slice(0, r), n = n.slice(r + t.length);
}
async function* ms(e, t, n) {
  var r = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, n)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (c, f) {
        var p = c.match(ps), h = "--" + (p ? p[1] : "-"), m = !0, I;
        for await (var E of Oi(Ai(f), `\r
` + h)) {
          if (m) {
            m = !1;
            var k = E.indexOf(h);
            if (k > -1)
              E = E.slice(k + h.length);
            else
              continue;
          }
          try {
            yield I = JSON.parse(E.slice(E.indexOf(`\r
\r
`) + 4));
          } catch (w) {
            if (!I)
              throw w;
          }
          if (I && I.hasNext === !1)
            break;
        }
        I && I.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o, a);
    else if (/text\/event-stream/i.test(o))
      s = async function* (c) {
        var f;
        for await (var p of Oi(Ai(c), `

`)) {
          var h = p.match(hs);
          if (h) {
            var m = h[1];
            try {
              yield f = JSON.parse(m);
            } catch (I) {
              if (!f)
                throw I;
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
      i = i ? hr(i, l, a) : fr(e, l, a), r = !1, yield i, r = !0;
    i || (yield i = fr(e, {}, a));
  } catch (d) {
    if (!r)
      throw d;
    yield ba(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : d, a);
  }
}
function ys(e, t, n) {
  var r;
  return typeof AbortController < "u" && (n.signal = (r = new AbortController()).signal), xr(() => {
    r && r.abort();
  })(re((i) => !!i)(la(ms(e, t, n))));
}
var mr = (e, t) => {
  if (Array.isArray(e))
    for (var n of e)
      mr(n, t);
  else if (typeof e == "object" && e !== null)
    for (var r in e)
      r === "__typename" && typeof e[r] == "string" ? t.add(e[r]) : mr(e[r], t);
  return t;
}, yr = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var n = [];
    for (var r of e.definitions) {
      var i = yr(r);
      t = t || i !== r, n.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: n
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === xt.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === xt.FIELD && s.name.value === "__typename" && !s.alias;
        var l = yr(s);
        t = t || l !== s, a.push(l);
      }
      if (o || (t = !0, a.push({
        kind: xt.FIELD,
        name: {
          kind: xt.NAME,
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
}, Ei = /* @__PURE__ */ new Map(), bs = (e) => {
  var t = ma(e), n = Ei.get(t.__key);
  return n || (Ei.set(t.__key, n = yr(t)), Object.defineProperty(n, "__key", {
    value: t.__key,
    enumerable: !1
  })), n;
}, br = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => br(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var n = {};
    for (var r in e)
      r === "__typename" ? Object.defineProperty(n, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : n[r] = br(e[r]);
    return n;
  } else
    return e;
};
function Ti(e) {
  var t = (n) => e(n);
  return t.toPromise = () => Rr($n(1)(re((n) => !n.stale && !n.hasNext)(t))), t.then = (n, r) => t.toPromise().then(n, r), t.subscribe = (n) => St(n)(t), t;
}
function Vt(e, t, n) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...n
    } : n || t.context
  };
}
var ki = (e, t) => Vt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), gs = () => {
}, Zn = ({ kind: e }) => e !== "mutation" && e !== "query", vs = ({ forward: e, client: t, dispatchDebug: n }) => {
  var r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (s) => {
    var l = Vt(s.kind, s);
    return l.query = bs(s.query), l;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || r.has(s.key));
  return (s) => {
    var l = Dt((c) => {
      var f = r.get(c.key);
      process.env.NODE_ENV !== "production" && n({
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
      var p = f;
      return process.env.NODE_ENV !== "production" && (p = {
        ...p,
        operation: process.env.NODE_ENV !== "production" ? ki(c, {
          cacheOutcome: f ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (p.stale = !0, _i(t, c)), p;
    })(re((c) => !Zn(c) && o(c))(s)), d = jt((c) => {
      var { operation: f } = c;
      if (f) {
        var p = f.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (p = ((v) => [...mr(v, /* @__PURE__ */ new Set())])(c.data).concat(p)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var h = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && n({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${p}`,
            operation: f,
            data: {
              typenames: p,
              response: c
            },
            source: "cacheExchange"
          });
          for (var m = 0; m < p.length; m++) {
            var I = p[m], E = i.get(I);
            E || i.set(I, E = /* @__PURE__ */ new Set());
            for (var k of E.values())
              h.add(k);
            E.clear();
          }
          for (var w of h.values())
            r.has(w) && (f = r.get(w).operation, r.delete(w), _i(t, f));
        } else if (f.kind === "query" && c.data) {
          r.set(f.key, c);
          for (var C = 0; C < p.length; C++) {
            var y = p[C], N = i.get(y);
            N || i.set(y, N = /* @__PURE__ */ new Set()), N.add(f.key);
          }
        }
      }
    })(e(re((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(Dt((c) => process.env.NODE_ENV !== "production" ? ki(c, {
      cacheOutcome: "miss"
    }) : c)(Ct([Dt(a)(re((c) => !Zn(c) && !o(c))(s)), re((c) => Zn(c))(s)])))));
    return Ct([l, d]);
  };
}, _i = (e, t) => e.reexecuteOperation(Vt(t.kind, t, {
  requestPolicy: "network-only"
})), er = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: n }) => ({ client: r, forward: i }) => {
  var a = n || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = nn((d) => {
      var { key: c } = d, f = re((p) => p.kind === "teardown" && p.key === c)(o);
      return Dr(f)(((p) => {
        var h = e(ga(p), p);
        return Fr(({ next: m, complete: I }) => {
          var E = !1, k, w;
          return Promise.resolve().then(() => {
            E || (k = h.subscribe({
              next(C) {
                m(w = w ? hr(w, C) : fr(p, C));
              },
              error(C) {
                m(ba(p, C));
              },
              complete() {
                E || (E = !0, p.kind === "subscription" && r.reexecuteOperation(Vt("teardown", p, p.context)), w && w.hasNext && m(hr(w, {
                  hasNext: !1
                })), I());
              }
            }));
          }), () => {
            E = !0, k && k.unsubscribe();
          };
        });
      })(d));
    })(re((d) => d.kind !== "teardown" && a(d))(o)), l = i(re((d) => d.kind === "teardown" || !a(d))(o));
    return Ct([s, l]);
  };
}, Ss = ({ forward: e, dispatchDebug: t }) => (n) => {
  var r = nn((a) => {
    var o = ga(a), s = ls(a, o), l = ds(a, o);
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
    var d = Dr(re((c) => c.kind === "teardown" && c.key === a.key)(n))(ys(a, s, l));
    return process.env.NODE_ENV !== "production" ? jt((c) => {
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
  })(re((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(n)), i = e(re((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(n));
  return Ct([r, i]);
}, Is = (e) => ({ client: t, forward: n, dispatchDebug: r }) => e.reduceRight((i, a) => {
  var o = !1;
  return a({
    client: t,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return rn(i(rn(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && r({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, n), va = ({ onOperation: e, onResult: t, onError: n }) => ({ forward: r }) => (i) => nn((a) => {
  n && a.error && n(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? gi(o) : Kt(o);
})(r(nn((a) => {
  var o = e && e(a) || a;
  return "then" in o ? gi(o) : Kt(o);
})(i))), ws = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = jt((n) => {
  if (n.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var r = `No exchange has handled operations of kind "${n.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: r,
      operation: n,
      source: "fallbackExchange"
    }), console.warn(r);
  }
})(t)), re((n) => !1)(t)), Pi = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var n = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = bi();
  function d(y) {
    (y.kind === "mutation" || y.kind === "teardown" || !a.has(y.key)) && (y.kind === "teardown" ? a.delete(y.key) : y.kind !== "mutation" && a.add(y.key), l.next(y));
  }
  var c = !1;
  function f(y) {
    if (y && d(y), !c) {
      for (c = !0; c && (y = o.shift()); )
        d(y);
      c = !1;
    }
  }
  var p = (y) => {
    var N = Dr(re((v) => v.kind === "teardown" && v.key === y.key)(l.source))(re((v) => v.operation.kind === y.kind && v.operation.key === y.key && (!v.operation.context._instance || v.operation.context._instance === y.context._instance))(C));
    return y.kind !== "query" ? N = ua((v) => !!v.hasNext, !0)(N) : N = yi((v) => {
      var U = Kt(v);
      return v.stale || v.hasNext ? U : Ct([U, Dt(() => (v.stale = !0, v))($n(1)(re((Ze) => Ze.key === y.key)(l.source)))]);
    })(N), y.kind !== "mutation" ? N = xr(() => {
      a.delete(y.key), r.delete(y.key), i.delete(y.key), c = !1;
      for (var v = o.length - 1; v >= 0; v--)
        o[v].key === y.key && o.splice(v, 1);
      d(Vt("teardown", y, y.context));
    })(jt((v) => {
      if (v.stale) {
        for (var U of o)
          if (U.key === v.operation.key) {
            a.delete(U.key);
            break;
          }
      } else
        v.hasNext || a.delete(y.key);
      r.set(y.key, v);
    })(N)) : N = mi(() => {
      d(y);
    })(N), t.maskTypename && (N = Dt((v) => ({
      ...v,
      data: br(v.data, !0)
    }))(N)), rn(N);
  }, h = this instanceof e ? this : Object.create(e.prototype), m = Object.assign(h, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(y) {
      y.kind === "teardown" ? f(y) : (y.kind === "mutation" || i.has(y.key)) && (o.push(y), Promise.resolve().then(f));
    },
    createRequestOperation(y, N, v) {
      v || (v = {});
      var U;
      if (process.env.NODE_ENV !== "production" && y !== "teardown" && (U = us(N.query)) !== y)
        throw new Error(`Expected operation of type "${y}" but found "${U}"`);
      return Vt(y, N, {
        _instance: y === "mutation" ? n = n + 1 | 0 : void 0,
        ...s,
        ...v,
        requestPolicy: v.requestPolicy || s.requestPolicy,
        suspense: v.suspense || v.suspense !== !1 && m.suspense
      });
    },
    executeRequestOperation(y) {
      return y.kind === "mutation" ? Ti(p(y)) : Ti(Co(() => {
        var N = i.get(y.key);
        N || i.set(y.key, N = p(y)), N = mi(() => {
          f(y);
        })(N);
        var v = r.get(y.key);
        return y.kind === "query" && v && (v.stale || v.hasNext) ? yi(Kt)(Ct([N, re((U) => U === r.get(y.key))(Kt(v))])) : N;
      }));
    },
    executeQuery(y, N) {
      var v = m.createRequestOperation("query", y, N);
      return m.executeRequestOperation(v);
    },
    executeSubscription(y, N) {
      var v = m.createRequestOperation("subscription", y, N);
      return m.executeRequestOperation(v);
    },
    executeMutation(y, N) {
      var v = m.createRequestOperation("mutation", y, N);
      return m.executeRequestOperation(v);
    },
    readQuery(y, N, v) {
      var U = null;
      return St((Ze) => {
        U = Ze;
      })(m.query(y, N, v)).unsubscribe(), U;
    },
    query: (y, N, v) => m.executeQuery(En(y, N), v),
    subscription: (y, N, v) => m.executeSubscription(En(y, N), v),
    mutation: (y, N, v) => m.executeMutation(En(y, N), v)
  }), I = gs;
  if (process.env.NODE_ENV !== "production") {
    var { next: E, source: k } = bi();
    m.subscribeToDebugTarget = (y) => St(y)(k), I = E;
  }
  var w = Is(t.exchanges), C = rn(w({
    client: m,
    dispatchDebug: I,
    forward: ws({
      dispatchDebug: I
    })
  })(l.source));
  return $o(C), m;
};
const Ns = {
  DateTime(e) {
    return new Date(e);
  }
};
class As {
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
      a != null && (n[r] = Ns[i](a));
    }
    return n;
  }
}
function ve(e) {
  if (typeof e != "object")
    return e;
  var t, n, r = Object.prototype.toString.call(e);
  if (r === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      n = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = ve(e[t]));
    } else {
      n = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(n, t, {
          value: ve(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : n[t] = ve(e[t]);
    }
    return n;
  }
  if (r === "[object Array]") {
    for (t = e.length, n = Array(t); t--; )
      n[t] = ve(e[t]);
    return n;
  }
  return r === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    n.add(ve(i));
  }), n) : r === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    n.set(ve(a), ve(i));
  }), n) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : r === "[object DataView]" ? new e.constructor(ve(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var he;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(he || (he = {}));
class Os {
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
    }), this.__gadget.instantiatedFields = ve(t), this.__gadget.persistedFields = ve(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((r) => this.__gadget.fieldKeysTracker[r] = !0));
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
  hasChanges(t = he.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const n = t == he.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((r) => !vn(n[r], this.__gadget.fields[r]));
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
  changes(t, n = he.SinceLoaded) {
    const i = (typeof t == "string" ? n : t || n) == he.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = i[t], o = this.__gadget.fields[t], s = !vn(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const s = this.__gadget.fieldKeys[o];
        vn(i[s], this.__gadget.fields[s]) || (a[s] = { current: this.__gadget.fields[s], previous: i[s] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = he.SinceLoaded) {
    const n = t == he.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, r = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      vn(n[a], this.__gadget.fields[a]) || (r[a] = this.__gadget.fields[a]);
    }
    return r;
  }
  changed(t, n = he.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, n).changed : this.hasChanges(t === void 0 ? n : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = he.SinceLoaded) {
    t == he.SinceLoaded ? this.__gadget.instantiatedFields = ve(this.__gadget.fields) : t == he.SinceLastPersisted && (this.__gadget.persistedFields = ve(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = he.SinceLoaded) {
    let n;
    t == he.SinceLoaded ? n = Object.keys(this.__gadget.instantiatedFields) : n = Object.keys(this.__gadget.persistedFields);
    for (const r of this.__gadget.fieldKeys)
      n.includes(r) || delete this.__gadget.fields[r];
    t == he.SinceLoaded ? Object.assign(this.__gadget.fields, ve(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, ve(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Ir({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const Sa = Os;
class Ia extends Error {
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
class gr extends Error {
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
class Ln extends Error {
  constructor(t, n) {
    super(t.startsWith("GGT_") ? t : `${n}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
}
class xi extends Error {
  constructor(t) {
    let n;
    Sr(t) ? n = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : n = "GraphQL websocket closed unexpectedly by the server", super(n), Object.defineProperty(this, "code", {
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
class Es extends Error {
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
class Ts extends Error {
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
class ks extends Error {
  constructor(t, n, r, i) {
    const a = n.slice(0, 3), o = n.length > 3 ? `, and ${n.length - 3} more error${n.length > 4 ? "s" : ""} need${n.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${r ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: s, message: l }) => `${s} ${l}`).join(", ")}${o}.`), Object.defineProperty(this, "code", {
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
class wa extends Error {
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
class Mr extends Error {
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
class _s extends Error {
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
function vr(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const Lt = (e, t) => {
  const n = t.length;
  let r = 0;
  for (; e != null && r < n; )
    e = e[t[r++]];
  return r && r == n ? e : void 0;
}, Sr = (e) => (e == null ? void 0 : e.type) == "close", Re = (e, t) => typeof e != "string" ? "" : It(e, t), Di = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, It = (e, t = !0) => {
  let n = "" + e;
  return t ? n = n.replace(/^[a-z\d]*/, (r) => Di(r)) : n = n.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (r) => r.toLowerCase()), n = n.replace(/(?:_|(\/))([a-z\d]*)/gi, (r, i, a, o, s) => (i || (i = ""), "" + i + Di(a))), n;
}, Ps = (e) => `${It(e)}Sort`, xs = (e) => `${It(e)}Filter`, Ds = (e, t, n) => new wa(`More than one record found for ${e}.${t} = ${n}. Please confirm your unique validation is not reporting an error.`), Fs = (e, t) => {
  if (e.fetching)
    return;
  const n = Lt(e.data, t);
  if (n === void 0)
    return new Ia(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (n === null)
    return new Mr(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, Qe = (e, t, n = !1) => {
  var r;
  if (e.error)
    throw e.error instanceof un && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const i = Lt(e.data, t), a = Lt(i, ["edges"]), o = a ?? i;
  if (i === void 0)
    throw new Ia(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || n && Array.isArray(o) && o.length === 0)
    throw new Mr(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, Xt = (e, t) => {
  var n;
  if (e.error)
    throw e.error instanceof un && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const r = Lt(e.data, t);
  return r ?? null;
}, $r = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new ks(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new wa(e.message) : new Ln(e.message, e.code);
}, at = (e, t) => {
  const n = Qe(e, t);
  return Na(n);
}, Na = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? $r(t) : new Ln("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, Aa = (e) => {
  var t, n, r, i;
  if (!((n = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || n === void 0) && n.hydrations)
    return new As((i = (r = e.data) === null || r === void 0 ? void 0 : r.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, Zt = (e, t) => {
  const n = Aa(e);
  return n && (t = n.apply(t)), new Sa(t);
}, Vr = (e, t) => {
  const n = Aa(e);
  return n && (t = n.apply(t)), t == null ? void 0 : t.map((r) => new Sa(r));
}, an = (e, t) => {
  const n = t.edges.map((r) => r.node);
  return Vr(e, n);
}, Ir = (e) => {
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
          t[n] = r === void 0 ? null : Ir(r);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const n of Object.keys(e)) {
          const r = Ir(e[n]);
          r !== void 0 && (t[n] = r);
        }
        return t;
      }
    }
  }
}, tr = "gstk", Fi = (e) => {
  try {
    const t = window[e];
    return t.setItem(tr, tr), t.removeItem(tr), !0;
  } catch {
    return !1;
  }
}, Ri = Object.prototype.toString, Ci = Object.getPrototypeOf, ji = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, Yt = (e, t, n) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (n.indexOf(e) > -1 && n.indexOf(t) > -1)
    return !0;
  const r = Ri.call(e), i = Ri.call(t);
  let a, o, s;
  if (n.push(e, t), r != i || (a = ji(e), o = ji(t), a.length != o.length || a.some(function(l) {
    return !Yt(e[l], t[l], n);
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
      a = e.entries(), o = t.entries();
      do
        if (s = a.next(), !Yt(s.value, o.next().value, n))
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
        if (!(!(s in e) && !(s in t)) && (s in e != s in t || !Yt(e[s], t[s], n)))
          return !1;
      return !0;
    case "Object":
      return Yt(Ci(e), Ci(t), n);
    default:
      return !1;
  }
}, vn = (e, t) => Yt(e, t, []), Oa = (e, t) => {
  var n, r;
  if (t ?? (t = {}), !("hasAmbiguousIdentifier" in e) && !("acceptsModelInput" in e))
    return t;
  if (e.hasAmbiguousIdentifier && Object.keys(t).some((a) => {
    var o;
    return a !== "id" && !(!((o = e.paramOnlyVariables) === null || o === void 0) && o.includes(a)) && a !== e.modelApiIdentifier;
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
      for (const [a, o] of Object.entries(t))
        !((r = e.paramOnlyVariables) === null || r === void 0) && r.includes(a) ? i[a] = o : a == "id" ? i.id = o : i[e.modelApiIdentifier][a] = o;
    }
  else
    i = t;
  return i;
}, Rs = (e, t = {}) => {
  var n;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((n = Array.isArray(t) ? t : t.inputs) !== null && n !== void 0 ? n : []).map((i) => Oa(e, i))
  };
}, Cs = (e, t) => {
  const n = {};
  for (const [r, i] of Object.entries(e))
    n[r] = { ...i, value: t[r] };
  return n;
};
class Bt extends Array {
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
    const i = new Bt();
    return i.push(...n), i.modelManager = t, i.pagination = r, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Ln("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new gr("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new gr("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: n, last: r, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: r || n
    });
  }
}
const wr = (e) => Object.entries(e).flatMap(([t, n]) => {
  if (typeof n == "boolean")
    return n ? t : !1;
  if (n instanceof Br) {
    let r = "";
    const i = Object.entries(n.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof Ur ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return i.length > 0 && (r = `(${i.join(", ")})`), n.subselection ? [`${t}${r} {`, ...wr(n.subselection), "}"] : `${t}${r}`;
  } else
    return [`${t} {`, ...wr(n), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Lr = (e) => {
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
    i instanceof Br ? Object.entries(i.args).forEach(([a, o]) => {
      var s;
      o instanceof Ur && (t[(s = o.name) !== null && s !== void 0 ? s : n(a)] = o);
    }) : typeof i == "object" && i !== null && Object.assign(t, Lr(i));
  }), t;
}, js = (e) => {
  const t = Lr(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([r, i]) => `$${r}: ${i.type}`).join(", ")})`;
};
class Br {
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
class Ur {
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
const st = (e, t) => new Br(e, t), Z = (e) => new Ur(e.type + (e.required ? "!" : ""), e.name, e.value), Ms = (e) => {
  var t;
  const n = js(e), r = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${n}${r} {
${wr(e.fields).join(`
`)}
}`;
}, ut = (e) => {
  const t = Lr(e.fields);
  return {
    query: Ms(e),
    variables: Object.entries(t ?? {}).reduce((n, [r, i]) => (typeof i.value < "u" && (n[r] = i.value), n), {})
  };
}, qr = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Gr = (e, t = !1) => {
  const n = { ...e };
  return t && (n.__typename = !0), n;
}, Bn = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, $s = (e, t, n, r, i) => {
  const a = {};
  return typeof t < "u" && (a.id = Z({ type: "GadgetID!", value: t })), ut({
    type: "query",
    name: e,
    fields: {
      [e]: st(a, Gr((i == null ? void 0 : i.select) || n, !0)),
      ...qr(r)
    },
    directives: Bn(i)
  });
}, Vs = (e, t, n, r, i, a) => zr(e, r, i, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: n
    }
  }
}), zr = (e, t, n, r) => ut({
  type: "query",
  name: e,
  fields: {
    [e]: st({
      after: Z({ value: r == null ? void 0 : r.after, type: "String" }),
      first: Z({ value: r == null ? void 0 : r.first, type: "Int" }),
      before: Z({ value: r == null ? void 0 : r.before, type: "String" }),
      last: Z({ value: r == null ? void 0 : r.last, type: "Int" }),
      sort: r != null && r.sort ? Z({ value: r.sort, type: `[${Ps(n)}!]` }) : void 0,
      filter: r != null && r.filter ? Z({ value: r.filter, type: `[${xs(n)}!]` }) : void 0,
      search: r != null && r.search ? Z({ value: r.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Gr((r == null ? void 0 : r.select) || t, !0)
      }
    }),
    ...qr(n)
  },
  directives: Bn(r)
}), Ea = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Qr = (e) => Object.fromEntries(Object.entries(e).map(([t, n]) => [t, Z(n)])), Ta = (e, t, n) => ({
  success: !0,
  errors: Ea,
  [e]: t && !n ? Gr(t, !0) : !1,
  result: !!n
}), Ls = (e, t, n, r, i, a, o, s, l) => {
  const d = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: st(Qr(i), Ta(r, d, l))
  };
  o && (c = {
    [o]: c
  });
  const f = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...qr(n)
    },
    directives: Bn(a)
  };
  return ut(f);
}, Bs = (e, t, n) => {
  let r = {}, i = t.operationName;
  switch (t.type) {
    case "action": {
      const o = (n == null ? void 0 : n.select) || t.defaultSelection;
      t.isBulk && (i = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), r = {
        [`... on ${`${It(i)}Result`}`]: Ta(t.modelApiIdentifier, o, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      r = {
        [`... on ${It(i)}Result`]: ka()
      };
  }
  const a = {
    type: "subscription",
    name: Re(i) + "BackgroundResult",
    fields: {
      backgroundAction: st({ id: Z({ value: e, type: "String!" }) }, {
        id: !0,
        outcome: !0,
        result: {
          ...r
        }
      })
    }
  };
  return ut(a);
}, ka = () => ({
  success: !0,
  errors: Ea,
  result: !0
}), Us = (e, t, n, r) => {
  let i = {
    [e]: st(Qr(t), ka())
  };
  return n && (i = {
    [n]: i
  }), ut({
    type: "mutation",
    name: e,
    fields: i,
    directives: Bn(r)
  });
}, qs = (e) => {
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
}, Gs = (e, t, n, r, i) => {
  let a = {
    background: {
      [e]: st({
        ...Qr(t),
        backgroundOptions: Z({
          type: "EnqueueBackgroundActionOptions",
          value: qs(r)
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
  }), ut({
    type: "mutation",
    name: "enqueue" + It(e),
    fields: a
  });
}, zs = (e, t) => ({
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
function Wr(e, t, n) {
  return n != null && n.live ? zs(Vo(e), t) : Cr(e, re((i) => !i.stale && !i.hasNext), $n(1), Rr).then((i) => t(i));
}
const Mi = (e, t, n, r, i, a, o = !0) => {
  const s = $s(t, n, r, i, a), l = e.connection.currentClient.query(s.query, s.variables);
  return Wr(l, (d) => {
    const f = (o ? Qe : Xt)(d, [t]);
    return Zt(d, f);
  }, a);
}, Qs = (e, t, n, r, i, a, o, s = !0) => {
  const l = Vs(t, n, r, i, a, o), d = e.connection.currentClient.query(l.query, l.variables);
  return Wr(d, (c) => {
    const f = Qe(c, [t]), p = an(c, f);
    if (p.length > 1)
      throw Ds(a, n, r);
    const h = p[0];
    if (!h && s)
      throw new Mr(`${a} record with ${n}=${r} not found`);
    return h ?? null;
  }, o);
}, $i = (e, t, n, r, i, a) => {
  const o = zr(t, n, r, i), s = e.connection.currentClient.query(o.query, o.variables);
  return Wr(s, (l) => {
    let d;
    a === !1 ? d = Xt(l, [t]) : d = Qe(l, [t], a);
    const c = an(l, d);
    return Bt.boot(e, c, { options: i, pageInfo: d.pageInfo });
  }, i);
}, Vi = async (e, t, n, r, i, a, o, s, l, d) => {
  const c = Ls(t, n, r, i, o, s, l, a, d), f = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), p = l ? [l, t] : [t];
  if (a) {
    const h = Lt(f.data, p), m = h[i] && n ? Vr(f, h[i]) : void 0;
    if (h.errors) {
      const I = h.errors.map((E) => $r(E));
      throw new _s(I, m);
    }
    return m;
  } else {
    const h = at(f, p);
    return _a(n, f, h, i, d);
  }
}, _a = (e, t, n, r, i) => {
  if (e != null)
    return i ? n.result : Zt(t, n[r]);
}, Li = async (e, t, n, r) => {
  const i = Us(t, n, r), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return at(a, r ? [r, t] : [t]).result;
};
async function Ws(e, t, n, r = {}) {
  const i = t.isBulk ? Rs(t, n) : Oa(t, n), a = Cs(t.variables, i), o = Gs(t.operationName, a, t.namespace, r, t.isBulk), s = await e.currentClient.mutation(o.query, o.variables, r).toPromise(), l = ["background", t.operationName];
  t.namespace && l.unshift(t.namespace);
  try {
    const d = at(s, l);
    return t.isBulk ? d.backgroundActions.map((c) => new Tn(e, t, c.id)) : new Tn(e, t, d.backgroundAction.id);
  } catch (d) {
    if ("code" in d && d.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (r != null && r.id) && r.onDuplicateID == "ignore")
      return new Tn(e, t, r.id);
    throw d;
  }
}
const Js = async (e, t, n, r) => {
  const i = Bs(t, n, r), a = e.currentClient.subscription(i.query, i.variables), o = await Cr(a, re((l) => {
    var d, c;
    return l.error || ((c = (d = l.data) === null || d === void 0 ? void 0 : d.backgroundAction) === null || c === void 0 ? void 0 : c.outcome);
  }), $n(1), Rr), s = Qe(o, ["backgroundAction"]);
  switch (Na(s.result), n.type) {
    case "action": {
      s.result = _a(n.defaultSelection, o.data, s.result, n.isBulk ? n.modelApiIdentifier : n.modelSelectionField, n.hasReturnType);
      break;
    }
    case "globalAction": {
      s.result = s.result.result;
      break;
    }
  }
  return s;
};
class Tn {
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
    return (await Js(this.connection, this.id, this.action, t)).result;
  }
}
var en;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(en || (en = {}));
function W(e, t) {
  if (!!!e)
    throw new Error(t);
}
function on(e) {
  return typeof e == "object" && e !== null;
}
function Pa(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const Ys = /\r\n|[\n\r]/g;
function Nr(e, t) {
  let n = 0, r = 1;
  for (const i of e.body.matchAll(Ys)) {
    if (typeof i.index == "number" || Pa(!1), i.index >= t)
      break;
    n = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: t + 1 - n
  };
}
function Hs(e) {
  return xa(
    e.source,
    Nr(e.source, e.start)
  );
}
function xa(e, t) {
  const n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? n : 0, l = t.column + s, d = `${e.name}:${o}:${l}
`, c = r.split(/\r\n|[\n\r]/g), f = c[i];
  if (f.length > 120) {
    const p = Math.floor(l / 80), h = l % 80, m = [];
    for (let I = 0; I < f.length; I += 80)
      m.push(f.slice(I, I + 80));
    return d + Bi([
      [`${o} |`, m[0]],
      ...m.slice(1, p + 1).map((I) => ["|", I]),
      ["|", "^".padStart(h)],
      ["|", m[p + 1]]
    ]);
  }
  return d + Bi([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, c[i - 1]],
    [`${o} |`, f],
    ["|", "^".padStart(l)],
    [`${o + 1} |`, c[i + 1]]
  ]);
}
function Bi(e) {
  const t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function Ks(e) {
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
class D extends Error {
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
    const { nodes: o, source: s, positions: l, path: d, originalError: c, extensions: f } = Ks(n);
    super(t), this.name = "GraphQLError", this.path = d ?? void 0, this.originalError = c ?? void 0, this.nodes = Ui(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const p = Ui(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((m) => m.loc).filter((m) => m != null)
    );
    this.source = s ?? (p == null || (i = p[0]) === null || i === void 0 ? void 0 : i.source), this.positions = l ?? (p == null ? void 0 : p.map((m) => m.start)), this.locations = l && s ? l.map((m) => Nr(s, m)) : p == null ? void 0 : p.map((m) => Nr(m.source, m.start));
    const h = on(
      c == null ? void 0 : c.extensions
    ) ? c == null ? void 0 : c.extensions : void 0;
    this.extensions = (a = f ?? h) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, D) : Object.defineProperty(this, "stack", {
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

` + Hs(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + xa(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function Ui(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const Da = {
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
}, Xs = new Set(Object.keys(Da));
function qi(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && Xs.has(t);
}
var Gi;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Gi || (Gi = {}));
var Se;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(Se || (Se = {}));
var V;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(V || (V = {}));
function zi(e) {
  return e === 9 || e === 32;
}
function Zs(e) {
  return e >= 48 && e <= 57;
}
function Fa(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function eu(e) {
  return Fa(e) || e === 95;
}
function tu(e) {
  return Fa(e) || Zs(e) || e === 95;
}
function nu(e, t) {
  const n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((h) => h.length === 0 || zi(h.charCodeAt(0))), o = n.endsWith('\\"""'), s = e.endsWith('"') && !o, l = e.endsWith("\\"), d = s || l, c = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || d || a || o);
  let f = "";
  const p = i && zi(e.charCodeAt(0));
  return (c && !p || a) && (f += `
`), f += n, (c || d) && (f += `
`), '"""' + f + '"""';
}
const ru = 10, Ra = 2;
function B(e) {
  return Un(e, []);
}
function Un(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return iu(e, t);
    default:
      return String(e);
  }
}
function iu(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (au(e)) {
    const r = e.toJSON();
    if (r !== e)
      return typeof r == "string" ? r : Un(r, n);
  } else if (Array.isArray(e))
    return su(e, n);
  return ou(e, n);
}
function au(e) {
  return typeof e.toJSON == "function";
}
function ou(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > Ra ? "[" + uu(e) + "]" : "{ " + n.map(
    ([i, a]) => i + ": " + Un(a, t)
  ).join(", ") + " }";
}
function su(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Ra)
    return "[Array]";
  const n = Math.min(ru, e.length), r = e.length - n, i = [];
  for (let a = 0; a < n; ++a)
    i.push(Un(e[a], t));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function uu(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const lt = (
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
        const o = B(t);
        throw new Error(`Cannot use ${i} "${o}" from another module or realm.

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
), lu = 5;
function cu(e, t) {
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
  const o = a.slice(0, lu), s = o.pop();
  return i + o.join(", ") + ", or " + s + "?";
}
function Qi(e) {
  return e;
}
function Jr(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    n[t(r)] = r;
  return n;
}
function Yr(e, t, n) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of e)
    r[t(i)] = n(i);
  return r;
}
function qn(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of Object.keys(e))
    n[r] = t(e[r], r);
  return n;
}
function du(e, t) {
  let n = 0, r = 0;
  for (; n < e.length && r < t.length; ) {
    let i = e.charCodeAt(n), a = t.charCodeAt(r);
    if (Sn(i) && Sn(a)) {
      let o = 0;
      do
        ++n, o = o * 10 + i - Ar, i = e.charCodeAt(n);
      while (Sn(i) && o > 0);
      let s = 0;
      do
        ++r, s = s * 10 + a - Ar, a = t.charCodeAt(r);
      while (Sn(a) && s > 0);
      if (o < s)
        return -1;
      if (o > s)
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
const Ar = 48, fu = 57;
function Sn(e) {
  return !isNaN(e) && Ar <= e && e <= fu;
}
function pu(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = new hu(e), i = Math.floor(e.length * 0.4) + 1;
  for (const a of t) {
    const o = r.measure(a, i);
    o !== void 0 && (n[a] = o);
  }
  return Object.keys(n).sort((a, o) => {
    const s = n[a] - n[o];
    return s !== 0 ? s : du(a, o);
  });
}
class hu {
  constructor(t) {
    this._input = t, this._inputLowerCase = t.toLowerCase(), this._inputArray = Wi(this._inputLowerCase), this._rows = [
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
    let i = Wi(r), a = this._inputArray;
    if (i.length < a.length) {
      const c = i;
      i = a, a = c;
    }
    const o = i.length, s = a.length;
    if (o - s > n)
      return;
    const l = this._rows;
    for (let c = 0; c <= s; c++)
      l[0][c] = c;
    for (let c = 1; c <= o; c++) {
      const f = l[(c - 1) % 3], p = l[c % 3];
      let h = p[0] = c;
      for (let m = 1; m <= s; m++) {
        const I = i[c - 1] === a[m - 1] ? 0 : 1;
        let E = Math.min(
          f[m] + 1,
          // delete
          p[m - 1] + 1,
          // insert
          f[m - 1] + I
          // substitute
        );
        if (c > 1 && m > 1 && i[c - 1] === a[m - 2] && i[c - 2] === a[m - 1]) {
          const k = l[(c - 2) % 3][m - 2];
          E = Math.min(E, k + 1);
        }
        E < h && (h = E), p[m] = E;
      }
      if (h > n)
        return;
    }
    const d = l[o % 3][s];
    return d <= n ? d : void 0;
  }
}
function Wi(e) {
  const t = e.length, n = new Array(t);
  for (let r = 0; r < t; ++r)
    n[r] = e.charCodeAt(r);
  return n;
}
function je(e) {
  if (e == null)
    return /* @__PURE__ */ Object.create(null);
  if (Object.getPrototypeOf(e) === null)
    return e;
  const t = /* @__PURE__ */ Object.create(null);
  for (const [n, r] of Object.entries(e))
    t[n] = r;
  return t;
}
function mu(e) {
  return `"${e.replace(yu, bu)}"`;
}
const yu = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function bu(e) {
  return gu[e.charCodeAt(0)];
}
const gu = [
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
], vu = Object.freeze({});
function Su(e, t, n = Da) {
  const r = /* @__PURE__ */ new Map();
  for (const k of Object.values(V))
    r.set(k, Iu(t, k));
  let i, a = Array.isArray(e), o = [e], s = -1, l = [], d = e, c, f;
  const p = [], h = [];
  do {
    s++;
    const k = s === o.length, w = k && l.length !== 0;
    if (k) {
      if (c = h.length === 0 ? void 0 : p[p.length - 1], d = f, f = h.pop(), w)
        if (a) {
          d = d.slice();
          let y = 0;
          for (const [N, v] of l) {
            const U = N - y;
            v === null ? (d.splice(U, 1), y++) : d[U] = v;
          }
        } else {
          d = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(d)
          );
          for (const [y, N] of l)
            d[y] = N;
        }
      s = i.index, o = i.keys, l = i.edits, a = i.inArray, i = i.prev;
    } else if (f) {
      if (c = a ? s : o[s], d = f[c], d == null)
        continue;
      p.push(c);
    }
    let C;
    if (!Array.isArray(d)) {
      var m, I;
      qi(d) || W(!1, `Invalid AST Node: ${B(d)}.`);
      const y = k ? (m = r.get(d.kind)) === null || m === void 0 ? void 0 : m.leave : (I = r.get(d.kind)) === null || I === void 0 ? void 0 : I.enter;
      if (C = y == null ? void 0 : y.call(t, d, c, f, p, h), C === vu)
        break;
      if (C === !1) {
        if (!k) {
          p.pop();
          continue;
        }
      } else if (C !== void 0 && (l.push([c, C]), !k))
        if (qi(C))
          d = C;
        else {
          p.pop();
          continue;
        }
    }
    if (C === void 0 && w && l.push([c, d]), k)
      p.pop();
    else {
      var E;
      i = {
        inArray: a,
        index: s,
        keys: o,
        edits: l,
        prev: i
      }, a = Array.isArray(d), o = a ? d : (E = n[d.kind]) !== null && E !== void 0 ? E : [], s = -1, l = [], f && h.push(f), f = d;
    }
  } while (i !== void 0);
  return l.length !== 0 ? l[l.length - 1][1] : e;
}
function Iu(e, t) {
  const n = e[t];
  return typeof n == "object" ? n : typeof n == "function" ? {
    enter: n,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function ot(e) {
  return Su(e, Nu);
}
const wu = 80, Nu = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => S(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = x("(", S(e.variableDefinitions, ", "), ")"), n = S(
        [
          e.operation,
          S([e.name, t]),
          S(e.directives, " ")
        ],
        " "
      );
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + x(" = ", n) + x(" ", S(r, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => Pe(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
      const a = x("", e, ": ") + t;
      let o = a + x("(", S(n, ", "), ")");
      return o.length > wu && (o = a + x(`(
`, kn(S(n, `
`)), `
)`)), S([o, S(r, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + x(" ", S(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) => S(
      [
        "...",
        x("on ", e),
        S(t, " "),
        n
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${x("(", S(n, ", "), ")")} on ${t} ${x("", S(r, " "), " ")}` + i
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
    leave: ({ value: e, block: t }) => t ? nu(e) : mu(e)
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
    leave: ({ values: e }) => "[" + S(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + S(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + x("(", S(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: n }) => x("", e, `
`) + S(["schema", S(t, " "), Pe(n)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) => x("", e, `
`) + S(["scalar", t, S(n, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => x("", e, `
`) + S(
      [
        "type",
        t,
        x("implements ", S(n, " & ")),
        S(r, " "),
        Pe(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => x("", e, `
`) + t + (Ji(n) ? x(`(
`, kn(S(n, `
`)), `
)`) : x("(", S(n, ", "), ")")) + ": " + r + x(" ", S(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => x("", e, `
`) + S(
      [t + ": " + n, x("= ", r), S(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => x("", e, `
`) + S(
      [
        "interface",
        t,
        x("implements ", S(n, " & ")),
        S(r, " "),
        Pe(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: r }) => x("", e, `
`) + S(
      ["union", t, S(n, " "), x("= ", S(r, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: r }) => x("", e, `
`) + S(["enum", t, S(n, " "), Pe(r)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) => x("", e, `
`) + S([t, S(n, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: r }) => x("", e, `
`) + S(["input", t, S(n, " "), Pe(r)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) => x("", e, `
`) + "directive @" + t + (Ji(n) ? x(`(
`, kn(S(n, `
`)), `
)`) : x("(", S(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + S(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => S(
      ["extend schema", S(e, " "), Pe(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => S(["extend scalar", e, S(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => S(
      [
        "extend type",
        e,
        x("implements ", S(t, " & ")),
        S(n, " "),
        Pe(r)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => S(
      [
        "extend interface",
        e,
        x("implements ", S(t, " & ")),
        S(n, " "),
        Pe(r)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: n }) => S(
      [
        "extend union",
        e,
        S(t, " "),
        x("= ", S(n, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) => S(["extend enum", e, S(t, " "), Pe(n)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) => S(["extend input", e, S(t, " "), Pe(n)], " ")
  }
};
function S(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
}
function Pe(e) {
  return x(`{
`, kn(S(e, `
`)), `
}`);
}
function x(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function kn(e) {
  return x("  ", e.replace(/\n/g, `
  `));
}
function Ji(e) {
  var t;
  return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function Or(e, t) {
  switch (e.kind) {
    case V.NULL:
      return null;
    case V.INT:
      return parseInt(e.value, 10);
    case V.FLOAT:
      return parseFloat(e.value);
    case V.STRING:
    case V.ENUM:
    case V.BOOLEAN:
      return e.value;
    case V.LIST:
      return e.values.map(
        (n) => Or(n, t)
      );
    case V.OBJECT:
      return Yr(
        e.fields,
        (n) => n.name.value,
        (n) => Or(n.value, t)
      );
    case V.VARIABLE:
      return t == null ? void 0 : t[e.name.value];
  }
}
function Me(e) {
  if (e != null || W(!1, "Must provide name."), typeof e == "string" || W(!1, "Expected name to be a string."), e.length === 0)
    throw new D("Expected name to be a non-empty string.");
  for (let t = 1; t < e.length; ++t)
    if (!tu(e.charCodeAt(t)))
      throw new D(
        `Names must only contain [_a-zA-Z0-9] but "${e}" does not.`
      );
  if (!eu(e.charCodeAt(0)))
    throw new D(
      `Names must start with [_a-zA-Z] but "${e}" does not.`
    );
  return e;
}
function Au(e) {
  if (e === "true" || e === "false" || e === "null")
    throw new D(`Enum values cannot be named: ${e}`);
  return Me(e);
}
function Ca(e) {
  return ja(e) || Ou(e) || Eu(e) || Tu(e) || Ma(e) || $a(e) || Va(e) || Xe(e);
}
function ja(e) {
  return lt(e, Ut);
}
function Ou(e) {
  return lt(e, xu);
}
function Eu(e) {
  return lt(e, Du);
}
function Tu(e) {
  return lt(e, Fu);
}
function Ma(e) {
  return lt(e, Cu);
}
function $a(e) {
  return lt(e, Mu);
}
function Va(e) {
  return lt(e, _u);
}
function Xe(e) {
  return lt(e, Gn);
}
function ku(e) {
  return ja(e) || Ma(e);
}
class _u {
  constructor(t) {
    Ca(t) || W(!1, `Expected ${B(t)} to be a GraphQL type.`), this.ofType = t;
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
class Gn {
  constructor(t) {
    Pu(t) || W(
      !1,
      `Expected ${B(t)} to be a GraphQL nullable type.`
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
function Pu(e) {
  return Ca(e) && !Xe(e);
}
function La(e) {
  return typeof e == "function" ? e() : e;
}
function Ba(e) {
  return typeof e == "function" ? e() : e;
}
class Ut {
  constructor(t) {
    var n, r, i, a;
    const o = (n = t.parseValue) !== null && n !== void 0 ? n : Qi;
    this.name = Me(t.name), this.description = t.description, this.specifiedByURL = t.specifiedByURL, this.serialize = (r = t.serialize) !== null && r !== void 0 ? r : Qi, this.parseValue = o, this.parseLiteral = (i = t.parseLiteral) !== null && i !== void 0 ? i : (s, l) => o(Or(s, l)), this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (a = t.extensionASTNodes) !== null && a !== void 0 ? a : [], t.specifiedByURL == null || typeof t.specifiedByURL == "string" || W(
      !1,
      `${this.name} must provide "specifiedByURL" as a string, but got: ${B(t.specifiedByURL)}.`
    ), t.serialize == null || typeof t.serialize == "function" || W(
      !1,
      `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
    ), t.parseLiteral && (typeof t.parseValue == "function" && typeof t.parseLiteral == "function" || W(
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
class xu {
  constructor(t) {
    var n;
    this.name = Me(t.name), this.description = t.description, this.isTypeOf = t.isTypeOf, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = () => qa(t), this._interfaces = () => Ua(t), t.isTypeOf == null || typeof t.isTypeOf == "function" || W(
      !1,
      `${this.name} must provide "isTypeOf" as a function, but got: ${B(t.isTypeOf)}.`
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
      fields: za(this.getFields()),
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
function Ua(e) {
  var t;
  const n = La(
    (t = e.interfaces) !== null && t !== void 0 ? t : []
  );
  return Array.isArray(n) || W(
    !1,
    `${e.name} interfaces must be an Array or a function which returns an Array.`
  ), n;
}
function qa(e) {
  const t = Ba(e.fields);
  return Ft(t) || W(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), qn(t, (n, r) => {
    var i;
    Ft(n) || W(
      !1,
      `${e.name}.${r} field config must be an object.`
    ), n.resolve == null || typeof n.resolve == "function" || W(
      !1,
      `${e.name}.${r} field resolver must be a function if provided, but got: ${B(n.resolve)}.`
    );
    const a = (i = n.args) !== null && i !== void 0 ? i : {};
    return Ft(a) || W(
      !1,
      `${e.name}.${r} args must be an object with argument names as keys.`
    ), {
      name: Me(r),
      description: n.description,
      type: n.type,
      args: Ga(a),
      resolve: n.resolve,
      subscribe: n.subscribe,
      deprecationReason: n.deprecationReason,
      extensions: je(n.extensions),
      astNode: n.astNode
    };
  });
}
function Ga(e) {
  return Object.entries(e).map(([t, n]) => ({
    name: Me(t),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: je(n.extensions),
    astNode: n.astNode
  }));
}
function Ft(e) {
  return on(e) && !Array.isArray(e);
}
function za(e) {
  return qn(e, (t) => ({
    description: t.description,
    type: t.type,
    args: Qa(t.args),
    resolve: t.resolve,
    subscribe: t.subscribe,
    deprecationReason: t.deprecationReason,
    extensions: t.extensions,
    astNode: t.astNode
  }));
}
function Qa(e) {
  return Yr(
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
class Du {
  constructor(t) {
    var n;
    this.name = Me(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = qa.bind(void 0, t), this._interfaces = Ua.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || W(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${B(t.resolveType)}.`
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
      fields: za(this.getFields()),
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
class Fu {
  constructor(t) {
    var n;
    this.name = Me(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._types = Ru.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || W(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${B(t.resolveType)}.`
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
function Ru(e) {
  const t = La(e.types);
  return Array.isArray(t) || W(
    !1,
    `Must provide Array of types or a function which returns such an array for Union ${e.name}.`
  ), t;
}
class Cu {
  /* <T> */
  constructor(t) {
    var n;
    this.name = Me(t.name), this.description = t.description, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._values = ju(this.name, t.values), this._valueLookup = new Map(
      this._values.map((r) => [r.value, r])
    ), this._nameLookup = Jr(this._values, (r) => r.name);
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
      throw new D(
        `Enum "${this.name}" cannot represent value: ${B(t)}`
      );
    return n.name;
  }
  parseValue(t) {
    if (typeof t != "string") {
      const r = B(t);
      throw new D(
        `Enum "${this.name}" cannot represent non-string value: ${r}.` + In(this, r)
      );
    }
    const n = this.getValue(t);
    if (n == null)
      throw new D(
        `Value "${t}" does not exist in "${this.name}" enum.` + In(this, t)
      );
    return n.value;
  }
  parseLiteral(t, n) {
    if (t.kind !== V.ENUM) {
      const i = ot(t);
      throw new D(
        `Enum "${this.name}" cannot represent non-enum value: ${i}.` + In(this, i),
        {
          nodes: t
        }
      );
    }
    const r = this.getValue(t.value);
    if (r == null) {
      const i = ot(t);
      throw new D(
        `Value "${i}" does not exist in "${this.name}" enum.` + In(this, i),
        {
          nodes: t
        }
      );
    }
    return r.value;
  }
  toConfig() {
    const t = Yr(
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
function In(e, t) {
  const n = e.getValues().map((i) => i.name), r = pu(t, n);
  return cu("the enum value", r);
}
function ju(e, t) {
  return Ft(t) || W(
    !1,
    `${e} values must be an object with value names as keys.`
  ), Object.entries(t).map(([n, r]) => (Ft(r) || W(
    !1,
    `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${B(r)}.`
  ), {
    name: Au(n),
    description: r.description,
    value: r.value !== void 0 ? r.value : n,
    deprecationReason: r.deprecationReason,
    extensions: je(r.extensions),
    astNode: r.astNode
  }));
}
class Mu {
  constructor(t) {
    var n;
    this.name = Me(t.name), this.description = t.description, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = $u.bind(void 0, t);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const t = qn(this.getFields(), (n) => ({
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
function $u(e) {
  const t = Ba(e.fields);
  return Ft(t) || W(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), qn(t, (n, r) => (!("resolve" in n) || W(
    !1,
    `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`
  ), {
    name: Me(r),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: je(n.extensions),
    astNode: n.astNode
  }));
}
const nr = 2147483647, rr = -2147483648, Vu = new Ut({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(e) {
    const t = ln(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n))
      throw new D(
        `Int cannot represent non-integer value: ${B(t)}`
      );
    if (n > nr || n < rr)
      throw new D(
        "Int cannot represent non 32-bit signed integer value: " + B(t)
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isInteger(e))
      throw new D(
        `Int cannot represent non-integer value: ${B(e)}`
      );
    if (e > nr || e < rr)
      throw new D(
        `Int cannot represent non 32-bit signed integer value: ${e}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== V.INT)
      throw new D(
        `Int cannot represent non-integer value: ${ot(e)}`,
        {
          nodes: e
        }
      );
    const t = parseInt(e.value, 10);
    if (t > nr || t < rr)
      throw new D(
        `Int cannot represent non 32-bit signed integer value: ${e.value}`,
        {
          nodes: e
        }
      );
    return t;
  }
});
new Ut({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(e) {
    const t = ln(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n))
      throw new D(
        `Float cannot represent non numeric value: ${B(t)}`
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isFinite(e))
      throw new D(
        `Float cannot represent non numeric value: ${B(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== V.FLOAT && e.kind !== V.INT)
      throw new D(
        `Float cannot represent non numeric value: ${ot(e)}`,
        e
      );
    return parseFloat(e.value);
  }
});
const Wa = new Ut({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(e) {
    const t = ln(e);
    if (typeof t == "string")
      return t;
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "number" && Number.isFinite(t))
      return t.toString();
    throw new D(
      `String cannot represent value: ${B(e)}`
    );
  },
  parseValue(e) {
    if (typeof e != "string")
      throw new D(
        `String cannot represent a non string value: ${B(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== V.STRING)
      throw new D(
        `String cannot represent a non string value: ${ot(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
}), Hr = new Ut({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(e) {
    const t = ln(e);
    if (typeof t == "boolean")
      return t;
    if (Number.isFinite(t))
      return t !== 0;
    throw new D(
      `Boolean cannot represent a non boolean value: ${B(t)}`
    );
  },
  parseValue(e) {
    if (typeof e != "boolean")
      throw new D(
        `Boolean cannot represent a non boolean value: ${B(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== V.BOOLEAN)
      throw new D(
        `Boolean cannot represent a non boolean value: ${ot(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
});
new Ut({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(e) {
    const t = ln(e);
    if (typeof t == "string")
      return t;
    if (Number.isInteger(t))
      return String(t);
    throw new D(
      `ID cannot represent value: ${B(e)}`
    );
  },
  parseValue(e) {
    if (typeof e == "string")
      return e;
    if (typeof e == "number" && Number.isInteger(e))
      return e.toString();
    throw new D(`ID cannot represent value: ${B(e)}`);
  },
  parseLiteral(e) {
    if (e.kind !== V.STRING && e.kind !== V.INT)
      throw new D(
        "ID cannot represent a non-string and non-integer value: " + ot(e),
        {
          nodes: e
        }
      );
    return e.value;
  }
});
function ln(e) {
  if (on(e)) {
    if (typeof e.valueOf == "function") {
      const t = e.valueOf();
      if (!on(t))
        return t;
    }
    if (typeof e.toJSON == "function")
      return e.toJSON();
  }
  return e;
}
class cn {
  constructor(t) {
    var n, r;
    this.name = Me(t.name), this.description = t.description, this.locations = t.locations, this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1, this.extensions = je(t.extensions), this.astNode = t.astNode, Array.isArray(t.locations) || W(!1, `@${t.name} locations must be an Array.`);
    const i = (r = t.args) !== null && r !== void 0 ? r : {};
    on(i) && !Array.isArray(i) || W(
      !1,
      `@${t.name} args must be an object with argument names as keys.`
    ), this.args = Ga(i);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: Qa(this.args),
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
new cn({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    Se.FIELD,
    Se.FRAGMENT_SPREAD,
    Se.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new Gn(Hr),
      description: "Included when true."
    }
  }
});
new cn({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    Se.FIELD,
    Se.FRAGMENT_SPREAD,
    Se.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new Gn(Hr),
      description: "Skipped when true."
    }
  }
});
const Lu = "No longer supported";
new cn({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    Se.FIELD_DEFINITION,
    Se.ARGUMENT_DEFINITION,
    Se.INPUT_FIELD_DEFINITION,
    Se.ENUM_VALUE
  ],
  args: {
    reason: {
      type: Wa,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: Lu
    }
  }
});
new cn({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [Se.SCALAR],
  args: {
    url: {
      type: new Gn(Wa),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
});
function Ht(e, t, n) {
  if (e) {
    if (e.kind === V.VARIABLE) {
      const r = e.name.value;
      if (n == null || n[r] === void 0)
        return;
      const i = n[r];
      return i === null && Xe(t) ? void 0 : i;
    }
    if (Xe(t))
      return e.kind === V.NULL ? void 0 : Ht(e, t.ofType, n);
    if (e.kind === V.NULL)
      return null;
    if (Va(t)) {
      const r = t.ofType;
      if (e.kind === V.LIST) {
        const a = [];
        for (const o of e.values)
          if (Yi(o, n)) {
            if (Xe(r))
              return;
            a.push(null);
          } else {
            const s = Ht(o, r, n);
            if (s === void 0)
              return;
            a.push(s);
          }
        return a;
      }
      const i = Ht(e, r, n);
      return i === void 0 ? void 0 : [i];
    }
    if ($a(t)) {
      if (e.kind !== V.OBJECT)
        return;
      const r = /* @__PURE__ */ Object.create(null), i = Jr(e.fields, (a) => a.name.value);
      for (const a of Object.values(t.getFields())) {
        const o = i[a.name];
        if (!o || Yi(o.value, n)) {
          if (a.defaultValue !== void 0)
            r[a.name] = a.defaultValue;
          else if (Xe(a.type))
            return;
          continue;
        }
        const s = Ht(o.value, a.type, n);
        if (s === void 0)
          return;
        r[a.name] = s;
      }
      return r;
    }
    if (ku(t)) {
      let r;
      try {
        r = t.parseLiteral(e, n);
      } catch {
        return;
      }
      return r === void 0 ? void 0 : r;
    }
    Pa(!1, "Unexpected input type: " + B(t));
  }
}
function Yi(e, t) {
  return e.kind === V.VARIABLE && (t == null || t[e.name.value] === void 0);
}
function Bu(e, t, n) {
  var r;
  const i = {}, a = (r = t.arguments) !== null && r !== void 0 ? r : [], o = Jr(a, (s) => s.name.value);
  for (const s of e.args) {
    const l = s.name, d = s.type, c = o[l];
    if (!c) {
      if (s.defaultValue !== void 0)
        i[l] = s.defaultValue;
      else if (Xe(d))
        throw new D(
          `Argument "${l}" of required type "${B(d)}" was not provided.`,
          {
            nodes: t
          }
        );
      continue;
    }
    const f = c.value;
    let p = f.kind === V.NULL;
    if (f.kind === V.VARIABLE) {
      const m = f.name.value;
      if (n == null || !qu(n, m)) {
        if (s.defaultValue !== void 0)
          i[l] = s.defaultValue;
        else if (Xe(d))
          throw new D(
            `Argument "${l}" of required type "${B(d)}" was provided the variable "$${m}" which was not provided a runtime value.`,
            {
              nodes: f
            }
          );
        continue;
      }
      p = n[m] == null;
    }
    if (p && Xe(d))
      throw new D(
        `Argument "${l}" of non-null type "${B(d)}" must not be null.`,
        {
          nodes: f
        }
      );
    const h = Ht(f, d, n);
    if (h === void 0)
      throw new D(
        `Argument "${l}" has invalid value ${ot(f)}.`,
        {
          nodes: f
        }
      );
    i[l] = h;
  }
  return i;
}
function Uu(e, t, n) {
  var r;
  const i = (r = t.directives) === null || r === void 0 ? void 0 : r.find(
    (a) => a.name.value === e.name
  );
  if (i)
    return Bu(e, i, n);
}
function qu(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
const Gu = new cn({
  name: "live",
  description: "Instruction for establishing a live connection that is updated once the underlying data changes.",
  locations: [Se.QUERY],
  args: {
    if: {
      type: Hr,
      defaultValue: !0,
      description: "Whether the query should be live or not."
    },
    throttle: {
      type: Vu,
      description: 'Propose a desired throttle interval ot the server in order to receive updates to at most once per "throttle" milliseconds. The server must not accept this value.'
    }
  }
}), Ja = (e) => e == null, zu = (e) => {
  var t;
  if (e.kind !== "OperationDefinition" || e.operation !== "query")
    return null;
  const n = (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
  return Ja(n) ? null : n;
}, Qu = (e, t) => {
  var n;
  const r = Uu(Gu, { directives: [e] }, t);
  return {
    isLive: (r == null ? void 0 : r.if) === !0,
    throttleValue: (n = r == null ? void 0 : r.throttle) !== null && n !== void 0 ? n : null
  };
}, Wu = (e, t) => {
  const n = zu(e);
  return Ja(n) ? !1 : Qu(n, t).isLive;
};
function Ju(e, t, n) {
  const r = async function* () {
    yield* e;
  }(), i = r.return.bind(r);
  if (t && (r.return = (...a) => (t(), i(...a))), n) {
    const a = r.throw.bind(r);
    r.throw = (o) => (n(o), a(o));
  }
  return r;
}
function Hi() {
  const e = {};
  return e.promise = new Promise((t, n) => {
    e.resolve = t, e.reject = n;
  }), e;
}
function Yu() {
  let e = {
    type: "running"
    /* running */
  }, t = Hi();
  const n = [];
  function r(o) {
    e.type === "running" && (n.push(o), t.resolve(), t = Hi());
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
  }(), a = Ju(i, () => {
    e.type === "running" && (e = {
      type: "finished"
      /* finished */
    }, t.resolve());
  }, (o) => {
    e.type === "running" && (e = {
      type: "error",
      error: o
    }, t.resolve());
  });
  return {
    pushValue: r,
    asyncIterableIterator: a
  };
}
const Hu = (e) => {
  const { pushValue: t, asyncIterableIterator: n } = Yu(), r = e({
    next: (o) => {
      t(o);
    },
    complete: () => {
      n.return();
    },
    error: (o) => {
      n.throw(o);
    }
  }), i = n.return;
  let a;
  return n.return = () => (a === void 0 && (r(), a = i()), a), n;
};
function Ku(e, t) {
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
function ge(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function yt(e) {
  return ge(e) === "object";
}
function Xu(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function Ki(e, t) {
  return e.length < 124 ? e : t;
}
const Zu = "graphql-transport-ws";
var me;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(me || (me = {}));
var K;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(K || (K = {}));
function Ya(e) {
  if (!yt(e))
    throw new Error(`Message is expected to be an object, but got ${ge(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${ge(e.type)}`);
  switch (e.type) {
    case K.ConnectionInit:
    case K.ConnectionAck:
    case K.Ping:
    case K.Pong: {
      if (e.payload != null && !yt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case K.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ge(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!yt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ge(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${ge(e.payload.query)}`);
      if (e.payload.variables != null && !yt(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${ge(e.payload.variables)}`);
      if (e.payload.operationName != null && ge(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${ge(e.payload.operationName)}`);
      if (e.payload.extensions != null && !yt(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${ge(e.payload.extensions)}`);
      break;
    }
    case K.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ge(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!yt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ge(e.payload)}`);
      break;
    }
    case K.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ge(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Xu(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case K.Complete: {
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
function el(e, t) {
  return Ya(typeof e == "string" ? JSON.parse(e, t) : e);
}
function Jt(e, t) {
  return Ya(e), JSON.stringify(e, t);
}
function tl(e) {
  const {
    url: t,
    connectionParams: n,
    lazy: r = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: s,
    connectionAckWaitTimeout: l = 0,
    retryAttempts: d = 5,
    retryWait: c = async function(q) {
      let $ = 1e3;
      for (let F = 0; F < q; F++)
        $ *= 2;
      await new Promise((F) => setTimeout(F, $ + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: f = wn,
    isFatalConnectionProblem: p,
    on: h,
    webSocketImpl: m,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: I = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (q) => {
        const $ = Math.random() * 16 | 0;
        return (q == "x" ? $ : $ & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: E,
    jsonMessageReviver: k
  } = e;
  let w;
  if (m) {
    if (!rl(m))
      throw new Error("Invalid WebSocket implementation provided");
    w = m;
  } else
    typeof WebSocket < "u" ? w = WebSocket : typeof global < "u" ? w = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (w = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!w)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const C = w, y = (() => {
    const O = (() => {
      const $ = {};
      return {
        on(F, z) {
          return $[F] = z, () => {
            delete $[F];
          };
        },
        emit(F) {
          var z;
          "id" in F && ((z = $[F.id]) === null || z === void 0 || z.call($, F));
        }
      };
    })(), q = {
      connecting: h != null && h.connecting ? [h.connecting] : [],
      opened: h != null && h.opened ? [h.opened] : [],
      connected: h != null && h.connected ? [h.connected] : [],
      ping: h != null && h.ping ? [h.ping] : [],
      pong: h != null && h.pong ? [h.pong] : [],
      message: h != null && h.message ? [O.emit, h.message] : [O.emit],
      closed: h != null && h.closed ? [h.closed] : [],
      error: h != null && h.error ? [h.error] : []
    };
    return {
      onMessage: O.on,
      on($, F) {
        const z = q[$];
        return z.push(F), () => {
          z.splice(z.indexOf(F), 1);
        };
      },
      emit($, ...F) {
        for (const z of [...q[$]])
          z(...F);
      }
    };
  })();
  function N(O) {
    const q = [
      // errors are fatal and more critical than close events, throw them first
      y.on("error", ($) => {
        q.forEach((F) => F()), O($);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      y.on("closed", ($) => {
        q.forEach((F) => F()), O($);
      })
    ];
  }
  let v, U = 0, Ze, Nt = !1, At = 0, fn = !1;
  async function Gt() {
    clearTimeout(Ze);
    const [O, q] = await (v ?? (v = new Promise((z, $e) => (async () => {
      if (Nt) {
        if (await c(At), !U)
          return v = void 0, $e({ code: 1e3, reason: "All Subscriptions Gone" });
        At++;
      }
      y.emit("connecting");
      const M = new C(typeof t == "function" ? await t() : t, Zu);
      let Je, et;
      function ct() {
        isFinite(o) && o > 0 && (clearTimeout(et), et = setTimeout(() => {
          M.readyState === C.OPEN && (M.send(Jt({ type: K.Ping })), y.emit("ping", !1, void 0));
        }, o));
      }
      N((te) => {
        v = void 0, clearTimeout(Je), clearTimeout(et), $e(te), wn(te) && te.code === 4499 && (M.close(4499, "Terminated"), M.onerror = null, M.onclose = null);
      }), M.onerror = (te) => y.emit("error", te), M.onclose = (te) => y.emit("closed", te), M.onopen = async () => {
        try {
          y.emit("opened", M);
          const te = typeof n == "function" ? await n() : n;
          if (M.readyState !== C.OPEN)
            return;
          M.send(Jt(te ? {
            type: K.ConnectionInit,
            payload: te
          } : {
            type: K.ConnectionInit
            // payload is completely absent if not provided
          }, E)), isFinite(l) && l > 0 && (Je = setTimeout(() => {
            M.close(me.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), ct();
        } catch (te) {
          y.emit("error", te), M.close(me.InternalClientError, Ki(te instanceof Error ? te.message : new Error(te).message, "Internal client error"));
        }
      };
      let tt = !1;
      M.onmessage = ({ data: te }) => {
        try {
          const J = el(te, k);
          if (y.emit("message", J), J.type === "ping" || J.type === "pong") {
            y.emit(J.type, !0, J.payload), J.type === "pong" ? ct() : s || (M.send(Jt(J.payload ? {
              type: K.Pong,
              payload: J.payload
            } : {
              type: K.Pong
              // payload is completely absent if not provided
            })), y.emit("pong", !1, J.payload));
            return;
          }
          if (tt)
            return;
          if (J.type !== K.ConnectionAck)
            throw new Error(`First message cannot be of type ${J.type}`);
          clearTimeout(Je), tt = !0, y.emit("connected", M, J.payload), Nt = !1, At = 0, z([
            M,
            new Promise((pn, Ot) => N(Ot))
          ]);
        } catch (J) {
          M.onmessage = null, y.emit("error", J), M.close(me.BadResponse, Ki(J instanceof Error ? J.message : new Error(J).message, "Bad response"));
        }
      };
    })())));
    O.readyState === C.CLOSING && await q;
    let $ = () => {
    };
    const F = new Promise((z) => $ = z);
    return [
      O,
      $,
      Promise.race([
        // wait for
        F.then(() => {
          if (!U) {
            const z = () => O.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? Ze = setTimeout(() => {
              O.readyState === C.OPEN && z();
            }, a) : z();
          }
        }),
        // or
        q
      ])
    ];
  }
  function Oe(O) {
    if (wn(O) && (nl(O.code) || [
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
    ].includes(O.code)))
      throw O;
    if (fn)
      return !1;
    if (wn(O) && O.code === 1e3)
      return U > 0;
    if (!d || At >= d || !f(O) || p != null && p(O))
      throw O;
    return Nt = !0;
  }
  return r || (async () => {
    for (U++; ; )
      try {
        const [, , O] = await Gt();
        await O;
      } catch (O) {
        try {
          if (!Oe(O))
            return;
        } catch (q) {
          return i == null ? void 0 : i(q);
        }
      }
  })(), {
    on: y.on,
    subscribe(O, q) {
      const $ = I(O);
      let F = !1, z = !1, $e = () => {
        U--, F = !0;
      };
      return (async () => {
        for (U++; ; )
          try {
            const [M, Je, et] = await Gt();
            if (F)
              return Je();
            const ct = y.onMessage($, (tt) => {
              switch (tt.type) {
                case K.Next: {
                  q.next(tt.payload);
                  return;
                }
                case K.Error: {
                  z = !0, F = !0, q.error(tt.payload), $e();
                  return;
                }
                case K.Complete: {
                  F = !0, $e();
                  return;
                }
              }
            });
            M.send(Jt({
              id: $,
              type: K.Subscribe,
              payload: O
            }, E)), $e = () => {
              !F && M.readyState === C.OPEN && M.send(Jt({
                id: $,
                type: K.Complete
              }, E)), U--, F = !0, Je();
            }, await et.finally(ct);
            return;
          } catch (M) {
            if (!Oe(M))
              return;
          }
      })().then(() => {
        z || q.complete();
      }).catch((M) => {
        q.error(M);
      }), () => {
        F || $e();
      };
    },
    async dispose() {
      if (fn = !0, v) {
        const [O] = await v;
        O.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      v && y.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function wn(e) {
  return yt(e) && "code" in e && "reason" in e;
}
function nl(e) {
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
function rl(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var Pt = null;
typeof WebSocket < "u" ? Pt = WebSocket : typeof MozWebSocket < "u" ? Pt = MozWebSocket : typeof global < "u" ? Pt = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Pt = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Pt = self.WebSocket || self.MozWebSocket);
const il = Pt;
class Ha extends Error {
}
class al {
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
    throw Qe(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Ha("Transaction rolled back.");
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
class ol {
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
const sl = (e) => {
  const t = [...e.definitions].reverse().find((n) => n.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((r) => r.kind == "Field").name.value;
}, Xi = va({
  onOperation: (e) => {
    var t, n;
    (t = (n = e.context).operationName) !== null && t !== void 0 || (n.operationName = sl(e.query) || "unknown");
  }
}), ul = va({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, n] = e.context.url.split("?"), r = new URLSearchParams(n);
        r.set("operation", e.context.operationName), e.context.url = `${t}?${r.toString()}`;
      } catch {
      }
  }
});
function ll(e) {
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
      cl,
      dl,
      fl,
      pl,
      hl
    ];
    for (const o of a)
      if (o(r), r.stopped) {
        r.stopped = !1;
        break;
      }
    if (r.children)
      for (const o of r.children)
        n(o), r.result = (i = r.result) !== null && i !== void 0 ? i : r.left, "result" in o ? r.result[o.name] = o.result : delete r.result[o.name];
  }
  return n(t), t.result;
}
function cl(e) {
  if (!(!e || !e.children) && !e.delta._t) {
    for (let t of e.children)
      Object.prototype.hasOwnProperty.call(e.left, t.name) && t.result === void 0 ? delete e.left[t.name] : e.left[t.name] !== t.result && (e.left[t.name] = t.result);
    e.result = e.left, e.stopped = !0;
  }
}
function dl(e) {
  if (!e || !e.children || e.delta._t !== "a")
    return;
  let t = e.children.length, n;
  for (let r = 0; r < t; r++)
    n = e.children[r], e.left[n.name] = n.result;
  e.result = e.left, e.stopped = !0;
}
function fl(e) {
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
function pl(e) {
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
const Zi = 3;
let ea = {
  numerically(e, t) {
    return e - t;
  },
  numericallyBy(e) {
    return (t, n) => t[e] - n[e];
  }
};
function hl(e) {
  if (!e.nested || e.delta._t !== "a")
    return;
  let t, n, r = e.delta, i = e.left, a = [], o = [], s = [];
  for (t in r)
    if (t !== "_t")
      if (t[0] === "_")
        if (r[t][2] === 0 || r[t][2] === Zi)
          a.push(parseInt(t.slice(1), 10));
        else
          throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${r[t][2]}`);
      else
        r[t].length === 1 ? o.push({
          index: parseInt(t, 10),
          value: r[t][0]
        }) : s.push({
          index: parseInt(t, 10),
          delta: r[t]
        });
  for (a = a.sort(ea.numerically), t = a.length - 1; t >= 0; t--) {
    n = a[t];
    let c = r[`_${n}`], f = i.splice(n, 1)[0];
    c[2] === Zi && o.push({
      index: c[1],
      value: f
    });
  }
  o = o.sort(ea.numericallyBy("index"));
  let l = o.length;
  for (t = 0; t < l; t++) {
    let c = o[t];
    i.splice(c.index, 0, c.value);
  }
  let d = s.length;
  if (d > 0)
    for (t = 0; t < d; t++) {
      let c = s[t];
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
class Ka extends Error {
  constructor(t) {
    super(t), Object.defineProperty(this, "name", {
      value: "RepeaterOverflowError",
      enumerable: !1
    }), typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf(this, this.constructor.prototype) : this.__proto__ = this.constructor.prototype, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, this.constructor);
  }
}
function Er(e) {
  e != null && typeof e.then == "function" && e.then(jn, jn);
}
const ir = 0, ta = 1, wt = 2, Rn = 3, Tr = 4, Cn = 1024, jn = () => {
};
function Rt(e) {
  const t = e.err, n = Promise.resolve(e.execution).then((r) => {
    if (t != null)
      throw t;
    return r;
  });
  return e.err = void 0, e.execution = n.then(() => {
  }, () => {
  }), e.pending === void 0 ? n : e.pending.then(() => n);
}
function bt(e, t) {
  const n = e.state >= Rn;
  return Promise.resolve(t).then((r) => !n && e.state >= Tr ? Rt(e).then((i) => ({
    value: i,
    done: !0
  })) : { value: r, done: n });
}
function Kr(e, t) {
  if (!(e.state >= wt))
    if (e.state = wt, e.onnext(), e.onstop(), e.err == null && (e.err = t), e.pushes.length === 0 && (typeof e.buffer > "u" || e.buffer.empty))
      tn(e);
    else
      for (const n of e.pushes)
        n.resolve();
}
function tn(e) {
  if (!(e.state >= Rn)) {
    e.state < wt && Kr(e), e.state = Rn, e.buffer = void 0;
    for (const t of e.nexts) {
      const n = e.pending === void 0 ? Rt(e) : e.pending.then(() => Rt(e));
      t.resolve(bt(e, n));
    }
    e.pushes = [], e.nexts = [];
  }
}
function na(e) {
  e.state >= Tr || (e.state < Rn && tn(e), e.state = Tr);
}
function ml(e, t) {
  if (Er(t), e.pushes.length >= Cn)
    throw new Ka(`No more than ${Cn} pending calls to push are allowed on a single repeater.`);
  if (e.state >= wt)
    return Promise.resolve(void 0);
  let n = e.pending === void 0 ? Promise.resolve(t) : e.pending.then(() => t);
  n = n.catch((s) => {
    e.state < wt && (e.err = s), na(e);
  });
  let r;
  e.nexts.length ? (e.nexts.shift().resolve(bt(e, n)), e.nexts.length ? r = Promise.resolve(e.nexts[0].value) : r = new Promise((l) => e.onnext = l)) : typeof e.buffer < "u" && !e.buffer.full ? (e.buffer.add(n), r = Promise.resolve(void 0)) : r = new Promise((s) => e.pushes.push({ resolve: s, value: n }));
  let i = !0;
  const a = {}, o = r.catch((s) => {
    if (i)
      throw s;
  });
  return a.then = (s, l) => (i = !1, Promise.prototype.then.call(r, s, l)), a.catch = (s) => (i = !1, Promise.prototype.catch.call(r, s)), a.finally = r.finally.bind(r), e.pending = n.then(() => o).catch((s) => {
    e.err = s, na(e);
  }), a;
}
function yl(e) {
  const t = Kr.bind(null, e), n = new Promise((r) => e.onstop = r);
  return t.then = n.then.bind(n), t.catch = n.catch.bind(n), t.finally = n.finally.bind(n), t;
}
function bl(e) {
  if (e.state >= ta)
    return;
  e.state = ta;
  const t = ml.bind(null, e), n = yl(e);
  e.execution = new Promise((r) => r(e.executor(t, n))), e.execution.catch(() => Kr(e));
}
const Nn = /* @__PURE__ */ new WeakMap();
class gl {
  constructor(t, n) {
    Nn.set(this, {
      executor: t,
      buffer: n,
      err: void 0,
      state: ir,
      pushes: [],
      nexts: [],
      pending: void 0,
      execution: void 0,
      onnext: jn,
      onstop: jn
    });
  }
  next(t) {
    Er(t);
    const n = Nn.get(this);
    if (n === void 0)
      throw new Error("WeakMap error");
    if (n.nexts.length >= Cn)
      throw new Ka(`No more than ${Cn} pending calls to next are allowed on a single repeater.`);
    if (n.state <= ir && bl(n), n.onnext(t), typeof n.buffer < "u" && !n.buffer.empty) {
      const r = bt(n, n.buffer.remove());
      if (n.pushes.length) {
        const i = n.pushes.shift();
        n.buffer.add(i.value), n.onnext = i.resolve;
      }
      return r;
    } else if (n.pushes.length) {
      const r = n.pushes.shift();
      return n.onnext = r.resolve, bt(n, r.value);
    } else if (n.state >= wt)
      return tn(n), bt(n, Rt(n));
    return new Promise((r) => n.nexts.push({ resolve: r, value: t }));
  }
  return(t) {
    Er(t);
    const n = Nn.get(this);
    if (n === void 0)
      throw new Error("WeakMap error");
    return tn(n), n.execution = Promise.resolve(n.execution).then(() => t), bt(n, Rt(n));
  }
  throw(t) {
    const n = Nn.get(this);
    if (n === void 0)
      throw new Error("WeakMap error");
    return n.state <= ir || n.state >= wt || typeof n.buffer < "u" && !n.buffer.empty ? (tn(n), n.err == null && (n.err = t), bt(n, Rt(n))) : this.next(Promise.reject(t));
  }
  [Symbol.asyncIterator]() {
    return this;
  }
}
const vl = (e) => (t) => new gl(async (n, r) => {
  const i = t[Symbol.asyncIterator]();
  r.then(() => {
    var l;
    return (l = i.return) === null || l === void 0 ? void 0 : l.call(i);
  }).catch(console.log);
  let a = null, o = 0, s;
  for (; (s = await i.next()).done === !1; ) {
    if ("revision" in s.value && s.value.revision) {
      const l = {};
      if (s.value.revision === 1) {
        if (!s.value.data)
          throw new Error("Missing data.");
        l.data = s.value.data, a = s.value.data, o = 1;
      } else {
        if (!a)
          throw new Error("No previousData available.");
        if (!s.value.patch)
          throw new Error("Missing patch.");
        if (o + 1 !== s.value.revision)
          throw new Error("Wrong revision received.");
        a = e(a, s.value.patch), l.data = { ...a }, o++;
      }
      s.value.extensions && (l.extensions = s.value.extensions), s.value.errors && (l.errors = s.value.errors), await n(l);
      continue;
    }
    await n(s.value);
  }
  r();
}), Sl = (e, t) => ll({
  left: e,
  delta: t
}), Il = vl(Sl);
var kr;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(kr || (kr = {}));
const wl = 2, Nl = 4800, Al = 1e4, Ol = [me.ConnectionAcknowledgementTimeout, me.ConnectionInitialisationTimeout], ra = Symbol.for("gadget/connection"), El = "token", Tl = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var ne;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(ne || (ne = {}));
const An = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class Xa {
  constructor(t) {
    var n, r, i, a, o;
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
      value: async (s, l) => {
        let d, c;
        if (l ? (d = l, c = s) : (d = s, c = {}), this.currentTransaction)
          return await d(this.currentTransaction);
        let f = null, p;
        try {
          f = await this.waitForOpenedConnection({
            isFatalConnectionProblem(I) {
              return console.warn("Transport error encountered during transaction processing", I), !0;
            },
            connectionAckWaitTimeout: Nl,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const h = new Pi({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              Xi,
              ...this.exchanges.beforeAsync,
              er({
                forwardSubscription(I) {
                  const E = { ...I, query: I.query || "" };
                  return {
                    subscribe: (k) => ({
                      unsubscribe: f.subscribe(E, k)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          h[ra] = this, p = new al(h, f), this.currentTransaction = p, await p.start();
          const m = await d(p);
          return await p.commit(), m;
        } catch (h) {
          try {
            p != null && p.open && await p.rollback();
          } catch (m) {
            m instanceof Ha || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", m);
          }
          throw Sr(h) ? new xi(h) : h;
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
        s = kl(s, (d = this.options.baseRouteURL) !== null && d !== void 0 ? d : this.options.endpoint), this.isGadgetRequest(s) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == ne.Custom && await this.options.authenticationMode.custom.processFetch(s, l));
        const c = await this._fetchImplementation(s, l);
        if (this.authenticationMode == ne.BrowserSession) {
          const f = c.headers.get("x-set-authorization"), p = f != null && f.startsWith("Session ") ? f.replace("Session ", "") : null;
          p && this.sessionTokenStore.setItem(this.sessionStorageKey, p);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof An < "u" && An.fetch ? this._fetchImplementation = An.fetch.bind(An) : this._fetchImplementation = async (...s) => {
      let l = await import("./browser-ponyfill-23153f54.js").then((d) => d.b);
      return l.default && (l = l.default), await l(...s);
    }, this.websocketImplementation = (r = (n = t.websocketImplementation) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.WebSocket) !== null && r !== void 0 ? r : il, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${El}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = ne.InternalAuthToken : t.apiKey ? this.authenticationMode = ne.APIKey : t.custom && (this.authenticationMode = ne.Custom), this.options.authenticationMode = t), (n = this.authenticationMode) !== null && n !== void 0 || (this.authenticationMode = ne.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = ne.BrowserSession;
    const n = !t || typeof t == "boolean" ? en.Durable : t.storageType;
    let r;
    n == en.Durable && Fi("localStorage") ? r = window.localStorage : n == en.Session && Fi("sessionStorage") ? r = window.sessionStorage : r = new ol(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && r.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = r, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let n;
    if (typeof t == "string" ? n = t : typeof t == "object" && "url" in t ? n = t.url : n = String(t), _r(this.options.endpoint))
      return !!_r(n);
    const r = new URL(this.options.endpoint).host;
    return n.includes(r);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Xi, ul];
    typeof window < "u" && t.push(vs), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      er({
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
      er({
        isSubscriptionOperation: (r) => r.query.definitions.some((i) => Wu(i, r.variables)),
        forwardSubscription: (r) => ({
          subscribe: (i) => {
            const a = { ...r, query: r.query || "" };
            return {
              unsubscribe: Ku(Il(Hu((o) => this.getBaseSubscriptionClient().subscribe(a, o))), i)
            };
          }
        })
      }),
      Ss,
      ...this.exchanges.afterAll
    );
    const n = new Pi({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return n[ra] = this, n;
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
    return tl({
      url: n,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var r, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == ne.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == ne.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == ne.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == ne.Custom && await ((i = (r = this.options.authenticationMode) === null || r === void 0 ? void 0 : r.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (r, i) => {
          var a, o, s, l, d, c;
          if (this.authenticationMode == ne.BrowserSession && (i != null && i.sessionToken)) {
            const f = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (f !== null && typeof f == "object" ? f.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (l = (s = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || s === void 0 ? void 0 : s.connected) === null || l === void 0 || l.call(s, r, i), (c = (d = t == null ? void 0 : t.on) === null || d === void 0 ? void 0 : d.connected) === null || c === void 0 || c.call(d, r, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const n = {};
    if (this.authenticationMode == ne.InternalAuthToken)
      n.authorization = "Basic " + Tl("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == ne.APIKey)
      n.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == ne.BrowserSession) {
      const r = this.sessionTokenStore.getItem(this.sessionStorageKey);
      r && (n.authorization = `Session ${r}`);
    }
    return n["x-gadget-environment"] = this.environment, n;
  }
  async waitForOpenedConnection(t) {
    let n = this.newSubscriptionClient(t), r = [], i = t.connectionAttempts || wl;
    const a = t.connectionGlobalTimeoutMs || Al, o = () => {
      r.forEach((s) => s()), r = [];
    };
    return await new Promise((s, l) => {
      const d = setTimeout(() => {
        this.disposeClient(n), f(new Es("Timeout opening websocket connection to Gadget API"));
      }, a), c = (m) => {
        if (Sr(m)) {
          if (m.code == kr.TooManyRequests)
            return o(), f(new Ts(m.reason));
          if (Ol.includes(m.code) && i > 0) {
            i -= 1, this.disposeClient(n), n = this.newSubscriptionClient(t), h();
            return;
          }
        }
        clearTimeout(d), l(new xi(m));
      }, f = (m) => {
        clearTimeout(d), l(m);
      }, p = () => {
        clearTimeout(d), s(n);
      }, h = () => {
        o(), r.push(n.on("connected", p)), r.push(n.on("closed", c)), r.push(n.on("error", f));
      };
      h();
    }).finally(o);
  }
  disposeClient(t) {
    const n = t.dispose();
    n && n.catch((r) => console.error(`Error closing SubscriptionClient: ${r.message}`));
  }
  getBaseSubscriptionClient() {
    return this.baseSubscriptionClient || (this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 })), this.baseSubscriptionClient;
  }
}
Object.defineProperty(Xa, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.20"
});
function kl(e, t) {
  if (typeof e != "string")
    return e;
  if (_r(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function _r(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const dn = `
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
`, qt = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, _l = (e) => `
    query InternalFind${Re(e)}($id: GadgetID!, $select: [String!]) {
      ${qt(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, Za = (e, t) => ({
  search: t != null && t.search ? Z({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? Z({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? Z({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? Z({ value: eo(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), Pl = (e, t) => {
  const n = Re(e), r = Za(n, t);
  return ut({
    type: "query",
    name: `InternalFindFirst${n}`,
    fields: {
      internal: {
        [`list${n}`]: st({
          ...r,
          first: Z({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, xl = (e, t) => {
  const n = Re(e), r = Za(n, t);
  return ut({
    type: "query",
    name: `InternalFindMany${n}`,
    fields: {
      internal: {
        [`list${n}`]: st({
          ...r,
          after: Z({ value: t == null ? void 0 : t.after, type: "String" }),
          before: Z({ value: t == null ? void 0 : t.before, type: "String" }),
          first: Z({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: Z({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, Dl = (e) => {
  const t = Re(e);
  return `
    ${dn}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${qt(e)}
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
}, Fl = (e, t) => {
  const n = Re(e), r = Re(t);
  return `
    ${dn}

    mutation InternalBulkCreate${r}($records: [Internal${n}Input]!) {
      ${qt(e)}
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
}, Rl = (e) => {
  const t = Re(e);
  return `
    ${dn}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${qt(e)}
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
}, Cl = (e) => {
  const t = Re(e);
  return `
    ${dn}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${qt(e)}
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
}, jl = (e) => {
  const t = Re(e);
  return `
    ${dn}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${qt(e)}
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
class xe {
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
    }), this.capitalizedApiIdentifier = It(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((r) => r === this.apiIdentifier);
  }
  getRecordFromData(t, n) {
    let r = t;
    if (!this.validateRecord(t))
      throw new Ln(`Invalid arguments found in variables. Did you mean to use ${n}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = await this.connection.currentClient.query(_l(this.apiIdentifier), { id: t, select: eo(n == null ? void 0 : n.select) }).toPromise(), o = (r ? Qe : Xt)(i, ["internal", this.apiIdentifier]);
    return Zt(i, o);
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
    const n = xl(this.apiIdentifier, t), r = await this.connection.currentClient.query(n.query, n.variables).toPromise(), i = Xt(r, ["internal", `list${this.capitalizedApiIdentifier}`]), a = an(r, i);
    return Bt.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const r = Pl(this.apiIdentifier, t), i = await this.connection.currentClient.query(r.query, r.variables).toPromise();
    let a;
    n === !1 ? a = Xt(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = Qe(i, ["internal", `list${this.capitalizedApiIdentifier}`], n);
    const o = an(i, a);
    return Bt.boot(this, o, { options: t, pageInfo: a.pageInfo })[0];
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
    const n = await this.connection.currentClient.mutation(Dl(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), r = at(n, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return Zt(n, r[this.apiIdentifier]);
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
      throw new gr("Cannot perform bulkCreate without a pluralApiIdentifier");
    const r = Re(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(Fl(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = at(i, ["internal", `bulkCreate${r}`]);
    return Vr(i, a[this.options.pluralApiIdentifier]);
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
    vr(t, "Can't update a record without an ID passed");
    const r = await this.connection.currentClient.mutation(Rl(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(n, "update")
    }).toPromise(), i = at(r, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return Zt(r, i[this.apiIdentifier]);
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
    vr(t, "Can't delete a record without an ID");
    const n = await this.connection.currentClient.mutation(Cl(this.apiIdentifier), { id: t }).toPromise();
    at(n, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const n = await this.connection.currentClient.mutation(jl(this.apiIdentifier), t).toPromise();
    at(n, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function eo(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [n, r] of Object.entries(e))
    r && t.push(n);
  return t;
}
const _e = (e, t, n, r) => {
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
          async function(o, s) {
            return await Qs(
              this,
              a.operationName,
              a.findByField,
              o,
              n,
              e,
              s
            );
          },
          a
        ) : i.prototype[a.type] = Object.assign(
          async function(o, s) {
            const l = await Mi(
              this,
              e,
              o,
              n,
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
          return await $i(this, t, n, e, o);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        i.prototype[a.type] = Object.assign(async function(o) {
          const s = await $i(
            this,
            t,
            n,
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
          return await Mi(this, a.operationName, void 0, n, e, o);
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
                    (c) => to(this[a.singleActionFunctionName], void 0, c)
                  )
                }
              }, await Vi(
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
          const o = !!a.variables.id, s = Object.keys(a.variables).filter((l) => l != "id").length > 0;
          i.prototype[a.functionName] = Object.assign(
            async function(...l) {
              const [d, c] = Ml(a, o, s, l);
              return await Vi(
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
function to(e, t, n = {}) {
  var a;
  if (e.hasAmbiguousIdentifier && Object.keys(n).some((o) => {
    var s;
    return !((s = e.paramOnlyVariables) != null && s.includes(o)) && o !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let r;
  const i = Object.entries(e.variables).find(([o, s]) => o === "id" && s.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in n && typeof n[e.modelApiIdentifier] == "object" && n[e.modelApiIdentifier] !== null || !e.variables[e.modelApiIdentifier])
      r = n;
    else {
      r = {
        [e.modelApiIdentifier]: {}
      };
      for (const [o, s] of Object.entries(n))
        (a = e.paramOnlyVariables) != null && a.includes(o) ? r[o] = s : i && o === i[0] ? r.id = s : r[e.modelApiIdentifier][o] = s;
    }
  else
    r = n;
  return r.id ?? (r.id = t), r;
}
function Ml(e, t, n, r) {
  let i, a;
  t && (i = r.shift()), n && (a = r.shift());
  const o = r.shift();
  let s = a;
  (i || a) && (s = to(e, i, a));
  const l = {};
  for (const [d, c] of Object.entries(e.variables))
    l[d] = {
      value: d == "id" ? i : s == null ? void 0 : s[d],
      ...c
    };
  return [l, o];
}
const we = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  email: !0,
  roles: { key: !0, name: !0 },
  updatedAt: !0
}, H = "user", He = "users", $l = _e(
  H,
  He,
  we,
  [
    {
      type: "findOne",
      operationName: H,
      modelApiIdentifier: H,
      findByVariableName: "id",
      defaultSelection: we
    },
    {
      type: "maybeFindOne",
      operationName: H,
      modelApiIdentifier: H,
      findByVariableName: "id",
      defaultSelection: we
    },
    {
      type: "findMany",
      operationName: He,
      modelApiIdentifier: H,
      defaultSelection: we
    },
    {
      type: "findFirst",
      operationName: He,
      modelApiIdentifier: H,
      defaultSelection: we
    },
    {
      type: "maybeFindFirst",
      operationName: He,
      modelApiIdentifier: H,
      defaultSelection: we
    },
    {
      type: "findOne",
      operationName: He,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: H,
      defaultSelection: we
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
      defaultSelection: we
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
      modelSelectionField: He,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: we
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
      defaultSelection: we
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
      modelSelectionField: He,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: we
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
      modelSelectionField: He,
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
      defaultSelection: we
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
      modelSelectionField: He,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: we
    }
  ]
), Ve = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, ye = "session", kt = "sessions", Vl = _e(
  ye,
  kt,
  Ve,
  [
    {
      type: "findOne",
      operationName: ye,
      modelApiIdentifier: ye,
      findByVariableName: "id",
      defaultSelection: Ve
    },
    {
      type: "maybeFindOne",
      operationName: ye,
      modelApiIdentifier: ye,
      findByVariableName: "id",
      defaultSelection: Ve
    },
    {
      type: "findMany",
      operationName: kt,
      modelApiIdentifier: ye,
      defaultSelection: Ve
    },
    {
      type: "findFirst",
      operationName: kt,
      modelApiIdentifier: ye,
      defaultSelection: Ve
    },
    {
      type: "maybeFindFirst",
      operationName: kt,
      modelApiIdentifier: ye,
      defaultSelection: Ve
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
      defaultSelection: Ve
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
      modelSelectionField: kt,
      namespace: "currentSession",
      variables: {
        inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" }
      },
      defaultSelection: Ve
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
      defaultSelection: Ve
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
      modelSelectionField: kt,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: Ve
    }
  ]
), Le = {
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
}, se = "shopifyProduct", dt = "shopifyProducts", Ll = _e(
  se,
  dt,
  Le,
  [
    {
      type: "findOne",
      operationName: se,
      modelApiIdentifier: se,
      findByVariableName: "id",
      defaultSelection: Le
    },
    {
      type: "maybeFindOne",
      operationName: se,
      modelApiIdentifier: se,
      findByVariableName: "id",
      defaultSelection: Le
    },
    {
      type: "findMany",
      operationName: dt,
      modelApiIdentifier: se,
      defaultSelection: Le
    },
    {
      type: "findFirst",
      operationName: dt,
      modelApiIdentifier: se,
      defaultSelection: Le
    },
    {
      type: "maybeFindFirst",
      operationName: dt,
      modelApiIdentifier: se,
      defaultSelection: Le
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
      defaultSelection: Le
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
      modelSelectionField: dt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" }
      },
      defaultSelection: Le
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
      defaultSelection: Le
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
      modelSelectionField: dt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyProductsInput!]" }
      },
      defaultSelection: Le
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
      modelSelectionField: dt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Be = {
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
}, ue = "shopifyProductImage", ft = "shopifyProductImages", Bl = _e(
  ue,
  ft,
  Be,
  [
    {
      type: "findOne",
      operationName: ue,
      modelApiIdentifier: ue,
      findByVariableName: "id",
      defaultSelection: Be
    },
    {
      type: "maybeFindOne",
      operationName: ue,
      modelApiIdentifier: ue,
      findByVariableName: "id",
      defaultSelection: Be
    },
    {
      type: "findMany",
      operationName: ft,
      modelApiIdentifier: ue,
      defaultSelection: Be
    },
    {
      type: "findFirst",
      operationName: ft,
      modelApiIdentifier: ue,
      defaultSelection: Be
    },
    {
      type: "maybeFindFirst",
      operationName: ft,
      modelApiIdentifier: ue,
      defaultSelection: Be
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
      defaultSelection: Be
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
      modelSelectionField: ft,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: Be
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
      defaultSelection: Be
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
      modelSelectionField: ft,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: Be
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
      modelSelectionField: ft,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Ue = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  name: !0,
  position: !0,
  updatedAt: !0,
  values: !0
}, le = "shopifyProductOption", pt = "shopifyProductOptions", Ul = _e(
  le,
  pt,
  Ue,
  [
    {
      type: "findOne",
      operationName: le,
      modelApiIdentifier: le,
      findByVariableName: "id",
      defaultSelection: Ue
    },
    {
      type: "maybeFindOne",
      operationName: le,
      modelApiIdentifier: le,
      findByVariableName: "id",
      defaultSelection: Ue
    },
    {
      type: "findMany",
      operationName: pt,
      modelApiIdentifier: le,
      defaultSelection: Ue
    },
    {
      type: "findFirst",
      operationName: pt,
      modelApiIdentifier: le,
      defaultSelection: Ue
    },
    {
      type: "maybeFindFirst",
      operationName: pt,
      modelApiIdentifier: le,
      defaultSelection: Ue
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
      defaultSelection: Ue
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
      modelSelectionField: pt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: Ue
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
      defaultSelection: Ue
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
      modelSelectionField: pt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: Ue
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
      modelSelectionField: pt,
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
}, ce = "shopifyProductVariant", ht = "shopifyProductVariants", ql = _e(
  ce,
  ht,
  qe,
  [
    {
      type: "findOne",
      operationName: ce,
      modelApiIdentifier: ce,
      findByVariableName: "id",
      defaultSelection: qe
    },
    {
      type: "maybeFindOne",
      operationName: ce,
      modelApiIdentifier: ce,
      findByVariableName: "id",
      defaultSelection: qe
    },
    {
      type: "findMany",
      operationName: ht,
      modelApiIdentifier: ce,
      defaultSelection: qe
    },
    {
      type: "findFirst",
      operationName: ht,
      modelApiIdentifier: ce,
      defaultSelection: qe
    },
    {
      type: "maybeFindFirst",
      operationName: ht,
      modelApiIdentifier: ce,
      defaultSelection: qe
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
      modelApiIdentifier: ce,
      modelSelectionField: ht,
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
      modelApiIdentifier: ce,
      modelSelectionField: ht,
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
      modelSelectionField: ht,
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
}, Q = "shopifyShop", Ke = "shopifyShops", Gl = _e(
  Q,
  Ke,
  be,
  [
    {
      type: "findOne",
      operationName: Q,
      modelApiIdentifier: Q,
      findByVariableName: "id",
      defaultSelection: be
    },
    {
      type: "maybeFindOne",
      operationName: Q,
      modelApiIdentifier: Q,
      findByVariableName: "id",
      defaultSelection: be
    },
    {
      type: "findMany",
      operationName: Ke,
      modelApiIdentifier: Q,
      defaultSelection: be
    },
    {
      type: "findFirst",
      operationName: Ke,
      modelApiIdentifier: Q,
      defaultSelection: be
    },
    {
      type: "maybeFindFirst",
      operationName: Ke,
      modelApiIdentifier: Q,
      defaultSelection: be
    },
    {
      type: "action",
      operationName: "createShopifyShop",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Q,
      modelSelectionField: Q,
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
      modelApiIdentifier: Q,
      modelSelectionField: Ke,
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
      modelApiIdentifier: Q,
      modelSelectionField: Q,
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
      modelApiIdentifier: Q,
      modelSelectionField: Ke,
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
      operationName: "bulkDeleteShopifyShops",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Q,
      modelSelectionField: Ke,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "reinstallShopifyShop",
      functionName: "reinstall",
      namespace: null,
      modelApiIdentifier: Q,
      modelSelectionField: Q,
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
      modelApiIdentifier: Q,
      modelSelectionField: Ke,
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
      modelApiIdentifier: Q,
      modelSelectionField: Q,
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
      modelApiIdentifier: Q,
      modelSelectionField: Ke,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUninstallShopifyShopsInput!]" }
      },
      defaultSelection: be
    }
  ]
), Ge = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
}, de = "productPairing", mt = "productPairings", zl = _e(
  de,
  mt,
  Ge,
  [
    {
      type: "findOne",
      operationName: de,
      modelApiIdentifier: de,
      findByVariableName: "id",
      defaultSelection: Ge
    },
    {
      type: "maybeFindOne",
      operationName: de,
      modelApiIdentifier: de,
      findByVariableName: "id",
      defaultSelection: Ge
    },
    {
      type: "findMany",
      operationName: mt,
      modelApiIdentifier: de,
      defaultSelection: Ge
    },
    {
      type: "findFirst",
      operationName: mt,
      modelApiIdentifier: de,
      defaultSelection: Ge
    },
    {
      type: "maybeFindFirst",
      operationName: mt,
      modelApiIdentifier: de,
      defaultSelection: Ge
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
      defaultSelection: Ge
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
      modelSelectionField: mt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateProductPairingsInput!]" }
      },
      defaultSelection: Ge
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
      defaultSelection: Ge
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
      modelSelectionField: mt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateProductPairingsInput!]" }
      },
      defaultSelection: Ge
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
      modelSelectionField: mt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Ne = {
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
}, ie = "shopifySync", nt = "shopifySyncs", Ql = _e(
  ie,
  nt,
  Ne,
  [
    {
      type: "findOne",
      operationName: ie,
      modelApiIdentifier: ie,
      findByVariableName: "id",
      defaultSelection: Ne
    },
    {
      type: "maybeFindOne",
      operationName: ie,
      modelApiIdentifier: ie,
      findByVariableName: "id",
      defaultSelection: Ne
    },
    {
      type: "findMany",
      operationName: nt,
      modelApiIdentifier: ie,
      defaultSelection: Ne
    },
    {
      type: "findFirst",
      operationName: nt,
      modelApiIdentifier: ie,
      defaultSelection: Ne
    },
    {
      type: "maybeFindFirst",
      operationName: nt,
      modelApiIdentifier: ie,
      defaultSelection: Ne
    },
    {
      type: "findOne",
      operationName: nt,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ie,
      defaultSelection: Ne
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
      defaultSelection: Ne
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
      modelSelectionField: nt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCompleteShopifySyncsInput!]" }
      },
      defaultSelection: Ne
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
      defaultSelection: Ne
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
      modelSelectionField: nt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkErrorShopifySyncsInput!]" }
      },
      defaultSelection: Ne
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
      defaultSelection: Ne
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
      modelSelectionField: nt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: Ne
    }
  ]
), De = {
  __typename: !0,
  id: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  updatedAt: !0
}, ae = "ambiguous", rt = "ambiguouss", Wl = _e(
  ae,
  rt,
  De,
  [
    {
      type: "findOne",
      operationName: ae,
      modelApiIdentifier: ae,
      findByVariableName: "id",
      defaultSelection: De
    },
    {
      type: "maybeFindOne",
      operationName: ae,
      modelApiIdentifier: ae,
      findByVariableName: "id",
      defaultSelection: De
    },
    {
      type: "findMany",
      operationName: rt,
      modelApiIdentifier: ae,
      defaultSelection: De
    },
    {
      type: "findFirst",
      operationName: rt,
      modelApiIdentifier: ae,
      defaultSelection: De
    },
    {
      type: "maybeFindFirst",
      operationName: rt,
      modelApiIdentifier: ae,
      defaultSelection: De
    },
    {
      type: "findOne",
      operationName: rt,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ae,
      defaultSelection: De
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
      defaultSelection: De
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
      modelSelectionField: rt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAmbiguousInput!]" } },
      defaultSelection: De
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
      defaultSelection: De
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
      modelSelectionField: rt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAmbiguousInput!]" } },
      defaultSelection: De
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
      modelSelectionField: rt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Fe = {
  __typename: !0,
  id: !0,
  createdAt: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, oe = "unambiguous", it = "unambiguouss", Jl = _e(
  oe,
  it,
  Fe,
  [
    {
      type: "findOne",
      operationName: oe,
      modelApiIdentifier: oe,
      findByVariableName: "id",
      defaultSelection: Fe
    },
    {
      type: "maybeFindOne",
      operationName: oe,
      modelApiIdentifier: oe,
      findByVariableName: "id",
      defaultSelection: Fe
    },
    {
      type: "findMany",
      operationName: it,
      modelApiIdentifier: oe,
      defaultSelection: Fe
    },
    {
      type: "findFirst",
      operationName: it,
      modelApiIdentifier: oe,
      defaultSelection: Fe
    },
    {
      type: "maybeFindFirst",
      operationName: it,
      modelApiIdentifier: oe,
      defaultSelection: Fe
    },
    {
      type: "findOne",
      operationName: it,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: oe,
      defaultSelection: Fe
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
      defaultSelection: Fe
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
      modelSelectionField: it,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateUnambiguousInput!]" }
      },
      defaultSelection: Fe
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
      defaultSelection: Fe
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
      modelSelectionField: it,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateUnambiguousInput!]" }
      },
      defaultSelection: Fe
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
      modelSelectionField: it,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), ia = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, aa = "session", Yl = "sessions", Hl = _e(
  aa,
  Yl,
  ia,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: ia,
      modelApiIdentifier: aa
    }
  ]
);
var no;
const oa = "production", Kl = "development", Xl = Symbol.for("gadget/modelRelationships"), Zl = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class ec {
  constructor(t) {
    var i;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[no] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (a) => await Li(
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
      async () => await Li(
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
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? Zl() ?? Kl).toLocaleLowerCase();
    let n;
    this.apiRoots[this.environment] ? n = this.apiRoots[this.environment] : n = `https://related-products-example${this.environment == oa ? "" : `--${this.environment}`}.gadget.app`;
    const r = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== oa) {
      const a = ({ forward: o }) => (s) => {
        const l = o(s);
        return Cr(
          l,
          Dt((d) => {
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
    if (this.connection = new Xa({
      endpoint: new URL("api/graphql", n).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: r,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == ne.APIKey && !((i = t == null ? void 0 : t.authenticationMode) != null && i.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new $l(this.connection), this.session = new Vl(this.connection), this.shopifyProduct = new Ll(this.connection), this.shopifyProductImage = new Bl(this.connection), this.shopifyProductOption = new Ul(this.connection), this.shopifyProductVariant = new ql(this.connection), this.shopifyShop = new Gl(this.connection), this.productPairing = new zl(this.connection), this.shopifySync = new Ql(this.connection), this.ambiguous = new Wl(this.connection), this.unambiguous = new Jl(this.connection), this.currentSession = new Hl(this.connection), this.internal = {
      user: new xe("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new xe("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new xe("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new xe("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new xe("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new xe("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new xe("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new xe("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new xe("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new xe("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new xe("unambiguous", this.connection, {
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
    vr(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let i, a;
    return typeof r < "u" ? (i = n, a = r) : !t.variables || Object.keys(t.variables).length == 0 ? (i = {}, a = n) : (typeof n == "string" ? i = { id: n } : i = n, a = {}), await Ws(this.connection, t, i, a);
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
    return new Tn(this.connection, t, n);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
no = Xl;
var ro = {}, zn = ze.createContext(ro);
zn.Provider;
zn.Consumer;
zn.displayName = "UrqlContext";
var tc = () => {
  var e = ze.useContext(zn);
  if (e === ro && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, nc = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, rc = (e, t) => e === t || !(!e || !t || e.key !== t.key), ar = (e, t) => {
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
    for (var o in i)
      if (o === "operation" ? !rc(r[o], i[o]) : r[o] !== i[o])
        return !0;
    return !1;
  })(e, n) ? n : e;
}, ic = (e, t) => {
  for (var n = 0, r = t.length; n < r; n++)
    if (e[n] !== t[n])
      return !0;
  return !1;
}, or = ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function sa(e, t) {
  process.env.NODE_ENV !== "production" && or && or.ReactCurrentOwner && or.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function ac(e, t) {
  var n = ze.useRef(void 0);
  return ze.useMemo(() => {
    var r = En(e, t);
    return n.current !== void 0 && n.current.key === r.key ? n.current : (n.current = r, r);
  }, [e, t]);
}
var oc = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
    e.operations$ && St((r) => {
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
}, sc = (e, t) => e.suspense && (!t || t.suspense !== !1);
function uc(e) {
  var t = tc(), n = oc(t), r = sc(t, e.context), i = ac(e.query, e.variables), a = ze.useMemo(() => {
    if (e.pause)
      return null;
    var p = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return r ? jt((h) => {
      n.set(i.key, h);
    })(p) : p;
  }, [n, t, i, r, e.pause, e.requestPolicy, e.context]), o = ze.useCallback((p, h) => {
    if (!p)
      return {
        fetching: !1
      };
    var m = n.get(i.key);
    if (m) {
      if (h && m != null && "then" in m)
        throw m;
    } else {
      var I, E = St((w) => {
        m = w, I && I(m);
      })(ua(() => h && !I || !m)(p));
      if (m == null && h) {
        var k = new Promise((w) => {
          I = w;
        });
        throw n.set(i.key, k), k;
      } else
        E.unsubscribe();
    }
    return m || {
      fetching: !0
    };
  }, [n, i]), s = [t, i, e.requestPolicy, e.context, e.pause], [l, d] = ze.useState(() => [a, ar(nc, o(a, r)), s]), c = l[1];
  a !== l[0] && ic(l[2], s) && d([a, c = ar(l[1], o(a, r)), s]), ze.useEffect(() => {
    var p = l[0], h = l[2][1], m = !1, I = (k) => {
      m = !0, sa(d, (w) => {
        var C = ar(w[1], k);
        return w[1] !== C ? [w[0], C, w[2]] : w;
      });
    };
    if (p) {
      var E = St(I)(xr(() => {
        I({
          fetching: !1
        });
      })(p));
      return m || I({
        fetching: !0
      }), () => {
        n.dispose(h.key), E.unsubscribe();
      };
    } else
      I({
        fetching: !1
      });
  }, [n, l[0], l[2][1]]);
  var f = ze.useCallback((p) => {
    var h = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...p
    };
    sa(d, (m) => [r ? jt((I) => {
      n.set(i.key, I);
    })(t.executeQuery(i, h)) : t.executeQuery(i, h), m[1], s]);
  }, [t, n, i, r, o, e.requestPolicy, e.context]);
  return [c, f];
}
const lc = Mn.createContext(void 0);
Mn.createContext(void 0);
const cc = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", dc = (e, t) => {
  let n = "";
  return e !== void 0 ? n = `[Network] ${e.message}` : t !== void 0 ? t.forEach((r) => {
    n += `[GraphQL] ${r.message}
`;
  }) : n = "Unknown error", n.trim();
}, fc = (e) => typeof e == "string" ? new D(e) : e != null && e.message && !e.code ? new D(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class gt extends Error {
  /** @private */
  static forClientSideError(t, n) {
    return new gt({
      executionErrors: [t],
      response: n
    });
  }
  /** @private */
  static forErrorsResponse(t, n) {
    return new gt({
      executionErrors: t.map($r),
      response: n
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new gt({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, n, r = !1) {
    const i = Fs(t, n);
    let a = gt.forMaybeCombinedError(t.error);
    return !a && i && !r && (a = gt.forClientSideError(i)), a;
  }
  constructor({ networkError: t, executionErrors: n, response: r }) {
    const i = (n || []).map(fc), a = dc(t, i);
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
const pc = (e) => {
  const { context: t, suspense: n, ...r } = e ?? {}, i = sr(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...r,
    context: i
  };
}, hc = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), mc = (e) => {
  if (!ko(lc))
    throw new Error(cc);
  const t = pc(e);
  return uc(t);
};
var yc = typeof Element < "u", bc = typeof Map == "function", gc = typeof Set == "function", vc = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function _n(e, t) {
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
        if (!_n(e[r], t[r]))
          return !1;
      return !0;
    }
    var a;
    if (bc && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!_n(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (gc && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (vc && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (yc && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !_n(e[i[r]], t[i[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Sc = function(t, n) {
  try {
    return _n(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Ic = /* @__PURE__ */ Po(Sc), wc = (e) => {
  const t = _o();
  return e ? (t.current === void 0 || !Ic(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, Nc = (e, t) => {
  const n = wc(t), r = sr(() => zr(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, n), [e, n]), [i, a] = mc(hc(r, t));
  return [sr(() => {
    const s = [e.findMany.operationName];
    let l = i.data;
    if (l) {
      const c = Lt(i.data, s);
      if (c) {
        const f = an(i, c);
        l = Bt.boot(e, f, c);
      }
    }
    const d = gt.errorIfDataAbsent(i, s, t == null ? void 0 : t.pause);
    return { ...i, data: l, error: d };
  }, [e, t == null ? void 0 : t.pause, i]), a];
}, Ac = new ec(), kc = () => {
  const [{ data: e }] = Nc(Ac.shopifyProduct);
  return /* @__PURE__ */ hi.jsx(hi.Fragment, { children: JSON.stringify(e) });
};
export {
  kc as R,
  Ec as c,
  Po as g
};
