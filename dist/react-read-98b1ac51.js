import * as Ee from "react";
import Ut, { useMemo as nr, useContext as In, useRef as Pn } from "react";
var qo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function En(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ar = { exports: {} }, lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function An() {
  if (Qr)
    return lt;
  Qr = 1;
  var e = Ut, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, d) {
    var c, f = {}, p = null, m = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (c in l)
      i.call(l, c) && !a.hasOwnProperty(c) && (f[c] = l[c]);
    if (u && u.defaultProps)
      for (c in l = u.defaultProps, l)
        f[c] === void 0 && (f[c] = l[c]);
    return { $$typeof: t, type: u, key: p, ref: m, props: f, _owner: n.current };
  }
  return lt.Fragment = r, lt.jsx = s, lt.jsxs = s, lt;
}
var ct = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function kn() {
  return Jr || (Jr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ut, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), b = Symbol.iterator, S = "@@iterator";
    function x(o) {
      if (o === null || typeof o != "object")
        return null;
      var y = b && o[b] || o[S];
      return typeof y == "function" ? y : null;
    }
    var q = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var y = arguments.length, g = new Array(y > 1 ? y - 1 : 0), O = 1; O < y; O++)
          g[O - 1] = arguments[O];
        G("error", o, g);
      }
    }
    function G(o, y, g) {
      {
        var O = q.ReactDebugCurrentFrame, C = O.getStackAddendum();
        C !== "" && (y += "%s", g = g.concat([C]));
        var R = g.map(function(N) {
          return String(N);
        });
        R.unshift("Warning: " + y), Function.prototype.apply.call(console[o], console, R);
      }
    }
    var h = !1, I = !1, v = !1, B = !1, xe = !1, Ue;
    Ue = Symbol.for("react.module.reference");
    function Ge(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === i || o === a || xe || o === n || o === d || o === c || B || o === m || h || I || v || typeof o == "object" && o !== null && (o.$$typeof === p || o.$$typeof === f || o.$$typeof === s || o.$$typeof === u || o.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Ue || o.getModuleId !== void 0));
    }
    function Tt(o, y, g) {
      var O = o.displayName;
      if (O)
        return O;
      var C = y.displayName || y.name || "";
      return C !== "" ? g + "(" + C + ")" : g;
    }
    function ot(o) {
      return o.displayName || "Context";
    }
    function ve(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case i:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case n:
          return "StrictMode";
        case d:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            var y = o;
            return ot(y) + ".Consumer";
          case s:
            var g = o;
            return ot(g._context) + ".Provider";
          case l:
            return Tt(o, o.render, "ForwardRef");
          case f:
            var O = o.displayName || null;
            return O !== null ? O : ve(o.type) || "Memo";
          case p: {
            var C = o, R = C._payload, N = C._init;
            try {
              return ve(N(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, $ = 0, F, _, U, Pe, D, _e, Ce;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function De() {
      {
        if ($ === 0) {
          F = console.log, _ = console.info, U = console.warn, Pe = console.error, D = console.group, _e = console.groupCollapsed, Ce = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
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
        $++;
      }
    }
    function Y() {
      {
        if ($--, $ === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, o, {
              value: F
            }),
            info: P({}, o, {
              value: _
            }),
            warn: P({}, o, {
              value: U
            }),
            error: P({}, o, {
              value: Pe
            }),
            group: P({}, o, {
              value: D
            }),
            groupCollapsed: P({}, o, {
              value: _e
            }),
            groupEnd: P({}, o, {
              value: Ce
            })
          });
        }
        $ < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = q.ReactCurrentDispatcher, It;
    function Be(o, y, g) {
      {
        if (It === void 0)
          try {
            throw Error();
          } catch (C) {
            var O = C.stack.trim().match(/\n( *(at )?)/);
            It = O && O[1] || "";
          }
        return `
` + It + o;
      }
    }
    var Kt = !1, Pt;
    {
      var en = typeof WeakMap == "function" ? WeakMap : Map;
      Pt = new en();
    }
    function Dr(o, y) {
      if (!o || Kt)
        return "";
      {
        var g = Pt.get(o);
        if (g !== void 0)
          return g;
      }
      var O;
      Kt = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = z.current, z.current = null, De();
      try {
        if (y) {
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
            } catch (Ne) {
              O = Ne;
            }
            Reflect.construct(o, [], N);
          } else {
            try {
              N.call();
            } catch (Ne) {
              O = Ne;
            }
            o.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ne) {
            O = Ne;
          }
          o();
        }
      } catch (Ne) {
        if (Ne && O && typeof Ne.stack == "string") {
          for (var k = Ne.stack.split(`
`), se = O.stack.split(`
`), W = k.length - 1, Q = se.length - 1; W >= 1 && Q >= 0 && k[W] !== se[Q]; )
            Q--;
          for (; W >= 1 && Q >= 0; W--, Q--)
            if (k[W] !== se[Q]) {
              if (W !== 1 || Q !== 1)
                do
                  if (W--, Q--, Q < 0 || k[W] !== se[Q]) {
                    var Se = `
` + k[W].replace(" at new ", " at ");
                    return o.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", o.displayName)), typeof o == "function" && Pt.set(o, Se), Se;
                  }
                while (W >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        Kt = !1, z.current = R, Y(), Error.prepareStackTrace = C;
      }
      var ze = o ? o.displayName || o.name : "", Kr = ze ? Be(ze) : "";
      return typeof o == "function" && Pt.set(o, Kr), Kr;
    }
    function tn(o, y, g) {
      return Dr(o, !1);
    }
    function rn(o) {
      var y = o.prototype;
      return !!(y && y.isReactComponent);
    }
    function Et(o, y, g) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Dr(o, rn(o));
      if (typeof o == "string")
        return Be(o);
      switch (o) {
        case d:
          return Be("Suspense");
        case c:
          return Be("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            return tn(o.render);
          case f:
            return Et(o.type, y, g);
          case p: {
            var O = o, C = O._payload, R = O._init;
            try {
              return Et(R(C), y, g);
            } catch {
            }
          }
        }
      return "";
    }
    var At = Object.prototype.hasOwnProperty, Fr = {}, Rr = q.ReactDebugCurrentFrame;
    function kt(o) {
      if (o) {
        var y = o._owner, g = Et(o.type, o._source, y ? y.type : null);
        Rr.setExtraStackFrame(g);
      } else
        Rr.setExtraStackFrame(null);
    }
    function nn(o, y, g, O, C) {
      {
        var R = Function.call.bind(At);
        for (var N in o)
          if (R(o, N)) {
            var k = void 0;
            try {
              if (typeof o[N] != "function") {
                var se = Error((O || "React class") + ": " + g + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              k = o[N](y, N, O, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              k = W;
            }
            k && !(k instanceof Error) && (kt(C), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", g, N, typeof k), kt(null)), k instanceof Error && !(k.message in Fr) && (Fr[k.message] = !0, kt(C), w("Failed %s type: %s", g, k.message), kt(null));
          }
      }
    }
    var an = Array.isArray;
    function Qt(o) {
      return an(o);
    }
    function sn(o) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, g = y && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return g;
      }
    }
    function on(o) {
      try {
        return qr(o), !1;
      } catch {
        return !0;
      }
    }
    function qr(o) {
      return "" + o;
    }
    function Vr(o) {
      if (on(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sn(o)), qr(o);
    }
    var ut = q.ReactCurrentOwner, un = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $r, Mr, Jt;
    Jt = {};
    function ln(o) {
      if (At.call(o, "ref")) {
        var y = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function cn(o) {
      if (At.call(o, "key")) {
        var y = Object.getOwnPropertyDescriptor(o, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function dn(o, y) {
      if (typeof o.ref == "string" && ut.current && y && ut.current.stateNode !== y) {
        var g = ve(ut.current.type);
        Jt[g] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ve(ut.current.type), o.ref), Jt[g] = !0);
      }
    }
    function fn(o, y) {
      {
        var g = function() {
          $r || ($r = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        g.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function pn(o, y) {
      {
        var g = function() {
          Mr || (Mr = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        g.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var yn = function(o, y, g, O, C, R, N) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: y,
        ref: g,
        props: N,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function hn(o, y, g, O, C) {
      {
        var R, N = {}, k = null, se = null;
        g !== void 0 && (Vr(g), k = "" + g), cn(y) && (Vr(y.key), k = "" + y.key), ln(y) && (se = y.ref, dn(y, C));
        for (R in y)
          At.call(y, R) && !un.hasOwnProperty(R) && (N[R] = y[R]);
        if (o && o.defaultProps) {
          var W = o.defaultProps;
          for (R in W)
            N[R] === void 0 && (N[R] = W[R]);
        }
        if (k || se) {
          var Q = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          k && fn(N, Q), se && pn(N, Q);
        }
        return yn(o, k, se, C, O, ut.current, N);
      }
    }
    var Yt = q.ReactCurrentOwner, Ur = q.ReactDebugCurrentFrame;
    function Le(o) {
      if (o) {
        var y = o._owner, g = Et(o.type, o._source, y ? y.type : null);
        Ur.setExtraStackFrame(g);
      } else
        Ur.setExtraStackFrame(null);
    }
    var Ht;
    Ht = !1;
    function Zt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Gr() {
      {
        if (Yt.current) {
          var o = ve(Yt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function mn(o) {
      {
        if (o !== void 0) {
          var y = o.fileName.replace(/^.*[\\\/]/, ""), g = o.lineNumber;
          return `

Check your code at ` + y + ":" + g + ".";
        }
        return "";
      }
    }
    var Br = {};
    function bn(o) {
      {
        var y = Gr();
        if (!y) {
          var g = typeof o == "string" ? o : o.displayName || o.name;
          g && (y = `

Check the top-level render call using <` + g + ">.");
        }
        return y;
      }
    }
    function Lr(o, y) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var g = bn(y);
        if (Br[g])
          return;
        Br[g] = !0;
        var O = "";
        o && o._owner && o._owner !== Yt.current && (O = " It was passed a child from " + ve(o._owner.type) + "."), Le(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, O), Le(null);
      }
    }
    function zr(o, y) {
      {
        if (typeof o != "object")
          return;
        if (Qt(o))
          for (var g = 0; g < o.length; g++) {
            var O = o[g];
            Zt(O) && Lr(O, y);
          }
        else if (Zt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var C = x(o);
          if (typeof C == "function" && C !== o.entries)
            for (var R = C.call(o), N; !(N = R.next()).done; )
              Zt(N.value) && Lr(N.value, y);
        }
      }
    }
    function gn(o) {
      {
        var y = o.type;
        if (y == null || typeof y == "string")
          return;
        var g;
        if (typeof y == "function")
          g = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === f))
          g = y.propTypes;
        else
          return;
        if (g) {
          var O = ve(y);
          nn(g, o.props, "prop", O, o);
        } else if (y.PropTypes !== void 0 && !Ht) {
          Ht = !0;
          var C = ve(y);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vn(o) {
      {
        for (var y = Object.keys(o.props), g = 0; g < y.length; g++) {
          var O = y[g];
          if (O !== "children" && O !== "key") {
            Le(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), Le(null);
            break;
          }
        }
        o.ref !== null && (Le(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), Le(null));
      }
    }
    function Wr(o, y, g, O, C, R) {
      {
        var N = Ge(o);
        if (!N) {
          var k = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = mn(C);
          se ? k += se : k += Gr();
          var W;
          o === null ? W = "null" : Qt(o) ? W = "array" : o !== void 0 && o.$$typeof === t ? (W = "<" + (ve(o.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : W = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, k);
        }
        var Q = hn(o, y, g, C, R);
        if (Q == null)
          return Q;
        if (N) {
          var Se = y.children;
          if (Se !== void 0)
            if (O)
              if (Qt(Se)) {
                for (var ze = 0; ze < Se.length; ze++)
                  zr(Se[ze], o);
                Object.freeze && Object.freeze(Se);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zr(Se, o);
        }
        return o === i ? vn(Q) : gn(Q), Q;
      }
    }
    function Sn(o, y, g) {
      return Wr(o, y, g, !0);
    }
    function wn(o, y, g) {
      return Wr(o, y, g, !1);
    }
    var On = wn, Tn = Sn;
    ct.Fragment = i, ct.jsx = On, ct.jsxs = Tn;
  }()), ct;
}
process.env.NODE_ENV === "production" ? ar.exports = An() : ar.exports = kn();
var Yr = ar.exports, pt;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(pt || (pt = {}));
const _n = {
  DateTime(e) {
    return new Date(e);
  }
};
class Nn {
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
    for (const [i, n] of Object.entries(this.plan)) {
      const a = r[i];
      a != null && (r[i] = _n[n](a));
    }
    return r;
  }
}
var Qe = {
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
let sr = class extends Error {
  constructor(t, r, i, n, a, s, u) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), r && (this.nodes = Array.isArray(r) ? r : [r]), i && (this.source = i), n && (this.positions = n), s && (this.originalError = s);
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
var M, E;
function J(e) {
  return new sr(`Syntax Error: Unexpected token at ${E} in ${e}`);
}
function be(e) {
  if (e.lastIndex = E, e.test(M))
    return M.slice(E, E = e.lastIndex);
}
var _t = / +(?=[^\s])/y;
function jn(e) {
  for (var t = e.split(`
`), r = "", i = 0, n = 0, a = t.length - 1, s = 0; s < t.length; s++)
    _t.lastIndex = 0, _t.test(t[s]) && (s && (!i || _t.lastIndex < i) && (i = _t.lastIndex), n = n || s, a = s);
  for (var u = n; u <= a; u++)
    u !== n && (r += `
`), r += t[u].slice(i).replace(/\\"""/g, '"""');
  return r;
}
function A() {
  for (var e = 0 | M.charCodeAt(E++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | M.charCodeAt(E++))
    if (e === 35)
      for (; (e = M.charCodeAt(E++)) !== 10 && e !== 13; )
        ;
  E--;
}
var Ai = /[_A-Za-z]\w*/y;
function Ae() {
  var e;
  if (e = be(Ai))
    return {
      kind: "Name",
      value: e
    };
}
var xn = /(?:null|true|false)/y, ki = /\$[_A-Za-z]\w*/y, Cn = /-?\d+/y, Dn = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Fn = /\\/g, Rn = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, qn = /"(?:"|[^\r\n]*?[^\\]")/y;
function Rt(e) {
  var t, r;
  if (r = be(xn))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = be(ki)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = be(Cn)) {
    var i = r;
    (r = be(Dn)) ? t = {
      kind: "FloatValue",
      value: i + r
    } : t = {
      kind: "IntValue",
      value: i
    };
  } else if (r = be(Ai))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = be(Rn))
    t = {
      kind: "StringValue",
      value: jn(r.slice(3, -3)),
      block: !0
    };
  else if (r = be(qn))
    t = {
      kind: "StringValue",
      value: Fn.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var s;
    if (M.charCodeAt(E) === 91) {
      E++, A();
      for (var u = []; s = Rt(a); )
        u.push(s);
      if (M.charCodeAt(E++) !== 93)
        throw J("ListValue");
      return A(), {
        kind: "ListValue",
        values: u
      };
    }
  }(e) || function(a) {
    if (M.charCodeAt(E) === 123) {
      E++, A();
      for (var s = [], u; u = Ae(); ) {
        if (A(), M.charCodeAt(E++) !== 58)
          throw J("ObjectField");
        A();
        var l = Rt(a);
        if (!l)
          throw J("ObjectField");
        s.push({
          kind: "ObjectField",
          name: u,
          value: l
        });
      }
      if (M.charCodeAt(E++) !== 125)
        throw J("ObjectValue");
      return A(), {
        kind: "ObjectValue",
        fields: s
      };
    }
  }(e))
    return t;
  return A(), t;
}
function _i(e) {
  var t = [];
  if (A(), M.charCodeAt(E) === 40) {
    E++, A();
    for (var r; r = Ae(); ) {
      if (A(), M.charCodeAt(E++) !== 58)
        throw J("Argument");
      A();
      var i = Rt(e);
      if (!i)
        throw J("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: i
      });
    }
    if (!t.length || M.charCodeAt(E++) !== 41)
      throw J("Argument");
    A();
  }
  return t;
}
function He(e) {
  var t = [];
  for (A(); M.charCodeAt(E) === 64; ) {
    E++;
    var r = Ae();
    if (!r)
      throw J("Directive");
    A(), t.push({
      kind: "Directive",
      name: r,
      arguments: _i(e)
    });
  }
  return t;
}
function Vn() {
  var e = Ae();
  if (e) {
    A();
    var t;
    if (M.charCodeAt(E) === 58) {
      if (E++, A(), t = e, !(e = Ae()))
        throw J("Field");
      A();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: _i(!1),
      directives: He(!1),
      selectionSet: Gt()
    };
  }
}
function Ni() {
  var e;
  if (A(), M.charCodeAt(E) === 91) {
    E++, A();
    var t = Ni();
    if (!t || M.charCodeAt(E++) !== 93)
      throw J("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = Ae())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw J("NamedType");
  return A(), M.charCodeAt(E) === 33 ? (E++, A(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var $n = /on/y;
function ji() {
  if (be($n)) {
    A();
    var e = Ae();
    if (!e)
      throw J("NamedType");
    return A(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Mn = /\.\.\./y;
function Un() {
  if (be(Mn)) {
    A();
    var e = E, t;
    if ((t = Ae()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: He(!1)
      };
    E = e;
    var r = ji(), i = He(!1), n = Gt();
    if (!n)
      throw J("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: i,
      selectionSet: n
    };
  }
}
function Gt() {
  var e;
  if (A(), M.charCodeAt(E) === 123) {
    E++, A();
    for (var t = []; e = Un() || Vn(); )
      t.push(e);
    if (!t.length || M.charCodeAt(E++) !== 125)
      throw J("SelectionSet");
    return A(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Gn = /fragment/y;
function Bn() {
  if (be(Gn)) {
    A();
    var e = Ae();
    if (!e)
      throw J("FragmentDefinition");
    A();
    var t = ji();
    if (!t)
      throw J("FragmentDefinition");
    var r = He(!1), i = Gt();
    if (!i)
      throw J("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: i
    };
  }
}
var Ln = /(?:query|mutation|subscription)/y;
function zn() {
  var e, t, r = [], i = [];
  (e = be(Ln)) && (A(), t = Ae(), r = function() {
    var s, u = [];
    if (A(), M.charCodeAt(E) === 40) {
      for (E++, A(); s = be(ki); ) {
        if (A(), M.charCodeAt(E++) !== 58)
          throw J("VariableDefinition");
        var l = Ni(), d = void 0;
        if (M.charCodeAt(E) === 61 && (E++, A(), !(d = Rt(!0))))
          throw J("VariableDefinition");
        A(), u.push({
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
          directives: He(!0)
        });
      }
      if (M.charCodeAt(E++) !== 41)
        throw J("VariableDefinition");
      A();
    }
    return u;
  }(), i = He(!1));
  var n = Gt();
  if (n)
    return {
      kind: "OperationDefinition",
      operation: e || "query",
      name: t,
      variableDefinitions: r,
      directives: i,
      selectionSet: n
    };
}
function Wn(e, t) {
  return M = typeof e.body == "string" ? e.body : e, E = 0, function() {
    var i;
    A();
    for (var n = []; i = Bn() || zn(); )
      n.push(i);
    return {
      kind: "Document",
      definitions: n
    };
  }();
}
function Kn(e) {
  return JSON.stringify(e);
}
function Qn(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var we = (e) => !(!e || !e.length), ie = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !we(e.variableDefinitions) && !we(e.directives))
      return ie.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), we(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(ie.VariableDefinition).join(", ") + ")"), we(e.directives) && (t += " " + e.directives.map(ie.Directive).join(" ")), t + " " + ie.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = ie.Variable(e.variable) + ": " + Oe(e.type);
    return e.defaultValue && (t += " = " + Oe(e.defaultValue)), we(e.directives) && (t += " " + e.directives.map(ie.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (we(e.arguments)) {
      var r = e.arguments.map(ie.Argument), i = t + "(" + r.join(", ") + ")";
      t = i.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : i;
    }
    return we(e.directives) && (t += " " + e.directives.map(ie.Directive).join(" ")), e.selectionSet ? t + " " + ie.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Qn(e.value) : Kn(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(Oe).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(ie.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + Oe(e.value),
  Document: (e) => we(e.definitions) ? e.definitions.map(Oe).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(Oe).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + Oe(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return we(e.directives) && (t += " " + e.directives.map(ie.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), we(e.directives) && (t += " " + e.directives.map(ie.Directive).join(" ")), t + " " + Oe(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, we(e.directives) && (t += " " + e.directives.map(ie.Directive).join(" ")), t + " " + Oe(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return we(e.arguments) && (t += "(" + e.arguments.map(ie.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + Oe(e.type) + "]",
  NonNullType: (e) => Oe(e.type) + "!"
};
function Oe(e) {
  return ie[e.kind] ? ie[e.kind](e) : "";
}
var wr = () => {
}, ge = wr;
function Ie(e) {
  return {
    tag: 0,
    0: e
  };
}
function St(e) {
  return {
    tag: 1,
    0: e
  };
}
var Jn = (e) => e;
function re(e) {
  return (t) => (r) => {
    var i = ge;
    t((n) => {
      n === 0 ? r(0) : n.tag === 0 ? (i = n[0], r(n)) : e(n[0]) ? r(n) : i(0);
    });
  };
}
function Ye(e) {
  return (t) => (r) => t((i) => {
    i === 0 || i.tag === 0 ? r(i) : r(St(e(i[0])));
  });
}
function bt(e) {
  return (t) => (r) => {
    var i = [], n = ge, a = !1, s = !1;
    t((u) => {
      s || (u === 0 ? (s = !0, i.length || r(0)) : u.tag === 0 ? n = u[0] : (a = !1, function(d) {
        var c = ge;
        d((f) => {
          if (f === 0) {
            if (i.length) {
              var p = i.indexOf(c);
              p > -1 && (i = i.slice()).splice(p, 1), i.length || (s ? r(0) : a || (a = !0, n(0)));
            }
          } else
            f.tag === 0 ? (i.push(c = f[0]), c(0)) : i.length && (r(f), c(0));
        });
      }(e(u[0])), a || (a = !0, n(0))));
    }), r(Ie((u) => {
      if (u === 1) {
        s || (s = !0, n(1));
        for (var l = 0, d = i, c = i.length; l < c; l++)
          d[l](1);
        i.length = 0;
      } else {
        !s && !a ? (a = !0, n(0)) : a = !1;
        for (var f = 0, p = i, m = i.length; f < m; f++)
          p[f](0);
      }
    }));
  };
}
function Yn(e) {
  return bt(Jn)(e);
}
function Ze(e) {
  return Yn(Xn(e));
}
function Or(e) {
  return (t) => (r) => {
    var i = !1;
    t((n) => {
      if (!i)
        if (n === 0)
          i = !0, r(0), e();
        else if (n.tag === 0) {
          var a = n[0];
          r(Ie((s) => {
            s === 1 ? (i = !0, a(1), e()) : a(s);
          }));
        } else
          r(n);
    });
  };
}
function Xe(e) {
  return (t) => (r) => {
    var i = !1;
    t((n) => {
      if (!i)
        if (n === 0)
          i = !0, r(0);
        else if (n.tag === 0) {
          var a = n[0];
          r(Ie((s) => {
            s === 1 && (i = !0), a(s);
          }));
        } else
          e(n[0]), r(n);
    });
  };
}
function Hr(e) {
  return (t) => (r) => t((i) => {
    i === 0 ? r(0) : i.tag === 0 ? (r(i), e()) : r(i);
  });
}
function gt(e) {
  var t = [], r = ge, i = !1;
  return (n) => {
    t.push(n), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var s = 0, u = t, l = t.length; s < l; s++)
          u[s](0);
        t.length = 0;
      } else if (a.tag === 0)
        r = a[0];
      else {
        i = !1;
        for (var d = 0, c = t, f = t.length; d < f; d++)
          c[d](a);
      }
    }), n(Ie((a) => {
      if (a === 1) {
        var s = t.indexOf(n);
        s > -1 && (t = t.slice()).splice(s, 1), t.length || r(1);
      } else
        i || (i = !0, r(0));
    }));
  };
}
function Zr(e) {
  return (t) => (r) => {
    var i = ge, n = ge, a = !1, s = !1, u = !1, l = !1;
    t((d) => {
      l || (d === 0 ? (l = !0, u || r(0)) : d.tag === 0 ? i = d[0] : (u && (n(1), n = ge), a ? a = !1 : (a = !0, i(0)), function(f) {
        u = !0, f((p) => {
          u && (p === 0 ? (u = !1, l ? r(0) : a || (a = !0, i(0))) : p.tag === 0 ? (s = !1, (n = p[0])(0)) : (r(p), s ? s = !1 : n(0)));
        });
      }(e(d[0]))));
    }), r(Ie((d) => {
      d === 1 ? (l || (l = !0, i(1)), u && (u = !1, n(1))) : (!l && !a && (a = !0, i(0)), u && !s && (s = !0, n(0)));
    }));
  };
}
function xi(e) {
  return (t) => (r) => {
    var i = ge, n = !1, a = 0;
    t((s) => {
      n || (s === 0 ? (n = !0, r(0)) : s.tag === 0 ? e <= 0 ? (n = !0, r(0), s[0](1)) : i = s[0] : a++ < e ? (r(s), !n && a >= e && (n = !0, r(0), i(1))) : r(s));
    }), r(Ie((s) => {
      s === 1 && !n ? (n = !0, i(1)) : s === 0 && !n && a < e && i(0);
    }));
  };
}
function Tr(e) {
  return (t) => (r) => {
    var i = ge, n = ge, a = !1;
    t((s) => {
      a || (s === 0 ? (a = !0, n(1), r(0)) : s.tag === 0 ? (i = s[0], e((u) => {
        u === 0 || (u.tag === 0 ? (n = u[0])(0) : (a = !0, n(1), i(1), r(0)));
      })) : r(s));
    }), r(Ie((s) => {
      s === 1 && !a ? (a = !0, i(1), n(1)) : a || i(0);
    }));
  };
}
function Ci(e, t) {
  return (r) => (i) => {
    var n = ge, a = !1;
    r((s) => {
      a || (s === 0 ? (a = !0, i(0)) : s.tag === 0 ? (n = s[0], i(s)) : e(s[0]) ? i(s) : (a = !0, t && i(s), i(0), n(1)));
    });
  };
}
function Hn(e) {
  return (t) => e()(t);
}
function Di(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), i = !1, n = !1, a = !1, s;
    t(Ie(async (u) => {
      if (u === 1)
        i = !0, r.return && r.return();
      else if (n)
        a = !0;
      else {
        for (a = n = !0; a && !i; )
          if ((s = await r.next()).done)
            i = !0, r.return && await r.return(), t(0);
          else
            try {
              a = !1, t(St(s.value));
            } catch (l) {
              if (r.throw)
                (i = !!(await r.throw(l)).done) && t(0);
              else
                throw l;
            }
        n = !1;
      }
    }));
  };
}
function Zn(e) {
  return e[Symbol.asyncIterator] ? Di(e) : (t) => {
    var r = e[Symbol.iterator](), i = !1, n = !1, a = !1, s;
    t(Ie((u) => {
      if (u === 1)
        i = !0, r.return && r.return();
      else if (n)
        a = !0;
      else {
        for (a = n = !0; a && !i; )
          if ((s = r.next()).done)
            i = !0, r.return && r.return(), t(0);
          else
            try {
              a = !1, t(St(s.value));
            } catch (l) {
              if (r.throw)
                (i = !!r.throw(l).done) && t(0);
              else
                throw l;
            }
        n = !1;
      }
    }));
  };
}
var Xn = Zn;
function yt(e) {
  return (t) => {
    var r = !1;
    t(Ie((i) => {
      i === 1 ? r = !0 : r || (r = !0, t(St(e)), t(0));
    }));
  };
}
function Ir(e) {
  return (t) => {
    var r = !1, i = e({
      next(n) {
        r || t(St(n));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(Ie((n) => {
      n === 1 && !r && (r = !0, i());
    }));
  };
}
function Xr() {
  var e, t;
  return {
    source: gt(Ir((r) => (e = r.next, t = r.complete, wr))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function ei(e) {
  return Ir((t) => (e.then((r) => {
    Promise.resolve(r).then(() => {
      t.next(r), t.complete();
    });
  }), wr));
}
function Me(e) {
  return (t) => {
    var r = ge, i = !1;
    return t((n) => {
      n === 0 ? i = !0 : n.tag === 0 ? (r = n[0])(0) : i || (e(n[0]), r(0));
    }), {
      unsubscribe() {
        i || (i = !0, r(1));
      }
    };
  };
}
function ea(e) {
  Me((t) => {
  })(e);
}
function ta(e) {
  return new Promise((t) => {
    var r = ge, i;
    e((n) => {
      n === 0 ? Promise.resolve(i).then(t) : n.tag === 0 ? (r = n[0])(0) : (i = n[0], r(0));
    });
  });
}
var ra = (...e) => {
  for (var t = e[0], r = 1, i = e.length; r < i; r++)
    t = e[r](t);
  return t;
}, ia = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new sr(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new sr(e);
class wt extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(ia), i = ((n, a) => {
      var s = "";
      if (n)
        return `[Network] ${n.message}`;
      if (a)
        for (var u of a)
          s && (s += `
`), s += `[GraphQL] ${u.message}`;
      return s;
    })(t.networkError, r);
    super(i), this.name = "CombinedError", this.message = i, this.graphQLErrors = r, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var or = (e, t) => {
  for (var r = 0 | (t || 5381), i = 0, n = 0 | e.length; i < n; i++)
    r = (r << 5) + r + e.charCodeAt(i);
  return r;
}, $e = /* @__PURE__ */ new Set(), ti = /* @__PURE__ */ new WeakMap(), We = (e) => {
  if (e === null || $e.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return We(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += We(r) || "null";
    return t += "]";
  } else if (Vt !== et && e instanceof Vt || $t !== et && e instanceof $t)
    return "null";
  var i = Object.keys(e).sort();
  if (!i.length && e.constructor && e.constructor !== Object) {
    var n = ti.get(e) || Math.random().toString(36).slice(2);
    return ti.set(e, n), We({
      __key: n
    });
  }
  $e.add(e);
  var a = "{";
  for (var s of i) {
    var u = We(e[s]);
    u && (a.length > 1 && (a += ","), a += We(s) + ":" + u);
  }
  return $e.delete(e), a += "}";
}, ur = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || $e.has(r)))
    if (Array.isArray(r))
      for (var i = 0, n = r.length; i < n; i++)
        ur(e, `${t}.${i}`, r[i]);
    else if (r instanceof Vt || r instanceof $t)
      e.set(t, r);
    else {
      $e.add(r);
      for (var a of Object.keys(r))
        ur(e, `${t}.${a}`, r[a]);
    }
}, qt = (e) => ($e.clear(), We(e));
class et {
}
var Vt = typeof File < "u" ? File : et, $t = typeof Blob < "u" ? Blob : et, na = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, aa = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, sa = (e, t) => t % 2 == 0 ? e.replace(aa, `
`) : e, ri = (e) => e.split(na).map(sa).join("").trim(), ii = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), Pr = (e) => {
  var t;
  return typeof e == "string" ? t = ri(e) : e.loc && Ct.get(e.__key) === e ? t = e.loc.source.body : (t = ii.get(e) || ri(Oe(e)), ii.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, ni = (e) => {
  var t = or(Pr(e));
  if (e.definitions) {
    var r = Ri(e);
    r && (t = or(`
# ${r}`, t));
  }
  return t;
}, Fi = (e) => {
  var t, r;
  return typeof e == "string" ? (t = ni(e), r = Ct.get(t) || Wn(e)) : (t = e.__key || ni(e), r = Ct.get(t) || e), r.loc || Pr(r), r.__key = t, Ct.set(t, r), r;
}, Dt = (e, t, r) => {
  var i = t || {}, n = Fi(e), a = qt(i), s = n.__key;
  return a !== "{}" && (s = or(a, s)), {
    key: s,
    query: n,
    variables: i,
    extensions: r
  };
}, Ri = (e) => {
  for (var t of e.definitions)
    if (t.kind === Qe.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, oa = (e) => {
  for (var t of e.definitions)
    if (t.kind === Qe.OPERATION_DEFINITION)
      return t.operation;
}, lr = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var i = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new wt({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? i : t.hasNext,
    stale: !1
  };
}, cr = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = cr(e[r], t[r]);
    return e;
  }
  return t;
}, dr = (e, t, r) => {
  var i = e.error ? e.error.graphQLErrors : [], n = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, s = t.incremental;
  "path" in t && (s = [t]);
  var u = {
    data: e.data
  };
  if (s)
    for (var l of s) {
      Array.isArray(l.errors) && i.push(...l.errors), l.extensions && (Object.assign(a, l.extensions), n = !0);
      for (var d = "data", c = u, f = 0, p = l.path.length; f < p; d = l.path[f++])
        c = c[d] = Array.isArray(c[d]) ? [...c[d]] : {
          ...c[d]
        };
      if (l.items)
        for (var m = +d >= 0 ? d : 0, b = 0, S = l.items.length; b < S; b++)
          c[m + b] = cr(c[m + b], l.items[b]);
      else
        l.data !== void 0 && (c[d] = cr(c[d], l.data));
    }
  else
    u.data = t.data || e.data, i = t.errors || i;
  return {
    operation: e.operation,
    data: u.data,
    error: i.length ? new wt({
      graphQLErrors: i,
      response: r
    }) : void 0,
    extensions: n ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, qi = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new wt({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function Vi(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Pr(e.query),
    operationName: Ri(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var ua = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var i = new URL(e.context.url);
  for (var n in t) {
    var a = t[n];
    a && i.searchParams.set(n, typeof a == "object" ? qt(a) : a);
  }
  var s = i.toString();
  return s.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s;
}, la = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = qt(t), i = ((u) => {
      var l = /* @__PURE__ */ new Map();
      return (Vt !== et || $t !== et) && ($e.clear(), ur(l, "variables", u)), l;
    })(t.variables);
    if (i.size) {
      var n = new FormData();
      n.append("operations", r), n.append("map", qt({
        ...[...i.keys()].map((u) => [u])
      }));
      var a = 0;
      for (var s of i.values())
        n.append("" + a++, s);
      return n;
    }
    return r;
  }
}, ca = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, i = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (i.headers)
    for (var n in i.headers)
      r[n.toLowerCase()] = i.headers[n];
  var a = la(e, t);
  return typeof a == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...i,
    method: a ? "POST" : "GET",
    body: a,
    headers: r
  };
}, da = typeof TextDecoder < "u" ? new TextDecoder() : null, fa = /boundary="?([^=";]+)"?/i, pa = /data: ?([^\n]+)/, ai = (e) => e.constructor.name === "Buffer" ? e.toString() : da.decode(e);
async function* si(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield ai(t);
  else {
    var r = e.body.getReader(), i;
    try {
      for (; !(i = await r.read()).done; )
        yield ai(i.value);
    } finally {
      r.cancel();
    }
  }
}
async function* oi(e, t) {
  var r = "", i;
  for await (var n of e)
    for (r += n; (i = r.indexOf(t)) > -1; )
      yield r.slice(0, i), r = r.slice(i + t.length);
}
async function* ya(e, t, r) {
  var i = !0, n = null, a;
  try {
    yield await Promise.resolve();
    var s = (a = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", u;
    if (/multipart\/mixed/i.test(s))
      u = async function* (c, f) {
        var p = c.match(fa), m = "--" + (p ? p[1] : "-"), b = !0, S;
        for await (var x of oi(si(f), `\r
` + m)) {
          if (b) {
            b = !1;
            var q = x.indexOf(m);
            if (q > -1)
              x = x.slice(q + m.length);
            else
              continue;
          }
          try {
            yield S = JSON.parse(x.slice(x.indexOf(`\r
\r
`) + 4));
          } catch (w) {
            if (!S)
              throw w;
          }
          if (S && S.hasNext === !1)
            break;
        }
        S && S.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(s, a);
    else if (/text\/event-stream/i.test(s))
      u = async function* (c) {
        var f;
        for await (var p of oi(si(c), `

`)) {
          var m = p.match(pa);
          if (m) {
            var b = m[1];
            try {
              yield f = JSON.parse(b);
            } catch (S) {
              if (!f)
                throw S;
            }
            if (f && f.hasNext === !1)
              break;
          }
        }
        f && f.hasNext !== !1 && (yield {
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
      n = n ? dr(n, l, a) : lr(e, l, a), i = !1, yield n, i = !0;
    n || (yield n = lr(e, {}, a));
  } catch (d) {
    if (!i)
      throw d;
    yield qi(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : d, a);
  }
}
function ha(e, t, r) {
  var i;
  return typeof AbortController < "u" && (r.signal = (i = new AbortController()).signal), Or(() => {
    i && i.abort();
  })(re((n) => !!n)(Di(ya(e, t, r))));
}
var fr = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      fr(r, t);
  else if (typeof e == "object" && e !== null)
    for (var i in e)
      i === "__typename" && typeof e[i] == "string" ? t.add(e[i]) : fr(e[i], t);
  return t;
}, pr = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var i of e.definitions) {
      var n = pr(i);
      t = t || n !== i, r.push(n);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var a = [], s = e.kind === Qe.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var u of e.selectionSet.selections || []) {
        s = s || u.kind === Qe.FIELD && u.name.value === "__typename" && !u.alias;
        var l = pr(u);
        t = t || l !== u, a.push(l);
      }
      if (s || (t = !0, a.push({
        kind: Qe.FIELD,
        name: {
          kind: Qe.NAME,
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
}, ui = /* @__PURE__ */ new Map(), ma = (e) => {
  var t = Fi(e), r = ui.get(t.__key);
  return r || (ui.set(t.__key, r = pr(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, yr = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((n) => yr(n));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var i in e)
      i === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[i] = yr(e[i]);
    return r;
  } else
    return e;
};
function li(e) {
  var t = (r) => e(r);
  return t.toPromise = () => ta(xi(1)(re((r) => !r.stale && !r.hasNext)(t))), t.then = (r, i) => t.toPromise().then(r, i), t.subscribe = (r) => Me(r)(t), t;
}
function tt(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var ci = (e, t) => tt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), ba = () => {
}, Xt = ({ kind: e }) => e !== "mutation" && e !== "query", ga = ({ forward: e, client: t, dispatchDebug: r }) => {
  var i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = (u) => {
    var l = tt(u.kind, u);
    return l.query = ma(u.query), l;
  }, s = (u) => u.kind === "query" && u.context.requestPolicy !== "network-only" && (u.context.requestPolicy === "cache-only" || i.has(u.key));
  return (u) => {
    var l = Ye((c) => {
      var f = i.get(c.key);
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
      var p = f;
      return process.env.NODE_ENV !== "production" && (p = {
        ...p,
        operation: process.env.NODE_ENV !== "production" ? ci(c, {
          cacheOutcome: f ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (p.stale = !0, di(t, c)), p;
    })(re((c) => !Xt(c) && s(c))(u)), d = Xe((c) => {
      var { operation: f } = c;
      if (f) {
        var p = f.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (p = ((v) => [...fr(v, /* @__PURE__ */ new Set())])(c.data).concat(p)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var m = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && r({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${p}`,
            operation: f,
            data: {
              typenames: p,
              response: c
            },
            source: "cacheExchange"
          });
          for (var b = 0; b < p.length; b++) {
            var S = p[b], x = n.get(S);
            x || n.set(S, x = /* @__PURE__ */ new Set());
            for (var q of x.values())
              m.add(q);
            x.clear();
          }
          for (var w of m.values())
            i.has(w) && (f = i.get(w).operation, i.delete(w), di(t, f));
        } else if (f.kind === "query" && c.data) {
          i.set(f.key, c);
          for (var G = 0; G < p.length; G++) {
            var h = p[G], I = n.get(h);
            I || n.set(h, I = /* @__PURE__ */ new Set()), I.add(f.key);
          }
        }
      }
    })(e(re((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(Ye((c) => process.env.NODE_ENV !== "production" ? ci(c, {
      cacheOutcome: "miss"
    }) : c)(Ze([Ye(a)(re((c) => !Xt(c) && !s(c))(u)), re((c) => Xt(c))(u)])))));
    return Ze([l, d]);
  };
}, di = (e, t) => e.reexecuteOperation(tt(t.kind, t, {
  requestPolicy: "network-only"
})), fi = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: i, forward: n }) => {
  var a = r || ((s) => s.kind === "subscription" || !!t && (s.kind === "query" || s.kind === "mutation"));
  return (s) => {
    var u = bt((d) => {
      var { key: c } = d, f = re((p) => p.kind === "teardown" && p.key === c)(s);
      return Tr(f)(((p) => {
        var m = e(Vi(p), p);
        return Ir(({ next: b, complete: S }) => {
          var x = !1, q, w;
          return Promise.resolve().then(() => {
            x || (q = m.subscribe({
              next(G) {
                b(w = w ? dr(w, G) : lr(p, G));
              },
              error(G) {
                b(qi(p, G));
              },
              complete() {
                x || (x = !0, p.kind === "subscription" && i.reexecuteOperation(tt("teardown", p, p.context)), w && w.hasNext && b(dr(w, {
                  hasNext: !1
                })), S());
              }
            }));
          }), () => {
            x = !0, q && q.unsubscribe();
          };
        });
      })(d));
    })(re((d) => d.kind !== "teardown" && a(d))(s)), l = n(re((d) => d.kind === "teardown" || !a(d))(s));
    return Ze([u, l]);
  };
}, va = ({ forward: e, dispatchDebug: t }) => (r) => {
  var i = bt((a) => {
    var s = Vi(a), u = ua(a, s), l = ca(a, s);
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
    var d = Tr(re((c) => c.kind === "teardown" && c.key === a.key)(r))(ha(a, u, l));
    return process.env.NODE_ENV !== "production" ? Xe((c) => {
      var f = c.data ? void 0 : c.error;
      process.env.NODE_ENV !== "production" && t({
        type: f ? "fetchError" : "fetchSuccess",
        message: `A ${f ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: u,
          fetchOptions: l,
          value: f || c
        },
        source: "fetchExchange"
      });
    })(d) : d;
  })(re((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(r)), n = e(re((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(r));
  return Ze([i, n]);
}, Sa = (e) => ({ client: t, forward: r, dispatchDebug: i }) => e.reduceRight((n, a) => {
  var s = !1;
  return a({
    client: t,
    forward(u) {
      if (process.env.NODE_ENV !== "production") {
        if (s)
          throw new Error("forward() must only be called once in each Exchange.");
        s = !0;
      }
      return gt(n(gt(u)));
    },
    dispatchDebug(u) {
      process.env.NODE_ENV !== "production" && i({
        timestamp: Date.now(),
        source: a.name,
        ...u
      });
    }
  });
}, r), $i = ({ onOperation: e, onResult: t, onError: r }) => ({ forward: i }) => (n) => bt((a) => {
  r && a.error && r(a.error, a.operation);
  var s = t && t(a) || a;
  return "then" in s ? ei(s) : yt(s);
})(i(bt((a) => {
  var s = e && e(a) || a;
  return "then" in s ? ei(s) : yt(s);
})(n))), wa = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = Xe((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var i = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: i,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(i);
  }
})(t)), re((r) => !1)(t)), pi = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), s = [], u = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = Xr();
  function d(h) {
    (h.kind === "mutation" || h.kind === "teardown" || !a.has(h.key)) && (h.kind === "teardown" ? a.delete(h.key) : h.kind !== "mutation" && a.add(h.key), l.next(h));
  }
  var c = !1;
  function f(h) {
    if (h && d(h), !c) {
      for (c = !0; c && (h = s.shift()); )
        d(h);
      c = !1;
    }
  }
  var p = (h) => {
    var I = Tr(re((v) => v.kind === "teardown" && v.key === h.key)(l.source))(re((v) => v.operation.kind === h.kind && v.operation.key === h.key && (!v.operation.context._instance || v.operation.context._instance === h.context._instance))(G));
    return h.kind !== "query" ? I = Ci((v) => !!v.hasNext, !0)(I) : I = Zr((v) => {
      var B = yt(v);
      return v.stale || v.hasNext ? B : Ze([B, Ye(() => (v.stale = !0, v))(xi(1)(re((xe) => xe.key === h.key)(l.source)))]);
    })(I), h.kind !== "mutation" ? I = Or(() => {
      a.delete(h.key), i.delete(h.key), n.delete(h.key), c = !1;
      for (var v = s.length - 1; v >= 0; v--)
        s[v].key === h.key && s.splice(v, 1);
      d(tt("teardown", h, h.context));
    })(Xe((v) => {
      if (v.stale) {
        for (var B of s)
          if (B.key === v.operation.key) {
            a.delete(B.key);
            break;
          }
      } else
        v.hasNext || a.delete(h.key);
      i.set(h.key, v);
    })(I)) : I = Hr(() => {
      d(h);
    })(I), t.maskTypename && (I = Ye((v) => ({
      ...v,
      data: yr(v.data, !0)
    }))(I)), gt(I);
  }, m = this instanceof e ? this : Object.create(e.prototype), b = Object.assign(m, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(h) {
      h.kind === "teardown" ? f(h) : (h.kind === "mutation" || n.has(h.key)) && (s.push(h), Promise.resolve().then(f));
    },
    createRequestOperation(h, I, v) {
      v || (v = {});
      var B;
      if (process.env.NODE_ENV !== "production" && h !== "teardown" && (B = oa(I.query)) !== h)
        throw new Error(`Expected operation of type "${h}" but found "${B}"`);
      return tt(h, I, {
        _instance: h === "mutation" ? r = r + 1 | 0 : void 0,
        ...u,
        ...v,
        requestPolicy: v.requestPolicy || u.requestPolicy,
        suspense: v.suspense || v.suspense !== !1 && b.suspense
      });
    },
    executeRequestOperation(h) {
      return h.kind === "mutation" ? li(p(h)) : li(Hn(() => {
        var I = n.get(h.key);
        I || n.set(h.key, I = p(h)), I = Hr(() => {
          f(h);
        })(I);
        var v = i.get(h.key);
        return h.kind === "query" && v && (v.stale || v.hasNext) ? Zr(yt)(Ze([I, re((B) => B === i.get(h.key))(yt(v))])) : I;
      }));
    },
    executeQuery(h, I) {
      var v = b.createRequestOperation("query", h, I);
      return b.executeRequestOperation(v);
    },
    executeSubscription(h, I) {
      var v = b.createRequestOperation("subscription", h, I);
      return b.executeRequestOperation(v);
    },
    executeMutation(h, I) {
      var v = b.createRequestOperation("mutation", h, I);
      return b.executeRequestOperation(v);
    },
    readQuery(h, I, v) {
      var B = null;
      return Me((xe) => {
        B = xe;
      })(b.query(h, I, v)).unsubscribe(), B;
    },
    query: (h, I, v) => b.executeQuery(Dt(h, I), v),
    subscription: (h, I, v) => b.executeSubscription(Dt(h, I), v),
    mutation: (h, I, v) => b.executeMutation(Dt(h, I), v)
  }), S = ba;
  if (process.env.NODE_ENV !== "production") {
    var { next: x, source: q } = Xr();
    b.subscribeToDebugTarget = (h) => Me(h)(q), S = x;
  }
  var w = Sa(t.exchanges), G = gt(w({
    client: b,
    dispatchDebug: S,
    forward: wa({
      dispatchDebug: S
    })
  })(l.source));
  return ea(G), b;
};
function le(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Re(e) {
  return le(e) === "object";
}
function Oa(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function yi(e, t) {
  return e.length < 124 ? e : t;
}
const Ta = "graphql-transport-ws";
var ue;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(ue || (ue = {}));
var K;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(K || (K = {}));
function Mi(e) {
  if (!Re(e))
    throw new Error(`Message is expected to be an object, but got ${le(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${le(e.type)}`);
  switch (e.type) {
    case K.ConnectionInit:
    case K.ConnectionAck:
    case K.Ping:
    case K.Pong: {
      if (e.payload != null && !Re(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case K.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${le(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Re(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${le(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${le(e.payload.query)}`);
      if (e.payload.variables != null && !Re(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${le(e.payload.variables)}`);
      if (e.payload.operationName != null && le(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${le(e.payload.operationName)}`);
      if (e.payload.extensions != null && !Re(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${le(e.payload.extensions)}`);
      break;
    }
    case K.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${le(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Re(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${le(e.payload)}`);
      break;
    }
    case K.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${le(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Oa(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case K.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${le(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Ia(e, t) {
  return Mi(typeof e == "string" ? JSON.parse(e, t) : e);
}
function dt(e, t) {
  return Mi(e), JSON.stringify(e, t);
}
function Pa(e) {
  const {
    url: t,
    connectionParams: r,
    lazy: i = !0,
    onNonLazyError: n = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: s = 0,
    disablePong: u,
    connectionAckWaitTimeout: l = 0,
    retryAttempts: d = 5,
    retryWait: c = async function($) {
      let F = 1e3;
      for (let _ = 0; _ < $; _++)
        F *= 2;
      await new Promise((_) => setTimeout(_, F + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: f = Nt,
    isFatalConnectionProblem: p,
    on: m,
    webSocketImpl: b,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: S = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, ($) => {
        const F = Math.random() * 16 | 0;
        return ($ == "x" ? F : F & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: x,
    jsonMessageReviver: q
  } = e;
  let w;
  if (b) {
    if (!Aa(b))
      throw new Error("Invalid WebSocket implementation provided");
    w = b;
  } else
    typeof WebSocket < "u" ? w = WebSocket : typeof global < "u" ? w = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (w = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!w)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const G = w, h = (() => {
    const P = (() => {
      const F = {};
      return {
        on(_, U) {
          return F[_] = U, () => {
            delete F[_];
          };
        },
        emit(_) {
          var U;
          "id" in _ && ((U = F[_.id]) === null || U === void 0 || U.call(F, _));
        }
      };
    })(), $ = {
      connecting: m != null && m.connecting ? [m.connecting] : [],
      opened: m != null && m.opened ? [m.opened] : [],
      connected: m != null && m.connected ? [m.connected] : [],
      ping: m != null && m.ping ? [m.ping] : [],
      pong: m != null && m.pong ? [m.pong] : [],
      message: m != null && m.message ? [P.emit, m.message] : [P.emit],
      closed: m != null && m.closed ? [m.closed] : [],
      error: m != null && m.error ? [m.error] : []
    };
    return {
      onMessage: P.on,
      on(F, _) {
        const U = $[F];
        return U.push(_), () => {
          U.splice(U.indexOf(_), 1);
        };
      },
      emit(F, ..._) {
        for (const U of [...$[F]])
          U(..._);
      }
    };
  })();
  function I(P) {
    const $ = [
      // errors are fatal and more critical than close events, throw them first
      h.on("error", (F) => {
        $.forEach((_) => _()), P(F);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      h.on("closed", (F) => {
        $.forEach((_) => _()), P(F);
      })
    ];
  }
  let v, B = 0, xe, Ue = !1, Ge = 0, Tt = !1;
  async function ot() {
    clearTimeout(xe);
    const [P, $] = await (v ?? (v = new Promise((U, Pe) => (async () => {
      if (Ue) {
        if (await c(Ge), !B)
          return v = void 0, Pe({ code: 1e3, reason: "All Subscriptions Gone" });
        Ge++;
      }
      h.emit("connecting");
      const D = new G(typeof t == "function" ? await t() : t, Ta);
      let _e, Ce;
      function Fe() {
        isFinite(s) && s > 0 && (clearTimeout(Ce), Ce = setTimeout(() => {
          D.readyState === G.OPEN && (D.send(dt({ type: K.Ping })), h.emit("ping", !1, void 0));
        }, s));
      }
      I((Y) => {
        v = void 0, clearTimeout(_e), clearTimeout(Ce), Pe(Y), Nt(Y) && Y.code === 4499 && (D.close(4499, "Terminated"), D.onerror = null, D.onclose = null);
      }), D.onerror = (Y) => h.emit("error", Y), D.onclose = (Y) => h.emit("closed", Y), D.onopen = async () => {
        try {
          h.emit("opened", D);
          const Y = typeof r == "function" ? await r() : r;
          if (D.readyState !== G.OPEN)
            return;
          D.send(dt(Y ? {
            type: K.ConnectionInit,
            payload: Y
          } : {
            type: K.ConnectionInit
            // payload is completely absent if not provided
          }, x)), isFinite(l) && l > 0 && (_e = setTimeout(() => {
            D.close(ue.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), Fe();
        } catch (Y) {
          h.emit("error", Y), D.close(ue.InternalClientError, yi(Y instanceof Error ? Y.message : new Error(Y).message, "Internal client error"));
        }
      };
      let De = !1;
      D.onmessage = ({ data: Y }) => {
        try {
          const z = Ia(Y, q);
          if (h.emit("message", z), z.type === "ping" || z.type === "pong") {
            h.emit(z.type, !0, z.payload), z.type === "pong" ? Fe() : u || (D.send(dt(z.payload ? {
              type: K.Pong,
              payload: z.payload
            } : {
              type: K.Pong
              // payload is completely absent if not provided
            })), h.emit("pong", !1, z.payload));
            return;
          }
          if (De)
            return;
          if (z.type !== K.ConnectionAck)
            throw new Error(`First message cannot be of type ${z.type}`);
          clearTimeout(_e), De = !0, h.emit("connected", D, z.payload), Ue = !1, Ge = 0, U([
            D,
            new Promise((It, Be) => I(Be))
          ]);
        } catch (z) {
          D.onmessage = null, h.emit("error", z), D.close(ue.BadResponse, yi(z instanceof Error ? z.message : new Error(z).message, "Bad response"));
        }
      };
    })())));
    P.readyState === G.CLOSING && await $;
    let F = () => {
    };
    const _ = new Promise((U) => F = U);
    return [
      P,
      F,
      Promise.race([
        // wait for
        _.then(() => {
          if (!B) {
            const U = () => P.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? xe = setTimeout(() => {
              P.readyState === G.OPEN && U();
            }, a) : U();
          }
        }),
        // or
        $
      ])
    ];
  }
  function ve(P) {
    if (Nt(P) && (Ea(P.code) || [
      ue.InternalServerError,
      ue.InternalClientError,
      ue.BadRequest,
      ue.BadResponse,
      ue.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      ue.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      ue.SubscriberAlreadyExists,
      ue.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(P.code)))
      throw P;
    if (Tt)
      return !1;
    if (Nt(P) && P.code === 1e3)
      return B > 0;
    if (!d || Ge >= d || !f(P) || p != null && p(P))
      throw P;
    return Ue = !0;
  }
  return i || (async () => {
    for (B++; ; )
      try {
        const [, , P] = await ot();
        await P;
      } catch (P) {
        try {
          if (!ve(P))
            return;
        } catch ($) {
          return n == null ? void 0 : n($);
        }
      }
  })(), {
    on: h.on,
    subscribe(P, $) {
      const F = S(P);
      let _ = !1, U = !1, Pe = () => {
        B--, _ = !0;
      };
      return (async () => {
        for (B++; ; )
          try {
            const [D, _e, Ce] = await ot();
            if (_)
              return _e();
            const Fe = h.onMessage(F, (De) => {
              switch (De.type) {
                case K.Next: {
                  $.next(De.payload);
                  return;
                }
                case K.Error: {
                  U = !0, _ = !0, $.error(De.payload), Pe();
                  return;
                }
                case K.Complete: {
                  _ = !0, Pe();
                  return;
                }
              }
            });
            D.send(dt({
              id: F,
              type: K.Subscribe,
              payload: P
            }, x)), Pe = () => {
              !_ && D.readyState === G.OPEN && D.send(dt({
                id: F,
                type: K.Complete
              }, x)), B--, _ = !0, _e();
            }, await Ce.finally(Fe);
            return;
          } catch (D) {
            if (!ve(D))
              return;
          }
      })().then(() => {
        U || $.complete();
      }).catch((D) => {
        $.error(D);
      }), () => {
        _ || Pe();
      };
    },
    async dispose() {
      if (Tt = !0, v) {
        const [P] = await v;
        P.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      v && h.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function Nt(e) {
  return Re(e) && "code" in e && "reason" in e;
}
function Ea(e) {
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
function Aa(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
function ka(e) {
  return typeof e == "object" && e !== null;
}
function _a(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const Na = /\r\n|[\n\r]/g;
function hr(e, t) {
  let r = 0, i = 1;
  for (const n of e.body.matchAll(Na)) {
    if (typeof n.index == "number" || _a(!1), n.index >= t)
      break;
    r = n.index + n[0].length, i += 1;
  }
  return {
    line: i,
    column: t + 1 - r
  };
}
function ja(e) {
  return Ui(
    e.source,
    hr(e.source, e.start)
  );
}
function Ui(e, t) {
  const r = e.locationOffset.column - 1, i = "".padStart(r) + e.body, n = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, u = t.line === 1 ? r : 0, l = t.column + u, d = `${e.name}:${s}:${l}
`, c = i.split(/\r\n|[\n\r]/g), f = c[n];
  if (f.length > 120) {
    const p = Math.floor(l / 80), m = l % 80, b = [];
    for (let S = 0; S < f.length; S += 80)
      b.push(f.slice(S, S + 80));
    return d + hi([
      [`${s} |`, b[0]],
      ...b.slice(1, p + 1).map((S) => ["|", S]),
      ["|", "^".padStart(m)],
      ["|", b[p + 1]]
    ]);
  }
  return d + hi([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, c[n - 1]],
    [`${s} |`, f],
    ["|", "^".padStart(l)],
    [`${s + 1} |`, c[n + 1]]
  ]);
}
function hi(e) {
  const t = e.filter(([i, n]) => n !== void 0), r = Math.max(...t.map(([i]) => i.length));
  return t.map(([i, n]) => i.padStart(r) + (n ? " " + n : "")).join(`
`);
}
function xa(e) {
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
class Mt extends Error {
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
    var i, n, a;
    const { nodes: s, source: u, positions: l, path: d, originalError: c, extensions: f } = xa(r);
    super(t), this.name = "GraphQLError", this.path = d ?? void 0, this.originalError = c ?? void 0, this.nodes = mi(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const p = mi(
      (i = this.nodes) === null || i === void 0 ? void 0 : i.map((b) => b.loc).filter((b) => b != null)
    );
    this.source = u ?? (p == null || (n = p[0]) === null || n === void 0 ? void 0 : n.source), this.positions = l ?? (p == null ? void 0 : p.map((b) => b.start)), this.locations = l && u ? l.map((b) => hr(u, b)) : p == null ? void 0 : p.map((b) => hr(b.source, b.start));
    const m = ka(
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Mt) : Object.defineProperty(this, "stack", {
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

` + ja(r.loc));
    else if (this.source && this.locations)
      for (const r of this.locations)
        t += `

` + Ui(this.source, r);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function mi(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
var Ke = null;
typeof WebSocket < "u" ? Ke = WebSocket : typeof MozWebSocket < "u" ? Ke = MozWebSocket : typeof global < "u" ? Ke = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Ke = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ke = self.WebSocket || self.MozWebSocket);
const Ca = Ke;
function me(e) {
  if (typeof e != "object")
    return e;
  var t, r, i = Object.prototype.toString.call(e);
  if (i === "[object Object]") {
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
  if (i === "[object Array]") {
    for (t = e.length, r = Array(t); t--; )
      r[t] = me(e[t]);
    return r;
  }
  return i === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(n) {
    r.add(me(n));
  }), r) : i === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(n, a) {
    r.set(me(a), me(n));
  }), r) : i === "[object Date]" ? /* @__PURE__ */ new Date(+e) : i === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : i === "[object DataView]" ? new e.constructor(me(e.buffer)) : i === "[object ArrayBuffer]" ? e.slice(0) : i.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var oe;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(oe || (oe = {}));
class Da {
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
    }), this.__gadget.instantiatedFields = me(t), this.__gadget.persistedFields = me(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((i) => this.__gadget.fieldKeysTracker[i] = !0));
    const r = {
      get: (i, n) => {
        if (n in this)
          return this[n];
        if (n in i)
          return i[n];
      },
      set: (i, n, a) => (this.trackKey(n), i[n.toString()] = a, !0)
    };
    return new Proxy(this.__gadget.fields, r);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const r = t.toString();
    this.__gadget.fieldKeysTracker[r] || (this.__gadget.fieldKeysTracker[r] = !0, this.__gadget.fieldKeys.push(r));
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = oe.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const r = t == oe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((i) => !jt(r[i], this.__gadget.fields[i]));
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
  changes(t, r = oe.SinceLoaded) {
    const n = (typeof t == "string" ? r : t || r) == oe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = n[t], s = this.__gadget.fields[t], u = !jt(s, a);
      return u ? { changed: u, current: s, previous: a } : { changed: u };
    } else {
      const a = {};
      for (let s = 0; s < this.__gadget.fieldKeys.length; s++) {
        const u = this.__gadget.fieldKeys[s];
        jt(n[u], this.__gadget.fields[u]) || (a[u] = { current: this.__gadget.fields[u], previous: n[u] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = oe.SinceLoaded) {
    const r = t == oe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, i = {};
    for (let n = 0; n < this.__gadget.fieldKeys.length; n++) {
      const a = this.__gadget.fieldKeys[n];
      jt(r[a], this.__gadget.fields[a]) || (i[a] = this.__gadget.fields[a]);
    }
    return i;
  }
  changed(t, r = oe.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = oe.SinceLoaded) {
    t == oe.SinceLoaded ? this.__gadget.instantiatedFields = me(this.__gadget.fields) : t == oe.SinceLastPersisted && (this.__gadget.persistedFields = me(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = oe.SinceLoaded) {
    let r;
    t == oe.SinceLoaded ? r = Object.keys(this.__gadget.instantiatedFields) : r = Object.keys(this.__gadget.persistedFields);
    for (const i of this.__gadget.fieldKeys)
      r.includes(i) || delete this.__gadget.fields[i];
    t == oe.SinceLoaded ? Object.assign(this.__gadget.fields, me(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, me(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return gr({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const Gi = Da;
class Bi extends Error {
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
class mr extends Error {
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
class Bt extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class bi extends Error {
  constructor(t) {
    let r;
    br(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class Fa extends Error {
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
class Ra extends Error {
  constructor(t, r, i, n) {
    const a = r.slice(0, 3), s = r.length > 3 ? `, and ${r.length - 3} more error${r.length > 4 ? "s" : ""} need${r.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${i ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: u, message: l }) => `${u} ${l}`).join(", ")}${s}.`), Object.defineProperty(this, "code", {
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
    }), this.validationErrors = r, this.modelApiIdentifier = i, this.record = n;
  }
}
class Li extends Error {
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
class zi extends Error {
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
class qa extends Error {
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
function gi(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const rt = (e, t) => {
  const r = t.length;
  let i = 0;
  for (; e != null && i < r; )
    e = e[t[i++]];
  return i && i == r ? e : void 0;
}, br = (e) => (e == null ? void 0 : e.type) == "close", ke = (e, t) => typeof e != "string" ? "" : Lt(e, t), vi = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Lt = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (i) => vi(i)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (i) => i.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (i, n, a, s, u) => (n || (n = ""), "" + n + vi(a))), r;
}, Va = (e) => `${Lt(e)}Sort`, $a = (e) => `${Lt(e)}Filter`, Ma = (e, t, r) => new Li(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), Ua = (e, t) => {
  if (e.fetching)
    return;
  const r = rt(e.data, t);
  if (r === void 0)
    return new Bi(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null)
    return new zi(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, je = (e, t, r = !1) => {
  var i;
  if (e.error)
    throw e.error instanceof wt && (!((i = e.error.networkError) === null || i === void 0) && i.length) && (e.error.message = e.error.networkError.map((u) => "[Network] " + u.message).join(`
`)), e.error;
  const n = rt(e.data, t), a = rt(n, ["edges"]), s = a ?? n;
  if (n === void 0)
    throw new Bi(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (n === null || r && Array.isArray(s) && s.length === 0)
    throw new zi(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return n;
}, ht = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof wt && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((n) => "[Network] " + n.message).join(`
`)), e.error;
  const i = rt(e.data, t);
  return i ?? null;
}, Er = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Ra(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Li(e.message) : new Bt(e.message, e.code);
}, qe = (e, t) => {
  const r = je(e, t);
  if (!r.success) {
    const i = r.errors && r.errors[0];
    throw i ? Er(i) : new Bt("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return r;
}, Wi = (e) => {
  var t, r, i, n;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new Nn((n = (i = e.data) === null || i === void 0 ? void 0 : i.gadgetMeta) === null || n === void 0 ? void 0 : n.hydrations);
}, mt = (e, t) => {
  const r = Wi(e);
  return r && (t = r.apply(t)), new Gi(t);
}, Ar = (e, t) => {
  const r = Wi(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((i) => new Gi(i));
}, vt = (e, t) => {
  const r = t.edges.map((i) => i.node);
  return Ar(e, r);
}, gr = (e) => {
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
          const i = e[r];
          t[r] = i === void 0 ? null : gr(i);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const r of Object.keys(e)) {
          const i = gr(e[r]);
          i !== void 0 && (t[r] = i);
        }
        return t;
      }
    }
  }
}, er = "gstk", Si = (e) => {
  try {
    const t = window[e];
    return t.setItem(er, er), t.removeItem(er), !0;
  } catch {
    return !1;
  }
}, wi = Object.prototype.toString, Oi = Object.getPrototypeOf, Ti = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, ft = (e, t, r) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (r.indexOf(e) > -1 && r.indexOf(t) > -1)
    return !0;
  const i = wi.call(e), n = wi.call(t);
  let a, s, u;
  if (r.push(e, t), i != n || (a = Ti(e), s = Ti(t), a.length != s.length || a.some(function(l) {
    return !ft(e[l], t[l], r);
  })))
    return !1;
  switch (i.slice(8, -1)) {
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
        if (u = a.next(), !ft(u.value, s.next().value, r))
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
        if (!(!(u in e) && !(u in t)) && (u in e != u in t || !ft(e[u], t[u], r)))
          return !1;
      return !0;
    case "Object":
      return ft(Oi(e), Oi(t), r);
    default:
      return !1;
  }
}, jt = (e, t) => ft(e, t, []);
class Ki extends Error {
}
class Ga {
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
    throw je(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Ki("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    je(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    je(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Ba {
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
const La = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((i) => i.kind == "Field").name.value;
}, Ii = $i({
  onOperation: (e) => {
    var t, r;
    (t = (r = e.context).operationName) !== null && t !== void 0 || (r.operationName = La(e.query) || "unknown");
  }
}), za = $i({
  onOperation: (e) => {
    e.context.url && e.context.operationName && !e.context.url.includes("?") && (e.context.url += `?operation=${e.context.operationName}`);
  }
}), Wa = 2, Ka = 4800, Qa = 1e4, Ja = [ue.ConnectionAcknowledgementTimeout, ue.ConnectionInitialisationTimeout], Pi = Symbol.for("gadget/connection"), Ya = "token", Ha = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var H;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(H || (H = {}));
class Qi {
  constructor(t) {
    var r, i, n, a, s;
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
      value: async (u, l) => {
        let d, c;
        if (l ? (d = l, c = u) : (d = u, c = {}), this.currentTransaction)
          return await d(this.currentTransaction);
        let f = null, p;
        try {
          f = await this.waitForOpenedConnection({
            isFatalConnectionProblem(S) {
              return console.warn("Transport error encountered during transaction processing", S), !0;
            },
            connectionAckWaitTimeout: Ka,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const m = new pi({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              Ii,
              ...this.exchanges.beforeAsync,
              fi({
                forwardSubscription(S) {
                  const x = { ...S, query: S.query || "" };
                  return {
                    subscribe: (q) => ({
                      unsubscribe: f.subscribe(x, q)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          m[Pi] = this, p = new Ga(m, f), this.currentTransaction = p, await p.start();
          const b = await d(p);
          return await p.commit(), b;
        } catch (m) {
          try {
            p != null && p.open && await p.rollback();
          } catch (b) {
            b instanceof Ki || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", b);
          }
          throw br(m) ? new bi(m) : m;
        } finally {
          await (f == null ? void 0 : f.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (u, l = {}) => {
        var d;
        u = Za(u, (d = this.options.baseRouteURL) !== null && d !== void 0 ? d : this.options.endpoint), this.isGadgetRequest(u) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == H.Custom && await this.options.authenticationMode.custom.processFetch(u, l));
        const c = await this._fetchImplementation(u, l);
        if (this.authenticationMode == H.BrowserSession) {
          const f = c.headers.get("x-set-authorization"), p = f != null && f.startsWith("Session ") ? f.replace("Session ", "") : null;
          p && this.sessionTokenStore.setItem(this.sessionStorageKey, p);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...u) => {
      const { fetch: l } = await import("./browser-ponyfill-6e7a1b03.js").then((d) => d.b);
      return await l(...u);
    }, this.websocketImplementation = (i = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && i !== void 0 ? i : Ca, this.websocketsEndpoint = (n = t.websocketsEndpoint) !== null && n !== void 0 ? n : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Ya}-${this.endpoint}`;
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
    const r = !t || typeof t == "boolean" ? pt.Durable : t.storageType;
    let i;
    r == pt.Durable && Si("localStorage") ? i = window.localStorage : r == pt.Session && Si("sessionStorage") ? i = window.sessionStorage : i = new Ba(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && i.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = i, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), vr(this.options.endpoint))
      return !!vr(r);
    const i = new URL(this.options.endpoint).host;
    return r.includes(i);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Ii, za];
    typeof window < "u" && t.push(ga), t.push(...this.exchanges.beforeAsync, va, fi({
      forwardSubscription: (i) => ({
        subscribe: (n) => {
          const a = { ...i, query: i.query || "" };
          return {
            unsubscribe: this.getBaseSubscriptionClient().subscribe(a, n)
          };
        }
      })
    }), ...this.exchanges.afterAll);
    const r = new pi({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[Pi] = this, r;
  }
  newSubscriptionClient(t) {
    if (!this.websocketImplementation)
      throw new Error("Can't use this GadgetClient for this subscription-based operation as there's no global WebSocket implementation available. Please pass one as the `websocketImplementation` option to the GadgetClient constructor.");
    let r = this.websocketsEndpoint;
    if (t != null && t.urlParams) {
      const i = new URLSearchParams();
      for (const [n, a] of Object.entries(t.urlParams))
        a && i.set(n, a);
      r += "?" + i.toString();
    }
    return Pa({
      url: r,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var i, n;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == H.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == H.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == H.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == H.Custom && await ((n = (i = this.options.authenticationMode) === null || i === void 0 ? void 0 : i.custom) === null || n === void 0 ? void 0 : n.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (i, n) => {
          var a, s, u, l, d, c;
          if (this.authenticationMode == H.BrowserSession && (n != null && n.sessionToken)) {
            const f = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (f !== null && typeof f == "object" ? f.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, n.sessionToken);
          }
          (l = (u = (s = this.subscriptionClientOptions) === null || s === void 0 ? void 0 : s.on) === null || u === void 0 ? void 0 : u.connected) === null || l === void 0 || l.call(u, i, n), (c = (d = t == null ? void 0 : t.on) === null || d === void 0 ? void 0 : d.connected) === null || c === void 0 || c.call(d, i, n);
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
      r.authorization = "Basic " + Ha("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == H.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == H.BrowserSession) {
      const i = this.sessionTokenStore.getItem(this.sessionStorageKey);
      i && (r.authorization = `Session ${i}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), i = [], n = t.connectionAttempts || Wa;
    const a = t.connectionGlobalTimeoutMs || Qa, s = () => {
      i.forEach((u) => u()), i = [];
    };
    return await new Promise((u, l) => {
      const d = setTimeout(() => {
        this.disposeClient(r), f(new Fa("Timeout opening websocket connection to Gadget API"));
      }, a), c = (b) => {
        if (br(b) && Ja.includes(b.code) && n > 0) {
          n -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), m();
          return;
        }
        clearTimeout(d), l(new bi(b));
      }, f = (b) => {
        clearTimeout(d), l(b);
      }, p = () => {
        clearTimeout(d), u(r);
      }, m = () => {
        s(), i.push(r.on("connected", p)), i.push(r.on("closed", c)), i.push(r.on("error", f));
      };
      m();
    }).finally(s);
  }
  disposeClient(t) {
    const r = t.dispose();
    r && r.catch((i) => console.error(`Error closing SubscriptionClient: ${i.message}`));
  }
  getBaseSubscriptionClient() {
    return this.baseSubscriptionClient || (this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 })), this.baseSubscriptionClient;
  }
}
Object.defineProperty(Qi, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.9"
});
function Za(e, t) {
  if (typeof e != "string")
    return e;
  if (vr(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function vr(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class it extends Array {
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
  static boot(t, r, i) {
    const n = new it();
    return n.push(...r), n.modelManager = t, n.pagination = i, Object.freeze(n), n;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Bt("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new mr("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const { first: r, last: i, before: n, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      after: this.pagination.pageInfo.endCursor,
      first: r || i
    });
  }
  async previousPage() {
    var t;
    if (!this.hasPreviousPage)
      throw new mr("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: i, after: n, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: i || r
    });
  }
}
const Sr = (e) => Object.entries(e).flatMap(([t, r]) => {
  if (typeof r == "boolean")
    return r ? t : !1;
  if (r instanceof _r) {
    let i = "";
    const n = Object.entries(r.args).filter(([a, s]) => s != null).map(([a, s]) => {
      var u;
      return `${a}: ${s instanceof Nr ? `$${(u = s.name) !== null && u !== void 0 ? u : a}` : JSON.stringify(s)}`;
    });
    return n.length > 0 && (i = `(${n.join(", ")})`), r.subselection ? [`${t}${i} {`, ...Sr(r.subselection), "}"] : `${t}${i}`;
  } else
    return [`${t} {`, ...Sr(r), "}"];
}).filter((t) => !!t).map((t) => "  " + t), kr = (e) => {
  const t = {}, r = (i) => {
    let n = 1;
    if (t[i]) {
      for (; t[`${i}${n}`]; )
        n++;
      return `${i}${n}`;
    }
    return i;
  };
  return Object.entries(e).forEach(([i, n]) => {
    n instanceof _r ? Object.entries(n.args).forEach(([a, s]) => {
      var u;
      s instanceof Nr && (t[(u = s.name) !== null && u !== void 0 ? u : r(a)] = s);
    }) : typeof n == "object" && n !== null && Object.assign(t, kr(n));
  }), t;
}, Xa = (e) => {
  const t = kr(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([i, n]) => `$${i}: ${n.type}`).join(", ")})`;
};
class _r {
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
class Nr {
  constructor(t, r, i) {
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
      value: i
    });
  }
  present() {
    return this.value != null;
  }
}
const nt = (e, t) => new _r(e, t), te = (e) => new Nr(e.type + (e.required ? "!" : ""), e.name, e.value), es = (e) => {
  var t;
  const r = Xa(e), i = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${r}${i} {
${Sr(e.fields).join(`
`)}
}`;
}, at = (e) => {
  const t = kr(e.fields);
  return {
    query: es(e),
    variables: Object.entries(t ?? {}).reduce((r, [i, n]) => (typeof n.value < "u" && (r[i] = n.value), r), {})
  };
}, Ot = `
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
`, st = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, ts = (e) => `
    query InternalFind${ke(e)}($id: GadgetID!, $select: [String!]) {
      ${st(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, Ji = (e, t) => ({
  search: t != null && t.search ? te({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? te({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? te({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? te({ value: Yi(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), rs = (e, t) => {
  const r = ke(e), i = Ji(r, t);
  return at({
    type: "query",
    name: `InternalFindFirst${r}`,
    fields: {
      internal: {
        [`list${r}`]: nt({
          ...i,
          first: te({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, is = (e, t) => {
  const r = ke(e), i = Ji(r, t);
  return at({
    type: "query",
    name: `InternalFindMany${r}`,
    fields: {
      internal: {
        [`list${r}`]: nt({
          ...i,
          after: te({ value: t == null ? void 0 : t.after, type: "String" }),
          before: te({ value: t == null ? void 0 : t.before, type: "String" }),
          first: te({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: te({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, ns = (e) => {
  const t = ke(e);
  return `
    ${Ot}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${st(e)}
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
}, as = (e, t) => {
  const r = ke(e), i = ke(t);
  return `
    ${Ot}

    mutation InternalBulkCreate${i}($records: [Internal${r}Input]!) {
      ${st(e)}
      internal {
        bulkCreate${i}(${t}: $records) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${t}
        }
      }
    }
  `;
}, ss = (e) => {
  const t = ke(e);
  return `
    ${Ot}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${st(e)}
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
}, os = (e) => {
  const t = ke(e);
  return `
    ${Ot}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${st(e)}
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
}, us = (e) => {
  const t = ke(e);
  return `
    ${Ot}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${st(e)}
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
class Te {
  constructor(t, r, i) {
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
      value: i
    }), Object.defineProperty(this, "capitalizedApiIdentifier", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.capitalizedApiIdentifier = Lt(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((i) => i === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let i = t;
    if (!this.validateRecord(t))
      throw new Bt(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
    return this.apiIdentifier in t && (i = i[this.apiIdentifier]), i;
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
  async findOne(t, r, i = !0) {
    const n = await this.connection.currentClient.query(ts(this.apiIdentifier), { id: t, select: Yi(r == null ? void 0 : r.select) }).toPromise(), s = (i ? je : ht)(n, ["internal", this.apiIdentifier]);
    return mt(n, s);
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
    const i = await this.findOne(t, r, !1);
    return i.isEmpty() ? null : i;
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
    const r = is(this.apiIdentifier, t), i = await this.connection.currentClient.query(r.query, r.variables).toPromise(), n = ht(i, ["internal", `list${this.capitalizedApiIdentifier}`]), a = vt(i, n);
    return it.boot(this, a, { options: t, pageInfo: n.pageInfo });
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
    const i = rs(this.apiIdentifier, t), n = await this.connection.currentClient.query(i.query, i.variables).toPromise();
    let a;
    r === !1 ? a = ht(n, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = je(n, ["internal", `list${this.capitalizedApiIdentifier}`], r);
    const s = vt(n, a);
    return it.boot(this, s, { options: t, pageInfo: a.pageInfo })[0];
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
    const r = await this.connection.currentClient.mutation(ns(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), i = qe(r, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return mt(r, i[this.apiIdentifier]);
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
      throw new mr("Cannot perform bulkCreate without a pluralApiIdentifier");
    const i = ke(this.options.pluralApiIdentifier), n = await this.connection.currentClient.mutation(as(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = qe(n, ["internal", `bulkCreate${i}`]);
    return Ar(n, a[this.options.pluralApiIdentifier]);
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
    gi(t, "Can't update a record without an ID passed");
    const i = await this.connection.currentClient.mutation(ss(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(r, "update")
    }).toPromise(), n = qe(i, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return mt(i, n[this.apiIdentifier]);
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
    gi(t, "Can't delete a record without an ID");
    const r = await this.connection.currentClient.mutation(os(this.apiIdentifier), { id: t }).toPromise();
    qe(r, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const r = await this.connection.currentClient.mutation(us(this.apiIdentifier), t).toPromise();
    qe(r, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function Yi(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, i] of Object.entries(e))
    i && t.push(r);
  return t;
}
const jr = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), xr = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, ls = (e, t, r, i, n) => {
  const a = {};
  return typeof t < "u" && (a.id = te({ type: "GadgetID!", value: t })), at({
    type: "query",
    name: e,
    fields: {
      [e]: nt(a, xr((n == null ? void 0 : n.select) || r, !0)),
      ...jr(i)
    }
  });
}, cs = (e, t, r, i, n, a) => Cr(e, i, n, {
  select: a == null ? void 0 : a.select,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}), Cr = (e, t, r, i) => at({
  type: "query",
  name: e,
  fields: {
    [e]: nt({
      after: te({ value: i == null ? void 0 : i.after, type: "String" }),
      first: te({ value: i == null ? void 0 : i.first, type: "Int" }),
      before: te({ value: i == null ? void 0 : i.before, type: "String" }),
      last: te({ value: i == null ? void 0 : i.last, type: "Int" }),
      sort: i != null && i.sort ? te({ value: i.sort, type: `[${Va(r)}!]` }) : void 0,
      filter: i != null && i.filter ? te({ value: i.filter, type: `[${$a(r)}!]` }) : void 0,
      search: i != null && i.search ? te({ value: i.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: xr((i == null ? void 0 : i.select) || t, !0)
      }
    }),
    ...jr(r)
  }
}), Hi = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Zi = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, te(r)])), ds = (e, t, r, i, n, a, s, u, l) => {
  const d = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: nt(Zi(n), {
      success: !0,
      errors: Hi,
      [i]: d && !l ? xr(d, !0) : !1,
      [u ? "results" : "result"]: !!l
    })
  };
  s && (c = {
    [s]: c
  });
  const f = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...jr(r)
    }
  };
  return at(f);
}, fs = (e, t, r) => {
  let i = {
    [e]: nt(Zi(t), {
      success: !0,
      errors: Hi,
      result: !0
    })
  };
  return r && (i = {
    [r]: i
  }), at({
    type: "mutation",
    name: e,
    fields: i
  });
}, L = async (e, t, r, i, n, a, s = !0) => {
  const u = ls(t, r, i, n, a), l = await e.connection.currentClient.query(u.query, u.variables).toPromise(), c = (s ? je : ht)(l, [t]);
  return mt(l, c);
}, zt = async (e, t, r, i, n, a, s) => {
  const u = cs(t, r, i, n, a, s), l = await e.connection.currentClient.query(u.query, u.variables).toPromise(), d = je(l, [t]), c = vt(l, d);
  if (c.length > 1)
    throw Ma(a, r, i);
  return c[0];
}, j = async (e, t, r, i, n, a) => {
  const s = Cr(t, r, i, n), u = await e.connection.currentClient.query(s.query, s.variables).toPromise();
  let l;
  a === !1 ? l = ht(u, [t]) : l = je(u, [t], a);
  const d = vt(u, l);
  return it.boot(e, d, { options: n, pageInfo: l.pageInfo });
}, T = async (e, t, r, i, n, a, s, u, l, d) => {
  const c = ds(t, r, i, n, s, u, l, a, d), f = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), p = l ? [l, t] : [t];
  if (a) {
    const m = rt(f.data, p), b = m[n] && r ? Ar(f, m[n]) : void 0;
    if (m.errors) {
      const S = m.errors.map((x) => Er(x));
      throw new qa(S, b);
    }
    return b;
  } else {
    const m = qe(f, p);
    return r == null ? void 0 : d ? m.result : mt(f, m[n]);
  }
}, ps = async (e, t, r, i) => {
  const n = fs(t, r, i), a = await e.currentClient.mutation(n.query, n.variables).toPromise();
  return qe(a, i ? [i, t] : [t]).result;
};
function V(e, t, r = {}, i) {
  var s;
  if (e.hasAmbiguousIdentifier && Object.keys(r).some((u) => {
    var l;
    return !((l = e.paramOnlyVariables) != null && l.includes(u)) && u !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const a = Object.entries(e.variables).find(([u, l]) => u === "id" && l.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in r && typeof r[e.modelApiIdentifier] == "object" && r[e.modelApiIdentifier] !== null || !i[e.modelApiIdentifier])
      n = r;
    else {
      n = {
        [e.modelApiIdentifier]: {}
      };
      for (const [u, l] of Object.entries(r))
        (s = e.paramOnlyVariables) != null && s.includes(u) ? n[u] = l : a && u === a[0] ? n.id = l : n[e.modelApiIdentifier][u] = l;
    }
  else
    n = r;
  return n.id ?? (n.id = t), n;
}
const Z = {
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
async function ys(e, t) {
  const r = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await T(
    this,
    "createUser",
    Z,
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
    null,
    !1
  );
}
async function hs(e, t, r) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await T(
    this,
    "updateUser",
    Z,
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
        value: i.user,
        required: !1,
        type: "UpdateUserInput"
      }
    },
    r,
    null,
    !1
  );
}
async function ms(e, t) {
  return await T(
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
    null,
    !1
  );
}
async function bs(e, t) {
  const r = V(
    this.signUp,
    void 0,
    e,
    this.signUp.variables
  );
  return await T(
    this,
    "signUpUser",
    Z,
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
    null,
    !1
  );
}
class gs {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, i) => await L(
        this,
        "user",
        r,
        Z,
        "user",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, i) => {
        const n = await L(
          this,
          "user",
          r,
          Z,
          "user",
          i,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await j(
        this,
        "users",
        Z,
        "user",
        r
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await j(
        this,
        "users",
        Z,
        "user",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const i = await j(
          this,
          "users",
          Z,
          "user",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findByEmail = Object.assign(
      async (r, i) => await zt(
        this,
        "users",
        "email",
        r,
        Z,
        "user",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      ys,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Z,
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
      hs,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Z,
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
      ms,
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
      async (r, i) => await T(
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
        i,
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
      bs,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Z,
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
const ce = {
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
async function vs(e, t) {
  const r = V(
    this.logInViaEmail,
    void 0,
    e,
    this.logInViaEmail.variables
  );
  return await T(
    this,
    "logInViaEmail",
    ce,
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
    "currentSession",
    !1
  );
}
async function Ss(e) {
  return await T(
    this,
    "logOut",
    ce,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
class ws {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, i) => await L(
        this,
        "session",
        r,
        ce,
        "session",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, i) => {
        const n = await L(
          this,
          "session",
          r,
          ce,
          "session",
          i,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await j(
        this,
        "sessions",
        ce,
        "session",
        r
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await j(
        this,
        "sessions",
        ce,
        "session",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const i = await j(
          this,
          "sessions",
          ce,
          "session",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logInViaEmail = Object.assign(
      vs,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: ce,
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
      Ss,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: ce,
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
const de = {
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
async function Os(e, t) {
  const r = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await T(
    this,
    "createShopifyProduct",
    de,
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
    null,
    !1
  );
}
async function Ts(e, t, r) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await T(
    this,
    "updateShopifyProduct",
    de,
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
        value: i.shopifyProduct,
        required: !1,
        type: "UpdateShopifyProductInput"
      }
    },
    r,
    null,
    !1
  );
}
async function Is(e, t) {
  return await T(
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
    null,
    !1
  );
}
class Ps {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, i) => await L(
        this,
        "shopifyProduct",
        r,
        de,
        "shopifyProduct",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: de,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, i) => {
        const n = await L(
          this,
          "shopifyProduct",
          r,
          de,
          "shopifyProduct",
          i,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: de,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await j(
        this,
        "shopifyProducts",
        de,
        "shopifyProduct",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: de,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await j(
        this,
        "shopifyProducts",
        de,
        "shopifyProduct",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: de,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const i = await j(
          this,
          "shopifyProducts",
          de,
          "shopifyProduct",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: de,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Os,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: de,
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
      Ts,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: de,
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
      Is,
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
      async (r, i) => await T(
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
        i,
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
const fe = {
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
async function Es(e, t) {
  const r = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await T(
    this,
    "createShopifyProductImage",
    fe,
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
    null,
    !1
  );
}
async function As(e, t, r) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await T(
    this,
    "updateShopifyProductImage",
    fe,
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
        value: i.shopifyProductImage,
        required: !1,
        type: "UpdateShopifyProductImageInput"
      }
    },
    r,
    null,
    !1
  );
}
async function ks(e, t) {
  return await T(
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
    null,
    !1
  );
}
class _s {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, i) => await L(
        this,
        "shopifyProductImage",
        r,
        fe,
        "shopifyProductImage",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, i) => {
        const n = await L(
          this,
          "shopifyProductImage",
          r,
          fe,
          "shopifyProductImage",
          i,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await j(
        this,
        "shopifyProductImages",
        fe,
        "shopifyProductImage",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await j(
        this,
        "shopifyProductImages",
        fe,
        "shopifyProductImage",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const i = await j(
          this,
          "shopifyProductImages",
          fe,
          "shopifyProductImage",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Es,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: fe,
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
      As,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: fe,
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
      ks,
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
      async (r, i) => await T(
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
        i,
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
const pe = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  name: !0,
  position: !0,
  state: !0,
  updatedAt: !0,
  values: !0
};
async function Ns(e, t) {
  const r = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await T(
    this,
    "createShopifyProductOption",
    pe,
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
    null,
    !1
  );
}
async function js(e, t, r) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await T(
    this,
    "updateShopifyProductOption",
    pe,
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
        value: i.shopifyProductOption,
        required: !1,
        type: "UpdateShopifyProductOptionInput"
      }
    },
    r,
    null,
    !1
  );
}
async function xs(e, t) {
  return await T(
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
    null,
    !1
  );
}
class Cs {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, i) => await L(
        this,
        "shopifyProductOption",
        r,
        pe,
        "shopifyProductOption",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, i) => {
        const n = await L(
          this,
          "shopifyProductOption",
          r,
          pe,
          "shopifyProductOption",
          i,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await j(
        this,
        "shopifyProductOptions",
        pe,
        "shopifyProductOption",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await j(
        this,
        "shopifyProductOptions",
        pe,
        "shopifyProductOption",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const i = await j(
          this,
          "shopifyProductOptions",
          pe,
          "shopifyProductOption",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Ns,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: pe,
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
      js,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: pe,
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
      xs,
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
      async (r, i) => await T(
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
        i,
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
const ye = {
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
async function Ds(e, t) {
  const r = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await T(
    this,
    "createShopifyProductVariant",
    ye,
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
    null,
    !1
  );
}
async function Fs(e, t, r) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await T(
    this,
    "updateShopifyProductVariant",
    ye,
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
        value: i.shopifyProductVariant,
        required: !1,
        type: "UpdateShopifyProductVariantInput"
      }
    },
    r,
    null,
    !1
  );
}
async function Rs(e, t) {
  return await T(
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
    null,
    !1
  );
}
class qs {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, i) => await L(
        this,
        "shopifyProductVariant",
        r,
        ye,
        "shopifyProductVariant",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, i) => {
        const n = await L(
          this,
          "shopifyProductVariant",
          r,
          ye,
          "shopifyProductVariant",
          i,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await j(
        this,
        "shopifyProductVariants",
        ye,
        "shopifyProductVariant",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await j(
        this,
        "shopifyProductVariants",
        ye,
        "shopifyProductVariant",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const i = await j(
          this,
          "shopifyProductVariants",
          ye,
          "shopifyProductVariant",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Ds,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: ye,
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
      Fs,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: ye,
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
      Rs,
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
      async (r, i) => await T(
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
        i,
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
const ee = {
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
async function Vs(e, t) {
  const r = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await T(
    this,
    "createShopifyShop",
    ee,
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
    null,
    !1
  );
}
async function $s(e, t, r) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await T(
    this,
    "updateShopifyShop",
    ee,
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
        value: i.shopifyShop,
        required: !1,
        type: "UpdateShopifyShopInput"
      }
    },
    r,
    null,
    !1
  );
}
async function Ms(e, t) {
  return await T(
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
    null,
    !1
  );
}
async function Us(e, t, r) {
  const i = V(
    this.uninstall,
    e,
    t,
    this.uninstall.variables
  );
  return await T(
    this,
    "uninstallShopifyShop",
    ee,
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
        value: i.shopifyShop,
        required: !1,
        type: "UninstallShopifyShopInput"
      }
    },
    r,
    null,
    !1
  );
}
async function Gs(e, t, r) {
  const i = V(
    this.reinstall,
    e,
    t,
    this.reinstall.variables
  );
  return await T(
    this,
    "reinstallShopifyShop",
    ee,
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
        value: i.shopifyShop,
        required: !1,
        type: "ReinstallShopifyShopInput"
      }
    },
    r,
    null,
    !1
  );
}
class Bs {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, i) => await L(
        this,
        "shopifyShop",
        r,
        ee,
        "shopifyShop",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, i) => {
        const n = await L(
          this,
          "shopifyShop",
          r,
          ee,
          "shopifyShop",
          i,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await j(
        this,
        "shopifyShops",
        ee,
        "shopifyShop",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await j(
        this,
        "shopifyShops",
        ee,
        "shopifyShop",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const i = await j(
          this,
          "shopifyShops",
          ee,
          "shopifyShop",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Vs,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: ee,
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
      $s,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: ee,
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
      Ms,
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
      async (r, i) => await T(
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
        i,
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
      Us,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: ee,
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
      Gs,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: ee,
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
const he = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  state: !0,
  updatedAt: !0
};
async function Ls(e, t) {
  const r = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await T(
    this,
    "createProductPairing",
    he,
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
    null,
    !1
  );
}
async function zs(e, t, r) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await T(
    this,
    "updateProductPairing",
    he,
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
        value: i.productPairing,
        required: !1,
        type: "UpdateProductPairingInput"
      }
    },
    r,
    null,
    !1
  );
}
async function Ws(e, t) {
  return await T(
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
    null,
    !1
  );
}
class Ks {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, i) => await L(
        this,
        "productPairing",
        r,
        he,
        "productPairing",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, i) => {
        const n = await L(
          this,
          "productPairing",
          r,
          he,
          "productPairing",
          i,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await j(
        this,
        "productPairings",
        he,
        "productPairing",
        r
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await j(
        this,
        "productPairings",
        he,
        "productPairing",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const i = await j(
          this,
          "productPairings",
          he,
          "productPairing",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Ls,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: he,
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
      zs,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: he,
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
      Ws,
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
      async (r, i) => await T(
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
        i,
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
const X = {
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
async function Qs(e, t) {
  const r = V(
    this.run,
    void 0,
    e,
    this.run.variables
  );
  return await T(
    this,
    "runShopifySync",
    X,
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
    null,
    !1
  );
}
async function Js(e, t, r) {
  const i = V(
    this.complete,
    e,
    t,
    this.complete.variables
  );
  return await T(
    this,
    "completeShopifySync",
    X,
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
        value: i.shopifySync,
        required: !1,
        type: "CompleteShopifySyncInput"
      }
    },
    r,
    null,
    !1
  );
}
async function Ys(e, t, r) {
  const i = V(
    this.error,
    e,
    t,
    this.error.variables
  );
  return await T(
    this,
    "errorShopifySync",
    X,
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
        value: i.shopifySync,
        required: !1,
        type: "ErrorShopifySyncInput"
      }
    },
    r,
    null,
    !1
  );
}
class Hs {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, i) => await L(
        this,
        "shopifySync",
        r,
        X,
        "shopifySync",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, i) => {
        const n = await L(
          this,
          "shopifySync",
          r,
          X,
          "shopifySync",
          i,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await j(
        this,
        "shopifySyncs",
        X,
        "shopifySync",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await j(
        this,
        "shopifySyncs",
        X,
        "shopifySync",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const i = await j(
          this,
          "shopifySyncs",
          X,
          "shopifySync",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, i) => await zt(
        this,
        "shopifySyncs",
        "id",
        r,
        X,
        "shopifySync",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.run = Object.assign(
      Qs,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: X,
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
      Js,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: X,
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
      Ys,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: X,
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
const ne = {
  __typename: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  id: !0,
  updatedAt: !0
};
async function Zs(e, t) {
  const r = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await T(
    this,
    "createAmbiguous",
    ne,
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
    null,
    !1
  );
}
async function Xs(e, t, r) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await T(
    this,
    "updateAmbiguous",
    ne,
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
        value: i.ambiguous,
        required: !1,
        type: "UpdateAmbiguousInput"
      }
    },
    r,
    null,
    !1
  );
}
async function eo(e, t) {
  return await T(
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
    null,
    !1
  );
}
class to {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, i) => await L(
        this,
        "ambiguous",
        r,
        ne,
        "ambiguous",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, i) => {
        const n = await L(
          this,
          "ambiguous",
          r,
          ne,
          "ambiguous",
          i,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await j(
        this,
        "ambiguouss",
        ne,
        "ambiguous",
        r
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await j(
        this,
        "ambiguouss",
        ne,
        "ambiguous",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const i = await j(
          this,
          "ambiguouss",
          ne,
          "ambiguous",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, i) => await zt(
        this,
        "ambiguouss",
        "id",
        r,
        ne,
        "ambiguous",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Zs,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: ne,
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
      Xs,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: ne,
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
      eo,
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
      async (r, i) => await T(
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
        i,
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
const ae = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
};
async function ro(e, t) {
  const r = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await T(
    this,
    "createUnambiguous",
    ae,
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
    null,
    !1
  );
}
async function io(e, t, r) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await T(
    this,
    "updateUnambiguous",
    ae,
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
        value: i.unambiguous,
        required: !1,
        type: "UpdateUnambiguousInput"
      }
    },
    r,
    null,
    !1
  );
}
async function no(e, t) {
  return await T(
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
    null,
    !1
  );
}
class ao {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, i) => await L(
        this,
        "unambiguous",
        r,
        ae,
        "unambiguous",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, i) => {
        const n = await L(
          this,
          "unambiguous",
          r,
          ae,
          "unambiguous",
          i,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await j(
        this,
        "unambiguouss",
        ae,
        "unambiguous",
        r
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await j(
        this,
        "unambiguouss",
        ae,
        "unambiguous",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const i = await j(
          this,
          "unambiguouss",
          ae,
          "unambiguous",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, i) => await zt(
        this,
        "unambiguouss",
        "id",
        r,
        ae,
        "unambiguous",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      ro,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: ae,
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
      io,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: ae,
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
      no,
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
      async (r, i) => await T(
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
        i,
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
const Je = {
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
async function so(e) {
  return await T(
    this,
    "logOut",
    Je,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
async function oo(e, t) {
  const r = V(
    this.logInViaEmail,
    void 0,
    e,
    this.logInViaEmail.variables
  );
  return await T(
    this,
    "logInViaEmail",
    Je,
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
    "currentSession",
    !1
  );
}
class uo {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (r) => await L(
        this,
        "currentSession",
        void 0,
        Je,
        "session",
        r
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      so,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Je,
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
      oo,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Je,
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
const tr = "production", xt = "development", lo = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
class co {
  constructor(t) {
    var a;
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async (s) => await ps(
        this.connection,
        "globalShopifySync",
        {
          apiKeys: {
            value: s.apiKeys,
            required: !1,
            type: "[String!]"
          },
          syncSince: {
            value: s.syncSince,
            required: !1,
            type: "DateTime"
          },
          models: {
            value: s.models,
            required: !1,
            type: "[String!]"
          },
          force: {
            value: s.force,
            required: !1,
            type: "Boolean"
          },
          startReason: {
            value: s.startReason,
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
    ), this.transaction = async (s) => await this.connection.transaction(s), this.getDirectUploadToken = async () => (await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
      requestPolicy: "network-only"
    })).gadgetMeta.directUploadToken;
    const r = (t == null ? void 0 : t.environment) ?? lo() ?? xt;
    let i = r.toLocaleLowerCase();
    i != xt && i != tr && (console.warn("Invalid environment", r, "defaulting to development"), i = xt);
    const n = { ...t == null ? void 0 : t.exchanges };
    if (i === xt) {
      const s = ({ forward: u }) => (l) => {
        const d = u(l);
        return ra(
          d,
          Ye((c) => {
            if (typeof window < "u" && typeof CustomEvent == "function") {
              const f = new CustomEvent("gadget:devharness:graphqlresult", { detail: c });
              window.dispatchEvent(f);
            }
            return c;
          })
        );
      };
      n.beforeAll = [
        s,
        ...n.beforeAll ?? []
      ];
    }
    if (this.connection = new Qi({
      endpoint: new URL("api/graphql", i == tr ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: n,
      environment: i == tr ? "Production" : "Development"
    }), typeof window < "u" && this.connection.authenticationMode == H.APIKey && !((a = t == null ? void 0 : t.authenticationMode) != null && a.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new gs(this.connection), this.session = new ws(this.connection), this.shopifyProduct = new Ps(this.connection), this.shopifyProductImage = new _s(this.connection), this.shopifyProductOption = new Cs(this.connection), this.shopifyProductVariant = new qs(this.connection), this.shopifyShop = new Bs(this.connection), this.productPairing = new Ks(this.connection), this.shopifySync = new Hs(this.connection), this.ambiguous = new to(this.connection), this.unambiguous = new ao(this.connection), this.currentSession = new uo(this.connection), this.internal = {
      user: new Te("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new Te("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new Te("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new Te("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new Te("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new Te("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new Te("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new Te("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new Te("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new Te("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new Te("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(t, r, i) {
    const { data: n, error: a } = await this.connection.currentClient.query(t, r, i).toPromise();
    if (a)
      throw a;
    return n;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(t, r) {
    const { data: i, error: n } = await this.connection.currentClient.mutation(t, r).toPromise();
    if (n)
      throw n;
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
  toString() {
    return `GadgetAPIClient<${this.productionApiRoot}>`;
  }
  toJSON() {
    return this.toString();
  }
}
var Xi = {}, Wt = Ee.createContext(Xi);
Wt.Provider;
Wt.Consumer;
Wt.displayName = "UrqlContext";
var fo = () => {
  var e = Ee.useContext(Wt);
  if (e === Xi && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, po = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, yo = (e, t) => e === t || !(!e || !t || e.key !== t.key), rr = (e, t) => {
  var r = {
    ...e,
    ...t,
    data: t.data !== void 0 || t.error ? t.data : e.data,
    fetching: !!t.fetching,
    stale: !!t.stale
  };
  return ((i, n) => {
    for (var a in i)
      if (!(a in n))
        return !0;
    for (var s in n)
      if (s === "operation" ? !yo(i[s], n[s]) : i[s] !== n[s])
        return !0;
    return !1;
  })(e, r) ? r : e;
}, ho = (e, t) => {
  for (var r = 0, i = t.length; r < i; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}, ir = Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Ei(e, t) {
  process.env.NODE_ENV !== "production" && ir && ir.ReactCurrentOwner && ir.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function mo(e, t) {
  var r = Ee.useRef(void 0);
  return Ee.useMemo(() => {
    var i = Dt(e, t);
    return r.current !== void 0 && r.current.key === i.key ? r.current : (r.current = i, i);
  }, [e, t]);
}
var bo = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    e.operations$ && Me((i) => {
      i.kind === "teardown" && t.has(i.key) && (t.delete(i.key), r.delete(i.key));
    })(e.operations$), e._react = {
      get: (i) => r.get(i),
      set(i, n) {
        t.delete(i), r.set(i, n);
      },
      dispose(i) {
        t.add(i);
      }
    };
  }
  return e._react;
}, go = (e, t) => e.suspense && (!t || t.suspense !== !1);
function vo(e) {
  var t = fo(), r = bo(t), i = go(t, e.context), n = mo(e.query, e.variables), a = Ee.useMemo(() => {
    if (e.pause)
      return null;
    var p = t.executeQuery(n, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return i ? Xe((m) => {
      r.set(n.key, m);
    })(p) : p;
  }, [r, t, n, i, e.pause, e.requestPolicy, e.context]), s = Ee.useCallback((p, m) => {
    if (!p)
      return {
        fetching: !1
      };
    var b = r.get(n.key);
    if (b) {
      if (m && b != null && "then" in b)
        throw b;
    } else {
      var S, x = Me((w) => {
        b = w, S && S(b);
      })(Ci(() => m && !S || !b)(p));
      if (b == null && m) {
        var q = new Promise((w) => {
          S = w;
        });
        throw r.set(n.key, q), q;
      } else
        x.unsubscribe();
    }
    return b || {
      fetching: !0
    };
  }, [r, n]), u = [t, n, e.requestPolicy, e.context, e.pause], [l, d] = Ee.useState(() => [a, rr(po, s(a, i)), u]), c = l[1];
  a !== l[0] && ho(l[2], u) && d([a, c = rr(l[1], s(a, i)), u]), Ee.useEffect(() => {
    var p = l[0], m = l[2][1], b = !1, S = (q) => {
      b = !0, Ei(d, (w) => {
        var G = rr(w[1], q);
        return w[1] !== G ? [w[0], G, w[2]] : w;
      });
    };
    if (p) {
      var x = Me(S)(Or(() => {
        S({
          fetching: !1
        });
      })(p));
      return b || S({
        fetching: !0
      }), () => {
        r.dispose(m.key), x.unsubscribe();
      };
    } else
      S({
        fetching: !1
      });
  }, [r, l[0], l[2][1]]);
  var f = Ee.useCallback((p) => {
    var m = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...p
    };
    Ei(d, (b) => [i ? Xe((S) => {
      r.set(n.key, S);
    })(t.executeQuery(n, m)) : t.executeQuery(n, m), b[1], u]);
  }, [t, r, n, i, s, e.requestPolicy, e.context]);
  return [c, f];
}
const So = Ut.createContext(void 0);
Ut.createContext(void 0);
const wo = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Oo = (e, t) => {
  let r = "";
  return e !== void 0 ? r = `[Network] ${e.message}` : t !== void 0 ? t.forEach((i) => {
    r += `[GraphQL] ${i.message}
`;
  }) : r = "Unknown error", r.trim();
}, To = (e) => typeof e == "string" ? new Mt(e) : e != null && e.message && !e.code ? new Mt(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class Ve extends Error {
  /** @private */
  static forClientSideError(t, r) {
    return new Ve({
      executionErrors: [t],
      response: r
    });
  }
  /** @private */
  static forErrorsResponse(t, r) {
    return new Ve({
      executionErrors: t.map(Er),
      response: r
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new Ve({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, r, i = !1) {
    const n = Ua(t, r);
    let a = Ve.forMaybeCombinedError(t.error);
    return !a && n && !i && (a = Ve.forClientSideError(n)), a;
  }
  constructor({ networkError: t, executionErrors: r, response: i }) {
    const n = (r || []).map(To), a = Oo(t, n);
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
    }), this.message = a, this.executionErrors = n, this.graphQLErrors = n, this.networkError = t, this.response = i;
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
const Io = (e) => {
  const { context: t, suspense: r, ...i } = e ?? {}, n = nr(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...i,
    context: n
  };
}, Po = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), Eo = (e) => {
  if (!In(So))
    throw new Error(wo);
  const t = Io(e);
  return vo(t);
};
var Ao = typeof Element < "u", ko = typeof Map == "function", _o = typeof Set == "function", No = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ft(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, i, n;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (i = r; i-- !== 0; )
        if (!Ft(e[i], t[i]))
          return !1;
      return !0;
    }
    var a;
    if (ko && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(i = a.next()).done; )
        if (!t.has(i.value[0]))
          return !1;
      for (a = e.entries(); !(i = a.next()).done; )
        if (!Ft(i.value[1], t.get(i.value[0])))
          return !1;
      return !0;
    }
    if (_o && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(i = a.next()).done; )
        if (!t.has(i.value[0]))
          return !1;
      return !0;
    }
    if (No && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (i = r; i-- !== 0; )
        if (e[i] !== t[i])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (n = Object.keys(e), r = n.length, r !== Object.keys(t).length)
      return !1;
    for (i = r; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, n[i]))
        return !1;
    if (Ao && e instanceof Element)
      return !1;
    for (i = r; i-- !== 0; )
      if (!((n[i] === "_owner" || n[i] === "__v" || n[i] === "__o") && e.$$typeof) && !Ft(e[n[i]], t[n[i]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var jo = function(t, r) {
  try {
    return Ft(t, r);
  } catch (i) {
    if ((i.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw i;
  }
};
const xo = /* @__PURE__ */ En(jo), Co = (e) => {
  const t = Pn();
  return e ? (t.current === void 0 || !xo(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, Do = (e, t) => {
  const r = Co(t), i = nr(() => Cr(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, r), [e, r]), [n, a] = Eo(Po(i, t));
  return [nr(() => {
    const u = [e.findMany.operationName];
    let l = n.data;
    if (l) {
      const c = rt(n.data, u);
      if (c) {
        const f = vt(n, c);
        l = it.boot(e, f, c);
      }
    }
    const d = Ve.errorIfDataAbsent(n, u, t == null ? void 0 : t.pause);
    return { ...n, data: l, error: d };
  }, [e, n]), a];
}, Fo = new co(), $o = () => {
  const [{ data: e }] = Do(Fo.shopifyProduct);
  return /* @__PURE__ */ Yr.jsx(Yr.Fragment, { children: JSON.stringify(e) });
};
export {
  $o as R,
  qo as c
};
