import * as Ot from "react";
import ie, { useMemo as Zr, useContext as Ac, useRef as Jf, memo as Xf, useState as Pc, useEffect as zr, createContext as Zf } from "react";
var b = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var La = { exports: {} }, Wn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Du;
function xf() {
  if (Du)
    return Wn;
  Du = 1;
  var e = ie, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, y, u) {
    var c, l = {}, p = null, h = null;
    u !== void 0 && (p = "" + u), y.key !== void 0 && (p = "" + y.key), y.ref !== void 0 && (h = y.ref);
    for (c in y)
      r.call(y, c) && !a.hasOwnProperty(c) && (l[c] = y[c]);
    if (s && s.defaultProps)
      for (c in y = s.defaultProps, y)
        l[c] === void 0 && (l[c] = y[c]);
    return { $$typeof: t, type: s, key: p, ref: h, props: l, _owner: i.current };
  }
  return Wn.Fragment = n, Wn.jsx = o, Wn.jsxs = o, Wn;
}
var Hn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ku;
function ed() {
  return ku || (ku = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ie, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), d = Symbol.iterator, f = "@@iterator";
    function v(A) {
      if (A === null || typeof A != "object")
        return null;
      var j = d && A[d] || A[f];
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
        var G = m.ReactDebugCurrentFrame, ce = G.getStackAddendum();
        ce !== "" && (j += "%s", R = R.concat([ce]));
        var me = R.map(function(te) {
          return String(te);
        });
        me.unshift("Warning: " + j), Function.prototype.apply.call(console[A], console, me);
      }
    }
    var _ = !1, T = !1, P = !1, E = !1, S = !1, w;
    w = Symbol.for("react.module.reference");
    function I(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === a || S || A === i || A === u || A === c || E || A === h || _ || T || P || typeof A == "object" && A !== null && (A.$$typeof === p || A.$$typeof === l || A.$$typeof === o || A.$$typeof === s || A.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === w || A.getModuleId !== void 0));
    }
    function C(A, j, R) {
      var G = A.displayName;
      if (G)
        return G;
      var ce = j.displayName || j.name || "";
      return ce !== "" ? R + "(" + ce + ")" : R;
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
        case n:
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
            var j = A;
            return k(j) + ".Consumer";
          case o:
            var R = A;
            return k(R._context) + ".Provider";
          case y:
            return C(A, A.render, "ForwardRef");
          case l:
            var G = A.displayName || null;
            return G !== null ? G : B(A.type) || "Memo";
          case p: {
            var ce = A, me = ce._payload, te = ce._init;
            try {
              return B(te(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, V = 0, W, F, J, he, H, Oe, z;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function ye() {
      {
        if (V === 0) {
          W = console.log, F = console.info, J = console.warn, he = console.error, H = console.group, Oe = console.groupCollapsed, z = console.groupEnd;
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
        V++;
      }
    }
    function ue() {
      {
        if (V--, V === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, A, {
              value: W
            }),
            info: D({}, A, {
              value: F
            }),
            warn: D({}, A, {
              value: J
            }),
            error: D({}, A, {
              value: he
            }),
            group: D({}, A, {
              value: H
            }),
            groupCollapsed: D({}, A, {
              value: Oe
            }),
            groupEnd: D({}, A, {
              value: z
            })
          });
        }
        V < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = m.ReactCurrentDispatcher, Re;
    function Ae(A, j, R) {
      {
        if (Re === void 0)
          try {
            throw Error();
          } catch (ce) {
            var G = ce.stack.trim().match(/\n( *(at )?)/);
            Re = G && G[1] || "";
          }
        return `
` + Re + A;
      }
    }
    var Ue = !1, Te;
    {
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      Te = new dt();
    }
    function Et(A, j) {
      if (!A || Ue)
        return "";
      {
        var R = Te.get(A);
        if (R !== void 0)
          return R;
      }
      var G;
      Ue = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = K.current, K.current = null, ye();
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
            } catch (Tt) {
              G = Tt;
            }
            Reflect.construct(A, [], te);
          } else {
            try {
              te.call();
            } catch (Tt) {
              G = Tt;
            }
            A.call(te.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Tt) {
            G = Tt;
          }
          A();
        }
      } catch (Tt) {
        if (Tt && G && typeof Tt.stack == "string") {
          for (var Z = Tt.stack.split(`
`), He = G.stack.split(`
`), Ie = Z.length - 1, Ce = He.length - 1; Ie >= 1 && Ce >= 0 && Z[Ie] !== He[Ce]; )
            Ce--;
          for (; Ie >= 1 && Ce >= 0; Ie--, Ce--)
            if (Z[Ie] !== He[Ce]) {
              if (Ie !== 1 || Ce !== 1)
                do
                  if (Ie--, Ce--, Ce < 0 || Z[Ie] !== He[Ce]) {
                    var st = `
` + Z[Ie].replace(" at new ", " at ");
                    return A.displayName && st.includes("<anonymous>") && (st = st.replace("<anonymous>", A.displayName)), typeof A == "function" && Te.set(A, st), st;
                  }
                while (Ie >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        Ue = !1, K.current = me, ue(), Error.prepareStackTrace = ce;
      }
      var cn = A ? A.displayName || A.name : "", Mu = cn ? Ae(cn) : "";
      return typeof A == "function" && Te.set(A, Mu), Mu;
    }
    function Ir(A, j, R) {
      return Et(A, !1);
    }
    function qn(A) {
      var j = A.prototype;
      return !!(j && j.isReactComponent);
    }
    function Rt(A, j, R) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return Et(A, qn(A));
      if (typeof A == "string")
        return Ae(A);
      switch (A) {
        case u:
          return Ae("Suspense");
        case c:
          return Ae("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case y:
            return Ir(A.render);
          case l:
            return Rt(A.type, j, R);
          case p: {
            var G = A, ce = G._payload, me = G._init;
            try {
              return Rt(me(ce), j, R);
            } catch {
            }
          }
        }
      return "";
    }
    var $t = Object.prototype.hasOwnProperty, on = {}, jr = m.ReactDebugCurrentFrame;
    function Gt(A) {
      if (A) {
        var j = A._owner, R = Rt(A.type, A._source, j ? j.type : null);
        jr.setExtraStackFrame(R);
      } else
        jr.setExtraStackFrame(null);
    }
    function M(A, j, R, G, ce) {
      {
        var me = Function.call.bind($t);
        for (var te in A)
          if (me(A, te)) {
            var Z = void 0;
            try {
              if (typeof A[te] != "function") {
                var He = Error((G || "React class") + ": " + R + " type `" + te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              Z = A[te](j, te, G, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ie) {
              Z = Ie;
            }
            Z && !(Z instanceof Error) && (Gt(ce), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", R, te, typeof Z), Gt(null)), Z instanceof Error && !(Z.message in on) && (on[Z.message] = !0, Gt(ce), g("Failed %s type: %s", R, Z.message), Gt(null));
          }
      }
    }
    var N = Array.isArray;
    function U(A) {
      return N(A);
    }
    function Q(A) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, R = j && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return R;
      }
    }
    function $(A) {
      try {
        return ee(A), !1;
      } catch {
        return !0;
      }
    }
    function ee(A) {
      return "" + A;
    }
    function Pe(A) {
      if ($(A))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Q(A)), ee(A);
    }
    var ve = m.ReactCurrentOwner, de = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, un, Mt;
    Mt = {};
    function kf(A) {
      if ($t.call(A, "ref")) {
        var j = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function Lf(A) {
      if ($t.call(A, "key")) {
        var j = Object.getOwnPropertyDescriptor(A, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function Bf(A, j) {
      if (typeof A.ref == "string" && ve.current && j && ve.current.stateNode !== j) {
        var R = B(ve.current.type);
        Mt[R] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(ve.current.type), A.ref), Mt[R] = !0);
      }
    }
    function Ff(A, j) {
      {
        var R = function() {
          we || (we = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        R.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function Uf(A, j) {
      {
        var R = function() {
          un || (un = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        R.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var Vf = function(A, j, R, G, ce, me, te) {
      var Z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: A,
        key: j,
        ref: R,
        props: te,
        // Record the component responsible for creating this element.
        _owner: me
      };
      return Z._store = {}, Object.defineProperty(Z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.defineProperty(Z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(Z.props), Object.freeze(Z)), Z;
    };
    function $f(A, j, R, G, ce) {
      {
        var me, te = {}, Z = null, He = null;
        R !== void 0 && (Pe(R), Z = "" + R), Lf(j) && (Pe(j.key), Z = "" + j.key), kf(j) && (He = j.ref, Bf(j, ce));
        for (me in j)
          $t.call(j, me) && !de.hasOwnProperty(me) && (te[me] = j[me]);
        if (A && A.defaultProps) {
          var Ie = A.defaultProps;
          for (me in Ie)
            te[me] === void 0 && (te[me] = Ie[me]);
        }
        if (Z || He) {
          var Ce = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          Z && Ff(te, Ce), He && Uf(te, Ce);
        }
        return Vf(A, Z, He, ce, G, ve.current, te);
      }
    }
    var Wi = m.ReactCurrentOwner, wu = m.ReactDebugCurrentFrame;
    function sn(A) {
      if (A) {
        var j = A._owner, R = Rt(A.type, A._source, j ? j.type : null);
        wu.setExtraStackFrame(R);
      } else
        wu.setExtraStackFrame(null);
    }
    var Hi;
    Hi = !1;
    function zi(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function Iu() {
      {
        if (Wi.current) {
          var A = B(Wi.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function Gf(A) {
      {
        if (A !== void 0) {
          var j = A.fileName.replace(/^.*[\\\/]/, ""), R = A.lineNumber;
          return `

Check your code at ` + j + ":" + R + ".";
        }
        return "";
      }
    }
    var ju = {};
    function qf(A) {
      {
        var j = Iu();
        if (!j) {
          var R = typeof A == "string" ? A : A.displayName || A.name;
          R && (j = `

Check the top-level render call using <` + R + ">.");
        }
        return j;
      }
    }
    function Cu(A, j) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var R = qf(j);
        if (ju[R])
          return;
        ju[R] = !0;
        var G = "";
        A && A._owner && A._owner !== Wi.current && (G = " It was passed a child from " + B(A._owner.type) + "."), sn(A), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, G), sn(null);
      }
    }
    function Nu(A, j) {
      {
        if (typeof A != "object")
          return;
        if (U(A))
          for (var R = 0; R < A.length; R++) {
            var G = A[R];
            zi(G) && Cu(G, j);
          }
        else if (zi(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var ce = v(A);
          if (typeof ce == "function" && ce !== A.entries)
            for (var me = ce.call(A), te; !(te = me.next()).done; )
              zi(te.value) && Cu(te.value, j);
        }
      }
    }
    function Wf(A) {
      {
        var j = A.type;
        if (j == null || typeof j == "string")
          return;
        var R;
        if (typeof j == "function")
          R = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === l))
          R = j.propTypes;
        else
          return;
        if (R) {
          var G = B(j);
          M(R, A.props, "prop", G, A);
        } else if (j.PropTypes !== void 0 && !Hi) {
          Hi = !0;
          var ce = B(j);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Hf(A) {
      {
        for (var j = Object.keys(A.props), R = 0; R < j.length; R++) {
          var G = j[R];
          if (G !== "children" && G !== "key") {
            sn(A), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), sn(null);
            break;
          }
        }
        A.ref !== null && (sn(A), g("Invalid attribute `ref` supplied to `React.Fragment`."), sn(null));
      }
    }
    function Ru(A, j, R, G, ce, me) {
      {
        var te = I(A);
        if (!te) {
          var Z = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = Gf(ce);
          He ? Z += He : Z += Iu();
          var Ie;
          A === null ? Ie = "null" : U(A) ? Ie = "array" : A !== void 0 && A.$$typeof === t ? (Ie = "<" + (B(A.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : Ie = typeof A, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ie, Z);
        }
        var Ce = $f(A, j, R, ce, me);
        if (Ce == null)
          return Ce;
        if (te) {
          var st = j.children;
          if (st !== void 0)
            if (G)
              if (U(st)) {
                for (var cn = 0; cn < st.length; cn++)
                  Nu(st[cn], A);
                Object.freeze && Object.freeze(st);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nu(st, A);
        }
        return A === r ? Hf(Ce) : Wf(Ce), Ce;
      }
    }
    function zf(A, j, R) {
      return Ru(A, j, R, !0);
    }
    function Qf(A, j, R) {
      return Ru(A, j, R, !1);
    }
    var Kf = Qf, Yf = zf;
    Hn.Fragment = r, Hn.jsx = Kf, Hn.jsxs = Yf;
  }()), Hn;
}
process.env.NODE_ENV === "production" ? La.exports = xf() : La.exports = ed();
var xr = La.exports;
const td = (e) => e && "connection" in e && e.connection && "endpoint" in e.connection;
var er;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(er || (er = {}));
const nd = {
  DateTime(e) {
    return new Date(e);
  }
};
class rd {
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
      a != null && (n[r] = nd[i](a));
    }
    return n;
  }
}
function Se(e, t) {
  if (!!!e)
    throw new Error(t);
}
function ar(e) {
  return typeof e == "object" && e !== null;
}
function Ec(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const id = /\r\n|[\n\r]/g;
function Ba(e, t) {
  let n = 0, r = 1;
  for (const i of e.body.matchAll(id)) {
    if (typeof i.index == "number" || Ec(!1), i.index >= t)
      break;
    n = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: t + 1 - n
  };
}
function ad(e) {
  return Tc(
    e.source,
    Ba(e.source, e.start)
  );
}
function Tc(e, t) {
  const n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? n : 0, y = t.column + s, u = `${e.name}:${o}:${y}
`, c = r.split(/\r\n|[\n\r]/g), l = c[i];
  if (l.length > 120) {
    const p = Math.floor(y / 80), h = y % 80, d = [];
    for (let f = 0; f < l.length; f += 80)
      d.push(l.slice(f, f + 80));
    return u + Lu([
      [`${o} |`, d[0]],
      ...d.slice(1, p + 1).map((f) => ["|", f]),
      ["|", "^".padStart(h)],
      ["|", d[p + 1]]
    ]);
  }
  return u + Lu([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, c[i - 1]],
    [`${o} |`, l],
    ["|", "^".padStart(y)],
    [`${o + 1} |`, c[i + 1]]
  ]);
}
function Lu(e) {
  const t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function od(e) {
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
let re = class wc extends Error {
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
    const { nodes: o, source: s, positions: y, path: u, originalError: c, extensions: l } = od(n);
    super(t), this.name = "GraphQLError", this.path = u ?? void 0, this.originalError = c ?? void 0, this.nodes = Bu(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const p = Bu(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((d) => d.loc).filter((d) => d != null)
    );
    this.source = s ?? (p == null || (i = p[0]) === null || i === void 0 ? void 0 : i.source), this.positions = y ?? (p == null ? void 0 : p.map((d) => d.start)), this.locations = y && s ? y.map((d) => Ba(s, d)) : p == null ? void 0 : p.map((d) => Ba(d.source, d.start));
    const h = ar(
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, wc) : Object.defineProperty(this, "stack", {
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

` + ad(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + Tc(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
};
function Bu(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const Ic = {
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
}, ud = new Set(Object.keys(Ic));
function Fu(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && ud.has(t);
}
var Uu;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Uu || (Uu = {}));
var nt;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(nt || (nt = {}));
var pe;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(pe || (pe = {}));
function Vu(e) {
  return e === 9 || e === 32;
}
function sd(e) {
  return e >= 48 && e <= 57;
}
function jc(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function cd(e) {
  return jc(e) || e === 95;
}
function ld(e) {
  return jc(e) || sd(e) || e === 95;
}
function fd(e, t) {
  const n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((h) => h.length === 0 || Vu(h.charCodeAt(0))), o = n.endsWith('\\"""'), s = e.endsWith('"') && !o, y = e.endsWith("\\"), u = s || y, c = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || u || a || o);
  let l = "";
  const p = i && Vu(e.charCodeAt(0));
  return (c && !p || a) && (l += `
`), l += n, (c || u) && (l += `
`), '"""' + l + '"""';
}
const dd = 10, Cc = 2;
function ge(e) {
  return _i(e, []);
}
function _i(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return pd(e, t);
    default:
      return String(e);
  }
}
function pd(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (hd(e)) {
    const r = e.toJSON();
    if (r !== e)
      return typeof r == "string" ? r : _i(r, n);
  } else if (Array.isArray(e))
    return vd(e, n);
  return yd(e, n);
}
function hd(e) {
  return typeof e.toJSON == "function";
}
function yd(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > Cc ? "[" + md(e) + "]" : "{ " + n.map(
    ([i, a]) => i + ": " + _i(a, t)
  ).join(", ") + " }";
}
function vd(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Cc)
    return "[Array]";
  const n = Math.min(dd, e.length), r = e.length - n, i = [];
  for (let a = 0; a < n; ++a)
    i.push(_i(e[a], t));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function md(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const Ft = (
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
        const o = ge(t);
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
), gd = 5;
function bd(e, t) {
  const [n, r] = t ? [e, t] : [void 0, e];
  let i = " Did you mean ";
  n && (i += n + " ");
  const a = r.map((y) => `"${y}"`);
  switch (a.length) {
    case 0:
      return "";
    case 1:
      return i + a[0] + "?";
    case 2:
      return i + a[0] + " or " + a[1] + "?";
  }
  const o = a.slice(0, gd), s = o.pop();
  return i + o.join(", ") + ", or " + s + "?";
}
function $u(e) {
  return e;
}
function mo(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    n[t(r)] = r;
  return n;
}
function go(e, t, n) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of e)
    r[t(i)] = n(i);
  return r;
}
function Oi(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of Object.keys(e))
    n[r] = t(e[r], r);
  return n;
}
function _d(e, t) {
  let n = 0, r = 0;
  for (; n < e.length && r < t.length; ) {
    let i = e.charCodeAt(n), a = t.charCodeAt(r);
    if (Cr(i) && Cr(a)) {
      let o = 0;
      do
        ++n, o = o * 10 + i - Fa, i = e.charCodeAt(n);
      while (Cr(i) && o > 0);
      let s = 0;
      do
        ++r, s = s * 10 + a - Fa, a = t.charCodeAt(r);
      while (Cr(a) && s > 0);
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
const Fa = 48, Od = 57;
function Cr(e) {
  return !isNaN(e) && Fa <= e && e <= Od;
}
function Ad(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = new Pd(e), i = Math.floor(e.length * 0.4) + 1;
  for (const a of t) {
    const o = r.measure(a, i);
    o !== void 0 && (n[a] = o);
  }
  return Object.keys(n).sort((a, o) => {
    const s = n[a] - n[o];
    return s !== 0 ? s : _d(a, o);
  });
}
class Pd {
  constructor(t) {
    this._input = t, this._inputLowerCase = t.toLowerCase(), this._inputArray = Gu(this._inputLowerCase), this._rows = [
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
    let i = Gu(r), a = this._inputArray;
    if (i.length < a.length) {
      const c = i;
      i = a, a = c;
    }
    const o = i.length, s = a.length;
    if (o - s > n)
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
      if (h > n)
        return;
    }
    const u = y[o % 3][s];
    return u <= n ? u : void 0;
  }
}
function Gu(e) {
  const t = e.length, n = new Array(t);
  for (let r = 0; r < t; ++r)
    n[r] = e.charCodeAt(r);
  return n;
}
function vt(e) {
  if (e == null)
    return /* @__PURE__ */ Object.create(null);
  if (Object.getPrototypeOf(e) === null)
    return e;
  const t = /* @__PURE__ */ Object.create(null);
  for (const [n, r] of Object.entries(e))
    t[n] = r;
  return t;
}
function Sd(e) {
  return `"${e.replace(Ed, Td)}"`;
}
const Ed = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Td(e) {
  return wd[e.charCodeAt(0)];
}
const wd = [
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
], Id = Object.freeze({});
function jd(e, t, n = Ic) {
  const r = /* @__PURE__ */ new Map();
  for (const m of Object.values(pe))
    r.set(m, Cd(t, m));
  let i, a = Array.isArray(e), o = [e], s = -1, y = [], u = e, c, l;
  const p = [], h = [];
  do {
    s++;
    const m = s === o.length, g = m && y.length !== 0;
    if (m) {
      if (c = h.length === 0 ? void 0 : p[p.length - 1], u = l, l = h.pop(), g)
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
      Fu(u) || Se(!1, `Invalid AST Node: ${ge(u)}.`);
      const _ = m ? (d = r.get(u.kind)) === null || d === void 0 ? void 0 : d.leave : (f = r.get(u.kind)) === null || f === void 0 ? void 0 : f.enter;
      if (O = _ == null ? void 0 : _.call(t, u, c, l, p, h), O === Id)
        break;
      if (O === !1) {
        if (!m) {
          p.pop();
          continue;
        }
      } else if (O !== void 0 && (y.push([c, O]), !m))
        if (Fu(O))
          u = O;
        else {
          p.pop();
          continue;
        }
    }
    if (O === void 0 && g && y.push([c, u]), m)
      p.pop();
    else {
      var v;
      i = {
        inArray: a,
        index: s,
        keys: o,
        edits: y,
        prev: i
      }, a = Array.isArray(u), o = a ? u : (v = n[u.kind]) !== null && v !== void 0 ? v : [], s = -1, y = [], l && h.push(l), l = u;
    }
  } while (i !== void 0);
  return y.length !== 0 ? y[y.length - 1][1] : e;
}
function Cd(e, t) {
  const n = e[t];
  return typeof n == "object" ? n : typeof n == "function" ? {
    enter: n,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function kt(e) {
  return jd(e, Rd);
}
const Nd = 80, Rd = {
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
      const t = x("(", L(e.variableDefinitions, ", "), ")"), n = L(
        [
          e.operation,
          L([e.name, t]),
          L(e.directives, " ")
        ],
        " "
      );
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + x(" = ", n) + x(" ", L(r, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => pt(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
      const a = x("", e, ": ") + t;
      let o = a + x("(", L(n, ", "), ")");
      return o.length > Nd && (o = a + x(`(
`, Qr(L(n, `
`)), `
)`)), L([o, L(r, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + x(" ", L(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) => L(
      [
        "...",
        x("on ", e),
        L(t, " "),
        n
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${x("(", L(n, ", "), ")")} on ${t} ${x("", L(r, " "), " ")}` + i
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
    leave: ({ value: e, block: t }) => t ? fd(e) : Sd(e)
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
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + x("(", L(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: n }) => x("", e, `
`) + L(["schema", L(t, " "), pt(n)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) => x("", e, `
`) + L(["scalar", t, L(n, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => x("", e, `
`) + L(
      [
        "type",
        t,
        x("implements ", L(n, " & ")),
        L(r, " "),
        pt(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => x("", e, `
`) + t + (qu(n) ? x(`(
`, Qr(L(n, `
`)), `
)`) : x("(", L(n, ", "), ")")) + ": " + r + x(" ", L(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => x("", e, `
`) + L(
      [t + ": " + n, x("= ", r), L(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => x("", e, `
`) + L(
      [
        "interface",
        t,
        x("implements ", L(n, " & ")),
        L(r, " "),
        pt(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: r }) => x("", e, `
`) + L(
      ["union", t, L(n, " "), x("= ", L(r, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: r }) => x("", e, `
`) + L(["enum", t, L(n, " "), pt(r)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) => x("", e, `
`) + L([t, L(n, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: r }) => x("", e, `
`) + L(["input", t, L(n, " "), pt(r)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) => x("", e, `
`) + "directive @" + t + (qu(n) ? x(`(
`, Qr(L(n, `
`)), `
)`) : x("(", L(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + L(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => L(
      ["extend schema", L(e, " "), pt(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => L(["extend scalar", e, L(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => L(
      [
        "extend type",
        e,
        x("implements ", L(t, " & ")),
        L(n, " "),
        pt(r)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => L(
      [
        "extend interface",
        e,
        x("implements ", L(t, " & ")),
        L(n, " "),
        pt(r)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: n }) => L(
      [
        "extend union",
        e,
        L(t, " "),
        x("= ", L(n, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) => L(["extend enum", e, L(t, " "), pt(n)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) => L(["extend input", e, L(t, " "), pt(n)], " ")
  }
};
function L(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
}
function pt(e) {
  return x(`{
`, Qr(L(e, `
`)), `
}`);
}
function x(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function Qr(e) {
  return x("  ", e.replace(/\n/g, `
  `));
}
function qu(e) {
  var t;
  return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function Ua(e, t) {
  switch (e.kind) {
    case pe.NULL:
      return null;
    case pe.INT:
      return parseInt(e.value, 10);
    case pe.FLOAT:
      return parseFloat(e.value);
    case pe.STRING:
    case pe.ENUM:
    case pe.BOOLEAN:
      return e.value;
    case pe.LIST:
      return e.values.map(
        (n) => Ua(n, t)
      );
    case pe.OBJECT:
      return go(
        e.fields,
        (n) => n.name.value,
        (n) => Ua(n.value, t)
      );
    case pe.VARIABLE:
      return t == null ? void 0 : t[e.name.value];
  }
}
function mt(e) {
  if (e != null || Se(!1, "Must provide name."), typeof e == "string" || Se(!1, "Expected name to be a string."), e.length === 0)
    throw new re("Expected name to be a non-empty string.");
  for (let t = 1; t < e.length; ++t)
    if (!ld(e.charCodeAt(t)))
      throw new re(
        `Names must only contain [_a-zA-Z0-9] but "${e}" does not.`
      );
  if (!cd(e.charCodeAt(0)))
    throw new re(
      `Names must start with [_a-zA-Z] but "${e}" does not.`
    );
  return e;
}
function Md(e) {
  if (e === "true" || e === "false" || e === "null")
    throw new re(`Enum values cannot be named: ${e}`);
  return mt(e);
}
function Nc(e) {
  return Rc(e) || Dd(e) || kd(e) || Ld(e) || Mc(e) || Dc(e) || kc(e) || jt(e);
}
function Rc(e) {
  return Ft(e, kn);
}
function Dd(e) {
  return Ft(e, Vd);
}
function kd(e) {
  return Ft(e, $d);
}
function Ld(e) {
  return Ft(e, Gd);
}
function Mc(e) {
  return Ft(e, Wd);
}
function Dc(e) {
  return Ft(e, zd);
}
function kc(e) {
  return Ft(e, Fd);
}
function jt(e) {
  return Ft(e, Ai);
}
function Bd(e) {
  return Rc(e) || Mc(e);
}
class Fd {
  constructor(t) {
    Nc(t) || Se(!1, `Expected ${ge(t)} to be a GraphQL type.`), this.ofType = t;
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
class Ai {
  constructor(t) {
    Ud(t) || Se(
      !1,
      `Expected ${ge(t)} to be a GraphQL nullable type.`
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
function Ud(e) {
  return Nc(e) && !jt(e);
}
function Lc(e) {
  return typeof e == "function" ? e() : e;
}
function Bc(e) {
  return typeof e == "function" ? e() : e;
}
class kn {
  constructor(t) {
    var n, r, i, a;
    const o = (n = t.parseValue) !== null && n !== void 0 ? n : $u;
    this.name = mt(t.name), this.description = t.description, this.specifiedByURL = t.specifiedByURL, this.serialize = (r = t.serialize) !== null && r !== void 0 ? r : $u, this.parseValue = o, this.parseLiteral = (i = t.parseLiteral) !== null && i !== void 0 ? i : (s, y) => o(Ua(s, y)), this.extensions = vt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (a = t.extensionASTNodes) !== null && a !== void 0 ? a : [], t.specifiedByURL == null || typeof t.specifiedByURL == "string" || Se(
      !1,
      `${this.name} must provide "specifiedByURL" as a string, but got: ${ge(t.specifiedByURL)}.`
    ), t.serialize == null || typeof t.serialize == "function" || Se(
      !1,
      `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
    ), t.parseLiteral && (typeof t.parseValue == "function" && typeof t.parseLiteral == "function" || Se(
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
class Vd {
  constructor(t) {
    var n;
    this.name = mt(t.name), this.description = t.description, this.isTypeOf = t.isTypeOf, this.extensions = vt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = () => Uc(t), this._interfaces = () => Fc(t), t.isTypeOf == null || typeof t.isTypeOf == "function" || Se(
      !1,
      `${this.name} must provide "isTypeOf" as a function, but got: ${ge(t.isTypeOf)}.`
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
      fields: $c(this.getFields()),
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
function Fc(e) {
  var t;
  const n = Lc(
    (t = e.interfaces) !== null && t !== void 0 ? t : []
  );
  return Array.isArray(n) || Se(
    !1,
    `${e.name} interfaces must be an Array or a function which returns an Array.`
  ), n;
}
function Uc(e) {
  const t = Bc(e.fields);
  return bn(t) || Se(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), Oi(t, (n, r) => {
    var i;
    bn(n) || Se(
      !1,
      `${e.name}.${r} field config must be an object.`
    ), n.resolve == null || typeof n.resolve == "function" || Se(
      !1,
      `${e.name}.${r} field resolver must be a function if provided, but got: ${ge(n.resolve)}.`
    );
    const a = (i = n.args) !== null && i !== void 0 ? i : {};
    return bn(a) || Se(
      !1,
      `${e.name}.${r} args must be an object with argument names as keys.`
    ), {
      name: mt(r),
      description: n.description,
      type: n.type,
      args: Vc(a),
      resolve: n.resolve,
      subscribe: n.subscribe,
      deprecationReason: n.deprecationReason,
      extensions: vt(n.extensions),
      astNode: n.astNode
    };
  });
}
function Vc(e) {
  return Object.entries(e).map(([t, n]) => ({
    name: mt(t),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: vt(n.extensions),
    astNode: n.astNode
  }));
}
function bn(e) {
  return ar(e) && !Array.isArray(e);
}
function $c(e) {
  return Oi(e, (t) => ({
    description: t.description,
    type: t.type,
    args: Gc(t.args),
    resolve: t.resolve,
    subscribe: t.subscribe,
    deprecationReason: t.deprecationReason,
    extensions: t.extensions,
    astNode: t.astNode
  }));
}
function Gc(e) {
  return go(
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
class $d {
  constructor(t) {
    var n;
    this.name = mt(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = vt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = Uc.bind(void 0, t), this._interfaces = Fc.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || Se(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${ge(t.resolveType)}.`
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
      fields: $c(this.getFields()),
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
class Gd {
  constructor(t) {
    var n;
    this.name = mt(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = vt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._types = qd.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || Se(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${ge(t.resolveType)}.`
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
function qd(e) {
  const t = Lc(e.types);
  return Array.isArray(t) || Se(
    !1,
    `Must provide Array of types or a function which returns such an array for Union ${e.name}.`
  ), t;
}
class Wd {
  /* <T> */
  constructor(t) {
    var n;
    this.name = mt(t.name), this.description = t.description, this.extensions = vt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._values = Hd(this.name, t.values), this._valueLookup = new Map(
      this._values.map((r) => [r.value, r])
    ), this._nameLookup = mo(this._values, (r) => r.name);
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
      throw new re(
        `Enum "${this.name}" cannot represent value: ${ge(t)}`
      );
    return n.name;
  }
  parseValue(t) {
    if (typeof t != "string") {
      const r = ge(t);
      throw new re(
        `Enum "${this.name}" cannot represent non-string value: ${r}.` + Nr(this, r)
      );
    }
    const n = this.getValue(t);
    if (n == null)
      throw new re(
        `Value "${t}" does not exist in "${this.name}" enum.` + Nr(this, t)
      );
    return n.value;
  }
  parseLiteral(t, n) {
    if (t.kind !== pe.ENUM) {
      const i = kt(t);
      throw new re(
        `Enum "${this.name}" cannot represent non-enum value: ${i}.` + Nr(this, i),
        {
          nodes: t
        }
      );
    }
    const r = this.getValue(t.value);
    if (r == null) {
      const i = kt(t);
      throw new re(
        `Value "${i}" does not exist in "${this.name}" enum.` + Nr(this, i),
        {
          nodes: t
        }
      );
    }
    return r.value;
  }
  toConfig() {
    const t = go(
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
function Nr(e, t) {
  const n = e.getValues().map((i) => i.name), r = Ad(t, n);
  return bd("the enum value", r);
}
function Hd(e, t) {
  return bn(t) || Se(
    !1,
    `${e} values must be an object with value names as keys.`
  ), Object.entries(t).map(([n, r]) => (bn(r) || Se(
    !1,
    `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${ge(r)}.`
  ), {
    name: Md(n),
    description: r.description,
    value: r.value !== void 0 ? r.value : n,
    deprecationReason: r.deprecationReason,
    extensions: vt(r.extensions),
    astNode: r.astNode
  }));
}
class zd {
  constructor(t) {
    var n;
    this.name = mt(t.name), this.description = t.description, this.extensions = vt(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = Qd.bind(void 0, t);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const t = Oi(this.getFields(), (n) => ({
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
function Qd(e) {
  const t = Bc(e.fields);
  return bn(t) || Se(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), Oi(t, (n, r) => (!("resolve" in n) || Se(
    !1,
    `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`
  ), {
    name: mt(r),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: vt(n.extensions),
    astNode: n.astNode
  }));
}
const Qi = 2147483647, Ki = -2147483648, Kd = new kn({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(e) {
    const t = vr(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n))
      throw new re(
        `Int cannot represent non-integer value: ${ge(t)}`
      );
    if (n > Qi || n < Ki)
      throw new re(
        "Int cannot represent non 32-bit signed integer value: " + ge(t)
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isInteger(e))
      throw new re(
        `Int cannot represent non-integer value: ${ge(e)}`
      );
    if (e > Qi || e < Ki)
      throw new re(
        `Int cannot represent non 32-bit signed integer value: ${e}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== pe.INT)
      throw new re(
        `Int cannot represent non-integer value: ${kt(e)}`,
        {
          nodes: e
        }
      );
    const t = parseInt(e.value, 10);
    if (t > Qi || t < Ki)
      throw new re(
        `Int cannot represent non 32-bit signed integer value: ${e.value}`,
        {
          nodes: e
        }
      );
    return t;
  }
});
new kn({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(e) {
    const t = vr(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n))
      throw new re(
        `Float cannot represent non numeric value: ${ge(t)}`
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isFinite(e))
      throw new re(
        `Float cannot represent non numeric value: ${ge(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== pe.FLOAT && e.kind !== pe.INT)
      throw new re(
        `Float cannot represent non numeric value: ${kt(e)}`,
        e
      );
    return parseFloat(e.value);
  }
});
const qc = new kn({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(e) {
    const t = vr(e);
    if (typeof t == "string")
      return t;
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "number" && Number.isFinite(t))
      return t.toString();
    throw new re(
      `String cannot represent value: ${ge(e)}`
    );
  },
  parseValue(e) {
    if (typeof e != "string")
      throw new re(
        `String cannot represent a non string value: ${ge(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== pe.STRING)
      throw new re(
        `String cannot represent a non string value: ${kt(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
}), bo = new kn({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(e) {
    const t = vr(e);
    if (typeof t == "boolean")
      return t;
    if (Number.isFinite(t))
      return t !== 0;
    throw new re(
      `Boolean cannot represent a non boolean value: ${ge(t)}`
    );
  },
  parseValue(e) {
    if (typeof e != "boolean")
      throw new re(
        `Boolean cannot represent a non boolean value: ${ge(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== pe.BOOLEAN)
      throw new re(
        `Boolean cannot represent a non boolean value: ${kt(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
});
new kn({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(e) {
    const t = vr(e);
    if (typeof t == "string")
      return t;
    if (Number.isInteger(t))
      return String(t);
    throw new re(
      `ID cannot represent value: ${ge(e)}`
    );
  },
  parseValue(e) {
    if (typeof e == "string")
      return e;
    if (typeof e == "number" && Number.isInteger(e))
      return e.toString();
    throw new re(`ID cannot represent value: ${ge(e)}`);
  },
  parseLiteral(e) {
    if (e.kind !== pe.STRING && e.kind !== pe.INT)
      throw new re(
        "ID cannot represent a non-string and non-integer value: " + kt(e),
        {
          nodes: e
        }
      );
    return e.value;
  }
});
function vr(e) {
  if (ar(e)) {
    if (typeof e.valueOf == "function") {
      const t = e.valueOf();
      if (!ar(t))
        return t;
    }
    if (typeof e.toJSON == "function")
      return e.toJSON();
  }
  return e;
}
class mr {
  constructor(t) {
    var n, r;
    this.name = mt(t.name), this.description = t.description, this.locations = t.locations, this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1, this.extensions = vt(t.extensions), this.astNode = t.astNode, Array.isArray(t.locations) || Se(!1, `@${t.name} locations must be an Array.`);
    const i = (r = t.args) !== null && r !== void 0 ? r : {};
    ar(i) && !Array.isArray(i) || Se(
      !1,
      `@${t.name} args must be an object with argument names as keys.`
    ), this.args = Vc(i);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: Gc(this.args),
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
new mr({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    nt.FIELD,
    nt.FRAGMENT_SPREAD,
    nt.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new Ai(bo),
      description: "Included when true."
    }
  }
});
new mr({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    nt.FIELD,
    nt.FRAGMENT_SPREAD,
    nt.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new Ai(bo),
      description: "Skipped when true."
    }
  }
});
const Yd = "No longer supported";
new mr({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    nt.FIELD_DEFINITION,
    nt.ARGUMENT_DEFINITION,
    nt.INPUT_FIELD_DEFINITION,
    nt.ENUM_VALUE
  ],
  args: {
    reason: {
      type: qc,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: Yd
    }
  }
});
new mr({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [nt.SCALAR],
  args: {
    url: {
      type: new Ai(qc),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
});
function Zn(e, t, n) {
  if (e) {
    if (e.kind === pe.VARIABLE) {
      const r = e.name.value;
      if (n == null || n[r] === void 0)
        return;
      const i = n[r];
      return i === null && jt(t) ? void 0 : i;
    }
    if (jt(t))
      return e.kind === pe.NULL ? void 0 : Zn(e, t.ofType, n);
    if (e.kind === pe.NULL)
      return null;
    if (kc(t)) {
      const r = t.ofType;
      if (e.kind === pe.LIST) {
        const a = [];
        for (const o of e.values)
          if (Wu(o, n)) {
            if (jt(r))
              return;
            a.push(null);
          } else {
            const s = Zn(o, r, n);
            if (s === void 0)
              return;
            a.push(s);
          }
        return a;
      }
      const i = Zn(e, r, n);
      return i === void 0 ? void 0 : [i];
    }
    if (Dc(t)) {
      if (e.kind !== pe.OBJECT)
        return;
      const r = /* @__PURE__ */ Object.create(null), i = mo(e.fields, (a) => a.name.value);
      for (const a of Object.values(t.getFields())) {
        const o = i[a.name];
        if (!o || Wu(o.value, n)) {
          if (a.defaultValue !== void 0)
            r[a.name] = a.defaultValue;
          else if (jt(a.type))
            return;
          continue;
        }
        const s = Zn(o.value, a.type, n);
        if (s === void 0)
          return;
        r[a.name] = s;
      }
      return r;
    }
    if (Bd(t)) {
      let r;
      try {
        r = t.parseLiteral(e, n);
      } catch {
        return;
      }
      return r === void 0 ? void 0 : r;
    }
    Ec(!1, "Unexpected input type: " + ge(t));
  }
}
function Wu(e, t) {
  return e.kind === pe.VARIABLE && (t == null || t[e.name.value] === void 0);
}
function Jd(e, t, n) {
  var r;
  const i = {}, a = (r = t.arguments) !== null && r !== void 0 ? r : [], o = mo(a, (s) => s.name.value);
  for (const s of e.args) {
    const y = s.name, u = s.type, c = o[y];
    if (!c) {
      if (s.defaultValue !== void 0)
        i[y] = s.defaultValue;
      else if (jt(u))
        throw new re(
          `Argument "${y}" of required type "${ge(u)}" was not provided.`,
          {
            nodes: t
          }
        );
      continue;
    }
    const l = c.value;
    let p = l.kind === pe.NULL;
    if (l.kind === pe.VARIABLE) {
      const d = l.name.value;
      if (n == null || !Zd(n, d)) {
        if (s.defaultValue !== void 0)
          i[y] = s.defaultValue;
        else if (jt(u))
          throw new re(
            `Argument "${y}" of required type "${ge(u)}" was provided the variable "$${d}" which was not provided a runtime value.`,
            {
              nodes: l
            }
          );
        continue;
      }
      p = n[d] == null;
    }
    if (p && jt(u))
      throw new re(
        `Argument "${y}" of non-null type "${ge(u)}" must not be null.`,
        {
          nodes: l
        }
      );
    const h = Zn(l, u, n);
    if (h === void 0)
      throw new re(
        `Argument "${y}" has invalid value ${kt(l)}.`,
        {
          nodes: l
        }
      );
    i[y] = h;
  }
  return i;
}
function Xd(e, t, n) {
  var r;
  const i = (r = t.directives) === null || r === void 0 ? void 0 : r.find(
    (a) => a.name.value === e.name
  );
  if (i)
    return Jd(e, i, n);
}
function Zd(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
const xd = new mr({
  name: "live",
  description: "Instruction for establishing a live connection that is updated once the underlying data changes.",
  locations: [nt.QUERY],
  args: {
    if: {
      type: bo,
      defaultValue: !0,
      description: "Whether the query should be live or not."
    },
    throttle: {
      type: Kd,
      description: 'Propose a desired throttle interval ot the server in order to receive updates to at most once per "throttle" milliseconds. The server must not accept this value.'
    }
  }
}), Wc = (e) => e == null, ep = (e) => {
  var t;
  if (e.kind !== "OperationDefinition" || e.operation !== "query")
    return null;
  const n = (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
  return Wc(n) ? null : n;
}, tp = (e, t) => {
  var n;
  const r = Xd(xd, { directives: [e] }, t);
  return {
    isLive: (r == null ? void 0 : r.if) === !0,
    throttleValue: (n = r == null ? void 0 : r.throttle) !== null && n !== void 0 ? n : null
  };
}, np = (e, t) => {
  const n = ep(e);
  return Wc(n) ? !1 : tp(n, t).isLive;
};
function rp(e) {
  const t = {
    left: e.left,
    delta: e.delta,
    children: void 0,
    name: void 0,
    nested: !1,
    stopped: !1
  };
  function n(r) {
    var i;
    const a = [
      ip,
      ap,
      op,
      up,
      sp
    ];
    for (const o of a)
      if (o(r), r.stopped) {
        r.stopped = !1;
        break;
      }
    if (r.children)
      for (const o of r.children)
        n(o), r.result = (i = r.result) !== null && i !== void 0 ? i : r.left, "result" in o ? r.result[o.name] = o.result : delete r.result[o.name];
  }
  return n(t), t.result;
}
function ip(e) {
  if (!(!e || !e.children) && !e.delta._t) {
    for (let t of e.children)
      Object.prototype.hasOwnProperty.call(e.left, t.name) && t.result === void 0 ? delete e.left[t.name] : e.left[t.name] !== t.result && (e.left[t.name] = t.result);
    e.result = e.left, e.stopped = !0;
  }
}
function ap(e) {
  if (!e || !e.children || e.delta._t !== "a")
    return;
  let t = e.children.length, n;
  for (let r = 0; r < t; r++)
    n = e.children[r], e.left[n.name] = n.result;
  e.result = e.left, e.stopped = !0;
}
function op(e) {
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
function up(e) {
  if (e.nested && !e.delta._t) {
    for (let t in e.delta)
      e.children === void 0 && (e.children = []), e.children.push({
        left: e.left[t],
        delta: e.delta[t],
        name: t,
        stopped: !1
      });
    e.stopped = !0;
  }
}
const Hu = 3;
let zu = {
  numerically(e, t) {
    return e - t;
  },
  numericallyBy(e) {
    return (t, n) => t[e] - n[e];
  }
};
function sp(e) {
  if (!e.nested || e.delta._t !== "a")
    return;
  let t, n, r = e.delta, i = e.left, a = [], o = [], s = [];
  for (t in r)
    if (t !== "_t")
      if (t[0] === "_")
        if (r[t][2] === 0 || r[t][2] === Hu)
          a.push(parseInt(t.slice(1), 10));
        else
          throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${r[t][2]}`);
      else
        r[t].length === 1 ? o.push({
          index: parseInt(t, 10),
          value: r[t][0]
        }) : s.push({
          index: parseInt(t, 10),
          delta: r[t]
        });
  for (a = a.sort(zu.numerically), t = a.length - 1; t >= 0; t--) {
    n = a[t];
    let c = r[`_${n}`], l = i.splice(n, 1)[0];
    c[2] === Hu && o.push({
      index: c[1],
      value: l
    });
  }
  o = o.sort(zu.numericallyBy("index"));
  let y = o.length;
  for (t = 0; t < y; t++) {
    let c = o[t];
    i.splice(c.index, 0, c.value);
  }
  let u = s.length;
  if (u > 0)
    for (t = 0; t < u; t++) {
      let c = s[t];
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
const cp = (e, t) => rp({
  left: e,
  delta: t
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
var Va = function(e, t) {
  return Va = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  }, Va(e, t);
};
function lp(e, t) {
  Va(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function An(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
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
    u((r = r.apply(e, t || [])).next());
  });
}
function Lt(e, t) {
  var n = { label: 0, sent: function() {
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
    for (; n; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = u;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(u);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
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
function Ln(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function or(e) {
  return this instanceof or ? (this.v = e, this) : new or(e);
}
function fp(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), i, a = [];
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
    p.value instanceof or ? Promise.resolve(p.value.v).then(u, c) : l(a[0][2], p);
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
var Hc = (
  /** @class */
  function(e) {
    lp(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return Object.defineProperty(r, "name", {
        value: "RepeaterOverflowError",
        enumerable: !1
      }), typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf(r, r.constructor.prototype) : r.__proto__ = r.constructor.prototype, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(r, r.constructor), r;
    }
    return t;
  }(Error)
);
(function() {
  function e(t) {
    if (t < 0)
      throw new RangeError("Capacity may not be less than 0");
    this._c = t, this._q = [];
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
  }), e.prototype.add = function(t) {
    if (this.full)
      throw new Error("Buffer full");
    this._q.push(t);
  }, e.prototype.remove = function() {
    if (this.empty)
      throw new Error("Buffer empty");
    return this._q.shift();
  }, e;
})();
(function() {
  function e(t) {
    if (t < 1)
      throw new RangeError("Capacity may not be less than 1");
    this._c = t, this._q = [];
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
  }), e.prototype.add = function(t) {
    for (; this._q.length >= this._c; )
      this._q.shift();
    this._q.push(t);
  }, e.prototype.remove = function() {
    if (this.empty)
      throw new Error("Buffer empty");
    return this._q.shift();
  }, e;
})();
(function() {
  function e(t) {
    if (t < 1)
      throw new RangeError("Capacity may not be less than 1");
    this._c = t, this._q = [];
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
  }), e.prototype.add = function(t) {
    this._q.length < this._c && this._q.push(t);
  }, e.prototype.remove = function() {
    if (this.empty)
      throw new Error("Buffer empty");
    return this._q.shift();
  }, e;
})();
function $a(e) {
  e != null && typeof e.then == "function" && e.then(ni, ni);
}
var Yi = 0, Qu = 1, Xt = 2, ei = 3, Ga = 4, ti = 1024, ni = function() {
};
function _n(e) {
  var t = e.err, n = Promise.resolve(e.execution).then(function(r) {
    if (t != null)
      throw t;
    return r;
  });
  return e.err = void 0, e.execution = n.then(function() {
  }, function() {
  }), e.pending === void 0 ? n : e.pending.then(function() {
    return n;
  });
}
function Qt(e, t) {
  var n = e.state >= ei;
  return Promise.resolve(t).then(function(r) {
    return !n && e.state >= Ga ? _n(e).then(function(i) {
      return {
        value: i,
        done: !0
      };
    }) : { value: r, done: n };
  });
}
function _o(e, t) {
  var n, r;
  if (!(e.state >= Xt))
    if (e.state = Xt, e.onnext(), e.onstop(), e.err == null && (e.err = t), e.pushes.length === 0 && (typeof e.buffer > "u" || e.buffer.empty))
      tr(e);
    else
      try {
        for (var i = Ln(e.pushes), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          o.resolve();
        }
      } catch (s) {
        n = { error: s };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n)
            throw n.error;
        }
      }
}
function tr(e) {
  var t, n;
  if (!(e.state >= ei)) {
    e.state < Xt && _o(e), e.state = ei, e.buffer = void 0;
    try {
      for (var r = Ln(e.nexts), i = r.next(); !i.done; i = r.next()) {
        var a = i.value, o = e.pending === void 0 ? _n(e) : e.pending.then(function() {
          return _n(e);
        });
        a.resolve(Qt(e, o));
      }
    } catch (s) {
      t = { error: s };
    } finally {
      try {
        i && !i.done && (n = r.return) && n.call(r);
      } finally {
        if (t)
          throw t.error;
      }
    }
    e.pushes = [], e.nexts = [];
  }
}
function Ku(e) {
  e.state >= Ga || (e.state < ei && tr(e), e.state = Ga);
}
function dp(e, t) {
  if ($a(t), e.pushes.length >= ti)
    throw new Hc("No more than " + ti + " pending calls to push are allowed on a single repeater.");
  if (e.state >= Xt)
    return Promise.resolve(void 0);
  var n = e.pending === void 0 ? Promise.resolve(t) : e.pending.then(function() {
    return t;
  });
  n = n.catch(function(y) {
    e.state < Xt && (e.err = y), Ku(e);
  });
  var r;
  if (e.nexts.length) {
    var i = e.nexts.shift();
    i.resolve(Qt(e, n)), e.nexts.length ? r = Promise.resolve(e.nexts[0].value) : r = new Promise(function(y) {
      return e.onnext = y;
    });
  } else
    typeof e.buffer < "u" && !e.buffer.full ? (e.buffer.add(n), r = Promise.resolve(void 0)) : r = new Promise(function(y) {
      return e.pushes.push({ resolve: y, value: n });
    });
  var a = !0, o = {}, s = r.catch(function(y) {
    if (a)
      throw y;
  });
  return o.then = function(y, u) {
    return a = !1, Promise.prototype.then.call(r, y, u);
  }, o.catch = function(y) {
    return a = !1, Promise.prototype.catch.call(r, y);
  }, o.finally = r.finally.bind(r), e.pending = n.then(function() {
    return s;
  }).catch(function(y) {
    e.err = y, Ku(e);
  }), o;
}
function pp(e) {
  var t = _o.bind(null, e), n = new Promise(function(r) {
    return e.onstop = r;
  });
  return t.then = n.then.bind(n), t.catch = n.catch.bind(n), t.finally = n.finally.bind(n), t;
}
function hp(e) {
  if (!(e.state >= Qu)) {
    e.state = Qu;
    var t = dp.bind(null, e), n = pp(e);
    e.execution = new Promise(function(r) {
      return r(e.executor(t, n));
    }), e.execution.catch(function() {
      return _o(e);
    });
  }
}
var Rr = /* @__PURE__ */ new WeakMap(), gr = (
  /** @class */
  function() {
    function e(t, n) {
      Rr.set(this, {
        executor: t,
        buffer: n,
        err: void 0,
        state: Yi,
        pushes: [],
        nexts: [],
        pending: void 0,
        execution: void 0,
        onnext: ni,
        onstop: ni
      });
    }
    return e.prototype.next = function(t) {
      $a(t);
      var n = Rr.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      if (n.nexts.length >= ti)
        throw new Hc("No more than " + ti + " pending calls to next are allowed on a single repeater.");
      if (n.state <= Yi && hp(n), n.onnext(t), typeof n.buffer < "u" && !n.buffer.empty) {
        var r = Qt(n, n.buffer.remove());
        if (n.pushes.length) {
          var i = n.pushes.shift();
          n.buffer.add(i.value), n.onnext = i.resolve;
        }
        return r;
      } else if (n.pushes.length) {
        var a = n.pushes.shift();
        return n.onnext = a.resolve, Qt(n, a.value);
      } else if (n.state >= Xt)
        return tr(n), Qt(n, _n(n));
      return new Promise(function(o) {
        return n.nexts.push({ resolve: o, value: t });
      });
    }, e.prototype.return = function(t) {
      $a(t);
      var n = Rr.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      return tr(n), n.execution = Promise.resolve(n.execution).then(function() {
        return t;
      }), Qt(n, _n(n));
    }, e.prototype.throw = function(t) {
      var n = Rr.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      return n.state <= Yi || n.state >= Xt || typeof n.buffer < "u" && !n.buffer.empty ? (tr(n), n.err == null && (n.err = t), Qt(n, _n(n))) : this.next(Promise.reject(t));
    }, e.prototype[Symbol.asyncIterator] = function() {
      return this;
    }, e.race = yp, e.merge = vp, e.zip = mp, e.latest = gp, e;
  }()
);
function Pi(e, t) {
  var n, r, i = [], a = function(u) {
    u != null && typeof u[Symbol.asyncIterator] == "function" ? i.push(u[Symbol.asyncIterator]()) : u != null && typeof u[Symbol.iterator] == "function" ? i.push(u[Symbol.iterator]()) : i.push(function() {
      return fp(this, arguments, function() {
        return Lt(this, function(p) {
          switch (p.label) {
            case 0:
              return t.yieldValues ? [4, or(u)] : [3, 3];
            case 1:
              return [4, p.sent()];
            case 2:
              p.sent(), p.label = 3;
            case 3:
              return t.returnValues ? [4, or(u)] : [3, 5];
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
    for (var o = Ln(e), s = o.next(); !s.done; s = o.next()) {
      var y = s.value;
      a(y);
    }
  } catch (u) {
    n = { error: u };
  } finally {
    try {
      s && !s.done && (r = o.return) && r.call(o);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return i;
}
function yp(e) {
  var t = this, n = Pi(e, { returnValues: !0 });
  return new gr(function(r, i) {
    return An(t, void 0, void 0, function() {
      var a, o, s, y, u, c;
      return Lt(this, function(l) {
        switch (l.label) {
          case 0:
            if (!n.length)
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
              return Lt(this, function(g) {
                switch (g.label) {
                  case 0:
                    p = u;
                    try {
                      for (h = (v = void 0, Ln(n)), d = h.next(); !d.done; d = h.next())
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
                    return y = g.sent(), y === void 0 ? [3, 3] : [4, r(y.value)];
                  case 2:
                    g.sent(), g.label = 3;
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
            return i(), [4, Promise.race(n.map(function(p) {
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
function vp(e) {
  var t = this, n = Pi(e, { yieldValues: !0 });
  return new gr(function(r, i) {
    return An(t, void 0, void 0, function() {
      var a, o, s, y = this;
      return Lt(this, function(u) {
        switch (u.label) {
          case 0:
            if (!n.length)
              return i(), [
                2
                /*return*/
              ];
            a = [], o = !1, i.then(function() {
              var c, l;
              o = !0;
              try {
                for (var p = Ln(a), h = p.next(); !h.done; h = p.next()) {
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
            return u.trys.push([1, , 3, 4]), [4, Promise.all(n.map(function(c, l) {
              return An(y, void 0, void 0, function() {
                var p, h;
                return Lt(this, function(d) {
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
function mp(e) {
  var t = this, n = Pi(e, { returnValues: !0 });
  return new gr(function(r, i) {
    return An(t, void 0, void 0, function() {
      var a, o, s, y;
      return Lt(this, function(u) {
        switch (u.label) {
          case 0:
            if (!n.length)
              return i(), [2, []];
            o = !1, i.then(function() {
              a(), o = !0;
            }), u.label = 1;
          case 1:
            u.trys.push([1, , 6, 8]), u.label = 2;
          case 2:
            return o ? [3, 5] : (Promise.all(n.map(function(c) {
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
            return i(), [4, Promise.all(n.map(function(c) {
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
function gp(e) {
  var t = this, n = Pi(e, {
    yieldValues: !0,
    returnValues: !0
  });
  return new gr(function(r, i) {
    return An(t, void 0, void 0, function() {
      var a, o, s, y, u, c = this;
      return Lt(this, function(l) {
        switch (l.label) {
          case 0:
            if (!n.length)
              return i(), [2, []];
            o = [], s = !1, i.then(function() {
              var p, h;
              a();
              try {
                for (var d = Ln(o), f = d.next(); !f.done; f = d.next()) {
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
            return l.trys.push([1, , 5, 7]), Promise.all(n.map(function(p) {
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
            return l.sent(), [4, Promise.all(n.map(function(p, h) {
              return An(c, void 0, void 0, function() {
                var d;
                return Lt(this, function(f) {
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
            return i(), [4, Promise.all(n.map(function(p) {
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
const bp = (e) => (t) => new gr(async (n, r) => {
  const i = t[Symbol.asyncIterator]();
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
      s.value.extensions && (y.extensions = s.value.extensions), s.value.errors && (y.errors = s.value.errors), await n(y);
      continue;
    }
    await n(s.value);
  }
  r();
}), _p = bp(cp);
function Op(e, t, n) {
  const r = async function* () {
    yield* e;
  }(), i = r.return.bind(r);
  if (t && (r.return = (...a) => (t(), i(...a))), n) {
    const a = r.throw.bind(r);
    r.throw = (o) => (n(o), a(o));
  }
  return r;
}
function Yu() {
  const e = {};
  return e.promise = new Promise((t, n) => {
    e.resolve = t, e.reject = n;
  }), e;
}
function Ap() {
  let e = {
    type: "running"
    /* running */
  }, t = Yu();
  const n = [];
  function r(o) {
    e.type === "running" && (n.push(o), t.resolve(), t = Yu());
  }
  const i = async function* () {
    for (; ; )
      if (n.length > 0)
        yield n.shift();
      else {
        if (e.type === "error")
          throw e.error;
        if (e.type === "finished")
          return;
        await t.promise;
      }
  }(), a = Op(i, () => {
    e.type === "running" && (e = {
      type: "finished"
      /* finished */
    }, t.resolve());
  }, (o) => {
    e.type === "running" && (e = {
      type: "error",
      error: o
    }, t.resolve());
  });
  return {
    pushValue: r,
    asyncIterableIterator: a
  };
}
const Pp = (e) => {
  const { pushValue: t, asyncIterableIterator: n } = Ap(), r = e({
    next: (o) => {
      t(o);
    },
    complete: () => {
      n.return();
    },
    error: (o) => {
      n.throw(o);
    }
  }), i = n.return;
  let a;
  return n.return = () => (a === void 0 && (r(), a = i()), a), n;
};
function Sp(e, t) {
  return (async () => {
    try {
      for await (const r of e)
        t.next(r);
      t.complete();
    } catch (r) {
      t.error(r);
    }
  })(), () => {
    var r;
    (r = e.return) === null || r === void 0 || r.call(e);
  };
}
var mn = {
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
class qa extends Error {
  constructor(t, n, r, i, a, o, s) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), n && (this.nodes = Array.isArray(n) ? n : [n]), r && (this.source = r), i && (this.positions = i), o && (this.originalError = o);
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
var _e, Y;
function Ne(e) {
  return new qa(`Syntax Error: Unexpected token at ${Y} in ${e}`);
}
function it(e) {
  if (e.lastIndex = Y, e.test(_e))
    return _e.slice(Y, Y = e.lastIndex);
}
var Mr = / +(?=[^\s])/y;
function Ep(e) {
  for (var t = e.split(`
`), n = "", r = 0, i = 0, a = t.length - 1, o = 0; o < t.length; o++)
    Mr.lastIndex = 0, Mr.test(t[o]) && (o && (!r || Mr.lastIndex < r) && (r = Mr.lastIndex), i = i || o, a = o);
  for (var s = i; s <= a; s++)
    s !== i && (n += `
`), n += t[s].slice(r).replace(/\\"""/g, '"""');
  return n;
}
function X() {
  for (var e = 0 | _e.charCodeAt(Y++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | _e.charCodeAt(Y++))
    if (e === 35)
      for (; (e = _e.charCodeAt(Y++)) !== 10 && e !== 13; )
        ;
  Y--;
}
var zc = /[_A-Za-z]\w*/y;
function At() {
  var e;
  if (e = it(zc))
    return {
      kind: "Name",
      value: e
    };
}
var Tp = /(?:null|true|false)/y, Qc = /\$[_A-Za-z]\w*/y, wp = /-?\d+/y, Ip = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, jp = /\\/g, Cp = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Np = /"(?:"|[^\r\n]*?[^\\]")/y;
function ri(e) {
  var t, n;
  if (n = it(Tp))
    t = n === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: n === "true"
    };
  else if (!e && (n = it(Qc)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: n.slice(1)
      }
    };
  else if (n = it(wp)) {
    var r = n;
    (n = it(Ip)) ? t = {
      kind: "FloatValue",
      value: r + n
    } : t = {
      kind: "IntValue",
      value: r
    };
  } else if (n = it(zc))
    t = {
      kind: "EnumValue",
      value: n
    };
  else if (n = it(Cp))
    t = {
      kind: "StringValue",
      value: Ep(n.slice(3, -3)),
      block: !0
    };
  else if (n = it(Np))
    t = {
      kind: "StringValue",
      value: jp.test(n) ? JSON.parse(n) : n.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (_e.charCodeAt(Y) === 91) {
      Y++, X();
      for (var s = []; o = ri(a); )
        s.push(o);
      if (_e.charCodeAt(Y++) !== 93)
        throw Ne("ListValue");
      return X(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (_e.charCodeAt(Y) === 123) {
      Y++, X();
      for (var o = [], s; s = At(); ) {
        if (X(), _e.charCodeAt(Y++) !== 58)
          throw Ne("ObjectField");
        X();
        var y = ri(a);
        if (!y)
          throw Ne("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: y
        });
      }
      if (_e.charCodeAt(Y++) !== 125)
        throw Ne("ObjectValue");
      return X(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return X(), t;
}
function Kc(e) {
  var t = [];
  if (X(), _e.charCodeAt(Y) === 40) {
    Y++, X();
    for (var n; n = At(); ) {
      if (X(), _e.charCodeAt(Y++) !== 58)
        throw Ne("Argument");
      X();
      var r = ri(e);
      if (!r)
        throw Ne("Argument");
      t.push({
        kind: "Argument",
        name: n,
        value: r
      });
    }
    if (!t.length || _e.charCodeAt(Y++) !== 41)
      throw Ne("Argument");
    X();
  }
  return t;
}
function Pn(e) {
  var t = [];
  for (X(); _e.charCodeAt(Y) === 64; ) {
    Y++;
    var n = At();
    if (!n)
      throw Ne("Directive");
    X(), t.push({
      kind: "Directive",
      name: n,
      arguments: Kc(e)
    });
  }
  return t;
}
function Rp() {
  var e = At();
  if (e) {
    X();
    var t;
    if (_e.charCodeAt(Y) === 58) {
      if (Y++, X(), t = e, !(e = At()))
        throw Ne("Field");
      X();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: Kc(!1),
      directives: Pn(!1),
      selectionSet: Si()
    };
  }
}
function Yc() {
  var e;
  if (X(), _e.charCodeAt(Y) === 91) {
    Y++, X();
    var t = Yc();
    if (!t || _e.charCodeAt(Y++) !== 93)
      throw Ne("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = At())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw Ne("NamedType");
  return X(), _e.charCodeAt(Y) === 33 ? (Y++, X(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Mp = /on/y;
function Jc() {
  if (it(Mp)) {
    X();
    var e = At();
    if (!e)
      throw Ne("NamedType");
    return X(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Dp = /\.\.\./y;
function kp() {
  if (it(Dp)) {
    X();
    var e = Y, t;
    if ((t = At()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Pn(!1)
      };
    Y = e;
    var n = Jc(), r = Pn(!1), i = Si();
    if (!i)
      throw Ne("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: n,
      directives: r,
      selectionSet: i
    };
  }
}
function Si() {
  var e;
  if (X(), _e.charCodeAt(Y) === 123) {
    Y++, X();
    for (var t = []; e = kp() || Rp(); )
      t.push(e);
    if (!t.length || _e.charCodeAt(Y++) !== 125)
      throw Ne("SelectionSet");
    return X(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Lp = /fragment/y;
function Bp() {
  if (it(Lp)) {
    X();
    var e = At();
    if (!e)
      throw Ne("FragmentDefinition");
    X();
    var t = Jc();
    if (!t)
      throw Ne("FragmentDefinition");
    var n = Pn(!1), r = Si();
    if (!r)
      throw Ne("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: n,
      selectionSet: r
    };
  }
}
var Fp = /(?:query|mutation|subscription)/y;
function Up() {
  var e, t, n = [], r = [];
  (e = it(Fp)) && (X(), t = At(), n = function() {
    var o, s = [];
    if (X(), _e.charCodeAt(Y) === 40) {
      for (Y++, X(); o = it(Qc); ) {
        if (X(), _e.charCodeAt(Y++) !== 58)
          throw Ne("VariableDefinition");
        var y = Yc(), u = void 0;
        if (_e.charCodeAt(Y) === 61 && (Y++, X(), !(u = ri(!0))))
          throw Ne("VariableDefinition");
        X(), s.push({
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
          directives: Pn(!0)
        });
      }
      if (_e.charCodeAt(Y++) !== 41)
        throw Ne("VariableDefinition");
      X();
    }
    return s;
  }(), r = Pn(!1));
  var i = Si();
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
function Vp(e, t) {
  return _e = typeof e.body == "string" ? e.body : e, Y = 0, function() {
    var r;
    X();
    for (var i = []; r = Bp() || Up(); )
      i.push(r);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function $p(e) {
  return JSON.stringify(e);
}
function Gp(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var ct = (e) => !(!e || !e.length), $e = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !ct(e.variableDefinitions) && !ct(e.directives))
      return $e.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), ct(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map($e.VariableDefinition).join(", ") + ")"), ct(e.directives) && (t += " " + e.directives.map($e.Directive).join(" ")), t + " " + $e.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = $e.Variable(e.variable) + ": " + lt(e.type);
    return e.defaultValue && (t += " = " + lt(e.defaultValue)), ct(e.directives) && (t += " " + e.directives.map($e.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (ct(e.arguments)) {
      var n = e.arguments.map($e.Argument), r = t + "(" + n.join(", ") + ")";
      t = r.length > 80 ? t + `(
  ` + n.join(`
`).replace(/\n/g, `
  `) + `
)` : r;
    }
    return ct(e.directives) && (t += " " + e.directives.map($e.Directive).join(" ")), e.selectionSet ? t + " " + $e.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Gp(e.value) : $p(e.value),
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
    var t = "..." + e.name.value;
    return ct(e.directives) && (t += " " + e.directives.map($e.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), ct(e.directives) && (t += " " + e.directives.map($e.Directive).join(" ")), t + " " + lt(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, ct(e.directives) && (t += " " + e.directives.map($e.Directive).join(" ")), t + " " + lt(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return ct(e.arguments) && (t += "(" + e.arguments.map($e.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + lt(e.type) + "]",
  NonNullType: (e) => lt(e.type) + "!"
};
function lt(e) {
  return $e[e.kind] ? $e[e.kind](e) : "";
}
var Oo = () => {
}, ut = Oo;
function gt(e) {
  return {
    tag: 0,
    0: e
  };
}
function br(e) {
  return {
    tag: 1,
    0: e
  };
}
var qp = (e) => e;
function Ve(e) {
  return (t) => (n) => {
    var r = ut;
    t((i) => {
      i === 0 ? n(0) : i.tag === 0 ? (r = i[0], n(i)) : e(i[0]) ? n(i) : r(0);
    });
  };
}
function On(e) {
  return (t) => (n) => t((r) => {
    r === 0 || r.tag === 0 ? n(r) : n(br(e(r[0])));
  });
}
function ur(e) {
  return (t) => (n) => {
    var r = [], i = ut, a = !1, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, r.length || n(0)) : s.tag === 0 ? i = s[0] : (a = !1, function(u) {
        var c = ut;
        u((l) => {
          if (l === 0) {
            if (r.length) {
              var p = r.indexOf(c);
              p > -1 && (r = r.slice()).splice(p, 1), r.length || (o ? n(0) : a || (a = !0, i(0)));
            }
          } else
            l.tag === 0 ? (r.push(c = l[0]), c(0)) : r.length && (n(l), c(0));
        });
      }(e(s[0])), a || (a = !0, i(0))));
    }), n(gt((s) => {
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
function Wp(e) {
  return ur(qp)(e);
}
function Sn(e) {
  return Wp(Qp(e));
}
function Ao(e) {
  return (t) => (n) => {
    var r = !1;
    t((i) => {
      if (!r)
        if (i === 0)
          r = !0, n(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          n(gt((o) => {
            o === 1 ? (r = !0, a(1), e()) : a(o);
          }));
        } else
          n(i);
    });
  };
}
function En(e) {
  return (t) => (n) => {
    var r = !1;
    t((i) => {
      if (!r)
        if (i === 0)
          r = !0, n(0);
        else if (i.tag === 0) {
          var a = i[0];
          n(gt((o) => {
            o === 1 && (r = !0), a(o);
          }));
        } else
          e(i[0]), n(i);
    });
  };
}
function Ju(e) {
  return (t) => (n) => t((r) => {
    r === 0 ? n(0) : r.tag === 0 ? (n(r), e()) : n(r);
  });
}
function sr(e) {
  var t = [], n = ut, r = !1;
  return (i) => {
    t.push(i), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var o = 0, s = t, y = t.length; o < y; o++)
          s[o](0);
        t.length = 0;
      } else if (a.tag === 0)
        n = a[0];
      else {
        r = !1;
        for (var u = 0, c = t, l = t.length; u < l; u++)
          c[u](a);
      }
    }), i(gt((a) => {
      if (a === 1) {
        var o = t.indexOf(i);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || n(1);
      } else
        r || (r = !0, n(0));
    }));
  };
}
function Xu(e) {
  return (t) => (n) => {
    var r = ut, i = ut, a = !1, o = !1, s = !1, y = !1;
    t((u) => {
      y || (u === 0 ? (y = !0, s || n(0)) : u.tag === 0 ? r = u[0] : (s && (i(1), i = ut), a ? a = !1 : (a = !0, r(0)), function(l) {
        s = !0, l((p) => {
          s && (p === 0 ? (s = !1, y ? n(0) : a || (a = !0, r(0))) : p.tag === 0 ? (o = !1, (i = p[0])(0)) : (n(p), o ? o = !1 : i(0)));
        });
      }(e(u[0]))));
    }), n(gt((u) => {
      u === 1 ? (y || (y = !0, r(1)), s && (s = !1, i(1))) : (!y && !a && (a = !0, r(0)), s && !o && (o = !0, i(0)));
    }));
  };
}
function Xc(e) {
  return (t) => (n) => {
    var r = ut, i = !1, a = 0;
    t((o) => {
      i || (o === 0 ? (i = !0, n(0)) : o.tag === 0 ? e <= 0 ? (i = !0, n(0), o[0](1)) : r = o[0] : a++ < e ? (n(o), !i && a >= e && (i = !0, n(0), r(1))) : n(o));
    }), n(gt((o) => {
      o === 1 && !i ? (i = !0, r(1)) : o === 0 && !i && a < e && r(0);
    }));
  };
}
function Po(e) {
  return (t) => (n) => {
    var r = ut, i = ut, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, i(1), n(0)) : o.tag === 0 ? (r = o[0], e((s) => {
        s === 0 || (s.tag === 0 ? (i = s[0])(0) : (a = !0, i(1), r(1), n(0)));
      })) : n(o));
    }), n(gt((o) => {
      o === 1 && !a ? (a = !0, r(1), i(1)) : a || r(0);
    }));
  };
}
function Zc(e, t) {
  return (n) => (r) => {
    var i = ut, a = !1;
    n((o) => {
      a || (o === 0 ? (a = !0, r(0)) : o.tag === 0 ? (i = o[0], r(o)) : e(o[0]) ? r(o) : (a = !0, t && r(o), r(0), i(1)));
    });
  };
}
function Hp(e) {
  return (t) => e()(t);
}
function xc(e) {
  return (t) => {
    var n = e[Symbol.asyncIterator](), r = !1, i = !1, a = !1, o;
    t(gt(async (s) => {
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
              a = !1, t(br(o.value));
            } catch (y) {
              if (n.throw)
                (r = !!(await n.throw(y)).done) && t(0);
              else
                throw y;
            }
        i = !1;
      }
    }));
  };
}
function zp(e) {
  return e[Symbol.asyncIterator] ? xc(e) : (t) => {
    var n = e[Symbol.iterator](), r = !1, i = !1, a = !1, o;
    t(gt((s) => {
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
              a = !1, t(br(o.value));
            } catch (y) {
              if (n.throw)
                (r = !!n.throw(y).done) && t(0);
              else
                throw y;
            }
        i = !1;
      }
    }));
  };
}
var Qp = zp;
function nr(e) {
  return (t) => {
    var n = !1;
    t(gt((r) => {
      r === 1 ? n = !0 : n || (n = !0, t(br(e)), t(0));
    }));
  };
}
function So(e) {
  return (t) => {
    var n = !1, r = e({
      next(i) {
        n || t(br(i));
      },
      complete() {
        n || (n = !0, t(0));
      }
    });
    t(gt((i) => {
      i === 1 && !n && (n = !0, r());
    }));
  };
}
function Zu() {
  var e, t;
  return {
    source: sr(So((n) => (e = n.next, t = n.complete, Oo))),
    next(n) {
      e && e(n);
    },
    complete() {
      t && t();
    }
  };
}
function xu(e) {
  return So((t) => (e.then((n) => {
    Promise.resolve(n).then(() => {
      t.next(n), t.complete();
    });
  }), Oo));
}
function Zt(e) {
  return (t) => {
    var n = ut, r = !1;
    return t((i) => {
      i === 0 ? r = !0 : i.tag === 0 ? (n = i[0])(0) : r || (e(i[0]), n(0));
    }), {
      unsubscribe() {
        r || (r = !0, n(1));
      }
    };
  };
}
function Kp(e) {
  Zt((t) => {
  })(e);
}
function Yp(e) {
  return new Promise((t) => {
    var n = ut, r;
    e((i) => {
      i === 0 ? Promise.resolve(r).then(t) : i.tag === 0 ? (n = i[0])(0) : (r = i[0], n(0));
    });
  });
}
var Jp = (...e) => {
  for (var t = e[0], n = 1, r = e.length; n < r; n++)
    t = e[n](t);
  return t;
}, Xp = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new qa(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new qa(e);
class _r extends Error {
  constructor(t) {
    var n = (t.graphQLErrors || []).map(Xp), r = ((i, a) => {
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
var Wa = (e, t) => {
  for (var n = 0 | (t || 5381), r = 0, i = 0 | e.length; r < i; r++)
    n = (n << 5) + n + e.charCodeAt(r);
  return n;
}, Jt = /* @__PURE__ */ new Set(), es = /* @__PURE__ */ new WeakMap(), hn = (e) => {
  if (e === null || Jt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return hn(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var n of e)
      t.length > 1 && (t += ","), t += hn(n) || "null";
    return t += "]";
  } else if (ai !== Tn && e instanceof ai || oi !== Tn && e instanceof oi)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var i = es.get(e) || Math.random().toString(36).slice(2);
    return es.set(e, i), hn({
      __key: i
    });
  }
  Jt.add(e);
  var a = "{";
  for (var o of r) {
    var s = hn(e[o]);
    s && (a.length > 1 && (a += ","), a += hn(o) + ":" + s);
  }
  return Jt.delete(e), a += "}";
}, Ha = (e, t, n) => {
  if (!(n == null || typeof n != "object" || n.toJSON || Jt.has(n)))
    if (Array.isArray(n))
      for (var r = 0, i = n.length; r < i; r++)
        Ha(e, `${t}.${r}`, n[r]);
    else if (n instanceof ai || n instanceof oi)
      e.set(t, n);
    else {
      Jt.add(n);
      for (var a of Object.keys(n))
        Ha(e, `${t}.${a}`, n[a]);
    }
}, ii = (e) => (Jt.clear(), hn(e));
class Tn {
}
var ai = typeof File < "u" ? File : Tn, oi = typeof Blob < "u" ? Blob : Tn, Zp = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, xp = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, eh = (e, t) => t % 2 == 0 ? e.replace(xp, `
`) : e, ts = (e) => e.split(Zp).map(eh).join("").trim(), ns = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map(), Eo = (e) => {
  var t;
  return typeof e == "string" ? t = ts(e) : e.loc && Kr.get(e.__key) === e ? t = e.loc.source.body : (t = ns.get(e) || ts(lt(e)), ns.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, rs = (e) => {
  var t = Wa(Eo(e));
  if (e.definitions) {
    var n = tl(e);
    n && (t = Wa(`
# ${n}`, t));
  }
  return t;
}, el = (e) => {
  var t, n;
  return typeof e == "string" ? (t = rs(e), n = Kr.get(t) || Vp(e)) : (t = e.__key || rs(e), n = Kr.get(t) || e), n.loc || Eo(n), n.__key = t, Kr.set(t, n), n;
}, Yr = (e, t, n) => {
  var r = t || {}, i = el(e), a = ii(r), o = i.__key;
  return a !== "{}" && (o = Wa(a, o)), {
    key: o,
    query: i,
    variables: r,
    extensions: n
  };
}, tl = (e) => {
  for (var t of e.definitions)
    if (t.kind === mn.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, th = (e) => {
  for (var t of e.definitions)
    if (t.kind === mn.OPERATION_DEFINITION)
      return t.operation;
}, za = (e, t, n) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var r = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new _r({
      graphQLErrors: t.errors,
      response: n
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? r : t.hasNext,
    stale: !1
  };
}, Qa = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var n of Object.keys(t))
      e[n] = Qa(e[n], t[n]);
    return e;
  }
  return t;
}, Ka = (e, t, n) => {
  var r = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, o = t.incremental;
  "path" in t && (o = [t]);
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
          c[h + d] = Qa(c[h + d], y.items[d]);
      else
        y.data !== void 0 && (c[u] = Qa(c[u], y.data));
    }
  else
    s.data = t.data || e.data, r = t.errors || r;
  return {
    operation: e.operation,
    data: s.data,
    error: r.length ? new _r({
      graphQLErrors: r,
      response: n
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, nl = (e, t, n) => ({
  operation: e,
  data: void 0,
  error: new _r({
    networkError: t,
    response: n
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function rl(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Eo(e.query),
    operationName: tl(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var nh = (e, t) => {
  var n = e.kind === "query" && e.context.preferGetMethod;
  if (!n || !t)
    return e.context.url;
  var r = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && r.searchParams.set(i, typeof a == "object" ? ii(a) : a);
  }
  var o = r.toString();
  return o.length > 2047 && n !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, rh = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var n = ii(t), r = ((s) => {
      var y = /* @__PURE__ */ new Map();
      return (ai !== Tn || oi !== Tn) && (Jt.clear(), Ha(y, "variables", s)), y;
    })(t.variables);
    if (r.size) {
      var i = new FormData();
      i.append("operations", n), i.append("map", ii({
        ...[...r.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of r.values())
        i.append("" + a++, o);
      return i;
    }
    return n;
  }
}, ih = (e, t) => {
  var n = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, r = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (r.headers)
    for (var i in r.headers)
      n[i.toLowerCase()] = r.headers[i];
  var a = rh(e, t);
  return typeof a == "string" && !n["content-type"] && (n["content-type"] = "application/json"), {
    ...r,
    method: a ? "POST" : "GET",
    body: a,
    headers: n
  };
}, ah = typeof TextDecoder < "u" ? new TextDecoder() : null, oh = /boundary="?([^=";]+)"?/i, uh = /data: ?([^\n]+)/, is = (e) => e.constructor.name === "Buffer" ? e.toString() : ah.decode(e);
async function* as(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield is(t);
  else {
    var n = e.body.getReader(), r;
    try {
      for (; !(r = await n.read()).done; )
        yield is(r.value);
    } finally {
      n.cancel();
    }
  }
}
async function* os(e, t) {
  var n = "", r;
  for await (var i of e)
    for (n += i; (r = n.indexOf(t)) > -1; )
      yield n.slice(0, r), n = n.slice(r + t.length);
}
async function* sh(e, t, n) {
  var r = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, n)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (c, l) {
        var p = c.match(oh), h = "--" + (p ? p[1] : "-"), d = !0, f;
        for await (var v of os(as(l), `\r
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
          } catch (g) {
            if (!f)
              throw g;
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
        for await (var p of os(as(c), `

`)) {
          var h = p.match(uh);
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
      i = i ? Ka(i, y, a) : za(e, y, a), r = !1, yield i, r = !0;
    i || (yield i = za(e, {}, a));
  } catch (u) {
    if (!r)
      throw u;
    yield nl(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : u, a);
  }
}
function ch(e, t, n) {
  var r;
  return typeof AbortController < "u" && (n.signal = (r = new AbortController()).signal), Ao(() => {
    r && r.abort();
  })(Ve((i) => !!i)(xc(sh(e, t, n))));
}
var Ya = (e, t) => {
  if (Array.isArray(e))
    for (var n of e)
      Ya(n, t);
  else if (typeof e == "object" && e !== null)
    for (var r in e)
      r === "__typename" && typeof e[r] == "string" ? t.add(e[r]) : Ya(e[r], t);
  return t;
}, Ja = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var n = [];
    for (var r of e.definitions) {
      var i = Ja(r);
      t = t || i !== r, n.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: n
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === mn.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === mn.FIELD && s.name.value === "__typename" && !s.alias;
        var y = Ja(s);
        t = t || y !== s, a.push(y);
      }
      if (o || (t = !0, a.push({
        kind: mn.FIELD,
        name: {
          kind: mn.NAME,
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
}, us = /* @__PURE__ */ new Map(), lh = (e) => {
  var t = el(e), n = us.get(t.__key);
  return n || (us.set(t.__key, n = Ja(t)), Object.defineProperty(n, "__key", {
    value: t.__key,
    enumerable: !1
  })), n;
}, Xa = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => Xa(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var n = {};
    for (var r in e)
      r === "__typename" ? Object.defineProperty(n, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : n[r] = Xa(e[r]);
    return n;
  } else
    return e;
};
function ss(e) {
  var t = (n) => e(n);
  return t.toPromise = () => Yp(Xc(1)(Ve((n) => !n.stale && !n.hasNext)(t))), t.then = (n, r) => t.toPromise().then(n, r), t.subscribe = (n) => Zt(n)(t), t;
}
function wn(e, t, n) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...n
    } : n || t.context
  };
}
var cs = (e, t) => wn(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), fh = () => {
}, Ji = ({ kind: e }) => e !== "mutation" && e !== "query", dh = ({ forward: e, client: t, dispatchDebug: n }) => {
  var r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (s) => {
    var y = wn(s.kind, s);
    return y.query = lh(s.query), y;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || r.has(s.key));
  return (s) => {
    var y = On((c) => {
      var l = r.get(c.key);
      process.env.NODE_ENV !== "production" && n({
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
        operation: process.env.NODE_ENV !== "production" ? cs(c, {
          cacheOutcome: l ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (p.stale = !0, ls(t, c)), p;
    })(Ve((c) => !Ji(c) && o(c))(s)), u = En((c) => {
      var { operation: l } = c;
      if (l) {
        var p = l.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (p = ((P) => [...Ya(P, /* @__PURE__ */ new Set())])(c.data).concat(p)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var h = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && n({
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
          for (var g of h.values())
            r.has(g) && (l = r.get(g).operation, r.delete(g), ls(t, l));
        } else if (l.kind === "query" && c.data) {
          r.set(l.key, c);
          for (var O = 0; O < p.length; O++) {
            var _ = p[O], T = i.get(_);
            T || i.set(_, T = /* @__PURE__ */ new Set()), T.add(l.key);
          }
        }
      }
    })(e(Ve((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(On((c) => process.env.NODE_ENV !== "production" ? cs(c, {
      cacheOutcome: "miss"
    }) : c)(Sn([On(a)(Ve((c) => !Ji(c) && !o(c))(s)), Ve((c) => Ji(c))(s)])))));
    return Sn([y, u]);
  };
}, ls = (e, t) => e.reexecuteOperation(wn(t.kind, t, {
  requestPolicy: "network-only"
})), Xi = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: n }) => ({ client: r, forward: i }) => {
  var a = n || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = ur((u) => {
      var { key: c } = u, l = Ve((p) => p.kind === "teardown" && p.key === c)(o);
      return Po(l)(((p) => {
        var h = e(rl(p), p);
        return So(({ next: d, complete: f }) => {
          var v = !1, m, g;
          return Promise.resolve().then(() => {
            v || (m = h.subscribe({
              next(O) {
                d(g = g ? Ka(g, O) : za(p, O));
              },
              error(O) {
                d(nl(p, O));
              },
              complete() {
                v || (v = !0, p.kind === "subscription" && r.reexecuteOperation(wn("teardown", p, p.context)), g && g.hasNext && d(Ka(g, {
                  hasNext: !1
                })), f());
              }
            }));
          }), () => {
            v = !0, m && m.unsubscribe();
          };
        });
      })(u));
    })(Ve((u) => u.kind !== "teardown" && a(u))(o)), y = i(Ve((u) => u.kind === "teardown" || !a(u))(o));
    return Sn([s, y]);
  };
}, ph = ({ forward: e, dispatchDebug: t }) => (n) => {
  var r = ur((a) => {
    var o = rl(a), s = nh(a, o), y = ih(a, o);
    process.env.NODE_ENV !== "production" && t({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: a,
      data: {
        url: s,
        fetchOptions: y
      },
      source: "fetchExchange"
    });
    var u = Po(Ve((c) => c.kind === "teardown" && c.key === a.key)(n))(ch(a, s, y));
    return process.env.NODE_ENV !== "production" ? En((c) => {
      var l = c.data ? void 0 : c.error;
      process.env.NODE_ENV !== "production" && t({
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
  })(Ve((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(n)), i = e(Ve((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(n));
  return Sn([r, i]);
}, hh = (e) => ({ client: t, forward: n, dispatchDebug: r }) => e.reduceRight((i, a) => {
  var o = !1;
  return a({
    client: t,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return sr(i(sr(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && r({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, n), il = ({ onOperation: e, onResult: t, onError: n }) => ({ forward: r }) => (i) => ur((a) => {
  n && a.error && n(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? xu(o) : nr(o);
})(r(ur((a) => {
  var o = e && e(a) || a;
  return "then" in o ? xu(o) : nr(o);
})(i))), yh = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = En((n) => {
  if (n.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var r = `No exchange has handled operations of kind "${n.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: r,
      operation: n,
      source: "fallbackExchange"
    }), console.warn(r);
  }
})(t)), Ve((n) => !1)(t)), fs = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var n = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, y = Zu();
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
    var T = Po(Ve((P) => P.kind === "teardown" && P.key === _.key)(y.source))(Ve((P) => P.operation.kind === _.kind && P.operation.key === _.key && (!P.operation.context._instance || P.operation.context._instance === _.context._instance))(O));
    return _.kind !== "query" ? T = Zc((P) => !!P.hasNext, !0)(T) : T = Xu((P) => {
      var E = nr(P);
      return P.stale || P.hasNext ? E : Sn([E, On(() => (P.stale = !0, P))(Xc(1)(Ve((S) => S.key === _.key)(y.source)))]);
    })(T), _.kind !== "mutation" ? T = Ao(() => {
      a.delete(_.key), r.delete(_.key), i.delete(_.key), c = !1;
      for (var P = o.length - 1; P >= 0; P--)
        o[P].key === _.key && o.splice(P, 1);
      u(wn("teardown", _, _.context));
    })(En((P) => {
      if (P.stale) {
        for (var E of o)
          if (E.key === P.operation.key) {
            a.delete(E.key);
            break;
          }
      } else
        P.hasNext || a.delete(_.key);
      r.set(_.key, P);
    })(T)) : T = Ju(() => {
      u(_);
    })(T), t.maskTypename && (T = On((P) => ({
      ...P,
      data: Xa(P.data, !0)
    }))(T)), sr(T);
  }, h = this instanceof e ? this : Object.create(e.prototype), d = Object.assign(h, {
    suspense: !!t.suspense,
    operations$: y.source,
    reexecuteOperation(_) {
      _.kind === "teardown" ? l(_) : (_.kind === "mutation" || i.has(_.key)) && (o.push(_), Promise.resolve().then(l));
    },
    createRequestOperation(_, T, P) {
      P || (P = {});
      var E;
      if (process.env.NODE_ENV !== "production" && _ !== "teardown" && (E = th(T.query)) !== _)
        throw new Error(`Expected operation of type "${_}" but found "${E}"`);
      return wn(_, T, {
        _instance: _ === "mutation" ? n = n + 1 | 0 : void 0,
        ...s,
        ...P,
        requestPolicy: P.requestPolicy || s.requestPolicy,
        suspense: P.suspense || P.suspense !== !1 && d.suspense
      });
    },
    executeRequestOperation(_) {
      return _.kind === "mutation" ? ss(p(_)) : ss(Hp(() => {
        var T = i.get(_.key);
        T || i.set(_.key, T = p(_)), T = Ju(() => {
          l(_);
        })(T);
        var P = r.get(_.key);
        return _.kind === "query" && P && (P.stale || P.hasNext) ? Xu(nr)(Sn([T, Ve((E) => E === r.get(_.key))(nr(P))])) : T;
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
      return Zt((S) => {
        E = S;
      })(d.query(_, T, P)).unsubscribe(), E;
    },
    query: (_, T, P) => d.executeQuery(Yr(_, T), P),
    subscription: (_, T, P) => d.executeSubscription(Yr(_, T), P),
    mutation: (_, T, P) => d.executeMutation(Yr(_, T), P)
  }), f = fh;
  if (process.env.NODE_ENV !== "production") {
    var { next: v, source: m } = Zu();
    d.subscribeToDebugTarget = (_) => Zt(_)(m), f = v;
  }
  var g = hh(t.exchanges), O = sr(g({
    client: d,
    dispatchDebug: f,
    forward: yh({
      dispatchDebug: f
    })
  })(y.source));
  return Kp(O), d;
};
function Ke(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function zt(e) {
  return Ke(e) === "object";
}
function vh(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function ds(e, t) {
  return e.length < 124 ? e : t;
}
const mh = "graphql-transport-ws";
var Qe;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(Qe || (Qe = {}));
var je;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(je || (je = {}));
function al(e) {
  if (!zt(e))
    throw new Error(`Message is expected to be an object, but got ${Ke(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${Ke(e.type)}`);
  switch (e.type) {
    case je.ConnectionInit:
    case je.ConnectionAck:
    case je.Ping:
    case je.Pong: {
      if (e.payload != null && !zt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case je.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ke(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!zt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ke(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Ke(e.payload.query)}`);
      if (e.payload.variables != null && !zt(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Ke(e.payload.variables)}`);
      if (e.payload.operationName != null && Ke(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Ke(e.payload.operationName)}`);
      if (e.payload.extensions != null && !zt(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Ke(e.payload.extensions)}`);
      break;
    }
    case je.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ke(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!zt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ke(e.payload)}`);
      break;
    }
    case je.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ke(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!vh(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case je.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ke(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function gh(e, t) {
  return al(typeof e == "string" ? JSON.parse(e, t) : e);
}
function zn(e, t) {
  return al(e), JSON.stringify(e, t);
}
function bh(e) {
  const {
    url: t,
    connectionParams: n,
    lazy: r = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: s,
    connectionAckWaitTimeout: y = 0,
    retryAttempts: u = 5,
    retryWait: c = async function(V) {
      let W = 1e3;
      for (let F = 0; F < V; F++)
        W *= 2;
      await new Promise((F) => setTimeout(F, W + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: l = Dr,
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
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (V) => {
        const W = Math.random() * 16 | 0;
        return (V == "x" ? W : W & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: v,
    jsonMessageReviver: m
  } = e;
  let g;
  if (d) {
    if (!Oh(d))
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
      const W = {};
      return {
        on(F, J) {
          return W[F] = J, () => {
            delete W[F];
          };
        },
        emit(F) {
          var J;
          "id" in F && ((J = W[F.id]) === null || J === void 0 || J.call(W, F));
        }
      };
    })(), V = {
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
      on(W, F) {
        const J = V[W];
        return J.push(F), () => {
          J.splice(J.indexOf(F), 1);
        };
      },
      emit(W, ...F) {
        for (const J of [...V[W]])
          J(...F);
      }
    };
  })();
  function T(D) {
    const V = [
      // errors are fatal and more critical than close events, throw them first
      _.on("error", (W) => {
        V.forEach((F) => F()), D(W);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      _.on("closed", (W) => {
        V.forEach((F) => F()), D(W);
      })
    ];
  }
  let P, E = 0, S, w = !1, I = 0, C = !1;
  async function k() {
    clearTimeout(S);
    const [D, V] = await (P ?? (P = new Promise((J, he) => (async () => {
      if (w) {
        if (await c(I), !E)
          return P = void 0, he({ code: 1e3, reason: "All Subscriptions Gone" });
        I++;
      }
      _.emit("connecting");
      const H = new O(typeof t == "function" ? await t() : t, mh);
      let Oe, z;
      function ne() {
        isFinite(o) && o > 0 && (clearTimeout(z), z = setTimeout(() => {
          H.readyState === O.OPEN && (H.send(zn({ type: je.Ping })), _.emit("ping", !1, void 0));
        }, o));
      }
      T((ue) => {
        P = void 0, clearTimeout(Oe), clearTimeout(z), he(ue), Dr(ue) && ue.code === 4499 && (H.close(4499, "Terminated"), H.onerror = null, H.onclose = null);
      }), H.onerror = (ue) => _.emit("error", ue), H.onclose = (ue) => _.emit("closed", ue), H.onopen = async () => {
        try {
          _.emit("opened", H);
          const ue = typeof n == "function" ? await n() : n;
          if (H.readyState !== O.OPEN)
            return;
          H.send(zn(ue ? {
            type: je.ConnectionInit,
            payload: ue
          } : {
            type: je.ConnectionInit
            // payload is completely absent if not provided
          }, v)), isFinite(y) && y > 0 && (Oe = setTimeout(() => {
            H.close(Qe.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, y)), ne();
        } catch (ue) {
          _.emit("error", ue), H.close(Qe.InternalClientError, ds(ue instanceof Error ? ue.message : new Error(ue).message, "Internal client error"));
        }
      };
      let ye = !1;
      H.onmessage = ({ data: ue }) => {
        try {
          const K = gh(ue, m);
          if (_.emit("message", K), K.type === "ping" || K.type === "pong") {
            _.emit(K.type, !0, K.payload), K.type === "pong" ? ne() : s || (H.send(zn(K.payload ? {
              type: je.Pong,
              payload: K.payload
            } : {
              type: je.Pong
              // payload is completely absent if not provided
            })), _.emit("pong", !1, K.payload));
            return;
          }
          if (ye)
            return;
          if (K.type !== je.ConnectionAck)
            throw new Error(`First message cannot be of type ${K.type}`);
          clearTimeout(Oe), ye = !0, _.emit("connected", H, K.payload), w = !1, I = 0, J([
            H,
            new Promise((Re, Ae) => T(Ae))
          ]);
        } catch (K) {
          H.onmessage = null, _.emit("error", K), H.close(Qe.BadResponse, ds(K instanceof Error ? K.message : new Error(K).message, "Bad response"));
        }
      };
    })())));
    D.readyState === O.CLOSING && await V;
    let W = () => {
    };
    const F = new Promise((J) => W = J);
    return [
      D,
      W,
      Promise.race([
        // wait for
        F.then(() => {
          if (!E) {
            const J = () => D.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? S = setTimeout(() => {
              D.readyState === O.OPEN && J();
            }, a) : J();
          }
        }),
        // or
        V
      ])
    ];
  }
  function B(D) {
    if (Dr(D) && (_h(D.code) || [
      Qe.InternalServerError,
      Qe.InternalClientError,
      Qe.BadRequest,
      Qe.BadResponse,
      Qe.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      Qe.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      Qe.SubscriberAlreadyExists,
      Qe.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(D.code)))
      throw D;
    if (C)
      return !1;
    if (Dr(D) && D.code === 1e3)
      return E > 0;
    if (!u || I >= u || !l(D) || p != null && p(D))
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
        } catch (V) {
          return i == null ? void 0 : i(V);
        }
      }
  })(), {
    on: _.on,
    subscribe(D, V) {
      const W = f(D);
      let F = !1, J = !1, he = () => {
        E--, F = !0;
      };
      return (async () => {
        for (E++; ; )
          try {
            const [H, Oe, z] = await k();
            if (F)
              return Oe();
            const ne = _.onMessage(W, (ye) => {
              switch (ye.type) {
                case je.Next: {
                  V.next(ye.payload);
                  return;
                }
                case je.Error: {
                  J = !0, F = !0, V.error(ye.payload), he();
                  return;
                }
                case je.Complete: {
                  F = !0, he();
                  return;
                }
              }
            });
            H.send(zn({
              id: W,
              type: je.Subscribe,
              payload: D
            }, v)), he = () => {
              !F && H.readyState === O.OPEN && H.send(zn({
                id: W,
                type: je.Complete
              }, v)), E--, F = !0, Oe();
            }, await z.finally(ne);
            return;
          } catch (H) {
            if (!B(H))
              return;
          }
      })().then(() => {
        J || V.complete();
      }).catch((H) => {
        V.error(H);
      }), () => {
        F || he();
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
function Dr(e) {
  return zt(e) && "code" in e && "reason" in e;
}
function _h(e) {
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
function Oh(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var yn = null;
typeof WebSocket < "u" ? yn = WebSocket : typeof MozWebSocket < "u" ? yn = MozWebSocket : typeof global < "u" ? yn = global.WebSocket || global.MozWebSocket : typeof window < "u" ? yn = window.WebSocket || window.MozWebSocket : typeof self < "u" && (yn = self.WebSocket || self.MozWebSocket);
const Ah = yn;
function tt(e) {
  if (typeof e != "object")
    return e;
  var t, n, r = Object.prototype.toString.call(e);
  if (r === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      n = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = tt(e[t]));
    } else {
      n = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(n, t, {
          value: tt(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : n[t] = tt(e[t]);
    }
    return n;
  }
  if (r === "[object Array]") {
    for (t = e.length, n = Array(t); t--; )
      n[t] = tt(e[t]);
    return n;
  }
  return r === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    n.add(tt(i));
  }), n) : r === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    n.set(tt(a), tt(i));
  }), n) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : r === "[object DataView]" ? new e.constructor(tt(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var ze;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(ze || (ze = {}));
class Ph {
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
    }), this.__gadget.instantiatedFields = tt(t), this.__gadget.persistedFields = tt(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((r) => this.__gadget.fieldKeysTracker[r] = !0));
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
  hasChanges(t = ze.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const n = t == ze.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((r) => !kr(n[r], this.__gadget.fields[r]));
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
  changes(t, n = ze.SinceLoaded) {
    const i = (typeof t == "string" ? n : t || n) == ze.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = i[t], o = this.__gadget.fields[t], s = !kr(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const s = this.__gadget.fieldKeys[o];
        kr(i[s], this.__gadget.fields[s]) || (a[s] = { current: this.__gadget.fields[s], previous: i[s] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = ze.SinceLoaded) {
    const n = t == ze.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, r = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      kr(n[a], this.__gadget.fields[a]) || (r[a] = this.__gadget.fields[a]);
    }
    return r;
  }
  changed(t, n = ze.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, n).changed : this.hasChanges(t === void 0 ? n : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = ze.SinceLoaded) {
    t == ze.SinceLoaded ? this.__gadget.instantiatedFields = tt(this.__gadget.fields) : t == ze.SinceLastPersisted && (this.__gadget.persistedFields = tt(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = ze.SinceLoaded) {
    let n;
    t == ze.SinceLoaded ? n = Object.keys(this.__gadget.instantiatedFields) : n = Object.keys(this.__gadget.persistedFields);
    for (const r of this.__gadget.fieldKeys)
      n.includes(r) || delete this.__gadget.fields[r];
    t == ze.SinceLoaded ? Object.assign(this.__gadget.fields, tt(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, tt(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return eo({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const ol = Ph;
class ul extends Error {
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
class Za extends Error {
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
class Ei extends Error {
  constructor(t, n) {
    super(t.startsWith("GGT_") ? t : `${n}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
}
class ps extends Error {
  constructor(t) {
    let n;
    xa(t) ? n = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : n = "GraphQL websocket closed unexpectedly by the server", super(n), Object.defineProperty(this, "code", {
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
class Sh extends Error {
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
class Eh extends Error {
  constructor(t, n, r, i) {
    const a = n.slice(0, 3), o = n.length > 3 ? `, and ${n.length - 3} more error${n.length > 4 ? "s" : ""} need${n.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${r ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: s, message: y }) => `${s} ${y}`).join(", ")}${o}.`), Object.defineProperty(this, "code", {
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
class sl extends Error {
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
class cl extends Error {
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
class Th extends Error {
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
function hs(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const In = (e, t) => {
  const n = t.length;
  let r = 0;
  for (; e != null && r < n; )
    e = e[t[r++]];
  return r && r == n ? e : void 0;
}, xa = (e) => (e == null ? void 0 : e.type) == "close", Pt = (e, t) => typeof e != "string" ? "" : Ti(e, t), ys = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ti = (e, t = !0) => {
  let n = "" + e;
  return t ? n = n.replace(/^[a-z\d]*/, (r) => ys(r)) : n = n.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (r) => r.toLowerCase()), n = n.replace(/(?:_|(\/))([a-z\d]*)/gi, (r, i, a, o, s) => (i || (i = ""), "" + i + ys(a))), n;
}, wh = (e) => `${Ti(e)}Sort`, Ih = (e) => `${Ti(e)}Filter`, jh = (e, t, n) => new sl(`More than one record found for ${e}.${t} = ${n}. Please confirm your unique validation is not reporting an error.`), Ch = (e, t) => {
  if (e.fetching)
    return;
  const n = In(e.data, t);
  if (n === void 0)
    return new ul(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (n === null)
    return new cl(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, Ct = (e, t, n = !1) => {
  var r;
  if (e.error)
    throw e.error instanceof _r && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const i = In(e.data, t), a = In(i, ["edges"]), o = a ?? i;
  if (i === void 0)
    throw new ul(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || n && Array.isArray(o) && o.length === 0)
    throw new cl(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, rr = (e, t) => {
  var n;
  if (e.error)
    throw e.error instanceof _r && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const r = In(e.data, t);
  return r ?? null;
}, To = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Eh(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new sl(e.message) : new Ei(e.message, e.code);
}, Kt = (e, t) => {
  const n = Ct(e, t);
  if (!n.success) {
    const r = n.errors && n.errors[0];
    throw r ? To(r) : new Ei("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return n;
}, ll = (e) => {
  var t, n, r, i;
  if (!((n = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || n === void 0) && n.hydrations)
    return new rd((i = (r = e.data) === null || r === void 0 ? void 0 : r.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, ir = (e, t) => {
  const n = ll(e);
  return n && (t = n.apply(t)), new ol(t);
}, wo = (e, t) => {
  const n = ll(e);
  return n && (t = n.apply(t)), t == null ? void 0 : t.map((r) => new ol(r));
}, cr = (e, t) => {
  const n = t.edges.map((r) => r.node);
  return wo(e, n);
}, eo = (e) => {
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
          t[n] = r === void 0 ? null : eo(r);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const n of Object.keys(e)) {
          const r = eo(e[n]);
          r !== void 0 && (t[n] = r);
        }
        return t;
      }
    }
  }
}, Zi = "gstk", vs = (e) => {
  try {
    const t = window[e];
    return t.setItem(Zi, Zi), t.removeItem(Zi), !0;
  } catch {
    return !1;
  }
}, ms = Object.prototype.toString, gs = Object.getPrototypeOf, bs = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, xn = (e, t, n) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (n.indexOf(e) > -1 && n.indexOf(t) > -1)
    return !0;
  const r = ms.call(e), i = ms.call(t);
  let a, o, s;
  if (n.push(e, t), r != i || (a = bs(e), o = bs(t), a.length != o.length || a.some(function(y) {
    return !xn(e[y], t[y], n);
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
        if (s = a.next(), !xn(s.value, o.next().value, n))
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
        if (!(!(s in e) && !(s in t)) && (s in e != s in t || !xn(e[s], t[s], n)))
          return !1;
      return !0;
    case "Object":
      return xn(gs(e), gs(t), n);
    default:
      return !1;
  }
}, kr = (e, t) => xn(e, t, []);
class fl extends Error {
}
class Nh {
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
    throw Ct(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new fl("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Ct(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Ct(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Rh {
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
const Mh = (e) => {
  const t = [...e.definitions].reverse().find((n) => n.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((r) => r.kind == "Field").name.value;
}, _s = il({
  onOperation: (e) => {
    var t, n;
    (t = (n = e.context).operationName) !== null && t !== void 0 || (n.operationName = Mh(e.query) || "unknown");
  }
}), Dh = il({
  onOperation: (e) => {
    e.context.url && e.context.operationName && !e.context.url.includes("?") && (e.context.url += `?operation=${e.context.operationName}`);
  }
}), kh = 2, Lh = 4800, Bh = 1e4, Fh = [Qe.ConnectionAcknowledgementTimeout, Qe.ConnectionInitialisationTimeout], Os = Symbol.for("gadget/connection"), Uh = "token", Vh = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var Me;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(Me || (Me = {}));
class dl {
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
            connectionAckWaitTimeout: Lh,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const h = new fs({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              _s,
              ...this.exchanges.beforeAsync,
              Xi({
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
          h[Os] = this, p = new Nh(h, l), this.currentTransaction = p, await p.start();
          const d = await u(p);
          return await p.commit(), d;
        } catch (h) {
          try {
            p != null && p.open && await p.rollback();
          } catch (d) {
            d instanceof fl || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", d);
          }
          throw xa(h) ? new ps(h) : h;
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
        s = $h(s, (u = this.options.baseRouteURL) !== null && u !== void 0 ? u : this.options.endpoint), this.isGadgetRequest(s) && (y.headers = { ...this.requestHeaders(), ...y.headers }, this.authenticationMode == Me.Custom && await this.options.authenticationMode.custom.processFetch(s, y));
        const c = await this._fetchImplementation(s, y);
        if (this.authenticationMode == Me.BrowserSession) {
          const l = c.headers.get("x-set-authorization"), p = l != null && l.startsWith("Session ") ? l.replace("Session ", "") : null;
          p && this.sessionTokenStore.setItem(this.sessionStorageKey, p);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...s) => {
      const { fetch: y } = await import("./browser-ponyfill-6b66362f.js").then((u) => u.b);
      return await y(...s);
    }, this.websocketImplementation = (r = (n = t.websocketImplementation) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.WebSocket) !== null && r !== void 0 ? r : Ah, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Uh}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = Me.InternalAuthToken : t.apiKey ? this.authenticationMode = Me.APIKey : t.custom && (this.authenticationMode = Me.Custom), this.options.authenticationMode = t), (n = this.authenticationMode) !== null && n !== void 0 || (this.authenticationMode = Me.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = Me.BrowserSession;
    const n = !t || typeof t == "boolean" ? er.Durable : t.storageType;
    let r;
    n == er.Durable && vs("localStorage") ? r = window.localStorage : n == er.Session && vs("sessionStorage") ? r = window.sessionStorage : r = new Rh(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && r.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = r, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let n;
    if (typeof t == "string" ? n = t : typeof t == "object" && "url" in t ? n = t.url : n = String(t), to(this.options.endpoint))
      return !!to(n);
    const r = new URL(this.options.endpoint).host;
    return n.includes(r);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, _s, Dh];
    typeof window < "u" && t.push(dh), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      Xi({
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
      Xi({
        isSubscriptionOperation: (r) => r.query.definitions.some((i) => np(i, r.variables)),
        forwardSubscription: (r) => ({
          subscribe: (i) => {
            const a = { ...r, query: r.query || "" };
            return {
              unsubscribe: Sp(_p(Pp((o) => this.getBaseSubscriptionClient().subscribe(a, o))), i)
            };
          }
        })
      }),
      ph,
      ...this.exchanges.afterAll
    );
    const n = new fs({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return n[Os] = this, n;
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
    return bh({
      url: n,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var r, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == Me.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == Me.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == Me.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == Me.Custom && await ((i = (r = this.options.authenticationMode) === null || r === void 0 ? void 0 : r.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (r, i) => {
          var a, o, s, y, u, c;
          if (this.authenticationMode == Me.BrowserSession && (i != null && i.sessionToken)) {
            const l = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (l !== null && typeof l == "object" ? l.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (y = (s = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || s === void 0 ? void 0 : s.connected) === null || y === void 0 || y.call(s, r, i), (c = (u = t == null ? void 0 : t.on) === null || u === void 0 ? void 0 : u.connected) === null || c === void 0 || c.call(u, r, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const n = {};
    if (this.authenticationMode == Me.InternalAuthToken)
      n.authorization = "Basic " + Vh("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == Me.APIKey)
      n.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == Me.BrowserSession) {
      const r = this.sessionTokenStore.getItem(this.sessionStorageKey);
      r && (n.authorization = `Session ${r}`);
    }
    return n["x-gadget-environment"] = this.environment, n;
  }
  async waitForOpenedConnection(t) {
    let n = this.newSubscriptionClient(t), r = [], i = t.connectionAttempts || kh;
    const a = t.connectionGlobalTimeoutMs || Bh, o = () => {
      r.forEach((s) => s()), r = [];
    };
    return await new Promise((s, y) => {
      const u = setTimeout(() => {
        this.disposeClient(n), l(new Sh("Timeout opening websocket connection to Gadget API"));
      }, a), c = (d) => {
        if (xa(d) && Fh.includes(d.code) && i > 0) {
          i -= 1, this.disposeClient(n), n = this.newSubscriptionClient(t), h();
          return;
        }
        clearTimeout(u), y(new ps(d));
      }, l = (d) => {
        clearTimeout(u), y(d);
      }, p = () => {
        clearTimeout(u), s(n);
      }, h = () => {
        o(), r.push(n.on("connected", p)), r.push(n.on("closed", c)), r.push(n.on("error", l));
      };
      h();
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
Object.defineProperty(dl, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.9"
});
function $h(e, t) {
  if (typeof e != "string")
    return e;
  if (to(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function to(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class jn extends Array {
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
    const i = new jn();
    return i.push(...n), i.modelManager = t, i.pagination = r, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Ei("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new Za("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new Za("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: n, last: r, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: r || n
    });
  }
}
const no = (e) => Object.entries(e).flatMap(([t, n]) => {
  if (typeof n == "boolean")
    return n ? t : !1;
  if (n instanceof jo) {
    let r = "";
    const i = Object.entries(n.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof Co ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return i.length > 0 && (r = `(${i.join(", ")})`), n.subselection ? [`${t}${r} {`, ...no(n.subselection), "}"] : `${t}${r}`;
  } else
    return [`${t} {`, ...no(n), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Io = (e) => {
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
    i instanceof jo ? Object.entries(i.args).forEach(([a, o]) => {
      var s;
      o instanceof Co && (t[(s = o.name) !== null && s !== void 0 ? s : n(a)] = o);
    }) : typeof i == "object" && i !== null && Object.assign(t, Io(i));
  }), t;
}, Gh = (e) => {
  const t = Io(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([r, i]) => `$${r}: ${i.type}`).join(", ")})`;
};
class jo {
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
class Co {
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
const Bn = (e, t) => new jo(e, t), Be = (e) => new Co(e.type + (e.required ? "!" : ""), e.name, e.value), qh = (e) => {
  var t;
  const n = Gh(e), r = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${n}${r} {
${no(e.fields).join(`
`)}
}`;
}, Fn = (e) => {
  const t = Io(e.fields);
  return {
    query: qh(e),
    variables: Object.entries(t ?? {}).reduce((n, [r, i]) => (typeof i.value < "u" && (n[r] = i.value), n), {})
  };
}, Or = `
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
`, Un = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, Wh = (e) => `
    query InternalFind${Pt(e)}($id: GadgetID!, $select: [String!]) {
      ${Un(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, pl = (e, t) => ({
  search: t != null && t.search ? Be({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? Be({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? Be({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? Be({ value: hl(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), Hh = (e, t) => {
  const n = Pt(e), r = pl(n, t);
  return Fn({
    type: "query",
    name: `InternalFindFirst${n}`,
    fields: {
      internal: {
        [`list${n}`]: Bn({
          ...r,
          first: Be({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, zh = (e, t) => {
  const n = Pt(e), r = pl(n, t);
  return Fn({
    type: "query",
    name: `InternalFindMany${n}`,
    fields: {
      internal: {
        [`list${n}`]: Bn({
          ...r,
          after: Be({ value: t == null ? void 0 : t.after, type: "String" }),
          before: Be({ value: t == null ? void 0 : t.before, type: "String" }),
          first: Be({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: Be({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, Qh = (e) => {
  const t = Pt(e);
  return `
    ${Or}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${Un(e)}
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
}, Kh = (e, t) => {
  const n = Pt(e), r = Pt(t);
  return `
    ${Or}

    mutation InternalBulkCreate${r}($records: [Internal${n}Input]!) {
      ${Un(e)}
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
}, Yh = (e) => {
  const t = Pt(e);
  return `
    ${Or}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${Un(e)}
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
}, Jh = (e) => {
  const t = Pt(e);
  return `
    ${Or}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${Un(e)}
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
}, Xh = (e) => {
  const t = Pt(e);
  return `
    ${Or}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${Un(e)}
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
class ht {
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
    }), this.capitalizedApiIdentifier = Ti(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((r) => r === this.apiIdentifier);
  }
  getRecordFromData(t, n) {
    let r = t;
    if (!this.validateRecord(t))
      throw new Ei(`Invalid arguments found in variables. Did you mean to use ${n}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = await this.connection.currentClient.query(Wh(this.apiIdentifier), { id: t, select: hl(n == null ? void 0 : n.select) }).toPromise(), o = (r ? Ct : rr)(i, ["internal", this.apiIdentifier]);
    return ir(i, o);
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
    const n = zh(this.apiIdentifier, t), r = await this.connection.currentClient.query(n.query, n.variables).toPromise(), i = rr(r, ["internal", `list${this.capitalizedApiIdentifier}`]), a = cr(r, i);
    return jn.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const r = Hh(this.apiIdentifier, t), i = await this.connection.currentClient.query(r.query, r.variables).toPromise();
    let a;
    n === !1 ? a = rr(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = Ct(i, ["internal", `list${this.capitalizedApiIdentifier}`], n);
    const o = cr(i, a);
    return jn.boot(this, o, { options: t, pageInfo: a.pageInfo })[0];
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
    const n = await this.connection.currentClient.mutation(Qh(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), r = Kt(n, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return ir(n, r[this.apiIdentifier]);
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
      throw new Za("Cannot perform bulkCreate without a pluralApiIdentifier");
    const r = Pt(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(Kh(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = Kt(i, ["internal", `bulkCreate${r}`]);
    return wo(i, a[this.options.pluralApiIdentifier]);
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
    hs(t, "Can't update a record without an ID passed");
    const r = await this.connection.currentClient.mutation(Yh(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(n, "update")
    }).toPromise(), i = Kt(r, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return ir(r, i[this.apiIdentifier]);
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
    hs(t, "Can't delete a record without an ID");
    const n = await this.connection.currentClient.mutation(Jh(this.apiIdentifier), { id: t }).toPromise();
    Kt(n, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const n = await this.connection.currentClient.mutation(Xh(this.apiIdentifier), t).toPromise();
    Kt(n, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function hl(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [n, r] of Object.entries(e))
    r && t.push(n);
  return t;
}
const No = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Ro = (e, t = !1) => {
  const n = { ...e };
  return t && (n.__typename = !0), n;
}, wi = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, Zh = (e, t, n, r, i) => {
  const a = {};
  return typeof t < "u" && (a.id = Be({ type: "GadgetID!", value: t })), Fn({
    type: "query",
    name: e,
    fields: {
      [e]: Bn(a, Ro((i == null ? void 0 : i.select) || n, !0)),
      ...No(r)
    },
    directives: wi(i)
  });
}, xh = (e, t, n, r, i, a) => Mo(e, r, i, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: n
    }
  }
}), Mo = (e, t, n, r) => Fn({
  type: "query",
  name: e,
  fields: {
    [e]: Bn({
      after: Be({ value: r == null ? void 0 : r.after, type: "String" }),
      first: Be({ value: r == null ? void 0 : r.first, type: "Int" }),
      before: Be({ value: r == null ? void 0 : r.before, type: "String" }),
      last: Be({ value: r == null ? void 0 : r.last, type: "Int" }),
      sort: r != null && r.sort ? Be({ value: r.sort, type: `[${wh(n)}!]` }) : void 0,
      filter: r != null && r.filter ? Be({ value: r.filter, type: `[${Ih(n)}!]` }) : void 0,
      search: r != null && r.search ? Be({ value: r.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Ro((r == null ? void 0 : r.select) || t, !0)
      }
    }),
    ...No(n)
  },
  directives: wi(r)
}), yl = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, vl = (e) => Object.fromEntries(Object.entries(e).map(([t, n]) => [t, Be(n)])), ey = (e, t, n, r, i, a, o, s, y) => {
  const u = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: Bn(vl(i), {
      success: !0,
      errors: yl,
      [r]: u && !y ? Ro(u, !0) : !1,
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
      ...No(n)
    },
    directives: wi(a)
  };
  return Fn(l);
}, ty = (e, t, n, r) => {
  let i = {
    [e]: Bn(vl(t), {
      success: !0,
      errors: yl,
      result: !0
    })
  };
  return n && (i = {
    [n]: i
  }), Fn({
    type: "mutation",
    name: e,
    fields: i,
    directives: wi(r)
  });
}, Ee = async (e, t, n, r, i, a, o = !0) => {
  const s = Zh(t, n, r, i, a), y = await e.connection.currentClient.query(s.query, s.variables).toPromise(), c = (o ? Ct : rr)(y, [t]);
  return ir(y, c);
}, Ii = async (e, t, n, r, i, a, o) => {
  const s = xh(t, n, r, i, a, o), y = await e.connection.currentClient.query(s.query, s.variables).toPromise(), u = Ct(y, [t]), c = cr(y, u);
  if (c.length > 1)
    throw jh(a, n, r);
  return c[0];
}, ae = async (e, t, n, r, i, a) => {
  const o = Mo(t, n, r, i), s = await e.connection.currentClient.query(o.query, o.variables).toPromise();
  let y;
  a === !1 ? y = rr(s, [t]) : y = Ct(s, [t], a);
  const u = cr(s, y);
  return jn.boot(e, u, { options: i, pageInfo: y.pageInfo });
}, q = async (e, t, n, r, i, a, o, s, y, u) => {
  const c = ey(t, n, r, i, o, s, y, a, u), l = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), p = y ? [y, t] : [t];
  if (a) {
    const h = In(l.data, p), d = h[i] && n ? wo(l, h[i]) : void 0;
    if (h.errors) {
      const f = h.errors.map((v) => To(v));
      throw new Th(f, d);
    }
    return d;
  } else {
    const h = Kt(l, p);
    return n == null ? void 0 : u ? h.result : ir(l, h[i]);
  }
}, ny = async (e, t, n, r) => {
  const i = ty(t, n, r), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return Kt(a, r ? [r, t] : [t]).result;
};
function be(e, t, n = {}, r) {
  var o;
  if (e.hasAmbiguousIdentifier && Object.keys(n).some((s) => {
    var y;
    return !((y = e.paramOnlyVariables) != null && y.includes(s)) && s !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let i;
  const a = Object.entries(e.variables).find(([s, y]) => s === "id" && y.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in n && typeof n[e.modelApiIdentifier] == "object" && n[e.modelApiIdentifier] !== null || !r[e.modelApiIdentifier])
      i = n;
    else {
      i = {
        [e.modelApiIdentifier]: {}
      };
      for (const [s, y] of Object.entries(n))
        (o = e.paramOnlyVariables) != null && o.includes(s) ? i[s] = y : a && s === a[0] ? i.id = y : i[e.modelApiIdentifier][s] = y;
    }
  else
    i = n;
  return i.id ?? (i.id = t), i;
}
const De = {
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
async function ry(e, t) {
  const n = be(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await q(
    this,
    "createUser",
    De,
    "user",
    "user",
    !1,
    {
      user: {
        value: n.user,
        required: !1,
        type: "CreateUserInput"
      }
    },
    t,
    null,
    !1
  );
}
async function iy(e, t, n) {
  const r = be(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await q(
    this,
    "updateUser",
    De,
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
    n,
    null,
    !1
  );
}
async function ay(e, t) {
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
    null,
    !1
  );
}
async function oy(e, t) {
  const n = be(
    this.signUp,
    void 0,
    e,
    this.signUp.variables
  );
  return await q(
    this,
    "signUpUser",
    De,
    "user",
    "user",
    !1,
    {
      user: {
        value: n.user,
        required: !1,
        type: "SignUpUserInput"
      }
    },
    t,
    null,
    !1
  );
}
class uy {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await Ee(
        this,
        "user",
        n,
        De,
        "user",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await Ee(
          this,
          "user",
          n,
          De,
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
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await ae(
        this,
        "users",
        De,
        "user",
        n
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await ae(
        this,
        "users",
        De,
        "user",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await ae(
          this,
          "users",
          De,
          "user",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findByEmail = Object.assign(
      async (n, r) => await Ii(
        this,
        "users",
        "email",
        n,
        De,
        "user",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: De,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      ry,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: De,
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
      iy,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
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
      ay,
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
      async (n, r) => await q(
        this,
        "bulkDeleteUsers",
        null,
        "user",
        "users",
        !0,
        {
          ids: {
            value: n,
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
      oy,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: De,
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
const Ye = {
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
async function sy(e, t) {
  const n = be(
    this.logInViaEmail,
    void 0,
    e,
    this.logInViaEmail.variables
  );
  return await q(
    this,
    "logInViaEmail",
    Ye,
    "session",
    "session",
    !1,
    {
      email: {
        value: n.email,
        required: !1,
        type: "String"
      },
      password: {
        value: n.password,
        required: !1,
        type: "String"
      }
    },
    t,
    "currentSession",
    !1
  );
}
async function cy(e) {
  return await q(
    this,
    "logOut",
    Ye,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
class ly {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await Ee(
        this,
        "session",
        n,
        Ye,
        "session",
        r
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
      async (n, r) => {
        const i = await Ee(
          this,
          "session",
          n,
          Ye,
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
        defaultSelection: Ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await ae(
        this,
        "sessions",
        Ye,
        "session",
        n
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
      async (n) => (await ae(
        this,
        "sessions",
        Ye,
        "session",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (n) => {
        const r = await ae(
          this,
          "sessions",
          Ye,
          "session",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
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
    ), this.logInViaEmail = Object.assign(
      sy,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.logOut = Object.assign(
      cy,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
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
};
async function fy(e, t) {
  const n = be(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await q(
    this,
    "createShopifyProduct",
    Je,
    "shopifyProduct",
    "shopifyProduct",
    !1,
    {
      shopifyProduct: {
        value: n.shopifyProduct,
        required: !1,
        type: "CreateShopifyProductInput"
      }
    },
    t,
    null,
    !1
  );
}
async function dy(e, t, n) {
  const r = be(
    this.update,
    e,
    t,
    this.update.variables
  );
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
        value: r.shopifyProduct,
        required: !1,
        type: "UpdateShopifyProductInput"
      }
    },
    n,
    null,
    !1
  );
}
async function py(e, t) {
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
    null,
    !1
  );
}
class hy {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await Ee(
        this,
        "shopifyProduct",
        n,
        Je,
        "shopifyProduct",
        r
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
      async (n, r) => {
        const i = await Ee(
          this,
          "shopifyProduct",
          n,
          Je,
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
        defaultSelection: Je,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await ae(
        this,
        "shopifyProducts",
        Je,
        "shopifyProduct",
        n
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
      async (n) => (await ae(
        this,
        "shopifyProducts",
        Je,
        "shopifyProduct",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (n) => {
        const r = await ae(
          this,
          "shopifyProducts",
          Je,
          "shopifyProduct",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
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
    ), this.create = Object.assign(
      fy,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      dy,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      py,
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
      async (n, r) => await q(
        this,
        "bulkDeleteShopifyProducts",
        null,
        "shopifyProduct",
        "shopifyProducts",
        !0,
        {
          ids: {
            value: n,
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
};
async function yy(e, t) {
  const n = be(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await q(
    this,
    "createShopifyProductImage",
    Xe,
    "shopifyProductImage",
    "shopifyProductImage",
    !1,
    {
      shopifyProductImage: {
        value: n.shopifyProductImage,
        required: !1,
        type: "CreateShopifyProductImageInput"
      }
    },
    t,
    null,
    !1
  );
}
async function vy(e, t, n) {
  const r = be(
    this.update,
    e,
    t,
    this.update.variables
  );
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
        value: r.shopifyProductImage,
        required: !1,
        type: "UpdateShopifyProductImageInput"
      }
    },
    n,
    null,
    !1
  );
}
async function my(e, t) {
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
    null,
    !1
  );
}
class gy {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await Ee(
        this,
        "shopifyProductImage",
        n,
        Xe,
        "shopifyProductImage",
        r
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
      async (n, r) => {
        const i = await Ee(
          this,
          "shopifyProductImage",
          n,
          Xe,
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
        defaultSelection: Xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await ae(
        this,
        "shopifyProductImages",
        Xe,
        "shopifyProductImage",
        n
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
      async (n) => (await ae(
        this,
        "shopifyProductImages",
        Xe,
        "shopifyProductImage",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (n) => {
        const r = await ae(
          this,
          "shopifyProductImages",
          Xe,
          "shopifyProductImage",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
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
    ), this.create = Object.assign(
      yy,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      vy,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      my,
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
      async (n, r) => await q(
        this,
        "bulkDeleteShopifyProductImages",
        null,
        "shopifyProductImage",
        "shopifyProductImages",
        !0,
        {
          ids: {
            value: n,
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
const Ze = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  name: !0,
  position: !0,
  state: !0,
  updatedAt: !0,
  values: !0
};
async function by(e, t) {
  const n = be(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await q(
    this,
    "createShopifyProductOption",
    Ze,
    "shopifyProductOption",
    "shopifyProductOption",
    !1,
    {
      shopifyProductOption: {
        value: n.shopifyProductOption,
        required: !1,
        type: "CreateShopifyProductOptionInput"
      }
    },
    t,
    null,
    !1
  );
}
async function _y(e, t, n) {
  const r = be(
    this.update,
    e,
    t,
    this.update.variables
  );
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
        value: r.shopifyProductOption,
        required: !1,
        type: "UpdateShopifyProductOptionInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Oy(e, t) {
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
    null,
    !1
  );
}
class Ay {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await Ee(
        this,
        "shopifyProductOption",
        n,
        Ze,
        "shopifyProductOption",
        r
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
      async (n, r) => {
        const i = await Ee(
          this,
          "shopifyProductOption",
          n,
          Ze,
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
        defaultSelection: Ze,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await ae(
        this,
        "shopifyProductOptions",
        Ze,
        "shopifyProductOption",
        n
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
      async (n) => (await ae(
        this,
        "shopifyProductOptions",
        Ze,
        "shopifyProductOption",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (n) => {
        const r = await ae(
          this,
          "shopifyProductOptions",
          Ze,
          "shopifyProductOption",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
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
    ), this.create = Object.assign(
      by,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      _y,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Oy,
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
      async (n, r) => await q(
        this,
        "bulkDeleteShopifyProductOptions",
        null,
        "shopifyProductOption",
        "shopifyProductOptions",
        !0,
        {
          ids: {
            value: n,
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
};
async function Py(e, t) {
  const n = be(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await q(
    this,
    "createShopifyProductVariant",
    xe,
    "shopifyProductVariant",
    "shopifyProductVariant",
    !1,
    {
      shopifyProductVariant: {
        value: n.shopifyProductVariant,
        required: !1,
        type: "CreateShopifyProductVariantInput"
      }
    },
    t,
    null,
    !1
  );
}
async function Sy(e, t, n) {
  const r = be(
    this.update,
    e,
    t,
    this.update.variables
  );
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
        value: r.shopifyProductVariant,
        required: !1,
        type: "UpdateShopifyProductVariantInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Ey(e, t) {
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
    null,
    !1
  );
}
class Ty {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await Ee(
        this,
        "shopifyProductVariant",
        n,
        xe,
        "shopifyProductVariant",
        r
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
      async (n, r) => {
        const i = await Ee(
          this,
          "shopifyProductVariant",
          n,
          xe,
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
        defaultSelection: xe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await ae(
        this,
        "shopifyProductVariants",
        xe,
        "shopifyProductVariant",
        n
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
      async (n) => (await ae(
        this,
        "shopifyProductVariants",
        xe,
        "shopifyProductVariant",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (n) => {
        const r = await ae(
          this,
          "shopifyProductVariants",
          xe,
          "shopifyProductVariant",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
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
    ), this.create = Object.assign(
      Py,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Sy,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Ey,
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
      async (n, r) => await q(
        this,
        "bulkDeleteShopifyProductVariants",
        null,
        "shopifyProductVariant",
        "shopifyProductVariants",
        !0,
        {
          ids: {
            value: n,
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
const Le = {
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
async function wy(e, t) {
  const n = be(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await q(
    this,
    "createShopifyShop",
    Le,
    "shopifyShop",
    "shopifyShop",
    !1,
    {
      shopifyShop: {
        value: n.shopifyShop,
        required: !1,
        type: "CreateShopifyShopInput"
      }
    },
    t,
    null,
    !1
  );
}
async function Iy(e, t, n) {
  const r = be(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await q(
    this,
    "updateShopifyShop",
    Le,
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
    n,
    null,
    !1
  );
}
async function jy(e, t) {
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
    null,
    !1
  );
}
async function Cy(e, t, n) {
  const r = be(
    this.uninstall,
    e,
    t,
    this.uninstall.variables
  );
  return await q(
    this,
    "uninstallShopifyShop",
    Le,
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
    n,
    null,
    !1
  );
}
async function Ny(e, t, n) {
  const r = be(
    this.reinstall,
    e,
    t,
    this.reinstall.variables
  );
  return await q(
    this,
    "reinstallShopifyShop",
    Le,
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
    n,
    null,
    !1
  );
}
class Ry {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await Ee(
        this,
        "shopifyShop",
        n,
        Le,
        "shopifyShop",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: Le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await Ee(
          this,
          "shopifyShop",
          n,
          Le,
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
        defaultSelection: Le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await ae(
        this,
        "shopifyShops",
        Le,
        "shopifyShop",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: Le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await ae(
        this,
        "shopifyShops",
        Le,
        "shopifyShop",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: Le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await ae(
          this,
          "shopifyShops",
          Le,
          "shopifyShop",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: Le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      wy,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: Le,
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
      Iy,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
      jy,
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
      async (n, r) => await q(
        this,
        "bulkDeleteShopifyShops",
        null,
        "shopifyShop",
        "shopifyShops",
        !0,
        {
          ids: {
            value: n,
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
      Cy,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
      Ny,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
const et = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  state: !0,
  updatedAt: !0
};
async function My(e, t) {
  const n = be(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await q(
    this,
    "createProductPairing",
    et,
    "productPairing",
    "productPairing",
    !1,
    {
      productPairing: {
        value: n.productPairing,
        required: !1,
        type: "CreateProductPairingInput"
      }
    },
    t,
    null,
    !1
  );
}
async function Dy(e, t, n) {
  const r = be(
    this.update,
    e,
    t,
    this.update.variables
  );
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
        value: r.productPairing,
        required: !1,
        type: "UpdateProductPairingInput"
      }
    },
    n,
    null,
    !1
  );
}
async function ky(e, t) {
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
    null,
    !1
  );
}
class Ly {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await Ee(
        this,
        "productPairing",
        n,
        et,
        "productPairing",
        r
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
      async (n, r) => {
        const i = await Ee(
          this,
          "productPairing",
          n,
          et,
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
        defaultSelection: et,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await ae(
        this,
        "productPairings",
        et,
        "productPairing",
        n
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
      async (n) => (await ae(
        this,
        "productPairings",
        et,
        "productPairing",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (n) => {
        const r = await ae(
          this,
          "productPairings",
          et,
          "productPairing",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
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
    ), this.create = Object.assign(
      My,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Dy,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      ky,
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
      async (n, r) => await q(
        this,
        "bulkDeleteProductPairings",
        null,
        "productPairing",
        "productPairings",
        !0,
        {
          ids: {
            value: n,
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
const ke = {
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
async function By(e, t) {
  const n = be(
    this.run,
    void 0,
    e,
    this.run.variables
  );
  return await q(
    this,
    "runShopifySync",
    ke,
    "shopifySync",
    "shopifySync",
    !1,
    {
      shopifySync: {
        value: n.shopifySync,
        required: !1,
        type: "RunShopifySyncInput"
      },
      startReason: {
        value: n.startReason,
        required: !1,
        type: "String"
      }
    },
    t,
    null,
    !1
  );
}
async function Fy(e, t, n) {
  const r = be(
    this.complete,
    e,
    t,
    this.complete.variables
  );
  return await q(
    this,
    "completeShopifySync",
    ke,
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
    n,
    null,
    !1
  );
}
async function Uy(e, t, n) {
  const r = be(
    this.error,
    e,
    t,
    this.error.variables
  );
  return await q(
    this,
    "errorShopifySync",
    ke,
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
    n,
    null,
    !1
  );
}
class Vy {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await Ee(
        this,
        "shopifySync",
        n,
        ke,
        "shopifySync",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await Ee(
          this,
          "shopifySync",
          n,
          ke,
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
        defaultSelection: ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await ae(
        this,
        "shopifySyncs",
        ke,
        "shopifySync",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await ae(
        this,
        "shopifySyncs",
        ke,
        "shopifySync",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await ae(
          this,
          "shopifySyncs",
          ke,
          "shopifySync",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (n, r) => await Ii(
        this,
        "shopifySyncs",
        "id",
        n,
        ke,
        "shopifySync",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: ke,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.run = Object.assign(
      By,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: ke,
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
      Fy,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: ke,
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
      Uy,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: ke,
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
const Ge = {
  __typename: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  id: !0,
  updatedAt: !0
};
async function $y(e, t) {
  const n = be(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await q(
    this,
    "createAmbiguous",
    Ge,
    "ambiguous",
    "ambiguous",
    !1,
    {
      ambiguous: {
        value: n.ambiguous,
        required: !1,
        type: "CreateAmbiguousInput"
      }
    },
    t,
    null,
    !1
  );
}
async function Gy(e, t, n) {
  const r = be(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await q(
    this,
    "updateAmbiguous",
    Ge,
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
    n,
    null,
    !1
  );
}
async function qy(e, t) {
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
    null,
    !1
  );
}
class Wy {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await Ee(
        this,
        "ambiguous",
        n,
        Ge,
        "ambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await Ee(
          this,
          "ambiguous",
          n,
          Ge,
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
        defaultSelection: Ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await ae(
        this,
        "ambiguouss",
        Ge,
        "ambiguous",
        n
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await ae(
        this,
        "ambiguouss",
        Ge,
        "ambiguous",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await ae(
          this,
          "ambiguouss",
          Ge,
          "ambiguous",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (n, r) => await Ii(
        this,
        "ambiguouss",
        "id",
        n,
        Ge,
        "ambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: Ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      $y,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: Ge,
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
      Gy,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: Ge,
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
      qy,
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
      async (n, r) => await q(
        this,
        "bulkDeleteAmbiguous",
        null,
        "ambiguous",
        "ambiguous",
        !0,
        {
          ids: {
            value: n,
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
const qe = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
};
async function Hy(e, t) {
  const n = be(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await q(
    this,
    "createUnambiguous",
    qe,
    "unambiguous",
    "unambiguous",
    !1,
    {
      unambiguous: {
        value: n.unambiguous,
        required: !1,
        type: "CreateUnambiguousInput"
      }
    },
    t,
    null,
    !1
  );
}
async function zy(e, t, n) {
  const r = be(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await q(
    this,
    "updateUnambiguous",
    qe,
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
    n,
    null,
    !1
  );
}
async function Qy(e, t) {
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
    null,
    !1
  );
}
class Ky {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await Ee(
        this,
        "unambiguous",
        n,
        qe,
        "unambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await Ee(
          this,
          "unambiguous",
          n,
          qe,
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
        defaultSelection: qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await ae(
        this,
        "unambiguouss",
        qe,
        "unambiguous",
        n
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await ae(
        this,
        "unambiguouss",
        qe,
        "unambiguous",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await ae(
          this,
          "unambiguouss",
          qe,
          "unambiguous",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (n, r) => await Ii(
        this,
        "unambiguouss",
        "id",
        n,
        qe,
        "unambiguous",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: qe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Hy,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: qe,
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
      zy,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: qe,
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
      Qy,
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
      async (n, r) => await q(
        this,
        "bulkDeleteUnambiguous",
        null,
        "unambiguous",
        "unambiguous",
        !0,
        {
          ids: {
            value: n,
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
const gn = {
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
async function Yy(e) {
  return await q(
    this,
    "logOut",
    gn,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
async function Jy(e, t) {
  const n = be(
    this.logInViaEmail,
    void 0,
    e,
    this.logInViaEmail.variables
  );
  return await q(
    this,
    "logInViaEmail",
    gn,
    "session",
    "session",
    !1,
    {
      email: {
        value: n.email,
        required: !1,
        type: "String"
      },
      password: {
        value: n.password,
        required: !1,
        type: "String"
      }
    },
    t,
    "currentSession",
    !1
  );
}
class Xy {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (n) => await Ee(
        this,
        "currentSession",
        void 0,
        gn,
        "session",
        n
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: gn,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      Yy,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: gn,
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
      Jy,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: gn,
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
const xi = "production", Lr = "development", Zy = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
let xy = class {
  constructor(t) {
    var a;
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async (o) => await ny(
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
    const n = (t == null ? void 0 : t.environment) ?? Zy() ?? Lr;
    let r = n.toLocaleLowerCase();
    r != Lr && r != xi && (console.warn("Invalid environment", n, "defaulting to development"), r = Lr);
    const i = { ...t == null ? void 0 : t.exchanges };
    if (r === Lr) {
      const o = ({ forward: s }) => (y) => {
        const u = s(y);
        return Jp(
          u,
          On((c) => {
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
    if (this.connection = new dl({
      endpoint: new URL("api/graphql", r == xi ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: i,
      environment: r == xi ? "Production" : "Development"
    }), typeof window < "u" && this.connection.authenticationMode == Me.APIKey && !((a = t == null ? void 0 : t.authenticationMode) != null && a.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new uy(this.connection), this.session = new ly(this.connection), this.shopifyProduct = new hy(this.connection), this.shopifyProductImage = new gy(this.connection), this.shopifyProductOption = new Ay(this.connection), this.shopifyProductVariant = new Ty(this.connection), this.shopifyShop = new Ry(this.connection), this.productPairing = new Ly(this.connection), this.shopifySync = new Vy(this.connection), this.ambiguous = new Wy(this.connection), this.unambiguous = new Ky(this.connection), this.currentSession = new Xy(this.connection), this.internal = {
      user: new ht("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new ht("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new ht("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new ht("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new ht("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new ht("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new ht("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new ht("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new ht("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new ht("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new ht("unambiguous", this.connection, {
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
  async mutate(t, n) {
    const { data: r, error: i } = await this.connection.currentClient.mutation(t, n).toPromise();
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
  async fetch(t, n = {}) {
    return await this.connection.fetch(t, n);
  }
  toString() {
    return `GadgetAPIClient<${this.productionApiRoot}>`;
  }
  toJSON() {
    return this.toString();
  }
};
var ml = {}, ji = Ot.createContext(ml), ev = ji.Provider;
ji.Consumer;
ji.displayName = "UrqlContext";
var tv = () => {
  var e = Ot.useContext(ji);
  if (e === ml && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, nv = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, rv = (e, t) => e === t || !(!e || !t || e.key !== t.key), ea = (e, t) => {
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
      if (o === "operation" ? !rv(r[o], i[o]) : r[o] !== i[o])
        return !0;
    return !1;
  })(e, n) ? n : e;
}, iv = (e, t) => {
  for (var n = 0, r = t.length; n < r; n++)
    if (e[n] !== t[n])
      return !0;
  return !1;
}, ta = Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function As(e, t) {
  process.env.NODE_ENV !== "production" && ta && ta.ReactCurrentOwner && ta.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function av(e, t) {
  var n = Ot.useRef(void 0);
  return Ot.useMemo(() => {
    var r = Yr(e, t);
    return n.current !== void 0 && n.current.key === r.key ? n.current : (n.current = r, r);
  }, [e, t]);
}
var ov = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
    e.operations$ && Zt((r) => {
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
}, uv = (e, t) => e.suspense && (!t || t.suspense !== !1);
function sv(e) {
  var t = tv(), n = ov(t), r = uv(t, e.context), i = av(e.query, e.variables), a = Ot.useMemo(() => {
    if (e.pause)
      return null;
    var p = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return r ? En((h) => {
      n.set(i.key, h);
    })(p) : p;
  }, [n, t, i, r, e.pause, e.requestPolicy, e.context]), o = Ot.useCallback((p, h) => {
    if (!p)
      return {
        fetching: !1
      };
    var d = n.get(i.key);
    if (d) {
      if (h && d != null && "then" in d)
        throw d;
    } else {
      var f, v = Zt((g) => {
        d = g, f && f(d);
      })(Zc(() => h && !f || !d)(p));
      if (d == null && h) {
        var m = new Promise((g) => {
          f = g;
        });
        throw n.set(i.key, m), m;
      } else
        v.unsubscribe();
    }
    return d || {
      fetching: !0
    };
  }, [n, i]), s = [t, i, e.requestPolicy, e.context, e.pause], [y, u] = Ot.useState(() => [a, ea(nv, o(a, r)), s]), c = y[1];
  a !== y[0] && iv(y[2], s) && u([a, c = ea(y[1], o(a, r)), s]), Ot.useEffect(() => {
    var p = y[0], h = y[2][1], d = !1, f = (m) => {
      d = !0, As(u, (g) => {
        var O = ea(g[1], m);
        return g[1] !== O ? [g[0], O, g[2]] : g;
      });
    };
    if (p) {
      var v = Zt(f)(Ao(() => {
        f({
          fetching: !1
        });
      })(p));
      return d || f({
        fetching: !0
      }), () => {
        n.dispose(h.key), v.unsubscribe();
      };
    } else
      f({
        fetching: !1
      });
  }, [n, y[0], y[2][1]]);
  var l = Ot.useCallback((p) => {
    var h = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...p
    };
    As(u, (d) => [r ? En((f) => {
      n.set(i.key, f);
    })(t.executeQuery(i, h)) : t.executeQuery(i, h), d[1], s]);
  }, [t, n, i, r, o, e.requestPolicy, e.context]);
  return [c, l];
}
const gl = ie.createContext(void 0), cv = ie.createContext(void 0), lv = "/", fv = "signOut";
function dv(e) {
  let t, n;
  if ("api" in e) {
    if (!td(e.api))
      throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    t = e.api, n = e.api.connection.currentClient;
  } else if (e.value)
    n = e.value;
  else
    throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
  n.suspense = !0;
  let r = lv, i = fv;
  if ("auth" in e) {
    const { auth: a } = e;
    a != null && a.signInPath && (r = a.signInPath), a != null && a.signOutActionApiIdentifier && (i = a.signOutActionApiIdentifier);
  }
  return ie.createElement(
    gl.Provider,
    { value: n },
    ie.createElement(
      cv.Provider,
      { value: {
        api: t,
        auth: {
          signInPath: r,
          signOutActionApiIdentifier: i
        }
      } },
      ie.createElement(ev, { value: n }, e.children)
    )
  );
}
const pv = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", hv = (e, t) => {
  let n = "";
  return e !== void 0 ? n = `[Network] ${e.message}` : t !== void 0 ? t.forEach((r) => {
    n += `[GraphQL] ${r.message}
`;
  }) : n = "Unknown error", n.trim();
}, yv = (e) => typeof e == "string" ? new re(e) : e != null && e.message && !e.code ? new re(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class Yt extends Error {
  /** @private */
  static forClientSideError(t, n) {
    return new Yt({
      executionErrors: [t],
      response: n
    });
  }
  /** @private */
  static forErrorsResponse(t, n) {
    return new Yt({
      executionErrors: t.map(To),
      response: n
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new Yt({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, n, r = !1) {
    const i = Ch(t, n);
    let a = Yt.forMaybeCombinedError(t.error);
    return !a && i && !r && (a = Yt.forClientSideError(i)), a;
  }
  constructor({ networkError: t, executionErrors: n, response: r }) {
    const i = (n || []).map(yv), a = hv(t, i);
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
const vv = (e) => {
  const { context: t, suspense: n, ...r } = e ?? {}, i = Zr(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...r,
    context: i
  };
}, mv = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), bl = (e) => {
  if (!Ac(gl))
    throw new Error(pv);
  const t = vv(e);
  return sv(t);
};
var gv = typeof Element < "u", bv = typeof Map == "function", _v = typeof Set == "function", Ov = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Jr(e, t) {
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
        if (!Jr(e[r], t[r]))
          return !1;
      return !0;
    }
    var a;
    if (bv && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!Jr(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (_v && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (Ov && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (gv && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !Jr(e[i[r]], t[i[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Av = function(t, n) {
  try {
    return Jr(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Pv = /* @__PURE__ */ Sc(Av), Sv = (e) => {
  const t = Jf();
  return e ? (t.current === void 0 || !Pv(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, Ev = (e, t) => {
  const n = Sv(t), r = Zr(() => Mo(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, n), [e, n]), [i, a] = bl(mv(r, t));
  return [Zr(() => {
    const s = [e.findMany.operationName];
    let y = i.data;
    if (y) {
      const c = In(i.data, s);
      if (c) {
        const l = cr(i, c);
        y = jn.boot(e, l, c);
      }
    }
    const u = Yt.errorIfDataAbsent(i, s, t == null ? void 0 : t.pause);
    return { ...i, data: y, error: u };
  }, [e, i]), a];
};
var _l = {}, bt = {};
Object.defineProperty(bt, "__esModule", { value: !0 });
var Ol = bt.AppBridgeContext = void 0, Tv = ie;
Ol = bt.AppBridgeContext = Tv.createContext(null);
var Fe = {};
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.useAppBridge = void 0;
var wv = ie, Iv = bt;
function jv() {
  var e = wv.useContext(Iv.AppBridgeContext);
  if (!e)
    throw new Error("No AppBridge context provided. Your component must be wrapped in the <Provider> component from App Bridge React.");
  return e;
}
Fe.useAppBridge = jv;
var Al = {}, Do = {}, ko = {}, St = {}, Lo = {}, ro = {}, oe = {}, Bo = {};
Object.defineProperty(Bo, "__esModule", { value: !0 });
function Pl(e, t) {
  if (t == null || typeof e > "u" || !Object.prototype.isPrototypeOf.call(Object.getPrototypeOf(e), t) || t.constructor.name !== "Object" && t.constructor.name !== "Array")
    return t;
  var n = {};
  return Object.keys(t).forEach(function(r) {
    var i = Object.prototype.hasOwnProperty.call(e, r);
    i && typeof e[r] == "object" && !Array.isArray(e[r]) ? n[r] = Pl(e[r], t[r]) : n[r] = t[r];
  }), Object.keys(e).forEach(function(r) {
    var i = Object.prototype.hasOwnProperty.call(t, r);
    i || (n[r] = e[r]);
  }), Object.setPrototypeOf(n, Object.getPrototypeOf(e)), n;
}
Bo.default = Pl;
var xt = {};
Object.defineProperty(xt, "__esModule", { value: !0 });
xt.SEPARATOR = xt.PREFIX = void 0;
xt.PREFIX = "APP";
xt.SEPARATOR = "::";
var se = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ComponentType = e.Group = void 0, function(t) {
    t.AuthCode = "AuthCode", t.Button = "Button", t.ButtonGroup = "ButtonGroup", t.Cart = "Cart", t.Client = "Client", t.ContextualSaveBar = "ContextualSaveBar", t.Error = "Error", t.Features = "Features", t.FeedbackModal = "FeedbackModal", t.Fullscreen = "Fullscreen", t.LeaveConfirmation = "LeaveConfirmation", t.Link = "Link", t.Loading = "Loading", t.Menu = "Menu", t.Modal = "Modal", t.Navigation = "Navigation", t.Performance = "Performance", t.Pos = "Pos", t.Print = "Print", t.ResourcePicker = "Resource_Picker", t.unstable_Picker = "unstable_Picker", t.Scanner = "Scanner", t.SessionToken = "SessionToken", t.Share = "Share", t.TitleBar = "TitleBar", t.Toast = "Toast", t.MarketingExternalActivityTopBar = "MarketingExternalActivityTopBar", t.WebVitals = "WebVitals";
  }(e.Group || (e.Group = {})), function(t) {
    t.Button = "Button", t.ButtonGroup = "ButtonGroup";
  }(e.ComponentType || (e.ComponentType = {}));
})(se);
(function(e) {
  var t = b && b.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.updateActionFromPayload = e.isValidOptionalString = e.isValidOptionalNumber = e.forEachInEnum = e.getMergedProps = e.findMatchInEnum = e.getEventNameSpace = e.NonSnakeCaseGroup = e.actionWrapper = void 0;
  var n = t(Bo), r = xt, i = se;
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
    return f.replace(/([A-Z])/g, function(v, m, g) {
      return (g === 0 ? "" : "_") + v[0].toLowerCase();
    });
  }
  function s(f) {
    return e.NonSnakeCaseGroup.includes(f) ? f.toUpperCase() : o(f).toUpperCase();
  }
  function y(f, v, m) {
    if (v.startsWith("" + r.PREFIX + r.SEPARATOR))
      return v;
    var g = s(f);
    if (m) {
      var O = m.subgroups, _ = m.type;
      O && O.length > 0 && (g += g.length > 0 ? r.SEPARATOR : "", O.forEach(function(T, P) {
        g += "" + T.toUpperCase() + (P < O.length - 1 ? r.SEPARATOR : "");
      })), _ !== f && _ && (g += "" + (g.length > 0 ? r.SEPARATOR : "") + _.toUpperCase());
    }
    return g && (g += "" + (g.length > 0 ? r.SEPARATOR : "") + v.toUpperCase()), "" + r.PREFIX + r.SEPARATOR + g;
  }
  e.getEventNameSpace = y;
  function u(f, v) {
    var m = Object.keys(f).find(function(g) {
      return v === f[g];
    });
    return m ? f[m] : void 0;
  }
  e.findMatchInEnum = u;
  function c(f, v) {
    var m = n.default(f, v);
    if (!m) {
      var g = Object.assign(f, v);
      return g;
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
})(oe);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.Action = void 0;
  var t = oe, n = se, r;
  (function(a) {
    a.REQUEST = "APP::AUTH_CODE::REQUEST", a.RESPOND = "APP::AUTH_CODE::RESPOND";
  })(r = e.Action || (e.Action = {}));
  function i(a) {
    return t.actionWrapper({
      payload: a,
      group: n.Group.AuthCode,
      type: r.RESPOND
    });
  }
  e.respond = i;
})(ro);
var Ut = {};
const Cv = "@shopify/app-bridge", Nv = "3.7.7", Rv = "index.d.ts", Mv = "index.js", Dv = "umd/index.js", kv = "umd/index.js", Lv = [
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
], Bv = {
  access: "public",
  "@shopify:registry": "https://registry.npmjs.org"
}, Fv = "git@github.com:Shopify/app-bridge.git", Uv = "https://shopify.dev/tools/app-bridge", Vv = "Shopify Inc.", $v = "MIT", Gv = {
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
}, qv = !1, Wv = {
  "@shopify/app-bridge-core": "1.0.2",
  base64url: "^3.0.1",
  "web-vitals": "^3.0.1"
}, Hv = {
  "@types/node": "^10.12.5",
  shx: "^0.3.3"
}, zv = {
  name: Cv,
  version: Nv,
  types: Rv,
  main: Mv,
  unpkg: Dv,
  jsdelivr: kv,
  files: Lv,
  private: !1,
  publishConfig: Bv,
  repository: Fv,
  homepage: Uv,
  author: Vv,
  license: $v,
  scripts: Gv,
  sideEffects: qv,
  "size-limit": [
    {
      limit: "10.5 KB",
      path: "production.js"
    }
  ],
  dependencies: Wv,
  devDependencies: Hv
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
  var n = zv;
  function r() {
    return n.version;
  }
  e.getVersion = r;
  function i() {
    return n.name;
  }
  e.getPackageName = i;
})(Ut);
var Vt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ComponentType = e.Group = void 0;
  var t = se;
  Object.defineProperty(e, "Group", { enumerable: !0, get: function() {
    return t.Group;
  } }), Object.defineProperty(e, "ComponentType", { enumerable: !0, get: function() {
    return t.ComponentType;
  } });
})(Vt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.request = e.Action = e.respond = void 0;
  var t = ro;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
  var n = Ut, r = Vt, i = ro;
  Object.defineProperty(e, "respond", { enumerable: !0, get: function() {
    return i.respond;
  } });
  function a(o) {
    return n.actionWrapper({
      group: r.Group.AuthCode,
      type: t.Action.REQUEST,
      payload: { id: o }
    });
  }
  e.request = a;
})(Lo);
var Ar = {}, Nt = {}, le = {}, Cn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LifecycleHook = e.PermissionType = e.MessageType = void 0, function(t) {
    t.GetState = "getState", t.Dispatch = "dispatch", t.Subscribe = "subscribe", t.Unsubscribe = "unsubscribe";
  }(e.MessageType || (e.MessageType = {})), function(t) {
    t.Dispatch = "Dispatch", t.Subscribe = "Subscribe";
  }(e.PermissionType || (e.PermissionType = {})), function(t) {
    t.UpdateAction = "UpdateAction", t.DispatchAction = "DispatchAction";
  }(e.LifecycleHook || (e.LifecycleHook = {}));
})(Cn);
var Bt = {};
Object.defineProperty(Bt, "__esModule", { value: !0 });
Bt.removeFromCollection = Bt.addAndRemoveFromCollection = void 0;
function Qv(e, t, n) {
  return e.push(t), function() {
    return Sl(e, t, n);
  };
}
Bt.addAndRemoveFromCollection = Qv;
function Sl(e, t, n) {
  var r = e.findIndex(function(i) {
    return i === t;
  });
  return r >= 0 ? (e.splice(r, 1), n && n(t), !0) : !1;
}
Bt.removeFromCollection = Sl;
var lr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.permissionAction = e.isErrorEventName = e.throwError = e.invalidOriginAction = e.fromAction = e.AppBridgeError = e.AppActionType = e.Action = void 0;
  var t = se, n = oe, r;
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
    return n.actionWrapper({
      group: t.Group.Error,
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
    var p = n.findMatchInEnum(r, l);
    return typeof p == "string";
  }
  e.isErrorEventName = y;
  function u(l, p, h) {
    var d = p.payload;
    return n.actionWrapper({
      type: l,
      group: t.Group.Error,
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
})(lr);
var Vn = {};
Object.defineProperty(Vn, "__esModule", { value: !0 });
Vn.generateUuid = void 0;
function ln(e) {
  return Array.from(e).map(function(t) {
    return ("00" + t.toString(16)).slice(-2);
  }).join("");
}
function fn(e) {
  if (typeof Uint8Array == "function" && typeof window == "object" && window.crypto) {
    var t = new Uint8Array(e), n = window.crypto.getRandomValues(t);
    if (n)
      return n;
  }
  return Array.from(new Array(e), function() {
    return Math.random() * 255 | 0;
  });
}
function El() {
  var e = 64, t = fn(1), n = fn(2);
  return t[0] &= 191, n[0] &= 15 | e, [
    // time-low
    ln(fn(4)),
    "-",
    // time-mid
    ln(fn(2)),
    "-",
    // time-high-and-version
    ln(n),
    "-",
    // clock-seq-and-reserved
    ln(t),
    // clock-seq-loq
    ln(fn(1)),
    "-",
    // node
    ln(fn(6))
  ].join("");
}
Vn.generateUuid = El;
Vn.default = El;
var Kv = b && b.__extends || function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), ui = b && b.__assign || function() {
  return ui = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, ui.apply(this, arguments);
}, Yv = b && b.__spreadArray || function(e, t) {
  for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
    e[i] = t[n];
  return e;
}, Jv = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(le, "__esModule", { value: !0 });
le.unsubscribeActions = le.ActionSetWithChildren = le.ActionSet = void 0;
var Xv = Cn, io = Bt, Br = lr, Zv = se, xv = Jv(Vn), na = oe, Tl = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      var a = this;
      this.app = t, this.type = n, this.group = r, this.subgroups = [], this.subscriptions = [], t || Br.throwError(Br.Action.INVALID_ACTION, "Missing required `app`"), this.id = i || xv.default(), this.defaultGroup = r;
      var o = this.set;
      this.set = function() {
        for (var s, y = [], u = 0; u < arguments.length; u++)
          y[u] = arguments[u];
        return a.app.hooks ? (s = a.app.hooks).run.apply(s, Yv([Xv.LifecycleHook.UpdateAction, o, a], y)) : o.apply(a, y);
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
    }), e.prototype.updateSubscription = function(t, n, r) {
      var i = t.eventType, a = t.callback, o = t.component, s;
      return s = this.subscriptions.findIndex(function(y) {
        return y === t;
      }), s >= 0 ? this.subscriptions[s].unsubscribe() : s = void 0, this.group = n, this.subgroups = r, Object.assign(o, { subgroups: this.subgroups }), this.subscribe(i, a, o, s);
    }, e.prototype.error = function(t) {
      var n = this, r = [];
      return na.forEachInEnum(Br.Action, function(i) {
        r.push(n.subscriptions.length), n.subscribe(i, t);
      }), function() {
        var i = r.map(function(a) {
          return n.subscriptions[a];
        });
        i.forEach(function(a) {
          io.removeFromCollection(n.subscriptions, a, function(o) {
            o.unsubscribe();
          });
        });
      };
    }, e.prototype.subscribe = function(t, n, r, i) {
      var a = this, o = r || this.component, s = t.toUpperCase(), y = typeof i == "number" ? n : n.bind(this), u;
      Br.isErrorEventName(t) ? u = na.getEventNameSpace(Zv.Group.Error, t, ui(ui({}, o), { type: "" })) : u = na.getEventNameSpace(this.group, t, o);
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
    }, e.prototype.unsubscribe = function(t) {
      return t === void 0 && (t = !1), Fo(this.subscriptions, this.defaultGroup, t), this;
    }, e;
  }()
);
le.ActionSet = Tl;
var em = (
  /** @class */
  function(e) {
    Kv(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.children = [], n;
    }
    return t.prototype.unsubscribe = function(n, r) {
      return n === void 0 && (n = !0), r === void 0 && (r = !1), Fo(this.subscriptions, this.defaultGroup, r), this.children.forEach(function(i) {
        i instanceof t ? i.unsubscribe(n, !n) : i.unsubscribe(!n);
      }), this;
    }, t.prototype.getChild = function(n) {
      var r = this.children.findIndex(function(i) {
        return i.id === n;
      });
      return r >= 0 ? this.children[r] : void 0;
    }, t.prototype.getChildIndex = function(n) {
      return this.children.findIndex(function(r) {
        return r.id === n;
      });
    }, t.prototype.getChildSubscriptions = function(n, r) {
      return this.subscriptions.filter(function(i) {
        return i.component.id === n && (!r || r === i.eventType);
      });
    }, t.prototype.addChild = function(n, r, i) {
      var a = this, o = n.subscriptions, s = this.getChild(n.id);
      return s || this.children.push(n), !o || r === n.group && i === n.subgroups ? this : (o.forEach(function(y) {
        var u = y.updateSubscribe;
        u(r, i);
      }), Object.assign(n, { group: r, subgroups: i }), n instanceof t && n.children.forEach(function(y) {
        return a.addChild(y, r, i);
      }), this);
    }, t.prototype.removeChild = function(n) {
      var r = this;
      return io.removeFromCollection(this.children, this.getChild(n), function() {
        var i = r.subscriptions.filter(function(a) {
          return a.component.id === n;
        });
        i.forEach(function(a) {
          io.removeFromCollection(r.subscriptions, a, function(o) {
            o.unsubscribe();
          });
        });
      }), this;
    }, t.prototype.subscribeToChild = function(n, r, i) {
      var a = this, o = i.bind(this);
      if (r instanceof Array)
        return r.forEach(function(c) {
          return a.subscribeToChild(n, c, i);
        }), this;
      if (typeof r != "string")
        return this;
      var s = r.toUpperCase(), y = this.getChildSubscriptions(n.id, s);
      if (y.length > 0)
        y.forEach(function(c) {
          return c.updateSubscribe(a.group, n.subgroups);
        });
      else {
        var u = {
          id: n.id,
          subgroups: n.subgroups,
          type: n.type
        };
        this.subscribe(s, o, u);
      }
      return this;
    }, t.prototype.getUpdatedChildActions = function(n, r) {
      if (n.length === 0) {
        for (; r.length > 0; ) {
          var i = r.pop();
          if (!i)
            break;
          this.removeChild(i.id);
        }
        return;
      }
      for (var a = n.filter(function(y, u, c) {
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
    }, t;
  }(Tl)
);
le.ActionSetWithChildren = em;
function Fo(e, t, n) {
  n === void 0 && (n = !1), e.forEach(function(r) {
    if (n) {
      var i = r.updateSubscribe;
      i(t, []);
    } else {
      var a = r.unsubscribe;
      a();
    }
  }), n || (e.length = 0);
}
le.unsubscribeActions = Fo;
(function(e) {
  var t = b && b.__extends || function() {
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(c) {
      for (var l, p = 1, h = arguments.length; p < h; p++) {
        l = arguments[p];
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && (c[d] = l[d]);
      }
      return c;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Button = e.update = e.clickButton = e.Style = e.Icon = e.Action = void 0;
  var r = oe, i = le, a = se, o;
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
    var h = l.id, d = p.label, f = r.getEventNameSpace(c, o.UPDATE, l), v = n(n({}, p), { id: h, label: d });
    return r.actionWrapper({ type: f, group: c, payload: v });
  }
  e.update = y;
  var u = (
    /** @class */
    function(c) {
      t(l, c);
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
          return n(n({}, this.options), { id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), l.prototype.set = function(p, h) {
        h === void 0 && (h = !0);
        var d = r.getMergedProps(this.options, p), f = d.label, v = d.disabled, m = d.icon, g = d.style, O = d.loading, _ = d.plain;
        return this.label = f, this.disabled = !!v, this.icon = m, this.style = g, this.loading = !!O, this.plain = !!_, h && this.dispatch(o.UPDATE), this;
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
})(Nt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.isValidButtonProps = e.Button = e.update = e.Style = e.Icon = e.clickButton = e.Action = void 0;
  var t = Nt;
  Object.defineProperty(e, "Button", { enumerable: !0, get: function() {
    return t.Button;
  } });
  var n = Nt;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "clickButton", { enumerable: !0, get: function() {
    return n.clickButton;
  } }), Object.defineProperty(e, "Icon", { enumerable: !0, get: function() {
    return n.Icon;
  } }), Object.defineProperty(e, "Style", { enumerable: !0, get: function() {
    return n.Style;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return n.update;
  } });
  function r(a) {
    return typeof a.id == "string" && typeof a.label == "string";
  }
  e.isValidButtonProps = r;
  function i(a, o) {
    return new t.Button(a, o);
  }
  e.create = i;
})(Ar);
var Ci = {}, en = {}, nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.getSingleButton = void 0;
var tm = Nt;
function nm(e, t, n, r) {
  return e.addChild(t, e.group, n), e.subscribeToChild(t, tm.Action.UPDATE, r), t.payload;
}
nn.getSingleButton = nm;
(function(e) {
  var t = b && b.__extends || function() {
    var d = function(f, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(d) {
      for (var f, v = 1, m = arguments.length; v < m; v++) {
        f = arguments[v];
        for (var g in f)
          Object.prototype.hasOwnProperty.call(f, g) && (d[g] = f[g]);
      }
      return d;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ButtonGroup = e.isGroupedButtonPayload = e.isGroupedButton = e.update = e.Action = void 0;
  var r = nn, i = oe, a = le, o = se, s;
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
      t(f, d);
      function f(v, m) {
        var g = d.call(this, v, o.ComponentType.ButtonGroup, o.Group.ButtonGroup) || this;
        return g.disabled = !1, g.plain = !1, g.buttonsOptions = [], g.buttons = [], g.set(m, !1), g;
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
          return n(n({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), f.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = i.getMergedProps(this.options, v), O = g.label, _ = g.disabled, T = g.buttons, P = g.plain;
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
          for (var m, g = 0, O = this.buttons; g < O.length; g++) {
            var _ = O[g];
            if (m = i.updateActionFromPayload(_, v), m)
              break;
          }
          m && this.dispatch(s.UPDATE);
        }
      }, f.prototype.getSingleButton = function(v) {
        return r.getSingleButton(this, v, this.subgroups, this.updateButtons);
      }, f.prototype.getButtons = function(v) {
        var m = this, g = [];
        return v ? (v.forEach(function(O) {
          var _ = r.getSingleButton(m, O, m.subgroups, m.updateButtons);
          g.push(_);
        }), this.buttonsOptions = v, g) : [];
      }, f;
    }(a.ActionSetWithChildren)
  );
  e.ButtonGroup = l;
  function p(d, f) {
    return new l(d, f);
  }
  e.create = p;
  function h(d, f, v, m, g) {
    var O = f.id, _ = m.label, T = i.getEventNameSpace(d, v, f), P = n(n({}, m), { id: O, label: _, payload: g });
    return i.actionWrapper({ type: T, group: d, payload: P });
  }
})(en);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ButtonGroup = e.isGroupedButtonPayload = e.isGroupedButton = e.update = e.Action = void 0;
  var t = en;
  Object.defineProperty(e, "ButtonGroup", { enumerable: !0, get: function() {
    return t.ButtonGroup;
  } });
  var n = en;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return n.update;
  } }), Object.defineProperty(e, "isGroupedButton", { enumerable: !0, get: function() {
    return n.isGroupedButton;
  } }), Object.defineProperty(e, "isGroupedButtonPayload", { enumerable: !0, get: function() {
    return n.isGroupedButtonPayload;
  } });
  function r(i, a) {
    return new t.ButtonGroup(i, a);
  }
  e.create = r;
})(Ci);
var Uo = {}, wl = {};
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(E) {
      for (var S, w = 1, I = arguments.length; w < I; w++) {
        S = arguments[w];
        for (var C in S)
          Object.prototype.hasOwnProperty.call(S, C) && (E[C] = S[C]);
      }
      return E;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Cart = e.setLineItemProperties = e.removeLineItemDiscount = e.setLineItemDiscount = e.removeLineItem = e.updateLineItem = e.addLineItem = e.removeProperties = e.setProperties = e.setDiscount = e.updateCustomerAddress = e.addCustomerAddress = e.setCustomer = e.update = e.fetch = e.Action = void 0;
  var r = oe, i = le, a = se, o;
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
  function g(E) {
    return s(o.REMOVE_LINE_ITEM, E);
  }
  e.removeLineItem = g;
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
        this.app.dispatch(s(w, n(n({}, I), { id: this.id })));
      }, S;
    }(i.ActionSet)
  );
  e.Cart = P;
})(wl);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.setLineItemProperties = e.removeLineItemDiscount = e.setLineItemDiscount = e.removeLineItem = e.updateLineItem = e.addLineItem = e.removeProperties = e.setProperties = e.setDiscount = e.updateCustomerAddress = e.addCustomerAddress = e.setCustomer = e.update = e.fetch = e.Cart = e.Action = void 0;
  var t = wl;
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
  function n(r, i) {
    return new t.Cart(r, i);
  }
  e.create = n;
})(Uo);
var Vo = {}, Il = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(t) {
    t.INITIALIZE = "APP::CLIENT::INITIALIZE";
  }(e.Action || (e.Action = {}));
})(Il);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initialize = e.Action = void 0;
  var t = Il;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
  var n = Vt, r = Ut;
  function i() {
    return r.actionWrapper({
      group: n.Group.Client,
      type: t.Action.INITIALIZE
    });
  }
  e.initialize = i;
})(Vo);
var rn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.networkAction = e.persistenceAction = e.unsupportedOperationAction = e.unexpectedAction = e.invalidAction = e.invalidActionType = e.invalidPayload = e.Message = e.fromAction = e.Action = e.permissionAction = e.isErrorEventName = e.throwError = e.invalidOriginAction = e.AppBridgeError = e.AppActionType = void 0;
  var t = lr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "fromAction", { enumerable: !0, get: function() {
    return t.fromAction;
  } });
  var n = Ut, r = Vt, i = lr;
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
    return n.actionWrapper({
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
    return a(t.Action.INVALID_PAYLOAD, h, d || "The action's payload is missing required properties or has invalid properties");
  }
  e.invalidPayload = o;
  function s(h, d) {
    return n.actionWrapper({
      group: r.Group.Error,
      payload: {
        action: h,
        message: d || "The action type is invalid or unsupported",
        type: t.Action.INVALID_ACTION_TYPE
      },
      type: t.Action.INVALID_ACTION_TYPE
    });
  }
  e.invalidActionType = s;
  function y(h, d) {
    return n.actionWrapper({
      group: r.Group.Error,
      payload: {
        action: h,
        message: d || "The action's has missing/invalid values for `group`, `type` or `version`",
        type: t.Action.INVALID_ACTION
      },
      type: t.Action.INVALID_ACTION
    });
  }
  e.invalidAction = y;
  function u(h, d) {
    return n.actionWrapper({
      group: r.Group.Error,
      payload: {
        action: h,
        message: d || "Action cannot be called at this time",
        type: t.Action.UNEXPECTED_ACTION
      },
      type: t.Action.UNEXPECTED_ACTION
    });
  }
  e.unexpectedAction = u;
  function c(h, d) {
    return a(t.Action.UNSUPPORTED_OPERATION, h, d || "The action type is unsupported");
  }
  e.unsupportedOperationAction = c;
  function l(h, d) {
    return a(t.Action.PERSISTENCE, h, d || "Action cannot be persisted on server");
  }
  e.persistenceAction = l;
  function p(h, d) {
    return a(t.Action.NETWORK, h, d || "Network error");
  }
  e.networkAction = p;
})(rn);
var jl = {}, Cl = {}, fr = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Toast = e.primaryAction = e.clear = e.show = e.Action = void 0;
  var r = oe, i = le, a = se, o;
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
      t(p, l);
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
          return n({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.set = function(h) {
        var d = r.getMergedProps(this.options, h), f = d.message, v = d.duration, m = d.isError, g = d.action;
        return this.message = f, this.duration = v, this.isError = m, this.action = g != null && g.content ? {
          content: g.content || ""
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
})(fr);
(function(e) {
  var t = b && b.__extends || function() {
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
  var n = fr;
  Object.defineProperty(e, "clear", { enumerable: !0, get: function() {
    return n.clear;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return n.show;
  } });
  var r = (
    /** @class */
    function(a) {
      t(o, a);
      function o() {
        return a !== null && a.apply(this, arguments) || this;
      }
      return o;
    }(n.Toast)
  );
  e.Flash = r;
  function i(a, o) {
    return new r(a, o);
  }
  e.create = i;
})(Cl);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), n = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(Cl, e);
})(jl);
var $o = {}, Nl = {}, Go = {}, Ni = {}, qo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(t) {
    t.UPDATE = "APP::FEATURES::UPDATE", t.REQUEST = "APP::FEATURES::REQUEST", t.REQUEST_UPDATE = "APP::FEATURES::REQUEST::UPDATE";
  }(e.Action || (e.Action = {}));
})(qo);
var rm = b && b.__extends || function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), si = b && b.__assign || function() {
  return si = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, si.apply(this, arguments);
};
Object.defineProperty(Ni, "__esModule", { value: !0 });
Ni.Features = void 0;
var im = oe, am = le, ra = se, Ps = qo, om = (
  /** @class */
  function(e) {
    rm(t, e);
    function t(n, r) {
      return e.call(this, n, ra.Group.Features, ra.Group.Features, r ? r.id : void 0) || this;
    }
    return t.prototype.dispatch = function(n, r) {
      switch (n) {
        case Ps.Action.REQUEST:
          this.dispatchFeaturesAction(Ps.Action.REQUEST, r);
          break;
      }
      return this;
    }, t.prototype.dispatchFeaturesAction = function(n, r) {
      this.app.dispatch(im.actionWrapper({
        group: ra.Group.Features,
        type: n,
        payload: si(si({}, r || {}), { id: this.id })
      }));
    }, t;
  }(am.ActionSet)
);
Ni.Features = om;
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), n = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(Ni, e), n(qo, e);
})(Go);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Features = void 0;
  var t = Go;
  Object.defineProperty(e, "Features", { enumerable: !0, get: function() {
    return t.Features;
  } });
  function n(r, i) {
    return new t.Features(r, i);
  }
  e.create = n;
})(Nl);
var Wo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0;
  var t = Go;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
})(Wo);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), n = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(Nl, e), n(Wo, e);
})($o);
var Rl = {}, Ho = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.FeedbackModal = e.close = e.open = e.Action = void 0;
  var r = oe, i = le, a = se, o;
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
      t(p, l);
      function p(h, d) {
        var f = l.call(this, h, a.Group.FeedbackModal, a.Group.FeedbackModal) || this;
        return f.options = d, f.set(d), f;
      }
      return Object.defineProperty(p.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return n({ id: this.id }, this.options);
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
})(Ho);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.FeedbackModal = e.close = e.open = e.Action = void 0;
  var t = Ho;
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
})(Rl);
var zo = {}, ao = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  var n = oe, r = le, i = se, a;
  (function(u) {
    u.ENTER = "APP::FULLSCREEN::ENTER", u.EXIT = "APP::FULLSCREEN::EXIT";
  })(a = e.Action || (e.Action = {}));
  function o() {
    return n.actionWrapper({
      group: i.Group.Fullscreen,
      type: a.ENTER
    });
  }
  e.enter = o;
  function s() {
    return n.actionWrapper({
      group: i.Group.Fullscreen,
      type: a.EXIT
    });
  }
  e.exit = s;
  var y = (
    /** @class */
    function(u) {
      t(c, u);
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
        return this.app.dispatch(n.actionWrapper({
          group: this.group,
          type: l,
          payload: this.payload
        })), this;
      }, c;
    }(r.ActionSet)
  );
  e.Fullscreen = y;
})(ao);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Action = e.Fullscreen = e.exit = e.enter = void 0;
  var t = ao;
  Object.defineProperty(e, "Fullscreen", { enumerable: !0, get: function() {
    return t.Fullscreen;
  } }), Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } });
  var n = ao;
  Object.defineProperty(e, "enter", { enumerable: !0, get: function() {
    return n.enter;
  } }), Object.defineProperty(e, "exit", { enumerable: !0, get: function() {
    return n.exit;
  } });
  function r(i) {
    return new t.Fullscreen(i);
  }
  e.create = r;
})(zo);
var Ml = {}, ci = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LeaveConfirmation = e.confirm = e.disable = e.enable = e.Action = void 0;
  var r = oe, i = le, a = se, o;
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
      t(p, l);
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
          return n({ id: this.id }, this.options);
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
})(ci);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.LeaveConfirmation = e.confirm = e.disable = e.enable = e.Action = void 0;
  var t = ci;
  Object.defineProperty(e, "LeaveConfirmation", { enumerable: !0, get: function() {
    return t.LeaveConfirmation;
  } });
  var n = ci;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "enable", { enumerable: !0, get: function() {
    return n.enable;
  } }), Object.defineProperty(e, "disable", { enumerable: !0, get: function() {
    return n.disable;
  } }), Object.defineProperty(e, "confirm", { enumerable: !0, get: function() {
    return n.confirm;
  } });
  function r(i, a) {
    return a === void 0 && (a = {}), new t.LeaveConfirmation(i, a);
  }
  e.create = r;
})(Ml);
var Qo = {}, oo = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  var n = oe, r = le, i = se, a;
  (function(u) {
    u.START = "APP::LOADING::START", u.STOP = "APP::LOADING::STOP";
  })(a = e.Action || (e.Action = {}));
  function o(u) {
    return n.actionWrapper({
      payload: u,
      group: i.Group.Loading,
      type: a.START
    });
  }
  e.start = o;
  function s(u) {
    return n.actionWrapper({
      payload: u,
      group: i.Group.Loading,
      type: a.STOP
    });
  }
  e.stop = s;
  var y = (
    /** @class */
    function(u) {
      t(c, u);
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
})(oo);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.stop = e.start = e.Action = e.Loading = void 0;
  var t = oo;
  Object.defineProperty(e, "Loading", { enumerable: !0, get: function() {
    return t.Loading;
  } });
  var n = oo;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "start", { enumerable: !0, get: function() {
    return n.start;
  } }), Object.defineProperty(e, "stop", { enumerable: !0, get: function() {
    return n.stop;
  } });
  function r(i) {
    return new t.Loading(i);
  }
  e.create = r;
})(Qo);
var Ri = {}, dr = {};
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(P) {
      for (var E, S = 1, w = arguments.length; S < w; S++) {
        E = arguments[S];
        for (var I in E)
          Object.prototype.hasOwnProperty.call(E, I) && (P[I] = E[I]);
      }
      return P;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalIframe = e.ModalMessage = e.Modal = e.isMessageModal = e.isIframeModal = e.data = e.update = e.clickFooterButton = e.updateModalSize = e.closeModal = e.openModal = e.Size = e.Action = void 0;
  var r = nn, i = oe, a = le, o = se, s = Nt, y;
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
    var S = n({ id: P }, c);
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
        var I = this, C = c.subgroups;
        this.footerPrimaryOptions = this.getChildButton(S, this.footerPrimaryOptions), this.footerPrimary = this.footerPrimaryOptions ? r.getSingleButton(this, this.footerPrimaryOptions, C, function(k) {
          I.updatePrimaryFooterButton(k, w);
        }) : void 0;
      }, E.prototype.setFooterSecondaryButtons = function(S, w) {
        var I = this, C = c.subgroups, k = S || [], B = this.footerOptions && this.footerOptions.buttons.secondary || [];
        this.footerSecondaryOptions = this.getUpdatedChildActions(k, B), this.footerSecondary = this.footerSecondaryOptions ? this.footerSecondaryOptions.map(function(D) {
          return r.getSingleButton(I, D, C, function(V) {
            I.updateSecondaryFooterButton(V, w);
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
          return n(n({}, this.options), { footer: this.footer, id: this.id });
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
        var C = i.getMergedProps(this.options, S), k = C.title, B = C.footer, D = C.message, V = C.size;
        return this.title = k, this.message = D, this.size = V, this.setFooterPrimaryButton(B ? B.buttons.primary : void 0, function() {
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
      t(E, P);
      function E(S, w) {
        var I = P.call(this, S, o.Group.Modal, o.Group.Modal) || this;
        return I.set(w, !1), I;
      }
      return Object.defineProperty(E.prototype, "payload", {
        get: function() {
          return n(n({}, this.options), { footer: this.footer, id: this.id });
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
        var C = i.getMergedProps(this.options, S), k = C.title, B = C.footer, D = C.path, V = C.url, W = C.size, F = C.loading;
        return this.title = k, this.url = V, this.path = D, this.size = W, this.loading = F, this.setFooterPrimaryButton(B ? B.buttons.primary : void 0, function() {
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
            this.app.dispatch(f(this.payload));
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
})(dr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Modal = e.isMessageModal = e.data = e.update = e.clickFooterButton = e.updateModalSize = e.closeModal = e.openModal = e.Size = e.Action = e.isIframeModal = e.ModalMessage = e.ModalIframe = void 0;
  var t = dr;
  Object.defineProperty(e, "ModalIframe", { enumerable: !0, get: function() {
    return t.ModalIframe;
  } }), Object.defineProperty(e, "ModalMessage", { enumerable: !0, get: function() {
    return t.ModalMessage;
  } }), Object.defineProperty(e, "isIframeModal", { enumerable: !0, get: function() {
    return t.isIframeModal;
  } });
  var n = dr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "Size", { enumerable: !0, get: function() {
    return n.Size;
  } }), Object.defineProperty(e, "openModal", { enumerable: !0, get: function() {
    return n.openModal;
  } }), Object.defineProperty(e, "closeModal", { enumerable: !0, get: function() {
    return n.closeModal;
  } }), Object.defineProperty(e, "updateModalSize", { enumerable: !0, get: function() {
    return n.updateModalSize;
  } }), Object.defineProperty(e, "clickFooterButton", { enumerable: !0, get: function() {
    return n.clickFooterButton;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return n.update;
  } }), Object.defineProperty(e, "data", { enumerable: !0, get: function() {
    return n.data;
  } }), Object.defineProperty(e, "isMessageModal", { enumerable: !0, get: function() {
    return n.isMessageModal;
  } }), Object.defineProperty(e, "Modal", { enumerable: !0, get: function() {
    return n.Modal;
  } });
  var r = function(i, a) {
    return t.isIframeModal(a) ? new t.ModalIframe(i, a) : new t.ModalMessage(i, a);
  };
  e.create = r;
})(Ri);
var Dl = {}, uo = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, n.apply(this, arguments);
  }, r = b && b.__awaiter || function(l, p, h, d) {
    function f(v) {
      return v instanceof h ? v : new h(function(m) {
        m(v);
      });
    }
    return new (h || (h = Promise))(function(v, m) {
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
        T.done ? v(T.value) : f(T.value).then(g, O);
      }
      _((d = d.apply(l, p || [])).next());
    });
  }, i = b && b.__generator || function(l, p) {
    var h = { label: 0, sent: function() {
      if (v[0] & 1)
        throw v[1];
      return v[1];
    }, trys: [], ops: [] }, d, f, v, m;
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
  var a = oe, o = le, s = se, y = dr, u;
  (function(l) {
    l.LOADING = "LOADING", l.LOADED = "LOADED";
  })(u = e.Action || (e.Action = {}));
  var c = (
    /** @class */
    function(l) {
      t(p, l);
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
              payload: n({}, d)
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
})(uo);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ModalContent = e.Action = void 0;
  var t = uo;
  Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return t.ModalContent;
  } });
  var n = uo;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
  function r(i, a) {
    return new t.ModalContent(i, a);
  }
  e.create = r;
})(Dl);
var kl = {}, li = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(c) {
      for (var l, p = 1, h = arguments.length; p < h; p++) {
        l = arguments[p];
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && (c[d] = l[d]);
      }
      return c;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.History = e.replace = e.push = e.Action = void 0;
  var r = oe, i = le, a = se, o;
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
      t(l, c);
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
        var d = n(n({}, this.payload), { path: h });
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
})(li);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.replace = e.push = e.Action = e.History = void 0;
  var t = li;
  Object.defineProperty(e, "History", { enumerable: !0, get: function() {
    return t.History;
  } });
  var n = li;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "push", { enumerable: !0, get: function() {
    return n.push;
  } }), Object.defineProperty(e, "replace", { enumerable: !0, get: function() {
    return n.replace;
  } });
  function r(i) {
    return new t.History(i);
  }
  e.create = r;
})(kl);
var Mi = {}, pr = {};
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(S) {
      for (var w, I = 1, C = arguments.length; I < C; I++) {
        w = arguments[I];
        for (var k in w)
          Object.prototype.hasOwnProperty.call(w, k) && (S[k] = w[k]);
      }
      return S;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Redirect = e.isProductVariantResourcePayload = e.isCreateResourcePayload = e.isAdminSection = e.isRemotePayload = e.isAdminSectionPayload = e.isAdminPathPayload = e.isAppPayload = e.getRelativePath = e.normalizeUrl = e.getPathWithSearchAndHash = e.toDestination = e.toApp = e.toRemote = e.toAdminSection = e.toAdminPath = e.isResourcePayload = e.ResourceType = e.Action = void 0;
  var r = oe, i = le, a = se, o;
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
  function p(S, w, I) {
    switch (S) {
      case o.APP: {
        var C = v(w) ? w : { path: w };
        return l(n({ id: I }, C));
      }
      case o.ADMIN_PATH: {
        var k = m(w) ? w : { path: w };
        return y(n({ id: I }, k));
      }
      case o.ADMIN_SECTION: {
        var B = g(w) ? w : { section: w };
        return u(n({ id: I }, B));
      }
      case o.REMOTE: {
        var D = O(w) ? w : { url: w };
        return c(n({ id: I }, D));
      }
    }
  }
  e.toDestination = p;
  function h(S) {
    var w = S.pathname, I = S.search, C = S.hash;
    return "" + w + (I || "") + (C || "");
  }
  e.getPathWithSearchAndHash = h;
  function d(S) {
    return S instanceof URL ? S.toString() : typeof S == "string" ? S : f(S);
  }
  e.normalizeUrl = d;
  function f(S) {
    if (typeof S == "string")
      return S.startsWith("/") ? S : h(new URL(S));
    var w = S.search instanceof URLSearchParams ? S.search.toString() : S.search;
    return h(n(n({}, S), { search: w }));
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
})(pr);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.isProductVariantCreateResourcePayload = e.isProductVariantResourcePayload = e.isCreateResourcePayload = e.isAdminSection = e.isRemotePayload = e.isAdminSectionPayload = e.isAdminPathPayload = e.isAppPayload = e.getRelativePath = e.normalizeUrl = e.getPathWithSearchAndHash = e.toDestination = e.toApp = e.toRemote = e.toAdminSection = e.toAdminPath = e.isResourcePayload = e.ResourceType = e.Action = e.Redirect = void 0;
  var t = pr;
  Object.defineProperty(e, "Redirect", { enumerable: !0, get: function() {
    return t.Redirect;
  } }), Object.defineProperty(e, "isCreateResourcePayload", { enumerable: !0, get: function() {
    return t.isCreateResourcePayload;
  } }), Object.defineProperty(e, "isProductVariantResourcePayload", { enumerable: !0, get: function() {
    return t.isProductVariantResourcePayload;
  } });
  var n = pr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "ResourceType", { enumerable: !0, get: function() {
    return n.ResourceType;
  } }), Object.defineProperty(e, "isResourcePayload", { enumerable: !0, get: function() {
    return n.isResourcePayload;
  } }), Object.defineProperty(e, "toAdminPath", { enumerable: !0, get: function() {
    return n.toAdminPath;
  } }), Object.defineProperty(e, "toAdminSection", { enumerable: !0, get: function() {
    return n.toAdminSection;
  } }), Object.defineProperty(e, "toRemote", { enumerable: !0, get: function() {
    return n.toRemote;
  } }), Object.defineProperty(e, "toApp", { enumerable: !0, get: function() {
    return n.toApp;
  } }), Object.defineProperty(e, "toDestination", { enumerable: !0, get: function() {
    return n.toDestination;
  } }), Object.defineProperty(e, "getPathWithSearchAndHash", { enumerable: !0, get: function() {
    return n.getPathWithSearchAndHash;
  } }), Object.defineProperty(e, "normalizeUrl", { enumerable: !0, get: function() {
    return n.normalizeUrl;
  } }), Object.defineProperty(e, "getRelativePath", { enumerable: !0, get: function() {
    return n.getRelativePath;
  } }), Object.defineProperty(e, "isAppPayload", { enumerable: !0, get: function() {
    return n.isAppPayload;
  } }), Object.defineProperty(e, "isAdminPathPayload", { enumerable: !0, get: function() {
    return n.isAdminPathPayload;
  } }), Object.defineProperty(e, "isAdminSectionPayload", { enumerable: !0, get: function() {
    return n.isAdminSectionPayload;
  } }), Object.defineProperty(e, "isRemotePayload", { enumerable: !0, get: function() {
    return n.isRemotePayload;
  } }), Object.defineProperty(e, "isAdminSection", { enumerable: !0, get: function() {
    return n.isAdminSection;
  } });
  function r(a) {
    return t.isProductVariantResourcePayload(a) ? t.isCreateResourcePayload(a.variant) : !1;
  }
  e.isProductVariantCreateResourcePayload = r;
  function i(a) {
    return new t.Redirect(a);
  }
  e.create = i;
})(Mi);
var Di = {}, Ll = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.app = e.Action = void 0;
  var t = oe, n = se, r;
  (function(a) {
    a.APP = "APP::PRINT::APP";
  })(r = e.Action || (e.Action = {}));
  function i() {
    return t.actionWrapper({
      group: n.Group.Print,
      type: r.APP
    });
  }
  e.app = i;
})(Ll);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.app = e.Action = void 0;
  var t = Ll;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "app", { enumerable: !0, get: function() {
    return t.app;
  } });
})(Di);
var Ko = {}, fi = {};
(function(e) {
  var t = b && b.__extends || function() {
    var f = function(v, m) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, O) {
        g.__proto__ = O;
      } || function(g, O) {
        for (var _ in O)
          Object.prototype.hasOwnProperty.call(O, _) && (g[_] = O[_]);
      }, f(v, m);
    };
    return function(v, m) {
      if (typeof m != "function" && m !== null)
        throw new TypeError("Class extends value " + String(m) + " is not a constructor or null");
      f(v, m);
      function g() {
        this.constructor = v;
      }
      v.prototype = m === null ? Object.create(m) : (g.prototype = m.prototype, new g());
    };
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(f) {
      for (var v, m = 1, g = arguments.length; m < g; m++) {
        v = arguments[m];
        for (var O in v)
          Object.prototype.hasOwnProperty.call(v, O) && (f[O] = v[O]);
      }
      return f;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ResourcePicker = e.update = e.close = e.cancel = e.open = e.select = e.ActionVerb = e.ResourceType = e.ProductStatus = e.ProductVariantInventoryManagement = e.ProductVariantInventoryPolicy = e.WeightUnit = e.FulfillmentServiceType = e.CollectionSortOrder = e.Action = void 0;
  var r = oe, i = le, a = se, o;
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
      t(v, f);
      function v(m, g, O) {
        var _ = f.call(this, m, a.Group.ResourcePicker, a.Group.ResourcePicker) || this;
        return _.initialSelectionIds = [], _.selection = [], _.resourceType = O, _.set(g, !1), _;
      }
      return Object.defineProperty(v.prototype, "payload", {
        get: function() {
          return n(n({}, this.options), { id: this.id, resourceType: this.resourceType });
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
            var g = n(n({}, m), { showVariants: this.showVariants, showDraft: this.showDraft, showArchived: this.showArchived, showDraftBadge: this.showDraftBadge, showArchivedBadge: this.showArchivedBadge });
            return g;
          }
          return m;
        },
        enumerable: !1,
        configurable: !0
      }), v.prototype.set = function(m, g) {
        g === void 0 && (g = !0);
        var O = r.getMergedProps(this.options, m), _ = O.initialQuery, T = O.initialSelectionIds, P = T === void 0 ? [] : T, E = O.showHidden, S = E === void 0 ? !0 : E, w = O.showVariants, I = w === void 0 ? !0 : w, C = O.showDraft, k = C === void 0 ? !0 : C, B = O.showArchived, D = B === void 0 ? !0 : B, V = O.showDraftBadge, W = V === void 0 ? !1 : V, F = O.showArchivedBadge, J = F === void 0 ? !1 : F, he = O.selectMultiple, H = he === void 0 ? !0 : he, Oe = O.actionVerb, z = Oe === void 0 ? y.Add : Oe;
        return this.initialQuery = _, this.initialSelectionIds = P, this.showHidden = S, this.showVariants = I, this.showDraft = k, this.showArchived = D, this.showDraftBadge = W, this.showArchivedBadge = J, this.selectMultiple = H, this.actionVerb = z, g && this.update(), this;
      }, v.prototype.dispatch = function(m, g) {
        return m === o.OPEN ? this.open() : m === o.UPDATE ? this.update() : m === o.CLOSE || m === o.CANCEL ? this.cancel() : m === o.SELECT && (this.selection = g, this.app.dispatch(u({ id: this.id, selection: this.selection }))), this;
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
})(fi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ResourcePicker = e.WeightUnit = e.update = e.select = e.ResourceType = e.ProductVariantInventoryPolicy = e.ProductVariantInventoryManagement = e.ProductStatus = e.open = e.FulfillmentServiceType = e.CollectionSortOrder = e.close = e.cancel = e.ActionVerb = e.Action = void 0;
  var t = fi;
  Object.defineProperty(e, "ResourcePicker", { enumerable: !0, get: function() {
    return t.ResourcePicker;
  } });
  var n = fi;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "ActionVerb", { enumerable: !0, get: function() {
    return n.ActionVerb;
  } }), Object.defineProperty(e, "cancel", { enumerable: !0, get: function() {
    return n.cancel;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return n.close;
  } }), Object.defineProperty(e, "CollectionSortOrder", { enumerable: !0, get: function() {
    return n.CollectionSortOrder;
  } }), Object.defineProperty(e, "FulfillmentServiceType", { enumerable: !0, get: function() {
    return n.FulfillmentServiceType;
  } }), Object.defineProperty(e, "open", { enumerable: !0, get: function() {
    return n.open;
  } }), Object.defineProperty(e, "ProductStatus", { enumerable: !0, get: function() {
    return n.ProductStatus;
  } }), Object.defineProperty(e, "ProductVariantInventoryManagement", { enumerable: !0, get: function() {
    return n.ProductVariantInventoryManagement;
  } }), Object.defineProperty(e, "ProductVariantInventoryPolicy", { enumerable: !0, get: function() {
    return n.ProductVariantInventoryPolicy;
  } }), Object.defineProperty(e, "ResourceType", { enumerable: !0, get: function() {
    return n.ResourceType;
  } }), Object.defineProperty(e, "select", { enumerable: !0, get: function() {
    return n.select;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return n.update;
  } }), Object.defineProperty(e, "WeightUnit", { enumerable: !0, get: function() {
    return n.WeightUnit;
  } });
  var r = function(i, a) {
    var o = a.resourceType, s = a.options, y = s === void 0 ? {} : s;
    return new t.ResourcePicker(i, y, o);
  };
  e.create = r;
})(Ko);
var Yo = {}, Bl = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  var n = oe, r = le, i = se, a;
  (function(u) {
    u.OPEN_CAMERA = "APP::SCANNER::OPEN::CAMERA", u.CAPTURE = "APP::SCANNER::CAPTURE";
  })(a = e.Action || (e.Action = {}));
  var o = (
    /** @class */
    function(u) {
      t(c, u);
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
        this.app.dispatch(n.actionWrapper({
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
    return n.actionWrapper({
      group: i.Group.Scanner,
      type: a.OPEN_CAMERA
    });
  }
  e.openCamera = s;
  function y(u) {
    return n.actionWrapper({
      group: i.Group.Scanner,
      type: a.CAPTURE,
      payload: u
    });
  }
  e.capture = y;
})(Bl);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.capture = e.openCamera = e.Scanner = e.Action = void 0;
  var t = Bl;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "Scanner", { enumerable: !0, get: function() {
    return t.Scanner;
  } }), Object.defineProperty(e, "openCamera", { enumerable: !0, get: function() {
    return t.openCamera;
  } }), Object.defineProperty(e, "capture", { enumerable: !0, get: function() {
    return t.capture;
  } });
  function n(r, i) {
    return new t.Scanner(r, i);
  }
  e.create = n;
})(Yo);
var Jo = {}, Fl = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.request = e.Action = void 0;
  var t = oe, n = se, r;
  (function(o) {
    o.REQUEST = "APP::SESSION_TOKEN::REQUEST", o.RESPOND = "APP::SESSION_TOKEN::RESPOND";
  })(r = e.Action || (e.Action = {}));
  function i() {
    return t.actionWrapper({
      group: n.Group.SessionToken,
      type: r.REQUEST
    });
  }
  e.request = i;
  function a(o) {
    return t.actionWrapper({
      payload: o,
      group: n.Group.SessionToken,
      type: r.RESPOND
    });
  }
  e.respond = a;
})(Fl);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.respond = e.request = e.Action = void 0;
  var t = Fl;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "request", { enumerable: !0, get: function() {
    return t.request;
  } }), Object.defineProperty(e, "respond", { enumerable: !0, get: function() {
    return t.respond;
  } });
})(Jo);
var Xo = {}, di = {}, ki = {};
Object.defineProperty(ki, "__esModule", { value: !0 });
ki.getGroupedButton = void 0;
var um = en;
function sm(e, t, n, r) {
  e.addChild(t, e.group, n);
  var i = t.id, a = t.label, o = t.disabled, s = t.buttons, y = t.plain;
  return e.subscribeToChild(t, um.Action.UPDATE, r), { id: i, label: a, buttons: s, disabled: o, plain: y };
}
ki.getGroupedButton = sm;
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(m) {
      for (var g, O = 1, _ = arguments.length; O < _; O++) {
        g = arguments[O];
        for (var T in g)
          Object.prototype.hasOwnProperty.call(g, T) && (m[T] = g[T]);
      }
      return m;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.TitleBar = e.update = e.clickBreadcrumb = e.clickActionButton = e.Action = void 0;
  var r = le, i = Nt, a = en, o = ki, s = nn, y = oe, u = se, c;
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
  function h(m, g) {
    var O = u.ComponentType.Button, _ = n({ id: m, type: O }, l);
    return i.clickButton(u.Group.TitleBar, _, g);
  }
  e.clickActionButton = h;
  function d(m, g) {
    var O = n({ id: m }, p);
    return i.clickButton(u.Group.TitleBar, O, g);
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
          return n(n({}, this.options), { breadcrumbs: this.breadcrumb, buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), g.prototype.set = function(O, _) {
        _ === void 0 && (_ = !0);
        var T = y.getMergedProps(this.options, O), P = T.title, E = T.buttons, S = T.breadcrumbs;
        return this.title = P, this.setBreadcrumbs(S), this.setPrimaryButton(E ? E.primary : void 0), this.setSecondaryButton(E ? E.secondary : void 0), _ && this.dispatch(c.UPDATE), this;
      }, g.prototype.dispatch = function(O) {
        switch (O) {
          case c.UPDATE:
            this.app.dispatch(f(this.payload));
            break;
        }
        return this;
      }, g.prototype.getButton = function(O, _, T) {
        return O instanceof a.ButtonGroup ? o.getGroupedButton(this, O, _, T) : s.getSingleButton(this, O, _, T);
      }, g.prototype.updatePrimaryButton = function(O) {
        this.primary && y.updateActionFromPayload(this.primary, O) && this.dispatch(c.UPDATE);
      }, g.prototype.updateSecondaryButtons = function(O) {
        if (this.secondary) {
          var _ = this.secondary.find(function(P) {
            return P.id === O.id;
          });
          if (_) {
            var T = !1;
            a.isGroupedButtonPayload(O), T = y.updateActionFromPayload(_, O), T && this.dispatch(c.UPDATE);
          }
        }
      }, g.prototype.updateBreadcrumbButton = function(O) {
        this.breadcrumb && y.updateActionFromPayload(this.breadcrumb, O) && this.dispatch(c.UPDATE);
      }, g.prototype.setPrimaryButton = function(O) {
        this.primaryOptions = this.getChildButton(O, this.primaryOptions), this.primary = this.primaryOptions ? this.getButton(this.primaryOptions, l.subgroups, this.updatePrimaryButton) : void 0;
      }, g.prototype.setSecondaryButton = function(O) {
        var _ = this, T = O || [], P = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(T, P), this.secondary = this.secondaryOptions ? this.secondaryOptions.map(function(E) {
          return _.getButton(E, l.subgroups, _.updateSecondaryButtons);
        }) : void 0;
      }, g.prototype.setBreadcrumbs = function(O) {
        this.breadcrumbsOption = this.getChildButton(O, this.breadcrumbsOption), this.breadcrumb = this.breadcrumbsOption ? this.getButton(this.breadcrumbsOption, p.subgroups, this.updateBreadcrumbButton) : void 0;
      }, g.prototype.getChildButton = function(O, _) {
        var T = O ? [O] : [], P = _ ? [_] : [], E = this.getUpdatedChildActions(T, P);
        return E ? E[0] : void 0;
      }, g;
    }(r.ActionSetWithChildren)
  );
  e.TitleBar = v;
})(di);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.TitleBar = e.update = e.clickBreadcrumb = e.clickActionButton = e.Action = void 0;
  var t = di;
  Object.defineProperty(e, "TitleBar", { enumerable: !0, get: function() {
    return t.TitleBar;
  } });
  var n = di;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "clickActionButton", { enumerable: !0, get: function() {
    return n.clickActionButton;
  } }), Object.defineProperty(e, "clickBreadcrumb", { enumerable: !0, get: function() {
    return n.clickBreadcrumb;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return n.update;
  } });
  function r(i, a) {
    return new t.TitleBar(i, a);
  }
  e.create = r;
})(Xo);
var Zo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Toast = e.primaryAction = e.clear = e.show = e.Action = void 0;
  var t = fr;
  Object.defineProperty(e, "Toast", { enumerable: !0, get: function() {
    return t.Toast;
  } });
  var n = fr;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return n.show;
  } }), Object.defineProperty(e, "clear", { enumerable: !0, get: function() {
    return n.clear;
  } }), Object.defineProperty(e, "primaryAction", { enumerable: !0, get: function() {
    return n.primaryAction;
  } });
  function r(i, a) {
    return new t.Toast(i, a);
  }
  e.create = r;
})(Zo);
var xo = {}, eu = {};
(function(e) {
  var t = b && b.__extends || function() {
    var d = function(f, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(d) {
      for (var f, v = 1, m = arguments.length; v < m; v++) {
        f = arguments[v];
        for (var g in f)
          Object.prototype.hasOwnProperty.call(f, g) && (d[g] = f[g]);
      }
      return d;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ContextualSaveBar = e.update = e.discard = e.save = e.hide = e.show = e.Action = void 0;
  var r = oe, i = le, a = se, o;
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
      t(f, d);
      function f(v, m) {
        m === void 0 && (m = {});
        var g = d.call(this, v, a.Group.ContextualSaveBar, a.Group.ContextualSaveBar) || this;
        return g.options = m, g.set(m, !1), g;
      }
      return Object.defineProperty(f.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function() {
          return n({ id: this.id }, this.options);
        },
        enumerable: !1,
        configurable: !0
      }), f.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = r.getMergedProps(this.options, v);
        return this.options = g, m && this.dispatch(o.UPDATE), this;
      }, f.prototype.dispatch = function(v) {
        return this.app.dispatch(s(v, this.payload)), this;
      }, f;
    }(i.ActionSet)
  );
  e.ContextualSaveBar = h;
})(eu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ContextualSaveBar = e.update = e.discard = e.save = e.hide = e.show = e.Action = void 0;
  var t = eu;
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
  function n(r, i) {
    return new t.ContextualSaveBar(r, i);
  }
  e.create = n;
})(xo);
var Ul = {}, so = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(c) {
      for (var l, p = 1, h = arguments.length; p < h; p++) {
        l = arguments[p];
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && (c[d] = l[d]);
      }
      return c;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.close = e.show = e.Share = e.Action = void 0;
  var r = se, i = oe, a = le, o;
  (function(c) {
    c.SHOW = "APP::SHARE::SHOW", c.CLOSE = "APP::SHARE::CLOSE";
  })(o = e.Action || (e.Action = {}));
  var s = (
    /** @class */
    function(c) {
      t(l, c);
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
          payload: n({ id: this.id }, h)
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
})(so);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Share = e.close = e.show = e.Action = void 0;
  var t = so;
  Object.defineProperty(e, "Share", { enumerable: !0, get: function() {
    return t.Share;
  } });
  var n = so;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "show", { enumerable: !0, get: function() {
    return n.show;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return n.close;
  } });
  function r(i) {
    return new t.Share(i);
  }
  e.create = r;
})(Ul);
var tu = {}, pi = {}, Nn = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(c) {
      for (var l, p = 1, h = arguments.length; p < h; p++) {
        l = arguments[p];
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && (c[d] = l[d]);
      }
      return c;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.AppLink = e.update = e.Action = void 0;
  var r = oe, i = le, a = se, o = pr, s;
  (function(c) {
    c.UPDATE = "UPDATE";
  })(s = e.Action || (e.Action = {}));
  function y(c, l, p) {
    var h = l.id, d = p.label, f = p.destination, v = n(n({}, p), { id: h, label: d, destination: f });
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
      t(l, c);
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
})(Nn);
(function(e) {
  var t = b && b.__extends || function() {
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.NavigationMenu = e.update = e.Action = void 0;
  var r = Nn, i = oe, a = le, o = se, s = ["Navigation_Menu"], y;
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
      t(p, l);
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
          return n(n({}, this.options), { active: this.active, items: this.items, id: this.id });
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
})(pi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.NavigationMenu = e.update = e.Action = void 0;
  var t = pi;
  Object.defineProperty(e, "NavigationMenu", { enumerable: !0, get: function() {
    return t.NavigationMenu;
  } });
  var n = pi;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return n.update;
  } });
  function r(i, a) {
    return new t.NavigationMenu(i, a);
  }
  e.create = r;
})(tu);
var Vl = {}, hi = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ChannelMenu = e.update = e.Action = void 0;
  var r = Nn, i = oe, a = le, o = se, s = ["Channel_Menu"], y;
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
      t(p, l);
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
          return n(n({}, this.options), { active: this.active, items: this.items, id: this.id });
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
})(hi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.ChannelMenu = e.update = e.Action = void 0;
  var t = hi;
  Object.defineProperty(e, "ChannelMenu", { enumerable: !0, get: function() {
    return t.ChannelMenu;
  } });
  var n = hi;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return n.update;
  } });
  function r(i, a) {
    return new t.ChannelMenu(i, a);
  }
  e.create = r;
})(Vl);
var nu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.AppLink = e.update = e.Action = void 0;
  var t = Nn;
  Object.defineProperty(e, "AppLink", { enumerable: !0, get: function() {
    return t.AppLink;
  } });
  var n = Nn;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return n.update;
  } });
  function r(i, a) {
    return new t.AppLink(i, a);
  }
  e.create = r;
})(nu);
var $l = {}, co = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  var n = oe, r = le, i = se, a;
  (function(y) {
    y.CLOSE = "APP::POS::CLOSE", y.LOCATION_UPDATE = "APP::POS::LOCATION::UPDATE", y.USER_UPDATE = "APP::POS::USER::UPDATE", y.DEVICE_UPDATE = "APP::POS::DEVICE::UPDATE";
  })(a = e.Action || (e.Action = {}));
  function o() {
    return n.actionWrapper({
      group: i.Group.Pos,
      type: a.CLOSE
    });
  }
  e.close = o;
  var s = (
    /** @class */
    function(y) {
      t(u, y);
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
})(co);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.Pos = e.close = e.Action = void 0;
  var t = co;
  Object.defineProperty(e, "Pos", { enumerable: !0, get: function() {
    return t.Pos;
  } });
  var n = co;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "close", { enumerable: !0, get: function() {
    return n.close;
  } });
  function r(i) {
    return new t.Pos(i);
  }
  e.create = r;
})($l);
var Gl = {}, ql = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(t) {
    t.UPDATE = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::UPDATE", t.BUTTON_CLICK = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::CLICK", t.BUTTON_UPDATE = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::UPDATE";
  }(e.Action || (e.Action = {}));
})(ql);
var Wl = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getSingleButton = void 0;
  var t = nn;
  Object.defineProperty(e, "getSingleButton", { enumerable: !0, get: function() {
    return t.getSingleButton;
  } });
})(Wl);
var Hl = {};
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
})(Hl);
(function(e) {
  var t = b && b.__extends || function() {
    var d = function(f, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(d) {
      for (var f, v = 1, m = arguments.length; v < m; v++) {
        f = arguments[v];
        for (var g in f)
          Object.prototype.hasOwnProperty.call(f, g) && (d[g] = f[g]);
      }
      return d;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.MarketingExternalActivityTopBar = e.update = e.clickActionButton = e.MarketingActivityStatusBadgeType = e.Action = void 0;
  var r = ql;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return r.Action;
  } });
  var i = Ar, a = Wl, o = Ut, s = Hl, y = Vt;
  (function(d) {
    d.Default = "DEFAULT", d.Success = "SUCCESS", d.Attention = "ATTENTION", d.Warning = "WARNING", d.Info = "INFO";
  })(e.MarketingActivityStatusBadgeType || (e.MarketingActivityStatusBadgeType = {}));
  var u = {
    group: y.Group.MarketingExternalActivityTopBar,
    subgroups: ["Buttons"]
  };
  function c(d, f) {
    var v = y.ComponentType.Button, m = n({ id: d, type: v }, u);
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
      t(f, d);
      function f(v, m) {
        var g = d.call(this, v, y.Group.MarketingExternalActivityTopBar, y.Group.MarketingExternalActivityTopBar) || this;
        return g.set(m), g;
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
          return n(n({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: !1,
        configurable: !0
      }), f.prototype.set = function(v, m) {
        m === void 0 && (m = !0);
        var g = o.getMergedProps(this.options, v), O = g.title, _ = g.buttons, T = g.saved, P = g.saving, E = g.status;
        return this.title = O, this.saving = P, this.saved = T, this.status = E, this.setPrimaryButton(_ ? _.primary : void 0), this.setSecondaryButtons(_ ? _.secondary : void 0), m && this.dispatch(r.Action.UPDATE), this;
      }, f.prototype.dispatch = function(v) {
        switch (v) {
          case r.Action.UPDATE:
            this.app.dispatch(l(this.payload));
            break;
        }
        return this;
      }, f.prototype.getButton = function(v, m, g) {
        return a.getSingleButton(this, v, m, g);
      }, f.prototype.updatePrimaryButton = function(v) {
        this.primary && o.updateActionFromPayload(this.primary, v) && this.dispatch(r.Action.UPDATE);
      }, f.prototype.updateSecondaryButtons = function(v) {
        if (this.secondary) {
          var m = this.secondary.find(function(O) {
            return O.id === v.id;
          });
          if (m) {
            var g = o.updateActionFromPayload(m, v);
            g && this.dispatch(r.Action.UPDATE);
          }
        }
      }, f.prototype.setPrimaryButton = function(v) {
        this.primaryOptions = this.getChildButton(v, this.primaryOptions), this.primary = this.primaryOptions ? this.getButton(this.primaryOptions, u.subgroups, this.updatePrimaryButton) : void 0;
      }, f.prototype.setSecondaryButtons = function(v) {
        var m = this, g = v || [], O = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(g, O), this.secondary = this.secondaryOptions ? this.secondaryOptions.map(function(_) {
          return m.getButton(_, u.subgroups, m.updateSecondaryButtons);
        }) : void 0;
      }, f.prototype.updateSaving = function(v) {
        this.saving = v, this.dispatch(r.Action.UPDATE);
      }, f.prototype.updateSaved = function(v) {
        this.saved = v, this.dispatch(r.Action.UPDATE);
      }, f.prototype.updateStatus = function(v) {
        this.status = v, this.dispatch(r.Action.UPDATE);
      }, f.prototype.getChildButton = function(v, m) {
        var g = v ? [v] : [], O = m ? [m] : [], _ = this.getUpdatedChildActions(g, O);
        return _ ? _[0] : void 0;
      }, f;
    }(s.ActionSetWithChildren)
  );
  e.MarketingExternalActivityTopBar = p;
  function h(d, f) {
    return new p(d, f);
  }
  e.create = h;
})(Gl);
var zl = {}, Ql = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fullPageLoad = e.skeletonPageLoad = e.Action = void 0;
  var t = se, n = oe, r;
  (function(o) {
    o.SKELETON_PAGE_LOAD = "APP::PERFORMANCE::SKELETON_PAGE_LOAD", o.FULL_PAGE_LOAD = "APP::PERFORMANCE::FULL_PAGE_LOAD";
  })(r = e.Action || (e.Action = {}));
  function i() {
    return n.actionWrapper({
      group: t.Group.Performance,
      type: r.SKELETON_PAGE_LOAD
    });
  }
  e.skeletonPageLoad = i;
  function a() {
    return n.actionWrapper({
      group: t.Group.Performance,
      type: r.FULL_PAGE_LOAD
    });
  }
  e.fullPageLoad = a;
})(Ql);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fullPageLoad = e.skeletonPageLoad = e.Action = void 0;
  var t = Ql;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t.Action;
  } }), Object.defineProperty(e, "skeletonPageLoad", { enumerable: !0, get: function() {
    return t.skeletonPageLoad;
  } }), Object.defineProperty(e, "fullPageLoad", { enumerable: !0, get: function() {
    return t.fullPageLoad;
  } });
})(zl);
var Kl = {}, yi = {};
(function(e) {
  var t = b && b.__extends || function() {
    var d = function(f, v) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, g) {
        m.__proto__ = g;
      } || function(m, g) {
        for (var O in g)
          Object.prototype.hasOwnProperty.call(g, O) && (m[O] = g[O]);
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
  }(), n = b && b.__assign || function() {
    return n = Object.assign || function(d) {
      for (var f, v = 1, m = arguments.length; v < m; v++) {
        f = arguments[v];
        for (var g in f)
          Object.prototype.hasOwnProperty.call(f, g) && (d[g] = f[g]);
      }
      return d;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.unstable_Picker = e.loadMore = e.search = e.update = e.cancel = e.open = e.select = e.ALL_RESOURCE_VERTICAL_ALIGNMENT = e.ALL_MEDIA_KINDS = e.ALL_BADGE_STATUSES = e.ALL_BADGE_PROGRESSES = e.Action = void 0;
  var r = oe, i = le, a = se, o;
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
      t(f, d);
      function f(v, m) {
        var g = d.call(this, v, a.Group.unstable_Picker, a.Group.unstable_Picker) || this;
        return g.items = [], g.selectedItems = [], g.set(m, !1), g;
      }
      return Object.defineProperty(f.prototype, "payload", {
        get: function() {
          return n(n({}, this.options), { id: this.id });
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
        var g = r.getMergedProps(this.options, v), O = g.selectedItems, _ = O === void 0 ? [] : O, T = g.maxSelectable, P = T === void 0 ? 0 : T, E = g.items, S = E === void 0 ? [] : E, w = g.loading, I = w === void 0 ? !1 : w, C = g.title, k = g.searchQuery, B = g.searchQueryPlaceholder, D = g.primaryActionLabel, V = g.secondaryActionLabel, W = g.emptySearchLabel, F = g.canLoadMore, J = F === void 0 ? !1 : F, he = g.loadingMore, H = he === void 0 ? !1 : he, Oe = g.verticalAlignment, z = g.allowEmptySelection, ne = g.resourceName;
        return this.title = C, this.items = S, this.selectedItems = _, this.maxSelectable = P, this.loading = I, this.searchQuery = k, this.searchQueryPlaceholder = B, this.primaryActionLabel = D, this.secondaryActionLabel = V, this.emptySearchLabel = W, this.canLoadMore = J, this.loadingMore = H, this.verticalAlignment = Oe, this.allowEmptySelection = z, this.resourceName = ne, m && this.update(), this;
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
})(yi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.create = e.unstable_Picker = e.update = e.select = e.search = e.open = e.loadMore = e.cancel = e.ALL_RESOURCE_VERTICAL_ALIGNMENT = e.ALL_MEDIA_KINDS = e.ALL_BADGE_STATUSES = e.ALL_BADGE_PROGRESSES = e.Action = void 0;
  var t = yi;
  Object.defineProperty(e, "unstable_Picker", { enumerable: !0, get: function() {
    return t.unstable_Picker;
  } });
  var n = yi;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } }), Object.defineProperty(e, "ALL_BADGE_PROGRESSES", { enumerable: !0, get: function() {
    return n.ALL_BADGE_PROGRESSES;
  } }), Object.defineProperty(e, "ALL_BADGE_STATUSES", { enumerable: !0, get: function() {
    return n.ALL_BADGE_STATUSES;
  } }), Object.defineProperty(e, "ALL_MEDIA_KINDS", { enumerable: !0, get: function() {
    return n.ALL_MEDIA_KINDS;
  } }), Object.defineProperty(e, "ALL_RESOURCE_VERTICAL_ALIGNMENT", { enumerable: !0, get: function() {
    return n.ALL_RESOURCE_VERTICAL_ALIGNMENT;
  } }), Object.defineProperty(e, "cancel", { enumerable: !0, get: function() {
    return n.cancel;
  } }), Object.defineProperty(e, "loadMore", { enumerable: !0, get: function() {
    return n.loadMore;
  } }), Object.defineProperty(e, "open", { enumerable: !0, get: function() {
    return n.open;
  } }), Object.defineProperty(e, "search", { enumerable: !0, get: function() {
    return n.search;
  } }), Object.defineProperty(e, "select", { enumerable: !0, get: function() {
    return n.select;
  } }), Object.defineProperty(e, "update", { enumerable: !0, get: function() {
    return n.update;
  } });
  var r = function(i, a) {
    return new t.unstable_Picker(i, a);
  };
  e.create = r;
})(Kl);
var ru = {}, Yl = {}, lo = { exports: {} };
(function(e, t) {
  (function(n, r) {
    r(t);
  })(b, function(n) {
    var r, i, a, o, s, y = -1, u = function(M) {
      addEventListener("pageshow", function(N) {
        N.persisted && (y = N.timeStamp, M(N));
      }, !0);
    }, c = function() {
      return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    }, l = function() {
      var M = c();
      return M && M.activationStart || 0;
    }, p = function(M, N) {
      var U = c(), Q = "navigate";
      return y >= 0 ? Q = "back-forward-cache" : U && (document.prerendering || l() > 0 ? Q = "prerender" : document.wasDiscarded ? Q = "restore" : U.type && (Q = U.type.replace(/_/g, "-"))), { name: M, value: N === void 0 ? -1 : N, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: Q };
    }, h = function(M, N, U) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(M)) {
          var Q = new PerformanceObserver(function($) {
            Promise.resolve().then(function() {
              N($.getEntries());
            });
          });
          return Q.observe(Object.assign({ type: M, buffered: !0 }, U || {})), Q;
        }
      } catch {
      }
    }, d = function(M, N, U, Q) {
      var $, ee;
      return function(Pe) {
        N.value >= 0 && (Pe || Q) && ((ee = N.value - ($ || 0)) || $ === void 0) && ($ = N.value, N.delta = ee, N.rating = function(ve, de) {
          return ve > de[1] ? "poor" : ve > de[0] ? "needs-improvement" : "good";
        }(N.value, U), M(N));
      };
    }, f = function(M) {
      requestAnimationFrame(function() {
        return requestAnimationFrame(function() {
          return M();
        });
      });
    }, v = function(M) {
      var N = function(U) {
        U.type !== "pagehide" && document.visibilityState !== "hidden" || M(U);
      };
      addEventListener("visibilitychange", N, !0), addEventListener("pagehide", N, !0);
    }, m = function(M) {
      var N = !1;
      return function(U) {
        N || (M(U), N = !0);
      };
    }, g = -1, O = function() {
      return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0;
    }, _ = function(M) {
      document.visibilityState === "hidden" && g > -1 && (g = M.type === "visibilitychange" ? M.timeStamp : 0, P());
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
    }, S = function(M) {
      document.prerendering ? addEventListener("prerenderingchange", function() {
        return M();
      }, !0) : M();
    }, w = [1800, 3e3], I = function(M, N) {
      N = N || {}, S(function() {
        var U, Q = E(), $ = p("FCP"), ee = h("paint", function(Pe) {
          Pe.forEach(function(ve) {
            ve.name === "first-contentful-paint" && (ee.disconnect(), ve.startTime < Q.firstHiddenTime && ($.value = Math.max(ve.startTime - l(), 0), $.entries.push(ve), U(!0)));
          });
        });
        ee && (U = d(M, $, w, N.reportAllChanges), u(function(Pe) {
          $ = p("FCP"), U = d(M, $, w, N.reportAllChanges), f(function() {
            $.value = performance.now() - Pe.timeStamp, U(!0);
          });
        }));
      });
    }, C = [0.1, 0.25], k = function(M, N) {
      N = N || {}, I(m(function() {
        var U, Q = p("CLS", 0), $ = 0, ee = [], Pe = function(de) {
          de.forEach(function(we) {
            if (!we.hadRecentInput) {
              var un = ee[0], Mt = ee[ee.length - 1];
              $ && we.startTime - Mt.startTime < 1e3 && we.startTime - un.startTime < 5e3 ? ($ += we.value, ee.push(we)) : ($ = we.value, ee = [we]);
            }
          }), $ > Q.value && (Q.value = $, Q.entries = ee, U());
        }, ve = h("layout-shift", Pe);
        ve && (U = d(M, Q, C, N.reportAllChanges), v(function() {
          Pe(ve.takeRecords()), U(!0);
        }), u(function() {
          $ = 0, Q = p("CLS", 0), U = d(M, Q, C, N.reportAllChanges), f(function() {
            return U();
          });
        }), setTimeout(U, 0));
      }));
    }, B = { passive: !0, capture: !0 }, D = /* @__PURE__ */ new Date(), V = function(M, N) {
      r || (r = N, i = M, a = /* @__PURE__ */ new Date(), J(removeEventListener), W());
    }, W = function() {
      if (i >= 0 && i < a - D) {
        var M = { entryType: "first-input", name: r.type, target: r.target, cancelable: r.cancelable, startTime: r.timeStamp, processingStart: r.timeStamp + i };
        o.forEach(function(N) {
          N(M);
        }), o = [];
      }
    }, F = function(M) {
      if (M.cancelable) {
        var N = (M.timeStamp > 1e12 ? /* @__PURE__ */ new Date() : performance.now()) - M.timeStamp;
        M.type == "pointerdown" ? function(U, Q) {
          var $ = function() {
            V(U, Q), Pe();
          }, ee = function() {
            Pe();
          }, Pe = function() {
            removeEventListener("pointerup", $, B), removeEventListener("pointercancel", ee, B);
          };
          addEventListener("pointerup", $, B), addEventListener("pointercancel", ee, B);
        }(N, M) : V(N, M);
      }
    }, J = function(M) {
      ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(N) {
        return M(N, F, B);
      });
    }, he = [100, 300], H = function(M, N) {
      N = N || {}, S(function() {
        var U, Q = E(), $ = p("FID"), ee = function(de) {
          de.startTime < Q.firstHiddenTime && ($.value = de.processingStart - de.startTime, $.entries.push(de), U(!0));
        }, Pe = function(de) {
          de.forEach(ee);
        }, ve = h("first-input", Pe);
        U = d(M, $, he, N.reportAllChanges), ve && v(m(function() {
          Pe(ve.takeRecords()), ve.disconnect();
        })), ve && u(function() {
          var de;
          $ = p("FID"), U = d(M, $, he, N.reportAllChanges), o = [], i = -1, r = null, J(addEventListener), de = ee, o.push(de), W();
        });
      });
    }, Oe = 0, z = 1 / 0, ne = 0, ye = function(M) {
      M.forEach(function(N) {
        N.interactionId && (z = Math.min(z, N.interactionId), ne = Math.max(ne, N.interactionId), Oe = ne ? (ne - z) / 7 + 1 : 0);
      });
    }, ue = function() {
      return s ? Oe : performance.interactionCount || 0;
    }, K = function() {
      "interactionCount" in performance || s || (s = h("event", ye, { type: "event", buffered: !0, durationThreshold: 0 }));
    }, Re = [200, 500], Ae = 0, Ue = function() {
      return ue() - Ae;
    }, Te = [], dt = {}, Et = function(M) {
      var N = Te[Te.length - 1], U = dt[M.interactionId];
      if (U || Te.length < 10 || M.duration > N.latency) {
        if (U)
          U.entries.push(M), U.latency = Math.max(U.latency, M.duration);
        else {
          var Q = { id: M.interactionId, latency: M.duration, entries: [M] };
          dt[Q.id] = Q, Te.push(Q);
        }
        Te.sort(function($, ee) {
          return ee.latency - $.latency;
        }), Te.splice(10).forEach(function($) {
          delete dt[$.id];
        });
      }
    }, Ir = function(M, N) {
      N = N || {}, S(function() {
        K();
        var U, Q = p("INP"), $ = function(Pe) {
          Pe.forEach(function(we) {
            we.interactionId && Et(we), we.entryType === "first-input" && !Te.some(function(un) {
              return un.entries.some(function(Mt) {
                return we.duration === Mt.duration && we.startTime === Mt.startTime;
              });
            }) && Et(we);
          });
          var ve, de = (ve = Math.min(Te.length - 1, Math.floor(Ue() / 50)), Te[ve]);
          de && de.latency !== Q.value && (Q.value = de.latency, Q.entries = de.entries, U());
        }, ee = h("event", $, { durationThreshold: N.durationThreshold || 40 });
        U = d(M, Q, Re, N.reportAllChanges), ee && (ee.observe({ type: "first-input", buffered: !0 }), v(function() {
          $(ee.takeRecords()), Q.value < 0 && Ue() > 0 && (Q.value = 0, Q.entries = []), U(!0);
        }), u(function() {
          Te = [], Ae = ue(), Q = p("INP"), U = d(M, Q, Re, N.reportAllChanges);
        }));
      });
    }, qn = [2500, 4e3], Rt = {}, $t = function(M, N) {
      N = N || {}, S(function() {
        var U, Q = E(), $ = p("LCP"), ee = function(de) {
          var we = de[de.length - 1];
          we && we.startTime < Q.firstHiddenTime && ($.value = Math.max(we.startTime - l(), 0), $.entries = [we], U());
        }, Pe = h("largest-contentful-paint", ee);
        if (Pe) {
          U = d(M, $, qn, N.reportAllChanges);
          var ve = m(function() {
            Rt[$.id] || (ee(Pe.takeRecords()), Pe.disconnect(), Rt[$.id] = !0, U(!0));
          });
          ["keydown", "click"].forEach(function(de) {
            addEventListener(de, ve, !0);
          }), v(ve), u(function(de) {
            $ = p("LCP"), U = d(M, $, qn, N.reportAllChanges), f(function() {
              $.value = performance.now() - de.timeStamp, Rt[$.id] = !0, U(!0);
            });
          });
        }
      });
    }, on = [800, 1800], jr = function M(N) {
      document.prerendering ? S(function() {
        return M(N);
      }) : document.readyState !== "complete" ? addEventListener("load", function() {
        return M(N);
      }, !0) : setTimeout(N, 0);
    }, Gt = function(M, N) {
      N = N || {};
      var U = p("TTFB"), Q = d(M, U, on, N.reportAllChanges);
      jr(function() {
        var $ = c();
        if ($) {
          var ee = $.responseStart;
          if (ee <= 0 || ee > performance.now())
            return;
          U.value = Math.max(ee - l(), 0), U.entries = [$], Q(!0), u(function() {
            U = p("TTFB", 0), (Q = d(M, U, on, N.reportAllChanges))(!0);
          });
        }
      });
    };
    n.CLSThresholds = C, n.FCPThresholds = w, n.FIDThresholds = he, n.INPThresholds = Re, n.LCPThresholds = qn, n.TTFBThresholds = on, n.getCLS = k, n.getFCP = I, n.getFID = H, n.getINP = Ir, n.getLCP = $t, n.getTTFB = Gt, n.onCLS = k, n.onFCP = I, n.onFID = H, n.onINP = Ir, n.onLCP = $t, n.onTTFB = Gt, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(lo, lo.exports);
var cm = lo.exports, Jl = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0, function(t) {
    t.LARGEST_CONTENTFUL_PAINT = "APP::WEB_VITALS::LARGEST_CONTENTFUL_PAINT", t.FIRST_INPUT_DELAY = "APP::WEB_VITALS::FIRST_INPUT_DELAY", t.CUMULATIVE_LAYOUT_SHIFT = "APP::WEB_VITALS::CUMULATIVE_LAYOUT_SHIFT", t.FIRST_CONTENTFUL_PAINT = "APP::WEB_VITALS::FIRST_CONTENTFUL_PAINT", t.TIME_TO_FIRST_BYTE = "APP::WEB_VITALS::TIME_TO_FIRST_BYTE", t.INTERACTION_TO_NEXT_PAINT = "APP::WEB_VITALS::INTERACTION_TO_NEXT_PAINT";
  }(e.Action || (e.Action = {}));
})(Jl);
var Pr = {}, vi = {};
(function(e) {
  var t, n;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isUnframed = e.isClient = e.isServer = void 0, e.isServer = typeof window > "u", e.isClient = !e.isServer, e.isUnframed = e.isClient && ((n = (t = window.navigator) === null || t === void 0 ? void 0 : t.userAgent) === null || n === void 0 ? void 0 : n.indexOf("Unframed")) > 0;
})(vi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isDevelopmentClient = e.isProduction = e.isDevelopment = e.isUnframed = e.isServer = e.isClient = void 0;
  var t = vi, n = vi;
  Object.defineProperty(e, "isClient", { enumerable: !0, get: function() {
    return n.isClient;
  } }), Object.defineProperty(e, "isServer", { enumerable: !0, get: function() {
    return n.isServer;
  } }), Object.defineProperty(e, "isUnframed", { enumerable: !0, get: function() {
    return n.isUnframed;
  } }), e.isDevelopment = typeof process < "u" && process.env && process.env.NODE_ENV === "development", e.isProduction = !e.isDevelopment, e.isDevelopmentClient = e.isDevelopment && t.isClient;
})(Pr);
var ft = {};
Object.defineProperty(ft, "__esModule", { value: !0 });
ft.isShopifyPing = ft.isShopifyPOS = ft.isShopifyMobile = ft.isShopifyEmbedded = ft.isMobile = void 0;
var Ss = Pr;
function lm() {
  return Xl() || Zl() || xl();
}
ft.isMobile = lm;
function fm() {
  return Ss.isClient && window.top !== window.self || Ss.isUnframed;
}
ft.isShopifyEmbedded = fm;
function Xl() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Mobile") >= 0;
}
ft.isShopifyMobile = Xl;
function Zl() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify POS") >= 0;
}
ft.isShopifyPOS = Zl;
function xl() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Ping") >= 0;
}
ft.isShopifyPing = xl;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initializeWebVitals = e.interactionToNextPaint = e.timeToFirstByte = e.firstContentfulPaint = e.cumulativeLayoutShift = e.firstInputDelay = e.largestContentfulPaint = e.Action = void 0;
  var t = cm, n = Jl;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return n.Action;
  } });
  var r = Pr, i = Vt, a = Ut, o = ft;
  function s(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: n.Action.LARGEST_CONTENTFUL_PAINT,
      payload: d
    });
  }
  e.largestContentfulPaint = s;
  function y(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: n.Action.FIRST_INPUT_DELAY,
      payload: d
    });
  }
  e.firstInputDelay = y;
  function u(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: n.Action.CUMULATIVE_LAYOUT_SHIFT,
      payload: d
    });
  }
  e.cumulativeLayoutShift = u;
  function c(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: n.Action.FIRST_CONTENTFUL_PAINT,
      payload: d
    });
  }
  e.firstContentfulPaint = c;
  function l(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: n.Action.TIME_TO_FIRST_BYTE,
      payload: d
    });
  }
  e.timeToFirstByte = l;
  function p(d) {
    return a.actionWrapper({
      group: i.Group.WebVitals,
      type: n.Action.INTERACTION_TO_NEXT_PAINT,
      payload: d
    });
  }
  e.interactionToNextPaint = p;
  function h(d) {
    function f(m) {
      return function(g) {
        var O = g.id, _ = g.name, T = g.value, P = { id: O, metricName: _, value: T }, E = m(P);
        d.dispatch(E);
      };
    }
    var v = window;
    r.isServer || r.isClient && v.__is_web_vitals_initialized__ || o.isMobile() || (v.__is_web_vitals_initialized__ = !0, t.onLCP(f(s)), t.onFID(f(y)), t.onCLS(f(u)), t.onFCP(f(c)), t.onTTFB(f(l)), t.onINP(f(p)));
  }
  e.initializeWebVitals = h;
})(Yl);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), n = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(Yl, e);
})(ru);
var ef = {}, at = {};
Object.defineProperty(at, "__esModule", { value: !0 });
at.isPermitted = at.getPermissionKey = at.isPerformanceOrWebVitalsAction = at.isAppMessage = at.isAppBridgeAction = void 0;
var dm = Cn, Xr = xt, pm = oe;
function hm(e) {
  return e instanceof Object && Object.prototype.hasOwnProperty.call(e, "type") && e.type.toString().startsWith(Xr.PREFIX);
}
at.isAppBridgeAction = hm;
function ym(e) {
  if (typeof e != "object" || !e.data || typeof e.data != "object")
    return !1;
  var t = e.data;
  return Object.prototype.hasOwnProperty.call(t, "type") && pm.findMatchInEnum(dm.MessageType, t.type) !== void 0;
}
at.isAppMessage = ym;
function vm(e) {
  var t = e.type;
  return t.match(/^APP::(PERFORMANCE|WEB_VITALS)::/);
}
at.isPerformanceOrWebVitalsAction = vm;
function tf(e) {
  return e.replace(new RegExp("^" + Xr.PREFIX + Xr.SEPARATOR + "\\w+" + Xr.SEPARATOR), "");
}
at.getPermissionKey = tf;
function mm(e, t, n) {
  var r = t.group, i = t.type;
  if (!r || !Object.prototype.hasOwnProperty.call(e, r))
    return !1;
  var a = e[r];
  if (!a)
    return !1;
  var o = tf(i);
  return a[o] ? a[o][n] === !0 : !1;
}
at.isPermitted = mm;
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
  function n(r) {
    return typeof r != "object" || typeof r.source != "object" ? !1 : typeof r.source.apiKey == "string";
  }
  e.isFromApp = n;
})(ef);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(z, ne, ye, ue) {
    ue === void 0 && (ue = ye), Object.defineProperty(z, ue, { enumerable: !0, get: function() {
      return ne[ye];
    } });
  } : function(z, ne, ye, ue) {
    ue === void 0 && (ue = ye), z[ue] = ne[ye];
  }), n = b && b.__setModuleDefault || (Object.create ? function(z, ne) {
    Object.defineProperty(z, "default", { enumerable: !0, value: ne });
  } : function(z, ne) {
    z.default = ne;
  }), r = b && b.__importStar || function(z) {
    if (z && z.__esModule)
      return z;
    var ne = {};
    if (z != null)
      for (var ye in z)
        ye !== "default" && Object.prototype.hasOwnProperty.call(z, ye) && t(ne, z, ye);
    return n(ne, z), ne;
  }, i = b && b.__exportStar || function(z, ne) {
    for (var ye in z)
      ye !== "default" && !Object.prototype.hasOwnProperty.call(ne, ye) && t(ne, z, ye);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.WebVitals = e.unstable_Picker = e.Performance = e.Pos = e.AppLink = e.ChannelMenu = e.NavigationMenu = e.Share = e.ContextualSaveBar = e.MarketingExternalActivityTopBar = e.TitleBar = e.SessionToken = e.ResourcePicker = e.Redirect = e.Print = e.ModalContent = e.Modal = e.Loading = e.LeaveConfirmation = e.History = e.Toast = e.Fullscreen = e.FeedbackModal = e.Features = e.Flash = e.Error = e.Client = e.Cart = e.Scanner = e.ButtonGroup = e.Button = e.AuthCode = e.isAppBridgeAction = void 0;
  var a = r(Lo);
  e.AuthCode = a;
  var o = r(Ar);
  e.Button = o;
  var s = r(Ci);
  e.ButtonGroup = s;
  var y = r(Uo);
  e.Cart = y;
  var u = r(Vo);
  e.Client = u;
  var c = r(rn);
  e.Error = c;
  var l = r(jl);
  e.Flash = l;
  var p = r($o);
  e.Features = p;
  var h = r(Rl);
  e.FeedbackModal = h;
  var d = r(zo);
  e.Fullscreen = d;
  var f = r(Ml);
  e.LeaveConfirmation = f;
  var v = r(Qo);
  e.Loading = v;
  var m = r(Ri);
  e.Modal = m;
  var g = r(Dl);
  e.ModalContent = g;
  var O = r(kl);
  e.History = O;
  var _ = r(Mi);
  e.Redirect = _;
  var T = r(Di);
  e.Print = T;
  var P = r(Ko);
  e.ResourcePicker = P;
  var E = r(Yo);
  e.Scanner = E;
  var S = r(Jo);
  e.SessionToken = S;
  var w = r(Xo);
  e.TitleBar = w;
  var I = r(Zo);
  e.Toast = I;
  var C = r(xo);
  e.ContextualSaveBar = C;
  var k = r(Ul);
  e.Share = k;
  var B = r(tu);
  e.NavigationMenu = B;
  var D = r(Vl);
  e.ChannelMenu = D;
  var V = r(nu);
  e.AppLink = V;
  var W = r($l);
  e.Pos = W;
  var F = r(Gl);
  e.MarketingExternalActivityTopBar = F;
  var J = r(zl);
  e.Performance = J;
  var he = r(Kl);
  e.unstable_Picker = he;
  var H = r(ru);
  e.WebVitals = H;
  var Oe = ef;
  Object.defineProperty(e, "isAppBridgeAction", { enumerable: !0, get: function() {
    return Oe.isAppBridgeAction;
  } }), i(Vt, e);
})(St);
var Es = b && b.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
Object.defineProperty(ko, "__esModule", { value: !0 });
var Fr = ie, nf = St, gm = Fe, Ur = nf.ContextualSaveBar.Action, bm = nf.ContextualSaveBar.create;
function _m(e) {
  var t = e.discardAction, n = t === void 0 ? { onAction: function() {
    return null;
  } } : t, r = e.saveAction, i = r === void 0 ? { onAction: function() {
    return null;
  } } : r, a = e.fullWidth, o = e.leaveConfirmationDisable, s = e.visible, y = gm.useAppBridge(), u = i.onAction, c = Es(i, ["onAction"]), l = n.onAction, p = Es(n, ["onAction"]), h = Fr.useMemo(function() {
    return bm(y, {
      saveAction: c,
      discardAction: p,
      fullWidth: a,
      leaveConfirmationDisable: o
    });
  }, [y]);
  return Fr.useEffect(function() {
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
  ]), Fr.useEffect(function() {
    return h.subscribe(Ur.DISCARD, l), h.subscribe(Ur.SAVE, u), function() {
      h.unsubscribe();
    };
  }, [h, l, u]), Fr.useEffect(function() {
    s ? h.dispatch(Ur.SHOW) : h.dispatch(Ur.HIDE);
  }, [h, s]), null;
}
ko.default = _m;
var Om = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Do, "__esModule", { value: !0 });
var Am = Om(ko);
Do.default = Am.default;
var iu = {}, au = {}, Pm = b && b.__extends || function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Sm = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(au, "__esModule", { value: !0 });
var Em = Sm(ie), ia = St, Tm = bt, wm = (
  /** @class */
  function(e) {
    Pm(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.componentDidMount = function() {
      var n = this.context;
      this.loading = ia.Loading.create(n), this.loading != null && this.loading.dispatch(ia.Loading.Action.START);
    }, t.prototype.componentWillUnmount = function() {
      this.loading != null && this.loading.dispatch(ia.Loading.Action.STOP);
    }, t.prototype.render = function() {
      return null;
    }, t.contextType = Tm.AppBridgeContext, t;
  }(Em.default.Component)
);
au.default = wm;
var Im = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(iu, "__esModule", { value: !0 });
var jm = Im(au);
iu.default = jm.default;
var rf = {}, ou = {}, tn = {}, Cm = b && b.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), Nm = b && b.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), uu = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && Cm(t, e, n);
  return Nm(t, e), t;
}, mi = b && b.__spreadArray || function(e, t) {
  for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
    e[i] = t[n];
  return e;
};
Object.defineProperty(tn, "__esModule", { value: !0 });
tn.transformActions = tn.generateRedirect = void 0;
var Vr = uu(Ar), Rm = uu(Ci), fo = uu(Mi);
function af(e, t, n, r) {
  if (n === void 0 && (n = "APP"), t != null) {
    var i = fo.create(e), a = r === !0 ? {
      url: t,
      newContext: !0
    } : t;
    return function() {
      i.dispatch(Mm(n, r), a);
    };
  }
}
tn.generateRedirect = af;
function Mm(e, t) {
  return t === !0 ? fo.Action.REMOTE : fo.Action[e];
}
function Dm(e, t) {
  var n = t.primaryAction, r = t.secondaryActions, i = t.actionGroups, a = km(e, n), o = mi(mi([], Lm(e, r)), Bm(e, i));
  return {
    primary: a,
    secondary: o
  };
}
tn.transformActions = Dm;
function su(e, t) {
  var n = t.destructive === !0 ? Vr.Style.Danger : void 0, r = Vr.create(e, {
    label: t.content || "",
    disabled: t.disabled,
    loading: t.loading,
    plain: t.plain,
    style: n
  });
  t.onAction && r.subscribe(Vr.Action.CLICK, t.onAction);
  var i = af(e, t.url, t.target, t.external);
  return i != null && r.subscribe(Vr.Action.CLICK, i), r;
}
function km(e, t) {
  if (t != null) {
    var n = su(e, t);
    return n;
  }
}
function Lm(e, t) {
  t === void 0 && (t = []);
  var n = mi([], t.map(function(r) {
    return su(e, r);
  }));
  return n;
}
function Bm(e, t) {
  t === void 0 && (t = []);
  var n = mi([], t.map(function(r) {
    var i = r.actions.map(function(a) {
      return su(e, a);
    });
    return Rm.create(e, { label: r.title, plain: r.plain, buttons: i });
  }));
  return n;
}
var gi = b && b.__assign || function() {
  return gi = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, gi.apply(this, arguments);
}, Fm = b && b.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
Object.defineProperty(ou, "__esModule", { value: !0 });
var dn = ie, vn = Ri, Um = tn, Vm = Fe;
function $m(e) {
  var t = Vm.useAppBridge(), n = dn.useRef(null), r = dn.useRef({ open: !1 }), i = e.open, a = dn.useRef(!1), o = dn.useMemo(function() {
    e.primaryAction, e.secondaryActions;
    var s = Fm(e, ["primaryAction", "secondaryActions"]);
    return vn.create(t, Ts(t, s));
  }, [t]);
  return dn.useEffect(function() {
    if (a.current) {
      r.current = e;
      return;
    }
    var s = r.current.open, y = s !== i;
    if (i) {
      var u = Ts(t, e, s), c = !y;
      Gm(u), o.set(u, c);
    }
    return y && (i ? (o.dispatch(vn.Action.OPEN), n.current = document.activeElement) : (o.dispatch(vn.Action.CLOSE), n.current != null && document.contains(n.current) && (n.current.focus(), n.current = null))), e.onClose != null && o.subscribe(vn.Action.CLOSE, e.onClose), r.current = e, function() {
      o.unsubscribe();
    };
  }, [e, i]), dn.useEffect(function() {
    return function() {
      r.current.open && o.dispatch(vn.Action.CLOSE);
    };
  }, [o]), null;
}
function Gm(e) {
  return typeof e.url == "string" || typeof e.path == "string";
}
function Ts(e, t, n) {
  var r = t.title, i = t.size, a = t.message, o = t.src, s = t.primaryAction, y = t.secondaryActions, u = t.loading, c = i == null ? void 0 : vn.Size[i], l = {};
  return o != null && (o.match("^https?://") ? l.url = o : l.path = o), gi(gi({ title: r, message: a, size: c }, l), { footer: {
    buttons: Um.transformActions(e, {
      primaryAction: s,
      secondaryActions: y
    })
  }, loading: n ? void 0 : u });
}
ou.default = $m;
var cu = {}, lu = {}, qm = b && b.__extends || function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Wm = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(lu, "__esModule", { value: !0 });
var Hm = Wm(ie), zm = St, Qm = bt, Km = (
  /** @class */
  function(e) {
    qm(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.componentDidMount = function() {
      var n = this.context;
      this.modalContent = zm.ModalContent.create(n), this.syncLoadingStatus();
    }, t.prototype.componentDidUpdate = function() {
      this.syncLoadingStatus();
    }, t.prototype.syncLoadingStatus = function() {
      this.modalContent && (this.props.loading ? this.modalContent.loading() : this.modalContent.loaded());
    }, t.prototype.render = function() {
      return null;
    }, t.contextType = Qm.AppBridgeContext, t;
  }(Hm.default.Component)
);
lu.default = Km;
var Ym = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(cu, "__esModule", { value: !0 });
var Jm = Ym(lu);
cu.default = Jm.default;
(function(e) {
  var t = b && b.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ModalContent = void 0;
  var n = t(ou), r = cu;
  Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return t(r).default;
  } }), e.default = n.default;
})(rf);
var fu = {}, du = {};
Object.defineProperty(du, "__esModule", { value: !0 });
var $r = ie, Xm = nu, Zm = tu, xm = Fe;
function eg(e, t) {
  return e.destination.replace(/\/$/, "") === t.pathname.replace(/\/$/, "");
}
function tg(e) {
  var t = e.navigationLinks, n = e.matcher, r = n === void 0 ? eg : n, i = xm.useAppBridge(), a = $r.useState(), o = a[0], s = a[1];
  $r.useEffect(function() {
    var u = t.map(function(c) {
      return Xm.create(i, c);
    });
    s(u);
  }, [i, JSON.stringify(t)]);
  var y = $r.useMemo(function() {
    var u = (o || []).findIndex(function(c) {
      return r(c, location);
    });
    if (u >= 0)
      return o == null ? void 0 : o[u];
  }, [i, location.pathname, r, o, location.pathname]);
  return $r.useEffect(function() {
    o && Zm.create(i, { items: o, active: y });
  }, [o, y]), null;
}
du.default = tg;
var ng = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(fu, "__esModule", { value: !0 });
var rg = ng(du);
fu.default = rg.default;
var pu = {}, of = {}, po = { exports: {} }, aa = {}, oa = {}, ua = {}, $n = {}, uf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.createTransportListener = e.fromWindow = e.fromFrame = e.Context = void 0;
  var t = lr, n = at, r = Cn, i = Bt, a = vi;
  (function(c) {
    c.Modal = "Modal", c.Main = "Main";
  })(e.Context || (e.Context = {}));
  function o(c, l, p) {
    var h = [], d = c.host, f = c.window;
    if (!d)
      throw t.fromAction("App frame is undefined", t.AppActionType.WINDOW_UNDEFINED);
    return a.isUnframed && window.MobileWebView && Object.assign(window.MobileWebView, {
      postMessageToIframe: function(v, m) {
        f == null || f.postMessage(v, m), u(v) && d.postMessage(JSON.stringify(v.payload), location.origin);
      },
      updateIframeUrl: function(v) {
        var m = window.location, g = (c.window || {}).location;
        try {
          var O = new URL(v).origin;
          O === l && g ? g.replace(v) : m.href = v;
        } catch {
        }
      }
    }), d.addEventListener("message", function(v) {
      if (!(v.source === d || !n.isAppMessage(v))) {
        if (v.origin !== l) {
          var m = "Message origin '" + v.origin + "' does not match app origin '" + l + "'.", g = t.invalidOriginAction(m), O = {
            type: "dispatch",
            payload: g
          };
          f == null || f.postMessage(O, v.origin);
          return;
        }
        if (a.isUnframed && window.MobileWebView) {
          var g = JSON.stringify({
            id: "unframed://fromClient",
            origin: l,
            data: v.data
          });
          window.MobileWebView.postMessage(g);
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
      if (!(window === c && !a.isUnframed || h.source !== c || !(n.isAppBridgeAction(h.data.payload) || n.isAppMessage(h))))
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
        var f = Array.from(arguments), v = f[0], m = f[1], g = f[2], O = { callback: m, id: g }, _ = { type: v, id: g };
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
          for (var m = 0, g = l[d]; m < g.length; m++) {
            var O = g[m], _ = O.id, T = O.callback, P = f && f.id === _;
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
})(uf);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), n = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(uf, e);
})($n);
var qt = {}, ws;
function sf() {
  if (ws)
    return qt;
  ws = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.mockAppBridge = qt.serverAppBridge = void 0;
  var e = rn, t = function() {
  }, n = new Promise(function() {
  });
  return qt.serverAppBridge = {
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
  }, qt.mockAppBridge = {
    dispatch: function() {
      return {};
    },
    error: function() {
      return t;
    },
    featuresAvailable: function() {
      return n;
    },
    getState: function() {
      return n;
    },
    localOrigin: "",
    hostOrigin: "",
    subscribe: function() {
      return t;
    }
  }, qt;
}
var Qn = {}, yt = {}, Is;
function hu() {
  if (Is)
    return yt;
  Is = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.getWindow = yt.getLocation = yt.redirect = yt.shouldRedirect = void 0;
  function e(a) {
    return a === window;
  }
  yt.shouldRedirect = e;
  function t(a) {
    var o = n();
    o && o.assign(a);
  }
  yt.redirect = t;
  function n() {
    return i() ? window.location : void 0;
  }
  yt.getLocation = n;
  function r() {
    return i() ? window : void 0;
  }
  yt.getWindow = r;
  function i() {
    return typeof window < "u";
  }
  return yt;
}
var js;
function ig() {
  if (js)
    return Qn;
  js = 1, Object.defineProperty(Qn, "__esModule", { value: !0 }), Qn.handleAppPrint = void 0;
  var e = hu();
  function t() {
    return navigator.userAgent.indexOf("iOS") >= 0;
  }
  function n() {
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
    var o = n();
    o && (o.select(), r(), o.remove());
  }
  function a() {
    t() ? i() : r();
  }
  return Qn.handleAppPrint = a, Qn;
}
var sa = {}, Cs;
function cf() {
  return Cs || (Cs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isV1Config = e.MessageType = e.LifecycleHook = e.PermissionType = void 0;
    var t = Cn;
    Object.defineProperty(e, "MessageType", { enumerable: !0, get: function() {
      return t.MessageType;
    } });
    var n = Cn;
    Object.defineProperty(e, "PermissionType", { enumerable: !0, get: function() {
      return n.PermissionType;
    } }), Object.defineProperty(e, "LifecycleHook", { enumerable: !0, get: function() {
      return n.LifecycleHook;
    } });
    function r(i) {
      return !i.host;
    }
    e.isV1Config = r;
  }(sa)), sa;
}
var Gr = {}, ca = {}, Ns;
function ag() {
  return Ns || (Ns = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.removeFromCollection = e.addAndRemoveFromCollection = void 0;
    var t = Bt;
    Object.defineProperty(e, "addAndRemoveFromCollection", { enumerable: !0, get: function() {
      return t.addAndRemoveFromCollection;
    } }), Object.defineProperty(e, "removeFromCollection", { enumerable: !0, get: function() {
      return t.removeFromCollection;
    } });
  }(ca)), ca;
}
var Rs;
function og() {
  if (Rs)
    return Gr;
  Rs = 1, Object.defineProperty(Gr, "__esModule", { value: !0 });
  var e = ag(), t = (
    /** @class */
    function() {
      function n() {
        this.map = {};
      }
      return n.prototype.set = function(r, i) {
        Object.prototype.hasOwnProperty.call(this.map, r) || (this.map[r] = []);
        var a = { handler: i, remove: function() {
        } }, o = e.addAndRemoveFromCollection(this.map[r], a);
        return a = { handler: i, remove: o }, o;
      }, n.prototype.get = function(r) {
        var i = this.map[r];
        return i ? i.map(function(a) {
          return a.handler;
        }) : void 0;
      }, n.prototype.run = function(r, i, a) {
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
      }, n;
    }()
  );
  return Gr.default = t, Gr;
}
var Ms;
function Ds() {
  return Ms || (Ms = 1, function(e) {
    var t = b && b.__assign || function() {
      return t = Object.assign || function(w) {
        for (var I, C = 1, k = arguments.length; C < k; C++) {
          I = arguments[C];
          for (var B in I)
            Object.prototype.hasOwnProperty.call(I, B) && (w[B] = I[B]);
        }
        return w;
      }, t.apply(this, arguments);
    }, n = b && b.__spreadArray || function(w, I) {
      for (var C = 0, k = I.length, B = w.length; C < k; C++, B++)
        w[B] = I[C];
      return w;
    }, r = b && b.__importDefault || function(w) {
      return w && w.__esModule ? w : { default: w };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createApp = e.createAppWrapper = e.createClientApp = e.WINDOW_UNDEFINED_MESSAGE = void 0;
    var i = Ut, a = Di, o = rn, s = $n, y = sf(), u = Pr, c = Vo, l = ru, p = ig(), h = hu(), d = cf(), f = r(og());
    e.WINDOW_UNDEFINED_MESSAGE = "window is not defined. Running an app outside a browser is not supported";
    function v(w, I) {
      var C = I.apiKey, k = I.host, B = I.forceRedirect, D = B === void 0 ? !u.isDevelopmentClient : B, V = h.getLocation();
      if (u.isUnframed || !V || !C || !k || !D || !h.shouldRedirect(w))
        return !1;
      var W = "https://" + k + "/apps/" + C + V.pathname + (V.search || "");
      return h.redirect(W), !0;
    }
    var m = function(w) {
      return function(I) {
        return w(t(t({}, I), { version: i.getVersion(), clientInterface: {
          name: i.getPackageName(),
          version: i.getVersion()
        } }));
      };
    }, g = function(w) {
      w.set(d.LifecycleHook.DispatchAction, m);
    };
    function O(w) {
      w.subscribe(a.Action.APP, p.handleAppPrint), w.dispatch(c.initialize());
      try {
        l.initializeWebVitals(w);
      } catch (I) {
        console.error("App-Bridge failed to initialize web-vitals", I);
      }
    }
    var _ = function(w, I) {
      I === void 0 && (I = []);
      var C = [], k = s.createTransportListener(), B = function(D) {
        var V = D.data, W = V.type, F = V.payload;
        switch (W) {
          case "getState": {
            var J = C.splice(0);
            J.forEach(function(Oe) {
              return Oe(F);
            });
            break;
          }
          case "dispatch": {
            k.handleMessage(F);
            var he = k.handleActionDispatch(F);
            if (he)
              return;
            var H = i.findMatchInEnum(o.Action, F.type);
            H && o.throwError(H, F);
            break;
          }
        }
      };
      return w.subscribe(B), function(D) {
        var V = T(D), W = v(w.hostFrame, V);
        if (W)
          return y.mockAppBridge;
        var F = S(w, V), J = k.createSubscribeHandler(F);
        F(d.MessageType.Unsubscribe);
        function he(K) {
          return F(d.MessageType.Dispatch, K), K;
        }
        for (var H = new URL("https://" + V.host).origin, Oe = new f.default(), z = {
          hostOrigin: H,
          localOrigin: w.localOrigin,
          hooks: Oe,
          dispatch: function(K) {
            return z.hooks ? z.hooks.run(d.LifecycleHook.DispatchAction, he, z, K) : he(K);
          },
          featuresAvailable: function() {
            for (var K = [], Re = 0; Re < arguments.length; Re++)
              K[Re] = arguments[Re];
            var Ae = K[0], Ue = Array.isArray(Ae) ? n([], Ae) : K;
            return z.getState("features").then(function(Te) {
              return Ue.length ? Ue.reduce(function(dt, Et) {
                return Object.keys(Te).includes(Et) && (dt[Et] = Te[Et]), dt;
              }, {}) : Te;
            });
          },
          getState: function(K) {
            return K && typeof K != "string" ? Promise.resolve(void 0) : new Promise(function(Re) {
              C.push(Re), F(d.MessageType.GetState);
            }).then(function(Re) {
              var Ae = Re;
              if (K)
                for (var Ue = 0, Te = K.split("."); Ue < Te.length; Ue++) {
                  var dt = Te[Ue];
                  if (Ae == null || typeof Ae != "object" || Array.isArray(Ae) || !Object.keys(Ae).includes(dt))
                    return;
                  Ae = Ae[dt];
                }
              return Ae;
            });
          },
          subscribe: J,
          error: function(K, Re) {
            var Ae = [];
            return i.forEachInEnum(o.Action, function(Ue) {
              Ae.push(J(Ue, K, Re));
            }), function() {
              Ae.forEach(function(Ue) {
                return Ue();
              });
            };
          }
        }, ne = 0, ye = I; ne < ye.length; ne++) {
          var ue = ye[ne];
          ue(Oe, z);
        }
        return O(z), z;
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
      var k = h.getLocation(), B = I || k && k.origin;
      if (!B)
        throw o.fromAction("local origin cannot be blank", o.AppActionType.MISSING_LOCAL_ORIGIN);
      var D = s.fromWindow(w, B), V = e.createClientApp(D, n([g], C));
      return V;
    }
    e.createAppWrapper = P;
    function E(w) {
      var I = h.getWindow();
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
  }(ua)), ua;
}
var ks;
function hr() {
  return ks || (ks = 1, function(e) {
    var t = b && b.__createBinding || (Object.create ? function(i, a, o, s) {
      s === void 0 && (s = o), Object.defineProperty(i, s, { enumerable: !0, get: function() {
        return a[o];
      } });
    } : function(i, a, o, s) {
      s === void 0 && (s = o), i[s] = a[o];
    }), n = b && b.__exportStar || function(i, a) {
      for (var o in i)
        o !== "default" && !Object.prototype.hasOwnProperty.call(a, o) && t(a, i, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = Ds();
    n(cf(), e), n(Ds(), e), e.default = r.createClientApp;
  }(oa)), oa;
}
var Ls;
function ug() {
  return Ls || (Ls = 1, function(e) {
    var t = b && b.__createBinding || (Object.create ? function(i, a, o, s) {
      s === void 0 && (s = o), Object.defineProperty(i, s, { enumerable: !0, get: function() {
        return a[o];
      } });
    } : function(i, a, o, s) {
      s === void 0 && (s = o), i[s] = a[o];
    }), n = b && b.__exportStar || function(i, a) {
      for (var o in i)
        o !== "default" && !Object.prototype.hasOwnProperty.call(a, o) && t(a, i, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
    var r = hr();
    Object.defineProperty(e, "default", { enumerable: !0, get: function() {
      return r.createApp;
    } }), n($n, e), n(hr(), e);
  }(aa)), aa;
}
var la = {}, qr = {}, fa = {}, da = {}, fe = {}, pa = {}, ha = {}, Bs;
function We() {
  return Bs || (Bs = 1, function(e) {
    var t = b && b.__assign || function() {
      return t = Object.assign || function(f) {
        for (var v, m = 1, g = arguments.length; m < g; m++) {
          v = arguments[m];
          for (var O in v)
            Object.prototype.hasOwnProperty.call(v, O) && (f[O] = v[O]);
        }
        return f;
      }, t.apply(this, arguments);
    }, n = b && b.__spreadArray || function(f, v) {
      for (var m = 0, g = v.length, O = f.length; m < g; m++, O++)
        f[O] = v[m];
      return f;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validate = e.matchesPositiveInteger = e.matchesBoolean = e.makeOptional = e.matchesString = e.matchesObject = e.getErrors = e.oneOf = e.matchesArray = e.matchesEnum = e.composeSchemas = e.TYPE_ERROR = void 0, e.TYPE_ERROR = "type_error_expected";
    function r() {
      for (var f = [], v = 0; v < arguments.length; v++)
        f[v] = arguments[v];
      return function(m) {
        for (var g, O = 0, _ = f.length; !g && O < _; ) {
          if (g = f[O](m), g)
            return g;
          O++;
        }
      };
    }
    e.composeSchemas = r;
    function i(f, v) {
      return function(m) {
        var g = Object.keys(f).map(function(_) {
          return f[_];
        }), O = v && v.message || "expected:" + g.map(function(_) {
          return "`" + _ + "`";
        }).join(" or ");
        return g.includes(m) ? void 0 : s(m, "invalid_enum_value", t(t({}, v), { message: O }));
      };
    }
    e.matchesEnum = i;
    function a(f, v) {
      return function(m) {
        if (!Array.isArray(m))
          return s(m, e.TYPE_ERROR + "_array", v);
        if (f) {
          var g = [];
          return m.forEach(function(O, _) {
            var T = f(O);
            T && (g = g.concat(T.map(function(P) {
              return t(t({}, P), { path: "['" + _ + "']" + (P.path || "") });
            })));
          }), g.length ? g : void 0;
        }
      };
    }
    e.matchesArray = a;
    function o() {
      for (var f = [], v = 0; v < arguments.length; v++)
        f[v] = arguments[v];
      return function(m) {
        for (var g = [], O = 0, _ = f; O < _.length; O++) {
          var T = _[O], P = T(m);
          if (P == null)
            return P;
          g.push.apply(g, P);
        }
        return g;
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
      var g = m ? f[m] : f, O = m ? "['" + m + "']" : void 0, _ = v(g);
      if (_)
        return _.map(function(T) {
          return t(t({}, T), { path: "" + (O || "") + (T.path || "") || void 0 });
        });
    }
    e.getErrors = y;
    function u(f, v) {
      return function(m) {
        if (typeof m != "object" || !m || Array.isArray(m))
          return s(m, e.TYPE_ERROR + "_object", v);
        var g = Object.keys(f).reduce(function(O, _) {
          return n(n([], O), y(m, f[_], _) || []);
        }, []);
        return g.length ? g : void 0;
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
  }(ha)), ha;
}
var ya = {}, Fs;
function rt() {
  return Fs || (Fs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.relativePathSchema = e.relativeUrlSchema = e.isValidRelativePath = e.createActionValidator = void 0;
    var t = We();
    function n(i, a, o, s) {
      a === void 0 && (a = void 0), o === void 0 && (o = !1), s === void 0 && (s = !1);
      var y = t.matchesObject({
        id: s ? t.matchesString() : t.makeOptional(t.matchesString())
      }), u = a ? t.composeSchemas(y, a) : y;
      return t.matchesObject({
        type: t.matchesEnum(i, {
          message: function(c, l) {
            return "The action type `" + l + "` is invalid or unsupported";
          }
        }),
        payload: o ? u : t.makeOptional(u)
      });
    }
    e.createActionValidator = n;
    function r(i) {
      return typeof i == "string" && (i === "" || i.startsWith("/"));
    }
    e.isValidRelativePath = r, e.relativeUrlSchema = t.composeSchemas(t.matchesString(), function(i) {
      return r(i) ? void 0 : [{ error: "invalid_relative_path", value: i, message: "expected string to start with `/`" }];
    }), e.relativePathSchema = t.matchesObject({
      path: e.relativeUrlSchema
    });
  }(ya)), ya;
}
var Us;
function Li() {
  return Us || (Us = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.buttonSchemaWithId = e.buttonSchema = void 0;
    var t = Nt;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var n = We(), r = rt();
    e.buttonSchema = n.matchesObject({
      disabled: n.makeOptional(n.matchesBoolean()),
      label: n.matchesString(),
      style: n.makeOptional(n.matchesEnum(t.Style)),
      icon: n.makeOptional(n.matchesEnum(t.Icon)),
      loading: n.makeOptional(n.matchesBoolean()),
      plain: n.makeOptional(n.matchesBoolean())
    }), e.buttonSchemaWithId = n.composeSchemas(n.matchesObject({
      id: n.matchesString()
    }), e.buttonSchema);
    function i(o) {
      return n.validate(o, e.buttonSchema);
    }
    e.validateProps = i;
    function a(o) {
      var s = r.createActionValidator(t.Action, o.type === t.Action.UPDATE ? e.buttonSchema : void 0, !0, !0);
      return n.validate(o, s);
    }
    e.validateAction = a;
  }(pa)), pa;
}
var va = {}, Vs;
function lf() {
  return Vs || (Vs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.buttonGroupSchema = void 0;
    var t = en;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var n = We(), r = rt(), i = Li();
    e.buttonGroupSchema = n.composeSchemas(i.buttonSchema, n.matchesObject({
      buttons: n.matchesArray(n.makeOptional(i.buttonSchemaWithId))
    }));
    function a(s) {
      return n.validate(s, e.buttonGroupSchema);
    }
    e.validateProps = a;
    function o(s) {
      var y = r.createActionValidator(t.Action, e.buttonGroupSchema, !0, !0);
      return n.validate(s, y);
    }
    e.validateAction = o;
  }(va)), va;
}
var ma = {}, $s;
function sg() {
  return $s || ($s = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.contextSaveBarSchema = void 0;
    var t = We(), n = eu;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var r = rt();
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
      var s = r.createActionValidator(n.Action, e.contextSaveBarSchema);
      return t.validate(o, s);
    }
    e.validateAction = a;
  }(ma)), ma;
}
var ga = {}, Gs;
function cg() {
  return Gs || (Gs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.feedbackModalSchema = void 0;
    var t = Ho;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var n = We(), r = rt();
    e.feedbackModalSchema = n.matchesObject({
      formId: n.matchesPositiveInteger()
    });
    function i(o) {
      return n.validate(o, e.feedbackModalSchema);
    }
    e.validateProps = i;
    function a(o) {
      switch (o.type) {
        case t.Action.OPEN:
          return n.validate(o, r.createActionValidator(t.Action, e.feedbackModalSchema, !0));
        case t.Action.CLOSE:
        default:
          return n.validate(o, r.createActionValidator(t.Action));
      }
    }
    e.validateAction = a;
  }(ga)), ga;
}
var ba = {}, qs;
function lg() {
  return qs || (qs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var t = ci;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var n = We(), r = rt();
    function i(a) {
      var o = r.createActionValidator(t.Action);
      return n.validate(a, o);
    }
    e.validateAction = i;
  }(ba)), ba;
}
var _a = {}, Ws;
function ff() {
  return Ws || (Ws = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.linkActionSchema = e.linkPropsSchema = void 0;
    var t = Nn;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var n = We(), r = rt(), i;
    (function(s) {
      s.APP = "APP::NAVIGATION::REDIRECT::APP", s.LEGACY_APP = "APP";
    })(i || (i = {})), e.linkPropsSchema = n.matchesObject({
      label: n.matchesString(),
      destination: r.relativeUrlSchema,
      redirectType: n.matchesEnum(i)
    }), e.linkActionSchema = n.matchesObject({
      label: n.matchesString(),
      destination: r.relativePathSchema,
      redirectType: n.matchesEnum(i)
    });
    function a(s) {
      return n.validate(s, e.linkPropsSchema);
    }
    e.validateProps = a;
    function o(s) {
      return n.validate(s, r.createActionValidator(t.Action, e.linkActionSchema, !0, !0));
    }
    e.validateAction = o;
  }(_a)), _a;
}
var Wt = {}, Hs;
function fg() {
  if (Hs)
    return Wt;
  Hs = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.validateAction = Wt.validateProps = void 0;
  var e = pi, t = hi, n = We(), r = rt(), i = oe, a = ff(), o = n.matchesObject({ id: n.matchesString(), options: a.linkPropsSchema });
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
    var h = n.matchesObject({
      items: n.makeOptional(n.matchesArray(o)),
      active: n.makeOptional(o)
    }), d = p.items, f = p.active;
    if (d && f) {
      var v = n.matchesObject({
        active: n.composeSchemas(o, function(m) {
          return d.find(function(g) {
            return g.id === m.id;
          }) ? void 0 : s(m);
        })
      });
      return n.composeSchemas(h, v);
    }
    return h;
  }
  function u(p) {
    var h = n.matchesObject({
      items: n.makeOptional(n.matchesArray(a.linkActionSchema)),
      active: n.makeOptional(n.matchesString())
    }), d = p.items, f = p.active;
    if (d && f) {
      var v = n.matchesObject({
        active: n.composeSchemas(n.matchesString(), function(m) {
          return d.find(function(g) {
            return g.id === m;
          }) ? void 0 : s(m);
        })
      });
      return n.composeSchemas(h, v);
    }
    return h;
  }
  function c(p) {
    var h = n.validate(p, y(p));
    return h;
  }
  Wt.validateProps = c;
  function l(p) {
    var h = e.Action;
    return i.findMatchInEnum(t.Action, p.type) && (h = t.Action), n.validate(p, r.createActionValidator(h, u(p.payload), !0, !1));
  }
  return Wt.validateAction = l, Wt;
}
var Oa = {}, Kn = {}, Yn = {}, zs;
function dg() {
  return zs || (zs = 1, Object.defineProperty(Yn, "__esModule", { value: !0 }), Yn.INTERNAL_PROTOCOL = void 0, Yn.INTERNAL_PROTOCOL = "shopify:"), Yn;
}
var Qs;
function pg() {
  if (Qs)
    return Kn;
  Qs = 1, Object.defineProperty(Kn, "__esModule", { value: !0 }), Kn.isSafe = void 0;
  var e = dg(), t = /\/\/\//, n = /[/\\][/\\]/, r = ["https:", "http:"], i = "http://test.com";
  function a(y, u) {
    var c = u === void 0 ? {} : u, l = c.allowedDomains, p = l === void 0 ? [] : l, h = c.subdomains, d = h === void 0 ? [] : h, f = c.matchPath, v = c.requireAbsolute, m = c.requireSSL, g = c.allowInternalProtocol;
    if (t.test(y))
      return !1;
    if (y.startsWith("/"))
      return p.length > 0 || d.length > 0 || v || m ? !1 : f ? s(new URL(y, i), y, f) : !n.test(y);
    var O;
    try {
      O = new URL(y);
    } catch {
      return !1;
    }
    return g && O.protocol === e.INTERNAL_PROTOCOL ? !0 : !(!r.includes(O.protocol) || m && O.protocol !== "https:" || O.username || O.password || f && !s(O, y, f) || !o(O, p, d));
  }
  Kn.isSafe = a;
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
  return Kn;
}
var Ks;
function hg() {
  return Ks || (Ks = 1, function(e) {
    var t = b && b.__assign || function() {
      return t = Object.assign || function(h) {
        for (var d, f = 1, v = arguments.length; f < v; f++) {
          d = arguments[f];
          for (var m in d)
            Object.prototype.hasOwnProperty.call(d, m) && (h[m] = d[m]);
        }
        return h;
      }, t.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var n = We(), r = rt(), i = dr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return i.Action;
    } });
    var a = Nt, o = pg(), s = Li();
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
      var f = n.matchesObject({
        title: n.makeOptional(n.matchesString()),
        footer: n.makeOptional(n.matchesObject({
          buttons: n.matchesObject({
            primary: n.makeOptional(s.buttonSchemaWithId),
            secondary: n.makeOptional(n.matchesArray(s.buttonSchemaWithId))
          })
        })),
        size: n.makeOptional(u())
      });
      if (i.isIframeModal(h)) {
        if (h.url) {
          var v = n.matchesObject({
            url: n.composeSchemas(n.matchesString(), function(m) {
              return d ? y(m, d) : void 0;
            })
          });
          return n.composeSchemas(f, v);
        }
        return n.composeSchemas(f, r.relativePathSchema);
      }
      return n.composeSchemas(f, n.matchesObject({ message: n.matchesString() }));
    }
    function l(h, d) {
      return n.validate(h, c(h, d));
    }
    e.validateProps = l;
    function p(h, d) {
      var f = c(h.payload, d);
      switch (h.type) {
        case i.Action.OPEN:
        case i.Action.UPDATE:
          return n.validate(h, r.createActionValidator(i.Action, f, !0, h.type === i.Action.UPDATE));
        case i.Action.FOOTER_BUTTON_CLICK:
          return s.validateAction(t(t({}, h), { type: a.Action.CLICK }));
        case i.Action.FOOTER_BUTTON_UPDATE:
          return s.validateAction(t(t({}, h), { type: a.Action.UPDATE }));
        case i.Action.CLOSE:
        default:
          return n.validate(h, r.createActionValidator(i.Action));
      }
    }
    e.validateAction = p;
  }(Oa)), Oa;
}
var wt = {}, Ys;
function yg() {
  if (Ys)
    return wt;
  Ys = 1;
  var e = b && b.__assign || function() {
    return e = Object.assign || function(l) {
      for (var p, h = 1, d = arguments.length; h < d; h++) {
        p = arguments[h];
        for (var f in p)
          Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
      }
      return l;
    }, e.apply(this, arguments);
  }, t = b && b.__createBinding || (Object.create ? function(l, p, h, d) {
    d === void 0 && (d = h), Object.defineProperty(l, d, { enumerable: !0, get: function() {
      return p[h];
    } });
  } : function(l, p, h, d) {
    d === void 0 && (d = h), l[d] = p[h];
  }), n = b && b.__setModuleDefault || (Object.create ? function(l, p) {
    Object.defineProperty(l, "default", { enumerable: !0, value: p });
  } : function(l, p) {
    l.default = p;
  }), r = b && b.__importStar || function(l) {
    if (l && l.__esModule)
      return l;
    var p = {};
    if (l != null)
      for (var h in l)
        h !== "default" && Object.prototype.hasOwnProperty.call(l, h) && t(p, l, h);
    return n(p, l), p;
  };
  Object.defineProperty(wt, "__esModule", { value: !0 }), wt.validateAction = wt.getSectionSchema = wt.matchesAbsolutePath = void 0;
  var i = r(li), a = r(pr), o = We(), s = rt();
  function y(l) {
    return l.match("^https?://") ? void 0 : [
      {
        value: l,
        error: "invalid_absolute_url",
        message: "expected string to start with `https://` or `http://`"
      }
    ];
  }
  wt.matchesAbsolutePath = y;
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
  wt.getSectionSchema = u;
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
  return wt.validateAction = c, wt;
}
var Aa = {}, Js;
function vg() {
  return Js || (Js = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = void 0;
    var t = fi;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var n = We(), r = rt(), i = n.matchesArray(n.matchesObject({
      id: n.matchesString()
    })), a = n.matchesObject({
      initialQuery: n.makeOptional(n.matchesString()),
      initialSelectionIds: n.makeOptional(i),
      selectMultiple: n.makeOptional(n.oneOf(n.matchesBoolean(), n.matchesPositiveInteger())),
      showHidden: n.makeOptional(n.matchesBoolean()),
      showVariants: n.makeOptional(n.matchesBoolean()),
      showDraft: n.makeOptional(n.matchesBoolean()),
      showArchived: n.makeOptional(n.matchesBoolean()),
      showDraftBadge: n.makeOptional(n.matchesBoolean()),
      showArchivedBadge: n.makeOptional(n.matchesBoolean()),
      actionVerb: n.makeOptional(n.matchesEnum(t.ActionVerb))
    }), o = n.matchesObject({
      resourceType: n.matchesEnum(t.ResourceType),
      options: n.makeOptional(a)
    }), s = n.matchesObject({
      selection: i
    });
    function y(c) {
      return n.validate(c, a);
    }
    e.validateProps = y;
    function u(c) {
      switch (c.type) {
        case t.Action.UPDATE:
        case t.Action.OPEN:
          return n.validate(c, r.createActionValidator(t.Action, o, !1, !0));
        case t.Action.SELECT:
          return n.validate(c, r.createActionValidator(t.Action, s, !0, !0));
        case t.Action.CANCEL:
        case t.Action.CLOSE:
        default:
          return n.validate(c, r.createActionValidator(t.Action));
      }
    }
    e.validateAction = u;
  }(Aa)), Aa;
}
var Pa = {}, Xs;
function mg() {
  return Xs || (Xs = 1, function(e) {
    var t = b && b.__assign || function() {
      return t = Object.assign || function(p) {
        for (var h, d = 1, f = arguments.length; d < f; d++) {
          h = arguments[d];
          for (var v in h)
            Object.prototype.hasOwnProperty.call(h, v) && (p[v] = h[v]);
        }
        return p;
      }, t.apply(this, arguments);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = e.validateProps = e.titleBarSchema = void 0;
    var n = di;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var r = Nt, i = en, a = We(), o = rt(), s = Li(), y = lf(), u = a.composeSchemas(s.buttonSchema, a.matchesObject({
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
        case n.Action.UPDATE:
          return a.validate(p, o.createActionValidator(n.Action, e.titleBarSchema, !0, !1));
        case n.Action.BUTTON_CLICK:
        case n.Action.BREADCRUMBS_CLICK:
          return s.validateAction(t(t({}, p), { type: r.Action.CLICK }));
        case n.Action.BUTTON_UPDATE:
        case n.Action.BREADCRUMBS_UPDATE:
          return s.validateAction(t(t({}, p), { type: r.Action.UPDATE }));
        case n.Action.BUTTON_GROUP_UPDATE:
          return y.validateAction(t(t({}, p), { type: i.Action.UPDATE }));
      }
    }
    e.validateAction = l;
  }(Pa)), Pa;
}
var Sa = {}, Zs;
function gg() {
  return Zs || (Zs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateProps = e.validateAction = e.toastSchema = void 0;
    var t = fr;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var n = We(), r = rt();
    e.toastSchema = n.matchesObject({
      message: n.matchesString(),
      duration: n.matchesPositiveInteger(),
      isError: n.makeOptional(n.matchesBoolean()),
      action: n.makeOptional(n.matchesObject({
        content: n.matchesString()
      }))
    });
    function i(o) {
      switch (o.type) {
        case t.Action.SHOW:
          return n.validate(o, r.createActionValidator(t.Action, e.toastSchema, !0));
        default:
          return n.validate(o, r.createActionValidator(t.Action));
      }
    }
    e.validateAction = i;
    function a(o) {
      return n.validate(o, e.toastSchema);
    }
    e.validateProps = a;
  }(Sa)), Sa;
}
var Ea = {}, xs;
function bg() {
  return xs || (xs = 1, function(e) {
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
    var n = yi;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return n.Action;
    } });
    var r = We(), i = rt(), a = r.matchesObject({
      content: r.matchesString(),
      id: r.matchesString(),
      progress: r.matchesEnum(n.ALL_BADGE_PROGRESSES),
      status: r.matchesEnum(n.ALL_BADGE_STATUSES)
    }), o = r.matchesObject({
      accessibilityLabel: r.makeOptional(r.matchesString()),
      alt: r.makeOptional(r.matchesString()),
      initials: r.makeOptional(r.matchesString()),
      kind: r.makeOptional(r.matchesEnum(n.ALL_MEDIA_KINDS)),
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
    }, y = r.matchesObject(t({}, s)), u = r.matchesArray(r.matchesObject(t(t({}, s), { options: r.makeOptional(r.matchesArray(y)) }))), c = r.matchesObject({
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
      verticalAlignment: r.makeOptional(r.matchesEnum(n.ALL_RESOURCE_VERTICAL_ALIGNMENT)),
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
        case n.Action.UPDATE:
        case n.Action.OPEN:
          return r.validate(m, i.createActionValidator(n.Action, p, !1, !0));
        case n.Action.SELECT:
          return r.validate(m, i.createActionValidator(n.Action, h, !0, !0));
        case n.Action.SEARCH:
          return r.validate(m, i.createActionValidator(n.Action, d, !0, !0));
        case n.Action.CANCEL:
        case n.Action.LOAD_MORE:
          return r.validate(m, i.createActionValidator(n.Action));
        default:
          return r.validate(m, i.createActionValidator(n.Action));
      }
    }
    e.validateAction = v;
  }(Ea)), Ea;
}
var ec;
function _g() {
  if (ec)
    return fe;
  ec = 1;
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
  }), n = b && b.__importStar || function(v) {
    if (v && v.__esModule)
      return v;
    var m = {};
    if (v != null)
      for (var g in v)
        g !== "default" && Object.prototype.hasOwnProperty.call(v, g) && e(m, v, g);
    return t(m, v), m;
  };
  Object.defineProperty(fe, "__esModule", { value: !0 }), fe.unstable_Picker = fe.Toast = fe.TitleBar = fe.ResourcePicker = fe.Navigation = fe.Modal = fe.Menu = fe.Link = fe.LeaveConfirmation = fe.FeedbackModal = fe.ContextualSaveBar = fe.ButtonGroup = fe.Button = void 0;
  var r = n(Li());
  fe.Button = r;
  var i = n(lf());
  fe.ButtonGroup = i;
  var a = n(sg());
  fe.ContextualSaveBar = a;
  var o = n(cg());
  fe.FeedbackModal = o;
  var s = n(lg());
  fe.LeaveConfirmation = s;
  var y = n(ff());
  fe.Link = y;
  var u = n(fg());
  fe.Menu = u;
  var c = n(hg());
  fe.Modal = c;
  var l = n(yg());
  fe.Navigation = l;
  var p = n(vg());
  fe.ResourcePicker = p;
  var h = n(mg());
  fe.TitleBar = h;
  var d = n(gg());
  fe.Toast = d;
  var f = n(bg());
  return fe.unstable_Picker = f, fe;
}
var Ta = {}, wa = {}, tc;
function Gn() {
  return tc || (tc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.matchesPositiveNumber = e.TYPE_ERROR = e.oneOf = e.matchesArray = e.validate = e.matchesPositiveInteger = e.matchesBoolean = e.makeOptional = e.matchesString = e.matchesObject = e.matchesEnum = e.composeSchemas = void 0;
    var t = We();
    Object.defineProperty(e, "TYPE_ERROR", { enumerable: !0, get: function() {
      return t.TYPE_ERROR;
    } });
    var n = We();
    Object.defineProperty(e, "composeSchemas", { enumerable: !0, get: function() {
      return n.composeSchemas;
    } }), Object.defineProperty(e, "matchesEnum", { enumerable: !0, get: function() {
      return n.matchesEnum;
    } }), Object.defineProperty(e, "matchesObject", { enumerable: !0, get: function() {
      return n.matchesObject;
    } }), Object.defineProperty(e, "matchesString", { enumerable: !0, get: function() {
      return n.matchesString;
    } }), Object.defineProperty(e, "makeOptional", { enumerable: !0, get: function() {
      return n.makeOptional;
    } }), Object.defineProperty(e, "matchesBoolean", { enumerable: !0, get: function() {
      return n.matchesBoolean;
    } }), Object.defineProperty(e, "matchesPositiveInteger", { enumerable: !0, get: function() {
      return n.matchesPositiveInteger;
    } }), Object.defineProperty(e, "validate", { enumerable: !0, get: function() {
      return n.validate;
    } }), Object.defineProperty(e, "matchesArray", { enumerable: !0, get: function() {
      return n.matchesArray;
    } }), Object.defineProperty(e, "oneOf", { enumerable: !0, get: function() {
      return n.oneOf;
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
        return Number.isNaN(o) || !Number.isFinite(o) || o < 0 ? r(o, t.TYPE_ERROR + "_number", a) : void 0;
      };
    }
    e.matchesPositiveNumber = i;
  }(wa)), wa;
}
var Ia = {}, nc;
function an() {
  return nc || (nc = 1, function(e) {
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
    function n(i) {
      return i.map(function(a) {
        var o = a.path, s = a.error, y = a.message, u = a.value, c = typeof u == "object" ? JSON.stringify(u) : u;
        return "`" + s + "` thrown for" + (o ? " path: " + o + " and" : "") + " value: `" + c + "`" + (y ? " with message: " + y : "");
      }).join(" | ");
    }
    e.actionMessage = n;
    function r(i) {
      i.addEventListener("DOMContentLoaded", function() {
        Object.prototype.hasOwnProperty.call(i, "ShopifyApp") && console.error(`%cException Detected 🚫

%cAn instance of the EASDK client was detected while initializing Shopify App Bridge. Using Shopify App Bridge and the EASDK simultaneously is not supported.

If you're migrating an existing app that was built with the shopify_app gem, then the EASDK client might have been included in the home page view template. In this case, remove it from your app before initializing Shopify App Bridge again.`, "font-size: large;", "font-size: normal;");
      }, { once: !0 });
    }
    e.mixedAppClientCheck = r;
  }(Ia)), Ia;
}
var rc;
function Og() {
  return rc || (rc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var t = Uo;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var n = Gn(), r = an(), i = n.matchesObject({
      address1: n.makeOptional(n.matchesString()),
      address2: n.makeOptional(n.matchesString()),
      city: n.makeOptional(n.matchesString()),
      company: n.makeOptional(n.matchesString()),
      firstName: n.makeOptional(n.matchesString()),
      lastName: n.makeOptional(n.matchesString()),
      phone: n.makeOptional(n.matchesString()),
      province: n.makeOptional(n.matchesString()),
      country: n.makeOptional(n.matchesString()),
      zip: n.makeOptional(n.matchesString()),
      name: n.makeOptional(n.matchesString()),
      provinceCode: n.makeOptional(n.matchesString()),
      countryCode: n.makeOptional(n.matchesString())
    }), a = n.matchesObject({
      amount: n.makeOptional(n.matchesPositiveInteger()),
      discountDescription: n.makeOptional(n.matchesString()),
      type: n.makeOptional(n.matchesString()),
      discountCode: n.makeOptional(n.matchesString())
    }), o = n.matchesObject({
      amount: n.matchesPositiveNumber(),
      discountDescription: n.makeOptional(n.matchesString()),
      type: n.makeOptional(n.matchesString())
    }), s = n.matchesObject({
      discountCode: n.matchesString()
    }), y = n.matchesObject({
      price: n.makeOptional(n.matchesPositiveNumber()),
      quantity: n.makeOptional(n.matchesPositiveInteger()),
      title: n.makeOptional(n.matchesString()),
      variantId: n.makeOptional(n.matchesPositiveInteger()),
      discount: n.makeOptional(o)
    }), u = n.matchesObject({
      quantity: n.matchesPositiveInteger()
    }), c = n.matchesObject({
      id: n.makeOptional(n.matchesPositiveInteger()),
      email: n.makeOptional(n.matchesString()),
      firstName: n.makeOptional(n.matchesString()),
      lastName: n.makeOptional(n.matchesString()),
      note: n.makeOptional(n.matchesString()),
      addresses: n.makeOptional(n.matchesArray(i))
    }), l = n.matchesObject({
      name: n.matchesString(),
      value: n.matchesString()
    }), p = n.matchesObject({
      cartDiscount: n.makeOptional(a),
      customer: n.makeOptional(c),
      grandTotal: n.makeOptional(n.matchesString()),
      lineItems: n.makeOptional(n.matchesArray(y)),
      noteAttributes: n.makeOptional(n.matchesArray(l)),
      subTotal: n.makeOptional(n.matchesString()),
      taxTotal: n.makeOptional(n.matchesString())
    }), h = n.composeSchemas(n.matchesObject({}), function(O) {
      var _ = n.matchesString(), T = Object.keys(O).reduce(function(P, E) {
        return P[E] = _, P;
      }, {});
      return n.validate(O, n.matchesObject(T));
    }), d = n.matchesArray(n.matchesString());
    function f(O) {
      return r.createActionValidator(t.Action, O ? n.matchesObject({ data: O }) : void 0, !0, !0);
    }
    function v(O) {
      var _ = n.matchesObject({ index: n.matchesPositiveInteger() });
      if (O) {
        var T = n.matchesObject({ data: O });
        return r.createActionValidator(t.Action, n.composeSchemas(_, T), !0, !0);
      }
      return r.createActionValidator(t.Action, _, !0, !0);
    }
    function m(O) {
      return O.amount ? o : s;
    }
    function g(O) {
      switch (O.type) {
        case t.Action.UPDATE:
          return n.validate(O, f(p));
        case t.Action.SET_CUSTOMER:
          return n.validate(O, f(c));
        case t.Action.ADD_CUSTOMER_ADDRESS:
          return n.validate(O, f(i));
        case t.Action.UPDATE_CUSTOMER_ADDRESS:
          return n.validate(O, v(i));
        case t.Action.SET_DISCOUNT:
          return n.validate(O, f(m(O.payload.data)));
        case t.Action.SET_PROPERTIES:
          return n.validate(O, f(h));
        case t.Action.REMOVE_PROPERTIES:
          return n.validate(O, f(d));
        case t.Action.ADD_LINE_ITEM:
          return n.validate(O, f(y));
        case t.Action.UPDATE_LINE_ITEM:
          return n.validate(O, v(u));
        case t.Action.REMOVE_LINE_ITEM:
          return n.validate(O, v());
        case t.Action.SET_LINE_ITEM_DISCOUNT:
          return n.validate(O, v(o));
        case t.Action.REMOVE_LINE_ITEM_DISCOUNT:
          return n.validate(O, v());
        case t.Action.SET_LINE_ITEM_PROPERTIES:
          return n.validate(O, v(h));
        case t.Action.REMOVE_LINE_ITEM_PROPERTIES:
          return n.validate(O, v(d));
        case t.Action.FETCH:
        case t.Action.REMOVE_CUSTOMER:
        case t.Action.REMOVE_DISCOUNT:
        case t.Action.CLEAR:
        default:
          return n.validate(O, r.createActionValidator(t.Action, void 0, !1, !0));
      }
    }
    e.validateAction = g;
  }(Ta)), Ta;
}
var ja = {}, ic;
function Ag() {
  return ic || (ic = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var t = zo;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var n = Gn(), r = an();
    function i(a) {
      var o = r.createActionValidator(t.Action);
      return n.validate(a, o);
    }
    e.validateAction = i;
  }(ja)), ja;
}
var Ca = {}, ac;
function Pg() {
  return ac || (ac = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var t = Qo;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var n = Gn(), r = an();
    function i(a) {
      var o = r.createActionValidator(t.Action);
      return n.validate(a, o);
    }
    e.validateAction = i;
  }(Ca)), Ca;
}
var Na = {}, oc;
function Sg() {
  return oc || (oc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var t = Di;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var n = Gn(), r = an();
    function i(a) {
      return n.validate(a, r.createActionValidator(t.Action));
    }
    e.validateAction = i;
  }(Na)), Na;
}
var Ra = {}, uc;
function Eg() {
  return uc || (uc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = e.validateAction = void 0;
    var t = Yo;
    Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
      return t.Action;
    } });
    var n = Gn(), r = an();
    function i(a) {
      return n.validate(a, r.createActionValidator(t.Action));
    }
    e.validateAction = i;
  }(Ra)), Ra;
}
var sc;
function Tg() {
  return sc || (sc = 1, function(e) {
    var t = b && b.__createBinding || (Object.create ? function(c, l, p, h) {
      h === void 0 && (h = p), Object.defineProperty(c, h, { enumerable: !0, get: function() {
        return l[p];
      } });
    } : function(c, l, p, h) {
      h === void 0 && (h = p), c[h] = l[p];
    }), n = b && b.__setModuleDefault || (Object.create ? function(c, l) {
      Object.defineProperty(c, "default", { enumerable: !0, value: l });
    } : function(c, l) {
      c.default = l;
    }), r = b && b.__importStar || function(c) {
      if (c && c.__esModule)
        return c;
      var l = {};
      if (c != null)
        for (var p in c)
          p !== "default" && Object.prototype.hasOwnProperty.call(c, p) && t(l, c, p);
      return n(l, c), l;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.unstable_Picker = e.Toast = e.TitleBar = e.Scanner = e.ResourcePicker = e.Print = e.Navigation = e.Modal = e.Menu = e.Loading = e.Link = e.LeaveConfirmation = e.Fullscreen = e.FeedbackModal = e.ContextualSaveBar = e.Cart = e.ButtonGroup = e.Button = void 0;
    var i = _g();
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
    var a = r(Og());
    e.Cart = a;
    var o = r(Ag());
    e.Fullscreen = o;
    var s = r(Pg());
    e.Loading = s;
    var y = r(Sg());
    e.Print = y;
    var u = r(Eg());
    e.Scanner = u;
  }(da)), da;
}
var cc;
function wg() {
  return cc || (cc = 1, function(e) {
    var t = b && b.__spreadArray || function(f, v) {
      for (var m = 0, g = v.length, O = f.length; m < g; m++, O++)
        f[O] = v[m];
      return f;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validatorMiddleware = e.connectValidatorToDispatchHook = e.connectValidatorToUpdateHook = void 0;
    var n = hr(), r = Vt, i = rn, a = Ut, o = Tg(), s = Gn(), y = an();
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
      var g = c(f, v);
      return g ? i.invalidPayload(f, y.actionMessage(g)) : f;
    }
    var p = function(f) {
      return function(v) {
        for (var m = [], g = 1; g < arguments.length; g++)
          m[g - 1] = arguments[g];
        var O = a.getMergedProps(this.options, v), _ = u(this.app.localOrigin, this.defaultGroup, O);
        if (_)
          throw i.fromAction(y.actionMessage(_), i.Action.INVALID_OPTIONS);
        return f.apply(void 0, t([v], m));
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
      f.set(n.LifecycleHook.UpdateAction, e.connectValidatorToUpdateHook), f.set(n.LifecycleHook.DispatchAction, e.connectValidatorToDispatchHook);
    };
    e.validatorMiddleware = d;
  }(fa)), fa;
}
var lc;
function Ig() {
  if (lc)
    return qr;
  lc = 1, Object.defineProperty(qr, "__esModule", { value: !0 });
  var e = wg();
  return qr.default = e.validatorMiddleware, qr;
}
var fc;
function jg() {
  return fc || (fc = 1, function(e) {
    var t = b && b.__createBinding || (Object.create ? function(c, l, p, h) {
      h === void 0 && (h = p), Object.defineProperty(c, h, { enumerable: !0, get: function() {
        return l[p];
      } });
    } : function(c, l, p, h) {
      h === void 0 && (h = p), c[h] = l[p];
    }), n = b && b.__exportStar || function(c, l) {
      for (var p in c)
        p !== "default" && !Object.prototype.hasOwnProperty.call(l, p) && t(l, c, p);
    }, r = b && b.__importDefault || function(c) {
      return c && c.__esModule ? c : { default: c };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createApp = void 0;
    var i = r(Ig()), a = an(), o = hu(), s = hr(), y = sf();
    function u(c) {
      var l = o.getWindow();
      return !l || !l.top ? y.serverAppBridge : (a.mixedAppClientCheck(l), s.createAppWrapper(l.top, l.location.origin, [i.default])(c));
    }
    e.createApp = u, e.default = u, n($n, e), n(hr(), e);
  }(la)), la;
}
process.env.NODE_ENV === "production" ? po.exports = ug() : po.exports = jg();
var Cg = po.exports, yu = {}, vu = {}, Sr = {};
Object.defineProperty(Sr, "__esModule", { value: !0 });
Sr.handleRouteChange = void 0;
var Ng = St;
function Rg(e, t) {
  return e.subscribe(Ng.Redirect.Action.APP, function(n) {
    var r = n.path;
    t.replace(r);
  });
}
Sr.handleRouteChange = Rg;
var Mg = b && b.__extends || function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Dg = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(vu, "__esModule", { value: !0 });
var kg = Dg(ie), Lg = bt, Bg = Sr, Fg = (
  /** @class */
  function(e) {
    Mg(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.componentDidMount = function() {
      var n = this.props.history;
      this.unsubscribe = Bg.handleRouteChange(this.context, n);
    }, t.prototype.componentWillUnmount = function() {
      this.unsubscribe && this.unsubscribe();
    }, t.prototype.render = function() {
      return null;
    }, t.contextType = Lg.AppBridgeContext, t;
  }(kg.default.Component)
);
vu.default = Fg;
var mu = {};
Object.defineProperty(mu, "__esModule", { value: !0 });
var Ug = ie, Vg = Fe, $g = Sr;
function Gg(e) {
  var t = Vg.useAppBridge();
  Ug.useEffect(function() {
    return $g.handleRouteChange(t, e);
  }, [t, e]);
}
mu.default = Gg;
(function(e) {
  var t = b && b.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useClientRouting = e.ClientRouter = void 0;
  var n = vu;
  Object.defineProperty(e, "ClientRouter", { enumerable: !0, get: function() {
    return t(n).default;
  } });
  var r = mu;
  Object.defineProperty(e, "useClientRouting", { enumerable: !0, get: function() {
    return t(r).default;
  } });
})(yu);
var gu = {}, bu = {}, Er = {}, Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.getOrigin = Dt.getTopWindow = Dt.getSelfWindow = void 0;
function qg() {
  return window.self;
}
Dt.getSelfWindow = qg;
function Wg() {
  return window.top;
}
Dt.getTopWindow = Wg;
function Hg() {
  return location.origin;
}
Dt.getOrigin = Hg;
var zg = b && b.__awaiter || function(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
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
    u((r = r.apply(e, t || [])).next());
  });
}, Qg = b && b.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
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
    for (; n; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = u;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(u);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
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
Object.defineProperty(Er, "__esModule", { value: !0 });
Er.updateHistory = void 0;
var Kg = $n, dc = St, ho = Dt, Yg = [
  "hmac",
  "locale",
  "protocol",
  "session",
  "shop",
  "timestamp",
  "host"
];
function Jg(e, t) {
  return zg(this, void 0, void 0, function() {
    var n, r, i, a, o, s, y, u, c;
    return Qg(this, function(l) {
      switch (l.label) {
        case 0:
          return n = ho.getSelfWindow(), r = ho.getTopWindow(), i = n === r, [4, e.getState("context").then(function(p) {
            return p === Kg.Context.Main;
          })];
        case 1:
          return a = l.sent(), i || !a ? [
            2
            /*return*/
          ] : (o = Xg(t), Yg.forEach(function(p) {
            return o.searchParams.delete(p);
          }), s = o.pathname, y = o.search, u = o.hash, c = "" + s + y + u, dc.History.create(e).dispatch(dc.History.Action.REPLACE, c), [
            2
            /*return*/
          ]);
      }
    });
  });
}
Er.updateHistory = Jg;
function Xg(e) {
  var t = ho.getOrigin();
  if (typeof e == "string")
    return new URL(e, t);
  var n = e.pathname, r = e.search, i = e.hash;
  return new URL("" + n + r + i, t);
}
var Zg = b && b.__extends || function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), xg = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(bu, "__esModule", { value: !0 });
var eb = xg(ie), tb = bt, pc = Er, nb = (
  /** @class */
  function(e) {
    Zg(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.componentDidMount = function() {
      var n = this.props.location;
      pc.updateHistory(this.context, n);
    }, t.prototype.componentDidUpdate = function(n) {
      var r = n.location, i = this.props.location;
      i !== r && pc.updateHistory(this.context, i);
    }, t.prototype.render = function() {
      return null;
    }, t.contextType = tb.AppBridgeContext, t;
  }(eb.default.Component)
);
bu.default = nb;
var _u = {};
Object.defineProperty(_u, "__esModule", { value: !0 });
var rb = ie, ib = Fe, ab = Er;
function ob(e) {
  var t = ib.useAppBridge();
  rb.useEffect(function() {
    ab.updateHistory(t, e);
  }, [t, e]);
}
_u.default = ob;
(function(e) {
  var t = b && b.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useRoutePropagation = e.RoutePropagator = void 0;
  var n = bu;
  Object.defineProperty(e, "RoutePropagator", { enumerable: !0, get: function() {
    return t(n).default;
  } });
  var r = _u;
  Object.defineProperty(e, "useRoutePropagation", { enumerable: !0, get: function() {
    return t(r).default;
  } });
})(gu);
const ub = "@shopify/app-bridge-react", sb = "3.0.0", cb = "index.d.ts", lb = "index.js", fb = "umd/index.js", db = "umd/index.js", pb = [
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
], hb = {
  access: "public",
  "@shopify:registry": "https://registry.npmjs.org"
}, yb = "git@github.com:Shopify/app-bridge.git", vb = "https://shopify.dev/tools/app-bridge/react-components", mb = "Shopify Inc.", gb = "MIT", bb = {
  build: "yarn build:tsc && yarn build:umd",
  "build:tsc": "NODE_ENV=production tsc",
  "build:umd": "NODE_ENV=production webpack -p",
  check: "tsc",
  clean: `cat package.json | node -pe "JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).files.map(f => './'+f).join(' ')" | xargs rm -rf`,
  pack: "yarn pack",
  size: "size-limit"
}, _b = !1, Ob = {
  "@shopify/app-bridge": "^3.0.0"
}, Ab = {
  "@types/react": "^17.0.38",
  enzyme: "3.11.0",
  "react-dom": "^17.0.2"
}, Pb = {
  react: "^16.0.0 || ^17.0.0 || ^18.0.0"
}, Sb = "7102c192814e6f3cf55daf81324b54a960ebe701", Eb = {
  name: ub,
  version: sb,
  types: cb,
  main: lb,
  unpkg: fb,
  jsdelivr: db,
  files: pb,
  private: !1,
  publishConfig: hb,
  repository: yb,
  homepage: vb,
  author: mb,
  license: gb,
  scripts: bb,
  sideEffects: _b,
  "size-limit": [
    {
      limit: "30 KB",
      path: "index.js"
    }
  ],
  dependencies: Ob,
  devDependencies: Ab,
  peerDependencies: Pb,
  gitHead: Sb
};
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(h, d, f, v) {
    v === void 0 && (v = f), Object.defineProperty(h, v, { enumerable: !0, get: function() {
      return d[f];
    } });
  } : function(h, d, f, v) {
    v === void 0 && (v = f), h[v] = d[f];
  }), n = b && b.__setModuleDefault || (Object.create ? function(h, d) {
    Object.defineProperty(h, "default", { enumerable: !0, value: d });
  } : function(h, d) {
    h.default = d;
  }), r = b && b.__importStar || function(h) {
    if (h && h.__esModule)
      return h;
    var d = {};
    if (h != null)
      for (var f in h)
        f !== "default" && Object.prototype.hasOwnProperty.call(h, f) && t(d, h, f);
    return n(d, h), d;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.setClientInterfaceHook = void 0;
  var i = r(ie), a = r(Cg), o = bt, s = yu, y = gu, u = Eb;
  function c(h) {
    var d = h.config, f = h.router, v = h.children, m = i.useMemo(function() {
      return a.default(d);
    }, [JSON.stringify(d)]);
    i.useEffect(function() {
      m != null && m.hooks && m.hooks.set(a.LifecycleHook.DispatchAction, e.setClientInterfaceHook);
    }, [m]);
    var g = f != null && f.history && (f != null && f.location) ? i.default.createElement(p, { history: f.history, location: f.location }) : null;
    return i.default.createElement(
      o.AppBridgeContext.Provider,
      { value: m },
      g,
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
})(of);
var Tb = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(pu, "__esModule", { value: !0 });
var wb = Tb(of);
pu.default = wb.default;
var Ou = {}, df = {};
(function(e) {
  var t = b && b.__assign || function() {
    return t = Object.assign || function(s) {
      for (var y, u = 1, c = arguments.length; u < c; u++) {
        y = arguments[u];
        for (var l in y)
          Object.prototype.hasOwnProperty.call(y, l) && (s[l] = y[l]);
      }
      return s;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ResourceType = e.ActionVerb = void 0;
  var n = ie, r = Ko;
  Object.defineProperty(e, "ActionVerb", { enumerable: !0, get: function() {
    return r.ActionVerb;
  } }), Object.defineProperty(e, "ResourceType", { enumerable: !0, get: function() {
    return r.ResourceType;
  } });
  var i = Fe;
  function a(s) {
    var y = i.useAppBridge(), u = n.useRef(null), c = s.resourceType, l = s.onSelection, p = s.onCancel, h = s.open, d = n.useRef({ open: !1 }), f = n.useMemo(function() {
      return r.create(y, {
        resourceType: r.ResourceType[c],
        options: o(s)
      });
    }, [y]);
    return n.useEffect(function() {
      var v, m = (v = d.current) === null || v === void 0 ? void 0 : v.open;
      m !== h && (h ? f.dispatch(r.Action.OPEN) : f.dispatch(r.Action.CLOSE)), !m && h ? u.current = document.activeElement : m && !h && u.current != null && document.contains(u.current) && (u.current.focus(), u.current = null);
    }, [h]), n.useEffect(function() {
      var v = [];
      return l != null && v.push(f.subscribe(r.Action.SELECT, l)), p != null && v.push(f.subscribe(r.Action.CANCEL, p)), function() {
        for (var m = v.pop(); m; )
          m(), m = v.pop();
      };
    }, [l, p]), n.useEffect(function() {
      var v = JSON.stringify(t(t({}, d.current), { open: void 0 })) !== JSON.stringify(t(t({}, s), { open: void 0 }));
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
      var v = s.showVariants, m = s.showDraft, g = s.showArchived, O = s.showDraftBadge, _ = s.showArchivedBadge, T = {
        showVariants: v,
        showDraft: m,
        showArchived: g,
        showDraftBadge: O,
        showArchivedBadge: _
      };
      f = t(t({}, d), T);
    }
    return f;
  }
  e.default = a;
})(df);
var Ib = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ou, "__esModule", { value: !0 });
var jb = Ib(df);
Ou.default = jb.default;
var Au = {}, Pu = {};
Object.defineProperty(Pu, "__esModule", { value: !0 });
var Ma = ie, yo = Ar, Cb = Xo, pf = Ci, hf = tn, Nb = Fe;
function Rb(e) {
  var t = e.title, n = Nb.useAppBridge(), r = Ma.useRef({ title: t }), i = Ma.useMemo(function() {
    return Cb.create(n, {});
  }, [n]);
  return Ma.useEffect(function() {
    var a, o = JSON.stringify(r.current) !== JSON.stringify(e);
    if (r.current = e, o)
      i.set(kb(n, e));
    else {
      var s = e.primaryAction, y = e.secondaryActions, u = e.actionGroups, c = e.breadcrumbs, l = Array.isArray(c) ? c[c.length - 1] : c;
      yr(l, i.options.breadcrumbs), yr(s, (a = i.options.buttons) === null || a === void 0 ? void 0 : a.primary), Mb(i, y), Db(i, u);
    }
    return function() {
      i.unsubscribe();
    };
  }, [i, e]), null;
}
Pu.default = Rb;
function Mb(e, t) {
  var n, r, i = ((r = (n = e.options.buttons) === null || n === void 0 ? void 0 : n.secondary) === null || r === void 0 ? void 0 : r.filter(function(a) {
    return !pf.isGroupedButton(a);
  })) || [];
  i == null || i.forEach(function(a, o) {
    return yr(
      t == null ? void 0 : t[o],
      // This needs to be casted as the React TitleBar component doesn't accept button groups for secondary actions
      a
    );
  });
}
function Db(e, t) {
  var n, r, i = ((r = (n = e.options.buttons) === null || n === void 0 ? void 0 : n.secondary) === null || r === void 0 ? void 0 : r.filter(pf.isGroupedButton)) || [];
  i == null || i.forEach(function(a, o) {
    var s = t == null ? void 0 : t[o];
    s && a.options.buttons.forEach(function(y, u) {
      return yr(s.actions[u], y);
    });
  });
}
function kb(e, t) {
  var n = t.actionGroups, r = t.breadcrumbs, i = t.primaryAction, a = t.secondaryActions, o = t.title, s = Array.isArray(r) ? r[r.length - 1] : r;
  return {
    title: o,
    buttons: hf.transformActions(e, {
      primaryAction: i,
      secondaryActions: a,
      actionGroups: n
    }),
    breadcrumbs: s ? Lb(e, s) : void 0
  };
}
function Lb(e, t, n) {
  var r = n || yo.create(e, {
    label: t.content || ""
  });
  return yr(t, r), r;
}
function yr(e, t) {
  if (!(!e || !t)) {
    var n = hf.generateRedirect(t.app, e.url, e.target, e.external);
    n && t.subscribe(yo.Action.CLICK, n, t), e != null && e.onAction && t.subscribe(yo.Action.CLICK, e.onAction, t);
  }
}
var Bb = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Au, "__esModule", { value: !0 });
var Fb = Bb(Pu);
Au.default = Fb.default;
var Su = {}, yf = {};
(function(e) {
  var t = b && b.__extends || function() {
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
  }(), n = b && b.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DEFAULT_TOAST_DURATION = void 0;
  var r = n(ie), i = St, a = bt;
  e.DEFAULT_TOAST_DURATION = 5e3;
  var o = (
    /** @class */
    function(s) {
      t(y, s);
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
})(yf);
var Ub = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Su, "__esModule", { value: !0 });
var Vb = Ub(yf);
Su.default = Vb.default;
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(p, h, d, f) {
    f === void 0 && (f = d), Object.defineProperty(p, f, { enumerable: !0, get: function() {
      return h[d];
    } });
  } : function(p, h, d, f) {
    f === void 0 && (f = d), p[f] = h[d];
  }), n = b && b.__exportStar || function(p, h) {
    for (var d in p)
      d !== "default" && !Object.prototype.hasOwnProperty.call(h, d) && t(h, p, d);
  }, r = b && b.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Toast = e.TitleBar = e.ResourcePicker = e.Provider = e.NavigationMenu = e.ModalContent = e.Modal = e.Loading = e.ContextualSaveBar = void 0;
  var i = Do;
  Object.defineProperty(e, "ContextualSaveBar", { enumerable: !0, get: function() {
    return r(i).default;
  } });
  var a = iu;
  Object.defineProperty(e, "Loading", { enumerable: !0, get: function() {
    return r(a).default;
  } });
  var o = rf;
  Object.defineProperty(e, "Modal", { enumerable: !0, get: function() {
    return r(o).default;
  } }), Object.defineProperty(e, "ModalContent", { enumerable: !0, get: function() {
    return o.ModalContent;
  } });
  var s = fu;
  Object.defineProperty(e, "NavigationMenu", { enumerable: !0, get: function() {
    return r(s).default;
  } });
  var y = pu;
  Object.defineProperty(e, "Provider", { enumerable: !0, get: function() {
    return r(y).default;
  } });
  var u = Ou;
  Object.defineProperty(e, "ResourcePicker", { enumerable: !0, get: function() {
    return r(u).default;
  } });
  var c = Au;
  Object.defineProperty(e, "TitleBar", { enumerable: !0, get: function() {
    return r(c).default;
  } });
  var l = Su;
  Object.defineProperty(e, "Toast", { enumerable: !0, get: function() {
    return r(l).default;
  } }), n(gu, e), n(yu, e);
})(Al);
var vf = {}, mf = {}, Bi = {}, $b = b && b.__awaiter || function(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
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
    u((r = r.apply(e, t || [])).next());
  });
}, Gb = b && b.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
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
    for (; n; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = u;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(u);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
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
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.useAppBridgeState = void 0;
var Jn = ie, qb = Fe, Wb = function(e) {
  var t = qb.useAppBridge(), n = Jn.useState(), r = n[0], i = n[1], a = Jn.useRef(!1), o = Jn.useCallback(function() {
    return $b(void 0, void 0, void 0, function() {
      var s, y;
      return Gb(this, function(u) {
        switch (u.label) {
          case 0:
            return e ? [4, t.getState(e)] : [3, 2];
          case 1:
            return y = u.sent(), [3, 4];
          case 2:
            return [4, t.getState()];
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
  }, [t, e]);
  return Jn.useEffect(function() {
    return o(), t.subscribe(function() {
      o();
    });
  }, [t, o]), Jn.useEffect(function() {
    return function() {
      a.current = !0;
    };
  }, [t]), r;
};
Bi.useAppBridgeState = Wb;
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), n = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(Bi, e);
})(mf);
var gf = {}, Fi = {}, hc = b && b.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
Object.defineProperty(Fi, "__esModule", { value: !0 });
Fi.useContextualSaveBar = void 0;
var _t = ie, Ht = xo, Hb = Fe;
function zb() {
  var e = Hb.useAppBridge(), t = _t.useState(), n = t[0], r = t[1], i = _t.useState(), a = i[0], o = i[1], s = _t.useMemo(function() {
    return Ht.create(e);
  }, [e]), y = _t.useCallback(function(p) {
    s.dispatch(Ht.Action.SHOW), p && s.set(p);
  }, [s]), u = _t.useCallback(function() {
    s.dispatch(Ht.Action.HIDE);
  }, [s]), c = _t.useMemo(function() {
    return {
      setOptions: function(p) {
        var h = p.onAction, d = hc(p, ["onAction"]);
        r(function() {
          return h;
        }), Object.keys(d).length && s.set({ saveAction: d });
      }
    };
  }, [s]), l = _t.useMemo(function() {
    return {
      setOptions: function(p) {
        var h = p.onAction, d = hc(p, ["onAction"]);
        o(function() {
          return h;
        }), Object.keys(d).length && s.set({ discardAction: d });
      }
    };
  }, [s]);
  return _t.useEffect(function() {
    return s.subscribe(Ht.Action.DISCARD, function() {
      s.dispatch(Ht.Action.HIDE), a == null || a();
    });
  }, [s, a]), _t.useEffect(function() {
    return s.subscribe(Ht.Action.SAVE, function() {
      s.dispatch(Ht.Action.HIDE), n == null || n();
    });
  }, [s, n]), _t.useEffect(function() {
    s.unsubscribe();
  }, [s, n]), { show: y, hide: u, saveAction: c, discardAction: l };
}
Fi.useContextualSaveBar = zb;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useContextualSaveBar = void 0;
  var t = Fi;
  Object.defineProperty(e, "useContextualSaveBar", { enumerable: !0, get: function() {
    return t.useContextualSaveBar;
  } });
})(gf);
var Eu = {}, Ui = {}, Qb = b && b.__awaiter || function(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
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
    u((r = r.apply(e, t || [])).next());
  });
}, Kb = b && b.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
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
    for (; n; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = u;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(u);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
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
Object.defineProperty(Ui, "__esModule", { value: !0 });
Ui.useFeaturesAvailable = void 0;
var Xn = ie, Yb = Wo, Jb = Fe;
function Xb() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var r = Jb.useAppBridge(), i = Xn.useState(), a = i[0], o = i[1], s = Xn.useRef([]), y = Xn.useCallback(function() {
    var u = !1;
    return function() {
      return Qb(e, void 0, void 0, function() {
        var c;
        return Kb(this, function(l) {
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
  return Xn.useEffect(function() {
    return s.current = t, y();
  }, [JSON.stringify(t)]), Xn.useEffect(function() {
    var u, c = r.subscribe(Yb.Action.UPDATE, function() {
      u = y();
    });
    return function() {
      c(), u == null || u();
    };
  }, [r, y]), a;
}
Ui.useFeaturesAvailable = Xb;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useFeaturesAvailable = void 0;
  var t = Ui;
  Object.defineProperty(e, "useFeaturesAvailable", { enumerable: !0, get: function() {
    return t.useFeaturesAvailable;
  } });
})(Eu);
var bf = {}, Vi = {};
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.useFeatureRequest = void 0;
var Wr = ie, yc = $o, Zb = Fe, xb = Eu;
function e_(e, t) {
  var n = Zb.useAppBridge(), r = xb.useFeaturesAvailable(), i = Wr.useState(), a = i[0], o = i[1], s = Wr.useCallback(function(y) {
    var u = y == null ? void 0 : y[e];
    if (t && (u != null && u[t])) {
      var c = u == null ? void 0 : u[t];
      o(function(l) {
        return JSON.stringify(c) !== JSON.stringify(l) ? c : l;
      });
      return;
    }
    o(function(l) {
      return JSON.stringify(u) !== JSON.stringify(l) ? u : l;
    });
  }, [e, t]);
  return Wr.useEffect(function() {
    yc.create(n).dispatch(yc.Action.REQUEST, { feature: e, action: t });
  }, [n, e, t]), Wr.useEffect(function() {
    s(r);
  }, [r, s]), a;
}
Vi.useFeatureRequest = e_;
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), n = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(Vi, e);
})(bf);
var _f = {}, Rn = {}, Tu = {}, $i = {};
Object.defineProperty($i, "__esModule", { value: !0 });
$i.useNavigationHistory = void 0;
var t_ = ie, Da = St, n_ = Fe;
function r_() {
  var e = n_.useAppBridge();
  return t_.useMemo(function() {
    var t = Da.History.create(e);
    function n(i) {
      t.dispatch(Da.History.Action.PUSH, i.pathname);
    }
    function r(i) {
      t.dispatch(Da.History.Action.REPLACE, i.pathname);
    }
    return { push: n, replace: r };
  }, []);
}
$i.useNavigationHistory = r_;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useNavigationHistory = void 0;
  var t = $i;
  Object.defineProperty(e, "useNavigationHistory", { enumerable: !0, get: function() {
    return t.useNavigationHistory;
  } });
})(Tu);
var Mn = b && b.__assign || function() {
  return Mn = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Mn.apply(this, arguments);
}, i_ = b && b.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), a_ = b && b.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), o_ = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && i_(t, e, n);
  return a_(t, e), t;
};
Object.defineProperty(Rn, "__esModule", { value: !0 });
Rn.isAdminSection = Rn.useNavigate = void 0;
var ka = ie, pn = o_(Mi), u_ = Fe, s_ = Tu;
function c_() {
  var e = u_.useAppBridge(), t = s_.useNavigationHistory(), n = ka.useMemo(function() {
    return pn.create(e);
  }, [e]), r = ka.useCallback(function(i, a) {
    var o = l_(i), s = o.startsWith(e.localOrigin), y = o.startsWith(e.hostOrigin), u = o.startsWith("/");
    if (s || y || u) {
      var c = Af(o);
      if (y || (a == null ? void 0 : a.target) === "new" || (a == null ? void 0 : a.target) === "host") {
        n.dispatch(pn.Action.ADMIN_PATH, {
          path: c.replace(/^\/admin/, ""),
          newContext: (a == null ? void 0 : a.target) === "new"
        });
        return;
      }
      if (((a == null ? void 0 : a.target) === "self" || !(a != null && a.target)) && (a != null && a.replace)) {
        t.replace({ pathname: c });
        return;
      }
      n.dispatch(pn.Action.APP, c);
      return;
    }
    n.dispatch(pn.Action.REMOTE, {
      url: o,
      newContext: (a == null ? void 0 : a.target) === "new"
    });
  }, [n, t]);
  return ka.useCallback(function(i, a) {
    if (Of(i)) {
      var o = Mn(Mn({}, i), { name: pn.ResourceType[i.name] });
      n.dispatch(pn.Action.ADMIN_SECTION, {
        section: o,
        newContext: (a == null ? void 0 : a.target) === "new"
      });
      return;
    }
    r(i, a);
  }, [r, n]);
}
Rn.useNavigate = c_;
function Of(e) {
  return typeof e == "object" && typeof (e == null ? void 0 : e.name) == "string";
}
Rn.isAdminSection = Of;
function vc(e) {
  var t = e.pathname, n = e.search, r = e.hash;
  return "" + t + (n || "") + (r || "");
}
function l_(e) {
  return e instanceof URL ? e.toString() : typeof e == "string" ? e : Af(e);
}
function Af(e) {
  if (typeof e == "string")
    return e.startsWith("/") ? e : vc(new URL(e));
  var t = e.search instanceof URLSearchParams ? e.search.toString() : e.search;
  return vc(Mn(Mn({}, e), { search: t }));
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useNavigate = void 0;
  var t = Rn;
  Object.defineProperty(e, "useNavigate", { enumerable: !0, get: function() {
    return t.useNavigate;
  } });
})(_f);
var Pf = {}, Sf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = e.DEFAULT_TOAST_DURATION = void 0;
  var t = ie, n = Zo, r = Fe;
  e.DEFAULT_TOAST_DURATION = 5e3;
  function i() {
    var a = r.useAppBridge(), o, s = t.useCallback(function(y, u) {
      o = n.create(a, {
        message: y,
        isError: u == null ? void 0 : u.isError,
        duration: (u == null ? void 0 : u.duration) || e.DEFAULT_TOAST_DURATION
      }), o.dispatch(n.Action.SHOW), u != null && u.onDismiss && o.subscribe(n.Action.CLEAR, u == null ? void 0 : u.onDismiss);
    }, [a]);
    return t.useEffect(function() {
      return function() {
        o.unsubscribe();
      };
    }, []), { show: s };
  }
  e.useToast = i;
})(Sf);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = void 0;
  var t = Sf;
  Object.defineProperty(e, "useToast", { enumerable: !0, get: function() {
    return t.useToast;
  } });
})(Pf);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useToast = e.useNavigationHistory = e.useNavigate = e.useFeatureRequest = e.useFeaturesAvailable = e.useContextualSaveBar = e.useAppBridgeState = void 0;
  var t = mf;
  Object.defineProperty(e, "useAppBridgeState", { enumerable: !0, get: function() {
    return t.useAppBridgeState;
  } });
  var n = gf;
  Object.defineProperty(e, "useContextualSaveBar", { enumerable: !0, get: function() {
    return n.useContextualSaveBar;
  } });
  var r = Eu;
  Object.defineProperty(e, "useFeaturesAvailable", { enumerable: !0, get: function() {
    return r.useFeaturesAvailable;
  } });
  var i = bf;
  Object.defineProperty(e, "useFeatureRequest", { enumerable: !0, get: function() {
    return i.useFeatureRequest;
  } });
  var a = _f;
  Object.defineProperty(e, "useNavigate", { enumerable: !0, get: function() {
    return a.useNavigate;
  } });
  var o = Tu;
  Object.defineProperty(e, "useNavigationHistory", { enumerable: !0, get: function() {
    return o.useNavigationHistory;
  } });
  var s = Pf;
  Object.defineProperty(e, "useToast", { enumerable: !0, get: function() {
    return s.useToast;
  } });
})(vf);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(a, o, s, y) {
    y === void 0 && (y = s), Object.defineProperty(a, y, { enumerable: !0, get: function() {
      return o[s];
    } });
  } : function(a, o, s, y) {
    y === void 0 && (y = s), a[y] = o[s];
  }), n = b && b.__exportStar || function(a, o) {
    for (var s in a)
      s !== "default" && !Object.prototype.hasOwnProperty.call(o, s) && t(o, a, s);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.useAppBridge = e.Context = void 0;
  var r = bt;
  Object.defineProperty(e, "Context", { enumerable: !0, get: function() {
    return r.AppBridgeContext;
  } });
  var i = Fe;
  Object.defineProperty(e, "useAppBridge", { enumerable: !0, get: function() {
    return i.useAppBridge;
  } }), n(Al, e), n(vf, e);
})(_l);
const f_ = /* @__PURE__ */ Sc(_l);
var Ef = {}, Tf = {}, Dn = {}, ot = {};
Object.defineProperty(ot, "__esModule", { value: !0 });
ot.isShopifyPing = ot.isShopifyPOS = ot.isShopifyMobile = ot.isShopifyEmbedded = ot.isMobile = void 0;
var mc = Pr;
function d_() {
  return wf() || If() || jf();
}
ot.isMobile = d_;
function p_() {
  return mc.isClient && window.top !== window.self || mc.isUnframed;
}
ot.isShopifyEmbedded = p_;
function wf() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Mobile") >= 0;
}
ot.isShopifyMobile = wf;
function If() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify POS") >= 0;
}
ot.isShopifyPOS = If;
function jf() {
  return typeof navigator < "u" && navigator.userAgent.indexOf("Shopify Ping") >= 0;
}
ot.isShopifyPing = jf;
var h_ = b && b.__awaiter || function(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
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
    u((r = r.apply(e, t || [])).next());
  });
}, y_ = b && b.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
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
    for (; n; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = u;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(u);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
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
Object.defineProperty(Dn, "__esModule", { value: !0 });
Dn.createMutationObserver = Dn.setupModalAutoSizing = void 0;
var v_ = Ri, m_ = $n, g_ = ot, vo = "app-bridge-utils-modal-auto-size", Hr = b_();
function b_() {
  if (typeof document > "u")
    return null;
  var e = document.createElement("style");
  return e.type = "text/css", e.innerHTML = "." + vo + " { overflow: hidden; height: auto; min-height: auto; }", e;
}
function __(e, t) {
  if (!Hr)
    return function() {
    };
  var n = document.getElementsByTagName("head")[0], r = document.body.classList;
  n.appendChild(Hr), r.add(vo);
  var i = Cf(e, t);
  return function() {
    r.remove(vo), n.contains(Hr) && n.removeChild(Hr), i && i.disconnect();
  };
}
function O_(e) {
  return h_(this, void 0, void 0, function() {
    function t() {
      r && (r(), r = void 0);
    }
    function n(i) {
      var a = i.context, o = i.modal.id;
      return g_.isMobile() || a !== m_.Context.Modal ? (t(), t) : (r || (r = __(e, o)), t);
    }
    var r;
    return y_(this, function(i) {
      switch (i.label) {
        case 0:
          return [4, e.getState().then(n)];
        case 1:
          return i.sent(), [2, t];
      }
    });
  });
}
Dn.setupModalAutoSizing = O_;
function Cf(e, t) {
  if (typeof document > "u")
    return;
  var n = -1, r, i = {
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
    y !== n && (n = y, e.dispatch(v_.updateModalSize({ id: t, height: String(y) })));
  }
  return a;
}
Dn.createMutationObserver = Cf;
var Nf = {}, Tr = {}, A_ = b && b.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), P_ = b && b.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), S_ = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && A_(t, e, n);
  return P_(t, e), t;
}, E_ = b && b.__awaiter || function(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
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
    u((r = r.apply(e, t || [])).next());
  });
}, T_ = b && b.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
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
    for (; n; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = u;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(u);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
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
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.getSessionToken = void 0;
var gc = S_(Jo), bc = rn;
function w_(e) {
  return E_(this, void 0, void 0, function() {
    return T_(this, function(t) {
      return [2, new Promise(function(n, r) {
        var i = e.subscribe(gc.Action.RESPOND, function(a) {
          var o = a.sessionToken;
          o ? n(o) : r(bc.fromAction("Failed to retrieve a session token", bc.Action.FAILED_AUTHENTICATION)), i();
        });
        e.dispatch(gc.request());
      })];
    });
  });
}
Tr.getSessionToken = w_;
var Gi = {}, bi = b && b.__assign || function() {
  return bi = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, bi.apply(this, arguments);
}, I_ = b && b.__awaiter || function(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
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
    u((r = r.apply(e, t || [])).next());
  });
}, j_ = b && b.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
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
    for (; n; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = u;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(u);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
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
Object.defineProperty(Gi, "__esModule", { value: !0 });
Gi.authenticatedFetch = void 0;
var C_ = Tr;
function N_(e, t) {
  var n = this;
  return t === void 0 && (t = fetch), function(r, i) {
    return i === void 0 && (i = {}), I_(n, void 0, void 0, function() {
      var a, o, s;
      return j_(this, function(y) {
        switch (y.label) {
          case 0:
            return [4, C_.getSessionToken(e)];
          case 1:
            return a = y.sent(), o = new Headers(i.headers), o.append("Authorization", "Bearer " + a), o.append("X-Requested-With", "XMLHttpRequest"), s = {}, o.forEach(function(u, c) {
              s[c] = u;
            }), [2, t(r, bi(bi({}, i), { headers: s }))];
        }
      });
    });
  };
}
Gi.authenticatedFetch = N_;
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), n = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(Tr, e), n(Gi, e);
})(Nf);
var Rf = {}, wr = {}, Mf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.generateUuid = void 0;
  var t = Vn;
  Object.defineProperty(e, "generateUuid", { enumerable: !0, get: function() {
    return t.generateUuid;
  } }), e.default = t.generateUuid;
})(Mf);
var R_ = b && b.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), M_ = b && b.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), D_ = b && b.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && R_(t, e, n);
  return M_(t, e), t;
}, k_ = b && b.__awaiter || function(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
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
    u((r = r.apply(e, t || [])).next());
  });
}, L_ = b && b.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
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
    for (; n; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = u;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(u);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, B_ = b && b.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(wr, "__esModule", { value: !0 });
wr.getAuthorizationCodePayload = void 0;
var _c = D_(Lo), Oc = rn, F_ = B_(Mf);
function U_(e) {
  return k_(this, void 0, void 0, function() {
    return L_(this, function(t) {
      return [2, new Promise(function(n, r) {
        var i = F_.default(), a = e.subscribe(_c.Action.RESPOND, function(o) {
          switch (o == null ? void 0 : o.status) {
            case "needsExchange":
              n(o);
              break;
            default:
              r(Oc.fromAction("Failed to retrieve an authorization code", Oc.Action.FAILED_AUTHENTICATION));
          }
          a();
        }, i);
        e.dispatch(_c.request(i));
      })];
    });
  });
}
wr.getAuthorizationCodePayload = U_;
var qi = {}, V_ = b && b.__awaiter || function(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
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
    u((r = r.apply(e, t || [])).next());
  });
}, $_ = b && b.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
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
    for (; n; )
      try {
        if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done)
          return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = u;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(u);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
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
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.userAuthorizedFetch = void 0;
var G_ = wr, q_ = "auth/shopify/callback";
function W_(e) {
  var t = e.headers.get("X-Shopify-API-Request-Failure-Unauthorized");
  return t ? t.toLowerCase() === "true" : !1;
}
function H_(e) {
  var t = this, n = e.app, r = e.callbackUri, i = r === void 0 ? q_ : r, a = e.isAuthorizationCodeRequired, o = a === void 0 ? W_ : a, s = e.fetchOperation;
  return function(y, u) {
    return V_(t, void 0, void 0, function() {
      var c, l, p, h, d, f, v, m;
      return $_(this, function(g) {
        switch (g.label) {
          case 0:
            return [4, s(y, u)];
          case 1:
            return c = g.sent(), o(c) ? [4, G_.getAuthorizationCodePayload(n)] : [2, c];
          case 2:
            return l = g.sent(), p = l.code, h = l.hmac, d = l.shop, f = l.timestamp, v = encodeURI("https://" + window.location.hostname + "/" + i + "?code=" + p + "&hmac=" + h + "&shop=" + d + "&timestamp=" + f), [4, s(v, {})];
          case 3:
            if (m = g.sent(), !m.ok)
              throw new Error("Failed to authorize request.");
            return [2, s(y, u)];
        }
      });
    });
  };
}
qi.userAuthorizedFetch = H_;
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), n = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(wr, e), n(qi, e);
})(Rf);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), n = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(Dn, e), n(ot, e), n(Nf, e), n(Rf, e);
})(Tf);
(function(e) {
  var t = b && b.__createBinding || (Object.create ? function(r, i, a, o) {
    o === void 0 && (o = a), Object.defineProperty(r, o, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(r, i, a, o) {
    o === void 0 && (o = a), r[o] = i[a];
  }), n = b && b.__exportStar || function(r, i) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, r, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(Tf, e);
})(Ef);
var It;
(function(e) {
  e[e.Standalone = 0] = "Standalone", e[e.Embedded = 1] = "Embedded";
})(It || (It = {}));
const z_ = `
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
`, Q_ = Xf(({ children: e, forceRedirect: t, isEmbedded: n, gadgetAppUrl: r, originalQueryParams: i, api: a, isRootFrameRequest: o, type: s, isInstallRequest: y }) => {
  var g, O;
  const u = Ac(Ol), [c, l] = Pc({
    isAuthenticated: !1,
    isEmbedded: !1,
    canAuth: !1,
    loading: !0,
    appBridge: u,
    isRootFrameRequest: !1
  });
  zr(() => {
    if (!u) {
      console.debug("[gadget-rsab] no app bridge, skipping client auth setup");
      return;
    }
    a.connection.setAuthenticationMode({
      custom: {
        processFetch: async (_, T) => {
          const P = new Headers(T.headers);
          P.append("Authorization", `ShopifySessionToken ${await Ef.getSessionToken(u)}`), T.headers ?? (T.headers = {}), P.forEach(function(E, S) {
            T.headers[S] = E;
          });
        },
        processTransactionConnectionParams(_) {
          throw new Error("client side transactions yet not supported in Shopify Gadget provider");
        }
      }
    }), console.debug("[gadget-rsab] set up client auth for session tokens");
  }, [a.connection, u]);
  let p = !1, h = !1;
  const [{ data: d, fetching: f, error: v }] = bl({
    query: z_,
    // for now don't fetch a session's shop in standalone mode since it leverages session tokens which aren't available if standalone
    pause: s == It.Standalone
  });
  d ? (p = (g = d.shopifyConnection) == null ? void 0 : g.requiresReauthentication, d.currentSession && (d.currentSession.shop ? h = !((O = d.shopifyConnection) != null && O.requiresReauthentication) : p = !0)) : s == It.Standalone && y && (p = !0), zr(() => {
    if (!p || o)
      return;
    const _ = new URL("/api/connections/auth/shopify", r);
    _.search = (i == null ? void 0 : i.toString()) ?? "";
    const T = _.toString();
    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process", {
      appType: s,
      isInstallRequest: y,
      isEmbedded: n,
      redirectURL: T,
      gadgetAppUrl: r
    }), n && u ? St.Redirect.create(u).dispatch(St.Redirect.Action.REMOTE, T) : window.location.assign(T);
  }, [u, r, n, o, i, p]);
  const m = (t || p || f) && !o;
  return zr(() => {
    const _ = {
      isAuthenticated: h,
      isEmbedded: n,
      canAuth: !!u,
      loading: m,
      appBridge: u,
      error: v,
      isRootFrameRequest: o
    };
    return console.debug("[gadget-rsab] context changed", _), l(_);
  }, [m, n, u, h, v, o]), ie.createElement(Y_.Provider, { value: c }, e);
}), K_ = ({ type: e, children: t, shopifyApiKey: n, api: r, router: i }) => {
  const [a, o] = Pc(null), s = !!a, { query: y } = a ?? {}, u = (y == null ? void 0 : y.get("host")) ?? void 0, c = e ?? It.Embedded, l = Zr(() => y, [s]), p = (y == null ? void 0 : y.has("hmac")) && (y == null ? void 0 : y.has("shop")), h = typeof window < "u" ? window.top !== window.self : !1, d = typeof window < "u" && !!window.MobileWebView, f = h || d, v = f == (c == It.Embedded) && (c == It.Standalone ? !p : !0), m = !(y != null && y.has("hmac")) && !(y != null && y.has("shop")) && c == It.Embedded, g = s && typeof u < "u" && !v, O = new URL(r.connection.options.endpoint).origin;
  zr(() => {
    o({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search)
    });
  }, []);
  let _ = ie.createElement(
    dv,
    { api: r },
    ie.createElement(Q_, { forceRedirect: g, isEmbedded: f, gadgetAppUrl: O, api: r, originalQueryParams: l, isRootFrameRequest: m, type: c, isInstallRequest: !!p }, t)
  );
  const T = u && c != It.Standalone && (!p || v);
  return console.debug("[gadget-rsab] provider rendering", {
    host: u,
    coalescedType: c,
    isInstallRequest: p,
    isReady: s,
    isEmbedded: f,
    isRootFrameRequest: m,
    inDestinationContext: v,
    shouldMountAppBridge: T
  }), T && (_ = ie.createElement(f_.Provider, { config: {
    apiKey: n,
    host: u,
    forceRedirect: g
  }, router: i }, _)), _;
}, Y_ = Zf({
  loading: !0,
  isEmbedded: !1,
  isAuthenticated: !1,
  canAuth: !1,
  appBridge: null,
  isRootFrameRequest: !1
}), Df = new xy(), J_ = () => {
  const [{ data: e }] = Ev(Df.shopifyProduct);
  return /* @__PURE__ */ xr.jsx(xr.Fragment, { children: JSON.stringify(e) });
}, x_ = () => /* @__PURE__ */ xr.jsx(K_, { api: Df, shopifyApiKey: "deadbeef", children: /* @__PURE__ */ xr.jsx(J_, {}) });
export {
  x_ as A,
  J_ as R,
  b as c
};
