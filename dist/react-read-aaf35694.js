import * as We from "react";
import Rn, { useMemo as sr, useContext as hs, useRef as ys } from "react";
var Gc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ms(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var or = { exports: {} }, Lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si;
function bs() {
  if (si)
    return Lt;
  si = 1;
  var e = Rn, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, u, l) {
    var c, p = {}, d = null, y = null;
    l !== void 0 && (d = "" + l), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (y = u.ref);
    for (c in u)
      r.call(u, c) && !a.hasOwnProperty(c) && (p[c] = u[c]);
    if (o && o.defaultProps)
      for (c in u = o.defaultProps, u)
        p[c] === void 0 && (p[c] = u[c]);
    return { $$typeof: t, type: o, key: d, ref: y, props: p, _owner: i.current };
  }
  return Lt.Fragment = n, Lt.jsx = s, Lt.jsxs = s, Lt;
}
var Bt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oi;
function gs() {
  return oi || (oi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Rn, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), h = Symbol.iterator, g = "@@iterator";
    function E(f) {
      if (f === null || typeof f != "object")
        return null;
      var b = h && f[h] || f[g];
      return typeof b == "function" ? b : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(f) {
      {
        for (var b = arguments.length, v = new Array(b > 1 ? b - 1 : 0), N = 1; N < b; N++)
          v[N - 1] = arguments[N];
        T("error", f, v);
      }
    }
    function T(f, b, v) {
      {
        var N = k.ReactDebugCurrentFrame, U = N.getStackAddendum();
        U !== "" && (b += "%s", v = v.concat([U]));
        var Q = v.map(function(D) {
          return String(D);
        });
        Q.unshift("Warning: " + b), Function.prototype.apply.call(console[f], console, Q);
      }
    }
    var m = !1, A = !1, S = !1, W = !1, et = !1, yt;
    yt = Symbol.for("react.module.reference");
    function mt(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === a || et || f === i || f === l || f === c || W || f === y || m || A || S || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === p || f.$$typeof === s || f.$$typeof === o || f.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === yt || f.getModuleId !== void 0));
    }
    function cn(f, b, v) {
      var N = f.displayName;
      if (N)
        return N;
      var U = b.displayName || b.name || "";
      return U !== "" ? v + "(" + U + ")" : v;
    }
    function Ut(f) {
      return f.displayName || "Context";
    }
    function Ve(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case o:
            var b = f;
            return Ut(b) + ".Consumer";
          case s:
            var v = f;
            return Ut(v._context) + ".Provider";
          case u:
            return cn(f, f.render, "ForwardRef");
          case p:
            var N = f.displayName || null;
            return N !== null ? N : Ve(f.type) || "Memo";
          case d: {
            var U = f, Q = U._payload, D = U._init;
            try {
              return Ve(D(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, Y = 0, B, F, ee, ze, q, He, tt;
    function ot() {
    }
    ot.__reactDisabledLog = !0;
    function nt() {
      {
        if (Y === 0) {
          B = console.log, F = console.info, ee = console.warn, ze = console.error, q = console.group, He = console.groupCollapsed, tt = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: ot,
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
        Y++;
      }
    }
    function be() {
      {
        if (Y--, Y === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, f, {
              value: B
            }),
            info: _({}, f, {
              value: F
            }),
            warn: _({}, f, {
              value: ee
            }),
            error: _({}, f, {
              value: ze
            }),
            group: _({}, f, {
              value: q
            }),
            groupCollapsed: _({}, f, {
              value: He
            }),
            groupEnd: _({}, f, {
              value: tt
            })
          });
        }
        Y < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = k.ReactCurrentDispatcher, fn;
    function bt(f, b, v) {
      {
        if (fn === void 0)
          try {
            throw Error();
          } catch (U) {
            var N = U.stack.trim().match(/\n( *(at )?)/);
            fn = N && N[1] || "";
          }
        return `
` + fn + f;
      }
    }
    var Qn = !1, dn;
    {
      var Qa = typeof WeakMap == "function" ? WeakMap : Map;
      dn = new Qa();
    }
    function zr(f, b) {
      if (!f || Qn)
        return "";
      {
        var v = dn.get(f);
        if (v !== void 0)
          return v;
      }
      var N;
      Qn = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = ce.current, ce.current = null, nt();
      try {
        if (b) {
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
            } catch (Ke) {
              N = Ke;
            }
            Reflect.construct(f, [], D);
          } else {
            try {
              D.call();
            } catch (Ke) {
              N = Ke;
            }
            f.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ke) {
            N = Ke;
          }
          f();
        }
      } catch (Ke) {
        if (Ke && N && typeof Ke.stack == "string") {
          for (var C = Ke.stack.split(`
`), ke = N.stack.split(`
`), fe = C.length - 1, pe = ke.length - 1; fe >= 1 && pe >= 0 && C[fe] !== ke[pe]; )
            pe--;
          for (; fe >= 1 && pe >= 0; fe--, pe--)
            if (C[fe] !== ke[pe]) {
              if (fe !== 1 || pe !== 1)
                do
                  if (fe--, pe--, pe < 0 || C[fe] !== ke[pe]) {
                    var Me = `
` + C[fe].replace(" at new ", " at ");
                    return f.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", f.displayName)), typeof f == "function" && dn.set(f, Me), Me;
                  }
                while (fe >= 1 && pe >= 0);
              break;
            }
        }
      } finally {
        Qn = !1, ce.current = Q, be(), Error.prepareStackTrace = U;
      }
      var vt = f ? f.displayName || f.name : "", ai = vt ? bt(vt) : "";
      return typeof f == "function" && dn.set(f, ai), ai;
    }
    function za(f, b, v) {
      return zr(f, !1);
    }
    function Wa(f) {
      var b = f.prototype;
      return !!(b && b.isReactComponent);
    }
    function pn(f, b, v) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return zr(f, Wa(f));
      if (typeof f == "string")
        return bt(f);
      switch (f) {
        case l:
          return bt("Suspense");
        case c:
          return bt("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case u:
            return za(f.render);
          case p:
            return pn(f.type, b, v);
          case d: {
            var N = f, U = N._payload, Q = N._init;
            try {
              return pn(Q(U), b, v);
            } catch {
            }
          }
        }
      return "";
    }
    var hn = Object.prototype.hasOwnProperty, Wr = {}, Jr = k.ReactDebugCurrentFrame;
    function yn(f) {
      if (f) {
        var b = f._owner, v = pn(f.type, f._source, b ? b.type : null);
        Jr.setExtraStackFrame(v);
      } else
        Jr.setExtraStackFrame(null);
    }
    function Ja(f, b, v, N, U) {
      {
        var Q = Function.call.bind(hn);
        for (var D in f)
          if (Q(f, D)) {
            var C = void 0;
            try {
              if (typeof f[D] != "function") {
                var ke = Error((N || "React class") + ": " + v + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ke.name = "Invariant Violation", ke;
              }
              C = f[D](b, D, N, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fe) {
              C = fe;
            }
            C && !(C instanceof Error) && (yn(U), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", v, D, typeof C), yn(null)), C instanceof Error && !(C.message in Wr) && (Wr[C.message] = !0, yn(U), O("Failed %s type: %s", v, C.message), yn(null));
          }
      }
    }
    var Ya = Array.isArray;
    function zn(f) {
      return Ya(f);
    }
    function Ha(f) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, v = b && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return v;
      }
    }
    function Ka(f) {
      try {
        return Yr(f), !1;
      } catch {
        return !0;
      }
    }
    function Yr(f) {
      return "" + f;
    }
    function Hr(f) {
      if (Ka(f))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ha(f)), Yr(f);
    }
    var qt = k.ReactCurrentOwner, Xa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Kr, Xr, Wn;
    Wn = {};
    function Za(f) {
      if (hn.call(f, "ref")) {
        var b = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function es(f) {
      if (hn.call(f, "key")) {
        var b = Object.getOwnPropertyDescriptor(f, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function ts(f, b) {
      if (typeof f.ref == "string" && qt.current && b && qt.current.stateNode !== b) {
        var v = Ve(qt.current.type);
        Wn[v] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ve(qt.current.type), f.ref), Wn[v] = !0);
      }
    }
    function ns(f, b) {
      {
        var v = function() {
          Kr || (Kr = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        v.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function rs(f, b) {
      {
        var v = function() {
          Xr || (Xr = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        v.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var is = function(f, b, v, N, U, Q, D) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: b,
        ref: v,
        props: D,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function as(f, b, v, N, U) {
      {
        var Q, D = {}, C = null, ke = null;
        v !== void 0 && (Hr(v), C = "" + v), es(b) && (Hr(b.key), C = "" + b.key), Za(b) && (ke = b.ref, ts(b, U));
        for (Q in b)
          hn.call(b, Q) && !Xa.hasOwnProperty(Q) && (D[Q] = b[Q]);
        if (f && f.defaultProps) {
          var fe = f.defaultProps;
          for (Q in fe)
            D[Q] === void 0 && (D[Q] = fe[Q]);
        }
        if (C || ke) {
          var pe = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          C && ns(D, pe), ke && rs(D, pe);
        }
        return is(f, C, ke, U, N, qt.current, D);
      }
    }
    var Jn = k.ReactCurrentOwner, Zr = k.ReactDebugCurrentFrame;
    function gt(f) {
      if (f) {
        var b = f._owner, v = pn(f.type, f._source, b ? b.type : null);
        Zr.setExtraStackFrame(v);
      } else
        Zr.setExtraStackFrame(null);
    }
    var Yn;
    Yn = !1;
    function Hn(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function ei() {
      {
        if (Jn.current) {
          var f = Ve(Jn.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function ss(f) {
      {
        if (f !== void 0) {
          var b = f.fileName.replace(/^.*[\\\/]/, ""), v = f.lineNumber;
          return `

Check your code at ` + b + ":" + v + ".";
        }
        return "";
      }
    }
    var ti = {};
    function os(f) {
      {
        var b = ei();
        if (!b) {
          var v = typeof f == "string" ? f : f.displayName || f.name;
          v && (b = `

Check the top-level render call using <` + v + ">.");
        }
        return b;
      }
    }
    function ni(f, b) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var v = os(b);
        if (ti[v])
          return;
        ti[v] = !0;
        var N = "";
        f && f._owner && f._owner !== Jn.current && (N = " It was passed a child from " + Ve(f._owner.type) + "."), gt(f), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, N), gt(null);
      }
    }
    function ri(f, b) {
      {
        if (typeof f != "object")
          return;
        if (zn(f))
          for (var v = 0; v < f.length; v++) {
            var N = f[v];
            Hn(N) && ni(N, b);
          }
        else if (Hn(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var U = E(f);
          if (typeof U == "function" && U !== f.entries)
            for (var Q = U.call(f), D; !(D = Q.next()).done; )
              Hn(D.value) && ni(D.value, b);
        }
      }
    }
    function us(f) {
      {
        var b = f.type;
        if (b == null || typeof b == "string")
          return;
        var v;
        if (typeof b == "function")
          v = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === p))
          v = b.propTypes;
        else
          return;
        if (v) {
          var N = Ve(b);
          Ja(v, f.props, "prop", N, f);
        } else if (b.PropTypes !== void 0 && !Yn) {
          Yn = !0;
          var U = Ve(b);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ls(f) {
      {
        for (var b = Object.keys(f.props), v = 0; v < b.length; v++) {
          var N = b[v];
          if (N !== "children" && N !== "key") {
            gt(f), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), gt(null);
            break;
          }
        }
        f.ref !== null && (gt(f), O("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
      }
    }
    function ii(f, b, v, N, U, Q) {
      {
        var D = mt(f);
        if (!D) {
          var C = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = ss(U);
          ke ? C += ke : C += ei();
          var fe;
          f === null ? fe = "null" : zn(f) ? fe = "array" : f !== void 0 && f.$$typeof === t ? (fe = "<" + (Ve(f.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof f, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, C);
        }
        var pe = as(f, b, v, U, Q);
        if (pe == null)
          return pe;
        if (D) {
          var Me = b.children;
          if (Me !== void 0)
            if (N)
              if (zn(Me)) {
                for (var vt = 0; vt < Me.length; vt++)
                  ri(Me[vt], f);
                Object.freeze && Object.freeze(Me);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ri(Me, f);
        }
        return f === r ? ls(pe) : us(pe), pe;
      }
    }
    function cs(f, b, v) {
      return ii(f, b, v, !0);
    }
    function fs(f, b, v) {
      return ii(f, b, v, !1);
    }
    var ds = fs, ps = cs;
    Bt.Fragment = r, Bt.jsx = ds, Bt.jsxs = ps;
  }()), Bt;
}
process.env.NODE_ENV === "production" ? or.exports = bs() : or.exports = gs();
var ui = or.exports, Wt;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(Wt || (Wt = {}));
const vs = {
  DateTime(e) {
    return new Date(e);
  }
};
class Ss {
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
      a != null && (n[r] = vs[i](a));
    }
    return n;
  }
}
function ue(e, t) {
  if (!!!e)
    throw new Error(t);
}
function Xt(e) {
  return typeof e == "object" && e !== null;
}
function Ki(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const ws = /\r\n|[\n\r]/g;
function ur(e, t) {
  let n = 0, r = 1;
  for (const i of e.body.matchAll(ws)) {
    if (typeof i.index == "number" || Ki(!1), i.index >= t)
      break;
    n = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: t + 1 - n
  };
}
function Is(e) {
  return Xi(
    e.source,
    ur(e.source, e.start)
  );
}
function Xi(e, t) {
  const n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, o = t.line === 1 ? n : 0, u = t.column + o, l = `${e.name}:${s}:${u}
`, c = r.split(/\r\n|[\n\r]/g), p = c[i];
  if (p.length > 120) {
    const d = Math.floor(u / 80), y = u % 80, h = [];
    for (let g = 0; g < p.length; g += 80)
      h.push(p.slice(g, g + 80));
    return l + li([
      [`${s} |`, h[0]],
      ...h.slice(1, d + 1).map((g) => ["|", g]),
      ["|", "^".padStart(y)],
      ["|", h[d + 1]]
    ]);
  }
  return l + li([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, c[i - 1]],
    [`${s} |`, p],
    ["|", "^".padStart(u)],
    [`${s + 1} |`, c[i + 1]]
  ]);
}
function li(e) {
  const t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function Os(e) {
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
let M = class Zi extends Error {
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
    const { nodes: s, source: o, positions: u, path: l, originalError: c, extensions: p } = Os(n);
    super(t), this.name = "GraphQLError", this.path = l ?? void 0, this.originalError = c ?? void 0, this.nodes = ci(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const d = ci(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((h) => h.loc).filter((h) => h != null)
    );
    this.source = o ?? (d == null || (i = d[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? (d == null ? void 0 : d.map((h) => h.start)), this.locations = u && o ? u.map((h) => ur(o, h)) : d == null ? void 0 : d.map((h) => ur(h.source, h.start));
    const y = Xt(
      c == null ? void 0 : c.extensions
    ) ? c == null ? void 0 : c.extensions : void 0;
    this.extensions = (a = p ?? y) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Zi) : Object.defineProperty(this, "stack", {
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

` + Is(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + Xi(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
};
function ci(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const ea = {
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
}, Es = new Set(Object.keys(ea));
function fi(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && Es.has(t);
}
var di;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(di || (di = {}));
var Re;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(Re || (Re = {}));
var G;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(G || (G = {}));
function pi(e) {
  return e === 9 || e === 32;
}
function Ps(e) {
  return e >= 48 && e <= 57;
}
function ta(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function As(e) {
  return ta(e) || e === 95;
}
function Ns(e) {
  return ta(e) || Ps(e) || e === 95;
}
function ks(e, t) {
  const n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((y) => y.length === 0 || pi(y.charCodeAt(0))), s = n.endsWith('\\"""'), o = e.endsWith('"') && !s, u = e.endsWith("\\"), l = o || u, c = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || l || a || s);
  let p = "";
  const d = i && pi(e.charCodeAt(0));
  return (c && !d || a) && (p += `
`), p += n, (c || l) && (p += `
`), '"""' + p + '"""';
}
const Ts = 10, na = 2;
function z(e) {
  return Fn(e, []);
}
function Fn(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return _s(e, t);
    default:
      return String(e);
  }
}
function _s(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (xs(e)) {
    const r = e.toJSON();
    if (r !== e)
      return typeof r == "string" ? r : Fn(r, n);
  } else if (Array.isArray(e))
    return Cs(e, n);
  return js(e, n);
}
function xs(e) {
  return typeof e.toJSON == "function";
}
function js(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > na ? "[" + Rs(e) + "]" : "{ " + n.map(
    ([i, a]) => i + ": " + Fn(a, t)
  ).join(", ") + " }";
}
function Cs(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > na)
    return "[Array]";
  const n = Math.min(Ts, e.length), r = e.length - n, i = [];
  for (let a = 0; a < n; ++a)
    i.push(Fn(e[a], t));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function Rs(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const st = (
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
        const s = z(t);
        throw new Error(`Cannot use ${i} "${s}" from another module or realm.

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
), Fs = 5;
function Ds(e, t) {
  const [n, r] = t ? [e, t] : [void 0, e];
  let i = " Did you mean ";
  n && (i += n + " ");
  const a = r.map((u) => `"${u}"`);
  switch (a.length) {
    case 0:
      return "";
    case 1:
      return i + a[0] + "?";
    case 2:
      return i + a[0] + " or " + a[1] + "?";
  }
  const s = a.slice(0, Fs), o = s.pop();
  return i + s.join(", ") + ", or " + o + "?";
}
function hi(e) {
  return e;
}
function Tr(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    n[t(r)] = r;
  return n;
}
function _r(e, t, n) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of e)
    r[t(i)] = n(i);
  return r;
}
function Dn(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of Object.keys(e))
    n[r] = t(e[r], r);
  return n;
}
function Vs(e, t) {
  let n = 0, r = 0;
  for (; n < e.length && r < t.length; ) {
    let i = e.charCodeAt(n), a = t.charCodeAt(r);
    if (mn(i) && mn(a)) {
      let s = 0;
      do
        ++n, s = s * 10 + i - lr, i = e.charCodeAt(n);
      while (mn(i) && s > 0);
      let o = 0;
      do
        ++r, o = o * 10 + a - lr, a = t.charCodeAt(r);
      while (mn(a) && o > 0);
      if (s < o)
        return -1;
      if (s > o)
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
const lr = 48, Ms = 57;
function mn(e) {
  return !isNaN(e) && lr <= e && e <= Ms;
}
function $s(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = new Us(e), i = Math.floor(e.length * 0.4) + 1;
  for (const a of t) {
    const s = r.measure(a, i);
    s !== void 0 && (n[a] = s);
  }
  return Object.keys(n).sort((a, s) => {
    const o = n[a] - n[s];
    return o !== 0 ? o : Vs(a, s);
  });
}
class Us {
  constructor(t) {
    this._input = t, this._inputLowerCase = t.toLowerCase(), this._inputArray = yi(this._inputLowerCase), this._rows = [
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
    let i = yi(r), a = this._inputArray;
    if (i.length < a.length) {
      const c = i;
      i = a, a = c;
    }
    const s = i.length, o = a.length;
    if (s - o > n)
      return;
    const u = this._rows;
    for (let c = 0; c <= o; c++)
      u[0][c] = c;
    for (let c = 1; c <= s; c++) {
      const p = u[(c - 1) % 3], d = u[c % 3];
      let y = d[0] = c;
      for (let h = 1; h <= o; h++) {
        const g = i[c - 1] === a[h - 1] ? 0 : 1;
        let E = Math.min(
          p[h] + 1,
          // delete
          d[h - 1] + 1,
          // insert
          p[h - 1] + g
          // substitute
        );
        if (c > 1 && h > 1 && i[c - 1] === a[h - 2] && i[c - 2] === a[h - 1]) {
          const k = u[(c - 2) % 3][h - 2];
          E = Math.min(E, k + 1);
        }
        E < y && (y = E), d[h] = E;
      }
      if (y > n)
        return;
    }
    const l = u[s % 3][o];
    return l <= n ? l : void 0;
  }
}
function yi(e) {
  const t = e.length, n = new Array(t);
  for (let r = 0; r < t; ++r)
    n[r] = e.charCodeAt(r);
  return n;
}
function Be(e) {
  if (e == null)
    return /* @__PURE__ */ Object.create(null);
  if (Object.getPrototypeOf(e) === null)
    return e;
  const t = /* @__PURE__ */ Object.create(null);
  for (const [n, r] of Object.entries(e))
    t[n] = r;
  return t;
}
function qs(e) {
  return `"${e.replace(Ls, Bs)}"`;
}
const Ls = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Bs(e) {
  return Gs[e.charCodeAt(0)];
}
const Gs = [
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
], Qs = Object.freeze({});
function zs(e, t, n = ea) {
  const r = /* @__PURE__ */ new Map();
  for (const k of Object.values(G))
    r.set(k, Ws(t, k));
  let i, a = Array.isArray(e), s = [e], o = -1, u = [], l = e, c, p;
  const d = [], y = [];
  do {
    o++;
    const k = o === s.length, O = k && u.length !== 0;
    if (k) {
      if (c = y.length === 0 ? void 0 : d[d.length - 1], l = p, p = y.pop(), O)
        if (a) {
          l = l.slice();
          let m = 0;
          for (const [A, S] of u) {
            const W = A - m;
            S === null ? (l.splice(W, 1), m++) : l[W] = S;
          }
        } else {
          l = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(l)
          );
          for (const [m, A] of u)
            l[m] = A;
        }
      o = i.index, s = i.keys, u = i.edits, a = i.inArray, i = i.prev;
    } else if (p) {
      if (c = a ? o : s[o], l = p[c], l == null)
        continue;
      d.push(c);
    }
    let T;
    if (!Array.isArray(l)) {
      var h, g;
      fi(l) || ue(!1, `Invalid AST Node: ${z(l)}.`);
      const m = k ? (h = r.get(l.kind)) === null || h === void 0 ? void 0 : h.leave : (g = r.get(l.kind)) === null || g === void 0 ? void 0 : g.enter;
      if (T = m == null ? void 0 : m.call(t, l, c, p, d, y), T === Qs)
        break;
      if (T === !1) {
        if (!k) {
          d.pop();
          continue;
        }
      } else if (T !== void 0 && (u.push([c, T]), !k))
        if (fi(T))
          l = T;
        else {
          d.pop();
          continue;
        }
    }
    if (T === void 0 && O && u.push([c, l]), k)
      d.pop();
    else {
      var E;
      i = {
        inArray: a,
        index: o,
        keys: s,
        edits: u,
        prev: i
      }, a = Array.isArray(l), s = a ? l : (E = n[l.kind]) !== null && E !== void 0 ? E : [], o = -1, u = [], p && y.push(p), p = l;
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function Ws(e, t) {
  const n = e[t];
  return typeof n == "object" ? n : typeof n == "function" ? {
    enter: n,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function it(e) {
  return zs(e, Ys);
}
const Js = 80, Ys = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => I(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = R("(", I(e.variableDefinitions, ", "), ")"), n = I(
        [
          e.operation,
          I([e.name, t]),
          I(e.directives, " ")
        ],
        " "
      );
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + R(" = ", n) + R(" ", I(r, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => qe(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
      const a = R("", e, ": ") + t;
      let s = a + R("(", I(n, ", "), ")");
      return s.length > Js && (s = a + R(`(
`, On(I(n, `
`)), `
)`)), I([s, I(r, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + R(" ", I(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) => I(
      [
        "...",
        R("on ", e),
        I(t, " "),
        n
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${R("(", I(n, ", "), ")")} on ${t} ${R("", I(r, " "), " ")}` + i
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
    leave: ({ value: e, block: t }) => t ? ks(e) : qs(e)
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
    leave: ({ values: e }) => "[" + I(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + I(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + R("(", I(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: n }) => R("", e, `
`) + I(["schema", I(t, " "), qe(n)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) => R("", e, `
`) + I(["scalar", t, I(n, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => R("", e, `
`) + I(
      [
        "type",
        t,
        R("implements ", I(n, " & ")),
        I(r, " "),
        qe(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => R("", e, `
`) + t + (mi(n) ? R(`(
`, On(I(n, `
`)), `
)`) : R("(", I(n, ", "), ")")) + ": " + r + R(" ", I(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => R("", e, `
`) + I(
      [t + ": " + n, R("= ", r), I(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => R("", e, `
`) + I(
      [
        "interface",
        t,
        R("implements ", I(n, " & ")),
        I(r, " "),
        qe(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: r }) => R("", e, `
`) + I(
      ["union", t, I(n, " "), R("= ", I(r, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: r }) => R("", e, `
`) + I(["enum", t, I(n, " "), qe(r)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) => R("", e, `
`) + I([t, I(n, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: r }) => R("", e, `
`) + I(["input", t, I(n, " "), qe(r)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) => R("", e, `
`) + "directive @" + t + (mi(n) ? R(`(
`, On(I(n, `
`)), `
)`) : R("(", I(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + I(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => I(
      ["extend schema", I(e, " "), qe(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => I(["extend scalar", e, I(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => I(
      [
        "extend type",
        e,
        R("implements ", I(t, " & ")),
        I(n, " "),
        qe(r)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => I(
      [
        "extend interface",
        e,
        R("implements ", I(t, " & ")),
        I(n, " "),
        qe(r)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: n }) => I(
      [
        "extend union",
        e,
        I(t, " "),
        R("= ", I(n, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) => I(["extend enum", e, I(t, " "), qe(n)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) => I(["extend input", e, I(t, " "), qe(n)], " ")
  }
};
function I(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
}
function qe(e) {
  return R(`{
`, On(I(e, `
`)), `
}`);
}
function R(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function On(e) {
  return R("  ", e.replace(/\n/g, `
  `));
}
function mi(e) {
  var t;
  return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function cr(e, t) {
  switch (e.kind) {
    case G.NULL:
      return null;
    case G.INT:
      return parseInt(e.value, 10);
    case G.FLOAT:
      return parseFloat(e.value);
    case G.STRING:
    case G.ENUM:
    case G.BOOLEAN:
      return e.value;
    case G.LIST:
      return e.values.map(
        (n) => cr(n, t)
      );
    case G.OBJECT:
      return _r(
        e.fields,
        (n) => n.name.value,
        (n) => cr(n.value, t)
      );
    case G.VARIABLE:
      return t == null ? void 0 : t[e.name.value];
  }
}
function Ge(e) {
  if (e != null || ue(!1, "Must provide name."), typeof e == "string" || ue(!1, "Expected name to be a string."), e.length === 0)
    throw new M("Expected name to be a non-empty string.");
  for (let t = 1; t < e.length; ++t)
    if (!Ns(e.charCodeAt(t)))
      throw new M(
        `Names must only contain [_a-zA-Z0-9] but "${e}" does not.`
      );
  if (!As(e.charCodeAt(0)))
    throw new M(
      `Names must start with [_a-zA-Z] but "${e}" does not.`
    );
  return e;
}
function Hs(e) {
  if (e === "true" || e === "false" || e === "null")
    throw new M(`Enum values cannot be named: ${e}`);
  return Ge(e);
}
function ra(e) {
  return ia(e) || Ks(e) || Xs(e) || Zs(e) || aa(e) || sa(e) || oa(e) || Xe(e);
}
function ia(e) {
  return st(e, Ft);
}
function Ks(e) {
  return st(e, ro);
}
function Xs(e) {
  return st(e, io);
}
function Zs(e) {
  return st(e, ao);
}
function aa(e) {
  return st(e, oo);
}
function sa(e) {
  return st(e, lo);
}
function oa(e) {
  return st(e, to);
}
function Xe(e) {
  return st(e, Vn);
}
function eo(e) {
  return ia(e) || aa(e);
}
class to {
  constructor(t) {
    ra(t) || ue(!1, `Expected ${z(t)} to be a GraphQL type.`), this.ofType = t;
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
class Vn {
  constructor(t) {
    no(t) || ue(
      !1,
      `Expected ${z(t)} to be a GraphQL nullable type.`
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
function no(e) {
  return ra(e) && !Xe(e);
}
function ua(e) {
  return typeof e == "function" ? e() : e;
}
function la(e) {
  return typeof e == "function" ? e() : e;
}
class Ft {
  constructor(t) {
    var n, r, i, a;
    const s = (n = t.parseValue) !== null && n !== void 0 ? n : hi;
    this.name = Ge(t.name), this.description = t.description, this.specifiedByURL = t.specifiedByURL, this.serialize = (r = t.serialize) !== null && r !== void 0 ? r : hi, this.parseValue = s, this.parseLiteral = (i = t.parseLiteral) !== null && i !== void 0 ? i : (o, u) => s(cr(o, u)), this.extensions = Be(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (a = t.extensionASTNodes) !== null && a !== void 0 ? a : [], t.specifiedByURL == null || typeof t.specifiedByURL == "string" || ue(
      !1,
      `${this.name} must provide "specifiedByURL" as a string, but got: ${z(t.specifiedByURL)}.`
    ), t.serialize == null || typeof t.serialize == "function" || ue(
      !1,
      `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
    ), t.parseLiteral && (typeof t.parseValue == "function" && typeof t.parseLiteral == "function" || ue(
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
class ro {
  constructor(t) {
    var n;
    this.name = Ge(t.name), this.description = t.description, this.isTypeOf = t.isTypeOf, this.extensions = Be(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = () => fa(t), this._interfaces = () => ca(t), t.isTypeOf == null || typeof t.isTypeOf == "function" || ue(
      !1,
      `${this.name} must provide "isTypeOf" as a function, but got: ${z(t.isTypeOf)}.`
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
      fields: pa(this.getFields()),
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
function ca(e) {
  var t;
  const n = ua(
    (t = e.interfaces) !== null && t !== void 0 ? t : []
  );
  return Array.isArray(n) || ue(
    !1,
    `${e.name} interfaces must be an Array or a function which returns an Array.`
  ), n;
}
function fa(e) {
  const t = la(e.fields);
  return Et(t) || ue(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), Dn(t, (n, r) => {
    var i;
    Et(n) || ue(
      !1,
      `${e.name}.${r} field config must be an object.`
    ), n.resolve == null || typeof n.resolve == "function" || ue(
      !1,
      `${e.name}.${r} field resolver must be a function if provided, but got: ${z(n.resolve)}.`
    );
    const a = (i = n.args) !== null && i !== void 0 ? i : {};
    return Et(a) || ue(
      !1,
      `${e.name}.${r} args must be an object with argument names as keys.`
    ), {
      name: Ge(r),
      description: n.description,
      type: n.type,
      args: da(a),
      resolve: n.resolve,
      subscribe: n.subscribe,
      deprecationReason: n.deprecationReason,
      extensions: Be(n.extensions),
      astNode: n.astNode
    };
  });
}
function da(e) {
  return Object.entries(e).map(([t, n]) => ({
    name: Ge(t),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: Be(n.extensions),
    astNode: n.astNode
  }));
}
function Et(e) {
  return Xt(e) && !Array.isArray(e);
}
function pa(e) {
  return Dn(e, (t) => ({
    description: t.description,
    type: t.type,
    args: ha(t.args),
    resolve: t.resolve,
    subscribe: t.subscribe,
    deprecationReason: t.deprecationReason,
    extensions: t.extensions,
    astNode: t.astNode
  }));
}
function ha(e) {
  return _r(
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
class io {
  constructor(t) {
    var n;
    this.name = Ge(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = Be(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = fa.bind(void 0, t), this._interfaces = ca.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || ue(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${z(t.resolveType)}.`
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
      fields: pa(this.getFields()),
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
class ao {
  constructor(t) {
    var n;
    this.name = Ge(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = Be(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._types = so.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || ue(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${z(t.resolveType)}.`
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
function so(e) {
  const t = ua(e.types);
  return Array.isArray(t) || ue(
    !1,
    `Must provide Array of types or a function which returns such an array for Union ${e.name}.`
  ), t;
}
class oo {
  /* <T> */
  constructor(t) {
    var n;
    this.name = Ge(t.name), this.description = t.description, this.extensions = Be(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._values = uo(this.name, t.values), this._valueLookup = new Map(
      this._values.map((r) => [r.value, r])
    ), this._nameLookup = Tr(this._values, (r) => r.name);
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
      throw new M(
        `Enum "${this.name}" cannot represent value: ${z(t)}`
      );
    return n.name;
  }
  parseValue(t) {
    if (typeof t != "string") {
      const r = z(t);
      throw new M(
        `Enum "${this.name}" cannot represent non-string value: ${r}.` + bn(this, r)
      );
    }
    const n = this.getValue(t);
    if (n == null)
      throw new M(
        `Value "${t}" does not exist in "${this.name}" enum.` + bn(this, t)
      );
    return n.value;
  }
  parseLiteral(t, n) {
    if (t.kind !== G.ENUM) {
      const i = it(t);
      throw new M(
        `Enum "${this.name}" cannot represent non-enum value: ${i}.` + bn(this, i),
        {
          nodes: t
        }
      );
    }
    const r = this.getValue(t.value);
    if (r == null) {
      const i = it(t);
      throw new M(
        `Value "${i}" does not exist in "${this.name}" enum.` + bn(this, i),
        {
          nodes: t
        }
      );
    }
    return r.value;
  }
  toConfig() {
    const t = _r(
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
function bn(e, t) {
  const n = e.getValues().map((i) => i.name), r = $s(t, n);
  return Ds("the enum value", r);
}
function uo(e, t) {
  return Et(t) || ue(
    !1,
    `${e} values must be an object with value names as keys.`
  ), Object.entries(t).map(([n, r]) => (Et(r) || ue(
    !1,
    `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${z(r)}.`
  ), {
    name: Hs(n),
    description: r.description,
    value: r.value !== void 0 ? r.value : n,
    deprecationReason: r.deprecationReason,
    extensions: Be(r.extensions),
    astNode: r.astNode
  }));
}
class lo {
  constructor(t) {
    var n;
    this.name = Ge(t.name), this.description = t.description, this.extensions = Be(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = co.bind(void 0, t);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const t = Dn(this.getFields(), (n) => ({
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
function co(e) {
  const t = la(e.fields);
  return Et(t) || ue(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), Dn(t, (n, r) => (!("resolve" in n) || ue(
    !1,
    `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`
  ), {
    name: Ge(r),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: Be(n.extensions),
    astNode: n.astNode
  }));
}
const Kn = 2147483647, Xn = -2147483648, fo = new Ft({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(e) {
    const t = rn(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n))
      throw new M(
        `Int cannot represent non-integer value: ${z(t)}`
      );
    if (n > Kn || n < Xn)
      throw new M(
        "Int cannot represent non 32-bit signed integer value: " + z(t)
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isInteger(e))
      throw new M(
        `Int cannot represent non-integer value: ${z(e)}`
      );
    if (e > Kn || e < Xn)
      throw new M(
        `Int cannot represent non 32-bit signed integer value: ${e}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== G.INT)
      throw new M(
        `Int cannot represent non-integer value: ${it(e)}`,
        {
          nodes: e
        }
      );
    const t = parseInt(e.value, 10);
    if (t > Kn || t < Xn)
      throw new M(
        `Int cannot represent non 32-bit signed integer value: ${e.value}`,
        {
          nodes: e
        }
      );
    return t;
  }
});
new Ft({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(e) {
    const t = rn(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n))
      throw new M(
        `Float cannot represent non numeric value: ${z(t)}`
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isFinite(e))
      throw new M(
        `Float cannot represent non numeric value: ${z(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== G.FLOAT && e.kind !== G.INT)
      throw new M(
        `Float cannot represent non numeric value: ${it(e)}`,
        e
      );
    return parseFloat(e.value);
  }
});
const ya = new Ft({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(e) {
    const t = rn(e);
    if (typeof t == "string")
      return t;
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "number" && Number.isFinite(t))
      return t.toString();
    throw new M(
      `String cannot represent value: ${z(e)}`
    );
  },
  parseValue(e) {
    if (typeof e != "string")
      throw new M(
        `String cannot represent a non string value: ${z(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== G.STRING)
      throw new M(
        `String cannot represent a non string value: ${it(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
}), xr = new Ft({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(e) {
    const t = rn(e);
    if (typeof t == "boolean")
      return t;
    if (Number.isFinite(t))
      return t !== 0;
    throw new M(
      `Boolean cannot represent a non boolean value: ${z(t)}`
    );
  },
  parseValue(e) {
    if (typeof e != "boolean")
      throw new M(
        `Boolean cannot represent a non boolean value: ${z(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== G.BOOLEAN)
      throw new M(
        `Boolean cannot represent a non boolean value: ${it(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
});
new Ft({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(e) {
    const t = rn(e);
    if (typeof t == "string")
      return t;
    if (Number.isInteger(t))
      return String(t);
    throw new M(
      `ID cannot represent value: ${z(e)}`
    );
  },
  parseValue(e) {
    if (typeof e == "string")
      return e;
    if (typeof e == "number" && Number.isInteger(e))
      return e.toString();
    throw new M(`ID cannot represent value: ${z(e)}`);
  },
  parseLiteral(e) {
    if (e.kind !== G.STRING && e.kind !== G.INT)
      throw new M(
        "ID cannot represent a non-string and non-integer value: " + it(e),
        {
          nodes: e
        }
      );
    return e.value;
  }
});
function rn(e) {
  if (Xt(e)) {
    if (typeof e.valueOf == "function") {
      const t = e.valueOf();
      if (!Xt(t))
        return t;
    }
    if (typeof e.toJSON == "function")
      return e.toJSON();
  }
  return e;
}
class an {
  constructor(t) {
    var n, r;
    this.name = Ge(t.name), this.description = t.description, this.locations = t.locations, this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1, this.extensions = Be(t.extensions), this.astNode = t.astNode, Array.isArray(t.locations) || ue(!1, `@${t.name} locations must be an Array.`);
    const i = (r = t.args) !== null && r !== void 0 ? r : {};
    Xt(i) && !Array.isArray(i) || ue(
      !1,
      `@${t.name} args must be an object with argument names as keys.`
    ), this.args = da(i);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: ha(this.args),
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
new an({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    Re.FIELD,
    Re.FRAGMENT_SPREAD,
    Re.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new Vn(xr),
      description: "Included when true."
    }
  }
});
new an({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    Re.FIELD,
    Re.FRAGMENT_SPREAD,
    Re.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new Vn(xr),
      description: "Skipped when true."
    }
  }
});
const po = "No longer supported";
new an({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    Re.FIELD_DEFINITION,
    Re.ARGUMENT_DEFINITION,
    Re.INPUT_FIELD_DEFINITION,
    Re.ENUM_VALUE
  ],
  args: {
    reason: {
      type: ya,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: po
    }
  }
});
new an({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [Re.SCALAR],
  args: {
    url: {
      type: new Vn(ya),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
});
function Qt(e, t, n) {
  if (e) {
    if (e.kind === G.VARIABLE) {
      const r = e.name.value;
      if (n == null || n[r] === void 0)
        return;
      const i = n[r];
      return i === null && Xe(t) ? void 0 : i;
    }
    if (Xe(t))
      return e.kind === G.NULL ? void 0 : Qt(e, t.ofType, n);
    if (e.kind === G.NULL)
      return null;
    if (oa(t)) {
      const r = t.ofType;
      if (e.kind === G.LIST) {
        const a = [];
        for (const s of e.values)
          if (bi(s, n)) {
            if (Xe(r))
              return;
            a.push(null);
          } else {
            const o = Qt(s, r, n);
            if (o === void 0)
              return;
            a.push(o);
          }
        return a;
      }
      const i = Qt(e, r, n);
      return i === void 0 ? void 0 : [i];
    }
    if (sa(t)) {
      if (e.kind !== G.OBJECT)
        return;
      const r = /* @__PURE__ */ Object.create(null), i = Tr(e.fields, (a) => a.name.value);
      for (const a of Object.values(t.getFields())) {
        const s = i[a.name];
        if (!s || bi(s.value, n)) {
          if (a.defaultValue !== void 0)
            r[a.name] = a.defaultValue;
          else if (Xe(a.type))
            return;
          continue;
        }
        const o = Qt(s.value, a.type, n);
        if (o === void 0)
          return;
        r[a.name] = o;
      }
      return r;
    }
    if (eo(t)) {
      let r;
      try {
        r = t.parseLiteral(e, n);
      } catch {
        return;
      }
      return r === void 0 ? void 0 : r;
    }
    Ki(!1, "Unexpected input type: " + z(t));
  }
}
function bi(e, t) {
  return e.kind === G.VARIABLE && (t == null || t[e.name.value] === void 0);
}
function ho(e, t, n) {
  var r;
  const i = {}, a = (r = t.arguments) !== null && r !== void 0 ? r : [], s = Tr(a, (o) => o.name.value);
  for (const o of e.args) {
    const u = o.name, l = o.type, c = s[u];
    if (!c) {
      if (o.defaultValue !== void 0)
        i[u] = o.defaultValue;
      else if (Xe(l))
        throw new M(
          `Argument "${u}" of required type "${z(l)}" was not provided.`,
          {
            nodes: t
          }
        );
      continue;
    }
    const p = c.value;
    let d = p.kind === G.NULL;
    if (p.kind === G.VARIABLE) {
      const h = p.name.value;
      if (n == null || !mo(n, h)) {
        if (o.defaultValue !== void 0)
          i[u] = o.defaultValue;
        else if (Xe(l))
          throw new M(
            `Argument "${u}" of required type "${z(l)}" was provided the variable "$${h}" which was not provided a runtime value.`,
            {
              nodes: p
            }
          );
        continue;
      }
      d = n[h] == null;
    }
    if (d && Xe(l))
      throw new M(
        `Argument "${u}" of non-null type "${z(l)}" must not be null.`,
        {
          nodes: p
        }
      );
    const y = Qt(p, l, n);
    if (y === void 0)
      throw new M(
        `Argument "${u}" has invalid value ${it(p)}.`,
        {
          nodes: p
        }
      );
    i[u] = y;
  }
  return i;
}
function yo(e, t, n) {
  var r;
  const i = (r = t.directives) === null || r === void 0 ? void 0 : r.find(
    (a) => a.name.value === e.name
  );
  if (i)
    return ho(e, i, n);
}
function mo(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
const bo = new an({
  name: "live",
  description: "Instruction for establishing a live connection that is updated once the underlying data changes.",
  locations: [Re.QUERY],
  args: {
    if: {
      type: xr,
      defaultValue: !0,
      description: "Whether the query should be live or not."
    },
    throttle: {
      type: fo,
      description: 'Propose a desired throttle interval ot the server in order to receive updates to at most once per "throttle" milliseconds. The server must not accept this value.'
    }
  }
}), ma = (e) => e == null, go = (e) => {
  var t;
  if (e.kind !== "OperationDefinition" || e.operation !== "query")
    return null;
  const n = (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
  return ma(n) ? null : n;
}, vo = (e, t) => {
  var n;
  const r = yo(bo, { directives: [e] }, t);
  return {
    isLive: (r == null ? void 0 : r.if) === !0,
    throttleValue: (n = r == null ? void 0 : r.throttle) !== null && n !== void 0 ? n : null
  };
}, So = (e, t) => {
  const n = go(e);
  return ma(n) ? !1 : vo(n, t).isLive;
};
function wo(e) {
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
      Io,
      Oo,
      Eo,
      Po,
      Ao
    ];
    for (const s of a)
      if (s(r), r.stopped) {
        r.stopped = !1;
        break;
      }
    if (r.children)
      for (const s of r.children)
        n(s), r.result = (i = r.result) !== null && i !== void 0 ? i : r.left, "result" in s ? r.result[s.name] = s.result : delete r.result[s.name];
  }
  return n(t), t.result;
}
function Io(e) {
  if (!(!e || !e.children) && !e.delta._t) {
    for (let t of e.children)
      Object.prototype.hasOwnProperty.call(e.left, t.name) && t.result === void 0 ? delete e.left[t.name] : e.left[t.name] !== t.result && (e.left[t.name] = t.result);
    e.result = e.left, e.stopped = !0;
  }
}
function Oo(e) {
  if (!e || !e.children || e.delta._t !== "a")
    return;
  let t = e.children.length, n;
  for (let r = 0; r < t; r++)
    n = e.children[r], e.left[n.name] = n.result;
  e.result = e.left, e.stopped = !0;
}
function Eo(e) {
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
function Po(e) {
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
const gi = 3;
let vi = {
  numerically(e, t) {
    return e - t;
  },
  numericallyBy(e) {
    return (t, n) => t[e] - n[e];
  }
};
function Ao(e) {
  if (!e.nested || e.delta._t !== "a")
    return;
  let t, n, r = e.delta, i = e.left, a = [], s = [], o = [];
  for (t in r)
    if (t !== "_t")
      if (t[0] === "_")
        if (r[t][2] === 0 || r[t][2] === gi)
          a.push(parseInt(t.slice(1), 10));
        else
          throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${r[t][2]}`);
      else
        r[t].length === 1 ? s.push({
          index: parseInt(t, 10),
          value: r[t][0]
        }) : o.push({
          index: parseInt(t, 10),
          delta: r[t]
        });
  for (a = a.sort(vi.numerically), t = a.length - 1; t >= 0; t--) {
    n = a[t];
    let c = r[`_${n}`], p = i.splice(n, 1)[0];
    c[2] === gi && s.push({
      index: c[1],
      value: p
    });
  }
  s = s.sort(vi.numericallyBy("index"));
  let u = s.length;
  for (t = 0; t < u; t++) {
    let c = s[t];
    i.splice(c.index, 0, c.value);
  }
  let l = o.length;
  if (l > 0)
    for (t = 0; t < l; t++) {
      let c = o[t];
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
const No = (e, t) => wo({
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
var fr = function(e, t) {
  return fr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  }, fr(e, t);
};
function ko(e, t) {
  fr(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Nt(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function o(c) {
      try {
        l(r.next(c));
      } catch (p) {
        s(p);
      }
    }
    function u(c) {
      try {
        l(r.throw(c));
      } catch (p) {
        s(p);
      }
    }
    function l(c) {
      c.done ? a(c.value) : i(c.value).then(o, u);
    }
    l((r = r.apply(e, t || [])).next());
  });
}
function at(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done)
          return a;
        switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
          case 0:
          case 1:
            a = l;
            break;
          case 4:
            return n.label++, { value: l[1], done: !1 };
          case 5:
            n.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              n = 0;
              continue;
            }
            if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
              n.label = l[1];
              break;
            }
            if (l[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = l;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(l);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        l = t.call(e, n);
      } catch (c) {
        l = [6, c], i = 0;
      } finally {
        r = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Dt(e) {
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
function Zt(e) {
  return this instanceof Zt ? (this.v = e, this) : new Zt(e);
}
function To(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), i, a = [];
  return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(d) {
    r[d] && (i[d] = function(y) {
      return new Promise(function(h, g) {
        a.push([d, y, h, g]) > 1 || o(d, y);
      });
    });
  }
  function o(d, y) {
    try {
      u(r[d](y));
    } catch (h) {
      p(a[0][3], h);
    }
  }
  function u(d) {
    d.value instanceof Zt ? Promise.resolve(d.value.v).then(l, c) : p(a[0][2], d);
  }
  function l(d) {
    o("next", d);
  }
  function c(d) {
    o("throw", d);
  }
  function p(d, y) {
    d(y), a.shift(), a.length && o(a[0][0], a[0][1]);
  }
}
var ba = (
  /** @class */
  function(e) {
    ko(t, e);
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
function dr(e) {
  e != null && typeof e.then == "function" && e.then(Tn, Tn);
}
var Zn = 0, Si = 1, pt = 2, Nn = 3, pr = 4, kn = 1024, Tn = function() {
};
function Pt(e) {
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
function lt(e, t) {
  var n = e.state >= Nn;
  return Promise.resolve(t).then(function(r) {
    return !n && e.state >= pr ? Pt(e).then(function(i) {
      return {
        value: i,
        done: !0
      };
    }) : { value: r, done: n };
  });
}
function jr(e, t) {
  var n, r;
  if (!(e.state >= pt))
    if (e.state = pt, e.onnext(), e.onstop(), e.err == null && (e.err = t), e.pushes.length === 0 && (typeof e.buffer > "u" || e.buffer.empty))
      Jt(e);
    else
      try {
        for (var i = Dt(e.pushes), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          s.resolve();
        }
      } catch (o) {
        n = { error: o };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n)
            throw n.error;
        }
      }
}
function Jt(e) {
  var t, n;
  if (!(e.state >= Nn)) {
    e.state < pt && jr(e), e.state = Nn, e.buffer = void 0;
    try {
      for (var r = Dt(e.nexts), i = r.next(); !i.done; i = r.next()) {
        var a = i.value, s = e.pending === void 0 ? Pt(e) : e.pending.then(function() {
          return Pt(e);
        });
        a.resolve(lt(e, s));
      }
    } catch (o) {
      t = { error: o };
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
function wi(e) {
  e.state >= pr || (e.state < Nn && Jt(e), e.state = pr);
}
function _o(e, t) {
  if (dr(t), e.pushes.length >= kn)
    throw new ba("No more than " + kn + " pending calls to push are allowed on a single repeater.");
  if (e.state >= pt)
    return Promise.resolve(void 0);
  var n = e.pending === void 0 ? Promise.resolve(t) : e.pending.then(function() {
    return t;
  });
  n = n.catch(function(u) {
    e.state < pt && (e.err = u), wi(e);
  });
  var r;
  if (e.nexts.length) {
    var i = e.nexts.shift();
    i.resolve(lt(e, n)), e.nexts.length ? r = Promise.resolve(e.nexts[0].value) : r = new Promise(function(u) {
      return e.onnext = u;
    });
  } else
    typeof e.buffer < "u" && !e.buffer.full ? (e.buffer.add(n), r = Promise.resolve(void 0)) : r = new Promise(function(u) {
      return e.pushes.push({ resolve: u, value: n });
    });
  var a = !0, s = {}, o = r.catch(function(u) {
    if (a)
      throw u;
  });
  return s.then = function(u, l) {
    return a = !1, Promise.prototype.then.call(r, u, l);
  }, s.catch = function(u) {
    return a = !1, Promise.prototype.catch.call(r, u);
  }, s.finally = r.finally.bind(r), e.pending = n.then(function() {
    return o;
  }).catch(function(u) {
    e.err = u, wi(e);
  }), s;
}
function xo(e) {
  var t = jr.bind(null, e), n = new Promise(function(r) {
    return e.onstop = r;
  });
  return t.then = n.then.bind(n), t.catch = n.catch.bind(n), t.finally = n.finally.bind(n), t;
}
function jo(e) {
  if (!(e.state >= Si)) {
    e.state = Si;
    var t = _o.bind(null, e), n = xo(e);
    e.execution = new Promise(function(r) {
      return r(e.executor(t, n));
    }), e.execution.catch(function() {
      return jr(e);
    });
  }
}
var gn = /* @__PURE__ */ new WeakMap(), sn = (
  /** @class */
  function() {
    function e(t, n) {
      gn.set(this, {
        executor: t,
        buffer: n,
        err: void 0,
        state: Zn,
        pushes: [],
        nexts: [],
        pending: void 0,
        execution: void 0,
        onnext: Tn,
        onstop: Tn
      });
    }
    return e.prototype.next = function(t) {
      dr(t);
      var n = gn.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      if (n.nexts.length >= kn)
        throw new ba("No more than " + kn + " pending calls to next are allowed on a single repeater.");
      if (n.state <= Zn && jo(n), n.onnext(t), typeof n.buffer < "u" && !n.buffer.empty) {
        var r = lt(n, n.buffer.remove());
        if (n.pushes.length) {
          var i = n.pushes.shift();
          n.buffer.add(i.value), n.onnext = i.resolve;
        }
        return r;
      } else if (n.pushes.length) {
        var a = n.pushes.shift();
        return n.onnext = a.resolve, lt(n, a.value);
      } else if (n.state >= pt)
        return Jt(n), lt(n, Pt(n));
      return new Promise(function(s) {
        return n.nexts.push({ resolve: s, value: t });
      });
    }, e.prototype.return = function(t) {
      dr(t);
      var n = gn.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      return Jt(n), n.execution = Promise.resolve(n.execution).then(function() {
        return t;
      }), lt(n, Pt(n));
    }, e.prototype.throw = function(t) {
      var n = gn.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      return n.state <= Zn || n.state >= pt || typeof n.buffer < "u" && !n.buffer.empty ? (Jt(n), n.err == null && (n.err = t), lt(n, Pt(n))) : this.next(Promise.reject(t));
    }, e.prototype[Symbol.asyncIterator] = function() {
      return this;
    }, e.race = Co, e.merge = Ro, e.zip = Fo, e.latest = Do, e;
  }()
);
function Mn(e, t) {
  var n, r, i = [], a = function(l) {
    l != null && typeof l[Symbol.asyncIterator] == "function" ? i.push(l[Symbol.asyncIterator]()) : l != null && typeof l[Symbol.iterator] == "function" ? i.push(l[Symbol.iterator]()) : i.push(function() {
      return To(this, arguments, function() {
        return at(this, function(d) {
          switch (d.label) {
            case 0:
              return t.yieldValues ? [4, Zt(l)] : [3, 3];
            case 1:
              return [4, d.sent()];
            case 2:
              d.sent(), d.label = 3;
            case 3:
              return t.returnValues ? [4, Zt(l)] : [3, 5];
            case 4:
              return [2, d.sent()];
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
    for (var s = Dt(e), o = s.next(); !o.done; o = s.next()) {
      var u = o.value;
      a(u);
    }
  } catch (l) {
    n = { error: l };
  } finally {
    try {
      o && !o.done && (r = s.return) && r.call(s);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return i;
}
function Co(e) {
  var t = this, n = Mn(e, { returnValues: !0 });
  return new sn(function(r, i) {
    return Nt(t, void 0, void 0, function() {
      var a, s, o, u, l, c;
      return at(this, function(p) {
        switch (p.label) {
          case 0:
            if (!n.length)
              return i(), [
                2
                /*return*/
              ];
            s = !1, i.then(function() {
              a(), s = !0;
            }), p.label = 1;
          case 1:
            p.trys.push([1, , 5, 7]), u = void 0, l = 0, c = function() {
              var d, y, h, g, E, k;
              return at(this, function(O) {
                switch (O.label) {
                  case 0:
                    d = l;
                    try {
                      for (y = (E = void 0, Dt(n)), h = y.next(); !h.done; h = y.next())
                        g = h.value, Promise.resolve(g.next()).then(function(T) {
                          T.done ? (i(), o === void 0 && (o = T)) : l === d && (l++, a(T));
                        }, function(T) {
                          return i(T);
                        });
                    } catch (T) {
                      E = { error: T };
                    } finally {
                      try {
                        h && !h.done && (k = y.return) && k.call(y);
                      } finally {
                        if (E)
                          throw E.error;
                      }
                    }
                    return [4, new Promise(function(T) {
                      return a = T;
                    })];
                  case 1:
                    return u = O.sent(), u === void 0 ? [3, 3] : [4, r(u.value)];
                  case 2:
                    O.sent(), O.label = 3;
                  case 3:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            }, p.label = 2;
          case 2:
            return s ? [3, 4] : [5, c()];
          case 3:
            return p.sent(), [3, 2];
          case 4:
            return [2, o && o.value];
          case 5:
            return i(), [4, Promise.race(n.map(function(d) {
              return d.return && d.return();
            }))];
          case 6:
            return p.sent(), [
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
function Ro(e) {
  var t = this, n = Mn(e, { yieldValues: !0 });
  return new sn(function(r, i) {
    return Nt(t, void 0, void 0, function() {
      var a, s, o, u = this;
      return at(this, function(l) {
        switch (l.label) {
          case 0:
            if (!n.length)
              return i(), [
                2
                /*return*/
              ];
            a = [], s = !1, i.then(function() {
              var c, p;
              s = !0;
              try {
                for (var d = Dt(a), y = d.next(); !y.done; y = d.next()) {
                  var h = y.value;
                  h();
                }
              } catch (g) {
                c = { error: g };
              } finally {
                try {
                  y && !y.done && (p = d.return) && p.call(d);
                } finally {
                  if (c)
                    throw c.error;
                }
              }
            }), l.label = 1;
          case 1:
            return l.trys.push([1, , 3, 4]), [4, Promise.all(n.map(function(c, p) {
              return Nt(u, void 0, void 0, function() {
                var d, y;
                return at(this, function(h) {
                  switch (h.label) {
                    case 0:
                      h.trys.push([0, , 6, 9]), h.label = 1;
                    case 1:
                      return s ? [3, 5] : (Promise.resolve(c.next()).then(function(g) {
                        return a[p](g);
                      }, function(g) {
                        return i(g);
                      }), [4, new Promise(function(g) {
                        a[p] = g;
                      })]);
                    case 2:
                      return d = h.sent(), d === void 0 ? [3, 4] : d.done ? (o = d, [
                        2
                        /*return*/
                      ]) : [4, r(d.value)];
                    case 3:
                      h.sent(), h.label = 4;
                    case 4:
                      return [3, 1];
                    case 5:
                      return [3, 9];
                    case 6:
                      return y = c.return, y ? [4, c.return()] : [3, 8];
                    case 7:
                      y = h.sent(), h.label = 8;
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
            return l.sent(), [2, o && o.value];
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
function Fo(e) {
  var t = this, n = Mn(e, { returnValues: !0 });
  return new sn(function(r, i) {
    return Nt(t, void 0, void 0, function() {
      var a, s, o, u;
      return at(this, function(l) {
        switch (l.label) {
          case 0:
            if (!n.length)
              return i(), [2, []];
            s = !1, i.then(function() {
              a(), s = !0;
            }), l.label = 1;
          case 1:
            l.trys.push([1, , 6, 8]), l.label = 2;
          case 2:
            return s ? [3, 5] : (Promise.all(n.map(function(c) {
              return c.next();
            })).then(function(c) {
              return a(c);
            }, function(c) {
              return i(c);
            }), [4, new Promise(function(c) {
              return a = c;
            })]);
          case 3:
            return o = l.sent(), o === void 0 ? [
              2
              /*return*/
            ] : (u = o.map(function(c) {
              return c.value;
            }), o.some(function(c) {
              return c.done;
            }) ? [2, u] : [4, r(u)]);
          case 4:
            return l.sent(), [3, 2];
          case 5:
            return [3, 8];
          case 6:
            return i(), [4, Promise.all(n.map(function(c) {
              return c.return && c.return();
            }))];
          case 7:
            return l.sent(), [
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
function Do(e) {
  var t = this, n = Mn(e, {
    yieldValues: !0,
    returnValues: !0
  });
  return new sn(function(r, i) {
    return Nt(t, void 0, void 0, function() {
      var a, s, o, u, l, c = this;
      return at(this, function(p) {
        switch (p.label) {
          case 0:
            if (!n.length)
              return i(), [2, []];
            s = [], o = !1, i.then(function() {
              var d, y;
              a();
              try {
                for (var h = Dt(s), g = h.next(); !g.done; g = h.next()) {
                  var E = g.value;
                  E();
                }
              } catch (k) {
                d = { error: k };
              } finally {
                try {
                  g && !g.done && (y = h.return) && y.call(h);
                } finally {
                  if (d)
                    throw d.error;
                }
              }
              o = !0;
            }), p.label = 1;
          case 1:
            return p.trys.push([1, , 5, 7]), Promise.all(n.map(function(d) {
              return d.next();
            })).then(function(d) {
              return a(d);
            }, function(d) {
              return i(d);
            }), [4, new Promise(function(d) {
              return a = d;
            })];
          case 2:
            return u = p.sent(), u === void 0 ? [
              2
              /*return*/
            ] : (l = u.map(function(d) {
              return d.value;
            }), u.every(function(d) {
              return d.done;
            }) ? [2, l] : [4, r(l.slice())]);
          case 3:
            return p.sent(), [4, Promise.all(n.map(function(d, y) {
              return Nt(c, void 0, void 0, function() {
                var h;
                return at(this, function(g) {
                  switch (g.label) {
                    case 0:
                      if (u[y].done)
                        return [2, u[y].value];
                      g.label = 1;
                    case 1:
                      return o ? [3, 4] : (Promise.resolve(d.next()).then(function(E) {
                        return s[y](E);
                      }, function(E) {
                        return i(E);
                      }), [4, new Promise(function(E) {
                        return s[y] = E;
                      })]);
                    case 2:
                      return h = g.sent(), h === void 0 ? [2, u[y].value] : h.done ? [2, h.value] : (l[y] = h.value, [4, r(l.slice())]);
                    case 3:
                      return g.sent(), [3, 1];
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
            return [2, p.sent()];
          case 5:
            return i(), [4, Promise.all(n.map(function(d) {
              return d.return && d.return();
            }))];
          case 6:
            return p.sent(), [
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
const Vo = (e) => (t) => new sn(async (n, r) => {
  const i = t[Symbol.asyncIterator]();
  r.then(() => {
    var u;
    return (u = i.return) === null || u === void 0 ? void 0 : u.call(i);
  });
  let a = null, s = 0, o;
  for (; (o = await i.next()).done === !1; ) {
    if ("revision" in o.value && o.value.revision) {
      const u = {};
      if (o.value.revision === 1) {
        if (!o.value.data)
          throw new Error("Missing data.");
        u.data = o.value.data, a = o.value.data, s = 1;
      } else {
        if (!a)
          throw new Error("No previousData available.");
        if (!o.value.patch)
          throw new Error("Missing patch.");
        if (s + 1 !== o.value.revision)
          throw new Error("Wrong revision received.");
        a = e(a, o.value.patch), u.data = { ...a }, s++;
      }
      o.value.extensions && (u.extensions = o.value.extensions), o.value.errors && (u.errors = o.value.errors), await n(u);
      continue;
    }
    await n(o.value);
  }
  r();
}), Mo = Vo(No);
function $o(e, t, n) {
  const r = async function* () {
    yield* e;
  }(), i = r.return.bind(r);
  if (t && (r.return = (...a) => (t(), i(...a))), n) {
    const a = r.throw.bind(r);
    r.throw = (s) => (n(s), a(s));
  }
  return r;
}
function Ii() {
  const e = {};
  return e.promise = new Promise((t, n) => {
    e.resolve = t, e.reject = n;
  }), e;
}
function Uo() {
  let e = {
    type: "running"
    /* running */
  }, t = Ii();
  const n = [];
  function r(s) {
    e.type === "running" && (n.push(s), t.resolve(), t = Ii());
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
  }(), a = $o(i, () => {
    e.type === "running" && (e = {
      type: "finished"
      /* finished */
    }, t.resolve());
  }, (s) => {
    e.type === "running" && (e = {
      type: "error",
      error: s
    }, t.resolve());
  });
  return {
    pushValue: r,
    asyncIterableIterator: a
  };
}
const qo = (e) => {
  const { pushValue: t, asyncIterableIterator: n } = Uo(), r = e({
    next: (s) => {
      t(s);
    },
    complete: () => {
      n.return();
    },
    error: (s) => {
      n.throw(s);
    }
  }), i = n.return;
  let a;
  return n.return = () => (a === void 0 && (r(), a = i()), a), n;
};
function Lo(e, t) {
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
var It = {
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
class hr extends Error {
  constructor(t, n, r, i, a, s, o) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), n && (this.nodes = Array.isArray(n) ? n : [n]), r && (this.source = r), i && (this.positions = i), s && (this.originalError = s);
    var u = o;
    if (!u && s) {
      var l = s.extensions;
      l && typeof l == "object" && (u = l);
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
}
var Z, x;
function me(e) {
  return new hr(`Syntax Error: Unexpected token at ${x} in ${e}`);
}
function Fe(e) {
  if (e.lastIndex = x, e.test(Z))
    return Z.slice(x, x = e.lastIndex);
}
var vn = / +(?=[^\s])/y;
function Bo(e) {
  for (var t = e.split(`
`), n = "", r = 0, i = 0, a = t.length - 1, s = 0; s < t.length; s++)
    vn.lastIndex = 0, vn.test(t[s]) && (s && (!r || vn.lastIndex < r) && (r = vn.lastIndex), i = i || s, a = s);
  for (var o = i; o <= a; o++)
    o !== i && (n += `
`), n += t[o].slice(r).replace(/\\"""/g, '"""');
  return n;
}
function j() {
  for (var e = 0 | Z.charCodeAt(x++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | Z.charCodeAt(x++))
    if (e === 35)
      for (; (e = Z.charCodeAt(x++)) !== 10 && e !== 13; )
        ;
  x--;
}
var ga = /[_A-Za-z]\w*/y;
function Je() {
  var e;
  if (e = Fe(ga))
    return {
      kind: "Name",
      value: e
    };
}
var Go = /(?:null|true|false)/y, va = /\$[_A-Za-z]\w*/y, Qo = /-?\d+/y, zo = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Wo = /\\/g, Jo = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Yo = /"(?:"|[^\r\n]*?[^\\]")/y;
function _n(e) {
  var t, n;
  if (n = Fe(Go))
    t = n === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: n === "true"
    };
  else if (!e && (n = Fe(va)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: n.slice(1)
      }
    };
  else if (n = Fe(Qo)) {
    var r = n;
    (n = Fe(zo)) ? t = {
      kind: "FloatValue",
      value: r + n
    } : t = {
      kind: "IntValue",
      value: r
    };
  } else if (n = Fe(ga))
    t = {
      kind: "EnumValue",
      value: n
    };
  else if (n = Fe(Jo))
    t = {
      kind: "StringValue",
      value: Bo(n.slice(3, -3)),
      block: !0
    };
  else if (n = Fe(Yo))
    t = {
      kind: "StringValue",
      value: Wo.test(n) ? JSON.parse(n) : n.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var s;
    if (Z.charCodeAt(x) === 91) {
      x++, j();
      for (var o = []; s = _n(a); )
        o.push(s);
      if (Z.charCodeAt(x++) !== 93)
        throw me("ListValue");
      return j(), {
        kind: "ListValue",
        values: o
      };
    }
  }(e) || function(a) {
    if (Z.charCodeAt(x) === 123) {
      x++, j();
      for (var s = [], o; o = Je(); ) {
        if (j(), Z.charCodeAt(x++) !== 58)
          throw me("ObjectField");
        j();
        var u = _n(a);
        if (!u)
          throw me("ObjectField");
        s.push({
          kind: "ObjectField",
          name: o,
          value: u
        });
      }
      if (Z.charCodeAt(x++) !== 125)
        throw me("ObjectValue");
      return j(), {
        kind: "ObjectValue",
        fields: s
      };
    }
  }(e))
    return t;
  return j(), t;
}
function Sa(e) {
  var t = [];
  if (j(), Z.charCodeAt(x) === 40) {
    x++, j();
    for (var n; n = Je(); ) {
      if (j(), Z.charCodeAt(x++) !== 58)
        throw me("Argument");
      j();
      var r = _n(e);
      if (!r)
        throw me("Argument");
      t.push({
        kind: "Argument",
        name: n,
        value: r
      });
    }
    if (!t.length || Z.charCodeAt(x++) !== 41)
      throw me("Argument");
    j();
  }
  return t;
}
function kt(e) {
  var t = [];
  for (j(); Z.charCodeAt(x) === 64; ) {
    x++;
    var n = Je();
    if (!n)
      throw me("Directive");
    j(), t.push({
      kind: "Directive",
      name: n,
      arguments: Sa(e)
    });
  }
  return t;
}
function Ho() {
  var e = Je();
  if (e) {
    j();
    var t;
    if (Z.charCodeAt(x) === 58) {
      if (x++, j(), t = e, !(e = Je()))
        throw me("Field");
      j();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: Sa(!1),
      directives: kt(!1),
      selectionSet: $n()
    };
  }
}
function wa() {
  var e;
  if (j(), Z.charCodeAt(x) === 91) {
    x++, j();
    var t = wa();
    if (!t || Z.charCodeAt(x++) !== 93)
      throw me("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = Je())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw me("NamedType");
  return j(), Z.charCodeAt(x) === 33 ? (x++, j(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Ko = /on/y;
function Ia() {
  if (Fe(Ko)) {
    j();
    var e = Je();
    if (!e)
      throw me("NamedType");
    return j(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Xo = /\.\.\./y;
function Zo() {
  if (Fe(Xo)) {
    j();
    var e = x, t;
    if ((t = Je()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: kt(!1)
      };
    x = e;
    var n = Ia(), r = kt(!1), i = $n();
    if (!i)
      throw me("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: n,
      directives: r,
      selectionSet: i
    };
  }
}
function $n() {
  var e;
  if (j(), Z.charCodeAt(x) === 123) {
    x++, j();
    for (var t = []; e = Zo() || Ho(); )
      t.push(e);
    if (!t.length || Z.charCodeAt(x++) !== 125)
      throw me("SelectionSet");
    return j(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var eu = /fragment/y;
function tu() {
  if (Fe(eu)) {
    j();
    var e = Je();
    if (!e)
      throw me("FragmentDefinition");
    j();
    var t = Ia();
    if (!t)
      throw me("FragmentDefinition");
    var n = kt(!1), r = $n();
    if (!r)
      throw me("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: n,
      selectionSet: r
    };
  }
}
var nu = /(?:query|mutation|subscription)/y;
function ru() {
  var e, t, n = [], r = [];
  (e = Fe(nu)) && (j(), t = Je(), n = function() {
    var s, o = [];
    if (j(), Z.charCodeAt(x) === 40) {
      for (x++, j(); s = Fe(va); ) {
        if (j(), Z.charCodeAt(x++) !== 58)
          throw me("VariableDefinition");
        var u = wa(), l = void 0;
        if (Z.charCodeAt(x) === 61 && (x++, j(), !(l = _n(!0))))
          throw me("VariableDefinition");
        j(), o.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: s.slice(1)
            }
          },
          type: u,
          defaultValue: l,
          directives: kt(!0)
        });
      }
      if (Z.charCodeAt(x++) !== 41)
        throw me("VariableDefinition");
      j();
    }
    return o;
  }(), r = kt(!1));
  var i = $n();
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
function iu(e, t) {
  return Z = typeof e.body == "string" ? e.body : e, x = 0, function() {
    var r;
    j();
    for (var i = []; r = tu() || ru(); )
      i.push(r);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function au(e) {
  return JSON.stringify(e);
}
function su(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var $e = (e) => !(!e || !e.length), Ae = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !$e(e.variableDefinitions) && !$e(e.directives))
      return Ae.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), $e(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(Ae.VariableDefinition).join(", ") + ")"), $e(e.directives) && (t += " " + e.directives.map(Ae.Directive).join(" ")), t + " " + Ae.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = Ae.Variable(e.variable) + ": " + Ue(e.type);
    return e.defaultValue && (t += " = " + Ue(e.defaultValue)), $e(e.directives) && (t += " " + e.directives.map(Ae.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if ($e(e.arguments)) {
      var n = e.arguments.map(Ae.Argument), r = t + "(" + n.join(", ") + ")";
      t = r.length > 80 ? t + `(
  ` + n.join(`
`).replace(/\n/g, `
  `) + `
)` : r;
    }
    return $e(e.directives) && (t += " " + e.directives.map(Ae.Directive).join(" ")), e.selectionSet ? t + " " + Ae.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? su(e.value) : au(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(Ue).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(Ae.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + Ue(e.value),
  Document: (e) => $e(e.definitions) ? e.definitions.map(Ue).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(Ue).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + Ue(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return $e(e.directives) && (t += " " + e.directives.map(Ae.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), $e(e.directives) && (t += " " + e.directives.map(Ae.Directive).join(" ")), t + " " + Ue(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, $e(e.directives) && (t += " " + e.directives.map(Ae.Directive).join(" ")), t + " " + Ue(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return $e(e.arguments) && (t += "(" + e.arguments.map(Ae.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + Ue(e.type) + "]",
  NonNullType: (e) => Ue(e.type) + "!"
};
function Ue(e) {
  return Ae[e.kind] ? Ae[e.kind](e) : "";
}
var Cr = () => {
}, De = Cr;
function Qe(e) {
  return {
    tag: 0,
    0: e
  };
}
function on(e) {
  return {
    tag: 1,
    0: e
  };
}
var ou = (e) => e;
function Pe(e) {
  return (t) => (n) => {
    var r = De;
    t((i) => {
      i === 0 ? n(0) : i.tag === 0 ? (r = i[0], n(i)) : e(i[0]) ? n(i) : r(0);
    });
  };
}
function At(e) {
  return (t) => (n) => t((r) => {
    r === 0 || r.tag === 0 ? n(r) : n(on(e(r[0])));
  });
}
function en(e) {
  return (t) => (n) => {
    var r = [], i = De, a = !1, s = !1;
    t((o) => {
      s || (o === 0 ? (s = !0, r.length || n(0)) : o.tag === 0 ? i = o[0] : (a = !1, function(l) {
        var c = De;
        l((p) => {
          if (p === 0) {
            if (r.length) {
              var d = r.indexOf(c);
              d > -1 && (r = r.slice()).splice(d, 1), r.length || (s ? n(0) : a || (a = !0, i(0)));
            }
          } else
            p.tag === 0 ? (r.push(c = p[0]), c(0)) : r.length && (n(p), c(0));
        });
      }(e(o[0])), a || (a = !0, i(0))));
    }), n(Qe((o) => {
      if (o === 1) {
        s || (s = !0, i(1));
        for (var u = 0, l = r, c = r.length; u < c; u++)
          l[u](1);
        r.length = 0;
      } else {
        !s && !a ? (a = !0, i(0)) : a = !1;
        for (var p = 0, d = r, y = r.length; p < y; p++)
          d[p](0);
      }
    }));
  };
}
function uu(e) {
  return en(ou)(e);
}
function Tt(e) {
  return uu(fu(e));
}
function Rr(e) {
  return (t) => (n) => {
    var r = !1;
    t((i) => {
      if (!r)
        if (i === 0)
          r = !0, n(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          n(Qe((s) => {
            s === 1 ? (r = !0, a(1), e()) : a(s);
          }));
        } else
          n(i);
    });
  };
}
function _t(e) {
  return (t) => (n) => {
    var r = !1;
    t((i) => {
      if (!r)
        if (i === 0)
          r = !0, n(0);
        else if (i.tag === 0) {
          var a = i[0];
          n(Qe((s) => {
            s === 1 && (r = !0), a(s);
          }));
        } else
          e(i[0]), n(i);
    });
  };
}
function Oi(e) {
  return (t) => (n) => t((r) => {
    r === 0 ? n(0) : r.tag === 0 ? (n(r), e()) : n(r);
  });
}
function tn(e) {
  var t = [], n = De, r = !1;
  return (i) => {
    t.push(i), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var s = 0, o = t, u = t.length; s < u; s++)
          o[s](0);
        t.length = 0;
      } else if (a.tag === 0)
        n = a[0];
      else {
        r = !1;
        for (var l = 0, c = t, p = t.length; l < p; l++)
          c[l](a);
      }
    }), i(Qe((a) => {
      if (a === 1) {
        var s = t.indexOf(i);
        s > -1 && (t = t.slice()).splice(s, 1), t.length || n(1);
      } else
        r || (r = !0, n(0));
    }));
  };
}
function Ei(e) {
  return (t) => (n) => {
    var r = De, i = De, a = !1, s = !1, o = !1, u = !1;
    t((l) => {
      u || (l === 0 ? (u = !0, o || n(0)) : l.tag === 0 ? r = l[0] : (o && (i(1), i = De), a ? a = !1 : (a = !0, r(0)), function(p) {
        o = !0, p((d) => {
          o && (d === 0 ? (o = !1, u ? n(0) : a || (a = !0, r(0))) : d.tag === 0 ? (s = !1, (i = d[0])(0)) : (n(d), s ? s = !1 : i(0)));
        });
      }(e(l[0]))));
    }), n(Qe((l) => {
      l === 1 ? (u || (u = !0, r(1)), o && (o = !1, i(1))) : (!u && !a && (a = !0, r(0)), o && !s && (s = !0, i(0)));
    }));
  };
}
function Oa(e) {
  return (t) => (n) => {
    var r = De, i = !1, a = 0;
    t((s) => {
      i || (s === 0 ? (i = !0, n(0)) : s.tag === 0 ? e <= 0 ? (i = !0, n(0), s[0](1)) : r = s[0] : a++ < e ? (n(s), !i && a >= e && (i = !0, n(0), r(1))) : n(s));
    }), n(Qe((s) => {
      s === 1 && !i ? (i = !0, r(1)) : s === 0 && !i && a < e && r(0);
    }));
  };
}
function Fr(e) {
  return (t) => (n) => {
    var r = De, i = De, a = !1;
    t((s) => {
      a || (s === 0 ? (a = !0, i(1), n(0)) : s.tag === 0 ? (r = s[0], e((o) => {
        o === 0 || (o.tag === 0 ? (i = o[0])(0) : (a = !0, i(1), r(1), n(0)));
      })) : n(s));
    }), n(Qe((s) => {
      s === 1 && !a ? (a = !0, r(1), i(1)) : a || r(0);
    }));
  };
}
function Ea(e, t) {
  return (n) => (r) => {
    var i = De, a = !1;
    n((s) => {
      a || (s === 0 ? (a = !0, r(0)) : s.tag === 0 ? (i = s[0], r(s)) : e(s[0]) ? r(s) : (a = !0, t && r(s), r(0), i(1)));
    });
  };
}
function lu(e) {
  return (t) => e()(t);
}
function Pa(e) {
  return (t) => {
    var n = e[Symbol.asyncIterator](), r = !1, i = !1, a = !1, s;
    t(Qe(async (o) => {
      if (o === 1)
        r = !0, n.return && n.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !r; )
          if ((s = await n.next()).done)
            r = !0, n.return && await n.return(), t(0);
          else
            try {
              a = !1, t(on(s.value));
            } catch (u) {
              if (n.throw)
                (r = !!(await n.throw(u)).done) && t(0);
              else
                throw u;
            }
        i = !1;
      }
    }));
  };
}
function cu(e) {
  return e[Symbol.asyncIterator] ? Pa(e) : (t) => {
    var n = e[Symbol.iterator](), r = !1, i = !1, a = !1, s;
    t(Qe((o) => {
      if (o === 1)
        r = !0, n.return && n.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !r; )
          if ((s = n.next()).done)
            r = !0, n.return && n.return(), t(0);
          else
            try {
              a = !1, t(on(s.value));
            } catch (u) {
              if (n.throw)
                (r = !!n.throw(u).done) && t(0);
              else
                throw u;
            }
        i = !1;
      }
    }));
  };
}
var fu = cu;
function Yt(e) {
  return (t) => {
    var n = !1;
    t(Qe((r) => {
      r === 1 ? n = !0 : n || (n = !0, t(on(e)), t(0));
    }));
  };
}
function Dr(e) {
  return (t) => {
    var n = !1, r = e({
      next(i) {
        n || t(on(i));
      },
      complete() {
        n || (n = !0, t(0));
      }
    });
    t(Qe((i) => {
      i === 1 && !n && (n = !0, r());
    }));
  };
}
function Pi() {
  var e, t;
  return {
    source: tn(Dr((n) => (e = n.next, t = n.complete, Cr))),
    next(n) {
      e && e(n);
    },
    complete() {
      t && t();
    }
  };
}
function Ai(e) {
  return Dr((t) => (e.then((n) => {
    Promise.resolve(n).then(() => {
      t.next(n), t.complete();
    });
  }), Cr));
}
function ht(e) {
  return (t) => {
    var n = De, r = !1;
    return t((i) => {
      i === 0 ? r = !0 : i.tag === 0 ? (n = i[0])(0) : r || (e(i[0]), n(0));
    }), {
      unsubscribe() {
        r || (r = !0, n(1));
      }
    };
  };
}
function du(e) {
  ht((t) => {
  })(e);
}
function pu(e) {
  return new Promise((t) => {
    var n = De, r;
    e((i) => {
      i === 0 ? Promise.resolve(r).then(t) : i.tag === 0 ? (n = i[0])(0) : (r = i[0], n(0));
    });
  });
}
var hu = (...e) => {
  for (var t = e[0], n = 1, r = e.length; n < r; n++)
    t = e[n](t);
  return t;
}, yu = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new hr(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new hr(e);
class un extends Error {
  constructor(t) {
    var n = (t.graphQLErrors || []).map(yu), r = ((i, a) => {
      var s = "";
      if (i)
        return `[Network] ${i.message}`;
      if (a)
        for (var o of a)
          s && (s += `
`), s += `[GraphQL] ${o.message}`;
      return s;
    })(t.networkError, n);
    super(r), this.name = "CombinedError", this.message = r, this.graphQLErrors = n, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var yr = (e, t) => {
  for (var n = 0 | (t || 5381), r = 0, i = 0 | e.length; r < i; r++)
    n = (n << 5) + n + e.charCodeAt(r);
  return n;
}, dt = /* @__PURE__ */ new Set(), Ni = /* @__PURE__ */ new WeakMap(), St = (e) => {
  if (e === null || dt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return St(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var n of e)
      t.length > 1 && (t += ","), t += St(n) || "null";
    return t += "]";
  } else if (jn !== xt && e instanceof jn || Cn !== xt && e instanceof Cn)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var i = Ni.get(e) || Math.random().toString(36).slice(2);
    return Ni.set(e, i), St({
      __key: i
    });
  }
  dt.add(e);
  var a = "{";
  for (var s of r) {
    var o = St(e[s]);
    o && (a.length > 1 && (a += ","), a += St(s) + ":" + o);
  }
  return dt.delete(e), a += "}";
}, mr = (e, t, n) => {
  if (!(n == null || typeof n != "object" || n.toJSON || dt.has(n)))
    if (Array.isArray(n))
      for (var r = 0, i = n.length; r < i; r++)
        mr(e, `${t}.${r}`, n[r]);
    else if (n instanceof jn || n instanceof Cn)
      e.set(t, n);
    else {
      dt.add(n);
      for (var a of Object.keys(n))
        mr(e, `${t}.${a}`, n[a]);
    }
}, xn = (e) => (dt.clear(), St(e));
class xt {
}
var jn = typeof File < "u" ? File : xt, Cn = typeof Blob < "u" ? Blob : xt, mu = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, bu = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, gu = (e, t) => t % 2 == 0 ? e.replace(bu, `
`) : e, ki = (e) => e.split(mu).map(gu).join("").trim(), Ti = /* @__PURE__ */ new Map(), En = /* @__PURE__ */ new Map(), Vr = (e) => {
  var t;
  return typeof e == "string" ? t = ki(e) : e.loc && En.get(e.__key) === e ? t = e.loc.source.body : (t = Ti.get(e) || ki(Ue(e)), Ti.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, _i = (e) => {
  var t = yr(Vr(e));
  if (e.definitions) {
    var n = Na(e);
    n && (t = yr(`
# ${n}`, t));
  }
  return t;
}, Aa = (e) => {
  var t, n;
  return typeof e == "string" ? (t = _i(e), n = En.get(t) || iu(e)) : (t = e.__key || _i(e), n = En.get(t) || e), n.loc || Vr(n), n.__key = t, En.set(t, n), n;
}, Pn = (e, t, n) => {
  var r = t || {}, i = Aa(e), a = xn(r), s = i.__key;
  return a !== "{}" && (s = yr(a, s)), {
    key: s,
    query: i,
    variables: r,
    extensions: n
  };
}, Na = (e) => {
  for (var t of e.definitions)
    if (t.kind === It.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, vu = (e) => {
  for (var t of e.definitions)
    if (t.kind === It.OPERATION_DEFINITION)
      return t.operation;
}, br = (e, t, n) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var r = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new un({
      graphQLErrors: t.errors,
      response: n
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? r : t.hasNext,
    stale: !1
  };
}, gr = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var n of Object.keys(t))
      e[n] = gr(e[n], t[n]);
    return e;
  }
  return t;
}, vr = (e, t, n) => {
  var r = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, s = t.incremental;
  "path" in t && (s = [t]);
  var o = {
    data: e.data
  };
  if (s)
    for (var u of s) {
      Array.isArray(u.errors) && r.push(...u.errors), u.extensions && (Object.assign(a, u.extensions), i = !0);
      for (var l = "data", c = o, p = 0, d = u.path.length; p < d; l = u.path[p++])
        c = c[l] = Array.isArray(c[l]) ? [...c[l]] : {
          ...c[l]
        };
      if (u.items)
        for (var y = +l >= 0 ? l : 0, h = 0, g = u.items.length; h < g; h++)
          c[y + h] = gr(c[y + h], u.items[h]);
      else
        u.data !== void 0 && (c[l] = gr(c[l], u.data));
    }
  else
    o.data = t.data || e.data, r = t.errors || r;
  return {
    operation: e.operation,
    data: o.data,
    error: r.length ? new un({
      graphQLErrors: r,
      response: n
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, ka = (e, t, n) => ({
  operation: e,
  data: void 0,
  error: new un({
    networkError: t,
    response: n
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function Ta(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Vr(e.query),
    operationName: Na(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var Su = (e, t) => {
  var n = e.kind === "query" && e.context.preferGetMethod;
  if (!n || !t)
    return e.context.url;
  var r = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && r.searchParams.set(i, typeof a == "object" ? xn(a) : a);
  }
  var s = r.toString();
  return s.length > 2047 && n !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s;
}, wu = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var n = xn(t), r = ((o) => {
      var u = /* @__PURE__ */ new Map();
      return (jn !== xt || Cn !== xt) && (dt.clear(), mr(u, "variables", o)), u;
    })(t.variables);
    if (r.size) {
      var i = new FormData();
      i.append("operations", n), i.append("map", xn({
        ...[...r.keys()].map((o) => [o])
      }));
      var a = 0;
      for (var s of r.values())
        i.append("" + a++, s);
      return i;
    }
    return n;
  }
}, Iu = (e, t) => {
  var n = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, r = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (r.headers)
    for (var i in r.headers)
      n[i.toLowerCase()] = r.headers[i];
  var a = wu(e, t);
  return typeof a == "string" && !n["content-type"] && (n["content-type"] = "application/json"), {
    ...r,
    method: a ? "POST" : "GET",
    body: a,
    headers: n
  };
}, Ou = typeof TextDecoder < "u" ? new TextDecoder() : null, Eu = /boundary="?([^=";]+)"?/i, Pu = /data: ?([^\n]+)/, xi = (e) => e.constructor.name === "Buffer" ? e.toString() : Ou.decode(e);
async function* ji(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield xi(t);
  else {
    var n = e.body.getReader(), r;
    try {
      for (; !(r = await n.read()).done; )
        yield xi(r.value);
    } finally {
      n.cancel();
    }
  }
}
async function* Ci(e, t) {
  var n = "", r;
  for await (var i of e)
    for (n += i; (r = n.indexOf(t)) > -1; )
      yield n.slice(0, r), n = n.slice(r + t.length);
}
async function* Au(e, t, n) {
  var r = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var s = (a = await (e.context.fetch || fetch)(t, n)).headers.get("Content-Type") || "", o;
    if (/multipart\/mixed/i.test(s))
      o = async function* (c, p) {
        var d = c.match(Eu), y = "--" + (d ? d[1] : "-"), h = !0, g;
        for await (var E of Ci(ji(p), `\r
` + y)) {
          if (h) {
            h = !1;
            var k = E.indexOf(y);
            if (k > -1)
              E = E.slice(k + y.length);
            else
              continue;
          }
          try {
            yield g = JSON.parse(E.slice(E.indexOf(`\r
\r
`) + 4));
          } catch (O) {
            if (!g)
              throw O;
          }
          if (g && g.hasNext === !1)
            break;
        }
        g && g.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(s, a);
    else if (/text\/event-stream/i.test(s))
      o = async function* (c) {
        var p;
        for await (var d of Ci(ji(c), `

`)) {
          var y = d.match(Pu);
          if (y) {
            var h = y[1];
            try {
              yield p = JSON.parse(h);
            } catch (g) {
              if (!p)
                throw g;
            }
            if (p && p.hasNext === !1)
              break;
          }
        }
        p && p.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(a);
    else if (!/text\//i.test(s))
      o = async function* (c) {
        yield JSON.parse(await c.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var u of o)
      i = i ? vr(i, u, a) : br(e, u, a), r = !1, yield i, r = !0;
    i || (yield i = br(e, {}, a));
  } catch (l) {
    if (!r)
      throw l;
    yield ka(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : l, a);
  }
}
function Nu(e, t, n) {
  var r;
  return typeof AbortController < "u" && (n.signal = (r = new AbortController()).signal), Rr(() => {
    r && r.abort();
  })(Pe((i) => !!i)(Pa(Au(e, t, n))));
}
var Sr = (e, t) => {
  if (Array.isArray(e))
    for (var n of e)
      Sr(n, t);
  else if (typeof e == "object" && e !== null)
    for (var r in e)
      r === "__typename" && typeof e[r] == "string" ? t.add(e[r]) : Sr(e[r], t);
  return t;
}, wr = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var n = [];
    for (var r of e.definitions) {
      var i = wr(r);
      t = t || i !== r, n.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: n
      };
  } else if ("selectionSet" in e) {
    var a = [], s = e.kind === It.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var o of e.selectionSet.selections || []) {
        s = s || o.kind === It.FIELD && o.name.value === "__typename" && !o.alias;
        var u = wr(o);
        t = t || u !== o, a.push(u);
      }
      if (s || (t = !0, a.push({
        kind: It.FIELD,
        name: {
          kind: It.NAME,
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
}, Ri = /* @__PURE__ */ new Map(), ku = (e) => {
  var t = Aa(e), n = Ri.get(t.__key);
  return n || (Ri.set(t.__key, n = wr(t)), Object.defineProperty(n, "__key", {
    value: t.__key,
    enumerable: !1
  })), n;
}, Ir = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => Ir(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var n = {};
    for (var r in e)
      r === "__typename" ? Object.defineProperty(n, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : n[r] = Ir(e[r]);
    return n;
  } else
    return e;
};
function Fi(e) {
  var t = (n) => e(n);
  return t.toPromise = () => pu(Oa(1)(Pe((n) => !n.stale && !n.hasNext)(t))), t.then = (n, r) => t.toPromise().then(n, r), t.subscribe = (n) => ht(n)(t), t;
}
function jt(e, t, n) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...n
    } : n || t.context
  };
}
var Di = (e, t) => jt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), Tu = () => {
}, er = ({ kind: e }) => e !== "mutation" && e !== "query", _u = ({ forward: e, client: t, dispatchDebug: n }) => {
  var r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (o) => {
    var u = jt(o.kind, o);
    return u.query = ku(o.query), u;
  }, s = (o) => o.kind === "query" && o.context.requestPolicy !== "network-only" && (o.context.requestPolicy === "cache-only" || r.has(o.key));
  return (o) => {
    var u = At((c) => {
      var p = r.get(c.key);
      process.env.NODE_ENV !== "production" && n({
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
      var d = p;
      return process.env.NODE_ENV !== "production" && (d = {
        ...d,
        operation: process.env.NODE_ENV !== "production" ? Di(c, {
          cacheOutcome: p ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (d.stale = !0, Vi(t, c)), d;
    })(Pe((c) => !er(c) && s(c))(o)), l = _t((c) => {
      var { operation: p } = c;
      if (p) {
        var d = p.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (d = ((S) => [...Sr(S, /* @__PURE__ */ new Set())])(c.data).concat(d)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var y = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && n({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${d}`,
            operation: p,
            data: {
              typenames: d,
              response: c
            },
            source: "cacheExchange"
          });
          for (var h = 0; h < d.length; h++) {
            var g = d[h], E = i.get(g);
            E || i.set(g, E = /* @__PURE__ */ new Set());
            for (var k of E.values())
              y.add(k);
            E.clear();
          }
          for (var O of y.values())
            r.has(O) && (p = r.get(O).operation, r.delete(O), Vi(t, p));
        } else if (p.kind === "query" && c.data) {
          r.set(p.key, c);
          for (var T = 0; T < d.length; T++) {
            var m = d[T], A = i.get(m);
            A || i.set(m, A = /* @__PURE__ */ new Set()), A.add(p.key);
          }
        }
      }
    })(e(Pe((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(At((c) => process.env.NODE_ENV !== "production" ? Di(c, {
      cacheOutcome: "miss"
    }) : c)(Tt([At(a)(Pe((c) => !er(c) && !s(c))(o)), Pe((c) => er(c))(o)])))));
    return Tt([u, l]);
  };
}, Vi = (e, t) => e.reexecuteOperation(jt(t.kind, t, {
  requestPolicy: "network-only"
})), tr = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: n }) => ({ client: r, forward: i }) => {
  var a = n || ((s) => s.kind === "subscription" || !!t && (s.kind === "query" || s.kind === "mutation"));
  return (s) => {
    var o = en((l) => {
      var { key: c } = l, p = Pe((d) => d.kind === "teardown" && d.key === c)(s);
      return Fr(p)(((d) => {
        var y = e(Ta(d), d);
        return Dr(({ next: h, complete: g }) => {
          var E = !1, k, O;
          return Promise.resolve().then(() => {
            E || (k = y.subscribe({
              next(T) {
                h(O = O ? vr(O, T) : br(d, T));
              },
              error(T) {
                h(ka(d, T));
              },
              complete() {
                E || (E = !0, d.kind === "subscription" && r.reexecuteOperation(jt("teardown", d, d.context)), O && O.hasNext && h(vr(O, {
                  hasNext: !1
                })), g());
              }
            }));
          }), () => {
            E = !0, k && k.unsubscribe();
          };
        });
      })(l));
    })(Pe((l) => l.kind !== "teardown" && a(l))(s)), u = i(Pe((l) => l.kind === "teardown" || !a(l))(s));
    return Tt([o, u]);
  };
}, xu = ({ forward: e, dispatchDebug: t }) => (n) => {
  var r = en((a) => {
    var s = Ta(a), o = Su(a, s), u = Iu(a, s);
    process.env.NODE_ENV !== "production" && t({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: a,
      data: {
        url: o,
        fetchOptions: u
      },
      source: "fetchExchange"
    });
    var l = Fr(Pe((c) => c.kind === "teardown" && c.key === a.key)(n))(Nu(a, o, u));
    return process.env.NODE_ENV !== "production" ? _t((c) => {
      var p = c.data ? void 0 : c.error;
      process.env.NODE_ENV !== "production" && t({
        type: p ? "fetchError" : "fetchSuccess",
        message: `A ${p ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: o,
          fetchOptions: u,
          value: p || c
        },
        source: "fetchExchange"
      });
    })(l) : l;
  })(Pe((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(n)), i = e(Pe((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(n));
  return Tt([r, i]);
}, ju = (e) => ({ client: t, forward: n, dispatchDebug: r }) => e.reduceRight((i, a) => {
  var s = !1;
  return a({
    client: t,
    forward(o) {
      if (process.env.NODE_ENV !== "production") {
        if (s)
          throw new Error("forward() must only be called once in each Exchange.");
        s = !0;
      }
      return tn(i(tn(o)));
    },
    dispatchDebug(o) {
      process.env.NODE_ENV !== "production" && r({
        timestamp: Date.now(),
        source: a.name,
        ...o
      });
    }
  });
}, n), _a = ({ onOperation: e, onResult: t, onError: n }) => ({ forward: r }) => (i) => en((a) => {
  n && a.error && n(a.error, a.operation);
  var s = t && t(a) || a;
  return "then" in s ? Ai(s) : Yt(s);
})(r(en((a) => {
  var s = e && e(a) || a;
  return "then" in s ? Ai(s) : Yt(s);
})(i))), Cu = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = _t((n) => {
  if (n.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var r = `No exchange has handled operations of kind "${n.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: r,
      operation: n,
      source: "fallbackExchange"
    }), console.warn(r);
  }
})(t)), Pe((n) => !1)(t)), Mi = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var n = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), s = [], o = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, u = Pi();
  function l(m) {
    (m.kind === "mutation" || m.kind === "teardown" || !a.has(m.key)) && (m.kind === "teardown" ? a.delete(m.key) : m.kind !== "mutation" && a.add(m.key), u.next(m));
  }
  var c = !1;
  function p(m) {
    if (m && l(m), !c) {
      for (c = !0; c && (m = s.shift()); )
        l(m);
      c = !1;
    }
  }
  var d = (m) => {
    var A = Fr(Pe((S) => S.kind === "teardown" && S.key === m.key)(u.source))(Pe((S) => S.operation.kind === m.kind && S.operation.key === m.key && (!S.operation.context._instance || S.operation.context._instance === m.context._instance))(T));
    return m.kind !== "query" ? A = Ea((S) => !!S.hasNext, !0)(A) : A = Ei((S) => {
      var W = Yt(S);
      return S.stale || S.hasNext ? W : Tt([W, At(() => (S.stale = !0, S))(Oa(1)(Pe((et) => et.key === m.key)(u.source)))]);
    })(A), m.kind !== "mutation" ? A = Rr(() => {
      a.delete(m.key), r.delete(m.key), i.delete(m.key), c = !1;
      for (var S = s.length - 1; S >= 0; S--)
        s[S].key === m.key && s.splice(S, 1);
      l(jt("teardown", m, m.context));
    })(_t((S) => {
      if (S.stale) {
        for (var W of s)
          if (W.key === S.operation.key) {
            a.delete(W.key);
            break;
          }
      } else
        S.hasNext || a.delete(m.key);
      r.set(m.key, S);
    })(A)) : A = Oi(() => {
      l(m);
    })(A), t.maskTypename && (A = At((S) => ({
      ...S,
      data: Ir(S.data, !0)
    }))(A)), tn(A);
  }, y = this instanceof e ? this : Object.create(e.prototype), h = Object.assign(y, {
    suspense: !!t.suspense,
    operations$: u.source,
    reexecuteOperation(m) {
      m.kind === "teardown" ? p(m) : (m.kind === "mutation" || i.has(m.key)) && (s.push(m), Promise.resolve().then(p));
    },
    createRequestOperation(m, A, S) {
      S || (S = {});
      var W;
      if (process.env.NODE_ENV !== "production" && m !== "teardown" && (W = vu(A.query)) !== m)
        throw new Error(`Expected operation of type "${m}" but found "${W}"`);
      return jt(m, A, {
        _instance: m === "mutation" ? n = n + 1 | 0 : void 0,
        ...o,
        ...S,
        requestPolicy: S.requestPolicy || o.requestPolicy,
        suspense: S.suspense || S.suspense !== !1 && h.suspense
      });
    },
    executeRequestOperation(m) {
      return m.kind === "mutation" ? Fi(d(m)) : Fi(lu(() => {
        var A = i.get(m.key);
        A || i.set(m.key, A = d(m)), A = Oi(() => {
          p(m);
        })(A);
        var S = r.get(m.key);
        return m.kind === "query" && S && (S.stale || S.hasNext) ? Ei(Yt)(Tt([A, Pe((W) => W === r.get(m.key))(Yt(S))])) : A;
      }));
    },
    executeQuery(m, A) {
      var S = h.createRequestOperation("query", m, A);
      return h.executeRequestOperation(S);
    },
    executeSubscription(m, A) {
      var S = h.createRequestOperation("subscription", m, A);
      return h.executeRequestOperation(S);
    },
    executeMutation(m, A) {
      var S = h.createRequestOperation("mutation", m, A);
      return h.executeRequestOperation(S);
    },
    readQuery(m, A, S) {
      var W = null;
      return ht((et) => {
        W = et;
      })(h.query(m, A, S)).unsubscribe(), W;
    },
    query: (m, A, S) => h.executeQuery(Pn(m, A), S),
    subscription: (m, A, S) => h.executeSubscription(Pn(m, A), S),
    mutation: (m, A, S) => h.executeMutation(Pn(m, A), S)
  }), g = Tu;
  if (process.env.NODE_ENV !== "production") {
    var { next: E, source: k } = Pi();
    h.subscribeToDebugTarget = (m) => ht(m)(k), g = E;
  }
  var O = ju(t.exchanges), T = tn(O({
    client: h,
    dispatchDebug: g,
    forward: Cu({
      dispatchDebug: g
    })
  })(u.source));
  return du(T), h;
};
function xe(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function ut(e) {
  return xe(e) === "object";
}
function Ru(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function $i(e, t) {
  return e.length < 124 ? e : t;
}
const Fu = "graphql-transport-ws";
var _e;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(_e || (_e = {}));
var de;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(de || (de = {}));
function xa(e) {
  if (!ut(e))
    throw new Error(`Message is expected to be an object, but got ${xe(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${xe(e.type)}`);
  switch (e.type) {
    case de.ConnectionInit:
    case de.ConnectionAck:
    case de.Ping:
    case de.Pong: {
      if (e.payload != null && !ut(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case de.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${xe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ut(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${xe(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${xe(e.payload.query)}`);
      if (e.payload.variables != null && !ut(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${xe(e.payload.variables)}`);
      if (e.payload.operationName != null && xe(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${xe(e.payload.operationName)}`);
      if (e.payload.extensions != null && !ut(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${xe(e.payload.extensions)}`);
      break;
    }
    case de.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${xe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ut(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${xe(e.payload)}`);
      break;
    }
    case de.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${xe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Ru(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case de.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${xe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Du(e, t) {
  return xa(typeof e == "string" ? JSON.parse(e, t) : e);
}
function Gt(e, t) {
  return xa(e), JSON.stringify(e, t);
}
function Vu(e) {
  const {
    url: t,
    connectionParams: n,
    lazy: r = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: s = 0,
    disablePong: o,
    connectionAckWaitTimeout: u = 0,
    retryAttempts: l = 5,
    retryWait: c = async function(Y) {
      let B = 1e3;
      for (let F = 0; F < Y; F++)
        B *= 2;
      await new Promise((F) => setTimeout(F, B + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: p = Sn,
    isFatalConnectionProblem: d,
    on: y,
    webSocketImpl: h,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: g = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (Y) => {
        const B = Math.random() * 16 | 0;
        return (Y == "x" ? B : B & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: E,
    jsonMessageReviver: k
  } = e;
  let O;
  if (h) {
    if (!$u(h))
      throw new Error("Invalid WebSocket implementation provided");
    O = h;
  } else
    typeof WebSocket < "u" ? O = WebSocket : typeof global < "u" ? O = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (O = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!O)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const T = O, m = (() => {
    const _ = (() => {
      const B = {};
      return {
        on(F, ee) {
          return B[F] = ee, () => {
            delete B[F];
          };
        },
        emit(F) {
          var ee;
          "id" in F && ((ee = B[F.id]) === null || ee === void 0 || ee.call(B, F));
        }
      };
    })(), Y = {
      connecting: y != null && y.connecting ? [y.connecting] : [],
      opened: y != null && y.opened ? [y.opened] : [],
      connected: y != null && y.connected ? [y.connected] : [],
      ping: y != null && y.ping ? [y.ping] : [],
      pong: y != null && y.pong ? [y.pong] : [],
      message: y != null && y.message ? [_.emit, y.message] : [_.emit],
      closed: y != null && y.closed ? [y.closed] : [],
      error: y != null && y.error ? [y.error] : []
    };
    return {
      onMessage: _.on,
      on(B, F) {
        const ee = Y[B];
        return ee.push(F), () => {
          ee.splice(ee.indexOf(F), 1);
        };
      },
      emit(B, ...F) {
        for (const ee of [...Y[B]])
          ee(...F);
      }
    };
  })();
  function A(_) {
    const Y = [
      // errors are fatal and more critical than close events, throw them first
      m.on("error", (B) => {
        Y.forEach((F) => F()), _(B);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      m.on("closed", (B) => {
        Y.forEach((F) => F()), _(B);
      })
    ];
  }
  let S, W = 0, et, yt = !1, mt = 0, cn = !1;
  async function Ut() {
    clearTimeout(et);
    const [_, Y] = await (S ?? (S = new Promise((ee, ze) => (async () => {
      if (yt) {
        if (await c(mt), !W)
          return S = void 0, ze({ code: 1e3, reason: "All Subscriptions Gone" });
        mt++;
      }
      m.emit("connecting");
      const q = new T(typeof t == "function" ? await t() : t, Fu);
      let He, tt;
      function ot() {
        isFinite(s) && s > 0 && (clearTimeout(tt), tt = setTimeout(() => {
          q.readyState === T.OPEN && (q.send(Gt({ type: de.Ping })), m.emit("ping", !1, void 0));
        }, s));
      }
      A((be) => {
        S = void 0, clearTimeout(He), clearTimeout(tt), ze(be), Sn(be) && be.code === 4499 && (q.close(4499, "Terminated"), q.onerror = null, q.onclose = null);
      }), q.onerror = (be) => m.emit("error", be), q.onclose = (be) => m.emit("closed", be), q.onopen = async () => {
        try {
          m.emit("opened", q);
          const be = typeof n == "function" ? await n() : n;
          if (q.readyState !== T.OPEN)
            return;
          q.send(Gt(be ? {
            type: de.ConnectionInit,
            payload: be
          } : {
            type: de.ConnectionInit
            // payload is completely absent if not provided
          }, E)), isFinite(u) && u > 0 && (He = setTimeout(() => {
            q.close(_e.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, u)), ot();
        } catch (be) {
          m.emit("error", be), q.close(_e.InternalClientError, $i(be instanceof Error ? be.message : new Error(be).message, "Internal client error"));
        }
      };
      let nt = !1;
      q.onmessage = ({ data: be }) => {
        try {
          const ce = Du(be, k);
          if (m.emit("message", ce), ce.type === "ping" || ce.type === "pong") {
            m.emit(ce.type, !0, ce.payload), ce.type === "pong" ? ot() : o || (q.send(Gt(ce.payload ? {
              type: de.Pong,
              payload: ce.payload
            } : {
              type: de.Pong
              // payload is completely absent if not provided
            })), m.emit("pong", !1, ce.payload));
            return;
          }
          if (nt)
            return;
          if (ce.type !== de.ConnectionAck)
            throw new Error(`First message cannot be of type ${ce.type}`);
          clearTimeout(He), nt = !0, m.emit("connected", q, ce.payload), yt = !1, mt = 0, ee([
            q,
            new Promise((fn, bt) => A(bt))
          ]);
        } catch (ce) {
          q.onmessage = null, m.emit("error", ce), q.close(_e.BadResponse, $i(ce instanceof Error ? ce.message : new Error(ce).message, "Bad response"));
        }
      };
    })())));
    _.readyState === T.CLOSING && await Y;
    let B = () => {
    };
    const F = new Promise((ee) => B = ee);
    return [
      _,
      B,
      Promise.race([
        // wait for
        F.then(() => {
          if (!W) {
            const ee = () => _.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? et = setTimeout(() => {
              _.readyState === T.OPEN && ee();
            }, a) : ee();
          }
        }),
        // or
        Y
      ])
    ];
  }
  function Ve(_) {
    if (Sn(_) && (Mu(_.code) || [
      _e.InternalServerError,
      _e.InternalClientError,
      _e.BadRequest,
      _e.BadResponse,
      _e.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      _e.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      _e.SubscriberAlreadyExists,
      _e.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(_.code)))
      throw _;
    if (cn)
      return !1;
    if (Sn(_) && _.code === 1e3)
      return W > 0;
    if (!l || mt >= l || !p(_) || d != null && d(_))
      throw _;
    return yt = !0;
  }
  return r || (async () => {
    for (W++; ; )
      try {
        const [, , _] = await Ut();
        await _;
      } catch (_) {
        try {
          if (!Ve(_))
            return;
        } catch (Y) {
          return i == null ? void 0 : i(Y);
        }
      }
  })(), {
    on: m.on,
    subscribe(_, Y) {
      const B = g(_);
      let F = !1, ee = !1, ze = () => {
        W--, F = !0;
      };
      return (async () => {
        for (W++; ; )
          try {
            const [q, He, tt] = await Ut();
            if (F)
              return He();
            const ot = m.onMessage(B, (nt) => {
              switch (nt.type) {
                case de.Next: {
                  Y.next(nt.payload);
                  return;
                }
                case de.Error: {
                  ee = !0, F = !0, Y.error(nt.payload), ze();
                  return;
                }
                case de.Complete: {
                  F = !0, ze();
                  return;
                }
              }
            });
            q.send(Gt({
              id: B,
              type: de.Subscribe,
              payload: _
            }, E)), ze = () => {
              !F && q.readyState === T.OPEN && q.send(Gt({
                id: B,
                type: de.Complete
              }, E)), W--, F = !0, He();
            }, await tt.finally(ot);
            return;
          } catch (q) {
            if (!Ve(q))
              return;
          }
      })().then(() => {
        ee || Y.complete();
      }).catch((q) => {
        Y.error(q);
      }), () => {
        F || ze();
      };
    },
    async dispose() {
      if (cn = !0, S) {
        const [_] = await S;
        _.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      S && m.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function Sn(e) {
  return ut(e) && "code" in e && "reason" in e;
}
function Mu(e) {
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
function $u(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var wt = null;
typeof WebSocket < "u" ? wt = WebSocket : typeof MozWebSocket < "u" ? wt = MozWebSocket : typeof global < "u" ? wt = global.WebSocket || global.MozWebSocket : typeof window < "u" ? wt = window.WebSocket || window.MozWebSocket : typeof self < "u" && (wt = self.WebSocket || self.MozWebSocket);
const Uu = wt;
function Ce(e) {
  if (typeof e != "object")
    return e;
  var t, n, r = Object.prototype.toString.call(e);
  if (r === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      n = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = Ce(e[t]));
    } else {
      n = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(n, t, {
          value: Ce(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : n[t] = Ce(e[t]);
    }
    return n;
  }
  if (r === "[object Array]") {
    for (t = e.length, n = Array(t); t--; )
      n[t] = Ce(e[t]);
    return n;
  }
  return r === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    n.add(Ce(i));
  }), n) : r === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    n.set(Ce(a), Ce(i));
  }), n) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : r === "[object DataView]" ? new e.constructor(Ce(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var Te;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(Te || (Te = {}));
class qu {
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
    }), this.__gadget.instantiatedFields = Ce(t), this.__gadget.persistedFields = Ce(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((r) => this.__gadget.fieldKeysTracker[r] = !0));
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
  hasChanges(t = Te.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const n = t == Te.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((r) => !wn(n[r], this.__gadget.fields[r]));
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
  changes(t, n = Te.SinceLoaded) {
    const i = (typeof t == "string" ? n : t || n) == Te.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = i[t], s = this.__gadget.fields[t], o = !wn(s, a);
      return o ? { changed: o, current: s, previous: a } : { changed: o };
    } else {
      const a = {};
      for (let s = 0; s < this.__gadget.fieldKeys.length; s++) {
        const o = this.__gadget.fieldKeys[s];
        wn(i[o], this.__gadget.fields[o]) || (a[o] = { current: this.__gadget.fields[o], previous: i[o] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = Te.SinceLoaded) {
    const n = t == Te.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, r = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      wn(n[a], this.__gadget.fields[a]) || (r[a] = this.__gadget.fields[a]);
    }
    return r;
  }
  changed(t, n = Te.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, n).changed : this.hasChanges(t === void 0 ? n : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = Te.SinceLoaded) {
    t == Te.SinceLoaded ? this.__gadget.instantiatedFields = Ce(this.__gadget.fields) : t == Te.SinceLastPersisted && (this.__gadget.persistedFields = Ce(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = Te.SinceLoaded) {
    let n;
    t == Te.SinceLoaded ? n = Object.keys(this.__gadget.instantiatedFields) : n = Object.keys(this.__gadget.persistedFields);
    for (const r of this.__gadget.fieldKeys)
      n.includes(r) || delete this.__gadget.fields[r];
    t == Te.SinceLoaded ? Object.assign(this.__gadget.fields, Ce(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, Ce(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Pr({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const ja = qu;
class Ca extends Error {
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
class Or extends Error {
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
class Un extends Error {
  constructor(t, n) {
    super(t.startsWith("GGT_") ? t : `${n}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
}
class Ui extends Error {
  constructor(t) {
    let n;
    Er(t) ? n = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : n = "GraphQL websocket closed unexpectedly by the server", super(n), Object.defineProperty(this, "code", {
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
class Lu extends Error {
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
class Bu extends Error {
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
class Gu extends Error {
  constructor(t, n, r, i) {
    const a = n.slice(0, 3), s = n.length > 3 ? `, and ${n.length - 3} more error${n.length > 4 ? "s" : ""} need${n.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${r ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: o, message: u }) => `${o} ${u}`).join(", ")}${s}.`), Object.defineProperty(this, "code", {
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
class Ra extends Error {
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
class Fa extends Error {
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
class Qu extends Error {
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
function qi(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const Ct = (e, t) => {
  const n = t.length;
  let r = 0;
  for (; e != null && r < n; )
    e = e[t[r++]];
  return r && r == n ? e : void 0;
}, Er = (e) => (e == null ? void 0 : e.type) == "close", Ye = (e, t) => typeof e != "string" ? "" : qn(e, t), Li = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, qn = (e, t = !0) => {
  let n = "" + e;
  return t ? n = n.replace(/^[a-z\d]*/, (r) => Li(r)) : n = n.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (r) => r.toLowerCase()), n = n.replace(/(?:_|(\/))([a-z\d]*)/gi, (r, i, a, s, o) => (i || (i = ""), "" + i + Li(a))), n;
}, zu = (e) => `${qn(e)}Sort`, Wu = (e) => `${qn(e)}Filter`, Ju = (e, t, n) => new Ra(`More than one record found for ${e}.${t} = ${n}. Please confirm your unique validation is not reporting an error.`), Yu = (e, t) => {
  if (e.fetching)
    return;
  const n = Ct(e.data, t);
  if (n === void 0)
    return new Ca(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (n === null)
    return new Fa(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, Ze = (e, t, n = !1) => {
  var r;
  if (e.error)
    throw e.error instanceof un && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((o) => "[Network] " + o.message).join(`
`)), e.error;
  const i = Ct(e.data, t), a = Ct(i, ["edges"]), s = a ?? i;
  if (i === void 0)
    throw new Ca(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || n && Array.isArray(s) && s.length === 0)
    throw new Fa(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, Ht = (e, t) => {
  var n;
  if (e.error)
    throw e.error instanceof un && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const r = Ct(e.data, t);
  return r ?? null;
}, Mr = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Gu(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Ra(e.message) : new Un(e.message, e.code);
}, ct = (e, t) => {
  const n = Ze(e, t);
  if (!n.success) {
    const r = n.errors && n.errors[0];
    throw r ? Mr(r) : new Un("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return n;
}, Da = (e) => {
  var t, n, r, i;
  if (!((n = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || n === void 0) && n.hydrations)
    return new Ss((i = (r = e.data) === null || r === void 0 ? void 0 : r.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, Kt = (e, t) => {
  const n = Da(e);
  return n && (t = n.apply(t)), new ja(t);
}, $r = (e, t) => {
  const n = Da(e);
  return n && (t = n.apply(t)), t == null ? void 0 : t.map((r) => new ja(r));
}, nn = (e, t) => {
  const n = t.edges.map((r) => r.node);
  return $r(e, n);
}, Pr = (e) => {
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
          t[n] = r === void 0 ? null : Pr(r);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const n of Object.keys(e)) {
          const r = Pr(e[n]);
          r !== void 0 && (t[n] = r);
        }
        return t;
      }
    }
  }
}, nr = "gstk", Bi = (e) => {
  try {
    const t = window[e];
    return t.setItem(nr, nr), t.removeItem(nr), !0;
  } catch {
    return !1;
  }
}, Gi = Object.prototype.toString, Qi = Object.getPrototypeOf, zi = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, zt = (e, t, n) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (n.indexOf(e) > -1 && n.indexOf(t) > -1)
    return !0;
  const r = Gi.call(e), i = Gi.call(t);
  let a, s, o;
  if (n.push(e, t), r != i || (a = zi(e), s = zi(t), a.length != s.length || a.some(function(u) {
    return !zt(e[u], t[u], n);
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
      a = e.entries(), s = t.entries();
      do
        if (o = a.next(), !zt(o.value, s.next().value, n))
          return !1;
      while (!o.done);
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
      for (o = 0; o < e.length; o++)
        if (!(!(o in e) && !(o in t)) && (o in e != o in t || !zt(e[o], t[o], n)))
          return !1;
      return !0;
    case "Object":
      return zt(Qi(e), Qi(t), n);
    default:
      return !1;
  }
}, wn = (e, t) => zt(e, t, []);
class Va extends Error {
}
class Hu {
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
    throw Ze(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Va("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Ze(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Ze(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Ku {
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
const Xu = (e) => {
  const t = [...e.definitions].reverse().find((n) => n.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((r) => r.kind == "Field").name.value;
}, Wi = _a({
  onOperation: (e) => {
    var t, n;
    (t = (n = e.context).operationName) !== null && t !== void 0 || (n.operationName = Xu(e.query) || "unknown");
  }
}), Zu = _a({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, n] = e.context.url.split("?"), r = new URLSearchParams(n);
        r.set("operation", e.context.operationName), e.context.url = `${t}?${r.toString()}`;
      } catch {
      }
  }
});
var Ar;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(Ar || (Ar = {}));
const el = 2, tl = 4800, nl = 1e4, rl = [_e.ConnectionAcknowledgementTimeout, _e.ConnectionInitialisationTimeout], Ji = Symbol.for("gadget/connection"), il = "token", al = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var ge;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(ge || (ge = {}));
class Ma {
  constructor(t) {
    var n, r, i, a, s;
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
      value: ge.Anonymous
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
      value: async (o, u) => {
        let l, c;
        if (u ? (l = u, c = o) : (l = o, c = {}), this.currentTransaction)
          return await l(this.currentTransaction);
        let p = null, d;
        try {
          p = await this.waitForOpenedConnection({
            isFatalConnectionProblem(g) {
              return console.warn("Transport error encountered during transaction processing", g), !0;
            },
            connectionAckWaitTimeout: tl,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const y = new Mi({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              Wi,
              ...this.exchanges.beforeAsync,
              tr({
                forwardSubscription(g) {
                  const E = { ...g, query: g.query || "" };
                  return {
                    subscribe: (k) => ({
                      unsubscribe: p.subscribe(E, k)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          y[Ji] = this, d = new Hu(y, p), this.currentTransaction = d, await d.start();
          const h = await l(d);
          return await d.commit(), h;
        } catch (y) {
          try {
            d != null && d.open && await d.rollback();
          } catch (h) {
            h instanceof Va || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", h);
          }
          throw Er(y) ? new Ui(y) : y;
        } finally {
          await (p == null ? void 0 : p.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (o, u = {}) => {
        var l;
        o = sl(o, (l = this.options.baseRouteURL) !== null && l !== void 0 ? l : this.options.endpoint), this.isGadgetRequest(o) && (u.headers = { ...this.requestHeaders(), ...u.headers }, this.authenticationMode == ge.Custom && await this.options.authenticationMode.custom.processFetch(o, u));
        const c = await this._fetchImplementation(o, u);
        if (this.authenticationMode == ge.BrowserSession) {
          const p = c.headers.get("x-set-authorization"), d = p != null && p.startsWith("Session ") ? p.replace("Session ", "") : null;
          d && this.sessionTokenStore.setItem(this.sessionStorageKey, d);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...o) => {
      const { fetch: u } = await import("./browser-ponyfill-8d058629.js").then((l) => l.b);
      return await u(...o);
    }, this.websocketImplementation = (r = (n = t.websocketImplementation) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.WebSocket) !== null && r !== void 0 ? r : Uu, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${il}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = ge.InternalAuthToken : t.apiKey ? this.authenticationMode = ge.APIKey : t.custom && (this.authenticationMode = ge.Custom), this.options.authenticationMode = t), (n = this.authenticationMode) !== null && n !== void 0 || (this.authenticationMode = ge.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = ge.BrowserSession;
    const n = !t || typeof t == "boolean" ? Wt.Durable : t.storageType;
    let r;
    n == Wt.Durable && Bi("localStorage") ? r = window.localStorage : n == Wt.Session && Bi("sessionStorage") ? r = window.sessionStorage : r = new Ku(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && r.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = r, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let n;
    if (typeof t == "string" ? n = t : typeof t == "object" && "url" in t ? n = t.url : n = String(t), Nr(this.options.endpoint))
      return !!Nr(n);
    const r = new URL(this.options.endpoint).host;
    return n.includes(r);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Wi, Zu];
    typeof window < "u" && t.push(_u), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      tr({
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
      tr({
        isSubscriptionOperation: (r) => r.query.definitions.some((i) => So(i, r.variables)),
        forwardSubscription: (r) => ({
          subscribe: (i) => {
            const a = { ...r, query: r.query || "" };
            return {
              unsubscribe: Lo(Mo(qo((s) => this.getBaseSubscriptionClient().subscribe(a, s))), i)
            };
          }
        })
      }),
      xu,
      ...this.exchanges.afterAll
    );
    const n = new Mi({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return n[Ji] = this, n;
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
    return Vu({
      url: n,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var r, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == ge.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == ge.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == ge.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == ge.Custom && await ((i = (r = this.options.authenticationMode) === null || r === void 0 ? void 0 : r.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (r, i) => {
          var a, s, o, u, l, c;
          if (this.authenticationMode == ge.BrowserSession && (i != null && i.sessionToken)) {
            const p = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (p !== null && typeof p == "object" ? p.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (u = (o = (s = this.subscriptionClientOptions) === null || s === void 0 ? void 0 : s.on) === null || o === void 0 ? void 0 : o.connected) === null || u === void 0 || u.call(o, r, i), (c = (l = t == null ? void 0 : t.on) === null || l === void 0 ? void 0 : l.connected) === null || c === void 0 || c.call(l, r, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const n = {};
    if (this.authenticationMode == ge.InternalAuthToken)
      n.authorization = "Basic " + al("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == ge.APIKey)
      n.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == ge.BrowserSession) {
      const r = this.sessionTokenStore.getItem(this.sessionStorageKey);
      r && (n.authorization = `Session ${r}`);
    }
    return n["x-gadget-environment"] = this.environment, n;
  }
  async waitForOpenedConnection(t) {
    let n = this.newSubscriptionClient(t), r = [], i = t.connectionAttempts || el;
    const a = t.connectionGlobalTimeoutMs || nl, s = () => {
      r.forEach((o) => o()), r = [];
    };
    return await new Promise((o, u) => {
      const l = setTimeout(() => {
        this.disposeClient(n), p(new Lu("Timeout opening websocket connection to Gadget API"));
      }, a), c = (h) => {
        if (Er(h)) {
          if (h.code == Ar.TooManyRequests)
            return s(), p(new Bu(h.reason));
          if (rl.includes(h.code) && i > 0) {
            i -= 1, this.disposeClient(n), n = this.newSubscriptionClient(t), y();
            return;
          }
        }
        clearTimeout(l), u(new Ui(h));
      }, p = (h) => {
        clearTimeout(l), u(h);
      }, d = () => {
        clearTimeout(l), o(n);
      }, y = () => {
        s(), r.push(n.on("connected", d)), r.push(n.on("closed", c)), r.push(n.on("error", p));
      };
      y();
    }).finally(s);
  }
  disposeClient(t) {
    const n = t.dispose();
    n && n.catch((r) => console.error(`Error closing SubscriptionClient: ${r.message}`));
  }
  getBaseSubscriptionClient() {
    return this.baseSubscriptionClient || (this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 })), this.baseSubscriptionClient;
  }
}
Object.defineProperty(Ma, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.14"
});
function sl(e, t) {
  if (typeof e != "string")
    return e;
  if (Nr(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Nr(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class Rt extends Array {
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
    const i = new Rt();
    return i.push(...n), i.modelManager = t, i.pagination = r, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Un("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new Or("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new Or("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: n, last: r, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: r || n
    });
  }
}
const kr = (e) => Object.entries(e).flatMap(([t, n]) => {
  if (typeof n == "boolean")
    return n ? t : !1;
  if (n instanceof qr) {
    let r = "";
    const i = Object.entries(n.args).filter(([a, s]) => s != null).map(([a, s]) => {
      var o;
      return `${a}: ${s instanceof Lr ? `$${(o = s.name) !== null && o !== void 0 ? o : a}` : JSON.stringify(s)}`;
    });
    return i.length > 0 && (r = `(${i.join(", ")})`), n.subselection ? [`${t}${r} {`, ...kr(n.subselection), "}"] : `${t}${r}`;
  } else
    return [`${t} {`, ...kr(n), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Ur = (e) => {
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
    i instanceof qr ? Object.entries(i.args).forEach(([a, s]) => {
      var o;
      s instanceof Lr && (t[(o = s.name) !== null && o !== void 0 ? o : n(a)] = s);
    }) : typeof i == "object" && i !== null && Object.assign(t, Ur(i));
  }), t;
}, ol = (e) => {
  const t = Ur(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([r, i]) => `$${r}: ${i.type}`).join(", ")})`;
};
class qr {
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
class Lr {
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
const Vt = (e, t) => new qr(e, t), Ee = (e) => new Lr(e.type + (e.required ? "!" : ""), e.name, e.value), ul = (e) => {
  var t;
  const n = ol(e), r = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${n}${r} {
${kr(e.fields).join(`
`)}
}`;
}, Mt = (e) => {
  const t = Ur(e.fields);
  return {
    query: ul(e),
    variables: Object.entries(t ?? {}).reduce((n, [r, i]) => (typeof i.value < "u" && (n[r] = i.value), n), {})
  };
}, ln = `
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
`, $t = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, ll = (e) => `
    query InternalFind${Ye(e)}($id: GadgetID!, $select: [String!]) {
      ${$t(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, $a = (e, t) => ({
  search: t != null && t.search ? Ee({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? Ee({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? Ee({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? Ee({ value: Ua(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), cl = (e, t) => {
  const n = Ye(e), r = $a(n, t);
  return Mt({
    type: "query",
    name: `InternalFindFirst${n}`,
    fields: {
      internal: {
        [`list${n}`]: Vt({
          ...r,
          first: Ee({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, fl = (e, t) => {
  const n = Ye(e), r = $a(n, t);
  return Mt({
    type: "query",
    name: `InternalFindMany${n}`,
    fields: {
      internal: {
        [`list${n}`]: Vt({
          ...r,
          after: Ee({ value: t == null ? void 0 : t.after, type: "String" }),
          before: Ee({ value: t == null ? void 0 : t.before, type: "String" }),
          first: Ee({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: Ee({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, dl = (e) => {
  const t = Ye(e);
  return `
    ${ln}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${$t(e)}
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
}, pl = (e, t) => {
  const n = Ye(e), r = Ye(t);
  return `
    ${ln}

    mutation InternalBulkCreate${r}($records: [Internal${n}Input]!) {
      ${$t(e)}
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
}, hl = (e) => {
  const t = Ye(e);
  return `
    ${ln}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${$t(e)}
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
}, yl = (e) => {
  const t = Ye(e);
  return `
    ${ln}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${$t(e)}
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
}, ml = (e) => {
  const t = Ye(e);
  return `
    ${ln}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${$t(e)}
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
class Le {
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
    }), this.capitalizedApiIdentifier = qn(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((r) => r === this.apiIdentifier);
  }
  getRecordFromData(t, n) {
    let r = t;
    if (!this.validateRecord(t))
      throw new Un(`Invalid arguments found in variables. Did you mean to use ${n}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = await this.connection.currentClient.query(ll(this.apiIdentifier), { id: t, select: Ua(n == null ? void 0 : n.select) }).toPromise(), s = (r ? Ze : Ht)(i, ["internal", this.apiIdentifier]);
    return Kt(i, s);
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
    const n = fl(this.apiIdentifier, t), r = await this.connection.currentClient.query(n.query, n.variables).toPromise(), i = Ht(r, ["internal", `list${this.capitalizedApiIdentifier}`]), a = nn(r, i);
    return Rt.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const r = cl(this.apiIdentifier, t), i = await this.connection.currentClient.query(r.query, r.variables).toPromise();
    let a;
    n === !1 ? a = Ht(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = Ze(i, ["internal", `list${this.capitalizedApiIdentifier}`], n);
    const s = nn(i, a);
    return Rt.boot(this, s, { options: t, pageInfo: a.pageInfo })[0];
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
    const n = await this.connection.currentClient.mutation(dl(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), r = ct(n, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return Kt(n, r[this.apiIdentifier]);
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
      throw new Or("Cannot perform bulkCreate without a pluralApiIdentifier");
    const r = Ye(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(pl(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = ct(i, ["internal", `bulkCreate${r}`]);
    return $r(i, a[this.options.pluralApiIdentifier]);
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
    qi(t, "Can't update a record without an ID passed");
    const r = await this.connection.currentClient.mutation(hl(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(n, "update")
    }).toPromise(), i = ct(r, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return Kt(r, i[this.apiIdentifier]);
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
    qi(t, "Can't delete a record without an ID");
    const n = await this.connection.currentClient.mutation(yl(this.apiIdentifier), { id: t }).toPromise();
    ct(n, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const n = await this.connection.currentClient.mutation(ml(this.apiIdentifier), t).toPromise();
    ct(n, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function Ua(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [n, r] of Object.entries(e))
    r && t.push(n);
  return t;
}
const Br = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Gr = (e, t = !1) => {
  const n = { ...e };
  return t && (n.__typename = !0), n;
}, Ln = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, bl = (e, t, n, r, i) => {
  const a = {};
  return typeof t < "u" && (a.id = Ee({ type: "GadgetID!", value: t })), Mt({
    type: "query",
    name: e,
    fields: {
      [e]: Vt(a, Gr((i == null ? void 0 : i.select) || n, !0)),
      ...Br(r)
    },
    directives: Ln(i)
  });
}, gl = (e, t, n, r, i, a) => Qr(e, r, i, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: n
    }
  }
}), Qr = (e, t, n, r) => Mt({
  type: "query",
  name: e,
  fields: {
    [e]: Vt({
      after: Ee({ value: r == null ? void 0 : r.after, type: "String" }),
      first: Ee({ value: r == null ? void 0 : r.first, type: "Int" }),
      before: Ee({ value: r == null ? void 0 : r.before, type: "String" }),
      last: Ee({ value: r == null ? void 0 : r.last, type: "Int" }),
      sort: r != null && r.sort ? Ee({ value: r.sort, type: `[${zu(n)}!]` }) : void 0,
      filter: r != null && r.filter ? Ee({ value: r.filter, type: `[${Wu(n)}!]` }) : void 0,
      search: r != null && r.search ? Ee({ value: r.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Gr((r == null ? void 0 : r.select) || t, !0)
      }
    }),
    ...Br(n)
  },
  directives: Ln(r)
}), qa = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, La = (e) => Object.fromEntries(Object.entries(e).map(([t, n]) => [t, Ee(n)])), vl = (e, t, n, r, i, a, s, o, u) => {
  const l = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: Vt(La(i), {
      success: !0,
      errors: qa,
      [r]: l && !u ? Gr(l, !0) : !1,
      [o ? "results" : "result"]: !!u
    })
  };
  s && (c = {
    [s]: c
  });
  const p = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...Br(n)
    },
    directives: Ln(a)
  };
  return Mt(p);
}, Sl = (e, t, n, r) => {
  let i = {
    [e]: Vt(La(t), {
      success: !0,
      errors: qa,
      result: !0
    })
  };
  return n && (i = {
    [n]: i
  }), Mt({
    type: "mutation",
    name: e,
    fields: i,
    directives: Ln(r)
  });
}, le = async (e, t, n, r, i, a, s = !0) => {
  const o = bl(t, n, r, i, a), u = await e.connection.currentClient.query(o.query, o.variables).toPromise(), c = (s ? Ze : Ht)(u, [t]);
  return Kt(u, c);
}, Bn = async (e, t, n, r, i, a, s) => {
  const o = gl(t, n, r, i, a, s), u = await e.connection.currentClient.query(o.query, o.variables).toPromise(), l = Ze(u, [t]), c = nn(u, l);
  if (c.length > 1)
    throw Ju(a, n, r);
  return c[0];
}, $ = async (e, t, n, r, i, a) => {
  const s = Qr(t, n, r, i), o = await e.connection.currentClient.query(s.query, s.variables).toPromise();
  let u;
  a === !1 ? u = Ht(o, [t]) : u = Ze(o, [t], a);
  const l = nn(o, u);
  return Rt.boot(e, l, { options: i, pageInfo: u.pageInfo });
}, w = async (e, t, n, r, i, a, s, o, u, l) => {
  const c = vl(t, n, r, i, s, o, u, a, l), p = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), d = u ? [u, t] : [t];
  if (a) {
    const y = Ct(p.data, d), h = y[i] && n ? $r(p, y[i]) : void 0;
    if (y.errors) {
      const g = y.errors.map((E) => Mr(E));
      throw new Qu(g, h);
    }
    return h;
  } else {
    const y = ct(p, d);
    return n == null ? void 0 : l ? y.result : Kt(p, y[i]);
  }
}, Yi = async (e, t, n, r) => {
  const i = Sl(t, n, r), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return ct(a, r ? [r, t] : [t]).result;
};
function P(e, t, n = {}) {
  var a;
  if (e.hasAmbiguousIdentifier && Object.keys(n).some((s) => {
    var o;
    return !((o = e.paramOnlyVariables) != null && o.includes(s)) && s !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let r;
  const i = Object.entries(e.variables).find(([s, o]) => s === "id" && o.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in n && typeof n[e.modelApiIdentifier] == "object" && n[e.modelApiIdentifier] !== null || !e.variables[e.modelApiIdentifier])
      r = n;
    else {
      r = {
        [e.modelApiIdentifier]: {}
      };
      for (const [s, o] of Object.entries(n))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? r[s] = o : i && s === i[0] ? r.id = o : r[e.modelApiIdentifier][s] = o;
    }
  else
    r = n;
  return r.id ?? (r.id = t), r;
}
const te = {
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
}, L = "user";
async function wl(e, t) {
  const n = P(
    this.signUp,
    void 0,
    e
  );
  return await w(
    this,
    "signUpUser",
    te,
    L,
    L,
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
async function Il(e, t, n) {
  const r = P(
    this.update,
    e,
    t
  );
  return await w(
    this,
    "updateUser",
    te,
    L,
    L,
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
async function Ol(e, t) {
  return await w(
    this,
    "deleteUser",
    null,
    L,
    L,
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
async function El(e, t) {
  const n = P(
    this.create,
    void 0,
    e
  );
  return await w(
    this,
    "createUser",
    te,
    L,
    L,
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
class Pl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await le(
        this,
        "user",
        n,
        te,
        L,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: L,
        defaultSelection: te
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await le(
          this,
          "user",
          n,
          te,
          L,
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
        defaultSelection: te
      }
    ), this.findMany = Object.assign(
      async (n) => await $(
        this,
        "users",
        te,
        "user",
        n
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: L,
        defaultSelection: te
      }
    ), this.findFirst = Object.assign(
      async (n) => (await $(
        this,
        "users",
        te,
        L,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: L,
        defaultSelection: te
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await $(
          this,
          "users",
          te,
          L,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: L,
        defaultSelection: te
      }
    ), this.findByEmail = Object.assign(
      async (n, r) => await Bn(
        this,
        "users",
        "email",
        n,
        te,
        L,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: L,
        defaultSelection: te
      }
    ), this.signUp = Object.assign(
      wl,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: L,
        modelSelectionField: L,
        isBulk: !1,
        defaultSelection: te,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.signUp,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkSignUpUsers",
          te,
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
        modelApiIdentifier: L,
        modelSelectionField: "users",
        isBulk: !0,
        defaultSelection: te,
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
      Il,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: L,
        modelSelectionField: L,
        isBulk: !1,
        defaultSelection: te,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.update,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkUpdateUsers",
          te,
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
        modelApiIdentifier: L,
        modelSelectionField: "users",
        isBulk: !0,
        defaultSelection: te,
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
      Ol,
      {
        type: "action",
        operationName: "deleteUser",
        namespace: null,
        modelApiIdentifier: L,
        modelSelectionField: L,
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
      async (n, r) => await w(
        this,
        "bulkDeleteUsers",
        null,
        "user",
        "users",
        !0,
        {
          ids: {
            value: n,
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
        modelApiIdentifier: L,
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
      El,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: L,
        modelSelectionField: L,
        isBulk: !1,
        defaultSelection: te,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.create,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkCreateUsers",
          te,
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
        modelApiIdentifier: L,
        modelSelectionField: "users",
        isBulk: !0,
        defaultSelection: te,
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
const je = {
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
}, Ne = "session";
async function Al(e, t) {
  const n = P(
    this.logInViaEmail,
    void 0,
    e
  );
  return await w(
    this,
    "logInViaEmail",
    je,
    Ne,
    Ne,
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
async function Nl(e) {
  return await w(
    this,
    "logOut",
    je,
    Ne,
    Ne,
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
class kl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await le(
        this,
        "session",
        n,
        je,
        Ne,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: Ne,
        defaultSelection: je
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await le(
          this,
          "session",
          n,
          je,
          Ne,
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
        defaultSelection: je
      }
    ), this.findMany = Object.assign(
      async (n) => await $(
        this,
        "sessions",
        je,
        "session",
        n
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: Ne,
        defaultSelection: je
      }
    ), this.findFirst = Object.assign(
      async (n) => (await $(
        this,
        "sessions",
        je,
        Ne,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: Ne,
        defaultSelection: je
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await $(
          this,
          "sessions",
          je,
          Ne,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "sessions",
        modelApiIdentifier: Ne,
        defaultSelection: je
      }
    ), this.logInViaEmail = Object.assign(
      Al,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: Ne,
        modelSelectionField: Ne,
        isBulk: !1,
        defaultSelection: je,
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
      Nl,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: Ne,
        modelSelectionField: Ne,
        isBulk: !1,
        defaultSelection: je,
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
const ve = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  state: !0,
  updatedAt: !0
}, re = "productPairing";
async function Tl(e, t) {
  const n = P(
    this.create,
    void 0,
    e
  );
  return await w(
    this,
    "createProductPairing",
    ve,
    re,
    re,
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
async function _l(e, t, n) {
  const r = P(
    this.update,
    e,
    t
  );
  return await w(
    this,
    "updateProductPairing",
    ve,
    re,
    re,
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
async function xl(e, t) {
  return await w(
    this,
    "deleteProductPairing",
    null,
    re,
    re,
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
class jl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await le(
        this,
        "productPairing",
        n,
        ve,
        re,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: re,
        defaultSelection: ve
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await le(
          this,
          "productPairing",
          n,
          ve,
          re,
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
        defaultSelection: ve
      }
    ), this.findMany = Object.assign(
      async (n) => await $(
        this,
        "productPairings",
        ve,
        "productPairing",
        n
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: re,
        defaultSelection: ve
      }
    ), this.findFirst = Object.assign(
      async (n) => (await $(
        this,
        "productPairings",
        ve,
        re,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: re,
        defaultSelection: ve
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await $(
          this,
          "productPairings",
          ve,
          re,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "productPairings",
        modelApiIdentifier: re,
        defaultSelection: ve
      }
    ), this.create = Object.assign(
      Tl,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: re,
        modelSelectionField: re,
        isBulk: !1,
        defaultSelection: ve,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.create,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkCreateProductPairings",
          ve,
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
        modelApiIdentifier: re,
        modelSelectionField: "productPairings",
        isBulk: !0,
        defaultSelection: ve,
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
      _l,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: re,
        modelSelectionField: re,
        isBulk: !1,
        defaultSelection: ve,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.update,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkUpdateProductPairings",
          ve,
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
        modelApiIdentifier: re,
        modelSelectionField: "productPairings",
        isBulk: !0,
        defaultSelection: ve,
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
      xl,
      {
        type: "action",
        operationName: "deleteProductPairing",
        namespace: null,
        modelApiIdentifier: re,
        modelSelectionField: re,
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
      async (n, r) => await w(
        this,
        "bulkDeleteProductPairings",
        null,
        "productPairing",
        "productPairings",
        !0,
        {
          ids: {
            value: n,
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
        modelApiIdentifier: re,
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
const he = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, H = "unambiguous";
async function Cl(e, t) {
  const n = P(
    this.create,
    void 0,
    e
  );
  return await w(
    this,
    "createUnambiguous",
    he,
    H,
    H,
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
async function Rl(e, t, n) {
  const r = P(
    this.update,
    e,
    t
  );
  return await w(
    this,
    "updateUnambiguous",
    he,
    H,
    H,
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
async function Fl(e, t) {
  return await w(
    this,
    "deleteUnambiguous",
    null,
    H,
    H,
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
class Dl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await le(
        this,
        "unambiguous",
        n,
        he,
        H,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: H,
        defaultSelection: he
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await le(
          this,
          "unambiguous",
          n,
          he,
          H,
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
        defaultSelection: he
      }
    ), this.findMany = Object.assign(
      async (n) => await $(
        this,
        "unambiguouss",
        he,
        "unambiguous",
        n
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: H,
        defaultSelection: he
      }
    ), this.findFirst = Object.assign(
      async (n) => (await $(
        this,
        "unambiguouss",
        he,
        H,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: H,
        defaultSelection: he
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await $(
          this,
          "unambiguouss",
          he,
          H,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: H,
        defaultSelection: he
      }
    ), this.findById = Object.assign(
      async (n, r) => await Bn(
        this,
        "unambiguouss",
        "id",
        n,
        he,
        H,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: H,
        defaultSelection: he
      }
    ), this.create = Object.assign(
      Cl,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: H,
        modelSelectionField: H,
        isBulk: !1,
        defaultSelection: he,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.create,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkCreateUnambiguous",
          he,
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
        modelApiIdentifier: H,
        modelSelectionField: "unambiguous",
        isBulk: !0,
        defaultSelection: he,
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
      Rl,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: H,
        modelSelectionField: H,
        isBulk: !1,
        defaultSelection: he,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.update,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkUpdateUnambiguous",
          he,
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
        modelApiIdentifier: H,
        modelSelectionField: "unambiguous",
        isBulk: !0,
        defaultSelection: he,
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
      Fl,
      {
        type: "action",
        operationName: "deleteUnambiguous",
        namespace: null,
        modelApiIdentifier: H,
        modelSelectionField: H,
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
      async (n, r) => await w(
        this,
        "bulkDeleteUnambiguous",
        null,
        "unambiguous",
        "unambiguous",
        !0,
        {
          ids: {
            value: n,
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
        modelApiIdentifier: H,
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
const Se = {
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
}, ie = "shopifyProduct";
async function Vl(e, t) {
  const n = P(
    this.create,
    void 0,
    e
  );
  return await w(
    this,
    "createShopifyProduct",
    Se,
    ie,
    ie,
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
async function Ml(e, t, n) {
  const r = P(
    this.update,
    e,
    t
  );
  return await w(
    this,
    "updateShopifyProduct",
    Se,
    ie,
    ie,
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
async function $l(e, t) {
  return await w(
    this,
    "deleteShopifyProduct",
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
    t,
    null,
    !1
  );
}
class Ul {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await le(
        this,
        "shopifyProduct",
        n,
        Se,
        ie,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: ie,
        defaultSelection: Se
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await le(
          this,
          "shopifyProduct",
          n,
          Se,
          ie,
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
        defaultSelection: Se
      }
    ), this.findMany = Object.assign(
      async (n) => await $(
        this,
        "shopifyProducts",
        Se,
        "shopifyProduct",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: ie,
        defaultSelection: Se
      }
    ), this.findFirst = Object.assign(
      async (n) => (await $(
        this,
        "shopifyProducts",
        Se,
        ie,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: ie,
        defaultSelection: Se
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await $(
          this,
          "shopifyProducts",
          Se,
          ie,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: ie,
        defaultSelection: Se
      }
    ), this.create = Object.assign(
      Vl,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: ie,
        modelSelectionField: ie,
        isBulk: !1,
        defaultSelection: Se,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.create,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkCreateShopifyProducts",
          Se,
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
        modelApiIdentifier: ie,
        modelSelectionField: "shopifyProducts",
        isBulk: !0,
        defaultSelection: Se,
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
      Ml,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: ie,
        modelSelectionField: ie,
        isBulk: !1,
        defaultSelection: Se,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.update,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkUpdateShopifyProducts",
          Se,
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
        modelApiIdentifier: ie,
        modelSelectionField: "shopifyProducts",
        isBulk: !0,
        defaultSelection: Se,
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
      $l,
      {
        type: "action",
        operationName: "deleteShopifyProduct",
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
      async (n, r) => await w(
        this,
        "bulkDeleteShopifyProducts",
        null,
        "shopifyProduct",
        "shopifyProducts",
        !0,
        {
          ids: {
            value: n,
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
        modelApiIdentifier: ie,
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
const we = {
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
}, ae = "shopifyProductImage";
async function ql(e, t) {
  const n = P(
    this.create,
    void 0,
    e
  );
  return await w(
    this,
    "createShopifyProductImage",
    we,
    ae,
    ae,
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
async function Ll(e, t, n) {
  const r = P(
    this.update,
    e,
    t
  );
  return await w(
    this,
    "updateShopifyProductImage",
    we,
    ae,
    ae,
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
async function Bl(e, t) {
  return await w(
    this,
    "deleteShopifyProductImage",
    null,
    ae,
    ae,
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
class Gl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await le(
        this,
        "shopifyProductImage",
        n,
        we,
        ae,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: ae,
        defaultSelection: we
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await le(
          this,
          "shopifyProductImage",
          n,
          we,
          ae,
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
        defaultSelection: we
      }
    ), this.findMany = Object.assign(
      async (n) => await $(
        this,
        "shopifyProductImages",
        we,
        "shopifyProductImage",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: ae,
        defaultSelection: we
      }
    ), this.findFirst = Object.assign(
      async (n) => (await $(
        this,
        "shopifyProductImages",
        we,
        ae,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: ae,
        defaultSelection: we
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await $(
          this,
          "shopifyProductImages",
          we,
          ae,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: ae,
        defaultSelection: we
      }
    ), this.create = Object.assign(
      ql,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: ae,
        modelSelectionField: ae,
        isBulk: !1,
        defaultSelection: we,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.create,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkCreateShopifyProductImages",
          we,
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
        modelApiIdentifier: ae,
        modelSelectionField: "shopifyProductImages",
        isBulk: !0,
        defaultSelection: we,
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
      Ll,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: ae,
        modelSelectionField: ae,
        isBulk: !1,
        defaultSelection: we,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.update,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkUpdateShopifyProductImages",
          we,
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
        modelApiIdentifier: ae,
        modelSelectionField: "shopifyProductImages",
        isBulk: !0,
        defaultSelection: we,
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
      Bl,
      {
        type: "action",
        operationName: "deleteShopifyProductImage",
        namespace: null,
        modelApiIdentifier: ae,
        modelSelectionField: ae,
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
      async (n, r) => await w(
        this,
        "bulkDeleteShopifyProductImages",
        null,
        "shopifyProductImage",
        "shopifyProductImages",
        !0,
        {
          ids: {
            value: n,
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
        modelApiIdentifier: ae,
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
const Ie = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  name: !0,
  position: !0,
  state: !0,
  updatedAt: !0,
  values: !0
}, se = "shopifyProductOption";
async function Ql(e, t) {
  const n = P(
    this.create,
    void 0,
    e
  );
  return await w(
    this,
    "createShopifyProductOption",
    Ie,
    se,
    se,
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
async function zl(e, t, n) {
  const r = P(
    this.update,
    e,
    t
  );
  return await w(
    this,
    "updateShopifyProductOption",
    Ie,
    se,
    se,
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
async function Wl(e, t) {
  return await w(
    this,
    "deleteShopifyProductOption",
    null,
    se,
    se,
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
class Jl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await le(
        this,
        "shopifyProductOption",
        n,
        Ie,
        se,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: se,
        defaultSelection: Ie
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await le(
          this,
          "shopifyProductOption",
          n,
          Ie,
          se,
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
        defaultSelection: Ie
      }
    ), this.findMany = Object.assign(
      async (n) => await $(
        this,
        "shopifyProductOptions",
        Ie,
        "shopifyProductOption",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: se,
        defaultSelection: Ie
      }
    ), this.findFirst = Object.assign(
      async (n) => (await $(
        this,
        "shopifyProductOptions",
        Ie,
        se,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: se,
        defaultSelection: Ie
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await $(
          this,
          "shopifyProductOptions",
          Ie,
          se,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: se,
        defaultSelection: Ie
      }
    ), this.create = Object.assign(
      Ql,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: se,
        modelSelectionField: se,
        isBulk: !1,
        defaultSelection: Ie,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.create,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkCreateShopifyProductOptions",
          Ie,
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
        modelApiIdentifier: se,
        modelSelectionField: "shopifyProductOptions",
        isBulk: !0,
        defaultSelection: Ie,
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
      zl,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: se,
        modelSelectionField: se,
        isBulk: !1,
        defaultSelection: Ie,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.update,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkUpdateShopifyProductOptions",
          Ie,
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
        modelApiIdentifier: se,
        modelSelectionField: "shopifyProductOptions",
        isBulk: !0,
        defaultSelection: Ie,
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
      Wl,
      {
        type: "action",
        operationName: "deleteShopifyProductOption",
        namespace: null,
        modelApiIdentifier: se,
        modelSelectionField: se,
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
      async (n, r) => await w(
        this,
        "bulkDeleteShopifyProductOptions",
        null,
        "shopifyProductOption",
        "shopifyProductOptions",
        !0,
        {
          ids: {
            value: n,
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
        modelApiIdentifier: se,
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
const Oe = {
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
}, oe = "shopifyProductVariant";
async function Yl(e, t) {
  const n = P(
    this.create,
    void 0,
    e
  );
  return await w(
    this,
    "createShopifyProductVariant",
    Oe,
    oe,
    oe,
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
async function Hl(e, t, n) {
  const r = P(
    this.update,
    e,
    t
  );
  return await w(
    this,
    "updateShopifyProductVariant",
    Oe,
    oe,
    oe,
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
async function Kl(e, t) {
  return await w(
    this,
    "deleteShopifyProductVariant",
    null,
    oe,
    oe,
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
class Xl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await le(
        this,
        "shopifyProductVariant",
        n,
        Oe,
        oe,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: oe,
        defaultSelection: Oe
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await le(
          this,
          "shopifyProductVariant",
          n,
          Oe,
          oe,
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
        defaultSelection: Oe
      }
    ), this.findMany = Object.assign(
      async (n) => await $(
        this,
        "shopifyProductVariants",
        Oe,
        "shopifyProductVariant",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: oe,
        defaultSelection: Oe
      }
    ), this.findFirst = Object.assign(
      async (n) => (await $(
        this,
        "shopifyProductVariants",
        Oe,
        oe,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: oe,
        defaultSelection: Oe
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await $(
          this,
          "shopifyProductVariants",
          Oe,
          oe,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: oe,
        defaultSelection: Oe
      }
    ), this.create = Object.assign(
      Yl,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: oe,
        modelSelectionField: oe,
        isBulk: !1,
        defaultSelection: Oe,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.create,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkCreateShopifyProductVariants",
          Oe,
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
        modelApiIdentifier: oe,
        modelSelectionField: "shopifyProductVariants",
        isBulk: !0,
        defaultSelection: Oe,
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
      Hl,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: oe,
        modelSelectionField: oe,
        isBulk: !1,
        defaultSelection: Oe,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.update,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkUpdateShopifyProductVariants",
          Oe,
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
        modelApiIdentifier: oe,
        modelSelectionField: "shopifyProductVariants",
        isBulk: !0,
        defaultSelection: Oe,
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
      Kl,
      {
        type: "action",
        operationName: "deleteShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: oe,
        modelSelectionField: oe,
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
      async (n, r) => await w(
        this,
        "bulkDeleteShopifyProductVariants",
        null,
        "shopifyProductVariant",
        "shopifyProductVariants",
        !0,
        {
          ids: {
            value: n,
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
        modelApiIdentifier: oe,
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
const J = {
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
}, V = "shopifyShop";
async function Zl(e, t) {
  const n = P(
    this.create,
    void 0,
    e
  );
  return await w(
    this,
    "createShopifyShop",
    J,
    V,
    V,
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
async function ec(e, t, n) {
  const r = P(
    this.update,
    e,
    t
  );
  return await w(
    this,
    "updateShopifyShop",
    J,
    V,
    V,
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
async function tc(e, t) {
  return await w(
    this,
    "deleteShopifyShop",
    null,
    V,
    V,
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
async function nc(e, t, n) {
  const r = P(
    this.uninstall,
    e,
    t
  );
  return await w(
    this,
    "uninstallShopifyShop",
    J,
    V,
    V,
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
async function rc(e, t, n) {
  const r = P(
    this.reinstall,
    e,
    t
  );
  return await w(
    this,
    "reinstallShopifyShop",
    J,
    V,
    V,
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
class ic {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await le(
        this,
        "shopifyShop",
        n,
        J,
        V,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: V,
        defaultSelection: J
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await le(
          this,
          "shopifyShop",
          n,
          J,
          V,
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
        defaultSelection: J
      }
    ), this.findMany = Object.assign(
      async (n) => await $(
        this,
        "shopifyShops",
        J,
        "shopifyShop",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: V,
        defaultSelection: J
      }
    ), this.findFirst = Object.assign(
      async (n) => (await $(
        this,
        "shopifyShops",
        J,
        V,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: V,
        defaultSelection: J
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await $(
          this,
          "shopifyShops",
          J,
          V,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: V,
        defaultSelection: J
      }
    ), this.create = Object.assign(
      Zl,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: V,
        modelSelectionField: V,
        isBulk: !1,
        defaultSelection: J,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.create,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkCreateShopifyShops",
          J,
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
        modelApiIdentifier: V,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: J,
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
      ec,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: V,
        modelSelectionField: V,
        isBulk: !1,
        defaultSelection: J,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.update,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkUpdateShopifyShops",
          J,
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
        modelApiIdentifier: V,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: J,
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
      tc,
      {
        type: "action",
        operationName: "deleteShopifyShop",
        namespace: null,
        modelApiIdentifier: V,
        modelSelectionField: V,
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
      async (n, r) => await w(
        this,
        "bulkDeleteShopifyShops",
        null,
        "shopifyShop",
        "shopifyShops",
        !0,
        {
          ids: {
            value: n,
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
        modelApiIdentifier: V,
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
      nc,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: V,
        modelSelectionField: V,
        isBulk: !1,
        defaultSelection: J,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.uninstall,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkUninstallShopifyShops",
          J,
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
        modelApiIdentifier: V,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: J,
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
      rc,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: V,
        modelSelectionField: V,
        isBulk: !1,
        defaultSelection: J,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.reinstall,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkReinstallShopifyShops",
          J,
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
        modelApiIdentifier: V,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: J,
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
const ne = {
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
}, K = "shopifySync";
async function ac(e, t) {
  const n = P(
    this.run,
    void 0,
    e
  );
  return await w(
    this,
    "runShopifySync",
    ne,
    K,
    K,
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
async function sc(e, t, n) {
  const r = P(
    this.complete,
    e,
    t
  );
  return await w(
    this,
    "completeShopifySync",
    ne,
    K,
    K,
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
async function oc(e, t, n) {
  const r = P(
    this.error,
    e,
    t
  );
  return await w(
    this,
    "errorShopifySync",
    ne,
    K,
    K,
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
class uc {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await le(
        this,
        "shopifySync",
        n,
        ne,
        K,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: K,
        defaultSelection: ne
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await le(
          this,
          "shopifySync",
          n,
          ne,
          K,
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
        defaultSelection: ne
      }
    ), this.findMany = Object.assign(
      async (n) => await $(
        this,
        "shopifySyncs",
        ne,
        "shopifySync",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: K,
        defaultSelection: ne
      }
    ), this.findFirst = Object.assign(
      async (n) => (await $(
        this,
        "shopifySyncs",
        ne,
        K,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: K,
        defaultSelection: ne
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await $(
          this,
          "shopifySyncs",
          ne,
          K,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: K,
        defaultSelection: ne
      }
    ), this.findById = Object.assign(
      async (n, r) => await Bn(
        this,
        "shopifySyncs",
        "id",
        n,
        ne,
        K,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: K,
        defaultSelection: ne
      }
    ), this.run = Object.assign(
      ac,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: K,
        modelSelectionField: K,
        isBulk: !1,
        defaultSelection: ne,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.run,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkRunShopifySyncs",
          ne,
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
        modelApiIdentifier: K,
        modelSelectionField: "shopifySyncs",
        isBulk: !0,
        defaultSelection: ne,
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
      sc,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: K,
        modelSelectionField: K,
        isBulk: !1,
        defaultSelection: ne,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.complete,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkCompleteShopifySyncs",
          ne,
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
        modelApiIdentifier: K,
        modelSelectionField: "shopifySyncs",
        isBulk: !0,
        defaultSelection: ne,
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
      oc,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: K,
        modelSelectionField: K,
        isBulk: !1,
        defaultSelection: ne,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.error,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkErrorShopifySyncs",
          ne,
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
        modelApiIdentifier: K,
        modelSelectionField: "shopifySyncs",
        isBulk: !0,
        defaultSelection: ne,
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
const ye = {
  __typename: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  id: !0,
  updatedAt: !0
}, X = "ambiguous";
async function lc(e, t) {
  const n = P(
    this.create,
    void 0,
    e
  );
  return await w(
    this,
    "createAmbiguous",
    ye,
    X,
    X,
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
async function cc(e, t, n) {
  const r = P(
    this.update,
    e,
    t
  );
  return await w(
    this,
    "updateAmbiguous",
    ye,
    X,
    X,
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
async function fc(e, t) {
  return await w(
    this,
    "deleteAmbiguous",
    null,
    X,
    X,
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
class dc {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await le(
        this,
        "ambiguous",
        n,
        ye,
        X,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: X,
        defaultSelection: ye
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await le(
          this,
          "ambiguous",
          n,
          ye,
          X,
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
        defaultSelection: ye
      }
    ), this.findMany = Object.assign(
      async (n) => await $(
        this,
        "ambiguouss",
        ye,
        "ambiguous",
        n
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: X,
        defaultSelection: ye
      }
    ), this.findFirst = Object.assign(
      async (n) => (await $(
        this,
        "ambiguouss",
        ye,
        X,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: X,
        defaultSelection: ye
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await $(
          this,
          "ambiguouss",
          ye,
          X,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (r == null ? void 0 : r[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: X,
        defaultSelection: ye
      }
    ), this.findById = Object.assign(
      async (n, r) => await Bn(
        this,
        "ambiguouss",
        "id",
        n,
        ye,
        X,
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: X,
        defaultSelection: ye
      }
    ), this.create = Object.assign(
      lc,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: X,
        modelSelectionField: X,
        isBulk: !1,
        defaultSelection: ye,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.create,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkCreateAmbiguous",
          ye,
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
        modelApiIdentifier: X,
        modelSelectionField: "ambiguous",
        isBulk: !0,
        defaultSelection: ye,
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
      cc,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: X,
        modelSelectionField: X,
        isBulk: !1,
        defaultSelection: ye,
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
      async (n, r) => {
        const i = n.map(
          (a) => P(
            this.update,
            void 0,
            a
          )
        );
        return await w(
          this,
          "bulkUpdateAmbiguous",
          ye,
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
        modelApiIdentifier: X,
        modelSelectionField: "ambiguous",
        isBulk: !0,
        defaultSelection: ye,
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
      fc,
      {
        type: "action",
        operationName: "deleteAmbiguous",
        namespace: null,
        modelApiIdentifier: X,
        modelSelectionField: X,
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
      async (n, r) => await w(
        this,
        "bulkDeleteAmbiguous",
        null,
        "ambiguous",
        "ambiguous",
        !0,
        {
          ids: {
            value: n,
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
        modelApiIdentifier: X,
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
const Ot = {
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
}, rt = "session";
async function pc(e) {
  return await w(
    this,
    "logOut",
    Ot,
    rt,
    rt,
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
async function hc(e, t) {
  const n = P(
    this.logInViaEmail,
    void 0,
    e
  );
  return await w(
    this,
    "logInViaEmail",
    Ot,
    rt,
    rt,
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
class yc {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (n) => await le(
        this,
        "currentSession",
        void 0,
        Ot,
        "session",
        n
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: Ot
      }
    ), this.logOut = Object.assign(
      pc,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: rt,
        modelSelectionField: rt,
        isBulk: !1,
        defaultSelection: Ot,
        variables: {},
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.logInViaEmail = Object.assign(
      hc,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: rt,
        modelSelectionField: rt,
        isBulk: !1,
        defaultSelection: Ot,
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
var Ba;
const rr = "production", In = "development", mc = Symbol.for("gadget/modelRelationships"), bc = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
class gc {
  constructor(t) {
    var a;
    this.developmentApiRoot = "https://related-products-example.gadget.app/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this[Ba] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, unambiguous: {}, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {} }, this.globalShopifySync = Object.assign(
      async (s) => await Yi(
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
      async () => await Yi(
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
    ), this.transaction = async (s) => await this.connection.transaction(s), this.getDirectUploadToken = async () => (await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
      requestPolicy: "network-only"
    })).gadgetMeta.directUploadToken;
    const n = (t == null ? void 0 : t.environment) ?? bc() ?? In;
    let r = n.toLocaleLowerCase();
    r != In && r != rr && (console.warn("Invalid environment", n, "defaulting to development"), r = In);
    const i = { ...t == null ? void 0 : t.exchanges };
    if (r === In) {
      const s = ({ forward: o }) => (u) => {
        const l = o(u);
        return hu(
          l,
          At((c) => {
            if (typeof window < "u" && typeof CustomEvent == "function") {
              const p = new CustomEvent("gadget:devharness:graphqlresult", { detail: c });
              window.dispatchEvent(p);
            }
            return c;
          })
        );
      };
      i.beforeAll = [
        s,
        ...i.beforeAll ?? []
      ];
    }
    if (this.connection = new Ma({
      endpoint: new URL("api/graphql", r == rr ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: i,
      environment: r == rr ? "Production" : "Development"
    }), typeof window < "u" && this.connection.authenticationMode == ge.APIKey && !((a = t == null ? void 0 : t.authenticationMode) != null && a.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new Pl(this.connection), this.session = new kl(this.connection), this.productPairing = new jl(this.connection), this.unambiguous = new Dl(this.connection), this.shopifyProduct = new Ul(this.connection), this.shopifyProductImage = new Gl(this.connection), this.shopifyProductOption = new Jl(this.connection), this.shopifyProductVariant = new Xl(this.connection), this.shopifyShop = new ic(this.connection), this.shopifySync = new uc(this.connection), this.ambiguous = new dc(this.connection), this.currentSession = new yc(this.connection), this.internal = {
      user: new Le("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new Le("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new Le("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      unambiguous: new Le("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new Le("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new Le("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new Le("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new Le("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new Le("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new Le("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new Le("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
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
}
Ba = mc;
var Ga = {}, Gn = We.createContext(Ga);
Gn.Provider;
Gn.Consumer;
Gn.displayName = "UrqlContext";
var vc = () => {
  var e = We.useContext(Gn);
  if (e === Ga && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, Sc = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, wc = (e, t) => e === t || !(!e || !t || e.key !== t.key), ir = (e, t) => {
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
    for (var s in i)
      if (s === "operation" ? !wc(r[s], i[s]) : r[s] !== i[s])
        return !0;
    return !1;
  })(e, n) ? n : e;
}, Ic = (e, t) => {
  for (var n = 0, r = t.length; n < r; n++)
    if (e[n] !== t[n])
      return !0;
  return !1;
}, ar = We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Hi(e, t) {
  process.env.NODE_ENV !== "production" && ar && ar.ReactCurrentOwner && ar.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function Oc(e, t) {
  var n = We.useRef(void 0);
  return We.useMemo(() => {
    var r = Pn(e, t);
    return n.current !== void 0 && n.current.key === r.key ? n.current : (n.current = r, r);
  }, [e, t]);
}
var Ec = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
    e.operations$ && ht((r) => {
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
}, Pc = (e, t) => e.suspense && (!t || t.suspense !== !1);
function Ac(e) {
  var t = vc(), n = Ec(t), r = Pc(t, e.context), i = Oc(e.query, e.variables), a = We.useMemo(() => {
    if (e.pause)
      return null;
    var d = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return r ? _t((y) => {
      n.set(i.key, y);
    })(d) : d;
  }, [n, t, i, r, e.pause, e.requestPolicy, e.context]), s = We.useCallback((d, y) => {
    if (!d)
      return {
        fetching: !1
      };
    var h = n.get(i.key);
    if (h) {
      if (y && h != null && "then" in h)
        throw h;
    } else {
      var g, E = ht((O) => {
        h = O, g && g(h);
      })(Ea(() => y && !g || !h)(d));
      if (h == null && y) {
        var k = new Promise((O) => {
          g = O;
        });
        throw n.set(i.key, k), k;
      } else
        E.unsubscribe();
    }
    return h || {
      fetching: !0
    };
  }, [n, i]), o = [t, i, e.requestPolicy, e.context, e.pause], [u, l] = We.useState(() => [a, ir(Sc, s(a, r)), o]), c = u[1];
  a !== u[0] && Ic(u[2], o) && l([a, c = ir(u[1], s(a, r)), o]), We.useEffect(() => {
    var d = u[0], y = u[2][1], h = !1, g = (k) => {
      h = !0, Hi(l, (O) => {
        var T = ir(O[1], k);
        return O[1] !== T ? [O[0], T, O[2]] : O;
      });
    };
    if (d) {
      var E = ht(g)(Rr(() => {
        g({
          fetching: !1
        });
      })(d));
      return h || g({
        fetching: !0
      }), () => {
        n.dispose(y.key), E.unsubscribe();
      };
    } else
      g({
        fetching: !1
      });
  }, [n, u[0], u[2][1]]);
  var p = We.useCallback((d) => {
    var y = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...d
    };
    Hi(l, (h) => [r ? _t((g) => {
      n.set(i.key, g);
    })(t.executeQuery(i, y)) : t.executeQuery(i, y), h[1], o]);
  }, [t, n, i, r, s, e.requestPolicy, e.context]);
  return [c, p];
}
const Nc = Rn.createContext(void 0);
Rn.createContext(void 0);
const kc = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Tc = (e, t) => {
  let n = "";
  return e !== void 0 ? n = `[Network] ${e.message}` : t !== void 0 ? t.forEach((r) => {
    n += `[GraphQL] ${r.message}
`;
  }) : n = "Unknown error", n.trim();
}, _c = (e) => typeof e == "string" ? new M(e) : e != null && e.message && !e.code ? new M(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class ft extends Error {
  /** @private */
  static forClientSideError(t, n) {
    return new ft({
      executionErrors: [t],
      response: n
    });
  }
  /** @private */
  static forErrorsResponse(t, n) {
    return new ft({
      executionErrors: t.map(Mr),
      response: n
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new ft({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, n, r = !1) {
    const i = Yu(t, n);
    let a = ft.forMaybeCombinedError(t.error);
    return !a && i && !r && (a = ft.forClientSideError(i)), a;
  }
  constructor({ networkError: t, executionErrors: n, response: r }) {
    const i = (n || []).map(_c), a = Tc(t, i);
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
const xc = (e) => {
  const { context: t, suspense: n, ...r } = e ?? {}, i = sr(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...r,
    context: i
  };
}, jc = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), Cc = (e) => {
  if (!hs(Nc))
    throw new Error(kc);
  const t = xc(e);
  return Ac(t);
};
var Rc = typeof Element < "u", Fc = typeof Map == "function", Dc = typeof Set == "function", Vc = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function An(e, t) {
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
        if (!An(e[r], t[r]))
          return !1;
      return !0;
    }
    var a;
    if (Fc && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!An(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (Dc && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (Vc && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Rc && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !An(e[i[r]], t[i[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Mc = function(t, n) {
  try {
    return An(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const $c = /* @__PURE__ */ ms(Mc), Uc = (e) => {
  const t = ys();
  return e ? (t.current === void 0 || !$c(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, qc = (e, t) => {
  const n = Uc(t), r = sr(() => Qr(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, n), [e, n]), [i, a] = Cc(jc(r, t));
  return [sr(() => {
    const o = [e.findMany.operationName];
    let u = i.data;
    if (u) {
      const c = Ct(i.data, o);
      if (c) {
        const p = nn(i, c);
        u = Rt.boot(e, p, c);
      }
    }
    const l = ft.errorIfDataAbsent(i, o, t == null ? void 0 : t.pause);
    return { ...i, data: u, error: l };
  }, [e, t == null ? void 0 : t.pause, i]), a];
}, Lc = new gc(), Qc = () => {
  const [{ data: e }] = qc(Lc.shopifyProduct);
  return /* @__PURE__ */ ui.jsx(ui.Fragment, { children: JSON.stringify(e) });
};
export {
  Qc as R,
  Gc as c
};
