import * as Nt from "react";
import Ki, { useMemo as no, useContext as af, useRef as of } from "react";
var pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ji(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function sf(e) {
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
var io = { exports: {} }, Pn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bs;
function uf() {
  if (bs)
    return Pn;
  bs = 1;
  var e = Ki, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, c, y) {
    var d, v = {}, g = null, m = null;
    y !== void 0 && (g = "" + y), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (d in c)
      n.call(c, d) && !a.hasOwnProperty(d) && (v[d] = c[d]);
    if (u && u.defaultProps)
      for (d in c = u.defaultProps, c)
        v[d] === void 0 && (v[d] = c[d]);
    return { $$typeof: t, type: u, key: g, ref: m, props: v, _owner: i.current };
  }
  return Pn.Fragment = r, Pn.jsx = s, Pn.jsxs = s, Pn;
}
var In = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function lf() {
  return Ss || (Ss = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ki, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), S = Symbol.iterator, E = "@@iterator";
    function k(f) {
      if (f === null || typeof f != "object")
        return null;
      var T = S && f[S] || f[E];
      return typeof T == "function" ? T : null;
    }
    var M = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(f) {
      {
        for (var T = arguments.length, P = new Array(T > 1 ? T - 1 : 0), C = 1; C < T; C++)
          P[C - 1] = arguments[C];
        U("error", f, P);
      }
    }
    function U(f, T, P) {
      {
        var C = M.ReactDebugCurrentFrame, Y = C.getStackAddendum();
        Y !== "" && (T += "%s", P = P.concat([Y]));
        var V = P.map(function(H) {
          return String(H);
        });
        V.unshift("Warning: " + T), Function.prototype.apply.call(console[f], console, V);
      }
    }
    var w = !1, j = !1, A = !1, G = !1, Z = !1, de;
    de = Symbol.for("react.module.reference");
    function Te(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === a || Z || f === i || f === y || f === d || G || f === m || w || j || A || typeof f == "object" && f !== null && (f.$$typeof === g || f.$$typeof === v || f.$$typeof === s || f.$$typeof === u || f.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === de || f.getModuleId !== void 0));
    }
    function ce(f, T, P) {
      var C = f.displayName;
      if (C)
        return C;
      var Y = T.displayName || T.name || "";
      return Y !== "" ? P + "(" + Y + ")" : P;
    }
    function ve(f) {
      return f.displayName || "Context";
    }
    function ne(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case y:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case u:
            var T = f;
            return ve(T) + ".Consumer";
          case s:
            var P = f;
            return ve(P._context) + ".Provider";
          case c:
            return ce(f, f.render, "ForwardRef");
          case v:
            var C = f.displayName || null;
            return C !== null ? C : ne(f.type) || "Memo";
          case g: {
            var Y = f, V = Y._payload, H = Y._init;
            try {
              return ne(H(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var h = Object.assign, O = 0, _, $, F, q, x, me, $e;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ze() {
      {
        if (O === 0) {
          _ = console.log, $ = console.info, F = console.warn, q = console.error, x = console.group, me = console.groupCollapsed, $e = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        O++;
      }
    }
    function D() {
      {
        if (O--, O === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: h({}, f, {
              value: _
            }),
            info: h({}, f, {
              value: $
            }),
            warn: h({}, f, {
              value: F
            }),
            error: h({}, f, {
              value: q
            }),
            group: h({}, f, {
              value: x
            }),
            groupCollapsed: h({}, f, {
              value: me
            }),
            groupEnd: h({}, f, {
              value: $e
            })
          });
        }
        O < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = M.ReactCurrentDispatcher, zt;
    function Ae(f, T, P) {
      {
        if (zt === void 0)
          try {
            throw Error();
          } catch (Y) {
            var C = Y.stack.trim().match(/\n( *(at )?)/);
            zt = C && C[1] || "";
          }
        return `
` + zt + f;
      }
    }
    var Ht = !1, Dt;
    {
      var lr = typeof WeakMap == "function" ? WeakMap : Map;
      Dt = new lr();
    }
    function Kt(f, T) {
      if (!f || Ht)
        return "";
      {
        var P = Dt.get(f);
        if (P !== void 0)
          return P;
      }
      var C;
      Ht = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = ae.current, ae.current = null, Ze();
      try {
        if (T) {
          var H = function() {
            throw Error();
          };
          if (Object.defineProperty(H.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(H, []);
            } catch (tt) {
              C = tt;
            }
            Reflect.construct(f, [], H);
          } else {
            try {
              H.call();
            } catch (tt) {
              C = tt;
            }
            f.call(H.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (tt) {
            C = tt;
          }
          f();
        }
      } catch (tt) {
        if (tt && C && typeof tt.stack == "string") {
          for (var L = tt.stack.split(`
`), we = C.stack.split(`
`), oe = L.length - 1, le = we.length - 1; oe >= 1 && le >= 0 && L[oe] !== we[le]; )
            le--;
          for (; oe >= 1 && le >= 0; oe--, le--)
            if (L[oe] !== we[le]) {
              if (oe !== 1 || le !== 1)
                do
                  if (oe--, le--, le < 0 || L[oe] !== we[le]) {
                    var ie = `
` + L[oe].replace(" at new ", " at ");
                    return f.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", f.displayName)), typeof f == "function" && Dt.set(f, ie), ie;
                  }
                while (oe >= 1 && le >= 0);
              break;
            }
        }
      } finally {
        Ht = !1, ae.current = V, D(), Error.prepareStackTrace = Y;
      }
      var Pt = f ? f.displayName || f.name : "", Mr = Pt ? Ae(Pt) : "";
      return typeof f == "function" && Dt.set(f, Mr), Mr;
    }
    function jr(f, T, P) {
      return Kt(f, !1);
    }
    function cr(f) {
      var T = f.prototype;
      return !!(T && T.isReactComponent);
    }
    function Ft(f, T, P) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return Kt(f, cr(f));
      if (typeof f == "string")
        return Ae(f);
      switch (f) {
        case y:
          return Ae("Suspense");
        case d:
          return Ae("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            return jr(f.render);
          case v:
            return Ft(f.type, T, P);
          case g: {
            var C = f, Y = C._payload, V = C._init;
            try {
              return Ft(V(Y), T, P);
            } catch {
            }
          }
        }
      return "";
    }
    var Tt = Object.prototype.hasOwnProperty, fr = {}, Nr = M.ReactDebugCurrentFrame;
    function Jt(f) {
      if (f) {
        var T = f._owner, P = Ft(f.type, f._source, T ? T.type : null);
        Nr.setExtraStackFrame(P);
      } else
        Nr.setExtraStackFrame(null);
    }
    function Qt(f, T, P, C, Y) {
      {
        var V = Function.call.bind(Tt);
        for (var H in f)
          if (V(f, H)) {
            var L = void 0;
            try {
              if (typeof f[H] != "function") {
                var we = Error((C || "React class") + ": " + P + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw we.name = "Invariant Violation", we;
              }
              L = f[H](T, H, C, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              L = oe;
            }
            L && !(L instanceof Error) && (Jt(Y), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", P, H, typeof L), Jt(null)), L instanceof Error && !(L.message in fr) && (fr[L.message] = !0, Jt(Y), I("Failed %s type: %s", P, L.message), Jt(null));
          }
      }
    }
    var pr = Array.isArray;
    function Yt(f) {
      return pr(f);
    }
    function $r(f) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, P = T && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return P;
      }
    }
    function ot(f) {
      try {
        return Rt(f), !1;
      } catch {
        return !0;
      }
    }
    function Rt(f) {
      return "" + f;
    }
    function kr(f) {
      if (ot(f))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $r(f)), Rt(f);
    }
    var et = M.ReactCurrentOwner, Xt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zt, Be, er;
    er = {};
    function Cr(f) {
      if (Tt.call(f, "ref")) {
        var T = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function gn(f) {
      if (Tt.call(f, "key")) {
        var T = Object.getOwnPropertyDescriptor(f, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function dr(f, T) {
      if (typeof f.ref == "string" && et.current && T && et.current.stateNode !== T) {
        var P = ne(et.current.type);
        er[P] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ne(et.current.type), f.ref), er[P] = !0);
      }
    }
    function tr(f, T) {
      {
        var P = function() {
          Zt || (Zt = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        P.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Dr(f, T) {
      {
        var P = function() {
          Be || (Be = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        P.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var rr = function(f, T, P, C, Y, V, H) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: T,
        ref: P,
        props: H,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function Mt(f, T, P, C, Y) {
      {
        var V, H = {}, L = null, we = null;
        P !== void 0 && (kr(P), L = "" + P), gn(T) && (kr(T.key), L = "" + T.key), Cr(T) && (we = T.ref, dr(T, Y));
        for (V in T)
          Tt.call(T, V) && !Xt.hasOwnProperty(V) && (H[V] = T[V]);
        if (f && f.defaultProps) {
          var oe = f.defaultProps;
          for (V in oe)
            H[V] === void 0 && (H[V] = oe[V]);
        }
        if (L || we) {
          var le = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          L && tr(H, le), we && Dr(H, le);
        }
        return rr(f, L, we, Y, C, et.current, H);
      }
    }
    var qe = M.ReactCurrentOwner, Vt = M.ReactDebugCurrentFrame;
    function st(f) {
      if (f) {
        var T = f._owner, P = Ft(f.type, f._source, T ? T.type : null);
        Vt.setExtraStackFrame(P);
      } else
        Vt.setExtraStackFrame(null);
    }
    var yt;
    yt = !1;
    function Bt(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function At() {
      {
        if (qe.current) {
          var f = ne(qe.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function yr(f) {
      {
        if (f !== void 0) {
          var T = f.fileName.replace(/^.*[\\\/]/, ""), P = f.lineNumber;
          return `

Check your code at ` + T + ":" + P + ".";
        }
        return "";
      }
    }
    var nr = {};
    function hr(f) {
      {
        var T = At();
        if (!T) {
          var P = typeof f == "string" ? f : f.displayName || f.name;
          P && (T = `

Check the top-level render call using <` + P + ">.");
        }
        return T;
      }
    }
    function ht(f, T) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var P = hr(T);
        if (nr[P])
          return;
        nr[P] = !0;
        var C = "";
        f && f._owner && f._owner !== qe.current && (C = " It was passed a child from " + ne(f._owner.type) + "."), st(f), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, C), st(null);
      }
    }
    function gr(f, T) {
      {
        if (typeof f != "object")
          return;
        if (Yt(f))
          for (var P = 0; P < f.length; P++) {
            var C = f[P];
            Bt(C) && ht(C, T);
          }
        else if (Bt(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var Y = k(f);
          if (typeof Y == "function" && Y !== f.entries)
            for (var V = Y.call(f), H; !(H = V.next()).done; )
              Bt(H.value) && ht(H.value, T);
        }
      }
    }
    function gt(f) {
      {
        var T = f.type;
        if (T == null || typeof T == "string")
          return;
        var P;
        if (typeof T == "function")
          P = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === v))
          P = T.propTypes;
        else
          return;
        if (P) {
          var C = ne(T);
          Qt(P, f.props, "prop", C, f);
        } else if (T.PropTypes !== void 0 && !yt) {
          yt = !0;
          var Y = ne(T);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vn(f) {
      {
        for (var T = Object.keys(f.props), P = 0; P < T.length; P++) {
          var C = T[P];
          if (C !== "children" && C !== "key") {
            st(f), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), st(null);
            break;
          }
        }
        f.ref !== null && (st(f), I("Invalid attribute `ref` supplied to `React.Fragment`."), st(null));
      }
    }
    function Fr(f, T, P, C, Y, V) {
      {
        var H = Te(f);
        if (!H) {
          var L = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var we = yr(Y);
          we ? L += we : L += At();
          var oe;
          f === null ? oe = "null" : Yt(f) ? oe = "array" : f !== void 0 && f.$$typeof === t ? (oe = "<" + (ne(f.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof f, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, L);
        }
        var le = Mt(f, T, P, Y, V);
        if (le == null)
          return le;
        if (H) {
          var ie = T.children;
          if (ie !== void 0)
            if (C)
              if (Yt(ie)) {
                for (var Pt = 0; Pt < ie.length; Pt++)
                  gr(ie[Pt], f);
                Object.freeze && Object.freeze(ie);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gr(ie, f);
        }
        return f === n ? vn(le) : gt(le), le;
      }
    }
    function mn(f, T, P) {
      return Fr(f, T, P, !0);
    }
    function Rr(f, T, P) {
      return Fr(f, T, P, !1);
    }
    var vr = Rr, Se = mn;
    In.Fragment = n, In.jsx = vr, In.jsxs = Se;
  }()), In;
}
process.env.NODE_ENV === "production" ? io.exports = uf() : io.exports = lf();
var ws = io.exports, jn;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(jn || (jn = {}));
const cf = {
  DateTime(e) {
    return new Date(e);
  }
};
class ff {
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
      a != null && (r[n] = cf[i](a));
    }
    return r;
  }
}
var Qr = {
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
let ao = class extends Error {
  constructor(t, r, n, i, a, s, u) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), r && (this.nodes = Array.isArray(r) ? r : [r]), n && (this.source = n), i && (this.positions = i), s && (this.originalError = s);
    var c = u;
    if (!c && s) {
      var y = s.extensions;
      y && typeof y == "object" && (c = y);
    }
    this.extensions = c || {};
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
var se, W;
function he(e) {
  return new ao(`Syntax Error: Unexpected token at ${W} in ${e}`);
}
function nt(e) {
  if (e.lastIndex = W, e.test(se))
    return se.slice(W, W = e.lastIndex);
}
var oi = / +(?=[^\s])/y;
function pf(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, a = t.length - 1, s = 0; s < t.length; s++)
    oi.lastIndex = 0, oi.test(t[s]) && (s && (!n || oi.lastIndex < n) && (n = oi.lastIndex), i = i || s, a = s);
  for (var u = i; u <= a; u++)
    u !== i && (r += `
`), r += t[u].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function K() {
  for (var e = 0 | se.charCodeAt(W++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | se.charCodeAt(W++))
    if (e === 35)
      for (; (e = se.charCodeAt(W++)) !== 10 && e !== 13; )
        ;
  W--;
}
var dl = /[_A-Za-z]\w*/y;
function $t() {
  var e;
  if (e = nt(dl))
    return {
      kind: "Name",
      value: e
    };
}
var df = /(?:null|true|false)/y, yl = /\$[_A-Za-z]\w*/y, yf = /-?\d+/y, hf = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, gf = /\\/g, vf = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, mf = /"(?:"|[^\r\n]*?[^\\]")/y;
function Pi(e) {
  var t, r;
  if (r = nt(df))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = nt(yl)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = nt(yf)) {
    var n = r;
    (r = nt(hf)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = nt(dl))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = nt(vf))
    t = {
      kind: "StringValue",
      value: pf(r.slice(3, -3)),
      block: !0
    };
  else if (r = nt(mf))
    t = {
      kind: "StringValue",
      value: gf.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var s;
    if (se.charCodeAt(W) === 91) {
      W++, K();
      for (var u = []; s = Pi(a); )
        u.push(s);
      if (se.charCodeAt(W++) !== 93)
        throw he("ListValue");
      return K(), {
        kind: "ListValue",
        values: u
      };
    }
  }(e) || function(a) {
    if (se.charCodeAt(W) === 123) {
      W++, K();
      for (var s = [], u; u = $t(); ) {
        if (K(), se.charCodeAt(W++) !== 58)
          throw he("ObjectField");
        K();
        var c = Pi(a);
        if (!c)
          throw he("ObjectField");
        s.push({
          kind: "ObjectField",
          name: u,
          value: c
        });
      }
      if (se.charCodeAt(W++) !== 125)
        throw he("ObjectValue");
      return K(), {
        kind: "ObjectValue",
        fields: s
      };
    }
  }(e))
    return t;
  return K(), t;
}
function hl(e) {
  var t = [];
  if (K(), se.charCodeAt(W) === 40) {
    W++, K();
    for (var r; r = $t(); ) {
      if (K(), se.charCodeAt(W++) !== 58)
        throw he("Argument");
      K();
      var n = Pi(e);
      if (!n)
        throw he("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || se.charCodeAt(W++) !== 41)
      throw he("Argument");
    K();
  }
  return t;
}
function tn(e) {
  var t = [];
  for (K(); se.charCodeAt(W) === 64; ) {
    W++;
    var r = $t();
    if (!r)
      throw he("Directive");
    K(), t.push({
      kind: "Directive",
      name: r,
      arguments: hl(e)
    });
  }
  return t;
}
function bf() {
  var e = $t();
  if (e) {
    K();
    var t;
    if (se.charCodeAt(W) === 58) {
      if (W++, K(), t = e, !(e = $t()))
        throw he("Field");
      K();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: hl(!1),
      directives: tn(!1),
      selectionSet: Qi()
    };
  }
}
function gl() {
  var e;
  if (K(), se.charCodeAt(W) === 91) {
    W++, K();
    var t = gl();
    if (!t || se.charCodeAt(W++) !== 93)
      throw he("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = $t())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw he("NamedType");
  return K(), se.charCodeAt(W) === 33 ? (W++, K(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Sf = /on/y;
function vl() {
  if (nt(Sf)) {
    K();
    var e = $t();
    if (!e)
      throw he("NamedType");
    return K(), {
      kind: "NamedType",
      name: e
    };
  }
}
var wf = /\.\.\./y;
function Of() {
  if (nt(wf)) {
    K();
    var e = W, t;
    if ((t = $t()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: tn(!1)
      };
    W = e;
    var r = vl(), n = tn(!1), i = Qi();
    if (!i)
      throw he("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: i
    };
  }
}
function Qi() {
  var e;
  if (K(), se.charCodeAt(W) === 123) {
    W++, K();
    for (var t = []; e = Of() || bf(); )
      t.push(e);
    if (!t.length || se.charCodeAt(W++) !== 125)
      throw he("SelectionSet");
    return K(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Tf = /fragment/y;
function Af() {
  if (nt(Tf)) {
    K();
    var e = $t();
    if (!e)
      throw he("FragmentDefinition");
    K();
    var t = vl();
    if (!t)
      throw he("FragmentDefinition");
    var r = tn(!1), n = Qi();
    if (!n)
      throw he("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var Pf = /(?:query|mutation|subscription)/y;
function If() {
  var e, t, r = [], n = [];
  (e = nt(Pf)) && (K(), t = $t(), r = function() {
    var s, u = [];
    if (K(), se.charCodeAt(W) === 40) {
      for (W++, K(); s = nt(yl); ) {
        if (K(), se.charCodeAt(W++) !== 58)
          throw he("VariableDefinition");
        var c = gl(), y = void 0;
        if (se.charCodeAt(W) === 61 && (W++, K(), !(y = Pi(!0))))
          throw he("VariableDefinition");
        K(), u.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: s.slice(1)
            }
          },
          type: c,
          defaultValue: y,
          directives: tn(!0)
        });
      }
      if (se.charCodeAt(W++) !== 41)
        throw he("VariableDefinition");
      K();
    }
    return u;
  }(), n = tn(!1));
  var i = Qi();
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
function _f(e, t) {
  return se = typeof e.body == "string" ? e.body : e, W = 0, function() {
    var n;
    K();
    for (var i = []; n = Af() || If(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function Ef(e) {
  return JSON.stringify(e);
}
function xf(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var ut = (e) => !(!e || !e.length), De = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !ut(e.variableDefinitions) && !ut(e.directives))
      return De.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), ut(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(De.VariableDefinition).join(", ") + ")"), ut(e.directives) && (t += " " + e.directives.map(De.Directive).join(" ")), t + " " + De.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = De.Variable(e.variable) + ": " + ct(e.type);
    return e.defaultValue && (t += " = " + ct(e.defaultValue)), ut(e.directives) && (t += " " + e.directives.map(De.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (ut(e.arguments)) {
      var r = e.arguments.map(De.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return ut(e.directives) && (t += " " + e.directives.map(De.Directive).join(" ")), e.selectionSet ? t + " " + De.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? xf(e.value) : Ef(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(ct).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(De.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + ct(e.value),
  Document: (e) => ut(e.definitions) ? e.definitions.map(ct).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(ct).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + ct(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return ut(e.directives) && (t += " " + e.directives.map(De.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), ut(e.directives) && (t += " " + e.directives.map(De.Directive).join(" ")), t + " " + ct(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, ut(e.directives) && (t += " " + e.directives.map(De.Directive).join(" ")), t + " " + ct(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return ut(e.arguments) && (t += "(" + e.arguments.map(De.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + ct(e.type) + "]",
  NonNullType: (e) => ct(e.type) + "!"
};
function ct(e) {
  return De[e.kind] ? De[e.kind](e) : "";
}
var ml = () => {
}, at = ml;
function wt(e) {
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
var jf = (e) => e;
function Ne(e) {
  return (t) => (r) => {
    var n = at;
    t((i) => {
      i === 0 ? r(0) : i.tag === 0 ? (n = i[0], r(i)) : e(i[0]) ? r(i) : n(0);
    });
  };
}
function Nn(e) {
  return (t) => (r) => t((n) => {
    n === 0 || n.tag === 0 ? r(n) : r(Ln(e(n[0])));
  });
}
function Lo(e) {
  return (t) => (r) => {
    var n = [], i = at, a = !1, s = !1;
    t((u) => {
      s || (u === 0 ? (s = !0, n.length || r(0)) : u.tag === 0 ? i = u[0] : (a = !1, function(y) {
        var d = at;
        y((v) => {
          if (v === 0) {
            if (n.length) {
              var g = n.indexOf(d);
              g > -1 && (n = n.slice()).splice(g, 1), n.length || (s ? r(0) : a || (a = !0, i(0)));
            }
          } else
            v.tag === 0 ? (n.push(d = v[0]), d(0)) : n.length && (r(v), d(0));
        });
      }(e(u[0])), a || (a = !0, i(0))));
    }), r(wt((u) => {
      if (u === 1) {
        s || (s = !0, i(1));
        for (var c = 0, y = n, d = n.length; c < d; c++)
          y[c](1);
        n.length = 0;
      } else {
        !s && !a ? (a = !0, i(0)) : a = !1;
        for (var v = 0, g = n, m = n.length; v < m; v++)
          g[v](0);
      }
    }));
  };
}
function Nf(e) {
  return Lo(jf)(e);
}
function rn(e) {
  return Nf(Cf(e));
}
function Wo(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          r(wt((s) => {
            s === 1 ? (n = !0, a(1), e()) : a(s);
          }));
        } else
          r(i);
    });
  };
}
function _r(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0);
        else if (i.tag === 0) {
          var a = i[0];
          r(wt((s) => {
            s === 1 && (n = !0), a(s);
          }));
        } else
          e(i[0]), r(i);
    });
  };
}
function Os(e) {
  return (t) => (r) => t((n) => {
    n === 0 ? r(0) : n.tag === 0 ? (r(n), e()) : r(n);
  });
}
function Mn(e) {
  var t = [], r = at, n = !1;
  return (i) => {
    t.push(i), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var s = 0, u = t, c = t.length; s < c; s++)
          u[s](0);
        t.length = 0;
      } else if (a.tag === 0)
        r = a[0];
      else {
        n = !1;
        for (var y = 0, d = t, v = t.length; y < v; y++)
          d[y](a);
      }
    }), i(wt((a) => {
      if (a === 1) {
        var s = t.indexOf(i);
        s > -1 && (t = t.slice()).splice(s, 1), t.length || r(1);
      } else
        n || (n = !0, r(0));
    }));
  };
}
function Ts(e) {
  return (t) => (r) => {
    var n = at, i = at, a = !1, s = !1, u = !1, c = !1;
    t((y) => {
      c || (y === 0 ? (c = !0, u || r(0)) : y.tag === 0 ? n = y[0] : (u && (i(1), i = at), a ? a = !1 : (a = !0, n(0)), function(v) {
        u = !0, v((g) => {
          u && (g === 0 ? (u = !1, c ? r(0) : a || (a = !0, n(0))) : g.tag === 0 ? (s = !1, (i = g[0])(0)) : (r(g), s ? s = !1 : i(0)));
        });
      }(e(y[0]))));
    }), r(wt((y) => {
      y === 1 ? (c || (c = !0, n(1)), u && (u = !1, i(1))) : (!c && !a && (a = !0, n(0)), u && !s && (s = !0, i(0)));
    }));
  };
}
function bl(e) {
  return (t) => (r) => {
    var n = at, i = !1, a = 0;
    t((s) => {
      i || (s === 0 ? (i = !0, r(0)) : s.tag === 0 ? e <= 0 ? (i = !0, r(0), s[0](1)) : n = s[0] : a++ < e ? (r(s), !i && a >= e && (i = !0, r(0), n(1))) : r(s));
    }), r(wt((s) => {
      s === 1 && !i ? (i = !0, n(1)) : s === 0 && !i && a < e && n(0);
    }));
  };
}
function zo(e) {
  return (t) => (r) => {
    var n = at, i = at, a = !1;
    t((s) => {
      a || (s === 0 ? (a = !0, i(1), r(0)) : s.tag === 0 ? (n = s[0], e((u) => {
        u === 0 || (u.tag === 0 ? (i = u[0])(0) : (a = !0, i(1), n(1), r(0)));
      })) : r(s));
    }), r(wt((s) => {
      s === 1 && !a ? (a = !0, n(1), i(1)) : a || n(0);
    }));
  };
}
function Sl(e, t) {
  return (r) => (n) => {
    var i = at, a = !1;
    r((s) => {
      a || (s === 0 ? (a = !0, n(0)) : s.tag === 0 ? (i = s[0], n(s)) : e(s[0]) ? n(s) : (a = !0, t && n(s), n(0), i(1)));
    });
  };
}
function $f(e) {
  return (t) => e()(t);
}
function wl(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), n = !1, i = !1, a = !1, s;
    t(wt(async (u) => {
      if (u === 1)
        n = !0, r.return && r.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !n; )
          if ((s = await r.next()).done)
            n = !0, r.return && await r.return(), t(0);
          else
            try {
              a = !1, t(Ln(s.value));
            } catch (c) {
              if (r.throw)
                (n = !!(await r.throw(c)).done) && t(0);
              else
                throw c;
            }
        i = !1;
      }
    }));
  };
}
function kf(e) {
  return e[Symbol.asyncIterator] ? wl(e) : (t) => {
    var r = e[Symbol.iterator](), n = !1, i = !1, a = !1, s;
    t(wt((u) => {
      if (u === 1)
        n = !0, r.return && r.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !n; )
          if ((s = r.next()).done)
            n = !0, r.return && r.return(), t(0);
          else
            try {
              a = !1, t(Ln(s.value));
            } catch (c) {
              if (r.throw)
                (n = !!r.throw(c).done) && t(0);
              else
                throw c;
            }
        i = !1;
      }
    }));
  };
}
var Cf = kf;
function Pa(e) {
  return (t) => {
    var r = !1;
    t(wt((n) => {
      n === 1 ? r = !0 : r || (r = !0, t(Ln(e)), t(0));
    }));
  };
}
function Ol(e) {
  return (t) => {
    var r = !1, n = e({
      next(i) {
        r || t(Ln(i));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(wt((i) => {
      i === 1 && !r && (r = !0, n());
    }));
  };
}
function As() {
  var e, t;
  return {
    source: Mn(Ol((r) => (e = r.next, t = r.complete, ml))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function Er(e) {
  return (t) => {
    var r = at, n = !1;
    return t((i) => {
      i === 0 ? n = !0 : i.tag === 0 ? (r = i[0])(0) : n || (e(i[0]), r(0));
    }), {
      unsubscribe() {
        n || (n = !0, r(1));
      }
    };
  };
}
function Df(e) {
  Er((t) => {
  })(e);
}
function Ff(e) {
  return new Promise((t) => {
    var r = at, n;
    e((i) => {
      i === 0 ? Promise.resolve(n).then(t) : i.tag === 0 ? (r = i[0])(0) : (n = i[0], r(0));
    });
  });
}
var Rf = (...e) => {
  for (var t = e[0], r = 1, n = e.length; r < n; r++)
    t = e[r](t);
  return t;
}, Mf = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new ao(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new ao(e);
class Wn extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(Mf), n = ((i, a) => {
      var s = "";
      if (i)
        return `[Network] ${i.message}`;
      if (a)
        for (var u of a)
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
var oo = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, Ar = /* @__PURE__ */ new Set(), Ps = /* @__PURE__ */ new WeakMap(), zr = (e) => {
  if (e === null || Ar.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return zr(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += zr(r) || "null";
    return t += "]";
  } else if (_i !== nn && e instanceof _i || Ei !== nn && e instanceof Ei)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = Ps.get(e) || Math.random().toString(36).slice(2);
    return Ps.set(e, i), zr({
      __key: i
    });
  }
  Ar.add(e);
  var a = "{";
  for (var s of n) {
    var u = zr(e[s]);
    u && (a.length > 1 && (a += ","), a += zr(s) + ":" + u);
  }
  return Ar.delete(e), a += "}";
}, so = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || Ar.has(r)))
    if (Array.isArray(r))
      for (var n = 0, i = r.length; n < i; n++)
        so(e, `${t}.${n}`, r[n]);
    else if (r instanceof _i || r instanceof Ei)
      e.set(t, r);
    else {
      Ar.add(r);
      for (var a of Object.keys(r))
        so(e, `${t}.${a}`, r[a]);
    }
}, Ii = (e) => (Ar.clear(), zr(e));
let nn = class {
};
var _i = typeof File < "u" ? File : nn, Ei = typeof Blob < "u" ? Blob : nn, Vf = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Bf = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, qf = (e, t) => t % 2 == 0 ? e.replace(Bf, `
`) : e, Is = (e) => e.split(Vf).map(qf).join("").trim(), _s = /* @__PURE__ */ new Map(), di = /* @__PURE__ */ new Map(), Ho = (e) => {
  var t;
  return typeof e == "string" ? t = Is(e) : e.loc && di.get(e.__key) === e ? t = e.loc.source.body : (t = _s.get(e) || Is(ct(e)), _s.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Es = (e) => {
  var t = oo(Ho(e));
  if (e.definitions) {
    var r = Al(e);
    r && (t = oo(`
# ${r}`, t));
  }
  return t;
}, Tl = (e) => {
  var t, r;
  return typeof e == "string" ? (t = Es(e), r = di.get(t) || _f(e)) : (t = e.__key || Es(e), r = di.get(t) || e), r.loc || Ho(r), r.__key = t, di.set(t, r), r;
}, Ia = (e, t, r) => {
  var n = t || {}, i = Tl(e), a = Ii(n), s = i.__key;
  return a !== "{}" && (s = oo(a, s)), {
    key: s,
    query: i,
    variables: n,
    extensions: r
  };
}, Al = (e) => {
  for (var t of e.definitions)
    if (t.kind === Qr.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, Uf = (e) => {
  for (var t of e.definitions)
    if (t.kind === Qr.OPERATION_DEFINITION)
      return t.operation;
}, uo = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var n = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new Wn({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? n : t.hasNext,
    stale: !1
  };
}, lo = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = lo(e[r], t[r]);
    return e;
  }
  return t;
}, co = (e, t, r) => {
  var n = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, s = t.incremental;
  "path" in t && (s = [t]);
  var u = {
    data: e.data
  };
  if (s)
    for (var c of s) {
      Array.isArray(c.errors) && n.push(...c.errors), c.extensions && (Object.assign(a, c.extensions), i = !0);
      for (var y = "data", d = u, v = 0, g = c.path.length; v < g; y = c.path[v++])
        d = d[y] = Array.isArray(d[y]) ? [...d[y]] : {
          ...d[y]
        };
      if (c.items)
        for (var m = +y >= 0 ? y : 0, S = 0, E = c.items.length; S < E; S++)
          d[m + S] = lo(d[m + S], c.items[S]);
      else
        c.data !== void 0 && (d[y] = lo(d[y], c.data));
    }
  else
    u.data = t.data || e.data, n = t.errors || n;
  return {
    operation: e.operation,
    data: u.data,
    error: n.length ? new Wn({
      graphQLErrors: n,
      response: r
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, Pl = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new Wn({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function Il(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Ho(e.query),
    operationName: Al(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var Gf = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var n = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && n.searchParams.set(i, typeof a == "object" ? Ii(a) : a);
  }
  var s = n.toString();
  return s.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s;
}, Lf = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = Ii(t), n = ((u) => {
      var c = /* @__PURE__ */ new Map();
      return (_i !== nn || Ei !== nn) && (Ar.clear(), so(c, "variables", u)), c;
    })(t.variables);
    if (n.size) {
      var i = new FormData();
      i.append("operations", r), i.append("map", Ii({
        ...[...n.keys()].map((u) => [u])
      }));
      var a = 0;
      for (var s of n.values())
        i.append("" + a++, s);
      return i;
    }
    return r;
  }
}, Wf = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (n.headers)
    for (var i in n.headers)
      r[i.toLowerCase()] = n.headers[i];
  var a = Lf(e, t);
  return typeof a == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...n,
    method: a ? "POST" : "GET",
    body: a,
    headers: r
  };
}, zf = typeof TextDecoder < "u" ? new TextDecoder() : null, Hf = /boundary="?([^=";]+)"?/i, Kf = /data: ?([^\n]+)/, xs = (e) => e.constructor.name === "Buffer" ? e.toString() : zf.decode(e);
async function* js(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield xs(t);
  else {
    var r = e.body.getReader(), n;
    try {
      for (; !(n = await r.read()).done; )
        yield xs(n.value);
    } finally {
      r.cancel();
    }
  }
}
async function* Ns(e, t) {
  var r = "", n;
  for await (var i of e)
    for (r += i; (n = r.indexOf(t)) > -1; )
      yield r.slice(0, n), r = r.slice(n + t.length);
}
async function* Jf(e, t, r) {
  var n = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var s = (a = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", u;
    if (/multipart\/mixed/i.test(s))
      u = async function* (d, v) {
        var g = d.match(Hf), m = "--" + (g ? g[1] : "-"), S = !0, E;
        for await (var k of Ns(js(v), `\r
` + m)) {
          if (S) {
            S = !1;
            var M = k.indexOf(m);
            if (M > -1)
              k = k.slice(M + m.length);
            else
              continue;
          }
          try {
            yield E = JSON.parse(k.slice(k.indexOf(`\r
\r
`) + 4));
          } catch (I) {
            if (!E)
              throw I;
          }
          if (E && E.hasNext === !1)
            break;
        }
        E && E.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(s, a);
    else if (/text\/event-stream/i.test(s))
      u = async function* (d) {
        var v;
        for await (var g of Ns(js(d), `

`)) {
          var m = g.match(Kf);
          if (m) {
            var S = m[1];
            try {
              yield v = JSON.parse(S);
            } catch (E) {
              if (!v)
                throw E;
            }
            if (v && v.hasNext === !1)
              break;
          }
        }
        v && v.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(a);
    else if (!/text\//i.test(s))
      u = async function* (d) {
        yield JSON.parse(await d.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var c of u)
      i = i ? co(i, c, a) : uo(e, c, a), n = !1, yield i, n = !0;
    i || (yield i = uo(e, {}, a));
  } catch (y) {
    if (!n)
      throw y;
    yield Pl(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : y, a);
  }
}
function Qf(e, t, r) {
  var n;
  return typeof AbortController < "u" && (r.signal = (n = new AbortController()).signal), Wo(() => {
    n && n.abort();
  })(Ne((i) => !!i)(wl(Jf(e, t, r))));
}
var fo = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      fo(r, t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : fo(e[n], t);
  return t;
}, po = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var n of e.definitions) {
      var i = po(n);
      t = t || i !== n, r.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var a = [], s = e.kind === Qr.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var u of e.selectionSet.selections || []) {
        s = s || u.kind === Qr.FIELD && u.name.value === "__typename" && !u.alias;
        var c = po(u);
        t = t || c !== u, a.push(c);
      }
      if (s || (t = !0, a.push({
        kind: Qr.FIELD,
        name: {
          kind: Qr.NAME,
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
}, $s = /* @__PURE__ */ new Map(), Yf = (e) => {
  var t = Tl(e), r = $s.get(t.__key);
  return r || ($s.set(t.__key, r = po(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, yo = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => yo(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var n in e)
      n === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[n] = yo(e[n]);
    return r;
  } else
    return e;
};
function ks(e) {
  var t = (r) => e(r);
  return t.toPromise = () => Ff(bl(1)(Ne((r) => !r.stale && !r.hasNext)(t))), t.then = (r, n) => t.toPromise().then(r, n), t.subscribe = (r) => Er(r)(t), t;
}
function an(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var Cs = (e, t) => an(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), Xf = () => {
}, _a = ({ kind: e }) => e !== "mutation" && e !== "query", Zf = ({ forward: e, client: t, dispatchDebug: r }) => {
  var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (u) => {
    var c = an(u.kind, u);
    return c.query = Yf(u.query), c;
  }, s = (u) => u.kind === "query" && u.context.requestPolicy !== "network-only" && (u.context.requestPolicy === "cache-only" || n.has(u.key));
  return (u) => {
    var c = Nn((d) => {
      var v = n.get(d.key);
      process.env.NODE_ENV !== "production" && r({
        operation: d,
        ...v ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var g = v;
      return process.env.NODE_ENV !== "production" && (g = {
        ...g,
        operation: process.env.NODE_ENV !== "production" ? Cs(d, {
          cacheOutcome: v ? "hit" : "miss"
        }) : d
      }), d.context.requestPolicy === "cache-and-network" && (g.stale = !0, Ds(t, d)), g;
    })(Ne((d) => !_a(d) && s(d))(u)), y = _r((d) => {
      var { operation: v } = d;
      if (v) {
        var g = v.context.additionalTypenames || [];
        if (d.operation.kind !== "subscription" && (g = ((A) => [...fo(A, /* @__PURE__ */ new Set())])(d.data).concat(g)), d.operation.kind === "mutation" || d.operation.kind === "subscription") {
          var m = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && r({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${g}`,
            operation: v,
            data: {
              typenames: g,
              response: d
            },
            source: "cacheExchange"
          });
          for (var S = 0; S < g.length; S++) {
            var E = g[S], k = i.get(E);
            k || i.set(E, k = /* @__PURE__ */ new Set());
            for (var M of k.values())
              m.add(M);
            k.clear();
          }
          for (var I of m.values())
            n.has(I) && (v = n.get(I).operation, n.delete(I), Ds(t, v));
        } else if (v.kind === "query" && d.data) {
          n.set(v.key, d);
          for (var U = 0; U < g.length; U++) {
            var w = g[U], j = i.get(w);
            j || i.set(w, j = /* @__PURE__ */ new Set()), j.add(v.key);
          }
        }
      }
    })(e(Ne((d) => d.kind !== "query" || d.context.requestPolicy !== "cache-only")(Nn((d) => process.env.NODE_ENV !== "production" ? Cs(d, {
      cacheOutcome: "miss"
    }) : d)(rn([Nn(a)(Ne((d) => !_a(d) && !s(d))(u)), Ne((d) => _a(d))(u)])))));
    return rn([c, y]);
  };
}, Ds = (e, t) => e.reexecuteOperation(an(t.kind, t, {
  requestPolicy: "network-only"
})), Fs = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: n, forward: i }) => {
  var a = r || ((s) => s.kind === "subscription" || !!t && (s.kind === "query" || s.kind === "mutation"));
  return (s) => {
    var u = Lo((y) => {
      var { key: d } = y, v = Ne((g) => g.kind === "teardown" && g.key === d)(s);
      return zo(v)(((g) => {
        var m = e(Il(g), g);
        return Ol(({ next: S, complete: E }) => {
          var k = !1, M, I;
          return Promise.resolve().then(() => {
            k || (M = m.subscribe({
              next(U) {
                S(I = I ? co(I, U) : uo(g, U));
              },
              error(U) {
                S(Pl(g, U));
              },
              complete() {
                k || (k = !0, g.kind === "subscription" && n.reexecuteOperation(an("teardown", g, g.context)), I && I.hasNext && S(co(I, {
                  hasNext: !1
                })), E());
              }
            }));
          }), () => {
            k = !0, M && M.unsubscribe();
          };
        });
      })(y));
    })(Ne((y) => y.kind !== "teardown" && a(y))(s)), c = i(Ne((y) => y.kind === "teardown" || !a(y))(s));
    return rn([u, c]);
  };
}, ep = ({ forward: e, dispatchDebug: t }) => (r) => {
  var n = Lo((a) => {
    var s = Il(a), u = Gf(a, s), c = Wf(a, s);
    process.env.NODE_ENV !== "production" && t({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: a,
      data: {
        url: u,
        fetchOptions: c
      },
      source: "fetchExchange"
    });
    var y = zo(Ne((d) => d.kind === "teardown" && d.key === a.key)(r))(Qf(a, u, c));
    return process.env.NODE_ENV !== "production" ? _r((d) => {
      var v = d.data ? void 0 : d.error;
      process.env.NODE_ENV !== "production" && t({
        type: v ? "fetchError" : "fetchSuccess",
        message: `A ${v ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: u,
          fetchOptions: c,
          value: v || d
        },
        source: "fetchExchange"
      });
    })(y) : y;
  })(Ne((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(r)), i = e(Ne((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(r));
  return rn([n, i]);
}, tp = (e) => ({ client: t, forward: r, dispatchDebug: n }) => e.reduceRight((i, a) => {
  var s = !1;
  return a({
    client: t,
    forward(u) {
      if (process.env.NODE_ENV !== "production") {
        if (s)
          throw new Error("forward() must only be called once in each Exchange.");
        s = !0;
      }
      return Mn(i(Mn(u)));
    },
    dispatchDebug(u) {
      process.env.NODE_ENV !== "production" && n({
        timestamp: Date.now(),
        source: a.name,
        ...u
      });
    }
  });
}, r), rp = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = _r((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var n = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: n,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(n);
  }
})(t)), Ne((r) => !1)(t)), Rs = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), s = [], u = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, c = As();
  function y(w) {
    (w.kind === "mutation" || w.kind === "teardown" || !a.has(w.key)) && (w.kind === "teardown" ? a.delete(w.key) : w.kind !== "mutation" && a.add(w.key), c.next(w));
  }
  var d = !1;
  function v(w) {
    if (w && y(w), !d) {
      for (d = !0; d && (w = s.shift()); )
        y(w);
      d = !1;
    }
  }
  var g = (w) => {
    var j = zo(Ne((A) => A.kind === "teardown" && A.key === w.key)(c.source))(Ne((A) => A.operation.kind === w.kind && A.operation.key === w.key && (!A.operation.context._instance || A.operation.context._instance === w.context._instance))(U));
    return w.kind !== "query" ? j = Sl((A) => !!A.hasNext, !0)(j) : j = Ts((A) => {
      var G = Pa(A);
      return A.stale || A.hasNext ? G : rn([G, Nn(() => (A.stale = !0, A))(bl(1)(Ne((Z) => Z.key === w.key)(c.source)))]);
    })(j), w.kind !== "mutation" ? j = Wo(() => {
      a.delete(w.key), n.delete(w.key), i.delete(w.key), d = !1;
      for (var A = s.length - 1; A >= 0; A--)
        s[A].key === w.key && s.splice(A, 1);
      y(an("teardown", w, w.context));
    })(_r((A) => {
      if (A.stale) {
        for (var G of s)
          if (G.key === A.operation.key) {
            a.delete(G.key);
            break;
          }
      } else
        A.hasNext || a.delete(w.key);
      n.set(w.key, A);
    })(j)) : j = Os(() => {
      y(w);
    })(j), t.maskTypename && (j = Nn((A) => ({
      ...A,
      data: yo(A.data, !0)
    }))(j)), Mn(j);
  }, m = this instanceof e ? this : Object.create(e.prototype), S = Object.assign(m, {
    suspense: !!t.suspense,
    operations$: c.source,
    reexecuteOperation(w) {
      w.kind === "teardown" ? v(w) : (w.kind === "mutation" || i.has(w.key)) && (s.push(w), Promise.resolve().then(v));
    },
    createRequestOperation(w, j, A) {
      A || (A = {});
      var G;
      if (process.env.NODE_ENV !== "production" && w !== "teardown" && (G = Uf(j.query)) !== w)
        throw new Error(`Expected operation of type "${w}" but found "${G}"`);
      return an(w, j, {
        _instance: w === "mutation" ? r = r + 1 | 0 : void 0,
        ...u,
        ...A,
        requestPolicy: A.requestPolicy || u.requestPolicy,
        suspense: A.suspense || A.suspense !== !1 && S.suspense
      });
    },
    executeRequestOperation(w) {
      return w.kind === "mutation" ? ks(g(w)) : ks($f(() => {
        var j = i.get(w.key);
        j || i.set(w.key, j = g(w)), j = Os(() => {
          v(w);
        })(j);
        var A = n.get(w.key);
        return w.kind === "query" && A && (A.stale || A.hasNext) ? Ts(Pa)(rn([j, Ne((G) => G === n.get(w.key))(Pa(A))])) : j;
      }));
    },
    executeQuery(w, j) {
      var A = S.createRequestOperation("query", w, j);
      return S.executeRequestOperation(A);
    },
    executeSubscription(w, j) {
      var A = S.createRequestOperation("subscription", w, j);
      return S.executeRequestOperation(A);
    },
    executeMutation(w, j) {
      var A = S.createRequestOperation("mutation", w, j);
      return S.executeRequestOperation(A);
    },
    readQuery(w, j, A) {
      var G = null;
      return Er((Z) => {
        G = Z;
      })(S.query(w, j, A)).unsubscribe(), G;
    },
    query: (w, j, A) => S.executeQuery(Ia(w, j), A),
    subscription: (w, j, A) => S.executeSubscription(Ia(w, j), A),
    mutation: (w, j, A) => S.executeMutation(Ia(w, j), A)
  }), E = Xf;
  if (process.env.NODE_ENV !== "production") {
    var { next: k, source: M } = As();
    S.subscribeToDebugTarget = (w) => Er(w)(M), E = k;
  }
  var I = tp(t.exchanges), U = Mn(I({
    client: S,
    dispatchDebug: E,
    forward: rp({
      dispatchDebug: E
    })
  })(c.source));
  return Df(U), S;
}, ho = { exports: {} };
(function(e, t) {
  var r = typeof self < "u" ? self : pt, n = function() {
    function a() {
      this.fetch = !1, this.DOMException = r.DOMException;
    }
    return a.prototype = r, new a();
  }();
  (function(a) {
    (function(s) {
      var u = {
        searchParams: "URLSearchParams" in a,
        iterable: "Symbol" in a && "iterator" in Symbol,
        blob: "FileReader" in a && "Blob" in a && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in a,
        arrayBuffer: "ArrayBuffer" in a
      };
      function c(h) {
        return h && DataView.prototype.isPrototypeOf(h);
      }
      if (u.arrayBuffer)
        var y = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], d = ArrayBuffer.isView || function(h) {
          return h && y.indexOf(Object.prototype.toString.call(h)) > -1;
        };
      function v(h) {
        if (typeof h != "string" && (h = String(h)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(h))
          throw new TypeError("Invalid character in header field name");
        return h.toLowerCase();
      }
      function g(h) {
        return typeof h != "string" && (h = String(h)), h;
      }
      function m(h) {
        var O = {
          next: function() {
            var _ = h.shift();
            return { done: _ === void 0, value: _ };
          }
        };
        return u.iterable && (O[Symbol.iterator] = function() {
          return O;
        }), O;
      }
      function S(h) {
        this.map = {}, h instanceof S ? h.forEach(function(O, _) {
          this.append(_, O);
        }, this) : Array.isArray(h) ? h.forEach(function(O) {
          this.append(O[0], O[1]);
        }, this) : h && Object.getOwnPropertyNames(h).forEach(function(O) {
          this.append(O, h[O]);
        }, this);
      }
      S.prototype.append = function(h, O) {
        h = v(h), O = g(O);
        var _ = this.map[h];
        this.map[h] = _ ? _ + ", " + O : O;
      }, S.prototype.delete = function(h) {
        delete this.map[v(h)];
      }, S.prototype.get = function(h) {
        return h = v(h), this.has(h) ? this.map[h] : null;
      }, S.prototype.has = function(h) {
        return this.map.hasOwnProperty(v(h));
      }, S.prototype.set = function(h, O) {
        this.map[v(h)] = g(O);
      }, S.prototype.forEach = function(h, O) {
        for (var _ in this.map)
          this.map.hasOwnProperty(_) && h.call(O, this.map[_], _, this);
      }, S.prototype.keys = function() {
        var h = [];
        return this.forEach(function(O, _) {
          h.push(_);
        }), m(h);
      }, S.prototype.values = function() {
        var h = [];
        return this.forEach(function(O) {
          h.push(O);
        }), m(h);
      }, S.prototype.entries = function() {
        var h = [];
        return this.forEach(function(O, _) {
          h.push([_, O]);
        }), m(h);
      }, u.iterable && (S.prototype[Symbol.iterator] = S.prototype.entries);
      function E(h) {
        if (h.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        h.bodyUsed = !0;
      }
      function k(h) {
        return new Promise(function(O, _) {
          h.onload = function() {
            O(h.result);
          }, h.onerror = function() {
            _(h.error);
          };
        });
      }
      function M(h) {
        var O = new FileReader(), _ = k(O);
        return O.readAsArrayBuffer(h), _;
      }
      function I(h) {
        var O = new FileReader(), _ = k(O);
        return O.readAsText(h), _;
      }
      function U(h) {
        for (var O = new Uint8Array(h), _ = new Array(O.length), $ = 0; $ < O.length; $++)
          _[$] = String.fromCharCode(O[$]);
        return _.join("");
      }
      function w(h) {
        if (h.slice)
          return h.slice(0);
        var O = new Uint8Array(h.byteLength);
        return O.set(new Uint8Array(h)), O.buffer;
      }
      function j() {
        return this.bodyUsed = !1, this._initBody = function(h) {
          this._bodyInit = h, h ? typeof h == "string" ? this._bodyText = h : u.blob && Blob.prototype.isPrototypeOf(h) ? this._bodyBlob = h : u.formData && FormData.prototype.isPrototypeOf(h) ? this._bodyFormData = h : u.searchParams && URLSearchParams.prototype.isPrototypeOf(h) ? this._bodyText = h.toString() : u.arrayBuffer && u.blob && c(h) ? (this._bodyArrayBuffer = w(h.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(h) || d(h)) ? this._bodyArrayBuffer = w(h) : this._bodyText = h = Object.prototype.toString.call(h) : this._bodyText = "", this.headers.get("content-type") || (typeof h == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(h) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, u.blob && (this.blob = function() {
          var h = E(this);
          if (h)
            return h;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? E(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(M);
        }), this.text = function() {
          var h = E(this);
          if (h)
            return h;
          if (this._bodyBlob)
            return I(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(U(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, u.formData && (this.formData = function() {
          return this.text().then(de);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var A = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function G(h) {
        var O = h.toUpperCase();
        return A.indexOf(O) > -1 ? O : h;
      }
      function Z(h, O) {
        O = O || {};
        var _ = O.body;
        if (h instanceof Z) {
          if (h.bodyUsed)
            throw new TypeError("Already read");
          this.url = h.url, this.credentials = h.credentials, O.headers || (this.headers = new S(h.headers)), this.method = h.method, this.mode = h.mode, this.signal = h.signal, !_ && h._bodyInit != null && (_ = h._bodyInit, h.bodyUsed = !0);
        } else
          this.url = String(h);
        if (this.credentials = O.credentials || this.credentials || "same-origin", (O.headers || !this.headers) && (this.headers = new S(O.headers)), this.method = G(O.method || this.method || "GET"), this.mode = O.mode || this.mode || null, this.signal = O.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && _)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(_);
      }
      Z.prototype.clone = function() {
        return new Z(this, { body: this._bodyInit });
      };
      function de(h) {
        var O = new FormData();
        return h.trim().split("&").forEach(function(_) {
          if (_) {
            var $ = _.split("="), F = $.shift().replace(/\+/g, " "), q = $.join("=").replace(/\+/g, " ");
            O.append(decodeURIComponent(F), decodeURIComponent(q));
          }
        }), O;
      }
      function Te(h) {
        var O = new S(), _ = h.replace(/\r?\n[\t ]+/g, " ");
        return _.split(/\r?\n/).forEach(function($) {
          var F = $.split(":"), q = F.shift().trim();
          if (q) {
            var x = F.join(":").trim();
            O.append(q, x);
          }
        }), O;
      }
      j.call(Z.prototype);
      function ce(h, O) {
        O || (O = {}), this.type = "default", this.status = O.status === void 0 ? 200 : O.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in O ? O.statusText : "OK", this.headers = new S(O.headers), this.url = O.url || "", this._initBody(h);
      }
      j.call(ce.prototype), ce.prototype.clone = function() {
        return new ce(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new S(this.headers),
          url: this.url
        });
      }, ce.error = function() {
        var h = new ce(null, { status: 0, statusText: "" });
        return h.type = "error", h;
      };
      var ve = [301, 302, 303, 307, 308];
      ce.redirect = function(h, O) {
        if (ve.indexOf(O) === -1)
          throw new RangeError("Invalid status code");
        return new ce(null, { status: O, headers: { location: h } });
      }, s.DOMException = a.DOMException;
      try {
        new s.DOMException();
      } catch {
        s.DOMException = function(O, _) {
          this.message = O, this.name = _;
          var $ = Error(O);
          this.stack = $.stack;
        }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException;
      }
      function ne(h, O) {
        return new Promise(function(_, $) {
          var F = new Z(h, O);
          if (F.signal && F.signal.aborted)
            return $(new s.DOMException("Aborted", "AbortError"));
          var q = new XMLHttpRequest();
          function x() {
            q.abort();
          }
          q.onload = function() {
            var me = {
              status: q.status,
              statusText: q.statusText,
              headers: Te(q.getAllResponseHeaders() || "")
            };
            me.url = "responseURL" in q ? q.responseURL : me.headers.get("X-Request-URL");
            var $e = "response" in q ? q.response : q.responseText;
            _(new ce($e, me));
          }, q.onerror = function() {
            $(new TypeError("Network request failed"));
          }, q.ontimeout = function() {
            $(new TypeError("Network request failed"));
          }, q.onabort = function() {
            $(new s.DOMException("Aborted", "AbortError"));
          }, q.open(F.method, F.url, !0), F.credentials === "include" ? q.withCredentials = !0 : F.credentials === "omit" && (q.withCredentials = !1), "responseType" in q && u.blob && (q.responseType = "blob"), F.headers.forEach(function(me, $e) {
            q.setRequestHeader($e, me);
          }), F.signal && (F.signal.addEventListener("abort", x), q.onreadystatechange = function() {
            q.readyState === 4 && F.signal.removeEventListener("abort", x);
          }), q.send(typeof F._bodyInit > "u" ? null : F._bodyInit);
        });
      }
      return ne.polyfill = !0, a.fetch || (a.fetch = ne, a.Headers = S, a.Request = Z, a.Response = ce), s.Headers = S, s.Request = Z, s.Response = ce, s.fetch = ne, Object.defineProperty(s, "__esModule", { value: !0 }), s;
    })({});
  })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
  var i = n;
  t = i.fetch, t.default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t;
})(ho, ho.exports);
var np = ho.exports;
const ip = /* @__PURE__ */ Ji(np);
function ze(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function wr(e) {
  return ze(e) === "object";
}
function ap(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function Ms(e, t) {
  return e.length < 124 ? e : t;
}
const op = "graphql-transport-ws";
var Le;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(Le || (Le = {}));
var pe;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(pe || (pe = {}));
function _l(e) {
  if (!wr(e))
    throw new Error(`Message is expected to be an object, but got ${ze(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${ze(e.type)}`);
  switch (e.type) {
    case pe.ConnectionInit:
    case pe.ConnectionAck:
    case pe.Ping:
    case pe.Pong: {
      if (e.payload != null && !wr(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case pe.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ze(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!wr(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ze(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${ze(e.payload.query)}`);
      if (e.payload.variables != null && !wr(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${ze(e.payload.variables)}`);
      if (e.payload.operationName != null && ze(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${ze(e.payload.operationName)}`);
      if (e.payload.extensions != null && !wr(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${ze(e.payload.extensions)}`);
      break;
    }
    case pe.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ze(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!wr(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ze(e.payload)}`);
      break;
    }
    case pe.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ze(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ap(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case pe.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ze(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function sp(e, t) {
  return _l(typeof e == "string" ? JSON.parse(e, t) : e);
}
function _n(e, t) {
  return _l(e), JSON.stringify(e, t);
}
function up(e) {
  const {
    url: t,
    connectionParams: r,
    lazy: n = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: s = 0,
    disablePong: u,
    connectionAckWaitTimeout: c = 0,
    retryAttempts: y = 5,
    retryWait: d = async function(O) {
      let _ = 1e3;
      for (let $ = 0; $ < O; $++)
        _ *= 2;
      await new Promise(($) => setTimeout($, _ + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: v = si,
    isFatalConnectionProblem: g,
    on: m,
    webSocketImpl: S,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: E = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (O) => {
        const _ = Math.random() * 16 | 0;
        return (O == "x" ? _ : _ & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: k,
    jsonMessageReviver: M
  } = e;
  let I;
  if (S) {
    if (!cp(S))
      throw new Error("Invalid WebSocket implementation provided");
    I = S;
  } else
    typeof WebSocket < "u" ? I = WebSocket : typeof global < "u" ? I = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (I = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!I)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const U = I, w = (() => {
    const h = (() => {
      const _ = {};
      return {
        on($, F) {
          return _[$] = F, () => {
            delete _[$];
          };
        },
        emit($) {
          var F;
          "id" in $ && ((F = _[$.id]) === null || F === void 0 || F.call(_, $));
        }
      };
    })(), O = {
      connecting: m != null && m.connecting ? [m.connecting] : [],
      opened: m != null && m.opened ? [m.opened] : [],
      connected: m != null && m.connected ? [m.connected] : [],
      ping: m != null && m.ping ? [m.ping] : [],
      pong: m != null && m.pong ? [m.pong] : [],
      message: m != null && m.message ? [h.emit, m.message] : [h.emit],
      closed: m != null && m.closed ? [m.closed] : [],
      error: m != null && m.error ? [m.error] : []
    };
    return {
      onMessage: h.on,
      on(_, $) {
        const F = O[_];
        return F.push($), () => {
          F.splice(F.indexOf($), 1);
        };
      },
      emit(_, ...$) {
        for (const F of [...O[_]])
          F(...$);
      }
    };
  })();
  function j(h) {
    const O = [
      // errors are fatal and more critical than close events, throw them first
      w.on("error", (_) => {
        O.forEach(($) => $()), h(_);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      w.on("closed", (_) => {
        O.forEach(($) => $()), h(_);
      })
    ];
  }
  let A, G = 0, Z, de = !1, Te = 0, ce = !1;
  async function ve() {
    clearTimeout(Z);
    const [h, O] = await (A ?? (A = new Promise((F, q) => (async () => {
      if (de) {
        if (await d(Te), !G)
          return A = void 0, q({ code: 1e3, reason: "All Subscriptions Gone" });
        Te++;
      }
      w.emit("connecting");
      const x = new U(typeof t == "function" ? await t() : t, op);
      let me, $e;
      function be() {
        isFinite(s) && s > 0 && (clearTimeout($e), $e = setTimeout(() => {
          x.readyState === U.OPEN && (x.send(_n({ type: pe.Ping })), w.emit("ping", !1, void 0));
        }, s));
      }
      j((D) => {
        A = void 0, clearTimeout(me), clearTimeout($e), q(D), si(D) && D.code === 4499 && (x.close(4499, "Terminated"), x.onerror = null, x.onclose = null);
      }), x.onerror = (D) => w.emit("error", D), x.onclose = (D) => w.emit("closed", D), x.onopen = async () => {
        try {
          w.emit("opened", x);
          const D = typeof r == "function" ? await r() : r;
          if (x.readyState !== U.OPEN)
            return;
          x.send(_n(D ? {
            type: pe.ConnectionInit,
            payload: D
          } : {
            type: pe.ConnectionInit
            // payload is completely absent if not provided
          }, k)), isFinite(c) && c > 0 && (me = setTimeout(() => {
            x.close(Le.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, c)), be();
        } catch (D) {
          w.emit("error", D), x.close(Le.InternalClientError, Ms(D instanceof Error ? D.message : new Error(D).message, "Internal client error"));
        }
      };
      let Ze = !1;
      x.onmessage = ({ data: D }) => {
        try {
          const ae = sp(D, M);
          if (w.emit("message", ae), ae.type === "ping" || ae.type === "pong") {
            w.emit(ae.type, !0, ae.payload), ae.type === "pong" ? be() : u || (x.send(_n(ae.payload ? {
              type: pe.Pong,
              payload: ae.payload
            } : {
              type: pe.Pong
              // payload is completely absent if not provided
            })), w.emit("pong", !1, ae.payload));
            return;
          }
          if (Ze)
            return;
          if (ae.type !== pe.ConnectionAck)
            throw new Error(`First message cannot be of type ${ae.type}`);
          clearTimeout(me), Ze = !0, w.emit("connected", x, ae.payload), de = !1, Te = 0, F([
            x,
            new Promise((zt, Ae) => j(Ae))
          ]);
        } catch (ae) {
          x.onmessage = null, w.emit("error", ae), x.close(Le.BadResponse, Ms(ae instanceof Error ? ae.message : new Error(ae).message, "Bad response"));
        }
      };
    })())));
    h.readyState === U.CLOSING && await O;
    let _ = () => {
    };
    const $ = new Promise((F) => _ = F);
    return [
      h,
      _,
      Promise.race([
        // wait for
        $.then(() => {
          if (!G) {
            const F = () => h.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? Z = setTimeout(() => {
              h.readyState === U.OPEN && F();
            }, a) : F();
          }
        }),
        // or
        O
      ])
    ];
  }
  function ne(h) {
    if (si(h) && (lp(h.code) || [
      Le.InternalServerError,
      Le.InternalClientError,
      Le.BadRequest,
      Le.BadResponse,
      Le.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      Le.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      Le.SubscriberAlreadyExists,
      Le.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(h.code)))
      throw h;
    if (ce)
      return !1;
    if (si(h) && h.code === 1e3)
      return G > 0;
    if (!y || Te >= y || !v(h) || g != null && g(h))
      throw h;
    return de = !0;
  }
  return n || (async () => {
    for (G++; ; )
      try {
        const [, , h] = await ve();
        await h;
      } catch (h) {
        try {
          if (!ne(h))
            return;
        } catch (O) {
          return i == null ? void 0 : i(O);
        }
      }
  })(), {
    on: w.on,
    subscribe(h, O) {
      const _ = E(h);
      let $ = !1, F = !1, q = () => {
        G--, $ = !0;
      };
      return (async () => {
        for (G++; ; )
          try {
            const [x, me, $e] = await ve();
            if ($)
              return me();
            const be = w.onMessage(_, (Ze) => {
              switch (Ze.type) {
                case pe.Next: {
                  O.next(Ze.payload);
                  return;
                }
                case pe.Error: {
                  F = !0, $ = !0, O.error(Ze.payload), q();
                  return;
                }
                case pe.Complete: {
                  $ = !0, q();
                  return;
                }
              }
            });
            x.send(_n({
              id: _,
              type: pe.Subscribe,
              payload: h
            }, k)), q = () => {
              !$ && x.readyState === U.OPEN && x.send(_n({
                id: _,
                type: pe.Complete
              }, k)), G--, $ = !0, me();
            }, await $e.finally(be);
            return;
          } catch (x) {
            if (!ne(x))
              return;
          }
      })().then(() => {
        F || O.complete();
      }).catch((x) => {
        O.error(x);
      }), () => {
        $ || q();
      };
    },
    async dispose() {
      if (ce = !0, A) {
        const [h] = await A;
        h.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      A && w.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function si(e) {
  return wr(e) && "code" in e && "reason" in e;
}
function lp(e) {
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
function cp(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var Hr = null;
typeof WebSocket < "u" ? Hr = WebSocket : typeof MozWebSocket < "u" ? Hr = MozWebSocket : typeof global < "u" ? Hr = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Hr = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Hr = self.WebSocket || self.MozWebSocket);
const fp = Hr;
var pp = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, Zr = "1.4.0", Vs = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function dp(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(Vs);
  if (!n)
    return function() {
      return !1;
    };
  var i = {
    major: +n[1],
    minor: +n[2],
    patch: +n[3],
    prerelease: n[4]
  };
  if (i.prerelease != null)
    return function(c) {
      return c === e;
    };
  function a(u) {
    return r.add(u), !1;
  }
  function s(u) {
    return t.add(u), !0;
  }
  return function(c) {
    if (t.has(c))
      return !0;
    if (r.has(c))
      return !1;
    var y = c.match(Vs);
    if (!y)
      return a(c);
    var d = {
      major: +y[1],
      minor: +y[2],
      patch: +y[3],
      prerelease: y[4]
    };
    return d.prerelease != null || i.major !== d.major ? a(c) : i.major === 0 ? i.minor === d.minor && i.patch <= d.patch ? s(c) : a(c) : i.minor <= d.minor ? s(c) : a(c);
  };
}
var yp = dp(Zr), hp = Zr.split(".")[0], Vn = Symbol.for("opentelemetry.js.api." + hp), Bn = pp;
function Ko(e, t, r, n) {
  var i;
  n === void 0 && (n = !1);
  var a = Bn[Vn] = (i = Bn[Vn]) !== null && i !== void 0 ? i : {
    version: Zr
  };
  if (!n && a[e]) {
    var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(s.stack || s.message), !1;
  }
  if (a.version !== Zr) {
    var s = new Error("@opentelemetry/api: All API registration versions must match");
    return r.error(s.stack || s.message), !1;
  }
  return a[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + Zr + "."), !0;
}
function qn(e) {
  var t, r, n = (t = Bn[Vn]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !yp(n)))
    return (r = Bn[Vn]) === null || r === void 0 ? void 0 : r[e];
}
function Jo(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + Zr + ".");
  var r = Bn[Vn];
  r && delete r[e];
}
var gp = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      a.push(i.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return a;
}, vp = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, mp = (
  /** @class */
  function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return En("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return En("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return En("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return En("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return En("verbose", this._namespace, t);
    }, e;
  }()
);
function En(e, t, r) {
  var n = qn("diag");
  if (n)
    return r.unshift(t), n[e].apply(n, vp([], gp(r), !1));
}
var rt;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(rt || (rt = {}));
function bp(e, t) {
  e < rt.NONE ? e = rt.NONE : e > rt.ALL && (e = rt.ALL), t = t || {};
  function r(n, i) {
    var a = t[n];
    return typeof a == "function" && e >= i ? a.bind(t) : function() {
    };
  }
  return {
    error: r("error", rt.ERROR),
    warn: r("warn", rt.WARN),
    info: r("info", rt.INFO),
    debug: r("debug", rt.DEBUG),
    verbose: r("verbose", rt.VERBOSE)
  };
}
var Sp = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      a.push(i.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return a;
}, wp = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, Op = "diag", xi = (
  /** @class */
  function() {
    function e() {
      function t(i) {
        return function() {
          for (var a = [], s = 0; s < arguments.length; s++)
            a[s] = arguments[s];
          var u = qn("diag");
          if (u)
            return u[i].apply(u, wp([], Sp(a), !1));
        };
      }
      var r = this, n = function(i, a) {
        var s, u, c;
        if (a === void 0 && (a = { logLevel: rt.INFO }), i === r) {
          var y = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((s = y.stack) !== null && s !== void 0 ? s : y.message), !1;
        }
        typeof a == "number" && (a = {
          logLevel: a
        });
        var d = qn("diag"), v = bp((u = a.logLevel) !== null && u !== void 0 ? u : rt.INFO, i);
        if (d && !a.suppressOverrideMessage) {
          var g = (c = new Error().stack) !== null && c !== void 0 ? c : "<failed to generate stacktrace>";
          d.warn("Current logger will be overwritten from " + g), v.warn("Current logger will overwrite one already registered from " + g);
        }
        return Ko("diag", v, r, !0);
      };
      r.setLogger = n, r.disable = function() {
        Jo(Op, r);
      }, r.createComponentLogger = function(i) {
        return new mp(i);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  }()
);
function Tp(e) {
  return Symbol.for(e);
}
var Ap = (
  /** @class */
  function() {
    function e(t) {
      var r = this;
      r._currentContext = t ? new Map(t) : /* @__PURE__ */ new Map(), r.getValue = function(n) {
        return r._currentContext.get(n);
      }, r.setValue = function(n, i) {
        var a = new e(r._currentContext);
        return a._currentContext.set(n, i), a;
      }, r.deleteValue = function(n) {
        var i = new e(r._currentContext);
        return i._currentContext.delete(n), i;
      };
    }
    return e;
  }()
), Pp = new Ap(), Ip = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      a.push(i.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return a;
}, _p = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, Ep = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.active = function() {
      return Pp;
    }, e.prototype.with = function(t, r, n) {
      for (var i = [], a = 3; a < arguments.length; a++)
        i[a - 3] = arguments[a];
      return r.call.apply(r, _p([n], Ip(i), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  }()
), xp = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      a.push(i.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return a;
}, jp = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, Ea = "context", Np = new Ep(), Qo = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return Ko(Ea, t, xi.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, n) {
      for (var i, a = [], s = 3; s < arguments.length; s++)
        a[s - 3] = arguments[s];
      return (i = this._getContextManager()).with.apply(i, jp([t, r, n], xp(a), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return qn(Ea) || Np;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), Jo(Ea, xi.instance());
    }, e;
  }()
), go;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(go || (go = {}));
var El = "0000000000000000", xl = "00000000000000000000000000000000", $p = {
  traceId: xl,
  spanId: El,
  traceFlags: go.NONE
}, $n = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = $p), this._spanContext = t;
    }
    return e.prototype.spanContext = function() {
      return this._spanContext;
    }, e.prototype.setAttribute = function(t, r) {
      return this;
    }, e.prototype.setAttributes = function(t) {
      return this;
    }, e.prototype.addEvent = function(t, r) {
      return this;
    }, e.prototype.setStatus = function(t) {
      return this;
    }, e.prototype.updateName = function(t) {
      return this;
    }, e.prototype.end = function(t) {
    }, e.prototype.isRecording = function() {
      return !1;
    }, e.prototype.recordException = function(t, r) {
    }, e;
  }()
), Yo = Tp("OpenTelemetry Context Key SPAN");
function Xo(e) {
  return e.getValue(Yo) || void 0;
}
function kp() {
  return Xo(Qo.getInstance().active());
}
function Zo(e, t) {
  return e.setValue(Yo, t);
}
function Cp(e) {
  return e.deleteValue(Yo);
}
function Dp(e, t) {
  return Zo(e, new $n(t));
}
function jl(e) {
  var t;
  return (t = Xo(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var Fp = /^([0-9a-f]{32})$/i, Rp = /^[0-9a-f]{16}$/i;
function Mp(e) {
  return Fp.test(e) && e !== xl;
}
function Vp(e) {
  return Rp.test(e) && e !== El;
}
function Nl(e) {
  return Mp(e.traceId) && Vp(e.spanId);
}
function Bp(e) {
  return new $n(e);
}
var xa = Qo.getInstance(), $l = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, n) {
      n === void 0 && (n = xa.active());
      var i = !!(r != null && r.root);
      if (i)
        return new $n();
      var a = n && jl(n);
      return qp(a) && Nl(a) ? new $n(a) : new $n();
    }, e.prototype.startActiveSpan = function(t, r, n, i) {
      var a, s, u;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? u = r : arguments.length === 3 ? (a = r, u = n) : (a = r, s = n, u = i);
        var c = s ?? xa.active(), y = this.startSpan(t, a, c), d = Zo(c, y);
        return xa.with(d, u, void 0, y);
      }
    }, e;
  }()
);
function qp(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var Up = new $l(), Gp = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this._provider = t, this.name = r, this.version = n, this.options = i;
    }
    return e.prototype.startSpan = function(t, r, n) {
      return this._getTracer().startSpan(t, r, n);
    }, e.prototype.startActiveSpan = function(t, r, n, i) {
      var a = this._getTracer();
      return Reflect.apply(a.startActiveSpan, a, arguments);
    }, e.prototype._getTracer = function() {
      if (this._delegate)
        return this._delegate;
      var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
      return t ? (this._delegate = t, this._delegate) : Up;
    }, e;
  }()
), Lp = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      return new $l();
    }, e;
  }()
), Wp = new Lp(), Bs = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      var i;
      return (i = this.getDelegateTracer(t, r, n)) !== null && i !== void 0 ? i : new Gp(this, t, r, n);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : Wp;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, n) {
      var i;
      return (i = this._delegate) === null || i === void 0 ? void 0 : i.getTracer(t, r, n);
    }, e;
  }()
), vo;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(vo || (vo = {}));
var yi = Qo.getInstance(), ja = "trace", zp = (
  /** @class */
  function() {
    function e() {
      this._proxyTracerProvider = new Bs(), this.wrapSpanContext = Bp, this.isSpanContextValid = Nl, this.deleteSpan = Cp, this.getSpan = Xo, this.getActiveSpan = kp, this.getSpanContext = jl, this.setSpan = Zo, this.setSpanContext = Dp;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = Ko(ja, this._proxyTracerProvider, xi.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return qn(ja) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      Jo(ja, xi.instance()), this._proxyTracerProvider = new Bs();
    }, e;
  }()
), es = zp.getInstance(), ji = { exports: {} };
ji.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", s = "[object Array]", u = "[object Boolean]", c = "[object Date]", y = "[object Error]", d = "[object Function]", v = "[object GeneratorFunction]", g = "[object Map]", m = "[object Number]", S = "[object Object]", E = "[object Promise]", k = "[object RegExp]", M = "[object Set]", I = "[object String]", U = "[object Symbol]", w = "[object WeakMap]", j = "[object ArrayBuffer]", A = "[object DataView]", G = "[object Float32Array]", Z = "[object Float64Array]", de = "[object Int8Array]", Te = "[object Int16Array]", ce = "[object Int32Array]", ve = "[object Uint8Array]", ne = "[object Uint8ClampedArray]", h = "[object Uint16Array]", O = "[object Uint32Array]", _ = /[\\^$.*+?()[\]{}|]/g, $ = /\w*$/, F = /^\[object .+?Constructor\]$/, q = /^(?:0|[1-9]\d*)$/, x = {};
  x[a] = x[s] = x[j] = x[A] = x[u] = x[c] = x[G] = x[Z] = x[de] = x[Te] = x[ce] = x[g] = x[m] = x[S] = x[k] = x[M] = x[I] = x[U] = x[ve] = x[ne] = x[h] = x[O] = !0, x[y] = x[d] = x[w] = !1;
  var me = typeof pt == "object" && pt && pt.Object === Object && pt, $e = typeof self == "object" && self && self.Object === Object && self, be = me || $e || Function("return this")(), Ze = t && !t.nodeType && t, D = Ze && !0 && e && !e.nodeType && e, ae = D && D.exports === Ze;
  function zt(o, l) {
    return o.set(l[0], l[1]), o;
  }
  function Ae(o, l) {
    return o.add(l), o;
  }
  function Ht(o, l) {
    for (var p = -1, b = o ? o.length : 0; ++p < b && l(o[p], p, o) !== !1; )
      ;
    return o;
  }
  function Dt(o, l) {
    for (var p = -1, b = l.length, B = o.length; ++p < b; )
      o[B + p] = l[p];
    return o;
  }
  function lr(o, l, p, b) {
    var B = -1, N = o ? o.length : 0;
    for (b && N && (p = o[++B]); ++B < N; )
      p = l(p, o[B], B, o);
    return p;
  }
  function Kt(o, l) {
    for (var p = -1, b = Array(o); ++p < o; )
      b[p] = l(p);
    return b;
  }
  function jr(o, l) {
    return o == null ? void 0 : o[l];
  }
  function cr(o) {
    var l = !1;
    if (o != null && typeof o.toString != "function")
      try {
        l = !!(o + "");
      } catch {
      }
    return l;
  }
  function Ft(o) {
    var l = -1, p = Array(o.size);
    return o.forEach(function(b, B) {
      p[++l] = [B, b];
    }), p;
  }
  function Tt(o, l) {
    return function(p) {
      return o(l(p));
    };
  }
  function fr(o) {
    var l = -1, p = Array(o.size);
    return o.forEach(function(b) {
      p[++l] = b;
    }), p;
  }
  var Nr = Array.prototype, Jt = Function.prototype, Qt = Object.prototype, pr = be["__core-js_shared__"], Yt = function() {
    var o = /[^.]+$/.exec(pr && pr.keys && pr.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), $r = Jt.toString, ot = Qt.hasOwnProperty, Rt = Qt.toString, kr = RegExp(
    "^" + $r.call(ot).replace(_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), et = ae ? be.Buffer : void 0, Xt = be.Symbol, Zt = be.Uint8Array, Be = Tt(Object.getPrototypeOf, Object), er = Object.create, Cr = Qt.propertyIsEnumerable, gn = Nr.splice, dr = Object.getOwnPropertySymbols, tr = et ? et.isBuffer : void 0, Dr = Tt(Object.keys, Object), rr = vt(be, "DataView"), Mt = vt(be, "Map"), qe = vt(be, "Promise"), Vt = vt(be, "Set"), st = vt(be, "WeakMap"), yt = vt(Object, "create"), Bt = Ue(rr), At = Ue(Mt), yr = Ue(qe), nr = Ue(Vt), hr = Ue(st), ht = Xt ? Xt.prototype : void 0, gr = ht ? ht.valueOf : void 0;
  function gt(o) {
    var l = -1, p = o ? o.length : 0;
    for (this.clear(); ++l < p; ) {
      var b = o[l];
      this.set(b[0], b[1]);
    }
  }
  function vn() {
    this.__data__ = yt ? yt(null) : {};
  }
  function Fr(o) {
    return this.has(o) && delete this.__data__[o];
  }
  function mn(o) {
    var l = this.__data__;
    if (yt) {
      var p = l[o];
      return p === n ? void 0 : p;
    }
    return ot.call(l, o) ? l[o] : void 0;
  }
  function Rr(o) {
    var l = this.__data__;
    return yt ? l[o] !== void 0 : ot.call(l, o);
  }
  function vr(o, l) {
    var p = this.__data__;
    return p[o] = yt && l === void 0 ? n : l, this;
  }
  gt.prototype.clear = vn, gt.prototype.delete = Fr, gt.prototype.get = mn, gt.prototype.has = Rr, gt.prototype.set = vr;
  function Se(o) {
    var l = -1, p = o ? o.length : 0;
    for (this.clear(); ++l < p; ) {
      var b = o[l];
      this.set(b[0], b[1]);
    }
  }
  function f() {
    this.__data__ = [];
  }
  function T(o) {
    var l = this.__data__, p = Br(l, o);
    if (p < 0)
      return !1;
    var b = l.length - 1;
    return p == b ? l.pop() : gn.call(l, p, 1), !0;
  }
  function P(o) {
    var l = this.__data__, p = Br(l, o);
    return p < 0 ? void 0 : l[p][1];
  }
  function C(o) {
    return Br(this.__data__, o) > -1;
  }
  function Y(o, l) {
    var p = this.__data__, b = Br(p, o);
    return b < 0 ? p.push([o, l]) : p[b][1] = l, this;
  }
  Se.prototype.clear = f, Se.prototype.delete = T, Se.prototype.get = P, Se.prototype.has = C, Se.prototype.set = Y;
  function V(o) {
    var l = -1, p = o ? o.length : 0;
    for (this.clear(); ++l < p; ) {
      var b = o[l];
      this.set(b[0], b[1]);
    }
  }
  function H() {
    this.__data__ = {
      hash: new gt(),
      map: new (Mt || Se)(),
      string: new gt()
    };
  }
  function L(o) {
    return br(this, o).delete(o);
  }
  function we(o) {
    return br(this, o).get(o);
  }
  function oe(o) {
    return br(this, o).has(o);
  }
  function le(o, l) {
    return br(this, o).set(o, l), this;
  }
  V.prototype.clear = H, V.prototype.delete = L, V.prototype.get = we, V.prototype.has = oe, V.prototype.set = le;
  function ie(o) {
    this.__data__ = new Se(o);
  }
  function Pt() {
    this.__data__ = new Se();
  }
  function Mr(o) {
    return this.__data__.delete(o);
  }
  function tt(o) {
    return this.__data__.get(o);
  }
  function ia(o) {
    return this.__data__.has(o);
  }
  function aa(o, l) {
    var p = this.__data__;
    if (p instanceof Se) {
      var b = p.__data__;
      if (!Mt || b.length < r - 1)
        return b.push([o, l]), this;
      p = this.__data__ = new V(b);
    }
    return p.set(o, l), this;
  }
  ie.prototype.clear = Pt, ie.prototype.delete = Mr, ie.prototype.get = tt, ie.prototype.has = ia, ie.prototype.set = aa;
  function Vr(o, l) {
    var p = On(o) || Ur(o) ? Kt(o.length, String) : [], b = p.length, B = !!b;
    for (var N in o)
      (l || ot.call(o, N)) && !(B && (N == "length" || ba(N, b))) && p.push(N);
    return p;
  }
  function Jn(o, l, p) {
    var b = o[l];
    (!(ot.call(o, l) && ei(b, p)) || p === void 0 && !(l in o)) && (o[l] = p);
  }
  function Br(o, l) {
    for (var p = o.length; p--; )
      if (ei(o[p][0], l))
        return p;
    return -1;
  }
  function It(o, l) {
    return o && wn(l, An(l), o);
  }
  function bn(o, l, p, b, B, N, X) {
    var ee;
    if (b && (ee = N ? b(o, B, N, X) : b(o)), ee !== void 0)
      return ee;
    if (!Et(o))
      return o;
    var ye = On(o);
    if (ye) {
      if (ee = va(o), !l)
        return ya(o, ee);
    } else {
      var re = Ut(o), ke = re == d || re == v;
      if (ti(o))
        return qr(o, l);
      if (re == S || re == a || ke && !N) {
        if (cr(o))
          return N ? o : {};
        if (ee = _t(ke ? {} : o), !l)
          return ha(o, It(ee, o));
      } else {
        if (!x[re])
          return N ? o : {};
        ee = ma(o, re, bn, l);
      }
    }
    X || (X = new ie());
    var We = X.get(o);
    if (We)
      return We;
    if (X.set(o, ee), !ye)
      var Oe = p ? ga(o) : An(o);
    return Ht(Oe || o, function(Ce, je) {
      Oe && (je = Ce, Ce = o[je]), Jn(ee, je, bn(Ce, l, p, b, je, o, X));
    }), ee;
  }
  function oa(o) {
    return Et(o) ? er(o) : {};
  }
  function sa(o, l, p) {
    var b = l(o);
    return On(o) ? b : Dt(b, p(o));
  }
  function ua(o) {
    return Rt.call(o);
  }
  function la(o) {
    if (!Et(o) || wa(o))
      return !1;
    var l = Tn(o) || cr(o) ? kr : F;
    return l.test(Ue(o));
  }
  function ca(o) {
    if (!Xn(o))
      return Dr(o);
    var l = [];
    for (var p in Object(o))
      ot.call(o, p) && p != "constructor" && l.push(p);
    return l;
  }
  function qr(o, l) {
    if (l)
      return o.slice();
    var p = new o.constructor(o.length);
    return o.copy(p), p;
  }
  function Sn(o) {
    var l = new o.constructor(o.byteLength);
    return new Zt(l).set(new Zt(o)), l;
  }
  function mr(o, l) {
    var p = l ? Sn(o.buffer) : o.buffer;
    return new o.constructor(p, o.byteOffset, o.byteLength);
  }
  function Qn(o, l, p) {
    var b = l ? p(Ft(o), !0) : Ft(o);
    return lr(b, zt, new o.constructor());
  }
  function Yn(o) {
    var l = new o.constructor(o.source, $.exec(o));
    return l.lastIndex = o.lastIndex, l;
  }
  function fa(o, l, p) {
    var b = l ? p(fr(o), !0) : fr(o);
    return lr(b, Ae, new o.constructor());
  }
  function pa(o) {
    return gr ? Object(gr.call(o)) : {};
  }
  function da(o, l) {
    var p = l ? Sn(o.buffer) : o.buffer;
    return new o.constructor(p, o.byteOffset, o.length);
  }
  function ya(o, l) {
    var p = -1, b = o.length;
    for (l || (l = Array(b)); ++p < b; )
      l[p] = o[p];
    return l;
  }
  function wn(o, l, p, b) {
    p || (p = {});
    for (var B = -1, N = l.length; ++B < N; ) {
      var X = l[B], ee = b ? b(p[X], o[X], X, p, o) : void 0;
      Jn(p, X, ee === void 0 ? o[X] : ee);
    }
    return p;
  }
  function ha(o, l) {
    return wn(o, qt(o), l);
  }
  function ga(o) {
    return sa(o, An, qt);
  }
  function br(o, l) {
    var p = o.__data__;
    return Sa(l) ? p[typeof l == "string" ? "string" : "hash"] : p.map;
  }
  function vt(o, l) {
    var p = jr(o, l);
    return la(p) ? p : void 0;
  }
  var qt = dr ? Tt(dr, Object) : Ta, Ut = ua;
  (rr && Ut(new rr(new ArrayBuffer(1))) != A || Mt && Ut(new Mt()) != g || qe && Ut(qe.resolve()) != E || Vt && Ut(new Vt()) != M || st && Ut(new st()) != w) && (Ut = function(o) {
    var l = Rt.call(o), p = l == S ? o.constructor : void 0, b = p ? Ue(p) : void 0;
    if (b)
      switch (b) {
        case Bt:
          return A;
        case At:
          return g;
        case yr:
          return E;
        case nr:
          return M;
        case hr:
          return w;
      }
    return l;
  });
  function va(o) {
    var l = o.length, p = o.constructor(l);
    return l && typeof o[0] == "string" && ot.call(o, "index") && (p.index = o.index, p.input = o.input), p;
  }
  function _t(o) {
    return typeof o.constructor == "function" && !Xn(o) ? oa(Be(o)) : {};
  }
  function ma(o, l, p, b) {
    var B = o.constructor;
    switch (l) {
      case j:
        return Sn(o);
      case u:
      case c:
        return new B(+o);
      case A:
        return mr(o, b);
      case G:
      case Z:
      case de:
      case Te:
      case ce:
      case ve:
      case ne:
      case h:
      case O:
        return da(o, b);
      case g:
        return Qn(o, b, p);
      case m:
      case I:
        return new B(o);
      case k:
        return Yn(o);
      case M:
        return fa(o, b, p);
      case U:
        return pa(o);
    }
  }
  function ba(o, l) {
    return l = l ?? i, !!l && (typeof o == "number" || q.test(o)) && o > -1 && o % 1 == 0 && o < l;
  }
  function Sa(o) {
    var l = typeof o;
    return l == "string" || l == "number" || l == "symbol" || l == "boolean" ? o !== "__proto__" : o === null;
  }
  function wa(o) {
    return !!Yt && Yt in o;
  }
  function Xn(o) {
    var l = o && o.constructor, p = typeof l == "function" && l.prototype || Qt;
    return o === p;
  }
  function Ue(o) {
    if (o != null) {
      try {
        return $r.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function Zn(o) {
    return bn(o, !0, !0);
  }
  function ei(o, l) {
    return o === l || o !== o && l !== l;
  }
  function Ur(o) {
    return Oa(o) && ot.call(o, "callee") && (!Cr.call(o, "callee") || Rt.call(o) == a);
  }
  var On = Array.isArray;
  function Gr(o) {
    return o != null && ri(o.length) && !Tn(o);
  }
  function Oa(o) {
    return ni(o) && Gr(o);
  }
  var ti = tr || Aa;
  function Tn(o) {
    var l = Et(o) ? Rt.call(o) : "";
    return l == d || l == v;
  }
  function ri(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= i;
  }
  function Et(o) {
    var l = typeof o;
    return !!o && (l == "object" || l == "function");
  }
  function ni(o) {
    return !!o && typeof o == "object";
  }
  function An(o) {
    return Gr(o) ? Vr(o) : ca(o);
  }
  function Ta() {
    return [];
  }
  function Aa() {
    return !1;
  }
  e.exports = Zn;
})(ji, ji.exports);
var Hp = ji.exports;
const Lr = /* @__PURE__ */ Ji(Hp);
var Ni = { exports: {} };
Ni.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, a = 2, s = 9007199254740991, u = "[object Arguments]", c = "[object Array]", y = "[object AsyncFunction]", d = "[object Boolean]", v = "[object Date]", g = "[object Error]", m = "[object Function]", S = "[object GeneratorFunction]", E = "[object Map]", k = "[object Number]", M = "[object Null]", I = "[object Object]", U = "[object Promise]", w = "[object Proxy]", j = "[object RegExp]", A = "[object Set]", G = "[object String]", Z = "[object Symbol]", de = "[object Undefined]", Te = "[object WeakMap]", ce = "[object ArrayBuffer]", ve = "[object DataView]", ne = "[object Float32Array]", h = "[object Float64Array]", O = "[object Int8Array]", _ = "[object Int16Array]", $ = "[object Int32Array]", F = "[object Uint8Array]", q = "[object Uint8ClampedArray]", x = "[object Uint16Array]", me = "[object Uint32Array]", $e = /[\\^$.*+?()[\]{}|]/g, be = /^\[object .+?Constructor\]$/, Ze = /^(?:0|[1-9]\d*)$/, D = {};
  D[ne] = D[h] = D[O] = D[_] = D[$] = D[F] = D[q] = D[x] = D[me] = !0, D[u] = D[c] = D[ce] = D[d] = D[ve] = D[v] = D[g] = D[m] = D[E] = D[k] = D[I] = D[j] = D[A] = D[G] = D[Te] = !1;
  var ae = typeof pt == "object" && pt && pt.Object === Object && pt, zt = typeof self == "object" && self && self.Object === Object && self, Ae = ae || zt || Function("return this")(), Ht = t && !t.nodeType && t, Dt = Ht && !0 && e && !e.nodeType && e, lr = Dt && Dt.exports === Ht, Kt = lr && ae.process, jr = function() {
    try {
      return Kt && Kt.binding && Kt.binding("util");
    } catch {
    }
  }(), cr = jr && jr.isTypedArray;
  function Ft(o, l) {
    for (var p = -1, b = o == null ? 0 : o.length, B = 0, N = []; ++p < b; ) {
      var X = o[p];
      l(X, p, o) && (N[B++] = X);
    }
    return N;
  }
  function Tt(o, l) {
    for (var p = -1, b = l.length, B = o.length; ++p < b; )
      o[B + p] = l[p];
    return o;
  }
  function fr(o, l) {
    for (var p = -1, b = o == null ? 0 : o.length; ++p < b; )
      if (l(o[p], p, o))
        return !0;
    return !1;
  }
  function Nr(o, l) {
    for (var p = -1, b = Array(o); ++p < o; )
      b[p] = l(p);
    return b;
  }
  function Jt(o) {
    return function(l) {
      return o(l);
    };
  }
  function Qt(o, l) {
    return o.has(l);
  }
  function pr(o, l) {
    return o == null ? void 0 : o[l];
  }
  function Yt(o) {
    var l = -1, p = Array(o.size);
    return o.forEach(function(b, B) {
      p[++l] = [B, b];
    }), p;
  }
  function $r(o, l) {
    return function(p) {
      return o(l(p));
    };
  }
  function ot(o) {
    var l = -1, p = Array(o.size);
    return o.forEach(function(b) {
      p[++l] = b;
    }), p;
  }
  var Rt = Array.prototype, kr = Function.prototype, et = Object.prototype, Xt = Ae["__core-js_shared__"], Zt = kr.toString, Be = et.hasOwnProperty, er = function() {
    var o = /[^.]+$/.exec(Xt && Xt.keys && Xt.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Cr = et.toString, gn = RegExp(
    "^" + Zt.call(Be).replace($e, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), dr = lr ? Ae.Buffer : void 0, tr = Ae.Symbol, Dr = Ae.Uint8Array, rr = et.propertyIsEnumerable, Mt = Rt.splice, qe = tr ? tr.toStringTag : void 0, Vt = Object.getOwnPropertySymbols, st = dr ? dr.isBuffer : void 0, yt = $r(Object.keys, Object), Bt = qt(Ae, "DataView"), At = qt(Ae, "Map"), yr = qt(Ae, "Promise"), nr = qt(Ae, "Set"), hr = qt(Ae, "WeakMap"), ht = qt(Object, "create"), gr = Ue(Bt), gt = Ue(At), vn = Ue(yr), Fr = Ue(nr), mn = Ue(hr), Rr = tr ? tr.prototype : void 0, vr = Rr ? Rr.valueOf : void 0;
  function Se(o) {
    var l = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++l < p; ) {
      var b = o[l];
      this.set(b[0], b[1]);
    }
  }
  function f() {
    this.__data__ = ht ? ht(null) : {}, this.size = 0;
  }
  function T(o) {
    var l = this.has(o) && delete this.__data__[o];
    return this.size -= l ? 1 : 0, l;
  }
  function P(o) {
    var l = this.__data__;
    if (ht) {
      var p = l[o];
      return p === n ? void 0 : p;
    }
    return Be.call(l, o) ? l[o] : void 0;
  }
  function C(o) {
    var l = this.__data__;
    return ht ? l[o] !== void 0 : Be.call(l, o);
  }
  function Y(o, l) {
    var p = this.__data__;
    return this.size += this.has(o) ? 0 : 1, p[o] = ht && l === void 0 ? n : l, this;
  }
  Se.prototype.clear = f, Se.prototype.delete = T, Se.prototype.get = P, Se.prototype.has = C, Se.prototype.set = Y;
  function V(o) {
    var l = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++l < p; ) {
      var b = o[l];
      this.set(b[0], b[1]);
    }
  }
  function H() {
    this.__data__ = [], this.size = 0;
  }
  function L(o) {
    var l = this.__data__, p = qr(l, o);
    if (p < 0)
      return !1;
    var b = l.length - 1;
    return p == b ? l.pop() : Mt.call(l, p, 1), --this.size, !0;
  }
  function we(o) {
    var l = this.__data__, p = qr(l, o);
    return p < 0 ? void 0 : l[p][1];
  }
  function oe(o) {
    return qr(this.__data__, o) > -1;
  }
  function le(o, l) {
    var p = this.__data__, b = qr(p, o);
    return b < 0 ? (++this.size, p.push([o, l])) : p[b][1] = l, this;
  }
  V.prototype.clear = H, V.prototype.delete = L, V.prototype.get = we, V.prototype.has = oe, V.prototype.set = le;
  function ie(o) {
    var l = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++l < p; ) {
      var b = o[l];
      this.set(b[0], b[1]);
    }
  }
  function Pt() {
    this.size = 0, this.__data__ = {
      hash: new Se(),
      map: new (At || V)(),
      string: new Se()
    };
  }
  function Mr(o) {
    var l = vt(this, o).delete(o);
    return this.size -= l ? 1 : 0, l;
  }
  function tt(o) {
    return vt(this, o).get(o);
  }
  function ia(o) {
    return vt(this, o).has(o);
  }
  function aa(o, l) {
    var p = vt(this, o), b = p.size;
    return p.set(o, l), this.size += p.size == b ? 0 : 1, this;
  }
  ie.prototype.clear = Pt, ie.prototype.delete = Mr, ie.prototype.get = tt, ie.prototype.has = ia, ie.prototype.set = aa;
  function Vr(o) {
    var l = -1, p = o == null ? 0 : o.length;
    for (this.__data__ = new ie(); ++l < p; )
      this.add(o[l]);
  }
  function Jn(o) {
    return this.__data__.set(o, n), this;
  }
  function Br(o) {
    return this.__data__.has(o);
  }
  Vr.prototype.add = Vr.prototype.push = Jn, Vr.prototype.has = Br;
  function It(o) {
    var l = this.__data__ = new V(o);
    this.size = l.size;
  }
  function bn() {
    this.__data__ = new V(), this.size = 0;
  }
  function oa(o) {
    var l = this.__data__, p = l.delete(o);
    return this.size = l.size, p;
  }
  function sa(o) {
    return this.__data__.get(o);
  }
  function ua(o) {
    return this.__data__.has(o);
  }
  function la(o, l) {
    var p = this.__data__;
    if (p instanceof V) {
      var b = p.__data__;
      if (!At || b.length < r - 1)
        return b.push([o, l]), this.size = ++p.size, this;
      p = this.__data__ = new ie(b);
    }
    return p.set(o, l), this.size = p.size, this;
  }
  It.prototype.clear = bn, It.prototype.delete = oa, It.prototype.get = sa, It.prototype.has = ua, It.prototype.set = la;
  function ca(o, l) {
    var p = Ur(o), b = !p && ei(o), B = !p && !b && Gr(o), N = !p && !b && !B && ni(o), X = p || b || B || N, ee = X ? Nr(o.length, String) : [], ye = ee.length;
    for (var re in o)
      (l || Be.call(o, re)) && !(X && // Safari 9 has enumerable `arguments.length` in strict mode.
      (re == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      B && (re == "offset" || re == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      N && (re == "buffer" || re == "byteLength" || re == "byteOffset") || // Skip index properties.
      ma(re, ye))) && ee.push(re);
    return ee;
  }
  function qr(o, l) {
    for (var p = o.length; p--; )
      if (Zn(o[p][0], l))
        return p;
    return -1;
  }
  function Sn(o, l, p) {
    var b = l(o);
    return Ur(o) ? b : Tt(b, p(o));
  }
  function mr(o) {
    return o == null ? o === void 0 ? de : M : qe && qe in Object(o) ? Ut(o) : Xn(o);
  }
  function Qn(o) {
    return Et(o) && mr(o) == u;
  }
  function Yn(o, l, p, b, B) {
    return o === l ? !0 : o == null || l == null || !Et(o) && !Et(l) ? o !== o && l !== l : fa(o, l, p, b, Yn, B);
  }
  function fa(o, l, p, b, B, N) {
    var X = Ur(o), ee = Ur(l), ye = X ? c : _t(o), re = ee ? c : _t(l);
    ye = ye == u ? I : ye, re = re == u ? I : re;
    var ke = ye == I, We = re == I, Oe = ye == re;
    if (Oe && Gr(o)) {
      if (!Gr(l))
        return !1;
      X = !0, ke = !1;
    }
    if (Oe && !ke)
      return N || (N = new It()), X || ni(o) ? wn(o, l, p, b, B, N) : ha(o, l, ye, p, b, B, N);
    if (!(p & i)) {
      var Ce = ke && Be.call(o, "__wrapped__"), je = We && Be.call(l, "__wrapped__");
      if (Ce || je) {
        var ir = Ce ? o.value() : o, Gt = je ? l.value() : l;
        return N || (N = new It()), B(ir, Gt, p, b, N);
      }
    }
    return Oe ? (N || (N = new It()), ga(o, l, p, b, B, N)) : !1;
  }
  function pa(o) {
    if (!ri(o) || Sa(o))
      return !1;
    var l = ti(o) ? gn : be;
    return l.test(Ue(o));
  }
  function da(o) {
    return Et(o) && Tn(o.length) && !!D[mr(o)];
  }
  function ya(o) {
    if (!wa(o))
      return yt(o);
    var l = [];
    for (var p in Object(o))
      Be.call(o, p) && p != "constructor" && l.push(p);
    return l;
  }
  function wn(o, l, p, b, B, N) {
    var X = p & i, ee = o.length, ye = l.length;
    if (ee != ye && !(X && ye > ee))
      return !1;
    var re = N.get(o);
    if (re && N.get(l))
      return re == l;
    var ke = -1, We = !0, Oe = p & a ? new Vr() : void 0;
    for (N.set(o, l), N.set(l, o); ++ke < ee; ) {
      var Ce = o[ke], je = l[ke];
      if (b)
        var ir = X ? b(je, Ce, ke, l, o, N) : b(Ce, je, ke, o, l, N);
      if (ir !== void 0) {
        if (ir)
          continue;
        We = !1;
        break;
      }
      if (Oe) {
        if (!fr(l, function(Gt, Sr) {
          if (!Qt(Oe, Sr) && (Ce === Gt || B(Ce, Gt, p, b, N)))
            return Oe.push(Sr);
        })) {
          We = !1;
          break;
        }
      } else if (!(Ce === je || B(Ce, je, p, b, N))) {
        We = !1;
        break;
      }
    }
    return N.delete(o), N.delete(l), We;
  }
  function ha(o, l, p, b, B, N, X) {
    switch (p) {
      case ve:
        if (o.byteLength != l.byteLength || o.byteOffset != l.byteOffset)
          return !1;
        o = o.buffer, l = l.buffer;
      case ce:
        return !(o.byteLength != l.byteLength || !N(new Dr(o), new Dr(l)));
      case d:
      case v:
      case k:
        return Zn(+o, +l);
      case g:
        return o.name == l.name && o.message == l.message;
      case j:
      case G:
        return o == l + "";
      case E:
        var ee = Yt;
      case A:
        var ye = b & i;
        if (ee || (ee = ot), o.size != l.size && !ye)
          return !1;
        var re = X.get(o);
        if (re)
          return re == l;
        b |= a, X.set(o, l);
        var ke = wn(ee(o), ee(l), b, B, N, X);
        return X.delete(o), ke;
      case Z:
        if (vr)
          return vr.call(o) == vr.call(l);
    }
    return !1;
  }
  function ga(o, l, p, b, B, N) {
    var X = p & i, ee = br(o), ye = ee.length, re = br(l), ke = re.length;
    if (ye != ke && !X)
      return !1;
    for (var We = ye; We--; ) {
      var Oe = ee[We];
      if (!(X ? Oe in l : Be.call(l, Oe)))
        return !1;
    }
    var Ce = N.get(o);
    if (Ce && N.get(l))
      return Ce == l;
    var je = !0;
    N.set(o, l), N.set(l, o);
    for (var ir = X; ++We < ye; ) {
      Oe = ee[We];
      var Gt = o[Oe], Sr = l[Oe];
      if (b)
        var ms = X ? b(Sr, Gt, Oe, l, o, N) : b(Gt, Sr, Oe, o, l, N);
      if (!(ms === void 0 ? Gt === Sr || B(Gt, Sr, p, b, N) : ms)) {
        je = !1;
        break;
      }
      ir || (ir = Oe == "constructor");
    }
    if (je && !ir) {
      var ii = o.constructor, ai = l.constructor;
      ii != ai && "constructor" in o && "constructor" in l && !(typeof ii == "function" && ii instanceof ii && typeof ai == "function" && ai instanceof ai) && (je = !1);
    }
    return N.delete(o), N.delete(l), je;
  }
  function br(o) {
    return Sn(o, An, va);
  }
  function vt(o, l) {
    var p = o.__data__;
    return ba(l) ? p[typeof l == "string" ? "string" : "hash"] : p.map;
  }
  function qt(o, l) {
    var p = pr(o, l);
    return pa(p) ? p : void 0;
  }
  function Ut(o) {
    var l = Be.call(o, qe), p = o[qe];
    try {
      o[qe] = void 0;
      var b = !0;
    } catch {
    }
    var B = Cr.call(o);
    return b && (l ? o[qe] = p : delete o[qe]), B;
  }
  var va = Vt ? function(o) {
    return o == null ? [] : (o = Object(o), Ft(Vt(o), function(l) {
      return rr.call(o, l);
    }));
  } : Ta, _t = mr;
  (Bt && _t(new Bt(new ArrayBuffer(1))) != ve || At && _t(new At()) != E || yr && _t(yr.resolve()) != U || nr && _t(new nr()) != A || hr && _t(new hr()) != Te) && (_t = function(o) {
    var l = mr(o), p = l == I ? o.constructor : void 0, b = p ? Ue(p) : "";
    if (b)
      switch (b) {
        case gr:
          return ve;
        case gt:
          return E;
        case vn:
          return U;
        case Fr:
          return A;
        case mn:
          return Te;
      }
    return l;
  });
  function ma(o, l) {
    return l = l ?? s, !!l && (typeof o == "number" || Ze.test(o)) && o > -1 && o % 1 == 0 && o < l;
  }
  function ba(o) {
    var l = typeof o;
    return l == "string" || l == "number" || l == "symbol" || l == "boolean" ? o !== "__proto__" : o === null;
  }
  function Sa(o) {
    return !!er && er in o;
  }
  function wa(o) {
    var l = o && o.constructor, p = typeof l == "function" && l.prototype || et;
    return o === p;
  }
  function Xn(o) {
    return Cr.call(o);
  }
  function Ue(o) {
    if (o != null) {
      try {
        return Zt.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function Zn(o, l) {
    return o === l || o !== o && l !== l;
  }
  var ei = Qn(function() {
    return arguments;
  }()) ? Qn : function(o) {
    return Et(o) && Be.call(o, "callee") && !rr.call(o, "callee");
  }, Ur = Array.isArray;
  function On(o) {
    return o != null && Tn(o.length) && !ti(o);
  }
  var Gr = st || Aa;
  function Oa(o, l) {
    return Yn(o, l);
  }
  function ti(o) {
    if (!ri(o))
      return !1;
    var l = mr(o);
    return l == m || l == S || l == y || l == w;
  }
  function Tn(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= s;
  }
  function ri(o) {
    var l = typeof o;
    return o != null && (l == "object" || l == "function");
  }
  function Et(o) {
    return o != null && typeof o == "object";
  }
  var ni = cr ? Jt(cr) : da;
  function An(o) {
    return On(o) ? ca(o) : ya(o);
  }
  function Ta() {
    return [];
  }
  function Aa() {
    return !1;
  }
  e.exports = Oa;
})(Ni, Ni.exports);
var Kp = Ni.exports;
const ui = /* @__PURE__ */ Ji(Kp);
var Ge;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(Ge || (Ge = {}));
class Jp {
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
    }), this.__gadget.instantiatedFields = Lr(t), this.__gadget.persistedFields = Lr(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((n) => this.__gadget.fieldKeysTracker[n] = !0));
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
  hasChanges(t = Ge.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const r = t == Ge.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((n) => !ui(r[n], this.__gadget.fields[n]));
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
  changes(t, r = Ge.SinceLoaded) {
    const i = (typeof t == "string" ? r : t || r) == Ge.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = i[t], s = this.__gadget.fields[t], u = !ui(s, a);
      return u ? { changed: u, current: s, previous: a } : { changed: u };
    } else {
      const a = {};
      for (let s = 0; s < this.__gadget.fieldKeys.length; s++) {
        const u = this.__gadget.fieldKeys[s];
        ui(i[u], this.__gadget.fields[u]) || (a[u] = { current: this.__gadget.fields[u], previous: i[u] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = Ge.SinceLoaded) {
    const r = t == Ge.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, n = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      ui(r[a], this.__gadget.fields[a]) || (n[a] = this.__gadget.fields[a]);
    }
    return n;
  }
  changed(t, r = Ge.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = Ge.SinceLoaded) {
    t == Ge.SinceLoaded ? this.__gadget.instantiatedFields = Lr(this.__gadget.fields) : t == Ge.SinceLastPersisted && (this.__gadget.persistedFields = Lr(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = Ge.SinceLoaded) {
    let r;
    t == Ge.SinceLoaded ? r = Object.keys(this.__gadget.instantiatedFields) : r = Object.keys(this.__gadget.persistedFields);
    for (const n of this.__gadget.fieldKeys)
      r.includes(n) || delete this.__gadget.fields[n];
    t == Ge.SinceLoaded ? Object.assign(this.__gadget.fields, Lr(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, Lr(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return So({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const kl = Jp;
class Cl extends Error {
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
class mo extends Error {
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
class Yi extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class qs extends Error {
  constructor(t) {
    let r;
    bo(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class Qp extends Error {
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
class Yp extends Error {
  constructor(t, r, n, i) {
    const a = r.slice(0, 3), s = r.length > 3 ? `, and ${r.length - 3} more error${r.length > 4 ? "s" : ""} need${r.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${n ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: u, message: c }) => `${u} ${c}`).join(", ")}${s}.`), Object.defineProperty(this, "code", {
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
class Dl extends Error {
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
class Fl extends Error {
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
function Us(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const on = (e, t) => {
  const r = t.length;
  let n = 0;
  for (; e != null && n < r; )
    e = e[t[n++]];
  return n && n == r ? e : void 0;
}, bo = (e) => (e == null ? void 0 : e.type) == "close", kt = (e, t) => typeof e != "string" ? "" : Xi(e, t), Gs = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Xi = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (n) => Gs(n)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, i, a, s, u) => (i || (i = ""), "" + i + Gs(a))), r;
}, Xp = (e) => `${Xi(e)}Sort`, Zp = (e) => `${Xi(e)}Filter`, ed = (e, t, r) => new Dl(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), td = (e, t) => {
  if (e.fetching)
    return;
  const r = on(e.data, t);
  if (r === void 0)
    return new Cl(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null)
    return new Fl(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, Lt = (e, t, r = !1) => {
  var n;
  if (e.error)
    throw e.error instanceof Wn && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((u) => "[Network] " + u.message).join(`
`)), e.error;
  const i = on(e.data, t), a = on(i, ["edges"]), s = a ?? i;
  if (i === void 0)
    throw new Cl(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || r && Array.isArray(s) && s.length === 0)
    throw new Fl(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, kn = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof Wn && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const n = on(e.data, t);
  return n ?? null;
}, Rl = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Yp(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Dl(e.message) : new Yi(e.message, e.code);
}, Or = (e, t) => {
  const r = Lt(e, t);
  if (!r.success) {
    const n = r.errors && r.errors[0];
    throw n ? Rl(n) : new Yi("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return r;
}, Ml = (e) => {
  var t, r, n, i;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new ff((i = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, Cn = (e, t) => {
  const r = Ml(e);
  return r && (t = r.apply(t)), new kl(t);
}, ts = (e, t) => {
  const r = Ml(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((n) => new kl(n));
}, Un = (e, t) => {
  const r = t.edges.map((n) => n.node);
  return ts(e, r);
}, So = (e) => {
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
          t[r] = n === void 0 ? null : So(n);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const r of Object.keys(e)) {
          const n = So(e[r]);
          n !== void 0 && (t[r] = n);
        }
        return t;
      }
    }
  }
}, rd = es.getTracer("gadget-api-client"), nd = (e) => typeof e == "string" ? e : e && (e != null && e.message) ? e.message : String(e), Ls = (e, t, r) => async function(...n) {
  const i = rd.startSpan(e, r, yi.active());
  return await yi.with(es.setSpan(yi.active(), i), async () => {
    try {
      const a = await t.call(this, ...n);
      return i.end(), a;
    } catch (a) {
      throw i.setStatus({ code: vo.ERROR, message: nd(a) }), i.end(), a;
    }
  });
}, id = () => es.getSpan(yi.active()), Na = "gstk", Ws = (e) => {
  try {
    const t = window[e];
    return t.setItem(Na, Na), t.removeItem(Na), !0;
  } catch {
    return !1;
  }
};
class Vl extends Error {
}
class ad {
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
    throw Lt(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Vl("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Lt(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Lt(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class od {
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
const sd = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
}, ud = ({ forward: e }) => (t) => Rf(t, _r((r) => {
  if (r.context.url && r.query && !r.context.url.includes("?")) {
    const n = sd(r.query) || "unknown";
    r.context = {
      ...r.context,
      url: r.context.url + `?operation=${n}`
    };
  }
}), e), ld = 2, cd = 4800, fd = 1e4, pd = [Le.ConnectionAcknowledgementTimeout, Le.ConnectionInitialisationTimeout], zs = Symbol.for("gadget/connection"), dd = "token", yd = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var Pe;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(Pe || (Pe = {}));
class hd {
  constructor(t) {
    var r, n, i, a, s;
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
      value: Pe.Anonymous
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
      value: Ls("api-client.transaction", async (u, c) => {
        var y;
        let d, v;
        if (c ? (d = c, v = u) : (d = u, v = {}), this.currentTransaction)
          return await d(this.currentTransaction);
        (y = id()) === null || y === void 0 || y.setAttributes({ applicationId: this.options.applicationId, environmentName: this.environment });
        let g = null, m;
        try {
          g = await this.waitForOpenedConnection({
            isFatalConnectionProblem(k) {
              return console.warn("Transport error encountered during transaction processing", k), !0;
            },
            connectionAckWaitTimeout: cd,
            ...v,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const S = new Rs({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              Fs({
                forwardSubscription(k) {
                  const M = { ...k, query: k.query || "" };
                  return {
                    subscribe: (I) => ({
                      unsubscribe: g.subscribe(M, I)
                    })
                  };
                },
                enableAllOperations: !0
              })
            ]
          });
          S[zs] = this, m = new ad(S, g), this.currentTransaction = m, await m.start();
          const E = await d(m);
          return await m.commit(), E;
        } catch (S) {
          try {
            m != null && m.open && await m.rollback();
          } catch (E) {
            E instanceof Vl || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", E);
          }
          throw bo(S) ? new qs(S) : S;
        } finally {
          await (g == null ? void 0 : g.dispose()), this.currentTransaction = null;
        }
      })
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Ls("api-client.fetch", async (u, c = {}) => {
        u = gd(u, this.options.endpoint), this.isGadgetRequest(u) && (c.headers = { ...this.requestHeaders(), ...c.headers }, this.authenticationMode == Pe.Custom && await this.options.authenticationMode.custom.processFetch(u, c));
        const y = await this._fetchImplementation(u, c);
        if (this.authenticationMode == Pe.BrowserSession) {
          const d = y.headers.get("x-set-authorization"), v = d != null && d.startsWith("Session ") ? d.replace("Session ", "") : null;
          v && this.sessionTokenStore.setItem(this.sessionStorageKey, v);
        }
        return y;
      })
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = ip, this.websocketImplementation = (n = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && n !== void 0 ? n : fp, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network", this.setAuthenticationMode(t.authenticationMode), this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 }), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${dd}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = Pe.InternalAuthToken : t.apiKey ? this.authenticationMode = Pe.APIKey : t.custom && (this.authenticationMode = Pe.Custom), this.options.authenticationMode = t), (r = this.authenticationMode) !== null && r !== void 0 || (this.authenticationMode = Pe.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = Pe.BrowserSession;
    const r = !t || typeof t == "boolean" ? jn.Durable : t.storageType;
    let n;
    r == jn.Durable && Ws("localStorage") ? n = window.localStorage : r == jn.Session && Ws("sessionStorage") ? n = window.sessionStorage : n = new od(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = n, this.resetClients();
  }
  close() {
    this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), wo(this.options.endpoint))
      return !!wo(r);
    const n = new URL(this.options.endpoint).host;
    return r.includes(n);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [ud];
    typeof window < "u" && t.push(Zf), t.push(ep, Fs({
      forwardSubscription: (n) => ({
        subscribe: (i) => {
          const a = { ...n, query: n.query || "" };
          return {
            unsubscribe: this.baseSubscriptionClient.subscribe(a, i)
          };
        }
      })
    }));
    const r = new Rs({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[zs] = this, r;
  }
  newSubscriptionClient(t) {
    let r = this.websocketsEndpoint;
    if (t != null && t.urlParams) {
      const n = new URLSearchParams();
      for (const [i, a] of Object.entries(t.urlParams))
        a && n.set(i, a);
      r += "?" + n.toString();
    }
    return up({
      url: r,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var n, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == Pe.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == Pe.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == Pe.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == Pe.Custom && await ((i = (n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (n, i) => {
          var a, s, u, c, y, d;
          if (this.authenticationMode == Pe.BrowserSession && (i != null && i.sessionToken)) {
            const v = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (v !== null && typeof v == "object" ? v.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (c = (u = (s = this.subscriptionClientOptions) === null || s === void 0 ? void 0 : s.on) === null || u === void 0 ? void 0 : u.connected) === null || c === void 0 || c.call(u, n, i), (d = (y = t == null ? void 0 : t.on) === null || y === void 0 ? void 0 : y.connected) === null || d === void 0 || d.call(y, n, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const r = {};
    if (this.authenticationMode == Pe.InternalAuthToken)
      r.authorization = "Basic " + yd("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == Pe.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == Pe.BrowserSession) {
      const n = this.sessionTokenStore.getItem(this.sessionStorageKey);
      n && (r.authorization = `Session ${n}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), n = [], i = t.connectionAttempts || ld;
    const a = t.connectionGlobalTimeoutMs || fd, s = () => {
      n.forEach((u) => u()), n = [];
    };
    return await new Promise((u, c) => {
      const y = setTimeout(() => {
        this.disposeClient(r), v(new Qp("Timeout opening websocket connection to Gadget API"));
      }, a), d = (S) => {
        if (bo(S) && pd.includes(S.code) && i > 0) {
          i -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), m();
          return;
        }
        clearTimeout(y), c(new qs(S));
      }, v = (S) => {
        clearTimeout(y), c(S);
      }, g = () => {
        clearTimeout(y), u(r);
      }, m = () => {
        s(), n.push(r.on("connected", g)), n.push(r.on("closed", d)), n.push(r.on("error", v));
      };
      m();
    }).finally(s);
  }
  disposeClient(t) {
    const r = t.dispose();
    r && r.catch((n) => console.error(`Error closing SubscriptionClient: ${n.message}`));
  }
}
function gd(e, t) {
  if (typeof e != "string")
    return e;
  if (wo(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function wo(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class sn extends Array {
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
    const i = new sn();
    return i.push(...r), i.modelManager = t, i.pagination = n, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Yi("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new mo("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new mo("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: n, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: n || r
    });
  }
}
const vd = (e, t) => e.split(`
`).map((r) => " ".repeat(t) + r).join(`
`), Oo = (e, t = !1) => {
  const r = Object.entries(e).map(([n, i]) => {
    if (typeof i == "boolean")
      return i ? n : !1;
    if (i instanceof ns) {
      let a = "", s = Object.entries(i.args).filter(([y, d]) => d != null);
      t && (s = s.filter(([y, d]) => d instanceof $i ? d.present() : !0));
      const u = s.map(([y, d]) => {
        var v;
        return `${y}: ${d instanceof $i ? `$${(v = d.name) !== null && v !== void 0 ? v : y}` : JSON.stringify(d)}`;
      });
      u.length > 0 && (a = `(${u.join(", ")})`);
      const c = i.subselection ? `{ 
${Oo(i.subselection, t)} 
}` : "";
      return `${n}${a} ${c}`;
    } else
      return `${n} {
${Oo(i, t)}
}`;
  }).filter((n) => !!n).join(`
`);
  return vd(r, 2);
}, rs = (e, t = !1) => {
  const r = {};
  if (Object.entries(e).forEach(([n, i]) => {
    i instanceof ns ? Object.entries(i.args).forEach(([a, s]) => {
      var u;
      s instanceof $i && (r[(u = s.name) !== null && u !== void 0 ? u : a] = s);
    }) : typeof i == "object" && i !== null && Object.assign(r, rs(i));
  }), t)
    for (const [n, i] of Object.entries(r))
      i.value == null && delete r[n];
  return r;
}, md = (e, t = !1) => {
  const r = rs(e.fields, t);
  return Object.keys(r).length === 0 ? "" : `(${Object.entries(r).map(([i, a]) => `$${i}: ${a.type}${a.required ? "!" : ""}`).join(", ")})`;
};
class ns {
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
class $i {
  constructor(t, r = !1, n, i) {
    Object.defineProperty(this, "type", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "required", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }), Object.defineProperty(this, "value", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: i
    });
  }
  present() {
    return this.value != null;
  }
}
const pn = (e, t) => new ns(e, t), xe = (e) => new $i(e.type, e.required, e.name, e.value), bd = (e, t = !1) => {
  var r;
  const n = md(e, t), i = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(r = e.name) !== null && r !== void 0 ? r : ""}${n}${i} {
${Oo(e.fields, t)}
}`;
}, dn = (e) => {
  const t = rs(e.fields, !0);
  return {
    query: bd(e, !0),
    variables: Object.entries(t ?? {}).reduce((r, [n, i]) => (r[n] = i.value, r), {})
  };
}, zn = `
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
`, yn = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, Sd = (e) => `
    query InternalFind${kt(e)}($id: GadgetID!, $select: [String!]) {
      ${yn(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, Bl = (e, t) => ({
  search: t != null && t.search ? xe({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? xe({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? xe({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? xe({ value: ql(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), wd = (e, t) => {
  const r = kt(e), n = Bl(r, t);
  return dn({
    type: "query",
    name: `InternalFindFirst${r}`,
    fields: {
      internal: {
        [`list${r}`]: pn({
          ...n,
          first: xe({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, Od = (e, t) => {
  const r = kt(e), n = Bl(r, t);
  return dn({
    type: "query",
    name: `InternalFindMany${r}`,
    fields: {
      internal: {
        [`list${r}`]: pn({
          ...n,
          after: xe({ value: t == null ? void 0 : t.after, type: "String" }),
          before: xe({ value: t == null ? void 0 : t.before, type: "String" }),
          first: xe({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: xe({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, Td = (e) => {
  const t = kt(e);
  return `
    ${zn}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${yn(e)}
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
}, Ad = (e, t) => {
  const r = kt(e), n = kt(t);
  return `
    ${zn}

    mutation InternalBulkCreate${n}($records: [Internal${r}Input]!) {
      ${yn(e)}
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
}, Pd = (e) => {
  const t = kt(e);
  return `
    ${zn}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${yn(e)}
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
}, Id = (e) => {
  const t = kt(e);
  return `
    ${zn}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${yn(e)}
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
}, _d = (e) => {
  const t = kt(e);
  return `
    ${zn}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${yn(e)}
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
class mt {
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
    }), this.capitalizedApiIdentifier = Xi(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let n = t;
    if (!this.validateRecord(t))
      throw new Yi(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = await this.connection.currentClient.query(Sd(this.apiIdentifier), { id: t, select: ql(r == null ? void 0 : r.select) }).toPromise(), s = (n ? Lt : kn)(i, ["internal", this.apiIdentifier]);
    return Cn(i, s);
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
    const r = Od(this.apiIdentifier, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise(), i = kn(n, ["internal", `list${this.capitalizedApiIdentifier}`]), a = Un(n, i);
    return sn.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const n = wd(this.apiIdentifier, t), i = await this.connection.currentClient.query(n.query, n.variables).toPromise();
    let a;
    r === !1 ? a = kn(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = Lt(i, ["internal", `list${this.capitalizedApiIdentifier}`], r);
    const s = Un(i, a);
    return sn.boot(this, s, { options: t, pageInfo: a.pageInfo })[0];
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
    return await this.transaction(async (r) => {
      const n = await r.client.mutation(Td(this.apiIdentifier), {
        record: this.getRecordFromData(t, "create")
      }).toPromise(), i = Or(n, ["internal", `create${this.capitalizedApiIdentifier}`]);
      return Cn(n, i[this.apiIdentifier]);
    });
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
    return await this.transaction(async (r) => {
      var n;
      if (!(!((n = this.options) === null || n === void 0) && n.pluralApiIdentifier))
        throw new mo("Cannot perform bulkCreate without a pluralApiIdentifier");
      const i = kt(this.options.pluralApiIdentifier), a = await r.client.mutation(Ad(this.apiIdentifier, this.options.pluralApiIdentifier), {
        records: t
      }).toPromise(), s = Or(a, ["internal", `bulkCreate${i}`]);
      return ts(a, s[this.options.pluralApiIdentifier]);
    });
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
    return Us(t, "Can't update a record without an ID passed"), await this.transaction(async (n) => {
      const i = await n.client.mutation(Pd(this.apiIdentifier), {
        id: t,
        record: this.getRecordFromData(r, "update")
      }).toPromise(), a = Or(i, ["internal", `update${this.capitalizedApiIdentifier}`]);
      return Cn(i, a[this.apiIdentifier]);
    });
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
    return Us(t, "Can't delete a record without an ID"), await this.transaction(async (r) => {
      const n = await r.client.mutation(Id(this.apiIdentifier), { id: t }).toPromise();
      Or(n, ["internal", `delete${this.capitalizedApiIdentifier}`]);
    });
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
    return await this.transaction(async (r) => {
      const n = await r.client.mutation(_d(this.apiIdentifier), t).toPromise();
      Or(n, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
    });
  }
  /** @private */
  async transaction(t) {
    return await this.connection.transaction(t);
  }
}
function ql(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, n] of Object.entries(e))
    n && t.push(r);
  return t;
}
const is = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), as = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, Ed = (e, t, r, n, i) => {
  const a = {};
  return typeof t < "u" && (a.id = xe({ type: "GadgetID", required: !0, value: t })), dn({
    type: "query",
    name: e,
    fields: {
      [e]: pn(a, as((i == null ? void 0 : i.select) || r, !0)),
      ...is(n)
    }
  });
}, xd = (e, t, r, n, i, a) => os(e, n, i, {
  select: a == null ? void 0 : a.select,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}), os = (e, t, r, n) => dn({
  type: "query",
  name: e,
  fields: {
    [e]: pn({
      after: xe({ value: n == null ? void 0 : n.after, type: "String" }),
      first: xe({ value: n == null ? void 0 : n.first, type: "Int" }),
      before: xe({ value: n == null ? void 0 : n.before, type: "String" }),
      last: xe({ value: n == null ? void 0 : n.last, type: "Int" }),
      sort: n != null && n.sort ? xe({ value: n.sort, type: `[${Xp(r)}!]` }) : void 0,
      filter: n != null && n.filter ? xe({ value: n.filter, type: `[${Zp(r)}!]` }) : void 0,
      search: n != null && n.search ? xe({ value: n.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: as((n == null ? void 0 : n.select) || t, !0)
      }
    }),
    ...is(r)
  }
}), Ul = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Gl = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, xe(r)])), jd = (e, t, r, n, i, a, s) => {
  const u = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: pn(Gl(i), {
      success: !0,
      errors: Ul,
      [n]: u ? as(u, !0) : !1
    })
  };
  s && (c = {
    [s]: c
  });
  const y = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...is(r)
    }
  };
  return dn(y);
}, Nd = (e, t, r) => {
  let n = {
    [e]: pn(Gl(t), {
      success: !0,
      errors: Ul,
      result: !0
    })
  };
  return r && (n = {
    [r]: n
  }), dn({
    type: "mutation",
    name: e,
    fields: n
  });
}, fe = async (e, t, r, n, i, a, s = !0) => {
  const u = Ed(t, r, n, i, a), c = await e.connection.currentClient.query(u.query, u.variables).toPromise(), d = (s ? Lt : kn)(c, [t]);
  return Cn(c, d);
}, Zi = async (e, t, r, n, i, a, s) => {
  const u = xd(t, r, n, i, a, s), c = await e.connection.currentClient.query(u.query, u.variables).toPromise(), y = Lt(c, [t]), d = Un(c, y);
  if (d.length > 1)
    throw ed(a, r, n);
  return d[0];
}, te = async (e, t, r, n, i, a) => {
  const s = os(t, r, n, i), u = await e.connection.currentClient.query(s.query, s.variables).toPromise();
  let c;
  a === !1 ? c = kn(u, [t]) : c = Lt(u, [t], a);
  const y = Un(u, c);
  return sn.boot(e, y, { options: i, pageInfo: c.pageInfo });
}, R = async (e, t, r, n, i, a, s, u, c) => {
  const y = jd(t, r, n, i, s, u, c), d = await e.connection.currentClient.mutation(y.query, y.variables).toPromise(), v = c ? [c, t] : [t], g = a ? on(d.data, v) : Or(d, v);
  if (r != null)
    return a ? ts(d, g[i]) : Cn(d, g[i]);
}, $d = async (e, t, r, n) => {
  const i = Nd(t, r, n), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return Or(a, n ? [n, t] : [t]).result;
}, Ie = {
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
async function kd(e, t) {
  return await R(
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
async function Cd(e, t, r) {
  let n;
  const i = [], a = "user";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "updateUser",
    Ie,
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
async function Dd(e, t) {
  let r;
  const n = [], i = "user";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, s] of Object.entries(e))
      n.includes(a) ? r[a] = s : r[i][a] = s;
  }
  return await R(
    this,
    "createUser",
    Ie,
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
async function Fd(e, t) {
  let r;
  const n = [], i = "user";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, s] of Object.entries(e))
      n.includes(a) ? r[a] = s : r[i][a] = s;
  }
  return await R(
    this,
    "signUpUser",
    Ie,
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
class Rd {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await fe(
        this,
        "user",
        r,
        Ie,
        "user",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: Ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await fe(
          this,
          "user",
          r,
          Ie,
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
        defaultSelection: Ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await te(
        this,
        "users",
        Ie,
        "user",
        r
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await te(
        this,
        "users",
        Ie,
        "user",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await te(
          this,
          "users",
          Ie,
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
        defaultSelection: Ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findByEmail = Object.assign(
      async (r, n) => await Zi(
        this,
        "users",
        "email",
        r,
        Ie,
        "user",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      kd,
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
      async (r, n) => await R(
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
      Cd,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Ie,
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
      Dd,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Ie,
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
      Fd,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Ie,
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
const He = {
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
async function Md(e) {
  return await R(
    this,
    "logOut",
    He,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function Vd(e, t) {
  const r = e;
  return await R(
    this,
    "logInViaEmail",
    He,
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
class Bd {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await fe(
        this,
        "session",
        r,
        He,
        "session",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: He,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await fe(
          this,
          "session",
          r,
          He,
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
        defaultSelection: He,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await te(
        this,
        "sessions",
        He,
        "session",
        r
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: He,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await te(
        this,
        "sessions",
        He,
        "session",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: He,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await te(
          this,
          "sessions",
          He,
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
        defaultSelection: He,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      Md,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: He,
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
      Vd,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: He,
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
const Ke = {
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
async function qd(e, t) {
  return await R(
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
async function Ud(e, t) {
  let r;
  const n = [], i = "shopifyProduct";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, s] of Object.entries(e))
      n.includes(a) ? r[a] = s : r[i][a] = s;
  }
  return await R(
    this,
    "createShopifyProduct",
    Ke,
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
async function Gd(e, t, r) {
  let n;
  const i = [], a = "shopifyProduct";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "updateShopifyProduct",
    Ke,
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
class Ld {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await fe(
        this,
        "shopifyProduct",
        r,
        Ke,
        "shopifyProduct",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await fe(
          this,
          "shopifyProduct",
          r,
          Ke,
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
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await te(
        this,
        "shopifyProducts",
        Ke,
        "shopifyProduct",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await te(
        this,
        "shopifyProducts",
        Ke,
        "shopifyProduct",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await te(
          this,
          "shopifyProducts",
          Ke,
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
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      qd,
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
      async (r, n) => await R(
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
      Ud,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: Ke,
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
      Gd,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: Ke,
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
const Je = {
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
async function Wd(e, t) {
  return await R(
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
async function zd(e, t) {
  let r;
  const n = [], i = "shopifyProductImage";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, s] of Object.entries(e))
      n.includes(a) ? r[a] = s : r[i][a] = s;
  }
  return await R(
    this,
    "createShopifyProductImage",
    Je,
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
async function Hd(e, t, r) {
  let n;
  const i = [], a = "shopifyProductImage";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "updateShopifyProductImage",
    Je,
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
class Kd {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await fe(
        this,
        "shopifyProductImage",
        r,
        Je,
        "shopifyProductImage",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await fe(
          this,
          "shopifyProductImage",
          r,
          Je,
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
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await te(
        this,
        "shopifyProductImages",
        Je,
        "shopifyProductImage",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await te(
        this,
        "shopifyProductImages",
        Je,
        "shopifyProductImage",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await te(
          this,
          "shopifyProductImages",
          Je,
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
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Wd,
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
      async (r, n) => await R(
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
      zd,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: Je,
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
      Hd,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
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
const Qe = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  name: !0,
  position: !0,
  values: !0
};
async function Jd(e, t) {
  return await R(
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
async function Qd(e, t) {
  let r;
  const n = [], i = "shopifyProductOption";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, s] of Object.entries(e))
      n.includes(a) ? r[a] = s : r[i][a] = s;
  }
  return await R(
    this,
    "createShopifyProductOption",
    Qe,
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
async function Yd(e, t, r) {
  let n;
  const i = [], a = "shopifyProductOption";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "updateShopifyProductOption",
    Qe,
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
class Xd {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await fe(
        this,
        "shopifyProductOption",
        r,
        Qe,
        "shopifyProductOption",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await fe(
          this,
          "shopifyProductOption",
          r,
          Qe,
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
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await te(
        this,
        "shopifyProductOptions",
        Qe,
        "shopifyProductOption",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await te(
        this,
        "shopifyProductOptions",
        Qe,
        "shopifyProductOption",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await te(
          this,
          "shopifyProductOptions",
          Qe,
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
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Jd,
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
      async (r, n) => await R(
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
      Qd,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: Qe,
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
      Yd,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: Qe,
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
const Ye = {
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
async function Zd(e, t) {
  return await R(
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
async function ey(e, t, r) {
  let n;
  const i = [], a = "shopifyProductVariant";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "updateShopifyProductVariant",
    Ye,
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
async function ty(e, t) {
  let r;
  const n = [], i = "shopifyProductVariant";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, s] of Object.entries(e))
      n.includes(a) ? r[a] = s : r[i][a] = s;
  }
  return await R(
    this,
    "createShopifyProductVariant",
    Ye,
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
class ry {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await fe(
        this,
        "shopifyProductVariant",
        r,
        Ye,
        "shopifyProductVariant",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await fe(
          this,
          "shopifyProductVariant",
          r,
          Ye,
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
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await te(
        this,
        "shopifyProductVariants",
        Ye,
        "shopifyProductVariant",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await te(
        this,
        "shopifyProductVariants",
        Ye,
        "shopifyProductVariant",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await te(
          this,
          "shopifyProductVariants",
          Ye,
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
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Zd,
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
      async (r, n) => await R(
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
      ey,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: Ye,
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
      ty,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: Ye,
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
const Ee = {
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
async function ny(e, t) {
  return await R(
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
async function iy(e, t) {
  let r;
  const n = [], i = "shopifyShop";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, s] of Object.entries(e))
      n.includes(a) ? r[a] = s : r[i][a] = s;
  }
  return await R(
    this,
    "createShopifyShop",
    Ee,
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
async function ay(e, t, r) {
  let n;
  const i = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "updateShopifyShop",
    Ee,
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
async function oy(e, t, r) {
  let n;
  const i = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "reinstallShopifyShop",
    Ee,
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
async function sy(e, t, r) {
  let n;
  const i = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "uninstallShopifyShop",
    Ee,
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
class uy {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await fe(
        this,
        "shopifyShop",
        r,
        Ee,
        "shopifyShop",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: Ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await fe(
          this,
          "shopifyShop",
          r,
          Ee,
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
        defaultSelection: Ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await te(
        this,
        "shopifyShops",
        Ee,
        "shopifyShop",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: Ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await te(
        this,
        "shopifyShops",
        Ee,
        "shopifyShop",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: Ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await te(
          this,
          "shopifyShops",
          Ee,
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
        defaultSelection: Ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      ny,
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
      async (r, n) => await R(
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
      iy,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: Ee,
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
      ay,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: Ee,
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
      oy,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: Ee,
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
      sy,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: Ee,
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
const Xe = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
};
async function ly(e, t) {
  return await R(
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
async function cy(e, t, r) {
  let n;
  const i = [], a = "productPairing";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "updateProductPairing",
    Xe,
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
async function fy(e, t) {
  let r;
  const n = [], i = "productPairing";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, s] of Object.entries(e))
      n.includes(a) ? r[a] = s : r[i][a] = s;
  }
  return await R(
    this,
    "createProductPairing",
    Xe,
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
class py {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await fe(
        this,
        "productPairing",
        r,
        Xe,
        "productPairing",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await fe(
          this,
          "productPairing",
          r,
          Xe,
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
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await te(
        this,
        "productPairings",
        Xe,
        "productPairing",
        r
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await te(
        this,
        "productPairings",
        Xe,
        "productPairing",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await te(
          this,
          "productPairings",
          Xe,
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
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      ly,
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
      async (r, n) => await R(
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
      cy,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
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
      fy,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: Xe,
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
const _e = {
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
async function dy(e, t) {
  let r;
  const n = [], i = "shopifySync";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, s] of Object.entries(e))
      n.includes(a) ? r[a] = s : r[i][a] = s;
  }
  return await R(
    this,
    "runShopifySync",
    _e,
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
async function yy(e, t, r) {
  let n;
  const i = [], a = "shopifySync";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "errorShopifySync",
    _e,
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
async function hy(e, t, r) {
  let n;
  const i = [], a = "shopifySync";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "completeShopifySync",
    _e,
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
class gy {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await fe(
        this,
        "shopifySync",
        r,
        _e,
        "shopifySync",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: _e,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await fe(
          this,
          "shopifySync",
          r,
          _e,
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
        defaultSelection: _e,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await te(
        this,
        "shopifySyncs",
        _e,
        "shopifySync",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: _e,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await te(
        this,
        "shopifySyncs",
        _e,
        "shopifySync",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: _e,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await te(
          this,
          "shopifySyncs",
          _e,
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
        defaultSelection: _e,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, n) => await Zi(
        this,
        "shopifySyncs",
        "id",
        r,
        _e,
        "shopifySync",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: _e,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.run = Object.assign(
      dy,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: _e,
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
      yy,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: _e,
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
      hy,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: _e,
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
const Fe = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  ambiguous: !0,
  booleanField: !0
};
async function vy(e, t, r) {
  let n;
  const i = [], a = "ambiguous";
  if (Object.keys(t).some((s) => !i.includes(s) && s !== a))
    throw Error(`Invalid arguments found in variables. Did you mean to use update({ ${a}: { ... } })?`);
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "updateAmbiguous",
    Fe,
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
async function my(e, t) {
  return await R(
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
async function by(e, t) {
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
    for (const [a, s] of Object.entries(e))
      n.includes(a) ? r[a] = s : r[i][a] = s;
  }
  return await R(
    this,
    "createAmbiguous",
    Fe,
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
class Sy {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await fe(
        this,
        "ambiguous",
        r,
        Fe,
        "ambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await fe(
          this,
          "ambiguous",
          r,
          Fe,
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
        defaultSelection: Fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await te(
        this,
        "ambiguouss",
        Fe,
        "ambiguous",
        r
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await te(
        this,
        "ambiguouss",
        Fe,
        "ambiguous",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await te(
          this,
          "ambiguouss",
          Fe,
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
        defaultSelection: Fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, n) => await Zi(
        this,
        "ambiguouss",
        "id",
        r,
        Fe,
        "ambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      vy,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: Fe,
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
      my,
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
      async (r, n) => await R(
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
      by,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: Fe,
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
const Re = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  stringField: !0,
  numberField: !0
};
async function wy(e, t, r) {
  let n;
  const i = [], a = "unambiguous";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [s, u] of Object.entries(t))
      i.includes(s) ? n[s] = u : n[a][s] = u;
  }
  return await R(
    this,
    "updateUnambiguous",
    Re,
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
async function Oy(e, t) {
  let r;
  const n = [], i = "unambiguous";
  if (i in e && typeof e[i] == "object" && e[i] !== null)
    r = e;
  else {
    r = {
      [i]: {}
    };
    for (const [a, s] of Object.entries(e))
      n.includes(a) ? r[a] = s : r[i][a] = s;
  }
  return await R(
    this,
    "createUnambiguous",
    Re,
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
async function Ty(e, t) {
  return await R(
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
class Ay {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await fe(
        this,
        "unambiguous",
        r,
        Re,
        "unambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await fe(
          this,
          "unambiguous",
          r,
          Re,
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
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await te(
        this,
        "unambiguouss",
        Re,
        "unambiguous",
        r
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await te(
        this,
        "unambiguouss",
        Re,
        "unambiguous",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await te(
          this,
          "unambiguouss",
          Re,
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
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, n) => await Zi(
        this,
        "unambiguouss",
        "id",
        r,
        Re,
        "unambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      wy,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
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
      Oy,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: Re,
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
      Ty,
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
      async (r, n) => await R(
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
const Yr = {
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
async function Py(e) {
  return await R(
    this,
    "logOut",
    Yr,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function Iy(e, t) {
  const r = e;
  return await R(
    this,
    "logInViaEmail",
    Yr,
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
class _y {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (r) => await fe(
        this,
        "currentSession",
        void 0,
        Yr,
        "session",
        r
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: Yr,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      Py,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Yr,
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
      Iy,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Yr,
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
const $a = "production", ka = "development", Ey = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
class xy {
  constructor(t) {
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async () => await $d(
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
    const r = (t == null ? void 0 : t.environment) ?? Ey() ?? ka;
    let n = r.toLocaleLowerCase();
    n != ka && n != $a && (console.warn("Invalid environment", r, "defaulting to development"), n = ka), this.connection = new hd({
      endpoint: new URL("api/graphql", n == $a ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      environment: n == $a ? "Production" : "Development"
    }), this.user = new Rd(this.connection), this.session = new Bd(this.connection), this.shopifyProduct = new Ld(this.connection), this.shopifyProductImage = new Kd(this.connection), this.shopifyProductOption = new Xd(this.connection), this.shopifyProductVariant = new ry(this.connection), this.shopifyShop = new uy(this.connection), this.productPairing = new py(this.connection), this.shopifySync = new gy(this.connection), this.ambiguous = new Sy(this.connection), this.unambiguous = new Ay(this.connection), this.currentSession = new _y(this.connection), this.internal = {
      user: new mt("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new mt("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new mt("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new mt("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new mt("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new mt("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new mt("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new mt("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new mt("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new mt("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new mt("unambiguous", this.connection, {
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
}
var jy = {
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
let Ny = class extends Error {
  constructor(t, r, n, i, a, s, u) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), r && (this.nodes = Array.isArray(r) ? r : [r]), n && (this.source = n), i && (this.positions = i), s && (this.originalError = s);
    var c = u;
    if (!c && s) {
      var y = s.extensions;
      y && typeof y == "object" && (c = y);
    }
    this.extensions = c || {};
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
var ue, z;
function ge(e) {
  return new Ny(`Syntax Error: Unexpected token at ${z} in ${e}`);
}
function it(e) {
  if (e.lastIndex = z, e.test(ue))
    return ue.slice(z, z = e.lastIndex);
}
var li = / +(?=[^\s])/y;
function $y(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, a = t.length - 1, s = 0; s < t.length; s++)
    li.lastIndex = 0, li.test(t[s]) && (s && (!n || li.lastIndex < n) && (n = li.lastIndex), i = i || s, a = s);
  for (var u = i; u <= a; u++)
    u !== i && (r += `
`), r += t[u].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function J() {
  for (var e = 0 | ue.charCodeAt(z++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | ue.charCodeAt(z++))
    if (e === 35)
      for (; (e = ue.charCodeAt(z++)) !== 10 && e !== 13; )
        ;
  z--;
}
var Ll = /[_A-Za-z]\w*/y;
function Ct() {
  var e;
  if (e = it(Ll))
    return {
      kind: "Name",
      value: e
    };
}
var ky = /(?:null|true|false)/y, Wl = /\$[_A-Za-z]\w*/y, Cy = /-?\d+/y, Dy = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Fy = /\\/g, Ry = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, My = /"(?:"|[^\r\n]*?[^\\]")/y;
function ki(e) {
  var t, r;
  if (r = it(ky))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = it(Wl)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = it(Cy)) {
    var n = r;
    (r = it(Dy)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = it(Ll))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = it(Ry))
    t = {
      kind: "StringValue",
      value: $y(r.slice(3, -3)),
      block: !0
    };
  else if (r = it(My))
    t = {
      kind: "StringValue",
      value: Fy.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var s;
    if (ue.charCodeAt(z) === 91) {
      z++, J();
      for (var u = []; s = ki(a); )
        u.push(s);
      if (ue.charCodeAt(z++) !== 93)
        throw ge("ListValue");
      return J(), {
        kind: "ListValue",
        values: u
      };
    }
  }(e) || function(a) {
    if (ue.charCodeAt(z) === 123) {
      z++, J();
      for (var s = [], u; u = Ct(); ) {
        if (J(), ue.charCodeAt(z++) !== 58)
          throw ge("ObjectField");
        J();
        var c = ki(a);
        if (!c)
          throw ge("ObjectField");
        s.push({
          kind: "ObjectField",
          name: u,
          value: c
        });
      }
      if (ue.charCodeAt(z++) !== 125)
        throw ge("ObjectValue");
      return J(), {
        kind: "ObjectValue",
        fields: s
      };
    }
  }(e))
    return t;
  return J(), t;
}
function zl(e) {
  var t = [];
  if (J(), ue.charCodeAt(z) === 40) {
    z++, J();
    for (var r; r = Ct(); ) {
      if (J(), ue.charCodeAt(z++) !== 58)
        throw ge("Argument");
      J();
      var n = ki(e);
      if (!n)
        throw ge("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || ue.charCodeAt(z++) !== 41)
      throw ge("Argument");
    J();
  }
  return t;
}
function un(e) {
  var t = [];
  for (J(); ue.charCodeAt(z) === 64; ) {
    z++;
    var r = Ct();
    if (!r)
      throw ge("Directive");
    J(), t.push({
      kind: "Directive",
      name: r,
      arguments: zl(e)
    });
  }
  return t;
}
function Vy() {
  var e = Ct();
  if (e) {
    J();
    var t;
    if (ue.charCodeAt(z) === 58) {
      if (z++, J(), t = e, !(e = Ct()))
        throw ge("Field");
      J();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: zl(!1),
      directives: un(!1),
      selectionSet: ea()
    };
  }
}
function Hl() {
  var e;
  if (J(), ue.charCodeAt(z) === 91) {
    z++, J();
    var t = Hl();
    if (!t || ue.charCodeAt(z++) !== 93)
      throw ge("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = Ct())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw ge("NamedType");
  return J(), ue.charCodeAt(z) === 33 ? (z++, J(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var By = /on/y;
function Kl() {
  if (it(By)) {
    J();
    var e = Ct();
    if (!e)
      throw ge("NamedType");
    return J(), {
      kind: "NamedType",
      name: e
    };
  }
}
var qy = /\.\.\./y;
function Uy() {
  if (it(qy)) {
    J();
    var e = z, t;
    if ((t = Ct()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: un(!1)
      };
    z = e;
    var r = Kl(), n = un(!1), i = ea();
    if (!i)
      throw ge("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: i
    };
  }
}
function ea() {
  var e;
  if (J(), ue.charCodeAt(z) === 123) {
    z++, J();
    for (var t = []; e = Uy() || Vy(); )
      t.push(e);
    if (!t.length || ue.charCodeAt(z++) !== 125)
      throw ge("SelectionSet");
    return J(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Gy = /fragment/y;
function Ly() {
  if (it(Gy)) {
    J();
    var e = Ct();
    if (!e)
      throw ge("FragmentDefinition");
    J();
    var t = Kl();
    if (!t)
      throw ge("FragmentDefinition");
    var r = un(!1), n = ea();
    if (!n)
      throw ge("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var Wy = /(?:query|mutation|subscription)/y;
function zy() {
  var e, t, r = [], n = [];
  (e = it(Wy)) && (J(), t = Ct(), r = function() {
    var s, u = [];
    if (J(), ue.charCodeAt(z) === 40) {
      for (z++, J(); s = it(Wl); ) {
        if (J(), ue.charCodeAt(z++) !== 58)
          throw ge("VariableDefinition");
        var c = Hl(), y = void 0;
        if (ue.charCodeAt(z) === 61 && (z++, J(), !(y = ki(!0))))
          throw ge("VariableDefinition");
        J(), u.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: s.slice(1)
            }
          },
          type: c,
          defaultValue: y,
          directives: un(!0)
        });
      }
      if (ue.charCodeAt(z++) !== 41)
        throw ge("VariableDefinition");
      J();
    }
    return u;
  }(), n = un(!1));
  var i = ea();
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
function Hy(e, t) {
  return ue = typeof e.body == "string" ? e.body : e, z = 0, function() {
    var n;
    J();
    for (var i = []; n = Ly() || zy(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function Ky(e) {
  return JSON.stringify(e);
}
function Jy(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var lt = (e) => !(!e || !e.length), Me = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !lt(e.variableDefinitions) && !lt(e.directives))
      return Me.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), lt(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(Me.VariableDefinition).join(", ") + ")"), lt(e.directives) && (t += " " + e.directives.map(Me.Directive).join(" ")), t + " " + Me.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = Me.Variable(e.variable) + ": " + ft(e.type);
    return e.defaultValue && (t += " = " + ft(e.defaultValue)), lt(e.directives) && (t += " " + e.directives.map(Me.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (lt(e.arguments)) {
      var r = e.arguments.map(Me.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return lt(e.directives) && (t += " " + e.directives.map(Me.Directive).join(" ")), e.selectionSet ? t + " " + Me.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Jy(e.value) : Ky(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(ft).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(Me.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + ft(e.value),
  Document: (e) => lt(e.definitions) ? e.definitions.map(ft).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(ft).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + ft(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return lt(e.directives) && (t += " " + e.directives.map(Me.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), lt(e.directives) && (t += " " + e.directives.map(Me.Directive).join(" ")), t + " " + ft(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, lt(e.directives) && (t += " " + e.directives.map(Me.Directive).join(" ")), t + " " + ft(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return lt(e.arguments) && (t += "(" + e.arguments.map(Me.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + ft(e.type) + "]",
  NonNullType: (e) => ft(e.type) + "!"
};
function ft(e) {
  return Me[e.kind] ? Me[e.kind](e) : "";
}
var To = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, hi = /* @__PURE__ */ new Set(), Hs = /* @__PURE__ */ new WeakMap(), Kr = (e) => {
  if (e === null || hi.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Kr(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += Kr(r) || "null";
    return t += "]";
  } else if (Ks !== Ci && e instanceof Ks || Js !== Ci && e instanceof Js)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = Hs.get(e) || Math.random().toString(36).slice(2);
    return Hs.set(e, i), Kr({
      __key: i
    });
  }
  hi.add(e);
  var a = "{";
  for (var s of n) {
    var u = Kr(e[s]);
    u && (a.length > 1 && (a += ","), a += Kr(s) + ":" + u);
  }
  return hi.delete(e), a += "}";
}, Qy = (e) => (hi.clear(), Kr(e));
class Ci {
}
var Ks = typeof File < "u" ? File : Ci, Js = typeof Blob < "u" ? Blob : Ci, Yy = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Xy = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, Zy = (e, t) => t % 2 == 0 ? e.replace(Xy, `
`) : e, Qs = (e) => e.split(Yy).map(Zy).join("").trim(), Ys = /* @__PURE__ */ new Map(), gi = /* @__PURE__ */ new Map(), Jl = (e) => {
  var t;
  return typeof e == "string" ? t = Qs(e) : e.loc && gi.get(e.__key) === e ? t = e.loc.source.body : (t = Ys.get(e) || Qs(ft(e)), Ys.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Xs = (e) => {
  var t = To(Jl(e));
  if (e.definitions) {
    var r = rh(e);
    r && (t = To(`
# ${r}`, t));
  }
  return t;
}, eh = (e) => {
  var t, r;
  return typeof e == "string" ? (t = Xs(e), r = gi.get(t) || Hy(e)) : (t = e.__key || Xs(e), r = gi.get(t) || e), r.loc || Jl(r), r.__key = t, gi.set(t, r), r;
}, th = (e, t, r) => {
  var n = t || {}, i = eh(e), a = Qy(n), s = i.__key;
  return a !== "{}" && (s = To(a, s)), {
    key: s,
    query: i,
    variables: n,
    extensions: r
  };
}, rh = (e) => {
  for (var t of e.definitions)
    if (t.kind === jy.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
};
typeof TextDecoder < "u" && new TextDecoder();
var Ql = {}, ta = Nt.createContext(Ql);
ta.Provider;
ta.Consumer;
ta.displayName = "UrqlContext";
var nh = () => {
  var e = Nt.useContext(ta);
  if (e === Ql && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, ih = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, ah = (e, t) => e === t || !(!e || !t || e.key !== t.key), Ca = (e, t) => {
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
    for (var s in i)
      if (s === "operation" ? !ah(n[s], i[s]) : n[s] !== i[s])
        return !0;
    return !1;
  })(e, r) ? r : e;
}, oh = (e, t) => {
  for (var r = 0, n = t.length; r < n; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}, Da = Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Zs(e, t) {
  process.env.NODE_ENV !== "production" && Da && Da.ReactCurrentOwner && Da.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function sh(e, t) {
  var r = Nt.useRef(void 0);
  return Nt.useMemo(() => {
    var n = th(e, t);
    return r.current !== void 0 && r.current.key === n.key ? r.current : (r.current = n, n);
  }, [e, t]);
}
var uh = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    e.operations$ && Er((n) => {
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
}, lh = (e, t) => e.suspense && (!t || t.suspense !== !1);
function ch(e) {
  var t = nh(), r = uh(t), n = lh(t, e.context), i = sh(e.query, e.variables), a = Nt.useMemo(() => {
    if (e.pause)
      return null;
    var g = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return n ? _r((m) => {
      r.set(i.key, m);
    })(g) : g;
  }, [r, t, i, n, e.pause, e.requestPolicy, e.context]), s = Nt.useCallback((g, m) => {
    if (!g)
      return {
        fetching: !1
      };
    var S = r.get(i.key);
    if (S) {
      if (m && S != null && "then" in S)
        throw S;
    } else {
      var E, k = Er((I) => {
        S = I, E && E(S);
      })(Sl(() => m && !E || !S)(g));
      if (S == null && m) {
        var M = new Promise((I) => {
          E = I;
        });
        throw r.set(i.key, M), M;
      } else
        k.unsubscribe();
    }
    return S || {
      fetching: !0
    };
  }, [r, i]), u = [t, i, e.requestPolicy, e.context, e.pause], [c, y] = Nt.useState(() => [a, Ca(ih, s(a, n)), u]), d = c[1];
  a !== c[0] && oh(c[2], u) && y([a, d = Ca(c[1], s(a, n)), u]), Nt.useEffect(() => {
    var g = c[0], m = c[2][1], S = !1, E = (M) => {
      S = !0, Zs(y, (I) => {
        var U = Ca(I[1], M);
        return I[1] !== U ? [I[0], U, I[2]] : I;
      });
    };
    if (g) {
      var k = Er(E)(Wo(() => {
        E({
          fetching: !1
        });
      })(g));
      return S || E({
        fetching: !0
      }), () => {
        r.dispose(m.key), k.unsubscribe();
      };
    } else
      E({
        fetching: !1
      });
  }, [r, c[0], c[2][1]]);
  var v = Nt.useCallback((g) => {
    var m = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...g
    };
    Zs(y, (S) => [n ? _r((E) => {
      r.set(i.key, E);
    })(t.executeQuery(i, m)) : t.executeQuery(i, m), S[1], u]);
  }, [t, r, i, n, s, e.requestPolicy, e.context]);
  return [d, v];
}
const fh = Ki.createContext(void 0);
Ki.createContext(void 0);
function ph(e) {
  return typeof e == "object" && e !== null;
}
function dh(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const yh = /\r\n|[\n\r]/g;
function Ao(e, t) {
  let r = 0, n = 1;
  for (const i of e.body.matchAll(yh)) {
    if (typeof i.index == "number" || dh(!1), i.index >= t)
      break;
    r = i.index + i[0].length, n += 1;
  }
  return {
    line: n,
    column: t + 1 - r
  };
}
function hh(e) {
  return Yl(
    e.source,
    Ao(e.source, e.start)
  );
}
function Yl(e, t) {
  const r = e.locationOffset.column - 1, n = "".padStart(r) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, u = t.line === 1 ? r : 0, c = t.column + u, y = `${e.name}:${s}:${c}
`, d = n.split(/\r\n|[\n\r]/g), v = d[i];
  if (v.length > 120) {
    const g = Math.floor(c / 80), m = c % 80, S = [];
    for (let E = 0; E < v.length; E += 80)
      S.push(v.slice(E, E + 80));
    return y + eu([
      [`${s} |`, S[0]],
      ...S.slice(1, g + 1).map((E) => ["|", E]),
      ["|", "^".padStart(m)],
      ["|", S[g + 1]]
    ]);
  }
  return y + eu([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, d[i - 1]],
    [`${s} |`, v],
    ["|", "^".padStart(c)],
    [`${s + 1} |`, d[i + 1]]
  ]);
}
function eu(e) {
  const t = e.filter(([n, i]) => i !== void 0), r = Math.max(...t.map(([n]) => n.length));
  return t.map(([n, i]) => n.padStart(r) + (i ? " " + i : "")).join(`
`);
}
function gh(e) {
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
class Di extends Error {
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
    const { nodes: s, source: u, positions: c, path: y, originalError: d, extensions: v } = gh(r);
    super(t), this.name = "GraphQLError", this.path = y ?? void 0, this.originalError = d ?? void 0, this.nodes = tu(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const g = tu(
      (n = this.nodes) === null || n === void 0 ? void 0 : n.map((S) => S.loc).filter((S) => S != null)
    );
    this.source = u ?? (g == null || (i = g[0]) === null || i === void 0 ? void 0 : i.source), this.positions = c ?? (g == null ? void 0 : g.map((S) => S.start)), this.locations = c && u ? c.map((S) => Ao(u, S)) : g == null ? void 0 : g.map((S) => Ao(S.source, S.start));
    const m = ph(
      d == null ? void 0 : d.extensions
    ) ? d == null ? void 0 : d.extensions : void 0;
    this.extensions = (a = v ?? m) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Di) : Object.defineProperty(this, "stack", {
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

` + hh(r.loc));
    else if (this.source && this.locations)
      for (const r of this.locations)
        t += `

` + Yl(this.source, r);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function tu(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const vh = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", mh = (e, t) => {
  let r = "";
  return e !== void 0 ? r = `[Network] ${e.message}` : t !== void 0 ? t.forEach((n) => {
    r += `[GraphQL] ${n.message}
`;
  }) : r = "Unknown error", r.trim();
}, bh = (e) => typeof e == "string" ? new Di(e) : e != null && e.message && !e.code ? new Di(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class Tr extends Error {
  /** @private */
  static forClientSideError(t, r) {
    return new Tr({
      executionErrors: [t],
      response: r
    });
  }
  /** @private */
  static forErrorsResponse(t, r) {
    return new Tr({
      executionErrors: t.map(Rl),
      response: r
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new Tr({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, r) {
    const n = td(t, r);
    let i = Tr.forMaybeCombinedError(t.error);
    return !i && n && (i = Tr.forClientSideError(n)), i;
  }
  constructor({ networkError: t, executionErrors: r, response: n }) {
    const i = (r || []).map(bh), a = mh(t, i);
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
const Sh = (e) => {
  const { context: t, suspense: r, ...n } = e ?? {}, i = no(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...n,
    context: i
  };
}, wh = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), Oh = (e) => {
  if (!af(fh))
    throw new Error(vh);
  const t = Sh(e);
  return ch(t);
};
var ru = Object.prototype.toString, Xl = function(t) {
  var r = ru.call(t), n = r === "[object Arguments]";
  return n || (n = r !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && ru.call(t.callee) === "[object Function]"), n;
}, Fa, nu;
function Th() {
  if (nu)
    return Fa;
  nu = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = Xl, i = Object.prototype.propertyIsEnumerable, a = !i.call({ toString: null }, "toString"), s = i.call(function() {
    }, "prototype"), u = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], c = function(g) {
      var m = g.constructor;
      return m && m.prototype === g;
    }, y = {
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
      for (var g in window)
        try {
          if (!y["$" + g] && t.call(window, g) && window[g] !== null && typeof window[g] == "object")
            try {
              c(window[g]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), v = function(g) {
      if (typeof window > "u" || !d)
        return c(g);
      try {
        return c(g);
      } catch {
        return !1;
      }
    };
    e = function(m) {
      var S = m !== null && typeof m == "object", E = r.call(m) === "[object Function]", k = n(m), M = S && r.call(m) === "[object String]", I = [];
      if (!S && !E && !k)
        throw new TypeError("Object.keys called on a non-object");
      var U = s && E;
      if (M && m.length > 0 && !t.call(m, 0))
        for (var w = 0; w < m.length; ++w)
          I.push(String(w));
      if (k && m.length > 0)
        for (var j = 0; j < m.length; ++j)
          I.push(String(j));
      else
        for (var A in m)
          !(U && A === "prototype") && t.call(m, A) && I.push(String(A));
      if (a)
        for (var G = v(m), Z = 0; Z < u.length; ++Z)
          !(G && u[Z] === "constructor") && t.call(m, u[Z]) && I.push(u[Z]);
      return I;
    };
  }
  return Fa = e, Fa;
}
var Ah = Array.prototype.slice, Ph = Xl, iu = Object.keys, vi = iu ? function(t) {
  return iu(t);
} : Th(), au = Object.keys;
vi.shim = function() {
  if (Object.keys) {
    var t = function() {
      var r = Object.keys(arguments);
      return r && r.length === arguments.length;
    }(1, 2);
    t || (Object.keys = function(n) {
      return Ph(n) ? au(Ah.call(n)) : au(n);
    });
  } else
    Object.keys = vi;
  return Object.keys || vi;
};
var ss = vi, ra = function() {
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
    var s = Object.getOwnPropertyDescriptor(t, r);
    if (s.value !== i || s.enumerable !== !0)
      return !1;
  }
  return !0;
}, ou = typeof Symbol < "u" && Symbol, Ih = ra, us = function() {
  return typeof ou != "function" || typeof Symbol != "function" || typeof ou("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Ih();
}, _h = "Function.prototype.bind called on incompatible ", Ra = Array.prototype.slice, Eh = Object.prototype.toString, xh = "[object Function]", jh = function(t) {
  var r = this;
  if (typeof r != "function" || Eh.call(r) !== xh)
    throw new TypeError(_h + r);
  for (var n = Ra.call(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var d = r.apply(
        this,
        n.concat(Ra.call(arguments))
      );
      return Object(d) === d ? d : this;
    } else
      return r.apply(
        t,
        n.concat(Ra.call(arguments))
      );
  }, s = Math.max(0, r.length - n.length), u = [], c = 0; c < s; c++)
    u.push("$" + c);
  if (i = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var y = function() {
    };
    y.prototype = r.prototype, i.prototype = new y(), y.prototype = null;
  }
  return i;
}, Nh = jh, ls = Function.prototype.bind || Nh, $h = ls, kh = $h.call(Function.call, Object.prototype.hasOwnProperty), Q, ln = SyntaxError, Zl = Function, en = TypeError, Ma = function(e) {
  try {
    return Zl('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Pr = Object.getOwnPropertyDescriptor;
if (Pr)
  try {
    Pr({}, "");
  } catch {
    Pr = null;
  }
var Va = function() {
  throw new en();
}, Ch = Pr ? function() {
  try {
    return arguments.callee, Va;
  } catch {
    try {
      return Pr(arguments, "callee").get;
    } catch {
      return Va;
    }
  }
}() : Va, Wr = us(), xt = Object.getPrototypeOf || function(e) {
  return e.__proto__;
}, Jr = {}, Dh = typeof Uint8Array > "u" ? Q : xt(Uint8Array), Ir = {
  "%AggregateError%": typeof AggregateError > "u" ? Q : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Q : ArrayBuffer,
  "%ArrayIteratorPrototype%": Wr ? xt([][Symbol.iterator]()) : Q,
  "%AsyncFromSyncIteratorPrototype%": Q,
  "%AsyncFunction%": Jr,
  "%AsyncGenerator%": Jr,
  "%AsyncGeneratorFunction%": Jr,
  "%AsyncIteratorPrototype%": Jr,
  "%Atomics%": typeof Atomics > "u" ? Q : Atomics,
  "%BigInt%": typeof BigInt > "u" ? Q : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? Q : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? Q : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? Q : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? Q : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Q : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Q : FinalizationRegistry,
  "%Function%": Zl,
  "%GeneratorFunction%": Jr,
  "%Int8Array%": typeof Int8Array > "u" ? Q : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Q : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Q : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Wr ? xt(xt([][Symbol.iterator]())) : Q,
  "%JSON%": typeof JSON == "object" ? JSON : Q,
  "%Map%": typeof Map > "u" ? Q : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Wr ? Q : xt((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Q : Promise,
  "%Proxy%": typeof Proxy > "u" ? Q : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? Q : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Q : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Wr ? Q : xt((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Q : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Wr ? xt(""[Symbol.iterator]()) : Q,
  "%Symbol%": Wr ? Symbol : Q,
  "%SyntaxError%": ln,
  "%ThrowTypeError%": Ch,
  "%TypedArray%": Dh,
  "%TypeError%": en,
  "%Uint8Array%": typeof Uint8Array > "u" ? Q : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Q : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Q : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Q : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? Q : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Q : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Q : WeakSet
};
try {
  null.error;
} catch (e) {
  var Fh = xt(xt(e));
  Ir["%Error.prototype%"] = Fh;
}
var Rh = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Ma("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Ma("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Ma("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && (r = xt(i.prototype));
  }
  return Ir[t] = r, r;
}, su = {
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
}, Hn = ls, Fi = kh, Mh = Hn.call(Function.call, Array.prototype.concat), Vh = Hn.call(Function.apply, Array.prototype.splice), uu = Hn.call(Function.call, String.prototype.replace), Ri = Hn.call(Function.call, String.prototype.slice), Bh = Hn.call(Function.call, RegExp.prototype.exec), qh = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Uh = /\\(\\)?/g, Gh = function(t) {
  var r = Ri(t, 0, 1), n = Ri(t, -1);
  if (r === "%" && n !== "%")
    throw new ln("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new ln("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return uu(t, qh, function(a, s, u, c) {
    i[i.length] = u ? uu(c, Uh, "$1") : s || a;
  }), i;
}, Lh = function(t, r) {
  var n = t, i;
  if (Fi(su, n) && (i = su[n], n = "%" + i[0] + "%"), Fi(Ir, n)) {
    var a = Ir[n];
    if (a === Jr && (a = Rh(n)), typeof a > "u" && !r)
      throw new en("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new ln("intrinsic " + t + " does not exist!");
}, Wt = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new en("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new en('"allowMissing" argument must be a boolean');
  if (Bh(/^%?[^%]*%?$/, t) === null)
    throw new ln("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Gh(t), i = n.length > 0 ? n[0] : "", a = Lh("%" + i + "%", r), s = a.name, u = a.value, c = !1, y = a.alias;
  y && (i = y[0], Vh(n, Mh([0, 1], y)));
  for (var d = 1, v = !0; d < n.length; d += 1) {
    var g = n[d], m = Ri(g, 0, 1), S = Ri(g, -1);
    if ((m === '"' || m === "'" || m === "`" || S === '"' || S === "'" || S === "`") && m !== S)
      throw new ln("property names with quotes must have matching quotes");
    if ((g === "constructor" || !v) && (c = !0), i += "." + g, s = "%" + i + "%", Fi(Ir, s))
      u = Ir[s];
    else if (u != null) {
      if (!(g in u)) {
        if (!r)
          throw new en("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Pr && d + 1 >= n.length) {
        var E = Pr(u, g);
        v = !!E, v && "get" in E && !("originalValue" in E.get) ? u = E.get : u = u[g];
      } else
        v = Fi(u, g), u = u[g];
      v && !c && (Ir[s] = u);
    }
  }
  return u;
}, Wh = Wt, Po = Wh("%Object.defineProperty%", !0), Io = function() {
  if (Po)
    try {
      return Po({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
Io.hasArrayLengthDefineBug = function() {
  if (!Io())
    return null;
  try {
    return Po([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var zh = Io, Hh = ss, Kh = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", Jh = Object.prototype.toString, Qh = Array.prototype.concat, ec = Object.defineProperty, Yh = function(e) {
  return typeof e == "function" && Jh.call(e) === "[object Function]";
}, Xh = zh(), tc = ec && Xh, Zh = function(e, t, r, n) {
  t in e && (!Yh(n) || !n()) || (tc ? ec(e, t, {
    configurable: !0,
    enumerable: !1,
    value: r,
    writable: !0
  }) : e[t] = r);
}, rc = function(e, t) {
  var r = arguments.length > 2 ? arguments[2] : {}, n = Hh(t);
  Kh && (n = Qh.call(n, Object.getOwnPropertySymbols(t)));
  for (var i = 0; i < n.length; i += 1)
    Zh(e, n[i], t[n[i]], r[n[i]]);
};
rc.supportsDescriptors = !!tc;
var xr = rc, nc = { exports: {} };
(function(e) {
  var t = ls, r = Wt, n = r("%Function.prototype.apply%"), i = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || t.call(i, n), s = r("%Object.getOwnPropertyDescriptor%", !0), u = r("%Object.defineProperty%", !0), c = r("%Math.max%");
  if (u)
    try {
      u({}, "a", { value: 1 });
    } catch {
      u = null;
    }
  e.exports = function(v) {
    var g = a(t, i, arguments);
    if (s && u) {
      var m = s(g, "length");
      m.configurable && u(
        g,
        "length",
        { value: 1 + c(0, v.length - (arguments.length - 1)) }
      );
    }
    return g;
  };
  var y = function() {
    return a(t, n, arguments);
  };
  u ? u(e.exports, "apply", { value: y }) : e.exports.apply = y;
})(nc);
var Kn = nc.exports, ic = Wt, ac = Kn, eg = ac(ic("String.prototype.indexOf")), dt = function(t, r) {
  var n = ic(t, !!r);
  return typeof n == "function" && eg(t, ".prototype.") > -1 ? ac(n) : n;
}, tg = ss, oc = ra(), sc = dt, lu = Object, rg = sc("Array.prototype.push"), cu = sc("Object.prototype.propertyIsEnumerable"), ng = oc ? Object.getOwnPropertySymbols : null, uc = function(t, r) {
  if (t == null)
    throw new TypeError("target must be an object");
  var n = lu(t);
  if (arguments.length === 1)
    return n;
  for (var i = 1; i < arguments.length; ++i) {
    var a = lu(arguments[i]), s = tg(a), u = oc && (Object.getOwnPropertySymbols || ng);
    if (u)
      for (var c = u(a), y = 0; y < c.length; ++y) {
        var d = c[y];
        cu(a, d) && rg(s, d);
      }
    for (var v = 0; v < s.length; ++v) {
      var g = s[v];
      if (cu(a, g)) {
        var m = a[g];
        n[g] = m;
      }
    }
  }
  return n;
}, Ba = uc, ig = function() {
  if (!Object.assign)
    return !1;
  for (var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, n = 0; n < t.length; ++n)
    r[t[n]] = t[n];
  var i = Object.assign({}, r), a = "";
  for (var s in i)
    a += s;
  return e !== a;
}, ag = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var e = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(e, "xy");
  } catch {
    return e[1] === "y";
  }
  return !1;
}, lc = function() {
  return !Object.assign || ig() || ag() ? Ba : Object.assign;
}, og = xr, sg = lc, ug = function() {
  var t = sg();
  return og(
    Object,
    { assign: t },
    { assign: function() {
      return Object.assign !== t;
    } }
  ), t;
}, lg = xr, cg = Kn, fg = uc, cc = lc, pg = ug, dg = cg.apply(cc()), fc = function(t, r) {
  return dg(Object, arguments);
};
lg(fc, {
  getPolyfill: cc,
  implementation: fg,
  shim: pg
});
var yg = fc, pc = { exports: {} }, Gn = function() {
  return typeof (function() {
  }).name == "string";
}, Dn = Object.getOwnPropertyDescriptor;
if (Dn)
  try {
    Dn([], "length");
  } catch {
    Dn = null;
  }
Gn.functionsHaveConfigurableNames = function() {
  if (!Gn() || !Dn)
    return !1;
  var t = Dn(function() {
  }, "name");
  return !!t && !!t.configurable;
};
var hg = Function.prototype.bind;
Gn.boundFunctionsHaveNames = function() {
  return Gn() && typeof hg == "function" && (function() {
  }).bind().name !== "";
};
var gg = Gn;
(function(e) {
  var t = gg.functionsHaveConfigurableNames(), r = Object, n = TypeError;
  e.exports = function() {
    if (this != null && this !== r(this))
      throw new n("RegExp.prototype.flags getter called on non-object");
    var a = "";
    return this.hasIndices && (a += "d"), this.global && (a += "g"), this.ignoreCase && (a += "i"), this.multiline && (a += "m"), this.dotAll && (a += "s"), this.unicode && (a += "u"), this.sticky && (a += "y"), a;
  }, t && Object.defineProperty && Object.defineProperty(e.exports, "name", { value: "get flags" });
})(pc);
var dc = pc.exports, vg = dc, mg = xr.supportsDescriptors, bg = Object.getOwnPropertyDescriptor, yc = function() {
  if (mg && /a/mig.flags === "gim") {
    var t = bg(RegExp.prototype, "flags");
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
  return vg;
}, Sg = xr.supportsDescriptors, wg = yc, Og = Object.getOwnPropertyDescriptor, Tg = Object.defineProperty, Ag = TypeError, fu = Object.getPrototypeOf, Pg = /a/, Ig = function() {
  if (!Sg || !fu)
    throw new Ag("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t = wg(), r = fu(Pg), n = Og(r, "flags");
  return (!n || n.get !== t) && Tg(r, "flags", {
    configurable: !0,
    enumerable: !1,
    get: t
  }), t;
}, _g = xr, Eg = Kn, xg = dc, hc = yc, jg = Ig, gc = Eg(hc());
_g(gc, {
  getPolyfill: hc,
  implementation: xg,
  shim: jg
});
var Ng = gc, mi = { exports: {} }, $g = ra, sr = function() {
  return $g() && !!Symbol.toStringTag;
}, kg = sr(), Cg = dt, _o = Cg("Object.prototype.toString"), na = function(t) {
  return kg && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : _o(t) === "[object Arguments]";
}, vc = function(t) {
  return na(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && _o(t) !== "[object Array]" && _o(t.callee) === "[object Function]";
}, Dg = function() {
  return na(arguments);
}();
na.isLegacyArguments = vc;
var mc = Dg ? na : vc, Fg = {}.toString, bc = Array.isArray || function(e) {
  return Fg.call(e) == "[object Array]";
}, Rg = String.prototype.valueOf, Mg = function(t) {
  try {
    return Rg.call(t), !0;
  } catch {
    return !1;
  }
}, Vg = Object.prototype.toString, Bg = "[object String]", qg = sr(), Sc = function(t) {
  return typeof t == "string" ? !0 : typeof t != "object" ? !1 : qg ? Mg(t) : Vg.call(t) === Bg;
}, cs = typeof Map == "function" && Map.prototype ? Map : null, Ug = typeof Set == "function" && Set.prototype ? Set : null, Mi;
cs || (Mi = function(t) {
  return !1;
});
var wc = cs ? Map.prototype.has : null, pu = Ug ? Set.prototype.has : null;
!Mi && !wc && (Mi = function(t) {
  return !1;
});
var Oc = Mi || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (wc.call(t), pu)
      try {
        pu.call(t);
      } catch {
        return !0;
      }
    return t instanceof cs;
  } catch {
  }
  return !1;
}, Gg = typeof Map == "function" && Map.prototype ? Map : null, fs = typeof Set == "function" && Set.prototype ? Set : null, Vi;
fs || (Vi = function(t) {
  return !1;
});
var du = Gg ? Map.prototype.has : null, Tc = fs ? Set.prototype.has : null;
!Vi && !Tc && (Vi = function(t) {
  return !1;
});
var Ac = Vi || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Tc.call(t), du)
      try {
        du.call(t);
      } catch {
        return !0;
      }
    return t instanceof fs;
  } catch {
  }
  return !1;
}, yu = mc;
if (us() || ra()) {
  var qa = Symbol.iterator;
  mi.exports = function(t) {
    if (t != null && typeof t[qa] < "u")
      return t[qa]();
    if (yu(t))
      return Array.prototype[qa].call(t);
  };
} else {
  var Lg = bc, Wg = Sc, hu = Wt, zg = hu("%Map%", !0), Hg = hu("%Set%", !0), bt = dt, gu = bt("Array.prototype.push"), vu = bt("String.prototype.charCodeAt"), Kg = bt("String.prototype.slice"), Jg = function(t, r) {
    var n = t.length;
    if (r + 1 >= n)
      return r + 1;
    var i = vu(t, r);
    if (i < 55296 || i > 56319)
      return r + 1;
    var a = vu(t, r + 1);
    return a < 56320 || a > 57343 ? r + 1 : r + 2;
  }, Ua = function(t) {
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
  }, mu = function(t, r) {
    if (Lg(t) || yu(t))
      return Ua(t);
    if (Wg(t)) {
      var n = 0;
      return {
        next: function() {
          var a = Jg(t, n), s = Kg(t, n, a);
          return n = a, {
            done: a > t.length,
            value: s
          };
        }
      };
    }
    if (r && typeof t["_es6-shim iterator_"] < "u")
      return t["_es6-shim iterator_"]();
  };
  if (!zg && !Hg)
    mi.exports = function(t) {
      if (t != null)
        return mu(t, !0);
    };
  else {
    var Qg = Oc, Yg = Ac, bu = bt("Map.prototype.forEach", !0), Su = bt("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var wu = bt("Map.prototype.iterator", !0), Ou = bt("Set.prototype.iterator", !0), Tu = function(e) {
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
    var Au = bt("Map.prototype.@@iterator", !0) || bt("Map.prototype._es6-shim iterator_", !0), Pu = bt("Set.prototype.@@iterator", !0) || bt("Set.prototype._es6-shim iterator_", !0), Xg = function(t) {
      if (Qg(t)) {
        if (wu)
          return Tu(wu(t));
        if (Au)
          return Au(t);
        if (bu) {
          var r = [];
          return bu(t, function(i, a) {
            gu(r, [a, i]);
          }), Ua(r);
        }
      }
      if (Yg(t)) {
        if (Ou)
          return Tu(Ou(t));
        if (Pu)
          return Pu(t);
        if (Su) {
          var n = [];
          return Su(t, function(i) {
            gu(n, i);
          }), Ua(n);
        }
      }
    };
    mi.exports = function(t) {
      return Xg(t) || mu(t);
    };
  }
}
var Zg = mi.exports;
const ev = {}, tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ev
}, Symbol.toStringTag, { value: "Module" })), rv = /* @__PURE__ */ sf(tv);
var ps = typeof Map == "function" && Map.prototype, Ga = Object.getOwnPropertyDescriptor && ps ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Bi = ps && Ga && typeof Ga.get == "function" ? Ga.get : null, Iu = ps && Map.prototype.forEach, ds = typeof Set == "function" && Set.prototype, La = Object.getOwnPropertyDescriptor && ds ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, qi = ds && La && typeof La.get == "function" ? La.get : null, _u = ds && Set.prototype.forEach, nv = typeof WeakMap == "function" && WeakMap.prototype, Fn = nv ? WeakMap.prototype.has : null, iv = typeof WeakSet == "function" && WeakSet.prototype, Rn = iv ? WeakSet.prototype.has : null, av = typeof WeakRef == "function" && WeakRef.prototype, Eu = av ? WeakRef.prototype.deref : null, ov = Boolean.prototype.valueOf, sv = Object.prototype.toString, uv = Function.prototype.toString, lv = String.prototype.match, ys = String.prototype.slice, or = String.prototype.replace, cv = String.prototype.toUpperCase, xu = String.prototype.toLowerCase, Pc = RegExp.prototype.test, ju = Array.prototype.concat, jt = Array.prototype.join, fv = Array.prototype.slice, Nu = Math.floor, Eo = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Wa = Object.getOwnPropertySymbols, xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, cn = typeof Symbol == "function" && typeof Symbol.iterator == "object", Ve = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === cn || "symbol") ? Symbol.toStringTag : null, Ic = Object.prototype.propertyIsEnumerable, $u = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function ku(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Pc.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -Nu(-e) : Nu(e);
    if (n !== e) {
      var i = String(n), a = ys.call(t, i.length + 1);
      return or.call(i, r, "$&_") + "." + or.call(or.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return or.call(t, r, "$&_");
}
var jo = rv, Cu = jo.custom, Du = Ec(Cu) ? Cu : null, pv = function e(t, r, n, i) {
  var a = r || {};
  if (ar(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (ar(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var s = ar(a, "customInspect") ? a.customInspect : !0;
  if (typeof s != "boolean" && s !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (ar(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (ar(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var u = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return jc(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var c = String(t);
    return u ? ku(t, c) : c;
  }
  if (typeof t == "bigint") {
    var y = String(t) + "n";
    return u ? ku(t, y) : y;
  }
  var d = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= d && d > 0 && typeof t == "object")
    return No(t) ? "[Array]" : "[Object]";
  var v = jv(a, n);
  if (typeof i > "u")
    i = [];
  else if (xc(i, t) >= 0)
    return "[Circular]";
  function g(ne, h, O) {
    if (h && (i = fv.call(i), i.push(h)), O) {
      var _ = {
        depth: a.depth
      };
      return ar(a, "quoteStyle") && (_.quoteStyle = a.quoteStyle), e(ne, _, n + 1, i);
    }
    return e(ne, a, n + 1, i);
  }
  if (typeof t == "function" && !Fu(t)) {
    var m = wv(t), S = ci(t, g);
    return "[Function" + (m ? ": " + m : " (anonymous)") + "]" + (S.length > 0 ? " { " + jt.call(S, ", ") + " }" : "");
  }
  if (Ec(t)) {
    var E = cn ? or.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : xo.call(t);
    return typeof t == "object" && !cn ? xn(E) : E;
  }
  if (_v(t)) {
    for (var k = "<" + xu.call(String(t.nodeName)), M = t.attributes || [], I = 0; I < M.length; I++)
      k += " " + M[I].name + "=" + _c(dv(M[I].value), "double", a);
    return k += ">", t.childNodes && t.childNodes.length && (k += "..."), k += "</" + xu.call(String(t.nodeName)) + ">", k;
  }
  if (No(t)) {
    if (t.length === 0)
      return "[]";
    var U = ci(t, g);
    return v && !xv(U) ? "[" + $o(U, v) + "]" : "[ " + jt.call(U, ", ") + " ]";
  }
  if (hv(t)) {
    var w = ci(t, g);
    return !("cause" in Error.prototype) && "cause" in t && !Ic.call(t, "cause") ? "{ [" + String(t) + "] " + jt.call(ju.call("[cause]: " + g(t.cause), w), ", ") + " }" : w.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + jt.call(w, ", ") + " }";
  }
  if (typeof t == "object" && s) {
    if (Du && typeof t[Du] == "function" && jo)
      return jo(t, { depth: d - n });
    if (s !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (Ov(t)) {
    var j = [];
    return Iu && Iu.call(t, function(ne, h) {
      j.push(g(h, t, !0) + " => " + g(ne, t));
    }), Ru("Map", Bi.call(t), j, v);
  }
  if (Pv(t)) {
    var A = [];
    return _u && _u.call(t, function(ne) {
      A.push(g(ne, t));
    }), Ru("Set", qi.call(t), A, v);
  }
  if (Tv(t))
    return za("WeakMap");
  if (Iv(t))
    return za("WeakSet");
  if (Av(t))
    return za("WeakRef");
  if (vv(t))
    return xn(g(Number(t)));
  if (bv(t))
    return xn(g(Eo.call(t)));
  if (mv(t))
    return xn(ov.call(t));
  if (gv(t))
    return xn(g(String(t)));
  if (!yv(t) && !Fu(t)) {
    var G = ci(t, g), Z = $u ? $u(t) === Object.prototype : t instanceof Object || t.constructor === Object, de = t instanceof Object ? "" : "null prototype", Te = !Z && Ve && Object(t) === t && Ve in t ? ys.call(ur(t), 8, -1) : de ? "Object" : "", ce = Z || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", ve = ce + (Te || de ? "[" + jt.call(ju.call([], Te || [], de || []), ": ") + "] " : "");
    return G.length === 0 ? ve + "{}" : v ? ve + "{" + $o(G, v) + "}" : ve + "{ " + jt.call(G, ", ") + " }";
  }
  return String(t);
};
function _c(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function dv(e) {
  return or.call(String(e), /"/g, "&quot;");
}
function No(e) {
  return ur(e) === "[object Array]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function yv(e) {
  return ur(e) === "[object Date]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function Fu(e) {
  return ur(e) === "[object RegExp]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function hv(e) {
  return ur(e) === "[object Error]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function gv(e) {
  return ur(e) === "[object String]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function vv(e) {
  return ur(e) === "[object Number]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function mv(e) {
  return ur(e) === "[object Boolean]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function Ec(e) {
  if (cn)
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
function bv(e) {
  if (!e || typeof e != "object" || !Eo)
    return !1;
  try {
    return Eo.call(e), !0;
  } catch {
  }
  return !1;
}
var Sv = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function ar(e, t) {
  return Sv.call(e, t);
}
function ur(e) {
  return sv.call(e);
}
function wv(e) {
  if (e.name)
    return e.name;
  var t = lv.call(uv.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function xc(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function Ov(e) {
  if (!Bi || !e || typeof e != "object")
    return !1;
  try {
    Bi.call(e);
    try {
      qi.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function Tv(e) {
  if (!Fn || !e || typeof e != "object")
    return !1;
  try {
    Fn.call(e, Fn);
    try {
      Rn.call(e, Rn);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Av(e) {
  if (!Eu || !e || typeof e != "object")
    return !1;
  try {
    return Eu.call(e), !0;
  } catch {
  }
  return !1;
}
function Pv(e) {
  if (!qi || !e || typeof e != "object")
    return !1;
  try {
    qi.call(e);
    try {
      Bi.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function Iv(e) {
  if (!Rn || !e || typeof e != "object")
    return !1;
  try {
    Rn.call(e, Rn);
    try {
      Fn.call(e, Fn);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function _v(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function jc(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return jc(ys.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = or.call(or.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Ev);
  return _c(i, "single", t);
}
function Ev(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + cv.call(t.toString(16));
}
function xn(e) {
  return "Object(" + e + ")";
}
function za(e) {
  return e + " { ? }";
}
function Ru(e, t, r, n) {
  var i = n ? $o(r, n) : jt.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function xv(e) {
  for (var t = 0; t < e.length; t++)
    if (xc(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function jv(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = jt.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: jt.call(Array(t + 1), r)
  };
}
function $o(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + jt.call(e, "," + r) + `
` + t.prev;
}
function ci(e, t) {
  var r = No(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = ar(e, i) ? t(e[i], e) : "";
  }
  var a = typeof Wa == "function" ? Wa(e) : [], s;
  if (cn) {
    s = {};
    for (var u = 0; u < a.length; u++)
      s["$" + a[u]] = a[u];
  }
  for (var c in e)
    ar(e, c) && (r && String(Number(c)) === c && c < e.length || cn && s["$" + c] instanceof Symbol || (Pc.call(/[^\w$]/, c) ? n.push(t(c, e) + ": " + t(e[c], e)) : n.push(c + ": " + t(e[c], e))));
  if (typeof Wa == "function")
    for (var y = 0; y < a.length; y++)
      Ic.call(e, a[y]) && n.push("[" + t(a[y]) + "]: " + t(e[a[y]], e));
  return n;
}
var hs = Wt, hn = dt, Nv = pv, $v = hs("%TypeError%"), fi = hs("%WeakMap%", !0), pi = hs("%Map%", !0), kv = hn("WeakMap.prototype.get", !0), Cv = hn("WeakMap.prototype.set", !0), Dv = hn("WeakMap.prototype.has", !0), Fv = hn("Map.prototype.get", !0), Rv = hn("Map.prototype.set", !0), Mv = hn("Map.prototype.has", !0), gs = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = e.next, e.next = n, n;
}, Vv = function(e, t) {
  var r = gs(e, t);
  return r && r.value;
}, Bv = function(e, t, r) {
  var n = gs(e, t);
  n ? n.value = r : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: r
  };
}, qv = function(e, t) {
  return !!gs(e, t);
}, Uv = function() {
  var t, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new $v("Side channel does not contain " + Nv(a));
    },
    get: function(a) {
      if (fi && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return kv(t, a);
      } else if (pi) {
        if (r)
          return Fv(r, a);
      } else if (n)
        return Vv(n, a);
    },
    has: function(a) {
      if (fi && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return Dv(t, a);
      } else if (pi) {
        if (r)
          return Mv(r, a);
      } else if (n)
        return qv(n, a);
      return !1;
    },
    set: function(a, s) {
      fi && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new fi()), Cv(t, a, s)) : pi ? (r || (r = new pi()), Rv(r, a, s)) : (n || (n = { key: {}, next: null }), Bv(n, a, s));
    }
  };
  return i;
}, Mu = function(e) {
  return e !== e;
}, Nc = function(t, r) {
  return t === 0 && r === 0 ? 1 / t === 1 / r : !!(t === r || Mu(t) && Mu(r));
}, Gv = Nc, $c = function() {
  return typeof Object.is == "function" ? Object.is : Gv;
}, Lv = $c, Wv = xr, zv = function() {
  var t = Lv();
  return Wv(Object, { is: t }, {
    is: function() {
      return Object.is !== t;
    }
  }), t;
}, Hv = xr, Kv = Kn, Jv = Nc, kc = $c, Qv = zv, Cc = Kv(kc(), Object);
Hv(Cc, {
  getPolyfill: kc,
  implementation: Jv,
  shim: Qv
});
var Yv = Cc, Dc = Function.prototype.toString, Xr = typeof Reflect == "object" && Reflect !== null && Reflect.apply, ko, bi;
if (typeof Xr == "function" && typeof Object.defineProperty == "function")
  try {
    ko = Object.defineProperty({}, "length", {
      get: function() {
        throw bi;
      }
    }), bi = {}, Xr(function() {
      throw 42;
    }, null, ko);
  } catch (e) {
    e !== bi && (Xr = null);
  }
else
  Xr = null;
var Xv = /^\s*class\b/, Co = function(t) {
  try {
    var r = Dc.call(t);
    return Xv.test(r);
  } catch {
    return !1;
  }
}, Ha = function(t) {
  try {
    return Co(t) ? !1 : (Dc.call(t), !0);
  } catch {
    return !1;
  }
}, Si = Object.prototype.toString, Zv = "[object Object]", em = "[object Function]", tm = "[object GeneratorFunction]", rm = "[object HTMLAllCollection]", nm = "[object HTML document.all class]", im = "[object HTMLCollection]", am = typeof Symbol == "function" && !!Symbol.toStringTag, om = !(0 in [,]), Do = function() {
  return !1;
};
if (typeof document == "object") {
  var sm = document.all;
  Si.call(sm) === Si.call(document.all) && (Do = function(t) {
    if ((om || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var r = Si.call(t);
        return (r === rm || r === nm || r === im || r === Zv) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var um = Xr ? function(t) {
  if (Do(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    Xr(t, null, ko);
  } catch (r) {
    if (r !== bi)
      return !1;
  }
  return !Co(t) && Ha(t);
} : function(t) {
  if (Do(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (am)
    return Ha(t);
  if (Co(t))
    return !1;
  var r = Si.call(t);
  return r !== em && r !== tm && !/^\[object HTML/.test(r) ? !1 : Ha(t);
}, lm = um, cm = Object.prototype.toString, Fc = Object.prototype.hasOwnProperty, fm = function(t, r, n) {
  for (var i = 0, a = t.length; i < a; i++)
    Fc.call(t, i) && (n == null ? r(t[i], i, t) : r.call(n, t[i], i, t));
}, pm = function(t, r, n) {
  for (var i = 0, a = t.length; i < a; i++)
    n == null ? r(t.charAt(i), i, t) : r.call(n, t.charAt(i), i, t);
}, dm = function(t, r, n) {
  for (var i in t)
    Fc.call(t, i) && (n == null ? r(t[i], i, t) : r.call(n, t[i], i, t));
}, ym = function(t, r, n) {
  if (!lm(r))
    throw new TypeError("iterator must be a function");
  var i;
  arguments.length >= 3 && (i = n), cm.call(t) === "[object Array]" ? fm(t, r, i) : typeof t == "string" ? pm(t, r, i) : dm(t, r, i);
}, Rc = ym, Ka = [
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
], hm = typeof globalThis > "u" ? pt : globalThis, Mc = function() {
  for (var t = [], r = 0; r < Ka.length; r++)
    typeof hm[Ka[r]] == "function" && (t[t.length] = Ka[r]);
  return t;
}, gm = Wt, wi = gm("%Object.getOwnPropertyDescriptor%", !0);
if (wi)
  try {
    wi([], "length");
  } catch {
    wi = null;
  }
var Vc = wi, Bc = Rc, vm = Mc, vs = dt, mm = vs("Object.prototype.toString"), qc = sr(), Oi = Vc, bm = typeof globalThis > "u" ? pt : globalThis, Uc = vm(), Sm = vs("Array.prototype.indexOf", !0) || function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === r)
      return n;
  return -1;
}, wm = vs("String.prototype.slice"), Gc = {}, Ja = Object.getPrototypeOf;
qc && Oi && Ja && Bc(Uc, function(e) {
  var t = new bm[e]();
  if (Symbol.toStringTag in t) {
    var r = Ja(t), n = Oi(r, Symbol.toStringTag);
    if (!n) {
      var i = Ja(r);
      n = Oi(i, Symbol.toStringTag);
    }
    Gc[e] = n.get;
  }
});
var Om = function(t) {
  var r = !1;
  return Bc(Gc, function(n, i) {
    if (!r)
      try {
        r = n.call(t) === i;
      } catch {
      }
  }), r;
}, Lc = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!qc || !(Symbol.toStringTag in t)) {
    var r = wm(mm(t), 8, -1);
    return Sm(Uc, r) > -1;
  }
  return Oi ? Om(t) : !1;
}, Tm = Kn, Am = dt, Wc = Wt, Pm = Lc, Vu = Wc("ArrayBuffer", !0), Bu = Wc("Float32Array", !0), Ti = Am("ArrayBuffer.prototype.byteLength", !0), qu = Vu && !Ti && new Vu().slice, Uu = qu && Tm(qu), Im = Ti || Uu ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Ti ? Ti(t) : Uu(t, 0), !0;
  } catch {
    return !1;
  }
} : Bu ? function(t) {
  try {
    return new Bu(t).buffer === t && !Pm(t);
  } catch (r) {
    return typeof t == "object" && r.name === "RangeError";
  }
} : function(t) {
  return !1;
}, _m = Date.prototype.getDay, Em = function(t) {
  try {
    return _m.call(t), !0;
  } catch {
    return !1;
  }
}, xm = Object.prototype.toString, jm = "[object Date]", Nm = sr(), $m = function(t) {
  return typeof t != "object" || t === null ? !1 : Nm ? Em(t) : xm.call(t) === jm;
}, Fo = dt, zc = sr(), Hc, Kc, Ro, Mo;
if (zc) {
  Hc = Fo("Object.prototype.hasOwnProperty"), Kc = Fo("RegExp.prototype.exec"), Ro = {};
  var Qa = function() {
    throw Ro;
  };
  Mo = {
    toString: Qa,
    valueOf: Qa
  }, typeof Symbol.toPrimitive == "symbol" && (Mo[Symbol.toPrimitive] = Qa);
}
var km = Fo("Object.prototype.toString"), Cm = Object.getOwnPropertyDescriptor, Dm = "[object RegExp]", Fm = zc ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  var r = Cm(t, "lastIndex"), n = r && Hc(r, "value");
  if (!n)
    return !1;
  try {
    Kc(t, Mo);
  } catch (i) {
    return i === Ro;
  }
} : function(t) {
  return !t || typeof t != "object" && typeof t != "function" ? !1 : km(t) === Dm;
}, Rm = dt, Gu = Rm("SharedArrayBuffer.prototype.byteLength", !0), Mm = Gu ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Gu(t), !0;
  } catch {
    return !1;
  }
} : function(t) {
  return !1;
}, Vm = Number.prototype.toString, Bm = function(t) {
  try {
    return Vm.call(t), !0;
  } catch {
    return !1;
  }
}, qm = Object.prototype.toString, Um = "[object Number]", Gm = sr(), Lm = function(t) {
  return typeof t == "number" ? !0 : typeof t != "object" ? !1 : Gm ? Bm(t) : qm.call(t) === Um;
}, Jc = dt, Wm = Jc("Boolean.prototype.toString"), zm = Jc("Object.prototype.toString"), Hm = function(t) {
  try {
    return Wm(t), !0;
  } catch {
    return !1;
  }
}, Km = "[object Boolean]", Jm = sr(), Qm = function(t) {
  return typeof t == "boolean" ? !0 : t === null || typeof t != "object" ? !1 : Jm && Symbol.toStringTag in t ? Hm(t) : zm(t) === Km;
}, Vo = { exports: {} }, Ym = Object.prototype.toString, Xm = us();
if (Xm) {
  var Zm = Symbol.prototype.toString, eb = /^Symbol\(.*\)$/, tb = function(t) {
    return typeof t.valueOf() != "symbol" ? !1 : eb.test(Zm.call(t));
  };
  Vo.exports = function(t) {
    if (typeof t == "symbol")
      return !0;
    if (Ym.call(t) !== "[object Symbol]")
      return !1;
    try {
      return tb(t);
    } catch {
      return !1;
    }
  };
} else
  Vo.exports = function(t) {
    return !1;
  };
var rb = Vo.exports, Bo = { exports: {} }, Lu = typeof BigInt < "u" && BigInt, nb = function() {
  return typeof Lu == "function" && typeof BigInt == "function" && typeof Lu(42) == "bigint" && typeof BigInt(42) == "bigint";
}, ib = nb();
if (ib) {
  var ab = BigInt.prototype.valueOf, ob = function(t) {
    try {
      return ab.call(t), !0;
    } catch {
    }
    return !1;
  };
  Bo.exports = function(t) {
    return t === null || typeof t > "u" || typeof t == "boolean" || typeof t == "string" || typeof t == "number" || typeof t == "symbol" || typeof t == "function" ? !1 : typeof t == "bigint" ? !0 : ob(t);
  };
} else
  Bo.exports = function(t) {
    return !1;
  };
var sb = Bo.exports, ub = Sc, lb = Lm, cb = Qm, fb = rb, pb = sb, db = function(t) {
  if (t == null || typeof t != "object" && typeof t != "function")
    return null;
  if (ub(t))
    return "String";
  if (lb(t))
    return "Number";
  if (cb(t))
    return "Boolean";
  if (fb(t))
    return "Symbol";
  if (pb(t))
    return "BigInt";
}, Ui = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, Wu = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, Gi;
Ui || (Gi = function(t) {
  return !1;
});
var qo = Ui ? Ui.prototype.has : null, Ya = Wu ? Wu.prototype.has : null;
!Gi && !qo && (Gi = function(t) {
  return !1;
});
var yb = Gi || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (qo.call(t, qo), Ya)
      try {
        Ya.call(t, Ya);
      } catch {
        return !0;
      }
    return t instanceof Ui;
  } catch {
  }
  return !1;
}, Uo = { exports: {} }, hb = Wt, Qc = dt, gb = hb("%WeakSet%", !0), Xa = Qc("WeakSet.prototype.has", !0);
if (Xa) {
  var Za = Qc("WeakMap.prototype.has", !0);
  Uo.exports = function(t) {
    if (!t || typeof t != "object")
      return !1;
    try {
      if (Xa(t, Xa), Za)
        try {
          Za(t, Za);
        } catch {
          return !0;
        }
      return t instanceof gb;
    } catch {
    }
    return !1;
  };
} else
  Uo.exports = function(t) {
    return !1;
  };
var vb = Uo.exports, mb = Oc, bb = Ac, Sb = yb, wb = vb, Ob = function(t) {
  if (t && typeof t == "object") {
    if (mb(t))
      return "Map";
    if (bb(t))
      return "Set";
    if (Sb(t))
      return "WeakMap";
    if (wb(t))
      return "WeakSet";
  }
  return !1;
}, Yc = Rc, Tb = Mc, Xc = dt, eo = Vc, Ab = Xc("Object.prototype.toString"), Zc = sr(), zu = typeof globalThis > "u" ? pt : globalThis, Pb = Tb(), Ib = Xc("String.prototype.slice"), ef = {}, to = Object.getPrototypeOf;
Zc && eo && to && Yc(Pb, function(e) {
  if (typeof zu[e] == "function") {
    var t = new zu[e]();
    if (Symbol.toStringTag in t) {
      var r = to(t), n = eo(r, Symbol.toStringTag);
      if (!n) {
        var i = to(r);
        n = eo(i, Symbol.toStringTag);
      }
      ef[e] = n.get;
    }
  }
});
var _b = function(t) {
  var r = !1;
  return Yc(ef, function(n, i) {
    if (!r)
      try {
        var a = n.call(t);
        a === i && (r = a);
      } catch {
      }
  }), r;
}, Eb = Lc, xb = function(t) {
  return Eb(t) ? !Zc || !(Symbol.toStringTag in t) ? Ib(Ab(t), 8, -1) : _b(t) : !1;
}, tf = yg, Ot = dt, Hu = Ng, jb = Wt, fn = Zg, Nb = Uv, Ku = Yv, Ju = mc, Qu = bc, Yu = Im, Xu = $m, Zu = Fm, el = Mm, tl = ss, rl = db, nl = Ob, il = xb, al = Ot("ArrayBuffer.prototype.byteLength", !0) || function(t) {
  return t.byteLength;
}, ol = Ot("SharedArrayBuffer.prototype.byteLength", !0), sl = Ot("Date.prototype.getTime"), ro = Object.getPrototypeOf, ul = Ot("Object.prototype.toString"), Li = jb("%Set%", !0), Go = Ot("Map.prototype.has", !0), Wi = Ot("Map.prototype.get", !0), ll = Ot("Map.prototype.size", !0), zi = Ot("Set.prototype.add", !0), rf = Ot("Set.prototype.delete", !0), Hi = Ot("Set.prototype.has", !0), Ai = Ot("Set.prototype.size", !0);
function cl(e, t, r, n) {
  for (var i = fn(e), a; (a = i.next()) && !a.done; )
    if (St(t, a.value, r, n))
      return rf(e, a.value), !0;
  return !1;
}
function nf(e) {
  if (typeof e > "u")
    return null;
  if (typeof e != "object")
    return typeof e == "symbol" ? !1 : typeof e == "string" || typeof e == "number" ? +e == +e : !0;
}
function $b(e, t, r, n, i, a) {
  var s = nf(r);
  if (s != null)
    return s;
  var u = Wi(t, s), c = tf({}, i, { strict: !1 });
  return typeof u > "u" && !Go(t, s) || !St(n, u, c, a) ? !1 : !Go(e, s) && St(n, u, c, a);
}
function kb(e, t, r) {
  var n = nf(r);
  return n ?? (Hi(t, n) && !Hi(e, n));
}
function fl(e, t, r, n, i, a) {
  for (var s = fn(e), u, c; (u = s.next()) && !u.done; )
    if (c = u.value, // eslint-disable-next-line no-use-before-define
    St(r, c, i, a) && St(n, Wi(t, c), i, a))
      return rf(e, c), !0;
  return !1;
}
function St(e, t, r, n) {
  var i = r || {};
  if (i.strict ? Ku(e, t) : e === t)
    return !0;
  var a = rl(e), s = rl(t);
  if (a !== s)
    return !1;
  if (!e || !t || typeof e != "object" && typeof t != "object")
    return i.strict ? Ku(e, t) : e == t;
  var u = n.has(e), c = n.has(t), y;
  if (u && c) {
    if (n.get(e) === n.get(t))
      return !0;
  } else
    y = {};
  return u || n.set(e, y), c || n.set(t, y), Fb(e, t, i, n);
}
function pl(e) {
  return !e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function Cb(e, t, r, n) {
  if (Ai(e) !== Ai(t))
    return !1;
  for (var i = fn(e), a = fn(t), s, u, c; (s = i.next()) && !s.done; )
    if (s.value && typeof s.value == "object")
      c || (c = new Li()), zi(c, s.value);
    else if (!Hi(t, s.value)) {
      if (r.strict || !kb(e, t, s.value))
        return !1;
      c || (c = new Li()), zi(c, s.value);
    }
  if (c) {
    for (; (u = a.next()) && !u.done; )
      if (u.value && typeof u.value == "object") {
        if (!cl(c, u.value, r.strict, n))
          return !1;
      } else if (!r.strict && !Hi(e, u.value) && !cl(c, u.value, r.strict, n))
        return !1;
    return Ai(c) === 0;
  }
  return !0;
}
function Db(e, t, r, n) {
  if (ll(e) !== ll(t))
    return !1;
  for (var i = fn(e), a = fn(t), s, u, c, y, d, v; (s = i.next()) && !s.done; )
    if (y = s.value[0], d = s.value[1], y && typeof y == "object")
      c || (c = new Li()), zi(c, y);
    else if (v = Wi(t, y), typeof v > "u" && !Go(t, y) || !St(d, v, r, n)) {
      if (r.strict || !$b(e, t, y, d, r, n))
        return !1;
      c || (c = new Li()), zi(c, y);
    }
  if (c) {
    for (; (u = a.next()) && !u.done; )
      if (y = u.value[0], v = u.value[1], y && typeof y == "object") {
        if (!fl(c, e, y, v, r, n))
          return !1;
      } else if (!r.strict && (!e.has(y) || !St(Wi(e, y), v, r, n)) && !fl(c, e, y, v, tf({}, r, { strict: !1 }), n))
        return !1;
    return Ai(c) === 0;
  }
  return !0;
}
function Fb(e, t, r, n) {
  var i, a;
  if (typeof e != typeof t || e == null || t == null || ul(e) !== ul(t) || Ju(e) !== Ju(t))
    return !1;
  var s = Qu(e), u = Qu(t);
  if (s !== u)
    return !1;
  var c = e instanceof Error, y = t instanceof Error;
  if (c !== y || (c || y) && (e.name !== t.name || e.message !== t.message))
    return !1;
  var d = Zu(e), v = Zu(t);
  if (d !== v || (d || v) && (e.source !== t.source || Hu(e) !== Hu(t)))
    return !1;
  var g = Xu(e), m = Xu(t);
  if (g !== m || (g || m) && sl(e) !== sl(t) || r.strict && ro && ro(e) !== ro(t))
    return !1;
  var S = il(e), E = il(t);
  if ((S || E) && S !== E)
    return !1;
  var k = pl(e), M = pl(t);
  if (k !== M)
    return !1;
  if (k || M) {
    if (e.length !== t.length)
      return !1;
    for (i = 0; i < e.length; i++)
      if (e[i] !== t[i])
        return !1;
    return !0;
  }
  var I = Yu(e), U = Yu(t);
  if (I !== U)
    return !1;
  if (I || U)
    return al(e) !== al(t) ? !1 : typeof Uint8Array == "function" && St(new Uint8Array(e), new Uint8Array(t), r, n);
  var w = el(e), j = el(t);
  if (w !== j)
    return !1;
  if (w || j)
    return ol(e) !== ol(t) ? !1 : typeof Uint8Array == "function" && St(new Uint8Array(e), new Uint8Array(t), r, n);
  if (typeof e != typeof t)
    return !1;
  var A = tl(e), G = tl(t);
  if (A.length !== G.length)
    return !1;
  for (A.sort(), G.sort(), i = A.length - 1; i >= 0; i--)
    if (A[i] != G[i])
      return !1;
  for (i = A.length - 1; i >= 0; i--)
    if (a = A[i], !St(e[a], t[a], r, n))
      return !1;
  var Z = nl(e), de = nl(t);
  return Z !== de ? !1 : Z === "Set" || de === "Set" ? Cb(e, t, r, n) : Z === "Map" ? Db(e, t, r, n) : !0;
}
var Rb = function(t, r, n) {
  return St(t, r, n, Nb());
};
const Mb = /* @__PURE__ */ Ji(Rb), Vb = (e) => {
  const t = of();
  return e ? (t.current === void 0 || !Mb(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, Bb = (e, t) => {
  const r = Vb(t), n = no(() => os(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, r), [e, r]), [i, a] = Oh(wh(n, t));
  return [no(() => {
    const u = [e.findMany.operationName];
    let c = i.data;
    if (c) {
      const d = on(i.data, u);
      if (d) {
        const v = Un(i, d);
        c = sn.boot(e, v, d);
      }
    }
    const y = Tr.errorIfDataAbsent(i, u);
    return { ...i, data: c, error: y };
  }, [e, i]), a];
}, qb = new xy(), zb = () => {
  const [{ data: e }] = Bb(qb.shopifyProduct);
  return /* @__PURE__ */ ws.jsx(ws.Fragment, { children: JSON.stringify(e) });
};
export {
  zb as Reader
};
