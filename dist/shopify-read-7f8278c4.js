import * as Tt from "react";
import ie, { useMemo as gi, useContext as zf, useRef as lh, memo as fh, useState as Kf, useEffect as ai, createContext as dh } from "react";
var b = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ph(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Ro = { exports: {} }, tn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xc;
function yh() {
  if (Xc)
    return tn;
  Xc = 1;
  var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(c, h, u) {
    var d, s = {}, p = null, f = null;
    u !== void 0 && (p = "" + u), h.key !== void 0 && (p = "" + h.key), h.ref !== void 0 && (f = h.ref);
    for (d in h)
      n.call(h, d) && !a.hasOwnProperty(d) && (s[d] = h[d]);
    if (c && c.defaultProps)
      for (d in h = c.defaultProps, h)
        s[d] === void 0 && (s[d] = h[d]);
    return { $$typeof: t, type: c, key: p, ref: f, props: s, _owner: i.current };
  }
  return tn.Fragment = r, tn.jsx = o, tn.jsxs = o, tn;
}
var rn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc;
function hh() {
  return Zc || (Zc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), c = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), s = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), y = Symbol.iterator, l = "@@iterator";
    function v(A) {
      if (A === null || typeof A != "object")
        return null;
      var j = y && A[y] || A[l];
      return typeof j == "function" ? j : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(A) {
      {
        for (var j = arguments.length, R = new Array(j > 1 ? j - 1 : 0), G = 1; G < j; G++)
          R[G - 1] = arguments[G];
        O("error", A, R);
      }
    }
    function O(A, j, R) {
      {
        var G = m.ReactDebugCurrentFrame, se = G.getStackAddendum();
        se !== "" && (j += "%s", R = R.concat([se]));
        var ve = R.map(function(re) {
          return String(re);
        });
        ve.unshift("Warning: " + j), Function.prototype.apply.call(console[A], console, ve);
      }
    }
    var _ = !1, T = !1, P = !1, E = !1, S = !1, w;
    w = Symbol.for("react.module.reference");
    function I(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === n || A === a || S || A === i || A === u || A === d || E || A === f || _ || T || P || typeof A == "object" && A !== null && (A.$$typeof === p || A.$$typeof === s || A.$$typeof === o || A.$$typeof === c || A.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === w || A.getModuleId !== void 0));
    }
    function C(A, j, R) {
      var G = A.displayName;
      if (G)
        return G;
      var se = j.displayName || j.name || "";
      return se !== "" ? R + "(" + se + ")" : R;
    }
    function k(A) {
      return A.displayName || "Context";
    }
    function B(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case c:
            var j = A;
            return k(j) + ".Consumer";
          case o:
            var R = A;
            return k(R._context) + ".Provider";
          case h:
            return C(A, A.render, "ForwardRef");
          case s:
            var G = A.displayName || null;
            return G !== null ? G : B(A.type) || "Memo";
          case p: {
            var se = A, ve = se._payload, re = se._init;
            try {
              return B(re(ve));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, F = 0, V, L, J, pe, W, be, H;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function ye() {
      {
        if (F === 0) {
          V = console.log, L = console.info, J = console.warn, pe = console.error, W = console.group, be = console.groupCollapsed, H = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: ne,
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
        F++;
      }
    }
    function ue() {
      {
        if (F--, F === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, A, {
              value: V
            }),
            info: N({}, A, {
              value: L
            }),
            warn: N({}, A, {
              value: J
            }),
            error: N({}, A, {
              value: pe
            }),
            group: N({}, A, {
              value: W
            }),
            groupCollapsed: N({}, A, {
              value: be
            }),
            groupEnd: N({}, A, {
              value: H
            })
          });
        }
        F < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = m.ReactCurrentDispatcher, Ce;
    function _e(A, j, R) {
      {
        if (Ce === void 0)
          try {
            throw Error();
          } catch (se) {
            var G = se.stack.trim().match(/\n( *(at )?)/);
            Ce = G && G[1] || "";
          }
        return `
` + Ce + A;
      }
    }
    var Le = !1, Pe;
    {
      var ht = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new ht();
    }
    function Mt(A, j) {
      if (!A || Le)
        return "";
      {
        var R = Pe.get(A);
        if (R !== void 0)
          return R;
      }
      var G;
      Le = !0;
      var se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ve;
      ve = K.current, K.current = null, ye();
      try {
        if (j) {
          var re = function() {
            throw Error();
          };
          if (Object.defineProperty(re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(re, []);
            } catch (Rt) {
              G = Rt;
            }
            Reflect.construct(A, [], re);
          } else {
            try {
              re.call();
            } catch (Rt) {
              G = Rt;
            }
            A.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Rt) {
            G = Rt;
          }
          A();
        }
      } catch (Rt) {
        if (Rt && G && typeof Rt.stack == "string") {
          for (var x = Rt.stack.split(`
`), He = G.stack.split(`
`), Ee = x.length - 1, we = He.length - 1; Ee >= 1 && we >= 0 && x[Ee] !== He[we]; )
            we--;
          for (; Ee >= 1 && we >= 0; Ee--, we--)
            if (x[Ee] !== He[we]) {
              if (Ee !== 1 || we !== 1)
                do
                  if (Ee--, we--, we < 0 || x[Ee] !== He[we]) {
                    var ct = `
` + x[Ee].replace(" at new ", " at ");
                    return A.displayName && ct.includes("<anonymous>") && (ct = ct.replace("<anonymous>", A.displayName)), typeof A == "function" && Pe.set(A, ct), ct;
                  }
                while (Ee >= 1 && we >= 0);
              break;
            }
        }
      } finally {
        Le = !1, K.current = ve, ue(), Error.prepareStackTrace = se;
      }
      var vr = A ? A.displayName || A.name : "", Jc = vr ? _e(vr) : "";
      return typeof A == "function" && Pe.set(A, Jc), Jc;
    }
    function Vn(A, j, R) {
      return Mt(A, !1);
    }
    function en(A) {
      var j = A.prototype;
      return !!(j && j.isReactComponent);
    }
    function $t(A, j, R) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return Mt(A, en(A));
      if (typeof A == "string")
        return _e(A);
      switch (A) {
        case u:
          return _e("Suspense");
        case d:
          return _e("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case h:
            return Vn(A.render);
          case s:
            return $t(A.type, j, R);
          case p: {
            var G = A, se = G._payload, ve = G._init;
            try {
              return $t(ve(se), j, R);
            } catch {
            }
          }
        }
      return "";
    }
    var Qt = Object.prototype.hasOwnProperty, pr = {}, Gn = m.ReactDebugCurrentFrame;
    function Yt(A) {
      if (A) {
        var j = A._owner, R = $t(A.type, A._source, j ? j.type : null);
        Gn.setExtraStackFrame(R);
      } else
        Gn.setExtraStackFrame(null);
    }
    function D(A, j, R, G, se) {
      {
        var ve = Function.call.bind(Qt);
        for (var re in A)
          if (ve(A, re)) {
            var x = void 0;
            try {
              if (typeof A[re] != "function") {
                var He = Error((G || "React class") + ": " + R + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              x = A[re](j, re, G, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              x = Ee;
            }
            x && !(x instanceof Error) && (Yt(se), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", R, re, typeof x), Yt(null)), x instanceof Error && !(x.message in pr) && (pr[x.message] = !0, Yt(se), g("Failed %s type: %s", R, x.message), Yt(null));
          }
      }
    }
    var M = Array.isArray;
    function $(A) {
      return M(A);
    }
    function z(A) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, R = j && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return R;
      }
    }
    function U(A) {
      try {
        return te(A), !1;
      } catch {
        return !0;
      }
    }
    function te(A) {
      return "" + A;
    }
    function Oe(A) {
      if (U(A))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", z(A)), te(A);
    }
    var he = m.ReactCurrentOwner, de = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, yr, Ft;
    Ft = {};
    function Yy(A) {
      if (Qt.call(A, "ref")) {
        var j = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function Jy(A) {
      if (Qt.call(A, "key")) {
        var j = Object.getOwnPropertyDescriptor(A, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function Xy(A, j) {
      if (typeof A.ref == "string" && he.current && j && he.current.stateNode !== j) {
        var R = B(he.current.type);
        Ft[R] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(he.current.type), A.ref), Ft[R] = !0);
      }
    }
    function Zy(A, j) {
      {
        var R = function() {
          Se || (Se = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        R.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function xy(A, j) {
      {
        var R = function() {
          yr || (yr = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        R.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var eh = function(A, j, R, G, se, ve, re) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: A,
        key: j,
        ref: R,
        props: re,
        // Record the component responsible for creating this element.
        _owner: ve
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
        value: G
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function th(A, j, R, G, se) {
      {
        var ve, re = {}, x = null, He = null;
        R !== void 0 && (Oe(R), x = "" + R), Jy(j) && (Oe(j.key), x = "" + j.key), Yy(j) && (He = j.ref, Xy(j, se));
        for (ve in j)
          Qt.call(j, ve) && !de.hasOwnProperty(ve) && (re[ve] = j[ve]);
        if (A && A.defaultProps) {
          var Ee = A.defaultProps;
          for (ve in Ee)
            re[ve] === void 0 && (re[ve] = Ee[ve]);
        }
        if (x || He) {
          var we = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          x && Zy(re, we), He && xy(re, we);
        }
        return eh(A, x, He, se, G, he.current, re);
      }
    }
    var _a = m.ReactCurrentOwner, Wc = m.ReactDebugCurrentFrame;
    function hr(A) {
      if (A) {
        var j = A._owner, R = $t(A.type, A._source, j ? j.type : null);
        Wc.setExtraStackFrame(R);
      } else
        Wc.setExtraStackFrame(null);
    }
    var Oa;
    Oa = !1;
    function Aa(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function Hc() {
      {
        if (_a.current) {
          var A = B(_a.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function rh(A) {
      {
        if (A !== void 0) {
          var j = A.fileName.replace(/^.*[\\\/]/, ""), R = A.lineNumber;
          return `

Check your code at ` + j + ":" + R + ".";
        }
        return "";
      }
    }
    var zc = {};
    function nh(A) {
      {
        var j = Hc();
        if (!j) {
          var R = typeof A == "string" ? A : A.displayName || A.name;
          R && (j = `

Check the top-level render call using <` + R + ">.");
        }
        return j;
      }
    }
    function Kc(A, j) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var R = nh(j);
        if (zc[R])
          return;
        zc[R] = !0;
        var G = "";
        A && A._owner && A._owner !== _a.current && (G = " It was passed a child from " + B(A._owner.type) + "."), hr(A), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, G), hr(null);
      }
    }
    function Qc(A, j) {
      {
        if (typeof A != "object")
          return;
        if ($(A))
          for (var R = 0; R < A.length; R++) {
            var G = A[R];
            Aa(G) && Kc(G, j);
          }
        else if (Aa(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var se = v(A);
          if (typeof se == "function" && se !== A.entries)
            for (var ve = se.call(A), re; !(re = ve.next()).done; )
              Aa(re.value) && Kc(re.value, j);
        }
      }
    }
    function ih(A) {
      {
        var j = A.type;
        if (j == null || typeof j == "string")
          return;
        var R;
        if (typeof j == "function")
          R = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === s))
          R = j.propTypes;
        else
          return;
        if (R) {
          var G = B(j);
          D(R, A.props, "prop", G, A);
        } else if (j.PropTypes !== void 0 && !Oa) {
          Oa = !0;
          var se = B(j);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", se || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ah(A) {
      {
        for (var j = Object.keys(A.props), R = 0; R < j.length; R++) {
          var G = j[R];
          if (G !== "children" && G !== "key") {
            hr(A), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), hr(null);
            break;
          }
        }
        A.ref !== null && (hr(A), g("Invalid attribute `ref` supplied to `React.Fragment`."), hr(null));
      }
    }
    function Yc(A, j, R, G, se, ve) {
      {
        var re = I(A);
        if (!re) {
          var x = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = rh(se);
          He ? x += He : x += Hc();
          var Ee;
          A === null ? Ee = "null" : $(A) ? Ee = "array" : A !== void 0 && A.$$typeof === t ? (Ee = "<" + (B(A.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof A, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, x);
        }
        var we = th(A, j, R, se, ve);
        if (we == null)
          return we;
        if (re) {
          var ct = j.children;
          if (ct !== void 0)
            if (G)
              if ($(ct)) {
                for (var vr = 0; vr < ct.length; vr++)
                  Qc(ct[vr], A);
                Object.freeze && Object.freeze(ct);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qc(ct, A);
        }
        return A === n ? ah(we) : ih(we), we;
      }
    }
    function oh(A, j, R) {
      return Yc(A, j, R, !0);
    }
    function uh(A, j, R) {
      return Yc(A, j, R, !1);
    }
    var ch = uh, sh = oh;
    rn.Fragment = n, rn.jsx = ch, rn.jsxs = sh;
  }()), rn;
}
process.env.NODE_ENV === "production" ? Ro.exports = yh() : Ro.exports = hh();
var bi = Ro.exports;
const vh = (e) => e && "connection" in e && e.connection && "endpoint" in e.connection;
var dn;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(dn || (dn = {}));
const mh = {
  DateTime(e) {
    return new Date(e);
  }
};
class gh {
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
      a != null && (r[n] = mh[i](a));
    }
    return r;
  }
}
var wr = {
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
let No = class extends Error {
  constructor(t, r, n, i, a, o, c) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), r && (this.nodes = Array.isArray(r) ? r : [r]), n && (this.source = n), i && (this.positions = i), o && (this.originalError = o);
    var h = c;
    if (!h && o) {
      var u = o.extensions;
      u && typeof u == "object" && (h = u);
    }
    this.extensions = h || {};
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
var me, Q;
function Ie(e) {
  return new No(`Syntax Error: Unexpected token at ${Q} in ${e}`);
}
function nt(e) {
  if (e.lastIndex = Q, e.test(me))
    return me.slice(Q, Q = e.lastIndex);
}
var qn = / +(?=[^\s])/y;
function bh(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, a = t.length - 1, o = 0; o < t.length; o++)
    qn.lastIndex = 0, qn.test(t[o]) && (o && (!n || qn.lastIndex < n) && (n = qn.lastIndex), i = i || o, a = o);
  for (var c = i; c <= a; c++)
    c !== i && (r += `
`), r += t[c].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function X() {
  for (var e = 0 | me.charCodeAt(Q++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | me.charCodeAt(Q++))
    if (e === 35)
      for (; (e = me.charCodeAt(Q++)) !== 10 && e !== 13; )
        ;
  Q--;
}
var Yf = /[_A-Za-z]\w*/y;
function wt() {
  var e;
  if (e = nt(Yf))
    return {
      kind: "Name",
      value: e
    };
}
var _h = /(?:null|true|false)/y, Jf = /\$[_A-Za-z]\w*/y, Oh = /-?\d+/y, Ah = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Ph = /\\/g, Sh = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Eh = /"(?:"|[^\r\n]*?[^\\]")/y;
function _i(e) {
  var t, r;
  if (r = nt(_h))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = nt(Jf)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = nt(Oh)) {
    var n = r;
    (r = nt(Ah)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = nt(Yf))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = nt(Sh))
    t = {
      kind: "StringValue",
      value: bh(r.slice(3, -3)),
      block: !0
    };
  else if (r = nt(Eh))
    t = {
      kind: "StringValue",
      value: Ph.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (me.charCodeAt(Q) === 91) {
      Q++, X();
      for (var c = []; o = _i(a); )
        c.push(o);
      if (me.charCodeAt(Q++) !== 93)
        throw Ie("ListValue");
      return X(), {
        kind: "ListValue",
        values: c
      };
    }
  }(e) || function(a) {
    if (me.charCodeAt(Q) === 123) {
      Q++, X();
      for (var o = [], c; c = wt(); ) {
        if (X(), me.charCodeAt(Q++) !== 58)
          throw Ie("ObjectField");
        X();
        var h = _i(a);
        if (!h)
          throw Ie("ObjectField");
        o.push({
          kind: "ObjectField",
          name: c,
          value: h
        });
      }
      if (me.charCodeAt(Q++) !== 125)
        throw Ie("ObjectValue");
      return X(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return X(), t;
}
function Xf(e) {
  var t = [];
  if (X(), me.charCodeAt(Q) === 40) {
    Q++, X();
    for (var r; r = wt(); ) {
      if (X(), me.charCodeAt(Q++) !== 58)
        throw Ie("Argument");
      X();
      var n = _i(e);
      if (!n)
        throw Ie("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || me.charCodeAt(Q++) !== 41)
      throw Ie("Argument");
    X();
  }
  return t;
}
function Mr(e) {
  var t = [];
  for (X(); me.charCodeAt(Q) === 64; ) {
    Q++;
    var r = wt();
    if (!r)
      throw Ie("Directive");
    X(), t.push({
      kind: "Directive",
      name: r,
      arguments: Xf(e)
    });
  }
  return t;
}
function Th() {
  var e = wt();
  if (e) {
    X();
    var t;
    if (me.charCodeAt(Q) === 58) {
      if (Q++, X(), t = e, !(e = wt()))
        throw Ie("Field");
      X();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: Xf(!1),
      directives: Mr(!1),
      selectionSet: Zi()
    };
  }
}
function Zf() {
  var e;
  if (X(), me.charCodeAt(Q) === 91) {
    Q++, X();
    var t = Zf();
    if (!t || me.charCodeAt(Q++) !== 93)
      throw Ie("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = wt())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw Ie("NamedType");
  return X(), me.charCodeAt(Q) === 33 ? (Q++, X(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var wh = /on/y;
function xf() {
  if (nt(wh)) {
    X();
    var e = wt();
    if (!e)
      throw Ie("NamedType");
    return X(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Ih = /\.\.\./y;
function jh() {
  if (nt(Ih)) {
    X();
    var e = Q, t;
    if ((t = wt()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Mr(!1)
      };
    Q = e;
    var r = xf(), n = Mr(!1), i = Zi();
    if (!i)
      throw Ie("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: i
    };
  }
}
function Zi() {
  var e;
  if (X(), me.charCodeAt(Q) === 123) {
    Q++, X();
    for (var t = []; e = jh() || Th(); )
      t.push(e);
    if (!t.length || me.charCodeAt(Q++) !== 125)
      throw Ie("SelectionSet");
    return X(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Ch = /fragment/y;
function Mh() {
  if (nt(Ch)) {
    X();
    var e = wt();
    if (!e)
      throw Ie("FragmentDefinition");
    X();
    var t = xf();
    if (!t)
      throw Ie("FragmentDefinition");
    var r = Mr(!1), n = Zi();
    if (!n)
      throw Ie("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var Rh = /(?:query|mutation|subscription)/y;
function Nh() {
  var e, t, r = [], n = [];
  (e = nt(Rh)) && (X(), t = wt(), r = function() {
    var o, c = [];
    if (X(), me.charCodeAt(Q) === 40) {
      for (Q++, X(); o = nt(Jf); ) {
        if (X(), me.charCodeAt(Q++) !== 58)
          throw Ie("VariableDefinition");
        var h = Zf(), u = void 0;
        if (me.charCodeAt(Q) === 61 && (Q++, X(), !(u = _i(!0))))
          throw Ie("VariableDefinition");
        X(), c.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: o.slice(1)
            }
          },
          type: h,
          defaultValue: u,
          directives: Mr(!0)
        });
      }
      if (me.charCodeAt(Q++) !== 41)
        throw Ie("VariableDefinition");
      X();
    }
    return c;
  }(), n = Mr(!1));
  var i = Zi();
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
function Dh(e, t) {
  return me = typeof e.body == "string" ? e.body : e, Q = 0, function() {
    var n;
    X();
    for (var i = []; n = Mh() || Nh(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function kh(e) {
  return JSON.stringify(e);
}
function Bh(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var st = (e) => !(!e || !e.length), Fe = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !st(e.variableDefinitions) && !st(e.directives))
      return Fe.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), st(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(Fe.VariableDefinition).join(", ") + ")"), st(e.directives) && (t += " " + e.directives.map(Fe.Directive).join(" ")), t + " " + Fe.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = Fe.Variable(e.variable) + ": " + ft(e.type);
    return e.defaultValue && (t += " = " + ft(e.defaultValue)), st(e.directives) && (t += " " + e.directives.map(Fe.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (st(e.arguments)) {
      var r = e.arguments.map(Fe.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return st(e.directives) && (t += " " + e.directives.map(Fe.Directive).join(" ")), e.selectionSet ? t + " " + Fe.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Bh(e.value) : kh(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(ft).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(Fe.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + ft(e.value),
  Document: (e) => st(e.definitions) ? e.definitions.map(ft).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(ft).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + ft(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return st(e.directives) && (t += " " + e.directives.map(Fe.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), st(e.directives) && (t += " " + e.directives.map(Fe.Directive).join(" ")), t + " " + ft(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, st(e.directives) && (t += " " + e.directives.map(Fe.Directive).join(" ")), t + " " + ft(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return st(e.arguments) && (t += "(" + e.arguments.map(Fe.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + ft(e.type) + "]",
  NonNullType: (e) => ft(e.type) + "!"
};
function ft(e) {
  return Fe[e.kind] ? Fe[e.kind](e) : "";
}
var wu = () => {
}, ut = wu;
function _t(e) {
  return {
    tag: 0,
    0: e
  };
}
function Cn(e) {
  return {
    tag: 1,
    0: e
  };
}
var Lh = (e) => e;
function $e(e) {
  return (t) => (r) => {
    var n = ut;
    t((i) => {
      i === 0 ? r(0) : i.tag === 0 ? (n = i[0], r(i)) : e(i[0]) ? r(i) : n(0);
    });
  };
}
function pn(e) {
  return (t) => (r) => t((n) => {
    n === 0 || n.tag === 0 ? r(n) : r(Cn(e(n[0])));
  });
}
function _n(e) {
  return (t) => (r) => {
    var n = [], i = ut, a = !1, o = !1;
    t((c) => {
      o || (c === 0 ? (o = !0, n.length || r(0)) : c.tag === 0 ? i = c[0] : (a = !1, function(u) {
        var d = ut;
        u((s) => {
          if (s === 0) {
            if (n.length) {
              var p = n.indexOf(d);
              p > -1 && (n = n.slice()).splice(p, 1), n.length || (o ? r(0) : a || (a = !0, i(0)));
            }
          } else
            s.tag === 0 ? (n.push(d = s[0]), d(0)) : n.length && (r(s), d(0));
        });
      }(e(c[0])), a || (a = !0, i(0))));
    }), r(_t((c) => {
      if (c === 1) {
        o || (o = !0, i(1));
        for (var h = 0, u = n, d = n.length; h < d; h++)
          u[h](1);
        n.length = 0;
      } else {
        !o && !a ? (a = !0, i(0)) : a = !1;
        for (var s = 0, p = n, f = n.length; s < f; s++)
          p[s](0);
      }
    }));
  };
}
function $h(e) {
  return _n(Lh)(e);
}
function Rr(e) {
  return $h(Vh(e));
}
function Iu(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          r(_t((o) => {
            o === 1 ? (n = !0, a(1), e()) : a(o);
          }));
        } else
          r(i);
    });
  };
}
function Nr(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0);
        else if (i.tag === 0) {
          var a = i[0];
          r(_t((o) => {
            o === 1 && (n = !0), a(o);
          }));
        } else
          e(i[0]), r(i);
    });
  };
}
function xc(e) {
  return (t) => (r) => t((n) => {
    n === 0 ? r(0) : n.tag === 0 ? (r(n), e()) : r(n);
  });
}
function On(e) {
  var t = [], r = ut, n = !1;
  return (i) => {
    t.push(i), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var o = 0, c = t, h = t.length; o < h; o++)
          c[o](0);
        t.length = 0;
      } else if (a.tag === 0)
        r = a[0];
      else {
        n = !1;
        for (var u = 0, d = t, s = t.length; u < s; u++)
          d[u](a);
      }
    }), i(_t((a) => {
      if (a === 1) {
        var o = t.indexOf(i);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || r(1);
      } else
        n || (n = !0, r(0));
    }));
  };
}
function es(e) {
  return (t) => (r) => {
    var n = ut, i = ut, a = !1, o = !1, c = !1, h = !1;
    t((u) => {
      h || (u === 0 ? (h = !0, c || r(0)) : u.tag === 0 ? n = u[0] : (c && (i(1), i = ut), a ? a = !1 : (a = !0, n(0)), function(s) {
        c = !0, s((p) => {
          c && (p === 0 ? (c = !1, h ? r(0) : a || (a = !0, n(0))) : p.tag === 0 ? (o = !1, (i = p[0])(0)) : (r(p), o ? o = !1 : i(0)));
        });
      }(e(u[0]))));
    }), r(_t((u) => {
      u === 1 ? (h || (h = !0, n(1)), c && (c = !1, i(1))) : (!h && !a && (a = !0, n(0)), c && !o && (o = !0, i(0)));
    }));
  };
}
function ed(e) {
  return (t) => (r) => {
    var n = ut, i = !1, a = 0;
    t((o) => {
      i || (o === 0 ? (i = !0, r(0)) : o.tag === 0 ? e <= 0 ? (i = !0, r(0), o[0](1)) : n = o[0] : a++ < e ? (r(o), !i && a >= e && (i = !0, r(0), n(1))) : r(o));
    }), r(_t((o) => {
      o === 1 && !i ? (i = !0, n(1)) : o === 0 && !i && a < e && n(0);
    }));
  };
}
function ju(e) {
  return (t) => (r) => {
    var n = ut, i = ut, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, i(1), r(0)) : o.tag === 0 ? (n = o[0], e((c) => {
        c === 0 || (c.tag === 0 ? (i = c[0])(0) : (a = !0, i(1), n(1), r(0)));
      })) : r(o));
    }), r(_t((o) => {
      o === 1 && !a ? (a = !0, n(1), i(1)) : a || n(0);
    }));
  };
}
function td(e, t) {
  return (r) => (n) => {
    var i = ut, a = !1;
    r((o) => {
      a || (o === 0 ? (a = !0, n(0)) : o.tag === 0 ? (i = o[0], n(o)) : e(o[0]) ? n(o) : (a = !0, t && n(o), n(0), i(1)));
    });
  };
}
function Fh(e) {
  return (t) => e()(t);
}
function rd(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), n = !1, i = !1, a = !1, o;
    t(_t(async (c) => {
      if (c === 1)
        n = !0, r.return && r.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !n; )
          if ((o = await r.next()).done)
            n = !0, r.return && await r.return(), t(0);
          else
            try {
              a = !1, t(Cn(o.value));
            } catch (h) {
              if (r.throw)
                (n = !!(await r.throw(h)).done) && t(0);
              else
                throw h;
            }
        i = !1;
      }
    }));
  };
}
function Uh(e) {
  return e[Symbol.asyncIterator] ? rd(e) : (t) => {
    var r = e[Symbol.iterator](), n = !1, i = !1, a = !1, o;
    t(_t((c) => {
      if (c === 1)
        n = !0, r.return && r.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !n; )
          if ((o = r.next()).done)
            n = !0, r.return && r.return(), t(0);
          else
            try {
              a = !1, t(Cn(o.value));
            } catch (h) {
              if (r.throw)
                (n = !!r.throw(h).done) && t(0);
              else
                throw h;
            }
        i = !1;
      }
    }));
  };
}
var Vh = Uh;
function yn(e) {
  return (t) => {
    var r = !1;
    t(_t((n) => {
      n === 1 ? r = !0 : r || (r = !0, t(Cn(e)), t(0));
    }));
  };
}
function Cu(e) {
  return (t) => {
    var r = !1, n = e({
      next(i) {
        r || t(Cn(i));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(_t((i) => {
      i === 1 && !r && (r = !0, n());
    }));
  };
}
function ts() {
  var e, t;
  return {
    source: On(Cu((r) => (e = r.next, t = r.complete, wu))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function rs(e) {
  return Cu((t) => (e.then((r) => {
    Promise.resolve(r).then(() => {
      t.next(r), t.complete();
    });
  }), wu));
}
function ar(e) {
  return (t) => {
    var r = ut, n = !1;
    return t((i) => {
      i === 0 ? n = !0 : i.tag === 0 ? (r = i[0])(0) : n || (e(i[0]), r(0));
    }), {
      unsubscribe() {
        n || (n = !0, r(1));
      }
    };
  };
}
function Gh(e) {
  ar((t) => {
  })(e);
}
function qh(e) {
  return new Promise((t) => {
    var r = ut, n;
    e((i) => {
      i === 0 ? Promise.resolve(n).then(t) : i.tag === 0 ? (r = i[0])(0) : (n = i[0], r(0));
    });
  });
}
var Wh = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new No(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new No(e);
class Mn extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(Wh), n = ((i, a) => {
      var o = "";
      if (i)
        return `[Network] ${i.message}`;
      if (a)
        for (var c of a)
          o && (o += `
`), o += `[GraphQL] ${c.message}`;
      return o;
    })(t.networkError, r);
    super(n), this.name = "CombinedError", this.message = n, this.graphQLErrors = r, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var Do = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, rr = /* @__PURE__ */ new Set(), ns = /* @__PURE__ */ new WeakMap(), Ar = (e) => {
  if (e === null || rr.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Ar(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += Ar(r) || "null";
    return t += "]";
  } else if (Ai !== Dr && e instanceof Ai || Pi !== Dr && e instanceof Pi)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = ns.get(e) || Math.random().toString(36).slice(2);
    return ns.set(e, i), Ar({
      __key: i
    });
  }
  rr.add(e);
  var a = "{";
  for (var o of n) {
    var c = Ar(e[o]);
    c && (a.length > 1 && (a += ","), a += Ar(o) + ":" + c);
  }
  return rr.delete(e), a += "}";
}, ko = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || rr.has(r)))
    if (Array.isArray(r))
      for (var n = 0, i = r.length; n < i; n++)
        ko(e, `${t}.${n}`, r[n]);
    else if (r instanceof Ai || r instanceof Pi)
      e.set(t, r);
    else {
      rr.add(r);
      for (var a of Object.keys(r))
        ko(e, `${t}.${a}`, r[a]);
    }
}, Oi = (e) => (rr.clear(), Ar(e));
let Dr = class {
};
var Ai = typeof File < "u" ? File : Dr, Pi = typeof Blob < "u" ? Blob : Dr, Hh = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, zh = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, Kh = (e, t) => t % 2 == 0 ? e.replace(zh, `
`) : e, is = (e) => e.split(Hh).map(Kh).join("").trim(), as = /* @__PURE__ */ new Map(), oi = /* @__PURE__ */ new Map(), Mu = (e) => {
  var t;
  return typeof e == "string" ? t = is(e) : e.loc && oi.get(e.__key) === e ? t = e.loc.source.body : (t = as.get(e) || is(ft(e)), as.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, os = (e) => {
  var t = Do(Mu(e));
  if (e.definitions) {
    var r = id(e);
    r && (t = Do(`
# ${r}`, t));
  }
  return t;
}, nd = (e) => {
  var t, r;
  return typeof e == "string" ? (t = os(e), r = oi.get(t) || Dh(e)) : (t = e.__key || os(e), r = oi.get(t) || e), r.loc || Mu(r), r.__key = t, oi.set(t, r), r;
}, Pa = (e, t, r) => {
  var n = t || {}, i = nd(e), a = Oi(n), o = i.__key;
  return a !== "{}" && (o = Do(a, o)), {
    key: o,
    query: i,
    variables: n,
    extensions: r
  };
}, id = (e) => {
  for (var t of e.definitions)
    if (t.kind === wr.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, Qh = (e) => {
  for (var t of e.definitions)
    if (t.kind === wr.OPERATION_DEFINITION)
      return t.operation;
}, Bo = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var n = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new Mn({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? n : t.hasNext,
    stale: !1
  };
}, Lo = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = Lo(e[r], t[r]);
    return e;
  }
  return t;
}, $o = (e, t, r) => {
  var n = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, o = t.incremental;
  "path" in t && (o = [t]);
  var c = {
    data: e.data
  };
  if (o)
    for (var h of o) {
      Array.isArray(h.errors) && n.push(...h.errors), h.extensions && (Object.assign(a, h.extensions), i = !0);
      for (var u = "data", d = c, s = 0, p = h.path.length; s < p; u = h.path[s++])
        d = d[u] = Array.isArray(d[u]) ? [...d[u]] : {
          ...d[u]
        };
      if (h.items)
        for (var f = +u >= 0 ? u : 0, y = 0, l = h.items.length; y < l; y++)
          d[f + y] = Lo(d[f + y], h.items[y]);
      else
        h.data !== void 0 && (d[u] = Lo(d[u], h.data));
    }
  else
    c.data = t.data || e.data, n = t.errors || n;
  return {
    operation: e.operation,
    data: c.data,
    error: n.length ? new Mn({
      graphQLErrors: n,
      response: r
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, ad = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new Mn({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function od(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Mu(e.query),
    operationName: id(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var Yh = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var n = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && n.searchParams.set(i, typeof a == "object" ? Oi(a) : a);
  }
  var o = n.toString();
  return o.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, Jh = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = Oi(t), n = ((c) => {
      var h = /* @__PURE__ */ new Map();
      return (Ai !== Dr || Pi !== Dr) && (rr.clear(), ko(h, "variables", c)), h;
    })(t.variables);
    if (n.size) {
      var i = new FormData();
      i.append("operations", r), i.append("map", Oi({
        ...[...n.keys()].map((c) => [c])
      }));
      var a = 0;
      for (var o of n.values())
        i.append("" + a++, o);
      return i;
    }
    return r;
  }
}, Xh = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (n.headers)
    for (var i in n.headers)
      r[i.toLowerCase()] = n.headers[i];
  var a = Jh(e, t);
  return typeof a == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...n,
    method: a ? "POST" : "GET",
    body: a,
    headers: r
  };
}, Zh = typeof TextDecoder < "u" ? new TextDecoder() : null, xh = /boundary="?([^=";]+)"?/i, ev = /data: ?([^\n]+)/, us = (e) => e.constructor.name === "Buffer" ? e.toString() : Zh.decode(e);
async function* cs(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield us(t);
  else {
    var r = e.body.getReader(), n;
    try {
      for (; !(n = await r.read()).done; )
        yield us(n.value);
    } finally {
      r.cancel();
    }
  }
}
async function* ss(e, t) {
  var r = "", n;
  for await (var i of e)
    for (r += i; (n = r.indexOf(t)) > -1; )
      yield r.slice(0, n), r = r.slice(n + t.length);
}
async function* tv(e, t, r) {
  var n = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", c;
    if (/multipart\/mixed/i.test(o))
      c = async function* (d, s) {
        var p = d.match(xh), f = "--" + (p ? p[1] : "-"), y = !0, l;
        for await (var v of ss(cs(s), `\r
` + f)) {
          if (y) {
            y = !1;
            var m = v.indexOf(f);
            if (m > -1)
              v = v.slice(m + f.length);
            else
              continue;
          }
          try {
            yield l = JSON.parse(v.slice(v.indexOf(`\r
\r
`) + 4));
          } catch (g) {
            if (!l)
              throw g;
          }
          if (l && l.hasNext === !1)
            break;
        }
        l && l.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o, a);
    else if (/text\/event-stream/i.test(o))
      c = async function* (d) {
        var s;
        for await (var p of ss(cs(d), `

`)) {
          var f = p.match(ev);
          if (f) {
            var y = f[1];
            try {
              yield s = JSON.parse(y);
            } catch (l) {
              if (!s)
                throw l;
            }
            if (s && s.hasNext === !1)
              break;
          }
        }
        s && s.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(a);
    else if (!/text\//i.test(o))
      c = async function* (d) {
        yield JSON.parse(await d.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var h of c)
      i = i ? $o(i, h, a) : Bo(e, h, a), n = !1, yield i, n = !0;
    i || (yield i = Bo(e, {}, a));
  } catch (u) {
    if (!n)
      throw u;
    yield ad(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : u, a);
  }
}
function rv(e, t, r) {
  var n;
  return typeof AbortController < "u" && (r.signal = (n = new AbortController()).signal), Iu(() => {
    n && n.abort();
  })($e((i) => !!i)(rd(tv(e, t, r))));
}
var Fo = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      Fo(r, t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : Fo(e[n], t);
  return t;
}, Uo = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var n of e.definitions) {
      var i = Uo(n);
      t = t || i !== n, r.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === wr.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var c of e.selectionSet.selections || []) {
        o = o || c.kind === wr.FIELD && c.name.value === "__typename" && !c.alias;
        var h = Uo(c);
        t = t || h !== c, a.push(h);
      }
      if (o || (t = !0, a.push({
        kind: wr.FIELD,
        name: {
          kind: wr.NAME,
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
}, ls = /* @__PURE__ */ new Map(), nv = (e) => {
  var t = nd(e), r = ls.get(t.__key);
  return r || (ls.set(t.__key, r = Uo(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, Vo = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => Vo(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var n in e)
      n === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[n] = Vo(e[n]);
    return r;
  } else
    return e;
};
function fs(e) {
  var t = (r) => e(r);
  return t.toPromise = () => qh(ed(1)($e((r) => !r.stale && !r.hasNext)(t))), t.then = (r, n) => t.toPromise().then(r, n), t.subscribe = (r) => ar(r)(t), t;
}
function kr(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var ds = (e, t) => kr(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), iv = () => {
}, Sa = ({ kind: e }) => e !== "mutation" && e !== "query", av = ({ forward: e, client: t, dispatchDebug: r }) => {
  var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (c) => {
    var h = kr(c.kind, c);
    return h.query = nv(c.query), h;
  }, o = (c) => c.kind === "query" && c.context.requestPolicy !== "network-only" && (c.context.requestPolicy === "cache-only" || n.has(c.key));
  return (c) => {
    var h = pn((d) => {
      var s = n.get(d.key);
      process.env.NODE_ENV !== "production" && r({
        operation: d,
        ...s ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var p = s;
      return process.env.NODE_ENV !== "production" && (p = {
        ...p,
        operation: process.env.NODE_ENV !== "production" ? ds(d, {
          cacheOutcome: s ? "hit" : "miss"
        }) : d
      }), d.context.requestPolicy === "cache-and-network" && (p.stale = !0, ps(t, d)), p;
    })($e((d) => !Sa(d) && o(d))(c)), u = Nr((d) => {
      var { operation: s } = d;
      if (s) {
        var p = s.context.additionalTypenames || [];
        if (d.operation.kind !== "subscription" && (p = ((P) => [...Fo(P, /* @__PURE__ */ new Set())])(d.data).concat(p)), d.operation.kind === "mutation" || d.operation.kind === "subscription") {
          var f = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && r({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${p}`,
            operation: s,
            data: {
              typenames: p,
              response: d
            },
            source: "cacheExchange"
          });
          for (var y = 0; y < p.length; y++) {
            var l = p[y], v = i.get(l);
            v || i.set(l, v = /* @__PURE__ */ new Set());
            for (var m of v.values())
              f.add(m);
            v.clear();
          }
          for (var g of f.values())
            n.has(g) && (s = n.get(g).operation, n.delete(g), ps(t, s));
        } else if (s.kind === "query" && d.data) {
          n.set(s.key, d);
          for (var O = 0; O < p.length; O++) {
            var _ = p[O], T = i.get(_);
            T || i.set(_, T = /* @__PURE__ */ new Set()), T.add(s.key);
          }
        }
      }
    })(e($e((d) => d.kind !== "query" || d.context.requestPolicy !== "cache-only")(pn((d) => process.env.NODE_ENV !== "production" ? ds(d, {
      cacheOutcome: "miss"
    }) : d)(Rr([pn(a)($e((d) => !Sa(d) && !o(d))(c)), $e((d) => Sa(d))(c)])))));
    return Rr([h, u]);
  };
}, ps = (e, t) => e.reexecuteOperation(kr(t.kind, t, {
  requestPolicy: "network-only"
})), ys = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: n, forward: i }) => {
  var a = r || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var c = _n((u) => {
      var { key: d } = u, s = $e((p) => p.kind === "teardown" && p.key === d)(o);
      return ju(s)(((p) => {
        var f = e(od(p), p);
        return Cu(({ next: y, complete: l }) => {
          var v = !1, m, g;
          return Promise.resolve().then(() => {
            v || (m = f.subscribe({
              next(O) {
                y(g = g ? $o(g, O) : Bo(p, O));
              },
              error(O) {
                y(ad(p, O));
              },
              complete() {
                v || (v = !0, p.kind === "subscription" && n.reexecuteOperation(kr("teardown", p, p.context)), g && g.hasNext && y($o(g, {
                  hasNext: !1
                })), l());
              }
            }));
          }), () => {
            v = !0, m && m.unsubscribe();
          };
        });
      })(u));
    })($e((u) => u.kind !== "teardown" && a(u))(o)), h = i($e((u) => u.kind === "teardown" || !a(u))(o));
    return Rr([c, h]);
  };
}, ov = ({ forward: e, dispatchDebug: t }) => (r) => {
  var n = _n((a) => {
    var o = od(a), c = Yh(a, o), h = Xh(a, o);
    process.env.NODE_ENV !== "production" && t({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: a,
      data: {
        url: c,
        fetchOptions: h
      },
      source: "fetchExchange"
    });
    var u = ju($e((d) => d.kind === "teardown" && d.key === a.key)(r))(rv(a, c, h));
    return process.env.NODE_ENV !== "production" ? Nr((d) => {
      var s = d.data ? void 0 : d.error;
      process.env.NODE_ENV !== "production" && t({
        type: s ? "fetchError" : "fetchSuccess",
        message: `A ${s ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: c,
          fetchOptions: h,
          value: s || d
        },
        source: "fetchExchange"
      });
    })(u) : u;
  })($e((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(r)), i = e($e((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(r));
  return Rr([n, i]);
}, uv = (e) => ({ client: t, forward: r, dispatchDebug: n }) => e.reduceRight((i, a) => {
  var o = !1;
  return a({
    client: t,
    forward(c) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return On(i(On(c)));
    },
    dispatchDebug(c) {
      process.env.NODE_ENV !== "production" && n({
        timestamp: Date.now(),
        source: a.name,
        ...c
      });
    }
  });
}, r), ud = ({ onOperation: e, onResult: t, onError: r }) => ({ forward: n }) => (i) => _n((a) => {
  r && a.error && r(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? rs(o) : yn(o);
})(n(_n((a) => {
  var o = e && e(a) || a;
  return "then" in o ? rs(o) : yn(o);
})(i))), cv = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = Nr((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var n = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: n,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(n);
  }
})(t)), $e((r) => !1)(t)), hs = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], c = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, h = ts();
  function u(_) {
    (_.kind === "mutation" || _.kind === "teardown" || !a.has(_.key)) && (_.kind === "teardown" ? a.delete(_.key) : _.kind !== "mutation" && a.add(_.key), h.next(_));
  }
  var d = !1;
  function s(_) {
    if (_ && u(_), !d) {
      for (d = !0; d && (_ = o.shift()); )
        u(_);
      d = !1;
    }
  }
  var p = (_) => {
    var T = ju($e((P) => P.kind === "teardown" && P.key === _.key)(h.source))($e((P) => P.operation.kind === _.kind && P.operation.key === _.key && (!P.operation.context._instance || P.operation.context._instance === _.context._instance))(O));
    return _.kind !== "query" ? T = td((P) => !!P.hasNext, !0)(T) : T = es((P) => {
      var E = yn(P);
      return P.stale || P.hasNext ? E : Rr([E, pn(() => (P.stale = !0, P))(ed(1)($e((S) => S.key === _.key)(h.source)))]);
    })(T), _.kind !== "mutation" ? T = Iu(() => {
      a.delete(_.key), n.delete(_.key), i.delete(_.key), d = !1;
      for (var P = o.length - 1; P >= 0; P--)
        o[P].key === _.key && o.splice(P, 1);
      u(kr("teardown", _, _.context));
    })(Nr((P) => {
      if (P.stale) {
        for (var E of o)
          if (E.key === P.operation.key) {
            a.delete(E.key);
            break;
          }
      } else
        P.hasNext || a.delete(_.key);
      n.set(_.key, P);
    })(T)) : T = xc(() => {
      u(_);
    })(T), t.maskTypename && (T = pn((P) => ({
      ...P,
      data: Vo(P.data, !0)
    }))(T)), On(T);
  }, f = this instanceof e ? this : Object.create(e.prototype), y = Object.assign(f, {
    suspense: !!t.suspense,
    operations$: h.source,
    reexecuteOperation(_) {
      _.kind === "teardown" ? s(_) : (_.kind === "mutation" || i.has(_.key)) && (o.push(_), Promise.resolve().then(s));
    },
    createRequestOperation(_, T, P) {
      P || (P = {});
      var E;
      if (process.env.NODE_ENV !== "production" && _ !== "teardown" && (E = Qh(T.query)) !== _)
        throw new Error(`Expected operation of type "${_}" but found "${E}"`);
      return kr(_, T, {
        _instance: _ === "mutation" ? r = r + 1 | 0 : void 0,
        ...c,
        ...P,
        requestPolicy: P.requestPolicy || c.requestPolicy,
        suspense: P.suspense || P.suspense !== !1 && y.suspense
      });
    },
    executeRequestOperation(_) {
      return _.kind === "mutation" ? fs(p(_)) : fs(Fh(() => {
        var T = i.get(_.key);
        T || i.set(_.key, T = p(_)), T = xc(() => {
          s(_);
        })(T);
        var P = n.get(_.key);
        return _.kind === "query" && P && (P.stale || P.hasNext) ? es(yn)(Rr([T, $e((E) => E === n.get(_.key))(yn(P))])) : T;
      }));
    },
    executeQuery(_, T) {
      var P = y.createRequestOperation("query", _, T);
      return y.executeRequestOperation(P);
    },
    executeSubscription(_, T) {
      var P = y.createRequestOperation("subscription", _, T);
      return y.executeRequestOperation(P);
    },
    executeMutation(_, T) {
      var P = y.createRequestOperation("mutation", _, T);
      return y.executeRequestOperation(P);
    },
    readQuery(_, T, P) {
      var E = null;
      return ar((S) => {
        E = S;
      })(y.query(_, T, P)).unsubscribe(), E;
    },
    query: (_, T, P) => y.executeQuery(Pa(_, T), P),
    subscription: (_, T, P) => y.executeSubscription(Pa(_, T), P),
    mutation: (_, T, P) => y.executeMutation(Pa(_, T), P)
  }), l = iv;
  if (process.env.NODE_ENV !== "production") {
    var { next: v, source: m } = ts();
    y.subscribeToDebugTarget = (_) => ar(_)(m), l = v;
  }
  var g = uv(t.exchanges), O = On(g({
    client: y,
    dispatchDebug: l,
    forward: cv({
      dispatchDebug: l
    })
  })(h.source));
  return Gh(O), y;
};
function Qe(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function xt(e) {
  return Qe(e) === "object";
}
function sv(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function vs(e, t) {
  return e.length < 124 ? e : t;
}
const lv = "graphql-transport-ws";
var Ke;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(Ke || (Ke = {}));
var Te;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(Te || (Te = {}));
function cd(e) {
  if (!xt(e))
    throw new Error(`Message is expected to be an object, but got ${Qe(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${Qe(e.type)}`);
  switch (e.type) {
    case Te.ConnectionInit:
    case Te.ConnectionAck:
    case Te.Ping:
    case Te.Pong: {
      if (e.payload != null && !xt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case Te.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Qe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!xt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Qe(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Qe(e.payload.query)}`);
      if (e.payload.variables != null && !xt(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Qe(e.payload.variables)}`);
      if (e.payload.operationName != null && Qe(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Qe(e.payload.operationName)}`);
      if (e.payload.extensions != null && !xt(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Qe(e.payload.extensions)}`);
      break;
    }
    case Te.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Qe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!xt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Qe(e.payload)}`);
      break;
    }
    case Te.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Qe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!sv(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case Te.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Qe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function fv(e, t) {
  return cd(typeof e == "string" ? JSON.parse(e, t) : e);
}
function nn(e, t) {
  return cd(e), JSON.stringify(e, t);
}
function dv(e) {
  const {
    url: t,
    connectionParams: r,
    lazy: n = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: c,
    connectionAckWaitTimeout: h = 0,
    retryAttempts: u = 5,
    retryWait: d = async function(F) {
      let V = 1e3;
      for (let L = 0; L < F; L++)
        V *= 2;
      await new Promise((L) => setTimeout(L, V + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: s = Wn,
    isFatalConnectionProblem: p,
    on: f,
    webSocketImpl: y,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: l = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (F) => {
        const V = Math.random() * 16 | 0;
        return (F == "x" ? V : V & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: v,
    jsonMessageReviver: m
  } = e;
  let g;
  if (y) {
    if (!yv(y))
      throw new Error("Invalid WebSocket implementation provided");
    g = y;
  } else
    typeof WebSocket < "u" ? g = WebSocket : typeof global < "u" ? g = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (g = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!g)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const O = g, _ = (() => {
    const N = (() => {
      const V = {};
      return {
        on(L, J) {
          return V[L] = J, () => {
            delete V[L];
          };
        },
        emit(L) {
          var J;
          "id" in L && ((J = V[L.id]) === null || J === void 0 || J.call(V, L));
        }
      };
    })(), F = {
      connecting: f != null && f.connecting ? [f.connecting] : [],
      opened: f != null && f.opened ? [f.opened] : [],
      connected: f != null && f.connected ? [f.connected] : [],
      ping: f != null && f.ping ? [f.ping] : [],
      pong: f != null && f.pong ? [f.pong] : [],
      message: f != null && f.message ? [N.emit, f.message] : [N.emit],
      closed: f != null && f.closed ? [f.closed] : [],
      error: f != null && f.error ? [f.error] : []
    };
    return {
      onMessage: N.on,
      on(V, L) {
        const J = F[V];
        return J.push(L), () => {
          J.splice(J.indexOf(L), 1);
        };
      },
      emit(V, ...L) {
        for (const J of [...F[V]])
          J(...L);
      }
    };
  })();
  function T(N) {
    const F = [
      // errors are fatal and more critical than close events, throw them first
      _.on("error", (V) => {
        F.forEach((L) => L()), N(V);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      _.on("closed", (V) => {
        F.forEach((L) => L()), N(V);
      })
    ];
  }
  let P, E = 0, S, w = !1, I = 0, C = !1;
  async function k() {
    clearTimeout(S);
    const [N, F] = await (P ?? (P = new Promise((J, pe) => (async () => {
      if (w) {
        if (await d(I), !E)
          return P = void 0, pe({ code: 1e3, reason: "All Subscriptions Gone" });
        I++;
      }
      _.emit("connecting");
      const W = new O(typeof t == "function" ? await t() : t, lv);
      let be, H;
      function ne() {
        isFinite(o) && o > 0 && (clearTimeout(H), H = setTimeout(() => {
          W.readyState === O.OPEN && (W.send(nn({ type: Te.Ping })), _.emit("ping", !1, void 0));
        }, o));
      }
      T((ue) => {
        P = void 0, clearTimeout(be), clearTimeout(H), pe(ue), Wn(ue) && ue.code === 4499 && (W.close(4499, "Terminated"), W.onerror = null, W.onclose = null);
      }), W.onerror = (ue) => _.emit("error", ue), W.onclose = (ue) => _.emit("closed", ue), W.onopen = async () => {
        try {
          _.emit("opened", W);
          const ue = typeof r == "function" ? await r() : r;
          if (W.readyState !== O.OPEN)
            return;
          W.send(nn(ue ? {
            type: Te.ConnectionInit,
            payload: ue
          } : {
            type: Te.ConnectionInit
            // payload is completely absent if not provided
          }, v)), isFinite(h) && h > 0 && (be = setTimeout(() => {
            W.close(Ke.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, h)), ne();
        } catch (ue) {
          _.emit("error", ue), W.close(Ke.InternalClientError, vs(ue instanceof Error ? ue.message : new Error(ue).message, "Internal client error"));
        }
      };
      let ye = !1;
      W.onmessage = ({ data: ue }) => {
        try {
          const K = fv(ue, m);
          if (_.emit("message", K), K.type === "ping" || K.type === "pong") {
            _.emit(K.type, !0, K.payload), K.type === "pong" ? ne() : c || (W.send(nn(K.payload ? {
              type: Te.Pong,
              payload: K.payload
            } : {
              type: Te.Pong
              // payload is completely absent if not provided
            })), _.emit("pong", !1, K.payload));
            return;
          }
          if (ye)
            return;
          if (K.type !== Te.ConnectionAck)
            throw new Error(`First message cannot be of type ${K.type}`);
          clearTimeout(be), ye = !0, _.emit("connected", W, K.payload), w = !1, I = 0, J([
            W,
            new Promise((Ce, _e) => T(_e))
          ]);
        } catch (K) {
          W.onmessage = null, _.emit("error", K), W.close(Ke.BadResponse, vs(K instanceof Error ? K.message : new Error(K).message, "Bad response"));
        }
      };
    })())));
    N.readyState === O.CLOSING && await F;
    let V = () => {
    };
    const L = new Promise((J) => V = J);
    return [
      N,
      V,
      Promise.race([
        // wait for
        L.then(() => {
          if (!E) {
            const J = () => N.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? S = setTimeout(() => {
              N.readyState === O.OPEN && J();
            }, a) : J();
          }
        }),
        // or
        F
      ])
    ];
  }
  function B(N) {
    if (Wn(N) && (pv(N.code) || [
      Ke.InternalServerError,
      Ke.InternalClientError,
      Ke.BadRequest,
      Ke.BadResponse,
      Ke.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      Ke.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      Ke.SubscriberAlreadyExists,
      Ke.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(N.code)))
      throw N;
    if (C)
      return !1;
    if (Wn(N) && N.code === 1e3)
      return E > 0;
    if (!u || I >= u || !s(N) || p != null && p(N))
      throw N;
    return w = !0;
  }
  return n || (async () => {
    for (E++; ; )
      try {
        const [, , N] = await k();
        await N;
      } catch (N) {
        try {
          if (!B(N))
            return;
        } catch (F) {
          return i == null ? void 0 : i(F);
        }
      }
  })(), {
    on: _.on,
    subscribe(N, F) {
      const V = l(N);
      let L = !1, J = !1, pe = () => {
        E--, L = !0;
      };
      return (async () => {
        for (E++; ; )
          try {
            const [W, be, H] = await k();
            if (L)
              return be();
            const ne = _.onMessage(V, (ye) => {
              switch (ye.type) {
                case Te.Next: {
                  F.next(ye.payload);
                  return;
                }
                case Te.Error: {
                  J = !0, L = !0, F.error(ye.payload), pe();
                  return;
                }
                case Te.Complete: {
                  L = !0, pe();
                  return;
                }
              }
            });
            W.send(nn({
              id: V,
              type: Te.Subscribe,
              payload: N
            }, v)), pe = () => {
              !L && W.readyState === O.OPEN && W.send(nn({
                id: V,
                type: Te.Complete
              }, v)), E--, L = !0, be();
            }, await H.finally(ne);
            return;
          } catch (W) {
            if (!B(W))
              return;
          }
      })().then(() => {
        J || F.complete();
      }).catch((W) => {
        F.error(W);
      }), () => {
        L || pe();
      };
    },
    async dispose() {
      if (C = !0, P) {
        const [N] = await P;
        N.close(1e3, "Normal Closure");
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
function Wn(e) {
  return xt(e) && "code" in e && "reason" in e;
}
function pv(e) {
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
function yv(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var Pr = null;
typeof WebSocket < "u" ? Pr = WebSocket : typeof MozWebSocket < "u" ? Pr = MozWebSocket : typeof global < "u" ? Pr = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Pr = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Pr = self.WebSocket || self.MozWebSocket);
const hv = Pr;
function tt(e) {
  if (typeof e != "object")
    return e;
  var t, r, n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = tt(e[t]));
    } else {
      r = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(r, t, {
          value: tt(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[t] = tt(e[t]);
    }
    return r;
  }
  if (n === "[object Array]") {
    for (t = e.length, r = Array(t); t--; )
      r[t] = tt(e[t]);
    return r;
  }
  return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    r.add(tt(i));
  }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    r.set(tt(a), tt(i));
  }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(tt(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var ze;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(ze || (ze = {}));
class vv {
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
    }), this.__gadget.instantiatedFields = tt(t), this.__gadget.persistedFields = tt(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((n) => this.__gadget.fieldKeysTracker[n] = !0));
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
  hasChanges(t = ze.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const r = t == ze.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((n) => !Hn(r[n], this.__gadget.fields[n]));
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
  changes(t, r = ze.SinceLoaded) {
    const i = (typeof t == "string" ? r : t || r) == ze.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = i[t], o = this.__gadget.fields[t], c = !Hn(o, a);
      return c ? { changed: c, current: o, previous: a } : { changed: c };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const c = this.__gadget.fieldKeys[o];
        Hn(i[c], this.__gadget.fields[c]) || (a[c] = { current: this.__gadget.fields[c], previous: i[c] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = ze.SinceLoaded) {
    const r = t == ze.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, n = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      Hn(r[a], this.__gadget.fields[a]) || (n[a] = this.__gadget.fields[a]);
    }
    return n;
  }
  changed(t, r = ze.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = ze.SinceLoaded) {
    t == ze.SinceLoaded ? this.__gadget.instantiatedFields = tt(this.__gadget.fields) : t == ze.SinceLastPersisted && (this.__gadget.persistedFields = tt(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = ze.SinceLoaded) {
    let r;
    t == ze.SinceLoaded ? r = Object.keys(this.__gadget.instantiatedFields) : r = Object.keys(this.__gadget.persistedFields);
    for (const n of this.__gadget.fieldKeys)
      r.includes(n) || delete this.__gadget.fields[n];
    t == ze.SinceLoaded ? Object.assign(this.__gadget.fields, tt(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, tt(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Wo({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const sd = vv;
class ld extends Error {
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
class Go extends Error {
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
class xi extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class ms extends Error {
  constructor(t) {
    let r;
    qo(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class mv extends Error {
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
class gv extends Error {
  constructor(t, r, n, i) {
    const a = r.slice(0, 3), o = r.length > 3 ? `, and ${r.length - 3} more error${r.length > 4 ? "s" : ""} need${r.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${n ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: c, message: h }) => `${c} ${h}`).join(", ")}${o}.`), Object.defineProperty(this, "code", {
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
class fd extends Error {
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
class dd extends Error {
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
class bv extends Error {
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
function gs(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const Br = (e, t) => {
  const r = t.length;
  let n = 0;
  for (; e != null && n < r; )
    e = e[t[n++]];
  return n && n == r ? e : void 0;
}, qo = (e) => (e == null ? void 0 : e.type) == "close", It = (e, t) => typeof e != "string" ? "" : ea(e, t), bs = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ea = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (n) => bs(n)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, i, a, o, c) => (i || (i = ""), "" + i + bs(a))), r;
}, _v = (e) => `${ea(e)}Sort`, Ov = (e) => `${ea(e)}Filter`, Av = (e, t, r) => new fd(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), Pv = (e, t) => {
  if (e.fetching)
    return;
  const r = Br(e.data, t);
  if (r === void 0)
    return new ld(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null)
    return new dd(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, kt = (e, t, r = !1) => {
  var n;
  if (e.error)
    throw e.error instanceof Mn && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((c) => "[Network] " + c.message).join(`
`)), e.error;
  const i = Br(e.data, t), a = Br(i, ["edges"]), o = a ?? i;
  if (i === void 0)
    throw new ld(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || r && Array.isArray(o) && o.length === 0)
    throw new dd(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, hn = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof Mn && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const n = Br(e.data, t);
  return n ?? null;
}, Ru = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new gv(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new fd(e.message) : new xi(e.message, e.code);
}, er = (e, t) => {
  const r = kt(e, t);
  if (!r.success) {
    const n = r.errors && r.errors[0];
    throw n ? Ru(n) : new xi("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return r;
}, pd = (e) => {
  var t, r, n, i;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new gh((i = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, vn = (e, t) => {
  const r = pd(e);
  return r && (t = r.apply(t)), new sd(t);
}, Nu = (e, t) => {
  const r = pd(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((n) => new sd(n));
}, An = (e, t) => {
  const r = t.edges.map((n) => n.node);
  return Nu(e, r);
}, Wo = (e) => {
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
          t[r] = n === void 0 ? null : Wo(n);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const r of Object.keys(e)) {
          const n = Wo(e[r]);
          n !== void 0 && (t[r] = n);
        }
        return t;
      }
    }
  }
}, Ea = "gstk", _s = (e) => {
  try {
    const t = window[e];
    return t.setItem(Ea, Ea), t.removeItem(Ea), !0;
  } catch {
    return !1;
  }
}, Os = Object.prototype.toString, As = Object.getPrototypeOf, Ps = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, fn = (e, t, r) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (r.indexOf(e) > -1 && r.indexOf(t) > -1)
    return !0;
  const n = Os.call(e), i = Os.call(t);
  let a, o, c;
  if (r.push(e, t), n != i || (a = Ps(e), o = Ps(t), a.length != o.length || a.some(function(h) {
    return !fn(e[h], t[h], r);
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
        if (c = a.next(), !fn(c.value, o.next().value, r))
          return !1;
      while (!c.done);
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
      for (c = 0; c < e.length; c++)
        if (!(!(c in e) && !(c in t)) && (c in e != c in t || !fn(e[c], t[c], r)))
          return !1;
      return !0;
    case "Object":
      return fn(As(e), As(t), r);
    default:
      return !1;
  }
}, Hn = (e, t) => fn(e, t, []);
class yd extends Error {
}
class Sv {
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
    throw kt(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new yd("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    kt(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    kt(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Ev {
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
const Tv = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
}, Ss = ud({
  onOperation: (e) => {
    var t, r;
    (t = (r = e.context).operationName) !== null && t !== void 0 || (r.operationName = Tv(e.query) || "unknown");
  }
}), wv = ud({
  onOperation: (e) => {
    e.context.url && e.context.operationName && !e.context.url.includes("?") && (e.context.url += `?operation=${e.context.operationName}`);
  }
}), Iv = 2, jv = 4800, Cv = 1e4, Mv = [Ke.ConnectionAcknowledgementTimeout, Ke.ConnectionInitialisationTimeout], Es = Symbol.for("gadget/connection"), Rv = "token", Nv = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var Me;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(Me || (Me = {}));
class Dv {
  constructor(t) {
    var r, n, i, a, o;
    if (Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "0.15.7"
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
      value: Me.Anonymous
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
      value: async (c, h) => {
        let u, d;
        if (h ? (u = h, d = c) : (u = c, d = {}), this.currentTransaction)
          return await u(this.currentTransaction);
        let s = null, p;
        try {
          s = await this.waitForOpenedConnection({
            isFatalConnectionProblem(l) {
              return console.warn("Transport error encountered during transaction processing", l), !0;
            },
            connectionAckWaitTimeout: jv,
            ...d,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const f = new hs({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              Ss,
              ...this.exchanges.beforeAsync,
              ys({
                forwardSubscription(l) {
                  const v = { ...l, query: l.query || "" };
                  return {
                    subscribe: (m) => ({
                      unsubscribe: s.subscribe(v, m)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          f[Es] = this, p = new Sv(f, s), this.currentTransaction = p, await p.start();
          const y = await u(p);
          return await p.commit(), y;
        } catch (f) {
          try {
            p != null && p.open && await p.rollback();
          } catch (y) {
            y instanceof yd || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", y);
          }
          throw qo(f) ? new ms(f) : f;
        } finally {
          await (s == null ? void 0 : s.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (c, h = {}) => {
        var u;
        c = kv(c, (u = this.options.baseRouteURL) !== null && u !== void 0 ? u : this.options.endpoint), this.isGadgetRequest(c) && (h.headers = { ...this.requestHeaders(), ...h.headers }, this.authenticationMode == Me.Custom && await this.options.authenticationMode.custom.processFetch(c, h));
        const d = await this._fetchImplementation(c, h);
        if (this.authenticationMode == Me.BrowserSession) {
          const s = d.headers.get("x-set-authorization"), p = s != null && s.startsWith("Session ") ? s.replace("Session ", "") : null;
          p && this.sessionTokenStore.setItem(this.sessionStorageKey, p);
        }
        return d;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...c) => {
      const { fetch: h } = await import("./browser-ponyfill-0d130bc8.js").then((u) => u.b);
      return await h(...c);
    }, this.websocketImplementation = (n = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && n !== void 0 ? n : hv, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 }), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Rv}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = Me.InternalAuthToken : t.apiKey ? this.authenticationMode = Me.APIKey : t.custom && (this.authenticationMode = Me.Custom), this.options.authenticationMode = t), (r = this.authenticationMode) !== null && r !== void 0 || (this.authenticationMode = Me.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = Me.BrowserSession;
    const r = !t || typeof t == "boolean" ? dn.Durable : t.storageType;
    let n;
    r == dn.Durable && _s("localStorage") ? n = window.localStorage : r == dn.Session && _s("sessionStorage") ? n = window.sessionStorage : n = new Ev(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = n, this.resetClients();
  }
  close() {
    this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), Ho(this.options.endpoint))
      return !!Ho(r);
    const n = new URL(this.options.endpoint).host;
    return r.includes(n);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Ss, wv];
    typeof window < "u" && t.push(av), t.push(...this.exchanges.beforeAsync, ov, ys({
      forwardSubscription: (n) => ({
        subscribe: (i) => {
          const a = { ...n, query: n.query || "" };
          return {
            unsubscribe: this.baseSubscriptionClient.subscribe(a, i)
          };
        }
      })
    }), ...this.exchanges.afterAll);
    const r = new hs({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[Es] = this, r;
  }
  newSubscriptionClient(t) {
    let r = this.websocketsEndpoint;
    if (t != null && t.urlParams) {
      const n = new URLSearchParams();
      for (const [i, a] of Object.entries(t.urlParams))
        a && n.set(i, a);
      r += "?" + n.toString();
    }
    return dv({
      url: r,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var n, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == Me.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == Me.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == Me.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == Me.Custom && await ((i = (n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (n, i) => {
          var a, o, c, h, u, d;
          if (this.authenticationMode == Me.BrowserSession && (i != null && i.sessionToken)) {
            const s = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (s !== null && typeof s == "object" ? s.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (h = (c = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || c === void 0 ? void 0 : c.connected) === null || h === void 0 || h.call(c, n, i), (d = (u = t == null ? void 0 : t.on) === null || u === void 0 ? void 0 : u.connected) === null || d === void 0 || d.call(u, n, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const r = {};
    if (this.authenticationMode == Me.InternalAuthToken)
      r.authorization = "Basic " + Nv("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == Me.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == Me.BrowserSession) {
      const n = this.sessionTokenStore.getItem(this.sessionStorageKey);
      n && (r.authorization = `Session ${n}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), n = [], i = t.connectionAttempts || Iv;
    const a = t.connectionGlobalTimeoutMs || Cv, o = () => {
      n.forEach((c) => c()), n = [];
    };
    return await new Promise((c, h) => {
      const u = setTimeout(() => {
        this.disposeClient(r), s(new mv("Timeout opening websocket connection to Gadget API"));
      }, a), d = (y) => {
        if (qo(y) && Mv.includes(y.code) && i > 0) {
          i -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), f();
          return;
        }
        clearTimeout(u), h(new ms(y));
      }, s = (y) => {
        clearTimeout(u), h(y);
      }, p = () => {
        clearTimeout(u), c(r);
      }, f = () => {
        o(), n.push(r.on("connected", p)), n.push(r.on("closed", d)), n.push(r.on("error", s));
      };
      f();
    }).finally(o);
  }
  disposeClient(t) {
    const r = t.dispose();
    r && r.catch((n) => console.error(`Error closing SubscriptionClient: ${n.message}`));
  }
}
function kv(e, t) {
  if (typeof e != "string")
    return e;
  if (Ho(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Ho(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class Lr extends Array {
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
    const i = new Lr();
    return i.push(...r), i.modelManager = t, i.pagination = n, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new xi("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new Go("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new Go("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: n, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: n || r
    });
  }
}
const zo = (e) => Object.entries(e).flatMap(([t, r]) => {
  if (typeof r == "boolean")
    return r ? t : !1;
  if (r instanceof ku) {
    let n = "";
    const i = Object.entries(r.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var c;
      return `${a}: ${o instanceof Bu ? `$${(c = o.name) !== null && c !== void 0 ? c : a}` : JSON.stringify(o)}`;
    });
    return i.length > 0 && (n = `(${i.join(", ")})`), r.subselection ? [`${t}${n} {`, ...zo(r.subselection), "}"] : `${t}${n}`;
  } else
    return [`${t} {`, ...zo(r), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Du = (e) => {
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
    i instanceof ku ? Object.entries(i.args).forEach(([a, o]) => {
      var c;
      o instanceof Bu && (t[(c = o.name) !== null && c !== void 0 ? c : r(a)] = o);
    }) : typeof i == "object" && i !== null && Object.assign(t, Du(i));
  }), t;
}, Bv = (e) => {
  const t = Du(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([n, i]) => `$${n}: ${i.type}`).join(", ")})`;
};
class ku {
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
class Bu {
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
const Kr = (e, t) => new ku(e, t), ke = (e) => new Bu(e.type + (e.required ? "!" : ""), e.name, e.value), Lv = (e) => {
  var t;
  const r = Bv(e), n = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${r}${n} {
${zo(e.fields).join(`
`)}
}`;
}, Qr = (e) => {
  const t = Du(e.fields);
  return {
    query: Lv(e),
    variables: Object.entries(t ?? {}).reduce((r, [n, i]) => (typeof i.value < "u" && (r[n] = i.value), r), {})
  };
}, Rn = `
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
`, Yr = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, $v = (e) => `
    query InternalFind${It(e)}($id: GadgetID!, $select: [String!]) {
      ${Yr(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, hd = (e, t) => ({
  search: t != null && t.search ? ke({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? ke({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? ke({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? ke({ value: vd(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), Fv = (e, t) => {
  const r = It(e), n = hd(r, t);
  return Qr({
    type: "query",
    name: `InternalFindFirst${r}`,
    fields: {
      internal: {
        [`list${r}`]: Kr({
          ...n,
          first: ke({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, Uv = (e, t) => {
  const r = It(e), n = hd(r, t);
  return Qr({
    type: "query",
    name: `InternalFindMany${r}`,
    fields: {
      internal: {
        [`list${r}`]: Kr({
          ...n,
          after: ke({ value: t == null ? void 0 : t.after, type: "String" }),
          before: ke({ value: t == null ? void 0 : t.before, type: "String" }),
          first: ke({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: ke({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, Vv = (e) => {
  const t = It(e);
  return `
    ${Rn}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${Yr(e)}
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
}, Gv = (e, t) => {
  const r = It(e), n = It(t);
  return `
    ${Rn}

    mutation InternalBulkCreate${n}($records: [Internal${r}Input]!) {
      ${Yr(e)}
      internal {
        bulkCreate${n}(${t}: $records) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${t}
        }
      }
    }
  `;
}, qv = (e) => {
  const t = It(e);
  return `
    ${Rn}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${Yr(e)}
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
}, Wv = (e) => {
  const t = It(e);
  return `
    ${Rn}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${Yr(e)}
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
}, Hv = (e) => {
  const t = It(e);
  return `
    ${Rn}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${Yr(e)}
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
class vt {
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
    }), this.capitalizedApiIdentifier = ea(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let n = t;
    if (!this.validateRecord(t))
      throw new xi(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = await this.connection.currentClient.query($v(this.apiIdentifier), { id: t, select: vd(r == null ? void 0 : r.select) }).toPromise(), o = (n ? kt : hn)(i, ["internal", this.apiIdentifier]);
    return vn(i, o);
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
    const r = Uv(this.apiIdentifier, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise(), i = hn(n, ["internal", `list${this.capitalizedApiIdentifier}`]), a = An(n, i);
    return Lr.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const n = Fv(this.apiIdentifier, t), i = await this.connection.currentClient.query(n.query, n.variables).toPromise();
    let a;
    r === !1 ? a = hn(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = kt(i, ["internal", `list${this.capitalizedApiIdentifier}`], r);
    const o = An(i, a);
    return Lr.boot(this, o, { options: t, pageInfo: a.pageInfo })[0];
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
    const r = await this.connection.currentClient.mutation(Vv(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), n = er(r, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return vn(r, n[this.apiIdentifier]);
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
      throw new Go("Cannot perform bulkCreate without a pluralApiIdentifier");
    const n = It(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(Gv(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = er(i, ["internal", `bulkCreate${n}`]);
    return Nu(i, a[this.options.pluralApiIdentifier]);
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
    gs(t, "Can't update a record without an ID passed");
    const n = await this.connection.currentClient.mutation(qv(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(r, "update")
    }).toPromise(), i = er(n, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return vn(n, i[this.apiIdentifier]);
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
    gs(t, "Can't delete a record without an ID");
    const r = await this.connection.currentClient.mutation(Wv(this.apiIdentifier), { id: t }).toPromise();
    er(r, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const r = await this.connection.currentClient.mutation(Hv(this.apiIdentifier), t).toPromise();
    er(r, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function vd(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, n] of Object.entries(e))
    n && t.push(r);
  return t;
}
const Lu = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), $u = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, zv = (e, t, r, n, i) => {
  const a = {};
  return typeof t < "u" && (a.id = ke({ type: "GadgetID!", value: t })), Qr({
    type: "query",
    name: e,
    fields: {
      [e]: Kr(a, $u((i == null ? void 0 : i.select) || r, !0)),
      ...Lu(n)
    }
  });
}, Kv = (e, t, r, n, i, a) => Fu(e, n, i, {
  select: a == null ? void 0 : a.select,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}), Fu = (e, t, r, n) => Qr({
  type: "query",
  name: e,
  fields: {
    [e]: Kr({
      after: ke({ value: n == null ? void 0 : n.after, type: "String" }),
      first: ke({ value: n == null ? void 0 : n.first, type: "Int" }),
      before: ke({ value: n == null ? void 0 : n.before, type: "String" }),
      last: ke({ value: n == null ? void 0 : n.last, type: "Int" }),
      sort: n != null && n.sort ? ke({ value: n.sort, type: `[${_v(r)}!]` }) : void 0,
      filter: n != null && n.filter ? ke({ value: n.filter, type: `[${Ov(r)}!]` }) : void 0,
      search: n != null && n.search ? ke({ value: n.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: $u((n == null ? void 0 : n.select) || t, !0)
      }
    }),
    ...Lu(r)
  }
}), md = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, gd = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, ke(r)])), Qv = (e, t, r, n, i, a, o, c, h) => {
  const u = (a == null ? void 0 : a.select) || t;
  let d = {
    [e]: Kr(gd(i), {
      success: !0,
      errors: md,
      [n]: u && !h ? $u(u, !0) : !1,
      [c ? "results" : "result"]: !!h
    })
  };
  o && (d = {
    [o]: d
  });
  const s = {
    type: "mutation",
    name: e,
    fields: {
      ...d,
      ...Lu(r)
    }
  };
  return Qr(s);
}, Yv = (e, t, r) => {
  let n = {
    [e]: Kr(gd(t), {
      success: !0,
      errors: md,
      result: !0
    })
  };
  return r && (n = {
    [r]: n
  }), Qr({
    type: "mutation",
    name: e,
    fields: n
  });
}, Ae = async (e, t, r, n, i, a, o = !0) => {
  const c = zv(t, r, n, i, a), h = await e.connection.currentClient.query(c.query, c.variables).toPromise(), d = (o ? kt : hn)(h, [t]);
  return vn(h, d);
}, ta = async (e, t, r, n, i, a, o) => {
  const c = Kv(t, r, n, i, a, o), h = await e.connection.currentClient.query(c.query, c.variables).toPromise(), u = kt(h, [t]), d = An(h, u);
  if (d.length > 1)
    throw Av(a, r, n);
  return d[0];
}, ae = async (e, t, r, n, i, a) => {
  const o = Fu(t, r, n, i), c = await e.connection.currentClient.query(o.query, o.variables).toPromise();
  let h;
  a === !1 ? h = hn(c, [t]) : h = kt(c, [t], a);
  const u = An(c, h);
  return Lr.boot(e, u, { options: i, pageInfo: h.pageInfo });
}, q = async (e, t, r, n, i, a, o, c, h, u) => {
  const d = Qv(t, r, n, i, o, c, h, a, u), s = await e.connection.currentClient.mutation(d.query, d.variables).toPromise(), p = h ? [h, t] : [t];
  if (a) {
    const f = Br(s.data, p), y = f[i] && r ? Nu(s, f[i]) : void 0;
    if (f.errors) {
      const l = f.errors.map((v) => Ru(v));
      throw new bv(l, y);
    }
    return y;
  } else {
    const f = er(s, p);
    return r == null ? void 0 : u ? f.result : vn(s, f[i]);
  }
}, Jv = async (e, t, r, n) => {
  const i = Yv(t, r, n), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return er(a, n ? [n, t] : [t]).result;
}, Re = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  email: !0,
  roles: {
    key: !0,
    name: !0
  }
};
async function Xv(e, t) {
  return await q(
    this,
    "deleteUser",
    null,
    "user",
    "user",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    t,
    null
  );
}
async function Zv(e, t, r) {
  let n;
  const i = [], a = "user";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "updateUser",
    Re,
    "user",
    "user",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      user: {
        value: n.user,
        required: !1,
        type: "UpdateUserInput"
      }
    },
    r,
    null
  );
}
async function xv(e, t) {
  let r;
  const n = [], i = "user";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? r[a] = o : r[i][a] = o;
  }
  return await q(
    this,
    "createUser",
    Re,
    "user",
    "user",
    !1,
    {
      user: {
        value: r.user,
        required: !1,
        type: "CreateUserInput"
      }
    },
    t,
    null
  );
}
async function em(e, t) {
  let r;
  const n = [], i = "user";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? r[a] = o : r[i][a] = o;
  }
  return await q(
    this,
    "signUpUser",
    Re,
    "user",
    "user",
    !1,
    {
      user: {
        value: r.user,
        required: !1,
        type: "SignUpUserInput"
      }
    },
    t,
    null
  );
}
class tm {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await Ae(
        this,
        "user",
        r,
        Re,
        "user",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await Ae(
          this,
          "user",
          r,
          Re,
          "user",
          n,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await ae(
        this,
        "users",
        Re,
        "user",
        r
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await ae(
        this,
        "users",
        Re,
        "user",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await ae(
          this,
          "users",
          Re,
          "user",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findByEmail = Object.assign(
      async (r, n) => await ta(
        this,
        "users",
        "email",
        r,
        Re,
        "user",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Xv,
      {
        type: "action",
        operationName: "deleteUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    ), this.bulkDelete = Object.assign(
      async (r, n) => await q(
        this,
        "bulkDeleteUsers",
        null,
        "user",
        "users",
        !0,
        {
          ids: {
            value: r,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        n,
        null
      ),
      {
        type: "action",
        operationName: "bulkDeleteUsers",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "users",
        isBulk: !0,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        }
      }
    ), this.update = Object.assign(
      Zv,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.create = Object.assign(
      xv,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          user: {
            required: !1,
            type: "CreateUserInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.signUp = Object.assign(
      em,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          user: {
            required: !1,
            type: "SignUpUserInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    );
  }
}
const Ye = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  roles: {
    key: !0,
    name: !0
  },
  shopifySID: !0
};
async function rm(e) {
  return await q(
    this,
    "logOut",
    Ye,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function nm(e, t) {
  const r = e;
  return await q(
    this,
    "logInViaEmail",
    Ye,
    "session",
    "session",
    !1,
    {
      email: {
        value: r.email,
        required: !1,
        type: "String"
      },
      password: {
        value: r.password,
        required: !1,
        type: "String"
      }
    },
    t,
    "currentSession"
  );
}
class im {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await Ae(
        this,
        "session",
        r,
        Ye,
        "session",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await Ae(
          this,
          "session",
          r,
          Ye,
          "session",
          n,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await ae(
        this,
        "sessions",
        Ye,
        "session",
        r
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await ae(
        this,
        "sessions",
        Ye,
        "session",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await ae(
          this,
          "sessions",
          Ye,
          "session",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      rm,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: {},
        variables: {},
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    ), this.logInViaEmail = Object.assign(
      nm,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    );
  }
}
const Je = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  body: !0,
  handle: !0,
  productType: !0,
  shopifyCreatedAt: !0,
  publishedAt: !0,
  publishedScope: !0,
  tags: !0,
  shopifyUpdatedAt: !0,
  templateSuffix: !0,
  title: !0,
  vendor: !0
};
async function am(e, t) {
  return await q(
    this,
    "deleteShopifyProduct",
    null,
    "shopifyProduct",
    "shopifyProduct",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    t,
    null
  );
}
async function om(e, t) {
  let r;
  const n = [], i = "shopifyProduct";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? r[a] = o : r[i][a] = o;
  }
  return await q(
    this,
    "createShopifyProduct",
    Je,
    "shopifyProduct",
    "shopifyProduct",
    !1,
    {
      shopifyProduct: {
        value: r.shopifyProduct,
        required: !1,
        type: "CreateShopifyProductInput"
      }
    },
    t,
    null
  );
}
async function um(e, t, r) {
  let n;
  const i = [], a = "shopifyProduct";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "updateShopifyProduct",
    Je,
    "shopifyProduct",
    "shopifyProduct",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyProduct: {
        value: n.shopifyProduct,
        required: !1,
        type: "UpdateShopifyProductInput"
      }
    },
    r,
    null
  );
}
class cm {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await Ae(
        this,
        "shopifyProduct",
        r,
        Je,
        "shopifyProduct",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await Ae(
          this,
          "shopifyProduct",
          r,
          Je,
          "shopifyProduct",
          n,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await ae(
        this,
        "shopifyProducts",
        Je,
        "shopifyProduct",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await ae(
        this,
        "shopifyProducts",
        Je,
        "shopifyProduct",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await ae(
          this,
          "shopifyProducts",
          Je,
          "shopifyProduct",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      am,
      {
        type: "action",
        operationName: "deleteShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    ), this.bulkDelete = Object.assign(
      async (r, n) => await q(
        this,
        "bulkDeleteShopifyProducts",
        null,
        "shopifyProduct",
        "shopifyProducts",
        !0,
        {
          ids: {
            value: r,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        n,
        null
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyProducts",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProducts",
        isBulk: !0,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        }
      }
    ), this.create = Object.assign(
      om,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          shopifyProduct: {
            required: !1,
            type: "CreateShopifyProductInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.update = Object.assign(
      um,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    );
  }
}
const Xe = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  height: !0,
  position: !0,
  shopifyCreatedAt: !0,
  source: !0,
  shopifyUpdatedAt: !0,
  width: !0
};
async function sm(e, t) {
  return await q(
    this,
    "deleteShopifyProductImage",
    null,
    "shopifyProductImage",
    "shopifyProductImage",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    t,
    null
  );
}
async function lm(e, t) {
  let r;
  const n = [], i = "shopifyProductImage";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? r[a] = o : r[i][a] = o;
  }
  return await q(
    this,
    "createShopifyProductImage",
    Xe,
    "shopifyProductImage",
    "shopifyProductImage",
    !1,
    {
      shopifyProductImage: {
        value: r.shopifyProductImage,
        required: !1,
        type: "CreateShopifyProductImageInput"
      }
    },
    t,
    null
  );
}
async function fm(e, t, r) {
  let n;
  const i = [], a = "shopifyProductImage";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "updateShopifyProductImage",
    Xe,
    "shopifyProductImage",
    "shopifyProductImage",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyProductImage: {
        value: n.shopifyProductImage,
        required: !1,
        type: "UpdateShopifyProductImageInput"
      }
    },
    r,
    null
  );
}
class dm {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await Ae(
        this,
        "shopifyProductImage",
        r,
        Xe,
        "shopifyProductImage",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await Ae(
          this,
          "shopifyProductImage",
          r,
          Xe,
          "shopifyProductImage",
          n,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await ae(
        this,
        "shopifyProductImages",
        Xe,
        "shopifyProductImage",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await ae(
        this,
        "shopifyProductImages",
        Xe,
        "shopifyProductImage",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await ae(
          this,
          "shopifyProductImages",
          Xe,
          "shopifyProductImage",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      sm,
      {
        type: "action",
        operationName: "deleteShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    ), this.bulkDelete = Object.assign(
      async (r, n) => await q(
        this,
        "bulkDeleteShopifyProductImages",
        null,
        "shopifyProductImage",
        "shopifyProductImages",
        !0,
        {
          ids: {
            value: r,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        n,
        null
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyProductImages",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImages",
        isBulk: !0,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        }
      }
    ), this.create = Object.assign(
      lm,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          shopifyProductImage: {
            required: !1,
            type: "CreateShopifyProductImageInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.update = Object.assign(
      fm,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    );
  }
}
const Ze = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  name: !0,
  position: !0,
  values: !0
};
async function pm(e, t) {
  return await q(
    this,
    "deleteShopifyProductOption",
    null,
    "shopifyProductOption",
    "shopifyProductOption",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    t,
    null
  );
}
async function ym(e, t) {
  let r;
  const n = [], i = "shopifyProductOption";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? r[a] = o : r[i][a] = o;
  }
  return await q(
    this,
    "createShopifyProductOption",
    Ze,
    "shopifyProductOption",
    "shopifyProductOption",
    !1,
    {
      shopifyProductOption: {
        value: r.shopifyProductOption,
        required: !1,
        type: "CreateShopifyProductOptionInput"
      }
    },
    t,
    null
  );
}
async function hm(e, t, r) {
  let n;
  const i = [], a = "shopifyProductOption";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "updateShopifyProductOption",
    Ze,
    "shopifyProductOption",
    "shopifyProductOption",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyProductOption: {
        value: n.shopifyProductOption,
        required: !1,
        type: "UpdateShopifyProductOptionInput"
      }
    },
    r,
    null
  );
}
class vm {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await Ae(
        this,
        "shopifyProductOption",
        r,
        Ze,
        "shopifyProductOption",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await Ae(
          this,
          "shopifyProductOption",
          r,
          Ze,
          "shopifyProductOption",
          n,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await ae(
        this,
        "shopifyProductOptions",
        Ze,
        "shopifyProductOption",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await ae(
        this,
        "shopifyProductOptions",
        Ze,
        "shopifyProductOption",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await ae(
          this,
          "shopifyProductOptions",
          Ze,
          "shopifyProductOption",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      pm,
      {
        type: "action",
        operationName: "deleteShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    ), this.bulkDelete = Object.assign(
      async (r, n) => await q(
        this,
        "bulkDeleteShopifyProductOptions",
        null,
        "shopifyProductOption",
        "shopifyProductOptions",
        !0,
        {
          ids: {
            value: r,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        n,
        null
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyProductOptions",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOptions",
        isBulk: !0,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        }
      }
    ), this.create = Object.assign(
      ym,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          shopifyProductOption: {
            required: !1,
            type: "CreateShopifyProductOptionInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.update = Object.assign(
      hm,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    );
  }
}
const xe = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  barcode: !0,
  compareAtPrice: !0,
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
  weight: !0,
  weightUnit: !0
};
async function mm(e, t) {
  return await q(
    this,
    "deleteShopifyProductVariant",
    null,
    "shopifyProductVariant",
    "shopifyProductVariant",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    t,
    null
  );
}
async function gm(e, t, r) {
  let n;
  const i = [], a = "shopifyProductVariant";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "updateShopifyProductVariant",
    xe,
    "shopifyProductVariant",
    "shopifyProductVariant",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyProductVariant: {
        value: n.shopifyProductVariant,
        required: !1,
        type: "UpdateShopifyProductVariantInput"
      }
    },
    r,
    null
  );
}
async function bm(e, t) {
  let r;
  const n = [], i = "shopifyProductVariant";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? r[a] = o : r[i][a] = o;
  }
  return await q(
    this,
    "createShopifyProductVariant",
    xe,
    "shopifyProductVariant",
    "shopifyProductVariant",
    !1,
    {
      shopifyProductVariant: {
        value: r.shopifyProductVariant,
        required: !1,
        type: "CreateShopifyProductVariantInput"
      }
    },
    t,
    null
  );
}
class _m {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await Ae(
        this,
        "shopifyProductVariant",
        r,
        xe,
        "shopifyProductVariant",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await Ae(
          this,
          "shopifyProductVariant",
          r,
          xe,
          "shopifyProductVariant",
          n,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await ae(
        this,
        "shopifyProductVariants",
        xe,
        "shopifyProductVariant",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await ae(
        this,
        "shopifyProductVariants",
        xe,
        "shopifyProductVariant",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await ae(
          this,
          "shopifyProductVariants",
          xe,
          "shopifyProductVariant",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      mm,
      {
        type: "action",
        operationName: "deleteShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    ), this.bulkDelete = Object.assign(
      async (r, n) => await q(
        this,
        "bulkDeleteShopifyProductVariants",
        null,
        "shopifyProductVariant",
        "shopifyProductVariants",
        !0,
        {
          ids: {
            value: r,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        n,
        null
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyProductVariants",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariants",
        isBulk: !0,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        }
      }
    ), this.update = Object.assign(
      gm,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: xe,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.create = Object.assign(
      bm,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: xe,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          shopifyProductVariant: {
            required: !1,
            type: "CreateShopifyProductVariantInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    );
  }
}
const De = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  address1: !0,
  address2: !0,
  checkoutApiSupported: !0,
  city: !0,
  cookieConsentLevel: !0,
  country: !0,
  countryCode: !0,
  countryName: !0,
  countyTaxes: !0,
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
  hasDiscounts: !0,
  hasGiftCards: !0,
  hasStorefront: !0,
  ianaTimezone: !0,
  latitude: !0,
  longitude: !0,
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
  shopifyCreatedAt: !0,
  requiresExtraPaymentsAgreement: !0,
  setupRequired: !0,
  shopOwner: !0,
  source: !0,
  shopifyUpdatedAt: !0,
  taxShipping: !0,
  taxesIncluded: !0,
  timezone: !0,
  weightUnit: !0,
  zipCode: !0,
  grantedScopes: !0,
  accessToken: !0,
  installedViaApiKey: !0,
  registeredWebhooks: !0,
  marketingSmsContentEnabledAtCheckout: !0,
  transactionalSmsDisabled: !0
};
async function Om(e, t) {
  return await q(
    this,
    "deleteShopifyShop",
    null,
    "shopifyShop",
    "shopifyShop",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    t,
    null
  );
}
async function Am(e, t) {
  let r;
  const n = [], i = "shopifyShop";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? r[a] = o : r[i][a] = o;
  }
  return await q(
    this,
    "createShopifyShop",
    De,
    "shopifyShop",
    "shopifyShop",
    !1,
    {
      shopifyShop: {
        value: r.shopifyShop,
        required: !1,
        type: "CreateShopifyShopInput"
      }
    },
    t,
    null
  );
}
async function Pm(e, t, r) {
  let n;
  const i = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "updateShopifyShop",
    De,
    "shopifyShop",
    "shopifyShop",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyShop: {
        value: n.shopifyShop,
        required: !1,
        type: "UpdateShopifyShopInput"
      }
    },
    r,
    null
  );
}
async function Sm(e, t, r) {
  let n;
  const i = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "reinstallShopifyShop",
    De,
    "shopifyShop",
    "shopifyShop",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyShop: {
        value: n.shopifyShop,
        required: !1,
        type: "ReinstallShopifyShopInput"
      }
    },
    r,
    null
  );
}
async function Em(e, t, r) {
  let n;
  const i = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "uninstallShopifyShop",
    De,
    "shopifyShop",
    "shopifyShop",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyShop: {
        value: n.shopifyShop,
        required: !1,
        type: "UninstallShopifyShopInput"
      }
    },
    r,
    null
  );
}
class Tm {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await Ae(
        this,
        "shopifyShop",
        r,
        De,
        "shopifyShop",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await Ae(
          this,
          "shopifyShop",
          r,
          De,
          "shopifyShop",
          n,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await ae(
        this,
        "shopifyShops",
        De,
        "shopifyShop",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await ae(
        this,
        "shopifyShops",
        De,
        "shopifyShop",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await ae(
          this,
          "shopifyShops",
          De,
          "shopifyShop",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Om,
      {
        type: "action",
        operationName: "deleteShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    ), this.bulkDelete = Object.assign(
      async (r, n) => await q(
        this,
        "bulkDeleteShopifyShops",
        null,
        "shopifyShop",
        "shopifyShops",
        !0,
        {
          ids: {
            value: r,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        n,
        null
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyShops",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        }
      }
    ), this.create = Object.assign(
      Am,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          shopifyShop: {
            required: !1,
            type: "CreateShopifyShopInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.update = Object.assign(
      Pm,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.reinstall = Object.assign(
      Sm,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.uninstall = Object.assign(
      Em,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    );
  }
}
const et = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
};
async function wm(e, t) {
  return await q(
    this,
    "deleteProductPairing",
    null,
    "productPairing",
    "productPairing",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    t,
    null
  );
}
async function Im(e, t, r) {
  let n;
  const i = [], a = "productPairing";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "updateProductPairing",
    et,
    "productPairing",
    "productPairing",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      productPairing: {
        value: n.productPairing,
        required: !1,
        type: "UpdateProductPairingInput"
      }
    },
    r,
    null
  );
}
async function jm(e, t) {
  let r;
  const n = [], i = "productPairing";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? r[a] = o : r[i][a] = o;
  }
  return await q(
    this,
    "createProductPairing",
    et,
    "productPairing",
    "productPairing",
    !1,
    {
      productPairing: {
        value: r.productPairing,
        required: !1,
        type: "CreateProductPairingInput"
      }
    },
    t,
    null
  );
}
class Cm {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await Ae(
        this,
        "productPairing",
        r,
        et,
        "productPairing",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: et,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await Ae(
          this,
          "productPairing",
          r,
          et,
          "productPairing",
          n,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: et,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await ae(
        this,
        "productPairings",
        et,
        "productPairing",
        r
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: et,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await ae(
        this,
        "productPairings",
        et,
        "productPairing",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: et,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await ae(
          this,
          "productPairings",
          et,
          "productPairing",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: et,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      wm,
      {
        type: "action",
        operationName: "deleteProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    ), this.bulkDelete = Object.assign(
      async (r, n) => await q(
        this,
        "bulkDeleteProductPairings",
        null,
        "productPairing",
        "productPairings",
        !0,
        {
          ids: {
            value: r,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        n,
        null
      ),
      {
        type: "action",
        operationName: "bulkDeleteProductPairings",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairings",
        isBulk: !0,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        }
      }
    ), this.update = Object.assign(
      Im,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: et,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.create = Object.assign(
      jm,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: et,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          productPairing: {
            required: !1,
            type: "CreateProductPairingInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    );
  }
}
const Ne = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  errorMessage: !0,
  domain: !0,
  errorDetails: !0,
  syncKey: !0,
  syncSince: !0,
  models: !0,
  force: !0
};
async function Mm(e, t) {
  let r;
  const n = [], i = "shopifySync";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? r[a] = o : r[i][a] = o;
  }
  return await q(
    this,
    "runShopifySync",
    Ne,
    "shopifySync",
    "shopifySync",
    !1,
    {
      shopifySync: {
        value: r.shopifySync,
        required: !1,
        type: "RunShopifySyncInput"
      },
      startReason: {
        value: r.startReason,
        required: !1,
        type: "String"
      }
    },
    t,
    null
  );
}
async function Rm(e, t, r) {
  let n;
  const i = [], a = "shopifySync";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "errorShopifySync",
    Ne,
    "shopifySync",
    "shopifySync",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifySync: {
        value: n.shopifySync,
        required: !1,
        type: "ErrorShopifySyncInput"
      }
    },
    r,
    null
  );
}
async function Nm(e, t, r) {
  let n;
  const i = [], a = "shopifySync";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "completeShopifySync",
    Ne,
    "shopifySync",
    "shopifySync",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifySync: {
        value: n.shopifySync,
        required: !1,
        type: "CompleteShopifySyncInput"
      }
    },
    r,
    null
  );
}
class Dm {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await Ae(
        this,
        "shopifySync",
        r,
        Ne,
        "shopifySync",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await Ae(
          this,
          "shopifySync",
          r,
          Ne,
          "shopifySync",
          n,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await ae(
        this,
        "shopifySyncs",
        Ne,
        "shopifySync",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await ae(
        this,
        "shopifySyncs",
        Ne,
        "shopifySync",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await ae(
          this,
          "shopifySyncs",
          Ne,
          "shopifySync",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, n) => await ta(
        this,
        "shopifySyncs",
        "id",
        r,
        Ne,
        "shopifySync",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.run = Object.assign(
      Mm,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: Ne,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.error = Object.assign(
      Rm,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: Ne,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.complete = Object.assign(
      Nm,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: Ne,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    );
  }
}
const Ue = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  ambiguous: !0,
  booleanField: !0
};
async function km(e, t, r) {
  let n;
  const i = [], a = "ambiguous";
  if (Object.keys(t).some((o) => !i.includes(o) && o !== a))
    throw Error(`Invalid arguments found in variables. Did you mean to use update({ ${a}: { ... } })?`);
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "updateAmbiguous",
    Ue,
    "ambiguous",
    "ambiguous",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      ambiguous: {
        value: n.ambiguous,
        required: !1,
        type: "UpdateAmbiguousInput"
      }
    },
    r,
    null
  );
}
async function Bm(e, t) {
  return await q(
    this,
    "deleteAmbiguous",
    null,
    "ambiguous",
    "ambiguous",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    t,
    null
  );
}
async function Lm(e, t) {
  let r;
  const n = [], i = "ambiguous";
  if (Object.keys(e).some((a) => !n.includes(a) && a !== i))
    throw Error(`Invalid arguments found in variables. Did you mean to use create({ ${i}: { ... } })?`);
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? r[a] = o : r[i][a] = o;
  }
  return await q(
    this,
    "createAmbiguous",
    Ue,
    "ambiguous",
    "ambiguous",
    !1,
    {
      ambiguous: {
        value: r.ambiguous,
        required: !1,
        type: "CreateAmbiguousInput"
      }
    },
    t,
    null
  );
}
class $m {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await Ae(
        this,
        "ambiguous",
        r,
        Ue,
        "ambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await Ae(
          this,
          "ambiguous",
          r,
          Ue,
          "ambiguous",
          n,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await ae(
        this,
        "ambiguouss",
        Ue,
        "ambiguous",
        r
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await ae(
        this,
        "ambiguouss",
        Ue,
        "ambiguous",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await ae(
          this,
          "ambiguouss",
          Ue,
          "ambiguous",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, n) => await ta(
        this,
        "ambiguouss",
        "id",
        r,
        Ue,
        "ambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      km,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: Ue,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.delete = Object.assign(
      Bm,
      {
        type: "action",
        operationName: "deleteAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !0,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    ), this.bulkDelete = Object.assign(
      async (r, n) => await q(
        this,
        "bulkDeleteAmbiguous",
        null,
        "ambiguous",
        "ambiguous",
        !0,
        {
          ids: {
            value: r,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        n,
        null
      ),
      {
        type: "action",
        operationName: "bulkDeleteAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !0,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        }
      }
    ), this.create = Object.assign(
      Lm,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: Ue,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ambiguous: {
            required: !1,
            type: "CreateAmbiguousInput"
          }
        },
        hasAmbiguousIdentifier: !0,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    );
  }
}
const Ve = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  stringField: !0,
  numberField: !0
};
async function Fm(e, t, r) {
  let n;
  const i = [], a = "unambiguous";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, c] of Object.entries(t))
      i.includes(o) ? n[o] = c : n[a][o] = c;
  }
  return await q(
    this,
    "updateUnambiguous",
    Ve,
    "unambiguous",
    "unambiguous",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      unambiguous: {
        value: n.unambiguous,
        required: !1,
        type: "UpdateUnambiguousInput"
      }
    },
    r,
    null
  );
}
async function Um(e, t) {
  let r;
  const n = [], i = "unambiguous";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? r[a] = o : r[i][a] = o;
  }
  return await q(
    this,
    "createUnambiguous",
    Ve,
    "unambiguous",
    "unambiguous",
    !1,
    {
      unambiguous: {
        value: r.unambiguous,
        required: !1,
        type: "CreateUnambiguousInput"
      }
    },
    t,
    null
  );
}
async function Vm(e, t) {
  return await q(
    this,
    "deleteUnambiguous",
    null,
    "unambiguous",
    "unambiguous",
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      }
    },
    t,
    null
  );
}
class Gm {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await Ae(
        this,
        "unambiguous",
        r,
        Ve,
        "unambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await Ae(
          this,
          "unambiguous",
          r,
          Ve,
          "unambiguous",
          n,
          !1
        );
        return i.isEmpty() ? null : i;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await ae(
        this,
        "unambiguouss",
        Ve,
        "unambiguous",
        r
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await ae(
        this,
        "unambiguouss",
        Ve,
        "unambiguous",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await ae(
          this,
          "unambiguouss",
          Ve,
          "unambiguous",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, n) => await ta(
        this,
        "unambiguouss",
        "id",
        r,
        Ve,
        "unambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      Fm,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: Ve,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.create = Object.assign(
      Um,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: Ve,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          unambiguous: {
            required: !1,
            type: "CreateUnambiguousInput"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: []
      }
    ), this.delete = Object.assign(
      Vm,
      {
        type: "action",
        operationName: "deleteUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: !0,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    ), this.bulkDelete = Object.assign(
      async (r, n) => await q(
        this,
        "bulkDeleteUnambiguous",
        null,
        "unambiguous",
        "unambiguous",
        !0,
        {
          ids: {
            value: r,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        n,
        null
      ),
      {
        type: "action",
        operationName: "bulkDeleteUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !0,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: !0,
            type: "[GadgetID!]"
          }
        }
      }
    );
  }
}
const Ir = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  roles: {
    key: !0,
    name: !0
  },
  shopifySID: !0
};
async function qm(e) {
  return await q(
    this,
    "logOut",
    Ir,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function Wm(e, t) {
  const r = e;
  return await q(
    this,
    "logInViaEmail",
    Ir,
    "session",
    "session",
    !1,
    {
      email: {
        value: r.email,
        required: !1,
        type: "String"
      },
      password: {
        value: r.password,
        required: !1,
        type: "String"
      }
    },
    t,
    "currentSession"
  );
}
class Hm {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (r) => await Ae(
        this,
        "currentSession",
        void 0,
        Ir,
        "session",
        r
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: Ir,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      qm,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Ir,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: {},
        variables: {},
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    ), this.logInViaEmail = Object.assign(
      Wm,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Ir,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
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
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: []
      }
    );
  }
}
const Ta = "production", wa = "development", zm = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
let Km = class {
  constructor(t) {
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async () => await Jv(
        this.connection,
        "globalShopifySync",
        {},
        null
      ),
      {
        type: "globalAction",
        operationName: "globalShopifySync",
        namespace: null,
        variablesType: {},
        variables: {}
      }
    ), this.transaction = async (i) => await this.connection.transaction(i), this.getDirectUploadToken = async () => (await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
      requestPolicy: "network-only"
    })).gadgetMeta.directUploadToken;
    const r = (t == null ? void 0 : t.environment) ?? zm() ?? wa;
    let n = r.toLocaleLowerCase();
    n != wa && n != Ta && (console.warn("Invalid environment", r, "defaulting to development"), n = wa), this.connection = new Dv({
      endpoint: new URL("api/graphql", n == Ta ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      environment: n == Ta ? "Production" : "Development"
    }), this.user = new tm(this.connection), this.session = new im(this.connection), this.shopifyProduct = new cm(this.connection), this.shopifyProductImage = new dm(this.connection), this.shopifyProductOption = new vm(this.connection), this.shopifyProductVariant = new _m(this.connection), this.shopifyShop = new Tm(this.connection), this.productPairing = new Cm(this.connection), this.shopifySync = new Dm(this.connection), this.ambiguous = new $m(this.connection), this.unambiguous = new Gm(this.connection), this.currentSession = new Hm(this.connection), this.internal = {
      user: new vt("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new vt("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new vt("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new vt("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new vt("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new vt("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new vt("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new vt("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new vt("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new vt("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new vt("unambiguous", this.connection, {
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
  async mutate(t, r) {
    const { data: n, error: i } = await this.connection.currentClient.mutation(t, r).toPromise();
    if (i)
      throw i;
    return n;
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
  toString() {
    return `GadgetAPIClient<${this.productionApiRoot}>`;
  }
  toJSON() {
    return this.toString();
  }
};
var Qm = {
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
let Ym = class extends Error {
  constructor(t, r, n, i, a, o, c) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), r && (this.nodes = Array.isArray(r) ? r : [r]), n && (this.source = n), i && (this.positions = i), o && (this.originalError = o);
    var h = c;
    if (!h && o) {
      var u = o.extensions;
      u && typeof u == "object" && (h = u);
    }
    this.extensions = h || {};
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
var ge, Y;
function je(e) {
  return new Ym(`Syntax Error: Unexpected token at ${Y} in ${e}`);
}
function it(e) {
  if (e.lastIndex = Y, e.test(ge))
    return ge.slice(Y, Y = e.lastIndex);
}
var zn = / +(?=[^\s])/y;
function Jm(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, a = t.length - 1, o = 0; o < t.length; o++)
    zn.lastIndex = 0, zn.test(t[o]) && (o && (!n || zn.lastIndex < n) && (n = zn.lastIndex), i = i || o, a = o);
  for (var c = i; c <= a; c++)
    c !== i && (r += `
`), r += t[c].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function Z() {
  for (var e = 0 | ge.charCodeAt(Y++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | ge.charCodeAt(Y++))
    if (e === 35)
      for (; (e = ge.charCodeAt(Y++)) !== 10 && e !== 13; )
        ;
  Y--;
}
var bd = /[_A-Za-z]\w*/y;
function jt() {
  var e;
  if (e = it(bd))
    return {
      kind: "Name",
      value: e
    };
}
var Xm = /(?:null|true|false)/y, _d = /\$[_A-Za-z]\w*/y, Zm = /-?\d+/y, xm = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, eg = /\\/g, tg = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, rg = /"(?:"|[^\r\n]*?[^\\]")/y;
function Si(e) {
  var t, r;
  if (r = it(Xm))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = it(_d)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = it(Zm)) {
    var n = r;
    (r = it(xm)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = it(bd))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = it(tg))
    t = {
      kind: "StringValue",
      value: Jm(r.slice(3, -3)),
      block: !0
    };
  else if (r = it(rg))
    t = {
      kind: "StringValue",
      value: eg.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (ge.charCodeAt(Y) === 91) {
      Y++, Z();
      for (var c = []; o = Si(a); )
        c.push(o);
      if (ge.charCodeAt(Y++) !== 93)
        throw je("ListValue");
      return Z(), {
        kind: "ListValue",
        values: c
      };
    }
  }(e) || function(a) {
    if (ge.charCodeAt(Y) === 123) {
      Y++, Z();
      for (var o = [], c; c = jt(); ) {
        if (Z(), ge.charCodeAt(Y++) !== 58)
          throw je("ObjectField");
        Z();
        var h = Si(a);
        if (!h)
          throw je("ObjectField");
        o.push({
          kind: "ObjectField",
          name: c,
          value: h
        });
      }
      if (ge.charCodeAt(Y++) !== 125)
        throw je("ObjectValue");
      return Z(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return Z(), t;
}
function Od(e) {
  var t = [];
  if (Z(), ge.charCodeAt(Y) === 40) {
    Y++, Z();
    for (var r; r = jt(); ) {
      if (Z(), ge.charCodeAt(Y++) !== 58)
        throw je("Argument");
      Z();
      var n = Si(e);
      if (!n)
        throw je("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || ge.charCodeAt(Y++) !== 41)
      throw je("Argument");
    Z();
  }
  return t;
}
function $r(e) {
  var t = [];
  for (Z(); ge.charCodeAt(Y) === 64; ) {
    Y++;
    var r = jt();
    if (!r)
      throw je("Directive");
    Z(), t.push({
      kind: "Directive",
      name: r,
      arguments: Od(e)
    });
  }
  return t;
}
function ng() {
  var e = jt();
  if (e) {
    Z();
    var t;
    if (ge.charCodeAt(Y) === 58) {
      if (Y++, Z(), t = e, !(e = jt()))
        throw je("Field");
      Z();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: Od(!1),
      directives: $r(!1),
      selectionSet: ra()
    };
  }
}
function Ad() {
  var e;
  if (Z(), ge.charCodeAt(Y) === 91) {
    Y++, Z();
    var t = Ad();
    if (!t || ge.charCodeAt(Y++) !== 93)
      throw je("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = jt())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw je("NamedType");
  return Z(), ge.charCodeAt(Y) === 33 ? (Y++, Z(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var ig = /on/y;
function Pd() {
  if (it(ig)) {
    Z();
    var e = jt();
    if (!e)
      throw je("NamedType");
    return Z(), {
      kind: "NamedType",
      name: e
    };
  }
}
var ag = /\.\.\./y;
function og() {
  if (it(ag)) {
    Z();
    var e = Y, t;
    if ((t = jt()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: $r(!1)
      };
    Y = e;
    var r = Pd(), n = $r(!1), i = ra();
    if (!i)
      throw je("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: i
    };
  }
}
function ra() {
  var e;
  if (Z(), ge.charCodeAt(Y) === 123) {
    Y++, Z();
    for (var t = []; e = og() || ng(); )
      t.push(e);
    if (!t.length || ge.charCodeAt(Y++) !== 125)
      throw je("SelectionSet");
    return Z(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var ug = /fragment/y;
function cg() {
  if (it(ug)) {
    Z();
    var e = jt();
    if (!e)
      throw je("FragmentDefinition");
    Z();
    var t = Pd();
    if (!t)
      throw je("FragmentDefinition");
    var r = $r(!1), n = ra();
    if (!n)
      throw je("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var sg = /(?:query|mutation|subscription)/y;
function lg() {
  var e, t, r = [], n = [];
  (e = it(sg)) && (Z(), t = jt(), r = function() {
    var o, c = [];
    if (Z(), ge.charCodeAt(Y) === 40) {
      for (Y++, Z(); o = it(_d); ) {
        if (Z(), ge.charCodeAt(Y++) !== 58)
          throw je("VariableDefinition");
        var h = Ad(), u = void 0;
        if (ge.charCodeAt(Y) === 61 && (Y++, Z(), !(u = Si(!0))))
          throw je("VariableDefinition");
        Z(), c.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: o.slice(1)
            }
          },
          type: h,
          defaultValue: u,
          directives: $r(!0)
        });
      }
      if (ge.charCodeAt(Y++) !== 41)
        throw je("VariableDefinition");
      Z();
    }
    return c;
  }(), n = $r(!1));
  var i = ra();
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
function fg(e, t) {
  return ge = typeof e.body == "string" ? e.body : e, Y = 0, function() {
    var n;
    Z();
    for (var i = []; n = cg() || lg(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function dg(e) {
  return JSON.stringify(e);
}
function pg(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var lt = (e) => !(!e || !e.length), Ge = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !lt(e.variableDefinitions) && !lt(e.directives))
      return Ge.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), lt(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(Ge.VariableDefinition).join(", ") + ")"), lt(e.directives) && (t += " " + e.directives.map(Ge.Directive).join(" ")), t + " " + Ge.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = Ge.Variable(e.variable) + ": " + dt(e.type);
    return e.defaultValue && (t += " = " + dt(e.defaultValue)), lt(e.directives) && (t += " " + e.directives.map(Ge.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (lt(e.arguments)) {
      var r = e.arguments.map(Ge.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return lt(e.directives) && (t += " " + e.directives.map(Ge.Directive).join(" ")), e.selectionSet ? t + " " + Ge.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? pg(e.value) : dg(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(dt).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(Ge.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + dt(e.value),
  Document: (e) => lt(e.definitions) ? e.definitions.map(dt).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(dt).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + dt(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return lt(e.directives) && (t += " " + e.directives.map(Ge.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), lt(e.directives) && (t += " " + e.directives.map(Ge.Directive).join(" ")), t + " " + dt(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, lt(e.directives) && (t += " " + e.directives.map(Ge.Directive).join(" ")), t + " " + dt(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return lt(e.arguments) && (t += "(" + e.arguments.map(Ge.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + dt(e.type) + "]",
  NonNullType: (e) => dt(e.type) + "!"
};
function dt(e) {
  return Ge[e.kind] ? Ge[e.kind](e) : "";
}
var Ko = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, ui = /* @__PURE__ */ new Set(), Ts = /* @__PURE__ */ new WeakMap(), Sr = (e) => {
  if (e === null || ui.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Sr(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += Sr(r) || "null";
    return t += "]";
  } else if (ws !== Ei && e instanceof ws || Is !== Ei && e instanceof Is)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = Ts.get(e) || Math.random().toString(36).slice(2);
    return Ts.set(e, i), Sr({
      __key: i
    });
  }
  ui.add(e);
  var a = "{";
  for (var o of n) {
    var c = Sr(e[o]);
    c && (a.length > 1 && (a += ","), a += Sr(o) + ":" + c);
  }
  return ui.delete(e), a += "}";
}, yg = (e) => (ui.clear(), Sr(e));
class Ei {
}
var ws = typeof File < "u" ? File : Ei, Is = typeof Blob < "u" ? Blob : Ei, hg = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, vg = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, mg = (e, t) => t % 2 == 0 ? e.replace(vg, `
`) : e, js = (e) => e.split(hg).map(mg).join("").trim(), Cs = /* @__PURE__ */ new Map(), ci = /* @__PURE__ */ new Map(), Sd = (e) => {
  var t;
  return typeof e == "string" ? t = js(e) : e.loc && ci.get(e.__key) === e ? t = e.loc.source.body : (t = Cs.get(e) || js(dt(e)), Cs.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Ms = (e) => {
  var t = Ko(Sd(e));
  if (e.definitions) {
    var r = _g(e);
    r && (t = Ko(`
# ${r}`, t));
  }
  return t;
}, gg = (e) => {
  var t, r;
  return typeof e == "string" ? (t = Ms(e), r = ci.get(t) || fg(e)) : (t = e.__key || Ms(e), r = ci.get(t) || e), r.loc || Sd(r), r.__key = t, ci.set(t, r), r;
}, bg = (e, t, r) => {
  var n = t || {}, i = gg(e), a = yg(n), o = i.__key;
  return a !== "{}" && (o = Ko(a, o)), {
    key: o,
    query: i,
    variables: n,
    extensions: r
  };
}, _g = (e) => {
  for (var t of e.definitions)
    if (t.kind === Qm.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
};
typeof TextDecoder < "u" && new TextDecoder();
var Ed = {}, na = Tt.createContext(Ed), Og = na.Provider;
na.Consumer;
na.displayName = "UrqlContext";
var Ag = () => {
  var e = Tt.useContext(na);
  if (e === Ed && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, Pg = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, Sg = (e, t) => e === t || !(!e || !t || e.key !== t.key), Ia = (e, t) => {
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
      if (o === "operation" ? !Sg(n[o], i[o]) : n[o] !== i[o])
        return !0;
    return !1;
  })(e, r) ? r : e;
}, Eg = (e, t) => {
  for (var r = 0, n = t.length; r < n; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}, ja = Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Rs(e, t) {
  process.env.NODE_ENV !== "production" && ja && ja.ReactCurrentOwner && ja.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function Tg(e, t) {
  var r = Tt.useRef(void 0);
  return Tt.useMemo(() => {
    var n = bg(e, t);
    return r.current !== void 0 && r.current.key === n.key ? r.current : (r.current = n, n);
  }, [e, t]);
}
var wg = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    e.operations$ && ar((n) => {
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
}, Ig = (e, t) => e.suspense && (!t || t.suspense !== !1);
function jg(e) {
  var t = Ag(), r = wg(t), n = Ig(t, e.context), i = Tg(e.query, e.variables), a = Tt.useMemo(() => {
    if (e.pause)
      return null;
    var p = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return n ? Nr((f) => {
      r.set(i.key, f);
    })(p) : p;
  }, [r, t, i, n, e.pause, e.requestPolicy, e.context]), o = Tt.useCallback((p, f) => {
    if (!p)
      return {
        fetching: !1
      };
    var y = r.get(i.key);
    if (y) {
      if (f && y != null && "then" in y)
        throw y;
    } else {
      var l, v = ar((g) => {
        y = g, l && l(y);
      })(td(() => f && !l || !y)(p));
      if (y == null && f) {
        var m = new Promise((g) => {
          l = g;
        });
        throw r.set(i.key, m), m;
      } else
        v.unsubscribe();
    }
    return y || {
      fetching: !0
    };
  }, [r, i]), c = [t, i, e.requestPolicy, e.context, e.pause], [h, u] = Tt.useState(() => [a, Ia(Pg, o(a, n)), c]), d = h[1];
  a !== h[0] && Eg(h[2], c) && u([a, d = Ia(h[1], o(a, n)), c]), Tt.useEffect(() => {
    var p = h[0], f = h[2][1], y = !1, l = (m) => {
      y = !0, Rs(u, (g) => {
        var O = Ia(g[1], m);
        return g[1] !== O ? [g[0], O, g[2]] : g;
      });
    };
    if (p) {
      var v = ar(l)(Iu(() => {
        l({
          fetching: !1
        });
      })(p));
      return y || l({
        fetching: !0
      }), () => {
        r.dispose(f.key), v.unsubscribe();
      };
    } else
      l({
        fetching: !1
      });
  }, [r, h[0], h[2][1]]);
  var s = Tt.useCallback((p) => {
    var f = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...p
    };
    Rs(u, (y) => [n ? Nr((l) => {
      r.set(i.key, l);
    })(t.executeQuery(i, f)) : t.executeQuery(i, f), y[1], c]);
  }, [t, r, i, n, o, e.requestPolicy, e.context]);
  return [d, s];
}
const Td = ie.createContext(void 0), Cg = ie.createContext(void 0), Mg = "/", Rg = "signOut";
function Ng(e) {
  let t, r;
  if ("api" in e) {
    if (!vh(e.api))
      throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    t = e.api, r = e.api.connection.currentClient;
  } else if (e.value)
    r = e.value;
  else
    throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
  r.suspense = !0;
  let n = Mg, i = Rg;
  if ("auth" in e) {
    const { auth: a } = e;
    a != null && a.signInPath && (n = a.signInPath), a != null && a.signOutActionApiIdentifier && (i = a.signOutActionApiIdentifier);
  }
  return ie.createElement(
    Td.Provider,
    { value: r },
    ie.createElement(
      Cg.Provider,
      { value: {
        api: t,
        auth: {
          signInPath: n,
          signOutActionApiIdentifier: i
        }
      } },
      ie.createElement(Og, { value: r }, e.children)
    )
  );
}
function Dg(e) {
  return typeof e == "object" && e !== null;
}
function kg(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const Bg = /\r\n|[\n\r]/g;
function Qo(e, t) {
  let r = 0, n = 1;
  for (const i of e.body.matchAll(Bg)) {
    if (typeof i.index == "number" || kg(!1), i.index >= t)
      break;
    r = i.index + i[0].length, n += 1;
  }
  return {
    line: n,
    column: t + 1 - r
  };
}
function Lg(e) {
  return wd(
    e.source,
    Qo(e.source, e.start)
  );
}
function wd(e, t) {
  const r = e.locationOffset.column - 1, n = "".padStart(r) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, c = t.line === 1 ? r : 0, h = t.column + c, u = `${e.name}:${o}:${h}
`, d = n.split(/\r\n|[\n\r]/g), s = d[i];
  if (s.length > 120) {
    const p = Math.floor(h / 80), f = h % 80, y = [];
    for (let l = 0; l < s.length; l += 80)
      y.push(s.slice(l, l + 80));
    return u + Ns([
      [`${o} |`, y[0]],
      ...y.slice(1, p + 1).map((l) => ["|", l]),
      ["|", "^".padStart(f)],
      ["|", y[p + 1]]
    ]);
  }
  return u + Ns([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, d[i - 1]],
    [`${o} |`, s],
    ["|", "^".padStart(h)],
    [`${o + 1} |`, d[i + 1]]
  ]);
}
function Ns(e) {
  const t = e.filter(([n, i]) => i !== void 0), r = Math.max(...t.map(([n]) => n.length));
  return t.map(([n, i]) => n.padStart(r) + (i ? " " + i : "")).join(`
`);
}
function $g(e) {
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
class Ti extends Error {
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
  constructor(t, ...r) {
    var n, i, a;
    const { nodes: o, source: c, positions: h, path: u, originalError: d, extensions: s } = $g(r);
    super(t), this.name = "GraphQLError", this.path = u ?? void 0, this.originalError = d ?? void 0, this.nodes = Ds(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const p = Ds(
      (n = this.nodes) === null || n === void 0 ? void 0 : n.map((y) => y.loc).filter((y) => y != null)
    );
    this.source = c ?? (p == null || (i = p[0]) === null || i === void 0 ? void 0 : i.source), this.positions = h ?? (p == null ? void 0 : p.map((y) => y.start)), this.locations = h && c ? h.map((y) => Qo(c, y)) : p == null ? void 0 : p.map((y) => Qo(y.source, y.start));
    const f = Dg(
      d == null ? void 0 : d.extensions
    ) ? d == null ? void 0 : d.extensions : void 0;
    this.extensions = (a = s ?? f) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }), d != null && d.stack ? Object.defineProperty(this, "stack", {
      value: d.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Ti) : Object.defineProperty(this, "stack", {
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
      for (const r of this.nodes)
        r.loc && (t += `

` + Lg(r.loc));
    else if (this.source && this.locations)
      for (const r of this.locations)
        t += `

` + wd(this.source, r);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function Ds(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const Fg = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Ug = (e, t) => {
  let r = "";
  return e !== void 0 ? r = `[Network] ${e.message}` : t !== void 0 ? t.forEach((n) => {
    r += `[GraphQL] ${n.message}
`;
  }) : r = "Unknown error", r.trim();
}, Vg = (e) => typeof e == "string" ? new Ti(e) : e != null && e.message && !e.code ? new Ti(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class tr extends Error {
  /** @private */
  static forClientSideError(t, r) {
    return new tr({
      executionErrors: [t],
      response: r
    });
  }
  /** @private */
  static forErrorsResponse(t, r) {
    return new tr({
      executionErrors: t.map(Ru),
      response: r
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new tr({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, r) {
    const n = Pv(t, r);
    let i = tr.forMaybeCombinedError(t.error);
    return !i && n && (i = tr.forClientSideError(n)), i;
  }
  constructor({ networkError: t, executionErrors: r, response: n }) {
    const i = (r || []).map(Vg), a = Ug(t, i);
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
const Gg = (e) => {
  const { context: t, suspense: r, ...n } = e ?? {}, i = gi(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...n,
    context: i
  };
}, qg = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), Id = (e) => {
  if (!zf(Td))
    throw new Error(Fg);
  const t = Gg(e);
  return jg(t);
};
var ks = Object.prototype.toString, jd = function(t) {
  var r = ks.call(t), n = r === "[object Arguments]";
  return n || (n = r !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && ks.call(t.callee) === "[object Function]"), n;
}, Ca, Bs;
function Wg() {
  if (Bs)
    return Ca;
  Bs = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = jd, i = Object.prototype.propertyIsEnumerable, a = !i.call({ toString: null }, "toString"), o = i.call(function() {
    }, "prototype"), c = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], h = function(p) {
      var f = p.constructor;
      return f && f.prototype === p;
    }, u = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, d = function() {
      if (typeof window > "u")
        return !1;
      for (var p in window)
        try {
          if (!u["$" + p] && t.call(window, p) && window[p] !== null && typeof window[p] == "object")
            try {
              h(window[p]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), s = function(p) {
      if (typeof window > "u" || !d)
        return h(p);
      try {
        return h(p);
      } catch {
        return !1;
      }
    };
    e = function(f) {
      var y = f !== null && typeof f == "object", l = r.call(f) === "[object Function]", v = n(f), m = y && r.call(f) === "[object String]", g = [];
      if (!y && !l && !v)
        throw new TypeError("Object.keys called on a non-object");
      var O = o && l;
      if (m && f.length > 0 && !t.call(f, 0))
        for (var _ = 0; _ < f.length; ++_)
          g.push(String(_));
      if (v && f.length > 0)
        for (var T = 0; T < f.length; ++T)
          g.push(String(T));
      else
        for (var P in f)
          !(O && P === "prototype") && t.call(f, P) && g.push(String(P));
      if (a)
        for (var E = s(f), S = 0; S < c.length; ++S)
          !(E && c[S] === "constructor") && t.call(f, c[S]) && g.push(c[S]);
      return g;
    };
  }
  return Ca = e, Ca;
}
var Hg = Array.prototype.slice, zg = jd, Ls = Object.keys, si = Ls ? function(t) {
  return Ls(t);
} : Wg(), $s = Object.keys;
si.shim = function() {
  if (Object.keys) {
    var t = function() {
      var r = Object.keys(arguments);
      return r && r.length === arguments.length;
    }(1, 2);
    t || (Object.keys = function(n) {
      return zg(n) ? $s(Hg.call(n)) : $s(n);
    });
  } else
    Object.keys = si;
  return Object.keys || si;
};
var Uu = si, ia = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var i = 42;
  t[r] = i;
  for (r in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(t);
  if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o = Object.getOwnPropertyDescriptor(t, r);
    if (o.value !== i || o.enumerable !== !0)
      return !1;
  }
  return !0;
}, Fs = typeof Symbol < "u" && Symbol, Kg = ia, Vu = function() {
  return typeof Fs != "function" || typeof Symbol != "function" || typeof Fs("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Kg();
}, Qg = "Function.prototype.bind called on incompatible ", Ma = Array.prototype.slice, Yg = Object.prototype.toString, Jg = "[object Function]", Xg = function(t) {
  var r = this;
  if (typeof r != "function" || Yg.call(r) !== Jg)
    throw new TypeError(Qg + r);
  for (var n = Ma.call(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var d = r.apply(
        this,
        n.concat(Ma.call(arguments))
      );
      return Object(d) === d ? d : this;
    } else
      return r.apply(
        t,
        n.concat(Ma.call(arguments))
      );
  }, o = Math.max(0, r.length - n.length), c = [], h = 0; h < o; h++)
    c.push("$" + h);
  if (i = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, i.prototype = new u(), u.prototype = null;
  }
  return i;
}, Zg = Xg, Gu = Function.prototype.bind || Zg, xg = Gu, eb = xg.call(Function.call, Object.prototype.hasOwnProperty), ee, Fr = SyntaxError, Cd = Function, Cr = TypeError, Ra = function(e) {
  try {
    return Cd('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, nr = Object.getOwnPropertyDescriptor;
if (nr)
  try {
    nr({}, "");
  } catch {
    nr = null;
  }
var Na = function() {
  throw new Cr();
}, tb = nr ? function() {
  try {
    return arguments.callee, Na;
  } catch {
    try {
      return nr(arguments, "callee").get;
    } catch {
      return Na;
    }
  }
}() : Na, mr = Vu(), St = Object.getPrototypeOf || function(e) {
  return e.__proto__;
}, Er = {}, rb = typeof Uint8Array > "u" ? ee : St(Uint8Array), ir = {
  "%AggregateError%": typeof AggregateError > "u" ? ee : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ee : ArrayBuffer,
  "%ArrayIteratorPrototype%": mr ? St([][Symbol.iterator]()) : ee,
  "%AsyncFromSyncIteratorPrototype%": ee,
  "%AsyncFunction%": Er,
  "%AsyncGenerator%": Er,
  "%AsyncGeneratorFunction%": Er,
  "%AsyncIteratorPrototype%": Er,
  "%Atomics%": typeof Atomics > "u" ? ee : Atomics,
  "%BigInt%": typeof BigInt > "u" ? ee : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? ee : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? ee : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? ee : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? ee : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? ee : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ee : FinalizationRegistry,
  "%Function%": Cd,
  "%GeneratorFunction%": Er,
  "%Int8Array%": typeof Int8Array > "u" ? ee : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? ee : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? ee : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": mr ? St(St([][Symbol.iterator]())) : ee,
  "%JSON%": typeof JSON == "object" ? JSON : ee,
  "%Map%": typeof Map > "u" ? ee : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !mr ? ee : St((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? ee : Promise,
  "%Proxy%": typeof Proxy > "u" ? ee : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? ee : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? ee : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !mr ? ee : St((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ee : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": mr ? St(""[Symbol.iterator]()) : ee,
  "%Symbol%": mr ? Symbol : ee,
  "%SyntaxError%": Fr,
  "%ThrowTypeError%": tb,
  "%TypedArray%": rb,
  "%TypeError%": Cr,
  "%Uint8Array%": typeof Uint8Array > "u" ? ee : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ee : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? ee : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? ee : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? ee : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? ee : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? ee : WeakSet
};
try {
  null.error;
} catch (e) {
  var nb = St(St(e));
  ir["%Error.prototype%"] = nb;
}
var ib = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Ra("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Ra("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Ra("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && (r = St(i.prototype));
  }
  return ir[t] = r, r;
}, Us = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Nn = Gu, wi = eb, ab = Nn.call(Function.call, Array.prototype.concat), ob = Nn.call(Function.apply, Array.prototype.splice), Vs = Nn.call(Function.call, String.prototype.replace), Ii = Nn.call(Function.call, String.prototype.slice), ub = Nn.call(Function.call, RegExp.prototype.exec), cb = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, sb = /\\(\\)?/g, lb = function(t) {
  var r = Ii(t, 0, 1), n = Ii(t, -1);
  if (r === "%" && n !== "%")
    throw new Fr("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Fr("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Vs(t, cb, function(a, o, c, h) {
    i[i.length] = c ? Vs(h, sb, "$1") : o || a;
  }), i;
}, fb = function(t, r) {
  var n = t, i;
  if (wi(Us, n) && (i = Us[n], n = "%" + i[0] + "%"), wi(ir, n)) {
    var a = ir[n];
    if (a === Er && (a = ib(n)), typeof a > "u" && !r)
      throw new Cr("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new Fr("intrinsic " + t + " does not exist!");
}, Lt = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Cr("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Cr('"allowMissing" argument must be a boolean');
  if (ub(/^%?[^%]*%?$/, t) === null)
    throw new Fr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = lb(t), i = n.length > 0 ? n[0] : "", a = fb("%" + i + "%", r), o = a.name, c = a.value, h = !1, u = a.alias;
  u && (i = u[0], ob(n, ab([0, 1], u)));
  for (var d = 1, s = !0; d < n.length; d += 1) {
    var p = n[d], f = Ii(p, 0, 1), y = Ii(p, -1);
    if ((f === '"' || f === "'" || f === "`" || y === '"' || y === "'" || y === "`") && f !== y)
      throw new Fr("property names with quotes must have matching quotes");
    if ((p === "constructor" || !s) && (h = !0), i += "." + p, o = "%" + i + "%", wi(ir, o))
      c = ir[o];
    else if (c != null) {
      if (!(p in c)) {
        if (!r)
          throw new Cr("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (nr && d + 1 >= n.length) {
        var l = nr(c, p);
        s = !!l, s && "get" in l && !("originalValue" in l.get) ? c = l.get : c = c[p];
      } else
        s = wi(c, p), c = c[p];
      s && !h && (ir[o] = c);
    }
  }
  return c;
}, db = Lt, Yo = db("%Object.defineProperty%", !0), Jo = function() {
  if (Yo)
    try {
      return Yo({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
Jo.hasArrayLengthDefineBug = function() {
  if (!Jo())
    return null;
  try {
    return Yo([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var pb = Jo, yb = Uu, hb = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", vb = Object.prototype.toString, mb = Array.prototype.concat, Md = Object.defineProperty, gb = function(e) {
  return typeof e == "function" && vb.call(e) === "[object Function]";
}, bb = pb(), Rd = Md && bb, _b = function(e, t, r, n) {
  t in e && (!gb(n) || !n()) || (Rd ? Md(e, t, {
    configurable: !0,
    enumerable: !1,
    value: r,
    writable: !0
  }) : e[t] = r);
}, Nd = function(e, t) {
  var r = arguments.length > 2 ? arguments[2] : {}, n = yb(t);
  hb && (n = mb.call(n, Object.getOwnPropertySymbols(t)));
  for (var i = 0; i < n.length; i += 1)
    _b(e, n[i], t[n[i]], r[n[i]]);
};
Nd.supportsDescriptors = !!Rd;
var sr = Nd, Dd = { exports: {} };
(function(e) {
  var t = Gu, r = Lt, n = r("%Function.prototype.apply%"), i = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || t.call(i, n), o = r("%Object.getOwnPropertyDescriptor%", !0), c = r("%Object.defineProperty%", !0), h = r("%Math.max%");
  if (c)
    try {
      c({}, "a", { value: 1 });
    } catch {
      c = null;
    }
  e.exports = function(s) {
    var p = a(t, i, arguments);
    if (o && c) {
      var f = o(p, "length");
      f.configurable && c(
        p,
        "length",
        { value: 1 + h(0, s.length - (arguments.length - 1)) }
      );
    }
    return p;
  };
  var u = function() {
    return a(t, n, arguments);
  };
  c ? c(e.exports, "apply", { value: u }) : e.exports.apply = u;
})(Dd);
var Dn = Dd.exports, kd = Lt, Bd = Dn, Ob = Bd(kd("String.prototype.indexOf")), yt = function(t, r) {
  var n = kd(t, !!r);
  return typeof n == "function" && Ob(t, ".prototype.") > -1 ? Bd(n) : n;
}, Ab = Uu, Ld = ia(), $d = yt, Gs = Object, Pb = $d("Array.prototype.push"), qs = $d("Object.prototype.propertyIsEnumerable"), Sb = Ld ? Object.getOwnPropertySymbols : null, Fd = function(t, r) {
  if (t == null)
    throw new TypeError("target must be an object");
  var n = Gs(t);
  if (arguments.length === 1)
    return n;
  for (var i = 1; i < arguments.length; ++i) {
    var a = Gs(arguments[i]), o = Ab(a), c = Ld && (Object.getOwnPropertySymbols || Sb);
    if (c)
      for (var h = c(a), u = 0; u < h.length; ++u) {
        var d = h[u];
        qs(a, d) && Pb(o, d);
      }
    for (var s = 0; s < o.length; ++s) {
      var p = o[s];
      if (qs(a, p)) {
        var f = a[p];
        n[p] = f;
      }
    }
  }
  return n;
}, Da = Fd, Eb = function() {
  if (!Object.assign)
    return !1;
  for (var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, n = 0; n < t.length; ++n)
    r[t[n]] = t[n];
  var i = Object.assign({}, r), a = "";
  for (var o in i)
    a += o;
  return e !== a;
}, Tb = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var e = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(e, "xy");
  } catch {
    return e[1] === "y";
  }
  return !1;
}, Ud = function() {
  return !Object.assign || Eb() || Tb() ? Da : Object.assign;
}, wb = sr, Ib = Ud, jb = function() {
  var t = Ib();
  return wb(
    Object,
    { assign: t },
    { assign: function() {
      return Object.assign !== t;
    } }
  ), t;
}, Cb = sr, Mb = Dn, Rb = Fd, Vd = Ud, Nb = jb, Db = Mb.apply(Vd()), Gd = function(t, r) {
  return Db(Object, arguments);
};
Cb(Gd, {
  getPolyfill: Vd,
  implementation: Rb,
  shim: Nb
});
var kb = Gd, qd = { exports: {} }, Pn = function() {
  return typeof (function() {
  }).name == "string";
}, mn = Object.getOwnPropertyDescriptor;
if (mn)
  try {
    mn([], "length");
  } catch {
    mn = null;
  }
Pn.functionsHaveConfigurableNames = function() {
  if (!Pn() || !mn)
    return !1;
  var t = mn(function() {
  }, "name");
  return !!t && !!t.configurable;
};
var Bb = Function.prototype.bind;
Pn.boundFunctionsHaveNames = function() {
  return Pn() && typeof Bb == "function" && (function() {
  }).bind().name !== "";
};
var Lb = Pn;
(function(e) {
  var t = Lb.functionsHaveConfigurableNames(), r = Object, n = TypeError;
  e.exports = function() {
    if (this != null && this !== r(this))
      throw new n("RegExp.prototype.flags getter called on non-object");
    var a = "";
    return this.hasIndices && (a += "d"), this.global && (a += "g"), this.ignoreCase && (a += "i"), this.multiline && (a += "m"), this.dotAll && (a += "s"), this.unicode && (a += "u"), this.sticky && (a += "y"), a;
  }, t && Object.defineProperty && Object.defineProperty(e.exports, "name", { value: "get flags" });
})(qd);
var Wd = qd.exports, $b = Wd, Fb = sr.supportsDescriptors, Ub = Object.getOwnPropertyDescriptor, Hd = function() {
  if (Fb && /a/mig.flags === "gim") {
    var t = Ub(RegExp.prototype, "flags");
    if (t && typeof t.get == "function" && typeof RegExp.prototype.dotAll == "boolean" && typeof RegExp.prototype.hasIndices == "boolean") {
      var r = "", n = {};
      if (Object.defineProperty(n, "hasIndices", {
        get: function() {
          r += "d";
        }
      }), Object.defineProperty(n, "sticky", {
        get: function() {
          r += "y";
        }
      }), r === "dy")
        return t.get;
    }
  }
  return $b;
}, Vb = sr.supportsDescriptors, Gb = Hd, qb = Object.getOwnPropertyDescriptor, Wb = Object.defineProperty, Hb = TypeError, Ws = Object.getPrototypeOf, zb = /a/, Kb = function() {
  if (!Vb || !Ws)
    throw new Hb("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t = Gb(), r = Ws(zb), n = qb(r, "flags");
  return (!n || n.get !== t) && Wb(r, "flags", {
    configurable: !0,
    enumerable: !1,
    get: t
  }), t;
}, Qb = sr, Yb = Dn, Jb = Wd, zd = Hd, Xb = Kb, Kd = Yb(zd());
Qb(Kd, {
  getPolyfill: zd,
  implementation: Jb,
  shim: Xb
});
var Zb = Kd, li = { exports: {} }, xb = ia, Wt = function() {
  return xb() && !!Symbol.toStringTag;
}, e_ = Wt(), t_ = yt, Xo = t_("Object.prototype.toString"), aa = function(t) {
  return e_ && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : Xo(t) === "[object Arguments]";
}, Qd = function(t) {
  return aa(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && Xo(t) !== "[object Array]" && Xo(t.callee) === "[object Function]";
}, r_ = function() {
  return aa(arguments);
}();
aa.isLegacyArguments = Qd;
var Yd = r_ ? aa : Qd, n_ = {}.toString, Jd = Array.isArray || function(e) {
  return n_.call(e) == "[object Array]";
}, i_ = String.prototype.valueOf, a_ = function(t) {
  try {
    return i_.call(t), !0;
  } catch {
    return !1;
  }
}, o_ = Object.prototype.toString, u_ = "[object String]", c_ = Wt(), Xd = function(t) {
  return typeof t == "string" ? !0 : typeof t != "object" ? !1 : c_ ? a_(t) : o_.call(t) === u_;
}, qu = typeof Map == "function" && Map.prototype ? Map : null, s_ = typeof Set == "function" && Set.prototype ? Set : null, ji;
qu || (ji = function(t) {
  return !1;
});
var Zd = qu ? Map.prototype.has : null, Hs = s_ ? Set.prototype.has : null;
!ji && !Zd && (ji = function(t) {
  return !1;
});
var xd = ji || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Zd.call(t), Hs)
      try {
        Hs.call(t);
      } catch {
        return !0;
      }
    return t instanceof qu;
  } catch {
  }
  return !1;
}, l_ = typeof Map == "function" && Map.prototype ? Map : null, Wu = typeof Set == "function" && Set.prototype ? Set : null, Ci;
Wu || (Ci = function(t) {
  return !1;
});
var zs = l_ ? Map.prototype.has : null, ep = Wu ? Set.prototype.has : null;
!Ci && !ep && (Ci = function(t) {
  return !1;
});
var tp = Ci || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (ep.call(t), zs)
      try {
        zs.call(t);
      } catch {
        return !0;
      }
    return t instanceof Wu;
  } catch {
  }
  return !1;
}, Ks = Yd;
if (Vu() || ia()) {
  var ka = Symbol.iterator;
  li.exports = function(t) {
    if (t != null && typeof t[ka] < "u")
      return t[ka]();
    if (Ks(t))
      return Array.prototype[ka].call(t);
  };
} else {
  var f_ = Jd, d_ = Xd, Qs = Lt, p_ = Qs("%Map%", !0), y_ = Qs("%Set%", !0), mt = yt, Ys = mt("Array.prototype.push"), Js = mt("String.prototype.charCodeAt"), h_ = mt("String.prototype.slice"), v_ = function(t, r) {
    var n = t.length;
    if (r + 1 >= n)
      return r + 1;
    var i = Js(t, r);
    if (i < 55296 || i > 56319)
      return r + 1;
    var a = Js(t, r + 1);
    return a < 56320 || a > 57343 ? r + 1 : r + 2;
  }, Ba = function(t) {
    var r = 0;
    return {
      next: function() {
        var i = r >= t.length, a;
        return i || (a = t[r], r += 1), {
          done: i,
          value: a
        };
      }
    };
  }, Xs = function(t, r) {
    if (f_(t) || Ks(t))
      return Ba(t);
    if (d_(t)) {
      var n = 0;
      return {
        next: function() {
          var a = v_(t, n), o = h_(t, n, a);
          return n = a, {
            done: a > t.length,
            value: o
          };
        }
      };
    }
    if (r && typeof t["_es6-shim iterator_"] < "u")
      return t["_es6-shim iterator_"]();
  };
  if (!p_ && !y_)
    li.exports = function(t) {
      if (t != null)
        return Xs(t, !0);
    };
  else {
    var m_ = xd, g_ = tp, Zs = mt("Map.prototype.forEach", !0), xs = mt("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var el = mt("Map.prototype.iterator", !0), tl = mt("Set.prototype.iterator", !0), rl = function(e) {
        var t = !1;
        return {
          next: function() {
            try {
              return {
                done: t,
                value: t ? void 0 : e.next()
              };
            } catch {
              return t = !0, {
                done: !0,
                value: void 0
              };
            }
          }
        };
      };
    var nl = mt("Map.prototype.@@iterator", !0) || mt("Map.prototype._es6-shim iterator_", !0), il = mt("Set.prototype.@@iterator", !0) || mt("Set.prototype._es6-shim iterator_", !0), b_ = function(t) {
      if (m_(t)) {
        if (el)
          return rl(el(t));
        if (nl)
          return nl(t);
        if (Zs) {
          var r = [];
          return Zs(t, function(i, a) {
            Ys(r, [a, i]);
          }), Ba(r);
        }
      }
      if (g_(t)) {
        if (tl)
          return rl(tl(t));
        if (il)
          return il(t);
        if (xs) {
          var n = [];
          return xs(t, function(i) {
            Ys(n, i);
          }), Ba(n);
        }
      }
    };
    li.exports = function(t) {
      return b_(t) || Xs(t);
    };
  }
}
var __ = li.exports;
const O_ = {}, A_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: O_
}, Symbol.toStringTag, { value: "Module" })), P_ = /* @__PURE__ */ ph(A_);
var Hu = typeof Map == "function" && Map.prototype, La = Object.getOwnPropertyDescriptor && Hu ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Mi = Hu && La && typeof La.get == "function" ? La.get : null, al = Hu && Map.prototype.forEach, zu = typeof Set == "function" && Set.prototype, $a = Object.getOwnPropertyDescriptor && zu ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Ri = zu && $a && typeof $a.get == "function" ? $a.get : null, ol = zu && Set.prototype.forEach, S_ = typeof WeakMap == "function" && WeakMap.prototype, gn = S_ ? WeakMap.prototype.has : null, E_ = typeof WeakSet == "function" && WeakSet.prototype, bn = E_ ? WeakSet.prototype.has : null, T_ = typeof WeakRef == "function" && WeakRef.prototype, ul = T_ ? WeakRef.prototype.deref : null, w_ = Boolean.prototype.valueOf, I_ = Object.prototype.toString, j_ = Function.prototype.toString, C_ = String.prototype.match, Ku = String.prototype.slice, Vt = String.prototype.replace, M_ = String.prototype.toUpperCase, cl = String.prototype.toLowerCase, rp = RegExp.prototype.test, sl = Array.prototype.concat, Et = Array.prototype.join, R_ = Array.prototype.slice, ll = Math.floor, Zo = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Fa = Object.getOwnPropertySymbols, xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Ur = typeof Symbol == "function" && typeof Symbol.iterator == "object", qe = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ur || "symbol") ? Symbol.toStringTag : null, np = Object.prototype.propertyIsEnumerable, fl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function dl(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || rp.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -ll(-e) : ll(e);
    if (n !== e) {
      var i = String(n), a = Ku.call(t, i.length + 1);
      return Vt.call(i, r, "$&_") + "." + Vt.call(Vt.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Vt.call(t, r, "$&_");
}
var eu = P_, pl = eu.custom, yl = ap(pl) ? pl : null, N_ = function e(t, r, n, i) {
  var a = r || {};
  if (Ut(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Ut(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = Ut(a, "customInspect") ? a.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Ut(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Ut(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var c = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return up(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var h = String(t);
    return c ? dl(t, h) : h;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return c ? dl(t, u) : u;
  }
  var d = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= d && d > 0 && typeof t == "object")
    return tu(t) ? "[Array]" : "[Object]";
  var s = X_(a, n);
  if (typeof i > "u")
    i = [];
  else if (op(i, t) >= 0)
    return "[Circular]";
  function p(B, N, F) {
    if (N && (i = R_.call(i), i.push(N)), F) {
      var V = {
        depth: a.depth
      };
      return Ut(a, "quoteStyle") && (V.quoteStyle = a.quoteStyle), e(B, V, n + 1, i);
    }
    return e(B, a, n + 1, i);
  }
  if (typeof t == "function" && !hl(t)) {
    var f = G_(t), y = Kn(t, p);
    return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (y.length > 0 ? " { " + Et.call(y, ", ") + " }" : "");
  }
  if (ap(t)) {
    var l = Ur ? Vt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : xo.call(t);
    return typeof t == "object" && !Ur ? an(l) : l;
  }
  if (Q_(t)) {
    for (var v = "<" + cl.call(String(t.nodeName)), m = t.attributes || [], g = 0; g < m.length; g++)
      v += " " + m[g].name + "=" + ip(D_(m[g].value), "double", a);
    return v += ">", t.childNodes && t.childNodes.length && (v += "..."), v += "</" + cl.call(String(t.nodeName)) + ">", v;
  }
  if (tu(t)) {
    if (t.length === 0)
      return "[]";
    var O = Kn(t, p);
    return s && !J_(O) ? "[" + ru(O, s) + "]" : "[ " + Et.call(O, ", ") + " ]";
  }
  if (B_(t)) {
    var _ = Kn(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !np.call(t, "cause") ? "{ [" + String(t) + "] " + Et.call(sl.call("[cause]: " + p(t.cause), _), ", ") + " }" : _.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Et.call(_, ", ") + " }";
  }
  if (typeof t == "object" && o) {
    if (yl && typeof t[yl] == "function" && eu)
      return eu(t, { depth: d - n });
    if (o !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (q_(t)) {
    var T = [];
    return al && al.call(t, function(B, N) {
      T.push(p(N, t, !0) + " => " + p(B, t));
    }), vl("Map", Mi.call(t), T, s);
  }
  if (z_(t)) {
    var P = [];
    return ol && ol.call(t, function(B) {
      P.push(p(B, t));
    }), vl("Set", Ri.call(t), P, s);
  }
  if (W_(t))
    return Ua("WeakMap");
  if (K_(t))
    return Ua("WeakSet");
  if (H_(t))
    return Ua("WeakRef");
  if ($_(t))
    return an(p(Number(t)));
  if (U_(t))
    return an(p(Zo.call(t)));
  if (F_(t))
    return an(w_.call(t));
  if (L_(t))
    return an(p(String(t)));
  if (!k_(t) && !hl(t)) {
    var E = Kn(t, p), S = fl ? fl(t) === Object.prototype : t instanceof Object || t.constructor === Object, w = t instanceof Object ? "" : "null prototype", I = !S && qe && Object(t) === t && qe in t ? Ku.call(Ht(t), 8, -1) : w ? "Object" : "", C = S || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", k = C + (I || w ? "[" + Et.call(sl.call([], I || [], w || []), ": ") + "] " : "");
    return E.length === 0 ? k + "{}" : s ? k + "{" + ru(E, s) + "}" : k + "{ " + Et.call(E, ", ") + " }";
  }
  return String(t);
};
function ip(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function D_(e) {
  return Vt.call(String(e), /"/g, "&quot;");
}
function tu(e) {
  return Ht(e) === "[object Array]" && (!qe || !(typeof e == "object" && qe in e));
}
function k_(e) {
  return Ht(e) === "[object Date]" && (!qe || !(typeof e == "object" && qe in e));
}
function hl(e) {
  return Ht(e) === "[object RegExp]" && (!qe || !(typeof e == "object" && qe in e));
}
function B_(e) {
  return Ht(e) === "[object Error]" && (!qe || !(typeof e == "object" && qe in e));
}
function L_(e) {
  return Ht(e) === "[object String]" && (!qe || !(typeof e == "object" && qe in e));
}
function $_(e) {
  return Ht(e) === "[object Number]" && (!qe || !(typeof e == "object" && qe in e));
}
function F_(e) {
  return Ht(e) === "[object Boolean]" && (!qe || !(typeof e == "object" && qe in e));
}
function ap(e) {
  if (Ur)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !xo)
    return !1;
  try {
    return xo.call(e), !0;
  } catch {
  }
  return !1;
}
function U_(e) {
  if (!e || typeof e != "object" || !Zo)
    return !1;
  try {
    return Zo.call(e), !0;
  } catch {
  }
  return !1;
}
var V_ = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function Ut(e, t) {
  return V_.call(e, t);
}
function Ht(e) {
  return I_.call(e);
}
function G_(e) {
  if (e.name)
    return e.name;
  var t = C_.call(j_.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function op(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function q_(e) {
  if (!Mi || !e || typeof e != "object")
    return !1;
  try {
    Mi.call(e);
    try {
      Ri.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function W_(e) {
  if (!gn || !e || typeof e != "object")
    return !1;
  try {
    gn.call(e, gn);
    try {
      bn.call(e, bn);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function H_(e) {
  if (!ul || !e || typeof e != "object")
    return !1;
  try {
    return ul.call(e), !0;
  } catch {
  }
  return !1;
}
function z_(e) {
  if (!Ri || !e || typeof e != "object")
    return !1;
  try {
    Ri.call(e);
    try {
      Mi.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function K_(e) {
  if (!bn || !e || typeof e != "object")
    return !1;
  try {
    bn.call(e, bn);
    try {
      gn.call(e, gn);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Q_(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function up(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return up(Ku.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = Vt.call(Vt.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Y_);
  return ip(i, "single", t);
}
function Y_(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + M_.call(t.toString(16));
}
function an(e) {
  return "Object(" + e + ")";
}
function Ua(e) {
  return e + " { ? }";
}
function vl(e, t, r, n) {
  var i = n ? ru(r, n) : Et.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function J_(e) {
  for (var t = 0; t < e.length; t++)
    if (op(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function X_(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = Et.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Et.call(Array(t + 1), r)
  };
}
function ru(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + Et.call(e, "," + r) + `
` + t.prev;
}
function Kn(e, t) {
  var r = tu(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = Ut(e, i) ? t(e[i], e) : "";
  }
  var a = typeof Fa == "function" ? Fa(e) : [], o;
  if (Ur) {
    o = {};
    for (var c = 0; c < a.length; c++)
      o["$" + a[c]] = a[c];
  }
  for (var h in e)
    Ut(e, h) && (r && String(Number(h)) === h && h < e.length || Ur && o["$" + h] instanceof Symbol || (rp.call(/[^\w$]/, h) ? n.push(t(h, e) + ": " + t(e[h], e)) : n.push(h + ": " + t(e[h], e))));
  if (typeof Fa == "function")
    for (var u = 0; u < a.length; u++)
      np.call(e, a[u]) && n.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
  return n;
}
var Qu = Lt, Jr = yt, Z_ = N_, x_ = Qu("%TypeError%"), Qn = Qu("%WeakMap%", !0), Yn = Qu("%Map%", !0), eO = Jr("WeakMap.prototype.get", !0), tO = Jr("WeakMap.prototype.set", !0), rO = Jr("WeakMap.prototype.has", !0), nO = Jr("Map.prototype.get", !0), iO = Jr("Map.prototype.set", !0), aO = Jr("Map.prototype.has", !0), Yu = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = e.next, e.next = n, n;
}, oO = function(e, t) {
  var r = Yu(e, t);
  return r && r.value;
}, uO = function(e, t, r) {
  var n = Yu(e, t);
  n ? n.value = r : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: r
  };
}, cO = function(e, t) {
  return !!Yu(e, t);
}, sO = function() {
  var t, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new x_("Side channel does not contain " + Z_(a));
    },
    get: function(a) {
      if (Qn && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return eO(t, a);
      } else if (Yn) {
        if (r)
          return nO(r, a);
      } else if (n)
        return oO(n, a);
    },
    has: function(a) {
      if (Qn && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return rO(t, a);
      } else if (Yn) {
        if (r)
          return aO(r, a);
      } else if (n)
        return cO(n, a);
      return !1;
    },
    set: function(a, o) {
      Qn && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new Qn()), tO(t, a, o)) : Yn ? (r || (r = new Yn()), iO(r, a, o)) : (n || (n = { key: {}, next: null }), uO(n, a, o));
    }
  };
  return i;
}, ml = function(e) {
  return e !== e;
}, cp = function(t, r) {
  return t === 0 && r === 0 ? 1 / t === 1 / r : !!(t === r || ml(t) && ml(r));
}, lO = cp, sp = function() {
  return typeof Object.is == "function" ? Object.is : lO;
}, fO = sp, dO = sr, pO = function() {
  var t = fO();
  return dO(Object, { is: t }, {
    is: function() {
      return Object.is !== t;
    }
  }), t;
}, yO = sr, hO = Dn, vO = cp, lp = sp, mO = pO, fp = hO(lp(), Object);
yO(fp, {
  getPolyfill: lp,
  implementation: vO,
  shim: mO
});
var gO = fp, dp = Function.prototype.toString, jr = typeof Reflect == "object" && Reflect !== null && Reflect.apply, nu, fi;
if (typeof jr == "function" && typeof Object.defineProperty == "function")
  try {
    nu = Object.defineProperty({}, "length", {
      get: function() {
        throw fi;
      }
    }), fi = {}, jr(function() {
      throw 42;
    }, null, nu);
  } catch (e) {
    e !== fi && (jr = null);
  }
else
  jr = null;
var bO = /^\s*class\b/, iu = function(t) {
  try {
    var r = dp.call(t);
    return bO.test(r);
  } catch {
    return !1;
  }
}, Va = function(t) {
  try {
    return iu(t) ? !1 : (dp.call(t), !0);
  } catch {
    return !1;
  }
}, di = Object.prototype.toString, _O = "[object Object]", OO = "[object Function]", AO = "[object GeneratorFunction]", PO = "[object HTMLAllCollection]", SO = "[object HTML document.all class]", EO = "[object HTMLCollection]", TO = typeof Symbol == "function" && !!Symbol.toStringTag, wO = !(0 in [,]), au = function() {
  return !1;
};
if (typeof document == "object") {
  var IO = document.all;
  di.call(IO) === di.call(document.all) && (au = function(t) {
    if ((wO || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var r = di.call(t);
        return (r === PO || r === SO || r === EO || r === _O) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var jO = jr ? function(t) {
  if (au(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    jr(t, null, nu);
  } catch (r) {
    if (r !== fi)
      return !1;
  }
  return !iu(t) && Va(t);
} : function(t) {
  if (au(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (TO)
    return Va(t);
  if (iu(t))
    return !1;
  var r = di.call(t);
  return r !== OO && r !== AO && !/^\[object HTML/.test(r) ? !1 : Va(t);
}, CO = jO, MO = Object.prototype.toString, pp = Object.prototype.hasOwnProperty, RO = function(t, r, n) {
  for (var i = 0, a = t.length; i < a; i++)
    pp.call(t, i) && (n == null ? r(t[i], i, t) : r.call(n, t[i], i, t));
}, NO = function(t, r, n) {
  for (var i = 0, a = t.length; i < a; i++)
    n == null ? r(t.charAt(i), i, t) : r.call(n, t.charAt(i), i, t);
}, DO = function(t, r, n) {
  for (var i in t)
    pp.call(t, i) && (n == null ? r(t[i], i, t) : r.call(n, t[i], i, t));
}, kO = function(t, r, n) {
  if (!CO(r))
    throw new TypeError("iterator must be a function");
  var i;
  arguments.length >= 3 && (i = n), MO.call(t) === "[object Array]" ? RO(t, r, i) : typeof t == "string" ? NO(t, r, i) : DO(t, r, i);
}, yp = kO, Ga = [
  "BigInt64Array",
  "BigUint64Array",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray"
], BO = typeof globalThis > "u" ? b : globalThis, hp = function() {
  for (var t = [], r = 0; r < Ga.length; r++)
    typeof BO[Ga[r]] == "function" && (t[t.length] = Ga[r]);
  return t;
}, LO = Lt, pi = LO("%Object.getOwnPropertyDescriptor%", !0);
if (pi)
  try {
    pi([], "length");
  } catch {
    pi = null;
  }
var vp = pi, mp = yp, $O = hp, Ju = yt, FO = Ju("Object.prototype.toString"), gp = Wt(), yi = vp, UO = typeof globalThis > "u" ? b : globalThis, bp = $O(), VO = Ju("Array.prototype.indexOf", !0) || function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === r)
      return n;
  return -1;
}, GO = Ju("String.prototype.slice"), _p = {}, qa = Object.getPrototypeOf;
gp && yi && qa && mp(bp, function(e) {
  var t = new UO[e]();
  if (Symbol.toStringTag in t) {
    var r = qa(t), n = yi(r, Symbol.toStringTag);
    if (!n) {
      var i = qa(r);
      n = yi(i, Symbol.toStringTag);
    }
    _p[e] = n.get;
  }
});
var qO = function(t) {
  var r = !1;
  return mp(_p, function(n, i) {
    if (!r)
      try {
        r = n.call(t) === i;
      } catch {
      }
  }), r;
}, Op = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!gp || !(Symbol.toStringTag in t)) {
    var r = GO(FO(t), 8, -1);
    return VO(bp, r) > -1;
  }
  return yi ? qO(t) : !1;
}, WO = Dn, HO = yt, Ap = Lt, zO = Op, gl = Ap("ArrayBuffer", !0), bl = Ap("Float32Array", !0), hi = HO("ArrayBuffer.prototype.byteLength", !0), _l = gl && !hi && new gl().slice, Ol = _l && WO(_l), KO = hi || Ol ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return hi ? hi(t) : Ol(t, 0), !0;
  } catch {
    return !1;
  }
} : bl ? function(t) {
  try {
    return new bl(t).buffer === t && !zO(t);
  } catch (r) {
    return typeof t == "object" && r.name === "RangeError";
  }
} : function(t) {
  return !1;
}, QO = Date.prototype.getDay, YO = function(t) {
  try {
    return QO.call(t), !0;
  } catch {
    return !1;
  }
}, JO = Object.prototype.toString, XO = "[object Date]", ZO = Wt(), xO = function(t) {
  return typeof t != "object" || t === null ? !1 : ZO ? YO(t) : JO.call(t) === XO;
}, ou = yt, Pp = Wt(), Sp, Ep, uu, cu;
if (Pp) {
  Sp = ou("Object.prototype.hasOwnProperty"), Ep = ou("RegExp.prototype.exec"), uu = {};
  var Wa = function() {
    throw uu;
  };
  cu = {
    toString: Wa,
    valueOf: Wa
  }, typeof Symbol.toPrimitive == "symbol" && (cu[Symbol.toPrimitive] = Wa);
}
var eA = ou("Object.prototype.toString"), tA = Object.getOwnPropertyDescriptor, rA = "[object RegExp]", nA = Pp ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  var r = tA(t, "lastIndex"), n = r && Sp(r, "value");
  if (!n)
    return !1;
  try {
    Ep(t, cu);
  } catch (i) {
    return i === uu;
  }
} : function(t) {
  return !t || typeof t != "object" && typeof t != "function" ? !1 : eA(t) === rA;
}, iA = yt, Al = iA("SharedArrayBuffer.prototype.byteLength", !0), aA = Al ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Al(t), !0;
  } catch {
    return !1;
  }
} : function(t) {
  return !1;
}, oA = Number.prototype.toString, uA = function(t) {
  try {
    return oA.call(t), !0;
  } catch {
    return !1;
  }
}, cA = Object.prototype.toString, sA = "[object Number]", lA = Wt(), fA = function(t) {
  return typeof t == "number" ? !0 : typeof t != "object" ? !1 : lA ? uA(t) : cA.call(t) === sA;
}, Tp = yt, dA = Tp("Boolean.prototype.toString"), pA = Tp("Object.prototype.toString"), yA = function(t) {
  try {
    return dA(t), !0;
  } catch {
    return !1;
  }
}, hA = "[object Boolean]", vA = Wt(), mA = function(t) {
  return typeof t == "boolean" ? !0 : t === null || typeof t != "object" ? !1 : vA && Symbol.toStringTag in t ? yA(t) : pA(t) === hA;
}, su = { exports: {} }, gA = Object.prototype.toString, bA = Vu();
if (bA) {
  var _A = Symbol.prototype.toString, OA = /^Symbol\(.*\)$/, AA = function(t) {
    return typeof t.valueOf() != "symbol" ? !1 : OA.test(_A.call(t));
  };
  su.exports = function(t) {
    if (typeof t == "symbol")
      return !0;
    if (gA.call(t) !== "[object Symbol]")
      return !1;
    try {
      return AA(t);
    } catch {
      return !1;
    }
  };
} else
  su.exports = function(t) {
    return !1;
  };
var PA = su.exports, lu = { exports: {} }, Pl = typeof BigInt < "u" && BigInt, SA = function() {
  return typeof Pl == "function" && typeof BigInt == "function" && typeof Pl(42) == "bigint" && typeof BigInt(42) == "bigint";
}, EA = SA();
if (EA) {
  var TA = BigInt.prototype.valueOf, wA = function(t) {
    try {
      return TA.call(t), !0;
    } catch {
    }
    return !1;
  };
  lu.exports = function(t) {
    return t === null || typeof t > "u" || typeof t == "boolean" || typeof t == "string" || typeof t == "number" || typeof t == "symbol" || typeof t == "function" ? !1 : typeof t == "bigint" ? !0 : wA(t);
  };
} else
  lu.exports = function(t) {
    return !1;
  };
var IA = lu.exports, jA = Xd, CA = fA, MA = mA, RA = PA, NA = IA, DA = function(t) {
  if (t == null || typeof t != "object" && typeof t != "function")
    return null;
  if (jA(t))
    return "String";
  if (CA(t))
    return "Number";
  if (MA(t))
    return "Boolean";
  if (RA(t))
    return "Symbol";
  if (NA(t))
    return "BigInt";
}, Ni = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, Sl = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, Di;
Ni || (Di = function(t) {
  return !1;
});
var fu = Ni ? Ni.prototype.has : null, Ha = Sl ? Sl.prototype.has : null;
!Di && !fu && (Di = function(t) {
  return !1;
});
var kA = Di || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (fu.call(t, fu), Ha)
      try {
        Ha.call(t, Ha);
      } catch {
        return !0;
      }
    return t instanceof Ni;
  } catch {
  }
  return !1;
}, du = { exports: {} }, BA = Lt, wp = yt, LA = BA("%WeakSet%", !0), za = wp("WeakSet.prototype.has", !0);
if (za) {
  var Ka = wp("WeakMap.prototype.has", !0);
  du.exports = function(t) {
    if (!t || typeof t != "object")
      return !1;
    try {
      if (za(t, za), Ka)
        try {
          Ka(t, Ka);
        } catch {
          return !0;
        }
      return t instanceof LA;
    } catch {
    }
    return !1;
  };
} else
  du.exports = function(t) {
    return !1;
  };
var $A = du.exports, FA = xd, UA = tp, VA = kA, GA = $A, qA = function(t) {
  if (t && typeof t == "object") {
    if (FA(t))
      return "Map";
    if (UA(t))
      return "Set";
    if (VA(t))
      return "WeakMap";
    if (GA(t))
      return "WeakSet";
  }
  return !1;
}, Ip = yp, WA = hp, jp = yt, Qa = vp, HA = jp("Object.prototype.toString"), Cp = Wt(), El = typeof globalThis > "u" ? b : globalThis, zA = WA(), KA = jp("String.prototype.slice"), Mp = {}, Ya = Object.getPrototypeOf;
Cp && Qa && Ya && Ip(zA, function(e) {
  if (typeof El[e] == "function") {
    var t = new El[e]();
    if (Symbol.toStringTag in t) {
      var r = Ya(t), n = Qa(r, Symbol.toStringTag);
      if (!n) {
        var i = Ya(r);
        n = Qa(i, Symbol.toStringTag);
      }
      Mp[e] = n.get;
    }
  }
});
var QA = function(t) {
  var r = !1;
  return Ip(Mp, function(n, i) {
    if (!r)
      try {
        var a = n.call(t);
        a === i && (r = a);
      } catch {
      }
  }), r;
}, YA = Op, JA = function(t) {
  return YA(t) ? !Cp || !(Symbol.toStringTag in t) ? KA(HA(t), 8, -1) : QA(t) : !1;
}, Rp = kb, Ot = yt, Tl = Zb, XA = Lt, Vr = __, ZA = sO, wl = gO, Il = Yd, jl = Jd, Cl = KO, Ml = xO, Rl = nA, Nl = aA, Dl = Uu, kl = DA, Bl = qA, Ll = JA, $l = Ot("ArrayBuffer.prototype.byteLength", !0) || function(t) {
  return t.byteLength;
}, Fl = Ot("SharedArrayBuffer.prototype.byteLength", !0), Ul = Ot("Date.prototype.getTime"), Ja = Object.getPrototypeOf, Vl = Ot("Object.prototype.toString"), ki = XA("%Set%", !0), pu = Ot("Map.prototype.has", !0), Bi = Ot("Map.prototype.get", !0), Gl = Ot("Map.prototype.size", !0), Li = Ot("Set.prototype.add", !0), Np = Ot("Set.prototype.delete", !0), $i = Ot("Set.prototype.has", !0), vi = Ot("Set.prototype.size", !0);
function ql(e, t, r, n) {
  for (var i = Vr(e), a; (a = i.next()) && !a.done; )
    if (bt(t, a.value, r, n))
      return Np(e, a.value), !0;
  return !1;
}
function Dp(e) {
  if (typeof e > "u")
    return null;
  if (typeof e != "object")
    return typeof e == "symbol" ? !1 : typeof e == "string" || typeof e == "number" ? +e == +e : !0;
}
function xA(e, t, r, n, i, a) {
  var o = Dp(r);
  if (o != null)
    return o;
  var c = Bi(t, o), h = Rp({}, i, { strict: !1 });
  return typeof c > "u" && !pu(t, o) || !bt(n, c, h, a) ? !1 : !pu(e, o) && bt(n, c, h, a);
}
function eP(e, t, r) {
  var n = Dp(r);
  return n ?? ($i(t, n) && !$i(e, n));
}
function Wl(e, t, r, n, i, a) {
  for (var o = Vr(e), c, h; (c = o.next()) && !c.done; )
    if (h = c.value, // eslint-disable-next-line no-use-before-define
    bt(r, h, i, a) && bt(n, Bi(t, h), i, a))
      return Np(e, h), !0;
  return !1;
}
function bt(e, t, r, n) {
  var i = r || {};
  if (i.strict ? wl(e, t) : e === t)
    return !0;
  var a = kl(e), o = kl(t);
  if (a !== o)
    return !1;
  if (!e || !t || typeof e != "object" && typeof t != "object")
    return i.strict ? wl(e, t) : e == t;
  var c = n.has(e), h = n.has(t), u;
  if (c && h) {
    if (n.get(e) === n.get(t))
      return !0;
  } else
    u = {};
  return c || n.set(e, u), h || n.set(t, u), nP(e, t, i, n);
}
function Hl(e) {
  return !e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function tP(e, t, r, n) {
  if (vi(e) !== vi(t))
    return !1;
  for (var i = Vr(e), a = Vr(t), o, c, h; (o = i.next()) && !o.done; )
    if (o.value && typeof o.value == "object")
      h || (h = new ki()), Li(h, o.value);
    else if (!$i(t, o.value)) {
      if (r.strict || !eP(e, t, o.value))
        return !1;
      h || (h = new ki()), Li(h, o.value);
    }
  if (h) {
    for (; (c = a.next()) && !c.done; )
      if (c.value && typeof c.value == "object") {
        if (!ql(h, c.value, r.strict, n))
          return !1;
      } else if (!r.strict && !$i(e, c.value) && !ql(h, c.value, r.strict, n))
        return !1;
    return vi(h) === 0;
  }
  return !0;
}
function rP(e, t, r, n) {
  if (Gl(e) !== Gl(t))
    return !1;
  for (var i = Vr(e), a = Vr(t), o, c, h, u, d, s; (o = i.next()) && !o.done; )
    if (u = o.value[0], d = o.value[1], u && typeof u == "object")
      h || (h = new ki()), Li(h, u);
    else if (s = Bi(t, u), typeof s > "u" && !pu(t, u) || !bt(d, s, r, n)) {
      if (r.strict || !xA(e, t, u, d, r, n))
        return !1;
      h || (h = new ki()), Li(h, u);
    }
  if (h) {
    for (; (c = a.next()) && !c.done; )
      if (u = c.value[0], s = c.value[1], u && typeof u == "object") {
        if (!Wl(h, e, u, s, r, n))
          return !1;
      } else if (!r.strict && (!e.has(u) || !bt(Bi(e, u), s, r, n)) && !Wl(h, e, u, s, Rp({}, r, { strict: !1 }), n))
        return !1;
    return vi(h) === 0;
  }
  return !0;
}
function nP(e, t, r, n) {
  var i, a;
  if (typeof e != typeof t || e == null || t == null || Vl(e) !== Vl(t) || Il(e) !== Il(t))
    return !1;
  var o = jl(e), c = jl(t);
  if (o !== c)
    return !1;
  var h = e instanceof Error, u = t instanceof Error;
  if (h !== u || (h || u) && (e.name !== t.name || e.message !== t.message))
    return !1;
  var d = Rl(e), s = Rl(t);
  if (d !== s || (d || s) && (e.source !== t.source || Tl(e) !== Tl(t)))
    return !1;
  var p = Ml(e), f = Ml(t);
  if (p !== f || (p || f) && Ul(e) !== Ul(t) || r.strict && Ja && Ja(e) !== Ja(t))
    return !1;
  var y = Ll(e), l = Ll(t);
  if ((y || l) && y !== l)
    return !1;
  var v = Hl(e), m = Hl(t);
  if (v !== m)
    return !1;
  if (v || m) {
    if (e.length !== t.length)
      return !1;
    for (i = 0; i < e.length; i++)
      if (e[i] !== t[i])
        return !1;
    return !0;
  }
  var g = Cl(e), O = Cl(t);
  if (g !== O)
    return !1;
  if (g || O)
    return $l(e) !== $l(t) ? !1 : typeof Uint8Array == "function" && bt(new Uint8Array(e), new Uint8Array(t), r, n);
  var _ = Nl(e), T = Nl(t);
  if (_ !== T)
    return !1;
  if (_ || T)
    return Fl(e) !== Fl(t) ? !1 : typeof Uint8Array == "function" && bt(new Uint8Array(e), new Uint8Array(t), r, n);
  if (typeof e != typeof t)
    return !1;
  var P = Dl(e), E = Dl(t);
  if (P.length !== E.length)
    return !1;
  for (P.sort(), E.sort(), i = P.length - 1; i >= 0; i--)
    if (P[i] != E[i])
      return !1;
  for (i = P.length - 1; i >= 0; i--)
    if (a = P[i], !bt(e[a], t[a], r, n))
      return !1;
  var S = Bl(e), w = Bl(t);
  return S !== w ? !1 : S === "Set" || w === "Set" ? tP(e, t, r, n) : S === "Map" ? rP(e, t, r, n) : !0;
}
var iP = function(t, r, n) {
  return bt(t, r, n, ZA());
};
const aP = /* @__PURE__ */ Qf(iP), oP = (e) => {
  const t = lh();
  return e ? (t.current === void 0 || !aP(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, uP = (e, t) => {
  const r = oP(t), n = gi(() => Fu(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, r), [e, r]), [i, a] = Id(qg(n, t));
  return [gi(() => {
    const c = [e.findMany.operationName];
    let h = i.data;
    if (h) {
      const d = Br(i.data, c);
      if (d) {
        const s = An(i, d);
        h = Lr.boot(e, s, d);
      }
    }
    const u = tr.errorIfDataAbsent(i, c);
    return { ...i, data: h, error: u };
  }, [e, i]), a];
};
var kp = {}, At = {};
Object.defineProperty(At, "__esModule", { value: !0 });
var Bp = At.AppBridgeContext = void 0, cP = ie;
Bp = At.AppBridgeContext = cP.createContext(null);
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.useAppBridge = void 0;
var sP = ie, lP = At;
function fP() {
  var e = sP.useContext(lP.AppBridgeContext);
  if (!e)
    throw new Error("No AppBridge context provided. Your component must be wrapped in the <Provider> component from App Bridge React.");
  return e;
}
Be.useAppBridge = fP;
var Lp = {}, Xu = {}, Zu = {}, Ct = {}, xu = {}, yu = {}, oe = {}, ec = {};
Object.defineProperty(ec, "__esModule", { value: !0 });
function $p(e, t) {
  if (t == null || typeof e > "u" || !Object.prototype.isPrototypeOf.call(Object.getPrototypeOf(e), t) || t.constructor.name !== "Object" && t.constructor.name !== "Array")
    return t;
  var r = {};
  return Object.keys(t).forEach(function(n) {
    var i = Object.prototype.hasOwnProperty.call(e, n);
    i && typeof e[n] == "object" && !Array.isArray(e[n]) ? r[n] = $p(e[n], t[n]) : r[n] = t[n];
  }), Object.keys(e).forEach(function(n) {
    var i = Object.prototype.hasOwnProperty.call(t, n);
    i || (r[n] = e[n]);
  }), Object.setPrototypeOf(r, Object.getPrototypeOf(e)), r;
}
ec.default = $p;
var or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
or.SEPARATOR = or.PREFIX = void 0;
or.PREFIX = "APP";
or.SEPARATOR = "::";
var ce = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ComponentType = e.Group = void 0, function(t) {
    t.AuthCode = "AuthCode", t.Button = "Button", t.ButtonGroup = "ButtonGroup", t.Cart = "Cart", t.Client = "Client", t.ContextualSaveBar = "ContextualSaveBar", t.Error = "Error", t.Features = "Features", t.FeedbackModal = "FeedbackModal", t.Fullscreen = "Fullscreen", t.LeaveConfirmation = "LeaveConfirmation", t.Link = "Link", t.Loading = "Loading", t.Menu = "Menu", t.Modal = "Modal", t.Navigation = "Navigation", t.Performance = "Performance", t.Pos = "Pos", t.Print = "Print", t.ResourcePicker = "Resource_Picker", t.unstable_Picker = "unstable_Picker", t.Scanner = "Scanner", t.SessionToken = "SessionToken", t.Share = "Share", t.TitleBar = "TitleBar", t.Toast = "Toast", t.MarketingExternalActivityTopBar = "MarketingExternalActivityTopBar", t.WebVitals = "WebVitals";
  }(e.Group || (e.Group = {})), function(t) {
    t.Button = "Button", t.ButtonGroup = "ButtonGroup";
  }(e.ComponentType || (e.ComponentType = {}));
})(ce);
(function(e) {
  var t = b && b.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.updateActionFromPayload = e.isValidOptionalString = e.isValidOptionalNumber = e.forEachInEnum = e.getMergedProps = e.findMatchInEnum = e.getEventNameSpace = e.NonSnakeCaseGroup = e.actionWrapper = void 0;
  var r = t(ec), n = or, i = ce;
  function a(l) {
    return l;
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
  function o(l) {
    return l.replace(/([A-Z])/g, function(v, m, g) {
      return (g === 0 ? "" : "_") + v[0].toLowerCase();
    });
  }
  function c(l) {
    return e.NonSnakeCaseGroup.includes(l) ? l.toUpperCase() : o(l).toUpperCase();
  }
  function h(l, v, m) {
    if (v.startsWith("" + n.PREFIX + n.SEPARATOR))
      return v;
    var g = c(l);
    if (m) {
      var O = m.subgroups, _ = m.type;
      O && O.length > 0 && (g += g.length > 0 ? n.SEPARATOR : "", O.forEach(function(T, P) {
        g += "" + T.toUpperCase() + (P < O.length - 1 ? n.SEPARATOR : "");
      })), _ !== l && _ && (g += "" + (g.length > 0 ? n.SEPARATOR : "") + _.toUpperCase());
    }
    return g && (g += "" + (g.length > 0 ? n.SEPARATOR : "") + v.toUpperCase()), "" + n.PREFIX + n.SEPARATOR + g;
  }
  e.getEventNameSpace = h;
  function u(l, v) {
    var m = Object.keys(l).find(function(g) {
      return v === l[g];
    });
    return m ? l[m] : void 0;
  }
  e.findMatchInEnum = u;
  function d(l, v) {
    var m = r.default(l, v);
    if (!m) {
      var g = Object.assign(l, v);
      return g;
    }
    return m;
  }
  e.getMergedProps = d;
  function s(l, v) {
    Object.keys(l).forEach(function(m) {
      v(l[m]);
    });
  }
  e.forEachInEnum = s;
  function p(l) {
    return l == null || typeof l == "number";
  }
  e.isValidOptionalNumber = p;
  function f(l) {
    return l == null || typeof l == "string";
  }
  e.isValidOptionalString = f;
  function y(l, v) {
    var m = l.id;
    return m === v.id ? (Object.assign(l, d(l, v)), !0) : !1;
  }
  e.updateActionFromPayload = y;
})(oe);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.Action = void 0;
  var t = oe, r = ce, n;
  (function(a) {
    a.REQUEST = "APP::AUTH_CODE::REQUEST", a.RESPOND = "APP::AUTH_CODE::RESPOND";
  })(n = e.Action || (e.Action = {}));
  function i(a) {
    return t.actionWrapper({
      payload: a,
      group: r.Group.AuthCode,
      type: n.RESPOND
    });
  }
  e.respond = i;
})(yu);
var zt = {};
const dP = "@shopify/app-bridge", pP = "3.7.7", yP = "index.d.ts", hP = "index.js", vP = "umd/index.js", mP = "umd/index.js", gP = [
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
], bP = {
  access: "public",
  "@shopify:registry": "https://registry.npmjs.org"
}, _P = "git@github.com:Shopify/app-bridge.git", OP = "https://shopify.dev/tools/app-bridge", AP = "Shopify Inc.", PP = "MIT", SP = {
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
}, EP = !1, TP = {
  "@shopify/app-bridge-core": "1.0.2",
  base64url: "^3.0.1",
  "web-vitals": "^3.0.1"
}, wP = {
  "@types/node": "^10.12.5",
  shx: "^0.3.3"
}, IP = {
  name: dP,
  version: pP,
  types: yP,
  main: hP,
  unpkg: vP,
  jsdelivr: mP,
  files: gP,
  private: !1,
  publishConfig: bP,
  repository: _P,
  homepage: OP,
  author: AP,
  license: PP,
  scripts: SP,
  sideEffects: EP,
  "size-limit": [
    {
      limit: "10.5 KB",
      path: "production.js"
    }
  ],
  dependencies: TP,
  devDependencies: wP
};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getPackageName = e.getVersion = e.getMergedProps = e.updateActionFromPayload = e.isValidOptionalString = e.isValidOptionalNumber = e.NonSnakeCaseGroup = e.getEventNameSpace = e.forEachInEnum = e.findMatchInEnum = e.actionWrapper = void 0;
  var t = oe;
  Object.defineProperty(e, "actionWrapper", { enumerable: !0, get: function() {
    return t.actionWrapper;
  } }), Object.defineProperty(e, "findMatchInEnum", { enumerable: !0, get: function() {
    return t.findMatchInEnum;
  } }), Object.defineProperty(e, "forEachInEnum", { enumerable: !0, get: function() {
    return t.forEachInEnum;
  } }), Object.defineProperty(e, "getEventNameSpace", { enumerable: !0, get: function() {
    return t.getEventNameSpace;
  } }), Object.defineProperty(e, "NonSnakeCaseGroup", { enumerable: !0, get: function() {
    return t.NonSnakeCaseGroup;
  } }), Object.defineProperty(e, "isValidOptionalNumber", { enumerable: !0, get: function() {
    return t.isValidOptionalNumber;
  } }), Object.defineProperty(e, "isValidOptionalString", { enumerable: !0, get: function() {
    return t.isValidOptionalString;
  } }), Object.defineProperty(e, "updateActionFromPayload", { enumerable: !0, get: function() {
    return t.updateActionFromPayload;
  } }), Object.defineProperty(e, "getMergedProps", { enumerable: !0, get: function() {
    return t.getMergedProps;
  } });
  var r = IP;
  function n() {
    return r.version;
  }
  e.getVersion = n;
  function i() {
    return r.name;
  }
  e.getPackageName = i;
})(zt);
var Kt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ComponentType = e.Group = void 0;
  var t = ce;
  Object.defineProperty(e, "Group", { enumerable: !0, get: function() {
    return t.Group;
  } }), Object.defineProperty(e, "ComponentType", { enumerable: !0, get: function() {
    return t.ComponentType;
  } });
})(Kt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.request = e.Action = e.respond = void 0;
  var t = yu;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
  var r = zt, n = Kt, i = yu;
  Object.defineProperty(e, "respond", { enumerable: !0, get: function() {
    return i.respond;
  } });
  function a(o) {
    return r.actionWrapper({
      group: n.Group.AuthCode,
      type: t.Action.REQUEST,
      payload: { id: o }
    });
  }
  e.request = a;
})(xu);
var kn = {}, Bt = {}, le = {}, Gr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LifecycleHook = e.PermissionType = e.MessageType = void 0, function(t) {
    t.GetState = "getState", t.Dispatch = "dispatch", t.Subscribe = "subscribe", t.Unsubscribe = "unsubscribe";
  }(e.MessageType || (e.MessageType = {})), function(t) {
    t.Dispatch = "Dispatch", t.Subscribe = "Subscribe";
  }(e.PermissionType || (e.PermissionType = {})), function(t) {
    t.UpdateAction = "UpdateAction", t.DispatchAction = "DispatchAction";
  }(e.LifecycleHook || (e.LifecycleHook = {}));
})(Gr);
var qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.removeFromCollection = qt.addAndRemoveFromCollection = void 0;
function jP(e, t, r) {
  return e.push(t), function() {
    return Fp(e, t, r);
  };
}
qt.addAndRemoveFromCollection = jP;
function Fp(e, t, r) {
  var n = e.findIndex(function(i) {
    return i === t;
  });
  return n >= 0 ? (e.splice(n, 1), r && r(t), !0) : !1;
}
qt.removeFromCollection = Fp;
var Sn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.permissionAction = e.isErrorEventName = e.throwError = e.invalidOriginAction = e.fromAction = e.AppBridgeError = e.AppActionType = e.Action = void 0;
  var t = ce, r = oe, n;
  (function(s) {
    s.INVALID_ACTION = "APP::ERROR::INVALID_ACTION", s.INVALID_ACTION_TYPE = "APP::ERROR::INVALID_ACTION_TYPE", s.INVALID_PAYLOAD = "APP::ERROR::INVALID_PAYLOAD", s.INVALID_OPTIONS = "APP::ERROR::INVALID_OPTIONS", s.UNEXPECTED_ACTION = "APP::ERROR::UNEXPECTED_ACTION", s.PERSISTENCE = "APP::ERROR::PERSISTENCE", s.UNSUPPORTED_OPERATION = "APP::ERROR::UNSUPPORTED_OPERATION", s.NETWORK = "APP::ERROR::NETWORK", s.PERMISSION = "APP::ERROR::PERMISSION", s.FAILED_AUTHENTICATION = "APP::ERROR::FAILED_AUTHENTICATION", s.INVALID_ORIGIN = "APP::ERROR::INVALID_ORIGIN";
  })(n = e.Action || (e.Action = {})), function(s) {
    s.INVALID_CONFIG = "APP::ERROR::INVALID_CONFIG", s.MISSING_CONFIG = "APP::APP_ERROR::MISSING_CONFIG", s.MISSING_APP_BRIDGE_MIDDLEWARE = "APP::APP_ERROR::MISSING_APP_BRIDGE_MIDDLEWARE", s.WINDOW_UNDEFINED = "APP::APP_ERROR::WINDOW_UNDEFINED", s.REDUX_REINSTANTIATED = "APP::APP_ERROR::REDUX_REINSTANTIATED", s.MISSING_LOCAL_ORIGIN = "APP::APP_ERROR::MISSING_LOCAL_ORIGIN", s.MISSING_HOST_PROVIDER = "APP::APP_ERROR::MISSING_HOST_PROVIDER", s.MISSING_ROUTER_CONTEXT = "APP::APP_ERROR::MISSING_ROUTER_CONTEXT", s.MISSING_HISTORY_BLOCK = "APP::APP_ERROR::MISSING_HISTORY_BLOCK";
  }(e.AppActionType || (e.AppActionType = {}));
  var i = (
    /** @class */
    function() {
      function s(p) {
        this.name = "AppBridgeError", this.message = p, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(this.message).stack;
      }
      return s;
    }()
  );
  e.AppBridgeError = i, i.prototype = Object.create(Error.prototype);
  function a(s, p, f) {
    var y = s ? p + ": " + s : p, l = new i(y);
    return l.action = f, l.type = p, l;
  }
  e.fromAction = a;
  function o(s) {
    return r.actionWrapper({
      group: t.Group.Error,
      payload: {
        message: s,
        type: n.INVALID_ORIGIN
      },
      type: n.INVALID_ORIGIN
    });
  }
  e.invalidOriginAction = o;
  function c() {
    for (var s = [], p = 0; p < arguments.length; p++)
      s[p] = arguments[p];
    var f = s[0], y, l;
    throw typeof s[1] == "string" ? y = s[1] : (l = s[1], y = s[2] || ""), a(y, f, l);
  }
  e.throwError = c;
  function h(s) {
    var p = r.findMatchInEnum(n, s);
    return typeof p == "string";
  }
  e.isErrorEventName = h;
  function u(s, p, f) {
    var y = p.payload;
    return r.actionWrapper({
      type: s,
      group: t.Group.Error,
      payload: {
        action: p,
        message: f,
        type: s,
        id: y && y.id ? y.id : void 0
      }
    });
  }
  function d(s, p) {
    return u(n.PERMISSION, s, p || "Action is not permitted");
  }
  e.permissionAction = d;
})(Sn);
var Xr = {};
Object.defineProperty(Xr, "__esModule", { value: !0 });
Xr.generateUuid = void 0;
function gr(e) {
  return Array.from(e).map(function(t) {
    return ("00" + t.toString(16)).slice(-2);
  }).join("");
}
function br(e) {
  if (typeof Uint8Array == "function" && typeof window == "object" && window.crypto) {
    var t = new Uint8Array(e), r = window.crypto.getRandomValues(t);
    if (r)
      return r;
  }
  return Array.from(new Array(e), function() {
    return Math.random() * 255 | 0;
  });
}
function Up() {
  var e = 64, t = br(1), r = br(2);
  return t[0] &= 191, r[0] &= 15 | e, [
    // time-low
    gr(br(4)),
    "-",
    // time-mid
    gr(br(2)),
    "-",
    // time-high-and-version
    gr(r),
    "-",
    // clock-seq-and-reserved
    gr(t),
    // clock-seq-loq
    gr(br(1)),
    "-",
    // node
    gr(br(6))
  ].join("");
}
Xr.generateUuid = Up;
Xr.default = Up;
var CP = b && b.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Fi = b && b.__assign || function() {
  return Fi = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Fi.apply(this, arguments);
}, MP = b && b.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
}, RP = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(le, "__esModule", { value: !0 });
le.unsubscribeActions = le.ActionSetWithChildren = le.ActionSet = void 0;
var NP = Gr, hu = qt, Jn = Sn, DP = ce, kP = RP(Xr), Xa = oe, Vp = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      var a = this;
      this.app = t, this.type = r, this.group = n, this.subgroups = [], this.subscriptions = [], t || Jn.throwError(Jn.Action.INVALID_ACTION, "Missing required `app`"), this.id = i || kP.default(), this.defaultGroup = n;
      var o = this.set;
      this.set = function() {
        for (var c, h = [], u = 0; u < arguments.length; u++)
          h[u] = arguments[u];
        return a.app.hooks ? (c = a.app.hooks).run.apply(c, MP([NP.LifecycleHook.UpdateAction, o, a], h)) : o.apply(a, h);
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
    }), e.prototype.updateSubscription = function(t, r, n) {
      var i = t.eventType, a = t.callback, o = t.component, c;
      return c = this.subscriptions.findIndex(function(h) {
        return h === t;
      }), c >= 0 ? this.subscriptions[c].unsubscribe() : c = void 0, this.group = r, this.subgroups = n, Object.assign(o, { subgroups: this.subgroups }), this.subscribe(i, a, o, c);
    }, e.prototype.error = function(t) {
      var r = this, n = [];
      return Xa.forEachInEnum(Jn.Action, function(i) {
        n.push(r.subscriptions.length), r.subscribe(i, t);
      }), function() {
        var i = n.map(function(a) {
          return r.subscriptions[a];
        });
        i.forEach(function(a) {
          hu.removeFromCollection(r.subscriptions, a, function(o) {
            o.unsubscribe();
          });
        });
      };
    }, e.prototype.subscribe = function(t, r, n, i) {
      var a = this, o = n || this.component, c = t.toUpperCase(), h = typeof i == "number" ? r : r.bind(this), u;
      Jn.isErrorEventName(t) ? u = Xa.getEventNameSpace(DP.Group.Error, t, Fi(Fi({}, o), { type: "" })) : u = Xa.getEventNameSpace(this.group, t, o);
      var d = this.app.subscribe(u, h, n ? n.id : this.id), s = {
        eventType: c,
        unsubscribe: d,
        callback: h,
        component: o,
        updateSubscribe: function(p, f) {
          return a.updateSubscription(s, p, f);
        }
      };
      return typeof i == "number" && i >= 0 && i < this.subscriptions.length ? this.subscriptions[i] = s : this.subscriptions.push(s), d;
    }, e.prototype.unsubscribe = function(t) {
      return t === void 0 && (t = !1), tc(this.subscriptions, this.defaultGroup, t), this;
    }, e;
  }()
);
le.ActionSet = Vp;
var BP = (
  /** @class */
  function(e) {
    CP(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.children = [], r;
    }
    return t.prototype.unsubscribe = function(r, n) {
      return r === void 0 && (r = !0), n === void 0 && (n = !1), tc(this.subscriptions, this.defaultGroup, n), this.children.forEach(function(i) {
        i instanceof t ? i.unsubscribe(r, !r) : i.unsubscribe(!r);
      }), this;
    }, t.prototype.getChild = function(r) {
      var n = this.children.findIndex(function(i) {
        return i.id === r;
      });
      return n >= 0 ? this.children[n] : void 0;
    }, t.prototype.getChildIndex = function(r) {
      return this.children.findIndex(function(n) {
        return n.id === r;
      });
    }, t.prototype.getChildSubscriptions = function(r, n) {
      return this.subscriptions.filter(function(i) {
        return i.component.id === r && (!n || n === i.eventType);
      });
    }, t.prototype.addChild = function(r, n, i) {
      var a = this, o = r.subscriptions, c = this.getChild(r.id);
      return c || this.children.push(r), !o || n === r.group && i === r.subgroups ? this : (o.forEach(function(h) {
        var u = h.updateSubscribe;
        u(n, i);
      }), Object.assign(r, { group: n, subgroups: i }), r instanceof t && r.children.forEach(function(h) {
        return a.addChild(h, n, i);
      }), this);
    }, t.prototype.removeChild = function(r) {
      var n = this;
      return hu.removeFromCollection(this.children, this.getChild(r), function() {
        var i = n.subscriptions.filter(function(a) {
          return a.component.id === r;
        });
        i.forEach(function(a) {
          hu.removeFromCollection(n.subscriptions, a, function(o) {
            o.unsubscribe();
          });
        });
      }), this;
    }, t.prototype.subscribeToChild = function(r, n, i) {
      var a = this, o = i.bind(this);
      if (n instanceof Array)
        return n.forEach(function(d) {
          return a.subscribeToChild(r, d, i);
        }), this;
      if (typeof n != "string")
        return this;
      var c = n.toUpperCase(), h = this.getChildSubscriptions(r.id, c);
      if (h.length > 0)
        h.forEach(function(d) {
          return d.updateSubscribe(a.group, r.subgroups);
        });
      else {
        var u = {
          id: r.id,
          subgroups: r.subgroups,
          type: r.type
        };
        this.subscribe(c, o, u);
      }
      return this;
    }, t.prototype.getUpdatedChildActions = function(r, n) {
      if (r.length === 0) {
        for (; n.length > 0; ) {
          var i = n.pop();
          if (!i)
            break;
          this.removeChild(i.id);
        }
        return;
      }
      for (var a = r.filter(function(h, u, d) {
        return u === d.indexOf(h);
      }), o = a.map(function(h) {
        return h.id;
      }), c = n.filter(function(h) {
        return o.indexOf(h.id) < 0;
      }); c.length > 0; ) {
        var i = c.pop();
        if (!i)
          break;
        this.removeChild(i.id);
      }
      return a;
    }, t;
  }(Vp)
);
le.ActionSetWithChildren = BP;
function tc(e, t, r) {
  r === void 0 && (r = !1), e.forEach(function(n) {
    if (r) {
      var i = n.updateSubscribe;
      i(t, []);
    } else {
      var a = n.unsubscribe;
      a();
    }
  }), r || (e.length = 0);
}
le.unsubscribeActions = tc;
(function(e) {
  var t = b && b.__extends || function() {
    var d = function(s, p) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, y) {
        f.__proto__ = y;
      } || function(f, y) {
        for (var l in y)
          Object.prototype.hasOwnProperty.call(y, l) && (f[l] = y[l]);
      }, d(s, p);
    };
    return function(s, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      d(s, p);
      function f() {
        this.constructor = s;
      }
      s.prototype = p === null ? Object.create(p) : (f.prototype = p.prototype, new f());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(d) {
      for (var s, p = 1, f = arguments.length; p < f; p++) {
        s = arguments[p];
        for (var y in s)
          Object.prototype.hasOwnProperty.call(s, y) && (d[y] = s[y]);
      }
      return d;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Button = e.update = e.clickButton = e.Style = e.Icon = e.Action = void 0;
  var n = oe, i = le, a = ce, o;
  (function(d) {
    d.CLICK = "CLICK", d.UPDATE = "UPDATE";
  })(o = e.Action || (e.Action = {})), function(d) {
    d.Print = "print";
  }(e.Icon || (e.Icon = {})), function(d) {
    d.Danger = "danger";
  }(e.Style || (e.Style = {}));
  function c(d, s, p) {
    var f = s.id, y = n.getEventNameSpace(d, o.CLICK, s), l = {
      id: f,
      payload: p
    };
    return n.actionWrapper({ type: y, group: d, payload: l });
  }
  e.clickButton = c;
  function h(d, s, p) {
    var f = s.id, y = p.label, l = n.getEventNameSpace(d, o.UPDATE, s), v = r(r({}, p), { id: f, label: y });
    return n.actionWrapper({ type: l, group: d, payload: v });
  }
  e.update = h;
  var u = (
    /** @class */
    function(d) {
      t(s, d);
      function s(p, f) {
        var y = d.call(this, p, a.ComponentType.Button, a.Group.Button) || this;
        return y.disabled = !1, y.loading = !1, y.plain = !1, y.set(f, !1), y;
      }
      return Object.defineProperty(s.prototype, "options", {
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
      }), Object.defineProperty(s.prototype, "payload", {
        get: function() {
          return r(r({}, this.options), { id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.set = function(p, f) {
        f === void 0 && (f = !0);
        var y = n.getMergedProps(this.options, p), l = y.label, v = y.disabled, m = y.icon, g = y.style, O = y.loading, _ = y.plain;
        return this.label = l, this.disabled = !!v, this.icon = m, this.style = g, this.loading = !!O, this.plain = !!_, f && this.dispatch(o.UPDATE), this;
      }, s.prototype.dispatch = function(p, f) {
        switch (p) {
          case o.CLICK:
            this.app.dispatch(c(this.group, this.component, f));
            break;
          case o.UPDATE: {
            var y = h(this.group, this.component, this.payload);
            this.app.dispatch(y);
            break;
          }
        }
        return this;
      }, s;
    }(i.ActionSet)
  );
  e.Button = u;
})(Bt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.isValidButtonProps = e.Button = e.update = e.Style = e.Icon = e.clickButton = e.Action = void 0;
  var t = Bt;
  Object.defineProperty(e, "Button", { enumerable: !0, get: function() {
    return t.Button;
  } });
  var r = Bt;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "clickButton", { enumerable: !0, get: function() {
    return r.clickButton;
  } }), Object.defineProperty(e, "Icon", { enumerable: !0, get: function() {
    return r.Icon;
  } }), Object.defineProperty(e, "Style", { enumerable: !0, get: function() {
    return r.Style;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return r.update;
  } });
  function n(a) {
    return typeof a.id == "string" && typeof a.label == "string";
  }
  e.isValidButtonProps = n;
  function i(a, o) {
    return new t.Button(a, o);
  }
  e.create = i;
})(kn);
var oa = {}, ur = {}, lr = {};
Object.defineProperty(lr, "__esModule", { value: !0 });
lr.getSingleButton = void 0;
var LP = Bt;
function $P(e, t, r, n) {
  return e.addChild(t, e.group, r), e.subscribeToChild(t, LP.Action.UPDATE, n), t.payload;
}
lr.getSingleButton = $P;
(function(e) {
  var t = b && b.__extends || function() {
    var y = function(l, v) {
      return y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
      }, y(l, v);
    };
    return function(l, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      y(l, v);
      function m() {
        this.constructor = l;
      }
      l.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(y) {
      for (var l, v = 1, m = arguments.length; v < m; v++) {
        l = arguments[v];
        for (var g in l)
          Object.prototype.hasOwnProperty.call(l, g) && (y[g] = l[g]);
      }
      return y;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ButtonGroup = e.isGroupedButtonPayload = e.isGroupedButton = e.update = e.Action = void 0;
  var n = lr, i = oe, a = le, o = ce, c;
  (function(y) {
    y.UPDATE = "UPDATE";
  })(c = e.Action || (e.Action = {}));
  function h(y, l, v) {
    return f(y, l, c.UPDATE, v);
  }
  e.update = h;
  function u(y) {
    var l = y;
    return l.buttons && l.buttons.length > 0 && l.label !== void 0;
  }
  e.isGroupedButton = u;
  function d(y) {
    var l = y;
    return Array.isArray(l.buttons) && typeof l.id == "string" && typeof l.label == "string";
  }
  e.isGroupedButtonPayload = d;
  var s = (
    /** @class */
    function(y) {
      t(l, y);
      function l(v, m) {
        var g = y.call(this, v, o.ComponentType.ButtonGroup, o.Group.ButtonGroup) || this;
        return g.disabled = !1, g.plain = !1, g.buttonsOptions = [], g.buttons = [], g.set(m, !1), g;
      }
      return Object.defineProperty(l.prototype, "options", {
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
      }), Object.defineProperty(l.prototype, "payload", {
        get: function() {
          return r(r({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), l.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = i.getMergedProps(this.options, v), O = g.label, _ = g.disabled, T = g.buttons, P = g.plain;
        return this.label = O, this.disabled = !!_, this.buttons = this.getButtons(T), this.plain = !!P, m && this.dispatch(c.UPDATE), this;
      }, l.prototype.dispatch = function(v) {
        switch (v) {
          case c.UPDATE: {
            var m = h(this.group, this.component, this.payload);
            this.app.dispatch(m);
            break;
          }
        }
        return this;
      }, l.prototype.updateButtons = function(v) {
        if (!(!this.buttons || this.buttons.length === 0)) {
          for (var m, g = 0, O = this.buttons; g < O.length; g++) {
            var _ = O[g];
            if (m = i.updateActionFromPayload(_, v), m)
              break;
          }
          m && this.dispatch(c.UPDATE);
        }
      }, l.prototype.getSingleButton = function(v) {
        return n.getSingleButton(this, v, this.subgroups, this.updateButtons);
      }, l.prototype.getButtons = function(v) {
        var m = this, g = [];
        return v ? (v.forEach(function(O) {
          var _ = n.getSingleButton(m, O, m.subgroups, m.updateButtons);
          g.push(_);
        }), this.buttonsOptions = v, g) : [];
      }, l;
    }(a.ActionSetWithChildren)
  );
  e.ButtonGroup = s;
  function p(y, l) {
    return new s(y, l);
  }
  e.create = p;
  function f(y, l, v, m, g) {
    var O = l.id, _ = m.label, T = i.getEventNameSpace(y, v, l), P = r(r({}, m), { id: O, label: _, payload: g });
    return i.actionWrapper({ type: T, group: y, payload: P });
  }
})(ur);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ButtonGroup = e.isGroupedButtonPayload = e.isGroupedButton = e.update = e.Action = void 0;
  var t = ur;
  Object.defineProperty(e, "ButtonGroup", { enumerable: !0, get: function() {
    return t.ButtonGroup;
  } });
  var r = ur;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return r.update;
  } }), Object.defineProperty(e, "isGroupedButton", { enumerable: !0, get: function() {
    return r.isGroupedButton;
  } }), Object.defineProperty(e, "isGroupedButtonPayload", { enumerable: !0, get: function() {
    return r.isGroupedButtonPayload;
  } });
  function n(i, a) {
    return new t.ButtonGroup(i, a);
  }
  e.create = n;
})(oa);
var rc = {}, Gp = {};
(function(e) {
  var t = b && b.__extends || function() {
    var E = function(S, w) {
      return E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(I, C) {
        I.__proto__ = C;
      } || function(I, C) {
        for (var k in C)
          Object.prototype.hasOwnProperty.call(C, k) && (I[k] = C[k]);
      }, E(S, w);
    };
    return function(S, w) {
      if (typeof w != "function" && w !== null)
        throw new TypeError("Class extends value " + String(w) + " is not a constructor or null");
      E(S, w);
      function I() {
        this.constructor = S;
      }
      S.prototype = w === null ? Object.create(w) : (I.prototype = w.prototype, new I());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(E) {
      for (var S, w = 1, I = arguments.length; w < I; w++) {
        S = arguments[w];
        for (var C in S)
          Object.prototype.hasOwnProperty.call(S, C) && (E[C] = S[C]);
      }
      return E;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Cart = e.setLineItemProperties = e.removeLineItemDiscount = e.setLineItemDiscount = e.removeLineItem = e.updateLineItem = e.addLineItem = e.removeProperties = e.setProperties = e.setDiscount = e.updateCustomerAddress = e.addCustomerAddress = e.setCustomer = e.update = e.fetch = e.Action = void 0;
  var n = oe, i = le, a = ce, o;
  (function(E) {
    E.FETCH = "APP::CART::FETCH", E.UPDATE = "APP::CART::UPDATE", E.SET_CUSTOMER = "APP::CART::SET_CUSTOMER", E.REMOVE_CUSTOMER = "APP::CART::REMOVE_CUSTOMER", E.ADD_CUSTOMER_ADDRESS = "APP::CART::ADD_CUSTOMER_ADDRESS", E.UPDATE_CUSTOMER_ADDRESS = "APP::CART::UPDATE_CUSTOMER_ADDRESS", E.SET_DISCOUNT = "APP::CART::SET_DISCOUNT", E.REMOVE_DISCOUNT = "APP::CART::REMOVE_DISCOUNT", E.SET_PROPERTIES = "APP::CART::SET_PROPERTIES", E.REMOVE_PROPERTIES = "APP::CART::REMOVE_PROPERTIES", E.CLEAR = "APP::CART::CLEAR", E.ADD_LINE_ITEM = "APP::CART::ADD_LINE_ITEM", E.UPDATE_LINE_ITEM = "APP::CART::UPDATE_LINE_ITEM", E.REMOVE_LINE_ITEM = "APP::CART::REMOVE_LINE_ITEM", E.SET_LINE_ITEM_DISCOUNT = "APP::CART::SET_LINE_ITEM_DISCOUNT", E.REMOVE_LINE_ITEM_DISCOUNT = "APP::CART::REMOVE_LINE_ITEM_DISCOUNT", E.SET_LINE_ITEM_PROPERTIES = "APP::CART::SET_LINE_ITEM_PROPERTIES", E.REMOVE_LINE_ITEM_PROPERTIES = "APP::CART::REMOVE_LINE_ITEM_PROPERTIES";
  })(o = e.Action || (e.Action = {}));
  function c(E, S) {
    return S === void 0 && (S = {}), n.actionWrapper({
      group: a.Group.Cart,
      type: E,
      payload: S
    });
  }
  function h() {
    return c(o.FETCH);
  }
  e.fetch = h;
  function u(E) {
    return c(o.UPDATE, E);
  }
  e.update = u;
  function d(E) {
    return c(o.SET_CUSTOMER, E);
  }
  e.setCustomer = d;
  function s(E) {
    return c(o.ADD_CUSTOMER_ADDRESS, E);
  }
  e.addCustomerAddress = s;
  function p(E) {
    return c(o.UPDATE_CUSTOMER_ADDRESS, E);
  }
  e.updateCustomerAddress = p;
  function f(E) {
    return c(o.SET_DISCOUNT, E);
  }
  e.setDiscount = f;
  function y(E) {
    return c(o.SET_PROPERTIES, E);
  }
  e.setProperties = y;
  function l(E) {
    return c(o.REMOVE_PROPERTIES, E);
  }
  e.removeProperties = l;
  function v(E) {
    return c(o.ADD_LINE_ITEM, E);
  }
  e.addLineItem = v;
  function m(E) {
    return c(o.UPDATE_LINE_ITEM, E);
  }
  e.updateLineItem = m;
  function g(E) {
    return c(o.REMOVE_LINE_ITEM, E);
  }
  e.removeLineItem = g;
  function O(E) {
    return c(o.SET_LINE_ITEM_DISCOUNT, E);
  }
  e.setLineItemDiscount = O;
  function _(E) {
    return c(o.REMOVE_LINE_ITEM_DISCOUNT, E);
  }
  e.removeLineItemDiscount = _;
  function T(E) {
    return c(o.SET_LINE_ITEM_PROPERTIES, E);
  }
  e.setLineItemProperties = T;
  var P = (
    /** @class */
    function(E) {
      t(S, E);
      function S(w, I) {
        return E.call(this, w, a.Group.Cart, a.Group.Cart, I ? I.id : void 0) || this;
      }
      return S.prototype.dispatch = function(w, I) {
        switch (w) {
          case o.FETCH:
            this.dispatchCartAction(o.FETCH);
            break;
          case o.UPDATE:
            this.dispatchCartAction(o.UPDATE, I);
            break;
          case o.SET_CUSTOMER:
            this.dispatchCartAction(o.SET_CUSTOMER, I);
            break;
          case o.REMOVE_CUSTOMER:
            this.dispatchCartAction(o.REMOVE_CUSTOMER, I);
            break;
          case o.ADD_CUSTOMER_ADDRESS:
            this.dispatchCartAction(o.ADD_CUSTOMER_ADDRESS, I);
            break;
          case o.UPDATE_CUSTOMER_ADDRESS:
            this.dispatchCartAction(o.UPDATE_CUSTOMER_ADDRESS, I);
            break;
          case o.SET_DISCOUNT:
            this.dispatchCartAction(o.SET_DISCOUNT, I);
            break;
          case o.REMOVE_DISCOUNT:
            this.dispatchCartAction(o.REMOVE_DISCOUNT, I);
            break;
          case o.SET_PROPERTIES:
            this.dispatchCartAction(o.SET_PROPERTIES, I);
            break;
          case o.REMOVE_PROPERTIES:
            this.dispatchCartAction(o.REMOVE_PROPERTIES, I);
            break;
          case o.CLEAR:
            this.dispatchCartAction(o.CLEAR, I);
            break;
          case o.ADD_LINE_ITEM:
            this.dispatchCartAction(o.ADD_LINE_ITEM, I);
            break;
          case o.UPDATE_LINE_ITEM:
            this.dispatchCartAction(o.UPDATE_LINE_ITEM, I);
            break;
          case o.REMOVE_LINE_ITEM:
            this.dispatchCartAction(o.REMOVE_LINE_ITEM, I);
            break;
          case o.SET_LINE_ITEM_DISCOUNT:
            this.dispatchCartAction(o.SET_LINE_ITEM_DISCOUNT, I);
            break;
          case o.REMOVE_LINE_ITEM_DISCOUNT:
            this.dispatchCartAction(o.REMOVE_LINE_ITEM_DISCOUNT, I);
            break;
          case o.SET_LINE_ITEM_PROPERTIES:
            this.dispatchCartAction(o.SET_LINE_ITEM_PROPERTIES, I);
            break;
          case o.REMOVE_LINE_ITEM_PROPERTIES:
            this.dispatchCartAction(o.REMOVE_LINE_ITEM_PROPERTIES, I);
            break;
        }
        return this;
      }, S.prototype.dispatchCartAction = function(w, I) {
        this.app.dispatch(c(w, r(r({}, I), { id: this.id })));
      }, S;
    }(i.ActionSet)
  );
  e.Cart = P;
})(Gp);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.setLineItemProperties = e.removeLineItemDiscount = e.setLineItemDiscount = e.removeLineItem = e.updateLineItem = e.addLineItem = e.removeProperties = e.setProperties = e.setDiscount = e.updateCustomerAddress = e.addCustomerAddress = e.setCustomer = e.update = e.fetch = e.Cart = e.Action = void 0;
  var t = Gp;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "Cart", { enumerable: !0, get: function() {
    return t.Cart;
  } }), Object.defineProperty(e, "fetch", { enumerable: !0, get: function() {
    return t.fetch;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } }), Object.defineProperty(e, "setCustomer", { enumerable: !0, get: function() {
    return t.setCustomer;
  } }), Object.defineProperty(e, "addCustomerAddress", { enumerable: !0, get: function() {
    return t.addCustomerAddress;
  } }), Object.defineProperty(e, "updateCustomerAddress", { enumerable: !0, get: function() {
    return t.updateCustomerAddress;
  } }), Object.defineProperty(e, "setDiscount", { enumerable: !0, get: function() {
    return t.setDiscount;
  } }), Object.defineProperty(e, "setProperties", { enumerable: !0, get: function() {
    return t.setProperties;
  } }), Object.defineProperty(e, "removeProperties", { enumerable: !0, get: function() {
    return t.removeProperties;
  } }), Object.defineProperty(e, "addLineItem", { enumerable: !0, get: function() {
    return t.addLineItem;
  } }), Object.defineProperty(e, "updateLineItem", { enumerable: !0, get: function() {
    return t.updateLineItem;
  } }), Object.defineProperty(e, "removeLineItem", { enumerable: !0, get: function() {
    return t.removeLineItem;
  } }), Object.defineProperty(e, "setLineItemDiscount", { enumerable: !0, get: function() {
    return t.setLineItemDiscount;
  } }), Object.defineProperty(e, "removeLineItemDiscount", { enumerable: !0, get: function() {
    return t.removeLineItemDiscount;
  } }), Object.defineProperty(e, "setLineItemProperties", { enumerable: !0, get: function() {
    return t.setLineItemProperties;
  } });
  function r(n, i) {
    return new t.Cart(n, i);
  }
  e.create = r;
})(rc);
var nc = {}, qp = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(t) {
    t.INITIALIZE = "APP::CLIENT::INITIALIZE";
  }(e.Action || (e.Action = {}));
})(qp);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initialize = e.Action = void 0;
  var t = qp;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
  var r = Kt, n = zt;
  function i() {
    return n.actionWrapper({
      group: r.Group.Client,
      type: t.Action.INITIALIZE
    });
  }
  e.initialize = i;
})(nc);
var fr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.networkAction = e.persistenceAction = e.unsupportedOperationAction = e.unexpectedAction = e.invalidAction = e.invalidActionType = e.invalidPayload = e.Message = e.fromAction = e.Action = e.permissionAction = e.isErrorEventName = e.throwError = e.invalidOriginAction = e.AppBridgeError = e.AppActionType = void 0;
  var t = Sn;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "fromAction", { enumerable: !0, get: function() {
    return t.fromAction;
  } });
  var r = zt, n = Kt, i = Sn;
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
  function a(f, y, l) {
    var v = y.payload;
    return r.actionWrapper({
      type: f,
      group: n.Group.Error,
      payload: {
        action: y,
        message: l,
        type: f,
        id: v && v.id ? v.id : void 0
      }
    });
  }
  (function(f) {
    f.MISSING_PAYLOAD = "Missing payload", f.INVALID_PAYLOAD_ID = "Id in payload is missing or invalid";
  })(e.Message || (e.Message = {}));
  function o(f, y) {
    return a(t.Action.INVALID_PAYLOAD, f, y || "The action's payload is missing required properties or has invalid properties");
  }
  e.invalidPayload = o;
  function c(f, y) {
    return r.actionWrapper({
      group: n.Group.Error,
      payload: {
        action: f,
        message: y || "The action type is invalid or unsupported",
        type: t.Action.INVALID_ACTION_TYPE
      },
      type: t.Action.INVALID_ACTION_TYPE
    });
  }
  e.invalidActionType = c;
  function h(f, y) {
    return r.actionWrapper({
      group: n.Group.Error,
      payload: {
        action: f,
        message: y || "The action's has missing/invalid values for `group`, `type` or `version`",
        type: t.Action.INVALID_ACTION
      },
      type: t.Action.INVALID_ACTION
    });
  }
  e.invalidAction = h;
  function u(f, y) {
    return r.actionWrapper({
      group: n.Group.Error,
      payload: {
        action: f,
        message: y || "Action cannot be called at this time",
        type: t.Action.UNEXPECTED_ACTION
      },
      type: t.Action.UNEXPECTED_ACTION
    });
  }
  e.unexpectedAction = u;
  function d(f, y) {
    return a(t.Action.UNSUPPORTED_OPERATION, f, y || "The action type is unsupported");
  }
  e.unsupportedOperationAction = d;
  function s(f, y) {
    return a(t.Action.PERSISTENCE, f, y || "Action cannot be persisted on server");
  }
  e.persistenceAction = s;
  function p(f, y) {
    return a(t.Action.NETWORK, f, y || "Network error");
  }
  e.networkAction = p;
})(fr);
var Wp = {}, Hp = {}, En = {};
(function(e) {
  var t = b && b.__extends || function() {
    var s = function(p, f) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, l) {
        y.__proto__ = l;
      } || function(y, l) {
        for (var v in l)
          Object.prototype.hasOwnProperty.call(l, v) && (y[v] = l[v]);
      }, s(p, f);
    };
    return function(p, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      s(p, f);
      function y() {
        this.constructor = p;
      }
      p.prototype = f === null ? Object.create(f) : (y.prototype = f.prototype, new y());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(s) {
      for (var p, f = 1, y = arguments.length; f < y; f++) {
        p = arguments[f];
        for (var l in p)
          Object.prototype.hasOwnProperty.call(p, l) && (s[l] = p[l]);
      }
      return s;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Toast = e.primaryAction = e.clear = e.show = e.Action = void 0;
  var n = oe, i = le, a = ce, o;
  (function(s) {
    s.SHOW = "APP::TOAST::SHOW", s.CLEAR = "APP::TOAST::CLEAR", s.ACTION = "APP::TOAST::ACTION";
  })(o = e.Action || (e.Action = {}));
  function c(s) {
    return n.actionWrapper({
      group: a.Group.Toast,
      payload: s,
      type: o.SHOW
    });
  }
  e.show = c;
  function h(s) {
    return n.actionWrapper({
      payload: s,
      group: a.Group.Toast,
      type: o.CLEAR
    });
  }
  e.clear = h;
  function u(s) {
    return n.actionWrapper({
      payload: s,
      group: a.Group.Toast,
      type: o.ACTION
    });
  }
  e.primaryAction = u;
  var d = (
    /** @class */
    function(s) {
      t(p, s);
      function p(f, y) {
        var l = s.call(this, f, a.Group.Toast, a.Group.Toast) || this;
        return l.message = "", l.duration = 5e3, l.set(y), l;
      }
      return Object.defineProperty(p.prototype, "options", {
        get: function() {
          var f;
          return {
            duration: this.duration,
            isError: this.isError,
            message: this.message,
            action: !((f = this.action) === null || f === void 0) && f.content ? {
              content: this.action.content
            } : void 0
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(p.prototype, "payload", {
        get: function() {
          return r({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.set = function(f) {
        var y = n.getMergedProps(this.options, f), l = y.message, v = y.duration, m = y.isError, g = y.action;
        return this.message = l, this.duration = v, this.isError = m, this.action = g != null && g.content ? {
          content: g.content || ""
        } : void 0, this;
      }, p.prototype.dispatch = function(f) {
        switch (f) {
          case o.SHOW: {
            var y = c(this.payload);
            this.app.dispatch(y);
            break;
          }
          case o.CLEAR:
            this.app.dispatch(h({ id: this.id }));
            break;
          case o.ACTION:
            this.app.dispatch(u({ id: this.id }));
            break;
        }
        return this;
      }, p;
    }(i.ActionSet)
  );
  e.Toast = d;
})(En);
(function(e) {
  var t = b && b.__extends || function() {
    var a = function(o, c) {
      return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, u) {
        h.__proto__ = u;
      } || function(h, u) {
        for (var d in u)
          Object.prototype.hasOwnProperty.call(u, d) && (h[d] = u[d]);
      }, a(o, c);
    };
    return function(o, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      a(o, c);
      function h() {
        this.constructor = o;
      }
      o.prototype = c === null ? Object.create(c) : (h.prototype = c.prototype, new h());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Flash = e.show = e.clear = void 0;
  var r = En;
  Object.defineProperty(e, "clear", { enumerable: !0, get: function() {
    return r.clear;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return r.show;
  } });
  var n = (
    /** @class */
    function(a) {
      t(o, a);
      function o() {
        return a !== null && a.apply(this, arguments) || this;
      }
      return o;
    }(r.Toast)
  );
  e.Flash = n;
  function i(a, o) {
    return new n(a, o);
  }
  e.create = i;
})(Hp);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(n, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(n, i, a, o) {
    o === void 0 && (o = a), n[o] = i[a];
  }), r = b && b.__exportStar || function(n, i) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Hp, e);
})(Wp);
var ic = {}, zp = {}, ac = {}, ua = {}, oc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(t) {
    t.UPDATE = "APP::FEATURES::UPDATE", t.REQUEST = "APP::FEATURES::REQUEST", t.REQUEST_UPDATE = "APP::FEATURES::REQUEST::UPDATE";
  }(e.Action || (e.Action = {}));
})(oc);
var FP = b && b.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Ui = b && b.__assign || function() {
  return Ui = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Ui.apply(this, arguments);
};
Object.defineProperty(ua, "__esModule", { value: !0 });
ua.Features = void 0;
var UP = oe, VP = le, Za = ce, zl = oc, GP = (
  /** @class */
  function(e) {
    FP(t, e);
    function t(r, n) {
      return e.call(this, r, Za.Group.Features, Za.Group.Features, n ? n.id : void 0) || this;
    }
    return t.prototype.dispatch = function(r, n) {
      switch (r) {
        case zl.Action.REQUEST:
          this.dispatchFeaturesAction(zl.Action.REQUEST, n);
          break;
      }
      return this;
    }, t.prototype.dispatchFeaturesAction = function(r, n) {
      this.app.dispatch(UP.actionWrapper({
        group: Za.Group.Features,
        type: r,
        payload: Ui(Ui({}, n || {}), { id: this.id })
      }));
    }, t;
  }(VP.ActionSet)
);
ua.Features = GP;
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(n, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(n, i, a, o) {
    o === void 0 && (o = a), n[o] = i[a];
  }), r = b && b.__exportStar || function(n, i) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(ua, e), r(oc, e);
})(ac);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Features = void 0;
  var t = ac;
  Object.defineProperty(e, "Features", { enumerable: !0, get: function() {
    return t.Features;
  } });
  function r(n, i) {
    return new t.Features(n, i);
  }
  e.create = r;
})(zp);
var uc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0;
  var t = ac;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
})(uc);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(n, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(n, i, a, o) {
    o === void 0 && (o = a), n[o] = i[a];
  }), r = b && b.__exportStar || function(n, i) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(zp, e), r(uc, e);
})(ic);
var Kp = {}, cc = {};
(function(e) {
  var t = b && b.__extends || function() {
    var s = function(p, f) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, l) {
        y.__proto__ = l;
      } || function(y, l) {
        for (var v in l)
          Object.prototype.hasOwnProperty.call(l, v) && (y[v] = l[v]);
      }, s(p, f);
    };
    return function(p, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      s(p, f);
      function y() {
        this.constructor = p;
      }
      p.prototype = f === null ? Object.create(f) : (y.prototype = f.prototype, new y());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(s) {
      for (var p, f = 1, y = arguments.length; f < y; f++) {
        p = arguments[f];
        for (var l in p)
          Object.prototype.hasOwnProperty.call(p, l) && (s[l] = p[l]);
      }
      return s;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.FeedbackModal = e.close = e.open = e.Action = void 0;
  var n = oe, i = le, a = ce, o;
  (function(s) {
    s.OPEN = "APP::FEEDBACK_MODAL::OPEN", s.CLOSE = "APP::FEEDBACK_MODAL::CLOSE";
  })(o = e.Action || (e.Action = {}));
  function c(s) {
    return n.actionWrapper({
      group: a.Group.FeedbackModal,
      payload: s,
      type: o.OPEN
    });
  }
  e.open = c;
  function h(s) {
    return n.actionWrapper({
      group: a.Group.FeedbackModal,
      payload: s,
      type: o.CLOSE
    });
  }
  e.close = h;
  var u = (
    /** @class */
    function(s) {
      t(p, s);
      function p(f, y) {
        var l = s.call(this, f, a.Group.FeedbackModal, a.Group.FeedbackModal) || this;
        return l.options = y, l.set(y), l;
      }
      return Object.defineProperty(p.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return r({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.set = function(f) {
        return this.options = n.getMergedProps(this.options, f), this;
      }, p.prototype.dispatch = function(f) {
        switch (f) {
          case o.OPEN: {
            var y = c(this.payload);
            this.app.dispatch(y);
            break;
          }
          case o.CLOSE: {
            var l = h(this.payload);
            this.app.dispatch(l);
            break;
          }
        }
        return this;
      }, p;
    }(i.ActionSet)
  );
  e.FeedbackModal = u;
  function d(s, p) {
    return new u(s, p);
  }
  e.create = d;
})(cc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.FeedbackModal = e.close = e.open = e.Action = void 0;
  var t = cc;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "open", { enumerable: !0, get: function() {
    return t.open;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return t.close;
  } }), Object.defineProperty(e, "FeedbackModal", { enumerable: !0, get: function() {
    return t.FeedbackModal;
  } }), Object.defineProperty(e, "create", { enumerable: !0, get: function() {
    return t.create;
  } });
})(Kp);
var sc = {}, vu = {};
(function(e) {
  var t = b && b.__extends || function() {
    var u = function(d, s) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, f) {
        p.__proto__ = f;
      } || function(p, f) {
        for (var y in f)
          Object.prototype.hasOwnProperty.call(f, y) && (p[y] = f[y]);
      }, u(d, s);
    };
    return function(d, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      u(d, s);
      function p() {
        this.constructor = d;
      }
      d.prototype = s === null ? Object.create(s) : (p.prototype = s.prototype, new p());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Fullscreen = e.exit = e.enter = e.Action = void 0;
  var r = oe, n = le, i = ce, a;
  (function(u) {
    u.ENTER = "APP::FULLSCREEN::ENTER", u.EXIT = "APP::FULLSCREEN::EXIT";
  })(a = e.Action || (e.Action = {}));
  function o() {
    return r.actionWrapper({
      group: i.Group.Fullscreen,
      type: a.ENTER
    });
  }
  e.enter = o;
  function c() {
    return r.actionWrapper({
      group: i.Group.Fullscreen,
      type: a.EXIT
    });
  }
  e.exit = c;
  var h = (
    /** @class */
    function(u) {
      t(d, u);
      function d(s) {
        return u.call(this, s, i.Group.Fullscreen, i.Group.Fullscreen) || this;
      }
      return Object.defineProperty(d.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), d.prototype.dispatch = function(s) {
        return this.app.dispatch(r.actionWrapper({
          group: this.group,
          type: s,
          payload: this.payload
        })), this;
      }, d;
    }(n.ActionSet)
  );
  e.Fullscreen = h;
})(vu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Action = e.Fullscreen = e.exit = e.enter = void 0;
  var t = vu;
  Object.defineProperty(e, "Fullscreen", { enumerable: !0, get: function() {
    return t.Fullscreen;
  } }), Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
  var r = vu;
  Object.defineProperty(e, "enter", { enumerable: !0, get: function() {
    return r.enter;
  } }), Object.defineProperty(e, "exit", { enumerable: !0, get: function() {
    return r.exit;
  } });
  function n(i) {
    return new t.Fullscreen(i);
  }
  e.create = n;
})(sc);
var Qp = {}, Vi = {};
(function(e) {
  var t = b && b.__extends || function() {
    var s = function(p, f) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, l) {
        y.__proto__ = l;
      } || function(y, l) {
        for (var v in l)
          Object.prototype.hasOwnProperty.call(l, v) && (y[v] = l[v]);
      }, s(p, f);
    };
    return function(p, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      s(p, f);
      function y() {
        this.constructor = p;
      }
      p.prototype = f === null ? Object.create(f) : (y.prototype = f.prototype, new y());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(s) {
      for (var p, f = 1, y = arguments.length; f < y; f++) {
        p = arguments[f];
        for (var l in p)
          Object.prototype.hasOwnProperty.call(p, l) && (s[l] = p[l]);
      }
      return s;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LeaveConfirmation = e.confirm = e.disable = e.enable = e.Action = void 0;
  var n = oe, i = le, a = ce, o;
  (function(s) {
    s.ENABLE = "APP::LEAVE_CONFIRMATION::ENABLE", s.DISABLE = "APP::LEAVE_CONFIRMATION::DISABLE", s.CONFIRM = "APP::LEAVE_CONFIRMATION::CONFIRM";
  })(o = e.Action || (e.Action = {}));
  function c(s) {
    return s === void 0 && (s = {}), n.actionWrapper({
      group: a.Group.LeaveConfirmation,
      payload: s,
      type: o.ENABLE
    });
  }
  e.enable = c;
  function h(s) {
    return s === void 0 && (s = {}), n.actionWrapper({
      group: a.Group.LeaveConfirmation,
      payload: s,
      type: o.DISABLE
    });
  }
  e.disable = h;
  function u(s) {
    return s === void 0 && (s = {}), n.actionWrapper({
      group: a.Group.LeaveConfirmation,
      payload: s,
      type: o.CONFIRM
    });
  }
  e.confirm = u;
  var d = (
    /** @class */
    function(s) {
      t(p, s);
      function p(f, y) {
        y === void 0 && (y = {});
        var l = s.call(this, f, a.Group.LeaveConfirmation, a.Group.LeaveConfirmation) || this;
        return l.options = y, l.set(y), l;
      }
      return Object.defineProperty(p.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return r({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.set = function(f) {
        return this.options = n.getMergedProps(this.options, f), this;
      }, p.prototype.dispatch = function(f) {
        switch (f) {
          case o.ENABLE: {
            var y = c(this.payload);
            this.app.dispatch(y);
            break;
          }
          case o.DISABLE: {
            var l = h(this.payload);
            this.app.dispatch(l);
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
  e.LeaveConfirmation = d;
})(Vi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.LeaveConfirmation = e.confirm = e.disable = e.enable = e.Action = void 0;
  var t = Vi;
  Object.defineProperty(e, "LeaveConfirmation", { enumerable: !0, get: function() {
    return t.LeaveConfirmation;
  } });
  var r = Vi;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "enable", { enumerable: !0, get: function() {
    return r.enable;
  } }), Object.defineProperty(e, "disable", { enumerable: !0, get: function() {
    return r.disable;
  } }), Object.defineProperty(e, "confirm", { enumerable: !0, get: function() {
    return r.confirm;
  } });
  function n(i, a) {
    return a === void 0 && (a = {}), new t.LeaveConfirmation(i, a);
  }
  e.create = n;
})(Qp);
var lc = {}, mu = {};
(function(e) {
  var t = b && b.__extends || function() {
    var u = function(d, s) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, f) {
        p.__proto__ = f;
      } || function(p, f) {
        for (var y in f)
          Object.prototype.hasOwnProperty.call(f, y) && (p[y] = f[y]);
      }, u(d, s);
    };
    return function(d, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      u(d, s);
      function p() {
        this.constructor = d;
      }
      d.prototype = s === null ? Object.create(s) : (p.prototype = s.prototype, new p());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Loading = e.stop = e.start = e.Action = void 0;
  var r = oe, n = le, i = ce, a;
  (function(u) {
    u.START = "APP::LOADING::START", u.STOP = "APP::LOADING::STOP";
  })(a = e.Action || (e.Action = {}));
  function o(u) {
    return r.actionWrapper({
      payload: u,
      group: i.Group.Loading,
      type: a.START
    });
  }
  e.start = o;
  function c(u) {
    return r.actionWrapper({
      payload: u,
      group: i.Group.Loading,
      type: a.STOP
    });
  }
  e.stop = c;
  var h = (
    /** @class */
    function(u) {
      t(d, u);
      function d(s) {
        return u.call(this, s, i.Group.Loading, i.Group.Loading) || this;
      }
      return Object.defineProperty(d.prototype, "payload", {
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), d.prototype.dispatch = function(s) {
        switch (s) {
          case a.START:
            this.app.dispatch(o(this.payload));
            break;
          case a.STOP:
            this.app.dispatch(c(this.payload));
            break;
        }
        return this;
      }, d;
    }(n.ActionSet)
  );
  e.Loading = h;
})(mu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.stop = e.start = e.Action = e.Loading = void 0;
  var t = mu;
  Object.defineProperty(e, "Loading", { enumerable: !0, get: function() {
    return t.Loading;
  } });
  var r = mu;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "start", { enumerable: !0, get: function() {
    return r.start;
  } }), Object.defineProperty(e, "stop", { enumerable: !0, get: function() {
    return r.stop;
  } });
  function n(i) {
    return new t.Loading(i);
  }
  e.create = n;
})(lc);
var ca = {}, Tn = {};
(function(e) {
  var t = b && b.__extends || function() {
    var P = function(E, S) {
      return P = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(w, I) {
        w.__proto__ = I;
      } || function(w, I) {
        for (var C in I)
          Object.prototype.hasOwnProperty.call(I, C) && (w[C] = I[C]);
      }, P(E, S);
    };
    return function(E, S) {
      if (typeof S != "function" && S !== null)
        throw new TypeError("Class extends value " + String(S) + " is not a constructor or null");
      P(E, S);
      function w() {
        this.constructor = E;
      }
      E.prototype = S === null ? Object.create(S) : (w.prototype = S.prototype, new w());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(P) {
      for (var E, S = 1, w = arguments.length; S < w; S++) {
        E = arguments[S];
        for (var I in E)
          Object.prototype.hasOwnProperty.call(E, I) && (P[I] = E[I]);
      }
      return P;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalIframe = e.ModalMessage = e.Modal = e.isMessageModal = e.isIframeModal = e.data = e.update = e.clickFooterButton = e.updateModalSize = e.closeModal = e.openModal = e.Size = e.Action = void 0;
  var n = lr, i = oe, a = le, o = ce, c = Bt, h;
  (function(P) {
    P.OPEN = "APP::MODAL::OPEN", P.CLOSE = "APP::MODAL::CLOSE", P.UPDATE = "APP::MODAL::UPDATE", P.UPDATE_CONTENT = "APP::MODAL::CONTENT::UPDATE", P.FOOTER_BUTTON_CLICK = "APP::MODAL::FOOTER::BUTTON::CLICK", P.FOOTER_BUTTON_UPDATE = "APP::MODAL::FOOTER::BUTTON::UPDATE", P.UPDATE_SIZE = "APP::MODAL::UPDATE_SIZE", P.DATA = "APP::MODAL::DATA";
  })(h = e.Action || (e.Action = {}));
  var u;
  (function(P) {
    P.Small = "small", P.Medium = "medium", P.Large = "large", P.Full = "full", P.Auto = "auto";
  })(u = e.Size || (e.Size = {}));
  var d = {
    group: o.Group.Modal,
    subgroups: ["Footer"],
    type: o.ComponentType.Button
  };
  function s(P) {
    return i.actionWrapper({
      group: o.Group.Modal,
      payload: P,
      type: h.OPEN
    });
  }
  e.openModal = s;
  function p(P) {
    return i.actionWrapper({
      group: o.Group.Modal,
      payload: P,
      type: h.CLOSE
    });
  }
  e.closeModal = p;
  function f(P) {
    return i.actionWrapper({
      group: o.Group.Modal,
      payload: P,
      type: h.UPDATE_SIZE
    });
  }
  e.updateModalSize = f;
  function y(P, E) {
    var S = r({ id: P }, d);
    return c.clickButton(o.Group.Modal, S, E);
  }
  e.clickFooterButton = y;
  function l(P) {
    return i.actionWrapper({
      payload: P,
      group: o.Group.Modal,
      type: h.UPDATE
    });
  }
  e.update = l;
  function v(P) {
    return i.actionWrapper({
      payload: P,
      group: o.Group.Modal,
      type: h.DATA
    });
  }
  e.data = v;
  function m(P) {
    return typeof P.url == "string" || typeof P.path == "string";
  }
  e.isIframeModal = m;
  function g(P) {
    return typeof P.message == "string";
  }
  e.isMessageModal = g;
  var O = (
    /** @class */
    function(P) {
      t(E, P);
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
      }, E.prototype.setFooterPrimaryButton = function(S, w) {
        var I = this, C = d.subgroups;
        this.footerPrimaryOptions = this.getChildButton(S, this.footerPrimaryOptions), this.footerPrimary = this.footerPrimaryOptions ? n.getSingleButton(this, this.footerPrimaryOptions, C, function(k) {
          I.updatePrimaryFooterButton(k, w);
        }) : void 0;
      }, E.prototype.setFooterSecondaryButtons = function(S, w) {
        var I = this, C = d.subgroups, k = S || [], B = this.footerOptions && this.footerOptions.buttons.secondary || [];
        this.footerSecondaryOptions = this.getUpdatedChildActions(k, B), this.footerSecondary = this.footerSecondaryOptions ? this.footerSecondaryOptions.map(function(N) {
          return n.getSingleButton(I, N, C, function(F) {
            I.updateSecondaryFooterButton(F, w);
          });
        }) : void 0;
      }, E.prototype.getChildButton = function(S, w) {
        var I = S ? [S] : [], C = w ? [w] : [], k = this.getUpdatedChildActions(I, C);
        return k ? k[0] : void 0;
      }, E.prototype.updatePrimaryFooterButton = function(S, w) {
        !this.footer || !this.footer.buttons.primary || i.updateActionFromPayload(this.footer.buttons.primary, S) && w();
      }, E.prototype.updateSecondaryFooterButton = function(S, w) {
        if (!(!this.footer || !this.footer.buttons || !this.footer.buttons.secondary)) {
          for (var I, C = 0, k = this.footer.buttons.secondary; C < k.length; C++) {
            var B = k[C];
            if (I = i.updateActionFromPayload(B, S), I)
              break;
          }
          I && w();
        }
      }, E;
    }(a.ActionSetWithChildren)
  );
  e.Modal = O;
  var _ = (
    /** @class */
    function(P) {
      t(E, P);
      function E(S, w) {
        var I = P.call(this, S, o.Group.Modal, o.Group.Modal) || this;
        return I.set(w, !1), I;
      }
      return Object.defineProperty(E.prototype, "payload", {
        get: function() {
          return r(r({}, this.options), { footer: this.footer, id: this.id });
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
      }), E.prototype.set = function(S, w) {
        var I = this;
        w === void 0 && (w = !0);
        var C = i.getMergedProps(this.options, S), k = C.title, B = C.footer, N = C.message, F = C.size;
        return this.title = k, this.message = N, this.size = F, this.setFooterPrimaryButton(B ? B.buttons.primary : void 0, function() {
          I.dispatch(h.UPDATE);
        }), this.setFooterSecondaryButtons(B ? B.buttons.secondary : void 0, function() {
          I.dispatch(h.UPDATE);
        }), w && this.dispatch(h.UPDATE), this;
      }, E.prototype.dispatch = function(S) {
        switch (S) {
          case h.OPEN:
            this.app.dispatch(s(this.payload));
            break;
          case h.CLOSE:
            this.close();
            break;
          case h.UPDATE:
            this.app.dispatch(l(this.payload));
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
      t(E, P);
      function E(S, w) {
        var I = P.call(this, S, o.Group.Modal, o.Group.Modal) || this;
        return I.set(w, !1), I;
      }
      return Object.defineProperty(E.prototype, "payload", {
        get: function() {
          return r(r({}, this.options), { footer: this.footer, id: this.id });
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
      }), E.prototype.set = function(S, w) {
        var I = this;
        w === void 0 && (w = !0);
        var C = i.getMergedProps(this.options, S), k = C.title, B = C.footer, N = C.path, F = C.url, V = C.size, L = C.loading;
        return this.title = k, this.url = F, this.path = N, this.size = V, this.loading = L, this.setFooterPrimaryButton(B ? B.buttons.primary : void 0, function() {
          I.dispatch(h.UPDATE);
        }), this.setFooterSecondaryButtons(B ? B.buttons.secondary : void 0, function() {
          I.dispatch(h.UPDATE);
        }), w && this.dispatch(h.UPDATE), this;
      }, E.prototype.dispatch = function(S, w) {
        switch (S) {
          case h.OPEN:
            this.app.dispatch(s(this.payload));
            break;
          case h.CLOSE:
            this.close();
            break;
          case h.UPDATE:
            this.app.dispatch(l(this.payload));
            break;
          case h.DATA:
            this.app.dispatch(v(w || {}));
            break;
        }
        return this;
      }, E;
    }(O)
  );
  e.ModalIframe = T;
})(Tn);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Modal = e.isMessageModal = e.data = e.update = e.clickFooterButton = e.updateModalSize = e.closeModal = e.openModal = e.Size = e.Action = e.isIframeModal = e.ModalMessage = e.ModalIframe = void 0;
  var t = Tn;
  Object.defineProperty(e, "ModalIframe", { enumerable: !0, get: function() {
    return t.ModalIframe;
  } }), Object.defineProperty(e, "ModalMessage", { enumerable: !0, get: function() {
    return t.ModalMessage;
  } }), Object.defineProperty(e, "isIframeModal", { enumerable: !0, get: function() {
    return t.isIframeModal;
  } });
  var r = Tn;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "Size", { enumerable: !0, get: function() {
    return r.Size;
  } }), Object.defineProperty(e, "openModal", { enumerable: !0, get: function() {
    return r.openModal;
  } }), Object.defineProperty(e, "closeModal", { enumerable: !0, get: function() {
    return r.closeModal;
  } }), Object.defineProperty(e, "updateModalSize", { enumerable: !0, get: function() {
    return r.updateModalSize;
  } }), Object.defineProperty(e, "clickFooterButton", { enumerable: !0, get: function() {
    return r.clickFooterButton;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return r.update;
  } }), Object.defineProperty(e, "data", { enumerable: !0, get: function() {
    return r.data;
  } }), Object.defineProperty(e, "isMessageModal", { enumerable: !0, get: function() {
    return r.isMessageModal;
  } }), Object.defineProperty(e, "Modal", { enumerable: !0, get: function() {
    return r.Modal;
  } });
  var n = function(i, a) {
    return t.isIframeModal(a) ? new t.ModalIframe(i, a) : new t.ModalMessage(i, a);
  };
  e.create = n;
})(ca);
var Yp = {}, gu = {};
(function(e) {
  var t = b && b.__extends || function() {
    var s = function(p, f) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, l) {
        y.__proto__ = l;
      } || function(y, l) {
        for (var v in l)
          Object.prototype.hasOwnProperty.call(l, v) && (y[v] = l[v]);
      }, s(p, f);
    };
    return function(p, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      s(p, f);
      function y() {
        this.constructor = p;
      }
      p.prototype = f === null ? Object.create(f) : (y.prototype = f.prototype, new y());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(s) {
      for (var p, f = 1, y = arguments.length; f < y; f++) {
        p = arguments[f];
        for (var l in p)
          Object.prototype.hasOwnProperty.call(p, l) && (s[l] = p[l]);
      }
      return s;
    }, r.apply(this, arguments);
  }, n = b && b.__awaiter || function(s, p, f, y) {
    function l(v) {
      return v instanceof f ? v : new f(function(m) {
        m(v);
      });
    }
    return new (f || (f = Promise))(function(v, m) {
      function g(T) {
        try {
          _(y.next(T));
        } catch (P) {
          m(P);
        }
      }
      function O(T) {
        try {
          _(y.throw(T));
        } catch (P) {
          m(P);
        }
      }
      function _(T) {
        T.done ? v(T.value) : l(T.value).then(g, O);
      }
      _((y = y.apply(s, p || [])).next());
    });
  }, i = b && b.__generator || function(s, p) {
    var f = { label: 0, sent: function() {
      if (v[0] & 1)
        throw v[1];
      return v[1];
    }, trys: [], ops: [] }, y, l, v, m;
    return m = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function g(_) {
      return function(T) {
        return O([_, T]);
      };
    }
    function O(_) {
      if (y)
        throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (y = 1, l && (v = _[0] & 2 ? l.return : _[0] ? l.throw || ((v = l.return) && v.call(l), 0) : l.next) && !(v = v.call(l, _[1])).done)
            return v;
          switch (l = 0, v && (_ = [_[0] & 2, v.value]), _[0]) {
            case 0:
            case 1:
              v = _;
              break;
            case 4:
              return f.label++, { value: _[1], done: !1 };
            case 5:
              f.label++, l = _[1], _ = [0];
              continue;
            case 7:
              _ = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (v = f.trys, !(v = v.length > 0 && v[v.length - 1]) && (_[0] === 6 || _[0] === 2)) {
                f = 0;
                continue;
              }
              if (_[0] === 3 && (!v || _[1] > v[0] && _[1] < v[3])) {
                f.label = _[1];
                break;
              }
              if (_[0] === 6 && f.label < v[1]) {
                f.label = v[1], v = _;
                break;
              }
              if (v && f.label < v[2]) {
                f.label = v[2], f.ops.push(_);
                break;
              }
              v[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          _ = p.call(s, f);
        } catch (T) {
          _ = [6, T], l = 0;
        } finally {
          y = v = 0;
        }
      if (_[0] & 5)
        throw _[1];
      return { value: _[0] ? _[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalContent = e.Action = void 0;
  var a = oe, o = le, c = ce, h = Tn, u;
  (function(s) {
    s.LOADING = "LOADING", s.LOADED = "LOADED";
  })(u = e.Action || (e.Action = {}));
  var d = (
    /** @class */
    function(s) {
      t(p, s);
      function p(f, y) {
        return s.call(this, f, c.Group.Modal, c.Group.Modal, y ? y.id : void 0) || this;
      }
      return p.prototype.loaded = function() {
        this.dispatch(u.LOADED);
      }, p.prototype.loading = function() {
        this.dispatch(u.LOADING);
      }, p.prototype.dispatch = function(f) {
        switch (f) {
          case u.LOADED:
            this.dispatchModalAction(h.Action.UPDATE_CONTENT, { loading: !1 });
            break;
          case u.LOADING:
            this.dispatchModalAction(h.Action.UPDATE_CONTENT, { loading: !0 });
            break;
        }
        return this;
      }, p.prototype.dispatchModalAction = function(f, y) {
        return n(this, void 0, void 0, function() {
          var l;
          return i(this, function(v) {
            return l = a.actionWrapper({
              type: f,
              group: c.Group.Modal,
              payload: r({}, y)
            }), this.app.dispatch(l), [
              2
              /*return*/
            ];
          });
        });
      }, p;
    }(o.ActionSet)
  );
  e.ModalContent = d;
})(gu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ModalContent = e.Action = void 0;
  var t = gu;
  Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return t.ModalContent;
  } });
  var r = gu;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } });
  function n(i, a) {
    return new t.ModalContent(i, a);
  }
  e.create = n;
})(Yp);
var Jp = {}, Gi = {};
(function(e) {
  var t = b && b.__extends || function() {
    var d = function(s, p) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, y) {
        f.__proto__ = y;
      } || function(f, y) {
        for (var l in y)
          Object.prototype.hasOwnProperty.call(y, l) && (f[l] = y[l]);
      }, d(s, p);
    };
    return function(s, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      d(s, p);
      function f() {
        this.constructor = s;
      }
      s.prototype = p === null ? Object.create(p) : (f.prototype = p.prototype, new f());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(d) {
      for (var s, p = 1, f = arguments.length; p < f; p++) {
        s = arguments[p];
        for (var y in s)
          Object.prototype.hasOwnProperty.call(s, y) && (d[y] = s[y]);
      }
      return d;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.History = e.replace = e.push = e.Action = void 0;
  var n = oe, i = le, a = ce, o;
  (function(d) {
    d.PUSH = "APP::NAVIGATION::HISTORY::PUSH", d.REPLACE = "APP::NAVIGATION::HISTORY::REPLACE";
  })(o = e.Action || (e.Action = {}));
  function c(d) {
    return n.actionWrapper({
      payload: d,
      group: a.Group.Navigation,
      type: o.PUSH
    });
  }
  e.push = c;
  function h(d) {
    return n.actionWrapper({
      payload: d,
      group: a.Group.Navigation,
      type: o.REPLACE
    });
  }
  e.replace = h;
  var u = (
    /** @class */
    function(d) {
      t(s, d);
      function s(p) {
        return d.call(this, p, "History", a.Group.Navigation) || this;
      }
      return Object.defineProperty(s.prototype, "payload", {
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.dispatch = function(p, f) {
        var y = r(r({}, this.payload), { path: f });
        switch (p) {
          case o.PUSH:
            this.app.dispatch(c(y));
            break;
          case o.REPLACE:
            this.app.dispatch(h(y));
            break;
        }
        return this;
      }, s;
    }(i.ActionSet)
  );
  e.History = u;
})(Gi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.replace = e.push = e.Action = e.History = void 0;
  var t = Gi;
  Object.defineProperty(e, "History", { enumerable: !0, get: function() {
    return t.History;
  } });
  var r = Gi;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "push", { enumerable: !0, get: function() {
    return r.push;
  } }), Object.defineProperty(e, "replace", { enumerable: !0, get: function() {
    return r.replace;
  } });
  function n(i) {
    return new t.History(i);
  }
  e.create = n;
})(Jp);
var sa = {}, wn = {};
(function(e) {
  var t = b && b.__extends || function() {
    var S = function(w, I) {
      return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(C, k) {
        C.__proto__ = k;
      } || function(C, k) {
        for (var B in k)
          Object.prototype.hasOwnProperty.call(k, B) && (C[B] = k[B]);
      }, S(w, I);
    };
    return function(w, I) {
      if (typeof I != "function" && I !== null)
        throw new TypeError("Class extends value " + String(I) + " is not a constructor or null");
      S(w, I);
      function C() {
        this.constructor = w;
      }
      w.prototype = I === null ? Object.create(I) : (C.prototype = I.prototype, new C());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(S) {
      for (var w, I = 1, C = arguments.length; I < C; I++) {
        w = arguments[I];
        for (var k in w)
          Object.prototype.hasOwnProperty.call(w, k) && (S[k] = w[k]);
      }
      return S;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Redirect = e.isProductVariantResourcePayload = e.isCreateResourcePayload = e.isAdminSection = e.isRemotePayload = e.isAdminSectionPayload = e.isAdminPathPayload = e.isAppPayload = e.getRelativePath = e.normalizeUrl = e.getPathWithSearchAndHash = e.toDestination = e.toApp = e.toRemote = e.toAdminSection = e.toAdminPath = e.isResourcePayload = e.ResourceType = e.Action = void 0;
  var n = oe, i = le, a = ce, o;
  (function(S) {
    S.ADMIN_SECTION = "APP::NAVIGATION::REDIRECT::ADMIN::SECTION", S.ADMIN_PATH = "APP::NAVIGATION::REDIRECT::ADMIN::PATH", S.REMOTE = "APP::NAVIGATION::REDIRECT::REMOTE", S.APP = "APP::NAVIGATION::REDIRECT::APP";
  })(o = e.Action || (e.Action = {})), function(S) {
    S.Product = "products", S.Collection = "collections", S.Order = "orders", S.Customer = "customers", S.Discount = "discounts";
  }(e.ResourceType || (e.ResourceType = {}));
  function c(S) {
    return typeof S.id == "string";
  }
  e.isResourcePayload = c;
  function h(S) {
    return n.actionWrapper({
      payload: S,
      group: a.Group.Navigation,
      type: o.ADMIN_PATH
    });
  }
  e.toAdminPath = h;
  function u(S) {
    return n.actionWrapper({
      payload: S,
      group: a.Group.Navigation,
      type: o.ADMIN_SECTION
    });
  }
  e.toAdminSection = u;
  function d(S) {
    return n.actionWrapper({
      payload: S,
      group: a.Group.Navigation,
      type: o.REMOTE
    });
  }
  e.toRemote = d;
  function s(S) {
    return n.actionWrapper({
      payload: S,
      group: a.Group.Navigation,
      type: o.APP
    });
  }
  e.toApp = s;
  function p(S, w, I) {
    switch (S) {
      case o.APP: {
        var C = v(w) ? w : { path: w };
        return s(r({ id: I }, C));
      }
      case o.ADMIN_PATH: {
        var k = m(w) ? w : { path: w };
        return h(r({ id: I }, k));
      }
      case o.ADMIN_SECTION: {
        var B = g(w) ? w : { section: w };
        return u(r({ id: I }, B));
      }
      case o.REMOTE: {
        var N = O(w) ? w : { url: w };
        return d(r({ id: I }, N));
      }
    }
  }
  e.toDestination = p;
  function f(S) {
    var w = S.pathname, I = S.search, C = S.hash;
    return "" + w + (I || "") + (C || "");
  }
  e.getPathWithSearchAndHash = f;
  function y(S) {
    return S instanceof URL ? S.toString() : typeof S == "string" ? S : l(S);
  }
  e.normalizeUrl = y;
  function l(S) {
    if (typeof S == "string")
      return S.startsWith("/") ? S : f(new URL(S));
    var w = S.search instanceof URLSearchParams ? S.search.toString() : S.search;
    return f(r(r({}, S), { search: w }));
  }
  e.getRelativePath = l;
  function v(S) {
    return typeof S == "object" && Object.prototype.hasOwnProperty.call(S, "path");
  }
  e.isAppPayload = v;
  function m(S) {
    return typeof S == "object" && Object.prototype.hasOwnProperty.call(S, "path");
  }
  e.isAdminPathPayload = m;
  function g(S) {
    return typeof S == "object" && typeof S.section == "object" && Object.prototype.hasOwnProperty.call(S.section, "name");
  }
  e.isAdminSectionPayload = g;
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
    var w = S;
    return w.id !== void 0 && w.variant !== void 0;
  }
  e.isProductVariantResourcePayload = P;
  var E = (
    /** @class */
    function(S) {
      t(w, S);
      function w(I) {
        return S.call(this, I, "Redirect", a.Group.Navigation) || this;
      }
      return Object.defineProperty(w.prototype, "payload", {
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), w.prototype.dispatch = function(I, C) {
        var k = p(I, C, this.payload.id);
        return this.app.dispatch(k), this;
      }, w;
    }(i.ActionSet)
  );
  e.Redirect = E;
})(wn);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.isProductVariantCreateResourcePayload = e.isProductVariantResourcePayload = e.isCreateResourcePayload = e.isAdminSection = e.isRemotePayload = e.isAdminSectionPayload = e.isAdminPathPayload = e.isAppPayload = e.getRelativePath = e.normalizeUrl = e.getPathWithSearchAndHash = e.toDestination = e.toApp = e.toRemote = e.toAdminSection = e.toAdminPath = e.isResourcePayload = e.ResourceType = e.Action = e.Redirect = void 0;
  var t = wn;
  Object.defineProperty(e, "Redirect", { enumerable: !0, get: function() {
    return t.Redirect;
  } }), Object.defineProperty(e, "isCreateResourcePayload", { enumerable: !0, get: function() {
    return t.isCreateResourcePayload;
  } }), Object.defineProperty(e, "isProductVariantResourcePayload", { enumerable: !0, get: function() {
    return t.isProductVariantResourcePayload;
  } });
  var r = wn;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "ResourceType", { enumerable: !0, get: function() {
    return r.ResourceType;
  } }), Object.defineProperty(e, "isResourcePayload", { enumerable: !0, get: function() {
    return r.isResourcePayload;
  } }), Object.defineProperty(e, "toAdminPath", { enumerable: !0, get: function() {
    return r.toAdminPath;
  } }), Object.defineProperty(e, "toAdminSection", { enumerable: !0, get: function() {
    return r.toAdminSection;
  } }), Object.defineProperty(e, "toRemote", { enumerable: !0, get: function() {
    return r.toRemote;
  } }), Object.defineProperty(e, "toApp", { enumerable: !0, get: function() {
    return r.toApp;
  } }), Object.defineProperty(e, "toDestination", { enumerable: !0, get: function() {
    return r.toDestination;
  } }), Object.defineProperty(e, "getPathWithSearchAndHash", { enumerable: !0, get: function() {
    return r.getPathWithSearchAndHash;
  } }), Object.defineProperty(e, "normalizeUrl", { enumerable: !0, get: function() {
    return r.normalizeUrl;
  } }), Object.defineProperty(e, "getRelativePath", { enumerable: !0, get: function() {
    return r.getRelativePath;
  } }), Object.defineProperty(e, "isAppPayload", { enumerable: !0, get: function() {
    return r.isAppPayload;
  } }), Object.defineProperty(e, "isAdminPathPayload", { enumerable: !0, get: function() {
    return r.isAdminPathPayload;
  } }), Object.defineProperty(e, "isAdminSectionPayload", { enumerable: !0, get: function() {
    return r.isAdminSectionPayload;
  } }), Object.defineProperty(e, "isRemotePayload", { enumerable: !0, get: function() {
    return r.isRemotePayload;
  } }), Object.defineProperty(e, "isAdminSection", { enumerable: !0, get: function() {
    return r.isAdminSection;
  } });
  function n(a) {
    return t.isProductVariantResourcePayload(a) ? t.isCreateResourcePayload(a.variant) : !1;
  }
  e.isProductVariantCreateResourcePayload = n;
  function i(a) {
    return new t.Redirect(a);
  }
  e.create = i;
})(sa);
var la = {}, Xp = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.app = e.Action = void 0;
  var t = oe, r = ce, n;
  (function(a) {
    a.APP = "APP::PRINT::APP";
  })(n = e.Action || (e.Action = {}));
  function i() {
    return t.actionWrapper({
      group: r.Group.Print,
      type: n.APP
    });
  }
  e.app = i;
})(Xp);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.app = e.Action = void 0;
  var t = Xp;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "app", { enumerable: !0, get: function() {
    return t.app;
  } });
})(la);
var fc = {}, qi = {};
(function(e) {
  var t = b && b.__extends || function() {
    var l = function(v, m) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, O) {
        g.__proto__ = O;
      } || function(g, O) {
        for (var _ in O)
          Object.prototype.hasOwnProperty.call(O, _) && (g[_] = O[_]);
      }, l(v, m);
    };
    return function(v, m) {
      if (typeof m != "function" && m !== null)
        throw new TypeError("Class extends value " + String(m) + " is not a constructor or null");
      l(v, m);
      function g() {
        this.constructor = v;
      }
      v.prototype = m === null ? Object.create(m) : (g.prototype = m.prototype, new g());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(l) {
      for (var v, m = 1, g = arguments.length; m < g; m++) {
        v = arguments[m];
        for (var O in v)
          Object.prototype.hasOwnProperty.call(v, O) && (l[O] = v[O]);
      }
      return l;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ResourcePicker = e.update = e.close = e.cancel = e.open = e.select = e.ActionVerb = e.ResourceType = e.ProductStatus = e.ProductVariantInventoryManagement = e.ProductVariantInventoryPolicy = e.WeightUnit = e.FulfillmentServiceType = e.CollectionSortOrder = e.Action = void 0;
  var n = oe, i = le, a = ce, o;
  (function(l) {
    l.OPEN = "APP::RESOURCE_PICKER::OPEN", l.SELECT = "APP::RESOURCE_PICKER::SELECT", l.CLOSE = "APP::RESOURCE_PICKER::CLOSE", l.UPDATE = "APP::RESOURCE_PICKER::UPDATE", l.CANCEL = "APP::RESOURCE_PICKER::CANCEL";
  })(o = e.Action || (e.Action = {})), function(l) {
    l.Manual = "MANUAL", l.BestSelling = "BEST_SELLING", l.AlphaAsc = "ALPHA_ASC", l.AlphaDesc = "ALPHA_DESC", l.PriceDesc = "PRICE_DESC", l.PriceAsc = "PRICE_ASC", l.CreatedDesc = "CREATED_DESC", l.Created = "CREATED", l.MostRelevant = "MOST_RELEVANT";
  }(e.CollectionSortOrder || (e.CollectionSortOrder = {})), function(l) {
    l.GiftCard = "GIFT_CARD", l.Manual = "MANUAL", l.ThirdParty = "THIRD_PARTY";
  }(e.FulfillmentServiceType || (e.FulfillmentServiceType = {})), function(l) {
    l.Kilograms = "KILOGRAMS", l.Grams = "GRAMS", l.Pounds = "POUNDS", l.Ounces = "OUNCES";
  }(e.WeightUnit || (e.WeightUnit = {})), function(l) {
    l.Deny = "DENY", l.Continue = "CONTINUE";
  }(e.ProductVariantInventoryPolicy || (e.ProductVariantInventoryPolicy = {})), function(l) {
    l.Shopify = "SHOPIFY", l.NotManaged = "NOT_MANAGED", l.FulfillmentService = "FULFILLMENT_SERVICE";
  }(e.ProductVariantInventoryManagement || (e.ProductVariantInventoryManagement = {})), function(l) {
    l.Active = "ACTIVE", l.Archived = "ARCHIVED", l.Draft = "DRAFT";
  }(e.ProductStatus || (e.ProductStatus = {}));
  var c;
  (function(l) {
    l.Product = "product", l.ProductVariant = "variant", l.Collection = "collection";
  })(c = e.ResourceType || (e.ResourceType = {}));
  var h;
  (function(l) {
    l.Add = "add", l.Select = "select";
  })(h = e.ActionVerb || (e.ActionVerb = {}));
  function u(l) {
    return n.actionWrapper({
      payload: l,
      group: a.Group.ResourcePicker,
      type: o.SELECT
    });
  }
  e.select = u;
  function d(l) {
    return n.actionWrapper({
      payload: l,
      group: a.Group.ResourcePicker,
      type: o.OPEN
    });
  }
  e.open = d;
  function s(l) {
    return n.actionWrapper({
      payload: l,
      group: a.Group.ResourcePicker,
      type: o.CANCEL
    });
  }
  e.cancel = s;
  function p(l) {
    return n.actionWrapper({
      payload: l,
      group: a.Group.ResourcePicker,
      type: o.CANCEL
    });
  }
  e.close = p;
  function f(l) {
    return n.actionWrapper({
      payload: l,
      group: a.Group.ResourcePicker,
      type: o.UPDATE
    });
  }
  e.update = f;
  var y = (
    /** @class */
    function(l) {
      t(v, l);
      function v(m, g, O) {
        var _ = l.call(this, m, a.Group.ResourcePicker, a.Group.ResourcePicker) || this;
        return _.initialSelectionIds = [], _.selection = [], _.resourceType = O, _.set(g, !1), _;
      }
      return Object.defineProperty(v.prototype, "payload", {
        get: function() {
          return r(r({}, this.options), { id: this.id, resourceType: this.resourceType });
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
          if (this.resourceType === c.Product) {
            var g = r(r({}, m), { showVariants: this.showVariants, showDraft: this.showDraft, showArchived: this.showArchived, showDraftBadge: this.showDraftBadge, showArchivedBadge: this.showArchivedBadge });
            return g;
          }
          return m;
        },
        enumerable: !1,
        configurable: !0
      }), v.prototype.set = function(m, g) {
        g === void 0 && (g = !0);
        var O = n.getMergedProps(this.options, m), _ = O.initialQuery, T = O.initialSelectionIds, P = T === void 0 ? [] : T, E = O.showHidden, S = E === void 0 ? !0 : E, w = O.showVariants, I = w === void 0 ? !0 : w, C = O.showDraft, k = C === void 0 ? !0 : C, B = O.showArchived, N = B === void 0 ? !0 : B, F = O.showDraftBadge, V = F === void 0 ? !1 : F, L = O.showArchivedBadge, J = L === void 0 ? !1 : L, pe = O.selectMultiple, W = pe === void 0 ? !0 : pe, be = O.actionVerb, H = be === void 0 ? h.Add : be;
        return this.initialQuery = _, this.initialSelectionIds = P, this.showHidden = S, this.showVariants = I, this.showDraft = k, this.showArchived = N, this.showDraftBadge = V, this.showArchivedBadge = J, this.selectMultiple = W, this.actionVerb = H, g && this.update(), this;
      }, v.prototype.dispatch = function(m, g) {
        return m === o.OPEN ? this.open() : m === o.UPDATE ? this.update() : m === o.CLOSE || m === o.CANCEL ? this.cancel() : m === o.SELECT && (this.selection = g, this.app.dispatch(u({ id: this.id, selection: this.selection }))), this;
      }, v.prototype.update = function() {
        this.app.dispatch(f(this.payload));
      }, v.prototype.open = function() {
        this.app.dispatch(d(this.payload));
      }, v.prototype.cancel = function() {
        this.app.dispatch(s({ id: this.id }));
      }, v.prototype.close = function() {
        this.cancel();
      }, v;
    }(i.ActionSet)
  );
  e.ResourcePicker = y;
})(qi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ResourcePicker = e.WeightUnit = e.update = e.select = e.ResourceType = e.ProductVariantInventoryPolicy = e.ProductVariantInventoryManagement = e.ProductStatus = e.open = e.FulfillmentServiceType = e.CollectionSortOrder = e.close = e.cancel = e.ActionVerb = e.Action = void 0;
  var t = qi;
  Object.defineProperty(e, "ResourcePicker", { enumerable: !0, get: function() {
    return t.ResourcePicker;
  } });
  var r = qi;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "ActionVerb", { enumerable: !0, get: function() {
    return r.ActionVerb;
  } }), Object.defineProperty(e, "cancel", { enumerable: !0, get: function() {
    return r.cancel;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return r.close;
  } }), Object.defineProperty(e, "CollectionSortOrder", { enumerable: !0, get: function() {
    return r.CollectionSortOrder;
  } }), Object.defineProperty(e, "FulfillmentServiceType", { enumerable: !0, get: function() {
    return r.FulfillmentServiceType;
  } }), Object.defineProperty(e, "open", { enumerable: !0, get: function() {
    return r.open;
  } }), Object.defineProperty(e, "ProductStatus", { enumerable: !0, get: function() {
    return r.ProductStatus;
  } }), Object.defineProperty(e, "ProductVariantInventoryManagement", { enumerable: !0, get: function() {
    return r.ProductVariantInventoryManagement;
  } }), Object.defineProperty(e, "ProductVariantInventoryPolicy", { enumerable: !0, get: function() {
    return r.ProductVariantInventoryPolicy;
  } }), Object.defineProperty(e, "ResourceType", { enumerable: !0, get: function() {
    return r.ResourceType;
  } }), Object.defineProperty(e, "select", { enumerable: !0, get: function() {
    return r.select;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return r.update;
  } }), Object.defineProperty(e, "WeightUnit", { enumerable: !0, get: function() {
    return r.WeightUnit;
  } });
  var n = function(i, a) {
    var o = a.resourceType, c = a.options, h = c === void 0 ? {} : c;
    return new t.ResourcePicker(i, h, o);
  };
  e.create = n;
})(fc);
var dc = {}, Zp = {};
(function(e) {
  var t = b && b.__extends || function() {
    var u = function(d, s) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, f) {
        p.__proto__ = f;
      } || function(p, f) {
        for (var y in f)
          Object.prototype.hasOwnProperty.call(f, y) && (p[y] = f[y]);
      }, u(d, s);
    };
    return function(d, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      u(d, s);
      function p() {
        this.constructor = d;
      }
      d.prototype = s === null ? Object.create(s) : (p.prototype = s.prototype, new p());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.capture = e.openCamera = e.Scanner = e.Action = void 0;
  var r = oe, n = le, i = ce, a;
  (function(u) {
    u.OPEN_CAMERA = "APP::SCANNER::OPEN::CAMERA", u.CAPTURE = "APP::SCANNER::CAPTURE";
  })(a = e.Action || (e.Action = {}));
  var o = (
    /** @class */
    function(u) {
      t(d, u);
      function d(s, p) {
        return u.call(this, s, i.Group.Scanner, i.Group.Scanner, p ? p.id : void 0) || this;
      }
      return d.prototype.dispatch = function(s) {
        switch (s) {
          case a.OPEN_CAMERA:
            this.dispatchScannerAction(a.OPEN_CAMERA);
            break;
        }
        return this;
      }, d.prototype.dispatchScannerAction = function(s) {
        this.app.dispatch(r.actionWrapper({
          type: s,
          group: i.Group.Scanner,
          payload: {
            id: this.id
          }
        }));
      }, d;
    }(n.ActionSet)
  );
  e.Scanner = o;
  function c() {
    return r.actionWrapper({
      group: i.Group.Scanner,
      type: a.OPEN_CAMERA
    });
  }
  e.openCamera = c;
  function h(u) {
    return r.actionWrapper({
      group: i.Group.Scanner,
      type: a.CAPTURE,
      payload: u
    });
  }
  e.capture = h;
})(Zp);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.capture = e.openCamera = e.Scanner = e.Action = void 0;
  var t = Zp;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "Scanner", { enumerable: !0, get: function() {
    return t.Scanner;
  } }), Object.defineProperty(e, "openCamera", { enumerable: !0, get: function() {
    return t.openCamera;
  } }), Object.defineProperty(e, "capture", { enumerable: !0, get: function() {
    return t.capture;
  } });
  function r(n, i) {
    return new t.Scanner(n, i);
  }
  e.create = r;
})(dc);
var pc = {}, xp = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.request = e.Action = void 0;
  var t = oe, r = ce, n;
  (function(o) {
    o.REQUEST = "APP::SESSION_TOKEN::REQUEST", o.RESPOND = "APP::SESSION_TOKEN::RESPOND";
  })(n = e.Action || (e.Action = {}));
  function i() {
    return t.actionWrapper({
      group: r.Group.SessionToken,
      type: n.REQUEST
    });
  }
  e.request = i;
  function a(o) {
    return t.actionWrapper({
      payload: o,
      group: r.Group.SessionToken,
      type: n.RESPOND
    });
  }
  e.respond = a;
})(xp);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.request = e.Action = void 0;
  var t = xp;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "request", { enumerable: !0, get: function() {
    return t.request;
  } }), Object.defineProperty(e, "respond", { enumerable: !0, get: function() {
    return t.respond;
  } });
})(pc);
var yc = {}, Wi = {}, fa = {};
Object.defineProperty(fa, "__esModule", { value: !0 });
fa.getGroupedButton = void 0;
var qP = ur;
function WP(e, t, r, n) {
  e.addChild(t, e.group, r);
  var i = t.id, a = t.label, o = t.disabled, c = t.buttons, h = t.plain;
  return e.subscribeToChild(t, qP.Action.UPDATE, n), { id: i, label: a, buttons: c, disabled: o, plain: h };
}
fa.getGroupedButton = WP;
(function(e) {
  var t = b && b.__extends || function() {
    var m = function(g, O) {
      return m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(_, T) {
        _.__proto__ = T;
      } || function(_, T) {
        for (var P in T)
          Object.prototype.hasOwnProperty.call(T, P) && (_[P] = T[P]);
      }, m(g, O);
    };
    return function(g, O) {
      if (typeof O != "function" && O !== null)
        throw new TypeError("Class extends value " + String(O) + " is not a constructor or null");
      m(g, O);
      function _() {
        this.constructor = g;
      }
      g.prototype = O === null ? Object.create(O) : (_.prototype = O.prototype, new _());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(m) {
      for (var g, O = 1, _ = arguments.length; O < _; O++) {
        g = arguments[O];
        for (var T in g)
          Object.prototype.hasOwnProperty.call(g, T) && (m[T] = g[T]);
      }
      return m;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.TitleBar = e.update = e.clickBreadcrumb = e.clickActionButton = e.Action = void 0;
  var n = le, i = Bt, a = ur, o = fa, c = lr, h = oe, u = ce, d;
  (function(m) {
    m.UPDATE = "APP::TITLEBAR::UPDATE", m.BUTTON_CLICK = "APP::TITLEBAR::BUTTONS::BUTTON::CLICK", m.BUTTON_UPDATE = "APP::TITLEBAR::BUTTONS::BUTTON::UPDATE", m.BUTTON_GROUP_UPDATE = "APP::TITLEBAR::BUTTONS::BUTTONGROUP::UPDATE", m.BREADCRUMBS_CLICK = "APP::TITLEBAR::BREADCRUMBS::BUTTON::CLICK", m.BREADCRUMBS_UPDATE = "APP::TITLEBAR::BREADCRUMBS::BUTTON::UPDATE";
  })(d = e.Action || (e.Action = {}));
  var s = {
    group: u.Group.TitleBar,
    subgroups: ["Buttons"]
  }, p = {
    group: u.Group.TitleBar,
    subgroups: ["Breadcrumbs"],
    type: u.ComponentType.Button
  };
  function f(m, g) {
    var O = u.ComponentType.Button, _ = r({ id: m, type: O }, s);
    return i.clickButton(u.Group.TitleBar, _, g);
  }
  e.clickActionButton = f;
  function y(m, g) {
    var O = r({ id: m }, p);
    return i.clickButton(u.Group.TitleBar, O, g);
  }
  e.clickBreadcrumb = y;
  function l(m) {
    return h.actionWrapper({
      payload: m,
      group: u.Group.TitleBar,
      type: d.UPDATE
    });
  }
  e.update = l;
  var v = (
    /** @class */
    function(m) {
      t(g, m);
      function g(O, _) {
        var T = m.call(this, O, u.Group.TitleBar, u.Group.TitleBar) || this;
        return !_.title && !_.breadcrumbs && !_.buttons || T.set(_), T;
      }
      return Object.defineProperty(g.prototype, "buttons", {
        get: function() {
          if (!(!this.primary && !this.secondary))
            return {
              primary: this.primary,
              secondary: this.secondary
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(g.prototype, "buttonsOptions", {
        get: function() {
          if (!(!this.primaryOptions && !this.secondaryOptions))
            return {
              primary: this.primaryOptions,
              secondary: this.secondaryOptions
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(g.prototype, "options", {
        get: function() {
          return {
            breadcrumbs: this.breadcrumbsOption,
            buttons: this.buttonsOptions,
            title: this.title
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(g.prototype, "payload", {
        get: function() {
          return r(r({}, this.options), { breadcrumbs: this.breadcrumb, buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), g.prototype.set = function(O, _) {
        _ === void 0 && (_ = !0);
        var T = h.getMergedProps(this.options, O), P = T.title, E = T.buttons, S = T.breadcrumbs;
        return this.title = P, this.setBreadcrumbs(S), this.setPrimaryButton(E ? E.primary : void 0), this.setSecondaryButton(E ? E.secondary : void 0), _ && this.dispatch(d.UPDATE), this;
      }, g.prototype.dispatch = function(O) {
        switch (O) {
          case d.UPDATE:
            this.app.dispatch(l(this.payload));
            break;
        }
        return this;
      }, g.prototype.getButton = function(O, _, T) {
        return O instanceof a.ButtonGroup ? o.getGroupedButton(this, O, _, T) : c.getSingleButton(this, O, _, T);
      }, g.prototype.updatePrimaryButton = function(O) {
        this.primary && h.updateActionFromPayload(this.primary, O) && this.dispatch(d.UPDATE);
      }, g.prototype.updateSecondaryButtons = function(O) {
        if (this.secondary) {
          var _ = this.secondary.find(function(P) {
            return P.id === O.id;
          });
          if (_) {
            var T = !1;
            a.isGroupedButtonPayload(O), T = h.updateActionFromPayload(_, O), T && this.dispatch(d.UPDATE);
          }
        }
      }, g.prototype.updateBreadcrumbButton = function(O) {
        this.breadcrumb && h.updateActionFromPayload(this.breadcrumb, O) && this.dispatch(d.UPDATE);
      }, g.prototype.setPrimaryButton = function(O) {
        this.primaryOptions = this.getChildButton(O, this.primaryOptions), this.primary = this.primaryOptions ? this.getButton(this.primaryOptions, s.subgroups, this.updatePrimaryButton) : void 0;
      }, g.prototype.setSecondaryButton = function(O) {
        var _ = this, T = O || [], P = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(T, P), this.secondary = this.secondaryOptions ? this.secondaryOptions.map(function(E) {
          return _.getButton(E, s.subgroups, _.updateSecondaryButtons);
        }) : void 0;
      }, g.prototype.setBreadcrumbs = function(O) {
        this.breadcrumbsOption = this.getChildButton(O, this.breadcrumbsOption), this.breadcrumb = this.breadcrumbsOption ? this.getButton(this.breadcrumbsOption, p.subgroups, this.updateBreadcrumbButton) : void 0;
      }, g.prototype.getChildButton = function(O, _) {
        var T = O ? [O] : [], P = _ ? [_] : [], E = this.getUpdatedChildActions(T, P);
        return E ? E[0] : void 0;
      }, g;
    }(n.ActionSetWithChildren)
  );
  e.TitleBar = v;
})(Wi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.TitleBar = e.update = e.clickBreadcrumb = e.clickActionButton = e.Action = void 0;
  var t = Wi;
  Object.defineProperty(e, "TitleBar", { enumerable: !0, get: function() {
    return t.TitleBar;
  } });
  var r = Wi;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "clickActionButton", { enumerable: !0, get: function() {
    return r.clickActionButton;
  } }), Object.defineProperty(e, "clickBreadcrumb", { enumerable: !0, get: function() {
    return r.clickBreadcrumb;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return r.update;
  } });
  function n(i, a) {
    return new t.TitleBar(i, a);
  }
  e.create = n;
})(yc);
var hc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Toast = e.primaryAction = e.clear = e.show = e.Action = void 0;
  var t = En;
  Object.defineProperty(e, "Toast", { enumerable: !0, get: function() {
    return t.Toast;
  } });
  var r = En;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return r.show;
  } }), Object.defineProperty(e, "clear", { enumerable: !0, get: function() {
    return r.clear;
  } }), Object.defineProperty(e, "primaryAction", { enumerable: !0, get: function() {
    return r.primaryAction;
  } });
  function n(i, a) {
    return new t.Toast(i, a);
  }
  e.create = n;
})(hc);
var vc = {}, mc = {};
(function(e) {
  var t = b && b.__extends || function() {
    var y = function(l, v) {
      return y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
      }, y(l, v);
    };
    return function(l, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      y(l, v);
      function m() {
        this.constructor = l;
      }
      l.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(y) {
      for (var l, v = 1, m = arguments.length; v < m; v++) {
        l = arguments[v];
        for (var g in l)
          Object.prototype.hasOwnProperty.call(l, g) && (y[g] = l[g]);
      }
      return y;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ContextualSaveBar = e.update = e.discard = e.save = e.hide = e.show = e.Action = void 0;
  var n = oe, i = le, a = ce, o;
  (function(y) {
    y.DISCARD = "APP::CONTEXTUAL_SAVE_BAR::DISCARD", y.SAVE = "APP::CONTEXTUAL_SAVE_BAR::SAVE", y.SHOW = "APP::CONTEXTUAL_SAVE_BAR::SHOW", y.HIDE = "APP::CONTEXTUAL_SAVE_BAR::HIDE", y.UPDATE = "APP::CONTEXTUAL_SAVE_BAR::UPDATE";
  })(o = e.Action || (e.Action = {}));
  function c(y, l) {
    return n.actionWrapper({
      group: a.Group.ContextualSaveBar,
      type: y,
      payload: l
    });
  }
  function h(y) {
    return c(o.SHOW, y);
  }
  e.show = h;
  function u(y) {
    return c(o.HIDE, y);
  }
  e.hide = u;
  function d(y) {
    return c(o.SAVE, y);
  }
  e.save = d;
  function s(y) {
    return c(o.DISCARD, y);
  }
  e.discard = s;
  function p(y) {
    return c(o.UPDATE, y);
  }
  e.update = p;
  var f = (
    /** @class */
    function(y) {
      t(l, y);
      function l(v, m) {
        m === void 0 && (m = {});
        var g = y.call(this, v, a.Group.ContextualSaveBar, a.Group.ContextualSaveBar) || this;
        return g.options = m, g.set(m, !1), g;
      }
      return Object.defineProperty(l.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return r({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), l.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = n.getMergedProps(this.options, v);
        return this.options = g, m && this.dispatch(o.UPDATE), this;
      }, l.prototype.dispatch = function(v) {
        return this.app.dispatch(c(v, this.payload)), this;
      }, l;
    }(i.ActionSet)
  );
  e.ContextualSaveBar = f;
})(mc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ContextualSaveBar = e.update = e.discard = e.save = e.hide = e.show = e.Action = void 0;
  var t = mc;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return t.show;
  } }), Object.defineProperty(e, "hide", { enumerable: !0, get: function() {
    return t.hide;
  } }), Object.defineProperty(e, "save", { enumerable: !0, get: function() {
    return t.save;
  } }), Object.defineProperty(e, "discard", { enumerable: !0, get: function() {
    return t.discard;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } }), Object.defineProperty(e, "ContextualSaveBar", { enumerable: !0, get: function() {
    return t.ContextualSaveBar;
  } });
  function r(n, i) {
    return new t.ContextualSaveBar(n, i);
  }
  e.create = r;
})(vc);
var ey = {}, bu = {};
(function(e) {
  var t = b && b.__extends || function() {
    var d = function(s, p) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, y) {
        f.__proto__ = y;
      } || function(f, y) {
        for (var l in y)
          Object.prototype.hasOwnProperty.call(y, l) && (f[l] = y[l]);
      }, d(s, p);
    };
    return function(s, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      d(s, p);
      function f() {
        this.constructor = s;
      }
      s.prototype = p === null ? Object.create(p) : (f.prototype = p.prototype, new f());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(d) {
      for (var s, p = 1, f = arguments.length; p < f; p++) {
        s = arguments[p];
        for (var y in s)
          Object.prototype.hasOwnProperty.call(s, y) && (d[y] = s[y]);
      }
      return d;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.close = e.show = e.Share = e.Action = void 0;
  var n = ce, i = oe, a = le, o;
  (function(d) {
    d.SHOW = "APP::SHARE::SHOW", d.CLOSE = "APP::SHARE::CLOSE";
  })(o = e.Action || (e.Action = {}));
  var c = (
    /** @class */
    function(d) {
      t(s, d);
      function s(p) {
        return d.call(this, p, n.Group.Share, n.Group.Share) || this;
      }
      return s.prototype.dispatch = function(p, f) {
        switch (p) {
          case o.SHOW:
            this.dispatchShareAction(o.SHOW, f);
            break;
          case o.CLOSE:
            this.dispatchShareAction(o.CLOSE, f);
            break;
          default:
            throw new Error("Action: " + p + " not supported");
        }
        return this;
      }, s.prototype.dispatchShareAction = function(p, f) {
        this.app.dispatch(i.actionWrapper({
          type: p,
          group: n.Group.Share,
          payload: r({ id: this.id }, f)
        }));
      }, s;
    }(a.ActionSet)
  );
  e.Share = c;
  function h() {
    return i.actionWrapper({
      group: n.Group.Share,
      type: o.SHOW
    });
  }
  e.show = h;
  function u(d) {
    return i.actionWrapper({
      group: n.Group.Share,
      type: o.CLOSE,
      payload: d
    });
  }
  e.close = u;
})(bu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Share = e.close = e.show = e.Action = void 0;
  var t = bu;
  Object.defineProperty(e, "Share", { enumerable: !0, get: function() {
    return t.Share;
  } });
  var r = bu;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return r.show;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return r.close;
  } });
  function n(i) {
    return new t.Share(i);
  }
  e.create = n;
})(ey);
var gc = {}, Hi = {}, qr = {};
(function(e) {
  var t = b && b.__extends || function() {
    var d = function(s, p) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, y) {
        f.__proto__ = y;
      } || function(f, y) {
        for (var l in y)
          Object.prototype.hasOwnProperty.call(y, l) && (f[l] = y[l]);
      }, d(s, p);
    };
    return function(s, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      d(s, p);
      function f() {
        this.constructor = s;
      }
      s.prototype = p === null ? Object.create(p) : (f.prototype = p.prototype, new f());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(d) {
      for (var s, p = 1, f = arguments.length; p < f; p++) {
        s = arguments[p];
        for (var y in s)
          Object.prototype.hasOwnProperty.call(s, y) && (d[y] = s[y]);
      }
      return d;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.AppLink = e.update = e.Action = void 0;
  var n = oe, i = le, a = ce, o = wn, c;
  (function(d) {
    d.UPDATE = "UPDATE";
  })(c = e.Action || (e.Action = {}));
  function h(d, s, p) {
    var f = s.id, y = p.label, l = p.destination, v = r(r({}, p), { id: f, label: y, destination: l });
    return n.actionWrapper({
      group: d,
      type: n.getEventNameSpace(d, c.UPDATE, s),
      payload: v
    });
  }
  e.update = h;
  var u = (
    /** @class */
    function(d) {
      t(s, d);
      function s(p, f) {
        var y = d.call(this, p, a.Group.Link, a.Group.Link) || this;
        return y.label = "", y.destination = "", y.set(f, !1), y;
      }
      return Object.defineProperty(s.prototype, "options", {
        get: function() {
          var p = this, f = p.label, y = p.destination;
          return {
            label: f,
            destination: y,
            redirectType: o.Action.APP
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(s.prototype, "payload", {
        get: function() {
          var p = this.options, f = p.label, y = p.destination, l = p.redirectType, v = y;
          return {
            id: this.id,
            label: f,
            destination: { path: v },
            redirectType: l
          };
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.set = function(p, f) {
        f === void 0 && (f = !0);
        var y = n.getMergedProps(this.options, p), l = y.label, v = y.destination;
        return this.label = l, this.destination = v, f && this.dispatch(c.UPDATE), this;
      }, s.prototype.dispatch = function(p) {
        switch (p) {
          case c.UPDATE: {
            var f = h(this.group, this.component, this.payload);
            this.app.dispatch(f);
            break;
          }
        }
        return this;
      }, s;
    }(i.ActionSet)
  );
  e.AppLink = u;
})(qr);
(function(e) {
  var t = b && b.__extends || function() {
    var s = function(p, f) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, l) {
        y.__proto__ = l;
      } || function(y, l) {
        for (var v in l)
          Object.prototype.hasOwnProperty.call(l, v) && (y[v] = l[v]);
      }, s(p, f);
    };
    return function(p, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      s(p, f);
      function y() {
        this.constructor = p;
      }
      p.prototype = f === null ? Object.create(f) : (y.prototype = f.prototype, new y());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(s) {
      for (var p, f = 1, y = arguments.length; f < y; f++) {
        p = arguments[f];
        for (var l in p)
          Object.prototype.hasOwnProperty.call(p, l) && (s[l] = p[l]);
      }
      return s;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.NavigationMenu = e.update = e.Action = void 0;
  var n = qr, i = oe, a = le, o = ce, c = ["Navigation_Menu"], h;
  (function(s) {
    s.UPDATE = "APP::MENU::NAVIGATION_MENU::UPDATE", s.LINK_UPDATE = "APP::MENU::NAVIGATION_MENU::LINK::UPDATE";
  })(h = e.Action || (e.Action = {}));
  function u(s) {
    return i.actionWrapper({
      payload: s,
      group: o.Group.Menu,
      type: h.UPDATE
    });
  }
  e.update = u;
  var d = (
    /** @class */
    function(s) {
      t(p, s);
      function p(f, y) {
        var l = s.call(this, f, "Navigation_Menu", o.Group.Menu) || this;
        return l.items = [], l.set(y), l;
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
          return r(r({}, this.options), { active: this.active, items: this.items, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.set = function(f, y) {
        y === void 0 && (y = !0);
        var l = i.getMergedProps(this.options, f), v = l.items, m = l.active;
        return this.setItems(v), this.activeOptions = m, this.active = m && m.id, y && this.dispatch(h.UPDATE), this;
      }, p.prototype.dispatch = function(f) {
        switch (f) {
          case h.UPDATE:
            this.app.dispatch(u(this.payload));
            break;
        }
        return this;
      }, p.prototype.updateItem = function(f) {
        if (this.items) {
          var y = this.items.find(function(l) {
            return l.id === f.id;
          });
          y && i.updateActionFromPayload(y, f) && this.dispatch(h.UPDATE);
        }
      }, p.prototype.setItems = function(f) {
        var y = this, l = f || [], v = this.itemsOptions || [];
        this.itemsOptions = this.getUpdatedChildActions(l, v), this.items = this.itemsOptions ? this.itemsOptions.map(function(m) {
          return y.addChild(m, y.group, c), y.subscribeToChild(m, n.Action.UPDATE, y.updateItem), m.payload;
        }) : [];
      }, p;
    }(a.ActionSetWithChildren)
  );
  e.NavigationMenu = d;
})(Hi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.NavigationMenu = e.update = e.Action = void 0;
  var t = Hi;
  Object.defineProperty(e, "NavigationMenu", { enumerable: !0, get: function() {
    return t.NavigationMenu;
  } });
  var r = Hi;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return r.update;
  } });
  function n(i, a) {
    return new t.NavigationMenu(i, a);
  }
  e.create = n;
})(gc);
var ty = {}, zi = {};
(function(e) {
  var t = b && b.__extends || function() {
    var s = function(p, f) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, l) {
        y.__proto__ = l;
      } || function(y, l) {
        for (var v in l)
          Object.prototype.hasOwnProperty.call(l, v) && (y[v] = l[v]);
      }, s(p, f);
    };
    return function(p, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      s(p, f);
      function y() {
        this.constructor = p;
      }
      p.prototype = f === null ? Object.create(f) : (y.prototype = f.prototype, new y());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(s) {
      for (var p, f = 1, y = arguments.length; f < y; f++) {
        p = arguments[f];
        for (var l in p)
          Object.prototype.hasOwnProperty.call(p, l) && (s[l] = p[l]);
      }
      return s;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ChannelMenu = e.update = e.Action = void 0;
  var n = qr, i = oe, a = le, o = ce, c = ["Channel_Menu"], h;
  (function(s) {
    s.UPDATE = "APP::MENU::CHANNEL_MENU::UPDATE", s.LINK_UPDATE = "APP::MENU::CHANNEL_MENU::LINK::UPDATE";
  })(h = e.Action || (e.Action = {}));
  function u(s) {
    return i.actionWrapper({
      payload: s,
      group: o.Group.Menu,
      type: h.UPDATE
    });
  }
  e.update = u;
  var d = (
    /** @class */
    function(s) {
      t(p, s);
      function p(f, y) {
        var l = s.call(this, f, "Channel_Menu", o.Group.Menu) || this;
        return l.items = [], l.set(y), l;
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
          return r(r({}, this.options), { active: this.active, items: this.items, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.set = function(f, y) {
        y === void 0 && (y = !0);
        var l = i.getMergedProps(this.options, f), v = l.items, m = l.active;
        return this.setItems(v), this.activeOptions = m, this.active = m && m.id, y && this.dispatch(h.UPDATE), this;
      }, p.prototype.dispatch = function(f) {
        switch (f) {
          case h.UPDATE:
            this.app.dispatch(u(this.payload));
            break;
        }
        return this;
      }, p.prototype.updateItem = function(f) {
        if (this.items) {
          var y = this.items.find(function(l) {
            return l.id === f.id;
          });
          y && i.updateActionFromPayload(y, f) && this.dispatch(h.UPDATE);
        }
      }, p.prototype.setItems = function(f) {
        var y = this, l = f || [], v = this.itemsOptions || [];
        this.itemsOptions = this.getUpdatedChildActions(l, v), this.items = this.itemsOptions ? this.itemsOptions.map(function(m) {
          return y.addChild(m, y.group, c), y.subscribeToChild(m, n.Action.UPDATE, y.updateItem), m.payload;
        }) : [];
      }, p;
    }(a.ActionSetWithChildren)
  );
  e.ChannelMenu = d;
})(zi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ChannelMenu = e.update = e.Action = void 0;
  var t = zi;
  Object.defineProperty(e, "ChannelMenu", { enumerable: !0, get: function() {
    return t.ChannelMenu;
  } });
  var r = zi;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return r.update;
  } });
  function n(i, a) {
    return new t.ChannelMenu(i, a);
  }
  e.create = n;
})(ty);
var bc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.AppLink = e.update = e.Action = void 0;
  var t = qr;
  Object.defineProperty(e, "AppLink", { enumerable: !0, get: function() {
    return t.AppLink;
  } });
  var r = qr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return r.update;
  } });
  function n(i, a) {
    return new t.AppLink(i, a);
  }
  e.create = n;
})(bc);
var ry = {}, _u = {};
(function(e) {
  var t = b && b.__extends || function() {
    var h = function(u, d) {
      return h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, p) {
        s.__proto__ = p;
      } || function(s, p) {
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (s[f] = p[f]);
      }, h(u, d);
    };
    return function(u, d) {
      if (typeof d != "function" && d !== null)
        throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
      h(u, d);
      function s() {
        this.constructor = u;
      }
      u.prototype = d === null ? Object.create(d) : (s.prototype = d.prototype, new s());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Pos = e.close = e.Action = void 0;
  var r = oe, n = le, i = ce, a;
  (function(h) {
    h.CLOSE = "APP::POS::CLOSE", h.LOCATION_UPDATE = "APP::POS::LOCATION::UPDATE", h.USER_UPDATE = "APP::POS::USER::UPDATE", h.DEVICE_UPDATE = "APP::POS::DEVICE::UPDATE";
  })(a = e.Action || (e.Action = {}));
  function o() {
    return r.actionWrapper({
      group: i.Group.Pos,
      type: a.CLOSE
    });
  }
  e.close = o;
  var c = (
    /** @class */
    function(h) {
      t(u, h);
      function u(d) {
        return h.call(this, d, i.Group.Pos, i.Group.Pos) || this;
      }
      return u.prototype.dispatch = function(d) {
        switch (d) {
          case a.CLOSE:
            this.app.dispatch(o());
            break;
        }
        return this;
      }, u;
    }(n.ActionSet)
  );
  e.Pos = c;
})(_u);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Pos = e.close = e.Action = void 0;
  var t = _u;
  Object.defineProperty(e, "Pos", { enumerable: !0, get: function() {
    return t.Pos;
  } });
  var r = _u;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return r.close;
  } });
  function n(i) {
    return new t.Pos(i);
  }
  e.create = n;
})(ry);
var ny = {}, iy = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(t) {
    t.UPDATE = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::UPDATE", t.BUTTON_CLICK = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::CLICK", t.BUTTON_UPDATE = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::UPDATE";
  }(e.Action || (e.Action = {}));
})(iy);
var ay = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getSingleButton = void 0;
  var t = lr;
  Object.defineProperty(e, "getSingleButton", { enumerable: !0, get: function() {
    return t.getSingleButton;
  } });
})(ay);
var oy = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.unsubscribeActions = e.ActionSetWithChildren = e.ActionSet = void 0;
  var t = le;
  Object.defineProperty(e, "ActionSet", { enumerable: !0, get: function() {
    return t.ActionSet;
  } }), Object.defineProperty(e, "ActionSetWithChildren", { enumerable: !0, get: function() {
    return t.ActionSetWithChildren;
  } }), Object.defineProperty(e, "unsubscribeActions", { enumerable: !0, get: function() {
    return t.unsubscribeActions;
  } });
})(oy);
(function(e) {
  var t = b && b.__extends || function() {
    var y = function(l, v) {
      return y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
      }, y(l, v);
    };
    return function(l, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      y(l, v);
      function m() {
        this.constructor = l;
      }
      l.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(y) {
      for (var l, v = 1, m = arguments.length; v < m; v++) {
        l = arguments[v];
        for (var g in l)
          Object.prototype.hasOwnProperty.call(l, g) && (y[g] = l[g]);
      }
      return y;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.MarketingExternalActivityTopBar = e.update = e.clickActionButton = e.MarketingActivityStatusBadgeType = e.Action = void 0;
  var n = iy;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
  var i = kn, a = ay, o = zt, c = oy, h = Kt;
  (function(y) {
    y.Default = "DEFAULT", y.Success = "SUCCESS", y.Attention = "ATTENTION", y.Warning = "WARNING", y.Info = "INFO";
  })(e.MarketingActivityStatusBadgeType || (e.MarketingActivityStatusBadgeType = {}));
  var u = {
    group: h.Group.MarketingExternalActivityTopBar,
    subgroups: ["Buttons"]
  };
  function d(y, l) {
    var v = h.ComponentType.Button, m = r({ id: y, type: v }, u);
    return i.clickButton(h.Group.MarketingExternalActivityTopBar, m, l);
  }
  e.clickActionButton = d;
  function s(y) {
    return o.actionWrapper({
      payload: y,
      group: h.Group.MarketingExternalActivityTopBar,
      type: n.Action.UPDATE
    });
  }
  e.update = s;
  var p = (
    /** @class */
    function(y) {
      t(l, y);
      function l(v, m) {
        var g = y.call(this, v, h.Group.MarketingExternalActivityTopBar, h.Group.MarketingExternalActivityTopBar) || this;
        return g.set(m), g;
      }
      return Object.defineProperty(l.prototype, "buttons", {
        get: function() {
          if (!(!this.primary && !this.secondary))
            return {
              primary: this.primary,
              secondary: this.secondary
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(l.prototype, "buttonsOptions", {
        get: function() {
          if (!(!this.primaryOptions && !this.secondaryOptions))
            return {
              primary: this.primaryOptions,
              secondary: this.secondaryOptions
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(l.prototype, "options", {
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
      }), Object.defineProperty(l.prototype, "payload", {
        get: function() {
          return r(r({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), l.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = o.getMergedProps(this.options, v), O = g.title, _ = g.buttons, T = g.saved, P = g.saving, E = g.status;
        return this.title = O, this.saving = P, this.saved = T, this.status = E, this.setPrimaryButton(_ ? _.primary : void 0), this.setSecondaryButtons(_ ? _.secondary : void 0), m && this.dispatch(n.Action.UPDATE), this;
      }, l.prototype.dispatch = function(v) {
        switch (v) {
          case n.Action.UPDATE:
            this.app.dispatch(s(this.payload));
            break;
        }
        return this;
      }, l.prototype.getButton = function(v, m, g) {
        return a.getSingleButton(this, v, m, g);
      }, l.prototype.updatePrimaryButton = function(v) {
        this.primary && o.updateActionFromPayload(this.primary, v) && this.dispatch(n.Action.UPDATE);
      }, l.prototype.updateSecondaryButtons = function(v) {
        if (this.secondary) {
          var m = this.secondary.find(function(O) {
            return O.id === v.id;
          });
          if (m) {
            var g = o.updateActionFromPayload(m, v);
            g && this.dispatch(n.Action.UPDATE);
          }
        }
      }, l.prototype.setPrimaryButton = function(v) {
        this.primaryOptions = this.getChildButton(v, this.primaryOptions), this.primary = this.primaryOptions ? this.getButton(this.primaryOptions, u.subgroups, this.updatePrimaryButton) : void 0;
      }, l.prototype.setSecondaryButtons = function(v) {
        var m = this, g = v || [], O = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(g, O), this.secondary = this.secondaryOptions ? this.secondaryOptions.map(function(_) {
          return m.getButton(_, u.subgroups, m.updateSecondaryButtons);
        }) : void 0;
      }, l.prototype.updateSaving = function(v) {
        this.saving = v, this.dispatch(n.Action.UPDATE);
      }, l.prototype.updateSaved = function(v) {
        this.saved = v, this.dispatch(n.Action.UPDATE);
      }, l.prototype.updateStatus = function(v) {
        this.status = v, this.dispatch(n.Action.UPDATE);
      }, l.prototype.getChildButton = function(v, m) {
        var g = v ? [v] : [], O = m ? [m] : [], _ = this.getUpdatedChildActions(g, O);
        return _ ? _[0] : void 0;
      }, l;
    }(c.ActionSetWithChildren)
  );
  e.MarketingExternalActivityTopBar = p;
  function f(y, l) {
    return new p(y, l);
  }
  e.create = f;
})(ny);
var uy = {}, cy = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fullPageLoad = e.skeletonPageLoad = e.Action = void 0;
  var t = ce, r = oe, n;
  (function(o) {
    o.SKELETON_PAGE_LOAD = "APP::PERFORMANCE::SKELETON_PAGE_LOAD", o.FULL_PAGE_LOAD = "APP::PERFORMANCE::FULL_PAGE_LOAD";
  })(n = e.Action || (e.Action = {}));
  function i() {
    return r.actionWrapper({
      group: t.Group.Performance,
      type: n.SKELETON_PAGE_LOAD
    });
  }
  e.skeletonPageLoad = i;
  function a() {
    return r.actionWrapper({
      group: t.Group.Performance,
      type: n.FULL_PAGE_LOAD
    });
  }
  e.fullPageLoad = a;
})(cy);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fullPageLoad = e.skeletonPageLoad = e.Action = void 0;
  var t = cy;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "skeletonPageLoad", { enumerable: !0, get: function() {
    return t.skeletonPageLoad;
  } }), Object.defineProperty(e, "fullPageLoad", { enumerable: !0, get: function() {
    return t.fullPageLoad;
  } });
})(uy);
var sy = {}, Ki = {};
(function(e) {
  var t = b && b.__extends || function() {
    var y = function(l, v) {
      return y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
      }, y(l, v);
    };
    return function(l, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      y(l, v);
      function m() {
        this.constructor = l;
      }
      l.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), r = b && b.__assign || function() {
    return r = Object.assign || function(y) {
      for (var l, v = 1, m = arguments.length; v < m; v++) {
        l = arguments[v];
        for (var g in l)
          Object.prototype.hasOwnProperty.call(l, g) && (y[g] = l[g]);
      }
      return y;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.unstable_Picker = e.loadMore = e.search = e.update = e.cancel = e.open = e.select = e.ALL_RESOURCE_VERTICAL_ALIGNMENT = e.ALL_MEDIA_KINDS = e.ALL_BADGE_STATUSES = e.ALL_BADGE_PROGRESSES = e.Action = void 0;
  var n = oe, i = le, a = ce, o;
  (function(y) {
    y.OPEN = "APP::PICKER::OPEN", y.SELECT = "APP::PICKER::SELECT", y.UPDATE = "APP::PICKER::UPDATE", y.CANCEL = "APP::PICKER::CANCEL", y.SEARCH = "APP::PICKER::SEARCH", y.LOAD_MORE = "APP::PICKER::LOAD_MORE";
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
  function c(y) {
    return n.actionWrapper({
      payload: y,
      group: a.Group.unstable_Picker,
      type: o.SELECT
    });
  }
  e.select = c;
  function h(y) {
    return n.actionWrapper({
      payload: y,
      group: a.Group.unstable_Picker,
      type: o.OPEN
    });
  }
  e.open = h;
  function u(y) {
    return n.actionWrapper({
      payload: y,
      group: a.Group.unstable_Picker,
      type: o.CANCEL
    });
  }
  e.cancel = u;
  function d(y) {
    return n.actionWrapper({
      payload: y,
      group: a.Group.unstable_Picker,
      type: o.UPDATE
    });
  }
  e.update = d;
  function s(y) {
    return n.actionWrapper({
      payload: y,
      group: a.Group.unstable_Picker,
      type: o.SEARCH
    });
  }
  e.search = s;
  function p(y) {
    return n.actionWrapper({
      payload: y,
      group: a.Group.unstable_Picker,
      type: o.LOAD_MORE
    });
  }
  e.loadMore = p;
  var f = (
    /** @class */
    function(y) {
      t(l, y);
      function l(v, m) {
        var g = y.call(this, v, a.Group.unstable_Picker, a.Group.unstable_Picker) || this;
        return g.items = [], g.selectedItems = [], g.set(m, !1), g;
      }
      return Object.defineProperty(l.prototype, "payload", {
        get: function() {
          return r(r({}, this.options), { id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(l.prototype, "options", {
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
      }), l.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = n.getMergedProps(this.options, v), O = g.selectedItems, _ = O === void 0 ? [] : O, T = g.maxSelectable, P = T === void 0 ? 0 : T, E = g.items, S = E === void 0 ? [] : E, w = g.loading, I = w === void 0 ? !1 : w, C = g.title, k = g.searchQuery, B = g.searchQueryPlaceholder, N = g.primaryActionLabel, F = g.secondaryActionLabel, V = g.emptySearchLabel, L = g.canLoadMore, J = L === void 0 ? !1 : L, pe = g.loadingMore, W = pe === void 0 ? !1 : pe, be = g.verticalAlignment, H = g.allowEmptySelection, ne = g.resourceName;
        return this.title = C, this.items = S, this.selectedItems = _, this.maxSelectable = P, this.loading = I, this.searchQuery = k, this.searchQueryPlaceholder = B, this.primaryActionLabel = N, this.secondaryActionLabel = F, this.emptySearchLabel = V, this.canLoadMore = J, this.loadingMore = W, this.verticalAlignment = be, this.allowEmptySelection = H, this.resourceName = ne, m && this.update(), this;
      }, l.prototype.dispatch = function(v, m) {
        return v === o.OPEN ? this.open() : v === o.UPDATE ? this.update() : v === o.CANCEL ? this.cancel() : v === o.SELECT ? (this.selectedItems = (m == null ? void 0 : m.selectedItems) || [], this.app.dispatch(c({ id: this.id, selectedItems: this.selectedItems }))) : v === o.SEARCH ? (this.searchQuery = (m == null ? void 0 : m.searchQuery) || "", this.app.dispatch(s({ id: this.id, searchQuery: this.searchQuery }))) : v === o.LOAD_MORE && this.loadMore(), this;
      }, l.prototype.update = function() {
        this.app.dispatch(d(this.payload));
      }, l.prototype.open = function() {
        this.app.dispatch(h(this.payload));
      }, l.prototype.cancel = function() {
        this.app.dispatch(u({ id: this.id }));
      }, l.prototype.loadMore = function() {
        this.app.dispatch(p(this.payload));
      }, l;
    }(i.ActionSet)
  );
  e.unstable_Picker = f;
})(Ki);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.unstable_Picker = e.update = e.select = e.search = e.open = e.loadMore = e.cancel = e.ALL_RESOURCE_VERTICAL_ALIGNMENT = e.ALL_MEDIA_KINDS = e.ALL_BADGE_STATUSES = e.ALL_BADGE_PROGRESSES = e.Action = void 0;
  var t = Ki;
  Object.defineProperty(e, "unstable_Picker", { enumerable: !0, get: function() {
    return t.unstable_Picker;
  } });
  var r = Ki;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } }), Object.defineProperty(e, "ALL_BADGE_PROGRESSES", { enumerable: !0, get: function() {
    return r.ALL_BADGE_PROGRESSES;
  } }), Object.defineProperty(e, "ALL_BADGE_STATUSES", { enumerable: !0, get: function() {
    return r.ALL_BADGE_STATUSES;
  } }), Object.defineProperty(e, "ALL_MEDIA_KINDS", { enumerable: !0, get: function() {
    return r.ALL_MEDIA_KINDS;
  } }), Object.defineProperty(e, "ALL_RESOURCE_VERTICAL_ALIGNMENT", { enumerable: !0, get: function() {
    return r.ALL_RESOURCE_VERTICAL_ALIGNMENT;
  } }), Object.defineProperty(e, "cancel", { enumerable: !0, get: function() {
    return r.cancel;
  } }), Object.defineProperty(e, "loadMore", { enumerable: !0, get: function() {
    return r.loadMore;
  } }), Object.defineProperty(e, "open", { enumerable: !0, get: function() {
    return r.open;
  } }), Object.defineProperty(e, "search", { enumerable: !0, get: function() {
    return r.search;
  } }), Object.defineProperty(e, "select", { enumerable: !0, get: function() {
    return r.select;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return r.update;
  } });
  var n = function(i, a) {
    return new t.unstable_Picker(i, a);
  };
  e.create = n;
})(sy);
var _c = {}, ly = {}, Ou = { exports: {} };
(function(e, t) {
  (function(r, n) {
    n(t);
  })(b, function(r) {
    var n, i, a, o, c, h = -1, u = function(D) {
      addEventListener("pageshow", function(M) {
        M.persisted && (h = M.timeStamp, D(M));
      }, !0);
    }, d = function() {
      return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    }, s = function() {
      var D = d();
      return D && D.activationStart || 0;
    }, p = function(D, M) {
      var $ = d(), z = "navigate";
      return h >= 0 ? z = "back-forward-cache" : $ && (document.prerendering || s() > 0 ? z = "prerender" : document.wasDiscarded ? z = "restore" : $.type && (z = $.type.replace(/_/g, "-"))), { name: D, value: M === void 0 ? -1 : M, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: z };
    }, f = function(D, M, $) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(D)) {
          var z = new PerformanceObserver(function(U) {
            Promise.resolve().then(function() {
              M(U.getEntries());
            });
          });
          return z.observe(Object.assign({ type: D, buffered: !0 }, $ || {})), z;
        }
      } catch {
      }
    }, y = function(D, M, $, z) {
      var U, te;
      return function(Oe) {
        M.value >= 0 && (Oe || z) && ((te = M.value - (U || 0)) || U === void 0) && (U = M.value, M.delta = te, M.rating = function(he, de) {
          return he > de[1] ? "poor" : he > de[0] ? "needs-improvement" : "good";
        }(M.value, $), D(M));
      };
    }, l = function(D) {
      requestAnimationFrame(function() {
        return requestAnimationFrame(function() {
          return D();
        });
      });
    }, v = function(D) {
      var M = function($) {
        $.type !== "pagehide" && document.visibilityState !== "hidden" || D($);
      };
      addEventListener("visibilitychange", M, !0), addEventListener("pagehide", M, !0);
    }, m = function(D) {
      var M = !1;
      return function($) {
        M || (D($), M = !0);
      };
    }, g = -1, O = function() {
      return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0;
    }, _ = function(D) {
      document.visibilityState === "hidden" && g > -1 && (g = D.type === "visibilitychange" ? D.timeStamp : 0, P());
    }, T = function() {
      addEventListener("visibilitychange", _, !0), addEventListener("prerenderingchange", _, !0);
    }, P = function() {
      removeEventListener("visibilitychange", _, !0), removeEventListener("prerenderingchange", _, !0);
    }, E = function() {
      return g < 0 && (g = O(), T(), u(function() {
        setTimeout(function() {
          g = O(), T();
        }, 0);
      })), { get firstHiddenTime() {
        return g;
      } };
    }, S = function(D) {
      document.prerendering ? addEventListener("prerenderingchange", function() {
        return D();
      }, !0) : D();
    }, w = [1800, 3e3], I = function(D, M) {
      M = M || {}, S(function() {
        var $, z = E(), U = p("FCP"), te = f("paint", function(Oe) {
          Oe.forEach(function(he) {
            he.name === "first-contentful-paint" && (te.disconnect(), he.startTime < z.firstHiddenTime && (U.value = Math.max(he.startTime - s(), 0), U.entries.push(he), $(!0)));
          });
        });
        te && ($ = y(D, U, w, M.reportAllChanges), u(function(Oe) {
          U = p("FCP"), $ = y(D, U, w, M.reportAllChanges), l(function() {
            U.value = performance.now() - Oe.timeStamp, $(!0);
          });
        }));
      });
    }, C = [0.1, 0.25], k = function(D, M) {
      M = M || {}, I(m(function() {
        var $, z = p("CLS", 0), U = 0, te = [], Oe = function(de) {
          de.forEach(function(Se) {
            if (!Se.hadRecentInput) {
              var yr = te[0], Ft = te[te.length - 1];
              U && Se.startTime - Ft.startTime < 1e3 && Se.startTime - yr.startTime < 5e3 ? (U += Se.value, te.push(Se)) : (U = Se.value, te = [Se]);
            }
          }), U > z.value && (z.value = U, z.entries = te, $());
        }, he = f("layout-shift", Oe);
        he && ($ = y(D, z, C, M.reportAllChanges), v(function() {
          Oe(he.takeRecords()), $(!0);
        }), u(function() {
          U = 0, z = p("CLS", 0), $ = y(D, z, C, M.reportAllChanges), l(function() {
            return $();
          });
        }), setTimeout($, 0));
      }));
    }, B = { passive: !0, capture: !0 }, N = /* @__PURE__ */ new Date(), F = function(D, M) {
      n || (n = M, i = D, a = /* @__PURE__ */ new Date(), J(removeEventListener), V());
    }, V = function() {
      if (i >= 0 && i < a - N) {
        var D = { entryType: "first-input", name: n.type, target: n.target, cancelable: n.cancelable, startTime: n.timeStamp, processingStart: n.timeStamp + i };
        o.forEach(function(M) {
          M(D);
        }), o = [];
      }
    }, L = function(D) {
      if (D.cancelable) {
        var M = (D.timeStamp > 1e12 ? /* @__PURE__ */ new Date() : performance.now()) - D.timeStamp;
        D.type == "pointerdown" ? function($, z) {
          var U = function() {
            F($, z), Oe();
          }, te = function() {
            Oe();
          }, Oe = function() {
            removeEventListener("pointerup", U, B), removeEventListener("pointercancel", te, B);
          };
          addEventListener("pointerup", U, B), addEventListener("pointercancel", te, B);
        }(M, D) : F(M, D);
      }
    }, J = function(D) {
      ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(M) {
        return D(M, L, B);
      });
    }, pe = [100, 300], W = function(D, M) {
      M = M || {}, S(function() {
        var $, z = E(), U = p("FID"), te = function(de) {
          de.startTime < z.firstHiddenTime && (U.value = de.processingStart - de.startTime, U.entries.push(de), $(!0));
        }, Oe = function(de) {
          de.forEach(te);
        }, he = f("first-input", Oe);
        $ = y(D, U, pe, M.reportAllChanges), he && v(m(function() {
          Oe(he.takeRecords()), he.disconnect();
        })), he && u(function() {
          var de;
          U = p("FID"), $ = y(D, U, pe, M.reportAllChanges), o = [], i = -1, n = null, J(addEventListener), de = te, o.push(de), V();
        });
      });
    }, be = 0, H = 1 / 0, ne = 0, ye = function(D) {
      D.forEach(function(M) {
        M.interactionId && (H = Math.min(H, M.interactionId), ne = Math.max(ne, M.interactionId), be = ne ? (ne - H) / 7 + 1 : 0);
      });
    }, ue = function() {
      return c ? be : performance.interactionCount || 0;
    }, K = function() {
      "interactionCount" in performance || c || (c = f("event", ye, { type: "event", buffered: !0, durationThreshold: 0 }));
    }, Ce = [200, 500], _e = 0, Le = function() {
      return ue() - _e;
    }, Pe = [], ht = {}, Mt = function(D) {
      var M = Pe[Pe.length - 1], $ = ht[D.interactionId];
      if ($ || Pe.length < 10 || D.duration > M.latency) {
        if ($)
          $.entries.push(D), $.latency = Math.max($.latency, D.duration);
        else {
          var z = { id: D.interactionId, latency: D.duration, entries: [D] };
          ht[z.id] = z, Pe.push(z);
        }
        Pe.sort(function(U, te) {
          return te.latency - U.latency;
        }), Pe.splice(10).forEach(function(U) {
          delete ht[U.id];
        });
      }
    }, Vn = function(D, M) {
      M = M || {}, S(function() {
        K();
        var $, z = p("INP"), U = function(Oe) {
          Oe.forEach(function(Se) {
            Se.interactionId && Mt(Se), Se.entryType === "first-input" && !Pe.some(function(yr) {
              return yr.entries.some(function(Ft) {
                return Se.duration === Ft.duration && Se.startTime === Ft.startTime;
              });
            }) && Mt(Se);
          });
          var he, de = (he = Math.min(Pe.length - 1, Math.floor(Le() / 50)), Pe[he]);
          de && de.latency !== z.value && (z.value = de.latency, z.entries = de.entries, $());
        }, te = f("event", U, { durationThreshold: M.durationThreshold || 40 });
        $ = y(D, z, Ce, M.reportAllChanges), te && (te.observe({ type: "first-input", buffered: !0 }), v(function() {
          U(te.takeRecords()), z.value < 0 && Le() > 0 && (z.value = 0, z.entries = []), $(!0);
        }), u(function() {
          Pe = [], _e = ue(), z = p("INP"), $ = y(D, z, Ce, M.reportAllChanges);
        }));
      });
    }, en = [2500, 4e3], $t = {}, Qt = function(D, M) {
      M = M || {}, S(function() {
        var $, z = E(), U = p("LCP"), te = function(de) {
          var Se = de[de.length - 1];
          Se && Se.startTime < z.firstHiddenTime && (U.value = Math.max(Se.startTime - s(), 0), U.entries = [Se], $());
        }, Oe = f("largest-contentful-paint", te);
        if (Oe) {
          $ = y(D, U, en, M.reportAllChanges);
          var he = m(function() {
            $t[U.id] || (te(Oe.takeRecords()), Oe.disconnect(), $t[U.id] = !0, $(!0));
          });
          ["keydown", "click"].forEach(function(de) {
            addEventListener(de, he, !0);
          }), v(he), u(function(de) {
            U = p("LCP"), $ = y(D, U, en, M.reportAllChanges), l(function() {
              U.value = performance.now() - de.timeStamp, $t[U.id] = !0, $(!0);
            });
          });
        }
      });
    }, pr = [800, 1800], Gn = function D(M) {
      document.prerendering ? S(function() {
        return D(M);
      }) : document.readyState !== "complete" ? addEventListener("load", function() {
        return D(M);
      }, !0) : setTimeout(M, 0);
    }, Yt = function(D, M) {
      M = M || {};
      var $ = p("TTFB"), z = y(D, $, pr, M.reportAllChanges);
      Gn(function() {
        var U = d();
        if (U) {
          var te = U.responseStart;
          if (te <= 0 || te > performance.now())
            return;
          $.value = Math.max(te - s(), 0), $.entries = [U], z(!0), u(function() {
            $ = p("TTFB", 0), (z = y(D, $, pr, M.reportAllChanges))(!0);
          });
        }
      });
    };
    r.CLSThresholds = C, r.FCPThresholds = w, r.FIDThresholds = pe, r.INPThresholds = Ce, r.LCPThresholds = en, r.TTFBThresholds = pr, r.getCLS = k, r.getFCP = I, r.getFID = W, r.getINP = Vn, r.getLCP = Qt, r.getTTFB = Yt, r.onCLS = k, r.onFCP = I, r.onFID = W, r.onINP = Vn, r.onLCP = Qt, r.onTTFB = Yt, Object.defineProperty(r, "__esModule", { value: !0 });
  });
})(Ou, Ou.exports);
var HP = Ou.exports, fy = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(t) {
    t.LARGEST_CONTENTFUL_PAINT = "APP::WEB_VITALS::LARGEST_CONTENTFUL_PAINT", t.FIRST_INPUT_DELAY = "APP::WEB_VITALS::FIRST_INPUT_DELAY", t.CUMULATIVE_LAYOUT_SHIFT = "APP::WEB_VITALS::CUMULATIVE_LAYOUT_SHIFT", t.FIRST_CONTENTFUL_PAINT = "APP::WEB_VITALS::FIRST_CONTENTFUL_PAINT", t.TIME_TO_FIRST_BYTE = "APP::WEB_VITALS::TIME_TO_FIRST_BYTE", t.INTERACTION_TO_NEXT_PAINT = "APP::WEB_VITALS::INTERACTION_TO_NEXT_PAINT";
  }(e.Action || (e.Action = {}));
})(fy);
var Bn = {}, Qi = {};
(function(e) {
  var t, r;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isUnframed = e.isClient = e.isServer = void 0, e.isServer = typeof window > "u", e.isClient = !e.isServer, e.isUnframed = e.isClient && ((r = (t = window.navigator) === null || t === void 0 ? void 0 : t.userAgent) === null || r === void 0 ? void 0 : r.indexOf("Unframed")) > 0;
})(Qi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isDevelopmentClient = e.isProduction = e.isDevelopment = e.isUnframed = e.isServer = e.isClient = void 0;
  var t = Qi, r = Qi;
  Object.defineProperty(e, "isClient", { enumerable: !0, get: function() {
    return r.isClient;
  } }), Object.defineProperty(e, "isServer", { enumerable: !0, get: function() {
    return r.isServer;
  } }), Object.defineProperty(e, "isUnframed", { enumerable: !0, get: function() {
    return r.isUnframed;
  } }), e.isDevelopment = typeof process < "u" && process.env && process.env.NODE_ENV === "development", e.isProduction = !e.isDevelopment, e.isDevelopmentClient = e.isDevelopment && t.isClient;
})(Bn);
var pt = {};
Object.defineProperty(pt, "__esModule", { value: !0 });
pt.isShopifyPing = pt.isShopifyPOS = pt.isShopifyMobile = pt.isShopifyEmbedded = pt.isMobile = void 0;
var Kl = Bn;
function zP() {
  return dy() || py() || yy();
}
pt.isMobile = zP;
function KP() {
  return Kl.isClient && window.top !== window.self || Kl.isUnframed;
}
pt.isShopifyEmbedded = KP;
function dy() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Mobile") >= 0;
}
pt.isShopifyMobile = dy;
function py() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify POS") >= 0;
}
pt.isShopifyPOS = py;
function yy() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Ping") >= 0;
}
pt.isShopifyPing = yy;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initializeWebVitals = e.interactionToNextPaint = e.timeToFirstByte = e.firstContentfulPaint = e.cumulativeLayoutShift = e.firstInputDelay = e.largestContentfulPaint = e.Action = void 0;
  var t = HP, r = fy;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } });
  var n = Bn, i = Kt, a = zt, o = pt;
  function c(y) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: r.Action.LARGEST_CONTENTFUL_PAINT,
      payload: y
    });
  }
  e.largestContentfulPaint = c;
  function h(y) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: r.Action.FIRST_INPUT_DELAY,
      payload: y
    });
  }
  e.firstInputDelay = h;
  function u(y) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: r.Action.CUMULATIVE_LAYOUT_SHIFT,
      payload: y
    });
  }
  e.cumulativeLayoutShift = u;
  function d(y) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: r.Action.FIRST_CONTENTFUL_PAINT,
      payload: y
    });
  }
  e.firstContentfulPaint = d;
  function s(y) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: r.Action.TIME_TO_FIRST_BYTE,
      payload: y
    });
  }
  e.timeToFirstByte = s;
  function p(y) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: r.Action.INTERACTION_TO_NEXT_PAINT,
      payload: y
    });
  }
  e.interactionToNextPaint = p;
  function f(y) {
    function l(m) {
      return function(g) {
        var O = g.id, _ = g.name, T = g.value, P = { id: O, metricName: _, value: T }, E = m(P);
        y.dispatch(E);
      };
    }
    var v = window;
    n.isServer || n.isClient && v.__is_web_vitals_initialized__ || o.isMobile() || (v.__is_web_vitals_initialized__ = !0, t.onLCP(l(c)), t.onFID(l(h)), t.onCLS(l(u)), t.onFCP(l(d)), t.onTTFB(l(s)), t.onINP(l(p)));
  }
  e.initializeWebVitals = f;
})(ly);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(n, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(n, i, a, o) {
    o === void 0 && (o = a), n[o] = i[a];
  }), r = b && b.__exportStar || function(n, i) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(ly, e);
})(_c);
var hy = {}, at = {};
Object.defineProperty(at, "__esModule", { value: !0 });
at.isPermitted = at.getPermissionKey = at.isPerformanceOrWebVitalsAction = at.isAppMessage = at.isAppBridgeAction = void 0;
var QP = Gr, mi = or, YP = oe;
function JP(e) {
  return e instanceof Object && Object.prototype.hasOwnProperty.call(e, "type") && e.type.toString().startsWith(mi.PREFIX);
}
at.isAppBridgeAction = JP;
function XP(e) {
  if (typeof e != "object" || !e.data || typeof e.data != "object")
    return !1;
  var t = e.data;
  return Object.prototype.hasOwnProperty.call(t, "type") && YP.findMatchInEnum(QP.MessageType, t.type) !== void 0;
}
at.isAppMessage = XP;
function ZP(e) {
  var t = e.type;
  return t.match(/^APP::(PERFORMANCE|WEB_VITALS)::/);
}
at.isPerformanceOrWebVitalsAction = ZP;
function vy(e) {
  return e.replace(new RegExp("^" + mi.PREFIX + mi.SEPARATOR + "\\w+" + mi.SEPARATOR), "");
}
at.getPermissionKey = vy;
function xP(e, t, r) {
  var n = t.group, i = t.type;
  if (!n || !Object.prototype.hasOwnProperty.call(e, n))
    return !1;
  var a = e[n];
  if (!a)
    return !1;
  var o = vy(i);
  return a[o] ? a[o][r] === !0 : !1;
}
at.isPermitted = xP;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFromApp = e.isPerformanceOrWebVitalsAction = e.getPermissionKey = e.isPermitted = e.isAppMessage = e.isAppBridgeAction = void 0;
  var t = at;
  Object.defineProperty(e, "isAppBridgeAction", { enumerable: !0, get: function() {
    return t.isAppBridgeAction;
  } }), Object.defineProperty(e, "isAppMessage", { enumerable: !0, get: function() {
    return t.isAppMessage;
  } }), Object.defineProperty(e, "isPermitted", { enumerable: !0, get: function() {
    return t.isPermitted;
  } }), Object.defineProperty(e, "getPermissionKey", { enumerable: !0, get: function() {
    return t.getPermissionKey;
  } }), Object.defineProperty(e, "isPerformanceOrWebVitalsAction", { enumerable: !0, get: function() {
    return t.isPerformanceOrWebVitalsAction;
  } });
  function r(n) {
    return typeof n != "object" || typeof n.source != "object" ? !1 : typeof n.source.apiKey == "string";
  }
  e.isFromApp = r;
})(hy);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(H, ne, ye, ue) {
    ue === void 0 && (ue = ye), Object.defineProperty(H, ue, { enumerable: !0, get: function() {
      return ne[ye];
    } });
  } : function(H, ne, ye, ue) {
    ue === void 0 && (ue = ye), H[ue] = ne[ye];
  }), r = b && b.__setModuleDefault || (Object.create ? function(H, ne) {
    Object.defineProperty(H, "default", { enumerable: !0, value: ne });
  } : function(H, ne) {
    H.default = ne;
  }), n = b && b.__importStar || function(H) {
    if (H && H.__esModule)
      return H;
    var ne = {};
    if (H != null)
      for (var ye in H)
        ye !== "default" && Object.prototype.hasOwnProperty.call(H, ye) && t(ne, H, ye);
    return r(ne, H), ne;
  }, i = b && b.__exportStar || function(H, ne) {
    for (var ye in H)
      ye !== "default" && !Object.prototype.hasOwnProperty.call(ne, ye) && t(ne, H, ye);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.WebVitals = e.unstable_Picker = e.Performance = e.Pos = e.AppLink = e.ChannelMenu = e.NavigationMenu = e.Share = e.ContextualSaveBar = e.MarketingExternalActivityTopBar = e.TitleBar = e.SessionToken = e.ResourcePicker = e.Redirect = e.Print = e.ModalContent = e.Modal = e.Loading = e.LeaveConfirmation = e.History = e.Toast = e.Fullscreen = e.FeedbackModal = e.Features = e.Flash = e.Error = e.Client = e.Cart = e.Scanner = e.ButtonGroup = e.Button = e.AuthCode = e.isAppBridgeAction = void 0;
  var a = n(xu);
  e.AuthCode = a;
  var o = n(kn);
  e.Button = o;
  var c = n(oa);
  e.ButtonGroup = c;
  var h = n(rc);
  e.Cart = h;
  var u = n(nc);
  e.Client = u;
  var d = n(fr);
  e.Error = d;
  var s = n(Wp);
  e.Flash = s;
  var p = n(ic);
  e.Features = p;
  var f = n(Kp);
  e.FeedbackModal = f;
  var y = n(sc);
  e.Fullscreen = y;
  var l = n(Qp);
  e.LeaveConfirmation = l;
  var v = n(lc);
  e.Loading = v;
  var m = n(ca);
  e.Modal = m;
  var g = n(Yp);
  e.ModalContent = g;
  var O = n(Jp);
  e.History = O;
  var _ = n(sa);
  e.Redirect = _;
  var T = n(la);
  e.Print = T;
  var P = n(fc);
  e.ResourcePicker = P;
  var E = n(dc);
  e.Scanner = E;
  var S = n(pc);
  e.SessionToken = S;
  var w = n(yc);
  e.TitleBar = w;
  var I = n(hc);
  e.Toast = I;
  var C = n(vc);
  e.ContextualSaveBar = C;
  var k = n(ey);
  e.Share = k;
  var B = n(gc);
  e.NavigationMenu = B;
  var N = n(ty);
  e.ChannelMenu = N;
  var F = n(bc);
  e.AppLink = F;
  var V = n(ry);
  e.Pos = V;
  var L = n(ny);
  e.MarketingExternalActivityTopBar = L;
  var J = n(uy);
  e.Performance = J;
  var pe = n(sy);
  e.unstable_Picker = pe;
  var W = n(_c);
  e.WebVitals = W;
  var be = hy;
  Object.defineProperty(e, "isAppBridgeAction", { enumerable: !0, get: function() {
    return be.isAppBridgeAction;
  } }), i(Kt, e);
})(Ct);
var Ql = b && b.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
Object.defineProperty(Zu, "__esModule", { value: !0 });
var Xn = ie, my = Ct, eS = Be, Zn = my.ContextualSaveBar.Action, tS = my.ContextualSaveBar.create;
function rS(e) {
  var t = e.discardAction, r = t === void 0 ? { onAction: function() {
    return null;
  } } : t, n = e.saveAction, i = n === void 0 ? { onAction: function() {
    return null;
  } } : n, a = e.fullWidth, o = e.leaveConfirmationDisable, c = e.visible, h = eS.useAppBridge(), u = i.onAction, d = Ql(i, ["onAction"]), s = r.onAction, p = Ql(r, ["onAction"]), f = Xn.useMemo(function() {
    return tS(h, {
      saveAction: d,
      discardAction: p,
      fullWidth: a,
      leaveConfirmationDisable: o
    });
  }, [h]);
  return Xn.useEffect(function() {
    f.set({
      saveAction: d,
      discardAction: p,
      fullWidth: a,
      leaveConfirmationDisable: o
    }, c);
  }, [
    h,
    f,
    d,
    p,
    a,
    o,
    c
  ]), Xn.useEffect(function() {
    return f.subscribe(Zn.DISCARD, s), f.subscribe(Zn.SAVE, u), function() {
      f.unsubscribe();
    };
  }, [f, s, u]), Xn.useEffect(function() {
    c ? f.dispatch(Zn.SHOW) : f.dispatch(Zn.HIDE);
  }, [f, c]), null;
}
Zu.default = rS;
var nS = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Xu, "__esModule", { value: !0 });
var iS = nS(Zu);
Xu.default = iS.default;
var Oc = {}, Ac = {}, aS = b && b.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), oS = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ac, "__esModule", { value: !0 });
var uS = oS(ie), xa = Ct, cS = At, sS = (
  /** @class */
  function(e) {
    aS(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.componentDidMount = function() {
      var r = this.context;
      this.loading = xa.Loading.create(r), this.loading != null && this.loading.dispatch(xa.Loading.Action.START);
    }, t.prototype.componentWillUnmount = function() {
      this.loading != null && this.loading.dispatch(xa.Loading.Action.STOP);
    }, t.prototype.render = function() {
      return null;
    }, t.contextType = cS.AppBridgeContext, t;
  }(uS.default.Component)
);
Ac.default = sS;
var lS = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Oc, "__esModule", { value: !0 });
var fS = lS(Ac);
Oc.default = fS.default;
var gy = {}, Pc = {}, cr = {}, dS = b && b.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), pS = b && b.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Sc = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && dS(t, e, r);
  return pS(t, e), t;
}, Yi = b && b.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(cr, "__esModule", { value: !0 });
cr.transformActions = cr.generateRedirect = void 0;
var xn = Sc(kn), yS = Sc(oa), Au = Sc(sa);
function by(e, t, r, n) {
  if (r === void 0 && (r = "APP"), t != null) {
    var i = Au.create(e), a = n === !0 ? {
      url: t,
      newContext: !0
    } : t;
    return function() {
      i.dispatch(hS(r, n), a);
    };
  }
}
cr.generateRedirect = by;
function hS(e, t) {
  return t === !0 ? Au.Action.REMOTE : Au.Action[e];
}
function vS(e, t) {
  var r = t.primaryAction, n = t.secondaryActions, i = t.actionGroups, a = mS(e, r), o = Yi(Yi([], gS(e, n)), bS(e, i));
  return {
    primary: a,
    secondary: o
  };
}
cr.transformActions = vS;
function Ec(e, t) {
  var r = t.destructive === !0 ? xn.Style.Danger : void 0, n = xn.create(e, {
    label: t.content || "",
    disabled: t.disabled,
    loading: t.loading,
    plain: t.plain,
    style: r
  });
  t.onAction && n.subscribe(xn.Action.CLICK, t.onAction);
  var i = by(e, t.url, t.target, t.external);
  return i != null && n.subscribe(xn.Action.CLICK, i), n;
}
function mS(e, t) {
  if (t != null) {
    var r = Ec(e, t);
    return r;
  }
}
function gS(e, t) {
  t === void 0 && (t = []);
  var r = Yi([], t.map(function(n) {
    return Ec(e, n);
  }));
  return r;
}
function bS(e, t) {
  t === void 0 && (t = []);
  var r = Yi([], t.map(function(n) {
    var i = n.actions.map(function(a) {
      return Ec(e, a);
    });
    return yS.create(e, { label: n.title, plain: n.plain, buttons: i });
  }));
  return r;
}
var Ji = b && b.__assign || function() {
  return Ji = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Ji.apply(this, arguments);
}, _S = b && b.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
Object.defineProperty(Pc, "__esModule", { value: !0 });
var _r = ie, Tr = ca, OS = cr, AS = Be;
function PS(e) {
  var t = AS.useAppBridge(), r = _r.useRef(null), n = _r.useRef({ open: !1 }), i = e.open, a = _r.useRef(!1), o = _r.useMemo(function() {
    e.primaryAction, e.secondaryActions;
    var c = _S(e, ["primaryAction", "secondaryActions"]);
    return Tr.create(t, Yl(t, c));
  }, [t]);
  return _r.useEffect(function() {
    if (a.current) {
      n.current = e;
      return;
    }
    var c = n.current.open, h = c !== i;
    if (i) {
      var u = Yl(t, e, c), d = !h;
      SS(u), o.set(u, d);
    }
    return h && (i ? (o.dispatch(Tr.Action.OPEN), r.current = document.activeElement) : (o.dispatch(Tr.Action.CLOSE), r.current != null && document.contains(r.current) && (r.current.focus(), r.current = null))), e.onClose != null && o.subscribe(Tr.Action.CLOSE, e.onClose), n.current = e, function() {
      o.unsubscribe();
    };
  }, [e, i]), _r.useEffect(function() {
    return function() {
      n.current.open && o.dispatch(Tr.Action.CLOSE);
    };
  }, [o]), null;
}
function SS(e) {
  return typeof e.url == "string" || typeof e.path == "string";
}
function Yl(e, t, r) {
  var n = t.title, i = t.size, a = t.message, o = t.src, c = t.primaryAction, h = t.secondaryActions, u = t.loading, d = i == null ? void 0 : Tr.Size[i], s = {};
  return o != null && (o.match("^https?://") ? s.url = o : s.path = o), Ji(Ji({ title: n, message: a, size: d }, s), { footer: {
    buttons: OS.transformActions(e, {
      primaryAction: c,
      secondaryActions: h
    })
  }, loading: r ? void 0 : u });
}
Pc.default = PS;
var Tc = {}, wc = {}, ES = b && b.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), TS = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(wc, "__esModule", { value: !0 });
var wS = TS(ie), IS = Ct, jS = At, CS = (
  /** @class */
  function(e) {
    ES(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.componentDidMount = function() {
      var r = this.context;
      this.modalContent = IS.ModalContent.create(r), this.syncLoadingStatus();
    }, t.prototype.componentDidUpdate = function() {
      this.syncLoadingStatus();
    }, t.prototype.syncLoadingStatus = function() {
      this.modalContent && (this.props.loading ? this.modalContent.loading() : this.modalContent.loaded());
    }, t.prototype.render = function() {
      return null;
    }, t.contextType = jS.AppBridgeContext, t;
  }(wS.default.Component)
);
wc.default = CS;
var MS = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Tc, "__esModule", { value: !0 });
var RS = MS(wc);
Tc.default = RS.default;
(function(e) {
  var t = b && b.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalContent = void 0;
  var r = t(Pc), n = Tc;
  Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return t(n).default;
  } }), e.default = r.default;
})(gy);
var Ic = {}, jc = {};
Object.defineProperty(jc, "__esModule", { value: !0 });
var ei = ie, NS = bc, DS = gc, kS = Be;
function BS(e, t) {
  return e.destination.replace(/\/$/, "") === t.pathname.replace(/\/$/, "");
}
function LS(e) {
  var t = e.navigationLinks, r = e.matcher, n = r === void 0 ? BS : r, i = kS.useAppBridge(), a = ei.useState(), o = a[0], c = a[1];
  ei.useEffect(function() {
    var u = t.map(function(d) {
      return NS.create(i, d);
    });
    c(u);
  }, [i, JSON.stringify(t)]);
  var h = ei.useMemo(function() {
    var u = (o || []).findIndex(function(d) {
      return n(d, location);
    });
    if (u >= 0)
      return o == null ? void 0 : o[u];
  }, [i, location.pathname, n, o, location.pathname]);
  return ei.useEffect(function() {
    o && DS.create(i, { items: o, active: h });
  }, [o, h]), null;
}
jc.default = LS;
var $S = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ic, "__esModule", { value: !0 });
var FS = $S(jc);
Ic.default = FS.default;
var Cc = {}, _y = {}, Pu = { exports: {} }, eo = {}, to = {}, ro = {}, Zr = {}, Oy = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.createTransportListener = e.fromWindow = e.fromFrame = e.Context = void 0;
  var t = Sn, r = at, n = Gr, i = qt, a = Qi;
  (function(d) {
    d.Modal = "Modal", d.Main = "Main";
  })(e.Context || (e.Context = {}));
  function o(d, s, p) {
    var f = [], y = d.host, l = d.window;
    if (!y)
      throw t.fromAction("App frame is undefined", t.AppActionType.WINDOW_UNDEFINED);
    return a.isUnframed && window.MobileWebView && Object.assign(window.MobileWebView, {
      postMessageToIframe: function(v, m) {
        l == null || l.postMessage(v, m), u(v) && y.postMessage(JSON.stringify(v.payload), location.origin);
      },
      updateIframeUrl: function(v) {
        var m = window.location, g = (d.window || {}).location;
        try {
          var O = new URL(v).origin;
          O === s && g ? g.replace(v) : m.href = v;
        } catch {
        }
      }
    }), y.addEventListener("message", function(v) {
      if (!(v.source === y || !r.isAppMessage(v))) {
        if (v.origin !== s) {
          var m = "Message origin '" + v.origin + "' does not match app origin '" + s + "'.", g = t.invalidOriginAction(m), O = {
            type: "dispatch",
            payload: g
          };
          l == null || l.postMessage(O, v.origin);
          return;
        }
        if (a.isUnframed && window.MobileWebView) {
          var g = JSON.stringify({
            id: "unframed://fromClient",
            origin: s,
            data: v.data
          });
          window.MobileWebView.postMessage(g);
          return;
        }
        for (var _ = 0, T = f; _ < T.length; _++) {
          var P = T[_];
          P(v);
        }
      }
    }), {
      context: p,
      localOrigin: s,
      frameWindow: l,
      hostFrame: y,
      dispatch: function(v) {
        l == null || l.postMessage(v, s);
      },
      subscribe: function(v) {
        return i.addAndRemoveFromCollection(f, v);
      }
    };
  }
  e.fromFrame = o;
  function c(d, s) {
    var p = [];
    return typeof window !== void 0 && window.addEventListener("message", function(f) {
      if (!(window === d && !a.isUnframed || f.source !== d || !(r.isAppBridgeAction(f.data.payload) || r.isAppMessage(f))))
        for (var y = 0, l = p; y < l.length; y++) {
          var v = l[y];
          v(f);
        }
    }), {
      localOrigin: s,
      hostFrame: d,
      dispatch: function(f) {
        var y;
        if (!((y = f.source) === null || y === void 0) && y.host) {
          if (a.isUnframed && window && window.MobileWebView) {
            var l = JSON.stringify({
              id: "unframed://fromClient",
              origin: s,
              data: f
            });
            window.MobileWebView.postMessage(l);
            return;
          }
          var v = new URL("https://" + f.source.host).origin;
          d.postMessage(f, v);
        }
      },
      subscribe: function(f) {
        return i.addAndRemoveFromCollection(p, f);
      }
    };
  }
  e.fromWindow = c;
  function h() {
    var d = [], s = {};
    function p(f) {
      function y() {
        if (arguments.length < 2)
          return i.addAndRemoveFromCollection(d, { callback: arguments[0] });
        var l = Array.from(arguments), v = l[0], m = l[1], g = l[2], O = { callback: m, id: g }, _ = { type: v, id: g };
        return Object.prototype.hasOwnProperty.call(s, v) || (s[v] = []), f && f(n.MessageType.Subscribe, _), i.addAndRemoveFromCollection(s[v], O, function() {
          f && f(n.MessageType.Unsubscribe, _);
        });
      }
      return y;
    }
    return {
      createSubscribeHandler: p,
      handleMessage: function(f) {
        d.forEach(function(y) {
          return y.callback(f);
        });
      },
      handleActionDispatch: function(f) {
        var y = f.type, l = f.payload, v = !1;
        if (Object.prototype.hasOwnProperty.call(s, y))
          for (var m = 0, g = s[y]; m < g.length; m++) {
            var O = g[m], _ = O.id, T = O.callback, P = l && l.id === _;
            (P || !_) && (T(l), v = !0);
          }
        return v;
      }
    };
  }
  e.createTransportListener = h;
  function u(d) {
    return d !== null && typeof d == "object" && !Array.isArray(d) && d.type === "dispatch" && typeof d.payload == "object";
  }
})(Oy);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(n, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(n, i, a, o) {
    o === void 0 && (o = a), n[o] = i[a];
  }), r = b && b.__exportStar || function(n, i) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Oy, e);
})(Zr);
var Jt = {}, Jl;
function Ay() {
  if (Jl)
    return Jt;
  Jl = 1, Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.mockAppBridge = Jt.serverAppBridge = void 0;
  var e = fr, t = function() {
  }, r = new Promise(function() {
  });
  return Jt.serverAppBridge = {
    dispatch: function() {
      return {};
    },
    error: function() {
      return t;
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
      return t;
    }
  }, Jt.mockAppBridge = {
    dispatch: function() {
      return {};
    },
    error: function() {
      return t;
    },
    featuresAvailable: function() {
      return r;
    },
    getState: function() {
      return r;
    },
    localOrigin: "",
    hostOrigin: "",
    subscribe: function() {
      return t;
    }
  }, Jt;
}
var on = {}, gt = {}, Xl;
function Mc() {
  if (Xl)
    return gt;
  Xl = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.getWindow = gt.getLocation = gt.redirect = gt.shouldRedirect = void 0;
  function e(a) {
    return a === window;
  }
  gt.shouldRedirect = e;
  function t(a) {
    var o = r();
    o && o.assign(a);
  }
  gt.redirect = t;
  function r() {
    return i() ? window.location : void 0;
  }
  gt.getLocation = r;
  function n() {
    return i() ? window : void 0;
  }
  gt.getWindow = n;
  function i() {
    return typeof window < "u";
  }
  return gt;
}
var Zl;
function US() {
  if (Zl)
    return on;
  Zl = 1, Object.defineProperty(on, "__esModule", { value: !0 }), on.handleAppPrint = void 0;
  var e = Mc();
  function t() {
    return navigator.userAgent.indexOf("iOS") >= 0;
  }
  function r() {
    var o = e.getWindow();
    if (!(!o || !o.document || !o.document.body)) {
      var c = o.document.createElement("input");
      return c.style.display = "none", o.document.body.appendChild(c), c;
    }
  }
  function n() {
    var o;
    (o = e.getWindow()) === null || o === void 0 || o.print();
  }
  function i() {
    var o = r();
    o && (o.select(), n(), o.remove());
  }
  function a() {
    t() ? i() : n();
  }
  return on.handleAppPrint = a, on;
}
var no = {}, xl;
function Py() {
  return xl || (xl = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isV1Config = e.MessageType = e.LifecycleHook = e.PermissionType = void 0;
    var t = Gr;
    Object.defineProperty(e, "MessageType", { enumerable: !0, get: function() {
      return t.MessageType;
    } });
    var r = Gr;
    Object.defineProperty(e, "PermissionType", { enumerable: !0, get: function() {
      return r.PermissionType;
    } }), Object.defineProperty(e, "LifecycleHook", { enumerable: !0, get: function() {
      return r.LifecycleHook;
    } });
    function n(i) {
      return !i.host;
    }
    e.isV1Config = n;
  }(no)), no;
}
var ti = {}, io = {}, ef;
function VS() {
  return ef || (ef = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.removeFromCollection = e.addAndRemoveFromCollection = void 0;
    var t = qt;
    Object.defineProperty(e, "addAndRemoveFromCollection", { enumerable: !0, get: function() {
      return t.addAndRemoveFromCollection;
    } }), Object.defineProperty(e, "removeFromCollection", { enumerable: !0, get: function() {
      return t.removeFromCollection;
    } });
  }(io)), io;
}
var tf;
function GS() {
  if (tf)
    return ti;
  tf = 1, Object.defineProperty(ti, "__esModule", { value: !0 });
  var e = VS(), t = (
    /** @class */
    function() {
      function r() {
        this.map = {};
      }
      return r.prototype.set = function(n, i) {
        Object.prototype.hasOwnProperty.call(this.map, n) || (this.map[n] = []);
        var a = { handler: i, remove: function() {
        } }, o = e.addAndRemoveFromCollection(this.map[n], a);
        return a = { handler: i, remove: o }, o;
      }, r.prototype.get = function(n) {
        var i = this.map[n];
        return i ? i.map(function(a) {
          return a.handler;
        }) : void 0;
      }, r.prototype.run = function(n, i, a) {
        for (var o = [], c = 3; c < arguments.length; c++)
          o[c - 3] = arguments[c];
        var h = 0, u = this.get(n) || [];
        function d() {
          for (var s = [], p = 0; p < arguments.length; p++)
            s[p] = arguments[p];
          var f = u[h++];
          return f ? f(d).apply(a, s) : i.apply(a, s);
        }
        return d.apply(a, o);
      }, r;
    }()
  );
  return ti.default = t, ti;
}
var rf;
function nf() {
  return rf || (rf = 1, function(e) {
    var t = b && b.__assign || function() {
      return t = Object.assign || function(w) {
        for (var I, C = 1, k = arguments.length; C < k; C++) {
          I = arguments[C];
          for (var B in I)
            Object.prototype.hasOwnProperty.call(I, B) && (w[B] = I[B]);
        }
        return w;
      }, t.apply(this, arguments);
    }, r = b && b.__spreadArray || function(w, I) {
      for (var C = 0, k = I.length, B = w.length; C < k; C++, B++)
        w[B] = I[C];
      return w;
    }, n = b && b.__importDefault || function(w) {
      return w && w.__esModule ? w : { default: w };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createApp = e.createAppWrapper = e.createClientApp = e.WINDOW_UNDEFINED_MESSAGE = void 0;
    var i = zt, a = la, o = fr, c = Zr, h = Ay(), u = Bn, d = nc, s = _c, p = US(), f = Mc(), y = Py(), l = n(GS());
    e.WINDOW_UNDEFINED_MESSAGE = "window is not defined. Running an app outside a browser is not supported";
    function v(w, I) {
      var C = I.apiKey, k = I.host, B = I.forceRedirect, N = B === void 0 ? !u.isDevelopmentClient : B, F = f.getLocation();
      if (u.isUnframed || !F || !C || !k || !N || !f.shouldRedirect(w))
        return !1;
      var V = "https://" + k + "/apps/" + C + F.pathname + (F.search || "");
      return f.redirect(V), !0;
    }
    var m = function(w) {
      return function(I) {
        return w(t(t({}, I), { version: i.getVersion(), clientInterface: {
          name: i.getPackageName(),
          version: i.getVersion()
        } }));
      };
    }, g = function(w) {
      w.set(y.LifecycleHook.DispatchAction, m);
    };
    function O(w) {
      w.subscribe(a.Action.APP, p.handleAppPrint), w.dispatch(d.initialize());
      try {
        s.initializeWebVitals(w);
      } catch (I) {
        console.error("App-Bridge failed to initialize web-vitals", I);
      }
    }
    var _ = function(w, I) {
      I === void 0 && (I = []);
      var C = [], k = c.createTransportListener(), B = function(N) {
        var F = N.data, V = F.type, L = F.payload;
        switch (V) {
          case "getState": {
            var J = C.splice(0);
            J.forEach(function(be) {
              return be(L);
            });
            break;
          }
          case "dispatch": {
            k.handleMessage(L);
            var pe = k.handleActionDispatch(L);
            if (pe)
              return;
            var W = i.findMatchInEnum(o.Action, L.type);
            W && o.throwError(W, L);
            break;
          }
        }
      };
      return w.subscribe(B), function(N) {
        var F = T(N), V = v(w.hostFrame, F);
        if (V)
          return h.mockAppBridge;
        var L = S(w, F), J = k.createSubscribeHandler(L);
        L(y.MessageType.Unsubscribe);
        function pe(K) {
          return L(y.MessageType.Dispatch, K), K;
        }
        for (var W = new URL("https://" + F.host).origin, be = new l.default(), H = {
          hostOrigin: W,
          localOrigin: w.localOrigin,
          hooks: be,
          dispatch: function(K) {
            return H.hooks ? H.hooks.run(y.LifecycleHook.DispatchAction, pe, H, K) : pe(K);
          },
          featuresAvailable: function() {
            for (var K = [], Ce = 0; Ce < arguments.length; Ce++)
              K[Ce] = arguments[Ce];
            var _e = K[0], Le = Array.isArray(_e) ? r([], _e) : K;
            return H.getState("features").then(function(Pe) {
              return Le.length ? Le.reduce(function(ht, Mt) {
                return Object.keys(Pe).includes(Mt) && (ht[Mt] = Pe[Mt]), ht;
              }, {}) : Pe;
            });
          },
          getState: function(K) {
            return K && typeof K != "string" ? Promise.resolve(void 0) : new Promise(function(Ce) {
              C.push(Ce), L(y.MessageType.GetState);
            }).then(function(Ce) {
              var _e = Ce;
              if (K)
                for (var Le = 0, Pe = K.split("."); Le < Pe.length; Le++) {
                  var ht = Pe[Le];
                  if (_e == null || typeof _e != "object" || Array.isArray(_e) || !Object.keys(_e).includes(ht))
                    return;
                  _e = _e[ht];
                }
              return _e;
            });
          },
          subscribe: J,
          error: function(K, Ce) {
            var _e = [];
            return i.forEachInEnum(o.Action, function(Le) {
              _e.push(J(Le, K, Ce));
            }), function() {
              _e.forEach(function(Le) {
                return Le();
              });
            };
          }
        }, ne = 0, ye = I; ne < ye.length; ne++) {
          var ue = ye[ne];
          ue(be, H);
        }
        return O(H), H;
      };
    };
    e.createClientApp = _;
    function T(w) {
      var I;
      if (!w.host)
        throw o.fromAction("host must be provided", o.AppActionType.INVALID_CONFIG);
      if (!w.apiKey)
        throw o.fromAction("apiKey must be provided", o.AppActionType.INVALID_CONFIG);
      try {
        var C = atob((I = w.host) === null || I === void 0 ? void 0 : I.replace(/_/g, "/").replace(/-/g, "+"));
        return t(t({}, w), { host: C });
      } catch {
        var k = "not a valid host, please use the value provided by Shopify";
        throw o.fromAction(k, o.AppActionType.INVALID_CONFIG);
      }
    }
    function P(w, I, C) {
      if (C === void 0 && (C = []), !w)
        throw o.fromAction(e.WINDOW_UNDEFINED_MESSAGE, o.AppActionType.WINDOW_UNDEFINED);
      var k = f.getLocation(), B = I || k && k.origin;
      if (!B)
        throw o.fromAction("local origin cannot be blank", o.AppActionType.MISSING_LOCAL_ORIGIN);
      var N = c.fromWindow(w, B), F = e.createClientApp(N, r([g], C));
      return F;
    }
    e.createAppWrapper = P;
    function E(w) {
      var I = f.getWindow();
      return !I || !I.top ? h.serverAppBridge : P(I.top)(w);
    }
    e.createApp = E;
    function S(w, I) {
      return function(C, k) {
        w.dispatch({
          payload: k,
          source: I,
          type: C
        });
      };
    }
    e.default = E;
  }(ro)), ro;
}
var af;
function In() {
  return af || (af = 1, function(e) {
    var t = b && b.__createBinding || (Object.create ? function(i, a, o, c) {
      c === void 0 && (c = o), Object.defineProperty(i, c, { enumerable: !0, get: function() {
        return a[o];
      } });
    } : function(i, a, o, c) {
      c === void 0 && (c = o), i[c] = a[o];
    }), r = b && b.__exportStar || function(i, a) {
      for (var o in i)
        o !== "default" && !Object.prototype.hasOwnProperty.call(a, o) && t(a, i, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = nf();
    r(Py(), e), r(nf(), e), e.default = n.createClientApp;
  }(to)), to;
}
var of;
function qS() {
  return of || (of = 1, function(e) {
    var t = b && b.__createBinding || (Object.create ? function(i, a, o, c) {
      c === void 0 && (c = o), Object.defineProperty(i, c, { enumerable: !0, get: function() {
        return a[o];
      } });
    } : function(i, a, o, c) {
      c === void 0 && (c = o), i[c] = a[o];
    }), r = b && b.__exportStar || function(i, a) {
      for (var o in i)
        o !== "default" && !Object.prototype.hasOwnProperty.call(a, o) && t(a, i, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
    var n = In();
    Object.defineProperty(e, "default", { enumerable: !0, get: function() {
      return n.createApp;
    } }), r(Zr, e), r(In(), e);
  }(eo)), eo;
}
var ao = {}, ri = {}, oo = {}, uo = {}, fe = {}, co = {}, so = {}, uf;
function We() {
  return uf || (uf = 1, function(e) {
    var t = b && b.__assign || function() {
      return t = Object.assign || function(l) {
        for (var v, m = 1, g = arguments.length; m < g; m++) {
          v = arguments[m];
          for (var O in v)
            Object.prototype.hasOwnProperty.call(v, O) && (l[O] = v[O]);
        }
        return l;
      }, t.apply(this, arguments);
    }, r = b && b.__spreadArray || function(l, v) {
      for (var m = 0, g = v.length, O = l.length; m < g; m++, O++)
        l[O] = v[m];
      return l;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validate = e.matchesPositiveInteger = e.matchesBoolean = e.makeOptional = e.matchesString = e.matchesObject = e.getErrors = e.oneOf = e.matchesArray = e.matchesEnum = e.composeSchemas = e.TYPE_ERROR = void 0, e.TYPE_ERROR = "type_error_expected";
    function n() {
      for (var l = [], v = 0; v < arguments.length; v++)
        l[v] = arguments[v];
      return function(m) {
        for (var g, O = 0, _ = l.length; !g && O < _; ) {
          if (g = l[O](m), g)
            return g;
          O++;
        }
      };
    }
    e.composeSchemas = n;
    function i(l, v) {
      return function(m) {
        var g = Object.keys(l).map(function(_) {
          return l[_];
        }), O = v && v.message || "expected:" + g.map(function(_) {
          return "`" + _ + "`";
        }).join(" or ");
        return g.includes(m) ? void 0 : c(m, "invalid_enum_value", t(t({}, v), { message: O }));
      };
    }
    e.matchesEnum = i;
    function a(l, v) {
      return function(m) {
        if (!Array.isArray(m))
          return c(m, e.TYPE_ERROR + "_array", v);
        if (l) {
          var g = [];
          return m.forEach(function(O, _) {
            var T = l(O);
            T && (g = g.concat(T.map(function(P) {
              return t(t({}, P), { path: "['" + _ + "']" + (P.path || "") });
            })));
          }), g.length ? g : void 0;
        }
      };
    }
    e.matchesArray = a;
    function o() {
      for (var l = [], v = 0; v < arguments.length; v++)
        l[v] = arguments[v];
      return function(m) {
        for (var g = [], O = 0, _ = l; O < _.length; O++) {
          var T = _[O], P = T(m);
          if (P == null)
            return P;
          g.push.apply(g, P);
        }
        return g;
      };
    }
    e.oneOf = o;
    function c(l, v, m) {
      return m === void 0 && (m = { message: void 0 }), [
        {
          value: l,
          error: v,
          message: typeof m.message == "function" ? m.message(v, l) : m.message
        }
      ];
    }
    function h(l, v, m) {
      var g = m ? l[m] : l, O = m ? "['" + m + "']" : void 0, _ = v(g);
      if (_)
        return _.map(function(T) {
          return t(t({}, T), { path: "" + (O || "") + (T.path || "") || void 0 });
        });
    }
    e.getErrors = h;
    function u(l, v) {
      return function(m) {
        if (typeof m != "object" || !m || Array.isArray(m))
          return c(m, e.TYPE_ERROR + "_object", v);
        var g = Object.keys(l).reduce(function(O, _) {
          return r(r([], O), h(m, l[_], _) || []);
        }, []);
        return g.length ? g : void 0;
      };
    }
    e.matchesObject = u;
    function d(l) {
      return function(v) {
        return typeof v == "string" ? void 0 : c(v, e.TYPE_ERROR + "_string", l);
      };
    }
    e.matchesString = d;
    function s(l) {
      return function(v) {
        if (v != null)
          return l(v);
      };
    }
    e.makeOptional = s;
    function p(l) {
      return function(v) {
        return typeof v == "boolean" ? void 0 : c(v, e.TYPE_ERROR + "_boolean", l);
      };
    }
    e.matchesBoolean = p;
    function f(l) {
      return function(v) {
        return !Number.isInteger(v) || v < 0 ? c(v, e.TYPE_ERROR + "_integer", l) : void 0;
      };
    }
    e.matchesPositiveInteger = f;
    function y(l, v) {
      return h(l, v);
    }
    e.validate = y;
  }(so)), so;
}
var lo = {}, cf;
function rt() {
  return cf || (cf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.relativePathSchema = e.relativeUrlSchema = e.isValidRelativePath = e.createActionValidator = void 0;
    var t = We();
    function r(i, a, o, c) {
      a === void 0 && (a = void 0), o === void 0 && (o = !1), c === void 0 && (c = !1);
      var h = t.matchesObject({
        id: c ? t.matchesString() : t.makeOptional(t.matchesString())
      }), u = a ? t.composeSchemas(h, a) : h;
      return t.matchesObject({
        type: t.matchesEnum(i, {
          message: function(d, s) {
            return "The action type `" + s + "` is invalid or unsupported";
          }
        }),
        payload: o ? u : t.makeOptional(u)
      });
    }
    e.createActionValidator = r;
    function n(i) {
      return typeof i == "string" && (i === "" || i.startsWith("/"));
    }
    e.isValidRelativePath = n, e.relativeUrlSchema = t.composeSchemas(t.matchesString(), function(i) {
      return n(i) ? void 0 : [{ error: "invalid_relative_path", value: i, message: "expected string to start with `/`" }];
    }), e.relativePathSchema = t.matchesObject({
      path: e.relativeUrlSchema
    });
  }(lo)), lo;
}
var sf;
function da() {
  return sf || (sf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.buttonSchemaWithId = e.buttonSchema = void 0;
    var t = Bt;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = We(), n = rt();
    e.buttonSchema = r.matchesObject({
      disabled: r.makeOptional(r.matchesBoolean()),
      label: r.matchesString(),
      style: r.makeOptional(r.matchesEnum(t.Style)),
      icon: r.makeOptional(r.matchesEnum(t.Icon)),
      loading: r.makeOptional(r.matchesBoolean()),
      plain: r.makeOptional(r.matchesBoolean())
    }), e.buttonSchemaWithId = r.composeSchemas(r.matchesObject({
      id: r.matchesString()
    }), e.buttonSchema);
    function i(o) {
      return r.validate(o, e.buttonSchema);
    }
    e.validateProps = i;
    function a(o) {
      var c = n.createActionValidator(t.Action, o.type === t.Action.UPDATE ? e.buttonSchema : void 0, !0, !0);
      return r.validate(o, c);
    }
    e.validateAction = a;
  }(co)), co;
}
var fo = {}, lf;
function Sy() {
  return lf || (lf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.buttonGroupSchema = void 0;
    var t = ur;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = We(), n = rt(), i = da();
    e.buttonGroupSchema = r.composeSchemas(i.buttonSchema, r.matchesObject({
      buttons: r.matchesArray(r.makeOptional(i.buttonSchemaWithId))
    }));
    function a(c) {
      return r.validate(c, e.buttonGroupSchema);
    }
    e.validateProps = a;
    function o(c) {
      var h = n.createActionValidator(t.Action, e.buttonGroupSchema, !0, !0);
      return r.validate(c, h);
    }
    e.validateAction = o;
  }(fo)), fo;
}
var po = {}, ff;
function WS() {
  return ff || (ff = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.contextSaveBarSchema = void 0;
    var t = We(), r = mc;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return r.Action;
    } });
    var n = rt();
    e.contextSaveBarSchema = t.makeOptional(t.matchesObject({
      fullWidth: t.makeOptional(t.matchesBoolean()),
      discardAction: t.makeOptional(t.matchesObject({
        disabled: t.makeOptional(t.matchesBoolean()),
        discardConfirmationModal: t.makeOptional(t.matchesBoolean())
      })),
      saveAction: t.makeOptional(t.matchesObject({
        disabled: t.makeOptional(t.matchesBoolean())
      })),
      leaveConfirmationDisable: t.makeOptional(t.matchesBoolean())
    }));
    function i(o) {
      return t.validate(o, e.contextSaveBarSchema);
    }
    e.validateProps = i;
    function a(o) {
      var c = n.createActionValidator(r.Action, e.contextSaveBarSchema);
      return t.validate(o, c);
    }
    e.validateAction = a;
  }(po)), po;
}
var yo = {}, df;
function HS() {
  return df || (df = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.feedbackModalSchema = void 0;
    var t = cc;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = We(), n = rt();
    e.feedbackModalSchema = r.matchesObject({
      formId: r.matchesPositiveInteger()
    });
    function i(o) {
      return r.validate(o, e.feedbackModalSchema);
    }
    e.validateProps = i;
    function a(o) {
      switch (o.type) {
        case t.Action.OPEN:
          return r.validate(o, n.createActionValidator(t.Action, e.feedbackModalSchema, !0));
        case t.Action.CLOSE:
        default:
          return r.validate(o, n.createActionValidator(t.Action));
      }
    }
    e.validateAction = a;
  }(yo)), yo;
}
var ho = {}, pf;
function zS() {
  return pf || (pf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var t = Vi;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = We(), n = rt();
    function i(a) {
      var o = n.createActionValidator(t.Action);
      return r.validate(a, o);
    }
    e.validateAction = i;
  }(ho)), ho;
}
var vo = {}, yf;
function Ey() {
  return yf || (yf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.linkActionSchema = e.linkPropsSchema = void 0;
    var t = qr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = We(), n = rt(), i;
    (function(c) {
      c.APP = "APP::NAVIGATION::REDIRECT::APP", c.LEGACY_APP = "APP";
    })(i || (i = {})), e.linkPropsSchema = r.matchesObject({
      label: r.matchesString(),
      destination: n.relativeUrlSchema,
      redirectType: r.matchesEnum(i)
    }), e.linkActionSchema = r.matchesObject({
      label: r.matchesString(),
      destination: n.relativePathSchema,
      redirectType: r.matchesEnum(i)
    });
    function a(c) {
      return r.validate(c, e.linkPropsSchema);
    }
    e.validateProps = a;
    function o(c) {
      return r.validate(c, n.createActionValidator(t.Action, e.linkActionSchema, !0, !0));
    }
    e.validateAction = o;
  }(vo)), vo;
}
var Xt = {}, hf;
function KS() {
  if (hf)
    return Xt;
  hf = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.validateAction = Xt.validateProps = void 0;
  var e = Hi, t = zi, r = We(), n = rt(), i = oe, a = Ey(), o = r.matchesObject({ id: r.matchesString(), options: a.linkPropsSchema });
  function c(p) {
    return [
      {
        error: "invalid_active_item",
        value: p,
        message: "expected active item to exist in menu items"
      }
    ];
  }
  function h(p) {
    var f = r.matchesObject({
      items: r.makeOptional(r.matchesArray(o)),
      active: r.makeOptional(o)
    }), y = p.items, l = p.active;
    if (y && l) {
      var v = r.matchesObject({
        active: r.composeSchemas(o, function(m) {
          return y.find(function(g) {
            return g.id === m.id;
          }) ? void 0 : c(m);
        })
      });
      return r.composeSchemas(f, v);
    }
    return f;
  }
  function u(p) {
    var f = r.matchesObject({
      items: r.makeOptional(r.matchesArray(a.linkActionSchema)),
      active: r.makeOptional(r.matchesString())
    }), y = p.items, l = p.active;
    if (y && l) {
      var v = r.matchesObject({
        active: r.composeSchemas(r.matchesString(), function(m) {
          return y.find(function(g) {
            return g.id === m;
          }) ? void 0 : c(m);
        })
      });
      return r.composeSchemas(f, v);
    }
    return f;
  }
  function d(p) {
    var f = r.validate(p, h(p));
    return f;
  }
  Xt.validateProps = d;
  function s(p) {
    var f = e.Action;
    return i.findMatchInEnum(t.Action, p.type) && (f = t.Action), r.validate(p, n.createActionValidator(f, u(p.payload), !0, !1));
  }
  return Xt.validateAction = s, Xt;
}
var mo = {}, un = {}, cn = {}, vf;
function QS() {
  return vf || (vf = 1, Object.defineProperty(cn, "__esModule", { value: !0 }), cn.INTERNAL_PROTOCOL = void 0, cn.INTERNAL_PROTOCOL = "shopify:"), cn;
}
var mf;
function YS() {
  if (mf)
    return un;
  mf = 1, Object.defineProperty(un, "__esModule", { value: !0 }), un.isSafe = void 0;
  var e = QS(), t = /\/\/\//, r = /[/\\][/\\]/, n = ["https:", "http:"], i = "http://test.com";
  function a(h, u) {
    var d = u === void 0 ? {} : u, s = d.allowedDomains, p = s === void 0 ? [] : s, f = d.subdomains, y = f === void 0 ? [] : f, l = d.matchPath, v = d.requireAbsolute, m = d.requireSSL, g = d.allowInternalProtocol;
    if (t.test(h))
      return !1;
    if (h.startsWith("/"))
      return p.length > 0 || y.length > 0 || v || m ? !1 : l ? c(new URL(h, i), h, l) : !r.test(h);
    var O;
    try {
      O = new URL(h);
    } catch {
      return !1;
    }
    return g && O.protocol === e.INTERNAL_PROTOCOL ? !0 : !(!n.includes(O.protocol) || m && O.protocol !== "https:" || O.username || O.password || l && !c(O, h, l) || !o(O, p, y));
  }
  un.isSafe = a;
  function o(h, u, d) {
    if (!d.every(function(p) {
      return p.startsWith(".");
    }))
      throw new TypeError("Subdomains must begin with .");
    var s = h.hostname;
    return u.length === 0 && d.length === 0 || u.includes(s) || d.some(function(p) {
      return s.endsWith(p);
    });
  }
  function c(h, u, d) {
    var s = h.pathname, p = u.replace(h.origin, "").split("?")[0];
    return typeof d == "string" ? s === d && p === d : d.test(s) && d.test(p);
  }
  return un;
}
var gf;
function JS() {
  return gf || (gf = 1, function(e) {
    var t = b && b.__assign || function() {
      return t = Object.assign || function(f) {
        for (var y, l = 1, v = arguments.length; l < v; l++) {
          y = arguments[l];
          for (var m in y)
            Object.prototype.hasOwnProperty.call(y, m) && (f[m] = y[m]);
        }
        return f;
      }, t.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var r = We(), n = rt(), i = Tn;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return i.Action;
    } });
    var a = Bt, o = YS(), c = da();
    function h(f, y) {
      var l;
      try {
        l = new URL(y).hostname;
      } catch {
        return [
          {
            error: "invalid_app_origin",
            value: y,
            message: "Provided value for app origin: `" + y + "` is invalid"
          }
        ];
      }
      var v = o.isSafe(f, {
        requireAbsolute: !0,
        requireSSL: !0,
        allowInternalProtocol: !0,
        allowedDomains: [l]
      });
      if (!v)
        return [
          {
            error: "not_matching_app_origin",
            value: f,
            message: "Provided URL origin does not match app origin `" + l + "`"
          }
        ];
    }
    function u() {
      return function(f) {
        var y = [i.Size.Small, i.Size.Medium, i.Size.Large];
        if (!y.includes(f)) {
          var l = "expected:" + y.map(function(v) {
            return "`" + v + "`";
          }).join(" or ");
          return f === i.Size.Full && (l += ". Size `" + f + "` is deprecated as of version 1.6.5 and will fall back to size `medium`"), f === i.Size.Auto && (l += ". Size `" + f + "` is deprecated as of version 1.12.x and will fall back to size `medium`. Use the `setUpModalAutoSizing` utility from `app-bridge` instead"), [
            {
              error: "invalid_enum_value",
              value: f,
              message: l
            }
          ];
        }
      };
    }
    function d(f, y) {
      f === void 0 && (f = {});
      var l = r.matchesObject({
        title: r.makeOptional(r.matchesString()),
        footer: r.makeOptional(r.matchesObject({
          buttons: r.matchesObject({
            primary: r.makeOptional(c.buttonSchemaWithId),
            secondary: r.makeOptional(r.matchesArray(c.buttonSchemaWithId))
          })
        })),
        size: r.makeOptional(u())
      });
      if (i.isIframeModal(f)) {
        if (f.url) {
          var v = r.matchesObject({
            url: r.composeSchemas(r.matchesString(), function(m) {
              return y ? h(m, y) : void 0;
            })
          });
          return r.composeSchemas(l, v);
        }
        return r.composeSchemas(l, n.relativePathSchema);
      }
      return r.composeSchemas(l, r.matchesObject({ message: r.matchesString() }));
    }
    function s(f, y) {
      return r.validate(f, d(f, y));
    }
    e.validateProps = s;
    function p(f, y) {
      var l = d(f.payload, y);
      switch (f.type) {
        case i.Action.OPEN:
        case i.Action.UPDATE:
          return r.validate(f, n.createActionValidator(i.Action, l, !0, f.type === i.Action.UPDATE));
        case i.Action.FOOTER_BUTTON_CLICK:
          return c.validateAction(t(t({}, f), { type: a.Action.CLICK }));
        case i.Action.FOOTER_BUTTON_UPDATE:
          return c.validateAction(t(t({}, f), { type: a.Action.UPDATE }));
        case i.Action.CLOSE:
        default:
          return r.validate(f, n.createActionValidator(i.Action));
      }
    }
    e.validateAction = p;
  }(mo)), mo;
}
var Nt = {}, bf;
function XS() {
  if (bf)
    return Nt;
  bf = 1;
  var e = b && b.__assign || function() {
    return e = Object.assign || function(s) {
      for (var p, f = 1, y = arguments.length; f < y; f++) {
        p = arguments[f];
        for (var l in p)
          Object.prototype.hasOwnProperty.call(p, l) && (s[l] = p[l]);
      }
      return s;
    }, e.apply(this, arguments);
  }, t = b && b.__createBinding || (Object.create ? function(s, p, f, y) {
    y === void 0 && (y = f), Object.defineProperty(s, y, { enumerable: !0, get: function() {
      return p[f];
    } });
  } : function(s, p, f, y) {
    y === void 0 && (y = f), s[y] = p[f];
  }), r = b && b.__setModuleDefault || (Object.create ? function(s, p) {
    Object.defineProperty(s, "default", { enumerable: !0, value: p });
  } : function(s, p) {
    s.default = p;
  }), n = b && b.__importStar || function(s) {
    if (s && s.__esModule)
      return s;
    var p = {};
    if (s != null)
      for (var f in s)
        f !== "default" && Object.prototype.hasOwnProperty.call(s, f) && t(p, s, f);
    return r(p, s), p;
  };
  Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.validateAction = Nt.getSectionSchema = Nt.matchesAbsolutePath = void 0;
  var i = n(Gi), a = n(wn), o = We(), c = rt();
  function h(s) {
    return s.match("^https?://") ? void 0 : [
      {
        value: s,
        error: "invalid_absolute_url",
        message: "expected string to start with `https://` or `http://`"
      }
    ];
  }
  Nt.matchesAbsolutePath = h;
  function u(s) {
    var p = s && s.section && s.section.resource && s.section.name === a.ResourceType.Product, f = {
      create: o.makeOptional(o.matchesBoolean()),
      id: o.makeOptional(o.matchesString())
    }, y = e(e({}, f), { variant: o.makeOptional(o.matchesObject(f)) });
    return o.matchesObject({
      section: o.matchesObject({
        name: o.matchesEnum(a.ResourceType),
        resource: o.makeOptional(o.matchesObject(p ? y : f))
      })
    });
  }
  Nt.getSectionSchema = u;
  function d(s) {
    var p = o.matchesObject({ newContext: o.makeOptional(o.matchesBoolean()) }), f = a.Action, y;
    switch (s.type) {
      case i.Action.PUSH:
      case i.Action.REPLACE:
        f = i.Action, y = c.relativePathSchema;
        break;
      case a.Action.APP:
        y = c.relativePathSchema;
        break;
      case a.Action.REMOTE:
        y = o.composeSchemas(o.matchesObject({
          url: o.composeSchemas(o.matchesString(), function(l) {
            return h(l);
          })
        }), p);
        break;
      case a.Action.ADMIN_PATH:
        y = o.composeSchemas(c.relativePathSchema, p);
        break;
      case a.Action.ADMIN_SECTION:
        y = o.composeSchemas(u(s.payload), p);
        break;
    }
    return o.validate(s, c.createActionValidator(f, y));
  }
  return Nt.validateAction = d, Nt;
}
var go = {}, _f;
function ZS() {
  return _f || (_f = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var t = qi;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = We(), n = rt(), i = r.matchesArray(r.matchesObject({
      id: r.matchesString()
    })), a = r.matchesObject({
      initialQuery: r.makeOptional(r.matchesString()),
      initialSelectionIds: r.makeOptional(i),
      selectMultiple: r.makeOptional(r.oneOf(r.matchesBoolean(), r.matchesPositiveInteger())),
      showHidden: r.makeOptional(r.matchesBoolean()),
      showVariants: r.makeOptional(r.matchesBoolean()),
      showDraft: r.makeOptional(r.matchesBoolean()),
      showArchived: r.makeOptional(r.matchesBoolean()),
      showDraftBadge: r.makeOptional(r.matchesBoolean()),
      showArchivedBadge: r.makeOptional(r.matchesBoolean()),
      actionVerb: r.makeOptional(r.matchesEnum(t.ActionVerb))
    }), o = r.matchesObject({
      resourceType: r.matchesEnum(t.ResourceType),
      options: r.makeOptional(a)
    }), c = r.matchesObject({
      selection: i
    });
    function h(d) {
      return r.validate(d, a);
    }
    e.validateProps = h;
    function u(d) {
      switch (d.type) {
        case t.Action.UPDATE:
        case t.Action.OPEN:
          return r.validate(d, n.createActionValidator(t.Action, o, !1, !0));
        case t.Action.SELECT:
          return r.validate(d, n.createActionValidator(t.Action, c, !0, !0));
        case t.Action.CANCEL:
        case t.Action.CLOSE:
        default:
          return r.validate(d, n.createActionValidator(t.Action));
      }
    }
    e.validateAction = u;
  }(go)), go;
}
var bo = {}, Of;
function xS() {
  return Of || (Of = 1, function(e) {
    var t = b && b.__assign || function() {
      return t = Object.assign || function(p) {
        for (var f, y = 1, l = arguments.length; y < l; y++) {
          f = arguments[y];
          for (var v in f)
            Object.prototype.hasOwnProperty.call(f, v) && (p[v] = f[v]);
        }
        return p;
      }, t.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.titleBarSchema = void 0;
    var r = Wi;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return r.Action;
    } });
    var n = Bt, i = ur, a = We(), o = rt(), c = da(), h = Sy(), u = a.composeSchemas(c.buttonSchema, a.matchesObject({
      id: a.matchesString()
    }));
    e.titleBarSchema = a.matchesObject({
      breadcrumbs: a.makeOptional(c.buttonSchema),
      title: a.makeOptional(a.matchesString()),
      buttons: a.makeOptional(a.matchesObject({
        primary: a.makeOptional(u),
        secondary: a.makeOptional(a.matchesArray(a.composeSchemas(u, a.matchesObject({
          buttons: a.makeOptional(a.matchesArray(u))
        }))))
      }))
    });
    function d(p) {
      return a.validate(p, e.titleBarSchema);
    }
    e.validateProps = d;
    function s(p) {
      switch (p.type) {
        default:
        case r.Action.UPDATE:
          return a.validate(p, o.createActionValidator(r.Action, e.titleBarSchema, !0, !1));
        case r.Action.BUTTON_CLICK:
        case r.Action.BREADCRUMBS_CLICK:
          return c.validateAction(t(t({}, p), { type: n.Action.CLICK }));
        case r.Action.BUTTON_UPDATE:
        case r.Action.BREADCRUMBS_UPDATE:
          return c.validateAction(t(t({}, p), { type: n.Action.UPDATE }));
        case r.Action.BUTTON_GROUP_UPDATE:
          return h.validateAction(t(t({}, p), { type: i.Action.UPDATE }));
      }
    }
    e.validateAction = s;
  }(bo)), bo;
}
var _o = {}, Af;
function eE() {
  return Af || (Af = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateProps = e.validateAction = e.toastSchema = void 0;
    var t = En;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = We(), n = rt();
    e.toastSchema = r.matchesObject({
      message: r.matchesString(),
      duration: r.matchesPositiveInteger(),
      isError: r.makeOptional(r.matchesBoolean()),
      action: r.makeOptional(r.matchesObject({
        content: r.matchesString()
      }))
    });
    function i(o) {
      switch (o.type) {
        case t.Action.SHOW:
          return r.validate(o, n.createActionValidator(t.Action, e.toastSchema, !0));
        default:
          return r.validate(o, n.createActionValidator(t.Action));
      }
    }
    e.validateAction = i;
    function a(o) {
      return r.validate(o, e.toastSchema);
    }
    e.validateProps = a;
  }(_o)), _o;
}
var Oo = {}, Pf;
function tE() {
  return Pf || (Pf = 1, function(e) {
    var t = b && b.__assign || function() {
      return t = Object.assign || function(m) {
        for (var g, O = 1, _ = arguments.length; O < _; O++) {
          g = arguments[O];
          for (var T in g)
            Object.prototype.hasOwnProperty.call(g, T) && (m[T] = g[T]);
        }
        return m;
      }, t.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var r = Ki;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return r.Action;
    } });
    var n = We(), i = rt(), a = n.matchesObject({
      content: n.matchesString(),
      id: n.matchesString(),
      progress: n.matchesEnum(r.ALL_BADGE_PROGRESSES),
      status: n.matchesEnum(r.ALL_BADGE_STATUSES)
    }), o = n.matchesObject({
      accessibilityLabel: n.makeOptional(n.matchesString()),
      alt: n.makeOptional(n.matchesString()),
      initials: n.makeOptional(n.matchesString()),
      kind: n.makeOptional(n.matchesEnum(r.ALL_MEDIA_KINDS)),
      name: n.makeOptional(n.matchesString()),
      source: n.matchesString()
    }), c = {
      accessibilityLabel: n.makeOptional(n.matchesString()),
      badges: n.makeOptional(n.matchesArray(a)),
      disabled: n.makeOptional(n.matchesBoolean()),
      id: n.matchesString(),
      loading: n.makeOptional(n.matchesBoolean()),
      media: n.makeOptional(o),
      name: n.makeOptional(n.matchesString()),
      caption: n.makeOptional(n.matchesString()),
      selectable: n.makeOptional(n.matchesBoolean())
    }, h = n.matchesObject(t({}, c)), u = n.matchesArray(n.matchesObject(t(t({}, c), { options: n.makeOptional(n.matchesArray(h)) }))), d = n.matchesObject({
      plural: n.matchesString(),
      singular: n.matchesString()
    }), s = n.matchesObject({
      canLoadMore: n.makeOptional(n.matchesBoolean()),
      emptySearchLabel: n.makeOptional(n.matchesObject({
        title: n.matchesString(),
        description: n.matchesString(),
        withIllustration: n.matchesBoolean()
      })),
      items: n.makeOptional(u),
      loading: n.makeOptional(n.matchesBoolean()),
      loadingMore: n.makeOptional(n.matchesBoolean()),
      maxSelectable: n.makeOptional(n.matchesPositiveInteger()),
      primaryActionLabel: n.makeOptional(n.matchesString()),
      searchQuery: n.makeOptional(n.matchesString()),
      searchQueryPlaceholder: n.makeOptional(n.matchesString()),
      secondaryActionLabel: n.makeOptional(n.matchesString()),
      selectedItems: n.makeOptional(n.matchesArray(n.matchesObject(c))),
      title: n.makeOptional(n.matchesString()),
      verticalAlignment: n.makeOptional(n.matchesEnum(r.ALL_RESOURCE_VERTICAL_ALIGNMENT)),
      allowEmptySelection: n.makeOptional(n.matchesBoolean()),
      resourceName: n.makeOptional(d)
    }), p = n.matchesObject({
      options: n.makeOptional(u)
    }), f = n.matchesObject({
      selectedItems: u
    }), y = n.matchesObject({
      searchQuery: n.makeOptional(n.matchesString())
    });
    function l(m) {
      return n.validate(m, s);
    }
    e.validateProps = l;
    function v(m) {
      switch (m.type) {
        case r.Action.UPDATE:
        case r.Action.OPEN:
          return n.validate(m, i.createActionValidator(r.Action, p, !1, !0));
        case r.Action.SELECT:
          return n.validate(m, i.createActionValidator(r.Action, f, !0, !0));
        case r.Action.SEARCH:
          return n.validate(m, i.createActionValidator(r.Action, y, !0, !0));
        case r.Action.CANCEL:
        case r.Action.LOAD_MORE:
          return n.validate(m, i.createActionValidator(r.Action));
        default:
          return n.validate(m, i.createActionValidator(r.Action));
      }
    }
    e.validateAction = v;
  }(Oo)), Oo;
}
var Sf;
function rE() {
  if (Sf)
    return fe;
  Sf = 1;
  var e = b && b.__createBinding || (Object.create ? function(v, m, g, O) {
    O === void 0 && (O = g), Object.defineProperty(v, O, { enumerable: !0, get: function() {
      return m[g];
    } });
  } : function(v, m, g, O) {
    O === void 0 && (O = g), v[O] = m[g];
  }), t = b && b.__setModuleDefault || (Object.create ? function(v, m) {
    Object.defineProperty(v, "default", { enumerable: !0, value: m });
  } : function(v, m) {
    v.default = m;
  }), r = b && b.__importStar || function(v) {
    if (v && v.__esModule)
      return v;
    var m = {};
    if (v != null)
      for (var g in v)
        g !== "default" && Object.prototype.hasOwnProperty.call(v, g) && e(m, v, g);
    return t(m, v), m;
  };
  Object.defineProperty(fe, "__esModule", { value: !0 }), fe.unstable_Picker = fe.Toast = fe.TitleBar = fe.ResourcePicker = fe.Navigation = fe.Modal = fe.Menu = fe.Link = fe.LeaveConfirmation = fe.FeedbackModal = fe.ContextualSaveBar = fe.ButtonGroup = fe.Button = void 0;
  var n = r(da());
  fe.Button = n;
  var i = r(Sy());
  fe.ButtonGroup = i;
  var a = r(WS());
  fe.ContextualSaveBar = a;
  var o = r(HS());
  fe.FeedbackModal = o;
  var c = r(zS());
  fe.LeaveConfirmation = c;
  var h = r(Ey());
  fe.Link = h;
  var u = r(KS());
  fe.Menu = u;
  var d = r(JS());
  fe.Modal = d;
  var s = r(XS());
  fe.Navigation = s;
  var p = r(ZS());
  fe.ResourcePicker = p;
  var f = r(xS());
  fe.TitleBar = f;
  var y = r(eE());
  fe.Toast = y;
  var l = r(tE());
  return fe.unstable_Picker = l, fe;
}
var Ao = {}, Po = {}, Ef;
function xr() {
  return Ef || (Ef = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.matchesPositiveNumber = e.TYPE_ERROR = e.oneOf = e.matchesArray = e.validate = e.matchesPositiveInteger = e.matchesBoolean = e.makeOptional = e.matchesString = e.matchesObject = e.matchesEnum = e.composeSchemas = void 0;
    var t = We();
    Object.defineProperty(e, "TYPE_ERROR", { enumerable: !0, get: function() {
      return t.TYPE_ERROR;
    } });
    var r = We();
    Object.defineProperty(e, "composeSchemas", { enumerable: !0, get: function() {
      return r.composeSchemas;
    } }), Object.defineProperty(e, "matchesEnum", { enumerable: !0, get: function() {
      return r.matchesEnum;
    } }), Object.defineProperty(e, "matchesObject", { enumerable: !0, get: function() {
      return r.matchesObject;
    } }), Object.defineProperty(e, "matchesString", { enumerable: !0, get: function() {
      return r.matchesString;
    } }), Object.defineProperty(e, "makeOptional", { enumerable: !0, get: function() {
      return r.makeOptional;
    } }), Object.defineProperty(e, "matchesBoolean", { enumerable: !0, get: function() {
      return r.matchesBoolean;
    } }), Object.defineProperty(e, "matchesPositiveInteger", { enumerable: !0, get: function() {
      return r.matchesPositiveInteger;
    } }), Object.defineProperty(e, "validate", { enumerable: !0, get: function() {
      return r.validate;
    } }), Object.defineProperty(e, "matchesArray", { enumerable: !0, get: function() {
      return r.matchesArray;
    } }), Object.defineProperty(e, "oneOf", { enumerable: !0, get: function() {
      return r.oneOf;
    } });
    function n(a, o, c) {
      return c === void 0 && (c = { message: void 0 }), [
        {
          value: a,
          error: o,
          message: typeof c.message == "function" ? c.message(o, a) : c.message
        }
      ];
    }
    function i(a) {
      return function(o) {
        return Number.isNaN(o) || !Number.isFinite(o) || o < 0 ? n(o, t.TYPE_ERROR + "_number", a) : void 0;
      };
    }
    e.matchesPositiveNumber = i;
  }(Po)), Po;
}
var So = {}, Tf;
function dr() {
  return Tf || (Tf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mixedAppClientCheck = e.actionMessage = e.relativePathSchema = e.relativeUrlSchema = e.isValidRelativePath = e.createActionValidator = void 0;
    var t = rt();
    Object.defineProperty(e, "createActionValidator", { enumerable: !0, get: function() {
      return t.createActionValidator;
    } }), Object.defineProperty(e, "isValidRelativePath", { enumerable: !0, get: function() {
      return t.isValidRelativePath;
    } }), Object.defineProperty(e, "relativeUrlSchema", { enumerable: !0, get: function() {
      return t.relativeUrlSchema;
    } }), Object.defineProperty(e, "relativePathSchema", { enumerable: !0, get: function() {
      return t.relativePathSchema;
    } });
    function r(i) {
      return i.map(function(a) {
        var o = a.path, c = a.error, h = a.message, u = a.value, d = typeof u == "object" ? JSON.stringify(u) : u;
        return "`" + c + "` thrown for" + (o ? " path: " + o + " and" : "") + " value: `" + d + "`" + (h ? " with message: " + h : "");
      }).join(" | ");
    }
    e.actionMessage = r;
    function n(i) {
      i.addEventListener("DOMContentLoaded", function() {
        Object.prototype.hasOwnProperty.call(i, "ShopifyApp") && console.error(`%cException Detected 🚫

%cAn instance of the EASDK client was detected while initializing Shopify App Bridge. Using Shopify App Bridge and the EASDK simultaneously is not supported.

If you're migrating an existing app that was built with the shopify_app gem, then the EASDK client might have been included in the home page view template. In this case, remove it from your app before initializing Shopify App Bridge again.`, "font-size: large;", "font-size: normal;");
      }, { once: !0 });
    }
    e.mixedAppClientCheck = n;
  }(So)), So;
}
var wf;
function nE() {
  return wf || (wf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var t = rc;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = xr(), n = dr(), i = r.matchesObject({
      address1: r.makeOptional(r.matchesString()),
      address2: r.makeOptional(r.matchesString()),
      city: r.makeOptional(r.matchesString()),
      company: r.makeOptional(r.matchesString()),
      firstName: r.makeOptional(r.matchesString()),
      lastName: r.makeOptional(r.matchesString()),
      phone: r.makeOptional(r.matchesString()),
      province: r.makeOptional(r.matchesString()),
      country: r.makeOptional(r.matchesString()),
      zip: r.makeOptional(r.matchesString()),
      name: r.makeOptional(r.matchesString()),
      provinceCode: r.makeOptional(r.matchesString()),
      countryCode: r.makeOptional(r.matchesString())
    }), a = r.matchesObject({
      amount: r.makeOptional(r.matchesPositiveInteger()),
      discountDescription: r.makeOptional(r.matchesString()),
      type: r.makeOptional(r.matchesString()),
      discountCode: r.makeOptional(r.matchesString())
    }), o = r.matchesObject({
      amount: r.matchesPositiveNumber(),
      discountDescription: r.makeOptional(r.matchesString()),
      type: r.makeOptional(r.matchesString())
    }), c = r.matchesObject({
      discountCode: r.matchesString()
    }), h = r.matchesObject({
      price: r.makeOptional(r.matchesPositiveNumber()),
      quantity: r.makeOptional(r.matchesPositiveInteger()),
      title: r.makeOptional(r.matchesString()),
      variantId: r.makeOptional(r.matchesPositiveInteger()),
      discount: r.makeOptional(o)
    }), u = r.matchesObject({
      quantity: r.matchesPositiveInteger()
    }), d = r.matchesObject({
      id: r.makeOptional(r.matchesPositiveInteger()),
      email: r.makeOptional(r.matchesString()),
      firstName: r.makeOptional(r.matchesString()),
      lastName: r.makeOptional(r.matchesString()),
      note: r.makeOptional(r.matchesString()),
      addresses: r.makeOptional(r.matchesArray(i))
    }), s = r.matchesObject({
      name: r.matchesString(),
      value: r.matchesString()
    }), p = r.matchesObject({
      cartDiscount: r.makeOptional(a),
      customer: r.makeOptional(d),
      grandTotal: r.makeOptional(r.matchesString()),
      lineItems: r.makeOptional(r.matchesArray(h)),
      noteAttributes: r.makeOptional(r.matchesArray(s)),
      subTotal: r.makeOptional(r.matchesString()),
      taxTotal: r.makeOptional(r.matchesString())
    }), f = r.composeSchemas(r.matchesObject({}), function(O) {
      var _ = r.matchesString(), T = Object.keys(O).reduce(function(P, E) {
        return P[E] = _, P;
      }, {});
      return r.validate(O, r.matchesObject(T));
    }), y = r.matchesArray(r.matchesString());
    function l(O) {
      return n.createActionValidator(t.Action, O ? r.matchesObject({ data: O }) : void 0, !0, !0);
    }
    function v(O) {
      var _ = r.matchesObject({ index: r.matchesPositiveInteger() });
      if (O) {
        var T = r.matchesObject({ data: O });
        return n.createActionValidator(t.Action, r.composeSchemas(_, T), !0, !0);
      }
      return n.createActionValidator(t.Action, _, !0, !0);
    }
    function m(O) {
      return O.amount ? o : c;
    }
    function g(O) {
      switch (O.type) {
        case t.Action.UPDATE:
          return r.validate(O, l(p));
        case t.Action.SET_CUSTOMER:
          return r.validate(O, l(d));
        case t.Action.ADD_CUSTOMER_ADDRESS:
          return r.validate(O, l(i));
        case t.Action.UPDATE_CUSTOMER_ADDRESS:
          return r.validate(O, v(i));
        case t.Action.SET_DISCOUNT:
          return r.validate(O, l(m(O.payload.data)));
        case t.Action.SET_PROPERTIES:
          return r.validate(O, l(f));
        case t.Action.REMOVE_PROPERTIES:
          return r.validate(O, l(y));
        case t.Action.ADD_LINE_ITEM:
          return r.validate(O, l(h));
        case t.Action.UPDATE_LINE_ITEM:
          return r.validate(O, v(u));
        case t.Action.REMOVE_LINE_ITEM:
          return r.validate(O, v());
        case t.Action.SET_LINE_ITEM_DISCOUNT:
          return r.validate(O, v(o));
        case t.Action.REMOVE_LINE_ITEM_DISCOUNT:
          return r.validate(O, v());
        case t.Action.SET_LINE_ITEM_PROPERTIES:
          return r.validate(O, v(f));
        case t.Action.REMOVE_LINE_ITEM_PROPERTIES:
          return r.validate(O, v(y));
        case t.Action.FETCH:
        case t.Action.REMOVE_CUSTOMER:
        case t.Action.REMOVE_DISCOUNT:
        case t.Action.CLEAR:
        default:
          return r.validate(O, n.createActionValidator(t.Action, void 0, !1, !0));
      }
    }
    e.validateAction = g;
  }(Ao)), Ao;
}
var Eo = {}, If;
function iE() {
  return If || (If = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var t = sc;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = xr(), n = dr();
    function i(a) {
      var o = n.createActionValidator(t.Action);
      return r.validate(a, o);
    }
    e.validateAction = i;
  }(Eo)), Eo;
}
var To = {}, jf;
function aE() {
  return jf || (jf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var t = lc;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = xr(), n = dr();
    function i(a) {
      var o = n.createActionValidator(t.Action);
      return r.validate(a, o);
    }
    e.validateAction = i;
  }(To)), To;
}
var wo = {}, Cf;
function oE() {
  return Cf || (Cf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var t = la;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = xr(), n = dr();
    function i(a) {
      return r.validate(a, n.createActionValidator(t.Action));
    }
    e.validateAction = i;
  }(wo)), wo;
}
var Io = {}, Mf;
function uE() {
  return Mf || (Mf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var t = dc;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = xr(), n = dr();
    function i(a) {
      return r.validate(a, n.createActionValidator(t.Action));
    }
    e.validateAction = i;
  }(Io)), Io;
}
var Rf;
function cE() {
  return Rf || (Rf = 1, function(e) {
    var t = b && b.__createBinding || (Object.create ? function(d, s, p, f) {
      f === void 0 && (f = p), Object.defineProperty(d, f, { enumerable: !0, get: function() {
        return s[p];
      } });
    } : function(d, s, p, f) {
      f === void 0 && (f = p), d[f] = s[p];
    }), r = b && b.__setModuleDefault || (Object.create ? function(d, s) {
      Object.defineProperty(d, "default", { enumerable: !0, value: s });
    } : function(d, s) {
      d.default = s;
    }), n = b && b.__importStar || function(d) {
      if (d && d.__esModule)
        return d;
      var s = {};
      if (d != null)
        for (var p in d)
          p !== "default" && Object.prototype.hasOwnProperty.call(d, p) && t(s, d, p);
      return r(s, d), s;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.unstable_Picker = e.Toast = e.TitleBar = e.Scanner = e.ResourcePicker = e.Print = e.Navigation = e.Modal = e.Menu = e.Loading = e.Link = e.LeaveConfirmation = e.Fullscreen = e.FeedbackModal = e.ContextualSaveBar = e.Cart = e.ButtonGroup = e.Button = void 0;
    var i = rE();
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
    var a = n(nE());
    e.Cart = a;
    var o = n(iE());
    e.Fullscreen = o;
    var c = n(aE());
    e.Loading = c;
    var h = n(oE());
    e.Print = h;
    var u = n(uE());
    e.Scanner = u;
  }(uo)), uo;
}
var Nf;
function sE() {
  return Nf || (Nf = 1, function(e) {
    var t = b && b.__spreadArray || function(l, v) {
      for (var m = 0, g = v.length, O = l.length; m < g; m++, O++)
        l[O] = v[m];
      return l;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validatorMiddleware = e.connectValidatorToDispatchHook = e.connectValidatorToUpdateHook = void 0;
    var r = In(), n = Kt, i = fr, a = zt, o = cE(), c = xr(), h = dr();
    function u(l, v, m) {
      switch (v) {
        case n.Group.Button:
          return o.Button.validateProps(m);
        case n.Group.ButtonGroup:
          return o.ButtonGroup.validateProps(m);
        case n.Group.Modal:
          return o.Modal.validateProps(m, l);
        case n.Group.Menu:
          return o.Menu.validateProps(m);
        case n.Group.Link:
          return o.Link.validateProps(m);
        case n.Group.TitleBar:
          return o.TitleBar.validateProps(m);
        case n.Group.ResourcePicker:
          return o.ResourcePicker.validateProps(m);
        case n.Group.Toast:
          return o.Toast.validateProps(m);
        case n.Group.ContextualSaveBar:
          return o.ContextualSaveBar.validateProps(m);
        case n.Group.unstable_Picker:
          return o.unstable_Picker.validateProps(m);
      }
    }
    function d(l, v) {
      switch (l.group) {
        case n.Group.Button:
          return o.Button.validateAction(l);
        case n.Group.ButtonGroup:
          return o.ButtonGroup.validateAction(l);
        case n.Group.Modal:
          return o.Modal.validateAction(l, v);
        case n.Group.Menu:
          return o.Menu.validateAction(l);
        case n.Group.TitleBar:
          return o.TitleBar.validateAction(l);
        case n.Group.ResourcePicker:
          return o.ResourcePicker.validateAction(l);
        case n.Group.Loading:
          return o.Loading.validateAction(l);
        case n.Group.Toast:
          return o.Toast.validateAction(l);
        case n.Group.Cart:
          return o.Cart.validateAction(l);
        case n.Group.Navigation:
          return o.Navigation.validateAction(l);
        case n.Group.Print:
          return o.Print.validateAction(l);
        case n.Group.Scanner:
          return o.Scanner.validateAction(l);
        case n.Group.Fullscreen:
          return o.Fullscreen.validateAction(l);
        case n.Group.ContextualSaveBar:
          return o.ContextualSaveBar.validateAction(l);
        case n.Group.Link:
          return o.Link.validateAction(l);
        case n.Group.unstable_Picker:
          return o.unstable_Picker.validateAction(l);
      }
    }
    function s(l, v) {
      var m = c.validate(l, c.matchesObject({
        group: c.matchesEnum(n.Group, {
          message: function(O, _) {
            return "Unknown or unsupported action group `" + _ + "`";
          }
        }),
        version: c.matchesString()
      }));
      if (m)
        return i.invalidAction(l, h.actionMessage(m));
      var g = d(l, v);
      return g ? i.invalidPayload(l, h.actionMessage(g)) : l;
    }
    var p = function(l) {
      return function(v) {
        for (var m = [], g = 1; g < arguments.length; g++)
          m[g - 1] = arguments[g];
        var O = a.getMergedProps(this.options, v), _ = u(this.app.localOrigin, this.defaultGroup, O);
        if (_)
          throw i.fromAction(h.actionMessage(_), i.Action.INVALID_OPTIONS);
        return l.apply(void 0, t([v], m));
      };
    };
    e.connectValidatorToUpdateHook = p;
    var f = function(l) {
      return function(v) {
        var m = s(v, this.localOrigin);
        return l(m);
      };
    };
    e.connectValidatorToDispatchHook = f;
    var y = function(l) {
      l.set(r.LifecycleHook.UpdateAction, e.connectValidatorToUpdateHook), l.set(r.LifecycleHook.DispatchAction, e.connectValidatorToDispatchHook);
    };
    e.validatorMiddleware = y;
  }(oo)), oo;
}
var Df;
function lE() {
  if (Df)
    return ri;
  Df = 1, Object.defineProperty(ri, "__esModule", { value: !0 });
  var e = sE();
  return ri.default = e.validatorMiddleware, ri;
}
var kf;
function fE() {
  return kf || (kf = 1, function(e) {
    var t = b && b.__createBinding || (Object.create ? function(d, s, p, f) {
      f === void 0 && (f = p), Object.defineProperty(d, f, { enumerable: !0, get: function() {
        return s[p];
      } });
    } : function(d, s, p, f) {
      f === void 0 && (f = p), d[f] = s[p];
    }), r = b && b.__exportStar || function(d, s) {
      for (var p in d)
        p !== "default" && !Object.prototype.hasOwnProperty.call(s, p) && t(s, d, p);
    }, n = b && b.__importDefault || function(d) {
      return d && d.__esModule ? d : { default: d };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createApp = void 0;
    var i = n(lE()), a = dr(), o = Mc(), c = In(), h = Ay();
    function u(d) {
      var s = o.getWindow();
      return !s || !s.top ? h.serverAppBridge : (a.mixedAppClientCheck(s), c.createAppWrapper(s.top, s.location.origin, [i.default])(d));
    }
    e.createApp = u, e.default = u, r(Zr, e), r(In(), e);
  }(ao)), ao;
}
process.env.NODE_ENV === "production" ? Pu.exports = qS() : Pu.exports = fE();
var dE = Pu.exports, Rc = {}, Nc = {}, Ln = {};
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.handleRouteChange = void 0;
var pE = Ct;
function yE(e, t) {
  return e.subscribe(pE.Redirect.Action.APP, function(r) {
    var n = r.path;
    t.replace(n);
  });
}
Ln.handleRouteChange = yE;
var hE = b && b.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), vE = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Nc, "__esModule", { value: !0 });
var mE = vE(ie), gE = At, bE = Ln, _E = (
  /** @class */
  function(e) {
    hE(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.componentDidMount = function() {
      var r = this.props.history;
      this.unsubscribe = bE.handleRouteChange(this.context, r);
    }, t.prototype.componentWillUnmount = function() {
      this.unsubscribe && this.unsubscribe();
    }, t.prototype.render = function() {
      return null;
    }, t.contextType = gE.AppBridgeContext, t;
  }(mE.default.Component)
);
Nc.default = _E;
var Dc = {};
Object.defineProperty(Dc, "__esModule", { value: !0 });
var OE = ie, AE = Be, PE = Ln;
function SE(e) {
  var t = AE.useAppBridge();
  OE.useEffect(function() {
    return PE.handleRouteChange(t, e);
  }, [t, e]);
}
Dc.default = SE;
(function(e) {
  var t = b && b.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useClientRouting = e.ClientRouter = void 0;
  var r = Nc;
  Object.defineProperty(e, "ClientRouter", { enumerable: !0, get: function() {
    return t(r).default;
  } });
  var n = Dc;
  Object.defineProperty(e, "useClientRouting", { enumerable: !0, get: function() {
    return t(n).default;
  } });
})(Rc);
var kc = {}, Bc = {}, $n = {}, Gt = {};
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.getOrigin = Gt.getTopWindow = Gt.getSelfWindow = void 0;
function EE() {
  return window.self;
}
Gt.getSelfWindow = EE;
function TE() {
  return window.top;
}
Gt.getTopWindow = TE;
function wE() {
  return location.origin;
}
Gt.getOrigin = wE;
var IE = b && b.__awaiter || function(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function c(d) {
      try {
        u(n.next(d));
      } catch (s) {
        o(s);
      }
    }
    function h(d) {
      try {
        u(n.throw(d));
      } catch (s) {
        o(s);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, h);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, jE = b && b.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(d) {
      return h([u, d]);
    };
  }
  function h(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = u;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(u);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (d) {
        u = [6, d], i = 0;
      } finally {
        n = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.updateHistory = void 0;
var CE = Zr, Bf = Ct, Su = Gt, ME = [
  "hmac",
  "locale",
  "protocol",
  "session",
  "shop",
  "timestamp",
  "host"
];
function RE(e, t) {
  return IE(this, void 0, void 0, function() {
    var r, n, i, a, o, c, h, u, d;
    return jE(this, function(s) {
      switch (s.label) {
        case 0:
          return r = Su.getSelfWindow(), n = Su.getTopWindow(), i = r === n, [4, e.getState("context").then(function(p) {
            return p === CE.Context.Main;
          })];
        case 1:
          return a = s.sent(), i || !a ? [
            2
            /*return*/
          ] : (o = NE(t), ME.forEach(function(p) {
            return o.searchParams.delete(p);
          }), c = o.pathname, h = o.search, u = o.hash, d = "" + c + h + u, Bf.History.create(e).dispatch(Bf.History.Action.REPLACE, d), [
            2
            /*return*/
          ]);
      }
    });
  });
}
$n.updateHistory = RE;
function NE(e) {
  var t = Su.getOrigin();
  if (typeof e == "string")
    return new URL(e, t);
  var r = e.pathname, n = e.search, i = e.hash;
  return new URL("" + r + n + i, t);
}
var DE = b && b.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), kE = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Bc, "__esModule", { value: !0 });
var BE = kE(ie), LE = At, Lf = $n, $E = (
  /** @class */
  function(e) {
    DE(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.componentDidMount = function() {
      var r = this.props.location;
      Lf.updateHistory(this.context, r);
    }, t.prototype.componentDidUpdate = function(r) {
      var n = r.location, i = this.props.location;
      i !== n && Lf.updateHistory(this.context, i);
    }, t.prototype.render = function() {
      return null;
    }, t.contextType = LE.AppBridgeContext, t;
  }(BE.default.Component)
);
Bc.default = $E;
var Lc = {};
Object.defineProperty(Lc, "__esModule", { value: !0 });
var FE = ie, UE = Be, VE = $n;
function GE(e) {
  var t = UE.useAppBridge();
  FE.useEffect(function() {
    VE.updateHistory(t, e);
  }, [t, e]);
}
Lc.default = GE;
(function(e) {
  var t = b && b.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useRoutePropagation = e.RoutePropagator = void 0;
  var r = Bc;
  Object.defineProperty(e, "RoutePropagator", { enumerable: !0, get: function() {
    return t(r).default;
  } });
  var n = Lc;
  Object.defineProperty(e, "useRoutePropagation", { enumerable: !0, get: function() {
    return t(n).default;
  } });
})(kc);
const qE = "@shopify/app-bridge-react", WE = "3.0.0", HE = "index.d.ts", zE = "index.js", KE = "umd/index.js", QE = "umd/index.js", YE = [
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
], JE = {
  access: "public",
  "@shopify:registry": "https://registry.npmjs.org"
}, XE = "git@github.com:Shopify/app-bridge.git", ZE = "https://shopify.dev/tools/app-bridge/react-components", xE = "Shopify Inc.", eT = "MIT", tT = {
  build: "yarn build:tsc && yarn build:umd",
  "build:tsc": "NODE_ENV=production tsc",
  "build:umd": "NODE_ENV=production webpack -p",
  check: "tsc",
  clean: `cat package.json | node -pe "JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).files.map(f => './'+f).join(' ')" | xargs rm -rf`,
  pack: "yarn pack",
  size: "size-limit"
}, rT = !1, nT = {
  "@shopify/app-bridge": "^3.0.0"
}, iT = {
  "@types/react": "^17.0.38",
  enzyme: "3.11.0",
  "react-dom": "^17.0.2"
}, aT = {
  react: "^16.0.0 || ^17.0.0 || ^18.0.0"
}, oT = "7102c192814e6f3cf55daf81324b54a960ebe701", uT = {
  name: qE,
  version: WE,
  types: HE,
  main: zE,
  unpkg: KE,
  jsdelivr: QE,
  files: YE,
  private: !1,
  publishConfig: JE,
  repository: XE,
  homepage: ZE,
  author: xE,
  license: eT,
  scripts: tT,
  sideEffects: rT,
  "size-limit": [
    {
      limit: "30 KB",
      path: "index.js"
    }
  ],
  dependencies: nT,
  devDependencies: iT,
  peerDependencies: aT,
  gitHead: oT
};
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(f, y, l, v) {
    v === void 0 && (v = l), Object.defineProperty(f, v, { enumerable: !0, get: function() {
      return y[l];
    } });
  } : function(f, y, l, v) {
    v === void 0 && (v = l), f[v] = y[l];
  }), r = b && b.__setModuleDefault || (Object.create ? function(f, y) {
    Object.defineProperty(f, "default", { enumerable: !0, value: y });
  } : function(f, y) {
    f.default = y;
  }), n = b && b.__importStar || function(f) {
    if (f && f.__esModule)
      return f;
    var y = {};
    if (f != null)
      for (var l in f)
        l !== "default" && Object.prototype.hasOwnProperty.call(f, l) && t(y, f, l);
    return r(y, f), y;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.setClientInterfaceHook = void 0;
  var i = n(ie), a = n(dE), o = At, c = Rc, h = kc, u = uT;
  function d(f) {
    var y = f.config, l = f.router, v = f.children, m = i.useMemo(function() {
      return a.default(y);
    }, [JSON.stringify(y)]);
    i.useEffect(function() {
      m != null && m.hooks && m.hooks.set(a.LifecycleHook.DispatchAction, e.setClientInterfaceHook);
    }, [m]);
    var g = l != null && l.history && (l != null && l.location) ? i.default.createElement(p, { history: l.history, location: l.location }) : null;
    return i.default.createElement(
      o.AppBridgeContext.Provider,
      { value: m },
      g,
      v
    );
  }
  var s = function(f) {
    return function(y) {
      return y.clientInterface = {
        name: "@shopify/app-bridge-react",
        version: u.version
      }, f(y);
    };
  };
  e.setClientInterfaceHook = s;
  function p(f) {
    var y = f.history, l = f.location;
    return c.useClientRouting(y), h.useRoutePropagation(l), null;
  }
  e.default = d;
})(_y);
var cT = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Cc, "__esModule", { value: !0 });
var sT = cT(_y);
Cc.default = sT.default;
var $c = {}, Ty = {};
(function(e) {
  var t = b && b.__assign || function() {
    return t = Object.assign || function(c) {
      for (var h, u = 1, d = arguments.length; u < d; u++) {
        h = arguments[u];
        for (var s in h)
          Object.prototype.hasOwnProperty.call(h, s) && (c[s] = h[s]);
      }
      return c;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ResourceType = e.ActionVerb = void 0;
  var r = ie, n = fc;
  Object.defineProperty(e, "ActionVerb", { enumerable: !0, get: function() {
    return n.ActionVerb;
  } }), Object.defineProperty(e, "ResourceType", { enumerable: !0, get: function() {
    return n.ResourceType;
  } });
  var i = Be;
  function a(c) {
    var h = i.useAppBridge(), u = r.useRef(null), d = c.resourceType, s = c.onSelection, p = c.onCancel, f = c.open, y = r.useRef({ open: !1 }), l = r.useMemo(function() {
      return n.create(h, {
        resourceType: n.ResourceType[d],
        options: o(c)
      });
    }, [h]);
    return r.useEffect(function() {
      var v, m = (v = y.current) === null || v === void 0 ? void 0 : v.open;
      m !== f && (f ? l.dispatch(n.Action.OPEN) : l.dispatch(n.Action.CLOSE)), !m && f ? u.current = document.activeElement : m && !f && u.current != null && document.contains(u.current) && (u.current.focus(), u.current = null);
    }, [f]), r.useEffect(function() {
      var v = [];
      return s != null && v.push(l.subscribe(n.Action.SELECT, s)), p != null && v.push(l.subscribe(n.Action.CANCEL, p)), function() {
        for (var m = v.pop(); m; )
          m(), m = v.pop();
      };
    }, [s, p]), r.useEffect(function() {
      var v = JSON.stringify(t(t({}, y.current), { open: void 0 })) !== JSON.stringify(t(t({}, c), { open: void 0 }));
      v && (l.set(o(c)), y.current = c);
    }, [c]), null;
  }
  function o(c) {
    var h = c.initialQuery, u = c.initialSelectionIds, d = c.showHidden, s = c.allowMultiple, p = c.selectMultiple, f = c.actionVerb, y = {
      initialQuery: h,
      initialSelectionIds: u,
      showHidden: d,
      selectMultiple: p ?? s,
      actionVerb: f
    }, l = y;
    if (c.resourceType === "Product") {
      var v = c.showVariants, m = c.showDraft, g = c.showArchived, O = c.showDraftBadge, _ = c.showArchivedBadge, T = {
        showVariants: v,
        showDraft: m,
        showArchived: g,
        showDraftBadge: O,
        showArchivedBadge: _
      };
      l = t(t({}, y), T);
    }
    return l;
  }
  e.default = a;
})(Ty);
var lT = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty($c, "__esModule", { value: !0 });
var fT = lT(Ty);
$c.default = fT.default;
var Fc = {}, Uc = {};
Object.defineProperty(Uc, "__esModule", { value: !0 });
var jo = ie, Eu = kn, dT = yc, wy = oa, Iy = cr, pT = Be;
function yT(e) {
  var t = e.title, r = pT.useAppBridge(), n = jo.useRef({ title: t }), i = jo.useMemo(function() {
    return dT.create(r, {});
  }, [r]);
  return jo.useEffect(function() {
    var a, o = JSON.stringify(n.current) !== JSON.stringify(e);
    if (n.current = e, o)
      i.set(mT(r, e));
    else {
      var c = e.primaryAction, h = e.secondaryActions, u = e.actionGroups, d = e.breadcrumbs, s = Array.isArray(d) ? d[d.length - 1] : d;
      jn(s, i.options.breadcrumbs), jn(c, (a = i.options.buttons) === null || a === void 0 ? void 0 : a.primary), hT(i, h), vT(i, u);
    }
    return function() {
      i.unsubscribe();
    };
  }, [i, e]), null;
}
Uc.default = yT;
function hT(e, t) {
  var r, n, i = ((n = (r = e.options.buttons) === null || r === void 0 ? void 0 : r.secondary) === null || n === void 0 ? void 0 : n.filter(function(a) {
    return !wy.isGroupedButton(a);
  })) || [];
  i == null || i.forEach(function(a, o) {
    return jn(
      t == null ? void 0 : t[o],
      // This needs to be casted as the React TitleBar component doesn't accept button groups for secondary actions
      a
    );
  });
}
function vT(e, t) {
  var r, n, i = ((n = (r = e.options.buttons) === null || r === void 0 ? void 0 : r.secondary) === null || n === void 0 ? void 0 : n.filter(wy.isGroupedButton)) || [];
  i == null || i.forEach(function(a, o) {
    var c = t == null ? void 0 : t[o];
    c && a.options.buttons.forEach(function(h, u) {
      return jn(c.actions[u], h);
    });
  });
}
function mT(e, t) {
  var r = t.actionGroups, n = t.breadcrumbs, i = t.primaryAction, a = t.secondaryActions, o = t.title, c = Array.isArray(n) ? n[n.length - 1] : n;
  return {
    title: o,
    buttons: Iy.transformActions(e, {
      primaryAction: i,
      secondaryActions: a,
      actionGroups: r
    }),
    breadcrumbs: c ? gT(e, c) : void 0
  };
}
function gT(e, t, r) {
  var n = r || Eu.create(e, {
    label: t.content || ""
  });
  return jn(t, n), n;
}
function jn(e, t) {
  if (!(!e || !t)) {
    var r = Iy.generateRedirect(t.app, e.url, e.target, e.external);
    r && t.subscribe(Eu.Action.CLICK, r, t), e != null && e.onAction && t.subscribe(Eu.Action.CLICK, e.onAction, t);
  }
}
var bT = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fc, "__esModule", { value: !0 });
var _T = bT(Uc);
Fc.default = _T.default;
var Vc = {}, jy = {};
(function(e) {
  var t = b && b.__extends || function() {
    var c = function(h, u) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, s) {
        d.__proto__ = s;
      } || function(d, s) {
        for (var p in s)
          Object.prototype.hasOwnProperty.call(s, p) && (d[p] = s[p]);
      }, c(h, u);
    };
    return function(h, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      c(h, u);
      function d() {
        this.constructor = h;
      }
      h.prototype = u === null ? Object.create(u) : (d.prototype = u.prototype, new d());
    };
  }(), r = b && b.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DEFAULT_TOAST_DURATION = void 0;
  var n = r(ie), i = Ct, a = At;
  e.DEFAULT_TOAST_DURATION = 5e3;
  var o = (
    /** @class */
    function(c) {
      t(h, c);
      function h() {
        return c !== null && c.apply(this, arguments) || this;
      }
      return h.prototype.componentDidMount = function() {
        var u = this.context, d = this.props, s = d.error, p = d.content, f = d.duration, y = f === void 0 ? e.DEFAULT_TOAST_DURATION : f, l = d.onDismiss;
        this.toast = i.Toast.create(u, {
          message: p,
          duration: y,
          isError: s
        }), this.toast.subscribe(i.Toast.Action.CLEAR, l), this.toast.dispatch(i.Toast.Action.SHOW);
      }, h.prototype.componentWillUnmount = function() {
        this.toast.unsubscribe();
      }, h.prototype.render = function() {
        return null;
      }, h.contextType = a.AppBridgeContext, h;
    }(n.default.PureComponent)
  );
  e.default = o;
})(jy);
var OT = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Vc, "__esModule", { value: !0 });
var AT = OT(jy);
Vc.default = AT.default;
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(p, f, y, l) {
    l === void 0 && (l = y), Object.defineProperty(p, l, { enumerable: !0, get: function() {
      return f[y];
    } });
  } : function(p, f, y, l) {
    l === void 0 && (l = y), p[l] = f[y];
  }), r = b && b.__exportStar || function(p, f) {
    for (var y in p)
      y !== "default" && !Object.prototype.hasOwnProperty.call(f, y) && t(f, p, y);
  }, n = b && b.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Toast = e.TitleBar = e.ResourcePicker = e.Provider = e.NavigationMenu = e.ModalContent = e.Modal = e.Loading = e.ContextualSaveBar = void 0;
  var i = Xu;
  Object.defineProperty(e, "ContextualSaveBar", { enumerable: !0, get: function() {
    return n(i).default;
  } });
  var a = Oc;
  Object.defineProperty(e, "Loading", { enumerable: !0, get: function() {
    return n(a).default;
  } });
  var o = gy;
  Object.defineProperty(e, "Modal", { enumerable: !0, get: function() {
    return n(o).default;
  } }), Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return o.ModalContent;
  } });
  var c = Ic;
  Object.defineProperty(e, "NavigationMenu", { enumerable: !0, get: function() {
    return n(c).default;
  } });
  var h = Cc;
  Object.defineProperty(e, "Provider", { enumerable: !0, get: function() {
    return n(h).default;
  } });
  var u = $c;
  Object.defineProperty(e, "ResourcePicker", { enumerable: !0, get: function() {
    return n(u).default;
  } });
  var d = Fc;
  Object.defineProperty(e, "TitleBar", { enumerable: !0, get: function() {
    return n(d).default;
  } });
  var s = Vc;
  Object.defineProperty(e, "Toast", { enumerable: !0, get: function() {
    return n(s).default;
  } }), r(kc, e), r(Rc, e);
})(Lp);
var Cy = {}, My = {}, pa = {}, PT = b && b.__awaiter || function(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function c(d) {
      try {
        u(n.next(d));
      } catch (s) {
        o(s);
      }
    }
    function h(d) {
      try {
        u(n.throw(d));
      } catch (s) {
        o(s);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, h);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, ST = b && b.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(d) {
      return h([u, d]);
    };
  }
  function h(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = u;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(u);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (d) {
        u = [6, d], i = 0;
      } finally {
        n = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(pa, "__esModule", { value: !0 });
pa.useAppBridgeState = void 0;
var sn = ie, ET = Be, TT = function(e) {
  var t = ET.useAppBridge(), r = sn.useState(), n = r[0], i = r[1], a = sn.useRef(!1), o = sn.useCallback(function() {
    return PT(void 0, void 0, void 0, function() {
      var c, h;
      return ST(this, function(u) {
        switch (u.label) {
          case 0:
            return e ? [4, t.getState(e)] : [3, 2];
          case 1:
            return h = u.sent(), [3, 4];
          case 2:
            return [4, t.getState()];
          case 3:
            h = u.sent(), u.label = 4;
          case 4:
            return c = h, a.current ? [
              2
              /*return*/
            ] : (i(function(d) {
              return JSON.stringify(c) === JSON.stringify(d) ? d : c;
            }), [
              2
              /*return*/
            ]);
        }
      });
    });
  }, [t, e]);
  return sn.useEffect(function() {
    return o(), t.subscribe(function() {
      o();
    });
  }, [t, o]), sn.useEffect(function() {
    return function() {
      a.current = !0;
    };
  }, [t]), n;
};
pa.useAppBridgeState = TT;
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(n, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(n, i, a, o) {
    o === void 0 && (o = a), n[o] = i[a];
  }), r = b && b.__exportStar || function(n, i) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(pa, e);
})(My);
var Ry = {}, ya = {}, $f = b && b.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
Object.defineProperty(ya, "__esModule", { value: !0 });
ya.useContextualSaveBar = void 0;
var Pt = ie, Zt = vc, wT = Be;
function IT() {
  var e = wT.useAppBridge(), t = Pt.useState(), r = t[0], n = t[1], i = Pt.useState(), a = i[0], o = i[1], c = Pt.useMemo(function() {
    return Zt.create(e);
  }, [e]), h = Pt.useCallback(function(p) {
    c.dispatch(Zt.Action.SHOW), p && c.set(p);
  }, [c]), u = Pt.useCallback(function() {
    c.dispatch(Zt.Action.HIDE);
  }, [c]), d = Pt.useMemo(function() {
    return {
      setOptions: function(p) {
        var f = p.onAction, y = $f(p, ["onAction"]);
        n(function() {
          return f;
        }), Object.keys(y).length && c.set({ saveAction: y });
      }
    };
  }, [c]), s = Pt.useMemo(function() {
    return {
      setOptions: function(p) {
        var f = p.onAction, y = $f(p, ["onAction"]);
        o(function() {
          return f;
        }), Object.keys(y).length && c.set({ discardAction: y });
      }
    };
  }, [c]);
  return Pt.useEffect(function() {
    return c.subscribe(Zt.Action.DISCARD, function() {
      c.dispatch(Zt.Action.HIDE), a == null || a();
    });
  }, [c, a]), Pt.useEffect(function() {
    return c.subscribe(Zt.Action.SAVE, function() {
      c.dispatch(Zt.Action.HIDE), r == null || r();
    });
  }, [c, r]), Pt.useEffect(function() {
    c.unsubscribe();
  }, [c, r]), { show: h, hide: u, saveAction: d, discardAction: s };
}
ya.useContextualSaveBar = IT;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useContextualSaveBar = void 0;
  var t = ya;
  Object.defineProperty(e, "useContextualSaveBar", { enumerable: !0, get: function() {
    return t.useContextualSaveBar;
  } });
})(Ry);
var Gc = {}, ha = {}, jT = b && b.__awaiter || function(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function c(d) {
      try {
        u(n.next(d));
      } catch (s) {
        o(s);
      }
    }
    function h(d) {
      try {
        u(n.throw(d));
      } catch (s) {
        o(s);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, h);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, CT = b && b.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(d) {
      return h([u, d]);
    };
  }
  function h(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = u;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(u);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (d) {
        u = [6, d], i = 0;
      } finally {
        n = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(ha, "__esModule", { value: !0 });
ha.useFeaturesAvailable = void 0;
var ln = ie, MT = uc, RT = Be;
function NT() {
  for (var e = this, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  var n = RT.useAppBridge(), i = ln.useState(), a = i[0], o = i[1], c = ln.useRef([]), h = ln.useCallback(function() {
    var u = !1;
    return function() {
      return jT(e, void 0, void 0, function() {
        var d;
        return CT(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, n.featuresAvailable.apply(n, c.current)];
            case 1:
              return d = s.sent(), u || o(function(p) {
                return JSON.stringify(p) === JSON.stringify(d) ? p : d;
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
  }, [n]);
  return ln.useEffect(function() {
    return c.current = t, h();
  }, [JSON.stringify(t)]), ln.useEffect(function() {
    var u, d = n.subscribe(MT.Action.UPDATE, function() {
      u = h();
    });
    return function() {
      d(), u == null || u();
    };
  }, [n, h]), a;
}
ha.useFeaturesAvailable = NT;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useFeaturesAvailable = void 0;
  var t = ha;
  Object.defineProperty(e, "useFeaturesAvailable", { enumerable: !0, get: function() {
    return t.useFeaturesAvailable;
  } });
})(Gc);
var Ny = {}, va = {};
Object.defineProperty(va, "__esModule", { value: !0 });
va.useFeatureRequest = void 0;
var ni = ie, Ff = ic, DT = Be, kT = Gc;
function BT(e, t) {
  var r = DT.useAppBridge(), n = kT.useFeaturesAvailable(), i = ni.useState(), a = i[0], o = i[1], c = ni.useCallback(function(h) {
    var u = h == null ? void 0 : h[e];
    if (t && (u != null && u[t])) {
      var d = u == null ? void 0 : u[t];
      o(function(s) {
        return JSON.stringify(d) !== JSON.stringify(s) ? d : s;
      });
      return;
    }
    o(function(s) {
      return JSON.stringify(u) !== JSON.stringify(s) ? u : s;
    });
  }, [e, t]);
  return ni.useEffect(function() {
    Ff.create(r).dispatch(Ff.Action.REQUEST, { feature: e, action: t });
  }, [r, e, t]), ni.useEffect(function() {
    c(n);
  }, [n, c]), a;
}
va.useFeatureRequest = BT;
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(n, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(n, i, a, o) {
    o === void 0 && (o = a), n[o] = i[a];
  }), r = b && b.__exportStar || function(n, i) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(va, e);
})(Ny);
var Dy = {}, Wr = {}, qc = {}, ma = {};
Object.defineProperty(ma, "__esModule", { value: !0 });
ma.useNavigationHistory = void 0;
var LT = ie, Co = Ct, $T = Be;
function FT() {
  var e = $T.useAppBridge();
  return LT.useMemo(function() {
    var t = Co.History.create(e);
    function r(i) {
      t.dispatch(Co.History.Action.PUSH, i.pathname);
    }
    function n(i) {
      t.dispatch(Co.History.Action.REPLACE, i.pathname);
    }
    return { push: r, replace: n };
  }, []);
}
ma.useNavigationHistory = FT;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useNavigationHistory = void 0;
  var t = ma;
  Object.defineProperty(e, "useNavigationHistory", { enumerable: !0, get: function() {
    return t.useNavigationHistory;
  } });
})(qc);
var Hr = b && b.__assign || function() {
  return Hr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Hr.apply(this, arguments);
}, UT = b && b.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), VT = b && b.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), GT = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && UT(t, e, r);
  return VT(t, e), t;
};
Object.defineProperty(Wr, "__esModule", { value: !0 });
Wr.isAdminSection = Wr.useNavigate = void 0;
var Mo = ie, Or = GT(sa), qT = Be, WT = qc;
function HT() {
  var e = qT.useAppBridge(), t = WT.useNavigationHistory(), r = Mo.useMemo(function() {
    return Or.create(e);
  }, [e]), n = Mo.useCallback(function(i, a) {
    var o = zT(i), c = o.startsWith(e.localOrigin), h = o.startsWith(e.hostOrigin), u = o.startsWith("/");
    if (c || h || u) {
      var d = By(o);
      if (h || (a == null ? void 0 : a.target) === "new" || (a == null ? void 0 : a.target) === "host") {
        r.dispatch(Or.Action.ADMIN_PATH, {
          path: d.replace(/^\/admin/, ""),
          newContext: (a == null ? void 0 : a.target) === "new"
        });
        return;
      }
      if (((a == null ? void 0 : a.target) === "self" || !(a != null && a.target)) && (a != null && a.replace)) {
        t.replace({ pathname: d });
        return;
      }
      r.dispatch(Or.Action.APP, d);
      return;
    }
    r.dispatch(Or.Action.REMOTE, {
      url: o,
      newContext: (a == null ? void 0 : a.target) === "new"
    });
  }, [r, t]);
  return Mo.useCallback(function(i, a) {
    if (ky(i)) {
      var o = Hr(Hr({}, i), { name: Or.ResourceType[i.name] });
      r.dispatch(Or.Action.ADMIN_SECTION, {
        section: o,
        newContext: (a == null ? void 0 : a.target) === "new"
      });
      return;
    }
    n(i, a);
  }, [n, r]);
}
Wr.useNavigate = HT;
function ky(e) {
  return typeof e == "object" && typeof (e == null ? void 0 : e.name) == "string";
}
Wr.isAdminSection = ky;
function Uf(e) {
  var t = e.pathname, r = e.search, n = e.hash;
  return "" + t + (r || "") + (n || "");
}
function zT(e) {
  return e instanceof URL ? e.toString() : typeof e == "string" ? e : By(e);
}
function By(e) {
  if (typeof e == "string")
    return e.startsWith("/") ? e : Uf(new URL(e));
  var t = e.search instanceof URLSearchParams ? e.search.toString() : e.search;
  return Uf(Hr(Hr({}, e), { search: t }));
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useNavigate = void 0;
  var t = Wr;
  Object.defineProperty(e, "useNavigate", { enumerable: !0, get: function() {
    return t.useNavigate;
  } });
})(Dy);
var Ly = {}, $y = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = e.DEFAULT_TOAST_DURATION = void 0;
  var t = ie, r = hc, n = Be;
  e.DEFAULT_TOAST_DURATION = 5e3;
  function i() {
    var a = n.useAppBridge(), o, c = t.useCallback(function(h, u) {
      o = r.create(a, {
        message: h,
        isError: u == null ? void 0 : u.isError,
        duration: (u == null ? void 0 : u.duration) || e.DEFAULT_TOAST_DURATION
      }), o.dispatch(r.Action.SHOW), u != null && u.onDismiss && o.subscribe(r.Action.CLEAR, u == null ? void 0 : u.onDismiss);
    }, [a]);
    return t.useEffect(function() {
      return function() {
        o.unsubscribe();
      };
    }, []), { show: c };
  }
  e.useToast = i;
})($y);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = void 0;
  var t = $y;
  Object.defineProperty(e, "useToast", { enumerable: !0, get: function() {
    return t.useToast;
  } });
})(Ly);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = e.useNavigationHistory = e.useNavigate = e.useFeatureRequest = e.useFeaturesAvailable = e.useContextualSaveBar = e.useAppBridgeState = void 0;
  var t = My;
  Object.defineProperty(e, "useAppBridgeState", { enumerable: !0, get: function() {
    return t.useAppBridgeState;
  } });
  var r = Ry;
  Object.defineProperty(e, "useContextualSaveBar", { enumerable: !0, get: function() {
    return r.useContextualSaveBar;
  } });
  var n = Gc;
  Object.defineProperty(e, "useFeaturesAvailable", { enumerable: !0, get: function() {
    return n.useFeaturesAvailable;
  } });
  var i = Ny;
  Object.defineProperty(e, "useFeatureRequest", { enumerable: !0, get: function() {
    return i.useFeatureRequest;
  } });
  var a = Dy;
  Object.defineProperty(e, "useNavigate", { enumerable: !0, get: function() {
    return a.useNavigate;
  } });
  var o = qc;
  Object.defineProperty(e, "useNavigationHistory", { enumerable: !0, get: function() {
    return o.useNavigationHistory;
  } });
  var c = Ly;
  Object.defineProperty(e, "useToast", { enumerable: !0, get: function() {
    return c.useToast;
  } });
})(Cy);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(a, o, c, h) {
    h === void 0 && (h = c), Object.defineProperty(a, h, { enumerable: !0, get: function() {
      return o[c];
    } });
  } : function(a, o, c, h) {
    h === void 0 && (h = c), a[h] = o[c];
  }), r = b && b.__exportStar || function(a, o) {
    for (var c in a)
      c !== "default" && !Object.prototype.hasOwnProperty.call(o, c) && t(o, a, c);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useAppBridge = e.Context = void 0;
  var n = At;
  Object.defineProperty(e, "Context", { enumerable: !0, get: function() {
    return n.AppBridgeContext;
  } });
  var i = Be;
  Object.defineProperty(e, "useAppBridge", { enumerable: !0, get: function() {
    return i.useAppBridge;
  } }), r(Lp, e), r(Cy, e);
})(kp);
const KT = /* @__PURE__ */ Qf(kp);
var Fy = {}, Uy = {}, zr = {}, ot = {};
Object.defineProperty(ot, "__esModule", { value: !0 });
ot.isShopifyPing = ot.isShopifyPOS = ot.isShopifyMobile = ot.isShopifyEmbedded = ot.isMobile = void 0;
var Vf = Bn;
function QT() {
  return Vy() || Gy() || qy();
}
ot.isMobile = QT;
function YT() {
  return Vf.isClient && window.top !== window.self || Vf.isUnframed;
}
ot.isShopifyEmbedded = YT;
function Vy() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Mobile") >= 0;
}
ot.isShopifyMobile = Vy;
function Gy() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify POS") >= 0;
}
ot.isShopifyPOS = Gy;
function qy() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Ping") >= 0;
}
ot.isShopifyPing = qy;
var JT = b && b.__awaiter || function(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function c(d) {
      try {
        u(n.next(d));
      } catch (s) {
        o(s);
      }
    }
    function h(d) {
      try {
        u(n.throw(d));
      } catch (s) {
        o(s);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, h);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, XT = b && b.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(d) {
      return h([u, d]);
    };
  }
  function h(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = u;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(u);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (d) {
        u = [6, d], i = 0;
      } finally {
        n = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.createMutationObserver = zr.setupModalAutoSizing = void 0;
var ZT = ca, xT = Zr, ew = ot, Tu = "app-bridge-utils-modal-auto-size", ii = tw();
function tw() {
  if (typeof document > "u")
    return null;
  var e = document.createElement("style");
  return e.type = "text/css", e.innerHTML = "." + Tu + " { overflow: hidden; height: auto; min-height: auto; }", e;
}
function rw(e, t) {
  if (!ii)
    return function() {
    };
  var r = document.getElementsByTagName("head")[0], n = document.body.classList;
  r.appendChild(ii), n.add(Tu);
  var i = Wy(e, t);
  return function() {
    n.remove(Tu), r.contains(ii) && r.removeChild(ii), i && i.disconnect();
  };
}
function nw(e) {
  return JT(this, void 0, void 0, function() {
    function t() {
      n && (n(), n = void 0);
    }
    function r(i) {
      var a = i.context, o = i.modal.id;
      return ew.isMobile() || a !== xT.Context.Modal ? (t(), t) : (n || (n = rw(e, o)), t);
    }
    var n;
    return XT(this, function(i) {
      switch (i.label) {
        case 0:
          return [4, e.getState().then(r)];
        case 1:
          return i.sent(), [2, t];
      }
    });
  });
}
zr.setupModalAutoSizing = nw;
function Wy(e, t) {
  if (typeof document > "u")
    return;
  var r = -1, n, i = {
    attributes: !0,
    attributeOldValue: !1,
    characterData: !0,
    characterDataOldValue: !1,
    childList: !0,
    subtree: !0
  }, a = new MutationObserver(o);
  a.observe(document, i), c();
  function o() {
    n && window.clearTimeout(n), n = window.setTimeout(c, 16);
  }
  function c() {
    var h = document.body.scrollHeight;
    h !== r && (r = h, e.dispatch(ZT.updateModalSize({ id: t, height: String(h) })));
  }
  return a;
}
zr.createMutationObserver = Wy;
var Hy = {}, Fn = {}, iw = b && b.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), aw = b && b.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), ow = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && iw(t, e, r);
  return aw(t, e), t;
}, uw = b && b.__awaiter || function(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function c(d) {
      try {
        u(n.next(d));
      } catch (s) {
        o(s);
      }
    }
    function h(d) {
      try {
        u(n.throw(d));
      } catch (s) {
        o(s);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, h);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, cw = b && b.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(d) {
      return h([u, d]);
    };
  }
  function h(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = u;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(u);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (d) {
        u = [6, d], i = 0;
      } finally {
        n = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.getSessionToken = void 0;
var Gf = ow(pc), qf = fr;
function sw(e) {
  return uw(this, void 0, void 0, function() {
    return cw(this, function(t) {
      return [2, new Promise(function(r, n) {
        var i = e.subscribe(Gf.Action.RESPOND, function(a) {
          var o = a.sessionToken;
          o ? r(o) : n(qf.fromAction("Failed to retrieve a session token", qf.Action.FAILED_AUTHENTICATION)), i();
        });
        e.dispatch(Gf.request());
      })];
    });
  });
}
Fn.getSessionToken = sw;
var ga = {}, Xi = b && b.__assign || function() {
  return Xi = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Xi.apply(this, arguments);
}, lw = b && b.__awaiter || function(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function c(d) {
      try {
        u(n.next(d));
      } catch (s) {
        o(s);
      }
    }
    function h(d) {
      try {
        u(n.throw(d));
      } catch (s) {
        o(s);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, h);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, fw = b && b.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(d) {
      return h([u, d]);
    };
  }
  function h(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = u;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(u);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (d) {
        u = [6, d], i = 0;
      } finally {
        n = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(ga, "__esModule", { value: !0 });
ga.authenticatedFetch = void 0;
var dw = Fn;
function pw(e, t) {
  var r = this;
  return t === void 0 && (t = fetch), function(n, i) {
    return i === void 0 && (i = {}), lw(r, void 0, void 0, function() {
      var a, o, c;
      return fw(this, function(h) {
        switch (h.label) {
          case 0:
            return [4, dw.getSessionToken(e)];
          case 1:
            return a = h.sent(), o = new Headers(i.headers), o.append("Authorization", "Bearer " + a), o.append("X-Requested-With", "XMLHttpRequest"), c = {}, o.forEach(function(u, d) {
              c[d] = u;
            }), [2, t(n, Xi(Xi({}, i), { headers: c }))];
        }
      });
    });
  };
}
ga.authenticatedFetch = pw;
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(n, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(n, i, a, o) {
    o === void 0 && (o = a), n[o] = i[a];
  }), r = b && b.__exportStar || function(n, i) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Fn, e), r(ga, e);
})(Hy);
var zy = {}, Un = {}, Ky = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.generateUuid = void 0;
  var t = Xr;
  Object.defineProperty(e, "generateUuid", { enumerable: !0, get: function() {
    return t.generateUuid;
  } }), e.default = t.generateUuid;
})(Ky);
var yw = b && b.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), hw = b && b.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), vw = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && yw(t, e, r);
  return hw(t, e), t;
}, mw = b && b.__awaiter || function(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function c(d) {
      try {
        u(n.next(d));
      } catch (s) {
        o(s);
      }
    }
    function h(d) {
      try {
        u(n.throw(d));
      } catch (s) {
        o(s);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, h);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, gw = b && b.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(d) {
      return h([u, d]);
    };
  }
  function h(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = u;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(u);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (d) {
        u = [6, d], i = 0;
      } finally {
        n = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, bw = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Un, "__esModule", { value: !0 });
Un.getAuthorizationCodePayload = void 0;
var Wf = vw(xu), Hf = fr, _w = bw(Ky);
function Ow(e) {
  return mw(this, void 0, void 0, function() {
    return gw(this, function(t) {
      return [2, new Promise(function(r, n) {
        var i = _w.default(), a = e.subscribe(Wf.Action.RESPOND, function(o) {
          switch (o == null ? void 0 : o.status) {
            case "needsExchange":
              r(o);
              break;
            default:
              n(Hf.fromAction("Failed to retrieve an authorization code", Hf.Action.FAILED_AUTHENTICATION));
          }
          a();
        }, i);
        e.dispatch(Wf.request(i));
      })];
    });
  });
}
Un.getAuthorizationCodePayload = Ow;
var ba = {}, Aw = b && b.__awaiter || function(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function c(d) {
      try {
        u(n.next(d));
      } catch (s) {
        o(s);
      }
    }
    function h(d) {
      try {
        u(n.throw(d));
      } catch (s) {
        o(s);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, h);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, Pw = b && b.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(d) {
      return h([u, d]);
    };
  }
  function h(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = u;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(u);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (d) {
        u = [6, d], i = 0;
      } finally {
        n = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.userAuthorizedFetch = void 0;
var Sw = Un, Ew = "auth/shopify/callback";
function Tw(e) {
  var t = e.headers.get("X-Shopify-API-Request-Failure-Unauthorized");
  return t ? t.toLowerCase() === "true" : !1;
}
function ww(e) {
  var t = this, r = e.app, n = e.callbackUri, i = n === void 0 ? Ew : n, a = e.isAuthorizationCodeRequired, o = a === void 0 ? Tw : a, c = e.fetchOperation;
  return function(h, u) {
    return Aw(t, void 0, void 0, function() {
      var d, s, p, f, y, l, v, m;
      return Pw(this, function(g) {
        switch (g.label) {
          case 0:
            return [4, c(h, u)];
          case 1:
            return d = g.sent(), o(d) ? [4, Sw.getAuthorizationCodePayload(r)] : [2, d];
          case 2:
            return s = g.sent(), p = s.code, f = s.hmac, y = s.shop, l = s.timestamp, v = encodeURI("https://" + window.location.hostname + "/" + i + "?code=" + p + "&hmac=" + f + "&shop=" + y + "&timestamp=" + l), [4, c(v, {})];
          case 3:
            if (m = g.sent(), !m.ok)
              throw new Error("Failed to authorize request.");
            return [2, c(h, u)];
        }
      });
    });
  };
}
ba.userAuthorizedFetch = ww;
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(n, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(n, i, a, o) {
    o === void 0 && (o = a), n[o] = i[a];
  }), r = b && b.__exportStar || function(n, i) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Un, e), r(ba, e);
})(zy);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(n, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(n, i, a, o) {
    o === void 0 && (o = a), n[o] = i[a];
  }), r = b && b.__exportStar || function(n, i) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(zr, e), r(ot, e), r(Hy, e), r(zy, e);
})(Uy);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(n, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(n, i, a, o) {
    o === void 0 && (o = a), n[o] = i[a];
  }), r = b && b.__exportStar || function(n, i) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Uy, e);
})(Fy);
var Dt;
(function(e) {
  e[e.Standalone = 0] = "Standalone", e[e.Embedded = 1] = "Embedded";
})(Dt || (Dt = {}));
const Iw = `
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
`, jw = fh(({ children: e, forceRedirect: t, isEmbedded: r, gadgetAppUrl: n, originalQueryParams: i, api: a, isRootFrameRequest: o, type: c, isInstallRequest: h }) => {
  var g, O;
  const u = zf(Bp), [d, s] = Kf({
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !0,
    appBridge: u,
    isRootFrameRequest: !1
  });
  ai(() => {
    if (!u) {
      console.debug("[gadget-rsab] no app bridge, skipping client auth setup");
      return;
    }
    a.connection.setAuthenticationMode({
      custom: {
        processFetch: async (_, T) => {
          const P = new Headers(T.headers);
          P.append("Authorization", `ShopifySessionToken ${await Fy.getSessionToken(u)}`), T.headers ?? (T.headers = {}), P.forEach(function(E, S) {
            T.headers[S] = E;
          });
        },
        processTransactionConnectionParams(_) {
          throw new Error("client side transactions yet not supported in Shopify Gadget provider");
        }
      }
    }), console.debug("[gadget-rsab] set up client auth for session tokens");
  }, [a.connection, u]);
  let p = !1, f = !1;
  const [{ data: y, fetching: l, error: v }] = Id({
    query: Iw,
    // for now don't fetch a session's shop in standalone mode since it leverages session tokens which aren't available if standalone
    pause: c == Dt.Standalone
  });
  y ? (p = (g = y.shopifyConnection) == null ? void 0 : g.requiresReauthentication, y.currentSession && (y.currentSession.shop ? f = !((O = y.shopifyConnection) != null && O.requiresReauthentication) : p = !0)) : c == Dt.Standalone && h && (p = !0), ai(() => {
    if (!p || o)
      return;
    const _ = new URL("/api/connections/auth/shopify", n);
    _.search = (i == null ? void 0 : i.toString()) ?? "";
    const T = _.toString();
    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process", {
      appType: c,
      isInstallRequest: h,
      isEmbedded: r,
      redirectURL: T,
      gadgetAppUrl: n
    }), r && u ? Ct.Redirect.create(u).dispatch(Ct.Redirect.Action.REMOTE, T) : window.location.assign(T);
  }, [u, n, r, o, i, p]);
  const m = (t || p || l) && !o;
  return ai(() => {
    const _ = {
      isAuthenticated: f,
      isEmbedded: r,
      canAuth: !!u,
      loading: m,
      appBridge: u,
      error: v,
      isRootFrameRequest: o
    };
    return console.debug("[gadget-rsab] context changed", _), s(_);
  }, [m, r, u, f, v, o]), ie.createElement(Mw.Provider, { value: d }, e);
}), Cw = ({ type: e, children: t, shopifyApiKey: r, api: n, router: i }) => {
  const [a, o] = Kf(null), c = !!a, { query: h } = a ?? {}, u = (h == null ? void 0 : h.get("host")) ?? void 0, d = e ?? Dt.Embedded, s = gi(() => h, [c]), p = (h == null ? void 0 : h.has("hmac")) && (h == null ? void 0 : h.has("shop")), f = typeof window < "u" ? window.top !== window.self : !1, y = typeof window < "u" && !!window.MobileWebView, l = f || y, v = l == (d == Dt.Embedded) && (d == Dt.Standalone ? !p : !0), m = !(h != null && h.has("hmac")) && !(h != null && h.has("shop")) && d == Dt.Embedded, g = c && typeof u < "u" && !v, O = new URL(n.connection.options.endpoint).origin;
  ai(() => {
    o({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search)
    });
  }, []);
  let _ = ie.createElement(
    Ng,
    { api: n },
    ie.createElement(jw, { forceRedirect: g, isEmbedded: l, gadgetAppUrl: O, api: n, originalQueryParams: s, isRootFrameRequest: m, type: d, isInstallRequest: !!p }, t)
  );
  const T = u && d != Dt.Standalone && (!p || v);
  return console.debug("[gadget-rsab] provider rendering", {
    host: u,
    coalescedType: d,
    isInstallRequest: p,
    isReady: c,
    isEmbedded: l,
    isRootFrameRequest: m,
    inDestinationContext: v,
    shouldMountAppBridge: T
  }), T && (_ = ie.createElement(KT.Provider, { config: {
    apiKey: r,
    host: u,
    forceRedirect: g
  }, router: i }, _)), _;
}, Mw = dh({
  loading: !0,
  isEmbedded: !1,
  isAuthenticated: !1,
  canAuth: !1,
  appBridge: null,
  isRootFrameRequest: !1
}), Qy = new Km(), Rw = () => {
  const [{ data: e }] = uP(Qy.shopifyProduct);
  return /* @__PURE__ */ bi.jsx(bi.Fragment, { children: JSON.stringify(e) });
}, $w = () => /* @__PURE__ */ bi.jsx(Cw, { api: Qy, shopifyApiKey: "deadbeef", children: /* @__PURE__ */ bi.jsx(Rw, {}) });
export {
  $w as A,
  Rw as R,
  b as c
};
