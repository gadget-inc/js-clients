import * as Ge from "react";
import Xr, { useMemo as Gn, useContext as hl, useRef as ml } from "react";
var Ai = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function vl(e) {
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
var Ln = { exports: {} }, Gt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function bl() {
  if (fa)
    return Gt;
  fa = 1;
  var e = Xr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, c) {
    var f, d = {}, p = null, y = null;
    c !== void 0 && (p = "" + c), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (y = u.ref);
    for (f in u)
      n.call(u, f) && !a.hasOwnProperty(f) && (d[f] = u[f]);
    if (s && s.defaultProps)
      for (f in u = s.defaultProps, u)
        d[f] === void 0 && (d[f] = u[f]);
    return { $$typeof: t, type: s, key: p, ref: y, props: d, _owner: i.current };
  }
  return Gt.Fragment = r, Gt.jsx = o, Gt.jsxs = o, Gt;
}
var Lt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pa;
function Sl() {
  return pa || (pa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Xr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), m = Symbol.iterator, S = "@@iterator";
    function A(l) {
      if (l === null || typeof l != "object")
        return null;
      var g = m && l[m] || l[S];
      return typeof g == "function" ? g : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(l) {
      {
        for (var g = arguments.length, b = new Array(g > 1 ? g - 1 : 0), I = 1; I < g; I++)
          b[I - 1] = arguments[I];
        R("error", l, b);
      }
    }
    function R(l, g, b) {
      {
        var I = x.ReactDebugCurrentFrame, q = I.getStackAddendum();
        q !== "" && (g += "%s", b = b.concat([q]));
        var G = b.map(function(D) {
          return String(D);
        });
        G.unshift("Warning: " + g), Function.prototype.apply.call(console[l], console, G);
      }
    }
    var h = !1, w = !1, v = !1, F = !1, J = !1, Te;
    Te = Symbol.for("react.module.reference");
    function Ke(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === a || J || l === i || l === c || l === f || F || l === y || h || w || v || typeof l == "object" && l !== null && (l.$$typeof === p || l.$$typeof === d || l.$$typeof === o || l.$$typeof === s || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === Te || l.getModuleId !== void 0));
    }
    function yt(l, g, b) {
      var I = l.displayName;
      if (I)
        return I;
      var q = g.displayName || g.name || "";
      return q !== "" ? b + "(" + q + ")" : b;
    }
    function Je(l) {
      return l.displayName || "Context";
    }
    function te(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case s:
            var g = l;
            return Je(g) + ".Consumer";
          case o:
            var b = l;
            return Je(b._context) + ".Provider";
          case u:
            return yt(l, l.render, "ForwardRef");
          case d:
            var I = l.displayName || null;
            return I !== null ? I : te(l.type) || "Memo";
          case p: {
            var q = l, G = q._payload, D = q._init;
            try {
              return te(D(G));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, U = 0, M, C, z, qe, B, Qe, Xe;
    function at() {
    }
    at.__reactDisabledLog = !0;
    function et() {
      {
        if (U === 0) {
          M = console.log, C = console.info, z = console.warn, qe = console.error, B = console.group, Qe = console.groupCollapsed, Xe = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: at,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        U++;
      }
    }
    function re() {
      {
        if (U--, U === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, l, {
              value: M
            }),
            info: P({}, l, {
              value: C
            }),
            warn: P({}, l, {
              value: z
            }),
            error: P({}, l, {
              value: qe
            }),
            group: P({}, l, {
              value: B
            }),
            groupCollapsed: P({}, l, {
              value: Qe
            }),
            groupEnd: P({}, l, {
              value: Xe
            })
          });
        }
        U < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = x.ReactCurrentDispatcher, fr;
    function ht(l, g, b) {
      {
        if (fr === void 0)
          try {
            throw Error();
          } catch (q) {
            var I = q.stack.trim().match(/\n( *(at )?)/);
            fr = I && I[1] || "";
          }
        return `
` + fr + l;
      }
    }
    var ln = !1, pr;
    {
      var zu = typeof WeakMap == "function" ? WeakMap : Map;
      pr = new zu();
    }
    function Yi(l, g) {
      if (!l || ln)
        return "";
      {
        var b = pr.get(l);
        if (b !== void 0)
          return b;
      }
      var I;
      ln = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var G;
      G = Q.current, Q.current = null, et();
      try {
        if (g) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (He) {
              I = He;
            }
            Reflect.construct(l, [], D);
          } else {
            try {
              D.call();
            } catch (He) {
              I = He;
            }
            l.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (He) {
            I = He;
          }
          l();
        }
      } catch (He) {
        if (He && I && typeof He.stack == "string") {
          for (var N = He.stack.split(`
`), ye = I.stack.split(`
`), H = N.length - 1, Z = ye.length - 1; H >= 1 && Z >= 0 && N[H] !== ye[Z]; )
            Z--;
          for (; H >= 1 && Z >= 0; H--, Z--)
            if (N[H] !== ye[Z]) {
              if (H !== 1 || Z !== 1)
                do
                  if (H--, Z--, Z < 0 || N[H] !== ye[Z]) {
                    var $e = `
` + N[H].replace(" at new ", " at ");
                    return l.displayName && $e.includes("<anonymous>") && ($e = $e.replace("<anonymous>", l.displayName)), typeof l == "function" && pr.set(l, $e), $e;
                  }
                while (H >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        ln = !1, Q.current = G, re(), Error.prepareStackTrace = q;
      }
      var gt = l ? l.displayName || l.name : "", ca = gt ? ht(gt) : "";
      return typeof l == "function" && pr.set(l, ca), ca;
    }
    function Ku(l, g, b) {
      return Yi(l, !1);
    }
    function Ju(l) {
      var g = l.prototype;
      return !!(g && g.isReactComponent);
    }
    function dr(l, g, b) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return Yi(l, Ju(l));
      if (typeof l == "string")
        return ht(l);
      switch (l) {
        case c:
          return ht("Suspense");
        case f:
          return ht("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return Ku(l.render);
          case d:
            return dr(l.type, g, b);
          case p: {
            var I = l, q = I._payload, G = I._init;
            try {
              return dr(G(q), g, b);
            } catch {
            }
          }
        }
      return "";
    }
    var yr = Object.prototype.hasOwnProperty, Zi = {}, Xi = x.ReactDebugCurrentFrame;
    function hr(l) {
      if (l) {
        var g = l._owner, b = dr(l.type, l._source, g ? g.type : null);
        Xi.setExtraStackFrame(b);
      } else
        Xi.setExtraStackFrame(null);
    }
    function Qu(l, g, b, I, q) {
      {
        var G = Function.call.bind(yr);
        for (var D in l)
          if (G(l, D)) {
            var N = void 0;
            try {
              if (typeof l[D] != "function") {
                var ye = Error((I || "React class") + ": " + b + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              N = l[D](g, D, I, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              N = H;
            }
            N && !(N instanceof Error) && (hr(q), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", b, D, typeof N), hr(null)), N instanceof Error && !(N.message in Zi) && (Zi[N.message] = !0, hr(q), O("Failed %s type: %s", b, N.message), hr(null));
          }
      }
    }
    var Hu = Array.isArray;
    function cn(l) {
      return Hu(l);
    }
    function Yu(l) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, b = g && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return b;
      }
    }
    function Zu(l) {
      try {
        return ea(l), !1;
      } catch {
        return !0;
      }
    }
    function ea(l) {
      return "" + l;
    }
    function ta(l) {
      if (Zu(l))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yu(l)), ea(l);
    }
    var Ut = x.ReactCurrentOwner, Xu = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ra, na, fn;
    fn = {};
    function el(l) {
      if (yr.call(l, "ref")) {
        var g = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function tl(l) {
      if (yr.call(l, "key")) {
        var g = Object.getOwnPropertyDescriptor(l, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function rl(l, g) {
      if (typeof l.ref == "string" && Ut.current && g && Ut.current.stateNode !== g) {
        var b = te(Ut.current.type);
        fn[b] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(Ut.current.type), l.ref), fn[b] = !0);
      }
    }
    function nl(l, g) {
      {
        var b = function() {
          ra || (ra = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        b.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function il(l, g) {
      {
        var b = function() {
          na || (na = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        b.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var al = function(l, g, b, I, q, G, D) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: g,
        ref: b,
        props: D,
        // Record the component responsible for creating this element.
        _owner: G
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function ol(l, g, b, I, q) {
      {
        var G, D = {}, N = null, ye = null;
        b !== void 0 && (ta(b), N = "" + b), tl(g) && (ta(g.key), N = "" + g.key), el(g) && (ye = g.ref, rl(g, q));
        for (G in g)
          yr.call(g, G) && !Xu.hasOwnProperty(G) && (D[G] = g[G]);
        if (l && l.defaultProps) {
          var H = l.defaultProps;
          for (G in H)
            D[G] === void 0 && (D[G] = H[G]);
        }
        if (N || ye) {
          var Z = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          N && nl(D, Z), ye && il(D, Z);
        }
        return al(l, N, ye, q, I, Ut.current, D);
      }
    }
    var pn = x.ReactCurrentOwner, ia = x.ReactDebugCurrentFrame;
    function mt(l) {
      if (l) {
        var g = l._owner, b = dr(l.type, l._source, g ? g.type : null);
        ia.setExtraStackFrame(b);
      } else
        ia.setExtraStackFrame(null);
    }
    var dn;
    dn = !1;
    function yn(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function aa() {
      {
        if (pn.current) {
          var l = te(pn.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function sl(l) {
      {
        if (l !== void 0) {
          var g = l.fileName.replace(/^.*[\\\/]/, ""), b = l.lineNumber;
          return `

Check your code at ` + g + ":" + b + ".";
        }
        return "";
      }
    }
    var oa = {};
    function ul(l) {
      {
        var g = aa();
        if (!g) {
          var b = typeof l == "string" ? l : l.displayName || l.name;
          b && (g = `

Check the top-level render call using <` + b + ">.");
        }
        return g;
      }
    }
    function sa(l, g) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var b = ul(g);
        if (oa[b])
          return;
        oa[b] = !0;
        var I = "";
        l && l._owner && l._owner !== pn.current && (I = " It was passed a child from " + te(l._owner.type) + "."), mt(l), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, I), mt(null);
      }
    }
    function ua(l, g) {
      {
        if (typeof l != "object")
          return;
        if (cn(l))
          for (var b = 0; b < l.length; b++) {
            var I = l[b];
            yn(I) && sa(I, g);
          }
        else if (yn(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var q = A(l);
          if (typeof q == "function" && q !== l.entries)
            for (var G = q.call(l), D; !(D = G.next()).done; )
              yn(D.value) && sa(D.value, g);
        }
      }
    }
    function ll(l) {
      {
        var g = l.type;
        if (g == null || typeof g == "string")
          return;
        var b;
        if (typeof g == "function")
          b = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === d))
          b = g.propTypes;
        else
          return;
        if (b) {
          var I = te(g);
          Qu(b, l.props, "prop", I, l);
        } else if (g.PropTypes !== void 0 && !dn) {
          dn = !0;
          var q = te(g);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cl(l) {
      {
        for (var g = Object.keys(l.props), b = 0; b < g.length; b++) {
          var I = g[b];
          if (I !== "children" && I !== "key") {
            mt(l), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), mt(null);
            break;
          }
        }
        l.ref !== null && (mt(l), O("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    function la(l, g, b, I, q, G) {
      {
        var D = Ke(l);
        if (!D) {
          var N = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = sl(q);
          ye ? N += ye : N += aa();
          var H;
          l === null ? H = "null" : cn(l) ? H = "array" : l !== void 0 && l.$$typeof === t ? (H = "<" + (te(l.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : H = typeof l, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, N);
        }
        var Z = ol(l, g, b, q, G);
        if (Z == null)
          return Z;
        if (D) {
          var $e = g.children;
          if ($e !== void 0)
            if (I)
              if (cn($e)) {
                for (var gt = 0; gt < $e.length; gt++)
                  ua($e[gt], l);
                Object.freeze && Object.freeze($e);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ua($e, l);
        }
        return l === n ? cl(Z) : ll(Z), Z;
      }
    }
    function fl(l, g, b) {
      return la(l, g, b, !0);
    }
    function pl(l, g, b) {
      return la(l, g, b, !1);
    }
    var dl = pl, yl = fl;
    Lt.Fragment = n, Lt.jsx = dl, Lt.jsxs = yl;
  }()), Lt;
}
process.env.NODE_ENV === "production" ? Ln.exports = bl() : Ln.exports = Sl();
var da = Ln.exports, Jt;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(Jt || (Jt = {}));
const Ol = {
  DateTime(e) {
    return new Date(e);
  }
};
class wl {
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
      a != null && (r[n] = Ol[i](a));
    }
    return r;
  }
}
var Pt = {
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
let Wn = class extends Error {
  constructor(t, r, n, i, a, o, s) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), r && (this.nodes = Array.isArray(r) ? r : [r]), n && (this.source = n), i && (this.positions = i), o && (this.originalError = o);
    var u = s;
    if (!u && o) {
      var c = o.extensions;
      c && typeof c == "object" && (u = c);
    }
    this.extensions = u || {};
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
var L, E;
function X(e) {
  return new Wn(`Syntax Error: Unexpected token at ${E} in ${e}`);
}
function Ae(e) {
  if (e.lastIndex = E, e.test(L))
    return L.slice(E, E = e.lastIndex);
}
var mr = / +(?=[^\s])/y;
function Pl(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, a = t.length - 1, o = 0; o < t.length; o++)
    mr.lastIndex = 0, mr.test(t[o]) && (o && (!n || mr.lastIndex < n) && (n = mr.lastIndex), i = i || o, a = o);
  for (var s = i; s <= a; s++)
    s !== i && (r += `
`), r += t[s].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function $() {
  for (var e = 0 | L.charCodeAt(E++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | L.charCodeAt(E++))
    if (e === 35)
      for (; (e = L.charCodeAt(E++)) !== 10 && e !== 13; )
        ;
  E--;
}
var us = /[_A-Za-z]\w*/y;
function Le() {
  var e;
  if (e = Ae(us))
    return {
      kind: "Name",
      value: e
    };
}
var Il = /(?:null|true|false)/y, ls = /\$[_A-Za-z]\w*/y, Tl = /-?\d+/y, Al = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, El = /\\/g, kl = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, $l = /"(?:"|[^\r\n]*?[^\\]")/y;
function Cr(e) {
  var t, r;
  if (r = Ae(Il))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = Ae(ls)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = Ae(Tl)) {
    var n = r;
    (r = Ae(Al)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = Ae(us))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = Ae(kl))
    t = {
      kind: "StringValue",
      value: Pl(r.slice(3, -3)),
      block: !0
    };
  else if (r = Ae($l))
    t = {
      kind: "StringValue",
      value: El.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (L.charCodeAt(E) === 91) {
      E++, $();
      for (var s = []; o = Cr(a); )
        s.push(o);
      if (L.charCodeAt(E++) !== 93)
        throw X("ListValue");
      return $(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (L.charCodeAt(E) === 123) {
      E++, $();
      for (var o = [], s; s = Le(); ) {
        if ($(), L.charCodeAt(E++) !== 58)
          throw X("ObjectField");
        $();
        var u = Cr(a);
        if (!u)
          throw X("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: u
        });
      }
      if (L.charCodeAt(E++) !== 125)
        throw X("ObjectValue");
      return $(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return $(), t;
}
function cs(e) {
  var t = [];
  if ($(), L.charCodeAt(E) === 40) {
    E++, $();
    for (var r; r = Le(); ) {
      if ($(), L.charCodeAt(E++) !== 58)
        throw X("Argument");
      $();
      var n = Cr(e);
      if (!n)
        throw X("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || L.charCodeAt(E++) !== 41)
      throw X("Argument");
    $();
  }
  return t;
}
function Et(e) {
  var t = [];
  for ($(); L.charCodeAt(E) === 64; ) {
    E++;
    var r = Le();
    if (!r)
      throw X("Directive");
    $(), t.push({
      kind: "Directive",
      name: r,
      arguments: cs(e)
    });
  }
  return t;
}
function jl() {
  var e = Le();
  if (e) {
    $();
    var t;
    if (L.charCodeAt(E) === 58) {
      if (E++, $(), t = e, !(e = Le()))
        throw X("Field");
      $();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: cs(!1),
      directives: Et(!1),
      selectionSet: en()
    };
  }
}
function fs() {
  var e;
  if ($(), L.charCodeAt(E) === 91) {
    E++, $();
    var t = fs();
    if (!t || L.charCodeAt(E++) !== 93)
      throw X("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = Le())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw X("NamedType");
  return $(), L.charCodeAt(E) === 33 ? (E++, $(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Nl = /on/y;
function ps() {
  if (Ae(Nl)) {
    $();
    var e = Le();
    if (!e)
      throw X("NamedType");
    return $(), {
      kind: "NamedType",
      name: e
    };
  }
}
var _l = /\.\.\./y;
function xl() {
  if (Ae(_l)) {
    $();
    var e = E, t;
    if ((t = Le()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Et(!1)
      };
    E = e;
    var r = ps(), n = Et(!1), i = en();
    if (!i)
      throw X("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: i
    };
  }
}
function en() {
  var e;
  if ($(), L.charCodeAt(E) === 123) {
    E++, $();
    for (var t = []; e = xl() || jl(); )
      t.push(e);
    if (!t.length || L.charCodeAt(E++) !== 125)
      throw X("SelectionSet");
    return $(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Cl = /fragment/y;
function Dl() {
  if (Ae(Cl)) {
    $();
    var e = Le();
    if (!e)
      throw X("FragmentDefinition");
    $();
    var t = ps();
    if (!t)
      throw X("FragmentDefinition");
    var r = Et(!1), n = en();
    if (!n)
      throw X("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var Fl = /(?:query|mutation|subscription)/y;
function Vl() {
  var e, t, r = [], n = [];
  (e = Ae(Fl)) && ($(), t = Le(), r = function() {
    var o, s = [];
    if ($(), L.charCodeAt(E) === 40) {
      for (E++, $(); o = Ae(ls); ) {
        if ($(), L.charCodeAt(E++) !== 58)
          throw X("VariableDefinition");
        var u = fs(), c = void 0;
        if (L.charCodeAt(E) === 61 && (E++, $(), !(c = Cr(!0))))
          throw X("VariableDefinition");
        $(), s.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: o.slice(1)
            }
          },
          type: u,
          defaultValue: c,
          directives: Et(!0)
        });
      }
      if (L.charCodeAt(E++) !== 41)
        throw X("VariableDefinition");
      $();
    }
    return s;
  }(), n = Et(!1));
  var i = en();
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
function Rl(e, t) {
  return L = typeof e.body == "string" ? e.body : e, E = 0, function() {
    var n;
    $();
    for (var i = []; n = Dl() || Vl(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function Ml(e) {
  return JSON.stringify(e);
}
function ql(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var je = (e) => !(!e || !e.length), le = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !je(e.variableDefinitions) && !je(e.directives))
      return le.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), je(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(le.VariableDefinition).join(", ") + ")"), je(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t + " " + le.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = le.Variable(e.variable) + ": " + _e(e.type);
    return e.defaultValue && (t += " = " + _e(e.defaultValue)), je(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (je(e.arguments)) {
      var r = e.arguments.map(le.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return je(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), e.selectionSet ? t + " " + le.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? ql(e.value) : Ml(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(_e).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(le.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + _e(e.value),
  Document: (e) => je(e.definitions) ? e.definitions.map(_e).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(_e).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + _e(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return je(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), je(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t + " " + _e(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, je(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t + " " + _e(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return je(e.arguments) && (t += "(" + e.arguments.map(le.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + _e(e.type) + "]",
  NonNullType: (e) => _e(e.type) + "!"
};
function _e(e) {
  return le[e.kind] ? le[e.kind](e) : "";
}
var Ei = () => {
}, ke = Ei;
function Re(e) {
  return {
    tag: 0,
    0: e
  };
}
function or(e) {
  return {
    tag: 1,
    0: e
  };
}
var Bl = (e) => e;
function ue(e) {
  return (t) => (r) => {
    var n = ke;
    t((i) => {
      i === 0 ? r(0) : i.tag === 0 ? (n = i[0], r(i)) : e(i[0]) ? r(i) : n(0);
    });
  };
}
function Qt(e) {
  return (t) => (r) => t((n) => {
    n === 0 || n.tag === 0 ? r(n) : r(or(e(n[0])));
  });
}
function rr(e) {
  return (t) => (r) => {
    var n = [], i = ke, a = !1, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, n.length || r(0)) : s.tag === 0 ? i = s[0] : (a = !1, function(c) {
        var f = ke;
        c((d) => {
          if (d === 0) {
            if (n.length) {
              var p = n.indexOf(f);
              p > -1 && (n = n.slice()).splice(p, 1), n.length || (o ? r(0) : a || (a = !0, i(0)));
            }
          } else
            d.tag === 0 ? (n.push(f = d[0]), f(0)) : n.length && (r(d), f(0));
        });
      }(e(s[0])), a || (a = !0, i(0))));
    }), r(Re((s) => {
      if (s === 1) {
        o || (o = !0, i(1));
        for (var u = 0, c = n, f = n.length; u < f; u++)
          c[u](1);
        n.length = 0;
      } else {
        !o && !a ? (a = !0, i(0)) : a = !1;
        for (var d = 0, p = n, y = n.length; d < y; d++)
          p[d](0);
      }
    }));
  };
}
function Ul(e) {
  return rr(Bl)(e);
}
function kt(e) {
  return Ul(Wl(e));
}
function ki(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          r(Re((o) => {
            o === 1 ? (n = !0, a(1), e()) : a(o);
          }));
        } else
          r(i);
    });
  };
}
function $t(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0);
        else if (i.tag === 0) {
          var a = i[0];
          r(Re((o) => {
            o === 1 && (n = !0), a(o);
          }));
        } else
          e(i[0]), r(i);
    });
  };
}
function ya(e) {
  return (t) => (r) => t((n) => {
    n === 0 ? r(0) : n.tag === 0 ? (r(n), e()) : r(n);
  });
}
function nr(e) {
  var t = [], r = ke, n = !1;
  return (i) => {
    t.push(i), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var o = 0, s = t, u = t.length; o < u; o++)
          s[o](0);
        t.length = 0;
      } else if (a.tag === 0)
        r = a[0];
      else {
        n = !1;
        for (var c = 0, f = t, d = t.length; c < d; c++)
          f[c](a);
      }
    }), i(Re((a) => {
      if (a === 1) {
        var o = t.indexOf(i);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || r(1);
      } else
        n || (n = !0, r(0));
    }));
  };
}
function ha(e) {
  return (t) => (r) => {
    var n = ke, i = ke, a = !1, o = !1, s = !1, u = !1;
    t((c) => {
      u || (c === 0 ? (u = !0, s || r(0)) : c.tag === 0 ? n = c[0] : (s && (i(1), i = ke), a ? a = !1 : (a = !0, n(0)), function(d) {
        s = !0, d((p) => {
          s && (p === 0 ? (s = !1, u ? r(0) : a || (a = !0, n(0))) : p.tag === 0 ? (o = !1, (i = p[0])(0)) : (r(p), o ? o = !1 : i(0)));
        });
      }(e(c[0]))));
    }), r(Re((c) => {
      c === 1 ? (u || (u = !0, n(1)), s && (s = !1, i(1))) : (!u && !a && (a = !0, n(0)), s && !o && (o = !0, i(0)));
    }));
  };
}
function ds(e) {
  return (t) => (r) => {
    var n = ke, i = !1, a = 0;
    t((o) => {
      i || (o === 0 ? (i = !0, r(0)) : o.tag === 0 ? e <= 0 ? (i = !0, r(0), o[0](1)) : n = o[0] : a++ < e ? (r(o), !i && a >= e && (i = !0, r(0), n(1))) : r(o));
    }), r(Re((o) => {
      o === 1 && !i ? (i = !0, n(1)) : o === 0 && !i && a < e && n(0);
    }));
  };
}
function $i(e) {
  return (t) => (r) => {
    var n = ke, i = ke, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, i(1), r(0)) : o.tag === 0 ? (n = o[0], e((s) => {
        s === 0 || (s.tag === 0 ? (i = s[0])(0) : (a = !0, i(1), n(1), r(0)));
      })) : r(o));
    }), r(Re((o) => {
      o === 1 && !a ? (a = !0, n(1), i(1)) : a || n(0);
    }));
  };
}
function ys(e, t) {
  return (r) => (n) => {
    var i = ke, a = !1;
    r((o) => {
      a || (o === 0 ? (a = !0, n(0)) : o.tag === 0 ? (i = o[0], n(o)) : e(o[0]) ? n(o) : (a = !0, t && n(o), n(0), i(1)));
    });
  };
}
function Gl(e) {
  return (t) => e()(t);
}
function hs(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), n = !1, i = !1, a = !1, o;
    t(Re(async (s) => {
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
              a = !1, t(or(o.value));
            } catch (u) {
              if (r.throw)
                (n = !!(await r.throw(u)).done) && t(0);
              else
                throw u;
            }
        i = !1;
      }
    }));
  };
}
function Ll(e) {
  return e[Symbol.asyncIterator] ? hs(e) : (t) => {
    var r = e[Symbol.iterator](), n = !1, i = !1, a = !1, o;
    t(Re((s) => {
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
              a = !1, t(or(o.value));
            } catch (u) {
              if (r.throw)
                (n = !!r.throw(u).done) && t(0);
              else
                throw u;
            }
        i = !1;
      }
    }));
  };
}
var Wl = Ll;
function Ht(e) {
  return (t) => {
    var r = !1;
    t(Re((n) => {
      n === 1 ? r = !0 : r || (r = !0, t(or(e)), t(0));
    }));
  };
}
function ji(e) {
  return (t) => {
    var r = !1, n = e({
      next(i) {
        r || t(or(i));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(Re((i) => {
      i === 1 && !r && (r = !0, n());
    }));
  };
}
function ma() {
  var e, t;
  return {
    source: nr(ji((r) => (e = r.next, t = r.complete, Ei))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function ga(e) {
  return ji((t) => (e.then((r) => {
    Promise.resolve(r).then(() => {
      t.next(r), t.complete();
    });
  }), Ei));
}
function pt(e) {
  return (t) => {
    var r = ke, n = !1;
    return t((i) => {
      i === 0 ? n = !0 : i.tag === 0 ? (r = i[0])(0) : n || (e(i[0]), r(0));
    }), {
      unsubscribe() {
        n || (n = !0, r(1));
      }
    };
  };
}
function zl(e) {
  pt((t) => {
  })(e);
}
function Kl(e) {
  return new Promise((t) => {
    var r = ke, n;
    e((i) => {
      i === 0 ? Promise.resolve(n).then(t) : i.tag === 0 ? (r = i[0])(0) : (n = i[0], r(0));
    });
  });
}
var Jl = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new Wn(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new Wn(e);
class sr extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(Jl), n = ((i, a) => {
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
var zn = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, lt = /* @__PURE__ */ new Set(), va = /* @__PURE__ */ new WeakMap(), bt = (e) => {
  if (e === null || lt.has(e))
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
  } else if (Fr !== jt && e instanceof Fr || Vr !== jt && e instanceof Vr)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = va.get(e) || Math.random().toString(36).slice(2);
    return va.set(e, i), bt({
      __key: i
    });
  }
  lt.add(e);
  var a = "{";
  for (var o of n) {
    var s = bt(e[o]);
    s && (a.length > 1 && (a += ","), a += bt(o) + ":" + s);
  }
  return lt.delete(e), a += "}";
}, Kn = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || lt.has(r)))
    if (Array.isArray(r))
      for (var n = 0, i = r.length; n < i; n++)
        Kn(e, `${t}.${n}`, r[n]);
    else if (r instanceof Fr || r instanceof Vr)
      e.set(t, r);
    else {
      lt.add(r);
      for (var a of Object.keys(r))
        Kn(e, `${t}.${a}`, r[a]);
    }
}, Dr = (e) => (lt.clear(), bt(e));
let jt = class {
};
var Fr = typeof File < "u" ? File : jt, Vr = typeof Blob < "u" ? Blob : jt, Ql = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Hl = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, Yl = (e, t) => t % 2 == 0 ? e.replace(Hl, `
`) : e, ba = (e) => e.split(Ql).map(Yl).join("").trim(), Sa = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map(), Ni = (e) => {
  var t;
  return typeof e == "string" ? t = ba(e) : e.loc && Pr.get(e.__key) === e ? t = e.loc.source.body : (t = Sa.get(e) || ba(_e(e)), Sa.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Oa = (e) => {
  var t = zn(Ni(e));
  if (e.definitions) {
    var r = gs(e);
    r && (t = zn(`
# ${r}`, t));
  }
  return t;
}, ms = (e) => {
  var t, r;
  return typeof e == "string" ? (t = Oa(e), r = Pr.get(t) || Rl(e)) : (t = e.__key || Oa(e), r = Pr.get(t) || e), r.loc || Ni(r), r.__key = t, Pr.set(t, r), r;
}, hn = (e, t, r) => {
  var n = t || {}, i = ms(e), a = Dr(n), o = i.__key;
  return a !== "{}" && (o = zn(a, o)), {
    key: o,
    query: i,
    variables: n,
    extensions: r
  };
}, gs = (e) => {
  for (var t of e.definitions)
    if (t.kind === Pt.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, Zl = (e) => {
  for (var t of e.definitions)
    if (t.kind === Pt.OPERATION_DEFINITION)
      return t.operation;
}, Jn = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var n = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new sr({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? n : t.hasNext,
    stale: !1
  };
}, Qn = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = Qn(e[r], t[r]);
    return e;
  }
  return t;
}, Hn = (e, t, r) => {
  var n = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, o = t.incremental;
  "path" in t && (o = [t]);
  var s = {
    data: e.data
  };
  if (o)
    for (var u of o) {
      Array.isArray(u.errors) && n.push(...u.errors), u.extensions && (Object.assign(a, u.extensions), i = !0);
      for (var c = "data", f = s, d = 0, p = u.path.length; d < p; c = u.path[d++])
        f = f[c] = Array.isArray(f[c]) ? [...f[c]] : {
          ...f[c]
        };
      if (u.items)
        for (var y = +c >= 0 ? c : 0, m = 0, S = u.items.length; m < S; m++)
          f[y + m] = Qn(f[y + m], u.items[m]);
      else
        u.data !== void 0 && (f[c] = Qn(f[c], u.data));
    }
  else
    s.data = t.data || e.data, n = t.errors || n;
  return {
    operation: e.operation,
    data: s.data,
    error: n.length ? new sr({
      graphQLErrors: n,
      response: r
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, vs = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new sr({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function bs(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Ni(e.query),
    operationName: gs(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var Xl = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var n = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && n.searchParams.set(i, typeof a == "object" ? Dr(a) : a);
  }
  var o = n.toString();
  return o.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, ec = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = Dr(t), n = ((s) => {
      var u = /* @__PURE__ */ new Map();
      return (Fr !== jt || Vr !== jt) && (lt.clear(), Kn(u, "variables", s)), u;
    })(t.variables);
    if (n.size) {
      var i = new FormData();
      i.append("operations", r), i.append("map", Dr({
        ...[...n.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of n.values())
        i.append("" + a++, o);
      return i;
    }
    return r;
  }
}, tc = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (n.headers)
    for (var i in n.headers)
      r[i.toLowerCase()] = n.headers[i];
  var a = ec(e, t);
  return typeof a == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...n,
    method: a ? "POST" : "GET",
    body: a,
    headers: r
  };
}, rc = typeof TextDecoder < "u" ? new TextDecoder() : null, nc = /boundary="?([^=";]+)"?/i, ic = /data: ?([^\n]+)/, wa = (e) => e.constructor.name === "Buffer" ? e.toString() : rc.decode(e);
async function* Pa(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield wa(t);
  else {
    var r = e.body.getReader(), n;
    try {
      for (; !(n = await r.read()).done; )
        yield wa(n.value);
    } finally {
      r.cancel();
    }
  }
}
async function* Ia(e, t) {
  var r = "", n;
  for await (var i of e)
    for (r += i; (n = r.indexOf(t)) > -1; )
      yield r.slice(0, n), r = r.slice(n + t.length);
}
async function* ac(e, t, r) {
  var n = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (f, d) {
        var p = f.match(nc), y = "--" + (p ? p[1] : "-"), m = !0, S;
        for await (var A of Ia(Pa(d), `\r
` + y)) {
          if (m) {
            m = !1;
            var x = A.indexOf(y);
            if (x > -1)
              A = A.slice(x + y.length);
            else
              continue;
          }
          try {
            yield S = JSON.parse(A.slice(A.indexOf(`\r
\r
`) + 4));
          } catch (O) {
            if (!S)
              throw O;
          }
          if (S && S.hasNext === !1)
            break;
        }
        S && S.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o, a);
    else if (/text\/event-stream/i.test(o))
      s = async function* (f) {
        var d;
        for await (var p of Ia(Pa(f), `

`)) {
          var y = p.match(ic);
          if (y) {
            var m = y[1];
            try {
              yield d = JSON.parse(m);
            } catch (S) {
              if (!d)
                throw S;
            }
            if (d && d.hasNext === !1)
              break;
          }
        }
        d && d.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(a);
    else if (!/text\//i.test(o))
      s = async function* (f) {
        yield JSON.parse(await f.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var u of s)
      i = i ? Hn(i, u, a) : Jn(e, u, a), n = !1, yield i, n = !0;
    i || (yield i = Jn(e, {}, a));
  } catch (c) {
    if (!n)
      throw c;
    yield vs(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : c, a);
  }
}
function oc(e, t, r) {
  var n;
  return typeof AbortController < "u" && (r.signal = (n = new AbortController()).signal), ki(() => {
    n && n.abort();
  })(ue((i) => !!i)(hs(ac(e, t, r))));
}
var Yn = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      Yn(r, t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : Yn(e[n], t);
  return t;
}, Zn = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var n of e.definitions) {
      var i = Zn(n);
      t = t || i !== n, r.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === Pt.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === Pt.FIELD && s.name.value === "__typename" && !s.alias;
        var u = Zn(s);
        t = t || u !== s, a.push(u);
      }
      if (o || (t = !0, a.push({
        kind: Pt.FIELD,
        name: {
          kind: Pt.NAME,
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
}, Ta = /* @__PURE__ */ new Map(), sc = (e) => {
  var t = ms(e), r = Ta.get(t.__key);
  return r || (Ta.set(t.__key, r = Zn(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, Xn = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => Xn(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var n in e)
      n === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[n] = Xn(e[n]);
    return r;
  } else
    return e;
};
function Aa(e) {
  var t = (r) => e(r);
  return t.toPromise = () => Kl(ds(1)(ue((r) => !r.stale && !r.hasNext)(t))), t.then = (r, n) => t.toPromise().then(r, n), t.subscribe = (r) => pt(r)(t), t;
}
function Nt(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var Ea = (e, t) => Nt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), uc = () => {
}, mn = ({ kind: e }) => e !== "mutation" && e !== "query", lc = ({ forward: e, client: t, dispatchDebug: r }) => {
  var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (s) => {
    var u = Nt(s.kind, s);
    return u.query = sc(s.query), u;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || n.has(s.key));
  return (s) => {
    var u = Qt((f) => {
      var d = n.get(f.key);
      process.env.NODE_ENV !== "production" && r({
        operation: f,
        ...d ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var p = d;
      return process.env.NODE_ENV !== "production" && (p = {
        ...p,
        operation: process.env.NODE_ENV !== "production" ? Ea(f, {
          cacheOutcome: d ? "hit" : "miss"
        }) : f
      }), f.context.requestPolicy === "cache-and-network" && (p.stale = !0, ka(t, f)), p;
    })(ue((f) => !mn(f) && o(f))(s)), c = $t((f) => {
      var { operation: d } = f;
      if (d) {
        var p = d.context.additionalTypenames || [];
        if (f.operation.kind !== "subscription" && (p = ((v) => [...Yn(v, /* @__PURE__ */ new Set())])(f.data).concat(p)), f.operation.kind === "mutation" || f.operation.kind === "subscription") {
          var y = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && r({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${p}`,
            operation: d,
            data: {
              typenames: p,
              response: f
            },
            source: "cacheExchange"
          });
          for (var m = 0; m < p.length; m++) {
            var S = p[m], A = i.get(S);
            A || i.set(S, A = /* @__PURE__ */ new Set());
            for (var x of A.values())
              y.add(x);
            A.clear();
          }
          for (var O of y.values())
            n.has(O) && (d = n.get(O).operation, n.delete(O), ka(t, d));
        } else if (d.kind === "query" && f.data) {
          n.set(d.key, f);
          for (var R = 0; R < p.length; R++) {
            var h = p[R], w = i.get(h);
            w || i.set(h, w = /* @__PURE__ */ new Set()), w.add(d.key);
          }
        }
      }
    })(e(ue((f) => f.kind !== "query" || f.context.requestPolicy !== "cache-only")(Qt((f) => process.env.NODE_ENV !== "production" ? Ea(f, {
      cacheOutcome: "miss"
    }) : f)(kt([Qt(a)(ue((f) => !mn(f) && !o(f))(s)), ue((f) => mn(f))(s)])))));
    return kt([u, c]);
  };
}, ka = (e, t) => e.reexecuteOperation(Nt(t.kind, t, {
  requestPolicy: "network-only"
})), $a = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: n, forward: i }) => {
  var a = r || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = rr((c) => {
      var { key: f } = c, d = ue((p) => p.kind === "teardown" && p.key === f)(o);
      return $i(d)(((p) => {
        var y = e(bs(p), p);
        return ji(({ next: m, complete: S }) => {
          var A = !1, x, O;
          return Promise.resolve().then(() => {
            A || (x = y.subscribe({
              next(R) {
                m(O = O ? Hn(O, R) : Jn(p, R));
              },
              error(R) {
                m(vs(p, R));
              },
              complete() {
                A || (A = !0, p.kind === "subscription" && n.reexecuteOperation(Nt("teardown", p, p.context)), O && O.hasNext && m(Hn(O, {
                  hasNext: !1
                })), S());
              }
            }));
          }), () => {
            A = !0, x && x.unsubscribe();
          };
        });
      })(c));
    })(ue((c) => c.kind !== "teardown" && a(c))(o)), u = i(ue((c) => c.kind === "teardown" || !a(c))(o));
    return kt([s, u]);
  };
}, cc = ({ forward: e, dispatchDebug: t }) => (r) => {
  var n = rr((a) => {
    var o = bs(a), s = Xl(a, o), u = tc(a, o);
    process.env.NODE_ENV !== "production" && t({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: a,
      data: {
        url: s,
        fetchOptions: u
      },
      source: "fetchExchange"
    });
    var c = $i(ue((f) => f.kind === "teardown" && f.key === a.key)(r))(oc(a, s, u));
    return process.env.NODE_ENV !== "production" ? $t((f) => {
      var d = f.data ? void 0 : f.error;
      process.env.NODE_ENV !== "production" && t({
        type: d ? "fetchError" : "fetchSuccess",
        message: `A ${d ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: s,
          fetchOptions: u,
          value: d || f
        },
        source: "fetchExchange"
      });
    })(c) : c;
  })(ue((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(r)), i = e(ue((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(r));
  return kt([n, i]);
}, fc = (e) => ({ client: t, forward: r, dispatchDebug: n }) => e.reduceRight((i, a) => {
  var o = !1;
  return a({
    client: t,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return nr(i(nr(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && n({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, r), Ss = ({ onOperation: e, onResult: t, onError: r }) => ({ forward: n }) => (i) => rr((a) => {
  r && a.error && r(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? ga(o) : Ht(o);
})(n(rr((a) => {
  var o = e && e(a) || a;
  return "then" in o ? ga(o) : Ht(o);
})(i))), pc = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = $t((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var n = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: n,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(n);
  }
})(t)), ue((r) => !1)(t)), ja = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, u = ma();
  function c(h) {
    (h.kind === "mutation" || h.kind === "teardown" || !a.has(h.key)) && (h.kind === "teardown" ? a.delete(h.key) : h.kind !== "mutation" && a.add(h.key), u.next(h));
  }
  var f = !1;
  function d(h) {
    if (h && c(h), !f) {
      for (f = !0; f && (h = o.shift()); )
        c(h);
      f = !1;
    }
  }
  var p = (h) => {
    var w = $i(ue((v) => v.kind === "teardown" && v.key === h.key)(u.source))(ue((v) => v.operation.kind === h.kind && v.operation.key === h.key && (!v.operation.context._instance || v.operation.context._instance === h.context._instance))(R));
    return h.kind !== "query" ? w = ys((v) => !!v.hasNext, !0)(w) : w = ha((v) => {
      var F = Ht(v);
      return v.stale || v.hasNext ? F : kt([F, Qt(() => (v.stale = !0, v))(ds(1)(ue((J) => J.key === h.key)(u.source)))]);
    })(w), h.kind !== "mutation" ? w = ki(() => {
      a.delete(h.key), n.delete(h.key), i.delete(h.key), f = !1;
      for (var v = o.length - 1; v >= 0; v--)
        o[v].key === h.key && o.splice(v, 1);
      c(Nt("teardown", h, h.context));
    })($t((v) => {
      if (v.stale) {
        for (var F of o)
          if (F.key === v.operation.key) {
            a.delete(F.key);
            break;
          }
      } else
        v.hasNext || a.delete(h.key);
      n.set(h.key, v);
    })(w)) : w = ya(() => {
      c(h);
    })(w), t.maskTypename && (w = Qt((v) => ({
      ...v,
      data: Xn(v.data, !0)
    }))(w)), nr(w);
  }, y = this instanceof e ? this : Object.create(e.prototype), m = Object.assign(y, {
    suspense: !!t.suspense,
    operations$: u.source,
    reexecuteOperation(h) {
      h.kind === "teardown" ? d(h) : (h.kind === "mutation" || i.has(h.key)) && (o.push(h), Promise.resolve().then(d));
    },
    createRequestOperation(h, w, v) {
      v || (v = {});
      var F;
      if (process.env.NODE_ENV !== "production" && h !== "teardown" && (F = Zl(w.query)) !== h)
        throw new Error(`Expected operation of type "${h}" but found "${F}"`);
      return Nt(h, w, {
        _instance: h === "mutation" ? r = r + 1 | 0 : void 0,
        ...s,
        ...v,
        requestPolicy: v.requestPolicy || s.requestPolicy,
        suspense: v.suspense || v.suspense !== !1 && m.suspense
      });
    },
    executeRequestOperation(h) {
      return h.kind === "mutation" ? Aa(p(h)) : Aa(Gl(() => {
        var w = i.get(h.key);
        w || i.set(h.key, w = p(h)), w = ya(() => {
          d(h);
        })(w);
        var v = n.get(h.key);
        return h.kind === "query" && v && (v.stale || v.hasNext) ? ha(Ht)(kt([w, ue((F) => F === n.get(h.key))(Ht(v))])) : w;
      }));
    },
    executeQuery(h, w) {
      var v = m.createRequestOperation("query", h, w);
      return m.executeRequestOperation(v);
    },
    executeSubscription(h, w) {
      var v = m.createRequestOperation("subscription", h, w);
      return m.executeRequestOperation(v);
    },
    executeMutation(h, w) {
      var v = m.createRequestOperation("mutation", h, w);
      return m.executeRequestOperation(v);
    },
    readQuery(h, w, v) {
      var F = null;
      return pt((J) => {
        F = J;
      })(m.query(h, w, v)).unsubscribe(), F;
    },
    query: (h, w, v) => m.executeQuery(hn(h, w), v),
    subscription: (h, w, v) => m.executeSubscription(hn(h, w), v),
    mutation: (h, w, v) => m.executeMutation(hn(h, w), v)
  }), S = uc;
  if (process.env.NODE_ENV !== "production") {
    var { next: A, source: x } = ma();
    m.subscribeToDebugTarget = (h) => pt(h)(x), S = A;
  }
  var O = fc(t.exchanges), R = nr(O({
    client: m,
    dispatchDebug: S,
    forward: pc({
      dispatchDebug: S
    })
  })(u.source));
  return zl(R), m;
};
function ge(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function ot(e) {
  return ge(e) === "object";
}
function dc(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function Na(e, t) {
  return e.length < 124 ? e : t;
}
const yc = "graphql-transport-ws";
var me;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(me || (me = {}));
var Y;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(Y || (Y = {}));
function Os(e) {
  if (!ot(e))
    throw new Error(`Message is expected to be an object, but got ${ge(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${ge(e.type)}`);
  switch (e.type) {
    case Y.ConnectionInit:
    case Y.ConnectionAck:
    case Y.Ping:
    case Y.Pong: {
      if (e.payload != null && !ot(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case Y.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ge(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ot(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ge(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${ge(e.payload.query)}`);
      if (e.payload.variables != null && !ot(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${ge(e.payload.variables)}`);
      if (e.payload.operationName != null && ge(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${ge(e.payload.operationName)}`);
      if (e.payload.extensions != null && !ot(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${ge(e.payload.extensions)}`);
      break;
    }
    case Y.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ge(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ot(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ge(e.payload)}`);
      break;
    }
    case Y.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ge(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!dc(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case Y.Complete: {
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
function hc(e, t) {
  return Os(typeof e == "string" ? JSON.parse(e, t) : e);
}
function Wt(e, t) {
  return Os(e), JSON.stringify(e, t);
}
function mc(e) {
  const {
    url: t,
    connectionParams: r,
    lazy: n = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: s,
    connectionAckWaitTimeout: u = 0,
    retryAttempts: c = 5,
    retryWait: f = async function(U) {
      let M = 1e3;
      for (let C = 0; C < U; C++)
        M *= 2;
      await new Promise((C) => setTimeout(C, M + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: d = gr,
    isFatalConnectionProblem: p,
    on: y,
    webSocketImpl: m,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: S = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (U) => {
        const M = Math.random() * 16 | 0;
        return (U == "x" ? M : M & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: A,
    jsonMessageReviver: x
  } = e;
  let O;
  if (m) {
    if (!vc(m))
      throw new Error("Invalid WebSocket implementation provided");
    O = m;
  } else
    typeof WebSocket < "u" ? O = WebSocket : typeof global < "u" ? O = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (O = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!O)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const R = O, h = (() => {
    const P = (() => {
      const M = {};
      return {
        on(C, z) {
          return M[C] = z, () => {
            delete M[C];
          };
        },
        emit(C) {
          var z;
          "id" in C && ((z = M[C.id]) === null || z === void 0 || z.call(M, C));
        }
      };
    })(), U = {
      connecting: y != null && y.connecting ? [y.connecting] : [],
      opened: y != null && y.opened ? [y.opened] : [],
      connected: y != null && y.connected ? [y.connected] : [],
      ping: y != null && y.ping ? [y.ping] : [],
      pong: y != null && y.pong ? [y.pong] : [],
      message: y != null && y.message ? [P.emit, y.message] : [P.emit],
      closed: y != null && y.closed ? [y.closed] : [],
      error: y != null && y.error ? [y.error] : []
    };
    return {
      onMessage: P.on,
      on(M, C) {
        const z = U[M];
        return z.push(C), () => {
          z.splice(z.indexOf(C), 1);
        };
      },
      emit(M, ...C) {
        for (const z of [...U[M]])
          z(...C);
      }
    };
  })();
  function w(P) {
    const U = [
      // errors are fatal and more critical than close events, throw them first
      h.on("error", (M) => {
        U.forEach((C) => C()), P(M);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      h.on("closed", (M) => {
        U.forEach((C) => C()), P(M);
      })
    ];
  }
  let v, F = 0, J, Te = !1, Ke = 0, yt = !1;
  async function Je() {
    clearTimeout(J);
    const [P, U] = await (v ?? (v = new Promise((z, qe) => (async () => {
      if (Te) {
        if (await f(Ke), !F)
          return v = void 0, qe({ code: 1e3, reason: "All Subscriptions Gone" });
        Ke++;
      }
      h.emit("connecting");
      const B = new R(typeof t == "function" ? await t() : t, yc);
      let Qe, Xe;
      function at() {
        isFinite(o) && o > 0 && (clearTimeout(Xe), Xe = setTimeout(() => {
          B.readyState === R.OPEN && (B.send(Wt({ type: Y.Ping })), h.emit("ping", !1, void 0));
        }, o));
      }
      w((re) => {
        v = void 0, clearTimeout(Qe), clearTimeout(Xe), qe(re), gr(re) && re.code === 4499 && (B.close(4499, "Terminated"), B.onerror = null, B.onclose = null);
      }), B.onerror = (re) => h.emit("error", re), B.onclose = (re) => h.emit("closed", re), B.onopen = async () => {
        try {
          h.emit("opened", B);
          const re = typeof r == "function" ? await r() : r;
          if (B.readyState !== R.OPEN)
            return;
          B.send(Wt(re ? {
            type: Y.ConnectionInit,
            payload: re
          } : {
            type: Y.ConnectionInit
            // payload is completely absent if not provided
          }, A)), isFinite(u) && u > 0 && (Qe = setTimeout(() => {
            B.close(me.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, u)), at();
        } catch (re) {
          h.emit("error", re), B.close(me.InternalClientError, Na(re instanceof Error ? re.message : new Error(re).message, "Internal client error"));
        }
      };
      let et = !1;
      B.onmessage = ({ data: re }) => {
        try {
          const Q = hc(re, x);
          if (h.emit("message", Q), Q.type === "ping" || Q.type === "pong") {
            h.emit(Q.type, !0, Q.payload), Q.type === "pong" ? at() : s || (B.send(Wt(Q.payload ? {
              type: Y.Pong,
              payload: Q.payload
            } : {
              type: Y.Pong
              // payload is completely absent if not provided
            })), h.emit("pong", !1, Q.payload));
            return;
          }
          if (et)
            return;
          if (Q.type !== Y.ConnectionAck)
            throw new Error(`First message cannot be of type ${Q.type}`);
          clearTimeout(Qe), et = !0, h.emit("connected", B, Q.payload), Te = !1, Ke = 0, z([
            B,
            new Promise((fr, ht) => w(ht))
          ]);
        } catch (Q) {
          B.onmessage = null, h.emit("error", Q), B.close(me.BadResponse, Na(Q instanceof Error ? Q.message : new Error(Q).message, "Bad response"));
        }
      };
    })())));
    P.readyState === R.CLOSING && await U;
    let M = () => {
    };
    const C = new Promise((z) => M = z);
    return [
      P,
      M,
      Promise.race([
        // wait for
        C.then(() => {
          if (!F) {
            const z = () => P.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? J = setTimeout(() => {
              P.readyState === R.OPEN && z();
            }, a) : z();
          }
        }),
        // or
        U
      ])
    ];
  }
  function te(P) {
    if (gr(P) && (gc(P.code) || [
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
    ].includes(P.code)))
      throw P;
    if (yt)
      return !1;
    if (gr(P) && P.code === 1e3)
      return F > 0;
    if (!c || Ke >= c || !d(P) || p != null && p(P))
      throw P;
    return Te = !0;
  }
  return n || (async () => {
    for (F++; ; )
      try {
        const [, , P] = await Je();
        await P;
      } catch (P) {
        try {
          if (!te(P))
            return;
        } catch (U) {
          return i == null ? void 0 : i(U);
        }
      }
  })(), {
    on: h.on,
    subscribe(P, U) {
      const M = S(P);
      let C = !1, z = !1, qe = () => {
        F--, C = !0;
      };
      return (async () => {
        for (F++; ; )
          try {
            const [B, Qe, Xe] = await Je();
            if (C)
              return Qe();
            const at = h.onMessage(M, (et) => {
              switch (et.type) {
                case Y.Next: {
                  U.next(et.payload);
                  return;
                }
                case Y.Error: {
                  z = !0, C = !0, U.error(et.payload), qe();
                  return;
                }
                case Y.Complete: {
                  C = !0, qe();
                  return;
                }
              }
            });
            B.send(Wt({
              id: M,
              type: Y.Subscribe,
              payload: P
            }, A)), qe = () => {
              !C && B.readyState === R.OPEN && B.send(Wt({
                id: M,
                type: Y.Complete
              }, A)), F--, C = !0, Qe();
            }, await Xe.finally(at);
            return;
          } catch (B) {
            if (!te(B))
              return;
          }
      })().then(() => {
        z || U.complete();
      }).catch((B) => {
        U.error(B);
      }), () => {
        C || qe();
      };
    },
    async dispose() {
      if (yt = !0, v) {
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
function gr(e) {
  return ot(e) && "code" in e && "reason" in e;
}
function gc(e) {
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
function vc(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var St = null;
typeof WebSocket < "u" ? St = WebSocket : typeof MozWebSocket < "u" ? St = MozWebSocket : typeof global < "u" ? St = global.WebSocket || global.MozWebSocket : typeof window < "u" ? St = window.WebSocket || window.MozWebSocket : typeof self < "u" && (St = self.WebSocket || self.MozWebSocket);
const bc = St;
function Ie(e) {
  if (typeof e != "object")
    return e;
  var t, r, n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = Ie(e[t]));
    } else {
      r = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(r, t, {
          value: Ie(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[t] = Ie(e[t]);
    }
    return r;
  }
  if (n === "[object Array]") {
    for (t = e.length, r = Array(t); t--; )
      r[t] = Ie(e[t]);
    return r;
  }
  return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    r.add(Ie(i));
  }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    r.set(Ie(a), Ie(i));
  }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(Ie(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var he;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(he || (he = {}));
class Sc {
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
    }), this.__gadget.instantiatedFields = Ie(t), this.__gadget.persistedFields = Ie(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((n) => this.__gadget.fieldKeysTracker[n] = !0));
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
  hasChanges(t = he.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const r = t == he.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((n) => !vr(r[n], this.__gadget.fields[n]));
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
  changes(t, r = he.SinceLoaded) {
    const i = (typeof t == "string" ? r : t || r) == he.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = i[t], o = this.__gadget.fields[t], s = !vr(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const s = this.__gadget.fieldKeys[o];
        vr(i[s], this.__gadget.fields[s]) || (a[s] = { current: this.__gadget.fields[s], previous: i[s] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = he.SinceLoaded) {
    const r = t == he.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, n = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      vr(r[a], this.__gadget.fields[a]) || (n[a] = this.__gadget.fields[a]);
    }
    return n;
  }
  changed(t, r = he.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = he.SinceLoaded) {
    t == he.SinceLoaded ? this.__gadget.instantiatedFields = Ie(this.__gadget.fields) : t == he.SinceLastPersisted && (this.__gadget.persistedFields = Ie(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = he.SinceLoaded) {
    let r;
    t == he.SinceLoaded ? r = Object.keys(this.__gadget.instantiatedFields) : r = Object.keys(this.__gadget.persistedFields);
    for (const n of this.__gadget.fieldKeys)
      r.includes(n) || delete this.__gadget.fields[n];
    t == he.SinceLoaded ? Object.assign(this.__gadget.fields, Ie(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, Ie(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return ri({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const ws = Sc;
class Ps extends Error {
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
class ei extends Error {
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
class tn extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class _a extends Error {
  constructor(t) {
    let r;
    ti(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class Oc extends Error {
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
class wc extends Error {
  constructor(t, r, n, i) {
    const a = r.slice(0, 3), o = r.length > 3 ? `, and ${r.length - 3} more error${r.length > 4 ? "s" : ""} need${r.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${n ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: s, message: u }) => `${s} ${u}`).join(", ")}${o}.`), Object.defineProperty(this, "code", {
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
class Is extends Error {
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
class Ts extends Error {
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
class Pc extends Error {
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
function xa(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const _t = (e, t) => {
  const r = t.length;
  let n = 0;
  for (; e != null && n < r; )
    e = e[t[n++]];
  return n && n == r ? e : void 0;
}, ti = (e) => (e == null ? void 0 : e.type) == "close", We = (e, t) => typeof e != "string" ? "" : rn(e, t), Ca = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, rn = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (n) => Ca(n)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, i, a, o, s) => (i || (i = ""), "" + i + Ca(a))), r;
}, Ic = (e) => `${rn(e)}Sort`, Tc = (e) => `${rn(e)}Filter`, Ac = (e, t, r) => new Is(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), Ec = (e, t) => {
  if (e.fetching)
    return;
  const r = _t(e.data, t);
  if (r === void 0)
    return new Ps(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null)
    return new Ts(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, Ye = (e, t, r = !1) => {
  var n;
  if (e.error)
    throw e.error instanceof sr && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const i = _t(e.data, t), a = _t(i, ["edges"]), o = a ?? i;
  if (i === void 0)
    throw new Ps(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || r && Array.isArray(o) && o.length === 0)
    throw new Ts(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, Yt = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof sr && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const n = _t(e.data, t);
  return n ?? null;
}, _i = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new wc(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Is(e.message) : new tn(e.message, e.code);
}, st = (e, t) => {
  const r = Ye(e, t);
  if (!r.success) {
    const n = r.errors && r.errors[0];
    throw n ? _i(n) : new tn("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return r;
}, As = (e) => {
  var t, r, n, i;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new wl((i = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, Zt = (e, t) => {
  const r = As(e);
  return r && (t = r.apply(t)), new ws(t);
}, xi = (e, t) => {
  const r = As(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((n) => new ws(n));
}, ir = (e, t) => {
  const r = t.edges.map((n) => n.node);
  return xi(e, r);
}, ri = (e) => {
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
          t[r] = n === void 0 ? null : ri(n);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const r of Object.keys(e)) {
          const n = ri(e[r]);
          n !== void 0 && (t[r] = n);
        }
        return t;
      }
    }
  }
}, gn = "gstk", Da = (e) => {
  try {
    const t = window[e];
    return t.setItem(gn, gn), t.removeItem(gn), !0;
  } catch {
    return !1;
  }
}, Fa = Object.prototype.toString, Va = Object.getPrototypeOf, Ra = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, Kt = (e, t, r) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (r.indexOf(e) > -1 && r.indexOf(t) > -1)
    return !0;
  const n = Fa.call(e), i = Fa.call(t);
  let a, o, s;
  if (r.push(e, t), n != i || (a = Ra(e), o = Ra(t), a.length != o.length || a.some(function(u) {
    return !Kt(e[u], t[u], r);
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
        if (s = a.next(), !Kt(s.value, o.next().value, r))
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
        if (!(!(s in e) && !(s in t)) && (s in e != s in t || !Kt(e[s], t[s], r)))
          return !1;
      return !0;
    case "Object":
      return Kt(Va(e), Va(t), r);
    default:
      return !1;
  }
}, vr = (e, t) => Kt(e, t, []);
class Es extends Error {
}
class kc {
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
    throw Ye(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Es("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Ye(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Ye(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class $c {
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
const jc = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
}, Ma = Ss({
  onOperation: (e) => {
    var t, r;
    (t = (r = e.context).operationName) !== null && t !== void 0 || (r.operationName = jc(e.query) || "unknown");
  }
}), Nc = Ss({
  onOperation: (e) => {
    e.context.url && e.context.operationName && !e.context.url.includes("?") && (e.context.url += `?operation=${e.context.operationName}`);
  }
}), _c = 2, xc = 4800, Cc = 1e4, Dc = [me.ConnectionAcknowledgementTimeout, me.ConnectionInitialisationTimeout], qa = Symbol.for("gadget/connection"), Fc = "token", Vc = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var ne;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(ne || (ne = {}));
class Rc {
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
      value: async (s, u) => {
        let c, f;
        if (u ? (c = u, f = s) : (c = s, f = {}), this.currentTransaction)
          return await c(this.currentTransaction);
        let d = null, p;
        try {
          d = await this.waitForOpenedConnection({
            isFatalConnectionProblem(S) {
              return console.warn("Transport error encountered during transaction processing", S), !0;
            },
            connectionAckWaitTimeout: xc,
            ...f,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const y = new ja({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              Ma,
              ...this.exchanges.beforeAsync,
              $a({
                forwardSubscription(S) {
                  const A = { ...S, query: S.query || "" };
                  return {
                    subscribe: (x) => ({
                      unsubscribe: d.subscribe(A, x)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          y[qa] = this, p = new kc(y, d), this.currentTransaction = p, await p.start();
          const m = await c(p);
          return await p.commit(), m;
        } catch (y) {
          try {
            p != null && p.open && await p.rollback();
          } catch (m) {
            m instanceof Es || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", m);
          }
          throw ti(y) ? new _a(y) : y;
        } finally {
          await (d == null ? void 0 : d.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (s, u = {}) => {
        var c;
        s = Mc(s, (c = this.options.baseRouteURL) !== null && c !== void 0 ? c : this.options.endpoint), this.isGadgetRequest(s) && (u.headers = { ...this.requestHeaders(), ...u.headers }, this.authenticationMode == ne.Custom && await this.options.authenticationMode.custom.processFetch(s, u));
        const f = await this._fetchImplementation(s, u);
        if (this.authenticationMode == ne.BrowserSession) {
          const d = f.headers.get("x-set-authorization"), p = d != null && d.startsWith("Session ") ? d.replace("Session ", "") : null;
          p && this.sessionTokenStore.setItem(this.sessionStorageKey, p);
        }
        return f;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...s) => {
      const { fetch: u } = await import("./browser-ponyfill-00c0293a.js").then((c) => c.b);
      return await u(...s);
    }, this.websocketImplementation = (n = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && n !== void 0 ? n : bc, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Fc}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = ne.InternalAuthToken : t.apiKey ? this.authenticationMode = ne.APIKey : t.custom && (this.authenticationMode = ne.Custom), this.options.authenticationMode = t), (r = this.authenticationMode) !== null && r !== void 0 || (this.authenticationMode = ne.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = ne.BrowserSession;
    const r = !t || typeof t == "boolean" ? Jt.Durable : t.storageType;
    let n;
    r == Jt.Durable && Da("localStorage") ? n = window.localStorage : r == Jt.Session && Da("sessionStorage") ? n = window.sessionStorage : n = new $c(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = n, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), ni(this.options.endpoint))
      return !!ni(r);
    const n = new URL(this.options.endpoint).host;
    return r.includes(n);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Ma, Nc];
    typeof window < "u" && t.push(lc), t.push(...this.exchanges.beforeAsync, cc, $a({
      forwardSubscription: (n) => ({
        subscribe: (i) => {
          const a = { ...n, query: n.query || "" };
          return {
            unsubscribe: this.getBaseSubscriptionClient().subscribe(a, i)
          };
        }
      })
    }), ...this.exchanges.afterAll);
    const r = new ja({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[qa] = this, r;
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
    return mc({
      url: r,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var n, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == ne.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == ne.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == ne.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == ne.Custom && await ((i = (n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (n, i) => {
          var a, o, s, u, c, f;
          if (this.authenticationMode == ne.BrowserSession && (i != null && i.sessionToken)) {
            const d = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (d !== null && typeof d == "object" ? d.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (u = (s = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || s === void 0 ? void 0 : s.connected) === null || u === void 0 || u.call(s, n, i), (f = (c = t == null ? void 0 : t.on) === null || c === void 0 ? void 0 : c.connected) === null || f === void 0 || f.call(c, n, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const r = {};
    if (this.authenticationMode == ne.InternalAuthToken)
      r.authorization = "Basic " + Vc("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == ne.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == ne.BrowserSession) {
      const n = this.sessionTokenStore.getItem(this.sessionStorageKey);
      n && (r.authorization = `Session ${n}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), n = [], i = t.connectionAttempts || _c;
    const a = t.connectionGlobalTimeoutMs || Cc, o = () => {
      n.forEach((s) => s()), n = [];
    };
    return await new Promise((s, u) => {
      const c = setTimeout(() => {
        this.disposeClient(r), d(new Oc("Timeout opening websocket connection to Gadget API"));
      }, a), f = (m) => {
        if (ti(m) && Dc.includes(m.code) && i > 0) {
          i -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), y();
          return;
        }
        clearTimeout(c), u(new _a(m));
      }, d = (m) => {
        clearTimeout(c), u(m);
      }, p = () => {
        clearTimeout(c), s(r);
      }, y = () => {
        o(), n.push(r.on("connected", p)), n.push(r.on("closed", f)), n.push(r.on("error", d));
      };
      y();
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
function Mc(e, t) {
  if (typeof e != "string")
    return e;
  if (ni(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function ni(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class xt extends Array {
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
    const i = new xt();
    return i.push(...r), i.modelManager = t, i.pagination = n, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new tn("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new ei("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new ei("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: n, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: n || r
    });
  }
}
const ii = (e) => Object.entries(e).flatMap(([t, r]) => {
  if (typeof r == "boolean")
    return r ? t : !1;
  if (r instanceof Di) {
    let n = "";
    const i = Object.entries(r.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof Fi ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return i.length > 0 && (n = `(${i.join(", ")})`), r.subselection ? [`${t}${n} {`, ...ii(r.subselection), "}"] : `${t}${n}`;
  } else
    return [`${t} {`, ...ii(r), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Ci = (e) => {
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
    i instanceof Di ? Object.entries(i.args).forEach(([a, o]) => {
      var s;
      o instanceof Fi && (t[(s = o.name) !== null && s !== void 0 ? s : r(a)] = o);
    }) : typeof i == "object" && i !== null && Object.assign(t, Ci(i));
  }), t;
}, qc = (e) => {
  const t = Ci(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([n, i]) => `$${n}: ${i.type}`).join(", ")})`;
};
class Di {
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
class Fi {
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
const Rt = (e, t) => new Di(e, t), se = (e) => new Fi(e.type + (e.required ? "!" : ""), e.name, e.value), Bc = (e) => {
  var t;
  const r = qc(e), n = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${r}${n} {
${ii(e.fields).join(`
`)}
}`;
}, Mt = (e) => {
  const t = Ci(e.fields);
  return {
    query: Bc(e),
    variables: Object.entries(t ?? {}).reduce((r, [n, i]) => (typeof i.value < "u" && (r[n] = i.value), r), {})
  };
}, ur = `
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
`, Uc = (e) => `
    query InternalFind${We(e)}($id: GadgetID!, $select: [String!]) {
      ${qt(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, ks = (e, t) => ({
  search: t != null && t.search ? se({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? se({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? se({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? se({ value: $s(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), Gc = (e, t) => {
  const r = We(e), n = ks(r, t);
  return Mt({
    type: "query",
    name: `InternalFindFirst${r}`,
    fields: {
      internal: {
        [`list${r}`]: Rt({
          ...n,
          first: se({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, Lc = (e, t) => {
  const r = We(e), n = ks(r, t);
  return Mt({
    type: "query",
    name: `InternalFindMany${r}`,
    fields: {
      internal: {
        [`list${r}`]: Rt({
          ...n,
          after: se({ value: t == null ? void 0 : t.after, type: "String" }),
          before: se({ value: t == null ? void 0 : t.before, type: "String" }),
          first: se({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: se({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, Wc = (e) => {
  const t = We(e);
  return `
    ${ur}

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
}, zc = (e, t) => {
  const r = We(e), n = We(t);
  return `
    ${ur}

    mutation InternalBulkCreate${n}($records: [Internal${r}Input]!) {
      ${qt(e)}
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
}, Kc = (e) => {
  const t = We(e);
  return `
    ${ur}

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
}, Jc = (e) => {
  const t = We(e);
  return `
    ${ur}

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
}, Qc = (e) => {
  const t = We(e);
  return `
    ${ur}

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
class De {
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
    }), this.capitalizedApiIdentifier = rn(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let n = t;
    if (!this.validateRecord(t))
      throw new tn(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = await this.connection.currentClient.query(Uc(this.apiIdentifier), { id: t, select: $s(r == null ? void 0 : r.select) }).toPromise(), o = (n ? Ye : Yt)(i, ["internal", this.apiIdentifier]);
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
    const r = Lc(this.apiIdentifier, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise(), i = Yt(n, ["internal", `list${this.capitalizedApiIdentifier}`]), a = ir(n, i);
    return xt.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const n = Gc(this.apiIdentifier, t), i = await this.connection.currentClient.query(n.query, n.variables).toPromise();
    let a;
    r === !1 ? a = Yt(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = Ye(i, ["internal", `list${this.capitalizedApiIdentifier}`], r);
    const o = ir(i, a);
    return xt.boot(this, o, { options: t, pageInfo: a.pageInfo })[0];
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
    const r = await this.connection.currentClient.mutation(Wc(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), n = st(r, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return Zt(r, n[this.apiIdentifier]);
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
      throw new ei("Cannot perform bulkCreate without a pluralApiIdentifier");
    const n = We(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(zc(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = st(i, ["internal", `bulkCreate${n}`]);
    return xi(i, a[this.options.pluralApiIdentifier]);
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
    xa(t, "Can't update a record without an ID passed");
    const n = await this.connection.currentClient.mutation(Kc(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(r, "update")
    }).toPromise(), i = st(n, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return Zt(n, i[this.apiIdentifier]);
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
    xa(t, "Can't delete a record without an ID");
    const r = await this.connection.currentClient.mutation(Jc(this.apiIdentifier), { id: t }).toPromise();
    st(r, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const r = await this.connection.currentClient.mutation(Qc(this.apiIdentifier), t).toPromise();
    st(r, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function $s(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, n] of Object.entries(e))
    n && t.push(r);
  return t;
}
const Vi = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Ri = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, Hc = (e, t, r, n, i) => {
  const a = {};
  return typeof t < "u" && (a.id = se({ type: "GadgetID!", value: t })), Mt({
    type: "query",
    name: e,
    fields: {
      [e]: Rt(a, Ri((i == null ? void 0 : i.select) || r, !0)),
      ...Vi(n)
    }
  });
}, Yc = (e, t, r, n, i, a) => Mi(e, n, i, {
  select: a == null ? void 0 : a.select,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}), Mi = (e, t, r, n) => Mt({
  type: "query",
  name: e,
  fields: {
    [e]: Rt({
      after: se({ value: n == null ? void 0 : n.after, type: "String" }),
      first: se({ value: n == null ? void 0 : n.first, type: "Int" }),
      before: se({ value: n == null ? void 0 : n.before, type: "String" }),
      last: se({ value: n == null ? void 0 : n.last, type: "Int" }),
      sort: n != null && n.sort ? se({ value: n.sort, type: `[${Ic(r)}!]` }) : void 0,
      filter: n != null && n.filter ? se({ value: n.filter, type: `[${Tc(r)}!]` }) : void 0,
      search: n != null && n.search ? se({ value: n.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Ri((n == null ? void 0 : n.select) || t, !0)
      }
    }),
    ...Vi(r)
  }
}), js = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Ns = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, se(r)])), Zc = (e, t, r, n, i, a, o, s, u) => {
  const c = (a == null ? void 0 : a.select) || t;
  let f = {
    [e]: Rt(Ns(i), {
      success: !0,
      errors: js,
      [n]: c && !u ? Ri(c, !0) : !1,
      [s ? "results" : "result"]: !!u
    })
  };
  o && (f = {
    [o]: f
  });
  const d = {
    type: "mutation",
    name: e,
    fields: {
      ...f,
      ...Vi(r)
    }
  };
  return Mt(d);
}, Xc = (e, t, r) => {
  let n = {
    [e]: Rt(Ns(t), {
      success: !0,
      errors: js,
      result: !0
    })
  };
  return r && (n = {
    [r]: n
  }), Mt({
    type: "mutation",
    name: e,
    fields: n
  });
}, K = async (e, t, r, n, i, a, o = !0) => {
  const s = Hc(t, r, n, i, a), u = await e.connection.currentClient.query(s.query, s.variables).toPromise(), f = (o ? Ye : Yt)(u, [t]);
  return Zt(u, f);
}, nn = async (e, t, r, n, i, a, o) => {
  const s = Yc(t, r, n, i, a, o), u = await e.connection.currentClient.query(s.query, s.variables).toPromise(), c = Ye(u, [t]), f = ir(u, c);
  if (f.length > 1)
    throw Ac(a, r, n);
  return f[0];
}, V = async (e, t, r, n, i, a) => {
  const o = Mi(t, r, n, i), s = await e.connection.currentClient.query(o.query, o.variables).toPromise();
  let u;
  a === !1 ? u = Yt(s, [t]) : u = Ye(s, [t], a);
  const c = ir(s, u);
  return xt.boot(e, c, { options: i, pageInfo: u.pageInfo });
}, T = async (e, t, r, n, i, a, o, s, u, c) => {
  const f = Zc(t, r, n, i, o, s, u, a, c), d = await e.connection.currentClient.mutation(f.query, f.variables).toPromise(), p = u ? [u, t] : [t];
  if (a) {
    const y = _t(d.data, p), m = y[i] && r ? xi(d, y[i]) : void 0;
    if (y.errors) {
      const S = y.errors.map((A) => _i(A));
      throw new Pc(S, m);
    }
    return m;
  } else {
    const y = st(d, p);
    return r == null ? void 0 : c ? y.result : Zt(d, y[i]);
  }
}, ef = async (e, t, r, n) => {
  const i = Xc(t, r, n), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return st(a, n ? [n, t] : [t]).result;
}, ie = {
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
async function tf(e, t) {
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
    null
  );
}
async function rf(e, t, r) {
  let n;
  const i = [], a = "user";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "updateUser",
    ie,
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
async function nf(e, t) {
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
  return await T(
    this,
    "createUser",
    ie,
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
async function af(e, t) {
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
  return await T(
    this,
    "signUpUser",
    ie,
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
class of {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "user",
        r,
        ie,
        "user",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await K(
          this,
          "user",
          r,
          ie,
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
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await V(
        this,
        "users",
        ie,
        "user",
        r
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await V(
        this,
        "users",
        ie,
        "user",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await V(
          this,
          "users",
          ie,
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
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findByEmail = Object.assign(
      async (r, n) => await nn(
        this,
        "users",
        "email",
        r,
        ie,
        "user",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      tf,
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
      async (r, n) => await T(
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
      rf,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
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
      nf,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: ie,
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
      af,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: ie,
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
const ve = {
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
async function sf(e) {
  return await T(
    this,
    "logOut",
    ve,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function uf(e, t) {
  const r = e;
  return await T(
    this,
    "logInViaEmail",
    ve,
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
class lf {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "session",
        r,
        ve,
        "session",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await K(
          this,
          "session",
          r,
          ve,
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
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await V(
        this,
        "sessions",
        ve,
        "session",
        r
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await V(
        this,
        "sessions",
        ve,
        "session",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await V(
          this,
          "sessions",
          ve,
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
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      sf,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: ve,
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
      uf,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: ve,
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
const be = {
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
async function cf(e, t) {
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
    null
  );
}
async function ff(e, t) {
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
  return await T(
    this,
    "createShopifyProduct",
    be,
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
async function pf(e, t, r) {
  let n;
  const i = [], a = "shopifyProduct";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "updateShopifyProduct",
    be,
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
class df {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "shopifyProduct",
        r,
        be,
        "shopifyProduct",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await K(
          this,
          "shopifyProduct",
          r,
          be,
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
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await V(
        this,
        "shopifyProducts",
        be,
        "shopifyProduct",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await V(
        this,
        "shopifyProducts",
        be,
        "shopifyProduct",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await V(
          this,
          "shopifyProducts",
          be,
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
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      cf,
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
      async (r, n) => await T(
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
      ff,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: be,
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
      pf,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
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
const Se = {
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
async function yf(e, t) {
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
    null
  );
}
async function hf(e, t) {
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
  return await T(
    this,
    "createShopifyProductImage",
    Se,
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
async function mf(e, t, r) {
  let n;
  const i = [], a = "shopifyProductImage";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "updateShopifyProductImage",
    Se,
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
class gf {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "shopifyProductImage",
        r,
        Se,
        "shopifyProductImage",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await K(
          this,
          "shopifyProductImage",
          r,
          Se,
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
        defaultSelection: Se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await V(
        this,
        "shopifyProductImages",
        Se,
        "shopifyProductImage",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await V(
        this,
        "shopifyProductImages",
        Se,
        "shopifyProductImage",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await V(
          this,
          "shopifyProductImages",
          Se,
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
        defaultSelection: Se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      yf,
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
      async (r, n) => await T(
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
      hf,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: Se,
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
      mf,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: Se,
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
const Oe = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  name: !0,
  position: !0,
  values: !0
};
async function vf(e, t) {
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
    null
  );
}
async function bf(e, t) {
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
  return await T(
    this,
    "createShopifyProductOption",
    Oe,
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
async function Sf(e, t, r) {
  let n;
  const i = [], a = "shopifyProductOption";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "updateShopifyProductOption",
    Oe,
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
class Of {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "shopifyProductOption",
        r,
        Oe,
        "shopifyProductOption",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await K(
          this,
          "shopifyProductOption",
          r,
          Oe,
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
        defaultSelection: Oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await V(
        this,
        "shopifyProductOptions",
        Oe,
        "shopifyProductOption",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await V(
        this,
        "shopifyProductOptions",
        Oe,
        "shopifyProductOption",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await V(
          this,
          "shopifyProductOptions",
          Oe,
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
        defaultSelection: Oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      vf,
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
      async (r, n) => await T(
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
      bf,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: Oe,
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
      Sf,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: Oe,
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
const we = {
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
async function wf(e, t) {
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
    null
  );
}
async function Pf(e, t, r) {
  let n;
  const i = [], a = "shopifyProductVariant";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "updateShopifyProductVariant",
    we,
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
async function If(e, t) {
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
  return await T(
    this,
    "createShopifyProductVariant",
    we,
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
class Tf {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "shopifyProductVariant",
        r,
        we,
        "shopifyProductVariant",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: we,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await K(
          this,
          "shopifyProductVariant",
          r,
          we,
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
        defaultSelection: we,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await V(
        this,
        "shopifyProductVariants",
        we,
        "shopifyProductVariant",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: we,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await V(
        this,
        "shopifyProductVariants",
        we,
        "shopifyProductVariant",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: we,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await V(
          this,
          "shopifyProductVariants",
          we,
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
        defaultSelection: we,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      wf,
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
      async (r, n) => await T(
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
      Pf,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: we,
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
      If,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: we,
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
const oe = {
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
async function Af(e, t) {
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
    null
  );
}
async function Ef(e, t) {
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
  return await T(
    this,
    "createShopifyShop",
    oe,
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
async function kf(e, t, r) {
  let n;
  const i = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "updateShopifyShop",
    oe,
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
async function $f(e, t, r) {
  let n;
  const i = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "reinstallShopifyShop",
    oe,
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
async function jf(e, t, r) {
  let n;
  const i = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "uninstallShopifyShop",
    oe,
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
class Nf {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "shopifyShop",
        r,
        oe,
        "shopifyShop",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await K(
          this,
          "shopifyShop",
          r,
          oe,
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
        defaultSelection: oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await V(
        this,
        "shopifyShops",
        oe,
        "shopifyShop",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await V(
        this,
        "shopifyShops",
        oe,
        "shopifyShop",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await V(
          this,
          "shopifyShops",
          oe,
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
        defaultSelection: oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Af,
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
      async (r, n) => await T(
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
      Ef,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: oe,
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
      kf,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: oe,
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
      $f,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: oe,
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
      jf,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: oe,
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
const Pe = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
};
async function _f(e, t) {
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
    null
  );
}
async function xf(e, t, r) {
  let n;
  const i = [], a = "productPairing";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "updateProductPairing",
    Pe,
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
async function Cf(e, t) {
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
  return await T(
    this,
    "createProductPairing",
    Pe,
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
class Df {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "productPairing",
        r,
        Pe,
        "productPairing",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: Pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await K(
          this,
          "productPairing",
          r,
          Pe,
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
        defaultSelection: Pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await V(
        this,
        "productPairings",
        Pe,
        "productPairing",
        r
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: Pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await V(
        this,
        "productPairings",
        Pe,
        "productPairing",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: Pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await V(
          this,
          "productPairings",
          Pe,
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
        defaultSelection: Pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      _f,
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
      async (r, n) => await T(
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
      xf,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: Pe,
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
      Cf,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: Pe,
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
const ae = {
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
async function Ff(e, t) {
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
  return await T(
    this,
    "runShopifySync",
    ae,
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
async function Vf(e, t, r) {
  let n;
  const i = [], a = "shopifySync";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "errorShopifySync",
    ae,
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
async function Rf(e, t, r) {
  let n;
  const i = [], a = "shopifySync";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "completeShopifySync",
    ae,
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
class Mf {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "shopifySync",
        r,
        ae,
        "shopifySync",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await K(
          this,
          "shopifySync",
          r,
          ae,
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
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await V(
        this,
        "shopifySyncs",
        ae,
        "shopifySync",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await V(
        this,
        "shopifySyncs",
        ae,
        "shopifySync",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await V(
          this,
          "shopifySyncs",
          ae,
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
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, n) => await nn(
        this,
        "shopifySyncs",
        "id",
        r,
        ae,
        "shopifySync",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.run = Object.assign(
      Ff,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: ae,
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
      Vf,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
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
      Rf,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
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
const ce = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  ambiguous: !0,
  booleanField: !0
};
async function qf(e, t, r) {
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
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "updateAmbiguous",
    ce,
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
async function Bf(e, t) {
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
    null
  );
}
async function Uf(e, t) {
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
  return await T(
    this,
    "createAmbiguous",
    ce,
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
class Gf {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "ambiguous",
        r,
        ce,
        "ambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await K(
          this,
          "ambiguous",
          r,
          ce,
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
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await V(
        this,
        "ambiguouss",
        ce,
        "ambiguous",
        r
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await V(
        this,
        "ambiguouss",
        ce,
        "ambiguous",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await V(
          this,
          "ambiguouss",
          ce,
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
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, n) => await nn(
        this,
        "ambiguouss",
        "id",
        r,
        ce,
        "ambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      qf,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: ce,
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
      Bf,
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
      async (r, n) => await T(
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
      Uf,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: ce,
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
const fe = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  stringField: !0,
  numberField: !0
};
async function Lf(e, t, r) {
  let n;
  const i = [], a = "unambiguous";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      i.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await T(
    this,
    "updateUnambiguous",
    fe,
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
async function Wf(e, t) {
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
  return await T(
    this,
    "createUnambiguous",
    fe,
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
async function zf(e, t) {
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
    null
  );
}
class Kf {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "unambiguous",
        r,
        fe,
        "unambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const i = await K(
          this,
          "unambiguous",
          r,
          fe,
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
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await V(
        this,
        "unambiguouss",
        fe,
        "unambiguous",
        r
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await V(
        this,
        "unambiguouss",
        fe,
        "unambiguous",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await V(
          this,
          "unambiguouss",
          fe,
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
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, n) => await nn(
        this,
        "unambiguouss",
        "id",
        r,
        fe,
        "unambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      Lf,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
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
      Wf,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: fe,
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
      zf,
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
      async (r, n) => await T(
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
const It = {
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
async function Jf(e) {
  return await T(
    this,
    "logOut",
    It,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function Qf(e, t) {
  const r = e;
  return await T(
    this,
    "logInViaEmail",
    It,
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
class Hf {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (r) => await K(
        this,
        "currentSession",
        void 0,
        It,
        "session",
        r
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: It,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      Jf,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: It,
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
      Qf,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: It,
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
const vn = "production", bn = "development", Yf = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
class Zf {
  constructor(t) {
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async () => await ef(
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
    const r = (t == null ? void 0 : t.environment) ?? Yf() ?? bn;
    let n = r.toLocaleLowerCase();
    n != bn && n != vn && (console.warn("Invalid environment", r, "defaulting to development"), n = bn), this.connection = new Rc({
      endpoint: new URL("api/graphql", n == vn ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      environment: n == vn ? "Production" : "Development"
    }), this.user = new of(this.connection), this.session = new lf(this.connection), this.shopifyProduct = new df(this.connection), this.shopifyProductImage = new gf(this.connection), this.shopifyProductOption = new Of(this.connection), this.shopifyProductVariant = new Tf(this.connection), this.shopifyShop = new Nf(this.connection), this.productPairing = new Df(this.connection), this.shopifySync = new Mf(this.connection), this.ambiguous = new Gf(this.connection), this.unambiguous = new Kf(this.connection), this.currentSession = new Hf(this.connection), this.internal = {
      user: new De("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new De("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new De("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new De("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new De("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new De("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new De("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new De("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new De("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new De("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new De("unambiguous", this.connection, {
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
var Xf = {
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
let ep = class extends Error {
  constructor(t, r, n, i, a, o, s) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), r && (this.nodes = Array.isArray(r) ? r : [r]), n && (this.source = n), i && (this.positions = i), o && (this.originalError = o);
    var u = s;
    if (!u && o) {
      var c = o.extensions;
      c && typeof c == "object" && (u = c);
    }
    this.extensions = u || {};
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
var W, k;
function ee(e) {
  return new ep(`Syntax Error: Unexpected token at ${k} in ${e}`);
}
function Ee(e) {
  if (e.lastIndex = k, e.test(W))
    return W.slice(k, k = e.lastIndex);
}
var br = / +(?=[^\s])/y;
function tp(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, a = t.length - 1, o = 0; o < t.length; o++)
    br.lastIndex = 0, br.test(t[o]) && (o && (!n || br.lastIndex < n) && (n = br.lastIndex), i = i || o, a = o);
  for (var s = i; s <= a; s++)
    s !== i && (r += `
`), r += t[s].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function j() {
  for (var e = 0 | W.charCodeAt(k++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | W.charCodeAt(k++))
    if (e === 35)
      for (; (e = W.charCodeAt(k++)) !== 10 && e !== 13; )
        ;
  k--;
}
var _s = /[_A-Za-z]\w*/y;
function ze() {
  var e;
  if (e = Ee(_s))
    return {
      kind: "Name",
      value: e
    };
}
var rp = /(?:null|true|false)/y, xs = /\$[_A-Za-z]\w*/y, np = /-?\d+/y, ip = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, ap = /\\/g, op = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, sp = /"(?:"|[^\r\n]*?[^\\]")/y;
function Rr(e) {
  var t, r;
  if (r = Ee(rp))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = Ee(xs)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = Ee(np)) {
    var n = r;
    (r = Ee(ip)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = Ee(_s))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = Ee(op))
    t = {
      kind: "StringValue",
      value: tp(r.slice(3, -3)),
      block: !0
    };
  else if (r = Ee(sp))
    t = {
      kind: "StringValue",
      value: ap.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (W.charCodeAt(k) === 91) {
      k++, j();
      for (var s = []; o = Rr(a); )
        s.push(o);
      if (W.charCodeAt(k++) !== 93)
        throw ee("ListValue");
      return j(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (W.charCodeAt(k) === 123) {
      k++, j();
      for (var o = [], s; s = ze(); ) {
        if (j(), W.charCodeAt(k++) !== 58)
          throw ee("ObjectField");
        j();
        var u = Rr(a);
        if (!u)
          throw ee("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: u
        });
      }
      if (W.charCodeAt(k++) !== 125)
        throw ee("ObjectValue");
      return j(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return j(), t;
}
function Cs(e) {
  var t = [];
  if (j(), W.charCodeAt(k) === 40) {
    k++, j();
    for (var r; r = ze(); ) {
      if (j(), W.charCodeAt(k++) !== 58)
        throw ee("Argument");
      j();
      var n = Rr(e);
      if (!n)
        throw ee("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || W.charCodeAt(k++) !== 41)
      throw ee("Argument");
    j();
  }
  return t;
}
function Ct(e) {
  var t = [];
  for (j(); W.charCodeAt(k) === 64; ) {
    k++;
    var r = ze();
    if (!r)
      throw ee("Directive");
    j(), t.push({
      kind: "Directive",
      name: r,
      arguments: Cs(e)
    });
  }
  return t;
}
function up() {
  var e = ze();
  if (e) {
    j();
    var t;
    if (W.charCodeAt(k) === 58) {
      if (k++, j(), t = e, !(e = ze()))
        throw ee("Field");
      j();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: Cs(!1),
      directives: Ct(!1),
      selectionSet: an()
    };
  }
}
function Ds() {
  var e;
  if (j(), W.charCodeAt(k) === 91) {
    k++, j();
    var t = Ds();
    if (!t || W.charCodeAt(k++) !== 93)
      throw ee("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = ze())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw ee("NamedType");
  return j(), W.charCodeAt(k) === 33 ? (k++, j(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var lp = /on/y;
function Fs() {
  if (Ee(lp)) {
    j();
    var e = ze();
    if (!e)
      throw ee("NamedType");
    return j(), {
      kind: "NamedType",
      name: e
    };
  }
}
var cp = /\.\.\./y;
function fp() {
  if (Ee(cp)) {
    j();
    var e = k, t;
    if ((t = ze()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Ct(!1)
      };
    k = e;
    var r = Fs(), n = Ct(!1), i = an();
    if (!i)
      throw ee("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: i
    };
  }
}
function an() {
  var e;
  if (j(), W.charCodeAt(k) === 123) {
    k++, j();
    for (var t = []; e = fp() || up(); )
      t.push(e);
    if (!t.length || W.charCodeAt(k++) !== 125)
      throw ee("SelectionSet");
    return j(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var pp = /fragment/y;
function dp() {
  if (Ee(pp)) {
    j();
    var e = ze();
    if (!e)
      throw ee("FragmentDefinition");
    j();
    var t = Fs();
    if (!t)
      throw ee("FragmentDefinition");
    var r = Ct(!1), n = an();
    if (!n)
      throw ee("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var yp = /(?:query|mutation|subscription)/y;
function hp() {
  var e, t, r = [], n = [];
  (e = Ee(yp)) && (j(), t = ze(), r = function() {
    var o, s = [];
    if (j(), W.charCodeAt(k) === 40) {
      for (k++, j(); o = Ee(xs); ) {
        if (j(), W.charCodeAt(k++) !== 58)
          throw ee("VariableDefinition");
        var u = Ds(), c = void 0;
        if (W.charCodeAt(k) === 61 && (k++, j(), !(c = Rr(!0))))
          throw ee("VariableDefinition");
        j(), s.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: o.slice(1)
            }
          },
          type: u,
          defaultValue: c,
          directives: Ct(!0)
        });
      }
      if (W.charCodeAt(k++) !== 41)
        throw ee("VariableDefinition");
      j();
    }
    return s;
  }(), n = Ct(!1));
  var i = an();
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
function mp(e, t) {
  return W = typeof e.body == "string" ? e.body : e, k = 0, function() {
    var n;
    j();
    for (var i = []; n = dp() || hp(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function gp(e) {
  return JSON.stringify(e);
}
function vp(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var Ne = (e) => !(!e || !e.length), pe = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !Ne(e.variableDefinitions) && !Ne(e.directives))
      return pe.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), Ne(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(pe.VariableDefinition).join(", ") + ")"), Ne(e.directives) && (t += " " + e.directives.map(pe.Directive).join(" ")), t + " " + pe.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = pe.Variable(e.variable) + ": " + xe(e.type);
    return e.defaultValue && (t += " = " + xe(e.defaultValue)), Ne(e.directives) && (t += " " + e.directives.map(pe.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (Ne(e.arguments)) {
      var r = e.arguments.map(pe.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return Ne(e.directives) && (t += " " + e.directives.map(pe.Directive).join(" ")), e.selectionSet ? t + " " + pe.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? vp(e.value) : gp(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(xe).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(pe.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + xe(e.value),
  Document: (e) => Ne(e.definitions) ? e.definitions.map(xe).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(xe).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + xe(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return Ne(e.directives) && (t += " " + e.directives.map(pe.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), Ne(e.directives) && (t += " " + e.directives.map(pe.Directive).join(" ")), t + " " + xe(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, Ne(e.directives) && (t += " " + e.directives.map(pe.Directive).join(" ")), t + " " + xe(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return Ne(e.arguments) && (t += "(" + e.arguments.map(pe.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + xe(e.type) + "]",
  NonNullType: (e) => xe(e.type) + "!"
};
function xe(e) {
  return pe[e.kind] ? pe[e.kind](e) : "";
}
var ai = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, Ir = /* @__PURE__ */ new Set(), Ba = /* @__PURE__ */ new WeakMap(), Ot = (e) => {
  if (e === null || Ir.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Ot(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += Ot(r) || "null";
    return t += "]";
  } else if (Ua !== Mr && e instanceof Ua || Ga !== Mr && e instanceof Ga)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = Ba.get(e) || Math.random().toString(36).slice(2);
    return Ba.set(e, i), Ot({
      __key: i
    });
  }
  Ir.add(e);
  var a = "{";
  for (var o of n) {
    var s = Ot(e[o]);
    s && (a.length > 1 && (a += ","), a += Ot(o) + ":" + s);
  }
  return Ir.delete(e), a += "}";
}, bp = (e) => (Ir.clear(), Ot(e));
class Mr {
}
var Ua = typeof File < "u" ? File : Mr, Ga = typeof Blob < "u" ? Blob : Mr, Sp = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Op = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, wp = (e, t) => t % 2 == 0 ? e.replace(Op, `
`) : e, La = (e) => e.split(Sp).map(wp).join("").trim(), Wa = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), Vs = (e) => {
  var t;
  return typeof e == "string" ? t = La(e) : e.loc && Tr.get(e.__key) === e ? t = e.loc.source.body : (t = Wa.get(e) || La(xe(e)), Wa.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, za = (e) => {
  var t = ai(Vs(e));
  if (e.definitions) {
    var r = Tp(e);
    r && (t = ai(`
# ${r}`, t));
  }
  return t;
}, Pp = (e) => {
  var t, r;
  return typeof e == "string" ? (t = za(e), r = Tr.get(t) || mp(e)) : (t = e.__key || za(e), r = Tr.get(t) || e), r.loc || Vs(r), r.__key = t, Tr.set(t, r), r;
}, Ip = (e, t, r) => {
  var n = t || {}, i = Pp(e), a = bp(n), o = i.__key;
  return a !== "{}" && (o = ai(a, o)), {
    key: o,
    query: i,
    variables: n,
    extensions: r
  };
}, Tp = (e) => {
  for (var t of e.definitions)
    if (t.kind === Xf.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
};
typeof TextDecoder < "u" && new TextDecoder();
var Rs = {}, on = Ge.createContext(Rs);
on.Provider;
on.Consumer;
on.displayName = "UrqlContext";
var Ap = () => {
  var e = Ge.useContext(on);
  if (e === Rs && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, Ep = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, kp = (e, t) => e === t || !(!e || !t || e.key !== t.key), Sn = (e, t) => {
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
      if (o === "operation" ? !kp(n[o], i[o]) : n[o] !== i[o])
        return !0;
    return !1;
  })(e, r) ? r : e;
}, $p = (e, t) => {
  for (var r = 0, n = t.length; r < n; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}, On = Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Ka(e, t) {
  process.env.NODE_ENV !== "production" && On && On.ReactCurrentOwner && On.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function jp(e, t) {
  var r = Ge.useRef(void 0);
  return Ge.useMemo(() => {
    var n = Ip(e, t);
    return r.current !== void 0 && r.current.key === n.key ? r.current : (r.current = n, n);
  }, [e, t]);
}
var Np = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    e.operations$ && pt((n) => {
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
}, _p = (e, t) => e.suspense && (!t || t.suspense !== !1);
function xp(e) {
  var t = Ap(), r = Np(t), n = _p(t, e.context), i = jp(e.query, e.variables), a = Ge.useMemo(() => {
    if (e.pause)
      return null;
    var p = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return n ? $t((y) => {
      r.set(i.key, y);
    })(p) : p;
  }, [r, t, i, n, e.pause, e.requestPolicy, e.context]), o = Ge.useCallback((p, y) => {
    if (!p)
      return {
        fetching: !1
      };
    var m = r.get(i.key);
    if (m) {
      if (y && m != null && "then" in m)
        throw m;
    } else {
      var S, A = pt((O) => {
        m = O, S && S(m);
      })(ys(() => y && !S || !m)(p));
      if (m == null && y) {
        var x = new Promise((O) => {
          S = O;
        });
        throw r.set(i.key, x), x;
      } else
        A.unsubscribe();
    }
    return m || {
      fetching: !0
    };
  }, [r, i]), s = [t, i, e.requestPolicy, e.context, e.pause], [u, c] = Ge.useState(() => [a, Sn(Ep, o(a, n)), s]), f = u[1];
  a !== u[0] && $p(u[2], s) && c([a, f = Sn(u[1], o(a, n)), s]), Ge.useEffect(() => {
    var p = u[0], y = u[2][1], m = !1, S = (x) => {
      m = !0, Ka(c, (O) => {
        var R = Sn(O[1], x);
        return O[1] !== R ? [O[0], R, O[2]] : O;
      });
    };
    if (p) {
      var A = pt(S)(ki(() => {
        S({
          fetching: !1
        });
      })(p));
      return m || S({
        fetching: !0
      }), () => {
        r.dispose(y.key), A.unsubscribe();
      };
    } else
      S({
        fetching: !1
      });
  }, [r, u[0], u[2][1]]);
  var d = Ge.useCallback((p) => {
    var y = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...p
    };
    Ka(c, (m) => [n ? $t((S) => {
      r.set(i.key, S);
    })(t.executeQuery(i, y)) : t.executeQuery(i, y), m[1], s]);
  }, [t, r, i, n, o, e.requestPolicy, e.context]);
  return [f, d];
}
const Cp = Xr.createContext(void 0);
Xr.createContext(void 0);
function Dp(e) {
  return typeof e == "object" && e !== null;
}
function Fp(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const Vp = /\r\n|[\n\r]/g;
function oi(e, t) {
  let r = 0, n = 1;
  for (const i of e.body.matchAll(Vp)) {
    if (typeof i.index == "number" || Fp(!1), i.index >= t)
      break;
    r = i.index + i[0].length, n += 1;
  }
  return {
    line: n,
    column: t + 1 - r
  };
}
function Rp(e) {
  return Ms(
    e.source,
    oi(e.source, e.start)
  );
}
function Ms(e, t) {
  const r = e.locationOffset.column - 1, n = "".padStart(r) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? r : 0, u = t.column + s, c = `${e.name}:${o}:${u}
`, f = n.split(/\r\n|[\n\r]/g), d = f[i];
  if (d.length > 120) {
    const p = Math.floor(u / 80), y = u % 80, m = [];
    for (let S = 0; S < d.length; S += 80)
      m.push(d.slice(S, S + 80));
    return c + Ja([
      [`${o} |`, m[0]],
      ...m.slice(1, p + 1).map((S) => ["|", S]),
      ["|", "^".padStart(y)],
      ["|", m[p + 1]]
    ]);
  }
  return c + Ja([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, f[i - 1]],
    [`${o} |`, d],
    ["|", "^".padStart(u)],
    [`${o + 1} |`, f[i + 1]]
  ]);
}
function Ja(e) {
  const t = e.filter(([n, i]) => i !== void 0), r = Math.max(...t.map(([n]) => n.length));
  return t.map(([n, i]) => n.padStart(r) + (i ? " " + i : "")).join(`
`);
}
function Mp(e) {
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
class qr extends Error {
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
    const { nodes: o, source: s, positions: u, path: c, originalError: f, extensions: d } = Mp(r);
    super(t), this.name = "GraphQLError", this.path = c ?? void 0, this.originalError = f ?? void 0, this.nodes = Qa(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const p = Qa(
      (n = this.nodes) === null || n === void 0 ? void 0 : n.map((m) => m.loc).filter((m) => m != null)
    );
    this.source = s ?? (p == null || (i = p[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? (p == null ? void 0 : p.map((m) => m.start)), this.locations = u && s ? u.map((m) => oi(s, m)) : p == null ? void 0 : p.map((m) => oi(m.source, m.start));
    const y = Dp(
      f == null ? void 0 : f.extensions
    ) ? f == null ? void 0 : f.extensions : void 0;
    this.extensions = (a = d ?? y) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, qr) : Object.defineProperty(this, "stack", {
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

` + Rp(r.loc));
    else if (this.source && this.locations)
      for (const r of this.locations)
        t += `

` + Ms(this.source, r);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function Qa(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const qp = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Bp = (e, t) => {
  let r = "";
  return e !== void 0 ? r = `[Network] ${e.message}` : t !== void 0 ? t.forEach((n) => {
    r += `[GraphQL] ${n.message}
`;
  }) : r = "Unknown error", r.trim();
}, Up = (e) => typeof e == "string" ? new qr(e) : e != null && e.message && !e.code ? new qr(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class ut extends Error {
  /** @private */
  static forClientSideError(t, r) {
    return new ut({
      executionErrors: [t],
      response: r
    });
  }
  /** @private */
  static forErrorsResponse(t, r) {
    return new ut({
      executionErrors: t.map(_i),
      response: r
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new ut({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, r) {
    const n = Ec(t, r);
    let i = ut.forMaybeCombinedError(t.error);
    return !i && n && (i = ut.forClientSideError(n)), i;
  }
  constructor({ networkError: t, executionErrors: r, response: n }) {
    const i = (r || []).map(Up), a = Bp(t, i);
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
const Gp = (e) => {
  const { context: t, suspense: r, ...n } = e ?? {}, i = Gn(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...n,
    context: i
  };
}, Lp = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), Wp = (e) => {
  if (!hl(Cp))
    throw new Error(qp);
  const t = Gp(e);
  return xp(t);
};
var Ha = Object.prototype.toString, qs = function(t) {
  var r = Ha.call(t), n = r === "[object Arguments]";
  return n || (n = r !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && Ha.call(t.callee) === "[object Function]"), n;
}, wn, Ya;
function zp() {
  if (Ya)
    return wn;
  Ya = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = qs, i = Object.prototype.propertyIsEnumerable, a = !i.call({ toString: null }, "toString"), o = i.call(function() {
    }, "prototype"), s = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], u = function(p) {
      var y = p.constructor;
      return y && y.prototype === p;
    }, c = {
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
    }, f = function() {
      if (typeof window > "u")
        return !1;
      for (var p in window)
        try {
          if (!c["$" + p] && t.call(window, p) && window[p] !== null && typeof window[p] == "object")
            try {
              u(window[p]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), d = function(p) {
      if (typeof window > "u" || !f)
        return u(p);
      try {
        return u(p);
      } catch {
        return !1;
      }
    };
    e = function(y) {
      var m = y !== null && typeof y == "object", S = r.call(y) === "[object Function]", A = n(y), x = m && r.call(y) === "[object String]", O = [];
      if (!m && !S && !A)
        throw new TypeError("Object.keys called on a non-object");
      var R = o && S;
      if (x && y.length > 0 && !t.call(y, 0))
        for (var h = 0; h < y.length; ++h)
          O.push(String(h));
      if (A && y.length > 0)
        for (var w = 0; w < y.length; ++w)
          O.push(String(w));
      else
        for (var v in y)
          !(R && v === "prototype") && t.call(y, v) && O.push(String(v));
      if (a)
        for (var F = d(y), J = 0; J < s.length; ++J)
          !(F && s[J] === "constructor") && t.call(y, s[J]) && O.push(s[J]);
      return O;
    };
  }
  return wn = e, wn;
}
var Kp = Array.prototype.slice, Jp = qs, Za = Object.keys, Ar = Za ? function(t) {
  return Za(t);
} : zp(), Xa = Object.keys;
Ar.shim = function() {
  if (Object.keys) {
    var t = function() {
      var r = Object.keys(arguments);
      return r && r.length === arguments.length;
    }(1, 2);
    t || (Object.keys = function(n) {
      return Jp(n) ? Xa(Kp.call(n)) : Xa(n);
    });
  } else
    Object.keys = Ar;
  return Object.keys || Ar;
};
var qi = Ar, sn = function() {
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
}, eo = typeof Symbol < "u" && Symbol, Qp = sn, Bi = function() {
  return typeof eo != "function" || typeof Symbol != "function" || typeof eo("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Qp();
}, Hp = "Function.prototype.bind called on incompatible ", Pn = Array.prototype.slice, Yp = Object.prototype.toString, Zp = "[object Function]", Xp = function(t) {
  var r = this;
  if (typeof r != "function" || Yp.call(r) !== Zp)
    throw new TypeError(Hp + r);
  for (var n = Pn.call(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var f = r.apply(
        this,
        n.concat(Pn.call(arguments))
      );
      return Object(f) === f ? f : this;
    } else
      return r.apply(
        t,
        n.concat(Pn.call(arguments))
      );
  }, o = Math.max(0, r.length - n.length), s = [], u = 0; u < o; u++)
    s.push("$" + u);
  if (i = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, i.prototype = new c(), c.prototype = null;
  }
  return i;
}, ed = Xp, Ui = Function.prototype.bind || ed, td = Ui, rd = td.call(Function.call, Object.prototype.hasOwnProperty), _, Dt = SyntaxError, Bs = Function, At = TypeError, In = function(e) {
  try {
    return Bs('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, ct = Object.getOwnPropertyDescriptor;
if (ct)
  try {
    ct({}, "");
  } catch {
    ct = null;
  }
var Tn = function() {
  throw new At();
}, nd = ct ? function() {
  try {
    return arguments.callee, Tn;
  } catch {
    try {
      return ct(arguments, "callee").get;
    } catch {
      return Tn;
    }
  }
}() : Tn, vt = Bi(), Be = Object.getPrototypeOf || function(e) {
  return e.__proto__;
}, wt = {}, id = typeof Uint8Array > "u" ? _ : Be(Uint8Array), ft = {
  "%AggregateError%": typeof AggregateError > "u" ? _ : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? _ : ArrayBuffer,
  "%ArrayIteratorPrototype%": vt ? Be([][Symbol.iterator]()) : _,
  "%AsyncFromSyncIteratorPrototype%": _,
  "%AsyncFunction%": wt,
  "%AsyncGenerator%": wt,
  "%AsyncGeneratorFunction%": wt,
  "%AsyncIteratorPrototype%": wt,
  "%Atomics%": typeof Atomics > "u" ? _ : Atomics,
  "%BigInt%": typeof BigInt > "u" ? _ : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? _ : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? _ : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? _ : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? _ : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? _ : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? _ : FinalizationRegistry,
  "%Function%": Bs,
  "%GeneratorFunction%": wt,
  "%Int8Array%": typeof Int8Array > "u" ? _ : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? _ : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? _ : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": vt ? Be(Be([][Symbol.iterator]())) : _,
  "%JSON%": typeof JSON == "object" ? JSON : _,
  "%Map%": typeof Map > "u" ? _ : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !vt ? _ : Be((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? _ : Promise,
  "%Proxy%": typeof Proxy > "u" ? _ : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? _ : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? _ : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !vt ? _ : Be((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? _ : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": vt ? Be(""[Symbol.iterator]()) : _,
  "%Symbol%": vt ? Symbol : _,
  "%SyntaxError%": Dt,
  "%ThrowTypeError%": nd,
  "%TypedArray%": id,
  "%TypeError%": At,
  "%Uint8Array%": typeof Uint8Array > "u" ? _ : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? _ : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? _ : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? _ : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? _ : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? _ : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? _ : WeakSet
};
try {
  null.error;
} catch (e) {
  var ad = Be(Be(e));
  ft["%Error.prototype%"] = ad;
}
var od = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = In("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = In("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = In("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && (r = Be(i.prototype));
  }
  return ft[t] = r, r;
}, to = {
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
}, lr = Ui, Br = rd, sd = lr.call(Function.call, Array.prototype.concat), ud = lr.call(Function.apply, Array.prototype.splice), ro = lr.call(Function.call, String.prototype.replace), Ur = lr.call(Function.call, String.prototype.slice), ld = lr.call(Function.call, RegExp.prototype.exec), cd = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, fd = /\\(\\)?/g, pd = function(t) {
  var r = Ur(t, 0, 1), n = Ur(t, -1);
  if (r === "%" && n !== "%")
    throw new Dt("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Dt("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return ro(t, cd, function(a, o, s, u) {
    i[i.length] = s ? ro(u, fd, "$1") : o || a;
  }), i;
}, dd = function(t, r) {
  var n = t, i;
  if (Br(to, n) && (i = to[n], n = "%" + i[0] + "%"), Br(ft, n)) {
    var a = ft[n];
    if (a === wt && (a = od(n)), typeof a > "u" && !r)
      throw new At("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new Dt("intrinsic " + t + " does not exist!");
}, Ze = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new At("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new At('"allowMissing" argument must be a boolean');
  if (ld(/^%?[^%]*%?$/, t) === null)
    throw new Dt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = pd(t), i = n.length > 0 ? n[0] : "", a = dd("%" + i + "%", r), o = a.name, s = a.value, u = !1, c = a.alias;
  c && (i = c[0], ud(n, sd([0, 1], c)));
  for (var f = 1, d = !0; f < n.length; f += 1) {
    var p = n[f], y = Ur(p, 0, 1), m = Ur(p, -1);
    if ((y === '"' || y === "'" || y === "`" || m === '"' || m === "'" || m === "`") && y !== m)
      throw new Dt("property names with quotes must have matching quotes");
    if ((p === "constructor" || !d) && (u = !0), i += "." + p, o = "%" + i + "%", Br(ft, o))
      s = ft[o];
    else if (s != null) {
      if (!(p in s)) {
        if (!r)
          throw new At("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (ct && f + 1 >= n.length) {
        var S = ct(s, p);
        d = !!S, d && "get" in S && !("originalValue" in S.get) ? s = S.get : s = s[p];
      } else
        d = Br(s, p), s = s[p];
      d && !u && (ft[o] = s);
    }
  }
  return s;
}, yd = Ze, si = yd("%Object.defineProperty%", !0), ui = function() {
  if (si)
    try {
      return si({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
ui.hasArrayLengthDefineBug = function() {
  if (!ui())
    return null;
  try {
    return si([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var hd = ui, md = qi, gd = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", vd = Object.prototype.toString, bd = Array.prototype.concat, Us = Object.defineProperty, Sd = function(e) {
  return typeof e == "function" && vd.call(e) === "[object Function]";
}, Od = hd(), Gs = Us && Od, wd = function(e, t, r, n) {
  t in e && (!Sd(n) || !n()) || (Gs ? Us(e, t, {
    configurable: !0,
    enumerable: !1,
    value: r,
    writable: !0
  }) : e[t] = r);
}, Ls = function(e, t) {
  var r = arguments.length > 2 ? arguments[2] : {}, n = md(t);
  gd && (n = bd.call(n, Object.getOwnPropertySymbols(t)));
  for (var i = 0; i < n.length; i += 1)
    wd(e, n[i], t[n[i]], r[n[i]]);
};
Ls.supportsDescriptors = !!Gs;
var dt = Ls, Ws = { exports: {} };
(function(e) {
  var t = Ui, r = Ze, n = r("%Function.prototype.apply%"), i = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || t.call(i, n), o = r("%Object.getOwnPropertyDescriptor%", !0), s = r("%Object.defineProperty%", !0), u = r("%Math.max%");
  if (s)
    try {
      s({}, "a", { value: 1 });
    } catch {
      s = null;
    }
  e.exports = function(d) {
    var p = a(t, i, arguments);
    if (o && s) {
      var y = o(p, "length");
      y.configurable && s(
        p,
        "length",
        { value: 1 + u(0, d.length - (arguments.length - 1)) }
      );
    }
    return p;
  };
  var c = function() {
    return a(t, n, arguments);
  };
  s ? s(e.exports, "apply", { value: c }) : e.exports.apply = c;
})(Ws);
var cr = Ws.exports, zs = Ze, Ks = cr, Pd = Ks(zs("String.prototype.indexOf")), Ce = function(t, r) {
  var n = zs(t, !!r);
  return typeof n == "function" && Pd(t, ".prototype.") > -1 ? Ks(n) : n;
}, Id = qi, Js = sn(), Qs = Ce, no = Object, Td = Qs("Array.prototype.push"), io = Qs("Object.prototype.propertyIsEnumerable"), Ad = Js ? Object.getOwnPropertySymbols : null, Hs = function(t, r) {
  if (t == null)
    throw new TypeError("target must be an object");
  var n = no(t);
  if (arguments.length === 1)
    return n;
  for (var i = 1; i < arguments.length; ++i) {
    var a = no(arguments[i]), o = Id(a), s = Js && (Object.getOwnPropertySymbols || Ad);
    if (s)
      for (var u = s(a), c = 0; c < u.length; ++c) {
        var f = u[c];
        io(a, f) && Td(o, f);
      }
    for (var d = 0; d < o.length; ++d) {
      var p = o[d];
      if (io(a, p)) {
        var y = a[p];
        n[p] = y;
      }
    }
  }
  return n;
}, An = Hs, Ed = function() {
  if (!Object.assign)
    return !1;
  for (var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, n = 0; n < t.length; ++n)
    r[t[n]] = t[n];
  var i = Object.assign({}, r), a = "";
  for (var o in i)
    a += o;
  return e !== a;
}, kd = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var e = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(e, "xy");
  } catch {
    return e[1] === "y";
  }
  return !1;
}, Ys = function() {
  return !Object.assign || Ed() || kd() ? An : Object.assign;
}, $d = dt, jd = Ys, Nd = function() {
  var t = jd();
  return $d(
    Object,
    { assign: t },
    { assign: function() {
      return Object.assign !== t;
    } }
  ), t;
}, _d = dt, xd = cr, Cd = Hs, Zs = Ys, Dd = Nd, Fd = xd.apply(Zs()), Xs = function(t, r) {
  return Fd(Object, arguments);
};
_d(Xs, {
  getPolyfill: Zs,
  implementation: Cd,
  shim: Dd
});
var Vd = Xs, eu = { exports: {} }, ar = function() {
  return typeof (function() {
  }).name == "string";
}, Xt = Object.getOwnPropertyDescriptor;
if (Xt)
  try {
    Xt([], "length");
  } catch {
    Xt = null;
  }
ar.functionsHaveConfigurableNames = function() {
  if (!ar() || !Xt)
    return !1;
  var t = Xt(function() {
  }, "name");
  return !!t && !!t.configurable;
};
var Rd = Function.prototype.bind;
ar.boundFunctionsHaveNames = function() {
  return ar() && typeof Rd == "function" && (function() {
  }).bind().name !== "";
};
var Md = ar;
(function(e) {
  var t = Md.functionsHaveConfigurableNames(), r = Object, n = TypeError;
  e.exports = function() {
    if (this != null && this !== r(this))
      throw new n("RegExp.prototype.flags getter called on non-object");
    var a = "";
    return this.hasIndices && (a += "d"), this.global && (a += "g"), this.ignoreCase && (a += "i"), this.multiline && (a += "m"), this.dotAll && (a += "s"), this.unicode && (a += "u"), this.sticky && (a += "y"), a;
  }, t && Object.defineProperty && Object.defineProperty(e.exports, "name", { value: "get flags" });
})(eu);
var tu = eu.exports, qd = tu, Bd = dt.supportsDescriptors, Ud = Object.getOwnPropertyDescriptor, ru = function() {
  if (Bd && /a/mig.flags === "gim") {
    var t = Ud(RegExp.prototype, "flags");
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
  return qd;
}, Gd = dt.supportsDescriptors, Ld = ru, Wd = Object.getOwnPropertyDescriptor, zd = Object.defineProperty, Kd = TypeError, ao = Object.getPrototypeOf, Jd = /a/, Qd = function() {
  if (!Gd || !ao)
    throw new Kd("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t = Ld(), r = ao(Jd), n = Wd(r, "flags");
  return (!n || n.get !== t) && zd(r, "flags", {
    configurable: !0,
    enumerable: !1,
    get: t
  }), t;
}, Hd = dt, Yd = cr, Zd = tu, nu = ru, Xd = Qd, iu = Yd(nu());
Hd(iu, {
  getPolyfill: nu,
  implementation: Zd,
  shim: Xd
});
var ey = iu, Er = { exports: {} }, ty = sn, nt = function() {
  return ty() && !!Symbol.toStringTag;
}, ry = nt(), ny = Ce, li = ny("Object.prototype.toString"), un = function(t) {
  return ry && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : li(t) === "[object Arguments]";
}, au = function(t) {
  return un(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && li(t) !== "[object Array]" && li(t.callee) === "[object Function]";
}, iy = function() {
  return un(arguments);
}();
un.isLegacyArguments = au;
var ou = iy ? un : au, ay = {}.toString, su = Array.isArray || function(e) {
  return ay.call(e) == "[object Array]";
}, oy = String.prototype.valueOf, sy = function(t) {
  try {
    return oy.call(t), !0;
  } catch {
    return !1;
  }
}, uy = Object.prototype.toString, ly = "[object String]", cy = nt(), uu = function(t) {
  return typeof t == "string" ? !0 : typeof t != "object" ? !1 : cy ? sy(t) : uy.call(t) === ly;
}, Gi = typeof Map == "function" && Map.prototype ? Map : null, fy = typeof Set == "function" && Set.prototype ? Set : null, Gr;
Gi || (Gr = function(t) {
  return !1;
});
var lu = Gi ? Map.prototype.has : null, oo = fy ? Set.prototype.has : null;
!Gr && !lu && (Gr = function(t) {
  return !1;
});
var cu = Gr || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (lu.call(t), oo)
      try {
        oo.call(t);
      } catch {
        return !0;
      }
    return t instanceof Gi;
  } catch {
  }
  return !1;
}, py = typeof Map == "function" && Map.prototype ? Map : null, Li = typeof Set == "function" && Set.prototype ? Set : null, Lr;
Li || (Lr = function(t) {
  return !1;
});
var so = py ? Map.prototype.has : null, fu = Li ? Set.prototype.has : null;
!Lr && !fu && (Lr = function(t) {
  return !1;
});
var pu = Lr || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (fu.call(t), so)
      try {
        so.call(t);
      } catch {
        return !0;
      }
    return t instanceof Li;
  } catch {
  }
  return !1;
}, uo = ou;
if (Bi() || sn()) {
  var En = Symbol.iterator;
  Er.exports = function(t) {
    if (t != null && typeof t[En] < "u")
      return t[En]();
    if (uo(t))
      return Array.prototype[En].call(t);
  };
} else {
  var dy = su, yy = uu, lo = Ze, hy = lo("%Map%", !0), my = lo("%Set%", !0), Fe = Ce, co = Fe("Array.prototype.push"), fo = Fe("String.prototype.charCodeAt"), gy = Fe("String.prototype.slice"), vy = function(t, r) {
    var n = t.length;
    if (r + 1 >= n)
      return r + 1;
    var i = fo(t, r);
    if (i < 55296 || i > 56319)
      return r + 1;
    var a = fo(t, r + 1);
    return a < 56320 || a > 57343 ? r + 1 : r + 2;
  }, kn = function(t) {
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
  }, po = function(t, r) {
    if (dy(t) || uo(t))
      return kn(t);
    if (yy(t)) {
      var n = 0;
      return {
        next: function() {
          var a = vy(t, n), o = gy(t, n, a);
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
  if (!hy && !my)
    Er.exports = function(t) {
      if (t != null)
        return po(t, !0);
    };
  else {
    var by = cu, Sy = pu, yo = Fe("Map.prototype.forEach", !0), ho = Fe("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var mo = Fe("Map.prototype.iterator", !0), go = Fe("Set.prototype.iterator", !0), vo = function(e) {
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
    var bo = Fe("Map.prototype.@@iterator", !0) || Fe("Map.prototype._es6-shim iterator_", !0), So = Fe("Set.prototype.@@iterator", !0) || Fe("Set.prototype._es6-shim iterator_", !0), Oy = function(t) {
      if (by(t)) {
        if (mo)
          return vo(mo(t));
        if (bo)
          return bo(t);
        if (yo) {
          var r = [];
          return yo(t, function(i, a) {
            co(r, [a, i]);
          }), kn(r);
        }
      }
      if (Sy(t)) {
        if (go)
          return vo(go(t));
        if (So)
          return So(t);
        if (ho) {
          var n = [];
          return ho(t, function(i) {
            co(n, i);
          }), kn(n);
        }
      }
    };
    Er.exports = function(t) {
      return Oy(t) || po(t);
    };
  }
}
var wy = Er.exports;
const Py = {}, Iy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Py
}, Symbol.toStringTag, { value: "Module" })), Ty = /* @__PURE__ */ vl(Iy);
var Wi = typeof Map == "function" && Map.prototype, $n = Object.getOwnPropertyDescriptor && Wi ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Wr = Wi && $n && typeof $n.get == "function" ? $n.get : null, Oo = Wi && Map.prototype.forEach, zi = typeof Set == "function" && Set.prototype, jn = Object.getOwnPropertyDescriptor && zi ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, zr = zi && jn && typeof jn.get == "function" ? jn.get : null, wo = zi && Set.prototype.forEach, Ay = typeof WeakMap == "function" && WeakMap.prototype, er = Ay ? WeakMap.prototype.has : null, Ey = typeof WeakSet == "function" && WeakSet.prototype, tr = Ey ? WeakSet.prototype.has : null, ky = typeof WeakRef == "function" && WeakRef.prototype, Po = ky ? WeakRef.prototype.deref : null, $y = Boolean.prototype.valueOf, jy = Object.prototype.toString, Ny = Function.prototype.toString, _y = String.prototype.match, Ki = String.prototype.slice, rt = String.prototype.replace, xy = String.prototype.toUpperCase, Io = String.prototype.toLowerCase, du = RegExp.prototype.test, To = Array.prototype.concat, Ue = Array.prototype.join, Cy = Array.prototype.slice, Ao = Math.floor, ci = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Nn = Object.getOwnPropertySymbols, fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Ft = typeof Symbol == "function" && typeof Symbol.iterator == "object", de = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ft || "symbol") ? Symbol.toStringTag : null, yu = Object.prototype.propertyIsEnumerable, Eo = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function ko(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || du.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -Ao(-e) : Ao(e);
    if (n !== e) {
      var i = String(n), a = Ki.call(t, i.length + 1);
      return rt.call(i, r, "$&_") + "." + rt.call(rt.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return rt.call(t, r, "$&_");
}
var pi = Ty, $o = pi.custom, jo = mu($o) ? $o : null, Dy = function e(t, r, n, i) {
  var a = r || {};
  if (tt(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (tt(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = tt(a, "customInspect") ? a.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (tt(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (tt(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return vu(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var u = String(t);
    return s ? ko(t, u) : u;
  }
  if (typeof t == "bigint") {
    var c = String(t) + "n";
    return s ? ko(t, c) : c;
  }
  var f = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof t == "object")
    return di(t) ? "[Array]" : "[Object]";
  var d = Xy(a, n);
  if (typeof i > "u")
    i = [];
  else if (gu(i, t) >= 0)
    return "[Circular]";
  function p(te, P, U) {
    if (P && (i = Cy.call(i), i.push(P)), U) {
      var M = {
        depth: a.depth
      };
      return tt(a, "quoteStyle") && (M.quoteStyle = a.quoteStyle), e(te, M, n + 1, i);
    }
    return e(te, a, n + 1, i);
  }
  if (typeof t == "function" && !No(t)) {
    var y = Ly(t), m = Sr(t, p);
    return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (m.length > 0 ? " { " + Ue.call(m, ", ") + " }" : "");
  }
  if (mu(t)) {
    var S = Ft ? rt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : fi.call(t);
    return typeof t == "object" && !Ft ? zt(S) : S;
  }
  if (Hy(t)) {
    for (var A = "<" + Io.call(String(t.nodeName)), x = t.attributes || [], O = 0; O < x.length; O++)
      A += " " + x[O].name + "=" + hu(Fy(x[O].value), "double", a);
    return A += ">", t.childNodes && t.childNodes.length && (A += "..."), A += "</" + Io.call(String(t.nodeName)) + ">", A;
  }
  if (di(t)) {
    if (t.length === 0)
      return "[]";
    var R = Sr(t, p);
    return d && !Zy(R) ? "[" + yi(R, d) + "]" : "[ " + Ue.call(R, ", ") + " ]";
  }
  if (Ry(t)) {
    var h = Sr(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !yu.call(t, "cause") ? "{ [" + String(t) + "] " + Ue.call(To.call("[cause]: " + p(t.cause), h), ", ") + " }" : h.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Ue.call(h, ", ") + " }";
  }
  if (typeof t == "object" && o) {
    if (jo && typeof t[jo] == "function" && pi)
      return pi(t, { depth: f - n });
    if (o !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (Wy(t)) {
    var w = [];
    return Oo && Oo.call(t, function(te, P) {
      w.push(p(P, t, !0) + " => " + p(te, t));
    }), _o("Map", Wr.call(t), w, d);
  }
  if (Jy(t)) {
    var v = [];
    return wo && wo.call(t, function(te) {
      v.push(p(te, t));
    }), _o("Set", zr.call(t), v, d);
  }
  if (zy(t))
    return _n("WeakMap");
  if (Qy(t))
    return _n("WeakSet");
  if (Ky(t))
    return _n("WeakRef");
  if (qy(t))
    return zt(p(Number(t)));
  if (Uy(t))
    return zt(p(ci.call(t)));
  if (By(t))
    return zt($y.call(t));
  if (My(t))
    return zt(p(String(t)));
  if (!Vy(t) && !No(t)) {
    var F = Sr(t, p), J = Eo ? Eo(t) === Object.prototype : t instanceof Object || t.constructor === Object, Te = t instanceof Object ? "" : "null prototype", Ke = !J && de && Object(t) === t && de in t ? Ki.call(it(t), 8, -1) : Te ? "Object" : "", yt = J || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", Je = yt + (Ke || Te ? "[" + Ue.call(To.call([], Ke || [], Te || []), ": ") + "] " : "");
    return F.length === 0 ? Je + "{}" : d ? Je + "{" + yi(F, d) + "}" : Je + "{ " + Ue.call(F, ", ") + " }";
  }
  return String(t);
};
function hu(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function Fy(e) {
  return rt.call(String(e), /"/g, "&quot;");
}
function di(e) {
  return it(e) === "[object Array]" && (!de || !(typeof e == "object" && de in e));
}
function Vy(e) {
  return it(e) === "[object Date]" && (!de || !(typeof e == "object" && de in e));
}
function No(e) {
  return it(e) === "[object RegExp]" && (!de || !(typeof e == "object" && de in e));
}
function Ry(e) {
  return it(e) === "[object Error]" && (!de || !(typeof e == "object" && de in e));
}
function My(e) {
  return it(e) === "[object String]" && (!de || !(typeof e == "object" && de in e));
}
function qy(e) {
  return it(e) === "[object Number]" && (!de || !(typeof e == "object" && de in e));
}
function By(e) {
  return it(e) === "[object Boolean]" && (!de || !(typeof e == "object" && de in e));
}
function mu(e) {
  if (Ft)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !fi)
    return !1;
  try {
    return fi.call(e), !0;
  } catch {
  }
  return !1;
}
function Uy(e) {
  if (!e || typeof e != "object" || !ci)
    return !1;
  try {
    return ci.call(e), !0;
  } catch {
  }
  return !1;
}
var Gy = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function tt(e, t) {
  return Gy.call(e, t);
}
function it(e) {
  return jy.call(e);
}
function Ly(e) {
  if (e.name)
    return e.name;
  var t = _y.call(Ny.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function gu(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function Wy(e) {
  if (!Wr || !e || typeof e != "object")
    return !1;
  try {
    Wr.call(e);
    try {
      zr.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function zy(e) {
  if (!er || !e || typeof e != "object")
    return !1;
  try {
    er.call(e, er);
    try {
      tr.call(e, tr);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Ky(e) {
  if (!Po || !e || typeof e != "object")
    return !1;
  try {
    return Po.call(e), !0;
  } catch {
  }
  return !1;
}
function Jy(e) {
  if (!zr || !e || typeof e != "object")
    return !1;
  try {
    zr.call(e);
    try {
      Wr.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function Qy(e) {
  if (!tr || !e || typeof e != "object")
    return !1;
  try {
    tr.call(e, tr);
    try {
      er.call(e, er);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Hy(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function vu(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return vu(Ki.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = rt.call(rt.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Yy);
  return hu(i, "single", t);
}
function Yy(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + xy.call(t.toString(16));
}
function zt(e) {
  return "Object(" + e + ")";
}
function _n(e) {
  return e + " { ? }";
}
function _o(e, t, r, n) {
  var i = n ? yi(r, n) : Ue.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function Zy(e) {
  for (var t = 0; t < e.length; t++)
    if (gu(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function Xy(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = Ue.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Ue.call(Array(t + 1), r)
  };
}
function yi(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + Ue.call(e, "," + r) + `
` + t.prev;
}
function Sr(e, t) {
  var r = di(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = tt(e, i) ? t(e[i], e) : "";
  }
  var a = typeof Nn == "function" ? Nn(e) : [], o;
  if (Ft) {
    o = {};
    for (var s = 0; s < a.length; s++)
      o["$" + a[s]] = a[s];
  }
  for (var u in e)
    tt(e, u) && (r && String(Number(u)) === u && u < e.length || Ft && o["$" + u] instanceof Symbol || (du.call(/[^\w$]/, u) ? n.push(t(u, e) + ": " + t(e[u], e)) : n.push(u + ": " + t(e[u], e))));
  if (typeof Nn == "function")
    for (var c = 0; c < a.length; c++)
      yu.call(e, a[c]) && n.push("[" + t(a[c]) + "]: " + t(e[a[c]], e));
  return n;
}
var Ji = Ze, Bt = Ce, eh = Dy, th = Ji("%TypeError%"), Or = Ji("%WeakMap%", !0), wr = Ji("%Map%", !0), rh = Bt("WeakMap.prototype.get", !0), nh = Bt("WeakMap.prototype.set", !0), ih = Bt("WeakMap.prototype.has", !0), ah = Bt("Map.prototype.get", !0), oh = Bt("Map.prototype.set", !0), sh = Bt("Map.prototype.has", !0), Qi = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = e.next, e.next = n, n;
}, uh = function(e, t) {
  var r = Qi(e, t);
  return r && r.value;
}, lh = function(e, t, r) {
  var n = Qi(e, t);
  n ? n.value = r : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: r
  };
}, ch = function(e, t) {
  return !!Qi(e, t);
}, fh = function() {
  var t, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new th("Side channel does not contain " + eh(a));
    },
    get: function(a) {
      if (Or && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return rh(t, a);
      } else if (wr) {
        if (r)
          return ah(r, a);
      } else if (n)
        return uh(n, a);
    },
    has: function(a) {
      if (Or && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return ih(t, a);
      } else if (wr) {
        if (r)
          return sh(r, a);
      } else if (n)
        return ch(n, a);
      return !1;
    },
    set: function(a, o) {
      Or && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new Or()), nh(t, a, o)) : wr ? (r || (r = new wr()), oh(r, a, o)) : (n || (n = { key: {}, next: null }), lh(n, a, o));
    }
  };
  return i;
}, xo = function(e) {
  return e !== e;
}, bu = function(t, r) {
  return t === 0 && r === 0 ? 1 / t === 1 / r : !!(t === r || xo(t) && xo(r));
}, ph = bu, Su = function() {
  return typeof Object.is == "function" ? Object.is : ph;
}, dh = Su, yh = dt, hh = function() {
  var t = dh();
  return yh(Object, { is: t }, {
    is: function() {
      return Object.is !== t;
    }
  }), t;
}, mh = dt, gh = cr, vh = bu, Ou = Su, bh = hh, wu = gh(Ou(), Object);
mh(wu, {
  getPolyfill: Ou,
  implementation: vh,
  shim: bh
});
var Sh = wu, Pu = Function.prototype.toString, Tt = typeof Reflect == "object" && Reflect !== null && Reflect.apply, hi, kr;
if (typeof Tt == "function" && typeof Object.defineProperty == "function")
  try {
    hi = Object.defineProperty({}, "length", {
      get: function() {
        throw kr;
      }
    }), kr = {}, Tt(function() {
      throw 42;
    }, null, hi);
  } catch (e) {
    e !== kr && (Tt = null);
  }
else
  Tt = null;
var Oh = /^\s*class\b/, mi = function(t) {
  try {
    var r = Pu.call(t);
    return Oh.test(r);
  } catch {
    return !1;
  }
}, xn = function(t) {
  try {
    return mi(t) ? !1 : (Pu.call(t), !0);
  } catch {
    return !1;
  }
}, $r = Object.prototype.toString, wh = "[object Object]", Ph = "[object Function]", Ih = "[object GeneratorFunction]", Th = "[object HTMLAllCollection]", Ah = "[object HTML document.all class]", Eh = "[object HTMLCollection]", kh = typeof Symbol == "function" && !!Symbol.toStringTag, $h = !(0 in [,]), gi = function() {
  return !1;
};
if (typeof document == "object") {
  var jh = document.all;
  $r.call(jh) === $r.call(document.all) && (gi = function(t) {
    if (($h || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var r = $r.call(t);
        return (r === Th || r === Ah || r === Eh || r === wh) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var Nh = Tt ? function(t) {
  if (gi(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    Tt(t, null, hi);
  } catch (r) {
    if (r !== kr)
      return !1;
  }
  return !mi(t) && xn(t);
} : function(t) {
  if (gi(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (kh)
    return xn(t);
  if (mi(t))
    return !1;
  var r = $r.call(t);
  return r !== Ph && r !== Ih && !/^\[object HTML/.test(r) ? !1 : xn(t);
}, _h = Nh, xh = Object.prototype.toString, Iu = Object.prototype.hasOwnProperty, Ch = function(t, r, n) {
  for (var i = 0, a = t.length; i < a; i++)
    Iu.call(t, i) && (n == null ? r(t[i], i, t) : r.call(n, t[i], i, t));
}, Dh = function(t, r, n) {
  for (var i = 0, a = t.length; i < a; i++)
    n == null ? r(t.charAt(i), i, t) : r.call(n, t.charAt(i), i, t);
}, Fh = function(t, r, n) {
  for (var i in t)
    Iu.call(t, i) && (n == null ? r(t[i], i, t) : r.call(n, t[i], i, t));
}, Vh = function(t, r, n) {
  if (!_h(r))
    throw new TypeError("iterator must be a function");
  var i;
  arguments.length >= 3 && (i = n), xh.call(t) === "[object Array]" ? Ch(t, r, i) : typeof t == "string" ? Dh(t, r, i) : Fh(t, r, i);
}, Tu = Vh, Cn = [
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
], Rh = typeof globalThis > "u" ? Ai : globalThis, Au = function() {
  for (var t = [], r = 0; r < Cn.length; r++)
    typeof Rh[Cn[r]] == "function" && (t[t.length] = Cn[r]);
  return t;
}, Mh = Ze, jr = Mh("%Object.getOwnPropertyDescriptor%", !0);
if (jr)
  try {
    jr([], "length");
  } catch {
    jr = null;
  }
var Eu = jr, ku = Tu, qh = Au, Hi = Ce, Bh = Hi("Object.prototype.toString"), $u = nt(), Nr = Eu, Uh = typeof globalThis > "u" ? Ai : globalThis, ju = qh(), Gh = Hi("Array.prototype.indexOf", !0) || function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === r)
      return n;
  return -1;
}, Lh = Hi("String.prototype.slice"), Nu = {}, Dn = Object.getPrototypeOf;
$u && Nr && Dn && ku(ju, function(e) {
  var t = new Uh[e]();
  if (Symbol.toStringTag in t) {
    var r = Dn(t), n = Nr(r, Symbol.toStringTag);
    if (!n) {
      var i = Dn(r);
      n = Nr(i, Symbol.toStringTag);
    }
    Nu[e] = n.get;
  }
});
var Wh = function(t) {
  var r = !1;
  return ku(Nu, function(n, i) {
    if (!r)
      try {
        r = n.call(t) === i;
      } catch {
      }
  }), r;
}, _u = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!$u || !(Symbol.toStringTag in t)) {
    var r = Lh(Bh(t), 8, -1);
    return Gh(ju, r) > -1;
  }
  return Nr ? Wh(t) : !1;
}, zh = cr, Kh = Ce, xu = Ze, Jh = _u, Co = xu("ArrayBuffer", !0), Do = xu("Float32Array", !0), _r = Kh("ArrayBuffer.prototype.byteLength", !0), Fo = Co && !_r && new Co().slice, Vo = Fo && zh(Fo), Qh = _r || Vo ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return _r ? _r(t) : Vo(t, 0), !0;
  } catch {
    return !1;
  }
} : Do ? function(t) {
  try {
    return new Do(t).buffer === t && !Jh(t);
  } catch (r) {
    return typeof t == "object" && r.name === "RangeError";
  }
} : function(t) {
  return !1;
}, Hh = Date.prototype.getDay, Yh = function(t) {
  try {
    return Hh.call(t), !0;
  } catch {
    return !1;
  }
}, Zh = Object.prototype.toString, Xh = "[object Date]", em = nt(), tm = function(t) {
  return typeof t != "object" || t === null ? !1 : em ? Yh(t) : Zh.call(t) === Xh;
}, vi = Ce, Cu = nt(), Du, Fu, bi, Si;
if (Cu) {
  Du = vi("Object.prototype.hasOwnProperty"), Fu = vi("RegExp.prototype.exec"), bi = {};
  var Fn = function() {
    throw bi;
  };
  Si = {
    toString: Fn,
    valueOf: Fn
  }, typeof Symbol.toPrimitive == "symbol" && (Si[Symbol.toPrimitive] = Fn);
}
var rm = vi("Object.prototype.toString"), nm = Object.getOwnPropertyDescriptor, im = "[object RegExp]", am = Cu ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  var r = nm(t, "lastIndex"), n = r && Du(r, "value");
  if (!n)
    return !1;
  try {
    Fu(t, Si);
  } catch (i) {
    return i === bi;
  }
} : function(t) {
  return !t || typeof t != "object" && typeof t != "function" ? !1 : rm(t) === im;
}, om = Ce, Ro = om("SharedArrayBuffer.prototype.byteLength", !0), sm = Ro ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Ro(t), !0;
  } catch {
    return !1;
  }
} : function(t) {
  return !1;
}, um = Number.prototype.toString, lm = function(t) {
  try {
    return um.call(t), !0;
  } catch {
    return !1;
  }
}, cm = Object.prototype.toString, fm = "[object Number]", pm = nt(), dm = function(t) {
  return typeof t == "number" ? !0 : typeof t != "object" ? !1 : pm ? lm(t) : cm.call(t) === fm;
}, Vu = Ce, ym = Vu("Boolean.prototype.toString"), hm = Vu("Object.prototype.toString"), mm = function(t) {
  try {
    return ym(t), !0;
  } catch {
    return !1;
  }
}, gm = "[object Boolean]", vm = nt(), bm = function(t) {
  return typeof t == "boolean" ? !0 : t === null || typeof t != "object" ? !1 : vm && Symbol.toStringTag in t ? mm(t) : hm(t) === gm;
}, Oi = { exports: {} }, Sm = Object.prototype.toString, Om = Bi();
if (Om) {
  var wm = Symbol.prototype.toString, Pm = /^Symbol\(.*\)$/, Im = function(t) {
    return typeof t.valueOf() != "symbol" ? !1 : Pm.test(wm.call(t));
  };
  Oi.exports = function(t) {
    if (typeof t == "symbol")
      return !0;
    if (Sm.call(t) !== "[object Symbol]")
      return !1;
    try {
      return Im(t);
    } catch {
      return !1;
    }
  };
} else
  Oi.exports = function(t) {
    return !1;
  };
var Tm = Oi.exports, wi = { exports: {} }, Mo = typeof BigInt < "u" && BigInt, Am = function() {
  return typeof Mo == "function" && typeof BigInt == "function" && typeof Mo(42) == "bigint" && typeof BigInt(42) == "bigint";
}, Em = Am();
if (Em) {
  var km = BigInt.prototype.valueOf, $m = function(t) {
    try {
      return km.call(t), !0;
    } catch {
    }
    return !1;
  };
  wi.exports = function(t) {
    return t === null || typeof t > "u" || typeof t == "boolean" || typeof t == "string" || typeof t == "number" || typeof t == "symbol" || typeof t == "function" ? !1 : typeof t == "bigint" ? !0 : $m(t);
  };
} else
  wi.exports = function(t) {
    return !1;
  };
var jm = wi.exports, Nm = uu, _m = dm, xm = bm, Cm = Tm, Dm = jm, Fm = function(t) {
  if (t == null || typeof t != "object" && typeof t != "function")
    return null;
  if (Nm(t))
    return "String";
  if (_m(t))
    return "Number";
  if (xm(t))
    return "Boolean";
  if (Cm(t))
    return "Symbol";
  if (Dm(t))
    return "BigInt";
}, Kr = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, qo = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, Jr;
Kr || (Jr = function(t) {
  return !1;
});
var Pi = Kr ? Kr.prototype.has : null, Vn = qo ? qo.prototype.has : null;
!Jr && !Pi && (Jr = function(t) {
  return !1;
});
var Vm = Jr || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Pi.call(t, Pi), Vn)
      try {
        Vn.call(t, Vn);
      } catch {
        return !0;
      }
    return t instanceof Kr;
  } catch {
  }
  return !1;
}, Ii = { exports: {} }, Rm = Ze, Ru = Ce, Mm = Rm("%WeakSet%", !0), Rn = Ru("WeakSet.prototype.has", !0);
if (Rn) {
  var Mn = Ru("WeakMap.prototype.has", !0);
  Ii.exports = function(t) {
    if (!t || typeof t != "object")
      return !1;
    try {
      if (Rn(t, Rn), Mn)
        try {
          Mn(t, Mn);
        } catch {
          return !0;
        }
      return t instanceof Mm;
    } catch {
    }
    return !1;
  };
} else
  Ii.exports = function(t) {
    return !1;
  };
var qm = Ii.exports, Bm = cu, Um = pu, Gm = Vm, Lm = qm, Wm = function(t) {
  if (t && typeof t == "object") {
    if (Bm(t))
      return "Map";
    if (Um(t))
      return "Set";
    if (Gm(t))
      return "WeakMap";
    if (Lm(t))
      return "WeakSet";
  }
  return !1;
}, Mu = Tu, zm = Au, qu = Ce, qn = Eu, Km = qu("Object.prototype.toString"), Bu = nt(), Bo = typeof globalThis > "u" ? Ai : globalThis, Jm = zm(), Qm = qu("String.prototype.slice"), Uu = {}, Bn = Object.getPrototypeOf;
Bu && qn && Bn && Mu(Jm, function(e) {
  if (typeof Bo[e] == "function") {
    var t = new Bo[e]();
    if (Symbol.toStringTag in t) {
      var r = Bn(t), n = qn(r, Symbol.toStringTag);
      if (!n) {
        var i = Bn(r);
        n = qn(i, Symbol.toStringTag);
      }
      Uu[e] = n.get;
    }
  }
});
var Hm = function(t) {
  var r = !1;
  return Mu(Uu, function(n, i) {
    if (!r)
      try {
        var a = n.call(t);
        a === i && (r = a);
      } catch {
      }
  }), r;
}, Ym = _u, Zm = function(t) {
  return Ym(t) ? !Bu || !(Symbol.toStringTag in t) ? Qm(Km(t), 8, -1) : Hm(t) : !1;
}, Gu = Vd, Me = Ce, Uo = ey, Xm = Ze, Vt = wy, eg = fh, Go = Sh, Lo = ou, Wo = su, zo = Qh, Ko = tm, Jo = am, Qo = sm, Ho = qi, Yo = Fm, Zo = Wm, Xo = Zm, es = Me("ArrayBuffer.prototype.byteLength", !0) || function(t) {
  return t.byteLength;
}, ts = Me("SharedArrayBuffer.prototype.byteLength", !0), rs = Me("Date.prototype.getTime"), Un = Object.getPrototypeOf, ns = Me("Object.prototype.toString"), Qr = Xm("%Set%", !0), Ti = Me("Map.prototype.has", !0), Hr = Me("Map.prototype.get", !0), is = Me("Map.prototype.size", !0), Yr = Me("Set.prototype.add", !0), Lu = Me("Set.prototype.delete", !0), Zr = Me("Set.prototype.has", !0), xr = Me("Set.prototype.size", !0);
function as(e, t, r, n) {
  for (var i = Vt(e), a; (a = i.next()) && !a.done; )
    if (Ve(t, a.value, r, n))
      return Lu(e, a.value), !0;
  return !1;
}
function Wu(e) {
  if (typeof e > "u")
    return null;
  if (typeof e != "object")
    return typeof e == "symbol" ? !1 : typeof e == "string" || typeof e == "number" ? +e == +e : !0;
}
function tg(e, t, r, n, i, a) {
  var o = Wu(r);
  if (o != null)
    return o;
  var s = Hr(t, o), u = Gu({}, i, { strict: !1 });
  return typeof s > "u" && !Ti(t, o) || !Ve(n, s, u, a) ? !1 : !Ti(e, o) && Ve(n, s, u, a);
}
function rg(e, t, r) {
  var n = Wu(r);
  return n ?? (Zr(t, n) && !Zr(e, n));
}
function os(e, t, r, n, i, a) {
  for (var o = Vt(e), s, u; (s = o.next()) && !s.done; )
    if (u = s.value, // eslint-disable-next-line no-use-before-define
    Ve(r, u, i, a) && Ve(n, Hr(t, u), i, a))
      return Lu(e, u), !0;
  return !1;
}
function Ve(e, t, r, n) {
  var i = r || {};
  if (i.strict ? Go(e, t) : e === t)
    return !0;
  var a = Yo(e), o = Yo(t);
  if (a !== o)
    return !1;
  if (!e || !t || typeof e != "object" && typeof t != "object")
    return i.strict ? Go(e, t) : e == t;
  var s = n.has(e), u = n.has(t), c;
  if (s && u) {
    if (n.get(e) === n.get(t))
      return !0;
  } else
    c = {};
  return s || n.set(e, c), u || n.set(t, c), ag(e, t, i, n);
}
function ss(e) {
  return !e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function ng(e, t, r, n) {
  if (xr(e) !== xr(t))
    return !1;
  for (var i = Vt(e), a = Vt(t), o, s, u; (o = i.next()) && !o.done; )
    if (o.value && typeof o.value == "object")
      u || (u = new Qr()), Yr(u, o.value);
    else if (!Zr(t, o.value)) {
      if (r.strict || !rg(e, t, o.value))
        return !1;
      u || (u = new Qr()), Yr(u, o.value);
    }
  if (u) {
    for (; (s = a.next()) && !s.done; )
      if (s.value && typeof s.value == "object") {
        if (!as(u, s.value, r.strict, n))
          return !1;
      } else if (!r.strict && !Zr(e, s.value) && !as(u, s.value, r.strict, n))
        return !1;
    return xr(u) === 0;
  }
  return !0;
}
function ig(e, t, r, n) {
  if (is(e) !== is(t))
    return !1;
  for (var i = Vt(e), a = Vt(t), o, s, u, c, f, d; (o = i.next()) && !o.done; )
    if (c = o.value[0], f = o.value[1], c && typeof c == "object")
      u || (u = new Qr()), Yr(u, c);
    else if (d = Hr(t, c), typeof d > "u" && !Ti(t, c) || !Ve(f, d, r, n)) {
      if (r.strict || !tg(e, t, c, f, r, n))
        return !1;
      u || (u = new Qr()), Yr(u, c);
    }
  if (u) {
    for (; (s = a.next()) && !s.done; )
      if (c = s.value[0], d = s.value[1], c && typeof c == "object") {
        if (!os(u, e, c, d, r, n))
          return !1;
      } else if (!r.strict && (!e.has(c) || !Ve(Hr(e, c), d, r, n)) && !os(u, e, c, d, Gu({}, r, { strict: !1 }), n))
        return !1;
    return xr(u) === 0;
  }
  return !0;
}
function ag(e, t, r, n) {
  var i, a;
  if (typeof e != typeof t || e == null || t == null || ns(e) !== ns(t) || Lo(e) !== Lo(t))
    return !1;
  var o = Wo(e), s = Wo(t);
  if (o !== s)
    return !1;
  var u = e instanceof Error, c = t instanceof Error;
  if (u !== c || (u || c) && (e.name !== t.name || e.message !== t.message))
    return !1;
  var f = Jo(e), d = Jo(t);
  if (f !== d || (f || d) && (e.source !== t.source || Uo(e) !== Uo(t)))
    return !1;
  var p = Ko(e), y = Ko(t);
  if (p !== y || (p || y) && rs(e) !== rs(t) || r.strict && Un && Un(e) !== Un(t))
    return !1;
  var m = Xo(e), S = Xo(t);
  if ((m || S) && m !== S)
    return !1;
  var A = ss(e), x = ss(t);
  if (A !== x)
    return !1;
  if (A || x) {
    if (e.length !== t.length)
      return !1;
    for (i = 0; i < e.length; i++)
      if (e[i] !== t[i])
        return !1;
    return !0;
  }
  var O = zo(e), R = zo(t);
  if (O !== R)
    return !1;
  if (O || R)
    return es(e) !== es(t) ? !1 : typeof Uint8Array == "function" && Ve(new Uint8Array(e), new Uint8Array(t), r, n);
  var h = Qo(e), w = Qo(t);
  if (h !== w)
    return !1;
  if (h || w)
    return ts(e) !== ts(t) ? !1 : typeof Uint8Array == "function" && Ve(new Uint8Array(e), new Uint8Array(t), r, n);
  if (typeof e != typeof t)
    return !1;
  var v = Ho(e), F = Ho(t);
  if (v.length !== F.length)
    return !1;
  for (v.sort(), F.sort(), i = v.length - 1; i >= 0; i--)
    if (v[i] != F[i])
      return !1;
  for (i = v.length - 1; i >= 0; i--)
    if (a = v[i], !Ve(e[a], t[a], r, n))
      return !1;
  var J = Zo(e), Te = Zo(t);
  return J !== Te ? !1 : J === "Set" || Te === "Set" ? ng(e, t, r, n) : J === "Map" ? ig(e, t, r, n) : !0;
}
var og = function(t, r, n) {
  return Ve(t, r, n, eg());
};
const sg = /* @__PURE__ */ gl(og), ug = (e) => {
  const t = ml();
  return e ? (t.current === void 0 || !sg(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, lg = (e, t) => {
  const r = ug(t), n = Gn(() => Mi(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, r), [e, r]), [i, a] = Wp(Lp(n, t));
  return [Gn(() => {
    const s = [e.findMany.operationName];
    let u = i.data;
    if (u) {
      const f = _t(i.data, s);
      if (f) {
        const d = ir(i, f);
        u = xt.boot(e, d, f);
      }
    }
    const c = ut.errorIfDataAbsent(i, s);
    return { ...i, data: u, error: c };
  }, [e, i]), a];
}, cg = new Zf(), hg = () => {
  const [{ data: e }] = lg(cg.shopifyProduct);
  return /* @__PURE__ */ da.jsx(da.Fragment, { children: JSON.stringify(e) });
};
export {
  hg as R,
  Ai as c
};
