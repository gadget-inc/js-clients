import * as ze from "react";
import _n, { useMemo as Xn, useContext as lo, useRef as co } from "react";
var zl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zn = { exports: {} }, qt = {};
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
function po() {
  if (ei)
    return qt;
  ei = 1;
  var e = _n, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, l, d) {
    var c, f = {}, p = null, m = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (c in l)
      r.call(l, c) && !a.hasOwnProperty(c) && (f[c] = l[c]);
    if (s && s.defaultProps)
      for (c in l = s.defaultProps, l)
        f[c] === void 0 && (f[c] = l[c]);
    return { $$typeof: t, type: s, key: p, ref: m, props: f, _owner: i.current };
  }
  return qt.Fragment = n, qt.jsx = o, qt.jsxs = o, qt;
}
var Gt = {};
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
function mo() {
  return ti || (ti = 1, process.env.NODE_ENV !== "production" && function() {
    var e = _n, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, I = "@@iterator";
    function E(u) {
      if (u === null || typeof u != "object")
        return null;
      var b = h && u[h] || u[I];
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
        var B = g.map(function(R) {
          return String(R);
        });
        B.unshift("Warning: " + b), Function.prototype.apply.call(console[u], console, B);
      }
    }
    var y = !1, N = !1, v = !1, U = !1, Ze = !1, It;
    It = Symbol.for("react.module.reference");
    function wt(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === r || u === a || Ze || u === i || u === d || u === c || U || u === m || y || N || v || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === f || u.$$typeof === o || u.$$typeof === s || u.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === It || u.getModuleId !== void 0));
    }
    function un(u, b, g) {
      var A = u.displayName;
      if (A)
        return A;
      var j = b.displayName || b.name || "";
      return j !== "" ? g + "(" + j + ")" : g;
    }
    function Lt(u) {
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
            return Lt(b) + ".Consumer";
          case o:
            var g = u;
            return Lt(g._context) + ".Provider";
          case l:
            return un(u, u.render, "ForwardRef");
          case f:
            var A = u.displayName || null;
            return A !== null ? A : Oe(u.type) || "Memo";
          case p: {
            var j = u, B = j._payload, R = j._init;
            try {
              return Oe(R(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, q = 0, M, F, z, Me, $, Je, et;
    function ct() {
    }
    ct.__reactDisabledLog = !0;
    function tt() {
      {
        if (q === 0) {
          M = console.log, F = console.info, z = console.warn, Me = console.error, $ = console.group, Je = console.groupCollapsed, et = console.groupEnd;
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
              value: M
            }),
            info: O({}, u, {
              value: F
            }),
            warn: O({}, u, {
              value: z
            }),
            error: O({}, u, {
              value: Me
            }),
            group: O({}, u, {
              value: $
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
    var J = k.ReactCurrentDispatcher, ln;
    function Nt(u, b, g) {
      {
        if (ln === void 0)
          try {
            throw Error();
          } catch (j) {
            var A = j.stack.trim().match(/\n( *(at )?)/);
            ln = A && A[1] || "";
          }
        return `
` + ln + u;
      }
    }
    var Mn = !1, cn;
    {
      var Ba = typeof WeakMap == "function" ? WeakMap : Map;
      cn = new Ba();
    }
    function Br(u, b) {
      if (!u || Mn)
        return "";
      {
        var g = cn.get(u);
        if (g !== void 0)
          return g;
      }
      var A;
      Mn = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = J.current, J.current = null, tt();
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
          for (var x = Ye.stack.split(`
`), pe = A.stack.split(`
`), Y = x.length - 1, X = pe.length - 1; Y >= 1 && X >= 0 && x[Y] !== pe[X]; )
            X--;
          for (; Y >= 1 && X >= 0; Y--, X--)
            if (x[Y] !== pe[X]) {
              if (Y !== 1 || X !== 1)
                do
                  if (Y--, X--, X < 0 || x[Y] !== pe[X]) {
                    var Ee = `
` + x[Y].replace(" at new ", " at ");
                    return u.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", u.displayName)), typeof u == "function" && cn.set(u, Ee), Ee;
                  }
                while (Y >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        Mn = !1, J.current = B, te(), Error.prepareStackTrace = j;
      }
      var Ot = u ? u.displayName || u.name : "", Zr = Ot ? Nt(Ot) : "";
      return typeof u == "function" && cn.set(u, Zr), Zr;
    }
    function La(u, b, g) {
      return Br(u, !1);
    }
    function Ua(u) {
      var b = u.prototype;
      return !!(b && b.isReactComponent);
    }
    function dn(u, b, g) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return Br(u, Ua(u));
      if (typeof u == "string")
        return Nt(u);
      switch (u) {
        case d:
          return Nt("Suspense");
        case c:
          return Nt("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            return La(u.render);
          case f:
            return dn(u.type, b, g);
          case p: {
            var A = u, j = A._payload, B = A._init;
            try {
              return dn(B(j), b, g);
            } catch {
            }
          }
        }
      return "";
    }
    var fn = Object.prototype.hasOwnProperty, Lr = {}, Ur = k.ReactDebugCurrentFrame;
    function pn(u) {
      if (u) {
        var b = u._owner, g = dn(u.type, u._source, b ? b.type : null);
        Ur.setExtraStackFrame(g);
      } else
        Ur.setExtraStackFrame(null);
    }
    function qa(u, b, g, A, j) {
      {
        var B = Function.call.bind(fn);
        for (var R in u)
          if (B(u, R)) {
            var x = void 0;
            try {
              if (typeof u[R] != "function") {
                var pe = Error((A || "React class") + ": " + g + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pe.name = "Invariant Violation", pe;
              }
              x = u[R](b, R, A, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              x = Y;
            }
            x && !(x instanceof Error) && (pn(j), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", g, R, typeof x), pn(null)), x instanceof Error && !(x.message in Lr) && (Lr[x.message] = !0, pn(j), w("Failed %s type: %s", g, x.message), pn(null));
          }
      }
    }
    var Ga = Array.isArray;
    function Vn(u) {
      return Ga(u);
    }
    function za(u) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, g = b && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return g;
      }
    }
    function Qa(u) {
      try {
        return qr(u), !1;
      } catch {
        return !0;
      }
    }
    function qr(u) {
      return "" + u;
    }
    function Gr(u) {
      if (Qa(u))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", za(u)), qr(u);
    }
    var Ut = k.ReactCurrentOwner, Wa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, zr, Qr, Bn;
    Bn = {};
    function Ja(u) {
      if (fn.call(u, "ref")) {
        var b = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Ya(u) {
      if (fn.call(u, "key")) {
        var b = Object.getOwnPropertyDescriptor(u, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Ha(u, b) {
      if (typeof u.ref == "string" && Ut.current && b && Ut.current.stateNode !== b) {
        var g = Oe(Ut.current.type);
        Bn[g] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Oe(Ut.current.type), u.ref), Bn[g] = !0);
      }
    }
    function Ka(u, b) {
      {
        var g = function() {
          zr || (zr = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        g.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function Xa(u, b) {
      {
        var g = function() {
          Qr || (Qr = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        g.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Za = function(u, b, g, A, j, B, R) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: b,
        ref: g,
        props: R,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function eo(u, b, g, A, j) {
      {
        var B, R = {}, x = null, pe = null;
        g !== void 0 && (Gr(g), x = "" + g), Ya(b) && (Gr(b.key), x = "" + b.key), Ja(b) && (pe = b.ref, Ha(b, j));
        for (B in b)
          fn.call(b, B) && !Wa.hasOwnProperty(B) && (R[B] = b[B]);
        if (u && u.defaultProps) {
          var Y = u.defaultProps;
          for (B in Y)
            R[B] === void 0 && (R[B] = Y[B]);
        }
        if (x || pe) {
          var X = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          x && Ka(R, X), pe && Xa(R, X);
        }
        return Za(u, x, pe, j, A, Ut.current, R);
      }
    }
    var Ln = k.ReactCurrentOwner, Wr = k.ReactDebugCurrentFrame;
    function At(u) {
      if (u) {
        var b = u._owner, g = dn(u.type, u._source, b ? b.type : null);
        Wr.setExtraStackFrame(g);
      } else
        Wr.setExtraStackFrame(null);
    }
    var Un;
    Un = !1;
    function qn(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function Jr() {
      {
        if (Ln.current) {
          var u = Oe(Ln.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function to(u) {
      {
        if (u !== void 0) {
          var b = u.fileName.replace(/^.*[\\\/]/, ""), g = u.lineNumber;
          return `

Check your code at ` + b + ":" + g + ".";
        }
        return "";
      }
    }
    var Yr = {};
    function no(u) {
      {
        var b = Jr();
        if (!b) {
          var g = typeof u == "string" ? u : u.displayName || u.name;
          g && (b = `

Check the top-level render call using <` + g + ">.");
        }
        return b;
      }
    }
    function Hr(u, b) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var g = no(b);
        if (Yr[g])
          return;
        Yr[g] = !0;
        var A = "";
        u && u._owner && u._owner !== Ln.current && (A = " It was passed a child from " + Oe(u._owner.type) + "."), At(u), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, A), At(null);
      }
    }
    function Kr(u, b) {
      {
        if (typeof u != "object")
          return;
        if (Vn(u))
          for (var g = 0; g < u.length; g++) {
            var A = u[g];
            qn(A) && Hr(A, b);
          }
        else if (qn(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var j = E(u);
          if (typeof j == "function" && j !== u.entries)
            for (var B = j.call(u), R; !(R = B.next()).done; )
              qn(R.value) && Hr(R.value, b);
        }
      }
    }
    function ro(u) {
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
          qa(g, u.props, "prop", A, u);
        } else if (b.PropTypes !== void 0 && !Un) {
          Un = !0;
          var j = Oe(b);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function io(u) {
      {
        for (var b = Object.keys(u.props), g = 0; g < b.length; g++) {
          var A = b[g];
          if (A !== "children" && A !== "key") {
            At(u), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), At(null);
            break;
          }
        }
        u.ref !== null && (At(u), w("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    function Xr(u, b, g, A, j, B) {
      {
        var R = wt(u);
        if (!R) {
          var x = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = to(j);
          pe ? x += pe : x += Jr();
          var Y;
          u === null ? Y = "null" : Vn(u) ? Y = "array" : u !== void 0 && u.$$typeof === t ? (Y = "<" + (Oe(u.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof u, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, x);
        }
        var X = eo(u, b, g, j, B);
        if (X == null)
          return X;
        if (R) {
          var Ee = b.children;
          if (Ee !== void 0)
            if (A)
              if (Vn(Ee)) {
                for (var Ot = 0; Ot < Ee.length; Ot++)
                  Kr(Ee[Ot], u);
                Object.freeze && Object.freeze(Ee);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Kr(Ee, u);
        }
        return u === r ? io(X) : ro(X), X;
      }
    }
    function ao(u, b, g) {
      return Xr(u, b, g, !0);
    }
    function oo(u, b, g) {
      return Xr(u, b, g, !1);
    }
    var so = oo, uo = ao;
    Gt.Fragment = r, Gt.jsx = so, Gt.jsxs = uo;
  }()), Gt;
}
process.env.NODE_ENV === "production" ? Zn.exports = po() : Zn.exports = mo();
var ni = Zn.exports, vr = () => {
}, Ie = vr;
function Ce(e) {
  return {
    tag: 0,
    0: e
  };
}
function nn(e) {
  return {
    tag: 1,
    0: e
  };
}
var ho = (e) => e;
function re(e) {
  return (t) => (n) => {
    var r = Ie;
    t((i) => {
      i === 0 ? n(0) : i.tag === 0 ? (r = i[0], n(i)) : e(i[0]) ? n(i) : r(0);
    });
  };
}
function xt(e) {
  return (t) => (n) => t((r) => {
    r === 0 || r.tag === 0 ? n(r) : n(nn(e(r[0])));
  });
}
function Xt(e) {
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
        for (var f = 0, p = r, m = r.length; f < m; f++)
          p[f](0);
      }
    }));
  };
}
function yo(e) {
  return Xt(ho)(e);
}
function Dt(e) {
  return yo(vo(e));
}
function Sr(e) {
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
function Ft(e) {
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
function ri(e) {
  return (t) => (n) => t((r) => {
    r === 0 ? n(0) : r.tag === 0 ? (n(r), e()) : n(r);
  });
}
function Zt(e) {
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
function ii(e) {
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
function xn(e) {
  return (t) => (n) => {
    var r = Ie, i = !1, a = 0;
    t((o) => {
      i || (o === 0 ? (i = !0, n(0)) : o.tag === 0 ? e <= 0 ? (i = !0, n(0), o[0](1)) : r = o[0] : a++ < e ? (n(o), !i && a >= e && (i = !0, n(0), r(1))) : n(o));
    }), n(Ce((o) => {
      o === 1 && !i ? (i = !0, r(1)) : o === 0 && !i && a < e && r(0);
    }));
  };
}
function Ir(e) {
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
function zi(e, t) {
  return (n) => (r) => {
    var i = Ie, a = !1;
    n((o) => {
      a || (o === 0 ? (a = !0, r(0)) : o.tag === 0 ? (i = o[0], r(o)) : e(o[0]) ? r(o) : (a = !0, t && r(o), r(0), i(1)));
    });
  };
}
function bo(e) {
  return (t) => e()(t);
}
function Qi(e) {
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
              a = !1, t(nn(o.value));
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
function go(e) {
  return e[Symbol.asyncIterator] ? Qi(e) : (t) => {
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
              a = !1, t(nn(o.value));
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
var vo = go;
function Jt(e) {
  return (t) => {
    var n = !1;
    t(Ce((r) => {
      r === 1 ? n = !0 : n || (n = !0, t(nn(e)), t(0));
    }));
  };
}
function wr(e) {
  return (t) => {
    var n = !1, r = e({
      next(i) {
        n || t(nn(i));
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
function ai() {
  var e, t;
  return {
    source: Zt(wr((n) => (e = n.next, t = n.complete, vr))),
    next(n) {
      e && e(n);
    },
    complete() {
      t && t();
    }
  };
}
function oi(e) {
  return wr((t) => (e.then((n) => {
    Promise.resolve(n).then(() => {
      t.next(n), t.complete();
    });
  }), vr));
}
function vt(e) {
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
function So(e) {
  vt((t) => {
  })(e);
}
var Gn = {
  done: !0
}, Io = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], n = !1, r = Ie, i;
    return e((a) => {
      n || (a === 0 ? (i && (i = i(Gn)), n = !0) : a.tag === 0 ? (r = a[0])(0) : i ? i = i({
        value: a[0],
        done: !1
      }) : t.push(a[0]));
    }), {
      async next() {
        return n && !t.length ? Gn : (!n && t.length <= 1 && r(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((a) => i = a));
      },
      async return() {
        return n || (i = r(1)), n = !0, Gn;
      }
    };
  }
});
function Nr(e) {
  return new Promise((t) => {
    var n = Ie, r;
    e((i) => {
      i === 0 ? Promise.resolve(r).then(t) : i.tag === 0 ? (n = i[0])(0) : (r = i[0], n(0));
    });
  });
}
var Ar = (...e) => {
  for (var t = e[0], n = 1, r = e.length; n < r; n++)
    t = e[n](t);
  return t;
}, _t = {
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
let er = class extends Error {
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
  return new er(`Syntax Error: Unexpected token at ${T} in ${e}`);
}
function Ae(e) {
  if (e.lastIndex = T, e.test(G))
    return G.slice(T, T = e.lastIndex);
}
var mn = / +(?=[^\s])/y;
function wo(e) {
  for (var t = e.split(`
`), n = "", r = 0, i = 0, a = t.length - 1, o = 0; o < t.length; o++)
    mn.lastIndex = 0, mn.test(t[o]) && (o && (!r || mn.lastIndex < r) && (r = mn.lastIndex), i = i || o, a = o);
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
var Wi = /[_A-Za-z]\w*/y;
function We() {
  var e;
  if (e = Ae(Wi))
    return {
      kind: "Name",
      value: e
    };
}
var No = /(?:null|true|false)/y, Ji = /\$[_A-Za-z]\w*/y, Ao = /-?\d+/y, Oo = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Eo = /\\/g, To = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, ko = /"(?:"|[^\r\n]*?[^\\]")/y;
function On(e) {
  var t, n;
  if (n = Ae(No))
    t = n === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: n === "true"
    };
  else if (!e && (n = Ae(Ji)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: n.slice(1)
      }
    };
  else if (n = Ae(Ao)) {
    var r = n;
    (n = Ae(Oo)) ? t = {
      kind: "FloatValue",
      value: r + n
    } : t = {
      kind: "IntValue",
      value: r
    };
  } else if (n = Ae(Wi))
    t = {
      kind: "EnumValue",
      value: n
    };
  else if (n = Ae(To))
    t = {
      kind: "StringValue",
      value: wo(n.slice(3, -3)),
      block: !0
    };
  else if (n = Ae(ko))
    t = {
      kind: "StringValue",
      value: Eo.test(n) ? JSON.parse(n) : n.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (G.charCodeAt(T) === 91) {
      T++, _();
      for (var s = []; o = On(a); )
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
        var l = On(a);
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
function Yi(e) {
  var t = [];
  if (_(), G.charCodeAt(T) === 40) {
    T++, _();
    for (var n; n = We(); ) {
      if (_(), G.charCodeAt(T++) !== 58)
        throw ee("Argument");
      _();
      var r = On(e);
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
function Rt(e) {
  var t = [];
  for (_(); G.charCodeAt(T) === 64; ) {
    T++;
    var n = We();
    if (!n)
      throw ee("Directive");
    _(), t.push({
      kind: "Directive",
      name: n,
      arguments: Yi(e)
    });
  }
  return t;
}
function _o() {
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
      arguments: Yi(!1),
      directives: Rt(!1),
      selectionSet: Pn()
    };
  }
}
function Hi() {
  var e;
  if (_(), G.charCodeAt(T) === 91) {
    T++, _();
    var t = Hi();
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
var xo = /on/y;
function Ki() {
  if (Ae(xo)) {
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
var Po = /\.\.\./y;
function Do() {
  if (Ae(Po)) {
    _();
    var e = T, t;
    if ((t = We()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Rt(!1)
      };
    T = e;
    var n = Ki(), r = Rt(!1), i = Pn();
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
function Pn() {
  var e;
  if (_(), G.charCodeAt(T) === 123) {
    T++, _();
    for (var t = []; e = Do() || _o(); )
      t.push(e);
    if (!t.length || G.charCodeAt(T++) !== 125)
      throw ee("SelectionSet");
    return _(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Fo = /fragment/y;
function Ro() {
  if (Ae(Fo)) {
    _();
    var e = We();
    if (!e)
      throw ee("FragmentDefinition");
    _();
    var t = Ki();
    if (!t)
      throw ee("FragmentDefinition");
    var n = Rt(!1), r = Pn();
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
var Co = /(?:query|mutation|subscription)/y;
function jo() {
  var e, t, n = [], r = [];
  (e = Ae(Co)) && (_(), t = We(), n = function() {
    var o, s = [];
    if (_(), G.charCodeAt(T) === 40) {
      for (T++, _(); o = Ae(Ji); ) {
        if (_(), G.charCodeAt(T++) !== 58)
          throw ee("VariableDefinition");
        var l = Hi(), d = void 0;
        if (G.charCodeAt(T) === 61 && (T++, _(), !(d = On(!0))))
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
          directives: Rt(!0)
        });
      }
      if (G.charCodeAt(T++) !== 41)
        throw ee("VariableDefinition");
      _();
    }
    return s;
  }(), r = Rt(!1));
  var i = Pn();
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
function $o(e, t) {
  return G = typeof e.body == "string" ? e.body : e, T = 0, function() {
    var r;
    _();
    for (var i = []; r = Ro() || jo(); )
      i.push(r);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function Mo(e) {
  return JSON.stringify(e);
}
function Vo(e) {
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
  StringValue: (e) => e.block ? Vo(e.value) : Mo(e.value),
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
var Bo = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new er(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new er(e);
class rn extends Error {
  constructor(t) {
    var n = (t.graphQLErrors || []).map(Bo), r = ((i, a) => {
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
var tr = (e, t) => {
  for (var n = 0 | (t || 5381), r = 0, i = 0 | e.length; r < i; r++)
    n = (n << 5) + n + e.charCodeAt(r);
  return n;
}, gt = /* @__PURE__ */ new Set(), si = /* @__PURE__ */ new WeakMap(), Tt = (e) => {
  if (e === null || gt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Tt(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var n of e)
      t.length > 1 && (t += ","), t += Tt(n) || "null";
    return t += "]";
  } else if (Tn !== Ct && e instanceof Tn || kn !== Ct && e instanceof kn)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var i = si.get(e) || Math.random().toString(36).slice(2);
    return si.set(e, i), Tt({
      __key: i
    });
  }
  gt.add(e);
  var a = "{";
  for (var o of r) {
    var s = Tt(e[o]);
    s && (a.length > 1 && (a += ","), a += Tt(o) + ":" + s);
  }
  return gt.delete(e), a += "}";
}, nr = (e, t, n) => {
  if (!(n == null || typeof n != "object" || n.toJSON || gt.has(n)))
    if (Array.isArray(n))
      for (var r = 0, i = n.length; r < i; r++)
        nr(e, `${t}.${r}`, n[r]);
    else if (n instanceof Tn || n instanceof kn)
      e.set(t, n);
    else {
      gt.add(n);
      for (var a of Object.keys(n))
        nr(e, `${t}.${a}`, n[a]);
    }
}, En = (e) => (gt.clear(), Tt(e));
class Ct {
}
var Tn = typeof File < "u" ? File : Ct, kn = typeof Blob < "u" ? Blob : Ct, Lo = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Uo = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, qo = (e, t) => t % 2 == 0 ? e.replace(Uo, `
`) : e, ui = (e) => e.split(Lo).map(qo).join("").trim(), li = /* @__PURE__ */ new Map(), Sn = /* @__PURE__ */ new Map(), Or = (e) => {
  var t;
  return typeof e == "string" ? t = ui(e) : e.loc && Sn.get(e.__key) === e ? t = e.loc.source.body : (t = li.get(e) || ui(ke(e)), li.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, ci = (e) => {
  var t = tr(Or(e));
  if (e.definitions) {
    var n = Zi(e);
    n && (t = tr(`
# ${n}`, t));
  }
  return t;
}, Xi = (e) => {
  var t, n;
  return typeof e == "string" ? (t = ci(e), n = Sn.get(t) || $o(e)) : (t = e.__key || ci(e), n = Sn.get(t) || e), n.loc || Or(n), n.__key = t, Sn.set(t, n), n;
}, In = (e, t, n) => {
  var r = t || {}, i = Xi(e), a = En(r), o = i.__key;
  return a !== "{}" && (o = tr(a, o)), {
    key: o,
    query: i,
    variables: r,
    extensions: n
  };
}, Zi = (e) => {
  for (var t of e.definitions)
    if (t.kind === _t.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, Go = (e) => {
  for (var t of e.definitions)
    if (t.kind === _t.OPERATION_DEFINITION)
      return t.operation;
}, rr = (e, t, n) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var r = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new rn({
      graphQLErrors: t.errors,
      response: n
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? r : t.hasNext,
    stale: !1
  };
}, ir = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var n of Object.keys(t))
      e[n] = ir(e[n], t[n]);
    return e;
  }
  return t;
}, ar = (e, t, n) => {
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
        for (var m = +d >= 0 ? d : 0, h = 0, I = l.items.length; h < I; h++)
          c[m + h] = ir(c[m + h], l.items[h]);
      else
        l.data !== void 0 && (c[d] = ir(c[d], l.data));
    }
  else
    s.data = t.data || e.data, r = t.errors || r;
  return {
    operation: e.operation,
    data: s.data,
    error: r.length ? new rn({
      graphQLErrors: r,
      response: n
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, ea = (e, t, n) => ({
  operation: e,
  data: void 0,
  error: new rn({
    networkError: t,
    response: n
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function ta(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Or(e.query),
    operationName: Zi(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var zo = (e, t) => {
  var n = e.kind === "query" && e.context.preferGetMethod;
  if (!n || !t)
    return e.context.url;
  var r = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && r.searchParams.set(i, typeof a == "object" ? En(a) : a);
  }
  var o = r.toString();
  return o.length > 2047 && n !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, Qo = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var n = En(t), r = ((s) => {
      var l = /* @__PURE__ */ new Map();
      return (Tn !== Ct || kn !== Ct) && (gt.clear(), nr(l, "variables", s)), l;
    })(t.variables);
    if (r.size) {
      var i = new FormData();
      i.append("operations", n), i.append("map", En({
        ...[...r.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of r.values())
        i.append("" + a++, o);
      return i;
    }
    return n;
  }
}, Wo = (e, t) => {
  var n = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, r = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (r.headers)
    for (var i in r.headers)
      n[i.toLowerCase()] = r.headers[i];
  var a = Qo(e, t);
  return typeof a == "string" && !n["content-type"] && (n["content-type"] = "application/json"), {
    ...r,
    method: a ? "POST" : "GET",
    body: a,
    headers: n
  };
}, Jo = typeof TextDecoder < "u" ? new TextDecoder() : null, Yo = /boundary="?([^=";]+)"?/i, Ho = /data: ?([^\n]+)/, di = (e) => e.constructor.name === "Buffer" ? e.toString() : Jo.decode(e);
async function* fi(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield di(t);
  else {
    var n = e.body.getReader(), r;
    try {
      for (; !(r = await n.read()).done; )
        yield di(r.value);
    } finally {
      n.cancel();
    }
  }
}
async function* pi(e, t) {
  var n = "", r;
  for await (var i of e)
    for (n += i; (r = n.indexOf(t)) > -1; )
      yield n.slice(0, r), n = n.slice(r + t.length);
}
async function* Ko(e, t, n) {
  var r = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, n)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (c, f) {
        var p = c.match(Yo), m = "--" + (p ? p[1] : "-"), h = !0, I;
        for await (var E of pi(fi(f), `\r
` + m)) {
          if (h) {
            h = !1;
            var k = E.indexOf(m);
            if (k > -1)
              E = E.slice(k + m.length);
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
        for await (var p of pi(fi(c), `

`)) {
          var m = p.match(Ho);
          if (m) {
            var h = m[1];
            try {
              yield f = JSON.parse(h);
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
      i = i ? ar(i, l, a) : rr(e, l, a), r = !1, yield i, r = !0;
    i || (yield i = rr(e, {}, a));
  } catch (d) {
    if (!r)
      throw d;
    yield ea(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : d, a);
  }
}
function Xo(e, t, n) {
  var r;
  return typeof AbortController < "u" && (n.signal = (r = new AbortController()).signal), Sr(() => {
    r && r.abort();
  })(re((i) => !!i)(Qi(Ko(e, t, n))));
}
var or = (e, t) => {
  if (Array.isArray(e))
    for (var n of e)
      or(n, t);
  else if (typeof e == "object" && e !== null)
    for (var r in e)
      r === "__typename" && typeof e[r] == "string" ? t.add(e[r]) : or(e[r], t);
  return t;
}, sr = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var n = [];
    for (var r of e.definitions) {
      var i = sr(r);
      t = t || i !== r, n.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: n
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === _t.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === _t.FIELD && s.name.value === "__typename" && !s.alias;
        var l = sr(s);
        t = t || l !== s, a.push(l);
      }
      if (o || (t = !0, a.push({
        kind: _t.FIELD,
        name: {
          kind: _t.NAME,
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
}, mi = /* @__PURE__ */ new Map(), Zo = (e) => {
  var t = Xi(e), n = mi.get(t.__key);
  return n || (mi.set(t.__key, n = sr(t)), Object.defineProperty(n, "__key", {
    value: t.__key,
    enumerable: !1
  })), n;
}, ur = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => ur(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var n = {};
    for (var r in e)
      r === "__typename" ? Object.defineProperty(n, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : n[r] = ur(e[r]);
    return n;
  } else
    return e;
};
function hi(e) {
  var t = (n) => e(n);
  return t.toPromise = () => Nr(xn(1)(re((n) => !n.stale && !n.hasNext)(t))), t.then = (n, r) => t.toPromise().then(n, r), t.subscribe = (n) => vt(n)(t), t;
}
function jt(e, t, n) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...n
    } : n || t.context
  };
}
var yi = (e, t) => jt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), es = () => {
}, zn = ({ kind: e }) => e !== "mutation" && e !== "query", ts = ({ forward: e, client: t, dispatchDebug: n }) => {
  var r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (s) => {
    var l = jt(s.kind, s);
    return l.query = Zo(s.query), l;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || r.has(s.key));
  return (s) => {
    var l = xt((c) => {
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
        operation: process.env.NODE_ENV !== "production" ? yi(c, {
          cacheOutcome: f ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (p.stale = !0, bi(t, c)), p;
    })(re((c) => !zn(c) && o(c))(s)), d = Ft((c) => {
      var { operation: f } = c;
      if (f) {
        var p = f.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (p = ((v) => [...or(v, /* @__PURE__ */ new Set())])(c.data).concat(p)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var m = /* @__PURE__ */ new Set();
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
          for (var h = 0; h < p.length; h++) {
            var I = p[h], E = i.get(I);
            E || i.set(I, E = /* @__PURE__ */ new Set());
            for (var k of E.values())
              m.add(k);
            E.clear();
          }
          for (var w of m.values())
            r.has(w) && (f = r.get(w).operation, r.delete(w), bi(t, f));
        } else if (f.kind === "query" && c.data) {
          r.set(f.key, c);
          for (var C = 0; C < p.length; C++) {
            var y = p[C], N = i.get(y);
            N || i.set(y, N = /* @__PURE__ */ new Set()), N.add(f.key);
          }
        }
      }
    })(e(re((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(xt((c) => process.env.NODE_ENV !== "production" ? yi(c, {
      cacheOutcome: "miss"
    }) : c)(Dt([xt(a)(re((c) => !zn(c) && !o(c))(s)), re((c) => zn(c))(s)])))));
    return Dt([l, d]);
  };
}, bi = (e, t) => e.reexecuteOperation(jt(t.kind, t, {
  requestPolicy: "network-only"
})), Qn = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: n }) => ({ client: r, forward: i }) => {
  var a = n || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = Xt((d) => {
      var { key: c } = d, f = re((p) => p.kind === "teardown" && p.key === c)(o);
      return Ir(f)(((p) => {
        var m = e(ta(p), p);
        return wr(({ next: h, complete: I }) => {
          var E = !1, k, w;
          return Promise.resolve().then(() => {
            E || (k = m.subscribe({
              next(C) {
                h(w = w ? ar(w, C) : rr(p, C));
              },
              error(C) {
                h(ea(p, C));
              },
              complete() {
                E || (E = !0, p.kind === "subscription" && r.reexecuteOperation(jt("teardown", p, p.context)), w && w.hasNext && h(ar(w, {
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
    return Dt([s, l]);
  };
}, ns = ({ forward: e, dispatchDebug: t }) => (n) => {
  var r = Xt((a) => {
    var o = ta(a), s = zo(a, o), l = Wo(a, o);
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
    var d = Ir(re((c) => c.kind === "teardown" && c.key === a.key)(n))(Xo(a, s, l));
    return process.env.NODE_ENV !== "production" ? Ft((c) => {
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
  return Dt([r, i]);
}, rs = (e) => ({ client: t, forward: n, dispatchDebug: r }) => e.reduceRight((i, a) => {
  var o = !1;
  return a({
    client: t,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return Zt(i(Zt(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && r({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, n), na = ({ onOperation: e, onResult: t, onError: n }) => ({ forward: r }) => (i) => Xt((a) => {
  n && a.error && n(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? oi(o) : Jt(o);
})(r(Xt((a) => {
  var o = e && e(a) || a;
  return "then" in o ? oi(o) : Jt(o);
})(i))), is = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = Ft((n) => {
  if (n.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var r = `No exchange has handled operations of kind "${n.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: r,
      operation: n,
      source: "fallbackExchange"
    }), console.warn(r);
  }
})(t)), re((n) => !1)(t)), gi = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var n = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = ai();
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
    var N = Ir(re((v) => v.kind === "teardown" && v.key === y.key)(l.source))(re((v) => v.operation.kind === y.kind && v.operation.key === y.key && (!v.operation.context._instance || v.operation.context._instance === y.context._instance))(C));
    return y.kind !== "query" ? N = zi((v) => !!v.hasNext, !0)(N) : N = ii((v) => {
      var U = Jt(v);
      return v.stale || v.hasNext ? U : Dt([U, xt(() => (v.stale = !0, v))(xn(1)(re((Ze) => Ze.key === y.key)(l.source)))]);
    })(N), y.kind !== "mutation" ? N = Sr(() => {
      a.delete(y.key), r.delete(y.key), i.delete(y.key), c = !1;
      for (var v = o.length - 1; v >= 0; v--)
        o[v].key === y.key && o.splice(v, 1);
      d(jt("teardown", y, y.context));
    })(Ft((v) => {
      if (v.stale) {
        for (var U of o)
          if (U.key === v.operation.key) {
            a.delete(U.key);
            break;
          }
      } else
        v.hasNext || a.delete(y.key);
      r.set(y.key, v);
    })(N)) : N = ri(() => {
      d(y);
    })(N), t.maskTypename && (N = xt((v) => ({
      ...v,
      data: ur(v.data, !0)
    }))(N)), Zt(N);
  }, m = this instanceof e ? this : Object.create(e.prototype), h = Object.assign(m, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(y) {
      y.kind === "teardown" ? f(y) : (y.kind === "mutation" || i.has(y.key)) && (o.push(y), Promise.resolve().then(f));
    },
    createRequestOperation(y, N, v) {
      v || (v = {});
      var U;
      if (process.env.NODE_ENV !== "production" && y !== "teardown" && (U = Go(N.query)) !== y)
        throw new Error(`Expected operation of type "${y}" but found "${U}"`);
      return jt(y, N, {
        _instance: y === "mutation" ? n = n + 1 | 0 : void 0,
        ...s,
        ...v,
        requestPolicy: v.requestPolicy || s.requestPolicy,
        suspense: v.suspense || v.suspense !== !1 && h.suspense
      });
    },
    executeRequestOperation(y) {
      return y.kind === "mutation" ? hi(p(y)) : hi(bo(() => {
        var N = i.get(y.key);
        N || i.set(y.key, N = p(y)), N = ri(() => {
          f(y);
        })(N);
        var v = r.get(y.key);
        return y.kind === "query" && v && (v.stale || v.hasNext) ? ii(Jt)(Dt([N, re((U) => U === r.get(y.key))(Jt(v))])) : N;
      }));
    },
    executeQuery(y, N) {
      var v = h.createRequestOperation("query", y, N);
      return h.executeRequestOperation(v);
    },
    executeSubscription(y, N) {
      var v = h.createRequestOperation("subscription", y, N);
      return h.executeRequestOperation(v);
    },
    executeMutation(y, N) {
      var v = h.createRequestOperation("mutation", y, N);
      return h.executeRequestOperation(v);
    },
    readQuery(y, N, v) {
      var U = null;
      return vt((Ze) => {
        U = Ze;
      })(h.query(y, N, v)).unsubscribe(), U;
    },
    query: (y, N, v) => h.executeQuery(In(y, N), v),
    subscription: (y, N, v) => h.executeSubscription(In(y, N), v),
    mutation: (y, N, v) => h.executeMutation(In(y, N), v)
  }), I = es;
  if (process.env.NODE_ENV !== "production") {
    var { next: E, source: k } = ai();
    h.subscribeToDebugTarget = (y) => vt(y)(k), I = E;
  }
  var w = rs(t.exchanges), C = Zt(w({
    client: h,
    dispatchDebug: I,
    forward: is({
      dispatchDebug: I
    })
  })(l.source));
  return So(C), h;
};
const as = {
  DateTime(e) {
    return new Date(e);
  }
};
class os {
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
      a != null && (n[r] = as[i](a));
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
var me;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(me || (me = {}));
class ss {
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
  hasChanges(t = me.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const n = t == me.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((r) => !hn(n[r], this.__gadget.fields[r]));
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
  changes(t, n = me.SinceLoaded) {
    const i = (typeof t == "string" ? n : t || n) == me.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = i[t], o = this.__gadget.fields[t], s = !hn(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const s = this.__gadget.fieldKeys[o];
        hn(i[s], this.__gadget.fields[s]) || (a[s] = { current: this.__gadget.fields[s], previous: i[s] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = me.SinceLoaded) {
    const n = t == me.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, r = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      hn(n[a], this.__gadget.fields[a]) || (r[a] = this.__gadget.fields[a]);
    }
    return r;
  }
  changed(t, n = me.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, n).changed : this.hasChanges(t === void 0 ? n : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = me.SinceLoaded) {
    t == me.SinceLoaded ? this.__gadget.instantiatedFields = ve(this.__gadget.fields) : t == me.SinceLastPersisted && (this.__gadget.persistedFields = ve(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = me.SinceLoaded) {
    let n;
    t == me.SinceLoaded ? n = Object.keys(this.__gadget.instantiatedFields) : n = Object.keys(this.__gadget.persistedFields);
    for (const r of this.__gadget.fieldKeys)
      n.includes(r) || delete this.__gadget.fields[r];
    t == me.SinceLoaded ? Object.assign(this.__gadget.fields, ve(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, ve(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return fr({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const ra = ss;
class ia extends Error {
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
class lr extends Error {
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
class Dn extends Error {
  constructor(t, n) {
    super(t.startsWith("GGT_") ? t : `${n}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
}
class vi extends Error {
  constructor(t) {
    let n;
    dr(t) ? n = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : n = "GraphQL websocket closed unexpectedly by the server", super(n), Object.defineProperty(this, "code", {
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
class us extends Error {
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
class ls extends Error {
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
class cs extends Error {
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
class aa extends Error {
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
class Er extends Error {
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
class ds extends Error {
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
function cr(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const $t = (e, t) => {
  const n = t.length;
  let r = 0;
  for (; e != null && r < n; )
    e = e[t[r++]];
  return r && r == n ? e : void 0;
}, dr = (e) => (e == null ? void 0 : e.type) == "close", Re = (e, t) => typeof e != "string" ? "" : St(e, t), Si = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, St = (e, t = !0) => {
  let n = "" + e;
  return t ? n = n.replace(/^[a-z\d]*/, (r) => Si(r)) : n = n.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (r) => r.toLowerCase()), n = n.replace(/(?:_|(\/))([a-z\d]*)/gi, (r, i, a, o, s) => (i || (i = ""), "" + i + Si(a))), n;
}, fs = (e) => `${St(e)}Sort`, ps = (e) => `${St(e)}Filter`, ms = (e, t, n) => new aa(`More than one record found for ${e}.${t} = ${n}. Please confirm your unique validation is not reporting an error.`), hs = (e, t) => {
  if (e.fetching)
    return;
  const n = $t(e.data, t);
  if (n === void 0)
    return new ia(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (n === null)
    return new Er(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, Qe = (e, t, n = !1) => {
  var r;
  if (e.error)
    throw e.error instanceof rn && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const i = $t(e.data, t), a = $t(i, ["edges"]), o = a ?? i;
  if (i === void 0)
    throw new ia(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || n && Array.isArray(o) && o.length === 0)
    throw new Er(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, Yt = (e, t) => {
  var n;
  if (e.error)
    throw e.error instanceof rn && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const r = $t(e.data, t);
  return r ?? null;
}, Tr = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new cs(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new aa(e.message) : new Dn(e.message, e.code);
}, at = (e, t) => {
  const n = Qe(e, t);
  return oa(n);
}, oa = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? Tr(t) : new Dn("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, sa = (e) => {
  var t, n, r, i;
  if (!((n = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || n === void 0) && n.hydrations)
    return new os((i = (r = e.data) === null || r === void 0 ? void 0 : r.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, Ht = (e, t) => {
  const n = sa(e);
  return n && (t = n.apply(t)), new ra(t);
}, kr = (e, t) => {
  const n = sa(e);
  return n && (t = n.apply(t)), t == null ? void 0 : t.map((r) => new ra(r));
}, en = (e, t) => {
  const n = t.edges.map((r) => r.node);
  return kr(e, n);
}, fr = (e) => {
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
          t[n] = r === void 0 ? null : fr(r);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const n of Object.keys(e)) {
          const r = fr(e[n]);
          r !== void 0 && (t[n] = r);
        }
        return t;
      }
    }
  }
}, Wn = "gstk", Ii = (e) => {
  try {
    const t = window[e];
    return t.setItem(Wn, Wn), t.removeItem(Wn), !0;
  } catch {
    return !1;
  }
}, wi = Object.prototype.toString, Ni = Object.getPrototypeOf, Ai = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, Qt = (e, t, n) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (n.indexOf(e) > -1 && n.indexOf(t) > -1)
    return !0;
  const r = wi.call(e), i = wi.call(t);
  let a, o, s;
  if (n.push(e, t), r != i || (a = Ai(e), o = Ai(t), a.length != o.length || a.some(function(l) {
    return !Qt(e[l], t[l], n);
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
        if (s = a.next(), !Qt(s.value, o.next().value, n))
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
        if (!(!(s in e) && !(s in t)) && (s in e != s in t || !Qt(e[s], t[s], n)))
          return !1;
      return !0;
    case "Object":
      return Qt(Ni(e), Ni(t), n);
    default:
      return !1;
  }
}, hn = (e, t) => Qt(e, t, []), ua = (e, t) => {
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
}, ys = (e, t = {}) => {
  var n;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((n = Array.isArray(t) ? t : t.inputs) !== null && n !== void 0 ? n : []).map((i) => ua(e, i))
  };
}, bs = (e, t) => {
  const n = {};
  for (const [r, i] of Object.entries(e))
    n[r] = { ...i, value: t[r] };
  return n;
};
class Mt extends Array {
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
    const i = new Mt();
    return i.push(...n), i.modelManager = t, i.pagination = r, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Dn("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new lr("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new lr("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: n, last: r, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: r || n
    });
  }
}
const pr = (e) => Object.entries(e).flatMap(([t, n]) => {
  if (typeof n == "boolean")
    return n ? t : !1;
  if (n instanceof xr) {
    let r = "";
    const i = Object.entries(n.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof Pr ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return i.length > 0 && (r = `(${i.join(", ")})`), n.subselection ? [`${t}${r} {`, ...pr(n.subselection), "}"] : `${t}${r}`;
  } else
    return [`${t} {`, ...pr(n), "}"];
}).filter((t) => !!t).map((t) => "  " + t), _r = (e) => {
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
    i instanceof xr ? Object.entries(i.args).forEach(([a, o]) => {
      var s;
      o instanceof Pr && (t[(s = o.name) !== null && s !== void 0 ? s : n(a)] = o);
    }) : typeof i == "object" && i !== null && Object.assign(t, _r(i));
  }), t;
}, gs = (e) => {
  const t = _r(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([r, i]) => `$${r}: ${i.type}`).join(", ")})`;
};
class xr {
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
class Pr {
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
const st = (e, t) => new xr(e, t), Z = (e) => new Pr(e.type + (e.required ? "!" : ""), e.name, e.value), vs = (e) => {
  var t;
  const n = gs(e), r = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${n}${r} {
${pr(e.fields).join(`
`)}
}`;
}, ut = (e) => {
  const t = _r(e.fields);
  return {
    query: vs(e),
    variables: Object.entries(t ?? {}).reduce((n, [r, i]) => (typeof i.value < "u" && (n[r] = i.value), n), {})
  };
}, Dr = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Fr = (e, t = !1) => {
  const n = { ...e };
  return t && (n.__typename = !0), n;
}, Fn = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, Ss = (e, t, n, r, i) => {
  const a = {};
  return typeof t < "u" && (a.id = Z({ type: "GadgetID!", value: t })), ut({
    type: "query",
    name: e,
    fields: {
      [e]: st(a, Fr((i == null ? void 0 : i.select) || n, !0)),
      ...Dr(r)
    },
    directives: Fn(i)
  });
}, Is = (e, t, n, r, i, a) => Rr(e, r, i, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: n
    }
  }
}), Rr = (e, t, n, r) => ut({
  type: "query",
  name: e,
  fields: {
    [e]: st({
      after: Z({ value: r == null ? void 0 : r.after, type: "String" }),
      first: Z({ value: r == null ? void 0 : r.first, type: "Int" }),
      before: Z({ value: r == null ? void 0 : r.before, type: "String" }),
      last: Z({ value: r == null ? void 0 : r.last, type: "Int" }),
      sort: r != null && r.sort ? Z({ value: r.sort, type: `[${fs(n)}!]` }) : void 0,
      filter: r != null && r.filter ? Z({ value: r.filter, type: `[${ps(n)}!]` }) : void 0,
      search: r != null && r.search ? Z({ value: r.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Fr((r == null ? void 0 : r.select) || t, !0)
      }
    }),
    ...Dr(n)
  },
  directives: Fn(r)
}), la = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Cr = (e) => Object.fromEntries(Object.entries(e).map(([t, n]) => [t, Z(n)])), ca = (e, t, n) => ({
  success: !0,
  errors: la,
  [e]: t && !n ? Fr(t, !0) : !1,
  result: !!n
}), ws = (e, t, n, r, i, a, o, s, l) => {
  const d = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: st(Cr(i), ca(r, d, l))
  };
  o && (c = {
    [o]: c
  });
  const f = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...Dr(n)
    },
    directives: Fn(a)
  };
  return ut(f);
}, Ns = (e, t, n) => {
  let r = {}, i = t.operationName;
  switch (t.type) {
    case "action": {
      const o = (n == null ? void 0 : n.select) || t.defaultSelection;
      t.isBulk && (i = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), r = {
        [`... on ${`${St(i)}Result`}`]: ca(t.modelApiIdentifier, o, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      r = {
        [`... on ${St(i)}Result`]: da()
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
}, da = () => ({
  success: !0,
  errors: la,
  result: !0
}), As = (e, t, n, r) => {
  let i = {
    [e]: st(Cr(t), da())
  };
  return n && (i = {
    [n]: i
  }), ut({
    type: "mutation",
    name: e,
    fields: i,
    directives: Fn(r)
  });
}, Os = (e) => {
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
}, Es = (e, t, n, r, i) => {
  let a = {
    background: {
      [e]: st({
        ...Cr(t),
        backgroundOptions: Z({
          type: "EnqueueBackgroundActionOptions",
          value: Os(r)
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
    name: "enqueue" + St(e),
    fields: a
  });
}, Ts = (e, t) => ({
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
function jr(e, t, n) {
  return n != null && n.live ? Ts(Io(e), t) : Ar(e, re((i) => !i.stale && !i.hasNext), xn(1), Nr).then((i) => t(i));
}
const Oi = (e, t, n, r, i, a, o = !0) => {
  const s = Ss(t, n, r, i, a), l = e.connection.currentClient.query(s.query, s.variables);
  return jr(l, (d) => {
    const f = (o ? Qe : Yt)(d, [t]);
    return Ht(d, f);
  }, a);
}, ks = (e, t, n, r, i, a, o, s = !0) => {
  const l = Is(t, n, r, i, a, o), d = e.connection.currentClient.query(l.query, l.variables);
  return jr(d, (c) => {
    const f = Qe(c, [t]), p = en(c, f);
    if (p.length > 1)
      throw ms(a, n, r);
    const m = p[0];
    if (!m && s)
      throw new Er(`${a} record with ${n}=${r} not found`);
    return m ?? null;
  }, o);
}, Ei = (e, t, n, r, i, a) => {
  const o = Rr(t, n, r, i), s = e.connection.currentClient.query(o.query, o.variables);
  return jr(s, (l) => {
    let d;
    a === !1 ? d = Yt(l, [t]) : d = Qe(l, [t], a);
    const c = en(l, d);
    return Mt.boot(e, c, { options: i, pageInfo: d.pageInfo });
  }, i);
}, Ti = async (e, t, n, r, i, a, o, s, l, d) => {
  const c = ws(t, n, r, i, o, s, l, a, d), f = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), p = l ? [l, t] : [t];
  if (a) {
    const m = $t(f.data, p), h = m[i] && n ? kr(f, m[i]) : void 0;
    if (m.errors) {
      const I = m.errors.map((E) => Tr(E));
      throw new ds(I, h);
    }
    return h;
  } else {
    const m = at(f, p);
    return fa(n, f, m, i, d);
  }
}, fa = (e, t, n, r, i) => {
  if (e != null)
    return i ? n.result : Ht(t, n[r]);
}, ki = async (e, t, n, r) => {
  const i = As(t, n, r), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return at(a, r ? [r, t] : [t]).result;
};
async function _s(e, t, n, r = {}) {
  const i = t.isBulk ? ys(t, n) : ua(t, n), a = bs(t.variables, i), o = Es(t.operationName, a, t.namespace, r, t.isBulk), s = await e.currentClient.mutation(o.query, o.variables, r).toPromise(), l = ["background", t.operationName];
  t.namespace && l.unshift(t.namespace);
  try {
    const d = at(s, l);
    return t.isBulk ? d.backgroundActions.map((c) => new wn(e, t, c.id)) : new wn(e, t, d.backgroundAction.id);
  } catch (d) {
    if ("code" in d && d.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (r != null && r.id) && r.onDuplicateID == "ignore")
      return new wn(e, t, r.id);
    throw d;
  }
}
const xs = async (e, t, n, r) => {
  const i = Ns(t, n, r), a = e.currentClient.subscription(i.query, i.variables), o = await Ar(a, re((l) => {
    var d, c;
    return l.error || ((c = (d = l.data) === null || d === void 0 ? void 0 : d.backgroundAction) === null || c === void 0 ? void 0 : c.outcome);
  }), xn(1), Nr), s = Qe(o, ["backgroundAction"]);
  switch (oa(s.result), n.type) {
    case "action": {
      s.result = fa(n.defaultSelection, o.data, s.result, n.isBulk ? n.modelApiIdentifier : n.modelSelectionField, n.hasReturnType);
      break;
    }
    case "globalAction": {
      s.result = s.result.result;
      break;
    }
  }
  return s;
};
class wn {
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
    return (await xs(this.connection, this.id, this.action, t)).result;
  }
}
var Kt;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(Kt || (Kt = {}));
function W(e, t) {
  if (!!!e)
    throw new Error(t);
}
function tn(e) {
  return typeof e == "object" && e !== null;
}
function pa(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const Ps = /\r\n|[\n\r]/g;
function mr(e, t) {
  let n = 0, r = 1;
  for (const i of e.body.matchAll(Ps)) {
    if (typeof i.index == "number" || pa(!1), i.index >= t)
      break;
    n = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: t + 1 - n
  };
}
function Ds(e) {
  return ma(
    e.source,
    mr(e.source, e.start)
  );
}
function ma(e, t) {
  const n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? n : 0, l = t.column + s, d = `${e.name}:${o}:${l}
`, c = r.split(/\r\n|[\n\r]/g), f = c[i];
  if (f.length > 120) {
    const p = Math.floor(l / 80), m = l % 80, h = [];
    for (let I = 0; I < f.length; I += 80)
      h.push(f.slice(I, I + 80));
    return d + _i([
      [`${o} |`, h[0]],
      ...h.slice(1, p + 1).map((I) => ["|", I]),
      ["|", "^".padStart(m)],
      ["|", h[p + 1]]
    ]);
  }
  return d + _i([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, c[i - 1]],
    [`${o} |`, f],
    ["|", "^".padStart(l)],
    [`${o + 1} |`, c[i + 1]]
  ]);
}
function _i(e) {
  const t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function Fs(e) {
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
    const { nodes: o, source: s, positions: l, path: d, originalError: c, extensions: f } = Fs(n);
    super(t), this.name = "GraphQLError", this.path = d ?? void 0, this.originalError = c ?? void 0, this.nodes = xi(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const p = xi(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((h) => h.loc).filter((h) => h != null)
    );
    this.source = s ?? (p == null || (i = p[0]) === null || i === void 0 ? void 0 : i.source), this.positions = l ?? (p == null ? void 0 : p.map((h) => h.start)), this.locations = l && s ? l.map((h) => mr(s, h)) : p == null ? void 0 : p.map((h) => mr(h.source, h.start));
    const m = tn(
      c == null ? void 0 : c.extensions
    ) ? c == null ? void 0 : c.extensions : void 0;
    this.extensions = (a = f ?? m) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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

` + Ds(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + ma(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function xi(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const ha = {
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
}, Rs = new Set(Object.keys(ha));
function Pi(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && Rs.has(t);
}
var Di;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Di || (Di = {}));
var Se;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(Se || (Se = {}));
var V;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(V || (V = {}));
function Fi(e) {
  return e === 9 || e === 32;
}
function Cs(e) {
  return e >= 48 && e <= 57;
}
function ya(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function js(e) {
  return ya(e) || e === 95;
}
function $s(e) {
  return ya(e) || Cs(e) || e === 95;
}
function Ms(e, t) {
  const n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((m) => m.length === 0 || Fi(m.charCodeAt(0))), o = n.endsWith('\\"""'), s = e.endsWith('"') && !o, l = e.endsWith("\\"), d = s || l, c = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || d || a || o);
  let f = "";
  const p = i && Fi(e.charCodeAt(0));
  return (c && !p || a) && (f += `
`), f += n, (c || d) && (f += `
`), '"""' + f + '"""';
}
const Vs = 10, ba = 2;
function L(e) {
  return Rn(e, []);
}
function Rn(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Bs(e, t);
    default:
      return String(e);
  }
}
function Bs(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (Ls(e)) {
    const r = e.toJSON();
    if (r !== e)
      return typeof r == "string" ? r : Rn(r, n);
  } else if (Array.isArray(e))
    return qs(e, n);
  return Us(e, n);
}
function Ls(e) {
  return typeof e.toJSON == "function";
}
function Us(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > ba ? "[" + Gs(e) + "]" : "{ " + n.map(
    ([i, a]) => i + ": " + Rn(a, t)
  ).join(", ") + " }";
}
function qs(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > ba)
    return "[Array]";
  const n = Math.min(Vs, e.length), r = e.length - n, i = [];
  for (let a = 0; a < n; ++a)
    i.push(Rn(e[a], t));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function Gs(e) {
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
        const o = L(t);
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
), zs = 5;
function Qs(e, t) {
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
  const o = a.slice(0, zs), s = o.pop();
  return i + o.join(", ") + ", or " + s + "?";
}
function Ri(e) {
  return e;
}
function $r(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    n[t(r)] = r;
  return n;
}
function Mr(e, t, n) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of e)
    r[t(i)] = n(i);
  return r;
}
function Cn(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of Object.keys(e))
    n[r] = t(e[r], r);
  return n;
}
function Ws(e, t) {
  let n = 0, r = 0;
  for (; n < e.length && r < t.length; ) {
    let i = e.charCodeAt(n), a = t.charCodeAt(r);
    if (yn(i) && yn(a)) {
      let o = 0;
      do
        ++n, o = o * 10 + i - hr, i = e.charCodeAt(n);
      while (yn(i) && o > 0);
      let s = 0;
      do
        ++r, s = s * 10 + a - hr, a = t.charCodeAt(r);
      while (yn(a) && s > 0);
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
const hr = 48, Js = 57;
function yn(e) {
  return !isNaN(e) && hr <= e && e <= Js;
}
function Ys(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = new Hs(e), i = Math.floor(e.length * 0.4) + 1;
  for (const a of t) {
    const o = r.measure(a, i);
    o !== void 0 && (n[a] = o);
  }
  return Object.keys(n).sort((a, o) => {
    const s = n[a] - n[o];
    return s !== 0 ? s : Ws(a, o);
  });
}
class Hs {
  constructor(t) {
    this._input = t, this._inputLowerCase = t.toLowerCase(), this._inputArray = Ci(this._inputLowerCase), this._rows = [
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
    let i = Ci(r), a = this._inputArray;
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
      let m = p[0] = c;
      for (let h = 1; h <= s; h++) {
        const I = i[c - 1] === a[h - 1] ? 0 : 1;
        let E = Math.min(
          f[h] + 1,
          // delete
          p[h - 1] + 1,
          // insert
          f[h - 1] + I
          // substitute
        );
        if (c > 1 && h > 1 && i[c - 1] === a[h - 2] && i[c - 2] === a[h - 1]) {
          const k = l[(c - 2) % 3][h - 2];
          E = Math.min(E, k + 1);
        }
        E < m && (m = E), p[h] = E;
      }
      if (m > n)
        return;
    }
    const d = l[o % 3][s];
    return d <= n ? d : void 0;
  }
}
function Ci(e) {
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
function Ks(e) {
  return `"${e.replace(Xs, Zs)}"`;
}
const Xs = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Zs(e) {
  return eu[e.charCodeAt(0)];
}
const eu = [
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
], tu = Object.freeze({});
function nu(e, t, n = ha) {
  const r = /* @__PURE__ */ new Map();
  for (const k of Object.values(V))
    r.set(k, ru(t, k));
  let i, a = Array.isArray(e), o = [e], s = -1, l = [], d = e, c, f;
  const p = [], m = [];
  do {
    s++;
    const k = s === o.length, w = k && l.length !== 0;
    if (k) {
      if (c = m.length === 0 ? void 0 : p[p.length - 1], d = f, f = m.pop(), w)
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
      var h, I;
      Pi(d) || W(!1, `Invalid AST Node: ${L(d)}.`);
      const y = k ? (h = r.get(d.kind)) === null || h === void 0 ? void 0 : h.leave : (I = r.get(d.kind)) === null || I === void 0 ? void 0 : I.enter;
      if (C = y == null ? void 0 : y.call(t, d, c, f, p, m), C === tu)
        break;
      if (C === !1) {
        if (!k) {
          p.pop();
          continue;
        }
      } else if (C !== void 0 && (l.push([c, C]), !k))
        if (Pi(C))
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
      }, a = Array.isArray(d), o = a ? d : (E = n[d.kind]) !== null && E !== void 0 ? E : [], s = -1, l = [], f && m.push(f), f = d;
    }
  } while (i !== void 0);
  return l.length !== 0 ? l[l.length - 1][1] : e;
}
function ru(e, t) {
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
  return nu(e, au);
}
const iu = 80, au = {
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
      const t = P("(", S(e.variableDefinitions, ", "), ")"), n = S(
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
    leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + P(" = ", n) + P(" ", S(r, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => xe(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
      const a = P("", e, ": ") + t;
      let o = a + P("(", S(n, ", "), ")");
      return o.length > iu && (o = a + P(`(
`, Nn(S(n, `
`)), `
)`)), S([o, S(r, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + P(" ", S(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) => S(
      [
        "...",
        P("on ", e),
        S(t, " "),
        n
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${P("(", S(n, ", "), ")")} on ${t} ${P("", S(r, " "), " ")}` + i
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
    leave: ({ value: e, block: t }) => t ? Ms(e) : Ks(e)
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
    leave: ({ name: e, arguments: t }) => "@" + e + P("(", S(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: n }) => P("", e, `
`) + S(["schema", S(t, " "), xe(n)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) => P("", e, `
`) + S(["scalar", t, S(n, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => P("", e, `
`) + S(
      [
        "type",
        t,
        P("implements ", S(n, " & ")),
        S(r, " "),
        xe(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => P("", e, `
`) + t + (ji(n) ? P(`(
`, Nn(S(n, `
`)), `
)`) : P("(", S(n, ", "), ")")) + ": " + r + P(" ", S(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => P("", e, `
`) + S(
      [t + ": " + n, P("= ", r), S(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => P("", e, `
`) + S(
      [
        "interface",
        t,
        P("implements ", S(n, " & ")),
        S(r, " "),
        xe(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: r }) => P("", e, `
`) + S(
      ["union", t, S(n, " "), P("= ", S(r, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: r }) => P("", e, `
`) + S(["enum", t, S(n, " "), xe(r)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) => P("", e, `
`) + S([t, S(n, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: r }) => P("", e, `
`) + S(["input", t, S(n, " "), xe(r)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) => P("", e, `
`) + "directive @" + t + (ji(n) ? P(`(
`, Nn(S(n, `
`)), `
)`) : P("(", S(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + S(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => S(
      ["extend schema", S(e, " "), xe(t)],
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
        P("implements ", S(t, " & ")),
        S(n, " "),
        xe(r)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => S(
      [
        "extend interface",
        e,
        P("implements ", S(t, " & ")),
        S(n, " "),
        xe(r)
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
        P("= ", S(n, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) => S(["extend enum", e, S(t, " "), xe(n)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) => S(["extend input", e, S(t, " "), xe(n)], " ")
  }
};
function S(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
}
function xe(e) {
  return P(`{
`, Nn(S(e, `
`)), `
}`);
}
function P(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function Nn(e) {
  return P("  ", e.replace(/\n/g, `
  `));
}
function ji(e) {
  var t;
  return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function yr(e, t) {
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
        (n) => yr(n, t)
      );
    case V.OBJECT:
      return Mr(
        e.fields,
        (n) => n.name.value,
        (n) => yr(n.value, t)
      );
    case V.VARIABLE:
      return t == null ? void 0 : t[e.name.value];
  }
}
function $e(e) {
  if (e != null || W(!1, "Must provide name."), typeof e == "string" || W(!1, "Expected name to be a string."), e.length === 0)
    throw new D("Expected name to be a non-empty string.");
  for (let t = 1; t < e.length; ++t)
    if (!$s(e.charCodeAt(t)))
      throw new D(
        `Names must only contain [_a-zA-Z0-9] but "${e}" does not.`
      );
  if (!js(e.charCodeAt(0)))
    throw new D(
      `Names must start with [_a-zA-Z] but "${e}" does not.`
    );
  return e;
}
function ou(e) {
  if (e === "true" || e === "false" || e === "null")
    throw new D(`Enum values cannot be named: ${e}`);
  return $e(e);
}
function ga(e) {
  return va(e) || su(e) || uu(e) || lu(e) || Sa(e) || Ia(e) || wa(e) || Xe(e);
}
function va(e) {
  return lt(e, Vt);
}
function su(e) {
  return lt(e, pu);
}
function uu(e) {
  return lt(e, mu);
}
function lu(e) {
  return lt(e, hu);
}
function Sa(e) {
  return lt(e, bu);
}
function Ia(e) {
  return lt(e, vu);
}
function wa(e) {
  return lt(e, du);
}
function Xe(e) {
  return lt(e, jn);
}
function cu(e) {
  return va(e) || Sa(e);
}
class du {
  constructor(t) {
    ga(t) || W(!1, `Expected ${L(t)} to be a GraphQL type.`), this.ofType = t;
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
class jn {
  constructor(t) {
    fu(t) || W(
      !1,
      `Expected ${L(t)} to be a GraphQL nullable type.`
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
function fu(e) {
  return ga(e) && !Xe(e);
}
function Na(e) {
  return typeof e == "function" ? e() : e;
}
function Aa(e) {
  return typeof e == "function" ? e() : e;
}
class Vt {
  constructor(t) {
    var n, r, i, a;
    const o = (n = t.parseValue) !== null && n !== void 0 ? n : Ri;
    this.name = $e(t.name), this.description = t.description, this.specifiedByURL = t.specifiedByURL, this.serialize = (r = t.serialize) !== null && r !== void 0 ? r : Ri, this.parseValue = o, this.parseLiteral = (i = t.parseLiteral) !== null && i !== void 0 ? i : (s, l) => o(yr(s, l)), this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (a = t.extensionASTNodes) !== null && a !== void 0 ? a : [], t.specifiedByURL == null || typeof t.specifiedByURL == "string" || W(
      !1,
      `${this.name} must provide "specifiedByURL" as a string, but got: ${L(t.specifiedByURL)}.`
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
class pu {
  constructor(t) {
    var n;
    this.name = $e(t.name), this.description = t.description, this.isTypeOf = t.isTypeOf, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = () => Ea(t), this._interfaces = () => Oa(t), t.isTypeOf == null || typeof t.isTypeOf == "function" || W(
      !1,
      `${this.name} must provide "isTypeOf" as a function, but got: ${L(t.isTypeOf)}.`
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
      fields: ka(this.getFields()),
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
function Oa(e) {
  var t;
  const n = Na(
    (t = e.interfaces) !== null && t !== void 0 ? t : []
  );
  return Array.isArray(n) || W(
    !1,
    `${e.name} interfaces must be an Array or a function which returns an Array.`
  ), n;
}
function Ea(e) {
  const t = Aa(e.fields);
  return Pt(t) || W(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), Cn(t, (n, r) => {
    var i;
    Pt(n) || W(
      !1,
      `${e.name}.${r} field config must be an object.`
    ), n.resolve == null || typeof n.resolve == "function" || W(
      !1,
      `${e.name}.${r} field resolver must be a function if provided, but got: ${L(n.resolve)}.`
    );
    const a = (i = n.args) !== null && i !== void 0 ? i : {};
    return Pt(a) || W(
      !1,
      `${e.name}.${r} args must be an object with argument names as keys.`
    ), {
      name: $e(r),
      description: n.description,
      type: n.type,
      args: Ta(a),
      resolve: n.resolve,
      subscribe: n.subscribe,
      deprecationReason: n.deprecationReason,
      extensions: je(n.extensions),
      astNode: n.astNode
    };
  });
}
function Ta(e) {
  return Object.entries(e).map(([t, n]) => ({
    name: $e(t),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: je(n.extensions),
    astNode: n.astNode
  }));
}
function Pt(e) {
  return tn(e) && !Array.isArray(e);
}
function ka(e) {
  return Cn(e, (t) => ({
    description: t.description,
    type: t.type,
    args: _a(t.args),
    resolve: t.resolve,
    subscribe: t.subscribe,
    deprecationReason: t.deprecationReason,
    extensions: t.extensions,
    astNode: t.astNode
  }));
}
function _a(e) {
  return Mr(
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
class mu {
  constructor(t) {
    var n;
    this.name = $e(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = Ea.bind(void 0, t), this._interfaces = Oa.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || W(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${L(t.resolveType)}.`
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
      fields: ka(this.getFields()),
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
class hu {
  constructor(t) {
    var n;
    this.name = $e(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._types = yu.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || W(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${L(t.resolveType)}.`
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
function yu(e) {
  const t = Na(e.types);
  return Array.isArray(t) || W(
    !1,
    `Must provide Array of types or a function which returns such an array for Union ${e.name}.`
  ), t;
}
class bu {
  /* <T> */
  constructor(t) {
    var n;
    this.name = $e(t.name), this.description = t.description, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._values = gu(this.name, t.values), this._valueLookup = new Map(
      this._values.map((r) => [r.value, r])
    ), this._nameLookup = $r(this._values, (r) => r.name);
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
        `Enum "${this.name}" cannot represent value: ${L(t)}`
      );
    return n.name;
  }
  parseValue(t) {
    if (typeof t != "string") {
      const r = L(t);
      throw new D(
        `Enum "${this.name}" cannot represent non-string value: ${r}.` + bn(this, r)
      );
    }
    const n = this.getValue(t);
    if (n == null)
      throw new D(
        `Value "${t}" does not exist in "${this.name}" enum.` + bn(this, t)
      );
    return n.value;
  }
  parseLiteral(t, n) {
    if (t.kind !== V.ENUM) {
      const i = ot(t);
      throw new D(
        `Enum "${this.name}" cannot represent non-enum value: ${i}.` + bn(this, i),
        {
          nodes: t
        }
      );
    }
    const r = this.getValue(t.value);
    if (r == null) {
      const i = ot(t);
      throw new D(
        `Value "${i}" does not exist in "${this.name}" enum.` + bn(this, i),
        {
          nodes: t
        }
      );
    }
    return r.value;
  }
  toConfig() {
    const t = Mr(
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
function bn(e, t) {
  const n = e.getValues().map((i) => i.name), r = Ys(t, n);
  return Qs("the enum value", r);
}
function gu(e, t) {
  return Pt(t) || W(
    !1,
    `${e} values must be an object with value names as keys.`
  ), Object.entries(t).map(([n, r]) => (Pt(r) || W(
    !1,
    `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${L(r)}.`
  ), {
    name: ou(n),
    description: r.description,
    value: r.value !== void 0 ? r.value : n,
    deprecationReason: r.deprecationReason,
    extensions: je(r.extensions),
    astNode: r.astNode
  }));
}
class vu {
  constructor(t) {
    var n;
    this.name = $e(t.name), this.description = t.description, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = Su.bind(void 0, t);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const t = Cn(this.getFields(), (n) => ({
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
function Su(e) {
  const t = Aa(e.fields);
  return Pt(t) || W(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), Cn(t, (n, r) => (!("resolve" in n) || W(
    !1,
    `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`
  ), {
    name: $e(r),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: je(n.extensions),
    astNode: n.astNode
  }));
}
const Jn = 2147483647, Yn = -2147483648, Iu = new Vt({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(e) {
    const t = an(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n))
      throw new D(
        `Int cannot represent non-integer value: ${L(t)}`
      );
    if (n > Jn || n < Yn)
      throw new D(
        "Int cannot represent non 32-bit signed integer value: " + L(t)
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isInteger(e))
      throw new D(
        `Int cannot represent non-integer value: ${L(e)}`
      );
    if (e > Jn || e < Yn)
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
    if (t > Jn || t < Yn)
      throw new D(
        `Int cannot represent non 32-bit signed integer value: ${e.value}`,
        {
          nodes: e
        }
      );
    return t;
  }
});
new Vt({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(e) {
    const t = an(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n))
      throw new D(
        `Float cannot represent non numeric value: ${L(t)}`
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isFinite(e))
      throw new D(
        `Float cannot represent non numeric value: ${L(e)}`
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
const xa = new Vt({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(e) {
    const t = an(e);
    if (typeof t == "string")
      return t;
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "number" && Number.isFinite(t))
      return t.toString();
    throw new D(
      `String cannot represent value: ${L(e)}`
    );
  },
  parseValue(e) {
    if (typeof e != "string")
      throw new D(
        `String cannot represent a non string value: ${L(e)}`
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
}), Vr = new Vt({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(e) {
    const t = an(e);
    if (typeof t == "boolean")
      return t;
    if (Number.isFinite(t))
      return t !== 0;
    throw new D(
      `Boolean cannot represent a non boolean value: ${L(t)}`
    );
  },
  parseValue(e) {
    if (typeof e != "boolean")
      throw new D(
        `Boolean cannot represent a non boolean value: ${L(e)}`
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
new Vt({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(e) {
    const t = an(e);
    if (typeof t == "string")
      return t;
    if (Number.isInteger(t))
      return String(t);
    throw new D(
      `ID cannot represent value: ${L(e)}`
    );
  },
  parseValue(e) {
    if (typeof e == "string")
      return e;
    if (typeof e == "number" && Number.isInteger(e))
      return e.toString();
    throw new D(`ID cannot represent value: ${L(e)}`);
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
function an(e) {
  if (tn(e)) {
    if (typeof e.valueOf == "function") {
      const t = e.valueOf();
      if (!tn(t))
        return t;
    }
    if (typeof e.toJSON == "function")
      return e.toJSON();
  }
  return e;
}
class on {
  constructor(t) {
    var n, r;
    this.name = $e(t.name), this.description = t.description, this.locations = t.locations, this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1, this.extensions = je(t.extensions), this.astNode = t.astNode, Array.isArray(t.locations) || W(!1, `@${t.name} locations must be an Array.`);
    const i = (r = t.args) !== null && r !== void 0 ? r : {};
    tn(i) && !Array.isArray(i) || W(
      !1,
      `@${t.name} args must be an object with argument names as keys.`
    ), this.args = Ta(i);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: _a(this.args),
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
new on({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    Se.FIELD,
    Se.FRAGMENT_SPREAD,
    Se.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new jn(Vr),
      description: "Included when true."
    }
  }
});
new on({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    Se.FIELD,
    Se.FRAGMENT_SPREAD,
    Se.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new jn(Vr),
      description: "Skipped when true."
    }
  }
});
const wu = "No longer supported";
new on({
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
      type: xa,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: wu
    }
  }
});
new on({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [Se.SCALAR],
  args: {
    url: {
      type: new jn(xa),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
});
function Wt(e, t, n) {
  if (e) {
    if (e.kind === V.VARIABLE) {
      const r = e.name.value;
      if (n == null || n[r] === void 0)
        return;
      const i = n[r];
      return i === null && Xe(t) ? void 0 : i;
    }
    if (Xe(t))
      return e.kind === V.NULL ? void 0 : Wt(e, t.ofType, n);
    if (e.kind === V.NULL)
      return null;
    if (wa(t)) {
      const r = t.ofType;
      if (e.kind === V.LIST) {
        const a = [];
        for (const o of e.values)
          if ($i(o, n)) {
            if (Xe(r))
              return;
            a.push(null);
          } else {
            const s = Wt(o, r, n);
            if (s === void 0)
              return;
            a.push(s);
          }
        return a;
      }
      const i = Wt(e, r, n);
      return i === void 0 ? void 0 : [i];
    }
    if (Ia(t)) {
      if (e.kind !== V.OBJECT)
        return;
      const r = /* @__PURE__ */ Object.create(null), i = $r(e.fields, (a) => a.name.value);
      for (const a of Object.values(t.getFields())) {
        const o = i[a.name];
        if (!o || $i(o.value, n)) {
          if (a.defaultValue !== void 0)
            r[a.name] = a.defaultValue;
          else if (Xe(a.type))
            return;
          continue;
        }
        const s = Wt(o.value, a.type, n);
        if (s === void 0)
          return;
        r[a.name] = s;
      }
      return r;
    }
    if (cu(t)) {
      let r;
      try {
        r = t.parseLiteral(e, n);
      } catch {
        return;
      }
      return r === void 0 ? void 0 : r;
    }
    pa(!1, "Unexpected input type: " + L(t));
  }
}
function $i(e, t) {
  return e.kind === V.VARIABLE && (t == null || t[e.name.value] === void 0);
}
function Nu(e, t, n) {
  var r;
  const i = {}, a = (r = t.arguments) !== null && r !== void 0 ? r : [], o = $r(a, (s) => s.name.value);
  for (const s of e.args) {
    const l = s.name, d = s.type, c = o[l];
    if (!c) {
      if (s.defaultValue !== void 0)
        i[l] = s.defaultValue;
      else if (Xe(d))
        throw new D(
          `Argument "${l}" of required type "${L(d)}" was not provided.`,
          {
            nodes: t
          }
        );
      continue;
    }
    const f = c.value;
    let p = f.kind === V.NULL;
    if (f.kind === V.VARIABLE) {
      const h = f.name.value;
      if (n == null || !Ou(n, h)) {
        if (s.defaultValue !== void 0)
          i[l] = s.defaultValue;
        else if (Xe(d))
          throw new D(
            `Argument "${l}" of required type "${L(d)}" was provided the variable "$${h}" which was not provided a runtime value.`,
            {
              nodes: f
            }
          );
        continue;
      }
      p = n[h] == null;
    }
    if (p && Xe(d))
      throw new D(
        `Argument "${l}" of non-null type "${L(d)}" must not be null.`,
        {
          nodes: f
        }
      );
    const m = Wt(f, d, n);
    if (m === void 0)
      throw new D(
        `Argument "${l}" has invalid value ${ot(f)}.`,
        {
          nodes: f
        }
      );
    i[l] = m;
  }
  return i;
}
function Au(e, t, n) {
  var r;
  const i = (r = t.directives) === null || r === void 0 ? void 0 : r.find(
    (a) => a.name.value === e.name
  );
  if (i)
    return Nu(e, i, n);
}
function Ou(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
const Eu = new on({
  name: "live",
  description: "Instruction for establishing a live connection that is updated once the underlying data changes.",
  locations: [Se.QUERY],
  args: {
    if: {
      type: Vr,
      defaultValue: !0,
      description: "Whether the query should be live or not."
    },
    throttle: {
      type: Iu,
      description: 'Propose a desired throttle interval ot the server in order to receive updates to at most once per "throttle" milliseconds. The server must not accept this value.'
    }
  }
}), Pa = (e) => e == null, Tu = (e) => {
  var t;
  if (e.kind !== "OperationDefinition" || e.operation !== "query")
    return null;
  const n = (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
  return Pa(n) ? null : n;
}, ku = (e, t) => {
  var n;
  const r = Au(Eu, { directives: [e] }, t);
  return {
    isLive: (r == null ? void 0 : r.if) === !0,
    throttleValue: (n = r == null ? void 0 : r.throttle) !== null && n !== void 0 ? n : null
  };
}, _u = (e, t) => {
  const n = Tu(e);
  return Pa(n) ? !1 : ku(n, t).isLive;
};
function ge(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function yt(e) {
  return ge(e) === "object";
}
function xu(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function Mi(e, t) {
  return e.length < 124 ? e : t;
}
const Pu = "graphql-transport-ws";
var he;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(he || (he = {}));
var K;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(K || (K = {}));
function Da(e) {
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
      if (!xu(e.payload))
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
function Du(e, t) {
  return Da(typeof e == "string" ? JSON.parse(e, t) : e);
}
function zt(e, t) {
  return Da(e), JSON.stringify(e, t);
}
function Fu(e) {
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
      let M = 1e3;
      for (let F = 0; F < q; F++)
        M *= 2;
      await new Promise((F) => setTimeout(F, M + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: f = gn,
    isFatalConnectionProblem: p,
    on: m,
    webSocketImpl: h,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: I = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (q) => {
        const M = Math.random() * 16 | 0;
        return (q == "x" ? M : M & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: E,
    jsonMessageReviver: k
  } = e;
  let w;
  if (h) {
    if (!Cu(h))
      throw new Error("Invalid WebSocket implementation provided");
    w = h;
  } else
    typeof WebSocket < "u" ? w = WebSocket : typeof global < "u" ? w = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (w = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!w)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const C = w, y = (() => {
    const O = (() => {
      const M = {};
      return {
        on(F, z) {
          return M[F] = z, () => {
            delete M[F];
          };
        },
        emit(F) {
          var z;
          "id" in F && ((z = M[F.id]) === null || z === void 0 || z.call(M, F));
        }
      };
    })(), q = {
      connecting: m != null && m.connecting ? [m.connecting] : [],
      opened: m != null && m.opened ? [m.opened] : [],
      connected: m != null && m.connected ? [m.connected] : [],
      ping: m != null && m.ping ? [m.ping] : [],
      pong: m != null && m.pong ? [m.pong] : [],
      message: m != null && m.message ? [O.emit, m.message] : [O.emit],
      closed: m != null && m.closed ? [m.closed] : [],
      error: m != null && m.error ? [m.error] : []
    };
    return {
      onMessage: O.on,
      on(M, F) {
        const z = q[M];
        return z.push(F), () => {
          z.splice(z.indexOf(F), 1);
        };
      },
      emit(M, ...F) {
        for (const z of [...q[M]])
          z(...F);
      }
    };
  })();
  function N(O) {
    const q = [
      // errors are fatal and more critical than close events, throw them first
      y.on("error", (M) => {
        q.forEach((F) => F()), O(M);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      y.on("closed", (M) => {
        q.forEach((F) => F()), O(M);
      })
    ];
  }
  let v, U = 0, Ze, It = !1, wt = 0, un = !1;
  async function Lt() {
    clearTimeout(Ze);
    const [O, q] = await (v ?? (v = new Promise((z, Me) => (async () => {
      if (It) {
        if (await c(wt), !U)
          return v = void 0, Me({ code: 1e3, reason: "All Subscriptions Gone" });
        wt++;
      }
      y.emit("connecting");
      const $ = new C(typeof t == "function" ? await t() : t, Pu);
      let Je, et;
      function ct() {
        isFinite(o) && o > 0 && (clearTimeout(et), et = setTimeout(() => {
          $.readyState === C.OPEN && ($.send(zt({ type: K.Ping })), y.emit("ping", !1, void 0));
        }, o));
      }
      N((te) => {
        v = void 0, clearTimeout(Je), clearTimeout(et), Me(te), gn(te) && te.code === 4499 && ($.close(4499, "Terminated"), $.onerror = null, $.onclose = null);
      }), $.onerror = (te) => y.emit("error", te), $.onclose = (te) => y.emit("closed", te), $.onopen = async () => {
        try {
          y.emit("opened", $);
          const te = typeof n == "function" ? await n() : n;
          if ($.readyState !== C.OPEN)
            return;
          $.send(zt(te ? {
            type: K.ConnectionInit,
            payload: te
          } : {
            type: K.ConnectionInit
            // payload is completely absent if not provided
          }, E)), isFinite(l) && l > 0 && (Je = setTimeout(() => {
            $.close(he.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), ct();
        } catch (te) {
          y.emit("error", te), $.close(he.InternalClientError, Mi(te instanceof Error ? te.message : new Error(te).message, "Internal client error"));
        }
      };
      let tt = !1;
      $.onmessage = ({ data: te }) => {
        try {
          const J = Du(te, k);
          if (y.emit("message", J), J.type === "ping" || J.type === "pong") {
            y.emit(J.type, !0, J.payload), J.type === "pong" ? ct() : s || ($.send(zt(J.payload ? {
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
          clearTimeout(Je), tt = !0, y.emit("connected", $, J.payload), It = !1, wt = 0, z([
            $,
            new Promise((ln, Nt) => N(Nt))
          ]);
        } catch (J) {
          $.onmessage = null, y.emit("error", J), $.close(he.BadResponse, Mi(J instanceof Error ? J.message : new Error(J).message, "Bad response"));
        }
      };
    })())));
    O.readyState === C.CLOSING && await q;
    let M = () => {
    };
    const F = new Promise((z) => M = z);
    return [
      O,
      M,
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
    if (gn(O) && (Ru(O.code) || [
      he.InternalServerError,
      he.InternalClientError,
      he.BadRequest,
      he.BadResponse,
      he.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      he.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      he.SubscriberAlreadyExists,
      he.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(O.code)))
      throw O;
    if (un)
      return !1;
    if (gn(O) && O.code === 1e3)
      return U > 0;
    if (!d || wt >= d || !f(O) || p != null && p(O))
      throw O;
    return It = !0;
  }
  return r || (async () => {
    for (U++; ; )
      try {
        const [, , O] = await Lt();
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
      const M = I(O);
      let F = !1, z = !1, Me = () => {
        U--, F = !0;
      };
      return (async () => {
        for (U++; ; )
          try {
            const [$, Je, et] = await Lt();
            if (F)
              return Je();
            const ct = y.onMessage(M, (tt) => {
              switch (tt.type) {
                case K.Next: {
                  q.next(tt.payload);
                  return;
                }
                case K.Error: {
                  z = !0, F = !0, q.error(tt.payload), Me();
                  return;
                }
                case K.Complete: {
                  F = !0, Me();
                  return;
                }
              }
            });
            $.send(zt({
              id: M,
              type: K.Subscribe,
              payload: O
            }, E)), Me = () => {
              !F && $.readyState === C.OPEN && $.send(zt({
                id: M,
                type: K.Complete
              }, E)), U--, F = !0, Je();
            }, await et.finally(ct);
            return;
          } catch ($) {
            if (!Oe($))
              return;
          }
      })().then(() => {
        z || q.complete();
      }).catch(($) => {
        q.error($);
      }), () => {
        F || Me();
      };
    },
    async dispose() {
      if (un = !0, v) {
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
function gn(e) {
  return yt(e) && "code" in e && "reason" in e;
}
function Ru(e) {
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
function Cu(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var kt = null;
typeof WebSocket < "u" ? kt = WebSocket : typeof MozWebSocket < "u" ? kt = MozWebSocket : typeof global < "u" ? kt = global.WebSocket || global.MozWebSocket : typeof window < "u" ? kt = window.WebSocket || window.MozWebSocket : typeof self < "u" && (kt = self.WebSocket || self.MozWebSocket);
const ju = kt;
class Fa extends Error {
}
class $u {
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
    ]), this.open = !1, new Fa("Transaction rolled back.");
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
class Mu {
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
const Vu = (e) => {
  const t = [...e.definitions].reverse().find((n) => n.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((r) => r.kind == "Field").name.value;
}, Vi = na({
  onOperation: (e) => {
    var t, n;
    (t = (n = e.context).operationName) !== null && t !== void 0 || (n.operationName = Vu(e.query) || "unknown");
  }
}), Bu = na({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, n] = e.context.url.split("?"), r = new URLSearchParams(n);
        r.set("operation", e.context.operationName), e.context.url = `${t}?${r.toString()}`;
      } catch {
      }
  }
});
var br;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(br || (br = {}));
const Lu = 2, Uu = 4800, qu = 1e4, Gu = [he.ConnectionAcknowledgementTimeout, he.ConnectionInitialisationTimeout], Bi = Symbol.for("gadget/connection"), zu = "token", Qu = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var ne;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(ne || (ne = {}));
const vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class Ra {
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
            connectionAckWaitTimeout: Uu,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const m = new gi({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              Vi,
              ...this.exchanges.beforeAsync,
              Qn({
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
          m[Bi] = this, p = new $u(m, f), this.currentTransaction = p, await p.start();
          const h = await d(p);
          return await p.commit(), h;
        } catch (m) {
          try {
            p != null && p.open && await p.rollback();
          } catch (h) {
            h instanceof Fa || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", h);
          }
          throw dr(m) ? new vi(m) : m;
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
        s = Wu(s, (d = this.options.baseRouteURL) !== null && d !== void 0 ? d : this.options.endpoint), this.isGadgetRequest(s) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == ne.Custom && await this.options.authenticationMode.custom.processFetch(s, l));
        const c = await this._fetchImplementation(s, l);
        if (this.authenticationMode == ne.BrowserSession) {
          const f = c.headers.get("x-set-authorization"), p = f != null && f.startsWith("Session ") ? f.replace("Session ", "") : null;
          p && this.sessionTokenStore.setItem(this.sessionStorageKey, p);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof vn < "u" && vn.fetch ? this._fetchImplementation = vn.fetch.bind(vn) : this._fetchImplementation = async (...s) => {
      let l = await import("./browser-ponyfill-d47e678d.js").then((d) => d.b);
      return l.default && (l = l.default), await l(...s);
    }, this.websocketImplementation = (r = (n = t.websocketImplementation) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.WebSocket) !== null && r !== void 0 ? r : ju, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${zu}-${this.endpoint}`;
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
    const n = !t || typeof t == "boolean" ? Kt.Durable : t.storageType;
    let r;
    n == Kt.Durable && Ii("localStorage") ? r = window.localStorage : n == Kt.Session && Ii("sessionStorage") ? r = window.sessionStorage : r = new Mu(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && r.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = r, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let n;
    if (typeof t == "string" ? n = t : typeof t == "object" && "url" in t ? n = t.url : n = String(t), gr(this.options.endpoint))
      return !!gr(n);
    const r = new URL(this.options.endpoint).host;
    return n.includes(r);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Vi, Bu];
    typeof window < "u" && t.push(ts), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      Qn({
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
      Qn({
        isSubscriptionOperation: (r) => r.query.definitions.some((i) => _u(i, r.variables)),
        forwardSubscription: (r) => ({
          subscribe: (i) => {
            let a;
            const o = import("./index-d5d487d7.js").then(({ applyAsyncIterableIteratorToSink: s, applyLiveQueryJSONDiffPatch: l, makeAsyncIterableIteratorFromSink: d }) => {
              const c = { ...r, query: r.query || "" };
              return a = s(l(d((f) => this.getBaseSubscriptionClient().subscribe(c, f))), i), a;
            });
            return {
              unsubscribe: () => {
                a ? a() : o.then((s) => s());
              }
            };
          }
        })
      }),
      ns,
      ...this.exchanges.afterAll
    );
    const n = new gi({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return n[Bi] = this, n;
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
    return Fu({
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
      n.authorization = "Basic " + Qu("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == ne.APIKey)
      n.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == ne.BrowserSession) {
      const r = this.sessionTokenStore.getItem(this.sessionStorageKey);
      r && (n.authorization = `Session ${r}`);
    }
    return n["x-gadget-environment"] = this.environment, n;
  }
  async waitForOpenedConnection(t) {
    let n = this.newSubscriptionClient(t), r = [], i = t.connectionAttempts || Lu;
    const a = t.connectionGlobalTimeoutMs || qu, o = () => {
      r.forEach((s) => s()), r = [];
    };
    return await new Promise((s, l) => {
      const d = setTimeout(() => {
        this.disposeClient(n), f(new us("Timeout opening websocket connection to Gadget API"));
      }, a), c = (h) => {
        if (dr(h)) {
          if (h.code == br.TooManyRequests)
            return o(), f(new ls(h.reason));
          if (Gu.includes(h.code) && i > 0) {
            i -= 1, this.disposeClient(n), n = this.newSubscriptionClient(t), m();
            return;
          }
        }
        clearTimeout(d), l(new vi(h));
      }, f = (h) => {
        clearTimeout(d), l(h);
      }, p = () => {
        clearTimeout(d), s(n);
      }, m = () => {
        o(), r.push(n.on("connected", p)), r.push(n.on("closed", c)), r.push(n.on("error", f));
      };
      m();
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
Object.defineProperty(Ra, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.20"
});
function Wu(e, t) {
  if (typeof e != "string")
    return e;
  if (gr(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function gr(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const sn = `
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
`, Bt = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, Ju = (e) => `
    query InternalFind${Re(e)}($id: GadgetID!, $select: [String!]) {
      ${Bt(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, Ca = (e, t) => ({
  search: t != null && t.search ? Z({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? Z({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? Z({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? Z({ value: ja(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), Yu = (e, t) => {
  const n = Re(e), r = Ca(n, t);
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
}, Hu = (e, t) => {
  const n = Re(e), r = Ca(n, t);
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
}, Ku = (e) => {
  const t = Re(e);
  return `
    ${sn}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${Bt(e)}
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
}, Xu = (e, t) => {
  const n = Re(e), r = Re(t);
  return `
    ${sn}

    mutation InternalBulkCreate${r}($records: [Internal${n}Input]!) {
      ${Bt(e)}
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
}, Zu = (e) => {
  const t = Re(e);
  return `
    ${sn}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${Bt(e)}
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
}, el = (e) => {
  const t = Re(e);
  return `
    ${sn}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${Bt(e)}
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
}, tl = (e) => {
  const t = Re(e);
  return `
    ${sn}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${Bt(e)}
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
class Pe {
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
    }), this.capitalizedApiIdentifier = St(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((r) => r === this.apiIdentifier);
  }
  getRecordFromData(t, n) {
    let r = t;
    if (!this.validateRecord(t))
      throw new Dn(`Invalid arguments found in variables. Did you mean to use ${n}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = await this.connection.currentClient.query(Ju(this.apiIdentifier), { id: t, select: ja(n == null ? void 0 : n.select) }).toPromise(), o = (r ? Qe : Yt)(i, ["internal", this.apiIdentifier]);
    return Ht(i, o);
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
    const n = Hu(this.apiIdentifier, t), r = await this.connection.currentClient.query(n.query, n.variables).toPromise(), i = Yt(r, ["internal", `list${this.capitalizedApiIdentifier}`]), a = en(r, i);
    return Mt.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const r = Yu(this.apiIdentifier, t), i = await this.connection.currentClient.query(r.query, r.variables).toPromise();
    let a;
    n === !1 ? a = Yt(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = Qe(i, ["internal", `list${this.capitalizedApiIdentifier}`], n);
    const o = en(i, a);
    return Mt.boot(this, o, { options: t, pageInfo: a.pageInfo })[0];
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
    const n = await this.connection.currentClient.mutation(Ku(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), r = at(n, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return Ht(n, r[this.apiIdentifier]);
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
      throw new lr("Cannot perform bulkCreate without a pluralApiIdentifier");
    const r = Re(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(Xu(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = at(i, ["internal", `bulkCreate${r}`]);
    return kr(i, a[this.options.pluralApiIdentifier]);
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
    cr(t, "Can't update a record without an ID passed");
    const r = await this.connection.currentClient.mutation(Zu(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(n, "update")
    }).toPromise(), i = at(r, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return Ht(r, i[this.apiIdentifier]);
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
    cr(t, "Can't delete a record without an ID");
    const n = await this.connection.currentClient.mutation(el(this.apiIdentifier), { id: t }).toPromise();
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
    const n = await this.connection.currentClient.mutation(tl(this.apiIdentifier), t).toPromise();
    at(n, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function ja(e) {
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
            return await ks(
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
            const l = await Oi(
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
          return await Ei(this, t, n, e, o);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        i.prototype[a.type] = Object.assign(async function(o) {
          const s = await Ei(
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
          return await Oi(this, a.operationName, void 0, n, e, o);
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
                    (c) => $a(this[a.singleActionFunctionName], void 0, c)
                  )
                }
              }, await Ti(
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
              const [d, c] = nl(a, o, s, l);
              return await Ti(
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
function $a(e, t, n = {}) {
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
function nl(e, t, n, r) {
  let i, a;
  t && (i = r.shift()), n && (a = r.shift());
  const o = r.shift();
  let s = a;
  (i || a) && (s = $a(e, i, a));
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
}, H = "user", He = "users", rl = _e(
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
}, ye = "session", Et = "sessions", il = _e(
  ye,
  Et,
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
      operationName: Et,
      modelApiIdentifier: ye,
      defaultSelection: Ve
    },
    {
      type: "findFirst",
      operationName: Et,
      modelApiIdentifier: ye,
      defaultSelection: Ve
    },
    {
      type: "maybeFindFirst",
      operationName: Et,
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
      modelSelectionField: Et,
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
      modelSelectionField: Et,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: Ve
    }
  ]
), Be = {
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
}, se = "shopifyProduct", dt = "shopifyProducts", al = _e(
  se,
  dt,
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
      operationName: dt,
      modelApiIdentifier: se,
      defaultSelection: Be
    },
    {
      type: "findFirst",
      operationName: dt,
      modelApiIdentifier: se,
      defaultSelection: Be
    },
    {
      type: "maybeFindFirst",
      operationName: dt,
      modelApiIdentifier: se,
      defaultSelection: Be
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
      defaultSelection: Be
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
      defaultSelection: Be
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
      defaultSelection: Be
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
      defaultSelection: Be
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
), Le = {
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
}, ue = "shopifyProductImage", ft = "shopifyProductImages", ol = _e(
  ue,
  ft,
  Le,
  [
    {
      type: "findOne",
      operationName: ue,
      modelApiIdentifier: ue,
      findByVariableName: "id",
      defaultSelection: Le
    },
    {
      type: "maybeFindOne",
      operationName: ue,
      modelApiIdentifier: ue,
      findByVariableName: "id",
      defaultSelection: Le
    },
    {
      type: "findMany",
      operationName: ft,
      modelApiIdentifier: ue,
      defaultSelection: Le
    },
    {
      type: "findFirst",
      operationName: ft,
      modelApiIdentifier: ue,
      defaultSelection: Le
    },
    {
      type: "maybeFindFirst",
      operationName: ft,
      modelApiIdentifier: ue,
      defaultSelection: Le
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
      defaultSelection: Le
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
      defaultSelection: Le
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
      defaultSelection: Le
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
      defaultSelection: Le
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
}, le = "shopifyProductOption", pt = "shopifyProductOptions", sl = _e(
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
}, ce = "shopifyProductVariant", mt = "shopifyProductVariants", ul = _e(
  ce,
  mt,
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
      operationName: mt,
      modelApiIdentifier: ce,
      defaultSelection: qe
    },
    {
      type: "findFirst",
      operationName: mt,
      modelApiIdentifier: ce,
      defaultSelection: qe
    },
    {
      type: "maybeFindFirst",
      operationName: mt,
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
      modelSelectionField: mt,
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
      modelSelectionField: mt,
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
      modelSelectionField: mt,
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
}, Q = "shopifyShop", Ke = "shopifyShops", ll = _e(
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
}, de = "productPairing", ht = "productPairings", cl = _e(
  de,
  ht,
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
      operationName: ht,
      modelApiIdentifier: de,
      defaultSelection: Ge
    },
    {
      type: "findFirst",
      operationName: ht,
      modelApiIdentifier: de,
      defaultSelection: Ge
    },
    {
      type: "maybeFindFirst",
      operationName: ht,
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
      modelSelectionField: ht,
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
      modelSelectionField: ht,
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
      modelSelectionField: ht,
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
}, ie = "shopifySync", nt = "shopifySyncs", dl = _e(
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
}, ae = "ambiguous", rt = "ambiguouss", fl = _e(
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
}, oe = "unambiguous", it = "unambiguouss", pl = _e(
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
), Li = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, Ui = "session", ml = "sessions", hl = _e(
  Ui,
  ml,
  Li,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: Li,
      modelApiIdentifier: Ui
    }
  ]
);
var Ma;
const qi = "production", yl = "development", bl = Symbol.for("gadget/modelRelationships"), gl = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class vl {
  constructor(t) {
    var i;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[Ma] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (a) => await ki(
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
      async () => await ki(
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
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? gl() ?? yl).toLocaleLowerCase();
    let n;
    this.apiRoots[this.environment] ? n = this.apiRoots[this.environment] : n = `https://related-products-example${this.environment == qi ? "" : `--${this.environment}`}.gadget.app`;
    const r = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== qi) {
      const a = ({ forward: o }) => (s) => {
        const l = o(s);
        return Ar(
          l,
          xt((d) => {
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
    if (this.connection = new Ra({
      endpoint: new URL("api/graphql", n).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: r,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == ne.APIKey && !((i = t == null ? void 0 : t.authenticationMode) != null && i.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new rl(this.connection), this.session = new il(this.connection), this.shopifyProduct = new al(this.connection), this.shopifyProductImage = new ol(this.connection), this.shopifyProductOption = new sl(this.connection), this.shopifyProductVariant = new ul(this.connection), this.shopifyShop = new ll(this.connection), this.productPairing = new cl(this.connection), this.shopifySync = new dl(this.connection), this.ambiguous = new fl(this.connection), this.unambiguous = new pl(this.connection), this.currentSession = new hl(this.connection), this.internal = {
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
    cr(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let i, a;
    return typeof r < "u" ? (i = n, a = r) : !t.variables || Object.keys(t.variables).length == 0 ? (i = {}, a = n) : (typeof n == "string" ? i = { id: n } : i = n, a = {}), await _s(this.connection, t, i, a);
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
    return new wn(this.connection, t, n);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
Ma = bl;
var Va = {}, $n = ze.createContext(Va);
$n.Provider;
$n.Consumer;
$n.displayName = "UrqlContext";
var Sl = () => {
  var e = ze.useContext($n);
  if (e === Va && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, Il = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, wl = (e, t) => e === t || !(!e || !t || e.key !== t.key), Hn = (e, t) => {
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
      if (o === "operation" ? !wl(r[o], i[o]) : r[o] !== i[o])
        return !0;
    return !1;
  })(e, n) ? n : e;
}, Nl = (e, t) => {
  for (var n = 0, r = t.length; n < r; n++)
    if (e[n] !== t[n])
      return !0;
  return !1;
}, Kn = ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Gi(e, t) {
  process.env.NODE_ENV !== "production" && Kn && Kn.ReactCurrentOwner && Kn.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function Al(e, t) {
  var n = ze.useRef(void 0);
  return ze.useMemo(() => {
    var r = In(e, t);
    return n.current !== void 0 && n.current.key === r.key ? n.current : (n.current = r, r);
  }, [e, t]);
}
var Ol = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
    e.operations$ && vt((r) => {
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
}, El = (e, t) => e.suspense && (!t || t.suspense !== !1);
function Tl(e) {
  var t = Sl(), n = Ol(t), r = El(t, e.context), i = Al(e.query, e.variables), a = ze.useMemo(() => {
    if (e.pause)
      return null;
    var p = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return r ? Ft((m) => {
      n.set(i.key, m);
    })(p) : p;
  }, [n, t, i, r, e.pause, e.requestPolicy, e.context]), o = ze.useCallback((p, m) => {
    if (!p)
      return {
        fetching: !1
      };
    var h = n.get(i.key);
    if (h) {
      if (m && h != null && "then" in h)
        throw h;
    } else {
      var I, E = vt((w) => {
        h = w, I && I(h);
      })(zi(() => m && !I || !h)(p));
      if (h == null && m) {
        var k = new Promise((w) => {
          I = w;
        });
        throw n.set(i.key, k), k;
      } else
        E.unsubscribe();
    }
    return h || {
      fetching: !0
    };
  }, [n, i]), s = [t, i, e.requestPolicy, e.context, e.pause], [l, d] = ze.useState(() => [a, Hn(Il, o(a, r)), s]), c = l[1];
  a !== l[0] && Nl(l[2], s) && d([a, c = Hn(l[1], o(a, r)), s]), ze.useEffect(() => {
    var p = l[0], m = l[2][1], h = !1, I = (k) => {
      h = !0, Gi(d, (w) => {
        var C = Hn(w[1], k);
        return w[1] !== C ? [w[0], C, w[2]] : w;
      });
    };
    if (p) {
      var E = vt(I)(Sr(() => {
        I({
          fetching: !1
        });
      })(p));
      return h || I({
        fetching: !0
      }), () => {
        n.dispose(m.key), E.unsubscribe();
      };
    } else
      I({
        fetching: !1
      });
  }, [n, l[0], l[2][1]]);
  var f = ze.useCallback((p) => {
    var m = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...p
    };
    Gi(d, (h) => [r ? Ft((I) => {
      n.set(i.key, I);
    })(t.executeQuery(i, m)) : t.executeQuery(i, m), h[1], s]);
  }, [t, n, i, r, o, e.requestPolicy, e.context]);
  return [c, f];
}
const kl = _n.createContext(void 0);
_n.createContext(void 0);
const _l = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", xl = (e, t) => {
  let n = "";
  return e !== void 0 ? n = `[Network] ${e.message}` : t !== void 0 ? t.forEach((r) => {
    n += `[GraphQL] ${r.message}
`;
  }) : n = "Unknown error", n.trim();
}, Pl = (e) => typeof e == "string" ? new D(e) : e != null && e.message && !e.code ? new D(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class bt extends Error {
  /** @private */
  static forClientSideError(t, n) {
    return new bt({
      executionErrors: [t],
      response: n
    });
  }
  /** @private */
  static forErrorsResponse(t, n) {
    return new bt({
      executionErrors: t.map(Tr),
      response: n
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new bt({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, n, r = !1) {
    const i = hs(t, n);
    let a = bt.forMaybeCombinedError(t.error);
    return !a && i && !r && (a = bt.forClientSideError(i)), a;
  }
  constructor({ networkError: t, executionErrors: n, response: r }) {
    const i = (n || []).map(Pl), a = xl(t, i);
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
const Dl = (e) => {
  const { context: t, suspense: n, ...r } = e ?? {}, i = Xn(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...r,
    context: i
  };
}, Fl = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), Rl = (e) => {
  if (!lo(kl))
    throw new Error(_l);
  const t = Dl(e);
  return Tl(t);
};
var Cl = typeof Element < "u", jl = typeof Map == "function", $l = typeof Set == "function", Ml = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function An(e, t) {
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
        if (!An(e[r], t[r]))
          return !1;
      return !0;
    }
    var a;
    if (jl && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!An(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if ($l && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (Ml && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Cl && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !An(e[i[r]], t[i[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Vl = function(t, n) {
  try {
    return An(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Bl = /* @__PURE__ */ fo(Vl), Ll = (e) => {
  const t = co();
  return e ? (t.current === void 0 || !Bl(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, Ul = (e, t) => {
  const n = Ll(t), r = Xn(() => Rr(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, n), [e, n]), [i, a] = Rl(Fl(r, t));
  return [Xn(() => {
    const s = [e.findMany.operationName];
    let l = i.data;
    if (l) {
      const c = $t(i.data, s);
      if (c) {
        const f = en(i, c);
        l = Mt.boot(e, f, c);
      }
    }
    const d = bt.errorIfDataAbsent(i, s, t == null ? void 0 : t.pause);
    return { ...i, data: l, error: d };
  }, [e, t == null ? void 0 : t.pause, i]), a];
}, ql = new vl(), Wl = () => {
  const [{ data: e }] = Ul(ql.shopifyProduct);
  return /* @__PURE__ */ ni.jsx(ni.Fragment, { children: JSON.stringify(e) });
};
export {
  Wl as R,
  zl as c,
  fo as g
};
