import * as dt from "react";
import te, { useMemo as _r, useContext as pc, useRef as _l, memo as Ol, useState as hc, useEffect as yr, createContext as Pl } from "react";
var b = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ki = { exports: {} }, An = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bo;
function Al() {
  if (Bo)
    return An;
  Bo = 1;
  var e = te, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(l, y, u) {
    var f, s = {}, h = null, p = null;
    u !== void 0 && (h = "" + u), y.key !== void 0 && (h = "" + y.key), y.ref !== void 0 && (p = y.ref);
    for (f in y)
      r.call(y, f) && !a.hasOwnProperty(f) && (s[f] = y[f]);
    if (l && l.defaultProps)
      for (f in y = l.defaultProps, y)
        s[f] === void 0 && (s[f] = y[f]);
    return { $$typeof: n, type: l, key: h, ref: p, props: s, _owner: i.current };
  }
  return An.Fragment = t, An.jsx = o, An.jsxs = o, An;
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
var Lo;
function Sl() {
  return Lo || (Lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = te, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), s = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d = Symbol.iterator, c = "@@iterator";
    function v(P) {
      if (P === null || typeof P != "object")
        return null;
      var C = d && P[d] || P[c];
      return typeof C == "function" ? C : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(P) {
      {
        for (var C = arguments.length, R = new Array(C > 1 ? C - 1 : 0), G = 1; G < C; G++)
          R[G - 1] = arguments[G];
        O("error", P, R);
      }
    }
    function O(P, C, R) {
      {
        var G = m.ReactDebugCurrentFrame, oe = G.getStackAddendum();
        oe !== "" && (C += "%s", R = R.concat([oe]));
        var pe = R.map(function(x) {
          return String(x);
        });
        pe.unshift("Warning: " + C), Function.prototype.apply.call(console[P], console, pe);
      }
    }
    var _ = !1, T = !1, A = !1, E = !1, S = !1, w;
    w = Symbol.for("react.module.reference");
    function I(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === r || P === a || S || P === i || P === u || P === f || E || P === p || _ || T || A || typeof P == "object" && P !== null && (P.$$typeof === h || P.$$typeof === s || P.$$typeof === o || P.$$typeof === l || P.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === w || P.getModuleId !== void 0));
    }
    function j(P, C, R) {
      var G = P.displayName;
      if (G)
        return G;
      var oe = C.displayName || C.name || "";
      return oe !== "" ? R + "(" + oe + ")" : R;
    }
    function k(P) {
      return P.displayName || "Context";
    }
    function B(P) {
      if (P == null)
        return null;
      if (typeof P.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof P == "function")
        return P.displayName || P.name || null;
      if (typeof P == "string")
        return P;
      switch (P) {
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
        case f:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case l:
            var C = P;
            return k(C) + ".Consumer";
          case o:
            var R = P;
            return k(R._context) + ".Provider";
          case y:
            return j(P, P.render, "ForwardRef");
          case s:
            var G = P.displayName || null;
            return G !== null ? G : B(P.type) || "Memo";
          case h: {
            var oe = P, pe = oe._payload, x = oe._init;
            try {
              return B(x(pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, F = 0, q, L, Y, le, W, ve, H;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function de() {
      {
        if (F === 0) {
          q = console.log, L = console.info, Y = console.warn, le = console.error, W = console.group, ve = console.groupCollapsed, H = console.groupEnd;
          var P = {
            configurable: !0,
            enumerable: !0,
            value: ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: P,
            log: P,
            warn: P,
            error: P,
            group: P,
            groupCollapsed: P,
            groupEnd: P
          });
        }
        F++;
      }
    }
    function ie() {
      {
        if (F--, F === 0) {
          var P = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, P, {
              value: q
            }),
            info: D({}, P, {
              value: L
            }),
            warn: D({}, P, {
              value: Y
            }),
            error: D({}, P, {
              value: le
            }),
            group: D({}, P, {
              value: W
            }),
            groupCollapsed: D({}, P, {
              value: ve
            }),
            groupEnd: D({}, P, {
              value: H
            })
          });
        }
        F < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = m.ReactCurrentDispatcher, Te;
    function me(P, C, R) {
      {
        if (Te === void 0)
          try {
            throw Error();
          } catch (oe) {
            var G = oe.stack.trim().match(/\n( *(at )?)/);
            Te = G && G[1] || "";
          }
        return `
` + Te + P;
      }
    }
    var Ne = !1, _e;
    {
      var at = typeof WeakMap == "function" ? WeakMap : Map;
      _e = new at();
    }
    function yt(P, C) {
      if (!P || Ne)
        return "";
      {
        var R = _e.get(P);
        if (R !== void 0)
          return R;
      }
      var G;
      Ne = !0;
      var oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = K.current, K.current = null, de();
      try {
        if (C) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (vt) {
              G = vt;
            }
            Reflect.construct(P, [], x);
          } else {
            try {
              x.call();
            } catch (vt) {
              G = vt;
            }
            P.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (vt) {
            G = vt;
          }
          P();
        }
      } catch (vt) {
        if (vt && G && typeof vt.stack == "string") {
          for (var X = vt.stack.split(`
`), Fe = G.stack.split(`
`), Pe = X.length - 1, Se = Fe.length - 1; Pe >= 1 && Se >= 0 && X[Pe] !== Fe[Se]; )
            Se--;
          for (; Pe >= 1 && Se >= 0; Pe--, Se--)
            if (X[Pe] !== Fe[Se]) {
              if (Pe !== 1 || Se !== 1)
                do
                  if (Pe--, Se--, Se < 0 || X[Pe] !== Fe[Se]) {
                    var tt = `
` + X[Pe].replace(" at new ", " at ");
                    return P.displayName && tt.includes("<anonymous>") && (tt = tt.replace("<anonymous>", P.displayName)), typeof P == "function" && _e.set(P, tt), tt;
                  }
                while (Pe >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        Ne = !1, K.current = pe, ie(), Error.prepareStackTrace = oe;
      }
      var zt = P ? P.displayName || P.name : "", ko = zt ? me(zt) : "";
      return typeof P == "function" && _e.set(P, ko), ko;
    }
    function er(P, C, R) {
      return yt(P, !1);
    }
    function Pn(P) {
      var C = P.prototype;
      return !!(C && C.isReactComponent);
    }
    function Ot(P, C, R) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return yt(P, Pn(P));
      if (typeof P == "string")
        return me(P);
      switch (P) {
        case u:
          return me("Suspense");
        case f:
          return me("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case y:
            return er(P.render);
          case s:
            return Ot(P.type, C, R);
          case h: {
            var G = P, oe = G._payload, pe = G._init;
            try {
              return Ot(pe(oe), C, R);
            } catch {
            }
          }
        }
      return "";
    }
    var wt = Object.prototype.hasOwnProperty, qt = {}, tr = m.ReactDebugCurrentFrame;
    function It(P) {
      if (P) {
        var C = P._owner, R = Ot(P.type, P._source, C ? C.type : null);
        tr.setExtraStackFrame(R);
      } else
        tr.setExtraStackFrame(null);
    }
    function N(P, C, R, G, oe) {
      {
        var pe = Function.call.bind(wt);
        for (var x in P)
          if (pe(P, x)) {
            var X = void 0;
            try {
              if (typeof P[x] != "function") {
                var Fe = Error((G || "React class") + ": " + R + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fe.name = "Invariant Violation", Fe;
              }
              X = P[x](C, x, G, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              X = Pe;
            }
            X && !(X instanceof Error) && (It(oe), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", R, x, typeof X), It(null)), X instanceof Error && !(X.message in qt) && (qt[X.message] = !0, It(oe), g("Failed %s type: %s", R, X.message), It(null));
          }
      }
    }
    var M = Array.isArray;
    function U(P) {
      return M(P);
    }
    function z(P) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, R = C && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return R;
      }
    }
    function V(P) {
      try {
        return Z(P), !1;
      } catch {
        return !0;
      }
    }
    function Z(P) {
      return "" + P;
    }
    function ge(P) {
      if (V(P))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", z(P)), Z(P);
    }
    var fe = m.ReactCurrentOwner, se = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Wt, Pt;
    Pt = {};
    function al(P) {
      if (wt.call(P, "ref")) {
        var C = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function ol(P) {
      if (wt.call(P, "key")) {
        var C = Object.getOwnPropertyDescriptor(P, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function ul(P, C) {
      if (typeof P.ref == "string" && fe.current && C && fe.current.stateNode !== C) {
        var R = B(fe.current.type);
        Pt[R] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(fe.current.type), P.ref), Pt[R] = !0);
      }
    }
    function cl(P, C) {
      {
        var R = function() {
          Oe || (Oe = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        R.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function sl(P, C) {
      {
        var R = function() {
          Wt || (Wt = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        R.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var ll = function(P, C, R, G, oe, pe, x) {
      var X = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: P,
        key: C,
        ref: R,
        props: x,
        // Record the component responsible for creating this element.
        _owner: pe
      };
      return X._store = {}, Object.defineProperty(X._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(X, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.defineProperty(X, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.freeze && (Object.freeze(X.props), Object.freeze(X)), X;
    };
    function dl(P, C, R, G, oe) {
      {
        var pe, x = {}, X = null, Fe = null;
        R !== void 0 && (ge(R), X = "" + R), ol(C) && (ge(C.key), X = "" + C.key), al(C) && (Fe = C.ref, ul(C, oe));
        for (pe in C)
          wt.call(C, pe) && !se.hasOwnProperty(pe) && (x[pe] = C[pe]);
        if (P && P.defaultProps) {
          var Pe = P.defaultProps;
          for (pe in Pe)
            x[pe] === void 0 && (x[pe] = Pe[pe]);
        }
        if (X || Fe) {
          var Se = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          X && cl(x, Se), Fe && sl(x, Se);
        }
        return ll(P, X, Fe, oe, G, fe.current, x);
      }
    }
    var ai = m.ReactCurrentOwner, Co = m.ReactDebugCurrentFrame;
    function Ht(P) {
      if (P) {
        var C = P._owner, R = Ot(P.type, P._source, C ? C.type : null);
        Co.setExtraStackFrame(R);
      } else
        Co.setExtraStackFrame(null);
    }
    var oi;
    oi = !1;
    function ui(P) {
      return typeof P == "object" && P !== null && P.$$typeof === n;
    }
    function jo() {
      {
        if (ai.current) {
          var P = B(ai.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function fl(P) {
      {
        if (P !== void 0) {
          var C = P.fileName.replace(/^.*[\\\/]/, ""), R = P.lineNumber;
          return `

Check your code at ` + C + ":" + R + ".";
        }
        return "";
      }
    }
    var Mo = {};
    function pl(P) {
      {
        var C = jo();
        if (!C) {
          var R = typeof P == "string" ? P : P.displayName || P.name;
          R && (C = `

Check the top-level render call using <` + R + ">.");
        }
        return C;
      }
    }
    function Ro(P, C) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var R = pl(C);
        if (Mo[R])
          return;
        Mo[R] = !0;
        var G = "";
        P && P._owner && P._owner !== ai.current && (G = " It was passed a child from " + B(P._owner.type) + "."), Ht(P), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, G), Ht(null);
      }
    }
    function No(P, C) {
      {
        if (typeof P != "object")
          return;
        if (U(P))
          for (var R = 0; R < P.length; R++) {
            var G = P[R];
            ui(G) && Ro(G, C);
          }
        else if (ui(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var oe = v(P);
          if (typeof oe == "function" && oe !== P.entries)
            for (var pe = oe.call(P), x; !(x = pe.next()).done; )
              ui(x.value) && Ro(x.value, C);
        }
      }
    }
    function hl(P) {
      {
        var C = P.type;
        if (C == null || typeof C == "string")
          return;
        var R;
        if (typeof C == "function")
          R = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === s))
          R = C.propTypes;
        else
          return;
        if (R) {
          var G = B(C);
          N(R, P.props, "prop", G, P);
        } else if (C.PropTypes !== void 0 && !oi) {
          oi = !0;
          var oe = B(C);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", oe || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yl(P) {
      {
        for (var C = Object.keys(P.props), R = 0; R < C.length; R++) {
          var G = C[R];
          if (G !== "children" && G !== "key") {
            Ht(P), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), Ht(null);
            break;
          }
        }
        P.ref !== null && (Ht(P), g("Invalid attribute `ref` supplied to `React.Fragment`."), Ht(null));
      }
    }
    function Do(P, C, R, G, oe, pe) {
      {
        var x = I(P);
        if (!x) {
          var X = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fe = fl(oe);
          Fe ? X += Fe : X += jo();
          var Pe;
          P === null ? Pe = "null" : U(P) ? Pe = "array" : P !== void 0 && P.$$typeof === n ? (Pe = "<" + (B(P.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof P, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, X);
        }
        var Se = dl(P, C, R, oe, pe);
        if (Se == null)
          return Se;
        if (x) {
          var tt = C.children;
          if (tt !== void 0)
            if (G)
              if (U(tt)) {
                for (var zt = 0; zt < tt.length; zt++)
                  No(tt[zt], P);
                Object.freeze && Object.freeze(tt);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              No(tt, P);
        }
        return P === r ? yl(Se) : hl(Se), Se;
      }
    }
    function vl(P, C, R) {
      return Do(P, C, R, !0);
    }
    function ml(P, C, R) {
      return Do(P, C, R, !1);
    }
    var gl = ml, bl = vl;
    Sn.Fragment = r, Sn.jsx = gl, Sn.jsxs = bl;
  }()), Sn;
}
process.env.NODE_ENV === "production" ? Ki.exports = Al() : Ki.exports = Sl();
var Or = Ki.exports;
const El = (e) => e && "connection" in e && e.connection && "endpoint" in e.connection;
var Rn;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(Rn || (Rn = {}));
const Tl = {
  DateTime(e) {
    return new Date(e);
  }
};
class wl {
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
      a != null && (t[r] = Tl[i](a));
    }
    return t;
  }
}
var en = {
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
let Qi = class extends Error {
  constructor(n, t, r, i, a, o, l) {
    super(n), this.name = "GraphQLError", this.message = n, a && (this.path = a), t && (this.nodes = Array.isArray(t) ? t : [t]), r && (this.source = r), i && (this.positions = i), o && (this.originalError = o);
    var y = l;
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
};
var ye, Q;
function Ee(e) {
  return new Qi(`Syntax Error: Unexpected token at ${Q} in ${e}`);
}
function Xe(e) {
  if (e.lastIndex = Q, e.test(ye))
    return ye.slice(Q, Q = e.lastIndex);
}
var nr = / +(?=[^\s])/y;
function Il(e) {
  for (var n = e.split(`
`), t = "", r = 0, i = 0, a = n.length - 1, o = 0; o < n.length; o++)
    nr.lastIndex = 0, nr.test(n[o]) && (o && (!r || nr.lastIndex < r) && (r = nr.lastIndex), i = i || o, a = o);
  for (var l = i; l <= a; l++)
    l !== i && (t += `
`), t += n[l].slice(r).replace(/\\"""/g, '"""');
  return t;
}
function J() {
  for (var e = 0 | ye.charCodeAt(Q++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | ye.charCodeAt(Q++))
    if (e === 35)
      for (; (e = ye.charCodeAt(Q++)) !== 10 && e !== 13; )
        ;
  Q--;
}
var vc = /[_A-Za-z]\w*/y;
function ft() {
  var e;
  if (e = Xe(vc))
    return {
      kind: "Name",
      value: e
    };
}
var Cl = /(?:null|true|false)/y, mc = /\$[_A-Za-z]\w*/y, jl = /-?\d+/y, Ml = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Rl = /\\/g, Nl = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Dl = /"(?:"|[^\r\n]*?[^\\]")/y;
function Pr(e) {
  var n, t;
  if (t = Xe(Cl))
    n = t === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: t === "true"
    };
  else if (!e && (t = Xe(mc)))
    n = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: t.slice(1)
      }
    };
  else if (t = Xe(jl)) {
    var r = t;
    (t = Xe(Ml)) ? n = {
      kind: "FloatValue",
      value: r + t
    } : n = {
      kind: "IntValue",
      value: r
    };
  } else if (t = Xe(vc))
    n = {
      kind: "EnumValue",
      value: t
    };
  else if (t = Xe(Nl))
    n = {
      kind: "StringValue",
      value: Il(t.slice(3, -3)),
      block: !0
    };
  else if (t = Xe(Dl))
    n = {
      kind: "StringValue",
      value: Rl.test(t) ? JSON.parse(t) : t.slice(1, -1),
      block: !1
    };
  else if (n = function(a) {
    var o;
    if (ye.charCodeAt(Q) === 91) {
      Q++, J();
      for (var l = []; o = Pr(a); )
        l.push(o);
      if (ye.charCodeAt(Q++) !== 93)
        throw Ee("ListValue");
      return J(), {
        kind: "ListValue",
        values: l
      };
    }
  }(e) || function(a) {
    if (ye.charCodeAt(Q) === 123) {
      Q++, J();
      for (var o = [], l; l = ft(); ) {
        if (J(), ye.charCodeAt(Q++) !== 58)
          throw Ee("ObjectField");
        J();
        var y = Pr(a);
        if (!y)
          throw Ee("ObjectField");
        o.push({
          kind: "ObjectField",
          name: l,
          value: y
        });
      }
      if (ye.charCodeAt(Q++) !== 125)
        throw Ee("ObjectValue");
      return J(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return n;
  return J(), n;
}
function gc(e) {
  var n = [];
  if (J(), ye.charCodeAt(Q) === 40) {
    Q++, J();
    for (var t; t = ft(); ) {
      if (J(), ye.charCodeAt(Q++) !== 58)
        throw Ee("Argument");
      J();
      var r = Pr(e);
      if (!r)
        throw Ee("Argument");
      n.push({
        kind: "Argument",
        name: t,
        value: r
      });
    }
    if (!n.length || ye.charCodeAt(Q++) !== 41)
      throw Ee("Argument");
    J();
  }
  return n;
}
function rn(e) {
  var n = [];
  for (J(); ye.charCodeAt(Q) === 64; ) {
    Q++;
    var t = ft();
    if (!t)
      throw Ee("Directive");
    J(), n.push({
      kind: "Directive",
      name: t,
      arguments: gc(e)
    });
  }
  return n;
}
function kl() {
  var e = ft();
  if (e) {
    J();
    var n;
    if (ye.charCodeAt(Q) === 58) {
      if (Q++, J(), n = e, !(e = ft()))
        throw Ee("Field");
      J();
    }
    return {
      kind: "Field",
      alias: n,
      name: e,
      arguments: gc(!1),
      directives: rn(!1),
      selectionSet: Vr()
    };
  }
}
function bc() {
  var e;
  if (J(), ye.charCodeAt(Q) === 91) {
    Q++, J();
    var n = bc();
    if (!n || ye.charCodeAt(Q++) !== 93)
      throw Ee("ListType");
    e = {
      kind: "ListType",
      type: n
    };
  } else if (e = ft())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw Ee("NamedType");
  return J(), ye.charCodeAt(Q) === 33 ? (Q++, J(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Bl = /on/y;
function _c() {
  if (Xe(Bl)) {
    J();
    var e = ft();
    if (!e)
      throw Ee("NamedType");
    return J(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Ll = /\.\.\./y;
function Ul() {
  if (Xe(Ll)) {
    J();
    var e = Q, n;
    if ((n = ft()) && n.value !== "on")
      return {
        kind: "FragmentSpread",
        name: n,
        directives: rn(!1)
      };
    Q = e;
    var t = _c(), r = rn(!1), i = Vr();
    if (!i)
      throw Ee("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: t,
      directives: r,
      selectionSet: i
    };
  }
}
function Vr() {
  var e;
  if (J(), ye.charCodeAt(Q) === 123) {
    Q++, J();
    for (var n = []; e = Ul() || kl(); )
      n.push(e);
    if (!n.length || ye.charCodeAt(Q++) !== 125)
      throw Ee("SelectionSet");
    return J(), {
      kind: "SelectionSet",
      selections: n
    };
  }
}
var Fl = /fragment/y;
function Vl() {
  if (Xe(Fl)) {
    J();
    var e = ft();
    if (!e)
      throw Ee("FragmentDefinition");
    J();
    var n = _c();
    if (!n)
      throw Ee("FragmentDefinition");
    var t = rn(!1), r = Vr();
    if (!r)
      throw Ee("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: n,
      directives: t,
      selectionSet: r
    };
  }
}
var Gl = /(?:query|mutation|subscription)/y;
function $l() {
  var e, n, t = [], r = [];
  (e = Xe(Gl)) && (J(), n = ft(), t = function() {
    var o, l = [];
    if (J(), ye.charCodeAt(Q) === 40) {
      for (Q++, J(); o = Xe(mc); ) {
        if (J(), ye.charCodeAt(Q++) !== 58)
          throw Ee("VariableDefinition");
        var y = bc(), u = void 0;
        if (ye.charCodeAt(Q) === 61 && (Q++, J(), !(u = Pr(!0))))
          throw Ee("VariableDefinition");
        J(), l.push({
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
          directives: rn(!0)
        });
      }
      if (ye.charCodeAt(Q++) !== 41)
        throw Ee("VariableDefinition");
      J();
    }
    return l;
  }(), r = rn(!1));
  var i = Vr();
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
function ql(e, n) {
  return ye = typeof e.body == "string" ? e.body : e, Q = 0, function() {
    var r;
    J();
    for (var i = []; r = Vl() || $l(); )
      i.push(r);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function Wl(e) {
  return JSON.stringify(e);
}
function Hl(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var nt = (e) => !(!e || !e.length), ke = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !nt(e.variableDefinitions) && !nt(e.directives))
      return ke.SelectionSet(e.selectionSet);
    var n = e.operation;
    return e.name && (n += " " + e.name.value), nt(e.variableDefinitions) && (e.name || (n += " "), n += "(" + e.variableDefinitions.map(ke.VariableDefinition).join(", ") + ")"), nt(e.directives) && (n += " " + e.directives.map(ke.Directive).join(" ")), n + " " + ke.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var n = ke.Variable(e.variable) + ": " + rt(e.type);
    return e.defaultValue && (n += " = " + rt(e.defaultValue)), nt(e.directives) && (n += " " + e.directives.map(ke.Directive).join(" ")), n;
  },
  Field(e) {
    var n = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (nt(e.arguments)) {
      var t = e.arguments.map(ke.Argument), r = n + "(" + t.join(", ") + ")";
      n = r.length > 80 ? n + `(
  ` + t.join(`
`).replace(/\n/g, `
  `) + `
)` : r;
    }
    return nt(e.directives) && (n += " " + e.directives.map(ke.Directive).join(" ")), e.selectionSet ? n + " " + ke.SelectionSet(e.selectionSet) : n;
  },
  StringValue: (e) => e.block ? Hl(e.value) : Wl(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(rt).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(ke.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + rt(e.value),
  Document: (e) => nt(e.definitions) ? e.definitions.map(rt).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(rt).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + rt(e.value),
  FragmentSpread(e) {
    var n = "..." + e.name.value;
    return nt(e.directives) && (n += " " + e.directives.map(ke.Directive).join(" ")), n;
  },
  InlineFragment(e) {
    var n = "...";
    return e.typeCondition && (n += " on " + e.typeCondition.name.value), nt(e.directives) && (n += " " + e.directives.map(ke.Directive).join(" ")), n + " " + rt(e.selectionSet);
  },
  FragmentDefinition(e) {
    var n = "fragment " + e.name.value;
    return n += " on " + e.typeCondition.name.value, nt(e.directives) && (n += " " + e.directives.map(ke.Directive).join(" ")), n + " " + rt(e.selectionSet);
  },
  Directive(e) {
    var n = "@" + e.name.value;
    return nt(e.arguments) && (n += "(" + e.arguments.map(ke.Argument).join(", ") + ")"), n;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + rt(e.type) + "]",
  NonNullType: (e) => rt(e.type) + "!"
};
function rt(e) {
  return ke[e.kind] ? ke[e.kind](e) : "";
}
var Pa = () => {
}, et = Pa;
function ct(e) {
  return {
    tag: 0,
    0: e
  };
}
function Hn(e) {
  return {
    tag: 1,
    0: e
  };
}
var zl = (e) => e;
function De(e) {
  return (n) => (t) => {
    var r = et;
    n((i) => {
      i === 0 ? t(0) : i.tag === 0 ? (r = i[0], t(i)) : e(i[0]) ? t(i) : r(0);
    });
  };
}
function nn(e) {
  return (n) => (t) => n((r) => {
    r === 0 || r.tag === 0 ? t(r) : t(Hn(e(r[0])));
  });
}
function Bn(e) {
  return (n) => (t) => {
    var r = [], i = et, a = !1, o = !1;
    n((l) => {
      o || (l === 0 ? (o = !0, r.length || t(0)) : l.tag === 0 ? i = l[0] : (a = !1, function(u) {
        var f = et;
        u((s) => {
          if (s === 0) {
            if (r.length) {
              var h = r.indexOf(f);
              h > -1 && (r = r.slice()).splice(h, 1), r.length || (o ? t(0) : a || (a = !0, i(0)));
            }
          } else
            s.tag === 0 ? (r.push(f = s[0]), f(0)) : r.length && (t(s), f(0));
        });
      }(e(l[0])), a || (a = !0, i(0))));
    }), t(ct((l) => {
      if (l === 1) {
        o || (o = !0, i(1));
        for (var y = 0, u = r, f = r.length; y < f; y++)
          u[y](1);
        r.length = 0;
      } else {
        !o && !a ? (a = !0, i(0)) : a = !1;
        for (var s = 0, h = r, p = r.length; s < p; s++)
          h[s](0);
      }
    }));
  };
}
function Kl(e) {
  return Bn(zl)(e);
}
function an(e) {
  return Kl(Jl(e));
}
function Aa(e) {
  return (n) => (t) => {
    var r = !1;
    n((i) => {
      if (!r)
        if (i === 0)
          r = !0, t(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          t(ct((o) => {
            o === 1 ? (r = !0, a(1), e()) : a(o);
          }));
        } else
          t(i);
    });
  };
}
function on(e) {
  return (n) => (t) => {
    var r = !1;
    n((i) => {
      if (!r)
        if (i === 0)
          r = !0, t(0);
        else if (i.tag === 0) {
          var a = i[0];
          t(ct((o) => {
            o === 1 && (r = !0), a(o);
          }));
        } else
          e(i[0]), t(i);
    });
  };
}
function Uo(e) {
  return (n) => (t) => n((r) => {
    r === 0 ? t(0) : r.tag === 0 ? (t(r), e()) : t(r);
  });
}
function Ln(e) {
  var n = [], t = et, r = !1;
  return (i) => {
    n.push(i), n.length === 1 && e((a) => {
      if (a === 0) {
        for (var o = 0, l = n, y = n.length; o < y; o++)
          l[o](0);
        n.length = 0;
      } else if (a.tag === 0)
        t = a[0];
      else {
        r = !1;
        for (var u = 0, f = n, s = n.length; u < s; u++)
          f[u](a);
      }
    }), i(ct((a) => {
      if (a === 1) {
        var o = n.indexOf(i);
        o > -1 && (n = n.slice()).splice(o, 1), n.length || t(1);
      } else
        r || (r = !0, t(0));
    }));
  };
}
function Fo(e) {
  return (n) => (t) => {
    var r = et, i = et, a = !1, o = !1, l = !1, y = !1;
    n((u) => {
      y || (u === 0 ? (y = !0, l || t(0)) : u.tag === 0 ? r = u[0] : (l && (i(1), i = et), a ? a = !1 : (a = !0, r(0)), function(s) {
        l = !0, s((h) => {
          l && (h === 0 ? (l = !1, y ? t(0) : a || (a = !0, r(0))) : h.tag === 0 ? (o = !1, (i = h[0])(0)) : (t(h), o ? o = !1 : i(0)));
        });
      }(e(u[0]))));
    }), t(ct((u) => {
      u === 1 ? (y || (y = !0, r(1)), l && (l = !1, i(1))) : (!y && !a && (a = !0, r(0)), l && !o && (o = !0, i(0)));
    }));
  };
}
function Oc(e) {
  return (n) => (t) => {
    var r = et, i = !1, a = 0;
    n((o) => {
      i || (o === 0 ? (i = !0, t(0)) : o.tag === 0 ? e <= 0 ? (i = !0, t(0), o[0](1)) : r = o[0] : a++ < e ? (t(o), !i && a >= e && (i = !0, t(0), r(1))) : t(o));
    }), t(ct((o) => {
      o === 1 && !i ? (i = !0, r(1)) : o === 0 && !i && a < e && r(0);
    }));
  };
}
function Sa(e) {
  return (n) => (t) => {
    var r = et, i = et, a = !1;
    n((o) => {
      a || (o === 0 ? (a = !0, i(1), t(0)) : o.tag === 0 ? (r = o[0], e((l) => {
        l === 0 || (l.tag === 0 ? (i = l[0])(0) : (a = !0, i(1), r(1), t(0)));
      })) : t(o));
    }), t(ct((o) => {
      o === 1 && !a ? (a = !0, r(1), i(1)) : a || r(0);
    }));
  };
}
function Pc(e, n) {
  return (t) => (r) => {
    var i = et, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, r(0)) : o.tag === 0 ? (i = o[0], r(o)) : e(o[0]) ? r(o) : (a = !0, n && r(o), r(0), i(1)));
    });
  };
}
function Ql(e) {
  return (n) => e()(n);
}
function Ac(e) {
  return (n) => {
    var t = e[Symbol.asyncIterator](), r = !1, i = !1, a = !1, o;
    n(ct(async (l) => {
      if (l === 1)
        r = !0, t.return && t.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !r; )
          if ((o = await t.next()).done)
            r = !0, t.return && await t.return(), n(0);
          else
            try {
              a = !1, n(Hn(o.value));
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
function Yl(e) {
  return e[Symbol.asyncIterator] ? Ac(e) : (n) => {
    var t = e[Symbol.iterator](), r = !1, i = !1, a = !1, o;
    n(ct((l) => {
      if (l === 1)
        r = !0, t.return && t.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !r; )
          if ((o = t.next()).done)
            r = !0, t.return && t.return(), n(0);
          else
            try {
              a = !1, n(Hn(o.value));
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
var Jl = Yl;
function Nn(e) {
  return (n) => {
    var t = !1;
    n(ct((r) => {
      r === 1 ? t = !0 : t || (t = !0, n(Hn(e)), n(0));
    }));
  };
}
function Ea(e) {
  return (n) => {
    var t = !1, r = e({
      next(i) {
        t || n(Hn(i));
      },
      complete() {
        t || (t = !0, n(0));
      }
    });
    n(ct((i) => {
      i === 1 && !t && (t = !0, r());
    }));
  };
}
function Vo() {
  var e, n;
  return {
    source: Ln(Ea((t) => (e = t.next, n = t.complete, Pa))),
    next(t) {
      e && e(t);
    },
    complete() {
      n && n();
    }
  };
}
function Go(e) {
  return Ea((n) => (e.then((t) => {
    Promise.resolve(t).then(() => {
      n.next(t), n.complete();
    });
  }), Pa));
}
function Bt(e) {
  return (n) => {
    var t = et, r = !1;
    return n((i) => {
      i === 0 ? r = !0 : i.tag === 0 ? (t = i[0])(0) : r || (e(i[0]), t(0));
    }), {
      unsubscribe() {
        r || (r = !0, t(1));
      }
    };
  };
}
function Xl(e) {
  Bt((n) => {
  })(e);
}
function Zl(e) {
  return new Promise((n) => {
    var t = et, r;
    e((i) => {
      i === 0 ? Promise.resolve(r).then(n) : i.tag === 0 ? (t = i[0])(0) : (r = i[0], t(0));
    });
  });
}
var xl = (...e) => {
  for (var n = e[0], t = 1, r = e.length; t < r; t++)
    n = e[t](n);
  return n;
}, ed = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new Qi(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new Qi(e);
class zn extends Error {
  constructor(n) {
    var t = (n.graphQLErrors || []).map(ed), r = ((i, a) => {
      var o = "";
      if (i)
        return `[Network] ${i.message}`;
      if (a)
        for (var l of a)
          o && (o += `
`), o += `[GraphQL] ${l.message}`;
      return o;
    })(n.networkError, t);
    super(r), this.name = "CombinedError", this.message = r, this.graphQLErrors = t, this.networkError = n.networkError, this.response = n.response;
  }
  toString() {
    return this.message;
  }
}
var Yi = (e, n) => {
  for (var t = 0 | (n || 5381), r = 0, i = 0 | e.length; r < i; r++)
    t = (t << 5) + t + e.charCodeAt(r);
  return t;
}, kt = /* @__PURE__ */ new Set(), $o = /* @__PURE__ */ new WeakMap(), Xt = (e) => {
  if (e === null || kt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Xt(e.toJSON());
  if (Array.isArray(e)) {
    var n = "[";
    for (var t of e)
      n.length > 1 && (n += ","), n += Xt(t) || "null";
    return n += "]";
  } else if (Sr !== un && e instanceof Sr || Er !== un && e instanceof Er)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var i = $o.get(e) || Math.random().toString(36).slice(2);
    return $o.set(e, i), Xt({
      __key: i
    });
  }
  kt.add(e);
  var a = "{";
  for (var o of r) {
    var l = Xt(e[o]);
    l && (a.length > 1 && (a += ","), a += Xt(o) + ":" + l);
  }
  return kt.delete(e), a += "}";
}, Ji = (e, n, t) => {
  if (!(t == null || typeof t != "object" || t.toJSON || kt.has(t)))
    if (Array.isArray(t))
      for (var r = 0, i = t.length; r < i; r++)
        Ji(e, `${n}.${r}`, t[r]);
    else if (t instanceof Sr || t instanceof Er)
      e.set(n, t);
    else {
      kt.add(t);
      for (var a of Object.keys(t))
        Ji(e, `${n}.${a}`, t[a]);
    }
}, Ar = (e) => (kt.clear(), Xt(e));
class un {
}
var Sr = typeof File < "u" ? File : un, Er = typeof Blob < "u" ? Blob : un, td = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, nd = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, rd = (e, n) => n % 2 == 0 ? e.replace(nd, `
`) : e, qo = (e) => e.split(td).map(rd).join("").trim(), Wo = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), Ta = (e) => {
  var n;
  return typeof e == "string" ? n = qo(e) : e.loc && vr.get(e.__key) === e ? n = e.loc.source.body : (n = Wo.get(e) || qo(rt(e)), Wo.set(e, n)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Ho = (e) => {
  var n = Yi(Ta(e));
  if (e.definitions) {
    var t = Ec(e);
    t && (n = Yi(`
# ${t}`, n));
  }
  return n;
}, Sc = (e) => {
  var n, t;
  return typeof e == "string" ? (n = Ho(e), t = vr.get(n) || ql(e)) : (n = e.__key || Ho(e), t = vr.get(n) || e), t.loc || Ta(t), t.__key = n, vr.set(n, t), t;
}, mr = (e, n, t) => {
  var r = n || {}, i = Sc(e), a = Ar(r), o = i.__key;
  return a !== "{}" && (o = Yi(a, o)), {
    key: o,
    query: i,
    variables: r,
    extensions: t
  };
}, Ec = (e) => {
  for (var n of e.definitions)
    if (n.kind === en.OPERATION_DEFINITION)
      return n.name ? n.name.value : void 0;
}, id = (e) => {
  for (var n of e.definitions)
    if (n.kind === en.OPERATION_DEFINITION)
      return n.operation;
}, Xi = (e, n, t) => {
  if (!("data" in n) && !("errors" in n))
    throw new Error("No Content");
  var r = e.kind === "subscription";
  return {
    operation: e,
    data: n.data,
    error: Array.isArray(n.errors) ? new zn({
      graphQLErrors: n.errors,
      response: t
    }) : void 0,
    extensions: n.extensions ? {
      ...n.extensions
    } : void 0,
    hasNext: n.hasNext == null ? r : n.hasNext,
    stale: !1
  };
}, Zi = (e, n) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var t of Object.keys(n))
      e[t] = Zi(e[t], n[t]);
    return e;
  }
  return n;
}, xi = (e, n, t) => {
  var r = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!n.extensions, a = {
    ...e.extensions,
    ...n.extensions
  }, o = n.incremental;
  "path" in n && (o = [n]);
  var l = {
    data: e.data
  };
  if (o)
    for (var y of o) {
      Array.isArray(y.errors) && r.push(...y.errors), y.extensions && (Object.assign(a, y.extensions), i = !0);
      for (var u = "data", f = l, s = 0, h = y.path.length; s < h; u = y.path[s++])
        f = f[u] = Array.isArray(f[u]) ? [...f[u]] : {
          ...f[u]
        };
      if (y.items)
        for (var p = +u >= 0 ? u : 0, d = 0, c = y.items.length; d < c; d++)
          f[p + d] = Zi(f[p + d], y.items[d]);
      else
        y.data !== void 0 && (f[u] = Zi(f[u], y.data));
    }
  else
    l.data = n.data || e.data, r = n.errors || r;
  return {
    operation: e.operation,
    data: l.data,
    error: r.length ? new zn({
      graphQLErrors: r,
      response: t
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: n.hasNext != null ? n.hasNext : e.hasNext,
    stale: !1
  };
}, Tc = (e, n, t) => ({
  operation: e,
  data: void 0,
  error: new zn({
    networkError: n,
    response: t
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function wc(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Ta(e.query),
    operationName: Ec(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var ad = (e, n) => {
  var t = e.kind === "query" && e.context.preferGetMethod;
  if (!t || !n)
    return e.context.url;
  var r = new URL(e.context.url);
  for (var i in n) {
    var a = n[i];
    a && r.searchParams.set(i, typeof a == "object" ? Ar(a) : a);
  }
  var o = r.toString();
  return o.length > 2047 && t !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, od = (e, n) => {
  if (n && !(e.kind === "query" && e.context.preferGetMethod)) {
    var t = Ar(n), r = ((l) => {
      var y = /* @__PURE__ */ new Map();
      return (Sr !== un || Er !== un) && (kt.clear(), Ji(y, "variables", l)), y;
    })(n.variables);
    if (r.size) {
      var i = new FormData();
      i.append("operations", t), i.append("map", Ar({
        ...[...r.keys()].map((l) => [l])
      }));
      var a = 0;
      for (var o of r.values())
        i.append("" + a++, o);
      return i;
    }
    return t;
  }
}, ud = (e, n) => {
  var t = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, r = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (r.headers)
    for (var i in r.headers)
      t[i.toLowerCase()] = r.headers[i];
  var a = od(e, n);
  return typeof a == "string" && !t["content-type"] && (t["content-type"] = "application/json"), {
    ...r,
    method: a ? "POST" : "GET",
    body: a,
    headers: t
  };
}, cd = typeof TextDecoder < "u" ? new TextDecoder() : null, sd = /boundary="?([^=";]+)"?/i, ld = /data: ?([^\n]+)/, zo = (e) => e.constructor.name === "Buffer" ? e.toString() : cd.decode(e);
async function* Ko(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var n of e.body)
      yield zo(n);
  else {
    var t = e.body.getReader(), r;
    try {
      for (; !(r = await t.read()).done; )
        yield zo(r.value);
    } finally {
      t.cancel();
    }
  }
}
async function* Qo(e, n) {
  var t = "", r;
  for await (var i of e)
    for (t += i; (r = t.indexOf(n)) > -1; )
      yield t.slice(0, r), t = t.slice(r + n.length);
}
async function* dd(e, n, t) {
  var r = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(n, t)).headers.get("Content-Type") || "", l;
    if (/multipart\/mixed/i.test(o))
      l = async function* (f, s) {
        var h = f.match(sd), p = "--" + (h ? h[1] : "-"), d = !0, c;
        for await (var v of Qo(Ko(s), `\r
` + p)) {
          if (d) {
            d = !1;
            var m = v.indexOf(p);
            if (m > -1)
              v = v.slice(m + p.length);
            else
              continue;
          }
          try {
            yield c = JSON.parse(v.slice(v.indexOf(`\r
\r
`) + 4));
          } catch (g) {
            if (!c)
              throw g;
          }
          if (c && c.hasNext === !1)
            break;
        }
        c && c.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o, a);
    else if (/text\/event-stream/i.test(o))
      l = async function* (f) {
        var s;
        for await (var h of Qo(Ko(f), `

`)) {
          var p = h.match(ld);
          if (p) {
            var d = p[1];
            try {
              yield s = JSON.parse(d);
            } catch (c) {
              if (!s)
                throw c;
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
      l = async function* (f) {
        yield JSON.parse(await f.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var y of l)
      i = i ? xi(i, y, a) : Xi(e, y, a), r = !1, yield i, r = !0;
    i || (yield i = Xi(e, {}, a));
  } catch (u) {
    if (!r)
      throw u;
    yield Tc(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : u, a);
  }
}
function fd(e, n, t) {
  var r;
  return typeof AbortController < "u" && (t.signal = (r = new AbortController()).signal), Aa(() => {
    r && r.abort();
  })(De((i) => !!i)(Ac(dd(e, n, t))));
}
var ea = (e, n) => {
  if (Array.isArray(e))
    for (var t of e)
      ea(t, n);
  else if (typeof e == "object" && e !== null)
    for (var r in e)
      r === "__typename" && typeof e[r] == "string" ? n.add(e[r]) : ea(e[r], n);
  return n;
}, ta = (e) => {
  var n = !1;
  if ("definitions" in e) {
    var t = [];
    for (var r of e.definitions) {
      var i = ta(r);
      n = n || i !== r, t.push(i);
    }
    if (n)
      return {
        ...e,
        definitions: t
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === en.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var l of e.selectionSet.selections || []) {
        o = o || l.kind === en.FIELD && l.name.value === "__typename" && !l.alias;
        var y = ta(l);
        n = n || y !== l, a.push(y);
      }
      if (o || (n = !0, a.push({
        kind: en.FIELD,
        name: {
          kind: en.NAME,
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
}, Yo = /* @__PURE__ */ new Map(), pd = (e) => {
  var n = Sc(e), t = Yo.get(n.__key);
  return t || (Yo.set(n.__key, t = ta(n)), Object.defineProperty(t, "__key", {
    value: n.__key,
    enumerable: !1
  })), t;
}, na = (e, n) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => na(i));
  if (e && typeof e == "object" && (n || "__typename" in e)) {
    var t = {};
    for (var r in e)
      r === "__typename" ? Object.defineProperty(t, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : t[r] = na(e[r]);
    return t;
  } else
    return e;
};
function Jo(e) {
  var n = (t) => e(t);
  return n.toPromise = () => Zl(Oc(1)(De((t) => !t.stale && !t.hasNext)(n))), n.then = (t, r) => n.toPromise().then(t, r), n.subscribe = (t) => Bt(t)(n), n;
}
function cn(e, n, t) {
  return {
    ...n,
    kind: e,
    context: n.context ? {
      ...n.context,
      ...t
    } : t || n.context
  };
}
var Xo = (e, n) => cn(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...n
  }
}), hd = () => {
}, ci = ({ kind: e }) => e !== "mutation" && e !== "query", yd = ({ forward: e, client: n, dispatchDebug: t }) => {
  var r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (l) => {
    var y = cn(l.kind, l);
    return y.query = pd(l.query), y;
  }, o = (l) => l.kind === "query" && l.context.requestPolicy !== "network-only" && (l.context.requestPolicy === "cache-only" || r.has(l.key));
  return (l) => {
    var y = nn((f) => {
      var s = r.get(f.key);
      process.env.NODE_ENV !== "production" && t({
        operation: f,
        ...s ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var h = s;
      return process.env.NODE_ENV !== "production" && (h = {
        ...h,
        operation: process.env.NODE_ENV !== "production" ? Xo(f, {
          cacheOutcome: s ? "hit" : "miss"
        }) : f
      }), f.context.requestPolicy === "cache-and-network" && (h.stale = !0, Zo(n, f)), h;
    })(De((f) => !ci(f) && o(f))(l)), u = on((f) => {
      var { operation: s } = f;
      if (s) {
        var h = s.context.additionalTypenames || [];
        if (f.operation.kind !== "subscription" && (h = ((A) => [...ea(A, /* @__PURE__ */ new Set())])(f.data).concat(h)), f.operation.kind === "mutation" || f.operation.kind === "subscription") {
          var p = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && t({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${h}`,
            operation: s,
            data: {
              typenames: h,
              response: f
            },
            source: "cacheExchange"
          });
          for (var d = 0; d < h.length; d++) {
            var c = h[d], v = i.get(c);
            v || i.set(c, v = /* @__PURE__ */ new Set());
            for (var m of v.values())
              p.add(m);
            v.clear();
          }
          for (var g of p.values())
            r.has(g) && (s = r.get(g).operation, r.delete(g), Zo(n, s));
        } else if (s.kind === "query" && f.data) {
          r.set(s.key, f);
          for (var O = 0; O < h.length; O++) {
            var _ = h[O], T = i.get(_);
            T || i.set(_, T = /* @__PURE__ */ new Set()), T.add(s.key);
          }
        }
      }
    })(e(De((f) => f.kind !== "query" || f.context.requestPolicy !== "cache-only")(nn((f) => process.env.NODE_ENV !== "production" ? Xo(f, {
      cacheOutcome: "miss"
    }) : f)(an([nn(a)(De((f) => !ci(f) && !o(f))(l)), De((f) => ci(f))(l)])))));
    return an([y, u]);
  };
}, Zo = (e, n) => e.reexecuteOperation(cn(n.kind, n, {
  requestPolicy: "network-only"
})), xo = ({ forwardSubscription: e, enableAllOperations: n, isSubscriptionOperation: t }) => ({ client: r, forward: i }) => {
  var a = t || ((o) => o.kind === "subscription" || !!n && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var l = Bn((u) => {
      var { key: f } = u, s = De((h) => h.kind === "teardown" && h.key === f)(o);
      return Sa(s)(((h) => {
        var p = e(wc(h), h);
        return Ea(({ next: d, complete: c }) => {
          var v = !1, m, g;
          return Promise.resolve().then(() => {
            v || (m = p.subscribe({
              next(O) {
                d(g = g ? xi(g, O) : Xi(h, O));
              },
              error(O) {
                d(Tc(h, O));
              },
              complete() {
                v || (v = !0, h.kind === "subscription" && r.reexecuteOperation(cn("teardown", h, h.context)), g && g.hasNext && d(xi(g, {
                  hasNext: !1
                })), c());
              }
            }));
          }), () => {
            v = !0, m && m.unsubscribe();
          };
        });
      })(u));
    })(De((u) => u.kind !== "teardown" && a(u))(o)), y = i(De((u) => u.kind === "teardown" || !a(u))(o));
    return an([l, y]);
  };
}, vd = ({ forward: e, dispatchDebug: n }) => (t) => {
  var r = Bn((a) => {
    var o = wc(a), l = ad(a, o), y = ud(a, o);
    process.env.NODE_ENV !== "production" && n({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: a,
      data: {
        url: l,
        fetchOptions: y
      },
      source: "fetchExchange"
    });
    var u = Sa(De((f) => f.kind === "teardown" && f.key === a.key)(t))(fd(a, l, y));
    return process.env.NODE_ENV !== "production" ? on((f) => {
      var s = f.data ? void 0 : f.error;
      process.env.NODE_ENV !== "production" && n({
        type: s ? "fetchError" : "fetchSuccess",
        message: `A ${s ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: l,
          fetchOptions: y,
          value: s || f
        },
        source: "fetchExchange"
      });
    })(u) : u;
  })(De((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(t)), i = e(De((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(t));
  return an([r, i]);
}, md = (e) => ({ client: n, forward: t, dispatchDebug: r }) => e.reduceRight((i, a) => {
  var o = !1;
  return a({
    client: n,
    forward(l) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return Ln(i(Ln(l)));
    },
    dispatchDebug(l) {
      process.env.NODE_ENV !== "production" && r({
        timestamp: Date.now(),
        source: a.name,
        ...l
      });
    }
  });
}, t), Ic = ({ onOperation: e, onResult: n, onError: t }) => ({ forward: r }) => (i) => Bn((a) => {
  t && a.error && t(a.error, a.operation);
  var o = n && n(a) || a;
  return "then" in o ? Go(o) : Nn(o);
})(r(Bn((a) => {
  var o = e && e(a) || a;
  return "then" in o ? Go(o) : Nn(o);
})(i))), gd = ({ dispatchDebug: e }) => (n) => (process.env.NODE_ENV !== "production" && (n = on((t) => {
  if (t.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var r = `No exchange has handled operations of kind "${t.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: r,
      operation: t,
      source: "fallbackExchange"
    }), console.warn(r);
  }
})(n)), De((t) => !1)(n)), eu = function e(n) {
  if (process.env.NODE_ENV !== "production" && !n.url)
    throw new Error("You are creating an urql-client without a url.");
  var t = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], l = {
    url: n.url,
    fetchSubscriptions: n.fetchSubscriptions,
    fetchOptions: n.fetchOptions,
    fetch: n.fetch,
    preferGetMethod: !!n.preferGetMethod,
    requestPolicy: n.requestPolicy || "cache-first"
  }, y = Vo();
  function u(_) {
    (_.kind === "mutation" || _.kind === "teardown" || !a.has(_.key)) && (_.kind === "teardown" ? a.delete(_.key) : _.kind !== "mutation" && a.add(_.key), y.next(_));
  }
  var f = !1;
  function s(_) {
    if (_ && u(_), !f) {
      for (f = !0; f && (_ = o.shift()); )
        u(_);
      f = !1;
    }
  }
  var h = (_) => {
    var T = Sa(De((A) => A.kind === "teardown" && A.key === _.key)(y.source))(De((A) => A.operation.kind === _.kind && A.operation.key === _.key && (!A.operation.context._instance || A.operation.context._instance === _.context._instance))(O));
    return _.kind !== "query" ? T = Pc((A) => !!A.hasNext, !0)(T) : T = Fo((A) => {
      var E = Nn(A);
      return A.stale || A.hasNext ? E : an([E, nn(() => (A.stale = !0, A))(Oc(1)(De((S) => S.key === _.key)(y.source)))]);
    })(T), _.kind !== "mutation" ? T = Aa(() => {
      a.delete(_.key), r.delete(_.key), i.delete(_.key), f = !1;
      for (var A = o.length - 1; A >= 0; A--)
        o[A].key === _.key && o.splice(A, 1);
      u(cn("teardown", _, _.context));
    })(on((A) => {
      if (A.stale) {
        for (var E of o)
          if (E.key === A.operation.key) {
            a.delete(E.key);
            break;
          }
      } else
        A.hasNext || a.delete(_.key);
      r.set(_.key, A);
    })(T)) : T = Uo(() => {
      u(_);
    })(T), n.maskTypename && (T = nn((A) => ({
      ...A,
      data: na(A.data, !0)
    }))(T)), Ln(T);
  }, p = this instanceof e ? this : Object.create(e.prototype), d = Object.assign(p, {
    suspense: !!n.suspense,
    operations$: y.source,
    reexecuteOperation(_) {
      _.kind === "teardown" ? s(_) : (_.kind === "mutation" || i.has(_.key)) && (o.push(_), Promise.resolve().then(s));
    },
    createRequestOperation(_, T, A) {
      A || (A = {});
      var E;
      if (process.env.NODE_ENV !== "production" && _ !== "teardown" && (E = id(T.query)) !== _)
        throw new Error(`Expected operation of type "${_}" but found "${E}"`);
      return cn(_, T, {
        _instance: _ === "mutation" ? t = t + 1 | 0 : void 0,
        ...l,
        ...A,
        requestPolicy: A.requestPolicy || l.requestPolicy,
        suspense: A.suspense || A.suspense !== !1 && d.suspense
      });
    },
    executeRequestOperation(_) {
      return _.kind === "mutation" ? Jo(h(_)) : Jo(Ql(() => {
        var T = i.get(_.key);
        T || i.set(_.key, T = h(_)), T = Uo(() => {
          s(_);
        })(T);
        var A = r.get(_.key);
        return _.kind === "query" && A && (A.stale || A.hasNext) ? Fo(Nn)(an([T, De((E) => E === r.get(_.key))(Nn(A))])) : T;
      }));
    },
    executeQuery(_, T) {
      var A = d.createRequestOperation("query", _, T);
      return d.executeRequestOperation(A);
    },
    executeSubscription(_, T) {
      var A = d.createRequestOperation("subscription", _, T);
      return d.executeRequestOperation(A);
    },
    executeMutation(_, T) {
      var A = d.createRequestOperation("mutation", _, T);
      return d.executeRequestOperation(A);
    },
    readQuery(_, T, A) {
      var E = null;
      return Bt((S) => {
        E = S;
      })(d.query(_, T, A)).unsubscribe(), E;
    },
    query: (_, T, A) => d.executeQuery(mr(_, T), A),
    subscription: (_, T, A) => d.executeSubscription(mr(_, T), A),
    mutation: (_, T, A) => d.executeMutation(mr(_, T), A)
  }), c = hd;
  if (process.env.NODE_ENV !== "production") {
    var { next: v, source: m } = Vo();
    d.subscribeToDebugTarget = (_) => Bt(_)(m), c = v;
  }
  var g = md(n.exchanges), O = Ln(g({
    client: d,
    dispatchDebug: c,
    forward: gd({
      dispatchDebug: c
    })
  })(y.source));
  return Xl(O), d;
};
function $e(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Rt(e) {
  return $e(e) === "object";
}
function bd(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((n) => "message" in n);
}
function tu(e, n) {
  return e.length < 124 ? e : n;
}
const _d = "graphql-transport-ws";
var Ge;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(Ge || (Ge = {}));
var Ae;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(Ae || (Ae = {}));
function Cc(e) {
  if (!Rt(e))
    throw new Error(`Message is expected to be an object, but got ${$e(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${$e(e.type)}`);
  switch (e.type) {
    case Ae.ConnectionInit:
    case Ae.ConnectionAck:
    case Ae.Ping:
    case Ae.Pong: {
      if (e.payload != null && !Rt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case Ae.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${$e(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Rt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${$e(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${$e(e.payload.query)}`);
      if (e.payload.variables != null && !Rt(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${$e(e.payload.variables)}`);
      if (e.payload.operationName != null && $e(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${$e(e.payload.operationName)}`);
      if (e.payload.extensions != null && !Rt(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${$e(e.payload.extensions)}`);
      break;
    }
    case Ae.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${$e(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Rt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${$e(e.payload)}`);
      break;
    }
    case Ae.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${$e(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!bd(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case Ae.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${$e(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Od(e, n) {
  return Cc(typeof e == "string" ? JSON.parse(e, n) : e);
}
function En(e, n) {
  return Cc(e), JSON.stringify(e, n);
}
function Pd(e) {
  const {
    url: n,
    connectionParams: t,
    lazy: r = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: l,
    connectionAckWaitTimeout: y = 0,
    retryAttempts: u = 5,
    retryWait: f = async function(F) {
      let q = 1e3;
      for (let L = 0; L < F; L++)
        q *= 2;
      await new Promise((L) => setTimeout(L, q + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: s = rr,
    isFatalConnectionProblem: h,
    on: p,
    webSocketImpl: d,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: c = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (F) => {
        const q = Math.random() * 16 | 0;
        return (F == "x" ? q : q & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: v,
    jsonMessageReviver: m
  } = e;
  let g;
  if (d) {
    if (!Sd(d))
      throw new Error("Invalid WebSocket implementation provided");
    g = d;
  } else
    typeof WebSocket < "u" ? g = WebSocket : typeof global < "u" ? g = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (g = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!g)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const O = g, _ = (() => {
    const D = (() => {
      const q = {};
      return {
        on(L, Y) {
          return q[L] = Y, () => {
            delete q[L];
          };
        },
        emit(L) {
          var Y;
          "id" in L && ((Y = q[L.id]) === null || Y === void 0 || Y.call(q, L));
        }
      };
    })(), F = {
      connecting: p != null && p.connecting ? [p.connecting] : [],
      opened: p != null && p.opened ? [p.opened] : [],
      connected: p != null && p.connected ? [p.connected] : [],
      ping: p != null && p.ping ? [p.ping] : [],
      pong: p != null && p.pong ? [p.pong] : [],
      message: p != null && p.message ? [D.emit, p.message] : [D.emit],
      closed: p != null && p.closed ? [p.closed] : [],
      error: p != null && p.error ? [p.error] : []
    };
    return {
      onMessage: D.on,
      on(q, L) {
        const Y = F[q];
        return Y.push(L), () => {
          Y.splice(Y.indexOf(L), 1);
        };
      },
      emit(q, ...L) {
        for (const Y of [...F[q]])
          Y(...L);
      }
    };
  })();
  function T(D) {
    const F = [
      // errors are fatal and more critical than close events, throw them first
      _.on("error", (q) => {
        F.forEach((L) => L()), D(q);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      _.on("closed", (q) => {
        F.forEach((L) => L()), D(q);
      })
    ];
  }
  let A, E = 0, S, w = !1, I = 0, j = !1;
  async function k() {
    clearTimeout(S);
    const [D, F] = await (A ?? (A = new Promise((Y, le) => (async () => {
      if (w) {
        if (await f(I), !E)
          return A = void 0, le({ code: 1e3, reason: "All Subscriptions Gone" });
        I++;
      }
      _.emit("connecting");
      const W = new O(typeof n == "function" ? await n() : n, _d);
      let ve, H;
      function ee() {
        isFinite(o) && o > 0 && (clearTimeout(H), H = setTimeout(() => {
          W.readyState === O.OPEN && (W.send(En({ type: Ae.Ping })), _.emit("ping", !1, void 0));
        }, o));
      }
      T((ie) => {
        A = void 0, clearTimeout(ve), clearTimeout(H), le(ie), rr(ie) && ie.code === 4499 && (W.close(4499, "Terminated"), W.onerror = null, W.onclose = null);
      }), W.onerror = (ie) => _.emit("error", ie), W.onclose = (ie) => _.emit("closed", ie), W.onopen = async () => {
        try {
          _.emit("opened", W);
          const ie = typeof t == "function" ? await t() : t;
          if (W.readyState !== O.OPEN)
            return;
          W.send(En(ie ? {
            type: Ae.ConnectionInit,
            payload: ie
          } : {
            type: Ae.ConnectionInit
            // payload is completely absent if not provided
          }, v)), isFinite(y) && y > 0 && (ve = setTimeout(() => {
            W.close(Ge.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, y)), ee();
        } catch (ie) {
          _.emit("error", ie), W.close(Ge.InternalClientError, tu(ie instanceof Error ? ie.message : new Error(ie).message, "Internal client error"));
        }
      };
      let de = !1;
      W.onmessage = ({ data: ie }) => {
        try {
          const K = Od(ie, m);
          if (_.emit("message", K), K.type === "ping" || K.type === "pong") {
            _.emit(K.type, !0, K.payload), K.type === "pong" ? ee() : l || (W.send(En(K.payload ? {
              type: Ae.Pong,
              payload: K.payload
            } : {
              type: Ae.Pong
              // payload is completely absent if not provided
            })), _.emit("pong", !1, K.payload));
            return;
          }
          if (de)
            return;
          if (K.type !== Ae.ConnectionAck)
            throw new Error(`First message cannot be of type ${K.type}`);
          clearTimeout(ve), de = !0, _.emit("connected", W, K.payload), w = !1, I = 0, Y([
            W,
            new Promise((Te, me) => T(me))
          ]);
        } catch (K) {
          W.onmessage = null, _.emit("error", K), W.close(Ge.BadResponse, tu(K instanceof Error ? K.message : new Error(K).message, "Bad response"));
        }
      };
    })())));
    D.readyState === O.CLOSING && await F;
    let q = () => {
    };
    const L = new Promise((Y) => q = Y);
    return [
      D,
      q,
      Promise.race([
        // wait for
        L.then(() => {
          if (!E) {
            const Y = () => D.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? S = setTimeout(() => {
              D.readyState === O.OPEN && Y();
            }, a) : Y();
          }
        }),
        // or
        F
      ])
    ];
  }
  function B(D) {
    if (rr(D) && (Ad(D.code) || [
      Ge.InternalServerError,
      Ge.InternalClientError,
      Ge.BadRequest,
      Ge.BadResponse,
      Ge.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      Ge.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      Ge.SubscriberAlreadyExists,
      Ge.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(D.code)))
      throw D;
    if (j)
      return !1;
    if (rr(D) && D.code === 1e3)
      return E > 0;
    if (!u || I >= u || !s(D) || h != null && h(D))
      throw D;
    return w = !0;
  }
  return r || (async () => {
    for (E++; ; )
      try {
        const [, , D] = await k();
        await D;
      } catch (D) {
        try {
          if (!B(D))
            return;
        } catch (F) {
          return i == null ? void 0 : i(F);
        }
      }
  })(), {
    on: _.on,
    subscribe(D, F) {
      const q = c(D);
      let L = !1, Y = !1, le = () => {
        E--, L = !0;
      };
      return (async () => {
        for (E++; ; )
          try {
            const [W, ve, H] = await k();
            if (L)
              return ve();
            const ee = _.onMessage(q, (de) => {
              switch (de.type) {
                case Ae.Next: {
                  F.next(de.payload);
                  return;
                }
                case Ae.Error: {
                  Y = !0, L = !0, F.error(de.payload), le();
                  return;
                }
                case Ae.Complete: {
                  L = !0, le();
                  return;
                }
              }
            });
            W.send(En({
              id: q,
              type: Ae.Subscribe,
              payload: D
            }, v)), le = () => {
              !L && W.readyState === O.OPEN && W.send(En({
                id: q,
                type: Ae.Complete
              }, v)), E--, L = !0, ve();
            }, await H.finally(ee);
            return;
          } catch (W) {
            if (!B(W))
              return;
          }
      })().then(() => {
        Y || F.complete();
      }).catch((W) => {
        F.error(W);
      }), () => {
        L || le();
      };
    },
    async dispose() {
      if (j = !0, A) {
        const [D] = await A;
        D.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      A && _.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function rr(e) {
  return Rt(e) && "code" in e && "reason" in e;
}
function Ad(e) {
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
function Sd(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
function Ed(e) {
  return typeof e == "object" && e !== null;
}
function Td(e, n) {
  if (!!!e)
    throw new Error(
      n ?? "Unexpected invariant triggered."
    );
}
const wd = /\r\n|[\n\r]/g;
function ra(e, n) {
  let t = 0, r = 1;
  for (const i of e.body.matchAll(wd)) {
    if (typeof i.index == "number" || Td(!1), i.index >= n)
      break;
    t = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: n + 1 - t
  };
}
function Id(e) {
  return jc(
    e.source,
    ra(e.source, e.start)
  );
}
function jc(e, n) {
  const t = e.locationOffset.column - 1, r = "".padStart(t) + e.body, i = n.line - 1, a = e.locationOffset.line - 1, o = n.line + a, l = n.line === 1 ? t : 0, y = n.column + l, u = `${e.name}:${o}:${y}
`, f = r.split(/\r\n|[\n\r]/g), s = f[i];
  if (s.length > 120) {
    const h = Math.floor(y / 80), p = y % 80, d = [];
    for (let c = 0; c < s.length; c += 80)
      d.push(s.slice(c, c + 80));
    return u + nu([
      [`${o} |`, d[0]],
      ...d.slice(1, h + 1).map((c) => ["|", c]),
      ["|", "^".padStart(p)],
      ["|", d[h + 1]]
    ]);
  }
  return u + nu([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, f[i - 1]],
    [`${o} |`, s],
    ["|", "^".padStart(y)],
    [`${o + 1} |`, f[i + 1]]
  ]);
}
function nu(e) {
  const n = e.filter(([r, i]) => i !== void 0), t = Math.max(...n.map(([r]) => r.length));
  return n.map(([r, i]) => r.padStart(t) + (i ? " " + i : "")).join(`
`);
}
function Cd(e) {
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
class Tr extends Error {
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
    const { nodes: o, source: l, positions: y, path: u, originalError: f, extensions: s } = Cd(t);
    super(n), this.name = "GraphQLError", this.path = u ?? void 0, this.originalError = f ?? void 0, this.nodes = ru(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const h = ru(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((d) => d.loc).filter((d) => d != null)
    );
    this.source = l ?? (h == null || (i = h[0]) === null || i === void 0 ? void 0 : i.source), this.positions = y ?? (h == null ? void 0 : h.map((d) => d.start)), this.locations = y && l ? y.map((d) => ra(l, d)) : h == null ? void 0 : h.map((d) => ra(d.source, d.start));
    const p = Ed(
      f == null ? void 0 : f.extensions
    ) ? f == null ? void 0 : f.extensions : void 0;
    this.extensions = (a = s ?? p) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }), f != null && f.stack ? Object.defineProperty(this, "stack", {
      value: f.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Tr) : Object.defineProperty(this, "stack", {
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

` + Id(t.loc));
    else if (this.source && this.locations)
      for (const t of this.locations)
        n += `

` + jc(this.source, t);
    return n;
  }
  toJSON() {
    const n = {
      message: this.message
    };
    return this.locations != null && (n.locations = this.locations), this.path != null && (n.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (n.extensions = this.extensions), n;
  }
}
function ru(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
var Zt = null;
typeof WebSocket < "u" ? Zt = WebSocket : typeof MozWebSocket < "u" ? Zt = MozWebSocket : typeof global < "u" ? Zt = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Zt = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Zt = self.WebSocket || self.MozWebSocket);
const jd = Zt;
function Ye(e) {
  if (typeof e != "object")
    return e;
  var n, t, r = Object.prototype.toString.call(e);
  if (r === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      t = new e.constructor();
      for (n in e)
        e.hasOwnProperty(n) && t[n] !== e[n] && (t[n] = Ye(e[n]));
    } else {
      t = {};
      for (n in e)
        n === "__proto__" ? Object.defineProperty(t, n, {
          value: Ye(e[n]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : t[n] = Ye(e[n]);
    }
    return t;
  }
  if (r === "[object Array]") {
    for (n = e.length, t = Array(n); n--; )
      t[n] = Ye(e[n]);
    return t;
  }
  return r === "[object Set]" ? (t = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    t.add(Ye(i));
  }), t) : r === "[object Map]" ? (t = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    t.set(Ye(a), Ye(i));
  }), t) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (t = new RegExp(e.source, e.flags), t.lastIndex = e.lastIndex, t) : r === "[object DataView]" ? new e.constructor(Ye(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var Ve;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(Ve || (Ve = {}));
class Md {
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
    }), this.__gadget.instantiatedFields = Ye(n), this.__gadget.persistedFields = Ye(n), Object.assign(this.__gadget.fields, n), !n || Object.keys(n).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((r) => this.__gadget.fieldKeysTracker[r] = !0));
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
  hasChanges(n = Ve.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const t = n == Ve.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((r) => !ir(t[r], this.__gadget.fields[r]));
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
  changes(n, t = Ve.SinceLoaded) {
    const i = (typeof n == "string" ? t : n || t) == Ve.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (n && typeof n == "string") {
      const a = i[n], o = this.__gadget.fields[n], l = !ir(o, a);
      return l ? { changed: l, current: o, previous: a } : { changed: l };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const l = this.__gadget.fieldKeys[o];
        ir(i[l], this.__gadget.fields[l]) || (a[l] = { current: this.__gadget.fields[l], previous: i[l] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(n = Ve.SinceLoaded) {
    const t = n == Ve.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, r = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      ir(t[a], this.__gadget.fields[a]) || (r[a] = this.__gadget.fields[a]);
    }
    return r;
  }
  changed(n, t = Ve.SinceLoaded) {
    return n && typeof n == "string" ? this.changes(n, t).changed : this.hasChanges(n === void 0 ? t : n);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(n = Ve.SinceLoaded) {
    n == Ve.SinceLoaded ? this.__gadget.instantiatedFields = Ye(this.__gadget.fields) : n == Ve.SinceLastPersisted && (this.__gadget.persistedFields = Ye(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(n = Ve.SinceLoaded) {
    let t;
    n == Ve.SinceLoaded ? t = Object.keys(this.__gadget.instantiatedFields) : t = Object.keys(this.__gadget.persistedFields);
    for (const r of this.__gadget.fieldKeys)
      t.includes(r) || delete this.__gadget.fields[r];
    n == Ve.SinceLoaded ? Object.assign(this.__gadget.fields, Ye(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, Ye(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return oa({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const Mc = Md;
class Rc extends Error {
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
class ia extends Error {
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
class Gr extends Error {
  constructor(n, t) {
    super(n.startsWith("GGT_") ? n : `${t}: ${n}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    });
  }
}
class iu extends Error {
  constructor(n) {
    let t;
    aa(n) ? t = `GraphQL websocket closed unexpectedly by the server with error code ${n.code} and reason "${n.reason}"` : t = "GraphQL websocket closed unexpectedly by the server", super(t), Object.defineProperty(this, "code", {
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
class Rd extends Error {
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
class Nd extends Error {
  constructor(n, t, r, i) {
    const a = t.slice(0, 3), o = t.length > 3 ? `, and ${t.length - 3} more error${t.length > 4 ? "s" : ""} need${t.length > 4 ? "" : "s"} to be corrected` : "";
    super(n ?? `GGT_INVALID_RECORD: ${r ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: l, message: y }) => `${l} ${y}`).join(", ")}${o}.`), Object.defineProperty(this, "code", {
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
class Nc extends Error {
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
class Dc extends Error {
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
class Dd extends Error {
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
function au(e, n) {
  if (!e)
    throw new Error("assertion error" + (n ? `: ${n}` : ""));
  return e;
}
const sn = (e, n) => {
  const t = n.length;
  let r = 0;
  for (; e != null && r < t; )
    e = e[n[r++]];
  return r && r == t ? e : void 0;
}, aa = (e) => (e == null ? void 0 : e.type) == "close", pt = (e, n) => typeof e != "string" ? "" : $r(e, n), ou = (e) => {
  const n = e == null ? "" : String(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, $r = (e, n = !0) => {
  let t = "" + e;
  return n ? t = t.replace(/^[a-z\d]*/, (r) => ou(r)) : t = t.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (r) => r.toLowerCase()), t = t.replace(/(?:_|(\/))([a-z\d]*)/gi, (r, i, a, o, l) => (i || (i = ""), "" + i + ou(a))), t;
}, kd = (e) => `${$r(e)}Sort`, Bd = (e) => `${$r(e)}Filter`, Ld = (e, n, t) => new Nc(`More than one record found for ${e}.${n} = ${t}. Please confirm your unique validation is not reporting an error.`), Ud = (e, n) => {
  if (e.fetching)
    return;
  const t = sn(e.data, n);
  if (t === void 0)
    return new Rc(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${n.join(".")}`);
  if (t === null)
    return new Dc(`Record Not Found Error: Gadget API returned no data at ${n.join(".")}`);
}, bt = (e, n, t = !1) => {
  var r;
  if (e.error)
    throw e.error instanceof zn && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((l) => "[Network] " + l.message).join(`
`)), e.error;
  const i = sn(e.data, n), a = sn(i, ["edges"]), o = a ?? i;
  if (i === void 0)
    throw new Rc(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${n.join(".")}`);
  if (i === null || t && Array.isArray(o) && o.length === 0)
    throw new Dc(`Record Not Found Error: Gadget API returned no data at ${n.join(".")}`);
  return i;
}, Dn = (e, n) => {
  var t;
  if (e.error)
    throw e.error instanceof zn && (!((t = e.error.networkError) === null || t === void 0) && t.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const r = sn(e.data, n);
  return r ?? null;
}, wa = (e) => {
  var n;
  return e.code == "GGT_INVALID_RECORD" ? new Nd(e.message, e.validationErrors, (n = e.model) === null || n === void 0 ? void 0 : n.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Nc(e.message) : new Gr(e.message, e.code);
}, Nt = (e, n) => {
  const t = bt(e, n);
  if (!t.success) {
    const r = t.errors && t.errors[0];
    throw r ? wa(r) : new Gr("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return t;
}, kc = (e) => {
  var n, t, r, i;
  if (!((t = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || t === void 0) && t.hydrations)
    return new wl((i = (r = e.data) === null || r === void 0 ? void 0 : r.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, kn = (e, n) => {
  const t = kc(e);
  return t && (n = t.apply(n)), new Mc(n);
}, Ia = (e, n) => {
  const t = kc(e);
  return t && (n = t.apply(n)), n == null ? void 0 : n.map((r) => new Mc(r));
}, Un = (e, n) => {
  const t = n.edges.map((r) => r.node);
  return Ia(e, t);
}, oa = (e) => {
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
          n[t] = r === void 0 ? null : oa(r);
        }
        return n;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const n = {};
        for (const t of Object.keys(e)) {
          const r = oa(e[t]);
          r !== void 0 && (n[t] = r);
        }
        return n;
      }
    }
  }
}, si = "gstk", uu = (e) => {
  try {
    const n = window[e];
    return n.setItem(si, si), n.removeItem(si), !0;
  } catch {
    return !1;
  }
}, cu = Object.prototype.toString, su = Object.getPrototypeOf, lu = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, Mn = (e, n, t) => {
  if (e === n)
    return !0;
  if (e == null || n == null)
    return !1;
  if (t.indexOf(e) > -1 && t.indexOf(n) > -1)
    return !0;
  const r = cu.call(e), i = cu.call(n);
  let a, o, l;
  if (t.push(e, n), r != i || (a = lu(e), o = lu(n), a.length != o.length || a.some(function(y) {
    return !Mn(e[y], n[y], t);
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
        if (l = a.next(), !Mn(l.value, o.next().value, t))
          return !1;
      while (!l.done);
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
      for (l = 0; l < e.length; l++)
        if (!(!(l in e) && !(l in n)) && (l in e != l in n || !Mn(e[l], n[l], t)))
          return !1;
      return !0;
    case "Object":
      return Mn(su(e), su(n), t);
    default:
      return !1;
  }
}, ir = (e, n) => Mn(e, n, []);
class Bc extends Error {
}
class Fd {
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
    throw bt(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Bc("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    bt(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    bt(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Vd {
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
const Gd = (e) => {
  const n = [...e.definitions].reverse().find((t) => t.kind == "OperationDefinition");
  if (n)
    return n.name ? n.name.value : n.selectionSet.selections.find((r) => r.kind == "Field").name.value;
}, du = Ic({
  onOperation: (e) => {
    var n, t;
    (n = (t = e.context).operationName) !== null && n !== void 0 || (t.operationName = Gd(e.query) || "unknown");
  }
}), $d = Ic({
  onOperation: (e) => {
    e.context.url && e.context.operationName && !e.context.url.includes("?") && (e.context.url += `?operation=${e.context.operationName}`);
  }
}), qd = 2, Wd = 4800, Hd = 1e4, zd = [Ge.ConnectionAcknowledgementTimeout, Ge.ConnectionInitialisationTimeout], fu = Symbol.for("gadget/connection"), Kd = "token", Qd = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var we;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(we || (we = {}));
class Lc {
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
      value: we.Anonymous
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
      value: async (l, y) => {
        let u, f;
        if (y ? (u = y, f = l) : (u = l, f = {}), this.currentTransaction)
          return await u(this.currentTransaction);
        let s = null, h;
        try {
          s = await this.waitForOpenedConnection({
            isFatalConnectionProblem(c) {
              return console.warn("Transport error encountered during transaction processing", c), !0;
            },
            connectionAckWaitTimeout: Wd,
            ...f,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const p = new eu({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              du,
              ...this.exchanges.beforeAsync,
              xo({
                forwardSubscription(c) {
                  const v = { ...c, query: c.query || "" };
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
          p[fu] = this, h = new Fd(p, s), this.currentTransaction = h, await h.start();
          const d = await u(h);
          return await h.commit(), d;
        } catch (p) {
          try {
            h != null && h.open && await h.rollback();
          } catch (d) {
            d instanceof Bc || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", d);
          }
          throw aa(p) ? new iu(p) : p;
        } finally {
          await (s == null ? void 0 : s.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (l, y = {}) => {
        var u;
        l = Yd(l, (u = this.options.baseRouteURL) !== null && u !== void 0 ? u : this.options.endpoint), this.isGadgetRequest(l) && (y.headers = { ...this.requestHeaders(), ...y.headers }, this.authenticationMode == we.Custom && await this.options.authenticationMode.custom.processFetch(l, y));
        const f = await this._fetchImplementation(l, y);
        if (this.authenticationMode == we.BrowserSession) {
          const s = f.headers.get("x-set-authorization"), h = s != null && s.startsWith("Session ") ? s.replace("Session ", "") : null;
          h && this.sessionTokenStore.setItem(this.sessionStorageKey, h);
        }
        return f;
      }
    }), !n.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = n.endpoint, n.fetchImplementation ? this._fetchImplementation = n.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...l) => {
      const { fetch: y } = await import("./browser-ponyfill-b5aed7de.js").then((u) => u.b);
      return await y(...l);
    }, this.websocketImplementation = (r = (t = n.websocketImplementation) !== null && t !== void 0 ? t : globalThis == null ? void 0 : globalThis.WebSocket) !== null && r !== void 0 ? r : jd, this.websocketsEndpoint = (i = n.websocketsEndpoint) !== null && i !== void 0 ? i : n.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = n.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = n.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...n.exchanges
    }, this.setAuthenticationMode(n.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Kd}-${this.endpoint}`;
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
    n && (n.browserSession ? this.enableSessionMode(n.browserSession) : n.internalAuthToken ? this.authenticationMode = we.InternalAuthToken : n.apiKey ? this.authenticationMode = we.APIKey : n.custom && (this.authenticationMode = we.Custom), this.options.authenticationMode = n), (t = this.authenticationMode) !== null && t !== void 0 || (this.authenticationMode = we.Anonymous);
  }
  enableSessionMode(n) {
    this.authenticationMode = we.BrowserSession;
    const t = !n || typeof n == "boolean" ? Rn.Durable : n.storageType;
    let r;
    t == Rn.Durable && uu("localStorage") ? r = window.localStorage : t == Rn.Session && uu("sessionStorage") ? r = window.sessionStorage : r = new Vd(), n !== null && typeof n == "object" && "initialToken" in n && n.initialToken && r.setItem(this.sessionStorageKey, n.initialToken), this.sessionTokenStore = r, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(n) {
    let t;
    if (typeof n == "string" ? t = n : typeof n == "object" && "url" in n ? t = n.url : t = String(n), ua(this.options.endpoint))
      return !!ua(t);
    const r = new URL(this.options.endpoint).host;
    return t.includes(r);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const n = [...this.exchanges.beforeAll, du, $d];
    typeof window < "u" && n.push(yd), n.push(...this.exchanges.beforeAsync, vd, xo({
      forwardSubscription: (r) => ({
        subscribe: (i) => {
          const a = { ...r, query: r.query || "" };
          return {
            unsubscribe: this.getBaseSubscriptionClient().subscribe(a, i)
          };
        }
      })
    }), ...this.exchanges.afterAll);
    const t = new eu({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: n,
      requestPolicy: this.requestPolicy
    });
    return t[fu] = this, t;
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
    return Pd({
      url: t,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var r, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == we.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == we.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == we.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == we.Custom && await ((i = (r = this.options.authenticationMode) === null || r === void 0 ? void 0 : r.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (r, i) => {
          var a, o, l, y, u, f;
          if (this.authenticationMode == we.BrowserSession && (i != null && i.sessionToken)) {
            const s = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (s !== null && typeof s == "object" ? s.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (y = (l = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || l === void 0 ? void 0 : l.connected) === null || y === void 0 || y.call(l, r, i), (f = (u = n == null ? void 0 : n.on) === null || u === void 0 ? void 0 : u.connected) === null || f === void 0 || f.call(u, r, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...n
    });
  }
  requestHeaders() {
    var n;
    const t = {};
    if (this.authenticationMode == we.InternalAuthToken)
      t.authorization = "Basic " + Qd("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == we.APIKey)
      t.authorization = `Bearer ${(n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.apiKey}`;
    else if (this.authenticationMode == we.BrowserSession) {
      const r = this.sessionTokenStore.getItem(this.sessionStorageKey);
      r && (t.authorization = `Session ${r}`);
    }
    return t["x-gadget-environment"] = this.environment, t;
  }
  async waitForOpenedConnection(n) {
    let t = this.newSubscriptionClient(n), r = [], i = n.connectionAttempts || qd;
    const a = n.connectionGlobalTimeoutMs || Hd, o = () => {
      r.forEach((l) => l()), r = [];
    };
    return await new Promise((l, y) => {
      const u = setTimeout(() => {
        this.disposeClient(t), s(new Rd("Timeout opening websocket connection to Gadget API"));
      }, a), f = (d) => {
        if (aa(d) && zd.includes(d.code) && i > 0) {
          i -= 1, this.disposeClient(t), t = this.newSubscriptionClient(n), p();
          return;
        }
        clearTimeout(u), y(new iu(d));
      }, s = (d) => {
        clearTimeout(u), y(d);
      }, h = () => {
        clearTimeout(u), l(t);
      }, p = () => {
        o(), r.push(t.on("connected", h)), r.push(t.on("closed", f)), r.push(t.on("error", s));
      };
      p();
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
Object.defineProperty(Lc, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.9"
});
function Yd(e, n) {
  if (typeof e != "string")
    return e;
  if (ua(e))
    try {
      return String(new URL(e, n));
    } catch {
      return e;
    }
  return e;
}
function ua(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class ln extends Array {
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
    const i = new ln();
    return i.push(...t), i.modelManager = n, i.pagination = r, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Gr("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new ia("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new ia("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: t, last: r, after: i, ...a } = (n = this.pagination.options) !== null && n !== void 0 ? n : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: r || t
    });
  }
}
const ca = (e) => Object.entries(e).flatMap(([n, t]) => {
  if (typeof t == "boolean")
    return t ? n : !1;
  if (t instanceof ja) {
    let r = "";
    const i = Object.entries(t.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var l;
      return `${a}: ${o instanceof Ma ? `$${(l = o.name) !== null && l !== void 0 ? l : a}` : JSON.stringify(o)}`;
    });
    return i.length > 0 && (r = `(${i.join(", ")})`), t.subselection ? [`${n}${r} {`, ...ca(t.subselection), "}"] : `${n}${r}`;
  } else
    return [`${n} {`, ...ca(t), "}"];
}).filter((n) => !!n).map((n) => "  " + n), Ca = (e) => {
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
    i instanceof ja ? Object.entries(i.args).forEach(([a, o]) => {
      var l;
      o instanceof Ma && (n[(l = o.name) !== null && l !== void 0 ? l : t(a)] = o);
    }) : typeof i == "object" && i !== null && Object.assign(n, Ca(i));
  }), n;
}, Jd = (e) => {
  const n = Ca(e.fields);
  return Object.keys(n).length === 0 ? "" : `(${Object.entries(n).map(([r, i]) => `$${r}: ${i.type}`).join(", ")})`;
};
class ja {
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
class Ma {
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
const vn = (e, n) => new ja(e, n), Me = (e) => new Ma(e.type + (e.required ? "!" : ""), e.name, e.value), Xd = (e) => {
  var n;
  const t = Jd(e), r = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(n = e.name) !== null && n !== void 0 ? n : ""}${t}${r} {
${ca(e.fields).join(`
`)}
}`;
}, mn = (e) => {
  const n = Ca(e.fields);
  return {
    query: Xd(e),
    variables: Object.entries(n ?? {}).reduce((t, [r, i]) => (typeof i.value < "u" && (t[r] = i.value), t), {})
  };
}, Kn = `
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
`, gn = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, Zd = (e) => `
    query InternalFind${pt(e)}($id: GadgetID!, $select: [String!]) {
      ${gn(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, Uc = (e, n) => ({
  search: n != null && n.search ? Me({ value: n == null ? void 0 : n.search, type: "String" }) : void 0,
  sort: n != null && n.sort ? Me({ value: n == null ? void 0 : n.sort, type: `[${e}Sort!]` }) : void 0,
  filter: n != null && n.filter ? Me({ value: n == null ? void 0 : n.filter, type: `[${e}Filter!]` }) : void 0,
  select: n != null && n.select ? Me({ value: Fc(n == null ? void 0 : n.select), type: "[String!]" }) : void 0
}), xd = (e, n) => {
  const t = pt(e), r = Uc(t, n);
  return mn({
    type: "query",
    name: `InternalFindFirst${t}`,
    fields: {
      internal: {
        [`list${t}`]: vn({
          ...r,
          first: Me({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, ef = (e, n) => {
  const t = pt(e), r = Uc(t, n);
  return mn({
    type: "query",
    name: `InternalFindMany${t}`,
    fields: {
      internal: {
        [`list${t}`]: vn({
          ...r,
          after: Me({ value: n == null ? void 0 : n.after, type: "String" }),
          before: Me({ value: n == null ? void 0 : n.before, type: "String" }),
          first: Me({ value: n == null ? void 0 : n.first, type: "Int" }),
          last: Me({ value: n == null ? void 0 : n.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, tf = (e) => {
  const n = pt(e);
  return `
    ${Kn}

    mutation InternalCreate${n}($record: Internal${n}Input) {
      ${gn(e)}
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
}, nf = (e, n) => {
  const t = pt(e), r = pt(n);
  return `
    ${Kn}

    mutation InternalBulkCreate${r}($records: [Internal${t}Input]!) {
      ${gn(e)}
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
}, rf = (e) => {
  const n = pt(e);
  return `
    ${Kn}

    mutation InternalUpdate${n}($id: GadgetID!, $record: Internal${n}Input) {
      ${gn(e)}
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
}, af = (e) => {
  const n = pt(e);
  return `
    ${Kn}

    mutation InternalDelete${n}($id: GadgetID!) {
      ${gn(e)}
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
}, of = (e) => {
  const n = pt(e);
  return `
    ${Kn}

    mutation InternalDeleteMany${n}(
      $search: String
      $filter: [${n}Filter!]
    ) {
      ${gn(e)}
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
class ot {
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
    }), this.capitalizedApiIdentifier = $r(n);
  }
  validateRecord(n) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(n).every((r) => r === this.apiIdentifier);
  }
  getRecordFromData(n, t) {
    let r = n;
    if (!this.validateRecord(n))
      throw new Gr(`Invalid arguments found in variables. Did you mean to use ${t}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = await this.connection.currentClient.query(Zd(this.apiIdentifier), { id: n, select: Fc(t == null ? void 0 : t.select) }).toPromise(), o = (r ? bt : Dn)(i, ["internal", this.apiIdentifier]);
    return kn(i, o);
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
    const t = ef(this.apiIdentifier, n), r = await this.connection.currentClient.query(t.query, t.variables).toPromise(), i = Dn(r, ["internal", `list${this.capitalizedApiIdentifier}`]), a = Un(r, i);
    return ln.boot(this, a, { options: n, pageInfo: i.pageInfo });
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
    const r = xd(this.apiIdentifier, n), i = await this.connection.currentClient.query(r.query, r.variables).toPromise();
    let a;
    t === !1 ? a = Dn(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = bt(i, ["internal", `list${this.capitalizedApiIdentifier}`], t);
    const o = Un(i, a);
    return ln.boot(this, o, { options: n, pageInfo: a.pageInfo })[0];
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
    const t = await this.connection.currentClient.mutation(tf(this.apiIdentifier), {
      record: this.getRecordFromData(n, "create")
    }).toPromise(), r = Nt(t, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return kn(t, r[this.apiIdentifier]);
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
      throw new ia("Cannot perform bulkCreate without a pluralApiIdentifier");
    const r = pt(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(nf(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: n
    }).toPromise(), a = Nt(i, ["internal", `bulkCreate${r}`]);
    return Ia(i, a[this.options.pluralApiIdentifier]);
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
    au(n, "Can't update a record without an ID passed");
    const r = await this.connection.currentClient.mutation(rf(this.apiIdentifier), {
      id: n,
      record: this.getRecordFromData(t, "update")
    }).toPromise(), i = Nt(r, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return kn(r, i[this.apiIdentifier]);
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
    au(n, "Can't delete a record without an ID");
    const t = await this.connection.currentClient.mutation(af(this.apiIdentifier), { id: n }).toPromise();
    Nt(t, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const t = await this.connection.currentClient.mutation(of(this.apiIdentifier), n).toPromise();
    Nt(t, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function Fc(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const n = [];
  for (const [t, r] of Object.entries(e))
    r && n.push(t);
  return n;
}
const Ra = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Na = (e, n = !1) => {
  const t = { ...e };
  return n && (t.__typename = !0), t;
}, uf = (e, n, t, r, i) => {
  const a = {};
  return typeof n < "u" && (a.id = Me({ type: "GadgetID!", value: n })), mn({
    type: "query",
    name: e,
    fields: {
      [e]: vn(a, Na((i == null ? void 0 : i.select) || t, !0)),
      ...Ra(r)
    }
  });
}, cf = (e, n, t, r, i, a) => Da(e, r, i, {
  select: a == null ? void 0 : a.select,
  first: 2,
  filter: {
    [n]: {
      equals: t
    }
  }
}), Da = (e, n, t, r) => mn({
  type: "query",
  name: e,
  fields: {
    [e]: vn({
      after: Me({ value: r == null ? void 0 : r.after, type: "String" }),
      first: Me({ value: r == null ? void 0 : r.first, type: "Int" }),
      before: Me({ value: r == null ? void 0 : r.before, type: "String" }),
      last: Me({ value: r == null ? void 0 : r.last, type: "Int" }),
      sort: r != null && r.sort ? Me({ value: r.sort, type: `[${kd(t)}!]` }) : void 0,
      filter: r != null && r.filter ? Me({ value: r.filter, type: `[${Bd(t)}!]` }) : void 0,
      search: r != null && r.search ? Me({ value: r.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Na((r == null ? void 0 : r.select) || n, !0)
      }
    }),
    ...Ra(t)
  }
}), Vc = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Gc = (e) => Object.fromEntries(Object.entries(e).map(([n, t]) => [n, Me(t)])), sf = (e, n, t, r, i, a, o, l, y) => {
  const u = (a == null ? void 0 : a.select) || n;
  let f = {
    [e]: vn(Gc(i), {
      success: !0,
      errors: Vc,
      [r]: u && !y ? Na(u, !0) : !1,
      [l ? "results" : "result"]: !!y
    })
  };
  o && (f = {
    [o]: f
  });
  const s = {
    type: "mutation",
    name: e,
    fields: {
      ...f,
      ...Ra(t)
    }
  };
  return mn(s);
}, lf = (e, n, t) => {
  let r = {
    [e]: vn(Gc(n), {
      success: !0,
      errors: Vc,
      result: !0
    })
  };
  return t && (r = {
    [t]: r
  }), mn({
    type: "mutation",
    name: e,
    fields: r
  });
}, be = async (e, n, t, r, i, a, o = !0) => {
  const l = uf(n, t, r, i, a), y = await e.connection.currentClient.query(l.query, l.variables).toPromise(), f = (o ? bt : Dn)(y, [n]);
  return kn(y, f);
}, qr = async (e, n, t, r, i, a, o) => {
  const l = cf(n, t, r, i, a, o), y = await e.connection.currentClient.query(l.query, l.variables).toPromise(), u = bt(y, [n]), f = Un(y, u);
  if (f.length > 1)
    throw Ld(a, t, r);
  return f[0];
}, ne = async (e, n, t, r, i, a) => {
  const o = Da(n, t, r, i), l = await e.connection.currentClient.query(o.query, o.variables).toPromise();
  let y;
  a === !1 ? y = Dn(l, [n]) : y = bt(l, [n], a);
  const u = Un(l, y);
  return ln.boot(e, u, { options: i, pageInfo: y.pageInfo });
}, $ = async (e, n, t, r, i, a, o, l, y, u) => {
  const f = sf(n, t, r, i, o, l, y, a, u), s = await e.connection.currentClient.mutation(f.query, f.variables).toPromise(), h = y ? [y, n] : [n];
  if (a) {
    const p = sn(s.data, h), d = p[i] && t ? Ia(s, p[i]) : void 0;
    if (p.errors) {
      const c = p.errors.map((v) => wa(v));
      throw new Dd(c, d);
    }
    return d;
  } else {
    const p = Nt(s, h);
    return t == null ? void 0 : u ? p.result : kn(s, p[i]);
  }
}, df = async (e, n, t, r) => {
  const i = lf(n, t, r), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return Nt(a, r ? [r, n] : [n]).result;
};
function he(e, n, t = {}, r) {
  var o;
  if (e.hasAmbiguousIdentifier && Object.keys(t).some((l) => {
    var y;
    return !((y = e.paramOnlyVariables) != null && y.includes(l)) && l !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let i;
  const a = Object.entries(e.variables).find(([l, y]) => l === "id" && y.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in t && typeof t[e.modelApiIdentifier] == "object" && t[e.modelApiIdentifier] !== null || !r[e.modelApiIdentifier])
      i = t;
    else {
      i = {
        [e.modelApiIdentifier]: {}
      };
      for (const [l, y] of Object.entries(t))
        (o = e.paramOnlyVariables) != null && o.includes(l) ? i[l] = y : a && l === a[0] ? i.id = y : i[e.modelApiIdentifier][l] = y;
    }
  else
    i = t;
  return i.id ?? (i.id = n), i;
}
const Ie = {
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
};
async function ff(e, n) {
  const t = he(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await $(
    this,
    "createUser",
    Ie,
    "user",
    "user",
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
async function pf(e, n, t) {
  const r = he(
    this.update,
    e,
    n,
    this.update.variables
  );
  return await $(
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
async function hf(e, n) {
  return await $(
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
    n,
    null,
    !1
  );
}
async function yf(e, n) {
  const t = he(
    this.signUp,
    void 0,
    e,
    this.signUp.variables
  );
  return await $(
    this,
    "signUpUser",
    Ie,
    "user",
    "user",
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
class vf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await be(
        this,
        "user",
        t,
        Ie,
        "user",
        r
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
      async (t, r) => {
        const i = await be(
          this,
          "user",
          t,
          Ie,
          "user",
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
        defaultSelection: Ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ne(
        this,
        "users",
        Ie,
        "user",
        t
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
      async (t) => (await ne(
        this,
        "users",
        Ie,
        "user",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (t) => {
        const r = await ne(
          this,
          "users",
          Ie,
          "user",
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
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
      async (t, r) => await qr(
        this,
        "users",
        "email",
        t,
        Ie,
        "user",
        r
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
    ), this.create = Object.assign(
      ff,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      pf,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      hf,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await $(
        this,
        "bulkDeleteUsers",
        null,
        "user",
        "users",
        !0,
        {
          ids: {
            value: t,
            required: !0,
            type: "[GadgetID!]"
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
        },
        hasReturnType: !1
      }
    ), this.signUp = Object.assign(
      yf,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    );
  }
}
const qe = {
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
};
async function mf(e, n) {
  const t = he(
    this.logInViaEmail,
    void 0,
    e,
    this.logInViaEmail.variables
  );
  return await $(
    this,
    "logInViaEmail",
    qe,
    "session",
    "session",
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
async function gf(e) {
  return await $(
    this,
    "logOut",
    qe,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
class bf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await be(
        this,
        "session",
        t,
        qe,
        "session",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await be(
          this,
          "session",
          t,
          qe,
          "session",
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
        defaultSelection: qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ne(
        this,
        "sessions",
        qe,
        "session",
        t
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ne(
        this,
        "sessions",
        qe,
        "session",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ne(
          this,
          "sessions",
          qe,
          "session",
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logInViaEmail = Object.assign(
      mf,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: qe,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.logOut = Object.assign(
      gf,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: qe,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: {},
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
const We = {
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
};
async function _f(e, n) {
  const t = he(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await $(
    this,
    "createShopifyProduct",
    We,
    "shopifyProduct",
    "shopifyProduct",
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
async function Of(e, n, t) {
  const r = he(
    this.update,
    e,
    n,
    this.update.variables
  );
  return await $(
    this,
    "updateShopifyProduct",
    We,
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
async function Pf(e, n) {
  return await $(
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
    n,
    null,
    !1
  );
}
class Af {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await be(
        this,
        "shopifyProduct",
        t,
        We,
        "shopifyProduct",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: We,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await be(
          this,
          "shopifyProduct",
          t,
          We,
          "shopifyProduct",
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
        defaultSelection: We,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ne(
        this,
        "shopifyProducts",
        We,
        "shopifyProduct",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: We,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ne(
        this,
        "shopifyProducts",
        We,
        "shopifyProduct",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: We,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ne(
          this,
          "shopifyProducts",
          We,
          "shopifyProduct",
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: We,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      _f,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: We,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Of,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: We,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Pf,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await $(
        this,
        "bulkDeleteShopifyProducts",
        null,
        "shopifyProduct",
        "shopifyProducts",
        !0,
        {
          ids: {
            value: t,
            required: !0,
            type: "[GadgetID!]"
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
        },
        hasReturnType: !1
      }
    );
  }
}
const He = {
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
};
async function Sf(e, n) {
  const t = he(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await $(
    this,
    "createShopifyProductImage",
    He,
    "shopifyProductImage",
    "shopifyProductImage",
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
async function Ef(e, n, t) {
  const r = he(
    this.update,
    e,
    n,
    this.update.variables
  );
  return await $(
    this,
    "updateShopifyProductImage",
    He,
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
async function Tf(e, n) {
  return await $(
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
    n,
    null,
    !1
  );
}
class wf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await be(
        this,
        "shopifyProductImage",
        t,
        He,
        "shopifyProductImage",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: He,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await be(
          this,
          "shopifyProductImage",
          t,
          He,
          "shopifyProductImage",
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
        defaultSelection: He,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ne(
        this,
        "shopifyProductImages",
        He,
        "shopifyProductImage",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: He,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ne(
        this,
        "shopifyProductImages",
        He,
        "shopifyProductImage",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: He,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ne(
          this,
          "shopifyProductImages",
          He,
          "shopifyProductImage",
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: He,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Sf,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: He,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Ef,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: He,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Tf,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await $(
        this,
        "bulkDeleteShopifyProductImages",
        null,
        "shopifyProductImage",
        "shopifyProductImages",
        !0,
        {
          ids: {
            value: t,
            required: !0,
            type: "[GadgetID!]"
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
        },
        hasReturnType: !1
      }
    );
  }
}
const ze = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  name: !0,
  position: !0,
  state: !0,
  updatedAt: !0,
  values: !0
};
async function If(e, n) {
  const t = he(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await $(
    this,
    "createShopifyProductOption",
    ze,
    "shopifyProductOption",
    "shopifyProductOption",
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
async function Cf(e, n, t) {
  const r = he(
    this.update,
    e,
    n,
    this.update.variables
  );
  return await $(
    this,
    "updateShopifyProductOption",
    ze,
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
async function jf(e, n) {
  return await $(
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
    n,
    null,
    !1
  );
}
class Mf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await be(
        this,
        "shopifyProductOption",
        t,
        ze,
        "shopifyProductOption",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await be(
          this,
          "shopifyProductOption",
          t,
          ze,
          "shopifyProductOption",
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
        defaultSelection: ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ne(
        this,
        "shopifyProductOptions",
        ze,
        "shopifyProductOption",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ne(
        this,
        "shopifyProductOptions",
        ze,
        "shopifyProductOption",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ne(
          this,
          "shopifyProductOptions",
          ze,
          "shopifyProductOption",
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      If,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: ze,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Cf,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: ze,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      jf,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await $(
        this,
        "bulkDeleteShopifyProductOptions",
        null,
        "shopifyProductOption",
        "shopifyProductOptions",
        !0,
        {
          ids: {
            value: t,
            required: !0,
            type: "[GadgetID!]"
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
        },
        hasReturnType: !1
      }
    );
  }
}
const Ke = {
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
};
async function Rf(e, n) {
  const t = he(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await $(
    this,
    "createShopifyProductVariant",
    Ke,
    "shopifyProductVariant",
    "shopifyProductVariant",
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
async function Nf(e, n, t) {
  const r = he(
    this.update,
    e,
    n,
    this.update.variables
  );
  return await $(
    this,
    "updateShopifyProductVariant",
    Ke,
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
async function Df(e, n) {
  return await $(
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
    n,
    null,
    !1
  );
}
class kf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await be(
        this,
        "shopifyProductVariant",
        t,
        Ke,
        "shopifyProductVariant",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await be(
          this,
          "shopifyProductVariant",
          t,
          Ke,
          "shopifyProductVariant",
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
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ne(
        this,
        "shopifyProductVariants",
        Ke,
        "shopifyProductVariant",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ne(
        this,
        "shopifyProductVariants",
        Ke,
        "shopifyProductVariant",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ne(
          this,
          "shopifyProductVariants",
          Ke,
          "shopifyProductVariant",
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Rf,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: Ke,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Nf,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
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
    ), this.delete = Object.assign(
      Df,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await $(
        this,
        "bulkDeleteShopifyProductVariants",
        null,
        "shopifyProductVariant",
        "shopifyProductVariants",
        !0,
        {
          ids: {
            value: t,
            required: !0,
            type: "[GadgetID!]"
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
        },
        hasReturnType: !1
      }
    );
  }
}
const je = {
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
};
async function Bf(e, n) {
  const t = he(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await $(
    this,
    "createShopifyShop",
    je,
    "shopifyShop",
    "shopifyShop",
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
async function Lf(e, n, t) {
  const r = he(
    this.update,
    e,
    n,
    this.update.variables
  );
  return await $(
    this,
    "updateShopifyShop",
    je,
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
async function Uf(e, n) {
  return await $(
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
    n,
    null,
    !1
  );
}
async function Ff(e, n, t) {
  const r = he(
    this.uninstall,
    e,
    n,
    this.uninstall.variables
  );
  return await $(
    this,
    "uninstallShopifyShop",
    je,
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
async function Vf(e, n, t) {
  const r = he(
    this.reinstall,
    e,
    n,
    this.reinstall.variables
  );
  return await $(
    this,
    "reinstallShopifyShop",
    je,
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
class Gf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await be(
        this,
        "shopifyShop",
        t,
        je,
        "shopifyShop",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await be(
          this,
          "shopifyShop",
          t,
          je,
          "shopifyShop",
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
        defaultSelection: je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ne(
        this,
        "shopifyShops",
        je,
        "shopifyShop",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ne(
        this,
        "shopifyShops",
        je,
        "shopifyShop",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ne(
          this,
          "shopifyShops",
          je,
          "shopifyShop",
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Bf,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: je,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Lf,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: je,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Uf,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await $(
        this,
        "bulkDeleteShopifyShops",
        null,
        "shopifyShop",
        "shopifyShops",
        !0,
        {
          ids: {
            value: t,
            required: !0,
            type: "[GadgetID!]"
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
        },
        hasReturnType: !1
      }
    ), this.uninstall = Object.assign(
      Ff,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: je,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.reinstall = Object.assign(
      Vf,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: je,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    );
  }
}
const Qe = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  state: !0,
  updatedAt: !0
};
async function $f(e, n) {
  const t = he(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await $(
    this,
    "createProductPairing",
    Qe,
    "productPairing",
    "productPairing",
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
async function qf(e, n, t) {
  const r = he(
    this.update,
    e,
    n,
    this.update.variables
  );
  return await $(
    this,
    "updateProductPairing",
    Qe,
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
async function Wf(e, n) {
  return await $(
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
    n,
    null,
    !1
  );
}
class Hf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await be(
        this,
        "productPairing",
        t,
        Qe,
        "productPairing",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await be(
          this,
          "productPairing",
          t,
          Qe,
          "productPairing",
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
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ne(
        this,
        "productPairings",
        Qe,
        "productPairing",
        t
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ne(
        this,
        "productPairings",
        Qe,
        "productPairing",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ne(
          this,
          "productPairings",
          Qe,
          "productPairing",
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      $f,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: Qe,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      qf,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
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
    ), this.delete = Object.assign(
      Wf,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await $(
        this,
        "bulkDeleteProductPairings",
        null,
        "productPairing",
        "productPairings",
        !0,
        {
          ids: {
            value: t,
            required: !0,
            type: "[GadgetID!]"
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
        },
        hasReturnType: !1
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
};
async function zf(e, n) {
  const t = he(
    this.run,
    void 0,
    e,
    this.run.variables
  );
  return await $(
    this,
    "runShopifySync",
    Ce,
    "shopifySync",
    "shopifySync",
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
async function Kf(e, n, t) {
  const r = he(
    this.complete,
    e,
    n,
    this.complete.variables
  );
  return await $(
    this,
    "completeShopifySync",
    Ce,
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
async function Qf(e, n, t) {
  const r = he(
    this.error,
    e,
    n,
    this.error.variables
  );
  return await $(
    this,
    "errorShopifySync",
    Ce,
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
class Yf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await be(
        this,
        "shopifySync",
        t,
        Ce,
        "shopifySync",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await be(
          this,
          "shopifySync",
          t,
          Ce,
          "shopifySync",
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
        defaultSelection: Ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ne(
        this,
        "shopifySyncs",
        Ce,
        "shopifySync",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ne(
        this,
        "shopifySyncs",
        Ce,
        "shopifySync",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ne(
          this,
          "shopifySyncs",
          Ce,
          "shopifySync",
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (t, r) => await qr(
        this,
        "shopifySyncs",
        "id",
        t,
        Ce,
        "shopifySync",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.run = Object.assign(
      zf,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: Ce,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.complete = Object.assign(
      Kf,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: Ce,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.error = Object.assign(
      Qf,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: Ce,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    );
  }
}
const Be = {
  __typename: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  id: !0,
  updatedAt: !0
};
async function Jf(e, n) {
  const t = he(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await $(
    this,
    "createAmbiguous",
    Be,
    "ambiguous",
    "ambiguous",
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
async function Xf(e, n, t) {
  const r = he(
    this.update,
    e,
    n,
    this.update.variables
  );
  return await $(
    this,
    "updateAmbiguous",
    Be,
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
async function Zf(e, n) {
  return await $(
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
    n,
    null,
    !1
  );
}
class xf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await be(
        this,
        "ambiguous",
        t,
        Be,
        "ambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await be(
          this,
          "ambiguous",
          t,
          Be,
          "ambiguous",
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
        defaultSelection: Be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ne(
        this,
        "ambiguouss",
        Be,
        "ambiguous",
        t
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ne(
        this,
        "ambiguouss",
        Be,
        "ambiguous",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ne(
          this,
          "ambiguouss",
          Be,
          "ambiguous",
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (t, r) => await qr(
        this,
        "ambiguouss",
        "id",
        t,
        Be,
        "ambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Jf,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: Be,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Xf,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: Be,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Zf,
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
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await $(
        this,
        "bulkDeleteAmbiguous",
        null,
        "ambiguous",
        "ambiguous",
        !0,
        {
          ids: {
            value: t,
            required: !0,
            type: "[GadgetID!]"
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
        },
        hasReturnType: !1
      }
    );
  }
}
const Le = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
};
async function ep(e, n) {
  const t = he(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await $(
    this,
    "createUnambiguous",
    Le,
    "unambiguous",
    "unambiguous",
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
async function tp(e, n, t) {
  const r = he(
    this.update,
    e,
    n,
    this.update.variables
  );
  return await $(
    this,
    "updateUnambiguous",
    Le,
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
async function np(e, n) {
  return await $(
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
    n,
    null,
    !1
  );
}
class rp {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await be(
        this,
        "unambiguous",
        t,
        Le,
        "unambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const i = await be(
          this,
          "unambiguous",
          t,
          Le,
          "unambiguous",
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
        defaultSelection: Le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ne(
        this,
        "unambiguouss",
        Le,
        "unambiguous",
        t
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ne(
        this,
        "unambiguouss",
        Le,
        "unambiguous",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ne(
          this,
          "unambiguouss",
          Le,
          "unambiguous",
          { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (t, r) => await qr(
        this,
        "unambiguouss",
        "id",
        t,
        Le,
        "unambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: Le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      ep,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: Le,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      tp,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: Le,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      np,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.bulkDelete = Object.assign(
      async (t, r) => await $(
        this,
        "bulkDeleteUnambiguous",
        null,
        "unambiguous",
        "unambiguous",
        !0,
        {
          ids: {
            value: t,
            required: !0,
            type: "[GadgetID!]"
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
        },
        hasReturnType: !1
      }
    );
  }
}
const tn = {
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
};
async function ip(e) {
  return await $(
    this,
    "logOut",
    tn,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
async function ap(e, n) {
  const t = he(
    this.logInViaEmail,
    void 0,
    e,
    this.logInViaEmail.variables
  );
  return await $(
    this,
    "logInViaEmail",
    tn,
    "session",
    "session",
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
class op {
  constructor(n) {
    this.connection = n, this.get = Object.assign(
      async (t) => await be(
        this,
        "currentSession",
        void 0,
        tn,
        "session",
        t
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: tn,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      ip,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: tn,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: {},
        variables: {},
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.logInViaEmail = Object.assign(
      ap,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: tn,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    );
  }
}
const li = "production", ar = "development", up = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
let cp = class {
  constructor(n) {
    var a;
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async (o) => await df(
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
        variablesType: void 0,
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
    ), this.transaction = async (o) => await this.connection.transaction(o), this.getDirectUploadToken = async () => (await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
      requestPolicy: "network-only"
    })).gadgetMeta.directUploadToken;
    const t = (n == null ? void 0 : n.environment) ?? up() ?? ar;
    let r = t.toLocaleLowerCase();
    r != ar && r != li && (console.warn("Invalid environment", t, "defaulting to development"), r = ar);
    const i = { ...n == null ? void 0 : n.exchanges };
    if (r === ar) {
      const o = ({ forward: l }) => (y) => {
        const u = l(y);
        return xl(
          u,
          nn((f) => {
            if (typeof window < "u" && typeof CustomEvent == "function") {
              const s = new CustomEvent("gadget:devharness:graphqlresult", { detail: f });
              window.dispatchEvent(s);
            }
            return f;
          })
        );
      };
      i.beforeAll = [
        o,
        ...i.beforeAll ?? []
      ];
    }
    if (this.connection = new Lc({
      endpoint: new URL("api/graphql", r == li ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (n == null ? void 0 : n.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...n,
      exchanges: i,
      environment: r == li ? "Production" : "Development"
    }), typeof window < "u" && this.connection.authenticationMode == we.APIKey && !((a = n == null ? void 0 : n.authenticationMode) != null && a.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new vf(this.connection), this.session = new bf(this.connection), this.shopifyProduct = new Af(this.connection), this.shopifyProductImage = new wf(this.connection), this.shopifyProductOption = new Mf(this.connection), this.shopifyProductVariant = new kf(this.connection), this.shopifyShop = new Gf(this.connection), this.productPairing = new Hf(this.connection), this.shopifySync = new Yf(this.connection), this.ambiguous = new xf(this.connection), this.unambiguous = new rp(this.connection), this.currentSession = new op(this.connection), this.internal = {
      user: new ot("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new ot("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new ot("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new ot("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new ot("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new ot("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new ot("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new ot("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new ot("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new ot("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new ot("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
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
var $c = {}, Wr = dt.createContext($c), sp = Wr.Provider;
Wr.Consumer;
Wr.displayName = "UrqlContext";
var lp = () => {
  var e = dt.useContext(Wr);
  if (e === $c && process.env.NODE_ENV !== "production") {
    var n = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(n), new Error(n);
  }
  return e;
}, dp = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, fp = (e, n) => e === n || !(!e || !n || e.key !== n.key), di = (e, n) => {
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
      if (o === "operation" ? !fp(r[o], i[o]) : r[o] !== i[o])
        return !0;
    return !1;
  })(e, t) ? t : e;
}, pp = (e, n) => {
  for (var t = 0, r = n.length; t < r; t++)
    if (e[t] !== n[t])
      return !0;
  return !1;
}, fi = dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function pu(e, n) {
  process.env.NODE_ENV !== "production" && fi && fi.ReactCurrentOwner && fi.ReactCurrentOwner.current ? Promise.resolve(n).then(e) : e(n);
}
function hp(e, n) {
  var t = dt.useRef(void 0);
  return dt.useMemo(() => {
    var r = mr(e, n);
    return t.current !== void 0 && t.current.key === r.key ? t.current : (t.current = r, r);
  }, [e, n]);
}
var yp = (e) => {
  if (!e._react) {
    var n = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Map();
    e.operations$ && Bt((r) => {
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
}, vp = (e, n) => e.suspense && (!n || n.suspense !== !1);
function mp(e) {
  var n = lp(), t = yp(n), r = vp(n, e.context), i = hp(e.query, e.variables), a = dt.useMemo(() => {
    if (e.pause)
      return null;
    var h = n.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return r ? on((p) => {
      t.set(i.key, p);
    })(h) : h;
  }, [t, n, i, r, e.pause, e.requestPolicy, e.context]), o = dt.useCallback((h, p) => {
    if (!h)
      return {
        fetching: !1
      };
    var d = t.get(i.key);
    if (d) {
      if (p && d != null && "then" in d)
        throw d;
    } else {
      var c, v = Bt((g) => {
        d = g, c && c(d);
      })(Pc(() => p && !c || !d)(h));
      if (d == null && p) {
        var m = new Promise((g) => {
          c = g;
        });
        throw t.set(i.key, m), m;
      } else
        v.unsubscribe();
    }
    return d || {
      fetching: !0
    };
  }, [t, i]), l = [n, i, e.requestPolicy, e.context, e.pause], [y, u] = dt.useState(() => [a, di(dp, o(a, r)), l]), f = y[1];
  a !== y[0] && pp(y[2], l) && u([a, f = di(y[1], o(a, r)), l]), dt.useEffect(() => {
    var h = y[0], p = y[2][1], d = !1, c = (m) => {
      d = !0, pu(u, (g) => {
        var O = di(g[1], m);
        return g[1] !== O ? [g[0], O, g[2]] : g;
      });
    };
    if (h) {
      var v = Bt(c)(Aa(() => {
        c({
          fetching: !1
        });
      })(h));
      return d || c({
        fetching: !0
      }), () => {
        t.dispose(p.key), v.unsubscribe();
      };
    } else
      c({
        fetching: !1
      });
  }, [t, y[0], y[2][1]]);
  var s = dt.useCallback((h) => {
    var p = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...h
    };
    pu(u, (d) => [r ? on((c) => {
      t.set(i.key, c);
    })(n.executeQuery(i, p)) : n.executeQuery(i, p), d[1], l]);
  }, [n, t, i, r, o, e.requestPolicy, e.context]);
  return [f, s];
}
const qc = te.createContext(void 0), gp = te.createContext(void 0), bp = "/", _p = "signOut";
function Op(e) {
  let n, t;
  if ("api" in e) {
    if (!El(e.api))
      throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    n = e.api, t = e.api.connection.currentClient;
  } else if (e.value)
    t = e.value;
  else
    throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
  t.suspense = !0;
  let r = bp, i = _p;
  if ("auth" in e) {
    const { auth: a } = e;
    a != null && a.signInPath && (r = a.signInPath), a != null && a.signOutActionApiIdentifier && (i = a.signOutActionApiIdentifier);
  }
  return te.createElement(
    qc.Provider,
    { value: t },
    te.createElement(
      gp.Provider,
      { value: {
        api: n,
        auth: {
          signInPath: r,
          signOutActionApiIdentifier: i
        }
      } },
      te.createElement(sp, { value: t }, e.children)
    )
  );
}
const Pp = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Ap = (e, n) => {
  let t = "";
  return e !== void 0 ? t = `[Network] ${e.message}` : n !== void 0 ? n.forEach((r) => {
    t += `[GraphQL] ${r.message}
`;
  }) : t = "Unknown error", t.trim();
}, Sp = (e) => typeof e == "string" ? new Tr(e) : e != null && e.message && !e.code ? new Tr(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class Dt extends Error {
  /** @private */
  static forClientSideError(n, t) {
    return new Dt({
      executionErrors: [n],
      response: t
    });
  }
  /** @private */
  static forErrorsResponse(n, t) {
    return new Dt({
      executionErrors: n.map(wa),
      response: t
    });
  }
  /** @private */
  static forMaybeCombinedError(n) {
    if (n)
      return new Dt({
        networkError: n.networkError,
        executionErrors: n.graphQLErrors,
        response: n.response
      });
  }
  /** @private */
  static errorIfDataAbsent(n, t, r = !1) {
    const i = Ud(n, t);
    let a = Dt.forMaybeCombinedError(n.error);
    return !a && i && !r && (a = Dt.forClientSideError(i)), a;
  }
  constructor({ networkError: n, executionErrors: t, response: r }) {
    const i = (t || []).map(Sp), a = Ap(n, i);
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
const Ep = (e) => {
  const { context: n, suspense: t, ...r } = e ?? {}, i = _r(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...r,
    context: i
  };
}, Tp = (e, n) => ({
  query: e.query,
  variables: e.variables,
  ...n
}), Wc = (e) => {
  if (!pc(qc))
    throw new Error(Pp);
  const n = Ep(e);
  return mp(n);
};
var wp = typeof Element < "u", Ip = typeof Map == "function", Cp = typeof Set == "function", jp = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function gr(e, n) {
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
        if (!gr(e[r], n[r]))
          return !1;
      return !0;
    }
    var a;
    if (Ip && e instanceof Map && n instanceof Map) {
      if (e.size !== n.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!n.has(r.value[0]))
          return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!gr(r.value[1], n.get(r.value[0])))
          return !1;
      return !0;
    }
    if (Cp && e instanceof Set && n instanceof Set) {
      if (e.size !== n.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!n.has(r.value[0]))
          return !1;
      return !0;
    }
    if (jp && ArrayBuffer.isView(e) && ArrayBuffer.isView(n)) {
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
    if (wp && e instanceof Element)
      return !1;
    for (r = t; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !gr(e[i[r]], n[i[r]]))
        return !1;
    return !0;
  }
  return e !== e && n !== n;
}
var Mp = function(n, t) {
  try {
    return gr(n, t);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Rp = /* @__PURE__ */ yc(Mp), Np = (e) => {
  const n = _l();
  return e ? (n.current === void 0 || !Rp(e, n.current)) && (n.current = e) : n.current = void 0, n.current;
}, Dp = (e, n) => {
  const t = Np(n), r = _r(() => Da(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, t), [e, t]), [i, a] = Wc(Tp(r, n));
  return [_r(() => {
    const l = [e.findMany.operationName];
    let y = i.data;
    if (y) {
      const f = sn(i.data, l);
      if (f) {
        const s = Un(i, f);
        y = ln.boot(e, s, f);
      }
    }
    const u = Dt.errorIfDataAbsent(i, l, n == null ? void 0 : n.pause);
    return { ...i, data: y, error: u };
  }, [e, i]), a];
};
var Hc = {}, st = {};
Object.defineProperty(st, "__esModule", { value: !0 });
var zc = st.AppBridgeContext = void 0, kp = te;
zc = st.AppBridgeContext = kp.createContext(null);
var Re = {};
Object.defineProperty(Re, "__esModule", { value: !0 });
Re.useAppBridge = void 0;
var Bp = te, Lp = st;
function Up() {
  var e = Bp.useContext(Lp.AppBridgeContext);
  if (!e)
    throw new Error("No AppBridge context provided. Your component must be wrapped in the <Provider> component from App Bridge React.");
  return e;
}
Re.useAppBridge = Up;
var Kc = {}, ka = {}, Ba = {}, ht = {}, La = {}, sa = {}, re = {}, Ua = {};
Object.defineProperty(Ua, "__esModule", { value: !0 });
function Qc(e, n) {
  if (n == null || typeof e > "u" || !Object.prototype.isPrototypeOf.call(Object.getPrototypeOf(e), n) || n.constructor.name !== "Object" && n.constructor.name !== "Array")
    return n;
  var t = {};
  return Object.keys(n).forEach(function(r) {
    var i = Object.prototype.hasOwnProperty.call(e, r);
    i && typeof e[r] == "object" && !Array.isArray(e[r]) ? t[r] = Qc(e[r], n[r]) : t[r] = n[r];
  }), Object.keys(e).forEach(function(r) {
    var i = Object.prototype.hasOwnProperty.call(n, r);
    i || (t[r] = e[r]);
  }), Object.setPrototypeOf(t, Object.getPrototypeOf(e)), t;
}
Ua.default = Qc;
var Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.SEPARATOR = Lt.PREFIX = void 0;
Lt.PREFIX = "APP";
Lt.SEPARATOR = "::";
var ae = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ComponentType = e.Group = void 0, function(n) {
    n.AuthCode = "AuthCode", n.Button = "Button", n.ButtonGroup = "ButtonGroup", n.Cart = "Cart", n.Client = "Client", n.ContextualSaveBar = "ContextualSaveBar", n.Error = "Error", n.Features = "Features", n.FeedbackModal = "FeedbackModal", n.Fullscreen = "Fullscreen", n.LeaveConfirmation = "LeaveConfirmation", n.Link = "Link", n.Loading = "Loading", n.Menu = "Menu", n.Modal = "Modal", n.Navigation = "Navigation", n.Performance = "Performance", n.Pos = "Pos", n.Print = "Print", n.ResourcePicker = "Resource_Picker", n.unstable_Picker = "unstable_Picker", n.Scanner = "Scanner", n.SessionToken = "SessionToken", n.Share = "Share", n.TitleBar = "TitleBar", n.Toast = "Toast", n.MarketingExternalActivityTopBar = "MarketingExternalActivityTopBar", n.WebVitals = "WebVitals";
  }(e.Group || (e.Group = {})), function(n) {
    n.Button = "Button", n.ButtonGroup = "ButtonGroup";
  }(e.ComponentType || (e.ComponentType = {}));
})(ae);
(function(e) {
  var n = b && b.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.updateActionFromPayload = e.isValidOptionalString = e.isValidOptionalNumber = e.forEachInEnum = e.getMergedProps = e.findMatchInEnum = e.getEventNameSpace = e.NonSnakeCaseGroup = e.actionWrapper = void 0;
  var t = n(Ua), r = Lt, i = ae;
  function a(c) {
    return c;
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
  function o(c) {
    return c.replace(/([A-Z])/g, function(v, m, g) {
      return (g === 0 ? "" : "_") + v[0].toLowerCase();
    });
  }
  function l(c) {
    return e.NonSnakeCaseGroup.includes(c) ? c.toUpperCase() : o(c).toUpperCase();
  }
  function y(c, v, m) {
    if (v.startsWith("" + r.PREFIX + r.SEPARATOR))
      return v;
    var g = l(c);
    if (m) {
      var O = m.subgroups, _ = m.type;
      O && O.length > 0 && (g += g.length > 0 ? r.SEPARATOR : "", O.forEach(function(T, A) {
        g += "" + T.toUpperCase() + (A < O.length - 1 ? r.SEPARATOR : "");
      })), _ !== c && _ && (g += "" + (g.length > 0 ? r.SEPARATOR : "") + _.toUpperCase());
    }
    return g && (g += "" + (g.length > 0 ? r.SEPARATOR : "") + v.toUpperCase()), "" + r.PREFIX + r.SEPARATOR + g;
  }
  e.getEventNameSpace = y;
  function u(c, v) {
    var m = Object.keys(c).find(function(g) {
      return v === c[g];
    });
    return m ? c[m] : void 0;
  }
  e.findMatchInEnum = u;
  function f(c, v) {
    var m = t.default(c, v);
    if (!m) {
      var g = Object.assign(c, v);
      return g;
    }
    return m;
  }
  e.getMergedProps = f;
  function s(c, v) {
    Object.keys(c).forEach(function(m) {
      v(c[m]);
    });
  }
  e.forEachInEnum = s;
  function h(c) {
    return c == null || typeof c == "number";
  }
  e.isValidOptionalNumber = h;
  function p(c) {
    return c == null || typeof c == "string";
  }
  e.isValidOptionalString = p;
  function d(c, v) {
    var m = c.id;
    return m === v.id ? (Object.assign(c, f(c, v)), !0) : !1;
  }
  e.updateActionFromPayload = d;
})(re);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.Action = void 0;
  var n = re, t = ae, r;
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
})(sa);
var Et = {};
const Fp = "@shopify/app-bridge", Vp = "3.7.7", Gp = "index.d.ts", $p = "index.js", qp = "umd/index.js", Wp = "umd/index.js", Hp = [
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
], zp = {
  access: "public",
  "@shopify:registry": "https://registry.npmjs.org"
}, Kp = "git@github.com:Shopify/app-bridge.git", Qp = "https://shopify.dev/tools/app-bridge", Yp = "Shopify Inc.", Jp = "MIT", Xp = {
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
}, Zp = !1, xp = {
  "@shopify/app-bridge-core": "1.0.2",
  base64url: "^3.0.1",
  "web-vitals": "^3.0.1"
}, eh = {
  "@types/node": "^10.12.5",
  shx: "^0.3.3"
}, th = {
  name: Fp,
  version: Vp,
  types: Gp,
  main: $p,
  unpkg: qp,
  jsdelivr: Wp,
  files: Hp,
  private: !1,
  publishConfig: zp,
  repository: Kp,
  homepage: Qp,
  author: Yp,
  license: Jp,
  scripts: Xp,
  sideEffects: Zp,
  "size-limit": [
    {
      limit: "10.5 KB",
      path: "production.js"
    }
  ],
  dependencies: xp,
  devDependencies: eh
};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getPackageName = e.getVersion = e.getMergedProps = e.updateActionFromPayload = e.isValidOptionalString = e.isValidOptionalNumber = e.NonSnakeCaseGroup = e.getEventNameSpace = e.forEachInEnum = e.findMatchInEnum = e.actionWrapper = void 0;
  var n = re;
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
  var t = th;
  function r() {
    return t.version;
  }
  e.getVersion = r;
  function i() {
    return t.name;
  }
  e.getPackageName = i;
})(Et);
var Tt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ComponentType = e.Group = void 0;
  var n = ae;
  Object.defineProperty(e, "Group", { enumerable: !0, get: function() {
    return n.Group;
  } }), Object.defineProperty(e, "ComponentType", { enumerable: !0, get: function() {
    return n.ComponentType;
  } });
})(Tt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.request = e.Action = e.respond = void 0;
  var n = sa;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
  var t = Et, r = Tt, i = sa;
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
})(La);
var Qn = {}, _t = {}, ue = {}, dn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LifecycleHook = e.PermissionType = e.MessageType = void 0, function(n) {
    n.GetState = "getState", n.Dispatch = "dispatch", n.Subscribe = "subscribe", n.Unsubscribe = "unsubscribe";
  }(e.MessageType || (e.MessageType = {})), function(n) {
    n.Dispatch = "Dispatch", n.Subscribe = "Subscribe";
  }(e.PermissionType || (e.PermissionType = {})), function(n) {
    n.UpdateAction = "UpdateAction", n.DispatchAction = "DispatchAction";
  }(e.LifecycleHook || (e.LifecycleHook = {}));
})(dn);
var St = {};
Object.defineProperty(St, "__esModule", { value: !0 });
St.removeFromCollection = St.addAndRemoveFromCollection = void 0;
function nh(e, n, t) {
  return e.push(n), function() {
    return Yc(e, n, t);
  };
}
St.addAndRemoveFromCollection = nh;
function Yc(e, n, t) {
  var r = e.findIndex(function(i) {
    return i === n;
  });
  return r >= 0 ? (e.splice(r, 1), t && t(n), !0) : !1;
}
St.removeFromCollection = Yc;
var Fn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.permissionAction = e.isErrorEventName = e.throwError = e.invalidOriginAction = e.fromAction = e.AppBridgeError = e.AppActionType = e.Action = void 0;
  var n = ae, t = re, r;
  (function(s) {
    s.INVALID_ACTION = "APP::ERROR::INVALID_ACTION", s.INVALID_ACTION_TYPE = "APP::ERROR::INVALID_ACTION_TYPE", s.INVALID_PAYLOAD = "APP::ERROR::INVALID_PAYLOAD", s.INVALID_OPTIONS = "APP::ERROR::INVALID_OPTIONS", s.UNEXPECTED_ACTION = "APP::ERROR::UNEXPECTED_ACTION", s.PERSISTENCE = "APP::ERROR::PERSISTENCE", s.UNSUPPORTED_OPERATION = "APP::ERROR::UNSUPPORTED_OPERATION", s.NETWORK = "APP::ERROR::NETWORK", s.PERMISSION = "APP::ERROR::PERMISSION", s.FAILED_AUTHENTICATION = "APP::ERROR::FAILED_AUTHENTICATION", s.INVALID_ORIGIN = "APP::ERROR::INVALID_ORIGIN";
  })(r = e.Action || (e.Action = {})), function(s) {
    s.INVALID_CONFIG = "APP::ERROR::INVALID_CONFIG", s.MISSING_CONFIG = "APP::APP_ERROR::MISSING_CONFIG", s.MISSING_APP_BRIDGE_MIDDLEWARE = "APP::APP_ERROR::MISSING_APP_BRIDGE_MIDDLEWARE", s.WINDOW_UNDEFINED = "APP::APP_ERROR::WINDOW_UNDEFINED", s.REDUX_REINSTANTIATED = "APP::APP_ERROR::REDUX_REINSTANTIATED", s.MISSING_LOCAL_ORIGIN = "APP::APP_ERROR::MISSING_LOCAL_ORIGIN", s.MISSING_HOST_PROVIDER = "APP::APP_ERROR::MISSING_HOST_PROVIDER", s.MISSING_ROUTER_CONTEXT = "APP::APP_ERROR::MISSING_ROUTER_CONTEXT", s.MISSING_HISTORY_BLOCK = "APP::APP_ERROR::MISSING_HISTORY_BLOCK";
  }(e.AppActionType || (e.AppActionType = {}));
  var i = (
    /** @class */
    function() {
      function s(h) {
        this.name = "AppBridgeError", this.message = h, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(this.message).stack;
      }
      return s;
    }()
  );
  e.AppBridgeError = i, i.prototype = Object.create(Error.prototype);
  function a(s, h, p) {
    var d = s ? h + ": " + s : h, c = new i(d);
    return c.action = p, c.type = h, c;
  }
  e.fromAction = a;
  function o(s) {
    return t.actionWrapper({
      group: n.Group.Error,
      payload: {
        message: s,
        type: r.INVALID_ORIGIN
      },
      type: r.INVALID_ORIGIN
    });
  }
  e.invalidOriginAction = o;
  function l() {
    for (var s = [], h = 0; h < arguments.length; h++)
      s[h] = arguments[h];
    var p = s[0], d, c;
    throw typeof s[1] == "string" ? d = s[1] : (c = s[1], d = s[2] || ""), a(d, p, c);
  }
  e.throwError = l;
  function y(s) {
    var h = t.findMatchInEnum(r, s);
    return typeof h == "string";
  }
  e.isErrorEventName = y;
  function u(s, h, p) {
    var d = h.payload;
    return t.actionWrapper({
      type: s,
      group: n.Group.Error,
      payload: {
        action: h,
        message: p,
        type: s,
        id: d && d.id ? d.id : void 0
      }
    });
  }
  function f(s, h) {
    return u(r.PERMISSION, s, h || "Action is not permitted");
  }
  e.permissionAction = f;
})(Fn);
var bn = {};
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.generateUuid = void 0;
function Kt(e) {
  return Array.from(e).map(function(n) {
    return ("00" + n.toString(16)).slice(-2);
  }).join("");
}
function Qt(e) {
  if (typeof Uint8Array == "function" && typeof window == "object" && window.crypto) {
    var n = new Uint8Array(e), t = window.crypto.getRandomValues(n);
    if (t)
      return t;
  }
  return Array.from(new Array(e), function() {
    return Math.random() * 255 | 0;
  });
}
function Jc() {
  var e = 64, n = Qt(1), t = Qt(2);
  return n[0] &= 191, t[0] &= 15 | e, [
    // time-low
    Kt(Qt(4)),
    "-",
    // time-mid
    Kt(Qt(2)),
    "-",
    // time-high-and-version
    Kt(t),
    "-",
    // clock-seq-and-reserved
    Kt(n),
    // clock-seq-loq
    Kt(Qt(1)),
    "-",
    // node
    Kt(Qt(6))
  ].join("");
}
bn.generateUuid = Jc;
bn.default = Jc;
var rh = b && b.__extends || function() {
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
}(), wr = b && b.__assign || function() {
  return wr = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, wr.apply(this, arguments);
}, ih = b && b.__spreadArray || function(e, n) {
  for (var t = 0, r = n.length, i = e.length; t < r; t++, i++)
    e[i] = n[t];
  return e;
}, ah = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.unsubscribeActions = ue.ActionSetWithChildren = ue.ActionSet = void 0;
var oh = dn, la = St, or = Fn, uh = ae, ch = ah(bn), pi = re, Xc = (
  /** @class */
  function() {
    function e(n, t, r, i) {
      var a = this;
      this.app = n, this.type = t, this.group = r, this.subgroups = [], this.subscriptions = [], n || or.throwError(or.Action.INVALID_ACTION, "Missing required `app`"), this.id = i || ch.default(), this.defaultGroup = r;
      var o = this.set;
      this.set = function() {
        for (var l, y = [], u = 0; u < arguments.length; u++)
          y[u] = arguments[u];
        return a.app.hooks ? (l = a.app.hooks).run.apply(l, ih([oh.LifecycleHook.UpdateAction, o, a], y)) : o.apply(a, y);
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
      var i = n.eventType, a = n.callback, o = n.component, l;
      return l = this.subscriptions.findIndex(function(y) {
        return y === n;
      }), l >= 0 ? this.subscriptions[l].unsubscribe() : l = void 0, this.group = t, this.subgroups = r, Object.assign(o, { subgroups: this.subgroups }), this.subscribe(i, a, o, l);
    }, e.prototype.error = function(n) {
      var t = this, r = [];
      return pi.forEachInEnum(or.Action, function(i) {
        r.push(t.subscriptions.length), t.subscribe(i, n);
      }), function() {
        var i = r.map(function(a) {
          return t.subscriptions[a];
        });
        i.forEach(function(a) {
          la.removeFromCollection(t.subscriptions, a, function(o) {
            o.unsubscribe();
          });
        });
      };
    }, e.prototype.subscribe = function(n, t, r, i) {
      var a = this, o = r || this.component, l = n.toUpperCase(), y = typeof i == "number" ? t : t.bind(this), u;
      or.isErrorEventName(n) ? u = pi.getEventNameSpace(uh.Group.Error, n, wr(wr({}, o), { type: "" })) : u = pi.getEventNameSpace(this.group, n, o);
      var f = this.app.subscribe(u, y, r ? r.id : this.id), s = {
        eventType: l,
        unsubscribe: f,
        callback: y,
        component: o,
        updateSubscribe: function(h, p) {
          return a.updateSubscription(s, h, p);
        }
      };
      return typeof i == "number" && i >= 0 && i < this.subscriptions.length ? this.subscriptions[i] = s : this.subscriptions.push(s), f;
    }, e.prototype.unsubscribe = function(n) {
      return n === void 0 && (n = !1), Fa(this.subscriptions, this.defaultGroup, n), this;
    }, e;
  }()
);
ue.ActionSet = Xc;
var sh = (
  /** @class */
  function(e) {
    rh(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.children = [], t;
    }
    return n.prototype.unsubscribe = function(t, r) {
      return t === void 0 && (t = !0), r === void 0 && (r = !1), Fa(this.subscriptions, this.defaultGroup, r), this.children.forEach(function(i) {
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
      var a = this, o = t.subscriptions, l = this.getChild(t.id);
      return l || this.children.push(t), !o || r === t.group && i === t.subgroups ? this : (o.forEach(function(y) {
        var u = y.updateSubscribe;
        u(r, i);
      }), Object.assign(t, { group: r, subgroups: i }), t instanceof n && t.children.forEach(function(y) {
        return a.addChild(y, r, i);
      }), this);
    }, n.prototype.removeChild = function(t) {
      var r = this;
      return la.removeFromCollection(this.children, this.getChild(t), function() {
        var i = r.subscriptions.filter(function(a) {
          return a.component.id === t;
        });
        i.forEach(function(a) {
          la.removeFromCollection(r.subscriptions, a, function(o) {
            o.unsubscribe();
          });
        });
      }), this;
    }, n.prototype.subscribeToChild = function(t, r, i) {
      var a = this, o = i.bind(this);
      if (r instanceof Array)
        return r.forEach(function(f) {
          return a.subscribeToChild(t, f, i);
        }), this;
      if (typeof r != "string")
        return this;
      var l = r.toUpperCase(), y = this.getChildSubscriptions(t.id, l);
      if (y.length > 0)
        y.forEach(function(f) {
          return f.updateSubscribe(a.group, t.subgroups);
        });
      else {
        var u = {
          id: t.id,
          subgroups: t.subgroups,
          type: t.type
        };
        this.subscribe(l, o, u);
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
      for (var a = t.filter(function(y, u, f) {
        return u === f.indexOf(y);
      }), o = a.map(function(y) {
        return y.id;
      }), l = r.filter(function(y) {
        return o.indexOf(y.id) < 0;
      }); l.length > 0; ) {
        var i = l.pop();
        if (!i)
          break;
        this.removeChild(i.id);
      }
      return a;
    }, n;
  }(Xc)
);
ue.ActionSetWithChildren = sh;
function Fa(e, n, t) {
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
ue.unsubscribeActions = Fa;
(function(e) {
  var n = b && b.__extends || function() {
    var f = function(s, h) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, d) {
        p.__proto__ = d;
      } || function(p, d) {
        for (var c in d)
          Object.prototype.hasOwnProperty.call(d, c) && (p[c] = d[c]);
      }, f(s, h);
    };
    return function(s, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      f(s, h);
      function p() {
        this.constructor = s;
      }
      s.prototype = h === null ? Object.create(h) : (p.prototype = h.prototype, new p());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(f) {
      for (var s, h = 1, p = arguments.length; h < p; h++) {
        s = arguments[h];
        for (var d in s)
          Object.prototype.hasOwnProperty.call(s, d) && (f[d] = s[d]);
      }
      return f;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Button = e.update = e.clickButton = e.Style = e.Icon = e.Action = void 0;
  var r = re, i = ue, a = ae, o;
  (function(f) {
    f.CLICK = "CLICK", f.UPDATE = "UPDATE";
  })(o = e.Action || (e.Action = {})), function(f) {
    f.Print = "print";
  }(e.Icon || (e.Icon = {})), function(f) {
    f.Danger = "danger";
  }(e.Style || (e.Style = {}));
  function l(f, s, h) {
    var p = s.id, d = r.getEventNameSpace(f, o.CLICK, s), c = {
      id: p,
      payload: h
    };
    return r.actionWrapper({ type: d, group: f, payload: c });
  }
  e.clickButton = l;
  function y(f, s, h) {
    var p = s.id, d = h.label, c = r.getEventNameSpace(f, o.UPDATE, s), v = t(t({}, h), { id: p, label: d });
    return r.actionWrapper({ type: c, group: f, payload: v });
  }
  e.update = y;
  var u = (
    /** @class */
    function(f) {
      n(s, f);
      function s(h, p) {
        var d = f.call(this, h, a.ComponentType.Button, a.Group.Button) || this;
        return d.disabled = !1, d.loading = !1, d.plain = !1, d.set(p, !1), d;
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
          return t(t({}, this.options), { id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.set = function(h, p) {
        p === void 0 && (p = !0);
        var d = r.getMergedProps(this.options, h), c = d.label, v = d.disabled, m = d.icon, g = d.style, O = d.loading, _ = d.plain;
        return this.label = c, this.disabled = !!v, this.icon = m, this.style = g, this.loading = !!O, this.plain = !!_, p && this.dispatch(o.UPDATE), this;
      }, s.prototype.dispatch = function(h, p) {
        switch (h) {
          case o.CLICK:
            this.app.dispatch(l(this.group, this.component, p));
            break;
          case o.UPDATE: {
            var d = y(this.group, this.component, this.payload);
            this.app.dispatch(d);
            break;
          }
        }
        return this;
      }, s;
    }(i.ActionSet)
  );
  e.Button = u;
})(_t);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.isValidButtonProps = e.Button = e.update = e.Style = e.Icon = e.clickButton = e.Action = void 0;
  var n = _t;
  Object.defineProperty(e, "Button", { enumerable: !0, get: function() {
    return n.Button;
  } });
  var t = _t;
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
})(Qn);
var Hr = {}, Ut = {}, Vt = {};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.getSingleButton = void 0;
var lh = _t;
function dh(e, n, t, r) {
  return e.addChild(n, e.group, t), e.subscribeToChild(n, lh.Action.UPDATE, r), n.payload;
}
Vt.getSingleButton = dh;
(function(e) {
  var n = b && b.__extends || function() {
    var d = function(c, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
      }, d(c, v);
    };
    return function(c, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      d(c, v);
      function m() {
        this.constructor = c;
      }
      c.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(d) {
      for (var c, v = 1, m = arguments.length; v < m; v++) {
        c = arguments[v];
        for (var g in c)
          Object.prototype.hasOwnProperty.call(c, g) && (d[g] = c[g]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ButtonGroup = e.isGroupedButtonPayload = e.isGroupedButton = e.update = e.Action = void 0;
  var r = Vt, i = re, a = ue, o = ae, l;
  (function(d) {
    d.UPDATE = "UPDATE";
  })(l = e.Action || (e.Action = {}));
  function y(d, c, v) {
    return p(d, c, l.UPDATE, v);
  }
  e.update = y;
  function u(d) {
    var c = d;
    return c.buttons && c.buttons.length > 0 && c.label !== void 0;
  }
  e.isGroupedButton = u;
  function f(d) {
    var c = d;
    return Array.isArray(c.buttons) && typeof c.id == "string" && typeof c.label == "string";
  }
  e.isGroupedButtonPayload = f;
  var s = (
    /** @class */
    function(d) {
      n(c, d);
      function c(v, m) {
        var g = d.call(this, v, o.ComponentType.ButtonGroup, o.Group.ButtonGroup) || this;
        return g.disabled = !1, g.plain = !1, g.buttonsOptions = [], g.buttons = [], g.set(m, !1), g;
      }
      return Object.defineProperty(c.prototype, "options", {
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
      }), Object.defineProperty(c.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), c.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = i.getMergedProps(this.options, v), O = g.label, _ = g.disabled, T = g.buttons, A = g.plain;
        return this.label = O, this.disabled = !!_, this.buttons = this.getButtons(T), this.plain = !!A, m && this.dispatch(l.UPDATE), this;
      }, c.prototype.dispatch = function(v) {
        switch (v) {
          case l.UPDATE: {
            var m = y(this.group, this.component, this.payload);
            this.app.dispatch(m);
            break;
          }
        }
        return this;
      }, c.prototype.updateButtons = function(v) {
        if (!(!this.buttons || this.buttons.length === 0)) {
          for (var m, g = 0, O = this.buttons; g < O.length; g++) {
            var _ = O[g];
            if (m = i.updateActionFromPayload(_, v), m)
              break;
          }
          m && this.dispatch(l.UPDATE);
        }
      }, c.prototype.getSingleButton = function(v) {
        return r.getSingleButton(this, v, this.subgroups, this.updateButtons);
      }, c.prototype.getButtons = function(v) {
        var m = this, g = [];
        return v ? (v.forEach(function(O) {
          var _ = r.getSingleButton(m, O, m.subgroups, m.updateButtons);
          g.push(_);
        }), this.buttonsOptions = v, g) : [];
      }, c;
    }(a.ActionSetWithChildren)
  );
  e.ButtonGroup = s;
  function h(d, c) {
    return new s(d, c);
  }
  e.create = h;
  function p(d, c, v, m, g) {
    var O = c.id, _ = m.label, T = i.getEventNameSpace(d, v, c), A = t(t({}, m), { id: O, label: _, payload: g });
    return i.actionWrapper({ type: T, group: d, payload: A });
  }
})(Ut);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ButtonGroup = e.isGroupedButtonPayload = e.isGroupedButton = e.update = e.Action = void 0;
  var n = Ut;
  Object.defineProperty(e, "ButtonGroup", { enumerable: !0, get: function() {
    return n.ButtonGroup;
  } });
  var t = Ut;
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
})(Hr);
var Va = {}, Zc = {};
(function(e) {
  var n = b && b.__extends || function() {
    var E = function(S, w) {
      return E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(I, j) {
        I.__proto__ = j;
      } || function(I, j) {
        for (var k in j)
          Object.prototype.hasOwnProperty.call(j, k) && (I[k] = j[k]);
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
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(E) {
      for (var S, w = 1, I = arguments.length; w < I; w++) {
        S = arguments[w];
        for (var j in S)
          Object.prototype.hasOwnProperty.call(S, j) && (E[j] = S[j]);
      }
      return E;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Cart = e.setLineItemProperties = e.removeLineItemDiscount = e.setLineItemDiscount = e.removeLineItem = e.updateLineItem = e.addLineItem = e.removeProperties = e.setProperties = e.setDiscount = e.updateCustomerAddress = e.addCustomerAddress = e.setCustomer = e.update = e.fetch = e.Action = void 0;
  var r = re, i = ue, a = ae, o;
  (function(E) {
    E.FETCH = "APP::CART::FETCH", E.UPDATE = "APP::CART::UPDATE", E.SET_CUSTOMER = "APP::CART::SET_CUSTOMER", E.REMOVE_CUSTOMER = "APP::CART::REMOVE_CUSTOMER", E.ADD_CUSTOMER_ADDRESS = "APP::CART::ADD_CUSTOMER_ADDRESS", E.UPDATE_CUSTOMER_ADDRESS = "APP::CART::UPDATE_CUSTOMER_ADDRESS", E.SET_DISCOUNT = "APP::CART::SET_DISCOUNT", E.REMOVE_DISCOUNT = "APP::CART::REMOVE_DISCOUNT", E.SET_PROPERTIES = "APP::CART::SET_PROPERTIES", E.REMOVE_PROPERTIES = "APP::CART::REMOVE_PROPERTIES", E.CLEAR = "APP::CART::CLEAR", E.ADD_LINE_ITEM = "APP::CART::ADD_LINE_ITEM", E.UPDATE_LINE_ITEM = "APP::CART::UPDATE_LINE_ITEM", E.REMOVE_LINE_ITEM = "APP::CART::REMOVE_LINE_ITEM", E.SET_LINE_ITEM_DISCOUNT = "APP::CART::SET_LINE_ITEM_DISCOUNT", E.REMOVE_LINE_ITEM_DISCOUNT = "APP::CART::REMOVE_LINE_ITEM_DISCOUNT", E.SET_LINE_ITEM_PROPERTIES = "APP::CART::SET_LINE_ITEM_PROPERTIES", E.REMOVE_LINE_ITEM_PROPERTIES = "APP::CART::REMOVE_LINE_ITEM_PROPERTIES";
  })(o = e.Action || (e.Action = {}));
  function l(E, S) {
    return S === void 0 && (S = {}), r.actionWrapper({
      group: a.Group.Cart,
      type: E,
      payload: S
    });
  }
  function y() {
    return l(o.FETCH);
  }
  e.fetch = y;
  function u(E) {
    return l(o.UPDATE, E);
  }
  e.update = u;
  function f(E) {
    return l(o.SET_CUSTOMER, E);
  }
  e.setCustomer = f;
  function s(E) {
    return l(o.ADD_CUSTOMER_ADDRESS, E);
  }
  e.addCustomerAddress = s;
  function h(E) {
    return l(o.UPDATE_CUSTOMER_ADDRESS, E);
  }
  e.updateCustomerAddress = h;
  function p(E) {
    return l(o.SET_DISCOUNT, E);
  }
  e.setDiscount = p;
  function d(E) {
    return l(o.SET_PROPERTIES, E);
  }
  e.setProperties = d;
  function c(E) {
    return l(o.REMOVE_PROPERTIES, E);
  }
  e.removeProperties = c;
  function v(E) {
    return l(o.ADD_LINE_ITEM, E);
  }
  e.addLineItem = v;
  function m(E) {
    return l(o.UPDATE_LINE_ITEM, E);
  }
  e.updateLineItem = m;
  function g(E) {
    return l(o.REMOVE_LINE_ITEM, E);
  }
  e.removeLineItem = g;
  function O(E) {
    return l(o.SET_LINE_ITEM_DISCOUNT, E);
  }
  e.setLineItemDiscount = O;
  function _(E) {
    return l(o.REMOVE_LINE_ITEM_DISCOUNT, E);
  }
  e.removeLineItemDiscount = _;
  function T(E) {
    return l(o.SET_LINE_ITEM_PROPERTIES, E);
  }
  e.setLineItemProperties = T;
  var A = (
    /** @class */
    function(E) {
      n(S, E);
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
        this.app.dispatch(l(w, t(t({}, I), { id: this.id })));
      }, S;
    }(i.ActionSet)
  );
  e.Cart = A;
})(Zc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.setLineItemProperties = e.removeLineItemDiscount = e.setLineItemDiscount = e.removeLineItem = e.updateLineItem = e.addLineItem = e.removeProperties = e.setProperties = e.setDiscount = e.updateCustomerAddress = e.addCustomerAddress = e.setCustomer = e.update = e.fetch = e.Cart = e.Action = void 0;
  var n = Zc;
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
})(Va);
var Ga = {}, xc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(n) {
    n.INITIALIZE = "APP::CLIENT::INITIALIZE";
  }(e.Action || (e.Action = {}));
})(xc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initialize = e.Action = void 0;
  var n = xc;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
  var t = Tt, r = Et;
  function i() {
    return r.actionWrapper({
      group: t.Group.Client,
      type: n.Action.INITIALIZE
    });
  }
  e.initialize = i;
})(Ga);
var Gt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.networkAction = e.persistenceAction = e.unsupportedOperationAction = e.unexpectedAction = e.invalidAction = e.invalidActionType = e.invalidPayload = e.Message = e.fromAction = e.Action = e.permissionAction = e.isErrorEventName = e.throwError = e.invalidOriginAction = e.AppBridgeError = e.AppActionType = void 0;
  var n = Fn;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "fromAction", { enumerable: !0, get: function() {
    return n.fromAction;
  } });
  var t = Et, r = Tt, i = Fn;
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
  function a(p, d, c) {
    var v = d.payload;
    return t.actionWrapper({
      type: p,
      group: r.Group.Error,
      payload: {
        action: d,
        message: c,
        type: p,
        id: v && v.id ? v.id : void 0
      }
    });
  }
  (function(p) {
    p.MISSING_PAYLOAD = "Missing payload", p.INVALID_PAYLOAD_ID = "Id in payload is missing or invalid";
  })(e.Message || (e.Message = {}));
  function o(p, d) {
    return a(n.Action.INVALID_PAYLOAD, p, d || "The action's payload is missing required properties or has invalid properties");
  }
  e.invalidPayload = o;
  function l(p, d) {
    return t.actionWrapper({
      group: r.Group.Error,
      payload: {
        action: p,
        message: d || "The action type is invalid or unsupported",
        type: n.Action.INVALID_ACTION_TYPE
      },
      type: n.Action.INVALID_ACTION_TYPE
    });
  }
  e.invalidActionType = l;
  function y(p, d) {
    return t.actionWrapper({
      group: r.Group.Error,
      payload: {
        action: p,
        message: d || "The action's has missing/invalid values for `group`, `type` or `version`",
        type: n.Action.INVALID_ACTION
      },
      type: n.Action.INVALID_ACTION
    });
  }
  e.invalidAction = y;
  function u(p, d) {
    return t.actionWrapper({
      group: r.Group.Error,
      payload: {
        action: p,
        message: d || "Action cannot be called at this time",
        type: n.Action.UNEXPECTED_ACTION
      },
      type: n.Action.UNEXPECTED_ACTION
    });
  }
  e.unexpectedAction = u;
  function f(p, d) {
    return a(n.Action.UNSUPPORTED_OPERATION, p, d || "The action type is unsupported");
  }
  e.unsupportedOperationAction = f;
  function s(p, d) {
    return a(n.Action.PERSISTENCE, p, d || "Action cannot be persisted on server");
  }
  e.persistenceAction = s;
  function h(p, d) {
    return a(n.Action.NETWORK, p, d || "Network error");
  }
  e.networkAction = h;
})(Gt);
var es = {}, ts = {}, Vn = {};
(function(e) {
  var n = b && b.__extends || function() {
    var s = function(h, p) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, c) {
        d.__proto__ = c;
      } || function(d, c) {
        for (var v in c)
          Object.prototype.hasOwnProperty.call(c, v) && (d[v] = c[v]);
      }, s(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      s(h, p);
      function d() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (d.prototype = p.prototype, new d());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(s) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var c in h)
          Object.prototype.hasOwnProperty.call(h, c) && (s[c] = h[c]);
      }
      return s;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Toast = e.primaryAction = e.clear = e.show = e.Action = void 0;
  var r = re, i = ue, a = ae, o;
  (function(s) {
    s.SHOW = "APP::TOAST::SHOW", s.CLEAR = "APP::TOAST::CLEAR", s.ACTION = "APP::TOAST::ACTION";
  })(o = e.Action || (e.Action = {}));
  function l(s) {
    return r.actionWrapper({
      group: a.Group.Toast,
      payload: s,
      type: o.SHOW
    });
  }
  e.show = l;
  function y(s) {
    return r.actionWrapper({
      payload: s,
      group: a.Group.Toast,
      type: o.CLEAR
    });
  }
  e.clear = y;
  function u(s) {
    return r.actionWrapper({
      payload: s,
      group: a.Group.Toast,
      type: o.ACTION
    });
  }
  e.primaryAction = u;
  var f = (
    /** @class */
    function(s) {
      n(h, s);
      function h(p, d) {
        var c = s.call(this, p, a.Group.Toast, a.Group.Toast) || this;
        return c.message = "", c.duration = 5e3, c.set(d), c;
      }
      return Object.defineProperty(h.prototype, "options", {
        get: function() {
          var p;
          return {
            duration: this.duration,
            isError: this.isError,
            message: this.message,
            action: !((p = this.action) === null || p === void 0) && p.content ? {
              content: this.action.content
            } : void 0
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(h.prototype, "payload", {
        get: function() {
          return t({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), h.prototype.set = function(p) {
        var d = r.getMergedProps(this.options, p), c = d.message, v = d.duration, m = d.isError, g = d.action;
        return this.message = c, this.duration = v, this.isError = m, this.action = g != null && g.content ? {
          content: g.content || ""
        } : void 0, this;
      }, h.prototype.dispatch = function(p) {
        switch (p) {
          case o.SHOW: {
            var d = l(this.payload);
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
      }, h;
    }(i.ActionSet)
  );
  e.Toast = f;
})(Vn);
(function(e) {
  var n = b && b.__extends || function() {
    var a = function(o, l) {
      return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, u) {
        y.__proto__ = u;
      } || function(y, u) {
        for (var f in u)
          Object.prototype.hasOwnProperty.call(u, f) && (y[f] = u[f]);
      }, a(o, l);
    };
    return function(o, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      a(o, l);
      function y() {
        this.constructor = o;
      }
      o.prototype = l === null ? Object.create(l) : (y.prototype = l.prototype, new y());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Flash = e.show = e.clear = void 0;
  var t = Vn;
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
})(ts);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(ts, e);
})(es);
var $a = {}, ns = {}, qa = {}, zr = {}, Wa = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(n) {
    n.UPDATE = "APP::FEATURES::UPDATE", n.REQUEST = "APP::FEATURES::REQUEST", n.REQUEST_UPDATE = "APP::FEATURES::REQUEST::UPDATE";
  }(e.Action || (e.Action = {}));
})(Wa);
var fh = b && b.__extends || function() {
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
}(), Ir = b && b.__assign || function() {
  return Ir = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Ir.apply(this, arguments);
};
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.Features = void 0;
var ph = re, hh = ue, hi = ae, hu = Wa, yh = (
  /** @class */
  function(e) {
    fh(n, e);
    function n(t, r) {
      return e.call(this, t, hi.Group.Features, hi.Group.Features, r ? r.id : void 0) || this;
    }
    return n.prototype.dispatch = function(t, r) {
      switch (t) {
        case hu.Action.REQUEST:
          this.dispatchFeaturesAction(hu.Action.REQUEST, r);
          break;
      }
      return this;
    }, n.prototype.dispatchFeaturesAction = function(t, r) {
      this.app.dispatch(ph.actionWrapper({
        group: hi.Group.Features,
        type: t,
        payload: Ir(Ir({}, r || {}), { id: this.id })
      }));
    }, n;
  }(hh.ActionSet)
);
zr.Features = yh;
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(zr, e), t(Wa, e);
})(qa);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Features = void 0;
  var n = qa;
  Object.defineProperty(e, "Features", { enumerable: !0, get: function() {
    return n.Features;
  } });
  function t(r, i) {
    return new n.Features(r, i);
  }
  e.create = t;
})(ns);
var Ha = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0;
  var n = qa;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
})(Ha);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(ns, e), t(Ha, e);
})($a);
var rs = {}, za = {};
(function(e) {
  var n = b && b.__extends || function() {
    var s = function(h, p) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, c) {
        d.__proto__ = c;
      } || function(d, c) {
        for (var v in c)
          Object.prototype.hasOwnProperty.call(c, v) && (d[v] = c[v]);
      }, s(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      s(h, p);
      function d() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (d.prototype = p.prototype, new d());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(s) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var c in h)
          Object.prototype.hasOwnProperty.call(h, c) && (s[c] = h[c]);
      }
      return s;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.FeedbackModal = e.close = e.open = e.Action = void 0;
  var r = re, i = ue, a = ae, o;
  (function(s) {
    s.OPEN = "APP::FEEDBACK_MODAL::OPEN", s.CLOSE = "APP::FEEDBACK_MODAL::CLOSE";
  })(o = e.Action || (e.Action = {}));
  function l(s) {
    return r.actionWrapper({
      group: a.Group.FeedbackModal,
      payload: s,
      type: o.OPEN
    });
  }
  e.open = l;
  function y(s) {
    return r.actionWrapper({
      group: a.Group.FeedbackModal,
      payload: s,
      type: o.CLOSE
    });
  }
  e.close = y;
  var u = (
    /** @class */
    function(s) {
      n(h, s);
      function h(p, d) {
        var c = s.call(this, p, a.Group.FeedbackModal, a.Group.FeedbackModal) || this;
        return c.options = d, c.set(d), c;
      }
      return Object.defineProperty(h.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return t({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), h.prototype.set = function(p) {
        return this.options = r.getMergedProps(this.options, p), this;
      }, h.prototype.dispatch = function(p) {
        switch (p) {
          case o.OPEN: {
            var d = l(this.payload);
            this.app.dispatch(d);
            break;
          }
          case o.CLOSE: {
            var c = y(this.payload);
            this.app.dispatch(c);
            break;
          }
        }
        return this;
      }, h;
    }(i.ActionSet)
  );
  e.FeedbackModal = u;
  function f(s, h) {
    return new u(s, h);
  }
  e.create = f;
})(za);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.FeedbackModal = e.close = e.open = e.Action = void 0;
  var n = za;
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
})(rs);
var Ka = {}, da = {};
(function(e) {
  var n = b && b.__extends || function() {
    var u = function(f, s) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, p) {
        h.__proto__ = p;
      } || function(h, p) {
        for (var d in p)
          Object.prototype.hasOwnProperty.call(p, d) && (h[d] = p[d]);
      }, u(f, s);
    };
    return function(f, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      u(f, s);
      function h() {
        this.constructor = f;
      }
      f.prototype = s === null ? Object.create(s) : (h.prototype = s.prototype, new h());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Fullscreen = e.exit = e.enter = e.Action = void 0;
  var t = re, r = ue, i = ae, a;
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
  function l() {
    return t.actionWrapper({
      group: i.Group.Fullscreen,
      type: a.EXIT
    });
  }
  e.exit = l;
  var y = (
    /** @class */
    function(u) {
      n(f, u);
      function f(s) {
        return u.call(this, s, i.Group.Fullscreen, i.Group.Fullscreen) || this;
      }
      return Object.defineProperty(f.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), f.prototype.dispatch = function(s) {
        return this.app.dispatch(t.actionWrapper({
          group: this.group,
          type: s,
          payload: this.payload
        })), this;
      }, f;
    }(r.ActionSet)
  );
  e.Fullscreen = y;
})(da);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Action = e.Fullscreen = e.exit = e.enter = void 0;
  var n = da;
  Object.defineProperty(e, "Fullscreen", { enumerable: !0, get: function() {
    return n.Fullscreen;
  } }), Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
  var t = da;
  Object.defineProperty(e, "enter", { enumerable: !0, get: function() {
    return t.enter;
  } }), Object.defineProperty(e, "exit", { enumerable: !0, get: function() {
    return t.exit;
  } });
  function r(i) {
    return new n.Fullscreen(i);
  }
  e.create = r;
})(Ka);
var is = {}, Cr = {};
(function(e) {
  var n = b && b.__extends || function() {
    var s = function(h, p) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, c) {
        d.__proto__ = c;
      } || function(d, c) {
        for (var v in c)
          Object.prototype.hasOwnProperty.call(c, v) && (d[v] = c[v]);
      }, s(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      s(h, p);
      function d() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (d.prototype = p.prototype, new d());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(s) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var c in h)
          Object.prototype.hasOwnProperty.call(h, c) && (s[c] = h[c]);
      }
      return s;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LeaveConfirmation = e.confirm = e.disable = e.enable = e.Action = void 0;
  var r = re, i = ue, a = ae, o;
  (function(s) {
    s.ENABLE = "APP::LEAVE_CONFIRMATION::ENABLE", s.DISABLE = "APP::LEAVE_CONFIRMATION::DISABLE", s.CONFIRM = "APP::LEAVE_CONFIRMATION::CONFIRM";
  })(o = e.Action || (e.Action = {}));
  function l(s) {
    return s === void 0 && (s = {}), r.actionWrapper({
      group: a.Group.LeaveConfirmation,
      payload: s,
      type: o.ENABLE
    });
  }
  e.enable = l;
  function y(s) {
    return s === void 0 && (s = {}), r.actionWrapper({
      group: a.Group.LeaveConfirmation,
      payload: s,
      type: o.DISABLE
    });
  }
  e.disable = y;
  function u(s) {
    return s === void 0 && (s = {}), r.actionWrapper({
      group: a.Group.LeaveConfirmation,
      payload: s,
      type: o.CONFIRM
    });
  }
  e.confirm = u;
  var f = (
    /** @class */
    function(s) {
      n(h, s);
      function h(p, d) {
        d === void 0 && (d = {});
        var c = s.call(this, p, a.Group.LeaveConfirmation, a.Group.LeaveConfirmation) || this;
        return c.options = d, c.set(d), c;
      }
      return Object.defineProperty(h.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return t({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), h.prototype.set = function(p) {
        return this.options = r.getMergedProps(this.options, p), this;
      }, h.prototype.dispatch = function(p) {
        switch (p) {
          case o.ENABLE: {
            var d = l(this.payload);
            this.app.dispatch(d);
            break;
          }
          case o.DISABLE: {
            var c = y(this.payload);
            this.app.dispatch(c);
            break;
          }
          case o.CONFIRM: {
            var v = u(this.payload);
            this.app.dispatch(v);
            break;
          }
        }
        return this;
      }, h;
    }(i.ActionSet)
  );
  e.LeaveConfirmation = f;
})(Cr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.LeaveConfirmation = e.confirm = e.disable = e.enable = e.Action = void 0;
  var n = Cr;
  Object.defineProperty(e, "LeaveConfirmation", { enumerable: !0, get: function() {
    return n.LeaveConfirmation;
  } });
  var t = Cr;
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
})(is);
var Qa = {}, fa = {};
(function(e) {
  var n = b && b.__extends || function() {
    var u = function(f, s) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, p) {
        h.__proto__ = p;
      } || function(h, p) {
        for (var d in p)
          Object.prototype.hasOwnProperty.call(p, d) && (h[d] = p[d]);
      }, u(f, s);
    };
    return function(f, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      u(f, s);
      function h() {
        this.constructor = f;
      }
      f.prototype = s === null ? Object.create(s) : (h.prototype = s.prototype, new h());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Loading = e.stop = e.start = e.Action = void 0;
  var t = re, r = ue, i = ae, a;
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
  function l(u) {
    return t.actionWrapper({
      payload: u,
      group: i.Group.Loading,
      type: a.STOP
    });
  }
  e.stop = l;
  var y = (
    /** @class */
    function(u) {
      n(f, u);
      function f(s) {
        return u.call(this, s, i.Group.Loading, i.Group.Loading) || this;
      }
      return Object.defineProperty(f.prototype, "payload", {
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), f.prototype.dispatch = function(s) {
        switch (s) {
          case a.START:
            this.app.dispatch(o(this.payload));
            break;
          case a.STOP:
            this.app.dispatch(l(this.payload));
            break;
        }
        return this;
      }, f;
    }(r.ActionSet)
  );
  e.Loading = y;
})(fa);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.stop = e.start = e.Action = e.Loading = void 0;
  var n = fa;
  Object.defineProperty(e, "Loading", { enumerable: !0, get: function() {
    return n.Loading;
  } });
  var t = fa;
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
})(Qa);
var Kr = {}, Gn = {};
(function(e) {
  var n = b && b.__extends || function() {
    var A = function(E, S) {
      return A = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(w, I) {
        w.__proto__ = I;
      } || function(w, I) {
        for (var j in I)
          Object.prototype.hasOwnProperty.call(I, j) && (w[j] = I[j]);
      }, A(E, S);
    };
    return function(E, S) {
      if (typeof S != "function" && S !== null)
        throw new TypeError("Class extends value " + String(S) + " is not a constructor or null");
      A(E, S);
      function w() {
        this.constructor = E;
      }
      E.prototype = S === null ? Object.create(S) : (w.prototype = S.prototype, new w());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(A) {
      for (var E, S = 1, w = arguments.length; S < w; S++) {
        E = arguments[S];
        for (var I in E)
          Object.prototype.hasOwnProperty.call(E, I) && (A[I] = E[I]);
      }
      return A;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalIframe = e.ModalMessage = e.Modal = e.isMessageModal = e.isIframeModal = e.data = e.update = e.clickFooterButton = e.updateModalSize = e.closeModal = e.openModal = e.Size = e.Action = void 0;
  var r = Vt, i = re, a = ue, o = ae, l = _t, y;
  (function(A) {
    A.OPEN = "APP::MODAL::OPEN", A.CLOSE = "APP::MODAL::CLOSE", A.UPDATE = "APP::MODAL::UPDATE", A.UPDATE_CONTENT = "APP::MODAL::CONTENT::UPDATE", A.FOOTER_BUTTON_CLICK = "APP::MODAL::FOOTER::BUTTON::CLICK", A.FOOTER_BUTTON_UPDATE = "APP::MODAL::FOOTER::BUTTON::UPDATE", A.UPDATE_SIZE = "APP::MODAL::UPDATE_SIZE", A.DATA = "APP::MODAL::DATA";
  })(y = e.Action || (e.Action = {}));
  var u;
  (function(A) {
    A.Small = "small", A.Medium = "medium", A.Large = "large", A.Full = "full", A.Auto = "auto";
  })(u = e.Size || (e.Size = {}));
  var f = {
    group: o.Group.Modal,
    subgroups: ["Footer"],
    type: o.ComponentType.Button
  };
  function s(A) {
    return i.actionWrapper({
      group: o.Group.Modal,
      payload: A,
      type: y.OPEN
    });
  }
  e.openModal = s;
  function h(A) {
    return i.actionWrapper({
      group: o.Group.Modal,
      payload: A,
      type: y.CLOSE
    });
  }
  e.closeModal = h;
  function p(A) {
    return i.actionWrapper({
      group: o.Group.Modal,
      payload: A,
      type: y.UPDATE_SIZE
    });
  }
  e.updateModalSize = p;
  function d(A, E) {
    var S = t({ id: A }, f);
    return l.clickButton(o.Group.Modal, S, E);
  }
  e.clickFooterButton = d;
  function c(A) {
    return i.actionWrapper({
      payload: A,
      group: o.Group.Modal,
      type: y.UPDATE
    });
  }
  e.update = c;
  function v(A) {
    return i.actionWrapper({
      payload: A,
      group: o.Group.Modal,
      type: y.DATA
    });
  }
  e.data = v;
  function m(A) {
    return typeof A.url == "string" || typeof A.path == "string";
  }
  e.isIframeModal = m;
  function g(A) {
    return typeof A.message == "string";
  }
  e.isMessageModal = g;
  var O = (
    /** @class */
    function(A) {
      n(E, A);
      function E() {
        var S = A !== null && A.apply(this, arguments) || this;
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
        this.app.dispatch(h({ id: this.id }));
      }, E.prototype.setFooterPrimaryButton = function(S, w) {
        var I = this, j = f.subgroups;
        this.footerPrimaryOptions = this.getChildButton(S, this.footerPrimaryOptions), this.footerPrimary = this.footerPrimaryOptions ? r.getSingleButton(this, this.footerPrimaryOptions, j, function(k) {
          I.updatePrimaryFooterButton(k, w);
        }) : void 0;
      }, E.prototype.setFooterSecondaryButtons = function(S, w) {
        var I = this, j = f.subgroups, k = S || [], B = this.footerOptions && this.footerOptions.buttons.secondary || [];
        this.footerSecondaryOptions = this.getUpdatedChildActions(k, B), this.footerSecondary = this.footerSecondaryOptions ? this.footerSecondaryOptions.map(function(D) {
          return r.getSingleButton(I, D, j, function(F) {
            I.updateSecondaryFooterButton(F, w);
          });
        }) : void 0;
      }, E.prototype.getChildButton = function(S, w) {
        var I = S ? [S] : [], j = w ? [w] : [], k = this.getUpdatedChildActions(I, j);
        return k ? k[0] : void 0;
      }, E.prototype.updatePrimaryFooterButton = function(S, w) {
        !this.footer || !this.footer.buttons.primary || i.updateActionFromPayload(this.footer.buttons.primary, S) && w();
      }, E.prototype.updateSecondaryFooterButton = function(S, w) {
        if (!(!this.footer || !this.footer.buttons || !this.footer.buttons.secondary)) {
          for (var I, j = 0, k = this.footer.buttons.secondary; j < k.length; j++) {
            var B = k[j];
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
    function(A) {
      n(E, A);
      function E(S, w) {
        var I = A.call(this, S, o.Group.Modal, o.Group.Modal) || this;
        return I.set(w, !1), I;
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
      }), E.prototype.set = function(S, w) {
        var I = this;
        w === void 0 && (w = !0);
        var j = i.getMergedProps(this.options, S), k = j.title, B = j.footer, D = j.message, F = j.size;
        return this.title = k, this.message = D, this.size = F, this.setFooterPrimaryButton(B ? B.buttons.primary : void 0, function() {
          I.dispatch(y.UPDATE);
        }), this.setFooterSecondaryButtons(B ? B.buttons.secondary : void 0, function() {
          I.dispatch(y.UPDATE);
        }), w && this.dispatch(y.UPDATE), this;
      }, E.prototype.dispatch = function(S) {
        switch (S) {
          case y.OPEN:
            this.app.dispatch(s(this.payload));
            break;
          case y.CLOSE:
            this.close();
            break;
          case y.UPDATE:
            this.app.dispatch(c(this.payload));
            break;
        }
        return this;
      }, E;
    }(O)
  );
  e.ModalMessage = _;
  var T = (
    /** @class */
    function(A) {
      n(E, A);
      function E(S, w) {
        var I = A.call(this, S, o.Group.Modal, o.Group.Modal) || this;
        return I.set(w, !1), I;
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
      }), E.prototype.set = function(S, w) {
        var I = this;
        w === void 0 && (w = !0);
        var j = i.getMergedProps(this.options, S), k = j.title, B = j.footer, D = j.path, F = j.url, q = j.size, L = j.loading;
        return this.title = k, this.url = F, this.path = D, this.size = q, this.loading = L, this.setFooterPrimaryButton(B ? B.buttons.primary : void 0, function() {
          I.dispatch(y.UPDATE);
        }), this.setFooterSecondaryButtons(B ? B.buttons.secondary : void 0, function() {
          I.dispatch(y.UPDATE);
        }), w && this.dispatch(y.UPDATE), this;
      }, E.prototype.dispatch = function(S, w) {
        switch (S) {
          case y.OPEN:
            this.app.dispatch(s(this.payload));
            break;
          case y.CLOSE:
            this.close();
            break;
          case y.UPDATE:
            this.app.dispatch(c(this.payload));
            break;
          case y.DATA:
            this.app.dispatch(v(w || {}));
            break;
        }
        return this;
      }, E;
    }(O)
  );
  e.ModalIframe = T;
})(Gn);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Modal = e.isMessageModal = e.data = e.update = e.clickFooterButton = e.updateModalSize = e.closeModal = e.openModal = e.Size = e.Action = e.isIframeModal = e.ModalMessage = e.ModalIframe = void 0;
  var n = Gn;
  Object.defineProperty(e, "ModalIframe", { enumerable: !0, get: function() {
    return n.ModalIframe;
  } }), Object.defineProperty(e, "ModalMessage", { enumerable: !0, get: function() {
    return n.ModalMessage;
  } }), Object.defineProperty(e, "isIframeModal", { enumerable: !0, get: function() {
    return n.isIframeModal;
  } });
  var t = Gn;
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
})(Kr);
var as = {}, pa = {};
(function(e) {
  var n = b && b.__extends || function() {
    var s = function(h, p) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, c) {
        d.__proto__ = c;
      } || function(d, c) {
        for (var v in c)
          Object.prototype.hasOwnProperty.call(c, v) && (d[v] = c[v]);
      }, s(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      s(h, p);
      function d() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (d.prototype = p.prototype, new d());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(s) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var c in h)
          Object.prototype.hasOwnProperty.call(h, c) && (s[c] = h[c]);
      }
      return s;
    }, t.apply(this, arguments);
  }, r = b && b.__awaiter || function(s, h, p, d) {
    function c(v) {
      return v instanceof p ? v : new p(function(m) {
        m(v);
      });
    }
    return new (p || (p = Promise))(function(v, m) {
      function g(T) {
        try {
          _(d.next(T));
        } catch (A) {
          m(A);
        }
      }
      function O(T) {
        try {
          _(d.throw(T));
        } catch (A) {
          m(A);
        }
      }
      function _(T) {
        T.done ? v(T.value) : c(T.value).then(g, O);
      }
      _((d = d.apply(s, h || [])).next());
    });
  }, i = b && b.__generator || function(s, h) {
    var p = { label: 0, sent: function() {
      if (v[0] & 1)
        throw v[1];
      return v[1];
    }, trys: [], ops: [] }, d, c, v, m;
    return m = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function g(_) {
      return function(T) {
        return O([_, T]);
      };
    }
    function O(_) {
      if (d)
        throw new TypeError("Generator is already executing.");
      for (; p; )
        try {
          if (d = 1, c && (v = _[0] & 2 ? c.return : _[0] ? c.throw || ((v = c.return) && v.call(c), 0) : c.next) && !(v = v.call(c, _[1])).done)
            return v;
          switch (c = 0, v && (_ = [_[0] & 2, v.value]), _[0]) {
            case 0:
            case 1:
              v = _;
              break;
            case 4:
              return p.label++, { value: _[1], done: !1 };
            case 5:
              p.label++, c = _[1], _ = [0];
              continue;
            case 7:
              _ = p.ops.pop(), p.trys.pop();
              continue;
            default:
              if (v = p.trys, !(v = v.length > 0 && v[v.length - 1]) && (_[0] === 6 || _[0] === 2)) {
                p = 0;
                continue;
              }
              if (_[0] === 3 && (!v || _[1] > v[0] && _[1] < v[3])) {
                p.label = _[1];
                break;
              }
              if (_[0] === 6 && p.label < v[1]) {
                p.label = v[1], v = _;
                break;
              }
              if (v && p.label < v[2]) {
                p.label = v[2], p.ops.push(_);
                break;
              }
              v[2] && p.ops.pop(), p.trys.pop();
              continue;
          }
          _ = h.call(s, p);
        } catch (T) {
          _ = [6, T], c = 0;
        } finally {
          d = v = 0;
        }
      if (_[0] & 5)
        throw _[1];
      return { value: _[0] ? _[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalContent = e.Action = void 0;
  var a = re, o = ue, l = ae, y = Gn, u;
  (function(s) {
    s.LOADING = "LOADING", s.LOADED = "LOADED";
  })(u = e.Action || (e.Action = {}));
  var f = (
    /** @class */
    function(s) {
      n(h, s);
      function h(p, d) {
        return s.call(this, p, l.Group.Modal, l.Group.Modal, d ? d.id : void 0) || this;
      }
      return h.prototype.loaded = function() {
        this.dispatch(u.LOADED);
      }, h.prototype.loading = function() {
        this.dispatch(u.LOADING);
      }, h.prototype.dispatch = function(p) {
        switch (p) {
          case u.LOADED:
            this.dispatchModalAction(y.Action.UPDATE_CONTENT, { loading: !1 });
            break;
          case u.LOADING:
            this.dispatchModalAction(y.Action.UPDATE_CONTENT, { loading: !0 });
            break;
        }
        return this;
      }, h.prototype.dispatchModalAction = function(p, d) {
        return r(this, void 0, void 0, function() {
          var c;
          return i(this, function(v) {
            return c = a.actionWrapper({
              type: p,
              group: l.Group.Modal,
              payload: t({}, d)
            }), this.app.dispatch(c), [
              2
              /*return*/
            ];
          });
        });
      }, h;
    }(o.ActionSet)
  );
  e.ModalContent = f;
})(pa);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ModalContent = e.Action = void 0;
  var n = pa;
  Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return n.ModalContent;
  } });
  var t = pa;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
  function r(i, a) {
    return new n.ModalContent(i, a);
  }
  e.create = r;
})(as);
var os = {}, jr = {};
(function(e) {
  var n = b && b.__extends || function() {
    var f = function(s, h) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, d) {
        p.__proto__ = d;
      } || function(p, d) {
        for (var c in d)
          Object.prototype.hasOwnProperty.call(d, c) && (p[c] = d[c]);
      }, f(s, h);
    };
    return function(s, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      f(s, h);
      function p() {
        this.constructor = s;
      }
      s.prototype = h === null ? Object.create(h) : (p.prototype = h.prototype, new p());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(f) {
      for (var s, h = 1, p = arguments.length; h < p; h++) {
        s = arguments[h];
        for (var d in s)
          Object.prototype.hasOwnProperty.call(s, d) && (f[d] = s[d]);
      }
      return f;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.History = e.replace = e.push = e.Action = void 0;
  var r = re, i = ue, a = ae, o;
  (function(f) {
    f.PUSH = "APP::NAVIGATION::HISTORY::PUSH", f.REPLACE = "APP::NAVIGATION::HISTORY::REPLACE";
  })(o = e.Action || (e.Action = {}));
  function l(f) {
    return r.actionWrapper({
      payload: f,
      group: a.Group.Navigation,
      type: o.PUSH
    });
  }
  e.push = l;
  function y(f) {
    return r.actionWrapper({
      payload: f,
      group: a.Group.Navigation,
      type: o.REPLACE
    });
  }
  e.replace = y;
  var u = (
    /** @class */
    function(f) {
      n(s, f);
      function s(h) {
        return f.call(this, h, "History", a.Group.Navigation) || this;
      }
      return Object.defineProperty(s.prototype, "payload", {
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.dispatch = function(h, p) {
        var d = t(t({}, this.payload), { path: p });
        switch (h) {
          case o.PUSH:
            this.app.dispatch(l(d));
            break;
          case o.REPLACE:
            this.app.dispatch(y(d));
            break;
        }
        return this;
      }, s;
    }(i.ActionSet)
  );
  e.History = u;
})(jr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.replace = e.push = e.Action = e.History = void 0;
  var n = jr;
  Object.defineProperty(e, "History", { enumerable: !0, get: function() {
    return n.History;
  } });
  var t = jr;
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
})(os);
var Qr = {}, $n = {};
(function(e) {
  var n = b && b.__extends || function() {
    var S = function(w, I) {
      return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(j, k) {
        j.__proto__ = k;
      } || function(j, k) {
        for (var B in k)
          Object.prototype.hasOwnProperty.call(k, B) && (j[B] = k[B]);
      }, S(w, I);
    };
    return function(w, I) {
      if (typeof I != "function" && I !== null)
        throw new TypeError("Class extends value " + String(I) + " is not a constructor or null");
      S(w, I);
      function j() {
        this.constructor = w;
      }
      w.prototype = I === null ? Object.create(I) : (j.prototype = I.prototype, new j());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(S) {
      for (var w, I = 1, j = arguments.length; I < j; I++) {
        w = arguments[I];
        for (var k in w)
          Object.prototype.hasOwnProperty.call(w, k) && (S[k] = w[k]);
      }
      return S;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Redirect = e.isProductVariantResourcePayload = e.isCreateResourcePayload = e.isAdminSection = e.isRemotePayload = e.isAdminSectionPayload = e.isAdminPathPayload = e.isAppPayload = e.getRelativePath = e.normalizeUrl = e.getPathWithSearchAndHash = e.toDestination = e.toApp = e.toRemote = e.toAdminSection = e.toAdminPath = e.isResourcePayload = e.ResourceType = e.Action = void 0;
  var r = re, i = ue, a = ae, o;
  (function(S) {
    S.ADMIN_SECTION = "APP::NAVIGATION::REDIRECT::ADMIN::SECTION", S.ADMIN_PATH = "APP::NAVIGATION::REDIRECT::ADMIN::PATH", S.REMOTE = "APP::NAVIGATION::REDIRECT::REMOTE", S.APP = "APP::NAVIGATION::REDIRECT::APP";
  })(o = e.Action || (e.Action = {})), function(S) {
    S.Product = "products", S.Collection = "collections", S.Order = "orders", S.Customer = "customers", S.Discount = "discounts";
  }(e.ResourceType || (e.ResourceType = {}));
  function l(S) {
    return typeof S.id == "string";
  }
  e.isResourcePayload = l;
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
  function f(S) {
    return r.actionWrapper({
      payload: S,
      group: a.Group.Navigation,
      type: o.REMOTE
    });
  }
  e.toRemote = f;
  function s(S) {
    return r.actionWrapper({
      payload: S,
      group: a.Group.Navigation,
      type: o.APP
    });
  }
  e.toApp = s;
  function h(S, w, I) {
    switch (S) {
      case o.APP: {
        var j = v(w) ? w : { path: w };
        return s(t({ id: I }, j));
      }
      case o.ADMIN_PATH: {
        var k = m(w) ? w : { path: w };
        return y(t({ id: I }, k));
      }
      case o.ADMIN_SECTION: {
        var B = g(w) ? w : { section: w };
        return u(t({ id: I }, B));
      }
      case o.REMOTE: {
        var D = O(w) ? w : { url: w };
        return f(t({ id: I }, D));
      }
    }
  }
  e.toDestination = h;
  function p(S) {
    var w = S.pathname, I = S.search, j = S.hash;
    return "" + w + (I || "") + (j || "");
  }
  e.getPathWithSearchAndHash = p;
  function d(S) {
    return S instanceof URL ? S.toString() : typeof S == "string" ? S : c(S);
  }
  e.normalizeUrl = d;
  function c(S) {
    if (typeof S == "string")
      return S.startsWith("/") ? S : p(new URL(S));
    var w = S.search instanceof URLSearchParams ? S.search.toString() : S.search;
    return p(t(t({}, S), { search: w }));
  }
  e.getRelativePath = c;
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
  function A(S) {
    var w = S;
    return w.id !== void 0 && w.variant !== void 0;
  }
  e.isProductVariantResourcePayload = A;
  var E = (
    /** @class */
    function(S) {
      n(w, S);
      function w(I) {
        return S.call(this, I, "Redirect", a.Group.Navigation) || this;
      }
      return Object.defineProperty(w.prototype, "payload", {
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), w.prototype.dispatch = function(I, j) {
        var k = h(I, j, this.payload.id);
        return this.app.dispatch(k), this;
      }, w;
    }(i.ActionSet)
  );
  e.Redirect = E;
})($n);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.isProductVariantCreateResourcePayload = e.isProductVariantResourcePayload = e.isCreateResourcePayload = e.isAdminSection = e.isRemotePayload = e.isAdminSectionPayload = e.isAdminPathPayload = e.isAppPayload = e.getRelativePath = e.normalizeUrl = e.getPathWithSearchAndHash = e.toDestination = e.toApp = e.toRemote = e.toAdminSection = e.toAdminPath = e.isResourcePayload = e.ResourceType = e.Action = e.Redirect = void 0;
  var n = $n;
  Object.defineProperty(e, "Redirect", { enumerable: !0, get: function() {
    return n.Redirect;
  } }), Object.defineProperty(e, "isCreateResourcePayload", { enumerable: !0, get: function() {
    return n.isCreateResourcePayload;
  } }), Object.defineProperty(e, "isProductVariantResourcePayload", { enumerable: !0, get: function() {
    return n.isProductVariantResourcePayload;
  } });
  var t = $n;
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
})(Qr);
var Yr = {}, us = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.app = e.Action = void 0;
  var n = re, t = ae, r;
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
})(us);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.app = e.Action = void 0;
  var n = us;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "app", { enumerable: !0, get: function() {
    return n.app;
  } });
})(Yr);
var Ya = {}, Mr = {};
(function(e) {
  var n = b && b.__extends || function() {
    var c = function(v, m) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, O) {
        g.__proto__ = O;
      } || function(g, O) {
        for (var _ in O)
          Object.prototype.hasOwnProperty.call(O, _) && (g[_] = O[_]);
      }, c(v, m);
    };
    return function(v, m) {
      if (typeof m != "function" && m !== null)
        throw new TypeError("Class extends value " + String(m) + " is not a constructor or null");
      c(v, m);
      function g() {
        this.constructor = v;
      }
      v.prototype = m === null ? Object.create(m) : (g.prototype = m.prototype, new g());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(c) {
      for (var v, m = 1, g = arguments.length; m < g; m++) {
        v = arguments[m];
        for (var O in v)
          Object.prototype.hasOwnProperty.call(v, O) && (c[O] = v[O]);
      }
      return c;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ResourcePicker = e.update = e.close = e.cancel = e.open = e.select = e.ActionVerb = e.ResourceType = e.ProductStatus = e.ProductVariantInventoryManagement = e.ProductVariantInventoryPolicy = e.WeightUnit = e.FulfillmentServiceType = e.CollectionSortOrder = e.Action = void 0;
  var r = re, i = ue, a = ae, o;
  (function(c) {
    c.OPEN = "APP::RESOURCE_PICKER::OPEN", c.SELECT = "APP::RESOURCE_PICKER::SELECT", c.CLOSE = "APP::RESOURCE_PICKER::CLOSE", c.UPDATE = "APP::RESOURCE_PICKER::UPDATE", c.CANCEL = "APP::RESOURCE_PICKER::CANCEL";
  })(o = e.Action || (e.Action = {})), function(c) {
    c.Manual = "MANUAL", c.BestSelling = "BEST_SELLING", c.AlphaAsc = "ALPHA_ASC", c.AlphaDesc = "ALPHA_DESC", c.PriceDesc = "PRICE_DESC", c.PriceAsc = "PRICE_ASC", c.CreatedDesc = "CREATED_DESC", c.Created = "CREATED", c.MostRelevant = "MOST_RELEVANT";
  }(e.CollectionSortOrder || (e.CollectionSortOrder = {})), function(c) {
    c.GiftCard = "GIFT_CARD", c.Manual = "MANUAL", c.ThirdParty = "THIRD_PARTY";
  }(e.FulfillmentServiceType || (e.FulfillmentServiceType = {})), function(c) {
    c.Kilograms = "KILOGRAMS", c.Grams = "GRAMS", c.Pounds = "POUNDS", c.Ounces = "OUNCES";
  }(e.WeightUnit || (e.WeightUnit = {})), function(c) {
    c.Deny = "DENY", c.Continue = "CONTINUE";
  }(e.ProductVariantInventoryPolicy || (e.ProductVariantInventoryPolicy = {})), function(c) {
    c.Shopify = "SHOPIFY", c.NotManaged = "NOT_MANAGED", c.FulfillmentService = "FULFILLMENT_SERVICE";
  }(e.ProductVariantInventoryManagement || (e.ProductVariantInventoryManagement = {})), function(c) {
    c.Active = "ACTIVE", c.Archived = "ARCHIVED", c.Draft = "DRAFT";
  }(e.ProductStatus || (e.ProductStatus = {}));
  var l;
  (function(c) {
    c.Product = "product", c.ProductVariant = "variant", c.Collection = "collection";
  })(l = e.ResourceType || (e.ResourceType = {}));
  var y;
  (function(c) {
    c.Add = "add", c.Select = "select";
  })(y = e.ActionVerb || (e.ActionVerb = {}));
  function u(c) {
    return r.actionWrapper({
      payload: c,
      group: a.Group.ResourcePicker,
      type: o.SELECT
    });
  }
  e.select = u;
  function f(c) {
    return r.actionWrapper({
      payload: c,
      group: a.Group.ResourcePicker,
      type: o.OPEN
    });
  }
  e.open = f;
  function s(c) {
    return r.actionWrapper({
      payload: c,
      group: a.Group.ResourcePicker,
      type: o.CANCEL
    });
  }
  e.cancel = s;
  function h(c) {
    return r.actionWrapper({
      payload: c,
      group: a.Group.ResourcePicker,
      type: o.CANCEL
    });
  }
  e.close = h;
  function p(c) {
    return r.actionWrapper({
      payload: c,
      group: a.Group.ResourcePicker,
      type: o.UPDATE
    });
  }
  e.update = p;
  var d = (
    /** @class */
    function(c) {
      n(v, c);
      function v(m, g, O) {
        var _ = c.call(this, m, a.Group.ResourcePicker, a.Group.ResourcePicker) || this;
        return _.initialSelectionIds = [], _.selection = [], _.resourceType = O, _.set(g, !1), _;
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
          if (this.resourceType === l.Product) {
            var g = t(t({}, m), { showVariants: this.showVariants, showDraft: this.showDraft, showArchived: this.showArchived, showDraftBadge: this.showDraftBadge, showArchivedBadge: this.showArchivedBadge });
            return g;
          }
          return m;
        },
        enumerable: !1,
        configurable: !0
      }), v.prototype.set = function(m, g) {
        g === void 0 && (g = !0);
        var O = r.getMergedProps(this.options, m), _ = O.initialQuery, T = O.initialSelectionIds, A = T === void 0 ? [] : T, E = O.showHidden, S = E === void 0 ? !0 : E, w = O.showVariants, I = w === void 0 ? !0 : w, j = O.showDraft, k = j === void 0 ? !0 : j, B = O.showArchived, D = B === void 0 ? !0 : B, F = O.showDraftBadge, q = F === void 0 ? !1 : F, L = O.showArchivedBadge, Y = L === void 0 ? !1 : L, le = O.selectMultiple, W = le === void 0 ? !0 : le, ve = O.actionVerb, H = ve === void 0 ? y.Add : ve;
        return this.initialQuery = _, this.initialSelectionIds = A, this.showHidden = S, this.showVariants = I, this.showDraft = k, this.showArchived = D, this.showDraftBadge = q, this.showArchivedBadge = Y, this.selectMultiple = W, this.actionVerb = H, g && this.update(), this;
      }, v.prototype.dispatch = function(m, g) {
        return m === o.OPEN ? this.open() : m === o.UPDATE ? this.update() : m === o.CLOSE || m === o.CANCEL ? this.cancel() : m === o.SELECT && (this.selection = g, this.app.dispatch(u({ id: this.id, selection: this.selection }))), this;
      }, v.prototype.update = function() {
        this.app.dispatch(p(this.payload));
      }, v.prototype.open = function() {
        this.app.dispatch(f(this.payload));
      }, v.prototype.cancel = function() {
        this.app.dispatch(s({ id: this.id }));
      }, v.prototype.close = function() {
        this.cancel();
      }, v;
    }(i.ActionSet)
  );
  e.ResourcePicker = d;
})(Mr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ResourcePicker = e.WeightUnit = e.update = e.select = e.ResourceType = e.ProductVariantInventoryPolicy = e.ProductVariantInventoryManagement = e.ProductStatus = e.open = e.FulfillmentServiceType = e.CollectionSortOrder = e.close = e.cancel = e.ActionVerb = e.Action = void 0;
  var n = Mr;
  Object.defineProperty(e, "ResourcePicker", { enumerable: !0, get: function() {
    return n.ResourcePicker;
  } });
  var t = Mr;
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
    var o = a.resourceType, l = a.options, y = l === void 0 ? {} : l;
    return new n.ResourcePicker(i, y, o);
  };
  e.create = r;
})(Ya);
var Ja = {}, cs = {};
(function(e) {
  var n = b && b.__extends || function() {
    var u = function(f, s) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, p) {
        h.__proto__ = p;
      } || function(h, p) {
        for (var d in p)
          Object.prototype.hasOwnProperty.call(p, d) && (h[d] = p[d]);
      }, u(f, s);
    };
    return function(f, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      u(f, s);
      function h() {
        this.constructor = f;
      }
      f.prototype = s === null ? Object.create(s) : (h.prototype = s.prototype, new h());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.capture = e.openCamera = e.Scanner = e.Action = void 0;
  var t = re, r = ue, i = ae, a;
  (function(u) {
    u.OPEN_CAMERA = "APP::SCANNER::OPEN::CAMERA", u.CAPTURE = "APP::SCANNER::CAPTURE";
  })(a = e.Action || (e.Action = {}));
  var o = (
    /** @class */
    function(u) {
      n(f, u);
      function f(s, h) {
        return u.call(this, s, i.Group.Scanner, i.Group.Scanner, h ? h.id : void 0) || this;
      }
      return f.prototype.dispatch = function(s) {
        switch (s) {
          case a.OPEN_CAMERA:
            this.dispatchScannerAction(a.OPEN_CAMERA);
            break;
        }
        return this;
      }, f.prototype.dispatchScannerAction = function(s) {
        this.app.dispatch(t.actionWrapper({
          type: s,
          group: i.Group.Scanner,
          payload: {
            id: this.id
          }
        }));
      }, f;
    }(r.ActionSet)
  );
  e.Scanner = o;
  function l() {
    return t.actionWrapper({
      group: i.Group.Scanner,
      type: a.OPEN_CAMERA
    });
  }
  e.openCamera = l;
  function y(u) {
    return t.actionWrapper({
      group: i.Group.Scanner,
      type: a.CAPTURE,
      payload: u
    });
  }
  e.capture = y;
})(cs);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.capture = e.openCamera = e.Scanner = e.Action = void 0;
  var n = cs;
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
})(Ja);
var Xa = {}, ss = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.request = e.Action = void 0;
  var n = re, t = ae, r;
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
})(ss);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.request = e.Action = void 0;
  var n = ss;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "request", { enumerable: !0, get: function() {
    return n.request;
  } }), Object.defineProperty(e, "respond", { enumerable: !0, get: function() {
    return n.respond;
  } });
})(Xa);
var Za = {}, Rr = {}, Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.getGroupedButton = void 0;
var vh = Ut;
function mh(e, n, t, r) {
  e.addChild(n, e.group, t);
  var i = n.id, a = n.label, o = n.disabled, l = n.buttons, y = n.plain;
  return e.subscribeToChild(n, vh.Action.UPDATE, r), { id: i, label: a, buttons: l, disabled: o, plain: y };
}
Jr.getGroupedButton = mh;
(function(e) {
  var n = b && b.__extends || function() {
    var m = function(g, O) {
      return m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(_, T) {
        _.__proto__ = T;
      } || function(_, T) {
        for (var A in T)
          Object.prototype.hasOwnProperty.call(T, A) && (_[A] = T[A]);
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
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(m) {
      for (var g, O = 1, _ = arguments.length; O < _; O++) {
        g = arguments[O];
        for (var T in g)
          Object.prototype.hasOwnProperty.call(g, T) && (m[T] = g[T]);
      }
      return m;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.TitleBar = e.update = e.clickBreadcrumb = e.clickActionButton = e.Action = void 0;
  var r = ue, i = _t, a = Ut, o = Jr, l = Vt, y = re, u = ae, f;
  (function(m) {
    m.UPDATE = "APP::TITLEBAR::UPDATE", m.BUTTON_CLICK = "APP::TITLEBAR::BUTTONS::BUTTON::CLICK", m.BUTTON_UPDATE = "APP::TITLEBAR::BUTTONS::BUTTON::UPDATE", m.BUTTON_GROUP_UPDATE = "APP::TITLEBAR::BUTTONS::BUTTONGROUP::UPDATE", m.BREADCRUMBS_CLICK = "APP::TITLEBAR::BREADCRUMBS::BUTTON::CLICK", m.BREADCRUMBS_UPDATE = "APP::TITLEBAR::BREADCRUMBS::BUTTON::UPDATE";
  })(f = e.Action || (e.Action = {}));
  var s = {
    group: u.Group.TitleBar,
    subgroups: ["Buttons"]
  }, h = {
    group: u.Group.TitleBar,
    subgroups: ["Breadcrumbs"],
    type: u.ComponentType.Button
  };
  function p(m, g) {
    var O = u.ComponentType.Button, _ = t({ id: m, type: O }, s);
    return i.clickButton(u.Group.TitleBar, _, g);
  }
  e.clickActionButton = p;
  function d(m, g) {
    var O = t({ id: m }, h);
    return i.clickButton(u.Group.TitleBar, O, g);
  }
  e.clickBreadcrumb = d;
  function c(m) {
    return y.actionWrapper({
      payload: m,
      group: u.Group.TitleBar,
      type: f.UPDATE
    });
  }
  e.update = c;
  var v = (
    /** @class */
    function(m) {
      n(g, m);
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
          return t(t({}, this.options), { breadcrumbs: this.breadcrumb, buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), g.prototype.set = function(O, _) {
        _ === void 0 && (_ = !0);
        var T = y.getMergedProps(this.options, O), A = T.title, E = T.buttons, S = T.breadcrumbs;
        return this.title = A, this.setBreadcrumbs(S), this.setPrimaryButton(E ? E.primary : void 0), this.setSecondaryButton(E ? E.secondary : void 0), _ && this.dispatch(f.UPDATE), this;
      }, g.prototype.dispatch = function(O) {
        switch (O) {
          case f.UPDATE:
            this.app.dispatch(c(this.payload));
            break;
        }
        return this;
      }, g.prototype.getButton = function(O, _, T) {
        return O instanceof a.ButtonGroup ? o.getGroupedButton(this, O, _, T) : l.getSingleButton(this, O, _, T);
      }, g.prototype.updatePrimaryButton = function(O) {
        this.primary && y.updateActionFromPayload(this.primary, O) && this.dispatch(f.UPDATE);
      }, g.prototype.updateSecondaryButtons = function(O) {
        if (this.secondary) {
          var _ = this.secondary.find(function(A) {
            return A.id === O.id;
          });
          if (_) {
            var T = !1;
            a.isGroupedButtonPayload(O), T = y.updateActionFromPayload(_, O), T && this.dispatch(f.UPDATE);
          }
        }
      }, g.prototype.updateBreadcrumbButton = function(O) {
        this.breadcrumb && y.updateActionFromPayload(this.breadcrumb, O) && this.dispatch(f.UPDATE);
      }, g.prototype.setPrimaryButton = function(O) {
        this.primaryOptions = this.getChildButton(O, this.primaryOptions), this.primary = this.primaryOptions ? this.getButton(this.primaryOptions, s.subgroups, this.updatePrimaryButton) : void 0;
      }, g.prototype.setSecondaryButton = function(O) {
        var _ = this, T = O || [], A = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(T, A), this.secondary = this.secondaryOptions ? this.secondaryOptions.map(function(E) {
          return _.getButton(E, s.subgroups, _.updateSecondaryButtons);
        }) : void 0;
      }, g.prototype.setBreadcrumbs = function(O) {
        this.breadcrumbsOption = this.getChildButton(O, this.breadcrumbsOption), this.breadcrumb = this.breadcrumbsOption ? this.getButton(this.breadcrumbsOption, h.subgroups, this.updateBreadcrumbButton) : void 0;
      }, g.prototype.getChildButton = function(O, _) {
        var T = O ? [O] : [], A = _ ? [_] : [], E = this.getUpdatedChildActions(T, A);
        return E ? E[0] : void 0;
      }, g;
    }(r.ActionSetWithChildren)
  );
  e.TitleBar = v;
})(Rr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.TitleBar = e.update = e.clickBreadcrumb = e.clickActionButton = e.Action = void 0;
  var n = Rr;
  Object.defineProperty(e, "TitleBar", { enumerable: !0, get: function() {
    return n.TitleBar;
  } });
  var t = Rr;
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
})(Za);
var xa = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Toast = e.primaryAction = e.clear = e.show = e.Action = void 0;
  var n = Vn;
  Object.defineProperty(e, "Toast", { enumerable: !0, get: function() {
    return n.Toast;
  } });
  var t = Vn;
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
})(xa);
var eo = {}, to = {};
(function(e) {
  var n = b && b.__extends || function() {
    var d = function(c, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
      }, d(c, v);
    };
    return function(c, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      d(c, v);
      function m() {
        this.constructor = c;
      }
      c.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(d) {
      for (var c, v = 1, m = arguments.length; v < m; v++) {
        c = arguments[v];
        for (var g in c)
          Object.prototype.hasOwnProperty.call(c, g) && (d[g] = c[g]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ContextualSaveBar = e.update = e.discard = e.save = e.hide = e.show = e.Action = void 0;
  var r = re, i = ue, a = ae, o;
  (function(d) {
    d.DISCARD = "APP::CONTEXTUAL_SAVE_BAR::DISCARD", d.SAVE = "APP::CONTEXTUAL_SAVE_BAR::SAVE", d.SHOW = "APP::CONTEXTUAL_SAVE_BAR::SHOW", d.HIDE = "APP::CONTEXTUAL_SAVE_BAR::HIDE", d.UPDATE = "APP::CONTEXTUAL_SAVE_BAR::UPDATE";
  })(o = e.Action || (e.Action = {}));
  function l(d, c) {
    return r.actionWrapper({
      group: a.Group.ContextualSaveBar,
      type: d,
      payload: c
    });
  }
  function y(d) {
    return l(o.SHOW, d);
  }
  e.show = y;
  function u(d) {
    return l(o.HIDE, d);
  }
  e.hide = u;
  function f(d) {
    return l(o.SAVE, d);
  }
  e.save = f;
  function s(d) {
    return l(o.DISCARD, d);
  }
  e.discard = s;
  function h(d) {
    return l(o.UPDATE, d);
  }
  e.update = h;
  var p = (
    /** @class */
    function(d) {
      n(c, d);
      function c(v, m) {
        m === void 0 && (m = {});
        var g = d.call(this, v, a.Group.ContextualSaveBar, a.Group.ContextualSaveBar) || this;
        return g.options = m, g.set(m, !1), g;
      }
      return Object.defineProperty(c.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return t({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), c.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = r.getMergedProps(this.options, v);
        return this.options = g, m && this.dispatch(o.UPDATE), this;
      }, c.prototype.dispatch = function(v) {
        return this.app.dispatch(l(v, this.payload)), this;
      }, c;
    }(i.ActionSet)
  );
  e.ContextualSaveBar = p;
})(to);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ContextualSaveBar = e.update = e.discard = e.save = e.hide = e.show = e.Action = void 0;
  var n = to;
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
})(eo);
var ls = {}, ha = {};
(function(e) {
  var n = b && b.__extends || function() {
    var f = function(s, h) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, d) {
        p.__proto__ = d;
      } || function(p, d) {
        for (var c in d)
          Object.prototype.hasOwnProperty.call(d, c) && (p[c] = d[c]);
      }, f(s, h);
    };
    return function(s, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      f(s, h);
      function p() {
        this.constructor = s;
      }
      s.prototype = h === null ? Object.create(h) : (p.prototype = h.prototype, new p());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(f) {
      for (var s, h = 1, p = arguments.length; h < p; h++) {
        s = arguments[h];
        for (var d in s)
          Object.prototype.hasOwnProperty.call(s, d) && (f[d] = s[d]);
      }
      return f;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.close = e.show = e.Share = e.Action = void 0;
  var r = ae, i = re, a = ue, o;
  (function(f) {
    f.SHOW = "APP::SHARE::SHOW", f.CLOSE = "APP::SHARE::CLOSE";
  })(o = e.Action || (e.Action = {}));
  var l = (
    /** @class */
    function(f) {
      n(s, f);
      function s(h) {
        return f.call(this, h, r.Group.Share, r.Group.Share) || this;
      }
      return s.prototype.dispatch = function(h, p) {
        switch (h) {
          case o.SHOW:
            this.dispatchShareAction(o.SHOW, p);
            break;
          case o.CLOSE:
            this.dispatchShareAction(o.CLOSE, p);
            break;
          default:
            throw new Error("Action: " + h + " not supported");
        }
        return this;
      }, s.prototype.dispatchShareAction = function(h, p) {
        this.app.dispatch(i.actionWrapper({
          type: h,
          group: r.Group.Share,
          payload: t({ id: this.id }, p)
        }));
      }, s;
    }(a.ActionSet)
  );
  e.Share = l;
  function y() {
    return i.actionWrapper({
      group: r.Group.Share,
      type: o.SHOW
    });
  }
  e.show = y;
  function u(f) {
    return i.actionWrapper({
      group: r.Group.Share,
      type: o.CLOSE,
      payload: f
    });
  }
  e.close = u;
})(ha);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Share = e.close = e.show = e.Action = void 0;
  var n = ha;
  Object.defineProperty(e, "Share", { enumerable: !0, get: function() {
    return n.Share;
  } });
  var t = ha;
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
})(ls);
var no = {}, Nr = {}, fn = {};
(function(e) {
  var n = b && b.__extends || function() {
    var f = function(s, h) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, d) {
        p.__proto__ = d;
      } || function(p, d) {
        for (var c in d)
          Object.prototype.hasOwnProperty.call(d, c) && (p[c] = d[c]);
      }, f(s, h);
    };
    return function(s, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      f(s, h);
      function p() {
        this.constructor = s;
      }
      s.prototype = h === null ? Object.create(h) : (p.prototype = h.prototype, new p());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(f) {
      for (var s, h = 1, p = arguments.length; h < p; h++) {
        s = arguments[h];
        for (var d in s)
          Object.prototype.hasOwnProperty.call(s, d) && (f[d] = s[d]);
      }
      return f;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.AppLink = e.update = e.Action = void 0;
  var r = re, i = ue, a = ae, o = $n, l;
  (function(f) {
    f.UPDATE = "UPDATE";
  })(l = e.Action || (e.Action = {}));
  function y(f, s, h) {
    var p = s.id, d = h.label, c = h.destination, v = t(t({}, h), { id: p, label: d, destination: c });
    return r.actionWrapper({
      group: f,
      type: r.getEventNameSpace(f, l.UPDATE, s),
      payload: v
    });
  }
  e.update = y;
  var u = (
    /** @class */
    function(f) {
      n(s, f);
      function s(h, p) {
        var d = f.call(this, h, a.Group.Link, a.Group.Link) || this;
        return d.label = "", d.destination = "", d.set(p, !1), d;
      }
      return Object.defineProperty(s.prototype, "options", {
        get: function() {
          var h = this, p = h.label, d = h.destination;
          return {
            label: p,
            destination: d,
            redirectType: o.Action.APP
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(s.prototype, "payload", {
        get: function() {
          var h = this.options, p = h.label, d = h.destination, c = h.redirectType, v = d;
          return {
            id: this.id,
            label: p,
            destination: { path: v },
            redirectType: c
          };
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.set = function(h, p) {
        p === void 0 && (p = !0);
        var d = r.getMergedProps(this.options, h), c = d.label, v = d.destination;
        return this.label = c, this.destination = v, p && this.dispatch(l.UPDATE), this;
      }, s.prototype.dispatch = function(h) {
        switch (h) {
          case l.UPDATE: {
            var p = y(this.group, this.component, this.payload);
            this.app.dispatch(p);
            break;
          }
        }
        return this;
      }, s;
    }(i.ActionSet)
  );
  e.AppLink = u;
})(fn);
(function(e) {
  var n = b && b.__extends || function() {
    var s = function(h, p) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, c) {
        d.__proto__ = c;
      } || function(d, c) {
        for (var v in c)
          Object.prototype.hasOwnProperty.call(c, v) && (d[v] = c[v]);
      }, s(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      s(h, p);
      function d() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (d.prototype = p.prototype, new d());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(s) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var c in h)
          Object.prototype.hasOwnProperty.call(h, c) && (s[c] = h[c]);
      }
      return s;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.NavigationMenu = e.update = e.Action = void 0;
  var r = fn, i = re, a = ue, o = ae, l = ["Navigation_Menu"], y;
  (function(s) {
    s.UPDATE = "APP::MENU::NAVIGATION_MENU::UPDATE", s.LINK_UPDATE = "APP::MENU::NAVIGATION_MENU::LINK::UPDATE";
  })(y = e.Action || (e.Action = {}));
  function u(s) {
    return i.actionWrapper({
      payload: s,
      group: o.Group.Menu,
      type: y.UPDATE
    });
  }
  e.update = u;
  var f = (
    /** @class */
    function(s) {
      n(h, s);
      function h(p, d) {
        var c = s.call(this, p, "Navigation_Menu", o.Group.Menu) || this;
        return c.items = [], c.set(d), c;
      }
      return Object.defineProperty(h.prototype, "options", {
        get: function() {
          return {
            items: this.itemsOptions,
            active: this.activeOptions
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(h.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { active: this.active, items: this.items, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), h.prototype.set = function(p, d) {
        d === void 0 && (d = !0);
        var c = i.getMergedProps(this.options, p), v = c.items, m = c.active;
        return this.setItems(v), this.activeOptions = m, this.active = m && m.id, d && this.dispatch(y.UPDATE), this;
      }, h.prototype.dispatch = function(p) {
        switch (p) {
          case y.UPDATE:
            this.app.dispatch(u(this.payload));
            break;
        }
        return this;
      }, h.prototype.updateItem = function(p) {
        if (this.items) {
          var d = this.items.find(function(c) {
            return c.id === p.id;
          });
          d && i.updateActionFromPayload(d, p) && this.dispatch(y.UPDATE);
        }
      }, h.prototype.setItems = function(p) {
        var d = this, c = p || [], v = this.itemsOptions || [];
        this.itemsOptions = this.getUpdatedChildActions(c, v), this.items = this.itemsOptions ? this.itemsOptions.map(function(m) {
          return d.addChild(m, d.group, l), d.subscribeToChild(m, r.Action.UPDATE, d.updateItem), m.payload;
        }) : [];
      }, h;
    }(a.ActionSetWithChildren)
  );
  e.NavigationMenu = f;
})(Nr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.NavigationMenu = e.update = e.Action = void 0;
  var n = Nr;
  Object.defineProperty(e, "NavigationMenu", { enumerable: !0, get: function() {
    return n.NavigationMenu;
  } });
  var t = Nr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  function r(i, a) {
    return new n.NavigationMenu(i, a);
  }
  e.create = r;
})(no);
var ds = {}, Dr = {};
(function(e) {
  var n = b && b.__extends || function() {
    var s = function(h, p) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, c) {
        d.__proto__ = c;
      } || function(d, c) {
        for (var v in c)
          Object.prototype.hasOwnProperty.call(c, v) && (d[v] = c[v]);
      }, s(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      s(h, p);
      function d() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (d.prototype = p.prototype, new d());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(s) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var c in h)
          Object.prototype.hasOwnProperty.call(h, c) && (s[c] = h[c]);
      }
      return s;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ChannelMenu = e.update = e.Action = void 0;
  var r = fn, i = re, a = ue, o = ae, l = ["Channel_Menu"], y;
  (function(s) {
    s.UPDATE = "APP::MENU::CHANNEL_MENU::UPDATE", s.LINK_UPDATE = "APP::MENU::CHANNEL_MENU::LINK::UPDATE";
  })(y = e.Action || (e.Action = {}));
  function u(s) {
    return i.actionWrapper({
      payload: s,
      group: o.Group.Menu,
      type: y.UPDATE
    });
  }
  e.update = u;
  var f = (
    /** @class */
    function(s) {
      n(h, s);
      function h(p, d) {
        var c = s.call(this, p, "Channel_Menu", o.Group.Menu) || this;
        return c.items = [], c.set(d), c;
      }
      return Object.defineProperty(h.prototype, "options", {
        get: function() {
          return {
            items: this.itemsOptions,
            active: this.activeOptions
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(h.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { active: this.active, items: this.items, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), h.prototype.set = function(p, d) {
        d === void 0 && (d = !0);
        var c = i.getMergedProps(this.options, p), v = c.items, m = c.active;
        return this.setItems(v), this.activeOptions = m, this.active = m && m.id, d && this.dispatch(y.UPDATE), this;
      }, h.prototype.dispatch = function(p) {
        switch (p) {
          case y.UPDATE:
            this.app.dispatch(u(this.payload));
            break;
        }
        return this;
      }, h.prototype.updateItem = function(p) {
        if (this.items) {
          var d = this.items.find(function(c) {
            return c.id === p.id;
          });
          d && i.updateActionFromPayload(d, p) && this.dispatch(y.UPDATE);
        }
      }, h.prototype.setItems = function(p) {
        var d = this, c = p || [], v = this.itemsOptions || [];
        this.itemsOptions = this.getUpdatedChildActions(c, v), this.items = this.itemsOptions ? this.itemsOptions.map(function(m) {
          return d.addChild(m, d.group, l), d.subscribeToChild(m, r.Action.UPDATE, d.updateItem), m.payload;
        }) : [];
      }, h;
    }(a.ActionSetWithChildren)
  );
  e.ChannelMenu = f;
})(Dr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ChannelMenu = e.update = e.Action = void 0;
  var n = Dr;
  Object.defineProperty(e, "ChannelMenu", { enumerable: !0, get: function() {
    return n.ChannelMenu;
  } });
  var t = Dr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  function r(i, a) {
    return new n.ChannelMenu(i, a);
  }
  e.create = r;
})(ds);
var ro = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.AppLink = e.update = e.Action = void 0;
  var n = fn;
  Object.defineProperty(e, "AppLink", { enumerable: !0, get: function() {
    return n.AppLink;
  } });
  var t = fn;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  function r(i, a) {
    return new n.AppLink(i, a);
  }
  e.create = r;
})(ro);
var fs = {}, ya = {};
(function(e) {
  var n = b && b.__extends || function() {
    var y = function(u, f) {
      return y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, h) {
        s.__proto__ = h;
      } || function(s, h) {
        for (var p in h)
          Object.prototype.hasOwnProperty.call(h, p) && (s[p] = h[p]);
      }, y(u, f);
    };
    return function(u, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      y(u, f);
      function s() {
        this.constructor = u;
      }
      u.prototype = f === null ? Object.create(f) : (s.prototype = f.prototype, new s());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Pos = e.close = e.Action = void 0;
  var t = re, r = ue, i = ae, a;
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
  var l = (
    /** @class */
    function(y) {
      n(u, y);
      function u(f) {
        return y.call(this, f, i.Group.Pos, i.Group.Pos) || this;
      }
      return u.prototype.dispatch = function(f) {
        switch (f) {
          case a.CLOSE:
            this.app.dispatch(o());
            break;
        }
        return this;
      }, u;
    }(r.ActionSet)
  );
  e.Pos = l;
})(ya);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Pos = e.close = e.Action = void 0;
  var n = ya;
  Object.defineProperty(e, "Pos", { enumerable: !0, get: function() {
    return n.Pos;
  } });
  var t = ya;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return t.close;
  } });
  function r(i) {
    return new n.Pos(i);
  }
  e.create = r;
})(fs);
var ps = {}, hs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(n) {
    n.UPDATE = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::UPDATE", n.BUTTON_CLICK = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::CLICK", n.BUTTON_UPDATE = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::UPDATE";
  }(e.Action || (e.Action = {}));
})(hs);
var ys = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getSingleButton = void 0;
  var n = Vt;
  Object.defineProperty(e, "getSingleButton", { enumerable: !0, get: function() {
    return n.getSingleButton;
  } });
})(ys);
var vs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.unsubscribeActions = e.ActionSetWithChildren = e.ActionSet = void 0;
  var n = ue;
  Object.defineProperty(e, "ActionSet", { enumerable: !0, get: function() {
    return n.ActionSet;
  } }), Object.defineProperty(e, "ActionSetWithChildren", { enumerable: !0, get: function() {
    return n.ActionSetWithChildren;
  } }), Object.defineProperty(e, "unsubscribeActions", { enumerable: !0, get: function() {
    return n.unsubscribeActions;
  } });
})(vs);
(function(e) {
  var n = b && b.__extends || function() {
    var d = function(c, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
      }, d(c, v);
    };
    return function(c, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      d(c, v);
      function m() {
        this.constructor = c;
      }
      c.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(d) {
      for (var c, v = 1, m = arguments.length; v < m; v++) {
        c = arguments[v];
        for (var g in c)
          Object.prototype.hasOwnProperty.call(c, g) && (d[g] = c[g]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.MarketingExternalActivityTopBar = e.update = e.clickActionButton = e.MarketingActivityStatusBadgeType = e.Action = void 0;
  var r = hs;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } });
  var i = Qn, a = ys, o = Et, l = vs, y = Tt;
  (function(d) {
    d.Default = "DEFAULT", d.Success = "SUCCESS", d.Attention = "ATTENTION", d.Warning = "WARNING", d.Info = "INFO";
  })(e.MarketingActivityStatusBadgeType || (e.MarketingActivityStatusBadgeType = {}));
  var u = {
    group: y.Group.MarketingExternalActivityTopBar,
    subgroups: ["Buttons"]
  };
  function f(d, c) {
    var v = y.ComponentType.Button, m = t({ id: d, type: v }, u);
    return i.clickButton(y.Group.MarketingExternalActivityTopBar, m, c);
  }
  e.clickActionButton = f;
  function s(d) {
    return o.actionWrapper({
      payload: d,
      group: y.Group.MarketingExternalActivityTopBar,
      type: r.Action.UPDATE
    });
  }
  e.update = s;
  var h = (
    /** @class */
    function(d) {
      n(c, d);
      function c(v, m) {
        var g = d.call(this, v, y.Group.MarketingExternalActivityTopBar, y.Group.MarketingExternalActivityTopBar) || this;
        return g.set(m), g;
      }
      return Object.defineProperty(c.prototype, "buttons", {
        get: function() {
          if (!(!this.primary && !this.secondary))
            return {
              primary: this.primary,
              secondary: this.secondary
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(c.prototype, "buttonsOptions", {
        get: function() {
          if (!(!this.primaryOptions && !this.secondaryOptions))
            return {
              primary: this.primaryOptions,
              secondary: this.secondaryOptions
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(c.prototype, "options", {
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
      }), Object.defineProperty(c.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), c.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = o.getMergedProps(this.options, v), O = g.title, _ = g.buttons, T = g.saved, A = g.saving, E = g.status;
        return this.title = O, this.saving = A, this.saved = T, this.status = E, this.setPrimaryButton(_ ? _.primary : void 0), this.setSecondaryButtons(_ ? _.secondary : void 0), m && this.dispatch(r.Action.UPDATE), this;
      }, c.prototype.dispatch = function(v) {
        switch (v) {
          case r.Action.UPDATE:
            this.app.dispatch(s(this.payload));
            break;
        }
        return this;
      }, c.prototype.getButton = function(v, m, g) {
        return a.getSingleButton(this, v, m, g);
      }, c.prototype.updatePrimaryButton = function(v) {
        this.primary && o.updateActionFromPayload(this.primary, v) && this.dispatch(r.Action.UPDATE);
      }, c.prototype.updateSecondaryButtons = function(v) {
        if (this.secondary) {
          var m = this.secondary.find(function(O) {
            return O.id === v.id;
          });
          if (m) {
            var g = o.updateActionFromPayload(m, v);
            g && this.dispatch(r.Action.UPDATE);
          }
        }
      }, c.prototype.setPrimaryButton = function(v) {
        this.primaryOptions = this.getChildButton(v, this.primaryOptions), this.primary = this.primaryOptions ? this.getButton(this.primaryOptions, u.subgroups, this.updatePrimaryButton) : void 0;
      }, c.prototype.setSecondaryButtons = function(v) {
        var m = this, g = v || [], O = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(g, O), this.secondary = this.secondaryOptions ? this.secondaryOptions.map(function(_) {
          return m.getButton(_, u.subgroups, m.updateSecondaryButtons);
        }) : void 0;
      }, c.prototype.updateSaving = function(v) {
        this.saving = v, this.dispatch(r.Action.UPDATE);
      }, c.prototype.updateSaved = function(v) {
        this.saved = v, this.dispatch(r.Action.UPDATE);
      }, c.prototype.updateStatus = function(v) {
        this.status = v, this.dispatch(r.Action.UPDATE);
      }, c.prototype.getChildButton = function(v, m) {
        var g = v ? [v] : [], O = m ? [m] : [], _ = this.getUpdatedChildActions(g, O);
        return _ ? _[0] : void 0;
      }, c;
    }(l.ActionSetWithChildren)
  );
  e.MarketingExternalActivityTopBar = h;
  function p(d, c) {
    return new h(d, c);
  }
  e.create = p;
})(ps);
var ms = {}, gs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fullPageLoad = e.skeletonPageLoad = e.Action = void 0;
  var n = ae, t = re, r;
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
})(gs);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fullPageLoad = e.skeletonPageLoad = e.Action = void 0;
  var n = gs;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "skeletonPageLoad", { enumerable: !0, get: function() {
    return n.skeletonPageLoad;
  } }), Object.defineProperty(e, "fullPageLoad", { enumerable: !0, get: function() {
    return n.fullPageLoad;
  } });
})(ms);
var bs = {}, kr = {};
(function(e) {
  var n = b && b.__extends || function() {
    var d = function(c, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
      }, d(c, v);
    };
    return function(c, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      d(c, v);
      function m() {
        this.constructor = c;
      }
      c.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(d) {
      for (var c, v = 1, m = arguments.length; v < m; v++) {
        c = arguments[v];
        for (var g in c)
          Object.prototype.hasOwnProperty.call(c, g) && (d[g] = c[g]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.unstable_Picker = e.loadMore = e.search = e.update = e.cancel = e.open = e.select = e.ALL_RESOURCE_VERTICAL_ALIGNMENT = e.ALL_MEDIA_KINDS = e.ALL_BADGE_STATUSES = e.ALL_BADGE_PROGRESSES = e.Action = void 0;
  var r = re, i = ue, a = ae, o;
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
  function l(d) {
    return r.actionWrapper({
      payload: d,
      group: a.Group.unstable_Picker,
      type: o.SELECT
    });
  }
  e.select = l;
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
  function f(d) {
    return r.actionWrapper({
      payload: d,
      group: a.Group.unstable_Picker,
      type: o.UPDATE
    });
  }
  e.update = f;
  function s(d) {
    return r.actionWrapper({
      payload: d,
      group: a.Group.unstable_Picker,
      type: o.SEARCH
    });
  }
  e.search = s;
  function h(d) {
    return r.actionWrapper({
      payload: d,
      group: a.Group.unstable_Picker,
      type: o.LOAD_MORE
    });
  }
  e.loadMore = h;
  var p = (
    /** @class */
    function(d) {
      n(c, d);
      function c(v, m) {
        var g = d.call(this, v, a.Group.unstable_Picker, a.Group.unstable_Picker) || this;
        return g.items = [], g.selectedItems = [], g.set(m, !1), g;
      }
      return Object.defineProperty(c.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(c.prototype, "options", {
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
      }), c.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = r.getMergedProps(this.options, v), O = g.selectedItems, _ = O === void 0 ? [] : O, T = g.maxSelectable, A = T === void 0 ? 0 : T, E = g.items, S = E === void 0 ? [] : E, w = g.loading, I = w === void 0 ? !1 : w, j = g.title, k = g.searchQuery, B = g.searchQueryPlaceholder, D = g.primaryActionLabel, F = g.secondaryActionLabel, q = g.emptySearchLabel, L = g.canLoadMore, Y = L === void 0 ? !1 : L, le = g.loadingMore, W = le === void 0 ? !1 : le, ve = g.verticalAlignment, H = g.allowEmptySelection, ee = g.resourceName;
        return this.title = j, this.items = S, this.selectedItems = _, this.maxSelectable = A, this.loading = I, this.searchQuery = k, this.searchQueryPlaceholder = B, this.primaryActionLabel = D, this.secondaryActionLabel = F, this.emptySearchLabel = q, this.canLoadMore = Y, this.loadingMore = W, this.verticalAlignment = ve, this.allowEmptySelection = H, this.resourceName = ee, m && this.update(), this;
      }, c.prototype.dispatch = function(v, m) {
        return v === o.OPEN ? this.open() : v === o.UPDATE ? this.update() : v === o.CANCEL ? this.cancel() : v === o.SELECT ? (this.selectedItems = (m == null ? void 0 : m.selectedItems) || [], this.app.dispatch(l({ id: this.id, selectedItems: this.selectedItems }))) : v === o.SEARCH ? (this.searchQuery = (m == null ? void 0 : m.searchQuery) || "", this.app.dispatch(s({ id: this.id, searchQuery: this.searchQuery }))) : v === o.LOAD_MORE && this.loadMore(), this;
      }, c.prototype.update = function() {
        this.app.dispatch(f(this.payload));
      }, c.prototype.open = function() {
        this.app.dispatch(y(this.payload));
      }, c.prototype.cancel = function() {
        this.app.dispatch(u({ id: this.id }));
      }, c.prototype.loadMore = function() {
        this.app.dispatch(h(this.payload));
      }, c;
    }(i.ActionSet)
  );
  e.unstable_Picker = p;
})(kr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.unstable_Picker = e.update = e.select = e.search = e.open = e.loadMore = e.cancel = e.ALL_RESOURCE_VERTICAL_ALIGNMENT = e.ALL_MEDIA_KINDS = e.ALL_BADGE_STATUSES = e.ALL_BADGE_PROGRESSES = e.Action = void 0;
  var n = kr;
  Object.defineProperty(e, "unstable_Picker", { enumerable: !0, get: function() {
    return n.unstable_Picker;
  } });
  var t = kr;
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
})(bs);
var io = {}, _s = {}, va = { exports: {} };
(function(e, n) {
  (function(t, r) {
    r(n);
  })(b, function(t) {
    var r, i, a, o, l, y = -1, u = function(N) {
      addEventListener("pageshow", function(M) {
        M.persisted && (y = M.timeStamp, N(M));
      }, !0);
    }, f = function() {
      return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    }, s = function() {
      var N = f();
      return N && N.activationStart || 0;
    }, h = function(N, M) {
      var U = f(), z = "navigate";
      return y >= 0 ? z = "back-forward-cache" : U && (document.prerendering || s() > 0 ? z = "prerender" : document.wasDiscarded ? z = "restore" : U.type && (z = U.type.replace(/_/g, "-"))), { name: N, value: M === void 0 ? -1 : M, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: z };
    }, p = function(N, M, U) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(N)) {
          var z = new PerformanceObserver(function(V) {
            Promise.resolve().then(function() {
              M(V.getEntries());
            });
          });
          return z.observe(Object.assign({ type: N, buffered: !0 }, U || {})), z;
        }
      } catch {
      }
    }, d = function(N, M, U, z) {
      var V, Z;
      return function(ge) {
        M.value >= 0 && (ge || z) && ((Z = M.value - (V || 0)) || V === void 0) && (V = M.value, M.delta = Z, M.rating = function(fe, se) {
          return fe > se[1] ? "poor" : fe > se[0] ? "needs-improvement" : "good";
        }(M.value, U), N(M));
      };
    }, c = function(N) {
      requestAnimationFrame(function() {
        return requestAnimationFrame(function() {
          return N();
        });
      });
    }, v = function(N) {
      var M = function(U) {
        U.type !== "pagehide" && document.visibilityState !== "hidden" || N(U);
      };
      addEventListener("visibilitychange", M, !0), addEventListener("pagehide", M, !0);
    }, m = function(N) {
      var M = !1;
      return function(U) {
        M || (N(U), M = !0);
      };
    }, g = -1, O = function() {
      return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0;
    }, _ = function(N) {
      document.visibilityState === "hidden" && g > -1 && (g = N.type === "visibilitychange" ? N.timeStamp : 0, A());
    }, T = function() {
      addEventListener("visibilitychange", _, !0), addEventListener("prerenderingchange", _, !0);
    }, A = function() {
      removeEventListener("visibilitychange", _, !0), removeEventListener("prerenderingchange", _, !0);
    }, E = function() {
      return g < 0 && (g = O(), T(), u(function() {
        setTimeout(function() {
          g = O(), T();
        }, 0);
      })), { get firstHiddenTime() {
        return g;
      } };
    }, S = function(N) {
      document.prerendering ? addEventListener("prerenderingchange", function() {
        return N();
      }, !0) : N();
    }, w = [1800, 3e3], I = function(N, M) {
      M = M || {}, S(function() {
        var U, z = E(), V = h("FCP"), Z = p("paint", function(ge) {
          ge.forEach(function(fe) {
            fe.name === "first-contentful-paint" && (Z.disconnect(), fe.startTime < z.firstHiddenTime && (V.value = Math.max(fe.startTime - s(), 0), V.entries.push(fe), U(!0)));
          });
        });
        Z && (U = d(N, V, w, M.reportAllChanges), u(function(ge) {
          V = h("FCP"), U = d(N, V, w, M.reportAllChanges), c(function() {
            V.value = performance.now() - ge.timeStamp, U(!0);
          });
        }));
      });
    }, j = [0.1, 0.25], k = function(N, M) {
      M = M || {}, I(m(function() {
        var U, z = h("CLS", 0), V = 0, Z = [], ge = function(se) {
          se.forEach(function(Oe) {
            if (!Oe.hadRecentInput) {
              var Wt = Z[0], Pt = Z[Z.length - 1];
              V && Oe.startTime - Pt.startTime < 1e3 && Oe.startTime - Wt.startTime < 5e3 ? (V += Oe.value, Z.push(Oe)) : (V = Oe.value, Z = [Oe]);
            }
          }), V > z.value && (z.value = V, z.entries = Z, U());
        }, fe = p("layout-shift", ge);
        fe && (U = d(N, z, j, M.reportAllChanges), v(function() {
          ge(fe.takeRecords()), U(!0);
        }), u(function() {
          V = 0, z = h("CLS", 0), U = d(N, z, j, M.reportAllChanges), c(function() {
            return U();
          });
        }), setTimeout(U, 0));
      }));
    }, B = { passive: !0, capture: !0 }, D = /* @__PURE__ */ new Date(), F = function(N, M) {
      r || (r = M, i = N, a = /* @__PURE__ */ new Date(), Y(removeEventListener), q());
    }, q = function() {
      if (i >= 0 && i < a - D) {
        var N = { entryType: "first-input", name: r.type, target: r.target, cancelable: r.cancelable, startTime: r.timeStamp, processingStart: r.timeStamp + i };
        o.forEach(function(M) {
          M(N);
        }), o = [];
      }
    }, L = function(N) {
      if (N.cancelable) {
        var M = (N.timeStamp > 1e12 ? /* @__PURE__ */ new Date() : performance.now()) - N.timeStamp;
        N.type == "pointerdown" ? function(U, z) {
          var V = function() {
            F(U, z), ge();
          }, Z = function() {
            ge();
          }, ge = function() {
            removeEventListener("pointerup", V, B), removeEventListener("pointercancel", Z, B);
          };
          addEventListener("pointerup", V, B), addEventListener("pointercancel", Z, B);
        }(M, N) : F(M, N);
      }
    }, Y = function(N) {
      ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(M) {
        return N(M, L, B);
      });
    }, le = [100, 300], W = function(N, M) {
      M = M || {}, S(function() {
        var U, z = E(), V = h("FID"), Z = function(se) {
          se.startTime < z.firstHiddenTime && (V.value = se.processingStart - se.startTime, V.entries.push(se), U(!0));
        }, ge = function(se) {
          se.forEach(Z);
        }, fe = p("first-input", ge);
        U = d(N, V, le, M.reportAllChanges), fe && v(m(function() {
          ge(fe.takeRecords()), fe.disconnect();
        })), fe && u(function() {
          var se;
          V = h("FID"), U = d(N, V, le, M.reportAllChanges), o = [], i = -1, r = null, Y(addEventListener), se = Z, o.push(se), q();
        });
      });
    }, ve = 0, H = 1 / 0, ee = 0, de = function(N) {
      N.forEach(function(M) {
        M.interactionId && (H = Math.min(H, M.interactionId), ee = Math.max(ee, M.interactionId), ve = ee ? (ee - H) / 7 + 1 : 0);
      });
    }, ie = function() {
      return l ? ve : performance.interactionCount || 0;
    }, K = function() {
      "interactionCount" in performance || l || (l = p("event", de, { type: "event", buffered: !0, durationThreshold: 0 }));
    }, Te = [200, 500], me = 0, Ne = function() {
      return ie() - me;
    }, _e = [], at = {}, yt = function(N) {
      var M = _e[_e.length - 1], U = at[N.interactionId];
      if (U || _e.length < 10 || N.duration > M.latency) {
        if (U)
          U.entries.push(N), U.latency = Math.max(U.latency, N.duration);
        else {
          var z = { id: N.interactionId, latency: N.duration, entries: [N] };
          at[z.id] = z, _e.push(z);
        }
        _e.sort(function(V, Z) {
          return Z.latency - V.latency;
        }), _e.splice(10).forEach(function(V) {
          delete at[V.id];
        });
      }
    }, er = function(N, M) {
      M = M || {}, S(function() {
        K();
        var U, z = h("INP"), V = function(ge) {
          ge.forEach(function(Oe) {
            Oe.interactionId && yt(Oe), Oe.entryType === "first-input" && !_e.some(function(Wt) {
              return Wt.entries.some(function(Pt) {
                return Oe.duration === Pt.duration && Oe.startTime === Pt.startTime;
              });
            }) && yt(Oe);
          });
          var fe, se = (fe = Math.min(_e.length - 1, Math.floor(Ne() / 50)), _e[fe]);
          se && se.latency !== z.value && (z.value = se.latency, z.entries = se.entries, U());
        }, Z = p("event", V, { durationThreshold: M.durationThreshold || 40 });
        U = d(N, z, Te, M.reportAllChanges), Z && (Z.observe({ type: "first-input", buffered: !0 }), v(function() {
          V(Z.takeRecords()), z.value < 0 && Ne() > 0 && (z.value = 0, z.entries = []), U(!0);
        }), u(function() {
          _e = [], me = ie(), z = h("INP"), U = d(N, z, Te, M.reportAllChanges);
        }));
      });
    }, Pn = [2500, 4e3], Ot = {}, wt = function(N, M) {
      M = M || {}, S(function() {
        var U, z = E(), V = h("LCP"), Z = function(se) {
          var Oe = se[se.length - 1];
          Oe && Oe.startTime < z.firstHiddenTime && (V.value = Math.max(Oe.startTime - s(), 0), V.entries = [Oe], U());
        }, ge = p("largest-contentful-paint", Z);
        if (ge) {
          U = d(N, V, Pn, M.reportAllChanges);
          var fe = m(function() {
            Ot[V.id] || (Z(ge.takeRecords()), ge.disconnect(), Ot[V.id] = !0, U(!0));
          });
          ["keydown", "click"].forEach(function(se) {
            addEventListener(se, fe, !0);
          }), v(fe), u(function(se) {
            V = h("LCP"), U = d(N, V, Pn, M.reportAllChanges), c(function() {
              V.value = performance.now() - se.timeStamp, Ot[V.id] = !0, U(!0);
            });
          });
        }
      });
    }, qt = [800, 1800], tr = function N(M) {
      document.prerendering ? S(function() {
        return N(M);
      }) : document.readyState !== "complete" ? addEventListener("load", function() {
        return N(M);
      }, !0) : setTimeout(M, 0);
    }, It = function(N, M) {
      M = M || {};
      var U = h("TTFB"), z = d(N, U, qt, M.reportAllChanges);
      tr(function() {
        var V = f();
        if (V) {
          var Z = V.responseStart;
          if (Z <= 0 || Z > performance.now())
            return;
          U.value = Math.max(Z - s(), 0), U.entries = [V], z(!0), u(function() {
            U = h("TTFB", 0), (z = d(N, U, qt, M.reportAllChanges))(!0);
          });
        }
      });
    };
    t.CLSThresholds = j, t.FCPThresholds = w, t.FIDThresholds = le, t.INPThresholds = Te, t.LCPThresholds = Pn, t.TTFBThresholds = qt, t.getCLS = k, t.getFCP = I, t.getFID = W, t.getINP = er, t.getLCP = wt, t.getTTFB = It, t.onCLS = k, t.onFCP = I, t.onFID = W, t.onINP = er, t.onLCP = wt, t.onTTFB = It, Object.defineProperty(t, "__esModule", { value: !0 });
  });
})(va, va.exports);
var gh = va.exports, Os = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(n) {
    n.LARGEST_CONTENTFUL_PAINT = "APP::WEB_VITALS::LARGEST_CONTENTFUL_PAINT", n.FIRST_INPUT_DELAY = "APP::WEB_VITALS::FIRST_INPUT_DELAY", n.CUMULATIVE_LAYOUT_SHIFT = "APP::WEB_VITALS::CUMULATIVE_LAYOUT_SHIFT", n.FIRST_CONTENTFUL_PAINT = "APP::WEB_VITALS::FIRST_CONTENTFUL_PAINT", n.TIME_TO_FIRST_BYTE = "APP::WEB_VITALS::TIME_TO_FIRST_BYTE", n.INTERACTION_TO_NEXT_PAINT = "APP::WEB_VITALS::INTERACTION_TO_NEXT_PAINT";
  }(e.Action || (e.Action = {}));
})(Os);
var Yn = {}, Br = {};
(function(e) {
  var n, t;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isUnframed = e.isClient = e.isServer = void 0, e.isServer = typeof window > "u", e.isClient = !e.isServer, e.isUnframed = e.isClient && ((t = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || t === void 0 ? void 0 : t.indexOf("Unframed")) > 0;
})(Br);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isDevelopmentClient = e.isProduction = e.isDevelopment = e.isUnframed = e.isServer = e.isClient = void 0;
  var n = Br, t = Br;
  Object.defineProperty(e, "isClient", { enumerable: !0, get: function() {
    return t.isClient;
  } }), Object.defineProperty(e, "isServer", { enumerable: !0, get: function() {
    return t.isServer;
  } }), Object.defineProperty(e, "isUnframed", { enumerable: !0, get: function() {
    return t.isUnframed;
  } }), e.isDevelopment = typeof process < "u" && process.env && process.env.NODE_ENV === "development", e.isProduction = !e.isDevelopment, e.isDevelopmentClient = e.isDevelopment && n.isClient;
})(Yn);
var it = {};
Object.defineProperty(it, "__esModule", { value: !0 });
it.isShopifyPing = it.isShopifyPOS = it.isShopifyMobile = it.isShopifyEmbedded = it.isMobile = void 0;
var yu = Yn;
function bh() {
  return Ps() || As() || Ss();
}
it.isMobile = bh;
function _h() {
  return yu.isClient && window.top !== window.self || yu.isUnframed;
}
it.isShopifyEmbedded = _h;
function Ps() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Mobile") >= 0;
}
it.isShopifyMobile = Ps;
function As() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify POS") >= 0;
}
it.isShopifyPOS = As;
function Ss() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Ping") >= 0;
}
it.isShopifyPing = Ss;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initializeWebVitals = e.interactionToNextPaint = e.timeToFirstByte = e.firstContentfulPaint = e.cumulativeLayoutShift = e.firstInputDelay = e.largestContentfulPaint = e.Action = void 0;
  var n = gh, t = Os;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
  var r = Yn, i = Tt, a = Et, o = it;
  function l(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: t.Action.LARGEST_CONTENTFUL_PAINT,
      payload: d
    });
  }
  e.largestContentfulPaint = l;
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
  function f(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: t.Action.FIRST_CONTENTFUL_PAINT,
      payload: d
    });
  }
  e.firstContentfulPaint = f;
  function s(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: t.Action.TIME_TO_FIRST_BYTE,
      payload: d
    });
  }
  e.timeToFirstByte = s;
  function h(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: t.Action.INTERACTION_TO_NEXT_PAINT,
      payload: d
    });
  }
  e.interactionToNextPaint = h;
  function p(d) {
    function c(m) {
      return function(g) {
        var O = g.id, _ = g.name, T = g.value, A = { id: O, metricName: _, value: T }, E = m(A);
        d.dispatch(E);
      };
    }
    var v = window;
    r.isServer || r.isClient && v.__is_web_vitals_initialized__ || o.isMobile() || (v.__is_web_vitals_initialized__ = !0, n.onLCP(c(l)), n.onFID(c(y)), n.onCLS(c(u)), n.onFCP(c(f)), n.onTTFB(c(s)), n.onINP(c(h)));
  }
  e.initializeWebVitals = p;
})(_s);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(_s, e);
})(io);
var Es = {}, Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.isPermitted = Ze.getPermissionKey = Ze.isPerformanceOrWebVitalsAction = Ze.isAppMessage = Ze.isAppBridgeAction = void 0;
var Oh = dn, br = Lt, Ph = re;
function Ah(e) {
  return e instanceof Object && Object.prototype.hasOwnProperty.call(e, "type") && e.type.toString().startsWith(br.PREFIX);
}
Ze.isAppBridgeAction = Ah;
function Sh(e) {
  if (typeof e != "object" || !e.data || typeof e.data != "object")
    return !1;
  var n = e.data;
  return Object.prototype.hasOwnProperty.call(n, "type") && Ph.findMatchInEnum(Oh.MessageType, n.type) !== void 0;
}
Ze.isAppMessage = Sh;
function Eh(e) {
  var n = e.type;
  return n.match(/^APP::(PERFORMANCE|WEB_VITALS)::/);
}
Ze.isPerformanceOrWebVitalsAction = Eh;
function Ts(e) {
  return e.replace(new RegExp("^" + br.PREFIX + br.SEPARATOR + "\\w+" + br.SEPARATOR), "");
}
Ze.getPermissionKey = Ts;
function Th(e, n, t) {
  var r = n.group, i = n.type;
  if (!r || !Object.prototype.hasOwnProperty.call(e, r))
    return !1;
  var a = e[r];
  if (!a)
    return !1;
  var o = Ts(i);
  return a[o] ? a[o][t] === !0 : !1;
}
Ze.isPermitted = Th;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFromApp = e.isPerformanceOrWebVitalsAction = e.getPermissionKey = e.isPermitted = e.isAppMessage = e.isAppBridgeAction = void 0;
  var n = Ze;
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
})(Es);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(H, ee, de, ie) {
    ie === void 0 && (ie = de), Object.defineProperty(H, ie, { enumerable: !0, get: function() {
      return ee[de];
    } });
  } : function(H, ee, de, ie) {
    ie === void 0 && (ie = de), H[ie] = ee[de];
  }), t = b && b.__setModuleDefault || (Object.create ? function(H, ee) {
    Object.defineProperty(H, "default", { enumerable: !0, value: ee });
  } : function(H, ee) {
    H.default = ee;
  }), r = b && b.__importStar || function(H) {
    if (H && H.__esModule)
      return H;
    var ee = {};
    if (H != null)
      for (var de in H)
        de !== "default" && Object.prototype.hasOwnProperty.call(H, de) && n(ee, H, de);
    return t(ee, H), ee;
  }, i = b && b.__exportStar || function(H, ee) {
    for (var de in H)
      de !== "default" && !Object.prototype.hasOwnProperty.call(ee, de) && n(ee, H, de);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.WebVitals = e.unstable_Picker = e.Performance = e.Pos = e.AppLink = e.ChannelMenu = e.NavigationMenu = e.Share = e.ContextualSaveBar = e.MarketingExternalActivityTopBar = e.TitleBar = e.SessionToken = e.ResourcePicker = e.Redirect = e.Print = e.ModalContent = e.Modal = e.Loading = e.LeaveConfirmation = e.History = e.Toast = e.Fullscreen = e.FeedbackModal = e.Features = e.Flash = e.Error = e.Client = e.Cart = e.Scanner = e.ButtonGroup = e.Button = e.AuthCode = e.isAppBridgeAction = void 0;
  var a = r(La);
  e.AuthCode = a;
  var o = r(Qn);
  e.Button = o;
  var l = r(Hr);
  e.ButtonGroup = l;
  var y = r(Va);
  e.Cart = y;
  var u = r(Ga);
  e.Client = u;
  var f = r(Gt);
  e.Error = f;
  var s = r(es);
  e.Flash = s;
  var h = r($a);
  e.Features = h;
  var p = r(rs);
  e.FeedbackModal = p;
  var d = r(Ka);
  e.Fullscreen = d;
  var c = r(is);
  e.LeaveConfirmation = c;
  var v = r(Qa);
  e.Loading = v;
  var m = r(Kr);
  e.Modal = m;
  var g = r(as);
  e.ModalContent = g;
  var O = r(os);
  e.History = O;
  var _ = r(Qr);
  e.Redirect = _;
  var T = r(Yr);
  e.Print = T;
  var A = r(Ya);
  e.ResourcePicker = A;
  var E = r(Ja);
  e.Scanner = E;
  var S = r(Xa);
  e.SessionToken = S;
  var w = r(Za);
  e.TitleBar = w;
  var I = r(xa);
  e.Toast = I;
  var j = r(eo);
  e.ContextualSaveBar = j;
  var k = r(ls);
  e.Share = k;
  var B = r(no);
  e.NavigationMenu = B;
  var D = r(ds);
  e.ChannelMenu = D;
  var F = r(ro);
  e.AppLink = F;
  var q = r(fs);
  e.Pos = q;
  var L = r(ps);
  e.MarketingExternalActivityTopBar = L;
  var Y = r(ms);
  e.Performance = Y;
  var le = r(bs);
  e.unstable_Picker = le;
  var W = r(io);
  e.WebVitals = W;
  var ve = Es;
  Object.defineProperty(e, "isAppBridgeAction", { enumerable: !0, get: function() {
    return ve.isAppBridgeAction;
  } }), i(Tt, e);
})(ht);
var vu = b && b.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]]);
  return t;
};
Object.defineProperty(Ba, "__esModule", { value: !0 });
var ur = te, ws = ht, wh = Re, cr = ws.ContextualSaveBar.Action, Ih = ws.ContextualSaveBar.create;
function Ch(e) {
  var n = e.discardAction, t = n === void 0 ? { onAction: function() {
    return null;
  } } : n, r = e.saveAction, i = r === void 0 ? { onAction: function() {
    return null;
  } } : r, a = e.fullWidth, o = e.leaveConfirmationDisable, l = e.visible, y = wh.useAppBridge(), u = i.onAction, f = vu(i, ["onAction"]), s = t.onAction, h = vu(t, ["onAction"]), p = ur.useMemo(function() {
    return Ih(y, {
      saveAction: f,
      discardAction: h,
      fullWidth: a,
      leaveConfirmationDisable: o
    });
  }, [y]);
  return ur.useEffect(function() {
    p.set({
      saveAction: f,
      discardAction: h,
      fullWidth: a,
      leaveConfirmationDisable: o
    }, l);
  }, [
    y,
    p,
    f,
    h,
    a,
    o,
    l
  ]), ur.useEffect(function() {
    return p.subscribe(cr.DISCARD, s), p.subscribe(cr.SAVE, u), function() {
      p.unsubscribe();
    };
  }, [p, s, u]), ur.useEffect(function() {
    l ? p.dispatch(cr.SHOW) : p.dispatch(cr.HIDE);
  }, [p, l]), null;
}
Ba.default = Ch;
var jh = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ka, "__esModule", { value: !0 });
var Mh = jh(Ba);
ka.default = Mh.default;
var ao = {}, oo = {}, Rh = b && b.__extends || function() {
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
}(), Nh = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(oo, "__esModule", { value: !0 });
var Dh = Nh(te), yi = ht, kh = st, Bh = (
  /** @class */
  function(e) {
    Rh(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.context;
      this.loading = yi.Loading.create(t), this.loading != null && this.loading.dispatch(yi.Loading.Action.START);
    }, n.prototype.componentWillUnmount = function() {
      this.loading != null && this.loading.dispatch(yi.Loading.Action.STOP);
    }, n.prototype.render = function() {
      return null;
    }, n.contextType = kh.AppBridgeContext, n;
  }(Dh.default.Component)
);
oo.default = Bh;
var Lh = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ao, "__esModule", { value: !0 });
var Uh = Lh(oo);
ao.default = Uh.default;
var Is = {}, uo = {}, Ft = {}, Fh = b && b.__createBinding || (Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return n[t];
  } });
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
}), Vh = b && b.__setModuleDefault || (Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
}), co = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var n = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && Fh(n, e, t);
  return Vh(n, e), n;
}, Lr = b && b.__spreadArray || function(e, n) {
  for (var t = 0, r = n.length, i = e.length; t < r; t++, i++)
    e[i] = n[t];
  return e;
};
Object.defineProperty(Ft, "__esModule", { value: !0 });
Ft.transformActions = Ft.generateRedirect = void 0;
var sr = co(Qn), Gh = co(Hr), ma = co(Qr);
function Cs(e, n, t, r) {
  if (t === void 0 && (t = "APP"), n != null) {
    var i = ma.create(e), a = r === !0 ? {
      url: n,
      newContext: !0
    } : n;
    return function() {
      i.dispatch($h(t, r), a);
    };
  }
}
Ft.generateRedirect = Cs;
function $h(e, n) {
  return n === !0 ? ma.Action.REMOTE : ma.Action[e];
}
function qh(e, n) {
  var t = n.primaryAction, r = n.secondaryActions, i = n.actionGroups, a = Wh(e, t), o = Lr(Lr([], Hh(e, r)), zh(e, i));
  return {
    primary: a,
    secondary: o
  };
}
Ft.transformActions = qh;
function so(e, n) {
  var t = n.destructive === !0 ? sr.Style.Danger : void 0, r = sr.create(e, {
    label: n.content || "",
    disabled: n.disabled,
    loading: n.loading,
    plain: n.plain,
    style: t
  });
  n.onAction && r.subscribe(sr.Action.CLICK, n.onAction);
  var i = Cs(e, n.url, n.target, n.external);
  return i != null && r.subscribe(sr.Action.CLICK, i), r;
}
function Wh(e, n) {
  if (n != null) {
    var t = so(e, n);
    return t;
  }
}
function Hh(e, n) {
  n === void 0 && (n = []);
  var t = Lr([], n.map(function(r) {
    return so(e, r);
  }));
  return t;
}
function zh(e, n) {
  n === void 0 && (n = []);
  var t = Lr([], n.map(function(r) {
    var i = r.actions.map(function(a) {
      return so(e, a);
    });
    return Gh.create(e, { label: r.title, plain: r.plain, buttons: i });
  }));
  return t;
}
var Ur = b && b.__assign || function() {
  return Ur = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Ur.apply(this, arguments);
}, Kh = b && b.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]]);
  return t;
};
Object.defineProperty(uo, "__esModule", { value: !0 });
var Yt = te, xt = Kr, Qh = Ft, Yh = Re;
function Jh(e) {
  var n = Yh.useAppBridge(), t = Yt.useRef(null), r = Yt.useRef({ open: !1 }), i = e.open, a = Yt.useRef(!1), o = Yt.useMemo(function() {
    e.primaryAction, e.secondaryActions;
    var l = Kh(e, ["primaryAction", "secondaryActions"]);
    return xt.create(n, mu(n, l));
  }, [n]);
  return Yt.useEffect(function() {
    if (a.current) {
      r.current = e;
      return;
    }
    var l = r.current.open, y = l !== i;
    if (i) {
      var u = mu(n, e, l), f = !y;
      Xh(u), o.set(u, f);
    }
    return y && (i ? (o.dispatch(xt.Action.OPEN), t.current = document.activeElement) : (o.dispatch(xt.Action.CLOSE), t.current != null && document.contains(t.current) && (t.current.focus(), t.current = null))), e.onClose != null && o.subscribe(xt.Action.CLOSE, e.onClose), r.current = e, function() {
      o.unsubscribe();
    };
  }, [e, i]), Yt.useEffect(function() {
    return function() {
      r.current.open && o.dispatch(xt.Action.CLOSE);
    };
  }, [o]), null;
}
function Xh(e) {
  return typeof e.url == "string" || typeof e.path == "string";
}
function mu(e, n, t) {
  var r = n.title, i = n.size, a = n.message, o = n.src, l = n.primaryAction, y = n.secondaryActions, u = n.loading, f = i == null ? void 0 : xt.Size[i], s = {};
  return o != null && (o.match("^https?://") ? s.url = o : s.path = o), Ur(Ur({ title: r, message: a, size: f }, s), { footer: {
    buttons: Qh.transformActions(e, {
      primaryAction: l,
      secondaryActions: y
    })
  }, loading: t ? void 0 : u });
}
uo.default = Jh;
var lo = {}, fo = {}, Zh = b && b.__extends || function() {
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
}(), xh = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(fo, "__esModule", { value: !0 });
var ey = xh(te), ty = ht, ny = st, ry = (
  /** @class */
  function(e) {
    Zh(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.context;
      this.modalContent = ty.ModalContent.create(t), this.syncLoadingStatus();
    }, n.prototype.componentDidUpdate = function() {
      this.syncLoadingStatus();
    }, n.prototype.syncLoadingStatus = function() {
      this.modalContent && (this.props.loading ? this.modalContent.loading() : this.modalContent.loaded());
    }, n.prototype.render = function() {
      return null;
    }, n.contextType = ny.AppBridgeContext, n;
  }(ey.default.Component)
);
fo.default = ry;
var iy = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(lo, "__esModule", { value: !0 });
var ay = iy(fo);
lo.default = ay.default;
(function(e) {
  var n = b && b.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalContent = void 0;
  var t = n(uo), r = lo;
  Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return n(r).default;
  } }), e.default = t.default;
})(Is);
var po = {}, ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
var lr = te, oy = ro, uy = no, cy = Re;
function sy(e, n) {
  return e.destination.replace(/\/$/, "") === n.pathname.replace(/\/$/, "");
}
function ly(e) {
  var n = e.navigationLinks, t = e.matcher, r = t === void 0 ? sy : t, i = cy.useAppBridge(), a = lr.useState(), o = a[0], l = a[1];
  lr.useEffect(function() {
    var u = n.map(function(f) {
      return oy.create(i, f);
    });
    l(u);
  }, [i, JSON.stringify(n)]);
  var y = lr.useMemo(function() {
    var u = (o || []).findIndex(function(f) {
      return r(f, location);
    });
    if (u >= 0)
      return o == null ? void 0 : o[u];
  }, [i, location.pathname, r, o, location.pathname]);
  return lr.useEffect(function() {
    o && uy.create(i, { items: o, active: y });
  }, [o, y]), null;
}
ho.default = ly;
var dy = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(po, "__esModule", { value: !0 });
var fy = dy(ho);
po.default = fy.default;
var yo = {}, js = {}, ga = { exports: {} }, vi = {}, mi = {}, gi = {}, _n = {}, Ms = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.createTransportListener = e.fromWindow = e.fromFrame = e.Context = void 0;
  var n = Fn, t = Ze, r = dn, i = St, a = Br;
  (function(f) {
    f.Modal = "Modal", f.Main = "Main";
  })(e.Context || (e.Context = {}));
  function o(f, s, h) {
    var p = [], d = f.host, c = f.window;
    if (!d)
      throw n.fromAction("App frame is undefined", n.AppActionType.WINDOW_UNDEFINED);
    return a.isUnframed && window.MobileWebView && Object.assign(window.MobileWebView, {
      postMessageToIframe: function(v, m) {
        c == null || c.postMessage(v, m), u(v) && d.postMessage(JSON.stringify(v.payload), location.origin);
      },
      updateIframeUrl: function(v) {
        var m = window.location, g = (f.window || {}).location;
        try {
          var O = new URL(v).origin;
          O === s && g ? g.replace(v) : m.href = v;
        } catch {
        }
      }
    }), d.addEventListener("message", function(v) {
      if (!(v.source === d || !t.isAppMessage(v))) {
        if (v.origin !== s) {
          var m = "Message origin '" + v.origin + "' does not match app origin '" + s + "'.", g = n.invalidOriginAction(m), O = {
            type: "dispatch",
            payload: g
          };
          c == null || c.postMessage(O, v.origin);
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
        for (var _ = 0, T = p; _ < T.length; _++) {
          var A = T[_];
          A(v);
        }
      }
    }), {
      context: h,
      localOrigin: s,
      frameWindow: c,
      hostFrame: d,
      dispatch: function(v) {
        c == null || c.postMessage(v, s);
      },
      subscribe: function(v) {
        return i.addAndRemoveFromCollection(p, v);
      }
    };
  }
  e.fromFrame = o;
  function l(f, s) {
    var h = [];
    return typeof window !== void 0 && window.addEventListener("message", function(p) {
      if (!(window === f && !a.isUnframed || p.source !== f || !(t.isAppBridgeAction(p.data.payload) || t.isAppMessage(p))))
        for (var d = 0, c = h; d < c.length; d++) {
          var v = c[d];
          v(p);
        }
    }), {
      localOrigin: s,
      hostFrame: f,
      dispatch: function(p) {
        var d;
        if (!((d = p.source) === null || d === void 0) && d.host) {
          if (a.isUnframed && window && window.MobileWebView) {
            var c = JSON.stringify({
              id: "unframed://fromClient",
              origin: s,
              data: p
            });
            window.MobileWebView.postMessage(c);
            return;
          }
          var v = new URL("https://" + p.source.host).origin;
          f.postMessage(p, v);
        }
      },
      subscribe: function(p) {
        return i.addAndRemoveFromCollection(h, p);
      }
    };
  }
  e.fromWindow = l;
  function y() {
    var f = [], s = {};
    function h(p) {
      function d() {
        if (arguments.length < 2)
          return i.addAndRemoveFromCollection(f, { callback: arguments[0] });
        var c = Array.from(arguments), v = c[0], m = c[1], g = c[2], O = { callback: m, id: g }, _ = { type: v, id: g };
        return Object.prototype.hasOwnProperty.call(s, v) || (s[v] = []), p && p(r.MessageType.Subscribe, _), i.addAndRemoveFromCollection(s[v], O, function() {
          p && p(r.MessageType.Unsubscribe, _);
        });
      }
      return d;
    }
    return {
      createSubscribeHandler: h,
      handleMessage: function(p) {
        f.forEach(function(d) {
          return d.callback(p);
        });
      },
      handleActionDispatch: function(p) {
        var d = p.type, c = p.payload, v = !1;
        if (Object.prototype.hasOwnProperty.call(s, d))
          for (var m = 0, g = s[d]; m < g.length; m++) {
            var O = g[m], _ = O.id, T = O.callback, A = c && c.id === _;
            (A || !_) && (T(c), v = !0);
          }
        return v;
      }
    };
  }
  e.createTransportListener = y;
  function u(f) {
    return f !== null && typeof f == "object" && !Array.isArray(f) && f.type === "dispatch" && typeof f.payload == "object";
  }
})(Ms);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Ms, e);
})(_n);
var Ct = {}, gu;
function Rs() {
  if (gu)
    return Ct;
  gu = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.mockAppBridge = Ct.serverAppBridge = void 0;
  var e = Gt, n = function() {
  }, t = new Promise(function() {
  });
  return Ct.serverAppBridge = {
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
  }, Ct.mockAppBridge = {
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
  }, Ct;
}
var Tn = {}, ut = {}, bu;
function vo() {
  if (bu)
    return ut;
  bu = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.getWindow = ut.getLocation = ut.redirect = ut.shouldRedirect = void 0;
  function e(a) {
    return a === window;
  }
  ut.shouldRedirect = e;
  function n(a) {
    var o = t();
    o && o.assign(a);
  }
  ut.redirect = n;
  function t() {
    return i() ? window.location : void 0;
  }
  ut.getLocation = t;
  function r() {
    return i() ? window : void 0;
  }
  ut.getWindow = r;
  function i() {
    return typeof window < "u";
  }
  return ut;
}
var _u;
function py() {
  if (_u)
    return Tn;
  _u = 1, Object.defineProperty(Tn, "__esModule", { value: !0 }), Tn.handleAppPrint = void 0;
  var e = vo();
  function n() {
    return navigator.userAgent.indexOf("iOS") >= 0;
  }
  function t() {
    var o = e.getWindow();
    if (!(!o || !o.document || !o.document.body)) {
      var l = o.document.createElement("input");
      return l.style.display = "none", o.document.body.appendChild(l), l;
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
  return Tn.handleAppPrint = a, Tn;
}
var bi = {}, Ou;
function Ns() {
  return Ou || (Ou = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isV1Config = e.MessageType = e.LifecycleHook = e.PermissionType = void 0;
    var n = dn;
    Object.defineProperty(e, "MessageType", { enumerable: !0, get: function() {
      return n.MessageType;
    } });
    var t = dn;
    Object.defineProperty(e, "PermissionType", { enumerable: !0, get: function() {
      return t.PermissionType;
    } }), Object.defineProperty(e, "LifecycleHook", { enumerable: !0, get: function() {
      return t.LifecycleHook;
    } });
    function r(i) {
      return !i.host;
    }
    e.isV1Config = r;
  }(bi)), bi;
}
var dr = {}, _i = {}, Pu;
function hy() {
  return Pu || (Pu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.removeFromCollection = e.addAndRemoveFromCollection = void 0;
    var n = St;
    Object.defineProperty(e, "addAndRemoveFromCollection", { enumerable: !0, get: function() {
      return n.addAndRemoveFromCollection;
    } }), Object.defineProperty(e, "removeFromCollection", { enumerable: !0, get: function() {
      return n.removeFromCollection;
    } });
  }(_i)), _i;
}
var Au;
function yy() {
  if (Au)
    return dr;
  Au = 1, Object.defineProperty(dr, "__esModule", { value: !0 });
  var e = hy(), n = (
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
        for (var o = [], l = 3; l < arguments.length; l++)
          o[l - 3] = arguments[l];
        var y = 0, u = this.get(r) || [];
        function f() {
          for (var s = [], h = 0; h < arguments.length; h++)
            s[h] = arguments[h];
          var p = u[y++];
          return p ? p(f).apply(a, s) : i.apply(a, s);
        }
        return f.apply(a, o);
      }, t;
    }()
  );
  return dr.default = n, dr;
}
var Su;
function Eu() {
  return Su || (Su = 1, function(e) {
    var n = b && b.__assign || function() {
      return n = Object.assign || function(w) {
        for (var I, j = 1, k = arguments.length; j < k; j++) {
          I = arguments[j];
          for (var B in I)
            Object.prototype.hasOwnProperty.call(I, B) && (w[B] = I[B]);
        }
        return w;
      }, n.apply(this, arguments);
    }, t = b && b.__spreadArray || function(w, I) {
      for (var j = 0, k = I.length, B = w.length; j < k; j++, B++)
        w[B] = I[j];
      return w;
    }, r = b && b.__importDefault || function(w) {
      return w && w.__esModule ? w : { default: w };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createApp = e.createAppWrapper = e.createClientApp = e.WINDOW_UNDEFINED_MESSAGE = void 0;
    var i = Et, a = Yr, o = Gt, l = _n, y = Rs(), u = Yn, f = Ga, s = io, h = py(), p = vo(), d = Ns(), c = r(yy());
    e.WINDOW_UNDEFINED_MESSAGE = "window is not defined. Running an app outside a browser is not supported";
    function v(w, I) {
      var j = I.apiKey, k = I.host, B = I.forceRedirect, D = B === void 0 ? !u.isDevelopmentClient : B, F = p.getLocation();
      if (u.isUnframed || !F || !j || !k || !D || !p.shouldRedirect(w))
        return !1;
      var q = "https://" + k + "/apps/" + j + F.pathname + (F.search || "");
      return p.redirect(q), !0;
    }
    var m = function(w) {
      return function(I) {
        return w(n(n({}, I), { version: i.getVersion(), clientInterface: {
          name: i.getPackageName(),
          version: i.getVersion()
        } }));
      };
    }, g = function(w) {
      w.set(d.LifecycleHook.DispatchAction, m);
    };
    function O(w) {
      w.subscribe(a.Action.APP, h.handleAppPrint), w.dispatch(f.initialize());
      try {
        s.initializeWebVitals(w);
      } catch (I) {
        console.error("App-Bridge failed to initialize web-vitals", I);
      }
    }
    var _ = function(w, I) {
      I === void 0 && (I = []);
      var j = [], k = l.createTransportListener(), B = function(D) {
        var F = D.data, q = F.type, L = F.payload;
        switch (q) {
          case "getState": {
            var Y = j.splice(0);
            Y.forEach(function(ve) {
              return ve(L);
            });
            break;
          }
          case "dispatch": {
            k.handleMessage(L);
            var le = k.handleActionDispatch(L);
            if (le)
              return;
            var W = i.findMatchInEnum(o.Action, L.type);
            W && o.throwError(W, L);
            break;
          }
        }
      };
      return w.subscribe(B), function(D) {
        var F = T(D), q = v(w.hostFrame, F);
        if (q)
          return y.mockAppBridge;
        var L = S(w, F), Y = k.createSubscribeHandler(L);
        L(d.MessageType.Unsubscribe);
        function le(K) {
          return L(d.MessageType.Dispatch, K), K;
        }
        for (var W = new URL("https://" + F.host).origin, ve = new c.default(), H = {
          hostOrigin: W,
          localOrigin: w.localOrigin,
          hooks: ve,
          dispatch: function(K) {
            return H.hooks ? H.hooks.run(d.LifecycleHook.DispatchAction, le, H, K) : le(K);
          },
          featuresAvailable: function() {
            for (var K = [], Te = 0; Te < arguments.length; Te++)
              K[Te] = arguments[Te];
            var me = K[0], Ne = Array.isArray(me) ? t([], me) : K;
            return H.getState("features").then(function(_e) {
              return Ne.length ? Ne.reduce(function(at, yt) {
                return Object.keys(_e).includes(yt) && (at[yt] = _e[yt]), at;
              }, {}) : _e;
            });
          },
          getState: function(K) {
            return K && typeof K != "string" ? Promise.resolve(void 0) : new Promise(function(Te) {
              j.push(Te), L(d.MessageType.GetState);
            }).then(function(Te) {
              var me = Te;
              if (K)
                for (var Ne = 0, _e = K.split("."); Ne < _e.length; Ne++) {
                  var at = _e[Ne];
                  if (me == null || typeof me != "object" || Array.isArray(me) || !Object.keys(me).includes(at))
                    return;
                  me = me[at];
                }
              return me;
            });
          },
          subscribe: Y,
          error: function(K, Te) {
            var me = [];
            return i.forEachInEnum(o.Action, function(Ne) {
              me.push(Y(Ne, K, Te));
            }), function() {
              me.forEach(function(Ne) {
                return Ne();
              });
            };
          }
        }, ee = 0, de = I; ee < de.length; ee++) {
          var ie = de[ee];
          ie(ve, H);
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
        var j = atob((I = w.host) === null || I === void 0 ? void 0 : I.replace(/_/g, "/").replace(/-/g, "+"));
        return n(n({}, w), { host: j });
      } catch {
        var k = "not a valid host, please use the value provided by Shopify";
        throw o.fromAction(k, o.AppActionType.INVALID_CONFIG);
      }
    }
    function A(w, I, j) {
      if (j === void 0 && (j = []), !w)
        throw o.fromAction(e.WINDOW_UNDEFINED_MESSAGE, o.AppActionType.WINDOW_UNDEFINED);
      var k = p.getLocation(), B = I || k && k.origin;
      if (!B)
        throw o.fromAction("local origin cannot be blank", o.AppActionType.MISSING_LOCAL_ORIGIN);
      var D = l.fromWindow(w, B), F = e.createClientApp(D, t([g], j));
      return F;
    }
    e.createAppWrapper = A;
    function E(w) {
      var I = p.getWindow();
      return !I || !I.top ? y.serverAppBridge : A(I.top)(w);
    }
    e.createApp = E;
    function S(w, I) {
      return function(j, k) {
        w.dispatch({
          payload: k,
          source: I,
          type: j
        });
      };
    }
    e.default = E;
  }(gi)), gi;
}
var Tu;
function qn() {
  return Tu || (Tu = 1, function(e) {
    var n = b && b.__createBinding || (Object.create ? function(i, a, o, l) {
      l === void 0 && (l = o), Object.defineProperty(i, l, { enumerable: !0, get: function() {
        return a[o];
      } });
    } : function(i, a, o, l) {
      l === void 0 && (l = o), i[l] = a[o];
    }), t = b && b.__exportStar || function(i, a) {
      for (var o in i)
        o !== "default" && !Object.prototype.hasOwnProperty.call(a, o) && n(a, i, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = Eu();
    t(Ns(), e), t(Eu(), e), e.default = r.createClientApp;
  }(mi)), mi;
}
var wu;
function vy() {
  return wu || (wu = 1, function(e) {
    var n = b && b.__createBinding || (Object.create ? function(i, a, o, l) {
      l === void 0 && (l = o), Object.defineProperty(i, l, { enumerable: !0, get: function() {
        return a[o];
      } });
    } : function(i, a, o, l) {
      l === void 0 && (l = o), i[l] = a[o];
    }), t = b && b.__exportStar || function(i, a) {
      for (var o in i)
        o !== "default" && !Object.prototype.hasOwnProperty.call(a, o) && n(a, i, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
    var r = qn();
    Object.defineProperty(e, "default", { enumerable: !0, get: function() {
      return r.createApp;
    } }), t(_n, e), t(qn(), e);
  }(vi)), vi;
}
var Oi = {}, fr = {}, Pi = {}, Ai = {}, ce = {}, Si = {}, Ei = {}, Iu;
function Ue() {
  return Iu || (Iu = 1, function(e) {
    var n = b && b.__assign || function() {
      return n = Object.assign || function(c) {
        for (var v, m = 1, g = arguments.length; m < g; m++) {
          v = arguments[m];
          for (var O in v)
            Object.prototype.hasOwnProperty.call(v, O) && (c[O] = v[O]);
        }
        return c;
      }, n.apply(this, arguments);
    }, t = b && b.__spreadArray || function(c, v) {
      for (var m = 0, g = v.length, O = c.length; m < g; m++, O++)
        c[O] = v[m];
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validate = e.matchesPositiveInteger = e.matchesBoolean = e.makeOptional = e.matchesString = e.matchesObject = e.getErrors = e.oneOf = e.matchesArray = e.matchesEnum = e.composeSchemas = e.TYPE_ERROR = void 0, e.TYPE_ERROR = "type_error_expected";
    function r() {
      for (var c = [], v = 0; v < arguments.length; v++)
        c[v] = arguments[v];
      return function(m) {
        for (var g, O = 0, _ = c.length; !g && O < _; ) {
          if (g = c[O](m), g)
            return g;
          O++;
        }
      };
    }
    e.composeSchemas = r;
    function i(c, v) {
      return function(m) {
        var g = Object.keys(c).map(function(_) {
          return c[_];
        }), O = v && v.message || "expected:" + g.map(function(_) {
          return "`" + _ + "`";
        }).join(" or ");
        return g.includes(m) ? void 0 : l(m, "invalid_enum_value", n(n({}, v), { message: O }));
      };
    }
    e.matchesEnum = i;
    function a(c, v) {
      return function(m) {
        if (!Array.isArray(m))
          return l(m, e.TYPE_ERROR + "_array", v);
        if (c) {
          var g = [];
          return m.forEach(function(O, _) {
            var T = c(O);
            T && (g = g.concat(T.map(function(A) {
              return n(n({}, A), { path: "['" + _ + "']" + (A.path || "") });
            })));
          }), g.length ? g : void 0;
        }
      };
    }
    e.matchesArray = a;
    function o() {
      for (var c = [], v = 0; v < arguments.length; v++)
        c[v] = arguments[v];
      return function(m) {
        for (var g = [], O = 0, _ = c; O < _.length; O++) {
          var T = _[O], A = T(m);
          if (A == null)
            return A;
          g.push.apply(g, A);
        }
        return g;
      };
    }
    e.oneOf = o;
    function l(c, v, m) {
      return m === void 0 && (m = { message: void 0 }), [
        {
          value: c,
          error: v,
          message: typeof m.message == "function" ? m.message(v, c) : m.message
        }
      ];
    }
    function y(c, v, m) {
      var g = m ? c[m] : c, O = m ? "['" + m + "']" : void 0, _ = v(g);
      if (_)
        return _.map(function(T) {
          return n(n({}, T), { path: "" + (O || "") + (T.path || "") || void 0 });
        });
    }
    e.getErrors = y;
    function u(c, v) {
      return function(m) {
        if (typeof m != "object" || !m || Array.isArray(m))
          return l(m, e.TYPE_ERROR + "_object", v);
        var g = Object.keys(c).reduce(function(O, _) {
          return t(t([], O), y(m, c[_], _) || []);
        }, []);
        return g.length ? g : void 0;
      };
    }
    e.matchesObject = u;
    function f(c) {
      return function(v) {
        return typeof v == "string" ? void 0 : l(v, e.TYPE_ERROR + "_string", c);
      };
    }
    e.matchesString = f;
    function s(c) {
      return function(v) {
        if (v != null)
          return c(v);
      };
    }
    e.makeOptional = s;
    function h(c) {
      return function(v) {
        return typeof v == "boolean" ? void 0 : l(v, e.TYPE_ERROR + "_boolean", c);
      };
    }
    e.matchesBoolean = h;
    function p(c) {
      return function(v) {
        return !Number.isInteger(v) || v < 0 ? l(v, e.TYPE_ERROR + "_integer", c) : void 0;
      };
    }
    e.matchesPositiveInteger = p;
    function d(c, v) {
      return y(c, v);
    }
    e.validate = d;
  }(Ei)), Ei;
}
var Ti = {}, Cu;
function Je() {
  return Cu || (Cu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.relativePathSchema = e.relativeUrlSchema = e.isValidRelativePath = e.createActionValidator = void 0;
    var n = Ue();
    function t(i, a, o, l) {
      a === void 0 && (a = void 0), o === void 0 && (o = !1), l === void 0 && (l = !1);
      var y = n.matchesObject({
        id: l ? n.matchesString() : n.makeOptional(n.matchesString())
      }), u = a ? n.composeSchemas(y, a) : y;
      return n.matchesObject({
        type: n.matchesEnum(i, {
          message: function(f, s) {
            return "The action type `" + s + "` is invalid or unsupported";
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
  }(Ti)), Ti;
}
var ju;
function Xr() {
  return ju || (ju = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.buttonSchemaWithId = e.buttonSchema = void 0;
    var n = _t;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ue(), r = Je();
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
      var l = r.createActionValidator(n.Action, o.type === n.Action.UPDATE ? e.buttonSchema : void 0, !0, !0);
      return t.validate(o, l);
    }
    e.validateAction = a;
  }(Si)), Si;
}
var wi = {}, Mu;
function Ds() {
  return Mu || (Mu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.buttonGroupSchema = void 0;
    var n = Ut;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ue(), r = Je(), i = Xr();
    e.buttonGroupSchema = t.composeSchemas(i.buttonSchema, t.matchesObject({
      buttons: t.matchesArray(t.makeOptional(i.buttonSchemaWithId))
    }));
    function a(l) {
      return t.validate(l, e.buttonGroupSchema);
    }
    e.validateProps = a;
    function o(l) {
      var y = r.createActionValidator(n.Action, e.buttonGroupSchema, !0, !0);
      return t.validate(l, y);
    }
    e.validateAction = o;
  }(wi)), wi;
}
var Ii = {}, Ru;
function my() {
  return Ru || (Ru = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.contextSaveBarSchema = void 0;
    var n = Ue(), t = to;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = Je();
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
      var l = r.createActionValidator(t.Action, e.contextSaveBarSchema);
      return n.validate(o, l);
    }
    e.validateAction = a;
  }(Ii)), Ii;
}
var Ci = {}, Nu;
function gy() {
  return Nu || (Nu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.feedbackModalSchema = void 0;
    var n = za;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ue(), r = Je();
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
  }(Ci)), Ci;
}
var ji = {}, Du;
function by() {
  return Du || (Du = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = Cr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ue(), r = Je();
    function i(a) {
      var o = r.createActionValidator(n.Action);
      return t.validate(a, o);
    }
    e.validateAction = i;
  }(ji)), ji;
}
var Mi = {}, ku;
function ks() {
  return ku || (ku = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.linkActionSchema = e.linkPropsSchema = void 0;
    var n = fn;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ue(), r = Je(), i;
    (function(l) {
      l.APP = "APP::NAVIGATION::REDIRECT::APP", l.LEGACY_APP = "APP";
    })(i || (i = {})), e.linkPropsSchema = t.matchesObject({
      label: t.matchesString(),
      destination: r.relativeUrlSchema,
      redirectType: t.matchesEnum(i)
    }), e.linkActionSchema = t.matchesObject({
      label: t.matchesString(),
      destination: r.relativePathSchema,
      redirectType: t.matchesEnum(i)
    });
    function a(l) {
      return t.validate(l, e.linkPropsSchema);
    }
    e.validateProps = a;
    function o(l) {
      return t.validate(l, r.createActionValidator(n.Action, e.linkActionSchema, !0, !0));
    }
    e.validateAction = o;
  }(Mi)), Mi;
}
var jt = {}, Bu;
function _y() {
  if (Bu)
    return jt;
  Bu = 1, Object.defineProperty(jt, "__esModule", { value: !0 }), jt.validateAction = jt.validateProps = void 0;
  var e = Nr, n = Dr, t = Ue(), r = Je(), i = re, a = ks(), o = t.matchesObject({ id: t.matchesString(), options: a.linkPropsSchema });
  function l(h) {
    return [
      {
        error: "invalid_active_item",
        value: h,
        message: "expected active item to exist in menu items"
      }
    ];
  }
  function y(h) {
    var p = t.matchesObject({
      items: t.makeOptional(t.matchesArray(o)),
      active: t.makeOptional(o)
    }), d = h.items, c = h.active;
    if (d && c) {
      var v = t.matchesObject({
        active: t.composeSchemas(o, function(m) {
          return d.find(function(g) {
            return g.id === m.id;
          }) ? void 0 : l(m);
        })
      });
      return t.composeSchemas(p, v);
    }
    return p;
  }
  function u(h) {
    var p = t.matchesObject({
      items: t.makeOptional(t.matchesArray(a.linkActionSchema)),
      active: t.makeOptional(t.matchesString())
    }), d = h.items, c = h.active;
    if (d && c) {
      var v = t.matchesObject({
        active: t.composeSchemas(t.matchesString(), function(m) {
          return d.find(function(g) {
            return g.id === m;
          }) ? void 0 : l(m);
        })
      });
      return t.composeSchemas(p, v);
    }
    return p;
  }
  function f(h) {
    var p = t.validate(h, y(h));
    return p;
  }
  jt.validateProps = f;
  function s(h) {
    var p = e.Action;
    return i.findMatchInEnum(n.Action, h.type) && (p = n.Action), t.validate(h, r.createActionValidator(p, u(h.payload), !0, !1));
  }
  return jt.validateAction = s, jt;
}
var Ri = {}, wn = {}, In = {}, Lu;
function Oy() {
  return Lu || (Lu = 1, Object.defineProperty(In, "__esModule", { value: !0 }), In.INTERNAL_PROTOCOL = void 0, In.INTERNAL_PROTOCOL = "shopify:"), In;
}
var Uu;
function Py() {
  if (Uu)
    return wn;
  Uu = 1, Object.defineProperty(wn, "__esModule", { value: !0 }), wn.isSafe = void 0;
  var e = Oy(), n = /\/\/\//, t = /[/\\][/\\]/, r = ["https:", "http:"], i = "http://test.com";
  function a(y, u) {
    var f = u === void 0 ? {} : u, s = f.allowedDomains, h = s === void 0 ? [] : s, p = f.subdomains, d = p === void 0 ? [] : p, c = f.matchPath, v = f.requireAbsolute, m = f.requireSSL, g = f.allowInternalProtocol;
    if (n.test(y))
      return !1;
    if (y.startsWith("/"))
      return h.length > 0 || d.length > 0 || v || m ? !1 : c ? l(new URL(y, i), y, c) : !t.test(y);
    var O;
    try {
      O = new URL(y);
    } catch {
      return !1;
    }
    return g && O.protocol === e.INTERNAL_PROTOCOL ? !0 : !(!r.includes(O.protocol) || m && O.protocol !== "https:" || O.username || O.password || c && !l(O, y, c) || !o(O, h, d));
  }
  wn.isSafe = a;
  function o(y, u, f) {
    if (!f.every(function(h) {
      return h.startsWith(".");
    }))
      throw new TypeError("Subdomains must begin with .");
    var s = y.hostname;
    return u.length === 0 && f.length === 0 || u.includes(s) || f.some(function(h) {
      return s.endsWith(h);
    });
  }
  function l(y, u, f) {
    var s = y.pathname, h = u.replace(y.origin, "").split("?")[0];
    return typeof f == "string" ? s === f && h === f : f.test(s) && f.test(h);
  }
  return wn;
}
var Fu;
function Ay() {
  return Fu || (Fu = 1, function(e) {
    var n = b && b.__assign || function() {
      return n = Object.assign || function(p) {
        for (var d, c = 1, v = arguments.length; c < v; c++) {
          d = arguments[c];
          for (var m in d)
            Object.prototype.hasOwnProperty.call(d, m) && (p[m] = d[m]);
        }
        return p;
      }, n.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var t = Ue(), r = Je(), i = Gn;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return i.Action;
    } });
    var a = _t, o = Py(), l = Xr();
    function y(p, d) {
      var c;
      try {
        c = new URL(d).hostname;
      } catch {
        return [
          {
            error: "invalid_app_origin",
            value: d,
            message: "Provided value for app origin: `" + d + "` is invalid"
          }
        ];
      }
      var v = o.isSafe(p, {
        requireAbsolute: !0,
        requireSSL: !0,
        allowInternalProtocol: !0,
        allowedDomains: [c]
      });
      if (!v)
        return [
          {
            error: "not_matching_app_origin",
            value: p,
            message: "Provided URL origin does not match app origin `" + c + "`"
          }
        ];
    }
    function u() {
      return function(p) {
        var d = [i.Size.Small, i.Size.Medium, i.Size.Large];
        if (!d.includes(p)) {
          var c = "expected:" + d.map(function(v) {
            return "`" + v + "`";
          }).join(" or ");
          return p === i.Size.Full && (c += ". Size `" + p + "` is deprecated as of version 1.6.5 and will fall back to size `medium`"), p === i.Size.Auto && (c += ". Size `" + p + "` is deprecated as of version 1.12.x and will fall back to size `medium`. Use the `setUpModalAutoSizing` utility from `app-bridge` instead"), [
            {
              error: "invalid_enum_value",
              value: p,
              message: c
            }
          ];
        }
      };
    }
    function f(p, d) {
      p === void 0 && (p = {});
      var c = t.matchesObject({
        title: t.makeOptional(t.matchesString()),
        footer: t.makeOptional(t.matchesObject({
          buttons: t.matchesObject({
            primary: t.makeOptional(l.buttonSchemaWithId),
            secondary: t.makeOptional(t.matchesArray(l.buttonSchemaWithId))
          })
        })),
        size: t.makeOptional(u())
      });
      if (i.isIframeModal(p)) {
        if (p.url) {
          var v = t.matchesObject({
            url: t.composeSchemas(t.matchesString(), function(m) {
              return d ? y(m, d) : void 0;
            })
          });
          return t.composeSchemas(c, v);
        }
        return t.composeSchemas(c, r.relativePathSchema);
      }
      return t.composeSchemas(c, t.matchesObject({ message: t.matchesString() }));
    }
    function s(p, d) {
      return t.validate(p, f(p, d));
    }
    e.validateProps = s;
    function h(p, d) {
      var c = f(p.payload, d);
      switch (p.type) {
        case i.Action.OPEN:
        case i.Action.UPDATE:
          return t.validate(p, r.createActionValidator(i.Action, c, !0, p.type === i.Action.UPDATE));
        case i.Action.FOOTER_BUTTON_CLICK:
          return l.validateAction(n(n({}, p), { type: a.Action.CLICK }));
        case i.Action.FOOTER_BUTTON_UPDATE:
          return l.validateAction(n(n({}, p), { type: a.Action.UPDATE }));
        case i.Action.CLOSE:
        default:
          return t.validate(p, r.createActionValidator(i.Action));
      }
    }
    e.validateAction = h;
  }(Ri)), Ri;
}
var mt = {}, Vu;
function Sy() {
  if (Vu)
    return mt;
  Vu = 1;
  var e = b && b.__assign || function() {
    return e = Object.assign || function(s) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var c in h)
          Object.prototype.hasOwnProperty.call(h, c) && (s[c] = h[c]);
      }
      return s;
    }, e.apply(this, arguments);
  }, n = b && b.__createBinding || (Object.create ? function(s, h, p, d) {
    d === void 0 && (d = p), Object.defineProperty(s, d, { enumerable: !0, get: function() {
      return h[p];
    } });
  } : function(s, h, p, d) {
    d === void 0 && (d = p), s[d] = h[p];
  }), t = b && b.__setModuleDefault || (Object.create ? function(s, h) {
    Object.defineProperty(s, "default", { enumerable: !0, value: h });
  } : function(s, h) {
    s.default = h;
  }), r = b && b.__importStar || function(s) {
    if (s && s.__esModule)
      return s;
    var h = {};
    if (s != null)
      for (var p in s)
        p !== "default" && Object.prototype.hasOwnProperty.call(s, p) && n(h, s, p);
    return t(h, s), h;
  };
  Object.defineProperty(mt, "__esModule", { value: !0 }), mt.validateAction = mt.getSectionSchema = mt.matchesAbsolutePath = void 0;
  var i = r(jr), a = r($n), o = Ue(), l = Je();
  function y(s) {
    return s.match("^https?://") ? void 0 : [
      {
        value: s,
        error: "invalid_absolute_url",
        message: "expected string to start with `https://` or `http://`"
      }
    ];
  }
  mt.matchesAbsolutePath = y;
  function u(s) {
    var h = s && s.section && s.section.resource && s.section.name === a.ResourceType.Product, p = {
      create: o.makeOptional(o.matchesBoolean()),
      id: o.makeOptional(o.matchesString())
    }, d = e(e({}, p), { variant: o.makeOptional(o.matchesObject(p)) });
    return o.matchesObject({
      section: o.matchesObject({
        name: o.matchesEnum(a.ResourceType),
        resource: o.makeOptional(o.matchesObject(h ? d : p))
      })
    });
  }
  mt.getSectionSchema = u;
  function f(s) {
    var h = o.matchesObject({ newContext: o.makeOptional(o.matchesBoolean()) }), p = a.Action, d;
    switch (s.type) {
      case i.Action.PUSH:
      case i.Action.REPLACE:
        p = i.Action, d = l.relativePathSchema;
        break;
      case a.Action.APP:
        d = l.relativePathSchema;
        break;
      case a.Action.REMOTE:
        d = o.composeSchemas(o.matchesObject({
          url: o.composeSchemas(o.matchesString(), function(c) {
            return y(c);
          })
        }), h);
        break;
      case a.Action.ADMIN_PATH:
        d = o.composeSchemas(l.relativePathSchema, h);
        break;
      case a.Action.ADMIN_SECTION:
        d = o.composeSchemas(u(s.payload), h);
        break;
    }
    return o.validate(s, l.createActionValidator(p, d));
  }
  return mt.validateAction = f, mt;
}
var Ni = {}, Gu;
function Ey() {
  return Gu || (Gu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var n = Mr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ue(), r = Je(), i = t.matchesArray(t.matchesObject({
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
    }), l = t.matchesObject({
      selection: i
    });
    function y(f) {
      return t.validate(f, a);
    }
    e.validateProps = y;
    function u(f) {
      switch (f.type) {
        case n.Action.UPDATE:
        case n.Action.OPEN:
          return t.validate(f, r.createActionValidator(n.Action, o, !1, !0));
        case n.Action.SELECT:
          return t.validate(f, r.createActionValidator(n.Action, l, !0, !0));
        case n.Action.CANCEL:
        case n.Action.CLOSE:
        default:
          return t.validate(f, r.createActionValidator(n.Action));
      }
    }
    e.validateAction = u;
  }(Ni)), Ni;
}
var Di = {}, $u;
function Ty() {
  return $u || ($u = 1, function(e) {
    var n = b && b.__assign || function() {
      return n = Object.assign || function(h) {
        for (var p, d = 1, c = arguments.length; d < c; d++) {
          p = arguments[d];
          for (var v in p)
            Object.prototype.hasOwnProperty.call(p, v) && (h[v] = p[v]);
        }
        return h;
      }, n.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.titleBarSchema = void 0;
    var t = Rr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = _t, i = Ut, a = Ue(), o = Je(), l = Xr(), y = Ds(), u = a.composeSchemas(l.buttonSchema, a.matchesObject({
      id: a.matchesString()
    }));
    e.titleBarSchema = a.matchesObject({
      breadcrumbs: a.makeOptional(l.buttonSchema),
      title: a.makeOptional(a.matchesString()),
      buttons: a.makeOptional(a.matchesObject({
        primary: a.makeOptional(u),
        secondary: a.makeOptional(a.matchesArray(a.composeSchemas(u, a.matchesObject({
          buttons: a.makeOptional(a.matchesArray(u))
        }))))
      }))
    });
    function f(h) {
      return a.validate(h, e.titleBarSchema);
    }
    e.validateProps = f;
    function s(h) {
      switch (h.type) {
        default:
        case t.Action.UPDATE:
          return a.validate(h, o.createActionValidator(t.Action, e.titleBarSchema, !0, !1));
        case t.Action.BUTTON_CLICK:
        case t.Action.BREADCRUMBS_CLICK:
          return l.validateAction(n(n({}, h), { type: r.Action.CLICK }));
        case t.Action.BUTTON_UPDATE:
        case t.Action.BREADCRUMBS_UPDATE:
          return l.validateAction(n(n({}, h), { type: r.Action.UPDATE }));
        case t.Action.BUTTON_GROUP_UPDATE:
          return y.validateAction(n(n({}, h), { type: i.Action.UPDATE }));
      }
    }
    e.validateAction = s;
  }(Di)), Di;
}
var ki = {}, qu;
function wy() {
  return qu || (qu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateProps = e.validateAction = e.toastSchema = void 0;
    var n = Vn;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ue(), r = Je();
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
  }(ki)), ki;
}
var Bi = {}, Wu;
function Iy() {
  return Wu || (Wu = 1, function(e) {
    var n = b && b.__assign || function() {
      return n = Object.assign || function(m) {
        for (var g, O = 1, _ = arguments.length; O < _; O++) {
          g = arguments[O];
          for (var T in g)
            Object.prototype.hasOwnProperty.call(g, T) && (m[T] = g[T]);
        }
        return m;
      }, n.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var t = kr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = Ue(), i = Je(), a = r.matchesObject({
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
    }), l = {
      accessibilityLabel: r.makeOptional(r.matchesString()),
      badges: r.makeOptional(r.matchesArray(a)),
      disabled: r.makeOptional(r.matchesBoolean()),
      id: r.matchesString(),
      loading: r.makeOptional(r.matchesBoolean()),
      media: r.makeOptional(o),
      name: r.makeOptional(r.matchesString()),
      caption: r.makeOptional(r.matchesString()),
      selectable: r.makeOptional(r.matchesBoolean())
    }, y = r.matchesObject(n({}, l)), u = r.matchesArray(r.matchesObject(n(n({}, l), { options: r.makeOptional(r.matchesArray(y)) }))), f = r.matchesObject({
      plural: r.matchesString(),
      singular: r.matchesString()
    }), s = r.matchesObject({
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
      selectedItems: r.makeOptional(r.matchesArray(r.matchesObject(l))),
      title: r.makeOptional(r.matchesString()),
      verticalAlignment: r.makeOptional(r.matchesEnum(t.ALL_RESOURCE_VERTICAL_ALIGNMENT)),
      allowEmptySelection: r.makeOptional(r.matchesBoolean()),
      resourceName: r.makeOptional(f)
    }), h = r.matchesObject({
      options: r.makeOptional(u)
    }), p = r.matchesObject({
      selectedItems: u
    }), d = r.matchesObject({
      searchQuery: r.makeOptional(r.matchesString())
    });
    function c(m) {
      return r.validate(m, s);
    }
    e.validateProps = c;
    function v(m) {
      switch (m.type) {
        case t.Action.UPDATE:
        case t.Action.OPEN:
          return r.validate(m, i.createActionValidator(t.Action, h, !1, !0));
        case t.Action.SELECT:
          return r.validate(m, i.createActionValidator(t.Action, p, !0, !0));
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
  }(Bi)), Bi;
}
var Hu;
function Cy() {
  if (Hu)
    return ce;
  Hu = 1;
  var e = b && b.__createBinding || (Object.create ? function(v, m, g, O) {
    O === void 0 && (O = g), Object.defineProperty(v, O, { enumerable: !0, get: function() {
      return m[g];
    } });
  } : function(v, m, g, O) {
    O === void 0 && (O = g), v[O] = m[g];
  }), n = b && b.__setModuleDefault || (Object.create ? function(v, m) {
    Object.defineProperty(v, "default", { enumerable: !0, value: m });
  } : function(v, m) {
    v.default = m;
  }), t = b && b.__importStar || function(v) {
    if (v && v.__esModule)
      return v;
    var m = {};
    if (v != null)
      for (var g in v)
        g !== "default" && Object.prototype.hasOwnProperty.call(v, g) && e(m, v, g);
    return n(m, v), m;
  };
  Object.defineProperty(ce, "__esModule", { value: !0 }), ce.unstable_Picker = ce.Toast = ce.TitleBar = ce.ResourcePicker = ce.Navigation = ce.Modal = ce.Menu = ce.Link = ce.LeaveConfirmation = ce.FeedbackModal = ce.ContextualSaveBar = ce.ButtonGroup = ce.Button = void 0;
  var r = t(Xr());
  ce.Button = r;
  var i = t(Ds());
  ce.ButtonGroup = i;
  var a = t(my());
  ce.ContextualSaveBar = a;
  var o = t(gy());
  ce.FeedbackModal = o;
  var l = t(by());
  ce.LeaveConfirmation = l;
  var y = t(ks());
  ce.Link = y;
  var u = t(_y());
  ce.Menu = u;
  var f = t(Ay());
  ce.Modal = f;
  var s = t(Sy());
  ce.Navigation = s;
  var h = t(Ey());
  ce.ResourcePicker = h;
  var p = t(Ty());
  ce.TitleBar = p;
  var d = t(wy());
  ce.Toast = d;
  var c = t(Iy());
  return ce.unstable_Picker = c, ce;
}
var Li = {}, Ui = {}, zu;
function On() {
  return zu || (zu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.matchesPositiveNumber = e.TYPE_ERROR = e.oneOf = e.matchesArray = e.validate = e.matchesPositiveInteger = e.matchesBoolean = e.makeOptional = e.matchesString = e.matchesObject = e.matchesEnum = e.composeSchemas = void 0;
    var n = Ue();
    Object.defineProperty(e, "TYPE_ERROR", { enumerable: !0, get: function() {
      return n.TYPE_ERROR;
    } });
    var t = Ue();
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
    function r(a, o, l) {
      return l === void 0 && (l = { message: void 0 }), [
        {
          value: a,
          error: o,
          message: typeof l.message == "function" ? l.message(o, a) : l.message
        }
      ];
    }
    function i(a) {
      return function(o) {
        return Number.isNaN(o) || !Number.isFinite(o) || o < 0 ? r(o, n.TYPE_ERROR + "_number", a) : void 0;
      };
    }
    e.matchesPositiveNumber = i;
  }(Ui)), Ui;
}
var Fi = {}, Ku;
function $t() {
  return Ku || (Ku = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mixedAppClientCheck = e.actionMessage = e.relativePathSchema = e.relativeUrlSchema = e.isValidRelativePath = e.createActionValidator = void 0;
    var n = Je();
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
        var o = a.path, l = a.error, y = a.message, u = a.value, f = typeof u == "object" ? JSON.stringify(u) : u;
        return "`" + l + "` thrown for" + (o ? " path: " + o + " and" : "") + " value: `" + f + "`" + (y ? " with message: " + y : "");
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
  }(Fi)), Fi;
}
var Qu;
function jy() {
  return Qu || (Qu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = Va;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = On(), r = $t(), i = t.matchesObject({
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
    }), l = t.matchesObject({
      discountCode: t.matchesString()
    }), y = t.matchesObject({
      price: t.makeOptional(t.matchesPositiveNumber()),
      quantity: t.makeOptional(t.matchesPositiveInteger()),
      title: t.makeOptional(t.matchesString()),
      variantId: t.makeOptional(t.matchesPositiveInteger()),
      discount: t.makeOptional(o)
    }), u = t.matchesObject({
      quantity: t.matchesPositiveInteger()
    }), f = t.matchesObject({
      id: t.makeOptional(t.matchesPositiveInteger()),
      email: t.makeOptional(t.matchesString()),
      firstName: t.makeOptional(t.matchesString()),
      lastName: t.makeOptional(t.matchesString()),
      note: t.makeOptional(t.matchesString()),
      addresses: t.makeOptional(t.matchesArray(i))
    }), s = t.matchesObject({
      name: t.matchesString(),
      value: t.matchesString()
    }), h = t.matchesObject({
      cartDiscount: t.makeOptional(a),
      customer: t.makeOptional(f),
      grandTotal: t.makeOptional(t.matchesString()),
      lineItems: t.makeOptional(t.matchesArray(y)),
      noteAttributes: t.makeOptional(t.matchesArray(s)),
      subTotal: t.makeOptional(t.matchesString()),
      taxTotal: t.makeOptional(t.matchesString())
    }), p = t.composeSchemas(t.matchesObject({}), function(O) {
      var _ = t.matchesString(), T = Object.keys(O).reduce(function(A, E) {
        return A[E] = _, A;
      }, {});
      return t.validate(O, t.matchesObject(T));
    }), d = t.matchesArray(t.matchesString());
    function c(O) {
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
      return O.amount ? o : l;
    }
    function g(O) {
      switch (O.type) {
        case n.Action.UPDATE:
          return t.validate(O, c(h));
        case n.Action.SET_CUSTOMER:
          return t.validate(O, c(f));
        case n.Action.ADD_CUSTOMER_ADDRESS:
          return t.validate(O, c(i));
        case n.Action.UPDATE_CUSTOMER_ADDRESS:
          return t.validate(O, v(i));
        case n.Action.SET_DISCOUNT:
          return t.validate(O, c(m(O.payload.data)));
        case n.Action.SET_PROPERTIES:
          return t.validate(O, c(p));
        case n.Action.REMOVE_PROPERTIES:
          return t.validate(O, c(d));
        case n.Action.ADD_LINE_ITEM:
          return t.validate(O, c(y));
        case n.Action.UPDATE_LINE_ITEM:
          return t.validate(O, v(u));
        case n.Action.REMOVE_LINE_ITEM:
          return t.validate(O, v());
        case n.Action.SET_LINE_ITEM_DISCOUNT:
          return t.validate(O, v(o));
        case n.Action.REMOVE_LINE_ITEM_DISCOUNT:
          return t.validate(O, v());
        case n.Action.SET_LINE_ITEM_PROPERTIES:
          return t.validate(O, v(p));
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
    e.validateAction = g;
  }(Li)), Li;
}
var Vi = {}, Yu;
function My() {
  return Yu || (Yu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = Ka;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = On(), r = $t();
    function i(a) {
      var o = r.createActionValidator(n.Action);
      return t.validate(a, o);
    }
    e.validateAction = i;
  }(Vi)), Vi;
}
var Gi = {}, Ju;
function Ry() {
  return Ju || (Ju = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = Qa;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = On(), r = $t();
    function i(a) {
      var o = r.createActionValidator(n.Action);
      return t.validate(a, o);
    }
    e.validateAction = i;
  }(Gi)), Gi;
}
var $i = {}, Xu;
function Ny() {
  return Xu || (Xu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = Yr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = On(), r = $t();
    function i(a) {
      return t.validate(a, r.createActionValidator(n.Action));
    }
    e.validateAction = i;
  }($i)), $i;
}
var qi = {}, Zu;
function Dy() {
  return Zu || (Zu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = Ja;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = On(), r = $t();
    function i(a) {
      return t.validate(a, r.createActionValidator(n.Action));
    }
    e.validateAction = i;
  }(qi)), qi;
}
var xu;
function ky() {
  return xu || (xu = 1, function(e) {
    var n = b && b.__createBinding || (Object.create ? function(f, s, h, p) {
      p === void 0 && (p = h), Object.defineProperty(f, p, { enumerable: !0, get: function() {
        return s[h];
      } });
    } : function(f, s, h, p) {
      p === void 0 && (p = h), f[p] = s[h];
    }), t = b && b.__setModuleDefault || (Object.create ? function(f, s) {
      Object.defineProperty(f, "default", { enumerable: !0, value: s });
    } : function(f, s) {
      f.default = s;
    }), r = b && b.__importStar || function(f) {
      if (f && f.__esModule)
        return f;
      var s = {};
      if (f != null)
        for (var h in f)
          h !== "default" && Object.prototype.hasOwnProperty.call(f, h) && n(s, f, h);
      return t(s, f), s;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.unstable_Picker = e.Toast = e.TitleBar = e.Scanner = e.ResourcePicker = e.Print = e.Navigation = e.Modal = e.Menu = e.Loading = e.Link = e.LeaveConfirmation = e.Fullscreen = e.FeedbackModal = e.ContextualSaveBar = e.Cart = e.ButtonGroup = e.Button = void 0;
    var i = Cy();
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
    var a = r(jy());
    e.Cart = a;
    var o = r(My());
    e.Fullscreen = o;
    var l = r(Ry());
    e.Loading = l;
    var y = r(Ny());
    e.Print = y;
    var u = r(Dy());
    e.Scanner = u;
  }(Ai)), Ai;
}
var ec;
function By() {
  return ec || (ec = 1, function(e) {
    var n = b && b.__spreadArray || function(c, v) {
      for (var m = 0, g = v.length, O = c.length; m < g; m++, O++)
        c[O] = v[m];
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validatorMiddleware = e.connectValidatorToDispatchHook = e.connectValidatorToUpdateHook = void 0;
    var t = qn(), r = Tt, i = Gt, a = Et, o = ky(), l = On(), y = $t();
    function u(c, v, m) {
      switch (v) {
        case r.Group.Button:
          return o.Button.validateProps(m);
        case r.Group.ButtonGroup:
          return o.ButtonGroup.validateProps(m);
        case r.Group.Modal:
          return o.Modal.validateProps(m, c);
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
    function f(c, v) {
      switch (c.group) {
        case r.Group.Button:
          return o.Button.validateAction(c);
        case r.Group.ButtonGroup:
          return o.ButtonGroup.validateAction(c);
        case r.Group.Modal:
          return o.Modal.validateAction(c, v);
        case r.Group.Menu:
          return o.Menu.validateAction(c);
        case r.Group.TitleBar:
          return o.TitleBar.validateAction(c);
        case r.Group.ResourcePicker:
          return o.ResourcePicker.validateAction(c);
        case r.Group.Loading:
          return o.Loading.validateAction(c);
        case r.Group.Toast:
          return o.Toast.validateAction(c);
        case r.Group.Cart:
          return o.Cart.validateAction(c);
        case r.Group.Navigation:
          return o.Navigation.validateAction(c);
        case r.Group.Print:
          return o.Print.validateAction(c);
        case r.Group.Scanner:
          return o.Scanner.validateAction(c);
        case r.Group.Fullscreen:
          return o.Fullscreen.validateAction(c);
        case r.Group.ContextualSaveBar:
          return o.ContextualSaveBar.validateAction(c);
        case r.Group.Link:
          return o.Link.validateAction(c);
        case r.Group.unstable_Picker:
          return o.unstable_Picker.validateAction(c);
      }
    }
    function s(c, v) {
      var m = l.validate(c, l.matchesObject({
        group: l.matchesEnum(r.Group, {
          message: function(O, _) {
            return "Unknown or unsupported action group `" + _ + "`";
          }
        }),
        version: l.matchesString()
      }));
      if (m)
        return i.invalidAction(c, y.actionMessage(m));
      var g = f(c, v);
      return g ? i.invalidPayload(c, y.actionMessage(g)) : c;
    }
    var h = function(c) {
      return function(v) {
        for (var m = [], g = 1; g < arguments.length; g++)
          m[g - 1] = arguments[g];
        var O = a.getMergedProps(this.options, v), _ = u(this.app.localOrigin, this.defaultGroup, O);
        if (_)
          throw i.fromAction(y.actionMessage(_), i.Action.INVALID_OPTIONS);
        return c.apply(void 0, n([v], m));
      };
    };
    e.connectValidatorToUpdateHook = h;
    var p = function(c) {
      return function(v) {
        var m = s(v, this.localOrigin);
        return c(m);
      };
    };
    e.connectValidatorToDispatchHook = p;
    var d = function(c) {
      c.set(t.LifecycleHook.UpdateAction, e.connectValidatorToUpdateHook), c.set(t.LifecycleHook.DispatchAction, e.connectValidatorToDispatchHook);
    };
    e.validatorMiddleware = d;
  }(Pi)), Pi;
}
var tc;
function Ly() {
  if (tc)
    return fr;
  tc = 1, Object.defineProperty(fr, "__esModule", { value: !0 });
  var e = By();
  return fr.default = e.validatorMiddleware, fr;
}
var nc;
function Uy() {
  return nc || (nc = 1, function(e) {
    var n = b && b.__createBinding || (Object.create ? function(f, s, h, p) {
      p === void 0 && (p = h), Object.defineProperty(f, p, { enumerable: !0, get: function() {
        return s[h];
      } });
    } : function(f, s, h, p) {
      p === void 0 && (p = h), f[p] = s[h];
    }), t = b && b.__exportStar || function(f, s) {
      for (var h in f)
        h !== "default" && !Object.prototype.hasOwnProperty.call(s, h) && n(s, f, h);
    }, r = b && b.__importDefault || function(f) {
      return f && f.__esModule ? f : { default: f };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createApp = void 0;
    var i = r(Ly()), a = $t(), o = vo(), l = qn(), y = Rs();
    function u(f) {
      var s = o.getWindow();
      return !s || !s.top ? y.serverAppBridge : (a.mixedAppClientCheck(s), l.createAppWrapper(s.top, s.location.origin, [i.default])(f));
    }
    e.createApp = u, e.default = u, t(_n, e), t(qn(), e);
  }(Oi)), Oi;
}
process.env.NODE_ENV === "production" ? ga.exports = vy() : ga.exports = Uy();
var Fy = ga.exports, mo = {}, go = {}, Jn = {};
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.handleRouteChange = void 0;
var Vy = ht;
function Gy(e, n) {
  return e.subscribe(Vy.Redirect.Action.APP, function(t) {
    var r = t.path;
    n.replace(r);
  });
}
Jn.handleRouteChange = Gy;
var $y = b && b.__extends || function() {
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
}(), qy = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(go, "__esModule", { value: !0 });
var Wy = qy(te), Hy = st, zy = Jn, Ky = (
  /** @class */
  function(e) {
    $y(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.props.history;
      this.unsubscribe = zy.handleRouteChange(this.context, t);
    }, n.prototype.componentWillUnmount = function() {
      this.unsubscribe && this.unsubscribe();
    }, n.prototype.render = function() {
      return null;
    }, n.contextType = Hy.AppBridgeContext, n;
  }(Wy.default.Component)
);
go.default = Ky;
var bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
var Qy = te, Yy = Re, Jy = Jn;
function Xy(e) {
  var n = Yy.useAppBridge();
  Qy.useEffect(function() {
    return Jy.handleRouteChange(n, e);
  }, [n, e]);
}
bo.default = Xy;
(function(e) {
  var n = b && b.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useClientRouting = e.ClientRouter = void 0;
  var t = go;
  Object.defineProperty(e, "ClientRouter", { enumerable: !0, get: function() {
    return n(t).default;
  } });
  var r = bo;
  Object.defineProperty(e, "useClientRouting", { enumerable: !0, get: function() {
    return n(r).default;
  } });
})(mo);
var _o = {}, Oo = {}, Xn = {}, At = {};
Object.defineProperty(At, "__esModule", { value: !0 });
At.getOrigin = At.getTopWindow = At.getSelfWindow = void 0;
function Zy() {
  return window.self;
}
At.getSelfWindow = Zy;
function xy() {
  return window.top;
}
At.getTopWindow = xy;
function ev() {
  return location.origin;
}
At.getOrigin = ev;
var tv = b && b.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function l(f) {
      try {
        u(r.next(f));
      } catch (s) {
        o(s);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (s) {
        o(s);
      }
    }
    function u(f) {
      f.done ? a(f.value) : i(f.value).then(l, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, nv = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function l(u) {
    return function(f) {
      return y([u, f]);
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
      } catch (f) {
        u = [6, f], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Xn, "__esModule", { value: !0 });
Xn.updateHistory = void 0;
var rv = _n, rc = ht, ba = At, iv = [
  "hmac",
  "locale",
  "protocol",
  "session",
  "shop",
  "timestamp",
  "host"
];
function av(e, n) {
  return tv(this, void 0, void 0, function() {
    var t, r, i, a, o, l, y, u, f;
    return nv(this, function(s) {
      switch (s.label) {
        case 0:
          return t = ba.getSelfWindow(), r = ba.getTopWindow(), i = t === r, [4, e.getState("context").then(function(h) {
            return h === rv.Context.Main;
          })];
        case 1:
          return a = s.sent(), i || !a ? [
            2
            /*return*/
          ] : (o = ov(n), iv.forEach(function(h) {
            return o.searchParams.delete(h);
          }), l = o.pathname, y = o.search, u = o.hash, f = "" + l + y + u, rc.History.create(e).dispatch(rc.History.Action.REPLACE, f), [
            2
            /*return*/
          ]);
      }
    });
  });
}
Xn.updateHistory = av;
function ov(e) {
  var n = ba.getOrigin();
  if (typeof e == "string")
    return new URL(e, n);
  var t = e.pathname, r = e.search, i = e.hash;
  return new URL("" + t + r + i, n);
}
var uv = b && b.__extends || function() {
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
}(), cv = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Oo, "__esModule", { value: !0 });
var sv = cv(te), lv = st, ic = Xn, dv = (
  /** @class */
  function(e) {
    uv(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.props.location;
      ic.updateHistory(this.context, t);
    }, n.prototype.componentDidUpdate = function(t) {
      var r = t.location, i = this.props.location;
      i !== r && ic.updateHistory(this.context, i);
    }, n.prototype.render = function() {
      return null;
    }, n.contextType = lv.AppBridgeContext, n;
  }(sv.default.Component)
);
Oo.default = dv;
var Po = {};
Object.defineProperty(Po, "__esModule", { value: !0 });
var fv = te, pv = Re, hv = Xn;
function yv(e) {
  var n = pv.useAppBridge();
  fv.useEffect(function() {
    hv.updateHistory(n, e);
  }, [n, e]);
}
Po.default = yv;
(function(e) {
  var n = b && b.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useRoutePropagation = e.RoutePropagator = void 0;
  var t = Oo;
  Object.defineProperty(e, "RoutePropagator", { enumerable: !0, get: function() {
    return n(t).default;
  } });
  var r = Po;
  Object.defineProperty(e, "useRoutePropagation", { enumerable: !0, get: function() {
    return n(r).default;
  } });
})(_o);
const vv = "@shopify/app-bridge-react", mv = "3.0.0", gv = "index.d.ts", bv = "index.js", _v = "umd/index.js", Ov = "umd/index.js", Pv = [
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
], Av = {
  access: "public",
  "@shopify:registry": "https://registry.npmjs.org"
}, Sv = "git@github.com:Shopify/app-bridge.git", Ev = "https://shopify.dev/tools/app-bridge/react-components", Tv = "Shopify Inc.", wv = "MIT", Iv = {
  build: "yarn build:tsc && yarn build:umd",
  "build:tsc": "NODE_ENV=production tsc",
  "build:umd": "NODE_ENV=production webpack -p",
  check: "tsc",
  clean: `cat package.json | node -pe "JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).files.map(f => './'+f).join(' ')" | xargs rm -rf`,
  pack: "yarn pack",
  size: "size-limit"
}, Cv = !1, jv = {
  "@shopify/app-bridge": "^3.0.0"
}, Mv = {
  "@types/react": "^17.0.38",
  enzyme: "3.11.0",
  "react-dom": "^17.0.2"
}, Rv = {
  react: "^16.0.0 || ^17.0.0 || ^18.0.0"
}, Nv = "7102c192814e6f3cf55daf81324b54a960ebe701", Dv = {
  name: vv,
  version: mv,
  types: gv,
  main: bv,
  unpkg: _v,
  jsdelivr: Ov,
  files: Pv,
  private: !1,
  publishConfig: Av,
  repository: Sv,
  homepage: Ev,
  author: Tv,
  license: wv,
  scripts: Iv,
  sideEffects: Cv,
  "size-limit": [
    {
      limit: "30 KB",
      path: "index.js"
    }
  ],
  dependencies: jv,
  devDependencies: Mv,
  peerDependencies: Rv,
  gitHead: Nv
};
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(p, d, c, v) {
    v === void 0 && (v = c), Object.defineProperty(p, v, { enumerable: !0, get: function() {
      return d[c];
    } });
  } : function(p, d, c, v) {
    v === void 0 && (v = c), p[v] = d[c];
  }), t = b && b.__setModuleDefault || (Object.create ? function(p, d) {
    Object.defineProperty(p, "default", { enumerable: !0, value: d });
  } : function(p, d) {
    p.default = d;
  }), r = b && b.__importStar || function(p) {
    if (p && p.__esModule)
      return p;
    var d = {};
    if (p != null)
      for (var c in p)
        c !== "default" && Object.prototype.hasOwnProperty.call(p, c) && n(d, p, c);
    return t(d, p), d;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.setClientInterfaceHook = void 0;
  var i = r(te), a = r(Fy), o = st, l = mo, y = _o, u = Dv;
  function f(p) {
    var d = p.config, c = p.router, v = p.children, m = i.useMemo(function() {
      return a.default(d);
    }, [JSON.stringify(d)]);
    i.useEffect(function() {
      m != null && m.hooks && m.hooks.set(a.LifecycleHook.DispatchAction, e.setClientInterfaceHook);
    }, [m]);
    var g = c != null && c.history && (c != null && c.location) ? i.default.createElement(h, { history: c.history, location: c.location }) : null;
    return i.default.createElement(
      o.AppBridgeContext.Provider,
      { value: m },
      g,
      v
    );
  }
  var s = function(p) {
    return function(d) {
      return d.clientInterface = {
        name: "@shopify/app-bridge-react",
        version: u.version
      }, p(d);
    };
  };
  e.setClientInterfaceHook = s;
  function h(p) {
    var d = p.history, c = p.location;
    return l.useClientRouting(d), y.useRoutePropagation(c), null;
  }
  e.default = f;
})(js);
var kv = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(yo, "__esModule", { value: !0 });
var Bv = kv(js);
yo.default = Bv.default;
var Ao = {}, Bs = {};
(function(e) {
  var n = b && b.__assign || function() {
    return n = Object.assign || function(l) {
      for (var y, u = 1, f = arguments.length; u < f; u++) {
        y = arguments[u];
        for (var s in y)
          Object.prototype.hasOwnProperty.call(y, s) && (l[s] = y[s]);
      }
      return l;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ResourceType = e.ActionVerb = void 0;
  var t = te, r = Ya;
  Object.defineProperty(e, "ActionVerb", { enumerable: !0, get: function() {
    return r.ActionVerb;
  } }), Object.defineProperty(e, "ResourceType", { enumerable: !0, get: function() {
    return r.ResourceType;
  } });
  var i = Re;
  function a(l) {
    var y = i.useAppBridge(), u = t.useRef(null), f = l.resourceType, s = l.onSelection, h = l.onCancel, p = l.open, d = t.useRef({ open: !1 }), c = t.useMemo(function() {
      return r.create(y, {
        resourceType: r.ResourceType[f],
        options: o(l)
      });
    }, [y]);
    return t.useEffect(function() {
      var v, m = (v = d.current) === null || v === void 0 ? void 0 : v.open;
      m !== p && (p ? c.dispatch(r.Action.OPEN) : c.dispatch(r.Action.CLOSE)), !m && p ? u.current = document.activeElement : m && !p && u.current != null && document.contains(u.current) && (u.current.focus(), u.current = null);
    }, [p]), t.useEffect(function() {
      var v = [];
      return s != null && v.push(c.subscribe(r.Action.SELECT, s)), h != null && v.push(c.subscribe(r.Action.CANCEL, h)), function() {
        for (var m = v.pop(); m; )
          m(), m = v.pop();
      };
    }, [s, h]), t.useEffect(function() {
      var v = JSON.stringify(n(n({}, d.current), { open: void 0 })) !== JSON.stringify(n(n({}, l), { open: void 0 }));
      v && (c.set(o(l)), d.current = l);
    }, [l]), null;
  }
  function o(l) {
    var y = l.initialQuery, u = l.initialSelectionIds, f = l.showHidden, s = l.allowMultiple, h = l.selectMultiple, p = l.actionVerb, d = {
      initialQuery: y,
      initialSelectionIds: u,
      showHidden: f,
      selectMultiple: h ?? s,
      actionVerb: p
    }, c = d;
    if (l.resourceType === "Product") {
      var v = l.showVariants, m = l.showDraft, g = l.showArchived, O = l.showDraftBadge, _ = l.showArchivedBadge, T = {
        showVariants: v,
        showDraft: m,
        showArchived: g,
        showDraftBadge: O,
        showArchivedBadge: _
      };
      c = n(n({}, d), T);
    }
    return c;
  }
  e.default = a;
})(Bs);
var Lv = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ao, "__esModule", { value: !0 });
var Uv = Lv(Bs);
Ao.default = Uv.default;
var So = {}, Eo = {};
Object.defineProperty(Eo, "__esModule", { value: !0 });
var Wi = te, _a = Qn, Fv = Za, Ls = Hr, Us = Ft, Vv = Re;
function Gv(e) {
  var n = e.title, t = Vv.useAppBridge(), r = Wi.useRef({ title: n }), i = Wi.useMemo(function() {
    return Fv.create(t, {});
  }, [t]);
  return Wi.useEffect(function() {
    var a, o = JSON.stringify(r.current) !== JSON.stringify(e);
    if (r.current = e, o)
      i.set(Wv(t, e));
    else {
      var l = e.primaryAction, y = e.secondaryActions, u = e.actionGroups, f = e.breadcrumbs, s = Array.isArray(f) ? f[f.length - 1] : f;
      Wn(s, i.options.breadcrumbs), Wn(l, (a = i.options.buttons) === null || a === void 0 ? void 0 : a.primary), $v(i, y), qv(i, u);
    }
    return function() {
      i.unsubscribe();
    };
  }, [i, e]), null;
}
Eo.default = Gv;
function $v(e, n) {
  var t, r, i = ((r = (t = e.options.buttons) === null || t === void 0 ? void 0 : t.secondary) === null || r === void 0 ? void 0 : r.filter(function(a) {
    return !Ls.isGroupedButton(a);
  })) || [];
  i == null || i.forEach(function(a, o) {
    return Wn(
      n == null ? void 0 : n[o],
      // This needs to be casted as the React TitleBar component doesn't accept button groups for secondary actions
      a
    );
  });
}
function qv(e, n) {
  var t, r, i = ((r = (t = e.options.buttons) === null || t === void 0 ? void 0 : t.secondary) === null || r === void 0 ? void 0 : r.filter(Ls.isGroupedButton)) || [];
  i == null || i.forEach(function(a, o) {
    var l = n == null ? void 0 : n[o];
    l && a.options.buttons.forEach(function(y, u) {
      return Wn(l.actions[u], y);
    });
  });
}
function Wv(e, n) {
  var t = n.actionGroups, r = n.breadcrumbs, i = n.primaryAction, a = n.secondaryActions, o = n.title, l = Array.isArray(r) ? r[r.length - 1] : r;
  return {
    title: o,
    buttons: Us.transformActions(e, {
      primaryAction: i,
      secondaryActions: a,
      actionGroups: t
    }),
    breadcrumbs: l ? Hv(e, l) : void 0
  };
}
function Hv(e, n, t) {
  var r = t || _a.create(e, {
    label: n.content || ""
  });
  return Wn(n, r), r;
}
function Wn(e, n) {
  if (!(!e || !n)) {
    var t = Us.generateRedirect(n.app, e.url, e.target, e.external);
    t && n.subscribe(_a.Action.CLICK, t, n), e != null && e.onAction && n.subscribe(_a.Action.CLICK, e.onAction, n);
  }
}
var zv = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(So, "__esModule", { value: !0 });
var Kv = zv(Eo);
So.default = Kv.default;
var To = {}, Fs = {};
(function(e) {
  var n = b && b.__extends || function() {
    var l = function(y, u) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, s) {
        f.__proto__ = s;
      } || function(f, s) {
        for (var h in s)
          Object.prototype.hasOwnProperty.call(s, h) && (f[h] = s[h]);
      }, l(y, u);
    };
    return function(y, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      l(y, u);
      function f() {
        this.constructor = y;
      }
      y.prototype = u === null ? Object.create(u) : (f.prototype = u.prototype, new f());
    };
  }(), t = b && b.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DEFAULT_TOAST_DURATION = void 0;
  var r = t(te), i = ht, a = st;
  e.DEFAULT_TOAST_DURATION = 5e3;
  var o = (
    /** @class */
    function(l) {
      n(y, l);
      function y() {
        return l !== null && l.apply(this, arguments) || this;
      }
      return y.prototype.componentDidMount = function() {
        var u = this.context, f = this.props, s = f.error, h = f.content, p = f.duration, d = p === void 0 ? e.DEFAULT_TOAST_DURATION : p, c = f.onDismiss;
        this.toast = i.Toast.create(u, {
          message: h,
          duration: d,
          isError: s
        }), this.toast.subscribe(i.Toast.Action.CLEAR, c), this.toast.dispatch(i.Toast.Action.SHOW);
      }, y.prototype.componentWillUnmount = function() {
        this.toast.unsubscribe();
      }, y.prototype.render = function() {
        return null;
      }, y.contextType = a.AppBridgeContext, y;
    }(r.default.PureComponent)
  );
  e.default = o;
})(Fs);
var Qv = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(To, "__esModule", { value: !0 });
var Yv = Qv(Fs);
To.default = Yv.default;
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(h, p, d, c) {
    c === void 0 && (c = d), Object.defineProperty(h, c, { enumerable: !0, get: function() {
      return p[d];
    } });
  } : function(h, p, d, c) {
    c === void 0 && (c = d), h[c] = p[d];
  }), t = b && b.__exportStar || function(h, p) {
    for (var d in h)
      d !== "default" && !Object.prototype.hasOwnProperty.call(p, d) && n(p, h, d);
  }, r = b && b.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Toast = e.TitleBar = e.ResourcePicker = e.Provider = e.NavigationMenu = e.ModalContent = e.Modal = e.Loading = e.ContextualSaveBar = void 0;
  var i = ka;
  Object.defineProperty(e, "ContextualSaveBar", { enumerable: !0, get: function() {
    return r(i).default;
  } });
  var a = ao;
  Object.defineProperty(e, "Loading", { enumerable: !0, get: function() {
    return r(a).default;
  } });
  var o = Is;
  Object.defineProperty(e, "Modal", { enumerable: !0, get: function() {
    return r(o).default;
  } }), Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return o.ModalContent;
  } });
  var l = po;
  Object.defineProperty(e, "NavigationMenu", { enumerable: !0, get: function() {
    return r(l).default;
  } });
  var y = yo;
  Object.defineProperty(e, "Provider", { enumerable: !0, get: function() {
    return r(y).default;
  } });
  var u = Ao;
  Object.defineProperty(e, "ResourcePicker", { enumerable: !0, get: function() {
    return r(u).default;
  } });
  var f = So;
  Object.defineProperty(e, "TitleBar", { enumerable: !0, get: function() {
    return r(f).default;
  } });
  var s = To;
  Object.defineProperty(e, "Toast", { enumerable: !0, get: function() {
    return r(s).default;
  } }), t(_o, e), t(mo, e);
})(Kc);
var Vs = {}, Gs = {}, Zr = {}, Jv = b && b.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function l(f) {
      try {
        u(r.next(f));
      } catch (s) {
        o(s);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (s) {
        o(s);
      }
    }
    function u(f) {
      f.done ? a(f.value) : i(f.value).then(l, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, Xv = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function l(u) {
    return function(f) {
      return y([u, f]);
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
      } catch (f) {
        u = [6, f], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Zr, "__esModule", { value: !0 });
Zr.useAppBridgeState = void 0;
var Cn = te, Zv = Re, xv = function(e) {
  var n = Zv.useAppBridge(), t = Cn.useState(), r = t[0], i = t[1], a = Cn.useRef(!1), o = Cn.useCallback(function() {
    return Jv(void 0, void 0, void 0, function() {
      var l, y;
      return Xv(this, function(u) {
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
            return l = y, a.current ? [
              2
              /*return*/
            ] : (i(function(f) {
              return JSON.stringify(l) === JSON.stringify(f) ? f : l;
            }), [
              2
              /*return*/
            ]);
        }
      });
    });
  }, [n, e]);
  return Cn.useEffect(function() {
    return o(), n.subscribe(function() {
      o();
    });
  }, [n, o]), Cn.useEffect(function() {
    return function() {
      a.current = !0;
    };
  }, [n]), r;
};
Zr.useAppBridgeState = xv;
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Zr, e);
})(Gs);
var $s = {}, xr = {}, ac = b && b.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]]);
  return t;
};
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.useContextualSaveBar = void 0;
var lt = te, Mt = eo, em = Re;
function tm() {
  var e = em.useAppBridge(), n = lt.useState(), t = n[0], r = n[1], i = lt.useState(), a = i[0], o = i[1], l = lt.useMemo(function() {
    return Mt.create(e);
  }, [e]), y = lt.useCallback(function(h) {
    l.dispatch(Mt.Action.SHOW), h && l.set(h);
  }, [l]), u = lt.useCallback(function() {
    l.dispatch(Mt.Action.HIDE);
  }, [l]), f = lt.useMemo(function() {
    return {
      setOptions: function(h) {
        var p = h.onAction, d = ac(h, ["onAction"]);
        r(function() {
          return p;
        }), Object.keys(d).length && l.set({ saveAction: d });
      }
    };
  }, [l]), s = lt.useMemo(function() {
    return {
      setOptions: function(h) {
        var p = h.onAction, d = ac(h, ["onAction"]);
        o(function() {
          return p;
        }), Object.keys(d).length && l.set({ discardAction: d });
      }
    };
  }, [l]);
  return lt.useEffect(function() {
    return l.subscribe(Mt.Action.DISCARD, function() {
      l.dispatch(Mt.Action.HIDE), a == null || a();
    });
  }, [l, a]), lt.useEffect(function() {
    return l.subscribe(Mt.Action.SAVE, function() {
      l.dispatch(Mt.Action.HIDE), t == null || t();
    });
  }, [l, t]), lt.useEffect(function() {
    l.unsubscribe();
  }, [l, t]), { show: y, hide: u, saveAction: f, discardAction: s };
}
xr.useContextualSaveBar = tm;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useContextualSaveBar = void 0;
  var n = xr;
  Object.defineProperty(e, "useContextualSaveBar", { enumerable: !0, get: function() {
    return n.useContextualSaveBar;
  } });
})($s);
var wo = {}, ei = {}, nm = b && b.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function l(f) {
      try {
        u(r.next(f));
      } catch (s) {
        o(s);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (s) {
        o(s);
      }
    }
    function u(f) {
      f.done ? a(f.value) : i(f.value).then(l, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, rm = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function l(u) {
    return function(f) {
      return y([u, f]);
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
      } catch (f) {
        u = [6, f], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(ei, "__esModule", { value: !0 });
ei.useFeaturesAvailable = void 0;
var jn = te, im = Ha, am = Re;
function om() {
  for (var e = this, n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  var r = am.useAppBridge(), i = jn.useState(), a = i[0], o = i[1], l = jn.useRef([]), y = jn.useCallback(function() {
    var u = !1;
    return function() {
      return nm(e, void 0, void 0, function() {
        var f;
        return rm(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, r.featuresAvailable.apply(r, l.current)];
            case 1:
              return f = s.sent(), u || o(function(h) {
                return JSON.stringify(h) === JSON.stringify(f) ? h : f;
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
  return jn.useEffect(function() {
    return l.current = n, y();
  }, [JSON.stringify(n)]), jn.useEffect(function() {
    var u, f = r.subscribe(im.Action.UPDATE, function() {
      u = y();
    });
    return function() {
      f(), u == null || u();
    };
  }, [r, y]), a;
}
ei.useFeaturesAvailable = om;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useFeaturesAvailable = void 0;
  var n = ei;
  Object.defineProperty(e, "useFeaturesAvailable", { enumerable: !0, get: function() {
    return n.useFeaturesAvailable;
  } });
})(wo);
var qs = {}, ti = {};
Object.defineProperty(ti, "__esModule", { value: !0 });
ti.useFeatureRequest = void 0;
var pr = te, oc = $a, um = Re, cm = wo;
function sm(e, n) {
  var t = um.useAppBridge(), r = cm.useFeaturesAvailable(), i = pr.useState(), a = i[0], o = i[1], l = pr.useCallback(function(y) {
    var u = y == null ? void 0 : y[e];
    if (n && (u != null && u[n])) {
      var f = u == null ? void 0 : u[n];
      o(function(s) {
        return JSON.stringify(f) !== JSON.stringify(s) ? f : s;
      });
      return;
    }
    o(function(s) {
      return JSON.stringify(u) !== JSON.stringify(s) ? u : s;
    });
  }, [e, n]);
  return pr.useEffect(function() {
    oc.create(t).dispatch(oc.Action.REQUEST, { feature: e, action: n });
  }, [t, e, n]), pr.useEffect(function() {
    l(r);
  }, [r, l]), a;
}
ti.useFeatureRequest = sm;
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(ti, e);
})(qs);
var Ws = {}, pn = {}, Io = {}, ni = {};
Object.defineProperty(ni, "__esModule", { value: !0 });
ni.useNavigationHistory = void 0;
var lm = te, Hi = ht, dm = Re;
function fm() {
  var e = dm.useAppBridge();
  return lm.useMemo(function() {
    var n = Hi.History.create(e);
    function t(i) {
      n.dispatch(Hi.History.Action.PUSH, i.pathname);
    }
    function r(i) {
      n.dispatch(Hi.History.Action.REPLACE, i.pathname);
    }
    return { push: t, replace: r };
  }, []);
}
ni.useNavigationHistory = fm;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useNavigationHistory = void 0;
  var n = ni;
  Object.defineProperty(e, "useNavigationHistory", { enumerable: !0, get: function() {
    return n.useNavigationHistory;
  } });
})(Io);
var hn = b && b.__assign || function() {
  return hn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, hn.apply(this, arguments);
}, pm = b && b.__createBinding || (Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return n[t];
  } });
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
}), hm = b && b.__setModuleDefault || (Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
}), ym = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var n = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && pm(n, e, t);
  return hm(n, e), n;
};
Object.defineProperty(pn, "__esModule", { value: !0 });
pn.isAdminSection = pn.useNavigate = void 0;
var zi = te, Jt = ym(Qr), vm = Re, mm = Io;
function gm() {
  var e = vm.useAppBridge(), n = mm.useNavigationHistory(), t = zi.useMemo(function() {
    return Jt.create(e);
  }, [e]), r = zi.useCallback(function(i, a) {
    var o = bm(i), l = o.startsWith(e.localOrigin), y = o.startsWith(e.hostOrigin), u = o.startsWith("/");
    if (l || y || u) {
      var f = zs(o);
      if (y || (a == null ? void 0 : a.target) === "new" || (a == null ? void 0 : a.target) === "host") {
        t.dispatch(Jt.Action.ADMIN_PATH, {
          path: f.replace(/^\/admin/, ""),
          newContext: (a == null ? void 0 : a.target) === "new"
        });
        return;
      }
      if (((a == null ? void 0 : a.target) === "self" || !(a != null && a.target)) && (a != null && a.replace)) {
        n.replace({ pathname: f });
        return;
      }
      t.dispatch(Jt.Action.APP, f);
      return;
    }
    t.dispatch(Jt.Action.REMOTE, {
      url: o,
      newContext: (a == null ? void 0 : a.target) === "new"
    });
  }, [t, n]);
  return zi.useCallback(function(i, a) {
    if (Hs(i)) {
      var o = hn(hn({}, i), { name: Jt.ResourceType[i.name] });
      t.dispatch(Jt.Action.ADMIN_SECTION, {
        section: o,
        newContext: (a == null ? void 0 : a.target) === "new"
      });
      return;
    }
    r(i, a);
  }, [r, t]);
}
pn.useNavigate = gm;
function Hs(e) {
  return typeof e == "object" && typeof (e == null ? void 0 : e.name) == "string";
}
pn.isAdminSection = Hs;
function uc(e) {
  var n = e.pathname, t = e.search, r = e.hash;
  return "" + n + (t || "") + (r || "");
}
function bm(e) {
  return e instanceof URL ? e.toString() : typeof e == "string" ? e : zs(e);
}
function zs(e) {
  if (typeof e == "string")
    return e.startsWith("/") ? e : uc(new URL(e));
  var n = e.search instanceof URLSearchParams ? e.search.toString() : e.search;
  return uc(hn(hn({}, e), { search: n }));
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useNavigate = void 0;
  var n = pn;
  Object.defineProperty(e, "useNavigate", { enumerable: !0, get: function() {
    return n.useNavigate;
  } });
})(Ws);
var Ks = {}, Qs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = e.DEFAULT_TOAST_DURATION = void 0;
  var n = te, t = xa, r = Re;
  e.DEFAULT_TOAST_DURATION = 5e3;
  function i() {
    var a = r.useAppBridge(), o, l = n.useCallback(function(y, u) {
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
    }, []), { show: l };
  }
  e.useToast = i;
})(Qs);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = void 0;
  var n = Qs;
  Object.defineProperty(e, "useToast", { enumerable: !0, get: function() {
    return n.useToast;
  } });
})(Ks);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = e.useNavigationHistory = e.useNavigate = e.useFeatureRequest = e.useFeaturesAvailable = e.useContextualSaveBar = e.useAppBridgeState = void 0;
  var n = Gs;
  Object.defineProperty(e, "useAppBridgeState", { enumerable: !0, get: function() {
    return n.useAppBridgeState;
  } });
  var t = $s;
  Object.defineProperty(e, "useContextualSaveBar", { enumerable: !0, get: function() {
    return t.useContextualSaveBar;
  } });
  var r = wo;
  Object.defineProperty(e, "useFeaturesAvailable", { enumerable: !0, get: function() {
    return r.useFeaturesAvailable;
  } });
  var i = qs;
  Object.defineProperty(e, "useFeatureRequest", { enumerable: !0, get: function() {
    return i.useFeatureRequest;
  } });
  var a = Ws;
  Object.defineProperty(e, "useNavigate", { enumerable: !0, get: function() {
    return a.useNavigate;
  } });
  var o = Io;
  Object.defineProperty(e, "useNavigationHistory", { enumerable: !0, get: function() {
    return o.useNavigationHistory;
  } });
  var l = Ks;
  Object.defineProperty(e, "useToast", { enumerable: !0, get: function() {
    return l.useToast;
  } });
})(Vs);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(a, o, l, y) {
    y === void 0 && (y = l), Object.defineProperty(a, y, { enumerable: !0, get: function() {
      return o[l];
    } });
  } : function(a, o, l, y) {
    y === void 0 && (y = l), a[y] = o[l];
  }), t = b && b.__exportStar || function(a, o) {
    for (var l in a)
      l !== "default" && !Object.prototype.hasOwnProperty.call(o, l) && n(o, a, l);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useAppBridge = e.Context = void 0;
  var r = st;
  Object.defineProperty(e, "Context", { enumerable: !0, get: function() {
    return r.AppBridgeContext;
  } });
  var i = Re;
  Object.defineProperty(e, "useAppBridge", { enumerable: !0, get: function() {
    return i.useAppBridge;
  } }), t(Kc, e), t(Vs, e);
})(Hc);
const _m = /* @__PURE__ */ yc(Hc);
var Ys = {}, Js = {}, yn = {}, xe = {};
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.isShopifyPing = xe.isShopifyPOS = xe.isShopifyMobile = xe.isShopifyEmbedded = xe.isMobile = void 0;
var cc = Yn;
function Om() {
  return Xs() || Zs() || xs();
}
xe.isMobile = Om;
function Pm() {
  return cc.isClient && window.top !== window.self || cc.isUnframed;
}
xe.isShopifyEmbedded = Pm;
function Xs() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Mobile") >= 0;
}
xe.isShopifyMobile = Xs;
function Zs() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify POS") >= 0;
}
xe.isShopifyPOS = Zs;
function xs() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Ping") >= 0;
}
xe.isShopifyPing = xs;
var Am = b && b.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function l(f) {
      try {
        u(r.next(f));
      } catch (s) {
        o(s);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (s) {
        o(s);
      }
    }
    function u(f) {
      f.done ? a(f.value) : i(f.value).then(l, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, Sm = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function l(u) {
    return function(f) {
      return y([u, f]);
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
      } catch (f) {
        u = [6, f], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(yn, "__esModule", { value: !0 });
yn.createMutationObserver = yn.setupModalAutoSizing = void 0;
var Em = Kr, Tm = _n, wm = xe, Oa = "app-bridge-utils-modal-auto-size", hr = Im();
function Im() {
  if (typeof document > "u")
    return null;
  var e = document.createElement("style");
  return e.type = "text/css", e.innerHTML = "." + Oa + " { overflow: hidden; height: auto; min-height: auto; }", e;
}
function Cm(e, n) {
  if (!hr)
    return function() {
    };
  var t = document.getElementsByTagName("head")[0], r = document.body.classList;
  t.appendChild(hr), r.add(Oa);
  var i = el(e, n);
  return function() {
    r.remove(Oa), t.contains(hr) && t.removeChild(hr), i && i.disconnect();
  };
}
function jm(e) {
  return Am(this, void 0, void 0, function() {
    function n() {
      r && (r(), r = void 0);
    }
    function t(i) {
      var a = i.context, o = i.modal.id;
      return wm.isMobile() || a !== Tm.Context.Modal ? (n(), n) : (r || (r = Cm(e, o)), n);
    }
    var r;
    return Sm(this, function(i) {
      switch (i.label) {
        case 0:
          return [4, e.getState().then(t)];
        case 1:
          return i.sent(), [2, n];
      }
    });
  });
}
yn.setupModalAutoSizing = jm;
function el(e, n) {
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
  a.observe(document, i), l();
  function o() {
    r && window.clearTimeout(r), r = window.setTimeout(l, 16);
  }
  function l() {
    var y = document.body.scrollHeight;
    y !== t && (t = y, e.dispatch(Em.updateModalSize({ id: n, height: String(y) })));
  }
  return a;
}
yn.createMutationObserver = el;
var tl = {}, Zn = {}, Mm = b && b.__createBinding || (Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return n[t];
  } });
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
}), Rm = b && b.__setModuleDefault || (Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
}), Nm = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var n = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && Mm(n, e, t);
  return Rm(n, e), n;
}, Dm = b && b.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function l(f) {
      try {
        u(r.next(f));
      } catch (s) {
        o(s);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (s) {
        o(s);
      }
    }
    function u(f) {
      f.done ? a(f.value) : i(f.value).then(l, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, km = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function l(u) {
    return function(f) {
      return y([u, f]);
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
      } catch (f) {
        u = [6, f], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.getSessionToken = void 0;
var sc = Nm(Xa), lc = Gt;
function Bm(e) {
  return Dm(this, void 0, void 0, function() {
    return km(this, function(n) {
      return [2, new Promise(function(t, r) {
        var i = e.subscribe(sc.Action.RESPOND, function(a) {
          var o = a.sessionToken;
          o ? t(o) : r(lc.fromAction("Failed to retrieve a session token", lc.Action.FAILED_AUTHENTICATION)), i();
        });
        e.dispatch(sc.request());
      })];
    });
  });
}
Zn.getSessionToken = Bm;
var ri = {}, Fr = b && b.__assign || function() {
  return Fr = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Fr.apply(this, arguments);
}, Lm = b && b.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function l(f) {
      try {
        u(r.next(f));
      } catch (s) {
        o(s);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (s) {
        o(s);
      }
    }
    function u(f) {
      f.done ? a(f.value) : i(f.value).then(l, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, Um = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function l(u) {
    return function(f) {
      return y([u, f]);
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
      } catch (f) {
        u = [6, f], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(ri, "__esModule", { value: !0 });
ri.authenticatedFetch = void 0;
var Fm = Zn;
function Vm(e, n) {
  var t = this;
  return n === void 0 && (n = fetch), function(r, i) {
    return i === void 0 && (i = {}), Lm(t, void 0, void 0, function() {
      var a, o, l;
      return Um(this, function(y) {
        switch (y.label) {
          case 0:
            return [4, Fm.getSessionToken(e)];
          case 1:
            return a = y.sent(), o = new Headers(i.headers), o.append("Authorization", "Bearer " + a), o.append("X-Requested-With", "XMLHttpRequest"), l = {}, o.forEach(function(u, f) {
              l[f] = u;
            }), [2, n(r, Fr(Fr({}, i), { headers: l }))];
        }
      });
    });
  };
}
ri.authenticatedFetch = Vm;
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Zn, e), t(ri, e);
})(tl);
var nl = {}, xn = {}, rl = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.generateUuid = void 0;
  var n = bn;
  Object.defineProperty(e, "generateUuid", { enumerable: !0, get: function() {
    return n.generateUuid;
  } }), e.default = n.generateUuid;
})(rl);
var Gm = b && b.__createBinding || (Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return n[t];
  } });
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
}), $m = b && b.__setModuleDefault || (Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
}), qm = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var n = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && Gm(n, e, t);
  return $m(n, e), n;
}, Wm = b && b.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function l(f) {
      try {
        u(r.next(f));
      } catch (s) {
        o(s);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (s) {
        o(s);
      }
    }
    function u(f) {
      f.done ? a(f.value) : i(f.value).then(l, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, Hm = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function l(u) {
    return function(f) {
      return y([u, f]);
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
      } catch (f) {
        u = [6, f], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, zm = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.getAuthorizationCodePayload = void 0;
var dc = qm(La), fc = Gt, Km = zm(rl);
function Qm(e) {
  return Wm(this, void 0, void 0, function() {
    return Hm(this, function(n) {
      return [2, new Promise(function(t, r) {
        var i = Km.default(), a = e.subscribe(dc.Action.RESPOND, function(o) {
          switch (o == null ? void 0 : o.status) {
            case "needsExchange":
              t(o);
              break;
            default:
              r(fc.fromAction("Failed to retrieve an authorization code", fc.Action.FAILED_AUTHENTICATION));
          }
          a();
        }, i);
        e.dispatch(dc.request(i));
      })];
    });
  });
}
xn.getAuthorizationCodePayload = Qm;
var ii = {}, Ym = b && b.__awaiter || function(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function l(f) {
      try {
        u(r.next(f));
      } catch (s) {
        o(s);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (s) {
        o(s);
      }
    }
    function u(f) {
      f.done ? a(f.value) : i(f.value).then(l, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, Jm = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function l(u) {
    return function(f) {
      return y([u, f]);
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
      } catch (f) {
        u = [6, f], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(ii, "__esModule", { value: !0 });
ii.userAuthorizedFetch = void 0;
var Xm = xn, Zm = "auth/shopify/callback";
function xm(e) {
  var n = e.headers.get("X-Shopify-API-Request-Failure-Unauthorized");
  return n ? n.toLowerCase() === "true" : !1;
}
function eg(e) {
  var n = this, t = e.app, r = e.callbackUri, i = r === void 0 ? Zm : r, a = e.isAuthorizationCodeRequired, o = a === void 0 ? xm : a, l = e.fetchOperation;
  return function(y, u) {
    return Ym(n, void 0, void 0, function() {
      var f, s, h, p, d, c, v, m;
      return Jm(this, function(g) {
        switch (g.label) {
          case 0:
            return [4, l(y, u)];
          case 1:
            return f = g.sent(), o(f) ? [4, Xm.getAuthorizationCodePayload(t)] : [2, f];
          case 2:
            return s = g.sent(), h = s.code, p = s.hmac, d = s.shop, c = s.timestamp, v = encodeURI("https://" + window.location.hostname + "/" + i + "?code=" + h + "&hmac=" + p + "&shop=" + d + "&timestamp=" + c), [4, l(v, {})];
          case 3:
            if (m = g.sent(), !m.ok)
              throw new Error("Failed to authorize request.");
            return [2, l(y, u)];
        }
      });
    });
  };
}
ii.userAuthorizedFetch = eg;
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(xn, e), t(ii, e);
})(nl);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(yn, e), t(xe, e), t(tl, e), t(nl, e);
})(Js);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), t = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && n(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Js, e);
})(Ys);
var gt;
(function(e) {
  e[e.Standalone = 0] = "Standalone", e[e.Embedded = 1] = "Embedded";
})(gt || (gt = {}));
const tg = `
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
`, ng = Ol(({ children: e, forceRedirect: n, isEmbedded: t, gadgetAppUrl: r, originalQueryParams: i, api: a, isRootFrameRequest: o, type: l, isInstallRequest: y }) => {
  var g, O;
  const u = pc(zc), [f, s] = hc({
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !0,
    appBridge: u,
    isRootFrameRequest: !1
  });
  yr(() => {
    if (!u) {
      console.debug("[gadget-rsab] no app bridge, skipping client auth setup");
      return;
    }
    a.connection.setAuthenticationMode({
      custom: {
        processFetch: async (_, T) => {
          const A = new Headers(T.headers);
          A.append("Authorization", `ShopifySessionToken ${await Ys.getSessionToken(u)}`), T.headers ?? (T.headers = {}), A.forEach(function(E, S) {
            T.headers[S] = E;
          });
        },
        processTransactionConnectionParams(_) {
          throw new Error("client side transactions yet not supported in Shopify Gadget provider");
        }
      }
    }), console.debug("[gadget-rsab] set up client auth for session tokens");
  }, [a.connection, u]);
  let h = !1, p = !1;
  const [{ data: d, fetching: c, error: v }] = Wc({
    query: tg,
    // for now don't fetch a session's shop in standalone mode since it leverages session tokens which aren't available if standalone
    pause: l == gt.Standalone
  });
  d ? (h = (g = d.shopifyConnection) == null ? void 0 : g.requiresReauthentication, d.currentSession && (d.currentSession.shop ? p = !((O = d.shopifyConnection) != null && O.requiresReauthentication) : h = !0)) : l == gt.Standalone && y && (h = !0), yr(() => {
    if (!h || o)
      return;
    const _ = new URL("/api/connections/auth/shopify", r);
    _.search = (i == null ? void 0 : i.toString()) ?? "";
    const T = _.toString();
    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process", {
      appType: l,
      isInstallRequest: y,
      isEmbedded: t,
      redirectURL: T,
      gadgetAppUrl: r
    }), t && u ? ht.Redirect.create(u).dispatch(ht.Redirect.Action.REMOTE, T) : window.location.assign(T);
  }, [u, r, t, o, i, h]);
  const m = (n || h || c) && !o;
  return yr(() => {
    const _ = {
      isAuthenticated: p,
      isEmbedded: t,
      canAuth: !!u,
      loading: m,
      appBridge: u,
      error: v,
      isRootFrameRequest: o
    };
    return console.debug("[gadget-rsab] context changed", _), s(_);
  }, [m, t, u, p, v, o]), te.createElement(ig.Provider, { value: f }, e);
}), rg = ({ type: e, children: n, shopifyApiKey: t, api: r, router: i }) => {
  const [a, o] = hc(null), l = !!a, { query: y } = a ?? {}, u = (y == null ? void 0 : y.get("host")) ?? void 0, f = e ?? gt.Embedded, s = _r(() => y, [l]), h = (y == null ? void 0 : y.has("hmac")) && (y == null ? void 0 : y.has("shop")), p = typeof window < "u" ? window.top !== window.self : !1, d = typeof window < "u" && !!window.MobileWebView, c = p || d, v = c == (f == gt.Embedded) && (f == gt.Standalone ? !h : !0), m = !(y != null && y.has("hmac")) && !(y != null && y.has("shop")) && f == gt.Embedded, g = l && typeof u < "u" && !v, O = new URL(r.connection.options.endpoint).origin;
  yr(() => {
    o({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search)
    });
  }, []);
  let _ = te.createElement(
    Op,
    { api: r },
    te.createElement(ng, { forceRedirect: g, isEmbedded: c, gadgetAppUrl: O, api: r, originalQueryParams: s, isRootFrameRequest: m, type: f, isInstallRequest: !!h }, n)
  );
  const T = u && f != gt.Standalone && (!h || v);
  return console.debug("[gadget-rsab] provider rendering", {
    host: u,
    coalescedType: f,
    isInstallRequest: h,
    isReady: l,
    isEmbedded: c,
    isRootFrameRequest: m,
    inDestinationContext: v,
    shouldMountAppBridge: T
  }), T && (_ = te.createElement(_m.Provider, { config: {
    apiKey: t,
    host: u,
    forceRedirect: g
  }, router: i }, _)), _;
}, ig = Pl({
  loading: !0,
  isEmbedded: !1,
  isAuthenticated: !1,
  canAuth: !1,
  appBridge: null,
  isRootFrameRequest: !1
}), il = new cp(), ag = () => {
  const [{ data: e }] = Dp(il.shopifyProduct);
  return /* @__PURE__ */ Or.jsx(Or.Fragment, { children: JSON.stringify(e) });
}, sg = () => /* @__PURE__ */ Or.jsx(rg, { api: il, shopifyApiKey: "deadbeef", children: /* @__PURE__ */ Or.jsx(ag, {}) });
export {
  sg as A,
  ag as R,
  b as c
};
