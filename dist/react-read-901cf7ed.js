import * as Te from "react";
import $t, { useMemo as ri, useContext as In, useRef as Pn } from "react";
var Fs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Tn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ni = { exports: {} }, st = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ki;
function En() {
  if (Ki)
    return st;
  Ki = 1;
  var e = $t, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return st.Fragment = i, st.jsx = o, st.jsxs = o, st;
}
var ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qi;
function An() {
  return Qi || (Qi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = $t, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.iterator, S = "@@iterator";
    function x(u) {
      if (u === null || typeof u != "object")
        return null;
      var y = g && u[g] || u[S];
      return typeof y == "function" ? y : null;
    }
    var q = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(u) {
      {
        for (var y = arguments.length, b = new Array(y > 1 ? y - 1 : 0), O = 1; O < y; O++)
          b[O - 1] = arguments[O];
        U("error", u, b);
      }
    }
    function U(u, y, b) {
      {
        var O = q.ReactDebugCurrentFrame, C = O.getStackAddendum();
        C !== "" && (y += "%s", b = b.concat([C]));
        var V = b.map(function(_) {
          return String(_);
        });
        V.unshift("Warning: " + y), Function.prototype.apply.call(console[u], console, V);
      }
    }
    var h = !1, P = !1, v = !1, G = !1, Ne = !1, Me;
    Me = Symbol.for("react.module.reference");
    function Ue(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === r || u === a || Ne || u === n || u === d || u === c || G || u === m || h || P || v || typeof u == "object" && u !== null && (u.$$typeof === f || u.$$typeof === p || u.$$typeof === o || u.$$typeof === s || u.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === Me || u.getModuleId !== void 0));
    }
    function Ot(u, y, b) {
      var O = u.displayName;
      if (O)
        return O;
      var C = y.displayName || y.name || "";
      return C !== "" ? b + "(" + C + ")" : b;
    }
    function at(u) {
      return u.displayName || "Context";
    }
    function be(u) {
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
            return at(y) + ".Consumer";
          case o:
            var b = u;
            return at(b._context) + ".Provider";
          case l:
            return Ot(u, u.render, "ForwardRef");
          case p:
            var O = u.displayName || null;
            return O !== null ? O : be(u.type) || "Memo";
          case f: {
            var C = u, V = C._payload, _ = C._init;
            try {
              return be(_(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, R = 0, F, j, M, Pe, D, ke, xe;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function Ce() {
      {
        if (R === 0) {
          F = console.log, j = console.info, M = console.warn, Pe = console.error, D = console.group, ke = console.groupCollapsed, xe = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: De,
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
        R++;
      }
    }
    function J() {
      {
        if (R--, R === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, u, {
              value: F
            }),
            info: T({}, u, {
              value: j
            }),
            warn: T({}, u, {
              value: M
            }),
            error: T({}, u, {
              value: Pe
            }),
            group: T({}, u, {
              value: D
            }),
            groupCollapsed: T({}, u, {
              value: ke
            }),
            groupEnd: T({}, u, {
              value: xe
            })
          });
        }
        R < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = q.ReactCurrentDispatcher, It;
    function Ge(u, y, b) {
      {
        if (It === void 0)
          try {
            throw Error();
          } catch (C) {
            var O = C.stack.trim().match(/\n( *(at )?)/);
            It = O && O[1] || "";
          }
        return `
` + It + u;
      }
    }
    var zt = !1, Pt;
    {
      var Xr = typeof WeakMap == "function" ? WeakMap : Map;
      Pt = new Xr();
    }
    function Ci(u, y) {
      if (!u || zt)
        return "";
      {
        var b = Pt.get(u);
        if (b !== void 0)
          return b;
      }
      var O;
      zt = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = L.current, L.current = null, Ce();
      try {
        if (y) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (je) {
              O = je;
            }
            Reflect.construct(u, [], _);
          } else {
            try {
              _.call();
            } catch (je) {
              O = je;
            }
            u.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (je) {
            O = je;
          }
          u();
        }
      } catch (je) {
        if (je && O && typeof je.stack == "string") {
          for (var k = je.stack.split(`
`), ae = O.stack.split(`
`), z = k.length - 1, K = ae.length - 1; z >= 1 && K >= 0 && k[z] !== ae[K]; )
            K--;
          for (; z >= 1 && K >= 0; z--, K--)
            if (k[z] !== ae[K]) {
              if (z !== 1 || K !== 1)
                do
                  if (z--, K--, K < 0 || k[z] !== ae[K]) {
                    var ve = `
` + k[z].replace(" at new ", " at ");
                    return u.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", u.displayName)), typeof u == "function" && Pt.set(u, ve), ve;
                  }
                while (z >= 1 && K >= 0);
              break;
            }
        }
      } finally {
        zt = !1, L.current = V, J(), Error.prepareStackTrace = C;
      }
      var Le = u ? u.displayName || u.name : "", Wi = Le ? Ge(Le) : "";
      return typeof u == "function" && Pt.set(u, Wi), Wi;
    }
    function en(u, y, b) {
      return Ci(u, !1);
    }
    function tn(u) {
      var y = u.prototype;
      return !!(y && y.isReactComponent);
    }
    function Tt(u, y, b) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return Ci(u, tn(u));
      if (typeof u == "string")
        return Ge(u);
      switch (u) {
        case d:
          return Ge("Suspense");
        case c:
          return Ge("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            return en(u.render);
          case p:
            return Tt(u.type, y, b);
          case f: {
            var O = u, C = O._payload, V = O._init;
            try {
              return Tt(V(C), y, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Et = Object.prototype.hasOwnProperty, Di = {}, Fi = q.ReactDebugCurrentFrame;
    function At(u) {
      if (u) {
        var y = u._owner, b = Tt(u.type, u._source, y ? y.type : null);
        Fi.setExtraStackFrame(b);
      } else
        Fi.setExtraStackFrame(null);
    }
    function rn(u, y, b, O, C) {
      {
        var V = Function.call.bind(Et);
        for (var _ in u)
          if (V(u, _)) {
            var k = void 0;
            try {
              if (typeof u[_] != "function") {
                var ae = Error((O || "React class") + ": " + b + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ae.name = "Invariant Violation", ae;
              }
              k = u[_](y, _, O, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              k = z;
            }
            k && !(k instanceof Error) && (At(C), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", b, _, typeof k), At(null)), k instanceof Error && !(k.message in Di) && (Di[k.message] = !0, At(C), w("Failed %s type: %s", b, k.message), At(null));
          }
      }
    }
    var nn = Array.isArray;
    function Wt(u) {
      return nn(u);
    }
    function an(u) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, b = y && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return b;
      }
    }
    function on(u) {
      try {
        return Vi(u), !1;
      } catch {
        return !0;
      }
    }
    function Vi(u) {
      return "" + u;
    }
    function qi(u) {
      if (on(u))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", an(u)), Vi(u);
    }
    var ot = q.ReactCurrentOwner, sn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ri, $i, Kt;
    Kt = {};
    function un(u) {
      if (Et.call(u, "ref")) {
        var y = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function ln(u) {
      if (Et.call(u, "key")) {
        var y = Object.getOwnPropertyDescriptor(u, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function cn(u, y) {
      if (typeof u.ref == "string" && ot.current && y && ot.current.stateNode !== y) {
        var b = be(ot.current.type);
        Kt[b] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', be(ot.current.type), u.ref), Kt[b] = !0);
      }
    }
    function dn(u, y) {
      {
        var b = function() {
          Ri || (Ri = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        b.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function fn(u, y) {
      {
        var b = function() {
          $i || ($i = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        b.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var pn = function(u, y, b, O, C, V, _) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: y,
        ref: b,
        props: _,
        // Record the component responsible for creating this element.
        _owner: V
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
    function yn(u, y, b, O, C) {
      {
        var V, _ = {}, k = null, ae = null;
        b !== void 0 && (qi(b), k = "" + b), ln(y) && (qi(y.key), k = "" + y.key), un(y) && (ae = y.ref, cn(y, C));
        for (V in y)
          Et.call(y, V) && !sn.hasOwnProperty(V) && (_[V] = y[V]);
        if (u && u.defaultProps) {
          var z = u.defaultProps;
          for (V in z)
            _[V] === void 0 && (_[V] = z[V]);
        }
        if (k || ae) {
          var K = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          k && dn(_, K), ae && fn(_, K);
        }
        return pn(u, k, ae, C, O, ot.current, _);
      }
    }
    var Qt = q.ReactCurrentOwner, Mi = q.ReactDebugCurrentFrame;
    function Be(u) {
      if (u) {
        var y = u._owner, b = Tt(u.type, u._source, y ? y.type : null);
        Mi.setExtraStackFrame(b);
      } else
        Mi.setExtraStackFrame(null);
    }
    var Jt;
    Jt = !1;
    function Yt(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function Ui() {
      {
        if (Qt.current) {
          var u = be(Qt.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function hn(u) {
      {
        if (u !== void 0) {
          var y = u.fileName.replace(/^.*[\\\/]/, ""), b = u.lineNumber;
          return `

Check your code at ` + y + ":" + b + ".";
        }
        return "";
      }
    }
    var Gi = {};
    function mn(u) {
      {
        var y = Ui();
        if (!y) {
          var b = typeof u == "string" ? u : u.displayName || u.name;
          b && (y = `

Check the top-level render call using <` + b + ">.");
        }
        return y;
      }
    }
    function Bi(u, y) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var b = mn(y);
        if (Gi[b])
          return;
        Gi[b] = !0;
        var O = "";
        u && u._owner && u._owner !== Qt.current && (O = " It was passed a child from " + be(u._owner.type) + "."), Be(u), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, O), Be(null);
      }
    }
    function Li(u, y) {
      {
        if (typeof u != "object")
          return;
        if (Wt(u))
          for (var b = 0; b < u.length; b++) {
            var O = u[b];
            Yt(O) && Bi(O, y);
          }
        else if (Yt(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var C = x(u);
          if (typeof C == "function" && C !== u.entries)
            for (var V = C.call(u), _; !(_ = V.next()).done; )
              Yt(_.value) && Bi(_.value, y);
        }
      }
    }
    function gn(u) {
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
          var O = be(y);
          rn(b, u.props, "prop", O, u);
        } else if (y.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var C = be(y);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bn(u) {
      {
        for (var y = Object.keys(u.props), b = 0; b < y.length; b++) {
          var O = y[b];
          if (O !== "children" && O !== "key") {
            Be(u), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), Be(null);
            break;
          }
        }
        u.ref !== null && (Be(u), w("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    function zi(u, y, b, O, C, V) {
      {
        var _ = Ue(u);
        if (!_) {
          var k = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ae = hn(C);
          ae ? k += ae : k += Ui();
          var z;
          u === null ? z = "null" : Wt(u) ? z = "array" : u !== void 0 && u.$$typeof === t ? (z = "<" + (be(u.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : z = typeof u, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, k);
        }
        var K = yn(u, y, b, C, V);
        if (K == null)
          return K;
        if (_) {
          var ve = y.children;
          if (ve !== void 0)
            if (O)
              if (Wt(ve)) {
                for (var Le = 0; Le < ve.length; Le++)
                  Li(ve[Le], u);
                Object.freeze && Object.freeze(ve);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Li(ve, u);
        }
        return u === r ? bn(K) : gn(K), K;
      }
    }
    function vn(u, y, b) {
      return zi(u, y, b, !0);
    }
    function Sn(u, y, b) {
      return zi(u, y, b, !1);
    }
    var wn = Sn, On = vn;
    ut.Fragment = r, ut.jsx = wn, ut.jsxs = On;
  }()), ut;
}
process.env.NODE_ENV === "production" ? ni.exports = En() : ni.exports = An();
var Ji = ni.exports, dt;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(dt || (dt = {}));
const kn = {
  DateTime(e) {
    return new Date(e);
  }
};
class jn {
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
      a != null && (i[r] = kn[n](a));
    }
    return i;
  }
}
var Ke = {
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
let ai = class extends Error {
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
var $, E;
function Q(e) {
  return new ai(`Syntax Error: Unexpected token at ${E} in ${e}`);
}
function me(e) {
  if (e.lastIndex = E, e.test($))
    return $.slice(E, E = e.lastIndex);
}
var kt = / +(?=[^\s])/y;
function _n(e) {
  for (var t = e.split(`
`), i = "", r = 0, n = 0, a = t.length - 1, o = 0; o < t.length; o++)
    kt.lastIndex = 0, kt.test(t[o]) && (o && (!r || kt.lastIndex < r) && (r = kt.lastIndex), n = n || o, a = o);
  for (var s = n; s <= a; s++)
    s !== n && (i += `
`), i += t[s].slice(r).replace(/\\"""/g, '"""');
  return i;
}
function A() {
  for (var e = 0 | $.charCodeAt(E++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | $.charCodeAt(E++))
    if (e === 35)
      for (; (e = $.charCodeAt(E++)) !== 10 && e !== 13; )
        ;
  E--;
}
var Er = /[_A-Za-z]\w*/y;
function Ee() {
  var e;
  if (e = me(Er))
    return {
      kind: "Name",
      value: e
    };
}
var Nn = /(?:null|true|false)/y, Ar = /\$[_A-Za-z]\w*/y, xn = /-?\d+/y, Cn = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Dn = /\\/g, Fn = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Vn = /"(?:"|[^\r\n]*?[^\\]")/y;
function Dt(e) {
  var t, i;
  if (i = me(Nn))
    t = i === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: i === "true"
    };
  else if (!e && (i = me(Ar)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: i.slice(1)
      }
    };
  else if (i = me(xn)) {
    var r = i;
    (i = me(Cn)) ? t = {
      kind: "FloatValue",
      value: r + i
    } : t = {
      kind: "IntValue",
      value: r
    };
  } else if (i = me(Er))
    t = {
      kind: "EnumValue",
      value: i
    };
  else if (i = me(Fn))
    t = {
      kind: "StringValue",
      value: _n(i.slice(3, -3)),
      block: !0
    };
  else if (i = me(Vn))
    t = {
      kind: "StringValue",
      value: Dn.test(i) ? JSON.parse(i) : i.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if ($.charCodeAt(E) === 91) {
      E++, A();
      for (var s = []; o = Dt(a); )
        s.push(o);
      if ($.charCodeAt(E++) !== 93)
        throw Q("ListValue");
      return A(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if ($.charCodeAt(E) === 123) {
      E++, A();
      for (var o = [], s; s = Ee(); ) {
        if (A(), $.charCodeAt(E++) !== 58)
          throw Q("ObjectField");
        A();
        var l = Dt(a);
        if (!l)
          throw Q("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: l
        });
      }
      if ($.charCodeAt(E++) !== 125)
        throw Q("ObjectValue");
      return A(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return A(), t;
}
function kr(e) {
  var t = [];
  if (A(), $.charCodeAt(E) === 40) {
    E++, A();
    for (var i; i = Ee(); ) {
      if (A(), $.charCodeAt(E++) !== 58)
        throw Q("Argument");
      A();
      var r = Dt(e);
      if (!r)
        throw Q("Argument");
      t.push({
        kind: "Argument",
        name: i,
        value: r
      });
    }
    if (!t.length || $.charCodeAt(E++) !== 41)
      throw Q("Argument");
    A();
  }
  return t;
}
function Je(e) {
  var t = [];
  for (A(); $.charCodeAt(E) === 64; ) {
    E++;
    var i = Ee();
    if (!i)
      throw Q("Directive");
    A(), t.push({
      kind: "Directive",
      name: i,
      arguments: kr(e)
    });
  }
  return t;
}
function qn() {
  var e = Ee();
  if (e) {
    A();
    var t;
    if ($.charCodeAt(E) === 58) {
      if (E++, A(), t = e, !(e = Ee()))
        throw Q("Field");
      A();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: kr(!1),
      directives: Je(!1),
      selectionSet: Mt()
    };
  }
}
function jr() {
  var e;
  if (A(), $.charCodeAt(E) === 91) {
    E++, A();
    var t = jr();
    if (!t || $.charCodeAt(E++) !== 93)
      throw Q("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = Ee())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw Q("NamedType");
  return A(), $.charCodeAt(E) === 33 ? (E++, A(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Rn = /on/y;
function _r() {
  if (me(Rn)) {
    A();
    var e = Ee();
    if (!e)
      throw Q("NamedType");
    return A(), {
      kind: "NamedType",
      name: e
    };
  }
}
var $n = /\.\.\./y;
function Mn() {
  if (me($n)) {
    A();
    var e = E, t;
    if ((t = Ee()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Je(!1)
      };
    E = e;
    var i = _r(), r = Je(!1), n = Mt();
    if (!n)
      throw Q("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: i,
      directives: r,
      selectionSet: n
    };
  }
}
function Mt() {
  var e;
  if (A(), $.charCodeAt(E) === 123) {
    E++, A();
    for (var t = []; e = Mn() || qn(); )
      t.push(e);
    if (!t.length || $.charCodeAt(E++) !== 125)
      throw Q("SelectionSet");
    return A(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Un = /fragment/y;
function Gn() {
  if (me(Un)) {
    A();
    var e = Ee();
    if (!e)
      throw Q("FragmentDefinition");
    A();
    var t = _r();
    if (!t)
      throw Q("FragmentDefinition");
    var i = Je(!1), r = Mt();
    if (!r)
      throw Q("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: i,
      selectionSet: r
    };
  }
}
var Bn = /(?:query|mutation|subscription)/y;
function Ln() {
  var e, t, i = [], r = [];
  (e = me(Bn)) && (A(), t = Ee(), i = function() {
    var o, s = [];
    if (A(), $.charCodeAt(E) === 40) {
      for (E++, A(); o = me(Ar); ) {
        if (A(), $.charCodeAt(E++) !== 58)
          throw Q("VariableDefinition");
        var l = jr(), d = void 0;
        if ($.charCodeAt(E) === 61 && (E++, A(), !(d = Dt(!0))))
          throw Q("VariableDefinition");
        A(), s.push({
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
          directives: Je(!0)
        });
      }
      if ($.charCodeAt(E++) !== 41)
        throw Q("VariableDefinition");
      A();
    }
    return s;
  }(), r = Je(!1));
  var n = Mt();
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
function zn(e, t) {
  return $ = typeof e.body == "string" ? e.body : e, E = 0, function() {
    var r;
    A();
    for (var n = []; r = Gn() || Ln(); )
      n.push(r);
    return {
      kind: "Document",
      definitions: n
    };
  }();
}
function Wn(e) {
  return JSON.stringify(e);
}
function Kn(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var Se = (e) => !(!e || !e.length), ie = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !Se(e.variableDefinitions) && !Se(e.directives))
      return ie.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), Se(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(ie.VariableDefinition).join(", ") + ")"), Se(e.directives) && (t += " " + e.directives.map(ie.Directive).join(" ")), t + " " + ie.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = ie.Variable(e.variable) + ": " + we(e.type);
    return e.defaultValue && (t += " = " + we(e.defaultValue)), Se(e.directives) && (t += " " + e.directives.map(ie.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (Se(e.arguments)) {
      var i = e.arguments.map(ie.Argument), r = t + "(" + i.join(", ") + ")";
      t = r.length > 80 ? t + `(
  ` + i.join(`
`).replace(/\n/g, `
  `) + `
)` : r;
    }
    return Se(e.directives) && (t += " " + e.directives.map(ie.Directive).join(" ")), e.selectionSet ? t + " " + ie.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Kn(e.value) : Wn(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(we).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(ie.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + we(e.value),
  Document: (e) => Se(e.definitions) ? e.definitions.map(we).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(we).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + we(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return Se(e.directives) && (t += " " + e.directives.map(ie.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), Se(e.directives) && (t += " " + e.directives.map(ie.Directive).join(" ")), t + " " + we(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, Se(e.directives) && (t += " " + e.directives.map(ie.Directive).join(" ")), t + " " + we(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return Se(e.arguments) && (t += "(" + e.arguments.map(ie.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + we(e.type) + "]",
  NonNullType: (e) => we(e.type) + "!"
};
function we(e) {
  return ie[e.kind] ? ie[e.kind](e) : "";
}
var Si = () => {
}, ge = Si;
function Ie(e) {
  return {
    tag: 0,
    0: e
  };
}
function vt(e) {
  return {
    tag: 1,
    0: e
  };
}
var Qn = (e) => e;
function te(e) {
  return (t) => (i) => {
    var r = ge;
    t((n) => {
      n === 0 ? i(0) : n.tag === 0 ? (r = n[0], i(n)) : e(n[0]) ? i(n) : r(0);
    });
  };
}
function ft(e) {
  return (t) => (i) => t((r) => {
    r === 0 || r.tag === 0 ? i(r) : i(vt(e(r[0])));
  });
}
function mt(e) {
  return (t) => (i) => {
    var r = [], n = ge, a = !1, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, r.length || i(0)) : s.tag === 0 ? n = s[0] : (a = !1, function(d) {
        var c = ge;
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
    }), i(Ie((s) => {
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
function Jn(e) {
  return mt(Qn)(e);
}
function Ye(e) {
  return Jn(Zn(e));
}
function wi(e) {
  return (t) => (i) => {
    var r = !1;
    t((n) => {
      if (!r)
        if (n === 0)
          r = !0, i(0), e();
        else if (n.tag === 0) {
          var a = n[0];
          i(Ie((o) => {
            o === 1 ? (r = !0, a(1), e()) : a(o);
          }));
        } else
          i(n);
    });
  };
}
function He(e) {
  return (t) => (i) => {
    var r = !1;
    t((n) => {
      if (!r)
        if (n === 0)
          r = !0, i(0);
        else if (n.tag === 0) {
          var a = n[0];
          i(Ie((o) => {
            o === 1 && (r = !0), a(o);
          }));
        } else
          e(n[0]), i(n);
    });
  };
}
function Yi(e) {
  return (t) => (i) => t((r) => {
    r === 0 ? i(0) : r.tag === 0 ? (i(r), e()) : i(r);
  });
}
function gt(e) {
  var t = [], i = ge, r = !1;
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
    }), n(Ie((a) => {
      if (a === 1) {
        var o = t.indexOf(n);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || i(1);
      } else
        r || (r = !0, i(0));
    }));
  };
}
function Hi(e) {
  return (t) => (i) => {
    var r = ge, n = ge, a = !1, o = !1, s = !1, l = !1;
    t((d) => {
      l || (d === 0 ? (l = !0, s || i(0)) : d.tag === 0 ? r = d[0] : (s && (n(1), n = ge), a ? a = !1 : (a = !0, r(0)), function(p) {
        s = !0, p((f) => {
          s && (f === 0 ? (s = !1, l ? i(0) : a || (a = !0, r(0))) : f.tag === 0 ? (o = !1, (n = f[0])(0)) : (i(f), o ? o = !1 : n(0)));
        });
      }(e(d[0]))));
    }), i(Ie((d) => {
      d === 1 ? (l || (l = !0, r(1)), s && (s = !1, n(1))) : (!l && !a && (a = !0, r(0)), s && !o && (o = !0, n(0)));
    }));
  };
}
function Nr(e) {
  return (t) => (i) => {
    var r = ge, n = !1, a = 0;
    t((o) => {
      n || (o === 0 ? (n = !0, i(0)) : o.tag === 0 ? e <= 0 ? (n = !0, i(0), o[0](1)) : r = o[0] : a++ < e ? (i(o), !n && a >= e && (n = !0, i(0), r(1))) : i(o));
    }), i(Ie((o) => {
      o === 1 && !n ? (n = !0, r(1)) : o === 0 && !n && a < e && r(0);
    }));
  };
}
function Oi(e) {
  return (t) => (i) => {
    var r = ge, n = ge, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, n(1), i(0)) : o.tag === 0 ? (r = o[0], e((s) => {
        s === 0 || (s.tag === 0 ? (n = s[0])(0) : (a = !0, n(1), r(1), i(0)));
      })) : i(o));
    }), i(Ie((o) => {
      o === 1 && !a ? (a = !0, r(1), n(1)) : a || r(0);
    }));
  };
}
function xr(e, t) {
  return (i) => (r) => {
    var n = ge, a = !1;
    i((o) => {
      a || (o === 0 ? (a = !0, r(0)) : o.tag === 0 ? (n = o[0], r(o)) : e(o[0]) ? r(o) : (a = !0, t && r(o), r(0), n(1)));
    });
  };
}
function Yn(e) {
  return (t) => e()(t);
}
function Cr(e) {
  return (t) => {
    var i = e[Symbol.asyncIterator](), r = !1, n = !1, a = !1, o;
    t(Ie(async (s) => {
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
              a = !1, t(vt(o.value));
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
function Hn(e) {
  return e[Symbol.asyncIterator] ? Cr(e) : (t) => {
    var i = e[Symbol.iterator](), r = !1, n = !1, a = !1, o;
    t(Ie((s) => {
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
              a = !1, t(vt(o.value));
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
var Zn = Hn;
function pt(e) {
  return (t) => {
    var i = !1;
    t(Ie((r) => {
      r === 1 ? i = !0 : i || (i = !0, t(vt(e)), t(0));
    }));
  };
}
function Ii(e) {
  return (t) => {
    var i = !1, r = e({
      next(n) {
        i || t(vt(n));
      },
      complete() {
        i || (i = !0, t(0));
      }
    });
    t(Ie((n) => {
      n === 1 && !i && (i = !0, r());
    }));
  };
}
function Zi() {
  var e, t;
  return {
    source: gt(Ii((i) => (e = i.next, t = i.complete, Si))),
    next(i) {
      e && e(i);
    },
    complete() {
      t && t();
    }
  };
}
function Xi(e) {
  return Ii((t) => (e.then((i) => {
    Promise.resolve(i).then(() => {
      t.next(i), t.complete();
    });
  }), Si));
}
function $e(e) {
  return (t) => {
    var i = ge, r = !1;
    return t((n) => {
      n === 0 ? r = !0 : n.tag === 0 ? (i = n[0])(0) : r || (e(n[0]), i(0));
    }), {
      unsubscribe() {
        r || (r = !0, i(1));
      }
    };
  };
}
function Xn(e) {
  $e((t) => {
  })(e);
}
function ea(e) {
  return new Promise((t) => {
    var i = ge, r;
    e((n) => {
      n === 0 ? Promise.resolve(r).then(t) : n.tag === 0 ? (i = n[0])(0) : (r = n[0], i(0));
    });
  });
}
var ta = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new ai(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new ai(e);
class St extends Error {
  constructor(t) {
    var i = (t.graphQLErrors || []).map(ta), r = ((n, a) => {
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
var oi = (e, t) => {
  for (var i = 0 | (t || 5381), r = 0, n = 0 | e.length; r < n; r++)
    i = (i << 5) + i + e.charCodeAt(r);
  return i;
}, Re = /* @__PURE__ */ new Set(), er = /* @__PURE__ */ new WeakMap(), ze = (e) => {
  if (e === null || Re.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return ze(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var i of e)
      t.length > 1 && (t += ","), t += ze(i) || "null";
    return t += "]";
  } else if (Vt !== Ze && e instanceof Vt || qt !== Ze && e instanceof qt)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var n = er.get(e) || Math.random().toString(36).slice(2);
    return er.set(e, n), ze({
      __key: n
    });
  }
  Re.add(e);
  var a = "{";
  for (var o of r) {
    var s = ze(e[o]);
    s && (a.length > 1 && (a += ","), a += ze(o) + ":" + s);
  }
  return Re.delete(e), a += "}";
}, si = (e, t, i) => {
  if (!(i == null || typeof i != "object" || i.toJSON || Re.has(i)))
    if (Array.isArray(i))
      for (var r = 0, n = i.length; r < n; r++)
        si(e, `${t}.${r}`, i[r]);
    else if (i instanceof Vt || i instanceof qt)
      e.set(t, i);
    else {
      Re.add(i);
      for (var a of Object.keys(i))
        si(e, `${t}.${a}`, i[a]);
    }
}, Ft = (e) => (Re.clear(), ze(e));
class Ze {
}
var Vt = typeof File < "u" ? File : Ze, qt = typeof Blob < "u" ? Blob : Ze, ia = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, ra = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, na = (e, t) => t % 2 == 0 ? e.replace(ra, `
`) : e, tr = (e) => e.split(ia).map(na).join("").trim(), ir = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), Pi = (e) => {
  var t;
  return typeof e == "string" ? t = tr(e) : e.loc && Nt.get(e.__key) === e ? t = e.loc.source.body : (t = ir.get(e) || tr(we(e)), ir.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, rr = (e) => {
  var t = oi(Pi(e));
  if (e.definitions) {
    var i = Fr(e);
    i && (t = oi(`
# ${i}`, t));
  }
  return t;
}, Dr = (e) => {
  var t, i;
  return typeof e == "string" ? (t = rr(e), i = Nt.get(t) || zn(e)) : (t = e.__key || rr(e), i = Nt.get(t) || e), i.loc || Pi(i), i.__key = t, Nt.set(t, i), i;
}, xt = (e, t, i) => {
  var r = t || {}, n = Dr(e), a = Ft(r), o = n.__key;
  return a !== "{}" && (o = oi(a, o)), {
    key: o,
    query: n,
    variables: r,
    extensions: i
  };
}, Fr = (e) => {
  for (var t of e.definitions)
    if (t.kind === Ke.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, aa = (e) => {
  for (var t of e.definitions)
    if (t.kind === Ke.OPERATION_DEFINITION)
      return t.operation;
}, ui = (e, t, i) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var r = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new St({
      graphQLErrors: t.errors,
      response: i
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? r : t.hasNext,
    stale: !1
  };
}, li = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var i of Object.keys(t))
      e[i] = li(e[i], t[i]);
    return e;
  }
  return t;
}, ci = (e, t, i) => {
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
          c[m + g] = li(c[m + g], l.items[g]);
      else
        l.data !== void 0 && (c[d] = li(c[d], l.data));
    }
  else
    s.data = t.data || e.data, r = t.errors || r;
  return {
    operation: e.operation,
    data: s.data,
    error: r.length ? new St({
      graphQLErrors: r,
      response: i
    }) : void 0,
    extensions: n ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, Vr = (e, t, i) => ({
  operation: e,
  data: void 0,
  error: new St({
    networkError: t,
    response: i
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function qr(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Pi(e.query),
    operationName: Fr(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var oa = (e, t) => {
  var i = e.kind === "query" && e.context.preferGetMethod;
  if (!i || !t)
    return e.context.url;
  var r = new URL(e.context.url);
  for (var n in t) {
    var a = t[n];
    a && r.searchParams.set(n, typeof a == "object" ? Ft(a) : a);
  }
  var o = r.toString();
  return o.length > 2047 && i !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, sa = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var i = Ft(t), r = ((s) => {
      var l = /* @__PURE__ */ new Map();
      return (Vt !== Ze || qt !== Ze) && (Re.clear(), si(l, "variables", s)), l;
    })(t.variables);
    if (r.size) {
      var n = new FormData();
      n.append("operations", i), n.append("map", Ft({
        ...[...r.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of r.values())
        n.append("" + a++, o);
      return n;
    }
    return i;
  }
}, ua = (e, t) => {
  var i = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, r = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (r.headers)
    for (var n in r.headers)
      i[n.toLowerCase()] = r.headers[n];
  var a = sa(e, t);
  return typeof a == "string" && !i["content-type"] && (i["content-type"] = "application/json"), {
    ...r,
    method: a ? "POST" : "GET",
    body: a,
    headers: i
  };
}, la = typeof TextDecoder < "u" ? new TextDecoder() : null, ca = /boundary="?([^=";]+)"?/i, da = /data: ?([^\n]+)/, nr = (e) => e.constructor.name === "Buffer" ? e.toString() : la.decode(e);
async function* ar(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield nr(t);
  else {
    var i = e.body.getReader(), r;
    try {
      for (; !(r = await i.read()).done; )
        yield nr(r.value);
    } finally {
      i.cancel();
    }
  }
}
async function* or(e, t) {
  var i = "", r;
  for await (var n of e)
    for (i += n; (r = i.indexOf(t)) > -1; )
      yield i.slice(0, r), i = i.slice(r + t.length);
}
async function* fa(e, t, i) {
  var r = !0, n = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, i)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (c, p) {
        var f = c.match(ca), m = "--" + (f ? f[1] : "-"), g = !0, S;
        for await (var x of or(ar(p), `\r
` + m)) {
          if (g) {
            g = !1;
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
      }(o, a);
    else if (/text\/event-stream/i.test(o))
      s = async function* (c) {
        var p;
        for await (var f of or(ar(c), `

`)) {
          var m = f.match(da);
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
      n = n ? ci(n, l, a) : ui(e, l, a), r = !1, yield n, r = !0;
    n || (yield n = ui(e, {}, a));
  } catch (d) {
    if (!r)
      throw d;
    yield Vr(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : d, a);
  }
}
function pa(e, t, i) {
  var r;
  return typeof AbortController < "u" && (i.signal = (r = new AbortController()).signal), wi(() => {
    r && r.abort();
  })(te((n) => !!n)(Cr(fa(e, t, i))));
}
var di = (e, t) => {
  if (Array.isArray(e))
    for (var i of e)
      di(i, t);
  else if (typeof e == "object" && e !== null)
    for (var r in e)
      r === "__typename" && typeof e[r] == "string" ? t.add(e[r]) : di(e[r], t);
  return t;
}, fi = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var i = [];
    for (var r of e.definitions) {
      var n = fi(r);
      t = t || n !== r, i.push(n);
    }
    if (t)
      return {
        ...e,
        definitions: i
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === Ke.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === Ke.FIELD && s.name.value === "__typename" && !s.alias;
        var l = fi(s);
        t = t || l !== s, a.push(l);
      }
      if (o || (t = !0, a.push({
        kind: Ke.FIELD,
        name: {
          kind: Ke.NAME,
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
}, sr = /* @__PURE__ */ new Map(), ya = (e) => {
  var t = Dr(e), i = sr.get(t.__key);
  return i || (sr.set(t.__key, i = fi(t)), Object.defineProperty(i, "__key", {
    value: t.__key,
    enumerable: !1
  })), i;
}, pi = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((n) => pi(n));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var i = {};
    for (var r in e)
      r === "__typename" ? Object.defineProperty(i, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : i[r] = pi(e[r]);
    return i;
  } else
    return e;
};
function ur(e) {
  var t = (i) => e(i);
  return t.toPromise = () => ea(Nr(1)(te((i) => !i.stale && !i.hasNext)(t))), t.then = (i, r) => t.toPromise().then(i, r), t.subscribe = (i) => $e(i)(t), t;
}
function Xe(e, t, i) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...i
    } : i || t.context
  };
}
var lr = (e, t) => Xe(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), ha = () => {
}, Ht = ({ kind: e }) => e !== "mutation" && e !== "query", ma = ({ forward: e, client: t, dispatchDebug: i }) => {
  var r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = (s) => {
    var l = Xe(s.kind, s);
    return l.query = ya(s.query), l;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || r.has(s.key));
  return (s) => {
    var l = ft((c) => {
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
        operation: process.env.NODE_ENV !== "production" ? lr(c, {
          cacheOutcome: p ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (f.stale = !0, cr(t, c)), f;
    })(te((c) => !Ht(c) && o(c))(s)), d = He((c) => {
      var { operation: p } = c;
      if (p) {
        var f = p.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (f = ((v) => [...di(v, /* @__PURE__ */ new Set())])(c.data).concat(f)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
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
            var S = f[g], x = n.get(S);
            x || n.set(S, x = /* @__PURE__ */ new Set());
            for (var q of x.values())
              m.add(q);
            x.clear();
          }
          for (var w of m.values())
            r.has(w) && (p = r.get(w).operation, r.delete(w), cr(t, p));
        } else if (p.kind === "query" && c.data) {
          r.set(p.key, c);
          for (var U = 0; U < f.length; U++) {
            var h = f[U], P = n.get(h);
            P || n.set(h, P = /* @__PURE__ */ new Set()), P.add(p.key);
          }
        }
      }
    })(e(te((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(ft((c) => process.env.NODE_ENV !== "production" ? lr(c, {
      cacheOutcome: "miss"
    }) : c)(Ye([ft(a)(te((c) => !Ht(c) && !o(c))(s)), te((c) => Ht(c))(s)])))));
    return Ye([l, d]);
  };
}, cr = (e, t) => e.reexecuteOperation(Xe(t.kind, t, {
  requestPolicy: "network-only"
})), dr = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: i }) => ({ client: r, forward: n }) => {
  var a = i || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = mt((d) => {
      var { key: c } = d, p = te((f) => f.kind === "teardown" && f.key === c)(o);
      return Oi(p)(((f) => {
        var m = e(qr(f), f);
        return Ii(({ next: g, complete: S }) => {
          var x = !1, q, w;
          return Promise.resolve().then(() => {
            x || (q = m.subscribe({
              next(U) {
                g(w = w ? ci(w, U) : ui(f, U));
              },
              error(U) {
                g(Vr(f, U));
              },
              complete() {
                x || (x = !0, f.kind === "subscription" && r.reexecuteOperation(Xe("teardown", f, f.context)), w && w.hasNext && g(ci(w, {
                  hasNext: !1
                })), S());
              }
            }));
          }), () => {
            x = !0, q && q.unsubscribe();
          };
        });
      })(d));
    })(te((d) => d.kind !== "teardown" && a(d))(o)), l = n(te((d) => d.kind === "teardown" || !a(d))(o));
    return Ye([s, l]);
  };
}, ga = ({ forward: e, dispatchDebug: t }) => (i) => {
  var r = mt((a) => {
    var o = qr(a), s = oa(a, o), l = ua(a, o);
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
    var d = Oi(te((c) => c.kind === "teardown" && c.key === a.key)(i))(pa(a, s, l));
    return process.env.NODE_ENV !== "production" ? He((c) => {
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
  })(te((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(i)), n = e(te((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(i));
  return Ye([r, n]);
}, ba = (e) => ({ client: t, forward: i, dispatchDebug: r }) => e.reduceRight((n, a) => {
  var o = !1;
  return a({
    client: t,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return gt(n(gt(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && r({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, i), Rr = ({ onOperation: e, onResult: t, onError: i }) => ({ forward: r }) => (n) => mt((a) => {
  i && a.error && i(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? Xi(o) : pt(o);
})(r(mt((a) => {
  var o = e && e(a) || a;
  return "then" in o ? Xi(o) : pt(o);
})(n))), va = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = He((i) => {
  if (i.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var r = `No exchange has handled operations of kind "${i.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: r,
      operation: i,
      source: "fallbackExchange"
    }), console.warn(r);
  }
})(t)), te((i) => !1)(t)), fr = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var i = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = Zi();
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
    var P = Oi(te((v) => v.kind === "teardown" && v.key === h.key)(l.source))(te((v) => v.operation.kind === h.kind && v.operation.key === h.key && (!v.operation.context._instance || v.operation.context._instance === h.context._instance))(U));
    return h.kind !== "query" ? P = xr((v) => !!v.hasNext, !0)(P) : P = Hi((v) => {
      var G = pt(v);
      return v.stale || v.hasNext ? G : Ye([G, ft(() => (v.stale = !0, v))(Nr(1)(te((Ne) => Ne.key === h.key)(l.source)))]);
    })(P), h.kind !== "mutation" ? P = wi(() => {
      a.delete(h.key), r.delete(h.key), n.delete(h.key), c = !1;
      for (var v = o.length - 1; v >= 0; v--)
        o[v].key === h.key && o.splice(v, 1);
      d(Xe("teardown", h, h.context));
    })(He((v) => {
      if (v.stale) {
        for (var G of o)
          if (G.key === v.operation.key) {
            a.delete(G.key);
            break;
          }
      } else
        v.hasNext || a.delete(h.key);
      r.set(h.key, v);
    })(P)) : P = Yi(() => {
      d(h);
    })(P), t.maskTypename && (P = ft((v) => ({
      ...v,
      data: pi(v.data, !0)
    }))(P)), gt(P);
  }, m = this instanceof e ? this : Object.create(e.prototype), g = Object.assign(m, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(h) {
      h.kind === "teardown" ? p(h) : (h.kind === "mutation" || n.has(h.key)) && (o.push(h), Promise.resolve().then(p));
    },
    createRequestOperation(h, P, v) {
      v || (v = {});
      var G;
      if (process.env.NODE_ENV !== "production" && h !== "teardown" && (G = aa(P.query)) !== h)
        throw new Error(`Expected operation of type "${h}" but found "${G}"`);
      return Xe(h, P, {
        _instance: h === "mutation" ? i = i + 1 | 0 : void 0,
        ...s,
        ...v,
        requestPolicy: v.requestPolicy || s.requestPolicy,
        suspense: v.suspense || v.suspense !== !1 && g.suspense
      });
    },
    executeRequestOperation(h) {
      return h.kind === "mutation" ? ur(f(h)) : ur(Yn(() => {
        var P = n.get(h.key);
        P || n.set(h.key, P = f(h)), P = Yi(() => {
          p(h);
        })(P);
        var v = r.get(h.key);
        return h.kind === "query" && v && (v.stale || v.hasNext) ? Hi(pt)(Ye([P, te((G) => G === r.get(h.key))(pt(v))])) : P;
      }));
    },
    executeQuery(h, P) {
      var v = g.createRequestOperation("query", h, P);
      return g.executeRequestOperation(v);
    },
    executeSubscription(h, P) {
      var v = g.createRequestOperation("subscription", h, P);
      return g.executeRequestOperation(v);
    },
    executeMutation(h, P) {
      var v = g.createRequestOperation("mutation", h, P);
      return g.executeRequestOperation(v);
    },
    readQuery(h, P, v) {
      var G = null;
      return $e((Ne) => {
        G = Ne;
      })(g.query(h, P, v)).unsubscribe(), G;
    },
    query: (h, P, v) => g.executeQuery(xt(h, P), v),
    subscription: (h, P, v) => g.executeSubscription(xt(h, P), v),
    mutation: (h, P, v) => g.executeMutation(xt(h, P), v)
  }), S = ha;
  if (process.env.NODE_ENV !== "production") {
    var { next: x, source: q } = Zi();
    g.subscribeToDebugTarget = (h) => $e(h)(q), S = x;
  }
  var w = ba(t.exchanges), U = gt(w({
    client: g,
    dispatchDebug: S,
    forward: va({
      dispatchDebug: S
    })
  })(l.source));
  return Xn(U), g;
};
function ue(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Fe(e) {
  return ue(e) === "object";
}
function Sa(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function pr(e, t) {
  return e.length < 124 ? e : t;
}
const wa = "graphql-transport-ws";
var se;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(se || (se = {}));
var W;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(W || (W = {}));
function $r(e) {
  if (!Fe(e))
    throw new Error(`Message is expected to be an object, but got ${ue(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${ue(e.type)}`);
  switch (e.type) {
    case W.ConnectionInit:
    case W.ConnectionAck:
    case W.Ping:
    case W.Pong: {
      if (e.payload != null && !Fe(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case W.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ue(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Fe(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ue(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${ue(e.payload.query)}`);
      if (e.payload.variables != null && !Fe(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${ue(e.payload.variables)}`);
      if (e.payload.operationName != null && ue(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${ue(e.payload.operationName)}`);
      if (e.payload.extensions != null && !Fe(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${ue(e.payload.extensions)}`);
      break;
    }
    case W.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ue(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Fe(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ue(e.payload)}`);
      break;
    }
    case W.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ue(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Sa(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case W.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ue(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Oa(e, t) {
  return $r(typeof e == "string" ? JSON.parse(e, t) : e);
}
function lt(e, t) {
  return $r(e), JSON.stringify(e, t);
}
function Ia(e) {
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
    retryWait: c = async function(R) {
      let F = 1e3;
      for (let j = 0; j < R; j++)
        F *= 2;
      await new Promise((j) => setTimeout(j, F + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: p = jt,
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
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (R) => {
        const F = Math.random() * 16 | 0;
        return (R == "x" ? F : F & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: x,
    jsonMessageReviver: q
  } = e;
  let w;
  if (g) {
    if (!Ta(g))
      throw new Error("Invalid WebSocket implementation provided");
    w = g;
  } else
    typeof WebSocket < "u" ? w = WebSocket : typeof global < "u" ? w = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (w = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!w)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const U = w, h = (() => {
    const T = (() => {
      const F = {};
      return {
        on(j, M) {
          return F[j] = M, () => {
            delete F[j];
          };
        },
        emit(j) {
          var M;
          "id" in j && ((M = F[j.id]) === null || M === void 0 || M.call(F, j));
        }
      };
    })(), R = {
      connecting: m != null && m.connecting ? [m.connecting] : [],
      opened: m != null && m.opened ? [m.opened] : [],
      connected: m != null && m.connected ? [m.connected] : [],
      ping: m != null && m.ping ? [m.ping] : [],
      pong: m != null && m.pong ? [m.pong] : [],
      message: m != null && m.message ? [T.emit, m.message] : [T.emit],
      closed: m != null && m.closed ? [m.closed] : [],
      error: m != null && m.error ? [m.error] : []
    };
    return {
      onMessage: T.on,
      on(F, j) {
        const M = R[F];
        return M.push(j), () => {
          M.splice(M.indexOf(j), 1);
        };
      },
      emit(F, ...j) {
        for (const M of [...R[F]])
          M(...j);
      }
    };
  })();
  function P(T) {
    const R = [
      // errors are fatal and more critical than close events, throw them first
      h.on("error", (F) => {
        R.forEach((j) => j()), T(F);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      h.on("closed", (F) => {
        R.forEach((j) => j()), T(F);
      })
    ];
  }
  let v, G = 0, Ne, Me = !1, Ue = 0, Ot = !1;
  async function at() {
    clearTimeout(Ne);
    const [T, R] = await (v ?? (v = new Promise((M, Pe) => (async () => {
      if (Me) {
        if (await c(Ue), !G)
          return v = void 0, Pe({ code: 1e3, reason: "All Subscriptions Gone" });
        Ue++;
      }
      h.emit("connecting");
      const D = new U(typeof t == "function" ? await t() : t, wa);
      let ke, xe;
      function De() {
        isFinite(o) && o > 0 && (clearTimeout(xe), xe = setTimeout(() => {
          D.readyState === U.OPEN && (D.send(lt({ type: W.Ping })), h.emit("ping", !1, void 0));
        }, o));
      }
      P((J) => {
        v = void 0, clearTimeout(ke), clearTimeout(xe), Pe(J), jt(J) && J.code === 4499 && (D.close(4499, "Terminated"), D.onerror = null, D.onclose = null);
      }), D.onerror = (J) => h.emit("error", J), D.onclose = (J) => h.emit("closed", J), D.onopen = async () => {
        try {
          h.emit("opened", D);
          const J = typeof i == "function" ? await i() : i;
          if (D.readyState !== U.OPEN)
            return;
          D.send(lt(J ? {
            type: W.ConnectionInit,
            payload: J
          } : {
            type: W.ConnectionInit
            // payload is completely absent if not provided
          }, x)), isFinite(l) && l > 0 && (ke = setTimeout(() => {
            D.close(se.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), De();
        } catch (J) {
          h.emit("error", J), D.close(se.InternalClientError, pr(J instanceof Error ? J.message : new Error(J).message, "Internal client error"));
        }
      };
      let Ce = !1;
      D.onmessage = ({ data: J }) => {
        try {
          const L = Oa(J, q);
          if (h.emit("message", L), L.type === "ping" || L.type === "pong") {
            h.emit(L.type, !0, L.payload), L.type === "pong" ? De() : s || (D.send(lt(L.payload ? {
              type: W.Pong,
              payload: L.payload
            } : {
              type: W.Pong
              // payload is completely absent if not provided
            })), h.emit("pong", !1, L.payload));
            return;
          }
          if (Ce)
            return;
          if (L.type !== W.ConnectionAck)
            throw new Error(`First message cannot be of type ${L.type}`);
          clearTimeout(ke), Ce = !0, h.emit("connected", D, L.payload), Me = !1, Ue = 0, M([
            D,
            new Promise((It, Ge) => P(Ge))
          ]);
        } catch (L) {
          D.onmessage = null, h.emit("error", L), D.close(se.BadResponse, pr(L instanceof Error ? L.message : new Error(L).message, "Bad response"));
        }
      };
    })())));
    T.readyState === U.CLOSING && await R;
    let F = () => {
    };
    const j = new Promise((M) => F = M);
    return [
      T,
      F,
      Promise.race([
        // wait for
        j.then(() => {
          if (!G) {
            const M = () => T.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? Ne = setTimeout(() => {
              T.readyState === U.OPEN && M();
            }, a) : M();
          }
        }),
        // or
        R
      ])
    ];
  }
  function be(T) {
    if (jt(T) && (Pa(T.code) || [
      se.InternalServerError,
      se.InternalClientError,
      se.BadRequest,
      se.BadResponse,
      se.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      se.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      se.SubscriberAlreadyExists,
      se.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(T.code)))
      throw T;
    if (Ot)
      return !1;
    if (jt(T) && T.code === 1e3)
      return G > 0;
    if (!d || Ue >= d || !p(T) || f != null && f(T))
      throw T;
    return Me = !0;
  }
  return r || (async () => {
    for (G++; ; )
      try {
        const [, , T] = await at();
        await T;
      } catch (T) {
        try {
          if (!be(T))
            return;
        } catch (R) {
          return n == null ? void 0 : n(R);
        }
      }
  })(), {
    on: h.on,
    subscribe(T, R) {
      const F = S(T);
      let j = !1, M = !1, Pe = () => {
        G--, j = !0;
      };
      return (async () => {
        for (G++; ; )
          try {
            const [D, ke, xe] = await at();
            if (j)
              return ke();
            const De = h.onMessage(F, (Ce) => {
              switch (Ce.type) {
                case W.Next: {
                  R.next(Ce.payload);
                  return;
                }
                case W.Error: {
                  M = !0, j = !0, R.error(Ce.payload), Pe();
                  return;
                }
                case W.Complete: {
                  j = !0, Pe();
                  return;
                }
              }
            });
            D.send(lt({
              id: F,
              type: W.Subscribe,
              payload: T
            }, x)), Pe = () => {
              !j && D.readyState === U.OPEN && D.send(lt({
                id: F,
                type: W.Complete
              }, x)), G--, j = !0, ke();
            }, await xe.finally(De);
            return;
          } catch (D) {
            if (!be(D))
              return;
          }
      })().then(() => {
        M || R.complete();
      }).catch((D) => {
        R.error(D);
      }), () => {
        j || Pe();
      };
    },
    async dispose() {
      if (Ot = !0, v) {
        const [T] = await v;
        T.close(1e3, "Normal Closure");
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
function jt(e) {
  return Fe(e) && "code" in e && "reason" in e;
}
function Pa(e) {
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
function Ta(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
function Ea(e) {
  return typeof e == "object" && e !== null;
}
function Aa(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const ka = /\r\n|[\n\r]/g;
function yi(e, t) {
  let i = 0, r = 1;
  for (const n of e.body.matchAll(ka)) {
    if (typeof n.index == "number" || Aa(!1), n.index >= t)
      break;
    i = n.index + n[0].length, r += 1;
  }
  return {
    line: r,
    column: t + 1 - i
  };
}
function ja(e) {
  return Mr(
    e.source,
    yi(e.source, e.start)
  );
}
function Mr(e, t) {
  const i = e.locationOffset.column - 1, r = "".padStart(i) + e.body, n = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? i : 0, l = t.column + s, d = `${e.name}:${o}:${l}
`, c = r.split(/\r\n|[\n\r]/g), p = c[n];
  if (p.length > 120) {
    const f = Math.floor(l / 80), m = l % 80, g = [];
    for (let S = 0; S < p.length; S += 80)
      g.push(p.slice(S, S + 80));
    return d + yr([
      [`${o} |`, g[0]],
      ...g.slice(1, f + 1).map((S) => ["|", S]),
      ["|", "^".padStart(m)],
      ["|", g[f + 1]]
    ]);
  }
  return d + yr([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, c[n - 1]],
    [`${o} |`, p],
    ["|", "^".padStart(l)],
    [`${o + 1} |`, c[n + 1]]
  ]);
}
function yr(e) {
  const t = e.filter(([r, n]) => n !== void 0), i = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, n]) => r.padStart(i) + (n ? " " + n : "")).join(`
`);
}
function _a(e) {
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
class Rt extends Error {
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
    const { nodes: o, source: s, positions: l, path: d, originalError: c, extensions: p } = _a(i);
    super(t), this.name = "GraphQLError", this.path = d ?? void 0, this.originalError = c ?? void 0, this.nodes = hr(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const f = hr(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((g) => g.loc).filter((g) => g != null)
    );
    this.source = s ?? (f == null || (n = f[0]) === null || n === void 0 ? void 0 : n.source), this.positions = l ?? (f == null ? void 0 : f.map((g) => g.start)), this.locations = l && s ? l.map((g) => yi(s, g)) : f == null ? void 0 : f.map((g) => yi(g.source, g.start));
    const m = Ea(
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Rt) : Object.defineProperty(this, "stack", {
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

` + ja(i.loc));
    else if (this.source && this.locations)
      for (const i of this.locations)
        t += `

` + Mr(this.source, i);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function hr(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
var We = null;
typeof WebSocket < "u" ? We = WebSocket : typeof MozWebSocket < "u" ? We = MozWebSocket : typeof global < "u" ? We = global.WebSocket || global.MozWebSocket : typeof window < "u" ? We = window.WebSocket || window.MozWebSocket : typeof self < "u" && (We = self.WebSocket || self.MozWebSocket);
const Na = We;
function he(e) {
  if (typeof e != "object")
    return e;
  var t, i, r = Object.prototype.toString.call(e);
  if (r === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      i = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && i[t] !== e[t] && (i[t] = he(e[t]));
    } else {
      i = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(i, t, {
          value: he(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : i[t] = he(e[t]);
    }
    return i;
  }
  if (r === "[object Array]") {
    for (t = e.length, i = Array(t); t--; )
      i[t] = he(e[t]);
    return i;
  }
  return r === "[object Set]" ? (i = /* @__PURE__ */ new Set(), e.forEach(function(n) {
    i.add(he(n));
  }), i) : r === "[object Map]" ? (i = /* @__PURE__ */ new Map(), e.forEach(function(n, a) {
    i.set(he(a), he(n));
  }), i) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (i = new RegExp(e.source, e.flags), i.lastIndex = e.lastIndex, i) : r === "[object DataView]" ? new e.constructor(he(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var oe;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(oe || (oe = {}));
class xa {
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
    }), this.__gadget.instantiatedFields = he(t), this.__gadget.persistedFields = he(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((r) => this.__gadget.fieldKeysTracker[r] = !0));
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
  hasChanges(t = oe.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const i = t == oe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((r) => !_t(i[r], this.__gadget.fields[r]));
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
  changes(t, i = oe.SinceLoaded) {
    const n = (typeof t == "string" ? i : t || i) == oe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = n[t], o = this.__gadget.fields[t], s = !_t(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const s = this.__gadget.fieldKeys[o];
        _t(n[s], this.__gadget.fields[s]) || (a[s] = { current: this.__gadget.fields[s], previous: n[s] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = oe.SinceLoaded) {
    const i = t == oe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, r = {};
    for (let n = 0; n < this.__gadget.fieldKeys.length; n++) {
      const a = this.__gadget.fieldKeys[n];
      _t(i[a], this.__gadget.fields[a]) || (r[a] = this.__gadget.fields[a]);
    }
    return r;
  }
  changed(t, i = oe.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, i).changed : this.hasChanges(t === void 0 ? i : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = oe.SinceLoaded) {
    t == oe.SinceLoaded ? this.__gadget.instantiatedFields = he(this.__gadget.fields) : t == oe.SinceLastPersisted && (this.__gadget.persistedFields = he(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = oe.SinceLoaded) {
    let i;
    t == oe.SinceLoaded ? i = Object.keys(this.__gadget.instantiatedFields) : i = Object.keys(this.__gadget.persistedFields);
    for (const r of this.__gadget.fieldKeys)
      i.includes(r) || delete this.__gadget.fields[r];
    t == oe.SinceLoaded ? Object.assign(this.__gadget.fields, he(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, he(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return gi({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const Ur = xa;
class Gr extends Error {
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
class hi extends Error {
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
class Ut extends Error {
  constructor(t, i) {
    super(t.startsWith("GGT_") ? t : `${i}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: i
    });
  }
}
class mr extends Error {
  constructor(t) {
    let i;
    mi(t) ? i = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : i = "GraphQL websocket closed unexpectedly by the server", super(i), Object.defineProperty(this, "code", {
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
class Ca extends Error {
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
class Da extends Error {
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
class Br extends Error {
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
class Lr extends Error {
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
class Fa extends Error {
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
function gr(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const et = (e, t) => {
  const i = t.length;
  let r = 0;
  for (; e != null && r < i; )
    e = e[t[r++]];
  return r && r == i ? e : void 0;
}, mi = (e) => (e == null ? void 0 : e.type) == "close", Ae = (e, t) => typeof e != "string" ? "" : Gt(e, t), br = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Gt = (e, t = !0) => {
  let i = "" + e;
  return t ? i = i.replace(/^[a-z\d]*/, (r) => br(r)) : i = i.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (r) => r.toLowerCase()), i = i.replace(/(?:_|(\/))([a-z\d]*)/gi, (r, n, a, o, s) => (n || (n = ""), "" + n + br(a))), i;
}, Va = (e) => `${Gt(e)}Sort`, qa = (e) => `${Gt(e)}Filter`, Ra = (e, t, i) => new Br(`More than one record found for ${e}.${t} = ${i}. Please confirm your unique validation is not reporting an error.`), $a = (e, t) => {
  if (e.fetching)
    return;
  const i = et(e.data, t);
  if (i === void 0)
    return new Gr(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null)
    return new Lr(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, _e = (e, t, i = !1) => {
  var r;
  if (e.error)
    throw e.error instanceof St && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const n = et(e.data, t), a = et(n, ["edges"]), o = a ?? n;
  if (n === void 0)
    throw new Gr(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (n === null || i && Array.isArray(o) && o.length === 0)
    throw new Lr(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return n;
}, yt = (e, t) => {
  var i;
  if (e.error)
    throw e.error instanceof St && (!((i = e.error.networkError) === null || i === void 0) && i.length) && (e.error.message = e.error.networkError.map((n) => "[Network] " + n.message).join(`
`)), e.error;
  const r = et(e.data, t);
  return r ?? null;
}, Ti = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Da(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Br(e.message) : new Ut(e.message, e.code);
}, Ve = (e, t) => {
  const i = _e(e, t);
  if (!i.success) {
    const r = i.errors && i.errors[0];
    throw r ? Ti(r) : new Ut("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return i;
}, zr = (e) => {
  var t, i, r, n;
  if (!((i = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || i === void 0) && i.hydrations)
    return new jn((n = (r = e.data) === null || r === void 0 ? void 0 : r.gadgetMeta) === null || n === void 0 ? void 0 : n.hydrations);
}, ht = (e, t) => {
  const i = zr(e);
  return i && (t = i.apply(t)), new Ur(t);
}, Ei = (e, t) => {
  const i = zr(e);
  return i && (t = i.apply(t)), t == null ? void 0 : t.map((r) => new Ur(r));
}, bt = (e, t) => {
  const i = t.edges.map((r) => r.node);
  return Ei(e, i);
}, gi = (e) => {
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
          t[i] = r === void 0 ? null : gi(r);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const i of Object.keys(e)) {
          const r = gi(e[i]);
          r !== void 0 && (t[i] = r);
        }
        return t;
      }
    }
  }
}, Zt = "gstk", vr = (e) => {
  try {
    const t = window[e];
    return t.setItem(Zt, Zt), t.removeItem(Zt), !0;
  } catch {
    return !1;
  }
}, Sr = Object.prototype.toString, wr = Object.getPrototypeOf, Or = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, ct = (e, t, i) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (i.indexOf(e) > -1 && i.indexOf(t) > -1)
    return !0;
  const r = Sr.call(e), n = Sr.call(t);
  let a, o, s;
  if (i.push(e, t), r != n || (a = Or(e), o = Or(t), a.length != o.length || a.some(function(l) {
    return !ct(e[l], t[l], i);
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
        if (s = a.next(), !ct(s.value, o.next().value, i))
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
        if (!(!(s in e) && !(s in t)) && (s in e != s in t || !ct(e[s], t[s], i)))
          return !1;
      return !0;
    case "Object":
      return ct(wr(e), wr(t), i);
    default:
      return !1;
  }
}, _t = (e, t) => ct(e, t, []);
class Wr extends Error {
}
class Ma {
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
    throw _e(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Wr("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    _e(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    _e(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Ua {
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
const Ga = (e) => {
  const t = [...e.definitions].reverse().find((i) => i.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((r) => r.kind == "Field").name.value;
}, Ir = Rr({
  onOperation: (e) => {
    var t, i;
    (t = (i = e.context).operationName) !== null && t !== void 0 || (i.operationName = Ga(e.query) || "unknown");
  }
}), Ba = Rr({
  onOperation: (e) => {
    e.context.url && e.context.operationName && !e.context.url.includes("?") && (e.context.url += `?operation=${e.context.operationName}`);
  }
}), La = 2, za = 4800, Wa = 1e4, Ka = [se.ConnectionAcknowledgementTimeout, se.ConnectionInitialisationTimeout], Pr = Symbol.for("gadget/connection"), Qa = "token", Ja = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var Y;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(Y || (Y = {}));
class Kr {
  constructor(t) {
    var i, r, n, a, o;
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
      value: Y.Anonymous
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
            connectionAckWaitTimeout: za,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const m = new fr({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              Ir,
              ...this.exchanges.beforeAsync,
              dr({
                forwardSubscription(S) {
                  const x = { ...S, query: S.query || "" };
                  return {
                    subscribe: (q) => ({
                      unsubscribe: p.subscribe(x, q)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          m[Pr] = this, f = new Ma(m, p), this.currentTransaction = f, await f.start();
          const g = await d(f);
          return await f.commit(), g;
        } catch (m) {
          try {
            f != null && f.open && await f.rollback();
          } catch (g) {
            g instanceof Wr || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", g);
          }
          throw mi(m) ? new mr(m) : m;
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
        s = Ya(s, (d = this.options.baseRouteURL) !== null && d !== void 0 ? d : this.options.endpoint), this.isGadgetRequest(s) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == Y.Custom && await this.options.authenticationMode.custom.processFetch(s, l));
        const c = await this._fetchImplementation(s, l);
        if (this.authenticationMode == Y.BrowserSession) {
          const p = c.headers.get("x-set-authorization"), f = p != null && p.startsWith("Session ") ? p.replace("Session ", "") : null;
          f && this.sessionTokenStore.setItem(this.sessionStorageKey, f);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...s) => {
      const { fetch: l } = await import("./browser-ponyfill-1743728e.js").then((d) => d.b);
      return await l(...s);
    }, this.websocketImplementation = (r = (i = t.websocketImplementation) !== null && i !== void 0 ? i : globalThis == null ? void 0 : globalThis.WebSocket) !== null && r !== void 0 ? r : Na, this.websocketsEndpoint = (n = t.websocketsEndpoint) !== null && n !== void 0 ? n : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Qa}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = Y.InternalAuthToken : t.apiKey ? this.authenticationMode = Y.APIKey : t.custom && (this.authenticationMode = Y.Custom), this.options.authenticationMode = t), (i = this.authenticationMode) !== null && i !== void 0 || (this.authenticationMode = Y.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = Y.BrowserSession;
    const i = !t || typeof t == "boolean" ? dt.Durable : t.storageType;
    let r;
    i == dt.Durable && vr("localStorage") ? r = window.localStorage : i == dt.Session && vr("sessionStorage") ? r = window.sessionStorage : r = new Ua(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && r.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = r, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let i;
    if (typeof t == "string" ? i = t : typeof t == "object" && "url" in t ? i = t.url : i = String(t), bi(this.options.endpoint))
      return !!bi(i);
    const r = new URL(this.options.endpoint).host;
    return i.includes(r);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Ir, Ba];
    typeof window < "u" && t.push(ma), t.push(...this.exchanges.beforeAsync, ga, dr({
      forwardSubscription: (r) => ({
        subscribe: (n) => {
          const a = { ...r, query: r.query || "" };
          return {
            unsubscribe: this.getBaseSubscriptionClient().subscribe(a, n)
          };
        }
      })
    }), ...this.exchanges.afterAll);
    const i = new fr({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return i[Pr] = this, i;
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
    return Ia({
      url: i,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var r, n;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == Y.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == Y.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == Y.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == Y.Custom && await ((n = (r = this.options.authenticationMode) === null || r === void 0 ? void 0 : r.custom) === null || n === void 0 ? void 0 : n.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (r, n) => {
          var a, o, s, l, d, c;
          if (this.authenticationMode == Y.BrowserSession && (n != null && n.sessionToken)) {
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
    if (this.authenticationMode == Y.InternalAuthToken)
      i.authorization = "Basic " + Ja("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == Y.APIKey)
      i.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == Y.BrowserSession) {
      const r = this.sessionTokenStore.getItem(this.sessionStorageKey);
      r && (i.authorization = `Session ${r}`);
    }
    return i["x-gadget-environment"] = this.environment, i;
  }
  async waitForOpenedConnection(t) {
    let i = this.newSubscriptionClient(t), r = [], n = t.connectionAttempts || La;
    const a = t.connectionGlobalTimeoutMs || Wa, o = () => {
      r.forEach((s) => s()), r = [];
    };
    return await new Promise((s, l) => {
      const d = setTimeout(() => {
        this.disposeClient(i), p(new Ca("Timeout opening websocket connection to Gadget API"));
      }, a), c = (g) => {
        if (mi(g) && Ka.includes(g.code) && n > 0) {
          n -= 1, this.disposeClient(i), i = this.newSubscriptionClient(t), m();
          return;
        }
        clearTimeout(d), l(new mr(g));
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
Object.defineProperty(Kr, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.9"
});
function Ya(e, t) {
  if (typeof e != "string")
    return e;
  if (bi(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function bi(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class tt extends Array {
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
    const n = new tt();
    return n.push(...i), n.modelManager = t, n.pagination = r, Object.freeze(n), n;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Ut("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new hi("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new hi("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: i, last: r, after: n, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: r || i
    });
  }
}
const vi = (e) => Object.entries(e).flatMap(([t, i]) => {
  if (typeof i == "boolean")
    return i ? t : !1;
  if (i instanceof ki) {
    let r = "";
    const n = Object.entries(i.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof ji ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return n.length > 0 && (r = `(${n.join(", ")})`), i.subselection ? [`${t}${r} {`, ...vi(i.subselection), "}"] : `${t}${r}`;
  } else
    return [`${t} {`, ...vi(i), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Ai = (e) => {
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
    n instanceof ki ? Object.entries(n.args).forEach(([a, o]) => {
      var s;
      o instanceof ji && (t[(s = o.name) !== null && s !== void 0 ? s : i(a)] = o);
    }) : typeof n == "object" && n !== null && Object.assign(t, Ai(n));
  }), t;
}, Ha = (e) => {
  const t = Ai(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([r, n]) => `$${r}: ${n.type}`).join(", ")})`;
};
class ki {
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
class ji {
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
const it = (e, t) => new ki(e, t), ee = (e) => new ji(e.type + (e.required ? "!" : ""), e.name, e.value), Za = (e) => {
  var t;
  const i = Ha(e), r = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${i}${r} {
${vi(e.fields).join(`
`)}
}`;
}, rt = (e) => {
  const t = Ai(e.fields);
  return {
    query: Za(e),
    variables: Object.entries(t ?? {}).reduce((i, [r, n]) => (typeof n.value < "u" && (i[r] = n.value), i), {})
  };
}, wt = `
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
`, nt = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, Xa = (e) => `
    query InternalFind${Ae(e)}($id: GadgetID!, $select: [String!]) {
      ${nt(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, Qr = (e, t) => ({
  search: t != null && t.search ? ee({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? ee({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? ee({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? ee({ value: Jr(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), eo = (e, t) => {
  const i = Ae(e), r = Qr(i, t);
  return rt({
    type: "query",
    name: `InternalFindFirst${i}`,
    fields: {
      internal: {
        [`list${i}`]: it({
          ...r,
          first: ee({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, to = (e, t) => {
  const i = Ae(e), r = Qr(i, t);
  return rt({
    type: "query",
    name: `InternalFindMany${i}`,
    fields: {
      internal: {
        [`list${i}`]: it({
          ...r,
          after: ee({ value: t == null ? void 0 : t.after, type: "String" }),
          before: ee({ value: t == null ? void 0 : t.before, type: "String" }),
          first: ee({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: ee({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, io = (e) => {
  const t = Ae(e);
  return `
    ${wt}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${nt(e)}
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
}, ro = (e, t) => {
  const i = Ae(e), r = Ae(t);
  return `
    ${wt}

    mutation InternalBulkCreate${r}($records: [Internal${i}Input]!) {
      ${nt(e)}
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
}, no = (e) => {
  const t = Ae(e);
  return `
    ${wt}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${nt(e)}
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
}, ao = (e) => {
  const t = Ae(e);
  return `
    ${wt}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${nt(e)}
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
}, oo = (e) => {
  const t = Ae(e);
  return `
    ${wt}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${nt(e)}
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
class Oe {
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
    }), this.capitalizedApiIdentifier = Gt(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((r) => r === this.apiIdentifier);
  }
  getRecordFromData(t, i) {
    let r = t;
    if (!this.validateRecord(t))
      throw new Ut(`Invalid arguments found in variables. Did you mean to use ${i}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const n = await this.connection.currentClient.query(Xa(this.apiIdentifier), { id: t, select: Jr(i == null ? void 0 : i.select) }).toPromise(), o = (r ? _e : yt)(n, ["internal", this.apiIdentifier]);
    return ht(n, o);
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
    const i = to(this.apiIdentifier, t), r = await this.connection.currentClient.query(i.query, i.variables).toPromise(), n = yt(r, ["internal", `list${this.capitalizedApiIdentifier}`]), a = bt(r, n);
    return tt.boot(this, a, { options: t, pageInfo: n.pageInfo });
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
    const r = eo(this.apiIdentifier, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise();
    let a;
    i === !1 ? a = yt(n, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = _e(n, ["internal", `list${this.capitalizedApiIdentifier}`], i);
    const o = bt(n, a);
    return tt.boot(this, o, { options: t, pageInfo: a.pageInfo })[0];
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
    const i = await this.connection.currentClient.mutation(io(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), r = Ve(i, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return ht(i, r[this.apiIdentifier]);
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
      throw new hi("Cannot perform bulkCreate without a pluralApiIdentifier");
    const r = Ae(this.options.pluralApiIdentifier), n = await this.connection.currentClient.mutation(ro(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = Ve(n, ["internal", `bulkCreate${r}`]);
    return Ei(n, a[this.options.pluralApiIdentifier]);
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
    gr(t, "Can't update a record without an ID passed");
    const r = await this.connection.currentClient.mutation(no(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(i, "update")
    }).toPromise(), n = Ve(r, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return ht(r, n[this.apiIdentifier]);
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
    gr(t, "Can't delete a record without an ID");
    const i = await this.connection.currentClient.mutation(ao(this.apiIdentifier), { id: t }).toPromise();
    Ve(i, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const i = await this.connection.currentClient.mutation(oo(this.apiIdentifier), t).toPromise();
    Ve(i, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function Jr(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [i, r] of Object.entries(e))
    r && t.push(i);
  return t;
}
const _i = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Ni = (e, t = !1) => {
  const i = { ...e };
  return t && (i.__typename = !0), i;
}, so = (e, t, i, r, n) => {
  const a = {};
  return typeof t < "u" && (a.id = ee({ type: "GadgetID!", value: t })), rt({
    type: "query",
    name: e,
    fields: {
      [e]: it(a, Ni((n == null ? void 0 : n.select) || i, !0)),
      ..._i(r)
    }
  });
}, uo = (e, t, i, r, n, a) => xi(e, r, n, {
  select: a == null ? void 0 : a.select,
  first: 2,
  filter: {
    [t]: {
      equals: i
    }
  }
}), xi = (e, t, i, r) => rt({
  type: "query",
  name: e,
  fields: {
    [e]: it({
      after: ee({ value: r == null ? void 0 : r.after, type: "String" }),
      first: ee({ value: r == null ? void 0 : r.first, type: "Int" }),
      before: ee({ value: r == null ? void 0 : r.before, type: "String" }),
      last: ee({ value: r == null ? void 0 : r.last, type: "Int" }),
      sort: r != null && r.sort ? ee({ value: r.sort, type: `[${Va(i)}!]` }) : void 0,
      filter: r != null && r.filter ? ee({ value: r.filter, type: `[${qa(i)}!]` }) : void 0,
      search: r != null && r.search ? ee({ value: r.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Ni((r == null ? void 0 : r.select) || t, !0)
      }
    }),
    ..._i(i)
  }
}), Yr = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Hr = (e) => Object.fromEntries(Object.entries(e).map(([t, i]) => [t, ee(i)])), lo = (e, t, i, r, n, a, o, s, l) => {
  const d = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: it(Hr(n), {
      success: !0,
      errors: Yr,
      [r]: d && !l ? Ni(d, !0) : !1,
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
      ..._i(i)
    }
  };
  return rt(p);
}, co = (e, t, i) => {
  let r = {
    [e]: it(Hr(t), {
      success: !0,
      errors: Yr,
      result: !0
    })
  };
  return i && (r = {
    [i]: r
  }), rt({
    type: "mutation",
    name: e,
    fields: r
  });
}, B = async (e, t, i, r, n, a, o = !0) => {
  const s = so(t, i, r, n, a), l = await e.connection.currentClient.query(s.query, s.variables).toPromise(), c = (o ? _e : yt)(l, [t]);
  return ht(l, c);
}, Bt = async (e, t, i, r, n, a, o) => {
  const s = uo(t, i, r, n, a, o), l = await e.connection.currentClient.query(s.query, s.variables).toPromise(), d = _e(l, [t]), c = bt(l, d);
  if (c.length > 1)
    throw Ra(a, i, r);
  return c[0];
}, N = async (e, t, i, r, n, a) => {
  const o = xi(t, i, r, n), s = await e.connection.currentClient.query(o.query, o.variables).toPromise();
  let l;
  a === !1 ? l = yt(s, [t]) : l = _e(s, [t], a);
  const d = bt(s, l);
  return tt.boot(e, d, { options: n, pageInfo: l.pageInfo });
}, I = async (e, t, i, r, n, a, o, s, l, d) => {
  const c = lo(t, i, r, n, o, s, l, a, d), p = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), f = l ? [l, t] : [t];
  if (a) {
    const m = et(p.data, f), g = m[n] && i ? Ei(p, m[n]) : void 0;
    if (m.errors) {
      const S = m.errors.map((x) => Ti(x));
      throw new Fa(S, g);
    }
    return g;
  } else {
    const m = Ve(p, f);
    return i == null ? void 0 : d ? m.result : ht(p, m[n]);
  }
}, fo = async (e, t, i, r) => {
  const n = co(t, i, r), a = await e.currentClient.mutation(n.query, n.variables).toPromise();
  return Ve(a, r ? [r, t] : [t]).result;
}, H = {
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
async function po(e, t) {
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
async function yo(e, t, i) {
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
    H,
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
async function ho(e, t) {
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
    H,
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
async function mo(e, t) {
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
    H,
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
class go {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await B(
        this,
        "user",
        i,
        H,
        "user",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: H,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await B(
          this,
          "user",
          i,
          H,
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
        defaultSelection: H,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await N(
        this,
        "users",
        H,
        "user",
        i
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: H,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await N(
        this,
        "users",
        H,
        "user",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: H,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await N(
          this,
          "users",
          H,
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
        defaultSelection: H,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findByEmail = Object.assign(
      async (i, r) => await Bt(
        this,
        "users",
        "email",
        i,
        H,
        "user",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: H,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      po,
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
      yo,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: H,
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
      ho,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: H,
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
      mo,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: H,
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
const le = {
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
async function bo(e) {
  return await I(
    this,
    "logOut",
    le,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function vo(e, t) {
  const i = e;
  return await I(
    this,
    "logInViaEmail",
    le,
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
class So {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await B(
        this,
        "session",
        i,
        le,
        "session",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await B(
          this,
          "session",
          i,
          le,
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
        defaultSelection: le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await N(
        this,
        "sessions",
        le,
        "session",
        i
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await N(
        this,
        "sessions",
        le,
        "session",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await N(
          this,
          "sessions",
          le,
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
        defaultSelection: le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      bo,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: le,
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
      vo,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: le,
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
const ce = {
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
async function wo(e, t) {
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
async function Oo(e, t) {
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
    ce,
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
async function Io(e, t, i) {
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
    ce,
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
class Po {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await B(
        this,
        "shopifyProduct",
        i,
        ce,
        "shopifyProduct",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await B(
          this,
          "shopifyProduct",
          i,
          ce,
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
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await N(
        this,
        "shopifyProducts",
        ce,
        "shopifyProduct",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await N(
        this,
        "shopifyProducts",
        ce,
        "shopifyProduct",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await N(
          this,
          "shopifyProducts",
          ce,
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
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      wo,
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
      Oo,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: ce,
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
      Io,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
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
const de = {
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
async function To(e, t) {
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
async function Eo(e, t) {
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
    de,
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
async function Ao(e, t, i) {
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
    de,
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
class ko {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await B(
        this,
        "shopifyProductImage",
        i,
        de,
        "shopifyProductImage",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: de,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await B(
          this,
          "shopifyProductImage",
          i,
          de,
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
        defaultSelection: de,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await N(
        this,
        "shopifyProductImages",
        de,
        "shopifyProductImage",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: de,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await N(
        this,
        "shopifyProductImages",
        de,
        "shopifyProductImage",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: de,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await N(
          this,
          "shopifyProductImages",
          de,
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
        defaultSelection: de,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      To,
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
      Eo,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: de,
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
      Ao,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
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
const fe = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  name: !0,
  position: !0,
  values: !0
};
async function jo(e, t) {
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
async function _o(e, t) {
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
    fe,
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
async function No(e, t, i) {
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
    fe,
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
class xo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await B(
        this,
        "shopifyProductOption",
        i,
        fe,
        "shopifyProductOption",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await B(
          this,
          "shopifyProductOption",
          i,
          fe,
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
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await N(
        this,
        "shopifyProductOptions",
        fe,
        "shopifyProductOption",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await N(
        this,
        "shopifyProductOptions",
        fe,
        "shopifyProductOption",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await N(
          this,
          "shopifyProductOptions",
          fe,
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
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      jo,
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
      _o,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: fe,
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
      No,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
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
const pe = {
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
async function Co(e, t) {
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
async function Do(e, t, i) {
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
    pe,
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
async function Fo(e, t) {
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
    pe,
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
class Vo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await B(
        this,
        "shopifyProductVariant",
        i,
        pe,
        "shopifyProductVariant",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await B(
          this,
          "shopifyProductVariant",
          i,
          pe,
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
        defaultSelection: pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await N(
        this,
        "shopifyProductVariants",
        pe,
        "shopifyProductVariant",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await N(
        this,
        "shopifyProductVariants",
        pe,
        "shopifyProductVariant",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await N(
          this,
          "shopifyProductVariants",
          pe,
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
        defaultSelection: pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Co,
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
      Do,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
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
      Fo,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: pe,
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
const X = {
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
async function qo(e, t) {
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
async function Ro(e, t) {
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
    X,
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
async function $o(e, t, i) {
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
    X,
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
async function Mo(e, t, i) {
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
    X,
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
async function Uo(e, t, i) {
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
    X,
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
class Go {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await B(
        this,
        "shopifyShop",
        i,
        X,
        "shopifyShop",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await B(
          this,
          "shopifyShop",
          i,
          X,
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
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await N(
        this,
        "shopifyShops",
        X,
        "shopifyShop",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await N(
        this,
        "shopifyShops",
        X,
        "shopifyShop",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await N(
          this,
          "shopifyShops",
          X,
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
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      qo,
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
      Ro,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: X,
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
      $o,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
      Mo,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
      Uo,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
const ye = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
};
async function Bo(e, t) {
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
async function Lo(e, t, i) {
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
    ye,
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
async function zo(e, t) {
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
    ye,
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
class Wo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await B(
        this,
        "productPairing",
        i,
        ye,
        "productPairing",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await B(
          this,
          "productPairing",
          i,
          ye,
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
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await N(
        this,
        "productPairings",
        ye,
        "productPairing",
        i
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await N(
        this,
        "productPairings",
        ye,
        "productPairing",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await N(
          this,
          "productPairings",
          ye,
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
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Bo,
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
      Lo,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
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
      zo,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: ye,
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
const Z = {
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
async function Ko(e, t) {
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
    Z,
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
async function Qo(e, t, i) {
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
    Z,
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
async function Jo(e, t, i) {
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
    Z,
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
class Yo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await B(
        this,
        "shopifySync",
        i,
        Z,
        "shopifySync",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await B(
          this,
          "shopifySync",
          i,
          Z,
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
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await N(
        this,
        "shopifySyncs",
        Z,
        "shopifySync",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await N(
        this,
        "shopifySyncs",
        Z,
        "shopifySync",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await N(
          this,
          "shopifySyncs",
          Z,
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
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (i, r) => await Bt(
        this,
        "shopifySyncs",
        "id",
        i,
        Z,
        "shopifySync",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.run = Object.assign(
      Ko,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: Z,
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
      Qo,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
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
      Jo,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
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
const re = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  ambiguous: !0,
  booleanField: !0
};
async function Ho(e, t, i) {
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
    re,
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
async function Zo(e, t) {
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
async function Xo(e, t) {
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
    re,
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
class es {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await B(
        this,
        "ambiguous",
        i,
        re,
        "ambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await B(
          this,
          "ambiguous",
          i,
          re,
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
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await N(
        this,
        "ambiguouss",
        re,
        "ambiguous",
        i
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await N(
        this,
        "ambiguouss",
        re,
        "ambiguous",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await N(
          this,
          "ambiguouss",
          re,
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
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (i, r) => await Bt(
        this,
        "ambiguouss",
        "id",
        i,
        re,
        "ambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      Ho,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
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
      Zo,
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
      Xo,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: re,
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
const ne = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  stringField: !0,
  numberField: !0
};
async function ts(e, t, i) {
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
    ne,
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
async function is(e, t) {
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
    ne,
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
async function rs(e, t) {
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
class ns {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, r) => await B(
        this,
        "unambiguous",
        i,
        ne,
        "unambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, r) => {
        const n = await B(
          this,
          "unambiguous",
          i,
          ne,
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
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await N(
        this,
        "unambiguouss",
        ne,
        "unambiguous",
        i
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await N(
        this,
        "unambiguouss",
        ne,
        "unambiguous",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const r = await N(
          this,
          "unambiguouss",
          ne,
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
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (i, r) => await Bt(
        this,
        "unambiguouss",
        "id",
        i,
        ne,
        "unambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      ts,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
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
      is,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: ne,
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
      rs,
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
const Qe = {
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
async function as(e) {
  return await I(
    this,
    "logOut",
    Qe,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function os(e, t) {
  const i = e;
  return await I(
    this,
    "logInViaEmail",
    Qe,
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
class ss {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (i) => await B(
        this,
        "currentSession",
        void 0,
        Qe,
        "session",
        i
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: Qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      as,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Qe,
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
      os,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Qe,
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
const Xt = "production", ei = "development", us = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
class ls {
  constructor(t) {
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async () => await fo(
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
    const i = (t == null ? void 0 : t.environment) ?? us() ?? ei;
    let r = i.toLocaleLowerCase();
    r != ei && r != Xt && (console.warn("Invalid environment", i, "defaulting to development"), r = ei), this.connection = new Kr({
      endpoint: new URL("api/graphql", r == Xt ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      environment: r == Xt ? "Production" : "Development"
    }), this.user = new go(this.connection), this.session = new So(this.connection), this.shopifyProduct = new Po(this.connection), this.shopifyProductImage = new ko(this.connection), this.shopifyProductOption = new xo(this.connection), this.shopifyProductVariant = new Vo(this.connection), this.shopifyShop = new Go(this.connection), this.productPairing = new Wo(this.connection), this.shopifySync = new Yo(this.connection), this.ambiguous = new es(this.connection), this.unambiguous = new ns(this.connection), this.currentSession = new ss(this.connection), this.internal = {
      user: new Oe("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new Oe("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new Oe("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new Oe("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new Oe("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new Oe("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new Oe("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new Oe("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new Oe("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new Oe("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new Oe("unambiguous", this.connection, {
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
var Zr = {}, Lt = Te.createContext(Zr);
Lt.Provider;
Lt.Consumer;
Lt.displayName = "UrqlContext";
var cs = () => {
  var e = Te.useContext(Lt);
  if (e === Zr && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, ds = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, fs = (e, t) => e === t || !(!e || !t || e.key !== t.key), ti = (e, t) => {
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
      if (o === "operation" ? !fs(r[o], n[o]) : r[o] !== n[o])
        return !0;
    return !1;
  })(e, i) ? i : e;
}, ps = (e, t) => {
  for (var i = 0, r = t.length; i < r; i++)
    if (e[i] !== t[i])
      return !0;
  return !1;
}, ii = Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Tr(e, t) {
  process.env.NODE_ENV !== "production" && ii && ii.ReactCurrentOwner && ii.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function ys(e, t) {
  var i = Te.useRef(void 0);
  return Te.useMemo(() => {
    var r = xt(e, t);
    return i.current !== void 0 && i.current.key === r.key ? i.current : (i.current = r, r);
  }, [e, t]);
}
var hs = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
    e.operations$ && $e((r) => {
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
}, ms = (e, t) => e.suspense && (!t || t.suspense !== !1);
function gs(e) {
  var t = cs(), i = hs(t), r = ms(t, e.context), n = ys(e.query, e.variables), a = Te.useMemo(() => {
    if (e.pause)
      return null;
    var f = t.executeQuery(n, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return r ? He((m) => {
      i.set(n.key, m);
    })(f) : f;
  }, [i, t, n, r, e.pause, e.requestPolicy, e.context]), o = Te.useCallback((f, m) => {
    if (!f)
      return {
        fetching: !1
      };
    var g = i.get(n.key);
    if (g) {
      if (m && g != null && "then" in g)
        throw g;
    } else {
      var S, x = $e((w) => {
        g = w, S && S(g);
      })(xr(() => m && !S || !g)(f));
      if (g == null && m) {
        var q = new Promise((w) => {
          S = w;
        });
        throw i.set(n.key, q), q;
      } else
        x.unsubscribe();
    }
    return g || {
      fetching: !0
    };
  }, [i, n]), s = [t, n, e.requestPolicy, e.context, e.pause], [l, d] = Te.useState(() => [a, ti(ds, o(a, r)), s]), c = l[1];
  a !== l[0] && ps(l[2], s) && d([a, c = ti(l[1], o(a, r)), s]), Te.useEffect(() => {
    var f = l[0], m = l[2][1], g = !1, S = (q) => {
      g = !0, Tr(d, (w) => {
        var U = ti(w[1], q);
        return w[1] !== U ? [w[0], U, w[2]] : w;
      });
    };
    if (f) {
      var x = $e(S)(wi(() => {
        S({
          fetching: !1
        });
      })(f));
      return g || S({
        fetching: !0
      }), () => {
        i.dispose(m.key), x.unsubscribe();
      };
    } else
      S({
        fetching: !1
      });
  }, [i, l[0], l[2][1]]);
  var p = Te.useCallback((f) => {
    var m = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...f
    };
    Tr(d, (g) => [r ? He((S) => {
      i.set(n.key, S);
    })(t.executeQuery(n, m)) : t.executeQuery(n, m), g[1], s]);
  }, [t, i, n, r, o, e.requestPolicy, e.context]);
  return [c, p];
}
const bs = $t.createContext(void 0);
$t.createContext(void 0);
const vs = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Ss = (e, t) => {
  let i = "";
  return e !== void 0 ? i = `[Network] ${e.message}` : t !== void 0 ? t.forEach((r) => {
    i += `[GraphQL] ${r.message}
`;
  }) : i = "Unknown error", i.trim();
}, ws = (e) => typeof e == "string" ? new Rt(e) : e != null && e.message && !e.code ? new Rt(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class qe extends Error {
  /** @private */
  static forClientSideError(t, i) {
    return new qe({
      executionErrors: [t],
      response: i
    });
  }
  /** @private */
  static forErrorsResponse(t, i) {
    return new qe({
      executionErrors: t.map(Ti),
      response: i
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new qe({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, i, r = !1) {
    const n = $a(t, i);
    let a = qe.forMaybeCombinedError(t.error);
    return !a && n && !r && (a = qe.forClientSideError(n)), a;
  }
  constructor({ networkError: t, executionErrors: i, response: r }) {
    const n = (i || []).map(ws), a = Ss(t, n);
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
const Os = (e) => {
  const { context: t, suspense: i, ...r } = e ?? {}, n = ri(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...r,
    context: n
  };
}, Is = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), Ps = (e) => {
  if (!In(bs))
    throw new Error(vs);
  const t = Os(e);
  return gs(t);
};
var Ts = typeof Element < "u", Es = typeof Map == "function", As = typeof Set == "function", ks = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ct(e, t) {
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
        if (!Ct(e[r], t[r]))
          return !1;
      return !0;
    }
    var a;
    if (Es && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!Ct(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (As && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (ks && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Ts && e instanceof Element)
      return !1;
    for (r = i; r-- !== 0; )
      if (!((n[r] === "_owner" || n[r] === "__v" || n[r] === "__o") && e.$$typeof) && !Ct(e[n[r]], t[n[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var js = function(t, i) {
  try {
    return Ct(t, i);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const _s = /* @__PURE__ */ Tn(js), Ns = (e) => {
  const t = Pn();
  return e ? (t.current === void 0 || !_s(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, xs = (e, t) => {
  const i = Ns(t), r = ri(() => xi(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, i), [e, i]), [n, a] = Ps(Is(r, t));
  return [ri(() => {
    const s = [e.findMany.operationName];
    let l = n.data;
    if (l) {
      const c = et(n.data, s);
      if (c) {
        const p = bt(n, c);
        l = tt.boot(e, p, c);
      }
    }
    const d = qe.errorIfDataAbsent(n, s, t == null ? void 0 : t.pause);
    return { ...n, data: l, error: d };
  }, [e, n]), a];
}, Cs = new ls(), qs = () => {
  const [{ data: e }] = xs(Cs.shopifyProduct);
  return /* @__PURE__ */ Ji.jsx(Ji.Fragment, { children: JSON.stringify(e) });
};
export {
  qs as R,
  Fs as c
};
