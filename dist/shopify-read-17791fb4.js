import * as Rt from "react";
import oe, { useMemo as li, useContext as Lc, useRef as fd, memo as dd, useState as Uc, useEffect as ii, createContext as pd } from "react";
var g = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ya = { exports: {} }, nr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yu;
function hd() {
  if (Yu)
    return nr;
  Yu = 1;
  var e = oe, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, y, u) {
    var c, l = {}, p = null, h = null;
    u !== void 0 && (p = "" + u), y.key !== void 0 && (p = "" + y.key), y.ref !== void 0 && (h = y.ref);
    for (c in y)
      r.call(y, c) && !a.hasOwnProperty(c) && (l[c] = y[c]);
    if (s && s.defaultProps)
      for (c in y = s.defaultProps, y)
        l[c] === void 0 && (l[c] = y[c]);
    return { $$typeof: n, type: s, key: p, ref: h, props: l, _owner: i.current };
  }
  return nr.Fragment = t, nr.jsx = o, nr.jsxs = o, nr;
}
var rr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ku;
function yd() {
  return Ku || (Ku = 1, process.env.NODE_ENV !== "production" && function() {
    var e = oe, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), d = Symbol.iterator, f = "@@iterator";
    function v(A) {
      if (A === null || typeof A != "object")
        return null;
      var C = d && A[d] || A[f];
      return typeof C == "function" ? C : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(A) {
      {
        for (var C = arguments.length, R = new Array(C > 1 ? C - 1 : 0), W = 1; W < C; W++)
          R[W - 1] = arguments[W];
        O("error", A, R);
      }
    }
    function O(A, C, R) {
      {
        var W = m.ReactDebugCurrentFrame, fe = W.getStackAddendum();
        fe !== "" && (C += "%s", R = R.concat([fe]));
        var _e = R.map(function(ne) {
          return String(ne);
        });
        _e.unshift("Warning: " + C), Function.prototype.apply.call(console[A], console, _e);
      }
    }
    var _ = !1, T = !1, P = !1, E = !1, S = !1, I;
    I = Symbol.for("react.module.reference");
    function w(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === a || S || A === i || A === u || A === c || E || A === h || _ || T || P || typeof A == "object" && A !== null && (A.$$typeof === p || A.$$typeof === l || A.$$typeof === o || A.$$typeof === s || A.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === I || A.getModuleId !== void 0));
    }
    function j(A, C, R) {
      var W = A.displayName;
      if (W)
        return W;
      var fe = C.displayName || C.name || "";
      return fe !== "" ? R + "(" + fe + ")" : R;
    }
    function B(A) {
      return A.displayName || "Context";
    }
    function U(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case s:
            var C = A;
            return B(C) + ".Consumer";
          case o:
            var R = A;
            return B(R._context) + ".Provider";
          case y:
            return j(A, A.render, "ForwardRef");
          case l:
            var W = A.displayName || null;
            return W !== null ? W : U(A.type) || "Memo";
          case p: {
            var fe = A, _e = fe._payload, ne = fe._init;
            try {
              return U(ne(_e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, $ = 0, H, F, X, me, z, Ie, Q;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function be() {
      {
        if ($ === 0) {
          H = console.log, F = console.info, X = console.warn, me = console.error, z = console.group, Ie = console.groupCollapsed, Q = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        $++;
      }
    }
    function ce() {
      {
        if ($--, $ === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, A, {
              value: H
            }),
            info: D({}, A, {
              value: F
            }),
            warn: D({}, A, {
              value: X
            }),
            error: D({}, A, {
              value: me
            }),
            group: D({}, A, {
              value: z
            }),
            groupCollapsed: D({}, A, {
              value: Ie
            }),
            groupEnd: D({}, A, {
              value: Q
            })
          });
        }
        $ < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = m.ReactCurrentDispatcher, Qe;
    function je(A, C, R) {
      {
        if (Qe === void 0)
          try {
            throw Error();
          } catch (fe) {
            var W = fe.stack.trim().match(/\n( *(at )?)/);
            Qe = W && W[1] || "";
          }
        return `
` + Qe + A;
      }
    }
    var nt = !1, Fe;
    {
      var Pt = typeof WeakMap == "function" ? WeakMap : Map;
      Fe = new Pt();
    }
    function Bt(A, C) {
      if (!A || nt)
        return "";
      {
        var R = Fe.get(A);
        if (R !== void 0)
          return R;
      }
      var W;
      nt = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _e;
      _e = K.current, K.current = null, be();
      try {
        if (C) {
          var ne = function() {
            throw Error();
          };
          if (Object.defineProperty(ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ne, []);
            } catch (Lt) {
              W = Lt;
            }
            Reflect.construct(A, [], ne);
          } else {
            try {
              ne.call();
            } catch (Lt) {
              W = Lt;
            }
            A.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Lt) {
            W = Lt;
          }
          A();
        }
      } catch (Lt) {
        if (Lt && W && typeof Lt.stack == "string") {
          for (var x = Lt.stack.split(`
`), ut = W.stack.split(`
`), $e = x.length - 1, qe = ut.length - 1; $e >= 1 && qe >= 0 && x[$e] !== ut[qe]; )
            qe--;
          for (; $e >= 1 && qe >= 0; $e--, qe--)
            if (x[$e] !== ut[qe]) {
              if ($e !== 1 || qe !== 1)
                do
                  if ($e--, qe--, qe < 0 || x[$e] !== ut[qe]) {
                    var gt = `
` + x[$e].replace(" at new ", " at ");
                    return A.displayName && gt.includes("<anonymous>") && (gt = gt.replace("<anonymous>", A.displayName)), typeof A == "function" && Fe.set(A, gt), gt;
                  }
                while ($e >= 1 && qe >= 0);
              break;
            }
        }
      } finally {
        nt = !1, K.current = _e, ce(), Error.prepareStackTrace = fe;
      }
      var On = A ? A.displayName || A.name : "", Qu = On ? je(On) : "";
      return typeof A == "function" && Fe.set(A, Qu), Qu;
    }
    function Vr(A, C, R) {
      return Bt(A, !1);
    }
    function tr(A) {
      var C = A.prototype;
      return !!(C && C.isReactComponent);
    }
    function qt(A, C, R) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return Bt(A, tr(A));
      if (typeof A == "string")
        return je(A);
      switch (A) {
        case u:
          return je("Suspense");
        case c:
          return je("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case y:
            return Vr(A.render);
          case l:
            return qt(A.type, C, R);
          case p: {
            var W = A, fe = W._payload, _e = W._init;
            try {
              return qt(_e(fe), C, R);
            } catch {
            }
          }
        }
      return "";
    }
    var xt = Object.prototype.hasOwnProperty, bn = {}, $r = m.ReactDebugCurrentFrame;
    function en(A) {
      if (A) {
        var C = A._owner, R = qt(A.type, A._source, C ? C.type : null);
        $r.setExtraStackFrame(R);
      } else
        $r.setExtraStackFrame(null);
    }
    function k(A, C, R, W, fe) {
      {
        var _e = Function.call.bind(xt);
        for (var ne in A)
          if (_e(A, ne)) {
            var x = void 0;
            try {
              if (typeof A[ne] != "function") {
                var ut = Error((W || "React class") + ": " + R + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ut.name = "Invariant Violation", ut;
              }
              x = A[ne](C, ne, W, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($e) {
              x = $e;
            }
            x && !(x instanceof Error) && (en(fe), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", R, ne, typeof x), en(null)), x instanceof Error && !(x.message in bn) && (bn[x.message] = !0, en(fe), b("Failed %s type: %s", R, x.message), en(null));
          }
      }
    }
    var N = Array.isArray;
    function V(A) {
      return N(A);
    }
    function Y(A) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, R = C && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return R;
      }
    }
    function G(A) {
      try {
        return te(A), !1;
      } catch {
        return !0;
      }
    }
    function te(A) {
      return "" + A;
    }
    function Ne(A) {
      if (G(A))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Y(A)), te(A);
    }
    var ge = m.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, gn, Wt;
    Wt = {};
    function Jf(A) {
      if (xt.call(A, "ref")) {
        var C = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function Xf(A) {
      if (xt.call(A, "key")) {
        var C = Object.getOwnPropertyDescriptor(A, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function Zf(A, C) {
      if (typeof A.ref == "string" && ge.current && C && ge.current.stateNode !== C) {
        var R = U(ge.current.type);
        Wt[R] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(ge.current.type), A.ref), Wt[R] = !0);
      }
    }
    function xf(A, C) {
      {
        var R = function() {
          Ve || (Ve = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        R.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function ed(A, C) {
      {
        var R = function() {
          gn || (gn = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        R.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var td = function(A, C, R, W, fe, _e, ne) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: A,
        key: C,
        ref: R,
        props: ne,
        // Record the component responsible for creating this element.
        _owner: _e
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
        value: W
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function nd(A, C, R, W, fe) {
      {
        var _e, ne = {}, x = null, ut = null;
        R !== void 0 && (Ne(R), x = "" + R), Xf(C) && (Ne(C.key), x = "" + C.key), Jf(C) && (ut = C.ref, Zf(C, fe));
        for (_e in C)
          xt.call(C, _e) && !ye.hasOwnProperty(_e) && (ne[_e] = C[_e]);
        if (A && A.defaultProps) {
          var $e = A.defaultProps;
          for (_e in $e)
            ne[_e] === void 0 && (ne[_e] = $e[_e]);
        }
        if (x || ut) {
          var qe = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          x && xf(ne, qe), ut && ed(ne, qe);
        }
        return td(A, x, ut, fe, W, ge.current, ne);
      }
    }
    var na = m.ReactCurrentOwner, $u = m.ReactDebugCurrentFrame;
    function _n(A) {
      if (A) {
        var C = A._owner, R = qt(A.type, A._source, C ? C.type : null);
        $u.setExtraStackFrame(R);
      } else
        $u.setExtraStackFrame(null);
    }
    var ra;
    ra = !1;
    function ia(A) {
      return typeof A == "object" && A !== null && A.$$typeof === n;
    }
    function Gu() {
      {
        if (na.current) {
          var A = U(na.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function rd(A) {
      {
        if (A !== void 0) {
          var C = A.fileName.replace(/^.*[\\\/]/, ""), R = A.lineNumber;
          return `

Check your code at ` + C + ":" + R + ".";
        }
        return "";
      }
    }
    var qu = {};
    function id(A) {
      {
        var C = Gu();
        if (!C) {
          var R = typeof A == "string" ? A : A.displayName || A.name;
          R && (C = `

Check the top-level render call using <` + R + ">.");
        }
        return C;
      }
    }
    function Wu(A, C) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var R = id(C);
        if (qu[R])
          return;
        qu[R] = !0;
        var W = "";
        A && A._owner && A._owner !== na.current && (W = " It was passed a child from " + U(A._owner.type) + "."), _n(A), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, W), _n(null);
      }
    }
    function Hu(A, C) {
      {
        if (typeof A != "object")
          return;
        if (V(A))
          for (var R = 0; R < A.length; R++) {
            var W = A[R];
            ia(W) && Wu(W, C);
          }
        else if (ia(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var fe = v(A);
          if (typeof fe == "function" && fe !== A.entries)
            for (var _e = fe.call(A), ne; !(ne = _e.next()).done; )
              ia(ne.value) && Wu(ne.value, C);
        }
      }
    }
    function ad(A) {
      {
        var C = A.type;
        if (C == null || typeof C == "string")
          return;
        var R;
        if (typeof C == "function")
          R = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === l))
          R = C.propTypes;
        else
          return;
        if (R) {
          var W = U(C);
          k(R, A.props, "prop", W, A);
        } else if (C.PropTypes !== void 0 && !ra) {
          ra = !0;
          var fe = U(C);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function od(A) {
      {
        for (var C = Object.keys(A.props), R = 0; R < C.length; R++) {
          var W = C[R];
          if (W !== "children" && W !== "key") {
            _n(A), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), _n(null);
            break;
          }
        }
        A.ref !== null && (_n(A), b("Invalid attribute `ref` supplied to `React.Fragment`."), _n(null));
      }
    }
    function zu(A, C, R, W, fe, _e) {
      {
        var ne = w(A);
        if (!ne) {
          var x = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ut = rd(fe);
          ut ? x += ut : x += Gu();
          var $e;
          A === null ? $e = "null" : V(A) ? $e = "array" : A !== void 0 && A.$$typeof === n ? ($e = "<" + (U(A.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : $e = typeof A, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $e, x);
        }
        var qe = nd(A, C, R, fe, _e);
        if (qe == null)
          return qe;
        if (ne) {
          var gt = C.children;
          if (gt !== void 0)
            if (W)
              if (V(gt)) {
                for (var On = 0; On < gt.length; On++)
                  Hu(gt[On], A);
                Object.freeze && Object.freeze(gt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Hu(gt, A);
        }
        return A === r ? od(qe) : ad(qe), qe;
      }
    }
    function ud(A, C, R) {
      return zu(A, C, R, !0);
    }
    function sd(A, C, R) {
      return zu(A, C, R, !1);
    }
    var cd = sd, ld = ud;
    rr.Fragment = r, rr.jsx = cd, rr.jsxs = ld;
  }()), rr;
}
process.env.NODE_ENV === "production" ? Ya.exports = hd() : Ya.exports = yd();
var fi = Ya.exports;
const vd = (e) => e && "connection" in e && e.connection && "endpoint" in e.connection;
var dr;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(dr || (dr = {}));
const md = {
  DateTime(e) {
    return new Date(e);
  }
};
class bd {
  constructor(n) {
    Object.defineProperty(this, "plan", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
  apply(n) {
    return Array.isArray(n) ? n.map((t) => this.hydrateObject(t)) : this.hydrateObject(n);
  }
  hydrateObject(n) {
    const t = { ...n };
    for (const [r, i] of Object.entries(this.plan)) {
      const a = t[r];
      a != null && (t[r] = md[i](a));
    }
    return t;
  }
}
function Le(e, n) {
  if (!!!e)
    throw new Error(n);
}
function mr(e) {
  return typeof e == "object" && e !== null;
}
function Vc(e, n) {
  if (!!!e)
    throw new Error(
      n ?? "Unexpected invariant triggered."
    );
}
const gd = /\r\n|[\n\r]/g;
function Ka(e, n) {
  let t = 0, r = 1;
  for (const i of e.body.matchAll(gd)) {
    if (typeof i.index == "number" || Vc(!1), i.index >= n)
      break;
    t = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: n + 1 - t
  };
}
function _d(e) {
  return $c(
    e.source,
    Ka(e.source, e.start)
  );
}
function $c(e, n) {
  const t = e.locationOffset.column - 1, r = "".padStart(t) + e.body, i = n.line - 1, a = e.locationOffset.line - 1, o = n.line + a, s = n.line === 1 ? t : 0, y = n.column + s, u = `${e.name}:${o}:${y}
`, c = r.split(/\r\n|[\n\r]/g), l = c[i];
  if (l.length > 120) {
    const p = Math.floor(y / 80), h = y % 80, d = [];
    for (let f = 0; f < l.length; f += 80)
      d.push(l.slice(f, f + 80));
    return u + Ju([
      [`${o} |`, d[0]],
      ...d.slice(1, p + 1).map((f) => ["|", f]),
      ["|", "^".padStart(h)],
      ["|", d[p + 1]]
    ]);
  }
  return u + Ju([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, c[i - 1]],
    [`${o} |`, l],
    ["|", "^".padStart(y)],
    [`${o + 1} |`, c[i + 1]]
  ]);
}
function Ju(e) {
  const n = e.filter(([r, i]) => i !== void 0), t = Math.max(...n.map(([r]) => r.length));
  return n.map(([r, i]) => r.padStart(t) + (i ? " " + i : "")).join(`
`);
}
function Od(e) {
  const n = e[0];
  return n == null || "kind" in n || "length" in n ? {
    nodes: n,
    source: e[1],
    positions: e[2],
    path: e[3],
    originalError: e[4],
    extensions: e[5]
  } : n;
}
let ae = class Gc extends Error {
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
  constructor(n, ...t) {
    var r, i, a;
    const { nodes: o, source: s, positions: y, path: u, originalError: c, extensions: l } = Od(t);
    super(n), this.name = "GraphQLError", this.path = u ?? void 0, this.originalError = c ?? void 0, this.nodes = Xu(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const p = Xu(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((d) => d.loc).filter((d) => d != null)
    );
    this.source = s ?? (p == null || (i = p[0]) === null || i === void 0 ? void 0 : i.source), this.positions = y ?? (p == null ? void 0 : p.map((d) => d.start)), this.locations = y && s ? y.map((d) => Ka(s, d)) : p == null ? void 0 : p.map((d) => Ka(d.source, d.start));
    const h = mr(
      c == null ? void 0 : c.extensions
    ) ? c == null ? void 0 : c.extensions : void 0;
    this.extensions = (a = l ?? h) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Gc) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let n = this.message;
    if (this.nodes)
      for (const t of this.nodes)
        t.loc && (n += `

` + _d(t.loc));
    else if (this.source && this.locations)
      for (const t of this.locations)
        n += `

` + $c(this.source, t);
    return n;
  }
  toJSON() {
    const n = {
      message: this.message
    };
    return this.locations != null && (n.locations = this.locations), this.path != null && (n.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (n.extensions = this.extensions), n;
  }
};
function Xu(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const qc = {
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
}, Ad = new Set(Object.keys(qc));
function Zu(e) {
  const n = e == null ? void 0 : e.kind;
  return typeof n == "string" && Ad.has(n);
}
var xu;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(xu || (xu = {}));
var pt;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(pt || (pt = {}));
var ve;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(ve || (ve = {}));
function es(e) {
  return e === 9 || e === 32;
}
function Pd(e) {
  return e >= 48 && e <= 57;
}
function Wc(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function Sd(e) {
  return Wc(e) || e === 95;
}
function Ed(e) {
  return Wc(e) || Pd(e) || e === 95;
}
function Td(e, n) {
  const t = e.replace(/"""/g, '\\"""'), r = t.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((h) => h.length === 0 || es(h.charCodeAt(0))), o = t.endsWith('\\"""'), s = e.endsWith('"') && !o, y = e.endsWith("\\"), u = s || y, c = !(n != null && n.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || u || a || o);
  let l = "";
  const p = i && es(e.charCodeAt(0));
  return (c && !p || a) && (l += `
`), l += t, (c || u) && (l += `
`), '"""' + l + '"""';
}
const Id = 10, Hc = 2;
function Oe(e) {
  return Ri(e, []);
}
function Ri(e, n) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return wd(e, n);
    default:
      return String(e);
  }
}
function wd(e, n) {
  if (e === null)
    return "null";
  if (n.includes(e))
    return "[Circular]";
  const t = [...n, e];
  if (Cd(e)) {
    const r = e.toJSON();
    if (r !== e)
      return typeof r == "string" ? r : Ri(r, t);
  } else if (Array.isArray(e))
    return Nd(e, t);
  return jd(e, t);
}
function Cd(e) {
  return typeof e.toJSON == "function";
}
function jd(e, n) {
  const t = Object.entries(e);
  return t.length === 0 ? "{}" : n.length > Hc ? "[" + Rd(e) + "]" : "{ " + t.map(
    ([i, a]) => i + ": " + Ri(a, n)
  ).join(", ") + " }";
}
function Nd(e, n) {
  if (e.length === 0)
    return "[]";
  if (n.length > Hc)
    return "[Array]";
  const t = Math.min(Id, e.length), r = e.length - t, i = [];
  for (let a = 0; a < t; ++a)
    i.push(Ri(e[a], n));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function Rd(e) {
  const n = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (n === "Object" && typeof e.constructor == "function") {
    const t = e.constructor.name;
    if (typeof t == "string" && t !== "")
      return t;
  }
  return n;
}
const Jt = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  globalThis.process && globalThis.process.env.NODE_ENV === "production" ? function(n, t) {
    return n instanceof t;
  } : function(n, t) {
    if (n instanceof t)
      return !0;
    if (typeof n == "object" && n !== null) {
      var r;
      const i = t.prototype[Symbol.toStringTag], a = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in n ? n[Symbol.toStringTag] : (r = n.constructor) === null || r === void 0 ? void 0 : r.name
      );
      if (i === a) {
        const o = Oe(n);
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
), Md = 5;
function kd(e, n) {
  const [t, r] = n ? [e, n] : [void 0, e];
  let i = " Did you mean ";
  t && (i += t + " ");
  const a = r.map((y) => `"${y}"`);
  switch (a.length) {
    case 0:
      return "";
    case 1:
      return i + a[0] + "?";
    case 2:
      return i + a[0] + " or " + a[1] + "?";
  }
  const o = a.slice(0, Md), s = o.pop();
  return i + o.join(", ") + ", or " + s + "?";
}
function ts(e) {
  return e;
}
function No(e, n) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    t[n(r)] = r;
  return t;
}
function Ro(e, n, t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of e)
    r[n(i)] = t(i);
  return r;
}
function Mi(e, n) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of Object.keys(e))
    t[r] = n(e[r], r);
  return t;
}
function Dd(e, n) {
  let t = 0, r = 0;
  for (; t < e.length && r < n.length; ) {
    let i = e.charCodeAt(t), a = n.charCodeAt(r);
    if (Gr(i) && Gr(a)) {
      let o = 0;
      do
        ++t, o = o * 10 + i - Ja, i = e.charCodeAt(t);
      while (Gr(i) && o > 0);
      let s = 0;
      do
        ++r, s = s * 10 + a - Ja, a = n.charCodeAt(r);
      while (Gr(a) && s > 0);
      if (o < s)
        return -1;
      if (o > s)
        return 1;
    } else {
      if (i < a)
        return -1;
      if (i > a)
        return 1;
      ++t, ++r;
    }
  }
  return e.length - n.length;
}
const Ja = 48, Bd = 57;
function Gr(e) {
  return !isNaN(e) && Ja <= e && e <= Bd;
}
function Ld(e, n) {
  const t = /* @__PURE__ */ Object.create(null), r = new Ud(e), i = Math.floor(e.length * 0.4) + 1;
  for (const a of n) {
    const o = r.measure(a, i);
    o !== void 0 && (t[a] = o);
  }
  return Object.keys(t).sort((a, o) => {
    const s = t[a] - t[o];
    return s !== 0 ? s : Dd(a, o);
  });
}
class Ud {
  constructor(n) {
    this._input = n, this._inputLowerCase = n.toLowerCase(), this._inputArray = ns(this._inputLowerCase), this._rows = [
      new Array(n.length + 1).fill(0),
      new Array(n.length + 1).fill(0),
      new Array(n.length + 1).fill(0)
    ];
  }
  measure(n, t) {
    if (this._input === n)
      return 0;
    const r = n.toLowerCase();
    if (this._inputLowerCase === r)
      return 1;
    let i = ns(r), a = this._inputArray;
    if (i.length < a.length) {
      const c = i;
      i = a, a = c;
    }
    const o = i.length, s = a.length;
    if (o - s > t)
      return;
    const y = this._rows;
    for (let c = 0; c <= s; c++)
      y[0][c] = c;
    for (let c = 1; c <= o; c++) {
      const l = y[(c - 1) % 3], p = y[c % 3];
      let h = p[0] = c;
      for (let d = 1; d <= s; d++) {
        const f = i[c - 1] === a[d - 1] ? 0 : 1;
        let v = Math.min(
          l[d] + 1,
          // delete
          p[d - 1] + 1,
          // insert
          l[d - 1] + f
          // substitute
        );
        if (c > 1 && d > 1 && i[c - 1] === a[d - 2] && i[c - 2] === a[d - 1]) {
          const m = y[(c - 2) % 3][d - 2];
          v = Math.min(v, m + 1);
        }
        v < h && (h = v), p[d] = v;
      }
      if (h > t)
        return;
    }
    const u = y[o % 3][s];
    return u <= t ? u : void 0;
  }
}
function ns(e) {
  const n = e.length, t = new Array(n);
  for (let r = 0; r < n; ++r)
    t[r] = e.charCodeAt(r);
  return t;
}
function It(e) {
  if (e == null)
    return /* @__PURE__ */ Object.create(null);
  if (Object.getPrototypeOf(e) === null)
    return e;
  const n = /* @__PURE__ */ Object.create(null);
  for (const [t, r] of Object.entries(e))
    n[t] = r;
  return n;
}
function Fd(e) {
  return `"${e.replace(Vd, $d)}"`;
}
const Vd = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function $d(e) {
  return Gd[e.charCodeAt(0)];
}
const Gd = [
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
], qd = Object.freeze({});
function Wd(e, n, t = qc) {
  const r = /* @__PURE__ */ new Map();
  for (const m of Object.values(ve))
    r.set(m, Hd(n, m));
  let i, a = Array.isArray(e), o = [e], s = -1, y = [], u = e, c, l;
  const p = [], h = [];
  do {
    s++;
    const m = s === o.length, b = m && y.length !== 0;
    if (m) {
      if (c = h.length === 0 ? void 0 : p[p.length - 1], u = l, l = h.pop(), b)
        if (a) {
          u = u.slice();
          let _ = 0;
          for (const [T, P] of y) {
            const E = T - _;
            P === null ? (u.splice(E, 1), _++) : u[E] = P;
          }
        } else {
          u = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(u)
          );
          for (const [_, T] of y)
            u[_] = T;
        }
      s = i.index, o = i.keys, y = i.edits, a = i.inArray, i = i.prev;
    } else if (l) {
      if (c = a ? s : o[s], u = l[c], u == null)
        continue;
      p.push(c);
    }
    let O;
    if (!Array.isArray(u)) {
      var d, f;
      Zu(u) || Le(!1, `Invalid AST Node: ${Oe(u)}.`);
      const _ = m ? (d = r.get(u.kind)) === null || d === void 0 ? void 0 : d.leave : (f = r.get(u.kind)) === null || f === void 0 ? void 0 : f.enter;
      if (O = _ == null ? void 0 : _.call(n, u, c, l, p, h), O === qd)
        break;
      if (O === !1) {
        if (!m) {
          p.pop();
          continue;
        }
      } else if (O !== void 0 && (y.push([c, O]), !m))
        if (Zu(O))
          u = O;
        else {
          p.pop();
          continue;
        }
    }
    if (O === void 0 && b && y.push([c, u]), m)
      p.pop();
    else {
      var v;
      i = {
        inArray: a,
        index: s,
        keys: o,
        edits: y,
        prev: i
      }, a = Array.isArray(u), o = a ? u : (v = t[u.kind]) !== null && v !== void 0 ? v : [], s = -1, y = [], l && h.push(l), l = u;
    }
  } while (i !== void 0);
  return y.length !== 0 ? y[y.length - 1][1] : e;
}
function Hd(e, n) {
  const t = e[n];
  return typeof t == "object" ? t : typeof t == "function" ? {
    enter: t,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function Qt(e) {
  return Wd(e, Qd);
}
const zd = 80, Qd = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => L(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const n = ee("(", L(e.variableDefinitions, ", "), ")"), t = L(
        [
          e.operation,
          L([e.name, n]),
          L(e.directives, " ")
        ],
        " "
      );
      return (t === "query" ? "" : t + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: n, defaultValue: t, directives: r }) => e + ": " + n + ee(" = ", t) + ee(" ", L(r, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => St(e)
  },
  Field: {
    leave({ alias: e, name: n, arguments: t, directives: r, selectionSet: i }) {
      const a = ee("", e, ": ") + n;
      let o = a + ee("(", L(t, ", "), ")");
      return o.length > zd && (o = a + ee(`(
`, ai(L(t, `
`)), `
)`)), L([o, L(r, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: n }) => e + ": " + n
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: n }) => "..." + e + ee(" ", L(n, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: n, selectionSet: t }) => L(
      [
        "...",
        ee("on ", e),
        L(n, " "),
        t
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: n, variableDefinitions: t, directives: r, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${ee("(", L(t, ", "), ")")} on ${n} ${ee("", L(r, " "), " ")}` + i
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
    leave: ({ value: e, block: n }) => n ? Td(e) : Fd(e)
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
    leave: ({ values: e }) => "[" + L(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + L(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: n }) => e + ": " + n
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: n }) => "@" + e + ee("(", L(n, ", "), ")")
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
    leave: ({ description: e, directives: n, operationTypes: t }) => ee("", e, `
`) + L(["schema", L(n, " "), St(t)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: n }) => e + ": " + n
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: n, directives: t }) => ee("", e, `
`) + L(["scalar", n, L(t, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: n, interfaces: t, directives: r, fields: i }) => ee("", e, `
`) + L(
      [
        "type",
        n,
        ee("implements ", L(t, " & ")),
        L(r, " "),
        St(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: n, arguments: t, type: r, directives: i }) => ee("", e, `
`) + n + (rs(t) ? ee(`(
`, ai(L(t, `
`)), `
)`) : ee("(", L(t, ", "), ")")) + ": " + r + ee(" ", L(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: n, type: t, defaultValue: r, directives: i }) => ee("", e, `
`) + L(
      [n + ": " + t, ee("= ", r), L(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: n, interfaces: t, directives: r, fields: i }) => ee("", e, `
`) + L(
      [
        "interface",
        n,
        ee("implements ", L(t, " & ")),
        L(r, " "),
        St(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: n, directives: t, types: r }) => ee("", e, `
`) + L(
      ["union", n, L(t, " "), ee("= ", L(r, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: n, directives: t, values: r }) => ee("", e, `
`) + L(["enum", n, L(t, " "), St(r)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: n, directives: t }) => ee("", e, `
`) + L([n, L(t, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: n, directives: t, fields: r }) => ee("", e, `
`) + L(["input", n, L(t, " "), St(r)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: n, arguments: t, repeatable: r, locations: i }) => ee("", e, `
`) + "directive @" + n + (rs(t) ? ee(`(
`, ai(L(t, `
`)), `
)`) : ee("(", L(t, ", "), ")")) + (r ? " repeatable" : "") + " on " + L(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: n }) => L(
      ["extend schema", L(e, " "), St(n)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: n }) => L(["extend scalar", e, L(n, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: n, directives: t, fields: r }) => L(
      [
        "extend type",
        e,
        ee("implements ", L(n, " & ")),
        L(t, " "),
        St(r)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: n, directives: t, fields: r }) => L(
      [
        "extend interface",
        e,
        ee("implements ", L(n, " & ")),
        L(t, " "),
        St(r)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: n, types: t }) => L(
      [
        "extend union",
        e,
        L(n, " "),
        ee("= ", L(t, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: n, values: t }) => L(["extend enum", e, L(n, " "), St(t)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: n, fields: t }) => L(["extend input", e, L(n, " "), St(t)], " ")
  }
};
function L(e, n = "") {
  var t;
  return (t = e == null ? void 0 : e.filter((r) => r).join(n)) !== null && t !== void 0 ? t : "";
}
function St(e) {
  return ee(`{
`, ai(L(e, `
`)), `
}`);
}
function ee(e, n, t = "") {
  return n != null && n !== "" ? e + n + t : "";
}
function ai(e) {
  return ee("  ", e.replace(/\n/g, `
  `));
}
function rs(e) {
  var n;
  return (n = e == null ? void 0 : e.some((t) => t.includes(`
`))) !== null && n !== void 0 ? n : !1;
}
function Xa(e, n) {
  switch (e.kind) {
    case ve.NULL:
      return null;
    case ve.INT:
      return parseInt(e.value, 10);
    case ve.FLOAT:
      return parseFloat(e.value);
    case ve.STRING:
    case ve.ENUM:
    case ve.BOOLEAN:
      return e.value;
    case ve.LIST:
      return e.values.map(
        (t) => Xa(t, n)
      );
    case ve.OBJECT:
      return Ro(
        e.fields,
        (t) => t.name.value,
        (t) => Xa(t.value, n)
      );
    case ve.VARIABLE:
      return n == null ? void 0 : n[e.name.value];
  }
}
function wt(e) {
  if (e != null || Le(!1, "Must provide name."), typeof e == "string" || Le(!1, "Expected name to be a string."), e.length === 0)
    throw new ae("Expected name to be a non-empty string.");
  for (let n = 1; n < e.length; ++n)
    if (!Ed(e.charCodeAt(n)))
      throw new ae(
        `Names must only contain [_a-zA-Z0-9] but "${e}" does not.`
      );
  if (!Sd(e.charCodeAt(0)))
    throw new ae(
      `Names must start with [_a-zA-Z] but "${e}" does not.`
    );
  return e;
}
function Yd(e) {
  if (e === "true" || e === "false" || e === "null")
    throw new ae(`Enum values cannot be named: ${e}`);
  return wt(e);
}
function zc(e) {
  return Qc(e) || Kd(e) || Jd(e) || Xd(e) || Yc(e) || Kc(e) || Jc(e) || Vt(e);
}
function Qc(e) {
  return Jt(e, Qn);
}
function Kd(e) {
  return Jt(e, tp);
}
function Jd(e) {
  return Jt(e, np);
}
function Xd(e) {
  return Jt(e, rp);
}
function Yc(e) {
  return Jt(e, ap);
}
function Kc(e) {
  return Jt(e, up);
}
function Jc(e) {
  return Jt(e, xd);
}
function Vt(e) {
  return Jt(e, ki);
}
function Zd(e) {
  return Qc(e) || Yc(e);
}
class xd {
  constructor(n) {
    zc(n) || Le(!1, `Expected ${Oe(n)} to be a GraphQL type.`), this.ofType = n;
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
class ki {
  constructor(n) {
    ep(n) || Le(
      !1,
      `Expected ${Oe(n)} to be a GraphQL nullable type.`
    ), this.ofType = n;
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
function ep(e) {
  return zc(e) && !Vt(e);
}
function Xc(e) {
  return typeof e == "function" ? e() : e;
}
function Zc(e) {
  return typeof e == "function" ? e() : e;
}
class Qn {
  constructor(n) {
    var t, r, i, a;
    const o = (t = n.parseValue) !== null && t !== void 0 ? t : ts;
    this.name = wt(n.name), this.description = n.description, this.specifiedByURL = n.specifiedByURL, this.serialize = (r = n.serialize) !== null && r !== void 0 ? r : ts, this.parseValue = o, this.parseLiteral = (i = n.parseLiteral) !== null && i !== void 0 ? i : (s, y) => o(Xa(s, y)), this.extensions = It(n.extensions), this.astNode = n.astNode, this.extensionASTNodes = (a = n.extensionASTNodes) !== null && a !== void 0 ? a : [], n.specifiedByURL == null || typeof n.specifiedByURL == "string" || Le(
      !1,
      `${this.name} must provide "specifiedByURL" as a string, but got: ${Oe(n.specifiedByURL)}.`
    ), n.serialize == null || typeof n.serialize == "function" || Le(
      !1,
      `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
    ), n.parseLiteral && (typeof n.parseValue == "function" && typeof n.parseLiteral == "function" || Le(
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
class tp {
  constructor(n) {
    var t;
    this.name = wt(n.name), this.description = n.description, this.isTypeOf = n.isTypeOf, this.extensions = It(n.extensions), this.astNode = n.astNode, this.extensionASTNodes = (t = n.extensionASTNodes) !== null && t !== void 0 ? t : [], this._fields = () => el(n), this._interfaces = () => xc(n), n.isTypeOf == null || typeof n.isTypeOf == "function" || Le(
      !1,
      `${this.name} must provide "isTypeOf" as a function, but got: ${Oe(n.isTypeOf)}.`
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
      fields: nl(this.getFields()),
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
function xc(e) {
  var n;
  const t = Xc(
    (n = e.interfaces) !== null && n !== void 0 ? n : []
  );
  return Array.isArray(t) || Le(
    !1,
    `${e.name} interfaces must be an Array or a function which returns an Array.`
  ), t;
}
function el(e) {
  const n = Zc(e.fields);
  return Nn(n) || Le(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), Mi(n, (t, r) => {
    var i;
    Nn(t) || Le(
      !1,
      `${e.name}.${r} field config must be an object.`
    ), t.resolve == null || typeof t.resolve == "function" || Le(
      !1,
      `${e.name}.${r} field resolver must be a function if provided, but got: ${Oe(t.resolve)}.`
    );
    const a = (i = t.args) !== null && i !== void 0 ? i : {};
    return Nn(a) || Le(
      !1,
      `${e.name}.${r} args must be an object with argument names as keys.`
    ), {
      name: wt(r),
      description: t.description,
      type: t.type,
      args: tl(a),
      resolve: t.resolve,
      subscribe: t.subscribe,
      deprecationReason: t.deprecationReason,
      extensions: It(t.extensions),
      astNode: t.astNode
    };
  });
}
function tl(e) {
  return Object.entries(e).map(([n, t]) => ({
    name: wt(n),
    description: t.description,
    type: t.type,
    defaultValue: t.defaultValue,
    deprecationReason: t.deprecationReason,
    extensions: It(t.extensions),
    astNode: t.astNode
  }));
}
function Nn(e) {
  return mr(e) && !Array.isArray(e);
}
function nl(e) {
  return Mi(e, (n) => ({
    description: n.description,
    type: n.type,
    args: rl(n.args),
    resolve: n.resolve,
    subscribe: n.subscribe,
    deprecationReason: n.deprecationReason,
    extensions: n.extensions,
    astNode: n.astNode
  }));
}
function rl(e) {
  return Ro(
    e,
    (n) => n.name,
    (n) => ({
      description: n.description,
      type: n.type,
      defaultValue: n.defaultValue,
      deprecationReason: n.deprecationReason,
      extensions: n.extensions,
      astNode: n.astNode
    })
  );
}
class np {
  constructor(n) {
    var t;
    this.name = wt(n.name), this.description = n.description, this.resolveType = n.resolveType, this.extensions = It(n.extensions), this.astNode = n.astNode, this.extensionASTNodes = (t = n.extensionASTNodes) !== null && t !== void 0 ? t : [], this._fields = el.bind(void 0, n), this._interfaces = xc.bind(void 0, n), n.resolveType == null || typeof n.resolveType == "function" || Le(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${Oe(n.resolveType)}.`
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
      fields: nl(this.getFields()),
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
class rp {
  constructor(n) {
    var t;
    this.name = wt(n.name), this.description = n.description, this.resolveType = n.resolveType, this.extensions = It(n.extensions), this.astNode = n.astNode, this.extensionASTNodes = (t = n.extensionASTNodes) !== null && t !== void 0 ? t : [], this._types = ip.bind(void 0, n), n.resolveType == null || typeof n.resolveType == "function" || Le(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${Oe(n.resolveType)}.`
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
function ip(e) {
  const n = Xc(e.types);
  return Array.isArray(n) || Le(
    !1,
    `Must provide Array of types or a function which returns such an array for Union ${e.name}.`
  ), n;
}
class ap {
  /* <T> */
  constructor(n) {
    var t;
    this.name = wt(n.name), this.description = n.description, this.extensions = It(n.extensions), this.astNode = n.astNode, this.extensionASTNodes = (t = n.extensionASTNodes) !== null && t !== void 0 ? t : [], this._values = op(this.name, n.values), this._valueLookup = new Map(
      this._values.map((r) => [r.value, r])
    ), this._nameLookup = No(this._values, (r) => r.name);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLEnumType";
  }
  getValues() {
    return this._values;
  }
  getValue(n) {
    return this._nameLookup[n];
  }
  serialize(n) {
    const t = this._valueLookup.get(n);
    if (t === void 0)
      throw new ae(
        `Enum "${this.name}" cannot represent value: ${Oe(n)}`
      );
    return t.name;
  }
  parseValue(n) {
    if (typeof n != "string") {
      const r = Oe(n);
      throw new ae(
        `Enum "${this.name}" cannot represent non-string value: ${r}.` + qr(this, r)
      );
    }
    const t = this.getValue(n);
    if (t == null)
      throw new ae(
        `Value "${n}" does not exist in "${this.name}" enum.` + qr(this, n)
      );
    return t.value;
  }
  parseLiteral(n, t) {
    if (n.kind !== ve.ENUM) {
      const i = Qt(n);
      throw new ae(
        `Enum "${this.name}" cannot represent non-enum value: ${i}.` + qr(this, i),
        {
          nodes: n
        }
      );
    }
    const r = this.getValue(n.value);
    if (r == null) {
      const i = Qt(n);
      throw new ae(
        `Value "${i}" does not exist in "${this.name}" enum.` + qr(this, i),
        {
          nodes: n
        }
      );
    }
    return r.value;
  }
  toConfig() {
    const n = Ro(
      this.getValues(),
      (t) => t.name,
      (t) => ({
        description: t.description,
        value: t.value,
        deprecationReason: t.deprecationReason,
        extensions: t.extensions,
        astNode: t.astNode
      })
    );
    return {
      name: this.name,
      description: this.description,
      values: n,
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
function qr(e, n) {
  const t = e.getValues().map((i) => i.name), r = Ld(n, t);
  return kd("the enum value", r);
}
function op(e, n) {
  return Nn(n) || Le(
    !1,
    `${e} values must be an object with value names as keys.`
  ), Object.entries(n).map(([t, r]) => (Nn(r) || Le(
    !1,
    `${e}.${t} must refer to an object with a "value" key representing an internal value but got: ${Oe(r)}.`
  ), {
    name: Yd(t),
    description: r.description,
    value: r.value !== void 0 ? r.value : t,
    deprecationReason: r.deprecationReason,
    extensions: It(r.extensions),
    astNode: r.astNode
  }));
}
class up {
  constructor(n) {
    var t;
    this.name = wt(n.name), this.description = n.description, this.extensions = It(n.extensions), this.astNode = n.astNode, this.extensionASTNodes = (t = n.extensionASTNodes) !== null && t !== void 0 ? t : [], this._fields = sp.bind(void 0, n);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const n = Mi(this.getFields(), (t) => ({
      description: t.description,
      type: t.type,
      defaultValue: t.defaultValue,
      deprecationReason: t.deprecationReason,
      extensions: t.extensions,
      astNode: t.astNode
    }));
    return {
      name: this.name,
      description: this.description,
      fields: n,
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
function sp(e) {
  const n = Zc(e.fields);
  return Nn(n) || Le(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), Mi(n, (t, r) => (!("resolve" in t) || Le(
    !1,
    `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`
  ), {
    name: wt(r),
    description: t.description,
    type: t.type,
    defaultValue: t.defaultValue,
    deprecationReason: t.deprecationReason,
    extensions: It(t.extensions),
    astNode: t.astNode
  }));
}
const aa = 2147483647, oa = -2147483648, cp = new Qn({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(e) {
    const n = wr(e);
    if (typeof n == "boolean")
      return n ? 1 : 0;
    let t = n;
    if (typeof n == "string" && n !== "" && (t = Number(n)), typeof t != "number" || !Number.isInteger(t))
      throw new ae(
        `Int cannot represent non-integer value: ${Oe(n)}`
      );
    if (t > aa || t < oa)
      throw new ae(
        "Int cannot represent non 32-bit signed integer value: " + Oe(n)
      );
    return t;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isInteger(e))
      throw new ae(
        `Int cannot represent non-integer value: ${Oe(e)}`
      );
    if (e > aa || e < oa)
      throw new ae(
        `Int cannot represent non 32-bit signed integer value: ${e}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== ve.INT)
      throw new ae(
        `Int cannot represent non-integer value: ${Qt(e)}`,
        {
          nodes: e
        }
      );
    const n = parseInt(e.value, 10);
    if (n > aa || n < oa)
      throw new ae(
        `Int cannot represent non 32-bit signed integer value: ${e.value}`,
        {
          nodes: e
        }
      );
    return n;
  }
});
new Qn({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(e) {
    const n = wr(e);
    if (typeof n == "boolean")
      return n ? 1 : 0;
    let t = n;
    if (typeof n == "string" && n !== "" && (t = Number(n)), typeof t != "number" || !Number.isFinite(t))
      throw new ae(
        `Float cannot represent non numeric value: ${Oe(n)}`
      );
    return t;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isFinite(e))
      throw new ae(
        `Float cannot represent non numeric value: ${Oe(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== ve.FLOAT && e.kind !== ve.INT)
      throw new ae(
        `Float cannot represent non numeric value: ${Qt(e)}`,
        e
      );
    return parseFloat(e.value);
  }
});
const il = new Qn({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(e) {
    const n = wr(e);
    if (typeof n == "string")
      return n;
    if (typeof n == "boolean")
      return n ? "true" : "false";
    if (typeof n == "number" && Number.isFinite(n))
      return n.toString();
    throw new ae(
      `String cannot represent value: ${Oe(e)}`
    );
  },
  parseValue(e) {
    if (typeof e != "string")
      throw new ae(
        `String cannot represent a non string value: ${Oe(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== ve.STRING)
      throw new ae(
        `String cannot represent a non string value: ${Qt(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
}), Mo = new Qn({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(e) {
    const n = wr(e);
    if (typeof n == "boolean")
      return n;
    if (Number.isFinite(n))
      return n !== 0;
    throw new ae(
      `Boolean cannot represent a non boolean value: ${Oe(n)}`
    );
  },
  parseValue(e) {
    if (typeof e != "boolean")
      throw new ae(
        `Boolean cannot represent a non boolean value: ${Oe(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== ve.BOOLEAN)
      throw new ae(
        `Boolean cannot represent a non boolean value: ${Qt(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
});
new Qn({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(e) {
    const n = wr(e);
    if (typeof n == "string")
      return n;
    if (Number.isInteger(n))
      return String(n);
    throw new ae(
      `ID cannot represent value: ${Oe(e)}`
    );
  },
  parseValue(e) {
    if (typeof e == "string")
      return e;
    if (typeof e == "number" && Number.isInteger(e))
      return e.toString();
    throw new ae(`ID cannot represent value: ${Oe(e)}`);
  },
  parseLiteral(e) {
    if (e.kind !== ve.STRING && e.kind !== ve.INT)
      throw new ae(
        "ID cannot represent a non-string and non-integer value: " + Qt(e),
        {
          nodes: e
        }
      );
    return e.value;
  }
});
function wr(e) {
  if (mr(e)) {
    if (typeof e.valueOf == "function") {
      const n = e.valueOf();
      if (!mr(n))
        return n;
    }
    if (typeof e.toJSON == "function")
      return e.toJSON();
  }
  return e;
}
class Cr {
  constructor(n) {
    var t, r;
    this.name = wt(n.name), this.description = n.description, this.locations = n.locations, this.isRepeatable = (t = n.isRepeatable) !== null && t !== void 0 ? t : !1, this.extensions = It(n.extensions), this.astNode = n.astNode, Array.isArray(n.locations) || Le(!1, `@${n.name} locations must be an Array.`);
    const i = (r = n.args) !== null && r !== void 0 ? r : {};
    mr(i) && !Array.isArray(i) || Le(
      !1,
      `@${n.name} args must be an object with argument names as keys.`
    ), this.args = tl(i);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: rl(this.args),
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
new Cr({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    pt.FIELD,
    pt.FRAGMENT_SPREAD,
    pt.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new ki(Mo),
      description: "Included when true."
    }
  }
});
new Cr({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    pt.FIELD,
    pt.FRAGMENT_SPREAD,
    pt.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new ki(Mo),
      description: "Skipped when true."
    }
  }
});
const lp = "No longer supported";
new Cr({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    pt.FIELD_DEFINITION,
    pt.ARGUMENT_DEFINITION,
    pt.INPUT_FIELD_DEFINITION,
    pt.ENUM_VALUE
  ],
  args: {
    reason: {
      type: il,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: lp
    }
  }
});
new Cr({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [pt.SCALAR],
  args: {
    url: {
      type: new ki(il),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
});
function lr(e, n, t) {
  if (e) {
    if (e.kind === ve.VARIABLE) {
      const r = e.name.value;
      if (t == null || t[r] === void 0)
        return;
      const i = t[r];
      return i === null && Vt(n) ? void 0 : i;
    }
    if (Vt(n))
      return e.kind === ve.NULL ? void 0 : lr(e, n.ofType, t);
    if (e.kind === ve.NULL)
      return null;
    if (Jc(n)) {
      const r = n.ofType;
      if (e.kind === ve.LIST) {
        const a = [];
        for (const o of e.values)
          if (is(o, t)) {
            if (Vt(r))
              return;
            a.push(null);
          } else {
            const s = lr(o, r, t);
            if (s === void 0)
              return;
            a.push(s);
          }
        return a;
      }
      const i = lr(e, r, t);
      return i === void 0 ? void 0 : [i];
    }
    if (Kc(n)) {
      if (e.kind !== ve.OBJECT)
        return;
      const r = /* @__PURE__ */ Object.create(null), i = No(e.fields, (a) => a.name.value);
      for (const a of Object.values(n.getFields())) {
        const o = i[a.name];
        if (!o || is(o.value, t)) {
          if (a.defaultValue !== void 0)
            r[a.name] = a.defaultValue;
          else if (Vt(a.type))
            return;
          continue;
        }
        const s = lr(o.value, a.type, t);
        if (s === void 0)
          return;
        r[a.name] = s;
      }
      return r;
    }
    if (Zd(n)) {
      let r;
      try {
        r = n.parseLiteral(e, t);
      } catch {
        return;
      }
      return r === void 0 ? void 0 : r;
    }
    Vc(!1, "Unexpected input type: " + Oe(n));
  }
}
function is(e, n) {
  return e.kind === ve.VARIABLE && (n == null || n[e.name.value] === void 0);
}
function fp(e, n, t) {
  var r;
  const i = {}, a = (r = n.arguments) !== null && r !== void 0 ? r : [], o = No(a, (s) => s.name.value);
  for (const s of e.args) {
    const y = s.name, u = s.type, c = o[y];
    if (!c) {
      if (s.defaultValue !== void 0)
        i[y] = s.defaultValue;
      else if (Vt(u))
        throw new ae(
          `Argument "${y}" of required type "${Oe(u)}" was not provided.`,
          {
            nodes: n
          }
        );
      continue;
    }
    const l = c.value;
    let p = l.kind === ve.NULL;
    if (l.kind === ve.VARIABLE) {
      const d = l.name.value;
      if (t == null || !pp(t, d)) {
        if (s.defaultValue !== void 0)
          i[y] = s.defaultValue;
        else if (Vt(u))
          throw new ae(
            `Argument "${y}" of required type "${Oe(u)}" was provided the variable "$${d}" which was not provided a runtime value.`,
            {
              nodes: l
            }
          );
        continue;
      }
      p = t[d] == null;
    }
    if (p && Vt(u))
      throw new ae(
        `Argument "${y}" of non-null type "${Oe(u)}" must not be null.`,
        {
          nodes: l
        }
      );
    const h = lr(l, u, t);
    if (h === void 0)
      throw new ae(
        `Argument "${y}" has invalid value ${Qt(l)}.`,
        {
          nodes: l
        }
      );
    i[y] = h;
  }
  return i;
}
function dp(e, n, t) {
  var r;
  const i = (r = n.directives) === null || r === void 0 ? void 0 : r.find(
    (a) => a.name.value === e.name
  );
  if (i)
    return fp(e, i, t);
}
function pp(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
const hp = new Cr({
  name: "live",
  description: "Instruction for establishing a live connection that is updated once the underlying data changes.",
  locations: [pt.QUERY],
  args: {
    if: {
      type: Mo,
      defaultValue: !0,
      description: "Whether the query should be live or not."
    },
    throttle: {
      type: cp,
      description: 'Propose a desired throttle interval ot the server in order to receive updates to at most once per "throttle" milliseconds. The server must not accept this value.'
    }
  }
}), al = (e) => e == null, yp = (e) => {
  var n;
  if (e.kind !== "OperationDefinition" || e.operation !== "query")
    return null;
  const t = (n = e.directives) === null || n === void 0 ? void 0 : n.find((r) => r.name.value === "live");
  return al(t) ? null : t;
}, vp = (e, n) => {
  var t;
  const r = dp(hp, { directives: [e] }, n);
  return {
    isLive: (r == null ? void 0 : r.if) === !0,
    throttleValue: (t = r == null ? void 0 : r.throttle) !== null && t !== void 0 ? t : null
  };
}, mp = (e, n) => {
  const t = yp(e);
  return al(t) ? !1 : vp(t, n).isLive;
};
function bp(e) {
  const n = {
    left: e.left,
    delta: e.delta,
    children: void 0,
    name: void 0,
    nested: !1,
    stopped: !1
  };
  function t(r) {
    var i;
    const a = [
      gp,
      _p,
      Op,
      Ap,
      Pp
    ];
    for (const o of a)
      if (o(r), r.stopped) {
        r.stopped = !1;
        break;
      }
    if (r.children)
      for (const o of r.children)
        t(o), r.result = (i = r.result) !== null && i !== void 0 ? i : r.left, "result" in o ? r.result[o.name] = o.result : delete r.result[o.name];
  }
  return t(n), n.result;
}
function gp(e) {
  if (!(!e || !e.children) && !e.delta._t) {
    for (let n of e.children)
      Object.prototype.hasOwnProperty.call(e.left, n.name) && n.result === void 0 ? delete e.left[n.name] : e.left[n.name] !== n.result && (e.left[n.name] = n.result);
    e.result = e.left, e.stopped = !0;
  }
}
function _p(e) {
  if (!e || !e.children || e.delta._t !== "a")
    return;
  let n = e.children.length, t;
  for (let r = 0; r < n; r++)
    t = e.children[r], e.left[t.name] = t.result;
  e.result = e.left, e.stopped = !0;
}
function Op(e) {
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
function Ap(e) {
  if (e.nested && !e.delta._t) {
    for (let n in e.delta)
      e.children === void 0 && (e.children = []), e.children.push({
        left: e.left[n],
        delta: e.delta[n],
        name: n,
        stopped: !1
      });
    e.stopped = !0;
  }
}
const as = 3;
let os = {
  numerically(e, n) {
    return e - n;
  },
  numericallyBy(e) {
    return (n, t) => n[e] - t[e];
  }
};
function Pp(e) {
  if (!e.nested || e.delta._t !== "a")
    return;
  let n, t, r = e.delta, i = e.left, a = [], o = [], s = [];
  for (n in r)
    if (n !== "_t")
      if (n[0] === "_")
        if (r[n][2] === 0 || r[n][2] === as)
          a.push(parseInt(n.slice(1), 10));
        else
          throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${r[n][2]}`);
      else
        r[n].length === 1 ? o.push({
          index: parseInt(n, 10),
          value: r[n][0]
        }) : s.push({
          index: parseInt(n, 10),
          delta: r[n]
        });
  for (a = a.sort(os.numerically), n = a.length - 1; n >= 0; n--) {
    t = a[n];
    let c = r[`_${t}`], l = i.splice(t, 1)[0];
    c[2] === as && o.push({
      index: c[1],
      value: l
    });
  }
  o = o.sort(os.numericallyBy("index"));
  let y = o.length;
  for (n = 0; n < y; n++) {
    let c = o[n];
    i.splice(c.index, 0, c.value);
  }
  let u = s.length;
  if (u > 0)
    for (n = 0; n < u; n++) {
      let c = s[n];
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
const Sp = (e, n) => bp({
  left: e,
  delta: n
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Za = function(e, n) {
  return Za = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (t[i] = r[i]);
  }, Za(e, n);
};
function Ep(e, n) {
  Za(e, n);
  function t() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
function kn(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (l) {
        o(l);
      }
    }
    function y(c) {
      try {
        u(r.throw(c));
      } catch (l) {
        o(l);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}
function Yt(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(c) {
      return y([u, c]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = u;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(u);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Yn(e) {
  var n = typeof Symbol == "function" && Symbol.iterator, t = n && e[n], r = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function br(e) {
  return this instanceof br ? (this.v = e, this) : new br(e);
}
function Tp(e, n, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = t.apply(e, n || []), i, a = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(p) {
    r[p] && (i[p] = function(h) {
      return new Promise(function(d, f) {
        a.push([p, h, d, f]) > 1 || s(p, h);
      });
    });
  }
  function s(p, h) {
    try {
      y(r[p](h));
    } catch (d) {
      l(a[0][3], d);
    }
  }
  function y(p) {
    p.value instanceof br ? Promise.resolve(p.value.v).then(u, c) : l(a[0][2], p);
  }
  function u(p) {
    s("next", p);
  }
  function c(p) {
    s("throw", p);
  }
  function l(p, h) {
    p(h), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}
var ol = (
  /** @class */
  function(e) {
    Ep(n, e);
    function n(t) {
      var r = e.call(this, t) || this;
      return Object.defineProperty(r, "name", {
        value: "RepeaterOverflowError",
        enumerable: !1
      }), typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf(r, r.constructor.prototype) : r.__proto__ = r.constructor.prototype, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(r, r.constructor), r;
    }
    return n;
  }(Error)
);
(function() {
  function e(n) {
    if (n < 0)
      throw new RangeError("Capacity may not be less than 0");
    this._c = n, this._q = [];
  }
  return Object.defineProperty(e.prototype, "empty", {
    get: function() {
      return this._q.length === 0;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "full", {
    get: function() {
      return this._q.length >= this._c;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.add = function(n) {
    if (this.full)
      throw new Error("Buffer full");
    this._q.push(n);
  }, e.prototype.remove = function() {
    if (this.empty)
      throw new Error("Buffer empty");
    return this._q.shift();
  }, e;
})();
(function() {
  function e(n) {
    if (n < 1)
      throw new RangeError("Capacity may not be less than 1");
    this._c = n, this._q = [];
  }
  return Object.defineProperty(e.prototype, "empty", {
    get: function() {
      return this._q.length === 0;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "full", {
    get: function() {
      return !1;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.add = function(n) {
    for (; this._q.length >= this._c; )
      this._q.shift();
    this._q.push(n);
  }, e.prototype.remove = function() {
    if (this.empty)
      throw new Error("Buffer empty");
    return this._q.shift();
  }, e;
})();
(function() {
  function e(n) {
    if (n < 1)
      throw new RangeError("Capacity may not be less than 1");
    this._c = n, this._q = [];
  }
  return Object.defineProperty(e.prototype, "empty", {
    get: function() {
      return this._q.length === 0;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "full", {
    get: function() {
      return !1;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.add = function(n) {
    this._q.length < this._c && this._q.push(n);
  }, e.prototype.remove = function() {
    if (this.empty)
      throw new Error("Buffer empty");
    return this._q.shift();
  }, e;
})();
function xa(e) {
  e != null && typeof e.then == "function" && e.then(hi, hi);
}
var ua = 0, us = 1, ln = 2, di = 3, eo = 4, pi = 1024, hi = function() {
};
function Rn(e) {
  var n = e.err, t = Promise.resolve(e.execution).then(function(r) {
    if (n != null)
      throw n;
    return r;
  });
  return e.err = void 0, e.execution = t.then(function() {
  }, function() {
  }), e.pending === void 0 ? t : e.pending.then(function() {
    return t;
  });
}
function on(e, n) {
  var t = e.state >= di;
  return Promise.resolve(n).then(function(r) {
    return !t && e.state >= eo ? Rn(e).then(function(i) {
      return {
        value: i,
        done: !0
      };
    }) : { value: r, done: t };
  });
}
function ko(e, n) {
  var t, r;
  if (!(e.state >= ln))
    if (e.state = ln, e.onnext(), e.onstop(), e.err == null && (e.err = n), e.pushes.length === 0 && (typeof e.buffer > "u" || e.buffer.empty))
      pr(e);
    else
      try {
        for (var i = Yn(e.pushes), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          o.resolve();
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
}
function pr(e) {
  var n, t;
  if (!(e.state >= di)) {
    e.state < ln && ko(e), e.state = di, e.buffer = void 0;
    try {
      for (var r = Yn(e.nexts), i = r.next(); !i.done; i = r.next()) {
        var a = i.value, o = e.pending === void 0 ? Rn(e) : e.pending.then(function() {
          return Rn(e);
        });
        a.resolve(on(e, o));
      }
    } catch (s) {
      n = { error: s };
    } finally {
      try {
        i && !i.done && (t = r.return) && t.call(r);
      } finally {
        if (n)
          throw n.error;
      }
    }
    e.pushes = [], e.nexts = [];
  }
}
function ss(e) {
  e.state >= eo || (e.state < di && pr(e), e.state = eo);
}
function Ip(e, n) {
  if (xa(n), e.pushes.length >= pi)
    throw new ol("No more than " + pi + " pending calls to push are allowed on a single repeater.");
  if (e.state >= ln)
    return Promise.resolve(void 0);
  var t = e.pending === void 0 ? Promise.resolve(n) : e.pending.then(function() {
    return n;
  });
  t = t.catch(function(y) {
    e.state < ln && (e.err = y), ss(e);
  });
  var r;
  if (e.nexts.length) {
    var i = e.nexts.shift();
    i.resolve(on(e, t)), e.nexts.length ? r = Promise.resolve(e.nexts[0].value) : r = new Promise(function(y) {
      return e.onnext = y;
    });
  } else
    typeof e.buffer < "u" && !e.buffer.full ? (e.buffer.add(t), r = Promise.resolve(void 0)) : r = new Promise(function(y) {
      return e.pushes.push({ resolve: y, value: t });
    });
  var a = !0, o = {}, s = r.catch(function(y) {
    if (a)
      throw y;
  });
  return o.then = function(y, u) {
    return a = !1, Promise.prototype.then.call(r, y, u);
  }, o.catch = function(y) {
    return a = !1, Promise.prototype.catch.call(r, y);
  }, o.finally = r.finally.bind(r), e.pending = t.then(function() {
    return s;
  }).catch(function(y) {
    e.err = y, ss(e);
  }), o;
}
function wp(e) {
  var n = ko.bind(null, e), t = new Promise(function(r) {
    return e.onstop = r;
  });
  return n.then = t.then.bind(t), n.catch = t.catch.bind(t), n.finally = t.finally.bind(t), n;
}
function Cp(e) {
  if (!(e.state >= us)) {
    e.state = us;
    var n = Ip.bind(null, e), t = wp(e);
    e.execution = new Promise(function(r) {
      return r(e.executor(n, t));
    }), e.execution.catch(function() {
      return ko(e);
    });
  }
}
var Wr = /* @__PURE__ */ new WeakMap(), jr = (
  /** @class */
  function() {
    function e(n, t) {
      Wr.set(this, {
        executor: n,
        buffer: t,
        err: void 0,
        state: ua,
        pushes: [],
        nexts: [],
        pending: void 0,
        execution: void 0,
        onnext: hi,
        onstop: hi
      });
    }
    return e.prototype.next = function(n) {
      xa(n);
      var t = Wr.get(this);
      if (t === void 0)
        throw new Error("WeakMap error");
      if (t.nexts.length >= pi)
        throw new ol("No more than " + pi + " pending calls to next are allowed on a single repeater.");
      if (t.state <= ua && Cp(t), t.onnext(n), typeof t.buffer < "u" && !t.buffer.empty) {
        var r = on(t, t.buffer.remove());
        if (t.pushes.length) {
          var i = t.pushes.shift();
          t.buffer.add(i.value), t.onnext = i.resolve;
        }
        return r;
      } else if (t.pushes.length) {
        var a = t.pushes.shift();
        return t.onnext = a.resolve, on(t, a.value);
      } else if (t.state >= ln)
        return pr(t), on(t, Rn(t));
      return new Promise(function(o) {
        return t.nexts.push({ resolve: o, value: n });
      });
    }, e.prototype.return = function(n) {
      xa(n);
      var t = Wr.get(this);
      if (t === void 0)
        throw new Error("WeakMap error");
      return pr(t), t.execution = Promise.resolve(t.execution).then(function() {
        return n;
      }), on(t, Rn(t));
    }, e.prototype.throw = function(n) {
      var t = Wr.get(this);
      if (t === void 0)
        throw new Error("WeakMap error");
      return t.state <= ua || t.state >= ln || typeof t.buffer < "u" && !t.buffer.empty ? (pr(t), t.err == null && (t.err = n), on(t, Rn(t))) : this.next(Promise.reject(n));
    }, e.prototype[Symbol.asyncIterator] = function() {
      return this;
    }, e.race = jp, e.merge = Np, e.zip = Rp, e.latest = Mp, e;
  }()
);
function Di(e, n) {
  var t, r, i = [], a = function(u) {
    u != null && typeof u[Symbol.asyncIterator] == "function" ? i.push(u[Symbol.asyncIterator]()) : u != null && typeof u[Symbol.iterator] == "function" ? i.push(u[Symbol.iterator]()) : i.push(function() {
      return Tp(this, arguments, function() {
        return Yt(this, function(p) {
          switch (p.label) {
            case 0:
              return n.yieldValues ? [4, br(u)] : [3, 3];
            case 1:
              return [4, p.sent()];
            case 2:
              p.sent(), p.label = 3;
            case 3:
              return n.returnValues ? [4, br(u)] : [3, 5];
            case 4:
              return [2, p.sent()];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }());
  };
  try {
    for (var o = Yn(e), s = o.next(); !s.done; s = o.next()) {
      var y = s.value;
      a(y);
    }
  } catch (u) {
    t = { error: u };
  } finally {
    try {
      s && !s.done && (r = o.return) && r.call(o);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return i;
}
function jp(e) {
  var n = this, t = Di(e, { returnValues: !0 });
  return new jr(function(r, i) {
    return kn(n, void 0, void 0, function() {
      var a, o, s, y, u, c;
      return Yt(this, function(l) {
        switch (l.label) {
          case 0:
            if (!t.length)
              return i(), [
                2
                /*return*/
              ];
            o = !1, i.then(function() {
              a(), o = !0;
            }), l.label = 1;
          case 1:
            l.trys.push([1, , 5, 7]), y = void 0, u = 0, c = function() {
              var p, h, d, f, v, m;
              return Yt(this, function(b) {
                switch (b.label) {
                  case 0:
                    p = u;
                    try {
                      for (h = (v = void 0, Yn(t)), d = h.next(); !d.done; d = h.next())
                        f = d.value, Promise.resolve(f.next()).then(function(O) {
                          O.done ? (i(), s === void 0 && (s = O)) : u === p && (u++, a(O));
                        }, function(O) {
                          return i(O);
                        });
                    } catch (O) {
                      v = { error: O };
                    } finally {
                      try {
                        d && !d.done && (m = h.return) && m.call(h);
                      } finally {
                        if (v)
                          throw v.error;
                      }
                    }
                    return [4, new Promise(function(O) {
                      return a = O;
                    })];
                  case 1:
                    return y = b.sent(), y === void 0 ? [3, 3] : [4, r(y.value)];
                  case 2:
                    b.sent(), b.label = 3;
                  case 3:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            }, l.label = 2;
          case 2:
            return o ? [3, 4] : [5, c()];
          case 3:
            return l.sent(), [3, 2];
          case 4:
            return [2, s && s.value];
          case 5:
            return i(), [4, Promise.race(t.map(function(p) {
              return p.return && p.return();
            }))];
          case 6:
            return l.sent(), [
              7
              /*endfinally*/
            ];
          case 7:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  });
}
function Np(e) {
  var n = this, t = Di(e, { yieldValues: !0 });
  return new jr(function(r, i) {
    return kn(n, void 0, void 0, function() {
      var a, o, s, y = this;
      return Yt(this, function(u) {
        switch (u.label) {
          case 0:
            if (!t.length)
              return i(), [
                2
                /*return*/
              ];
            a = [], o = !1, i.then(function() {
              var c, l;
              o = !0;
              try {
                for (var p = Yn(a), h = p.next(); !h.done; h = p.next()) {
                  var d = h.value;
                  d();
                }
              } catch (f) {
                c = { error: f };
              } finally {
                try {
                  h && !h.done && (l = p.return) && l.call(p);
                } finally {
                  if (c)
                    throw c.error;
                }
              }
            }), u.label = 1;
          case 1:
            return u.trys.push([1, , 3, 4]), [4, Promise.all(t.map(function(c, l) {
              return kn(y, void 0, void 0, function() {
                var p, h;
                return Yt(this, function(d) {
                  switch (d.label) {
                    case 0:
                      d.trys.push([0, , 6, 9]), d.label = 1;
                    case 1:
                      return o ? [3, 5] : (Promise.resolve(c.next()).then(function(f) {
                        return a[l](f);
                      }, function(f) {
                        return i(f);
                      }), [4, new Promise(function(f) {
                        a[l] = f;
                      })]);
                    case 2:
                      return p = d.sent(), p === void 0 ? [3, 4] : p.done ? (s = p, [
                        2
                        /*return*/
                      ]) : [4, r(p.value)];
                    case 3:
                      d.sent(), d.label = 4;
                    case 4:
                      return [3, 1];
                    case 5:
                      return [3, 9];
                    case 6:
                      return h = c.return, h ? [4, c.return()] : [3, 8];
                    case 7:
                      h = d.sent(), d.label = 8;
                    case 8:
                      return [
                        7
                        /*endfinally*/
                      ];
                    case 9:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }))];
          case 2:
            return u.sent(), [2, s && s.value];
          case 3:
            return i(), [
              7
              /*endfinally*/
            ];
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  });
}
function Rp(e) {
  var n = this, t = Di(e, { returnValues: !0 });
  return new jr(function(r, i) {
    return kn(n, void 0, void 0, function() {
      var a, o, s, y;
      return Yt(this, function(u) {
        switch (u.label) {
          case 0:
            if (!t.length)
              return i(), [2, []];
            o = !1, i.then(function() {
              a(), o = !0;
            }), u.label = 1;
          case 1:
            u.trys.push([1, , 6, 8]), u.label = 2;
          case 2:
            return o ? [3, 5] : (Promise.all(t.map(function(c) {
              return c.next();
            })).then(function(c) {
              return a(c);
            }, function(c) {
              return i(c);
            }), [4, new Promise(function(c) {
              return a = c;
            })]);
          case 3:
            return s = u.sent(), s === void 0 ? [
              2
              /*return*/
            ] : (y = s.map(function(c) {
              return c.value;
            }), s.some(function(c) {
              return c.done;
            }) ? [2, y] : [4, r(y)]);
          case 4:
            return u.sent(), [3, 2];
          case 5:
            return [3, 8];
          case 6:
            return i(), [4, Promise.all(t.map(function(c) {
              return c.return && c.return();
            }))];
          case 7:
            return u.sent(), [
              7
              /*endfinally*/
            ];
          case 8:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  });
}
function Mp(e) {
  var n = this, t = Di(e, {
    yieldValues: !0,
    returnValues: !0
  });
  return new jr(function(r, i) {
    return kn(n, void 0, void 0, function() {
      var a, o, s, y, u, c = this;
      return Yt(this, function(l) {
        switch (l.label) {
          case 0:
            if (!t.length)
              return i(), [2, []];
            o = [], s = !1, i.then(function() {
              var p, h;
              a();
              try {
                for (var d = Yn(o), f = d.next(); !f.done; f = d.next()) {
                  var v = f.value;
                  v();
                }
              } catch (m) {
                p = { error: m };
              } finally {
                try {
                  f && !f.done && (h = d.return) && h.call(d);
                } finally {
                  if (p)
                    throw p.error;
                }
              }
              s = !0;
            }), l.label = 1;
          case 1:
            return l.trys.push([1, , 5, 7]), Promise.all(t.map(function(p) {
              return p.next();
            })).then(function(p) {
              return a(p);
            }, function(p) {
              return i(p);
            }), [4, new Promise(function(p) {
              return a = p;
            })];
          case 2:
            return y = l.sent(), y === void 0 ? [
              2
              /*return*/
            ] : (u = y.map(function(p) {
              return p.value;
            }), y.every(function(p) {
              return p.done;
            }) ? [2, u] : [4, r(u.slice())]);
          case 3:
            return l.sent(), [4, Promise.all(t.map(function(p, h) {
              return kn(c, void 0, void 0, function() {
                var d;
                return Yt(this, function(f) {
                  switch (f.label) {
                    case 0:
                      if (y[h].done)
                        return [2, y[h].value];
                      f.label = 1;
                    case 1:
                      return s ? [3, 4] : (Promise.resolve(p.next()).then(function(v) {
                        return o[h](v);
                      }, function(v) {
                        return i(v);
                      }), [4, new Promise(function(v) {
                        return o[h] = v;
                      })]);
                    case 2:
                      return d = f.sent(), d === void 0 ? [2, y[h].value] : d.done ? [2, d.value] : (u[h] = d.value, [4, r(u.slice())]);
                    case 3:
                      return f.sent(), [3, 1];
                    case 4:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }))];
          case 4:
            return [2, l.sent()];
          case 5:
            return i(), [4, Promise.all(t.map(function(p) {
              return p.return && p.return();
            }))];
          case 6:
            return l.sent(), [
              7
              /*endfinally*/
            ];
          case 7:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  });
}
const kp = (e) => (n) => new jr(async (t, r) => {
  const i = n[Symbol.asyncIterator]();
  r.then(() => {
    var y;
    return (y = i.return) === null || y === void 0 ? void 0 : y.call(i);
  });
  let a = null, o = 0, s;
  for (; (s = await i.next()).done === !1; ) {
    if ("revision" in s.value && s.value.revision) {
      const y = {};
      if (s.value.revision === 1) {
        if (!s.value.data)
          throw new Error("Missing data.");
        y.data = s.value.data, a = s.value.data, o = 1;
      } else {
        if (!a)
          throw new Error("No previousData available.");
        if (!s.value.patch)
          throw new Error("Missing patch.");
        if (o + 1 !== s.value.revision)
          throw new Error("Wrong revision received.");
        a = e(a, s.value.patch), y.data = { ...a }, o++;
      }
      s.value.extensions && (y.extensions = s.value.extensions), s.value.errors && (y.errors = s.value.errors), await t(y);
      continue;
    }
    await t(s.value);
  }
  r();
}), Dp = kp(Sp);
function Bp(e, n, t) {
  const r = async function* () {
    yield* e;
  }(), i = r.return.bind(r);
  if (n && (r.return = (...a) => (n(), i(...a))), t) {
    const a = r.throw.bind(r);
    r.throw = (o) => (t(o), a(o));
  }
  return r;
}
function cs() {
  const e = {};
  return e.promise = new Promise((n, t) => {
    e.resolve = n, e.reject = t;
  }), e;
}
function Lp() {
  let e = {
    type: "running"
    /* running */
  }, n = cs();
  const t = [];
  function r(o) {
    e.type === "running" && (t.push(o), n.resolve(), n = cs());
  }
  const i = async function* () {
    for (; ; )
      if (t.length > 0)
        yield t.shift();
      else {
        if (e.type === "error")
          throw e.error;
        if (e.type === "finished")
          return;
        await n.promise;
      }
  }(), a = Bp(i, () => {
    e.type === "running" && (e = {
      type: "finished"
      /* finished */
    }, n.resolve());
  }, (o) => {
    e.type === "running" && (e = {
      type: "error",
      error: o
    }, n.resolve());
  });
  return {
    pushValue: r,
    asyncIterableIterator: a
  };
}
const Up = (e) => {
  const { pushValue: n, asyncIterableIterator: t } = Lp(), r = e({
    next: (o) => {
      n(o);
    },
    complete: () => {
      t.return();
    },
    error: (o) => {
      t.throw(o);
    }
  }), i = t.return;
  let a;
  return t.return = () => (a === void 0 && (r(), a = i()), a), t;
};
function Fp(e, n) {
  return (async () => {
    try {
      for await (const r of e)
        n.next(r);
      n.complete();
    } catch (r) {
      n.error(r);
    }
  })(), () => {
    var r;
    (r = e.return) === null || r === void 0 || r.call(e);
  };
}
var Cn = {
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
class to extends Error {
  constructor(n, t, r, i, a, o, s) {
    super(n), this.name = "GraphQLError", this.message = n, a && (this.path = a), t && (this.nodes = Array.isArray(t) ? t : [t]), r && (this.source = r), i && (this.positions = i), o && (this.originalError = o);
    var y = s;
    if (!y && o) {
      var u = o.extensions;
      u && typeof u == "object" && (y = u);
    }
    this.extensions = y || {};
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
var Te, J;
function ze(e) {
  return new to(`Syntax Error: Unexpected token at ${J} in ${e}`);
}
function yt(e) {
  if (e.lastIndex = J, e.test(Te))
    return Te.slice(J, J = e.lastIndex);
}
var Hr = / +(?=[^\s])/y;
function Vp(e) {
  for (var n = e.split(`
`), t = "", r = 0, i = 0, a = n.length - 1, o = 0; o < n.length; o++)
    Hr.lastIndex = 0, Hr.test(n[o]) && (o && (!r || Hr.lastIndex < r) && (r = Hr.lastIndex), i = i || o, a = o);
  for (var s = i; s <= a; s++)
    s !== i && (t += `
`), t += n[s].slice(r).replace(/\\"""/g, '"""');
  return t;
}
function Z() {
  for (var e = 0 | Te.charCodeAt(J++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | Te.charCodeAt(J++))
    if (e === 35)
      for (; (e = Te.charCodeAt(J++)) !== 10 && e !== 13; )
        ;
  J--;
}
var ul = /[_A-Za-z]\w*/y;
function Mt() {
  var e;
  if (e = yt(ul))
    return {
      kind: "Name",
      value: e
    };
}
var $p = /(?:null|true|false)/y, sl = /\$[_A-Za-z]\w*/y, Gp = /-?\d+/y, qp = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Wp = /\\/g, Hp = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, zp = /"(?:"|[^\r\n]*?[^\\]")/y;
function yi(e) {
  var n, t;
  if (t = yt($p))
    n = t === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: t === "true"
    };
  else if (!e && (t = yt(sl)))
    n = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: t.slice(1)
      }
    };
  else if (t = yt(Gp)) {
    var r = t;
    (t = yt(qp)) ? n = {
      kind: "FloatValue",
      value: r + t
    } : n = {
      kind: "IntValue",
      value: r
    };
  } else if (t = yt(ul))
    n = {
      kind: "EnumValue",
      value: t
    };
  else if (t = yt(Hp))
    n = {
      kind: "StringValue",
      value: Vp(t.slice(3, -3)),
      block: !0
    };
  else if (t = yt(zp))
    n = {
      kind: "StringValue",
      value: Wp.test(t) ? JSON.parse(t) : t.slice(1, -1),
      block: !1
    };
  else if (n = function(a) {
    var o;
    if (Te.charCodeAt(J) === 91) {
      J++, Z();
      for (var s = []; o = yi(a); )
        s.push(o);
      if (Te.charCodeAt(J++) !== 93)
        throw ze("ListValue");
      return Z(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (Te.charCodeAt(J) === 123) {
      J++, Z();
      for (var o = [], s; s = Mt(); ) {
        if (Z(), Te.charCodeAt(J++) !== 58)
          throw ze("ObjectField");
        Z();
        var y = yi(a);
        if (!y)
          throw ze("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: y
        });
      }
      if (Te.charCodeAt(J++) !== 125)
        throw ze("ObjectValue");
      return Z(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return n;
  return Z(), n;
}
function cl(e) {
  var n = [];
  if (Z(), Te.charCodeAt(J) === 40) {
    J++, Z();
    for (var t; t = Mt(); ) {
      if (Z(), Te.charCodeAt(J++) !== 58)
        throw ze("Argument");
      Z();
      var r = yi(e);
      if (!r)
        throw ze("Argument");
      n.push({
        kind: "Argument",
        name: t,
        value: r
      });
    }
    if (!n.length || Te.charCodeAt(J++) !== 41)
      throw ze("Argument");
    Z();
  }
  return n;
}
function Dn(e) {
  var n = [];
  for (Z(); Te.charCodeAt(J) === 64; ) {
    J++;
    var t = Mt();
    if (!t)
      throw ze("Directive");
    Z(), n.push({
      kind: "Directive",
      name: t,
      arguments: cl(e)
    });
  }
  return n;
}
function Qp() {
  var e = Mt();
  if (e) {
    Z();
    var n;
    if (Te.charCodeAt(J) === 58) {
      if (J++, Z(), n = e, !(e = Mt()))
        throw ze("Field");
      Z();
    }
    return {
      kind: "Field",
      alias: n,
      name: e,
      arguments: cl(!1),
      directives: Dn(!1),
      selectionSet: Bi()
    };
  }
}
function ll() {
  var e;
  if (Z(), Te.charCodeAt(J) === 91) {
    J++, Z();
    var n = ll();
    if (!n || Te.charCodeAt(J++) !== 93)
      throw ze("ListType");
    e = {
      kind: "ListType",
      type: n
    };
  } else if (e = Mt())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw ze("NamedType");
  return Z(), Te.charCodeAt(J) === 33 ? (J++, Z(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Yp = /on/y;
function fl() {
  if (yt(Yp)) {
    Z();
    var e = Mt();
    if (!e)
      throw ze("NamedType");
    return Z(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Kp = /\.\.\./y;
function Jp() {
  if (yt(Kp)) {
    Z();
    var e = J, n;
    if ((n = Mt()) && n.value !== "on")
      return {
        kind: "FragmentSpread",
        name: n,
        directives: Dn(!1)
      };
    J = e;
    var t = fl(), r = Dn(!1), i = Bi();
    if (!i)
      throw ze("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: t,
      directives: r,
      selectionSet: i
    };
  }
}
function Bi() {
  var e;
  if (Z(), Te.charCodeAt(J) === 123) {
    J++, Z();
    for (var n = []; e = Jp() || Qp(); )
      n.push(e);
    if (!n.length || Te.charCodeAt(J++) !== 125)
      throw ze("SelectionSet");
    return Z(), {
      kind: "SelectionSet",
      selections: n
    };
  }
}
var Xp = /fragment/y;
function Zp() {
  if (yt(Xp)) {
    Z();
    var e = Mt();
    if (!e)
      throw ze("FragmentDefinition");
    Z();
    var n = fl();
    if (!n)
      throw ze("FragmentDefinition");
    var t = Dn(!1), r = Bi();
    if (!r)
      throw ze("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: n,
      directives: t,
      selectionSet: r
    };
  }
}
var xp = /(?:query|mutation|subscription)/y;
function eh() {
  var e, n, t = [], r = [];
  (e = yt(xp)) && (Z(), n = Mt(), t = function() {
    var o, s = [];
    if (Z(), Te.charCodeAt(J) === 40) {
      for (J++, Z(); o = yt(sl); ) {
        if (Z(), Te.charCodeAt(J++) !== 58)
          throw ze("VariableDefinition");
        var y = ll(), u = void 0;
        if (Te.charCodeAt(J) === 61 && (J++, Z(), !(u = yi(!0))))
          throw ze("VariableDefinition");
        Z(), s.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: o.slice(1)
            }
          },
          type: y,
          defaultValue: u,
          directives: Dn(!0)
        });
      }
      if (Te.charCodeAt(J++) !== 41)
        throw ze("VariableDefinition");
      Z();
    }
    return s;
  }(), r = Dn(!1));
  var i = Bi();
  if (i)
    return {
      kind: "OperationDefinition",
      operation: e || "query",
      name: n,
      variableDefinitions: t,
      directives: r,
      selectionSet: i
    };
}
function th(e, n) {
  return Te = typeof e.body == "string" ? e.body : e, J = 0, function() {
    var r;
    Z();
    for (var i = []; r = Zp() || eh(); )
      i.push(r);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function nh(e) {
  return JSON.stringify(e);
}
function rh(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var _t = (e) => !(!e || !e.length), it = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !_t(e.variableDefinitions) && !_t(e.directives))
      return it.SelectionSet(e.selectionSet);
    var n = e.operation;
    return e.name && (n += " " + e.name.value), _t(e.variableDefinitions) && (e.name || (n += " "), n += "(" + e.variableDefinitions.map(it.VariableDefinition).join(", ") + ")"), _t(e.directives) && (n += " " + e.directives.map(it.Directive).join(" ")), n + " " + it.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var n = it.Variable(e.variable) + ": " + Ot(e.type);
    return e.defaultValue && (n += " = " + Ot(e.defaultValue)), _t(e.directives) && (n += " " + e.directives.map(it.Directive).join(" ")), n;
  },
  Field(e) {
    var n = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (_t(e.arguments)) {
      var t = e.arguments.map(it.Argument), r = n + "(" + t.join(", ") + ")";
      n = r.length > 80 ? n + `(
  ` + t.join(`
`).replace(/\n/g, `
  `) + `
)` : r;
    }
    return _t(e.directives) && (n += " " + e.directives.map(it.Directive).join(" ")), e.selectionSet ? n + " " + it.SelectionSet(e.selectionSet) : n;
  },
  StringValue: (e) => e.block ? rh(e.value) : nh(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(Ot).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(it.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + Ot(e.value),
  Document: (e) => _t(e.definitions) ? e.definitions.map(Ot).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(Ot).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + Ot(e.value),
  FragmentSpread(e) {
    var n = "..." + e.name.value;
    return _t(e.directives) && (n += " " + e.directives.map(it.Directive).join(" ")), n;
  },
  InlineFragment(e) {
    var n = "...";
    return e.typeCondition && (n += " on " + e.typeCondition.name.value), _t(e.directives) && (n += " " + e.directives.map(it.Directive).join(" ")), n + " " + Ot(e.selectionSet);
  },
  FragmentDefinition(e) {
    var n = "fragment " + e.name.value;
    return n += " on " + e.typeCondition.name.value, _t(e.directives) && (n += " " + e.directives.map(it.Directive).join(" ")), n + " " + Ot(e.selectionSet);
  },
  Directive(e) {
    var n = "@" + e.name.value;
    return _t(e.arguments) && (n += "(" + e.arguments.map(it.Argument).join(", ") + ")"), n;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + Ot(e.type) + "]",
  NonNullType: (e) => Ot(e.type) + "!"
};
function Ot(e) {
  return it[e.kind] ? it[e.kind](e) : "";
}
var Do = () => {
}, bt = Do;
function Ct(e) {
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
var ih = (e) => e;
function rt(e) {
  return (n) => (t) => {
    var r = bt;
    n((i) => {
      i === 0 ? t(0) : i.tag === 0 ? (r = i[0], t(i)) : e(i[0]) ? t(i) : r(0);
    });
  };
}
function Mn(e) {
  return (n) => (t) => n((r) => {
    r === 0 || r.tag === 0 ? t(r) : t(Nr(e(r[0])));
  });
}
function gr(e) {
  return (n) => (t) => {
    var r = [], i = bt, a = !1, o = !1;
    n((s) => {
      o || (s === 0 ? (o = !0, r.length || t(0)) : s.tag === 0 ? i = s[0] : (a = !1, function(u) {
        var c = bt;
        u((l) => {
          if (l === 0) {
            if (r.length) {
              var p = r.indexOf(c);
              p > -1 && (r = r.slice()).splice(p, 1), r.length || (o ? t(0) : a || (a = !0, i(0)));
            }
          } else
            l.tag === 0 ? (r.push(c = l[0]), c(0)) : r.length && (t(l), c(0));
        });
      }(e(s[0])), a || (a = !0, i(0))));
    }), t(Ct((s) => {
      if (s === 1) {
        o || (o = !0, i(1));
        for (var y = 0, u = r, c = r.length; y < c; y++)
          u[y](1);
        r.length = 0;
      } else {
        !o && !a ? (a = !0, i(0)) : a = !1;
        for (var l = 0, p = r, h = r.length; l < h; l++)
          p[l](0);
      }
    }));
  };
}
function ah(e) {
  return gr(ih)(e);
}
function Bn(e) {
  return ah(sh(e));
}
function Bo(e) {
  return (n) => (t) => {
    var r = !1;
    n((i) => {
      if (!r)
        if (i === 0)
          r = !0, t(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          t(Ct((o) => {
            o === 1 ? (r = !0, a(1), e()) : a(o);
          }));
        } else
          t(i);
    });
  };
}
function Ln(e) {
  return (n) => (t) => {
    var r = !1;
    n((i) => {
      if (!r)
        if (i === 0)
          r = !0, t(0);
        else if (i.tag === 0) {
          var a = i[0];
          t(Ct((o) => {
            o === 1 && (r = !0), a(o);
          }));
        } else
          e(i[0]), t(i);
    });
  };
}
function ls(e) {
  return (n) => (t) => n((r) => {
    r === 0 ? t(0) : r.tag === 0 ? (t(r), e()) : t(r);
  });
}
function _r(e) {
  var n = [], t = bt, r = !1;
  return (i) => {
    n.push(i), n.length === 1 && e((a) => {
      if (a === 0) {
        for (var o = 0, s = n, y = n.length; o < y; o++)
          s[o](0);
        n.length = 0;
      } else if (a.tag === 0)
        t = a[0];
      else {
        r = !1;
        for (var u = 0, c = n, l = n.length; u < l; u++)
          c[u](a);
      }
    }), i(Ct((a) => {
      if (a === 1) {
        var o = n.indexOf(i);
        o > -1 && (n = n.slice()).splice(o, 1), n.length || t(1);
      } else
        r || (r = !0, t(0));
    }));
  };
}
function fs(e) {
  return (n) => (t) => {
    var r = bt, i = bt, a = !1, o = !1, s = !1, y = !1;
    n((u) => {
      y || (u === 0 ? (y = !0, s || t(0)) : u.tag === 0 ? r = u[0] : (s && (i(1), i = bt), a ? a = !1 : (a = !0, r(0)), function(l) {
        s = !0, l((p) => {
          s && (p === 0 ? (s = !1, y ? t(0) : a || (a = !0, r(0))) : p.tag === 0 ? (o = !1, (i = p[0])(0)) : (t(p), o ? o = !1 : i(0)));
        });
      }(e(u[0]))));
    }), t(Ct((u) => {
      u === 1 ? (y || (y = !0, r(1)), s && (s = !1, i(1))) : (!y && !a && (a = !0, r(0)), s && !o && (o = !0, i(0)));
    }));
  };
}
function dl(e) {
  return (n) => (t) => {
    var r = bt, i = !1, a = 0;
    n((o) => {
      i || (o === 0 ? (i = !0, t(0)) : o.tag === 0 ? e <= 0 ? (i = !0, t(0), o[0](1)) : r = o[0] : a++ < e ? (t(o), !i && a >= e && (i = !0, t(0), r(1))) : t(o));
    }), t(Ct((o) => {
      o === 1 && !i ? (i = !0, r(1)) : o === 0 && !i && a < e && r(0);
    }));
  };
}
function Lo(e) {
  return (n) => (t) => {
    var r = bt, i = bt, a = !1;
    n((o) => {
      a || (o === 0 ? (a = !0, i(1), t(0)) : o.tag === 0 ? (r = o[0], e((s) => {
        s === 0 || (s.tag === 0 ? (i = s[0])(0) : (a = !0, i(1), r(1), t(0)));
      })) : t(o));
    }), t(Ct((o) => {
      o === 1 && !a ? (a = !0, r(1), i(1)) : a || r(0);
    }));
  };
}
function pl(e, n) {
  return (t) => (r) => {
    var i = bt, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, r(0)) : o.tag === 0 ? (i = o[0], r(o)) : e(o[0]) ? r(o) : (a = !0, n && r(o), r(0), i(1)));
    });
  };
}
function oh(e) {
  return (n) => e()(n);
}
function hl(e) {
  return (n) => {
    var t = e[Symbol.asyncIterator](), r = !1, i = !1, a = !1, o;
    n(Ct(async (s) => {
      if (s === 1)
        r = !0, t.return && t.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !r; )
          if ((o = await t.next()).done)
            r = !0, t.return && await t.return(), n(0);
          else
            try {
              a = !1, n(Nr(o.value));
            } catch (y) {
              if (t.throw)
                (r = !!(await t.throw(y)).done) && n(0);
              else
                throw y;
            }
        i = !1;
      }
    }));
  };
}
function uh(e) {
  return e[Symbol.asyncIterator] ? hl(e) : (n) => {
    var t = e[Symbol.iterator](), r = !1, i = !1, a = !1, o;
    n(Ct((s) => {
      if (s === 1)
        r = !0, t.return && t.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !r; )
          if ((o = t.next()).done)
            r = !0, t.return && t.return(), n(0);
          else
            try {
              a = !1, n(Nr(o.value));
            } catch (y) {
              if (t.throw)
                (r = !!t.throw(y).done) && n(0);
              else
                throw y;
            }
        i = !1;
      }
    }));
  };
}
var sh = uh;
function hr(e) {
  return (n) => {
    var t = !1;
    n(Ct((r) => {
      r === 1 ? t = !0 : t || (t = !0, n(Nr(e)), n(0));
    }));
  };
}
function Uo(e) {
  return (n) => {
    var t = !1, r = e({
      next(i) {
        t || n(Nr(i));
      },
      complete() {
        t || (t = !0, n(0));
      }
    });
    n(Ct((i) => {
      i === 1 && !t && (t = !0, r());
    }));
  };
}
function ds() {
  var e, n;
  return {
    source: _r(Uo((t) => (e = t.next, n = t.complete, Do))),
    next(t) {
      e && e(t);
    },
    complete() {
      n && n();
    }
  };
}
function ps(e) {
  return Uo((n) => (e.then((t) => {
    Promise.resolve(t).then(() => {
      n.next(t), n.complete();
    });
  }), Do));
}
function fn(e) {
  return (n) => {
    var t = bt, r = !1;
    return n((i) => {
      i === 0 ? r = !0 : i.tag === 0 ? (t = i[0])(0) : r || (e(i[0]), t(0));
    }), {
      unsubscribe() {
        r || (r = !0, t(1));
      }
    };
  };
}
function ch(e) {
  fn((n) => {
  })(e);
}
function lh(e) {
  return new Promise((n) => {
    var t = bt, r;
    e((i) => {
      i === 0 ? Promise.resolve(r).then(n) : i.tag === 0 ? (t = i[0])(0) : (r = i[0], t(0));
    });
  });
}
var fh = (...e) => {
  for (var n = e[0], t = 1, r = e.length; t < r; t++)
    n = e[t](n);
  return n;
}, dh = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new to(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new to(e);
class Rr extends Error {
  constructor(n) {
    var t = (n.graphQLErrors || []).map(dh), r = ((i, a) => {
      var o = "";
      if (i)
        return `[Network] ${i.message}`;
      if (a)
        for (var s of a)
          o && (o += `
`), o += `[GraphQL] ${s.message}`;
      return o;
    })(n.networkError, t);
    super(r), this.name = "CombinedError", this.message = r, this.graphQLErrors = t, this.networkError = n.networkError, this.response = n.response;
  }
  toString() {
    return this.message;
  }
}
var no = (e, n) => {
  for (var t = 0 | (n || 5381), r = 0, i = 0 | e.length; r < i; r++)
    t = (t << 5) + t + e.charCodeAt(r);
  return t;
}, cn = /* @__PURE__ */ new Set(), hs = /* @__PURE__ */ new WeakMap(), Tn = (e) => {
  if (e === null || cn.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Tn(e.toJSON());
  if (Array.isArray(e)) {
    var n = "[";
    for (var t of e)
      n.length > 1 && (n += ","), n += Tn(t) || "null";
    return n += "]";
  } else if (mi !== Un && e instanceof mi || bi !== Un && e instanceof bi)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var i = hs.get(e) || Math.random().toString(36).slice(2);
    return hs.set(e, i), Tn({
      __key: i
    });
  }
  cn.add(e);
  var a = "{";
  for (var o of r) {
    var s = Tn(e[o]);
    s && (a.length > 1 && (a += ","), a += Tn(o) + ":" + s);
  }
  return cn.delete(e), a += "}";
}, ro = (e, n, t) => {
  if (!(t == null || typeof t != "object" || t.toJSON || cn.has(t)))
    if (Array.isArray(t))
      for (var r = 0, i = t.length; r < i; r++)
        ro(e, `${n}.${r}`, t[r]);
    else if (t instanceof mi || t instanceof bi)
      e.set(n, t);
    else {
      cn.add(t);
      for (var a of Object.keys(t))
        ro(e, `${n}.${a}`, t[a]);
    }
}, vi = (e) => (cn.clear(), Tn(e));
class Un {
}
var mi = typeof File < "u" ? File : Un, bi = typeof Blob < "u" ? Blob : Un, ph = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, hh = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, yh = (e, n) => n % 2 == 0 ? e.replace(hh, `
`) : e, ys = (e) => e.split(ph).map(yh).join("").trim(), vs = /* @__PURE__ */ new Map(), oi = /* @__PURE__ */ new Map(), Fo = (e) => {
  var n;
  return typeof e == "string" ? n = ys(e) : e.loc && oi.get(e.__key) === e ? n = e.loc.source.body : (n = vs.get(e) || ys(Ot(e)), vs.set(e, n)), typeof e != "string" && !e.loc && (e.loc = {
    start: 0,
    end: n.length,
    source: {
      body: n,
      name: "gql",
      locationOffset: {
        line: 1,
        column: 1
      }
    }
  }), n;
}, ms = (e) => {
  var n = no(Fo(e));
  if (e.definitions) {
    var t = vl(e);
    t && (n = no(`
# ${t}`, n));
  }
  return n;
}, yl = (e) => {
  var n, t;
  return typeof e == "string" ? (n = ms(e), t = oi.get(n) || th(e)) : (n = e.__key || ms(e), t = oi.get(n) || e), t.loc || Fo(t), t.__key = n, oi.set(n, t), t;
}, ui = (e, n, t) => {
  var r = n || {}, i = yl(e), a = vi(r), o = i.__key;
  return a !== "{}" && (o = no(a, o)), {
    key: o,
    query: i,
    variables: r,
    extensions: t
  };
}, vl = (e) => {
  for (var n of e.definitions)
    if (n.kind === Cn.OPERATION_DEFINITION)
      return n.name ? n.name.value : void 0;
}, vh = (e) => {
  for (var n of e.definitions)
    if (n.kind === Cn.OPERATION_DEFINITION)
      return n.operation;
}, io = (e, n, t) => {
  if (!("data" in n) && !("errors" in n))
    throw new Error("No Content");
  var r = e.kind === "subscription";
  return {
    operation: e,
    data: n.data,
    error: Array.isArray(n.errors) ? new Rr({
      graphQLErrors: n.errors,
      response: t
    }) : void 0,
    extensions: n.extensions ? {
      ...n.extensions
    } : void 0,
    hasNext: n.hasNext == null ? r : n.hasNext,
    stale: !1
  };
}, ao = (e, n) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var t of Object.keys(n))
      e[t] = ao(e[t], n[t]);
    return e;
  }
  return n;
}, oo = (e, n, t) => {
  var r = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!n.extensions, a = {
    ...e.extensions,
    ...n.extensions
  }, o = n.incremental;
  "path" in n && (o = [n]);
  var s = {
    data: e.data
  };
  if (o)
    for (var y of o) {
      Array.isArray(y.errors) && r.push(...y.errors), y.extensions && (Object.assign(a, y.extensions), i = !0);
      for (var u = "data", c = s, l = 0, p = y.path.length; l < p; u = y.path[l++])
        c = c[u] = Array.isArray(c[u]) ? [...c[u]] : {
          ...c[u]
        };
      if (y.items)
        for (var h = +u >= 0 ? u : 0, d = 0, f = y.items.length; d < f; d++)
          c[h + d] = ao(c[h + d], y.items[d]);
      else
        y.data !== void 0 && (c[u] = ao(c[u], y.data));
    }
  else
    s.data = n.data || e.data, r = n.errors || r;
  return {
    operation: e.operation,
    data: s.data,
    error: r.length ? new Rr({
      graphQLErrors: r,
      response: t
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: n.hasNext != null ? n.hasNext : e.hasNext,
    stale: !1
  };
}, ml = (e, n, t) => ({
  operation: e,
  data: void 0,
  error: new Rr({
    networkError: n,
    response: t
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function bl(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Fo(e.query),
    operationName: vl(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var mh = (e, n) => {
  var t = e.kind === "query" && e.context.preferGetMethod;
  if (!t || !n)
    return e.context.url;
  var r = new URL(e.context.url);
  for (var i in n) {
    var a = n[i];
    a && r.searchParams.set(i, typeof a == "object" ? vi(a) : a);
  }
  var o = r.toString();
  return o.length > 2047 && t !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, bh = (e, n) => {
  if (n && !(e.kind === "query" && e.context.preferGetMethod)) {
    var t = vi(n), r = ((s) => {
      var y = /* @__PURE__ */ new Map();
      return (mi !== Un || bi !== Un) && (cn.clear(), ro(y, "variables", s)), y;
    })(n.variables);
    if (r.size) {
      var i = new FormData();
      i.append("operations", t), i.append("map", vi({
        ...[...r.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of r.values())
        i.append("" + a++, o);
      return i;
    }
    return t;
  }
}, gh = (e, n) => {
  var t = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, r = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (r.headers)
    for (var i in r.headers)
      t[i.toLowerCase()] = r.headers[i];
  var a = bh(e, n);
  return typeof a == "string" && !t["content-type"] && (t["content-type"] = "application/json"), {
    ...r,
    method: a ? "POST" : "GET",
    body: a,
    headers: t
  };
}, _h = typeof TextDecoder < "u" ? new TextDecoder() : null, Oh = /boundary="?([^=";]+)"?/i, Ah = /data: ?([^\n]+)/, bs = (e) => e.constructor.name === "Buffer" ? e.toString() : _h.decode(e);
async function* gs(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var n of e.body)
      yield bs(n);
  else {
    var t = e.body.getReader(), r;
    try {
      for (; !(r = await t.read()).done; )
        yield bs(r.value);
    } finally {
      t.cancel();
    }
  }
}
async function* _s(e, n) {
  var t = "", r;
  for await (var i of e)
    for (t += i; (r = t.indexOf(n)) > -1; )
      yield t.slice(0, r), t = t.slice(r + n.length);
}
async function* Ph(e, n, t) {
  var r = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(n, t)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (c, l) {
        var p = c.match(Oh), h = "--" + (p ? p[1] : "-"), d = !0, f;
        for await (var v of _s(gs(l), `\r
` + h)) {
          if (d) {
            d = !1;
            var m = v.indexOf(h);
            if (m > -1)
              v = v.slice(m + h.length);
            else
              continue;
          }
          try {
            yield f = JSON.parse(v.slice(v.indexOf(`\r
\r
`) + 4));
          } catch (b) {
            if (!f)
              throw b;
          }
          if (f && f.hasNext === !1)
            break;
        }
        f && f.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o, a);
    else if (/text\/event-stream/i.test(o))
      s = async function* (c) {
        var l;
        for await (var p of _s(gs(c), `

`)) {
          var h = p.match(Ah);
          if (h) {
            var d = h[1];
            try {
              yield l = JSON.parse(d);
            } catch (f) {
              if (!l)
                throw f;
            }
            if (l && l.hasNext === !1)
              break;
          }
        }
        l && l.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(a);
    else if (!/text\//i.test(o))
      s = async function* (c) {
        yield JSON.parse(await c.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var y of s)
      i = i ? oo(i, y, a) : io(e, y, a), r = !1, yield i, r = !0;
    i || (yield i = io(e, {}, a));
  } catch (u) {
    if (!r)
      throw u;
    yield ml(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : u, a);
  }
}
function Sh(e, n, t) {
  var r;
  return typeof AbortController < "u" && (t.signal = (r = new AbortController()).signal), Bo(() => {
    r && r.abort();
  })(rt((i) => !!i)(hl(Ph(e, n, t))));
}
var uo = (e, n) => {
  if (Array.isArray(e))
    for (var t of e)
      uo(t, n);
  else if (typeof e == "object" && e !== null)
    for (var r in e)
      r === "__typename" && typeof e[r] == "string" ? n.add(e[r]) : uo(e[r], n);
  return n;
}, so = (e) => {
  var n = !1;
  if ("definitions" in e) {
    var t = [];
    for (var r of e.definitions) {
      var i = so(r);
      n = n || i !== r, t.push(i);
    }
    if (n)
      return {
        ...e,
        definitions: t
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === Cn.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === Cn.FIELD && s.name.value === "__typename" && !s.alias;
        var y = so(s);
        n = n || y !== s, a.push(y);
      }
      if (o || (n = !0, a.push({
        kind: Cn.FIELD,
        name: {
          kind: Cn.NAME,
          value: "__typename"
        }
      })), n)
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
}, Os = /* @__PURE__ */ new Map(), Eh = (e) => {
  var n = yl(e), t = Os.get(n.__key);
  return t || (Os.set(n.__key, t = so(n)), Object.defineProperty(t, "__key", {
    value: n.__key,
    enumerable: !1
  })), t;
}, co = (e, n) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => co(i));
  if (e && typeof e == "object" && (n || "__typename" in e)) {
    var t = {};
    for (var r in e)
      r === "__typename" ? Object.defineProperty(t, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : t[r] = co(e[r]);
    return t;
  } else
    return e;
};
function As(e) {
  var n = (t) => e(t);
  return n.toPromise = () => lh(dl(1)(rt((t) => !t.stale && !t.hasNext)(n))), n.then = (t, r) => n.toPromise().then(t, r), n.subscribe = (t) => fn(t)(n), n;
}
function Fn(e, n, t) {
  return {
    ...n,
    kind: e,
    context: n.context ? {
      ...n.context,
      ...t
    } : t || n.context
  };
}
var Ps = (e, n) => Fn(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...n
  }
}), Th = () => {
}, sa = ({ kind: e }) => e !== "mutation" && e !== "query", Ih = ({ forward: e, client: n, dispatchDebug: t }) => {
  var r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (s) => {
    var y = Fn(s.kind, s);
    return y.query = Eh(s.query), y;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || r.has(s.key));
  return (s) => {
    var y = Mn((c) => {
      var l = r.get(c.key);
      process.env.NODE_ENV !== "production" && t({
        operation: c,
        ...l ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var p = l;
      return process.env.NODE_ENV !== "production" && (p = {
        ...p,
        operation: process.env.NODE_ENV !== "production" ? Ps(c, {
          cacheOutcome: l ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (p.stale = !0, Ss(n, c)), p;
    })(rt((c) => !sa(c) && o(c))(s)), u = Ln((c) => {
      var { operation: l } = c;
      if (l) {
        var p = l.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (p = ((P) => [...uo(P, /* @__PURE__ */ new Set())])(c.data).concat(p)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var h = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && t({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${p}`,
            operation: l,
            data: {
              typenames: p,
              response: c
            },
            source: "cacheExchange"
          });
          for (var d = 0; d < p.length; d++) {
            var f = p[d], v = i.get(f);
            v || i.set(f, v = /* @__PURE__ */ new Set());
            for (var m of v.values())
              h.add(m);
            v.clear();
          }
          for (var b of h.values())
            r.has(b) && (l = r.get(b).operation, r.delete(b), Ss(n, l));
        } else if (l.kind === "query" && c.data) {
          r.set(l.key, c);
          for (var O = 0; O < p.length; O++) {
            var _ = p[O], T = i.get(_);
            T || i.set(_, T = /* @__PURE__ */ new Set()), T.add(l.key);
          }
        }
      }
    })(e(rt((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(Mn((c) => process.env.NODE_ENV !== "production" ? Ps(c, {
      cacheOutcome: "miss"
    }) : c)(Bn([Mn(a)(rt((c) => !sa(c) && !o(c))(s)), rt((c) => sa(c))(s)])))));
    return Bn([y, u]);
  };
}, Ss = (e, n) => e.reexecuteOperation(Fn(n.kind, n, {
  requestPolicy: "network-only"
})), ca = ({ forwardSubscription: e, enableAllOperations: n, isSubscriptionOperation: t }) => ({ client: r, forward: i }) => {
  var a = t || ((o) => o.kind === "subscription" || !!n && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = gr((u) => {
      var { key: c } = u, l = rt((p) => p.kind === "teardown" && p.key === c)(o);
      return Lo(l)(((p) => {
        var h = e(bl(p), p);
        return Uo(({ next: d, complete: f }) => {
          var v = !1, m, b;
          return Promise.resolve().then(() => {
            v || (m = h.subscribe({
              next(O) {
                d(b = b ? oo(b, O) : io(p, O));
              },
              error(O) {
                d(ml(p, O));
              },
              complete() {
                v || (v = !0, p.kind === "subscription" && r.reexecuteOperation(Fn("teardown", p, p.context)), b && b.hasNext && d(oo(b, {
                  hasNext: !1
                })), f());
              }
            }));
          }), () => {
            v = !0, m && m.unsubscribe();
          };
        });
      })(u));
    })(rt((u) => u.kind !== "teardown" && a(u))(o)), y = i(rt((u) => u.kind === "teardown" || !a(u))(o));
    return Bn([s, y]);
  };
}, wh = ({ forward: e, dispatchDebug: n }) => (t) => {
  var r = gr((a) => {
    var o = bl(a), s = mh(a, o), y = gh(a, o);
    process.env.NODE_ENV !== "production" && n({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: a,
      data: {
        url: s,
        fetchOptions: y
      },
      source: "fetchExchange"
    });
    var u = Lo(rt((c) => c.kind === "teardown" && c.key === a.key)(t))(Sh(a, s, y));
    return process.env.NODE_ENV !== "production" ? Ln((c) => {
      var l = c.data ? void 0 : c.error;
      process.env.NODE_ENV !== "production" && n({
        type: l ? "fetchError" : "fetchSuccess",
        message: `A ${l ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: s,
          fetchOptions: y,
          value: l || c
        },
        source: "fetchExchange"
      });
    })(u) : u;
  })(rt((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(t)), i = e(rt((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(t));
  return Bn([r, i]);
}, Ch = (e) => ({ client: n, forward: t, dispatchDebug: r }) => e.reduceRight((i, a) => {
  var o = !1;
  return a({
    client: n,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return _r(i(_r(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && r({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, t), gl = ({ onOperation: e, onResult: n, onError: t }) => ({ forward: r }) => (i) => gr((a) => {
  t && a.error && t(a.error, a.operation);
  var o = n && n(a) || a;
  return "then" in o ? ps(o) : hr(o);
})(r(gr((a) => {
  var o = e && e(a) || a;
  return "then" in o ? ps(o) : hr(o);
})(i))), jh = ({ dispatchDebug: e }) => (n) => (process.env.NODE_ENV !== "production" && (n = Ln((t) => {
  if (t.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var r = `No exchange has handled operations of kind "${t.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: r,
      operation: t,
      source: "fallbackExchange"
    }), console.warn(r);
  }
})(n)), rt((t) => !1)(n)), Es = function e(n) {
  if (process.env.NODE_ENV !== "production" && !n.url)
    throw new Error("You are creating an urql-client without a url.");
  var t = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: n.url,
    fetchSubscriptions: n.fetchSubscriptions,
    fetchOptions: n.fetchOptions,
    fetch: n.fetch,
    preferGetMethod: !!n.preferGetMethod,
    requestPolicy: n.requestPolicy || "cache-first"
  }, y = ds();
  function u(_) {
    (_.kind === "mutation" || _.kind === "teardown" || !a.has(_.key)) && (_.kind === "teardown" ? a.delete(_.key) : _.kind !== "mutation" && a.add(_.key), y.next(_));
  }
  var c = !1;
  function l(_) {
    if (_ && u(_), !c) {
      for (c = !0; c && (_ = o.shift()); )
        u(_);
      c = !1;
    }
  }
  var p = (_) => {
    var T = Lo(rt((P) => P.kind === "teardown" && P.key === _.key)(y.source))(rt((P) => P.operation.kind === _.kind && P.operation.key === _.key && (!P.operation.context._instance || P.operation.context._instance === _.context._instance))(O));
    return _.kind !== "query" ? T = pl((P) => !!P.hasNext, !0)(T) : T = fs((P) => {
      var E = hr(P);
      return P.stale || P.hasNext ? E : Bn([E, Mn(() => (P.stale = !0, P))(dl(1)(rt((S) => S.key === _.key)(y.source)))]);
    })(T), _.kind !== "mutation" ? T = Bo(() => {
      a.delete(_.key), r.delete(_.key), i.delete(_.key), c = !1;
      for (var P = o.length - 1; P >= 0; P--)
        o[P].key === _.key && o.splice(P, 1);
      u(Fn("teardown", _, _.context));
    })(Ln((P) => {
      if (P.stale) {
        for (var E of o)
          if (E.key === P.operation.key) {
            a.delete(E.key);
            break;
          }
      } else
        P.hasNext || a.delete(_.key);
      r.set(_.key, P);
    })(T)) : T = ls(() => {
      u(_);
    })(T), n.maskTypename && (T = Mn((P) => ({
      ...P,
      data: co(P.data, !0)
    }))(T)), _r(T);
  }, h = this instanceof e ? this : Object.create(e.prototype), d = Object.assign(h, {
    suspense: !!n.suspense,
    operations$: y.source,
    reexecuteOperation(_) {
      _.kind === "teardown" ? l(_) : (_.kind === "mutation" || i.has(_.key)) && (o.push(_), Promise.resolve().then(l));
    },
    createRequestOperation(_, T, P) {
      P || (P = {});
      var E;
      if (process.env.NODE_ENV !== "production" && _ !== "teardown" && (E = vh(T.query)) !== _)
        throw new Error(`Expected operation of type "${_}" but found "${E}"`);
      return Fn(_, T, {
        _instance: _ === "mutation" ? t = t + 1 | 0 : void 0,
        ...s,
        ...P,
        requestPolicy: P.requestPolicy || s.requestPolicy,
        suspense: P.suspense || P.suspense !== !1 && d.suspense
      });
    },
    executeRequestOperation(_) {
      return _.kind === "mutation" ? As(p(_)) : As(oh(() => {
        var T = i.get(_.key);
        T || i.set(_.key, T = p(_)), T = ls(() => {
          l(_);
        })(T);
        var P = r.get(_.key);
        return _.kind === "query" && P && (P.stale || P.hasNext) ? fs(hr)(Bn([T, rt((E) => E === r.get(_.key))(hr(P))])) : T;
      }));
    },
    executeQuery(_, T) {
      var P = d.createRequestOperation("query", _, T);
      return d.executeRequestOperation(P);
    },
    executeSubscription(_, T) {
      var P = d.createRequestOperation("subscription", _, T);
      return d.executeRequestOperation(P);
    },
    executeMutation(_, T) {
      var P = d.createRequestOperation("mutation", _, T);
      return d.executeRequestOperation(P);
    },
    readQuery(_, T, P) {
      var E = null;
      return fn((S) => {
        E = S;
      })(d.query(_, T, P)).unsubscribe(), E;
    },
    query: (_, T, P) => d.executeQuery(ui(_, T), P),
    subscription: (_, T, P) => d.executeSubscription(ui(_, T), P),
    mutation: (_, T, P) => d.executeMutation(ui(_, T), P)
  }), f = Th;
  if (process.env.NODE_ENV !== "production") {
    var { next: v, source: m } = ds();
    d.subscribeToDebugTarget = (_) => fn(_)(m), f = v;
  }
  var b = Ch(n.exchanges), O = _r(b({
    client: d,
    dispatchDebug: f,
    forward: jh({
      dispatchDebug: f
    })
  })(y.source));
  return ch(O), d;
};
function lt(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function an(e) {
  return lt(e) === "object";
}
function Nh(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((n) => "message" in n);
}
function Ts(e, n) {
  return e.length < 124 ? e : n;
}
const Rh = "graphql-transport-ws";
var ct;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(ct || (ct = {}));
var Ge;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(Ge || (Ge = {}));
function _l(e) {
  if (!an(e))
    throw new Error(`Message is expected to be an object, but got ${lt(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${lt(e.type)}`);
  switch (e.type) {
    case Ge.ConnectionInit:
    case Ge.ConnectionAck:
    case Ge.Ping:
    case Ge.Pong: {
      if (e.payload != null && !an(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case Ge.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${lt(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!an(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${lt(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${lt(e.payload.query)}`);
      if (e.payload.variables != null && !an(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${lt(e.payload.variables)}`);
      if (e.payload.operationName != null && lt(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${lt(e.payload.operationName)}`);
      if (e.payload.extensions != null && !an(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${lt(e.payload.extensions)}`);
      break;
    }
    case Ge.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${lt(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!an(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${lt(e.payload)}`);
      break;
    }
    case Ge.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${lt(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Nh(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case Ge.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${lt(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Mh(e, n) {
  return _l(typeof e == "string" ? JSON.parse(e, n) : e);
}
function ir(e, n) {
  return _l(e), JSON.stringify(e, n);
}
function kh(e) {
  const {
    url: n,
    connectionParams: t,
    lazy: r = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: s,
    connectionAckWaitTimeout: y = 0,
    retryAttempts: u = 5,
    retryWait: c = async function($) {
      let H = 1e3;
      for (let F = 0; F < $; F++)
        H *= 2;
      await new Promise((F) => setTimeout(F, H + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: l = zr,
    isFatalConnectionProblem: p,
    on: h,
    webSocketImpl: d,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: f = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, ($) => {
        const H = Math.random() * 16 | 0;
        return ($ == "x" ? H : H & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: v,
    jsonMessageReviver: m
  } = e;
  let b;
  if (d) {
    if (!Bh(d))
      throw new Error("Invalid WebSocket implementation provided");
    b = d;
  } else
    typeof WebSocket < "u" ? b = WebSocket : typeof global < "u" ? b = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (b = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!b)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const O = b, _ = (() => {
    const D = (() => {
      const H = {};
      return {
        on(F, X) {
          return H[F] = X, () => {
            delete H[F];
          };
        },
        emit(F) {
          var X;
          "id" in F && ((X = H[F.id]) === null || X === void 0 || X.call(H, F));
        }
      };
    })(), $ = {
      connecting: h != null && h.connecting ? [h.connecting] : [],
      opened: h != null && h.opened ? [h.opened] : [],
      connected: h != null && h.connected ? [h.connected] : [],
      ping: h != null && h.ping ? [h.ping] : [],
      pong: h != null && h.pong ? [h.pong] : [],
      message: h != null && h.message ? [D.emit, h.message] : [D.emit],
      closed: h != null && h.closed ? [h.closed] : [],
      error: h != null && h.error ? [h.error] : []
    };
    return {
      onMessage: D.on,
      on(H, F) {
        const X = $[H];
        return X.push(F), () => {
          X.splice(X.indexOf(F), 1);
        };
      },
      emit(H, ...F) {
        for (const X of [...$[H]])
          X(...F);
      }
    };
  })();
  function T(D) {
    const $ = [
      // errors are fatal and more critical than close events, throw them first
      _.on("error", (H) => {
        $.forEach((F) => F()), D(H);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      _.on("closed", (H) => {
        $.forEach((F) => F()), D(H);
      })
    ];
  }
  let P, E = 0, S, I = !1, w = 0, j = !1;
  async function B() {
    clearTimeout(S);
    const [D, $] = await (P ?? (P = new Promise((X, me) => (async () => {
      if (I) {
        if (await c(w), !E)
          return P = void 0, me({ code: 1e3, reason: "All Subscriptions Gone" });
        w++;
      }
      _.emit("connecting");
      const z = new O(typeof n == "function" ? await n() : n, Rh);
      let Ie, Q;
      function re() {
        isFinite(o) && o > 0 && (clearTimeout(Q), Q = setTimeout(() => {
          z.readyState === O.OPEN && (z.send(ir({ type: Ge.Ping })), _.emit("ping", !1, void 0));
        }, o));
      }
      T((ce) => {
        P = void 0, clearTimeout(Ie), clearTimeout(Q), me(ce), zr(ce) && ce.code === 4499 && (z.close(4499, "Terminated"), z.onerror = null, z.onclose = null);
      }), z.onerror = (ce) => _.emit("error", ce), z.onclose = (ce) => _.emit("closed", ce), z.onopen = async () => {
        try {
          _.emit("opened", z);
          const ce = typeof t == "function" ? await t() : t;
          if (z.readyState !== O.OPEN)
            return;
          z.send(ir(ce ? {
            type: Ge.ConnectionInit,
            payload: ce
          } : {
            type: Ge.ConnectionInit
            // payload is completely absent if not provided
          }, v)), isFinite(y) && y > 0 && (Ie = setTimeout(() => {
            z.close(ct.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, y)), re();
        } catch (ce) {
          _.emit("error", ce), z.close(ct.InternalClientError, Ts(ce instanceof Error ? ce.message : new Error(ce).message, "Internal client error"));
        }
      };
      let be = !1;
      z.onmessage = ({ data: ce }) => {
        try {
          const K = Mh(ce, m);
          if (_.emit("message", K), K.type === "ping" || K.type === "pong") {
            _.emit(K.type, !0, K.payload), K.type === "pong" ? re() : s || (z.send(ir(K.payload ? {
              type: Ge.Pong,
              payload: K.payload
            } : {
              type: Ge.Pong
              // payload is completely absent if not provided
            })), _.emit("pong", !1, K.payload));
            return;
          }
          if (be)
            return;
          if (K.type !== Ge.ConnectionAck)
            throw new Error(`First message cannot be of type ${K.type}`);
          clearTimeout(Ie), be = !0, _.emit("connected", z, K.payload), I = !1, w = 0, X([
            z,
            new Promise((Qe, je) => T(je))
          ]);
        } catch (K) {
          z.onmessage = null, _.emit("error", K), z.close(ct.BadResponse, Ts(K instanceof Error ? K.message : new Error(K).message, "Bad response"));
        }
      };
    })())));
    D.readyState === O.CLOSING && await $;
    let H = () => {
    };
    const F = new Promise((X) => H = X);
    return [
      D,
      H,
      Promise.race([
        // wait for
        F.then(() => {
          if (!E) {
            const X = () => D.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? S = setTimeout(() => {
              D.readyState === O.OPEN && X();
            }, a) : X();
          }
        }),
        // or
        $
      ])
    ];
  }
  function U(D) {
    if (zr(D) && (Dh(D.code) || [
      ct.InternalServerError,
      ct.InternalClientError,
      ct.BadRequest,
      ct.BadResponse,
      ct.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      ct.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      ct.SubscriberAlreadyExists,
      ct.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(D.code)))
      throw D;
    if (j)
      return !1;
    if (zr(D) && D.code === 1e3)
      return E > 0;
    if (!u || w >= u || !l(D) || p != null && p(D))
      throw D;
    return I = !0;
  }
  return r || (async () => {
    for (E++; ; )
      try {
        const [, , D] = await B();
        await D;
      } catch (D) {
        try {
          if (!U(D))
            return;
        } catch ($) {
          return i == null ? void 0 : i($);
        }
      }
  })(), {
    on: _.on,
    subscribe(D, $) {
      const H = f(D);
      let F = !1, X = !1, me = () => {
        E--, F = !0;
      };
      return (async () => {
        for (E++; ; )
          try {
            const [z, Ie, Q] = await B();
            if (F)
              return Ie();
            const re = _.onMessage(H, (be) => {
              switch (be.type) {
                case Ge.Next: {
                  $.next(be.payload);
                  return;
                }
                case Ge.Error: {
                  X = !0, F = !0, $.error(be.payload), me();
                  return;
                }
                case Ge.Complete: {
                  F = !0, me();
                  return;
                }
              }
            });
            z.send(ir({
              id: H,
              type: Ge.Subscribe,
              payload: D
            }, v)), me = () => {
              !F && z.readyState === O.OPEN && z.send(ir({
                id: H,
                type: Ge.Complete
              }, v)), E--, F = !0, Ie();
            }, await Q.finally(re);
            return;
          } catch (z) {
            if (!U(z))
              return;
          }
      })().then(() => {
        X || $.complete();
      }).catch((z) => {
        $.error(z);
      }), () => {
        F || me();
      };
    },
    async dispose() {
      if (j = !0, P) {
        const [D] = await P;
        D.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      P && _.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function zr(e) {
  return an(e) && "code" in e && "reason" in e;
}
function Dh(e) {
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
function Bh(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var In = null;
typeof WebSocket < "u" ? In = WebSocket : typeof MozWebSocket < "u" ? In = MozWebSocket : typeof global < "u" ? In = global.WebSocket || global.MozWebSocket : typeof window < "u" ? In = window.WebSocket || window.MozWebSocket : typeof self < "u" && (In = self.WebSocket || self.MozWebSocket);
const Lh = In;
function dt(e) {
  if (typeof e != "object")
    return e;
  var n, t, r = Object.prototype.toString.call(e);
  if (r === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      t = new e.constructor();
      for (n in e)
        e.hasOwnProperty(n) && t[n] !== e[n] && (t[n] = dt(e[n]));
    } else {
      t = {};
      for (n in e)
        n === "__proto__" ? Object.defineProperty(t, n, {
          value: dt(e[n]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : t[n] = dt(e[n]);
    }
    return t;
  }
  if (r === "[object Array]") {
    for (n = e.length, t = Array(n); n--; )
      t[n] = dt(e[n]);
    return t;
  }
  return r === "[object Set]" ? (t = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    t.add(dt(i));
  }), t) : r === "[object Map]" ? (t = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    t.set(dt(a), dt(i));
  }), t) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (t = new RegExp(e.source, e.flags), t.lastIndex = e.lastIndex, t) : r === "[object DataView]" ? new e.constructor(dt(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var st;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(st || (st = {}));
class Uh {
  constructor(n) {
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
    }), this.__gadget.instantiatedFields = dt(n), this.__gadget.persistedFields = dt(n), Object.assign(this.__gadget.fields, n), !n || Object.keys(n).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((r) => this.__gadget.fieldKeysTracker[r] = !0));
    const t = {
      get: (r, i) => {
        if (i in this)
          return this[i];
        if (i in r)
          return r[i];
      },
      set: (r, i, a) => (this.trackKey(i), r[i.toString()] = a, !0)
    };
    return new Proxy(this.__gadget.fields, t);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(n) {
    const t = n.toString();
    this.__gadget.fieldKeysTracker[t] || (this.__gadget.fieldKeysTracker[t] = !0, this.__gadget.fieldKeys.push(t));
  }
  /** Returns true if even a single field has changed */
  hasChanges(n = st.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const t = n == st.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((r) => !Qr(t[r], this.__gadget.fields[r]));
  }
  /** Checks if the original constructor data was empty or not */
  isEmpty() {
    return this.empty;
  }
  /** Returns the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  getField(n) {
    return this.__gadget.fields[n];
  }
  /** Sets the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  setField(n, t) {
    return this.trackKey(n), this.__gadget.fields[n] = t;
  }
  changes(n, t = st.SinceLoaded) {
    const i = (typeof n == "string" ? t : n || t) == st.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (n && typeof n == "string") {
      const a = i[n], o = this.__gadget.fields[n], s = !Qr(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const s = this.__gadget.fieldKeys[o];
        Qr(i[s], this.__gadget.fields[s]) || (a[s] = { current: this.__gadget.fields[s], previous: i[s] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(n = st.SinceLoaded) {
    const t = n == st.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, r = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      Qr(t[a], this.__gadget.fields[a]) || (r[a] = this.__gadget.fields[a]);
    }
    return r;
  }
  changed(n, t = st.SinceLoaded) {
    return n && typeof n == "string" ? this.changes(n, t).changed : this.hasChanges(n === void 0 ? t : n);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(n = st.SinceLoaded) {
    n == st.SinceLoaded ? this.__gadget.instantiatedFields = dt(this.__gadget.fields) : n == st.SinceLastPersisted && (this.__gadget.persistedFields = dt(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(n = st.SinceLoaded) {
    let t;
    n == st.SinceLoaded ? t = Object.keys(this.__gadget.instantiatedFields) : t = Object.keys(this.__gadget.persistedFields);
    for (const r of this.__gadget.fieldKeys)
      t.includes(r) || delete this.__gadget.fields[r];
    n == st.SinceLoaded ? Object.assign(this.__gadget.fields, dt(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, dt(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return po({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const Ol = Uh;
class Al extends Error {
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
class lo extends Error {
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
class Li extends Error {
  constructor(n, t) {
    super(n.startsWith("GGT_") ? n : `${t}: ${n}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    });
  }
}
class Is extends Error {
  constructor(n) {
    let t;
    fo(n) ? t = `GraphQL websocket closed unexpectedly by the server with error code ${n.code} and reason "${n.reason}"` : t = "GraphQL websocket closed unexpectedly by the server", super(t), Object.defineProperty(this, "code", {
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
    }), this.event = n;
  }
}
class Fh extends Error {
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
class Vh extends Error {
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
class $h extends Error {
  constructor(n, t, r, i) {
    const a = t.slice(0, 3), o = t.length > 3 ? `, and ${t.length - 3} more error${t.length > 4 ? "s" : ""} need${t.length > 4 ? "" : "s"} to be corrected` : "";
    super(n ?? `GGT_INVALID_RECORD: ${r ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: s, message: y }) => `${s} ${y}`).join(", ")}${o}.`), Object.defineProperty(this, "code", {
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
    }), this.validationErrors = t, this.modelApiIdentifier = r, this.record = i;
  }
}
class Pl extends Error {
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
class Sl extends Error {
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
class Gh extends Error {
  constructor(n, t) {
    super(n.length > 1 ? "Multiple errors occurred" : n[0].message), Object.defineProperty(this, "errors", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }), Object.defineProperty(this, "results", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ErrorGroup"
    });
  }
  get code() {
    return `GGT_ERROR_GROUP(${this.errors.slice(0, 10).map((n) => {
      var t;
      return (t = n.code) !== null && t !== void 0 ? t : "GGT_UNKNOWN";
    }).join(",")})`;
  }
  /** @private */
  get statusCode() {
    return Math.max(...this.errors.map((n) => {
      var t;
      return (t = n.statusCode) !== null && t !== void 0 ? t : 500;
    }));
  }
}
function ws(e, n) {
  if (!e)
    throw new Error("assertion error" + (n ? `: ${n}` : ""));
  return e;
}
const Vn = (e, n) => {
  const t = n.length;
  let r = 0;
  for (; e != null && r < t; )
    e = e[n[r++]];
  return r && r == t ? e : void 0;
}, fo = (e) => (e == null ? void 0 : e.type) == "close", kt = (e, n) => typeof e != "string" ? "" : Ui(e, n), Cs = (e) => {
  const n = e == null ? "" : String(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Ui = (e, n = !0) => {
  let t = "" + e;
  return n ? t = t.replace(/^[a-z\d]*/, (r) => Cs(r)) : t = t.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (r) => r.toLowerCase()), t = t.replace(/(?:_|(\/))([a-z\d]*)/gi, (r, i, a, o, s) => (i || (i = ""), "" + i + Cs(a))), t;
}, qh = (e) => `${Ui(e)}Sort`, Wh = (e) => `${Ui(e)}Filter`, Hh = (e, n, t) => new Pl(`More than one record found for ${e}.${n} = ${t}. Please confirm your unique validation is not reporting an error.`), zh = (e, n) => {
  if (e.fetching)
    return;
  const t = Vn(e.data, n);
  if (t === void 0)
    return new Al(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${n.join(".")}`);
  if (t === null)
    return new Sl(`Record Not Found Error: Gadget API returned no data at ${n.join(".")}`);
}, $t = (e, n, t = !1) => {
  var r;
  if (e.error)
    throw e.error instanceof Rr && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const i = Vn(e.data, n), a = Vn(i, ["edges"]), o = a ?? i;
  if (i === void 0)
    throw new Al(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${n.join(".")}`);
  if (i === null || t && Array.isArray(o) && o.length === 0)
    throw new Sl(`Record Not Found Error: Gadget API returned no data at ${n.join(".")}`);
  return i;
}, yr = (e, n) => {
  var t;
  if (e.error)
    throw e.error instanceof Rr && (!((t = e.error.networkError) === null || t === void 0) && t.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const r = Vn(e.data, n);
  return r ?? null;
}, Vo = (e) => {
  var n;
  return e.code == "GGT_INVALID_RECORD" ? new $h(e.message, e.validationErrors, (n = e.model) === null || n === void 0 ? void 0 : n.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Pl(e.message) : new Li(e.message, e.code);
}, un = (e, n) => {
  const t = $t(e, n);
  if (!t.success) {
    const r = t.errors && t.errors[0];
    throw r ? Vo(r) : new Li("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return t;
}, El = (e) => {
  var n, t, r, i;
  if (!((t = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || t === void 0) && t.hydrations)
    return new bd((i = (r = e.data) === null || r === void 0 ? void 0 : r.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, vr = (e, n) => {
  const t = El(e);
  return t && (n = t.apply(n)), new Ol(n);
}, $o = (e, n) => {
  const t = El(e);
  return t && (n = t.apply(n)), n == null ? void 0 : n.map((r) => new Ol(r));
}, Or = (e, n) => {
  const t = n.edges.map((r) => r.node);
  return $o(e, t);
}, po = (e) => {
  if (e != null && typeof e.toJSON == "function" && (e = e.toJSON()), e !== void 0) {
    if (e === null)
      return null;
    if (typeof e == "boolean" || typeof e == "string")
      return e;
    if (typeof e == "number")
      return Number.isFinite(e) ? e : null;
    if (typeof e == "object") {
      if (Array.isArray(e)) {
        const n = [];
        for (let t = 0; t < e.length; t++) {
          const r = e[t];
          n[t] = r === void 0 ? null : po(r);
        }
        return n;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const n = {};
        for (const t of Object.keys(e)) {
          const r = po(e[t]);
          r !== void 0 && (n[t] = r);
        }
        return n;
      }
    }
  }
}, la = "gstk", js = (e) => {
  try {
    const n = window[e];
    return n.setItem(la, la), n.removeItem(la), !0;
  } catch {
    return !1;
  }
}, Ns = Object.prototype.toString, Rs = Object.getPrototypeOf, Ms = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, fr = (e, n, t) => {
  if (e === n)
    return !0;
  if (e == null || n == null)
    return !1;
  if (t.indexOf(e) > -1 && t.indexOf(n) > -1)
    return !0;
  const r = Ns.call(e), i = Ns.call(n);
  let a, o, s;
  if (t.push(e, n), r != i || (a = Ms(e), o = Ms(n), a.length != o.length || a.some(function(y) {
    return !fr(e[y], n[y], t);
  })))
    return !1;
  switch (r.slice(8, -1)) {
    case "Symbol":
      return e.valueOf() == n.valueOf();
    case "Date":
    case "Number":
      return +e == +n || +e != +e && +n != +n;
    case "RegExp":
    case "Function":
    case "String":
    case "Boolean":
      return "" + e == "" + n;
    case "Set":
    case "Map": {
      a = e.entries(), o = n.entries();
      do
        if (s = a.next(), !fr(s.value, o.next().value, t))
          return !1;
      while (!s.done);
      return !0;
    }
    case "ArrayBuffer":
      e = new Uint8Array(e), n = new Uint8Array(n);
    case "DataView":
      e = new Uint8Array(e.buffer), n = new Uint8Array(n.buffer);
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
      if (e.length != n.length)
        return !1;
      for (s = 0; s < e.length; s++)
        if (!(!(s in e) && !(s in n)) && (s in e != s in n || !fr(e[s], n[s], t)))
          return !1;
      return !0;
    case "Object":
      return fr(Rs(e), Rs(n), t);
    default:
      return !1;
  }
}, Qr = (e, n) => fr(e, n, []);
class Tl extends Error {
}
class Qh {
  constructor(n, t) {
    Object.defineProperty(this, "client", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }), Object.defineProperty(this, "subscriptionClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
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
    throw $t(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Tl("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    $t(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    $t(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Yh {
  constructor() {
    Object.defineProperty(this, "values", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    });
  }
  getItem(n) {
    return this.values[n] || null;
  }
  setItem(n, t) {
    this.values[n] = t;
  }
}
const Kh = (e) => {
  const n = [...e.definitions].reverse().find((t) => t.kind == "OperationDefinition");
  if (n)
    return n.name ? n.name.value : n.selectionSet.selections.find((r) => r.kind == "Field").name.value;
}, ks = gl({
  onOperation: (e) => {
    var n, t;
    (n = (t = e.context).operationName) !== null && n !== void 0 || (t.operationName = Kh(e.query) || "unknown");
  }
}), Jh = gl({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [n, t] = e.context.url.split("?"), r = new URLSearchParams(t);
        r.set("operation", e.context.operationName), e.context.url = `${n}?${r.toString()}`;
      } catch {
      }
  }
});
var ho;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(ho || (ho = {}));
const Xh = 2, Zh = 4800, xh = 1e4, ey = [ct.ConnectionAcknowledgementTimeout, ct.ConnectionInitialisationTimeout], Ds = Symbol.for("gadget/connection"), ty = "token", ny = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var Ye;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(Ye || (Ye = {}));
class Il {
  constructor(n) {
    var t, r, i, a, o;
    if (Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
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
      value: Ye.Anonymous
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
      value: async (s, y) => {
        let u, c;
        if (y ? (u = y, c = s) : (u = s, c = {}), this.currentTransaction)
          return await u(this.currentTransaction);
        let l = null, p;
        try {
          l = await this.waitForOpenedConnection({
            isFatalConnectionProblem(f) {
              return console.warn("Transport error encountered during transaction processing", f), !0;
            },
            connectionAckWaitTimeout: Zh,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const h = new Es({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              ks,
              ...this.exchanges.beforeAsync,
              ca({
                forwardSubscription(f) {
                  const v = { ...f, query: f.query || "" };
                  return {
                    subscribe: (m) => ({
                      unsubscribe: l.subscribe(v, m)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          h[Ds] = this, p = new Qh(h, l), this.currentTransaction = p, await p.start();
          const d = await u(p);
          return await p.commit(), d;
        } catch (h) {
          try {
            p != null && p.open && await p.rollback();
          } catch (d) {
            d instanceof Tl || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", d);
          }
          throw fo(h) ? new Is(h) : h;
        } finally {
          await (l == null ? void 0 : l.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (s, y = {}) => {
        var u;
        s = ry(s, (u = this.options.baseRouteURL) !== null && u !== void 0 ? u : this.options.endpoint), this.isGadgetRequest(s) && (y.headers = { ...this.requestHeaders(), ...y.headers }, this.authenticationMode == Ye.Custom && await this.options.authenticationMode.custom.processFetch(s, y));
        const c = await this._fetchImplementation(s, y);
        if (this.authenticationMode == Ye.BrowserSession) {
          const l = c.headers.get("x-set-authorization"), p = l != null && l.startsWith("Session ") ? l.replace("Session ", "") : null;
          p && this.sessionTokenStore.setItem(this.sessionStorageKey, p);
        }
        return c;
      }
    }), !n.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = n.endpoint, n.fetchImplementation ? this._fetchImplementation = n.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...s) => {
      const { fetch: y } = await import("./browser-ponyfill-a219aae7.js").then((u) => u.b);
      return await y(...s);
    }, this.websocketImplementation = (r = (t = n.websocketImplementation) !== null && t !== void 0 ? t : globalThis == null ? void 0 : globalThis.WebSocket) !== null && r !== void 0 ? r : Lh, this.websocketsEndpoint = (i = n.websocketsEndpoint) !== null && i !== void 0 ? i : n.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = n.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = n.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...n.exchanges
    }, this.setAuthenticationMode(n.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${ty}-${this.endpoint}`;
  }
  get currentClient() {
    var n;
    return ((n = this.currentTransaction) === null || n === void 0 ? void 0 : n.client) || this.baseClient;
  }
  set fetchImplementation(n) {
    this._fetchImplementation = n, this.resetClients();
  }
  /**
   * Change the authentication mode settings for this connection imperatively.
   * @private This function is generally not required for use by external developers, but is useful for those building integrations against the Gadget API to configure passed in `api` objects.
   */
  setAuthenticationMode(n) {
    var t;
    n && (n.browserSession ? this.enableSessionMode(n.browserSession) : n.internalAuthToken ? this.authenticationMode = Ye.InternalAuthToken : n.apiKey ? this.authenticationMode = Ye.APIKey : n.custom && (this.authenticationMode = Ye.Custom), this.options.authenticationMode = n), (t = this.authenticationMode) !== null && t !== void 0 || (this.authenticationMode = Ye.Anonymous);
  }
  enableSessionMode(n) {
    this.authenticationMode = Ye.BrowserSession;
    const t = !n || typeof n == "boolean" ? dr.Durable : n.storageType;
    let r;
    t == dr.Durable && js("localStorage") ? r = window.localStorage : t == dr.Session && js("sessionStorage") ? r = window.sessionStorage : r = new Yh(), n !== null && typeof n == "object" && "initialToken" in n && n.initialToken && r.setItem(this.sessionStorageKey, n.initialToken), this.sessionTokenStore = r, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(n) {
    let t;
    if (typeof n == "string" ? t = n : typeof n == "object" && "url" in n ? t = n.url : t = String(n), yo(this.options.endpoint))
      return !!yo(t);
    const r = new URL(this.options.endpoint).host;
    return t.includes(r);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const n = [...this.exchanges.beforeAll, ks, Jh];
    typeof window < "u" && n.push(Ih), n.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      ca({
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
      ca({
        isSubscriptionOperation: (r) => r.query.definitions.some((i) => mp(i, r.variables)),
        forwardSubscription: (r) => ({
          subscribe: (i) => {
            const a = { ...r, query: r.query || "" };
            return {
              unsubscribe: Fp(Dp(Up((o) => this.getBaseSubscriptionClient().subscribe(a, o))), i)
            };
          }
        })
      }),
      wh,
      ...this.exchanges.afterAll
    );
    const t = new Es({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: n,
      requestPolicy: this.requestPolicy
    });
    return t[Ds] = this, t;
  }
  newSubscriptionClient(n) {
    if (!this.websocketImplementation)
      throw new Error("Can't use this GadgetClient for this subscription-based operation as there's no global WebSocket implementation available. Please pass one as the `websocketImplementation` option to the GadgetClient constructor.");
    let t = this.websocketsEndpoint;
    if (n != null && n.urlParams) {
      const r = new URLSearchParams();
      for (const [i, a] of Object.entries(n.urlParams))
        a && r.set(i, a);
      t += "?" + r.toString();
    }
    return kh({
      url: t,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var r, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == Ye.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == Ye.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == Ye.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == Ye.Custom && await ((i = (r = this.options.authenticationMode) === null || r === void 0 ? void 0 : r.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (r, i) => {
          var a, o, s, y, u, c;
          if (this.authenticationMode == Ye.BrowserSession && (i != null && i.sessionToken)) {
            const l = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (l !== null && typeof l == "object" ? l.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (y = (s = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || s === void 0 ? void 0 : s.connected) === null || y === void 0 || y.call(s, r, i), (c = (u = n == null ? void 0 : n.on) === null || u === void 0 ? void 0 : u.connected) === null || c === void 0 || c.call(u, r, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...n
    });
  }
  requestHeaders() {
    var n;
    const t = {};
    if (this.authenticationMode == Ye.InternalAuthToken)
      t.authorization = "Basic " + ny("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == Ye.APIKey)
      t.authorization = `Bearer ${(n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.apiKey}`;
    else if (this.authenticationMode == Ye.BrowserSession) {
      const r = this.sessionTokenStore.getItem(this.sessionStorageKey);
      r && (t.authorization = `Session ${r}`);
    }
    return t["x-gadget-environment"] = this.environment, t;
  }
  async waitForOpenedConnection(n) {
    let t = this.newSubscriptionClient(n), r = [], i = n.connectionAttempts || Xh;
    const a = n.connectionGlobalTimeoutMs || xh, o = () => {
      r.forEach((s) => s()), r = [];
    };
    return await new Promise((s, y) => {
      const u = setTimeout(() => {
        this.disposeClient(t), l(new Fh("Timeout opening websocket connection to Gadget API"));
      }, a), c = (d) => {
        if (fo(d)) {
          if (d.code == ho.TooManyRequests)
            return o(), l(new Vh(d.reason));
          if (ey.includes(d.code) && i > 0) {
            i -= 1, this.disposeClient(t), t = this.newSubscriptionClient(n), h();
            return;
          }
        }
        clearTimeout(u), y(new Is(d));
      }, l = (d) => {
        clearTimeout(u), y(d);
      }, p = () => {
        clearTimeout(u), s(t);
      }, h = () => {
        o(), r.push(t.on("connected", p)), r.push(t.on("closed", c)), r.push(t.on("error", l));
      };
      h();
    }).finally(o);
  }
  disposeClient(n) {
    const t = n.dispose();
    t && t.catch((r) => console.error(`Error closing SubscriptionClient: ${r.message}`));
  }
  getBaseSubscriptionClient() {
    return this.baseSubscriptionClient || (this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 })), this.baseSubscriptionClient;
  }
}
Object.defineProperty(Il, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.14"
});
function ry(e, n) {
  if (typeof e != "string")
    return e;
  if (yo(e))
    try {
      return String(new URL(e, n));
    } catch {
      return e;
    }
  return e;
}
function yo(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class $n extends Array {
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
  static boot(n, t, r) {
    const i = new $n();
    return i.push(...t), i.modelManager = n, i.pagination = r, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Li("No records found.", "GGT_RECORD_NOT_FOUND");
    return this[0];
  }
  toJSON() {
    return this.map((n) => n.toJSON());
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
    var n;
    if (!this.hasNextPage)
      throw new lo("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const { first: t, last: r, before: i, ...a } = (n = this.pagination.options) !== null && n !== void 0 ? n : {};
    return await this.modelManager.findMany({
      ...a,
      after: this.pagination.pageInfo.endCursor,
      first: t || r
    });
  }
  async previousPage() {
    var n;
    if (!this.hasPreviousPage)
      throw new lo("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: t, last: r, after: i, ...a } = (n = this.pagination.options) !== null && n !== void 0 ? n : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: r || t
    });
  }
}
const vo = (e) => Object.entries(e).flatMap(([n, t]) => {
  if (typeof t == "boolean")
    return t ? n : !1;
  if (t instanceof qo) {
    let r = "";
    const i = Object.entries(t.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof Wo ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return i.length > 0 && (r = `(${i.join(", ")})`), t.subselection ? [`${n}${r} {`, ...vo(t.subselection), "}"] : `${n}${r}`;
  } else
    return [`${n} {`, ...vo(t), "}"];
}).filter((n) => !!n).map((n) => "  " + n), Go = (e) => {
  const n = {}, t = (r) => {
    let i = 1;
    if (n[r]) {
      for (; n[`${r}${i}`]; )
        i++;
      return `${r}${i}`;
    }
    return r;
  };
  return Object.entries(e).forEach(([r, i]) => {
    i instanceof qo ? Object.entries(i.args).forEach(([a, o]) => {
      var s;
      o instanceof Wo && (n[(s = o.name) !== null && s !== void 0 ? s : t(a)] = o);
    }) : typeof i == "object" && i !== null && Object.assign(n, Go(i));
  }), n;
}, iy = (e) => {
  const n = Go(e.fields);
  return Object.keys(n).length === 0 ? "" : `(${Object.entries(n).map(([r, i]) => `$${r}: ${i.type}`).join(", ")})`;
};
class qo {
  constructor(n, t) {
    Object.defineProperty(this, "args", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }), Object.defineProperty(this, "subselection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    });
  }
}
class Wo {
  constructor(n, t, r) {
    Object.defineProperty(this, "type", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
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
const Kn = (e, n) => new qo(e, n), et = (e) => new Wo(e.type + (e.required ? "!" : ""), e.name, e.value), ay = (e) => {
  var n;
  const t = iy(e), r = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(n = e.name) !== null && n !== void 0 ? n : ""}${t}${r} {
${vo(e.fields).join(`
`)}
}`;
}, Jn = (e) => {
  const n = Go(e.fields);
  return {
    query: ay(e),
    variables: Object.entries(n ?? {}).reduce((t, [r, i]) => (typeof i.value < "u" && (t[r] = i.value), t), {})
  };
}, Mr = `
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
`, Xn = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, oy = (e) => `
    query InternalFind${kt(e)}($id: GadgetID!, $select: [String!]) {
      ${Xn(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, wl = (e, n) => ({
  search: n != null && n.search ? et({ value: n == null ? void 0 : n.search, type: "String" }) : void 0,
  sort: n != null && n.sort ? et({ value: n == null ? void 0 : n.sort, type: `[${e}Sort!]` }) : void 0,
  filter: n != null && n.filter ? et({ value: n == null ? void 0 : n.filter, type: `[${e}Filter!]` }) : void 0,
  select: n != null && n.select ? et({ value: Cl(n == null ? void 0 : n.select), type: "[String!]" }) : void 0
}), uy = (e, n) => {
  const t = kt(e), r = wl(t, n);
  return Jn({
    type: "query",
    name: `InternalFindFirst${t}`,
    fields: {
      internal: {
        [`list${t}`]: Kn({
          ...r,
          first: et({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, sy = (e, n) => {
  const t = kt(e), r = wl(t, n);
  return Jn({
    type: "query",
    name: `InternalFindMany${t}`,
    fields: {
      internal: {
        [`list${t}`]: Kn({
          ...r,
          after: et({ value: n == null ? void 0 : n.after, type: "String" }),
          before: et({ value: n == null ? void 0 : n.before, type: "String" }),
          first: et({ value: n == null ? void 0 : n.first, type: "Int" }),
          last: et({ value: n == null ? void 0 : n.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, cy = (e) => {
  const n = kt(e);
  return `
    ${Mr}

    mutation InternalCreate${n}($record: Internal${n}Input) {
      ${Xn(e)}
      internal {
        create${n}(${e}: $record) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${e}
        }
      }
    }
  `;
}, ly = (e, n) => {
  const t = kt(e), r = kt(n);
  return `
    ${Mr}

    mutation InternalBulkCreate${r}($records: [Internal${t}Input]!) {
      ${Xn(e)}
      internal {
        bulkCreate${r}(${n}: $records) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${n}
        }
      }
    }
  `;
}, fy = (e) => {
  const n = kt(e);
  return `
    ${Mr}

    mutation InternalUpdate${n}($id: GadgetID!, $record: Internal${n}Input) {
      ${Xn(e)}
      internal {
        update${n}(id: $id, ${e}: $record) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${e}
        }
      }
    }
  `;
}, dy = (e) => {
  const n = kt(e);
  return `
    ${Mr}

    mutation InternalDelete${n}($id: GadgetID!) {
      ${Xn(e)}
      internal {
        delete${n}(id: $id) {
          success
          errors {
            ... InternalErrorsDetails
          }
        }
      }
    }
  `;
}, py = (e) => {
  const n = kt(e);
  return `
    ${Mr}

    mutation InternalDeleteMany${n}(
      $search: String
      $filter: [${n}Filter!]
    ) {
      ${Xn(e)}
      internal {
        deleteMany${n}(search: $search, filter: $filter) {
          success
          errors {
            ... InternalErrorsDetails
          }
        }
      }
    }
  `;
};
class Et {
  constructor(n, t, r) {
    Object.defineProperty(this, "apiIdentifier", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }), Object.defineProperty(this, "connection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
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
    }), this.capitalizedApiIdentifier = Ui(n);
  }
  validateRecord(n) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(n).every((r) => r === this.apiIdentifier);
  }
  getRecordFromData(n, t) {
    let r = n;
    if (!this.validateRecord(n))
      throw new Li(`Invalid arguments found in variables. Did you mean to use ${t}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
    return this.apiIdentifier in n && (r = r[this.apiIdentifier]), r;
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
  async findOne(n, t, r = !0) {
    const i = await this.connection.currentClient.query(oy(this.apiIdentifier), { id: n, select: Cl(t == null ? void 0 : t.select) }).toPromise(), o = (r ? $t : yr)(i, ["internal", this.apiIdentifier]);
    return vr(i, o);
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
  async maybeFindOne(n, t) {
    const r = await this.findOne(n, t, !1);
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
  async findMany(n) {
    const t = sy(this.apiIdentifier, n), r = await this.connection.currentClient.query(t.query, t.variables).toPromise(), i = yr(r, ["internal", `list${this.capitalizedApiIdentifier}`]), a = Or(r, i);
    return $n.boot(this, a, { options: n, pageInfo: i.pageInfo });
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
  async findFirst(n, t = !0) {
    const r = uy(this.apiIdentifier, n), i = await this.connection.currentClient.query(r.query, r.variables).toPromise();
    let a;
    t === !1 ? a = yr(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = $t(i, ["internal", `list${this.capitalizedApiIdentifier}`], t);
    const o = Or(i, a);
    return $n.boot(this, o, { options: n, pageInfo: a.pageInfo })[0];
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
  async maybeFindFirst(n) {
    return await this.findFirst(n, !1);
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
  async create(n) {
    const t = await this.connection.currentClient.mutation(cy(this.apiIdentifier), {
      record: this.getRecordFromData(n, "create")
    }).toPromise(), r = un(t, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return vr(t, r[this.apiIdentifier]);
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
  async bulkCreate(n) {
    var t;
    if (!(!((t = this.options) === null || t === void 0) && t.pluralApiIdentifier))
      throw new lo("Cannot perform bulkCreate without a pluralApiIdentifier");
    const r = kt(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(ly(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: n
    }).toPromise(), a = un(i, ["internal", `bulkCreate${r}`]);
    return $o(i, a[this.options.pluralApiIdentifier]);
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
  async update(n, t) {
    ws(n, "Can't update a record without an ID passed");
    const r = await this.connection.currentClient.mutation(fy(this.apiIdentifier), {
      id: n,
      record: this.getRecordFromData(t, "update")
    }).toPromise(), i = un(r, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return vr(r, i[this.apiIdentifier]);
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
  async delete(n) {
    ws(n, "Can't delete a record without an ID");
    const t = await this.connection.currentClient.mutation(dy(this.apiIdentifier), { id: n }).toPromise();
    un(t, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
  async deleteMany(n) {
    const t = await this.connection.currentClient.mutation(py(this.apiIdentifier), n).toPromise();
    un(t, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function Cl(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const n = [];
  for (const [t, r] of Object.entries(e))
    r && n.push(t);
  return n;
}
const Ho = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), zo = (e, n = !1) => {
  const t = { ...e };
  return n && (t.__typename = !0), t;
}, Fi = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, hy = (e, n, t, r, i) => {
  const a = {};
  return typeof n < "u" && (a.id = et({ type: "GadgetID!", value: n })), Jn({
    type: "query",
    name: e,
    fields: {
      [e]: Kn(a, zo((i == null ? void 0 : i.select) || t, !0)),
      ...Ho(r)
    },
    directives: Fi(i)
  });
}, yy = (e, n, t, r, i, a) => Qo(e, r, i, {
  ...a,
  first: 2,
  filter: {
    [n]: {
      equals: t
    }
  }
}), Qo = (e, n, t, r) => Jn({
  type: "query",
  name: e,
  fields: {
    [e]: Kn({
      after: et({ value: r == null ? void 0 : r.after, type: "String" }),
      first: et({ value: r == null ? void 0 : r.first, type: "Int" }),
      before: et({ value: r == null ? void 0 : r.before, type: "String" }),
      last: et({ value: r == null ? void 0 : r.last, type: "Int" }),
      sort: r != null && r.sort ? et({ value: r.sort, type: `[${qh(t)}!]` }) : void 0,
      filter: r != null && r.filter ? et({ value: r.filter, type: `[${Wh(t)}!]` }) : void 0,
      search: r != null && r.search ? et({ value: r.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: zo((r == null ? void 0 : r.select) || n, !0)
      }
    }),
    ...Ho(t)
  },
  directives: Fi(r)
}), jl = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Nl = (e) => Object.fromEntries(Object.entries(e).map(([n, t]) => [n, et(t)])), vy = (e, n, t, r, i, a, o, s, y) => {
  const u = (a == null ? void 0 : a.select) || n;
  let c = {
    [e]: Kn(Nl(i), {
      success: !0,
      errors: jl,
      [r]: u && !y ? zo(u, !0) : !1,
      [s ? "results" : "result"]: !!y
    })
  };
  o && (c = {
    [o]: c
  });
  const l = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...Ho(t)
    },
    directives: Fi(a)
  };
  return Jn(l);
}, my = (e, n, t, r) => {
  let i = {
    [e]: Kn(Nl(n), {
      success: !0,
      errors: jl,
      result: !0
    })
  };
  return t && (i = {
    [t]: i
  }), Jn({
    type: "mutation",
    name: e,
    fields: i,
    directives: Fi(r)
  });
}, Ue = async (e, n, t, r, i, a, o = !0) => {
  const s = hy(n, t, r, i, a), y = await e.connection.currentClient.query(s.query, s.variables).toPromise(), c = (o ? $t : yr)(y, [n]);
  return vr(y, c);
}, Vi = async (e, n, t, r, i, a, o) => {
  const s = yy(n, t, r, i, a, o), y = await e.connection.currentClient.query(s.query, s.variables).toPromise(), u = $t(y, [n]), c = Or(y, u);
  if (c.length > 1)
    throw Hh(a, t, r);
  return c[0];
}, ue = async (e, n, t, r, i, a) => {
  const o = Qo(n, t, r, i), s = await e.connection.currentClient.query(o.query, o.variables).toPromise();
  let y;
  a === !1 ? y = yr(s, [n]) : y = $t(s, [n], a);
  const u = Or(s, y);
  return $n.boot(e, u, { options: i, pageInfo: y.pageInfo });
}, M = async (e, n, t, r, i, a, o, s, y, u) => {
  const c = vy(n, t, r, i, o, s, y, a, u), l = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), p = y ? [y, n] : [n];
  if (a) {
    const h = Vn(l.data, p), d = h[i] && t ? $o(l, h[i]) : void 0;
    if (h.errors) {
      const f = h.errors.map((v) => Vo(v));
      throw new Gh(f, d);
    }
    return d;
  } else {
    const h = un(l, p);
    return t == null ? void 0 : u ? h.result : vr(l, h[i]);
  }
}, Bs = async (e, n, t, r) => {
  const i = my(n, t, r), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return un(a, r ? [r, n] : [n]).result;
};
function q(e, n, t = {}) {
  var a;
  if (e.hasAmbiguousIdentifier && Object.keys(t).some((o) => {
    var s;
    return !((s = e.paramOnlyVariables) != null && s.includes(o)) && o !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let r;
  const i = Object.entries(e.variables).find(([o, s]) => o === "id" && s.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in t && typeof t[e.modelApiIdentifier] == "object" && t[e.modelApiIdentifier] !== null || !e.variables[e.modelApiIdentifier])
      r = t;
    else {
      r = {
        [e.modelApiIdentifier]: {}
      };
      for (const [o, s] of Object.entries(t))
        (a = e.paramOnlyVariables) != null && a.includes(o) ? r[o] = s : i && o === i[0] ? r.id = s : r[e.modelApiIdentifier][o] = s;
    }
  else
    r = t;
  return r.id ?? (r.id = n), r;
}
const we = {
  __typename: !0,
  createdAt: !0,
  email: !0,
  id: !0,
  roles: {
    key: !0,
    name: !0
  },
  state: !0,
  updatedAt: !0
}, pe = "user";
async function by(e, n) {
  const t = q(
    this.signUp,
    void 0,
    e
  );
  return await M(
    this,
    "signUpUser",
    we,
    pe,
    pe,
    !1,
    {
      user: {
        value: t.user,
        required: !1,
        type: "SignUpUserInput"
      }
    },
    n,
    null,
    !1
  );
}
async function gy(e, n, t) {
  const r = q(
    this.update,
    e,
    n
  );
  return await M(
    this,
    "updateUser",
    we,
    pe,
    pe,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      user: {
        value: r.user,
        required: !1,
        type: "UpdateUserInput"
      }
    },
    t,
    null,
    !1
  );
}
async function _y(e, n) {
  return await M(
    this,
    "deleteUser",
    null,
    pe,
    pe,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    n,
    null,
    !1
  );
}
async function Oy(e, n) {
  const t = q(
    this.create,
    void 0,
    e
  );
  return await M(
    this,
    "createUser",
    we,
    pe,
    pe,
    !1,
    {
      user: {
        value: t.user,
        required: !1,
        type: "CreateUserInput"
      }
    },
    n,
    null,
    !1
  );
}
class Ay {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Ue(
        this,
        "user",
        t,
        we,
        pe,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: pe,
        defaultSelection: we
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await Ue(
          this,
          "user",
          t,
          we,
          pe,
          r,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: we
      }
    ), this.findMany = Object.assign(
      async (t) => await ue(
        this,
        "users",
        we,
        "user",
        t
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: pe,
        defaultSelection: we
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ue(
        this,
        "users",
        we,
        pe,
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: pe,
        defaultSelection: we
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ue(
          this,
          "users",
          we,
          pe,
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: pe,
        defaultSelection: we
      }
    ), this.findByEmail = Object.assign(
      async (t, r) => await Vi(
        this,
        "users",
        "email",
        t,
        we,
        pe,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: pe,
        defaultSelection: we
      }
    ), this.signUp = Object.assign(
      by,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: pe,
        modelSelectionField: pe,
        isBulk: !1,
        defaultSelection: we,
        variables: {
          user: {
            required: !1,
            type: "SignUpUserInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkSignUp = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.signUp,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkSignUpUsers",
          we,
          "user",
          "users",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkSignUp.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkSignUpUsers",
        namespace: null,
        modelApiIdentifier: pe,
        modelSelectionField: "users",
        isBulk: !0,
        defaultSelection: we,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkSignUpUsersInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      gy,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: pe,
        modelSelectionField: pe,
        isBulk: !1,
        defaultSelection: we,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          user: {
            required: !1,
            type: "UpdateUserInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkUpdate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.update,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkUpdateUsers",
          we,
          "user",
          "users",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkUpdate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateUsers",
        namespace: null,
        modelApiIdentifier: pe,
        modelSelectionField: "users",
        isBulk: !0,
        defaultSelection: we,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkUpdateUsersInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      _y,
      {
        type: "action",
        operationName: "deleteUser",
        namespace: null,
        modelApiIdentifier: pe,
        modelSelectionField: pe,
        isBulk: !1,
        defaultSelection: null,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await M(
        this,
        "bulkDeleteUsers",
        null,
        "user",
        "users",
        !0,
        {
          ids: {
            value: t,
            ...this.bulkDelete.variables.ids
          }
        },
        r,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteUsers",
        namespace: null,
        modelApiIdentifier: pe,
        modelSelectionField: "users",
        isBulk: !0,
        defaultSelection: null,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.create = Object.assign(
      Oy,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: pe,
        modelSelectionField: pe,
        isBulk: !1,
        defaultSelection: we,
        variables: {
          user: {
            required: !1,
            type: "CreateUserInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkCreate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.create,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkCreateUsers",
          we,
          "user",
          "users",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkCreate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateUsers",
        namespace: null,
        modelApiIdentifier: pe,
        modelSelectionField: "users",
        isBulk: !0,
        defaultSelection: we,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkCreateUsersInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    );
  }
}
const ft = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  roles: {
    key: !0,
    name: !0
  },
  shopifySID: !0,
  state: !0,
  updatedAt: !0
}, at = "session";
async function Py(e, n) {
  const t = q(
    this.logInViaEmail,
    void 0,
    e
  );
  return await M(
    this,
    "logInViaEmail",
    ft,
    at,
    at,
    !1,
    {
      email: {
        value: t.email,
        required: !1,
        type: "String"
      },
      password: {
        value: t.password,
        required: !1,
        type: "String"
      }
    },
    n,
    "currentSession",
    !1
  );
}
async function Sy(e) {
  return await M(
    this,
    "logOut",
    ft,
    at,
    at,
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
class Ey {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Ue(
        this,
        "session",
        t,
        ft,
        at,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: at,
        defaultSelection: ft
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await Ue(
          this,
          "session",
          t,
          ft,
          at,
          r,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: ft
      }
    ), this.findMany = Object.assign(
      async (t) => await ue(
        this,
        "sessions",
        ft,
        "session",
        t
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: at,
        defaultSelection: ft
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ue(
        this,
        "sessions",
        ft,
        at,
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: at,
        defaultSelection: ft
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ue(
          this,
          "sessions",
          ft,
          at,
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "sessions",
        modelApiIdentifier: at,
        defaultSelection: ft
      }
    ), this.logInViaEmail = Object.assign(
      Py,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: at,
        modelSelectionField: at,
        isBulk: !1,
        defaultSelection: ft,
        variables: {
          email: {
            required: !1,
            type: "String"
          },
          password: {
            required: !1,
            type: "String"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.logOut = Object.assign(
      Sy,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: at,
        modelSelectionField: at,
        isBulk: !1,
        defaultSelection: ft,
        variables: {},
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    );
  }
}
const Ke = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  state: !0,
  updatedAt: !0
}, Re = "productPairing";
async function Ty(e, n) {
  const t = q(
    this.create,
    void 0,
    e
  );
  return await M(
    this,
    "createProductPairing",
    Ke,
    Re,
    Re,
    !1,
    {
      productPairing: {
        value: t.productPairing,
        required: !1,
        type: "CreateProductPairingInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Iy(e, n, t) {
  const r = q(
    this.update,
    e,
    n
  );
  return await M(
    this,
    "updateProductPairing",
    Ke,
    Re,
    Re,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      productPairing: {
        value: r.productPairing,
        required: !1,
        type: "UpdateProductPairingInput"
      }
    },
    t,
    null,
    !1
  );
}
async function wy(e, n) {
  return await M(
    this,
    "deleteProductPairing",
    null,
    Re,
    Re,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    n,
    null,
    !1
  );
}
class Cy {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Ue(
        this,
        "productPairing",
        t,
        Ke,
        Re,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: Re,
        defaultSelection: Ke
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await Ue(
          this,
          "productPairing",
          t,
          Ke,
          Re,
          r,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: Ke
      }
    ), this.findMany = Object.assign(
      async (t) => await ue(
        this,
        "productPairings",
        Ke,
        "productPairing",
        t
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: Re,
        defaultSelection: Ke
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ue(
        this,
        "productPairings",
        Ke,
        Re,
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: Re,
        defaultSelection: Ke
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ue(
          this,
          "productPairings",
          Ke,
          Re,
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "productPairings",
        modelApiIdentifier: Re,
        defaultSelection: Ke
      }
    ), this.create = Object.assign(
      Ty,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: Re,
        modelSelectionField: Re,
        isBulk: !1,
        defaultSelection: Ke,
        variables: {
          productPairing: {
            required: !1,
            type: "CreateProductPairingInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkCreate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.create,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkCreateProductPairings",
          Ke,
          "productPairing",
          "productPairings",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkCreate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateProductPairings",
        namespace: null,
        modelApiIdentifier: Re,
        modelSelectionField: "productPairings",
        isBulk: !0,
        defaultSelection: Ke,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkCreateProductPairingsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Iy,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: Re,
        modelSelectionField: Re,
        isBulk: !1,
        defaultSelection: Ke,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          productPairing: {
            required: !1,
            type: "UpdateProductPairingInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkUpdate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.update,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkUpdateProductPairings",
          Ke,
          "productPairing",
          "productPairings",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkUpdate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateProductPairings",
        namespace: null,
        modelApiIdentifier: Re,
        modelSelectionField: "productPairings",
        isBulk: !0,
        defaultSelection: Ke,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkUpdateProductPairingsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      wy,
      {
        type: "action",
        operationName: "deleteProductPairing",
        namespace: null,
        modelApiIdentifier: Re,
        modelSelectionField: Re,
        isBulk: !1,
        defaultSelection: null,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await M(
        this,
        "bulkDeleteProductPairings",
        null,
        "productPairing",
        "productPairings",
        !0,
        {
          ids: {
            value: t,
            ...this.bulkDelete.variables.ids
          }
        },
        r,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteProductPairings",
        namespace: null,
        modelApiIdentifier: Re,
        modelSelectionField: "productPairings",
        isBulk: !0,
        defaultSelection: null,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    );
  }
}
const We = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, Pe = "unambiguous";
async function jy(e, n) {
  const t = q(
    this.create,
    void 0,
    e
  );
  return await M(
    this,
    "createUnambiguous",
    We,
    Pe,
    Pe,
    !1,
    {
      unambiguous: {
        value: t.unambiguous,
        required: !1,
        type: "CreateUnambiguousInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Ny(e, n, t) {
  const r = q(
    this.update,
    e,
    n
  );
  return await M(
    this,
    "updateUnambiguous",
    We,
    Pe,
    Pe,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      unambiguous: {
        value: r.unambiguous,
        required: !1,
        type: "UpdateUnambiguousInput"
      }
    },
    t,
    null,
    !1
  );
}
async function Ry(e, n) {
  return await M(
    this,
    "deleteUnambiguous",
    null,
    Pe,
    Pe,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    n,
    null,
    !1
  );
}
class My {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Ue(
        this,
        "unambiguous",
        t,
        We,
        Pe,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: Pe,
        defaultSelection: We
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await Ue(
          this,
          "unambiguous",
          t,
          We,
          Pe,
          r,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: We
      }
    ), this.findMany = Object.assign(
      async (t) => await ue(
        this,
        "unambiguouss",
        We,
        "unambiguous",
        t
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: Pe,
        defaultSelection: We
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ue(
        this,
        "unambiguouss",
        We,
        Pe,
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: Pe,
        defaultSelection: We
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ue(
          this,
          "unambiguouss",
          We,
          Pe,
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: Pe,
        defaultSelection: We
      }
    ), this.findById = Object.assign(
      async (t, r) => await Vi(
        this,
        "unambiguouss",
        "id",
        t,
        We,
        Pe,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: Pe,
        defaultSelection: We
      }
    ), this.create = Object.assign(
      jy,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: Pe,
        modelSelectionField: Pe,
        isBulk: !1,
        defaultSelection: We,
        variables: {
          unambiguous: {
            required: !1,
            type: "CreateUnambiguousInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkCreate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.create,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkCreateUnambiguous",
          We,
          "unambiguous",
          "unambiguous",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkCreate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateUnambiguous",
        namespace: null,
        modelApiIdentifier: Pe,
        modelSelectionField: "unambiguous",
        isBulk: !0,
        defaultSelection: We,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkCreateUnambiguousInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Ny,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: Pe,
        modelSelectionField: Pe,
        isBulk: !1,
        defaultSelection: We,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          unambiguous: {
            required: !1,
            type: "UpdateUnambiguousInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkUpdate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.update,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkUpdateUnambiguous",
          We,
          "unambiguous",
          "unambiguous",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkUpdate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateUnambiguous",
        namespace: null,
        modelApiIdentifier: Pe,
        modelSelectionField: "unambiguous",
        isBulk: !0,
        defaultSelection: We,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkUpdateUnambiguousInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Ry,
      {
        type: "action",
        operationName: "deleteUnambiguous",
        namespace: null,
        modelApiIdentifier: Pe,
        modelSelectionField: Pe,
        isBulk: !1,
        defaultSelection: null,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await M(
        this,
        "bulkDeleteUnambiguous",
        null,
        "unambiguous",
        "unambiguous",
        !0,
        {
          ids: {
            value: t,
            ...this.bulkDelete.variables.ids
          }
        },
        r,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteUnambiguous",
        namespace: null,
        modelApiIdentifier: Pe,
        modelSelectionField: "unambiguous",
        isBulk: !0,
        defaultSelection: null,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    );
  }
}
const Je = {
  __typename: !0,
  body: !0,
  createdAt: !0,
  handle: !0,
  id: !0,
  productCategory: !0,
  productType: !0,
  publishedAt: !0,
  publishedScope: !0,
  shopifyCreatedAt: !0,
  shopifyUpdatedAt: !0,
  state: !0,
  status: !0,
  tags: !0,
  templateSuffix: !0,
  title: !0,
  updatedAt: !0,
  vendor: !0
}, Me = "shopifyProduct";
async function ky(e, n) {
  const t = q(
    this.create,
    void 0,
    e
  );
  return await M(
    this,
    "createShopifyProduct",
    Je,
    Me,
    Me,
    !1,
    {
      shopifyProduct: {
        value: t.shopifyProduct,
        required: !1,
        type: "CreateShopifyProductInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Dy(e, n, t) {
  const r = q(
    this.update,
    e,
    n
  );
  return await M(
    this,
    "updateShopifyProduct",
    Je,
    Me,
    Me,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyProduct: {
        value: r.shopifyProduct,
        required: !1,
        type: "UpdateShopifyProductInput"
      }
    },
    t,
    null,
    !1
  );
}
async function By(e, n) {
  return await M(
    this,
    "deleteShopifyProduct",
    null,
    Me,
    Me,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    n,
    null,
    !1
  );
}
class Ly {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Ue(
        this,
        "shopifyProduct",
        t,
        Je,
        Me,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: Me,
        defaultSelection: Je
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await Ue(
          this,
          "shopifyProduct",
          t,
          Je,
          Me,
          r,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Je
      }
    ), this.findMany = Object.assign(
      async (t) => await ue(
        this,
        "shopifyProducts",
        Je,
        "shopifyProduct",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: Me,
        defaultSelection: Je
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ue(
        this,
        "shopifyProducts",
        Je,
        Me,
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: Me,
        defaultSelection: Je
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ue(
          this,
          "shopifyProducts",
          Je,
          Me,
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: Me,
        defaultSelection: Je
      }
    ), this.create = Object.assign(
      ky,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: Me,
        modelSelectionField: Me,
        isBulk: !1,
        defaultSelection: Je,
        variables: {
          shopifyProduct: {
            required: !1,
            type: "CreateShopifyProductInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkCreate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.create,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkCreateShopifyProducts",
          Je,
          "shopifyProduct",
          "shopifyProducts",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkCreate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifyProducts",
        namespace: null,
        modelApiIdentifier: Me,
        modelSelectionField: "shopifyProducts",
        isBulk: !0,
        defaultSelection: Je,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkCreateShopifyProductsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Dy,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: Me,
        modelSelectionField: Me,
        isBulk: !1,
        defaultSelection: Je,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          shopifyProduct: {
            required: !1,
            type: "UpdateShopifyProductInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkUpdate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.update,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkUpdateShopifyProducts",
          Je,
          "shopifyProduct",
          "shopifyProducts",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkUpdate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateShopifyProducts",
        namespace: null,
        modelApiIdentifier: Me,
        modelSelectionField: "shopifyProducts",
        isBulk: !0,
        defaultSelection: Je,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkUpdateShopifyProductsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      By,
      {
        type: "action",
        operationName: "deleteShopifyProduct",
        namespace: null,
        modelApiIdentifier: Me,
        modelSelectionField: Me,
        isBulk: !1,
        defaultSelection: null,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await M(
        this,
        "bulkDeleteShopifyProducts",
        null,
        "shopifyProduct",
        "shopifyProducts",
        !0,
        {
          ids: {
            value: t,
            ...this.bulkDelete.variables.ids
          }
        },
        r,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyProducts",
        namespace: null,
        modelApiIdentifier: Me,
        modelSelectionField: "shopifyProducts",
        isBulk: !0,
        defaultSelection: null,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    );
  }
}
const Xe = {
  __typename: !0,
  createdAt: !0,
  height: !0,
  id: !0,
  position: !0,
  shopifyCreatedAt: !0,
  shopifyUpdatedAt: !0,
  source: !0,
  state: !0,
  updatedAt: !0,
  width: !0
}, ke = "shopifyProductImage";
async function Uy(e, n) {
  const t = q(
    this.create,
    void 0,
    e
  );
  return await M(
    this,
    "createShopifyProductImage",
    Xe,
    ke,
    ke,
    !1,
    {
      shopifyProductImage: {
        value: t.shopifyProductImage,
        required: !1,
        type: "CreateShopifyProductImageInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Fy(e, n, t) {
  const r = q(
    this.update,
    e,
    n
  );
  return await M(
    this,
    "updateShopifyProductImage",
    Xe,
    ke,
    ke,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyProductImage: {
        value: r.shopifyProductImage,
        required: !1,
        type: "UpdateShopifyProductImageInput"
      }
    },
    t,
    null,
    !1
  );
}
async function Vy(e, n) {
  return await M(
    this,
    "deleteShopifyProductImage",
    null,
    ke,
    ke,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    n,
    null,
    !1
  );
}
class $y {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Ue(
        this,
        "shopifyProductImage",
        t,
        Xe,
        ke,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: ke,
        defaultSelection: Xe
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await Ue(
          this,
          "shopifyProductImage",
          t,
          Xe,
          ke,
          r,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Xe
      }
    ), this.findMany = Object.assign(
      async (t) => await ue(
        this,
        "shopifyProductImages",
        Xe,
        "shopifyProductImage",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: ke,
        defaultSelection: Xe
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ue(
        this,
        "shopifyProductImages",
        Xe,
        ke,
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: ke,
        defaultSelection: Xe
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ue(
          this,
          "shopifyProductImages",
          Xe,
          ke,
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: ke,
        defaultSelection: Xe
      }
    ), this.create = Object.assign(
      Uy,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: ke,
        modelSelectionField: ke,
        isBulk: !1,
        defaultSelection: Xe,
        variables: {
          shopifyProductImage: {
            required: !1,
            type: "CreateShopifyProductImageInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkCreate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.create,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkCreateShopifyProductImages",
          Xe,
          "shopifyProductImage",
          "shopifyProductImages",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkCreate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifyProductImages",
        namespace: null,
        modelApiIdentifier: ke,
        modelSelectionField: "shopifyProductImages",
        isBulk: !0,
        defaultSelection: Xe,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkCreateShopifyProductImagesInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Fy,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: ke,
        modelSelectionField: ke,
        isBulk: !1,
        defaultSelection: Xe,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          shopifyProductImage: {
            required: !1,
            type: "UpdateShopifyProductImageInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkUpdate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.update,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkUpdateShopifyProductImages",
          Xe,
          "shopifyProductImage",
          "shopifyProductImages",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkUpdate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateShopifyProductImages",
        namespace: null,
        modelApiIdentifier: ke,
        modelSelectionField: "shopifyProductImages",
        isBulk: !0,
        defaultSelection: Xe,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkUpdateShopifyProductImagesInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Vy,
      {
        type: "action",
        operationName: "deleteShopifyProductImage",
        namespace: null,
        modelApiIdentifier: ke,
        modelSelectionField: ke,
        isBulk: !1,
        defaultSelection: null,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await M(
        this,
        "bulkDeleteShopifyProductImages",
        null,
        "shopifyProductImage",
        "shopifyProductImages",
        !0,
        {
          ids: {
            value: t,
            ...this.bulkDelete.variables.ids
          }
        },
        r,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyProductImages",
        namespace: null,
        modelApiIdentifier: ke,
        modelSelectionField: "shopifyProductImages",
        isBulk: !0,
        defaultSelection: null,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    );
  }
}
const Ze = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  name: !0,
  position: !0,
  state: !0,
  updatedAt: !0,
  values: !0
}, De = "shopifyProductOption";
async function Gy(e, n) {
  const t = q(
    this.create,
    void 0,
    e
  );
  return await M(
    this,
    "createShopifyProductOption",
    Ze,
    De,
    De,
    !1,
    {
      shopifyProductOption: {
        value: t.shopifyProductOption,
        required: !1,
        type: "CreateShopifyProductOptionInput"
      }
    },
    n,
    null,
    !1
  );
}
async function qy(e, n, t) {
  const r = q(
    this.update,
    e,
    n
  );
  return await M(
    this,
    "updateShopifyProductOption",
    Ze,
    De,
    De,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyProductOption: {
        value: r.shopifyProductOption,
        required: !1,
        type: "UpdateShopifyProductOptionInput"
      }
    },
    t,
    null,
    !1
  );
}
async function Wy(e, n) {
  return await M(
    this,
    "deleteShopifyProductOption",
    null,
    De,
    De,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    n,
    null,
    !1
  );
}
class Hy {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Ue(
        this,
        "shopifyProductOption",
        t,
        Ze,
        De,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: De,
        defaultSelection: Ze
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await Ue(
          this,
          "shopifyProductOption",
          t,
          Ze,
          De,
          r,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Ze
      }
    ), this.findMany = Object.assign(
      async (t) => await ue(
        this,
        "shopifyProductOptions",
        Ze,
        "shopifyProductOption",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: De,
        defaultSelection: Ze
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ue(
        this,
        "shopifyProductOptions",
        Ze,
        De,
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: De,
        defaultSelection: Ze
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ue(
          this,
          "shopifyProductOptions",
          Ze,
          De,
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: De,
        defaultSelection: Ze
      }
    ), this.create = Object.assign(
      Gy,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: De,
        modelSelectionField: De,
        isBulk: !1,
        defaultSelection: Ze,
        variables: {
          shopifyProductOption: {
            required: !1,
            type: "CreateShopifyProductOptionInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkCreate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.create,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkCreateShopifyProductOptions",
          Ze,
          "shopifyProductOption",
          "shopifyProductOptions",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkCreate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifyProductOptions",
        namespace: null,
        modelApiIdentifier: De,
        modelSelectionField: "shopifyProductOptions",
        isBulk: !0,
        defaultSelection: Ze,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkCreateShopifyProductOptionsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      qy,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: De,
        modelSelectionField: De,
        isBulk: !1,
        defaultSelection: Ze,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          shopifyProductOption: {
            required: !1,
            type: "UpdateShopifyProductOptionInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkUpdate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.update,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkUpdateShopifyProductOptions",
          Ze,
          "shopifyProductOption",
          "shopifyProductOptions",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkUpdate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateShopifyProductOptions",
        namespace: null,
        modelApiIdentifier: De,
        modelSelectionField: "shopifyProductOptions",
        isBulk: !0,
        defaultSelection: Ze,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkUpdateShopifyProductOptionsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Wy,
      {
        type: "action",
        operationName: "deleteShopifyProductOption",
        namespace: null,
        modelApiIdentifier: De,
        modelSelectionField: De,
        isBulk: !1,
        defaultSelection: null,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await M(
        this,
        "bulkDeleteShopifyProductOptions",
        null,
        "shopifyProductOption",
        "shopifyProductOptions",
        !0,
        {
          ids: {
            value: t,
            ...this.bulkDelete.variables.ids
          }
        },
        r,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyProductOptions",
        namespace: null,
        modelApiIdentifier: De,
        modelSelectionField: "shopifyProductOptions",
        isBulk: !0,
        defaultSelection: null,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    );
  }
}
const xe = {
  __typename: !0,
  barcode: !0,
  compareAtPrice: !0,
  createdAt: !0,
  fulfillmentService: !0,
  grams: !0,
  id: !0,
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
  state: !0,
  taxCode: !0,
  taxable: !0,
  title: !0,
  updatedAt: !0,
  weight: !0,
  weightUnit: !0
}, Be = "shopifyProductVariant";
async function zy(e, n) {
  const t = q(
    this.create,
    void 0,
    e
  );
  return await M(
    this,
    "createShopifyProductVariant",
    xe,
    Be,
    Be,
    !1,
    {
      shopifyProductVariant: {
        value: t.shopifyProductVariant,
        required: !1,
        type: "CreateShopifyProductVariantInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Qy(e, n, t) {
  const r = q(
    this.update,
    e,
    n
  );
  return await M(
    this,
    "updateShopifyProductVariant",
    xe,
    Be,
    Be,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyProductVariant: {
        value: r.shopifyProductVariant,
        required: !1,
        type: "UpdateShopifyProductVariantInput"
      }
    },
    t,
    null,
    !1
  );
}
async function Yy(e, n) {
  return await M(
    this,
    "deleteShopifyProductVariant",
    null,
    Be,
    Be,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    n,
    null,
    !1
  );
}
class Ky {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Ue(
        this,
        "shopifyProductVariant",
        t,
        xe,
        Be,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: Be,
        defaultSelection: xe
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await Ue(
          this,
          "shopifyProductVariant",
          t,
          xe,
          Be,
          r,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: xe
      }
    ), this.findMany = Object.assign(
      async (t) => await ue(
        this,
        "shopifyProductVariants",
        xe,
        "shopifyProductVariant",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: Be,
        defaultSelection: xe
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ue(
        this,
        "shopifyProductVariants",
        xe,
        Be,
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: Be,
        defaultSelection: xe
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ue(
          this,
          "shopifyProductVariants",
          xe,
          Be,
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: Be,
        defaultSelection: xe
      }
    ), this.create = Object.assign(
      zy,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: Be,
        modelSelectionField: Be,
        isBulk: !1,
        defaultSelection: xe,
        variables: {
          shopifyProductVariant: {
            required: !1,
            type: "CreateShopifyProductVariantInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkCreate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.create,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkCreateShopifyProductVariants",
          xe,
          "shopifyProductVariant",
          "shopifyProductVariants",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkCreate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifyProductVariants",
        namespace: null,
        modelApiIdentifier: Be,
        modelSelectionField: "shopifyProductVariants",
        isBulk: !0,
        defaultSelection: xe,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkCreateShopifyProductVariantsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Qy,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: Be,
        modelSelectionField: Be,
        isBulk: !1,
        defaultSelection: xe,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          shopifyProductVariant: {
            required: !1,
            type: "UpdateShopifyProductVariantInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkUpdate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.update,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkUpdateShopifyProductVariants",
          xe,
          "shopifyProductVariant",
          "shopifyProductVariants",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkUpdate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateShopifyProductVariants",
        namespace: null,
        modelApiIdentifier: Be,
        modelSelectionField: "shopifyProductVariants",
        isBulk: !0,
        defaultSelection: xe,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkUpdateShopifyProductVariantsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Yy,
      {
        type: "action",
        operationName: "deleteShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: Be,
        modelSelectionField: Be,
        isBulk: !1,
        defaultSelection: null,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await M(
        this,
        "bulkDeleteShopifyProductVariants",
        null,
        "shopifyProductVariant",
        "shopifyProductVariants",
        !0,
        {
          ids: {
            value: t,
            ...this.bulkDelete.variables.ids
          }
        },
        r,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyProductVariants",
        namespace: null,
        modelApiIdentifier: Be,
        modelSelectionField: "shopifyProductVariants",
        isBulk: !0,
        defaultSelection: null,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    );
  }
}
const Ae = {
  __typename: !0,
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
  id: !0,
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
  state: !0,
  taxShipping: !0,
  taxesIncluded: !0,
  timezone: !0,
  transactionalSmsDisabled: !0,
  updatedAt: !0,
  weightUnit: !0,
  zipCode: !0
}, ie = "shopifyShop";
async function Jy(e, n) {
  const t = q(
    this.create,
    void 0,
    e
  );
  return await M(
    this,
    "createShopifyShop",
    Ae,
    ie,
    ie,
    !1,
    {
      shopifyShop: {
        value: t.shopifyShop,
        required: !1,
        type: "CreateShopifyShopInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Xy(e, n, t) {
  const r = q(
    this.update,
    e,
    n
  );
  return await M(
    this,
    "updateShopifyShop",
    Ae,
    ie,
    ie,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyShop: {
        value: r.shopifyShop,
        required: !1,
        type: "UpdateShopifyShopInput"
      }
    },
    t,
    null,
    !1
  );
}
async function Zy(e, n) {
  return await M(
    this,
    "deleteShopifyShop",
    null,
    ie,
    ie,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    n,
    null,
    !1
  );
}
async function xy(e, n, t) {
  const r = q(
    this.uninstall,
    e,
    n
  );
  return await M(
    this,
    "uninstallShopifyShop",
    Ae,
    ie,
    ie,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyShop: {
        value: r.shopifyShop,
        required: !1,
        type: "UninstallShopifyShopInput"
      }
    },
    t,
    null,
    !1
  );
}
async function ev(e, n, t) {
  const r = q(
    this.reinstall,
    e,
    n
  );
  return await M(
    this,
    "reinstallShopifyShop",
    Ae,
    ie,
    ie,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyShop: {
        value: r.shopifyShop,
        required: !1,
        type: "ReinstallShopifyShopInput"
      }
    },
    t,
    null,
    !1
  );
}
class tv {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Ue(
        this,
        "shopifyShop",
        t,
        Ae,
        ie,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: ie,
        defaultSelection: Ae
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await Ue(
          this,
          "shopifyShop",
          t,
          Ae,
          ie,
          r,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: Ae
      }
    ), this.findMany = Object.assign(
      async (t) => await ue(
        this,
        "shopifyShops",
        Ae,
        "shopifyShop",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: ie,
        defaultSelection: Ae
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ue(
        this,
        "shopifyShops",
        Ae,
        ie,
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: ie,
        defaultSelection: Ae
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ue(
          this,
          "shopifyShops",
          Ae,
          ie,
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: ie,
        defaultSelection: Ae
      }
    ), this.create = Object.assign(
      Jy,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: ie,
        modelSelectionField: ie,
        isBulk: !1,
        defaultSelection: Ae,
        variables: {
          shopifyShop: {
            required: !1,
            type: "CreateShopifyShopInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkCreate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.create,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkCreateShopifyShops",
          Ae,
          "shopifyShop",
          "shopifyShops",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkCreate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifyShops",
        namespace: null,
        modelApiIdentifier: ie,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: Ae,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkCreateShopifyShopsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Xy,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: ie,
        modelSelectionField: ie,
        isBulk: !1,
        defaultSelection: Ae,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          shopifyShop: {
            required: !1,
            type: "UpdateShopifyShopInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkUpdate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.update,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkUpdateShopifyShops",
          Ae,
          "shopifyShop",
          "shopifyShops",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkUpdate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateShopifyShops",
        namespace: null,
        modelApiIdentifier: ie,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: Ae,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkUpdateShopifyShopsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Zy,
      {
        type: "action",
        operationName: "deleteShopifyShop",
        namespace: null,
        modelApiIdentifier: ie,
        modelSelectionField: ie,
        isBulk: !1,
        defaultSelection: null,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await M(
        this,
        "bulkDeleteShopifyShops",
        null,
        "shopifyShop",
        "shopifyShops",
        !0,
        {
          ids: {
            value: t,
            ...this.bulkDelete.variables.ids
          }
        },
        r,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyShops",
        namespace: null,
        modelApiIdentifier: ie,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: null,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.uninstall = Object.assign(
      xy,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: ie,
        modelSelectionField: ie,
        isBulk: !1,
        defaultSelection: Ae,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          shopifyShop: {
            required: !1,
            type: "UninstallShopifyShopInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkUninstall = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.uninstall,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkUninstallShopifyShops",
          Ae,
          "shopifyShop",
          "shopifyShops",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkUninstall.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUninstallShopifyShops",
        namespace: null,
        modelApiIdentifier: ie,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: Ae,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkUninstallShopifyShopsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.reinstall = Object.assign(
      ev,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: ie,
        modelSelectionField: ie,
        isBulk: !1,
        defaultSelection: Ae,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          shopifyShop: {
            required: !1,
            type: "ReinstallShopifyShopInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkReinstall = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.reinstall,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkReinstallShopifyShops",
          Ae,
          "shopifyShop",
          "shopifyShops",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkReinstall.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkReinstallShopifyShops",
        namespace: null,
        modelApiIdentifier: ie,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: Ae,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkReinstallShopifyShopsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    );
  }
}
const Ce = {
  __typename: !0,
  createdAt: !0,
  domain: !0,
  errorDetails: !0,
  errorMessage: !0,
  force: !0,
  id: !0,
  models: !0,
  state: !0,
  syncKey: !0,
  syncSince: !0,
  updatedAt: !0
}, Se = "shopifySync";
async function nv(e, n) {
  const t = q(
    this.run,
    void 0,
    e
  );
  return await M(
    this,
    "runShopifySync",
    Ce,
    Se,
    Se,
    !1,
    {
      shopifySync: {
        value: t.shopifySync,
        required: !1,
        type: "RunShopifySyncInput"
      },
      startReason: {
        value: t.startReason,
        required: !1,
        type: "String"
      }
    },
    n,
    null,
    !1
  );
}
async function rv(e, n, t) {
  const r = q(
    this.complete,
    e,
    n
  );
  return await M(
    this,
    "completeShopifySync",
    Ce,
    Se,
    Se,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifySync: {
        value: r.shopifySync,
        required: !1,
        type: "CompleteShopifySyncInput"
      }
    },
    t,
    null,
    !1
  );
}
async function iv(e, n, t) {
  const r = q(
    this.error,
    e,
    n
  );
  return await M(
    this,
    "errorShopifySync",
    Ce,
    Se,
    Se,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifySync: {
        value: r.shopifySync,
        required: !1,
        type: "ErrorShopifySyncInput"
      }
    },
    t,
    null,
    !1
  );
}
class av {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Ue(
        this,
        "shopifySync",
        t,
        Ce,
        Se,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: Se,
        defaultSelection: Ce
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await Ue(
          this,
          "shopifySync",
          t,
          Ce,
          Se,
          r,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Ce
      }
    ), this.findMany = Object.assign(
      async (t) => await ue(
        this,
        "shopifySyncs",
        Ce,
        "shopifySync",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: Se,
        defaultSelection: Ce
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ue(
        this,
        "shopifySyncs",
        Ce,
        Se,
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: Se,
        defaultSelection: Ce
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ue(
          this,
          "shopifySyncs",
          Ce,
          Se,
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: Se,
        defaultSelection: Ce
      }
    ), this.findById = Object.assign(
      async (t, r) => await Vi(
        this,
        "shopifySyncs",
        "id",
        t,
        Ce,
        Se,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: Se,
        defaultSelection: Ce
      }
    ), this.run = Object.assign(
      nv,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: Se,
        modelSelectionField: Se,
        isBulk: !1,
        defaultSelection: Ce,
        variables: {
          shopifySync: {
            required: !1,
            type: "RunShopifySyncInput"
          },
          startReason: {
            required: !1,
            type: "String"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkRun = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.run,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkRunShopifySyncs",
          Ce,
          "shopifySync",
          "shopifySyncs",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkRun.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkRunShopifySyncs",
        namespace: null,
        modelApiIdentifier: Se,
        modelSelectionField: "shopifySyncs",
        isBulk: !0,
        defaultSelection: Ce,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkRunShopifySyncsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.complete = Object.assign(
      rv,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: Se,
        modelSelectionField: Se,
        isBulk: !1,
        defaultSelection: Ce,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          shopifySync: {
            required: !1,
            type: "CompleteShopifySyncInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkComplete = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.complete,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkCompleteShopifySyncs",
          Ce,
          "shopifySync",
          "shopifySyncs",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkComplete.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCompleteShopifySyncs",
        namespace: null,
        modelApiIdentifier: Se,
        modelSelectionField: "shopifySyncs",
        isBulk: !0,
        defaultSelection: Ce,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkCompleteShopifySyncsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.error = Object.assign(
      iv,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: Se,
        modelSelectionField: Se,
        isBulk: !1,
        defaultSelection: Ce,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          shopifySync: {
            required: !1,
            type: "ErrorShopifySyncInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkError = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.error,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkErrorShopifySyncs",
          Ce,
          "shopifySync",
          "shopifySyncs",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkError.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkErrorShopifySyncs",
        namespace: null,
        modelApiIdentifier: Se,
        modelSelectionField: "shopifySyncs",
        isBulk: !0,
        defaultSelection: Ce,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkErrorShopifySyncsInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    );
  }
}
const He = {
  __typename: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  id: !0,
  updatedAt: !0
}, Ee = "ambiguous";
async function ov(e, n) {
  const t = q(
    this.create,
    void 0,
    e
  );
  return await M(
    this,
    "createAmbiguous",
    He,
    Ee,
    Ee,
    !1,
    {
      ambiguous: {
        value: t.ambiguous,
        required: !1,
        type: "CreateAmbiguousInput"
      }
    },
    n,
    null,
    !1
  );
}
async function uv(e, n, t) {
  const r = q(
    this.update,
    e,
    n
  );
  return await M(
    this,
    "updateAmbiguous",
    He,
    Ee,
    Ee,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      ambiguous: {
        value: r.ambiguous,
        required: !1,
        type: "UpdateAmbiguousInput"
      }
    },
    t,
    null,
    !1
  );
}
async function sv(e, n) {
  return await M(
    this,
    "deleteAmbiguous",
    null,
    Ee,
    Ee,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    n,
    null,
    !1
  );
}
class cv {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Ue(
        this,
        "ambiguous",
        t,
        He,
        Ee,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: Ee,
        defaultSelection: He
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await Ue(
          this,
          "ambiguous",
          t,
          He,
          Ee,
          r,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: He
      }
    ), this.findMany = Object.assign(
      async (t) => await ue(
        this,
        "ambiguouss",
        He,
        "ambiguous",
        t
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: Ee,
        defaultSelection: He
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ue(
        this,
        "ambiguouss",
        He,
        Ee,
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: Ee,
        defaultSelection: He
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ue(
          this,
          "ambiguouss",
          He,
          Ee,
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: Ee,
        defaultSelection: He
      }
    ), this.findById = Object.assign(
      async (t, r) => await Vi(
        this,
        "ambiguouss",
        "id",
        t,
        He,
        Ee,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: Ee,
        defaultSelection: He
      }
    ), this.create = Object.assign(
      ov,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: Ee,
        modelSelectionField: Ee,
        isBulk: !1,
        defaultSelection: He,
        variables: {
          ambiguous: {
            required: !1,
            type: "CreateAmbiguousInput"
          }
        },
        hasAmbiguousIdentifier: !0,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkCreate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.create,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkCreateAmbiguous",
          He,
          "ambiguous",
          "ambiguous",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkCreate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateAmbiguous",
        namespace: null,
        modelApiIdentifier: Ee,
        modelSelectionField: "ambiguous",
        isBulk: !0,
        defaultSelection: He,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkCreateAmbiguousInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      uv,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: Ee,
        modelSelectionField: Ee,
        isBulk: !1,
        defaultSelection: He,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          },
          ambiguous: {
            required: !1,
            type: "UpdateAmbiguousInput"
          }
        },
        hasAmbiguousIdentifier: !0,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.bulkUpdate = Object.assign(
      async (t, r) => {
        const i = t.map(
          (a) => q(
            this.update,
            void 0,
            a
          )
        );
        return await M(
          this,
          "bulkUpdateAmbiguous",
          He,
          "ambiguous",
          "ambiguous",
          !0,
          {
            inputs: {
              value: i,
              ...this.bulkUpdate.variables.inputs
            }
          },
          r,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateAmbiguous",
        namespace: null,
        modelApiIdentifier: Ee,
        modelSelectionField: "ambiguous",
        isBulk: !0,
        defaultSelection: He,
        variables: {
          inputs: {
            required: !0,
            type: "[BulkUpdateAmbiguousInput!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      sv,
      {
        type: "action",
        operationName: "deleteAmbiguous",
        namespace: null,
        modelApiIdentifier: Ee,
        modelSelectionField: Ee,
        isBulk: !1,
        defaultSelection: null,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await M(
        this,
        "bulkDeleteAmbiguous",
        null,
        "ambiguous",
        "ambiguous",
        !0,
        {
          ids: {
            value: t,
            ...this.bulkDelete.variables.ids
          }
        },
        r,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteAmbiguous",
        namespace: null,
        modelApiIdentifier: Ee,
        modelSelectionField: "ambiguous",
        isBulk: !0,
        defaultSelection: null,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    );
  }
}
const jn = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  roles: {
    key: !0,
    name: !0
  },
  shopifySID: !0,
  state: !0,
  updatedAt: !0
}, Ht = "session";
async function lv(e) {
  return await M(
    this,
    "logOut",
    jn,
    Ht,
    Ht,
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
async function fv(e, n) {
  const t = q(
    this.logInViaEmail,
    void 0,
    e
  );
  return await M(
    this,
    "logInViaEmail",
    jn,
    Ht,
    Ht,
    !1,
    {
      email: {
        value: t.email,
        required: !1,
        type: "String"
      },
      password: {
        value: t.password,
        required: !1,
        type: "String"
      }
    },
    n,
    "currentSession",
    !1
  );
}
class dv {
  constructor(n) {
    this.connection = n, this.get = Object.assign(
      async (t) => await Ue(
        this,
        "currentSession",
        void 0,
        jn,
        "session",
        t
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: jn
      }
    ), this.logOut = Object.assign(
      lv,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: Ht,
        modelSelectionField: Ht,
        isBulk: !1,
        defaultSelection: jn,
        variables: {},
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.logInViaEmail = Object.assign(
      fv,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: Ht,
        modelSelectionField: Ht,
        isBulk: !1,
        defaultSelection: jn,
        variables: {
          email: {
            required: !1,
            type: "String"
          },
          password: {
            required: !1,
            type: "String"
          }
        },
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    );
  }
}
var Rl;
const fa = "production", Yr = "development", pv = Symbol.for("gadget/modelRelationships"), hv = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
let yv = class {
  constructor(n) {
    var a;
    this.developmentApiRoot = "https://related-products-example.gadget.app/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this[Rl] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, unambiguous: {}, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {} }, this.globalShopifySync = Object.assign(
      async (o) => await Bs(
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
      async () => await Bs(
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
    })).gadgetMeta.directUploadToken;
    const t = (n == null ? void 0 : n.environment) ?? hv() ?? Yr;
    let r = t.toLocaleLowerCase();
    r != Yr && r != fa && (console.warn("Invalid environment", t, "defaulting to development"), r = Yr);
    const i = { ...n == null ? void 0 : n.exchanges };
    if (r === Yr) {
      const o = ({ forward: s }) => (y) => {
        const u = s(y);
        return fh(
          u,
          Mn((c) => {
            if (typeof window < "u" && typeof CustomEvent == "function") {
              const l = new CustomEvent("gadget:devharness:graphqlresult", { detail: c });
              window.dispatchEvent(l);
            }
            return c;
          })
        );
      };
      i.beforeAll = [
        o,
        ...i.beforeAll ?? []
      ];
    }
    if (this.connection = new Il({
      endpoint: new URL("api/graphql", r == fa ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (n == null ? void 0 : n.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...n,
      exchanges: i,
      environment: r == fa ? "Production" : "Development"
    }), typeof window < "u" && this.connection.authenticationMode == Ye.APIKey && !((a = n == null ? void 0 : n.authenticationMode) != null && a.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new Ay(this.connection), this.session = new Ey(this.connection), this.productPairing = new Cy(this.connection), this.unambiguous = new My(this.connection), this.shopifyProduct = new Ly(this.connection), this.shopifyProductImage = new $y(this.connection), this.shopifyProductOption = new Hy(this.connection), this.shopifyProductVariant = new Ky(this.connection), this.shopifyShop = new tv(this.connection), this.shopifySync = new av(this.connection), this.ambiguous = new cv(this.connection), this.currentSession = new dv(this.connection), this.internal = {
      user: new Et("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new Et("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new Et("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      unambiguous: new Et("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new Et("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new Et("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new Et("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new Et("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new Et("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new Et("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new Et("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(n, t, r) {
    const { data: i, error: a } = await this.connection.currentClient.query(n, t, r).toPromise();
    if (a)
      throw a;
    return i;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(n, t) {
    const { data: r, error: i } = await this.connection.currentClient.mutation(n, t).toPromise();
    if (i)
      throw i;
    return r;
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
  async fetch(n, t = {}) {
    return await this.connection.fetch(n, t);
  }
  toString() {
    return `GadgetAPIClient<${this.productionApiRoot}>`;
  }
  toJSON() {
    return this.toString();
  }
};
Rl = pv;
var Ml = {}, $i = Rt.createContext(Ml), vv = $i.Provider;
$i.Consumer;
$i.displayName = "UrqlContext";
var mv = () => {
  var e = Rt.useContext($i);
  if (e === Ml && process.env.NODE_ENV !== "production") {
    var n = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(n), new Error(n);
  }
  return e;
}, bv = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, gv = (e, n) => e === n || !(!e || !n || e.key !== n.key), da = (e, n) => {
  var t = {
    ...e,
    ...n,
    data: n.data !== void 0 || n.error ? n.data : e.data,
    fetching: !!n.fetching,
    stale: !!n.stale
  };
  return ((r, i) => {
    for (var a in r)
      if (!(a in i))
        return !0;
    for (var o in i)
      if (o === "operation" ? !gv(r[o], i[o]) : r[o] !== i[o])
        return !0;
    return !1;
  })(e, t) ? t : e;
}, _v = (e, n) => {
  for (var t = 0, r = n.length; t < r; t++)
    if (e[t] !== n[t])
      return !0;
  return !1;
}, pa = Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Ls(e, n) {
  process.env.NODE_ENV !== "production" && pa && pa.ReactCurrentOwner && pa.ReactCurrentOwner.current ? Promise.resolve(n).then(e) : e(n);
}
function Ov(e, n) {
  var t = Rt.useRef(void 0);
  return Rt.useMemo(() => {
    var r = ui(e, n);
    return t.current !== void 0 && t.current.key === r.key ? t.current : (t.current = r, r);
  }, [e, n]);
}
var Av = (e) => {
  if (!e._react) {
    var n = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Map();
    e.operations$ && fn((r) => {
      r.kind === "teardown" && n.has(r.key) && (n.delete(r.key), t.delete(r.key));
    })(e.operations$), e._react = {
      get: (r) => t.get(r),
      set(r, i) {
        n.delete(r), t.set(r, i);
      },
      dispose(r) {
        n.add(r);
      }
    };
  }
  return e._react;
}, Pv = (e, n) => e.suspense && (!n || n.suspense !== !1);
function Sv(e) {
  var n = mv(), t = Av(n), r = Pv(n, e.context), i = Ov(e.query, e.variables), a = Rt.useMemo(() => {
    if (e.pause)
      return null;
    var p = n.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return r ? Ln((h) => {
      t.set(i.key, h);
    })(p) : p;
  }, [t, n, i, r, e.pause, e.requestPolicy, e.context]), o = Rt.useCallback((p, h) => {
    if (!p)
      return {
        fetching: !1
      };
    var d = t.get(i.key);
    if (d) {
      if (h && d != null && "then" in d)
        throw d;
    } else {
      var f, v = fn((b) => {
        d = b, f && f(d);
      })(pl(() => h && !f || !d)(p));
      if (d == null && h) {
        var m = new Promise((b) => {
          f = b;
        });
        throw t.set(i.key, m), m;
      } else
        v.unsubscribe();
    }
    return d || {
      fetching: !0
    };
  }, [t, i]), s = [n, i, e.requestPolicy, e.context, e.pause], [y, u] = Rt.useState(() => [a, da(bv, o(a, r)), s]), c = y[1];
  a !== y[0] && _v(y[2], s) && u([a, c = da(y[1], o(a, r)), s]), Rt.useEffect(() => {
    var p = y[0], h = y[2][1], d = !1, f = (m) => {
      d = !0, Ls(u, (b) => {
        var O = da(b[1], m);
        return b[1] !== O ? [b[0], O, b[2]] : b;
      });
    };
    if (p) {
      var v = fn(f)(Bo(() => {
        f({
          fetching: !1
        });
      })(p));
      return d || f({
        fetching: !0
      }), () => {
        t.dispose(h.key), v.unsubscribe();
      };
    } else
      f({
        fetching: !1
      });
  }, [t, y[0], y[2][1]]);
  var l = Rt.useCallback((p) => {
    var h = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...p
    };
    Ls(u, (d) => [r ? Ln((f) => {
      t.set(i.key, f);
    })(n.executeQuery(i, h)) : n.executeQuery(i, h), d[1], s]);
  }, [n, t, i, r, o, e.requestPolicy, e.context]);
  return [c, l];
}
const kl = oe.createContext(void 0), Ev = oe.createContext(void 0), Tv = "/", Iv = "signOut", wv = "/";
function Cv(e) {
  let n, t;
  if ("api" in e) {
    if (!vd(e.api))
      throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    n = e.api, t = e.api.connection.currentClient;
  } else if (e.value)
    t = e.value;
  else
    throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
  t.suspense = !0;
  let r = Tv, i = Iv, a = wv;
  if ("auth" in e) {
    const { auth: o } = e;
    o != null && o.signInPath && (r = o.signInPath), o != null && o.signOutActionApiIdentifier && (i = o.signOutActionApiIdentifier), o != null && o.redirectOnSuccessfulSignInPath && (a = o.redirectOnSuccessfulSignInPath);
  }
  return oe.createElement(
    kl.Provider,
    { value: t },
    oe.createElement(
      Ev.Provider,
      { value: {
        api: n,
        navigate: e.navigate,
        auth: {
          signInPath: r,
          signOutActionApiIdentifier: i,
          redirectOnSuccessfulSignInPath: a
        }
      } },
      oe.createElement(vv, { value: t }, e.children)
    )
  );
}
const jv = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Nv = (e, n) => {
  let t = "";
  return e !== void 0 ? t = `[Network] ${e.message}` : n !== void 0 ? n.forEach((r) => {
    t += `[GraphQL] ${r.message}
`;
  }) : t = "Unknown error", t.trim();
}, Rv = (e) => typeof e == "string" ? new ae(e) : e != null && e.message && !e.code ? new ae(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class sn extends Error {
  /** @private */
  static forClientSideError(n, t) {
    return new sn({
      executionErrors: [n],
      response: t
    });
  }
  /** @private */
  static forErrorsResponse(n, t) {
    return new sn({
      executionErrors: n.map(Vo),
      response: t
    });
  }
  /** @private */
  static forMaybeCombinedError(n) {
    if (n)
      return new sn({
        networkError: n.networkError,
        executionErrors: n.graphQLErrors,
        response: n.response
      });
  }
  /** @private */
  static errorIfDataAbsent(n, t, r = !1) {
    const i = zh(n, t);
    let a = sn.forMaybeCombinedError(n.error);
    return !a && i && !r && (a = sn.forClientSideError(i)), a;
  }
  constructor({ networkError: n, executionErrors: t, response: r }) {
    const i = (t || []).map(Rv), a = Nv(n, i);
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
    }), this.message = a, this.executionErrors = i, this.graphQLErrors = i, this.networkError = n, this.response = r;
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
    const n = this.executionErrors.find((t) => t.code == "GGT_INVALID_RECORD");
    return (n == null ? void 0 : n.validationErrors) ?? null;
  }
}
const Mv = (e) => {
  const { context: n, suspense: t, ...r } = e ?? {}, i = li(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...r,
    context: i
  };
}, kv = (e, n) => ({
  query: e.query,
  variables: e.variables,
  ...n
}), Dl = (e) => {
  if (!Lc(kl))
    throw new Error(jv);
  const n = Mv(e);
  return Sv(n);
};
var Dv = typeof Element < "u", Bv = typeof Map == "function", Lv = typeof Set == "function", Uv = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function si(e, n) {
  if (e === n)
    return !0;
  if (e && n && typeof e == "object" && typeof n == "object") {
    if (e.constructor !== n.constructor)
      return !1;
    var t, r, i;
    if (Array.isArray(e)) {
      if (t = e.length, t != n.length)
        return !1;
      for (r = t; r-- !== 0; )
        if (!si(e[r], n[r]))
          return !1;
      return !0;
    }
    var a;
    if (Bv && e instanceof Map && n instanceof Map) {
      if (e.size !== n.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!n.has(r.value[0]))
          return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!si(r.value[1], n.get(r.value[0])))
          return !1;
      return !0;
    }
    if (Lv && e instanceof Set && n instanceof Set) {
      if (e.size !== n.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!n.has(r.value[0]))
          return !1;
      return !0;
    }
    if (Uv && ArrayBuffer.isView(e) && ArrayBuffer.isView(n)) {
      if (t = e.length, t != n.length)
        return !1;
      for (r = t; r-- !== 0; )
        if (e[r] !== n[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === n.source && e.flags === n.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof n.valueOf == "function")
      return e.valueOf() === n.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof n.toString == "function")
      return e.toString() === n.toString();
    if (i = Object.keys(e), t = i.length, t !== Object.keys(n).length)
      return !1;
    for (r = t; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, i[r]))
        return !1;
    if (Dv && e instanceof Element)
      return !1;
    for (r = t; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !si(e[i[r]], n[i[r]]))
        return !1;
    return !0;
  }
  return e !== e && n !== n;
}
var Fv = function(n, t) {
  try {
    return si(n, t);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Vv = /* @__PURE__ */ Fc(Fv), $v = (e) => {
  const n = fd();
  return e ? (n.current === void 0 || !Vv(e, n.current)) && (n.current = e) : n.current = void 0, n.current;
}, Gv = (e, n) => {
  const t = $v(n), r = li(() => Qo(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, t), [e, t]), [i, a] = Dl(kv(r, n));
  return [li(() => {
    const s = [e.findMany.operationName];
    let y = i.data;
    if (y) {
      const c = Vn(i.data, s);
      if (c) {
        const l = Or(i, c);
        y = $n.boot(e, l, c);
      }
    }
    const u = sn.errorIfDataAbsent(i, s, n == null ? void 0 : n.pause);
    return { ...i, data: y, error: u };
  }, [e, n == null ? void 0 : n.pause, i]), a];
};
var Bl = {}, jt = {};
Object.defineProperty(jt, "__esModule", { value: !0 });
var Ll = jt.AppBridgeContext = void 0, qv = oe;
Ll = jt.AppBridgeContext = qv.createContext(null);
var tt = {};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.useAppBridge = void 0;
var Wv = oe, Hv = jt;
function zv() {
  var e = Wv.useContext(Hv.AppBridgeContext);
  if (!e)
    throw new Error("No AppBridge context provided. Your component must be wrapped in the <Provider> component from App Bridge React.");
  return e;
}
tt.useAppBridge = zv;
var Ul = {}, Yo = {}, Ko = {}, Dt = {}, Jo = {}, mo = {}, se = {}, Xo = {};
Object.defineProperty(Xo, "__esModule", { value: !0 });
function Fl(e, n) {
  if (n == null || typeof e > "u" || !Object.prototype.isPrototypeOf.call(Object.getPrototypeOf(e), n) || n.constructor.name !== "Object" && n.constructor.name !== "Array")
    return n;
  var t = {};
  return Object.keys(n).forEach(function(r) {
    var i = Object.prototype.hasOwnProperty.call(e, r);
    i && typeof e[r] == "object" && !Array.isArray(e[r]) ? t[r] = Fl(e[r], n[r]) : t[r] = n[r];
  }), Object.keys(e).forEach(function(r) {
    var i = Object.prototype.hasOwnProperty.call(n, r);
    i || (t[r] = e[r]);
  }), Object.setPrototypeOf(t, Object.getPrototypeOf(e)), t;
}
Xo.default = Fl;
var dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.SEPARATOR = dn.PREFIX = void 0;
dn.PREFIX = "APP";
dn.SEPARATOR = "::";
var le = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ComponentType = e.Group = void 0, function(n) {
    n.AuthCode = "AuthCode", n.Button = "Button", n.ButtonGroup = "ButtonGroup", n.Cart = "Cart", n.Client = "Client", n.ContextualSaveBar = "ContextualSaveBar", n.Error = "Error", n.Features = "Features", n.FeedbackModal = "FeedbackModal", n.Fullscreen = "Fullscreen", n.LeaveConfirmation = "LeaveConfirmation", n.Link = "Link", n.Loading = "Loading", n.Menu = "Menu", n.Modal = "Modal", n.Navigation = "Navigation", n.Performance = "Performance", n.Pos = "Pos", n.Print = "Print", n.ResourcePicker = "Resource_Picker", n.unstable_Picker = "unstable_Picker", n.Scanner = "Scanner", n.SessionToken = "SessionToken", n.Share = "Share", n.TitleBar = "TitleBar", n.Toast = "Toast", n.MarketingExternalActivityTopBar = "MarketingExternalActivityTopBar", n.WebVitals = "WebVitals";
  }(e.Group || (e.Group = {})), function(n) {
    n.Button = "Button", n.ButtonGroup = "ButtonGroup";
  }(e.ComponentType || (e.ComponentType = {}));
})(le);
(function(e) {
  var n = g && g.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.updateActionFromPayload = e.isValidOptionalString = e.isValidOptionalNumber = e.forEachInEnum = e.getMergedProps = e.findMatchInEnum = e.getEventNameSpace = e.NonSnakeCaseGroup = e.actionWrapper = void 0;
  var t = n(Xo), r = dn, i = le;
  function a(f) {
    return f;
  }
  e.actionWrapper = a, e.NonSnakeCaseGroup = [
    i.Group.AuthCode,
    i.Group.Button,
    i.Group.ButtonGroup,
    i.Group.Cart,
    i.Group.Error,
    i.Group.Features,
    i.Group.Fullscreen,
    i.Group.Link,
    i.Group.Loading,
    i.Group.Menu,
    i.Group.Modal,
    i.Group.Navigation,
    i.Group.Pos,
    i.Group.Print,
    i.Group.ResourcePicker,
    i.Group.Scanner,
    i.Group.SessionToken,
    i.Group.Share,
    i.Group.TitleBar,
    i.Group.Toast,
    i.Group.unstable_Picker
  ];
  function o(f) {
    return f.replace(/([A-Z])/g, function(v, m, b) {
      return (b === 0 ? "" : "_") + v[0].toLowerCase();
    });
  }
  function s(f) {
    return e.NonSnakeCaseGroup.includes(f) ? f.toUpperCase() : o(f).toUpperCase();
  }
  function y(f, v, m) {
    if (v.startsWith("" + r.PREFIX + r.SEPARATOR))
      return v;
    var b = s(f);
    if (m) {
      var O = m.subgroups, _ = m.type;
      O && O.length > 0 && (b += b.length > 0 ? r.SEPARATOR : "", O.forEach(function(T, P) {
        b += "" + T.toUpperCase() + (P < O.length - 1 ? r.SEPARATOR : "");
      })), _ !== f && _ && (b += "" + (b.length > 0 ? r.SEPARATOR : "") + _.toUpperCase());
    }
    return b && (b += "" + (b.length > 0 ? r.SEPARATOR : "") + v.toUpperCase()), "" + r.PREFIX + r.SEPARATOR + b;
  }
  e.getEventNameSpace = y;
  function u(f, v) {
    var m = Object.keys(f).find(function(b) {
      return v === f[b];
    });
    return m ? f[m] : void 0;
  }
  e.findMatchInEnum = u;
  function c(f, v) {
    var m = t.default(f, v);
    if (!m) {
      var b = Object.assign(f, v);
      return b;
    }
    return m;
  }
  e.getMergedProps = c;
  function l(f, v) {
    Object.keys(f).forEach(function(m) {
      v(f[m]);
    });
  }
  e.forEachInEnum = l;
  function p(f) {
    return f == null || typeof f == "number";
  }
  e.isValidOptionalNumber = p;
  function h(f) {
    return f == null || typeof f == "string";
  }
  e.isValidOptionalString = h;
  function d(f, v) {
    var m = f.id;
    return m === v.id ? (Object.assign(f, c(f, v)), !0) : !1;
  }
  e.updateActionFromPayload = d;
})(se);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.Action = void 0;
  var n = se, t = le, r;
  (function(a) {
    a.REQUEST = "APP::AUTH_CODE::REQUEST", a.RESPOND = "APP::AUTH_CODE::RESPOND";
  })(r = e.Action || (e.Action = {}));
  function i(a) {
    return n.actionWrapper({
      payload: a,
      group: t.Group.AuthCode,
      type: r.RESPOND
    });
  }
  e.respond = i;
})(mo);
var Xt = {};
const Qv = "@shopify/app-bridge", Yv = "3.7.7", Kv = "index.d.ts", Jv = "index.js", Xv = "umd/index.js", Zv = "umd/index.js", xv = [
  "/actions/",
  "/client/",
  "/umd/",
  "/utilities/",
  "/util/",
  "/validate/",
  "/development.d.ts",
  "/development.js",
  "/index.d.ts",
  "/index.js",
  "/MessageTransport.d.ts",
  "/MessageTransport.js",
  "/production.d.ts",
  "/production.js"
], em = {
  access: "public",
  "@shopify:registry": "https://registry.npmjs.org"
}, tm = "git@github.com:Shopify/app-bridge.git", nm = "https://shopify.dev/tools/app-bridge", rm = "Shopify Inc.", im = "MIT", am = {
  build: "yarn build:tsc && yarn build:npm && yarn build:umd",
  "build:tsc": "NODE_ENV=production tsc",
  "build:umd": "NODE_ENV=production webpack -p",
  "build:npm": "shx cp -r ./npm/index.js ./index.js",
  check: "tsc",
  clean: "yarn clean:tsc && yarn clean:npm && yarn clean:umd",
  "clean:tsc": "NODE_ENV=production tsc --build --clean",
  "clean:umd": "rm -rf ./umd",
  "clean:npm": "rm -rf ./index.js",
  pack: "yarn pack",
  size: "size-limit"
}, om = !1, um = {
  "@shopify/app-bridge-core": "1.0.2",
  base64url: "^3.0.1",
  "web-vitals": "^3.0.1"
}, sm = {
  "@types/node": "^10.12.5",
  shx: "^0.3.3"
}, cm = {
  name: Qv,
  version: Yv,
  types: Kv,
  main: Jv,
  unpkg: Xv,
  jsdelivr: Zv,
  files: xv,
  private: !1,
  publishConfig: em,
  repository: tm,
  homepage: nm,
  author: rm,
  license: im,
  scripts: am,
  sideEffects: om,
  "size-limit": [
    {
      limit: "10.5 KB",
      path: "production.js"
    }
  ],
  dependencies: um,
  devDependencies: sm
};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getPackageName = e.getVersion = e.getMergedProps = e.updateActionFromPayload = e.isValidOptionalString = e.isValidOptionalNumber = e.NonSnakeCaseGroup = e.getEventNameSpace = e.forEachInEnum = e.findMatchInEnum = e.actionWrapper = void 0;
  var n = se;
  Object.defineProperty(e, "actionWrapper", { enumerable: !0, get: function() {
    return n.actionWrapper;
  } }), Object.defineProperty(e, "findMatchInEnum", { enumerable: !0, get: function() {
    return n.findMatchInEnum;
  } }), Object.defineProperty(e, "forEachInEnum", { enumerable: !0, get: function() {
    return n.forEachInEnum;
  } }), Object.defineProperty(e, "getEventNameSpace", { enumerable: !0, get: function() {
    return n.getEventNameSpace;
  } }), Object.defineProperty(e, "NonSnakeCaseGroup", { enumerable: !0, get: function() {
    return n.NonSnakeCaseGroup;
  } }), Object.defineProperty(e, "isValidOptionalNumber", { enumerable: !0, get: function() {
    return n.isValidOptionalNumber;
  } }), Object.defineProperty(e, "isValidOptionalString", { enumerable: !0, get: function() {
    return n.isValidOptionalString;
  } }), Object.defineProperty(e, "updateActionFromPayload", { enumerable: !0, get: function() {
    return n.updateActionFromPayload;
  } }), Object.defineProperty(e, "getMergedProps", { enumerable: !0, get: function() {
    return n.getMergedProps;
  } });
  var t = cm;
  function r() {
    return t.version;
  }
  e.getVersion = r;
  function i() {
    return t.name;
  }
  e.getPackageName = i;
})(Xt);
var Zt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ComponentType = e.Group = void 0;
  var n = le;
  Object.defineProperty(e, "Group", { enumerable: !0, get: function() {
    return n.Group;
  } }), Object.defineProperty(e, "ComponentType", { enumerable: !0, get: function() {
    return n.ComponentType;
  } });
})(Zt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.request = e.Action = e.respond = void 0;
  var n = mo;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
  var t = Xt, r = Zt, i = mo;
  Object.defineProperty(e, "respond", { enumerable: !0, get: function() {
    return i.respond;
  } });
  function a(o) {
    return t.actionWrapper({
      group: r.Group.AuthCode,
      type: n.Action.REQUEST,
      payload: { id: o }
    });
  }
  e.request = a;
})(Jo);
var kr = {}, Gt = {}, de = {}, Gn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LifecycleHook = e.PermissionType = e.MessageType = void 0, function(n) {
    n.GetState = "getState", n.Dispatch = "dispatch", n.Subscribe = "subscribe", n.Unsubscribe = "unsubscribe";
  }(e.MessageType || (e.MessageType = {})), function(n) {
    n.Dispatch = "Dispatch", n.Subscribe = "Subscribe";
  }(e.PermissionType || (e.PermissionType = {})), function(n) {
    n.UpdateAction = "UpdateAction", n.DispatchAction = "DispatchAction";
  }(e.LifecycleHook || (e.LifecycleHook = {}));
})(Gn);
var Kt = {};
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.removeFromCollection = Kt.addAndRemoveFromCollection = void 0;
function lm(e, n, t) {
  return e.push(n), function() {
    return Vl(e, n, t);
  };
}
Kt.addAndRemoveFromCollection = lm;
function Vl(e, n, t) {
  var r = e.findIndex(function(i) {
    return i === n;
  });
  return r >= 0 ? (e.splice(r, 1), t && t(n), !0) : !1;
}
Kt.removeFromCollection = Vl;
var Ar = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.permissionAction = e.isErrorEventName = e.throwError = e.invalidOriginAction = e.fromAction = e.AppBridgeError = e.AppActionType = e.Action = void 0;
  var n = le, t = se, r;
  (function(l) {
    l.INVALID_ACTION = "APP::ERROR::INVALID_ACTION", l.INVALID_ACTION_TYPE = "APP::ERROR::INVALID_ACTION_TYPE", l.INVALID_PAYLOAD = "APP::ERROR::INVALID_PAYLOAD", l.INVALID_OPTIONS = "APP::ERROR::INVALID_OPTIONS", l.UNEXPECTED_ACTION = "APP::ERROR::UNEXPECTED_ACTION", l.PERSISTENCE = "APP::ERROR::PERSISTENCE", l.UNSUPPORTED_OPERATION = "APP::ERROR::UNSUPPORTED_OPERATION", l.NETWORK = "APP::ERROR::NETWORK", l.PERMISSION = "APP::ERROR::PERMISSION", l.FAILED_AUTHENTICATION = "APP::ERROR::FAILED_AUTHENTICATION", l.INVALID_ORIGIN = "APP::ERROR::INVALID_ORIGIN";
  })(r = e.Action || (e.Action = {})), function(l) {
    l.INVALID_CONFIG = "APP::ERROR::INVALID_CONFIG", l.MISSING_CONFIG = "APP::APP_ERROR::MISSING_CONFIG", l.MISSING_APP_BRIDGE_MIDDLEWARE = "APP::APP_ERROR::MISSING_APP_BRIDGE_MIDDLEWARE", l.WINDOW_UNDEFINED = "APP::APP_ERROR::WINDOW_UNDEFINED", l.REDUX_REINSTANTIATED = "APP::APP_ERROR::REDUX_REINSTANTIATED", l.MISSING_LOCAL_ORIGIN = "APP::APP_ERROR::MISSING_LOCAL_ORIGIN", l.MISSING_HOST_PROVIDER = "APP::APP_ERROR::MISSING_HOST_PROVIDER", l.MISSING_ROUTER_CONTEXT = "APP::APP_ERROR::MISSING_ROUTER_CONTEXT", l.MISSING_HISTORY_BLOCK = "APP::APP_ERROR::MISSING_HISTORY_BLOCK";
  }(e.AppActionType || (e.AppActionType = {}));
  var i = (
    /** @class */
    function() {
      function l(p) {
        this.name = "AppBridgeError", this.message = p, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(this.message).stack;
      }
      return l;
    }()
  );
  e.AppBridgeError = i, i.prototype = Object.create(Error.prototype);
  function a(l, p, h) {
    var d = l ? p + ": " + l : p, f = new i(d);
    return f.action = h, f.type = p, f;
  }
  e.fromAction = a;
  function o(l) {
    return t.actionWrapper({
      group: n.Group.Error,
      payload: {
        message: l,
        type: r.INVALID_ORIGIN
      },
      type: r.INVALID_ORIGIN
    });
  }
  e.invalidOriginAction = o;
  function s() {
    for (var l = [], p = 0; p < arguments.length; p++)
      l[p] = arguments[p];
    var h = l[0], d, f;
    throw typeof l[1] == "string" ? d = l[1] : (f = l[1], d = l[2] || ""), a(d, h, f);
  }
  e.throwError = s;
  function y(l) {
    var p = t.findMatchInEnum(r, l);
    return typeof p == "string";
  }
  e.isErrorEventName = y;
  function u(l, p, h) {
    var d = p.payload;
    return t.actionWrapper({
      type: l,
      group: n.Group.Error,
      payload: {
        action: p,
        message: h,
        type: l,
        id: d && d.id ? d.id : void 0
      }
    });
  }
  function c(l, p) {
    return u(r.PERMISSION, l, p || "Action is not permitted");
  }
  e.permissionAction = c;
})(Ar);
var Zn = {};
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.generateUuid = void 0;
function An(e) {
  return Array.from(e).map(function(n) {
    return ("00" + n.toString(16)).slice(-2);
  }).join("");
}
function Pn(e) {
  if (typeof Uint8Array == "function" && typeof window == "object" && window.crypto) {
    var n = new Uint8Array(e), t = window.crypto.getRandomValues(n);
    if (t)
      return t;
  }
  return Array.from(new Array(e), function() {
    return Math.random() * 255 | 0;
  });
}
function $l() {
  var e = 64, n = Pn(1), t = Pn(2);
  return n[0] &= 191, t[0] &= 15 | e, [
    // time-low
    An(Pn(4)),
    "-",
    // time-mid
    An(Pn(2)),
    "-",
    // time-high-and-version
    An(t),
    "-",
    // clock-seq-and-reserved
    An(n),
    // clock-seq-loq
    An(Pn(1)),
    "-",
    // node
    An(Pn(6))
  ].join("");
}
Zn.generateUuid = $l;
Zn.default = $l;
var fm = g && g.__extends || function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(n, t);
  };
  return function(n, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(n, t);
    function r() {
      this.constructor = n;
    }
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), gi = g && g.__assign || function() {
  return gi = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, gi.apply(this, arguments);
}, dm = g && g.__spreadArray || function(e, n) {
  for (var t = 0, r = n.length, i = e.length; t < r; t++, i++)
    e[i] = n[t];
  return e;
}, pm = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(de, "__esModule", { value: !0 });
de.unsubscribeActions = de.ActionSetWithChildren = de.ActionSet = void 0;
var hm = Gn, bo = Kt, Kr = Ar, ym = le, vm = pm(Zn), ha = se, Gl = (
  /** @class */
  function() {
    function e(n, t, r, i) {
      var a = this;
      this.app = n, this.type = t, this.group = r, this.subgroups = [], this.subscriptions = [], n || Kr.throwError(Kr.Action.INVALID_ACTION, "Missing required `app`"), this.id = i || vm.default(), this.defaultGroup = r;
      var o = this.set;
      this.set = function() {
        for (var s, y = [], u = 0; u < arguments.length; u++)
          y[u] = arguments[u];
        return a.app.hooks ? (s = a.app.hooks).run.apply(s, dm([hm.LifecycleHook.UpdateAction, o, a], y)) : o.apply(a, y);
      };
    }
    return e.prototype.set = function() {
    }, Object.defineProperty(e.prototype, "component", {
      get: function() {
        return {
          id: this.id,
          subgroups: this.subgroups,
          type: this.type
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.updateSubscription = function(n, t, r) {
      var i = n.eventType, a = n.callback, o = n.component, s;
      return s = this.subscriptions.findIndex(function(y) {
        return y === n;
      }), s >= 0 ? this.subscriptions[s].unsubscribe() : s = void 0, this.group = t, this.subgroups = r, Object.assign(o, { subgroups: this.subgroups }), this.subscribe(i, a, o, s);
    }, e.prototype.error = function(n) {
      var t = this, r = [];
      return ha.forEachInEnum(Kr.Action, function(i) {
        r.push(t.subscriptions.length), t.subscribe(i, n);
      }), function() {
        var i = r.map(function(a) {
          return t.subscriptions[a];
        });
        i.forEach(function(a) {
          bo.removeFromCollection(t.subscriptions, a, function(o) {
            o.unsubscribe();
          });
        });
      };
    }, e.prototype.subscribe = function(n, t, r, i) {
      var a = this, o = r || this.component, s = n.toUpperCase(), y = typeof i == "number" ? t : t.bind(this), u;
      Kr.isErrorEventName(n) ? u = ha.getEventNameSpace(ym.Group.Error, n, gi(gi({}, o), { type: "" })) : u = ha.getEventNameSpace(this.group, n, o);
      var c = this.app.subscribe(u, y, r ? r.id : this.id), l = {
        eventType: s,
        unsubscribe: c,
        callback: y,
        component: o,
        updateSubscribe: function(p, h) {
          return a.updateSubscription(l, p, h);
        }
      };
      return typeof i == "number" && i >= 0 && i < this.subscriptions.length ? this.subscriptions[i] = l : this.subscriptions.push(l), c;
    }, e.prototype.unsubscribe = function(n) {
      return n === void 0 && (n = !1), Zo(this.subscriptions, this.defaultGroup, n), this;
    }, e;
  }()
);
de.ActionSet = Gl;
var mm = (
  /** @class */
  function(e) {
    fm(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.children = [], t;
    }
    return n.prototype.unsubscribe = function(t, r) {
      return t === void 0 && (t = !0), r === void 0 && (r = !1), Zo(this.subscriptions, this.defaultGroup, r), this.children.forEach(function(i) {
        i instanceof n ? i.unsubscribe(t, !t) : i.unsubscribe(!t);
      }), this;
    }, n.prototype.getChild = function(t) {
      var r = this.children.findIndex(function(i) {
        return i.id === t;
      });
      return r >= 0 ? this.children[r] : void 0;
    }, n.prototype.getChildIndex = function(t) {
      return this.children.findIndex(function(r) {
        return r.id === t;
      });
    }, n.prototype.getChildSubscriptions = function(t, r) {
      return this.subscriptions.filter(function(i) {
        return i.component.id === t && (!r || r === i.eventType);
      });
    }, n.prototype.addChild = function(t, r, i) {
      var a = this, o = t.subscriptions, s = this.getChild(t.id);
      return s || this.children.push(t), !o || r === t.group && i === t.subgroups ? this : (o.forEach(function(y) {
        var u = y.updateSubscribe;
        u(r, i);
      }), Object.assign(t, { group: r, subgroups: i }), t instanceof n && t.children.forEach(function(y) {
        return a.addChild(y, r, i);
      }), this);
    }, n.prototype.removeChild = function(t) {
      var r = this;
      return bo.removeFromCollection(this.children, this.getChild(t), function() {
        var i = r.subscriptions.filter(function(a) {
          return a.component.id === t;
        });
        i.forEach(function(a) {
          bo.removeFromCollection(r.subscriptions, a, function(o) {
            o.unsubscribe();
          });
        });
      }), this;
    }, n.prototype.subscribeToChild = function(t, r, i) {
      var a = this, o = i.bind(this);
      if (r instanceof Array)
        return r.forEach(function(c) {
          return a.subscribeToChild(t, c, i);
        }), this;
      if (typeof r != "string")
        return this;
      var s = r.toUpperCase(), y = this.getChildSubscriptions(t.id, s);
      if (y.length > 0)
        y.forEach(function(c) {
          return c.updateSubscribe(a.group, t.subgroups);
        });
      else {
        var u = {
          id: t.id,
          subgroups: t.subgroups,
          type: t.type
        };
        this.subscribe(s, o, u);
      }
      return this;
    }, n.prototype.getUpdatedChildActions = function(t, r) {
      if (t.length === 0) {
        for (; r.length > 0; ) {
          var i = r.pop();
          if (!i)
            break;
          this.removeChild(i.id);
        }
        return;
      }
      for (var a = t.filter(function(y, u, c) {
        return u === c.indexOf(y);
      }), o = a.map(function(y) {
        return y.id;
      }), s = r.filter(function(y) {
        return o.indexOf(y.id) < 0;
      }); s.length > 0; ) {
        var i = s.pop();
        if (!i)
          break;
        this.removeChild(i.id);
      }
      return a;
    }, n;
  }(Gl)
);
de.ActionSetWithChildren = mm;
function Zo(e, n, t) {
  t === void 0 && (t = !1), e.forEach(function(r) {
    if (t) {
      var i = r.updateSubscribe;
      i(n, []);
    } else {
      var a = r.unsubscribe;
      a();
    }
  }), t || (e.length = 0);
}
de.unsubscribeActions = Zo;
(function(e) {
  var n = g && g.__extends || function() {
    var c = function(l, p) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, d) {
        h.__proto__ = d;
      } || function(h, d) {
        for (var f in d)
          Object.prototype.hasOwnProperty.call(d, f) && (h[f] = d[f]);
      }, c(l, p);
    };
    return function(l, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      c(l, p);
      function h() {
        this.constructor = l;
      }
      l.prototype = p === null ? Object.create(p) : (h.prototype = p.prototype, new h());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(c) {
      for (var l, p = 1, h = arguments.length; p < h; p++) {
        l = arguments[p];
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && (c[d] = l[d]);
      }
      return c;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Button = e.update = e.clickButton = e.Style = e.Icon = e.Action = void 0;
  var r = se, i = de, a = le, o;
  (function(c) {
    c.CLICK = "CLICK", c.UPDATE = "UPDATE";
  })(o = e.Action || (e.Action = {})), function(c) {
    c.Print = "print";
  }(e.Icon || (e.Icon = {})), function(c) {
    c.Danger = "danger";
  }(e.Style || (e.Style = {}));
  function s(c, l, p) {
    var h = l.id, d = r.getEventNameSpace(c, o.CLICK, l), f = {
      id: h,
      payload: p
    };
    return r.actionWrapper({ type: d, group: c, payload: f });
  }
  e.clickButton = s;
  function y(c, l, p) {
    var h = l.id, d = p.label, f = r.getEventNameSpace(c, o.UPDATE, l), v = t(t({}, p), { id: h, label: d });
    return r.actionWrapper({ type: f, group: c, payload: v });
  }
  e.update = y;
  var u = (
    /** @class */
    function(c) {
      n(l, c);
      function l(p, h) {
        var d = c.call(this, p, a.ComponentType.Button, a.Group.Button) || this;
        return d.disabled = !1, d.loading = !1, d.plain = !1, d.set(h, !1), d;
      }
      return Object.defineProperty(l.prototype, "options", {
        get: function() {
          return {
            disabled: this.disabled,
            icon: this.icon,
            label: this.label,
            style: this.style,
            loading: this.loading,
            plain: this.plain
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(l.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), l.prototype.set = function(p, h) {
        h === void 0 && (h = !0);
        var d = r.getMergedProps(this.options, p), f = d.label, v = d.disabled, m = d.icon, b = d.style, O = d.loading, _ = d.plain;
        return this.label = f, this.disabled = !!v, this.icon = m, this.style = b, this.loading = !!O, this.plain = !!_, h && this.dispatch(o.UPDATE), this;
      }, l.prototype.dispatch = function(p, h) {
        switch (p) {
          case o.CLICK:
            this.app.dispatch(s(this.group, this.component, h));
            break;
          case o.UPDATE: {
            var d = y(this.group, this.component, this.payload);
            this.app.dispatch(d);
            break;
          }
        }
        return this;
      }, l;
    }(i.ActionSet)
  );
  e.Button = u;
})(Gt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.isValidButtonProps = e.Button = e.update = e.Style = e.Icon = e.clickButton = e.Action = void 0;
  var n = Gt;
  Object.defineProperty(e, "Button", { enumerable: !0, get: function() {
    return n.Button;
  } });
  var t = Gt;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "clickButton", { enumerable: !0, get: function() {
    return t.clickButton;
  } }), Object.defineProperty(e, "Icon", { enumerable: !0, get: function() {
    return t.Icon;
  } }), Object.defineProperty(e, "Style", { enumerable: !0, get: function() {
    return t.Style;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  function r(a) {
    return typeof a.id == "string" && typeof a.label == "string";
  }
  e.isValidButtonProps = r;
  function i(a, o) {
    return new n.Button(a, o);
  }
  e.create = i;
})(kr);
var Gi = {}, pn = {}, yn = {};
Object.defineProperty(yn, "__esModule", { value: !0 });
yn.getSingleButton = void 0;
var bm = Gt;
function gm(e, n, t, r) {
  return e.addChild(n, e.group, t), e.subscribeToChild(n, bm.Action.UPDATE, r), n.payload;
}
yn.getSingleButton = gm;
(function(e) {
  var n = g && g.__extends || function() {
    var d = function(f, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, b) {
        m.__proto__ = b;
      } || function(m, b) {
        for (var O in b)
          Object.prototype.hasOwnProperty.call(b, O) && (m[O] = b[O]);
      }, d(f, v);
    };
    return function(f, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      d(f, v);
      function m() {
        this.constructor = f;
      }
      f.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(d) {
      for (var f, v = 1, m = arguments.length; v < m; v++) {
        f = arguments[v];
        for (var b in f)
          Object.prototype.hasOwnProperty.call(f, b) && (d[b] = f[b]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ButtonGroup = e.isGroupedButtonPayload = e.isGroupedButton = e.update = e.Action = void 0;
  var r = yn, i = se, a = de, o = le, s;
  (function(d) {
    d.UPDATE = "UPDATE";
  })(s = e.Action || (e.Action = {}));
  function y(d, f, v) {
    return h(d, f, s.UPDATE, v);
  }
  e.update = y;
  function u(d) {
    var f = d;
    return f.buttons && f.buttons.length > 0 && f.label !== void 0;
  }
  e.isGroupedButton = u;
  function c(d) {
    var f = d;
    return Array.isArray(f.buttons) && typeof f.id == "string" && typeof f.label == "string";
  }
  e.isGroupedButtonPayload = c;
  var l = (
    /** @class */
    function(d) {
      n(f, d);
      function f(v, m) {
        var b = d.call(this, v, o.ComponentType.ButtonGroup, o.Group.ButtonGroup) || this;
        return b.disabled = !1, b.plain = !1, b.buttonsOptions = [], b.buttons = [], b.set(m, !1), b;
      }
      return Object.defineProperty(f.prototype, "options", {
        get: function() {
          return {
            buttons: this.buttonsOptions,
            disabled: this.disabled,
            label: this.label,
            plain: this.plain
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), f.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var b = i.getMergedProps(this.options, v), O = b.label, _ = b.disabled, T = b.buttons, P = b.plain;
        return this.label = O, this.disabled = !!_, this.buttons = this.getButtons(T), this.plain = !!P, m && this.dispatch(s.UPDATE), this;
      }, f.prototype.dispatch = function(v) {
        switch (v) {
          case s.UPDATE: {
            var m = y(this.group, this.component, this.payload);
            this.app.dispatch(m);
            break;
          }
        }
        return this;
      }, f.prototype.updateButtons = function(v) {
        if (!(!this.buttons || this.buttons.length === 0)) {
          for (var m, b = 0, O = this.buttons; b < O.length; b++) {
            var _ = O[b];
            if (m = i.updateActionFromPayload(_, v), m)
              break;
          }
          m && this.dispatch(s.UPDATE);
        }
      }, f.prototype.getSingleButton = function(v) {
        return r.getSingleButton(this, v, this.subgroups, this.updateButtons);
      }, f.prototype.getButtons = function(v) {
        var m = this, b = [];
        return v ? (v.forEach(function(O) {
          var _ = r.getSingleButton(m, O, m.subgroups, m.updateButtons);
          b.push(_);
        }), this.buttonsOptions = v, b) : [];
      }, f;
    }(a.ActionSetWithChildren)
  );
  e.ButtonGroup = l;
  function p(d, f) {
    return new l(d, f);
  }
  e.create = p;
  function h(d, f, v, m, b) {
    var O = f.id, _ = m.label, T = i.getEventNameSpace(d, v, f), P = t(t({}, m), { id: O, label: _, payload: b });
    return i.actionWrapper({ type: T, group: d, payload: P });
  }
})(pn);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ButtonGroup = e.isGroupedButtonPayload = e.isGroupedButton = e.update = e.Action = void 0;
  var n = pn;
  Object.defineProperty(e, "ButtonGroup", { enumerable: !0, get: function() {
    return n.ButtonGroup;
  } });
  var t = pn;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } }), Object.defineProperty(e, "isGroupedButton", { enumerable: !0, get: function() {
    return t.isGroupedButton;
  } }), Object.defineProperty(e, "isGroupedButtonPayload", { enumerable: !0, get: function() {
    return t.isGroupedButtonPayload;
  } });
  function r(i, a) {
    return new n.ButtonGroup(i, a);
  }
  e.create = r;
})(Gi);
var xo = {}, ql = {};
(function(e) {
  var n = g && g.__extends || function() {
    var E = function(S, I) {
      return E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(w, j) {
        w.__proto__ = j;
      } || function(w, j) {
        for (var B in j)
          Object.prototype.hasOwnProperty.call(j, B) && (w[B] = j[B]);
      }, E(S, I);
    };
    return function(S, I) {
      if (typeof I != "function" && I !== null)
        throw new TypeError("Class extends value " + String(I) + " is not a constructor or null");
      E(S, I);
      function w() {
        this.constructor = S;
      }
      S.prototype = I === null ? Object.create(I) : (w.prototype = I.prototype, new w());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(E) {
      for (var S, I = 1, w = arguments.length; I < w; I++) {
        S = arguments[I];
        for (var j in S)
          Object.prototype.hasOwnProperty.call(S, j) && (E[j] = S[j]);
      }
      return E;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Cart = e.setLineItemProperties = e.removeLineItemDiscount = e.setLineItemDiscount = e.removeLineItem = e.updateLineItem = e.addLineItem = e.removeProperties = e.setProperties = e.setDiscount = e.updateCustomerAddress = e.addCustomerAddress = e.setCustomer = e.update = e.fetch = e.Action = void 0;
  var r = se, i = de, a = le, o;
  (function(E) {
    E.FETCH = "APP::CART::FETCH", E.UPDATE = "APP::CART::UPDATE", E.SET_CUSTOMER = "APP::CART::SET_CUSTOMER", E.REMOVE_CUSTOMER = "APP::CART::REMOVE_CUSTOMER", E.ADD_CUSTOMER_ADDRESS = "APP::CART::ADD_CUSTOMER_ADDRESS", E.UPDATE_CUSTOMER_ADDRESS = "APP::CART::UPDATE_CUSTOMER_ADDRESS", E.SET_DISCOUNT = "APP::CART::SET_DISCOUNT", E.REMOVE_DISCOUNT = "APP::CART::REMOVE_DISCOUNT", E.SET_PROPERTIES = "APP::CART::SET_PROPERTIES", E.REMOVE_PROPERTIES = "APP::CART::REMOVE_PROPERTIES", E.CLEAR = "APP::CART::CLEAR", E.ADD_LINE_ITEM = "APP::CART::ADD_LINE_ITEM", E.UPDATE_LINE_ITEM = "APP::CART::UPDATE_LINE_ITEM", E.REMOVE_LINE_ITEM = "APP::CART::REMOVE_LINE_ITEM", E.SET_LINE_ITEM_DISCOUNT = "APP::CART::SET_LINE_ITEM_DISCOUNT", E.REMOVE_LINE_ITEM_DISCOUNT = "APP::CART::REMOVE_LINE_ITEM_DISCOUNT", E.SET_LINE_ITEM_PROPERTIES = "APP::CART::SET_LINE_ITEM_PROPERTIES", E.REMOVE_LINE_ITEM_PROPERTIES = "APP::CART::REMOVE_LINE_ITEM_PROPERTIES";
  })(o = e.Action || (e.Action = {}));
  function s(E, S) {
    return S === void 0 && (S = {}), r.actionWrapper({
      group: a.Group.Cart,
      type: E,
      payload: S
    });
  }
  function y() {
    return s(o.FETCH);
  }
  e.fetch = y;
  function u(E) {
    return s(o.UPDATE, E);
  }
  e.update = u;
  function c(E) {
    return s(o.SET_CUSTOMER, E);
  }
  e.setCustomer = c;
  function l(E) {
    return s(o.ADD_CUSTOMER_ADDRESS, E);
  }
  e.addCustomerAddress = l;
  function p(E) {
    return s(o.UPDATE_CUSTOMER_ADDRESS, E);
  }
  e.updateCustomerAddress = p;
  function h(E) {
    return s(o.SET_DISCOUNT, E);
  }
  e.setDiscount = h;
  function d(E) {
    return s(o.SET_PROPERTIES, E);
  }
  e.setProperties = d;
  function f(E) {
    return s(o.REMOVE_PROPERTIES, E);
  }
  e.removeProperties = f;
  function v(E) {
    return s(o.ADD_LINE_ITEM, E);
  }
  e.addLineItem = v;
  function m(E) {
    return s(o.UPDATE_LINE_ITEM, E);
  }
  e.updateLineItem = m;
  function b(E) {
    return s(o.REMOVE_LINE_ITEM, E);
  }
  e.removeLineItem = b;
  function O(E) {
    return s(o.SET_LINE_ITEM_DISCOUNT, E);
  }
  e.setLineItemDiscount = O;
  function _(E) {
    return s(o.REMOVE_LINE_ITEM_DISCOUNT, E);
  }
  e.removeLineItemDiscount = _;
  function T(E) {
    return s(o.SET_LINE_ITEM_PROPERTIES, E);
  }
  e.setLineItemProperties = T;
  var P = (
    /** @class */
    function(E) {
      n(S, E);
      function S(I, w) {
        return E.call(this, I, a.Group.Cart, a.Group.Cart, w ? w.id : void 0) || this;
      }
      return S.prototype.dispatch = function(I, w) {
        switch (I) {
          case o.FETCH:
            this.dispatchCartAction(o.FETCH);
            break;
          case o.UPDATE:
            this.dispatchCartAction(o.UPDATE, w);
            break;
          case o.SET_CUSTOMER:
            this.dispatchCartAction(o.SET_CUSTOMER, w);
            break;
          case o.REMOVE_CUSTOMER:
            this.dispatchCartAction(o.REMOVE_CUSTOMER, w);
            break;
          case o.ADD_CUSTOMER_ADDRESS:
            this.dispatchCartAction(o.ADD_CUSTOMER_ADDRESS, w);
            break;
          case o.UPDATE_CUSTOMER_ADDRESS:
            this.dispatchCartAction(o.UPDATE_CUSTOMER_ADDRESS, w);
            break;
          case o.SET_DISCOUNT:
            this.dispatchCartAction(o.SET_DISCOUNT, w);
            break;
          case o.REMOVE_DISCOUNT:
            this.dispatchCartAction(o.REMOVE_DISCOUNT, w);
            break;
          case o.SET_PROPERTIES:
            this.dispatchCartAction(o.SET_PROPERTIES, w);
            break;
          case o.REMOVE_PROPERTIES:
            this.dispatchCartAction(o.REMOVE_PROPERTIES, w);
            break;
          case o.CLEAR:
            this.dispatchCartAction(o.CLEAR, w);
            break;
          case o.ADD_LINE_ITEM:
            this.dispatchCartAction(o.ADD_LINE_ITEM, w);
            break;
          case o.UPDATE_LINE_ITEM:
            this.dispatchCartAction(o.UPDATE_LINE_ITEM, w);
            break;
          case o.REMOVE_LINE_ITEM:
            this.dispatchCartAction(o.REMOVE_LINE_ITEM, w);
            break;
          case o.SET_LINE_ITEM_DISCOUNT:
            this.dispatchCartAction(o.SET_LINE_ITEM_DISCOUNT, w);
            break;
          case o.REMOVE_LINE_ITEM_DISCOUNT:
            this.dispatchCartAction(o.REMOVE_LINE_ITEM_DISCOUNT, w);
            break;
          case o.SET_LINE_ITEM_PROPERTIES:
            this.dispatchCartAction(o.SET_LINE_ITEM_PROPERTIES, w);
            break;
          case o.REMOVE_LINE_ITEM_PROPERTIES:
            this.dispatchCartAction(o.REMOVE_LINE_ITEM_PROPERTIES, w);
            break;
        }
        return this;
      }, S.prototype.dispatchCartAction = function(I, w) {
        this.app.dispatch(s(I, t(t({}, w), { id: this.id })));
      }, S;
    }(i.ActionSet)
  );
  e.Cart = P;
})(ql);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.setLineItemProperties = e.removeLineItemDiscount = e.setLineItemDiscount = e.removeLineItem = e.updateLineItem = e.addLineItem = e.removeProperties = e.setProperties = e.setDiscount = e.updateCustomerAddress = e.addCustomerAddress = e.setCustomer = e.update = e.fetch = e.Cart = e.Action = void 0;
  var n = ql;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "Cart", { enumerable: !0, get: function() {
    return n.Cart;
  } }), Object.defineProperty(e, "fetch", { enumerable: !0, get: function() {
    return n.fetch;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return n.update;
  } }), Object.defineProperty(e, "setCustomer", { enumerable: !0, get: function() {
    return n.setCustomer;
  } }), Object.defineProperty(e, "addCustomerAddress", { enumerable: !0, get: function() {
    return n.addCustomerAddress;
  } }), Object.defineProperty(e, "updateCustomerAddress", { enumerable: !0, get: function() {
    return n.updateCustomerAddress;
  } }), Object.defineProperty(e, "setDiscount", { enumerable: !0, get: function() {
    return n.setDiscount;
  } }), Object.defineProperty(e, "setProperties", { enumerable: !0, get: function() {
    return n.setProperties;
  } }), Object.defineProperty(e, "removeProperties", { enumerable: !0, get: function() {
    return n.removeProperties;
  } }), Object.defineProperty(e, "addLineItem", { enumerable: !0, get: function() {
    return n.addLineItem;
  } }), Object.defineProperty(e, "updateLineItem", { enumerable: !0, get: function() {
    return n.updateLineItem;
  } }), Object.defineProperty(e, "removeLineItem", { enumerable: !0, get: function() {
    return n.removeLineItem;
  } }), Object.defineProperty(e, "setLineItemDiscount", { enumerable: !0, get: function() {
    return n.setLineItemDiscount;
  } }), Object.defineProperty(e, "removeLineItemDiscount", { enumerable: !0, get: function() {
    return n.removeLineItemDiscount;
  } }), Object.defineProperty(e, "setLineItemProperties", { enumerable: !0, get: function() {
    return n.setLineItemProperties;
  } });
  function t(r, i) {
    return new n.Cart(r, i);
  }
  e.create = t;
})(xo);
var eu = {}, Wl = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(n) {
    n.INITIALIZE = "APP::CLIENT::INITIALIZE";
  }(e.Action || (e.Action = {}));
})(Wl);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initialize = e.Action = void 0;
  var n = Wl;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
  var t = Zt, r = Xt;
  function i() {
    return r.actionWrapper({
      group: t.Group.Client,
      type: n.Action.INITIALIZE
    });
  }
  e.initialize = i;
})(eu);
var vn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.networkAction = e.persistenceAction = e.unsupportedOperationAction = e.unexpectedAction = e.invalidAction = e.invalidActionType = e.invalidPayload = e.Message = e.fromAction = e.Action = e.permissionAction = e.isErrorEventName = e.throwError = e.invalidOriginAction = e.AppBridgeError = e.AppActionType = void 0;
  var n = Ar;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "fromAction", { enumerable: !0, get: function() {
    return n.fromAction;
  } });
  var t = Xt, r = Zt, i = Ar;
  Object.defineProperty(e, "AppActionType", { enumerable: !0, get: function() {
    return i.AppActionType;
  } }), Object.defineProperty(e, "AppBridgeError", { enumerable: !0, get: function() {
    return i.AppBridgeError;
  } }), Object.defineProperty(e, "invalidOriginAction", { enumerable: !0, get: function() {
    return i.invalidOriginAction;
  } }), Object.defineProperty(e, "throwError", { enumerable: !0, get: function() {
    return i.throwError;
  } }), Object.defineProperty(e, "isErrorEventName", { enumerable: !0, get: function() {
    return i.isErrorEventName;
  } }), Object.defineProperty(e, "permissionAction", { enumerable: !0, get: function() {
    return i.permissionAction;
  } });
  function a(h, d, f) {
    var v = d.payload;
    return t.actionWrapper({
      type: h,
      group: r.Group.Error,
      payload: {
        action: d,
        message: f,
        type: h,
        id: v && v.id ? v.id : void 0
      }
    });
  }
  (function(h) {
    h.MISSING_PAYLOAD = "Missing payload", h.INVALID_PAYLOAD_ID = "Id in payload is missing or invalid";
  })(e.Message || (e.Message = {}));
  function o(h, d) {
    return a(n.Action.INVALID_PAYLOAD, h, d || "The action's payload is missing required properties or has invalid properties");
  }
  e.invalidPayload = o;
  function s(h, d) {
    return t.actionWrapper({
      group: r.Group.Error,
      payload: {
        action: h,
        message: d || "The action type is invalid or unsupported",
        type: n.Action.INVALID_ACTION_TYPE
      },
      type: n.Action.INVALID_ACTION_TYPE
    });
  }
  e.invalidActionType = s;
  function y(h, d) {
    return t.actionWrapper({
      group: r.Group.Error,
      payload: {
        action: h,
        message: d || "The action's has missing/invalid values for `group`, `type` or `version`",
        type: n.Action.INVALID_ACTION
      },
      type: n.Action.INVALID_ACTION
    });
  }
  e.invalidAction = y;
  function u(h, d) {
    return t.actionWrapper({
      group: r.Group.Error,
      payload: {
        action: h,
        message: d || "Action cannot be called at this time",
        type: n.Action.UNEXPECTED_ACTION
      },
      type: n.Action.UNEXPECTED_ACTION
    });
  }
  e.unexpectedAction = u;
  function c(h, d) {
    return a(n.Action.UNSUPPORTED_OPERATION, h, d || "The action type is unsupported");
  }
  e.unsupportedOperationAction = c;
  function l(h, d) {
    return a(n.Action.PERSISTENCE, h, d || "Action cannot be persisted on server");
  }
  e.persistenceAction = l;
  function p(h, d) {
    return a(n.Action.NETWORK, h, d || "Network error");
  }
  e.networkAction = p;
})(vn);
var Hl = {}, zl = {}, Pr = {};
(function(e) {
  var n = g && g.__extends || function() {
    var l = function(p, h) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, f) {
        d.__proto__ = f;
      } || function(d, f) {
        for (var v in f)
          Object.prototype.hasOwnProperty.call(f, v) && (d[v] = f[v]);
      }, l(p, h);
    };
    return function(p, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      l(p, h);
      function d() {
        this.constructor = p;
      }
      p.prototype = h === null ? Object.create(h) : (d.prototype = h.prototype, new d());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Toast = e.primaryAction = e.clear = e.show = e.Action = void 0;
  var r = se, i = de, a = le, o;
  (function(l) {
    l.SHOW = "APP::TOAST::SHOW", l.CLEAR = "APP::TOAST::CLEAR", l.ACTION = "APP::TOAST::ACTION";
  })(o = e.Action || (e.Action = {}));
  function s(l) {
    return r.actionWrapper({
      group: a.Group.Toast,
      payload: l,
      type: o.SHOW
    });
  }
  e.show = s;
  function y(l) {
    return r.actionWrapper({
      payload: l,
      group: a.Group.Toast,
      type: o.CLEAR
    });
  }
  e.clear = y;
  function u(l) {
    return r.actionWrapper({
      payload: l,
      group: a.Group.Toast,
      type: o.ACTION
    });
  }
  e.primaryAction = u;
  var c = (
    /** @class */
    function(l) {
      n(p, l);
      function p(h, d) {
        var f = l.call(this, h, a.Group.Toast, a.Group.Toast) || this;
        return f.message = "", f.duration = 5e3, f.set(d), f;
      }
      return Object.defineProperty(p.prototype, "options", {
        get: function() {
          var h;
          return {
            duration: this.duration,
            isError: this.isError,
            message: this.message,
            action: !((h = this.action) === null || h === void 0) && h.content ? {
              content: this.action.content
            } : void 0
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(p.prototype, "payload", {
        get: function() {
          return t({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.set = function(h) {
        var d = r.getMergedProps(this.options, h), f = d.message, v = d.duration, m = d.isError, b = d.action;
        return this.message = f, this.duration = v, this.isError = m, this.action = b != null && b.content ? {
          content: b.content || ""
        } : void 0, this;
      }, p.prototype.dispatch = function(h) {
        switch (h) {
          case o.SHOW: {
            var d = s(this.payload);
            this.app.dispatch(d);
            break;
          }
          case o.CLEAR:
            this.app.dispatch(y({ id: this.id }));
            break;
          case o.ACTION:
            this.app.dispatch(u({ id: this.id }));
            break;
        }
        return this;
      }, p;
    }(i.ActionSet)
  );
  e.Toast = c;
})(Pr);
(function(e) {
  var n = g && g.__extends || function() {
    var a = function(o, s) {
      return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, u) {
        y.__proto__ = u;
      } || function(y, u) {
        for (var c in u)
          Object.prototype.hasOwnProperty.call(u, c) && (y[c] = u[c]);
      }, a(o, s);
    };
    return function(o, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      a(o, s);
      function y() {
        this.constructor = o;
      }
      o.prototype = s === null ? Object.create(s) : (y.prototype = s.prototype, new y());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Flash = e.show = e.clear = void 0;
  var t = Pr;
  Object.defineProperty(e, "clear", { enumerable: !0, get: function() {
    return t.clear;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return t.show;
  } });
  var r = (
    /** @class */
    function(a) {
      n(o, a);
      function o() {
        return a !== null && a.apply(this, arguments) || this;
      }
      return o;
    }(t.Toast)
  );
  e.Flash = r;
  function i(a, o) {
    return new r(a, o);
  }
  e.create = i;
})(zl);
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = g && g.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(zl, e);
})(Hl);
var tu = {}, Ql = {}, nu = {}, qi = {}, ru = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(n) {
    n.UPDATE = "APP::FEATURES::UPDATE", n.REQUEST = "APP::FEATURES::REQUEST", n.REQUEST_UPDATE = "APP::FEATURES::REQUEST::UPDATE";
  }(e.Action || (e.Action = {}));
})(ru);
var _m = g && g.__extends || function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(n, t);
  };
  return function(n, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(n, t);
    function r() {
      this.constructor = n;
    }
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), _i = g && g.__assign || function() {
  return _i = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, _i.apply(this, arguments);
};
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.Features = void 0;
var Om = se, Am = de, ya = le, Us = ru, Pm = (
  /** @class */
  function(e) {
    _m(n, e);
    function n(t, r) {
      return e.call(this, t, ya.Group.Features, ya.Group.Features, r ? r.id : void 0) || this;
    }
    return n.prototype.dispatch = function(t, r) {
      switch (t) {
        case Us.Action.REQUEST:
          this.dispatchFeaturesAction(Us.Action.REQUEST, r);
          break;
      }
      return this;
    }, n.prototype.dispatchFeaturesAction = function(t, r) {
      this.app.dispatch(Om.actionWrapper({
        group: ya.Group.Features,
        type: t,
        payload: _i(_i({}, r || {}), { id: this.id })
      }));
    }, n;
  }(Am.ActionSet)
);
qi.Features = Pm;
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = g && g.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(qi, e), t(ru, e);
})(nu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Features = void 0;
  var n = nu;
  Object.defineProperty(e, "Features", { enumerable: !0, get: function() {
    return n.Features;
  } });
  function t(r, i) {
    return new n.Features(r, i);
  }
  e.create = t;
})(Ql);
var iu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0;
  var n = nu;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
})(iu);
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = g && g.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Ql, e), t(iu, e);
})(tu);
var Yl = {}, au = {};
(function(e) {
  var n = g && g.__extends || function() {
    var l = function(p, h) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, f) {
        d.__proto__ = f;
      } || function(d, f) {
        for (var v in f)
          Object.prototype.hasOwnProperty.call(f, v) && (d[v] = f[v]);
      }, l(p, h);
    };
    return function(p, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      l(p, h);
      function d() {
        this.constructor = p;
      }
      p.prototype = h === null ? Object.create(h) : (d.prototype = h.prototype, new d());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.FeedbackModal = e.close = e.open = e.Action = void 0;
  var r = se, i = de, a = le, o;
  (function(l) {
    l.OPEN = "APP::FEEDBACK_MODAL::OPEN", l.CLOSE = "APP::FEEDBACK_MODAL::CLOSE";
  })(o = e.Action || (e.Action = {}));
  function s(l) {
    return r.actionWrapper({
      group: a.Group.FeedbackModal,
      payload: l,
      type: o.OPEN
    });
  }
  e.open = s;
  function y(l) {
    return r.actionWrapper({
      group: a.Group.FeedbackModal,
      payload: l,
      type: o.CLOSE
    });
  }
  e.close = y;
  var u = (
    /** @class */
    function(l) {
      n(p, l);
      function p(h, d) {
        var f = l.call(this, h, a.Group.FeedbackModal, a.Group.FeedbackModal) || this;
        return f.options = d, f.set(d), f;
      }
      return Object.defineProperty(p.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return t({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.set = function(h) {
        return this.options = r.getMergedProps(this.options, h), this;
      }, p.prototype.dispatch = function(h) {
        switch (h) {
          case o.OPEN: {
            var d = s(this.payload);
            this.app.dispatch(d);
            break;
          }
          case o.CLOSE: {
            var f = y(this.payload);
            this.app.dispatch(f);
            break;
          }
        }
        return this;
      }, p;
    }(i.ActionSet)
  );
  e.FeedbackModal = u;
  function c(l, p) {
    return new u(l, p);
  }
  e.create = c;
})(au);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.FeedbackModal = e.close = e.open = e.Action = void 0;
  var n = au;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "open", { enumerable: !0, get: function() {
    return n.open;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return n.close;
  } }), Object.defineProperty(e, "FeedbackModal", { enumerable: !0, get: function() {
    return n.FeedbackModal;
  } }), Object.defineProperty(e, "create", { enumerable: !0, get: function() {
    return n.create;
  } });
})(Yl);
var ou = {}, go = {};
(function(e) {
  var n = g && g.__extends || function() {
    var u = function(c, l) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, h) {
        p.__proto__ = h;
      } || function(p, h) {
        for (var d in h)
          Object.prototype.hasOwnProperty.call(h, d) && (p[d] = h[d]);
      }, u(c, l);
    };
    return function(c, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      u(c, l);
      function p() {
        this.constructor = c;
      }
      c.prototype = l === null ? Object.create(l) : (p.prototype = l.prototype, new p());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Fullscreen = e.exit = e.enter = e.Action = void 0;
  var t = se, r = de, i = le, a;
  (function(u) {
    u.ENTER = "APP::FULLSCREEN::ENTER", u.EXIT = "APP::FULLSCREEN::EXIT";
  })(a = e.Action || (e.Action = {}));
  function o() {
    return t.actionWrapper({
      group: i.Group.Fullscreen,
      type: a.ENTER
    });
  }
  e.enter = o;
  function s() {
    return t.actionWrapper({
      group: i.Group.Fullscreen,
      type: a.EXIT
    });
  }
  e.exit = s;
  var y = (
    /** @class */
    function(u) {
      n(c, u);
      function c(l) {
        return u.call(this, l, i.Group.Fullscreen, i.Group.Fullscreen) || this;
      }
      return Object.defineProperty(c.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), c.prototype.dispatch = function(l) {
        return this.app.dispatch(t.actionWrapper({
          group: this.group,
          type: l,
          payload: this.payload
        })), this;
      }, c;
    }(r.ActionSet)
  );
  e.Fullscreen = y;
})(go);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Action = e.Fullscreen = e.exit = e.enter = void 0;
  var n = go;
  Object.defineProperty(e, "Fullscreen", { enumerable: !0, get: function() {
    return n.Fullscreen;
  } }), Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
  var t = go;
  Object.defineProperty(e, "enter", { enumerable: !0, get: function() {
    return t.enter;
  } }), Object.defineProperty(e, "exit", { enumerable: !0, get: function() {
    return t.exit;
  } });
  function r(i) {
    return new n.Fullscreen(i);
  }
  e.create = r;
})(ou);
var Kl = {}, Oi = {};
(function(e) {
  var n = g && g.__extends || function() {
    var l = function(p, h) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, f) {
        d.__proto__ = f;
      } || function(d, f) {
        for (var v in f)
          Object.prototype.hasOwnProperty.call(f, v) && (d[v] = f[v]);
      }, l(p, h);
    };
    return function(p, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      l(p, h);
      function d() {
        this.constructor = p;
      }
      p.prototype = h === null ? Object.create(h) : (d.prototype = h.prototype, new d());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LeaveConfirmation = e.confirm = e.disable = e.enable = e.Action = void 0;
  var r = se, i = de, a = le, o;
  (function(l) {
    l.ENABLE = "APP::LEAVE_CONFIRMATION::ENABLE", l.DISABLE = "APP::LEAVE_CONFIRMATION::DISABLE", l.CONFIRM = "APP::LEAVE_CONFIRMATION::CONFIRM";
  })(o = e.Action || (e.Action = {}));
  function s(l) {
    return l === void 0 && (l = {}), r.actionWrapper({
      group: a.Group.LeaveConfirmation,
      payload: l,
      type: o.ENABLE
    });
  }
  e.enable = s;
  function y(l) {
    return l === void 0 && (l = {}), r.actionWrapper({
      group: a.Group.LeaveConfirmation,
      payload: l,
      type: o.DISABLE
    });
  }
  e.disable = y;
  function u(l) {
    return l === void 0 && (l = {}), r.actionWrapper({
      group: a.Group.LeaveConfirmation,
      payload: l,
      type: o.CONFIRM
    });
  }
  e.confirm = u;
  var c = (
    /** @class */
    function(l) {
      n(p, l);
      function p(h, d) {
        d === void 0 && (d = {});
        var f = l.call(this, h, a.Group.LeaveConfirmation, a.Group.LeaveConfirmation) || this;
        return f.options = d, f.set(d), f;
      }
      return Object.defineProperty(p.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return t({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.set = function(h) {
        return this.options = r.getMergedProps(this.options, h), this;
      }, p.prototype.dispatch = function(h) {
        switch (h) {
          case o.ENABLE: {
            var d = s(this.payload);
            this.app.dispatch(d);
            break;
          }
          case o.DISABLE: {
            var f = y(this.payload);
            this.app.dispatch(f);
            break;
          }
          case o.CONFIRM: {
            var v = u(this.payload);
            this.app.dispatch(v);
            break;
          }
        }
        return this;
      }, p;
    }(i.ActionSet)
  );
  e.LeaveConfirmation = c;
})(Oi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.LeaveConfirmation = e.confirm = e.disable = e.enable = e.Action = void 0;
  var n = Oi;
  Object.defineProperty(e, "LeaveConfirmation", { enumerable: !0, get: function() {
    return n.LeaveConfirmation;
  } });
  var t = Oi;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "enable", { enumerable: !0, get: function() {
    return t.enable;
  } }), Object.defineProperty(e, "disable", { enumerable: !0, get: function() {
    return t.disable;
  } }), Object.defineProperty(e, "confirm", { enumerable: !0, get: function() {
    return t.confirm;
  } });
  function r(i, a) {
    return a === void 0 && (a = {}), new n.LeaveConfirmation(i, a);
  }
  e.create = r;
})(Kl);
var uu = {}, _o = {};
(function(e) {
  var n = g && g.__extends || function() {
    var u = function(c, l) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, h) {
        p.__proto__ = h;
      } || function(p, h) {
        for (var d in h)
          Object.prototype.hasOwnProperty.call(h, d) && (p[d] = h[d]);
      }, u(c, l);
    };
    return function(c, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      u(c, l);
      function p() {
        this.constructor = c;
      }
      c.prototype = l === null ? Object.create(l) : (p.prototype = l.prototype, new p());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Loading = e.stop = e.start = e.Action = void 0;
  var t = se, r = de, i = le, a;
  (function(u) {
    u.START = "APP::LOADING::START", u.STOP = "APP::LOADING::STOP";
  })(a = e.Action || (e.Action = {}));
  function o(u) {
    return t.actionWrapper({
      payload: u,
      group: i.Group.Loading,
      type: a.START
    });
  }
  e.start = o;
  function s(u) {
    return t.actionWrapper({
      payload: u,
      group: i.Group.Loading,
      type: a.STOP
    });
  }
  e.stop = s;
  var y = (
    /** @class */
    function(u) {
      n(c, u);
      function c(l) {
        return u.call(this, l, i.Group.Loading, i.Group.Loading) || this;
      }
      return Object.defineProperty(c.prototype, "payload", {
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), c.prototype.dispatch = function(l) {
        switch (l) {
          case a.START:
            this.app.dispatch(o(this.payload));
            break;
          case a.STOP:
            this.app.dispatch(s(this.payload));
            break;
        }
        return this;
      }, c;
    }(r.ActionSet)
  );
  e.Loading = y;
})(_o);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.stop = e.start = e.Action = e.Loading = void 0;
  var n = _o;
  Object.defineProperty(e, "Loading", { enumerable: !0, get: function() {
    return n.Loading;
  } });
  var t = _o;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "start", { enumerable: !0, get: function() {
    return t.start;
  } }), Object.defineProperty(e, "stop", { enumerable: !0, get: function() {
    return t.stop;
  } });
  function r(i) {
    return new n.Loading(i);
  }
  e.create = r;
})(uu);
var Wi = {}, Sr = {};
(function(e) {
  var n = g && g.__extends || function() {
    var P = function(E, S) {
      return P = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(I, w) {
        I.__proto__ = w;
      } || function(I, w) {
        for (var j in w)
          Object.prototype.hasOwnProperty.call(w, j) && (I[j] = w[j]);
      }, P(E, S);
    };
    return function(E, S) {
      if (typeof S != "function" && S !== null)
        throw new TypeError("Class extends value " + String(S) + " is not a constructor or null");
      P(E, S);
      function I() {
        this.constructor = E;
      }
      E.prototype = S === null ? Object.create(S) : (I.prototype = S.prototype, new I());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(P) {
      for (var E, S = 1, I = arguments.length; S < I; S++) {
        E = arguments[S];
        for (var w in E)
          Object.prototype.hasOwnProperty.call(E, w) && (P[w] = E[w]);
      }
      return P;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalIframe = e.ModalMessage = e.Modal = e.isMessageModal = e.isIframeModal = e.data = e.update = e.clickFooterButton = e.updateModalSize = e.closeModal = e.openModal = e.Size = e.Action = void 0;
  var r = yn, i = se, a = de, o = le, s = Gt, y;
  (function(P) {
    P.OPEN = "APP::MODAL::OPEN", P.CLOSE = "APP::MODAL::CLOSE", P.UPDATE = "APP::MODAL::UPDATE", P.UPDATE_CONTENT = "APP::MODAL::CONTENT::UPDATE", P.FOOTER_BUTTON_CLICK = "APP::MODAL::FOOTER::BUTTON::CLICK", P.FOOTER_BUTTON_UPDATE = "APP::MODAL::FOOTER::BUTTON::UPDATE", P.UPDATE_SIZE = "APP::MODAL::UPDATE_SIZE", P.DATA = "APP::MODAL::DATA";
  })(y = e.Action || (e.Action = {}));
  var u;
  (function(P) {
    P.Small = "small", P.Medium = "medium", P.Large = "large", P.Full = "full", P.Auto = "auto";
  })(u = e.Size || (e.Size = {}));
  var c = {
    group: o.Group.Modal,
    subgroups: ["Footer"],
    type: o.ComponentType.Button
  };
  function l(P) {
    return i.actionWrapper({
      group: o.Group.Modal,
      payload: P,
      type: y.OPEN
    });
  }
  e.openModal = l;
  function p(P) {
    return i.actionWrapper({
      group: o.Group.Modal,
      payload: P,
      type: y.CLOSE
    });
  }
  e.closeModal = p;
  function h(P) {
    return i.actionWrapper({
      group: o.Group.Modal,
      payload: P,
      type: y.UPDATE_SIZE
    });
  }
  e.updateModalSize = h;
  function d(P, E) {
    var S = t({ id: P }, c);
    return s.clickButton(o.Group.Modal, S, E);
  }
  e.clickFooterButton = d;
  function f(P) {
    return i.actionWrapper({
      payload: P,
      group: o.Group.Modal,
      type: y.UPDATE
    });
  }
  e.update = f;
  function v(P) {
    return i.actionWrapper({
      payload: P,
      group: o.Group.Modal,
      type: y.DATA
    });
  }
  e.data = v;
  function m(P) {
    return typeof P.url == "string" || typeof P.path == "string";
  }
  e.isIframeModal = m;
  function b(P) {
    return typeof P.message == "string";
  }
  e.isMessageModal = b;
  var O = (
    /** @class */
    function(P) {
      n(E, P);
      function E() {
        var S = P !== null && P.apply(this, arguments) || this;
        return S.size = u.Small, S;
      }
      return Object.defineProperty(E.prototype, "footer", {
        get: function() {
          if (!(!this.footerPrimary && !this.footerSecondary))
            return {
              buttons: {
                primary: this.footerPrimary,
                secondary: this.footerSecondary
              }
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(E.prototype, "footerOptions", {
        get: function() {
          if (!(!this.footerPrimaryOptions && !this.footerSecondaryOptions))
            return {
              buttons: {
                primary: this.footerPrimaryOptions,
                secondary: this.footerSecondaryOptions
              }
            };
        },
        enumerable: !1,
        configurable: !0
      }), E.prototype.close = function() {
        this.app.dispatch(p({ id: this.id }));
      }, E.prototype.setFooterPrimaryButton = function(S, I) {
        var w = this, j = c.subgroups;
        this.footerPrimaryOptions = this.getChildButton(S, this.footerPrimaryOptions), this.footerPrimary = this.footerPrimaryOptions ? r.getSingleButton(this, this.footerPrimaryOptions, j, function(B) {
          w.updatePrimaryFooterButton(B, I);
        }) : void 0;
      }, E.prototype.setFooterSecondaryButtons = function(S, I) {
        var w = this, j = c.subgroups, B = S || [], U = this.footerOptions && this.footerOptions.buttons.secondary || [];
        this.footerSecondaryOptions = this.getUpdatedChildActions(B, U), this.footerSecondary = this.footerSecondaryOptions ? this.footerSecondaryOptions.map(function(D) {
          return r.getSingleButton(w, D, j, function($) {
            w.updateSecondaryFooterButton($, I);
          });
        }) : void 0;
      }, E.prototype.getChildButton = function(S, I) {
        var w = S ? [S] : [], j = I ? [I] : [], B = this.getUpdatedChildActions(w, j);
        return B ? B[0] : void 0;
      }, E.prototype.updatePrimaryFooterButton = function(S, I) {
        !this.footer || !this.footer.buttons.primary || i.updateActionFromPayload(this.footer.buttons.primary, S) && I();
      }, E.prototype.updateSecondaryFooterButton = function(S, I) {
        if (!(!this.footer || !this.footer.buttons || !this.footer.buttons.secondary)) {
          for (var w, j = 0, B = this.footer.buttons.secondary; j < B.length; j++) {
            var U = B[j];
            if (w = i.updateActionFromPayload(U, S), w)
              break;
          }
          w && I();
        }
      }, E;
    }(a.ActionSetWithChildren)
  );
  e.Modal = O;
  var _ = (
    /** @class */
    function(P) {
      n(E, P);
      function E(S, I) {
        var w = P.call(this, S, o.Group.Modal, o.Group.Modal) || this;
        return w.set(I, !1), w;
      }
      return Object.defineProperty(E.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { footer: this.footer, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(E.prototype, "options", {
        get: function() {
          return {
            footer: this.footerOptions,
            message: this.message,
            size: this.size,
            title: this.title
          };
        },
        enumerable: !1,
        configurable: !0
      }), E.prototype.set = function(S, I) {
        var w = this;
        I === void 0 && (I = !0);
        var j = i.getMergedProps(this.options, S), B = j.title, U = j.footer, D = j.message, $ = j.size;
        return this.title = B, this.message = D, this.size = $, this.setFooterPrimaryButton(U ? U.buttons.primary : void 0, function() {
          w.dispatch(y.UPDATE);
        }), this.setFooterSecondaryButtons(U ? U.buttons.secondary : void 0, function() {
          w.dispatch(y.UPDATE);
        }), I && this.dispatch(y.UPDATE), this;
      }, E.prototype.dispatch = function(S) {
        switch (S) {
          case y.OPEN:
            this.app.dispatch(l(this.payload));
            break;
          case y.CLOSE:
            this.close();
            break;
          case y.UPDATE:
            this.app.dispatch(f(this.payload));
            break;
        }
        return this;
      }, E;
    }(O)
  );
  e.ModalMessage = _;
  var T = (
    /** @class */
    function(P) {
      n(E, P);
      function E(S, I) {
        var w = P.call(this, S, o.Group.Modal, o.Group.Modal) || this;
        return w.set(I, !1), w;
      }
      return Object.defineProperty(E.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { footer: this.footer, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(E.prototype, "options", {
        get: function() {
          return {
            footer: this.footerOptions,
            path: this.path,
            size: this.size,
            title: this.title,
            url: this.url,
            loading: this.loading
          };
        },
        enumerable: !1,
        configurable: !0
      }), E.prototype.set = function(S, I) {
        var w = this;
        I === void 0 && (I = !0);
        var j = i.getMergedProps(this.options, S), B = j.title, U = j.footer, D = j.path, $ = j.url, H = j.size, F = j.loading;
        return this.title = B, this.url = $, this.path = D, this.size = H, this.loading = F, this.setFooterPrimaryButton(U ? U.buttons.primary : void 0, function() {
          w.dispatch(y.UPDATE);
        }), this.setFooterSecondaryButtons(U ? U.buttons.secondary : void 0, function() {
          w.dispatch(y.UPDATE);
        }), I && this.dispatch(y.UPDATE), this;
      }, E.prototype.dispatch = function(S, I) {
        switch (S) {
          case y.OPEN:
            this.app.dispatch(l(this.payload));
            break;
          case y.CLOSE:
            this.close();
            break;
          case y.UPDATE:
            this.app.dispatch(f(this.payload));
            break;
          case y.DATA:
            this.app.dispatch(v(I || {}));
            break;
        }
        return this;
      }, E;
    }(O)
  );
  e.ModalIframe = T;
})(Sr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Modal = e.isMessageModal = e.data = e.update = e.clickFooterButton = e.updateModalSize = e.closeModal = e.openModal = e.Size = e.Action = e.isIframeModal = e.ModalMessage = e.ModalIframe = void 0;
  var n = Sr;
  Object.defineProperty(e, "ModalIframe", { enumerable: !0, get: function() {
    return n.ModalIframe;
  } }), Object.defineProperty(e, "ModalMessage", { enumerable: !0, get: function() {
    return n.ModalMessage;
  } }), Object.defineProperty(e, "isIframeModal", { enumerable: !0, get: function() {
    return n.isIframeModal;
  } });
  var t = Sr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "Size", { enumerable: !0, get: function() {
    return t.Size;
  } }), Object.defineProperty(e, "openModal", { enumerable: !0, get: function() {
    return t.openModal;
  } }), Object.defineProperty(e, "closeModal", { enumerable: !0, get: function() {
    return t.closeModal;
  } }), Object.defineProperty(e, "updateModalSize", { enumerable: !0, get: function() {
    return t.updateModalSize;
  } }), Object.defineProperty(e, "clickFooterButton", { enumerable: !0, get: function() {
    return t.clickFooterButton;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } }), Object.defineProperty(e, "data", { enumerable: !0, get: function() {
    return t.data;
  } }), Object.defineProperty(e, "isMessageModal", { enumerable: !0, get: function() {
    return t.isMessageModal;
  } }), Object.defineProperty(e, "Modal", { enumerable: !0, get: function() {
    return t.Modal;
  } });
  var r = function(i, a) {
    return n.isIframeModal(a) ? new n.ModalIframe(i, a) : new n.ModalMessage(i, a);
  };
  e.create = r;
})(Wi);
var Jl = {}, Oo = {};
(function(e) {
  var n = g && g.__extends || function() {
    var l = function(p, h) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, f) {
        d.__proto__ = f;
      } || function(d, f) {
        for (var v in f)
          Object.prototype.hasOwnProperty.call(f, v) && (d[v] = f[v]);
      }, l(p, h);
    };
    return function(p, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      l(p, h);
      function d() {
        this.constructor = p;
      }
      p.prototype = h === null ? Object.create(h) : (d.prototype = h.prototype, new d());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, t.apply(this, arguments);
  }, r = g && g.__awaiter || function(l, p, h, d) {
    function f(v) {
      return v instanceof h ? v : new h(function(m) {
        m(v);
      });
    }
    return new (h || (h = Promise))(function(v, m) {
      function b(T) {
        try {
          _(d.next(T));
        } catch (P) {
          m(P);
        }
      }
      function O(T) {
        try {
          _(d.throw(T));
        } catch (P) {
          m(P);
        }
      }
      function _(T) {
        T.done ? v(T.value) : f(T.value).then(b, O);
      }
      _((d = d.apply(l, p || [])).next());
    });
  }, i = g && g.__generator || function(l, p) {
    var h = { label: 0, sent: function() {
      if (v[0] & 1)
        throw v[1];
      return v[1];
    }, trys: [], ops: [] }, d, f, v, m;
    return m = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function b(_) {
      return function(T) {
        return O([_, T]);
      };
    }
    function O(_) {
      if (d)
        throw new TypeError("Generator is already executing.");
      for (; h; )
        try {
          if (d = 1, f && (v = _[0] & 2 ? f.return : _[0] ? f.throw || ((v = f.return) && v.call(f), 0) : f.next) && !(v = v.call(f, _[1])).done)
            return v;
          switch (f = 0, v && (_ = [_[0] & 2, v.value]), _[0]) {
            case 0:
            case 1:
              v = _;
              break;
            case 4:
              return h.label++, { value: _[1], done: !1 };
            case 5:
              h.label++, f = _[1], _ = [0];
              continue;
            case 7:
              _ = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (v = h.trys, !(v = v.length > 0 && v[v.length - 1]) && (_[0] === 6 || _[0] === 2)) {
                h = 0;
                continue;
              }
              if (_[0] === 3 && (!v || _[1] > v[0] && _[1] < v[3])) {
                h.label = _[1];
                break;
              }
              if (_[0] === 6 && h.label < v[1]) {
                h.label = v[1], v = _;
                break;
              }
              if (v && h.label < v[2]) {
                h.label = v[2], h.ops.push(_);
                break;
              }
              v[2] && h.ops.pop(), h.trys.pop();
              continue;
          }
          _ = p.call(l, h);
        } catch (T) {
          _ = [6, T], f = 0;
        } finally {
          d = v = 0;
        }
      if (_[0] & 5)
        throw _[1];
      return { value: _[0] ? _[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalContent = e.Action = void 0;
  var a = se, o = de, s = le, y = Sr, u;
  (function(l) {
    l.LOADING = "LOADING", l.LOADED = "LOADED";
  })(u = e.Action || (e.Action = {}));
  var c = (
    /** @class */
    function(l) {
      n(p, l);
      function p(h, d) {
        return l.call(this, h, s.Group.Modal, s.Group.Modal, d ? d.id : void 0) || this;
      }
      return p.prototype.loaded = function() {
        this.dispatch(u.LOADED);
      }, p.prototype.loading = function() {
        this.dispatch(u.LOADING);
      }, p.prototype.dispatch = function(h) {
        switch (h) {
          case u.LOADED:
            this.dispatchModalAction(y.Action.UPDATE_CONTENT, { loading: !1 });
            break;
          case u.LOADING:
            this.dispatchModalAction(y.Action.UPDATE_CONTENT, { loading: !0 });
            break;
        }
        return this;
      }, p.prototype.dispatchModalAction = function(h, d) {
        return r(this, void 0, void 0, function() {
          var f;
          return i(this, function(v) {
            return f = a.actionWrapper({
              type: h,
              group: s.Group.Modal,
              payload: t({}, d)
            }), this.app.dispatch(f), [
              2
              /*return*/
            ];
          });
        });
      }, p;
    }(o.ActionSet)
  );
  e.ModalContent = c;
})(Oo);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ModalContent = e.Action = void 0;
  var n = Oo;
  Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return n.ModalContent;
  } });
  var t = Oo;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
  function r(i, a) {
    return new n.ModalContent(i, a);
  }
  e.create = r;
})(Jl);
var Xl = {}, Ai = {};
(function(e) {
  var n = g && g.__extends || function() {
    var c = function(l, p) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, d) {
        h.__proto__ = d;
      } || function(h, d) {
        for (var f in d)
          Object.prototype.hasOwnProperty.call(d, f) && (h[f] = d[f]);
      }, c(l, p);
    };
    return function(l, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      c(l, p);
      function h() {
        this.constructor = l;
      }
      l.prototype = p === null ? Object.create(p) : (h.prototype = p.prototype, new h());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(c) {
      for (var l, p = 1, h = arguments.length; p < h; p++) {
        l = arguments[p];
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && (c[d] = l[d]);
      }
      return c;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.History = e.replace = e.push = e.Action = void 0;
  var r = se, i = de, a = le, o;
  (function(c) {
    c.PUSH = "APP::NAVIGATION::HISTORY::PUSH", c.REPLACE = "APP::NAVIGATION::HISTORY::REPLACE";
  })(o = e.Action || (e.Action = {}));
  function s(c) {
    return r.actionWrapper({
      payload: c,
      group: a.Group.Navigation,
      type: o.PUSH
    });
  }
  e.push = s;
  function y(c) {
    return r.actionWrapper({
      payload: c,
      group: a.Group.Navigation,
      type: o.REPLACE
    });
  }
  e.replace = y;
  var u = (
    /** @class */
    function(c) {
      n(l, c);
      function l(p) {
        return c.call(this, p, "History", a.Group.Navigation) || this;
      }
      return Object.defineProperty(l.prototype, "payload", {
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), l.prototype.dispatch = function(p, h) {
        var d = t(t({}, this.payload), { path: h });
        switch (p) {
          case o.PUSH:
            this.app.dispatch(s(d));
            break;
          case o.REPLACE:
            this.app.dispatch(y(d));
            break;
        }
        return this;
      }, l;
    }(i.ActionSet)
  );
  e.History = u;
})(Ai);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.replace = e.push = e.Action = e.History = void 0;
  var n = Ai;
  Object.defineProperty(e, "History", { enumerable: !0, get: function() {
    return n.History;
  } });
  var t = Ai;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "push", { enumerable: !0, get: function() {
    return t.push;
  } }), Object.defineProperty(e, "replace", { enumerable: !0, get: function() {
    return t.replace;
  } });
  function r(i) {
    return new n.History(i);
  }
  e.create = r;
})(Xl);
var Hi = {}, Er = {};
(function(e) {
  var n = g && g.__extends || function() {
    var S = function(I, w) {
      return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(j, B) {
        j.__proto__ = B;
      } || function(j, B) {
        for (var U in B)
          Object.prototype.hasOwnProperty.call(B, U) && (j[U] = B[U]);
      }, S(I, w);
    };
    return function(I, w) {
      if (typeof w != "function" && w !== null)
        throw new TypeError("Class extends value " + String(w) + " is not a constructor or null");
      S(I, w);
      function j() {
        this.constructor = I;
      }
      I.prototype = w === null ? Object.create(w) : (j.prototype = w.prototype, new j());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(S) {
      for (var I, w = 1, j = arguments.length; w < j; w++) {
        I = arguments[w];
        for (var B in I)
          Object.prototype.hasOwnProperty.call(I, B) && (S[B] = I[B]);
      }
      return S;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Redirect = e.isProductVariantResourcePayload = e.isCreateResourcePayload = e.isAdminSection = e.isRemotePayload = e.isAdminSectionPayload = e.isAdminPathPayload = e.isAppPayload = e.getRelativePath = e.normalizeUrl = e.getPathWithSearchAndHash = e.toDestination = e.toApp = e.toRemote = e.toAdminSection = e.toAdminPath = e.isResourcePayload = e.ResourceType = e.Action = void 0;
  var r = se, i = de, a = le, o;
  (function(S) {
    S.ADMIN_SECTION = "APP::NAVIGATION::REDIRECT::ADMIN::SECTION", S.ADMIN_PATH = "APP::NAVIGATION::REDIRECT::ADMIN::PATH", S.REMOTE = "APP::NAVIGATION::REDIRECT::REMOTE", S.APP = "APP::NAVIGATION::REDIRECT::APP";
  })(o = e.Action || (e.Action = {})), function(S) {
    S.Product = "products", S.Collection = "collections", S.Order = "orders", S.Customer = "customers", S.Discount = "discounts";
  }(e.ResourceType || (e.ResourceType = {}));
  function s(S) {
    return typeof S.id == "string";
  }
  e.isResourcePayload = s;
  function y(S) {
    return r.actionWrapper({
      payload: S,
      group: a.Group.Navigation,
      type: o.ADMIN_PATH
    });
  }
  e.toAdminPath = y;
  function u(S) {
    return r.actionWrapper({
      payload: S,
      group: a.Group.Navigation,
      type: o.ADMIN_SECTION
    });
  }
  e.toAdminSection = u;
  function c(S) {
    return r.actionWrapper({
      payload: S,
      group: a.Group.Navigation,
      type: o.REMOTE
    });
  }
  e.toRemote = c;
  function l(S) {
    return r.actionWrapper({
      payload: S,
      group: a.Group.Navigation,
      type: o.APP
    });
  }
  e.toApp = l;
  function p(S, I, w) {
    switch (S) {
      case o.APP: {
        var j = v(I) ? I : { path: I };
        return l(t({ id: w }, j));
      }
      case o.ADMIN_PATH: {
        var B = m(I) ? I : { path: I };
        return y(t({ id: w }, B));
      }
      case o.ADMIN_SECTION: {
        var U = b(I) ? I : { section: I };
        return u(t({ id: w }, U));
      }
      case o.REMOTE: {
        var D = O(I) ? I : { url: I };
        return c(t({ id: w }, D));
      }
    }
  }
  e.toDestination = p;
  function h(S) {
    var I = S.pathname, w = S.search, j = S.hash;
    return "" + I + (w || "") + (j || "");
  }
  e.getPathWithSearchAndHash = h;
  function d(S) {
    return S instanceof URL ? S.toString() : typeof S == "string" ? S : f(S);
  }
  e.normalizeUrl = d;
  function f(S) {
    if (typeof S == "string")
      return S.startsWith("/") ? S : h(new URL(S));
    var I = S.search instanceof URLSearchParams ? S.search.toString() : S.search;
    return h(t(t({}, S), { search: I }));
  }
  e.getRelativePath = f;
  function v(S) {
    return typeof S == "object" && Object.prototype.hasOwnProperty.call(S, "path");
  }
  e.isAppPayload = v;
  function m(S) {
    return typeof S == "object" && Object.prototype.hasOwnProperty.call(S, "path");
  }
  e.isAdminPathPayload = m;
  function b(S) {
    return typeof S == "object" && typeof S.section == "object" && Object.prototype.hasOwnProperty.call(S.section, "name");
  }
  e.isAdminSectionPayload = b;
  function O(S) {
    return typeof S == "object" && Object.prototype.hasOwnProperty.call(S, "url");
  }
  e.isRemotePayload = O;
  function _(S) {
    return typeof S == "object" && typeof (S == null ? void 0 : S.name) == "string";
  }
  e.isAdminSection = _;
  function T(S) {
    return S.create === !0;
  }
  e.isCreateResourcePayload = T;
  function P(S) {
    var I = S;
    return I.id !== void 0 && I.variant !== void 0;
  }
  e.isProductVariantResourcePayload = P;
  var E = (
    /** @class */
    function(S) {
      n(I, S);
      function I(w) {
        return S.call(this, w, "Redirect", a.Group.Navigation) || this;
      }
      return Object.defineProperty(I.prototype, "payload", {
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), I.prototype.dispatch = function(w, j) {
        var B = p(w, j, this.payload.id);
        return this.app.dispatch(B), this;
      }, I;
    }(i.ActionSet)
  );
  e.Redirect = E;
})(Er);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.isProductVariantCreateResourcePayload = e.isProductVariantResourcePayload = e.isCreateResourcePayload = e.isAdminSection = e.isRemotePayload = e.isAdminSectionPayload = e.isAdminPathPayload = e.isAppPayload = e.getRelativePath = e.normalizeUrl = e.getPathWithSearchAndHash = e.toDestination = e.toApp = e.toRemote = e.toAdminSection = e.toAdminPath = e.isResourcePayload = e.ResourceType = e.Action = e.Redirect = void 0;
  var n = Er;
  Object.defineProperty(e, "Redirect", { enumerable: !0, get: function() {
    return n.Redirect;
  } }), Object.defineProperty(e, "isCreateResourcePayload", { enumerable: !0, get: function() {
    return n.isCreateResourcePayload;
  } }), Object.defineProperty(e, "isProductVariantResourcePayload", { enumerable: !0, get: function() {
    return n.isProductVariantResourcePayload;
  } });
  var t = Er;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "ResourceType", { enumerable: !0, get: function() {
    return t.ResourceType;
  } }), Object.defineProperty(e, "isResourcePayload", { enumerable: !0, get: function() {
    return t.isResourcePayload;
  } }), Object.defineProperty(e, "toAdminPath", { enumerable: !0, get: function() {
    return t.toAdminPath;
  } }), Object.defineProperty(e, "toAdminSection", { enumerable: !0, get: function() {
    return t.toAdminSection;
  } }), Object.defineProperty(e, "toRemote", { enumerable: !0, get: function() {
    return t.toRemote;
  } }), Object.defineProperty(e, "toApp", { enumerable: !0, get: function() {
    return t.toApp;
  } }), Object.defineProperty(e, "toDestination", { enumerable: !0, get: function() {
    return t.toDestination;
  } }), Object.defineProperty(e, "getPathWithSearchAndHash", { enumerable: !0, get: function() {
    return t.getPathWithSearchAndHash;
  } }), Object.defineProperty(e, "normalizeUrl", { enumerable: !0, get: function() {
    return t.normalizeUrl;
  } }), Object.defineProperty(e, "getRelativePath", { enumerable: !0, get: function() {
    return t.getRelativePath;
  } }), Object.defineProperty(e, "isAppPayload", { enumerable: !0, get: function() {
    return t.isAppPayload;
  } }), Object.defineProperty(e, "isAdminPathPayload", { enumerable: !0, get: function() {
    return t.isAdminPathPayload;
  } }), Object.defineProperty(e, "isAdminSectionPayload", { enumerable: !0, get: function() {
    return t.isAdminSectionPayload;
  } }), Object.defineProperty(e, "isRemotePayload", { enumerable: !0, get: function() {
    return t.isRemotePayload;
  } }), Object.defineProperty(e, "isAdminSection", { enumerable: !0, get: function() {
    return t.isAdminSection;
  } });
  function r(a) {
    return n.isProductVariantResourcePayload(a) ? n.isCreateResourcePayload(a.variant) : !1;
  }
  e.isProductVariantCreateResourcePayload = r;
  function i(a) {
    return new n.Redirect(a);
  }
  e.create = i;
})(Hi);
var zi = {}, Zl = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.app = e.Action = void 0;
  var n = se, t = le, r;
  (function(a) {
    a.APP = "APP::PRINT::APP";
  })(r = e.Action || (e.Action = {}));
  function i() {
    return n.actionWrapper({
      group: t.Group.Print,
      type: r.APP
    });
  }
  e.app = i;
})(Zl);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.app = e.Action = void 0;
  var n = Zl;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "app", { enumerable: !0, get: function() {
    return n.app;
  } });
})(zi);
var su = {}, Pi = {};
(function(e) {
  var n = g && g.__extends || function() {
    var f = function(v, m) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(b, O) {
        b.__proto__ = O;
      } || function(b, O) {
        for (var _ in O)
          Object.prototype.hasOwnProperty.call(O, _) && (b[_] = O[_]);
      }, f(v, m);
    };
    return function(v, m) {
      if (typeof m != "function" && m !== null)
        throw new TypeError("Class extends value " + String(m) + " is not a constructor or null");
      f(v, m);
      function b() {
        this.constructor = v;
      }
      v.prototype = m === null ? Object.create(m) : (b.prototype = m.prototype, new b());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(f) {
      for (var v, m = 1, b = arguments.length; m < b; m++) {
        v = arguments[m];
        for (var O in v)
          Object.prototype.hasOwnProperty.call(v, O) && (f[O] = v[O]);
      }
      return f;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ResourcePicker = e.update = e.close = e.cancel = e.open = e.select = e.ActionVerb = e.ResourceType = e.ProductStatus = e.ProductVariantInventoryManagement = e.ProductVariantInventoryPolicy = e.WeightUnit = e.FulfillmentServiceType = e.CollectionSortOrder = e.Action = void 0;
  var r = se, i = de, a = le, o;
  (function(f) {
    f.OPEN = "APP::RESOURCE_PICKER::OPEN", f.SELECT = "APP::RESOURCE_PICKER::SELECT", f.CLOSE = "APP::RESOURCE_PICKER::CLOSE", f.UPDATE = "APP::RESOURCE_PICKER::UPDATE", f.CANCEL = "APP::RESOURCE_PICKER::CANCEL";
  })(o = e.Action || (e.Action = {})), function(f) {
    f.Manual = "MANUAL", f.BestSelling = "BEST_SELLING", f.AlphaAsc = "ALPHA_ASC", f.AlphaDesc = "ALPHA_DESC", f.PriceDesc = "PRICE_DESC", f.PriceAsc = "PRICE_ASC", f.CreatedDesc = "CREATED_DESC", f.Created = "CREATED", f.MostRelevant = "MOST_RELEVANT";
  }(e.CollectionSortOrder || (e.CollectionSortOrder = {})), function(f) {
    f.GiftCard = "GIFT_CARD", f.Manual = "MANUAL", f.ThirdParty = "THIRD_PARTY";
  }(e.FulfillmentServiceType || (e.FulfillmentServiceType = {})), function(f) {
    f.Kilograms = "KILOGRAMS", f.Grams = "GRAMS", f.Pounds = "POUNDS", f.Ounces = "OUNCES";
  }(e.WeightUnit || (e.WeightUnit = {})), function(f) {
    f.Deny = "DENY", f.Continue = "CONTINUE";
  }(e.ProductVariantInventoryPolicy || (e.ProductVariantInventoryPolicy = {})), function(f) {
    f.Shopify = "SHOPIFY", f.NotManaged = "NOT_MANAGED", f.FulfillmentService = "FULFILLMENT_SERVICE";
  }(e.ProductVariantInventoryManagement || (e.ProductVariantInventoryManagement = {})), function(f) {
    f.Active = "ACTIVE", f.Archived = "ARCHIVED", f.Draft = "DRAFT";
  }(e.ProductStatus || (e.ProductStatus = {}));
  var s;
  (function(f) {
    f.Product = "product", f.ProductVariant = "variant", f.Collection = "collection";
  })(s = e.ResourceType || (e.ResourceType = {}));
  var y;
  (function(f) {
    f.Add = "add", f.Select = "select";
  })(y = e.ActionVerb || (e.ActionVerb = {}));
  function u(f) {
    return r.actionWrapper({
      payload: f,
      group: a.Group.ResourcePicker,
      type: o.SELECT
    });
  }
  e.select = u;
  function c(f) {
    return r.actionWrapper({
      payload: f,
      group: a.Group.ResourcePicker,
      type: o.OPEN
    });
  }
  e.open = c;
  function l(f) {
    return r.actionWrapper({
      payload: f,
      group: a.Group.ResourcePicker,
      type: o.CANCEL
    });
  }
  e.cancel = l;
  function p(f) {
    return r.actionWrapper({
      payload: f,
      group: a.Group.ResourcePicker,
      type: o.CANCEL
    });
  }
  e.close = p;
  function h(f) {
    return r.actionWrapper({
      payload: f,
      group: a.Group.ResourcePicker,
      type: o.UPDATE
    });
  }
  e.update = h;
  var d = (
    /** @class */
    function(f) {
      n(v, f);
      function v(m, b, O) {
        var _ = f.call(this, m, a.Group.ResourcePicker, a.Group.ResourcePicker) || this;
        return _.initialSelectionIds = [], _.selection = [], _.resourceType = O, _.set(b, !1), _;
      }
      return Object.defineProperty(v.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { id: this.id, resourceType: this.resourceType });
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(v.prototype, "options", {
        get: function() {
          var m = {
            initialQuery: this.initialQuery,
            selectMultiple: this.selectMultiple,
            initialSelectionIds: this.initialSelectionIds,
            showHidden: this.showHidden,
            actionVerb: this.actionVerb
          };
          if (this.resourceType === s.Product) {
            var b = t(t({}, m), { showVariants: this.showVariants, showDraft: this.showDraft, showArchived: this.showArchived, showDraftBadge: this.showDraftBadge, showArchivedBadge: this.showArchivedBadge });
            return b;
          }
          return m;
        },
        enumerable: !1,
        configurable: !0
      }), v.prototype.set = function(m, b) {
        b === void 0 && (b = !0);
        var O = r.getMergedProps(this.options, m), _ = O.initialQuery, T = O.initialSelectionIds, P = T === void 0 ? [] : T, E = O.showHidden, S = E === void 0 ? !0 : E, I = O.showVariants, w = I === void 0 ? !0 : I, j = O.showDraft, B = j === void 0 ? !0 : j, U = O.showArchived, D = U === void 0 ? !0 : U, $ = O.showDraftBadge, H = $ === void 0 ? !1 : $, F = O.showArchivedBadge, X = F === void 0 ? !1 : F, me = O.selectMultiple, z = me === void 0 ? !0 : me, Ie = O.actionVerb, Q = Ie === void 0 ? y.Add : Ie;
        return this.initialQuery = _, this.initialSelectionIds = P, this.showHidden = S, this.showVariants = w, this.showDraft = B, this.showArchived = D, this.showDraftBadge = H, this.showArchivedBadge = X, this.selectMultiple = z, this.actionVerb = Q, b && this.update(), this;
      }, v.prototype.dispatch = function(m, b) {
        return m === o.OPEN ? this.open() : m === o.UPDATE ? this.update() : m === o.CLOSE || m === o.CANCEL ? this.cancel() : m === o.SELECT && (this.selection = b, this.app.dispatch(u({ id: this.id, selection: this.selection }))), this;
      }, v.prototype.update = function() {
        this.app.dispatch(h(this.payload));
      }, v.prototype.open = function() {
        this.app.dispatch(c(this.payload));
      }, v.prototype.cancel = function() {
        this.app.dispatch(l({ id: this.id }));
      }, v.prototype.close = function() {
        this.cancel();
      }, v;
    }(i.ActionSet)
  );
  e.ResourcePicker = d;
})(Pi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ResourcePicker = e.WeightUnit = e.update = e.select = e.ResourceType = e.ProductVariantInventoryPolicy = e.ProductVariantInventoryManagement = e.ProductStatus = e.open = e.FulfillmentServiceType = e.CollectionSortOrder = e.close = e.cancel = e.ActionVerb = e.Action = void 0;
  var n = Pi;
  Object.defineProperty(e, "ResourcePicker", { enumerable: !0, get: function() {
    return n.ResourcePicker;
  } });
  var t = Pi;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "ActionVerb", { enumerable: !0, get: function() {
    return t.ActionVerb;
  } }), Object.defineProperty(e, "cancel", { enumerable: !0, get: function() {
    return t.cancel;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return t.close;
  } }), Object.defineProperty(e, "CollectionSortOrder", { enumerable: !0, get: function() {
    return t.CollectionSortOrder;
  } }), Object.defineProperty(e, "FulfillmentServiceType", { enumerable: !0, get: function() {
    return t.FulfillmentServiceType;
  } }), Object.defineProperty(e, "open", { enumerable: !0, get: function() {
    return t.open;
  } }), Object.defineProperty(e, "ProductStatus", { enumerable: !0, get: function() {
    return t.ProductStatus;
  } }), Object.defineProperty(e, "ProductVariantInventoryManagement", { enumerable: !0, get: function() {
    return t.ProductVariantInventoryManagement;
  } }), Object.defineProperty(e, "ProductVariantInventoryPolicy", { enumerable: !0, get: function() {
    return t.ProductVariantInventoryPolicy;
  } }), Object.defineProperty(e, "ResourceType", { enumerable: !0, get: function() {
    return t.ResourceType;
  } }), Object.defineProperty(e, "select", { enumerable: !0, get: function() {
    return t.select;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } }), Object.defineProperty(e, "WeightUnit", { enumerable: !0, get: function() {
    return t.WeightUnit;
  } });
  var r = function(i, a) {
    var o = a.resourceType, s = a.options, y = s === void 0 ? {} : s;
    return new n.ResourcePicker(i, y, o);
  };
  e.create = r;
})(su);
var cu = {}, xl = {};
(function(e) {
  var n = g && g.__extends || function() {
    var u = function(c, l) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, h) {
        p.__proto__ = h;
      } || function(p, h) {
        for (var d in h)
          Object.prototype.hasOwnProperty.call(h, d) && (p[d] = h[d]);
      }, u(c, l);
    };
    return function(c, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      u(c, l);
      function p() {
        this.constructor = c;
      }
      c.prototype = l === null ? Object.create(l) : (p.prototype = l.prototype, new p());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.capture = e.openCamera = e.Scanner = e.Action = void 0;
  var t = se, r = de, i = le, a;
  (function(u) {
    u.OPEN_CAMERA = "APP::SCANNER::OPEN::CAMERA", u.CAPTURE = "APP::SCANNER::CAPTURE";
  })(a = e.Action || (e.Action = {}));
  var o = (
    /** @class */
    function(u) {
      n(c, u);
      function c(l, p) {
        return u.call(this, l, i.Group.Scanner, i.Group.Scanner, p ? p.id : void 0) || this;
      }
      return c.prototype.dispatch = function(l) {
        switch (l) {
          case a.OPEN_CAMERA:
            this.dispatchScannerAction(a.OPEN_CAMERA);
            break;
        }
        return this;
      }, c.prototype.dispatchScannerAction = function(l) {
        this.app.dispatch(t.actionWrapper({
          type: l,
          group: i.Group.Scanner,
          payload: {
            id: this.id
          }
        }));
      }, c;
    }(r.ActionSet)
  );
  e.Scanner = o;
  function s() {
    return t.actionWrapper({
      group: i.Group.Scanner,
      type: a.OPEN_CAMERA
    });
  }
  e.openCamera = s;
  function y(u) {
    return t.actionWrapper({
      group: i.Group.Scanner,
      type: a.CAPTURE,
      payload: u
    });
  }
  e.capture = y;
})(xl);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.capture = e.openCamera = e.Scanner = e.Action = void 0;
  var n = xl;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "Scanner", { enumerable: !0, get: function() {
    return n.Scanner;
  } }), Object.defineProperty(e, "openCamera", { enumerable: !0, get: function() {
    return n.openCamera;
  } }), Object.defineProperty(e, "capture", { enumerable: !0, get: function() {
    return n.capture;
  } });
  function t(r, i) {
    return new n.Scanner(r, i);
  }
  e.create = t;
})(cu);
var lu = {}, ef = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.request = e.Action = void 0;
  var n = se, t = le, r;
  (function(o) {
    o.REQUEST = "APP::SESSION_TOKEN::REQUEST", o.RESPOND = "APP::SESSION_TOKEN::RESPOND";
  })(r = e.Action || (e.Action = {}));
  function i() {
    return n.actionWrapper({
      group: t.Group.SessionToken,
      type: r.REQUEST
    });
  }
  e.request = i;
  function a(o) {
    return n.actionWrapper({
      payload: o,
      group: t.Group.SessionToken,
      type: r.RESPOND
    });
  }
  e.respond = a;
})(ef);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.request = e.Action = void 0;
  var n = ef;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "request", { enumerable: !0, get: function() {
    return n.request;
  } }), Object.defineProperty(e, "respond", { enumerable: !0, get: function() {
    return n.respond;
  } });
})(lu);
var fu = {}, Si = {}, Qi = {};
Object.defineProperty(Qi, "__esModule", { value: !0 });
Qi.getGroupedButton = void 0;
var Sm = pn;
function Em(e, n, t, r) {
  e.addChild(n, e.group, t);
  var i = n.id, a = n.label, o = n.disabled, s = n.buttons, y = n.plain;
  return e.subscribeToChild(n, Sm.Action.UPDATE, r), { id: i, label: a, buttons: s, disabled: o, plain: y };
}
Qi.getGroupedButton = Em;
(function(e) {
  var n = g && g.__extends || function() {
    var m = function(b, O) {
      return m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(_, T) {
        _.__proto__ = T;
      } || function(_, T) {
        for (var P in T)
          Object.prototype.hasOwnProperty.call(T, P) && (_[P] = T[P]);
      }, m(b, O);
    };
    return function(b, O) {
      if (typeof O != "function" && O !== null)
        throw new TypeError("Class extends value " + String(O) + " is not a constructor or null");
      m(b, O);
      function _() {
        this.constructor = b;
      }
      b.prototype = O === null ? Object.create(O) : (_.prototype = O.prototype, new _());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(m) {
      for (var b, O = 1, _ = arguments.length; O < _; O++) {
        b = arguments[O];
        for (var T in b)
          Object.prototype.hasOwnProperty.call(b, T) && (m[T] = b[T]);
      }
      return m;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.TitleBar = e.update = e.clickBreadcrumb = e.clickActionButton = e.Action = void 0;
  var r = de, i = Gt, a = pn, o = Qi, s = yn, y = se, u = le, c;
  (function(m) {
    m.UPDATE = "APP::TITLEBAR::UPDATE", m.BUTTON_CLICK = "APP::TITLEBAR::BUTTONS::BUTTON::CLICK", m.BUTTON_UPDATE = "APP::TITLEBAR::BUTTONS::BUTTON::UPDATE", m.BUTTON_GROUP_UPDATE = "APP::TITLEBAR::BUTTONS::BUTTONGROUP::UPDATE", m.BREADCRUMBS_CLICK = "APP::TITLEBAR::BREADCRUMBS::BUTTON::CLICK", m.BREADCRUMBS_UPDATE = "APP::TITLEBAR::BREADCRUMBS::BUTTON::UPDATE";
  })(c = e.Action || (e.Action = {}));
  var l = {
    group: u.Group.TitleBar,
    subgroups: ["Buttons"]
  }, p = {
    group: u.Group.TitleBar,
    subgroups: ["Breadcrumbs"],
    type: u.ComponentType.Button
  };
  function h(m, b) {
    var O = u.ComponentType.Button, _ = t({ id: m, type: O }, l);
    return i.clickButton(u.Group.TitleBar, _, b);
  }
  e.clickActionButton = h;
  function d(m, b) {
    var O = t({ id: m }, p);
    return i.clickButton(u.Group.TitleBar, O, b);
  }
  e.clickBreadcrumb = d;
  function f(m) {
    return y.actionWrapper({
      payload: m,
      group: u.Group.TitleBar,
      type: c.UPDATE
    });
  }
  e.update = f;
  var v = (
    /** @class */
    function(m) {
      n(b, m);
      function b(O, _) {
        var T = m.call(this, O, u.Group.TitleBar, u.Group.TitleBar) || this;
        return !_.title && !_.breadcrumbs && !_.buttons || T.set(_), T;
      }
      return Object.defineProperty(b.prototype, "buttons", {
        get: function() {
          if (!(!this.primary && !this.secondary))
            return {
              primary: this.primary,
              secondary: this.secondary
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(b.prototype, "buttonsOptions", {
        get: function() {
          if (!(!this.primaryOptions && !this.secondaryOptions))
            return {
              primary: this.primaryOptions,
              secondary: this.secondaryOptions
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(b.prototype, "options", {
        get: function() {
          return {
            breadcrumbs: this.breadcrumbsOption,
            buttons: this.buttonsOptions,
            title: this.title
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(b.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { breadcrumbs: this.breadcrumb, buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), b.prototype.set = function(O, _) {
        _ === void 0 && (_ = !0);
        var T = y.getMergedProps(this.options, O), P = T.title, E = T.buttons, S = T.breadcrumbs;
        return this.title = P, this.setBreadcrumbs(S), this.setPrimaryButton(E ? E.primary : void 0), this.setSecondaryButton(E ? E.secondary : void 0), _ && this.dispatch(c.UPDATE), this;
      }, b.prototype.dispatch = function(O) {
        switch (O) {
          case c.UPDATE:
            this.app.dispatch(f(this.payload));
            break;
        }
        return this;
      }, b.prototype.getButton = function(O, _, T) {
        return O instanceof a.ButtonGroup ? o.getGroupedButton(this, O, _, T) : s.getSingleButton(this, O, _, T);
      }, b.prototype.updatePrimaryButton = function(O) {
        this.primary && y.updateActionFromPayload(this.primary, O) && this.dispatch(c.UPDATE);
      }, b.prototype.updateSecondaryButtons = function(O) {
        if (this.secondary) {
          var _ = this.secondary.find(function(P) {
            return P.id === O.id;
          });
          if (_) {
            var T = !1;
            a.isGroupedButtonPayload(O), T = y.updateActionFromPayload(_, O), T && this.dispatch(c.UPDATE);
          }
        }
      }, b.prototype.updateBreadcrumbButton = function(O) {
        this.breadcrumb && y.updateActionFromPayload(this.breadcrumb, O) && this.dispatch(c.UPDATE);
      }, b.prototype.setPrimaryButton = function(O) {
        this.primaryOptions = this.getChildButton(O, this.primaryOptions), this.primary = this.primaryOptions ? this.getButton(this.primaryOptions, l.subgroups, this.updatePrimaryButton) : void 0;
      }, b.prototype.setSecondaryButton = function(O) {
        var _ = this, T = O || [], P = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(T, P), this.secondary = this.secondaryOptions ? this.secondaryOptions.map(function(E) {
          return _.getButton(E, l.subgroups, _.updateSecondaryButtons);
        }) : void 0;
      }, b.prototype.setBreadcrumbs = function(O) {
        this.breadcrumbsOption = this.getChildButton(O, this.breadcrumbsOption), this.breadcrumb = this.breadcrumbsOption ? this.getButton(this.breadcrumbsOption, p.subgroups, this.updateBreadcrumbButton) : void 0;
      }, b.prototype.getChildButton = function(O, _) {
        var T = O ? [O] : [], P = _ ? [_] : [], E = this.getUpdatedChildActions(T, P);
        return E ? E[0] : void 0;
      }, b;
    }(r.ActionSetWithChildren)
  );
  e.TitleBar = v;
})(Si);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.TitleBar = e.update = e.clickBreadcrumb = e.clickActionButton = e.Action = void 0;
  var n = Si;
  Object.defineProperty(e, "TitleBar", { enumerable: !0, get: function() {
    return n.TitleBar;
  } });
  var t = Si;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "clickActionButton", { enumerable: !0, get: function() {
    return t.clickActionButton;
  } }), Object.defineProperty(e, "clickBreadcrumb", { enumerable: !0, get: function() {
    return t.clickBreadcrumb;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  function r(i, a) {
    return new n.TitleBar(i, a);
  }
  e.create = r;
})(fu);
var du = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Toast = e.primaryAction = e.clear = e.show = e.Action = void 0;
  var n = Pr;
  Object.defineProperty(e, "Toast", { enumerable: !0, get: function() {
    return n.Toast;
  } });
  var t = Pr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return t.show;
  } }), Object.defineProperty(e, "clear", { enumerable: !0, get: function() {
    return t.clear;
  } }), Object.defineProperty(e, "primaryAction", { enumerable: !0, get: function() {
    return t.primaryAction;
  } });
  function r(i, a) {
    return new n.Toast(i, a);
  }
  e.create = r;
})(du);
var pu = {}, hu = {};
(function(e) {
  var n = g && g.__extends || function() {
    var d = function(f, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, b) {
        m.__proto__ = b;
      } || function(m, b) {
        for (var O in b)
          Object.prototype.hasOwnProperty.call(b, O) && (m[O] = b[O]);
      }, d(f, v);
    };
    return function(f, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      d(f, v);
      function m() {
        this.constructor = f;
      }
      f.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(d) {
      for (var f, v = 1, m = arguments.length; v < m; v++) {
        f = arguments[v];
        for (var b in f)
          Object.prototype.hasOwnProperty.call(f, b) && (d[b] = f[b]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ContextualSaveBar = e.update = e.discard = e.save = e.hide = e.show = e.Action = void 0;
  var r = se, i = de, a = le, o;
  (function(d) {
    d.DISCARD = "APP::CONTEXTUAL_SAVE_BAR::DISCARD", d.SAVE = "APP::CONTEXTUAL_SAVE_BAR::SAVE", d.SHOW = "APP::CONTEXTUAL_SAVE_BAR::SHOW", d.HIDE = "APP::CONTEXTUAL_SAVE_BAR::HIDE", d.UPDATE = "APP::CONTEXTUAL_SAVE_BAR::UPDATE";
  })(o = e.Action || (e.Action = {}));
  function s(d, f) {
    return r.actionWrapper({
      group: a.Group.ContextualSaveBar,
      type: d,
      payload: f
    });
  }
  function y(d) {
    return s(o.SHOW, d);
  }
  e.show = y;
  function u(d) {
    return s(o.HIDE, d);
  }
  e.hide = u;
  function c(d) {
    return s(o.SAVE, d);
  }
  e.save = c;
  function l(d) {
    return s(o.DISCARD, d);
  }
  e.discard = l;
  function p(d) {
    return s(o.UPDATE, d);
  }
  e.update = p;
  var h = (
    /** @class */
    function(d) {
      n(f, d);
      function f(v, m) {
        m === void 0 && (m = {});
        var b = d.call(this, v, a.Group.ContextualSaveBar, a.Group.ContextualSaveBar) || this;
        return b.options = m, b.set(m, !1), b;
      }
      return Object.defineProperty(f.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return t({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), f.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var b = r.getMergedProps(this.options, v);
        return this.options = b, m && this.dispatch(o.UPDATE), this;
      }, f.prototype.dispatch = function(v) {
        return this.app.dispatch(s(v, this.payload)), this;
      }, f;
    }(i.ActionSet)
  );
  e.ContextualSaveBar = h;
})(hu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ContextualSaveBar = e.update = e.discard = e.save = e.hide = e.show = e.Action = void 0;
  var n = hu;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return n.show;
  } }), Object.defineProperty(e, "hide", { enumerable: !0, get: function() {
    return n.hide;
  } }), Object.defineProperty(e, "save", { enumerable: !0, get: function() {
    return n.save;
  } }), Object.defineProperty(e, "discard", { enumerable: !0, get: function() {
    return n.discard;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return n.update;
  } }), Object.defineProperty(e, "ContextualSaveBar", { enumerable: !0, get: function() {
    return n.ContextualSaveBar;
  } });
  function t(r, i) {
    return new n.ContextualSaveBar(r, i);
  }
  e.create = t;
})(pu);
var tf = {}, Ao = {};
(function(e) {
  var n = g && g.__extends || function() {
    var c = function(l, p) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, d) {
        h.__proto__ = d;
      } || function(h, d) {
        for (var f in d)
          Object.prototype.hasOwnProperty.call(d, f) && (h[f] = d[f]);
      }, c(l, p);
    };
    return function(l, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      c(l, p);
      function h() {
        this.constructor = l;
      }
      l.prototype = p === null ? Object.create(p) : (h.prototype = p.prototype, new h());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(c) {
      for (var l, p = 1, h = arguments.length; p < h; p++) {
        l = arguments[p];
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && (c[d] = l[d]);
      }
      return c;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.close = e.show = e.Share = e.Action = void 0;
  var r = le, i = se, a = de, o;
  (function(c) {
    c.SHOW = "APP::SHARE::SHOW", c.CLOSE = "APP::SHARE::CLOSE";
  })(o = e.Action || (e.Action = {}));
  var s = (
    /** @class */
    function(c) {
      n(l, c);
      function l(p) {
        return c.call(this, p, r.Group.Share, r.Group.Share) || this;
      }
      return l.prototype.dispatch = function(p, h) {
        switch (p) {
          case o.SHOW:
            this.dispatchShareAction(o.SHOW, h);
            break;
          case o.CLOSE:
            this.dispatchShareAction(o.CLOSE, h);
            break;
          default:
            throw new Error("Action: " + p + " not supported");
        }
        return this;
      }, l.prototype.dispatchShareAction = function(p, h) {
        this.app.dispatch(i.actionWrapper({
          type: p,
          group: r.Group.Share,
          payload: t({ id: this.id }, h)
        }));
      }, l;
    }(a.ActionSet)
  );
  e.Share = s;
  function y() {
    return i.actionWrapper({
      group: r.Group.Share,
      type: o.SHOW
    });
  }
  e.show = y;
  function u(c) {
    return i.actionWrapper({
      group: r.Group.Share,
      type: o.CLOSE,
      payload: c
    });
  }
  e.close = u;
})(Ao);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Share = e.close = e.show = e.Action = void 0;
  var n = Ao;
  Object.defineProperty(e, "Share", { enumerable: !0, get: function() {
    return n.Share;
  } });
  var t = Ao;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return t.show;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return t.close;
  } });
  function r(i) {
    return new n.Share(i);
  }
  e.create = r;
})(tf);
var yu = {}, Ei = {}, qn = {};
(function(e) {
  var n = g && g.__extends || function() {
    var c = function(l, p) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, d) {
        h.__proto__ = d;
      } || function(h, d) {
        for (var f in d)
          Object.prototype.hasOwnProperty.call(d, f) && (h[f] = d[f]);
      }, c(l, p);
    };
    return function(l, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      c(l, p);
      function h() {
        this.constructor = l;
      }
      l.prototype = p === null ? Object.create(p) : (h.prototype = p.prototype, new h());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(c) {
      for (var l, p = 1, h = arguments.length; p < h; p++) {
        l = arguments[p];
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && (c[d] = l[d]);
      }
      return c;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.AppLink = e.update = e.Action = void 0;
  var r = se, i = de, a = le, o = Er, s;
  (function(c) {
    c.UPDATE = "UPDATE";
  })(s = e.Action || (e.Action = {}));
  function y(c, l, p) {
    var h = l.id, d = p.label, f = p.destination, v = t(t({}, p), { id: h, label: d, destination: f });
    return r.actionWrapper({
      group: c,
      type: r.getEventNameSpace(c, s.UPDATE, l),
      payload: v
    });
  }
  e.update = y;
  var u = (
    /** @class */
    function(c) {
      n(l, c);
      function l(p, h) {
        var d = c.call(this, p, a.Group.Link, a.Group.Link) || this;
        return d.label = "", d.destination = "", d.set(h, !1), d;
      }
      return Object.defineProperty(l.prototype, "options", {
        get: function() {
          var p = this, h = p.label, d = p.destination;
          return {
            label: h,
            destination: d,
            redirectType: o.Action.APP
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(l.prototype, "payload", {
        get: function() {
          var p = this.options, h = p.label, d = p.destination, f = p.redirectType, v = d;
          return {
            id: this.id,
            label: h,
            destination: { path: v },
            redirectType: f
          };
        },
        enumerable: !1,
        configurable: !0
      }), l.prototype.set = function(p, h) {
        h === void 0 && (h = !0);
        var d = r.getMergedProps(this.options, p), f = d.label, v = d.destination;
        return this.label = f, this.destination = v, h && this.dispatch(s.UPDATE), this;
      }, l.prototype.dispatch = function(p) {
        switch (p) {
          case s.UPDATE: {
            var h = y(this.group, this.component, this.payload);
            this.app.dispatch(h);
            break;
          }
        }
        return this;
      }, l;
    }(i.ActionSet)
  );
  e.AppLink = u;
})(qn);
(function(e) {
  var n = g && g.__extends || function() {
    var l = function(p, h) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, f) {
        d.__proto__ = f;
      } || function(d, f) {
        for (var v in f)
          Object.prototype.hasOwnProperty.call(f, v) && (d[v] = f[v]);
      }, l(p, h);
    };
    return function(p, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      l(p, h);
      function d() {
        this.constructor = p;
      }
      p.prototype = h === null ? Object.create(h) : (d.prototype = h.prototype, new d());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.NavigationMenu = e.update = e.Action = void 0;
  var r = qn, i = se, a = de, o = le, s = ["Navigation_Menu"], y;
  (function(l) {
    l.UPDATE = "APP::MENU::NAVIGATION_MENU::UPDATE", l.LINK_UPDATE = "APP::MENU::NAVIGATION_MENU::LINK::UPDATE";
  })(y = e.Action || (e.Action = {}));
  function u(l) {
    return i.actionWrapper({
      payload: l,
      group: o.Group.Menu,
      type: y.UPDATE
    });
  }
  e.update = u;
  var c = (
    /** @class */
    function(l) {
      n(p, l);
      function p(h, d) {
        var f = l.call(this, h, "Navigation_Menu", o.Group.Menu) || this;
        return f.items = [], f.set(d), f;
      }
      return Object.defineProperty(p.prototype, "options", {
        get: function() {
          return {
            items: this.itemsOptions,
            active: this.activeOptions
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(p.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { active: this.active, items: this.items, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.set = function(h, d) {
        d === void 0 && (d = !0);
        var f = i.getMergedProps(this.options, h), v = f.items, m = f.active;
        return this.setItems(v), this.activeOptions = m, this.active = m && m.id, d && this.dispatch(y.UPDATE), this;
      }, p.prototype.dispatch = function(h) {
        switch (h) {
          case y.UPDATE:
            this.app.dispatch(u(this.payload));
            break;
        }
        return this;
      }, p.prototype.updateItem = function(h) {
        if (this.items) {
          var d = this.items.find(function(f) {
            return f.id === h.id;
          });
          d && i.updateActionFromPayload(d, h) && this.dispatch(y.UPDATE);
        }
      }, p.prototype.setItems = function(h) {
        var d = this, f = h || [], v = this.itemsOptions || [];
        this.itemsOptions = this.getUpdatedChildActions(f, v), this.items = this.itemsOptions ? this.itemsOptions.map(function(m) {
          return d.addChild(m, d.group, s), d.subscribeToChild(m, r.Action.UPDATE, d.updateItem), m.payload;
        }) : [];
      }, p;
    }(a.ActionSetWithChildren)
  );
  e.NavigationMenu = c;
})(Ei);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.NavigationMenu = e.update = e.Action = void 0;
  var n = Ei;
  Object.defineProperty(e, "NavigationMenu", { enumerable: !0, get: function() {
    return n.NavigationMenu;
  } });
  var t = Ei;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  function r(i, a) {
    return new n.NavigationMenu(i, a);
  }
  e.create = r;
})(yu);
var nf = {}, Ti = {};
(function(e) {
  var n = g && g.__extends || function() {
    var l = function(p, h) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, f) {
        d.__proto__ = f;
      } || function(d, f) {
        for (var v in f)
          Object.prototype.hasOwnProperty.call(f, v) && (d[v] = f[v]);
      }, l(p, h);
    };
    return function(p, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      l(p, h);
      function d() {
        this.constructor = p;
      }
      p.prototype = h === null ? Object.create(h) : (d.prototype = h.prototype, new d());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ChannelMenu = e.update = e.Action = void 0;
  var r = qn, i = se, a = de, o = le, s = ["Channel_Menu"], y;
  (function(l) {
    l.UPDATE = "APP::MENU::CHANNEL_MENU::UPDATE", l.LINK_UPDATE = "APP::MENU::CHANNEL_MENU::LINK::UPDATE";
  })(y = e.Action || (e.Action = {}));
  function u(l) {
    return i.actionWrapper({
      payload: l,
      group: o.Group.Menu,
      type: y.UPDATE
    });
  }
  e.update = u;
  var c = (
    /** @class */
    function(l) {
      n(p, l);
      function p(h, d) {
        var f = l.call(this, h, "Channel_Menu", o.Group.Menu) || this;
        return f.items = [], f.set(d), f;
      }
      return Object.defineProperty(p.prototype, "options", {
        get: function() {
          return {
            items: this.itemsOptions,
            active: this.activeOptions
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(p.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { active: this.active, items: this.items, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.set = function(h, d) {
        d === void 0 && (d = !0);
        var f = i.getMergedProps(this.options, h), v = f.items, m = f.active;
        return this.setItems(v), this.activeOptions = m, this.active = m && m.id, d && this.dispatch(y.UPDATE), this;
      }, p.prototype.dispatch = function(h) {
        switch (h) {
          case y.UPDATE:
            this.app.dispatch(u(this.payload));
            break;
        }
        return this;
      }, p.prototype.updateItem = function(h) {
        if (this.items) {
          var d = this.items.find(function(f) {
            return f.id === h.id;
          });
          d && i.updateActionFromPayload(d, h) && this.dispatch(y.UPDATE);
        }
      }, p.prototype.setItems = function(h) {
        var d = this, f = h || [], v = this.itemsOptions || [];
        this.itemsOptions = this.getUpdatedChildActions(f, v), this.items = this.itemsOptions ? this.itemsOptions.map(function(m) {
          return d.addChild(m, d.group, s), d.subscribeToChild(m, r.Action.UPDATE, d.updateItem), m.payload;
        }) : [];
      }, p;
    }(a.ActionSetWithChildren)
  );
  e.ChannelMenu = c;
})(Ti);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ChannelMenu = e.update = e.Action = void 0;
  var n = Ti;
  Object.defineProperty(e, "ChannelMenu", { enumerable: !0, get: function() {
    return n.ChannelMenu;
  } });
  var t = Ti;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  function r(i, a) {
    return new n.ChannelMenu(i, a);
  }
  e.create = r;
})(nf);
var vu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.AppLink = e.update = e.Action = void 0;
  var n = qn;
  Object.defineProperty(e, "AppLink", { enumerable: !0, get: function() {
    return n.AppLink;
  } });
  var t = qn;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  function r(i, a) {
    return new n.AppLink(i, a);
  }
  e.create = r;
})(vu);
var rf = {}, Po = {};
(function(e) {
  var n = g && g.__extends || function() {
    var y = function(u, c) {
      return y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, p) {
        l.__proto__ = p;
      } || function(l, p) {
        for (var h in p)
          Object.prototype.hasOwnProperty.call(p, h) && (l[h] = p[h]);
      }, y(u, c);
    };
    return function(u, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      y(u, c);
      function l() {
        this.constructor = u;
      }
      u.prototype = c === null ? Object.create(c) : (l.prototype = c.prototype, new l());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Pos = e.close = e.Action = void 0;
  var t = se, r = de, i = le, a;
  (function(y) {
    y.CLOSE = "APP::POS::CLOSE", y.LOCATION_UPDATE = "APP::POS::LOCATION::UPDATE", y.USER_UPDATE = "APP::POS::USER::UPDATE", y.DEVICE_UPDATE = "APP::POS::DEVICE::UPDATE";
  })(a = e.Action || (e.Action = {}));
  function o() {
    return t.actionWrapper({
      group: i.Group.Pos,
      type: a.CLOSE
    });
  }
  e.close = o;
  var s = (
    /** @class */
    function(y) {
      n(u, y);
      function u(c) {
        return y.call(this, c, i.Group.Pos, i.Group.Pos) || this;
      }
      return u.prototype.dispatch = function(c) {
        switch (c) {
          case a.CLOSE:
            this.app.dispatch(o());
            break;
        }
        return this;
      }, u;
    }(r.ActionSet)
  );
  e.Pos = s;
})(Po);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Pos = e.close = e.Action = void 0;
  var n = Po;
  Object.defineProperty(e, "Pos", { enumerable: !0, get: function() {
    return n.Pos;
  } });
  var t = Po;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return t.close;
  } });
  function r(i) {
    return new n.Pos(i);
  }
  e.create = r;
})(rf);
var af = {}, of = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(n) {
    n.UPDATE = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::UPDATE", n.BUTTON_CLICK = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::CLICK", n.BUTTON_UPDATE = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::UPDATE";
  }(e.Action || (e.Action = {}));
})(of);
var uf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getSingleButton = void 0;
  var n = yn;
  Object.defineProperty(e, "getSingleButton", { enumerable: !0, get: function() {
    return n.getSingleButton;
  } });
})(uf);
var sf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.unsubscribeActions = e.ActionSetWithChildren = e.ActionSet = void 0;
  var n = de;
  Object.defineProperty(e, "ActionSet", { enumerable: !0, get: function() {
    return n.ActionSet;
  } }), Object.defineProperty(e, "ActionSetWithChildren", { enumerable: !0, get: function() {
    return n.ActionSetWithChildren;
  } }), Object.defineProperty(e, "unsubscribeActions", { enumerable: !0, get: function() {
    return n.unsubscribeActions;
  } });
})(sf);
(function(e) {
  var n = g && g.__extends || function() {
    var d = function(f, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, b) {
        m.__proto__ = b;
      } || function(m, b) {
        for (var O in b)
          Object.prototype.hasOwnProperty.call(b, O) && (m[O] = b[O]);
      }, d(f, v);
    };
    return function(f, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      d(f, v);
      function m() {
        this.constructor = f;
      }
      f.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(d) {
      for (var f, v = 1, m = arguments.length; v < m; v++) {
        f = arguments[v];
        for (var b in f)
          Object.prototype.hasOwnProperty.call(f, b) && (d[b] = f[b]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.MarketingExternalActivityTopBar = e.update = e.clickActionButton = e.MarketingActivityStatusBadgeType = e.Action = void 0;
  var r = of;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } });
  var i = kr, a = uf, o = Xt, s = sf, y = Zt;
  (function(d) {
    d.Default = "DEFAULT", d.Success = "SUCCESS", d.Attention = "ATTENTION", d.Warning = "WARNING", d.Info = "INFO";
  })(e.MarketingActivityStatusBadgeType || (e.MarketingActivityStatusBadgeType = {}));
  var u = {
    group: y.Group.MarketingExternalActivityTopBar,
    subgroups: ["Buttons"]
  };
  function c(d, f) {
    var v = y.ComponentType.Button, m = t({ id: d, type: v }, u);
    return i.clickButton(y.Group.MarketingExternalActivityTopBar, m, f);
  }
  e.clickActionButton = c;
  function l(d) {
    return o.actionWrapper({
      payload: d,
      group: y.Group.MarketingExternalActivityTopBar,
      type: r.Action.UPDATE
    });
  }
  e.update = l;
  var p = (
    /** @class */
    function(d) {
      n(f, d);
      function f(v, m) {
        var b = d.call(this, v, y.Group.MarketingExternalActivityTopBar, y.Group.MarketingExternalActivityTopBar) || this;
        return b.set(m), b;
      }
      return Object.defineProperty(f.prototype, "buttons", {
        get: function() {
          if (!(!this.primary && !this.secondary))
            return {
              primary: this.primary,
              secondary: this.secondary
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "buttonsOptions", {
        get: function() {
          if (!(!this.primaryOptions && !this.secondaryOptions))
            return {
              primary: this.primaryOptions,
              secondary: this.secondaryOptions
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "options", {
        get: function() {
          return {
            title: this.title,
            status: this.status,
            saving: this.saving,
            saved: this.saved,
            buttons: this.buttonsOptions
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), f.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var b = o.getMergedProps(this.options, v), O = b.title, _ = b.buttons, T = b.saved, P = b.saving, E = b.status;
        return this.title = O, this.saving = P, this.saved = T, this.status = E, this.setPrimaryButton(_ ? _.primary : void 0), this.setSecondaryButtons(_ ? _.secondary : void 0), m && this.dispatch(r.Action.UPDATE), this;
      }, f.prototype.dispatch = function(v) {
        switch (v) {
          case r.Action.UPDATE:
            this.app.dispatch(l(this.payload));
            break;
        }
        return this;
      }, f.prototype.getButton = function(v, m, b) {
        return a.getSingleButton(this, v, m, b);
      }, f.prototype.updatePrimaryButton = function(v) {
        this.primary && o.updateActionFromPayload(this.primary, v) && this.dispatch(r.Action.UPDATE);
      }, f.prototype.updateSecondaryButtons = function(v) {
        if (this.secondary) {
          var m = this.secondary.find(function(O) {
            return O.id === v.id;
          });
          if (m) {
            var b = o.updateActionFromPayload(m, v);
            b && this.dispatch(r.Action.UPDATE);
          }
        }
      }, f.prototype.setPrimaryButton = function(v) {
        this.primaryOptions = this.getChildButton(v, this.primaryOptions), this.primary = this.primaryOptions ? this.getButton(this.primaryOptions, u.subgroups, this.updatePrimaryButton) : void 0;
      }, f.prototype.setSecondaryButtons = function(v) {
        var m = this, b = v || [], O = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(b, O), this.secondary = this.secondaryOptions ? this.secondaryOptions.map(function(_) {
          return m.getButton(_, u.subgroups, m.updateSecondaryButtons);
        }) : void 0;
      }, f.prototype.updateSaving = function(v) {
        this.saving = v, this.dispatch(r.Action.UPDATE);
      }, f.prototype.updateSaved = function(v) {
        this.saved = v, this.dispatch(r.Action.UPDATE);
      }, f.prototype.updateStatus = function(v) {
        this.status = v, this.dispatch(r.Action.UPDATE);
      }, f.prototype.getChildButton = function(v, m) {
        var b = v ? [v] : [], O = m ? [m] : [], _ = this.getUpdatedChildActions(b, O);
        return _ ? _[0] : void 0;
      }, f;
    }(s.ActionSetWithChildren)
  );
  e.MarketingExternalActivityTopBar = p;
  function h(d, f) {
    return new p(d, f);
  }
  e.create = h;
})(af);
var cf = {}, lf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fullPageLoad = e.skeletonPageLoad = e.Action = void 0;
  var n = le, t = se, r;
  (function(o) {
    o.SKELETON_PAGE_LOAD = "APP::PERFORMANCE::SKELETON_PAGE_LOAD", o.FULL_PAGE_LOAD = "APP::PERFORMANCE::FULL_PAGE_LOAD";
  })(r = e.Action || (e.Action = {}));
  function i() {
    return t.actionWrapper({
      group: n.Group.Performance,
      type: r.SKELETON_PAGE_LOAD
    });
  }
  e.skeletonPageLoad = i;
  function a() {
    return t.actionWrapper({
      group: n.Group.Performance,
      type: r.FULL_PAGE_LOAD
    });
  }
  e.fullPageLoad = a;
})(lf);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fullPageLoad = e.skeletonPageLoad = e.Action = void 0;
  var n = lf;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "skeletonPageLoad", { enumerable: !0, get: function() {
    return n.skeletonPageLoad;
  } }), Object.defineProperty(e, "fullPageLoad", { enumerable: !0, get: function() {
    return n.fullPageLoad;
  } });
})(cf);
var ff = {}, Ii = {};
(function(e) {
  var n = g && g.__extends || function() {
    var d = function(f, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, b) {
        m.__proto__ = b;
      } || function(m, b) {
        for (var O in b)
          Object.prototype.hasOwnProperty.call(b, O) && (m[O] = b[O]);
      }, d(f, v);
    };
    return function(f, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      d(f, v);
      function m() {
        this.constructor = f;
      }
      f.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), t = g && g.__assign || function() {
    return t = Object.assign || function(d) {
      for (var f, v = 1, m = arguments.length; v < m; v++) {
        f = arguments[v];
        for (var b in f)
          Object.prototype.hasOwnProperty.call(f, b) && (d[b] = f[b]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.unstable_Picker = e.loadMore = e.search = e.update = e.cancel = e.open = e.select = e.ALL_RESOURCE_VERTICAL_ALIGNMENT = e.ALL_MEDIA_KINDS = e.ALL_BADGE_STATUSES = e.ALL_BADGE_PROGRESSES = e.Action = void 0;
  var r = se, i = de, a = le, o;
  (function(d) {
    d.OPEN = "APP::PICKER::OPEN", d.SELECT = "APP::PICKER::SELECT", d.UPDATE = "APP::PICKER::UPDATE", d.CANCEL = "APP::PICKER::CANCEL", d.SEARCH = "APP::PICKER::SEARCH", d.LOAD_MORE = "APP::PICKER::LOAD_MORE";
  })(o = e.Action || (e.Action = {})), e.ALL_BADGE_PROGRESSES = [
    "incomplete",
    "partiallyComplete",
    "complete"
  ], e.ALL_BADGE_STATUSES = [
    "success",
    "info",
    "attention",
    "critical",
    "warning",
    "new"
  ], e.ALL_MEDIA_KINDS = ["Avatar", "Thumbnail"], e.ALL_RESOURCE_VERTICAL_ALIGNMENT = [
    "leading",
    "trailing",
    "center"
  ];
  function s(d) {
    return r.actionWrapper({
      payload: d,
      group: a.Group.unstable_Picker,
      type: o.SELECT
    });
  }
  e.select = s;
  function y(d) {
    return r.actionWrapper({
      payload: d,
      group: a.Group.unstable_Picker,
      type: o.OPEN
    });
  }
  e.open = y;
  function u(d) {
    return r.actionWrapper({
      payload: d,
      group: a.Group.unstable_Picker,
      type: o.CANCEL
    });
  }
  e.cancel = u;
  function c(d) {
    return r.actionWrapper({
      payload: d,
      group: a.Group.unstable_Picker,
      type: o.UPDATE
    });
  }
  e.update = c;
  function l(d) {
    return r.actionWrapper({
      payload: d,
      group: a.Group.unstable_Picker,
      type: o.SEARCH
    });
  }
  e.search = l;
  function p(d) {
    return r.actionWrapper({
      payload: d,
      group: a.Group.unstable_Picker,
      type: o.LOAD_MORE
    });
  }
  e.loadMore = p;
  var h = (
    /** @class */
    function(d) {
      n(f, d);
      function f(v, m) {
        var b = d.call(this, v, a.Group.unstable_Picker, a.Group.unstable_Picker) || this;
        return b.items = [], b.selectedItems = [], b.set(m, !1), b;
      }
      return Object.defineProperty(f.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "options", {
        get: function() {
          return {
            items: this.items,
            maxSelectable: this.maxSelectable,
            selectedItems: this.selectedItems,
            title: this.title,
            loading: this.loading,
            searchQuery: this.searchQuery,
            searchQueryPlaceholder: this.searchQueryPlaceholder,
            primaryActionLabel: this.primaryActionLabel,
            secondaryActionLabel: this.secondaryActionLabel,
            emptySearchLabel: this.emptySearchLabel,
            canLoadMore: this.canLoadMore,
            loadingMore: this.loadingMore,
            verticalAlignment: this.verticalAlignment,
            allowEmptySelection: this.allowEmptySelection,
            resourceName: this.resourceName
          };
        },
        enumerable: !1,
        configurable: !0
      }), f.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var b = r.getMergedProps(this.options, v), O = b.selectedItems, _ = O === void 0 ? [] : O, T = b.maxSelectable, P = T === void 0 ? 0 : T, E = b.items, S = E === void 0 ? [] : E, I = b.loading, w = I === void 0 ? !1 : I, j = b.title, B = b.searchQuery, U = b.searchQueryPlaceholder, D = b.primaryActionLabel, $ = b.secondaryActionLabel, H = b.emptySearchLabel, F = b.canLoadMore, X = F === void 0 ? !1 : F, me = b.loadingMore, z = me === void 0 ? !1 : me, Ie = b.verticalAlignment, Q = b.allowEmptySelection, re = b.resourceName;
        return this.title = j, this.items = S, this.selectedItems = _, this.maxSelectable = P, this.loading = w, this.searchQuery = B, this.searchQueryPlaceholder = U, this.primaryActionLabel = D, this.secondaryActionLabel = $, this.emptySearchLabel = H, this.canLoadMore = X, this.loadingMore = z, this.verticalAlignment = Ie, this.allowEmptySelection = Q, this.resourceName = re, m && this.update(), this;
      }, f.prototype.dispatch = function(v, m) {
        return v === o.OPEN ? this.open() : v === o.UPDATE ? this.update() : v === o.CANCEL ? this.cancel() : v === o.SELECT ? (this.selectedItems = (m == null ? void 0 : m.selectedItems) || [], this.app.dispatch(s({ id: this.id, selectedItems: this.selectedItems }))) : v === o.SEARCH ? (this.searchQuery = (m == null ? void 0 : m.searchQuery) || "", this.app.dispatch(l({ id: this.id, searchQuery: this.searchQuery }))) : v === o.LOAD_MORE && this.loadMore(), this;
      }, f.prototype.update = function() {
        this.app.dispatch(c(this.payload));
      }, f.prototype.open = function() {
        this.app.dispatch(y(this.payload));
      }, f.prototype.cancel = function() {
        this.app.dispatch(u({ id: this.id }));
      }, f.prototype.loadMore = function() {
        this.app.dispatch(p(this.payload));
      }, f;
    }(i.ActionSet)
  );
  e.unstable_Picker = h;
})(Ii);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.unstable_Picker = e.update = e.select = e.search = e.open = e.loadMore = e.cancel = e.ALL_RESOURCE_VERTICAL_ALIGNMENT = e.ALL_MEDIA_KINDS = e.ALL_BADGE_STATUSES = e.ALL_BADGE_PROGRESSES = e.Action = void 0;
  var n = Ii;
  Object.defineProperty(e, "unstable_Picker", { enumerable: !0, get: function() {
    return n.unstable_Picker;
  } });
  var t = Ii;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "ALL_BADGE_PROGRESSES", { enumerable: !0, get: function() {
    return t.ALL_BADGE_PROGRESSES;
  } }), Object.defineProperty(e, "ALL_BADGE_STATUSES", { enumerable: !0, get: function() {
    return t.ALL_BADGE_STATUSES;
  } }), Object.defineProperty(e, "ALL_MEDIA_KINDS", { enumerable: !0, get: function() {
    return t.ALL_MEDIA_KINDS;
  } }), Object.defineProperty(e, "ALL_RESOURCE_VERTICAL_ALIGNMENT", { enumerable: !0, get: function() {
    return t.ALL_RESOURCE_VERTICAL_ALIGNMENT;
  } }), Object.defineProperty(e, "cancel", { enumerable: !0, get: function() {
    return t.cancel;
  } }), Object.defineProperty(e, "loadMore", { enumerable: !0, get: function() {
    return t.loadMore;
  } }), Object.defineProperty(e, "open", { enumerable: !0, get: function() {
    return t.open;
  } }), Object.defineProperty(e, "search", { enumerable: !0, get: function() {
    return t.search;
  } }), Object.defineProperty(e, "select", { enumerable: !0, get: function() {
    return t.select;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  var r = function(i, a) {
    return new n.unstable_Picker(i, a);
  };
  e.create = r;
})(ff);
var mu = {}, df = {}, So = { exports: {} };
(function(e, n) {
  (function(t, r) {
    r(n);
  })(g, function(t) {
    var r, i, a, o, s, y = -1, u = function(k) {
      addEventListener("pageshow", function(N) {
        N.persisted && (y = N.timeStamp, k(N));
      }, !0);
    }, c = function() {
      return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    }, l = function() {
      var k = c();
      return k && k.activationStart || 0;
    }, p = function(k, N) {
      var V = c(), Y = "navigate";
      return y >= 0 ? Y = "back-forward-cache" : V && (document.prerendering || l() > 0 ? Y = "prerender" : document.wasDiscarded ? Y = "restore" : V.type && (Y = V.type.replace(/_/g, "-"))), { name: k, value: N === void 0 ? -1 : N, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: Y };
    }, h = function(k, N, V) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(k)) {
          var Y = new PerformanceObserver(function(G) {
            Promise.resolve().then(function() {
              N(G.getEntries());
            });
          });
          return Y.observe(Object.assign({ type: k, buffered: !0 }, V || {})), Y;
        }
      } catch {
      }
    }, d = function(k, N, V, Y) {
      var G, te;
      return function(Ne) {
        N.value >= 0 && (Ne || Y) && ((te = N.value - (G || 0)) || G === void 0) && (G = N.value, N.delta = te, N.rating = function(ge, ye) {
          return ge > ye[1] ? "poor" : ge > ye[0] ? "needs-improvement" : "good";
        }(N.value, V), k(N));
      };
    }, f = function(k) {
      requestAnimationFrame(function() {
        return requestAnimationFrame(function() {
          return k();
        });
      });
    }, v = function(k) {
      var N = function(V) {
        V.type !== "pagehide" && document.visibilityState !== "hidden" || k(V);
      };
      addEventListener("visibilitychange", N, !0), addEventListener("pagehide", N, !0);
    }, m = function(k) {
      var N = !1;
      return function(V) {
        N || (k(V), N = !0);
      };
    }, b = -1, O = function() {
      return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0;
    }, _ = function(k) {
      document.visibilityState === "hidden" && b > -1 && (b = k.type === "visibilitychange" ? k.timeStamp : 0, P());
    }, T = function() {
      addEventListener("visibilitychange", _, !0), addEventListener("prerenderingchange", _, !0);
    }, P = function() {
      removeEventListener("visibilitychange", _, !0), removeEventListener("prerenderingchange", _, !0);
    }, E = function() {
      return b < 0 && (b = O(), T(), u(function() {
        setTimeout(function() {
          b = O(), T();
        }, 0);
      })), { get firstHiddenTime() {
        return b;
      } };
    }, S = function(k) {
      document.prerendering ? addEventListener("prerenderingchange", function() {
        return k();
      }, !0) : k();
    }, I = [1800, 3e3], w = function(k, N) {
      N = N || {}, S(function() {
        var V, Y = E(), G = p("FCP"), te = h("paint", function(Ne) {
          Ne.forEach(function(ge) {
            ge.name === "first-contentful-paint" && (te.disconnect(), ge.startTime < Y.firstHiddenTime && (G.value = Math.max(ge.startTime - l(), 0), G.entries.push(ge), V(!0)));
          });
        });
        te && (V = d(k, G, I, N.reportAllChanges), u(function(Ne) {
          G = p("FCP"), V = d(k, G, I, N.reportAllChanges), f(function() {
            G.value = performance.now() - Ne.timeStamp, V(!0);
          });
        }));
      });
    }, j = [0.1, 0.25], B = function(k, N) {
      N = N || {}, w(m(function() {
        var V, Y = p("CLS", 0), G = 0, te = [], Ne = function(ye) {
          ye.forEach(function(Ve) {
            if (!Ve.hadRecentInput) {
              var gn = te[0], Wt = te[te.length - 1];
              G && Ve.startTime - Wt.startTime < 1e3 && Ve.startTime - gn.startTime < 5e3 ? (G += Ve.value, te.push(Ve)) : (G = Ve.value, te = [Ve]);
            }
          }), G > Y.value && (Y.value = G, Y.entries = te, V());
        }, ge = h("layout-shift", Ne);
        ge && (V = d(k, Y, j, N.reportAllChanges), v(function() {
          Ne(ge.takeRecords()), V(!0);
        }), u(function() {
          G = 0, Y = p("CLS", 0), V = d(k, Y, j, N.reportAllChanges), f(function() {
            return V();
          });
        }), setTimeout(V, 0));
      }));
    }, U = { passive: !0, capture: !0 }, D = /* @__PURE__ */ new Date(), $ = function(k, N) {
      r || (r = N, i = k, a = /* @__PURE__ */ new Date(), X(removeEventListener), H());
    }, H = function() {
      if (i >= 0 && i < a - D) {
        var k = { entryType: "first-input", name: r.type, target: r.target, cancelable: r.cancelable, startTime: r.timeStamp, processingStart: r.timeStamp + i };
        o.forEach(function(N) {
          N(k);
        }), o = [];
      }
    }, F = function(k) {
      if (k.cancelable) {
        var N = (k.timeStamp > 1e12 ? /* @__PURE__ */ new Date() : performance.now()) - k.timeStamp;
        k.type == "pointerdown" ? function(V, Y) {
          var G = function() {
            $(V, Y), Ne();
          }, te = function() {
            Ne();
          }, Ne = function() {
            removeEventListener("pointerup", G, U), removeEventListener("pointercancel", te, U);
          };
          addEventListener("pointerup", G, U), addEventListener("pointercancel", te, U);
        }(N, k) : $(N, k);
      }
    }, X = function(k) {
      ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(N) {
        return k(N, F, U);
      });
    }, me = [100, 300], z = function(k, N) {
      N = N || {}, S(function() {
        var V, Y = E(), G = p("FID"), te = function(ye) {
          ye.startTime < Y.firstHiddenTime && (G.value = ye.processingStart - ye.startTime, G.entries.push(ye), V(!0));
        }, Ne = function(ye) {
          ye.forEach(te);
        }, ge = h("first-input", Ne);
        V = d(k, G, me, N.reportAllChanges), ge && v(m(function() {
          Ne(ge.takeRecords()), ge.disconnect();
        })), ge && u(function() {
          var ye;
          G = p("FID"), V = d(k, G, me, N.reportAllChanges), o = [], i = -1, r = null, X(addEventListener), ye = te, o.push(ye), H();
        });
      });
    }, Ie = 0, Q = 1 / 0, re = 0, be = function(k) {
      k.forEach(function(N) {
        N.interactionId && (Q = Math.min(Q, N.interactionId), re = Math.max(re, N.interactionId), Ie = re ? (re - Q) / 7 + 1 : 0);
      });
    }, ce = function() {
      return s ? Ie : performance.interactionCount || 0;
    }, K = function() {
      "interactionCount" in performance || s || (s = h("event", be, { type: "event", buffered: !0, durationThreshold: 0 }));
    }, Qe = [200, 500], je = 0, nt = function() {
      return ce() - je;
    }, Fe = [], Pt = {}, Bt = function(k) {
      var N = Fe[Fe.length - 1], V = Pt[k.interactionId];
      if (V || Fe.length < 10 || k.duration > N.latency) {
        if (V)
          V.entries.push(k), V.latency = Math.max(V.latency, k.duration);
        else {
          var Y = { id: k.interactionId, latency: k.duration, entries: [k] };
          Pt[Y.id] = Y, Fe.push(Y);
        }
        Fe.sort(function(G, te) {
          return te.latency - G.latency;
        }), Fe.splice(10).forEach(function(G) {
          delete Pt[G.id];
        });
      }
    }, Vr = function(k, N) {
      N = N || {}, S(function() {
        K();
        var V, Y = p("INP"), G = function(Ne) {
          Ne.forEach(function(Ve) {
            Ve.interactionId && Bt(Ve), Ve.entryType === "first-input" && !Fe.some(function(gn) {
              return gn.entries.some(function(Wt) {
                return Ve.duration === Wt.duration && Ve.startTime === Wt.startTime;
              });
            }) && Bt(Ve);
          });
          var ge, ye = (ge = Math.min(Fe.length - 1, Math.floor(nt() / 50)), Fe[ge]);
          ye && ye.latency !== Y.value && (Y.value = ye.latency, Y.entries = ye.entries, V());
        }, te = h("event", G, { durationThreshold: N.durationThreshold || 40 });
        V = d(k, Y, Qe, N.reportAllChanges), te && (te.observe({ type: "first-input", buffered: !0 }), v(function() {
          G(te.takeRecords()), Y.value < 0 && nt() > 0 && (Y.value = 0, Y.entries = []), V(!0);
        }), u(function() {
          Fe = [], je = ce(), Y = p("INP"), V = d(k, Y, Qe, N.reportAllChanges);
        }));
      });
    }, tr = [2500, 4e3], qt = {}, xt = function(k, N) {
      N = N || {}, S(function() {
        var V, Y = E(), G = p("LCP"), te = function(ye) {
          var Ve = ye[ye.length - 1];
          Ve && Ve.startTime < Y.firstHiddenTime && (G.value = Math.max(Ve.startTime - l(), 0), G.entries = [Ve], V());
        }, Ne = h("largest-contentful-paint", te);
        if (Ne) {
          V = d(k, G, tr, N.reportAllChanges);
          var ge = m(function() {
            qt[G.id] || (te(Ne.takeRecords()), Ne.disconnect(), qt[G.id] = !0, V(!0));
          });
          ["keydown", "click"].forEach(function(ye) {
            addEventListener(ye, ge, !0);
          }), v(ge), u(function(ye) {
            G = p("LCP"), V = d(k, G, tr, N.reportAllChanges), f(function() {
              G.value = performance.now() - ye.timeStamp, qt[G.id] = !0, V(!0);
            });
          });
        }
      });
    }, bn = [800, 1800], $r = function k(N) {
      document.prerendering ? S(function() {
        return k(N);
      }) : document.readyState !== "complete" ? addEventListener("load", function() {
        return k(N);
      }, !0) : setTimeout(N, 0);
    }, en = function(k, N) {
      N = N || {};
      var V = p("TTFB"), Y = d(k, V, bn, N.reportAllChanges);
      $r(function() {
        var G = c();
        if (G) {
          var te = G.responseStart;
          if (te <= 0 || te > performance.now())
            return;
          V.value = Math.max(te - l(), 0), V.entries = [G], Y(!0), u(function() {
            V = p("TTFB", 0), (Y = d(k, V, bn, N.reportAllChanges))(!0);
          });
        }
      });
    };
    t.CLSThresholds = j, t.FCPThresholds = I, t.FIDThresholds = me, t.INPThresholds = Qe, t.LCPThresholds = tr, t.TTFBThresholds = bn, t.getCLS = B, t.getFCP = w, t.getFID = z, t.getINP = Vr, t.getLCP = xt, t.getTTFB = en, t.onCLS = B, t.onFCP = w, t.onFID = z, t.onINP = Vr, t.onLCP = xt, t.onTTFB = en, Object.defineProperty(t, "__esModule", { value: !0 });
  });
})(So, So.exports);
var Tm = So.exports, pf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(n) {
    n.LARGEST_CONTENTFUL_PAINT = "APP::WEB_VITALS::LARGEST_CONTENTFUL_PAINT", n.FIRST_INPUT_DELAY = "APP::WEB_VITALS::FIRST_INPUT_DELAY", n.CUMULATIVE_LAYOUT_SHIFT = "APP::WEB_VITALS::CUMULATIVE_LAYOUT_SHIFT", n.FIRST_CONTENTFUL_PAINT = "APP::WEB_VITALS::FIRST_CONTENTFUL_PAINT", n.TIME_TO_FIRST_BYTE = "APP::WEB_VITALS::TIME_TO_FIRST_BYTE", n.INTERACTION_TO_NEXT_PAINT = "APP::WEB_VITALS::INTERACTION_TO_NEXT_PAINT";
  }(e.Action || (e.Action = {}));
})(pf);
var Dr = {}, wi = {};
(function(e) {
  var n, t;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isUnframed = e.isClient = e.isServer = void 0, e.isServer = typeof window > "u", e.isClient = !e.isServer, e.isUnframed = e.isClient && ((t = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || t === void 0 ? void 0 : t.indexOf("Unframed")) > 0;
})(wi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isDevelopmentClient = e.isProduction = e.isDevelopment = e.isUnframed = e.isServer = e.isClient = void 0;
  var n = wi, t = wi;
  Object.defineProperty(e, "isClient", { enumerable: !0, get: function() {
    return t.isClient;
  } }), Object.defineProperty(e, "isServer", { enumerable: !0, get: function() {
    return t.isServer;
  } }), Object.defineProperty(e, "isUnframed", { enumerable: !0, get: function() {
    return t.isUnframed;
  } }), e.isDevelopment = typeof process < "u" && process.env && process.env.NODE_ENV === "development", e.isProduction = !e.isDevelopment, e.isDevelopmentClient = e.isDevelopment && n.isClient;
})(Dr);
var At = {};
Object.defineProperty(At, "__esModule", { value: !0 });
At.isShopifyPing = At.isShopifyPOS = At.isShopifyMobile = At.isShopifyEmbedded = At.isMobile = void 0;
var Fs = Dr;
function Im() {
  return hf() || yf() || vf();
}
At.isMobile = Im;
function wm() {
  return Fs.isClient && window.top !== window.self || Fs.isUnframed;
}
At.isShopifyEmbedded = wm;
function hf() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Mobile") >= 0;
}
At.isShopifyMobile = hf;
function yf() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify POS") >= 0;
}
At.isShopifyPOS = yf;
function vf() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Ping") >= 0;
}
At.isShopifyPing = vf;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initializeWebVitals = e.interactionToNextPaint = e.timeToFirstByte = e.firstContentfulPaint = e.cumulativeLayoutShift = e.firstInputDelay = e.largestContentfulPaint = e.Action = void 0;
  var n = Tm, t = pf;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
  var r = Dr, i = Zt, a = Xt, o = At;
  function s(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: t.Action.LARGEST_CONTENTFUL_PAINT,
      payload: d
    });
  }
  e.largestContentfulPaint = s;
  function y(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: t.Action.FIRST_INPUT_DELAY,
      payload: d
    });
  }
  e.firstInputDelay = y;
  function u(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: t.Action.CUMULATIVE_LAYOUT_SHIFT,
      payload: d
    });
  }
  e.cumulativeLayoutShift = u;
  function c(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: t.Action.FIRST_CONTENTFUL_PAINT,
      payload: d
    });
  }
  e.firstContentfulPaint = c;
  function l(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: t.Action.TIME_TO_FIRST_BYTE,
      payload: d
    });
  }
  e.timeToFirstByte = l;
  function p(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: t.Action.INTERACTION_TO_NEXT_PAINT,
      payload: d
    });
  }
  e.interactionToNextPaint = p;
  function h(d) {
    function f(m) {
      return function(b) {
        var O = b.id, _ = b.name, T = b.value, P = { id: O, metricName: _, value: T }, E = m(P);
        d.dispatch(E);
      };
    }
    var v = window;
    r.isServer || r.isClient && v.__is_web_vitals_initialized__ || o.isMobile() || (v.__is_web_vitals_initialized__ = !0, n.onLCP(f(s)), n.onFID(f(y)), n.onCLS(f(u)), n.onFCP(f(c)), n.onTTFB(f(l)), n.onINP(f(p)));
  }
  e.initializeWebVitals = h;
})(df);
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = g && g.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(df, e);
})(mu);
var mf = {}, vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.isPermitted = vt.getPermissionKey = vt.isPerformanceOrWebVitalsAction = vt.isAppMessage = vt.isAppBridgeAction = void 0;
var Cm = Gn, ci = dn, jm = se;
function Nm(e) {
  return e instanceof Object && Object.prototype.hasOwnProperty.call(e, "type") && e.type.toString().startsWith(ci.PREFIX);
}
vt.isAppBridgeAction = Nm;
function Rm(e) {
  if (typeof e != "object" || !e.data || typeof e.data != "object")
    return !1;
  var n = e.data;
  return Object.prototype.hasOwnProperty.call(n, "type") && jm.findMatchInEnum(Cm.MessageType, n.type) !== void 0;
}
vt.isAppMessage = Rm;
function Mm(e) {
  var n = e.type;
  return n.match(/^APP::(PERFORMANCE|WEB_VITALS)::/);
}
vt.isPerformanceOrWebVitalsAction = Mm;
function bf(e) {
  return e.replace(new RegExp("^" + ci.PREFIX + ci.SEPARATOR + "\\w+" + ci.SEPARATOR), "");
}
vt.getPermissionKey = bf;
function km(e, n, t) {
  var r = n.group, i = n.type;
  if (!r || !Object.prototype.hasOwnProperty.call(e, r))
    return !1;
  var a = e[r];
  if (!a)
    return !1;
  var o = bf(i);
  return a[o] ? a[o][t] === !0 : !1;
}
vt.isPermitted = km;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFromApp = e.isPerformanceOrWebVitalsAction = e.getPermissionKey = e.isPermitted = e.isAppMessage = e.isAppBridgeAction = void 0;
  var n = vt;
  Object.defineProperty(e, "isAppBridgeAction", { enumerable: !0, get: function() {
    return n.isAppBridgeAction;
  } }), Object.defineProperty(e, "isAppMessage", { enumerable: !0, get: function() {
    return n.isAppMessage;
  } }), Object.defineProperty(e, "isPermitted", { enumerable: !0, get: function() {
    return n.isPermitted;
  } }), Object.defineProperty(e, "getPermissionKey", { enumerable: !0, get: function() {
    return n.getPermissionKey;
  } }), Object.defineProperty(e, "isPerformanceOrWebVitalsAction", { enumerable: !0, get: function() {
    return n.isPerformanceOrWebVitalsAction;
  } });
  function t(r) {
    return typeof r != "object" || typeof r.source != "object" ? !1 : typeof r.source.apiKey == "string";
  }
  e.isFromApp = t;
})(mf);
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(Q, re, be, ce) {
    ce === void 0 && (ce = be), Object.defineProperty(Q, ce, { enumerable: !0, get: function() {
      return re[be];
    } });
  } : function(Q, re, be, ce) {
    ce === void 0 && (ce = be), Q[ce] = re[be];
  }), t = g && g.__setModuleDefault || (Object.create ? function(Q, re) {
    Object.defineProperty(Q, "default", { enumerable: !0, value: re });
  } : function(Q, re) {
    Q.default = re;
  }), r = g && g.__importStar || function(Q) {
    if (Q && Q.__esModule)
      return Q;
    var re = {};
    if (Q != null)
      for (var be in Q)
        be !== "default" && Object.prototype.hasOwnProperty.call(Q, be) && n(re, Q, be);
    return t(re, Q), re;
  }, i = g && g.__exportStar || function(Q, re) {
    for (var be in Q)
      be !== "default" && !Object.prototype.hasOwnProperty.call(re, be) && n(re, Q, be);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.WebVitals = e.unstable_Picker = e.Performance = e.Pos = e.AppLink = e.ChannelMenu = e.NavigationMenu = e.Share = e.ContextualSaveBar = e.MarketingExternalActivityTopBar = e.TitleBar = e.SessionToken = e.ResourcePicker = e.Redirect = e.Print = e.ModalContent = e.Modal = e.Loading = e.LeaveConfirmation = e.History = e.Toast = e.Fullscreen = e.FeedbackModal = e.Features = e.Flash = e.Error = e.Client = e.Cart = e.Scanner = e.ButtonGroup = e.Button = e.AuthCode = e.isAppBridgeAction = void 0;
  var a = r(Jo);
  e.AuthCode = a;
  var o = r(kr);
  e.Button = o;
  var s = r(Gi);
  e.ButtonGroup = s;
  var y = r(xo);
  e.Cart = y;
  var u = r(eu);
  e.Client = u;
  var c = r(vn);
  e.Error = c;
  var l = r(Hl);
  e.Flash = l;
  var p = r(tu);
  e.Features = p;
  var h = r(Yl);
  e.FeedbackModal = h;
  var d = r(ou);
  e.Fullscreen = d;
  var f = r(Kl);
  e.LeaveConfirmation = f;
  var v = r(uu);
  e.Loading = v;
  var m = r(Wi);
  e.Modal = m;
  var b = r(Jl);
  e.ModalContent = b;
  var O = r(Xl);
  e.History = O;
  var _ = r(Hi);
  e.Redirect = _;
  var T = r(zi);
  e.Print = T;
  var P = r(su);
  e.ResourcePicker = P;
  var E = r(cu);
  e.Scanner = E;
  var S = r(lu);
  e.SessionToken = S;
  var I = r(fu);
  e.TitleBar = I;
  var w = r(du);
  e.Toast = w;
  var j = r(pu);
  e.ContextualSaveBar = j;
  var B = r(tf);
  e.Share = B;
  var U = r(yu);
  e.NavigationMenu = U;
  var D = r(nf);
  e.ChannelMenu = D;
  var $ = r(vu);
  e.AppLink = $;
  var H = r(rf);
  e.Pos = H;
  var F = r(af);
  e.MarketingExternalActivityTopBar = F;
  var X = r(cf);
  e.Performance = X;
  var me = r(ff);
  e.unstable_Picker = me;
  var z = r(mu);
  e.WebVitals = z;
  var Ie = mf;
  Object.defineProperty(e, "isAppBridgeAction", { enumerable: !0, get: function() {
    return Ie.isAppBridgeAction;
  } }), i(Zt, e);
})(Dt);
var Vs = g && g.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]]);
  return t;
};
Object.defineProperty(Ko, "__esModule", { value: !0 });
var Jr = oe, gf = Dt, Dm = tt, Xr = gf.ContextualSaveBar.Action, Bm = gf.ContextualSaveBar.create;
function Lm(e) {
  var n = e.discardAction, t = n === void 0 ? { onAction: function() {
    return null;
  } } : n, r = e.saveAction, i = r === void 0 ? { onAction: function() {
    return null;
  } } : r, a = e.fullWidth, o = e.leaveConfirmationDisable, s = e.visible, y = Dm.useAppBridge(), u = i.onAction, c = Vs(i, ["onAction"]), l = t.onAction, p = Vs(t, ["onAction"]), h = Jr.useMemo(function() {
    return Bm(y, {
      saveAction: c,
      discardAction: p,
      fullWidth: a,
      leaveConfirmationDisable: o
    });
  }, [y]);
  return Jr.useEffect(function() {
    h.set({
      saveAction: c,
      discardAction: p,
      fullWidth: a,
      leaveConfirmationDisable: o
    }, s);
  }, [
    y,
    h,
    c,
    p,
    a,
    o,
    s
  ]), Jr.useEffect(function() {
    return h.subscribe(Xr.DISCARD, l), h.subscribe(Xr.SAVE, u), function() {
      h.unsubscribe();
    };
  }, [h, l, u]), Jr.useEffect(function() {
    s ? h.dispatch(Xr.SHOW) : h.dispatch(Xr.HIDE);
  }, [h, s]), null;
}
Ko.default = Lm;
var Um = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Yo, "__esModule", { value: !0 });
var Fm = Um(Ko);
Yo.default = Fm.default;
var bu = {}, gu = {}, Vm = g && g.__extends || function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(n, t);
  };
  return function(n, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(n, t);
    function r() {
      this.constructor = n;
    }
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), $m = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(gu, "__esModule", { value: !0 });
var Gm = $m(oe), va = Dt, qm = jt, Wm = (
  /** @class */
  function(e) {
    Vm(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.context;
      this.loading = va.Loading.create(t), this.loading != null && this.loading.dispatch(va.Loading.Action.START);
    }, n.prototype.componentWillUnmount = function() {
      this.loading != null && this.loading.dispatch(va.Loading.Action.STOP);
    }, n.prototype.render = function() {
      return null;
    }, n.contextType = qm.AppBridgeContext, n;
  }(Gm.default.Component)
);
gu.default = Wm;
var Hm = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(bu, "__esModule", { value: !0 });
var zm = Hm(gu);
bu.default = zm.default;
var _f = {}, _u = {}, hn = {}, Qm = g && g.__createBinding || (Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return n[t];
  } });
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
}), Ym = g && g.__setModuleDefault || (Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
}), Ou = g && g.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var n = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && Qm(n, e, t);
  return Ym(n, e), n;
}, Ci = g && g.__spreadArray || function(e, n) {
  for (var t = 0, r = n.length, i = e.length; t < r; t++, i++)
    e[i] = n[t];
  return e;
};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.transformActions = hn.generateRedirect = void 0;
var Zr = Ou(kr), Km = Ou(Gi), Eo = Ou(Hi);
function Of(e, n, t, r) {
  if (t === void 0 && (t = "APP"), n != null) {
    var i = Eo.create(e), a = r === !0 ? {
      url: n,
      newContext: !0
    } : n;
    return function() {
      i.dispatch(Jm(t, r), a);
    };
  }
}
hn.generateRedirect = Of;
function Jm(e, n) {
  return n === !0 ? Eo.Action.REMOTE : Eo.Action[e];
}
function Xm(e, n) {
  var t = n.primaryAction, r = n.secondaryActions, i = n.actionGroups, a = Zm(e, t), o = Ci(Ci([], xm(e, r)), eb(e, i));
  return {
    primary: a,
    secondary: o
  };
}
hn.transformActions = Xm;
function Au(e, n) {
  var t = n.destructive === !0 ? Zr.Style.Danger : void 0, r = Zr.create(e, {
    label: n.content || "",
    disabled: n.disabled,
    loading: n.loading,
    plain: n.plain,
    style: t
  });
  n.onAction && r.subscribe(Zr.Action.CLICK, n.onAction);
  var i = Of(e, n.url, n.target, n.external);
  return i != null && r.subscribe(Zr.Action.CLICK, i), r;
}
function Zm(e, n) {
  if (n != null) {
    var t = Au(e, n);
    return t;
  }
}
function xm(e, n) {
  n === void 0 && (n = []);
  var t = Ci([], n.map(function(r) {
    return Au(e, r);
  }));
  return t;
}
function eb(e, n) {
  n === void 0 && (n = []);
  var t = Ci([], n.map(function(r) {
    var i = r.actions.map(function(a) {
      return Au(e, a);
    });
    return Km.create(e, { label: r.title, plain: r.plain, buttons: i });
  }));
  return t;
}
var ji = g && g.__assign || function() {
  return ji = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, ji.apply(this, arguments);
}, tb = g && g.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]]);
  return t;
};
Object.defineProperty(_u, "__esModule", { value: !0 });
var Sn = oe, wn = Wi, nb = hn, rb = tt;
function ib(e) {
  var n = rb.useAppBridge(), t = Sn.useRef(null), r = Sn.useRef({ open: !1 }), i = e.open, a = Sn.useRef(!1), o = Sn.useMemo(function() {
    e.primaryAction, e.secondaryActions;
    var s = tb(e, ["primaryAction", "secondaryActions"]);
    return wn.create(n, $s(n, s));
  }, [n]);
  return Sn.useEffect(function() {
    if (a.current) {
      r.current = e;
      return;
    }
    var s = r.current.open, y = s !== i;
    if (i) {
      var u = $s(n, e, s), c = !y;
      ab(u), o.set(u, c);
    }
    return y && (i ? (o.dispatch(wn.Action.OPEN), t.current = document.activeElement) : (o.dispatch(wn.Action.CLOSE), t.current != null && document.contains(t.current) && (t.current.focus(), t.current = null))), e.onClose != null && o.subscribe(wn.Action.CLOSE, e.onClose), r.current = e, function() {
      o.unsubscribe();
    };
  }, [e, i]), Sn.useEffect(function() {
    return function() {
      r.current.open && o.dispatch(wn.Action.CLOSE);
    };
  }, [o]), null;
}
function ab(e) {
  return typeof e.url == "string" || typeof e.path == "string";
}
function $s(e, n, t) {
  var r = n.title, i = n.size, a = n.message, o = n.src, s = n.primaryAction, y = n.secondaryActions, u = n.loading, c = i == null ? void 0 : wn.Size[i], l = {};
  return o != null && (o.match("^https?://") ? l.url = o : l.path = o), ji(ji({ title: r, message: a, size: c }, l), { footer: {
    buttons: nb.transformActions(e, {
      primaryAction: s,
      secondaryActions: y
    })
  }, loading: t ? void 0 : u });
}
_u.default = ib;
var Pu = {}, Su = {}, ob = g && g.__extends || function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(n, t);
  };
  return function(n, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(n, t);
    function r() {
      this.constructor = n;
    }
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), ub = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Su, "__esModule", { value: !0 });
var sb = ub(oe), cb = Dt, lb = jt, fb = (
  /** @class */
  function(e) {
    ob(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.context;
      this.modalContent = cb.ModalContent.create(t), this.syncLoadingStatus();
    }, n.prototype.componentDidUpdate = function() {
      this.syncLoadingStatus();
    }, n.prototype.syncLoadingStatus = function() {
      this.modalContent && (this.props.loading ? this.modalContent.loading() : this.modalContent.loaded());
    }, n.prototype.render = function() {
      return null;
    }, n.contextType = lb.AppBridgeContext, n;
  }(sb.default.Component)
);
Su.default = fb;
var db = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Pu, "__esModule", { value: !0 });
var pb = db(Su);
Pu.default = pb.default;
(function(e) {
  var n = g && g.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalContent = void 0;
  var t = n(_u), r = Pu;
  Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return n(r).default;
  } }), e.default = t.default;
})(_f);
var Eu = {}, Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
var xr = oe, hb = vu, yb = yu, vb = tt;
function mb(e, n) {
  return e.destination.replace(/\/$/, "") === n.pathname.replace(/\/$/, "");
}
function bb(e) {
  var n = e.navigationLinks, t = e.matcher, r = t === void 0 ? mb : t, i = vb.useAppBridge(), a = xr.useState(), o = a[0], s = a[1];
  xr.useEffect(function() {
    var u = n.map(function(c) {
      return hb.create(i, c);
    });
    s(u);
  }, [i, JSON.stringify(n)]);
  var y = xr.useMemo(function() {
    var u = (o || []).findIndex(function(c) {
      return r(c, location);
    });
    if (u >= 0)
      return o == null ? void 0 : o[u];
  }, [i, location.pathname, r, o, location.pathname]);
  return xr.useEffect(function() {
    o && yb.create(i, { items: o, active: y });
  }, [o, y]), null;
}
Tu.default = bb;
var gb = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Eu, "__esModule", { value: !0 });
var _b = gb(Tu);
Eu.default = _b.default;
var Iu = {}, Af = {}, To = { exports: {} }, ma = {}, ba = {}, ga = {}, xn = {}, Pf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.createTransportListener = e.fromWindow = e.fromFrame = e.Context = void 0;
  var n = Ar, t = vt, r = Gn, i = Kt, a = wi;
  (function(c) {
    c.Modal = "Modal", c.Main = "Main";
  })(e.Context || (e.Context = {}));
  function o(c, l, p) {
    var h = [], d = c.host, f = c.window;
    if (!d)
      throw n.fromAction("App frame is undefined", n.AppActionType.WINDOW_UNDEFINED);
    return a.isUnframed && window.MobileWebView && Object.assign(window.MobileWebView, {
      postMessageToIframe: function(v, m) {
        f == null || f.postMessage(v, m), u(v) && d.postMessage(JSON.stringify(v.payload), location.origin);
      },
      updateIframeUrl: function(v) {
        var m = window.location, b = (c.window || {}).location;
        try {
          var O = new URL(v).origin;
          O === l && b ? b.replace(v) : m.href = v;
        } catch {
        }
      }
    }), d.addEventListener("message", function(v) {
      if (!(v.source === d || !t.isAppMessage(v))) {
        if (v.origin !== l) {
          var m = "Message origin '" + v.origin + "' does not match app origin '" + l + "'.", b = n.invalidOriginAction(m), O = {
            type: "dispatch",
            payload: b
          };
          f == null || f.postMessage(O, v.origin);
          return;
        }
        if (a.isUnframed && window.MobileWebView) {
          var b = JSON.stringify({
            id: "unframed://fromClient",
            origin: l,
            data: v.data
          });
          window.MobileWebView.postMessage(b);
          return;
        }
        for (var _ = 0, T = h; _ < T.length; _++) {
          var P = T[_];
          P(v);
        }
      }
    }), {
      context: p,
      localOrigin: l,
      frameWindow: f,
      hostFrame: d,
      dispatch: function(v) {
        f == null || f.postMessage(v, l);
      },
      subscribe: function(v) {
        return i.addAndRemoveFromCollection(h, v);
      }
    };
  }
  e.fromFrame = o;
  function s(c, l) {
    var p = [];
    return typeof window !== void 0 && window.addEventListener("message", function(h) {
      if (!(window === c && !a.isUnframed || h.source !== c || !(t.isAppBridgeAction(h.data.payload) || t.isAppMessage(h))))
        for (var d = 0, f = p; d < f.length; d++) {
          var v = f[d];
          v(h);
        }
    }), {
      localOrigin: l,
      hostFrame: c,
      dispatch: function(h) {
        var d;
        if (!((d = h.source) === null || d === void 0) && d.host) {
          if (a.isUnframed && window && window.MobileWebView) {
            var f = JSON.stringify({
              id: "unframed://fromClient",
              origin: l,
              data: h
            });
            window.MobileWebView.postMessage(f);
            return;
          }
          var v = new URL("https://" + h.source.host).origin;
          c.postMessage(h, v);
        }
      },
      subscribe: function(h) {
        return i.addAndRemoveFromCollection(p, h);
      }
    };
  }
  e.fromWindow = s;
  function y() {
    var c = [], l = {};
    function p(h) {
      function d() {
        if (arguments.length < 2)
          return i.addAndRemoveFromCollection(c, { callback: arguments[0] });
        var f = Array.from(arguments), v = f[0], m = f[1], b = f[2], O = { callback: m, id: b }, _ = { type: v, id: b };
        return Object.prototype.hasOwnProperty.call(l, v) || (l[v] = []), h && h(r.MessageType.Subscribe, _), i.addAndRemoveFromCollection(l[v], O, function() {
          h && h(r.MessageType.Unsubscribe, _);
        });
      }
      return d;
    }
    return {
      createSubscribeHandler: p,
      handleMessage: function(h) {
        c.forEach(function(d) {
          return d.callback(h);
        });
      },
      handleActionDispatch: function(h) {
        var d = h.type, f = h.payload, v = !1;
        if (Object.prototype.hasOwnProperty.call(l, d))
          for (var m = 0, b = l[d]; m < b.length; m++) {
            var O = b[m], _ = O.id, T = O.callback, P = f && f.id === _;
            (P || !_) && (T(f), v = !0);
          }
        return v;
      }
    };
  }
  e.createTransportListener = y;
  function u(c) {
    return c !== null && typeof c == "object" && !Array.isArray(c) && c.type === "dispatch" && typeof c.payload == "object";
  }
})(Pf);
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = g && g.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Pf, e);
})(xn);
var tn = {}, Gs;
function Sf() {
  if (Gs)
    return tn;
  Gs = 1, Object.defineProperty(tn, "__esModule", { value: !0 }), tn.mockAppBridge = tn.serverAppBridge = void 0;
  var e = vn, n = function() {
  }, t = new Promise(function() {
  });
  return tn.serverAppBridge = {
    dispatch: function() {
      return {};
    },
    error: function() {
      return n;
    },
    featuresAvailable: function() {
      return Promise.reject(e.fromAction("Feature detection is only available on the client side.", e.AppActionType.WINDOW_UNDEFINED));
    },
    getState: function() {
      return Promise.reject(e.fromAction("State is only available on the client side.", e.AppActionType.WINDOW_UNDEFINED));
    },
    localOrigin: "",
    hostOrigin: "",
    subscribe: function() {
      return n;
    }
  }, tn.mockAppBridge = {
    dispatch: function() {
      return {};
    },
    error: function() {
      return n;
    },
    featuresAvailable: function() {
      return t;
    },
    getState: function() {
      return t;
    },
    localOrigin: "",
    hostOrigin: "",
    subscribe: function() {
      return n;
    }
  }, tn;
}
var ar = {}, Tt = {}, qs;
function wu() {
  if (qs)
    return Tt;
  qs = 1, Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.getWindow = Tt.getLocation = Tt.redirect = Tt.shouldRedirect = void 0;
  function e(a) {
    return a === window;
  }
  Tt.shouldRedirect = e;
  function n(a) {
    var o = t();
    o && o.assign(a);
  }
  Tt.redirect = n;
  function t() {
    return i() ? window.location : void 0;
  }
  Tt.getLocation = t;
  function r() {
    return i() ? window : void 0;
  }
  Tt.getWindow = r;
  function i() {
    return typeof window < "u";
  }
  return Tt;
}
var Ws;
function Ob() {
  if (Ws)
    return ar;
  Ws = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.handleAppPrint = void 0;
  var e = wu();
  function n() {
    return navigator.userAgent.indexOf("iOS") >= 0;
  }
  function t() {
    var o = e.getWindow();
    if (!(!o || !o.document || !o.document.body)) {
      var s = o.document.createElement("input");
      return s.style.display = "none", o.document.body.appendChild(s), s;
    }
  }
  function r() {
    var o;
    (o = e.getWindow()) === null || o === void 0 || o.print();
  }
  function i() {
    var o = t();
    o && (o.select(), r(), o.remove());
  }
  function a() {
    n() ? i() : r();
  }
  return ar.handleAppPrint = a, ar;
}
var _a = {}, Hs;
function Ef() {
  return Hs || (Hs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isV1Config = e.MessageType = e.LifecycleHook = e.PermissionType = void 0;
    var n = Gn;
    Object.defineProperty(e, "MessageType", { enumerable: !0, get: function() {
      return n.MessageType;
    } });
    var t = Gn;
    Object.defineProperty(e, "PermissionType", { enumerable: !0, get: function() {
      return t.PermissionType;
    } }), Object.defineProperty(e, "LifecycleHook", { enumerable: !0, get: function() {
      return t.LifecycleHook;
    } });
    function r(i) {
      return !i.host;
    }
    e.isV1Config = r;
  }(_a)), _a;
}
var ei = {}, Oa = {}, zs;
function Ab() {
  return zs || (zs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.removeFromCollection = e.addAndRemoveFromCollection = void 0;
    var n = Kt;
    Object.defineProperty(e, "addAndRemoveFromCollection", { enumerable: !0, get: function() {
      return n.addAndRemoveFromCollection;
    } }), Object.defineProperty(e, "removeFromCollection", { enumerable: !0, get: function() {
      return n.removeFromCollection;
    } });
  }(Oa)), Oa;
}
var Qs;
function Pb() {
  if (Qs)
    return ei;
  Qs = 1, Object.defineProperty(ei, "__esModule", { value: !0 });
  var e = Ab(), n = (
    /** @class */
    function() {
      function t() {
        this.map = {};
      }
      return t.prototype.set = function(r, i) {
        Object.prototype.hasOwnProperty.call(this.map, r) || (this.map[r] = []);
        var a = { handler: i, remove: function() {
        } }, o = e.addAndRemoveFromCollection(this.map[r], a);
        return a = { handler: i, remove: o }, o;
      }, t.prototype.get = function(r) {
        var i = this.map[r];
        return i ? i.map(function(a) {
          return a.handler;
        }) : void 0;
      }, t.prototype.run = function(r, i, a) {
        for (var o = [], s = 3; s < arguments.length; s++)
          o[s - 3] = arguments[s];
        var y = 0, u = this.get(r) || [];
        function c() {
          for (var l = [], p = 0; p < arguments.length; p++)
            l[p] = arguments[p];
          var h = u[y++];
          return h ? h(c).apply(a, l) : i.apply(a, l);
        }
        return c.apply(a, o);
      }, t;
    }()
  );
  return ei.default = n, ei;
}
var Ys;
function Ks() {
  return Ys || (Ys = 1, function(e) {
    var n = g && g.__assign || function() {
      return n = Object.assign || function(I) {
        for (var w, j = 1, B = arguments.length; j < B; j++) {
          w = arguments[j];
          for (var U in w)
            Object.prototype.hasOwnProperty.call(w, U) && (I[U] = w[U]);
        }
        return I;
      }, n.apply(this, arguments);
    }, t = g && g.__spreadArray || function(I, w) {
      for (var j = 0, B = w.length, U = I.length; j < B; j++, U++)
        I[U] = w[j];
      return I;
    }, r = g && g.__importDefault || function(I) {
      return I && I.__esModule ? I : { default: I };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createApp = e.createAppWrapper = e.createClientApp = e.WINDOW_UNDEFINED_MESSAGE = void 0;
    var i = Xt, a = zi, o = vn, s = xn, y = Sf(), u = Dr, c = eu, l = mu, p = Ob(), h = wu(), d = Ef(), f = r(Pb());
    e.WINDOW_UNDEFINED_MESSAGE = "window is not defined. Running an app outside a browser is not supported";
    function v(I, w) {
      var j = w.apiKey, B = w.host, U = w.forceRedirect, D = U === void 0 ? !u.isDevelopmentClient : U, $ = h.getLocation();
      if (u.isUnframed || !$ || !j || !B || !D || !h.shouldRedirect(I))
        return !1;
      var H = "https://" + B + "/apps/" + j + $.pathname + ($.search || "");
      return h.redirect(H), !0;
    }
    var m = function(I) {
      return function(w) {
        return I(n(n({}, w), { version: i.getVersion(), clientInterface: {
          name: i.getPackageName(),
          version: i.getVersion()
        } }));
      };
    }, b = function(I) {
      I.set(d.LifecycleHook.DispatchAction, m);
    };
    function O(I) {
      I.subscribe(a.Action.APP, p.handleAppPrint), I.dispatch(c.initialize());
      try {
        l.initializeWebVitals(I);
      } catch (w) {
        console.error("App-Bridge failed to initialize web-vitals", w);
      }
    }
    var _ = function(I, w) {
      w === void 0 && (w = []);
      var j = [], B = s.createTransportListener(), U = function(D) {
        var $ = D.data, H = $.type, F = $.payload;
        switch (H) {
          case "getState": {
            var X = j.splice(0);
            X.forEach(function(Ie) {
              return Ie(F);
            });
            break;
          }
          case "dispatch": {
            B.handleMessage(F);
            var me = B.handleActionDispatch(F);
            if (me)
              return;
            var z = i.findMatchInEnum(o.Action, F.type);
            z && o.throwError(z, F);
            break;
          }
        }
      };
      return I.subscribe(U), function(D) {
        var $ = T(D), H = v(I.hostFrame, $);
        if (H)
          return y.mockAppBridge;
        var F = S(I, $), X = B.createSubscribeHandler(F);
        F(d.MessageType.Unsubscribe);
        function me(K) {
          return F(d.MessageType.Dispatch, K), K;
        }
        for (var z = new URL("https://" + $.host).origin, Ie = new f.default(), Q = {
          hostOrigin: z,
          localOrigin: I.localOrigin,
          hooks: Ie,
          dispatch: function(K) {
            return Q.hooks ? Q.hooks.run(d.LifecycleHook.DispatchAction, me, Q, K) : me(K);
          },
          featuresAvailable: function() {
            for (var K = [], Qe = 0; Qe < arguments.length; Qe++)
              K[Qe] = arguments[Qe];
            var je = K[0], nt = Array.isArray(je) ? t([], je) : K;
            return Q.getState("features").then(function(Fe) {
              return nt.length ? nt.reduce(function(Pt, Bt) {
                return Object.keys(Fe).includes(Bt) && (Pt[Bt] = Fe[Bt]), Pt;
              }, {}) : Fe;
            });
          },
          getState: function(K) {
            return K && typeof K != "string" ? Promise.resolve(void 0) : new Promise(function(Qe) {
              j.push(Qe), F(d.MessageType.GetState);
            }).then(function(Qe) {
              var je = Qe;
              if (K)
                for (var nt = 0, Fe = K.split("."); nt < Fe.length; nt++) {
                  var Pt = Fe[nt];
                  if (je == null || typeof je != "object" || Array.isArray(je) || !Object.keys(je).includes(Pt))
                    return;
                  je = je[Pt];
                }
              return je;
            });
          },
          subscribe: X,
          error: function(K, Qe) {
            var je = [];
            return i.forEachInEnum(o.Action, function(nt) {
              je.push(X(nt, K, Qe));
            }), function() {
              je.forEach(function(nt) {
                return nt();
              });
            };
          }
        }, re = 0, be = w; re < be.length; re++) {
          var ce = be[re];
          ce(Ie, Q);
        }
        return O(Q), Q;
      };
    };
    e.createClientApp = _;
    function T(I) {
      var w;
      if (!I.host)
        throw o.fromAction("host must be provided", o.AppActionType.INVALID_CONFIG);
      if (!I.apiKey)
        throw o.fromAction("apiKey must be provided", o.AppActionType.INVALID_CONFIG);
      try {
        var j = atob((w = I.host) === null || w === void 0 ? void 0 : w.replace(/_/g, "/").replace(/-/g, "+"));
        return n(n({}, I), { host: j });
      } catch {
        var B = "not a valid host, please use the value provided by Shopify";
        throw o.fromAction(B, o.AppActionType.INVALID_CONFIG);
      }
    }
    function P(I, w, j) {
      if (j === void 0 && (j = []), !I)
        throw o.fromAction(e.WINDOW_UNDEFINED_MESSAGE, o.AppActionType.WINDOW_UNDEFINED);
      var B = h.getLocation(), U = w || B && B.origin;
      if (!U)
        throw o.fromAction("local origin cannot be blank", o.AppActionType.MISSING_LOCAL_ORIGIN);
      var D = s.fromWindow(I, U), $ = e.createClientApp(D, t([b], j));
      return $;
    }
    e.createAppWrapper = P;
    function E(I) {
      var w = h.getWindow();
      return !w || !w.top ? y.serverAppBridge : P(w.top)(I);
    }
    e.createApp = E;
    function S(I, w) {
      return function(j, B) {
        I.dispatch({
          payload: B,
          source: w,
          type: j
        });
      };
    }
    e.default = E;
  }(ga)), ga;
}
var Js;
function Tr() {
  return Js || (Js = 1, function(e) {
    var n = g && g.__createBinding || (Object.create ? function(i, a, o, s) {
      s === void 0 && (s = o), Object.defineProperty(i, s, { enumerable: !0, get: function() {
        return a[o];
      } });
    } : function(i, a, o, s) {
      s === void 0 && (s = o), i[s] = a[o];
    }), t = g && g.__exportStar || function(i, a) {
      for (var o in i)
        o !== "default" && !Object.prototype.hasOwnProperty.call(a, o) && n(a, i, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = Ks();
    t(Ef(), e), t(Ks(), e), e.default = r.createClientApp;
  }(ba)), ba;
}
var Xs;
function Sb() {
  return Xs || (Xs = 1, function(e) {
    var n = g && g.__createBinding || (Object.create ? function(i, a, o, s) {
      s === void 0 && (s = o), Object.defineProperty(i, s, { enumerable: !0, get: function() {
        return a[o];
      } });
    } : function(i, a, o, s) {
      s === void 0 && (s = o), i[s] = a[o];
    }), t = g && g.__exportStar || function(i, a) {
      for (var o in i)
        o !== "default" && !Object.prototype.hasOwnProperty.call(a, o) && n(a, i, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
    var r = Tr();
    Object.defineProperty(e, "default", { enumerable: !0, get: function() {
      return r.createApp;
    } }), t(xn, e), t(Tr(), e);
  }(ma)), ma;
}
var Aa = {}, ti = {}, Pa = {}, Sa = {}, he = {}, Ea = {}, Ta = {}, Zs;
function ot() {
  return Zs || (Zs = 1, function(e) {
    var n = g && g.__assign || function() {
      return n = Object.assign || function(f) {
        for (var v, m = 1, b = arguments.length; m < b; m++) {
          v = arguments[m];
          for (var O in v)
            Object.prototype.hasOwnProperty.call(v, O) && (f[O] = v[O]);
        }
        return f;
      }, n.apply(this, arguments);
    }, t = g && g.__spreadArray || function(f, v) {
      for (var m = 0, b = v.length, O = f.length; m < b; m++, O++)
        f[O] = v[m];
      return f;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validate = e.matchesPositiveInteger = e.matchesBoolean = e.makeOptional = e.matchesString = e.matchesObject = e.getErrors = e.oneOf = e.matchesArray = e.matchesEnum = e.composeSchemas = e.TYPE_ERROR = void 0, e.TYPE_ERROR = "type_error_expected";
    function r() {
      for (var f = [], v = 0; v < arguments.length; v++)
        f[v] = arguments[v];
      return function(m) {
        for (var b, O = 0, _ = f.length; !b && O < _; ) {
          if (b = f[O](m), b)
            return b;
          O++;
        }
      };
    }
    e.composeSchemas = r;
    function i(f, v) {
      return function(m) {
        var b = Object.keys(f).map(function(_) {
          return f[_];
        }), O = v && v.message || "expected:" + b.map(function(_) {
          return "`" + _ + "`";
        }).join(" or ");
        return b.includes(m) ? void 0 : s(m, "invalid_enum_value", n(n({}, v), { message: O }));
      };
    }
    e.matchesEnum = i;
    function a(f, v) {
      return function(m) {
        if (!Array.isArray(m))
          return s(m, e.TYPE_ERROR + "_array", v);
        if (f) {
          var b = [];
          return m.forEach(function(O, _) {
            var T = f(O);
            T && (b = b.concat(T.map(function(P) {
              return n(n({}, P), { path: "['" + _ + "']" + (P.path || "") });
            })));
          }), b.length ? b : void 0;
        }
      };
    }
    e.matchesArray = a;
    function o() {
      for (var f = [], v = 0; v < arguments.length; v++)
        f[v] = arguments[v];
      return function(m) {
        for (var b = [], O = 0, _ = f; O < _.length; O++) {
          var T = _[O], P = T(m);
          if (P == null)
            return P;
          b.push.apply(b, P);
        }
        return b;
      };
    }
    e.oneOf = o;
    function s(f, v, m) {
      return m === void 0 && (m = { message: void 0 }), [
        {
          value: f,
          error: v,
          message: typeof m.message == "function" ? m.message(v, f) : m.message
        }
      ];
    }
    function y(f, v, m) {
      var b = m ? f[m] : f, O = m ? "['" + m + "']" : void 0, _ = v(b);
      if (_)
        return _.map(function(T) {
          return n(n({}, T), { path: "" + (O || "") + (T.path || "") || void 0 });
        });
    }
    e.getErrors = y;
    function u(f, v) {
      return function(m) {
        if (typeof m != "object" || !m || Array.isArray(m))
          return s(m, e.TYPE_ERROR + "_object", v);
        var b = Object.keys(f).reduce(function(O, _) {
          return t(t([], O), y(m, f[_], _) || []);
        }, []);
        return b.length ? b : void 0;
      };
    }
    e.matchesObject = u;
    function c(f) {
      return function(v) {
        return typeof v == "string" ? void 0 : s(v, e.TYPE_ERROR + "_string", f);
      };
    }
    e.matchesString = c;
    function l(f) {
      return function(v) {
        if (v != null)
          return f(v);
      };
    }
    e.makeOptional = l;
    function p(f) {
      return function(v) {
        return typeof v == "boolean" ? void 0 : s(v, e.TYPE_ERROR + "_boolean", f);
      };
    }
    e.matchesBoolean = p;
    function h(f) {
      return function(v) {
        return !Number.isInteger(v) || v < 0 ? s(v, e.TYPE_ERROR + "_integer", f) : void 0;
      };
    }
    e.matchesPositiveInteger = h;
    function d(f, v) {
      return y(f, v);
    }
    e.validate = d;
  }(Ta)), Ta;
}
var Ia = {}, xs;
function ht() {
  return xs || (xs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.relativePathSchema = e.relativeUrlSchema = e.isValidRelativePath = e.createActionValidator = void 0;
    var n = ot();
    function t(i, a, o, s) {
      a === void 0 && (a = void 0), o === void 0 && (o = !1), s === void 0 && (s = !1);
      var y = n.matchesObject({
        id: s ? n.matchesString() : n.makeOptional(n.matchesString())
      }), u = a ? n.composeSchemas(y, a) : y;
      return n.matchesObject({
        type: n.matchesEnum(i, {
          message: function(c, l) {
            return "The action type `" + l + "` is invalid or unsupported";
          }
        }),
        payload: o ? u : n.makeOptional(u)
      });
    }
    e.createActionValidator = t;
    function r(i) {
      return typeof i == "string" && (i === "" || i.startsWith("/"));
    }
    e.isValidRelativePath = r, e.relativeUrlSchema = n.composeSchemas(n.matchesString(), function(i) {
      return r(i) ? void 0 : [{ error: "invalid_relative_path", value: i, message: "expected string to start with `/`" }];
    }), e.relativePathSchema = n.matchesObject({
      path: e.relativeUrlSchema
    });
  }(Ia)), Ia;
}
var ec;
function Yi() {
  return ec || (ec = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.buttonSchemaWithId = e.buttonSchema = void 0;
    var n = Gt;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = ot(), r = ht();
    e.buttonSchema = t.matchesObject({
      disabled: t.makeOptional(t.matchesBoolean()),
      label: t.matchesString(),
      style: t.makeOptional(t.matchesEnum(n.Style)),
      icon: t.makeOptional(t.matchesEnum(n.Icon)),
      loading: t.makeOptional(t.matchesBoolean()),
      plain: t.makeOptional(t.matchesBoolean())
    }), e.buttonSchemaWithId = t.composeSchemas(t.matchesObject({
      id: t.matchesString()
    }), e.buttonSchema);
    function i(o) {
      return t.validate(o, e.buttonSchema);
    }
    e.validateProps = i;
    function a(o) {
      var s = r.createActionValidator(n.Action, o.type === n.Action.UPDATE ? e.buttonSchema : void 0, !0, !0);
      return t.validate(o, s);
    }
    e.validateAction = a;
  }(Ea)), Ea;
}
var wa = {}, tc;
function Tf() {
  return tc || (tc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.buttonGroupSchema = void 0;
    var n = pn;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = ot(), r = ht(), i = Yi();
    e.buttonGroupSchema = t.composeSchemas(i.buttonSchema, t.matchesObject({
      buttons: t.matchesArray(t.makeOptional(i.buttonSchemaWithId))
    }));
    function a(s) {
      return t.validate(s, e.buttonGroupSchema);
    }
    e.validateProps = a;
    function o(s) {
      var y = r.createActionValidator(n.Action, e.buttonGroupSchema, !0, !0);
      return t.validate(s, y);
    }
    e.validateAction = o;
  }(wa)), wa;
}
var Ca = {}, nc;
function Eb() {
  return nc || (nc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.contextSaveBarSchema = void 0;
    var n = ot(), t = hu;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = ht();
    e.contextSaveBarSchema = n.makeOptional(n.matchesObject({
      fullWidth: n.makeOptional(n.matchesBoolean()),
      discardAction: n.makeOptional(n.matchesObject({
        disabled: n.makeOptional(n.matchesBoolean()),
        discardConfirmationModal: n.makeOptional(n.matchesBoolean())
      })),
      saveAction: n.makeOptional(n.matchesObject({
        disabled: n.makeOptional(n.matchesBoolean())
      })),
      leaveConfirmationDisable: n.makeOptional(n.matchesBoolean())
    }));
    function i(o) {
      return n.validate(o, e.contextSaveBarSchema);
    }
    e.validateProps = i;
    function a(o) {
      var s = r.createActionValidator(t.Action, e.contextSaveBarSchema);
      return n.validate(o, s);
    }
    e.validateAction = a;
  }(Ca)), Ca;
}
var ja = {}, rc;
function Tb() {
  return rc || (rc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.feedbackModalSchema = void 0;
    var n = au;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = ot(), r = ht();
    e.feedbackModalSchema = t.matchesObject({
      formId: t.matchesPositiveInteger()
    });
    function i(o) {
      return t.validate(o, e.feedbackModalSchema);
    }
    e.validateProps = i;
    function a(o) {
      switch (o.type) {
        case n.Action.OPEN:
          return t.validate(o, r.createActionValidator(n.Action, e.feedbackModalSchema, !0));
        case n.Action.CLOSE:
        default:
          return t.validate(o, r.createActionValidator(n.Action));
      }
    }
    e.validateAction = a;
  }(ja)), ja;
}
var Na = {}, ic;
function Ib() {
  return ic || (ic = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = Oi;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = ot(), r = ht();
    function i(a) {
      var o = r.createActionValidator(n.Action);
      return t.validate(a, o);
    }
    e.validateAction = i;
  }(Na)), Na;
}
var Ra = {}, ac;
function If() {
  return ac || (ac = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.linkActionSchema = e.linkPropsSchema = void 0;
    var n = qn;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = ot(), r = ht(), i;
    (function(s) {
      s.APP = "APP::NAVIGATION::REDIRECT::APP", s.LEGACY_APP = "APP";
    })(i || (i = {})), e.linkPropsSchema = t.matchesObject({
      label: t.matchesString(),
      destination: r.relativeUrlSchema,
      redirectType: t.matchesEnum(i)
    }), e.linkActionSchema = t.matchesObject({
      label: t.matchesString(),
      destination: r.relativePathSchema,
      redirectType: t.matchesEnum(i)
    });
    function a(s) {
      return t.validate(s, e.linkPropsSchema);
    }
    e.validateProps = a;
    function o(s) {
      return t.validate(s, r.createActionValidator(n.Action, e.linkActionSchema, !0, !0));
    }
    e.validateAction = o;
  }(Ra)), Ra;
}
var nn = {}, oc;
function wb() {
  if (oc)
    return nn;
  oc = 1, Object.defineProperty(nn, "__esModule", { value: !0 }), nn.validateAction = nn.validateProps = void 0;
  var e = Ei, n = Ti, t = ot(), r = ht(), i = se, a = If(), o = t.matchesObject({ id: t.matchesString(), options: a.linkPropsSchema });
  function s(p) {
    return [
      {
        error: "invalid_active_item",
        value: p,
        message: "expected active item to exist in menu items"
      }
    ];
  }
  function y(p) {
    var h = t.matchesObject({
      items: t.makeOptional(t.matchesArray(o)),
      active: t.makeOptional(o)
    }), d = p.items, f = p.active;
    if (d && f) {
      var v = t.matchesObject({
        active: t.composeSchemas(o, function(m) {
          return d.find(function(b) {
            return b.id === m.id;
          }) ? void 0 : s(m);
        })
      });
      return t.composeSchemas(h, v);
    }
    return h;
  }
  function u(p) {
    var h = t.matchesObject({
      items: t.makeOptional(t.matchesArray(a.linkActionSchema)),
      active: t.makeOptional(t.matchesString())
    }), d = p.items, f = p.active;
    if (d && f) {
      var v = t.matchesObject({
        active: t.composeSchemas(t.matchesString(), function(m) {
          return d.find(function(b) {
            return b.id === m;
          }) ? void 0 : s(m);
        })
      });
      return t.composeSchemas(h, v);
    }
    return h;
  }
  function c(p) {
    var h = t.validate(p, y(p));
    return h;
  }
  nn.validateProps = c;
  function l(p) {
    var h = e.Action;
    return i.findMatchInEnum(n.Action, p.type) && (h = n.Action), t.validate(p, r.createActionValidator(h, u(p.payload), !0, !1));
  }
  return nn.validateAction = l, nn;
}
var Ma = {}, or = {}, ur = {}, uc;
function Cb() {
  return uc || (uc = 1, Object.defineProperty(ur, "__esModule", { value: !0 }), ur.INTERNAL_PROTOCOL = void 0, ur.INTERNAL_PROTOCOL = "shopify:"), ur;
}
var sc;
function jb() {
  if (sc)
    return or;
  sc = 1, Object.defineProperty(or, "__esModule", { value: !0 }), or.isSafe = void 0;
  var e = Cb(), n = /\/\/\//, t = /[/\\][/\\]/, r = ["https:", "http:"], i = "http://test.com";
  function a(y, u) {
    var c = u === void 0 ? {} : u, l = c.allowedDomains, p = l === void 0 ? [] : l, h = c.subdomains, d = h === void 0 ? [] : h, f = c.matchPath, v = c.requireAbsolute, m = c.requireSSL, b = c.allowInternalProtocol;
    if (n.test(y))
      return !1;
    if (y.startsWith("/"))
      return p.length > 0 || d.length > 0 || v || m ? !1 : f ? s(new URL(y, i), y, f) : !t.test(y);
    var O;
    try {
      O = new URL(y);
    } catch {
      return !1;
    }
    return b && O.protocol === e.INTERNAL_PROTOCOL ? !0 : !(!r.includes(O.protocol) || m && O.protocol !== "https:" || O.username || O.password || f && !s(O, y, f) || !o(O, p, d));
  }
  or.isSafe = a;
  function o(y, u, c) {
    if (!c.every(function(p) {
      return p.startsWith(".");
    }))
      throw new TypeError("Subdomains must begin with .");
    var l = y.hostname;
    return u.length === 0 && c.length === 0 || u.includes(l) || c.some(function(p) {
      return l.endsWith(p);
    });
  }
  function s(y, u, c) {
    var l = y.pathname, p = u.replace(y.origin, "").split("?")[0];
    return typeof c == "string" ? l === c && p === c : c.test(l) && c.test(p);
  }
  return or;
}
var cc;
function Nb() {
  return cc || (cc = 1, function(e) {
    var n = g && g.__assign || function() {
      return n = Object.assign || function(h) {
        for (var d, f = 1, v = arguments.length; f < v; f++) {
          d = arguments[f];
          for (var m in d)
            Object.prototype.hasOwnProperty.call(d, m) && (h[m] = d[m]);
        }
        return h;
      }, n.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var t = ot(), r = ht(), i = Sr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return i.Action;
    } });
    var a = Gt, o = jb(), s = Yi();
    function y(h, d) {
      var f;
      try {
        f = new URL(d).hostname;
      } catch {
        return [
          {
            error: "invalid_app_origin",
            value: d,
            message: "Provided value for app origin: `" + d + "` is invalid"
          }
        ];
      }
      var v = o.isSafe(h, {
        requireAbsolute: !0,
        requireSSL: !0,
        allowInternalProtocol: !0,
        allowedDomains: [f]
      });
      if (!v)
        return [
          {
            error: "not_matching_app_origin",
            value: h,
            message: "Provided URL origin does not match app origin `" + f + "`"
          }
        ];
    }
    function u() {
      return function(h) {
        var d = [i.Size.Small, i.Size.Medium, i.Size.Large];
        if (!d.includes(h)) {
          var f = "expected:" + d.map(function(v) {
            return "`" + v + "`";
          }).join(" or ");
          return h === i.Size.Full && (f += ". Size `" + h + "` is deprecated as of version 1.6.5 and will fall back to size `medium`"), h === i.Size.Auto && (f += ". Size `" + h + "` is deprecated as of version 1.12.x and will fall back to size `medium`. Use the `setUpModalAutoSizing` utility from `app-bridge` instead"), [
            {
              error: "invalid_enum_value",
              value: h,
              message: f
            }
          ];
        }
      };
    }
    function c(h, d) {
      h === void 0 && (h = {});
      var f = t.matchesObject({
        title: t.makeOptional(t.matchesString()),
        footer: t.makeOptional(t.matchesObject({
          buttons: t.matchesObject({
            primary: t.makeOptional(s.buttonSchemaWithId),
            secondary: t.makeOptional(t.matchesArray(s.buttonSchemaWithId))
          })
        })),
        size: t.makeOptional(u())
      });
      if (i.isIframeModal(h)) {
        if (h.url) {
          var v = t.matchesObject({
            url: t.composeSchemas(t.matchesString(), function(m) {
              return d ? y(m, d) : void 0;
            })
          });
          return t.composeSchemas(f, v);
        }
        return t.composeSchemas(f, r.relativePathSchema);
      }
      return t.composeSchemas(f, t.matchesObject({ message: t.matchesString() }));
    }
    function l(h, d) {
      return t.validate(h, c(h, d));
    }
    e.validateProps = l;
    function p(h, d) {
      var f = c(h.payload, d);
      switch (h.type) {
        case i.Action.OPEN:
        case i.Action.UPDATE:
          return t.validate(h, r.createActionValidator(i.Action, f, !0, h.type === i.Action.UPDATE));
        case i.Action.FOOTER_BUTTON_CLICK:
          return s.validateAction(n(n({}, h), { type: a.Action.CLICK }));
        case i.Action.FOOTER_BUTTON_UPDATE:
          return s.validateAction(n(n({}, h), { type: a.Action.UPDATE }));
        case i.Action.CLOSE:
        default:
          return t.validate(h, r.createActionValidator(i.Action));
      }
    }
    e.validateAction = p;
  }(Ma)), Ma;
}
var Ut = {}, lc;
function Rb() {
  if (lc)
    return Ut;
  lc = 1;
  var e = g && g.__assign || function() {
    return e = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, e.apply(this, arguments);
  }, n = g && g.__createBinding || (Object.create ? function(l, p, h, d) {
    d === void 0 && (d = h), Object.defineProperty(l, d, { enumerable: !0, get: function() {
      return p[h];
    } });
  } : function(l, p, h, d) {
    d === void 0 && (d = h), l[d] = p[h];
  }), t = g && g.__setModuleDefault || (Object.create ? function(l, p) {
    Object.defineProperty(l, "default", { enumerable: !0, value: p });
  } : function(l, p) {
    l.default = p;
  }), r = g && g.__importStar || function(l) {
    if (l && l.__esModule)
      return l;
    var p = {};
    if (l != null)
      for (var h in l)
        h !== "default" && Object.prototype.hasOwnProperty.call(l, h) && n(p, l, h);
    return t(p, l), p;
  };
  Object.defineProperty(Ut, "__esModule", { value: !0 }), Ut.validateAction = Ut.getSectionSchema = Ut.matchesAbsolutePath = void 0;
  var i = r(Ai), a = r(Er), o = ot(), s = ht();
  function y(l) {
    return l.match("^https?://") ? void 0 : [
      {
        value: l,
        error: "invalid_absolute_url",
        message: "expected string to start with `https://` or `http://`"
      }
    ];
  }
  Ut.matchesAbsolutePath = y;
  function u(l) {
    var p = l && l.section && l.section.resource && l.section.name === a.ResourceType.Product, h = {
      create: o.makeOptional(o.matchesBoolean()),
      id: o.makeOptional(o.matchesString())
    }, d = e(e({}, h), { variant: o.makeOptional(o.matchesObject(h)) });
    return o.matchesObject({
      section: o.matchesObject({
        name: o.matchesEnum(a.ResourceType),
        resource: o.makeOptional(o.matchesObject(p ? d : h))
      })
    });
  }
  Ut.getSectionSchema = u;
  function c(l) {
    var p = o.matchesObject({ newContext: o.makeOptional(o.matchesBoolean()) }), h = a.Action, d;
    switch (l.type) {
      case i.Action.PUSH:
      case i.Action.REPLACE:
        h = i.Action, d = s.relativePathSchema;
        break;
      case a.Action.APP:
        d = s.relativePathSchema;
        break;
      case a.Action.REMOTE:
        d = o.composeSchemas(o.matchesObject({
          url: o.composeSchemas(o.matchesString(), function(f) {
            return y(f);
          })
        }), p);
        break;
      case a.Action.ADMIN_PATH:
        d = o.composeSchemas(s.relativePathSchema, p);
        break;
      case a.Action.ADMIN_SECTION:
        d = o.composeSchemas(u(l.payload), p);
        break;
    }
    return o.validate(l, s.createActionValidator(h, d));
  }
  return Ut.validateAction = c, Ut;
}
var ka = {}, fc;
function Mb() {
  return fc || (fc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var n = Pi;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = ot(), r = ht(), i = t.matchesArray(t.matchesObject({
      id: t.matchesString()
    })), a = t.matchesObject({
      initialQuery: t.makeOptional(t.matchesString()),
      initialSelectionIds: t.makeOptional(i),
      selectMultiple: t.makeOptional(t.oneOf(t.matchesBoolean(), t.matchesPositiveInteger())),
      showHidden: t.makeOptional(t.matchesBoolean()),
      showVariants: t.makeOptional(t.matchesBoolean()),
      showDraft: t.makeOptional(t.matchesBoolean()),
      showArchived: t.makeOptional(t.matchesBoolean()),
      showDraftBadge: t.makeOptional(t.matchesBoolean()),
      showArchivedBadge: t.makeOptional(t.matchesBoolean()),
      actionVerb: t.makeOptional(t.matchesEnum(n.ActionVerb))
    }), o = t.matchesObject({
      resourceType: t.matchesEnum(n.ResourceType),
      options: t.makeOptional(a)
    }), s = t.matchesObject({
      selection: i
    });
    function y(c) {
      return t.validate(c, a);
    }
    e.validateProps = y;
    function u(c) {
      switch (c.type) {
        case n.Action.UPDATE:
        case n.Action.OPEN:
          return t.validate(c, r.createActionValidator(n.Action, o, !1, !0));
        case n.Action.SELECT:
          return t.validate(c, r.createActionValidator(n.Action, s, !0, !0));
        case n.Action.CANCEL:
        case n.Action.CLOSE:
        default:
          return t.validate(c, r.createActionValidator(n.Action));
      }
    }
    e.validateAction = u;
  }(ka)), ka;
}
var Da = {}, dc;
function kb() {
  return dc || (dc = 1, function(e) {
    var n = g && g.__assign || function() {
      return n = Object.assign || function(p) {
        for (var h, d = 1, f = arguments.length; d < f; d++) {
          h = arguments[d];
          for (var v in h)
            Object.prototype.hasOwnProperty.call(h, v) && (p[v] = h[v]);
        }
        return p;
      }, n.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.titleBarSchema = void 0;
    var t = Si;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = Gt, i = pn, a = ot(), o = ht(), s = Yi(), y = Tf(), u = a.composeSchemas(s.buttonSchema, a.matchesObject({
      id: a.matchesString()
    }));
    e.titleBarSchema = a.matchesObject({
      breadcrumbs: a.makeOptional(s.buttonSchema),
      title: a.makeOptional(a.matchesString()),
      buttons: a.makeOptional(a.matchesObject({
        primary: a.makeOptional(u),
        secondary: a.makeOptional(a.matchesArray(a.composeSchemas(u, a.matchesObject({
          buttons: a.makeOptional(a.matchesArray(u))
        }))))
      }))
    });
    function c(p) {
      return a.validate(p, e.titleBarSchema);
    }
    e.validateProps = c;
    function l(p) {
      switch (p.type) {
        default:
        case t.Action.UPDATE:
          return a.validate(p, o.createActionValidator(t.Action, e.titleBarSchema, !0, !1));
        case t.Action.BUTTON_CLICK:
        case t.Action.BREADCRUMBS_CLICK:
          return s.validateAction(n(n({}, p), { type: r.Action.CLICK }));
        case t.Action.BUTTON_UPDATE:
        case t.Action.BREADCRUMBS_UPDATE:
          return s.validateAction(n(n({}, p), { type: r.Action.UPDATE }));
        case t.Action.BUTTON_GROUP_UPDATE:
          return y.validateAction(n(n({}, p), { type: i.Action.UPDATE }));
      }
    }
    e.validateAction = l;
  }(Da)), Da;
}
var Ba = {}, pc;
function Db() {
  return pc || (pc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateProps = e.validateAction = e.toastSchema = void 0;
    var n = Pr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = ot(), r = ht();
    e.toastSchema = t.matchesObject({
      message: t.matchesString(),
      duration: t.matchesPositiveInteger(),
      isError: t.makeOptional(t.matchesBoolean()),
      action: t.makeOptional(t.matchesObject({
        content: t.matchesString()
      }))
    });
    function i(o) {
      switch (o.type) {
        case n.Action.SHOW:
          return t.validate(o, r.createActionValidator(n.Action, e.toastSchema, !0));
        default:
          return t.validate(o, r.createActionValidator(n.Action));
      }
    }
    e.validateAction = i;
    function a(o) {
      return t.validate(o, e.toastSchema);
    }
    e.validateProps = a;
  }(Ba)), Ba;
}
var La = {}, hc;
function Bb() {
  return hc || (hc = 1, function(e) {
    var n = g && g.__assign || function() {
      return n = Object.assign || function(m) {
        for (var b, O = 1, _ = arguments.length; O < _; O++) {
          b = arguments[O];
          for (var T in b)
            Object.prototype.hasOwnProperty.call(b, T) && (m[T] = b[T]);
        }
        return m;
      }, n.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var t = Ii;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = ot(), i = ht(), a = r.matchesObject({
      content: r.matchesString(),
      id: r.matchesString(),
      progress: r.matchesEnum(t.ALL_BADGE_PROGRESSES),
      status: r.matchesEnum(t.ALL_BADGE_STATUSES)
    }), o = r.matchesObject({
      accessibilityLabel: r.makeOptional(r.matchesString()),
      alt: r.makeOptional(r.matchesString()),
      initials: r.makeOptional(r.matchesString()),
      kind: r.makeOptional(r.matchesEnum(t.ALL_MEDIA_KINDS)),
      name: r.makeOptional(r.matchesString()),
      source: r.matchesString()
    }), s = {
      accessibilityLabel: r.makeOptional(r.matchesString()),
      badges: r.makeOptional(r.matchesArray(a)),
      disabled: r.makeOptional(r.matchesBoolean()),
      id: r.matchesString(),
      loading: r.makeOptional(r.matchesBoolean()),
      media: r.makeOptional(o),
      name: r.makeOptional(r.matchesString()),
      caption: r.makeOptional(r.matchesString()),
      selectable: r.makeOptional(r.matchesBoolean())
    }, y = r.matchesObject(n({}, s)), u = r.matchesArray(r.matchesObject(n(n({}, s), { options: r.makeOptional(r.matchesArray(y)) }))), c = r.matchesObject({
      plural: r.matchesString(),
      singular: r.matchesString()
    }), l = r.matchesObject({
      canLoadMore: r.makeOptional(r.matchesBoolean()),
      emptySearchLabel: r.makeOptional(r.matchesObject({
        title: r.matchesString(),
        description: r.matchesString(),
        withIllustration: r.matchesBoolean()
      })),
      items: r.makeOptional(u),
      loading: r.makeOptional(r.matchesBoolean()),
      loadingMore: r.makeOptional(r.matchesBoolean()),
      maxSelectable: r.makeOptional(r.matchesPositiveInteger()),
      primaryActionLabel: r.makeOptional(r.matchesString()),
      searchQuery: r.makeOptional(r.matchesString()),
      searchQueryPlaceholder: r.makeOptional(r.matchesString()),
      secondaryActionLabel: r.makeOptional(r.matchesString()),
      selectedItems: r.makeOptional(r.matchesArray(r.matchesObject(s))),
      title: r.makeOptional(r.matchesString()),
      verticalAlignment: r.makeOptional(r.matchesEnum(t.ALL_RESOURCE_VERTICAL_ALIGNMENT)),
      allowEmptySelection: r.makeOptional(r.matchesBoolean()),
      resourceName: r.makeOptional(c)
    }), p = r.matchesObject({
      options: r.makeOptional(u)
    }), h = r.matchesObject({
      selectedItems: u
    }), d = r.matchesObject({
      searchQuery: r.makeOptional(r.matchesString())
    });
    function f(m) {
      return r.validate(m, l);
    }
    e.validateProps = f;
    function v(m) {
      switch (m.type) {
        case t.Action.UPDATE:
        case t.Action.OPEN:
          return r.validate(m, i.createActionValidator(t.Action, p, !1, !0));
        case t.Action.SELECT:
          return r.validate(m, i.createActionValidator(t.Action, h, !0, !0));
        case t.Action.SEARCH:
          return r.validate(m, i.createActionValidator(t.Action, d, !0, !0));
        case t.Action.CANCEL:
        case t.Action.LOAD_MORE:
          return r.validate(m, i.createActionValidator(t.Action));
        default:
          return r.validate(m, i.createActionValidator(t.Action));
      }
    }
    e.validateAction = v;
  }(La)), La;
}
var yc;
function Lb() {
  if (yc)
    return he;
  yc = 1;
  var e = g && g.__createBinding || (Object.create ? function(v, m, b, O) {
    O === void 0 && (O = b), Object.defineProperty(v, O, { enumerable: !0, get: function() {
      return m[b];
    } });
  } : function(v, m, b, O) {
    O === void 0 && (O = b), v[O] = m[b];
  }), n = g && g.__setModuleDefault || (Object.create ? function(v, m) {
    Object.defineProperty(v, "default", { enumerable: !0, value: m });
  } : function(v, m) {
    v.default = m;
  }), t = g && g.__importStar || function(v) {
    if (v && v.__esModule)
      return v;
    var m = {};
    if (v != null)
      for (var b in v)
        b !== "default" && Object.prototype.hasOwnProperty.call(v, b) && e(m, v, b);
    return n(m, v), m;
  };
  Object.defineProperty(he, "__esModule", { value: !0 }), he.unstable_Picker = he.Toast = he.TitleBar = he.ResourcePicker = he.Navigation = he.Modal = he.Menu = he.Link = he.LeaveConfirmation = he.FeedbackModal = he.ContextualSaveBar = he.ButtonGroup = he.Button = void 0;
  var r = t(Yi());
  he.Button = r;
  var i = t(Tf());
  he.ButtonGroup = i;
  var a = t(Eb());
  he.ContextualSaveBar = a;
  var o = t(Tb());
  he.FeedbackModal = o;
  var s = t(Ib());
  he.LeaveConfirmation = s;
  var y = t(If());
  he.Link = y;
  var u = t(wb());
  he.Menu = u;
  var c = t(Nb());
  he.Modal = c;
  var l = t(Rb());
  he.Navigation = l;
  var p = t(Mb());
  he.ResourcePicker = p;
  var h = t(kb());
  he.TitleBar = h;
  var d = t(Db());
  he.Toast = d;
  var f = t(Bb());
  return he.unstable_Picker = f, he;
}
var Ua = {}, Fa = {}, vc;
function er() {
  return vc || (vc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.matchesPositiveNumber = e.TYPE_ERROR = e.oneOf = e.matchesArray = e.validate = e.matchesPositiveInteger = e.matchesBoolean = e.makeOptional = e.matchesString = e.matchesObject = e.matchesEnum = e.composeSchemas = void 0;
    var n = ot();
    Object.defineProperty(e, "TYPE_ERROR", { enumerable: !0, get: function() {
      return n.TYPE_ERROR;
    } });
    var t = ot();
    Object.defineProperty(e, "composeSchemas", { enumerable: !0, get: function() {
      return t.composeSchemas;
    } }), Object.defineProperty(e, "matchesEnum", { enumerable: !0, get: function() {
      return t.matchesEnum;
    } }), Object.defineProperty(e, "matchesObject", { enumerable: !0, get: function() {
      return t.matchesObject;
    } }), Object.defineProperty(e, "matchesString", { enumerable: !0, get: function() {
      return t.matchesString;
    } }), Object.defineProperty(e, "makeOptional", { enumerable: !0, get: function() {
      return t.makeOptional;
    } }), Object.defineProperty(e, "matchesBoolean", { enumerable: !0, get: function() {
      return t.matchesBoolean;
    } }), Object.defineProperty(e, "matchesPositiveInteger", { enumerable: !0, get: function() {
      return t.matchesPositiveInteger;
    } }), Object.defineProperty(e, "validate", { enumerable: !0, get: function() {
      return t.validate;
    } }), Object.defineProperty(e, "matchesArray", { enumerable: !0, get: function() {
      return t.matchesArray;
    } }), Object.defineProperty(e, "oneOf", { enumerable: !0, get: function() {
      return t.oneOf;
    } });
    function r(a, o, s) {
      return s === void 0 && (s = { message: void 0 }), [
        {
          value: a,
          error: o,
          message: typeof s.message == "function" ? s.message(o, a) : s.message
        }
      ];
    }
    function i(a) {
      return function(o) {
        return Number.isNaN(o) || !Number.isFinite(o) || o < 0 ? r(o, n.TYPE_ERROR + "_number", a) : void 0;
      };
    }
    e.matchesPositiveNumber = i;
  }(Fa)), Fa;
}
var Va = {}, mc;
function mn() {
  return mc || (mc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mixedAppClientCheck = e.actionMessage = e.relativePathSchema = e.relativeUrlSchema = e.isValidRelativePath = e.createActionValidator = void 0;
    var n = ht();
    Object.defineProperty(e, "createActionValidator", { enumerable: !0, get: function() {
      return n.createActionValidator;
    } }), Object.defineProperty(e, "isValidRelativePath", { enumerable: !0, get: function() {
      return n.isValidRelativePath;
    } }), Object.defineProperty(e, "relativeUrlSchema", { enumerable: !0, get: function() {
      return n.relativeUrlSchema;
    } }), Object.defineProperty(e, "relativePathSchema", { enumerable: !0, get: function() {
      return n.relativePathSchema;
    } });
    function t(i) {
      return i.map(function(a) {
        var o = a.path, s = a.error, y = a.message, u = a.value, c = typeof u == "object" ? JSON.stringify(u) : u;
        return "`" + s + "` thrown for" + (o ? " path: " + o + " and" : "") + " value: `" + c + "`" + (y ? " with message: " + y : "");
      }).join(" | ");
    }
    e.actionMessage = t;
    function r(i) {
      i.addEventListener("DOMContentLoaded", function() {
        Object.prototype.hasOwnProperty.call(i, "ShopifyApp") && console.error(`%cException Detected 🚫

%cAn instance of the EASDK client was detected while initializing Shopify App Bridge. Using Shopify App Bridge and the EASDK simultaneously is not supported.

If you're migrating an existing app that was built with the shopify_app gem, then the EASDK client might have been included in the home page view template. In this case, remove it from your app before initializing Shopify App Bridge again.`, "font-size: large;", "font-size: normal;");
      }, { once: !0 });
    }
    e.mixedAppClientCheck = r;
  }(Va)), Va;
}
var bc;
function Ub() {
  return bc || (bc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = xo;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = er(), r = mn(), i = t.matchesObject({
      address1: t.makeOptional(t.matchesString()),
      address2: t.makeOptional(t.matchesString()),
      city: t.makeOptional(t.matchesString()),
      company: t.makeOptional(t.matchesString()),
      firstName: t.makeOptional(t.matchesString()),
      lastName: t.makeOptional(t.matchesString()),
      phone: t.makeOptional(t.matchesString()),
      province: t.makeOptional(t.matchesString()),
      country: t.makeOptional(t.matchesString()),
      zip: t.makeOptional(t.matchesString()),
      name: t.makeOptional(t.matchesString()),
      provinceCode: t.makeOptional(t.matchesString()),
      countryCode: t.makeOptional(t.matchesString())
    }), a = t.matchesObject({
      amount: t.makeOptional(t.matchesPositiveInteger()),
      discountDescription: t.makeOptional(t.matchesString()),
      type: t.makeOptional(t.matchesString()),
      discountCode: t.makeOptional(t.matchesString())
    }), o = t.matchesObject({
      amount: t.matchesPositiveNumber(),
      discountDescription: t.makeOptional(t.matchesString()),
      type: t.makeOptional(t.matchesString())
    }), s = t.matchesObject({
      discountCode: t.matchesString()
    }), y = t.matchesObject({
      price: t.makeOptional(t.matchesPositiveNumber()),
      quantity: t.makeOptional(t.matchesPositiveInteger()),
      title: t.makeOptional(t.matchesString()),
      variantId: t.makeOptional(t.matchesPositiveInteger()),
      discount: t.makeOptional(o)
    }), u = t.matchesObject({
      quantity: t.matchesPositiveInteger()
    }), c = t.matchesObject({
      id: t.makeOptional(t.matchesPositiveInteger()),
      email: t.makeOptional(t.matchesString()),
      firstName: t.makeOptional(t.matchesString()),
      lastName: t.makeOptional(t.matchesString()),
      note: t.makeOptional(t.matchesString()),
      addresses: t.makeOptional(t.matchesArray(i))
    }), l = t.matchesObject({
      name: t.matchesString(),
      value: t.matchesString()
    }), p = t.matchesObject({
      cartDiscount: t.makeOptional(a),
      customer: t.makeOptional(c),
      grandTotal: t.makeOptional(t.matchesString()),
      lineItems: t.makeOptional(t.matchesArray(y)),
      noteAttributes: t.makeOptional(t.matchesArray(l)),
      subTotal: t.makeOptional(t.matchesString()),
      taxTotal: t.makeOptional(t.matchesString())
    }), h = t.composeSchemas(t.matchesObject({}), function(O) {
      var _ = t.matchesString(), T = Object.keys(O).reduce(function(P, E) {
        return P[E] = _, P;
      }, {});
      return t.validate(O, t.matchesObject(T));
    }), d = t.matchesArray(t.matchesString());
    function f(O) {
      return r.createActionValidator(n.Action, O ? t.matchesObject({ data: O }) : void 0, !0, !0);
    }
    function v(O) {
      var _ = t.matchesObject({ index: t.matchesPositiveInteger() });
      if (O) {
        var T = t.matchesObject({ data: O });
        return r.createActionValidator(n.Action, t.composeSchemas(_, T), !0, !0);
      }
      return r.createActionValidator(n.Action, _, !0, !0);
    }
    function m(O) {
      return O.amount ? o : s;
    }
    function b(O) {
      switch (O.type) {
        case n.Action.UPDATE:
          return t.validate(O, f(p));
        case n.Action.SET_CUSTOMER:
          return t.validate(O, f(c));
        case n.Action.ADD_CUSTOMER_ADDRESS:
          return t.validate(O, f(i));
        case n.Action.UPDATE_CUSTOMER_ADDRESS:
          return t.validate(O, v(i));
        case n.Action.SET_DISCOUNT:
          return t.validate(O, f(m(O.payload.data)));
        case n.Action.SET_PROPERTIES:
          return t.validate(O, f(h));
        case n.Action.REMOVE_PROPERTIES:
          return t.validate(O, f(d));
        case n.Action.ADD_LINE_ITEM:
          return t.validate(O, f(y));
        case n.Action.UPDATE_LINE_ITEM:
          return t.validate(O, v(u));
        case n.Action.REMOVE_LINE_ITEM:
          return t.validate(O, v());
        case n.Action.SET_LINE_ITEM_DISCOUNT:
          return t.validate(O, v(o));
        case n.Action.REMOVE_LINE_ITEM_DISCOUNT:
          return t.validate(O, v());
        case n.Action.SET_LINE_ITEM_PROPERTIES:
          return t.validate(O, v(h));
        case n.Action.REMOVE_LINE_ITEM_PROPERTIES:
          return t.validate(O, v(d));
        case n.Action.FETCH:
        case n.Action.REMOVE_CUSTOMER:
        case n.Action.REMOVE_DISCOUNT:
        case n.Action.CLEAR:
        default:
          return t.validate(O, r.createActionValidator(n.Action, void 0, !1, !0));
      }
    }
    e.validateAction = b;
  }(Ua)), Ua;
}
var $a = {}, gc;
function Fb() {
  return gc || (gc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = ou;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = er(), r = mn();
    function i(a) {
      var o = r.createActionValidator(n.Action);
      return t.validate(a, o);
    }
    e.validateAction = i;
  }($a)), $a;
}
var Ga = {}, _c;
function Vb() {
  return _c || (_c = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = uu;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = er(), r = mn();
    function i(a) {
      var o = r.createActionValidator(n.Action);
      return t.validate(a, o);
    }
    e.validateAction = i;
  }(Ga)), Ga;
}
var qa = {}, Oc;
function $b() {
  return Oc || (Oc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = zi;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = er(), r = mn();
    function i(a) {
      return t.validate(a, r.createActionValidator(n.Action));
    }
    e.validateAction = i;
  }(qa)), qa;
}
var Wa = {}, Ac;
function Gb() {
  return Ac || (Ac = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = cu;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = er(), r = mn();
    function i(a) {
      return t.validate(a, r.createActionValidator(n.Action));
    }
    e.validateAction = i;
  }(Wa)), Wa;
}
var Pc;
function qb() {
  return Pc || (Pc = 1, function(e) {
    var n = g && g.__createBinding || (Object.create ? function(c, l, p, h) {
      h === void 0 && (h = p), Object.defineProperty(c, h, { enumerable: !0, get: function() {
        return l[p];
      } });
    } : function(c, l, p, h) {
      h === void 0 && (h = p), c[h] = l[p];
    }), t = g && g.__setModuleDefault || (Object.create ? function(c, l) {
      Object.defineProperty(c, "default", { enumerable: !0, value: l });
    } : function(c, l) {
      c.default = l;
    }), r = g && g.__importStar || function(c) {
      if (c && c.__esModule)
        return c;
      var l = {};
      if (c != null)
        for (var p in c)
          p !== "default" && Object.prototype.hasOwnProperty.call(c, p) && n(l, c, p);
      return t(l, c), l;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.unstable_Picker = e.Toast = e.TitleBar = e.Scanner = e.ResourcePicker = e.Print = e.Navigation = e.Modal = e.Menu = e.Loading = e.Link = e.LeaveConfirmation = e.Fullscreen = e.FeedbackModal = e.ContextualSaveBar = e.Cart = e.ButtonGroup = e.Button = void 0;
    var i = Lb();
    Object.defineProperty(e, "Button", { enumerable: !0, get: function() {
      return i.Button;
    } }), Object.defineProperty(e, "ButtonGroup", { enumerable: !0, get: function() {
      return i.ButtonGroup;
    } }), Object.defineProperty(e, "ContextualSaveBar", { enumerable: !0, get: function() {
      return i.ContextualSaveBar;
    } }), Object.defineProperty(e, "FeedbackModal", { enumerable: !0, get: function() {
      return i.FeedbackModal;
    } }), Object.defineProperty(e, "LeaveConfirmation", { enumerable: !0, get: function() {
      return i.LeaveConfirmation;
    } }), Object.defineProperty(e, "Link", { enumerable: !0, get: function() {
      return i.Link;
    } }), Object.defineProperty(e, "Menu", { enumerable: !0, get: function() {
      return i.Menu;
    } }), Object.defineProperty(e, "Modal", { enumerable: !0, get: function() {
      return i.Modal;
    } }), Object.defineProperty(e, "Navigation", { enumerable: !0, get: function() {
      return i.Navigation;
    } }), Object.defineProperty(e, "ResourcePicker", { enumerable: !0, get: function() {
      return i.ResourcePicker;
    } }), Object.defineProperty(e, "TitleBar", { enumerable: !0, get: function() {
      return i.TitleBar;
    } }), Object.defineProperty(e, "Toast", { enumerable: !0, get: function() {
      return i.Toast;
    } }), Object.defineProperty(e, "unstable_Picker", { enumerable: !0, get: function() {
      return i.unstable_Picker;
    } });
    var a = r(Ub());
    e.Cart = a;
    var o = r(Fb());
    e.Fullscreen = o;
    var s = r(Vb());
    e.Loading = s;
    var y = r($b());
    e.Print = y;
    var u = r(Gb());
    e.Scanner = u;
  }(Sa)), Sa;
}
var Sc;
function Wb() {
  return Sc || (Sc = 1, function(e) {
    var n = g && g.__spreadArray || function(f, v) {
      for (var m = 0, b = v.length, O = f.length; m < b; m++, O++)
        f[O] = v[m];
      return f;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validatorMiddleware = e.connectValidatorToDispatchHook = e.connectValidatorToUpdateHook = void 0;
    var t = Tr(), r = Zt, i = vn, a = Xt, o = qb(), s = er(), y = mn();
    function u(f, v, m) {
      switch (v) {
        case r.Group.Button:
          return o.Button.validateProps(m);
        case r.Group.ButtonGroup:
          return o.ButtonGroup.validateProps(m);
        case r.Group.Modal:
          return o.Modal.validateProps(m, f);
        case r.Group.Menu:
          return o.Menu.validateProps(m);
        case r.Group.Link:
          return o.Link.validateProps(m);
        case r.Group.TitleBar:
          return o.TitleBar.validateProps(m);
        case r.Group.ResourcePicker:
          return o.ResourcePicker.validateProps(m);
        case r.Group.Toast:
          return o.Toast.validateProps(m);
        case r.Group.ContextualSaveBar:
          return o.ContextualSaveBar.validateProps(m);
        case r.Group.unstable_Picker:
          return o.unstable_Picker.validateProps(m);
      }
    }
    function c(f, v) {
      switch (f.group) {
        case r.Group.Button:
          return o.Button.validateAction(f);
        case r.Group.ButtonGroup:
          return o.ButtonGroup.validateAction(f);
        case r.Group.Modal:
          return o.Modal.validateAction(f, v);
        case r.Group.Menu:
          return o.Menu.validateAction(f);
        case r.Group.TitleBar:
          return o.TitleBar.validateAction(f);
        case r.Group.ResourcePicker:
          return o.ResourcePicker.validateAction(f);
        case r.Group.Loading:
          return o.Loading.validateAction(f);
        case r.Group.Toast:
          return o.Toast.validateAction(f);
        case r.Group.Cart:
          return o.Cart.validateAction(f);
        case r.Group.Navigation:
          return o.Navigation.validateAction(f);
        case r.Group.Print:
          return o.Print.validateAction(f);
        case r.Group.Scanner:
          return o.Scanner.validateAction(f);
        case r.Group.Fullscreen:
          return o.Fullscreen.validateAction(f);
        case r.Group.ContextualSaveBar:
          return o.ContextualSaveBar.validateAction(f);
        case r.Group.Link:
          return o.Link.validateAction(f);
        case r.Group.unstable_Picker:
          return o.unstable_Picker.validateAction(f);
      }
    }
    function l(f, v) {
      var m = s.validate(f, s.matchesObject({
        group: s.matchesEnum(r.Group, {
          message: function(O, _) {
            return "Unknown or unsupported action group `" + _ + "`";
          }
        }),
        version: s.matchesString()
      }));
      if (m)
        return i.invalidAction(f, y.actionMessage(m));
      var b = c(f, v);
      return b ? i.invalidPayload(f, y.actionMessage(b)) : f;
    }
    var p = function(f) {
      return function(v) {
        for (var m = [], b = 1; b < arguments.length; b++)
          m[b - 1] = arguments[b];
        var O = a.getMergedProps(this.options, v), _ = u(this.app.localOrigin, this.defaultGroup, O);
        if (_)
          throw i.fromAction(y.actionMessage(_), i.Action.INVALID_OPTIONS);
        return f.apply(void 0, n([v], m));
      };
    };
    e.connectValidatorToUpdateHook = p;
    var h = function(f) {
      return function(v) {
        var m = l(v, this.localOrigin);
        return f(m);
      };
    };
    e.connectValidatorToDispatchHook = h;
    var d = function(f) {
      f.set(t.LifecycleHook.UpdateAction, e.connectValidatorToUpdateHook), f.set(t.LifecycleHook.DispatchAction, e.connectValidatorToDispatchHook);
    };
    e.validatorMiddleware = d;
  }(Pa)), Pa;
}
var Ec;
function Hb() {
  if (Ec)
    return ti;
  Ec = 1, Object.defineProperty(ti, "__esModule", { value: !0 });
  var e = Wb();
  return ti.default = e.validatorMiddleware, ti;
}
var Tc;
function zb() {
  return Tc || (Tc = 1, function(e) {
    var n = g && g.__createBinding || (Object.create ? function(c, l, p, h) {
      h === void 0 && (h = p), Object.defineProperty(c, h, { enumerable: !0, get: function() {
        return l[p];
      } });
    } : function(c, l, p, h) {
      h === void 0 && (h = p), c[h] = l[p];
    }), t = g && g.__exportStar || function(c, l) {
      for (var p in c)
        p !== "default" && !Object.prototype.hasOwnProperty.call(l, p) && n(l, c, p);
    }, r = g && g.__importDefault || function(c) {
      return c && c.__esModule ? c : { default: c };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createApp = void 0;
    var i = r(Hb()), a = mn(), o = wu(), s = Tr(), y = Sf();
    function u(c) {
      var l = o.getWindow();
      return !l || !l.top ? y.serverAppBridge : (a.mixedAppClientCheck(l), s.createAppWrapper(l.top, l.location.origin, [i.default])(c));
    }
    e.createApp = u, e.default = u, t(xn, e), t(Tr(), e);
  }(Aa)), Aa;
}
process.env.NODE_ENV === "production" ? To.exports = Sb() : To.exports = zb();
var Qb = To.exports, Cu = {}, ju = {}, Br = {};
Object.defineProperty(Br, "__esModule", { value: !0 });
Br.handleRouteChange = void 0;
var Yb = Dt;
function Kb(e, n) {
  return e.subscribe(Yb.Redirect.Action.APP, function(t) {
    var r = t.path;
    n.replace(r);
  });
}
Br.handleRouteChange = Kb;
var Jb = g && g.__extends || function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(n, t);
  };
  return function(n, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(n, t);
    function r() {
      this.constructor = n;
    }
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), Xb = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ju, "__esModule", { value: !0 });
var Zb = Xb(oe), xb = jt, eg = Br, tg = (
  /** @class */
  function(e) {
    Jb(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.props.history;
      this.unsubscribe = eg.handleRouteChange(this.context, t);
    }, n.prototype.componentWillUnmount = function() {
      this.unsubscribe && this.unsubscribe();
    }, n.prototype.render = function() {
      return null;
    }, n.contextType = xb.AppBridgeContext, n;
  }(Zb.default.Component)
);
ju.default = tg;
var Nu = {};
Object.defineProperty(Nu, "__esModule", { value: !0 });
var ng = oe, rg = tt, ig = Br;
function ag(e) {
  var n = rg.useAppBridge();
  ng.useEffect(function() {
    return ig.handleRouteChange(n, e);
  }, [n, e]);
}
Nu.default = ag;
(function(e) {
  var n = g && g.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useClientRouting = e.ClientRouter = void 0;
  var t = ju;
  Object.defineProperty(e, "ClientRouter", { enumerable: !0, get: function() {
    return n(t).default;
  } });
  var r = Nu;
  Object.defineProperty(e, "useClientRouting", { enumerable: !0, get: function() {
    return n(r).default;
  } });
})(Cu);
var Ru = {}, Mu = {}, Lr = {}, zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.getOrigin = zt.getTopWindow = zt.getSelfWindow = void 0;
function og() {
  return window.self;
}
zt.getSelfWindow = og;
function ug() {
  return window.top;
}
zt.getTopWindow = ug;
function sg() {
  return location.origin;
}
zt.getOrigin = sg;
var cg = g && g.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (l) {
        o(l);
      }
    }
    function y(c) {
      try {
        u(r.throw(c));
      } catch (l) {
        o(l);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, lg = g && g.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(c) {
      return y([u, c]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = u;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(u);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Lr, "__esModule", { value: !0 });
Lr.updateHistory = void 0;
var fg = xn, Ic = Dt, Io = zt, dg = [
  "hmac",
  "locale",
  "protocol",
  "session",
  "shop",
  "timestamp",
  "host"
];
function pg(e, n) {
  return cg(this, void 0, void 0, function() {
    var t, r, i, a, o, s, y, u, c;
    return lg(this, function(l) {
      switch (l.label) {
        case 0:
          return t = Io.getSelfWindow(), r = Io.getTopWindow(), i = t === r, [4, e.getState("context").then(function(p) {
            return p === fg.Context.Main;
          })];
        case 1:
          return a = l.sent(), i || !a ? [
            2
            /*return*/
          ] : (o = hg(n), dg.forEach(function(p) {
            return o.searchParams.delete(p);
          }), s = o.pathname, y = o.search, u = o.hash, c = "" + s + y + u, Ic.History.create(e).dispatch(Ic.History.Action.REPLACE, c), [
            2
            /*return*/
          ]);
      }
    });
  });
}
Lr.updateHistory = pg;
function hg(e) {
  var n = Io.getOrigin();
  if (typeof e == "string")
    return new URL(e, n);
  var t = e.pathname, r = e.search, i = e.hash;
  return new URL("" + t + r + i, n);
}
var yg = g && g.__extends || function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(n, t);
  };
  return function(n, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(n, t);
    function r() {
      this.constructor = n;
    }
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), vg = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Mu, "__esModule", { value: !0 });
var mg = vg(oe), bg = jt, wc = Lr, gg = (
  /** @class */
  function(e) {
    yg(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.props.location;
      wc.updateHistory(this.context, t);
    }, n.prototype.componentDidUpdate = function(t) {
      var r = t.location, i = this.props.location;
      i !== r && wc.updateHistory(this.context, i);
    }, n.prototype.render = function() {
      return null;
    }, n.contextType = bg.AppBridgeContext, n;
  }(mg.default.Component)
);
Mu.default = gg;
var ku = {};
Object.defineProperty(ku, "__esModule", { value: !0 });
var _g = oe, Og = tt, Ag = Lr;
function Pg(e) {
  var n = Og.useAppBridge();
  _g.useEffect(function() {
    Ag.updateHistory(n, e);
  }, [n, e]);
}
ku.default = Pg;
(function(e) {
  var n = g && g.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useRoutePropagation = e.RoutePropagator = void 0;
  var t = Mu;
  Object.defineProperty(e, "RoutePropagator", { enumerable: !0, get: function() {
    return n(t).default;
  } });
  var r = ku;
  Object.defineProperty(e, "useRoutePropagation", { enumerable: !0, get: function() {
    return n(r).default;
  } });
})(Ru);
const Sg = "@shopify/app-bridge-react", Eg = "3.0.0", Tg = "index.d.ts", Ig = "index.js", wg = "umd/index.js", Cg = "umd/index.js", jg = [
  "/components/",
  "/umd/",
  "/hooks/",
  "/utilities/",
  "/context.d.ts",
  "/context.js",
  "/index.d.ts",
  "/index.js",
  "/types.d.ts",
  "/types.js",
  "/useAppBridge.d.ts",
  "/useAppBridge.js"
], Ng = {
  access: "public",
  "@shopify:registry": "https://registry.npmjs.org"
}, Rg = "git@github.com:Shopify/app-bridge.git", Mg = "https://shopify.dev/tools/app-bridge/react-components", kg = "Shopify Inc.", Dg = "MIT", Bg = {
  build: "yarn build:tsc && yarn build:umd",
  "build:tsc": "NODE_ENV=production tsc",
  "build:umd": "NODE_ENV=production webpack -p",
  check: "tsc",
  clean: `cat package.json | node -pe "JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).files.map(f => './'+f).join(' ')" | xargs rm -rf`,
  pack: "yarn pack",
  size: "size-limit"
}, Lg = !1, Ug = {
  "@shopify/app-bridge": "^3.0.0"
}, Fg = {
  "@types/react": "^17.0.38",
  enzyme: "3.11.0",
  "react-dom": "^17.0.2"
}, Vg = {
  react: "^16.0.0 || ^17.0.0 || ^18.0.0"
}, $g = "7102c192814e6f3cf55daf81324b54a960ebe701", Gg = {
  name: Sg,
  version: Eg,
  types: Tg,
  main: Ig,
  unpkg: wg,
  jsdelivr: Cg,
  files: jg,
  private: !1,
  publishConfig: Ng,
  repository: Rg,
  homepage: Mg,
  author: kg,
  license: Dg,
  scripts: Bg,
  sideEffects: Lg,
  "size-limit": [
    {
      limit: "30 KB",
      path: "index.js"
    }
  ],
  dependencies: Ug,
  devDependencies: Fg,
  peerDependencies: Vg,
  gitHead: $g
};
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(h, d, f, v) {
    v === void 0 && (v = f), Object.defineProperty(h, v, { enumerable: !0, get: function() {
      return d[f];
    } });
  } : function(h, d, f, v) {
    v === void 0 && (v = f), h[v] = d[f];
  }), t = g && g.__setModuleDefault || (Object.create ? function(h, d) {
    Object.defineProperty(h, "default", { enumerable: !0, value: d });
  } : function(h, d) {
    h.default = d;
  }), r = g && g.__importStar || function(h) {
    if (h && h.__esModule)
      return h;
    var d = {};
    if (h != null)
      for (var f in h)
        f !== "default" && Object.prototype.hasOwnProperty.call(h, f) && n(d, h, f);
    return t(d, h), d;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.setClientInterfaceHook = void 0;
  var i = r(oe), a = r(Qb), o = jt, s = Cu, y = Ru, u = Gg;
  function c(h) {
    var d = h.config, f = h.router, v = h.children, m = i.useMemo(function() {
      return a.default(d);
    }, [JSON.stringify(d)]);
    i.useEffect(function() {
      m != null && m.hooks && m.hooks.set(a.LifecycleHook.DispatchAction, e.setClientInterfaceHook);
    }, [m]);
    var b = f != null && f.history && (f != null && f.location) ? i.default.createElement(p, { history: f.history, location: f.location }) : null;
    return i.default.createElement(
      o.AppBridgeContext.Provider,
      { value: m },
      b,
      v
    );
  }
  var l = function(h) {
    return function(d) {
      return d.clientInterface = {
        name: "@shopify/app-bridge-react",
        version: u.version
      }, h(d);
    };
  };
  e.setClientInterfaceHook = l;
  function p(h) {
    var d = h.history, f = h.location;
    return s.useClientRouting(d), y.useRoutePropagation(f), null;
  }
  e.default = c;
})(Af);
var qg = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Iu, "__esModule", { value: !0 });
var Wg = qg(Af);
Iu.default = Wg.default;
var Du = {}, wf = {};
(function(e) {
  var n = g && g.__assign || function() {
    return n = Object.assign || function(s) {
      for (var y, u = 1, c = arguments.length; u < c; u++) {
        y = arguments[u];
        for (var l in y)
          Object.prototype.hasOwnProperty.call(y, l) && (s[l] = y[l]);
      }
      return s;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ResourceType = e.ActionVerb = void 0;
  var t = oe, r = su;
  Object.defineProperty(e, "ActionVerb", { enumerable: !0, get: function() {
    return r.ActionVerb;
  } }), Object.defineProperty(e, "ResourceType", { enumerable: !0, get: function() {
    return r.ResourceType;
  } });
  var i = tt;
  function a(s) {
    var y = i.useAppBridge(), u = t.useRef(null), c = s.resourceType, l = s.onSelection, p = s.onCancel, h = s.open, d = t.useRef({ open: !1 }), f = t.useMemo(function() {
      return r.create(y, {
        resourceType: r.ResourceType[c],
        options: o(s)
      });
    }, [y]);
    return t.useEffect(function() {
      var v, m = (v = d.current) === null || v === void 0 ? void 0 : v.open;
      m !== h && (h ? f.dispatch(r.Action.OPEN) : f.dispatch(r.Action.CLOSE)), !m && h ? u.current = document.activeElement : m && !h && u.current != null && document.contains(u.current) && (u.current.focus(), u.current = null);
    }, [h]), t.useEffect(function() {
      var v = [];
      return l != null && v.push(f.subscribe(r.Action.SELECT, l)), p != null && v.push(f.subscribe(r.Action.CANCEL, p)), function() {
        for (var m = v.pop(); m; )
          m(), m = v.pop();
      };
    }, [l, p]), t.useEffect(function() {
      var v = JSON.stringify(n(n({}, d.current), { open: void 0 })) !== JSON.stringify(n(n({}, s), { open: void 0 }));
      v && (f.set(o(s)), d.current = s);
    }, [s]), null;
  }
  function o(s) {
    var y = s.initialQuery, u = s.initialSelectionIds, c = s.showHidden, l = s.allowMultiple, p = s.selectMultiple, h = s.actionVerb, d = {
      initialQuery: y,
      initialSelectionIds: u,
      showHidden: c,
      selectMultiple: p ?? l,
      actionVerb: h
    }, f = d;
    if (s.resourceType === "Product") {
      var v = s.showVariants, m = s.showDraft, b = s.showArchived, O = s.showDraftBadge, _ = s.showArchivedBadge, T = {
        showVariants: v,
        showDraft: m,
        showArchived: b,
        showDraftBadge: O,
        showArchivedBadge: _
      };
      f = n(n({}, d), T);
    }
    return f;
  }
  e.default = a;
})(wf);
var Hg = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Du, "__esModule", { value: !0 });
var zg = Hg(wf);
Du.default = zg.default;
var Bu = {}, Lu = {};
Object.defineProperty(Lu, "__esModule", { value: !0 });
var Ha = oe, wo = kr, Qg = fu, Cf = Gi, jf = hn, Yg = tt;
function Kg(e) {
  var n = e.title, t = Yg.useAppBridge(), r = Ha.useRef({ title: n }), i = Ha.useMemo(function() {
    return Qg.create(t, {});
  }, [t]);
  return Ha.useEffect(function() {
    var a, o = JSON.stringify(r.current) !== JSON.stringify(e);
    if (r.current = e, o)
      i.set(Zg(t, e));
    else {
      var s = e.primaryAction, y = e.secondaryActions, u = e.actionGroups, c = e.breadcrumbs, l = Array.isArray(c) ? c[c.length - 1] : c;
      Ir(l, i.options.breadcrumbs), Ir(s, (a = i.options.buttons) === null || a === void 0 ? void 0 : a.primary), Jg(i, y), Xg(i, u);
    }
    return function() {
      i.unsubscribe();
    };
  }, [i, e]), null;
}
Lu.default = Kg;
function Jg(e, n) {
  var t, r, i = ((r = (t = e.options.buttons) === null || t === void 0 ? void 0 : t.secondary) === null || r === void 0 ? void 0 : r.filter(function(a) {
    return !Cf.isGroupedButton(a);
  })) || [];
  i == null || i.forEach(function(a, o) {
    return Ir(
      n == null ? void 0 : n[o],
      // This needs to be casted as the React TitleBar component doesn't accept button groups for secondary actions
      a
    );
  });
}
function Xg(e, n) {
  var t, r, i = ((r = (t = e.options.buttons) === null || t === void 0 ? void 0 : t.secondary) === null || r === void 0 ? void 0 : r.filter(Cf.isGroupedButton)) || [];
  i == null || i.forEach(function(a, o) {
    var s = n == null ? void 0 : n[o];
    s && a.options.buttons.forEach(function(y, u) {
      return Ir(s.actions[u], y);
    });
  });
}
function Zg(e, n) {
  var t = n.actionGroups, r = n.breadcrumbs, i = n.primaryAction, a = n.secondaryActions, o = n.title, s = Array.isArray(r) ? r[r.length - 1] : r;
  return {
    title: o,
    buttons: jf.transformActions(e, {
      primaryAction: i,
      secondaryActions: a,
      actionGroups: t
    }),
    breadcrumbs: s ? xg(e, s) : void 0
  };
}
function xg(e, n, t) {
  var r = t || wo.create(e, {
    label: n.content || ""
  });
  return Ir(n, r), r;
}
function Ir(e, n) {
  if (!(!e || !n)) {
    var t = jf.generateRedirect(n.app, e.url, e.target, e.external);
    t && n.subscribe(wo.Action.CLICK, t, n), e != null && e.onAction && n.subscribe(wo.Action.CLICK, e.onAction, n);
  }
}
var e_ = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Bu, "__esModule", { value: !0 });
var t_ = e_(Lu);
Bu.default = t_.default;
var Uu = {}, Nf = {};
(function(e) {
  var n = g && g.__extends || function() {
    var s = function(y, u) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, l) {
        c.__proto__ = l;
      } || function(c, l) {
        for (var p in l)
          Object.prototype.hasOwnProperty.call(l, p) && (c[p] = l[p]);
      }, s(y, u);
    };
    return function(y, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      s(y, u);
      function c() {
        this.constructor = y;
      }
      y.prototype = u === null ? Object.create(u) : (c.prototype = u.prototype, new c());
    };
  }(), t = g && g.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DEFAULT_TOAST_DURATION = void 0;
  var r = t(oe), i = Dt, a = jt;
  e.DEFAULT_TOAST_DURATION = 5e3;
  var o = (
    /** @class */
    function(s) {
      n(y, s);
      function y() {
        return s !== null && s.apply(this, arguments) || this;
      }
      return y.prototype.componentDidMount = function() {
        var u = this.context, c = this.props, l = c.error, p = c.content, h = c.duration, d = h === void 0 ? e.DEFAULT_TOAST_DURATION : h, f = c.onDismiss;
        this.toast = i.Toast.create(u, {
          message: p,
          duration: d,
          isError: l
        }), this.toast.subscribe(i.Toast.Action.CLEAR, f), this.toast.dispatch(i.Toast.Action.SHOW);
      }, y.prototype.componentWillUnmount = function() {
        this.toast.unsubscribe();
      }, y.prototype.render = function() {
        return null;
      }, y.contextType = a.AppBridgeContext, y;
    }(r.default.PureComponent)
  );
  e.default = o;
})(Nf);
var n_ = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Uu, "__esModule", { value: !0 });
var r_ = n_(Nf);
Uu.default = r_.default;
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(p, h, d, f) {
    f === void 0 && (f = d), Object.defineProperty(p, f, { enumerable: !0, get: function() {
      return h[d];
    } });
  } : function(p, h, d, f) {
    f === void 0 && (f = d), p[f] = h[d];
  }), t = g && g.__exportStar || function(p, h) {
    for (var d in p)
      d !== "default" && !Object.prototype.hasOwnProperty.call(h, d) && n(h, p, d);
  }, r = g && g.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Toast = e.TitleBar = e.ResourcePicker = e.Provider = e.NavigationMenu = e.ModalContent = e.Modal = e.Loading = e.ContextualSaveBar = void 0;
  var i = Yo;
  Object.defineProperty(e, "ContextualSaveBar", { enumerable: !0, get: function() {
    return r(i).default;
  } });
  var a = bu;
  Object.defineProperty(e, "Loading", { enumerable: !0, get: function() {
    return r(a).default;
  } });
  var o = _f;
  Object.defineProperty(e, "Modal", { enumerable: !0, get: function() {
    return r(o).default;
  } }), Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return o.ModalContent;
  } });
  var s = Eu;
  Object.defineProperty(e, "NavigationMenu", { enumerable: !0, get: function() {
    return r(s).default;
  } });
  var y = Iu;
  Object.defineProperty(e, "Provider", { enumerable: !0, get: function() {
    return r(y).default;
  } });
  var u = Du;
  Object.defineProperty(e, "ResourcePicker", { enumerable: !0, get: function() {
    return r(u).default;
  } });
  var c = Bu;
  Object.defineProperty(e, "TitleBar", { enumerable: !0, get: function() {
    return r(c).default;
  } });
  var l = Uu;
  Object.defineProperty(e, "Toast", { enumerable: !0, get: function() {
    return r(l).default;
  } }), t(Ru, e), t(Cu, e);
})(Ul);
var Rf = {}, Mf = {}, Ki = {}, i_ = g && g.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (l) {
        o(l);
      }
    }
    function y(c) {
      try {
        u(r.throw(c));
      } catch (l) {
        o(l);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, a_ = g && g.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(c) {
      return y([u, c]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = u;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(u);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.useAppBridgeState = void 0;
var sr = oe, o_ = tt, u_ = function(e) {
  var n = o_.useAppBridge(), t = sr.useState(), r = t[0], i = t[1], a = sr.useRef(!1), o = sr.useCallback(function() {
    return i_(void 0, void 0, void 0, function() {
      var s, y;
      return a_(this, function(u) {
        switch (u.label) {
          case 0:
            return e ? [4, n.getState(e)] : [3, 2];
          case 1:
            return y = u.sent(), [3, 4];
          case 2:
            return [4, n.getState()];
          case 3:
            y = u.sent(), u.label = 4;
          case 4:
            return s = y, a.current ? [
              2
              /*return*/
            ] : (i(function(c) {
              return JSON.stringify(s) === JSON.stringify(c) ? c : s;
            }), [
              2
              /*return*/
            ]);
        }
      });
    });
  }, [n, e]);
  return sr.useEffect(function() {
    return o(), n.subscribe(function() {
      o();
    });
  }, [n, o]), sr.useEffect(function() {
    return function() {
      a.current = !0;
    };
  }, [n]), r;
};
Ki.useAppBridgeState = u_;
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = g && g.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Ki, e);
})(Mf);
var kf = {}, Ji = {}, Cc = g && g.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]]);
  return t;
};
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.useContextualSaveBar = void 0;
var Nt = oe, rn = pu, s_ = tt;
function c_() {
  var e = s_.useAppBridge(), n = Nt.useState(), t = n[0], r = n[1], i = Nt.useState(), a = i[0], o = i[1], s = Nt.useMemo(function() {
    return rn.create(e);
  }, [e]), y = Nt.useCallback(function(p) {
    s.dispatch(rn.Action.SHOW), p && s.set(p);
  }, [s]), u = Nt.useCallback(function() {
    s.dispatch(rn.Action.HIDE);
  }, [s]), c = Nt.useMemo(function() {
    return {
      setOptions: function(p) {
        var h = p.onAction, d = Cc(p, ["onAction"]);
        r(function() {
          return h;
        }), Object.keys(d).length && s.set({ saveAction: d });
      }
    };
  }, [s]), l = Nt.useMemo(function() {
    return {
      setOptions: function(p) {
        var h = p.onAction, d = Cc(p, ["onAction"]);
        o(function() {
          return h;
        }), Object.keys(d).length && s.set({ discardAction: d });
      }
    };
  }, [s]);
  return Nt.useEffect(function() {
    return s.subscribe(rn.Action.DISCARD, function() {
      s.dispatch(rn.Action.HIDE), a == null || a();
    });
  }, [s, a]), Nt.useEffect(function() {
    return s.subscribe(rn.Action.SAVE, function() {
      s.dispatch(rn.Action.HIDE), t == null || t();
    });
  }, [s, t]), Nt.useEffect(function() {
    s.unsubscribe();
  }, [s, t]), { show: y, hide: u, saveAction: c, discardAction: l };
}
Ji.useContextualSaveBar = c_;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useContextualSaveBar = void 0;
  var n = Ji;
  Object.defineProperty(e, "useContextualSaveBar", { enumerable: !0, get: function() {
    return n.useContextualSaveBar;
  } });
})(kf);
var Fu = {}, Xi = {}, l_ = g && g.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (l) {
        o(l);
      }
    }
    function y(c) {
      try {
        u(r.throw(c));
      } catch (l) {
        o(l);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, f_ = g && g.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(c) {
      return y([u, c]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = u;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(u);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Xi, "__esModule", { value: !0 });
Xi.useFeaturesAvailable = void 0;
var cr = oe, d_ = iu, p_ = tt;
function h_() {
  for (var e = this, n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  var r = p_.useAppBridge(), i = cr.useState(), a = i[0], o = i[1], s = cr.useRef([]), y = cr.useCallback(function() {
    var u = !1;
    return function() {
      return l_(e, void 0, void 0, function() {
        var c;
        return f_(this, function(l) {
          switch (l.label) {
            case 0:
              return [4, r.featuresAvailable.apply(r, s.current)];
            case 1:
              return c = l.sent(), u || o(function(p) {
                return JSON.stringify(p) === JSON.stringify(c) ? p : c;
              }), [
                2
                /*return*/
              ];
          }
        });
      });
    }(), function() {
      u = !0;
    };
  }, [r]);
  return cr.useEffect(function() {
    return s.current = n, y();
  }, [JSON.stringify(n)]), cr.useEffect(function() {
    var u, c = r.subscribe(d_.Action.UPDATE, function() {
      u = y();
    });
    return function() {
      c(), u == null || u();
    };
  }, [r, y]), a;
}
Xi.useFeaturesAvailable = h_;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useFeaturesAvailable = void 0;
  var n = Xi;
  Object.defineProperty(e, "useFeaturesAvailable", { enumerable: !0, get: function() {
    return n.useFeaturesAvailable;
  } });
})(Fu);
var Df = {}, Zi = {};
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.useFeatureRequest = void 0;
var ni = oe, jc = tu, y_ = tt, v_ = Fu;
function m_(e, n) {
  var t = y_.useAppBridge(), r = v_.useFeaturesAvailable(), i = ni.useState(), a = i[0], o = i[1], s = ni.useCallback(function(y) {
    var u = y == null ? void 0 : y[e];
    if (n && (u != null && u[n])) {
      var c = u == null ? void 0 : u[n];
      o(function(l) {
        return JSON.stringify(c) !== JSON.stringify(l) ? c : l;
      });
      return;
    }
    o(function(l) {
      return JSON.stringify(u) !== JSON.stringify(l) ? u : l;
    });
  }, [e, n]);
  return ni.useEffect(function() {
    jc.create(t).dispatch(jc.Action.REQUEST, { feature: e, action: n });
  }, [t, e, n]), ni.useEffect(function() {
    s(r);
  }, [r, s]), a;
}
Zi.useFeatureRequest = m_;
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = g && g.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Zi, e);
})(Df);
var Bf = {}, Wn = {}, Vu = {}, xi = {};
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.useNavigationHistory = void 0;
var b_ = oe, za = Dt, g_ = tt;
function __() {
  var e = g_.useAppBridge();
  return b_.useMemo(function() {
    var n = za.History.create(e);
    function t(i) {
      n.dispatch(za.History.Action.PUSH, i.pathname);
    }
    function r(i) {
      n.dispatch(za.History.Action.REPLACE, i.pathname);
    }
    return { push: t, replace: r };
  }, []);
}
xi.useNavigationHistory = __;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useNavigationHistory = void 0;
  var n = xi;
  Object.defineProperty(e, "useNavigationHistory", { enumerable: !0, get: function() {
    return n.useNavigationHistory;
  } });
})(Vu);
var Hn = g && g.__assign || function() {
  return Hn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Hn.apply(this, arguments);
}, O_ = g && g.__createBinding || (Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return n[t];
  } });
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
}), A_ = g && g.__setModuleDefault || (Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
}), P_ = g && g.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var n = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && O_(n, e, t);
  return A_(n, e), n;
};
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.isAdminSection = Wn.useNavigate = void 0;
var Qa = oe, En = P_(Hi), S_ = tt, E_ = Vu;
function T_() {
  var e = S_.useAppBridge(), n = E_.useNavigationHistory(), t = Qa.useMemo(function() {
    return En.create(e);
  }, [e]), r = Qa.useCallback(function(i, a) {
    var o = I_(i), s = o.startsWith(e.localOrigin), y = o.startsWith(e.hostOrigin), u = o.startsWith("/");
    if (s || y || u) {
      var c = Uf(o);
      if (y || (a == null ? void 0 : a.target) === "new" || (a == null ? void 0 : a.target) === "host") {
        t.dispatch(En.Action.ADMIN_PATH, {
          path: c.replace(/^\/admin/, ""),
          newContext: (a == null ? void 0 : a.target) === "new"
        });
        return;
      }
      if (((a == null ? void 0 : a.target) === "self" || !(a != null && a.target)) && (a != null && a.replace)) {
        n.replace({ pathname: c });
        return;
      }
      t.dispatch(En.Action.APP, c);
      return;
    }
    t.dispatch(En.Action.REMOTE, {
      url: o,
      newContext: (a == null ? void 0 : a.target) === "new"
    });
  }, [t, n]);
  return Qa.useCallback(function(i, a) {
    if (Lf(i)) {
      var o = Hn(Hn({}, i), { name: En.ResourceType[i.name] });
      t.dispatch(En.Action.ADMIN_SECTION, {
        section: o,
        newContext: (a == null ? void 0 : a.target) === "new"
      });
      return;
    }
    r(i, a);
  }, [r, t]);
}
Wn.useNavigate = T_;
function Lf(e) {
  return typeof e == "object" && typeof (e == null ? void 0 : e.name) == "string";
}
Wn.isAdminSection = Lf;
function Nc(e) {
  var n = e.pathname, t = e.search, r = e.hash;
  return "" + n + (t || "") + (r || "");
}
function I_(e) {
  return e instanceof URL ? e.toString() : typeof e == "string" ? e : Uf(e);
}
function Uf(e) {
  if (typeof e == "string")
    return e.startsWith("/") ? e : Nc(new URL(e));
  var n = e.search instanceof URLSearchParams ? e.search.toString() : e.search;
  return Nc(Hn(Hn({}, e), { search: n }));
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useNavigate = void 0;
  var n = Wn;
  Object.defineProperty(e, "useNavigate", { enumerable: !0, get: function() {
    return n.useNavigate;
  } });
})(Bf);
var Ff = {}, Vf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = e.DEFAULT_TOAST_DURATION = void 0;
  var n = oe, t = du, r = tt;
  e.DEFAULT_TOAST_DURATION = 5e3;
  function i() {
    var a = r.useAppBridge(), o, s = n.useCallback(function(y, u) {
      o = t.create(a, {
        message: y,
        isError: u == null ? void 0 : u.isError,
        duration: (u == null ? void 0 : u.duration) || e.DEFAULT_TOAST_DURATION
      }), o.dispatch(t.Action.SHOW), u != null && u.onDismiss && o.subscribe(t.Action.CLEAR, u == null ? void 0 : u.onDismiss);
    }, [a]);
    return n.useEffect(function() {
      return function() {
        o.unsubscribe();
      };
    }, []), { show: s };
  }
  e.useToast = i;
})(Vf);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = void 0;
  var n = Vf;
  Object.defineProperty(e, "useToast", { enumerable: !0, get: function() {
    return n.useToast;
  } });
})(Ff);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = e.useNavigationHistory = e.useNavigate = e.useFeatureRequest = e.useFeaturesAvailable = e.useContextualSaveBar = e.useAppBridgeState = void 0;
  var n = Mf;
  Object.defineProperty(e, "useAppBridgeState", { enumerable: !0, get: function() {
    return n.useAppBridgeState;
  } });
  var t = kf;
  Object.defineProperty(e, "useContextualSaveBar", { enumerable: !0, get: function() {
    return t.useContextualSaveBar;
  } });
  var r = Fu;
  Object.defineProperty(e, "useFeaturesAvailable", { enumerable: !0, get: function() {
    return r.useFeaturesAvailable;
  } });
  var i = Df;
  Object.defineProperty(e, "useFeatureRequest", { enumerable: !0, get: function() {
    return i.useFeatureRequest;
  } });
  var a = Bf;
  Object.defineProperty(e, "useNavigate", { enumerable: !0, get: function() {
    return a.useNavigate;
  } });
  var o = Vu;
  Object.defineProperty(e, "useNavigationHistory", { enumerable: !0, get: function() {
    return o.useNavigationHistory;
  } });
  var s = Ff;
  Object.defineProperty(e, "useToast", { enumerable: !0, get: function() {
    return s.useToast;
  } });
})(Rf);
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(a, o, s, y) {
    y === void 0 && (y = s), Object.defineProperty(a, y, { enumerable: !0, get: function() {
      return o[s];
    } });
  } : function(a, o, s, y) {
    y === void 0 && (y = s), a[y] = o[s];
  }), t = g && g.__exportStar || function(a, o) {
    for (var s in a)
      s !== "default" && !Object.prototype.hasOwnProperty.call(o, s) && n(o, a, s);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useAppBridge = e.Context = void 0;
  var r = jt;
  Object.defineProperty(e, "Context", { enumerable: !0, get: function() {
    return r.AppBridgeContext;
  } });
  var i = tt;
  Object.defineProperty(e, "useAppBridge", { enumerable: !0, get: function() {
    return i.useAppBridge;
  } }), t(Ul, e), t(Rf, e);
})(Bl);
const w_ = /* @__PURE__ */ Fc(Bl);
var Co = {}, $f = {}, zn = {}, mt = {};
Object.defineProperty(mt, "__esModule", { value: !0 });
mt.isShopifyPing = mt.isShopifyPOS = mt.isShopifyMobile = mt.isShopifyEmbedded = mt.isMobile = void 0;
var Rc = Dr;
function C_() {
  return Gf() || qf() || Wf();
}
mt.isMobile = C_;
function j_() {
  return Rc.isClient && window.top !== window.self || Rc.isUnframed;
}
mt.isShopifyEmbedded = j_;
function Gf() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Mobile") >= 0;
}
mt.isShopifyMobile = Gf;
function qf() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify POS") >= 0;
}
mt.isShopifyPOS = qf;
function Wf() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Ping") >= 0;
}
mt.isShopifyPing = Wf;
var N_ = g && g.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (l) {
        o(l);
      }
    }
    function y(c) {
      try {
        u(r.throw(c));
      } catch (l) {
        o(l);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, R_ = g && g.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(c) {
      return y([u, c]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = u;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(u);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.createMutationObserver = zn.setupModalAutoSizing = void 0;
var M_ = Wi, k_ = xn, D_ = mt, jo = "app-bridge-utils-modal-auto-size", ri = B_();
function B_() {
  if (typeof document > "u")
    return null;
  var e = document.createElement("style");
  return e.type = "text/css", e.innerHTML = "." + jo + " { overflow: hidden; height: auto; min-height: auto; }", e;
}
function L_(e, n) {
  if (!ri)
    return function() {
    };
  var t = document.getElementsByTagName("head")[0], r = document.body.classList;
  t.appendChild(ri), r.add(jo);
  var i = Hf(e, n);
  return function() {
    r.remove(jo), t.contains(ri) && t.removeChild(ri), i && i.disconnect();
  };
}
function U_(e) {
  return N_(this, void 0, void 0, function() {
    function n() {
      r && (r(), r = void 0);
    }
    function t(i) {
      var a = i.context, o = i.modal.id;
      return D_.isMobile() || a !== k_.Context.Modal ? (n(), n) : (r || (r = L_(e, o)), n);
    }
    var r;
    return R_(this, function(i) {
      switch (i.label) {
        case 0:
          return [4, e.getState().then(t)];
        case 1:
          return i.sent(), [2, n];
      }
    });
  });
}
zn.setupModalAutoSizing = U_;
function Hf(e, n) {
  if (typeof document > "u")
    return;
  var t = -1, r, i = {
    attributes: !0,
    attributeOldValue: !1,
    characterData: !0,
    characterDataOldValue: !1,
    childList: !0,
    subtree: !0
  }, a = new MutationObserver(o);
  a.observe(document, i), s();
  function o() {
    r && window.clearTimeout(r), r = window.setTimeout(s, 16);
  }
  function s() {
    var y = document.body.scrollHeight;
    y !== t && (t = y, e.dispatch(M_.updateModalSize({ id: n, height: String(y) })));
  }
  return a;
}
zn.createMutationObserver = Hf;
var zf = {}, Ur = {}, F_ = g && g.__createBinding || (Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return n[t];
  } });
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
}), V_ = g && g.__setModuleDefault || (Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
}), $_ = g && g.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var n = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && F_(n, e, t);
  return V_(n, e), n;
}, G_ = g && g.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (l) {
        o(l);
      }
    }
    function y(c) {
      try {
        u(r.throw(c));
      } catch (l) {
        o(l);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, q_ = g && g.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(c) {
      return y([u, c]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = u;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(u);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Ur, "__esModule", { value: !0 });
Ur.getSessionToken = void 0;
var Mc = $_(lu), kc = vn;
function W_(e) {
  return G_(this, void 0, void 0, function() {
    return q_(this, function(n) {
      return [2, new Promise(function(t, r) {
        var i = e.subscribe(Mc.Action.RESPOND, function(a) {
          var o = a.sessionToken;
          o ? t(o) : r(kc.fromAction("Failed to retrieve a session token", kc.Action.FAILED_AUTHENTICATION)), i();
        });
        e.dispatch(Mc.request());
      })];
    });
  });
}
Ur.getSessionToken = W_;
var ea = {}, Ni = g && g.__assign || function() {
  return Ni = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Ni.apply(this, arguments);
}, H_ = g && g.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (l) {
        o(l);
      }
    }
    function y(c) {
      try {
        u(r.throw(c));
      } catch (l) {
        o(l);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, z_ = g && g.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(c) {
      return y([u, c]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = u;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(u);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.authenticatedFetch = void 0;
var Q_ = Ur;
function Y_(e, n) {
  var t = this;
  return n === void 0 && (n = fetch), function(r, i) {
    return i === void 0 && (i = {}), H_(t, void 0, void 0, function() {
      var a, o, s;
      return z_(this, function(y) {
        switch (y.label) {
          case 0:
            return [4, Q_.getSessionToken(e)];
          case 1:
            return a = y.sent(), o = new Headers(i.headers), o.append("Authorization", "Bearer " + a), o.append("X-Requested-With", "XMLHttpRequest"), s = {}, o.forEach(function(u, c) {
              s[c] = u;
            }), [2, n(r, Ni(Ni({}, i), { headers: s }))];
        }
      });
    });
  };
}
ea.authenticatedFetch = Y_;
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = g && g.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Ur, e), t(ea, e);
})(zf);
var Qf = {}, Fr = {}, Yf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.generateUuid = void 0;
  var n = Zn;
  Object.defineProperty(e, "generateUuid", { enumerable: !0, get: function() {
    return n.generateUuid;
  } }), e.default = n.generateUuid;
})(Yf);
var K_ = g && g.__createBinding || (Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return n[t];
  } });
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
}), J_ = g && g.__setModuleDefault || (Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
}), X_ = g && g.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var n = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && K_(n, e, t);
  return J_(n, e), n;
}, Z_ = g && g.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (l) {
        o(l);
      }
    }
    function y(c) {
      try {
        u(r.throw(c));
      } catch (l) {
        o(l);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, x_ = g && g.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(c) {
      return y([u, c]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = u;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(u);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, eO = g && g.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.getAuthorizationCodePayload = void 0;
var Dc = X_(Jo), Bc = vn, tO = eO(Yf);
function nO(e) {
  return Z_(this, void 0, void 0, function() {
    return x_(this, function(n) {
      return [2, new Promise(function(t, r) {
        var i = tO.default(), a = e.subscribe(Dc.Action.RESPOND, function(o) {
          switch (o == null ? void 0 : o.status) {
            case "needsExchange":
              t(o);
              break;
            default:
              r(Bc.fromAction("Failed to retrieve an authorization code", Bc.Action.FAILED_AUTHENTICATION));
          }
          a();
        }, i);
        e.dispatch(Dc.request(i));
      })];
    });
  });
}
Fr.getAuthorizationCodePayload = nO;
var ta = {}, rO = g && g.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (l) {
        o(l);
      }
    }
    function y(c) {
      try {
        u(r.throw(c));
      } catch (l) {
        o(l);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, iO = g && g.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(c) {
      return y([u, c]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = u;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(u);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(ta, "__esModule", { value: !0 });
ta.userAuthorizedFetch = void 0;
var aO = Fr, oO = "auth/shopify/callback";
function uO(e) {
  var n = e.headers.get("X-Shopify-API-Request-Failure-Unauthorized");
  return n ? n.toLowerCase() === "true" : !1;
}
function sO(e) {
  var n = this, t = e.app, r = e.callbackUri, i = r === void 0 ? oO : r, a = e.isAuthorizationCodeRequired, o = a === void 0 ? uO : a, s = e.fetchOperation;
  return function(y, u) {
    return rO(n, void 0, void 0, function() {
      var c, l, p, h, d, f, v, m;
      return iO(this, function(b) {
        switch (b.label) {
          case 0:
            return [4, s(y, u)];
          case 1:
            return c = b.sent(), o(c) ? [4, aO.getAuthorizationCodePayload(t)] : [2, c];
          case 2:
            return l = b.sent(), p = l.code, h = l.hmac, d = l.shop, f = l.timestamp, v = encodeURI("https://" + window.location.hostname + "/" + i + "?code=" + p + "&hmac=" + h + "&shop=" + d + "&timestamp=" + f), [4, s(v, {})];
          case 3:
            if (m = b.sent(), !m.ok)
              throw new Error("Failed to authorize request.");
            return [2, s(y, u)];
        }
      });
    });
  };
}
ta.userAuthorizedFetch = sO;
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = g && g.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Fr, e), t(ta, e);
})(Qf);
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = g && g.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(zn, e), t(mt, e), t(zf, e), t(Qf, e);
})($f);
(function(e) {
  var n = g && g.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = g && g.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t($f, e);
})(Co);
var Ft;
(function(e) {
  e[e.Standalone = 0] = "Standalone", e[e.Embedded = 1] = "Embedded";
})(Ft || (Ft = {}));
const cO = `
  query GetSessionForShopifyApp {
    currentSession {
      id
      shop {
        id
      }
    }
    shopifyConnection {
      requiresReauthentication
    }
  }
`, lO = dd(({ children: e, forceRedirect: n, isEmbedded: t, gadgetAppUrl: r, originalQueryParams: i, api: a, isRootFrameRequest: o, type: s, isInstallRequest: y }) => {
  var b, O;
  const u = Lc(Ll), [c, l] = Uc({
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !0,
    appBridge: u,
    isRootFrameRequest: !1
  });
  ii(() => {
    if (!u) {
      console.debug("[gadget-rsab] no app bridge, skipping client auth setup");
      return;
    }
    a.connection.setAuthenticationMode({
      custom: {
        async processFetch(_, T) {
          const P = new Headers(T.headers);
          P.append("Authorization", `ShopifySessionToken ${await Co.getSessionToken(u)}`), T.headers ?? (T.headers = {}), P.forEach(function(E, S) {
            T.headers[S] = E;
          });
        },
        async processTransactionConnectionParams(_) {
          _.auth.shopifySessionToken = await Co.getSessionToken(u);
        }
      }
    }), console.debug("[gadget-rsab] set up client auth for session tokens");
  }, [a.connection, u]);
  let p = !1, h = !1;
  const [{ data: d, fetching: f, error: v }] = Dl({
    query: cO,
    // for now don't fetch a session's shop in standalone mode since it leverages session tokens which aren't available if standalone
    pause: s == Ft.Standalone
  });
  d ? (p = (b = d.shopifyConnection) == null ? void 0 : b.requiresReauthentication, d.currentSession && (d.currentSession.shop ? h = !((O = d.shopifyConnection) != null && O.requiresReauthentication) : p = !0)) : s == Ft.Standalone && y && (p = !0), ii(() => {
    if (!p || o)
      return;
    const _ = new URL("/api/connections/auth/shopify", r);
    _.search = (i == null ? void 0 : i.toString()) ?? "";
    const T = _.toString();
    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process", {
      appType: s,
      isInstallRequest: y,
      isEmbedded: t,
      redirectURL: T,
      gadgetAppUrl: r
    }), t && u ? Dt.Redirect.create(u).dispatch(Dt.Redirect.Action.REMOTE, T) : window.location.assign(T);
  }, [u, r, t, o, i, p]);
  const m = (n || p || f) && !o;
  return ii(() => {
    const _ = {
      isAuthenticated: h,
      isEmbedded: t,
      canAuth: !!u,
      loading: m,
      appBridge: u,
      error: v,
      isRootFrameRequest: o
    };
    return console.debug("[gadget-rsab] context changed", _), l(_);
  }, [m, t, u, h, v, o]), oe.createElement(dO.Provider, { value: c }, e);
}), fO = ({ type: e, children: n, shopifyApiKey: t, api: r, router: i }) => {
  const [a, o] = Uc(null), s = !!a, { query: y } = a ?? {}, u = (y == null ? void 0 : y.get("host")) ?? void 0, c = e ?? Ft.Embedded, l = li(() => y, [s]), p = (y == null ? void 0 : y.has("hmac")) && (y == null ? void 0 : y.has("shop")), h = typeof window < "u" ? window.top !== window.self : !1, d = typeof window < "u" && !!window.MobileWebView, f = h || d, v = f == (c == Ft.Embedded) && (c == Ft.Standalone ? !p : !0), m = !(y != null && y.has("hmac")) && !(y != null && y.has("shop")) && c == Ft.Embedded, b = s && typeof u < "u" && !v, O = new URL(r.connection.options.endpoint).origin;
  ii(() => {
    o({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search)
    });
  }, []);
  let _ = oe.createElement(
    Cv,
    { api: r },
    oe.createElement(lO, { forceRedirect: b, isEmbedded: f, gadgetAppUrl: O, api: r, originalQueryParams: l, isRootFrameRequest: m, type: c, isInstallRequest: !!p }, n)
  );
  const T = u && c != Ft.Standalone && (!p || v);
  return console.debug("[gadget-rsab] provider rendering", {
    host: u,
    coalescedType: c,
    isInstallRequest: p,
    isReady: s,
    isEmbedded: f,
    isRootFrameRequest: m,
    inDestinationContext: v,
    shouldMountAppBridge: T
  }), T && (_ = oe.createElement(w_.Provider, { config: {
    apiKey: t,
    host: u,
    forceRedirect: b
  }, router: i }, _)), _;
}, dO = pd({
  loading: !0,
  isEmbedded: !1,
  isAuthenticated: !1,
  canAuth: !1,
  appBridge: null,
  isRootFrameRequest: !1
}), Kf = new yv(), pO = () => {
  const [{ data: e }] = Gv(Kf.shopifyProduct);
  return /* @__PURE__ */ fi.jsx(fi.Fragment, { children: JSON.stringify(e) });
}, vO = () => /* @__PURE__ */ fi.jsx(fO, { api: Kf, shopifyApiKey: "deadbeef", children: /* @__PURE__ */ fi.jsx(pO, {}) });
export {
  vO as A,
  pO as R,
  g as c
};
