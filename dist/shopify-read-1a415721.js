import * as gt from "react";
import re, { useMemo as Mr, useContext as Bc, useRef as Ql, memo as Yl, useState as Lc, useEffect as Er, createContext as Jl } from "react";
var b = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sa = { exports: {} }, Nn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xo;
function Xl() {
  if (xo)
    return Nn;
  xo = 1;
  var e = re, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(c, y, u) {
    var f, l = {}, h = null, p = null;
    u !== void 0 && (h = "" + u), y.key !== void 0 && (h = "" + y.key), y.ref !== void 0 && (p = y.ref);
    for (f in y)
      r.call(y, f) && !i.hasOwnProperty(f) && (l[f] = y[f]);
    if (c && c.defaultProps)
      for (f in y = c.defaultProps, y)
        l[f] === void 0 && (l[f] = y[f]);
    return { $$typeof: n, type: c, key: h, ref: p, props: l, _owner: a.current };
  }
  return Nn.Fragment = t, Nn.jsx = o, Nn.jsxs = o, Nn;
}
var Rn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eu;
function Zl() {
  return eu || (eu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = re, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), c = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), d = Symbol.iterator, s = "@@iterator";
    function v(A) {
      if (A === null || typeof A != "object")
        return null;
      var j = d && A[d] || A[s];
      return typeof j == "function" ? j : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(A) {
      {
        for (var j = arguments.length, N = new Array(j > 1 ? j - 1 : 0), $ = 1; $ < j; $++)
          N[$ - 1] = arguments[$];
        O("error", A, N);
      }
    }
    function O(A, j, N) {
      {
        var $ = m.ReactDebugCurrentFrame, ce = $.getStackAddendum();
        ce !== "" && (j += "%s", N = N.concat([ce]));
        var ye = N.map(function(te) {
          return String(te);
        });
        ye.unshift("Warning: " + j), Function.prototype.apply.call(console[A], console, ye);
      }
    }
    var _ = !1, T = !1, P = !1, E = !1, S = !1, w;
    w = Symbol.for("react.module.reference");
    function I(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === i || S || A === a || A === u || A === f || E || A === p || _ || T || P || typeof A == "object" && A !== null && (A.$$typeof === h || A.$$typeof === l || A.$$typeof === o || A.$$typeof === c || A.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === w || A.getModuleId !== void 0));
    }
    function C(A, j, N) {
      var $ = A.displayName;
      if ($)
        return $;
      var ce = j.displayName || j.name || "";
      return ce !== "" ? N + "(" + ce + ")" : N;
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
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case c:
            var j = A;
            return k(j) + ".Consumer";
          case o:
            var N = A;
            return k(N._context) + ".Provider";
          case y:
            return C(A, A.render, "ForwardRef");
          case l:
            var $ = A.displayName || null;
            return $ !== null ? $ : B(A.type) || "Memo";
          case h: {
            var ce = A, ye = ce._payload, te = ce._init;
            try {
              return B(te(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, U = 0, q, L, J, fe, W, ge, H;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function pe() {
      {
        if (U === 0) {
          q = console.log, L = console.info, J = console.warn, fe = console.error, W = console.group, ge = console.groupCollapsed, H = console.groupEnd;
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
        U++;
      }
    }
    function oe() {
      {
        if (U--, U === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, A, {
              value: q
            }),
            info: D({}, A, {
              value: L
            }),
            warn: D({}, A, {
              value: J
            }),
            error: D({}, A, {
              value: fe
            }),
            group: D({}, A, {
              value: W
            }),
            groupCollapsed: D({}, A, {
              value: ge
            }),
            groupEnd: D({}, A, {
              value: H
            })
          });
        }
        U < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = m.ReactCurrentDispatcher, je;
    function be(A, j, N) {
      {
        if (je === void 0)
          try {
            throw Error();
          } catch (ce) {
            var $ = ce.stack.trim().match(/\n( *(at )?)/);
            je = $ && $[1] || "";
          }
        return `
` + je + A;
      }
    }
    var Be = !1, Ae;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      Ae = new ft();
    }
    function Pt(A, j) {
      if (!A || Be)
        return "";
      {
        var N = Ae.get(A);
        if (N !== void 0)
          return N;
      }
      var $;
      Be = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = K.current, K.current = null, pe();
      try {
        if (j) {
          var te = function() {
            throw Error();
          };
          if (Object.defineProperty(te.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(te, []);
            } catch (St) {
              $ = St;
            }
            Reflect.construct(A, [], te);
          } else {
            try {
              te.call();
            } catch (St) {
              $ = St;
            }
            A.call(te.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (St) {
            $ = St;
          }
          A();
        }
      } catch (St) {
        if (St && $ && typeof St.stack == "string") {
          for (var x = St.stack.split(`
`), qe = $.stack.split(`
`), Se = x.length - 1, Te = qe.length - 1; Se >= 1 && Te >= 0 && x[Se] !== qe[Te]; )
            Te--;
          for (; Se >= 1 && Te >= 0; Se--, Te--)
            if (x[Se] !== qe[Te]) {
              if (Se !== 1 || Te !== 1)
                do
                  if (Se--, Te--, Te < 0 || x[Se] !== qe[Te]) {
                    var ot = `
` + x[Se].replace(" at new ", " at ");
                    return A.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", A.displayName)), typeof A == "function" && Ae.set(A, ot), ot;
                  }
                while (Se >= 1 && Te >= 0);
              break;
            }
        }
      } finally {
        Be = !1, K.current = ye, oe(), Error.prepareStackTrace = ce;
      }
      var en = A ? A.displayName || A.name : "", Zo = en ? be(en) : "";
      return typeof A == "function" && Ae.set(A, Zo), Zo;
    }
    function lr(A, j, N) {
      return Pt(A, !1);
    }
    function Mn(A) {
      var j = A.prototype;
      return !!(j && j.isReactComponent);
    }
    function jt(A, j, N) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return Pt(A, Mn(A));
      if (typeof A == "string")
        return be(A);
      switch (A) {
        case u:
          return be("Suspense");
        case f:
          return be("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case y:
            return lr(A.render);
          case l:
            return jt(A.type, j, N);
          case h: {
            var $ = A, ce = $._payload, ye = $._init;
            try {
              return jt(ye(ce), j, N);
            } catch {
            }
          }
        }
      return "";
    }
    var kt = Object.prototype.hasOwnProperty, Xt = {}, dr = m.ReactDebugCurrentFrame;
    function Bt(A) {
      if (A) {
        var j = A._owner, N = jt(A.type, A._source, j ? j.type : null);
        dr.setExtraStackFrame(N);
      } else
        dr.setExtraStackFrame(null);
    }
    function R(A, j, N, $, ce) {
      {
        var ye = Function.call.bind(kt);
        for (var te in A)
          if (ye(A, te)) {
            var x = void 0;
            try {
              if (typeof A[te] != "function") {
                var qe = Error(($ || "React class") + ": " + N + " type `" + te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw qe.name = "Invariant Violation", qe;
              }
              x = A[te](j, te, $, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Se) {
              x = Se;
            }
            x && !(x instanceof Error) && (Bt(ce), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", N, te, typeof x), Bt(null)), x instanceof Error && !(x.message in Xt) && (Xt[x.message] = !0, Bt(ce), g("Failed %s type: %s", N, x.message), Bt(null));
          }
      }
    }
    var M = Array.isArray;
    function F(A) {
      return M(A);
    }
    function z(A) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, N = j && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return N;
      }
    }
    function V(A) {
      try {
        return ee(A), !1;
      } catch {
        return !0;
      }
    }
    function ee(A) {
      return "" + A;
    }
    function _e(A) {
      if (V(A))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", z(A)), ee(A);
    }
    var he = m.ReactCurrentOwner, de = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Zt, Ct;
    Ct = {};
    function Rl(A) {
      if (kt.call(A, "ref")) {
        var j = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function Dl(A) {
      if (kt.call(A, "key")) {
        var j = Object.getOwnPropertyDescriptor(A, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function kl(A, j) {
      if (typeof A.ref == "string" && he.current && j && he.current.stateNode !== j) {
        var N = B(he.current.type);
        Ct[N] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(he.current.type), A.ref), Ct[N] = !0);
      }
    }
    function Bl(A, j) {
      {
        var N = function() {
          Pe || (Pe = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        N.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function Ll(A, j) {
      {
        var N = function() {
          Zt || (Zt = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        N.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var Fl = function(A, j, N, $, ce, ye, te) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: A,
        key: j,
        ref: N,
        props: te,
        // Record the component responsible for creating this element.
        _owner: ye
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
        value: $
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function Ul(A, j, N, $, ce) {
      {
        var ye, te = {}, x = null, qe = null;
        N !== void 0 && (_e(N), x = "" + N), Dl(j) && (_e(j.key), x = "" + j.key), Rl(j) && (qe = j.ref, kl(j, ce));
        for (ye in j)
          kt.call(j, ye) && !de.hasOwnProperty(ye) && (te[ye] = j[ye]);
        if (A && A.defaultProps) {
          var Se = A.defaultProps;
          for (ye in Se)
            te[ye] === void 0 && (te[ye] = Se[ye]);
        }
        if (x || qe) {
          var Te = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          x && Bl(te, Te), qe && Ll(te, Te);
        }
        return Fl(A, x, qe, ce, $, he.current, te);
      }
    }
    var bi = m.ReactCurrentOwner, zo = m.ReactDebugCurrentFrame;
    function xt(A) {
      if (A) {
        var j = A._owner, N = jt(A.type, A._source, j ? j.type : null);
        zo.setExtraStackFrame(N);
      } else
        zo.setExtraStackFrame(null);
    }
    var _i;
    _i = !1;
    function Oi(A) {
      return typeof A == "object" && A !== null && A.$$typeof === n;
    }
    function Ko() {
      {
        if (bi.current) {
          var A = B(bi.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function Vl(A) {
      {
        if (A !== void 0) {
          var j = A.fileName.replace(/^.*[\\\/]/, ""), N = A.lineNumber;
          return `

Check your code at ` + j + ":" + N + ".";
        }
        return "";
      }
    }
    var Qo = {};
    function $l(A) {
      {
        var j = Ko();
        if (!j) {
          var N = typeof A == "string" ? A : A.displayName || A.name;
          N && (j = `

Check the top-level render call using <` + N + ">.");
        }
        return j;
      }
    }
    function Yo(A, j) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var N = $l(j);
        if (Qo[N])
          return;
        Qo[N] = !0;
        var $ = "";
        A && A._owner && A._owner !== bi.current && ($ = " It was passed a child from " + B(A._owner.type) + "."), xt(A), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, $), xt(null);
      }
    }
    function Jo(A, j) {
      {
        if (typeof A != "object")
          return;
        if (F(A))
          for (var N = 0; N < A.length; N++) {
            var $ = A[N];
            Oi($) && Yo($, j);
          }
        else if (Oi(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var ce = v(A);
          if (typeof ce == "function" && ce !== A.entries)
            for (var ye = ce.call(A), te; !(te = ye.next()).done; )
              Oi(te.value) && Yo(te.value, j);
        }
      }
    }
    function Gl(A) {
      {
        var j = A.type;
        if (j == null || typeof j == "string")
          return;
        var N;
        if (typeof j == "function")
          N = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === l))
          N = j.propTypes;
        else
          return;
        if (N) {
          var $ = B(j);
          R(N, A.props, "prop", $, A);
        } else if (j.PropTypes !== void 0 && !_i) {
          _i = !0;
          var ce = B(j);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ql(A) {
      {
        for (var j = Object.keys(A.props), N = 0; N < j.length; N++) {
          var $ = j[N];
          if ($ !== "children" && $ !== "key") {
            xt(A), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), xt(null);
            break;
          }
        }
        A.ref !== null && (xt(A), g("Invalid attribute `ref` supplied to `React.Fragment`."), xt(null));
      }
    }
    function Xo(A, j, N, $, ce, ye) {
      {
        var te = I(A);
        if (!te) {
          var x = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = Vl(ce);
          qe ? x += qe : x += Ko();
          var Se;
          A === null ? Se = "null" : F(A) ? Se = "array" : A !== void 0 && A.$$typeof === n ? (Se = "<" + (B(A.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof A, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, x);
        }
        var Te = Ul(A, j, N, ce, ye);
        if (Te == null)
          return Te;
        if (te) {
          var ot = j.children;
          if (ot !== void 0)
            if ($)
              if (F(ot)) {
                for (var en = 0; en < ot.length; en++)
                  Jo(ot[en], A);
                Object.freeze && Object.freeze(ot);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jo(ot, A);
        }
        return A === r ? ql(Te) : Gl(Te), Te;
      }
    }
    function Wl(A, j, N) {
      return Xo(A, j, N, !0);
    }
    function Hl(A, j, N) {
      return Xo(A, j, N, !1);
    }
    var zl = Hl, Kl = Wl;
    Rn.Fragment = r, Rn.jsx = zl, Rn.jsxs = Kl;
  }()), Rn;
}
process.env.NODE_ENV === "production" ? sa.exports = Xl() : sa.exports = Zl();
var Nr = sa.exports;
const xl = (e) => e && "connection" in e && e.connection && "endpoint" in e.connection;
var $n;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})($n || ($n = {}));
const ed = {
  DateTime(e) {
    return new Date(e);
  }
};
class td {
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
    for (const [r, a] of Object.entries(this.plan)) {
      const i = t[r];
      i != null && (t[r] = ed[a](i));
    }
    return t;
  }
}
var ln = {
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
let la = class extends Error {
  constructor(n, t, r, a, i, o, c) {
    super(n), this.name = "GraphQLError", this.message = n, i && (this.path = i), t && (this.nodes = Array.isArray(t) ? t : [t]), r && (this.source = r), a && (this.positions = a), o && (this.originalError = o);
    var y = c;
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
var ve, Q;
function we(e) {
  return new la(`Syntax Error: Unexpected token at ${Q} in ${e}`);
}
function tt(e) {
  if (e.lastIndex = Q, e.test(ve))
    return ve.slice(Q, Q = e.lastIndex);
}
var fr = / +(?=[^\s])/y;
function nd(e) {
  for (var n = e.split(`
`), t = "", r = 0, a = 0, i = n.length - 1, o = 0; o < n.length; o++)
    fr.lastIndex = 0, fr.test(n[o]) && (o && (!r || fr.lastIndex < r) && (r = fr.lastIndex), a = a || o, i = o);
  for (var c = a; c <= i; c++)
    c !== a && (t += `
`), t += n[c].slice(r).replace(/\\"""/g, '"""');
  return t;
}
function X() {
  for (var e = 0 | ve.charCodeAt(Q++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | ve.charCodeAt(Q++))
    if (e === 35)
      for (; (e = ve.charCodeAt(Q++)) !== 10 && e !== 13; )
        ;
  Q--;
}
var Uc = /[_A-Za-z]\w*/y;
function bt() {
  var e;
  if (e = tt(Uc))
    return {
      kind: "Name",
      value: e
    };
}
var rd = /(?:null|true|false)/y, Vc = /\$[_A-Za-z]\w*/y, id = /-?\d+/y, ad = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, od = /\\/g, ud = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, cd = /"(?:"|[^\r\n]*?[^\\]")/y;
function Rr(e) {
  var n, t;
  if (t = tt(rd))
    n = t === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: t === "true"
    };
  else if (!e && (t = tt(Vc)))
    n = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: t.slice(1)
      }
    };
  else if (t = tt(id)) {
    var r = t;
    (t = tt(ad)) ? n = {
      kind: "FloatValue",
      value: r + t
    } : n = {
      kind: "IntValue",
      value: r
    };
  } else if (t = tt(Uc))
    n = {
      kind: "EnumValue",
      value: t
    };
  else if (t = tt(ud))
    n = {
      kind: "StringValue",
      value: nd(t.slice(3, -3)),
      block: !0
    };
  else if (t = tt(cd))
    n = {
      kind: "StringValue",
      value: od.test(t) ? JSON.parse(t) : t.slice(1, -1),
      block: !1
    };
  else if (n = function(i) {
    var o;
    if (ve.charCodeAt(Q) === 91) {
      Q++, X();
      for (var c = []; o = Rr(i); )
        c.push(o);
      if (ve.charCodeAt(Q++) !== 93)
        throw we("ListValue");
      return X(), {
        kind: "ListValue",
        values: c
      };
    }
  }(e) || function(i) {
    if (ve.charCodeAt(Q) === 123) {
      Q++, X();
      for (var o = [], c; c = bt(); ) {
        if (X(), ve.charCodeAt(Q++) !== 58)
          throw we("ObjectField");
        X();
        var y = Rr(i);
        if (!y)
          throw we("ObjectField");
        o.push({
          kind: "ObjectField",
          name: c,
          value: y
        });
      }
      if (ve.charCodeAt(Q++) !== 125)
        throw we("ObjectValue");
      return X(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return n;
  return X(), n;
}
function $c(e) {
  var n = [];
  if (X(), ve.charCodeAt(Q) === 40) {
    Q++, X();
    for (var t; t = bt(); ) {
      if (X(), ve.charCodeAt(Q++) !== 58)
        throw we("Argument");
      X();
      var r = Rr(e);
      if (!r)
        throw we("Argument");
      n.push({
        kind: "Argument",
        name: t,
        value: r
      });
    }
    if (!n.length || ve.charCodeAt(Q++) !== 41)
      throw we("Argument");
    X();
  }
  return n;
}
function fn(e) {
  var n = [];
  for (X(); ve.charCodeAt(Q) === 64; ) {
    Q++;
    var t = bt();
    if (!t)
      throw we("Directive");
    X(), n.push({
      kind: "Directive",
      name: t,
      arguments: $c(e)
    });
  }
  return n;
}
function sd() {
  var e = bt();
  if (e) {
    X();
    var n;
    if (ve.charCodeAt(Q) === 58) {
      if (Q++, X(), n = e, !(e = bt()))
        throw we("Field");
      X();
    }
    return {
      kind: "Field",
      alias: n,
      name: e,
      arguments: $c(!1),
      directives: fn(!1),
      selectionSet: xr()
    };
  }
}
function Gc() {
  var e;
  if (X(), ve.charCodeAt(Q) === 91) {
    Q++, X();
    var n = Gc();
    if (!n || ve.charCodeAt(Q++) !== 93)
      throw we("ListType");
    e = {
      kind: "ListType",
      type: n
    };
  } else if (e = bt())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw we("NamedType");
  return X(), ve.charCodeAt(Q) === 33 ? (Q++, X(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var ld = /on/y;
function qc() {
  if (tt(ld)) {
    X();
    var e = bt();
    if (!e)
      throw we("NamedType");
    return X(), {
      kind: "NamedType",
      name: e
    };
  }
}
var dd = /\.\.\./y;
function fd() {
  if (tt(dd)) {
    X();
    var e = Q, n;
    if ((n = bt()) && n.value !== "on")
      return {
        kind: "FragmentSpread",
        name: n,
        directives: fn(!1)
      };
    Q = e;
    var t = qc(), r = fn(!1), a = xr();
    if (!a)
      throw we("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: t,
      directives: r,
      selectionSet: a
    };
  }
}
function xr() {
  var e;
  if (X(), ve.charCodeAt(Q) === 123) {
    Q++, X();
    for (var n = []; e = fd() || sd(); )
      n.push(e);
    if (!n.length || ve.charCodeAt(Q++) !== 125)
      throw we("SelectionSet");
    return X(), {
      kind: "SelectionSet",
      selections: n
    };
  }
}
var pd = /fragment/y;
function hd() {
  if (tt(pd)) {
    X();
    var e = bt();
    if (!e)
      throw we("FragmentDefinition");
    X();
    var n = qc();
    if (!n)
      throw we("FragmentDefinition");
    var t = fn(!1), r = xr();
    if (!r)
      throw we("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: n,
      directives: t,
      selectionSet: r
    };
  }
}
var yd = /(?:query|mutation|subscription)/y;
function vd() {
  var e, n, t = [], r = [];
  (e = tt(yd)) && (X(), n = bt(), t = function() {
    var o, c = [];
    if (X(), ve.charCodeAt(Q) === 40) {
      for (Q++, X(); o = tt(Vc); ) {
        if (X(), ve.charCodeAt(Q++) !== 58)
          throw we("VariableDefinition");
        var y = Gc(), u = void 0;
        if (ve.charCodeAt(Q) === 61 && (Q++, X(), !(u = Rr(!0))))
          throw we("VariableDefinition");
        X(), c.push({
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
          directives: fn(!0)
        });
      }
      if (ve.charCodeAt(Q++) !== 41)
        throw we("VariableDefinition");
      X();
    }
    return c;
  }(), r = fn(!1));
  var a = xr();
  if (a)
    return {
      kind: "OperationDefinition",
      operation: e || "query",
      name: n,
      variableDefinitions: t,
      directives: r,
      selectionSet: a
    };
}
function md(e, n) {
  return ve = typeof e.body == "string" ? e.body : e, Q = 0, function() {
    var r;
    X();
    for (var a = []; r = hd() || vd(); )
      a.push(r);
    return {
      kind: "Document",
      definitions: a
    };
  }();
}
function gd(e) {
  return JSON.stringify(e);
}
function bd(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var ut = (e) => !(!e || !e.length), Fe = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !ut(e.variableDefinitions) && !ut(e.directives))
      return Fe.SelectionSet(e.selectionSet);
    var n = e.operation;
    return e.name && (n += " " + e.name.value), ut(e.variableDefinitions) && (e.name || (n += " "), n += "(" + e.variableDefinitions.map(Fe.VariableDefinition).join(", ") + ")"), ut(e.directives) && (n += " " + e.directives.map(Fe.Directive).join(" ")), n + " " + Fe.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var n = Fe.Variable(e.variable) + ": " + st(e.type);
    return e.defaultValue && (n += " = " + st(e.defaultValue)), ut(e.directives) && (n += " " + e.directives.map(Fe.Directive).join(" ")), n;
  },
  Field(e) {
    var n = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (ut(e.arguments)) {
      var t = e.arguments.map(Fe.Argument), r = n + "(" + t.join(", ") + ")";
      n = r.length > 80 ? n + `(
  ` + t.join(`
`).replace(/\n/g, `
  `) + `
)` : r;
    }
    return ut(e.directives) && (n += " " + e.directives.map(Fe.Directive).join(" ")), e.selectionSet ? n + " " + Fe.SelectionSet(e.selectionSet) : n;
  },
  StringValue: (e) => e.block ? bd(e.value) : gd(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(st).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(Fe.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + st(e.value),
  Document: (e) => ut(e.definitions) ? e.definitions.map(st).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(st).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + st(e.value),
  FragmentSpread(e) {
    var n = "..." + e.name.value;
    return ut(e.directives) && (n += " " + e.directives.map(Fe.Directive).join(" ")), n;
  },
  InlineFragment(e) {
    var n = "...";
    return e.typeCondition && (n += " on " + e.typeCondition.name.value), ut(e.directives) && (n += " " + e.directives.map(Fe.Directive).join(" ")), n + " " + st(e.selectionSet);
  },
  FragmentDefinition(e) {
    var n = "fragment " + e.name.value;
    return n += " on " + e.typeCondition.name.value, ut(e.directives) && (n += " " + e.directives.map(Fe.Directive).join(" ")), n + " " + st(e.selectionSet);
  },
  Directive(e) {
    var n = "@" + e.name.value;
    return ut(e.arguments) && (n += "(" + e.arguments.map(Fe.Argument).join(", ") + ")"), n;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + st(e.type) + "]",
  NonNullType: (e) => st(e.type) + "!"
};
function st(e) {
  return Fe[e.kind] ? Fe[e.kind](e) : "";
}
var Ua = () => {
}, at = Ua;
function yt(e) {
  return {
    tag: 0,
    0: e
  };
}
function tr(e) {
  return {
    tag: 1,
    0: e
  };
}
var _d = (e) => e;
function Le(e) {
  return (n) => (t) => {
    var r = at;
    n((a) => {
      a === 0 ? t(0) : a.tag === 0 ? (r = a[0], t(a)) : e(a[0]) ? t(a) : r(0);
    });
  };
}
function Gn(e) {
  return (n) => (t) => n((r) => {
    r === 0 || r.tag === 0 ? t(r) : t(tr(e(r[0])));
  });
}
function zn(e) {
  return (n) => (t) => {
    var r = [], a = at, i = !1, o = !1;
    n((c) => {
      o || (c === 0 ? (o = !0, r.length || t(0)) : c.tag === 0 ? a = c[0] : (i = !1, function(u) {
        var f = at;
        u((l) => {
          if (l === 0) {
            if (r.length) {
              var h = r.indexOf(f);
              h > -1 && (r = r.slice()).splice(h, 1), r.length || (o ? t(0) : i || (i = !0, a(0)));
            }
          } else
            l.tag === 0 ? (r.push(f = l[0]), f(0)) : r.length && (t(l), f(0));
        });
      }(e(c[0])), i || (i = !0, a(0))));
    }), t(yt((c) => {
      if (c === 1) {
        o || (o = !0, a(1));
        for (var y = 0, u = r, f = r.length; y < f; y++)
          u[y](1);
        r.length = 0;
      } else {
        !o && !i ? (i = !0, a(0)) : i = !1;
        for (var l = 0, h = r, p = r.length; l < p; l++)
          h[l](0);
      }
    }));
  };
}
function Od(e) {
  return zn(_d)(e);
}
function pn(e) {
  return Od(Sd(e));
}
function Va(e) {
  return (n) => (t) => {
    var r = !1;
    n((a) => {
      if (!r)
        if (a === 0)
          r = !0, t(0), e();
        else if (a.tag === 0) {
          var i = a[0];
          t(yt((o) => {
            o === 1 ? (r = !0, i(1), e()) : i(o);
          }));
        } else
          t(a);
    });
  };
}
function hn(e) {
  return (n) => (t) => {
    var r = !1;
    n((a) => {
      if (!r)
        if (a === 0)
          r = !0, t(0);
        else if (a.tag === 0) {
          var i = a[0];
          t(yt((o) => {
            o === 1 && (r = !0), i(o);
          }));
        } else
          e(a[0]), t(a);
    });
  };
}
function tu(e) {
  return (n) => (t) => n((r) => {
    r === 0 ? t(0) : r.tag === 0 ? (t(r), e()) : t(r);
  });
}
function Kn(e) {
  var n = [], t = at, r = !1;
  return (a) => {
    n.push(a), n.length === 1 && e((i) => {
      if (i === 0) {
        for (var o = 0, c = n, y = n.length; o < y; o++)
          c[o](0);
        n.length = 0;
      } else if (i.tag === 0)
        t = i[0];
      else {
        r = !1;
        for (var u = 0, f = n, l = n.length; u < l; u++)
          f[u](i);
      }
    }), a(yt((i) => {
      if (i === 1) {
        var o = n.indexOf(a);
        o > -1 && (n = n.slice()).splice(o, 1), n.length || t(1);
      } else
        r || (r = !0, t(0));
    }));
  };
}
function nu(e) {
  return (n) => (t) => {
    var r = at, a = at, i = !1, o = !1, c = !1, y = !1;
    n((u) => {
      y || (u === 0 ? (y = !0, c || t(0)) : u.tag === 0 ? r = u[0] : (c && (a(1), a = at), i ? i = !1 : (i = !0, r(0)), function(l) {
        c = !0, l((h) => {
          c && (h === 0 ? (c = !1, y ? t(0) : i || (i = !0, r(0))) : h.tag === 0 ? (o = !1, (a = h[0])(0)) : (t(h), o ? o = !1 : a(0)));
        });
      }(e(u[0]))));
    }), t(yt((u) => {
      u === 1 ? (y || (y = !0, r(1)), c && (c = !1, a(1))) : (!y && !i && (i = !0, r(0)), c && !o && (o = !0, a(0)));
    }));
  };
}
function Wc(e) {
  return (n) => (t) => {
    var r = at, a = !1, i = 0;
    n((o) => {
      a || (o === 0 ? (a = !0, t(0)) : o.tag === 0 ? e <= 0 ? (a = !0, t(0), o[0](1)) : r = o[0] : i++ < e ? (t(o), !a && i >= e && (a = !0, t(0), r(1))) : t(o));
    }), t(yt((o) => {
      o === 1 && !a ? (a = !0, r(1)) : o === 0 && !a && i < e && r(0);
    }));
  };
}
function $a(e) {
  return (n) => (t) => {
    var r = at, a = at, i = !1;
    n((o) => {
      i || (o === 0 ? (i = !0, a(1), t(0)) : o.tag === 0 ? (r = o[0], e((c) => {
        c === 0 || (c.tag === 0 ? (a = c[0])(0) : (i = !0, a(1), r(1), t(0)));
      })) : t(o));
    }), t(yt((o) => {
      o === 1 && !i ? (i = !0, r(1), a(1)) : i || r(0);
    }));
  };
}
function Hc(e, n) {
  return (t) => (r) => {
    var a = at, i = !1;
    t((o) => {
      i || (o === 0 ? (i = !0, r(0)) : o.tag === 0 ? (a = o[0], r(o)) : e(o[0]) ? r(o) : (i = !0, n && r(o), r(0), a(1)));
    });
  };
}
function Ad(e) {
  return (n) => e()(n);
}
function zc(e) {
  return (n) => {
    var t = e[Symbol.asyncIterator](), r = !1, a = !1, i = !1, o;
    n(yt(async (c) => {
      if (c === 1)
        r = !0, t.return && t.return();
      else if (a)
        i = !0;
      else {
        for (i = a = !0; i && !r; )
          if ((o = await t.next()).done)
            r = !0, t.return && await t.return(), n(0);
          else
            try {
              i = !1, n(tr(o.value));
            } catch (y) {
              if (t.throw)
                (r = !!(await t.throw(y)).done) && n(0);
              else
                throw y;
            }
        a = !1;
      }
    }));
  };
}
function Pd(e) {
  return e[Symbol.asyncIterator] ? zc(e) : (n) => {
    var t = e[Symbol.iterator](), r = !1, a = !1, i = !1, o;
    n(yt((c) => {
      if (c === 1)
        r = !0, t.return && t.return();
      else if (a)
        i = !0;
      else {
        for (i = a = !0; i && !r; )
          if ((o = t.next()).done)
            r = !0, t.return && t.return(), n(0);
          else
            try {
              i = !1, n(tr(o.value));
            } catch (y) {
              if (t.throw)
                (r = !!t.throw(y).done) && n(0);
              else
                throw y;
            }
        a = !1;
      }
    }));
  };
}
var Sd = Pd;
function qn(e) {
  return (n) => {
    var t = !1;
    n(yt((r) => {
      r === 1 ? t = !0 : t || (t = !0, n(tr(e)), n(0));
    }));
  };
}
function Ga(e) {
  return (n) => {
    var t = !1, r = e({
      next(a) {
        t || n(tr(a));
      },
      complete() {
        t || (t = !0, n(0));
      }
    });
    n(yt((a) => {
      a === 1 && !t && (t = !0, r());
    }));
  };
}
function ru() {
  var e, n;
  return {
    source: Kn(Ga((t) => (e = t.next, n = t.complete, Ua))),
    next(t) {
      e && e(t);
    },
    complete() {
      n && n();
    }
  };
}
function iu(e) {
  return Ga((n) => (e.then((t) => {
    Promise.resolve(t).then(() => {
      n.next(t), n.complete();
    });
  }), Ua));
}
function Wt(e) {
  return (n) => {
    var t = at, r = !1;
    return n((a) => {
      a === 0 ? r = !0 : a.tag === 0 ? (t = a[0])(0) : r || (e(a[0]), t(0));
    }), {
      unsubscribe() {
        r || (r = !0, t(1));
      }
    };
  };
}
function Ed(e) {
  Wt((n) => {
  })(e);
}
function Td(e) {
  return new Promise((n) => {
    var t = at, r;
    e((a) => {
      a === 0 ? Promise.resolve(r).then(n) : a.tag === 0 ? (t = a[0])(0) : (r = a[0], t(0));
    });
  });
}
var wd = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new la(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new la(e);
class nr extends Error {
  constructor(n) {
    var t = (n.graphQLErrors || []).map(wd), r = ((a, i) => {
      var o = "";
      if (a)
        return `[Network] ${a.message}`;
      if (i)
        for (var c of i)
          o && (o += `
`), o += `[GraphQL] ${c.message}`;
      return o;
    })(n.networkError, t);
    super(r), this.name = "CombinedError", this.message = r, this.graphQLErrors = t, this.networkError = n.networkError, this.response = n.response;
  }
  toString() {
    return this.message;
  }
}
var da = (e, n) => {
  for (var t = 0 | (n || 5381), r = 0, a = 0 | e.length; r < a; r++)
    t = (t << 5) + t + e.charCodeAt(r);
  return t;
}, qt = /* @__PURE__ */ new Set(), au = /* @__PURE__ */ new WeakMap(), on = (e) => {
  if (e === null || qt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return on(e.toJSON());
  if (Array.isArray(e)) {
    var n = "[";
    for (var t of e)
      n.length > 1 && (n += ","), n += on(t) || "null";
    return n += "]";
  } else if (kr !== yn && e instanceof kr || Br !== yn && e instanceof Br)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var a = au.get(e) || Math.random().toString(36).slice(2);
    return au.set(e, a), on({
      __key: a
    });
  }
  qt.add(e);
  var i = "{";
  for (var o of r) {
    var c = on(e[o]);
    c && (i.length > 1 && (i += ","), i += on(o) + ":" + c);
  }
  return qt.delete(e), i += "}";
}, fa = (e, n, t) => {
  if (!(t == null || typeof t != "object" || t.toJSON || qt.has(t)))
    if (Array.isArray(t))
      for (var r = 0, a = t.length; r < a; r++)
        fa(e, `${n}.${r}`, t[r]);
    else if (t instanceof kr || t instanceof Br)
      e.set(n, t);
    else {
      qt.add(t);
      for (var i of Object.keys(t))
        fa(e, `${n}.${i}`, t[i]);
    }
}, Dr = (e) => (qt.clear(), on(e));
let yn = class {
};
var kr = typeof File < "u" ? File : yn, Br = typeof Blob < "u" ? Blob : yn, Id = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, jd = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, Cd = (e, n) => n % 2 == 0 ? e.replace(jd, `
`) : e, ou = (e) => e.split(Id).map(Cd).join("").trim(), uu = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), qa = (e) => {
  var n;
  return typeof e == "string" ? n = ou(e) : e.loc && Tr.get(e.__key) === e ? n = e.loc.source.body : (n = uu.get(e) || ou(st(e)), uu.set(e, n)), typeof e != "string" && !e.loc && (e.loc = {
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
}, cu = (e) => {
  var n = da(qa(e));
  if (e.definitions) {
    var t = Qc(e);
    t && (n = da(`
# ${t}`, n));
  }
  return n;
}, Kc = (e) => {
  var n, t;
  return typeof e == "string" ? (n = cu(e), t = Tr.get(n) || md(e)) : (n = e.__key || cu(e), t = Tr.get(n) || e), t.loc || qa(t), t.__key = n, Tr.set(n, t), t;
}, Ai = (e, n, t) => {
  var r = n || {}, a = Kc(e), i = Dr(r), o = a.__key;
  return i !== "{}" && (o = da(i, o)), {
    key: o,
    query: a,
    variables: r,
    extensions: t
  };
}, Qc = (e) => {
  for (var n of e.definitions)
    if (n.kind === ln.OPERATION_DEFINITION)
      return n.name ? n.name.value : void 0;
}, Md = (e) => {
  for (var n of e.definitions)
    if (n.kind === ln.OPERATION_DEFINITION)
      return n.operation;
}, pa = (e, n, t) => {
  if (!("data" in n) && !("errors" in n))
    throw new Error("No Content");
  var r = e.kind === "subscription";
  return {
    operation: e,
    data: n.data,
    error: Array.isArray(n.errors) ? new nr({
      graphQLErrors: n.errors,
      response: t
    }) : void 0,
    extensions: n.extensions ? {
      ...n.extensions
    } : void 0,
    hasNext: n.hasNext == null ? r : n.hasNext,
    stale: !1
  };
}, ha = (e, n) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var t of Object.keys(n))
      e[t] = ha(e[t], n[t]);
    return e;
  }
  return n;
}, ya = (e, n, t) => {
  var r = e.error ? e.error.graphQLErrors : [], a = !!e.extensions || !!n.extensions, i = {
    ...e.extensions,
    ...n.extensions
  }, o = n.incremental;
  "path" in n && (o = [n]);
  var c = {
    data: e.data
  };
  if (o)
    for (var y of o) {
      Array.isArray(y.errors) && r.push(...y.errors), y.extensions && (Object.assign(i, y.extensions), a = !0);
      for (var u = "data", f = c, l = 0, h = y.path.length; l < h; u = y.path[l++])
        f = f[u] = Array.isArray(f[u]) ? [...f[u]] : {
          ...f[u]
        };
      if (y.items)
        for (var p = +u >= 0 ? u : 0, d = 0, s = y.items.length; d < s; d++)
          f[p + d] = ha(f[p + d], y.items[d]);
      else
        y.data !== void 0 && (f[u] = ha(f[u], y.data));
    }
  else
    c.data = n.data || e.data, r = n.errors || r;
  return {
    operation: e.operation,
    data: c.data,
    error: r.length ? new nr({
      graphQLErrors: r,
      response: t
    }) : void 0,
    extensions: a ? i : void 0,
    hasNext: n.hasNext != null ? n.hasNext : e.hasNext,
    stale: !1
  };
}, Yc = (e, n, t) => ({
  operation: e,
  data: void 0,
  error: new nr({
    networkError: n,
    response: t
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function Jc(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : qa(e.query),
    operationName: Qc(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var Nd = (e, n) => {
  var t = e.kind === "query" && e.context.preferGetMethod;
  if (!t || !n)
    return e.context.url;
  var r = new URL(e.context.url);
  for (var a in n) {
    var i = n[a];
    i && r.searchParams.set(a, typeof i == "object" ? Dr(i) : i);
  }
  var o = r.toString();
  return o.length > 2047 && t !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, Rd = (e, n) => {
  if (n && !(e.kind === "query" && e.context.preferGetMethod)) {
    var t = Dr(n), r = ((c) => {
      var y = /* @__PURE__ */ new Map();
      return (kr !== yn || Br !== yn) && (qt.clear(), fa(y, "variables", c)), y;
    })(n.variables);
    if (r.size) {
      var a = new FormData();
      a.append("operations", t), a.append("map", Dr({
        ...[...r.keys()].map((c) => [c])
      }));
      var i = 0;
      for (var o of r.values())
        a.append("" + i++, o);
      return a;
    }
    return t;
  }
}, Dd = (e, n) => {
  var t = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, r = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (r.headers)
    for (var a in r.headers)
      t[a.toLowerCase()] = r.headers[a];
  var i = Rd(e, n);
  return typeof i == "string" && !t["content-type"] && (t["content-type"] = "application/json"), {
    ...r,
    method: i ? "POST" : "GET",
    body: i,
    headers: t
  };
}, kd = typeof TextDecoder < "u" ? new TextDecoder() : null, Bd = /boundary="?([^=";]+)"?/i, Ld = /data: ?([^\n]+)/, su = (e) => e.constructor.name === "Buffer" ? e.toString() : kd.decode(e);
async function* lu(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var n of e.body)
      yield su(n);
  else {
    var t = e.body.getReader(), r;
    try {
      for (; !(r = await t.read()).done; )
        yield su(r.value);
    } finally {
      t.cancel();
    }
  }
}
async function* du(e, n) {
  var t = "", r;
  for await (var a of e)
    for (t += a; (r = t.indexOf(n)) > -1; )
      yield t.slice(0, r), t = t.slice(r + n.length);
}
async function* Fd(e, n, t) {
  var r = !0, a = null, i;
  try {
    yield await Promise.resolve();
    var o = (i = await (e.context.fetch || fetch)(n, t)).headers.get("Content-Type") || "", c;
    if (/multipart\/mixed/i.test(o))
      c = async function* (f, l) {
        var h = f.match(Bd), p = "--" + (h ? h[1] : "-"), d = !0, s;
        for await (var v of du(lu(l), `\r
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
            yield s = JSON.parse(v.slice(v.indexOf(`\r
\r
`) + 4));
          } catch (g) {
            if (!s)
              throw g;
          }
          if (s && s.hasNext === !1)
            break;
        }
        s && s.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o, i);
    else if (/text\/event-stream/i.test(o))
      c = async function* (f) {
        var l;
        for await (var h of du(lu(f), `

`)) {
          var p = h.match(Ld);
          if (p) {
            var d = p[1];
            try {
              yield l = JSON.parse(d);
            } catch (s) {
              if (!l)
                throw s;
            }
            if (l && l.hasNext === !1)
              break;
          }
        }
        l && l.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(i);
    else if (!/text\//i.test(o))
      c = async function* (f) {
        yield JSON.parse(await f.text());
      }(i);
    else
      throw new Error(await i.text());
    for await (var y of c)
      a = a ? ya(a, y, i) : pa(e, y, i), r = !1, yield a, r = !0;
    a || (yield a = pa(e, {}, i));
  } catch (u) {
    if (!r)
      throw u;
    yield Yc(e, i && (i.status < 200 || i.status >= 300) && i.statusText ? new Error(i.statusText) : u, i);
  }
}
function Ud(e, n, t) {
  var r;
  return typeof AbortController < "u" && (t.signal = (r = new AbortController()).signal), Va(() => {
    r && r.abort();
  })(Le((a) => !!a)(zc(Fd(e, n, t))));
}
var va = (e, n) => {
  if (Array.isArray(e))
    for (var t of e)
      va(t, n);
  else if (typeof e == "object" && e !== null)
    for (var r in e)
      r === "__typename" && typeof e[r] == "string" ? n.add(e[r]) : va(e[r], n);
  return n;
}, ma = (e) => {
  var n = !1;
  if ("definitions" in e) {
    var t = [];
    for (var r of e.definitions) {
      var a = ma(r);
      n = n || a !== r, t.push(a);
    }
    if (n)
      return {
        ...e,
        definitions: t
      };
  } else if ("selectionSet" in e) {
    var i = [], o = e.kind === ln.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var c of e.selectionSet.selections || []) {
        o = o || c.kind === ln.FIELD && c.name.value === "__typename" && !c.alias;
        var y = ma(c);
        n = n || y !== c, i.push(y);
      }
      if (o || (n = !0, i.push({
        kind: ln.FIELD,
        name: {
          kind: ln.NAME,
          value: "__typename"
        }
      })), n)
        return {
          ...e,
          selectionSet: {
            ...e.selectionSet,
            selections: i
          }
        };
    }
  }
  return e;
}, fu = /* @__PURE__ */ new Map(), Vd = (e) => {
  var n = Kc(e), t = fu.get(n.__key);
  return t || (fu.set(n.__key, t = ma(n)), Object.defineProperty(t, "__key", {
    value: n.__key,
    enumerable: !1
  })), t;
}, ga = (e, n) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((a) => ga(a));
  if (e && typeof e == "object" && (n || "__typename" in e)) {
    var t = {};
    for (var r in e)
      r === "__typename" ? Object.defineProperty(t, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : t[r] = ga(e[r]);
    return t;
  } else
    return e;
};
function pu(e) {
  var n = (t) => e(t);
  return n.toPromise = () => Td(Wc(1)(Le((t) => !t.stale && !t.hasNext)(n))), n.then = (t, r) => n.toPromise().then(t, r), n.subscribe = (t) => Wt(t)(n), n;
}
function vn(e, n, t) {
  return {
    ...n,
    kind: e,
    context: n.context ? {
      ...n.context,
      ...t
    } : t || n.context
  };
}
var hu = (e, n) => vn(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...n
  }
}), $d = () => {
}, Pi = ({ kind: e }) => e !== "mutation" && e !== "query", Gd = ({ forward: e, client: n, dispatchDebug: t }) => {
  var r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), i = (c) => {
    var y = vn(c.kind, c);
    return y.query = Vd(c.query), y;
  }, o = (c) => c.kind === "query" && c.context.requestPolicy !== "network-only" && (c.context.requestPolicy === "cache-only" || r.has(c.key));
  return (c) => {
    var y = Gn((f) => {
      var l = r.get(f.key);
      process.env.NODE_ENV !== "production" && t({
        operation: f,
        ...l ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var h = l;
      return process.env.NODE_ENV !== "production" && (h = {
        ...h,
        operation: process.env.NODE_ENV !== "production" ? hu(f, {
          cacheOutcome: l ? "hit" : "miss"
        }) : f
      }), f.context.requestPolicy === "cache-and-network" && (h.stale = !0, yu(n, f)), h;
    })(Le((f) => !Pi(f) && o(f))(c)), u = hn((f) => {
      var { operation: l } = f;
      if (l) {
        var h = l.context.additionalTypenames || [];
        if (f.operation.kind !== "subscription" && (h = ((P) => [...va(P, /* @__PURE__ */ new Set())])(f.data).concat(h)), f.operation.kind === "mutation" || f.operation.kind === "subscription") {
          var p = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && t({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${h}`,
            operation: l,
            data: {
              typenames: h,
              response: f
            },
            source: "cacheExchange"
          });
          for (var d = 0; d < h.length; d++) {
            var s = h[d], v = a.get(s);
            v || a.set(s, v = /* @__PURE__ */ new Set());
            for (var m of v.values())
              p.add(m);
            v.clear();
          }
          for (var g of p.values())
            r.has(g) && (l = r.get(g).operation, r.delete(g), yu(n, l));
        } else if (l.kind === "query" && f.data) {
          r.set(l.key, f);
          for (var O = 0; O < h.length; O++) {
            var _ = h[O], T = a.get(_);
            T || a.set(_, T = /* @__PURE__ */ new Set()), T.add(l.key);
          }
        }
      }
    })(e(Le((f) => f.kind !== "query" || f.context.requestPolicy !== "cache-only")(Gn((f) => process.env.NODE_ENV !== "production" ? hu(f, {
      cacheOutcome: "miss"
    }) : f)(pn([Gn(i)(Le((f) => !Pi(f) && !o(f))(c)), Le((f) => Pi(f))(c)])))));
    return pn([y, u]);
  };
}, yu = (e, n) => e.reexecuteOperation(vn(n.kind, n, {
  requestPolicy: "network-only"
})), vu = ({ forwardSubscription: e, enableAllOperations: n, isSubscriptionOperation: t }) => ({ client: r, forward: a }) => {
  var i = t || ((o) => o.kind === "subscription" || !!n && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var c = zn((u) => {
      var { key: f } = u, l = Le((h) => h.kind === "teardown" && h.key === f)(o);
      return $a(l)(((h) => {
        var p = e(Jc(h), h);
        return Ga(({ next: d, complete: s }) => {
          var v = !1, m, g;
          return Promise.resolve().then(() => {
            v || (m = p.subscribe({
              next(O) {
                d(g = g ? ya(g, O) : pa(h, O));
              },
              error(O) {
                d(Yc(h, O));
              },
              complete() {
                v || (v = !0, h.kind === "subscription" && r.reexecuteOperation(vn("teardown", h, h.context)), g && g.hasNext && d(ya(g, {
                  hasNext: !1
                })), s());
              }
            }));
          }), () => {
            v = !0, m && m.unsubscribe();
          };
        });
      })(u));
    })(Le((u) => u.kind !== "teardown" && i(u))(o)), y = a(Le((u) => u.kind === "teardown" || !i(u))(o));
    return pn([c, y]);
  };
}, qd = ({ forward: e, dispatchDebug: n }) => (t) => {
  var r = zn((i) => {
    var o = Jc(i), c = Nd(i, o), y = Dd(i, o);
    process.env.NODE_ENV !== "production" && n({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: i,
      data: {
        url: c,
        fetchOptions: y
      },
      source: "fetchExchange"
    });
    var u = $a(Le((f) => f.kind === "teardown" && f.key === i.key)(t))(Ud(i, c, y));
    return process.env.NODE_ENV !== "production" ? hn((f) => {
      var l = f.data ? void 0 : f.error;
      process.env.NODE_ENV !== "production" && n({
        type: l ? "fetchError" : "fetchSuccess",
        message: `A ${l ? "failed" : "successful"} fetch response has been returned.`,
        operation: i,
        data: {
          url: c,
          fetchOptions: y,
          value: l || f
        },
        source: "fetchExchange"
      });
    })(u) : u;
  })(Le((i) => i.kind !== "teardown" && (i.kind !== "subscription" || !!i.context.fetchSubscriptions))(t)), a = e(Le((i) => i.kind === "teardown" || i.kind === "subscription" && !i.context.fetchSubscriptions)(t));
  return pn([r, a]);
}, Wd = (e) => ({ client: n, forward: t, dispatchDebug: r }) => e.reduceRight((a, i) => {
  var o = !1;
  return i({
    client: n,
    forward(c) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return Kn(a(Kn(c)));
    },
    dispatchDebug(c) {
      process.env.NODE_ENV !== "production" && r({
        timestamp: Date.now(),
        source: i.name,
        ...c
      });
    }
  });
}, t), Xc = ({ onOperation: e, onResult: n, onError: t }) => ({ forward: r }) => (a) => zn((i) => {
  t && i.error && t(i.error, i.operation);
  var o = n && n(i) || i;
  return "then" in o ? iu(o) : qn(o);
})(r(zn((i) => {
  var o = e && e(i) || i;
  return "then" in o ? iu(o) : qn(o);
})(a))), Hd = ({ dispatchDebug: e }) => (n) => (process.env.NODE_ENV !== "production" && (n = hn((t) => {
  if (t.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var r = `No exchange has handled operations of kind "${t.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: r,
      operation: t,
      source: "fallbackExchange"
    }), console.warn(r);
  }
})(n)), Le((t) => !1)(n)), mu = function e(n) {
  if (process.env.NODE_ENV !== "production" && !n.url)
    throw new Error("You are creating an urql-client without a url.");
  var t = 0, r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set(), o = [], c = {
    url: n.url,
    fetchSubscriptions: n.fetchSubscriptions,
    fetchOptions: n.fetchOptions,
    fetch: n.fetch,
    preferGetMethod: !!n.preferGetMethod,
    requestPolicy: n.requestPolicy || "cache-first"
  }, y = ru();
  function u(_) {
    (_.kind === "mutation" || _.kind === "teardown" || !i.has(_.key)) && (_.kind === "teardown" ? i.delete(_.key) : _.kind !== "mutation" && i.add(_.key), y.next(_));
  }
  var f = !1;
  function l(_) {
    if (_ && u(_), !f) {
      for (f = !0; f && (_ = o.shift()); )
        u(_);
      f = !1;
    }
  }
  var h = (_) => {
    var T = $a(Le((P) => P.kind === "teardown" && P.key === _.key)(y.source))(Le((P) => P.operation.kind === _.kind && P.operation.key === _.key && (!P.operation.context._instance || P.operation.context._instance === _.context._instance))(O));
    return _.kind !== "query" ? T = Hc((P) => !!P.hasNext, !0)(T) : T = nu((P) => {
      var E = qn(P);
      return P.stale || P.hasNext ? E : pn([E, Gn(() => (P.stale = !0, P))(Wc(1)(Le((S) => S.key === _.key)(y.source)))]);
    })(T), _.kind !== "mutation" ? T = Va(() => {
      i.delete(_.key), r.delete(_.key), a.delete(_.key), f = !1;
      for (var P = o.length - 1; P >= 0; P--)
        o[P].key === _.key && o.splice(P, 1);
      u(vn("teardown", _, _.context));
    })(hn((P) => {
      if (P.stale) {
        for (var E of o)
          if (E.key === P.operation.key) {
            i.delete(E.key);
            break;
          }
      } else
        P.hasNext || i.delete(_.key);
      r.set(_.key, P);
    })(T)) : T = tu(() => {
      u(_);
    })(T), n.maskTypename && (T = Gn((P) => ({
      ...P,
      data: ga(P.data, !0)
    }))(T)), Kn(T);
  }, p = this instanceof e ? this : Object.create(e.prototype), d = Object.assign(p, {
    suspense: !!n.suspense,
    operations$: y.source,
    reexecuteOperation(_) {
      _.kind === "teardown" ? l(_) : (_.kind === "mutation" || a.has(_.key)) && (o.push(_), Promise.resolve().then(l));
    },
    createRequestOperation(_, T, P) {
      P || (P = {});
      var E;
      if (process.env.NODE_ENV !== "production" && _ !== "teardown" && (E = Md(T.query)) !== _)
        throw new Error(`Expected operation of type "${_}" but found "${E}"`);
      return vn(_, T, {
        _instance: _ === "mutation" ? t = t + 1 | 0 : void 0,
        ...c,
        ...P,
        requestPolicy: P.requestPolicy || c.requestPolicy,
        suspense: P.suspense || P.suspense !== !1 && d.suspense
      });
    },
    executeRequestOperation(_) {
      return _.kind === "mutation" ? pu(h(_)) : pu(Ad(() => {
        var T = a.get(_.key);
        T || a.set(_.key, T = h(_)), T = tu(() => {
          l(_);
        })(T);
        var P = r.get(_.key);
        return _.kind === "query" && P && (P.stale || P.hasNext) ? nu(qn)(pn([T, Le((E) => E === r.get(_.key))(qn(P))])) : T;
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
      return Wt((S) => {
        E = S;
      })(d.query(_, T, P)).unsubscribe(), E;
    },
    query: (_, T, P) => d.executeQuery(Ai(_, T), P),
    subscription: (_, T, P) => d.executeSubscription(Ai(_, T), P),
    mutation: (_, T, P) => d.executeMutation(Ai(_, T), P)
  }), s = $d;
  if (process.env.NODE_ENV !== "production") {
    var { next: v, source: m } = ru();
    d.subscribeToDebugTarget = (_) => Wt(_)(m), s = v;
  }
  var g = Wd(n.exchanges), O = Kn(g({
    client: d,
    dispatchDebug: s,
    forward: Hd({
      dispatchDebug: s
    })
  })(y.source));
  return Ed(O), d;
};
function ze(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Vt(e) {
  return ze(e) === "object";
}
function zd(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((n) => "message" in n);
}
function gu(e, n) {
  return e.length < 124 ? e : n;
}
const Kd = "graphql-transport-ws";
var He;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(He || (He = {}));
var Ee;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(Ee || (Ee = {}));
function Zc(e) {
  if (!Vt(e))
    throw new Error(`Message is expected to be an object, but got ${ze(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${ze(e.type)}`);
  switch (e.type) {
    case Ee.ConnectionInit:
    case Ee.ConnectionAck:
    case Ee.Ping:
    case Ee.Pong: {
      if (e.payload != null && !Vt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case Ee.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ze(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Vt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ze(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${ze(e.payload.query)}`);
      if (e.payload.variables != null && !Vt(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${ze(e.payload.variables)}`);
      if (e.payload.operationName != null && ze(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${ze(e.payload.operationName)}`);
      if (e.payload.extensions != null && !Vt(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${ze(e.payload.extensions)}`);
      break;
    }
    case Ee.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ze(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Vt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ze(e.payload)}`);
      break;
    }
    case Ee.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ze(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!zd(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case Ee.Complete: {
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
function Qd(e, n) {
  return Zc(typeof e == "string" ? JSON.parse(e, n) : e);
}
function Dn(e, n) {
  return Zc(e), JSON.stringify(e, n);
}
function Yd(e) {
  const {
    url: n,
    connectionParams: t,
    lazy: r = !0,
    onNonLazyError: a = console.error,
    lazyCloseTimeout: i = 0,
    keepAlive: o = 0,
    disablePong: c,
    connectionAckWaitTimeout: y = 0,
    retryAttempts: u = 5,
    retryWait: f = async function(U) {
      let q = 1e3;
      for (let L = 0; L < U; L++)
        q *= 2;
      await new Promise((L) => setTimeout(L, q + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: l = pr,
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
    generateID: s = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (U) => {
        const q = Math.random() * 16 | 0;
        return (U == "x" ? q : q & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: v,
    jsonMessageReviver: m
  } = e;
  let g;
  if (d) {
    if (!Xd(d))
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
        on(L, J) {
          return q[L] = J, () => {
            delete q[L];
          };
        },
        emit(L) {
          var J;
          "id" in L && ((J = q[L.id]) === null || J === void 0 || J.call(q, L));
        }
      };
    })(), U = {
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
        const J = U[q];
        return J.push(L), () => {
          J.splice(J.indexOf(L), 1);
        };
      },
      emit(q, ...L) {
        for (const J of [...U[q]])
          J(...L);
      }
    };
  })();
  function T(D) {
    const U = [
      // errors are fatal and more critical than close events, throw them first
      _.on("error", (q) => {
        U.forEach((L) => L()), D(q);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      _.on("closed", (q) => {
        U.forEach((L) => L()), D(q);
      })
    ];
  }
  let P, E = 0, S, w = !1, I = 0, C = !1;
  async function k() {
    clearTimeout(S);
    const [D, U] = await (P ?? (P = new Promise((J, fe) => (async () => {
      if (w) {
        if (await f(I), !E)
          return P = void 0, fe({ code: 1e3, reason: "All Subscriptions Gone" });
        I++;
      }
      _.emit("connecting");
      const W = new O(typeof n == "function" ? await n() : n, Kd);
      let ge, H;
      function ne() {
        isFinite(o) && o > 0 && (clearTimeout(H), H = setTimeout(() => {
          W.readyState === O.OPEN && (W.send(Dn({ type: Ee.Ping })), _.emit("ping", !1, void 0));
        }, o));
      }
      T((oe) => {
        P = void 0, clearTimeout(ge), clearTimeout(H), fe(oe), pr(oe) && oe.code === 4499 && (W.close(4499, "Terminated"), W.onerror = null, W.onclose = null);
      }), W.onerror = (oe) => _.emit("error", oe), W.onclose = (oe) => _.emit("closed", oe), W.onopen = async () => {
        try {
          _.emit("opened", W);
          const oe = typeof t == "function" ? await t() : t;
          if (W.readyState !== O.OPEN)
            return;
          W.send(Dn(oe ? {
            type: Ee.ConnectionInit,
            payload: oe
          } : {
            type: Ee.ConnectionInit
            // payload is completely absent if not provided
          }, v)), isFinite(y) && y > 0 && (ge = setTimeout(() => {
            W.close(He.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, y)), ne();
        } catch (oe) {
          _.emit("error", oe), W.close(He.InternalClientError, gu(oe instanceof Error ? oe.message : new Error(oe).message, "Internal client error"));
        }
      };
      let pe = !1;
      W.onmessage = ({ data: oe }) => {
        try {
          const K = Qd(oe, m);
          if (_.emit("message", K), K.type === "ping" || K.type === "pong") {
            _.emit(K.type, !0, K.payload), K.type === "pong" ? ne() : c || (W.send(Dn(K.payload ? {
              type: Ee.Pong,
              payload: K.payload
            } : {
              type: Ee.Pong
              // payload is completely absent if not provided
            })), _.emit("pong", !1, K.payload));
            return;
          }
          if (pe)
            return;
          if (K.type !== Ee.ConnectionAck)
            throw new Error(`First message cannot be of type ${K.type}`);
          clearTimeout(ge), pe = !0, _.emit("connected", W, K.payload), w = !1, I = 0, J([
            W,
            new Promise((je, be) => T(be))
          ]);
        } catch (K) {
          W.onmessage = null, _.emit("error", K), W.close(He.BadResponse, gu(K instanceof Error ? K.message : new Error(K).message, "Bad response"));
        }
      };
    })())));
    D.readyState === O.CLOSING && await U;
    let q = () => {
    };
    const L = new Promise((J) => q = J);
    return [
      D,
      q,
      Promise.race([
        // wait for
        L.then(() => {
          if (!E) {
            const J = () => D.close(1e3, "Normal Closure");
            isFinite(i) && i > 0 ? S = setTimeout(() => {
              D.readyState === O.OPEN && J();
            }, i) : J();
          }
        }),
        // or
        U
      ])
    ];
  }
  function B(D) {
    if (pr(D) && (Jd(D.code) || [
      He.InternalServerError,
      He.InternalClientError,
      He.BadRequest,
      He.BadResponse,
      He.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      He.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      He.SubscriberAlreadyExists,
      He.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(D.code)))
      throw D;
    if (C)
      return !1;
    if (pr(D) && D.code === 1e3)
      return E > 0;
    if (!u || I >= u || !l(D) || h != null && h(D))
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
        } catch (U) {
          return a == null ? void 0 : a(U);
        }
      }
  })(), {
    on: _.on,
    subscribe(D, U) {
      const q = s(D);
      let L = !1, J = !1, fe = () => {
        E--, L = !0;
      };
      return (async () => {
        for (E++; ; )
          try {
            const [W, ge, H] = await k();
            if (L)
              return ge();
            const ne = _.onMessage(q, (pe) => {
              switch (pe.type) {
                case Ee.Next: {
                  U.next(pe.payload);
                  return;
                }
                case Ee.Error: {
                  J = !0, L = !0, U.error(pe.payload), fe();
                  return;
                }
                case Ee.Complete: {
                  L = !0, fe();
                  return;
                }
              }
            });
            W.send(Dn({
              id: q,
              type: Ee.Subscribe,
              payload: D
            }, v)), fe = () => {
              !L && W.readyState === O.OPEN && W.send(Dn({
                id: q,
                type: Ee.Complete
              }, v)), E--, L = !0, ge();
            }, await H.finally(ne);
            return;
          } catch (W) {
            if (!B(W))
              return;
          }
      })().then(() => {
        J || U.complete();
      }).catch((W) => {
        U.error(W);
      }), () => {
        L || fe();
      };
    },
    async dispose() {
      if (C = !0, P) {
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
function pr(e) {
  return Vt(e) && "code" in e && "reason" in e;
}
function Jd(e) {
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
function Xd(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var un = null;
typeof WebSocket < "u" ? un = WebSocket : typeof MozWebSocket < "u" ? un = MozWebSocket : typeof global < "u" ? un = global.WebSocket || global.MozWebSocket : typeof window < "u" ? un = window.WebSocket || window.MozWebSocket : typeof self < "u" && (un = self.WebSocket || self.MozWebSocket);
const Zd = un;
function xe(e) {
  if (typeof e != "object")
    return e;
  var n, t, r = Object.prototype.toString.call(e);
  if (r === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      t = new e.constructor();
      for (n in e)
        e.hasOwnProperty(n) && t[n] !== e[n] && (t[n] = xe(e[n]));
    } else {
      t = {};
      for (n in e)
        n === "__proto__" ? Object.defineProperty(t, n, {
          value: xe(e[n]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : t[n] = xe(e[n]);
    }
    return t;
  }
  if (r === "[object Array]") {
    for (n = e.length, t = Array(n); n--; )
      t[n] = xe(e[n]);
    return t;
  }
  return r === "[object Set]" ? (t = /* @__PURE__ */ new Set(), e.forEach(function(a) {
    t.add(xe(a));
  }), t) : r === "[object Map]" ? (t = /* @__PURE__ */ new Map(), e.forEach(function(a, i) {
    t.set(xe(i), xe(a));
  }), t) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (t = new RegExp(e.source, e.flags), t.lastIndex = e.lastIndex, t) : r === "[object DataView]" ? new e.constructor(xe(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var We;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(We || (We = {}));
class xd {
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
    }), this.__gadget.instantiatedFields = xe(n), this.__gadget.persistedFields = xe(n), Object.assign(this.__gadget.fields, n), !n || Object.keys(n).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((r) => this.__gadget.fieldKeysTracker[r] = !0));
    const t = {
      get: (r, a) => {
        if (a in this)
          return this[a];
        if (a in r)
          return r[a];
      },
      set: (r, a, i) => (this.trackKey(a), r[a.toString()] = i, !0)
    };
    return new Proxy(this.__gadget.fields, t);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(n) {
    const t = n.toString();
    this.__gadget.fieldKeysTracker[t] || (this.__gadget.fieldKeysTracker[t] = !0, this.__gadget.fieldKeys.push(t));
  }
  /** Returns true if even a single field has changed */
  hasChanges(n = We.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const t = n == We.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((r) => !hr(t[r], this.__gadget.fields[r]));
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
  changes(n, t = We.SinceLoaded) {
    const a = (typeof n == "string" ? t : n || t) == We.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (n && typeof n == "string") {
      const i = a[n], o = this.__gadget.fields[n], c = !hr(o, i);
      return c ? { changed: c, current: o, previous: i } : { changed: c };
    } else {
      const i = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const c = this.__gadget.fieldKeys[o];
        hr(a[c], this.__gadget.fields[c]) || (i[c] = { current: this.__gadget.fields[c], previous: a[c] });
      }
      return i;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(n = We.SinceLoaded) {
    const t = n == We.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, r = {};
    for (let a = 0; a < this.__gadget.fieldKeys.length; a++) {
      const i = this.__gadget.fieldKeys[a];
      hr(t[i], this.__gadget.fields[i]) || (r[i] = this.__gadget.fields[i]);
    }
    return r;
  }
  changed(n, t = We.SinceLoaded) {
    return n && typeof n == "string" ? this.changes(n, t).changed : this.hasChanges(n === void 0 ? t : n);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(n = We.SinceLoaded) {
    n == We.SinceLoaded ? this.__gadget.instantiatedFields = xe(this.__gadget.fields) : n == We.SinceLastPersisted && (this.__gadget.persistedFields = xe(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(n = We.SinceLoaded) {
    let t;
    n == We.SinceLoaded ? t = Object.keys(this.__gadget.instantiatedFields) : t = Object.keys(this.__gadget.persistedFields);
    for (const r of this.__gadget.fieldKeys)
      t.includes(r) || delete this.__gadget.fields[r];
    n == We.SinceLoaded ? Object.assign(this.__gadget.fields, xe(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, xe(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Oa({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const xc = xd;
class es extends Error {
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
class ba extends Error {
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
class ei extends Error {
  constructor(n, t) {
    super(n.startsWith("GGT_") ? n : `${t}: ${n}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    });
  }
}
class bu extends Error {
  constructor(n) {
    let t;
    _a(n) ? t = `GraphQL websocket closed unexpectedly by the server with error code ${n.code} and reason "${n.reason}"` : t = "GraphQL websocket closed unexpectedly by the server", super(t), Object.defineProperty(this, "code", {
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
class ef extends Error {
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
class tf extends Error {
  constructor(n, t, r, a) {
    const i = t.slice(0, 3), o = t.length > 3 ? `, and ${t.length - 3} more error${t.length > 4 ? "s" : ""} need${t.length > 4 ? "" : "s"} to be corrected` : "";
    super(n ?? `GGT_INVALID_RECORD: ${r ?? "Record"} is invalid and can't be saved. ${i.map(({ apiIdentifier: c, message: y }) => `${c} ${y}`).join(", ")}${o}.`), Object.defineProperty(this, "code", {
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
    }), this.validationErrors = t, this.modelApiIdentifier = r, this.record = a;
  }
}
class ts extends Error {
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
class ns extends Error {
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
class nf extends Error {
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
function _u(e, n) {
  if (!e)
    throw new Error("assertion error" + (n ? `: ${n}` : ""));
  return e;
}
const mn = (e, n) => {
  const t = n.length;
  let r = 0;
  for (; e != null && r < t; )
    e = e[n[r++]];
  return r && r == t ? e : void 0;
}, _a = (e) => (e == null ? void 0 : e.type) == "close", _t = (e, n) => typeof e != "string" ? "" : ti(e, n), Ou = (e) => {
  const n = e == null ? "" : String(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, ti = (e, n = !0) => {
  let t = "" + e;
  return n ? t = t.replace(/^[a-z\d]*/, (r) => Ou(r)) : t = t.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (r) => r.toLowerCase()), t = t.replace(/(?:_|(\/))([a-z\d]*)/gi, (r, a, i, o, c) => (a || (a = ""), "" + a + Ou(i))), t;
}, rf = (e) => `${ti(e)}Sort`, af = (e) => `${ti(e)}Filter`, of = (e, n, t) => new ts(`More than one record found for ${e}.${n} = ${t}. Please confirm your unique validation is not reporting an error.`), uf = (e, n) => {
  if (e.fetching)
    return;
  const t = mn(e.data, n);
  if (t === void 0)
    return new es(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${n.join(".")}`);
  if (t === null)
    return new ns(`Record Not Found Error: Gadget API returned no data at ${n.join(".")}`);
}, wt = (e, n, t = !1) => {
  var r;
  if (e.error)
    throw e.error instanceof nr && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((c) => "[Network] " + c.message).join(`
`)), e.error;
  const a = mn(e.data, n), i = mn(a, ["edges"]), o = i ?? a;
  if (a === void 0)
    throw new es(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${n.join(".")}`);
  if (a === null || t && Array.isArray(o) && o.length === 0)
    throw new ns(`Record Not Found Error: Gadget API returned no data at ${n.join(".")}`);
  return a;
}, Wn = (e, n) => {
  var t;
  if (e.error)
    throw e.error instanceof nr && (!((t = e.error.networkError) === null || t === void 0) && t.length) && (e.error.message = e.error.networkError.map((a) => "[Network] " + a.message).join(`
`)), e.error;
  const r = mn(e.data, n);
  return r ?? null;
}, Wa = (e) => {
  var n;
  return e.code == "GGT_INVALID_RECORD" ? new tf(e.message, e.validationErrors, (n = e.model) === null || n === void 0 ? void 0 : n.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new ts(e.message) : new ei(e.message, e.code);
}, $t = (e, n) => {
  const t = wt(e, n);
  if (!t.success) {
    const r = t.errors && t.errors[0];
    throw r ? Wa(r) : new ei("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return t;
}, rs = (e) => {
  var n, t, r, a;
  if (!((t = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || t === void 0) && t.hydrations)
    return new td((a = (r = e.data) === null || r === void 0 ? void 0 : r.gadgetMeta) === null || a === void 0 ? void 0 : a.hydrations);
}, Hn = (e, n) => {
  const t = rs(e);
  return t && (n = t.apply(n)), new xc(n);
}, Ha = (e, n) => {
  const t = rs(e);
  return t && (n = t.apply(n)), n == null ? void 0 : n.map((r) => new xc(r));
}, Qn = (e, n) => {
  const t = n.edges.map((r) => r.node);
  return Ha(e, t);
}, Oa = (e) => {
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
          n[t] = r === void 0 ? null : Oa(r);
        }
        return n;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const n = {};
        for (const t of Object.keys(e)) {
          const r = Oa(e[t]);
          r !== void 0 && (n[t] = r);
        }
        return n;
      }
    }
  }
}, Si = "gstk", Au = (e) => {
  try {
    const n = window[e];
    return n.setItem(Si, Si), n.removeItem(Si), !0;
  } catch {
    return !1;
  }
}, Pu = Object.prototype.toString, Su = Object.getPrototypeOf, Eu = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, Vn = (e, n, t) => {
  if (e === n)
    return !0;
  if (e == null || n == null)
    return !1;
  if (t.indexOf(e) > -1 && t.indexOf(n) > -1)
    return !0;
  const r = Pu.call(e), a = Pu.call(n);
  let i, o, c;
  if (t.push(e, n), r != a || (i = Eu(e), o = Eu(n), i.length != o.length || i.some(function(y) {
    return !Vn(e[y], n[y], t);
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
      i = e.entries(), o = n.entries();
      do
        if (c = i.next(), !Vn(c.value, o.next().value, t))
          return !1;
      while (!c.done);
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
      for (c = 0; c < e.length; c++)
        if (!(!(c in e) && !(c in n)) && (c in e != c in n || !Vn(e[c], n[c], t)))
          return !1;
      return !0;
    case "Object":
      return Vn(Su(e), Su(n), t);
    default:
      return !1;
  }
}, hr = (e, n) => Vn(e, n, []);
class is extends Error {
}
class cf {
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
    throw wt(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new is("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    wt(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    wt(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class sf {
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
const lf = (e) => {
  const n = [...e.definitions].reverse().find((t) => t.kind == "OperationDefinition");
  if (n)
    return n.name ? n.name.value : n.selectionSet.selections.find((r) => r.kind == "Field").name.value;
}, Tu = Xc({
  onOperation: (e) => {
    var n, t;
    (n = (t = e.context).operationName) !== null && n !== void 0 || (t.operationName = lf(e.query) || "unknown");
  }
}), df = Xc({
  onOperation: (e) => {
    e.context.url && e.context.operationName && !e.context.url.includes("?") && (e.context.url += `?operation=${e.context.operationName}`);
  }
}), ff = 2, pf = 4800, hf = 1e4, yf = [He.ConnectionAcknowledgementTimeout, He.ConnectionInitialisationTimeout], wu = Symbol.for("gadget/connection"), vf = "token", mf = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var Ce;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(Ce || (Ce = {}));
class gf {
  constructor(n) {
    var t, r, a, i, o;
    if (Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
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
      value: Ce.Anonymous
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
      value: async (c, y) => {
        let u, f;
        if (y ? (u = y, f = c) : (u = c, f = {}), this.currentTransaction)
          return await u(this.currentTransaction);
        let l = null, h;
        try {
          l = await this.waitForOpenedConnection({
            isFatalConnectionProblem(s) {
              return console.warn("Transport error encountered during transaction processing", s), !0;
            },
            connectionAckWaitTimeout: pf,
            ...f,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const p = new mu({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              Tu,
              ...this.exchanges.beforeAsync,
              vu({
                forwardSubscription(s) {
                  const v = { ...s, query: s.query || "" };
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
          p[wu] = this, h = new cf(p, l), this.currentTransaction = h, await h.start();
          const d = await u(h);
          return await h.commit(), d;
        } catch (p) {
          try {
            h != null && h.open && await h.rollback();
          } catch (d) {
            d instanceof is || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", d);
          }
          throw _a(p) ? new bu(p) : p;
        } finally {
          await (l == null ? void 0 : l.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (c, y = {}) => {
        var u;
        c = bf(c, (u = this.options.baseRouteURL) !== null && u !== void 0 ? u : this.options.endpoint), this.isGadgetRequest(c) && (y.headers = { ...this.requestHeaders(), ...y.headers }, this.authenticationMode == Ce.Custom && await this.options.authenticationMode.custom.processFetch(c, y));
        const f = await this._fetchImplementation(c, y);
        if (this.authenticationMode == Ce.BrowserSession) {
          const l = f.headers.get("x-set-authorization"), h = l != null && l.startsWith("Session ") ? l.replace("Session ", "") : null;
          h && this.sessionTokenStore.setItem(this.sessionStorageKey, h);
        }
        return f;
      }
    }), !n.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = n.endpoint, n.fetchImplementation ? this._fetchImplementation = n.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...c) => {
      const { fetch: y } = await import("./browser-ponyfill-e69908c2.js").then((u) => u.b);
      return await y(...c);
    }, this.websocketImplementation = (r = (t = n.websocketImplementation) !== null && t !== void 0 ? t : globalThis == null ? void 0 : globalThis.WebSocket) !== null && r !== void 0 ? r : Zd, this.websocketsEndpoint = (a = n.websocketsEndpoint) !== null && a !== void 0 ? a : n.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (i = n.environment) !== null && i !== void 0 ? i : "Development", this.requestPolicy = (o = n.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...n.exchanges
    }, this.setAuthenticationMode(n.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${vf}-${this.endpoint}`;
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
    n && (n.browserSession ? this.enableSessionMode(n.browserSession) : n.internalAuthToken ? this.authenticationMode = Ce.InternalAuthToken : n.apiKey ? this.authenticationMode = Ce.APIKey : n.custom && (this.authenticationMode = Ce.Custom), this.options.authenticationMode = n), (t = this.authenticationMode) !== null && t !== void 0 || (this.authenticationMode = Ce.Anonymous);
  }
  enableSessionMode(n) {
    this.authenticationMode = Ce.BrowserSession;
    const t = !n || typeof n == "boolean" ? $n.Durable : n.storageType;
    let r;
    t == $n.Durable && Au("localStorage") ? r = window.localStorage : t == $n.Session && Au("sessionStorage") ? r = window.sessionStorage : r = new sf(), n !== null && typeof n == "object" && "initialToken" in n && n.initialToken && r.setItem(this.sessionStorageKey, n.initialToken), this.sessionTokenStore = r, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(n) {
    let t;
    if (typeof n == "string" ? t = n : typeof n == "object" && "url" in n ? t = n.url : t = String(n), Aa(this.options.endpoint))
      return !!Aa(t);
    const r = new URL(this.options.endpoint).host;
    return t.includes(r);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const n = [...this.exchanges.beforeAll, Tu, df];
    typeof window < "u" && n.push(Gd), n.push(...this.exchanges.beforeAsync, qd, vu({
      forwardSubscription: (r) => ({
        subscribe: (a) => {
          const i = { ...r, query: r.query || "" };
          return {
            unsubscribe: this.getBaseSubscriptionClient().subscribe(i, a)
          };
        }
      })
    }), ...this.exchanges.afterAll);
    const t = new mu({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: n,
      requestPolicy: this.requestPolicy
    });
    return t[wu] = this, t;
  }
  newSubscriptionClient(n) {
    if (!this.websocketImplementation)
      throw new Error("Can't use this GadgetClient for this subscription-based operation as there's no global WebSocket implementation available. Please pass one as the `websocketImplementation` option to the GadgetClient constructor.");
    let t = this.websocketsEndpoint;
    if (n != null && n.urlParams) {
      const r = new URLSearchParams();
      for (const [a, i] of Object.entries(n.urlParams))
        i && r.set(a, i);
      t += "?" + r.toString();
    }
    return Yd({
      url: t,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var r, a;
        const i = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == Ce.APIKey ? i.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == Ce.InternalAuthToken ? i.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == Ce.BrowserSession ? i.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == Ce.Custom && await ((a = (r = this.options.authenticationMode) === null || r === void 0 ? void 0 : r.custom) === null || a === void 0 ? void 0 : a.processTransactionConnectionParams(i)), i;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (r, a) => {
          var i, o, c, y, u, f;
          if (this.authenticationMode == Ce.BrowserSession && (a != null && a.sessionToken)) {
            const l = (i = this.options.authenticationMode) === null || i === void 0 ? void 0 : i.browserSession;
            (l !== null && typeof l == "object" ? l.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, a.sessionToken);
          }
          (y = (c = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || c === void 0 ? void 0 : c.connected) === null || y === void 0 || y.call(c, r, a), (f = (u = n == null ? void 0 : n.on) === null || u === void 0 ? void 0 : u.connected) === null || f === void 0 || f.call(u, r, a);
        }
      },
      ...this.subscriptionClientOptions,
      ...n
    });
  }
  requestHeaders() {
    var n;
    const t = {};
    if (this.authenticationMode == Ce.InternalAuthToken)
      t.authorization = "Basic " + mf("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == Ce.APIKey)
      t.authorization = `Bearer ${(n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.apiKey}`;
    else if (this.authenticationMode == Ce.BrowserSession) {
      const r = this.sessionTokenStore.getItem(this.sessionStorageKey);
      r && (t.authorization = `Session ${r}`);
    }
    return t["x-gadget-environment"] = this.environment, t;
  }
  async waitForOpenedConnection(n) {
    let t = this.newSubscriptionClient(n), r = [], a = n.connectionAttempts || ff;
    const i = n.connectionGlobalTimeoutMs || hf, o = () => {
      r.forEach((c) => c()), r = [];
    };
    return await new Promise((c, y) => {
      const u = setTimeout(() => {
        this.disposeClient(t), l(new ef("Timeout opening websocket connection to Gadget API"));
      }, i), f = (d) => {
        if (_a(d) && yf.includes(d.code) && a > 0) {
          a -= 1, this.disposeClient(t), t = this.newSubscriptionClient(n), p();
          return;
        }
        clearTimeout(u), y(new bu(d));
      }, l = (d) => {
        clearTimeout(u), y(d);
      }, h = () => {
        clearTimeout(u), c(t);
      }, p = () => {
        o(), r.push(t.on("connected", h)), r.push(t.on("closed", f)), r.push(t.on("error", l));
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
function bf(e, n) {
  if (typeof e != "string")
    return e;
  if (Aa(e))
    try {
      return String(new URL(e, n));
    } catch {
      return e;
    }
  return e;
}
function Aa(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class gn extends Array {
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
    const a = new gn();
    return a.push(...t), a.modelManager = n, a.pagination = r, Object.freeze(a), a;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new ei("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new ba("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const { first: t, last: r, before: a, ...i } = (n = this.pagination.options) !== null && n !== void 0 ? n : {};
    return await this.modelManager.findMany({
      ...i,
      after: this.pagination.pageInfo.endCursor,
      first: t || r
    });
  }
  async previousPage() {
    var n;
    if (!this.hasPreviousPage)
      throw new ba("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: t, last: r, after: a, ...i } = (n = this.pagination.options) !== null && n !== void 0 ? n : {};
    return await this.modelManager.findMany({
      ...i,
      before: this.pagination.pageInfo.startCursor,
      last: r || t
    });
  }
}
const Pa = (e) => Object.entries(e).flatMap(([n, t]) => {
  if (typeof t == "boolean")
    return t ? n : !1;
  if (t instanceof Ka) {
    let r = "";
    const a = Object.entries(t.args).filter(([i, o]) => o != null).map(([i, o]) => {
      var c;
      return `${i}: ${o instanceof Qa ? `$${(c = o.name) !== null && c !== void 0 ? c : i}` : JSON.stringify(o)}`;
    });
    return a.length > 0 && (r = `(${a.join(", ")})`), t.subselection ? [`${n}${r} {`, ...Pa(t.subselection), "}"] : `${n}${r}`;
  } else
    return [`${n} {`, ...Pa(t), "}"];
}).filter((n) => !!n).map((n) => "  " + n), za = (e) => {
  const n = {}, t = (r) => {
    let a = 1;
    if (n[r]) {
      for (; n[`${r}${a}`]; )
        a++;
      return `${r}${a}`;
    }
    return r;
  };
  return Object.entries(e).forEach(([r, a]) => {
    a instanceof Ka ? Object.entries(a.args).forEach(([i, o]) => {
      var c;
      o instanceof Qa && (n[(c = o.name) !== null && c !== void 0 ? c : t(i)] = o);
    }) : typeof a == "object" && a !== null && Object.assign(n, za(a));
  }), n;
}, _f = (e) => {
  const n = za(e.fields);
  return Object.keys(n).length === 0 ? "" : `(${Object.entries(n).map(([r, a]) => `$${r}: ${a.type}`).join(", ")})`;
};
class Ka {
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
class Qa {
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
const En = (e, n) => new Ka(e, n), De = (e) => new Qa(e.type + (e.required ? "!" : ""), e.name, e.value), Of = (e) => {
  var n;
  const t = _f(e), r = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(n = e.name) !== null && n !== void 0 ? n : ""}${t}${r} {
${Pa(e.fields).join(`
`)}
}`;
}, Tn = (e) => {
  const n = za(e.fields);
  return {
    query: Of(e),
    variables: Object.entries(n ?? {}).reduce((t, [r, a]) => (typeof a.value < "u" && (t[r] = a.value), t), {})
  };
}, rr = `
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
`, wn = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, Af = (e) => `
    query InternalFind${_t(e)}($id: GadgetID!, $select: [String!]) {
      ${wn(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, as = (e, n) => ({
  search: n != null && n.search ? De({ value: n == null ? void 0 : n.search, type: "String" }) : void 0,
  sort: n != null && n.sort ? De({ value: n == null ? void 0 : n.sort, type: `[${e}Sort!]` }) : void 0,
  filter: n != null && n.filter ? De({ value: n == null ? void 0 : n.filter, type: `[${e}Filter!]` }) : void 0,
  select: n != null && n.select ? De({ value: os(n == null ? void 0 : n.select), type: "[String!]" }) : void 0
}), Pf = (e, n) => {
  const t = _t(e), r = as(t, n);
  return Tn({
    type: "query",
    name: `InternalFindFirst${t}`,
    fields: {
      internal: {
        [`list${t}`]: En({
          ...r,
          first: De({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, Sf = (e, n) => {
  const t = _t(e), r = as(t, n);
  return Tn({
    type: "query",
    name: `InternalFindMany${t}`,
    fields: {
      internal: {
        [`list${t}`]: En({
          ...r,
          after: De({ value: n == null ? void 0 : n.after, type: "String" }),
          before: De({ value: n == null ? void 0 : n.before, type: "String" }),
          first: De({ value: n == null ? void 0 : n.first, type: "Int" }),
          last: De({ value: n == null ? void 0 : n.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, Ef = (e) => {
  const n = _t(e);
  return `
    ${rr}

    mutation InternalCreate${n}($record: Internal${n}Input) {
      ${wn(e)}
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
}, Tf = (e, n) => {
  const t = _t(e), r = _t(n);
  return `
    ${rr}

    mutation InternalBulkCreate${r}($records: [Internal${t}Input]!) {
      ${wn(e)}
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
}, wf = (e) => {
  const n = _t(e);
  return `
    ${rr}

    mutation InternalUpdate${n}($id: GadgetID!, $record: Internal${n}Input) {
      ${wn(e)}
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
}, If = (e) => {
  const n = _t(e);
  return `
    ${rr}

    mutation InternalDelete${n}($id: GadgetID!) {
      ${wn(e)}
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
}, jf = (e) => {
  const n = _t(e);
  return `
    ${rr}

    mutation InternalDeleteMany${n}(
      $search: String
      $filter: [${n}Filter!]
    ) {
      ${wn(e)}
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
class pt {
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
    }), this.capitalizedApiIdentifier = ti(n);
  }
  validateRecord(n) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(n).every((r) => r === this.apiIdentifier);
  }
  getRecordFromData(n, t) {
    let r = n;
    if (!this.validateRecord(n))
      throw new ei(`Invalid arguments found in variables. Did you mean to use ${t}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const a = await this.connection.currentClient.query(Af(this.apiIdentifier), { id: n, select: os(t == null ? void 0 : t.select) }).toPromise(), o = (r ? wt : Wn)(a, ["internal", this.apiIdentifier]);
    return Hn(a, o);
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
    const t = Sf(this.apiIdentifier, n), r = await this.connection.currentClient.query(t.query, t.variables).toPromise(), a = Wn(r, ["internal", `list${this.capitalizedApiIdentifier}`]), i = Qn(r, a);
    return gn.boot(this, i, { options: n, pageInfo: a.pageInfo });
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
    const r = Pf(this.apiIdentifier, n), a = await this.connection.currentClient.query(r.query, r.variables).toPromise();
    let i;
    t === !1 ? i = Wn(a, ["internal", `list${this.capitalizedApiIdentifier}`]) : i = wt(a, ["internal", `list${this.capitalizedApiIdentifier}`], t);
    const o = Qn(a, i);
    return gn.boot(this, o, { options: n, pageInfo: i.pageInfo })[0];
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
    const t = await this.connection.currentClient.mutation(Ef(this.apiIdentifier), {
      record: this.getRecordFromData(n, "create")
    }).toPromise(), r = $t(t, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return Hn(t, r[this.apiIdentifier]);
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
      throw new ba("Cannot perform bulkCreate without a pluralApiIdentifier");
    const r = _t(this.options.pluralApiIdentifier), a = await this.connection.currentClient.mutation(Tf(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: n
    }).toPromise(), i = $t(a, ["internal", `bulkCreate${r}`]);
    return Ha(a, i[this.options.pluralApiIdentifier]);
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
    _u(n, "Can't update a record without an ID passed");
    const r = await this.connection.currentClient.mutation(wf(this.apiIdentifier), {
      id: n,
      record: this.getRecordFromData(t, "update")
    }).toPromise(), a = $t(r, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return Hn(r, a[this.apiIdentifier]);
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
    _u(n, "Can't delete a record without an ID");
    const t = await this.connection.currentClient.mutation(If(this.apiIdentifier), { id: n }).toPromise();
    $t(t, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const t = await this.connection.currentClient.mutation(jf(this.apiIdentifier), n).toPromise();
    $t(t, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function os(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const n = [];
  for (const [t, r] of Object.entries(e))
    r && n.push(t);
  return n;
}
const Ya = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Ja = (e, n = !1) => {
  const t = { ...e };
  return n && (t.__typename = !0), t;
}, Cf = (e, n, t, r, a) => {
  const i = {};
  return typeof n < "u" && (i.id = De({ type: "GadgetID!", value: n })), Tn({
    type: "query",
    name: e,
    fields: {
      [e]: En(i, Ja((a == null ? void 0 : a.select) || t, !0)),
      ...Ya(r)
    }
  });
}, Mf = (e, n, t, r, a, i) => Xa(e, r, a, {
  select: i == null ? void 0 : i.select,
  first: 2,
  filter: {
    [n]: {
      equals: t
    }
  }
}), Xa = (e, n, t, r) => Tn({
  type: "query",
  name: e,
  fields: {
    [e]: En({
      after: De({ value: r == null ? void 0 : r.after, type: "String" }),
      first: De({ value: r == null ? void 0 : r.first, type: "Int" }),
      before: De({ value: r == null ? void 0 : r.before, type: "String" }),
      last: De({ value: r == null ? void 0 : r.last, type: "Int" }),
      sort: r != null && r.sort ? De({ value: r.sort, type: `[${rf(t)}!]` }) : void 0,
      filter: r != null && r.filter ? De({ value: r.filter, type: `[${af(t)}!]` }) : void 0,
      search: r != null && r.search ? De({ value: r.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Ja((r == null ? void 0 : r.select) || n, !0)
      }
    }),
    ...Ya(t)
  }
}), us = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, cs = (e) => Object.fromEntries(Object.entries(e).map(([n, t]) => [n, De(t)])), Nf = (e, n, t, r, a, i, o, c, y) => {
  const u = (i == null ? void 0 : i.select) || n;
  let f = {
    [e]: En(cs(a), {
      success: !0,
      errors: us,
      [r]: u && !y ? Ja(u, !0) : !1,
      [c ? "results" : "result"]: !!y
    })
  };
  o && (f = {
    [o]: f
  });
  const l = {
    type: "mutation",
    name: e,
    fields: {
      ...f,
      ...Ya(t)
    }
  };
  return Tn(l);
}, Rf = (e, n, t) => {
  let r = {
    [e]: En(cs(n), {
      success: !0,
      errors: us,
      result: !0
    })
  };
  return t && (r = {
    [t]: r
  }), Tn({
    type: "mutation",
    name: e,
    fields: r
  });
}, Oe = async (e, n, t, r, a, i, o = !0) => {
  const c = Cf(n, t, r, a, i), y = await e.connection.currentClient.query(c.query, c.variables).toPromise(), f = (o ? wt : Wn)(y, [n]);
  return Hn(y, f);
}, ni = async (e, n, t, r, a, i, o) => {
  const c = Mf(n, t, r, a, i, o), y = await e.connection.currentClient.query(c.query, c.variables).toPromise(), u = wt(y, [n]), f = Qn(y, u);
  if (f.length > 1)
    throw of(i, t, r);
  return f[0];
}, ie = async (e, n, t, r, a, i) => {
  const o = Xa(n, t, r, a), c = await e.connection.currentClient.query(o.query, o.variables).toPromise();
  let y;
  i === !1 ? y = Wn(c, [n]) : y = wt(c, [n], i);
  const u = Qn(c, y);
  return gn.boot(e, u, { options: a, pageInfo: y.pageInfo });
}, G = async (e, n, t, r, a, i, o, c, y, u) => {
  const f = Nf(n, t, r, a, o, c, y, i, u), l = await e.connection.currentClient.mutation(f.query, f.variables).toPromise(), h = y ? [y, n] : [n];
  if (i) {
    const p = mn(l.data, h), d = p[a] && t ? Ha(l, p[a]) : void 0;
    if (p.errors) {
      const s = p.errors.map((v) => Wa(v));
      throw new nf(s, d);
    }
    return d;
  } else {
    const p = $t(l, h);
    return t == null ? void 0 : u ? p.result : Hn(l, p[a]);
  }
}, Df = async (e, n, t, r) => {
  const a = Rf(n, t, r), i = await e.currentClient.mutation(a.query, a.variables).toPromise();
  return $t(i, r ? [r, n] : [n]).result;
}, Me = {
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
async function kf(e, n) {
  return await G(
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
    null
  );
}
async function Bf(e, n, t) {
  let r;
  const a = [], i = "user";
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
    this,
    "updateUser",
    Me,
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
    null
  );
}
async function Lf(e, n) {
  let t;
  const r = [], a = "user";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    t = e;
  else {
    t = {
      [a]: {}
    };
    for (const [i, o] of Object.entries(e))
      r.includes(i) ? t[i] = o : t[a][i] = o;
  }
  return await G(
    this,
    "createUser",
    Me,
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
    null
  );
}
async function Ff(e, n) {
  let t;
  const r = [], a = "user";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    t = e;
  else {
    t = {
      [a]: {}
    };
    for (const [i, o] of Object.entries(e))
      r.includes(i) ? t[i] = o : t[a][i] = o;
  }
  return await G(
    this,
    "signUpUser",
    Me,
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
    null
  );
}
class Uf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Oe(
        this,
        "user",
        t,
        Me,
        "user",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: Me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const a = await Oe(
          this,
          "user",
          t,
          Me,
          "user",
          r,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: Me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ie(
        this,
        "users",
        Me,
        "user",
        t
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ie(
        this,
        "users",
        Me,
        "user",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ie(
          this,
          "users",
          Me,
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
        defaultSelection: Me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findByEmail = Object.assign(
      async (t, r) => await ni(
        this,
        "users",
        "email",
        t,
        Me,
        "user",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      kf,
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
      async (t, r) => await G(
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
      Bf,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Me,
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
      Lf,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Me,
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
      Ff,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Me,
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
const Ke = {
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
async function Vf(e) {
  return await G(
    this,
    "logOut",
    Ke,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function $f(e, n) {
  const t = e;
  return await G(
    this,
    "logInViaEmail",
    Ke,
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
    "currentSession"
  );
}
class Gf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Oe(
        this,
        "session",
        t,
        Ke,
        "session",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const a = await Oe(
          this,
          "session",
          t,
          Ke,
          "session",
          r,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ie(
        this,
        "sessions",
        Ke,
        "session",
        t
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ie(
        this,
        "sessions",
        Ke,
        "session",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ie(
          this,
          "sessions",
          Ke,
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
        defaultSelection: Ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      Vf,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Ke,
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
      $f,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Ke,
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
const Qe = {
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
async function qf(e, n) {
  return await G(
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
    null
  );
}
async function Wf(e, n) {
  let t;
  const r = [], a = "shopifyProduct";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    t = e;
  else {
    t = {
      [a]: {}
    };
    for (const [i, o] of Object.entries(e))
      r.includes(i) ? t[i] = o : t[a][i] = o;
  }
  return await G(
    this,
    "createShopifyProduct",
    Qe,
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
    null
  );
}
async function Hf(e, n, t) {
  let r;
  const a = [], i = "shopifyProduct";
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
    this,
    "updateShopifyProduct",
    Qe,
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
    null
  );
}
class zf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Oe(
        this,
        "shopifyProduct",
        t,
        Qe,
        "shopifyProduct",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const a = await Oe(
          this,
          "shopifyProduct",
          t,
          Qe,
          "shopifyProduct",
          r,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ie(
        this,
        "shopifyProducts",
        Qe,
        "shopifyProduct",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ie(
        this,
        "shopifyProducts",
        Qe,
        "shopifyProduct",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ie(
          this,
          "shopifyProducts",
          Qe,
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
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      qf,
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
      async (t, r) => await G(
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
      Wf,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: Qe,
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
      Hf,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
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
const Ye = {
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
async function Kf(e, n) {
  return await G(
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
    null
  );
}
async function Qf(e, n) {
  let t;
  const r = [], a = "shopifyProductImage";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    t = e;
  else {
    t = {
      [a]: {}
    };
    for (const [i, o] of Object.entries(e))
      r.includes(i) ? t[i] = o : t[a][i] = o;
  }
  return await G(
    this,
    "createShopifyProductImage",
    Ye,
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
    null
  );
}
async function Yf(e, n, t) {
  let r;
  const a = [], i = "shopifyProductImage";
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
    this,
    "updateShopifyProductImage",
    Ye,
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
    null
  );
}
class Jf {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Oe(
        this,
        "shopifyProductImage",
        t,
        Ye,
        "shopifyProductImage",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const a = await Oe(
          this,
          "shopifyProductImage",
          t,
          Ye,
          "shopifyProductImage",
          r,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ie(
        this,
        "shopifyProductImages",
        Ye,
        "shopifyProductImage",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ie(
        this,
        "shopifyProductImages",
        Ye,
        "shopifyProductImage",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ie(
          this,
          "shopifyProductImages",
          Ye,
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
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Kf,
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
      async (t, r) => await G(
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
      Qf,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: Ye,
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
      Yf,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
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
const Je = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  name: !0,
  position: !0,
  values: !0
};
async function Xf(e, n) {
  return await G(
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
    null
  );
}
async function Zf(e, n) {
  let t;
  const r = [], a = "shopifyProductOption";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    t = e;
  else {
    t = {
      [a]: {}
    };
    for (const [i, o] of Object.entries(e))
      r.includes(i) ? t[i] = o : t[a][i] = o;
  }
  return await G(
    this,
    "createShopifyProductOption",
    Je,
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
    null
  );
}
async function xf(e, n, t) {
  let r;
  const a = [], i = "shopifyProductOption";
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
    this,
    "updateShopifyProductOption",
    Je,
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
    null
  );
}
class ep {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Oe(
        this,
        "shopifyProductOption",
        t,
        Je,
        "shopifyProductOption",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const a = await Oe(
          this,
          "shopifyProductOption",
          t,
          Je,
          "shopifyProductOption",
          r,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ie(
        this,
        "shopifyProductOptions",
        Je,
        "shopifyProductOption",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ie(
        this,
        "shopifyProductOptions",
        Je,
        "shopifyProductOption",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ie(
          this,
          "shopifyProductOptions",
          Je,
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
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Xf,
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
      async (t, r) => await G(
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
      Zf,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: Je,
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
      xf,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
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
const Xe = {
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
async function tp(e, n) {
  return await G(
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
    null
  );
}
async function np(e, n, t) {
  let r;
  const a = [], i = "shopifyProductVariant";
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
    this,
    "updateShopifyProductVariant",
    Xe,
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
    null
  );
}
async function rp(e, n) {
  let t;
  const r = [], a = "shopifyProductVariant";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    t = e;
  else {
    t = {
      [a]: {}
    };
    for (const [i, o] of Object.entries(e))
      r.includes(i) ? t[i] = o : t[a][i] = o;
  }
  return await G(
    this,
    "createShopifyProductVariant",
    Xe,
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
    null
  );
}
class ip {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Oe(
        this,
        "shopifyProductVariant",
        t,
        Xe,
        "shopifyProductVariant",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const a = await Oe(
          this,
          "shopifyProductVariant",
          t,
          Xe,
          "shopifyProductVariant",
          r,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ie(
        this,
        "shopifyProductVariants",
        Xe,
        "shopifyProductVariant",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ie(
        this,
        "shopifyProductVariants",
        Xe,
        "shopifyProductVariant",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ie(
          this,
          "shopifyProductVariants",
          Xe,
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
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      tp,
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
      async (t, r) => await G(
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
      np,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
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
      rp,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: Xe,
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
const Re = {
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
async function ap(e, n) {
  return await G(
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
    null
  );
}
async function op(e, n) {
  let t;
  const r = [], a = "shopifyShop";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    t = e;
  else {
    t = {
      [a]: {}
    };
    for (const [i, o] of Object.entries(e))
      r.includes(i) ? t[i] = o : t[a][i] = o;
  }
  return await G(
    this,
    "createShopifyShop",
    Re,
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
    null
  );
}
async function up(e, n, t) {
  let r;
  const a = [], i = "shopifyShop";
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
    this,
    "updateShopifyShop",
    Re,
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
    null
  );
}
async function cp(e, n, t) {
  let r;
  const a = [], i = "shopifyShop";
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
    this,
    "reinstallShopifyShop",
    Re,
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
    null
  );
}
async function sp(e, n, t) {
  let r;
  const a = [], i = "shopifyShop";
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
    this,
    "uninstallShopifyShop",
    Re,
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
    null
  );
}
class lp {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Oe(
        this,
        "shopifyShop",
        t,
        Re,
        "shopifyShop",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const a = await Oe(
          this,
          "shopifyShop",
          t,
          Re,
          "shopifyShop",
          r,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ie(
        this,
        "shopifyShops",
        Re,
        "shopifyShop",
        t
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ie(
        this,
        "shopifyShops",
        Re,
        "shopifyShop",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ie(
          this,
          "shopifyShops",
          Re,
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
        defaultSelection: Re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      ap,
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
      async (t, r) => await G(
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
      op,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: Re,
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
      up,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
      cp,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
      sp,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
const Ze = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
};
async function dp(e, n) {
  return await G(
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
    null
  );
}
async function fp(e, n, t) {
  let r;
  const a = [], i = "productPairing";
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
    this,
    "updateProductPairing",
    Ze,
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
    null
  );
}
async function pp(e, n) {
  let t;
  const r = [], a = "productPairing";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    t = e;
  else {
    t = {
      [a]: {}
    };
    for (const [i, o] of Object.entries(e))
      r.includes(i) ? t[i] = o : t[a][i] = o;
  }
  return await G(
    this,
    "createProductPairing",
    Ze,
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
    null
  );
}
class hp {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Oe(
        this,
        "productPairing",
        t,
        Ze,
        "productPairing",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (t, r) => {
        const a = await Oe(
          this,
          "productPairing",
          t,
          Ze,
          "productPairing",
          r,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (t) => await ie(
        this,
        "productPairings",
        Ze,
        "productPairing",
        t
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (t) => (await ie(
        this,
        "productPairings",
        Ze,
        "productPairing",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (t) => {
        const r = await ie(
          this,
          "productPairings",
          Ze,
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
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      dp,
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
      async (t, r) => await G(
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
      fp,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
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
      pp,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: Ze,
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
async function yp(e, n) {
  let t;
  const r = [], a = "shopifySync";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    t = e;
  else {
    t = {
      [a]: {}
    };
    for (const [i, o] of Object.entries(e))
      r.includes(i) ? t[i] = o : t[a][i] = o;
  }
  return await G(
    this,
    "runShopifySync",
    Ne,
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
    null
  );
}
async function vp(e, n, t) {
  let r;
  const a = [], i = "shopifySync";
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
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
        value: r.shopifySync,
        required: !1,
        type: "ErrorShopifySyncInput"
      }
    },
    t,
    null
  );
}
async function mp(e, n, t) {
  let r;
  const a = [], i = "shopifySync";
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
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
        value: r.shopifySync,
        required: !1,
        type: "CompleteShopifySyncInput"
      }
    },
    t,
    null
  );
}
class gp {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Oe(
        this,
        "shopifySync",
        t,
        Ne,
        "shopifySync",
        r
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
      async (t, r) => {
        const a = await Oe(
          this,
          "shopifySync",
          t,
          Ne,
          "shopifySync",
          r,
          !1
        );
        return a.isEmpty() ? null : a;
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
      async (t) => await ie(
        this,
        "shopifySyncs",
        Ne,
        "shopifySync",
        t
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
      async (t) => (await ie(
        this,
        "shopifySyncs",
        Ne,
        "shopifySync",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (t) => {
        const r = await ie(
          this,
          "shopifySyncs",
          Ne,
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
        defaultSelection: Ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (t, r) => await ni(
        this,
        "shopifySyncs",
        "id",
        t,
        Ne,
        "shopifySync",
        r
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
      yp,
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
      vp,
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
      mp,
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
async function bp(e, n, t) {
  let r;
  const a = [], i = "ambiguous";
  if (Object.keys(n).some((o) => !a.includes(o) && o !== i))
    throw Error(`Invalid arguments found in variables. Did you mean to use update({ ${i}: { ... } })?`);
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
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
        value: r.ambiguous,
        required: !1,
        type: "UpdateAmbiguousInput"
      }
    },
    t,
    null
  );
}
async function _p(e, n) {
  return await G(
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
    null
  );
}
async function Op(e, n) {
  let t;
  const r = [], a = "ambiguous";
  if (Object.keys(e).some((i) => !r.includes(i) && i !== a))
    throw Error(`Invalid arguments found in variables. Did you mean to use create({ ${a}: { ... } })?`);
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    t = e;
  else {
    t = {
      [a]: {}
    };
    for (const [i, o] of Object.entries(e))
      r.includes(i) ? t[i] = o : t[a][i] = o;
  }
  return await G(
    this,
    "createAmbiguous",
    Ue,
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
    null
  );
}
class Ap {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Oe(
        this,
        "ambiguous",
        t,
        Ue,
        "ambiguous",
        r
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
      async (t, r) => {
        const a = await Oe(
          this,
          "ambiguous",
          t,
          Ue,
          "ambiguous",
          r,
          !1
        );
        return a.isEmpty() ? null : a;
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
      async (t) => await ie(
        this,
        "ambiguouss",
        Ue,
        "ambiguous",
        t
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
      async (t) => (await ie(
        this,
        "ambiguouss",
        Ue,
        "ambiguous",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (t) => {
        const r = await ie(
          this,
          "ambiguouss",
          Ue,
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
        defaultSelection: Ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (t, r) => await ni(
        this,
        "ambiguouss",
        "id",
        t,
        Ue,
        "ambiguous",
        r
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
      bp,
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
      _p,
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
      async (t, r) => await G(
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
      Op,
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
async function Pp(e, n, t) {
  let r;
  const a = [], i = "unambiguous";
  if (i in n && typeof n[i] == "object" && n[i] !== null)
    r = n;
  else {
    r = {
      [i]: {}
    };
    for (const [o, c] of Object.entries(n))
      a.includes(o) ? r[o] = c : r[i][o] = c;
  }
  return await G(
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
        value: r.unambiguous,
        required: !1,
        type: "UpdateUnambiguousInput"
      }
    },
    t,
    null
  );
}
async function Sp(e, n) {
  let t;
  const r = [], a = "unambiguous";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    t = e;
  else {
    t = {
      [a]: {}
    };
    for (const [i, o] of Object.entries(e))
      r.includes(i) ? t[i] = o : t[a][i] = o;
  }
  return await G(
    this,
    "createUnambiguous",
    Ve,
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
    null
  );
}
async function Ep(e, n) {
  return await G(
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
    null
  );
}
class Tp {
  constructor(n) {
    this.connection = n, this.findOne = Object.assign(
      async (t, r) => await Oe(
        this,
        "unambiguous",
        t,
        Ve,
        "unambiguous",
        r
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
      async (t, r) => {
        const a = await Oe(
          this,
          "unambiguous",
          t,
          Ve,
          "unambiguous",
          r,
          !1
        );
        return a.isEmpty() ? null : a;
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
      async (t) => await ie(
        this,
        "unambiguouss",
        Ve,
        "unambiguous",
        t
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
      async (t) => (await ie(
        this,
        "unambiguouss",
        Ve,
        "unambiguous",
        { ...t, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (t) => {
        const r = await ie(
          this,
          "unambiguouss",
          Ve,
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
        defaultSelection: Ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (t, r) => await ni(
        this,
        "unambiguouss",
        "id",
        t,
        Ve,
        "unambiguous",
        r
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
      Pp,
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
      Sp,
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
      Ep,
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
      async (t, r) => await G(
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
const dn = {
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
async function wp(e) {
  return await G(
    this,
    "logOut",
    dn,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function Ip(e, n) {
  const t = e;
  return await G(
    this,
    "logInViaEmail",
    dn,
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
    "currentSession"
  );
}
class jp {
  constructor(n) {
    this.connection = n, this.get = Object.assign(
      async (t) => await Oe(
        this,
        "currentSession",
        void 0,
        dn,
        "session",
        t
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: dn,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      wp,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: dn,
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
      Ip,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: dn,
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
const Ei = "production", Ti = "development", Cp = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
let Mp = class {
  constructor(n) {
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async () => await Df(
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
    ), this.transaction = async (a) => await this.connection.transaction(a), this.getDirectUploadToken = async () => (await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
      requestPolicy: "network-only"
    })).gadgetMeta.directUploadToken;
    const t = (n == null ? void 0 : n.environment) ?? Cp() ?? Ti;
    let r = t.toLocaleLowerCase();
    r != Ti && r != Ei && (console.warn("Invalid environment", t, "defaulting to development"), r = Ti), this.connection = new gf({
      endpoint: new URL("api/graphql", r == Ei ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (n == null ? void 0 : n.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...n,
      environment: r == Ei ? "Production" : "Development"
    }), this.user = new Uf(this.connection), this.session = new Gf(this.connection), this.shopifyProduct = new zf(this.connection), this.shopifyProductImage = new Jf(this.connection), this.shopifyProductOption = new ep(this.connection), this.shopifyProductVariant = new ip(this.connection), this.shopifyShop = new lp(this.connection), this.productPairing = new hp(this.connection), this.shopifySync = new gp(this.connection), this.ambiguous = new Ap(this.connection), this.unambiguous = new Tp(this.connection), this.currentSession = new jp(this.connection), this.internal = {
      user: new pt("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new pt("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new pt("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new pt("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new pt("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new pt("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new pt("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new pt("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new pt("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new pt("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new pt("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(n, t, r) {
    const { data: a, error: i } = await this.connection.currentClient.query(n, t, r).toPromise();
    if (i)
      throw i;
    return a;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(n, t) {
    const { data: r, error: a } = await this.connection.currentClient.mutation(n, t).toPromise();
    if (a)
      throw a;
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
var Np = {
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
let Rp = class extends Error {
  constructor(n, t, r, a, i, o, c) {
    super(n), this.name = "GraphQLError", this.message = n, i && (this.path = i), t && (this.nodes = Array.isArray(t) ? t : [t]), r && (this.source = r), a && (this.positions = a), o && (this.originalError = o);
    var y = c;
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
var me, Y;
function Ie(e) {
  return new Rp(`Syntax Error: Unexpected token at ${Y} in ${e}`);
}
function nt(e) {
  if (e.lastIndex = Y, e.test(me))
    return me.slice(Y, Y = e.lastIndex);
}
var yr = / +(?=[^\s])/y;
function Dp(e) {
  for (var n = e.split(`
`), t = "", r = 0, a = 0, i = n.length - 1, o = 0; o < n.length; o++)
    yr.lastIndex = 0, yr.test(n[o]) && (o && (!r || yr.lastIndex < r) && (r = yr.lastIndex), a = a || o, i = o);
  for (var c = a; c <= i; c++)
    c !== a && (t += `
`), t += n[c].slice(r).replace(/\\"""/g, '"""');
  return t;
}
function Z() {
  for (var e = 0 | me.charCodeAt(Y++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | me.charCodeAt(Y++))
    if (e === 35)
      for (; (e = me.charCodeAt(Y++)) !== 10 && e !== 13; )
        ;
  Y--;
}
var ss = /[_A-Za-z]\w*/y;
function Ot() {
  var e;
  if (e = nt(ss))
    return {
      kind: "Name",
      value: e
    };
}
var kp = /(?:null|true|false)/y, ls = /\$[_A-Za-z]\w*/y, Bp = /-?\d+/y, Lp = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Fp = /\\/g, Up = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Vp = /"(?:"|[^\r\n]*?[^\\]")/y;
function Lr(e) {
  var n, t;
  if (t = nt(kp))
    n = t === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: t === "true"
    };
  else if (!e && (t = nt(ls)))
    n = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: t.slice(1)
      }
    };
  else if (t = nt(Bp)) {
    var r = t;
    (t = nt(Lp)) ? n = {
      kind: "FloatValue",
      value: r + t
    } : n = {
      kind: "IntValue",
      value: r
    };
  } else if (t = nt(ss))
    n = {
      kind: "EnumValue",
      value: t
    };
  else if (t = nt(Up))
    n = {
      kind: "StringValue",
      value: Dp(t.slice(3, -3)),
      block: !0
    };
  else if (t = nt(Vp))
    n = {
      kind: "StringValue",
      value: Fp.test(t) ? JSON.parse(t) : t.slice(1, -1),
      block: !1
    };
  else if (n = function(i) {
    var o;
    if (me.charCodeAt(Y) === 91) {
      Y++, Z();
      for (var c = []; o = Lr(i); )
        c.push(o);
      if (me.charCodeAt(Y++) !== 93)
        throw Ie("ListValue");
      return Z(), {
        kind: "ListValue",
        values: c
      };
    }
  }(e) || function(i) {
    if (me.charCodeAt(Y) === 123) {
      Y++, Z();
      for (var o = [], c; c = Ot(); ) {
        if (Z(), me.charCodeAt(Y++) !== 58)
          throw Ie("ObjectField");
        Z();
        var y = Lr(i);
        if (!y)
          throw Ie("ObjectField");
        o.push({
          kind: "ObjectField",
          name: c,
          value: y
        });
      }
      if (me.charCodeAt(Y++) !== 125)
        throw Ie("ObjectValue");
      return Z(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return n;
  return Z(), n;
}
function ds(e) {
  var n = [];
  if (Z(), me.charCodeAt(Y) === 40) {
    Y++, Z();
    for (var t; t = Ot(); ) {
      if (Z(), me.charCodeAt(Y++) !== 58)
        throw Ie("Argument");
      Z();
      var r = Lr(e);
      if (!r)
        throw Ie("Argument");
      n.push({
        kind: "Argument",
        name: t,
        value: r
      });
    }
    if (!n.length || me.charCodeAt(Y++) !== 41)
      throw Ie("Argument");
    Z();
  }
  return n;
}
function bn(e) {
  var n = [];
  for (Z(); me.charCodeAt(Y) === 64; ) {
    Y++;
    var t = Ot();
    if (!t)
      throw Ie("Directive");
    Z(), n.push({
      kind: "Directive",
      name: t,
      arguments: ds(e)
    });
  }
  return n;
}
function $p() {
  var e = Ot();
  if (e) {
    Z();
    var n;
    if (me.charCodeAt(Y) === 58) {
      if (Y++, Z(), n = e, !(e = Ot()))
        throw Ie("Field");
      Z();
    }
    return {
      kind: "Field",
      alias: n,
      name: e,
      arguments: ds(!1),
      directives: bn(!1),
      selectionSet: ri()
    };
  }
}
function fs() {
  var e;
  if (Z(), me.charCodeAt(Y) === 91) {
    Y++, Z();
    var n = fs();
    if (!n || me.charCodeAt(Y++) !== 93)
      throw Ie("ListType");
    e = {
      kind: "ListType",
      type: n
    };
  } else if (e = Ot())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw Ie("NamedType");
  return Z(), me.charCodeAt(Y) === 33 ? (Y++, Z(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Gp = /on/y;
function ps() {
  if (nt(Gp)) {
    Z();
    var e = Ot();
    if (!e)
      throw Ie("NamedType");
    return Z(), {
      kind: "NamedType",
      name: e
    };
  }
}
var qp = /\.\.\./y;
function Wp() {
  if (nt(qp)) {
    Z();
    var e = Y, n;
    if ((n = Ot()) && n.value !== "on")
      return {
        kind: "FragmentSpread",
        name: n,
        directives: bn(!1)
      };
    Y = e;
    var t = ps(), r = bn(!1), a = ri();
    if (!a)
      throw Ie("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: t,
      directives: r,
      selectionSet: a
    };
  }
}
function ri() {
  var e;
  if (Z(), me.charCodeAt(Y) === 123) {
    Y++, Z();
    for (var n = []; e = Wp() || $p(); )
      n.push(e);
    if (!n.length || me.charCodeAt(Y++) !== 125)
      throw Ie("SelectionSet");
    return Z(), {
      kind: "SelectionSet",
      selections: n
    };
  }
}
var Hp = /fragment/y;
function zp() {
  if (nt(Hp)) {
    Z();
    var e = Ot();
    if (!e)
      throw Ie("FragmentDefinition");
    Z();
    var n = ps();
    if (!n)
      throw Ie("FragmentDefinition");
    var t = bn(!1), r = ri();
    if (!r)
      throw Ie("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: n,
      directives: t,
      selectionSet: r
    };
  }
}
var Kp = /(?:query|mutation|subscription)/y;
function Qp() {
  var e, n, t = [], r = [];
  (e = nt(Kp)) && (Z(), n = Ot(), t = function() {
    var o, c = [];
    if (Z(), me.charCodeAt(Y) === 40) {
      for (Y++, Z(); o = nt(ls); ) {
        if (Z(), me.charCodeAt(Y++) !== 58)
          throw Ie("VariableDefinition");
        var y = fs(), u = void 0;
        if (me.charCodeAt(Y) === 61 && (Y++, Z(), !(u = Lr(!0))))
          throw Ie("VariableDefinition");
        Z(), c.push({
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
          directives: bn(!0)
        });
      }
      if (me.charCodeAt(Y++) !== 41)
        throw Ie("VariableDefinition");
      Z();
    }
    return c;
  }(), r = bn(!1));
  var a = ri();
  if (a)
    return {
      kind: "OperationDefinition",
      operation: e || "query",
      name: n,
      variableDefinitions: t,
      directives: r,
      selectionSet: a
    };
}
function Yp(e, n) {
  return me = typeof e.body == "string" ? e.body : e, Y = 0, function() {
    var r;
    Z();
    for (var a = []; r = zp() || Qp(); )
      a.push(r);
    return {
      kind: "Document",
      definitions: a
    };
  }();
}
function Jp(e) {
  return JSON.stringify(e);
}
function Xp(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var ct = (e) => !(!e || !e.length), $e = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !ct(e.variableDefinitions) && !ct(e.directives))
      return $e.SelectionSet(e.selectionSet);
    var n = e.operation;
    return e.name && (n += " " + e.name.value), ct(e.variableDefinitions) && (e.name || (n += " "), n += "(" + e.variableDefinitions.map($e.VariableDefinition).join(", ") + ")"), ct(e.directives) && (n += " " + e.directives.map($e.Directive).join(" ")), n + " " + $e.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var n = $e.Variable(e.variable) + ": " + lt(e.type);
    return e.defaultValue && (n += " = " + lt(e.defaultValue)), ct(e.directives) && (n += " " + e.directives.map($e.Directive).join(" ")), n;
  },
  Field(e) {
    var n = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (ct(e.arguments)) {
      var t = e.arguments.map($e.Argument), r = n + "(" + t.join(", ") + ")";
      n = r.length > 80 ? n + `(
  ` + t.join(`
`).replace(/\n/g, `
  `) + `
)` : r;
    }
    return ct(e.directives) && (n += " " + e.directives.map($e.Directive).join(" ")), e.selectionSet ? n + " " + $e.SelectionSet(e.selectionSet) : n;
  },
  StringValue: (e) => e.block ? Xp(e.value) : Jp(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(lt).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map($e.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + lt(e.value),
  Document: (e) => ct(e.definitions) ? e.definitions.map(lt).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(lt).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + lt(e.value),
  FragmentSpread(e) {
    var n = "..." + e.name.value;
    return ct(e.directives) && (n += " " + e.directives.map($e.Directive).join(" ")), n;
  },
  InlineFragment(e) {
    var n = "...";
    return e.typeCondition && (n += " on " + e.typeCondition.name.value), ct(e.directives) && (n += " " + e.directives.map($e.Directive).join(" ")), n + " " + lt(e.selectionSet);
  },
  FragmentDefinition(e) {
    var n = "fragment " + e.name.value;
    return n += " on " + e.typeCondition.name.value, ct(e.directives) && (n += " " + e.directives.map($e.Directive).join(" ")), n + " " + lt(e.selectionSet);
  },
  Directive(e) {
    var n = "@" + e.name.value;
    return ct(e.arguments) && (n += "(" + e.arguments.map($e.Argument).join(", ") + ")"), n;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + lt(e.type) + "]",
  NonNullType: (e) => lt(e.type) + "!"
};
function lt(e) {
  return $e[e.kind] ? $e[e.kind](e) : "";
}
var Sa = (e, n) => {
  for (var t = 0 | (n || 5381), r = 0, a = 0 | e.length; r < a; r++)
    t = (t << 5) + t + e.charCodeAt(r);
  return t;
}, wr = /* @__PURE__ */ new Set(), Iu = /* @__PURE__ */ new WeakMap(), cn = (e) => {
  if (e === null || wr.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return cn(e.toJSON());
  if (Array.isArray(e)) {
    var n = "[";
    for (var t of e)
      n.length > 1 && (n += ","), n += cn(t) || "null";
    return n += "]";
  } else if (ju !== Fr && e instanceof ju || Cu !== Fr && e instanceof Cu)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var a = Iu.get(e) || Math.random().toString(36).slice(2);
    return Iu.set(e, a), cn({
      __key: a
    });
  }
  wr.add(e);
  var i = "{";
  for (var o of r) {
    var c = cn(e[o]);
    c && (i.length > 1 && (i += ","), i += cn(o) + ":" + c);
  }
  return wr.delete(e), i += "}";
}, Zp = (e) => (wr.clear(), cn(e));
class Fr {
}
var ju = typeof File < "u" ? File : Fr, Cu = typeof Blob < "u" ? Blob : Fr, xp = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, eh = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, th = (e, n) => n % 2 == 0 ? e.replace(eh, `
`) : e, Mu = (e) => e.split(xp).map(th).join("").trim(), Nu = /* @__PURE__ */ new Map(), Ir = /* @__PURE__ */ new Map(), hs = (e) => {
  var n;
  return typeof e == "string" ? n = Mu(e) : e.loc && Ir.get(e.__key) === e ? n = e.loc.source.body : (n = Nu.get(e) || Mu(lt(e)), Nu.set(e, n)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Ru = (e) => {
  var n = Sa(hs(e));
  if (e.definitions) {
    var t = ih(e);
    t && (n = Sa(`
# ${t}`, n));
  }
  return n;
}, nh = (e) => {
  var n, t;
  return typeof e == "string" ? (n = Ru(e), t = Ir.get(n) || Yp(e)) : (n = e.__key || Ru(e), t = Ir.get(n) || e), t.loc || hs(t), t.__key = n, Ir.set(n, t), t;
}, rh = (e, n, t) => {
  var r = n || {}, a = nh(e), i = Zp(r), o = a.__key;
  return i !== "{}" && (o = Sa(i, o)), {
    key: o,
    query: a,
    variables: r,
    extensions: t
  };
}, ih = (e) => {
  for (var n of e.definitions)
    if (n.kind === Np.OPERATION_DEFINITION)
      return n.name ? n.name.value : void 0;
};
typeof TextDecoder < "u" && new TextDecoder();
var ys = {}, ii = gt.createContext(ys), ah = ii.Provider;
ii.Consumer;
ii.displayName = "UrqlContext";
var oh = () => {
  var e = gt.useContext(ii);
  if (e === ys && process.env.NODE_ENV !== "production") {
    var n = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(n), new Error(n);
  }
  return e;
}, uh = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, ch = (e, n) => e === n || !(!e || !n || e.key !== n.key), wi = (e, n) => {
  var t = {
    ...e,
    ...n,
    data: n.data !== void 0 || n.error ? n.data : e.data,
    fetching: !!n.fetching,
    stale: !!n.stale
  };
  return ((r, a) => {
    for (var i in r)
      if (!(i in a))
        return !0;
    for (var o in a)
      if (o === "operation" ? !ch(r[o], a[o]) : r[o] !== a[o])
        return !0;
    return !1;
  })(e, t) ? t : e;
}, sh = (e, n) => {
  for (var t = 0, r = n.length; t < r; t++)
    if (e[t] !== n[t])
      return !0;
  return !1;
}, Ii = gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Du(e, n) {
  process.env.NODE_ENV !== "production" && Ii && Ii.ReactCurrentOwner && Ii.ReactCurrentOwner.current ? Promise.resolve(n).then(e) : e(n);
}
function lh(e, n) {
  var t = gt.useRef(void 0);
  return gt.useMemo(() => {
    var r = rh(e, n);
    return t.current !== void 0 && t.current.key === r.key ? t.current : (t.current = r, r);
  }, [e, n]);
}
var dh = (e) => {
  if (!e._react) {
    var n = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Map();
    e.operations$ && Wt((r) => {
      r.kind === "teardown" && n.has(r.key) && (n.delete(r.key), t.delete(r.key));
    })(e.operations$), e._react = {
      get: (r) => t.get(r),
      set(r, a) {
        n.delete(r), t.set(r, a);
      },
      dispose(r) {
        n.add(r);
      }
    };
  }
  return e._react;
}, fh = (e, n) => e.suspense && (!n || n.suspense !== !1);
function ph(e) {
  var n = oh(), t = dh(n), r = fh(n, e.context), a = lh(e.query, e.variables), i = gt.useMemo(() => {
    if (e.pause)
      return null;
    var h = n.executeQuery(a, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return r ? hn((p) => {
      t.set(a.key, p);
    })(h) : h;
  }, [t, n, a, r, e.pause, e.requestPolicy, e.context]), o = gt.useCallback((h, p) => {
    if (!h)
      return {
        fetching: !1
      };
    var d = t.get(a.key);
    if (d) {
      if (p && d != null && "then" in d)
        throw d;
    } else {
      var s, v = Wt((g) => {
        d = g, s && s(d);
      })(Hc(() => p && !s || !d)(h));
      if (d == null && p) {
        var m = new Promise((g) => {
          s = g;
        });
        throw t.set(a.key, m), m;
      } else
        v.unsubscribe();
    }
    return d || {
      fetching: !0
    };
  }, [t, a]), c = [n, a, e.requestPolicy, e.context, e.pause], [y, u] = gt.useState(() => [i, wi(uh, o(i, r)), c]), f = y[1];
  i !== y[0] && sh(y[2], c) && u([i, f = wi(y[1], o(i, r)), c]), gt.useEffect(() => {
    var h = y[0], p = y[2][1], d = !1, s = (m) => {
      d = !0, Du(u, (g) => {
        var O = wi(g[1], m);
        return g[1] !== O ? [g[0], O, g[2]] : g;
      });
    };
    if (h) {
      var v = Wt(s)(Va(() => {
        s({
          fetching: !1
        });
      })(h));
      return d || s({
        fetching: !0
      }), () => {
        t.dispose(p.key), v.unsubscribe();
      };
    } else
      s({
        fetching: !1
      });
  }, [t, y[0], y[2][1]]);
  var l = gt.useCallback((h) => {
    var p = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...h
    };
    Du(u, (d) => [r ? hn((s) => {
      t.set(a.key, s);
    })(n.executeQuery(a, p)) : n.executeQuery(a, p), d[1], c]);
  }, [n, t, a, r, o, e.requestPolicy, e.context]);
  return [f, l];
}
const vs = re.createContext(void 0), hh = re.createContext(void 0), yh = "/", vh = "signOut";
function mh(e) {
  let n, t;
  if ("api" in e) {
    if (!xl(e.api))
      throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    n = e.api, t = e.api.connection.currentClient;
  } else if (e.value)
    t = e.value;
  else
    throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
  t.suspense = !0;
  let r = yh, a = vh;
  if ("auth" in e) {
    const { auth: i } = e;
    i != null && i.signInPath && (r = i.signInPath), i != null && i.signOutActionApiIdentifier && (a = i.signOutActionApiIdentifier);
  }
  return re.createElement(
    vs.Provider,
    { value: t },
    re.createElement(
      hh.Provider,
      { value: {
        api: n,
        auth: {
          signInPath: r,
          signOutActionApiIdentifier: a
        }
      } },
      re.createElement(ah, { value: t }, e.children)
    )
  );
}
function gh(e) {
  return typeof e == "object" && e !== null;
}
function bh(e, n) {
  if (!!!e)
    throw new Error(
      n ?? "Unexpected invariant triggered."
    );
}
const _h = /\r\n|[\n\r]/g;
function Ea(e, n) {
  let t = 0, r = 1;
  for (const a of e.body.matchAll(_h)) {
    if (typeof a.index == "number" || bh(!1), a.index >= n)
      break;
    t = a.index + a[0].length, r += 1;
  }
  return {
    line: r,
    column: n + 1 - t
  };
}
function Oh(e) {
  return ms(
    e.source,
    Ea(e.source, e.start)
  );
}
function ms(e, n) {
  const t = e.locationOffset.column - 1, r = "".padStart(t) + e.body, a = n.line - 1, i = e.locationOffset.line - 1, o = n.line + i, c = n.line === 1 ? t : 0, y = n.column + c, u = `${e.name}:${o}:${y}
`, f = r.split(/\r\n|[\n\r]/g), l = f[a];
  if (l.length > 120) {
    const h = Math.floor(y / 80), p = y % 80, d = [];
    for (let s = 0; s < l.length; s += 80)
      d.push(l.slice(s, s + 80));
    return u + ku([
      [`${o} |`, d[0]],
      ...d.slice(1, h + 1).map((s) => ["|", s]),
      ["|", "^".padStart(p)],
      ["|", d[h + 1]]
    ]);
  }
  return u + ku([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, f[a - 1]],
    [`${o} |`, l],
    ["|", "^".padStart(y)],
    [`${o + 1} |`, f[a + 1]]
  ]);
}
function ku(e) {
  const n = e.filter(([r, a]) => a !== void 0), t = Math.max(...n.map(([r]) => r.length));
  return n.map(([r, a]) => r.padStart(t) + (a ? " " + a : "")).join(`
`);
}
function Ah(e) {
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
class Ur extends Error {
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
    var r, a, i;
    const { nodes: o, source: c, positions: y, path: u, originalError: f, extensions: l } = Ah(t);
    super(n), this.name = "GraphQLError", this.path = u ?? void 0, this.originalError = f ?? void 0, this.nodes = Bu(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const h = Bu(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((d) => d.loc).filter((d) => d != null)
    );
    this.source = c ?? (h == null || (a = h[0]) === null || a === void 0 ? void 0 : a.source), this.positions = y ?? (h == null ? void 0 : h.map((d) => d.start)), this.locations = y && c ? y.map((d) => Ea(c, d)) : h == null ? void 0 : h.map((d) => Ea(d.source, d.start));
    const p = gh(
      f == null ? void 0 : f.extensions
    ) ? f == null ? void 0 : f.extensions : void 0;
    this.extensions = (i = l ?? p) !== null && i !== void 0 ? i : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Ur) : Object.defineProperty(this, "stack", {
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

` + Oh(t.loc));
    else if (this.source && this.locations)
      for (const t of this.locations)
        n += `

` + ms(this.source, t);
    return n;
  }
  toJSON() {
    const n = {
      message: this.message
    };
    return this.locations != null && (n.locations = this.locations), this.path != null && (n.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (n.extensions = this.extensions), n;
  }
}
function Bu(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const Ph = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Sh = (e, n) => {
  let t = "";
  return e !== void 0 ? t = `[Network] ${e.message}` : n !== void 0 ? n.forEach((r) => {
    t += `[GraphQL] ${r.message}
`;
  }) : t = "Unknown error", t.trim();
}, Eh = (e) => typeof e == "string" ? new Ur(e) : e != null && e.message && !e.code ? new Ur(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class Gt extends Error {
  /** @private */
  static forClientSideError(n, t) {
    return new Gt({
      executionErrors: [n],
      response: t
    });
  }
  /** @private */
  static forErrorsResponse(n, t) {
    return new Gt({
      executionErrors: n.map(Wa),
      response: t
    });
  }
  /** @private */
  static forMaybeCombinedError(n) {
    if (n)
      return new Gt({
        networkError: n.networkError,
        executionErrors: n.graphQLErrors,
        response: n.response
      });
  }
  /** @private */
  static errorIfDataAbsent(n, t) {
    const r = uf(n, t);
    let a = Gt.forMaybeCombinedError(n.error);
    return !a && r && (a = Gt.forClientSideError(r)), a;
  }
  constructor({ networkError: n, executionErrors: t, response: r }) {
    const a = (t || []).map(Eh), i = Sh(n, a);
    super(i), Object.defineProperty(this, "message", {
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
    }), this.message = i, this.executionErrors = a, this.graphQLErrors = a, this.networkError = n, this.response = r;
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
const Th = (e) => {
  const { context: n, suspense: t, ...r } = e ?? {}, a = Mr(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...r,
    context: a
  };
}, wh = (e, n) => ({
  query: e.query,
  variables: e.variables,
  ...n
}), gs = (e) => {
  if (!Bc(vs))
    throw new Error(Ph);
  const n = Th(e);
  return ph(n);
};
var Ih = typeof Element < "u", jh = typeof Map == "function", Ch = typeof Set == "function", Mh = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function jr(e, n) {
  if (e === n)
    return !0;
  if (e && n && typeof e == "object" && typeof n == "object") {
    if (e.constructor !== n.constructor)
      return !1;
    var t, r, a;
    if (Array.isArray(e)) {
      if (t = e.length, t != n.length)
        return !1;
      for (r = t; r-- !== 0; )
        if (!jr(e[r], n[r]))
          return !1;
      return !0;
    }
    var i;
    if (jh && e instanceof Map && n instanceof Map) {
      if (e.size !== n.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!n.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!jr(r.value[1], n.get(r.value[0])))
          return !1;
      return !0;
    }
    if (Ch && e instanceof Set && n instanceof Set) {
      if (e.size !== n.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!n.has(r.value[0]))
          return !1;
      return !0;
    }
    if (Mh && ArrayBuffer.isView(e) && ArrayBuffer.isView(n)) {
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
    if (a = Object.keys(e), t = a.length, t !== Object.keys(n).length)
      return !1;
    for (r = t; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, a[r]))
        return !1;
    if (Ih && e instanceof Element)
      return !1;
    for (r = t; r-- !== 0; )
      if (!((a[r] === "_owner" || a[r] === "__v" || a[r] === "__o") && e.$$typeof) && !jr(e[a[r]], n[a[r]]))
        return !1;
    return !0;
  }
  return e !== e && n !== n;
}
var Nh = function(n, t) {
  try {
    return jr(n, t);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Rh = /* @__PURE__ */ Fc(Nh), Dh = (e) => {
  const n = Ql();
  return e ? (n.current === void 0 || !Rh(e, n.current)) && (n.current = e) : n.current = void 0, n.current;
}, kh = (e, n) => {
  const t = Dh(n), r = Mr(() => Xa(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, t), [e, t]), [a, i] = gs(wh(r, n));
  return [Mr(() => {
    const c = [e.findMany.operationName];
    let y = a.data;
    if (y) {
      const f = mn(a.data, c);
      if (f) {
        const l = Qn(a, f);
        y = gn.boot(e, l, f);
      }
    }
    const u = Gt.errorIfDataAbsent(a, c);
    return { ...a, data: y, error: u };
  }, [e, a]), i];
};
var bs = {}, vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
var _s = vt.AppBridgeContext = void 0, Bh = re;
_s = vt.AppBridgeContext = Bh.createContext(null);
var ke = {};
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.useAppBridge = void 0;
var Lh = re, Fh = vt;
function Uh() {
  var e = Lh.useContext(Fh.AppBridgeContext);
  if (!e)
    throw new Error("No AppBridge context provided. Your component must be wrapped in the <Provider> component from App Bridge React.");
  return e;
}
ke.useAppBridge = Uh;
var Os = {}, Za = {}, xa = {}, At = {}, eo = {}, Ta = {}, ae = {}, to = {};
Object.defineProperty(to, "__esModule", { value: !0 });
function As(e, n) {
  if (n == null || typeof e > "u" || !Object.prototype.isPrototypeOf.call(Object.getPrototypeOf(e), n) || n.constructor.name !== "Object" && n.constructor.name !== "Array")
    return n;
  var t = {};
  return Object.keys(n).forEach(function(r) {
    var a = Object.prototype.hasOwnProperty.call(e, r);
    a && typeof e[r] == "object" && !Array.isArray(e[r]) ? t[r] = As(e[r], n[r]) : t[r] = n[r];
  }), Object.keys(e).forEach(function(r) {
    var a = Object.prototype.hasOwnProperty.call(n, r);
    a || (t[r] = e[r]);
  }), Object.setPrototypeOf(t, Object.getPrototypeOf(e)), t;
}
to.default = As;
var Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
Ht.SEPARATOR = Ht.PREFIX = void 0;
Ht.PREFIX = "APP";
Ht.SEPARATOR = "::";
var ue = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ComponentType = e.Group = void 0, function(n) {
    n.AuthCode = "AuthCode", n.Button = "Button", n.ButtonGroup = "ButtonGroup", n.Cart = "Cart", n.Client = "Client", n.ContextualSaveBar = "ContextualSaveBar", n.Error = "Error", n.Features = "Features", n.FeedbackModal = "FeedbackModal", n.Fullscreen = "Fullscreen", n.LeaveConfirmation = "LeaveConfirmation", n.Link = "Link", n.Loading = "Loading", n.Menu = "Menu", n.Modal = "Modal", n.Navigation = "Navigation", n.Performance = "Performance", n.Pos = "Pos", n.Print = "Print", n.ResourcePicker = "Resource_Picker", n.unstable_Picker = "unstable_Picker", n.Scanner = "Scanner", n.SessionToken = "SessionToken", n.Share = "Share", n.TitleBar = "TitleBar", n.Toast = "Toast", n.MarketingExternalActivityTopBar = "MarketingExternalActivityTopBar", n.WebVitals = "WebVitals";
  }(e.Group || (e.Group = {})), function(n) {
    n.Button = "Button", n.ButtonGroup = "ButtonGroup";
  }(e.ComponentType || (e.ComponentType = {}));
})(ue);
(function(e) {
  var n = b && b.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.updateActionFromPayload = e.isValidOptionalString = e.isValidOptionalNumber = e.forEachInEnum = e.getMergedProps = e.findMatchInEnum = e.getEventNameSpace = e.NonSnakeCaseGroup = e.actionWrapper = void 0;
  var t = n(to), r = Ht, a = ue;
  function i(s) {
    return s;
  }
  e.actionWrapper = i, e.NonSnakeCaseGroup = [
    a.Group.AuthCode,
    a.Group.Button,
    a.Group.ButtonGroup,
    a.Group.Cart,
    a.Group.Error,
    a.Group.Features,
    a.Group.Fullscreen,
    a.Group.Link,
    a.Group.Loading,
    a.Group.Menu,
    a.Group.Modal,
    a.Group.Navigation,
    a.Group.Pos,
    a.Group.Print,
    a.Group.ResourcePicker,
    a.Group.Scanner,
    a.Group.SessionToken,
    a.Group.Share,
    a.Group.TitleBar,
    a.Group.Toast,
    a.Group.unstable_Picker
  ];
  function o(s) {
    return s.replace(/([A-Z])/g, function(v, m, g) {
      return (g === 0 ? "" : "_") + v[0].toLowerCase();
    });
  }
  function c(s) {
    return e.NonSnakeCaseGroup.includes(s) ? s.toUpperCase() : o(s).toUpperCase();
  }
  function y(s, v, m) {
    if (v.startsWith("" + r.PREFIX + r.SEPARATOR))
      return v;
    var g = c(s);
    if (m) {
      var O = m.subgroups, _ = m.type;
      O && O.length > 0 && (g += g.length > 0 ? r.SEPARATOR : "", O.forEach(function(T, P) {
        g += "" + T.toUpperCase() + (P < O.length - 1 ? r.SEPARATOR : "");
      })), _ !== s && _ && (g += "" + (g.length > 0 ? r.SEPARATOR : "") + _.toUpperCase());
    }
    return g && (g += "" + (g.length > 0 ? r.SEPARATOR : "") + v.toUpperCase()), "" + r.PREFIX + r.SEPARATOR + g;
  }
  e.getEventNameSpace = y;
  function u(s, v) {
    var m = Object.keys(s).find(function(g) {
      return v === s[g];
    });
    return m ? s[m] : void 0;
  }
  e.findMatchInEnum = u;
  function f(s, v) {
    var m = t.default(s, v);
    if (!m) {
      var g = Object.assign(s, v);
      return g;
    }
    return m;
  }
  e.getMergedProps = f;
  function l(s, v) {
    Object.keys(s).forEach(function(m) {
      v(s[m]);
    });
  }
  e.forEachInEnum = l;
  function h(s) {
    return s == null || typeof s == "number";
  }
  e.isValidOptionalNumber = h;
  function p(s) {
    return s == null || typeof s == "string";
  }
  e.isValidOptionalString = p;
  function d(s, v) {
    var m = s.id;
    return m === v.id ? (Object.assign(s, f(s, v)), !0) : !1;
  }
  e.updateActionFromPayload = d;
})(ae);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.Action = void 0;
  var n = ae, t = ue, r;
  (function(i) {
    i.REQUEST = "APP::AUTH_CODE::REQUEST", i.RESPOND = "APP::AUTH_CODE::RESPOND";
  })(r = e.Action || (e.Action = {}));
  function a(i) {
    return n.actionWrapper({
      payload: i,
      group: t.Group.AuthCode,
      type: r.RESPOND
    });
  }
  e.respond = a;
})(Ta);
var Rt = {};
const Vh = "@shopify/app-bridge", $h = "3.7.7", Gh = "index.d.ts", qh = "index.js", Wh = "umd/index.js", Hh = "umd/index.js", zh = [
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
], Kh = {
  access: "public",
  "@shopify:registry": "https://registry.npmjs.org"
}, Qh = "git@github.com:Shopify/app-bridge.git", Yh = "https://shopify.dev/tools/app-bridge", Jh = "Shopify Inc.", Xh = "MIT", Zh = {
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
}, xh = !1, ey = {
  "@shopify/app-bridge-core": "1.0.2",
  base64url: "^3.0.1",
  "web-vitals": "^3.0.1"
}, ty = {
  "@types/node": "^10.12.5",
  shx: "^0.3.3"
}, ny = {
  name: Vh,
  version: $h,
  types: Gh,
  main: qh,
  unpkg: Wh,
  jsdelivr: Hh,
  files: zh,
  private: !1,
  publishConfig: Kh,
  repository: Qh,
  homepage: Yh,
  author: Jh,
  license: Xh,
  scripts: Zh,
  sideEffects: xh,
  "size-limit": [
    {
      limit: "10.5 KB",
      path: "production.js"
    }
  ],
  dependencies: ey,
  devDependencies: ty
};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getPackageName = e.getVersion = e.getMergedProps = e.updateActionFromPayload = e.isValidOptionalString = e.isValidOptionalNumber = e.NonSnakeCaseGroup = e.getEventNameSpace = e.forEachInEnum = e.findMatchInEnum = e.actionWrapper = void 0;
  var n = ae;
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
  var t = ny;
  function r() {
    return t.version;
  }
  e.getVersion = r;
  function a() {
    return t.name;
  }
  e.getPackageName = a;
})(Rt);
var Dt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ComponentType = e.Group = void 0;
  var n = ue;
  Object.defineProperty(e, "Group", { enumerable: !0, get: function() {
    return n.Group;
  } }), Object.defineProperty(e, "ComponentType", { enumerable: !0, get: function() {
    return n.ComponentType;
  } });
})(Dt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.request = e.Action = e.respond = void 0;
  var n = Ta;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
  var t = Rt, r = Dt, a = Ta;
  Object.defineProperty(e, "respond", { enumerable: !0, get: function() {
    return a.respond;
  } });
  function i(o) {
    return t.actionWrapper({
      group: r.Group.AuthCode,
      type: n.Action.REQUEST,
      payload: { id: o }
    });
  }
  e.request = i;
})(eo);
var ir = {}, It = {}, se = {}, _n = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LifecycleHook = e.PermissionType = e.MessageType = void 0, function(n) {
    n.GetState = "getState", n.Dispatch = "dispatch", n.Subscribe = "subscribe", n.Unsubscribe = "unsubscribe";
  }(e.MessageType || (e.MessageType = {})), function(n) {
    n.Dispatch = "Dispatch", n.Subscribe = "Subscribe";
  }(e.PermissionType || (e.PermissionType = {})), function(n) {
    n.UpdateAction = "UpdateAction", n.DispatchAction = "DispatchAction";
  }(e.LifecycleHook || (e.LifecycleHook = {}));
})(_n);
var Nt = {};
Object.defineProperty(Nt, "__esModule", { value: !0 });
Nt.removeFromCollection = Nt.addAndRemoveFromCollection = void 0;
function ry(e, n, t) {
  return e.push(n), function() {
    return Ps(e, n, t);
  };
}
Nt.addAndRemoveFromCollection = ry;
function Ps(e, n, t) {
  var r = e.findIndex(function(a) {
    return a === n;
  });
  return r >= 0 ? (e.splice(r, 1), t && t(n), !0) : !1;
}
Nt.removeFromCollection = Ps;
var Yn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.permissionAction = e.isErrorEventName = e.throwError = e.invalidOriginAction = e.fromAction = e.AppBridgeError = e.AppActionType = e.Action = void 0;
  var n = ue, t = ae, r;
  (function(l) {
    l.INVALID_ACTION = "APP::ERROR::INVALID_ACTION", l.INVALID_ACTION_TYPE = "APP::ERROR::INVALID_ACTION_TYPE", l.INVALID_PAYLOAD = "APP::ERROR::INVALID_PAYLOAD", l.INVALID_OPTIONS = "APP::ERROR::INVALID_OPTIONS", l.UNEXPECTED_ACTION = "APP::ERROR::UNEXPECTED_ACTION", l.PERSISTENCE = "APP::ERROR::PERSISTENCE", l.UNSUPPORTED_OPERATION = "APP::ERROR::UNSUPPORTED_OPERATION", l.NETWORK = "APP::ERROR::NETWORK", l.PERMISSION = "APP::ERROR::PERMISSION", l.FAILED_AUTHENTICATION = "APP::ERROR::FAILED_AUTHENTICATION", l.INVALID_ORIGIN = "APP::ERROR::INVALID_ORIGIN";
  })(r = e.Action || (e.Action = {})), function(l) {
    l.INVALID_CONFIG = "APP::ERROR::INVALID_CONFIG", l.MISSING_CONFIG = "APP::APP_ERROR::MISSING_CONFIG", l.MISSING_APP_BRIDGE_MIDDLEWARE = "APP::APP_ERROR::MISSING_APP_BRIDGE_MIDDLEWARE", l.WINDOW_UNDEFINED = "APP::APP_ERROR::WINDOW_UNDEFINED", l.REDUX_REINSTANTIATED = "APP::APP_ERROR::REDUX_REINSTANTIATED", l.MISSING_LOCAL_ORIGIN = "APP::APP_ERROR::MISSING_LOCAL_ORIGIN", l.MISSING_HOST_PROVIDER = "APP::APP_ERROR::MISSING_HOST_PROVIDER", l.MISSING_ROUTER_CONTEXT = "APP::APP_ERROR::MISSING_ROUTER_CONTEXT", l.MISSING_HISTORY_BLOCK = "APP::APP_ERROR::MISSING_HISTORY_BLOCK";
  }(e.AppActionType || (e.AppActionType = {}));
  var a = (
    /** @class */
    function() {
      function l(h) {
        this.name = "AppBridgeError", this.message = h, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(this.message).stack;
      }
      return l;
    }()
  );
  e.AppBridgeError = a, a.prototype = Object.create(Error.prototype);
  function i(l, h, p) {
    var d = l ? h + ": " + l : h, s = new a(d);
    return s.action = p, s.type = h, s;
  }
  e.fromAction = i;
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
  function c() {
    for (var l = [], h = 0; h < arguments.length; h++)
      l[h] = arguments[h];
    var p = l[0], d, s;
    throw typeof l[1] == "string" ? d = l[1] : (s = l[1], d = l[2] || ""), i(d, p, s);
  }
  e.throwError = c;
  function y(l) {
    var h = t.findMatchInEnum(r, l);
    return typeof h == "string";
  }
  e.isErrorEventName = y;
  function u(l, h, p) {
    var d = h.payload;
    return t.actionWrapper({
      type: l,
      group: n.Group.Error,
      payload: {
        action: h,
        message: p,
        type: l,
        id: d && d.id ? d.id : void 0
      }
    });
  }
  function f(l, h) {
    return u(r.PERMISSION, l, h || "Action is not permitted");
  }
  e.permissionAction = f;
})(Yn);
var In = {};
Object.defineProperty(In, "__esModule", { value: !0 });
In.generateUuid = void 0;
function tn(e) {
  return Array.from(e).map(function(n) {
    return ("00" + n.toString(16)).slice(-2);
  }).join("");
}
function nn(e) {
  if (typeof Uint8Array == "function" && typeof window == "object" && window.crypto) {
    var n = new Uint8Array(e), t = window.crypto.getRandomValues(n);
    if (t)
      return t;
  }
  return Array.from(new Array(e), function() {
    return Math.random() * 255 | 0;
  });
}
function Ss() {
  var e = 64, n = nn(1), t = nn(2);
  return n[0] &= 191, t[0] &= 15 | e, [
    // time-low
    tn(nn(4)),
    "-",
    // time-mid
    tn(nn(2)),
    "-",
    // time-high-and-version
    tn(t),
    "-",
    // clock-seq-and-reserved
    tn(n),
    // clock-seq-loq
    tn(nn(1)),
    "-",
    // node
    tn(nn(6))
  ].join("");
}
In.generateUuid = Ss;
In.default = Ss;
var iy = b && b.__extends || function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var i in a)
        Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
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
}(), Vr = b && b.__assign || function() {
  return Vr = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Vr.apply(this, arguments);
}, ay = b && b.__spreadArray || function(e, n) {
  for (var t = 0, r = n.length, a = e.length; t < r; t++, a++)
    e[a] = n[t];
  return e;
}, oy = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(se, "__esModule", { value: !0 });
se.unsubscribeActions = se.ActionSetWithChildren = se.ActionSet = void 0;
var uy = _n, wa = Nt, vr = Yn, cy = ue, sy = oy(In), ji = ae, Es = (
  /** @class */
  function() {
    function e(n, t, r, a) {
      var i = this;
      this.app = n, this.type = t, this.group = r, this.subgroups = [], this.subscriptions = [], n || vr.throwError(vr.Action.INVALID_ACTION, "Missing required `app`"), this.id = a || sy.default(), this.defaultGroup = r;
      var o = this.set;
      this.set = function() {
        for (var c, y = [], u = 0; u < arguments.length; u++)
          y[u] = arguments[u];
        return i.app.hooks ? (c = i.app.hooks).run.apply(c, ay([uy.LifecycleHook.UpdateAction, o, i], y)) : o.apply(i, y);
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
      var a = n.eventType, i = n.callback, o = n.component, c;
      return c = this.subscriptions.findIndex(function(y) {
        return y === n;
      }), c >= 0 ? this.subscriptions[c].unsubscribe() : c = void 0, this.group = t, this.subgroups = r, Object.assign(o, { subgroups: this.subgroups }), this.subscribe(a, i, o, c);
    }, e.prototype.error = function(n) {
      var t = this, r = [];
      return ji.forEachInEnum(vr.Action, function(a) {
        r.push(t.subscriptions.length), t.subscribe(a, n);
      }), function() {
        var a = r.map(function(i) {
          return t.subscriptions[i];
        });
        a.forEach(function(i) {
          wa.removeFromCollection(t.subscriptions, i, function(o) {
            o.unsubscribe();
          });
        });
      };
    }, e.prototype.subscribe = function(n, t, r, a) {
      var i = this, o = r || this.component, c = n.toUpperCase(), y = typeof a == "number" ? t : t.bind(this), u;
      vr.isErrorEventName(n) ? u = ji.getEventNameSpace(cy.Group.Error, n, Vr(Vr({}, o), { type: "" })) : u = ji.getEventNameSpace(this.group, n, o);
      var f = this.app.subscribe(u, y, r ? r.id : this.id), l = {
        eventType: c,
        unsubscribe: f,
        callback: y,
        component: o,
        updateSubscribe: function(h, p) {
          return i.updateSubscription(l, h, p);
        }
      };
      return typeof a == "number" && a >= 0 && a < this.subscriptions.length ? this.subscriptions[a] = l : this.subscriptions.push(l), f;
    }, e.prototype.unsubscribe = function(n) {
      return n === void 0 && (n = !1), no(this.subscriptions, this.defaultGroup, n), this;
    }, e;
  }()
);
se.ActionSet = Es;
var ly = (
  /** @class */
  function(e) {
    iy(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.children = [], t;
    }
    return n.prototype.unsubscribe = function(t, r) {
      return t === void 0 && (t = !0), r === void 0 && (r = !1), no(this.subscriptions, this.defaultGroup, r), this.children.forEach(function(a) {
        a instanceof n ? a.unsubscribe(t, !t) : a.unsubscribe(!t);
      }), this;
    }, n.prototype.getChild = function(t) {
      var r = this.children.findIndex(function(a) {
        return a.id === t;
      });
      return r >= 0 ? this.children[r] : void 0;
    }, n.prototype.getChildIndex = function(t) {
      return this.children.findIndex(function(r) {
        return r.id === t;
      });
    }, n.prototype.getChildSubscriptions = function(t, r) {
      return this.subscriptions.filter(function(a) {
        return a.component.id === t && (!r || r === a.eventType);
      });
    }, n.prototype.addChild = function(t, r, a) {
      var i = this, o = t.subscriptions, c = this.getChild(t.id);
      return c || this.children.push(t), !o || r === t.group && a === t.subgroups ? this : (o.forEach(function(y) {
        var u = y.updateSubscribe;
        u(r, a);
      }), Object.assign(t, { group: r, subgroups: a }), t instanceof n && t.children.forEach(function(y) {
        return i.addChild(y, r, a);
      }), this);
    }, n.prototype.removeChild = function(t) {
      var r = this;
      return wa.removeFromCollection(this.children, this.getChild(t), function() {
        var a = r.subscriptions.filter(function(i) {
          return i.component.id === t;
        });
        a.forEach(function(i) {
          wa.removeFromCollection(r.subscriptions, i, function(o) {
            o.unsubscribe();
          });
        });
      }), this;
    }, n.prototype.subscribeToChild = function(t, r, a) {
      var i = this, o = a.bind(this);
      if (r instanceof Array)
        return r.forEach(function(f) {
          return i.subscribeToChild(t, f, a);
        }), this;
      if (typeof r != "string")
        return this;
      var c = r.toUpperCase(), y = this.getChildSubscriptions(t.id, c);
      if (y.length > 0)
        y.forEach(function(f) {
          return f.updateSubscribe(i.group, t.subgroups);
        });
      else {
        var u = {
          id: t.id,
          subgroups: t.subgroups,
          type: t.type
        };
        this.subscribe(c, o, u);
      }
      return this;
    }, n.prototype.getUpdatedChildActions = function(t, r) {
      if (t.length === 0) {
        for (; r.length > 0; ) {
          var a = r.pop();
          if (!a)
            break;
          this.removeChild(a.id);
        }
        return;
      }
      for (var i = t.filter(function(y, u, f) {
        return u === f.indexOf(y);
      }), o = i.map(function(y) {
        return y.id;
      }), c = r.filter(function(y) {
        return o.indexOf(y.id) < 0;
      }); c.length > 0; ) {
        var a = c.pop();
        if (!a)
          break;
        this.removeChild(a.id);
      }
      return i;
    }, n;
  }(Es)
);
se.ActionSetWithChildren = ly;
function no(e, n, t) {
  t === void 0 && (t = !1), e.forEach(function(r) {
    if (t) {
      var a = r.updateSubscribe;
      a(n, []);
    } else {
      var i = r.unsubscribe;
      i();
    }
  }), t || (e.length = 0);
}
se.unsubscribeActions = no;
(function(e) {
  var n = b && b.__extends || function() {
    var f = function(l, h) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, d) {
        p.__proto__ = d;
      } || function(p, d) {
        for (var s in d)
          Object.prototype.hasOwnProperty.call(d, s) && (p[s] = d[s]);
      }, f(l, h);
    };
    return function(l, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      f(l, h);
      function p() {
        this.constructor = l;
      }
      l.prototype = h === null ? Object.create(h) : (p.prototype = h.prototype, new p());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(f) {
      for (var l, h = 1, p = arguments.length; h < p; h++) {
        l = arguments[h];
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && (f[d] = l[d]);
      }
      return f;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Button = e.update = e.clickButton = e.Style = e.Icon = e.Action = void 0;
  var r = ae, a = se, i = ue, o;
  (function(f) {
    f.CLICK = "CLICK", f.UPDATE = "UPDATE";
  })(o = e.Action || (e.Action = {})), function(f) {
    f.Print = "print";
  }(e.Icon || (e.Icon = {})), function(f) {
    f.Danger = "danger";
  }(e.Style || (e.Style = {}));
  function c(f, l, h) {
    var p = l.id, d = r.getEventNameSpace(f, o.CLICK, l), s = {
      id: p,
      payload: h
    };
    return r.actionWrapper({ type: d, group: f, payload: s });
  }
  e.clickButton = c;
  function y(f, l, h) {
    var p = l.id, d = h.label, s = r.getEventNameSpace(f, o.UPDATE, l), v = t(t({}, h), { id: p, label: d });
    return r.actionWrapper({ type: s, group: f, payload: v });
  }
  e.update = y;
  var u = (
    /** @class */
    function(f) {
      n(l, f);
      function l(h, p) {
        var d = f.call(this, h, i.ComponentType.Button, i.Group.Button) || this;
        return d.disabled = !1, d.loading = !1, d.plain = !1, d.set(p, !1), d;
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
      }), l.prototype.set = function(h, p) {
        p === void 0 && (p = !0);
        var d = r.getMergedProps(this.options, h), s = d.label, v = d.disabled, m = d.icon, g = d.style, O = d.loading, _ = d.plain;
        return this.label = s, this.disabled = !!v, this.icon = m, this.style = g, this.loading = !!O, this.plain = !!_, p && this.dispatch(o.UPDATE), this;
      }, l.prototype.dispatch = function(h, p) {
        switch (h) {
          case o.CLICK:
            this.app.dispatch(c(this.group, this.component, p));
            break;
          case o.UPDATE: {
            var d = y(this.group, this.component, this.payload);
            this.app.dispatch(d);
            break;
          }
        }
        return this;
      }, l;
    }(a.ActionSet)
  );
  e.Button = u;
})(It);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.isValidButtonProps = e.Button = e.update = e.Style = e.Icon = e.clickButton = e.Action = void 0;
  var n = It;
  Object.defineProperty(e, "Button", { enumerable: !0, get: function() {
    return n.Button;
  } });
  var t = It;
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
  function r(i) {
    return typeof i.id == "string" && typeof i.label == "string";
  }
  e.isValidButtonProps = r;
  function a(i, o) {
    return new n.Button(i, o);
  }
  e.create = a;
})(ir);
var ai = {}, zt = {}, Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.getSingleButton = void 0;
var dy = It;
function fy(e, n, t, r) {
  return e.addChild(n, e.group, t), e.subscribeToChild(n, dy.Action.UPDATE, r), n.payload;
}
Qt.getSingleButton = fy;
(function(e) {
  var n = b && b.__extends || function() {
    var d = function(s, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
      }, d(s, v);
    };
    return function(s, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      d(s, v);
      function m() {
        this.constructor = s;
      }
      s.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(d) {
      for (var s, v = 1, m = arguments.length; v < m; v++) {
        s = arguments[v];
        for (var g in s)
          Object.prototype.hasOwnProperty.call(s, g) && (d[g] = s[g]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ButtonGroup = e.isGroupedButtonPayload = e.isGroupedButton = e.update = e.Action = void 0;
  var r = Qt, a = ae, i = se, o = ue, c;
  (function(d) {
    d.UPDATE = "UPDATE";
  })(c = e.Action || (e.Action = {}));
  function y(d, s, v) {
    return p(d, s, c.UPDATE, v);
  }
  e.update = y;
  function u(d) {
    var s = d;
    return s.buttons && s.buttons.length > 0 && s.label !== void 0;
  }
  e.isGroupedButton = u;
  function f(d) {
    var s = d;
    return Array.isArray(s.buttons) && typeof s.id == "string" && typeof s.label == "string";
  }
  e.isGroupedButtonPayload = f;
  var l = (
    /** @class */
    function(d) {
      n(s, d);
      function s(v, m) {
        var g = d.call(this, v, o.ComponentType.ButtonGroup, o.Group.ButtonGroup) || this;
        return g.disabled = !1, g.plain = !1, g.buttonsOptions = [], g.buttons = [], g.set(m, !1), g;
      }
      return Object.defineProperty(s.prototype, "options", {
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
      }), Object.defineProperty(s.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = a.getMergedProps(this.options, v), O = g.label, _ = g.disabled, T = g.buttons, P = g.plain;
        return this.label = O, this.disabled = !!_, this.buttons = this.getButtons(T), this.plain = !!P, m && this.dispatch(c.UPDATE), this;
      }, s.prototype.dispatch = function(v) {
        switch (v) {
          case c.UPDATE: {
            var m = y(this.group, this.component, this.payload);
            this.app.dispatch(m);
            break;
          }
        }
        return this;
      }, s.prototype.updateButtons = function(v) {
        if (!(!this.buttons || this.buttons.length === 0)) {
          for (var m, g = 0, O = this.buttons; g < O.length; g++) {
            var _ = O[g];
            if (m = a.updateActionFromPayload(_, v), m)
              break;
          }
          m && this.dispatch(c.UPDATE);
        }
      }, s.prototype.getSingleButton = function(v) {
        return r.getSingleButton(this, v, this.subgroups, this.updateButtons);
      }, s.prototype.getButtons = function(v) {
        var m = this, g = [];
        return v ? (v.forEach(function(O) {
          var _ = r.getSingleButton(m, O, m.subgroups, m.updateButtons);
          g.push(_);
        }), this.buttonsOptions = v, g) : [];
      }, s;
    }(i.ActionSetWithChildren)
  );
  e.ButtonGroup = l;
  function h(d, s) {
    return new l(d, s);
  }
  e.create = h;
  function p(d, s, v, m, g) {
    var O = s.id, _ = m.label, T = a.getEventNameSpace(d, v, s), P = t(t({}, m), { id: O, label: _, payload: g });
    return a.actionWrapper({ type: T, group: d, payload: P });
  }
})(zt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ButtonGroup = e.isGroupedButtonPayload = e.isGroupedButton = e.update = e.Action = void 0;
  var n = zt;
  Object.defineProperty(e, "ButtonGroup", { enumerable: !0, get: function() {
    return n.ButtonGroup;
  } });
  var t = zt;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } }), Object.defineProperty(e, "isGroupedButton", { enumerable: !0, get: function() {
    return t.isGroupedButton;
  } }), Object.defineProperty(e, "isGroupedButtonPayload", { enumerable: !0, get: function() {
    return t.isGroupedButtonPayload;
  } });
  function r(a, i) {
    return new n.ButtonGroup(a, i);
  }
  e.create = r;
})(ai);
var ro = {}, Ts = {};
(function(e) {
  var n = b && b.__extends || function() {
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
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(E) {
      for (var S, w = 1, I = arguments.length; w < I; w++) {
        S = arguments[w];
        for (var C in S)
          Object.prototype.hasOwnProperty.call(S, C) && (E[C] = S[C]);
      }
      return E;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Cart = e.setLineItemProperties = e.removeLineItemDiscount = e.setLineItemDiscount = e.removeLineItem = e.updateLineItem = e.addLineItem = e.removeProperties = e.setProperties = e.setDiscount = e.updateCustomerAddress = e.addCustomerAddress = e.setCustomer = e.update = e.fetch = e.Action = void 0;
  var r = ae, a = se, i = ue, o;
  (function(E) {
    E.FETCH = "APP::CART::FETCH", E.UPDATE = "APP::CART::UPDATE", E.SET_CUSTOMER = "APP::CART::SET_CUSTOMER", E.REMOVE_CUSTOMER = "APP::CART::REMOVE_CUSTOMER", E.ADD_CUSTOMER_ADDRESS = "APP::CART::ADD_CUSTOMER_ADDRESS", E.UPDATE_CUSTOMER_ADDRESS = "APP::CART::UPDATE_CUSTOMER_ADDRESS", E.SET_DISCOUNT = "APP::CART::SET_DISCOUNT", E.REMOVE_DISCOUNT = "APP::CART::REMOVE_DISCOUNT", E.SET_PROPERTIES = "APP::CART::SET_PROPERTIES", E.REMOVE_PROPERTIES = "APP::CART::REMOVE_PROPERTIES", E.CLEAR = "APP::CART::CLEAR", E.ADD_LINE_ITEM = "APP::CART::ADD_LINE_ITEM", E.UPDATE_LINE_ITEM = "APP::CART::UPDATE_LINE_ITEM", E.REMOVE_LINE_ITEM = "APP::CART::REMOVE_LINE_ITEM", E.SET_LINE_ITEM_DISCOUNT = "APP::CART::SET_LINE_ITEM_DISCOUNT", E.REMOVE_LINE_ITEM_DISCOUNT = "APP::CART::REMOVE_LINE_ITEM_DISCOUNT", E.SET_LINE_ITEM_PROPERTIES = "APP::CART::SET_LINE_ITEM_PROPERTIES", E.REMOVE_LINE_ITEM_PROPERTIES = "APP::CART::REMOVE_LINE_ITEM_PROPERTIES";
  })(o = e.Action || (e.Action = {}));
  function c(E, S) {
    return S === void 0 && (S = {}), r.actionWrapper({
      group: i.Group.Cart,
      type: E,
      payload: S
    });
  }
  function y() {
    return c(o.FETCH);
  }
  e.fetch = y;
  function u(E) {
    return c(o.UPDATE, E);
  }
  e.update = u;
  function f(E) {
    return c(o.SET_CUSTOMER, E);
  }
  e.setCustomer = f;
  function l(E) {
    return c(o.ADD_CUSTOMER_ADDRESS, E);
  }
  e.addCustomerAddress = l;
  function h(E) {
    return c(o.UPDATE_CUSTOMER_ADDRESS, E);
  }
  e.updateCustomerAddress = h;
  function p(E) {
    return c(o.SET_DISCOUNT, E);
  }
  e.setDiscount = p;
  function d(E) {
    return c(o.SET_PROPERTIES, E);
  }
  e.setProperties = d;
  function s(E) {
    return c(o.REMOVE_PROPERTIES, E);
  }
  e.removeProperties = s;
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
      n(S, E);
      function S(w, I) {
        return E.call(this, w, i.Group.Cart, i.Group.Cart, I ? I.id : void 0) || this;
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
        this.app.dispatch(c(w, t(t({}, I), { id: this.id })));
      }, S;
    }(a.ActionSet)
  );
  e.Cart = P;
})(Ts);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.setLineItemProperties = e.removeLineItemDiscount = e.setLineItemDiscount = e.removeLineItem = e.updateLineItem = e.addLineItem = e.removeProperties = e.setProperties = e.setDiscount = e.updateCustomerAddress = e.addCustomerAddress = e.setCustomer = e.update = e.fetch = e.Cart = e.Action = void 0;
  var n = Ts;
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
  function t(r, a) {
    return new n.Cart(r, a);
  }
  e.create = t;
})(ro);
var io = {}, ws = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(n) {
    n.INITIALIZE = "APP::CLIENT::INITIALIZE";
  }(e.Action || (e.Action = {}));
})(ws);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initialize = e.Action = void 0;
  var n = ws;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
  var t = Dt, r = Rt;
  function a() {
    return r.actionWrapper({
      group: t.Group.Client,
      type: n.Action.INITIALIZE
    });
  }
  e.initialize = a;
})(io);
var Yt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.networkAction = e.persistenceAction = e.unsupportedOperationAction = e.unexpectedAction = e.invalidAction = e.invalidActionType = e.invalidPayload = e.Message = e.fromAction = e.Action = e.permissionAction = e.isErrorEventName = e.throwError = e.invalidOriginAction = e.AppBridgeError = e.AppActionType = void 0;
  var n = Yn;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "fromAction", { enumerable: !0, get: function() {
    return n.fromAction;
  } });
  var t = Rt, r = Dt, a = Yn;
  Object.defineProperty(e, "AppActionType", { enumerable: !0, get: function() {
    return a.AppActionType;
  } }), Object.defineProperty(e, "AppBridgeError", { enumerable: !0, get: function() {
    return a.AppBridgeError;
  } }), Object.defineProperty(e, "invalidOriginAction", { enumerable: !0, get: function() {
    return a.invalidOriginAction;
  } }), Object.defineProperty(e, "throwError", { enumerable: !0, get: function() {
    return a.throwError;
  } }), Object.defineProperty(e, "isErrorEventName", { enumerable: !0, get: function() {
    return a.isErrorEventName;
  } }), Object.defineProperty(e, "permissionAction", { enumerable: !0, get: function() {
    return a.permissionAction;
  } });
  function i(p, d, s) {
    var v = d.payload;
    return t.actionWrapper({
      type: p,
      group: r.Group.Error,
      payload: {
        action: d,
        message: s,
        type: p,
        id: v && v.id ? v.id : void 0
      }
    });
  }
  (function(p) {
    p.MISSING_PAYLOAD = "Missing payload", p.INVALID_PAYLOAD_ID = "Id in payload is missing or invalid";
  })(e.Message || (e.Message = {}));
  function o(p, d) {
    return i(n.Action.INVALID_PAYLOAD, p, d || "The action's payload is missing required properties or has invalid properties");
  }
  e.invalidPayload = o;
  function c(p, d) {
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
  e.invalidActionType = c;
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
    return i(n.Action.UNSUPPORTED_OPERATION, p, d || "The action type is unsupported");
  }
  e.unsupportedOperationAction = f;
  function l(p, d) {
    return i(n.Action.PERSISTENCE, p, d || "Action cannot be persisted on server");
  }
  e.persistenceAction = l;
  function h(p, d) {
    return i(n.Action.NETWORK, p, d || "Network error");
  }
  e.networkAction = h;
})(Yt);
var Is = {}, js = {}, Jn = {};
(function(e) {
  var n = b && b.__extends || function() {
    var l = function(h, p) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, s) {
        d.__proto__ = s;
      } || function(d, s) {
        for (var v in s)
          Object.prototype.hasOwnProperty.call(s, v) && (d[v] = s[v]);
      }, l(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      l(h, p);
      function d() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (d.prototype = p.prototype, new d());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(l) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var s in h)
          Object.prototype.hasOwnProperty.call(h, s) && (l[s] = h[s]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Toast = e.primaryAction = e.clear = e.show = e.Action = void 0;
  var r = ae, a = se, i = ue, o;
  (function(l) {
    l.SHOW = "APP::TOAST::SHOW", l.CLEAR = "APP::TOAST::CLEAR", l.ACTION = "APP::TOAST::ACTION";
  })(o = e.Action || (e.Action = {}));
  function c(l) {
    return r.actionWrapper({
      group: i.Group.Toast,
      payload: l,
      type: o.SHOW
    });
  }
  e.show = c;
  function y(l) {
    return r.actionWrapper({
      payload: l,
      group: i.Group.Toast,
      type: o.CLEAR
    });
  }
  e.clear = y;
  function u(l) {
    return r.actionWrapper({
      payload: l,
      group: i.Group.Toast,
      type: o.ACTION
    });
  }
  e.primaryAction = u;
  var f = (
    /** @class */
    function(l) {
      n(h, l);
      function h(p, d) {
        var s = l.call(this, p, i.Group.Toast, i.Group.Toast) || this;
        return s.message = "", s.duration = 5e3, s.set(d), s;
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
        var d = r.getMergedProps(this.options, p), s = d.message, v = d.duration, m = d.isError, g = d.action;
        return this.message = s, this.duration = v, this.isError = m, this.action = g != null && g.content ? {
          content: g.content || ""
        } : void 0, this;
      }, h.prototype.dispatch = function(p) {
        switch (p) {
          case o.SHOW: {
            var d = c(this.payload);
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
    }(a.ActionSet)
  );
  e.Toast = f;
})(Jn);
(function(e) {
  var n = b && b.__extends || function() {
    var i = function(o, c) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, u) {
        y.__proto__ = u;
      } || function(y, u) {
        for (var f in u)
          Object.prototype.hasOwnProperty.call(u, f) && (y[f] = u[f]);
      }, i(o, c);
    };
    return function(o, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      i(o, c);
      function y() {
        this.constructor = o;
      }
      o.prototype = c === null ? Object.create(c) : (y.prototype = c.prototype, new y());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Flash = e.show = e.clear = void 0;
  var t = Jn;
  Object.defineProperty(e, "clear", { enumerable: !0, get: function() {
    return t.clear;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return t.show;
  } });
  var r = (
    /** @class */
    function(i) {
      n(o, i);
      function o() {
        return i !== null && i.apply(this, arguments) || this;
      }
      return o;
    }(t.Toast)
  );
  e.Flash = r;
  function a(i, o) {
    return new r(i, o);
  }
  e.create = a;
})(js);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, a, i, o) {
    o === void 0 && (o = i), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(r, a, i, o) {
    o === void 0 && (o = i), r[o] = a[i];
  }), t = b && b.__exportStar || function(r, a) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && n(a, r, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(js, e);
})(Is);
var ao = {}, Cs = {}, oo = {}, oi = {}, uo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(n) {
    n.UPDATE = "APP::FEATURES::UPDATE", n.REQUEST = "APP::FEATURES::REQUEST", n.REQUEST_UPDATE = "APP::FEATURES::REQUEST::UPDATE";
  }(e.Action || (e.Action = {}));
})(uo);
var py = b && b.__extends || function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var i in a)
        Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
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
}(), $r = b && b.__assign || function() {
  return $r = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, $r.apply(this, arguments);
};
Object.defineProperty(oi, "__esModule", { value: !0 });
oi.Features = void 0;
var hy = ae, yy = se, Ci = ue, Lu = uo, vy = (
  /** @class */
  function(e) {
    py(n, e);
    function n(t, r) {
      return e.call(this, t, Ci.Group.Features, Ci.Group.Features, r ? r.id : void 0) || this;
    }
    return n.prototype.dispatch = function(t, r) {
      switch (t) {
        case Lu.Action.REQUEST:
          this.dispatchFeaturesAction(Lu.Action.REQUEST, r);
          break;
      }
      return this;
    }, n.prototype.dispatchFeaturesAction = function(t, r) {
      this.app.dispatch(hy.actionWrapper({
        group: Ci.Group.Features,
        type: t,
        payload: $r($r({}, r || {}), { id: this.id })
      }));
    }, n;
  }(yy.ActionSet)
);
oi.Features = vy;
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, a, i, o) {
    o === void 0 && (o = i), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(r, a, i, o) {
    o === void 0 && (o = i), r[o] = a[i];
  }), t = b && b.__exportStar || function(r, a) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && n(a, r, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(oi, e), t(uo, e);
})(oo);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Features = void 0;
  var n = oo;
  Object.defineProperty(e, "Features", { enumerable: !0, get: function() {
    return n.Features;
  } });
  function t(r, a) {
    return new n.Features(r, a);
  }
  e.create = t;
})(Cs);
var co = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0;
  var n = oo;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
})(co);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, a, i, o) {
    o === void 0 && (o = i), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(r, a, i, o) {
    o === void 0 && (o = i), r[o] = a[i];
  }), t = b && b.__exportStar || function(r, a) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && n(a, r, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Cs, e), t(co, e);
})(ao);
var Ms = {}, so = {};
(function(e) {
  var n = b && b.__extends || function() {
    var l = function(h, p) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, s) {
        d.__proto__ = s;
      } || function(d, s) {
        for (var v in s)
          Object.prototype.hasOwnProperty.call(s, v) && (d[v] = s[v]);
      }, l(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      l(h, p);
      function d() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (d.prototype = p.prototype, new d());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(l) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var s in h)
          Object.prototype.hasOwnProperty.call(h, s) && (l[s] = h[s]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.FeedbackModal = e.close = e.open = e.Action = void 0;
  var r = ae, a = se, i = ue, o;
  (function(l) {
    l.OPEN = "APP::FEEDBACK_MODAL::OPEN", l.CLOSE = "APP::FEEDBACK_MODAL::CLOSE";
  })(o = e.Action || (e.Action = {}));
  function c(l) {
    return r.actionWrapper({
      group: i.Group.FeedbackModal,
      payload: l,
      type: o.OPEN
    });
  }
  e.open = c;
  function y(l) {
    return r.actionWrapper({
      group: i.Group.FeedbackModal,
      payload: l,
      type: o.CLOSE
    });
  }
  e.close = y;
  var u = (
    /** @class */
    function(l) {
      n(h, l);
      function h(p, d) {
        var s = l.call(this, p, i.Group.FeedbackModal, i.Group.FeedbackModal) || this;
        return s.options = d, s.set(d), s;
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
            var d = c(this.payload);
            this.app.dispatch(d);
            break;
          }
          case o.CLOSE: {
            var s = y(this.payload);
            this.app.dispatch(s);
            break;
          }
        }
        return this;
      }, h;
    }(a.ActionSet)
  );
  e.FeedbackModal = u;
  function f(l, h) {
    return new u(l, h);
  }
  e.create = f;
})(so);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.FeedbackModal = e.close = e.open = e.Action = void 0;
  var n = so;
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
})(Ms);
var lo = {}, Ia = {};
(function(e) {
  var n = b && b.__extends || function() {
    var u = function(f, l) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, p) {
        h.__proto__ = p;
      } || function(h, p) {
        for (var d in p)
          Object.prototype.hasOwnProperty.call(p, d) && (h[d] = p[d]);
      }, u(f, l);
    };
    return function(f, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      u(f, l);
      function h() {
        this.constructor = f;
      }
      f.prototype = l === null ? Object.create(l) : (h.prototype = l.prototype, new h());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Fullscreen = e.exit = e.enter = e.Action = void 0;
  var t = ae, r = se, a = ue, i;
  (function(u) {
    u.ENTER = "APP::FULLSCREEN::ENTER", u.EXIT = "APP::FULLSCREEN::EXIT";
  })(i = e.Action || (e.Action = {}));
  function o() {
    return t.actionWrapper({
      group: a.Group.Fullscreen,
      type: i.ENTER
    });
  }
  e.enter = o;
  function c() {
    return t.actionWrapper({
      group: a.Group.Fullscreen,
      type: i.EXIT
    });
  }
  e.exit = c;
  var y = (
    /** @class */
    function(u) {
      n(f, u);
      function f(l) {
        return u.call(this, l, a.Group.Fullscreen, a.Group.Fullscreen) || this;
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
      }), f.prototype.dispatch = function(l) {
        return this.app.dispatch(t.actionWrapper({
          group: this.group,
          type: l,
          payload: this.payload
        })), this;
      }, f;
    }(r.ActionSet)
  );
  e.Fullscreen = y;
})(Ia);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Action = e.Fullscreen = e.exit = e.enter = void 0;
  var n = Ia;
  Object.defineProperty(e, "Fullscreen", { enumerable: !0, get: function() {
    return n.Fullscreen;
  } }), Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
  var t = Ia;
  Object.defineProperty(e, "enter", { enumerable: !0, get: function() {
    return t.enter;
  } }), Object.defineProperty(e, "exit", { enumerable: !0, get: function() {
    return t.exit;
  } });
  function r(a) {
    return new n.Fullscreen(a);
  }
  e.create = r;
})(lo);
var Ns = {}, Gr = {};
(function(e) {
  var n = b && b.__extends || function() {
    var l = function(h, p) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, s) {
        d.__proto__ = s;
      } || function(d, s) {
        for (var v in s)
          Object.prototype.hasOwnProperty.call(s, v) && (d[v] = s[v]);
      }, l(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      l(h, p);
      function d() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (d.prototype = p.prototype, new d());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(l) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var s in h)
          Object.prototype.hasOwnProperty.call(h, s) && (l[s] = h[s]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LeaveConfirmation = e.confirm = e.disable = e.enable = e.Action = void 0;
  var r = ae, a = se, i = ue, o;
  (function(l) {
    l.ENABLE = "APP::LEAVE_CONFIRMATION::ENABLE", l.DISABLE = "APP::LEAVE_CONFIRMATION::DISABLE", l.CONFIRM = "APP::LEAVE_CONFIRMATION::CONFIRM";
  })(o = e.Action || (e.Action = {}));
  function c(l) {
    return l === void 0 && (l = {}), r.actionWrapper({
      group: i.Group.LeaveConfirmation,
      payload: l,
      type: o.ENABLE
    });
  }
  e.enable = c;
  function y(l) {
    return l === void 0 && (l = {}), r.actionWrapper({
      group: i.Group.LeaveConfirmation,
      payload: l,
      type: o.DISABLE
    });
  }
  e.disable = y;
  function u(l) {
    return l === void 0 && (l = {}), r.actionWrapper({
      group: i.Group.LeaveConfirmation,
      payload: l,
      type: o.CONFIRM
    });
  }
  e.confirm = u;
  var f = (
    /** @class */
    function(l) {
      n(h, l);
      function h(p, d) {
        d === void 0 && (d = {});
        var s = l.call(this, p, i.Group.LeaveConfirmation, i.Group.LeaveConfirmation) || this;
        return s.options = d, s.set(d), s;
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
            var d = c(this.payload);
            this.app.dispatch(d);
            break;
          }
          case o.DISABLE: {
            var s = y(this.payload);
            this.app.dispatch(s);
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
    }(a.ActionSet)
  );
  e.LeaveConfirmation = f;
})(Gr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.LeaveConfirmation = e.confirm = e.disable = e.enable = e.Action = void 0;
  var n = Gr;
  Object.defineProperty(e, "LeaveConfirmation", { enumerable: !0, get: function() {
    return n.LeaveConfirmation;
  } });
  var t = Gr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "enable", { enumerable: !0, get: function() {
    return t.enable;
  } }), Object.defineProperty(e, "disable", { enumerable: !0, get: function() {
    return t.disable;
  } }), Object.defineProperty(e, "confirm", { enumerable: !0, get: function() {
    return t.confirm;
  } });
  function r(a, i) {
    return i === void 0 && (i = {}), new n.LeaveConfirmation(a, i);
  }
  e.create = r;
})(Ns);
var fo = {}, ja = {};
(function(e) {
  var n = b && b.__extends || function() {
    var u = function(f, l) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, p) {
        h.__proto__ = p;
      } || function(h, p) {
        for (var d in p)
          Object.prototype.hasOwnProperty.call(p, d) && (h[d] = p[d]);
      }, u(f, l);
    };
    return function(f, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      u(f, l);
      function h() {
        this.constructor = f;
      }
      f.prototype = l === null ? Object.create(l) : (h.prototype = l.prototype, new h());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Loading = e.stop = e.start = e.Action = void 0;
  var t = ae, r = se, a = ue, i;
  (function(u) {
    u.START = "APP::LOADING::START", u.STOP = "APP::LOADING::STOP";
  })(i = e.Action || (e.Action = {}));
  function o(u) {
    return t.actionWrapper({
      payload: u,
      group: a.Group.Loading,
      type: i.START
    });
  }
  e.start = o;
  function c(u) {
    return t.actionWrapper({
      payload: u,
      group: a.Group.Loading,
      type: i.STOP
    });
  }
  e.stop = c;
  var y = (
    /** @class */
    function(u) {
      n(f, u);
      function f(l) {
        return u.call(this, l, a.Group.Loading, a.Group.Loading) || this;
      }
      return Object.defineProperty(f.prototype, "payload", {
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), f.prototype.dispatch = function(l) {
        switch (l) {
          case i.START:
            this.app.dispatch(o(this.payload));
            break;
          case i.STOP:
            this.app.dispatch(c(this.payload));
            break;
        }
        return this;
      }, f;
    }(r.ActionSet)
  );
  e.Loading = y;
})(ja);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.stop = e.start = e.Action = e.Loading = void 0;
  var n = ja;
  Object.defineProperty(e, "Loading", { enumerable: !0, get: function() {
    return n.Loading;
  } });
  var t = ja;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "start", { enumerable: !0, get: function() {
    return t.start;
  } }), Object.defineProperty(e, "stop", { enumerable: !0, get: function() {
    return t.stop;
  } });
  function r(a) {
    return new n.Loading(a);
  }
  e.create = r;
})(fo);
var ui = {}, Xn = {};
(function(e) {
  var n = b && b.__extends || function() {
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
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(P) {
      for (var E, S = 1, w = arguments.length; S < w; S++) {
        E = arguments[S];
        for (var I in E)
          Object.prototype.hasOwnProperty.call(E, I) && (P[I] = E[I]);
      }
      return P;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalIframe = e.ModalMessage = e.Modal = e.isMessageModal = e.isIframeModal = e.data = e.update = e.clickFooterButton = e.updateModalSize = e.closeModal = e.openModal = e.Size = e.Action = void 0;
  var r = Qt, a = ae, i = se, o = ue, c = It, y;
  (function(P) {
    P.OPEN = "APP::MODAL::OPEN", P.CLOSE = "APP::MODAL::CLOSE", P.UPDATE = "APP::MODAL::UPDATE", P.UPDATE_CONTENT = "APP::MODAL::CONTENT::UPDATE", P.FOOTER_BUTTON_CLICK = "APP::MODAL::FOOTER::BUTTON::CLICK", P.FOOTER_BUTTON_UPDATE = "APP::MODAL::FOOTER::BUTTON::UPDATE", P.UPDATE_SIZE = "APP::MODAL::UPDATE_SIZE", P.DATA = "APP::MODAL::DATA";
  })(y = e.Action || (e.Action = {}));
  var u;
  (function(P) {
    P.Small = "small", P.Medium = "medium", P.Large = "large", P.Full = "full", P.Auto = "auto";
  })(u = e.Size || (e.Size = {}));
  var f = {
    group: o.Group.Modal,
    subgroups: ["Footer"],
    type: o.ComponentType.Button
  };
  function l(P) {
    return a.actionWrapper({
      group: o.Group.Modal,
      payload: P,
      type: y.OPEN
    });
  }
  e.openModal = l;
  function h(P) {
    return a.actionWrapper({
      group: o.Group.Modal,
      payload: P,
      type: y.CLOSE
    });
  }
  e.closeModal = h;
  function p(P) {
    return a.actionWrapper({
      group: o.Group.Modal,
      payload: P,
      type: y.UPDATE_SIZE
    });
  }
  e.updateModalSize = p;
  function d(P, E) {
    var S = t({ id: P }, f);
    return c.clickButton(o.Group.Modal, S, E);
  }
  e.clickFooterButton = d;
  function s(P) {
    return a.actionWrapper({
      payload: P,
      group: o.Group.Modal,
      type: y.UPDATE
    });
  }
  e.update = s;
  function v(P) {
    return a.actionWrapper({
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
  function g(P) {
    return typeof P.message == "string";
  }
  e.isMessageModal = g;
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
        this.app.dispatch(h({ id: this.id }));
      }, E.prototype.setFooterPrimaryButton = function(S, w) {
        var I = this, C = f.subgroups;
        this.footerPrimaryOptions = this.getChildButton(S, this.footerPrimaryOptions), this.footerPrimary = this.footerPrimaryOptions ? r.getSingleButton(this, this.footerPrimaryOptions, C, function(k) {
          I.updatePrimaryFooterButton(k, w);
        }) : void 0;
      }, E.prototype.setFooterSecondaryButtons = function(S, w) {
        var I = this, C = f.subgroups, k = S || [], B = this.footerOptions && this.footerOptions.buttons.secondary || [];
        this.footerSecondaryOptions = this.getUpdatedChildActions(k, B), this.footerSecondary = this.footerSecondaryOptions ? this.footerSecondaryOptions.map(function(D) {
          return r.getSingleButton(I, D, C, function(U) {
            I.updateSecondaryFooterButton(U, w);
          });
        }) : void 0;
      }, E.prototype.getChildButton = function(S, w) {
        var I = S ? [S] : [], C = w ? [w] : [], k = this.getUpdatedChildActions(I, C);
        return k ? k[0] : void 0;
      }, E.prototype.updatePrimaryFooterButton = function(S, w) {
        !this.footer || !this.footer.buttons.primary || a.updateActionFromPayload(this.footer.buttons.primary, S) && w();
      }, E.prototype.updateSecondaryFooterButton = function(S, w) {
        if (!(!this.footer || !this.footer.buttons || !this.footer.buttons.secondary)) {
          for (var I, C = 0, k = this.footer.buttons.secondary; C < k.length; C++) {
            var B = k[C];
            if (I = a.updateActionFromPayload(B, S), I)
              break;
          }
          I && w();
        }
      }, E;
    }(i.ActionSetWithChildren)
  );
  e.Modal = O;
  var _ = (
    /** @class */
    function(P) {
      n(E, P);
      function E(S, w) {
        var I = P.call(this, S, o.Group.Modal, o.Group.Modal) || this;
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
        var C = a.getMergedProps(this.options, S), k = C.title, B = C.footer, D = C.message, U = C.size;
        return this.title = k, this.message = D, this.size = U, this.setFooterPrimaryButton(B ? B.buttons.primary : void 0, function() {
          I.dispatch(y.UPDATE);
        }), this.setFooterSecondaryButtons(B ? B.buttons.secondary : void 0, function() {
          I.dispatch(y.UPDATE);
        }), w && this.dispatch(y.UPDATE), this;
      }, E.prototype.dispatch = function(S) {
        switch (S) {
          case y.OPEN:
            this.app.dispatch(l(this.payload));
            break;
          case y.CLOSE:
            this.close();
            break;
          case y.UPDATE:
            this.app.dispatch(s(this.payload));
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
      function E(S, w) {
        var I = P.call(this, S, o.Group.Modal, o.Group.Modal) || this;
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
        var C = a.getMergedProps(this.options, S), k = C.title, B = C.footer, D = C.path, U = C.url, q = C.size, L = C.loading;
        return this.title = k, this.url = U, this.path = D, this.size = q, this.loading = L, this.setFooterPrimaryButton(B ? B.buttons.primary : void 0, function() {
          I.dispatch(y.UPDATE);
        }), this.setFooterSecondaryButtons(B ? B.buttons.secondary : void 0, function() {
          I.dispatch(y.UPDATE);
        }), w && this.dispatch(y.UPDATE), this;
      }, E.prototype.dispatch = function(S, w) {
        switch (S) {
          case y.OPEN:
            this.app.dispatch(l(this.payload));
            break;
          case y.CLOSE:
            this.close();
            break;
          case y.UPDATE:
            this.app.dispatch(s(this.payload));
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
})(Xn);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Modal = e.isMessageModal = e.data = e.update = e.clickFooterButton = e.updateModalSize = e.closeModal = e.openModal = e.Size = e.Action = e.isIframeModal = e.ModalMessage = e.ModalIframe = void 0;
  var n = Xn;
  Object.defineProperty(e, "ModalIframe", { enumerable: !0, get: function() {
    return n.ModalIframe;
  } }), Object.defineProperty(e, "ModalMessage", { enumerable: !0, get: function() {
    return n.ModalMessage;
  } }), Object.defineProperty(e, "isIframeModal", { enumerable: !0, get: function() {
    return n.isIframeModal;
  } });
  var t = Xn;
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
  var r = function(a, i) {
    return n.isIframeModal(i) ? new n.ModalIframe(a, i) : new n.ModalMessage(a, i);
  };
  e.create = r;
})(ui);
var Rs = {}, Ca = {};
(function(e) {
  var n = b && b.__extends || function() {
    var l = function(h, p) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, s) {
        d.__proto__ = s;
      } || function(d, s) {
        for (var v in s)
          Object.prototype.hasOwnProperty.call(s, v) && (d[v] = s[v]);
      }, l(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      l(h, p);
      function d() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (d.prototype = p.prototype, new d());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(l) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var s in h)
          Object.prototype.hasOwnProperty.call(h, s) && (l[s] = h[s]);
      }
      return l;
    }, t.apply(this, arguments);
  }, r = b && b.__awaiter || function(l, h, p, d) {
    function s(v) {
      return v instanceof p ? v : new p(function(m) {
        m(v);
      });
    }
    return new (p || (p = Promise))(function(v, m) {
      function g(T) {
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
        T.done ? v(T.value) : s(T.value).then(g, O);
      }
      _((d = d.apply(l, h || [])).next());
    });
  }, a = b && b.__generator || function(l, h) {
    var p = { label: 0, sent: function() {
      if (v[0] & 1)
        throw v[1];
      return v[1];
    }, trys: [], ops: [] }, d, s, v, m;
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
          if (d = 1, s && (v = _[0] & 2 ? s.return : _[0] ? s.throw || ((v = s.return) && v.call(s), 0) : s.next) && !(v = v.call(s, _[1])).done)
            return v;
          switch (s = 0, v && (_ = [_[0] & 2, v.value]), _[0]) {
            case 0:
            case 1:
              v = _;
              break;
            case 4:
              return p.label++, { value: _[1], done: !1 };
            case 5:
              p.label++, s = _[1], _ = [0];
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
          _ = h.call(l, p);
        } catch (T) {
          _ = [6, T], s = 0;
        } finally {
          d = v = 0;
        }
      if (_[0] & 5)
        throw _[1];
      return { value: _[0] ? _[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalContent = e.Action = void 0;
  var i = ae, o = se, c = ue, y = Xn, u;
  (function(l) {
    l.LOADING = "LOADING", l.LOADED = "LOADED";
  })(u = e.Action || (e.Action = {}));
  var f = (
    /** @class */
    function(l) {
      n(h, l);
      function h(p, d) {
        return l.call(this, p, c.Group.Modal, c.Group.Modal, d ? d.id : void 0) || this;
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
          var s;
          return a(this, function(v) {
            return s = i.actionWrapper({
              type: p,
              group: c.Group.Modal,
              payload: t({}, d)
            }), this.app.dispatch(s), [
              2
              /*return*/
            ];
          });
        });
      }, h;
    }(o.ActionSet)
  );
  e.ModalContent = f;
})(Ca);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ModalContent = e.Action = void 0;
  var n = Ca;
  Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return n.ModalContent;
  } });
  var t = Ca;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
  function r(a, i) {
    return new n.ModalContent(a, i);
  }
  e.create = r;
})(Rs);
var Ds = {}, qr = {};
(function(e) {
  var n = b && b.__extends || function() {
    var f = function(l, h) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, d) {
        p.__proto__ = d;
      } || function(p, d) {
        for (var s in d)
          Object.prototype.hasOwnProperty.call(d, s) && (p[s] = d[s]);
      }, f(l, h);
    };
    return function(l, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      f(l, h);
      function p() {
        this.constructor = l;
      }
      l.prototype = h === null ? Object.create(h) : (p.prototype = h.prototype, new p());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(f) {
      for (var l, h = 1, p = arguments.length; h < p; h++) {
        l = arguments[h];
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && (f[d] = l[d]);
      }
      return f;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.History = e.replace = e.push = e.Action = void 0;
  var r = ae, a = se, i = ue, o;
  (function(f) {
    f.PUSH = "APP::NAVIGATION::HISTORY::PUSH", f.REPLACE = "APP::NAVIGATION::HISTORY::REPLACE";
  })(o = e.Action || (e.Action = {}));
  function c(f) {
    return r.actionWrapper({
      payload: f,
      group: i.Group.Navigation,
      type: o.PUSH
    });
  }
  e.push = c;
  function y(f) {
    return r.actionWrapper({
      payload: f,
      group: i.Group.Navigation,
      type: o.REPLACE
    });
  }
  e.replace = y;
  var u = (
    /** @class */
    function(f) {
      n(l, f);
      function l(h) {
        return f.call(this, h, "History", i.Group.Navigation) || this;
      }
      return Object.defineProperty(l.prototype, "payload", {
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), l.prototype.dispatch = function(h, p) {
        var d = t(t({}, this.payload), { path: p });
        switch (h) {
          case o.PUSH:
            this.app.dispatch(c(d));
            break;
          case o.REPLACE:
            this.app.dispatch(y(d));
            break;
        }
        return this;
      }, l;
    }(a.ActionSet)
  );
  e.History = u;
})(qr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.replace = e.push = e.Action = e.History = void 0;
  var n = qr;
  Object.defineProperty(e, "History", { enumerable: !0, get: function() {
    return n.History;
  } });
  var t = qr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "push", { enumerable: !0, get: function() {
    return t.push;
  } }), Object.defineProperty(e, "replace", { enumerable: !0, get: function() {
    return t.replace;
  } });
  function r(a) {
    return new n.History(a);
  }
  e.create = r;
})(Ds);
var ci = {}, Zn = {};
(function(e) {
  var n = b && b.__extends || function() {
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
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(S) {
      for (var w, I = 1, C = arguments.length; I < C; I++) {
        w = arguments[I];
        for (var k in w)
          Object.prototype.hasOwnProperty.call(w, k) && (S[k] = w[k]);
      }
      return S;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Redirect = e.isProductVariantResourcePayload = e.isCreateResourcePayload = e.isAdminSection = e.isRemotePayload = e.isAdminSectionPayload = e.isAdminPathPayload = e.isAppPayload = e.getRelativePath = e.normalizeUrl = e.getPathWithSearchAndHash = e.toDestination = e.toApp = e.toRemote = e.toAdminSection = e.toAdminPath = e.isResourcePayload = e.ResourceType = e.Action = void 0;
  var r = ae, a = se, i = ue, o;
  (function(S) {
    S.ADMIN_SECTION = "APP::NAVIGATION::REDIRECT::ADMIN::SECTION", S.ADMIN_PATH = "APP::NAVIGATION::REDIRECT::ADMIN::PATH", S.REMOTE = "APP::NAVIGATION::REDIRECT::REMOTE", S.APP = "APP::NAVIGATION::REDIRECT::APP";
  })(o = e.Action || (e.Action = {})), function(S) {
    S.Product = "products", S.Collection = "collections", S.Order = "orders", S.Customer = "customers", S.Discount = "discounts";
  }(e.ResourceType || (e.ResourceType = {}));
  function c(S) {
    return typeof S.id == "string";
  }
  e.isResourcePayload = c;
  function y(S) {
    return r.actionWrapper({
      payload: S,
      group: i.Group.Navigation,
      type: o.ADMIN_PATH
    });
  }
  e.toAdminPath = y;
  function u(S) {
    return r.actionWrapper({
      payload: S,
      group: i.Group.Navigation,
      type: o.ADMIN_SECTION
    });
  }
  e.toAdminSection = u;
  function f(S) {
    return r.actionWrapper({
      payload: S,
      group: i.Group.Navigation,
      type: o.REMOTE
    });
  }
  e.toRemote = f;
  function l(S) {
    return r.actionWrapper({
      payload: S,
      group: i.Group.Navigation,
      type: o.APP
    });
  }
  e.toApp = l;
  function h(S, w, I) {
    switch (S) {
      case o.APP: {
        var C = v(w) ? w : { path: w };
        return l(t({ id: I }, C));
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
    var w = S.pathname, I = S.search, C = S.hash;
    return "" + w + (I || "") + (C || "");
  }
  e.getPathWithSearchAndHash = p;
  function d(S) {
    return S instanceof URL ? S.toString() : typeof S == "string" ? S : s(S);
  }
  e.normalizeUrl = d;
  function s(S) {
    if (typeof S == "string")
      return S.startsWith("/") ? S : p(new URL(S));
    var w = S.search instanceof URLSearchParams ? S.search.toString() : S.search;
    return p(t(t({}, S), { search: w }));
  }
  e.getRelativePath = s;
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
      n(w, S);
      function w(I) {
        return S.call(this, I, "Redirect", i.Group.Navigation) || this;
      }
      return Object.defineProperty(w.prototype, "payload", {
        get: function() {
          return { id: this.id };
        },
        enumerable: !1,
        configurable: !0
      }), w.prototype.dispatch = function(I, C) {
        var k = h(I, C, this.payload.id);
        return this.app.dispatch(k), this;
      }, w;
    }(a.ActionSet)
  );
  e.Redirect = E;
})(Zn);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.isProductVariantCreateResourcePayload = e.isProductVariantResourcePayload = e.isCreateResourcePayload = e.isAdminSection = e.isRemotePayload = e.isAdminSectionPayload = e.isAdminPathPayload = e.isAppPayload = e.getRelativePath = e.normalizeUrl = e.getPathWithSearchAndHash = e.toDestination = e.toApp = e.toRemote = e.toAdminSection = e.toAdminPath = e.isResourcePayload = e.ResourceType = e.Action = e.Redirect = void 0;
  var n = Zn;
  Object.defineProperty(e, "Redirect", { enumerable: !0, get: function() {
    return n.Redirect;
  } }), Object.defineProperty(e, "isCreateResourcePayload", { enumerable: !0, get: function() {
    return n.isCreateResourcePayload;
  } }), Object.defineProperty(e, "isProductVariantResourcePayload", { enumerable: !0, get: function() {
    return n.isProductVariantResourcePayload;
  } });
  var t = Zn;
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
  function r(i) {
    return n.isProductVariantResourcePayload(i) ? n.isCreateResourcePayload(i.variant) : !1;
  }
  e.isProductVariantCreateResourcePayload = r;
  function a(i) {
    return new n.Redirect(i);
  }
  e.create = a;
})(ci);
var si = {}, ks = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.app = e.Action = void 0;
  var n = ae, t = ue, r;
  (function(i) {
    i.APP = "APP::PRINT::APP";
  })(r = e.Action || (e.Action = {}));
  function a() {
    return n.actionWrapper({
      group: t.Group.Print,
      type: r.APP
    });
  }
  e.app = a;
})(ks);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.app = e.Action = void 0;
  var n = ks;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "app", { enumerable: !0, get: function() {
    return n.app;
  } });
})(si);
var po = {}, Wr = {};
(function(e) {
  var n = b && b.__extends || function() {
    var s = function(v, m) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, O) {
        g.__proto__ = O;
      } || function(g, O) {
        for (var _ in O)
          Object.prototype.hasOwnProperty.call(O, _) && (g[_] = O[_]);
      }, s(v, m);
    };
    return function(v, m) {
      if (typeof m != "function" && m !== null)
        throw new TypeError("Class extends value " + String(m) + " is not a constructor or null");
      s(v, m);
      function g() {
        this.constructor = v;
      }
      v.prototype = m === null ? Object.create(m) : (g.prototype = m.prototype, new g());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(s) {
      for (var v, m = 1, g = arguments.length; m < g; m++) {
        v = arguments[m];
        for (var O in v)
          Object.prototype.hasOwnProperty.call(v, O) && (s[O] = v[O]);
      }
      return s;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ResourcePicker = e.update = e.close = e.cancel = e.open = e.select = e.ActionVerb = e.ResourceType = e.ProductStatus = e.ProductVariantInventoryManagement = e.ProductVariantInventoryPolicy = e.WeightUnit = e.FulfillmentServiceType = e.CollectionSortOrder = e.Action = void 0;
  var r = ae, a = se, i = ue, o;
  (function(s) {
    s.OPEN = "APP::RESOURCE_PICKER::OPEN", s.SELECT = "APP::RESOURCE_PICKER::SELECT", s.CLOSE = "APP::RESOURCE_PICKER::CLOSE", s.UPDATE = "APP::RESOURCE_PICKER::UPDATE", s.CANCEL = "APP::RESOURCE_PICKER::CANCEL";
  })(o = e.Action || (e.Action = {})), function(s) {
    s.Manual = "MANUAL", s.BestSelling = "BEST_SELLING", s.AlphaAsc = "ALPHA_ASC", s.AlphaDesc = "ALPHA_DESC", s.PriceDesc = "PRICE_DESC", s.PriceAsc = "PRICE_ASC", s.CreatedDesc = "CREATED_DESC", s.Created = "CREATED", s.MostRelevant = "MOST_RELEVANT";
  }(e.CollectionSortOrder || (e.CollectionSortOrder = {})), function(s) {
    s.GiftCard = "GIFT_CARD", s.Manual = "MANUAL", s.ThirdParty = "THIRD_PARTY";
  }(e.FulfillmentServiceType || (e.FulfillmentServiceType = {})), function(s) {
    s.Kilograms = "KILOGRAMS", s.Grams = "GRAMS", s.Pounds = "POUNDS", s.Ounces = "OUNCES";
  }(e.WeightUnit || (e.WeightUnit = {})), function(s) {
    s.Deny = "DENY", s.Continue = "CONTINUE";
  }(e.ProductVariantInventoryPolicy || (e.ProductVariantInventoryPolicy = {})), function(s) {
    s.Shopify = "SHOPIFY", s.NotManaged = "NOT_MANAGED", s.FulfillmentService = "FULFILLMENT_SERVICE";
  }(e.ProductVariantInventoryManagement || (e.ProductVariantInventoryManagement = {})), function(s) {
    s.Active = "ACTIVE", s.Archived = "ARCHIVED", s.Draft = "DRAFT";
  }(e.ProductStatus || (e.ProductStatus = {}));
  var c;
  (function(s) {
    s.Product = "product", s.ProductVariant = "variant", s.Collection = "collection";
  })(c = e.ResourceType || (e.ResourceType = {}));
  var y;
  (function(s) {
    s.Add = "add", s.Select = "select";
  })(y = e.ActionVerb || (e.ActionVerb = {}));
  function u(s) {
    return r.actionWrapper({
      payload: s,
      group: i.Group.ResourcePicker,
      type: o.SELECT
    });
  }
  e.select = u;
  function f(s) {
    return r.actionWrapper({
      payload: s,
      group: i.Group.ResourcePicker,
      type: o.OPEN
    });
  }
  e.open = f;
  function l(s) {
    return r.actionWrapper({
      payload: s,
      group: i.Group.ResourcePicker,
      type: o.CANCEL
    });
  }
  e.cancel = l;
  function h(s) {
    return r.actionWrapper({
      payload: s,
      group: i.Group.ResourcePicker,
      type: o.CANCEL
    });
  }
  e.close = h;
  function p(s) {
    return r.actionWrapper({
      payload: s,
      group: i.Group.ResourcePicker,
      type: o.UPDATE
    });
  }
  e.update = p;
  var d = (
    /** @class */
    function(s) {
      n(v, s);
      function v(m, g, O) {
        var _ = s.call(this, m, i.Group.ResourcePicker, i.Group.ResourcePicker) || this;
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
          if (this.resourceType === c.Product) {
            var g = t(t({}, m), { showVariants: this.showVariants, showDraft: this.showDraft, showArchived: this.showArchived, showDraftBadge: this.showDraftBadge, showArchivedBadge: this.showArchivedBadge });
            return g;
          }
          return m;
        },
        enumerable: !1,
        configurable: !0
      }), v.prototype.set = function(m, g) {
        g === void 0 && (g = !0);
        var O = r.getMergedProps(this.options, m), _ = O.initialQuery, T = O.initialSelectionIds, P = T === void 0 ? [] : T, E = O.showHidden, S = E === void 0 ? !0 : E, w = O.showVariants, I = w === void 0 ? !0 : w, C = O.showDraft, k = C === void 0 ? !0 : C, B = O.showArchived, D = B === void 0 ? !0 : B, U = O.showDraftBadge, q = U === void 0 ? !1 : U, L = O.showArchivedBadge, J = L === void 0 ? !1 : L, fe = O.selectMultiple, W = fe === void 0 ? !0 : fe, ge = O.actionVerb, H = ge === void 0 ? y.Add : ge;
        return this.initialQuery = _, this.initialSelectionIds = P, this.showHidden = S, this.showVariants = I, this.showDraft = k, this.showArchived = D, this.showDraftBadge = q, this.showArchivedBadge = J, this.selectMultiple = W, this.actionVerb = H, g && this.update(), this;
      }, v.prototype.dispatch = function(m, g) {
        return m === o.OPEN ? this.open() : m === o.UPDATE ? this.update() : m === o.CLOSE || m === o.CANCEL ? this.cancel() : m === o.SELECT && (this.selection = g, this.app.dispatch(u({ id: this.id, selection: this.selection }))), this;
      }, v.prototype.update = function() {
        this.app.dispatch(p(this.payload));
      }, v.prototype.open = function() {
        this.app.dispatch(f(this.payload));
      }, v.prototype.cancel = function() {
        this.app.dispatch(l({ id: this.id }));
      }, v.prototype.close = function() {
        this.cancel();
      }, v;
    }(a.ActionSet)
  );
  e.ResourcePicker = d;
})(Wr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ResourcePicker = e.WeightUnit = e.update = e.select = e.ResourceType = e.ProductVariantInventoryPolicy = e.ProductVariantInventoryManagement = e.ProductStatus = e.open = e.FulfillmentServiceType = e.CollectionSortOrder = e.close = e.cancel = e.ActionVerb = e.Action = void 0;
  var n = Wr;
  Object.defineProperty(e, "ResourcePicker", { enumerable: !0, get: function() {
    return n.ResourcePicker;
  } });
  var t = Wr;
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
  var r = function(a, i) {
    var o = i.resourceType, c = i.options, y = c === void 0 ? {} : c;
    return new n.ResourcePicker(a, y, o);
  };
  e.create = r;
})(po);
var ho = {}, Bs = {};
(function(e) {
  var n = b && b.__extends || function() {
    var u = function(f, l) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, p) {
        h.__proto__ = p;
      } || function(h, p) {
        for (var d in p)
          Object.prototype.hasOwnProperty.call(p, d) && (h[d] = p[d]);
      }, u(f, l);
    };
    return function(f, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      u(f, l);
      function h() {
        this.constructor = f;
      }
      f.prototype = l === null ? Object.create(l) : (h.prototype = l.prototype, new h());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.capture = e.openCamera = e.Scanner = e.Action = void 0;
  var t = ae, r = se, a = ue, i;
  (function(u) {
    u.OPEN_CAMERA = "APP::SCANNER::OPEN::CAMERA", u.CAPTURE = "APP::SCANNER::CAPTURE";
  })(i = e.Action || (e.Action = {}));
  var o = (
    /** @class */
    function(u) {
      n(f, u);
      function f(l, h) {
        return u.call(this, l, a.Group.Scanner, a.Group.Scanner, h ? h.id : void 0) || this;
      }
      return f.prototype.dispatch = function(l) {
        switch (l) {
          case i.OPEN_CAMERA:
            this.dispatchScannerAction(i.OPEN_CAMERA);
            break;
        }
        return this;
      }, f.prototype.dispatchScannerAction = function(l) {
        this.app.dispatch(t.actionWrapper({
          type: l,
          group: a.Group.Scanner,
          payload: {
            id: this.id
          }
        }));
      }, f;
    }(r.ActionSet)
  );
  e.Scanner = o;
  function c() {
    return t.actionWrapper({
      group: a.Group.Scanner,
      type: i.OPEN_CAMERA
    });
  }
  e.openCamera = c;
  function y(u) {
    return t.actionWrapper({
      group: a.Group.Scanner,
      type: i.CAPTURE,
      payload: u
    });
  }
  e.capture = y;
})(Bs);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.capture = e.openCamera = e.Scanner = e.Action = void 0;
  var n = Bs;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "Scanner", { enumerable: !0, get: function() {
    return n.Scanner;
  } }), Object.defineProperty(e, "openCamera", { enumerable: !0, get: function() {
    return n.openCamera;
  } }), Object.defineProperty(e, "capture", { enumerable: !0, get: function() {
    return n.capture;
  } });
  function t(r, a) {
    return new n.Scanner(r, a);
  }
  e.create = t;
})(ho);
var yo = {}, Ls = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.request = e.Action = void 0;
  var n = ae, t = ue, r;
  (function(o) {
    o.REQUEST = "APP::SESSION_TOKEN::REQUEST", o.RESPOND = "APP::SESSION_TOKEN::RESPOND";
  })(r = e.Action || (e.Action = {}));
  function a() {
    return n.actionWrapper({
      group: t.Group.SessionToken,
      type: r.REQUEST
    });
  }
  e.request = a;
  function i(o) {
    return n.actionWrapper({
      payload: o,
      group: t.Group.SessionToken,
      type: r.RESPOND
    });
  }
  e.respond = i;
})(Ls);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.request = e.Action = void 0;
  var n = Ls;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "request", { enumerable: !0, get: function() {
    return n.request;
  } }), Object.defineProperty(e, "respond", { enumerable: !0, get: function() {
    return n.respond;
  } });
})(yo);
var vo = {}, Hr = {}, li = {};
Object.defineProperty(li, "__esModule", { value: !0 });
li.getGroupedButton = void 0;
var my = zt;
function gy(e, n, t, r) {
  e.addChild(n, e.group, t);
  var a = n.id, i = n.label, o = n.disabled, c = n.buttons, y = n.plain;
  return e.subscribeToChild(n, my.Action.UPDATE, r), { id: a, label: i, buttons: c, disabled: o, plain: y };
}
li.getGroupedButton = gy;
(function(e) {
  var n = b && b.__extends || function() {
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
  var r = se, a = It, i = zt, o = li, c = Qt, y = ae, u = ue, f;
  (function(m) {
    m.UPDATE = "APP::TITLEBAR::UPDATE", m.BUTTON_CLICK = "APP::TITLEBAR::BUTTONS::BUTTON::CLICK", m.BUTTON_UPDATE = "APP::TITLEBAR::BUTTONS::BUTTON::UPDATE", m.BUTTON_GROUP_UPDATE = "APP::TITLEBAR::BUTTONS::BUTTONGROUP::UPDATE", m.BREADCRUMBS_CLICK = "APP::TITLEBAR::BREADCRUMBS::BUTTON::CLICK", m.BREADCRUMBS_UPDATE = "APP::TITLEBAR::BREADCRUMBS::BUTTON::UPDATE";
  })(f = e.Action || (e.Action = {}));
  var l = {
    group: u.Group.TitleBar,
    subgroups: ["Buttons"]
  }, h = {
    group: u.Group.TitleBar,
    subgroups: ["Breadcrumbs"],
    type: u.ComponentType.Button
  };
  function p(m, g) {
    var O = u.ComponentType.Button, _ = t({ id: m, type: O }, l);
    return a.clickButton(u.Group.TitleBar, _, g);
  }
  e.clickActionButton = p;
  function d(m, g) {
    var O = t({ id: m }, h);
    return a.clickButton(u.Group.TitleBar, O, g);
  }
  e.clickBreadcrumb = d;
  function s(m) {
    return y.actionWrapper({
      payload: m,
      group: u.Group.TitleBar,
      type: f.UPDATE
    });
  }
  e.update = s;
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
        var T = y.getMergedProps(this.options, O), P = T.title, E = T.buttons, S = T.breadcrumbs;
        return this.title = P, this.setBreadcrumbs(S), this.setPrimaryButton(E ? E.primary : void 0), this.setSecondaryButton(E ? E.secondary : void 0), _ && this.dispatch(f.UPDATE), this;
      }, g.prototype.dispatch = function(O) {
        switch (O) {
          case f.UPDATE:
            this.app.dispatch(s(this.payload));
            break;
        }
        return this;
      }, g.prototype.getButton = function(O, _, T) {
        return O instanceof i.ButtonGroup ? o.getGroupedButton(this, O, _, T) : c.getSingleButton(this, O, _, T);
      }, g.prototype.updatePrimaryButton = function(O) {
        this.primary && y.updateActionFromPayload(this.primary, O) && this.dispatch(f.UPDATE);
      }, g.prototype.updateSecondaryButtons = function(O) {
        if (this.secondary) {
          var _ = this.secondary.find(function(P) {
            return P.id === O.id;
          });
          if (_) {
            var T = !1;
            i.isGroupedButtonPayload(O), T = y.updateActionFromPayload(_, O), T && this.dispatch(f.UPDATE);
          }
        }
      }, g.prototype.updateBreadcrumbButton = function(O) {
        this.breadcrumb && y.updateActionFromPayload(this.breadcrumb, O) && this.dispatch(f.UPDATE);
      }, g.prototype.setPrimaryButton = function(O) {
        this.primaryOptions = this.getChildButton(O, this.primaryOptions), this.primary = this.primaryOptions ? this.getButton(this.primaryOptions, l.subgroups, this.updatePrimaryButton) : void 0;
      }, g.prototype.setSecondaryButton = function(O) {
        var _ = this, T = O || [], P = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(T, P), this.secondary = this.secondaryOptions ? this.secondaryOptions.map(function(E) {
          return _.getButton(E, l.subgroups, _.updateSecondaryButtons);
        }) : void 0;
      }, g.prototype.setBreadcrumbs = function(O) {
        this.breadcrumbsOption = this.getChildButton(O, this.breadcrumbsOption), this.breadcrumb = this.breadcrumbsOption ? this.getButton(this.breadcrumbsOption, h.subgroups, this.updateBreadcrumbButton) : void 0;
      }, g.prototype.getChildButton = function(O, _) {
        var T = O ? [O] : [], P = _ ? [_] : [], E = this.getUpdatedChildActions(T, P);
        return E ? E[0] : void 0;
      }, g;
    }(r.ActionSetWithChildren)
  );
  e.TitleBar = v;
})(Hr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.TitleBar = e.update = e.clickBreadcrumb = e.clickActionButton = e.Action = void 0;
  var n = Hr;
  Object.defineProperty(e, "TitleBar", { enumerable: !0, get: function() {
    return n.TitleBar;
  } });
  var t = Hr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "clickActionButton", { enumerable: !0, get: function() {
    return t.clickActionButton;
  } }), Object.defineProperty(e, "clickBreadcrumb", { enumerable: !0, get: function() {
    return t.clickBreadcrumb;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  function r(a, i) {
    return new n.TitleBar(a, i);
  }
  e.create = r;
})(vo);
var mo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Toast = e.primaryAction = e.clear = e.show = e.Action = void 0;
  var n = Jn;
  Object.defineProperty(e, "Toast", { enumerable: !0, get: function() {
    return n.Toast;
  } });
  var t = Jn;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return t.show;
  } }), Object.defineProperty(e, "clear", { enumerable: !0, get: function() {
    return t.clear;
  } }), Object.defineProperty(e, "primaryAction", { enumerable: !0, get: function() {
    return t.primaryAction;
  } });
  function r(a, i) {
    return new n.Toast(a, i);
  }
  e.create = r;
})(mo);
var go = {}, bo = {};
(function(e) {
  var n = b && b.__extends || function() {
    var d = function(s, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
      }, d(s, v);
    };
    return function(s, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      d(s, v);
      function m() {
        this.constructor = s;
      }
      s.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(d) {
      for (var s, v = 1, m = arguments.length; v < m; v++) {
        s = arguments[v];
        for (var g in s)
          Object.prototype.hasOwnProperty.call(s, g) && (d[g] = s[g]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ContextualSaveBar = e.update = e.discard = e.save = e.hide = e.show = e.Action = void 0;
  var r = ae, a = se, i = ue, o;
  (function(d) {
    d.DISCARD = "APP::CONTEXTUAL_SAVE_BAR::DISCARD", d.SAVE = "APP::CONTEXTUAL_SAVE_BAR::SAVE", d.SHOW = "APP::CONTEXTUAL_SAVE_BAR::SHOW", d.HIDE = "APP::CONTEXTUAL_SAVE_BAR::HIDE", d.UPDATE = "APP::CONTEXTUAL_SAVE_BAR::UPDATE";
  })(o = e.Action || (e.Action = {}));
  function c(d, s) {
    return r.actionWrapper({
      group: i.Group.ContextualSaveBar,
      type: d,
      payload: s
    });
  }
  function y(d) {
    return c(o.SHOW, d);
  }
  e.show = y;
  function u(d) {
    return c(o.HIDE, d);
  }
  e.hide = u;
  function f(d) {
    return c(o.SAVE, d);
  }
  e.save = f;
  function l(d) {
    return c(o.DISCARD, d);
  }
  e.discard = l;
  function h(d) {
    return c(o.UPDATE, d);
  }
  e.update = h;
  var p = (
    /** @class */
    function(d) {
      n(s, d);
      function s(v, m) {
        m === void 0 && (m = {});
        var g = d.call(this, v, i.Group.ContextualSaveBar, i.Group.ContextualSaveBar) || this;
        return g.options = m, g.set(m, !1), g;
      }
      return Object.defineProperty(s.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return t({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = r.getMergedProps(this.options, v);
        return this.options = g, m && this.dispatch(o.UPDATE), this;
      }, s.prototype.dispatch = function(v) {
        return this.app.dispatch(c(v, this.payload)), this;
      }, s;
    }(a.ActionSet)
  );
  e.ContextualSaveBar = p;
})(bo);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ContextualSaveBar = e.update = e.discard = e.save = e.hide = e.show = e.Action = void 0;
  var n = bo;
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
  function t(r, a) {
    return new n.ContextualSaveBar(r, a);
  }
  e.create = t;
})(go);
var Fs = {}, Ma = {};
(function(e) {
  var n = b && b.__extends || function() {
    var f = function(l, h) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, d) {
        p.__proto__ = d;
      } || function(p, d) {
        for (var s in d)
          Object.prototype.hasOwnProperty.call(d, s) && (p[s] = d[s]);
      }, f(l, h);
    };
    return function(l, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      f(l, h);
      function p() {
        this.constructor = l;
      }
      l.prototype = h === null ? Object.create(h) : (p.prototype = h.prototype, new p());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(f) {
      for (var l, h = 1, p = arguments.length; h < p; h++) {
        l = arguments[h];
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && (f[d] = l[d]);
      }
      return f;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.close = e.show = e.Share = e.Action = void 0;
  var r = ue, a = ae, i = se, o;
  (function(f) {
    f.SHOW = "APP::SHARE::SHOW", f.CLOSE = "APP::SHARE::CLOSE";
  })(o = e.Action || (e.Action = {}));
  var c = (
    /** @class */
    function(f) {
      n(l, f);
      function l(h) {
        return f.call(this, h, r.Group.Share, r.Group.Share) || this;
      }
      return l.prototype.dispatch = function(h, p) {
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
      }, l.prototype.dispatchShareAction = function(h, p) {
        this.app.dispatch(a.actionWrapper({
          type: h,
          group: r.Group.Share,
          payload: t({ id: this.id }, p)
        }));
      }, l;
    }(i.ActionSet)
  );
  e.Share = c;
  function y() {
    return a.actionWrapper({
      group: r.Group.Share,
      type: o.SHOW
    });
  }
  e.show = y;
  function u(f) {
    return a.actionWrapper({
      group: r.Group.Share,
      type: o.CLOSE,
      payload: f
    });
  }
  e.close = u;
})(Ma);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Share = e.close = e.show = e.Action = void 0;
  var n = Ma;
  Object.defineProperty(e, "Share", { enumerable: !0, get: function() {
    return n.Share;
  } });
  var t = Ma;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return t.show;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return t.close;
  } });
  function r(a) {
    return new n.Share(a);
  }
  e.create = r;
})(Fs);
var _o = {}, zr = {}, On = {};
(function(e) {
  var n = b && b.__extends || function() {
    var f = function(l, h) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, d) {
        p.__proto__ = d;
      } || function(p, d) {
        for (var s in d)
          Object.prototype.hasOwnProperty.call(d, s) && (p[s] = d[s]);
      }, f(l, h);
    };
    return function(l, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      f(l, h);
      function p() {
        this.constructor = l;
      }
      l.prototype = h === null ? Object.create(h) : (p.prototype = h.prototype, new p());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(f) {
      for (var l, h = 1, p = arguments.length; h < p; h++) {
        l = arguments[h];
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && (f[d] = l[d]);
      }
      return f;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.AppLink = e.update = e.Action = void 0;
  var r = ae, a = se, i = ue, o = Zn, c;
  (function(f) {
    f.UPDATE = "UPDATE";
  })(c = e.Action || (e.Action = {}));
  function y(f, l, h) {
    var p = l.id, d = h.label, s = h.destination, v = t(t({}, h), { id: p, label: d, destination: s });
    return r.actionWrapper({
      group: f,
      type: r.getEventNameSpace(f, c.UPDATE, l),
      payload: v
    });
  }
  e.update = y;
  var u = (
    /** @class */
    function(f) {
      n(l, f);
      function l(h, p) {
        var d = f.call(this, h, i.Group.Link, i.Group.Link) || this;
        return d.label = "", d.destination = "", d.set(p, !1), d;
      }
      return Object.defineProperty(l.prototype, "options", {
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
      }), Object.defineProperty(l.prototype, "payload", {
        get: function() {
          var h = this.options, p = h.label, d = h.destination, s = h.redirectType, v = d;
          return {
            id: this.id,
            label: p,
            destination: { path: v },
            redirectType: s
          };
        },
        enumerable: !1,
        configurable: !0
      }), l.prototype.set = function(h, p) {
        p === void 0 && (p = !0);
        var d = r.getMergedProps(this.options, h), s = d.label, v = d.destination;
        return this.label = s, this.destination = v, p && this.dispatch(c.UPDATE), this;
      }, l.prototype.dispatch = function(h) {
        switch (h) {
          case c.UPDATE: {
            var p = y(this.group, this.component, this.payload);
            this.app.dispatch(p);
            break;
          }
        }
        return this;
      }, l;
    }(a.ActionSet)
  );
  e.AppLink = u;
})(On);
(function(e) {
  var n = b && b.__extends || function() {
    var l = function(h, p) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, s) {
        d.__proto__ = s;
      } || function(d, s) {
        for (var v in s)
          Object.prototype.hasOwnProperty.call(s, v) && (d[v] = s[v]);
      }, l(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      l(h, p);
      function d() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (d.prototype = p.prototype, new d());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(l) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var s in h)
          Object.prototype.hasOwnProperty.call(h, s) && (l[s] = h[s]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.NavigationMenu = e.update = e.Action = void 0;
  var r = On, a = ae, i = se, o = ue, c = ["Navigation_Menu"], y;
  (function(l) {
    l.UPDATE = "APP::MENU::NAVIGATION_MENU::UPDATE", l.LINK_UPDATE = "APP::MENU::NAVIGATION_MENU::LINK::UPDATE";
  })(y = e.Action || (e.Action = {}));
  function u(l) {
    return a.actionWrapper({
      payload: l,
      group: o.Group.Menu,
      type: y.UPDATE
    });
  }
  e.update = u;
  var f = (
    /** @class */
    function(l) {
      n(h, l);
      function h(p, d) {
        var s = l.call(this, p, "Navigation_Menu", o.Group.Menu) || this;
        return s.items = [], s.set(d), s;
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
        var s = a.getMergedProps(this.options, p), v = s.items, m = s.active;
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
          var d = this.items.find(function(s) {
            return s.id === p.id;
          });
          d && a.updateActionFromPayload(d, p) && this.dispatch(y.UPDATE);
        }
      }, h.prototype.setItems = function(p) {
        var d = this, s = p || [], v = this.itemsOptions || [];
        this.itemsOptions = this.getUpdatedChildActions(s, v), this.items = this.itemsOptions ? this.itemsOptions.map(function(m) {
          return d.addChild(m, d.group, c), d.subscribeToChild(m, r.Action.UPDATE, d.updateItem), m.payload;
        }) : [];
      }, h;
    }(i.ActionSetWithChildren)
  );
  e.NavigationMenu = f;
})(zr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.NavigationMenu = e.update = e.Action = void 0;
  var n = zr;
  Object.defineProperty(e, "NavigationMenu", { enumerable: !0, get: function() {
    return n.NavigationMenu;
  } });
  var t = zr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  function r(a, i) {
    return new n.NavigationMenu(a, i);
  }
  e.create = r;
})(_o);
var Us = {}, Kr = {};
(function(e) {
  var n = b && b.__extends || function() {
    var l = function(h, p) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, s) {
        d.__proto__ = s;
      } || function(d, s) {
        for (var v in s)
          Object.prototype.hasOwnProperty.call(s, v) && (d[v] = s[v]);
      }, l(h, p);
    };
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      l(h, p);
      function d() {
        this.constructor = h;
      }
      h.prototype = p === null ? Object.create(p) : (d.prototype = p.prototype, new d());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(l) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var s in h)
          Object.prototype.hasOwnProperty.call(h, s) && (l[s] = h[s]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ChannelMenu = e.update = e.Action = void 0;
  var r = On, a = ae, i = se, o = ue, c = ["Channel_Menu"], y;
  (function(l) {
    l.UPDATE = "APP::MENU::CHANNEL_MENU::UPDATE", l.LINK_UPDATE = "APP::MENU::CHANNEL_MENU::LINK::UPDATE";
  })(y = e.Action || (e.Action = {}));
  function u(l) {
    return a.actionWrapper({
      payload: l,
      group: o.Group.Menu,
      type: y.UPDATE
    });
  }
  e.update = u;
  var f = (
    /** @class */
    function(l) {
      n(h, l);
      function h(p, d) {
        var s = l.call(this, p, "Channel_Menu", o.Group.Menu) || this;
        return s.items = [], s.set(d), s;
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
        var s = a.getMergedProps(this.options, p), v = s.items, m = s.active;
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
          var d = this.items.find(function(s) {
            return s.id === p.id;
          });
          d && a.updateActionFromPayload(d, p) && this.dispatch(y.UPDATE);
        }
      }, h.prototype.setItems = function(p) {
        var d = this, s = p || [], v = this.itemsOptions || [];
        this.itemsOptions = this.getUpdatedChildActions(s, v), this.items = this.itemsOptions ? this.itemsOptions.map(function(m) {
          return d.addChild(m, d.group, c), d.subscribeToChild(m, r.Action.UPDATE, d.updateItem), m.payload;
        }) : [];
      }, h;
    }(i.ActionSetWithChildren)
  );
  e.ChannelMenu = f;
})(Kr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ChannelMenu = e.update = e.Action = void 0;
  var n = Kr;
  Object.defineProperty(e, "ChannelMenu", { enumerable: !0, get: function() {
    return n.ChannelMenu;
  } });
  var t = Kr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  function r(a, i) {
    return new n.ChannelMenu(a, i);
  }
  e.create = r;
})(Us);
var Oo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.AppLink = e.update = e.Action = void 0;
  var n = On;
  Object.defineProperty(e, "AppLink", { enumerable: !0, get: function() {
    return n.AppLink;
  } });
  var t = On;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return t.update;
  } });
  function r(a, i) {
    return new n.AppLink(a, i);
  }
  e.create = r;
})(Oo);
var Vs = {}, Na = {};
(function(e) {
  var n = b && b.__extends || function() {
    var y = function(u, f) {
      return y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, h) {
        l.__proto__ = h;
      } || function(l, h) {
        for (var p in h)
          Object.prototype.hasOwnProperty.call(h, p) && (l[p] = h[p]);
      }, y(u, f);
    };
    return function(u, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      y(u, f);
      function l() {
        this.constructor = u;
      }
      u.prototype = f === null ? Object.create(f) : (l.prototype = f.prototype, new l());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Pos = e.close = e.Action = void 0;
  var t = ae, r = se, a = ue, i;
  (function(y) {
    y.CLOSE = "APP::POS::CLOSE", y.LOCATION_UPDATE = "APP::POS::LOCATION::UPDATE", y.USER_UPDATE = "APP::POS::USER::UPDATE", y.DEVICE_UPDATE = "APP::POS::DEVICE::UPDATE";
  })(i = e.Action || (e.Action = {}));
  function o() {
    return t.actionWrapper({
      group: a.Group.Pos,
      type: i.CLOSE
    });
  }
  e.close = o;
  var c = (
    /** @class */
    function(y) {
      n(u, y);
      function u(f) {
        return y.call(this, f, a.Group.Pos, a.Group.Pos) || this;
      }
      return u.prototype.dispatch = function(f) {
        switch (f) {
          case i.CLOSE:
            this.app.dispatch(o());
            break;
        }
        return this;
      }, u;
    }(r.ActionSet)
  );
  e.Pos = c;
})(Na);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Pos = e.close = e.Action = void 0;
  var n = Na;
  Object.defineProperty(e, "Pos", { enumerable: !0, get: function() {
    return n.Pos;
  } });
  var t = Na;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return t.close;
  } });
  function r(a) {
    return new n.Pos(a);
  }
  e.create = r;
})(Vs);
var $s = {}, Gs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(n) {
    n.UPDATE = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::UPDATE", n.BUTTON_CLICK = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::CLICK", n.BUTTON_UPDATE = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::UPDATE";
  }(e.Action || (e.Action = {}));
})(Gs);
var qs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getSingleButton = void 0;
  var n = Qt;
  Object.defineProperty(e, "getSingleButton", { enumerable: !0, get: function() {
    return n.getSingleButton;
  } });
})(qs);
var Ws = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.unsubscribeActions = e.ActionSetWithChildren = e.ActionSet = void 0;
  var n = se;
  Object.defineProperty(e, "ActionSet", { enumerable: !0, get: function() {
    return n.ActionSet;
  } }), Object.defineProperty(e, "ActionSetWithChildren", { enumerable: !0, get: function() {
    return n.ActionSetWithChildren;
  } }), Object.defineProperty(e, "unsubscribeActions", { enumerable: !0, get: function() {
    return n.unsubscribeActions;
  } });
})(Ws);
(function(e) {
  var n = b && b.__extends || function() {
    var d = function(s, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
      }, d(s, v);
    };
    return function(s, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      d(s, v);
      function m() {
        this.constructor = s;
      }
      s.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(d) {
      for (var s, v = 1, m = arguments.length; v < m; v++) {
        s = arguments[v];
        for (var g in s)
          Object.prototype.hasOwnProperty.call(s, g) && (d[g] = s[g]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.MarketingExternalActivityTopBar = e.update = e.clickActionButton = e.MarketingActivityStatusBadgeType = e.Action = void 0;
  var r = Gs;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } });
  var a = ir, i = qs, o = Rt, c = Ws, y = Dt;
  (function(d) {
    d.Default = "DEFAULT", d.Success = "SUCCESS", d.Attention = "ATTENTION", d.Warning = "WARNING", d.Info = "INFO";
  })(e.MarketingActivityStatusBadgeType || (e.MarketingActivityStatusBadgeType = {}));
  var u = {
    group: y.Group.MarketingExternalActivityTopBar,
    subgroups: ["Buttons"]
  };
  function f(d, s) {
    var v = y.ComponentType.Button, m = t({ id: d, type: v }, u);
    return a.clickButton(y.Group.MarketingExternalActivityTopBar, m, s);
  }
  e.clickActionButton = f;
  function l(d) {
    return o.actionWrapper({
      payload: d,
      group: y.Group.MarketingExternalActivityTopBar,
      type: r.Action.UPDATE
    });
  }
  e.update = l;
  var h = (
    /** @class */
    function(d) {
      n(s, d);
      function s(v, m) {
        var g = d.call(this, v, y.Group.MarketingExternalActivityTopBar, y.Group.MarketingExternalActivityTopBar) || this;
        return g.set(m), g;
      }
      return Object.defineProperty(s.prototype, "buttons", {
        get: function() {
          if (!(!this.primary && !this.secondary))
            return {
              primary: this.primary,
              secondary: this.secondary
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(s.prototype, "buttonsOptions", {
        get: function() {
          if (!(!this.primaryOptions && !this.secondaryOptions))
            return {
              primary: this.primaryOptions,
              secondary: this.secondaryOptions
            };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(s.prototype, "options", {
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
      }), Object.defineProperty(s.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = o.getMergedProps(this.options, v), O = g.title, _ = g.buttons, T = g.saved, P = g.saving, E = g.status;
        return this.title = O, this.saving = P, this.saved = T, this.status = E, this.setPrimaryButton(_ ? _.primary : void 0), this.setSecondaryButtons(_ ? _.secondary : void 0), m && this.dispatch(r.Action.UPDATE), this;
      }, s.prototype.dispatch = function(v) {
        switch (v) {
          case r.Action.UPDATE:
            this.app.dispatch(l(this.payload));
            break;
        }
        return this;
      }, s.prototype.getButton = function(v, m, g) {
        return i.getSingleButton(this, v, m, g);
      }, s.prototype.updatePrimaryButton = function(v) {
        this.primary && o.updateActionFromPayload(this.primary, v) && this.dispatch(r.Action.UPDATE);
      }, s.prototype.updateSecondaryButtons = function(v) {
        if (this.secondary) {
          var m = this.secondary.find(function(O) {
            return O.id === v.id;
          });
          if (m) {
            var g = o.updateActionFromPayload(m, v);
            g && this.dispatch(r.Action.UPDATE);
          }
        }
      }, s.prototype.setPrimaryButton = function(v) {
        this.primaryOptions = this.getChildButton(v, this.primaryOptions), this.primary = this.primaryOptions ? this.getButton(this.primaryOptions, u.subgroups, this.updatePrimaryButton) : void 0;
      }, s.prototype.setSecondaryButtons = function(v) {
        var m = this, g = v || [], O = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(g, O), this.secondary = this.secondaryOptions ? this.secondaryOptions.map(function(_) {
          return m.getButton(_, u.subgroups, m.updateSecondaryButtons);
        }) : void 0;
      }, s.prototype.updateSaving = function(v) {
        this.saving = v, this.dispatch(r.Action.UPDATE);
      }, s.prototype.updateSaved = function(v) {
        this.saved = v, this.dispatch(r.Action.UPDATE);
      }, s.prototype.updateStatus = function(v) {
        this.status = v, this.dispatch(r.Action.UPDATE);
      }, s.prototype.getChildButton = function(v, m) {
        var g = v ? [v] : [], O = m ? [m] : [], _ = this.getUpdatedChildActions(g, O);
        return _ ? _[0] : void 0;
      }, s;
    }(c.ActionSetWithChildren)
  );
  e.MarketingExternalActivityTopBar = h;
  function p(d, s) {
    return new h(d, s);
  }
  e.create = p;
})($s);
var Hs = {}, zs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fullPageLoad = e.skeletonPageLoad = e.Action = void 0;
  var n = ue, t = ae, r;
  (function(o) {
    o.SKELETON_PAGE_LOAD = "APP::PERFORMANCE::SKELETON_PAGE_LOAD", o.FULL_PAGE_LOAD = "APP::PERFORMANCE::FULL_PAGE_LOAD";
  })(r = e.Action || (e.Action = {}));
  function a() {
    return t.actionWrapper({
      group: n.Group.Performance,
      type: r.SKELETON_PAGE_LOAD
    });
  }
  e.skeletonPageLoad = a;
  function i() {
    return t.actionWrapper({
      group: n.Group.Performance,
      type: r.FULL_PAGE_LOAD
    });
  }
  e.fullPageLoad = i;
})(zs);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fullPageLoad = e.skeletonPageLoad = e.Action = void 0;
  var n = zs;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "skeletonPageLoad", { enumerable: !0, get: function() {
    return n.skeletonPageLoad;
  } }), Object.defineProperty(e, "fullPageLoad", { enumerable: !0, get: function() {
    return n.fullPageLoad;
  } });
})(Hs);
var Ks = {}, Qr = {};
(function(e) {
  var n = b && b.__extends || function() {
    var d = function(s, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
      }, d(s, v);
    };
    return function(s, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      d(s, v);
      function m() {
        this.constructor = s;
      }
      s.prototype = v === null ? Object.create(v) : (m.prototype = v.prototype, new m());
    };
  }(), t = b && b.__assign || function() {
    return t = Object.assign || function(d) {
      for (var s, v = 1, m = arguments.length; v < m; v++) {
        s = arguments[v];
        for (var g in s)
          Object.prototype.hasOwnProperty.call(s, g) && (d[g] = s[g]);
      }
      return d;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.unstable_Picker = e.loadMore = e.search = e.update = e.cancel = e.open = e.select = e.ALL_RESOURCE_VERTICAL_ALIGNMENT = e.ALL_MEDIA_KINDS = e.ALL_BADGE_STATUSES = e.ALL_BADGE_PROGRESSES = e.Action = void 0;
  var r = ae, a = se, i = ue, o;
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
  function c(d) {
    return r.actionWrapper({
      payload: d,
      group: i.Group.unstable_Picker,
      type: o.SELECT
    });
  }
  e.select = c;
  function y(d) {
    return r.actionWrapper({
      payload: d,
      group: i.Group.unstable_Picker,
      type: o.OPEN
    });
  }
  e.open = y;
  function u(d) {
    return r.actionWrapper({
      payload: d,
      group: i.Group.unstable_Picker,
      type: o.CANCEL
    });
  }
  e.cancel = u;
  function f(d) {
    return r.actionWrapper({
      payload: d,
      group: i.Group.unstable_Picker,
      type: o.UPDATE
    });
  }
  e.update = f;
  function l(d) {
    return r.actionWrapper({
      payload: d,
      group: i.Group.unstable_Picker,
      type: o.SEARCH
    });
  }
  e.search = l;
  function h(d) {
    return r.actionWrapper({
      payload: d,
      group: i.Group.unstable_Picker,
      type: o.LOAD_MORE
    });
  }
  e.loadMore = h;
  var p = (
    /** @class */
    function(d) {
      n(s, d);
      function s(v, m) {
        var g = d.call(this, v, i.Group.unstable_Picker, i.Group.unstable_Picker) || this;
        return g.items = [], g.selectedItems = [], g.set(m, !1), g;
      }
      return Object.defineProperty(s.prototype, "payload", {
        get: function() {
          return t(t({}, this.options), { id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(s.prototype, "options", {
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
      }), s.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = r.getMergedProps(this.options, v), O = g.selectedItems, _ = O === void 0 ? [] : O, T = g.maxSelectable, P = T === void 0 ? 0 : T, E = g.items, S = E === void 0 ? [] : E, w = g.loading, I = w === void 0 ? !1 : w, C = g.title, k = g.searchQuery, B = g.searchQueryPlaceholder, D = g.primaryActionLabel, U = g.secondaryActionLabel, q = g.emptySearchLabel, L = g.canLoadMore, J = L === void 0 ? !1 : L, fe = g.loadingMore, W = fe === void 0 ? !1 : fe, ge = g.verticalAlignment, H = g.allowEmptySelection, ne = g.resourceName;
        return this.title = C, this.items = S, this.selectedItems = _, this.maxSelectable = P, this.loading = I, this.searchQuery = k, this.searchQueryPlaceholder = B, this.primaryActionLabel = D, this.secondaryActionLabel = U, this.emptySearchLabel = q, this.canLoadMore = J, this.loadingMore = W, this.verticalAlignment = ge, this.allowEmptySelection = H, this.resourceName = ne, m && this.update(), this;
      }, s.prototype.dispatch = function(v, m) {
        return v === o.OPEN ? this.open() : v === o.UPDATE ? this.update() : v === o.CANCEL ? this.cancel() : v === o.SELECT ? (this.selectedItems = (m == null ? void 0 : m.selectedItems) || [], this.app.dispatch(c({ id: this.id, selectedItems: this.selectedItems }))) : v === o.SEARCH ? (this.searchQuery = (m == null ? void 0 : m.searchQuery) || "", this.app.dispatch(l({ id: this.id, searchQuery: this.searchQuery }))) : v === o.LOAD_MORE && this.loadMore(), this;
      }, s.prototype.update = function() {
        this.app.dispatch(f(this.payload));
      }, s.prototype.open = function() {
        this.app.dispatch(y(this.payload));
      }, s.prototype.cancel = function() {
        this.app.dispatch(u({ id: this.id }));
      }, s.prototype.loadMore = function() {
        this.app.dispatch(h(this.payload));
      }, s;
    }(a.ActionSet)
  );
  e.unstable_Picker = p;
})(Qr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.unstable_Picker = e.update = e.select = e.search = e.open = e.loadMore = e.cancel = e.ALL_RESOURCE_VERTICAL_ALIGNMENT = e.ALL_MEDIA_KINDS = e.ALL_BADGE_STATUSES = e.ALL_BADGE_PROGRESSES = e.Action = void 0;
  var n = Qr;
  Object.defineProperty(e, "unstable_Picker", { enumerable: !0, get: function() {
    return n.unstable_Picker;
  } });
  var t = Qr;
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
  var r = function(a, i) {
    return new n.unstable_Picker(a, i);
  };
  e.create = r;
})(Ks);
var Ao = {}, Qs = {}, Ra = { exports: {} };
(function(e, n) {
  (function(t, r) {
    r(n);
  })(b, function(t) {
    var r, a, i, o, c, y = -1, u = function(R) {
      addEventListener("pageshow", function(M) {
        M.persisted && (y = M.timeStamp, R(M));
      }, !0);
    }, f = function() {
      return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    }, l = function() {
      var R = f();
      return R && R.activationStart || 0;
    }, h = function(R, M) {
      var F = f(), z = "navigate";
      return y >= 0 ? z = "back-forward-cache" : F && (document.prerendering || l() > 0 ? z = "prerender" : document.wasDiscarded ? z = "restore" : F.type && (z = F.type.replace(/_/g, "-"))), { name: R, value: M === void 0 ? -1 : M, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: z };
    }, p = function(R, M, F) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(R)) {
          var z = new PerformanceObserver(function(V) {
            Promise.resolve().then(function() {
              M(V.getEntries());
            });
          });
          return z.observe(Object.assign({ type: R, buffered: !0 }, F || {})), z;
        }
      } catch {
      }
    }, d = function(R, M, F, z) {
      var V, ee;
      return function(_e) {
        M.value >= 0 && (_e || z) && ((ee = M.value - (V || 0)) || V === void 0) && (V = M.value, M.delta = ee, M.rating = function(he, de) {
          return he > de[1] ? "poor" : he > de[0] ? "needs-improvement" : "good";
        }(M.value, F), R(M));
      };
    }, s = function(R) {
      requestAnimationFrame(function() {
        return requestAnimationFrame(function() {
          return R();
        });
      });
    }, v = function(R) {
      var M = function(F) {
        F.type !== "pagehide" && document.visibilityState !== "hidden" || R(F);
      };
      addEventListener("visibilitychange", M, !0), addEventListener("pagehide", M, !0);
    }, m = function(R) {
      var M = !1;
      return function(F) {
        M || (R(F), M = !0);
      };
    }, g = -1, O = function() {
      return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0;
    }, _ = function(R) {
      document.visibilityState === "hidden" && g > -1 && (g = R.type === "visibilitychange" ? R.timeStamp : 0, P());
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
    }, S = function(R) {
      document.prerendering ? addEventListener("prerenderingchange", function() {
        return R();
      }, !0) : R();
    }, w = [1800, 3e3], I = function(R, M) {
      M = M || {}, S(function() {
        var F, z = E(), V = h("FCP"), ee = p("paint", function(_e) {
          _e.forEach(function(he) {
            he.name === "first-contentful-paint" && (ee.disconnect(), he.startTime < z.firstHiddenTime && (V.value = Math.max(he.startTime - l(), 0), V.entries.push(he), F(!0)));
          });
        });
        ee && (F = d(R, V, w, M.reportAllChanges), u(function(_e) {
          V = h("FCP"), F = d(R, V, w, M.reportAllChanges), s(function() {
            V.value = performance.now() - _e.timeStamp, F(!0);
          });
        }));
      });
    }, C = [0.1, 0.25], k = function(R, M) {
      M = M || {}, I(m(function() {
        var F, z = h("CLS", 0), V = 0, ee = [], _e = function(de) {
          de.forEach(function(Pe) {
            if (!Pe.hadRecentInput) {
              var Zt = ee[0], Ct = ee[ee.length - 1];
              V && Pe.startTime - Ct.startTime < 1e3 && Pe.startTime - Zt.startTime < 5e3 ? (V += Pe.value, ee.push(Pe)) : (V = Pe.value, ee = [Pe]);
            }
          }), V > z.value && (z.value = V, z.entries = ee, F());
        }, he = p("layout-shift", _e);
        he && (F = d(R, z, C, M.reportAllChanges), v(function() {
          _e(he.takeRecords()), F(!0);
        }), u(function() {
          V = 0, z = h("CLS", 0), F = d(R, z, C, M.reportAllChanges), s(function() {
            return F();
          });
        }), setTimeout(F, 0));
      }));
    }, B = { passive: !0, capture: !0 }, D = /* @__PURE__ */ new Date(), U = function(R, M) {
      r || (r = M, a = R, i = /* @__PURE__ */ new Date(), J(removeEventListener), q());
    }, q = function() {
      if (a >= 0 && a < i - D) {
        var R = { entryType: "first-input", name: r.type, target: r.target, cancelable: r.cancelable, startTime: r.timeStamp, processingStart: r.timeStamp + a };
        o.forEach(function(M) {
          M(R);
        }), o = [];
      }
    }, L = function(R) {
      if (R.cancelable) {
        var M = (R.timeStamp > 1e12 ? /* @__PURE__ */ new Date() : performance.now()) - R.timeStamp;
        R.type == "pointerdown" ? function(F, z) {
          var V = function() {
            U(F, z), _e();
          }, ee = function() {
            _e();
          }, _e = function() {
            removeEventListener("pointerup", V, B), removeEventListener("pointercancel", ee, B);
          };
          addEventListener("pointerup", V, B), addEventListener("pointercancel", ee, B);
        }(M, R) : U(M, R);
      }
    }, J = function(R) {
      ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(M) {
        return R(M, L, B);
      });
    }, fe = [100, 300], W = function(R, M) {
      M = M || {}, S(function() {
        var F, z = E(), V = h("FID"), ee = function(de) {
          de.startTime < z.firstHiddenTime && (V.value = de.processingStart - de.startTime, V.entries.push(de), F(!0));
        }, _e = function(de) {
          de.forEach(ee);
        }, he = p("first-input", _e);
        F = d(R, V, fe, M.reportAllChanges), he && v(m(function() {
          _e(he.takeRecords()), he.disconnect();
        })), he && u(function() {
          var de;
          V = h("FID"), F = d(R, V, fe, M.reportAllChanges), o = [], a = -1, r = null, J(addEventListener), de = ee, o.push(de), q();
        });
      });
    }, ge = 0, H = 1 / 0, ne = 0, pe = function(R) {
      R.forEach(function(M) {
        M.interactionId && (H = Math.min(H, M.interactionId), ne = Math.max(ne, M.interactionId), ge = ne ? (ne - H) / 7 + 1 : 0);
      });
    }, oe = function() {
      return c ? ge : performance.interactionCount || 0;
    }, K = function() {
      "interactionCount" in performance || c || (c = p("event", pe, { type: "event", buffered: !0, durationThreshold: 0 }));
    }, je = [200, 500], be = 0, Be = function() {
      return oe() - be;
    }, Ae = [], ft = {}, Pt = function(R) {
      var M = Ae[Ae.length - 1], F = ft[R.interactionId];
      if (F || Ae.length < 10 || R.duration > M.latency) {
        if (F)
          F.entries.push(R), F.latency = Math.max(F.latency, R.duration);
        else {
          var z = { id: R.interactionId, latency: R.duration, entries: [R] };
          ft[z.id] = z, Ae.push(z);
        }
        Ae.sort(function(V, ee) {
          return ee.latency - V.latency;
        }), Ae.splice(10).forEach(function(V) {
          delete ft[V.id];
        });
      }
    }, lr = function(R, M) {
      M = M || {}, S(function() {
        K();
        var F, z = h("INP"), V = function(_e) {
          _e.forEach(function(Pe) {
            Pe.interactionId && Pt(Pe), Pe.entryType === "first-input" && !Ae.some(function(Zt) {
              return Zt.entries.some(function(Ct) {
                return Pe.duration === Ct.duration && Pe.startTime === Ct.startTime;
              });
            }) && Pt(Pe);
          });
          var he, de = (he = Math.min(Ae.length - 1, Math.floor(Be() / 50)), Ae[he]);
          de && de.latency !== z.value && (z.value = de.latency, z.entries = de.entries, F());
        }, ee = p("event", V, { durationThreshold: M.durationThreshold || 40 });
        F = d(R, z, je, M.reportAllChanges), ee && (ee.observe({ type: "first-input", buffered: !0 }), v(function() {
          V(ee.takeRecords()), z.value < 0 && Be() > 0 && (z.value = 0, z.entries = []), F(!0);
        }), u(function() {
          Ae = [], be = oe(), z = h("INP"), F = d(R, z, je, M.reportAllChanges);
        }));
      });
    }, Mn = [2500, 4e3], jt = {}, kt = function(R, M) {
      M = M || {}, S(function() {
        var F, z = E(), V = h("LCP"), ee = function(de) {
          var Pe = de[de.length - 1];
          Pe && Pe.startTime < z.firstHiddenTime && (V.value = Math.max(Pe.startTime - l(), 0), V.entries = [Pe], F());
        }, _e = p("largest-contentful-paint", ee);
        if (_e) {
          F = d(R, V, Mn, M.reportAllChanges);
          var he = m(function() {
            jt[V.id] || (ee(_e.takeRecords()), _e.disconnect(), jt[V.id] = !0, F(!0));
          });
          ["keydown", "click"].forEach(function(de) {
            addEventListener(de, he, !0);
          }), v(he), u(function(de) {
            V = h("LCP"), F = d(R, V, Mn, M.reportAllChanges), s(function() {
              V.value = performance.now() - de.timeStamp, jt[V.id] = !0, F(!0);
            });
          });
        }
      });
    }, Xt = [800, 1800], dr = function R(M) {
      document.prerendering ? S(function() {
        return R(M);
      }) : document.readyState !== "complete" ? addEventListener("load", function() {
        return R(M);
      }, !0) : setTimeout(M, 0);
    }, Bt = function(R, M) {
      M = M || {};
      var F = h("TTFB"), z = d(R, F, Xt, M.reportAllChanges);
      dr(function() {
        var V = f();
        if (V) {
          var ee = V.responseStart;
          if (ee <= 0 || ee > performance.now())
            return;
          F.value = Math.max(ee - l(), 0), F.entries = [V], z(!0), u(function() {
            F = h("TTFB", 0), (z = d(R, F, Xt, M.reportAllChanges))(!0);
          });
        }
      });
    };
    t.CLSThresholds = C, t.FCPThresholds = w, t.FIDThresholds = fe, t.INPThresholds = je, t.LCPThresholds = Mn, t.TTFBThresholds = Xt, t.getCLS = k, t.getFCP = I, t.getFID = W, t.getINP = lr, t.getLCP = kt, t.getTTFB = Bt, t.onCLS = k, t.onFCP = I, t.onFID = W, t.onINP = lr, t.onLCP = kt, t.onTTFB = Bt, Object.defineProperty(t, "__esModule", { value: !0 });
  });
})(Ra, Ra.exports);
var by = Ra.exports, Ys = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(n) {
    n.LARGEST_CONTENTFUL_PAINT = "APP::WEB_VITALS::LARGEST_CONTENTFUL_PAINT", n.FIRST_INPUT_DELAY = "APP::WEB_VITALS::FIRST_INPUT_DELAY", n.CUMULATIVE_LAYOUT_SHIFT = "APP::WEB_VITALS::CUMULATIVE_LAYOUT_SHIFT", n.FIRST_CONTENTFUL_PAINT = "APP::WEB_VITALS::FIRST_CONTENTFUL_PAINT", n.TIME_TO_FIRST_BYTE = "APP::WEB_VITALS::TIME_TO_FIRST_BYTE", n.INTERACTION_TO_NEXT_PAINT = "APP::WEB_VITALS::INTERACTION_TO_NEXT_PAINT";
  }(e.Action || (e.Action = {}));
})(Ys);
var ar = {}, Yr = {};
(function(e) {
  var n, t;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isUnframed = e.isClient = e.isServer = void 0, e.isServer = typeof window > "u", e.isClient = !e.isServer, e.isUnframed = e.isClient && ((t = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || t === void 0 ? void 0 : t.indexOf("Unframed")) > 0;
})(Yr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isDevelopmentClient = e.isProduction = e.isDevelopment = e.isUnframed = e.isServer = e.isClient = void 0;
  var n = Yr, t = Yr;
  Object.defineProperty(e, "isClient", { enumerable: !0, get: function() {
    return t.isClient;
  } }), Object.defineProperty(e, "isServer", { enumerable: !0, get: function() {
    return t.isServer;
  } }), Object.defineProperty(e, "isUnframed", { enumerable: !0, get: function() {
    return t.isUnframed;
  } }), e.isDevelopment = typeof process < "u" && process.env && process.env.NODE_ENV === "development", e.isProduction = !e.isDevelopment, e.isDevelopmentClient = e.isDevelopment && n.isClient;
})(ar);
var dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.isShopifyPing = dt.isShopifyPOS = dt.isShopifyMobile = dt.isShopifyEmbedded = dt.isMobile = void 0;
var Fu = ar;
function _y() {
  return Js() || Xs() || Zs();
}
dt.isMobile = _y;
function Oy() {
  return Fu.isClient && window.top !== window.self || Fu.isUnframed;
}
dt.isShopifyEmbedded = Oy;
function Js() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Mobile") >= 0;
}
dt.isShopifyMobile = Js;
function Xs() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify POS") >= 0;
}
dt.isShopifyPOS = Xs;
function Zs() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Ping") >= 0;
}
dt.isShopifyPing = Zs;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initializeWebVitals = e.interactionToNextPaint = e.timeToFirstByte = e.firstContentfulPaint = e.cumulativeLayoutShift = e.firstInputDelay = e.largestContentfulPaint = e.Action = void 0;
  var n = by, t = Ys;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
  var r = ar, a = Dt, i = Rt, o = dt;
  function c(d) {
    return i.actionWrapper({
      group: a.Group.WebVitals,
      type: t.Action.LARGEST_CONTENTFUL_PAINT,
      payload: d
    });
  }
  e.largestContentfulPaint = c;
  function y(d) {
    return i.actionWrapper({
      group: a.Group.WebVitals,
      type: t.Action.FIRST_INPUT_DELAY,
      payload: d
    });
  }
  e.firstInputDelay = y;
  function u(d) {
    return i.actionWrapper({
      group: a.Group.WebVitals,
      type: t.Action.CUMULATIVE_LAYOUT_SHIFT,
      payload: d
    });
  }
  e.cumulativeLayoutShift = u;
  function f(d) {
    return i.actionWrapper({
      group: a.Group.WebVitals,
      type: t.Action.FIRST_CONTENTFUL_PAINT,
      payload: d
    });
  }
  e.firstContentfulPaint = f;
  function l(d) {
    return i.actionWrapper({
      group: a.Group.WebVitals,
      type: t.Action.TIME_TO_FIRST_BYTE,
      payload: d
    });
  }
  e.timeToFirstByte = l;
  function h(d) {
    return i.actionWrapper({
      group: a.Group.WebVitals,
      type: t.Action.INTERACTION_TO_NEXT_PAINT,
      payload: d
    });
  }
  e.interactionToNextPaint = h;
  function p(d) {
    function s(m) {
      return function(g) {
        var O = g.id, _ = g.name, T = g.value, P = { id: O, metricName: _, value: T }, E = m(P);
        d.dispatch(E);
      };
    }
    var v = window;
    r.isServer || r.isClient && v.__is_web_vitals_initialized__ || o.isMobile() || (v.__is_web_vitals_initialized__ = !0, n.onLCP(s(c)), n.onFID(s(y)), n.onCLS(s(u)), n.onFCP(s(f)), n.onTTFB(s(l)), n.onINP(s(h)));
  }
  e.initializeWebVitals = p;
})(Qs);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, a, i, o) {
    o === void 0 && (o = i), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(r, a, i, o) {
    o === void 0 && (o = i), r[o] = a[i];
  }), t = b && b.__exportStar || function(r, a) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && n(a, r, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Qs, e);
})(Ao);
var xs = {}, rt = {};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.isPermitted = rt.getPermissionKey = rt.isPerformanceOrWebVitalsAction = rt.isAppMessage = rt.isAppBridgeAction = void 0;
var Ay = _n, Cr = Ht, Py = ae;
function Sy(e) {
  return e instanceof Object && Object.prototype.hasOwnProperty.call(e, "type") && e.type.toString().startsWith(Cr.PREFIX);
}
rt.isAppBridgeAction = Sy;
function Ey(e) {
  if (typeof e != "object" || !e.data || typeof e.data != "object")
    return !1;
  var n = e.data;
  return Object.prototype.hasOwnProperty.call(n, "type") && Py.findMatchInEnum(Ay.MessageType, n.type) !== void 0;
}
rt.isAppMessage = Ey;
function Ty(e) {
  var n = e.type;
  return n.match(/^APP::(PERFORMANCE|WEB_VITALS)::/);
}
rt.isPerformanceOrWebVitalsAction = Ty;
function el(e) {
  return e.replace(new RegExp("^" + Cr.PREFIX + Cr.SEPARATOR + "\\w+" + Cr.SEPARATOR), "");
}
rt.getPermissionKey = el;
function wy(e, n, t) {
  var r = n.group, a = n.type;
  if (!r || !Object.prototype.hasOwnProperty.call(e, r))
    return !1;
  var i = e[r];
  if (!i)
    return !1;
  var o = el(a);
  return i[o] ? i[o][t] === !0 : !1;
}
rt.isPermitted = wy;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFromApp = e.isPerformanceOrWebVitalsAction = e.getPermissionKey = e.isPermitted = e.isAppMessage = e.isAppBridgeAction = void 0;
  var n = rt;
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
})(xs);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(H, ne, pe, oe) {
    oe === void 0 && (oe = pe), Object.defineProperty(H, oe, { enumerable: !0, get: function() {
      return ne[pe];
    } });
  } : function(H, ne, pe, oe) {
    oe === void 0 && (oe = pe), H[oe] = ne[pe];
  }), t = b && b.__setModuleDefault || (Object.create ? function(H, ne) {
    Object.defineProperty(H, "default", { enumerable: !0, value: ne });
  } : function(H, ne) {
    H.default = ne;
  }), r = b && b.__importStar || function(H) {
    if (H && H.__esModule)
      return H;
    var ne = {};
    if (H != null)
      for (var pe in H)
        pe !== "default" && Object.prototype.hasOwnProperty.call(H, pe) && n(ne, H, pe);
    return t(ne, H), ne;
  }, a = b && b.__exportStar || function(H, ne) {
    for (var pe in H)
      pe !== "default" && !Object.prototype.hasOwnProperty.call(ne, pe) && n(ne, H, pe);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.WebVitals = e.unstable_Picker = e.Performance = e.Pos = e.AppLink = e.ChannelMenu = e.NavigationMenu = e.Share = e.ContextualSaveBar = e.MarketingExternalActivityTopBar = e.TitleBar = e.SessionToken = e.ResourcePicker = e.Redirect = e.Print = e.ModalContent = e.Modal = e.Loading = e.LeaveConfirmation = e.History = e.Toast = e.Fullscreen = e.FeedbackModal = e.Features = e.Flash = e.Error = e.Client = e.Cart = e.Scanner = e.ButtonGroup = e.Button = e.AuthCode = e.isAppBridgeAction = void 0;
  var i = r(eo);
  e.AuthCode = i;
  var o = r(ir);
  e.Button = o;
  var c = r(ai);
  e.ButtonGroup = c;
  var y = r(ro);
  e.Cart = y;
  var u = r(io);
  e.Client = u;
  var f = r(Yt);
  e.Error = f;
  var l = r(Is);
  e.Flash = l;
  var h = r(ao);
  e.Features = h;
  var p = r(Ms);
  e.FeedbackModal = p;
  var d = r(lo);
  e.Fullscreen = d;
  var s = r(Ns);
  e.LeaveConfirmation = s;
  var v = r(fo);
  e.Loading = v;
  var m = r(ui);
  e.Modal = m;
  var g = r(Rs);
  e.ModalContent = g;
  var O = r(Ds);
  e.History = O;
  var _ = r(ci);
  e.Redirect = _;
  var T = r(si);
  e.Print = T;
  var P = r(po);
  e.ResourcePicker = P;
  var E = r(ho);
  e.Scanner = E;
  var S = r(yo);
  e.SessionToken = S;
  var w = r(vo);
  e.TitleBar = w;
  var I = r(mo);
  e.Toast = I;
  var C = r(go);
  e.ContextualSaveBar = C;
  var k = r(Fs);
  e.Share = k;
  var B = r(_o);
  e.NavigationMenu = B;
  var D = r(Us);
  e.ChannelMenu = D;
  var U = r(Oo);
  e.AppLink = U;
  var q = r(Vs);
  e.Pos = q;
  var L = r($s);
  e.MarketingExternalActivityTopBar = L;
  var J = r(Hs);
  e.Performance = J;
  var fe = r(Ks);
  e.unstable_Picker = fe;
  var W = r(Ao);
  e.WebVitals = W;
  var ge = xs;
  Object.defineProperty(e, "isAppBridgeAction", { enumerable: !0, get: function() {
    return ge.isAppBridgeAction;
  } }), a(Dt, e);
})(At);
var Uu = b && b.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
};
Object.defineProperty(xa, "__esModule", { value: !0 });
var mr = re, tl = At, Iy = ke, gr = tl.ContextualSaveBar.Action, jy = tl.ContextualSaveBar.create;
function Cy(e) {
  var n = e.discardAction, t = n === void 0 ? { onAction: function() {
    return null;
  } } : n, r = e.saveAction, a = r === void 0 ? { onAction: function() {
    return null;
  } } : r, i = e.fullWidth, o = e.leaveConfirmationDisable, c = e.visible, y = Iy.useAppBridge(), u = a.onAction, f = Uu(a, ["onAction"]), l = t.onAction, h = Uu(t, ["onAction"]), p = mr.useMemo(function() {
    return jy(y, {
      saveAction: f,
      discardAction: h,
      fullWidth: i,
      leaveConfirmationDisable: o
    });
  }, [y]);
  return mr.useEffect(function() {
    p.set({
      saveAction: f,
      discardAction: h,
      fullWidth: i,
      leaveConfirmationDisable: o
    }, c);
  }, [
    y,
    p,
    f,
    h,
    i,
    o,
    c
  ]), mr.useEffect(function() {
    return p.subscribe(gr.DISCARD, l), p.subscribe(gr.SAVE, u), function() {
      p.unsubscribe();
    };
  }, [p, l, u]), mr.useEffect(function() {
    c ? p.dispatch(gr.SHOW) : p.dispatch(gr.HIDE);
  }, [p, c]), null;
}
xa.default = Cy;
var My = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Za, "__esModule", { value: !0 });
var Ny = My(xa);
Za.default = Ny.default;
var Po = {}, So = {}, Ry = b && b.__extends || function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var i in a)
        Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
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
}(), Dy = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(So, "__esModule", { value: !0 });
var ky = Dy(re), Mi = At, By = vt, Ly = (
  /** @class */
  function(e) {
    Ry(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.context;
      this.loading = Mi.Loading.create(t), this.loading != null && this.loading.dispatch(Mi.Loading.Action.START);
    }, n.prototype.componentWillUnmount = function() {
      this.loading != null && this.loading.dispatch(Mi.Loading.Action.STOP);
    }, n.prototype.render = function() {
      return null;
    }, n.contextType = By.AppBridgeContext, n;
  }(ky.default.Component)
);
So.default = Ly;
var Fy = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Po, "__esModule", { value: !0 });
var Uy = Fy(So);
Po.default = Uy.default;
var nl = {}, Eo = {}, Kt = {}, Vy = b && b.__createBinding || (Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return n[t];
  } });
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
}), $y = b && b.__setModuleDefault || (Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
}), To = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var n = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && Vy(n, e, t);
  return $y(n, e), n;
}, Jr = b && b.__spreadArray || function(e, n) {
  for (var t = 0, r = n.length, a = e.length; t < r; t++, a++)
    e[a] = n[t];
  return e;
};
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.transformActions = Kt.generateRedirect = void 0;
var br = To(ir), Gy = To(ai), Da = To(ci);
function rl(e, n, t, r) {
  if (t === void 0 && (t = "APP"), n != null) {
    var a = Da.create(e), i = r === !0 ? {
      url: n,
      newContext: !0
    } : n;
    return function() {
      a.dispatch(qy(t, r), i);
    };
  }
}
Kt.generateRedirect = rl;
function qy(e, n) {
  return n === !0 ? Da.Action.REMOTE : Da.Action[e];
}
function Wy(e, n) {
  var t = n.primaryAction, r = n.secondaryActions, a = n.actionGroups, i = Hy(e, t), o = Jr(Jr([], zy(e, r)), Ky(e, a));
  return {
    primary: i,
    secondary: o
  };
}
Kt.transformActions = Wy;
function wo(e, n) {
  var t = n.destructive === !0 ? br.Style.Danger : void 0, r = br.create(e, {
    label: n.content || "",
    disabled: n.disabled,
    loading: n.loading,
    plain: n.plain,
    style: t
  });
  n.onAction && r.subscribe(br.Action.CLICK, n.onAction);
  var a = rl(e, n.url, n.target, n.external);
  return a != null && r.subscribe(br.Action.CLICK, a), r;
}
function Hy(e, n) {
  if (n != null) {
    var t = wo(e, n);
    return t;
  }
}
function zy(e, n) {
  n === void 0 && (n = []);
  var t = Jr([], n.map(function(r) {
    return wo(e, r);
  }));
  return t;
}
function Ky(e, n) {
  n === void 0 && (n = []);
  var t = Jr([], n.map(function(r) {
    var a = r.actions.map(function(i) {
      return wo(e, i);
    });
    return Gy.create(e, { label: r.title, plain: r.plain, buttons: a });
  }));
  return t;
}
var Xr = b && b.__assign || function() {
  return Xr = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Xr.apply(this, arguments);
}, Qy = b && b.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
};
Object.defineProperty(Eo, "__esModule", { value: !0 });
var rn = re, sn = ui, Yy = Kt, Jy = ke;
function Xy(e) {
  var n = Jy.useAppBridge(), t = rn.useRef(null), r = rn.useRef({ open: !1 }), a = e.open, i = rn.useRef(!1), o = rn.useMemo(function() {
    e.primaryAction, e.secondaryActions;
    var c = Qy(e, ["primaryAction", "secondaryActions"]);
    return sn.create(n, Vu(n, c));
  }, [n]);
  return rn.useEffect(function() {
    if (i.current) {
      r.current = e;
      return;
    }
    var c = r.current.open, y = c !== a;
    if (a) {
      var u = Vu(n, e, c), f = !y;
      Zy(u), o.set(u, f);
    }
    return y && (a ? (o.dispatch(sn.Action.OPEN), t.current = document.activeElement) : (o.dispatch(sn.Action.CLOSE), t.current != null && document.contains(t.current) && (t.current.focus(), t.current = null))), e.onClose != null && o.subscribe(sn.Action.CLOSE, e.onClose), r.current = e, function() {
      o.unsubscribe();
    };
  }, [e, a]), rn.useEffect(function() {
    return function() {
      r.current.open && o.dispatch(sn.Action.CLOSE);
    };
  }, [o]), null;
}
function Zy(e) {
  return typeof e.url == "string" || typeof e.path == "string";
}
function Vu(e, n, t) {
  var r = n.title, a = n.size, i = n.message, o = n.src, c = n.primaryAction, y = n.secondaryActions, u = n.loading, f = a == null ? void 0 : sn.Size[a], l = {};
  return o != null && (o.match("^https?://") ? l.url = o : l.path = o), Xr(Xr({ title: r, message: i, size: f }, l), { footer: {
    buttons: Yy.transformActions(e, {
      primaryAction: c,
      secondaryActions: y
    })
  }, loading: t ? void 0 : u });
}
Eo.default = Xy;
var Io = {}, jo = {}, xy = b && b.__extends || function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var i in a)
        Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
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
}(), ev = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(jo, "__esModule", { value: !0 });
var tv = ev(re), nv = At, rv = vt, iv = (
  /** @class */
  function(e) {
    xy(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.context;
      this.modalContent = nv.ModalContent.create(t), this.syncLoadingStatus();
    }, n.prototype.componentDidUpdate = function() {
      this.syncLoadingStatus();
    }, n.prototype.syncLoadingStatus = function() {
      this.modalContent && (this.props.loading ? this.modalContent.loading() : this.modalContent.loaded());
    }, n.prototype.render = function() {
      return null;
    }, n.contextType = rv.AppBridgeContext, n;
  }(tv.default.Component)
);
jo.default = iv;
var av = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Io, "__esModule", { value: !0 });
var ov = av(jo);
Io.default = ov.default;
(function(e) {
  var n = b && b.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalContent = void 0;
  var t = n(Eo), r = Io;
  Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return n(r).default;
  } }), e.default = t.default;
})(nl);
var Co = {}, Mo = {};
Object.defineProperty(Mo, "__esModule", { value: !0 });
var _r = re, uv = Oo, cv = _o, sv = ke;
function lv(e, n) {
  return e.destination.replace(/\/$/, "") === n.pathname.replace(/\/$/, "");
}
function dv(e) {
  var n = e.navigationLinks, t = e.matcher, r = t === void 0 ? lv : t, a = sv.useAppBridge(), i = _r.useState(), o = i[0], c = i[1];
  _r.useEffect(function() {
    var u = n.map(function(f) {
      return uv.create(a, f);
    });
    c(u);
  }, [a, JSON.stringify(n)]);
  var y = _r.useMemo(function() {
    var u = (o || []).findIndex(function(f) {
      return r(f, location);
    });
    if (u >= 0)
      return o == null ? void 0 : o[u];
  }, [a, location.pathname, r, o, location.pathname]);
  return _r.useEffect(function() {
    o && cv.create(a, { items: o, active: y });
  }, [o, y]), null;
}
Mo.default = dv;
var fv = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Co, "__esModule", { value: !0 });
var pv = fv(Mo);
Co.default = pv.default;
var No = {}, il = {}, ka = { exports: {} }, Ni = {}, Ri = {}, Di = {}, jn = {}, al = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.createTransportListener = e.fromWindow = e.fromFrame = e.Context = void 0;
  var n = Yn, t = rt, r = _n, a = Nt, i = Yr;
  (function(f) {
    f.Modal = "Modal", f.Main = "Main";
  })(e.Context || (e.Context = {}));
  function o(f, l, h) {
    var p = [], d = f.host, s = f.window;
    if (!d)
      throw n.fromAction("App frame is undefined", n.AppActionType.WINDOW_UNDEFINED);
    return i.isUnframed && window.MobileWebView && Object.assign(window.MobileWebView, {
      postMessageToIframe: function(v, m) {
        s == null || s.postMessage(v, m), u(v) && d.postMessage(JSON.stringify(v.payload), location.origin);
      },
      updateIframeUrl: function(v) {
        var m = window.location, g = (f.window || {}).location;
        try {
          var O = new URL(v).origin;
          O === l && g ? g.replace(v) : m.href = v;
        } catch {
        }
      }
    }), d.addEventListener("message", function(v) {
      if (!(v.source === d || !t.isAppMessage(v))) {
        if (v.origin !== l) {
          var m = "Message origin '" + v.origin + "' does not match app origin '" + l + "'.", g = n.invalidOriginAction(m), O = {
            type: "dispatch",
            payload: g
          };
          s == null || s.postMessage(O, v.origin);
          return;
        }
        if (i.isUnframed && window.MobileWebView) {
          var g = JSON.stringify({
            id: "unframed://fromClient",
            origin: l,
            data: v.data
          });
          window.MobileWebView.postMessage(g);
          return;
        }
        for (var _ = 0, T = p; _ < T.length; _++) {
          var P = T[_];
          P(v);
        }
      }
    }), {
      context: h,
      localOrigin: l,
      frameWindow: s,
      hostFrame: d,
      dispatch: function(v) {
        s == null || s.postMessage(v, l);
      },
      subscribe: function(v) {
        return a.addAndRemoveFromCollection(p, v);
      }
    };
  }
  e.fromFrame = o;
  function c(f, l) {
    var h = [];
    return typeof window !== void 0 && window.addEventListener("message", function(p) {
      if (!(window === f && !i.isUnframed || p.source !== f || !(t.isAppBridgeAction(p.data.payload) || t.isAppMessage(p))))
        for (var d = 0, s = h; d < s.length; d++) {
          var v = s[d];
          v(p);
        }
    }), {
      localOrigin: l,
      hostFrame: f,
      dispatch: function(p) {
        var d;
        if (!((d = p.source) === null || d === void 0) && d.host) {
          if (i.isUnframed && window && window.MobileWebView) {
            var s = JSON.stringify({
              id: "unframed://fromClient",
              origin: l,
              data: p
            });
            window.MobileWebView.postMessage(s);
            return;
          }
          var v = new URL("https://" + p.source.host).origin;
          f.postMessage(p, v);
        }
      },
      subscribe: function(p) {
        return a.addAndRemoveFromCollection(h, p);
      }
    };
  }
  e.fromWindow = c;
  function y() {
    var f = [], l = {};
    function h(p) {
      function d() {
        if (arguments.length < 2)
          return a.addAndRemoveFromCollection(f, { callback: arguments[0] });
        var s = Array.from(arguments), v = s[0], m = s[1], g = s[2], O = { callback: m, id: g }, _ = { type: v, id: g };
        return Object.prototype.hasOwnProperty.call(l, v) || (l[v] = []), p && p(r.MessageType.Subscribe, _), a.addAndRemoveFromCollection(l[v], O, function() {
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
        var d = p.type, s = p.payload, v = !1;
        if (Object.prototype.hasOwnProperty.call(l, d))
          for (var m = 0, g = l[d]; m < g.length; m++) {
            var O = g[m], _ = O.id, T = O.callback, P = s && s.id === _;
            (P || !_) && (T(s), v = !0);
          }
        return v;
      }
    };
  }
  e.createTransportListener = y;
  function u(f) {
    return f !== null && typeof f == "object" && !Array.isArray(f) && f.type === "dispatch" && typeof f.payload == "object";
  }
})(al);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, a, i, o) {
    o === void 0 && (o = i), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(r, a, i, o) {
    o === void 0 && (o = i), r[o] = a[i];
  }), t = b && b.__exportStar || function(r, a) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && n(a, r, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(al, e);
})(jn);
var Lt = {}, $u;
function ol() {
  if ($u)
    return Lt;
  $u = 1, Object.defineProperty(Lt, "__esModule", { value: !0 }), Lt.mockAppBridge = Lt.serverAppBridge = void 0;
  var e = Yt, n = function() {
  }, t = new Promise(function() {
  });
  return Lt.serverAppBridge = {
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
  }, Lt.mockAppBridge = {
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
  }, Lt;
}
var kn = {}, ht = {}, Gu;
function Ro() {
  if (Gu)
    return ht;
  Gu = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.getWindow = ht.getLocation = ht.redirect = ht.shouldRedirect = void 0;
  function e(i) {
    return i === window;
  }
  ht.shouldRedirect = e;
  function n(i) {
    var o = t();
    o && o.assign(i);
  }
  ht.redirect = n;
  function t() {
    return a() ? window.location : void 0;
  }
  ht.getLocation = t;
  function r() {
    return a() ? window : void 0;
  }
  ht.getWindow = r;
  function a() {
    return typeof window < "u";
  }
  return ht;
}
var qu;
function hv() {
  if (qu)
    return kn;
  qu = 1, Object.defineProperty(kn, "__esModule", { value: !0 }), kn.handleAppPrint = void 0;
  var e = Ro();
  function n() {
    return navigator.userAgent.indexOf("iOS") >= 0;
  }
  function t() {
    var o = e.getWindow();
    if (!(!o || !o.document || !o.document.body)) {
      var c = o.document.createElement("input");
      return c.style.display = "none", o.document.body.appendChild(c), c;
    }
  }
  function r() {
    var o;
    (o = e.getWindow()) === null || o === void 0 || o.print();
  }
  function a() {
    var o = t();
    o && (o.select(), r(), o.remove());
  }
  function i() {
    n() ? a() : r();
  }
  return kn.handleAppPrint = i, kn;
}
var ki = {}, Wu;
function ul() {
  return Wu || (Wu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isV1Config = e.MessageType = e.LifecycleHook = e.PermissionType = void 0;
    var n = _n;
    Object.defineProperty(e, "MessageType", { enumerable: !0, get: function() {
      return n.MessageType;
    } });
    var t = _n;
    Object.defineProperty(e, "PermissionType", { enumerable: !0, get: function() {
      return t.PermissionType;
    } }), Object.defineProperty(e, "LifecycleHook", { enumerable: !0, get: function() {
      return t.LifecycleHook;
    } });
    function r(a) {
      return !a.host;
    }
    e.isV1Config = r;
  }(ki)), ki;
}
var Or = {}, Bi = {}, Hu;
function yv() {
  return Hu || (Hu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.removeFromCollection = e.addAndRemoveFromCollection = void 0;
    var n = Nt;
    Object.defineProperty(e, "addAndRemoveFromCollection", { enumerable: !0, get: function() {
      return n.addAndRemoveFromCollection;
    } }), Object.defineProperty(e, "removeFromCollection", { enumerable: !0, get: function() {
      return n.removeFromCollection;
    } });
  }(Bi)), Bi;
}
var zu;
function vv() {
  if (zu)
    return Or;
  zu = 1, Object.defineProperty(Or, "__esModule", { value: !0 });
  var e = yv(), n = (
    /** @class */
    function() {
      function t() {
        this.map = {};
      }
      return t.prototype.set = function(r, a) {
        Object.prototype.hasOwnProperty.call(this.map, r) || (this.map[r] = []);
        var i = { handler: a, remove: function() {
        } }, o = e.addAndRemoveFromCollection(this.map[r], i);
        return i = { handler: a, remove: o }, o;
      }, t.prototype.get = function(r) {
        var a = this.map[r];
        return a ? a.map(function(i) {
          return i.handler;
        }) : void 0;
      }, t.prototype.run = function(r, a, i) {
        for (var o = [], c = 3; c < arguments.length; c++)
          o[c - 3] = arguments[c];
        var y = 0, u = this.get(r) || [];
        function f() {
          for (var l = [], h = 0; h < arguments.length; h++)
            l[h] = arguments[h];
          var p = u[y++];
          return p ? p(f).apply(i, l) : a.apply(i, l);
        }
        return f.apply(i, o);
      }, t;
    }()
  );
  return Or.default = n, Or;
}
var Ku;
function Qu() {
  return Ku || (Ku = 1, function(e) {
    var n = b && b.__assign || function() {
      return n = Object.assign || function(w) {
        for (var I, C = 1, k = arguments.length; C < k; C++) {
          I = arguments[C];
          for (var B in I)
            Object.prototype.hasOwnProperty.call(I, B) && (w[B] = I[B]);
        }
        return w;
      }, n.apply(this, arguments);
    }, t = b && b.__spreadArray || function(w, I) {
      for (var C = 0, k = I.length, B = w.length; C < k; C++, B++)
        w[B] = I[C];
      return w;
    }, r = b && b.__importDefault || function(w) {
      return w && w.__esModule ? w : { default: w };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createApp = e.createAppWrapper = e.createClientApp = e.WINDOW_UNDEFINED_MESSAGE = void 0;
    var a = Rt, i = si, o = Yt, c = jn, y = ol(), u = ar, f = io, l = Ao, h = hv(), p = Ro(), d = ul(), s = r(vv());
    e.WINDOW_UNDEFINED_MESSAGE = "window is not defined. Running an app outside a browser is not supported";
    function v(w, I) {
      var C = I.apiKey, k = I.host, B = I.forceRedirect, D = B === void 0 ? !u.isDevelopmentClient : B, U = p.getLocation();
      if (u.isUnframed || !U || !C || !k || !D || !p.shouldRedirect(w))
        return !1;
      var q = "https://" + k + "/apps/" + C + U.pathname + (U.search || "");
      return p.redirect(q), !0;
    }
    var m = function(w) {
      return function(I) {
        return w(n(n({}, I), { version: a.getVersion(), clientInterface: {
          name: a.getPackageName(),
          version: a.getVersion()
        } }));
      };
    }, g = function(w) {
      w.set(d.LifecycleHook.DispatchAction, m);
    };
    function O(w) {
      w.subscribe(i.Action.APP, h.handleAppPrint), w.dispatch(f.initialize());
      try {
        l.initializeWebVitals(w);
      } catch (I) {
        console.error("App-Bridge failed to initialize web-vitals", I);
      }
    }
    var _ = function(w, I) {
      I === void 0 && (I = []);
      var C = [], k = c.createTransportListener(), B = function(D) {
        var U = D.data, q = U.type, L = U.payload;
        switch (q) {
          case "getState": {
            var J = C.splice(0);
            J.forEach(function(ge) {
              return ge(L);
            });
            break;
          }
          case "dispatch": {
            k.handleMessage(L);
            var fe = k.handleActionDispatch(L);
            if (fe)
              return;
            var W = a.findMatchInEnum(o.Action, L.type);
            W && o.throwError(W, L);
            break;
          }
        }
      };
      return w.subscribe(B), function(D) {
        var U = T(D), q = v(w.hostFrame, U);
        if (q)
          return y.mockAppBridge;
        var L = S(w, U), J = k.createSubscribeHandler(L);
        L(d.MessageType.Unsubscribe);
        function fe(K) {
          return L(d.MessageType.Dispatch, K), K;
        }
        for (var W = new URL("https://" + U.host).origin, ge = new s.default(), H = {
          hostOrigin: W,
          localOrigin: w.localOrigin,
          hooks: ge,
          dispatch: function(K) {
            return H.hooks ? H.hooks.run(d.LifecycleHook.DispatchAction, fe, H, K) : fe(K);
          },
          featuresAvailable: function() {
            for (var K = [], je = 0; je < arguments.length; je++)
              K[je] = arguments[je];
            var be = K[0], Be = Array.isArray(be) ? t([], be) : K;
            return H.getState("features").then(function(Ae) {
              return Be.length ? Be.reduce(function(ft, Pt) {
                return Object.keys(Ae).includes(Pt) && (ft[Pt] = Ae[Pt]), ft;
              }, {}) : Ae;
            });
          },
          getState: function(K) {
            return K && typeof K != "string" ? Promise.resolve(void 0) : new Promise(function(je) {
              C.push(je), L(d.MessageType.GetState);
            }).then(function(je) {
              var be = je;
              if (K)
                for (var Be = 0, Ae = K.split("."); Be < Ae.length; Be++) {
                  var ft = Ae[Be];
                  if (be == null || typeof be != "object" || Array.isArray(be) || !Object.keys(be).includes(ft))
                    return;
                  be = be[ft];
                }
              return be;
            });
          },
          subscribe: J,
          error: function(K, je) {
            var be = [];
            return a.forEachInEnum(o.Action, function(Be) {
              be.push(J(Be, K, je));
            }), function() {
              be.forEach(function(Be) {
                return Be();
              });
            };
          }
        }, ne = 0, pe = I; ne < pe.length; ne++) {
          var oe = pe[ne];
          oe(ge, H);
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
        return n(n({}, w), { host: C });
      } catch {
        var k = "not a valid host, please use the value provided by Shopify";
        throw o.fromAction(k, o.AppActionType.INVALID_CONFIG);
      }
    }
    function P(w, I, C) {
      if (C === void 0 && (C = []), !w)
        throw o.fromAction(e.WINDOW_UNDEFINED_MESSAGE, o.AppActionType.WINDOW_UNDEFINED);
      var k = p.getLocation(), B = I || k && k.origin;
      if (!B)
        throw o.fromAction("local origin cannot be blank", o.AppActionType.MISSING_LOCAL_ORIGIN);
      var D = c.fromWindow(w, B), U = e.createClientApp(D, t([g], C));
      return U;
    }
    e.createAppWrapper = P;
    function E(w) {
      var I = p.getWindow();
      return !I || !I.top ? y.serverAppBridge : P(I.top)(w);
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
  }(Di)), Di;
}
var Yu;
function xn() {
  return Yu || (Yu = 1, function(e) {
    var n = b && b.__createBinding || (Object.create ? function(a, i, o, c) {
      c === void 0 && (c = o), Object.defineProperty(a, c, { enumerable: !0, get: function() {
        return i[o];
      } });
    } : function(a, i, o, c) {
      c === void 0 && (c = o), a[c] = i[o];
    }), t = b && b.__exportStar || function(a, i) {
      for (var o in a)
        o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && n(i, a, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = Qu();
    t(ul(), e), t(Qu(), e), e.default = r.createClientApp;
  }(Ri)), Ri;
}
var Ju;
function mv() {
  return Ju || (Ju = 1, function(e) {
    var n = b && b.__createBinding || (Object.create ? function(a, i, o, c) {
      c === void 0 && (c = o), Object.defineProperty(a, c, { enumerable: !0, get: function() {
        return i[o];
      } });
    } : function(a, i, o, c) {
      c === void 0 && (c = o), a[c] = i[o];
    }), t = b && b.__exportStar || function(a, i) {
      for (var o in a)
        o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && n(i, a, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
    var r = xn();
    Object.defineProperty(e, "default", { enumerable: !0, get: function() {
      return r.createApp;
    } }), t(jn, e), t(xn(), e);
  }(Ni)), Ni;
}
var Li = {}, Ar = {}, Fi = {}, Ui = {}, le = {}, Vi = {}, $i = {}, Xu;
function Ge() {
  return Xu || (Xu = 1, function(e) {
    var n = b && b.__assign || function() {
      return n = Object.assign || function(s) {
        for (var v, m = 1, g = arguments.length; m < g; m++) {
          v = arguments[m];
          for (var O in v)
            Object.prototype.hasOwnProperty.call(v, O) && (s[O] = v[O]);
        }
        return s;
      }, n.apply(this, arguments);
    }, t = b && b.__spreadArray || function(s, v) {
      for (var m = 0, g = v.length, O = s.length; m < g; m++, O++)
        s[O] = v[m];
      return s;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validate = e.matchesPositiveInteger = e.matchesBoolean = e.makeOptional = e.matchesString = e.matchesObject = e.getErrors = e.oneOf = e.matchesArray = e.matchesEnum = e.composeSchemas = e.TYPE_ERROR = void 0, e.TYPE_ERROR = "type_error_expected";
    function r() {
      for (var s = [], v = 0; v < arguments.length; v++)
        s[v] = arguments[v];
      return function(m) {
        for (var g, O = 0, _ = s.length; !g && O < _; ) {
          if (g = s[O](m), g)
            return g;
          O++;
        }
      };
    }
    e.composeSchemas = r;
    function a(s, v) {
      return function(m) {
        var g = Object.keys(s).map(function(_) {
          return s[_];
        }), O = v && v.message || "expected:" + g.map(function(_) {
          return "`" + _ + "`";
        }).join(" or ");
        return g.includes(m) ? void 0 : c(m, "invalid_enum_value", n(n({}, v), { message: O }));
      };
    }
    e.matchesEnum = a;
    function i(s, v) {
      return function(m) {
        if (!Array.isArray(m))
          return c(m, e.TYPE_ERROR + "_array", v);
        if (s) {
          var g = [];
          return m.forEach(function(O, _) {
            var T = s(O);
            T && (g = g.concat(T.map(function(P) {
              return n(n({}, P), { path: "['" + _ + "']" + (P.path || "") });
            })));
          }), g.length ? g : void 0;
        }
      };
    }
    e.matchesArray = i;
    function o() {
      for (var s = [], v = 0; v < arguments.length; v++)
        s[v] = arguments[v];
      return function(m) {
        for (var g = [], O = 0, _ = s; O < _.length; O++) {
          var T = _[O], P = T(m);
          if (P == null)
            return P;
          g.push.apply(g, P);
        }
        return g;
      };
    }
    e.oneOf = o;
    function c(s, v, m) {
      return m === void 0 && (m = { message: void 0 }), [
        {
          value: s,
          error: v,
          message: typeof m.message == "function" ? m.message(v, s) : m.message
        }
      ];
    }
    function y(s, v, m) {
      var g = m ? s[m] : s, O = m ? "['" + m + "']" : void 0, _ = v(g);
      if (_)
        return _.map(function(T) {
          return n(n({}, T), { path: "" + (O || "") + (T.path || "") || void 0 });
        });
    }
    e.getErrors = y;
    function u(s, v) {
      return function(m) {
        if (typeof m != "object" || !m || Array.isArray(m))
          return c(m, e.TYPE_ERROR + "_object", v);
        var g = Object.keys(s).reduce(function(O, _) {
          return t(t([], O), y(m, s[_], _) || []);
        }, []);
        return g.length ? g : void 0;
      };
    }
    e.matchesObject = u;
    function f(s) {
      return function(v) {
        return typeof v == "string" ? void 0 : c(v, e.TYPE_ERROR + "_string", s);
      };
    }
    e.matchesString = f;
    function l(s) {
      return function(v) {
        if (v != null)
          return s(v);
      };
    }
    e.makeOptional = l;
    function h(s) {
      return function(v) {
        return typeof v == "boolean" ? void 0 : c(v, e.TYPE_ERROR + "_boolean", s);
      };
    }
    e.matchesBoolean = h;
    function p(s) {
      return function(v) {
        return !Number.isInteger(v) || v < 0 ? c(v, e.TYPE_ERROR + "_integer", s) : void 0;
      };
    }
    e.matchesPositiveInteger = p;
    function d(s, v) {
      return y(s, v);
    }
    e.validate = d;
  }($i)), $i;
}
var Gi = {}, Zu;
function et() {
  return Zu || (Zu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.relativePathSchema = e.relativeUrlSchema = e.isValidRelativePath = e.createActionValidator = void 0;
    var n = Ge();
    function t(a, i, o, c) {
      i === void 0 && (i = void 0), o === void 0 && (o = !1), c === void 0 && (c = !1);
      var y = n.matchesObject({
        id: c ? n.matchesString() : n.makeOptional(n.matchesString())
      }), u = i ? n.composeSchemas(y, i) : y;
      return n.matchesObject({
        type: n.matchesEnum(a, {
          message: function(f, l) {
            return "The action type `" + l + "` is invalid or unsupported";
          }
        }),
        payload: o ? u : n.makeOptional(u)
      });
    }
    e.createActionValidator = t;
    function r(a) {
      return typeof a == "string" && (a === "" || a.startsWith("/"));
    }
    e.isValidRelativePath = r, e.relativeUrlSchema = n.composeSchemas(n.matchesString(), function(a) {
      return r(a) ? void 0 : [{ error: "invalid_relative_path", value: a, message: "expected string to start with `/`" }];
    }), e.relativePathSchema = n.matchesObject({
      path: e.relativeUrlSchema
    });
  }(Gi)), Gi;
}
var xu;
function di() {
  return xu || (xu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.buttonSchemaWithId = e.buttonSchema = void 0;
    var n = It;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ge(), r = et();
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
    function a(o) {
      return t.validate(o, e.buttonSchema);
    }
    e.validateProps = a;
    function i(o) {
      var c = r.createActionValidator(n.Action, o.type === n.Action.UPDATE ? e.buttonSchema : void 0, !0, !0);
      return t.validate(o, c);
    }
    e.validateAction = i;
  }(Vi)), Vi;
}
var qi = {}, ec;
function cl() {
  return ec || (ec = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.buttonGroupSchema = void 0;
    var n = zt;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ge(), r = et(), a = di();
    e.buttonGroupSchema = t.composeSchemas(a.buttonSchema, t.matchesObject({
      buttons: t.matchesArray(t.makeOptional(a.buttonSchemaWithId))
    }));
    function i(c) {
      return t.validate(c, e.buttonGroupSchema);
    }
    e.validateProps = i;
    function o(c) {
      var y = r.createActionValidator(n.Action, e.buttonGroupSchema, !0, !0);
      return t.validate(c, y);
    }
    e.validateAction = o;
  }(qi)), qi;
}
var Wi = {}, tc;
function gv() {
  return tc || (tc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.contextSaveBarSchema = void 0;
    var n = Ge(), t = bo;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = et();
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
    function a(o) {
      return n.validate(o, e.contextSaveBarSchema);
    }
    e.validateProps = a;
    function i(o) {
      var c = r.createActionValidator(t.Action, e.contextSaveBarSchema);
      return n.validate(o, c);
    }
    e.validateAction = i;
  }(Wi)), Wi;
}
var Hi = {}, nc;
function bv() {
  return nc || (nc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.feedbackModalSchema = void 0;
    var n = so;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ge(), r = et();
    e.feedbackModalSchema = t.matchesObject({
      formId: t.matchesPositiveInteger()
    });
    function a(o) {
      return t.validate(o, e.feedbackModalSchema);
    }
    e.validateProps = a;
    function i(o) {
      switch (o.type) {
        case n.Action.OPEN:
          return t.validate(o, r.createActionValidator(n.Action, e.feedbackModalSchema, !0));
        case n.Action.CLOSE:
        default:
          return t.validate(o, r.createActionValidator(n.Action));
      }
    }
    e.validateAction = i;
  }(Hi)), Hi;
}
var zi = {}, rc;
function _v() {
  return rc || (rc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = Gr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ge(), r = et();
    function a(i) {
      var o = r.createActionValidator(n.Action);
      return t.validate(i, o);
    }
    e.validateAction = a;
  }(zi)), zi;
}
var Ki = {}, ic;
function sl() {
  return ic || (ic = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.linkActionSchema = e.linkPropsSchema = void 0;
    var n = On;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ge(), r = et(), a;
    (function(c) {
      c.APP = "APP::NAVIGATION::REDIRECT::APP", c.LEGACY_APP = "APP";
    })(a || (a = {})), e.linkPropsSchema = t.matchesObject({
      label: t.matchesString(),
      destination: r.relativeUrlSchema,
      redirectType: t.matchesEnum(a)
    }), e.linkActionSchema = t.matchesObject({
      label: t.matchesString(),
      destination: r.relativePathSchema,
      redirectType: t.matchesEnum(a)
    });
    function i(c) {
      return t.validate(c, e.linkPropsSchema);
    }
    e.validateProps = i;
    function o(c) {
      return t.validate(c, r.createActionValidator(n.Action, e.linkActionSchema, !0, !0));
    }
    e.validateAction = o;
  }(Ki)), Ki;
}
var Ft = {}, ac;
function Ov() {
  if (ac)
    return Ft;
  ac = 1, Object.defineProperty(Ft, "__esModule", { value: !0 }), Ft.validateAction = Ft.validateProps = void 0;
  var e = zr, n = Kr, t = Ge(), r = et(), a = ae, i = sl(), o = t.matchesObject({ id: t.matchesString(), options: i.linkPropsSchema });
  function c(h) {
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
    }), d = h.items, s = h.active;
    if (d && s) {
      var v = t.matchesObject({
        active: t.composeSchemas(o, function(m) {
          return d.find(function(g) {
            return g.id === m.id;
          }) ? void 0 : c(m);
        })
      });
      return t.composeSchemas(p, v);
    }
    return p;
  }
  function u(h) {
    var p = t.matchesObject({
      items: t.makeOptional(t.matchesArray(i.linkActionSchema)),
      active: t.makeOptional(t.matchesString())
    }), d = h.items, s = h.active;
    if (d && s) {
      var v = t.matchesObject({
        active: t.composeSchemas(t.matchesString(), function(m) {
          return d.find(function(g) {
            return g.id === m;
          }) ? void 0 : c(m);
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
  Ft.validateProps = f;
  function l(h) {
    var p = e.Action;
    return a.findMatchInEnum(n.Action, h.type) && (p = n.Action), t.validate(h, r.createActionValidator(p, u(h.payload), !0, !1));
  }
  return Ft.validateAction = l, Ft;
}
var Qi = {}, Bn = {}, Ln = {}, oc;
function Av() {
  return oc || (oc = 1, Object.defineProperty(Ln, "__esModule", { value: !0 }), Ln.INTERNAL_PROTOCOL = void 0, Ln.INTERNAL_PROTOCOL = "shopify:"), Ln;
}
var uc;
function Pv() {
  if (uc)
    return Bn;
  uc = 1, Object.defineProperty(Bn, "__esModule", { value: !0 }), Bn.isSafe = void 0;
  var e = Av(), n = /\/\/\//, t = /[/\\][/\\]/, r = ["https:", "http:"], a = "http://test.com";
  function i(y, u) {
    var f = u === void 0 ? {} : u, l = f.allowedDomains, h = l === void 0 ? [] : l, p = f.subdomains, d = p === void 0 ? [] : p, s = f.matchPath, v = f.requireAbsolute, m = f.requireSSL, g = f.allowInternalProtocol;
    if (n.test(y))
      return !1;
    if (y.startsWith("/"))
      return h.length > 0 || d.length > 0 || v || m ? !1 : s ? c(new URL(y, a), y, s) : !t.test(y);
    var O;
    try {
      O = new URL(y);
    } catch {
      return !1;
    }
    return g && O.protocol === e.INTERNAL_PROTOCOL ? !0 : !(!r.includes(O.protocol) || m && O.protocol !== "https:" || O.username || O.password || s && !c(O, y, s) || !o(O, h, d));
  }
  Bn.isSafe = i;
  function o(y, u, f) {
    if (!f.every(function(h) {
      return h.startsWith(".");
    }))
      throw new TypeError("Subdomains must begin with .");
    var l = y.hostname;
    return u.length === 0 && f.length === 0 || u.includes(l) || f.some(function(h) {
      return l.endsWith(h);
    });
  }
  function c(y, u, f) {
    var l = y.pathname, h = u.replace(y.origin, "").split("?")[0];
    return typeof f == "string" ? l === f && h === f : f.test(l) && f.test(h);
  }
  return Bn;
}
var cc;
function Sv() {
  return cc || (cc = 1, function(e) {
    var n = b && b.__assign || function() {
      return n = Object.assign || function(p) {
        for (var d, s = 1, v = arguments.length; s < v; s++) {
          d = arguments[s];
          for (var m in d)
            Object.prototype.hasOwnProperty.call(d, m) && (p[m] = d[m]);
        }
        return p;
      }, n.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var t = Ge(), r = et(), a = Xn;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return a.Action;
    } });
    var i = It, o = Pv(), c = di();
    function y(p, d) {
      var s;
      try {
        s = new URL(d).hostname;
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
        allowedDomains: [s]
      });
      if (!v)
        return [
          {
            error: "not_matching_app_origin",
            value: p,
            message: "Provided URL origin does not match app origin `" + s + "`"
          }
        ];
    }
    function u() {
      return function(p) {
        var d = [a.Size.Small, a.Size.Medium, a.Size.Large];
        if (!d.includes(p)) {
          var s = "expected:" + d.map(function(v) {
            return "`" + v + "`";
          }).join(" or ");
          return p === a.Size.Full && (s += ". Size `" + p + "` is deprecated as of version 1.6.5 and will fall back to size `medium`"), p === a.Size.Auto && (s += ". Size `" + p + "` is deprecated as of version 1.12.x and will fall back to size `medium`. Use the `setUpModalAutoSizing` utility from `app-bridge` instead"), [
            {
              error: "invalid_enum_value",
              value: p,
              message: s
            }
          ];
        }
      };
    }
    function f(p, d) {
      p === void 0 && (p = {});
      var s = t.matchesObject({
        title: t.makeOptional(t.matchesString()),
        footer: t.makeOptional(t.matchesObject({
          buttons: t.matchesObject({
            primary: t.makeOptional(c.buttonSchemaWithId),
            secondary: t.makeOptional(t.matchesArray(c.buttonSchemaWithId))
          })
        })),
        size: t.makeOptional(u())
      });
      if (a.isIframeModal(p)) {
        if (p.url) {
          var v = t.matchesObject({
            url: t.composeSchemas(t.matchesString(), function(m) {
              return d ? y(m, d) : void 0;
            })
          });
          return t.composeSchemas(s, v);
        }
        return t.composeSchemas(s, r.relativePathSchema);
      }
      return t.composeSchemas(s, t.matchesObject({ message: t.matchesString() }));
    }
    function l(p, d) {
      return t.validate(p, f(p, d));
    }
    e.validateProps = l;
    function h(p, d) {
      var s = f(p.payload, d);
      switch (p.type) {
        case a.Action.OPEN:
        case a.Action.UPDATE:
          return t.validate(p, r.createActionValidator(a.Action, s, !0, p.type === a.Action.UPDATE));
        case a.Action.FOOTER_BUTTON_CLICK:
          return c.validateAction(n(n({}, p), { type: i.Action.CLICK }));
        case a.Action.FOOTER_BUTTON_UPDATE:
          return c.validateAction(n(n({}, p), { type: i.Action.UPDATE }));
        case a.Action.CLOSE:
        default:
          return t.validate(p, r.createActionValidator(a.Action));
      }
    }
    e.validateAction = h;
  }(Qi)), Qi;
}
var Et = {}, sc;
function Ev() {
  if (sc)
    return Et;
  sc = 1;
  var e = b && b.__assign || function() {
    return e = Object.assign || function(l) {
      for (var h, p = 1, d = arguments.length; p < d; p++) {
        h = arguments[p];
        for (var s in h)
          Object.prototype.hasOwnProperty.call(h, s) && (l[s] = h[s]);
      }
      return l;
    }, e.apply(this, arguments);
  }, n = b && b.__createBinding || (Object.create ? function(l, h, p, d) {
    d === void 0 && (d = p), Object.defineProperty(l, d, { enumerable: !0, get: function() {
      return h[p];
    } });
  } : function(l, h, p, d) {
    d === void 0 && (d = p), l[d] = h[p];
  }), t = b && b.__setModuleDefault || (Object.create ? function(l, h) {
    Object.defineProperty(l, "default", { enumerable: !0, value: h });
  } : function(l, h) {
    l.default = h;
  }), r = b && b.__importStar || function(l) {
    if (l && l.__esModule)
      return l;
    var h = {};
    if (l != null)
      for (var p in l)
        p !== "default" && Object.prototype.hasOwnProperty.call(l, p) && n(h, l, p);
    return t(h, l), h;
  };
  Object.defineProperty(Et, "__esModule", { value: !0 }), Et.validateAction = Et.getSectionSchema = Et.matchesAbsolutePath = void 0;
  var a = r(qr), i = r(Zn), o = Ge(), c = et();
  function y(l) {
    return l.match("^https?://") ? void 0 : [
      {
        value: l,
        error: "invalid_absolute_url",
        message: "expected string to start with `https://` or `http://`"
      }
    ];
  }
  Et.matchesAbsolutePath = y;
  function u(l) {
    var h = l && l.section && l.section.resource && l.section.name === i.ResourceType.Product, p = {
      create: o.makeOptional(o.matchesBoolean()),
      id: o.makeOptional(o.matchesString())
    }, d = e(e({}, p), { variant: o.makeOptional(o.matchesObject(p)) });
    return o.matchesObject({
      section: o.matchesObject({
        name: o.matchesEnum(i.ResourceType),
        resource: o.makeOptional(o.matchesObject(h ? d : p))
      })
    });
  }
  Et.getSectionSchema = u;
  function f(l) {
    var h = o.matchesObject({ newContext: o.makeOptional(o.matchesBoolean()) }), p = i.Action, d;
    switch (l.type) {
      case a.Action.PUSH:
      case a.Action.REPLACE:
        p = a.Action, d = c.relativePathSchema;
        break;
      case i.Action.APP:
        d = c.relativePathSchema;
        break;
      case i.Action.REMOTE:
        d = o.composeSchemas(o.matchesObject({
          url: o.composeSchemas(o.matchesString(), function(s) {
            return y(s);
          })
        }), h);
        break;
      case i.Action.ADMIN_PATH:
        d = o.composeSchemas(c.relativePathSchema, h);
        break;
      case i.Action.ADMIN_SECTION:
        d = o.composeSchemas(u(l.payload), h);
        break;
    }
    return o.validate(l, c.createActionValidator(p, d));
  }
  return Et.validateAction = f, Et;
}
var Yi = {}, lc;
function Tv() {
  return lc || (lc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var n = Wr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ge(), r = et(), a = t.matchesArray(t.matchesObject({
      id: t.matchesString()
    })), i = t.matchesObject({
      initialQuery: t.makeOptional(t.matchesString()),
      initialSelectionIds: t.makeOptional(a),
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
      options: t.makeOptional(i)
    }), c = t.matchesObject({
      selection: a
    });
    function y(f) {
      return t.validate(f, i);
    }
    e.validateProps = y;
    function u(f) {
      switch (f.type) {
        case n.Action.UPDATE:
        case n.Action.OPEN:
          return t.validate(f, r.createActionValidator(n.Action, o, !1, !0));
        case n.Action.SELECT:
          return t.validate(f, r.createActionValidator(n.Action, c, !0, !0));
        case n.Action.CANCEL:
        case n.Action.CLOSE:
        default:
          return t.validate(f, r.createActionValidator(n.Action));
      }
    }
    e.validateAction = u;
  }(Yi)), Yi;
}
var Ji = {}, dc;
function wv() {
  return dc || (dc = 1, function(e) {
    var n = b && b.__assign || function() {
      return n = Object.assign || function(h) {
        for (var p, d = 1, s = arguments.length; d < s; d++) {
          p = arguments[d];
          for (var v in p)
            Object.prototype.hasOwnProperty.call(p, v) && (h[v] = p[v]);
        }
        return h;
      }, n.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.titleBarSchema = void 0;
    var t = Hr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = It, a = zt, i = Ge(), o = et(), c = di(), y = cl(), u = i.composeSchemas(c.buttonSchema, i.matchesObject({
      id: i.matchesString()
    }));
    e.titleBarSchema = i.matchesObject({
      breadcrumbs: i.makeOptional(c.buttonSchema),
      title: i.makeOptional(i.matchesString()),
      buttons: i.makeOptional(i.matchesObject({
        primary: i.makeOptional(u),
        secondary: i.makeOptional(i.matchesArray(i.composeSchemas(u, i.matchesObject({
          buttons: i.makeOptional(i.matchesArray(u))
        }))))
      }))
    });
    function f(h) {
      return i.validate(h, e.titleBarSchema);
    }
    e.validateProps = f;
    function l(h) {
      switch (h.type) {
        default:
        case t.Action.UPDATE:
          return i.validate(h, o.createActionValidator(t.Action, e.titleBarSchema, !0, !1));
        case t.Action.BUTTON_CLICK:
        case t.Action.BREADCRUMBS_CLICK:
          return c.validateAction(n(n({}, h), { type: r.Action.CLICK }));
        case t.Action.BUTTON_UPDATE:
        case t.Action.BREADCRUMBS_UPDATE:
          return c.validateAction(n(n({}, h), { type: r.Action.UPDATE }));
        case t.Action.BUTTON_GROUP_UPDATE:
          return y.validateAction(n(n({}, h), { type: a.Action.UPDATE }));
      }
    }
    e.validateAction = l;
  }(Ji)), Ji;
}
var Xi = {}, fc;
function Iv() {
  return fc || (fc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateProps = e.validateAction = e.toastSchema = void 0;
    var n = Jn;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Ge(), r = et();
    e.toastSchema = t.matchesObject({
      message: t.matchesString(),
      duration: t.matchesPositiveInteger(),
      isError: t.makeOptional(t.matchesBoolean()),
      action: t.makeOptional(t.matchesObject({
        content: t.matchesString()
      }))
    });
    function a(o) {
      switch (o.type) {
        case n.Action.SHOW:
          return t.validate(o, r.createActionValidator(n.Action, e.toastSchema, !0));
        default:
          return t.validate(o, r.createActionValidator(n.Action));
      }
    }
    e.validateAction = a;
    function i(o) {
      return t.validate(o, e.toastSchema);
    }
    e.validateProps = i;
  }(Xi)), Xi;
}
var Zi = {}, pc;
function jv() {
  return pc || (pc = 1, function(e) {
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
    var t = Qr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var r = Ge(), a = et(), i = r.matchesObject({
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
    }), c = {
      accessibilityLabel: r.makeOptional(r.matchesString()),
      badges: r.makeOptional(r.matchesArray(i)),
      disabled: r.makeOptional(r.matchesBoolean()),
      id: r.matchesString(),
      loading: r.makeOptional(r.matchesBoolean()),
      media: r.makeOptional(o),
      name: r.makeOptional(r.matchesString()),
      caption: r.makeOptional(r.matchesString()),
      selectable: r.makeOptional(r.matchesBoolean())
    }, y = r.matchesObject(n({}, c)), u = r.matchesArray(r.matchesObject(n(n({}, c), { options: r.makeOptional(r.matchesArray(y)) }))), f = r.matchesObject({
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
      selectedItems: r.makeOptional(r.matchesArray(r.matchesObject(c))),
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
    function s(m) {
      return r.validate(m, l);
    }
    e.validateProps = s;
    function v(m) {
      switch (m.type) {
        case t.Action.UPDATE:
        case t.Action.OPEN:
          return r.validate(m, a.createActionValidator(t.Action, h, !1, !0));
        case t.Action.SELECT:
          return r.validate(m, a.createActionValidator(t.Action, p, !0, !0));
        case t.Action.SEARCH:
          return r.validate(m, a.createActionValidator(t.Action, d, !0, !0));
        case t.Action.CANCEL:
        case t.Action.LOAD_MORE:
          return r.validate(m, a.createActionValidator(t.Action));
        default:
          return r.validate(m, a.createActionValidator(t.Action));
      }
    }
    e.validateAction = v;
  }(Zi)), Zi;
}
var hc;
function Cv() {
  if (hc)
    return le;
  hc = 1;
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
  Object.defineProperty(le, "__esModule", { value: !0 }), le.unstable_Picker = le.Toast = le.TitleBar = le.ResourcePicker = le.Navigation = le.Modal = le.Menu = le.Link = le.LeaveConfirmation = le.FeedbackModal = le.ContextualSaveBar = le.ButtonGroup = le.Button = void 0;
  var r = t(di());
  le.Button = r;
  var a = t(cl());
  le.ButtonGroup = a;
  var i = t(gv());
  le.ContextualSaveBar = i;
  var o = t(bv());
  le.FeedbackModal = o;
  var c = t(_v());
  le.LeaveConfirmation = c;
  var y = t(sl());
  le.Link = y;
  var u = t(Ov());
  le.Menu = u;
  var f = t(Sv());
  le.Modal = f;
  var l = t(Ev());
  le.Navigation = l;
  var h = t(Tv());
  le.ResourcePicker = h;
  var p = t(wv());
  le.TitleBar = p;
  var d = t(Iv());
  le.Toast = d;
  var s = t(jv());
  return le.unstable_Picker = s, le;
}
var xi = {}, ea = {}, yc;
function Cn() {
  return yc || (yc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.matchesPositiveNumber = e.TYPE_ERROR = e.oneOf = e.matchesArray = e.validate = e.matchesPositiveInteger = e.matchesBoolean = e.makeOptional = e.matchesString = e.matchesObject = e.matchesEnum = e.composeSchemas = void 0;
    var n = Ge();
    Object.defineProperty(e, "TYPE_ERROR", { enumerable: !0, get: function() {
      return n.TYPE_ERROR;
    } });
    var t = Ge();
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
    function r(i, o, c) {
      return c === void 0 && (c = { message: void 0 }), [
        {
          value: i,
          error: o,
          message: typeof c.message == "function" ? c.message(o, i) : c.message
        }
      ];
    }
    function a(i) {
      return function(o) {
        return Number.isNaN(o) || !Number.isFinite(o) || o < 0 ? r(o, n.TYPE_ERROR + "_number", i) : void 0;
      };
    }
    e.matchesPositiveNumber = a;
  }(ea)), ea;
}
var ta = {}, vc;
function Jt() {
  return vc || (vc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mixedAppClientCheck = e.actionMessage = e.relativePathSchema = e.relativeUrlSchema = e.isValidRelativePath = e.createActionValidator = void 0;
    var n = et();
    Object.defineProperty(e, "createActionValidator", { enumerable: !0, get: function() {
      return n.createActionValidator;
    } }), Object.defineProperty(e, "isValidRelativePath", { enumerable: !0, get: function() {
      return n.isValidRelativePath;
    } }), Object.defineProperty(e, "relativeUrlSchema", { enumerable: !0, get: function() {
      return n.relativeUrlSchema;
    } }), Object.defineProperty(e, "relativePathSchema", { enumerable: !0, get: function() {
      return n.relativePathSchema;
    } });
    function t(a) {
      return a.map(function(i) {
        var o = i.path, c = i.error, y = i.message, u = i.value, f = typeof u == "object" ? JSON.stringify(u) : u;
        return "`" + c + "` thrown for" + (o ? " path: " + o + " and" : "") + " value: `" + f + "`" + (y ? " with message: " + y : "");
      }).join(" | ");
    }
    e.actionMessage = t;
    function r(a) {
      a.addEventListener("DOMContentLoaded", function() {
        Object.prototype.hasOwnProperty.call(a, "ShopifyApp") && console.error(`%cException Detected 🚫

%cAn instance of the EASDK client was detected while initializing Shopify App Bridge. Using Shopify App Bridge and the EASDK simultaneously is not supported.

If you're migrating an existing app that was built with the shopify_app gem, then the EASDK client might have been included in the home page view template. In this case, remove it from your app before initializing Shopify App Bridge again.`, "font-size: large;", "font-size: normal;");
      }, { once: !0 });
    }
    e.mixedAppClientCheck = r;
  }(ta)), ta;
}
var mc;
function Mv() {
  return mc || (mc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = ro;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Cn(), r = Jt(), a = t.matchesObject({
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
    }), i = t.matchesObject({
      amount: t.makeOptional(t.matchesPositiveInteger()),
      discountDescription: t.makeOptional(t.matchesString()),
      type: t.makeOptional(t.matchesString()),
      discountCode: t.makeOptional(t.matchesString())
    }), o = t.matchesObject({
      amount: t.matchesPositiveNumber(),
      discountDescription: t.makeOptional(t.matchesString()),
      type: t.makeOptional(t.matchesString())
    }), c = t.matchesObject({
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
      addresses: t.makeOptional(t.matchesArray(a))
    }), l = t.matchesObject({
      name: t.matchesString(),
      value: t.matchesString()
    }), h = t.matchesObject({
      cartDiscount: t.makeOptional(i),
      customer: t.makeOptional(f),
      grandTotal: t.makeOptional(t.matchesString()),
      lineItems: t.makeOptional(t.matchesArray(y)),
      noteAttributes: t.makeOptional(t.matchesArray(l)),
      subTotal: t.makeOptional(t.matchesString()),
      taxTotal: t.makeOptional(t.matchesString())
    }), p = t.composeSchemas(t.matchesObject({}), function(O) {
      var _ = t.matchesString(), T = Object.keys(O).reduce(function(P, E) {
        return P[E] = _, P;
      }, {});
      return t.validate(O, t.matchesObject(T));
    }), d = t.matchesArray(t.matchesString());
    function s(O) {
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
      return O.amount ? o : c;
    }
    function g(O) {
      switch (O.type) {
        case n.Action.UPDATE:
          return t.validate(O, s(h));
        case n.Action.SET_CUSTOMER:
          return t.validate(O, s(f));
        case n.Action.ADD_CUSTOMER_ADDRESS:
          return t.validate(O, s(a));
        case n.Action.UPDATE_CUSTOMER_ADDRESS:
          return t.validate(O, v(a));
        case n.Action.SET_DISCOUNT:
          return t.validate(O, s(m(O.payload.data)));
        case n.Action.SET_PROPERTIES:
          return t.validate(O, s(p));
        case n.Action.REMOVE_PROPERTIES:
          return t.validate(O, s(d));
        case n.Action.ADD_LINE_ITEM:
          return t.validate(O, s(y));
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
  }(xi)), xi;
}
var na = {}, gc;
function Nv() {
  return gc || (gc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = lo;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Cn(), r = Jt();
    function a(i) {
      var o = r.createActionValidator(n.Action);
      return t.validate(i, o);
    }
    e.validateAction = a;
  }(na)), na;
}
var ra = {}, bc;
function Rv() {
  return bc || (bc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = fo;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Cn(), r = Jt();
    function a(i) {
      var o = r.createActionValidator(n.Action);
      return t.validate(i, o);
    }
    e.validateAction = a;
  }(ra)), ra;
}
var ia = {}, _c;
function Dv() {
  return _c || (_c = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = si;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Cn(), r = Jt();
    function a(i) {
      return t.validate(i, r.createActionValidator(n.Action));
    }
    e.validateAction = a;
  }(ia)), ia;
}
var aa = {}, Oc;
function kv() {
  return Oc || (Oc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var n = ho;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var t = Cn(), r = Jt();
    function a(i) {
      return t.validate(i, r.createActionValidator(n.Action));
    }
    e.validateAction = a;
  }(aa)), aa;
}
var Ac;
function Bv() {
  return Ac || (Ac = 1, function(e) {
    var n = b && b.__createBinding || (Object.create ? function(f, l, h, p) {
      p === void 0 && (p = h), Object.defineProperty(f, p, { enumerable: !0, get: function() {
        return l[h];
      } });
    } : function(f, l, h, p) {
      p === void 0 && (p = h), f[p] = l[h];
    }), t = b && b.__setModuleDefault || (Object.create ? function(f, l) {
      Object.defineProperty(f, "default", { enumerable: !0, value: l });
    } : function(f, l) {
      f.default = l;
    }), r = b && b.__importStar || function(f) {
      if (f && f.__esModule)
        return f;
      var l = {};
      if (f != null)
        for (var h in f)
          h !== "default" && Object.prototype.hasOwnProperty.call(f, h) && n(l, f, h);
      return t(l, f), l;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.unstable_Picker = e.Toast = e.TitleBar = e.Scanner = e.ResourcePicker = e.Print = e.Navigation = e.Modal = e.Menu = e.Loading = e.Link = e.LeaveConfirmation = e.Fullscreen = e.FeedbackModal = e.ContextualSaveBar = e.Cart = e.ButtonGroup = e.Button = void 0;
    var a = Cv();
    Object.defineProperty(e, "Button", { enumerable: !0, get: function() {
      return a.Button;
    } }), Object.defineProperty(e, "ButtonGroup", { enumerable: !0, get: function() {
      return a.ButtonGroup;
    } }), Object.defineProperty(e, "ContextualSaveBar", { enumerable: !0, get: function() {
      return a.ContextualSaveBar;
    } }), Object.defineProperty(e, "FeedbackModal", { enumerable: !0, get: function() {
      return a.FeedbackModal;
    } }), Object.defineProperty(e, "LeaveConfirmation", { enumerable: !0, get: function() {
      return a.LeaveConfirmation;
    } }), Object.defineProperty(e, "Link", { enumerable: !0, get: function() {
      return a.Link;
    } }), Object.defineProperty(e, "Menu", { enumerable: !0, get: function() {
      return a.Menu;
    } }), Object.defineProperty(e, "Modal", { enumerable: !0, get: function() {
      return a.Modal;
    } }), Object.defineProperty(e, "Navigation", { enumerable: !0, get: function() {
      return a.Navigation;
    } }), Object.defineProperty(e, "ResourcePicker", { enumerable: !0, get: function() {
      return a.ResourcePicker;
    } }), Object.defineProperty(e, "TitleBar", { enumerable: !0, get: function() {
      return a.TitleBar;
    } }), Object.defineProperty(e, "Toast", { enumerable: !0, get: function() {
      return a.Toast;
    } }), Object.defineProperty(e, "unstable_Picker", { enumerable: !0, get: function() {
      return a.unstable_Picker;
    } });
    var i = r(Mv());
    e.Cart = i;
    var o = r(Nv());
    e.Fullscreen = o;
    var c = r(Rv());
    e.Loading = c;
    var y = r(Dv());
    e.Print = y;
    var u = r(kv());
    e.Scanner = u;
  }(Ui)), Ui;
}
var Pc;
function Lv() {
  return Pc || (Pc = 1, function(e) {
    var n = b && b.__spreadArray || function(s, v) {
      for (var m = 0, g = v.length, O = s.length; m < g; m++, O++)
        s[O] = v[m];
      return s;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validatorMiddleware = e.connectValidatorToDispatchHook = e.connectValidatorToUpdateHook = void 0;
    var t = xn(), r = Dt, a = Yt, i = Rt, o = Bv(), c = Cn(), y = Jt();
    function u(s, v, m) {
      switch (v) {
        case r.Group.Button:
          return o.Button.validateProps(m);
        case r.Group.ButtonGroup:
          return o.ButtonGroup.validateProps(m);
        case r.Group.Modal:
          return o.Modal.validateProps(m, s);
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
    function f(s, v) {
      switch (s.group) {
        case r.Group.Button:
          return o.Button.validateAction(s);
        case r.Group.ButtonGroup:
          return o.ButtonGroup.validateAction(s);
        case r.Group.Modal:
          return o.Modal.validateAction(s, v);
        case r.Group.Menu:
          return o.Menu.validateAction(s);
        case r.Group.TitleBar:
          return o.TitleBar.validateAction(s);
        case r.Group.ResourcePicker:
          return o.ResourcePicker.validateAction(s);
        case r.Group.Loading:
          return o.Loading.validateAction(s);
        case r.Group.Toast:
          return o.Toast.validateAction(s);
        case r.Group.Cart:
          return o.Cart.validateAction(s);
        case r.Group.Navigation:
          return o.Navigation.validateAction(s);
        case r.Group.Print:
          return o.Print.validateAction(s);
        case r.Group.Scanner:
          return o.Scanner.validateAction(s);
        case r.Group.Fullscreen:
          return o.Fullscreen.validateAction(s);
        case r.Group.ContextualSaveBar:
          return o.ContextualSaveBar.validateAction(s);
        case r.Group.Link:
          return o.Link.validateAction(s);
        case r.Group.unstable_Picker:
          return o.unstable_Picker.validateAction(s);
      }
    }
    function l(s, v) {
      var m = c.validate(s, c.matchesObject({
        group: c.matchesEnum(r.Group, {
          message: function(O, _) {
            return "Unknown or unsupported action group `" + _ + "`";
          }
        }),
        version: c.matchesString()
      }));
      if (m)
        return a.invalidAction(s, y.actionMessage(m));
      var g = f(s, v);
      return g ? a.invalidPayload(s, y.actionMessage(g)) : s;
    }
    var h = function(s) {
      return function(v) {
        for (var m = [], g = 1; g < arguments.length; g++)
          m[g - 1] = arguments[g];
        var O = i.getMergedProps(this.options, v), _ = u(this.app.localOrigin, this.defaultGroup, O);
        if (_)
          throw a.fromAction(y.actionMessage(_), a.Action.INVALID_OPTIONS);
        return s.apply(void 0, n([v], m));
      };
    };
    e.connectValidatorToUpdateHook = h;
    var p = function(s) {
      return function(v) {
        var m = l(v, this.localOrigin);
        return s(m);
      };
    };
    e.connectValidatorToDispatchHook = p;
    var d = function(s) {
      s.set(t.LifecycleHook.UpdateAction, e.connectValidatorToUpdateHook), s.set(t.LifecycleHook.DispatchAction, e.connectValidatorToDispatchHook);
    };
    e.validatorMiddleware = d;
  }(Fi)), Fi;
}
var Sc;
function Fv() {
  if (Sc)
    return Ar;
  Sc = 1, Object.defineProperty(Ar, "__esModule", { value: !0 });
  var e = Lv();
  return Ar.default = e.validatorMiddleware, Ar;
}
var Ec;
function Uv() {
  return Ec || (Ec = 1, function(e) {
    var n = b && b.__createBinding || (Object.create ? function(f, l, h, p) {
      p === void 0 && (p = h), Object.defineProperty(f, p, { enumerable: !0, get: function() {
        return l[h];
      } });
    } : function(f, l, h, p) {
      p === void 0 && (p = h), f[p] = l[h];
    }), t = b && b.__exportStar || function(f, l) {
      for (var h in f)
        h !== "default" && !Object.prototype.hasOwnProperty.call(l, h) && n(l, f, h);
    }, r = b && b.__importDefault || function(f) {
      return f && f.__esModule ? f : { default: f };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createApp = void 0;
    var a = r(Fv()), i = Jt(), o = Ro(), c = xn(), y = ol();
    function u(f) {
      var l = o.getWindow();
      return !l || !l.top ? y.serverAppBridge : (i.mixedAppClientCheck(l), c.createAppWrapper(l.top, l.location.origin, [a.default])(f));
    }
    e.createApp = u, e.default = u, t(jn, e), t(xn(), e);
  }(Li)), Li;
}
process.env.NODE_ENV === "production" ? ka.exports = mv() : ka.exports = Uv();
var Vv = ka.exports, Do = {}, ko = {}, or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
or.handleRouteChange = void 0;
var $v = At;
function Gv(e, n) {
  return e.subscribe($v.Redirect.Action.APP, function(t) {
    var r = t.path;
    n.replace(r);
  });
}
or.handleRouteChange = Gv;
var qv = b && b.__extends || function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var i in a)
        Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
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
}(), Wv = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ko, "__esModule", { value: !0 });
var Hv = Wv(re), zv = vt, Kv = or, Qv = (
  /** @class */
  function(e) {
    qv(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.props.history;
      this.unsubscribe = Kv.handleRouteChange(this.context, t);
    }, n.prototype.componentWillUnmount = function() {
      this.unsubscribe && this.unsubscribe();
    }, n.prototype.render = function() {
      return null;
    }, n.contextType = zv.AppBridgeContext, n;
  }(Hv.default.Component)
);
ko.default = Qv;
var Bo = {};
Object.defineProperty(Bo, "__esModule", { value: !0 });
var Yv = re, Jv = ke, Xv = or;
function Zv(e) {
  var n = Jv.useAppBridge();
  Yv.useEffect(function() {
    return Xv.handleRouteChange(n, e);
  }, [n, e]);
}
Bo.default = Zv;
(function(e) {
  var n = b && b.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useClientRouting = e.ClientRouter = void 0;
  var t = ko;
  Object.defineProperty(e, "ClientRouter", { enumerable: !0, get: function() {
    return n(t).default;
  } });
  var r = Bo;
  Object.defineProperty(e, "useClientRouting", { enumerable: !0, get: function() {
    return n(r).default;
  } });
})(Do);
var Lo = {}, Fo = {}, ur = {}, Mt = {};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.getOrigin = Mt.getTopWindow = Mt.getSelfWindow = void 0;
function xv() {
  return window.self;
}
Mt.getSelfWindow = xv;
function em() {
  return window.top;
}
Mt.getTopWindow = em;
function tm() {
  return location.origin;
}
Mt.getOrigin = tm;
var nm = b && b.__awaiter || function(e, n, t, r) {
  function a(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function c(f) {
      try {
        u(r.next(f));
      } catch (l) {
        o(l);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (l) {
        o(l);
      }
    }
    function u(f) {
      f.done ? i(f.value) : a(f.value).then(c, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, rm = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(f) {
      return y([u, f]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done)
          return i;
        switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = u;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(u);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (f) {
        u = [6, f], a = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(ur, "__esModule", { value: !0 });
ur.updateHistory = void 0;
var im = jn, Tc = At, Ba = Mt, am = [
  "hmac",
  "locale",
  "protocol",
  "session",
  "shop",
  "timestamp",
  "host"
];
function om(e, n) {
  return nm(this, void 0, void 0, function() {
    var t, r, a, i, o, c, y, u, f;
    return rm(this, function(l) {
      switch (l.label) {
        case 0:
          return t = Ba.getSelfWindow(), r = Ba.getTopWindow(), a = t === r, [4, e.getState("context").then(function(h) {
            return h === im.Context.Main;
          })];
        case 1:
          return i = l.sent(), a || !i ? [
            2
            /*return*/
          ] : (o = um(n), am.forEach(function(h) {
            return o.searchParams.delete(h);
          }), c = o.pathname, y = o.search, u = o.hash, f = "" + c + y + u, Tc.History.create(e).dispatch(Tc.History.Action.REPLACE, f), [
            2
            /*return*/
          ]);
      }
    });
  });
}
ur.updateHistory = om;
function um(e) {
  var n = Ba.getOrigin();
  if (typeof e == "string")
    return new URL(e, n);
  var t = e.pathname, r = e.search, a = e.hash;
  return new URL("" + t + r + a, n);
}
var cm = b && b.__extends || function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var i in a)
        Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
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
}(), sm = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fo, "__esModule", { value: !0 });
var lm = sm(re), dm = vt, wc = ur, fm = (
  /** @class */
  function(e) {
    cm(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.props.location;
      wc.updateHistory(this.context, t);
    }, n.prototype.componentDidUpdate = function(t) {
      var r = t.location, a = this.props.location;
      a !== r && wc.updateHistory(this.context, a);
    }, n.prototype.render = function() {
      return null;
    }, n.contextType = dm.AppBridgeContext, n;
  }(lm.default.Component)
);
Fo.default = fm;
var Uo = {};
Object.defineProperty(Uo, "__esModule", { value: !0 });
var pm = re, hm = ke, ym = ur;
function vm(e) {
  var n = hm.useAppBridge();
  pm.useEffect(function() {
    ym.updateHistory(n, e);
  }, [n, e]);
}
Uo.default = vm;
(function(e) {
  var n = b && b.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useRoutePropagation = e.RoutePropagator = void 0;
  var t = Fo;
  Object.defineProperty(e, "RoutePropagator", { enumerable: !0, get: function() {
    return n(t).default;
  } });
  var r = Uo;
  Object.defineProperty(e, "useRoutePropagation", { enumerable: !0, get: function() {
    return n(r).default;
  } });
})(Lo);
const mm = "@shopify/app-bridge-react", gm = "3.0.0", bm = "index.d.ts", _m = "index.js", Om = "umd/index.js", Am = "umd/index.js", Pm = [
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
], Sm = {
  access: "public",
  "@shopify:registry": "https://registry.npmjs.org"
}, Em = "git@github.com:Shopify/app-bridge.git", Tm = "https://shopify.dev/tools/app-bridge/react-components", wm = "Shopify Inc.", Im = "MIT", jm = {
  build: "yarn build:tsc && yarn build:umd",
  "build:tsc": "NODE_ENV=production tsc",
  "build:umd": "NODE_ENV=production webpack -p",
  check: "tsc",
  clean: `cat package.json | node -pe "JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).files.map(f => './'+f).join(' ')" | xargs rm -rf`,
  pack: "yarn pack",
  size: "size-limit"
}, Cm = !1, Mm = {
  "@shopify/app-bridge": "^3.0.0"
}, Nm = {
  "@types/react": "^17.0.38",
  enzyme: "3.11.0",
  "react-dom": "^17.0.2"
}, Rm = {
  react: "^16.0.0 || ^17.0.0 || ^18.0.0"
}, Dm = "7102c192814e6f3cf55daf81324b54a960ebe701", km = {
  name: mm,
  version: gm,
  types: bm,
  main: _m,
  unpkg: Om,
  jsdelivr: Am,
  files: Pm,
  private: !1,
  publishConfig: Sm,
  repository: Em,
  homepage: Tm,
  author: wm,
  license: Im,
  scripts: jm,
  sideEffects: Cm,
  "size-limit": [
    {
      limit: "30 KB",
      path: "index.js"
    }
  ],
  dependencies: Mm,
  devDependencies: Nm,
  peerDependencies: Rm,
  gitHead: Dm
};
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(p, d, s, v) {
    v === void 0 && (v = s), Object.defineProperty(p, v, { enumerable: !0, get: function() {
      return d[s];
    } });
  } : function(p, d, s, v) {
    v === void 0 && (v = s), p[v] = d[s];
  }), t = b && b.__setModuleDefault || (Object.create ? function(p, d) {
    Object.defineProperty(p, "default", { enumerable: !0, value: d });
  } : function(p, d) {
    p.default = d;
  }), r = b && b.__importStar || function(p) {
    if (p && p.__esModule)
      return p;
    var d = {};
    if (p != null)
      for (var s in p)
        s !== "default" && Object.prototype.hasOwnProperty.call(p, s) && n(d, p, s);
    return t(d, p), d;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.setClientInterfaceHook = void 0;
  var a = r(re), i = r(Vv), o = vt, c = Do, y = Lo, u = km;
  function f(p) {
    var d = p.config, s = p.router, v = p.children, m = a.useMemo(function() {
      return i.default(d);
    }, [JSON.stringify(d)]);
    a.useEffect(function() {
      m != null && m.hooks && m.hooks.set(i.LifecycleHook.DispatchAction, e.setClientInterfaceHook);
    }, [m]);
    var g = s != null && s.history && (s != null && s.location) ? a.default.createElement(h, { history: s.history, location: s.location }) : null;
    return a.default.createElement(
      o.AppBridgeContext.Provider,
      { value: m },
      g,
      v
    );
  }
  var l = function(p) {
    return function(d) {
      return d.clientInterface = {
        name: "@shopify/app-bridge-react",
        version: u.version
      }, p(d);
    };
  };
  e.setClientInterfaceHook = l;
  function h(p) {
    var d = p.history, s = p.location;
    return c.useClientRouting(d), y.useRoutePropagation(s), null;
  }
  e.default = f;
})(il);
var Bm = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(No, "__esModule", { value: !0 });
var Lm = Bm(il);
No.default = Lm.default;
var Vo = {}, ll = {};
(function(e) {
  var n = b && b.__assign || function() {
    return n = Object.assign || function(c) {
      for (var y, u = 1, f = arguments.length; u < f; u++) {
        y = arguments[u];
        for (var l in y)
          Object.prototype.hasOwnProperty.call(y, l) && (c[l] = y[l]);
      }
      return c;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ResourceType = e.ActionVerb = void 0;
  var t = re, r = po;
  Object.defineProperty(e, "ActionVerb", { enumerable: !0, get: function() {
    return r.ActionVerb;
  } }), Object.defineProperty(e, "ResourceType", { enumerable: !0, get: function() {
    return r.ResourceType;
  } });
  var a = ke;
  function i(c) {
    var y = a.useAppBridge(), u = t.useRef(null), f = c.resourceType, l = c.onSelection, h = c.onCancel, p = c.open, d = t.useRef({ open: !1 }), s = t.useMemo(function() {
      return r.create(y, {
        resourceType: r.ResourceType[f],
        options: o(c)
      });
    }, [y]);
    return t.useEffect(function() {
      var v, m = (v = d.current) === null || v === void 0 ? void 0 : v.open;
      m !== p && (p ? s.dispatch(r.Action.OPEN) : s.dispatch(r.Action.CLOSE)), !m && p ? u.current = document.activeElement : m && !p && u.current != null && document.contains(u.current) && (u.current.focus(), u.current = null);
    }, [p]), t.useEffect(function() {
      var v = [];
      return l != null && v.push(s.subscribe(r.Action.SELECT, l)), h != null && v.push(s.subscribe(r.Action.CANCEL, h)), function() {
        for (var m = v.pop(); m; )
          m(), m = v.pop();
      };
    }, [l, h]), t.useEffect(function() {
      var v = JSON.stringify(n(n({}, d.current), { open: void 0 })) !== JSON.stringify(n(n({}, c), { open: void 0 }));
      v && (s.set(o(c)), d.current = c);
    }, [c]), null;
  }
  function o(c) {
    var y = c.initialQuery, u = c.initialSelectionIds, f = c.showHidden, l = c.allowMultiple, h = c.selectMultiple, p = c.actionVerb, d = {
      initialQuery: y,
      initialSelectionIds: u,
      showHidden: f,
      selectMultiple: h ?? l,
      actionVerb: p
    }, s = d;
    if (c.resourceType === "Product") {
      var v = c.showVariants, m = c.showDraft, g = c.showArchived, O = c.showDraftBadge, _ = c.showArchivedBadge, T = {
        showVariants: v,
        showDraft: m,
        showArchived: g,
        showDraftBadge: O,
        showArchivedBadge: _
      };
      s = n(n({}, d), T);
    }
    return s;
  }
  e.default = i;
})(ll);
var Fm = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Vo, "__esModule", { value: !0 });
var Um = Fm(ll);
Vo.default = Um.default;
var $o = {}, Go = {};
Object.defineProperty(Go, "__esModule", { value: !0 });
var oa = re, La = ir, Vm = vo, dl = ai, fl = Kt, $m = ke;
function Gm(e) {
  var n = e.title, t = $m.useAppBridge(), r = oa.useRef({ title: n }), a = oa.useMemo(function() {
    return Vm.create(t, {});
  }, [t]);
  return oa.useEffect(function() {
    var i, o = JSON.stringify(r.current) !== JSON.stringify(e);
    if (r.current = e, o)
      a.set(Hm(t, e));
    else {
      var c = e.primaryAction, y = e.secondaryActions, u = e.actionGroups, f = e.breadcrumbs, l = Array.isArray(f) ? f[f.length - 1] : f;
      er(l, a.options.breadcrumbs), er(c, (i = a.options.buttons) === null || i === void 0 ? void 0 : i.primary), qm(a, y), Wm(a, u);
    }
    return function() {
      a.unsubscribe();
    };
  }, [a, e]), null;
}
Go.default = Gm;
function qm(e, n) {
  var t, r, a = ((r = (t = e.options.buttons) === null || t === void 0 ? void 0 : t.secondary) === null || r === void 0 ? void 0 : r.filter(function(i) {
    return !dl.isGroupedButton(i);
  })) || [];
  a == null || a.forEach(function(i, o) {
    return er(
      n == null ? void 0 : n[o],
      // This needs to be casted as the React TitleBar component doesn't accept button groups for secondary actions
      i
    );
  });
}
function Wm(e, n) {
  var t, r, a = ((r = (t = e.options.buttons) === null || t === void 0 ? void 0 : t.secondary) === null || r === void 0 ? void 0 : r.filter(dl.isGroupedButton)) || [];
  a == null || a.forEach(function(i, o) {
    var c = n == null ? void 0 : n[o];
    c && i.options.buttons.forEach(function(y, u) {
      return er(c.actions[u], y);
    });
  });
}
function Hm(e, n) {
  var t = n.actionGroups, r = n.breadcrumbs, a = n.primaryAction, i = n.secondaryActions, o = n.title, c = Array.isArray(r) ? r[r.length - 1] : r;
  return {
    title: o,
    buttons: fl.transformActions(e, {
      primaryAction: a,
      secondaryActions: i,
      actionGroups: t
    }),
    breadcrumbs: c ? zm(e, c) : void 0
  };
}
function zm(e, n, t) {
  var r = t || La.create(e, {
    label: n.content || ""
  });
  return er(n, r), r;
}
function er(e, n) {
  if (!(!e || !n)) {
    var t = fl.generateRedirect(n.app, e.url, e.target, e.external);
    t && n.subscribe(La.Action.CLICK, t, n), e != null && e.onAction && n.subscribe(La.Action.CLICK, e.onAction, n);
  }
}
var Km = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty($o, "__esModule", { value: !0 });
var Qm = Km(Go);
$o.default = Qm.default;
var qo = {}, pl = {};
(function(e) {
  var n = b && b.__extends || function() {
    var c = function(y, u) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, l) {
        f.__proto__ = l;
      } || function(f, l) {
        for (var h in l)
          Object.prototype.hasOwnProperty.call(l, h) && (f[h] = l[h]);
      }, c(y, u);
    };
    return function(y, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      c(y, u);
      function f() {
        this.constructor = y;
      }
      y.prototype = u === null ? Object.create(u) : (f.prototype = u.prototype, new f());
    };
  }(), t = b && b.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DEFAULT_TOAST_DURATION = void 0;
  var r = t(re), a = At, i = vt;
  e.DEFAULT_TOAST_DURATION = 5e3;
  var o = (
    /** @class */
    function(c) {
      n(y, c);
      function y() {
        return c !== null && c.apply(this, arguments) || this;
      }
      return y.prototype.componentDidMount = function() {
        var u = this.context, f = this.props, l = f.error, h = f.content, p = f.duration, d = p === void 0 ? e.DEFAULT_TOAST_DURATION : p, s = f.onDismiss;
        this.toast = a.Toast.create(u, {
          message: h,
          duration: d,
          isError: l
        }), this.toast.subscribe(a.Toast.Action.CLEAR, s), this.toast.dispatch(a.Toast.Action.SHOW);
      }, y.prototype.componentWillUnmount = function() {
        this.toast.unsubscribe();
      }, y.prototype.render = function() {
        return null;
      }, y.contextType = i.AppBridgeContext, y;
    }(r.default.PureComponent)
  );
  e.default = o;
})(pl);
var Ym = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(qo, "__esModule", { value: !0 });
var Jm = Ym(pl);
qo.default = Jm.default;
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(h, p, d, s) {
    s === void 0 && (s = d), Object.defineProperty(h, s, { enumerable: !0, get: function() {
      return p[d];
    } });
  } : function(h, p, d, s) {
    s === void 0 && (s = d), h[s] = p[d];
  }), t = b && b.__exportStar || function(h, p) {
    for (var d in h)
      d !== "default" && !Object.prototype.hasOwnProperty.call(p, d) && n(p, h, d);
  }, r = b && b.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Toast = e.TitleBar = e.ResourcePicker = e.Provider = e.NavigationMenu = e.ModalContent = e.Modal = e.Loading = e.ContextualSaveBar = void 0;
  var a = Za;
  Object.defineProperty(e, "ContextualSaveBar", { enumerable: !0, get: function() {
    return r(a).default;
  } });
  var i = Po;
  Object.defineProperty(e, "Loading", { enumerable: !0, get: function() {
    return r(i).default;
  } });
  var o = nl;
  Object.defineProperty(e, "Modal", { enumerable: !0, get: function() {
    return r(o).default;
  } }), Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return o.ModalContent;
  } });
  var c = Co;
  Object.defineProperty(e, "NavigationMenu", { enumerable: !0, get: function() {
    return r(c).default;
  } });
  var y = No;
  Object.defineProperty(e, "Provider", { enumerable: !0, get: function() {
    return r(y).default;
  } });
  var u = Vo;
  Object.defineProperty(e, "ResourcePicker", { enumerable: !0, get: function() {
    return r(u).default;
  } });
  var f = $o;
  Object.defineProperty(e, "TitleBar", { enumerable: !0, get: function() {
    return r(f).default;
  } });
  var l = qo;
  Object.defineProperty(e, "Toast", { enumerable: !0, get: function() {
    return r(l).default;
  } }), t(Lo, e), t(Do, e);
})(Os);
var hl = {}, yl = {}, fi = {}, Xm = b && b.__awaiter || function(e, n, t, r) {
  function a(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function c(f) {
      try {
        u(r.next(f));
      } catch (l) {
        o(l);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (l) {
        o(l);
      }
    }
    function u(f) {
      f.done ? i(f.value) : a(f.value).then(c, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, Zm = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(f) {
      return y([u, f]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done)
          return i;
        switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = u;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(u);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (f) {
        u = [6, f], a = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.useAppBridgeState = void 0;
var Fn = re, xm = ke, eg = function(e) {
  var n = xm.useAppBridge(), t = Fn.useState(), r = t[0], a = t[1], i = Fn.useRef(!1), o = Fn.useCallback(function() {
    return Xm(void 0, void 0, void 0, function() {
      var c, y;
      return Zm(this, function(u) {
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
            return c = y, i.current ? [
              2
              /*return*/
            ] : (a(function(f) {
              return JSON.stringify(c) === JSON.stringify(f) ? f : c;
            }), [
              2
              /*return*/
            ]);
        }
      });
    });
  }, [n, e]);
  return Fn.useEffect(function() {
    return o(), n.subscribe(function() {
      o();
    });
  }, [n, o]), Fn.useEffect(function() {
    return function() {
      i.current = !0;
    };
  }, [n]), r;
};
fi.useAppBridgeState = eg;
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, a, i, o) {
    o === void 0 && (o = i), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(r, a, i, o) {
    o === void 0 && (o = i), r[o] = a[i];
  }), t = b && b.__exportStar || function(r, a) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && n(a, r, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(fi, e);
})(yl);
var vl = {}, pi = {}, Ic = b && b.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
};
Object.defineProperty(pi, "__esModule", { value: !0 });
pi.useContextualSaveBar = void 0;
var mt = re, Ut = go, tg = ke;
function ng() {
  var e = tg.useAppBridge(), n = mt.useState(), t = n[0], r = n[1], a = mt.useState(), i = a[0], o = a[1], c = mt.useMemo(function() {
    return Ut.create(e);
  }, [e]), y = mt.useCallback(function(h) {
    c.dispatch(Ut.Action.SHOW), h && c.set(h);
  }, [c]), u = mt.useCallback(function() {
    c.dispatch(Ut.Action.HIDE);
  }, [c]), f = mt.useMemo(function() {
    return {
      setOptions: function(h) {
        var p = h.onAction, d = Ic(h, ["onAction"]);
        r(function() {
          return p;
        }), Object.keys(d).length && c.set({ saveAction: d });
      }
    };
  }, [c]), l = mt.useMemo(function() {
    return {
      setOptions: function(h) {
        var p = h.onAction, d = Ic(h, ["onAction"]);
        o(function() {
          return p;
        }), Object.keys(d).length && c.set({ discardAction: d });
      }
    };
  }, [c]);
  return mt.useEffect(function() {
    return c.subscribe(Ut.Action.DISCARD, function() {
      c.dispatch(Ut.Action.HIDE), i == null || i();
    });
  }, [c, i]), mt.useEffect(function() {
    return c.subscribe(Ut.Action.SAVE, function() {
      c.dispatch(Ut.Action.HIDE), t == null || t();
    });
  }, [c, t]), mt.useEffect(function() {
    c.unsubscribe();
  }, [c, t]), { show: y, hide: u, saveAction: f, discardAction: l };
}
pi.useContextualSaveBar = ng;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useContextualSaveBar = void 0;
  var n = pi;
  Object.defineProperty(e, "useContextualSaveBar", { enumerable: !0, get: function() {
    return n.useContextualSaveBar;
  } });
})(vl);
var Wo = {}, hi = {}, rg = b && b.__awaiter || function(e, n, t, r) {
  function a(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function c(f) {
      try {
        u(r.next(f));
      } catch (l) {
        o(l);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (l) {
        o(l);
      }
    }
    function u(f) {
      f.done ? i(f.value) : a(f.value).then(c, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, ig = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(f) {
      return y([u, f]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done)
          return i;
        switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = u;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(u);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (f) {
        u = [6, f], a = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(hi, "__esModule", { value: !0 });
hi.useFeaturesAvailable = void 0;
var Un = re, ag = co, og = ke;
function ug() {
  for (var e = this, n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  var r = og.useAppBridge(), a = Un.useState(), i = a[0], o = a[1], c = Un.useRef([]), y = Un.useCallback(function() {
    var u = !1;
    return function() {
      return rg(e, void 0, void 0, function() {
        var f;
        return ig(this, function(l) {
          switch (l.label) {
            case 0:
              return [4, r.featuresAvailable.apply(r, c.current)];
            case 1:
              return f = l.sent(), u || o(function(h) {
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
  return Un.useEffect(function() {
    return c.current = n, y();
  }, [JSON.stringify(n)]), Un.useEffect(function() {
    var u, f = r.subscribe(ag.Action.UPDATE, function() {
      u = y();
    });
    return function() {
      f(), u == null || u();
    };
  }, [r, y]), i;
}
hi.useFeaturesAvailable = ug;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useFeaturesAvailable = void 0;
  var n = hi;
  Object.defineProperty(e, "useFeaturesAvailable", { enumerable: !0, get: function() {
    return n.useFeaturesAvailable;
  } });
})(Wo);
var ml = {}, yi = {};
Object.defineProperty(yi, "__esModule", { value: !0 });
yi.useFeatureRequest = void 0;
var Pr = re, jc = ao, cg = ke, sg = Wo;
function lg(e, n) {
  var t = cg.useAppBridge(), r = sg.useFeaturesAvailable(), a = Pr.useState(), i = a[0], o = a[1], c = Pr.useCallback(function(y) {
    var u = y == null ? void 0 : y[e];
    if (n && (u != null && u[n])) {
      var f = u == null ? void 0 : u[n];
      o(function(l) {
        return JSON.stringify(f) !== JSON.stringify(l) ? f : l;
      });
      return;
    }
    o(function(l) {
      return JSON.stringify(u) !== JSON.stringify(l) ? u : l;
    });
  }, [e, n]);
  return Pr.useEffect(function() {
    jc.create(t).dispatch(jc.Action.REQUEST, { feature: e, action: n });
  }, [t, e, n]), Pr.useEffect(function() {
    c(r);
  }, [r, c]), i;
}
yi.useFeatureRequest = lg;
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, a, i, o) {
    o === void 0 && (o = i), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(r, a, i, o) {
    o === void 0 && (o = i), r[o] = a[i];
  }), t = b && b.__exportStar || function(r, a) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && n(a, r, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(yi, e);
})(ml);
var gl = {}, An = {}, Ho = {}, vi = {};
Object.defineProperty(vi, "__esModule", { value: !0 });
vi.useNavigationHistory = void 0;
var dg = re, ua = At, fg = ke;
function pg() {
  var e = fg.useAppBridge();
  return dg.useMemo(function() {
    var n = ua.History.create(e);
    function t(a) {
      n.dispatch(ua.History.Action.PUSH, a.pathname);
    }
    function r(a) {
      n.dispatch(ua.History.Action.REPLACE, a.pathname);
    }
    return { push: t, replace: r };
  }, []);
}
vi.useNavigationHistory = pg;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useNavigationHistory = void 0;
  var n = vi;
  Object.defineProperty(e, "useNavigationHistory", { enumerable: !0, get: function() {
    return n.useNavigationHistory;
  } });
})(Ho);
var Pn = b && b.__assign || function() {
  return Pn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Pn.apply(this, arguments);
}, hg = b && b.__createBinding || (Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return n[t];
  } });
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
}), yg = b && b.__setModuleDefault || (Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
}), vg = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var n = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && hg(n, e, t);
  return yg(n, e), n;
};
Object.defineProperty(An, "__esModule", { value: !0 });
An.isAdminSection = An.useNavigate = void 0;
var ca = re, an = vg(ci), mg = ke, gg = Ho;
function bg() {
  var e = mg.useAppBridge(), n = gg.useNavigationHistory(), t = ca.useMemo(function() {
    return an.create(e);
  }, [e]), r = ca.useCallback(function(a, i) {
    var o = _g(a), c = o.startsWith(e.localOrigin), y = o.startsWith(e.hostOrigin), u = o.startsWith("/");
    if (c || y || u) {
      var f = _l(o);
      if (y || (i == null ? void 0 : i.target) === "new" || (i == null ? void 0 : i.target) === "host") {
        t.dispatch(an.Action.ADMIN_PATH, {
          path: f.replace(/^\/admin/, ""),
          newContext: (i == null ? void 0 : i.target) === "new"
        });
        return;
      }
      if (((i == null ? void 0 : i.target) === "self" || !(i != null && i.target)) && (i != null && i.replace)) {
        n.replace({ pathname: f });
        return;
      }
      t.dispatch(an.Action.APP, f);
      return;
    }
    t.dispatch(an.Action.REMOTE, {
      url: o,
      newContext: (i == null ? void 0 : i.target) === "new"
    });
  }, [t, n]);
  return ca.useCallback(function(a, i) {
    if (bl(a)) {
      var o = Pn(Pn({}, a), { name: an.ResourceType[a.name] });
      t.dispatch(an.Action.ADMIN_SECTION, {
        section: o,
        newContext: (i == null ? void 0 : i.target) === "new"
      });
      return;
    }
    r(a, i);
  }, [r, t]);
}
An.useNavigate = bg;
function bl(e) {
  return typeof e == "object" && typeof (e == null ? void 0 : e.name) == "string";
}
An.isAdminSection = bl;
function Cc(e) {
  var n = e.pathname, t = e.search, r = e.hash;
  return "" + n + (t || "") + (r || "");
}
function _g(e) {
  return e instanceof URL ? e.toString() : typeof e == "string" ? e : _l(e);
}
function _l(e) {
  if (typeof e == "string")
    return e.startsWith("/") ? e : Cc(new URL(e));
  var n = e.search instanceof URLSearchParams ? e.search.toString() : e.search;
  return Cc(Pn(Pn({}, e), { search: n }));
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useNavigate = void 0;
  var n = An;
  Object.defineProperty(e, "useNavigate", { enumerable: !0, get: function() {
    return n.useNavigate;
  } });
})(gl);
var Ol = {}, Al = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = e.DEFAULT_TOAST_DURATION = void 0;
  var n = re, t = mo, r = ke;
  e.DEFAULT_TOAST_DURATION = 5e3;
  function a() {
    var i = r.useAppBridge(), o, c = n.useCallback(function(y, u) {
      o = t.create(i, {
        message: y,
        isError: u == null ? void 0 : u.isError,
        duration: (u == null ? void 0 : u.duration) || e.DEFAULT_TOAST_DURATION
      }), o.dispatch(t.Action.SHOW), u != null && u.onDismiss && o.subscribe(t.Action.CLEAR, u == null ? void 0 : u.onDismiss);
    }, [i]);
    return n.useEffect(function() {
      return function() {
        o.unsubscribe();
      };
    }, []), { show: c };
  }
  e.useToast = a;
})(Al);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = void 0;
  var n = Al;
  Object.defineProperty(e, "useToast", { enumerable: !0, get: function() {
    return n.useToast;
  } });
})(Ol);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = e.useNavigationHistory = e.useNavigate = e.useFeatureRequest = e.useFeaturesAvailable = e.useContextualSaveBar = e.useAppBridgeState = void 0;
  var n = yl;
  Object.defineProperty(e, "useAppBridgeState", { enumerable: !0, get: function() {
    return n.useAppBridgeState;
  } });
  var t = vl;
  Object.defineProperty(e, "useContextualSaveBar", { enumerable: !0, get: function() {
    return t.useContextualSaveBar;
  } });
  var r = Wo;
  Object.defineProperty(e, "useFeaturesAvailable", { enumerable: !0, get: function() {
    return r.useFeaturesAvailable;
  } });
  var a = ml;
  Object.defineProperty(e, "useFeatureRequest", { enumerable: !0, get: function() {
    return a.useFeatureRequest;
  } });
  var i = gl;
  Object.defineProperty(e, "useNavigate", { enumerable: !0, get: function() {
    return i.useNavigate;
  } });
  var o = Ho;
  Object.defineProperty(e, "useNavigationHistory", { enumerable: !0, get: function() {
    return o.useNavigationHistory;
  } });
  var c = Ol;
  Object.defineProperty(e, "useToast", { enumerable: !0, get: function() {
    return c.useToast;
  } });
})(hl);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(i, o, c, y) {
    y === void 0 && (y = c), Object.defineProperty(i, y, { enumerable: !0, get: function() {
      return o[c];
    } });
  } : function(i, o, c, y) {
    y === void 0 && (y = c), i[y] = o[c];
  }), t = b && b.__exportStar || function(i, o) {
    for (var c in i)
      c !== "default" && !Object.prototype.hasOwnProperty.call(o, c) && n(o, i, c);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useAppBridge = e.Context = void 0;
  var r = vt;
  Object.defineProperty(e, "Context", { enumerable: !0, get: function() {
    return r.AppBridgeContext;
  } });
  var a = ke;
  Object.defineProperty(e, "useAppBridge", { enumerable: !0, get: function() {
    return a.useAppBridge;
  } }), t(Os, e), t(hl, e);
})(bs);
const Og = /* @__PURE__ */ Fc(bs);
var Pl = {}, Sl = {}, Sn = {}, it = {};
Object.defineProperty(it, "__esModule", { value: !0 });
it.isShopifyPing = it.isShopifyPOS = it.isShopifyMobile = it.isShopifyEmbedded = it.isMobile = void 0;
var Mc = ar;
function Ag() {
  return El() || Tl() || wl();
}
it.isMobile = Ag;
function Pg() {
  return Mc.isClient && window.top !== window.self || Mc.isUnframed;
}
it.isShopifyEmbedded = Pg;
function El() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Mobile") >= 0;
}
it.isShopifyMobile = El;
function Tl() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify POS") >= 0;
}
it.isShopifyPOS = Tl;
function wl() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Ping") >= 0;
}
it.isShopifyPing = wl;
var Sg = b && b.__awaiter || function(e, n, t, r) {
  function a(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function c(f) {
      try {
        u(r.next(f));
      } catch (l) {
        o(l);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (l) {
        o(l);
      }
    }
    function u(f) {
      f.done ? i(f.value) : a(f.value).then(c, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, Eg = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(f) {
      return y([u, f]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done)
          return i;
        switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = u;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(u);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (f) {
        u = [6, f], a = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Sn, "__esModule", { value: !0 });
Sn.createMutationObserver = Sn.setupModalAutoSizing = void 0;
var Tg = ui, wg = jn, Ig = it, Fa = "app-bridge-utils-modal-auto-size", Sr = jg();
function jg() {
  if (typeof document > "u")
    return null;
  var e = document.createElement("style");
  return e.type = "text/css", e.innerHTML = "." + Fa + " { overflow: hidden; height: auto; min-height: auto; }", e;
}
function Cg(e, n) {
  if (!Sr)
    return function() {
    };
  var t = document.getElementsByTagName("head")[0], r = document.body.classList;
  t.appendChild(Sr), r.add(Fa);
  var a = Il(e, n);
  return function() {
    r.remove(Fa), t.contains(Sr) && t.removeChild(Sr), a && a.disconnect();
  };
}
function Mg(e) {
  return Sg(this, void 0, void 0, function() {
    function n() {
      r && (r(), r = void 0);
    }
    function t(a) {
      var i = a.context, o = a.modal.id;
      return Ig.isMobile() || i !== wg.Context.Modal ? (n(), n) : (r || (r = Cg(e, o)), n);
    }
    var r;
    return Eg(this, function(a) {
      switch (a.label) {
        case 0:
          return [4, e.getState().then(t)];
        case 1:
          return a.sent(), [2, n];
      }
    });
  });
}
Sn.setupModalAutoSizing = Mg;
function Il(e, n) {
  if (typeof document > "u")
    return;
  var t = -1, r, a = {
    attributes: !0,
    attributeOldValue: !1,
    characterData: !0,
    characterDataOldValue: !1,
    childList: !0,
    subtree: !0
  }, i = new MutationObserver(o);
  i.observe(document, a), c();
  function o() {
    r && window.clearTimeout(r), r = window.setTimeout(c, 16);
  }
  function c() {
    var y = document.body.scrollHeight;
    y !== t && (t = y, e.dispatch(Tg.updateModalSize({ id: n, height: String(y) })));
  }
  return i;
}
Sn.createMutationObserver = Il;
var jl = {}, cr = {}, Ng = b && b.__createBinding || (Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return n[t];
  } });
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
}), Rg = b && b.__setModuleDefault || (Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
}), Dg = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var n = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && Ng(n, e, t);
  return Rg(n, e), n;
}, kg = b && b.__awaiter || function(e, n, t, r) {
  function a(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function c(f) {
      try {
        u(r.next(f));
      } catch (l) {
        o(l);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (l) {
        o(l);
      }
    }
    function u(f) {
      f.done ? i(f.value) : a(f.value).then(c, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, Bg = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(f) {
      return y([u, f]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done)
          return i;
        switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = u;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(u);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (f) {
        u = [6, f], a = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(cr, "__esModule", { value: !0 });
cr.getSessionToken = void 0;
var Nc = Dg(yo), Rc = Yt;
function Lg(e) {
  return kg(this, void 0, void 0, function() {
    return Bg(this, function(n) {
      return [2, new Promise(function(t, r) {
        var a = e.subscribe(Nc.Action.RESPOND, function(i) {
          var o = i.sessionToken;
          o ? t(o) : r(Rc.fromAction("Failed to retrieve a session token", Rc.Action.FAILED_AUTHENTICATION)), a();
        });
        e.dispatch(Nc.request());
      })];
    });
  });
}
cr.getSessionToken = Lg;
var mi = {}, Zr = b && b.__assign || function() {
  return Zr = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Zr.apply(this, arguments);
}, Fg = b && b.__awaiter || function(e, n, t, r) {
  function a(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function c(f) {
      try {
        u(r.next(f));
      } catch (l) {
        o(l);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (l) {
        o(l);
      }
    }
    function u(f) {
      f.done ? i(f.value) : a(f.value).then(c, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, Ug = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(f) {
      return y([u, f]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done)
          return i;
        switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = u;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(u);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (f) {
        u = [6, f], a = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(mi, "__esModule", { value: !0 });
mi.authenticatedFetch = void 0;
var Vg = cr;
function $g(e, n) {
  var t = this;
  return n === void 0 && (n = fetch), function(r, a) {
    return a === void 0 && (a = {}), Fg(t, void 0, void 0, function() {
      var i, o, c;
      return Ug(this, function(y) {
        switch (y.label) {
          case 0:
            return [4, Vg.getSessionToken(e)];
          case 1:
            return i = y.sent(), o = new Headers(a.headers), o.append("Authorization", "Bearer " + i), o.append("X-Requested-With", "XMLHttpRequest"), c = {}, o.forEach(function(u, f) {
              c[f] = u;
            }), [2, n(r, Zr(Zr({}, a), { headers: c }))];
        }
      });
    });
  };
}
mi.authenticatedFetch = $g;
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, a, i, o) {
    o === void 0 && (o = i), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(r, a, i, o) {
    o === void 0 && (o = i), r[o] = a[i];
  }), t = b && b.__exportStar || function(r, a) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && n(a, r, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(cr, e), t(mi, e);
})(jl);
var Cl = {}, sr = {}, Ml = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.generateUuid = void 0;
  var n = In;
  Object.defineProperty(e, "generateUuid", { enumerable: !0, get: function() {
    return n.generateUuid;
  } }), e.default = n.generateUuid;
})(Ml);
var Gg = b && b.__createBinding || (Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return n[t];
  } });
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
}), qg = b && b.__setModuleDefault || (Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
}), Wg = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var n = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && Gg(n, e, t);
  return qg(n, e), n;
}, Hg = b && b.__awaiter || function(e, n, t, r) {
  function a(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function c(f) {
      try {
        u(r.next(f));
      } catch (l) {
        o(l);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (l) {
        o(l);
      }
    }
    function u(f) {
      f.done ? i(f.value) : a(f.value).then(c, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, zg = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(f) {
      return y([u, f]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done)
          return i;
        switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = u;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(u);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (f) {
        u = [6, f], a = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, Kg = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.getAuthorizationCodePayload = void 0;
var Dc = Wg(eo), kc = Yt, Qg = Kg(Ml);
function Yg(e) {
  return Hg(this, void 0, void 0, function() {
    return zg(this, function(n) {
      return [2, new Promise(function(t, r) {
        var a = Qg.default(), i = e.subscribe(Dc.Action.RESPOND, function(o) {
          switch (o == null ? void 0 : o.status) {
            case "needsExchange":
              t(o);
              break;
            default:
              r(kc.fromAction("Failed to retrieve an authorization code", kc.Action.FAILED_AUTHENTICATION));
          }
          i();
        }, a);
        e.dispatch(Dc.request(a));
      })];
    });
  });
}
sr.getAuthorizationCodePayload = Yg;
var gi = {}, Jg = b && b.__awaiter || function(e, n, t, r) {
  function a(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function c(f) {
      try {
        u(r.next(f));
      } catch (l) {
        o(l);
      }
    }
    function y(f) {
      try {
        u(r.throw(f));
      } catch (l) {
        o(l);
      }
    }
    function u(f) {
      f.done ? i(f.value) : a(f.value).then(c, y);
    }
    u((r = r.apply(e, n || [])).next());
  });
}, Xg = b && b.__generator || function(e, n) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(f) {
      return y([u, f]);
    };
  }
  function y(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done)
          return i;
        switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = u;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(u);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (f) {
        u = [6, f], a = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(gi, "__esModule", { value: !0 });
gi.userAuthorizedFetch = void 0;
var Zg = sr, xg = "auth/shopify/callback";
function eb(e) {
  var n = e.headers.get("X-Shopify-API-Request-Failure-Unauthorized");
  return n ? n.toLowerCase() === "true" : !1;
}
function tb(e) {
  var n = this, t = e.app, r = e.callbackUri, a = r === void 0 ? xg : r, i = e.isAuthorizationCodeRequired, o = i === void 0 ? eb : i, c = e.fetchOperation;
  return function(y, u) {
    return Jg(n, void 0, void 0, function() {
      var f, l, h, p, d, s, v, m;
      return Xg(this, function(g) {
        switch (g.label) {
          case 0:
            return [4, c(y, u)];
          case 1:
            return f = g.sent(), o(f) ? [4, Zg.getAuthorizationCodePayload(t)] : [2, f];
          case 2:
            return l = g.sent(), h = l.code, p = l.hmac, d = l.shop, s = l.timestamp, v = encodeURI("https://" + window.location.hostname + "/" + a + "?code=" + h + "&hmac=" + p + "&shop=" + d + "&timestamp=" + s), [4, c(v, {})];
          case 3:
            if (m = g.sent(), !m.ok)
              throw new Error("Failed to authorize request.");
            return [2, c(y, u)];
        }
      });
    });
  };
}
gi.userAuthorizedFetch = tb;
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, a, i, o) {
    o === void 0 && (o = i), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(r, a, i, o) {
    o === void 0 && (o = i), r[o] = a[i];
  }), t = b && b.__exportStar || function(r, a) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && n(a, r, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(sr, e), t(gi, e);
})(Cl);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, a, i, o) {
    o === void 0 && (o = i), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(r, a, i, o) {
    o === void 0 && (o = i), r[o] = a[i];
  }), t = b && b.__exportStar || function(r, a) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && n(a, r, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Sn, e), t(it, e), t(jl, e), t(Cl, e);
})(Sl);
(function(e) {
  var n = b && b.__createBinding || (Object.create ? function(r, a, i, o) {
    o === void 0 && (o = i), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(r, a, i, o) {
    o === void 0 && (o = i), r[o] = a[i];
  }), t = b && b.__exportStar || function(r, a) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && n(a, r, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Sl, e);
})(Pl);
var Tt;
(function(e) {
  e[e.Standalone = 0] = "Standalone", e[e.Embedded = 1] = "Embedded";
})(Tt || (Tt = {}));
const nb = `
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
`, rb = Yl(({ children: e, forceRedirect: n, isEmbedded: t, gadgetAppUrl: r, originalQueryParams: a, api: i, isRootFrameRequest: o, type: c, isInstallRequest: y }) => {
  var g, O;
  const u = Bc(_s), [f, l] = Lc({
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !0,
    appBridge: u,
    isRootFrameRequest: !1
  });
  Er(() => {
    if (!u) {
      console.debug("[gadget-rsab] no app bridge, skipping client auth setup");
      return;
    }
    i.connection.setAuthenticationMode({
      custom: {
        processFetch: async (_, T) => {
          const P = new Headers(T.headers);
          P.append("Authorization", `ShopifySessionToken ${await Pl.getSessionToken(u)}`), T.headers ?? (T.headers = {}), P.forEach(function(E, S) {
            T.headers[S] = E;
          });
        },
        processTransactionConnectionParams(_) {
          throw new Error("client side transactions yet not supported in Shopify Gadget provider");
        }
      }
    }), console.debug("[gadget-rsab] set up client auth for session tokens");
  }, [i.connection, u]);
  let h = !1, p = !1;
  const [{ data: d, fetching: s, error: v }] = gs({
    query: nb,
    // for now don't fetch a session's shop in standalone mode since it leverages session tokens which aren't available if standalone
    pause: c == Tt.Standalone
  });
  d ? (h = (g = d.shopifyConnection) == null ? void 0 : g.requiresReauthentication, d.currentSession && (d.currentSession.shop ? p = !((O = d.shopifyConnection) != null && O.requiresReauthentication) : h = !0)) : c == Tt.Standalone && y && (h = !0), Er(() => {
    if (!h || o)
      return;
    const _ = new URL("/api/connections/auth/shopify", r);
    _.search = (a == null ? void 0 : a.toString()) ?? "";
    const T = _.toString();
    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process", {
      appType: c,
      isInstallRequest: y,
      isEmbedded: t,
      redirectURL: T,
      gadgetAppUrl: r
    }), t && u ? At.Redirect.create(u).dispatch(At.Redirect.Action.REMOTE, T) : window.location.assign(T);
  }, [u, r, t, o, a, h]);
  const m = (n || h || s) && !o;
  return Er(() => {
    const _ = {
      isAuthenticated: p,
      isEmbedded: t,
      canAuth: !!u,
      loading: m,
      appBridge: u,
      error: v,
      isRootFrameRequest: o
    };
    return console.debug("[gadget-rsab] context changed", _), l(_);
  }, [m, t, u, p, v, o]), re.createElement(ab.Provider, { value: f }, e);
}), ib = ({ type: e, children: n, shopifyApiKey: t, api: r, router: a }) => {
  const [i, o] = Lc(null), c = !!i, { query: y } = i ?? {}, u = (y == null ? void 0 : y.get("host")) ?? void 0, f = e ?? Tt.Embedded, l = Mr(() => y, [c]), h = (y == null ? void 0 : y.has("hmac")) && (y == null ? void 0 : y.has("shop")), p = typeof window < "u" ? window.top !== window.self : !1, d = typeof window < "u" && !!window.MobileWebView, s = p || d, v = s == (f == Tt.Embedded) && (f == Tt.Standalone ? !h : !0), m = !(y != null && y.has("hmac")) && !(y != null && y.has("shop")) && f == Tt.Embedded, g = c && typeof u < "u" && !v, O = new URL(r.connection.options.endpoint).origin;
  Er(() => {
    o({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search)
    });
  }, []);
  let _ = re.createElement(
    mh,
    { api: r },
    re.createElement(rb, { forceRedirect: g, isEmbedded: s, gadgetAppUrl: O, api: r, originalQueryParams: l, isRootFrameRequest: m, type: f, isInstallRequest: !!h }, n)
  );
  const T = u && f != Tt.Standalone && (!h || v);
  return console.debug("[gadget-rsab] provider rendering", {
    host: u,
    coalescedType: f,
    isInstallRequest: h,
    isReady: c,
    isEmbedded: s,
    isRootFrameRequest: m,
    inDestinationContext: v,
    shouldMountAppBridge: T
  }), T && (_ = re.createElement(Og.Provider, { config: {
    apiKey: t,
    host: u,
    forceRedirect: g
  }, router: a }, _)), _;
}, ab = Jl({
  loading: !0,
  isEmbedded: !1,
  isAuthenticated: !1,
  canAuth: !1,
  appBridge: null,
  isRootFrameRequest: !1
}), Nl = new Mp(), ob = () => {
  const [{ data: e }] = kh(Nl.shopifyProduct);
  return /* @__PURE__ */ Nr.jsx(Nr.Fragment, { children: JSON.stringify(e) });
}, fb = () => /* @__PURE__ */ Nr.jsx(ib, { api: Nl, shopifyApiKey: "deadbeef", children: /* @__PURE__ */ Nr.jsx(ob, {}) });
export {
  fb as A,
  ob as R,
  b as c
};
