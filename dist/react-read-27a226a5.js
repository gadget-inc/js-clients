import * as xe from "react";
import ei, { useMemo as Si, useContext as Zn, useRef as Xn } from "react";
var qu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ea(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wi = { exports: {} }, bt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function ta() {
  if (dr)
    return bt;
  dr = 1;
  var e = ei, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, l, d) {
    var c, p = {}, f = null, m = null;
    d !== void 0 && (f = "" + d), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (c in l)
      r.call(l, c) && !a.hasOwnProperty(c) && (p[c] = l[c]);
    if (s && s.defaultProps)
      for (c in l = s.defaultProps, l)
        p[c] === void 0 && (p[c] = l[c]);
    return { $$typeof: t, type: s, key: f, ref: m, props: p, _owner: n.current };
  }
  return bt.Fragment = i, bt.jsx = o, bt.jsxs = o, bt;
}
var vt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function ia() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ei, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.iterator, S = "@@iterator";
    function D(u) {
      if (u === null || typeof u != "object")
        return null;
      var y = g && u[g] || u[S];
      return typeof y == "function" ? y : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(u) {
      {
        for (var y = arguments.length, b = new Array(y > 1 ? y - 1 : 0), O = 1; O < y; O++)
          b[O - 1] = arguments[O];
        B("error", u, b);
      }
    }
    function B(u, y, b) {
      {
        var O = R.ReactDebugCurrentFrame, F = O.getStackAddendum();
        F !== "" && (y += "%s", b = b.concat([F]));
        var q = b.map(function(C) {
          return String(C);
        });
        q.unshift("Warning: " + y), Function.prototype.apply.call(console[u], console, q);
      }
    }
    var h = !1, T = !1, v = !1, z = !1, Me = !1, Je;
    Je = Symbol.for("react.module.reference");
    function Ye(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === r || u === a || Me || u === n || u === d || u === c || z || u === m || h || T || v || typeof u == "object" && u !== null && (u.$$typeof === f || u.$$typeof === p || u.$$typeof === o || u.$$typeof === s || u.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === Je || u.getModuleId !== void 0));
    }
    function xt(u, y, b) {
      var O = u.displayName;
      if (O)
        return O;
      var F = y.displayName || y.name || "";
      return F !== "" ? b + "(" + F + ")" : b;
    }
    function mt(u) {
      return u.displayName || "Context";
    }
    function Te(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case r:
          return "Fragment";
        case i:
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
      if (typeof u == "object")
        switch (u.$$typeof) {
          case s:
            var y = u;
            return mt(y) + ".Consumer";
          case o:
            var b = u;
            return mt(b._context) + ".Provider";
          case l:
            return xt(u, u.render, "ForwardRef");
          case p:
            var O = u.displayName || null;
            return O !== null ? O : Te(u.type) || "Memo";
          case f: {
            var F = u, q = F._payload, C = F._init;
            try {
              return Te(C(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, M = 0, $, _, L, Ce, V, $e, Ue;
    function Le() {
    }
    Le.__reactDisabledLog = !0;
    function Ge() {
      {
        if (M === 0) {
          $ = console.log, _ = console.info, L = console.warn, Ce = console.error, V = console.group, $e = console.groupCollapsed, Ue = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: Le,
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
    function X() {
      {
        if (M--, M === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, u, {
              value: $
            }),
            info: P({}, u, {
              value: _
            }),
            warn: P({}, u, {
              value: L
            }),
            error: P({}, u, {
              value: Ce
            }),
            group: P({}, u, {
              value: V
            }),
            groupCollapsed: P({}, u, {
              value: $e
            }),
            groupEnd: P({}, u, {
              value: Ue
            })
          });
        }
        M < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = R.ReactCurrentDispatcher, Dt;
    function He(u, y, b) {
      {
        if (Dt === void 0)
          try {
            throw Error();
          } catch (F) {
            var O = F.stack.trim().match(/\n( *(at )?)/);
            Dt = O && O[1] || "";
          }
        return `
` + Dt + u;
      }
    }
    var si = !1, Ft;
    {
      var Nn = typeof WeakMap == "function" ? WeakMap : Map;
      Ft = new Nn();
    }
    function Hi(u, y) {
      if (!u || si)
        return "";
      {
        var b = Ft.get(u);
        if (b !== void 0)
          return b;
      }
      var O;
      si = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = Q.current, Q.current = null, Ge();
      try {
        if (y) {
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
            } catch (qe) {
              O = qe;
            }
            Reflect.construct(u, [], C);
          } else {
            try {
              C.call();
            } catch (qe) {
              O = qe;
            }
            u.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            O = qe;
          }
          u();
        }
      } catch (qe) {
        if (qe && O && typeof qe.stack == "string") {
          for (var j = qe.stack.split(`
`), ce = O.stack.split(`
`), K = j.length - 1, Y = ce.length - 1; K >= 1 && Y >= 0 && j[K] !== ce[Y]; )
            Y--;
          for (; K >= 1 && Y >= 0; K--, Y--)
            if (j[K] !== ce[Y]) {
              if (K !== 1 || Y !== 1)
                do
                  if (K--, Y--, Y < 0 || j[K] !== ce[Y]) {
                    var Pe = `
` + j[K].replace(" at new ", " at ");
                    return u.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", u.displayName)), typeof u == "function" && Ft.set(u, Pe), Pe;
                  }
                while (K >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        si = !1, Q.current = q, X(), Error.prepareStackTrace = F;
      }
      var Xe = u ? u.displayName || u.name : "", cr = Xe ? He(Xe) : "";
      return typeof u == "function" && Ft.set(u, cr), cr;
    }
    function jn(u, y, b) {
      return Hi(u, !1);
    }
    function _n(u) {
      var y = u.prototype;
      return !!(y && y.isReactComponent);
    }
    function Vt(u, y, b) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return Hi(u, _n(u));
      if (typeof u == "string")
        return He(u);
      switch (u) {
        case d:
          return He("Suspense");
        case c:
          return He("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            return jn(u.render);
          case p:
            return Vt(u.type, y, b);
          case f: {
            var O = u, F = O._payload, q = O._init;
            try {
              return Vt(q(F), y, b);
            } catch {
            }
          }
        }
      return "";
    }
    var $t = Object.prototype.hasOwnProperty, Zi = {}, Xi = R.ReactDebugCurrentFrame;
    function qt(u) {
      if (u) {
        var y = u._owner, b = Vt(u.type, u._source, y ? y.type : null);
        Xi.setExtraStackFrame(b);
      } else
        Xi.setExtraStackFrame(null);
    }
    function Cn(u, y, b, O, F) {
      {
        var q = Function.call.bind($t);
        for (var C in u)
          if (q(u, C)) {
            var j = void 0;
            try {
              if (typeof u[C] != "function") {
                var ce = Error((O || "React class") + ": " + b + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              j = u[C](y, C, O, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (K) {
              j = K;
            }
            j && !(j instanceof Error) && (qt(F), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", b, C, typeof j), qt(null)), j instanceof Error && !(j.message in Zi) && (Zi[j.message] = !0, qt(F), w("Failed %s type: %s", b, j.message), qt(null));
          }
      }
    }
    var xn = Array.isArray;
    function ui(u) {
      return xn(u);
    }
    function Dn(u) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, b = y && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return b;
      }
    }
    function Fn(u) {
      try {
        return er(u), !1;
      } catch {
        return !0;
      }
    }
    function er(u) {
      return "" + u;
    }
    function tr(u) {
      if (Fn(u))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dn(u)), er(u);
    }
    var gt = R.ReactCurrentOwner, Vn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ir, rr, li;
    li = {};
    function $n(u) {
      if ($t.call(u, "ref")) {
        var y = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function qn(u) {
      if ($t.call(u, "key")) {
        var y = Object.getOwnPropertyDescriptor(u, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Rn(u, y) {
      if (typeof u.ref == "string" && gt.current && y && gt.current.stateNode !== y) {
        var b = Te(gt.current.type);
        li[b] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Te(gt.current.type), u.ref), li[b] = !0);
      }
    }
    function Mn(u, y) {
      {
        var b = function() {
          ir || (ir = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        b.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function Un(u, y) {
      {
        var b = function() {
          rr || (rr = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        b.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Gn = function(u, y, b, O, F, q, C) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: y,
        ref: b,
        props: C,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function Ln(u, y, b, O, F) {
      {
        var q, C = {}, j = null, ce = null;
        b !== void 0 && (tr(b), j = "" + b), qn(y) && (tr(y.key), j = "" + y.key), $n(y) && (ce = y.ref, Rn(y, F));
        for (q in y)
          $t.call(y, q) && !Vn.hasOwnProperty(q) && (C[q] = y[q]);
        if (u && u.defaultProps) {
          var K = u.defaultProps;
          for (q in K)
            C[q] === void 0 && (C[q] = K[q]);
        }
        if (j || ce) {
          var Y = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          j && Mn(C, Y), ce && Un(C, Y);
        }
        return Gn(u, j, ce, F, O, gt.current, C);
      }
    }
    var ci = R.ReactCurrentOwner, nr = R.ReactDebugCurrentFrame;
    function Ze(u) {
      if (u) {
        var y = u._owner, b = Vt(u.type, u._source, y ? y.type : null);
        nr.setExtraStackFrame(b);
      } else
        nr.setExtraStackFrame(null);
    }
    var di;
    di = !1;
    function fi(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function ar() {
      {
        if (ci.current) {
          var u = Te(ci.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Bn(u) {
      {
        if (u !== void 0) {
          var y = u.fileName.replace(/^.*[\\\/]/, ""), b = u.lineNumber;
          return `

Check your code at ` + y + ":" + b + ".";
        }
        return "";
      }
    }
    var or = {};
    function zn(u) {
      {
        var y = ar();
        if (!y) {
          var b = typeof u == "string" ? u : u.displayName || u.name;
          b && (y = `

Check the top-level render call using <` + b + ">.");
        }
        return y;
      }
    }
    function sr(u, y) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var b = zn(y);
        if (or[b])
          return;
        or[b] = !0;
        var O = "";
        u && u._owner && u._owner !== ci.current && (O = " It was passed a child from " + Te(u._owner.type) + "."), Ze(u), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, O), Ze(null);
      }
    }
    function ur(u, y) {
      {
        if (typeof u != "object")
          return;
        if (ui(u))
          for (var b = 0; b < u.length; b++) {
            var O = u[b];
            fi(O) && sr(O, y);
          }
        else if (fi(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var F = D(u);
          if (typeof F == "function" && F !== u.entries)
            for (var q = F.call(u), C; !(C = q.next()).done; )
              fi(C.value) && sr(C.value, y);
        }
      }
    }
    function Wn(u) {
      {
        var y = u.type;
        if (y == null || typeof y == "string")
          return;
        var b;
        if (typeof y == "function")
          b = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === p))
          b = y.propTypes;
        else
          return;
        if (b) {
          var O = Te(y);
          Cn(b, u.props, "prop", O, u);
        } else if (y.PropTypes !== void 0 && !di) {
          di = !0;
          var F = Te(y);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qn(u) {
      {
        for (var y = Object.keys(u.props), b = 0; b < y.length; b++) {
          var O = y[b];
          if (O !== "children" && O !== "key") {
            Ze(u), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), Ze(null);
            break;
          }
        }
        u.ref !== null && (Ze(u), w("Invalid attribute `ref` supplied to `React.Fragment`."), Ze(null));
      }
    }
    function lr(u, y, b, O, F, q) {
      {
        var C = Ye(u);
        if (!C) {
          var j = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Bn(F);
          ce ? j += ce : j += ar();
          var K;
          u === null ? K = "null" : ui(u) ? K = "array" : u !== void 0 && u.$$typeof === t ? (K = "<" + (Te(u.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : K = typeof u, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, j);
        }
        var Y = Ln(u, y, b, F, q);
        if (Y == null)
          return Y;
        if (C) {
          var Pe = y.children;
          if (Pe !== void 0)
            if (O)
              if (ui(Pe)) {
                for (var Xe = 0; Xe < Pe.length; Xe++)
                  ur(Pe[Xe], u);
                Object.freeze && Object.freeze(Pe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(Pe, u);
        }
        return u === r ? Qn(Y) : Wn(Y), Y;
      }
    }
    function Kn(u, y, b) {
      return lr(u, y, b, !0);
    }
    function Jn(u, y, b) {
      return lr(u, y, b, !1);
    }
    var Yn = Jn, Hn = Kn;
    vt.Fragment = r, vt.jsx = Yn, vt.jsxs = Hn;
  }()), vt;
}
process.env.NODE_ENV === "production" ? wi.exports = ta() : wi.exports = ia();
var pr = wi.exports, Ot;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(Ot || (Ot = {}));
const ra = {
  DateTime(e) {
    return new Date(e);
  }
};
class na {
  constructor(t) {
    Object.defineProperty(this, "plan", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    });
  }
  apply(t) {
    return Array.isArray(t) ? t.map((i) => this.hydrateObject(i)) : this.hydrateObject(t);
  }
  hydrateObject(t) {
    const i = { ...t };
    for (const [r, n] of Object.entries(this.plan)) {
      const a = i[r];
      a != null && (i[r] = ra[n](a));
    }
    return i;
  }
}
var rt = {
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
let Oi = class extends Error {
  constructor(t, i, r, n, a, o, s) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), i && (this.nodes = Array.isArray(i) ? i : [i]), r && (this.source = r), n && (this.positions = n), o && (this.originalError = o);
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
var U, A;
function H(e) {
  return new Oi(`Syntax Error: Unexpected token at ${A} in ${e}`);
}
function we(e) {
  if (e.lastIndex = A, e.test(U))
    return U.slice(A, A = e.lastIndex);
}
var Rt = / +(?=[^\s])/y;
function aa(e) {
  for (var t = e.split(`
`), i = "", r = 0, n = 0, a = t.length - 1, o = 0; o < t.length; o++)
    Rt.lastIndex = 0, Rt.test(t[o]) && (o && (!r || Rt.lastIndex < r) && (r = Rt.lastIndex), n = n || o, a = o);
  for (var s = n; s <= a; s++)
    s !== n && (i += `
`), i += t[s].slice(r).replace(/\\"""/g, '"""');
  return i;
}
function k() {
  for (var e = 0 | U.charCodeAt(A++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | U.charCodeAt(A++))
    if (e === 35)
      for (; (e = U.charCodeAt(A++)) !== 10 && e !== 13; )
        ;
  A--;
}
var Yr = /[_A-Za-z]\w*/y;
function De() {
  var e;
  if (e = we(Yr))
    return {
      kind: "Name",
      value: e
    };
}
var oa = /(?:null|true|false)/y, Hr = /\$[_A-Za-z]\w*/y, sa = /-?\d+/y, ua = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, la = /\\/g, ca = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, da = /"(?:"|[^\r\n]*?[^\\]")/y;
function Qt(e) {
  var t, i;
  if (i = we(oa))
    t = i === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: i === "true"
    };
  else if (!e && (i = we(Hr)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: i.slice(1)
      }
    };
  else if (i = we(sa)) {
    var r = i;
    (i = we(ua)) ? t = {
      kind: "FloatValue",
      value: r + i
    } : t = {
      kind: "IntValue",
      value: r
    };
  } else if (i = we(Yr))
    t = {
      kind: "EnumValue",
      value: i
    };
  else if (i = we(ca))
    t = {
      kind: "StringValue",
      value: aa(i.slice(3, -3)),
      block: !0
    };
  else if (i = we(da))
    t = {
      kind: "StringValue",
      value: la.test(i) ? JSON.parse(i) : i.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (U.charCodeAt(A) === 91) {
      A++, k();
      for (var s = []; o = Qt(a); )
        s.push(o);
      if (U.charCodeAt(A++) !== 93)
        throw H("ListValue");
      return k(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (U.charCodeAt(A) === 123) {
      A++, k();
      for (var o = [], s; s = De(); ) {
        if (k(), U.charCodeAt(A++) !== 58)
          throw H("ObjectField");
        k();
        var l = Qt(a);
        if (!l)
          throw H("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: l
        });
      }
      if (U.charCodeAt(A++) !== 125)
        throw H("ObjectValue");
      return k(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return k(), t;
}
function Zr(e) {
  var t = [];
  if (k(), U.charCodeAt(A) === 40) {
    A++, k();
    for (var i; i = De(); ) {
      if (k(), U.charCodeAt(A++) !== 58)
        throw H("Argument");
      k();
      var r = Qt(e);
      if (!r)
        throw H("Argument");
      t.push({
        kind: "Argument",
        name: i,
        value: r
      });
    }
    if (!t.length || U.charCodeAt(A++) !== 41)
      throw H("Argument");
    k();
  }
  return t;
}
function at(e) {
  var t = [];
  for (k(); U.charCodeAt(A) === 64; ) {
    A++;
    var i = De();
    if (!i)
      throw H("Directive");
    k(), t.push({
      kind: "Directive",
      name: i,
      arguments: Zr(e)
    });
  }
  return t;
}
function fa() {
  var e = De();
  if (e) {
    k();
    var t;
    if (U.charCodeAt(A) === 58) {
      if (A++, k(), t = e, !(e = De()))
        throw H("Field");
      k();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: Zr(!1),
      directives: at(!1),
      selectionSet: ti()
    };
  }
}
function Xr() {
  var e;
  if (k(), U.charCodeAt(A) === 91) {
    A++, k();
    var t = Xr();
    if (!t || U.charCodeAt(A++) !== 93)
      throw H("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = De())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw H("NamedType");
  return k(), U.charCodeAt(A) === 33 ? (A++, k(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var pa = /on/y;
function en() {
  if (we(pa)) {
    k();
    var e = De();
    if (!e)
      throw H("NamedType");
    return k(), {
      kind: "NamedType",
      name: e
    };
  }
}
var ya = /\.\.\./y;
function ha() {
  if (we(ya)) {
    k();
    var e = A, t;
    if ((t = De()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: at(!1)
      };
    A = e;
    var i = en(), r = at(!1), n = ti();
    if (!n)
      throw H("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: i,
      directives: r,
      selectionSet: n
    };
  }
}
function ti() {
  var e;
  if (k(), U.charCodeAt(A) === 123) {
    A++, k();
    for (var t = []; e = ha() || fa(); )
      t.push(e);
    if (!t.length || U.charCodeAt(A++) !== 125)
      throw H("SelectionSet");
    return k(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var ma = /fragment/y;
function ga() {
  if (we(ma)) {
    k();
    var e = De();
    if (!e)
      throw H("FragmentDefinition");
    k();
    var t = en();
    if (!t)
      throw H("FragmentDefinition");
    var i = at(!1), r = ti();
    if (!r)
      throw H("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: i,
      selectionSet: r
    };
  }
}
var ba = /(?:query|mutation|subscription)/y;
function va() {
  var e, t, i = [], r = [];
  (e = we(ba)) && (k(), t = De(), i = function() {
    var o, s = [];
    if (k(), U.charCodeAt(A) === 40) {
      for (A++, k(); o = we(Hr); ) {
        if (k(), U.charCodeAt(A++) !== 58)
          throw H("VariableDefinition");
        var l = Xr(), d = void 0;
        if (U.charCodeAt(A) === 61 && (A++, k(), !(d = Qt(!0))))
          throw H("VariableDefinition");
        k(), s.push({
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
          directives: at(!0)
        });
      }
      if (U.charCodeAt(A++) !== 41)
        throw H("VariableDefinition");
      k();
    }
    return s;
  }(), r = at(!1));
  var n = ti();
  if (n)
    return {
      kind: "OperationDefinition",
      operation: e || "query",
      name: t,
      variableDefinitions: i,
      directives: r,
      selectionSet: n
    };
}
function Sa(e, t) {
  return U = typeof e.body == "string" ? e.body : e, A = 0, function() {
    var r;
    k();
    for (var n = []; r = ga() || va(); )
      n.push(r);
    return {
      kind: "Document",
      definitions: n
    };
  }();
}
function wa(e) {
  return JSON.stringify(e);
}
function Oa(e) {
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
      var i = e.arguments.map(oe.Argument), r = t + "(" + i.join(", ") + ")";
      t = r.length > 80 ? t + `(
  ` + i.join(`
`).replace(/\n/g, `
  `) + `
)` : r;
    }
    return Ae(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), e.selectionSet ? t + " " + oe.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Oa(e.value) : wa(e.value),
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
var qi = () => {
}, Ie = qi;
function _e(e) {
  return {
    tag: 0,
    0: e
  };
}
function jt(e) {
  return {
    tag: 1,
    0: e
  };
}
var Ia = (e) => e;
function ae(e) {
  return (t) => (i) => {
    var r = Ie;
    t((n) => {
      n === 0 ? i(0) : n.tag === 0 ? (r = n[0], i(n)) : e(n[0]) ? i(n) : r(0);
    });
  };
}
function It(e) {
  return (t) => (i) => t((r) => {
    r === 0 || r.tag === 0 ? i(r) : i(jt(e(r[0])));
  });
}
function Et(e) {
  return (t) => (i) => {
    var r = [], n = Ie, a = !1, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, r.length || i(0)) : s.tag === 0 ? n = s[0] : (a = !1, function(d) {
        var c = Ie;
        d((p) => {
          if (p === 0) {
            if (r.length) {
              var f = r.indexOf(c);
              f > -1 && (r = r.slice()).splice(f, 1), r.length || (o ? i(0) : a || (a = !0, n(0)));
            }
          } else
            p.tag === 0 ? (r.push(c = p[0]), c(0)) : r.length && (i(p), c(0));
        });
      }(e(s[0])), a || (a = !0, n(0))));
    }), i(_e((s) => {
      if (s === 1) {
        o || (o = !0, n(1));
        for (var l = 0, d = r, c = r.length; l < c; l++)
          d[l](1);
        r.length = 0;
      } else {
        !o && !a ? (a = !0, n(0)) : a = !1;
        for (var p = 0, f = r, m = r.length; p < m; p++)
          f[p](0);
      }
    }));
  };
}
function Ta(e) {
  return Et(Ia)(e);
}
function ot(e) {
  return Ta(Ea(e));
}
function Ri(e) {
  return (t) => (i) => {
    var r = !1;
    t((n) => {
      if (!r)
        if (n === 0)
          r = !0, i(0), e();
        else if (n.tag === 0) {
          var a = n[0];
          i(_e((o) => {
            o === 1 ? (r = !0, a(1), e()) : a(o);
          }));
        } else
          i(n);
    });
  };
}
function st(e) {
  return (t) => (i) => {
    var r = !1;
    t((n) => {
      if (!r)
        if (n === 0)
          r = !0, i(0);
        else if (n.tag === 0) {
          var a = n[0];
          i(_e((o) => {
            o === 1 && (r = !0), a(o);
          }));
        } else
          e(n[0]), i(n);
    });
  };
}
function yr(e) {
  return (t) => (i) => t((r) => {
    r === 0 ? i(0) : r.tag === 0 ? (i(r), e()) : i(r);
  });
}
function kt(e) {
  var t = [], i = Ie, r = !1;
  return (n) => {
    t.push(n), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var o = 0, s = t, l = t.length; o < l; o++)
          s[o](0);
        t.length = 0;
      } else if (a.tag === 0)
        i = a[0];
      else {
        r = !1;
        for (var d = 0, c = t, p = t.length; d < p; d++)
          c[d](a);
      }
    }), n(_e((a) => {
      if (a === 1) {
        var o = t.indexOf(n);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || i(1);
      } else
        r || (r = !0, i(0));
    }));
  };
}
function hr(e) {
  return (t) => (i) => {
    var r = Ie, n = Ie, a = !1, o = !1, s = !1, l = !1;
    t((d) => {
      l || (d === 0 ? (l = !0, s || i(0)) : d.tag === 0 ? r = d[0] : (s && (n(1), n = Ie), a ? a = !1 : (a = !0, r(0)), function(p) {
        s = !0, p((f) => {
          s && (f === 0 ? (s = !1, l ? i(0) : a || (a = !0, r(0))) : f.tag === 0 ? (o = !1, (n = f[0])(0)) : (i(f), o ? o = !1 : n(0)));
        });
      }(e(d[0]))));
    }), i(_e((d) => {
      d === 1 ? (l || (l = !0, r(1)), s && (s = !1, n(1))) : (!l && !a && (a = !0, r(0)), s && !o && (o = !0, n(0)));
    }));
  };
}
function tn(e) {
  return (t) => (i) => {
    var r = Ie, n = !1, a = 0;
    t((o) => {
      n || (o === 0 ? (n = !0, i(0)) : o.tag === 0 ? e <= 0 ? (n = !0, i(0), o[0](1)) : r = o[0] : a++ < e ? (i(o), !n && a >= e && (n = !0, i(0), r(1))) : i(o));
    }), i(_e((o) => {
      o === 1 && !n ? (n = !0, r(1)) : o === 0 && !n && a < e && r(0);
    }));
  };
}
function Mi(e) {
  return (t) => (i) => {
    var r = Ie, n = Ie, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, n(1), i(0)) : o.tag === 0 ? (r = o[0], e((s) => {
        s === 0 || (s.tag === 0 ? (n = s[0])(0) : (a = !0, n(1), r(1), i(0)));
      })) : i(o));
    }), i(_e((o) => {
      o === 1 && !a ? (a = !0, r(1), n(1)) : a || r(0);
    }));
  };
}
function rn(e, t) {
  return (i) => (r) => {
    var n = Ie, a = !1;
    i((o) => {
      a || (o === 0 ? (a = !0, r(0)) : o.tag === 0 ? (n = o[0], r(o)) : e(o[0]) ? r(o) : (a = !0, t && r(o), r(0), n(1)));
    });
  };
}
function Pa(e) {
  return (t) => e()(t);
}
function nn(e) {
  return (t) => {
    var i = e[Symbol.asyncIterator](), r = !1, n = !1, a = !1, o;
    t(_e(async (s) => {
      if (s === 1)
        r = !0, i.return && i.return();
      else if (n)
        a = !0;
      else {
        for (a = n = !0; a && !r; )
          if ((o = await i.next()).done)
            r = !0, i.return && await i.return(), t(0);
          else
            try {
              a = !1, t(jt(o.value));
            } catch (l) {
              if (i.throw)
                (r = !!(await i.throw(l)).done) && t(0);
              else
                throw l;
            }
        n = !1;
      }
    }));
  };
}
function Aa(e) {
  return e[Symbol.asyncIterator] ? nn(e) : (t) => {
    var i = e[Symbol.iterator](), r = !1, n = !1, a = !1, o;
    t(_e((s) => {
      if (s === 1)
        r = !0, i.return && i.return();
      else if (n)
        a = !0;
      else {
        for (a = n = !0; a && !r; )
          if ((o = i.next()).done)
            r = !0, i.return && i.return(), t(0);
          else
            try {
              a = !1, t(jt(o.value));
            } catch (l) {
              if (i.throw)
                (r = !!i.throw(l).done) && t(0);
              else
                throw l;
            }
        n = !1;
      }
    }));
  };
}
var Ea = Aa;
function Tt(e) {
  return (t) => {
    var i = !1;
    t(_e((r) => {
      r === 1 ? i = !0 : i || (i = !0, t(jt(e)), t(0));
    }));
  };
}
function Ui(e) {
  return (t) => {
    var i = !1, r = e({
      next(n) {
        i || t(jt(n));
      },
      complete() {
        i || (i = !0, t(0));
      }
    });
    t(_e((n) => {
      n === 1 && !i && (i = !0, r());
    }));
  };
}
function mr() {
  var e, t;
  return {
    source: kt(Ui((i) => (e = i.next, t = i.complete, qi))),
    next(i) {
      e && e(i);
    },
    complete() {
      t && t();
    }
  };
}
function gr(e) {
  return Ui((t) => (e.then((i) => {
    Promise.resolve(i).then(() => {
      t.next(i), t.complete();
    });
  }), qi));
}
function Ke(e) {
  return (t) => {
    var i = Ie, r = !1;
    return t((n) => {
      n === 0 ? r = !0 : n.tag === 0 ? (i = n[0])(0) : r || (e(n[0]), i(0));
    }), {
      unsubscribe() {
        r || (r = !0, i(1));
      }
    };
  };
}
function ka(e) {
  Ke((t) => {
  })(e);
}
function Na(e) {
  return new Promise((t) => {
    var i = Ie, r;
    e((n) => {
      n === 0 ? Promise.resolve(r).then(t) : n.tag === 0 ? (i = n[0])(0) : (r = n[0], i(0));
    });
  });
}
var ja = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new Oi(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new Oi(e);
class _t extends Error {
  constructor(t) {
    var i = (t.graphQLErrors || []).map(ja), r = ((n, a) => {
      var o = "";
      if (n)
        return `[Network] ${n.message}`;
      if (a)
        for (var s of a)
          o && (o += `
`), o += `[GraphQL] ${s.message}`;
      return o;
    })(t.networkError, i);
    super(r), this.name = "CombinedError", this.message = r, this.graphQLErrors = i, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var Ii = (e, t) => {
  for (var i = 0 | (t || 5381), r = 0, n = 0 | e.length; r < n; r++)
    i = (i << 5) + i + e.charCodeAt(r);
  return i;
}, Qe = /* @__PURE__ */ new Set(), br = /* @__PURE__ */ new WeakMap(), et = (e) => {
  if (e === null || Qe.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return et(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var i of e)
      t.length > 1 && (t += ","), t += et(i) || "null";
    return t += "]";
  } else if (Jt !== ut && e instanceof Jt || Yt !== ut && e instanceof Yt)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var n = br.get(e) || Math.random().toString(36).slice(2);
    return br.set(e, n), et({
      __key: n
    });
  }
  Qe.add(e);
  var a = "{";
  for (var o of r) {
    var s = et(e[o]);
    s && (a.length > 1 && (a += ","), a += et(o) + ":" + s);
  }
  return Qe.delete(e), a += "}";
}, Ti = (e, t, i) => {
  if (!(i == null || typeof i != "object" || i.toJSON || Qe.has(i)))
    if (Array.isArray(i))
      for (var r = 0, n = i.length; r < n; r++)
        Ti(e, `${t}.${r}`, i[r]);
    else if (i instanceof Jt || i instanceof Yt)
      e.set(t, i);
    else {
      Qe.add(i);
      for (var a of Object.keys(i))
        Ti(e, `${t}.${a}`, i[a]);
    }
}, Kt = (e) => (Qe.clear(), et(e));
let ut = class {
};
var Jt = typeof File < "u" ? File : ut, Yt = typeof Blob < "u" ? Blob : ut, _a = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Ca = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, xa = (e, t) => t % 2 == 0 ? e.replace(Ca, `
`) : e, vr = (e) => e.split(_a).map(xa).join("").trim(), Sr = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), Gi = (e) => {
  var t;
  return typeof e == "string" ? t = vr(e) : e.loc && Lt.get(e.__key) === e ? t = e.loc.source.body : (t = Sr.get(e) || vr(ke(e)), Sr.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, wr = (e) => {
  var t = Ii(Gi(e));
  if (e.definitions) {
    var i = on(e);
    i && (t = Ii(`
# ${i}`, t));
  }
  return t;
}, an = (e) => {
  var t, i;
  return typeof e == "string" ? (t = wr(e), i = Lt.get(t) || Sa(e)) : (t = e.__key || wr(e), i = Lt.get(t) || e), i.loc || Gi(i), i.__key = t, Lt.set(t, i), i;
}, pi = (e, t, i) => {
  var r = t || {}, n = an(e), a = Kt(r), o = n.__key;
  return a !== "{}" && (o = Ii(a, o)), {
    key: o,
    query: n,
    variables: r,
    extensions: i
  };
}, on = (e) => {
  for (var t of e.definitions)
    if (t.kind === rt.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, Da = (e) => {
  for (var t of e.definitions)
    if (t.kind === rt.OPERATION_DEFINITION)
      return t.operation;
}, Pi = (e, t, i) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var r = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new _t({
      graphQLErrors: t.errors,
      response: i
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? r : t.hasNext,
    stale: !1
  };
}, Ai = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var i of Object.keys(t))
      e[i] = Ai(e[i], t[i]);
    return e;
  }
  return t;
}, Ei = (e, t, i) => {
  var r = e.error ? e.error.graphQLErrors : [], n = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, o = t.incremental;
  "path" in t && (o = [t]);
  var s = {
    data: e.data
  };
  if (o)
    for (var l of o) {
      Array.isArray(l.errors) && r.push(...l.errors), l.extensions && (Object.assign(a, l.extensions), n = !0);
      for (var d = "data", c = s, p = 0, f = l.path.length; p < f; d = l.path[p++])
        c = c[d] = Array.isArray(c[d]) ? [...c[d]] : {
          ...c[d]
        };
      if (l.items)
        for (var m = +d >= 0 ? d : 0, g = 0, S = l.items.length; g < S; g++)
          c[m + g] = Ai(c[m + g], l.items[g]);
      else
        l.data !== void 0 && (c[d] = Ai(c[d], l.data));
    }
  else
    s.data = t.data || e.data, r = t.errors || r;
  return {
    operation: e.operation,
    data: s.data,
    error: r.length ? new _t({
      graphQLErrors: r,
      response: i
    }) : void 0,
    extensions: n ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, sn = (e, t, i) => ({
  operation: e,
  data: void 0,
  error: new _t({
    networkError: t,
    response: i
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function un(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Gi(e.query),
    operationName: on(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var Fa = (e, t) => {
  var i = e.kind === "query" && e.context.preferGetMethod;
  if (!i || !t)
    return e.context.url;
  var r = new URL(e.context.url);
  for (var n in t) {
    var a = t[n];
    a && r.searchParams.set(n, typeof a == "object" ? Kt(a) : a);
  }
  var o = r.toString();
  return o.length > 2047 && i !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, Va = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var i = Kt(t), r = ((s) => {
      var l = /* @__PURE__ */ new Map();
      return (Jt !== ut || Yt !== ut) && (Qe.clear(), Ti(l, "variables", s)), l;
    })(t.variables);
    if (r.size) {
      var n = new FormData();
      n.append("operations", i), n.append("map", Kt({
        ...[...r.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of r.values())
        n.append("" + a++, o);
      return n;
    }
    return i;
  }
}, $a = (e, t) => {
  var i = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, r = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (r.headers)
    for (var n in r.headers)
      i[n.toLowerCase()] = r.headers[n];
  var a = Va(e, t);
  return typeof a == "string" && !i["content-type"] && (i["content-type"] = "application/json"), {
    ...r,
    method: a ? "POST" : "GET",
    body: a,
    headers: i
  };
}, qa = typeof TextDecoder < "u" ? new TextDecoder() : null, Ra = /boundary="?([^=";]+)"?/i, Ma = /data: ?([^\n]+)/, Or = (e) => e.constructor.name === "Buffer" ? e.toString() : qa.decode(e);
async function* Ir(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield Or(t);
  else {
    var i = e.body.getReader(), r;
    try {
      for (; !(r = await i.read()).done; )
        yield Or(r.value);
    } finally {
      i.cancel();
    }
  }
}
async function* Tr(e, t) {
  var i = "", r;
  for await (var n of e)
    for (i += n; (r = i.indexOf(t)) > -1; )
      yield i.slice(0, r), i = i.slice(r + t.length);
}
async function* Ua(e, t, i) {
  var r = !0, n = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, i)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (c, p) {
        var f = c.match(Ra), m = "--" + (f ? f[1] : "-"), g = !0, S;
        for await (var D of Tr(Ir(p), `\r
` + m)) {
          if (g) {
            g = !1;
            var R = D.indexOf(m);
            if (R > -1)
              D = D.slice(R + m.length);
            else
              continue;
          }
          try {
            yield S = JSON.parse(D.slice(D.indexOf(`\r
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
      }(o, a);
    else if (/text\/event-stream/i.test(o))
      s = async function* (c) {
        var p;
        for await (var f of Tr(Ir(c), `

`)) {
          var m = f.match(Ma);
          if (m) {
            var g = m[1];
            try {
              yield p = JSON.parse(g);
            } catch (S) {
              if (!p)
                throw S;
            }
            if (p && p.hasNext === !1)
              break;
          }
        }
        p && p.hasNext !== !1 && (yield {
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
      n = n ? Ei(n, l, a) : Pi(e, l, a), r = !1, yield n, r = !0;
    n || (yield n = Pi(e, {}, a));
  } catch (d) {
    if (!r)
      throw d;
    yield sn(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : d, a);
  }
}
function Ga(e, t, i) {
  var r;
  return typeof AbortController < "u" && (i.signal = (r = new AbortController()).signal), Ri(() => {
    r && r.abort();
  })(ae((n) => !!n)(nn(Ua(e, t, i))));
}
var ki = (e, t) => {
  if (Array.isArray(e))
    for (var i of e)
      ki(i, t);
  else if (typeof e == "object" && e !== null)
    for (var r in e)
      r === "__typename" && typeof e[r] == "string" ? t.add(e[r]) : ki(e[r], t);
  return t;
}, Ni = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var i = [];
    for (var r of e.definitions) {
      var n = Ni(r);
      t = t || n !== r, i.push(n);
    }
    if (t)
      return {
        ...e,
        definitions: i
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === rt.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === rt.FIELD && s.name.value === "__typename" && !s.alias;
        var l = Ni(s);
        t = t || l !== s, a.push(l);
      }
      if (o || (t = !0, a.push({
        kind: rt.FIELD,
        name: {
          kind: rt.NAME,
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
}, Pr = /* @__PURE__ */ new Map(), La = (e) => {
  var t = an(e), i = Pr.get(t.__key);
  return i || (Pr.set(t.__key, i = Ni(t)), Object.defineProperty(i, "__key", {
    value: t.__key,
    enumerable: !1
  })), i;
}, ji = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((n) => ji(n));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var i = {};
    for (var r in e)
      r === "__typename" ? Object.defineProperty(i, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : i[r] = ji(e[r]);
    return i;
  } else
    return e;
};
function Ar(e) {
  var t = (i) => e(i);
  return t.toPromise = () => Na(tn(1)(ae((i) => !i.stale && !i.hasNext)(t))), t.then = (i, r) => t.toPromise().then(i, r), t.subscribe = (i) => Ke(i)(t), t;
}
function lt(e, t, i) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...i
    } : i || t.context
  };
}
var Er = (e, t) => lt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), Ba = () => {
}, yi = ({ kind: e }) => e !== "mutation" && e !== "query", za = ({ forward: e, client: t, dispatchDebug: i }) => {
  var r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = (s) => {
    var l = lt(s.kind, s);
    return l.query = La(s.query), l;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || r.has(s.key));
  return (s) => {
    var l = It((c) => {
      var p = r.get(c.key);
      process.env.NODE_ENV !== "production" && i({
        operation: c,
        ...p ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var f = p;
      return process.env.NODE_ENV !== "production" && (f = {
        ...f,
        operation: process.env.NODE_ENV !== "production" ? Er(c, {
          cacheOutcome: p ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (f.stale = !0, kr(t, c)), f;
    })(ae((c) => !yi(c) && o(c))(s)), d = st((c) => {
      var { operation: p } = c;
      if (p) {
        var f = p.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (f = ((v) => [...ki(v, /* @__PURE__ */ new Set())])(c.data).concat(f)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var m = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && i({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${f}`,
            operation: p,
            data: {
              typenames: f,
              response: c
            },
            source: "cacheExchange"
          });
          for (var g = 0; g < f.length; g++) {
            var S = f[g], D = n.get(S);
            D || n.set(S, D = /* @__PURE__ */ new Set());
            for (var R of D.values())
              m.add(R);
            D.clear();
          }
          for (var w of m.values())
            r.has(w) && (p = r.get(w).operation, r.delete(w), kr(t, p));
        } else if (p.kind === "query" && c.data) {
          r.set(p.key, c);
          for (var B = 0; B < f.length; B++) {
            var h = f[B], T = n.get(h);
            T || n.set(h, T = /* @__PURE__ */ new Set()), T.add(p.key);
          }
        }
      }
    })(e(ae((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(It((c) => process.env.NODE_ENV !== "production" ? Er(c, {
      cacheOutcome: "miss"
    }) : c)(ot([It(a)(ae((c) => !yi(c) && !o(c))(s)), ae((c) => yi(c))(s)])))));
    return ot([l, d]);
  };
}, kr = (e, t) => e.reexecuteOperation(lt(t.kind, t, {
  requestPolicy: "network-only"
})), Nr = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: i }) => ({ client: r, forward: n }) => {
  var a = i || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = Et((d) => {
      var { key: c } = d, p = ae((f) => f.kind === "teardown" && f.key === c)(o);
      return Mi(p)(((f) => {
        var m = e(un(f), f);
        return Ui(({ next: g, complete: S }) => {
          var D = !1, R, w;
          return Promise.resolve().then(() => {
            D || (R = m.subscribe({
              next(B) {
                g(w = w ? Ei(w, B) : Pi(f, B));
              },
              error(B) {
                g(sn(f, B));
              },
              complete() {
                D || (D = !0, f.kind === "subscription" && r.reexecuteOperation(lt("teardown", f, f.context)), w && w.hasNext && g(Ei(w, {
                  hasNext: !1
                })), S());
              }
            }));
          }), () => {
            D = !0, R && R.unsubscribe();
          };
        });
      })(d));
    })(ae((d) => d.kind !== "teardown" && a(d))(o)), l = n(ae((d) => d.kind === "teardown" || !a(d))(o));
    return ot([s, l]);
  };
}, Wa = ({ forward: e, dispatchDebug: t }) => (i) => {
  var r = Et((a) => {
    var o = un(a), s = Fa(a, o), l = $a(a, o);
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
    var d = Mi(ae((c) => c.kind === "teardown" && c.key === a.key)(i))(Ga(a, s, l));
    return process.env.NODE_ENV !== "production" ? st((c) => {
      var p = c.data ? void 0 : c.error;
      process.env.NODE_ENV !== "production" && t({
        type: p ? "fetchError" : "fetchSuccess",
        message: `A ${p ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: s,
          fetchOptions: l,
          value: p || c
        },
        source: "fetchExchange"
      });
    })(d) : d;
  })(ae((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(i)), n = e(ae((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(i));
  return ot([r, n]);
}, Qa = (e) => ({ client: t, forward: i, dispatchDebug: r }) => e.reduceRight((n, a) => {
  var o = !1;
  return a({
    client: t,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return kt(n(kt(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && r({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, i), ln = ({ onOperation: e, onResult: t, onError: i }) => ({ forward: r }) => (n) => Et((a) => {
  i && a.error && i(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? gr(o) : Tt(o);
})(r(Et((a) => {
  var o = e && e(a) || a;
  return "then" in o ? gr(o) : Tt(o);
})(n))), Ka = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = st((i) => {
  if (i.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var r = `No exchange has handled operations of kind "${i.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: r,
      operation: i,
      source: "fallbackExchange"
    }), console.warn(r);
  }
})(t)), ae((i) => !1)(t)), jr = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var i = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = mr();
  function d(h) {
    (h.kind === "mutation" || h.kind === "teardown" || !a.has(h.key)) && (h.kind === "teardown" ? a.delete(h.key) : h.kind !== "mutation" && a.add(h.key), l.next(h));
  }
  var c = !1;
  function p(h) {
    if (h && d(h), !c) {
      for (c = !0; c && (h = o.shift()); )
        d(h);
      c = !1;
    }
  }
  var f = (h) => {
    var T = Mi(ae((v) => v.kind === "teardown" && v.key === h.key)(l.source))(ae((v) => v.operation.kind === h.kind && v.operation.key === h.key && (!v.operation.context._instance || v.operation.context._instance === h.context._instance))(B));
    return h.kind !== "query" ? T = rn((v) => !!v.hasNext, !0)(T) : T = hr((v) => {
      var z = Tt(v);
      return v.stale || v.hasNext ? z : ot([z, It(() => (v.stale = !0, v))(tn(1)(ae((Me) => Me.key === h.key)(l.source)))]);
    })(T), h.kind !== "mutation" ? T = Ri(() => {
      a.delete(h.key), r.delete(h.key), n.delete(h.key), c = !1;
      for (var v = o.length - 1; v >= 0; v--)
        o[v].key === h.key && o.splice(v, 1);
      d(lt("teardown", h, h.context));
    })(st((v) => {
      if (v.stale) {
        for (var z of o)
          if (z.key === v.operation.key) {
            a.delete(z.key);
            break;
          }
      } else
        v.hasNext || a.delete(h.key);
      r.set(h.key, v);
    })(T)) : T = yr(() => {
      d(h);
    })(T), t.maskTypename && (T = It((v) => ({
      ...v,
      data: ji(v.data, !0)
    }))(T)), kt(T);
  }, m = this instanceof e ? this : Object.create(e.prototype), g = Object.assign(m, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(h) {
      h.kind === "teardown" ? p(h) : (h.kind === "mutation" || n.has(h.key)) && (o.push(h), Promise.resolve().then(p));
    },
    createRequestOperation(h, T, v) {
      v || (v = {});
      var z;
      if (process.env.NODE_ENV !== "production" && h !== "teardown" && (z = Da(T.query)) !== h)
        throw new Error(`Expected operation of type "${h}" but found "${z}"`);
      return lt(h, T, {
        _instance: h === "mutation" ? i = i + 1 | 0 : void 0,
        ...s,
        ...v,
        requestPolicy: v.requestPolicy || s.requestPolicy,
        suspense: v.suspense || v.suspense !== !1 && g.suspense
      });
    },
    executeRequestOperation(h) {
      return h.kind === "mutation" ? Ar(f(h)) : Ar(Pa(() => {
        var T = n.get(h.key);
        T || n.set(h.key, T = f(h)), T = yr(() => {
          p(h);
        })(T);
        var v = r.get(h.key);
        return h.kind === "query" && v && (v.stale || v.hasNext) ? hr(Tt)(ot([T, ae((z) => z === r.get(h.key))(Tt(v))])) : T;
      }));
    },
    executeQuery(h, T) {
      var v = g.createRequestOperation("query", h, T);
      return g.executeRequestOperation(v);
    },
    executeSubscription(h, T) {
      var v = g.createRequestOperation("subscription", h, T);
      return g.executeRequestOperation(v);
    },
    executeMutation(h, T) {
      var v = g.createRequestOperation("mutation", h, T);
      return g.executeRequestOperation(v);
    },
    readQuery(h, T, v) {
      var z = null;
      return Ke((Me) => {
        z = Me;
      })(g.query(h, T, v)).unsubscribe(), z;
    },
    query: (h, T, v) => g.executeQuery(pi(h, T), v),
    subscription: (h, T, v) => g.executeSubscription(pi(h, T), v),
    mutation: (h, T, v) => g.executeMutation(pi(h, T), v)
  }), S = Ba;
  if (process.env.NODE_ENV !== "production") {
    var { next: D, source: R } = mr();
    g.subscribeToDebugTarget = (h) => Ke(h)(R), S = D;
  }
  var w = Qa(t.exchanges), B = kt(w({
    client: g,
    dispatchDebug: S,
    forward: Ka({
      dispatchDebug: S
    })
  })(l.source));
  return ka(B), g;
};
function pe(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Be(e) {
  return pe(e) === "object";
}
function Ja(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function _r(e, t) {
  return e.length < 124 ? e : t;
}
const Ya = "graphql-transport-ws";
var fe;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(fe || (fe = {}));
var J;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(J || (J = {}));
function cn(e) {
  if (!Be(e))
    throw new Error(`Message is expected to be an object, but got ${pe(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${pe(e.type)}`);
  switch (e.type) {
    case J.ConnectionInit:
    case J.ConnectionAck:
    case J.Ping:
    case J.Pong: {
      if (e.payload != null && !Be(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case J.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${pe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Be(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${pe(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${pe(e.payload.query)}`);
      if (e.payload.variables != null && !Be(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${pe(e.payload.variables)}`);
      if (e.payload.operationName != null && pe(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${pe(e.payload.operationName)}`);
      if (e.payload.extensions != null && !Be(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${pe(e.payload.extensions)}`);
      break;
    }
    case J.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${pe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Be(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${pe(e.payload)}`);
      break;
    }
    case J.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${pe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Ja(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case J.Complete: {
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
function Ha(e, t) {
  return cn(typeof e == "string" ? JSON.parse(e, t) : e);
}
function St(e, t) {
  return cn(e), JSON.stringify(e, t);
}
function Za(e) {
  const {
    url: t,
    connectionParams: i,
    lazy: r = !0,
    onNonLazyError: n = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: s,
    connectionAckWaitTimeout: l = 0,
    retryAttempts: d = 5,
    retryWait: c = async function(M) {
      let $ = 1e3;
      for (let _ = 0; _ < M; _++)
        $ *= 2;
      await new Promise((_) => setTimeout(_, $ + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: p = Mt,
    isFatalConnectionProblem: f,
    on: m,
    webSocketImpl: g,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: S = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (M) => {
        const $ = Math.random() * 16 | 0;
        return (M == "x" ? $ : $ & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: D,
    jsonMessageReviver: R
  } = e;
  let w;
  if (g) {
    if (!eo(g))
      throw new Error("Invalid WebSocket implementation provided");
    w = g;
  } else
    typeof WebSocket < "u" ? w = WebSocket : typeof global < "u" ? w = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (w = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!w)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const B = w, h = (() => {
    const P = (() => {
      const $ = {};
      return {
        on(_, L) {
          return $[_] = L, () => {
            delete $[_];
          };
        },
        emit(_) {
          var L;
          "id" in _ && ((L = $[_.id]) === null || L === void 0 || L.call($, _));
        }
      };
    })(), M = {
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
      on($, _) {
        const L = M[$];
        return L.push(_), () => {
          L.splice(L.indexOf(_), 1);
        };
      },
      emit($, ..._) {
        for (const L of [...M[$]])
          L(..._);
      }
    };
  })();
  function T(P) {
    const M = [
      // errors are fatal and more critical than close events, throw them first
      h.on("error", ($) => {
        M.forEach((_) => _()), P($);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      h.on("closed", ($) => {
        M.forEach((_) => _()), P($);
      })
    ];
  }
  let v, z = 0, Me, Je = !1, Ye = 0, xt = !1;
  async function mt() {
    clearTimeout(Me);
    const [P, M] = await (v ?? (v = new Promise((L, Ce) => (async () => {
      if (Je) {
        if (await c(Ye), !z)
          return v = void 0, Ce({ code: 1e3, reason: "All Subscriptions Gone" });
        Ye++;
      }
      h.emit("connecting");
      const V = new B(typeof t == "function" ? await t() : t, Ya);
      let $e, Ue;
      function Le() {
        isFinite(o) && o > 0 && (clearTimeout(Ue), Ue = setTimeout(() => {
          V.readyState === B.OPEN && (V.send(St({ type: J.Ping })), h.emit("ping", !1, void 0));
        }, o));
      }
      T((X) => {
        v = void 0, clearTimeout($e), clearTimeout(Ue), Ce(X), Mt(X) && X.code === 4499 && (V.close(4499, "Terminated"), V.onerror = null, V.onclose = null);
      }), V.onerror = (X) => h.emit("error", X), V.onclose = (X) => h.emit("closed", X), V.onopen = async () => {
        try {
          h.emit("opened", V);
          const X = typeof i == "function" ? await i() : i;
          if (V.readyState !== B.OPEN)
            return;
          V.send(St(X ? {
            type: J.ConnectionInit,
            payload: X
          } : {
            type: J.ConnectionInit
            // payload is completely absent if not provided
          }, D)), isFinite(l) && l > 0 && ($e = setTimeout(() => {
            V.close(fe.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), Le();
        } catch (X) {
          h.emit("error", X), V.close(fe.InternalClientError, _r(X instanceof Error ? X.message : new Error(X).message, "Internal client error"));
        }
      };
      let Ge = !1;
      V.onmessage = ({ data: X }) => {
        try {
          const Q = Ha(X, R);
          if (h.emit("message", Q), Q.type === "ping" || Q.type === "pong") {
            h.emit(Q.type, !0, Q.payload), Q.type === "pong" ? Le() : s || (V.send(St(Q.payload ? {
              type: J.Pong,
              payload: Q.payload
            } : {
              type: J.Pong
              // payload is completely absent if not provided
            })), h.emit("pong", !1, Q.payload));
            return;
          }
          if (Ge)
            return;
          if (Q.type !== J.ConnectionAck)
            throw new Error(`First message cannot be of type ${Q.type}`);
          clearTimeout($e), Ge = !0, h.emit("connected", V, Q.payload), Je = !1, Ye = 0, L([
            V,
            new Promise((Dt, He) => T(He))
          ]);
        } catch (Q) {
          V.onmessage = null, h.emit("error", Q), V.close(fe.BadResponse, _r(Q instanceof Error ? Q.message : new Error(Q).message, "Bad response"));
        }
      };
    })())));
    P.readyState === B.CLOSING && await M;
    let $ = () => {
    };
    const _ = new Promise((L) => $ = L);
    return [
      P,
      $,
      Promise.race([
        // wait for
        _.then(() => {
          if (!z) {
            const L = () => P.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? Me = setTimeout(() => {
              P.readyState === B.OPEN && L();
            }, a) : L();
          }
        }),
        // or
        M
      ])
    ];
  }
  function Te(P) {
    if (Mt(P) && (Xa(P.code) || [
      fe.InternalServerError,
      fe.InternalClientError,
      fe.BadRequest,
      fe.BadResponse,
      fe.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      fe.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      fe.SubscriberAlreadyExists,
      fe.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(P.code)))
      throw P;
    if (xt)
      return !1;
    if (Mt(P) && P.code === 1e3)
      return z > 0;
    if (!d || Ye >= d || !p(P) || f != null && f(P))
      throw P;
    return Je = !0;
  }
  return r || (async () => {
    for (z++; ; )
      try {
        const [, , P] = await mt();
        await P;
      } catch (P) {
        try {
          if (!Te(P))
            return;
        } catch (M) {
          return n == null ? void 0 : n(M);
        }
      }
  })(), {
    on: h.on,
    subscribe(P, M) {
      const $ = S(P);
      let _ = !1, L = !1, Ce = () => {
        z--, _ = !0;
      };
      return (async () => {
        for (z++; ; )
          try {
            const [V, $e, Ue] = await mt();
            if (_)
              return $e();
            const Le = h.onMessage($, (Ge) => {
              switch (Ge.type) {
                case J.Next: {
                  M.next(Ge.payload);
                  return;
                }
                case J.Error: {
                  L = !0, _ = !0, M.error(Ge.payload), Ce();
                  return;
                }
                case J.Complete: {
                  _ = !0, Ce();
                  return;
                }
              }
            });
            V.send(St({
              id: $,
              type: J.Subscribe,
              payload: P
            }, D)), Ce = () => {
              !_ && V.readyState === B.OPEN && V.send(St({
                id: $,
                type: J.Complete
              }, D)), z--, _ = !0, $e();
            }, await Ue.finally(Le);
            return;
          } catch (V) {
            if (!Te(V))
              return;
          }
      })().then(() => {
        L || M.complete();
      }).catch((V) => {
        M.error(V);
      }), () => {
        _ || Ce();
      };
    },
    async dispose() {
      if (xt = !0, v) {
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
function Mt(e) {
  return Be(e) && "code" in e && "reason" in e;
}
function Xa(e) {
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
function eo(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var tt = null;
typeof WebSocket < "u" ? tt = WebSocket : typeof MozWebSocket < "u" ? tt = MozWebSocket : typeof global < "u" ? tt = global.WebSocket || global.MozWebSocket : typeof window < "u" ? tt = window.WebSocket || window.MozWebSocket : typeof self < "u" && (tt = self.WebSocket || self.MozWebSocket);
const to = tt;
function Se(e) {
  if (typeof e != "object")
    return e;
  var t, i, r = Object.prototype.toString.call(e);
  if (r === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      i = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && i[t] !== e[t] && (i[t] = Se(e[t]));
    } else {
      i = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(i, t, {
          value: Se(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : i[t] = Se(e[t]);
    }
    return i;
  }
  if (r === "[object Array]") {
    for (t = e.length, i = Array(t); t--; )
      i[t] = Se(e[t]);
    return i;
  }
  return r === "[object Set]" ? (i = /* @__PURE__ */ new Set(), e.forEach(function(n) {
    i.add(Se(n));
  }), i) : r === "[object Map]" ? (i = /* @__PURE__ */ new Map(), e.forEach(function(n, a) {
    i.set(Se(a), Se(n));
  }), i) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (i = new RegExp(e.source, e.flags), i.lastIndex = e.lastIndex, i) : r === "[object DataView]" ? new e.constructor(Se(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var de;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(de || (de = {}));
class io {
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
    }), this.__gadget.instantiatedFields = Se(t), this.__gadget.persistedFields = Se(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((r) => this.__gadget.fieldKeysTracker[r] = !0));
    const i = {
      get: (r, n) => {
        if (n in this)
          return this[n];
        if (n in r)
          return r[n];
      },
      set: (r, n, a) => (this.trackKey(n), r[n.toString()] = a, !0)
    };
    return new Proxy(this.__gadget.fields, i);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const i = t.toString();
    this.__gadget.fieldKeysTracker[i] || (this.__gadget.fieldKeysTracker[i] = !0, this.__gadget.fieldKeys.push(i));
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = de.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const i = t == de.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((r) => !Ut(i[r], this.__gadget.fields[r]));
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
  setField(t, i) {
    return this.trackKey(t), this.__gadget.fields[t] = i;
  }
  changes(t, i = de.SinceLoaded) {
    const n = (typeof t == "string" ? i : t || i) == de.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = n[t], o = this.__gadget.fields[t], s = !Ut(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const s = this.__gadget.fieldKeys[o];
        Ut(n[s], this.__gadget.fields[s]) || (a[s] = { current: this.__gadget.fields[s], previous: n[s] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = de.SinceLoaded) {
    const i = t == de.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, r = {};
    for (let n = 0; n < this.__gadget.fieldKeys.length; n++) {
      const a = this.__gadget.fieldKeys[n];
      Ut(i[a], this.__gadget.fields[a]) || (r[a] = this.__gadget.fields[a]);
    }
    return r;
  }
  changed(t, i = de.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, i).changed : this.hasChanges(t === void 0 ? i : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = de.SinceLoaded) {
    t == de.SinceLoaded ? this.__gadget.instantiatedFields = Se(this.__gadget.fields) : t == de.SinceLastPersisted && (this.__gadget.persistedFields = Se(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = de.SinceLoaded) {
    let i;
    t == de.SinceLoaded ? i = Object.keys(this.__gadget.instantiatedFields) : i = Object.keys(this.__gadget.persistedFields);
    for (const r of this.__gadget.fieldKeys)
      i.includes(r) || delete this.__gadget.fields[r];
    t == de.SinceLoaded ? Object.assign(this.__gadget.fields, Se(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, Se(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return xi({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const dn = io;
class fn extends Error {
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
class _i extends Error {
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
class ii extends Error {
  constructor(t, i) {
    super(t.startsWith("GGT_") ? t : `${i}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: i
    });
  }
}
class Cr extends Error {
  constructor(t) {
    let i;
    Ci(t) ? i = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : i = "GraphQL websocket closed unexpectedly by the server", super(i), Object.defineProperty(this, "code", {
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
class ro extends Error {
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
class no extends Error {
  constructor(t, i, r, n) {
    const a = i.slice(0, 3), o = i.length > 3 ? `, and ${i.length - 3} more error${i.length > 4 ? "s" : ""} need${i.length > 4 ? "" : "s"} to be corrected` : "";
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
    }), this.validationErrors = i, this.modelApiIdentifier = r, this.record = n;
  }
}
class pn extends Error {
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
class yn extends Error {
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
class ao extends Error {
  constructor(t, i) {
    super(t.length > 1 ? "Multiple errors occurred" : t[0].message), Object.defineProperty(this, "errors", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "results", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: i
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ErrorGroup"
    });
  }
  get code() {
    return `GGT_ERROR_GROUP(${this.errors.slice(0, 10).map((t) => {
      var i;
      return (i = t.code) !== null && i !== void 0 ? i : "GGT_UNKNOWN";
    }).join(",")})`;
  }
  /** @private */
  get statusCode() {
    return Math.max(...this.errors.map((t) => {
      var i;
      return (i = t.statusCode) !== null && i !== void 0 ? i : 500;
    }));
  }
}
function xr(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const ct = (e, t) => {
  const i = t.length;
  let r = 0;
  for (; e != null && r < i; )
    e = e[t[r++]];
  return r && r == i ? e : void 0;
}, Ci = (e) => (e == null ? void 0 : e.type) == "close", Fe = (e, t) => typeof e != "string" ? "" : ri(e, t), Dr = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ri = (e, t = !0) => {
  let i = "" + e;
  return t ? i = i.replace(/^[a-z\d]*/, (r) => Dr(r)) : i = i.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (r) => r.toLowerCase()), i = i.replace(/(?:_|(\/))([a-z\d]*)/gi, (r, n, a, o, s) => (n || (n = ""), "" + n + Dr(a))), i;
}, oo = (e) => `${ri(e)}Sort`, so = (e) => `${ri(e)}Filter`, uo = (e, t, i) => new pn(`More than one record found for ${e}.${t} = ${i}. Please confirm your unique validation is not reporting an error.`), lo = (e, t) => {
  if (e.fetching)
    return;
  const i = ct(e.data, t);
  if (i === void 0)
    return new fn(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null)
    return new yn(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, Re = (e, t, i = !1) => {
  var r;
  if (e.error)
    throw e.error instanceof _t && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const n = ct(e.data, t), a = ct(n, ["edges"]), o = a ?? n;
  if (n === void 0)
    throw new fn(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (n === null || i && Array.isArray(o) && o.length === 0)
    throw new yn(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return n;
}, Pt = (e, t) => {
  var i;
  if (e.error)
    throw e.error instanceof _t && (!((i = e.error.networkError) === null || i === void 0) && i.length) && (e.error.message = e.error.networkError.map((n) => "[Network] " + n.message).join(`
`)), e.error;
  const r = ct(e.data, t);
  return r ?? null;
}, Li = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new no(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new pn(e.message) : new ii(e.message, e.code);
}, ze = (e, t) => {
  const i = Re(e, t);
  if (!i.success) {
    const r = i.errors && i.errors[0];
    throw r ? Li(r) : new ii("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return i;
}, hn = (e) => {
  var t, i, r, n;
  if (!((i = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || i === void 0) && i.hydrations)
    return new na((n = (r = e.data) === null || r === void 0 ? void 0 : r.gadgetMeta) === null || n === void 0 ? void 0 : n.hydrations);
}, At = (e, t) => {
  const i = hn(e);
  return i && (t = i.apply(t)), new dn(t);
}, Bi = (e, t) => {
  const i = hn(e);
  return i && (t = i.apply(t)), t == null ? void 0 : t.map((r) => new dn(r));
}, Nt = (e, t) => {
  const i = t.edges.map((r) => r.node);
  return Bi(e, i);
}, xi = (e) => {
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
        for (let i = 0; i < e.length; i++) {
          const r = e[i];
          t[i] = r === void 0 ? null : xi(r);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const i of Object.keys(e)) {
          const r = xi(e[i]);
          r !== void 0 && (t[i] = r);
        }
        return t;
      }
    }
  }
}, hi = "gstk", Fr = (e) => {
  try {
    const t = window[e];
    return t.setItem(hi, hi), t.removeItem(hi), !0;
  } catch {
    return !1;
  }
}, Vr = Object.prototype.toString, $r = Object.getPrototypeOf, qr = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, wt = (e, t, i) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (i.indexOf(e) > -1 && i.indexOf(t) > -1)
    return !0;
  const r = Vr.call(e), n = Vr.call(t);
  let a, o, s;
  if (i.push(e, t), r != n || (a = qr(e), o = qr(t), a.length != o.length || a.some(function(l) {
    return !wt(e[l], t[l], i);
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
        if (s = a.next(), !wt(s.value, o.next().value, i))
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
        if (!(!(s in e) && !(s in t)) && (s in e != s in t || !wt(e[s], t[s], i)))
          return !1;
      return !0;
    case "Object":
      return wt($r(e), $r(t), i);
    default:
      return !1;
  }
}, Ut = (e, t) => wt(e, t, []);
class mn extends Error {
}
class co {
  constructor(t, i) {
    Object.defineProperty(this, "client", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "subscriptionClient", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: i
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
    throw Re(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new mn("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Re(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Re(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class fo {
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
  setItem(t, i) {
    this.values[t] = i;
  }
}
const po = (e) => {
  const t = [...e.definitions].reverse().find((i) => i.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((r) => r.kind == "Field").name.value;
}, Rr = ln({
  onOperation: (e) => {
    var t, i;
    (t = (i = e.context).operationName) !== null && t !== void 0 || (i.operationName = po(e.query) || "unknown");
  }
}), yo = ln({
  onOperation: (e) => {
    e.context.url && e.context.operationName && !e.context.url.includes("?") && (e.context.url += `?operation=${e.context.operationName}`);
  }
}), ho = 2, mo = 4800, go = 1e4, bo = [fe.ConnectionAcknowledgementTimeout, fe.ConnectionInitialisationTimeout], Mr = Symbol.for("gadget/connection"), vo = "token", So = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var ee;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(ee || (ee = {}));
class wo {
  constructor(t) {
    var i, r, n, a, o;
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
      value: ee.Anonymous
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
        let p = null, f;
        try {
          p = await this.waitForOpenedConnection({
            isFatalConnectionProblem(S) {
              return console.warn("Transport error encountered during transaction processing", S), !0;
            },
            connectionAckWaitTimeout: mo,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const m = new jr({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              Rr,
              ...this.exchanges.beforeAsync,
              Nr({
                forwardSubscription(S) {
                  const D = { ...S, query: S.query || "" };
                  return {
                    subscribe: (R) => ({
                      unsubscribe: p.subscribe(D, R)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          m[Mr] = this, f = new co(m, p), this.currentTransaction = f, await f.start();
          const g = await d(f);
          return await f.commit(), g;
        } catch (m) {
          try {
            f != null && f.open && await f.rollback();
          } catch (g) {
            g instanceof mn || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", g);
          }
          throw Ci(m) ? new Cr(m) : m;
        } finally {
          await (p == null ? void 0 : p.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (s, l = {}) => {
        var d;
        s = Oo(s, (d = this.options.baseRouteURL) !== null && d !== void 0 ? d : this.options.endpoint), this.isGadgetRequest(s) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == ee.Custom && await this.options.authenticationMode.custom.processFetch(s, l));
        const c = await this._fetchImplementation(s, l);
        if (this.authenticationMode == ee.BrowserSession) {
          const p = c.headers.get("x-set-authorization"), f = p != null && p.startsWith("Session ") ? p.replace("Session ", "") : null;
          f && this.sessionTokenStore.setItem(this.sessionStorageKey, f);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...s) => {
      const { fetch: l } = await import("./browser-ponyfill-98d7d84f.js").then((d) => d.b);
      return await l(...s);
    }, this.websocketImplementation = (r = (i = t.websocketImplementation) !== null && i !== void 0 ? i : globalThis == null ? void 0 : globalThis.WebSocket) !== null && r !== void 0 ? r : to, this.websocketsEndpoint = (n = t.websocketsEndpoint) !== null && n !== void 0 ? n : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${vo}-${this.endpoint}`;
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
    var i;
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = ee.InternalAuthToken : t.apiKey ? this.authenticationMode = ee.APIKey : t.custom && (this.authenticationMode = ee.Custom), this.options.authenticationMode = t), (i = this.authenticationMode) !== null && i !== void 0 || (this.authenticationMode = ee.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = ee.BrowserSession;
    const i = !t || typeof t == "boolean" ? Ot.Durable : t.storageType;
    let r;
    i == Ot.Durable && Fr("localStorage") ? r = window.localStorage : i == Ot.Session && Fr("sessionStorage") ? r = window.sessionStorage : r = new fo(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && r.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = r, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let i;
    if (typeof t == "string" ? i = t : typeof t == "object" && "url" in t ? i = t.url : i = String(t), Di(this.options.endpoint))
      return !!Di(i);
    const r = new URL(this.options.endpoint).host;
    return i.includes(r);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Rr, yo];
    typeof window < "u" && t.push(za), t.push(...this.exchanges.beforeAsync, Wa, Nr({
      forwardSubscription: (r) => ({
        subscribe: (n) => {
          const a = { ...r, query: r.query || "" };
          return {
            unsubscribe: this.getBaseSubscriptionClient().subscribe(a, n)
          };
        }
      })
    }), ...this.exchanges.afterAll);
    const i = new jr({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return i[Mr] = this, i;
  }
  newSubscriptionClient(t) {
    if (!this.websocketImplementation)
      throw new Error("Can't use this GadgetClient for this subscription-based operation as there's no global WebSocket implementation available. Please pass one as the `websocketImplementation` option to the GadgetClient constructor.");
    let i = this.websocketsEndpoint;
    if (t != null && t.urlParams) {
      const r = new URLSearchParams();
      for (const [n, a] of Object.entries(t.urlParams))
        a && r.set(n, a);
      i += "?" + r.toString();
    }
    return Za({
      url: i,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var r, n;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == ee.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == ee.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == ee.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == ee.Custom && await ((n = (r = this.options.authenticationMode) === null || r === void 0 ? void 0 : r.custom) === null || n === void 0 ? void 0 : n.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (r, n) => {
          var a, o, s, l, d, c;
          if (this.authenticationMode == ee.BrowserSession && (n != null && n.sessionToken)) {
            const p = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (p !== null && typeof p == "object" ? p.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, n.sessionToken);
          }
          (l = (s = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || s === void 0 ? void 0 : s.connected) === null || l === void 0 || l.call(s, r, n), (c = (d = t == null ? void 0 : t.on) === null || d === void 0 ? void 0 : d.connected) === null || c === void 0 || c.call(d, r, n);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const i = {};
    if (this.authenticationMode == ee.InternalAuthToken)
      i.authorization = "Basic " + So("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == ee.APIKey)
      i.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == ee.BrowserSession) {
      const r = this.sessionTokenStore.getItem(this.sessionStorageKey);
      r && (i.authorization = `Session ${r}`);
    }
    return i["x-gadget-environment"] = this.environment, i;
  }
  async waitForOpenedConnection(t) {
    let i = this.newSubscriptionClient(t), r = [], n = t.connectionAttempts || ho;
    const a = t.connectionGlobalTimeoutMs || go, o = () => {
      r.forEach((s) => s()), r = [];
    };
    return await new Promise((s, l) => {
      const d = setTimeout(() => {
        this.disposeClient(i), p(new ro("Timeout opening websocket connection to Gadget API"));
      }, a), c = (g) => {
        if (Ci(g) && bo.includes(g.code) && n > 0) {
          n -= 1, this.disposeClient(i), i = this.newSubscriptionClient(t), m();
          return;
        }
        clearTimeout(d), l(new Cr(g));
      }, p = (g) => {
        clearTimeout(d), l(g);
      }, f = () => {
        clearTimeout(d), s(i);
      }, m = () => {
        o(), r.push(i.on("connected", f)), r.push(i.on("closed", c)), r.push(i.on("error", p));
      };
      m();
    }).finally(o);
  }
  disposeClient(t) {
    const i = t.dispose();
    i && i.catch((r) => console.error(`Error closing SubscriptionClient: ${r.message}`));
  }
  getBaseSubscriptionClient() {
    return this.baseSubscriptionClient || (this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 })), this.baseSubscriptionClient;
  }
}
function Oo(e, t) {
  if (typeof e != "string")
    return e;
  if (Di(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Di(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class dt extends Array {
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
  static boot(t, i, r) {
    const n = new dt();
    return n.push(...i), n.modelManager = t, n.pagination = r, Object.freeze(n), n;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new ii("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new _i("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const { first: i, last: r, before: n, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      after: this.pagination.pageInfo.endCursor,
      first: i || r
    });
  }
  async previousPage() {
    var t;
    if (!this.hasPreviousPage)
      throw new _i("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: i, last: r, after: n, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: r || i
    });
  }
}
const Fi = (e) => Object.entries(e).flatMap(([t, i]) => {
  if (typeof i == "boolean")
    return i ? t : !1;
  if (i instanceof Wi) {
    let r = "";
    const n = Object.entries(i.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof Qi ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return n.length > 0 && (r = `(${n.join(", ")})`), i.subselection ? [`${t}${r} {`, ...Fi(i.subselection), "}"] : `${t}${r}`;
  } else
    return [`${t} {`, ...Fi(i), "}"];
}).filter((t) => !!t).map((t) => "  " + t), zi = (e) => {
  const t = {}, i = (r) => {
    let n = 1;
    if (t[r]) {
      for (; t[`${r}${n}`]; )
        n++;
      return `${r}${n}`;
    }
    return r;
  };
  return Object.entries(e).forEach(([r, n]) => {
    n instanceof Wi ? Object.entries(n.args).forEach(([a, o]) => {
      var s;
      o instanceof Qi && (t[(s = o.name) !== null && s !== void 0 ? s : i(a)] = o);
    }) : typeof n == "object" && n !== null && Object.assign(t, zi(n));
  }), t;
}, Io = (e) => {
  const t = zi(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([r, n]) => `$${r}: ${n.type}`).join(", ")})`;
};
class Wi {
  constructor(t, i) {
    Object.defineProperty(this, "args", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "subselection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: i
    });
  }
}
class Qi {
  constructor(t, i, r) {
    Object.defineProperty(this, "type", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: i
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
const pt = (e, t) => new Wi(e, t), ne = (e) => new Qi(e.type + (e.required ? "!" : ""), e.name, e.value), To = (e) => {
  var t;
  const i = Io(e), r = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${i}${r} {
${Fi(e.fields).join(`
`)}
}`;
}, yt = (e) => {
  const t = zi(e.fields);
  return {
    query: To(e),
    variables: Object.entries(t ?? {}).reduce((i, [r, n]) => (typeof n.value < "u" && (i[r] = n.value), i), {})
  };
}, Ct = `
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
`, ht = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, Po = (e) => `
    query InternalFind${Fe(e)}($id: GadgetID!, $select: [String!]) {
      ${ht(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, gn = (e, t) => ({
  search: t != null && t.search ? ne({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? ne({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? ne({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? ne({ value: bn(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), Ao = (e, t) => {
  const i = Fe(e), r = gn(i, t);
  return yt({
    type: "query",
    name: `InternalFindFirst${i}`,
    fields: {
      internal: {
        [`list${i}`]: pt({
          ...r,
          first: ne({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, Eo = (e, t) => {
  const i = Fe(e), r = gn(i, t);
  return yt({
    type: "query",
    name: `InternalFindMany${i}`,
    fields: {
      internal: {
        [`list${i}`]: pt({
          ...r,
          after: ne({ value: t == null ? void 0 : t.after, type: "String" }),
          before: ne({ value: t == null ? void 0 : t.before, type: "String" }),
          first: ne({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: ne({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, ko = (e) => {
  const t = Fe(e);
  return `
    ${Ct}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${ht(e)}
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
}, No = (e, t) => {
  const i = Fe(e), r = Fe(t);
  return `
    ${Ct}

    mutation InternalBulkCreate${r}($records: [Internal${i}Input]!) {
      ${ht(e)}
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
}, jo = (e) => {
  const t = Fe(e);
  return `
    ${Ct}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${ht(e)}
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
}, _o = (e) => {
  const t = Fe(e);
  return `
    ${Ct}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${ht(e)}
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
}, Co = (e) => {
  const t = Fe(e);
  return `
    ${Ct}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${ht(e)}
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
class je {
  constructor(t, i, r) {
    Object.defineProperty(this, "apiIdentifier", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "connection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: i
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
    }), this.capitalizedApiIdentifier = ri(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((r) => r === this.apiIdentifier);
  }
  getRecordFromData(t, i) {
    let r = t;
    if (!this.validateRecord(t))
      throw new ii(`Invalid arguments found in variables. Did you mean to use ${i}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
  async findOne(t, i, r = !0) {
    const n = await this.connection.currentClient.query(Po(this.apiIdentifier), { id: t, select: bn(i == null ? void 0 : i.select) }).toPromise(), o = (r ? Re : Pt)(n, ["internal", this.apiIdentifier]);
    return At(n, o);
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
  async maybeFindOne(t, i) {
    const r = await this.findOne(t, i, !1);
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
    const i = Eo(this.apiIdentifier, t), r = await this.connection.currentClient.query(i.query, i.variables).toPromise(), n = Pt(r, ["internal", `list${this.capitalizedApiIdentifier}`]), a = Nt(r, n);
    return dt.boot(this, a, { options: t, pageInfo: n.pageInfo });
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
  async findFirst(t, i = !0) {
    const r = Ao(this.apiIdentifier, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise();
    let a;
    i === !1 ? a = Pt(n, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = Re(n, ["internal", `list${this.capitalizedApiIdentifier}`], i);
    const o = Nt(n, a);
    return dt.boot(this, o, { options: t, pageInfo: a.pageInfo })[0];
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
    const i = await this.connection.currentClient.mutation(ko(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), r = ze(i, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return At(i, r[this.apiIdentifier]);
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
    var i;
    if (!(!((i = this.options) === null || i === void 0) && i.pluralApiIdentifier))
      throw new _i("Cannot perform bulkCreate without a pluralApiIdentifier");
    const r = Fe(this.options.pluralApiIdentifier), n = await this.connection.currentClient.mutation(No(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = ze(n, ["internal", `bulkCreate${r}`]);
    return Bi(n, a[this.options.pluralApiIdentifier]);
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
  async update(t, i) {
    xr(t, "Can't update a record without an ID passed");
    const r = await this.connection.currentClient.mutation(jo(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(i, "update")
    }).toPromise(), n = ze(r, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return At(r, n[this.apiIdentifier]);
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
    xr(t, "Can't delete a record without an ID");
    const i = await this.connection.currentClient.mutation(_o(this.apiIdentifier), { id: t }).toPromise();
    ze(i, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const i = await this.connection.currentClient.mutation(Co(this.apiIdentifier), t).toPromise();
    ze(i, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function bn(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [i, r] of Object.entries(e))
    r && t.push(i);
  return t;
}
const Ki = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Ji = (e, t = !1) => {
  const i = { ...e };
  return t && (i.__typename = !0), i;
}, xo = (e, t, i, r, n) => {
  const a = {};
  return typeof t < "u" && (a.id = ne({ type: "GadgetID!", value: t })), yt({
    type: "query",
    name: e,
    fields: {
      [e]: pt(a, Ji((n == null ? void 0 : n.select) || i, !0)),
      ...Ki(r)
    }
  });
}, Do = (e, t, i, r, n, a) => Yi(e, r, n, {
  select: a == null ? void 0 : a.select,
  first: 2,
  filter: {
    [t]: {
      equals: i
    }
  }
}), Yi = (e, t, i, r) => yt({
  type: "query",
  name: e,
  fields: {
    [e]: pt({
      after: ne({ value: r == null ? void 0 : r.after, type: "String" }),
      first: ne({ value: r == null ? void 0 : r.first, type: "Int" }),
      before: ne({ value: r == null ? void 0 : r.before, type: "String" }),
      last: ne({ value: r == null ? void 0 : r.last, type: "Int" }),
      sort: r != null && r.sort ? ne({ value: r.sort, type: `[${oo(i)}!]` }) : void 0,
      filter: r != null && r.filter ? ne({ value: r.filter, type: `[${so(i)}!]` }) : void 0,
      search: r != null && r.search ? ne({ value: r.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Ji((r == null ? void 0 : r.select) || t, !0)
      }
    }),
    ...Ki(i)
  }
}), vn = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Sn = (e) => Object.fromEntries(Object.entries(e).map(([t, i]) => [t, ne(i)])), Fo = (e, t, i, r, n, a, o, s, l) => {
  const d = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: pt(Sn(n), {
      success: !0,
      errors: vn,
      [r]: d && !l ? Ji(d, !0) : !1,
      [s ? "results" : "result"]: !!l
    })
  };
  o && (c = {
    [o]: c
  });
  const p = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...Ki(i)
    }
  };
  return yt(p);
}, Vo = (e, t, i) => {
  let r = {
    [e]: pt(Sn(t), {
      success: !0,
      errors: vn,
      result: !0
    })
  };
  return i && (r = {
    [i]: r
  }), yt({
    type: "mutation",
    name: e,
    fields: r
  });
}, W = async (e, t, i, r, n, a, o = !0) => {
  const s = xo(t, i, r, n, a), l = await e.connection.currentClient.query(s.query, s.variables).toPromise(), c = (o ? Re : Pt)(l, [t]);
  return At(l, c);
}, ni = async (e, t, i, r, n, a, o) => {
  const s = Do(t, i, r, n, a, o), l = await e.connection.currentClient.query(s.query, s.variables).toPromise(), d = Re(l, [t]), c = Nt(l, d);
  if (c.length > 1)
    throw uo(a, i, r);
  return c[0];
}, x = async (e, t, i, r, n, a) => {
  const o = Yi(t, i, r, n), s = await e.connection.currentClient.query(o.query, o.variables).toPromise();
  let l;
  a === !1 ? l = Pt(s, [t]) : l = Re(s, [t], a);
  const d = Nt(s, l);
  return dt.boot(e, d, { options: n, pageInfo: l.pageInfo });
}, I = async (e, t, i, r, n, a, o, s, l, d) => {
  const c = Fo(t, i, r, n, o, s, l, a, d), p = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), f = l ? [l, t] : [t];
  if (a) {
    const m = ct(p.data, f), g = m[n] && i ? Bi(p, m[n]) : void 0;
    if (m.errors) {
      const S = m.errors.map((D) => Li(D));
      throw new ao(S, g);
    }
    return g;
  } else {
    const m = ze(p, f);
    return i == null ? void 0 : d ? m.result : At(p, m[n]);
  }
}, $o = async (e, t, i, r) => {
  const n = Vo(t, i, r), a = await e.currentClient.mutation(n.query, n.variables).toPromise();
  return ze(a, r ? [r, t] : [t]).result;
}, te = {
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
async function qo(e, t) {
  return await I(
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
async function Ro(e, t, i) {
  let r;
  const n = [], a = "user";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "updateUser",
    te,
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
    i,
    null
  );
}
async function Mo(e, t) {
  let i;
  const r = [], n = "user";
  if (n in e && typeof e[n] == "object" && e[n] !== null)
    i = e;
  else {
    i = {
      [n]: {}
    };
    for (const [a, o] of Object.entries(e))
      r.includes(a) ? i[a] = o : i[n][a] = o;
  }
  return await I(
    this,
    "createUser",
    te,
    "user",
    "user",
    !1,
    {
      user: {
        value: i.user,
        required: !1,
        type: "CreateUserInput"
      }
    },
    t,
    null
  );
}
async function Uo(e, t) {
  let i;
  const r = [], n = "user";
  if (n in e && typeof e[n] == "object" && e[n] !== null)
    i = e;
  else {
    i = {
      [n]: {}
    };
    for (const [a, o] of Object.entries(e))
      r.includes(a) ? i[a] = o : i[n][a] = o;
  }
  return await I(
    this,
    "signUpUser",
    te,
    "user",
    "user",
    !1,
    {
      user: {
        value: i.user,
        required: !1,
        type: "SignUpUserInput"
      }
    },
    t,
    null
  );
}
class Go {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await W(
        this,
        "user",
        i,
        te,
        "user",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await W(
          this,
          "user",
          i,
          te,
          "user",
          r,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await x(
        this,
        "users",
        te,
        "user",
        i
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await x(
        this,
        "users",
        te,
        "user",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await x(
          this,
          "users",
          te,
          "user",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findByEmail = Object.assign(
      async (i, r) => await ni(
        this,
        "users",
        "email",
        i,
        te,
        "user",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      qo,
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
      async (i, r) => await I(
        this,
        "bulkDeleteUsers",
        null,
        "user",
        "users",
        !0,
        {
          ids: {
            value: i,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        r,
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
      Ro,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: te,
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
      Mo,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: te,
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
      Uo,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: te,
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
const ye = {
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
async function Lo(e) {
  return await I(
    this,
    "logOut",
    ye,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function Bo(e, t) {
  const i = e;
  return await I(
    this,
    "logInViaEmail",
    ye,
    "session",
    "session",
    !1,
    {
      email: {
        value: i.email,
        required: !1,
        type: "String"
      },
      password: {
        value: i.password,
        required: !1,
        type: "String"
      }
    },
    t,
    "currentSession"
  );
}
class zo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await W(
        this,
        "session",
        i,
        ye,
        "session",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await W(
          this,
          "session",
          i,
          ye,
          "session",
          r,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await x(
        this,
        "sessions",
        ye,
        "session",
        i
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await x(
        this,
        "sessions",
        ye,
        "session",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await x(
          this,
          "sessions",
          ye,
          "session",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      Lo,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: ye,
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
      Bo,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: ye,
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
const he = {
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
async function Wo(e, t) {
  return await I(
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
async function Qo(e, t) {
  let i;
  const r = [], n = "shopifyProduct";
  if (n in e && typeof e[n] == "object" && e[n] !== null)
    i = e;
  else {
    i = {
      [n]: {}
    };
    for (const [a, o] of Object.entries(e))
      r.includes(a) ? i[a] = o : i[n][a] = o;
  }
  return await I(
    this,
    "createShopifyProduct",
    he,
    "shopifyProduct",
    "shopifyProduct",
    !1,
    {
      shopifyProduct: {
        value: i.shopifyProduct,
        required: !1,
        type: "CreateShopifyProductInput"
      }
    },
    t,
    null
  );
}
async function Ko(e, t, i) {
  let r;
  const n = [], a = "shopifyProduct";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "updateShopifyProduct",
    he,
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
    i,
    null
  );
}
class Jo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await W(
        this,
        "shopifyProduct",
        i,
        he,
        "shopifyProduct",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await W(
          this,
          "shopifyProduct",
          i,
          he,
          "shopifyProduct",
          r,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await x(
        this,
        "shopifyProducts",
        he,
        "shopifyProduct",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await x(
        this,
        "shopifyProducts",
        he,
        "shopifyProduct",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await x(
          this,
          "shopifyProducts",
          he,
          "shopifyProduct",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Wo,
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
      async (i, r) => await I(
        this,
        "bulkDeleteShopifyProducts",
        null,
        "shopifyProduct",
        "shopifyProducts",
        !0,
        {
          ids: {
            value: i,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        r,
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
      Qo,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: he,
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
      Ko,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
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
const me = {
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
async function Yo(e, t) {
  return await I(
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
async function Ho(e, t) {
  let i;
  const r = [], n = "shopifyProductImage";
  if (n in e && typeof e[n] == "object" && e[n] !== null)
    i = e;
  else {
    i = {
      [n]: {}
    };
    for (const [a, o] of Object.entries(e))
      r.includes(a) ? i[a] = o : i[n][a] = o;
  }
  return await I(
    this,
    "createShopifyProductImage",
    me,
    "shopifyProductImage",
    "shopifyProductImage",
    !1,
    {
      shopifyProductImage: {
        value: i.shopifyProductImage,
        required: !1,
        type: "CreateShopifyProductImageInput"
      }
    },
    t,
    null
  );
}
async function Zo(e, t, i) {
  let r;
  const n = [], a = "shopifyProductImage";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "updateShopifyProductImage",
    me,
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
    i,
    null
  );
}
class Xo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await W(
        this,
        "shopifyProductImage",
        i,
        me,
        "shopifyProductImage",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await W(
          this,
          "shopifyProductImage",
          i,
          me,
          "shopifyProductImage",
          r,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await x(
        this,
        "shopifyProductImages",
        me,
        "shopifyProductImage",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await x(
        this,
        "shopifyProductImages",
        me,
        "shopifyProductImage",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await x(
          this,
          "shopifyProductImages",
          me,
          "shopifyProductImage",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Yo,
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
      async (i, r) => await I(
        this,
        "bulkDeleteShopifyProductImages",
        null,
        "shopifyProductImage",
        "shopifyProductImages",
        !0,
        {
          ids: {
            value: i,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        r,
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
      Ho,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: me,
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
      Zo,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: me,
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
const ge = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  name: !0,
  position: !0,
  values: !0
};
async function es(e, t) {
  return await I(
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
async function ts(e, t) {
  let i;
  const r = [], n = "shopifyProductOption";
  if (n in e && typeof e[n] == "object" && e[n] !== null)
    i = e;
  else {
    i = {
      [n]: {}
    };
    for (const [a, o] of Object.entries(e))
      r.includes(a) ? i[a] = o : i[n][a] = o;
  }
  return await I(
    this,
    "createShopifyProductOption",
    ge,
    "shopifyProductOption",
    "shopifyProductOption",
    !1,
    {
      shopifyProductOption: {
        value: i.shopifyProductOption,
        required: !1,
        type: "CreateShopifyProductOptionInput"
      }
    },
    t,
    null
  );
}
async function is(e, t, i) {
  let r;
  const n = [], a = "shopifyProductOption";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "updateShopifyProductOption",
    ge,
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
    i,
    null
  );
}
class rs {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await W(
        this,
        "shopifyProductOption",
        i,
        ge,
        "shopifyProductOption",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await W(
          this,
          "shopifyProductOption",
          i,
          ge,
          "shopifyProductOption",
          r,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await x(
        this,
        "shopifyProductOptions",
        ge,
        "shopifyProductOption",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await x(
        this,
        "shopifyProductOptions",
        ge,
        "shopifyProductOption",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await x(
          this,
          "shopifyProductOptions",
          ge,
          "shopifyProductOption",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      es,
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
      async (i, r) => await I(
        this,
        "bulkDeleteShopifyProductOptions",
        null,
        "shopifyProductOption",
        "shopifyProductOptions",
        !0,
        {
          ids: {
            value: i,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        r,
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
      ts,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: ge,
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
      is,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: ge,
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
const be = {
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
async function ns(e, t) {
  return await I(
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
async function as(e, t, i) {
  let r;
  const n = [], a = "shopifyProductVariant";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "updateShopifyProductVariant",
    be,
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
    i,
    null
  );
}
async function os(e, t) {
  let i;
  const r = [], n = "shopifyProductVariant";
  if (n in e && typeof e[n] == "object" && e[n] !== null)
    i = e;
  else {
    i = {
      [n]: {}
    };
    for (const [a, o] of Object.entries(e))
      r.includes(a) ? i[a] = o : i[n][a] = o;
  }
  return await I(
    this,
    "createShopifyProductVariant",
    be,
    "shopifyProductVariant",
    "shopifyProductVariant",
    !1,
    {
      shopifyProductVariant: {
        value: i.shopifyProductVariant,
        required: !1,
        type: "CreateShopifyProductVariantInput"
      }
    },
    t,
    null
  );
}
class ss {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await W(
        this,
        "shopifyProductVariant",
        i,
        be,
        "shopifyProductVariant",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await W(
          this,
          "shopifyProductVariant",
          i,
          be,
          "shopifyProductVariant",
          r,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await x(
        this,
        "shopifyProductVariants",
        be,
        "shopifyProductVariant",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await x(
        this,
        "shopifyProductVariants",
        be,
        "shopifyProductVariant",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await x(
          this,
          "shopifyProductVariants",
          be,
          "shopifyProductVariant",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      ns,
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
      async (i, r) => await I(
        this,
        "bulkDeleteShopifyProductVariants",
        null,
        "shopifyProductVariant",
        "shopifyProductVariants",
        !0,
        {
          ids: {
            value: i,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        r,
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
      as,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: be,
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
      os,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: be,
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
const re = {
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
async function us(e, t) {
  return await I(
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
async function ls(e, t) {
  let i;
  const r = [], n = "shopifyShop";
  if (n in e && typeof e[n] == "object" && e[n] !== null)
    i = e;
  else {
    i = {
      [n]: {}
    };
    for (const [a, o] of Object.entries(e))
      r.includes(a) ? i[a] = o : i[n][a] = o;
  }
  return await I(
    this,
    "createShopifyShop",
    re,
    "shopifyShop",
    "shopifyShop",
    !1,
    {
      shopifyShop: {
        value: i.shopifyShop,
        required: !1,
        type: "CreateShopifyShopInput"
      }
    },
    t,
    null
  );
}
async function cs(e, t, i) {
  let r;
  const n = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "updateShopifyShop",
    re,
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
    i,
    null
  );
}
async function ds(e, t, i) {
  let r;
  const n = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "reinstallShopifyShop",
    re,
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
    i,
    null
  );
}
async function fs(e, t, i) {
  let r;
  const n = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "uninstallShopifyShop",
    re,
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
    i,
    null
  );
}
class ps {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await W(
        this,
        "shopifyShop",
        i,
        re,
        "shopifyShop",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await W(
          this,
          "shopifyShop",
          i,
          re,
          "shopifyShop",
          r,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await x(
        this,
        "shopifyShops",
        re,
        "shopifyShop",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await x(
        this,
        "shopifyShops",
        re,
        "shopifyShop",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await x(
          this,
          "shopifyShops",
          re,
          "shopifyShop",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      us,
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
      async (i, r) => await I(
        this,
        "bulkDeleteShopifyShops",
        null,
        "shopifyShop",
        "shopifyShops",
        !0,
        {
          ids: {
            value: i,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        r,
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
      ls,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: re,
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
      cs,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: re,
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
      ds,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: re,
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
      fs,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: re,
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
const ve = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
};
async function ys(e, t) {
  return await I(
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
async function hs(e, t, i) {
  let r;
  const n = [], a = "productPairing";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "updateProductPairing",
    ve,
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
    i,
    null
  );
}
async function ms(e, t) {
  let i;
  const r = [], n = "productPairing";
  if (n in e && typeof e[n] == "object" && e[n] !== null)
    i = e;
  else {
    i = {
      [n]: {}
    };
    for (const [a, o] of Object.entries(e))
      r.includes(a) ? i[a] = o : i[n][a] = o;
  }
  return await I(
    this,
    "createProductPairing",
    ve,
    "productPairing",
    "productPairing",
    !1,
    {
      productPairing: {
        value: i.productPairing,
        required: !1,
        type: "CreateProductPairingInput"
      }
    },
    t,
    null
  );
}
class gs {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await W(
        this,
        "productPairing",
        i,
        ve,
        "productPairing",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await W(
          this,
          "productPairing",
          i,
          ve,
          "productPairing",
          r,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await x(
        this,
        "productPairings",
        ve,
        "productPairing",
        i
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await x(
        this,
        "productPairings",
        ve,
        "productPairing",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await x(
          this,
          "productPairings",
          ve,
          "productPairing",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      ys,
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
      async (i, r) => await I(
        this,
        "bulkDeleteProductPairings",
        null,
        "productPairing",
        "productPairings",
        !0,
        {
          ids: {
            value: i,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        r,
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
      hs,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: ve,
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
      ms,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: ve,
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
const ie = {
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
async function bs(e, t) {
  let i;
  const r = [], n = "shopifySync";
  if (n in e && typeof e[n] == "object" && e[n] !== null)
    i = e;
  else {
    i = {
      [n]: {}
    };
    for (const [a, o] of Object.entries(e))
      r.includes(a) ? i[a] = o : i[n][a] = o;
  }
  return await I(
    this,
    "runShopifySync",
    ie,
    "shopifySync",
    "shopifySync",
    !1,
    {
      shopifySync: {
        value: i.shopifySync,
        required: !1,
        type: "RunShopifySyncInput"
      },
      startReason: {
        value: i.startReason,
        required: !1,
        type: "String"
      }
    },
    t,
    null
  );
}
async function vs(e, t, i) {
  let r;
  const n = [], a = "shopifySync";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "errorShopifySync",
    ie,
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
    i,
    null
  );
}
async function Ss(e, t, i) {
  let r;
  const n = [], a = "shopifySync";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "completeShopifySync",
    ie,
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
    i,
    null
  );
}
class ws {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await W(
        this,
        "shopifySync",
        i,
        ie,
        "shopifySync",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await W(
          this,
          "shopifySync",
          i,
          ie,
          "shopifySync",
          r,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await x(
        this,
        "shopifySyncs",
        ie,
        "shopifySync",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await x(
        this,
        "shopifySyncs",
        ie,
        "shopifySync",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await x(
          this,
          "shopifySyncs",
          ie,
          "shopifySync",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (i, r) => await ni(
        this,
        "shopifySyncs",
        "id",
        i,
        ie,
        "shopifySync",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.run = Object.assign(
      bs,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: ie,
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
      vs,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: ie,
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
      Ss,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: ie,
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
const se = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  ambiguous: !0,
  booleanField: !0
};
async function Os(e, t, i) {
  let r;
  const n = [], a = "ambiguous";
  if (Object.keys(t).some((o) => !n.includes(o) && o !== a))
    throw Error(`Invalid arguments found in variables. Did you mean to use update({ ${a}: { ... } })?`);
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "updateAmbiguous",
    se,
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
    i,
    null
  );
}
async function Is(e, t) {
  return await I(
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
async function Ts(e, t) {
  let i;
  const r = [], n = "ambiguous";
  if (Object.keys(e).some((a) => !r.includes(a) && a !== n))
    throw Error(`Invalid arguments found in variables. Did you mean to use create({ ${n}: { ... } })?`);
  if (n in e && typeof e[n] == "object" && e[n] !== null)
    i = e;
  else {
    i = {
      [n]: {}
    };
    for (const [a, o] of Object.entries(e))
      r.includes(a) ? i[a] = o : i[n][a] = o;
  }
  return await I(
    this,
    "createAmbiguous",
    se,
    "ambiguous",
    "ambiguous",
    !1,
    {
      ambiguous: {
        value: i.ambiguous,
        required: !1,
        type: "CreateAmbiguousInput"
      }
    },
    t,
    null
  );
}
class Ps {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await W(
        this,
        "ambiguous",
        i,
        se,
        "ambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await W(
          this,
          "ambiguous",
          i,
          se,
          "ambiguous",
          r,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await x(
        this,
        "ambiguouss",
        se,
        "ambiguous",
        i
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await x(
        this,
        "ambiguouss",
        se,
        "ambiguous",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await x(
          this,
          "ambiguouss",
          se,
          "ambiguous",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (i, r) => await ni(
        this,
        "ambiguouss",
        "id",
        i,
        se,
        "ambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      Os,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: se,
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
      Is,
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
      async (i, r) => await I(
        this,
        "bulkDeleteAmbiguous",
        null,
        "ambiguous",
        "ambiguous",
        !0,
        {
          ids: {
            value: i,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        r,
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
      Ts,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: se,
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
const ue = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  stringField: !0,
  numberField: !0
};
async function As(e, t, i) {
  let r;
  const n = [], a = "unambiguous";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    r = t;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await I(
    this,
    "updateUnambiguous",
    ue,
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
    i,
    null
  );
}
async function Es(e, t) {
  let i;
  const r = [], n = "unambiguous";
  if (n in e && typeof e[n] == "object" && e[n] !== null)
    i = e;
  else {
    i = {
      [n]: {}
    };
    for (const [a, o] of Object.entries(e))
      r.includes(a) ? i[a] = o : i[n][a] = o;
  }
  return await I(
    this,
    "createUnambiguous",
    ue,
    "unambiguous",
    "unambiguous",
    !1,
    {
      unambiguous: {
        value: i.unambiguous,
        required: !1,
        type: "CreateUnambiguousInput"
      }
    },
    t,
    null
  );
}
async function ks(e, t) {
  return await I(
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
class Ns {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await W(
        this,
        "unambiguous",
        i,
        ue,
        "unambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await W(
          this,
          "unambiguous",
          i,
          ue,
          "unambiguous",
          r,
          !1
        );
        return n.isEmpty() ? null : n;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await x(
        this,
        "unambiguouss",
        ue,
        "unambiguous",
        i
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await x(
        this,
        "unambiguouss",
        ue,
        "unambiguous",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await x(
          this,
          "unambiguouss",
          ue,
          "unambiguous",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (i, r) => await ni(
        this,
        "unambiguouss",
        "id",
        i,
        ue,
        "unambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      As,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: ue,
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
      Es,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: ue,
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
      ks,
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
      async (i, r) => await I(
        this,
        "bulkDeleteUnambiguous",
        null,
        "unambiguous",
        "unambiguous",
        !0,
        {
          ids: {
            value: i,
            required: !0,
            type: "[GadgetID!]"
          }
        },
        r,
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
const nt = {
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
async function js(e) {
  return await I(
    this,
    "logOut",
    nt,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function _s(e, t) {
  const i = e;
  return await I(
    this,
    "logInViaEmail",
    nt,
    "session",
    "session",
    !1,
    {
      email: {
        value: i.email,
        required: !1,
        type: "String"
      },
      password: {
        value: i.password,
        required: !1,
        type: "String"
      }
    },
    t,
    "currentSession"
  );
}
class Cs {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (i) => await W(
        this,
        "currentSession",
        void 0,
        nt,
        "session",
        i
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: nt,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      js,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: nt,
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
      _s,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: nt,
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
const mi = "production", gi = "development", xs = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
class Ds {
  constructor(t) {
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async () => await $o(
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
    ), this.transaction = async (n) => await this.connection.transaction(n), this.getDirectUploadToken = async () => (await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
      requestPolicy: "network-only"
    })).gadgetMeta.directUploadToken;
    const i = (t == null ? void 0 : t.environment) ?? xs() ?? gi;
    let r = i.toLocaleLowerCase();
    r != gi && r != mi && (console.warn("Invalid environment", i, "defaulting to development"), r = gi), this.connection = new wo({
      endpoint: new URL("api/graphql", r == mi ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      environment: r == mi ? "Production" : "Development"
    }), this.user = new Go(this.connection), this.session = new zo(this.connection), this.shopifyProduct = new Jo(this.connection), this.shopifyProductImage = new Xo(this.connection), this.shopifyProductOption = new rs(this.connection), this.shopifyProductVariant = new ss(this.connection), this.shopifyShop = new ps(this.connection), this.productPairing = new gs(this.connection), this.shopifySync = new ws(this.connection), this.ambiguous = new Ps(this.connection), this.unambiguous = new Ns(this.connection), this.currentSession = new Cs(this.connection), this.internal = {
      user: new je("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new je("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new je("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new je("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new je("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new je("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new je("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new je("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new je("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new je("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new je("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(t, i, r) {
    const { data: n, error: a } = await this.connection.currentClient.query(t, i, r).toPromise();
    if (a)
      throw a;
    return n;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(t, i) {
    const { data: r, error: n } = await this.connection.currentClient.mutation(t, i).toPromise();
    if (n)
      throw n;
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
  async fetch(t, i = {}) {
    return await this.connection.fetch(t, i);
  }
  toString() {
    return `GadgetAPIClient<${this.productionApiRoot}>`;
  }
  toJSON() {
    return this.toString();
  }
}
var Fs = {
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
let Vs = class extends Error {
  constructor(t, i, r, n, a, o, s) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), i && (this.nodes = Array.isArray(i) ? i : [i]), r && (this.source = r), n && (this.positions = n), o && (this.originalError = o);
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
var G, E;
function Z(e) {
  return new Vs(`Syntax Error: Unexpected token at ${E} in ${e}`);
}
function Oe(e) {
  if (e.lastIndex = E, e.test(G))
    return G.slice(E, E = e.lastIndex);
}
var Gt = / +(?=[^\s])/y;
function $s(e) {
  for (var t = e.split(`
`), i = "", r = 0, n = 0, a = t.length - 1, o = 0; o < t.length; o++)
    Gt.lastIndex = 0, Gt.test(t[o]) && (o && (!r || Gt.lastIndex < r) && (r = Gt.lastIndex), n = n || o, a = o);
  for (var s = n; s <= a; s++)
    s !== n && (i += `
`), i += t[s].slice(r).replace(/\\"""/g, '"""');
  return i;
}
function N() {
  for (var e = 0 | G.charCodeAt(E++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | G.charCodeAt(E++))
    if (e === 35)
      for (; (e = G.charCodeAt(E++)) !== 10 && e !== 13; )
        ;
  E--;
}
var wn = /[_A-Za-z]\w*/y;
function Ve() {
  var e;
  if (e = Oe(wn))
    return {
      kind: "Name",
      value: e
    };
}
var qs = /(?:null|true|false)/y, On = /\$[_A-Za-z]\w*/y, Rs = /-?\d+/y, Ms = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Us = /\\/g, Gs = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Ls = /"(?:"|[^\r\n]*?[^\\]")/y;
function Ht(e) {
  var t, i;
  if (i = Oe(qs))
    t = i === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: i === "true"
    };
  else if (!e && (i = Oe(On)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: i.slice(1)
      }
    };
  else if (i = Oe(Rs)) {
    var r = i;
    (i = Oe(Ms)) ? t = {
      kind: "FloatValue",
      value: r + i
    } : t = {
      kind: "IntValue",
      value: r
    };
  } else if (i = Oe(wn))
    t = {
      kind: "EnumValue",
      value: i
    };
  else if (i = Oe(Gs))
    t = {
      kind: "StringValue",
      value: $s(i.slice(3, -3)),
      block: !0
    };
  else if (i = Oe(Ls))
    t = {
      kind: "StringValue",
      value: Us.test(i) ? JSON.parse(i) : i.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (G.charCodeAt(E) === 91) {
      E++, N();
      for (var s = []; o = Ht(a); )
        s.push(o);
      if (G.charCodeAt(E++) !== 93)
        throw Z("ListValue");
      return N(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (G.charCodeAt(E) === 123) {
      E++, N();
      for (var o = [], s; s = Ve(); ) {
        if (N(), G.charCodeAt(E++) !== 58)
          throw Z("ObjectField");
        N();
        var l = Ht(a);
        if (!l)
          throw Z("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: l
        });
      }
      if (G.charCodeAt(E++) !== 125)
        throw Z("ObjectValue");
      return N(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return N(), t;
}
function In(e) {
  var t = [];
  if (N(), G.charCodeAt(E) === 40) {
    E++, N();
    for (var i; i = Ve(); ) {
      if (N(), G.charCodeAt(E++) !== 58)
        throw Z("Argument");
      N();
      var r = Ht(e);
      if (!r)
        throw Z("Argument");
      t.push({
        kind: "Argument",
        name: i,
        value: r
      });
    }
    if (!t.length || G.charCodeAt(E++) !== 41)
      throw Z("Argument");
    N();
  }
  return t;
}
function ft(e) {
  var t = [];
  for (N(); G.charCodeAt(E) === 64; ) {
    E++;
    var i = Ve();
    if (!i)
      throw Z("Directive");
    N(), t.push({
      kind: "Directive",
      name: i,
      arguments: In(e)
    });
  }
  return t;
}
function Bs() {
  var e = Ve();
  if (e) {
    N();
    var t;
    if (G.charCodeAt(E) === 58) {
      if (E++, N(), t = e, !(e = Ve()))
        throw Z("Field");
      N();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: In(!1),
      directives: ft(!1),
      selectionSet: ai()
    };
  }
}
function Tn() {
  var e;
  if (N(), G.charCodeAt(E) === 91) {
    E++, N();
    var t = Tn();
    if (!t || G.charCodeAt(E++) !== 93)
      throw Z("ListType");
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
    throw Z("NamedType");
  return N(), G.charCodeAt(E) === 33 ? (E++, N(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var zs = /on/y;
function Pn() {
  if (Oe(zs)) {
    N();
    var e = Ve();
    if (!e)
      throw Z("NamedType");
    return N(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Ws = /\.\.\./y;
function Qs() {
  if (Oe(Ws)) {
    N();
    var e = E, t;
    if ((t = Ve()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: ft(!1)
      };
    E = e;
    var i = Pn(), r = ft(!1), n = ai();
    if (!n)
      throw Z("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: i,
      directives: r,
      selectionSet: n
    };
  }
}
function ai() {
  var e;
  if (N(), G.charCodeAt(E) === 123) {
    E++, N();
    for (var t = []; e = Qs() || Bs(); )
      t.push(e);
    if (!t.length || G.charCodeAt(E++) !== 125)
      throw Z("SelectionSet");
    return N(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Ks = /fragment/y;
function Js() {
  if (Oe(Ks)) {
    N();
    var e = Ve();
    if (!e)
      throw Z("FragmentDefinition");
    N();
    var t = Pn();
    if (!t)
      throw Z("FragmentDefinition");
    var i = ft(!1), r = ai();
    if (!r)
      throw Z("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: i,
      selectionSet: r
    };
  }
}
var Ys = /(?:query|mutation|subscription)/y;
function Hs() {
  var e, t, i = [], r = [];
  (e = Oe(Ys)) && (N(), t = Ve(), i = function() {
    var o, s = [];
    if (N(), G.charCodeAt(E) === 40) {
      for (E++, N(); o = Oe(On); ) {
        if (N(), G.charCodeAt(E++) !== 58)
          throw Z("VariableDefinition");
        var l = Tn(), d = void 0;
        if (G.charCodeAt(E) === 61 && (E++, N(), !(d = Ht(!0))))
          throw Z("VariableDefinition");
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
          directives: ft(!0)
        });
      }
      if (G.charCodeAt(E++) !== 41)
        throw Z("VariableDefinition");
      N();
    }
    return s;
  }(), r = ft(!1));
  var n = ai();
  if (n)
    return {
      kind: "OperationDefinition",
      operation: e || "query",
      name: t,
      variableDefinitions: i,
      directives: r,
      selectionSet: n
    };
}
function Zs(e, t) {
  return G = typeof e.body == "string" ? e.body : e, E = 0, function() {
    var r;
    N();
    for (var n = []; r = Js() || Hs(); )
      n.push(r);
    return {
      kind: "Document",
      definitions: n
    };
  }();
}
function Xs(e) {
  return JSON.stringify(e);
}
function eu(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var Ee = (e) => !(!e || !e.length), le = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !Ee(e.variableDefinitions) && !Ee(e.directives))
      return le.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), Ee(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(le.VariableDefinition).join(", ") + ")"), Ee(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t + " " + le.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = le.Variable(e.variable) + ": " + Ne(e.type);
    return e.defaultValue && (t += " = " + Ne(e.defaultValue)), Ee(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (Ee(e.arguments)) {
      var i = e.arguments.map(le.Argument), r = t + "(" + i.join(", ") + ")";
      t = r.length > 80 ? t + `(
  ` + i.join(`
`).replace(/\n/g, `
  `) + `
)` : r;
    }
    return Ee(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), e.selectionSet ? t + " " + le.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? eu(e.value) : Xs(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(Ne).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(le.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + Ne(e.value),
  Document: (e) => Ee(e.definitions) ? e.definitions.map(Ne).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(Ne).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + Ne(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return Ee(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), Ee(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t + " " + Ne(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, Ee(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t + " " + Ne(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return Ee(e.arguments) && (t += "(" + e.arguments.map(le.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + Ne(e.type) + "]",
  NonNullType: (e) => Ne(e.type) + "!"
};
function Ne(e) {
  return le[e.kind] ? le[e.kind](e) : "";
}
var Vi = (e, t) => {
  for (var i = 0 | (t || 5381), r = 0, n = 0 | e.length; r < n; r++)
    i = (i << 5) + i + e.charCodeAt(r);
  return i;
}, Bt = /* @__PURE__ */ new Set(), Ur = /* @__PURE__ */ new WeakMap(), it = (e) => {
  if (e === null || Bt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return it(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var i of e)
      t.length > 1 && (t += ","), t += it(i) || "null";
    return t += "]";
  } else if (Gr !== Zt && e instanceof Gr || Lr !== Zt && e instanceof Lr)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var n = Ur.get(e) || Math.random().toString(36).slice(2);
    return Ur.set(e, n), it({
      __key: n
    });
  }
  Bt.add(e);
  var a = "{";
  for (var o of r) {
    var s = it(e[o]);
    s && (a.length > 1 && (a += ","), a += it(o) + ":" + s);
  }
  return Bt.delete(e), a += "}";
}, tu = (e) => (Bt.clear(), it(e));
class Zt {
}
var Gr = typeof File < "u" ? File : Zt, Lr = typeof Blob < "u" ? Blob : Zt, iu = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, ru = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, nu = (e, t) => t % 2 == 0 ? e.replace(ru, `
`) : e, Br = (e) => e.split(iu).map(nu).join("").trim(), zr = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), An = (e) => {
  var t;
  return typeof e == "string" ? t = Br(e) : e.loc && zt.get(e.__key) === e ? t = e.loc.source.body : (t = zr.get(e) || Br(Ne(e)), zr.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Wr = (e) => {
  var t = Vi(An(e));
  if (e.definitions) {
    var i = su(e);
    i && (t = Vi(`
# ${i}`, t));
  }
  return t;
}, au = (e) => {
  var t, i;
  return typeof e == "string" ? (t = Wr(e), i = zt.get(t) || Zs(e)) : (t = e.__key || Wr(e), i = zt.get(t) || e), i.loc || An(i), i.__key = t, zt.set(t, i), i;
}, ou = (e, t, i) => {
  var r = t || {}, n = au(e), a = tu(r), o = n.__key;
  return a !== "{}" && (o = Vi(a, o)), {
    key: o,
    query: n,
    variables: r,
    extensions: i
  };
}, su = (e) => {
  for (var t of e.definitions)
    if (t.kind === Fs.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
};
typeof TextDecoder < "u" && new TextDecoder();
var En = {}, oi = xe.createContext(En);
oi.Provider;
oi.Consumer;
oi.displayName = "UrqlContext";
var uu = () => {
  var e = xe.useContext(oi);
  if (e === En && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, lu = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, cu = (e, t) => e === t || !(!e || !t || e.key !== t.key), bi = (e, t) => {
  var i = {
    ...e,
    ...t,
    data: t.data !== void 0 || t.error ? t.data : e.data,
    fetching: !!t.fetching,
    stale: !!t.stale
  };
  return ((r, n) => {
    for (var a in r)
      if (!(a in n))
        return !0;
    for (var o in n)
      if (o === "operation" ? !cu(r[o], n[o]) : r[o] !== n[o])
        return !0;
    return !1;
  })(e, i) ? i : e;
}, du = (e, t) => {
  for (var i = 0, r = t.length; i < r; i++)
    if (e[i] !== t[i])
      return !0;
  return !1;
}, vi = xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Qr(e, t) {
  process.env.NODE_ENV !== "production" && vi && vi.ReactCurrentOwner && vi.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function fu(e, t) {
  var i = xe.useRef(void 0);
  return xe.useMemo(() => {
    var r = ou(e, t);
    return i.current !== void 0 && i.current.key === r.key ? i.current : (i.current = r, r);
  }, [e, t]);
}
var pu = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
    e.operations$ && Ke((r) => {
      r.kind === "teardown" && t.has(r.key) && (t.delete(r.key), i.delete(r.key));
    })(e.operations$), e._react = {
      get: (r) => i.get(r),
      set(r, n) {
        t.delete(r), i.set(r, n);
      },
      dispose(r) {
        t.add(r);
      }
    };
  }
  return e._react;
}, yu = (e, t) => e.suspense && (!t || t.suspense !== !1);
function hu(e) {
  var t = uu(), i = pu(t), r = yu(t, e.context), n = fu(e.query, e.variables), a = xe.useMemo(() => {
    if (e.pause)
      return null;
    var f = t.executeQuery(n, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return r ? st((m) => {
      i.set(n.key, m);
    })(f) : f;
  }, [i, t, n, r, e.pause, e.requestPolicy, e.context]), o = xe.useCallback((f, m) => {
    if (!f)
      return {
        fetching: !1
      };
    var g = i.get(n.key);
    if (g) {
      if (m && g != null && "then" in g)
        throw g;
    } else {
      var S, D = Ke((w) => {
        g = w, S && S(g);
      })(rn(() => m && !S || !g)(f));
      if (g == null && m) {
        var R = new Promise((w) => {
          S = w;
        });
        throw i.set(n.key, R), R;
      } else
        D.unsubscribe();
    }
    return g || {
      fetching: !0
    };
  }, [i, n]), s = [t, n, e.requestPolicy, e.context, e.pause], [l, d] = xe.useState(() => [a, bi(lu, o(a, r)), s]), c = l[1];
  a !== l[0] && du(l[2], s) && d([a, c = bi(l[1], o(a, r)), s]), xe.useEffect(() => {
    var f = l[0], m = l[2][1], g = !1, S = (R) => {
      g = !0, Qr(d, (w) => {
        var B = bi(w[1], R);
        return w[1] !== B ? [w[0], B, w[2]] : w;
      });
    };
    if (f) {
      var D = Ke(S)(Ri(() => {
        S({
          fetching: !1
        });
      })(f));
      return g || S({
        fetching: !0
      }), () => {
        i.dispose(m.key), D.unsubscribe();
      };
    } else
      S({
        fetching: !1
      });
  }, [i, l[0], l[2][1]]);
  var p = xe.useCallback((f) => {
    var m = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...f
    };
    Qr(d, (g) => [r ? st((S) => {
      i.set(n.key, S);
    })(t.executeQuery(n, m)) : t.executeQuery(n, m), g[1], s]);
  }, [t, i, n, r, o, e.requestPolicy, e.context]);
  return [c, p];
}
const mu = ei.createContext(void 0);
ei.createContext(void 0);
function gu(e) {
  return typeof e == "object" && e !== null;
}
function bu(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const vu = /\r\n|[\n\r]/g;
function $i(e, t) {
  let i = 0, r = 1;
  for (const n of e.body.matchAll(vu)) {
    if (typeof n.index == "number" || bu(!1), n.index >= t)
      break;
    i = n.index + n[0].length, r += 1;
  }
  return {
    line: r,
    column: t + 1 - i
  };
}
function Su(e) {
  return kn(
    e.source,
    $i(e.source, e.start)
  );
}
function kn(e, t) {
  const i = e.locationOffset.column - 1, r = "".padStart(i) + e.body, n = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? i : 0, l = t.column + s, d = `${e.name}:${o}:${l}
`, c = r.split(/\r\n|[\n\r]/g), p = c[n];
  if (p.length > 120) {
    const f = Math.floor(l / 80), m = l % 80, g = [];
    for (let S = 0; S < p.length; S += 80)
      g.push(p.slice(S, S + 80));
    return d + Kr([
      [`${o} |`, g[0]],
      ...g.slice(1, f + 1).map((S) => ["|", S]),
      ["|", "^".padStart(m)],
      ["|", g[f + 1]]
    ]);
  }
  return d + Kr([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, c[n - 1]],
    [`${o} |`, p],
    ["|", "^".padStart(l)],
    [`${o + 1} |`, c[n + 1]]
  ]);
}
function Kr(e) {
  const t = e.filter(([r, n]) => n !== void 0), i = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, n]) => r.padStart(i) + (n ? " " + n : "")).join(`
`);
}
function wu(e) {
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
class Xt extends Error {
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
  constructor(t, ...i) {
    var r, n, a;
    const { nodes: o, source: s, positions: l, path: d, originalError: c, extensions: p } = wu(i);
    super(t), this.name = "GraphQLError", this.path = d ?? void 0, this.originalError = c ?? void 0, this.nodes = Jr(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const f = Jr(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((g) => g.loc).filter((g) => g != null)
    );
    this.source = s ?? (f == null || (n = f[0]) === null || n === void 0 ? void 0 : n.source), this.positions = l ?? (f == null ? void 0 : f.map((g) => g.start)), this.locations = l && s ? l.map((g) => $i(s, g)) : f == null ? void 0 : f.map((g) => $i(g.source, g.start));
    const m = gu(
      c == null ? void 0 : c.extensions
    ) ? c == null ? void 0 : c.extensions : void 0;
    this.extensions = (a = p ?? m) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Xt) : Object.defineProperty(this, "stack", {
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
      for (const i of this.nodes)
        i.loc && (t += `

` + Su(i.loc));
    else if (this.source && this.locations)
      for (const i of this.locations)
        t += `

` + kn(this.source, i);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function Jr(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const Ou = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Iu = (e, t) => {
  let i = "";
  return e !== void 0 ? i = `[Network] ${e.message}` : t !== void 0 ? t.forEach((r) => {
    i += `[GraphQL] ${r.message}
`;
  }) : i = "Unknown error", i.trim();
}, Tu = (e) => typeof e == "string" ? new Xt(e) : e != null && e.message && !e.code ? new Xt(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class We extends Error {
  /** @private */
  static forClientSideError(t, i) {
    return new We({
      executionErrors: [t],
      response: i
    });
  }
  /** @private */
  static forErrorsResponse(t, i) {
    return new We({
      executionErrors: t.map(Li),
      response: i
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new We({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, i) {
    const r = lo(t, i);
    let n = We.forMaybeCombinedError(t.error);
    return !n && r && (n = We.forClientSideError(r)), n;
  }
  constructor({ networkError: t, executionErrors: i, response: r }) {
    const n = (i || []).map(Tu), a = Iu(t, n);
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
    }), this.message = a, this.executionErrors = n, this.graphQLErrors = n, this.networkError = t, this.response = r;
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
    const t = this.executionErrors.find((i) => i.code == "GGT_INVALID_RECORD");
    return (t == null ? void 0 : t.validationErrors) ?? null;
  }
}
const Pu = (e) => {
  const { context: t, suspense: i, ...r } = e ?? {}, n = Si(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...r,
    context: n
  };
}, Au = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), Eu = (e) => {
  if (!Zn(mu))
    throw new Error(Ou);
  const t = Pu(e);
  return hu(t);
};
var ku = typeof Element < "u", Nu = typeof Map == "function", ju = typeof Set == "function", _u = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Wt(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var i, r, n;
    if (Array.isArray(e)) {
      if (i = e.length, i != t.length)
        return !1;
      for (r = i; r-- !== 0; )
        if (!Wt(e[r], t[r]))
          return !1;
      return !0;
    }
    var a;
    if (Nu && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!Wt(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (ju && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (_u && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (i = e.length, i != t.length)
        return !1;
      for (r = i; r-- !== 0; )
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
    if (n = Object.keys(e), i = n.length, i !== Object.keys(t).length)
      return !1;
    for (r = i; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, n[r]))
        return !1;
    if (ku && e instanceof Element)
      return !1;
    for (r = i; r-- !== 0; )
      if (!((n[r] === "_owner" || n[r] === "__v" || n[r] === "__o") && e.$$typeof) && !Wt(e[n[r]], t[n[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Cu = function(t, i) {
  try {
    return Wt(t, i);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const xu = /* @__PURE__ */ ea(Cu), Du = (e) => {
  const t = Xn();
  return e ? (t.current === void 0 || !xu(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, Fu = (e, t) => {
  const i = Du(t), r = Si(() => Yi(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, i), [e, i]), [n, a] = Eu(Au(r, t));
  return [Si(() => {
    const s = [e.findMany.operationName];
    let l = n.data;
    if (l) {
      const c = ct(n.data, s);
      if (c) {
        const p = Nt(n, c);
        l = dt.boot(e, p, c);
      }
    }
    const d = We.errorIfDataAbsent(n, s);
    return { ...n, data: l, error: d };
  }, [e, n]), a];
}, Vu = new Ds(), Gu = () => {
  const [{ data: e }] = Fu(Vu.shopifyProduct);
  return /* @__PURE__ */ pr.jsx(pr.Fragment, { children: JSON.stringify(e) });
};
export {
  Gu as R,
  qu as c
};
